function sayMyName(){
    console.log("s")
    console.log("o")
    console.log("h")
    console.log("a")
}
sayMyName();

function add(a,b){
    return a+b;
}
const result=add(2,3)
//console.log("Result:",result)

function loginUserMessage(username="suhani"){
    if(username=== undefined){
        console.log("Please enter your username");
    }else{
        return `${username} just logged in`
    }
}
//console.log(loginUserMessage("soha"))
//console.log(loginUserMessage())

function calculatecartprice(...num1){
    return num1
}
//console.log(calculatecartprice(200,400,500))
const user={
    username:"soha",
    price:199
    
}
function object(any){
    console.log(`username is ${any.username} and price is ${any.price}`);
}
object(user);

const array=[200,300,400]

function value(getArray){
    return getArray[1];
}
//console.log(value(array))
console.log(value([200,500,600]))

