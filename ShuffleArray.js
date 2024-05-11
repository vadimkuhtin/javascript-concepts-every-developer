const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;