
var fIntercepted = false;
function revealNativeMethods() {
    if (fIntercepted === true) {
        return;
    }
    var jclassAddress2NameMap = {};
    var androidRunTimeSharedLibrary = "libart.so"; // may change between devices
    Module.enumerateSymbolsSync(androidRunTimeSharedLibrary).forEach(function(symbol){
        switch (symbol.name) {
            case "_ZN3art3JNI21RegisterNativeMethodsEP7_JNIEnvP7_jclassPK15JNINativeMethodib":
                
                var RegisterNativeMethodsPtr = symbol.address;
                console.log("RegisterNativeMethods is at " + RegisterNativeMethodsPtr);
                Interceptor.attach(RegisterNativeMethodsPtr, {
                    onEnter: function(args) {
                        var methodsPtr = ptr(args[2]);
                        var methodCount = parseInt(args[3]);
                        for (var i = 0; i < methodCount; i++) {
                            var pSize = Process.pointerSize;
                            
                            var structSize = pSize * 3; // JNINativeMethod contains 3 pointers
                            var namePtr = Memory.readPointer(methodsPtr.add(i * structSize));
                            var sigPtr = Memory.readPointer(methodsPtr.add(i * structSize + pSize));
                            var fnPtrPtr = Memory.readPointer(methodsPtr.add(i * structSize + (pSize * 2)));
                            // output schema: className#methodName(arguments)returnVal@address
                            console.log(
                                // package & class, replacing forward slash with dot for convenience
                                jclassAddress2NameMap[args[0]].replace(/\//g, '.') +
                                '#' + Memory.readCString(namePtr) + // method
                                Memory.readCString(sigPtr) + // signature (arguments & return type)
                                '@' + fnPtrPtr // C side address
                            );


                            Interceptor.attach(ptr(fnPtrPtr), {
                               onEnter: function (args) {
                                  
                                         },
                               onLeave: function(retval)  {         
                                  console.warn(" Retval of " +Memory.readCString(namePtr)+"[ "+fnPtrPtr+" ]" +" : "+retval + "\n");
							       // retval.replace(1);
                              }
                             });

                        }
                    },
                    onLeave: function (ignoredReturnValue) {}
                });
                break;
            case "_ZN3art3JNI9FindClassEP7_JNIEnvPKc": 
                Interceptor.attach(symbol.address, {
                    onEnter: function(args) {
                        if (args[1] != null) {
                            jclassAddress2NameMap[args[0]] = Memory.readCString(args[1]);
                        }
                    },
                    onLeave: function (ignoredReturnValue) {}
                });
                break;
        }
    });
    fIntercepted = true;
}

Java.perform(revealNativeMethods);

