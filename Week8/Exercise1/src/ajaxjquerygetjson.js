$(document).ready(function() {
  $.getJSON("counties.json", function(data) {
    let txt = "";
    $.each(data.counties, function(index, county) {
      txt += "<tr><td>" + county.name + "</td></tr>";
    });
    $("#countylist").html(txt);
  })
  .fail(function(xhr, status, error) {
    $("#updatemessage").html("An Error Occurred: " + xhr.status);
  });
});