const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const maxNumber = arr => Math.max(...arr);