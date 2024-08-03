//₹   press altGr+4 to for rupees symbol

//default paramerter

//default paramter should define as last parameter

//Buliding GST tax calculator

function taxCalulator(cost,/*tax=18*/ type,tax=18){
    taxAmount = cost * (tax/100)
    
    console.log(`The GST for cost the of ₹${cost} is: ${taxAmount} for `+ (type));
}
// taxCalulator(45,18,"grocery")
taxCalulator(45,"grocery")  

//spread operator-  spread as individual elements
let name="sadhana"
let spread=[...name]
console.log(spread.length);

// rest operator - return collected elements in array

function Sum(...inputVal){    //rest operator
    // const res= inputVal;
    // console.log(res);
    let sum=0
    for(i=0;i<inputVal.length;i++){
        sum += inputVal[i]
        // console.log(sum);
    }
    console.log(sum)
}
let num=[12,3,5,6]
Sum(...num)             //spread operator


