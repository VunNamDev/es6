const str = 'Truong dai hoc Cong nghiep Ha Noi xxxxxxxx';
const arrStr = str.split(' ');

let maxStr = arrStr[0];
let maxIndex = 0;

arrStr.forEach((value, index) => {
  if (maxStr.length < value.length) {
    maxStr = value;
    maxIndex = index;
  }
});

console.log(maxStr, index);
