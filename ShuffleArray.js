const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;