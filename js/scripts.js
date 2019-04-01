
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    groceries.forEach(function(grocery){
      var userInput = $("input#" + grocery).val();
      $("." + grocery).text(userInput);
    });

    things = [$("#item1").val(), $("#item2").val(), $("#item3").val() ,$("#item4").val() ,$("#item5").val()];

    console.log(things);
    things.forEach
      $("#fig0").append("<li>" + $("#item1").val() + "</li>");
      $("#fig0").append("<li>" + $("#item2").val() + "</li>");
      $("#fig0").append("<li>" + $("#item3").val() + "</li>");
      $("#fig0").append("<li>" + $("#item4").val() + "</li>");
      $("#fig0").append("<li>" + $("#item5").val() + "</li>");

      $("#formOne").hide();
      $(".shopList").show();

    event.preventDefault();
  });
});
