var fs = require('fs');

function VersionRetrievalPlugin(options) {
  if(!options) options = {};
  this.publicPath = options.publicPath || '';
  this.outputFile = options.outputFile;
}

VersionRetrievalPlugin.prototype.apply = function(compiler) {
  var outputFile = this.outputFile;
  var publicPath = this.publicPath;
  compiler.plugin('done', function(stats) {
    var assets = stats.compilation.assets;
    var output = {};
    Object.keys(assets).forEach(function (versionedFile) {
      var matches;
      if (matches = versionedFile.match(/(.*)\.[a-z0-9]*\.(js|css)$/)) {
        output[ publicPath  + matches[1] + '.' + matches[2]] = publicPath + versionedFile;
      }
    });
    fs.writeFileSync(
      outputFile,
      JSON.stringify(output));
  });
};

module.exports = VersionRetrievalPlugin;
