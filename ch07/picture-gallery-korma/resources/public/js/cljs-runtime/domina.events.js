goog.provide('domina.events');
goog.scope(function(){
  domina.events.goog$module$goog$object = goog.module.get('goog.object');
});

/**
 * @interface
 */
domina.events.Event = function(){};

var domina$events$Event$prevent_default$dyn_19547 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.prevent_default[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.prevent_default["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.prevent-default",evt);
}
}
});
/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$prevent_default$arity$1 == null)))))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
return domina$events$Event$prevent_default$dyn_19547(evt);
}
});

var domina$events$Event$stop_propagation$dyn_19548 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.stop_propagation[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.stop_propagation["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.stop-propagation",evt);
}
}
});
/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$stop_propagation$arity$1 == null)))))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
return domina$events$Event$stop_propagation$dyn_19548(evt);
}
});

var domina$events$Event$target$dyn_19549 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.target[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.target["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.target",evt);
}
}
});
/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$target$arity$1 == null)))))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
return domina$events$Event$target$dyn_19549(evt);
}
});

var domina$events$Event$current_target$dyn_19550 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.current_target[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.current_target["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.current-target",evt);
}
}
});
/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$current_target$arity$1 == null)))))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
return domina$events$Event$current_target$dyn_19550(evt);
}
});

var domina$events$Event$event_type$dyn_19553 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.event_type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.event_type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.event-type",evt);
}
}
});
/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$event_type$arity$1 == null)))))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
return domina$events$Event$event_type$dyn_19553(evt);
}
});

var domina$events$Event$raw_event$dyn_19554 = (function (evt){
var x__5393__auto__ = (((evt == null))?null:evt);
var m__5394__auto__ = (domina.events.raw_event[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5394__auto__.call(null,evt));
} else {
var m__5392__auto__ = (domina.events.raw_event["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(evt) : m__5392__auto__.call(null,evt));
} else {
throw cljs.core.missing_protocol("Event.raw-event",evt);
}
}
});
/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((((!((evt == null)))) && ((!((evt.domina$events$Event$raw_event$arity$1 == null)))))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
return domina$events$Event$raw_event$dyn_19554(evt);
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
var G__19468_19555 = (function (){
if((typeof domina !== 'undefined') && (typeof domina.events !== 'undefined') && (typeof domina.events.t_domina$events19469 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {domina.events.Event}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
domina.events.t_domina$events19469 = (function (f,evt,meta19470){
this.f = f;
this.evt = evt;
this.meta19470 = meta19470;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(domina.events.t_domina$events19469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19471,meta19470__$1){
var self__ = this;
var _19471__$1 = this;
return (new domina.events.t_domina$events19469(self__.f,self__.evt,meta19470__$1));
}));

(domina.events.t_domina$events19469.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19471){
var self__ = this;
var _19471__$1 = this;
return self__.meta19470;
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$ = cljs.core.PROTOCOL_SENTINEL);

(domina.events.t_domina$events19469.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
}));

(domina.events.t_domina$events19469.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
}));

(domina.events.t_domina$events19469.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__5802__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__5802__auto__)){
var val = temp__5802__auto__;
return val;
} else {
return (self__.evt[cljs.core.name(k)]);
}
}));

(domina.events.t_domina$events19469.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__5045__auto__ = o__$1.cljs$core$ILookup$_lookup$arity$2(null,k);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(domina.events.t_domina$events19469.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta19470","meta19470",731152850,null)], null);
}));

(domina.events.t_domina$events19469.cljs$lang$type = true);

(domina.events.t_domina$events19469.cljs$lang$ctorStr = "domina.events/t_domina$events19469");

(domina.events.t_domina$events19469.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"domina.events/t_domina$events19469");
}));

/**
 * Positional factory function for domina.events/t_domina$events19469.
 */
domina.events.__GT_t_domina$events19469 = (function domina$events$create_listener_function_$___GT_t_domina$events19469(f__$1,evt__$1,meta19470){
return (new domina.events.t_domina$events19469(f__$1,evt__$1,meta19470));
});

}

