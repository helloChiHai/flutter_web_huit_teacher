// web/js/js_library.js

window.jsPromiseFunction = function (message) {
  return new Promise((resolve, reject) => {
    if (window.FlutterChannel) {
      window.FlutterChannel.postMessage(message);
      resolve("Message sent to Flutter: " + message);
    } else {
      console.warn("FlutterChannel not available");
      reject("FlutterChannel not available");
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
