;(function(){
	var
	eventBind = function( target, type, func ) {
		if ( target.attachEvent ) {
			target.attachEvent( 'on' + type, func );
		}
		else if ( target.addEventListener ) {
			target.addEventListener( type, func );
		}
	}
	each = function( elems, block ) {
		for( var i = 0, len = elems.length; i < len; i++) {
			block( elems[i] );
		}
	};
	window.onload = function() {
		var targets = [];
		each( document.getElementsByTagName('form'), function( form ) {
			each( form.getElementsByTagName('input'), function( input ) {
				if ( input.getAttribute('formaction') !== null ) {
					targets.push( [form, input] );
				}
			});
			each( form.getElementsByTagName('button'), function( input ) {
				if ( input.getAttribute('formaction') !== null ) {
					targets.push( [form, input] );
				}
			});			
		});
		each( targets, function( target ) {
			eventBind( target[1], 'click', function() {
				target[0].action = target[1].getAttribute('formaction');
				target[0].submit();
				return false;
			});
		});
	};
})();