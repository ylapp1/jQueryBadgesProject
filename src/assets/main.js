$(document).ready(function() {

  // your code will go here
  $.ajax(
    {
      url: "https://www.codeschool.com/users/ylapp.json",
      dataType: "jsonp",
      success: function(result)
      {

        $.each(result.courses.completed, function(index, entry)
        {
          var div = $("<div></div>").addClass("course");

          div.append("<h3>" + entry.title + "</h3>");
          div.append("<img src='" + entry.badge + "'>");
          div.append("<a href='" + entry.url + "' target='blank' class='btn btn-primary'>See course</a>");
          $("#badges").append(div);
        });

      }
    });
});
