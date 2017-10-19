exports.convert = function(params) {
  const result = {};
  let count = 0;
  for (let key of Object.keys(params)) {
    result['f[' + count + ']'] = key + ':' + params[key];
    count++;
  }
  return result;
}