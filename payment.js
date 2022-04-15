

let noOfAdult = localStorage.getItem("noOfAdult")
let noOfChild = localStorage.getItem("noOfChild")


document.getElementById('adult').innerHTML = `You Selected ${noOfAdult} Adult ($120 Per Adult)`
document.getElementById('child').innerHTML = `You Selected ${noOfChild} Child ($60 Per Child)`
document.getElementById('adultPrice').innerHTML = `$${noOfAdult * 120}`
document.getElementById('childrenPrice').innerHTML = `$${noOfChild * 60}`
document.getElementById('totalPrice').innerHTML = `$${noOfAdult * 120 + noOfChild * 60}`