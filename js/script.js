const navBar = document.getElementById("menuBar");
const navigation = document.getElementById("nav1");


// the navigation bar unfolds
navBar.addEventListener("click", function(){
    navigation.classList.toggle("visible");
})

navigation.addEventListener("click", function(){
    this.classList.remove("visible");
})


const img = document.querySelectorAll('.picture');//grabs all the images
const lightbox = document.querySelector('.lightBox-wrapper');//grabs the lightbox
lightbox.addEventListener('click', hideBigImage);//adds an event that removes the toSee class 


for (i=0; i < img.length; i++){
  img[i].addEventListener('click', function(){
    document.querySelector('#lightBox-wrapper').classList.add('toSee');
    document.querySelector('#lightBoxImg').src =this.src;//img[i].src -chooses the right img
  });
}

//makes the big image disappear again 
function hideBigImage(){
  document.querySelector('#lightBox-wrapper').classList.remove('toSee');
}


// slider med knap og mouseover
let silviuSlideshow = (function () {
  const slideImage = document.querySelector("#slidePict");

  let pause = false;
  const picts = ["./img/hvidBil.jpg", "./img/rødBil.jpg", "./img/modestaBil.jpg", "./img/rødForanBil.jpg", "./img/sortBil.jpg", "./img/sortFamilieBil.jpg"];

  let index = 0;


  // dette er en fælles function som bruges både til knap og mouseover functionalitet
  function showPict(pictIndex) {
      slideImage.src = picts[pictIndex];                       //ændrer picts
  }

  // button functionalitet----------------------------------------
//   document.querySelector('#buttonLeft').addEventListener('click', ()=> {
//       index--;
//       if(index < 0) {
//           index = picts.length - 1;
//       }
//       showPict(index);
//   });

//   document.querySelector('#buttonRight').addEventListener('click', ()=> {
//       index++;
//       if(index > picts.length - 1) {
//           index = 0;
//       }
//       showPict(index);
//   });

  //---------------------------------------------------------------------



  

  setInterval(()=> {
    //   if(pause) {
    //       return;
    //   }

      index++;
      if(index > picts.length - 1) {
          index = 0;
      }
      showPict(index)
  }, 1700)

  return {'showPict': showPict};

})();