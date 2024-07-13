const buildOutputPath = path.join(repositoryRootPath, 'out');
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;