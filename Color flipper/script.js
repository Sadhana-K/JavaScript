let button=document.getElementById('color')
let code=document.getElementById('colorcode')
let background=document.getElementById('container')

let hexdecimal=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

// color.addEventListener('click',changebg)
// function changebg(){
//     let hexColor='#'
//     for(i=1;i<=6;i++){
//         hexColor += hexrandom()
//     }
//     background.style.backgroundColor= hexColor
//     code.innerHTML= hexColor
// }



//without given name to a function we also can give like below 
//anonymous function 
color.addEventListener('click',
function (){
    let hexColor='#'
    for(i=1;i<=6;i++){
        hexColor += hexrandom()
    }
    background.style.backgroundColor= hexColor
    code.innerHTML= hexColor
})

function hexrandom(){
    let randomIndex= Math.floor(Math.random()*16)
    return hexdecimal[randomIndex]
}