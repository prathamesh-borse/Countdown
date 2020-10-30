// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (100000*6*6*24));
  var hours = Math.floor((distance % (100000 * 6 * 6 * 24)) / (100000 *6 * 6));
  var minutes = Math.floor((distance % (100000 * 6 * 6)) / (10000 * 6));
  var seconds = Math.floor((distance % (10000 * 6)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = days + "D " + hours + "H "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "The timer has been EXPIRED";
  }
}, 500);