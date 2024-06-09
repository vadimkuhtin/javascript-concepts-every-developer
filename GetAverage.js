const timeFromDate = date => date.toTimeString().slice(0, 8);
var arr3 = "jones".split('');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());