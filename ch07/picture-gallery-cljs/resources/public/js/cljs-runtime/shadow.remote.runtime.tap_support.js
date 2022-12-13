goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__17694,p__17695){
var map__17696 = p__17694;
var map__17696__$1 = cljs.core.__destructure_map(map__17696);
var svc = map__17696__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17696__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17696__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17696__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17697 = p__17695;
var map__17697__$1 = cljs.core.__destructure_map(map__17697);
var msg = map__17697__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17697__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17697__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17697__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17697__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__17706,p__17707){
var map__17708 = p__17706;
var map__17708__$1 = cljs.core.__destructure_map(map__17708);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17708__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__17709 = p__17707;
var map__17709__$1 = cljs.core.__destructure_map(map__17709);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17709__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__17712,p__17713){
var map__17714 = p__17712;
var map__17714__$1 = cljs.core.__destructure_map(map__17714);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17714__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17714__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__17715 = p__17713;
var map__17715__$1 = cljs.core.__destructure_map(map__17715);
var msg = map__17715__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17715__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__17722,tid){
var map__17723 = p__17722;
var map__17723__$1 = cljs.core.__destructure_map(map__17723);
var svc = map__17723__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17723__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__17730 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__17731 = null;
var count__17732 = (0);
var i__17733 = (0);
while(true){
if((i__17733 < count__17732)){
var vec__17743 = chunk__17731.cljs$core$IIndexed$_nth$arity$2(null,i__17733);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17743,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17751 = seq__17730;
var G__17752 = chunk__17731;
var G__17753 = count__17732;
var G__17754 = (i__17733 + (1));
seq__17730 = G__17751;
chunk__17731 = G__17752;
count__17732 = G__17753;
i__17733 = G__17754;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17730);
if(temp__5804__auto__){
var seq__17730__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17730__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17730__$1);
var G__17755 = cljs.core.chunk_rest(seq__17730__$1);
var G__17756 = c__5568__auto__;
var G__17757 = cljs.core.count(c__5568__auto__);
var G__17758 = (0);
seq__17730 = G__17755;
chunk__17731 = G__17756;
count__17732 = G__17757;
i__17733 = G__17758;
continue;
} else {
var vec__17746 = cljs.core.first(seq__17730__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__17759 = cljs.core.next(seq__17730__$1);
var G__17760 = null;
var G__17761 = (0);
var G__17762 = (0);
seq__17730 = G__17759;
chunk__17731 = G__17760;
count__17732 = G__17761;
i__17733 = G__17762;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__17726_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__17726_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__17727_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__17727_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__17728_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__17728_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__17729_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__17729_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__17749){
var map__17750 = p__17749;
var map__17750__$1 = cljs.core.__destructure_map(map__17750);
var svc = map__17750__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
