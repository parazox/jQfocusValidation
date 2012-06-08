/**
 * jQfocusValidation
 *
 * @version      0.91
 *
 * 2012-06-09
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
		            $(self.elem[0].elements[ name ]).change(function(){
		                self.check_before($(this).attr('name'));
		            });
		        } else if(type=='text') {
					$(self.elem[0].elements[ name ]).focus(function(){
		                $(this).addClass('focus');
		                self.check_before($(this).attr('name'));
		            });
		            $(self.elem[0].elements[ name ]).blur(function(){
		                $(this).removeClass('focus');
		            });
		        } else if(type=='select') {
		            $(self.elem[0].elements[ name ]).change(function(){
		                self.check_before($(this).attr('name'));
		            });
		        } else if(type=='textarea') {
		            $(self.elem[0].elements[ name ]).focus(function(){
		                $(this).addClass('focus');
		                self.check_before($(this).attr('name'));
		            });
		            $(self.elem[0].elements[ name ]).blur(function(){
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
					var cur_obj = $(self.elem[0].elements[ name ]);
					var val = cur_obj.filter(":checked").val();
		            if( typeof(val)=='undefined' || val=='') {
		                cur_obj.parent().addClass('invalid');
		            } else {
		                cur_obj.parent().removeClass('invalid');
		            }
		        } else if(type=='text') {
					var cur_obj = $(self.elem[0].elements[ name ]);
		            var val = cur_obj.val();
		            if( typeof(val)=='undefined' || val=='') {
		                cur_obj.parent().addClass('invalid');
		            } else {
		                cur_obj.parent().removeClass('invalid');
		            }
		        } else if(type=='textarea') {
					var cur_obj = $(self.elem[0].elements[ name ]);
		            var val = cur_obj.val();
		            if( typeof(val)=='undefined' || val=='') {
		                cur_obj.parent().addClass('invalid');
		            } else {
		                cur_obj.parent().removeClass('invalid');
		            }
		        } else if(type=='select') {
		            var cur_obj = $(self.elem[0].elements[ name ]);
		            var val = cur_obj.val();
		            if( typeof(val)=='undefined' || val=='') {
		                cur_obj.parent().addClass('invalid');
		            } else {
		                cur_obj.parent().removeClass('invalid');
		            }
		        }
		    }
		}
	}
	
	$.fn.jQfocusValidation = function(options) {
		return jQfocusValidation(this, options);
	}

}(jQuery, this, this.document));

