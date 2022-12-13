goog.provide("goog.dom.xml");
goog.require("goog.dom");
goog.require("goog.dom.NodeType");
goog.require("goog.dom.safe");
goog.require("goog.html.legacyconversions");
goog.require("goog.userAgent");
goog.dom.xml.MAX_XML_SIZE_KB = 2 * 1024;
goog.dom.xml.MAX_ELEMENT_DEPTH = 256;
goog.dom.xml.hasActiveXObjectSupport_ = function() {
  if (!goog.userAgent.IE) {
    return false;
  }
  try {
    new ActiveXObject("MSXML2.DOMDocument");
    return true;
  } catch (e) {
    return false;
  }
};
goog.dom.xml.ACTIVEX_SUPPORT = goog.userAgent.IE && goog.dom.xml.hasActiveXObjectSupport_();
goog.dom.xml.createDocument = function(opt_rootTagName, opt_namespaceUri, opt_preferActiveX) {
  if (opt_namespaceUri && !opt_rootTagName) {
    throw new Error("Can't create document with namespace and no root tag");
  }
  if (document.implementation && document.implementation.createDocument && !(goog.dom.xml.ACTIVEX_SUPPORT && opt_preferActiveX)) {
    return document.implementation.createDocument(opt_namespaceUri || "", opt_rootTagName || "", null);
  } else if (goog.dom.xml.ACTIVEX_SUPPORT) {
    var doc = goog.dom.xml.createMsXmlDocument_();
    if (doc) {
      if (opt_rootTagName) {
        doc.appendChild(doc.createNode(goog.dom.NodeType.ELEMENT, opt_rootTagName, opt_namespaceUri || ""));
      }
      return doc;
    }
  }
  throw new Error("Your browser does not support creating new documents");
};
goog.dom.xml.loadXml = function(xml, opt_preferActiveX) {
  if (typeof DOMParser != "undefined" && !(goog.dom.xml.ACTIVEX_SUPPORT && opt_preferActiveX)) {
    return goog.dom.safe.parseFromString(new DOMParser(), goog.html.legacyconversions.safeHtmlFromString(xml), "application/xml");
  } else if (goog.dom.xml.ACTIVEX_SUPPORT) {
    var doc = goog.dom.xml.createMsXmlDocument_();
    doc.loadXML(xml);
    return doc;
  }
  throw new Error("Your browser does not support loading xml documents");
};
goog.dom.xml.serialize = function(xml) {
  var text = xml.xml;
  if (text) {
    return text;
  }
  if (typeof XMLSerializer != "undefined") {
    return (new XMLSerializer()).serializeToString(xml);
  }
  throw new Error("Your browser does not support serializing XML documents");
};
goog.dom.xml.selectSingleNode = function(node, path) {
  if (typeof node.selectSingleNode != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if (typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath");
    }
    return node.selectSingleNode(path);
  } else if (document.implementation.hasFeature("XPath", "3.0")) {
    var doc = goog.dom.getOwnerDocument(node);
    var resolver = doc.createNSResolver(doc.documentElement);
    var result = doc.evaluate(path, node, resolver, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
    return result.singleNodeValue;
  }
  return null;
};
goog.dom.xml.selectNodes = function(node, path) {
  if (typeof node.selectNodes != "undefined") {
    var doc = goog.dom.getOwnerDocument(node);
    if (typeof doc.setProperty != "undefined") {
      doc.setProperty("SelectionLanguage", "XPath");
    }
    return node.selectNodes(path);
  } else if (document.implementation.hasFeature("XPath", "3.0")) {
    var doc = goog.dom.getOwnerDocument(node);
    var resolver = doc.createNSResolver(doc.documentElement);
    var nodes = doc.evaluate(path, node, resolver, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    var results = [];
    var count = nodes.snapshotLength;
    for (var i = 0; i < count; i++) {
      results.push(nodes.snapshotItem(i));
    }
    return results;
  } else {
    return [];
  }
};
goog.dom.xml.setAttributes = function(element, attributes) {
  for (var key in attributes) {
    if (attributes.hasOwnProperty(key)) {
      element.setAttribute(key, attributes[key]);
    }
  }
};
goog.dom.xml.createMsXmlDocument_ = function() {
  var doc = new ActiveXObject("MSXML2.DOMDocument");
  if (doc) {
    doc.resolveExternals = false;
    doc.validateOnParse = false;
    try {
      doc.setProperty("ProhibitDTD", true);
      doc.setProperty("MaxXMLSize", goog.dom.xml.MAX_XML_SIZE_KB);
      doc.setProperty("MaxElementDepth", goog.dom.xml.MAX_ELEMENT_DEPTH);
    } catch (e) {
    }
  }
  return doc;
};

//# sourceMappingURL=goog.dom.xml.js.map
