import { AVAILABILITY, MIN_LEAD_TIME_MINUTES, SLOT_STEP_MINUTES } from "./booking-config";

export type Slot = {
  start: Date;
  end: Date;
  label: string; // "9:00 AM"
  iso: string; // ISO string for keys + payload
};

type BookedRange = { starts_at: string; ends_at: string };

function setLocalTime(date: Date, totalMinutes: number) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setMinutes(totalMinutes);
  return d;
}

function rangesOverlap(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date) {
  return aStart < bEnd && bStart < aEnd;
}

export function isDateAvailable(date: Date): boolean {
  const windows = AVAILABILITY[date.getDay()];
  return Array.isArray(windows) && windows.length > 0;
}

/**
 * Compute available slots for a given date + duration, given any already-booked
 * ranges. Pure client-side: no Google Calendar lookup yet (deferred).
 *
 * TODO(google-calendar): replace `booked` with a server-fetched union of
 * existing bookings + Google freebusy intervals.
 */
export function computeSlots(
  date: Date,
  durationMinutes: number,
  booked: BookedRange[],
): Slot[] {
  const windows = AVAILABILITY[date.getDay()] ?? [];
  if (windows.length === 0) return [];

  const now = new Date();
  const minStart = new Date(now.getTime() + MIN_LEAD_TIME_MINUTES * 60_000);

  const bookedRanges = booked.map((b) => ({
    start: new Date(b.starts_at),
    end: new Date(b.ends_at),
  }));

  const slots: Slot[] = [];

  for (const w of windows) {
    // Step through the window in SLOT_STEP_MINUTES increments. A slot is valid
    // if start+duration still fits in the window AND doesn't overlap a booking
    // AND respects min lead time.
    for (
      let minute = w.startMinute;
      minute + durationMinutes <= w.endMinute;
      minute += SLOT_STEP_MINUTES
    ) {
      const start = setLocalTime(date, minute);
      const end = setLocalTime(date, minute + durationMinutes);

      if (start < minStart) continue;

      const overlaps = bookedRanges.some((r) =>
        rangesOverlap(start, end, r.start, r.end),
      );
      if (overlaps) continue;

      slots.push({
        start,
        end,
        iso: start.toISOString(),
        label: start.toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
        }),
      });
    }
  }

  return slots;
}
