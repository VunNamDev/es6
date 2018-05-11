
const inputStr = 'truong\n\ns    dai hoc \t\t';
let str = inputStr;
while(true){
    if(str.indexOf('\n')>=0){
        str = str.replace('\n',' ');
    }
    else{
        if(str.indexOf('\t')>=0){
            str = str.replace('\t',' ');
        }
        else
            break;
    }
}

let charNum = 0;
const arr = str.split(' ');
arr.forEach((val)=>{
    if(`${val}`!=''){
        charNum++;
    }
});
console.log(charNum);