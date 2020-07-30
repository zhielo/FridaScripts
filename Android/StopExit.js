Java.perform ( function() 
   {  
      	  
   var system = Java.use("java.lang.System");
   system.exit.overload("int").implementation = function(var0) {
	   console.log("[*] Exit Called");
   }
   
 Java.choose("android.app.Activity",{
      onMatch : function(instance) 
      {
   instance.onDestroy.overload().implementation = function() {
	   console.log("[*] onDestroy() Called");
   }
	  },
	  onComplete :function(retval)
	  {  }  });
    
	var act = Java.use("android.app.Activity");
   act.finish.overload().implementation = function() {
	   console.log("[*] Finish() Called");
   } 

	var act = Java.use("android.app.Activity");
   act.finishActivity.overload('int').implementation = function(arg) {
	   console.log("FinishActivity():-->>"+arg);
	   console.log("[*] FinishActivity() Called");
   }
   
   
	var Proc = Java.use("android.os.Process");
   Proc.killProcess.overload('int').implementation = function(arg) {
	   console.log("KillProcess():-->>"+arg);
	   console.log("[*] KillProcess() Called");
   }
   
   
	var AR = Java.use("android.app.Activity");
   AR.onActivityResult.overload('int', 'int', 'android.content.Intent').implementation = function(a,b,c) {
	   console.log("onActivityResult():-->>"+a+ " " +b+" " +c);
	   console.log("[*] onActivityResult() Called");
   }

   var FinishAffinity = Java.use("android.app.Activity");
  FinishAffinity.finishAffinity.overload().implementation = function() {
	   
	   console.log("[*] finishAffinity() Called");
   }
   
  var FinishAndRemoveTask= Java.use("android.app.Activity");
  FinishAndRemoveTask.finishAndRemoveTask.overload().implementation = function() {
	   
	   console.log("[*] FinishAndRemoveTask() Called");
   }
   
  var StartActivity= Java.use("android.app.Activity");
  StartActivity.startActivity.overload("android.content.Intent").implementation = function(intent) {
	   
	   console.log("[*] startActivity() Called with " + intent);
	   return this.startActivity(intent);
	   
	 }   

	}
  )
  
  
 Interceptor.attach(Module.findExportByName(null, "exit"), {
        onEnter: function(args) 
        {
          console.log("Native Exit() Called :-->");
        },
        onLeave: function(retval) {

        }
    });