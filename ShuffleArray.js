const added = [0, 1, 2, 3, 4].map((item) => item + 1);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);