$(document).ready(function(){
  //var result=$('#quote');

  //function to show loading that ajax request is going on
  var showLoading = function(selector){
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader(2).gif'></img></div>";
    selector.innerHTML=html;
  }
  //end of loading function
  
  //calling loading function
  var selector = document.querySelector("#quote");
  showLoading(selector);

  $.ajax({
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
    method: 'get',
    dataType: 'json',
    success: function(data){
      selector.innerHTML = '<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>';
      //result.html('<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>');
    }
  });
  $('#nextquote').click(function(){
    showLoading(selector);
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
      method: 'get',
      dataType: 'json',
      success: function(data){
      selector.innerHTML = '<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>';
      //result.html('<blockquote>' + data.quoteText + '<br>' + '<footer>' + data.quoteAuthor + '</footer>' + '</blockquote>');
      }
    });
  });
  /*  $('#previousquote').click(function(){
    var result=$('#quote');
    result.html('<blockquote>' + previousquote + '<br>' + '<footer>' + previousquote + '</footer>' + '</blockquote>');
  }); */

});
