
  const HP = Process.getModuleByName('base.odex');
  /*  http://m.tracfone.com   in Hex Bytes */
  const OldHomePage = '68 74 74 70 3A 2F 2F 6D 2E 74 72 61 63 66 6F 6E 65 2E 63 6F 6D'; 
  /*  http://www.google.com   in Hex Bytes */
  const NewHomePage = [0x68,0x74,0x74,0x70,0x3A,0x2F,0x2F,0x77,0x77,0x77,0x2E,0x67,0x6F,0x6F,0x67,0x6C,0x65,0x2E,0x63,0x6F,0x6D];
  const HomePage = Memory.scanSync(HP.base, HP.size, OldHomePage);
  console.log('[+] Found ' + HomePage.length + ' Old Homepage Address');
  HomePage.forEach(function (Home) {
    console.log('[+] Changing @ ' + Home.address + '...');
    Memory.patchCode(Home.address, 2, function (code) {
      Home.address.writeByteArray(NewHomePage);
    });
  });

