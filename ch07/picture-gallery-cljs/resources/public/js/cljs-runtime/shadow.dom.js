goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15210 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15210(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15211 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15211(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__14513 = coll;
var G__14514 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__14513,G__14514) : shadow.dom.lazy_native_coll_seq.call(null,G__14513,G__14514));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__14540 = arguments.length;
switch (G__14540) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__14552 = arguments.length;
switch (G__14552) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__14554 = arguments.length;
switch (G__14554) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__14557 = arguments.length;
switch (G__14557) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__14566 = arguments.length;
switch (G__14566) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__14573 = arguments.length;
switch (G__14573) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e14579){if((e14579 instanceof Object)){
var e = e14579;
return console.log("didnt support attachEvent",el,e);
} else {
throw e14579;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__14585 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__14586 = null;
var count__14587 = (0);
var i__14588 = (0);
while(true){
if((i__14588 < count__14587)){
var el = chunk__14586.cljs$core$IIndexed$_nth$arity$2(null,i__14588);
var handler_15218__$1 = ((function (seq__14585,chunk__14586,count__14587,i__14588,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14585,chunk__14586,count__14587,i__14588,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15218__$1);


var G__15219 = seq__14585;
var G__15220 = chunk__14586;
var G__15221 = count__14587;
var G__15222 = (i__14588 + (1));
seq__14585 = G__15219;
chunk__14586 = G__15220;
count__14587 = G__15221;
i__14588 = G__15222;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14585);
if(temp__5804__auto__){
var seq__14585__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14585__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14585__$1);
var G__15223 = cljs.core.chunk_rest(seq__14585__$1);
var G__15224 = c__5568__auto__;
var G__15225 = cljs.core.count(c__5568__auto__);
var G__15226 = (0);
seq__14585 = G__15223;
chunk__14586 = G__15224;
count__14587 = G__15225;
i__14588 = G__15226;
continue;
} else {
var el = cljs.core.first(seq__14585__$1);
var handler_15227__$1 = ((function (seq__14585,chunk__14586,count__14587,i__14588,el,seq__14585__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__14585,chunk__14586,count__14587,i__14588,el,seq__14585__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15227__$1);


var G__15228 = cljs.core.next(seq__14585__$1);
var G__15229 = null;
var G__15230 = (0);
var G__15231 = (0);
seq__14585 = G__15228;
chunk__14586 = G__15229;
count__14587 = G__15230;
i__14588 = G__15231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__14604 = arguments.length;
switch (G__14604) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__14612 = cljs.core.seq(events);
var chunk__14613 = null;
var count__14614 = (0);
var i__14615 = (0);
while(true){
if((i__14615 < count__14614)){
var vec__14626 = chunk__14613.cljs$core$IIndexed$_nth$arity$2(null,i__14615);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14626,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15233 = seq__14612;
var G__15234 = chunk__14613;
var G__15235 = count__14614;
var G__15236 = (i__14615 + (1));
seq__14612 = G__15233;
chunk__14613 = G__15234;
count__14614 = G__15235;
i__14615 = G__15236;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14612);
if(temp__5804__auto__){
var seq__14612__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14612__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14612__$1);
var G__15237 = cljs.core.chunk_rest(seq__14612__$1);
var G__15238 = c__5568__auto__;
var G__15239 = cljs.core.count(c__5568__auto__);
var G__15240 = (0);
seq__14612 = G__15237;
chunk__14613 = G__15238;
count__14614 = G__15239;
i__14615 = G__15240;
continue;
} else {
var vec__14632 = cljs.core.first(seq__14612__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14632,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14632,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15241 = cljs.core.next(seq__14612__$1);
var G__15242 = null;
var G__15243 = (0);
var G__15244 = (0);
seq__14612 = G__15241;
chunk__14613 = G__15242;
count__14614 = G__15243;
i__14615 = G__15244;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__14637 = cljs.core.seq(styles);
var chunk__14638 = null;
var count__14639 = (0);
var i__14640 = (0);
while(true){
if((i__14640 < count__14639)){
var vec__14647 = chunk__14638.cljs$core$IIndexed$_nth$arity$2(null,i__14640);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14647,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15245 = seq__14637;
var G__15246 = chunk__14638;
var G__15247 = count__14639;
var G__15248 = (i__14640 + (1));
seq__14637 = G__15245;
chunk__14638 = G__15246;
count__14639 = G__15247;
i__14640 = G__15248;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14637);
if(temp__5804__auto__){
var seq__14637__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14637__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14637__$1);
var G__15249 = cljs.core.chunk_rest(seq__14637__$1);
var G__15250 = c__5568__auto__;
var G__15251 = cljs.core.count(c__5568__auto__);
var G__15252 = (0);
seq__14637 = G__15249;
chunk__14638 = G__15250;
count__14639 = G__15251;
i__14640 = G__15252;
continue;
} else {
var vec__14651 = cljs.core.first(seq__14637__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14651,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14651,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15253 = cljs.core.next(seq__14637__$1);
var G__15254 = null;
var G__15255 = (0);
var G__15256 = (0);
seq__14637 = G__15253;
chunk__14638 = G__15254;
count__14639 = G__15255;
i__14640 = G__15256;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__14662_15257 = key;
var G__14662_15258__$1 = (((G__14662_15257 instanceof cljs.core.Keyword))?G__14662_15257.fqn:null);
switch (G__14662_15258__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15260 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_15260,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_15260,"aria-");
}
})())){
el.setAttribute(ks_15260,value);
} else {
(el[ks_15260] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__14681){
var map__14682 = p__14681;
var map__14682__$1 = cljs.core.__destructure_map(map__14682);
var props = map__14682__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14682__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__14683 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14683,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__14686 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__14686,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__14686;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__14688 = arguments.length;
switch (G__14688) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__14693){
var vec__14694 = p__14693;
var seq__14695 = cljs.core.seq(vec__14694);
var first__14696 = cljs.core.first(seq__14695);
var seq__14695__$1 = cljs.core.next(seq__14695);
var nn = first__14696;
var first__14696__$1 = cljs.core.first(seq__14695__$1);
var seq__14695__$2 = cljs.core.next(seq__14695__$1);
var np = first__14696__$1;
var nc = seq__14695__$2;
var node = vec__14694;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14700 = nn;
var G__14701 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14700,G__14701) : create_fn.call(null,G__14700,G__14701));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__14702 = nn;
var G__14703 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__14702,G__14703) : create_fn.call(null,G__14702,G__14703));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__14704 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14704,(1),null);
var seq__14707_15262 = cljs.core.seq(node_children);
var chunk__14708_15263 = null;
var count__14709_15264 = (0);
var i__14710_15265 = (0);
while(true){
if((i__14710_15265 < count__14709_15264)){
var child_struct_15266 = chunk__14708_15263.cljs$core$IIndexed$_nth$arity$2(null,i__14710_15265);
var children_15267 = shadow.dom.dom_node(child_struct_15266);
if(cljs.core.seq_QMARK_(children_15267)){
var seq__14727_15268 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15267));
var chunk__14729_15269 = null;
var count__14730_15270 = (0);
var i__14731_15271 = (0);
while(true){
if((i__14731_15271 < count__14730_15270)){
var child_15272 = chunk__14729_15269.cljs$core$IIndexed$_nth$arity$2(null,i__14731_15271);
if(cljs.core.truth_(child_15272)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15272);


var G__15273 = seq__14727_15268;
var G__15274 = chunk__14729_15269;
var G__15275 = count__14730_15270;
var G__15276 = (i__14731_15271 + (1));
seq__14727_15268 = G__15273;
chunk__14729_15269 = G__15274;
count__14730_15270 = G__15275;
i__14731_15271 = G__15276;
continue;
} else {
var G__15277 = seq__14727_15268;
var G__15278 = chunk__14729_15269;
var G__15279 = count__14730_15270;
var G__15280 = (i__14731_15271 + (1));
seq__14727_15268 = G__15277;
chunk__14729_15269 = G__15278;
count__14730_15270 = G__15279;
i__14731_15271 = G__15280;
continue;
}
} else {
var temp__5804__auto___15281 = cljs.core.seq(seq__14727_15268);
if(temp__5804__auto___15281){
var seq__14727_15282__$1 = temp__5804__auto___15281;
if(cljs.core.chunked_seq_QMARK_(seq__14727_15282__$1)){
var c__5568__auto___15283 = cljs.core.chunk_first(seq__14727_15282__$1);
var G__15284 = cljs.core.chunk_rest(seq__14727_15282__$1);
var G__15285 = c__5568__auto___15283;
var G__15286 = cljs.core.count(c__5568__auto___15283);
var G__15287 = (0);
seq__14727_15268 = G__15284;
chunk__14729_15269 = G__15285;
count__14730_15270 = G__15286;
i__14731_15271 = G__15287;
continue;
} else {
var child_15288 = cljs.core.first(seq__14727_15282__$1);
if(cljs.core.truth_(child_15288)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15288);


var G__15289 = cljs.core.next(seq__14727_15282__$1);
var G__15290 = null;
var G__15291 = (0);
var G__15292 = (0);
seq__14727_15268 = G__15289;
chunk__14729_15269 = G__15290;
count__14730_15270 = G__15291;
i__14731_15271 = G__15292;
continue;
} else {
var G__15293 = cljs.core.next(seq__14727_15282__$1);
var G__15294 = null;
var G__15295 = (0);
var G__15296 = (0);
seq__14727_15268 = G__15293;
chunk__14729_15269 = G__15294;
count__14730_15270 = G__15295;
i__14731_15271 = G__15296;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15267);
}


var G__15297 = seq__14707_15262;
var G__15298 = chunk__14708_15263;
var G__15299 = count__14709_15264;
var G__15300 = (i__14710_15265 + (1));
seq__14707_15262 = G__15297;
chunk__14708_15263 = G__15298;
count__14709_15264 = G__15299;
i__14710_15265 = G__15300;
continue;
} else {
var temp__5804__auto___15301 = cljs.core.seq(seq__14707_15262);
if(temp__5804__auto___15301){
var seq__14707_15302__$1 = temp__5804__auto___15301;
if(cljs.core.chunked_seq_QMARK_(seq__14707_15302__$1)){
var c__5568__auto___15303 = cljs.core.chunk_first(seq__14707_15302__$1);
var G__15304 = cljs.core.chunk_rest(seq__14707_15302__$1);
var G__15305 = c__5568__auto___15303;
var G__15306 = cljs.core.count(c__5568__auto___15303);
var G__15307 = (0);
seq__14707_15262 = G__15304;
chunk__14708_15263 = G__15305;
count__14709_15264 = G__15306;
i__14710_15265 = G__15307;
continue;
} else {
var child_struct_15308 = cljs.core.first(seq__14707_15302__$1);
var children_15309 = shadow.dom.dom_node(child_struct_15308);
if(cljs.core.seq_QMARK_(children_15309)){
var seq__14757_15310 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15309));
var chunk__14759_15311 = null;
var count__14760_15312 = (0);
var i__14761_15313 = (0);
while(true){
if((i__14761_15313 < count__14760_15312)){
var child_15314 = chunk__14759_15311.cljs$core$IIndexed$_nth$arity$2(null,i__14761_15313);
if(cljs.core.truth_(child_15314)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15314);


var G__15315 = seq__14757_15310;
var G__15316 = chunk__14759_15311;
var G__15317 = count__14760_15312;
var G__15318 = (i__14761_15313 + (1));
seq__14757_15310 = G__15315;
chunk__14759_15311 = G__15316;
count__14760_15312 = G__15317;
i__14761_15313 = G__15318;
continue;
} else {
var G__15319 = seq__14757_15310;
var G__15320 = chunk__14759_15311;
var G__15321 = count__14760_15312;
var G__15322 = (i__14761_15313 + (1));
seq__14757_15310 = G__15319;
chunk__14759_15311 = G__15320;
count__14760_15312 = G__15321;
i__14761_15313 = G__15322;
continue;
}
} else {
var temp__5804__auto___15323__$1 = cljs.core.seq(seq__14757_15310);
if(temp__5804__auto___15323__$1){
var seq__14757_15324__$1 = temp__5804__auto___15323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14757_15324__$1)){
var c__5568__auto___15325 = cljs.core.chunk_first(seq__14757_15324__$1);
var G__15326 = cljs.core.chunk_rest(seq__14757_15324__$1);
var G__15327 = c__5568__auto___15325;
var G__15328 = cljs.core.count(c__5568__auto___15325);
var G__15329 = (0);
seq__14757_15310 = G__15326;
chunk__14759_15311 = G__15327;
count__14760_15312 = G__15328;
i__14761_15313 = G__15329;
continue;
} else {
var child_15330 = cljs.core.first(seq__14757_15324__$1);
if(cljs.core.truth_(child_15330)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15330);


var G__15331 = cljs.core.next(seq__14757_15324__$1);
var G__15332 = null;
var G__15333 = (0);
var G__15334 = (0);
seq__14757_15310 = G__15331;
chunk__14759_15311 = G__15332;
count__14760_15312 = G__15333;
i__14761_15313 = G__15334;
continue;
} else {
var G__15335 = cljs.core.next(seq__14757_15324__$1);
var G__15336 = null;
var G__15337 = (0);
var G__15338 = (0);
seq__14757_15310 = G__15335;
chunk__14759_15311 = G__15336;
count__14760_15312 = G__15337;
i__14761_15313 = G__15338;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15309);
}


var G__15339 = cljs.core.next(seq__14707_15302__$1);
var G__15340 = null;
var G__15341 = (0);
var G__15342 = (0);
seq__14707_15262 = G__15339;
chunk__14708_15263 = G__15340;
count__14709_15264 = G__15341;
i__14710_15265 = G__15342;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14777 = cljs.core.seq(node);
var chunk__14779 = null;
var count__14780 = (0);
var i__14781 = (0);
while(true){
if((i__14781 < count__14780)){
var n = chunk__14779.cljs$core$IIndexed$_nth$arity$2(null,i__14781);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15343 = seq__14777;
var G__15344 = chunk__14779;
var G__15345 = count__14780;
var G__15346 = (i__14781 + (1));
seq__14777 = G__15343;
chunk__14779 = G__15344;
count__14780 = G__15345;
i__14781 = G__15346;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14777);
if(temp__5804__auto__){
var seq__14777__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14777__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14777__$1);
var G__15347 = cljs.core.chunk_rest(seq__14777__$1);
var G__15348 = c__5568__auto__;
var G__15349 = cljs.core.count(c__5568__auto__);
var G__15350 = (0);
seq__14777 = G__15347;
chunk__14779 = G__15348;
count__14780 = G__15349;
i__14781 = G__15350;
continue;
} else {
var n = cljs.core.first(seq__14777__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15351 = cljs.core.next(seq__14777__$1);
var G__15352 = null;
var G__15353 = (0);
var G__15354 = (0);
seq__14777 = G__15351;
chunk__14779 = G__15352;
count__14780 = G__15353;
i__14781 = G__15354;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14791 = arguments.length;
switch (G__14791) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14807 = arguments.length;
switch (G__14807) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14833 = arguments.length;
switch (G__14833) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15358 = arguments.length;
var i__5770__auto___15359 = (0);
while(true){
if((i__5770__auto___15359 < len__5769__auto___15358)){
args__5775__auto__.push((arguments[i__5770__auto___15359]));

var G__15360 = (i__5770__auto___15359 + (1));
i__5770__auto___15359 = G__15360;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14866_15361 = cljs.core.seq(nodes);
var chunk__14867_15362 = null;
var count__14868_15363 = (0);
var i__14869_15364 = (0);
while(true){
if((i__14869_15364 < count__14868_15363)){
var node_15365 = chunk__14867_15362.cljs$core$IIndexed$_nth$arity$2(null,i__14869_15364);
fragment.appendChild(shadow.dom._to_dom(node_15365));


var G__15366 = seq__14866_15361;
var G__15367 = chunk__14867_15362;
var G__15368 = count__14868_15363;
var G__15369 = (i__14869_15364 + (1));
seq__14866_15361 = G__15366;
chunk__14867_15362 = G__15367;
count__14868_15363 = G__15368;
i__14869_15364 = G__15369;
continue;
} else {
var temp__5804__auto___15370 = cljs.core.seq(seq__14866_15361);
if(temp__5804__auto___15370){
var seq__14866_15371__$1 = temp__5804__auto___15370;
if(cljs.core.chunked_seq_QMARK_(seq__14866_15371__$1)){
var c__5568__auto___15372 = cljs.core.chunk_first(seq__14866_15371__$1);
var G__15373 = cljs.core.chunk_rest(seq__14866_15371__$1);
var G__15374 = c__5568__auto___15372;
var G__15375 = cljs.core.count(c__5568__auto___15372);
var G__15376 = (0);
seq__14866_15361 = G__15373;
chunk__14867_15362 = G__15374;
count__14868_15363 = G__15375;
i__14869_15364 = G__15376;
continue;
} else {
var node_15377 = cljs.core.first(seq__14866_15371__$1);
fragment.appendChild(shadow.dom._to_dom(node_15377));


var G__15378 = cljs.core.next(seq__14866_15371__$1);
var G__15379 = null;
var G__15380 = (0);
var G__15381 = (0);
seq__14866_15361 = G__15378;
chunk__14867_15362 = G__15379;
count__14868_15363 = G__15380;
i__14869_15364 = G__15381;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14847){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14847));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14870_15382 = cljs.core.seq(scripts);
var chunk__14871_15383 = null;
var count__14872_15384 = (0);
var i__14873_15385 = (0);
while(true){
if((i__14873_15385 < count__14872_15384)){
var vec__14896_15386 = chunk__14871_15383.cljs$core$IIndexed$_nth$arity$2(null,i__14873_15385);
var script_tag_15387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896_15386,(0),null);
var script_body_15388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14896_15386,(1),null);
eval(script_body_15388);


var G__15389 = seq__14870_15382;
var G__15390 = chunk__14871_15383;
var G__15391 = count__14872_15384;
var G__15392 = (i__14873_15385 + (1));
seq__14870_15382 = G__15389;
chunk__14871_15383 = G__15390;
count__14872_15384 = G__15391;
i__14873_15385 = G__15392;
continue;
} else {
var temp__5804__auto___15393 = cljs.core.seq(seq__14870_15382);
if(temp__5804__auto___15393){
var seq__14870_15394__$1 = temp__5804__auto___15393;
if(cljs.core.chunked_seq_QMARK_(seq__14870_15394__$1)){
var c__5568__auto___15395 = cljs.core.chunk_first(seq__14870_15394__$1);
var G__15396 = cljs.core.chunk_rest(seq__14870_15394__$1);
var G__15397 = c__5568__auto___15395;
var G__15398 = cljs.core.count(c__5568__auto___15395);
var G__15399 = (0);
seq__14870_15382 = G__15396;
chunk__14871_15383 = G__15397;
count__14872_15384 = G__15398;
i__14873_15385 = G__15399;
continue;
} else {
var vec__14908_15400 = cljs.core.first(seq__14870_15394__$1);
var script_tag_15401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_15400,(0),null);
var script_body_15402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14908_15400,(1),null);
eval(script_body_15402);


var G__15403 = cljs.core.next(seq__14870_15394__$1);
var G__15404 = null;
var G__15405 = (0);
var G__15406 = (0);
seq__14870_15382 = G__15403;
chunk__14871_15383 = G__15404;
count__14872_15384 = G__15405;
i__14873_15385 = G__15406;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14911){
var vec__14912 = p__14911;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14912,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14916 = arguments.length;
switch (G__14916) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14931 = cljs.core.seq(style_keys);
var chunk__14932 = null;
var count__14933 = (0);
var i__14934 = (0);
while(true){
if((i__14934 < count__14933)){
var it = chunk__14932.cljs$core$IIndexed$_nth$arity$2(null,i__14934);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15408 = seq__14931;
var G__15409 = chunk__14932;
var G__15410 = count__14933;
var G__15411 = (i__14934 + (1));
seq__14931 = G__15408;
chunk__14932 = G__15409;
count__14933 = G__15410;
i__14934 = G__15411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14931);
if(temp__5804__auto__){
var seq__14931__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14931__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14931__$1);
var G__15412 = cljs.core.chunk_rest(seq__14931__$1);
var G__15413 = c__5568__auto__;
var G__15414 = cljs.core.count(c__5568__auto__);
var G__15415 = (0);
seq__14931 = G__15412;
chunk__14932 = G__15413;
count__14933 = G__15414;
i__14934 = G__15415;
continue;
} else {
var it = cljs.core.first(seq__14931__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15416 = cljs.core.next(seq__14931__$1);
var G__15417 = null;
var G__15418 = (0);
var G__15419 = (0);
seq__14931 = G__15416;
chunk__14932 = G__15417;
count__14933 = G__15418;
i__14934 = G__15419;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k14940,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__14945 = k14940;
var G__14945__$1 = (((G__14945 instanceof cljs.core.Keyword))?G__14945.fqn:null);
switch (G__14945__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14940,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__14948){
var vec__14950 = p__14948;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14950,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14950,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14939){
var self__ = this;
var G__14939__$1 = this;
return (new cljs.core.RecordIter((0),G__14939__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14941,other14942){
var self__ = this;
var this14941__$1 = this;
return (((!((other14942 == null)))) && ((((this14941__$1.constructor === other14942.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.x,other14942.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.y,other14942.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14941__$1.__extmap,other14942.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k14940){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15009 = k14940;
var G__15009__$1 = (((G__15009 instanceof cljs.core.Keyword))?G__15009.fqn:null);
switch (G__15009__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14940);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__14939){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15010 = cljs.core.keyword_identical_QMARK_;
var expr__15011 = k__5352__auto__;
if(cljs.core.truth_((pred__15010.cljs$core$IFn$_invoke$arity$2 ? pred__15010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15011) : pred__15010.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15011)))){
return (new shadow.dom.Coordinate(G__14939,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15010.cljs$core$IFn$_invoke$arity$2 ? pred__15010.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15011) : pred__15010.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15011)))){
return (new shadow.dom.Coordinate(self__.x,G__14939,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__14939),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__14939){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14939,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14944){
var extmap__5385__auto__ = (function (){var G__15013 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14944,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14944)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15013);
} else {
return G__15013;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14944),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14944),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k15031,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__15046 = k15031;
var G__15046__$1 = (((G__15046 instanceof cljs.core.Keyword))?G__15046.fqn:null);
switch (G__15046__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15031,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__15065){
var vec__15067 = p__15065;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15067,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15067,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15030){
var self__ = this;
var G__15030__$1 = this;
return (new cljs.core.RecordIter((0),G__15030__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15032,other15033){
var self__ = this;
var this15032__$1 = this;
return (((!((other15033 == null)))) && ((((this15032__$1.constructor === other15033.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15032__$1.w,other15033.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15032__$1.h,other15033.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15032__$1.__extmap,other15033.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k15031){
var self__ = this;
var this__5350__auto____$1 = this;
var G__15104 = k15031;
var G__15104__$1 = (((G__15104 instanceof cljs.core.Keyword))?G__15104.fqn:null);
switch (G__15104__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15031);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__15030){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__15109 = cljs.core.keyword_identical_QMARK_;
var expr__15110 = k__5352__auto__;
if(cljs.core.truth_((pred__15109.cljs$core$IFn$_invoke$arity$2 ? pred__15109.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15110) : pred__15109.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15110)))){
return (new shadow.dom.Size(G__15030,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15109.cljs$core$IFn$_invoke$arity$2 ? pred__15109.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15110) : pred__15109.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15110)))){
return (new shadow.dom.Size(self__.w,G__15030,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__15030),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__15030){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15030,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15041){
var extmap__5385__auto__ = (function (){var G__15130 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15041,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15041)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15130);
} else {
return G__15130;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15041),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15041),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__15428 = (i + (1));
var G__15429 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15428;
ret = G__15429;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__15135){
var vec__15136 = p__15135;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15136,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__15140 = arguments.length;
switch (G__15140) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15434 = ps;
var G__15435 = (i + (1));
el__$1 = G__15434;
i = G__15435;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__15141 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15141,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__15144_15436 = cljs.core.seq(props);
var chunk__15145_15437 = null;
var count__15146_15438 = (0);
var i__15147_15439 = (0);
while(true){
if((i__15147_15439 < count__15146_15438)){
var vec__15154_15440 = chunk__15145_15437.cljs$core$IIndexed$_nth$arity$2(null,i__15147_15439);
var k_15441 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15440,(0),null);
var v_15442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15440,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15441);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15441),v_15442);


var G__15443 = seq__15144_15436;
var G__15444 = chunk__15145_15437;
var G__15445 = count__15146_15438;
var G__15446 = (i__15147_15439 + (1));
seq__15144_15436 = G__15443;
chunk__15145_15437 = G__15444;
count__15146_15438 = G__15445;
i__15147_15439 = G__15446;
continue;
} else {
var temp__5804__auto___15447 = cljs.core.seq(seq__15144_15436);
if(temp__5804__auto___15447){
var seq__15144_15448__$1 = temp__5804__auto___15447;
if(cljs.core.chunked_seq_QMARK_(seq__15144_15448__$1)){
var c__5568__auto___15449 = cljs.core.chunk_first(seq__15144_15448__$1);
var G__15450 = cljs.core.chunk_rest(seq__15144_15448__$1);
var G__15451 = c__5568__auto___15449;
var G__15452 = cljs.core.count(c__5568__auto___15449);
var G__15453 = (0);
seq__15144_15436 = G__15450;
chunk__15145_15437 = G__15451;
count__15146_15438 = G__15452;
i__15147_15439 = G__15453;
continue;
} else {
var vec__15157_15454 = cljs.core.first(seq__15144_15448__$1);
var k_15455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15157_15454,(0),null);
var v_15456 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15157_15454,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15455);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15455),v_15456);


var G__15457 = cljs.core.next(seq__15144_15448__$1);
var G__15458 = null;
var G__15459 = (0);
var G__15460 = (0);
seq__15144_15436 = G__15457;
chunk__15145_15437 = G__15458;
count__15146_15438 = G__15459;
i__15147_15439 = G__15460;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__15161 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15161,(1),null);
var seq__15164_15461 = cljs.core.seq(node_children);
var chunk__15166_15462 = null;
var count__15167_15463 = (0);
var i__15168_15464 = (0);
while(true){
if((i__15168_15464 < count__15167_15463)){
var child_struct_15465 = chunk__15166_15462.cljs$core$IIndexed$_nth$arity$2(null,i__15168_15464);
if((!((child_struct_15465 == null)))){
if(typeof child_struct_15465 === 'string'){
var text_15466 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15466),child_struct_15465].join(''));
} else {
var children_15467 = shadow.dom.svg_node(child_struct_15465);
if(cljs.core.seq_QMARK_(children_15467)){
var seq__15182_15468 = cljs.core.seq(children_15467);
var chunk__15184_15469 = null;
var count__15185_15470 = (0);
var i__15186_15471 = (0);
while(true){
if((i__15186_15471 < count__15185_15470)){
var child_15472 = chunk__15184_15469.cljs$core$IIndexed$_nth$arity$2(null,i__15186_15471);
if(cljs.core.truth_(child_15472)){
node.appendChild(child_15472);


var G__15475 = seq__15182_15468;
var G__15476 = chunk__15184_15469;
var G__15477 = count__15185_15470;
var G__15478 = (i__15186_15471 + (1));
seq__15182_15468 = G__15475;
chunk__15184_15469 = G__15476;
count__15185_15470 = G__15477;
i__15186_15471 = G__15478;
continue;
} else {
var G__15479 = seq__15182_15468;
var G__15480 = chunk__15184_15469;
var G__15481 = count__15185_15470;
var G__15482 = (i__15186_15471 + (1));
seq__15182_15468 = G__15479;
chunk__15184_15469 = G__15480;
count__15185_15470 = G__15481;
i__15186_15471 = G__15482;
continue;
}
} else {
var temp__5804__auto___15483 = cljs.core.seq(seq__15182_15468);
if(temp__5804__auto___15483){
var seq__15182_15484__$1 = temp__5804__auto___15483;
if(cljs.core.chunked_seq_QMARK_(seq__15182_15484__$1)){
var c__5568__auto___15485 = cljs.core.chunk_first(seq__15182_15484__$1);
var G__15486 = cljs.core.chunk_rest(seq__15182_15484__$1);
var G__15487 = c__5568__auto___15485;
var G__15488 = cljs.core.count(c__5568__auto___15485);
var G__15489 = (0);
seq__15182_15468 = G__15486;
chunk__15184_15469 = G__15487;
count__15185_15470 = G__15488;
i__15186_15471 = G__15489;
continue;
} else {
var child_15490 = cljs.core.first(seq__15182_15484__$1);
if(cljs.core.truth_(child_15490)){
node.appendChild(child_15490);


var G__15491 = cljs.core.next(seq__15182_15484__$1);
var G__15492 = null;
var G__15493 = (0);
var G__15494 = (0);
seq__15182_15468 = G__15491;
chunk__15184_15469 = G__15492;
count__15185_15470 = G__15493;
i__15186_15471 = G__15494;
continue;
} else {
var G__15495 = cljs.core.next(seq__15182_15484__$1);
var G__15496 = null;
var G__15497 = (0);
var G__15498 = (0);
seq__15182_15468 = G__15495;
chunk__15184_15469 = G__15496;
count__15185_15470 = G__15497;
i__15186_15471 = G__15498;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15467);
}
}


var G__15499 = seq__15164_15461;
var G__15500 = chunk__15166_15462;
var G__15501 = count__15167_15463;
var G__15502 = (i__15168_15464 + (1));
seq__15164_15461 = G__15499;
chunk__15166_15462 = G__15500;
count__15167_15463 = G__15501;
i__15168_15464 = G__15502;
continue;
} else {
var G__15503 = seq__15164_15461;
var G__15504 = chunk__15166_15462;
var G__15505 = count__15167_15463;
var G__15506 = (i__15168_15464 + (1));
seq__15164_15461 = G__15503;
chunk__15166_15462 = G__15504;
count__15167_15463 = G__15505;
i__15168_15464 = G__15506;
continue;
}
} else {
var temp__5804__auto___15507 = cljs.core.seq(seq__15164_15461);
if(temp__5804__auto___15507){
var seq__15164_15508__$1 = temp__5804__auto___15507;
if(cljs.core.chunked_seq_QMARK_(seq__15164_15508__$1)){
var c__5568__auto___15509 = cljs.core.chunk_first(seq__15164_15508__$1);
var G__15510 = cljs.core.chunk_rest(seq__15164_15508__$1);
var G__15511 = c__5568__auto___15509;
var G__15512 = cljs.core.count(c__5568__auto___15509);
var G__15513 = (0);
seq__15164_15461 = G__15510;
chunk__15166_15462 = G__15511;
count__15167_15463 = G__15512;
i__15168_15464 = G__15513;
continue;
} else {
var child_struct_15514 = cljs.core.first(seq__15164_15508__$1);
if((!((child_struct_15514 == null)))){
if(typeof child_struct_15514 === 'string'){
var text_15515 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15515),child_struct_15514].join(''));
} else {
var children_15516 = shadow.dom.svg_node(child_struct_15514);
if(cljs.core.seq_QMARK_(children_15516)){
var seq__15188_15517 = cljs.core.seq(children_15516);
var chunk__15190_15518 = null;
var count__15191_15519 = (0);
var i__15192_15520 = (0);
while(true){
if((i__15192_15520 < count__15191_15519)){
var child_15521 = chunk__15190_15518.cljs$core$IIndexed$_nth$arity$2(null,i__15192_15520);
if(cljs.core.truth_(child_15521)){
node.appendChild(child_15521);


var G__15522 = seq__15188_15517;
var G__15523 = chunk__15190_15518;
var G__15524 = count__15191_15519;
var G__15525 = (i__15192_15520 + (1));
seq__15188_15517 = G__15522;
chunk__15190_15518 = G__15523;
count__15191_15519 = G__15524;
i__15192_15520 = G__15525;
continue;
} else {
var G__15526 = seq__15188_15517;
var G__15527 = chunk__15190_15518;
var G__15528 = count__15191_15519;
var G__15529 = (i__15192_15520 + (1));
seq__15188_15517 = G__15526;
chunk__15190_15518 = G__15527;
count__15191_15519 = G__15528;
i__15192_15520 = G__15529;
continue;
}
} else {
var temp__5804__auto___15530__$1 = cljs.core.seq(seq__15188_15517);
if(temp__5804__auto___15530__$1){
var seq__15188_15531__$1 = temp__5804__auto___15530__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15188_15531__$1)){
var c__5568__auto___15532 = cljs.core.chunk_first(seq__15188_15531__$1);
var G__15533 = cljs.core.chunk_rest(seq__15188_15531__$1);
var G__15534 = c__5568__auto___15532;
var G__15535 = cljs.core.count(c__5568__auto___15532);
var G__15536 = (0);
seq__15188_15517 = G__15533;
chunk__15190_15518 = G__15534;
count__15191_15519 = G__15535;
i__15192_15520 = G__15536;
continue;
} else {
var child_15537 = cljs.core.first(seq__15188_15531__$1);
if(cljs.core.truth_(child_15537)){
node.appendChild(child_15537);


var G__15538 = cljs.core.next(seq__15188_15531__$1);
var G__15539 = null;
var G__15540 = (0);
var G__15541 = (0);
seq__15188_15517 = G__15538;
chunk__15190_15518 = G__15539;
count__15191_15519 = G__15540;
i__15192_15520 = G__15541;
continue;
} else {
var G__15542 = cljs.core.next(seq__15188_15531__$1);
var G__15543 = null;
var G__15544 = (0);
var G__15545 = (0);
seq__15188_15517 = G__15542;
chunk__15190_15518 = G__15543;
count__15191_15519 = G__15544;
i__15192_15520 = G__15545;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15516);
}
}


var G__15546 = cljs.core.next(seq__15164_15508__$1);
var G__15547 = null;
var G__15548 = (0);
var G__15549 = (0);
seq__15164_15461 = G__15546;
chunk__15166_15462 = G__15547;
count__15167_15463 = G__15548;
i__15168_15464 = G__15549;
continue;
} else {
var G__15550 = cljs.core.next(seq__15164_15508__$1);
var G__15551 = null;
var G__15552 = (0);
var G__15553 = (0);
seq__15164_15461 = G__15550;
chunk__15166_15462 = G__15551;
count__15167_15463 = G__15552;
i__15168_15464 = G__15553;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___15554 = arguments.length;
var i__5770__auto___15555 = (0);
while(true){
if((i__5770__auto___15555 < len__5769__auto___15554)){
args__5775__auto__.push((arguments[i__5770__auto___15555]));

var G__15556 = (i__5770__auto___15555 + (1));
i__5770__auto___15555 = G__15556;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15194){
var G__15195 = cljs.core.first(seq15194);
var seq15194__$1 = cljs.core.next(seq15194);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15195,seq15194__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__15197 = arguments.length;
switch (G__15197) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13005__auto___15558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13006__auto__ = (function (){var switch__12970__auto__ = (function (state_15202){
var state_val_15203 = (state_15202[(1)]);
if((state_val_15203 === (1))){
var state_15202__$1 = state_15202;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15202__$1,(2),once_or_cleanup);
} else {
if((state_val_15203 === (2))){
var inst_15199 = (state_15202[(2)]);
var inst_15200 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_15202__$1 = (function (){var statearr_15204 = state_15202;
(statearr_15204[(7)] = inst_15199);

return statearr_15204;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15202__$1,inst_15200);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__12971__auto__ = null;
var shadow$dom$state_machine__12971__auto____0 = (function (){
var statearr_15205 = [null,null,null,null,null,null,null,null];
(statearr_15205[(0)] = shadow$dom$state_machine__12971__auto__);

(statearr_15205[(1)] = (1));

return statearr_15205;
});
var shadow$dom$state_machine__12971__auto____1 = (function (state_15202){
while(true){
var ret_value__12972__auto__ = (function (){try{while(true){
var result__12973__auto__ = switch__12970__auto__(state_15202);
if(cljs.core.keyword_identical_QMARK_(result__12973__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12973__auto__;
}
break;
}
}catch (e15206){var ex__12974__auto__ = e15206;
var statearr_15207_15559 = state_15202;
(statearr_15207_15559[(2)] = ex__12974__auto__);


if(cljs.core.seq((state_15202[(4)]))){
var statearr_15208_15560 = state_15202;
(statearr_15208_15560[(1)] = cljs.core.first((state_15202[(4)])));

} else {
throw ex__12974__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__12972__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15561 = state_15202;
state_15202 = G__15561;
continue;
} else {
return ret_value__12972__auto__;
}
break;
}
});
shadow$dom$state_machine__12971__auto__ = function(state_15202){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__12971__auto____0.call(this);
case 1:
return shadow$dom$state_machine__12971__auto____1.call(this,state_15202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__12971__auto____0;
shadow$dom$state_machine__12971__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__12971__auto____1;
return shadow$dom$state_machine__12971__auto__;
})()
})();
var state__13007__auto__ = (function (){var statearr_15209 = f__13006__auto__();
(statearr_15209[(6)] = c__13005__auto___15558);

return statearr_15209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13007__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
