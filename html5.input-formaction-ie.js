;(function(){
	var
	bind = function( target, type, func ) {
		// 어차피 ie9 이하에서만 작동할거라서 나머지 Event 삭제
		target.attachEvent( 'on' + type, func );
	},
	each = function( elems, block ) {
		for( var i = 0, len = elems.length; i < len; i++) {
			block( elems[i] );
		}
	};
	bind( window, 'load', function(){
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
			bind( target[1], 'click', function() {
				target[0].action = target[1].getAttribute('formaction');
				target[0].submit();
				return false;
			});
		});		
	});
})();