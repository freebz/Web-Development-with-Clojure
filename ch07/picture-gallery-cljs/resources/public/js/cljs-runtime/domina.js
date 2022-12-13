goog.provide('domina');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_19113 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_19114 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_19115 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_19115,opt_wrapper_19113,table_section_wrapper_19114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_19113,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_19114,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_19114,cell_wrapper_19115,table_section_wrapper_19114,table_section_wrapper_19114]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_tbody,html));
var tbody = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag_name,"table")) && (no_tbody_QMARK_)))?(function (){var and__5043__auto__ = div.firstChild;
if(cljs.core.truth_(and__5043__auto__)){
return div.firstChild.childNodes;
} else {
return and__5043__auto__;
}
})():((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_wrap,"<table>")) && (no_tbody_QMARK_)))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__18977 = cljs.core.seq(tbody);
var chunk__18978 = null;
var count__18979 = (0);
var i__18980 = (0);
while(true){
if((i__18980 < count__18979)){
var child = chunk__18978.cljs$core$IIndexed$_nth$arity$2(null,i__18980);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__19116 = seq__18977;
var G__19117 = chunk__18978;
var G__19118 = count__18979;
var G__19119 = (i__18980 + (1));
seq__18977 = G__19116;
chunk__18978 = G__19117;
count__18979 = G__19118;
i__18980 = G__19119;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18977);
if(temp__5804__auto__){
var seq__18977__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18977__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18977__$1);
var G__19120 = cljs.core.chunk_rest(seq__18977__$1);
var G__19121 = c__5568__auto__;
var G__19122 = cljs.core.count(c__5568__auto__);
var G__19123 = (0);
seq__18977 = G__19120;
chunk__18978 = G__19121;
count__18979 = G__19122;
i__18980 = G__19123;
continue;
} else {
var child = cljs.core.first(seq__18977__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.nodeName,"tbody")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(child.childNodes.length,(0))))){
child.parentNode.removeChild(child);
} else {
}


var G__19124 = cljs.core.next(seq__18977__$1);
var G__19125 = null;
var G__19126 = (0);
var G__19127 = (0);
seq__18977 = G__19124;
chunk__18978 = G__19125;
count__18979 = G__19126;
i__18980 = G__19127;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first(cljs.core.re_find(domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace(html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html__$1))).toLowerCase();
var vec__18981 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18981,(0),null);
var start_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18981,(1),null);
var end_wrap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18981,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
(div.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap),html__$1,cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap)].join(''));

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__19128 = wrapper.lastChild;
var G__19129 = (level - (1));
wrapper = G__19128;
level = G__19129;
continue;
} else {
return wrapper;
}
break;
}
})();
if(domina.support.extraneous_tbody_QMARK_){
domina.remove_extraneous_tbody_BANG_(div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = (!(domina.support.leading_whitespace_QMARK_));
if(and__5043__auto__){
return cljs.core.re_find(domina.re_leading_whitespace,html__$1);
} else {
return and__5043__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_(div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find(domina.re_html,s))){
return domina.html_to_dom(s);
} else {
return document.createTextNode(s);
}
});

/**
 * @interface
 */
domina.DomContent = function(){};

var domina$DomContent$nodes$dyn_19130 = (function (content){
var x__5393__auto__ = (((content == null))?null:content);
var m__5394__auto__ = (domina.nodes[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__5394__auto__.call(null,content));
} else {
var m__5392__auto__ = (domina.nodes["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(content) : m__5392__auto__.call(null,content));
} else {
throw cljs.core.missing_protocol("DomContent.nodes",content);
}
}
});
/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((((!((content == null)))) && ((!((content.domina$DomContent$nodes$arity$1 == null)))))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
return domina$DomContent$nodes$dyn_19130(content);
}
});

var domina$DomContent$single_node$dyn_19131 = (function (nodeseq){
var x__5393__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5394__auto__ = (domina.single_node[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__5394__auto__.call(null,nodeseq));
} else {
var m__5392__auto__ = (domina.single_node["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(nodeseq) : m__5392__auto__.call(null,nodeseq));
} else {
throw cljs.core.missing_protocol("DomContent.single-node",nodeseq);
}
}
});
/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((((!((nodeseq == null)))) && ((!((nodeseq.domina$DomContent$single_node$arity$1 == null)))))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
return domina$DomContent$single_node$dyn_19131(nodeseq);
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19132 = arguments.length;
var i__5770__auto___19133 = (0);
while(true){
if((i__5770__auto___19133 < len__5769__auto___19132)){
args__5775__auto__.push((arguments[i__5770__auto___19133]));

var G__19134 = (i__5770__auto___19133 + (1));
i__5770__auto___19133 = G__19134;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(((domina._STAR_debug_STAR_) && ((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.console,undefined)))))){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log_debug.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log_debug.cljs$lang$applyTo = (function (seq18984){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18984));
}));

domina.log = (function domina$log(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19135 = arguments.length;
var i__5770__auto___19136 = (0);
while(true){
if((i__5770__auto___19136 < len__5769__auto___19135)){
args__5775__auto__.push((arguments[i__5770__auto___19136]));

var G__19145 = (i__5770__auto___19136 + (1));
i__5770__auto___19136 = G__19145;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,mesg));
} else {
return null;
}
}));

