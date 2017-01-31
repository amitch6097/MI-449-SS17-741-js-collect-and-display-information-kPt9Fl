//grab input elements
var firstNameInput = document.getElementById('first-name')
var lastNameInput = document.getElementById('last-name')
var descriptionInput = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
//grab divs for input
var rawP = document.getElementById('raw')
var htmlP = document.getElementById('html')

//grabs values from inputs and updates the preview divs
var updateAll = function(){
  //grab all values from input boxes
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var description = descriptionInput.value
  var email = emailInput.value
  var phone = phoneInput.value
  //string to display preview
  var string = '<h1>Hi, my name is '+ firstName + ' ' + lastName + '!</h1>' +
    '<p>'+ description + '</p>' +
    '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '"target="_blank">' + email + '</a>'  +
    ' or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.</p>'
  //show raw html and preview
  rawP.textContent = string
  htmlP.innerHTML = string
}

//add listeners to all inputs with updateAll function
lastNameInput.addEventListener('input', updateAll)
firstNameInput.addEventListener('input', updateAll)
descriptionInput.addEventListener('input', updateAll)
emailInput.addEventListener('input', updateAll)
phoneInput.addEventListener('input', updateAll)
