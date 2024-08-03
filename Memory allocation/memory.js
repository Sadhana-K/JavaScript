// Prmitive data types         //Reference data types
// 1.String                     1.Arrays
// 2.Number                     2.Functions
// 3.BigInt                     3. All objects- Math,Date,...
// 4.Boolean
// 5.Undefined
// 6.Symbol
// 7.Null

//Set
let a=[1,3,4,5,2,2,4,3,1,4,7,4,6]
let set1= new Set(a)
console.log(set1)
console.log(a)

//creating a new set
 let myset2= new Set()
 myset2.add(4)
 myset2.add(5)
 myset2.add('abc')
 myset2.add({'a':1, 'b':2})
 myset2.add(4)
console.log(myset2)

let obj= {'a':1, 'b':2}
myset2.add(obj)
console.log(myset2)
                    //other methods in set
console.log(myset2.has(4)) //checking is element presentor not in set
console.log(myset2.delete(4))  //delete particular element
console.log(myset2.size)  //returns size
// console.log(myset2.clear())   //clears entire set
// console.log(myset2)

let arr= Array.from(myset2)      //converting set to array
console.log(arr)

//Map
// key-value pairs
//key - should be unique, shouldn't repeat
//value- value can be repeate

let myMap= new Map()
myMap.set('a', 3)
myMap.set('b', 5)
myMap.set('c', 7)
myMap.set('d', 8)
console.log(myMap)
console.log(myMap.get('b'))  //returns b value
console.log(myMap.has(1))    //wrong way to check has
console.log(myMap.has('c'))  //right way to check has

for(let i of myMap){
    console.log(i)
}

for(let [k,v] of myMap){
    console.log(k)
    console.log(v)
}

for(let k of myMap.keys()){
    console.log(k)
}
for(let v of myMap.values()){
    console.log(v)
}

myMap.forEach((v,k) => {
    console.log('keys',k, 'values',v)
})