import { useEffect, useState } from 'react';

/**
 * Computes the clinic's current open/closed status text based on local time.
 * - Juran Chapra: Mon–Sat 9:00 AM – 6:00 PM. Sunday: appointment only.
 * - Zero Mile: Mon–Sun 8:00 AM – 8:00 PM (All 7 Days).
 */
function computeStatus(branchId = 'juran-chapra') {
  const now = new Date();
  const day = now.getDay();
  const time = now.getHours() + now.getMinutes() / 60;

  if (branchId === 'zero-mile') {
    const isOpen = time >= 8 && time < 20;
    if (isOpen) return 'Open Today · Closes 8 PM';
    if (time < 8) return 'Opens Today at 8 AM';
    return 'Closed · Opens Tomorrow 8 AM';
  }

  // Default: Juran Chapra Main Clinic
  const isWorkday = day >= 1 && day <= 6;
  const isOpen = time >= 9 && time < 18;

  if (isWorkday && isOpen) return 'Open Today · Closes 6 PM';
  if (isWorkday && time < 9) return 'Opens Today at 9 AM';
  if (isWorkday) return day === 6 ? 'Closed · Opens Monday 9 AM' : 'Closed · Opens Tomorrow 9 AM';
  return 'Sunday · Appointment Only';
}

export function useClinicStatus(branchId = 'juran-chapra') {
  const [status, setStatus] = useState(() => computeStatus(branchId));

  useEffect(() => {
    setStatus(computeStatus(branchId));
    // Refresh every minute in case the visitor stays on the page across a boundary.
    const interval = setInterval(() => setStatus(computeStatus(branchId)), 60_000);
    return () => clearInterval(interval);
  }, [branchId]);

  return status;
}
