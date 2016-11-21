(function($){

	$.fn.blurPlug = function(conf){


		var conf = $.extend({
			filter: 'blur',
			filter: 'grayscale',
			filter: 'brightness',
			filter: 'contrast',
		}, conf)



		var start = function(){

			var section = $(this).parent();
			var bgImg = $(this).css('background-image');
			// $(this).find( 'img' ); *****
			section.append('<div class="filtered">');
			$('.filtered').css('background-image', bgImg);
			////////////////////////////
			//////TODO: Switch. Css method
			////////////////////////////
			// if( conf.filter == 'blur' ){
			// 	$('.filtered').addClass('blur')
			// }else if( conf.filter == 'grayscale' ){
			// 	$('.filtered').addClass('grayscale')
			// }else if( conf.filter == 'brightness' ){
			// 	$('.filtered').addClass('brightness')
			// }else if( conf.filter == 'contrast' ){
			// 	$('.filtered').addClass('contrast')
			// }

			switch (conf.filter) {
				case"blur":
				$('.filtered').addClass('blur');
				break;

				case"grayscale":
				$('.filtered').addClass('grayscale');
				break;

				case"contrast":
				$('.filtered').addClass('contrast');
				break;

				case"brightness":
				$('.filtered').addClass('brightness');
				break;

				default:
    			document.write("error")

			}

		}

		return this.each(start)
	}

}(jQuery))