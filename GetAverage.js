const executableName = getExecutableName(channel, appName);
function myAPITS(someString: string, someNum: number) { ... };
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));