let slide = document.querySelectorAll(".slide")
var count = 0

function countslide(){
   for (let index = 0; index < slide.length; index++) {
         slide[index].style.display = "none"
   }
}
function next(){
   countslide()
   if(count === slide.length-1) count = -1;
   count++
   slide[count].style.display = "block"
   slide[count].style.opacity = 1
   var x = 0.4;
   var tX = setInterval(function(){
      x+=0.5;
      slide[count].style.opacity = x;
      if(x >=1){
         clearInterval(tX);
         x = 0.4;
      }
   }, 300); 

}
function prev(){
   countslide()
   if(count === 0) count = slide.length;
   count--
   slide[count].style.display = "block"
   slide[count].style.opacity = 1

}
function start(){
   countslide()
   slide[count].style.display = "block"
}
start()
// footer
var d = new Date();
document.getElementById("foot-year").innerHTML = d.getFullYear();

