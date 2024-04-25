const minNumber = arr => Math.min(...arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
function myAPITS(someString: string, someNum: number) { ... };
const lastElement = arr => arr[arr.length - 1];
const isEmptyObject = obj => Object.keys(obj).length === 0;
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;