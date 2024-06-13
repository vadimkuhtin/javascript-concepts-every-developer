const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const channel = getChannel(computedAppVersion);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';