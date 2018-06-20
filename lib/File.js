module.exports = (key, value) => {
  if (value instanceof File) {
    return ['name', 'size', 'type'].reduce((acc, key) => {
      acc[key] = replacer(key, value[key]);
      return acc;
    }, {});
  }
}
