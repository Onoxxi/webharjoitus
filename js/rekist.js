$(document).ready(function() {
  $("#test").click(function(){
    console.log("asd");
    var urli ="http://localhost:3002/regi/" + $("#Nimi").val() + "/" + $("#Salis").val();
    $.post(urli, function(data) {
      console.log("asd");
    }, "json");

  });

} );
