const education= document.getElementById('dropdown')
const edu1= document.getElementById('ece')
const edu2= document.getElementById('cse')
const edu3= document.getElementById('it')
const edu4= document.getElementById('eee')
const edu5= document.getElementById('mech')
const edu6= document.getElementById('civil')

let arr=['ECE','CSE','IT','EEE','MECH','CIVIL']

dropdown.addEventListener('click', 
function(){
    
    for(let i=0; i<=5; i++){
        if(i==0){
            edu1.innerHTML=arr[i]
            console.log(education)
        }
        else if (i==1) {
            edu2.innerHTML=arr[i]
        }
        else if (i==2){
            edu3.innerHTML=arr[i]
        } 
        else if (i==3){
            edu4.innerHTML=arr[i]
        } 
        else if (i==4){
            edu5.innerHTML=arr[i]
        } 
        else if (i==5){
            edu6.innerHTML=arr[i]
        }         
        
    }

}
   
)

