module.exports = (key, value) => {
  if (value instanceof Request) {
    return ['method', 'url', 'headers', 'referrer', 'mode', 'body'].reduce((acc, key) => {
      acc[key] = replacer(key, value[key]);
      return acc;
    }, {});
  }
}
