$("form").on("submit", function(event) {
          event.preventDefault();
          
          var formData = $(this).serialize();
         // console.log(formData);
         // console.log($(this).attr("data-id"));

          var ShelterId = $(this).attr("data-id");
          console.log(ShelterId);
          

          console.log($("input[name=comment]").val());

          $.post('/commentGrabber/'+ShelterId, formData).done(function(responseData) {
            console.log(responseData);
          });  
});