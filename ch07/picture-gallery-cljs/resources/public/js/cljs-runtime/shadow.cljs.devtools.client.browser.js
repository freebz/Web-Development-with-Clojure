goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18334 = arguments.length;
var i__5770__auto___18335 = (0);
while(true){
if((i__5770__auto___18335 < len__5769__auto___18334)){
args__5775__auto__.push((arguments[i__5770__auto___18335]));

var G__18336 = (i__5770__auto___18335 + (1));
i__5770__auto___18335 = G__18336;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq17922){
var G__17923 = cljs.core.first(seq17922);
var seq17922__$1 = cljs.core.next(seq17922);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17923,seq17922__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__17924 = cljs.core.seq(sources);
var chunk__17925 = null;
var count__17926 = (0);
var i__17927 = (0);
while(true){
if((i__17927 < count__17926)){
var map__17932 = chunk__17925.cljs$core$IIndexed$_nth$arity$2(null,i__17927);
var map__17932__$1 = cljs.core.__destructure_map(map__17932);
var src = map__17932__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17932__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17933){var e_18343 = e17933;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18343);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18343.message)].join('')));
}

var G__18344 = seq__17924;
var G__18345 = chunk__17925;
var G__18346 = count__17926;
var G__18347 = (i__17927 + (1));
seq__17924 = G__18344;
chunk__17925 = G__18345;
count__17926 = G__18346;
i__17927 = G__18347;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17924);
if(temp__5804__auto__){
var seq__17924__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17924__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17924__$1);
var G__18348 = cljs.core.chunk_rest(seq__17924__$1);
var G__18349 = c__5568__auto__;
var G__18350 = cljs.core.count(c__5568__auto__);
var G__18351 = (0);
seq__17924 = G__18348;
chunk__17925 = G__18349;
count__17926 = G__18350;
i__17927 = G__18351;
continue;
} else {
var map__17934 = cljs.core.first(seq__17924__$1);
var map__17934__$1 = cljs.core.__destructure_map(map__17934);
var src = map__17934__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17934__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e17935){var e_18352 = e17935;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_18352);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18352.message)].join('')));
}

var G__18355 = cljs.core.next(seq__17924__$1);
var G__18356 = null;
var G__18357 = (0);
var G__18358 = (0);
seq__17924 = G__18355;
chunk__17925 = G__18356;
count__17926 = G__18357;
i__17927 = G__18358;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__17936 = cljs.core.seq(js_requires);
var chunk__17937 = null;
var count__17938 = (0);
var i__17939 = (0);
while(true){
if((i__17939 < count__17938)){
var js_ns = chunk__17937.cljs$core$IIndexed$_nth$arity$2(null,i__17939);
var require_str_18359 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18359);


var G__18360 = seq__17936;
var G__18361 = chunk__17937;
var G__18362 = count__17938;
var G__18363 = (i__17939 + (1));
seq__17936 = G__18360;
chunk__17937 = G__18361;
count__17938 = G__18362;
i__17939 = G__18363;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17936);
if(temp__5804__auto__){
var seq__17936__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17936__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17936__$1);
var G__18364 = cljs.core.chunk_rest(seq__17936__$1);
var G__18365 = c__5568__auto__;
var G__18366 = cljs.core.count(c__5568__auto__);
var G__18367 = (0);
seq__17936 = G__18364;
chunk__17937 = G__18365;
count__17938 = G__18366;
i__17939 = G__18367;
continue;
} else {
var js_ns = cljs.core.first(seq__17936__$1);
var require_str_18368 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_18368);


