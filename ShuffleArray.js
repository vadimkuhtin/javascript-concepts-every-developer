const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';