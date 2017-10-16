$(document).ready(function() {

  // your code will go here
  $.ajax(
    {
      url: "https://www.codeschool.com/users/ylapp.json",
      dataType: "jsonp",
      success: function(result) { showCourses(result.courses.completed); },
      error: function(error) { showError(); }
    });

    function showCourses(courses)
    {
      var badges = $("#badges");

      $.each(courses, function (index, course)
      {
        var div = $("<div></div>").addClass("course");
        div.append("<h3>" + course.title + "</h3>");
        div.append("<img src='" + course.badge + "'>");
        div.append("<a href='" + course.url + "' target='blank' class='btn btn-primary'>See course</a>");

        badges.append(div);
      });
    }

    function showError()
    {
      var badges = $("#badges");
      badges.append("<p>Failed to retrieve badges. Try refreshing the page");
    }
});
