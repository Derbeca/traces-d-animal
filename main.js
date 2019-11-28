//LIGHTBOX
var listePhotos = document.querySelectorAll(".miniPhotos img");
listePhotos.forEach((image) =>{
image.addEventListener('click', function() {
  var grandPhoto = document.querySelector(".grandPhoto img");
  grandPhoto.src = this.src;
  var lightBox = document.querySelector(".grandPhoto");
  lightBox.classList.add('montrer'); 

});
});
var lightBox = document.querySelector(".grandPhoto");
lightBox.addEventListener('click', function() {
  lightBox.classList.remove('montrer');
})