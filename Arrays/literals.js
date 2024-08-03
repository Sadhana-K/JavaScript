// Literal template

let items=5;
let cost=95;
console.log("You have " + (items) + " items in your cart. Your bill amount is $" + (cost))

// Arrays
 let city=["Cbe","banglore","hydrebad","chennai","pune"]
 let marks=[20,80,85,99]
 console.log(city.length) 
 console.log(marks.length)
 console.log(city[1]) 
 console.log(city[city.length-1]) //access last element when index is not known

let arr=[1,"2",'a','abc',[2,3]]
console.log(arr[2])
console.log(arr[0])
console.log(arr[4])
console.log(arr[4][0])
console.log(arr[4][1])

// 2D array
let a=[[3,4,5],[4,5,7],[6,7,8]]
console.log(a[1][2])

// pop-delete last element
console.log(arr.pop())
console.log(arr)
//push-add element in last
console.log(arr.push(4))
console.log(arr)
//shift-delete first element and returns deleted element
console.log(arr.shift())
//unshift-add element in first
console.log(arr.unshift(9))
console.log(arr)

// splice
arr.splice(2) //deletes elements from 1rst index
console.log(arr)
arr.splice(2,1)
console.log(arr)
arr.splice(2,1,'n','naveen')  //
console.log(arr)

arr.reverse()
console.log(arr)
let str=arr.join() //elements in the array converted into string
console.log(str)

// cancat and spread operator
let arr1=[2,3,5,6]
let arr2=["sa","na","va","ma"]
let joined=arr1.concat(arr2)
console.log(joined)
// or
let joinedarr=[...arr1,...arr2]
console.log(joinedarr)


let Arr=[5,8,10,7,9,11]

// Replace 7,9,11 with 17,19,111
console.log(Arr.splice(3,3,17,19,111))
console.log(Arr)

// Add 100 in first
console.log(Arr.unshift(100))
console.log(Arr)

console.log(Arr.push(200))
console.log(Arr)

console.log(Arr.push(1000))
console.log(Arr)

let mid=(Arr.length)/2
console.log(Arr.mid())
