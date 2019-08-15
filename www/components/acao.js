// This is a JavaScript file

$(document).on("click", "#back", function(){
  $(location).attr("href", "index.html")
})

$(document).on("click", "#codigo",function(){
  cordova.plugins.barcodeScanner.scan(
      function (result) {
            if(result.text == 280720550){
              $(location).attr("href","produto1.html");
            }
            if(result.text == 989895555){
              $(location).attr("href","produto2.html");
            }
            if(result.text == 85236987){
              $(location).attr("href","produto3.html");
            }
            if(result.text == 85369877444){
              $(location).attr("href","produto4.html");
            }
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417, CODE_39, CODE_128, CODE_93", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
})
