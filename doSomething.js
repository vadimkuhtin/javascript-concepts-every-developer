const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());