var G__18369 = cljs.core.next(seq__17936__$1);
var G__18370 = null;
var G__18371 = (0);
var G__18372 = (0);
seq__17936 = G__18369;
chunk__17937 = G__18370;
count__17938 = G__18371;
i__17939 = G__18372;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__17941){
var map__17942 = p__17941;
var map__17942__$1 = cljs.core.__destructure_map(map__17942);
var msg = map__17942__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17942__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943(s__17944){
return (new cljs.core.LazySeq(null,(function (){
var s__17944__$1 = s__17944;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__17944__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__17949 = cljs.core.first(xs__6360__auto__);
var map__17949__$1 = cljs.core.__destructure_map(map__17949);
var src = map__17949__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17949__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(s__17946){
return (new cljs.core.LazySeq(null,((function (s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info){
return (function (){
var s__17946__$1 = s__17946;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__17946__$1);
if(temp__5804__auto____$1){
var s__17946__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__17946__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__17946__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__17948 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__17947 = (0);
while(true){
if((i__17947 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__17947);
cljs.core.chunk_append(b__17948,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__18373 = (i__17947 + (1));
i__17947 = G__18373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17948),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(cljs.core.chunk_rest(s__17946__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17948),null);
}
} else {
var warning = cljs.core.first(s__17946__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943_$_iter__17945(cljs.core.rest(s__17946__$2)));
}
} else {
return null;
}
break;
}
});})(s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info))
,null,null));
});})(s__17944__$1,map__17949,map__17949__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__17942,map__17942__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__17943(cljs.core.rest(s__17944__$1)));
} else {
var G__18374 = cljs.core.rest(s__17944__$1);
s__17944__$1 = G__18374;
continue;
}
} else {
var G__18375 = cljs.core.rest(s__17944__$1);
s__17944__$1 = G__18375;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__17950_18376 = cljs.core.seq(warnings);
var chunk__17951_18377 = null;
var count__17952_18378 = (0);
var i__17953_18379 = (0);
while(true){
if((i__17953_18379 < count__17952_18378)){
var map__17956_18380 = chunk__17951_18377.cljs$core$IIndexed$_nth$arity$2(null,i__17953_18379);
var map__17956_18381__$1 = cljs.core.__destructure_map(map__17956_18380);
var w_18382 = map__17956_18381__$1;
var msg_18383__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18381__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18381__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18381__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17956_18381__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18386)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18384),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18385),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18383__$1)].join(''));


var G__18387 = seq__17950_18376;
var G__18388 = chunk__17951_18377;
var G__18389 = count__17952_18378;
var G__18390 = (i__17953_18379 + (1));
seq__17950_18376 = G__18387;
chunk__17951_18377 = G__18388;
count__17952_18378 = G__18389;
i__17953_18379 = G__18390;
continue;
} else {
var temp__5804__auto___18391 = cljs.core.seq(seq__17950_18376);
if(temp__5804__auto___18391){
var seq__17950_18392__$1 = temp__5804__auto___18391;
if(cljs.core.chunked_seq_QMARK_(seq__17950_18392__$1)){
var c__5568__auto___18393 = cljs.core.chunk_first(seq__17950_18392__$1);
var G__18394 = cljs.core.chunk_rest(seq__17950_18392__$1);
var G__18395 = c__5568__auto___18393;
var G__18396 = cljs.core.count(c__5568__auto___18393);
var G__18397 = (0);
seq__17950_18376 = G__18394;
chunk__17951_18377 = G__18395;
count__17952_18378 = G__18396;
i__17953_18379 = G__18397;
continue;
} else {
var map__17957_18398 = cljs.core.first(seq__17950_18392__$1);
var map__17957_18399__$1 = cljs.core.__destructure_map(map__17957_18398);
var w_18400 = map__17957_18399__$1;
var msg_18401__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18399__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_18402 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18399__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18403 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18399__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_18404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17957_18399__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_18404)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18402),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_18403),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_18401__$1)].join(''));


