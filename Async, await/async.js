// async function fn(){
//     return 'Naveen'
// }
// // console.log(fn())  returns a promise
// fn().then((name) => console.log(name)) 

//promise
let reach = new Promise((resolve,reject) =>{
const reached=false
if(reached)
    setTimeout(resolve,3000,"Ram reached")
else
    reject("Ram not reached")
})
async function asyncstatus(){
    try{
        console.log('Hi....')
        result= await reach   //await should only given inside async function
        console.log(result)
    }
    catch(error){
        console.log(error)
    }
    
}
asyncstatus()