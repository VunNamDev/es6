const fullName = 'Hap...Thi Minh...Hang';
let arr = fullName.split('...');
const [,,lastName]  = [...arr];
const [firstName,,] = [...arr];
const [,name,] = [...arr];
[...arr] = [lastName,name,firstName];
console.log(...arr);

const x =[2,8,5];
[...x]= 'd';
console.log(x);