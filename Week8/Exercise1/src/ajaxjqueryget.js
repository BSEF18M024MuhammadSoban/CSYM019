$(document).ready(function() {
  $.get("counties.json", function(response, status) { // Returns a string, which is then converted to JSON
   if (response) {
     let sTxt = "";
     $.each(response.counties, function(index) {        
       sTxt += "<option>" + response.counties[index].name + "</option>";
     });
     $("#countylist").append(sTxt);
   } else {
       $("#info").html("<p>An error has occurred</p>");
   }
   });      
});