(domina.log.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.log.cljs$lang$applyTo = (function (seq18985){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18985));
}));

/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name(id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
var G__18986 = goog.dom.getElementsByClass(cljs.core.name(class_name));
return (domina.normalize_seq.cljs$core$IFn$_invoke$arity$1 ? domina.normalize_seq.cljs$core$IFn$_invoke$arity$1(G__18986) : domina.normalize_seq.call(null,G__18986));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(goog.dom.getChildren,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([domina.nodes(content)], 0)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19146 = arguments.length;
var i__5770__auto___19147 = (0);
while(true){
if((i__5770__auto___19147 < len__5769__auto___19146)){
args__5775__auto__.push((arguments[i__5770__auto___19147]));

var G__19148 = (i__5770__auto___19147 + (1));
i__5770__auto___19147 = G__19148;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.dom.findCommonAncestor,cljs.core.map.cljs$core$IFn$_invoke$arity$2(domina.single_node,contents));
}));

(domina.common_ancestor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(domina.common_ancestor.cljs$lang$applyTo = (function (seq18987){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18987));
}));

/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ancestor_content,descendant_content], 0)),domina.single_node(ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18988_SHARP_){
return p1__18988_SHARP_.cloneNode(true);
}),domina.nodes(content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(goog.dom.appendChild,parent_content,child_content) : domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content));

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
var G__18991_19149 = (function (p1__18989_SHARP_,p2__18990_SHARP_){
return goog.dom.insertChildAt(p1__18989_SHARP_,p2__18990_SHARP_,idx);
});
var G__18992_19150 = parent_content;
var G__18993_19151 = child_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__18991_19149,G__18992_19150,G__18993_19151) : domina.apply_with_cloning.call(null,G__18991_19149,G__18992_19150,G__18993_19151));

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_(parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
var G__18996_19152 = (function (p1__18995_SHARP_,p2__18994_SHARP_){
return goog.dom.insertSiblingBefore(p2__18994_SHARP_,p1__18995_SHARP_);
});
var G__18997_19153 = content;
var G__18998_19154 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__18996_19152,G__18997_19153,G__18998_19154) : domina.apply_with_cloning.call(null,G__18996_19152,G__18997_19153,G__18998_19154));

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
var G__19001_19155 = (function (p1__19000_SHARP_,p2__18999_SHARP_){
return goog.dom.insertSiblingAfter(p2__18999_SHARP_,p1__19000_SHARP_);
});
var G__19002_19156 = content;
var G__19003_19157 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__19001_19155,G__19002_19156,G__19003_19157) : domina.apply_with_cloning.call(null,G__19001_19155,G__19002_19156,G__19003_19157));

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
var G__19006_19158 = (function (p1__19005_SHARP_,p2__19004_SHARP_){
return goog.dom.replaceNode(p2__19004_SHARP_,p1__19005_SHARP_);
});
var G__19007_19159 = old_content;
var G__19008_19160 = new_content;
(domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3 ? domina.apply_with_cloning.cljs$core$IFn$_invoke$arity$3(G__19006_19158,G__19007_19159,G__19008_19160) : domina.apply_with_cloning.call(null,G__19006_19158,G__19007_19159,G__19008_19160));

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeNode,domina.nodes(content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(goog.dom.removeChildren,domina.nodes(content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node(content),cljs.core.name(name));
if(clojure.string.blank_QMARK_(s)){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node(content).getAttribute(cljs.core.name(name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19161 = arguments.length;
var i__5770__auto___19162 = (0);
while(true){
if((i__5770__auto___19162 < len__5769__auto___19161)){
args__5775__auto__.push((arguments[i__5770__auto___19162]));

var G__19163 = (i__5770__auto___19162 + (1));
i__5770__auto___19162 = G__19163;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__19012_19164 = cljs.core.seq(domina.nodes(content));
var chunk__19013_19165 = null;
var count__19014_19166 = (0);
var i__19015_19167 = (0);
while(true){
if((i__19015_19167 < count__19014_19166)){
var n_19168 = chunk__19013_19165.cljs$core$IIndexed$_nth$arity$2(null,i__19015_19167);
goog.style.setStyle(n_19168,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));


var G__19169 = seq__19012_19164;
var G__19170 = chunk__19013_19165;
var G__19171 = count__19014_19166;
var G__19172 = (i__19015_19167 + (1));
seq__19012_19164 = G__19169;
chunk__19013_19165 = G__19170;
count__19014_19166 = G__19171;
i__19015_19167 = G__19172;
continue;
} else {
var temp__5804__auto___19173 = cljs.core.seq(seq__19012_19164);
if(temp__5804__auto___19173){
var seq__19012_19174__$1 = temp__5804__auto___19173;
if(cljs.core.chunked_seq_QMARK_(seq__19012_19174__$1)){
var c__5568__auto___19187 = cljs.core.chunk_first(seq__19012_19174__$1);
var G__19188 = cljs.core.chunk_rest(seq__19012_19174__$1);
var G__19189 = c__5568__auto___19187;
var G__19190 = cljs.core.count(c__5568__auto___19187);
var G__19191 = (0);
seq__19012_19164 = G__19188;
chunk__19013_19165 = G__19189;
count__19014_19166 = G__19190;
i__19015_19167 = G__19191;
continue;
} else {
var n_19192 = cljs.core.first(seq__19012_19174__$1);
goog.style.setStyle(n_19192,cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));


var G__19193 = cljs.core.next(seq__19012_19174__$1);
var G__19194 = null;
var G__19195 = (0);
var G__19196 = (0);
seq__19012_19164 = G__19193;
chunk__19013_19165 = G__19194;
count__19014_19166 = G__19195;
i__19015_19167 = G__19196;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_style_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_style_BANG_.cljs$lang$applyTo = (function (seq19009){
var G__19010 = cljs.core.first(seq19009);
var seq19009__$1 = cljs.core.next(seq19009);
var G__19011 = cljs.core.first(seq19009__$1);
var seq19009__$2 = cljs.core.next(seq19009__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19010,G__19011,seq19009__$2);
}));

/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19197 = arguments.length;
var i__5770__auto___19198 = (0);
while(true){
if((i__5770__auto___19198 < len__5769__auto___19197)){
args__5775__auto__.push((arguments[i__5770__auto___19198]));

var G__19199 = (i__5770__auto___19198 + (1));
i__5770__auto___19198 = G__19199;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__19019_19200 = cljs.core.seq(domina.nodes(content));
var chunk__19020_19201 = null;
var count__19021_19202 = (0);
var i__19022_19203 = (0);
while(true){
if((i__19022_19203 < count__19021_19202)){
var n_19204 = chunk__19020_19201.cljs$core$IIndexed$_nth$arity$2(null,i__19022_19203);
n_19204.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));


var G__19205 = seq__19019_19200;
var G__19206 = chunk__19020_19201;
var G__19207 = count__19021_19202;
var G__19208 = (i__19022_19203 + (1));
seq__19019_19200 = G__19205;
chunk__19020_19201 = G__19206;
count__19021_19202 = G__19207;
i__19022_19203 = G__19208;
continue;
} else {
var temp__5804__auto___19209 = cljs.core.seq(seq__19019_19200);
if(temp__5804__auto___19209){
var seq__19019_19210__$1 = temp__5804__auto___19209;
if(cljs.core.chunked_seq_QMARK_(seq__19019_19210__$1)){
var c__5568__auto___19211 = cljs.core.chunk_first(seq__19019_19210__$1);
var G__19212 = cljs.core.chunk_rest(seq__19019_19210__$1);
var G__19213 = c__5568__auto___19211;
var G__19214 = cljs.core.count(c__5568__auto___19211);
var G__19215 = (0);
seq__19019_19200 = G__19212;
chunk__19020_19201 = G__19213;
count__19021_19202 = G__19214;
i__19022_19203 = G__19215;
continue;
} else {
var n_19216 = cljs.core.first(seq__19019_19210__$1);
n_19216.setAttribute(cljs.core.name(name),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,value));


var G__19217 = cljs.core.next(seq__19019_19210__$1);
var G__19218 = null;
var G__19219 = (0);
var G__19220 = (0);
seq__19019_19200 = G__19217;
chunk__19020_19201 = G__19218;
count__19021_19202 = G__19219;
i__19022_19203 = G__19220;
continue;
}
} else {
}
}
break;
}

return content;
}));

(domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq19016){
var G__19017 = cljs.core.first(seq19016);
var seq19016__$1 = cljs.core.next(seq19016);
var G__19018 = cljs.core.first(seq19016__$1);
var seq19016__$2 = cljs.core.next(seq19016__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19017,G__19018,seq19016__$2);
}));

/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__19023_19221 = cljs.core.seq(domina.nodes(content));
var chunk__19024_19222 = null;
var count__19025_19223 = (0);
var i__19026_19224 = (0);
while(true){
if((i__19026_19224 < count__19025_19223)){
var n_19225 = chunk__19024_19222.cljs$core$IIndexed$_nth$arity$2(null,i__19026_19224);
n_19225.removeAttribute(cljs.core.name(name));


var G__19226 = seq__19023_19221;
var G__19227 = chunk__19024_19222;
var G__19228 = count__19025_19223;
var G__19229 = (i__19026_19224 + (1));
seq__19023_19221 = G__19226;
chunk__19024_19222 = G__19227;
count__19025_19223 = G__19228;
i__19026_19224 = G__19229;
continue;
} else {
var temp__5804__auto___19230 = cljs.core.seq(seq__19023_19221);
if(temp__5804__auto___19230){
var seq__19023_19231__$1 = temp__5804__auto___19230;
if(cljs.core.chunked_seq_QMARK_(seq__19023_19231__$1)){
var c__5568__auto___19232 = cljs.core.chunk_first(seq__19023_19231__$1);
var G__19233 = cljs.core.chunk_rest(seq__19023_19231__$1);
var G__19234 = c__5568__auto___19232;
var G__19235 = cljs.core.count(c__5568__auto___19232);
var G__19236 = (0);
seq__19023_19221 = G__19233;
chunk__19024_19222 = G__19234;
count__19025_19223 = G__19235;
i__19026_19224 = G__19236;
continue;
} else {
var n_19237 = cljs.core.first(seq__19023_19231__$1);
n_19237.removeAttribute(cljs.core.name(name));


var G__19238 = cljs.core.next(seq__19023_19231__$1);
var G__19239 = null;
var G__19240 = (0);
var G__19241 = (0);
seq__19023_19221 = G__19238;
chunk__19024_19222 = G__19239;
count__19025_19223 = G__19240;
i__19026_19224 = G__19241;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,pair){
var vec__19027 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19027,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = k;
if(cljs.core.truth_(and__5043__auto__)){
return v;
} else {
return and__5043__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr(content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes(style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes(style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node(content);
var attrs = node.attributes;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19030_SHARP_){
var attr = attrs.item(p1__19030_SHARP_);
var value = attr.nodeValue;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,value)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",value)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(attr.nodeName.toLowerCase()),attr.nodeValue]);
} else {
return null;
}
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(attrs.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__19031_19242 = cljs.core.seq(styles);
var chunk__19032_19243 = null;
var count__19033_19244 = (0);
var i__19034_19245 = (0);
while(true){
if((i__19034_19245 < count__19033_19244)){
var vec__19041_19246 = chunk__19032_19243.cljs$core$IIndexed$_nth$arity$2(null,i__19034_19245);
var name_19247 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041_19246,(0),null);
var value_19248 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19041_19246,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19247,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_19248], 0));


var G__19249 = seq__19031_19242;
var G__19250 = chunk__19032_19243;
var G__19251 = count__19033_19244;
var G__19252 = (i__19034_19245 + (1));
seq__19031_19242 = G__19249;
chunk__19032_19243 = G__19250;
count__19033_19244 = G__19251;
i__19034_19245 = G__19252;
continue;
} else {
var temp__5804__auto___19253 = cljs.core.seq(seq__19031_19242);
if(temp__5804__auto___19253){
var seq__19031_19254__$1 = temp__5804__auto___19253;
if(cljs.core.chunked_seq_QMARK_(seq__19031_19254__$1)){
var c__5568__auto___19255 = cljs.core.chunk_first(seq__19031_19254__$1);
var G__19256 = cljs.core.chunk_rest(seq__19031_19254__$1);
var G__19257 = c__5568__auto___19255;
var G__19258 = cljs.core.count(c__5568__auto___19255);
var G__19259 = (0);
seq__19031_19242 = G__19256;
chunk__19032_19243 = G__19257;
count__19033_19244 = G__19258;
i__19034_19245 = G__19259;
continue;
} else {
var vec__19044_19260 = cljs.core.first(seq__19031_19254__$1);
var name_19261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044_19260,(0),null);
var value_19262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19044_19260,(1),null);
domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19261,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_19262], 0));


var G__19263 = cljs.core.next(seq__19031_19254__$1);
var G__19264 = null;
var G__19265 = (0);
var G__19266 = (0);
seq__19031_19242 = G__19263;
chunk__19032_19243 = G__19264;
count__19033_19244 = G__19265;
i__19034_19245 = G__19266;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__19047_19267 = cljs.core.seq(attrs);
var chunk__19048_19268 = null;
var count__19049_19269 = (0);
var i__19050_19270 = (0);
while(true){
if((i__19050_19270 < count__19049_19269)){
var vec__19057_19271 = chunk__19048_19268.cljs$core$IIndexed$_nth$arity$2(null,i__19050_19270);
var name_19272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057_19271,(0),null);
var value_19273 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057_19271,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19272,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_19273], 0));


var G__19274 = seq__19047_19267;
var G__19275 = chunk__19048_19268;
var G__19276 = count__19049_19269;
var G__19277 = (i__19050_19270 + (1));
seq__19047_19267 = G__19274;
chunk__19048_19268 = G__19275;
count__19049_19269 = G__19276;
i__19050_19270 = G__19277;
continue;
} else {
var temp__5804__auto___19278 = cljs.core.seq(seq__19047_19267);
if(temp__5804__auto___19278){
var seq__19047_19279__$1 = temp__5804__auto___19278;
if(cljs.core.chunked_seq_QMARK_(seq__19047_19279__$1)){
var c__5568__auto___19280 = cljs.core.chunk_first(seq__19047_19279__$1);
var G__19281 = cljs.core.chunk_rest(seq__19047_19279__$1);
var G__19282 = c__5568__auto___19280;
var G__19283 = cljs.core.count(c__5568__auto___19280);
var G__19284 = (0);
seq__19047_19267 = G__19281;
chunk__19048_19268 = G__19282;
count__19049_19269 = G__19283;
i__19050_19270 = G__19284;
continue;
} else {
var vec__19060_19285 = cljs.core.first(seq__19047_19279__$1);
var name_19286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060_19285,(0),null);
var value_19287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19060_19285,(1),null);
domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(content,name_19286,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value_19287], 0));


