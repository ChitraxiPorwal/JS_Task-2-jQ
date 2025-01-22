$(document).ready(function(){
    $("#TTT").click(function(){
        $.get("https://api.nasa.gov/techtransfer/patent/?engine&api_key=kD9Fi4qqO2d1kViJTN97rQlRn5MZzaIoezpvzw7r", function(data, status){
                $('#APOD').hide();
                $('#TLE').hide();
                $('.tablinks').removeClass('active');
                $('#TT').show();
                $('#h3').text(data.results[0][5]);
                $('#p3').text(data.results[0][3]);
                $('#image2').attr('src', data.results[0][10]).css({width: '150px',height: '150px'});
                $('#h4').text(data.results[1][5]);
                $('#p4').text(data.results[1][3]);
                $('#image2').attr('src', data.results[1][10]).css({width: '150px',height: '150px'});
        });
    });
  });