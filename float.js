const symbolsPath = path.join(buildOutputPath, 'symbols');
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const result = await makeHttpRequest(url);