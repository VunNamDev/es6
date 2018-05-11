const fullName = 'Hap...Thi Minh...Hang';
let arr = fullName.split('...');
const [,,lastName]  = [...arr];
const [firstName,,] = [...arr];
const [,name,] = [...arr];
arr = [lastName,name,firstName];
console.log(...arr);