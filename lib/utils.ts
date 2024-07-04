import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import qs from "query-string";
import { z } from "zod";
import { weekdays } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const authFormSchema = (type: 'sign-in' | 'sign-up') => z.object({
  username: type === 'sign-in' ? z.string().optional() : z.string().min(5).max(20),
  city: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export const handleKeyDown = ({event, func}: HandleKeyDownParams) => {
  if (event.key === 'Enter') {
    func();
  }
}

export function formUrlQuery({ params, query, extraRoute }: UrlQueryParams) {
  const currentUrl = qs.parse(params);

  const newQueryParams = { ...currentUrl, ...query };

  return qs.stringifyUrl(
    {
      url: window.location.pathname + (extraRoute || ''),
      query: newQueryParams,
    },
    { skipNull: true }
  );
}

export function formmatedTime(hour: number, minute: number): string {
  const formattedHour = hour % 12 || 12; // convert 0-23 to 1-12 scale
  const ampm = hour < 12 ? 'AM' : 'PM';
  return `${String(formattedHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} ${ampm}`;
}

function getWeekday(index: number): string {
  return weekdays[index];
}

export function parseOpeningHours(periods: Period[] | null) {
  if (!periods) {
    return [];
  }
  return periods.map((period: Period) => ({
    weekday: getWeekday(period.open.day),
    openingHours: `${formmatedTime(period.open.hour, period.open.minute)} - ${formmatedTime(period.close.hour, period.close.minute)}`, 
    date: new Date(period.open.date.year, period.open.date.month - 1, period.open.date.day).getTime()
  })).sort((a, b) => a.date - b.date);
}

export function isTomorrow({ year, month, day }: { year: number, month: number, day: number }): boolean {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  return (
    tomorrow.getFullYear() === year &&
    tomorrow.getMonth() === month - 1 &&
    tomorrow.getDate() === day
  );
}
