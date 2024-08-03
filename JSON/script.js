// //JSON - Java Script Object Notation

// let json1= 4
// let json2= 'a'
// let json3= 'heloo'
// let json4= [2,3,6]
// let json5= {   //object
//     "a" : "1",
//     "b" : "2"
// }
// let json6= `[   
//     {
//     "dress" : "shirt",
//     "price" : "2000"
//     },
//     {
//         "dress" : "pant",
//         "price" : "2500"
//     },
//     {
//         "dress" : "saree",
//         "price" : "1000"
//     }
// ]`
// let parsed = JSON.parse(json6)
// console.log(parsed[1])
// console.log(JSON.stringify(parsed))

//Fetch API
// fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ben-muhiuddinkhan.json')
//   .then(response => {
//         if(response.ok)
//             console.log('success')
//         else
//             console.log('failed')
//         return response.json()// Parse the JSON response
//     })
//   .then(data => console.log(data.verse, data.text)) // Access data after parsing
//   .catch(error => console.log(error)); // Handle errors

//get
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//post 
fetch('https://jsonplaceholder.typicode.com/todos/1',{
    method: 'POST',        
    headers: {'content-type' : 'application/json'},
    body: JSON.stringify({
        UserId:22,
        Id: 47
    })
})
    .then(response => response.json())
    .then(json => console.log(json))

    //PUT , DELETE methods also available