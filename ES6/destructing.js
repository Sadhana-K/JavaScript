//Destructing is extracting specific value or element from group such as array,obj.
//In js obj. destructing and array destructing is there.

// here is an example      /*************ARRAY DESTRUCTURING************ */

// let arr= ["saba","sana","sara"]
// // let [name1, ,name3] = arr
// let [name1, name2, ] = arr
// console.log(name1);
// // console.log(name1 , name3); //returns saba sara
// console.log(name1 , name2);   


// let arr2= [undefined,"sana","sara"]
// let [name1="default name",name2,name3] = arr2
// console.log(name1);
// console.log(name2);
// console.log(name3);

// let arr2= [null,"sana","sara"]
// let [name1="default name",name2,name3] = arr2
// console.log(name1);
// console.log(name2);
// console.log(name3);
//we cannot overwrite null value.

//destructuring with rest operator
// let arr3= ["sada","sana","sara"]
// let [name1=name1,...name2] = arr3     //rest operator takes all values after name1 into array   
// console.log(name1);
// console.log(name2);
// // console.log(name3);

/**********************Object DESTRUCTURIMG******************** */
let employee={
    name: 'sana',
    role: 'webdeveloper',
    salary: 20000
}
let {salary} = employee
console.log(employee.salary);

let employee2={
    name: {
        firstname: 'sana',
        lastname: 'naveen'
    },
    role: 'webdeveloper',
    salary: 20000
}
let {name:{lastname}} = employee2
console.log(lastname);
 let {name:{firstname}}=employee2
 console.log(firstname);