return (new domina.events.t_domina$events19469(f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
;
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__19468_19555) : f.call(null,G__19468_19555));

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function(listener);
var t = cljs.core.name(type);
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function domina$events$listen_internal_BANG__$_iter__19472(s__19473){
return (new cljs.core.LazySeq(null,(function (){
var s__19473__$1 = s__19473;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19473__$1);
if(temp__5804__auto__){
var s__19473__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19473__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__19473__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__19475 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__19474 = (0);
while(true){
if((i__19474 < size__5522__auto__)){
var node = cljs.core._nth(c__5521__auto__,i__19474);
cljs.core.chunk_append(b__19475,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__19556 = (i__19474 + (1));
i__19474 = G__19556;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19475),domina$events$listen_internal_BANG__$_iter__19472(cljs.core.chunk_rest(s__19473__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19475),null);
}
} else {
var node = cljs.core.first(s__19473__$2);
return cljs.core.cons((cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__19472(cljs.core.rest(s__19473__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(domina.nodes(content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(var_args){
var G__19477 = arguments.length;
switch (G__19477) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
}));

(domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,false);
}));

(domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(var_args){
var G__19479 = arguments.length;
switch (G__19479) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
}));

(domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,false);
}));

(domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(var_args){
var G__19481 = arguments.length;
switch (G__19481) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
}));

(domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,false,true);
}));

(domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(var_args){
var G__19483 = arguments.length;
switch (G__19483) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,listener);
}));

(domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_(content,type,listener,true,true);
}));

(domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(var_args){
var G__19485 = arguments.length;
switch (G__19485) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1(domina.events.root_element);
}));

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__19486 = cljs.core.seq(domina.nodes(content));
var chunk__19487 = null;
var count__19488 = (0);
var i__19489 = (0);
while(true){
if((i__19489 < count__19488)){
var node = chunk__19487.cljs$core$IIndexed$_nth$arity$2(null,i__19489);
goog.events.removeAll(node);


var G__19563 = seq__19486;
var G__19564 = chunk__19487;
var G__19565 = count__19488;
var G__19566 = (i__19489 + (1));
seq__19486 = G__19563;
chunk__19487 = G__19564;
count__19488 = G__19565;
i__19489 = G__19566;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19486);
if(temp__5804__auto__){
var seq__19486__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19486__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19486__$1);
var G__19567 = cljs.core.chunk_rest(seq__19486__$1);
var G__19568 = c__5568__auto__;
var G__19569 = cljs.core.count(c__5568__auto__);
var G__19570 = (0);
seq__19486 = G__19567;
chunk__19487 = G__19568;
count__19488 = G__19569;
i__19489 = G__19570;
continue;
} else {
var node = cljs.core.first(seq__19486__$1);
goog.events.removeAll(node);


var G__19571 = cljs.core.next(seq__19486__$1);
var G__19572 = null;
var G__19573 = (0);
var G__19574 = (0);
seq__19486 = G__19571;
chunk__19487 = G__19572;
count__19488 = G__19573;
i__19489 = G__19574;
continue;
}
} else {
return null;
}
}
break;
}
}));

(domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name(type);
var seq__19490 = cljs.core.seq(domina.nodes(content));
var chunk__19491 = null;
var count__19492 = (0);
var i__19493 = (0);
while(true){
if((i__19493 < count__19492)){
var node = chunk__19491.cljs$core$IIndexed$_nth$arity$2(null,i__19493);
goog.events.removeAll(node,type__$1);


var G__19575 = seq__19490;
var G__19576 = chunk__19491;
var G__19577 = count__19492;
var G__19578 = (i__19493 + (1));
seq__19490 = G__19575;
chunk__19491 = G__19576;
count__19492 = G__19577;
i__19493 = G__19578;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19490);
if(temp__5804__auto__){
var seq__19490__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19490__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19490__$1);
var G__19579 = cljs.core.chunk_rest(seq__19490__$1);
var G__19580 = c__5568__auto__;
var G__19581 = cljs.core.count(c__5568__auto__);
var G__19582 = (0);
seq__19490 = G__19579;
chunk__19491 = G__19580;
count__19492 = G__19581;
i__19493 = G__19582;
continue;
} else {
var node = cljs.core.first(seq__19490__$1);
goog.events.removeAll(node,type__$1);


var G__19583 = cljs.core.next(seq__19490__$1);
var G__19584 = null;
var G__19585 = (0);
var G__19586 = (0);
seq__19490 = G__19583;
chunk__19491 = G__19584;
count__19492 = G__19585;
i__19493 = G__19586;
continue;
}
} else {
return null;
}
}
break;
}
}));

(domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(var_args){
var G__19495 = arguments.length;
switch (G__19495) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2(n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
}));

(domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__5802__auto__ = n.parentNode;
if(cljs.core.truth_(temp__5802__auto__)){
var parent = temp__5802__auto__;
var G__19588 = parent;
var G__19589 = cljs.core.cons(parent,so_far);
n = G__19588;
so_far = G__19589;
continue;
} else {
return so_far;
}
break;
}
}));

(domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2);

/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
(evt.target = domina.single_node(source));

var ancestors = domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1(domina.single_node(source));
var seq__19496_19590 = cljs.core.seq(ancestors);
var chunk__19497_19591 = null;
var count__19498_19592 = (0);
var i__19499_19593 = (0);
while(true){
if((i__19499_19593 < count__19498_19592)){
var n_19594 = chunk__19497_19591.cljs$core$IIndexed$_nth$arity$2(null,i__19499_19593);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_19594);

goog.events.fireListeners(n_19594,evt.type,true,evt);
}


var G__19595 = seq__19496_19590;
var G__19596 = chunk__19497_19591;
var G__19597 = count__19498_19592;
var G__19598 = (i__19499_19593 + (1));
seq__19496_19590 = G__19595;
chunk__19497_19591 = G__19596;
count__19498_19592 = G__19597;
i__19499_19593 = G__19598;
continue;
} else {
var temp__5804__auto___19599 = cljs.core.seq(seq__19496_19590);
if(temp__5804__auto___19599){
var seq__19496_19600__$1 = temp__5804__auto___19599;
if(cljs.core.chunked_seq_QMARK_(seq__19496_19600__$1)){
var c__5568__auto___19601 = cljs.core.chunk_first(seq__19496_19600__$1);
var G__19602 = cljs.core.chunk_rest(seq__19496_19600__$1);
var G__19603 = c__5568__auto___19601;
var G__19604 = cljs.core.count(c__5568__auto___19601);
var G__19605 = (0);
seq__19496_19590 = G__19602;
chunk__19497_19591 = G__19603;
count__19498_19592 = G__19604;
i__19499_19593 = G__19605;
continue;
} else {
var n_19606 = cljs.core.first(seq__19496_19600__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_19606);

goog.events.fireListeners(n_19606,evt.type,true,evt);
}


var G__19607 = cljs.core.next(seq__19496_19600__$1);
var G__19608 = null;
var G__19609 = (0);
var G__19610 = (0);
seq__19496_19590 = G__19607;
chunk__19497_19591 = G__19608;
count__19498_19592 = G__19609;
i__19499_19593 = G__19610;
continue;
}
} else {
}
}
break;
}

var seq__19500_19611 = cljs.core.seq(cljs.core.reverse(ancestors));
var chunk__19501_19612 = null;
var count__19502_19613 = (0);
var i__19503_19614 = (0);
while(true){
if((i__19503_19614 < count__19502_19613)){
var n_19615 = chunk__19501_19612.cljs$core$IIndexed$_nth$arity$2(null,i__19503_19614);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_19615);

goog.events.fireListeners(n_19615,evt.type,false,evt);
}


