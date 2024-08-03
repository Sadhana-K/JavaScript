let item={
    name:'mobile',
    price:15000,
    make:'Redmi',
    dimensions:{    //we can add another object inside an object
        size:6,
        width:4,
        length:10
    },
    category:['samrtphone','camera']  //we can  add array inside an object
}
console.log(item)
console.log(item.category)

//another type of define a object
let item2= new Object()
item2.name='Laptop'
item2.price=50000
item2.make='Lenovo'
console.log(item2)

//methods inside object
let item3={
    name:'mobile',
    price:15000,
    make:'Redmi',
    //when an function is defined inside an object it is called as method
    buy:function(){                       
        console.log('item added to cart')
    },
    addToList(){
        console.log('item added to list')    //it easy way to define method 
    }
}
item3.buy()
item3.addToList()