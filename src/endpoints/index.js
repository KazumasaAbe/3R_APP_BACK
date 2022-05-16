const fs = require('fs');
const path = require('path');

exports.declareEndpoints = function (server) {
  fs.readdirSync(__dirname).forEach(file => {
    if (file != 'index.js')  {
      let endpoint = require(path.join(__dirname, `/${file}`));
      let endpointName = file.substring(0, file.lastIndexOf('.')) || file;

      if (endpoint.method == 'GET') {
        server.get(`/${endpointName}`, function(req, res) {
          endpoint.handleRequestGet(req, res);
        })
        return
      }
    }
  })
}