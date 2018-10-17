// Maked by 0x77 (Misha Marinenko)
// Licensed under GPL-3.0
// UrbanSync.core for android. 
// Based on ipfs: https://github.com/ipfs/ipfs (https://ipfs.io )

(function(){
	//Init varibles...
	window.urban={core: null, start: null};
	window.urban.core={
		ipfs: null,
		ipfsVars: {
			appFilesPath: cordova.file.dataDirectory.split("file://")[1] + "files/",
			initStatus: {
				status: false,
				res: null
			},
			startStatus: {
				status: false,
				res: null
			}
		}
	};
	var window.urban.core.ipfs = new CordovaIpfs();
	// init ipfs:
    window.urban.core.ipfs.init({
        src: "https://dist.ipfs.io/go-ipfs/v0.4.8/go-ipfs_v0.4.8_linux-arm.tar.gz",
        appFilesDir: window.urban.core.ipfsVars.appFilesPath,
        resetRepo: false
    }, function(res) {
       window.urban.core.ipfsVars.initStatus.status=true;
	   window.urban.core.ipfsVars.initStatus.res=res;
    }, function(err) {
        window.urban.core.ipfsVars.initStatus.status=false;
        window.urban.core.ipfsVars.initStatus.res=err;
    });
    //Starting ipfs:
    window.urban.start = function (){
    window.urban.core.ipfs.start(function(res){
        window.urban.core.ipfsVars.startStatus.status=true;
        window.urban.core.ipfsVars.startStatus.res=res;
    }, function(err){
        window.urban.core.ipfsVars.startStatus.status=false;
        window.urban.core.ipfsVars.startStatus.res=err;
    });
    };

})

