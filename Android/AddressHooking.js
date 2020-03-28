
setTimeout(function() { 
Interceptor.attach(ptr(0x95ee9da0), {
                     onEnter: function (args) {
                           console.log("Called with argument : "+ args[0]);
                        },
                      onLeave: function(retval)  {         
                             console.log(  " Retval : "+retval);
                     }
            });
			}, 0);