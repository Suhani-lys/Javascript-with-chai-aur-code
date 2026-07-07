const name="soha"
const repoCount =10

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('power rangers')

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newString = gameName.substring(0,2)
console.log(newString);

const anotherString= gameName.slice(-12,2)
console.log(anotherString);

const string1="       suhani"
console.log(string1);
console.log(string1.trim());

const string2="suhani%20lys"

console.log(string2.replace('%20','_'))

console.log(string2.includes('suhani'));
