/* Manual String Decryption for a sample obfuscated with 
https://m.apkpure.com/bg-anti-decompile-reverse-java/com.bgplus.Anti.JavaDecompiler  */

setImmediate(function() 
{
Java.perform ( function()
{   
	var dec=Java.use("com.l000013.l000021.¢¢¢Þ");
	dec['¢¢æº'].overload("int").implementation=function(x)
	{
		var xyz=dec["¢¢æº"](x);
		var title=dec["¢¢æº"](73);
		var message=dec["¢¢æº"](84);
		var url=dec["¢¢æº"](0x5F);
		var pbutton=dec["¢¢æº"](150);
		var nbutton=dec["¢¢æº"](0xC6);
		console.warn("\n Decrypted String from [com.l000013.l000021.¢¢¢Þ.¢¢æº]   \n " )
     console.log(		"Title(73) = "+ title +"\n" + "Message(84) = "+ message +"\n" +"URL(0x5F) = " + url +"\n"+ "PositiveButton(150) = "+pbutton+"\n"+"NegativeButton(0xC6) = "+ nbutton );
		return xyz;
	}
}
)
} );