var G__18409 = cljs.core.next(seq__17950_18392__$1);
var G__18410 = null;
var G__18411 = (0);
var G__18412 = (0);
seq__17950_18376 = G__18409;
chunk__17951_18377 = G__18410;
count__17952_18378 = G__18411;
i__17953_18379 = G__18412;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__17940_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__17940_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__17973){
var map__17974 = p__17973;
var map__17974__$1 = cljs.core.__destructure_map(map__17974);
var msg = map__17974__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__17975 = cljs.core.seq(updates);
var chunk__17977 = null;
var count__17978 = (0);
var i__17979 = (0);
while(true){
if((i__17979 < count__17978)){
var path = chunk__17977.cljs$core$IIndexed$_nth$arity$2(null,i__17979);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18143_18413 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18147_18414 = null;
var count__18148_18415 = (0);
var i__18149_18416 = (0);
while(true){
if((i__18149_18416 < count__18148_18415)){
var node_18417 = chunk__18147_18414.cljs$core$IIndexed$_nth$arity$2(null,i__18149_18416);
if(cljs.core.not(node_18417.shadow$old)){
var path_match_18418 = shadow.cljs.devtools.client.browser.match_paths(node_18417.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18418)){
var new_link_18419 = (function (){var G__18211 = node_18417.cloneNode(true);
G__18211.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18418),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18211;
})();
(node_18417.shadow$old = true);

(new_link_18419.onload = ((function (seq__18143_18413,chunk__18147_18414,count__18148_18415,i__18149_18416,seq__17975,chunk__17977,count__17978,i__17979,new_link_18419,path_match_18418,node_18417,path,map__17974,map__17974__$1,msg,updates,reload_info){
return (function (e){
var seq__18212_18420 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18214_18421 = null;
var count__18215_18422 = (0);
var i__18216_18423 = (0);
while(true){
if((i__18216_18423 < count__18215_18422)){
var map__18224_18424 = chunk__18214_18421.cljs$core$IIndexed$_nth$arity$2(null,i__18216_18423);
var map__18224_18425__$1 = cljs.core.__destructure_map(map__18224_18424);
var task_18426 = map__18224_18425__$1;
var fn_str_18427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18224_18425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18224_18425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18429 = goog.getObjectByName(fn_str_18427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18428)].join(''));

(fn_obj_18429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18429.cljs$core$IFn$_invoke$arity$2(path,new_link_18419) : fn_obj_18429.call(null,path,new_link_18419));


var G__18430 = seq__18212_18420;
var G__18431 = chunk__18214_18421;
var G__18432 = count__18215_18422;
var G__18433 = (i__18216_18423 + (1));
seq__18212_18420 = G__18430;
chunk__18214_18421 = G__18431;
count__18215_18422 = G__18432;
i__18216_18423 = G__18433;
continue;
} else {
var temp__5804__auto___18434 = cljs.core.seq(seq__18212_18420);
if(temp__5804__auto___18434){
var seq__18212_18436__$1 = temp__5804__auto___18434;
if(cljs.core.chunked_seq_QMARK_(seq__18212_18436__$1)){
var c__5568__auto___18437 = cljs.core.chunk_first(seq__18212_18436__$1);
var G__18438 = cljs.core.chunk_rest(seq__18212_18436__$1);
var G__18439 = c__5568__auto___18437;
var G__18440 = cljs.core.count(c__5568__auto___18437);
var G__18441 = (0);
seq__18212_18420 = G__18438;
chunk__18214_18421 = G__18439;
count__18215_18422 = G__18440;
i__18216_18423 = G__18441;
continue;
} else {
var map__18225_18442 = cljs.core.first(seq__18212_18436__$1);
var map__18225_18443__$1 = cljs.core.__destructure_map(map__18225_18442);
var task_18444 = map__18225_18443__$1;
var fn_str_18445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225_18443__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18225_18443__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18447 = goog.getObjectByName(fn_str_18445,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18446)].join(''));

(fn_obj_18447.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18447.cljs$core$IFn$_invoke$arity$2(path,new_link_18419) : fn_obj_18447.call(null,path,new_link_18419));


var G__18448 = cljs.core.next(seq__18212_18436__$1);
var G__18449 = null;
var G__18450 = (0);
var G__18451 = (0);
seq__18212_18420 = G__18448;
chunk__18214_18421 = G__18449;
count__18215_18422 = G__18450;
i__18216_18423 = G__18451;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18417);
});})(seq__18143_18413,chunk__18147_18414,count__18148_18415,i__18149_18416,seq__17975,chunk__17977,count__17978,i__17979,new_link_18419,path_match_18418,node_18417,path,map__17974,map__17974__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18418], 0));

goog.dom.insertSiblingAfter(new_link_18419,node_18417);


var G__18452 = seq__18143_18413;
var G__18453 = chunk__18147_18414;
var G__18454 = count__18148_18415;
var G__18455 = (i__18149_18416 + (1));
seq__18143_18413 = G__18452;
chunk__18147_18414 = G__18453;
count__18148_18415 = G__18454;
i__18149_18416 = G__18455;
continue;
} else {
var G__18456 = seq__18143_18413;
var G__18457 = chunk__18147_18414;
var G__18458 = count__18148_18415;
var G__18459 = (i__18149_18416 + (1));
seq__18143_18413 = G__18456;
chunk__18147_18414 = G__18457;
count__18148_18415 = G__18458;
i__18149_18416 = G__18459;
continue;
}
} else {
var G__18460 = seq__18143_18413;
var G__18461 = chunk__18147_18414;
var G__18462 = count__18148_18415;
var G__18463 = (i__18149_18416 + (1));
seq__18143_18413 = G__18460;
chunk__18147_18414 = G__18461;
count__18148_18415 = G__18462;
i__18149_18416 = G__18463;
continue;
}
} else {
var temp__5804__auto___18464 = cljs.core.seq(seq__18143_18413);
if(temp__5804__auto___18464){
var seq__18143_18465__$1 = temp__5804__auto___18464;
if(cljs.core.chunked_seq_QMARK_(seq__18143_18465__$1)){
var c__5568__auto___18466 = cljs.core.chunk_first(seq__18143_18465__$1);
var G__18467 = cljs.core.chunk_rest(seq__18143_18465__$1);
var G__18468 = c__5568__auto___18466;
var G__18469 = cljs.core.count(c__5568__auto___18466);
var G__18470 = (0);
seq__18143_18413 = G__18467;
chunk__18147_18414 = G__18468;
count__18148_18415 = G__18469;
i__18149_18416 = G__18470;
continue;
} else {
var node_18471 = cljs.core.first(seq__18143_18465__$1);
if(cljs.core.not(node_18471.shadow$old)){
var path_match_18472 = shadow.cljs.devtools.client.browser.match_paths(node_18471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18472)){
var new_link_18473 = (function (){var G__18226 = node_18471.cloneNode(true);
G__18226.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18472),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18226;
})();
(node_18471.shadow$old = true);

(new_link_18473.onload = ((function (seq__18143_18413,chunk__18147_18414,count__18148_18415,i__18149_18416,seq__17975,chunk__17977,count__17978,i__17979,new_link_18473,path_match_18472,node_18471,seq__18143_18465__$1,temp__5804__auto___18464,path,map__17974,map__17974__$1,msg,updates,reload_info){
return (function (e){
var seq__18227_18474 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18229_18475 = null;
var count__18230_18476 = (0);
var i__18231_18477 = (0);
while(true){
if((i__18231_18477 < count__18230_18476)){
var map__18239_18478 = chunk__18229_18475.cljs$core$IIndexed$_nth$arity$2(null,i__18231_18477);
var map__18239_18479__$1 = cljs.core.__destructure_map(map__18239_18478);
var task_18480 = map__18239_18479__$1;
var fn_str_18481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18239_18479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18239_18479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18483 = goog.getObjectByName(fn_str_18481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18482)].join(''));

(fn_obj_18483.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18483.cljs$core$IFn$_invoke$arity$2(path,new_link_18473) : fn_obj_18483.call(null,path,new_link_18473));


var G__18484 = seq__18227_18474;
var G__18485 = chunk__18229_18475;
var G__18486 = count__18230_18476;
var G__18487 = (i__18231_18477 + (1));
seq__18227_18474 = G__18484;
chunk__18229_18475 = G__18485;
count__18230_18476 = G__18486;
i__18231_18477 = G__18487;
continue;
} else {
var temp__5804__auto___18488__$1 = cljs.core.seq(seq__18227_18474);
if(temp__5804__auto___18488__$1){
var seq__18227_18489__$1 = temp__5804__auto___18488__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18227_18489__$1)){
var c__5568__auto___18490 = cljs.core.chunk_first(seq__18227_18489__$1);
var G__18491 = cljs.core.chunk_rest(seq__18227_18489__$1);
var G__18492 = c__5568__auto___18490;
var G__18493 = cljs.core.count(c__5568__auto___18490);
var G__18494 = (0);
seq__18227_18474 = G__18491;
chunk__18229_18475 = G__18492;
count__18230_18476 = G__18493;
i__18231_18477 = G__18494;
continue;
} else {
var map__18240_18495 = cljs.core.first(seq__18227_18489__$1);
var map__18240_18496__$1 = cljs.core.__destructure_map(map__18240_18495);
var task_18497 = map__18240_18496__$1;
var fn_str_18498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18240_18496__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18240_18496__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18500 = goog.getObjectByName(fn_str_18498,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18499)].join(''));

(fn_obj_18500.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18500.cljs$core$IFn$_invoke$arity$2(path,new_link_18473) : fn_obj_18500.call(null,path,new_link_18473));


var G__18501 = cljs.core.next(seq__18227_18489__$1);
var G__18502 = null;
var G__18503 = (0);
var G__18504 = (0);
seq__18227_18474 = G__18501;
chunk__18229_18475 = G__18502;
count__18230_18476 = G__18503;
i__18231_18477 = G__18504;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18471);
});})(seq__18143_18413,chunk__18147_18414,count__18148_18415,i__18149_18416,seq__17975,chunk__17977,count__17978,i__17979,new_link_18473,path_match_18472,node_18471,seq__18143_18465__$1,temp__5804__auto___18464,path,map__17974,map__17974__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18472], 0));

goog.dom.insertSiblingAfter(new_link_18473,node_18471);


var G__18505 = cljs.core.next(seq__18143_18465__$1);
var G__18506 = null;
var G__18507 = (0);
var G__18508 = (0);
seq__18143_18413 = G__18505;
chunk__18147_18414 = G__18506;
count__18148_18415 = G__18507;
i__18149_18416 = G__18508;
continue;
} else {
var G__18509 = cljs.core.next(seq__18143_18465__$1);
var G__18510 = null;
var G__18511 = (0);
var G__18512 = (0);
seq__18143_18413 = G__18509;
chunk__18147_18414 = G__18510;
count__18148_18415 = G__18511;
i__18149_18416 = G__18512;
continue;
}
} else {
var G__18513 = cljs.core.next(seq__18143_18465__$1);
var G__18514 = null;
var G__18515 = (0);
var G__18516 = (0);
seq__18143_18413 = G__18513;
chunk__18147_18414 = G__18514;
count__18148_18415 = G__18515;
i__18149_18416 = G__18516;
continue;
}
}
} else {
}
}
break;
}


