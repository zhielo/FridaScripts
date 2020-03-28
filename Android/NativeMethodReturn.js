setTimeout(function() { 
        var Demo = Process.findModuleByName("Libdemo.so");
        Module.enumerateExportsSync(Demo.name).forEach(function (exp) {

          try {
               Interceptor.attach(ptr(exp.address), {
                     onEnter: function (args) {
                         console.log(exp.name + " argument : "+ args[0]);
                         },
                      onLeave: function(retval)  {         
                         console.warn(exp.name + " [ Retval ] : "+retval);
            
                     }
            });
        } catch (e) { } 
    });
    }, 1000);
	/* Change Timeout if Library is Loaded few second later or sooner*/