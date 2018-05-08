const twoSum = (numArray, sumTarget) => {
  let startIndex = 0;
  let endIndex = numArray.length - 1;
  let targetFound = false;
  const sortedArray = numArray.slice().sort(((a, b) => a > b));

  while (!targetFound && startIndex < endIndex) {
    const total = sortedArray[startIndex] + sortedArray[endIndex];
    if (total === sumTarget) {
      targetFound = true;
    } else if (total > sumTarget) {
      endIndex -= 1;
    } else {
      startIndex += 1;
    }
  }

  return targetFound ? [numArray.indexOf(sortedArray[startIndex]), numArray.indexOf(sortedArray[endIndex])] : [];
};

module.exports = twoSum;
