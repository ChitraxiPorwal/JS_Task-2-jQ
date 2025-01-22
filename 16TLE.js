$(document).ready(function(){
    $("#TLEE").click(function(){
        $.get("https://tle.ivanstanojevic.me/api/tle/", function(data, status){
                $('#APOD').hide();
                $('#TT').hide();
                $('.tablinks').removeClass('active');
                $('#TLE').show();
                $('#h5').text("Satellites");
                for (var x = 5 , y = 0; x < 24 , y < 19 ; x++ ,y++)  {
                    $('#p' + x).text(data.member[y].name);
                }
        });
    });
  });