const inputStr = '   thu nhoi    bong';
const arr = inputStr.split(' ');
let outputStr = '';
arr.forEach((val)=>{
    if(val!=''){
        outputStr+= `${val} ` ;
    }
});
outputStr.trim();
console.log(outputStr);