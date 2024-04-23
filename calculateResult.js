const isTabInView = () => !document.hidden;
const merge = Object.assign({}, obj1, obj2);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());