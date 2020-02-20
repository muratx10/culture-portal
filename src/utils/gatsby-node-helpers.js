exports.removeTrailingSlash = (path) =>
  path === '/' ? path : path.replace(/\/$/, '');

exports.localizedSlug = ({ isDefault, locale, slug, isPage }) => {
  if (isPage) {
    return isDefault ? `/${slug}` : `/${locale}/${slug}`;
  }
  return isDefault ? `/data/person/${slug}` : `/${locale}/data/person/${slug}`;
};

exports.findKey = (object, predicate) => {
  let result;
  if (object == null) {
    return result;
  }
  Object.keys(object).some(key => {
    const value = object[key];
    if (predicate(value, key, object)) {
      result = key;
      return true;
    }
    return false;
  });
  return result;
};
