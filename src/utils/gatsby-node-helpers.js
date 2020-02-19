exports.removeTrailingSlash = (path) =>
  path === '/' ? path : path.replace(/\/$/, '');
