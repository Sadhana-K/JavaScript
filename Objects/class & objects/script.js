class rectangle{
    constructor(len,wid){
        this.length=len
        this.width=wid
    }
    area(){
        return this.length * this.width
    }
}

//Date Object
Box1 = new rectangle(10,4)
console.log(Box1)
console.log(Box1.area())

const date = new Date()
console.log(date)
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getFullYear())
console.log(date.getTime())
console.log(date.getMonth())
console.log(date.getDay())
