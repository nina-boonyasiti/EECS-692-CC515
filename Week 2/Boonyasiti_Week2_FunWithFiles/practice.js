const fs = require("fs");
fs.readdir("stuff", {withFileTypes: true}, (err, entries) => {
  if(err) return console.log(err);
  entries.forEach(entry => {
      console.log(`${entry.name} is a file: ${entry.isFile()}`);
  });
});