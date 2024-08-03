//Class - is a template of prooperties
// class User{
//     constructor(name, age){
//         this.name=name
//         this.age= age
//     }
    
//     login(){
//         console.log('Hii' + this.name)
//         console.log(age)
//     }
//     logout(){
//         console.log("You're logged out")
//     }
// }
// let Naveen= new User('Naveen',21)
// console.log(Naveen)

// //Static      
// don't execute this code my version is not supported
class User{
    static totalUser=0
    constructor(name,acNo){
      this.name=name
      this.acNo=acNo
      User.totalUser++
    }
    login(){
      console.log('Hii ' + this.name)
      console.log("You're logged in " + this.acNo)
    }
    static displayTotalUser(){
      console.log("Total no.of users " + User.totalUser)
    }
}
//inheritance
class PaidUser extends User{
  constructor(name,acNo){
    super(name,acNo)
  }
  message(){
    console.log(this.name + " You've multiple cuisine coupon")
  }
  //overriding
  login(){
    console.log("Thank you")
    return this
  }
}
  
  let userone=new User('Naveen', 21098)
  let user2= new User('Sadhana',21345)
  userone.login()
  // console.log("no.of users " + User.totalUser)
  User.displayTotalUser()
  PaidUser.login()
  PaidUser.message()
  //method chaining
  PaidUser.login().message()