var G__19288 = cljs.core.next(seq__19047_19279__$1);
var G__19289 = null;
var G__19290 = (0);
var G__19291 = (0);
seq__19047_19267 = G__19288;
chunk__19048_19268 = G__19289;
count__19049_19269 = G__19290;
i__19050_19270 = G__19291;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node(content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__19063_19292 = cljs.core.seq(domina.nodes(content));
var chunk__19064_19293 = null;
var count__19065_19294 = (0);
var i__19066_19295 = (0);
while(true){
if((i__19066_19295 < count__19065_19294)){
var node_19296 = chunk__19064_19293.cljs$core$IIndexed$_nth$arity$2(null,i__19066_19295);
goog.dom.classes.add(node_19296,class$);


var G__19297 = seq__19063_19292;
var G__19298 = chunk__19064_19293;
var G__19299 = count__19065_19294;
var G__19300 = (i__19066_19295 + (1));
seq__19063_19292 = G__19297;
chunk__19064_19293 = G__19298;
count__19065_19294 = G__19299;
i__19066_19295 = G__19300;
continue;
} else {
var temp__5804__auto___19301 = cljs.core.seq(seq__19063_19292);
if(temp__5804__auto___19301){
var seq__19063_19302__$1 = temp__5804__auto___19301;
if(cljs.core.chunked_seq_QMARK_(seq__19063_19302__$1)){
var c__5568__auto___19303 = cljs.core.chunk_first(seq__19063_19302__$1);
var G__19304 = cljs.core.chunk_rest(seq__19063_19302__$1);
var G__19305 = c__5568__auto___19303;
var G__19306 = cljs.core.count(c__5568__auto___19303);
var G__19307 = (0);
seq__19063_19292 = G__19304;
chunk__19064_19293 = G__19305;
count__19065_19294 = G__19306;
i__19066_19295 = G__19307;
continue;
} else {
var node_19308 = cljs.core.first(seq__19063_19302__$1);
goog.dom.classes.add(node_19308,class$);


var G__19309 = cljs.core.next(seq__19063_19302__$1);
var G__19310 = null;
var G__19311 = (0);
var G__19312 = (0);
seq__19063_19292 = G__19309;
chunk__19064_19293 = G__19310;
count__19065_19294 = G__19311;
i__19066_19295 = G__19312;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__19067_19313 = cljs.core.seq(domina.nodes(content));
var chunk__19068_19314 = null;
var count__19069_19315 = (0);
var i__19070_19316 = (0);
while(true){
if((i__19070_19316 < count__19069_19315)){
var node_19317 = chunk__19068_19314.cljs$core$IIndexed$_nth$arity$2(null,i__19070_19316);
goog.dom.classes.remove(node_19317,class$);


var G__19318 = seq__19067_19313;
var G__19319 = chunk__19068_19314;
var G__19320 = count__19069_19315;
var G__19321 = (i__19070_19316 + (1));
seq__19067_19313 = G__19318;
chunk__19068_19314 = G__19319;
count__19069_19315 = G__19320;
i__19070_19316 = G__19321;
continue;
} else {
var temp__5804__auto___19322 = cljs.core.seq(seq__19067_19313);
if(temp__5804__auto___19322){
var seq__19067_19323__$1 = temp__5804__auto___19322;
if(cljs.core.chunked_seq_QMARK_(seq__19067_19323__$1)){
var c__5568__auto___19324 = cljs.core.chunk_first(seq__19067_19323__$1);
var G__19325 = cljs.core.chunk_rest(seq__19067_19323__$1);
var G__19326 = c__5568__auto___19324;
var G__19327 = cljs.core.count(c__5568__auto___19324);
var G__19328 = (0);
seq__19067_19313 = G__19325;
chunk__19068_19314 = G__19326;
count__19069_19315 = G__19327;
i__19070_19316 = G__19328;
continue;
} else {
var node_19329 = cljs.core.first(seq__19067_19323__$1);
goog.dom.classes.remove(node_19329,class$);


var G__19330 = cljs.core.next(seq__19067_19323__$1);
var G__19331 = null;
var G__19332 = (0);
var G__19333 = (0);
seq__19067_19313 = G__19330;
chunk__19068_19314 = G__19331;
count__19069_19315 = G__19332;
i__19070_19316 = G__19333;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__19071_19334 = cljs.core.seq(domina.nodes(content));
var chunk__19072_19335 = null;
var count__19073_19336 = (0);
var i__19074_19337 = (0);
while(true){
if((i__19074_19337 < count__19073_19336)){
var node_19338 = chunk__19072_19335.cljs$core$IIndexed$_nth$arity$2(null,i__19074_19337);
goog.dom.classes.toggle(node_19338,class$);


var G__19339 = seq__19071_19334;
var G__19340 = chunk__19072_19335;
var G__19341 = count__19073_19336;
var G__19342 = (i__19074_19337 + (1));
seq__19071_19334 = G__19339;
chunk__19072_19335 = G__19340;
count__19073_19336 = G__19341;
i__19074_19337 = G__19342;
continue;
} else {
var temp__5804__auto___19343 = cljs.core.seq(seq__19071_19334);
if(temp__5804__auto___19343){
var seq__19071_19344__$1 = temp__5804__auto___19343;
if(cljs.core.chunked_seq_QMARK_(seq__19071_19344__$1)){
var c__5568__auto___19345 = cljs.core.chunk_first(seq__19071_19344__$1);
var G__19346 = cljs.core.chunk_rest(seq__19071_19344__$1);
var G__19347 = c__5568__auto___19345;
var G__19348 = cljs.core.count(c__5568__auto___19345);
var G__19349 = (0);
seq__19071_19334 = G__19346;
chunk__19072_19335 = G__19347;
count__19073_19336 = G__19348;
i__19074_19337 = G__19349;
continue;
} else {
var node_19350 = cljs.core.first(seq__19071_19344__$1);
goog.dom.classes.toggle(node_19350,class$);


var G__19351 = cljs.core.next(seq__19071_19344__$1);
var G__19352 = null;
var G__19353 = (0);
var G__19354 = (0);
seq__19071_19334 = G__19351;
chunk__19072_19335 = G__19352;
count__19073_19336 = G__19353;
i__19074_19337 = G__19354;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq(goog.dom.classes.get(domina.single_node(content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 *   be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_19355__$1 = ((cljs.core.coll_QMARK_(classes))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",classes):classes);
var seq__19075_19356 = cljs.core.seq(domina.nodes(content));
var chunk__19076_19357 = null;
var count__19077_19358 = (0);
var i__19078_19359 = (0);
while(true){
if((i__19078_19359 < count__19077_19358)){
var node_19360 = chunk__19076_19357.cljs$core$IIndexed$_nth$arity$2(null,i__19078_19359);
goog.dom.classes.set(node_19360,classes_19355__$1);


var G__19361 = seq__19075_19356;
var G__19362 = chunk__19076_19357;
var G__19363 = count__19077_19358;
var G__19364 = (i__19078_19359 + (1));
seq__19075_19356 = G__19361;
chunk__19076_19357 = G__19362;
count__19077_19358 = G__19363;
i__19078_19359 = G__19364;
continue;
} else {
var temp__5804__auto___19365 = cljs.core.seq(seq__19075_19356);
if(temp__5804__auto___19365){
var seq__19075_19366__$1 = temp__5804__auto___19365;
if(cljs.core.chunked_seq_QMARK_(seq__19075_19366__$1)){
var c__5568__auto___19367 = cljs.core.chunk_first(seq__19075_19366__$1);
var G__19368 = cljs.core.chunk_rest(seq__19075_19366__$1);
var G__19369 = c__5568__auto___19367;
var G__19370 = cljs.core.count(c__5568__auto___19367);
var G__19371 = (0);
seq__19075_19356 = G__19368;
chunk__19076_19357 = G__19369;
count__19077_19358 = G__19370;
i__19078_19359 = G__19371;
continue;
} else {
var node_19372 = cljs.core.first(seq__19075_19366__$1);
goog.dom.classes.set(node_19372,classes_19355__$1);


var G__19373 = cljs.core.next(seq__19075_19366__$1);
var G__19374 = null;
var G__19375 = (0);
var G__19376 = (0);
seq__19075_19356 = G__19373;
chunk__19076_19357 = G__19374;
count__19077_19358 = G__19375;
i__19078_19359 = G__19376;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node(content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__19079_19377 = cljs.core.seq(domina.nodes(content));
var chunk__19080_19378 = null;
var count__19081_19379 = (0);
var i__19082_19380 = (0);
while(true){
if((i__19082_19380 < count__19081_19379)){
var node_19381 = chunk__19080_19378.cljs$core$IIndexed$_nth$arity$2(null,i__19082_19380);
goog.dom.setTextContent(node_19381,value);


var G__19382 = seq__19079_19377;
var G__19383 = chunk__19080_19378;
var G__19384 = count__19081_19379;
var G__19385 = (i__19082_19380 + (1));
seq__19079_19377 = G__19382;
chunk__19080_19378 = G__19383;
count__19081_19379 = G__19384;
i__19082_19380 = G__19385;
continue;
} else {
var temp__5804__auto___19386 = cljs.core.seq(seq__19079_19377);
if(temp__5804__auto___19386){
var seq__19079_19387__$1 = temp__5804__auto___19386;
if(cljs.core.chunked_seq_QMARK_(seq__19079_19387__$1)){
var c__5568__auto___19388 = cljs.core.chunk_first(seq__19079_19387__$1);
var G__19389 = cljs.core.chunk_rest(seq__19079_19387__$1);
var G__19390 = c__5568__auto___19388;
var G__19391 = cljs.core.count(c__5568__auto___19388);
var G__19392 = (0);
seq__19079_19377 = G__19389;
chunk__19080_19378 = G__19390;
count__19081_19379 = G__19391;
i__19082_19380 = G__19392;
continue;
} else {
var node_19393 = cljs.core.first(seq__19079_19387__$1);
goog.dom.setTextContent(node_19393,value);


var G__19394 = cljs.core.next(seq__19079_19387__$1);
var G__19395 = null;
var G__19396 = (0);
var G__19397 = (0);
seq__19079_19377 = G__19394;
chunk__19080_19378 = G__19395;
count__19081_19379 = G__19396;
i__19082_19380 = G__19397;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node(content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__19083_19398 = cljs.core.seq(domina.nodes(content));
var chunk__19084_19399 = null;
var count__19085_19400 = (0);
var i__19086_19401 = (0);
while(true){
if((i__19086_19401 < count__19085_19400)){
var node_19402 = chunk__19084_19399.cljs$core$IIndexed$_nth$arity$2(null,i__19086_19401);
goog.dom.forms.setValue(node_19402,value);


var G__19403 = seq__19083_19398;
var G__19404 = chunk__19084_19399;
var G__19405 = count__19085_19400;
var G__19406 = (i__19086_19401 + (1));
seq__19083_19398 = G__19403;
chunk__19084_19399 = G__19404;
count__19085_19400 = G__19405;
i__19086_19401 = G__19406;
continue;
} else {
var temp__5804__auto___19407 = cljs.core.seq(seq__19083_19398);
if(temp__5804__auto___19407){
var seq__19083_19408__$1 = temp__5804__auto___19407;
if(cljs.core.chunked_seq_QMARK_(seq__19083_19408__$1)){
var c__5568__auto___19409 = cljs.core.chunk_first(seq__19083_19408__$1);
var G__19410 = cljs.core.chunk_rest(seq__19083_19408__$1);
var G__19411 = c__5568__auto___19409;
var G__19412 = cljs.core.count(c__5568__auto___19409);
var G__19413 = (0);
seq__19083_19398 = G__19410;
chunk__19084_19399 = G__19411;
count__19085_19400 = G__19412;
i__19086_19401 = G__19413;
continue;
} else {
var node_19414 = cljs.core.first(seq__19083_19408__$1);
goog.dom.forms.setValue(node_19414,value);


var G__19415 = cljs.core.next(seq__19083_19408__$1);
var G__19416 = null;
var G__19417 = (0);
var G__19418 = (0);
seq__19083_19398 = G__19415;
chunk__19084_19399 = G__19416;
count__19085_19400 = G__19417;
i__19086_19401 = G__19418;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node(content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_(domina.destroy_children_BANG_(content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not(cljs.core.re_find(domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find(domina.re_leading_whitespace,html_string);
var tag_name = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second(cljs.core.re_find(domina.re_tag_name,html_string))).toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_(domina.wrap_map,tag_name);
if(((allows_inner_html_QMARK_) && (((((domina.support.leading_whitespace_QMARK_) || (cljs.core.not(leading_whitespace_QMARK_)))) && ((!(special_tag_QMARK_))))))){
var value_19419 = clojure.string.replace(html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__19088_19420 = cljs.core.seq(domina.nodes(content));
var chunk__19089_19421 = null;
var count__19090_19422 = (0);
var i__19091_19423 = (0);
while(true){
if((i__19091_19423 < count__19090_19422)){
var node_19424 = chunk__19089_19421.cljs$core$IIndexed$_nth$arity$2(null,i__19091_19423);
(node_19424.innerHTML = value_19419);


var G__19425 = seq__19088_19420;
var G__19426 = chunk__19089_19421;
var G__19427 = count__19090_19422;
var G__19428 = (i__19091_19423 + (1));
seq__19088_19420 = G__19425;
chunk__19089_19421 = G__19426;
count__19090_19422 = G__19427;
i__19091_19423 = G__19428;
continue;
} else {
var temp__5804__auto___19429 = cljs.core.seq(seq__19088_19420);
if(temp__5804__auto___19429){
var seq__19088_19430__$1 = temp__5804__auto___19429;
if(cljs.core.chunked_seq_QMARK_(seq__19088_19430__$1)){
var c__5568__auto___19431 = cljs.core.chunk_first(seq__19088_19430__$1);
var G__19432 = cljs.core.chunk_rest(seq__19088_19430__$1);
var G__19433 = c__5568__auto___19431;
var G__19434 = cljs.core.count(c__5568__auto___19431);
var G__19435 = (0);
seq__19088_19420 = G__19432;
chunk__19089_19421 = G__19433;
count__19090_19422 = G__19434;
i__19091_19423 = G__19435;
continue;
} else {
var node_19436 = cljs.core.first(seq__19088_19430__$1);
(node_19436.innerHTML = value_19419);


var G__19437 = cljs.core.next(seq__19088_19430__$1);
var G__19438 = null;
var G__19439 = (0);
var G__19440 = (0);
seq__19088_19420 = G__19437;
chunk__19089_19421 = G__19438;
count__19090_19422 = G__19439;
i__19091_19423 = G__19440;
continue;
}
} else {
}
}
break;
}
}catch (e19087){if((e19087 instanceof Error)){
var e_19441 = e19087;
domina.replace_children_BANG_(content,value_19419);
} else {
throw e19087;

}
}} else {
domina.replace_children_BANG_(content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_(content,inner_content);
} else {
return domina.replace_children_BANG_(content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 *   content is a single node. If the bubble parameter is set to true,
 *   will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(var_args){
var G__19093 = arguments.length;
switch (G__19093) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.cljs$core$IFn$_invoke$arity$3(node,key,false);
}));

(domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node(node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,key):null);
if(cljs.core.truth_((function (){var and__5043__auto__ = bubble;
if(cljs.core.truth_(and__5043__auto__)){
return (value == null);
} else {
return and__5043__auto__;
}
})())){
var temp__5804__auto__ = domina.single_node(node).parentNode;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
return domina.get_data.cljs$core$IFn$_invoke$arity$3(parent,key,true);
} else {
return null;
}
} else {
return value;
}
}));

(domina.get_data.cljs$lang$maxFixedArity = 3);

/**
 * Sets a data on the node for a given key. Assumes content is a
 *   single node. Data should be ClojureScript values and data structures
 *   only; using other objects as data may result in memory leaks on some
 *   browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__5045__auto__ = domina.single_node(node).__domina_data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return (domina.single_node(node).__domina_data = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,key,value));
});
/**
 * Takes a two-arg function, a reference DomContent and new
 *   DomContent. Applies the function for each reference / content
 *   combination. Uses clones of the new content for each additional
 *   parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes(parent_content);
var children = domina.nodes(child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__19096_19443 = cljs.core.seq(children);
var chunk__19097_19444 = null;
var count__19098_19445 = (0);
var i__19099_19446 = (0);
while(true){
if((i__19099_19446 < count__19098_19445)){
var child_19447 = chunk__19097_19444.cljs$core$IIndexed$_nth$arity$2(null,i__19099_19446);
frag.appendChild(child_19447);


var G__19448 = seq__19096_19443;
var G__19449 = chunk__19097_19444;
var G__19450 = count__19098_19445;
var G__19451 = (i__19099_19446 + (1));
seq__19096_19443 = G__19448;
chunk__19097_19444 = G__19449;
count__19098_19445 = G__19450;
i__19099_19446 = G__19451;
continue;
} else {
var temp__5804__auto___19452 = cljs.core.seq(seq__19096_19443);
if(temp__5804__auto___19452){
var seq__19096_19453__$1 = temp__5804__auto___19452;
if(cljs.core.chunked_seq_QMARK_(seq__19096_19453__$1)){
var c__5568__auto___19454 = cljs.core.chunk_first(seq__19096_19453__$1);
var G__19455 = cljs.core.chunk_rest(seq__19096_19453__$1);
var G__19456 = c__5568__auto___19454;
var G__19457 = cljs.core.count(c__5568__auto___19454);
var G__19458 = (0);
seq__19096_19443 = G__19455;
chunk__19097_19444 = G__19456;
count__19098_19445 = G__19457;
i__19099_19446 = G__19458;
continue;
} else {
var child_19459 = cljs.core.first(seq__19096_19453__$1);
frag.appendChild(child_19459);


var G__19460 = cljs.core.next(seq__19096_19453__$1);
var G__19461 = null;
var G__19462 = (0);
var G__19463 = (0);
seq__19096_19443 = G__19460;
chunk__19097_19444 = G__19461;
count__19098_19445 = G__19462;
i__19099_19446 = G__19463;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(parents) - (1)),(function (){
return first_child.cloneNode(true);
})));
if(cljs.core.seq(parents)){
var G__19100_19464 = cljs.core.first(parents);
var G__19101_19465 = first_child;
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__19100_19464,G__19101_19465) : f.call(null,G__19100_19464,G__19101_19465));

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__19094_SHARP_,p2__19095_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__19094_SHARP_,p2__19095_SHARP_) : f.call(null,p1__19094_SHARP_,p2__19095_SHARP_));
}),cljs.core.rest(parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(var_args){
var G__19103 = arguments.length;
switch (G__19103) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(0));
}));

(domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons(nl.item(n),domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2);

domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(var_args){
var G__19105 = arguments.length;
switch (G__19105) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(0));
}));

(domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((nl[n]),domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2(nl,(n + (1))));
}),null,null));
} else {
return null;
}
}));

(domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2);

/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1(nl);
} else {
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1(nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__5043__auto__ = obj;
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = cljs.core.not(obj.nodeName);
if(and__5043__auto____$1){
return obj.length;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 *   respond to .length, but are not arrays nor NodeSets. This returns a
 *   real sequence view of such objects. If passed an object that is not
 *   a logical sequence at all, returns a single-item seq containing the
 *   object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((list_thing == null))))?(((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === list_thing.cljs$core$ISeqable$))))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,list_thing))){
return cljs.core.seq(list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(list_thing))){
return domina.lazy_nodelist(list_thing);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(domina.nodes(domina.string_to_dom(s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node(domina.string_to_dom(s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.seq(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return domina.lazy_nodelist(content);
} else {
return cljs.core.seq(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if((((!((content == null))))?(((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === content.cljs$core$ISeqable$))))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,content))){
return cljs.core.first(content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_(content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
(NodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(NodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
}));

(NodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
(StaticNodeList.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
}));

(StaticNodeList.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
}));

(StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(nodelist__$1,n);
}
}));

(StaticNodeList.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist(nodelist__$1);
}));
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
(HTMLCollection.prototype.cljs$core$ICounted$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
}));

(HTMLCollection.prototype.cljs$core$IIndexed$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
}));

(HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(coll__$1,n);
}
}));

(HTMLCollection.prototype.cljs$core$ISeqable$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist(coll__$1);
}));
} else {
}

//# sourceMappingURL=domina.js.map
