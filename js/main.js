$(document).ready(function() {
  $("#testcookie").click(function(){
    var x = document.cookie;

    console.log(x);
    b = x.split('=');
    console.log(b[0]);
  });

  $("#Logout").click(function(){
    console.log("log");
    var x = document.cookie;
    b = x.split('=');
    console.log(b[0]);
    document.cookie = "" + b[0] + "= ; expires = Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.replace("http://localhost:3002/");
  });

  $("#KayttajaMuok").click(function(){
    window.location.replace("http://localhost:3002/muokkaus");
  });

  $("#HuoneLuontNap").click(function(){
    var urli ="http://localhost:3002/luoHuon/" + $("#huoneenNimi").val();
    $.post(urli,  function(data) {
      if(data['success']){
        alert("Huone on jo olemassa");
        $("#huoneenNimi").val("");
      } else {
        alert("Huoneen luonti onnistu");
        $("#huoneenNimi").val("");
        location.reload();
      }
    }, "json");
  });

  var urli2 = "http://localhost:3002/haehuoneet";
  $.get(urli2, function(data) {
    $.each(data, function(n, val){
      $("#huonlaati").append('<button type="button" id="' + val.huoneNimi + '" onClick="huonenappi(this.id)">' + val.huoneNimi + '</button>');
    });
  });

} );
