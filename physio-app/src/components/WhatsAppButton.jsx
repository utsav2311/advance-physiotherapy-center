import { waLink, DEFAULT_WA_MESSAGE } from '../data/site';
import { WhatsAppIcon } from './Icons';

/**
 * Reusable WhatsApp booking button.
 * className lets callers apply btn-primary/btn-lg/btn-block etc.
 */
export default function WhatsAppButton({
  message = DEFAULT_WA_MESSAGE,
  className = 'btn btn-primary',
  children = 'Book Appointment',
  showIcon = true,
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {showIcon && <WhatsAppIcon />}
      <span>{children}</span>
    </a>
  );
}
