/* dialog.js */

// Your JavaScript code goes here...

// var button = document.getElementById('open-dialog');
// button.addEventListener('click', function(event) {
//   var dialog = document.getElementById('dialog-1');
//   dialog.classList.add('active');
// });

// var closeButton = document.querySelector('#dialog-1 .close-button');
// closeButton.addEventListener('click', function(event) {
//   var dialog = document.getElementById('dialog-1');
//   dialog.classList.remove('active');
// });

//Refactor the button and closeButton

var dialogs = document.querySelectorAll('.dialog');
dialogs.forEach(function(dialog) {
  var buttons = dialog.querySelectorAll('.close-button')
  buttons.forEach(function(button) {
    button.addEventListener('click', function(){
      dialog.classList.remove('active');
    });
  });
});

var buttons = document.querySelectorAll('.open-dialog');
buttons.forEach(function(button){
  var id = button.dataset.dialogId;
  var dialog = document.getElementById(id);
  button.addEventListener('click', function(){
    dialog.classList.add('active');
  });
});