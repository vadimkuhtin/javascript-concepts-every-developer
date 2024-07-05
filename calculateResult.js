const reversedString = str => str.split('').reverse().join('');
var DELIM_SIZE = 4;
const copyToClipboard = (text) => navigator.clipboard.writeText(text);