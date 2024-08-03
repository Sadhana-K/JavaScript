//exception handling
try {
    let num = prompt("Enter a number")
    if(num=== ' ')
        throw 'Cannot be empty'
    if(isNaN(num))
        throw "Enter a valid number"
    console.log(num**3)
}
catch(error){
    console.log(error)
}
//error is occur or not this finally will execute
finally{
    console.log('Bye!')
}