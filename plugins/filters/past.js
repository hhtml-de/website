const dayjs = require('dayjs');

module.exports = (events) => {
  return events.filter(event => {
    if (!event || !event.data) {
      return false;
    }
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    const eventDate = dayjs(event.data.date).format('YYYY-MM-DD');
    return eventDate < today;
  });
}
