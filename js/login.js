$(document).ready(function() {
  $("#Kirjaudubtn").click(function(){

    var urli ="http://localhost:3002/logi/" + $("#Nimi").val() + "/" + $("#Salis").val();
    $.get(urli, function(data) {
      if(data == ""){
        alert("Käyttäjää ei ole tai salasana on väärin");
        $("#Nimi").val("");
        $("#Salis").val("");
      }else {
      $.each(data, function(n, val) {
        if(data.length == 0){
          alert("Käyttäjää ei ole tai salasana on väärin");
        } else {
          alert("Kirjautuminen onnistui");
          window.location.replace("http://localhost:3002/chatti");
        }
      });
    }
    }, "json");

  });

  $("#rekisterointiin").click(function(){
    window.location.replace("http://localhost:3002/rekisteroi");
  });

} );
