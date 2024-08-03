// Selecting the button element
const button = document.querySelector('button');

// Creating a new div element for displaying the result
let resultdiv = document.createElement('div');
resultdiv.id = 'result';

// Appending the newly created div to the container
document.querySelector('.container').appendChild(resultdiv);

// Adding an event listener to the button
button.addEventListener('click', displayStats);

// Function to display city stats
function displayStats() {
    // Selecting the dropdown input element
    const input = document.querySelector('select');
    // Getting the selected city value
    const city = input.options[input.selectedIndex].value;
    let language = '';
    let food = '';

    // Switch case to determine language and food based on the selected city
    switch (city) {
        case 'Bengaluru':
            language = 'Kannada';
            food = 'MasalDosa';
            break;
        case 'Coimbatore':
            language = 'Tamil';
            food = 'Mutton';
            break;
        case 'Hyderabad':
            language = 'Telugu';
            food = 'Biryani';
            break;
        case 'Pune':
            language = 'Marathi';
            food = 'Poha';
            break;
    }

    // Constructing the text to display the city stats
    let text = `The Indian city ${city} has its mother tongue as ${language}. You must try ${food} there.`;
    console.log(text); // Logging the text to the console

    // Displaying the text in the result div
    document.getElementById('result').innerHTML = text;
}
