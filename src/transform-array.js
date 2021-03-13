const CustomError = require("../extensions/custom-error");

module.exports =function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    (arr[i] != '--discard-next' && arr[i] != '--discard-prev' && arr[i] != "--double-next" && arr[i] != "--double-prev") ?
      newArr.push(arr[i]):
        (arr[i] == '--discard-next' && i != arr.length - 1) ?
          i++ :
            (arr[i] == '--discard-prev' && arr[i - 2] != '--discard-next' && i != 0) ?
              newArr.pop():
                (arr[i] == '--double-next' && i != arr.length - 1) ?
                  newArr.push(arr[i + 1]):
                    (arr[i] == '--double-prev' && arr[i - 2] != '--discard-next' && i != 0) ?
                      newArr.push(arr[i - 1]) : null;
    
  }

  return newArr;
   
};


