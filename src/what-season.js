const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  if(!date){
    return 'Unable to determine the time of year!' 
  } else if(date.hasOwnProperty('getMonth')) {
    throw new Error();
  }
   return seasons[Math.floor(((date.getMonth() + 1) % 12) / 3)];
};

