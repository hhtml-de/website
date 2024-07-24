import dayjs from 'dayjs';

/** Formats a date using dayjs's conventions: https://day.js.org/docs/en/display/format */
export default (date, format) => dayjs(date).format(format);
