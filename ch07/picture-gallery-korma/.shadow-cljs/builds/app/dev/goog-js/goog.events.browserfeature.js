["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/browserfeature.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.events.BrowserFeature\");\n  goog.module.declareLegacyNamespace();\n  const purify = fn => {\n    return {valueOf:fn}.valueOf();\n  };\n  exports = {HAS_W3C_BUTTON:true, HAS_W3C_EVENT_SUPPORT:true, SET_KEY_CODE_TO_PREVENT_DEFAULT:false, HAS_NAVIGATOR_ONLINE_PROPERTY:true, HAS_HTML5_NETWORK_EVENT_SUPPORT:true, HTML5_NETWORK_EVENTS_FIRE_ON_BODY:false, TOUCH_ENABLED:\"ontouchstart\" in goog.global || !!(goog.global[\"document\"] && document.documentElement && \"ontouchstart\" in document.documentElement) || !!(goog.global[\"navigator\"] && (goog.global[\"navigator\"][\"maxTouchPoints\"] || goog.global[\"navigator\"][\"msMaxTouchPoints\"])), POINTER_EVENTS:\"PointerEvent\" in \n  goog.global, MSPOINTER_EVENTS:\"MSPointerEvent\" in goog.global && !!(goog.global[\"navigator\"] && goog.global[\"navigator\"][\"msPointerEnabled\"]), PASSIVE_EVENTS:purify(function() {\n    if (!goog.global.addEventListener || !Object.defineProperty) {\n      return false;\n    }\n    var passive = false;\n    var options = Object.defineProperty({}, \"passive\", {get:function() {\n      passive = true;\n    }});\n    try {\n      goog.global.addEventListener(\"test\", goog.nullFunction, options);\n      goog.global.removeEventListener(\"test\", goog.nullFunction, options);\n    } catch (e) {\n    }\n    return passive;\n  })};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Browser capability checks for the events package.\n */\n\ngoog.module('goog.events.BrowserFeature');\ngoog.module.declareLegacyNamespace();\n\n\n/**\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\n * assumes that any `valueOf` function is pure, without analyzing its contents.\n *\n * @param {function(): T} fn\n * @return {T}\n * @template T\n */\nconst purify = (fn) => {\n  return ({valueOf: fn}).valueOf();\n};\n\n\n/**\n * Enum of browser capabilities.\n * @enum {boolean}\n */\nexports = {\n  /**\n   * Whether the button attribute of the event is W3C compliant.  False in\n   * Internet Explorer prior to version 9; document-version dependent.\n   */\n  HAS_W3C_BUTTON: true,\n\n  /**\n   * Whether the browser supports full W3C event model.\n   */\n  HAS_W3C_EVENT_SUPPORT: true,\n\n  /**\n   * To prevent default in IE7-8 for certain keydown events we need set the\n   * keyCode to -1.\n   */\n  SET_KEY_CODE_TO_PREVENT_DEFAULT: false,\n\n  /**\n   * Whether the `navigator.onLine` property is supported.\n   */\n  HAS_NAVIGATOR_ONLINE_PROPERTY: true,\n\n  /**\n   * Whether HTML5 network online/offline events are supported.\n   */\n  HAS_HTML5_NETWORK_EVENT_SUPPORT: true,\n\n  /**\n   * Whether HTML5 network events fire on document.body, or otherwise the\n   * window.\n   */\n  HTML5_NETWORK_EVENTS_FIRE_ON_BODY: false,\n\n  /**\n   * Whether touch is enabled in the browser.\n   */\n  TOUCH_ENABLED:\n      ('ontouchstart' in goog.global ||\n       !!(goog.global['document'] && document.documentElement &&\n          'ontouchstart' in document.documentElement) ||\n       // IE10 uses non-standard touch events, so it has a different check.\n       !!(goog.global['navigator'] &&\n          (goog.global['navigator']['maxTouchPoints'] ||\n           goog.global['navigator']['msMaxTouchPoints']))),\n\n  /**\n   * Whether addEventListener supports W3C standard pointer events.\n   * http://www.w3.org/TR/pointerevents/\n   */\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\n\n  /**\n   * Whether addEventListener supports MSPointer events (only used in IE10).\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\n   */\n  MSPOINTER_EVENTS:\n      ('MSPointerEvent' in goog.global &&\n       !!(goog.global['navigator'] &&\n          goog.global['navigator']['msPointerEnabled'])),\n\n  /**\n   * Whether addEventListener supports {passive: true}.\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\n   */\n  PASSIVE_EVENTS: purify(function() {\n    // If we're in a web worker or other custom environment, we can't tell.\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\n      return false;\n    }\n\n    var passive = false;\n    var options = Object.defineProperty({}, 'passive', {\n      get: function() {\n        passive = true;\n      }\n    });\n    try {\n      goog.global.addEventListener('test', goog.nullFunction, options);\n      goog.global.removeEventListener('test', goog.nullFunction, options);\n    } catch (e) {\n    }\n\n    return passive;\n  })\n};\n","~:compiled-at",1670897019945,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.browserfeature.js\",\n\"lineCount\":26,\n\"mappings\":\"AAAA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAUAA,MAAKC,CAAAA,MAAL,CAAY,4BAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAWA,QAAMC,SAAUC,EAADD,IAAQ;AACrB,WAAQ,CAACE,QAASD,EAAV,CAAeC,CAAAA,OAAhB,EAAP;AADqB,GAAvB;AASAC,SAAA,GAAU,CAKRC,eAAgB,IALR,EAURC,sBAAuB,IAVf,EAgBRC,gCAAiC,KAhBzB,EAqBRC,8BAA+B,IArBvB,EA0BRC,gCAAiC,IA1BzB,EAgCRC,kCAAmC,KAhC3B,EAqCRC,cACK,cADLA,IACuBb,IAAKc,CAAAA,MAD5BD,IAEK,CAAC,EAAEb,IAAKc,CAAAA,MAAL,CAAY,UAAZ,CAAF,IAA6BC,QAASC,CAAAA,eAAtC,IACE,cADF,IACoBD,QAASC,CAAAA,eAD7B,CAFNH,IAKK,CAAC,EAAEb,IAAKc,CAAAA,MAAL,CAAY,WAAZ,CAAF,KACGd,IAAKc,CAAAA,MAAL,CAAY,WAAZ,CAAA,CAAyB,gBAAzB,CADH,IAEGd,IAAKc,CAAAA,MAAL,CAAY,WAAZ,CAAA,CAAyB,kBAAzB,CAFH,EA1CE,EAkDRG,eAAiB,cAAjBA;AAAmCjB,MAAKc,CAAAA,MAlDhC,EAyDRI,iBACK,gBADLA,IACyBlB,IAAKc,CAAAA,MAD9BI,IAEK,CAAC,EAAElB,IAAKc,CAAAA,MAAL,CAAY,WAAZ,CAAF,IACEd,IAAKc,CAAAA,MAAL,CAAY,WAAZ,CAAA,CAAyB,kBAAzB,CADF,CA3DE,EAkERK,eAAgBhB,MAAA,CAAO,QAAQ,EAAG;AAEhC,QAAI,CAACH,IAAKc,CAAAA,MAAOM,CAAAA,gBAAjB,IAAqC,CAACC,MAAOC,CAAAA,cAA7C;AACE,aAAO,KAAP;AADF;AAIA,QAAIC,UAAU,KAAd;AACA,QAAIC,UAAUH,MAAOC,CAAAA,cAAP,CAAsB,EAAtB,EAA0B,SAA1B,EAAqC,CACjDG,IAAKA,QAAQ,EAAG;AACdF,aAAA,GAAU,IAAV;AADc,KADiC,CAArC,CAAd;AAKA,OAAI;AACFvB,UAAKc,CAAAA,MAAOM,CAAAA,gBAAZ,CAA6B,MAA7B,EAAqCpB,IAAK0B,CAAAA,YAA1C,EAAwDF,OAAxD,CAAA;AACAxB,UAAKc,CAAAA,MAAOa,CAAAA,mBAAZ,CAAgC,MAAhC,EAAwC3B,IAAK0B,CAAAA,YAA7C,EAA2DF,OAA3D,CAAA;AAFE,KAGF,QAAOI,CAAP,CAAU;;AAGZ,WAAOL,OAAP;AAlBgC,GAAlB,CAlER,CAAV;AA/BA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/events/browserfeature.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Browser capability checks for the events package.\\n */\\n\\ngoog.module('goog.events.BrowserFeature');\\ngoog.module.declareLegacyNamespace();\\n\\n\\n/**\\n * Tricks Closure Compiler into believing that a function is pure.  The compiler\\n * assumes that any `valueOf` function is pure, without analyzing its contents.\\n *\\n * @param {function(): T} fn\\n * @return {T}\\n * @template T\\n */\\nconst purify = (fn) => {\\n  return ({valueOf: fn}).valueOf();\\n};\\n\\n\\n/**\\n * Enum of browser capabilities.\\n * @enum {boolean}\\n */\\nexports = {\\n  /**\\n   * Whether the button attribute of the event is W3C compliant.  False in\\n   * Internet Explorer prior to version 9; document-version dependent.\\n   */\\n  HAS_W3C_BUTTON: true,\\n\\n  /**\\n   * Whether the browser supports full W3C event model.\\n   */\\n  HAS_W3C_EVENT_SUPPORT: true,\\n\\n  /**\\n   * To prevent default in IE7-8 for certain keydown events we need set the\\n   * keyCode to -1.\\n   */\\n  SET_KEY_CODE_TO_PREVENT_DEFAULT: false,\\n\\n  /**\\n   * Whether the `navigator.onLine` property is supported.\\n   */\\n  HAS_NAVIGATOR_ONLINE_PROPERTY: true,\\n\\n  /**\\n   * Whether HTML5 network online/offline events are supported.\\n   */\\n  HAS_HTML5_NETWORK_EVENT_SUPPORT: true,\\n\\n  /**\\n   * Whether HTML5 network events fire on document.body, or otherwise the\\n   * window.\\n   */\\n  HTML5_NETWORK_EVENTS_FIRE_ON_BODY: false,\\n\\n  /**\\n   * Whether touch is enabled in the browser.\\n   */\\n  TOUCH_ENABLED:\\n      ('ontouchstart' in goog.global ||\\n       !!(goog.global['document'] && document.documentElement &&\\n          'ontouchstart' in document.documentElement) ||\\n       // IE10 uses non-standard touch events, so it has a different check.\\n       !!(goog.global['navigator'] &&\\n          (goog.global['navigator']['maxTouchPoints'] ||\\n           goog.global['navigator']['msMaxTouchPoints']))),\\n\\n  /**\\n   * Whether addEventListener supports W3C standard pointer events.\\n   * http://www.w3.org/TR/pointerevents/\\n   */\\n  POINTER_EVENTS: ('PointerEvent' in goog.global),\\n\\n  /**\\n   * Whether addEventListener supports MSPointer events (only used in IE10).\\n   * http://msdn.microsoft.com/en-us/library/ie/hh772103(v=vs.85).aspx\\n   * http://msdn.microsoft.com/library/hh673557(v=vs.85).aspx\\n   */\\n  MSPOINTER_EVENTS:\\n      ('MSPointerEvent' in goog.global &&\\n       !!(goog.global['navigator'] &&\\n          goog.global['navigator']['msPointerEnabled'])),\\n\\n  /**\\n   * Whether addEventListener supports {passive: true}.\\n   * https://developers.google.com/web/updates/2016/06/passive-event-listeners\\n   */\\n  PASSIVE_EVENTS: purify(function() {\\n    // If we're in a web worker or other custom environment, we can't tell.\\n    if (!goog.global.addEventListener || !Object.defineProperty) {  // IE 8\\n      return false;\\n    }\\n\\n    var passive = false;\\n    var options = Object.defineProperty({}, 'passive', {\\n      get: function() {\\n        passive = true;\\n      }\\n    });\\n    try {\\n      goog.global.addEventListener('test', goog.nullFunction, options);\\n      goog.global.removeEventListener('test', goog.nullFunction, options);\\n    } catch (e) {\\n    }\\n\\n    return passive;\\n  })\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"purify\",\"fn\",\"valueOf\",\"exports\",\"HAS_W3C_BUTTON\",\"HAS_W3C_EVENT_SUPPORT\",\"SET_KEY_CODE_TO_PREVENT_DEFAULT\",\"HAS_NAVIGATOR_ONLINE_PROPERTY\",\"HAS_HTML5_NETWORK_EVENT_SUPPORT\",\"HTML5_NETWORK_EVENTS_FIRE_ON_BODY\",\"TOUCH_ENABLED\",\"global\",\"document\",\"documentElement\",\"POINTER_EVENTS\",\"MSPOINTER_EVENTS\",\"PASSIVE_EVENTS\",\"addEventListener\",\"Object\",\"defineProperty\",\"passive\",\"options\",\"get\",\"nullFunction\",\"removeEventListener\",\"e\"]\n}\n"]