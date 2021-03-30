/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
/////////////////////date of courses////////////////////////////////
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
///////////////course name/////////////////////////////
  
  
  function change(){
      var course_name = document.querySelector('.course1 h2');
var get_course = document.querySelector('input');

 course_name.innerText=get_course.innerText;

  }






/////////////////////end of course////////////////////////////////////

var countDownDate = new Date("Jan 22, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("demof1").innerHTML = days ;
   document.getElementById("demof2").innerHTML = hours;
   document.getElementById("demof3").innerHTML = minutes;
   document.getElementById("demof4").innerHTML = seconds;
    
  // Output the result in an element with id="demo"
  document.getElementById("demo1").innerHTML = days ;
   document.getElementById("demo2").innerHTML = hours;
   document.getElementById("demo3").innerHTML = minutes;
   document.getElementById("demo4").innerHTML = seconds;
    
     document.getElementById("democ1").innerHTML = days ;
   document.getElementById("democ2").innerHTML = hours;
   document.getElementById("democ3").innerHTML = minutes;
   document.getElementById("democ4").innerHTML = seconds;
    
    document.getElementById("democf1").innerHTML = days ;
   document.getElementById("democf2").innerHTML = hours;
   document.getElementById("democf3").innerHTML = minutes;
   document.getElementById("democf4").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


var countDownDate2 = new Date("mars 3, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance2 % (1000 * 60)) / 1000);
    
     document.getElementById("demobf1").innerHTML = days ;
   document.getElementById("demobf2").innerHTML = hours;
   document.getElementById("demobf3").innerHTML = minutes;
   document.getElementById("demobf4").innerHTML = seconds;
   
   document.getElementById("demodf1").innerHTML = days ;
   document.getElementById("demodf2").innerHTML = hours;
   document.getElementById("demodf3").innerHTML = minutes;
   document.getElementById("demodf4").innerHTML = seconds;
  // Output the result in an element with id="demo"
  document.getElementById("demod1").innerHTML = days ;
   document.getElementById("demod2").innerHTML = hours;
   document.getElementById("demod3").innerHTML = minutes;
   document.getElementById("demod4").innerHTML = seconds;
   
   document.getElementById("demob1").innerHTML = days ;
   document.getElementById("demob2").innerHTML = hours;
   document.getElementById("demob3").innerHTML = minutes;
   document.getElementById("demob4").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//////////
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

