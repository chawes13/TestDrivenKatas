const wrap = (line, maxLen) => {
  if(line.length <= maxLen)
    return line
  let wordArray = line.split(' ');
  let counter = 0;
  let result = "";
  result = wordArray.reduce( (result,word) => {
    counter += word.length
    if(counter<= maxLen){
      result += word + ' ';
      counter++;
    } else {
      result = result.trim();
      result += '\n' + word + ' ';
      counter = word.length + 1;
    }
    return result;
  },'');
  return result.trim();
 }
 module.exports = wrap;
