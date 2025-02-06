function processArray(array) {
  let x = 0;
  let q = 1;

  for (let i = 0; i < array.length && array[i] !== -1; i++) {
    x += array[i];

    if (q === 1 && ((x <= 3000 && (x + array[i + 1] > 3000 && array[i + 1] != -1)) || x >= 3000)) {
     // console.log("Crossed 3000, x =", x);
      
      if (x >= 3000) {
        q = 2;
      } else {
        let excess = array[i + 1] + x - 3000;
        let adjustedValue = array[i + 1] - excess;
        array[i + 1] = adjustedValue;
        array.splice(i + 2, 0, excess);
      }
      q = 2;
    }

    if (q === 2 && ((x < 4000 && (x + array[i + 1] > 4000 && array[i + 1] !== -1)) || x >= 4000)) {
      //console.log("Crossed 4000, x =", x);

      if (x >= 4000) {
        q = 3;
      } else {
        let excess = array[i + 1] + x - 4000;
        let adjustedValue = array[i + 1] - excess;
        array[i + 1] = adjustedValue;
        array.splice(i + 2, 0, excess);
      }
      q = 3;
    }

    if (q === 3 && ((x < 5000 && (x + array[i + 1] > 5000 && array[i + 1] !== -1)) || x >= 5000)) {
      //console.log("Crossed 5000, x =", x);

      if (x >= 5000) {
        q = 4;
      } else {
        let excess = array[i + 1] + x - 5000;
        let adjustedValue = array[i + 1] - excess;
        array[i + 1] = adjustedValue;
        array.splice(i + 2, 0, excess);
      }
      q = 4;
    }

    if (q === 4 && ((x < 6000 && (x + array[i + 1] > 6000 && array[i + 1] !== -1)) || x >= 6000)) {
      //console.log("Crossed 6000, x =", x);

      if (x >= 6000) {
        q = 5;
      } else {
        let excess = array[i + 1] + x - 6000;
        let adjustedValue = array[i + 1] - excess;
        array[i + 1] = adjustedValue;
        array.splice(i + 2, 0, excess);
      }
      q = 5;
    }
    if (q === 5 && ((x < 7000 && (x + array[i + 1] > 7000 && array[i + 1] !== -1)) || x >= 7000)) {
      //console.log("Crossed 7000, x =", x);

      if (x >= 7000) {
        q = 6;
      } else {
        let excess = array[i + 1] + x - 7000;
        let adjustedValue = array[i + 1] - excess;
        array[i + 1] = adjustedValue;
        array.splice(i + 2, 0, excess);
      }
      q = 6;
    }
  }

  if (array[array.length - 1] === -1) {
    array.pop();
  }

  //console.log("Final array:", array);
  return array;
}

module.exports=processArray
