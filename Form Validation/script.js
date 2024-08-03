const mobileNumber = function (){
    const mob_num = document.getElementById("number")
    const val= mob_num.value
    console.log(val)

    if(val.length == 10){
        alert("successfully submitted")
    }
    else
        alert("enter valid mobile number")
}