var G__18517 = seq__17975;
var G__18518 = chunk__17977;
var G__18519 = count__17978;
var G__18520 = (i__17979 + (1));
seq__17975 = G__18517;
chunk__17977 = G__18518;
count__17978 = G__18519;
i__17979 = G__18520;
continue;
} else {
var G__18521 = seq__17975;
var G__18522 = chunk__17977;
var G__18523 = count__17978;
var G__18524 = (i__17979 + (1));
seq__17975 = G__18521;
chunk__17977 = G__18522;
count__17978 = G__18523;
i__17979 = G__18524;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17975);
if(temp__5804__auto__){
var seq__17975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17975__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17975__$1);
var G__18525 = cljs.core.chunk_rest(seq__17975__$1);
var G__18526 = c__5568__auto__;
var G__18527 = cljs.core.count(c__5568__auto__);
var G__18528 = (0);
seq__17975 = G__18525;
chunk__17977 = G__18526;
count__17978 = G__18527;
i__17979 = G__18528;
continue;
} else {
var path = cljs.core.first(seq__17975__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__18241_18529 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__18245_18530 = null;
var count__18246_18531 = (0);
var i__18247_18532 = (0);
while(true){
if((i__18247_18532 < count__18246_18531)){
var node_18533 = chunk__18245_18530.cljs$core$IIndexed$_nth$arity$2(null,i__18247_18532);
if(cljs.core.not(node_18533.shadow$old)){
var path_match_18534 = shadow.cljs.devtools.client.browser.match_paths(node_18533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18534)){
var new_link_18535 = (function (){var G__18281 = node_18533.cloneNode(true);
G__18281.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18281;
})();
(node_18533.shadow$old = true);

(new_link_18535.onload = ((function (seq__18241_18529,chunk__18245_18530,count__18246_18531,i__18247_18532,seq__17975,chunk__17977,count__17978,i__17979,new_link_18535,path_match_18534,node_18533,path,seq__17975__$1,temp__5804__auto__,map__17974,map__17974__$1,msg,updates,reload_info){
return (function (e){
var seq__18282_18536 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18284_18537 = null;
var count__18285_18538 = (0);
var i__18286_18539 = (0);
while(true){
if((i__18286_18539 < count__18285_18538)){
var map__18290_18540 = chunk__18284_18537.cljs$core$IIndexed$_nth$arity$2(null,i__18286_18539);
var map__18290_18541__$1 = cljs.core.__destructure_map(map__18290_18540);
var task_18542 = map__18290_18541__$1;
var fn_str_18543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290_18541__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18290_18541__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18545 = goog.getObjectByName(fn_str_18543,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18544)].join(''));

(fn_obj_18545.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18545.cljs$core$IFn$_invoke$arity$2(path,new_link_18535) : fn_obj_18545.call(null,path,new_link_18535));


var G__18546 = seq__18282_18536;
var G__18547 = chunk__18284_18537;
var G__18548 = count__18285_18538;
var G__18549 = (i__18286_18539 + (1));
seq__18282_18536 = G__18546;
chunk__18284_18537 = G__18547;
count__18285_18538 = G__18548;
i__18286_18539 = G__18549;
continue;
} else {
var temp__5804__auto___18550__$1 = cljs.core.seq(seq__18282_18536);
if(temp__5804__auto___18550__$1){
var seq__18282_18551__$1 = temp__5804__auto___18550__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18282_18551__$1)){
var c__5568__auto___18552 = cljs.core.chunk_first(seq__18282_18551__$1);
var G__18553 = cljs.core.chunk_rest(seq__18282_18551__$1);
var G__18554 = c__5568__auto___18552;
var G__18555 = cljs.core.count(c__5568__auto___18552);
var G__18556 = (0);
seq__18282_18536 = G__18553;
chunk__18284_18537 = G__18554;
count__18285_18538 = G__18555;
i__18286_18539 = G__18556;
continue;
} else {
var map__18291_18557 = cljs.core.first(seq__18282_18551__$1);
var map__18291_18558__$1 = cljs.core.__destructure_map(map__18291_18557);
var task_18559 = map__18291_18558__$1;
var fn_str_18560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18291_18558__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18291_18558__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18562 = goog.getObjectByName(fn_str_18560,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18561)].join(''));

(fn_obj_18562.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18562.cljs$core$IFn$_invoke$arity$2(path,new_link_18535) : fn_obj_18562.call(null,path,new_link_18535));


var G__18563 = cljs.core.next(seq__18282_18551__$1);
var G__18564 = null;
var G__18565 = (0);
var G__18566 = (0);
seq__18282_18536 = G__18563;
chunk__18284_18537 = G__18564;
count__18285_18538 = G__18565;
i__18286_18539 = G__18566;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18533);
});})(seq__18241_18529,chunk__18245_18530,count__18246_18531,i__18247_18532,seq__17975,chunk__17977,count__17978,i__17979,new_link_18535,path_match_18534,node_18533,path,seq__17975__$1,temp__5804__auto__,map__17974,map__17974__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18534], 0));

goog.dom.insertSiblingAfter(new_link_18535,node_18533);


var G__18567 = seq__18241_18529;
var G__18568 = chunk__18245_18530;
var G__18569 = count__18246_18531;
var G__18570 = (i__18247_18532 + (1));
seq__18241_18529 = G__18567;
chunk__18245_18530 = G__18568;
count__18246_18531 = G__18569;
i__18247_18532 = G__18570;
continue;
} else {
var G__18571 = seq__18241_18529;
var G__18572 = chunk__18245_18530;
var G__18573 = count__18246_18531;
var G__18574 = (i__18247_18532 + (1));
seq__18241_18529 = G__18571;
chunk__18245_18530 = G__18572;
count__18246_18531 = G__18573;
i__18247_18532 = G__18574;
continue;
}
} else {
var G__18575 = seq__18241_18529;
var G__18576 = chunk__18245_18530;
var G__18577 = count__18246_18531;
var G__18578 = (i__18247_18532 + (1));
seq__18241_18529 = G__18575;
chunk__18245_18530 = G__18576;
count__18246_18531 = G__18577;
i__18247_18532 = G__18578;
continue;
}
} else {
var temp__5804__auto___18579__$1 = cljs.core.seq(seq__18241_18529);
if(temp__5804__auto___18579__$1){
var seq__18241_18580__$1 = temp__5804__auto___18579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18241_18580__$1)){
var c__5568__auto___18581 = cljs.core.chunk_first(seq__18241_18580__$1);
var G__18582 = cljs.core.chunk_rest(seq__18241_18580__$1);
var G__18583 = c__5568__auto___18581;
var G__18584 = cljs.core.count(c__5568__auto___18581);
var G__18585 = (0);
seq__18241_18529 = G__18582;
chunk__18245_18530 = G__18583;
count__18246_18531 = G__18584;
i__18247_18532 = G__18585;
continue;
} else {
var node_18586 = cljs.core.first(seq__18241_18580__$1);
if(cljs.core.not(node_18586.shadow$old)){
var path_match_18587 = shadow.cljs.devtools.client.browser.match_paths(node_18586.getAttribute("href"),path);
if(cljs.core.truth_(path_match_18587)){
var new_link_18588 = (function (){var G__18292 = node_18586.cloneNode(true);
G__18292.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_18587),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__18292;
})();
(node_18586.shadow$old = true);

(new_link_18588.onload = ((function (seq__18241_18529,chunk__18245_18530,count__18246_18531,i__18247_18532,seq__17975,chunk__17977,count__17978,i__17979,new_link_18588,path_match_18587,node_18586,seq__18241_18580__$1,temp__5804__auto___18579__$1,path,seq__17975__$1,temp__5804__auto__,map__17974,map__17974__$1,msg,updates,reload_info){
return (function (e){
var seq__18293_18589 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__18295_18590 = null;
var count__18296_18591 = (0);
var i__18297_18592 = (0);
while(true){
if((i__18297_18592 < count__18296_18591)){
var map__18305_18595 = chunk__18295_18590.cljs$core$IIndexed$_nth$arity$2(null,i__18297_18592);
var map__18305_18596__$1 = cljs.core.__destructure_map(map__18305_18595);
var task_18597 = map__18305_18596__$1;
var fn_str_18598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18305_18596__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18305_18596__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18600 = goog.getObjectByName(fn_str_18598,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18599)].join(''));

(fn_obj_18600.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18600.cljs$core$IFn$_invoke$arity$2(path,new_link_18588) : fn_obj_18600.call(null,path,new_link_18588));


var G__18601 = seq__18293_18589;
var G__18602 = chunk__18295_18590;
var G__18603 = count__18296_18591;
var G__18604 = (i__18297_18592 + (1));
seq__18293_18589 = G__18601;
chunk__18295_18590 = G__18602;
count__18296_18591 = G__18603;
i__18297_18592 = G__18604;
continue;
} else {
var temp__5804__auto___18605__$2 = cljs.core.seq(seq__18293_18589);
if(temp__5804__auto___18605__$2){
var seq__18293_18606__$1 = temp__5804__auto___18605__$2;
if(cljs.core.chunked_seq_QMARK_(seq__18293_18606__$1)){
var c__5568__auto___18607 = cljs.core.chunk_first(seq__18293_18606__$1);
var G__18608 = cljs.core.chunk_rest(seq__18293_18606__$1);
var G__18609 = c__5568__auto___18607;
var G__18610 = cljs.core.count(c__5568__auto___18607);
var G__18611 = (0);
seq__18293_18589 = G__18608;
chunk__18295_18590 = G__18609;
count__18296_18591 = G__18610;
i__18297_18592 = G__18611;
continue;
} else {
var map__18306_18612 = cljs.core.first(seq__18293_18606__$1);
var map__18306_18613__$1 = cljs.core.__destructure_map(map__18306_18612);
var task_18614 = map__18306_18613__$1;
var fn_str_18615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306_18613__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_18616 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306_18613__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_18617 = goog.getObjectByName(fn_str_18615,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_18616)].join(''));

(fn_obj_18617.cljs$core$IFn$_invoke$arity$2 ? fn_obj_18617.cljs$core$IFn$_invoke$arity$2(path,new_link_18588) : fn_obj_18617.call(null,path,new_link_18588));


var G__18618 = cljs.core.next(seq__18293_18606__$1);
var G__18619 = null;
var G__18620 = (0);
var G__18621 = (0);
seq__18293_18589 = G__18618;
chunk__18295_18590 = G__18619;
count__18296_18591 = G__18620;
i__18297_18592 = G__18621;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_18586);
});})(seq__18241_18529,chunk__18245_18530,count__18246_18531,i__18247_18532,seq__17975,chunk__17977,count__17978,i__17979,new_link_18588,path_match_18587,node_18586,seq__18241_18580__$1,temp__5804__auto___18579__$1,path,seq__17975__$1,temp__5804__auto__,map__17974,map__17974__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_18587], 0));

goog.dom.insertSiblingAfter(new_link_18588,node_18586);


var G__18622 = cljs.core.next(seq__18241_18580__$1);
var G__18623 = null;
var G__18624 = (0);
var G__18625 = (0);
seq__18241_18529 = G__18622;
chunk__18245_18530 = G__18623;
count__18246_18531 = G__18624;
i__18247_18532 = G__18625;
continue;
} else {
var G__18626 = cljs.core.next(seq__18241_18580__$1);
var G__18627 = null;
var G__18628 = (0);
var G__18629 = (0);
seq__18241_18529 = G__18626;
chunk__18245_18530 = G__18627;
count__18246_18531 = G__18628;
i__18247_18532 = G__18629;
continue;
}
} else {
var G__18630 = cljs.core.next(seq__18241_18580__$1);
var G__18631 = null;
var G__18632 = (0);
var G__18633 = (0);
seq__18241_18529 = G__18630;
chunk__18245_18530 = G__18631;
count__18246_18531 = G__18632;
i__18247_18532 = G__18633;
continue;
}
}
} else {
}
}
break;
}


