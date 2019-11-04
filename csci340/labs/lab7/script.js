$(document).ready(function() {
    var x = ""
    $('.btn').click(function() {
      if(this.title == "1"){
        $.ajax({
            url: "https://dog.ceo/api/breeds/image/random",
            type: "GET",
            dataType: 'json',
            success: function(data) {
                $.ajax({
                    url: "https://api.thecatapi.com/v1/images/search",
                    type: "GET",
                    dataType: 'json',
                    success: function(data) {
                        $('#change-image-2').attr('src', data[0].url);
                        $('#change-image-2').width(300);
                        $('#change-image-2').height(250);
                    },
                });
                $('#change-image').attr('src', data.message);
                $('#change-image').width(300);
                $('#change-image').height(250);
            },
        });
      }

      else {
        location.href = this.title;
      }

    });

    $(".img").click(function(){
      $('#2').prop('title', this.src);
      if(this.id == "change-image"){
        $('#change-image').attr('src', "https://jaredad.github.io/csci340/labs/lab7/check.jpg");
        $('#change-image').width(300);
        $('#change-image').height(250);
        var x = $('.dog').text()
        x = parseInt(x.split(" ").pop());
        x = x + 1;
        y = "Liked Dogs = " + x;
        $('.dog').text(y);
        if(x == 10){
          alert("You have liked ten dogs! You should check out the random dog page.")
        }

      } else {
        $('#change-image-2').attr('src', "https://jaredad.github.io/csci340/labs/lab7/check.jpg");
        $('#change-image-2').width(300);
        $('#change-image-2').height(250);
        var x = $('.cat').text()
        x = parseInt(x.split(" ").pop());
        x = x + 1;
        y = "Liked Cats = " + x;
        $('.cat').text(y);
        if(x == 10){
          alert("You have liked ten cats! You should check out the random cat page.")
        }
      }

      $.ajax({
          url: "https://dog.ceo/api/breeds/image/random",
          type: "GET",
          dataType: 'json',
          success: function(data) {
              $.ajax({
                  url: "https://api.thecatapi.com/v1/images/search",
                  type: "GET",
                  dataType: 'json',
                  success: function(data) {
                      $('#change-image-2').attr('src', data[0].url);
                      $('#change-image-2').width(300);
                      $('#change-image-2').height(250);
                  },
              });
              $('#change-image').attr('src', data.message);
              $('#change-image').width(300);
              $('#change-image').height(250);
          },
      });
   });
});
