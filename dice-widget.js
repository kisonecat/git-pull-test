define(['jquery', 'database'], function(jquery) {
    var $ = require('jquery');

    var buttonHtml = '<button class="btn btn-primary btn-hint-collapse" type="button" aria-expanded="false" aria-controls="collapse">Roll <span class="dice-roll" style="display: none;">0</span></button>';    
    
    $(document).ready( function() {
	
	$('.dice').each( function(dice) {
	    var button = $(buttonHtml);
	    dice.append( button );
	});

    });
});


