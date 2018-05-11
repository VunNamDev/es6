const inputStr = '   thu nhoi    bong';
const arr = inputStr.split(' ');

let outputStr = '';

arr.forEach(val => {
  if (`${val}` != '') {
    outputStr += `${val} `;
  }
});
outputStr = outputStr.trim();
console.log(outputStr);
