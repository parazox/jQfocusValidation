/**
 * jQfocusValidation
 *
 * @version      0.9
 *
 * 2012-05-11
 */
;(function($, window, document, undefined) {
	var jQfocusValidation = function(elem, options) {
		if ( !(this instanceof jQfocusValidation) ) {
			return new jQfocusValidation(elem, options);
		}
		this.elem = elem;
		this.conf = options;
		this._init();
	}
	
	jQfocusValidation.prototype = {
		_init : function()
		{
			var self = this,
				conf = self.conf;
				
		    for (var i in conf) {
		        var type = conf[i].type;
		        var name = conf[i].name;
		        var val;
		        if(type=='radio') {
		            $('input[name='+name+']').change(function(){
		                self.check_before($(this).attr('name'));
		            });
		        } else if(type=='text') {
		            $('input[name='+name+']').focus(function(){
		                $(this).addClass('focus');
		                self.check_before($(this).attr('name'));
		            });
		            $('input[name='+name+']').blur(function(){
		                $(this).removeClass('focus');
		            });
		        } else if(type=='select') {
		            $('select[name='+name+']').change(function(){
		                self.check_before($(this).attr('name'));
		            });
		        } else if(type=='textarea') {
		            $('textarea[name='+name+']').focus(function(){
		                $(this).addClass('focus');
		                self.check_before($(this).attr('name'));
		            });
		            $('textarea[name='+name+']').blur(function(){
		                $(this).removeClass('focus');
		            });
		        }
		    }
		},
		//iとそれ以前の要素全部のチェック
		check_before : function(cur)
		{
			var self = this,
				conf = self.conf;
				
		    var is_continue = false;
		    for (var i in conf) {
		        var type = conf[i].type;
		        var name = conf[i].name;
		        var msg = '';

		        if(typeof(cur)=='undefined') {
            
		        } else {
		            if ( name==cur ) {
		                is_continue = true;
		            }
		        }

		        if(is_continue){
		            continue;
		        }
        
		        if(type=='radio') {
		            var val = $('input[name='+name+']:checked').val();
		            if( typeof(val)=='undefined' || val=='') {
		                $('input[name='+name+']').parent().addClass('invalid');
		            } else {
		                $('input[name='+name+']').parent().removeClass('invalid');
		            }
		        } else if(type=='text') {
		            var val = $('input[name='+name+']').val();
		            if( typeof(val)=='undefined' || val=='') {
		                $('input[name='+name+']').parent().addClass('invalid');
		            } else {
		                $('input[name='+name+']').parent().removeClass('invalid');
		            }
		        } else if(type=='textarea') {
		            var val = $('textarea[name='+name+']').val();
		            if( typeof(val)=='undefined' || val=='') {
		                $('textarea[name='+name+']').parent().addClass('invalid');
		            } else {
		                $('textarea[name='+name+']').parent().removeClass('invalid');
		            }
		        } else if(type=='select') {
		            var val = $('select[name='+name+']').val();
		            if( typeof(val)=='undefined' || val=='') {
		                $('select[name='+name+']').parent().addClass('invalid');
		            } else {
		                $('select[name='+name+']').parent().removeClass('invalid');
		            }
		        }
		    }
		}
	}
	
	$.fn.jQfocusValidation = function(options) {
		return jQfocusValidation(this, options);
	}

}(jQuery, this, this.document));

