// Define conversions

// meter --> feet
let meter = 3.281
// liter --> gallon
let liter = 0.264 
// lkilogram --> pound
let kilogram = 2.204


// Define variables
let inputEL = document.getElementById("input-el")
let btnEL = document.getElementById("btn-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

//  Define default values
let error_message = "It seems you have not not entered a valid number."
let default_result = "Please enter an input"
let rounded_no_of_digits = 3

// Default display value
lengthEl.textContent = default_result
volumeEl.textContent = default_result
massEl.textContent = default_result


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Define conversion functions

function length(num) {
    
    let num_to_meter = num*meter
    let feet_to_meter = num/meter
    let res = `${num} meters = ${num_to_meter.toFixed(rounded_no_of_digits)} feet | ${num} feet = ${feet_to_meter.toFixed(rounded_no_of_digits)} meters`
    return res    
} 

function volume(num) {
    
    let num_to_liter = num*liter
    let gallon_to_liter = num/liter
    let res = `${num} liters = ${num_to_liter.toFixed(rounded_no_of_digits)} gallons | ${num} gallons = ${gallon_to_liter.toFixed(rounded_no_of_digits)} liters`
    return res    
} 

function mass(num) {
    
    let num_to_kg = num*kilogram
    let pound_to_kg = num/kilogram
    let res = `${num} kilos = ${num_to_kg.toFixed(rounded_no_of_digits)} pounds | ${num} feet = ${pound_to_kg.toFixed(rounded_no_of_digits)} kilos`
    return res    
} 


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// What happens when a user clicks convert?
//  --> we grab the number
//  --> verify if user input is true/a number (i.e., not null)
//  --> run the respective functions  for each conversion type
//  --> return the result if it is a number. Else, return error message
btnEL.addEventListener("click", function() {
    
    let user_input = Number(inputEL.value)
    
    if (user_input) {
        
        lengthEl.innerHTML = length(user_input)
        volumeEl.innerHTML = volume(user_input)
        massEl.innerHTML = mass(user_input)
        
        
    } else {
        console.log(error_message) 
    }    
    
})
