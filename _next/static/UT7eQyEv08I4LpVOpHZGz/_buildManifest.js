(self.__BUILD_MANIFEST = (function (s) {
  return {
    __rewrites: { beforeFiles: [], afterFiles: [], fallback: [] },
    "/": [
      s,
      "static/chunks/478-6397e8c48dae768e.js",
      "static/chunks/pages/index-2a10eaceaa020f12.js",
    ],
    "/404": [s, "static/chunks/pages/404-ac2c977ee4aa11ff.js"],
    "/_error": ["static/chunks/pages/_error-a4ba2246ff8fb532.js"],
    sortedPages: ["/", "/404", "/_app", "/_error"],
  };
})("static/chunks/38-70306b8bb9e11254.js")),
  self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
