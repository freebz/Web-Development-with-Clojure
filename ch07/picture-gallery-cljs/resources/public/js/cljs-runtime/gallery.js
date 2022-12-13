goog.provide('gallery');
gallery.sel = (function gallery$sel(selectors){
return document.querySelector(selectors);
});
gallery.handle_response = (function gallery$handle_response(response){
var errors = (new goog.string.StringBuffer(""));
var seq__20039_20048 = cljs.core.seq(response);
var chunk__20040_20049 = null;
var count__20041_20050 = (0);
var i__20042_20051 = (0);
while(true){
if((i__20042_20051 < count__20041_20050)){
var map__20045_20052 = chunk__20040_20049.cljs$core$IIndexed$_nth$arity$2(null,i__20042_20051);
var map__20045_20053__$1 = cljs.core.__destructure_map(map__20045_20052);
var name_20054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045_20053__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var status_20055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20045_20053__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ok",status_20055)){
goog.dom.removeNode(domina.by_id(name_20054).parentNode.parentNode);
} else {
errors.append(["<li>failed to remove ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_20054),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_20055),"</li>"].join(''));
}


var G__20056 = seq__20039_20048;
var G__20057 = chunk__20040_20049;
var G__20058 = count__20041_20050;
var G__20059 = (i__20042_20051 + (1));
seq__20039_20048 = G__20056;
chunk__20040_20049 = G__20057;
count__20041_20050 = G__20058;
i__20042_20051 = G__20059;
continue;
} else {
var temp__5804__auto___20060 = cljs.core.seq(seq__20039_20048);
if(temp__5804__auto___20060){
var seq__20039_20061__$1 = temp__5804__auto___20060;
if(cljs.core.chunked_seq_QMARK_(seq__20039_20061__$1)){
var c__5568__auto___20062 = cljs.core.chunk_first(seq__20039_20061__$1);
var G__20063 = cljs.core.chunk_rest(seq__20039_20061__$1);
var G__20064 = c__5568__auto___20062;
var G__20065 = cljs.core.count(c__5568__auto___20062);
var G__20066 = (0);
seq__20039_20048 = G__20063;
chunk__20040_20049 = G__20064;
count__20041_20050 = G__20065;
i__20042_20051 = G__20066;
continue;
} else {
var map__20046_20067 = cljs.core.first(seq__20039_20061__$1);
var map__20046_20068__$1 = cljs.core.__destructure_map(map__20046_20067);
var name_20069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046_20068__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var status_20070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20046_20068__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("ok",status_20070)){
goog.dom.removeNode(domina.by_id(name_20069).parentNode.parentNode);
} else {
errors.append(["<li>failed to remove ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_20069),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_20070),"</li>"].join(''));
}


var G__20071 = cljs.core.next(seq__20039_20061__$1);
var G__20072 = null;
var G__20073 = (0);
var G__20074 = (0);
seq__20039_20048 = G__20071;
chunk__20040_20049 = G__20072;
count__20041_20050 = G__20073;
i__20042_20051 = G__20074;
continue;
}
} else {
}
}
break;
}

var error_str = ["<ul>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors.toString()),"</ul>"].join('');
if(cljs.core.truth_(cljs.core.not_empty(error_str))){
return domina.append_BANG_(domina.by_id("error"),error_str);
} else {
return null;
}
});
gallery.find_selected = (function gallery$find_selected(){
return cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20047_SHARP_){
return p1__20047_SHARP_.name;
}),domina.nodes(gallery.sel("input:checked"))));
});
gallery.deleteImages = (function gallery$deleteImages(_){
var temp__5802__auto__ = gallery.find_selected();
if(cljs.core.truth_(temp__5802__auto__)){
var selected = temp__5802__auto__;
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("/delete",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"names","names",-1943074658),selected], null),new cljs.core.Keyword(null,"handler","handler",-195596612),gallery.handle_response], null)], 0));
} else {
return alert("no images selected");
}
});
gallery.init = (function gallery$init(){
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3(domina.by_id("delete"),new cljs.core.Keyword(null,"click","click",1912301393),gallery.deleteImages);
});
goog.exportSymbol('gallery.init', gallery.init);

//# sourceMappingURL=gallery.js.map
