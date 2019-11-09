/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');
const imgs = [];
let index = 0;
let anim = false;

function createCarousel(){
  const carousel = document.createElement('div');
  const leftButton = document.createElement('leftButton');
  const rightButton = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  carousel.className = 'carousel';
  
  leftButton.className = 'left-button';
  leftButton.textContent = '<';
  leftButton.addEventListener('click', move, false);
  rightButton.className = 'right-button';
  rightButton.textContent = '>';
  rightButton.addEventListener('click', move, false);

  img1.src = './assets/carousel/mountains.jpeg';
  img2.src = './assets/carousel/computer.jpeg';
  img3.src = './assets/carousel/trees.jpeg';
  img4.src = './assets/carousel/turntable.jpeg';

  imgs.push(img1);
  imgs.push(img2);
  imgs.push(img3);
  imgs.push(img4);

  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);
  carousel.append(leftButton);
  carousel.append(rightButton);

  carouselContainer.append(carousel);
} createCarousel();

function move(event){
  let imgs_ = document.querySelectorAll('.carousel > img');
  console.log(imgs_);
  if(anim){
    return;
  }
  let indexPrev = index;
  if(event.target.className === 'left-button'){
    if(index === 0){ index = 3; }
    else{ index -= 1; }
    TweenMax.fromTo(imgs[indexPrev], .2 , {x: 0, autoAlpha: 1, display:'inline-block'}, {x: 200, autoAlpha: 0, display:'none'});
    TweenMax.fromTo(imgs[index], .2, {x: -200, autoAlpha: 0, display:'none'}, {x: 0 , autoAlpha: 1, display:'inline-block'});
  }
  else if(event.target.className === 'right-button'){
    if(index === 3){ index = 0; }
    else{ index += 1; }
    TweenMax.fromTo(imgs[indexPrev], .2 , {x: 0, autoAlpha: 1, display:'inline-block'}, {x: -200, autoAlpha: 0, display:'none'});
    TweenMax.fromTo(imgs[index], .2, {x: 200, autoAlpha: 0, display:'none'}, {x: 0 , autoAlpha: 1, display:'inline-block'});
  }
}