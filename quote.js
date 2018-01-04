$(document).ready(function(){
  function showPosition(){
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(function(position){
              var positionInfo = "Your current position is (" + "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude + ")";
              document.getElementById("coordinates").innerHTML = positionInfo;
          });
      } else{
          alert("Sorry, your browser does not support HTML5 geolocation.");
      }
  }
});
