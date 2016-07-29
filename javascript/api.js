$(document).ready(function () {
  $("#getMessage").on("click", function () {
    var html = " ";
		$.getJSON("https://crossorigin.me/http://quotes.stormconsultancy.co.uk/random.json", function (json) {
      html += json.quote + "<br>";
      html += "<div class ='author'>" + json.author;
      html += "</div>";
      $(".message").html(html);
      $("#tweet-link").attr("href", "https://twitter.com/intent/tweet?text=" + json.quote + " ");
    });
  });
});
