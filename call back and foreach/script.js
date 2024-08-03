//Call back with for each
//from javascript adding dropdown list to html

arr=['CIVIL','ECE','MECH','IT']
arr.forEach(val => {
    let optn=document.createElement('option')
    optn.textContent=val
    console.log(optn)
    optn.value=val
    document.getElementById('degree').appendChild(optn)
});

let sum=0
Input=[6,-5,7,-2,4,6,-1]
Input.forEach(val=>{ 
    let num= val
    if(num>0){
        sum=sum+num
    }
    else
        console.log("negative number")
    console.log(sum)
})
// console.log(sum)

//Array methods
//Map - as like for each, every execution it gives elements of array and we can able to modify the elemnts as required 

//converting us dollar into indian rupees in array simply using map method
let USD=[20,20,15,1]
let INR=USD.map(x => x * 83)
console.log(INR)

const input=[ //array of objects
    {age:20, name:'sana'},
    {age:15, name:'parthiksha'},
    {age:8, name:'akshay'},
    {age:23, name:'mythili'}
]
//getting name alone from the above array 
const names=input.map(y => y.name)
console.log(names)

//filter - as it name implies it does filtering

const a=[23,45,75,23,32,90,10]
const lessThan50= a.filter(x => x<50)
console.log(lessThan50)

//reduce- executes reducer callback function and returns accumulated result

//finding no.of occurence of an element
let Arr2D=[
    ['a','b','c'],
    ['c','b','a'],
    ['f','d','a'],
];

//flat() method is not supporting to my system environment 
//flattening 2D array into 1D array
let flattenedArr= [].concat(...Arr2D)

// convert this 2D array into 1D array using flat()
let occurence= flattenedArr.reduce( (outputObj,currVal) => {
        currVal = String(currVal)
        if(outputObj[currVal])
            outputObj[currVal]++
        else
            outputObj[currVal]=1
        return outputObj
    }
    ,{});

console.log(occurence)



