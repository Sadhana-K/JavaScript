const button=document.querySelector('button');
let resultdiv = document.createElement('div');
resultdiv.id= 'result';
document.querySelector('.container').appendChild(resultdiv);

            
//eventListener
button.addEventListener=('click',displayStats);

function displayStats(){
    const input=document.querySelector('select');
    const city=input.options[input.selectedIndex].value;
    let language= '';
    let food= '';

    switch(city){
        case 'Bengaluru':
            language= 'Kannada';
            food= 'MasalDosa';
            break;
            
        case 'Coimbatore':
            language='Tamil';
            food='Mutton';
            break;
        case 'Hyderabad':
            language='Telugu';
            food='Biriyani';
            break;
        case 'Pune':
            language= 'Hindi';
            food= 'Rotti';
            break;
    }

    let text = `The Indian ${city} has mothertongue as ${language}. There you must try this food ${food}.`;
    console.log(text);

    document.getElementById('result').innerHTML= text;
}