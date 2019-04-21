$(function(){
    $('.mapLinks').click(function(e){
        e.preventDefault();
        $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        $(this).children('path').css({fill: 'lightgrey'});
        console.log($(this).attr("id"));
    });
});