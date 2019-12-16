$(document).ready(function() {

  $("#muoknap").click(function(){

    var urli ="http://localhost:3002/muoks/" + $("#vanhaSalis").val() + "/" + $("#uusiSalis").val();
    $.post(urli,  function(data) {
      if(data['success']){
        alert("Vanha salasana väärin");
        $("#vanhaSalis").val("");
        $("#uusiSalis").val("");
      } else {
        alert("Salasana vaihdettu");
        window.location.replace("http://localhost:3002/chatti");
      }
    }, "json");

  });

  $("#peruutanap").click(function(){
    window.location.replace("http://localhost:3002/chatti");
  });

} );
