'use strict'
// I (=1), V (=5), X (=10), L (=50), C (=100), D (=500), and M (=1000)
function convertToRoman(num) {
  if(Number(num)) {
    let numStr = String(num), decomposedArr = decompose(numStr), converted = '';
    function decompose(numStr){
      let numArr = numStr.split(''), decompNumArr = [], decimalCounter = numArr.length;
      for(let i = 0; i < numArr.length; i++) {
        let zero = '0', zeros = '', decomposed;

        for(let o = decimalCounter-1; o > 0; o--) {
          zeros += zero;
        }

        decomposed = `${numArr[i]}${zeros}`;

        if(Number(decomposed)) {
          decompNumArr.push(decomposed);
        }
        decimalCounter--;
      }
      // console.log(numArr);
      console.log(decompNumArr);
      return decompNumArr;
    }
    function duplicate(letter, times) {
      if(times > 0) {
        let result = '';
         for(let i = times; i > 0; i--) {
                result += letter;
              }
        return result;
      } else if(times == 0) {
        return  '';
      } else {
        console.log('Duplicate::: Error, enter valid parameters')
      }
    }
    decomposedArr.forEach(num => {
      let hasZeroIndex = num.indexOf('0'), letter = '';
      if(hasZeroIndex != -1) {
        let numOfZeros =  num.length - hasZeroIndex;
        if(numOfZeros > 3 || numOfZeros == 3) {
          let rem = numOfZeros - 3, tempHolder = '';
          //if rem is 0 set it to default to one
          tempHolder += duplicate('M', (rem ? rem*10: 1));
          letter += duplicate(tempHolder, num[0])
        } else if(numOfZeros < 3){
          if(numOfZeros == 2) {
            let rem = num[0];
            if(num[0] >= 5 && num[0] <= 8) {
              rem = num[0] - 5;
              letter += duplicate('D', 1);
            }
            if(num[0] == 9) {
              rem = 0;
              letter += 'CM';
            }
            if(num[0] == 4) {
              rem = 0;
              letter += 'CD';
            }
            letter += duplicate('C', rem);
          }
          if(numOfZeros == 1) {
            let rem = num[0];
            if(num[0] >= 5 && num[0] <= 8) {
              rem = num[0] - 5;
              letter += duplicate('L', 1);
            }
            if(num[0] == 9) {
              rem = 0;
              letter += 'XC';
            }
            if(num[0] == 4) {
              rem = 0;
              letter += 'XL';
            }
            letter += duplicate('X', rem);
          }
        }
      } else {
        if(num[0] <= 3) {
          letter += duplicate('I', num[0]);
        }
        if(num[0] == 4) {
          letter += 'IV';
        }
        if(num[0] == 5) {
          letter += 'V';
        }
        if(num[0] >= 6 && num[0] <= 8) {
          letter += 'V';
          letter += duplicate('I', (num[0]-5));
        }
        if(num[0] == 9) {
          letter += 'IX';
        }
      }
      // console.log(letter);
      converted += letter;
    })
    console.log(converted)
    return converted;
  } else {
    console.log('ConvertToRoman::: Error, enter a valid number')
  }
}

console.log(convertToRoman(6));
// console.log(convertToRoman(649));
// console.log(convertToRoman(6493));
// console.log(convertToRoman(64917));
// console.log(convertToRoman(10));
// console.log(convertToRoman(100));
// console.log(convertToRoman(104050010));