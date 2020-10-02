
exports.min = function min(array) {
    if (Array.isArray(array)) {
      if (array.length !== 0) {
     const minimum = array.sort((a,b) => a - b);
     return minimum[0];
     }
    } else {
    return 0;
    } 
    return 0;
}

exports.max = function max(array) {
  if (Array.isArray(array)) {
    if (array.length !== 0) {
   const maximum = array.sort((a,b) => b - a);
   return maximum[0];
   }
  } else {
  return 0;
  } 
  return 0;
}

exports.avg = function avg(array) { 
    if (Array.isArray(array)) {
        if (array.length !== 0) {
       const result = array.reduce((acc, cur) => acc + cur, 0);
       return result / array.length;
    
       }
      } else {
      return 0;
      } 
      return 0;
    }
