module.exports = (key, value) => {
  if (value instanceof Headers) {
    const i = value.entries();
    const ret = {};
    let v = i.next();
    while (!v.done) {
      ret[v.value[0]] = v.value[1]
      v = i.next();
    }
    return ret;
  }
}
