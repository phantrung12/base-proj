import dayjs, { Dayjs, OpUnitType } from 'dayjs';
import {
  APP_DATETIME_FORMAT,
  APP_DATETIME_SECOND_FORMAT,
  APP_HALF_DATE_FORMAT,
  APP_HOUR_FORMAT,
  APP_LOCAL_DATE_ACTION_HISTORY_FORMAT,
  APP_LOCAL_DATE_FORMAT,
  APP_MONTH_DATE_FORMAT,
} from '../../app/config/constants';

export const convertDateTimeToServer = (date: any) =>
  date ? dayjs(date).toDate() : null;

export const convertDateTime = (date: any) =>
  date ? dayjs(date).format(APP_DATETIME_FORMAT) : null;

export const convertDateTimeSecond = (date: any) =>
  date ? dayjs(date).format(APP_DATETIME_SECOND_FORMAT) : null;

export const convertMonthAndDate = (date: any) =>
  date ? dayjs(date).format(APP_MONTH_DATE_FORMAT) : null;

export const convertDate = (date: any) =>
  date ? dayjs(date).format(APP_LOCAL_DATE_FORMAT) : null;

export const convertTime = (date: any) =>
  date ? dayjs(date).format(APP_HOUR_FORMAT) : null;

export const convertDateTimeHalfDay = (date: any) =>
  date ? dayjs(date).format(APP_HALF_DATE_FORMAT) : null;

export const displayDateActionHistory = (date: any) =>
  dayjs(date).format(APP_LOCAL_DATE_ACTION_HISTORY_FORMAT);

export function convertToIsoString(
  date?: string | number | Date | Dayjs,
  manipulate?: string,
  unit?: OpUnitType,
) {
  if (!date) return null;
  if (manipulate === 'start' && unit)
    return dayjs(date).startOf(unit).toISOString();
  if (manipulate === 'end' && unit)
    return dayjs(date).endOf(unit).toISOString();
  return dayjs(date).toISOString();
}
export function convertToIsoStringUTC(
  date?: string | number | Date | Dayjs,
  manipulate?: string,
  unit?: OpUnitType,
) {
  if (!date) return null;
  if (manipulate === 'start' && unit)
    return dayjs(date).utc(true).startOf(unit).toISOString();
  if (manipulate === 'end' && unit)
    return dayjs(date).utc(true).endOf(unit).toISOString();
  return dayjs(date).utc(true).toISOString();
}
