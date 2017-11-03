const path = require('path');

glob.sync('./lib/**/*.js').forEach(function (file) {
  require(path.resolve(file));
});