var G__18634 = cljs.core.next(seq__17975__$1);
var G__18635 = null;
var G__18636 = (0);
var G__18637 = (0);
seq__17975 = G__18634;
chunk__17977 = G__18635;
count__17978 = G__18636;
i__17979 = G__18637;
continue;
} else {
var G__18638 = cljs.core.next(seq__17975__$1);
var G__18639 = null;
var G__18640 = (0);
var G__18641 = (0);
seq__17975 = G__18638;
chunk__17977 = G__18639;
count__17978 = G__18640;
i__17979 = G__18641;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__18307){
var map__18308 = p__18307;
var map__18308__$1 = cljs.core.__destructure_map(map__18308);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18308__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__18314){
var map__18315 = p__18314;
var map__18315__$1 = cljs.core.__destructure_map(map__18315);
var _ = map__18315__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18315__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__18316,done,error){
var map__18317 = p__18316;
var map__18317__$1 = cljs.core.__destructure_map(map__18317);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18317__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__18318,done,error){
var map__18319 = p__18318;
var map__18319__$1 = cljs.core.__destructure_map(map__18319);
var msg = map__18319__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18319__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18319__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__18320){
var map__18321 = p__18320;
var map__18321__$1 = cljs.core.__destructure_map(map__18321);
var src = map__18321__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18321__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__18322 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__18322) : done.call(null,G__18322));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__18323){
var map__18324 = p__18323;
var map__18324__$1 = cljs.core.__destructure_map(map__18324);
var msg__$1 = map__18324__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18324__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e18325){var ex = e18325;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__18326){
var map__18327 = p__18326;
var map__18327__$1 = cljs.core.__destructure_map(map__18327);
var env = map__18327__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18327__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__18330){
var map__18331 = p__18330;
var map__18331__$1 = cljs.core.__destructure_map(map__18331);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18331__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__18332){
var map__18333 = p__18332;
var map__18333__$1 = cljs.core.__destructure_map(map__18333);
var svc = map__18333__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18333__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
