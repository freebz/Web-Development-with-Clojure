["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/dom/classlist.js"],"~:js","goog.provide(\"goog.dom.classlist\");\ngoog.require(\"goog.array\");\ngoog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST = goog.define(\"goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST\", false);\ngoog.dom.classlist.getClassName_ = function(element) {\n  return typeof element.className == \"string\" ? element.className : element.getAttribute && element.getAttribute(\"class\") || \"\";\n};\ngoog.dom.classlist.get = function(element) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    return element.classList;\n  }\n  return goog.dom.classlist.getClassName_(element).match(/\\S+/g) || [];\n};\ngoog.dom.classlist.set = function(element, className) {\n  if (typeof element.className == \"string\") {\n    element.className = className;\n    return;\n  } else if (element.setAttribute) {\n    element.setAttribute(\"class\", className);\n  }\n};\ngoog.dom.classlist.contains = function(element, className) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    return element.classList.contains(className);\n  }\n  return goog.array.contains(goog.dom.classlist.get(element), className);\n};\ngoog.dom.classlist.add = function(element, className) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    element.classList.add(className);\n    return;\n  }\n  if (!goog.dom.classlist.contains(element, className)) {\n    var oldClassName = goog.dom.classlist.getClassName_(element);\n    goog.dom.classlist.set(element, oldClassName + (oldClassName.length > 0 ? \" \" + className : className));\n  }\n};\ngoog.dom.classlist.addAll = function(element, classesToAdd) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    Array.prototype.forEach.call(classesToAdd, function(className) {\n      goog.dom.classlist.add(element, className);\n    });\n    return;\n  }\n  var classMap = {};\n  Array.prototype.forEach.call(goog.dom.classlist.get(element), function(className) {\n    classMap[className] = true;\n  });\n  Array.prototype.forEach.call(classesToAdd, function(className) {\n    classMap[className] = true;\n  });\n  var newClassName = \"\";\n  for (var className in classMap) {\n    newClassName += newClassName.length > 0 ? \" \" + className : className;\n  }\n  goog.dom.classlist.set(element, newClassName);\n};\ngoog.dom.classlist.remove = function(element, className) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    element.classList.remove(className);\n    return;\n  }\n  if (goog.dom.classlist.contains(element, className)) {\n    goog.dom.classlist.set(element, Array.prototype.filter.call(goog.dom.classlist.get(element), function(c) {\n      return c != className;\n    }).join(\" \"));\n  }\n};\ngoog.dom.classlist.removeAll = function(element, classesToRemove) {\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    Array.prototype.forEach.call(classesToRemove, function(className) {\n      goog.dom.classlist.remove(element, className);\n    });\n    return;\n  }\n  goog.dom.classlist.set(element, Array.prototype.filter.call(goog.dom.classlist.get(element), function(className) {\n    return !goog.array.contains(classesToRemove, className);\n  }).join(\" \"));\n};\ngoog.dom.classlist.enable = function(element, className, enabled) {\n  if (enabled) {\n    goog.dom.classlist.add(element, className);\n  } else {\n    goog.dom.classlist.remove(element, className);\n  }\n};\ngoog.dom.classlist.enableAll = function(element, classesToEnable, enabled) {\n  var f = enabled ? goog.dom.classlist.addAll : goog.dom.classlist.removeAll;\n  f(element, classesToEnable);\n};\ngoog.dom.classlist.swap = function(element, fromClass, toClass) {\n  if (goog.dom.classlist.contains(element, fromClass)) {\n    goog.dom.classlist.remove(element, fromClass);\n    goog.dom.classlist.add(element, toClass);\n    return true;\n  }\n  return false;\n};\ngoog.dom.classlist.toggle = function(element, className) {\n  var add = !goog.dom.classlist.contains(element, className);\n  goog.dom.classlist.enable(element, className, add);\n  return add;\n};\ngoog.dom.classlist.addRemove = function(element, classToRemove, classToAdd) {\n  goog.dom.classlist.remove(element, classToRemove);\n  goog.dom.classlist.add(element, classToAdd);\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Utilities for detecting, adding and removing classes.  Prefer\n * this over goog.dom.classes for new code since it attempts to use classList\n * (DOMTokenList: http://dom.spec.whatwg.org/#domtokenlist) which is faster\n * and requires less code.\n *\n * Note: these utilities are meant to operate on HTMLElements and SVGElements\n * and may have unexpected behavior on elements with differing interfaces.\n */\n\n\ngoog.provide('goog.dom.classlist');\n\ngoog.require('goog.array');\n\n\n/**\n * Override this define at build-time if you know your target supports it.\n * @define {boolean} Whether to use the classList property (DOMTokenList).\n */\ngoog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST =\n    goog.define('goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST', false);\n\n\n/**\n * A wrapper which ensures correct functionality when interacting with\n * SVGElements\n * @param {?Element} element DOM node to get the class name of.\n * @return {string}\n * @private\n */\ngoog.dom.classlist.getClassName_ = function(element) {\n  'use strict';\n  // If className is an instance of SVGAnimatedString use getAttribute\n  return typeof element.className == 'string' ?\n      element.className :\n      element.getAttribute && element.getAttribute('class') || '';\n};\n\n\n/**\n * Gets an array-like object of class names on an element.\n * @param {Element} element DOM node to get the classes of.\n * @return {!IArrayLike<?>} Class names on `element`.\n */\ngoog.dom.classlist.get = function(element) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    return element.classList;\n  }\n\n  return goog.dom.classlist.getClassName_(element).match(/\\S+/g) || [];\n};\n\n\n/**\n * Sets the entire class name of an element.\n * @param {Element} element DOM node to set class of.\n * @param {string} className Class name(s) to apply to element.\n */\ngoog.dom.classlist.set = function(element, className) {\n  'use strict';\n  // If className is an instance of SVGAnimatedString use setAttribute\n  if ((typeof element.className) == 'string') {\n    element.className = className;\n    return;\n  } else if (element.setAttribute) {\n    element.setAttribute('class', className);\n  }\n};\n\n\n/**\n * Returns true if an element has a class.  This method may throw a DOM\n * exception for an invalid or empty class name if DOMTokenList is used.\n * @param {Element} element DOM node to test.\n * @param {string} className Class name to test for.\n * @return {boolean} Whether element has the class.\n */\ngoog.dom.classlist.contains = function(element, className) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    return element.classList.contains(className);\n  }\n  return goog.array.contains(goog.dom.classlist.get(element), className);\n};\n\n\n/**\n * Adds a class to an element.  Does not add multiples of class names.  This\n * method may throw a DOM exception for an invalid or empty class name if\n * DOMTokenList is used.\n * @param {Element} element DOM node to add class to.\n * @param {string} className Class name to add.\n */\ngoog.dom.classlist.add = function(element, className) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    element.classList.add(className);\n    return;\n  }\n\n  if (!goog.dom.classlist.contains(element, className)) {\n    // Ensure we add a space if this is not the first class name added.\n    var oldClassName = goog.dom.classlist.getClassName_(element);\n    goog.dom.classlist.set(\n        element,\n        oldClassName +\n            (oldClassName.length > 0 ? (' ' + className) : className));\n  }\n};\n\n\n/**\n * Convenience method to add a number of class names at once.\n * @param {Element} element The element to which to add classes.\n * @param {IArrayLike<string>} classesToAdd An array-like object\n * containing a collection of class names to add to the element.\n * This method may throw a DOM exception if classesToAdd contains invalid\n * or empty class names.\n */\ngoog.dom.classlist.addAll = function(element, classesToAdd) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    Array.prototype.forEach.call(classesToAdd, function(className) {\n      'use strict';\n      goog.dom.classlist.add(element, className);\n    });\n    return;\n  }\n\n  var classMap = {};\n\n  // Get all current class names into a map.\n  Array.prototype.forEach.call(\n      goog.dom.classlist.get(element), function(className) {\n        'use strict';\n        classMap[className] = true;\n      });\n\n  // Add new class names to the map.\n  Array.prototype.forEach.call(classesToAdd, function(className) {\n    'use strict';\n    classMap[className] = true;\n  });\n\n  // Flatten the keys of the map into the className.\n  var newClassName = '';\n  for (var className in classMap) {\n    newClassName += newClassName.length > 0 ? (' ' + className) : className;\n  }\n  goog.dom.classlist.set(element, newClassName);\n};\n\n\n/**\n * Removes a class from an element.  This method may throw a DOM exception\n * for an invalid or empty class name if DOMTokenList is used.\n * @param {Element} element DOM node to remove class from.\n * @param {string} className Class name to remove.\n */\ngoog.dom.classlist.remove = function(element, className) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    element.classList.remove(className);\n    return;\n  }\n\n  if (goog.dom.classlist.contains(element, className)) {\n    // Filter out the class name.\n    goog.dom.classlist.set(\n        element,\n        Array.prototype.filter\n            .call(\n                goog.dom.classlist.get(element),\n                function(c) {\n                  'use strict';\n                  return c != className;\n                })\n            .join(' '));\n  }\n};\n\n\n/**\n * Removes a set of classes from an element.  Prefer this call to\n * repeatedly calling `goog.dom.classlist.remove` if you want to remove\n * a large set of class names at once.\n * @param {Element} element The element from which to remove classes.\n * @param {IArrayLike<string>} classesToRemove An array-like object\n * containing a collection of class names to remove from the element.\n * This method may throw a DOM exception if classesToRemove contains invalid\n * or empty class names.\n */\ngoog.dom.classlist.removeAll = function(element, classesToRemove) {\n  'use strict';\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\n    Array.prototype.forEach.call(classesToRemove, function(className) {\n      'use strict';\n      goog.dom.classlist.remove(element, className);\n    });\n    return;\n  }\n\n  // Filter out those classes in classesToRemove.\n  goog.dom.classlist.set(\n      element,\n      Array.prototype.filter\n          .call(\n              goog.dom.classlist.get(element),\n              function(className) {\n                'use strict';\n                // If this class is not one we are trying to remove,\n                // add it to the array of new class names.\n                return !goog.array.contains(classesToRemove, className);\n              })\n          .join(' '));\n};\n\n\n/**\n * Adds or removes a class depending on the enabled argument.  This method\n * may throw a DOM exception for an invalid or empty class name if DOMTokenList\n * is used.\n * @param {Element} element DOM node to add or remove the class on.\n * @param {string} className Class name to add or remove.\n * @param {boolean} enabled Whether to add or remove the class (true adds,\n *     false removes).\n */\ngoog.dom.classlist.enable = function(element, className, enabled) {\n  'use strict';\n  if (enabled) {\n    goog.dom.classlist.add(element, className);\n  } else {\n    goog.dom.classlist.remove(element, className);\n  }\n};\n\n\n/**\n * Adds or removes a set of classes depending on the enabled argument.  This\n * method may throw a DOM exception for an invalid or empty class name if\n * DOMTokenList is used.\n * @param {!Element} element DOM node to add or remove the class on.\n * @param {?IArrayLike<string>} classesToEnable An array-like object\n *     containing a collection of class names to add or remove from the element.\n * @param {boolean} enabled Whether to add or remove the classes (true adds,\n *     false removes).\n */\ngoog.dom.classlist.enableAll = function(element, classesToEnable, enabled) {\n  'use strict';\n  var f = enabled ? goog.dom.classlist.addAll : goog.dom.classlist.removeAll;\n  f(element, classesToEnable);\n};\n\n\n/**\n * Switches a class on an element from one to another without disturbing other\n * classes. If the fromClass isn't removed, the toClass won't be added.  This\n * method may throw a DOM exception if the class names are empty or invalid.\n * @param {Element} element DOM node to swap classes on.\n * @param {string} fromClass Class to remove.\n * @param {string} toClass Class to add.\n * @return {boolean} Whether classes were switched.\n */\ngoog.dom.classlist.swap = function(element, fromClass, toClass) {\n  'use strict';\n  if (goog.dom.classlist.contains(element, fromClass)) {\n    goog.dom.classlist.remove(element, fromClass);\n    goog.dom.classlist.add(element, toClass);\n    return true;\n  }\n  return false;\n};\n\n\n/**\n * Removes a class if an element has it, and adds it the element doesn't have\n * it.  Won't affect other classes on the node.  This method may throw a DOM\n * exception if the class name is empty or invalid.\n * @param {Element} element DOM node to toggle class on.\n * @param {string} className Class to toggle.\n * @return {boolean} True if class was added, false if it was removed\n *     (in other words, whether element has the class after this function has\n *     been called).\n */\ngoog.dom.classlist.toggle = function(element, className) {\n  'use strict';\n  var add = !goog.dom.classlist.contains(element, className);\n  goog.dom.classlist.enable(element, className, add);\n  return add;\n};\n\n\n/**\n * Adds and removes a class of an element.  Unlike\n * {@link goog.dom.classlist.swap}, this method adds the classToAdd regardless\n * of whether the classToRemove was present and had been removed.  This method\n * may throw a DOM exception if the class names are empty or invalid.\n *\n * @param {Element} element DOM node to swap classes on.\n * @param {string} classToRemove Class to remove.\n * @param {string} classToAdd Class to add.\n */\ngoog.dom.classlist.addRemove = function(element, classToRemove, classToAdd) {\n  'use strict';\n  goog.dom.classlist.remove(element, classToRemove);\n  goog.dom.classlist.add(element, classToAdd);\n};\n","~:compiled-at",1670909711167,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.dom.classlist.js\",\n\"lineCount\":107,\n\"mappings\":\"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\",\n\"sources\":[\"goog/dom/classlist.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Utilities for detecting, adding and removing classes.  Prefer\\n * this over goog.dom.classes for new code since it attempts to use classList\\n * (DOMTokenList: http://dom.spec.whatwg.org/#domtokenlist) which is faster\\n * and requires less code.\\n *\\n * Note: these utilities are meant to operate on HTMLElements and SVGElements\\n * and may have unexpected behavior on elements with differing interfaces.\\n */\\n\\n\\ngoog.provide('goog.dom.classlist');\\n\\ngoog.require('goog.array');\\n\\n\\n/**\\n * Override this define at build-time if you know your target supports it.\\n * @define {boolean} Whether to use the classList property (DOMTokenList).\\n */\\ngoog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST =\\n    goog.define('goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST', false);\\n\\n\\n/**\\n * A wrapper which ensures correct functionality when interacting with\\n * SVGElements\\n * @param {?Element} element DOM node to get the class name of.\\n * @return {string}\\n * @private\\n */\\ngoog.dom.classlist.getClassName_ = function(element) {\\n  'use strict';\\n  // If className is an instance of SVGAnimatedString use getAttribute\\n  return typeof element.className == 'string' ?\\n      element.className :\\n      element.getAttribute && element.getAttribute('class') || '';\\n};\\n\\n\\n/**\\n * Gets an array-like object of class names on an element.\\n * @param {Element} element DOM node to get the classes of.\\n * @return {!IArrayLike<?>} Class names on `element`.\\n */\\ngoog.dom.classlist.get = function(element) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    return element.classList;\\n  }\\n\\n  return goog.dom.classlist.getClassName_(element).match(/\\\\S+/g) || [];\\n};\\n\\n\\n/**\\n * Sets the entire class name of an element.\\n * @param {Element} element DOM node to set class of.\\n * @param {string} className Class name(s) to apply to element.\\n */\\ngoog.dom.classlist.set = function(element, className) {\\n  'use strict';\\n  // If className is an instance of SVGAnimatedString use setAttribute\\n  if ((typeof element.className) == 'string') {\\n    element.className = className;\\n    return;\\n  } else if (element.setAttribute) {\\n    element.setAttribute('class', className);\\n  }\\n};\\n\\n\\n/**\\n * Returns true if an element has a class.  This method may throw a DOM\\n * exception for an invalid or empty class name if DOMTokenList is used.\\n * @param {Element} element DOM node to test.\\n * @param {string} className Class name to test for.\\n * @return {boolean} Whether element has the class.\\n */\\ngoog.dom.classlist.contains = function(element, className) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    return element.classList.contains(className);\\n  }\\n  return goog.array.contains(goog.dom.classlist.get(element), className);\\n};\\n\\n\\n/**\\n * Adds a class to an element.  Does not add multiples of class names.  This\\n * method may throw a DOM exception for an invalid or empty class name if\\n * DOMTokenList is used.\\n * @param {Element} element DOM node to add class to.\\n * @param {string} className Class name to add.\\n */\\ngoog.dom.classlist.add = function(element, className) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    element.classList.add(className);\\n    return;\\n  }\\n\\n  if (!goog.dom.classlist.contains(element, className)) {\\n    // Ensure we add a space if this is not the first class name added.\\n    var oldClassName = goog.dom.classlist.getClassName_(element);\\n    goog.dom.classlist.set(\\n        element,\\n        oldClassName +\\n            (oldClassName.length > 0 ? (' ' + className) : className));\\n  }\\n};\\n\\n\\n/**\\n * Convenience method to add a number of class names at once.\\n * @param {Element} element The element to which to add classes.\\n * @param {IArrayLike<string>} classesToAdd An array-like object\\n * containing a collection of class names to add to the element.\\n * This method may throw a DOM exception if classesToAdd contains invalid\\n * or empty class names.\\n */\\ngoog.dom.classlist.addAll = function(element, classesToAdd) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    Array.prototype.forEach.call(classesToAdd, function(className) {\\n      'use strict';\\n      goog.dom.classlist.add(element, className);\\n    });\\n    return;\\n  }\\n\\n  var classMap = {};\\n\\n  // Get all current class names into a map.\\n  Array.prototype.forEach.call(\\n      goog.dom.classlist.get(element), function(className) {\\n        'use strict';\\n        classMap[className] = true;\\n      });\\n\\n  // Add new class names to the map.\\n  Array.prototype.forEach.call(classesToAdd, function(className) {\\n    'use strict';\\n    classMap[className] = true;\\n  });\\n\\n  // Flatten the keys of the map into the className.\\n  var newClassName = '';\\n  for (var className in classMap) {\\n    newClassName += newClassName.length > 0 ? (' ' + className) : className;\\n  }\\n  goog.dom.classlist.set(element, newClassName);\\n};\\n\\n\\n/**\\n * Removes a class from an element.  This method may throw a DOM exception\\n * for an invalid or empty class name if DOMTokenList is used.\\n * @param {Element} element DOM node to remove class from.\\n * @param {string} className Class name to remove.\\n */\\ngoog.dom.classlist.remove = function(element, className) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    element.classList.remove(className);\\n    return;\\n  }\\n\\n  if (goog.dom.classlist.contains(element, className)) {\\n    // Filter out the class name.\\n    goog.dom.classlist.set(\\n        element,\\n        Array.prototype.filter\\n            .call(\\n                goog.dom.classlist.get(element),\\n                function(c) {\\n                  'use strict';\\n                  return c != className;\\n                })\\n            .join(' '));\\n  }\\n};\\n\\n\\n/**\\n * Removes a set of classes from an element.  Prefer this call to\\n * repeatedly calling `goog.dom.classlist.remove` if you want to remove\\n * a large set of class names at once.\\n * @param {Element} element The element from which to remove classes.\\n * @param {IArrayLike<string>} classesToRemove An array-like object\\n * containing a collection of class names to remove from the element.\\n * This method may throw a DOM exception if classesToRemove contains invalid\\n * or empty class names.\\n */\\ngoog.dom.classlist.removeAll = function(element, classesToRemove) {\\n  'use strict';\\n  if (goog.dom.classlist.ALWAYS_USE_DOM_TOKEN_LIST || element.classList) {\\n    Array.prototype.forEach.call(classesToRemove, function(className) {\\n      'use strict';\\n      goog.dom.classlist.remove(element, className);\\n    });\\n    return;\\n  }\\n\\n  // Filter out those classes in classesToRemove.\\n  goog.dom.classlist.set(\\n      element,\\n      Array.prototype.filter\\n          .call(\\n              goog.dom.classlist.get(element),\\n              function(className) {\\n                'use strict';\\n                // If this class is not one we are trying to remove,\\n                // add it to the array of new class names.\\n                return !goog.array.contains(classesToRemove, className);\\n              })\\n          .join(' '));\\n};\\n\\n\\n/**\\n * Adds or removes a class depending on the enabled argument.  This method\\n * may throw a DOM exception for an invalid or empty class name if DOMTokenList\\n * is used.\\n * @param {Element} element DOM node to add or remove the class on.\\n * @param {string} className Class name to add or remove.\\n * @param {boolean} enabled Whether to add or remove the class (true adds,\\n *     false removes).\\n */\\ngoog.dom.classlist.enable = function(element, className, enabled) {\\n  'use strict';\\n  if (enabled) {\\n    goog.dom.classlist.add(element, className);\\n  } else {\\n    goog.dom.classlist.remove(element, className);\\n  }\\n};\\n\\n\\n/**\\n * Adds or removes a set of classes depending on the enabled argument.  This\\n * method may throw a DOM exception for an invalid or empty class name if\\n * DOMTokenList is used.\\n * @param {!Element} element DOM node to add or remove the class on.\\n * @param {?IArrayLike<string>} classesToEnable An array-like object\\n *     containing a collection of class names to add or remove from the element.\\n * @param {boolean} enabled Whether to add or remove the classes (true adds,\\n *     false removes).\\n */\\ngoog.dom.classlist.enableAll = function(element, classesToEnable, enabled) {\\n  'use strict';\\n  var f = enabled ? goog.dom.classlist.addAll : goog.dom.classlist.removeAll;\\n  f(element, classesToEnable);\\n};\\n\\n\\n/**\\n * Switches a class on an element from one to another without disturbing other\\n * classes. If the fromClass isn't removed, the toClass won't be added.  This\\n * method may throw a DOM exception if the class names are empty or invalid.\\n * @param {Element} element DOM node to swap classes on.\\n * @param {string} fromClass Class to remove.\\n * @param {string} toClass Class to add.\\n * @return {boolean} Whether classes were switched.\\n */\\ngoog.dom.classlist.swap = function(element, fromClass, toClass) {\\n  'use strict';\\n  if (goog.dom.classlist.contains(element, fromClass)) {\\n    goog.dom.classlist.remove(element, fromClass);\\n    goog.dom.classlist.add(element, toClass);\\n    return true;\\n  }\\n  return false;\\n};\\n\\n\\n/**\\n * Removes a class if an element has it, and adds it the element doesn't have\\n * it.  Won't affect other classes on the node.  This method may throw a DOM\\n * exception if the class name is empty or invalid.\\n * @param {Element} element DOM node to toggle class on.\\n * @param {string} className Class to toggle.\\n * @return {boolean} True if class was added, false if it was removed\\n *     (in other words, whether element has the class after this function has\\n *     been called).\\n */\\ngoog.dom.classlist.toggle = function(element, className) {\\n  'use strict';\\n  var add = !goog.dom.classlist.contains(element, className);\\n  goog.dom.classlist.enable(element, className, add);\\n  return add;\\n};\\n\\n\\n/**\\n * Adds and removes a class of an element.  Unlike\\n * {@link goog.dom.classlist.swap}, this method adds the classToAdd regardless\\n * of whether the classToRemove was present and had been removed.  This method\\n * may throw a DOM exception if the class names are empty or invalid.\\n *\\n * @param {Element} element DOM node to swap classes on.\\n * @param {string} classToRemove Class to remove.\\n * @param {string} classToAdd Class to add.\\n */\\ngoog.dom.classlist.addRemove = function(element, classToRemove, classToAdd) {\\n  'use strict';\\n  goog.dom.classlist.remove(element, classToRemove);\\n  goog.dom.classlist.add(element, classToAdd);\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"dom\",\"classlist\",\"ALWAYS_USE_DOM_TOKEN_LIST\",\"define\",\"getClassName_\",\"goog.dom.classlist.getClassName_\",\"element\",\"className\",\"getAttribute\",\"get\",\"goog.dom.classlist.get\",\"classList\",\"match\",\"set\",\"goog.dom.classlist.set\",\"setAttribute\",\"contains\",\"goog.dom.classlist.contains\",\"array\",\"add\",\"goog.dom.classlist.add\",\"oldClassName\",\"length\",\"addAll\",\"goog.dom.classlist.addAll\",\"classesToAdd\",\"Array\",\"prototype\",\"forEach\",\"call\",\"classMap\",\"newClassName\",\"remove\",\"goog.dom.classlist.remove\",\"filter\",\"c\",\"join\",\"removeAll\",\"goog.dom.classlist.removeAll\",\"classesToRemove\",\"enable\",\"goog.dom.classlist.enable\",\"enabled\",\"enableAll\",\"goog.dom.classlist.enableAll\",\"classesToEnable\",\"f\",\"swap\",\"goog.dom.classlist.swap\",\"fromClass\",\"toClass\",\"toggle\",\"goog.dom.classlist.toggle\",\"addRemove\",\"goog.dom.classlist.addRemove\",\"classToRemove\",\"classToAdd\"]\n}\n"]