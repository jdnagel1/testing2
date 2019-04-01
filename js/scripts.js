
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var groceries = ["item1", "item2", "item3", "item4", "item5"];
    var arr = [];
    groceries.forEach(function(grocery){
      var userInput = $("input#" + grocery).val();
      arr.push(userInput);
      $("." + grocery).text(userInput);
    });

    things = [$("#item1").val(), $("#item2").val(), $("#item3").val() ,$("#item4").val() ,$("#item5").val()];

      var uppers = arr.map(function(thing) {
        return thing.toUpperCase();
      });
      uppers.sort();

      for(var i = 0; i < uppers.length; i += 1){
      $("#fig0").append("<li>" + uppers[i] + "</li>");
    };

      $("#formOne").hide();
      $(".shopList").show();


    event.preventDefault();
  });
});
