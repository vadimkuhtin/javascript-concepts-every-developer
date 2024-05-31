const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));