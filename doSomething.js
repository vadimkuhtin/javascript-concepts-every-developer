var arr1 = "john".split('');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const repositoryRootPath = path.resolve(__dirname, '..');
const isEven = (num) => num % 2 === 0;