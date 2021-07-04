/* This additional exercises, from 7 to 12, use JavaScript as well

  EX7.: Write a function to change the h1 text

  EX8.: Write a function to change the page background color

  EX9.: Write a function to change the footer address with a fake one

EX10.: Write a function to add a CSS class to every Amazon link

EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of each product in a different one every time it's invoked */

let changeTitle = function() {
  let newTitle = document.querySelector('h1')
  newTitle.classList.toggle("selected")
  if (newTitle.innerHTML === "Better not call"){
    newTitle.innerHTML = "Better call Saul"
  } else {
    newTitle.innerHTML = "Better not call"
  }
  return newTitle
}

let setNightMode = function(){
  let nightModeBody = document.body
  nightModeBody.classList.toggle("dark-mode")
}


let changeAddress = function () {
  let newAddress = document.getElementsByTagName('footer')
  newAddress[0].innerHTML = 'Second star to the right, straight on till morning'
  return newAddress
}

// let createAllClasses = function (event) {
//   let allLinks = document.quesrySelectorAll('ul li')
//   allLinks.classList.add('link-selected')
//   return allLinks
// }

let hidePic = function(){
  let picToHide = document.getElementsByTagName('img')
  for (i=0; i<picToHide.length; i++){
    picToHide.classList.toggle('hidden')
  }
}
