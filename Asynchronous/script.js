console.log("Hii")
 function sync(){
    console.log("step 1")
    console.log("step 2")
    console.log("step 3")
 }
 sync()
    let a=2
    let b=3
setTimeout(() => console.log('step1'),5000)
setTimeout(() => console.log('step2'),3000)
setTimeout(() => console.log('step3'),1000)

// setInterval(() => console.log("Hii... ASYNC func"),10000)