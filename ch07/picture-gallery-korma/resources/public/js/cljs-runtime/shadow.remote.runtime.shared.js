goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__16371,res){
var map__16372 = p__16371;
var map__16372__$1 = cljs.core.__destructure_map(map__16372);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16372__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16372__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__16373 = res;
var G__16373__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16373,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__16373);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16373__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__16373__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__16375 = arguments.length;
switch (G__16375) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__16376,msg,handlers,timeout_after_ms){
var map__16377 = p__16376;
var map__16377__$1 = cljs.core.__destructure_map(map__16377);
var runtime = map__16377__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16377__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16453 = arguments.length;
var i__5770__auto___16454 = (0);
while(true){
if((i__5770__auto___16454 < len__5769__auto___16453)){
args__5775__auto__.push((arguments[i__5770__auto___16454]));

var G__16456 = (i__5770__auto___16454 + (1));
i__5770__auto___16454 = G__16456;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__16381,ev,args){
var map__16382 = p__16381;
var map__16382__$1 = cljs.core.__destructure_map(map__16382);
var runtime = map__16382__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16382__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__16383 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16386 = null;
var count__16387 = (0);
var i__16388 = (0);
while(true){
if((i__16388 < count__16387)){
var ext = chunk__16386.cljs$core$IIndexed$_nth$arity$2(null,i__16388);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16457 = seq__16383;
var G__16458 = chunk__16386;
var G__16459 = count__16387;
var G__16460 = (i__16388 + (1));
seq__16383 = G__16457;
chunk__16386 = G__16458;
count__16387 = G__16459;
i__16388 = G__16460;
continue;
} else {
var G__16461 = seq__16383;
var G__16462 = chunk__16386;
var G__16463 = count__16387;
var G__16464 = (i__16388 + (1));
seq__16383 = G__16461;
chunk__16386 = G__16462;
count__16387 = G__16463;
i__16388 = G__16464;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16383);
if(temp__5804__auto__){
var seq__16383__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16383__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16383__$1);
var G__16465 = cljs.core.chunk_rest(seq__16383__$1);
var G__16466 = c__5568__auto__;
var G__16467 = cljs.core.count(c__5568__auto__);
var G__16468 = (0);
seq__16383 = G__16465;
chunk__16386 = G__16466;
count__16387 = G__16467;
i__16388 = G__16468;
continue;
} else {
var ext = cljs.core.first(seq__16383__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16469 = cljs.core.next(seq__16383__$1);
var G__16470 = null;
var G__16471 = (0);
var G__16472 = (0);
seq__16383 = G__16469;
chunk__16386 = G__16470;
count__16387 = G__16471;
i__16388 = G__16472;
continue;
} else {
var G__16473 = cljs.core.next(seq__16383__$1);
var G__16474 = null;
var G__16475 = (0);
var G__16476 = (0);
seq__16383 = G__16473;
chunk__16386 = G__16474;
count__16387 = G__16475;
i__16388 = G__16476;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq16378){
var G__16379 = cljs.core.first(seq16378);
var seq16378__$1 = cljs.core.next(seq16378);
var G__16380 = cljs.core.first(seq16378__$1);
var seq16378__$2 = cljs.core.next(seq16378__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16379,G__16380,seq16378__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__16392,p__16393){
var map__16394 = p__16392;
var map__16394__$1 = cljs.core.__destructure_map(map__16394);
var runtime = map__16394__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16394__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16395 = p__16393;
var map__16395__$1 = cljs.core.__destructure_map(map__16395);
var msg = map__16395__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16395__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__16396 = cljs.core.deref(state_ref);
var map__16396__$1 = cljs.core.__destructure_map(map__16396);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16396__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__16397){
var map__16398 = p__16397;
var map__16398__$1 = cljs.core.__destructure_map(map__16398);
var runtime = map__16398__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16398__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__16407,msg){
var map__16408 = p__16407;
var map__16408__$1 = cljs.core.__destructure_map(map__16408);
var runtime = map__16408__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16408__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16416,key,p__16417){
var map__16418 = p__16416;
var map__16418__$1 = cljs.core.__destructure_map(map__16418);
var state = map__16418__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16418__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16419 = p__16417;
var map__16419__$1 = cljs.core.__destructure_map(map__16419);
var spec = map__16419__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16419__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16420,key,spec){
var map__16421 = p__16420;
var map__16421__$1 = cljs.core.__destructure_map(map__16421);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16421__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16422_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16422_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16423_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16423_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16424_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16424_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16425_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16425_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16426_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16426_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16427,key){
var map__16428 = p__16427;
var map__16428__$1 = cljs.core.__destructure_map(map__16428);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16428__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16429,msg){
var map__16430 = p__16429;
var map__16430__$1 = cljs.core.__destructure_map(map__16430);
var runtime = map__16430__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16430__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16431,p__16432){
var map__16433 = p__16431;
var map__16433__$1 = cljs.core.__destructure_map(map__16433);
var runtime = map__16433__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16434 = p__16432;
var map__16434__$1 = cljs.core.__destructure_map(map__16434);
var msg = map__16434__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16437 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16439 = null;
var count__16440 = (0);
var i__16441 = (0);
while(true){
if((i__16441 < count__16440)){
var map__16445 = chunk__16439.cljs$core$IIndexed$_nth$arity$2(null,i__16441);
var map__16445__$1 = cljs.core.__destructure_map(map__16445);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16445__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16485 = seq__16437;
var G__16486 = chunk__16439;
var G__16487 = count__16440;
var G__16488 = (i__16441 + (1));
seq__16437 = G__16485;
chunk__16439 = G__16486;
count__16440 = G__16487;
i__16441 = G__16488;
continue;
} else {
var G__16489 = seq__16437;
var G__16490 = chunk__16439;
var G__16491 = count__16440;
var G__16492 = (i__16441 + (1));
seq__16437 = G__16489;
chunk__16439 = G__16490;
count__16440 = G__16491;
i__16441 = G__16492;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16437);
if(temp__5804__auto__){
var seq__16437__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16437__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16437__$1);
var G__16493 = cljs.core.chunk_rest(seq__16437__$1);
var G__16494 = c__5568__auto__;
var G__16495 = cljs.core.count(c__5568__auto__);
var G__16496 = (0);
seq__16437 = G__16493;
chunk__16439 = G__16494;
count__16440 = G__16495;
i__16441 = G__16496;
continue;
} else {
var map__16450 = cljs.core.first(seq__16437__$1);
var map__16450__$1 = cljs.core.__destructure_map(map__16450);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16497 = cljs.core.next(seq__16437__$1);
var G__16498 = null;
var G__16499 = (0);
var G__16500 = (0);
seq__16437 = G__16497;
chunk__16439 = G__16498;
count__16440 = G__16499;
i__16441 = G__16500;
continue;
} else {
var G__16501 = cljs.core.next(seq__16437__$1);
var G__16502 = null;
var G__16503 = (0);
var G__16504 = (0);
seq__16437 = G__16501;
chunk__16439 = G__16502;
count__16440 = G__16503;
i__16441 = G__16504;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
