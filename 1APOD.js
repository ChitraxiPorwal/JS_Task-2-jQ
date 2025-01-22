$(document).ready(function(){
    $("#A1").click(function(){
        $.get("https://api.nasa.gov/planetary/apod?api_key=kD9Fi4qqO2d1kViJTN97rQlRn5MZzaIoezpvzw7r", function(data, status){
                $('#TT').hide();
                $('#TLE').hide();
                $('.tablinks').removeClass('active');
                $('#APOD').show();
                $('#h2').text(data.title);
                $('#p1').text(data.explanation);
                $('#image1').attr('src', data.url).css({width: '150px',height: '150px'});
                $('#p2').text(data.date);
        });
    });
  });