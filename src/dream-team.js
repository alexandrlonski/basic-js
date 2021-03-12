const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } else {
  const team = [];
  members.forEach(elem => (typeof elem === 'string') ? team.push(elem.trim().slice(0,1).toUpperCase()) : null);
  if(team.length === 0) {
    return false
  }
  return team.sort().join('');
  }
};
