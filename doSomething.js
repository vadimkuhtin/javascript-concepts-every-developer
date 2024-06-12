const randomString = () => Math.random().toString(36).slice(2);
const timeFromDate = date => date.toTimeString().slice(0, 8);