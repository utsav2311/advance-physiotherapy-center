import { useState } from 'react';
import { CrmProvider, useCrm } from '../context/CrmContext';
import CrmSidebar from './CrmSidebar';
import CrmHeader from './CrmHeader';
import CrmMobileNav from './CrmMobileNav';
import CrmModal from './CrmModal';
import CrmDashboard from '../pages/CrmDashboard';
import CrmPatients from '../pages/CrmPatients';
import CrmPatientDetail from '../pages/CrmPatientDetail';
import CrmAppointments from '../pages/CrmAppointments';
import CrmRehabTracker from '../pages/CrmRehabTracker';
import CrmPrescriptions from '../pages/CrmPrescriptions';
import CrmBilling from '../pages/CrmBilling';
import CrmWhatsApp from '../pages/CrmWhatsApp';
import CrmAnalytics from '../pages/CrmAnalytics';
import { EXERCISE_LIBRARY } from '../data/exerciseLibrary';
import { PACKAGE_CATALOG } from '../data/packageCatalog';
import '../styles/crm.css';

function CrmContent() {
  const {
    activeTab,
    setActiveTab,
    patients,
    addPatient,
    addAppointment,
    addSession,
    addPrescription,
    addInvoice,
    selectedPatientId,
    setSelectedPatientId,
  } = useCrm();

  // Modals state
  const [showAddPatientModal, setShowAddPatientModal] = useState(false);
  const [showBookAptModal, setShowBookAptModal] = useState(false);
  const [showLogSessionModal, setShowLogSessionModal] = useState(false);
  const [showNewRxModal, setShowNewRxModal] = useState(false);
  const [showNewInvoiceModal, setShowNewInvoiceModal] = useState(false);

  // Form states
  const [newPatientForm, setNewPatientForm] = useState({
    name: '',
    phone: '',
    age: '',
    gender: 'Male',
    occupation: '',
    address: '',
    diagnosis: '',
    bodyRegion: 'spine',
    visitType: 'In-Clinic',
    chiefComplaint: '',
    initialPainScore: 7,
    totalPackageSessions: 7,
  });

  const [newAptForm, setNewAptForm] = useState({
    patientId: '',
    date: new Date().toISOString().split('T')[0],
    time: '10:00 AM',
    type: 'In-Clinic',
    location: '',
  });

  const [sessionForm, setSessionForm] = useState({
    patientId: '',
    sessionNumber: 1,
    prePainScore: 6,
    postPainScore: 3,
    modalities: ['Dry Cupping', 'IFT'],
    notes: '',
  });

  const [rxForm, setRxForm] = useState({
    patientId: '',
    selectedExercises: [],
    precautions: 'Perform in pain-free range. Avoid sudden jerking.',
    nextFollowUp: '',
  });

  const [invoiceForm, setInvoiceForm] = useState({
    patientId: '',
    packageId: 'pkg-spine-7',
    discount: 0,
    amountPaid: 2400,
    paymentMode: 'UPI (PhonePe / GPay)',
  });

  // Modal open handlers
  const handleOpenLogSession = (patient) => {
    const targetPt = patient || patients[0];
    if (targetPt) {
      setSessionForm({
        patientId: targetPt.id,
        sessionNumber: (targetPt.completedSessions || 0) + 1,
        prePainScore: targetPt.currentPainScore || 6,
        postPainScore: Math.max(1, (targetPt.currentPainScore || 6) - 2),
        modalities: ['Dry Cupping', 'IFT'],
        notes: '',
      });
    }
    setShowLogSessionModal(true);
  };

  const handleOpenNewRx = (patient) => {
    const targetPt = patient || patients[0];
    if (targetPt) {
      setRxForm({
        patientId: targetPt.id,
        selectedExercises: [EXERCISE_LIBRARY[0], EXERCISE_LIBRARY[1]],
        precautions: 'Perform twice daily. Stop if sharp pain occurs.',
        nextFollowUp: new Date(Date.now() + 7 * 86400000).toISOString().split('T')[0],
      });
    }
    setShowNewRxModal(true);
  };

  const handleOpenNewInvoice = (patientOrPkg) => {
    const targetPt = (patientOrPkg && patientOrPkg.id ? patientOrPkg : null) || patients[0];
    const pkg = (patientOrPkg && patientOrPkg.package ? patientOrPkg.package : null) || PACKAGE_CATALOG[1];
    if (targetPt) {
      setInvoiceForm({
        patientId: targetPt.id,
        packageId: pkg.id,
        discount: 0,
        amountPaid: pkg.price,
        paymentMode: 'UPI (PhonePe / GPay)',
      });
    }
    setShowNewInvoiceModal(true);
  };

  // Form Submissions
  const handleCreatePatient = (e) => {
    e.preventDefault();
    if (!newPatientForm.name || !newPatientForm.phone) return;
    const created = addPatient({
      ...newPatientForm,
      age: Number(newPatientForm.age || 30),
      initialPainScore: Number(newPatientForm.initialPainScore),
      totalPackageSessions: Number(newPatientForm.totalPackageSessions || 1),
    });
    setShowAddPatientModal(false);
    setSelectedPatientId(created.id);
    setActiveTab('patient_detail');
  };

  const handleCreateAppointment = (e) => {
    e.preventDefault();
    const pt = patients.find((p) => p.id === newAptForm.patientId) || patients[0];
    if (!pt) return;
    addAppointment({
      patientId: pt.id,
      patientName: pt.name,
      phone: pt.phone,
      diagnosis: pt.diagnosis,
      date: newAptForm.date,
      time: newAptForm.time,
      type: newAptForm.type,
      location: newAptForm.type === 'Home Visit' ? newAptForm.location || pt.address : 'Juran Chapra Chamber',
      sessionNumber: `${(pt.completedSessions || 0) + 1} of ${pt.totalPackageSessions || 1}`,
    });
    setShowBookAptModal(false);
  };

  const handleSaveSession = (e) => {
    e.preventDefault();
    const pt = patients.find((p) => p.id === sessionForm.patientId) || patients[0];
    if (!pt) return;
    addSession({
      patientId: pt.id,
      patientName: pt.name,
      sessionNumber: Number(sessionForm.sessionNumber),
      prePainScore: Number(sessionForm.prePainScore),
      postPainScore: Number(sessionForm.postPainScore),
      modalities: sessionForm.modalities,
      notes: sessionForm.notes,
    });
    setShowLogSessionModal(false);
  };

  const handleSaveRx = (e) => {
    e.preventDefault();
    const pt = patients.find((p) => p.id === rxForm.patientId) || patients[0];
    if (!pt) return;
    addPrescription({
      patientId: pt.id,
      patientName: pt.name,
      diagnosis: pt.diagnosis,
      exercises: rxForm.selectedExercises.map((ex) => ({
        name: ex.name,
        sets: ex.defaultSets || '3 sets',
        reps: ex.defaultReps || '10 reps',
        hold: ex.holdTime || '5 sec hold',
        notes: ex.precautions || '',
      })),
      precautions: rxForm.precautions,
      nextFollowUp: rxForm.nextFollowUp,
    });
    setShowNewRxModal(false);
  };

  const handleSaveInvoice = (e) => {
    e.preventDefault();
    const pt = patients.find((p) => p.id === invoiceForm.patientId) || patients[0];
    const pkg = PACKAGE_CATALOG.find((k) => k.id === invoiceForm.packageId) || PACKAGE_CATALOG[0];
    if (!pt || !pkg) return;
    addInvoice({
      patientId: pt.id,
      patientName: pt.name,
      phone: pt.phone,
      items: [{ name: pkg.name, qty: 1, rate: pkg.price, amount: pkg.price }],
      discount: Number(invoiceForm.discount || 0),
      amountPaid: Number(invoiceForm.amountPaid || 0),
      paymentMode: invoiceForm.paymentMode,
    });
    setShowNewInvoiceModal(false);
  };

  return (
    <div className="crm-root">
      <CrmSidebar />
      <div className="crm-main">
        <CrmHeader
          onOpenAddPatientModal={() => setShowAddPatientModal(true)}
          onOpenBookAptModal={() => setShowBookAptModal(true)}
        />
        <main className="crm-body">
          {activeTab === 'dashboard' && (
            <CrmDashboard
              onOpenAddPatientModal={() => setShowAddPatientModal(true)}
              onOpenBookAptModal={() => setShowBookAptModal(true)}
            />
          )}
          {activeTab === 'patients' && (
            <CrmPatients onOpenAddPatientModal={() => setShowAddPatientModal(true)} />
          )}
          {activeTab === 'patient_detail' && (
            <CrmPatientDetail
              onBack={() => setActiveTab('patients')}
              onLogSession={handleOpenLogSession}
              onNewRx={handleOpenNewRx}
              onNewInvoice={handleOpenNewInvoice}
            />
          )}
          {activeTab === 'appointments' && (
            <CrmAppointments onOpenBookAptModal={() => setShowBookAptModal(true)} />
          )}
          {activeTab === 'rehab' && (
            <CrmRehabTracker onLogSession={handleOpenLogSession} />
          )}
          {activeTab === 'prescriptions' && (
            <CrmPrescriptions onNewRxModal={handleOpenNewRx} />
          )}
          {activeTab === 'billing' && (
            <CrmBilling onNewInvoiceModal={handleOpenNewInvoice} />
          )}
          {activeTab === 'whatsapp' && <CrmWhatsApp />}
          {activeTab === 'analytics' && <CrmAnalytics />}
        </main>
      </div>
      <CrmMobileNav />

      {/* 1. REGISTER NEW PATIENT MODAL */}
      <CrmModal
        isOpen={showAddPatientModal}
        onClose={() => setShowAddPatientModal(false)}
        title="Register New Patient (EMR Intake)"
      >
        <form onSubmit={handleCreatePatient}>
          <div className="crm-modal-body">
            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Patient Full Name *</label>
                <input
                  type="text"
                  className="crm-input"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newPatientForm.name}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, name: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Mobile Phone *</label>
                <input
                  type="tel"
                  className="crm-input"
                  required
                  placeholder="10-digit mobile number"
                  value={newPatientForm.phone}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Age</label>
                <input
                  type="number"
                  className="crm-input"
                  placeholder="Age"
                  value={newPatientForm.age}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, age: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Gender</label>
                <select
                  className="crm-select"
                  value={newPatientForm.gender}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, gender: e.target.value })}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Care Type</label>
                <select
                  className="crm-select"
                  value={newPatientForm.visitType}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, visitType: e.target.value })}
                >
                  <option value="In-Clinic">In-Clinic (Juran Chapra)</option>
                  <option value="Home Visit">Home Visit Care</option>
                </select>
              </div>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Anatomical Region</label>
                <select
                  className="crm-select"
                  value={newPatientForm.bodyRegion}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, bodyRegion: e.target.value })}
                >
                  <option value="spine">Spine & Lower Back (Lumbar)</option>
                  <option value="cervical">Neck & Cervical Spine</option>
                  <option value="knee_hip">Knee & Hip Joints</option>
                  <option value="shoulder">Shoulder & Upper Limb</option>
                  <option value="neuro">Neurological / Stroke Rehab</option>
                </select>
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Primary Diagnosis / Ailment</label>
                <input
                  type="text"
                  className="crm-input"
                  placeholder="e.g. L4-L5 Disc Bulge, Sciatica"
                  value={newPatientForm.diagnosis}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, diagnosis: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Address / Locality (Muzaffarpur)</label>
                <input
                  type="text"
                  className="crm-input"
                  placeholder="e.g. Brahmapura, Mithanpura"
                  value={newPatientForm.address}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, address: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Occupation (Ergonomics)</label>
                <input
                  type="text"
                  className="crm-input"
                  placeholder="e.g. Desk Worker, Teacher"
                  value={newPatientForm.occupation}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, occupation: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Chief Complaint & Symptoms</label>
              <textarea
                className="crm-textarea"
                rows="2"
                placeholder="Pain duration, radiating pain, aggravating factors..."
                value={newPatientForm.chiefComplaint}
                onChange={(e) => setNewPatientForm({ ...newPatientForm, chiefComplaint: e.target.value })}
              />
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Initial Pain VAS (1-10): {newPatientForm.initialPainScore}/10</label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={newPatientForm.initialPainScore}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, initialPainScore: Number(e.target.value) })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Target Package Sessions</label>
                <input
                  type="number"
                  className="crm-input"
                  min="1"
                  value={newPatientForm.totalPackageSessions}
                  onChange={(e) => setNewPatientForm({ ...newPatientForm, totalPackageSessions: Number(e.target.value) })}
                />
              </div>
            </div>
          </div>
          <div className="crm-modal-footer">
            <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setShowAddPatientModal(false)}>
              Cancel
            </button>
            <button type="submit" className="crm-btn crm-btn-primary">
              ✓ Save & Open EMR Profile
            </button>
          </div>
        </form>
      </CrmModal>

      {/* 2. BOOK APPOINTMENT MODAL */}
      <CrmModal
        isOpen={showBookAptModal}
        onClose={() => setShowBookAptModal(false)}
        title="Schedule Appointment Slot"
      >
        <form onSubmit={handleCreateAppointment}>
          <div className="crm-modal-body">
            <div className="crm-form-group">
              <label className="crm-label">Select Patient *</label>
              <select
                className="crm-select"
                required
                value={newAptForm.patientId}
                onChange={(e) => setNewAptForm({ ...newAptForm, patientId: e.target.value })}
              >
                <option value="">-- Choose Patient --</option>
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.diagnosis})
                  </option>
                ))}
              </select>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Date *</label>
                <input
                  type="date"
                  className="crm-input"
                  required
                  value={newAptForm.date}
                  onChange={(e) => setNewAptForm({ ...newAptForm, date: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Time Slot *</label>
                <input
                  type="text"
                  className="crm-input"
                  required
                  placeholder="e.g. 10:30 AM"
                  value={newAptForm.time}
                  onChange={(e) => setNewAptForm({ ...newAptForm, time: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Visit Type</label>
              <select
                className="crm-select"
                value={newAptForm.type}
                onChange={(e) => setNewAptForm({ ...newAptForm, type: e.target.value })}
              >
                <option value="In-Clinic">In-Clinic (Juran Chapra Chamber)</option>
                <option value="Home Visit">Home Visit Care</option>
              </select>
            </div>

            {newAptForm.type === 'Home Visit' && (
              <div className="crm-form-group">
                <label className="crm-label">Home Visit Location</label>
                <input
                  type="text"
                  className="crm-input"
                  placeholder="e.g. Mithanpura, Gobarsahi"
                  value={newAptForm.location}
                  onChange={(e) => setNewAptForm({ ...newAptForm, location: e.target.value })}
                />
              </div>
            )}
          </div>
          <div className="crm-modal-footer">
            <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setShowBookAptModal(false)}>
              Cancel
            </button>
            <button type="submit" className="crm-btn crm-btn-primary">
              ✓ Confirm Slot
            </button>
          </div>
        </form>
      </CrmModal>

      {/* 3. LOG CLINICAL SESSION MODAL */}
      <CrmModal
        isOpen={showLogSessionModal}
        onClose={() => setShowLogSessionModal(false)}
        title="⚡ Log Treatment Session & Modalities"
      >
        <form onSubmit={handleSaveSession}>
          <div className="crm-modal-body">
            <div className="crm-form-group">
              <label className="crm-label">Patient</label>
              <select
                className="crm-select"
                value={sessionForm.patientId}
                onChange={(e) => setSessionForm({ ...sessionForm, patientId: e.target.value })}
              >
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.diagnosis})
                  </option>
                ))}
              </select>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Session Number</label>
                <input
                  type="number"
                  className="crm-input"
                  value={sessionForm.sessionNumber}
                  onChange={(e) => setSessionForm({ ...sessionForm, sessionNumber: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Pre-Session Pain VAS (1-10)</label>
                <input
                  type="number"
                  min="1"
                  max="10"
                  className="crm-input"
                  value={sessionForm.prePainScore}
                  onChange={(e) => setSessionForm({ ...sessionForm, prePainScore: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Post-Session Pain VAS (1-10)</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  className="crm-input"
                  value={sessionForm.postPainScore}
                  onChange={(e) => setSessionForm({ ...sessionForm, postPainScore: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Select Applied Modalities</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.4rem' }}>
                {[
                  'Dry Cupping',
                  'Wet Cupping (Hijama)',
                  'Fire Cupping',
                  'Dry Needling',
                  'Spinal Mobilization',
                  'Kinesiology Taping',
                  'IFT Therapy',
                  'TENS Stimulation',
                  'Therapeutic Ultrasound',
                  'Lumbar Traction',
                  'Exercise Therapy',
                ].map((mod) => (
                  <label key={mod} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.84rem' }}>
                    <input
                      type="checkbox"
                      checked={sessionForm.modalities.includes(mod)}
                      onChange={(e) => {
                        const nextMods = e.target.checked
                          ? [...sessionForm.modalities, mod]
                          : sessionForm.modalities.filter((m) => m !== mod);
                        setSessionForm({ ...sessionForm, modalities: nextMods });
                      }}
                    />
                    <span>{mod}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Therapist Clinical Notes / Response</label>
              <textarea
                className="crm-textarea"
                rows="2"
                placeholder="Patient response, ROM gain, trigger point release notes..."
                value={sessionForm.notes}
                onChange={(e) => setSessionForm({ ...sessionForm, notes: e.target.value })}
              />
            </div>
          </div>
          <div className="crm-modal-footer">
            <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setShowLogSessionModal(false)}>
              Cancel
            </button>
            <button type="submit" className="crm-btn crm-btn-primary">
              ✓ Record Session Log
            </button>
          </div>
        </form>
      </CrmModal>

      {/* 4. CREATE PRESCRIPTION MODAL */}
      <CrmModal
        isOpen={showNewRxModal}
        onClose={() => setShowNewRxModal(false)}
        title="🏋️ Prescribe Home Exercises"
      >
        <form onSubmit={handleSaveRx}>
          <div className="crm-modal-body">
            <div className="crm-form-group">
              <label className="crm-label">Patient</label>
              <select
                className="crm-select"
                value={rxForm.patientId}
                onChange={(e) => setRxForm({ ...rxForm, patientId: e.target.value })}
              >
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.diagnosis})
                  </option>
                ))}
              </select>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Select Targeted Exercises from Catalog</label>
              <div style={{ maxHeight: '200px', overflowY: 'auto', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {EXERCISE_LIBRARY.map((ex) => (
                  <label key={ex.id} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem' }}>
                    <input
                      type="checkbox"
                      checked={rxForm.selectedExercises.some((e) => e.id === ex.id)}
                      onChange={(e) => {
                        const nextList = e.target.checked
                          ? [...rxForm.selectedExercises, ex]
                          : rxForm.selectedExercises.filter((x) => x.id !== ex.id);
                        setRxForm({ ...rxForm, selectedExercises: nextList });
                      }}
                    />
                    <span>
                      <strong>{ex.name}</strong> ({ex.hindiName})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Postural Advice & Precautions</label>
                <input
                  type="text"
                  className="crm-input"
                  value={rxForm.precautions}
                  onChange={(e) => setRxForm({ ...rxForm, precautions: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Next Follow-up Review Date</label>
                <input
                  type="date"
                  className="crm-input"
                  value={rxForm.nextFollowUp}
                  onChange={(e) => setRxForm({ ...rxForm, nextFollowUp: e.target.value })}
                />
              </div>
            </div>
          </div>
          <div className="crm-modal-footer">
            <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setShowNewRxModal(false)}>
              Cancel
            </button>
            <button type="submit" className="crm-btn crm-btn-primary">
              ✓ Issue Prescription
            </button>
          </div>
        </form>
      </CrmModal>

      {/* 5. CREATE INVOICE MODAL */}
      <CrmModal
        isOpen={showNewInvoiceModal}
        onClose={() => setShowNewInvoiceModal(false)}
        title="🧾 Generate Bill / Therapy Invoice"
      >
        <form onSubmit={handleSaveInvoice}>
          <div className="crm-modal-body">
            <div className="crm-form-group">
              <label className="crm-label">Billed Patient</label>
              <select
                className="crm-select"
                value={invoiceForm.patientId}
                onChange={(e) => setInvoiceForm({ ...invoiceForm, patientId: e.target.value })}
              >
                {patients.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} (📱 +91 {p.phone})
                  </option>
                ))}
              </select>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Treatment Package / Particulars</label>
              <select
                className="crm-select"
                value={invoiceForm.packageId}
                onChange={(e) => {
                  const pkg = PACKAGE_CATALOG.find((k) => k.id === e.target.value);
                  setInvoiceForm({
                    ...invoiceForm,
                    packageId: e.target.value,
                    amountPaid: pkg ? pkg.price : invoiceForm.amountPaid,
                  });
                }}
              >
                {PACKAGE_CATALOG.map((pkg) => (
                  <option key={pkg.id} value={pkg.id}>
                    {pkg.name} — ₹{pkg.price} ({pkg.sessions} Sessions)
                  </option>
                ))}
              </select>
            </div>

            <div className="crm-form-row">
              <div className="crm-form-group">
                <label className="crm-label">Discount (₹)</label>
                <input
                  type="number"
                  className="crm-input"
                  value={invoiceForm.discount}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, discount: e.target.value })}
                />
              </div>
              <div className="crm-form-group">
                <label className="crm-label">Amount Paid Today (₹)</label>
                <input
                  type="number"
                  className="crm-input"
                  value={invoiceForm.amountPaid}
                  onChange={(e) => setInvoiceForm({ ...invoiceForm, amountPaid: e.target.value })}
                />
              </div>
            </div>

            <div className="crm-form-group">
              <label className="crm-label">Payment Mode</label>
              <select
                className="crm-select"
                value={invoiceForm.paymentMode}
                onChange={(e) => setInvoiceForm({ ...invoiceForm, paymentMode: e.target.value })}
              >
                <option value="UPI (PhonePe / GPay)">UPI (PhonePe / GPay)</option>
                <option value="Cash">Cash</option>
                <option value="Debit / Credit Card">Debit / Credit Card</option>
                <option value="Bank Transfer (NEFT / IMPS)">Bank Transfer (NEFT / IMPS)</option>
              </select>
            </div>
          </div>
          <div className="crm-modal-footer">
            <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setShowNewInvoiceModal(false)}>
              Cancel
            </button>
            <button type="submit" className="crm-btn crm-btn-primary">
              ✓ Generate Invoice & Receipt
            </button>
          </div>
        </form>
      </CrmModal>
    </div>
  );
}

export default function CrmLayout() {
  return (
    <CrmProvider>
      <CrmContent />
    </CrmProvider>
  );
}
