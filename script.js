let changeTitle = function() {
  let newTitle = document.getElementsByTagName('h1')
  newTitle[0].innerHTML = 'Better call Saul'
  return newTitle
}

let nightMode = function() {
  let newBackground = document.body.style.backgroundColor = "black"
}

let changeAddress = function () {
  let newAddress = document.getElementsByTagName('footer')
  newAddress[0].innerHTML = 'Second star to the right, straight on till morning'
  return newAddress

}

let createAllClasses = function {
  let parentNode = document.getElementsByTagName('ul')
  let allLinks = parentNode.quesrySelectorAll('li')
  allLinks.classList.add('amazonLink') //not finished
}