import { createContext, useContext, useState, useEffect } from 'react';
import {
  INITIAL_PATIENTS,
  INITIAL_APPOINTMENTS,
  INITIAL_SESSIONS,
  INITIAL_PRESCRIPTIONS,
  INITIAL_INVOICES,
} from '../data/initialCrmData';

const CRM_STORAGE_KEY = 'ADVANCE_PHYSIO_CRM_STATE_V1';

const CrmContext = createContext(null);

export function CrmProvider({ children }) {
  // Load state from localStorage or initialize with seed data
  const [patients, setPatients] = useState(() => {
    try {
      const saved = localStorage.getItem(`${CRM_STORAGE_KEY}_patients`);
      return saved ? JSON.parse(saved) : INITIAL_PATIENTS;
    } catch {
      return INITIAL_PATIENTS;
    }
  });

  const [appointments, setAppointments] = useState(() => {
    try {
      const saved = localStorage.getItem(`${CRM_STORAGE_KEY}_appointments`);
      return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
    } catch {
      return INITIAL_APPOINTMENTS;
    }
  });

  const [sessions, setSessions] = useState(() => {
    try {
      const saved = localStorage.getItem(`${CRM_STORAGE_KEY}_sessions`);
      return saved ? JSON.parse(saved) : INITIAL_SESSIONS;
    } catch {
      return INITIAL_SESSIONS;
    }
  });

  const [prescriptions, setPrescriptions] = useState(() => {
    try {
      const saved = localStorage.getItem(`${CRM_STORAGE_KEY}_prescriptions`);
      return saved ? JSON.parse(saved) : INITIAL_PRESCRIPTIONS;
    } catch {
      return INITIAL_PRESCRIPTIONS;
    }
  });

  const [invoices, setInvoices] = useState(() => {
    try {
      const saved = localStorage.getItem(`${CRM_STORAGE_KEY}_invoices`);
      return saved ? JSON.parse(saved) : INITIAL_INVOICES;
    } catch {
      return INITIAL_INVOICES;
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  // Sync to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(`${CRM_STORAGE_KEY}_patients`, JSON.stringify(patients));
      localStorage.setItem(`${CRM_STORAGE_KEY}_appointments`, JSON.stringify(appointments));
      localStorage.setItem(`${CRM_STORAGE_KEY}_sessions`, JSON.stringify(sessions));
      localStorage.setItem(`${CRM_STORAGE_KEY}_prescriptions`, JSON.stringify(prescriptions));
      localStorage.setItem(`${CRM_STORAGE_KEY}_invoices`, JSON.stringify(invoices));
    } catch (e) {
      console.warn('LocalStorage save error in CRM:', e);
    }
  }, [patients, appointments, sessions, prescriptions, invoices]);

  // --- PATIENTS CRUD ---
  const addPatient = (patientData) => {
    const nextId = `PT-${1000 + patients.length + 1}`;
    const newPatient = {
      id: nextId,
      registeredDate: new Date().toISOString().split('T')[0],
      status: 'Active',
      completedSessions: 0,
      totalPackageSessions: patientData.totalPackageSessions || 1,
      currentPainScore: patientData.initialPainScore || 5,
      initialPainScore: patientData.initialPainScore || 5,
      docs: [],
      ...patientData,
    };
    setPatients((prev) => [newPatient, ...prev]);
    return newPatient;
  };

  const updatePatient = (id, updatedFields) => {
    setPatients((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
  };

  const deletePatient = (id) => {
    setPatients((prev) => prev.filter((p) => p.id !== id));
    setAppointments((prev) => prev.filter((a) => a.patientId !== id));
    setSessions((prev) => prev.filter((s) => s.patientId !== id));
    setPrescriptions((prev) => prev.filter((rx) => rx.patientId !== id));
    setInvoices((prev) => prev.filter((inv) => inv.patientId !== id));
  };

  const addPatientDoc = (patientId, doc) => {
    setPatients((prev) =>
      prev.map((p) =>
        p.id === patientId
          ? { ...p, docs: [...(p.docs || []), { ...doc, date: new Date().toISOString().split('T')[0] }] }
          : p
      )
    );
  };

  // --- APPOINTMENTS CRUD ---
  const addAppointment = (aptData) => {
    const nextId = `APT-${2000 + appointments.length + 1}`;
    const newApt = {
      id: nextId,
      status: 'Scheduled',
      queueToken: aptData.type === 'Home Visit' ? `HV-${appointments.length + 1}` : `T-${String(appointments.length + 1).padStart(2, '0')}`,
      paid: false,
      ...aptData,
    };
    setAppointments((prev) => [newApt, ...prev]);
    return newApt;
  };

  const updateAppointmentStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const deleteAppointment = (id) => {
    setAppointments((prev) => prev.filter((a) => a.id !== id));
  };

  // --- SESSIONS & PAIN LOGS CRUD ---
  const addSession = (sessionData) => {
    const nextId = `SES-${3000 + sessions.length + 1}`;
    const newSession = {
      id: nextId,
      date: new Date().toISOString().split('T')[0],
      therapist: 'Dr. Sayed Shahrukh Firoz',
      ...sessionData,
    };
    setSessions((prev) => [newSession, ...prev]);

    // Update patient pain score & completed session count
    if (sessionData.patientId) {
      setPatients((prev) =>
        prev.map((p) => {
          if (p.id === sessionData.patientId) {
            const nextCompleted = (p.completedSessions || 0) + 1;
            const isFinished = nextCompleted >= (p.totalPackageSessions || 1);
            return {
              ...p,
              completedSessions: nextCompleted,
              currentPainScore: sessionData.postPainScore ?? p.currentPainScore,
              status: isFinished ? 'Completed' : 'Active',
            };
          }
          return p;
        })
      );
    }
    return newSession;
  };

  // --- PRESCRIPTIONS CRUD ---
  const addPrescription = (rxData) => {
    const nextId = `RX-${4000 + prescriptions.length + 1}`;
    const newRx = {
      id: nextId,
      date: new Date().toISOString().split('T')[0],
      ...rxData,
    };
    setPrescriptions((prev) => [newRx, ...prev]);
    return newRx;
  };

  const deletePrescription = (id) => {
    setPrescriptions((prev) => prev.filter((rx) => rx.id !== id));
  };

  // --- INVOICES CRUD ---
  const addInvoice = (invData) => {
    const nextId = `INV-${5000 + invoices.length + 1}`;
    const nextInvoiceNo = `APC/2026/08/${100 + invoices.length + 1}`;
    const subtotal = invData.items.reduce((acc, it) => acc + (it.rate * (it.qty || 1)), 0);
    const discount = Number(invData.discount || 0);
    const total = Math.max(0, subtotal - discount);
    const amountPaid = Number(invData.amountPaid || 0);
    const balance = Math.max(0, total - amountPaid);
    const status = balance === 0 ? 'Paid' : amountPaid > 0 ? 'Partial' : 'Unpaid';

    const newInv = {
      id: nextId,
      invoiceNo: nextInvoiceNo,
      date: new Date().toISOString().split('T')[0],
      subtotal,
      discount,
      total,
      amountPaid,
      balance,
      status,
      ...invData,
    };
    setInvoices((prev) => [newInv, ...prev]);
    return newInv;
  };

  const recordPayment = (invoiceId, paymentAmount, paymentMode) => {
    setInvoices((prev) =>
      prev.map((inv) => {
        if (inv.id === invoiceId) {
          const newPaid = inv.amountPaid + Number(paymentAmount);
          const newBalance = Math.max(0, inv.total - newPaid);
          const newStatus = newBalance === 0 ? 'Paid' : 'Partial';
          return {
            ...inv,
            amountPaid: newPaid,
            balance: newBalance,
            status: newStatus,
            paymentMode: paymentMode || inv.paymentMode,
          };
        }
        return inv;
      })
    );
  };

  const deleteInvoice = (id) => {
    setInvoices((prev) => prev.filter((inv) => inv.id !== id));
  };

  // --- DATA BACKUP & RESTORE ---
  const exportCrmBackup = () => {
    const backupData = {
      patients,
      appointments,
      sessions,
      prescriptions,
      invoices,
      exportedAt: new Date().toISOString(),
      clinic: 'Advance Physiotherapy Centre, Muzaffarpur',
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Advance_Physio_CRM_Backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importCrmBackup = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.patients) setPatients(data.patients);
      if (data.appointments) setAppointments(data.appointments);
      if (data.sessions) setSessions(data.sessions);
      if (data.prescriptions) setPrescriptions(data.prescriptions);
      if (data.invoices) setInvoices(data.invoices);
      return { success: true, message: 'CRM data restored successfully!' };
    } catch (e) {
      return { success: false, message: `Invalid backup file: ${e.message}` };
    }
  };

  const resetToSampleData = () => {
    setPatients(INITIAL_PATIENTS);
    setAppointments(INITIAL_APPOINTMENTS);
    setSessions(INITIAL_SESSIONS);
    setPrescriptions(INITIAL_PRESCRIPTIONS);
    setInvoices(INITIAL_INVOICES);
    localStorage.removeItem(`${CRM_STORAGE_KEY}_patients`);
    localStorage.removeItem(`${CRM_STORAGE_KEY}_appointments`);
    localStorage.removeItem(`${CRM_STORAGE_KEY}_sessions`);
    localStorage.removeItem(`${CRM_STORAGE_KEY}_prescriptions`);
    localStorage.removeItem(`${CRM_STORAGE_KEY}_invoices`);
  };

  return (
    <CrmContext.Provider
      value={{
        patients,
        appointments,
        sessions,
        prescriptions,
        invoices,
        searchTerm,
        setSearchTerm,
        activeTab,
        setActiveTab,
        selectedPatientId,
        setSelectedPatientId,
        // Patient actions
        addPatient,
        updatePatient,
        deletePatient,
        addPatientDoc,
        // Appointment actions
        addAppointment,
        updateAppointmentStatus,
        deleteAppointment,
        // Session actions
        addSession,
        // Prescription actions
        addPrescription,
        deletePrescription,
        // Invoice actions
        addInvoice,
        recordPayment,
        deleteInvoice,
        // Backup
        exportCrmBackup,
        importCrmBackup,
        resetToSampleData,
      }}
    >
      {children}
    </CrmContext.Provider>
  );
}

export function useCrm() {
  const context = useContext(CrmContext);
  if (!context) {
    throw new Error('useCrm must be used within a CrmProvider');
  }
  return context;
}
