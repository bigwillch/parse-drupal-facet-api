exports.convert = function(params) {
  const result = {};
  let count = 0;
  for (let key of Object.keys(params)) {
    // Arrays need to be split into individual items with the same key
    if(Array.isArray(params[key])){
      for(let i=0; i<params[key].length; i++) {
        result['f[' + count + ']'] = key + ':' + params[key][i];
        count++;
      }
    }else{
      result['f[' + count + ']'] = key + ':' + params[key];
      count++;
    }
  }
  return result;
}