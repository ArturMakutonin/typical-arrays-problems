
exports.min = function min (array) {

  return Math.min.apply(null,array);
}


exports.max = function max (array) {
    if(array.lenth > 0) {
        return Math.max.apply(null, array);
    }else {
        return 0;
    }
}

exports.avg = function avg (array) {
  let sum = 0;
  for (let i = 0 ; i < array.lenth ;i++ ){
      sum += array[i];
  }
    return sum/array.lenth;
}
