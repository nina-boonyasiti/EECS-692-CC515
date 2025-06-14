const fs = require('fs');
const path = require('path');
const serveFile = require('./serve-file');

function listDirectory(req, res) {
  var pathname = new URL(req.url, "http://localhost").pathname;
  var dirPath = path.join('public', pathname);

  fs.readdir(dirPath, (err, entries) => {
    
    if(err) return req.writeHead(404).end();

    if(entries.includes('index.html')) {
      req.url = path.join(req.url, "index.html");
      serveFile(req, res);
      return;
    }
    
    var pathHeader = `<h2>Directory Listing for ${pathname}</h2>`;
    var parentLink = (pathname === "/") ? "" : `<a href="${path.dirname(pathname)}">Parent directory</a>`;
   
    var listing = entries.map(entry => {
      var url = path.posix.join(pathname, entry);
      return `<a href="${url}">${entry}</a>`;
    }).join("\n");

    var html = `<!doctype html>
    <html>
      <head>
        <title>Directory Listing</title>
      </head>
      <body>
        ${pathHeader}
        <div style="display: flex; flex-direction: column; padding: 2rem 0">
          ${listing}
        </div>
        ${parentLink}
      </body>
    </html>
    `;

    res.writeHeader(200, {
      "Content-Type": "text/html",
      "Content-Length": html.length
    }).end(html);

  });

    

}

module.exports = listDirectory;