$(function(){
    $('.mapLinks').click(function(e){
        e.preventDefault();
        $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        $(this).children('path').css({fill: 'rgb(74, 151, 185)'});
        console.log($(this).attr("id"));
    });
});