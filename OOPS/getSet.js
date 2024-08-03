// class Temparature{
//     constructor(t){
//         this._temp=t          //private variable _temp
//     }
//     get temp(){
//         return `${this._temp} deg cecius`
//     }
//     set temp(t){
//         if(t>100)
//             t=100
//         this._temp = t
//     }
// }

// let temp1 = new Temparature(37)
// temp1.t=30
// console.log(temp1.t)
// console.log(temp1.temp)

import Car, { fillgas,nofill } from './mainclass.js'
let car1 = new Car()
car1.drive()
nofill()
fillgas()

