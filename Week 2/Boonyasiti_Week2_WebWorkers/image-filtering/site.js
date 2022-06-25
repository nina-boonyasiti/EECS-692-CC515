var images = document.querySelectorAll('img');
images.forEach(function(image) {
    image.addEventListener('click', function(){
    filterImage(image, 'grayscale.js');
  });
});

function filterImage(imageElement, filterWorkerPath) {
  var canvas = document.createElement('canvas');
  canvas.width = imageElement.naturalWidth;
  canvas.height = imageElement.naturalHeight;

  var context = canvas.getContext('2d');
  context.drawImage(imageElement, 0, 0);

  var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  
  var worker = new Worker(filterWorkerPath);
  worker.addEventListener('message', function(message){
    context.putImageData(message.data, 0, 0);
    imageElement.src = canvas.toDataURL();
  });

  worker.postMessage(imageData, imageData);

}




