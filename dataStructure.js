const heros=["shaktiman","naagraj"];

let myObj={
    name:"suhani",
    age:"22"
}

const myFunction= function(){
    console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof heros)

// stack(primitive),Heap(Non-primitive)

let string="soha";
let name=string;
name="suhani";
console.log(name);
console.log(string);

let user1={
    id:123,
    city:"kolkata",
    email:"soha@gmail.com"
}
let user2=user1
user2.city="Delhi";
console.log(user1)
console.log(user2)
