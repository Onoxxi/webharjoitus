$(document).ready(function() {
  $("#Kirjaudubtn").click(function(){

    var urli ="http://localhost:3002/logi/" + $("#Nimi").val() + "/" + $("#Salis").val();
    $.get(urli, function(data) {
      $.each(data, function(n, val) {
        if(isNaN(val.kayttajaID)){
          console.log("asd");
        } else {
          window.location.replace("http://localhost:3002/chatti");
        }
      });
    }, "json");

  });

} );
