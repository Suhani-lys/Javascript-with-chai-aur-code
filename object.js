//singleton

const mySym = Symbol("key1")

const JsUser={
    name: "suhani",
    "full name": "suhani Bharti",
    [mySym]:"myKey1",
    age:22,
    location:"greater Noida",
    email:"soha@gmail.com"

}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email="suhani@gmail.com"
//Object.freeze(JsUser)
JsUser.email="sohaaa@gmail.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
//console.log(JsUser.greeting());

const tinderUser= new Object()

tinderUser.id ="123abc"
tinderUser.name="suhani"

console.log(tinderUser)

const tinder={
    fullName:{
        email:"soha@gmail.com",
        fullName:"soha"
    }
       
}
//console.log(tinder)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1, obj2}
//const obj4=Object.assign({},obj1,obj2)
const obj4={...obj1, ...obj2}
//console.log(obj4);

const users=[
    {
        id:1,
        name:"suhani"
    }
]

//console.log(users[0].name)
//console.log(Object.keys(tinderUser))

const course={
    coursename:"dimag k bb",
    price:"aukat se bahr",
    courseInstructor: "soha"
}
const{courseInstructor} = course
console.log(courseInstructor);

//const navbar=(props.company)=>{

//}
navbar(comapany="suhani.lys")

//{
   // "name":"suhani",
   // "price":"free"
//}
