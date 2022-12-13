goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17238){
var map__17239 = p__17238;
var map__17239__$1 = cljs.core.__destructure_map(map__17239);
var m = map__17239__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17239__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17240_17459 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17241_17460 = null;
var count__17242_17461 = (0);
var i__17243_17462 = (0);
while(true){
if((i__17243_17462 < count__17242_17461)){
var f_17463 = chunk__17241_17460.cljs$core$IIndexed$_nth$arity$2(null,i__17243_17462);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17463], 0));


var G__17464 = seq__17240_17459;
var G__17465 = chunk__17241_17460;
var G__17466 = count__17242_17461;
var G__17467 = (i__17243_17462 + (1));
seq__17240_17459 = G__17464;
chunk__17241_17460 = G__17465;
count__17242_17461 = G__17466;
i__17243_17462 = G__17467;
continue;
} else {
var temp__5804__auto___17468 = cljs.core.seq(seq__17240_17459);
if(temp__5804__auto___17468){
var seq__17240_17469__$1 = temp__5804__auto___17468;
if(cljs.core.chunked_seq_QMARK_(seq__17240_17469__$1)){
var c__5568__auto___17470 = cljs.core.chunk_first(seq__17240_17469__$1);
var G__17471 = cljs.core.chunk_rest(seq__17240_17469__$1);
var G__17472 = c__5568__auto___17470;
var G__17473 = cljs.core.count(c__5568__auto___17470);
var G__17474 = (0);
seq__17240_17459 = G__17471;
chunk__17241_17460 = G__17472;
count__17242_17461 = G__17473;
i__17243_17462 = G__17474;
continue;
} else {
var f_17475 = cljs.core.first(seq__17240_17469__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_17475], 0));


var G__17476 = cljs.core.next(seq__17240_17469__$1);
var G__17477 = null;
var G__17478 = (0);
var G__17479 = (0);
seq__17240_17459 = G__17476;
chunk__17241_17460 = G__17477;
count__17242_17461 = G__17478;
i__17243_17462 = G__17479;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_17481], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_17481)))?cljs.core.second(arglists_17481):arglists_17481)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__17255_17482 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17256_17483 = null;
var count__17257_17484 = (0);
var i__17258_17485 = (0);
while(true){
if((i__17258_17485 < count__17257_17484)){
var vec__17285_17486 = chunk__17256_17483.cljs$core$IIndexed$_nth$arity$2(null,i__17258_17485);
var name_17487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17285_17486,(0),null);
var map__17288_17488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17285_17486,(1),null);
var map__17288_17489__$1 = cljs.core.__destructure_map(map__17288_17488);
var doc_17490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17288_17489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17288_17489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17487], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17491], 0));

if(cljs.core.truth_(doc_17490)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17490], 0));
} else {
}


var G__17492 = seq__17255_17482;
var G__17493 = chunk__17256_17483;
var G__17494 = count__17257_17484;
var G__17495 = (i__17258_17485 + (1));
seq__17255_17482 = G__17492;
chunk__17256_17483 = G__17493;
count__17257_17484 = G__17494;
i__17258_17485 = G__17495;
continue;
} else {
var temp__5804__auto___17496 = cljs.core.seq(seq__17255_17482);
if(temp__5804__auto___17496){
var seq__17255_17497__$1 = temp__5804__auto___17496;
if(cljs.core.chunked_seq_QMARK_(seq__17255_17497__$1)){
var c__5568__auto___17498 = cljs.core.chunk_first(seq__17255_17497__$1);
var G__17499 = cljs.core.chunk_rest(seq__17255_17497__$1);
var G__17500 = c__5568__auto___17498;
var G__17501 = cljs.core.count(c__5568__auto___17498);
var G__17502 = (0);
seq__17255_17482 = G__17499;
chunk__17256_17483 = G__17500;
count__17257_17484 = G__17501;
i__17258_17485 = G__17502;
continue;
} else {
var vec__17341_17503 = cljs.core.first(seq__17255_17497__$1);
var name_17504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341_17503,(0),null);
var map__17344_17505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17341_17503,(1),null);
var map__17344_17506__$1 = cljs.core.__destructure_map(map__17344_17505);
var doc_17507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17344_17506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17344_17506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_17504], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_17508], 0));

if(cljs.core.truth_(doc_17507)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_17507], 0));
} else {
}


var G__17509 = cljs.core.next(seq__17255_17497__$1);
var G__17510 = null;
var G__17511 = (0);
var G__17512 = (0);
seq__17255_17482 = G__17509;
chunk__17256_17483 = G__17510;
count__17257_17484 = G__17511;
i__17258_17485 = G__17512;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__17367 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17368 = null;
var count__17369 = (0);
var i__17370 = (0);
while(true){
if((i__17370 < count__17369)){
var role = chunk__17368.cljs$core$IIndexed$_nth$arity$2(null,i__17370);
var temp__5804__auto___17513__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17513__$1)){
var spec_17514 = temp__5804__auto___17513__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17514)], 0));
} else {
}


