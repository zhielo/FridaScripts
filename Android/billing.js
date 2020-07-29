setTimeout(function() {
setImmediate(function() 
{
   Java.perform ( function() 
   {  
      var Redirect = Java.use("android.content.Intent");
	  var IapIntent=Java.use("android.content.Intent").$new("com.android.vending.billing.InAppBillingService.BIND");
	  var LVLIntent=Java.use("android.content.Intent").$new("com.android.vending.licensing.ILicensingService");

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
		  /* If App is Using License Verification then return LVLIntent */
	  }
	 
	  var  VerifySign= Java.use("java.security.Signature");
      VerifySign.verify.overload('[B').implementation = function (paramBool)
	  { 
	        return true;	 
	  }

	}

  )
 }
) 
}, 0);

























    

   

  

   
    

   

   

    

    
    


  


    
   

   

   












