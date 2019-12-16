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

} );
