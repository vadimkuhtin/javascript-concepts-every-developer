const timeFromDate = date => date.toTimeString().slice(0, 8);
const shuffledArray = array.sort(() => Math.random() - 0.5); 
const results = await Promise.all(resultingPromises);