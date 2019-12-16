$(document).ready(function() {
  $("#rekistnap").click(function(){
    console.log("asd");
    var urli ="http://localhost:3002/regi/" + $("#Nimi").val() + "/" + $("#Salis").val();
    $.post(urli, function(data) {
      if(data['success']){
        alert("Nimi on jo käytössä");
        $("#Nimi").val("");
        $("#Salis").val("");
      } else {
        alert("Rekisteröinti onnistui");
        window.location.replace("http://localhost:3002/");
      }
    }, "json");

  });

  $("#peruutanap").click(function(){
    window.location.replace("http://localhost:3002/");
  });

} );
