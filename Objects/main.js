
let user={
    username:'Sadhana',
    password:'sana-00',
    emailid:'xxx@gmail.com',
    returnable:'true',
    checkrobot: function(){
        if(returnable='true')
            console.log('i am not a robot')
        else
            console.log('robot')
    }

}

//accessing object properties
console.log(user.username)  

//modifying object
user.returnable=false
console.log(user.returnable)

//calling object method
console.log(checkrobot())

