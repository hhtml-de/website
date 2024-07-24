import dayjs from 'dayjs';

/** Converts the given date string to ISO8610 format. */
export default (dateString) => dayjs(dateString).toISOString();
