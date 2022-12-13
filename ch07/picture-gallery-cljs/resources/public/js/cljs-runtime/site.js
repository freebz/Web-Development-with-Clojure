goog.provide('site');
site.sel = (function site$sel(element,selectors){
return element.querySelector(selectors);
});
site.rgb_str = (function site$rgb_str(p__19109){
var vec__19110 = p__19109;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19110,(2),null);
return ["rgb(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(g),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b),")"].join('');
});
site.set_color = (function site$set_color(style,foreground,background){
(style.color = site.rgb_str(foreground));

return (style.backgroundColor = site.rgb_str(background));
});
site.img_url = (function site$img_url(div){
return domina.attr(site.sel(div,"img"),"src");
});
site.set_colors = (function site$set_colors(div){
return (new AlbumColors(site.img_url(div))).getColors((function (p__19137){
var vec__19138 = p__19137;
var background = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19138,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19138,(1),null);
var foreground = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19138,(2),null);
return site.set_color(div.style,foreground,background);
}));
});
site.init = (function site$init(){
var seq__19141 = cljs.core.seq(domina.nodes(domina.by_class("thumbnail")));
var chunk__19142 = null;
var count__19143 = (0);
var i__19144 = (0);
while(true){
if((i__19144 < count__19143)){
var div = chunk__19142.cljs$core$IIndexed$_nth$arity$2(null,i__19144);
site.set_colors(div);


var G__19175 = seq__19141;
var G__19176 = chunk__19142;
var G__19177 = count__19143;
var G__19178 = (i__19144 + (1));
seq__19141 = G__19175;
chunk__19142 = G__19176;
count__19143 = G__19177;
i__19144 = G__19178;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19141);
if(temp__5804__auto__){
var seq__19141__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19141__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19141__$1);
var G__19179 = cljs.core.chunk_rest(seq__19141__$1);
var G__19180 = c__5568__auto__;
var G__19181 = cljs.core.count(c__5568__auto__);
var G__19182 = (0);
seq__19141 = G__19179;
chunk__19142 = G__19180;
count__19143 = G__19181;
i__19144 = G__19182;
continue;
} else {
var div = cljs.core.first(seq__19141__$1);
site.set_colors(div);


var G__19183 = cljs.core.next(seq__19141__$1);
var G__19184 = null;
var G__19185 = (0);
var G__19186 = (0);
seq__19141 = G__19183;
chunk__19142 = G__19184;
count__19143 = G__19185;
i__19144 = G__19186;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('site.init', site.init);

//# sourceMappingURL=site.js.map
