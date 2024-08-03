//ES6 module enables to use classin another files

//how to use this another in oter files?
//1. add export to class default to use class
//2. add export to function to use functions
//3. import this class where you want to use
            //import (class name) from (./file path.js)
//4. add type="module" in html script


class Car{
    drive(){
        console.log("driving")
    }
}

function fillgas(){
    console.log("gas filled")
}
function nofill(){
    console.log("gas no filled")
}

export default Car
export {fillgas,nofill}