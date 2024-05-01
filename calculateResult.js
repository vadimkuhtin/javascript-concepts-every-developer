const merge = (a, b) => [...a, ...b];
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const getRandomBoolean = () => Math.random() >= 0.5;