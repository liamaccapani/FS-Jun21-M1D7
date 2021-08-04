/* This additional exercises, from 7 to 12, use JavaScript as well

  EX7.: Write a function to change the h1 text

  EX8.: Write a function to change the page background color

  EX9.: Write a function to change the footer address with a fake one

  EX10.: Write a function to add a CSS class to every Amazon link

  EX11: Write a function to toggle a CSS class for all the images in the table; that class should set the visibility of the image

EX12: Write a function to color the price of each product in a different one every time it's invoked */

window.onload = function(){
  addClassToLinks()
}


// #7
const changeTitle = function() {
  let newTitle = document.querySelector('h1')
  newTitle.classList.toggle("selected")
  if (newTitle.innerHTML === "Better not call"){
    newTitle.innerHTML = "Better call Saul"
  } else {
    newTitle.innerHTML = "Better not call"
  }
  return newTitle
}


// #8 
const setNightMode = function(){
  let nightModeBody = document.body
  nightModeBody.classList.toggle("dark-mode")
}


// #9
const changeAddress = function () {
  let newAddress = document.getElementsByTagName('footer')
  newAddress[0].innerHTML = 'Second star to the right, straight on till morning'
  return newAddress
}


// #10-a
// const addClassToLinks = function(){
//   let links = document.getElementsByTagName('a')
//     console.log(links)
//     for(let link of links){
//       link.addEventListener('mouseover', function(){
//         link.classList.add('amazon-link')
//         console.log(link)
//       })
//     }
// }
// addClassToLinks()

const addClassToLinks = function(){
  let links = document.querySelectorAll('ul li a')
    console.log(links)
    links.forEach(link => {
      link.classList.add('amazon-link')
      console.log(link)
    });
}
//called it in window.onload

// #11-a
// const hidePic = function(){
//   let picToHide = document.getElementsByTagName('img')
//   //console.log(picToHide)
//   for (i=0; i<picToHide.length; i++){
//     //'can't toggle class of undefined' -> needs to be stored -> currentImg
//     let currentImg = picToHide[i]
//     currentImg.addEventListener('click', function(){
//       currentImg.classList.toggle('hidden')
//       console.log(currentImg)
//     })
//   }
// }
// hidePic()

// #11-b
// const hidePic = function(){
//   let imgs = document.querySelectorAll('img')
//   for (let img of imgs){
//     img.addEventListener('click', function(){
//       img.classList.toggle('hidden')
//       console.log(img)
//     })
//   }
// }

// hidePic()


// #11-c
// const hidePic = function(){
//   let imgs = document.querySelectorAll('img')
//     imgs.forEach(img => {
//       img.addEventListener('click', function(){
//         img.classList.toggle('hidden')
//         console.log(img)
//     })
//   })
// }

// hidePic()

// 💥 pics are hidden, find a way to toggle them back


// #12
const colorGenerator = function(){
  let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
  return randomColor
}
/* Random Color Explanation:
  https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
*/

const colorPrice = function(){
  let pricesTd = document.querySelectorAll('table tr td:nth-child(4)')
  for (let priceTd of pricesTd){
    priceTd.addEventListener('mouseover', function(){
      priceTd.style.color = colorGenerator()
    })
  }
}

colorPrice()