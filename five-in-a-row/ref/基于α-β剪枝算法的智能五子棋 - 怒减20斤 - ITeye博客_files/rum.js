(function(){var aa="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ba;if("function"==typeof Object.setPrototypeOf)ba=Object.setPrototypeOf;else{var ca;a:{var da={O:!0},ea={};try{ea.__proto__=da;ca=ea.O;break a}catch(a){}ca=!1}ba=ca?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var fa=ba,ha=function(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(fa)fa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.R=b.prototype},h=this,l=function(a){return"string"==typeof a},n=function(a){return"number"==typeof a},ia=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},ja=function(a,b,c){return a.call.apply(a.bind,arguments)},ka=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},ma=function(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ma=ja:ma=ka;return ma.apply(null,arguments)},na=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}},q=function(a){var b=oa;function c(){}c.prototype=b.prototype;a.R=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Z=function(a,c,e){for(var d=Array(arguments.length-2),f=2;f<arguments.length;f++)d[f-2]=arguments[f];return b.prototype[c].apply(a,d)}};var pa=document,qa=window;var ra;var sa=function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ta=function(a){var b;b&&64<a.length?(64<b&&(b=64),a=a.substring(0,64-b)+"..."+a.substring(a.length-b)):64<a.length&&(b=Math.floor(32),a=a.substring(0,b+0)+"..."+a.substring(a.length-b));return a},ua=function(a,b){return a<b?-1:a>b?1:0};var r=function(a,b,c){for(var d=a.length,f=l(a)?a.split(""):a,e=0;e<d;e++)e in f&&b.call(c,f[e],e,a)},va=function(a,b){for(var c=a.length,d=[],f=0,e=l(a)?a.split(""):a,g=0;g<c;g++)if(g in e){var k=e[g];b.call(void 0,k,g,a)&&(d[f++]=k)}return d},wa=function(a,b){for(var c=a.length,d=Array(c),f=l(a)?a.split(""):a,e=0;e<c;e++)e in f&&(d[e]=b.call(void 0,f[e],e,a));return d},xa=function(a,b,c){var d=c;r(a,function(c,e){d=b.call(void 0,d,c,e,a)});return d},za=function(a){var b=ya;a:{for(var c=b.length,d=l(b)?b.split(""):b,f=0;f<c;f++)if(f in d&&a.call(void 0,d[f],f,b)){a=f;break a}a=-1}return 0>a?null:l(b)?b.charAt(a):b[a]},Aa=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],f=ia(d);if("array"==f||"object"==f&&"number"==typeof d.length){f=a.length||0;var e=d.length||0;a.length=f+e;for(var g=0;g<e;g++)a[f+g]=d[g]}else a.push(d)}},Ca=function(a,b){a.sort(b||Ba)},Ba=function(a,b){return a>b?1:a<b?-1:0};var t;a:{var Da=h.navigator;if(Da){var Ea=Da.userAgent;if(Ea){t=Ea;break a}}t=""}var v=function(a){return-1!=t.indexOf(a)};var Fa=function(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c};var Ga=function(a){Ga[" "](a);return a};Ga[" "]=function(){};var Ia=function(a,b){var c=Ha;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ja=v("Opera"),w=v("Trident")||v("MSIE"),Ka=v("Edge"),La=v("Gecko")&&!(-1!=t.toLowerCase().indexOf("webkit")&&!v("Edge"))&&!(v("Trident")||v("MSIE"))&&!v("Edge"),x=-1!=t.toLowerCase().indexOf("webkit")&&!v("Edge"),Ma=function(){var a=h.document;return a?a.documentMode:void 0},Na;a:{var Oa="",Pa=function(){var a=t;if(La)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ka)return/Edge\/([\d\.]+)/.exec(a);if(w)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(x)return/WebKit\/(\S+)/.exec(a);if(Ja)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Pa&&(Oa=Pa?Pa[1]:"");if(w){var Qa=Ma();if(null!=Qa&&Qa>parseFloat(Oa)){Na=String(Qa);break a}}Na=Oa}var Ta=Na,Ha={},Ua=function(a){return Ia(a,function(){for(var b=0,c=sa(String(Ta)).split("."),d=sa(String(a)).split("."),f=Math.max(c.length,d.length),e=0;0==b&&e<f;e++){var g=c[e]||"",k=d[e]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;b=ua(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||ua(0==g[2].length,0==k[2].length)||ua(g[2],k[2]);g=g[3];k=k[3]}while(0==b)}return 0<=b})},Va;var Wa=h.document;Va=Wa&&w?Ma()||("CSS1Compat"==Wa.compatMode?parseInt(Ta,10):5):void 0;var Xa=w||Ja||x;var y=function(a,b){this.a=void 0!==a?a:0;this.b=void 0!==b?b:0};y.prototype.ceil=function(){this.a=Math.ceil(this.a);this.b=Math.ceil(this.b);return this};y.prototype.floor=function(){this.a=Math.floor(this.a);this.b=Math.floor(this.b);return this};y.prototype.round=function(){this.a=Math.round(this.a);this.b=Math.round(this.b);return this};var z=function(a,b){this.width=a;this.height=b};z.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};z.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};z.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Ya=function(a,b){for(;a&&1!=a.nodeType;)a=b?a.nextSibling:a.previousSibling;return a},Za=function(a){var b;if(Xa&&!(w&&Ua("9")&&!Ua("10")&&h.SVGElement&&a instanceof h.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;a=typeof b;return("object"==a&&b||"function"==a)&&1==b.nodeType?b:null},A=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},ab=function(a){var b=$a;a&&(a=a.parentNode);for(var c=0;a&&6>=c;){if(b(a))return a;a=a.parentNode;c++}return null},bb=function(a){this.a=a||h.document||document};var cb=function(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d};cb.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};cb.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};cb.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var db=function(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}w&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b},eb=function(a){var b=a.offsetWidth,c=a.offsetHeight,d=x&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=db(a),new z(a.right-a.left,a.bottom-a.top)):new z(b,c)};var B=function(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{Ga(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}},fb=function(a){return B(a.top)?a.top:null},C=function(a,b,c){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&b.call(c,a[d],d,a)},gb=function(a){var b=0;C(a,function(){b++});return b},hb=function(a,b){return Fa(a,function(c,d){return Object.prototype.hasOwnProperty.call(a,d)&&b(c,d)})};var D=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)},ib=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,void 0):a.detachEvent&&a.detachEvent("on"+b,c)};var jb;a:{var E=h.context;if(!E)try{E=h.parent.context}catch(a){}try{if(E&&"pageViewId"in E&&"canonicalUrl"in E){jb=E;break a}}catch(a){}jb=null}var kb=!!jb&&h!=h.top;var lb=function(a,b){a.google_image_requests||(a.google_image_requests=[]);var c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var mb=!!window.google_async_iframe_id,G=mb&&window.parent||window,nb=function(a){return!(!a||!a.id)&&0===a.id.indexOf("aswift_")};var ob=function(a,b,c){c=c?c:{};this.error=a;this.context=b.context;this.line=b.line||-1;this.msg=b.message||"";this.file=b.file||"";this.id=b.id||"jserror";this.meta=c};var pb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,qb=function(a){return a?decodeURI(a):a};var rb=function(a){if(a=/[-\w]+\.[-\w]+$/.exec(a)){a=a[0].toLowerCase();for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;switch(b){case 1967261364:return 0;case 3147493546:return 1;case 1567346461:return 2;case 2183041838:return 3;case 763236279:return 4;case 1342279801:return 5;case 526831769:return 6;case 352806002:return 7;case 2755048925:return 8;case 3306848407:return 9;case 2207000920:return 10;case 484037040:return 11;case 3506871055:return 12;case 672143848:return 13;case 2528751226:return 14;case 2744854768:return 15;case 3703278665:return 16;case 2014749173:return 17;case 133063824:return 18;case 2749334602:return 19;case 3131239845:return 20;case 2074086763:return 21;case 795772493:return 22;case 290857819:return 23;case 3035947606:return 24;case 2983138003:return 25;case 2197138676:return 26;case 4216016165:return 27;case 239803524:return 28;case 975993579:return 29;case 1794940339:return 30;case 1314429186:return 31;case 1643618937:return 32;case 497159982:return 33}}return-1};var sb=function(a,b){this.a=a;this.b=b},tb=function(a,b){this.url=a;this.H=!!b;this.depth=n(void 0)?void 0:null};var ub=function(a,b,c,d,f){this.j=c||4E3;this.f=a||"&";this.o=b||",$";this.g=void 0!==d?d:"trn";this.u=f||null;this.i=!1;this.b={};this.s=0;this.a=[]},vb=function(a,b){var c={};c[a]=b;return[c]},xb=function(a,b,c,d,f){var e=[];C(a,function(a,k){(a=wb(a,b,c,d,f))&&e.push(k+"="+a)});return e.join(b)},wb=function(a,b,c,d,f){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var e=[],g=0;g<a.length;g++)e.push(wb(a[g],b,c,d+1,f));return e.join(c[d])}}else if("object"==typeof a)return f=f||0,2>f?encodeURIComponent(xb(a,b,c,d,f+1)):"...";return encodeURIComponent(String(a))},H=function(a,b,c,d){a.a.push(b);a.b[b]=vb(c,d)},yb=function(a,b,c){var d=a.s++;b=vb(b,c);a.a.push(d);a.b[d]=b},zb=function(a,b){C(b,function(a,b){null!=a&&yb(this,b,a)},a)},Bb=function(a,b,c,d){b=b+"//"+c+d;var f=Ab(a)-d.length-0;if(0>f)return"";a.a.sort(function(a,b){return a-b});d=null;c="";for(var e=0;e<a.a.length;e++)for(var g=a.a[e],k=a.b[g],m=0;m<k.length;m++){if(!f){d=null==d?g:d;break}var p=xb(k[m],a.f,a.o);if(p){p=c+p;if(f>=p.length){f-=p.length;b+=p;c=a.f;break}else a.i&&(c=f,p[c-1]==a.f&&--c,b+=p.substr(0,c),c=a.f,f=0);d=null==d?g:d}}e="";a.g&&null!=d&&(e=c+a.g+"="+(a.u||d));return b+e+""},Ab=function(a){if(!a.g)return a.j;var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return a.j-a.g.length-b-a.f.length-1};var Cb=function(a,b,c,d){if(Math.random()<(d||a.a))try{if(c instanceof ub)var f=c;else f=new ub,C(c,function(a,b){yb(f,b,a)});var e=Bb(f,a.g,a.b,a.f+b+"&");e&&lb(h,e)}catch(g){}};var Db=null;var Eb=function(){var a=h.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):+new Date},Fb=function(){var a=h.performance;return a&&a.now?a.now():null};var Gb=function(a,b,c,d,f){this.label=a;this.type=b;this.value=c;this.duration=void 0===d?0:d;this.uniqueId=this.label+"_"+this.type+"_"+Math.random();this.slotId=f};var I=function(a,b){this.f=[];this.a=b||h;var c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.f=b.google_js_reporting_queue,c=b.google_measure_js_timing);if(null===Db){Db="";try{var d=h.top.location.hash;if(d){var f=d.match(/\bdeid=([\d,]+)/);Db=f?f[1]:""}}catch(e){}}b=Db;b=b.indexOf&&0<=b.indexOf("1337");this.b=(this.b=null!=c?c:Math.random()<a)||b;a=this.a.performance;this.B=!!(a&&a.mark&&a.clearMarks&&b)};I.prototype.o=function(){this.f!=this.a.google_js_reporting_queue&&(this.f.length=0,this.B&&r(this.f,this.u,this));this.b=!1};I.prototype.s=function(a){this.b&&this.f.push(a)};I.prototype.u=function(a){if(a&&this.B){var b=this.a.performance;b.clearMarks("goog_"+a.uniqueId+"_start");b.clearMarks("goog_"+a.uniqueId+"_end")}};var J=function(a,b,c,d){a.b&&a.s(new Gb(b,c,d,0,void 0))};I.prototype.start=function(a,b){if(!this.b)return null;var c=Fb()||Eb();a=new Gb(a,b,c);this.B&&this.a.performance.mark("goog_"+a.uniqueId+"_start");return a};var Hb=function(a,b){if(a.b&&n(b.value)){var c=Fb()||Eb();b.duration=c-b.value;a.B&&a.a.performance.mark("goog_"+b.uniqueId+"_end");a.s(b)}},Ib=function(a,b){var c=243;if(a.b){c=c.toString();c=a.start(c,3);try{b()}catch(d){throw a.u(c),d;}Hb(a,c)}else b()};var Jb=function(a,b,c,d){this.f=a;this.j=b;this.g=c;this.i=this.b;this.a=void 0===d?null:d},Mb=function(a,b,c,d){try{if(a.a&&a.a.b){var f=a.a.start(b.toString(),3);var e=c();Hb(a.a,f)}else e=c()}catch(g){c=a.g;try{a.a&&f&&a.a.u(f),c=(d||a.i).call(a,b,new Kb(Lb(g),g.fileName,g.lineNumber),void 0,void 0)}catch(k){a.b(217,k)}if(!c)throw g;}return e},Ob=function(a,b){var c=Nb;return function(d){for(var f=[],e=0;e<arguments.length;++e)f[e-0]=arguments[e];return Mb(c,a,function(){return b.apply(void 0,f)},void 0)}};Jb.prototype.b=function(a,b,c,d,f){f=f||this.j;try{var e=new ub;e.i=!0;H(e,1,"context",a);b.error&&b.meta&&b.id||(b=new Kb(Lb(b),b.fileName,b.lineNumber));b.msg&&H(e,2,"msg",b.msg.substring(0,512));b.file&&H(e,3,"file",b.file);0<b.line&&H(e,4,"line",b.line);var g=b.meta||{};if(d)try{d(g)}catch(Ra){}b=[g];e.a.push(5);e.b[5]=b;g=h;b=[];var k=null;do{d=g;if(B(d)){var m=d.location.href;k=d.document&&d.document.referrer||null}else m=k,k=null;b.push(new tb(m||""));try{g=d.parent}catch(Ra){g=null}}while(g&&d!=g);m=0;for(var p=b.length-1;m<=p;++m)b[m].depth=p-m;d=h;if(d.location&&d.location.ancestorOrigins&&d.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var u=b[m];u.url||(u.url=d.location.ancestorOrigins[m-1]||"",u.H=!0)}var F=new tb(h.location.href,!1),Sa=b.length-1;for(p=Sa;0<=p;--p){var O=b[p];if(O.url&&!O.H){F=O;break}}O=null;var Yc=b.length&&b[Sa].url;0!=F.depth&&Yc&&(O=b[Sa]);var la=new sb(F,O);la.b&&H(e,6,"top",la.b.url||"");H(e,7,"url",la.a.url||"");Cb(this.f,f,e,c)}catch(Ra){try{Cb(this.f,f,{context:"ecmserr",rctx:a,msg:Lb(Ra),url:la.a.url},c)}catch(Wd){}}return this.g};var Lb=function(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;var c=b;try{-1==a.indexOf(c)&&(a=c+"\n"+a);for(var d;a!=d;)d=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(f){b=c}}return b},Kb=function(a,b,c){ob.call(this,Error(a),{message:a,file:void 0===b?"":b,line:void 0===c?-1:c})};ha(Kb,ob);var Nb;if(mb&&!B(G)){var Pb="."+pa.domain;try{for(;2<Pb.split(".").length&&!B(G);)pa.domain=Pb=Pb.substr(Pb.indexOf(".")+1),G=window.parent}catch(a){}B(G)||(G=window)}var K=G,Qb=new I(1,K);Nb=new Jb(new function(){var a=a?a:qa;this.g="http:"===a.location.protocol?"http:":"https:";this.b="pagead2.googlesyndication.com";this.f="/pagead/gen_204?id=";this.a=.01},"jserror",!0,Qb);"complete"==K.document.readyState?K.google_measure_js_timing||Qb.o():Qb.b&&D(K,"load",function(){K.google_measure_js_timing||Qb.o()});var Rb=function(a,b){return Ob(a,b)},Sb=Nb.b;var Tb=v("Safari")&&!((v("Chrome")||v("CriOS"))&&!v("Edge")||v("Coast")||v("Opera")||v("Edge")||v("Silk")||v("Android"))&&!(v("iPhone")&&!v("iPod")&&!v("iPad")||v("iPad")||v("iPod"));var Ub=null,Vb=null,Wb=null,Xb=La||x&&!Tb||Ja||!Tb&&!w&&"function"==typeof h.atob,Zb=function(a){Yb();for(var b=Wb,c=[],d=0;d<a.length;d+=3){var f=a[d],e=d+1<a.length,g=e?a[d+1]:0,k=d+2<a.length,m=k?a[d+2]:0,p=f>>2;f=(f&3)<<4|g>>4;g=(g&15)<<2|m>>6;m&=63;k||(m=64,e||(g=64));c.push(b[p],b[f],b[g],b[m])}return c.join("")},ac=function(a){if(Xb)return h.atob(a);var b="";$b(a,function(a){b+=String.fromCharCode(a)});return b},$b=function(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=Vb[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Yb();for(var d=0;;){var f=c(-1),e=c(0),g=c(64),k=c(64);if(64===k&&-1===f)break;b(f<<2|e>>4);64!=g&&(b(e<<4&240|g>>2),64!=k&&b(g<<6&192|k))}},Yb=function(){if(!Ub){Ub={};Vb={};Wb={};for(var a=0;65>a;a++)Ub[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),Vb[Ub[a]]=a,Wb[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a),62<=a&&(Vb["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};var bc=0,cc=0;var dc=function(){this.a=[]};dc.prototype.length=function(){return this.a.length};var ec=function(a){var b=a.a;a.a=[];return b},fc=function(a,b){for(;127<b;)a.a.push(b&127|128),b>>>=7;a.a.push(b)};var gc=function(){this.f=[];this.b=0;this.a=new dc},hc=function(a,b){fc(a.a,8*b+2);b=ec(a.a);a.f.push(b);a.b+=b.length;b.push(a.b);return b},ic=function(a,b){var c=b.pop();for(c=a.b+a.a.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++},jc=function(a){for(var b=new Uint8Array(a.b+a.a.length()),c=a.f,d=c.length,f=0,e=0;e<d;e++){var g=c[e];b.set(g,f);f+=g.length}c=ec(a.a);b.set(c,f);a.f=[b];return b},L=function(a,b,c){if(null!=c&&null!=c){fc(a.a,8*b+0);a=a.a;var d=c;c=0>d;d=Math.abs(d);b=d>>>0;d=Math.floor((d-b)/4294967296);d>>>=0;c&&(d=~d>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,d++,4294967295<d&&(d=0)));bc=b;cc=d;c=bc;for(b=cc;0<b||127<c;)a.a.push(c&127|128),c=(c>>>7|b<<25)>>>0,b>>>=7;a.a.push(c)}},M=function(a,b,c){if(null!=c)if(fc(a.a,8*b+0),a=a.a,0<=c)fc(a,c);else{for(b=0;9>b;b++)a.a.push(c&127|128),c>>=7;a.a.push(1)}},N=function(a,b,c){if(null!=c){b=hc(a,b);for(var d=a.a,f=0;f<c.length;f++){var e=c.charCodeAt(f);if(128>e)d.a.push(e);else if(2048>e)d.a.push(e>>6|192),d.a.push(e&63|128);else if(65536>e)if(55296<=e&&56319>=e&&f+1<c.length){var g=c.charCodeAt(f+1);56320<=g&&57343>=g&&(e=1024*(e-55296)+g-56320+65536,d.a.push(e>>18|240),d.a.push(e>>12&63|128),d.a.push(e>>6&63|128),d.a.push(e&63|128),f++)}else d.a.push(e>>12|224),d.a.push(e>>6&63|128),d.a.push(e&63|128)}ic(a,b)}},kc=function(a,b,c,d){null!=c&&(b=hc(a,b),d(c,a),ic(a,b))},lc=function(a,b,c,d){if(c)for(var f=0;f<c.length;f++){var e=hc(a,b);d(c[f],a);ic(a,e)}};var oa=function(){},mc="function"==typeof Uint8Array,Q=function(a,b,c,d){a.a=null;b||(b=[]);a.j=void 0;a.f=-1;a.h=b;a:{if(a.h.length){b=a.h.length-1;var f=a.h[b];if(f&&"object"==typeof f&&"array"!=ia(f)&&!(mc&&f instanceof Uint8Array)){a.g=b-a.f;a.b=f;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)f=c[b],f<a.g?(f+=a.f,a.h[f]=a.h[f]||P):(nc(a),a.b[f]=a.b[f]||P);d&&d.length&&r(d,na(oc,a))},P=[],nc=function(a){var b=a.g+a.f;a.h[b]||(a.b=a.h[b]={})},pc=function(a,b){if(b<a.g){b+=a.f;var c=a.h[b];return c===P?a.h[b]=[]:c}if(a.b)return c=a.b[b],c===P?a.b[b]=[]:c},R=function(a,b){if(b<a.g){b+=a.f;var c=a.h[b];return c===P?a.h[b]=[]:c}c=a.b[b];return c===P?a.b[b]=[]:c},S=function(a,b,c){a=pc(a,b);return null==a?c:a},T=function(a,b,c){b<a.g?a.h[b+a.f]=c:(nc(a),a.b[b]=c)},V=function(a,b,c){U(a,b,c,0)},U=function(a,b,c,d){c!=d?T(a,b,c):a.h[b+a.f]=null},oc=function(a,b){var c,d;r(b,function(b){var e=pc(a,b);null!=e&&(c=b,d=e,T(a,b,void 0))});return c?(T(a,c,d),c):0},W=function(a,b,c){a.a||(a.a={});if(!a.a[c]){var d=pc(a,c);d&&(a.a[c]=new b(d))}return a.a[c]},rc=function(a,b,c){qc(a,b,c);b=a.a[c];b==P&&(b=a.a[c]=[]);return b},qc=function(a,b,c){a.a||(a.a={});if(!a.a[c]){for(var d=R(a,c),f=[],e=0;e<d.length;e++)f[e]=new b(d[e]);a.a[c]=f}},sc=function(a,b,c){a.a||(a.a={});var d=c?c.h:c;a.a[b]=c;T(a,b,d)},tc=function(a,b,c,d){a.a||(a.a={});var f=d?d.h:d;a.a[b]=d;(c=oc(a,c))&&c!==b&&void 0!==f&&(a.a&&c in a.a&&(a.a[c]=void 0),T(a,c,void 0));T(a,b,f)},uc=function(a,b,c,d){qc(a,d,b);var f=a.a[b];f||(f=a.a[b]=[]);c=c?c:new d;a=R(a,b);f.push(c);a.push(c.h)};oa.prototype.toString=function(){return this.h.toString()};var vc=function(a){Q(this,a,null,null)};q(vc);var wc=function(a,b){var c=S(a,1,0);0!==c&&M(b,1,c);c=S(a,2,0);0!==c&&M(b,2,c);c=S(a,3,"");0<c.length&&N(b,3,c);c=S(a,4,"");0<c.length&&N(b,4,c);c=S(a,5,"");0<c.length&&N(b,5,c)},yc=function(a){Q(this,a,xc,null)};q(yc);var xc=[2],zc=function(a,b){var c=S(a,1,0);0!==c&&M(b,1,c);c=rc(a,vc,2);0<c.length&&lc(b,2,c,wc)},Bc=function(a){Q(this,a,null,Ac)};q(Bc);var Ac=[[5]],Cc=function(a,b){var c=S(a,1,"");0<c.length&&N(b,1,c);c=S(a,2,0);0!==c&&M(b,2,c);c=S(a,3,0);0!==c&&L(b,3,c);c=S(a,4,0);0!==c&&L(b,4,c);(c=W(a,yc,5))&&kc(b,5,c,zc)},Ec=function(a){Q(this,a,Dc,null)};q(Ec);var Dc=[1];var Gc=function(a){Q(this,a,Fc,null)};q(Gc);var Fc=[1],Hc=function(a,b){var c=R(a,1);if(0<c.length&&c)for(var d=0;d<c.length;d++)N(b,1,c[d]);c=S(a,2,0);0!==c&&L(b,2,c);c=S(a,3,0);0!==c&&M(b,3,c)},Ic=function(a){Q(this,a,null,null)};q(Ic);var X=function(a,b,c,d,f,e,g,k){e=void 0===e?Infinity:e;g=void 0===g?!1:g;I.call(this,a,k);this.w=0;this.D=e;this.K=b;this.F=c;this.J=d;this.L=f;this.N=!("csi.gstatic.com"!==this.F||!this.a.navigator||!this.a.navigator.sendBeacon);this.g={};this.a.performance&&this.a.performance.now||(this.g.dat=1);this.i={};this.M=!g;this.j=ma(this.G,this);this.I=na(this.a.setTimeout,this.j,1100);this.A=this.a.setTimeout(this.j,1E4);"complete"===this.a.document.readyState?this.a.setTimeout(this.j,0):D(this.a,"load",this.I);D(this.a,"unload",this.j)};ha(X,I);var Jc=function(a){var b=Math.round(a.duration);return""+a.label+(null!=a.slotId?"_"+a.slotId:"")+("."+(n(a.value)?Math.round(a.value).toString(36):a.value))+(0<b?"_"+b.toString(36):"")},Kc=function(a,b){a.i.ec=b};X.prototype.G=function(){if(this.b&&this.M){if(0<this.f.length||0<gb(this.i)){var a={};200<this.f.length&&(this.f.length=200);r(this.f,function(b){var c="met."+b.type;a[c]?a[c].push(Jc(b)):a[c]=[Jc(b)]});Lc(this,a);this.w===this.D&&this.o()}this.f.length=0;this.a.clearTimeout(this.A);this.A=0}};var Lc=function(a,b){a.w++;var c=new ub(void 0,"~");yb(c,"puid",a.w.toString(36)+"~"+(+new Date).toString(36));zb(c,a.g);zb(c,a.i);zb(c,b);a.i={};a.a.google_timing_params&&zb(c,a.a.google_timing_params);b=Bb(c,a.K,a.F,""+a.J+a.L+"&");a.N&&a.a.navigator.sendBeacon(b,null)||lb(a.a,b)},Mc=function(a,b,c,d){b="met."+b;a.i[b]=void 0!==a.i[b]&&(void 0===d?0:d)?a.i[b]+("~"+c):c},Nc=function(a,b,c){var d=""+b;C(c,function(a,b){null!=a&&(d+="."+b+"_"+a)});Mc(a,b,d);Lc(a,{})};X.prototype.s=function(a){this.w<this.D&&(I.prototype.s.call(this,a),200<=this.f.length&&this.G())};X.prototype.o=function(){I.prototype.o.call(this);this.a.clearTimeout(this.A);this.A=0;ib(this.a,"unload",this.j);ib(this.a,"load",this.I)};var Oc={self:1,"same-origin-ancestor":2,"same-origin-descendant":3,"same-origin":4,"cross-origin-ancestor":5,"cross-origin-descendant":6,"cross-origin-unreachable":7,"multiple-contexts":8},Pc={script:1,layout:2},Qc={iframe:1,embed:2,object:3},Rc=function(a){var b=new yc;U(b,1,Oc[a.name],0);r(a.attribution,function(a){var c=new vc;U(c,1,Pc[a.name],0);U(c,2,Qc[a.containerType],0);if(l(a.containerId)){var f=ta(a.containerId);U(c,4,f,"")}l(a.containerName)&&(f=ta(a.containerName),U(c,3,f,""));l(a.containerSrc)&&(a=ta(a.containerSrc),U(c,5,a,""));uc(b,2,c,vc)});return b},Sc=function(a,b){var c=new gc;b=rc(b,Bc,1);0<b.length&&lc(c,1,b,Cc);c=jc(c);c=Zb(c).replace(/\.+$/,"");b={};Nc(a,6,(b[1]=c,b))},Tc=function(a){if(h.PerformanceLongTaskTiming&&h.PerformanceObserver){var b=0;(new h.PerformanceObserver(Rb(246,function(c,d){var f=new Ec;r(c.getEntries(),function(a){var b=new Bc;V(b,3,Math.round(a.startTime));V(b,4,Math.round(a.duration));a=Rc(a);tc(b,5,Ac[0],a);uc(f,1,b,Bc)});Sc(a,f);10<=++b&&d.disconnect()}))).observe({entryTypes:["longtask"]})}};var Uc=function(a){Q(this,a,null,null)};q(Uc);var Vc=function(a){Q(this,a,null,null)};q(Vc);var Wc=function(a){Q(this,a,null,null)};q(Wc);var Xc=function(){var a=h.document,b;a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState?b="webkitvisibilitychange":a.visibilityState&&(b="visibilitychange");return b};var Zc=function(a,b){var c=navigator.getBattery&&navigator.getBattery();c&&c.then?c.then(function(c){var d=c.level,e=c.charging;setTimeout(function(){b(100*d|0,100*c.level|0,e||c.charging)},a)}):b()};var $c=/^.+\.((googlesyndication|googletagservices)\.com|doubleclick\.net)$/,ad=/^(aswift_\d+|google_ads_iframe_.+)$/,bd=/^div-gpt-ad-.+$/,cd=["ZGl2LnRhYm9vbGE=","ZGl2Lk9VVEJSQUlO"],dd=function(a){if(!a)return"";var b=Math.floor(Math.random()*a.length);b=""+b.toString(36)+(""+encodeURIComponent(a.charAt(b)))+".";var c=a.length;if(0==c)a=0;else{for(var d=305419896,f=0;f<c;f++)d^=(d<<5)+(d>>2)+a.charCodeAt(f)&4294967295;a=0<d?d:4294967296+d}return b+a.toString(36)},ed=function(a){return(a=qb(sa(a).match(pb)[3]||null))?a.toLowerCase():""},fd=function(a){return 10<=a.offsetWidth&&10<=a.offsetHeight},$a=function(a){return a&&1==a.nodeType&&"DIV"==a.nodeName?bd.test(a.id)||a.hasAttribute("data-google-query-id"):!1},hd=function(a){var b=a.body,c=[];if(!b)return c;a=b.getElementsByTagName("script");for(var d=a.length,f=0;f<d;f++){var e=a[f],g=e.src;g&&(e=(void 0!==e.nextElementSibling?e.nextElementSibling:Ya(e.nextSibling,!0))||Za(e))&&"DIV"==e.nodeName&&fd(e)&&(g=ed(g))&&!$c.test(g)&&c.push(new gd(e,g))}if(!b.querySelectorAll)return c;r(cd,function(a){for(var d=b.querySelectorAll(ac(a)),e=d.length,f=0;f<e;f++){var g=d[f];fd(g)&&c.push(new gd(g,a))}});return c},gd=function(a,b,c){var d=A(a),f=new y(0,0);var e=d?A(d):document;e=!w||9<=Number(Va)||"CSS1Compat"==(e?new bb(A(e)):ra||(ra=new bb)).a.compatMode?e.documentElement:e.body;if(a!=e){e=db(a);var g=(d?new bb(A(d)):ra||(ra=new bb)).a;d=g.scrollingElement?g.scrollingElement:x||"CSS1Compat"!=g.compatMode?g.body||g.documentElement:g.documentElement;g=g.parentWindow||g.defaultView;d=w&&Ua("10")&&g.pageYOffset!=d.scrollTop?new y(d.scrollLeft,d.scrollTop):new y(g.pageXOffset||d.scrollLeft,g.pageYOffset||d.scrollTop);f.a=e.left+d.a;f.b=e.top+d.b}b:{e=A(a);if(e.defaultView&&e.defaultView.getComputedStyle&&(e=e.defaultView.getComputedStyle(a,null))){e=e.display||e.getPropertyValue("display")||"";break b}e=""}if("none"!=(e||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=eb(a);else{e=a.style;d=e.display;g=e.visibility;var k=e.position;e.visibility="hidden";e.position="absolute";e.display="inline";a=eb(a);e.display=d;e.position=k;e.visibility=g}f=new cb(f.a,f.b,a.width,a.height);this.id=b;this.a=c||null;this.top=f.top;this.left=f.left;this.width=f.width;this.height=f.height},id=function(a){a=fb(a);if(!a)return null;var b=a.document;a=hd(b);var c=[];Aa(c,b.getElementsByTagName("iframe"));for(b=0;b<Math.min(c.length,50);b++){var d=c[b],f=d.src?sa(d.src):"",e=d.id||d.name||"";if(!ad.test(e))try{var g=d.contentDocument||d.contentWindow.document;if(f&&"about:blank"!=d.src)Aa(a,hd(g)),Aa(c,g.getElementsByTagName("iframe"));else{var k=null,m=void 0!==d.previousElementSibling?d.previousElementSibling:Ya(d.previousSibling,!1);if(m&&"SCRIPT"==m.nodeName&&m.src){var p=ed(m.src);k=$c.test(p)?null:p}((k=k||e)||!ab(d))&&fd(d)&&a.push(new gd(d,k))}}catch(F){k=ed(f),f=(f=qb(f.match(pb)[5]||null))&&"/"==f.charAt(0)?f.split("/",2)[1]:"",fd(d)&&!$c.test(k)&&a.push(new gd(d,k||e,f))}}Ca(a,function(a,b){return a.top!=b.top?a.top-b.top:a.left-b.left});var u=null;return va(a,function(a){if(null!=u&&a.top+a.height<=u.top+u.height&&a.left+a.width<=u.left+u.width)return!1;u=a;return!0})};var jd=function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.msRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame;if(c){var d,f=[],e=[],g,k,m,p,u=a.requestIdleCallback;u&&(p=function(a){k=a.timeRemaining();m=0});var F=function(a){d||(f.push(a-g),g=a,u&&(e.push(k||0),m||(k=0,m=u(p))),c(F))};c(function(a){g=a;u&&(m=u(p));c(F)});a.setTimeout(function(){b(f,e);d=!0},1E4)}else b([],[])};var Y={},Z={},kd={},ld={},md={},nd={},od={},pd={},ya=[{m:/^https?:\/\/((tpc|pagead2)\.googlesyndication\.com|static\.googleadsserving\.cn)\/pagead\//,l:(Y[1]=/adsbygoogle\.js/,Y[2]=/show_ads\.js/,Y[3]=/show_ads_impl\.js/,Y[21]=/js\/r\d+\/r\d+\/osd\.js/,Y[22]=/\/osd\.js/,Y[7]=/activeview\/osd_listener\.js/,Y[8]=/lidar\.js/,Y[10]=/client\/ext\/m_js_controller\.js/,Y[4]=/imgad\?id=/,Y[24]=/js\/r\d+\/r\d+\/rum\.js/,Y[25]=/js\/rum\.js/,Y[28]=/./,Y)},{m:/^https?:\/\/(tpc|pagead2)\.googlesyndication\.com\//,l:(Z[4]=/pageadimg(\/imgad)?\?id=/,Z[23]=/(daca_images\/)?simgad\/\d+/,Z[29]=/icore_images\/\d+/,Z[11]=/pub-config\/r\d+\/ca-pub-\d+\.js/,Z[16]=/\/safeframe\/\d-\d-\d\/html\/container\.html/,Z[17]=/\/safeframe\/\d-\d-\d\/js\/ext\.js/,Z)},{m:/^https?:\/\/googleads.g.doubleclick.net/,l:(kd[5]=/pagead\/ads\?/,kd[12]=/pagead\/html\/.*\/zrt_lookup\.html/,kd)},{m:/^https?:\/\/(secure)?pubads\.g\.doubleclick\.net/,l:(ld[14]=/\/gpt\/pubads_impl_\d+\.js/,ld[15]=/\/gampad\/ads\?/,ld)},{m:/^https?:\/\/www\.googletagservices\.com/,l:(md[13]=/\/tag\/js\/gpt\.js/,md)},{m:/^https?:\/\/fonts\.googleapis\.com\/css/,l:(nd[18]=/[?&]family=/,nd)},{m:/^https?:\/\/fonts\.gstatic\.com/,l:(od[19]=/\/s\//,od[20]=/\/l\//,od)},{m:/^https?:\/\//,C:!0,l:(pd[26]=function(a){return kb&&!/^https:\/\/d-\d+\.ampproject\.net\/\d+\/frame\.html$/.test(a)},pd)}],qd=function(a){switch(a){case "beacon":return 1;case "css":return 2;case "fetch":return 4;case "iframe":return 5;case "img":return 6;case "link":return 7;case "navigation":return 8;case "object":return 9;case "script":return 10;case "subdocument":return 11;case "svg":return 12;case "xmlhttprequest":return 13;default:return 0}},rd={woff:1,woff2:2,eot:3,ttf:4};function sd(a,b,c,d,f){var e=new Ic;U(e,1,a,0);U(e,2,f,0);V(e,4,Math.round(b.startTime));V(e,7,Math.round(b.duration));if(27==a)return e;d||U(e,3,1,0);V(e,5,Math.round(b.fetchStart));V(e,6,Math.round(b.responseEnd));a:{d=b.name;f=S(e,1,0);a=new Gc;switch(f){case 18:if(d=d.match(/[?&]family=([^&]+)/))d=h.decodeURIComponent(d[1]).split("|"),T(a,1,d||[]);break;case 19:if(d=d.match(/\/s\/(\w+)\/v(\d+)\/[^.\/]+\.(\w+)$/))f=h.parseInt(d[2],10),V(a,2,f),U(a,3,rd[d[3]]||0,0),d=d[1],R(a,1).push(d);break;case 20:if(f=d.match(/[?&]skey=([^&]+)/))f=f[1],R(a,1).push(f);if(d=d.match(/[?&]v=v(\d+)/))d=h.parseInt(d[1],10),V(a,2,d);break;default:break a}sc(e,21,a)}if(!b.responseStart)return e;b.domainLookupStart!=b.domainLookupEnd&&(V(e,8,Math.round(b.domainLookupStart)),V(e,9,Math.round(b.domainLookupEnd)));b.connectStart!=b.connectEnd&&(V(e,10,Math.round(b.connectStart)),V(e,11,Math.round(b.connectEnd)),b.secureConnectionStart&&V(e,12,Math.round(b.secureConnectionStart)));V(e,13,Math.round(b.requestStart));V(e,14,Math.round(b.responseStart));V(e,6,Math.round(b.responseEnd));void 0!==b.transferSize&&(V(e,15,b.transferSize),V(e,17,b.decodedBodySize||0),V(e,16,b.encodedBodySize||0));b.redirectStart&&(V(e,18,Math.round(b.redirectStart)),V(e,19,Math.round(b.redirectEnd)));c&&window.performance.timing&&V(e,20,c);return e}var td={},ud=(td[1]=!0,td[4]=!0,td[13]=!0,td),vd=function(a,b,c){var d=za(function(b){return b.m.test(a)});if(!d)return null;var f=hb(d.l,function(b){return"function"==ia(b)?b(a):b.test(a)});return!f&&2!=b&&ud[c]?null:{id:parseInt(f,10)||27,C:!!d.C}};function wd(a,b,c,d,f){var e=qd(a.initiatorType);(d=vd((void 0===f?"":f)||a.name,d,e))&&b.push(sd(d.id,a,c,d.C,e))}var xd=function(a,b){if(!a.performance||!a.performance.getEntriesByType)return[];var c=a.performance.getEntriesByType("resource"),d=0;a.performance.timing&&a!=h&&(d=a.performance.timing.navigationStart-h.performance.timing.navigationStart);var f=[];r(c,function(a){return wd(a,f,d,b)});c=a.performance.getEntriesByType("navigation");1==c.length&&wd(c[0],f,d,b,a.location?a.location.href:"");return f},yd=function(a,b,c){b=xd(b,c);b=wa(b,function(a){var b=new gc;var c=S(a,1,0);0!==c&&M(b,1,c);c=S(a,2,0);0!==c&&M(b,2,c);c=S(a,3,0);0!==c&&M(b,3,c);c=S(a,4,0);0!==c&&L(b,4,c);c=S(a,5,0);0!==c&&L(b,5,c);c=S(a,6,0);0!==c&&L(b,6,c);c=S(a,7,0);0!==c&&L(b,7,c);c=S(a,8,0);0!==c&&L(b,8,c);c=S(a,9,0);0!==c&&L(b,9,c);c=S(a,10,0);0!==c&&L(b,10,c);c=S(a,11,0);0!==c&&L(b,11,c);c=S(a,12,0);0!==c&&L(b,12,c);c=S(a,13,0);0!==c&&L(b,13,c);c=S(a,14,0);0!==c&&L(b,14,c);c=S(a,15,0);0!==c&&L(b,15,c);c=S(a,16,0);0!==c&&L(b,16,c);c=S(a,17,0);0!==c&&L(b,17,c);c=S(a,18,0);0!==c&&L(b,18,c);c=S(a,19,0);0!==c&&L(b,19,c);c=S(a,20,0);0!==c&&L(b,20,c);(c=W(a,Gc,21))&&kc(b,21,c,Hc);a=jc(b);return Zb(a).replace(/\.+$/,"")}).join("~");Mc(a,7,b,!0)},zd=function(a){if(!a.performance||!a.performance.getEntriesByType)return null;var b=a.performance.getEntriesByType("resource");a=b.length;b=xa(b,function(a,b){return a+(b.transferSize||0)},0);return{P:a,S:b}},Ad=function(a){return xa(a.performance&&a.performance.getEntriesByType?a.performance.getEntriesByType("resource"):[],function(a,c){a:{switch(qd(c.initiatorType)){case 10:case 13:case 4:break;default:var b=!1;break a}b=(b=qb(c.name.match(pb)[3]||null))?b?0<=rb(b):!1:!1}b&&(a.startTime=Math.min(a.v?a.startTime:Infinity,c.startTime),a.endTime=Math.max(a.endTime,c.startTime+c.duration),a.v++);return a},{v:0,startTime:0,endTime:0})};var Cd=function(a){Q(this,a,null,Bd)};q(Cd);var Bd=[[2]],Dd=function(a){Q(this,a,null,null)};q(Dd);var Ed=function(a,b){a=S(a,1,0);0!==a&&M(b,1,a)};var Fd={unloadEventStart:2,unloadEventEnd:3,redirectStart:4,redirectEnd:5,fetchStart:6,domainLookupStart:7,domainLookupEnd:8,connectStart:9,connectEnd:10,secureConnectionStart:11,requestStart:12,responseStart:13,responseEnd:14,domLoading:15,domInteractive:16,domContentLoadedEventStart:17,domContentLoadedEventEnd:18,domComplete:19,loadEventStart:20,loadEventEnd:21},Gd={U:"ctx",V:"c",W:"e",X:"gqid",Y:"qqid",T:"chm"},Hd=function(a){return(a=W(a,Uc,1))?S(a,2,0):0},Id=function(a){var b=W(a,Vc,2);b||(b=new Vc,sc(a,2,b));2==Hd(a)&&(a=b,U(a,7,!0,!1),U(a,9,!0,!1),U(a,10,!0,!1));return b},Jd=function(){var a=h.google_timing_params,b=new Wc;if(!a)return b;var c=new Uc;a.ctx&&U(c,2,parseInt(a.ctx,10),0);a.c&&V(c,1,parseInt(a.c,10));a.e&&U(c,5,String(a.e),"");a.gqid&&U(c,3,String(a.gqid),"");a.qqid&&U(c,4,String(a.qqid),"");sc(b,1,c);C(Gd,function(b){return delete a[b]});return b},Kd=function(a,b){2!==S(b,2,0)||h.google_chp||(a.g.chm=1);if(S(b,1,0)){var c=S(b,1,0);a.g.c=c}S(b,5,"")&&(c=S(b,5,""),a.g.e=c);c=S(b,2,0);a.g.ctx=c;c=S(b,3,"");a.g.gqid=c;b=S(b,4,"");a.g.qqid=b},Nd=function(a){var b=h.google_rum_config;b=b?new Wc(b):Jd();var c=Id(b),d=W(b,Uc,1);d&&Kd(a,d);if(d=h.google_js_reporting_queue){var f=function(b){a.s(b);a.u(b)};d.push=f;r(d,f);d.length=0}S(c,9,!1)&&.1>Math.random()&&Tc(a);1==Hd(b)&&Ld(a);Md(a,h,c,Hd(b))},Md=function(a,b,c,d){var f=Rb(113,function(){S(c,10,!1)&&Od(a,b);Pd(a,b);Qd(a,b,c,d)});"complete"!=b.document.readyState?D(b,"load",function(){b.setTimeout(f,0)}):f()},Pd=function(a,b){var c=b.google_rum_values;b.google_rum_values=void 0;if(c&&!(0>c.dt)&&(b=b.performance&&b.performance.timing)){var d=c.dt-b.navigationStart;C(c,function(b,c){if(-1!=b&&n(b)){switch(c){case "dt":b=d;break;case "bdt":b=d-b;break;default:b=d+b}J(a,c,4,b)}})}},Qd=function(a,b,c,d){S(c,1,!1)&&Rd(a,b);S(c,2,!1)&&0<S(c,3,0)&&Sd(a,S(c,3,0));S(c,7,!1)&&Td(a,b,d);S(c,8,!1)&&.1>Math.random()&&Ib(a,function(){return Ud(a,b)})};function Vd(a,b){b=Ad(b);b.v&&(J(a,"19",2,b.v),J(a,"17",2,b.startTime),J(a,"18",2,b.endTime))}var Td=function(a,b,c){yd(a,b,c);var d=va(b.document.getElementsByTagName("iframe"),nb);r(d,function(b){if(b=b.contentWindow)try{yd(a,b,c)}catch(e){}});1==c&&Vd(a,b);if(b=zd(b))J(a,"15",2,b.P),J(a,"16",2,b.S)},Rd=function(a,b){jd(b,function(b,d){if(b.length||d.length){var c={};b.length&&(c[1]=wa(b,function(a){a=Math.min(Math.max(a,0),4095);return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[a>>6]+"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[a&63]}).join(""));d.length&&(c[2]=wa(d,function(a){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."[Math.min(Math.max(a,0),63)|0]}).join(""));Nc(a,5,c)}})},Sd=function(a,b){Zc(b,function(c,d,f){if(null!=c&&null!=d&&null!=f){var e={};e[1]=b;e[2]=c;e[3]=d;e[4]=f;Nc(a,8,e)}})},Od=function(a,b){var c=b.performance&&b.performance.timing;if(c){var d=c.navigationStart;0<d&&(J(a,"1",1,d),C(Fd,function(b,e){e=c[e];0<e&&J(a,String(b),1,e-d)}))}},Ud=function(a,b){if(b=id(b))10<b.length&&(b.length=10),Kc(a,wa(b,function(a){return dd(a.id)+(a.a?"_"+dd(a.a):"")+"_"+Math.floor(a.top).toString(36)+"_"+Math.floor(a.left).toString(36)+"_"+Math.floor(a.width).toString(36)+"_"+Math.floor(a.height).toString(36)}).join("~"))},Ld=function(a){var b=Xc();b&&D(h,b,function(){a:{var b=Fb();if(b){var d=h.document;switch({visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[d.webkitVisibilityState||d.mozVisibilityState||d.visibilityState||""]||0){case 1:var f=1;break;case 2:f=2;break;default:d=void 0;break a}d=new Cd;V(d,1,Math.round(b));b=new Dd;U(b,1,f,0);tc(d,2,Bd[0],b);b=new gc;f=S(d,1,0);0!==f&&L(b,1,f);(f=W(d,Dd,2))&&kc(b,2,f,Ed);d=jc(b);d=Zb(d).replace(/\.+$/,"");J(a,"1",4,d)}d=void 0}return d})};Mb(Nb,112,function(){var a=new X(1,"https:","csi.gstatic.com","/csi?v=2&s=pagead&action=","csi_pagead",5);a.b=!0;Nd(a)},Sb);}).call(this);
