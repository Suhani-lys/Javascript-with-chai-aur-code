const score=400;
console.log(score);

const balance = new Number(1000);
console.log(balance);

console.log(balance.toString().length)

console.log(Math.abs(-4))
console.log(Math.round(5.6))

console.log(Math.random())

const min=19

const max=89

console.log(Math.random()*(max-min+1)+min)

let myDate =new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(typeof myDate);

let dateOfBirth=new Date(2004,11,29)
console.log(dateOfBirth.toDateString())

let timeStamp= Date.now()
console.log(timeStamp);

console.log(dateOfBirth.getTime())

newDate.toLocaleString('default',{
    weekdays:"long"
})