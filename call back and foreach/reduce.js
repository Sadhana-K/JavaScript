//arr=[4,6,2,3,1,1,3,5,7,8,4,3] remove duplicates from the array

// let arr=[4,6,2,3,1,1,3,5,7,8,4,3]

// let original= arr.reduce((notDuplicate,currVal) => {
//     if (!notDuplicate.includes(currVal)){
//         notDuplicate.push(currVal)
//     }
//     return notDuplicate
// } ,[]);
// console.log(original)


// Name="Robert Andrew George"   output: RAG
let str = "Robert Andrew George";
let arr = str.match(/\S+/g).map(x => x.charAt(0)).join('')
console.log(arr)


//find the sum of positive numbers a=[6,-5,7,-2,4,6,-1]
let sum=0
let a=[6,-5,7,-2,4,6,-1]
let result= a.filter(num =>{
    return num >0})

    result.forEach(num => sum += num)
console.log(sum)








