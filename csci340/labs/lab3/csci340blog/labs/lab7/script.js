$(document).ready(function () {

$('.btn').click(function() {

  $('.text').text('loading . . .');
  if ($(this).text() == "Doggos"){
  $.ajax({
  url: "https://dog.ceo/api/breeds/image/random",
  type: "GET",
  dataType: 'json',
  success: function(data) {
    $('#change-image').attr('src',data.message);
    $('#change-image').width(250);
    $('#change-image').height(250);
  },
});
}
  else {
    $('.text').text('loading . . .');

    $.ajax({
    url: "https://api.thecatapi.com/v1/images/search",
    type: "GET",
    dataType: 'json',
    success: function(data) {
      $('#change-image-2').attr('src',data[0].url);
      $('#change-image-2').width(300);
      $('#change-image-2').height(250);
    },
  });
  }



    });
});
