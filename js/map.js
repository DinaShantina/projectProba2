$(function(){

    let arrMap = [];
    let byRanking = [];
    let byValue = [];
    // arrays for results it stores them from highest to lowest.

    //Clicks for the map-countries
    $('.mapLinks').click(function(e){
        e.preventDefault();
        $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        $(this).children('path').css({fill: 'lightgrey'});
        console.log($(this).attr("id"));
    });

    //Buttons over map sorting by category
    $('.buttonsOverMap li').click(function(){
    	$(this).addClass('newColor');
    	$('.buttonsOverMap li').not($(this)).removeClass('newColor');
    	let clicked = $(this).children('label').attr('id');
    	arrMap.sort((a, b)=> a - b);
        let reversed = arrMap.reverse();
    	console.log(reversed);
    	console.log(clicked);
    	$('#Macedonia').children('path').css({ fill: 'lightgrey' });
    });

  
    //by value and by ranking 
    $('.byRanking').click(function(){
        byRanking.sort((a, b)=> a-b);
        let reversed = byRanking.reverse();
        console.log(reversed);
    });
    $('.byValue').click(function(){
        byValue.sort((a, b)=> a-b);
        let reversed = byValue.reverse();
        console.log(reversed);
    });


});