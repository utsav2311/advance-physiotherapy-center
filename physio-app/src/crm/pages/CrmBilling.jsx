import { useState } from 'react';
import { useCrm } from '../context/CrmContext';
import CrmBadge from '../components/CrmBadge';
import { PACKAGE_CATALOG } from '../data/packageCatalog';

export default function CrmBilling({ onNewInvoiceModal }) {
  const { invoices, recordPayment, deleteInvoice, setSelectedPatientId, setActiveTab } = useCrm();
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [payAmount, setPayAmount] = useState('');
  const [payMode, setPayMode] = useState('UPI (PhonePe / GPay)');
  const [isRecordingPay, setIsRecordingPay] = useState(false);
  const [invoiceToPay, setInvoiceToPay] = useState(null);

  // Financial calculations
  const totalInvoiced = invoices.reduce((acc, curr) => acc + (curr.total || 0), 0);
  const totalCollected = invoices.reduce((acc, curr) => acc + (curr.amountPaid || 0), 0);
  const totalPending = invoices.reduce((acc, curr) => acc + (curr.balance || 0), 0);

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setActiveTab('patient_detail');
  };

  const handleOpenPayModal = (inv) => {
    setInvoiceToPay(inv);
    setPayAmount(inv.balance);
    setIsRecordingPay(true);
  };

  const handleSavePayment = (e) => {
    e.preventDefault();
    if (!invoiceToPay || !payAmount) return;
    recordPayment(invoiceToPay.id, Number(payAmount), payMode);
    setIsRecordingPay(false);
    setInvoiceToPay(null);
  };

  return (
    <div className="crm-billing">
      {/* 1. FINANCIAL KPI SUMMARY */}
      <div className="crm-stats-grid crm-no-print">
        <div className="crm-stat-card">
          <div className="crm-stat-title">Total Billed</div>
          <div className="crm-stat-value">₹{totalInvoiced.toLocaleString('en-IN')}</div>
          <div className="crm-stat-desc">Across all packages & consultations</div>
        </div>

        <div className="crm-stat-card">
          <div className="crm-stat-title">Total Collections</div>
          <div className="crm-stat-value" style={{ color: '#059669' }}>
            ₹{totalCollected.toLocaleString('en-IN')}
          </div>
          <div className="crm-stat-desc">Cash & UPI Received</div>
        </div>

        <div className="crm-stat-card">
          <div className="crm-stat-title">Pending Balance Receivables</div>
          <div className="crm-stat-value" style={{ color: '#d97706' }}>
            ₹{totalPending.toLocaleString('en-IN')}
          </div>
          <div className="crm-stat-desc">Remaining package installments</div>
        </div>
      </div>

      {/* 2. INVOICE LIST */}
      <div className="crm-card crm-no-print">
        <div className="crm-card-header">
          <div>
            <h3 className="crm-card-title">🧾 Billing, Packages & Payment Receipts</h3>
            <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '3px' }}>
              Manage multi-session packages, track cash/UPI payments, and print official insurance receipts
            </div>
          </div>
          <button className="crm-btn crm-btn-primary" onClick={() => onNewInvoiceModal(null)}>
            + Create New Invoice
          </button>
        </div>

        <div className="crm-card-body" style={{ padding: 0 }}>
          {invoices.length === 0 ? (
            <div style={{ padding: '3rem', textAlign: 'center', color: '#64748b' }}>
              No invoices generated yet.
            </div>
          ) : (
            <div className="crm-table-wrap">
              <table className="crm-table">
                <thead>
                  <tr>
                    <th>Invoice No</th>
                    <th>Date</th>
                    <th>Patient Name</th>
                    <th>Package / Treatment</th>
                    <th>Total Fee (₹)</th>
                    <th>Amount Paid</th>
                    <th>Balance Due</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((inv) => (
                    <tr key={inv.id}>
                      <td>
                        <strong>{inv.invoiceNo}</strong>
                      </td>
                      <td>{inv.date}</td>
                      <td>
                        <button
                          style={{ background: 'none', border: 'none', padding: 0, color: '#0284c7', fontWeight: '700', cursor: 'pointer', textAlign: 'left' }}
                          onClick={() => handlePatientClick(inv.patientId)}
                        >
                          {inv.patientName}
                        </button>
                        <div style={{ fontSize: '0.75rem', color: '#64748b' }}>📱 +91 {inv.phone}</div>
                      </td>
                      <td style={{ maxWidth: '240px' }}>
                        {inv.items?.map((it) => it.name).join(', ')}
                      </td>
                      <td>
                        <strong>₹{inv.total?.toLocaleString('en-IN')}</strong>
                      </td>
                      <td style={{ color: '#059669', fontWeight: '700' }}>
                        ₹{inv.amountPaid?.toLocaleString('en-IN')}
                        <div style={{ fontSize: '0.72rem', color: '#64748b' }}>{inv.paymentMode}</div>
                      </td>
                      <td style={{ color: inv.balance > 0 ? '#ef4444' : '#64748b', fontWeight: '700' }}>
                        ₹{inv.balance?.toLocaleString('en-IN')}
                      </td>
                      <td>
                        <CrmBadge status={inv.status}>{inv.status}</CrmBadge>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '0.3rem' }}>
                          {inv.balance > 0 && (
                            <button
                              className="crm-btn crm-btn-success crm-btn-sm"
                              onClick={() => handleOpenPayModal(inv)}
                              title="Record payment"
                            >
                              + Pay
                            </button>
                          )}
                          <button
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            onClick={() => setSelectedInvoice(inv)}
                            title="Print Official Medical Receipt"
                          >
                            🖨️ Receipt
                          </button>
                          <a
                            href={`https://wa.me/91${inv.phone}?text=${encodeURIComponent(`*PAYMENT RECEIPT - ADVANCE PHYSIOTHERAPY CENTRE*\n_Dr. Sayed Shahrukh Firoz (B.P.T., M.P.T. Ortho)_\n\nDear ${inv.patientName},\nReceipt for your physiotherapy package:\n\n🧾 Invoice: *${inv.invoiceNo}*\n📅 Date: ${inv.date}\n📦 Items: ${inv.items?.map((it) => it.name).join(', ')}\n💵 Total Amount: *₹${inv.total}*\n✅ Amount Paid: *₹${inv.amountPaid}* (${inv.paymentMode})\n⚖️ Balance Due: *₹${inv.balance}*\n\nThank you for choosing Advance Physiotherapy Centre!\n📍 Juran Chapra, Muzaffarpur`)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="crm-btn crm-btn-secondary crm-btn-sm"
                            title="Send WhatsApp Receipt"
                          >
                            💬
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* 3. THERAPY PACKAGE CATALOG REFERENCE */}
      <div className="crm-card crm-no-print">
        <div className="crm-card-header">
          <h3 className="crm-card-title">📦 Standard Clinic Therapy Packages Catalog</h3>
        </div>
        <div className="crm-card-body">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {PACKAGE_CATALOG.map((pkg) => (
              <div
                key={pkg.id}
                style={{
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  background: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.4rem',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <strong style={{ fontSize: '0.98rem', color: '#0369a1' }}>{pkg.name}</strong>
                  <CrmBadge status={pkg.type}>{pkg.type}</CrmBadge>
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#1e293b', margin: '4px 0' }}>
                  ₹{pkg.price} <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#64748b' }}>({pkg.sessions} Sessions)</span>
                </div>
                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                  {pkg.description}
                </p>
                <button
                  className="crm-btn crm-btn-secondary crm-btn-sm"
                  style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
                  onClick={() => onNewInvoiceModal({ package: pkg })}
                >
                  + Select for Invoice
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RECORD PAYMENT MODAL */}
      {isRecordingPay && invoiceToPay && (
        <div className="crm-modal-backdrop" onClick={() => setIsRecordingPay(false)}>
          <div className="crm-modal" style={{ maxWidth: '450px' }} onClick={(e) => e.stopPropagation()}>
            <div className="crm-modal-header">
              <h3 className="crm-modal-title">Record Payment for {invoiceToPay.patientName}</h3>
              <button className="crm-modal-close" onClick={() => setIsRecordingPay(false)}>&times;</button>
            </div>
            <form onSubmit={handleSavePayment}>
              <div className="crm-modal-body">
                <div>
                  <strong>Invoice:</strong> {invoiceToPay.invoiceNo} (Remaining Balance: ₹{invoiceToPay.balance})
                </div>
                <div className="crm-form-group">
                  <label className="crm-label">Payment Amount (₹):</label>
                  <input
                    type="number"
                    className="crm-input"
                    max={invoiceToPay.balance}
                    min={1}
                    value={payAmount}
                    onChange={(e) => setPayAmount(e.target.value)}
                    required
                  />
                </div>
                <div className="crm-form-group">
                  <label className="crm-label">Payment Mode:</label>
                  <select
                    className="crm-select"
                    value={payMode}
                    onChange={(e) => setPayMode(e.target.value)}
                  >
                    <option value="UPI (PhonePe / GPay)">UPI (PhonePe / GPay)</option>
                    <option value="Cash">Cash</option>
                    <option value="Debit / Credit Card">Debit / Credit Card</option>
                    <option value="Bank Transfer (NEFT / IMPS)">Bank Transfer (NEFT / IMPS)</option>
                  </select>
                </div>
              </div>
              <div className="crm-modal-footer">
                <button type="button" className="crm-btn crm-btn-secondary" onClick={() => setIsRecordingPay(false)}>
                  Cancel
                </button>
                <button type="submit" className="crm-btn crm-btn-success">
                  ✓ Confirm Payment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* OFFICIAL PRINTABLE MEDICAL RECEIPT MODAL */}
      {selectedInvoice && (
        <div className="crm-modal-backdrop" onClick={() => setSelectedInvoice(null)}>
          <div className="crm-modal crm-printable-area" style={{ maxWidth: '700px' }} onClick={(e) => e.stopPropagation()}>
            <div className="crm-modal-header crm-no-print">
              <h3 className="crm-modal-title">Official Medical Payment Receipt Preview</h3>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className="crm-btn crm-btn-primary crm-btn-sm" onClick={() => window.print()}>
                  🖨️ Print Receipt
                </button>
                <button className="crm-modal-close" onClick={() => setSelectedInvoice(null)}>&times;</button>
              </div>
            </div>

            {/* RECEIPT CONTENT */}
            <div style={{ padding: '2.5rem', background: '#ffffff', color: '#1e293b', fontFamily: 'Arial, sans-serif' }}>
              {/* Header */}
              <div style={{ borderBottom: '2px solid #0284c7', paddingBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h2 style={{ margin: 0, color: '#0369a1', fontSize: '1.5rem', fontWeight: '800' }}>ADVANCE PHYSIOTHERAPY CENTRE</h2>
                  <div style={{ fontWeight: '700', fontSize: '0.95rem', color: '#1e293b', marginTop: '4px' }}>
                    Dr. Sayed Shahrukh Firoz
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    B.P.T., M.P.T. (Ortho) • MIAP Reg No: L-53874
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>
                    Zila Parishad Market, Juran Chapra, Muzaffarpur, Bihar
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ background: '#0284c7', color: '#ffffff', padding: '0.35rem 0.85rem', borderRadius: '6px', fontWeight: '800', fontSize: '0.9rem', display: 'inline-block' }}>
                    PAYMENT RECEIPT
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '6px' }}>
                    <strong>Receipt No:</strong> {selectedInvoice.invoiceNo}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>
                    <strong>Date:</strong> {selectedInvoice.date}
                  </div>
                </div>
              </div>

              {/* Patient Info */}
              <div style={{ padding: '1rem 0', borderBottom: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Billed To:</div>
                  <strong style={{ fontSize: '1.05rem' }}>{selectedInvoice.patientName}</strong>
                  <div style={{ fontSize: '0.82rem', color: '#64748b' }}>📱 +91 {selectedInvoice.phone}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Payment Mode:</div>
                  <strong>{selectedInvoice.paymentMode}</strong>
                  <div style={{ marginTop: '3px' }}>
                    <CrmBadge status={selectedInvoice.status}>{selectedInvoice.status}</CrmBadge>
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1.5rem 0' }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0', textAlign: 'left' }}>
                    <th style={{ padding: '0.75rem' }}>#</th>
                    <th style={{ padding: '0.75rem' }}>Particulars / Modalities</th>
                    <th style={{ padding: '0.75rem', textAlign: 'center' }}>Qty / Sessions</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Rate (₹)</th>
                    <th style={{ padding: '0.75rem', textAlign: 'right' }}>Amount (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedInvoice.items?.map((it, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #e2e8f0' }}>
                      <td style={{ padding: '0.75rem' }}>{idx + 1}</td>
                      <td style={{ padding: '0.75rem', fontWeight: '600' }}>{it.name}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'center' }}>{it.qty || 1}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right' }}>₹{it.rate?.toLocaleString('en-IN')}</td>
                      <td style={{ padding: '0.75rem', textAlign: 'right', fontWeight: '700' }}>
                        ₹{(it.rate * (it.qty || 1))?.toLocaleString('en-IN')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Calculation */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '1.5rem 0' }}>
                <div style={{ width: '250px', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                    <span>Subtotal:</span>
                    <span>₹{selectedInvoice.subtotal?.toLocaleString('en-IN')}</span>
                  </div>
                  {selectedInvoice.discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#059669' }}>
                      <span>Discount:</span>
                      <span>-₹{selectedInvoice.discount?.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.1rem', fontWeight: '800', borderTop: '2px solid #e2e8f0', paddingTop: '0.4rem' }}>
                    <span>Total Amount:</span>
                    <span>₹{selectedInvoice.total?.toLocaleString('en-IN')}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#059669', fontWeight: '700' }}>
                    <span>Amount Paid:</span>
                    <span>₹{selectedInvoice.amountPaid?.toLocaleString('en-IN')}</span>
                  </div>
                  {selectedInvoice.balance > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem', color: '#ef4444', fontWeight: '700' }}>
                      <span>Balance Due:</span>
                      <span>₹{selectedInvoice.balance?.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer Signature */}
              <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.78rem', color: '#64748b', maxWidth: '350px' }}>
                  * This is an authorized medical receipt for physiotherapy services rendered at Advance Physiotherapy Centre, Muzaffarpur.
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: '700', fontSize: '0.9rem' }}>Authorized Signatory</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Advance Physiotherapy Centre</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
