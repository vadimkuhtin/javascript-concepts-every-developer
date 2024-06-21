const resultingPromises = urls.map((url) => makHttpRequest(url));
const results = await Promise.all(resultingPromises);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');