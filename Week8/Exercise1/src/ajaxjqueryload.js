$(document).ready(function() {
  $("#countylist").load("counties.json", function(response, status, xhr) {
    if (status == "error") {
      $("#updatemessage").html("An Error Occurred: " + xhr.status);
    }
  });
});