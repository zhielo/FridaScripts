setTimeout(function() {
setImmediate(function() 
{
   Java.perform ( function() 
   {  
      var Redirect = Java.use("android.content.Intent");
	  var IapIntent=Java.use("android.content.Intent").$new("com.android.vending.billing.InAppBillingService.BIND");
	  var LVLIntent=Java.use("android.content.Intent").$new("com.android.vending.licensing.ILicensingService");
	 /*  var Installer= Java.use("android.app.ApplicationPackageManager");
       Installer.getInstallerPackageName.overload('java.lang.String').implementation = function (Str)
	  {     console.log("Original Call : " + Str.toString())
	        console.log("[Fixed]. Package Is Installed From Play Store ");
	        return "com.android.vending";	 
	  } */
	
      Redirect.setPackage.overload('java.lang.String').implementation = function (pkg)
	  {    
	     if(pkg=='com.android.vending')
		  {
	        this.setPackage("com.android.vendinf");
		  }
		  else
		 {    
			  this.setPackage(pkg);
		  } 
		  return IapIntent;   
	  }
	 
	   var  VerifySign= Java.use("java.security.Signature");
      VerifySign.verify.overload('[B').implementation = function (paramBool)
	  { 
	        return true;	 
	  }

    var RootPackages = ["com.android.vendinf", "com.android.vendint" ];
	var PackageManager = Java.use("android.app.ApplicationPackageManager");
    PackageManager.getPackageInfo.implementation = function(pname, flags) {
        var shouldFakePackage = (RootPackages.indexOf(pname) > -1);
        if (shouldFakePackage) {
            console.log("Detected : " + pname);
            pname = "Fuck.You.Detector";
        }
        return this.getPackageInfo.call(this, pname, flags);
    };







	}

  )
 }
) 
}, 0);

























    

   

  

   
    

   

   

    

    
    


  


    
   

   

   












