$(document).ready(function(){
  var previousquote;
  var temp;
  var result=$('#quote');
  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    method: 'get',
    dataType: 'json',
    success: function(data){
      temp=data.quote;
      result.html('<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>');
      previousquote=temp;
    }
  });
  $('#nextquote').click(function(){
    previousquote=temp;
    var result=$('#quote');
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      method: 'get',
      dataType: 'json',
      success: function(data){
      temp=data.quoteText;
      result.html('<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>');
      }
    });
  });
/*  $('#previousquote').click(function(){
    var result=$('#quote');
    result.html('<blockquote>' + previousquote + '<br>' + '<footer>' + previousquote + '</footer>' + '</blockquote>');
  }); */
  $('#getcoordinates').click(function getLocation(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    });
    function showPosition(position) {
        var x=$('#coordinates');
        x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    }
});
