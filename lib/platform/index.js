/*
  package.json中的 "browser" 字段，声明了
  "./lib/platform/node/index.js": "./lib/platform/browser/index.js"
  因此，在浏览器环境下，这里解析的是browser中的index.js文件

  如果使用的是webapck,可以发现模块引入路径信息为：
  var _node_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/! ./node/index.js / "./lib/platform/browser/index.js");
*/
import platform from './node/index.js';

export {platform as default}
