define(['jquery', 'database'], function($) {

    var buttonHtml = '<button class="btn btn-primary" type="button">Roll <span class="dice-roll" style="display: none;">0</span></button>';    
    
    $(document).ready( function() {

	$('.dice').each( function() {
	    dice = $(this);
	    
	    var button = $(buttonHtml);
	    dice.prepend( button );

	    dice.persistentData(function(event) {
		if ('roll' in event.data) {
		    dice.find('.dice-roll').text( event.data.roll );
		    dice.find('.dice-roll').show();
		}
	    });
	    
	    dice.click( function() {
		dice.persistentData('roll', Math.floor(Math.random() * 6) + 1);
	    });
	});
    });
});
