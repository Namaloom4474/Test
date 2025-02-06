function negative(array) {
    // Separate negative and non-negative values
    const negatives = array.filter(value => value < 0);
    const nonNegatives = array.filter(value => value >= 0);
  //  console.log(array)
    // Concatenate negatives first, then non-negatives
    return [...negatives, ...nonNegatives];
  }
  
  module.exports = negative;
  