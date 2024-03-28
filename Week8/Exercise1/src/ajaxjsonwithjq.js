$(document).ready(makeAjaxRequest);

function makeAjaxRequest() {
  $.ajax({
    url: "counties.json",
    type: "GET",
    dataType: "json",
    success: function (data) {
      let stxt = "";
      $.each(data.counties, function (index, county) {
        stxt += "<tr><td>" + county.name + "</td></tr>";
      });
      $("#countylist").append(stxt);
    },
    error: function (xhr, status, error) {
      $("#updatemessage").html("An Error Occurred: " + xhr.status);
    },
  });
}
