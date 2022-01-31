import { getYear, add as add_date, isWithinInterval, isBefore, isSameDay as same_day} from 'date-fns';
import { DATE_UNIT_TYPES } from "./constants";

export function getCurrentYear() {
  return getYear(new Date());
}

export function add(date: Date, number: number, type = DATE_UNIT_TYPES.DAYS) : Date {
  return add_date(date, {[type]: number});
}

export function isWithinRange(date: Date, from: Date, to: Date) : boolean {
  return isWithinInterval(date, { start:from,  end:to});
}

export function isDateBefore(date: Date, compareDate: Date) : boolean {
  return isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date) : boolean {
  return same_day(date, compareDate);
}
