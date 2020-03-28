'use strict';
Interceptor.attach(Module.findExportByName("libart.so", "_ZN3art7DexFile10OpenMemoryEPKhjRKNSt3__112basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEjPNS_6MemMapEPKNS_10OatDexFileEPS9_"), {
    onEnter: function (args) {
        var begin = args[1]
        console.log("Magic : " + Memory.readUtf8String(begin))
        var address = parseInt(begin,16) + 0x20
        var dex_size = Memory.readInt(ptr(address))
        console.log("Dex Size :" + dex_size)
        var file = new File("/data/data/com.demo.script/" + dex_size + ".dex", "wb")
        file.write(Memory.readByteArray(begin, dex_size))
        file.flush()
        file.close()
		console.log("Dex Dumped Successfully at /data/data/om.demo.script/");
    },
    onLeave: function (retval) {
        if (retval.toInt32() > 0) {}
    }
});



