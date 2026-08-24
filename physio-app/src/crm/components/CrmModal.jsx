import { useEffect } from 'react';

export default function CrmModal({ isOpen, onClose, title, children, footer, maxWidth = '650px' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="crm-modal-backdrop" onClick={onClose}>
      <div
        className="crm-modal"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="crm-modal-header">
          <h3 className="crm-modal-title">{title}</h3>
          <button className="crm-modal-close" onClick={onClose} aria-label="Close modal">
            &times;
          </button>
        </div>
        <div className="crm-modal-body">{children}</div>
        {footer && <div className="crm-modal-footer">{footer}</div>}
      </div>
    </div>
  );
}