var G__19616 = seq__19500_19611;
var G__19617 = chunk__19501_19612;
var G__19618 = count__19502_19613;
var G__19619 = (i__19503_19614 + (1));
seq__19500_19611 = G__19616;
chunk__19501_19612 = G__19617;
count__19502_19613 = G__19618;
i__19503_19614 = G__19619;
continue;
} else {
var temp__5804__auto___19620 = cljs.core.seq(seq__19500_19611);
if(temp__5804__auto___19620){
var seq__19500_19621__$1 = temp__5804__auto___19620;
if(cljs.core.chunked_seq_QMARK_(seq__19500_19621__$1)){
var c__5568__auto___19622 = cljs.core.chunk_first(seq__19500_19621__$1);
var G__19623 = cljs.core.chunk_rest(seq__19500_19621__$1);
var G__19624 = c__5568__auto___19622;
var G__19625 = cljs.core.count(c__5568__auto___19622);
var G__19626 = (0);
seq__19500_19611 = G__19623;
chunk__19501_19612 = G__19624;
count__19502_19613 = G__19625;
i__19503_19614 = G__19626;
continue;
} else {
var n_19627 = cljs.core.first(seq__19500_19621__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
(evt.currentTarget = n_19627);

goog.events.fireListeners(n_19627,evt.type,false,evt);
}


var G__19628 = cljs.core.next(seq__19500_19621__$1);
var G__19629 = null;
var G__19630 = (0);
var G__19631 = (0);
seq__19500_19611 = G__19628;
chunk__19501_19612 = G__19629;
count__19502_19613 = G__19630;
i__19503_19614 = G__19631;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__5043__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__5043__auto__)){
return o.dispatchEvent;
} else {
return and__5043__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(var_args){
var G__19515 = arguments.length;
switch (G__19515) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3(domina.events.root_element,type,evt_map);
}));

(domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name(type)));
var seq__19520_19633 = cljs.core.seq(evt_map);
var chunk__19521_19634 = null;
var count__19522_19635 = (0);
var i__19523_19636 = (0);
while(true){
if((i__19523_19636 < count__19522_19635)){
var vec__19530_19637 = chunk__19521_19634.cljs$core$IIndexed$_nth$arity$2(null,i__19523_19636);
var k_19638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19530_19637,(0),null);
var v_19639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19530_19637,(1),null);
(evt[k_19638] = v_19639);


var G__19640 = seq__19520_19633;
var G__19641 = chunk__19521_19634;
var G__19642 = count__19522_19635;
var G__19643 = (i__19523_19636 + (1));
seq__19520_19633 = G__19640;
chunk__19521_19634 = G__19641;
count__19522_19635 = G__19642;
i__19523_19636 = G__19643;
continue;
} else {
var temp__5804__auto___19644 = cljs.core.seq(seq__19520_19633);
if(temp__5804__auto___19644){
var seq__19520_19645__$1 = temp__5804__auto___19644;
if(cljs.core.chunked_seq_QMARK_(seq__19520_19645__$1)){
var c__5568__auto___19646 = cljs.core.chunk_first(seq__19520_19645__$1);
var G__19647 = cljs.core.chunk_rest(seq__19520_19645__$1);
var G__19648 = c__5568__auto___19646;
var G__19649 = cljs.core.count(c__5568__auto___19646);
var G__19650 = (0);
seq__19520_19633 = G__19647;
chunk__19521_19634 = G__19648;
count__19522_19635 = G__19649;
i__19523_19636 = G__19650;
continue;
} else {
var vec__19533_19651 = cljs.core.first(seq__19520_19645__$1);
var k_19652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19533_19651,(0),null);
var v_19653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19533_19651,(1),null);
(evt[k_19652] = v_19653);


var G__19654 = cljs.core.next(seq__19520_19645__$1);
var G__19655 = null;
var G__19656 = (0);
var G__19657 = (0);
seq__19520_19633 = G__19654;
chunk__19521_19634 = G__19655;
count__19522_19635 = G__19656;
i__19523_19636 = G__19657;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_(source))){
return domina.events.dispatch_event_target_BANG_(source,evt);
} else {
return domina.events.dispatch_browser_BANG_(source,evt);
}
}));

(domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name(type);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__19536_SHARP_){
return goog.events.getListeners(p1__19536_SHARP_,type__$1,false);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([domina.nodes(content)], 0));
});

//# sourceMappingURL=domina.events.js.map
