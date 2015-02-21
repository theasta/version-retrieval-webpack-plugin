# Version Retrieval plugin for webpack

## Example

``` javascript
var VersionRetrievalPlugin = require("version-retrieval-webpack-plugin");
module.exports = {
	plugins: [
	  new VersionRetrievalPlugin({ outputFile: 'assets.json' })
	]
}
```
