'use strict'
function convertToRoman(num) {
  if(num >= 10) {
    let numStr = String(num);
    decompose(numStr)
    function decompose(numStr){
      let numArr = numStr.split('');
      let decompNumArr = [];
      let decimalCounter = numArr.length;
      for(let i = 0; i < numArr.length; i++) {
        let zero = '0', zeros = '', decomposed;

        for(let o = decimalCounter-1; o > 0; o--) {
          zeros += zero;
        }

        decomposed = Number(`${numArr[i]}${zeros}`);

        if(decomposed) {
          decompNumArr.push(decomposed);
        }
        decimalCounter--;
      }
      // console.log(numArr);
      console.log(decompNumArr);
    }
  }
  // let one = 1,
  //     five = 5,
  //     ten = 10,
  //     fifty = 50,
  //     hundred = 100,
  //     fivehundred = 500,
  //     thousand = 1000;
  // if(num < five) {

  // } else if(num < ten) {

  // } else if(num < fifty) {
      
  // } else if(num < hundred) {

  // } else if(num < fivehundred) {

  // } else if(num < thousand) {

  // }
return num;
}

// console.log(convertToRoman(36));
// console.log(convertToRoman(649));
console.log(convertToRoman(6493));
// console.log(convertToRoman(10));
// console.log(convertToRoman(100));
// console.log(convertToRoman(104050010));