var G__17515 = seq__17367;
var G__17516 = chunk__17368;
var G__17517 = count__17369;
var G__17518 = (i__17370 + (1));
seq__17367 = G__17515;
chunk__17368 = G__17516;
count__17369 = G__17517;
i__17370 = G__17518;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__17367);
if(temp__5804__auto____$1){
var seq__17367__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__17367__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17367__$1);
var G__17519 = cljs.core.chunk_rest(seq__17367__$1);
var G__17520 = c__5568__auto__;
var G__17521 = cljs.core.count(c__5568__auto__);
var G__17522 = (0);
seq__17367 = G__17519;
chunk__17368 = G__17520;
count__17369 = G__17521;
i__17370 = G__17522;
continue;
} else {
var role = cljs.core.first(seq__17367__$1);
var temp__5804__auto___17523__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___17523__$2)){
var spec_17524 = temp__5804__auto___17523__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_17524)], 0));
} else {
}


var G__17525 = cljs.core.next(seq__17367__$1);
var G__17526 = null;
var G__17527 = (0);
var G__17528 = (0);
seq__17367 = G__17525;
chunk__17368 = G__17526;
count__17369 = G__17527;
i__17370 = G__17528;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__17529 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__17530 = cljs.core.ex_cause(t);
via = G__17529;
t = G__17530;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__17391 = datafied_throwable;
var map__17391__$1 = cljs.core.__destructure_map(map__17391);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17391__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17391__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17392 = cljs.core.last(via);
var map__17392__$1 = cljs.core.__destructure_map(map__17392);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17392__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17392__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17392__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17394 = data;
var map__17394__$1 = cljs.core.__destructure_map(map__17394);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17394__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17395 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__17395__$1 = cljs.core.__destructure_map(map__17395);
var top_data = map__17395__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17395__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__17396 = phase;
var G__17396__$1 = (((G__17396 instanceof cljs.core.Keyword))?G__17396.fqn:null);
switch (G__17396__$1) {
case "read-source":
var map__17397 = data;
var map__17397__$1 = cljs.core.__destructure_map(map__17397);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17397__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17397__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17398 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__17398__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17398,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17398);
var G__17398__$2 = (cljs.core.truth_((function (){var fexpr__17399 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17399.cljs$core$IFn$_invoke$arity$1 ? fexpr__17399.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17399.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17398__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17398__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17398__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17398__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17400 = top_data;
var G__17400__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17400,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17400);
var G__17400__$2 = (cljs.core.truth_((function (){var fexpr__17401 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17401.cljs$core$IFn$_invoke$arity$1 ? fexpr__17401.cljs$core$IFn$_invoke$arity$1(source) : fexpr__17401.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__17400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17400__$1);
var G__17400__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17400__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17400__$2);
var G__17400__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17400__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17400__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17400__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17400__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17402 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17402,(3),null);
var G__17405 = top_data;
var G__17405__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17405,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17405);
var G__17405__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17405__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17405__$1);
var G__17405__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17405__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17405__$2);
var G__17405__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17405__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17405__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17405__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17405__$4;
}

break;
case "execution":
var vec__17406 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17406,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17406,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17406,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17406,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17390_SHARP_){
var or__5045__auto__ = (p1__17390_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__17409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__17409.cljs$core$IFn$_invoke$arity$1 ? fexpr__17409.cljs$core$IFn$_invoke$arity$1(p1__17390_SHARP_) : fexpr__17409.call(null,p1__17390_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__17410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17410__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17410,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17410);
var G__17410__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17410__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17410__$1);
var G__17410__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17410__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17410__$2);
var G__17410__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17410__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17410__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17410__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17410__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17396__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17414){
var map__17415 = p__17414;
var map__17415__$1 = cljs.core.__destructure_map(map__17415);
var triage_data = map__17415__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17415__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__17417 = phase;
var G__17417__$1 = (((G__17417 instanceof cljs.core.Keyword))?G__17417.fqn:null);
switch (G__17417__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__17418 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__17419 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17420 = loc;
var G__17421 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17422_17542 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17423_17543 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17424_17544 = true;
var _STAR_print_fn_STAR__temp_val__17425_17545 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17424_17544);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17425_17545);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17412_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17412_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17423_17543);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17422_17542);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17418,G__17419,G__17420,G__17421) : format.call(null,G__17418,G__17419,G__17420,G__17421));

break;
case "macroexpansion":
var G__17426 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__17427 = cause_type;
var G__17428 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17429 = loc;
var G__17430 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17426,G__17427,G__17428,G__17429,G__17430) : format.call(null,G__17426,G__17427,G__17428,G__17429,G__17430));

break;
case "compile-syntax-check":
var G__17431 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__17432 = cause_type;
var G__17433 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17434 = loc;
var G__17435 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17431,G__17432,G__17433,G__17434,G__17435) : format.call(null,G__17431,G__17432,G__17433,G__17434,G__17435));

break;
case "compilation":
var G__17436 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__17437 = cause_type;
var G__17438 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17439 = loc;
var G__17440 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17436,G__17437,G__17438,G__17439,G__17440) : format.call(null,G__17436,G__17437,G__17438,G__17439,G__17440));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__17441 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__17442 = symbol;
var G__17443 = loc;
var G__17444 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17445_17546 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17446_17547 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17447_17548 = true;
var _STAR_print_fn_STAR__temp_val__17448_17549 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17447_17548);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17448_17549);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17413_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17413_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17446_17547);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17445_17546);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__17441,G__17442,G__17443,G__17444) : format.call(null,G__17441,G__17442,G__17443,G__17444));
} else {
var G__17451 = "Execution error%s at %s(%s).\n%s\n";
var G__17452 = cause_type;
var G__17453 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__17454 = loc;
var G__17455 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__17451,G__17452,G__17453,G__17454,G__17455) : format.call(null,G__17451,G__17452,G__17453,G__17454,G__17455));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17417__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
