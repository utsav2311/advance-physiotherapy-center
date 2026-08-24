import { useState, useRef } from 'react';
import { useCrm } from '../context/CrmContext';

export default function CrmHeader({ onOpenAddPatientModal, onOpenBookAptModal }) {
  const { searchTerm, setSearchTerm, exportCrmBackup, importCrmBackup, resetToSampleData } = useCrm();
  const [showBackupMenu, setShowBackupMenu] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const res = importCrmBackup(event.target.result);
      alert(res.message);
    };
    reader.readAsText(file);
  };

  return (
    <header className="crm-header crm-no-print">
      <div className="crm-search-box">
        <svg className="crm-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          className="crm-search-input"
          placeholder="Search patients by name, phone, diagnosis..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="crm-header-actions">
        <button
          className="crm-btn crm-btn-secondary crm-btn-sm"
          onClick={onOpenBookAptModal}
          title="Schedule new patient slot"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>Book Slot</span>
        </button>

        <button
          className="crm-btn crm-btn-primary crm-btn-sm"
          onClick={onOpenAddPatientModal}
          title="Register new patient into EMR"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="15" height="15">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <span>New Patient</span>
        </button>

        {/* Data Backup Dropdown */}
        <div style={{ position: 'relative' }}>
          <button
            className="crm-btn crm-btn-secondary crm-btn-sm"
            onClick={() => setShowBackupMenu(!showBackupMenu)}
            title="Backup & Restore Clinic Data"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="15" height="15">
              <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
              <polyline points="17 21 17 13 7 13 7 21" />
              <polyline points="7 3 7 8 15 8" />
            </svg>
            <span>Backup</span>
          </button>

          {showBackupMenu && (
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '110%',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                width: '180px',
                zIndex: 100,
                padding: '0.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              <button
                style={{ textAlign: 'left', padding: '0.45rem 0.65rem', border: 'none', background: 'transparent', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer', borderRadius: '4px' }}
                onClick={() => { exportCrmBackup(); setShowBackupMenu(false); }}
              >
                📥 Export Backup (JSON)
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.45rem 0.65rem', border: 'none', background: 'transparent', fontSize: '0.82rem', fontWeight: '600', cursor: 'pointer', borderRadius: '4px' }}
                onClick={() => { fileInputRef.current?.click(); setShowBackupMenu(false); }}
              >
                📤 Restore Backup
              </button>
              <button
                style={{ textAlign: 'left', padding: '0.45rem 0.65rem', border: 'none', background: 'transparent', fontSize: '0.82rem', fontWeight: '600', color: '#ef4444', cursor: 'pointer', borderRadius: '4px' }}
                onClick={() => {
                  if (confirm('Reset CRM to initial sample data?')) {
                    resetToSampleData();
                    setShowBackupMenu(false);
                  }
                }}
              >
                🔄 Reset Sample Data
              </button>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            accept=".json"
            onChange={handleFileImport}
          />
        </div>
      </div>
    </header>
  );
}
