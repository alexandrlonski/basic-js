const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this.alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  }

  encrypt(str, key) {
    const arrStr = [...str.toUpperCase()];
    const allKey = [...key.toUpperCase()];
    let i = 0;
    let result = arrStr.map( el => {
      if (this.alphabet.includes(el)) {
        let index = (this.alphabet.indexOf(allKey[i]) + this.alphabet.indexOf(el)) % this.alphabet.length;
        i = ++i % allKey.length;
        return this.alphabet[index];
      }
      return el;
    } );
    return this.direct ? result.join('') : result.reverse().join('');
  }    
  decrypt(str, key) {
    const arrStr = [...str.toUpperCase()];
    const allKey = [...key.toUpperCase()];
    let i = 0;
    let result = arrStr.map( el => {
      if (this.alphabet.includes(el)) {
        let index = this.alphabet.indexOf(el) - this.alphabet.indexOf(allKey[i]);
        if (index < 0) index += this.alphabet.length;
        i = ++i % allKey.length;
        return this.alphabet[index];
      }
      return el;
    } );
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;


