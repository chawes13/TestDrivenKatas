const longestCommonPrefix = (words) => {
  let prefix = words[0] || '';
  let endIndex = prefix.length - 1;
  let hasMatch = false;

  const contains = (word) => {
    return word.indexOf(prefix) !== -1;
  };

  while (!hasMatch && endIndex >= 0) {
    hasMatch = words.every(contains);
    if (!hasMatch) {
      prefix = prefix.slice(0, --endIndex);
    }
  }

  return prefix;
};

// Fullstack solution
/* const longestCommonPrefix = strs => {
  if (!strs.length) return '';
  for (let charIdx = 0; charIdx < strs[0].length; charIdx++) {
    for (let strIdx = 0; strIdx < strs.length; strIdx++) {
      if (strs[strIdx][charIdx] !== strs[0][charIdx]) return strs[0].slice(0, charIdx);
    }
  }
  return strs[0];
}; */

module.exports = longestCommonPrefix;
