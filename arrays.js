//array

const Arr=[0,2,3,4,5]
console.log(Arr[0])

Arr.push(12)
Arr.pop()
Arr.unshift(14)
Arr.shift()
console.log(Arr)

const newArr=Arr.join()
 console.log(newArr)

 // splice. slice

 console.log("A",Arr);

 const myn1=Arr.slice(1,3)
 //console.log(myn1);
 //console.log("B",Arr);

 const myn2=Arr.splice(1,3)
 //console.log(myn2)
 //console.log(Arr)

 const heros=["superman","thor","captain america"]

 const dc_heros=["shaktiman","flash","batman"]

 //heros.push(dc_heros)
 const newHeros=heros.concat(dc_heros)


 console.log(newHeros)

 const allHeros=[...dc_heros, ...heros]
 console.log(allHeros)


 console.log(Array.isArray("suhani"))
 console.log(Array.from("suhani"))
 console.log(Array.from({name:"suhani"}))

 let score1=100
 let score2=200
 let score3=300
console.log(Array.of(score1,score2,score3))