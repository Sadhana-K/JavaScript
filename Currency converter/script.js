let select = document.querySelectorAll('.currency') //to get different currency in both from selected type and to be converted
let btn = document.getElementById('btn')
let input = document.getElementById('input') //getting how much amount to convert from user
console.log(select)
fetch(' https://www.frankfurter.app/currencies')  //fetching api
.then(res => res.json())            //converting api input into objects
.then(res => displayDropdown(res))  //the input values got from api is added in dropdown list for this res func. is called
// Displaying the currency type to convert
function  displayDropdown(res){
    // console.log(Object.entries(res))
    let curr = Object.entries(res)
    for(let i=0;i<curr.length;i++){
        let opt = `<option value= "${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML +=opt   
        select[1].innerHTML +=opt
    }
}
// func to get input from user to convert the currency when the button is clicked
btn.addEventListener('click', ()=>{
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if(curr1===curr2)
        alert ("Choose different currency to convert")
    else
        convert(curr1,curr2,inputVal)
})
//currency converting function
function convert(curr1,curr2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        document.getElementById('result').value = Object.values(data.rates)[0]
  });
}