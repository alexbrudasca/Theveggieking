/* This is an example JavaScript file, feel free to remove/edit it anytime */
console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");

const burgerButton = document.querySelector('.fa-bars')
const navList = document.querySelector('.navList')

burgerButton.addEventListener('click',()=>{
  navList.classList.toggle('active')
})

const image = document.querySelector('.aboutUs_image');

document.addEventListener('scroll', () => {
  if (window.scrollY > 15) {
    image.classList.add('rotateActive');
  }
});
