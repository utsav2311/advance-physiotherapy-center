import { useEffect, useState } from 'react';

/**
 * Computes the clinic's current open/closed status text based on local time.
 * Hours: Mon–Sat 9:00 AM – 6:00 PM. Sunday: appointment only.
 */
function computeStatus() {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;

  const isWorkday = day >= 1 && day <= 6;
  const isOpen = time >= 9 && time < 18;

  if (isWorkday && isOpen) return 'Open Today · Closes 6 PM';
  if (isWorkday && time < 9) return 'Opens Today at 9 AM';
  if (isWorkday) return day === 6 ? 'Closed · Opens Monday 9 AM' : 'Closed · Opens Tomorrow 9 AM';
  return 'Sunday · Appointment Only';
}

export function useClinicStatus() {
  const [status, setStatus] = useState(computeStatus);

  useEffect(() => {
    // Refresh every minute in case the visitor stays on the page across a boundary.
    const interval = setInterval(() => setStatus(computeStatus()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return status;
}
