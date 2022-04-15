// collect data
let fullname = localStorage.getItem("fullname")
let mail = localStorage.getItem("mail")
let from = localStorage.getItem("from")
let to = localStorage.getItem("to")
let departDate = localStorage.getItem("departDate")
let returnDate = localStorage.getItem("returnDate")
let classType = localStorage.getItem("classType")
let noOfAdult = localStorage.getItem("noOfAdult")
let noOfChild = localStorage.getItem("noOfChild")
let nidno = localStorage.getItem("nidno")


// display data
document.getElementById('fname').innerHTML = `${fullname}`
document.getElementById('email').innerHTML = `${mail}`
document.getElementById('from').innerHTML = `${from}`
document.getElementById('to').innerHTML = `${to}`
document.getElementById('journeyDate').innerHTML = `${departDate}`
document.getElementById('returnDate').innerHTML = `${returnDate}`
document.getElementById('classType').innerHTML = `${classType}`
document.getElementById('nid').innerHTML = `${nidno}`
document.getElementById('adult').innerHTML = `${noOfAdult}`
document.getElementById('child').innerHTML = `${noOfChild}`

