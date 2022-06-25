onmessage = function(event) {
  var imageData = event.data;
  var data = imageData.data;

  for (var i = 0; i < data.length; i += 4) {
    var r = data[i];
    var g = data[i + 1];
    var b = data[i + 2];
    var value = r * 0.2989 + g * 0.5870 + b * 0.1140;
    data[i] = value;
    data[i + 1] = value;
    data[i + 2] = value;

  }

  postMessage(imageData, imageData);
  close();
}