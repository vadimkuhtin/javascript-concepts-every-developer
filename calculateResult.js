const shuffledArray = array.sort(() => Math.random() - 0.5); 
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const arrayContains = (arr, element) => arr.includes(element);