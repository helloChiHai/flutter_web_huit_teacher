// web/js/js_library.js

window.jsPromiseFunction = function (message) {
  return new Promise((resolve, reject) => {
    if (window.flutter_inappwebview) {   // <-- đúng phải check cái này
      window.flutter_inappwebview.callHandler("FlutterChannel", message)
        .then(function (response) {
          console.log("Flutter response:", response);
          resolve(response);
        });
    } else {
      console.warn("flutter_inappwebview not available");
      reject("flutter_inappwebview not available");
    }
  });
};



window.jsOpenTabFunction = function (url) {
  return new Promise((resolve, reject) => {
    window.open(url, "_blank");
    resolve("Tab opened");
  });
};

window.getPlatform = function () {
  return "JS Platform";
};


///

// Giả sử đây là nơi JS nhận message từ bên ngoài
window.sendExternalMessage = function (message) {
  if (window.sendMessageToDart) {
    window.sendMessageToDart(message);
  } else {
    console.warn("Dart callback is not registered");
  }
};
