//DIFFERENT FUNCTION TYPES

//function declaration
function IsPositive(num){  //num-parameter
    return num>0
}
console.log(IsPositive(3)) //passing arguments
console.log(IsPositive(0))
console.log(IsPositive(-2))

// it is not necesssary to give parameter or arguments in the function
function Greet(){
    console.log('Good Morning')
}
console.log(Greet())

//Default parameter in function
function Hello(name='there'){   //default parameter
    console.log('hii '+ name)
}
console.log(Hello('sana'))  
console.log(Hello())     //when we are not passing arguments function uses default argument assigned to the parameter  

//recursion- function calling itself
function factorial(n){
    if(n==1)
        return 1
    return n*factorial(n-1)
}
console.log(factorial(3))

//function expression
// assigning function to a variable as object
let isEven= function (num){
    return num%2==0
}
console.log(isEven(4))

// let arr=[2,3,4,5]
// let findSum=function(arr){    //passing an array
//     let sum=0
//     for(let val of arr){
//         sum += val
//     }
//     return sum
// }
// console.log(findSum(arr))

// let volume=function(l,b,h){
//     return l*b*h
// }  

//arrrow function
let volume= (l,b,h) => {return l*b*h}
console.log(volume(2,4,6))

let findSum=(array) => {
    let sum=0
    for(let val of array){
        sum += val
    }
    return sum
}
let array=[2,3,4,6]
console.log(findSum(array))

//area of circle in arrow function
//if we have only one parameter no need to put ().
//if our function is in a single line then no need to put {}
let area= r => 'area of circle is ' + Math.PI*r
console.log(area(4))

//rest parameters
//when we want pass multiple arguments., we can use spread operator
let product= function(...args){
    let result=1
    for(let val of args){
        result *= val
    }
    return result
}
console.log(product(2,3,4,1,2))

let product2= function(){
    // console.log(arguments)
    let result=1
    for(i=0;i<arguments.length;i++){
        result *= arguments[i]
    }
    return result
}
console.log(product2(1,3,5,2))

//Generators - It returns values one by one when we call generators
function* indexGenerator(){
    let index=1
    while (true){
        yield index++
    }
}
const gen=indexGenerator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)





