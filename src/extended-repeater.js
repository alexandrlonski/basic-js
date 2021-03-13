const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' } ) {
  
  const string = String(str),
        add = String(addition),
        result = [];

  for (let i = 0; i < repeatTimes; i++) {
    result.push(string); 
    for (let j = 0; j < additionRepeatTimes; j++) {
      result.push(add);
       if (j < additionRepeatTimes - 1) 
        result.push(additionSeparator);
    }
    if (i < repeatTimes - 1) 
      result.push(separator);
    
  }
  return result.join('');
};
  