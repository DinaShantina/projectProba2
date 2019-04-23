$(function(){

    $('.mapLinks').click(function(e){
        e.preventDefault();
        $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        $(this).children('path').css({fill: 'lightgrey'});
        console.log($(this).attr("id"));

    });

    $('.buttonsOverMap li').click(function(){
    	$(this).addClass('newColor');
    	$('.buttonsOverMap li').not($(this)).removeClass('newColor');
    	let clicked = $(this).children('label').attr('id');
    	arr.sort((a, b)=> a - b);
    	console.log(arr);
    	console.log(clicked);
    	$('#Macedonia').children('path').css({ fill: 'lightgrey' });
    });

    // arr for results;
    // you can store them here if u want it stores them from lowest to highest :D.
    let arr = [];




});