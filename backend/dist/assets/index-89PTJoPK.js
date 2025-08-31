(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))o(f);new MutationObserver(f=>{for(const h of f)if(h.type==="childList")for(const v of h.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&o(v)}).observe(document,{childList:!0,subtree:!0});function c(f){const h={};return f.integrity&&(h.integrity=f.integrity),f.referrerPolicy&&(h.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?h.credentials="include":f.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(f){if(f.ep)return;f.ep=!0;const h=c(f);fetch(f.href,h)}})();function cp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ku={exports:{}},Pl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var th;function sp(){if(th)return Pl;th=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function c(o,f,h){var v=null;if(h!==void 0&&(v=""+h),f.key!==void 0&&(v=""+f.key),"key"in f){h={};for(var E in f)E!=="key"&&(h[E]=f[E])}else h=f;return f=h.ref,{$$typeof:i,type:o,key:v,ref:f!==void 0?f:null,props:h}}return Pl.Fragment=u,Pl.jsx=c,Pl.jsxs=c,Pl}var eh;function fp(){return eh||(eh=1,Ku.exports=sp()),Ku.exports}var S=fp(),Ju={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function dp(){if(nh)return lt;nh=1;var i=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),v=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),N=Symbol.iterator;function D(g){return g===null||typeof g!="object"?null:(g=N&&g[N]||g["@@iterator"],typeof g=="function"?g:null)}var H={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,_={};function U(g,q,Y){this.props=g,this.context=q,this.refs=_,this.updater=Y||H}U.prototype.isReactComponent={},U.prototype.setState=function(g,q){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,q,"setState")},U.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function B(){}B.prototype=U.prototype;function V(g,q,Y){this.props=g,this.context=q,this.refs=_,this.updater=Y||H}var G=V.prototype=new B;G.constructor=V,k(G,U.prototype),G.isPureReactComponent=!0;var it=Array.isArray,Q={H:null,A:null,T:null,S:null},mt=Object.prototype.hasOwnProperty;function gt(g,q,Y,J,Z,rt){return Y=rt.ref,{$$typeof:i,type:g,key:q,ref:Y!==void 0?Y:null,props:rt}}function At(g,q){return gt(g.type,q,void 0,void 0,void 0,g.props)}function L(g){return typeof g=="object"&&g!==null&&g.$$typeof===i}function at(g){var q={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(Y){return q[Y]})}var Xt=/\/+/g;function me(g,q){return typeof g=="object"&&g!==null&&g.key!=null?at(""+g.key):q.toString(36)}function pe(){}function De(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(pe,pe):(g.status="pending",g.then(function(q){g.status==="pending"&&(g.status="fulfilled",g.value=q)},function(q){g.status==="pending"&&(g.status="rejected",g.reason=q)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function Kt(g,q,Y,J,Z){var rt=typeof g;(rt==="undefined"||rt==="boolean")&&(g=null);var et=!1;if(g===null)et=!0;else switch(rt){case"bigint":case"string":case"number":et=!0;break;case"object":switch(g.$$typeof){case i:case u:et=!0;break;case z:return et=g._init,Kt(et(g._payload),q,Y,J,Z)}}if(et)return Z=Z(g),et=J===""?"."+me(g,0):J,it(Z)?(Y="",et!=null&&(Y=et.replace(Xt,"$&/")+"/"),Kt(Z,q,Y,"",function(Ct){return Ct})):Z!=null&&(L(Z)&&(Z=At(Z,Y+(Z.key==null||g&&g.key===Z.key?"":(""+Z.key).replace(Xt,"$&/")+"/")+et)),q.push(Z)),1;et=0;var te=J===""?".":J+":";if(it(g))for(var pt=0;pt<g.length;pt++)J=g[pt],rt=te+me(J,pt),et+=Kt(J,q,Y,rt,Z);else if(pt=D(g),typeof pt=="function")for(g=pt.call(g),pt=0;!(J=g.next()).done;)J=J.value,rt=te+me(J,pt++),et+=Kt(J,q,Y,rt,Z);else if(rt==="object"){if(typeof g.then=="function")return Kt(De(g),q,Y,J,Z);throw q=String(g),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return et}function X(g,q,Y){if(g==null)return g;var J=[],Z=0;return Kt(g,J,"","",function(rt){return q.call(Y,rt,Z++)}),J}function tt(g){if(g._status===-1){var q=g._result;q=q(),q.then(function(Y){(g._status===0||g._status===-1)&&(g._status=1,g._result=Y)},function(Y){(g._status===0||g._status===-1)&&(g._status=2,g._result=Y)}),g._status===-1&&(g._status=0,g._result=q)}if(g._status===1)return g._result.default;throw g._result}var F=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)};function yt(){}return lt.Children={map:X,forEach:function(g,q,Y){X(g,function(){q.apply(this,arguments)},Y)},count:function(g){var q=0;return X(g,function(){q++}),q},toArray:function(g){return X(g,function(q){return q})||[]},only:function(g){if(!L(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},lt.Component=U,lt.Fragment=c,lt.Profiler=f,lt.PureComponent=V,lt.StrictMode=o,lt.Suspense=b,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,lt.act=function(){throw Error("act(...) is not supported in production builds of React.")},lt.cache=function(g){return function(){return g.apply(null,arguments)}},lt.cloneElement=function(g,q,Y){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var J=k({},g.props),Z=g.key,rt=void 0;if(q!=null)for(et in q.ref!==void 0&&(rt=void 0),q.key!==void 0&&(Z=""+q.key),q)!mt.call(q,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&q.ref===void 0||(J[et]=q[et]);var et=arguments.length-2;if(et===1)J.children=Y;else if(1<et){for(var te=Array(et),pt=0;pt<et;pt++)te[pt]=arguments[pt+2];J.children=te}return gt(g.type,Z,void 0,void 0,rt,J)},lt.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:h,_context:g},g},lt.createElement=function(g,q,Y){var J,Z={},rt=null;if(q!=null)for(J in q.key!==void 0&&(rt=""+q.key),q)mt.call(q,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(Z[J]=q[J]);var et=arguments.length-2;if(et===1)Z.children=Y;else if(1<et){for(var te=Array(et),pt=0;pt<et;pt++)te[pt]=arguments[pt+2];Z.children=te}if(g&&g.defaultProps)for(J in et=g.defaultProps,et)Z[J]===void 0&&(Z[J]=et[J]);return gt(g,rt,void 0,void 0,null,Z)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(g){return{$$typeof:E,render:g}},lt.isValidElement=L,lt.lazy=function(g){return{$$typeof:z,_payload:{_status:-1,_result:g},_init:tt}},lt.memo=function(g,q){return{$$typeof:m,type:g,compare:q===void 0?null:q}},lt.startTransition=function(g){var q=Q.T,Y={};Q.T=Y;try{var J=g(),Z=Q.S;Z!==null&&Z(Y,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(yt,F)}catch(rt){F(rt)}finally{Q.T=q}},lt.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},lt.use=function(g){return Q.H.use(g)},lt.useActionState=function(g,q,Y){return Q.H.useActionState(g,q,Y)},lt.useCallback=function(g,q){return Q.H.useCallback(g,q)},lt.useContext=function(g){return Q.H.useContext(g)},lt.useDebugValue=function(){},lt.useDeferredValue=function(g,q){return Q.H.useDeferredValue(g,q)},lt.useEffect=function(g,q){return Q.H.useEffect(g,q)},lt.useId=function(){return Q.H.useId()},lt.useImperativeHandle=function(g,q,Y){return Q.H.useImperativeHandle(g,q,Y)},lt.useInsertionEffect=function(g,q){return Q.H.useInsertionEffect(g,q)},lt.useLayoutEffect=function(g,q){return Q.H.useLayoutEffect(g,q)},lt.useMemo=function(g,q){return Q.H.useMemo(g,q)},lt.useOptimistic=function(g,q){return Q.H.useOptimistic(g,q)},lt.useReducer=function(g,q,Y){return Q.H.useReducer(g,q,Y)},lt.useRef=function(g){return Q.H.useRef(g)},lt.useState=function(g){return Q.H.useState(g)},lt.useSyncExternalStore=function(g,q,Y){return Q.H.useSyncExternalStore(g,q,Y)},lt.useTransition=function(){return Q.H.useTransition()},lt.version="19.0.0",lt}var ah;function rc(){return ah||(ah=1,Ju.exports=dp()),Ju.exports}var w=rc();const bt=cp(w);var $u={exports:{}},Wl={},Pu={exports:{}},Wu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lh;function hp(){return lh||(lh=1,function(i){function u(X,tt){var F=X.length;X.push(tt);t:for(;0<F;){var yt=F-1>>>1,g=X[yt];if(0<f(g,tt))X[yt]=tt,X[F]=g,F=yt;else break t}}function c(X){return X.length===0?null:X[0]}function o(X){if(X.length===0)return null;var tt=X[0],F=X.pop();if(F!==tt){X[0]=F;t:for(var yt=0,g=X.length,q=g>>>1;yt<q;){var Y=2*(yt+1)-1,J=X[Y],Z=Y+1,rt=X[Z];if(0>f(J,F))Z<g&&0>f(rt,J)?(X[yt]=rt,X[Z]=F,yt=Z):(X[yt]=J,X[Y]=F,yt=Y);else if(Z<g&&0>f(rt,F))X[yt]=rt,X[Z]=F,yt=Z;else break t}}return tt}function f(X,tt){var F=X.sortIndex-tt.sortIndex;return F!==0?F:X.id-tt.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;i.unstable_now=function(){return h.now()}}else{var v=Date,E=v.now();i.unstable_now=function(){return v.now()-E}}var b=[],m=[],z=1,N=null,D=3,H=!1,k=!1,_=!1,U=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,V=typeof setImmediate<"u"?setImmediate:null;function G(X){for(var tt=c(m);tt!==null;){if(tt.callback===null)o(m);else if(tt.startTime<=X)o(m),tt.sortIndex=tt.expirationTime,u(b,tt);else break;tt=c(m)}}function it(X){if(_=!1,G(X),!k)if(c(b)!==null)k=!0,De();else{var tt=c(m);tt!==null&&Kt(it,tt.startTime-X)}}var Q=!1,mt=-1,gt=5,At=-1;function L(){return!(i.unstable_now()-At<gt)}function at(){if(Q){var X=i.unstable_now();At=X;var tt=!0;try{t:{k=!1,_&&(_=!1,B(mt),mt=-1),H=!0;var F=D;try{e:{for(G(X),N=c(b);N!==null&&!(N.expirationTime>X&&L());){var yt=N.callback;if(typeof yt=="function"){N.callback=null,D=N.priorityLevel;var g=yt(N.expirationTime<=X);if(X=i.unstable_now(),typeof g=="function"){N.callback=g,G(X),tt=!0;break e}N===c(b)&&o(b),G(X)}else o(b);N=c(b)}if(N!==null)tt=!0;else{var q=c(m);q!==null&&Kt(it,q.startTime-X),tt=!1}}break t}finally{N=null,D=F,H=!1}tt=void 0}}finally{tt?Xt():Q=!1}}}var Xt;if(typeof V=="function")Xt=function(){V(at)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,pe=me.port2;me.port1.onmessage=at,Xt=function(){pe.postMessage(null)}}else Xt=function(){U(at,0)};function De(){Q||(Q=!0,Xt())}function Kt(X,tt){mt=U(function(){X(i.unstable_now())},tt)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(X){X.callback=null},i.unstable_continueExecution=function(){k||H||(k=!0,De())},i.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):gt=0<X?Math.floor(1e3/X):5},i.unstable_getCurrentPriorityLevel=function(){return D},i.unstable_getFirstCallbackNode=function(){return c(b)},i.unstable_next=function(X){switch(D){case 1:case 2:case 3:var tt=3;break;default:tt=D}var F=D;D=tt;try{return X()}finally{D=F}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(X,tt){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var F=D;D=X;try{return tt()}finally{D=F}},i.unstable_scheduleCallback=function(X,tt,F){var yt=i.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?yt+F:yt):F=yt,X){case 1:var g=-1;break;case 2:g=250;break;case 5:g=1073741823;break;case 4:g=1e4;break;default:g=5e3}return g=F+g,X={id:z++,callback:tt,priorityLevel:X,startTime:F,expirationTime:g,sortIndex:-1},F>yt?(X.sortIndex=F,u(m,X),c(b)===null&&X===c(m)&&(_?(B(mt),mt=-1):_=!0,Kt(it,F-yt))):(X.sortIndex=g,u(b,X),k||H||(k=!0,De())),X},i.unstable_shouldYield=L,i.unstable_wrapCallback=function(X){var tt=D;return function(){var F=D;D=tt;try{return X.apply(this,arguments)}finally{D=F}}}}(Wu)),Wu}var ih;function mp(){return ih||(ih=1,Pu.exports=hp()),Pu.exports}var Fu={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rh;function pp(){if(rh)return It;rh=1;var i=rc();function u(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)m+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var o={d:{f:c,r:function(){throw Error(u(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function h(b,m,z){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:N==null?null:""+N,children:b,containerInfo:m,implementation:z}}var v=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,It.createPortal=function(b,m){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(u(299));return h(b,m,null,z)},It.flushSync=function(b){var m=v.T,z=o.p;try{if(v.T=null,o.p=2,b)return b()}finally{v.T=m,o.p=z,o.d.f()}},It.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,o.d.C(b,m))},It.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},It.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var z=m.as,N=E(z,m.crossOrigin),D=typeof m.integrity=="string"?m.integrity:void 0,H=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;z==="style"?o.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:N,integrity:D,fetchPriority:H}):z==="script"&&o.d.X(b,{crossOrigin:N,integrity:D,fetchPriority:H,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},It.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var z=E(m.as,m.crossOrigin);o.d.M(b,{crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&o.d.M(b)},It.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var z=m.as,N=E(z,m.crossOrigin);o.d.L(b,z,{crossOrigin:N,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},It.preloadModule=function(b,m){if(typeof b=="string")if(m){var z=E(m.as,m.crossOrigin);o.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:z,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else o.d.m(b)},It.requestFormReset=function(b){o.d.r(b)},It.unstable_batchedUpdates=function(b,m){return b(m)},It.useFormState=function(b,m,z){return v.H.useFormState(b,m,z)},It.useFormStatus=function(){return v.H.useHostTransitionStatus()},It.version="19.0.0",It}var oh;function bp(){if(oh)return Fu.exports;oh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),Fu.exports=pp(),Fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function vp(){if(uh)return Wl;uh=1;var i=mp(),u=rc(),c=bp();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var h=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.consumer"),H=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),it=Symbol.for("react.memo_cache_sentinel"),Q=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Symbol.for("react.client.reference");function At(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===gt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case E:return"Portal";case z:return"Profiler";case m:return"StrictMode";case _:return"Suspense";case U:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Provider";case D:return(t._context.displayName||"Context")+".Consumer";case k:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return e=t.displayName||null,e!==null?e:At(t.type)||"Memo";case V:e=t._payload,t=t._init;try{return At(t(e))}catch{}}return null}var L=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at=Object.assign,Xt,me;function pe(t){if(Xt===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xt=e&&e[1]||"",me=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+t+me}var De=!1;function Kt(t,e){if(!t||De)return"";De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(R){var A=R}Reflect.construct(t,[],C)}else{try{C.call()}catch(R){A=R}t.call(C.prototype)}}else{try{throw Error()}catch(R){A=R}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(R){if(R&&A&&typeof R.stack=="string")return[R.stack,A.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),s=r[0],d=r[1];if(s&&d){var p=s.split(`
`),x=d.split(`
`);for(l=a=0;a<p.length&&!p[a].includes("DetermineComponentFrameRoot");)a++;for(;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;if(a===p.length||l===x.length)for(a=p.length-1,l=x.length-1;1<=a&&0<=l&&p[a]!==x[l];)l--;for(;1<=a&&0<=l;a--,l--)if(p[a]!==x[l]){if(a!==1||l!==1)do if(a--,l--,0>l||p[a]!==x[l]){var M=`
`+p[a].replace(" at new "," at ");return t.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",t.displayName)),M}while(1<=a&&0<=l);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?pe(n):""}function X(t){switch(t.tag){case 26:case 27:case 5:return pe(t.type);case 16:return pe("Lazy");case 13:return pe("Suspense");case 19:return pe("SuspenseList");case 0:case 15:return t=Kt(t.type,!1),t;case 11:return t=Kt(t.type.render,!1),t;case 1:return t=Kt(t.type,!0),t;default:return""}}function tt(t){try{var e="";do e+=X(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function F(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yt(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function g(t){if(F(t)!==t)throw Error(o(188))}function q(t){var e=t.alternate;if(!e){if(e=F(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return g(l),t;if(r===a)return g(l),e;r=r.sibling}throw Error(o(188))}if(n.return!==a.return)n=l,a=r;else{for(var s=!1,d=l.child;d;){if(d===n){s=!0,n=l,a=r;break}if(d===a){s=!0,a=l,n=r;break}d=d.sibling}if(!s){for(d=r.child;d;){if(d===n){s=!0,n=r,a=l;break}if(d===a){s=!0,a=r,n=l;break}d=d.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function Y(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=Y(t),e!==null)return e;t=t.sibling}return null}var J=Array.isArray,Z=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rt={pending:!1,data:null,method:null,action:null},et=[],te=-1;function pt(t){return{current:t}}function Ct(t){0>te||(t.current=et[te],et[te]=null,te--)}function wt(t,e){te++,et[te]=t.current,t.current=e}var He=pt(null),Ia=pt(null),dn=pt(null),oi=pt(null);function ui(t,e){switch(wt(dn,e),wt(Ia,t),wt(He,null),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)&&(e=e.namespaceURI)?kd(e):0;break;default:if(t=t===8?e.parentNode:e,e=t.tagName,t=t.namespaceURI)t=kd(t),e=_d(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ct(He),wt(He,e)}function ua(){Ct(He),Ct(Ia),Ct(dn)}function Hr(t){t.memoizedState!==null&&wt(oi,t);var e=He.current,n=_d(e,t.type);e!==n&&(wt(Ia,t),wt(He,n))}function ci(t){Ia.current===t&&(Ct(He),Ct(Ia)),oi.current===t&&(Ct(oi),Zl._currentValue=rt)}var qr=Object.prototype.hasOwnProperty,Br=i.unstable_scheduleCallback,Yr=i.unstable_cancelCallback,Lh=i.unstable_shouldYield,Xh=i.unstable_requestPaint,qe=i.unstable_now,Gh=i.unstable_getCurrentPriorityLevel,vc=i.unstable_ImmediatePriority,gc=i.unstable_UserBlockingPriority,si=i.unstable_NormalPriority,Qh=i.unstable_LowPriority,yc=i.unstable_IdlePriority,Zh=i.log,Vh=i.unstable_setDisableYieldValue,tl=null,re=null;function Kh(t){if(re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}function hn(t){if(typeof Zh=="function"&&Vh(t),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(tl,t)}catch{}}var oe=Math.clz32?Math.clz32:Ph,Jh=Math.log,$h=Math.LN2;function Ph(t){return t>>>=0,t===0?32:31-(Jh(t)/$h|0)|0}var fi=128,di=4194304;function Bn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hi(t,e){var n=t.pendingLanes;if(n===0)return 0;var a=0,l=t.suspendedLanes,r=t.pingedLanes,s=t.warmLanes;t=t.finishedLanes!==0;var d=n&134217727;return d!==0?(n=d&~l,n!==0?a=Bn(n):(r&=d,r!==0?a=Bn(r):t||(s=d&~s,s!==0&&(a=Bn(s))))):(d=n&~l,d!==0?a=Bn(d):r!==0?a=Bn(r):t||(s=n&~s,s!==0&&(a=Bn(s)))),a===0?0:e!==0&&e!==a&&!(e&l)&&(l=a&-a,s=e&-e,l>=s||l===32&&(s&4194176)!==0)?e:a}function el(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function Wh(t,e){switch(t){case 1:case 2:case 4:case 8:return e+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xc(){var t=fi;return fi<<=1,!(fi&4194176)&&(fi=128),t}function Sc(){var t=di;return di<<=1,!(di&62914560)&&(di=4194304),t}function Lr(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function nl(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fh(t,e,n,a,l,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var d=t.entanglements,p=t.expirationTimes,x=t.hiddenUpdates;for(n=s&~n;0<n;){var M=31-oe(n),C=1<<M;d[M]=0,p[M]=-1;var A=x[M];if(A!==null)for(x[M]=null,M=0;M<A.length;M++){var R=A[M];R!==null&&(R.lane&=-536870913)}n&=~C}a!==0&&Ec(t,a,0),r!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function Ec(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-oe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194218}function Oc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-oe(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Tc(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function Ac(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:Jd(t.type))}function Ih(t,e){var n=Z.p;try{return Z.p=t,e()}finally{Z.p=n}}var mn=Math.random().toString(36).slice(2),Wt="__reactFiber$"+mn,ae="__reactProps$"+mn,ca="__reactContainer$"+mn,Xr="__reactEvents$"+mn,t0="__reactListeners$"+mn,e0="__reactHandles$"+mn,wc="__reactResources$"+mn,al="__reactMarker$"+mn;function Gr(t){delete t[Wt],delete t[ae],delete t[Xr],delete t[t0],delete t[e0]}function Yn(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ca]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nd(t);t!==null;){if(n=t[Wt])return n;t=Nd(t)}return e}t=n,n=t.parentNode}return null}function sa(t){if(t=t[Wt]||t[ca]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function ll(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function fa(t){var e=t[wc];return e||(e=t[wc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Gt(t){t[al]=!0}var zc=new Set,Dc={};function Ln(t,e){da(t,e),da(t+"Capture",e)}function da(t,e){for(Dc[t]=e,t=0;t<e.length;t++)zc.add(e[t])}var Ze=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),n0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),kc={},_c={};function a0(t){return qr.call(_c,t)?!0:qr.call(kc,t)?!1:n0.test(t)?_c[t]=!0:(kc[t]=!0,!1)}function mi(t,e,n){if(a0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function pi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Ve(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}function be(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l0(t){var e=Rc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bi(t){t._valueTracker||(t._valueTracker=l0(t))}function Mc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Rc(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var i0=/[\n"\\]/g;function ve(t){return t.replace(i0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function Qr(t,e,n,a,l,r,s,d){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+be(e)):t.value!==""+be(e)&&(t.value=""+be(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?Zr(t,s,be(e)):n!=null?Zr(t,s,be(n)):a!=null&&t.removeAttribute("value"),l==null&&r!=null&&(t.defaultChecked=!!r),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?t.name=""+be(d):t.removeAttribute("name")}function Nc(t,e,n,a,l,r,s,d){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+be(n):"",e=e!=null?""+be(e):n,d||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=d?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function Zr(t,e,n){e==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ha(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+be(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function jc(t,e,n){if(e!=null&&(e=""+be(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+be(n):""}function Cc(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(o(92));if(J(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=be(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var r0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uc(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||r0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Hc(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&Uc(t,l,a)}else for(var r in e)e.hasOwnProperty(r)&&Uc(t,r,e[r])}function Vr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var o0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return u0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Kr=null;function Jr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,ba=null;function qc(t){var e=sa(t);if(e&&(t=e.stateNode)){var n=t[ae]||null;t:switch(t=e.stateNode,e.type){case"input":if(Qr(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ve(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[ae]||null;if(!l)throw Error(o(90));Qr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Mc(a)}break t;case"textarea":jc(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}}}var $r=!1;function Bc(t,e,n){if($r)return t(e,n);$r=!0;try{var a=t(e);return a}finally{if($r=!1,(pa!==null||ba!==null)&&(er(),pa&&(e=pa,t=ba,ba=pa=null,qc(e),t)))for(e=0;e<t.length;e++)qc(t[e])}}function il(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ae]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var Pr=!1;if(Ze)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){Pr=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{Pr=!1}var pn=null,Wr=null,yi=null;function Yc(){if(yi)return yi;var t,e=Wr,n=e.length,a,l="value"in pn?pn.value:pn.textContent,r=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[r-a];a++);return yi=l.slice(t,1<a?1-a:void 0)}function xi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Si(){return!0}function Lc(){return!1}function le(t){function e(n,a,l,r,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var d in t)t.hasOwnProperty(d)&&(n=t[d],this[d]=n?n(r):r[d]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Si:Lc,this.isPropagationStopped=Lc,this}return at(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),e}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=le(Xn),ol=at({},Xn,{view:0,detail:0}),c0=le(ol),Fr,Ir,ul,Oi=at({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eo,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ul&&(ul&&t.type==="mousemove"?(Fr=t.screenX-ul.screenX,Ir=t.screenY-ul.screenY):Ir=Fr=0,ul=t),Fr)},movementY:function(t){return"movementY"in t?t.movementY:Ir}}),Xc=le(Oi),s0=at({},Oi,{dataTransfer:0}),f0=le(s0),d0=at({},ol,{relatedTarget:0}),to=le(d0),h0=at({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=le(h0),p0=at({},Xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),b0=le(p0),v0=at({},Xn,{data:0}),Gc=le(v0),g0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=x0[t])?!!e[t]:!1}function eo(){return S0}var E0=at({},ol,{key:function(t){if(t.key){var e=g0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?y0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eo,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O0=le(E0),T0=at({},Oi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qc=le(T0),A0=at({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eo}),w0=le(A0),z0=at({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=le(z0),k0=at({},Oi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),_0=le(k0),R0=at({},Xn,{newState:0,oldState:0}),M0=le(R0),N0=[9,13,27,32],no=Ze&&"CompositionEvent"in window,cl=null;Ze&&"documentMode"in document&&(cl=document.documentMode);var j0=Ze&&"TextEvent"in window&&!cl,Zc=Ze&&(!no||cl&&8<cl&&11>=cl),Vc=" ",Kc=!1;function Jc(t,e){switch(t){case"keyup":return N0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $c(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var va=!1;function C0(t,e){switch(t){case"compositionend":return $c(e);case"keypress":return e.which!==32?null:(Kc=!0,Vc);case"textInput":return t=e.data,t===Vc&&Kc?null:t;default:return null}}function U0(t,e){if(va)return t==="compositionend"||!no&&Jc(t,e)?(t=Yc(),yi=Wr=pn=null,va=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zc&&e.locale!=="ko"?null:e.data;default:return null}}var H0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!H0[t.type]:e==="textarea"}function Wc(t,e,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,e=rr(e,"onChange"),0<e.length&&(n=new Ei("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var sl=null,fl=null;function q0(t){Td(t,0)}function Ti(t){var e=ll(t);if(Mc(e))return t}function Fc(t,e){if(t==="change")return e}var Ic=!1;if(Ze){var ao;if(Ze){var lo="oninput"in document;if(!lo){var ts=document.createElement("div");ts.setAttribute("oninput","return;"),lo=typeof ts.oninput=="function"}ao=lo}else ao=!1;Ic=ao&&(!document.documentMode||9<document.documentMode)}function es(){sl&&(sl.detachEvent("onpropertychange",ns),fl=sl=null)}function ns(t){if(t.propertyName==="value"&&Ti(fl)){var e=[];Wc(e,fl,t,Jr(t)),Bc(q0,e)}}function B0(t,e,n){t==="focusin"?(es(),sl=e,fl=n,sl.attachEvent("onpropertychange",ns)):t==="focusout"&&es()}function Y0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ti(fl)}function L0(t,e){if(t==="click")return Ti(e)}function X0(t,e){if(t==="input"||t==="change")return Ti(e)}function G0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ue=typeof Object.is=="function"?Object.is:G0;function dl(t,e){if(ue(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!qr.call(e,l)||!ue(t[l],e[l]))return!1}return!0}function as(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ls(t,e){var n=as(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=as(n)}}function is(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?is(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function rs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vi(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vi(t.document)}return e}function io(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q0(t,e){var n=rs(e);e=t.focusedElem;var a=t.selectionRange;if(n!==e&&e&&e.ownerDocument&&is(e.ownerDocument.documentElement,e)){if(a!==null&&io(e)){if(t=a.start,n=a.end,n===void 0&&(n=t),"selectionStart"in e)e.selectionStart=t,e.selectionEnd=Math.min(n,e.value.length);else if(n=(t=e.ownerDocument||document)&&t.defaultView||window,n.getSelection){n=n.getSelection();var l=e.textContent.length,r=Math.min(a.start,l);a=a.end===void 0?r:Math.min(a.end,l),!n.extend&&r>a&&(l=a,a=r,r=l),l=ls(e,r);var s=ls(e,a);l&&s&&(n.rangeCount!==1||n.anchorNode!==l.node||n.anchorOffset!==l.offset||n.focusNode!==s.node||n.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),n.removeAllRanges(),r>a?(n.addRange(t),n.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),n.addRange(t)))}}for(t=[],n=e;n=n.parentNode;)n.nodeType===1&&t.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof e.focus=="function"&&e.focus(),e=0;e<t.length;e++)n=t[e],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Z0=Ze&&"documentMode"in document&&11>=document.documentMode,ga=null,ro=null,hl=null,oo=!1;function os(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oo||ga==null||ga!==vi(a)||(a=ga,"selectionStart"in a&&io(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),hl&&dl(hl,a)||(hl=a,a=rr(ro,"onSelect"),0<a.length&&(e=new Ei("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=ga)))}function Gn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ya={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},uo={},us={};Ze&&(us=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Qn(t){if(uo[t])return uo[t];if(!ya[t])return t;var e=ya[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in us)return uo[t]=e[n];return t}var cs=Qn("animationend"),ss=Qn("animationiteration"),fs=Qn("animationstart"),V0=Qn("transitionrun"),K0=Qn("transitionstart"),J0=Qn("transitioncancel"),ds=Qn("transitionend"),hs=new Map,ms="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ke(t,e){hs.set(t,e),Ln(e,[t])}var ge=[],xa=0,co=0;function Ai(){for(var t=xa,e=co=xa=0;e<t;){var n=ge[e];ge[e++]=null;var a=ge[e];ge[e++]=null;var l=ge[e];ge[e++]=null;var r=ge[e];if(ge[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}r!==0&&ps(n,l,r)}}function wi(t,e,n,a){ge[xa++]=t,ge[xa++]=e,ge[xa++]=n,ge[xa++]=a,co|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function so(t,e,n,a){return wi(t,e,n,a),zi(t)}function bn(t,e){return wi(t,null,null,e),zi(t)}function ps(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=t.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(l=!0)),t=r,r=r.return;l&&e!==null&&t.tag===3&&(r=t.stateNode,l=31-oe(n),r=r.hiddenUpdates,t=r[l],t===null?r[l]=[e]:t.push(e),e.lane=n|536870912)}function zi(t){if(50<ql)throw ql=0,vu=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Sa={},bs=new WeakMap;function ye(t,e){if(typeof t=="object"&&t!==null){var n=bs.get(t);return n!==void 0?n:(e={value:t,source:e,stack:tt(e)},bs.set(t,e),e)}return{value:t,source:e,stack:tt(e)}}var Ea=[],Oa=0,Di=null,ki=0,xe=[],Se=0,Zn=null,Ke=1,Je="";function Vn(t,e){Ea[Oa++]=ki,Ea[Oa++]=Di,Di=t,ki=e}function vs(t,e,n){xe[Se++]=Ke,xe[Se++]=Je,xe[Se++]=Zn,Zn=t;var a=Ke;t=Je;var l=32-oe(a)-1;a&=~(1<<l),n+=1;var r=32-oe(e)+l;if(30<r){var s=l-l%5;r=(a&(1<<s)-1).toString(32),a>>=s,l-=s,Ke=1<<32-oe(e)+l|n<<l|a,Je=r+t}else Ke=1<<r|n<<l|a,Je=t}function fo(t){t.return!==null&&(Vn(t,1),vs(t,1,0))}function ho(t){for(;t===Di;)Di=Ea[--Oa],Ea[Oa]=null,ki=Ea[--Oa],Ea[Oa]=null;for(;t===Zn;)Zn=xe[--Se],xe[Se]=null,Je=xe[--Se],xe[Se]=null,Ke=xe[--Se],xe[Se]=null}var ee=null,Jt=null,dt=!1,_e=null,Be=!1,mo=Error(o(519));function Kn(t){var e=Error(o(418,""));throw bl(ye(e,t)),mo}function gs(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Wt]=t,e[ae]=a,n){case"dialog":st("cancel",e),st("close",e);break;case"iframe":case"object":case"embed":st("load",e);break;case"video":case"audio":for(n=0;n<Yl.length;n++)st(Yl[n],e);break;case"source":st("error",e);break;case"img":case"image":case"link":st("error",e),st("load",e);break;case"details":st("toggle",e);break;case"input":st("invalid",e),Nc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),bi(e);break;case"select":st("invalid",e);break;case"textarea":st("invalid",e),Cc(e,a.value,a.defaultValue,a.children),bi(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Dd(e.textContent,n)?(a.popover!=null&&(st("beforetoggle",e),st("toggle",e)),a.onScroll!=null&&st("scroll",e),a.onScrollEnd!=null&&st("scrollend",e),a.onClick!=null&&(e.onclick=or),e=!0):e=!1,e||Kn(t)}function ys(t){for(ee=t.return;ee;)switch(ee.tag){case 3:case 27:Be=!0;return;case 5:case 13:Be=!1;return;default:ee=ee.return}}function ml(t){if(t!==ee)return!1;if(!dt)return ys(t),dt=!0,!1;var e=!1,n;if((n=t.tag!==3&&t.tag!==27)&&((n=t.tag===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||ju(t.type,t.memoizedProps)),n=!n),n&&(e=!0),e&&Jt&&Kn(t),ys(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Jt=Me(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Jt=null}}else Jt=ee?Me(t.stateNode.nextSibling):null;return!0}function pl(){Jt=ee=null,dt=!1}function bl(t){_e===null?_e=[t]:_e.push(t)}var vl=Error(o(460)),xs=Error(o(474)),po={then:function(){}};function Ss(t){return t=t.status,t==="fulfilled"||t==="rejected"}function _i(){}function Es(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(_i,_i),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===vl?Error(o(483)):t;default:if(typeof e.status=="string")e.then(_i,_i);else{if(t=Ot,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,t===vl?Error(o(483)):t}throw gl=e,vl}}var gl=null;function Os(){if(gl===null)throw Error(o(459));var t=gl;return gl=null,t}var Ta=null,yl=0;function Ri(t){var e=yl;return yl+=1,Ta===null&&(Ta=[]),Es(Ta,t,e)}function xl(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Mi(t,e){throw e.$$typeof===h?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Ts(t){var e=t._init;return e(t._payload)}function As(t){function e(O,y){if(t){var T=O.deletions;T===null?(O.deletions=[y],O.flags|=16):T.push(y)}}function n(O,y){if(!t)return null;for(;y!==null;)e(O,y),y=y.sibling;return null}function a(O){for(var y=new Map;O!==null;)O.key!==null?y.set(O.key,O):y.set(O.index,O),O=O.sibling;return y}function l(O,y){return O=Dn(O,y),O.index=0,O.sibling=null,O}function r(O,y,T){return O.index=T,t?(T=O.alternate,T!==null?(T=T.index,T<y?(O.flags|=33554434,y):T):(O.flags|=33554434,y)):(O.flags|=1048576,y)}function s(O){return t&&O.alternate===null&&(O.flags|=33554434),O}function d(O,y,T,j){return y===null||y.tag!==6?(y=cu(T,O.mode,j),y.return=O,y):(y=l(y,T),y.return=O,y)}function p(O,y,T,j){var K=T.type;return K===b?M(O,y,T.props.children,j,T.key):y!==null&&(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===V&&Ts(K)===y.type)?(y=l(y,T.props),xl(y,T),y.return=O,y):(y=Pi(T.type,T.key,T.props,null,O.mode,j),xl(y,T),y.return=O,y)}function x(O,y,T,j){return y===null||y.tag!==4||y.stateNode.containerInfo!==T.containerInfo||y.stateNode.implementation!==T.implementation?(y=su(T,O.mode,j),y.return=O,y):(y=l(y,T.children||[]),y.return=O,y)}function M(O,y,T,j,K){return y===null||y.tag!==7?(y=aa(T,O.mode,j,K),y.return=O,y):(y=l(y,T),y.return=O,y)}function C(O,y,T){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return y=cu(""+y,O.mode,T),y.return=O,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case v:return T=Pi(y.type,y.key,y.props,null,O.mode,T),xl(T,y),T.return=O,T;case E:return y=su(y,O.mode,T),y.return=O,y;case V:var j=y._init;return y=j(y._payload),C(O,y,T)}if(J(y)||mt(y))return y=aa(y,O.mode,T,null),y.return=O,y;if(typeof y.then=="function")return C(O,Ri(y),T);if(y.$$typeof===H)return C(O,Ki(O,y),T);Mi(O,y)}return null}function A(O,y,T,j){var K=y!==null?y.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return K!==null?null:d(O,y,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case v:return T.key===K?p(O,y,T,j):null;case E:return T.key===K?x(O,y,T,j):null;case V:return K=T._init,T=K(T._payload),A(O,y,T,j)}if(J(T)||mt(T))return K!==null?null:M(O,y,T,j,null);if(typeof T.then=="function")return A(O,y,Ri(T),j);if(T.$$typeof===H)return A(O,y,Ki(O,T),j);Mi(O,T)}return null}function R(O,y,T,j,K){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return O=O.get(T)||null,d(y,O,""+j,K);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case v:return O=O.get(j.key===null?T:j.key)||null,p(y,O,j,K);case E:return O=O.get(j.key===null?T:j.key)||null,x(y,O,j,K);case V:var ut=j._init;return j=ut(j._payload),R(O,y,T,j,K)}if(J(j)||mt(j))return O=O.get(T)||null,M(y,O,j,K,null);if(typeof j.then=="function")return R(O,y,T,Ri(j),K);if(j.$$typeof===H)return R(O,y,T,Ki(y,j),K);Mi(y,j)}return null}function $(O,y,T,j){for(var K=null,ut=null,W=y,I=y=0,Vt=null;W!==null&&I<T.length;I++){W.index>I?(Vt=W,W=null):Vt=W.sibling;var ht=A(O,W,T[I],j);if(ht===null){W===null&&(W=Vt);break}t&&W&&ht.alternate===null&&e(O,W),y=r(ht,y,I),ut===null?K=ht:ut.sibling=ht,ut=ht,W=Vt}if(I===T.length)return n(O,W),dt&&Vn(O,I),K;if(W===null){for(;I<T.length;I++)W=C(O,T[I],j),W!==null&&(y=r(W,y,I),ut===null?K=W:ut.sibling=W,ut=W);return dt&&Vn(O,I),K}for(W=a(W);I<T.length;I++)Vt=R(W,O,I,T[I],j),Vt!==null&&(t&&Vt.alternate!==null&&W.delete(Vt.key===null?I:Vt.key),y=r(Vt,y,I),ut===null?K=Vt:ut.sibling=Vt,ut=Vt);return t&&W.forEach(function(Cn){return e(O,Cn)}),dt&&Vn(O,I),K}function nt(O,y,T,j){if(T==null)throw Error(o(151));for(var K=null,ut=null,W=y,I=y=0,Vt=null,ht=T.next();W!==null&&!ht.done;I++,ht=T.next()){W.index>I?(Vt=W,W=null):Vt=W.sibling;var Cn=A(O,W,ht.value,j);if(Cn===null){W===null&&(W=Vt);break}t&&W&&Cn.alternate===null&&e(O,W),y=r(Cn,y,I),ut===null?K=Cn:ut.sibling=Cn,ut=Cn,W=Vt}if(ht.done)return n(O,W),dt&&Vn(O,I),K;if(W===null){for(;!ht.done;I++,ht=T.next())ht=C(O,ht.value,j),ht!==null&&(y=r(ht,y,I),ut===null?K=ht:ut.sibling=ht,ut=ht);return dt&&Vn(O,I),K}for(W=a(W);!ht.done;I++,ht=T.next())ht=R(W,O,I,ht.value,j),ht!==null&&(t&&ht.alternate!==null&&W.delete(ht.key===null?I:ht.key),y=r(ht,y,I),ut===null?K=ht:ut.sibling=ht,ut=ht);return t&&W.forEach(function(up){return e(O,up)}),dt&&Vn(O,I),K}function Nt(O,y,T,j){if(typeof T=="object"&&T!==null&&T.type===b&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case v:t:{for(var K=T.key;y!==null;){if(y.key===K){if(K=T.type,K===b){if(y.tag===7){n(O,y.sibling),j=l(y,T.props.children),j.return=O,O=j;break t}}else if(y.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===V&&Ts(K)===y.type){n(O,y.sibling),j=l(y,T.props),xl(j,T),j.return=O,O=j;break t}n(O,y);break}else e(O,y);y=y.sibling}T.type===b?(j=aa(T.props.children,O.mode,j,T.key),j.return=O,O=j):(j=Pi(T.type,T.key,T.props,null,O.mode,j),xl(j,T),j.return=O,O=j)}return s(O);case E:t:{for(K=T.key;y!==null;){if(y.key===K)if(y.tag===4&&y.stateNode.containerInfo===T.containerInfo&&y.stateNode.implementation===T.implementation){n(O,y.sibling),j=l(y,T.children||[]),j.return=O,O=j;break t}else{n(O,y);break}else e(O,y);y=y.sibling}j=su(T,O.mode,j),j.return=O,O=j}return s(O);case V:return K=T._init,T=K(T._payload),Nt(O,y,T,j)}if(J(T))return $(O,y,T,j);if(mt(T)){if(K=mt(T),typeof K!="function")throw Error(o(150));return T=K.call(T),nt(O,y,T,j)}if(typeof T.then=="function")return Nt(O,y,Ri(T),j);if(T.$$typeof===H)return Nt(O,y,Ki(O,T),j);Mi(O,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,y!==null&&y.tag===6?(n(O,y.sibling),j=l(y,T),j.return=O,O=j):(n(O,y),j=cu(T,O.mode,j),j.return=O,O=j),s(O)):n(O,y)}return function(O,y,T,j){try{yl=0;var K=Nt(O,y,T,j);return Ta=null,K}catch(W){if(W===vl)throw W;var ut=Ae(29,W,null,O.mode);return ut.lanes=j,ut.return=O,ut}finally{}}}var Jn=As(!0),ws=As(!1),Aa=pt(null),Ni=pt(0);function zs(t,e){t=rn,wt(Ni,t),wt(Aa,e),rn=t|e.baseLanes}function bo(){wt(Ni,rn),wt(Aa,Aa.current)}function vo(){rn=Ni.current,Ct(Aa),Ct(Ni)}var Ee=pt(null),Ye=null;function vn(t){var e=t.alternate;wt(Bt,Bt.current&1),wt(Ee,t),Ye===null&&(e===null||Aa.current!==null||e.memoizedState!==null)&&(Ye=t)}function Ds(t){if(t.tag===22){if(wt(Bt,Bt.current),wt(Ee,t),Ye===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ye=t)}}else gn()}function gn(){wt(Bt,Bt.current),wt(Ee,Ee.current)}function $e(t){Ct(Ee),Ye===t&&(Ye=null),Ct(Bt)}var Bt=pt(0);function ji(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var $0=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},P0=i.unstable_scheduleCallback,W0=i.unstable_NormalPriority,Yt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function go(){return{controller:new $0,data:new Map,refCount:0}}function Sl(t){t.refCount--,t.refCount===0&&P0(W0,function(){t.controller.abort()})}var El=null,yo=0,wa=0,za=null;function F0(t,e){if(El===null){var n=El=[];yo=0,wa=Au(),za={status:"pending",value:void 0,then:function(a){n.push(a)}}}return yo++,e.then(ks,ks),e}function ks(){if(--yo===0&&El!==null){za!==null&&(za.status="fulfilled");var t=El;El=null,wa=0,za=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function I0(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var _s=L.S;L.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&F0(t,e),_s!==null&&_s(t,e)};var $n=pt(null);function xo(){var t=$n.current;return t!==null?t:Ot.pooledCache}function Ci(t,e){e===null?wt($n,$n.current):wt($n,e.pool)}function Rs(){var t=xo();return t===null?null:{parent:Yt._currentValue,pool:t}}var yn=0,ot=null,xt=null,Ut=null,Ui=!1,Da=!1,Pn=!1,Hi=0,Ol=0,ka=null,tm=0;function jt(){throw Error(o(321))}function So(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ue(t[n],e[n]))return!1;return!0}function Eo(t,e,n,a,l,r){return yn=r,ot=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,L.H=t===null||t.memoizedState===null?Wn:xn,Pn=!1,r=n(a,l),Pn=!1,Da&&(r=Ns(e,n,a,l)),Ms(t),r}function Ms(t){L.H=Le;var e=xt!==null&&xt.next!==null;if(yn=0,Ut=xt=ot=null,Ui=!1,Ol=0,ka=null,e)throw Error(o(300));t===null||Qt||(t=t.dependencies,t!==null&&Vi(t)&&(Qt=!0))}function Ns(t,e,n,a){ot=t;var l=0;do{if(Da&&(ka=null),Ol=0,Da=!1,25<=l)throw Error(o(301));if(l+=1,Ut=xt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}L.H=Fn,r=e(n,a)}while(Da);return r}function em(){var t=L.H,e=t.useState()[0];return e=typeof e.then=="function"?Tl(e):e,t=t.useState()[0],(xt!==null?xt.memoizedState:null)!==t&&(ot.flags|=1024),e}function Oo(){var t=Hi!==0;return Hi=0,t}function To(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Ao(t){if(Ui){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ui=!1}yn=0,Ut=xt=ot=null,Da=!1,Ol=Hi=0,ka=null}function ie(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?ot.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Ht(){if(xt===null){var t=ot.alternate;t=t!==null?t.memoizedState:null}else t=xt.next;var e=Ut===null?ot.memoizedState:Ut.next;if(e!==null)Ut=e,xt=t;else{if(t===null)throw ot.alternate===null?Error(o(467)):Error(o(310));xt=t,t={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},Ut===null?ot.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}var qi;qi=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Tl(t){var e=Ol;return Ol+=1,ka===null&&(ka=[]),t=Es(ka,t,e),e=ot,(Ut===null?e.memoizedState:Ut.next)===null&&(e=e.alternate,L.H=e===null||e.memoizedState===null?Wn:xn),t}function Bi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Tl(t);if(t.$$typeof===H)return Ft(t)}throw Error(o(438,String(t)))}function wo(t){var e=null,n=ot.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=ot.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=qi(),ot.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=it;return e.index++,n}function Pe(t,e){return typeof e=="function"?e(t):e}function Yi(t){var e=Ht();return zo(e,xt,t)}function zo(t,e,n){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var l=t.baseQueue,r=a.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}e.baseQueue=l=r,a.pending=null}if(r=t.baseState,l===null)t.memoizedState=r;else{e=l.next;var d=s=null,p=null,x=e,M=!1;do{var C=x.lane&-536870913;if(C!==x.lane?(ft&C)===C:(yn&C)===C){var A=x.revertLane;if(A===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),C===wa&&(M=!0);else if((yn&A)===A){x=x.next,A===wa&&(M=!0);continue}else C={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(d=p=C,s=r):p=p.next=C,ot.lanes|=A,kn|=A;C=x.action,Pn&&n(r,C),r=x.hasEagerState?x.eagerState:n(r,C)}else A={lane:C,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},p===null?(d=p=A,s=r):p=p.next=A,ot.lanes|=C,kn|=C;x=x.next}while(x!==null&&x!==e);if(p===null?s=r:p.next=d,!ue(r,t.memoizedState)&&(Qt=!0,M&&(n=za,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=p,a.lastRenderedState=r}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Do(t){var e=Ht(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,r=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do r=t(r,s.action),s=s.next;while(s!==l);ue(r,e.memoizedState)||(Qt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function js(t,e,n){var a=ot,l=Ht(),r=dt;if(r){if(n===void 0)throw Error(o(407));n=n()}else n=e();var s=!ue((xt||l).memoizedState,n);if(s&&(l.memoizedState=n,Qt=!0),l=l.queue,Ro(Hs.bind(null,a,l,t),[t]),l.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(a.flags|=2048,_a(9,Us.bind(null,a,l,n,e),{destroy:void 0},null),Ot===null)throw Error(o(349));r||yn&60||Cs(a,e,n)}return n}function Cs(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ot.updateQueue,e===null?(e=qi(),ot.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Us(t,e,n,a){e.value=n,e.getSnapshot=a,qs(e)&&Bs(t)}function Hs(t,e,n){return n(function(){qs(e)&&Bs(t)})}function qs(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ue(t,n)}catch{return!0}}function Bs(t){var e=bn(t,2);e!==null&&ne(e,t,2)}function ko(t){var e=ie();if(typeof t=="function"){var n=t;if(t=n(),Pn){hn(!0);try{n()}finally{hn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:t},e}function Ys(t,e,n,a){return t.baseState=n,zo(t,xt,typeof a=="function"?a:Pe)}function nm(t,e,n,a,l){if(Gi(t))throw Error(o(485));if(t=e.action,t!==null){var r={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};L.T!==null?n(!0):r.isTransition=!1,a(r),n=e.pending,n===null?(r.next=e.pending=r,Ls(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Ls(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var r=L.T,s={};L.T=s;try{var d=n(l,a),p=L.S;p!==null&&p(s,d),Xs(t,e,d)}catch(x){_o(t,e,x)}finally{L.T=r}}else try{r=n(l,a),Xs(t,e,r)}catch(x){_o(t,e,x)}}function Xs(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Gs(t,e,a)},function(a){return _o(t,e,a)}):Gs(t,e,n)}function Gs(t,e,n){e.status="fulfilled",e.value=n,Qs(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Ls(t,n)))}function _o(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,Qs(e),e=e.next;while(e!==a)}t.action=null}function Qs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Zs(t,e){return e}function Vs(t,e){if(dt){var n=Ot.formState;if(n!==null){t:{var a=ot;if(dt){if(Jt){e:{for(var l=Jt,r=Be;l.nodeType!==8;){if(!r){l=null;break e}if(l=Me(l.nextSibling),l===null){l=null;break e}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Jt=Me(l.nextSibling),a=l.data==="F!";break t}}Kn(a)}a=!1}a&&(e=n[0])}}return n=ie(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zs,lastRenderedState:e},n.queue=a,n=ff.bind(null,ot,a),a.dispatch=n,a=ko(!1),r=Uo.bind(null,ot,!1,a.queue),a=ie(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=nm.bind(null,ot,l,r,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function Ks(t){var e=Ht();return Js(e,xt,t)}function Js(t,e,n){e=zo(t,e,Zs)[0],t=Yi(Pe)[0],e=typeof e=="object"&&e!==null&&typeof e.then=="function"?Tl(e):e;var a=Ht(),l=a.queue,r=l.dispatch;return n!==a.memoizedState&&(ot.flags|=2048,_a(9,am.bind(null,l,n),{destroy:void 0},null)),[e,r,t]}function am(t,e){t.action=e}function $s(t){var e=Ht(),n=xt;if(n!==null)return Js(e,n,t);Ht(),e=e.memoizedState,n=Ht();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function _a(t,e,n,a){return t={tag:t,create:e,inst:n,deps:a,next:null},e=ot.updateQueue,e===null&&(e=qi(),ot.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Ps(){return Ht().memoizedState}function Li(t,e,n,a){var l=ie();ot.flags|=t,l.memoizedState=_a(1|e,n,{destroy:void 0},a===void 0?null:a)}function Xi(t,e,n,a){var l=Ht();a=a===void 0?null:a;var r=l.memoizedState.inst;xt!==null&&a!==null&&So(a,xt.memoizedState.deps)?l.memoizedState=_a(e,n,r,a):(ot.flags|=t,l.memoizedState=_a(1|e,n,r,a))}function Ws(t,e){Li(8390656,8,t,e)}function Ro(t,e){Xi(2048,8,t,e)}function Fs(t,e){return Xi(4,2,t,e)}function Is(t,e){return Xi(4,4,t,e)}function tf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ef(t,e,n){n=n!=null?n.concat([t]):null,Xi(4,4,tf.bind(null,e,t),n)}function Mo(){}function nf(t,e){var n=Ht();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&So(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function af(t,e){var n=Ht();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&So(e,a[1]))return a[0];if(a=t(),Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a}function No(t,e,n){return n===void 0||yn&1073741824?t.memoizedState=e:(t.memoizedState=n,t=rd(),ot.lanes|=t,kn|=t,n)}function lf(t,e,n,a){return ue(n,e)?n:Aa.current!==null?(t=No(t,n,a),ue(t,e)||(Qt=!0),t):yn&42?(t=rd(),ot.lanes|=t,kn|=t,e):(Qt=!0,t.memoizedState=n)}function rf(t,e,n,a,l){var r=Z.p;Z.p=r!==0&&8>r?r:8;var s=L.T,d={};L.T=d,Uo(t,!1,e,n);try{var p=l(),x=L.S;if(x!==null&&x(d,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var M=I0(p,a);Al(t,e,M,de(t))}else Al(t,e,a,de(t))}catch(C){Al(t,e,{then:function(){},status:"rejected",reason:C},de())}finally{Z.p=r,L.T=s}}function lm(){}function jo(t,e,n,a){if(t.tag!==5)throw Error(o(476));var l=of(t).queue;rf(t,l,e,rt,n===null?lm:function(){return uf(t),n(a)})}function of(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:rt,baseState:rt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:rt},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pe,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function uf(t){var e=of(t).next.queue;Al(t,e,{},de())}function Co(){return Ft(Zl)}function cf(){return Ht().memoizedState}function sf(){return Ht().memoizedState}function im(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=de();t=On(n);var a=Tn(e,t,n);a!==null&&(ne(a,e,n),Dl(a,e,n)),e={cache:go()},t.payload=e;return}e=e.return}}function rm(t,e,n){var a=de();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(t)?df(e,n):(n=so(t,e,n,a),n!==null&&(ne(n,t,a),hf(n,e,a)))}function ff(t,e,n){var a=de();Al(t,e,n,a)}function Al(t,e,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(t))df(e,l);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,d=r(s,n);if(l.hasEagerState=!0,l.eagerState=d,ue(d,s))return wi(t,e,l,0),Ot===null&&Ai(),!1}catch{}finally{}if(n=so(t,e,l,a),n!==null)return ne(n,t,a),hf(n,e,a),!0}return!1}function Uo(t,e,n,a){if(a={lane:2,revertLane:Au(),action:a,hasEagerState:!1,eagerState:null,next:null},Gi(t)){if(e)throw Error(o(479))}else e=so(t,n,a,2),e!==null&&ne(e,t,2)}function Gi(t){var e=t.alternate;return t===ot||e!==null&&e===ot}function df(t,e){Da=Ui=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hf(t,e,n){if(n&4194176){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Oc(t,n)}}var Le={readContext:Ft,use:Bi,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useLayoutEffect:jt,useInsertionEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useSyncExternalStore:jt,useId:jt};Le.useCacheRefresh=jt,Le.useMemoCache=jt,Le.useHostTransitionStatus=jt,Le.useFormState=jt,Le.useActionState=jt,Le.useOptimistic=jt;var Wn={readContext:Ft,use:Bi,useCallback:function(t,e){return ie().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Ws,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Li(4194308,4,tf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Li(4194308,4,t,e)},useInsertionEffect:function(t,e){Li(4,2,t,e)},useMemo:function(t,e){var n=ie();e=e===void 0?null:e;var a=t();if(Pn){hn(!0);try{t()}finally{hn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=ie();if(n!==void 0){var l=n(e);if(Pn){hn(!0);try{n(e)}finally{hn(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=rm.bind(null,ot,t),[a.memoizedState,t]},useRef:function(t){var e=ie();return t={current:t},e.memoizedState=t},useState:function(t){t=ko(t);var e=t.queue,n=ff.bind(null,ot,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:Mo,useDeferredValue:function(t,e){var n=ie();return No(n,t,e)},useTransition:function(){var t=ko(!1);return t=rf.bind(null,ot,t.queue,!0,!1),ie().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=ot,l=ie();if(dt){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),Ot===null)throw Error(o(349));ft&60||Cs(a,e,n)}l.memoizedState=n;var r={value:n,getSnapshot:e};return l.queue=r,Ws(Hs.bind(null,a,r,t),[t]),a.flags|=2048,_a(9,Us.bind(null,a,r,n,e),{destroy:void 0},null),n},useId:function(){var t=ie(),e=Ot.identifierPrefix;if(dt){var n=Je,a=Ke;n=(a&~(1<<32-oe(a)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=tm++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},useCacheRefresh:function(){return ie().memoizedState=im.bind(null,ot)}};Wn.useMemoCache=wo,Wn.useHostTransitionStatus=Co,Wn.useFormState=Vs,Wn.useActionState=Vs,Wn.useOptimistic=function(t){var e=ie();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=Uo.bind(null,ot,!0,n),n.dispatch=e,[t,e]};var xn={readContext:Ft,use:Bi,useCallback:nf,useContext:Ft,useEffect:Ro,useImperativeHandle:ef,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:af,useReducer:Yi,useRef:Ps,useState:function(){return Yi(Pe)},useDebugValue:Mo,useDeferredValue:function(t,e){var n=Ht();return lf(n,xt.memoizedState,t,e)},useTransition:function(){var t=Yi(Pe)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Tl(t),e]},useSyncExternalStore:js,useId:cf};xn.useCacheRefresh=sf,xn.useMemoCache=wo,xn.useHostTransitionStatus=Co,xn.useFormState=Ks,xn.useActionState=Ks,xn.useOptimistic=function(t,e){var n=Ht();return Ys(n,xt,t,e)};var Fn={readContext:Ft,use:Bi,useCallback:nf,useContext:Ft,useEffect:Ro,useImperativeHandle:ef,useInsertionEffect:Fs,useLayoutEffect:Is,useMemo:af,useReducer:Do,useRef:Ps,useState:function(){return Do(Pe)},useDebugValue:Mo,useDeferredValue:function(t,e){var n=Ht();return xt===null?No(n,t,e):lf(n,xt.memoizedState,t,e)},useTransition:function(){var t=Do(Pe)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Tl(t),e]},useSyncExternalStore:js,useId:cf};Fn.useCacheRefresh=sf,Fn.useMemoCache=wo,Fn.useHostTransitionStatus=Co,Fn.useFormState=$s,Fn.useActionState=$s,Fn.useOptimistic=function(t,e){var n=Ht();return xt!==null?Ys(n,xt,t,e):(n.baseState=t,[t,n.queue.dispatch])};function Ho(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:at({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var qo={isMounted:function(t){return(t=t._reactInternals)?F(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var a=de(),l=On(a);l.payload=e,n!=null&&(l.callback=n),e=Tn(t,l,a),e!==null&&(ne(e,t,a),Dl(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=de(),l=On(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=Tn(t,l,a),e!==null&&(ne(e,t,a),Dl(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=de(),a=On(n);a.tag=2,e!=null&&(a.callback=e),e=Tn(t,a,n),e!==null&&(ne(e,t,n),Dl(e,t,n))}};function mf(t,e,n,a,l,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,s):e.prototype&&e.prototype.isPureReactComponent?!dl(n,a)||!dl(l,r):!0}function pf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&qo.enqueueReplaceState(e,e.state,null)}function In(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=at({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var Qi=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function bf(t){Qi(t)}function vf(t){console.error(t)}function gf(t){Qi(t)}function Zi(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function yf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Bo(t,e,n){return n=On(n),n.tag=3,n.payload={element:null},n.callback=function(){Zi(t,e)},n}function xf(t){return t=On(t),t.tag=3,t}function Sf(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;t.payload=function(){return l(r)},t.callback=function(){yf(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){yf(e,n,a),typeof l!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var d=a.stack;this.componentDidCatch(a.value,{componentStack:d!==null?d:""})})}function om(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&zl(e,n,l,!0),n=Ee.current,n!==null){switch(n.tag){case 13:return Ye===null?xu():n.alternate===null&&Mt===0&&(Mt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===po?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Eu(t,a,l)),!1;case 22:return n.flags|=65536,a===po?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Eu(t,a,l)),!1}throw Error(o(435,n.tag))}return Eu(t,a,l),xu(),!1}if(dt)return e=Ee.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==mo&&(t=Error(o(422),{cause:a}),bl(ye(t,n)))):(a!==mo&&(e=Error(o(423),{cause:a}),bl(ye(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=ye(a,n),l=Bo(t.stateNode,a,l),tu(t,l),Mt!==4&&(Mt=2)),!1;var r=Error(o(520),{cause:a});if(r=ye(r,n),Ul===null?Ul=[r]:Ul.push(r),Mt!==4&&(Mt=2),e===null)return!0;a=ye(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Bo(n.stateNode,a,t),tu(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=xf(l),Sf(l,t,n,a),tu(n,l),!1}n=n.return}while(n!==null);return!1}var Ef=Error(o(461)),Qt=!1;function $t(t,e,n,a){e.child=t===null?ws(e,null,n,a):Jn(e,t.child,n,a)}function Of(t,e,n,a,l){n=n.render;var r=e.ref;if("ref"in a){var s={};for(var d in a)d!=="ref"&&(s[d]=a[d])}else s=a;return ea(e),a=Eo(t,e,n,s,r,l),d=Oo(),t!==null&&!Qt?(To(t,e,l),We(t,e,l)):(dt&&d&&fo(e),e.flags|=1,$t(t,e,a,l),e.child)}function Tf(t,e,n,a,l){if(t===null){var r=n.type;return typeof r=="function"&&!uu(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,Af(t,e,r,a,l)):(t=Pi(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!Jo(t,l)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:dl,n(s,a)&&t.ref===e.ref)return We(t,e,l)}return e.flags|=1,t=Dn(r,a),t.ref=e.ref,t.return=e,e.child=t}function Af(t,e,n,a,l){if(t!==null){var r=t.memoizedProps;if(dl(r,a)&&t.ref===e.ref)if(Qt=!1,e.pendingProps=a=r,Jo(t,l))t.flags&131072&&(Qt=!0);else return e.lanes=t.lanes,We(t,e,l)}return Yo(t,e,n,a,l)}function wf(t,e,n){var a=e.pendingProps,l=a.children,r=(e.stateNode._pendingVisibility&2)!==0,s=t!==null?t.memoizedState:null;if(wl(t,e),a.mode==="hidden"||r){if(e.flags&128){if(a=s!==null?s.baseLanes|n:n,t!==null){for(l=e.child=t.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;e.childLanes=r&~a}else e.childLanes=0,e.child=null;return zf(t,e,a,n)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ci(e,s!==null?s.cachePool:null),s!==null?zs(e,s):bo(),Ds(e);else return e.lanes=e.childLanes=536870912,zf(t,e,s!==null?s.baseLanes|n:n,n)}else s!==null?(Ci(e,s.cachePool),zs(e,s),gn(),e.memoizedState=null):(t!==null&&Ci(e,null),bo(),gn());return $t(t,e,l,n),e.child}function zf(t,e,n,a){var l=xo();return l=l===null?null:{parent:Yt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&Ci(e,null),bo(),Ds(e),t!==null&&zl(t,e,a,!0),null}function wl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=2097664);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=2097664)}}function Yo(t,e,n,a,l){return ea(e),n=Eo(t,e,n,a,void 0,l),a=Oo(),t!==null&&!Qt?(To(t,e,l),We(t,e,l)):(dt&&a&&fo(e),e.flags|=1,$t(t,e,n,l),e.child)}function Df(t,e,n,a,l,r){return ea(e),e.updateQueue=null,n=Ns(e,a,n,l),Ms(t),a=Oo(),t!==null&&!Qt?(To(t,e,r),We(t,e,r)):(dt&&a&&fo(e),e.flags|=1,$t(t,e,n,r),e.child)}function kf(t,e,n,a,l){if(ea(e),e.stateNode===null){var r=Sa,s=n.contextType;typeof s=="object"&&s!==null&&(r=Ft(s)),r=new n(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=qo,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Fo(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?Ft(s):Sa,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ho(e,n,s,a),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&qo.enqueueReplaceState(r,r.state,null),_l(e,a,r,l),kl(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){r=e.stateNode;var d=e.memoizedProps,p=In(n,d);r.props=p;var x=r.context,M=n.contextType;s=Sa,typeof M=="object"&&M!==null&&(s=Ft(M));var C=n.getDerivedStateFromProps;M=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",d=e.pendingProps!==d,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(d||x!==s)&&pf(e,r,a,s),En=!1;var A=e.memoizedState;r.state=A,_l(e,a,r,l),kl(),x=e.memoizedState,d||A!==x||En?(typeof C=="function"&&(Ho(e,n,C,a),x=e.memoizedState),(p=En||mf(e,n,p,a,A,x,s))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=x),r.props=a,r.state=x,r.context=s,a=p):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Io(t,e),s=e.memoizedProps,M=In(n,s),r.props=M,C=e.pendingProps,A=r.context,x=n.contextType,p=Sa,typeof x=="object"&&x!==null&&(p=Ft(x)),d=n.getDerivedStateFromProps,(x=typeof d=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==C||A!==p)&&pf(e,r,a,p),En=!1,A=e.memoizedState,r.state=A,_l(e,a,r,l),kl();var R=e.memoizedState;s!==C||A!==R||En||t!==null&&t.dependencies!==null&&Vi(t.dependencies)?(typeof d=="function"&&(Ho(e,n,d,a),R=e.memoizedState),(M=En||mf(e,n,M,a,A,R,p)||t!==null&&t.dependencies!==null&&Vi(t.dependencies))?(x||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,R,p),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,R,p)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=R),r.props=a,r.state=R,r.context=p,a=M):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&A===t.memoizedState||(e.flags|=1024),a=!1)}return r=a,wl(t,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&a?(e.child=Jn(e,t.child,null,l),e.child=Jn(e,null,n,l)):$t(t,e,n,l),e.memoizedState=r.state,t=e.child):t=We(t,e,l),t}function _f(t,e,n,a){return pl(),e.flags|=256,$t(t,e,n,a),e.child}var Lo={dehydrated:null,treeContext:null,retryLane:0};function Xo(t){return{baseLanes:t,cachePool:Rs()}}function Go(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=we),t}function Rf(t,e,n){var a=e.pendingProps,l=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(Bt.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(dt){if(l?vn(e):gn(),dt){var d=Jt,p;if(p=d){t:{for(p=d,d=Be;p.nodeType!==8;){if(!d){d=null;break t}if(p=Me(p.nextSibling),p===null){d=null;break t}}d=p}d!==null?(e.memoizedState={dehydrated:d,treeContext:Zn!==null?{id:Ke,overflow:Je}:null,retryLane:536870912},p=Ae(18,null,null,0),p.stateNode=d,p.return=e,e.child=p,ee=e,Jt=null,p=!0):p=!1}p||Kn(e)}if(d=e.memoizedState,d!==null&&(d=d.dehydrated,d!==null))return d.data==="$!"?e.lanes=16:e.lanes=536870912,null;$e(e)}return d=a.children,a=a.fallback,l?(gn(),l=e.mode,d=Zo({mode:"hidden",children:d},l),a=aa(a,l,n,null),d.return=e,a.return=e,d.sibling=a,e.child=d,l=e.child,l.memoizedState=Xo(n),l.childLanes=Go(t,s,n),e.memoizedState=Lo,a):(vn(e),Qo(e,d))}if(p=t.memoizedState,p!==null&&(d=p.dehydrated,d!==null)){if(r)e.flags&256?(vn(e),e.flags&=-257,e=Vo(t,e,n)):e.memoizedState!==null?(gn(),e.child=t.child,e.flags|=128,e=null):(gn(),l=a.fallback,d=e.mode,a=Zo({mode:"visible",children:a.children},d),l=aa(l,d,n,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,Jn(e,t.child,null,n),a=e.child,a.memoizedState=Xo(n),a.childLanes=Go(t,s,n),e.memoizedState=Lo,e=l);else if(vn(e),d.data==="$!"){if(s=d.nextSibling&&d.nextSibling.dataset,s)var x=s.dgst;s=x,a=Error(o(419)),a.stack="",a.digest=s,bl({value:a,source:null,stack:null}),e=Vo(t,e,n)}else if(Qt||zl(t,e,n,!1),s=(n&t.childLanes)!==0,Qt||s){if(s=Ot,s!==null){if(a=n&-n,a&42)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=a&(s.suspendedLanes|n)?0:a,a!==0&&a!==p.retryLane)throw p.retryLane=a,bn(t,a),ne(s,t,a),Ef}d.data==="$?"||xu(),e=Vo(t,e,n)}else d.data==="$?"?(e.flags|=128,e.child=t.child,e=Em.bind(null,t),d._reactRetry=e,e=null):(t=p.treeContext,Jt=Me(d.nextSibling),ee=e,dt=!0,_e=null,Be=!1,t!==null&&(xe[Se++]=Ke,xe[Se++]=Je,xe[Se++]=Zn,Ke=t.id,Je=t.overflow,Zn=e),e=Qo(e,a.children),e.flags|=4096);return e}return l?(gn(),l=a.fallback,d=e.mode,p=t.child,x=p.sibling,a=Dn(p,{mode:"hidden",children:a.children}),a.subtreeFlags=p.subtreeFlags&31457280,x!==null?l=Dn(x,l):(l=aa(l,d,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,d=t.child.memoizedState,d===null?d=Xo(n):(p=d.cachePool,p!==null?(x=Yt._currentValue,p=p.parent!==x?{parent:x,pool:x}:p):p=Rs(),d={baseLanes:d.baseLanes|n,cachePool:p}),l.memoizedState=d,l.childLanes=Go(t,s,n),e.memoizedState=Lo,a):(vn(e),n=t.child,t=n.sibling,n=Dn(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function Qo(t,e){return e=Zo({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Zo(t,e){return ad(t,e,0,null)}function Vo(t,e,n){return Jn(e,t.child,null,n),t=Qo(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mf(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),Po(t.return,e,n)}function Ko(t,e,n,a,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function Nf(t,e,n){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if($t(t,e,a.children,n),a=Bt.current,a&2)a=a&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mf(t,n,e);else if(t.tag===19)Mf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(wt(Bt,a),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&ji(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),Ko(e,!1,l,n,r);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&ji(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}Ko(e,!0,n,null,r);break;case"together":Ko(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function We(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kn|=e.lanes,!(n&e.childLanes))if(t!==null){if(zl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=Dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Jo(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&Vi(t)))}function um(t,e,n){switch(e.tag){case 3:ui(e,e.stateNode.containerInfo),Sn(e,Yt,t.memoizedState.cache),pl();break;case 27:case 5:Hr(e);break;case 4:ui(e,e.stateNode.containerInfo);break;case 10:Sn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(vn(e),e.flags|=128,null):n&e.child.childLanes?Rf(t,e,n):(vn(e),t=We(t,e,n),t!==null?t.sibling:null);vn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(zl(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return Nf(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),wt(Bt,Bt.current),a)break;return null;case 22:case 23:return e.lanes=0,wf(t,e,n);case 24:Sn(e,Yt,t.memoizedState.cache)}return We(t,e,n)}function jf(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Qt=!0;else{if(!Jo(t,n)&&!(e.flags&128))return Qt=!1,um(t,e,n);Qt=!!(t.flags&131072)}else Qt=!1,dt&&e.flags&1048576&&vs(e,ki,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")uu(a)?(t=In(a,t),e.tag=1,e=kf(null,e,a,t,n)):(e.tag=0,e=Yo(null,e,a,t,n));else{if(a!=null){if(l=a.$$typeof,l===k){e.tag=11,e=Of(null,e,a,t,n);break t}else if(l===B){e.tag=14,e=Tf(null,e,a,t,n);break t}}throw e=At(a)||a,Error(o(306,e,""))}}return e;case 0:return Yo(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=In(a,e.pendingProps),kf(t,e,a,l,n);case 3:t:{if(ui(e,e.stateNode.containerInfo),t===null)throw Error(o(387));var r=e.pendingProps;l=e.memoizedState,a=l.element,Io(t,e),_l(e,r,null,n);var s=e.memoizedState;if(r=s.cache,Sn(e,Yt,r),r!==l.cache&&Wo(e,[Yt],n,!0),kl(),r=s.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=l,e.memoizedState=l,e.flags&256){e=_f(t,e,r,n);break t}else if(r!==a){a=ye(Error(o(424)),e),bl(a),e=_f(t,e,r,n);break t}else for(Jt=Me(e.stateNode.containerInfo.firstChild),ee=e,dt=!0,_e=null,Be=!0,n=ws(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(pl(),r===a){e=We(t,e,n);break t}$t(t,e,r,n)}e=e.child}return e;case 26:return wl(t,e),t===null?(n=Hd(e.type,null,e.pendingProps,null))?e.memoizedState=n:dt||(n=e.type,t=e.pendingProps,a=ur(dn.current).createElement(n),a[Wt]=e,a[ae]=t,Pt(a,n,t),Gt(a),e.stateNode=a):e.memoizedState=Hd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Hr(e),t===null&&dt&&(a=e.stateNode=jd(e.type,e.pendingProps,dn.current),ee=e,Be=!0,Jt=Me(a.firstChild)),a=e.pendingProps.children,t!==null||dt?$t(t,e,a,n):e.child=Jn(e,null,a,n),wl(t,e),e.child;case 5:return t===null&&dt&&((l=a=Jt)&&(a=qm(a,e.type,e.pendingProps,Be),a!==null?(e.stateNode=a,ee=e,Jt=Me(a.firstChild),Be=!1,l=!0):l=!1),l||Kn(e)),Hr(e),l=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ju(l,r)?a=null:s!==null&&ju(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=Eo(t,e,em,null,null,n),Zl._currentValue=l),wl(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&dt&&((t=n=Jt)&&(n=Bm(n,e.pendingProps,Be),n!==null?(e.stateNode=n,ee=e,Jt=null,t=!0):t=!1),t||Kn(e)),null;case 13:return Rf(t,e,n);case 4:return ui(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=Jn(e,null,a,n):$t(t,e,a,n),e.child;case 11:return Of(t,e,e.type,e.pendingProps,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,Sn(e,e.type,a.value),$t(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,ea(e),l=Ft(l),a=a(l),e.flags|=1,$t(t,e,a,n),e.child;case 14:return Tf(t,e,e.type,e.pendingProps,n);case 15:return Af(t,e,e.type,e.pendingProps,n);case 19:return Nf(t,e,n);case 22:return wf(t,e,n);case 24:return ea(e),a=Ft(Yt),t===null?(l=xo(),l===null&&(l=Ot,r=go(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),e.memoizedState={parent:a,cache:l},Fo(e),Sn(e,Yt,l)):(t.lanes&n&&(Io(t,e),_l(e,null,null,n),kl()),l=t.memoizedState,r=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),Sn(e,Yt,a)):(a=r.cache,Sn(e,Yt,a),a!==l.cache&&Wo(e,[Yt],n,!0))),$t(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}var $o=pt(null),ta=null,Fe=null;function Sn(t,e,n){wt($o,e._currentValue),e._currentValue=n}function Ie(t){t._currentValue=$o.current,Ct($o)}function Po(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Wo(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;t:for(;r!==null;){var d=r;r=l;for(var p=0;p<e.length;p++)if(d.context===e[p]){r.lanes|=n,d=r.alternate,d!==null&&(d.lanes|=n),Po(r.return,n,t),a||(s=null);break t}r=d.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(o(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),Po(s,n,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function zl(t,e,n,a){t=null;for(var l=e,r=!1;l!==null;){if(!r){if(l.flags&524288)r=!0;else if(l.flags&262144)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var d=l.type;ue(l.pendingProps.value,s.value)||(t!==null?t.push(d):t=[d])}}else if(l===oi.current){if(s=l.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Zl):t=[Zl])}l=l.return}t!==null&&Wo(e,t,n,a),e.flags|=262144}function Vi(t){for(t=t.firstContext;t!==null;){if(!ue(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ea(t){ta=t,Fe=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ft(t){return Cf(ta,t)}function Ki(t,e){return ta===null&&ea(t),Cf(t,e)}function Cf(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Fe===null){if(t===null)throw Error(o(308));Fe=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Fe=Fe.next=e;return n}var En=!1;function Fo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Io(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function On(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,_t&2){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=zi(t),ps(t,null,n),e}return wi(t,a,e,n),zi(t)}function Dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194176)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,Oc(t,n)}}function tu(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?l=r=e:r=r.next=e}else l=r=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var eu=!1;function kl(){if(eu){var t=za;if(t!==null)throw t}}function _l(t,e,n,a){eu=!1;var l=t.updateQueue;En=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var p=d,x=p.next;p.next=null,s===null?r=x:s.next=x,s=p;var M=t.alternate;M!==null&&(M=M.updateQueue,d=M.lastBaseUpdate,d!==s&&(d===null?M.firstBaseUpdate=x:d.next=x,M.lastBaseUpdate=p))}if(r!==null){var C=l.baseState;s=0,M=x=p=null,d=r;do{var A=d.lane&-536870913,R=A!==d.lane;if(R?(ft&A)===A:(a&A)===A){A!==0&&A===wa&&(eu=!0),M!==null&&(M=M.next={lane:0,tag:d.tag,payload:d.payload,callback:null,next:null});t:{var $=t,nt=d;A=e;var Nt=n;switch(nt.tag){case 1:if($=nt.payload,typeof $=="function"){C=$.call(Nt,C,A);break t}C=$;break t;case 3:$.flags=$.flags&-65537|128;case 0:if($=nt.payload,A=typeof $=="function"?$.call(Nt,C,A):$,A==null)break t;C=at({},C,A);break t;case 2:En=!0}}A=d.callback,A!==null&&(t.flags|=64,R&&(t.flags|=8192),R=l.callbacks,R===null?l.callbacks=[A]:R.push(A))}else R={lane:A,tag:d.tag,payload:d.payload,callback:d.callback,next:null},M===null?(x=M=R,p=C):M=M.next=R,s|=A;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;R=d,d=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);M===null&&(p=C),l.baseState=p,l.firstBaseUpdate=x,l.lastBaseUpdate=M,r===null&&(l.shared.lanes=0),kn|=s,t.lanes=s,t.memoizedState=C}}function Uf(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Hf(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Uf(n[t],e)}function Rl(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var r=n.create,s=n.inst;a=r(),s.destroy=a}n=n.next}while(n!==l)}}catch(d){Et(e,e.return,d)}}function An(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&t)===t){var s=a.inst,d=s.destroy;if(d!==void 0){s.destroy=void 0,l=e;var p=n;try{d()}catch(x){Et(l,p,x)}}}a=a.next}while(a!==r)}}catch(x){Et(e,e.return,x)}}function qf(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Hf(e,n)}catch(a){Et(t,t.return,a)}}}function Bf(t,e,n){n.props=In(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Et(t,e,a)}}function na(t,e){try{var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof n=="function"?t.refCleanup=n(l):n.current=l}}catch(r){Et(t,e,r)}}function ce(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Et(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Et(t,e,l)}else n.current=null}function Yf(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Et(t,t.return,l)}}function Lf(t,e,n){try{var a=t.stateNode;Nm(a,t.type,n,e),a[ae]=e}catch(l){Et(t,t.return,l)}}function Xf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function nu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Xf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function au(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=or));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(au(t,e,n),t=t.sibling;t!==null;)au(t,e,n),t=t.sibling}function Ji(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Ji(t,e,n),t=t.sibling;t!==null;)Ji(t,e,n),t=t.sibling}var tn=!1,Rt=!1,lu=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,Zt=null,Qf=!1;function cm(t,e){if(t=t.containerInfo,Mu=mr,t=rs(t),io(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,d=-1,p=-1,x=0,M=0,C=t,A=null;e:for(;;){for(var R;C!==n||l!==0&&C.nodeType!==3||(d=s+l),C!==r||a!==0&&C.nodeType!==3||(p=s+a),C.nodeType===3&&(s+=C.nodeValue.length),(R=C.firstChild)!==null;)A=C,C=R;for(;;){if(C===t)break e;if(A===n&&++x===l&&(d=s),A===r&&++M===a&&(p=s),(R=C.nextSibling)!==null)break;C=A,A=C.parentNode}C=R}n=d===-1||p===-1?null:{start:d,end:p}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nu={focusedElem:t,selectionRange:n},mr=!1,Zt=e;Zt!==null;)if(e=Zt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Zt=t;else for(;Zt!==null;){switch(e=Zt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if(t&1024&&r!==null){t=void 0,n=e,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var $=In(n.type,l,n.elementType===n.type);t=a.getSnapshotBeforeUpdate($,r),a.__reactInternalSnapshotBeforeUpdate=t}catch(nt){Et(n,n.return,nt)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Hu(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Hu(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,Zt=t;break}Zt=e.return}return $=Qf,Qf=!1,$}function Zf(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:nn(t,n),a&4&&Rl(5,n);break;case 1:if(nn(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(d){Et(n,n.return,d)}else{var l=In(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(d){Et(n,n.return,d)}}a&64&&qf(n),a&512&&na(n,n.return);break;case 3:if(nn(t,n),a&64&&(a=n.updateQueue,a!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Hf(a,t)}catch(d){Et(n,n.return,d)}}break;case 26:nn(t,n),a&512&&na(n,n.return);break;case 27:case 5:nn(t,n),e===null&&a&4&&Yf(n),a&512&&na(n,n.return);break;case 12:nn(t,n);break;case 13:nn(t,n),a&4&&Jf(t,n);break;case 22:if(l=n.memoizedState!==null||tn,!l){e=e!==null&&e.memoizedState!==null||Rt;var r=tn,s=Rt;tn=l,(Rt=e)&&!s?wn(t,n,(n.subtreeFlags&8772)!==0):nn(t,n),tn=r,Rt=s}a&512&&(n.memoizedProps.mode==="manual"?na(n,n.return):ce(n,n.return));break;default:nn(t,n)}}function Vf(t){var e=t.alternate;e!==null&&(t.alternate=null,Vf(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Gr(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var qt=null,se=!1;function en(t,e,n){for(n=n.child;n!==null;)Kf(t,e,n),n=n.sibling}function Kf(t,e,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 26:Rt||ce(n,e),en(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Rt||ce(n,e);var a=qt,l=se;for(qt=n.stateNode,en(t,e,n),n=n.stateNode,e=n.attributes;e.length;)n.removeAttributeNode(e[0]);Gr(n),qt=a,se=l;break;case 5:Rt||ce(n,e);case 6:l=qt;var r=se;if(qt=null,en(t,e,n),qt=l,se=r,qt!==null)if(se)try{t=qt,a=n.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(s){Et(n,e,s)}else try{qt.removeChild(n.stateNode)}catch(s){Et(n,e,s)}break;case 18:qt!==null&&(se?(e=qt,n=n.stateNode,e.nodeType===8?Uu(e.parentNode,n):e.nodeType===1&&Uu(e,n),$l(e)):Uu(qt,n.stateNode));break;case 4:a=qt,l=se,qt=n.stateNode.containerInfo,se=!0,en(t,e,n),qt=a,se=l;break;case 0:case 11:case 14:case 15:Rt||An(2,n,e),Rt||An(4,n,e),en(t,e,n);break;case 1:Rt||(ce(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Bf(n,e,a)),en(t,e,n);break;case 21:en(t,e,n);break;case 22:Rt||ce(n,e),Rt=(a=Rt)||n.memoizedState!==null,en(t,e,n),Rt=a;break;default:en(t,e,n)}}function Jf(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$l(t)}catch(n){Et(e,e.return,n)}}function sm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new Gf),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new Gf),e;default:throw Error(o(435,t.tag))}}function iu(t,e){var n=sm(t);e.forEach(function(a){var l=Om.bind(null,t,a);n.has(a)||(n.add(a),a.then(l,l))})}function Oe(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=t,s=e,d=s;t:for(;d!==null;){switch(d.tag){case 27:case 5:qt=d.stateNode,se=!1;break t;case 3:qt=d.stateNode.containerInfo,se=!0;break t;case 4:qt=d.stateNode.containerInfo,se=!0;break t}d=d.return}if(qt===null)throw Error(o(160));Kf(r,s,l),qt=null,se=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)$f(e,t),e=e.sibling}var Re=null;function $f(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Oe(e,t),Te(t),a&4&&(An(3,t,t.return),Rl(3,t),An(5,t,t.return));break;case 1:Oe(e,t),Te(t),a&512&&(Rt||n===null||ce(n,n.return)),a&64&&tn&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Re;if(Oe(e,t),Te(t),a&512&&(Rt||n===null||ce(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[al]||r[Wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Pt(r,a,n),r[Wt]=t,Gt(r),a=r;break t;case"link":var s=Yd("link","href",l).get(a+(n.href||""));if(s){for(var d=0;d<s.length;d++)if(r=s[d],r.getAttribute("href")===(n.href==null?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(d,1);break e}}r=l.createElement(a),Pt(r,a,n),l.head.appendChild(r);break;case"meta":if(s=Yd("meta","content",l).get(a+(n.content||""))){for(d=0;d<s.length;d++)if(r=s[d],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(d,1);break e}}r=l.createElement(a),Pt(r,a,n),l.head.appendChild(r);break;default:throw Error(o(468,a))}r[Wt]=t,Gt(r),a=r}t.stateNode=a}else Ld(l,t.type,t.stateNode);else t.stateNode=Bd(l,a,t.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?Ld(l,t.type,t.stateNode):Bd(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Lf(t,t.memoizedProps,n.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){l=t.stateNode,r=t.memoizedProps;try{for(var p=l.firstChild;p;){var x=p.nextSibling,M=p.nodeName;p[al]||M==="HEAD"||M==="BODY"||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&p.rel.toLowerCase()==="stylesheet"||l.removeChild(p),p=x}for(var C=t.type,A=l.attributes;A.length;)l.removeAttributeNode(A[0]);Pt(l,C,r),l[Wt]=t,l[ae]=r}catch($){Et(t,t.return,$)}}case 5:if(Oe(e,t),Te(t),a&512&&(Rt||n===null||ce(n,n.return)),t.flags&32){l=t.stateNode;try{ma(l,"")}catch($){Et(t,t.return,$)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,Lf(t,l,n!==null?n.memoizedProps:l)),a&1024&&(lu=!0);break;case 6:if(Oe(e,t),Te(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch($){Et(t,t.return,$)}}break;case 3:if(fr=null,l=Re,Re=cr(e.containerInfo),Oe(e,t),Re=l,Te(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{$l(e.containerInfo)}catch($){Et(t,t.return,$)}lu&&(lu=!1,Pf(t));break;case 4:a=Re,Re=cr(t.stateNode.containerInfo),Oe(e,t),Te(t),Re=a;break;case 12:Oe(e,t),Te(t);break;case 13:Oe(e,t),Te(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(mu=qe()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,iu(t,a)));break;case 22:if(a&512&&(Rt||n===null||ce(n,n.return)),p=t.memoizedState!==null,x=n!==null&&n.memoizedState!==null,M=tn,C=Rt,tn=M||p,Rt=C||x,Oe(e,t),Rt=C,tn=M,Te(t),e=t.stateNode,e._current=t,e._visibility&=-3,e._visibility|=e._pendingVisibility&2,a&8192&&(e._visibility=p?e._visibility&-2:e._visibility|1,p&&(e=tn||Rt,n===null||x||e||Ra(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(n=null,e=t;;){if(e.tag===5||e.tag===26||e.tag===27){if(n===null){x=n=e;try{if(l=x.stateNode,p)r=l.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{s=x.stateNode,d=x.memoizedProps.style;var R=d!=null&&d.hasOwnProperty("display")?d.display:null;s.style.display=R==null||typeof R=="boolean"?"":(""+R).trim()}}catch($){Et(x,x.return,$)}}}else if(e.tag===6){if(n===null){x=e;try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch($){Et(x,x.return,$)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,iu(t,n))));break;case 19:Oe(e,t),Te(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,iu(t,a)));break;case 21:break;default:Oe(e,t),Te(t)}}function Te(t){var e=t.flags;if(e&2){try{if(t.tag!==27){t:{for(var n=t.return;n!==null;){if(Xf(n)){var a=n;break t}n=n.return}throw Error(o(160))}switch(a.tag){case 27:var l=a.stateNode,r=nu(t);Ji(t,r,l);break;case 5:var s=a.stateNode;a.flags&32&&(ma(s,""),a.flags&=-33);var d=nu(t);Ji(t,d,s);break;case 3:case 4:var p=a.stateNode.containerInfo,x=nu(t);au(t,x,p);break;default:throw Error(o(161))}}}catch(M){Et(t,t.return,M)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Pf(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Pf(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function nn(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Zf(t,e.alternate,e),e=e.sibling}function Ra(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:An(4,e,e.return),Ra(e);break;case 1:ce(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&Bf(e,e.return,n),Ra(e);break;case 26:case 27:case 5:ce(e,e.return),Ra(e);break;case 22:ce(e,e.return),e.memoizedState===null&&Ra(e);break;default:Ra(e)}t=t.sibling}}function wn(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:wn(l,r,n),Rl(4,r);break;case 1:if(wn(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(x){Et(a,a.return,x)}if(a=r,l=a.updateQueue,l!==null){var d=a.stateNode;try{var p=l.shared.hiddenCallbacks;if(p!==null)for(l.shared.hiddenCallbacks=null,l=0;l<p.length;l++)Uf(p[l],d)}catch(x){Et(a,a.return,x)}}n&&s&64&&qf(r),na(r,r.return);break;case 26:case 27:case 5:wn(l,r,n),n&&a===null&&s&4&&Yf(r),na(r,r.return);break;case 12:wn(l,r,n);break;case 13:wn(l,r,n),n&&s&4&&Jf(l,r);break;case 22:r.memoizedState===null&&wn(l,r,n),na(r,r.return);break;default:wn(l,r,n)}e=e.sibling}}function ru(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&Sl(n))}function ou(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sl(t))}function zn(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wf(t,e,n,a),e=e.sibling}function Wf(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:zn(t,e,n,a),l&2048&&Rl(9,e);break;case 3:zn(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&Sl(t)));break;case 12:if(l&2048){zn(t,e,n,a),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,d=r.onPostCommit;typeof d=="function"&&d(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(p){Et(e,e.return,p)}}else zn(t,e,n,a);break;case 23:break;case 22:r=e.stateNode,e.memoizedState!==null?r._visibility&4?zn(t,e,n,a):Ml(t,e):r._visibility&4?zn(t,e,n,a):(r._visibility|=4,Ma(t,e,n,a,(e.subtreeFlags&10256)!==0)),l&2048&&ru(e.alternate,e);break;case 24:zn(t,e,n,a),l&2048&&ou(e.alternate,e);break;default:zn(t,e,n,a)}}function Ma(t,e,n,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,d=n,p=a,x=s.flags;switch(s.tag){case 0:case 11:case 15:Ma(r,s,d,p,l),Rl(8,s);break;case 23:break;case 22:var M=s.stateNode;s.memoizedState!==null?M._visibility&4?Ma(r,s,d,p,l):Ml(r,s):(M._visibility|=4,Ma(r,s,d,p,l)),l&&x&2048&&ru(s.alternate,s);break;case 24:Ma(r,s,d,p,l),l&&x&2048&&ou(s.alternate,s);break;default:Ma(r,s,d,p,l)}e=e.sibling}}function Ml(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:Ml(n,a),l&2048&&ru(a.alternate,a);break;case 24:Ml(n,a),l&2048&&ou(a.alternate,a);break;default:Ml(n,a)}e=e.sibling}}var Nl=8192;function Na(t){if(t.subtreeFlags&Nl)for(t=t.child;t!==null;)Ff(t),t=t.sibling}function Ff(t){switch(t.tag){case 26:Na(t),t.flags&Nl&&t.memoizedState!==null&&Fm(Re,t.memoizedState,t.memoizedProps);break;case 5:Na(t);break;case 3:case 4:var e=Re;Re=cr(t.stateNode.containerInfo),Na(t),Re=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Nl,Nl=16777216,Na(t),Nl=e):Na(t));break;default:Na(t)}}function If(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function jl(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Zt=a,ed(a,t)}If(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)td(t),t=t.sibling}function td(t){switch(t.tag){case 0:case 11:case 15:jl(t),t.flags&2048&&An(9,t,t.return);break;case 3:jl(t);break;case 12:jl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&4&&(t.return===null||t.return.tag!==13)?(e._visibility&=-5,$i(t)):jl(t);break;default:jl(t)}}function $i(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Zt=a,ed(a,t)}If(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:An(8,e,e.return),$i(e);break;case 22:n=e.stateNode,n._visibility&4&&(n._visibility&=-5,$i(e));break;default:$i(e)}t=t.sibling}}function ed(t,e){for(;Zt!==null;){var n=Zt;switch(n.tag){case 0:case 11:case 15:An(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Sl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Zt=a;else t:for(n=t;Zt!==null;){a=Zt;var l=a.sibling,r=a.return;if(Vf(a),a===n){Zt=null;break t}if(l!==null){l.return=r,Zt=l;break t}Zt=r}}}function fm(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ae(t,e,n,a){return new fm(t,e,n,a)}function uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dn(t,e){var n=t.alternate;return n===null?(n=Ae(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&31457280,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function nd(t,e){t.flags&=31457282;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Pi(t,e,n,a,l,r){var s=0;if(a=t,typeof t=="function")uu(t)&&(s=1);else if(typeof t=="string")s=Pm(t,n,He.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case b:return aa(n.children,l,r,e);case m:s=8,l|=24;break;case z:return t=Ae(12,n,e,l|2),t.elementType=z,t.lanes=r,t;case _:return t=Ae(13,n,e,l),t.elementType=_,t.lanes=r,t;case U:return t=Ae(19,n,e,l),t.elementType=U,t.lanes=r,t;case G:return ad(n,l,r,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:case H:s=10;break t;case D:s=9;break t;case k:s=11;break t;case B:s=14;break t;case V:s=16,a=null;break t}s=29,n=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=Ae(s,n,e,l),e.elementType=t,e.type=a,e.lanes=r,e}function aa(t,e,n,a){return t=Ae(7,t,a,e),t.lanes=n,t}function ad(t,e,n,a){t=Ae(22,t,a,e),t.elementType=G,t.lanes=n;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var r=l._current;if(r===null)throw Error(o(456));if(!(l._pendingVisibility&2)){var s=bn(r,2);s!==null&&(l._pendingVisibility|=2,ne(s,r,2))}},attach:function(){var r=l._current;if(r===null)throw Error(o(456));if(l._pendingVisibility&2){var s=bn(r,2);s!==null&&(l._pendingVisibility&=-3,ne(s,r,2))}}};return t.stateNode=l,t}function cu(t,e,n){return t=Ae(6,t,null,e),t.lanes=n,t}function su(t,e,n){return e=Ae(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function an(t){t.flags|=4}function ld(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!Xd(e)){if(e=Ee.current,e!==null&&((ft&4194176)===ft?Ye!==null:(ft&62914560)!==ft&&!(ft&536870912)||e!==Ye))throw gl=po,xs;t.flags|=8192}}function Wi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Sc():536870912,t.lanes|=e,Ca|=e)}function Cl(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function dm(t,e,n){var a=e.pendingProps;switch(ho(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return kt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ie(Yt),ua(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ml(e)?an(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,_e!==null&&(gu(_e),_e=null))),kt(e),null;case 26:return n=e.memoizedState,t===null?(an(e),n!==null?(kt(e),ld(e,n)):(kt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(an(e),kt(e),ld(e,n)):(kt(e),e.flags&=-16777217):(t.memoizedProps!==a&&an(e),kt(e),e.flags&=-16777217),null;case 27:ci(e),n=dn.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return kt(e),null}t=He.current,ml(e)?gs(e):(t=jd(l,a,n),e.stateNode=t,an(e))}return kt(e),null;case 5:if(ci(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return kt(e),null}if(t=He.current,ml(e))gs(e);else{switch(l=ur(dn.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}t[Wt]=e,t[ae]=a;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Pt(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&an(e)}}return kt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&an(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=dn.current,ml(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=ee,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[Wt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Dd(t.nodeValue,n)),t||Kn(e)}else t=ur(t).createTextNode(a),t[Wt]=e,e.stateNode=t}return kt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ml(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Wt]=e}else pl(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),l=!1}else _e!==null&&(gu(_e),_e=null),l=!0;if(!l)return e.flags&256?($e(e),e):($e(e),null)}if($e(e),e.flags&128)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Wi(e,e.updateQueue),kt(e),null;case 4:return ua(),t===null&&ku(e.stateNode.containerInfo),kt(e),null;case 10:return Ie(e.type),kt(e),null;case 19:if(Ct(Bt),l=e.memoizedState,l===null)return kt(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)Cl(l,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(r=ji(t),r!==null){for(e.flags|=128,Cl(l,!1),t=r.updateQueue,e.updateQueue=t,Wi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)nd(n,t),n=n.sibling;return wt(Bt,Bt.current&1|2),e.child}t=t.sibling}l.tail!==null&&qe()>Fi&&(e.flags|=128,a=!0,Cl(l,!1),e.lanes=4194304)}else{if(!a)if(t=ji(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Wi(e,t),Cl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!dt)return kt(e),null}else 2*qe()-l.renderingStartTime>Fi&&n!==536870912&&(e.flags|=128,a=!0,Cl(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(t=l.last,t!==null?t.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=qe(),e.sibling=null,t=Bt.current,wt(Bt,a?t&1|2:t&1),e):(kt(e),null);case 22:case 23:return $e(e),vo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?n&536870912&&!(e.flags&128)&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),n=e.updateQueue,n!==null&&Wi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&Ct($n),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ie(Yt),kt(e),null;case 25:return null}throw Error(o(156,e.tag))}function hm(t,e){switch(ho(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ie(Yt),ua(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ci(e),null;case 13:if($e(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));pl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ct(Bt),null;case 4:return ua(),null;case 10:return Ie(e.type),null;case 22:case 23:return $e(e),vo(),t!==null&&Ct($n),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ie(Yt),null;case 25:return null;default:return null}}function id(t,e){switch(ho(e),e.tag){case 3:Ie(Yt),ua();break;case 26:case 27:case 5:ci(e);break;case 4:ua();break;case 13:$e(e);break;case 19:Ct(Bt);break;case 10:Ie(e.type);break;case 22:case 23:$e(e),vo(),t!==null&&Ct($n);break;case 24:Ie(Yt)}}var mm={getCacheForType:function(t){var e=Ft(Yt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},pm=typeof WeakMap=="function"?WeakMap:Map,_t=0,Ot=null,ct=null,ft=0,Tt=0,fe=null,ln=!1,ja=!1,fu=!1,rn=0,Mt=0,kn=0,la=0,du=0,we=0,Ca=0,Ul=null,Xe=null,hu=!1,mu=0,Fi=1/0,Ii=null,_n=null,tr=!1,ia=null,Hl=0,pu=0,bu=null,ql=0,vu=null;function de(){if(_t&2&&ft!==0)return ft&-ft;if(L.T!==null){var t=wa;return t!==0?t:Au()}return Ac()}function rd(){we===0&&(we=!(ft&536870912)||dt?xc():536870912);var t=Ee.current;return t!==null&&(t.flags|=32),we}function ne(t,e,n){(t===Ot&&Tt===2||t.cancelPendingCommit!==null)&&(Ua(t,0),on(t,ft,we,!1)),nl(t,n),(!(_t&2)||t!==Ot)&&(t===Ot&&(!(_t&2)&&(la|=n),Mt===4&&on(t,ft,we,!1)),Ge(t))}function od(t,e,n){if(_t&6)throw Error(o(327));var a=!n&&(e&60)===0&&(e&t.expiredLanes)===0||el(t,e),l=a?gm(t,e):Su(t,e,!0),r=a;do{if(l===0){ja&&!a&&on(t,e,0,!1);break}else if(l===6)on(t,e,0,!ln);else{if(n=t.current.alternate,r&&!bm(n)){l=Su(t,e,!1),r=!1;continue}if(l===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var d=t;l=Ul;var p=d.current.memoizedState.isDehydrated;if(p&&(Ua(d,s).flags|=256),s=Su(d,s,!1),s!==2){if(fu&&!p){d.errorRecoveryDisabledLanes|=r,la|=r,l=4;break t}r=Xe,Xe=l,r!==null&&gu(r)}l=s}if(r=!1,l!==2)continue}}if(l===1){Ua(t,0),on(t,e,0,!0);break}t:{switch(a=t,l){case 0:case 1:throw Error(o(345));case 4:if((e&4194176)===e){on(a,e,we,!ln);break t}break;case 2:Xe=null;break;case 3:case 5:break;default:throw Error(o(329))}if(a.finishedWork=n,a.finishedLanes=e,(e&62914560)===e&&(r=mu+300-qe(),10<r)){if(on(a,e,we,!ln),hi(a,0)!==0)break t;a.timeoutHandle=Rd(ud.bind(null,a,n,Xe,Ii,hu,e,we,la,Ca,ln,2,-0,0),r);break t}ud(a,n,Xe,Ii,hu,e,we,la,Ca,ln,0,-0,0)}}break}while(!0);Ge(t)}function gu(t){Xe===null?Xe=t:Xe.push.apply(Xe,t)}function ud(t,e,n,a,l,r,s,d,p,x,M,C,A){var R=e.subtreeFlags;if((R&8192||(R&16785408)===16785408)&&(Ql={stylesheets:null,count:0,unsuspend:Wm},Ff(e),e=Im(),e!==null)){t.cancelPendingCommit=e(pd.bind(null,t,n,a,l,s,d,p,1,C,A)),on(t,r,s,!x);return}pd(t,n,a,l,s,d,p,M,C,A)}function bm(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!ue(r(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function on(t,e,n,a){e&=~du,e&=~la,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var r=31-oe(l),s=1<<r;a[r]=-1,l&=~s}n!==0&&Ec(t,n,e)}function er(){return _t&6?!0:(Bl(0),!1)}function yu(){if(ct!==null){if(Tt===0)var t=ct.return;else t=ct,Fe=ta=null,Ao(t),Ta=null,yl=0,t=ct;for(;t!==null;)id(t.alternate,t),t=t.return;ct=null}}function Ua(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,Cm(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),yu(),Ot=t,ct=n=Dn(t.current,null),ft=e,Tt=0,fe=null,ln=!1,ja=el(t,e),fu=!1,Ca=we=du=la=kn=Mt=0,Xe=Ul=null,hu=!1,e&8&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-oe(a),r=1<<l;e|=t[l],a&=~r}return rn=e,Ai(),n}function cd(t,e){ot=null,L.H=Le,e===vl?(e=Os(),Tt=3):e===xs?(e=Os(),Tt=4):Tt=e===Ef?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,fe=e,ct===null&&(Mt=1,Zi(t,ye(e,t.current)))}function sd(){var t=L.H;return L.H=Le,t===null?Le:t}function fd(){var t=L.A;return L.A=mm,t}function xu(){Mt=4,ln||(ft&4194176)!==ft&&Ee.current!==null||(ja=!0),!(kn&134217727)&&!(la&134217727)||Ot===null||on(Ot,ft,we,!1)}function Su(t,e,n){var a=_t;_t|=2;var l=sd(),r=fd();(Ot!==t||ft!==e)&&(Ii=null,Ua(t,e)),e=!1;var s=Mt;t:do try{if(Tt!==0&&ct!==null){var d=ct,p=fe;switch(Tt){case 8:yu(),s=6;break t;case 3:case 2:case 6:Ee.current===null&&(e=!0);var x=Tt;if(Tt=0,fe=null,Ha(t,d,p,x),n&&ja){s=0;break t}break;default:x=Tt,Tt=0,fe=null,Ha(t,d,p,x)}}vm(),s=Mt;break}catch(M){cd(t,M)}while(!0);return e&&t.shellSuspendCounter++,Fe=ta=null,_t=a,L.H=l,L.A=r,ct===null&&(Ot=null,ft=0,Ai()),s}function vm(){for(;ct!==null;)dd(ct)}function gm(t,e){var n=_t;_t|=2;var a=sd(),l=fd();Ot!==t||ft!==e?(Ii=null,Fi=qe()+500,Ua(t,e)):ja=el(t,e);t:do try{if(Tt!==0&&ct!==null){e=ct;var r=fe;e:switch(Tt){case 1:Tt=0,fe=null,Ha(t,e,r,1);break;case 2:if(Ss(r)){Tt=0,fe=null,hd(e);break}e=function(){Tt===2&&Ot===t&&(Tt=7),Ge(t)},r.then(e,e);break t;case 3:Tt=7;break t;case 4:Tt=5;break t;case 7:Ss(r)?(Tt=0,fe=null,hd(e)):(Tt=0,fe=null,Ha(t,e,r,7));break;case 5:var s=null;switch(ct.tag){case 26:s=ct.memoizedState;case 5:case 27:var d=ct;if(!s||Xd(s)){Tt=0,fe=null;var p=d.sibling;if(p!==null)ct=p;else{var x=d.return;x!==null?(ct=x,nr(x)):ct=null}break e}}Tt=0,fe=null,Ha(t,e,r,5);break;case 6:Tt=0,fe=null,Ha(t,e,r,6);break;case 8:yu(),Mt=6;break t;default:throw Error(o(462))}}ym();break}catch(M){cd(t,M)}while(!0);return Fe=ta=null,L.H=a,L.A=l,_t=n,ct!==null?0:(Ot=null,ft=0,Ai(),Mt)}function ym(){for(;ct!==null&&!Lh();)dd(ct)}function dd(t){var e=jf(t.alternate,t,rn);t.memoizedProps=t.pendingProps,e===null?nr(t):ct=e}function hd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Df(n,e,e.pendingProps,e.type,void 0,ft);break;case 11:e=Df(n,e,e.pendingProps,e.type.render,e.ref,ft);break;case 5:Ao(e);default:id(n,e),e=ct=nd(e,rn),e=jf(n,e,rn)}t.memoizedProps=t.pendingProps,e===null?nr(t):ct=e}function Ha(t,e,n,a){Fe=ta=null,Ao(e),Ta=null,yl=0;var l=e.return;try{if(om(t,l,e,n,ft)){Mt=1,Zi(t,ye(n,t.current)),ct=null;return}}catch(r){if(l!==null)throw ct=l,r;Mt=1,Zi(t,ye(n,t.current)),ct=null;return}e.flags&32768?(dt||a===1?t=!0:ja||ft&536870912?t=!1:(ln=t=!0,(a===2||a===3||a===6)&&(a=Ee.current,a!==null&&a.tag===13&&(a.flags|=16384))),md(e,t)):nr(e)}function nr(t){var e=t;do{if(e.flags&32768){md(e,ln);return}t=e.return;var n=dm(e.alternate,e,rn);if(n!==null){ct=n;return}if(e=e.sibling,e!==null){ct=e;return}ct=e=t}while(e!==null);Mt===0&&(Mt=5)}function md(t,e){do{var n=hm(t.alternate,t);if(n!==null){n.flags&=32767,ct=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ct=t;return}ct=t=n}while(t!==null);Mt=6,ct=null}function pd(t,e,n,a,l,r,s,d,p,x){var M=L.T,C=Z.p;try{Z.p=2,L.T=null,xm(t,e,n,a,C,l,r,s,d,p,x)}finally{L.T=M,Z.p=C}}function xm(t,e,n,a,l,r,s,d){do qa();while(ia!==null);if(_t&6)throw Error(o(327));var p=t.finishedWork;if(a=t.finishedLanes,p===null)return null;if(t.finishedWork=null,t.finishedLanes=0,p===t.current)throw Error(o(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=p.lanes|p.childLanes;if(x|=co,Fh(t,a,x,r,s,d),t===Ot&&(ct=Ot=null,ft=0),!(p.subtreeFlags&10256)&&!(p.flags&10256)||tr||(tr=!0,pu=x,bu=n,Tm(si,function(){return qa(),null})),n=(p.flags&15990)!==0,p.subtreeFlags&15990||n?(n=L.T,L.T=null,r=Z.p,Z.p=2,s=_t,_t|=4,cm(t,p),$f(p,t),Q0(Nu,t.containerInfo),mr=!!Mu,Nu=Mu=null,t.current=p,Zf(t,p.alternate,p),Xh(),_t=s,Z.p=r,L.T=n):t.current=p,tr?(tr=!1,ia=t,Hl=a):bd(t,x),x=t.pendingLanes,x===0&&(_n=null),Kh(p.stateNode),Ge(t),e!==null)for(l=t.onRecoverableError,p=0;p<e.length;p++)x=e[p],l(x.value,{componentStack:x.stack});return Hl&3&&qa(),x=t.pendingLanes,a&4194218&&x&42?t===vu?ql++:(ql=0,vu=t):ql=0,Bl(0),null}function bd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,Sl(e)))}function qa(){if(ia!==null){var t=ia,e=pu;pu=0;var n=Tc(Hl),a=L.T,l=Z.p;try{if(Z.p=32>n?32:n,L.T=null,ia===null)var r=!1;else{n=bu,bu=null;var s=ia,d=Hl;if(ia=null,Hl=0,_t&6)throw Error(o(331));var p=_t;if(_t|=4,td(s.current),Wf(s,s.current,d,n),_t=p,Bl(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(tl,s)}catch{}r=!0}return r}finally{Z.p=l,L.T=a,bd(t,e)}}return!1}function vd(t,e,n){e=ye(n,e),e=Bo(t.stateNode,e,2),t=Tn(t,e,2),t!==null&&(nl(t,2),Ge(t))}function Et(t,e,n){if(t.tag===3)vd(t,t,n);else for(;e!==null;){if(e.tag===3){vd(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){t=ye(n,t),n=xf(2),a=Tn(e,n,2),a!==null&&(Sf(n,a,e,t),nl(a,2),Ge(a));break}}e=e.return}}function Eu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new pm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(fu=!0,l.add(n),t=Sm.bind(null,t,e,n),e.then(t,t))}function Sm(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ot===t&&(ft&n)===n&&(Mt===4||Mt===3&&(ft&62914560)===ft&&300>qe()-mu?!(_t&2)&&Ua(t,0):du|=n,Ca===ft&&(Ca=0)),Ge(t)}function gd(t,e){e===0&&(e=Sc()),t=bn(t,e),t!==null&&(nl(t,e),Ge(t))}function Em(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gd(t,n)}function Om(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),gd(t,n)}function Tm(t,e){return Br(t,e)}var ar=null,Ba=null,Ou=!1,lr=!1,Tu=!1,ra=0;function Ge(t){t!==Ba&&t.next===null&&(Ba===null?ar=Ba=t:Ba=Ba.next=t),lr=!0,Ou||(Ou=!0,wm(Am))}function Bl(t,e){if(!Tu&&lr){Tu=!0;do for(var n=!1,a=ar;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var s=a.suspendedLanes,d=a.pingedLanes;r=(1<<31-oe(42|t)+1)-1,r&=l&~(s&~d),r=r&201326677?r&201326677|1:r?r|2:0}r!==0&&(n=!0,Sd(a,r))}else r=ft,r=hi(a,a===Ot?r:0),!(r&3)||el(a,r)||(n=!0,Sd(a,r));a=a.next}while(n);Tu=!1}}function Am(){lr=Ou=!1;var t=0;ra!==0&&(jm()&&(t=ra),ra=0);for(var e=qe(),n=null,a=ar;a!==null;){var l=a.next,r=yd(a,e);r===0?(a.next=null,n===null?ar=l:n.next=l,l===null&&(Ba=n)):(n=a,(t!==0||r&3)&&(lr=!0)),a=l}Bl(t)}function yd(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-oe(r),d=1<<s,p=l[s];p===-1?(!(d&n)||d&a)&&(l[s]=Wh(d,e)):p<=e&&(t.expiredLanes|=d),r&=~d}if(e=Ot,n=ft,n=hi(t,t===e?n:0),a=t.callbackNode,n===0||t===e&&Tt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Yr(a),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||el(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Yr(a),Tc(n)){case 2:case 8:n=gc;break;case 32:n=si;break;case 268435456:n=yc;break;default:n=si}return a=xd.bind(null,t),n=Br(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Yr(a),t.callbackPriority=2,t.callbackNode=null,2}function xd(t,e){var n=t.callbackNode;if(qa()&&t.callbackNode!==n)return null;var a=ft;return a=hi(t,t===Ot?a:0),a===0?null:(od(t,a,e),yd(t,qe()),t.callbackNode!=null&&t.callbackNode===n?xd.bind(null,t):null)}function Sd(t,e){if(qa())return null;od(t,e,!0)}function wm(t){Um(function(){_t&6?Br(vc,t):t()})}function Au(){return ra===0&&(ra=xc()),ra}function Ed(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function Od(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function zm(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var r=Ed((l[ae]||null).action),s=a.submitter;s&&(e=(e=s[ae]||null)?Ed(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var d=new Ei("action","action",null,a,l);t.push({event:d,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(ra!==0){var p=s?Od(l,s):new FormData(l);jo(n,{pending:!0,data:p,method:l.method,action:r},null,p)}}else typeof r=="function"&&(d.preventDefault(),p=s?Od(l,s):new FormData(l),jo(n,{pending:!0,data:p,method:l.method,action:r},r,p))},currentTarget:l}]})}}for(var wu=0;wu<ms.length;wu++){var zu=ms[wu],Dm=zu.toLowerCase(),km=zu[0].toUpperCase()+zu.slice(1);ke(Dm,"on"+km)}ke(cs,"onAnimationEnd"),ke(ss,"onAnimationIteration"),ke(fs,"onAnimationStart"),ke("dblclick","onDoubleClick"),ke("focusin","onFocus"),ke("focusout","onBlur"),ke(V0,"onTransitionRun"),ke(K0,"onTransitionStart"),ke(J0,"onTransitionCancel"),ke(ds,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_m=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function Td(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var s=a.length-1;0<=s;s--){var d=a[s],p=d.instance,x=d.currentTarget;if(d=d.listener,p!==r&&l.isPropagationStopped())break t;r=d,l.currentTarget=x;try{r(l)}catch(M){Qi(M)}l.currentTarget=null,r=p}else for(s=0;s<a.length;s++){if(d=a[s],p=d.instance,x=d.currentTarget,d=d.listener,p!==r&&l.isPropagationStopped())break t;r=d,l.currentTarget=x;try{r(l)}catch(M){Qi(M)}l.currentTarget=null,r=p}}}}function st(t,e){var n=e[Xr];n===void 0&&(n=e[Xr]=new Set);var a=t+"__bubble";n.has(a)||(Ad(e,t,2,!1),n.add(a))}function Du(t,e,n){var a=0;e&&(a|=4),Ad(n,t,a,e)}var ir="_reactListening"+Math.random().toString(36).slice(2);function ku(t){if(!t[ir]){t[ir]=!0,zc.forEach(function(n){n!=="selectionchange"&&(_m.has(n)||Du(n,!1,t),Du(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ir]||(e[ir]=!0,Du("selectionchange",!1,e))}}function Ad(t,e,n,a){switch(Jd(e)){case 2:var l=np;break;case 8:l=ap;break;default:l=Xu}n=l.bind(null,e,n,t),l=void 0,!Pr||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function _u(t,e,n,a,l){var r=a;if(!(e&1)&&!(e&2)&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var d=a.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(s===4)for(s=a.return;s!==null;){var p=s.tag;if((p===3||p===4)&&(p=s.stateNode.containerInfo,p===l||p.nodeType===8&&p.parentNode===l))return;s=s.return}for(;d!==null;){if(s=Yn(d),s===null)return;if(p=s.tag,p===5||p===6||p===26||p===27){a=r=s;continue t}d=d.parentNode}}a=a.return}Bc(function(){var x=r,M=Jr(n),C=[];t:{var A=hs.get(t);if(A!==void 0){var R=Ei,$=t;switch(t){case"keypress":if(xi(n)===0)break t;case"keydown":case"keyup":R=O0;break;case"focusin":$="focus",R=to;break;case"focusout":$="blur",R=to;break;case"beforeblur":case"afterblur":R=to;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=w0;break;case cs:case ss:case fs:R=m0;break;case ds:R=D0;break;case"scroll":case"scrollend":R=c0;break;case"wheel":R=_0;break;case"copy":case"cut":case"paste":R=b0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Qc;break;case"toggle":case"beforetoggle":R=M0}var nt=(e&4)!==0,Nt=!nt&&(t==="scroll"||t==="scrollend"),O=nt?A!==null?A+"Capture":null:A;nt=[];for(var y=x,T;y!==null;){var j=y;if(T=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||T===null||O===null||(j=il(y,O),j!=null&&nt.push(Ll(y,j,T))),Nt)break;y=y.return}0<nt.length&&(A=new R(A,$,null,n,M),C.push({event:A,listeners:nt}))}}if(!(e&7)){t:{if(A=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",A&&n!==Kr&&($=n.relatedTarget||n.fromElement)&&(Yn($)||$[ca]))break t;if((R||A)&&(A=M.window===M?M:(A=M.ownerDocument)?A.defaultView||A.parentWindow:window,R?($=n.relatedTarget||n.toElement,R=x,$=$?Yn($):null,$!==null&&(Nt=F($),nt=$.tag,$!==Nt||nt!==5&&nt!==27&&nt!==6)&&($=null)):(R=null,$=x),R!==$)){if(nt=Xc,j="onMouseLeave",O="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(nt=Qc,j="onPointerLeave",O="onPointerEnter",y="pointer"),Nt=R==null?A:ll(R),T=$==null?A:ll($),A=new nt(j,y+"leave",R,n,M),A.target=Nt,A.relatedTarget=T,j=null,Yn(M)===x&&(nt=new nt(O,y+"enter",$,n,M),nt.target=T,nt.relatedTarget=Nt,j=nt),Nt=j,R&&$)e:{for(nt=R,O=$,y=0,T=nt;T;T=Ya(T))y++;for(T=0,j=O;j;j=Ya(j))T++;for(;0<y-T;)nt=Ya(nt),y--;for(;0<T-y;)O=Ya(O),T--;for(;y--;){if(nt===O||O!==null&&nt===O.alternate)break e;nt=Ya(nt),O=Ya(O)}nt=null}else nt=null;R!==null&&wd(C,A,R,nt,!1),$!==null&&Nt!==null&&wd(C,Nt,$,nt,!0)}}t:{if(A=x?ll(x):window,R=A.nodeName&&A.nodeName.toLowerCase(),R==="select"||R==="input"&&A.type==="file")var K=Fc;else if(Pc(A))if(Ic)K=X0;else{K=Y0;var ut=B0}else R=A.nodeName,!R||R.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?x&&Vr(x.elementType)&&(K=Fc):K=L0;if(K&&(K=K(t,x))){Wc(C,K,n,M);break t}ut&&ut(t,A,x),t==="focusout"&&x&&A.type==="number"&&x.memoizedProps.value!=null&&Zr(A,"number",A.value)}switch(ut=x?ll(x):window,t){case"focusin":(Pc(ut)||ut.contentEditable==="true")&&(ga=ut,ro=x,hl=null);break;case"focusout":hl=ro=ga=null;break;case"mousedown":oo=!0;break;case"contextmenu":case"mouseup":case"dragend":oo=!1,os(C,n,M);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":os(C,n,M)}var W;if(no)t:{switch(t){case"compositionstart":var I="onCompositionStart";break t;case"compositionend":I="onCompositionEnd";break t;case"compositionupdate":I="onCompositionUpdate";break t}I=void 0}else va?Jc(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(Zc&&n.locale!=="ko"&&(va||I!=="onCompositionStart"?I==="onCompositionEnd"&&va&&(W=Yc()):(pn=M,Wr="value"in pn?pn.value:pn.textContent,va=!0)),ut=rr(x,I),0<ut.length&&(I=new Gc(I,t,null,n,M),C.push({event:I,listeners:ut}),W?I.data=W:(W=$c(n),W!==null&&(I.data=W)))),(W=j0?C0(t,n):U0(t,n))&&(I=rr(x,"onBeforeInput"),0<I.length&&(ut=new Gc("onBeforeInput","beforeinput",null,n,M),C.push({event:ut,listeners:I}),ut.data=W)),zm(C,t,x,n,M)}Td(C,e)})}function Ll(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rr(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,r=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=il(t,n),l!=null&&a.unshift(Ll(t,l,r)),l=il(t,e),l!=null&&a.push(Ll(t,l,r))),t=t.return}return a}function Ya(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function wd(t,e,n,a,l){for(var r=e._reactName,s=[];n!==null&&n!==a;){var d=n,p=d.alternate,x=d.stateNode;if(d=d.tag,p!==null&&p===a)break;d!==5&&d!==26&&d!==27||x===null||(p=x,l?(x=il(n,r),x!=null&&s.unshift(Ll(n,x,p))):l||(x=il(n,r),x!=null&&s.push(Ll(n,x,p)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var Rm=/\r\n?/g,Mm=/\u0000|\uFFFD/g;function zd(t){return(typeof t=="string"?t:""+t).replace(Rm,`
`).replace(Mm,"")}function Dd(t,e){return e=zd(e),zd(t)===e}function or(){}function St(t,e,n,a,l,r){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ma(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ma(t,""+a);break;case"className":pi(t,"class",a);break;case"tabIndex":pi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(t,n,a);break;case"style":Hc(t,a,r);break;case"data":if(e!=="object"){pi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=gi(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&St(t,e,"name",l.name,l,null),St(t,e,"formEncType",l.formEncType,l,null),St(t,e,"formMethod",l.formMethod,l,null),St(t,e,"formTarget",l.formTarget,l,null)):(St(t,e,"encType",l.encType,l,null),St(t,e,"method",l.method,l,null),St(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=gi(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=or);break;case"onScroll":a!=null&&st("scroll",t);break;case"onScrollEnd":a!=null&&st("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=gi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":st("beforetoggle",t),st("toggle",t),mi(t,"popover",a);break;case"xlinkActuate":Ve(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ve(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ve(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ve(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ve(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ve(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ve(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":mi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=o0.get(n)||n,mi(t,n,a))}}function Ru(t,e,n,a,l,r){switch(n){case"style":Hc(t,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(o(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ma(t,a):(typeof a=="number"||typeof a=="bigint")&&ma(t,""+a);break;case"onScroll":a!=null&&st("scroll",t);break;case"onScrollEnd":a!=null&&st("scrollend",t);break;case"onClick":a!=null&&(t.onclick=or);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Dc.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),r=t[ae]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):mi(t,n,a)}}}function Pt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":st("error",t),st("load",t);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:St(t,e,r,s,n,null)}}l&&St(t,e,"srcSet",n.srcSet,n,null),a&&St(t,e,"src",n.src,n,null);return;case"input":st("invalid",t);var d=r=s=l=null,p=null,x=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":l=M;break;case"type":s=M;break;case"checked":p=M;break;case"defaultChecked":x=M;break;case"value":r=M;break;case"defaultValue":d=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,e));break;default:St(t,e,a,M,n,null)}}Nc(t,r,d,p,x,s,l,!1),bi(t);return;case"select":st("invalid",t),a=s=r=null;for(l in n)if(n.hasOwnProperty(l)&&(d=n[l],d!=null))switch(l){case"value":r=d;break;case"defaultValue":s=d;break;case"multiple":a=d;default:St(t,e,l,d,n,null)}e=r,n=s,t.multiple=!!a,e!=null?ha(t,!!a,e,!1):n!=null&&ha(t,!!a,n,!0);return;case"textarea":st("invalid",t),r=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(d=n[s],d!=null))switch(s){case"value":a=d;break;case"defaultValue":l=d;break;case"children":r=d;break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(o(91));break;default:St(t,e,s,d,n,null)}Cc(t,a,l,r),bi(t);return;case"option":for(p in n)if(n.hasOwnProperty(p)&&(a=n[p],a!=null))switch(p){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:St(t,e,p,a,n,null)}return;case"dialog":st("cancel",t),st("close",t);break;case"iframe":case"object":st("load",t);break;case"video":case"audio":for(a=0;a<Yl.length;a++)st(Yl[a],t);break;case"image":st("error",t),st("load",t);break;case"details":st("toggle",t);break;case"embed":case"source":case"link":st("error",t),st("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in n)if(n.hasOwnProperty(x)&&(a=n[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:St(t,e,x,a,n,null)}return;default:if(Vr(e)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&Ru(t,e,M,a,n,void 0));return}}for(d in n)n.hasOwnProperty(d)&&(a=n[d],a!=null&&St(t,e,d,a,n,null))}function Nm(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,d=null,p=null,x=null,M=null;for(R in n){var C=n[R];if(n.hasOwnProperty(R)&&C!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":p=C;default:a.hasOwnProperty(R)||St(t,e,R,null,a,C)}}for(var A in a){var R=a[A];if(C=n[A],a.hasOwnProperty(A)&&(R!=null||C!=null))switch(A){case"type":r=R;break;case"name":l=R;break;case"checked":x=R;break;case"defaultChecked":M=R;break;case"value":s=R;break;case"defaultValue":d=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,e));break;default:R!==C&&St(t,e,A,R,a,C)}}Qr(t,s,d,p,x,M,r,l);return;case"select":R=s=d=A=null;for(r in n)if(p=n[r],n.hasOwnProperty(r)&&p!=null)switch(r){case"value":break;case"multiple":R=p;default:a.hasOwnProperty(r)||St(t,e,r,null,a,p)}for(l in a)if(r=a[l],p=n[l],a.hasOwnProperty(l)&&(r!=null||p!=null))switch(l){case"value":A=r;break;case"defaultValue":d=r;break;case"multiple":s=r;default:r!==p&&St(t,e,l,r,a,p)}e=d,n=s,a=R,A!=null?ha(t,!!n,A,!1):!!a!=!!n&&(e!=null?ha(t,!!n,e,!0):ha(t,!!n,n?[]:"",!1));return;case"textarea":R=A=null;for(d in n)if(l=n[d],n.hasOwnProperty(d)&&l!=null&&!a.hasOwnProperty(d))switch(d){case"value":break;case"children":break;default:St(t,e,d,null,a,l)}for(s in a)if(l=a[s],r=n[s],a.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":A=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==r&&St(t,e,s,l,a,r)}jc(t,A,R);return;case"option":for(var $ in n)if(A=n[$],n.hasOwnProperty($)&&A!=null&&!a.hasOwnProperty($))switch($){case"selected":t.selected=!1;break;default:St(t,e,$,null,a,A)}for(p in a)if(A=a[p],R=n[p],a.hasOwnProperty(p)&&A!==R&&(A!=null||R!=null))switch(p){case"selected":t.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:St(t,e,p,A,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var nt in n)A=n[nt],n.hasOwnProperty(nt)&&A!=null&&!a.hasOwnProperty(nt)&&St(t,e,nt,null,a,A);for(x in a)if(A=a[x],R=n[x],a.hasOwnProperty(x)&&A!==R&&(A!=null||R!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,e));break;default:St(t,e,x,A,a,R)}return;default:if(Vr(e)){for(var Nt in n)A=n[Nt],n.hasOwnProperty(Nt)&&A!==void 0&&!a.hasOwnProperty(Nt)&&Ru(t,e,Nt,void 0,a,A);for(M in a)A=a[M],R=n[M],!a.hasOwnProperty(M)||A===R||A===void 0&&R===void 0||Ru(t,e,M,A,a,R);return}}for(var O in n)A=n[O],n.hasOwnProperty(O)&&A!=null&&!a.hasOwnProperty(O)&&St(t,e,O,null,a,A);for(C in a)A=a[C],R=n[C],!a.hasOwnProperty(C)||A===R||A==null&&R==null||St(t,e,C,A,a,R)}var Mu=null,Nu=null;function ur(t){return t.nodeType===9?t:t.ownerDocument}function kd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function _d(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=null;function jm(){var t=window.event;return t&&t.type==="popstate"?t===Cu?!1:(Cu=t,!0):(Cu=null,!1)}var Rd=typeof setTimeout=="function"?setTimeout:void 0,Cm=typeof clearTimeout=="function"?clearTimeout:void 0,Md=typeof Promise=="function"?Promise:void 0,Um=typeof queueMicrotask=="function"?queueMicrotask:typeof Md<"u"?function(t){return Md.resolve(null).then(t).catch(Hm)}:Rd;function Hm(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,a=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(a===0){t.removeChild(l),$l(e);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=l}while(n);$l(e)}function Hu(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Hu(n),Gr(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function qm(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[al])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Me(t.nextSibling),t===null)break}return null}function Bm(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Me(t.nextSibling),t===null))return null;return t}function Me(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}function Nd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function jd(t,e,n){switch(e=ur(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}var ze=new Map,Cd=new Set;function cr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var un=Z.d;Z.d={f:Ym,r:Lm,D:Xm,C:Gm,L:Qm,m:Zm,X:Km,S:Vm,M:Jm};function Ym(){var t=un.f(),e=er();return t||e}function Lm(t){var e=sa(t);e!==null&&e.tag===5&&e.type==="form"?uf(e):un.r(t)}var La=typeof document>"u"?null:document;function Ud(t,e,n){var a=La;if(a&&typeof e=="string"&&e){var l=ve(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Cd.has(l)||(Cd.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Pt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function Xm(t){un.D(t),Ud("dns-prefetch",t,null)}function Gm(t,e){un.C(t,e),Ud("preconnect",t,e)}function Qm(t,e,n){un.L(t,e,n);var a=La;if(a&&t&&e){var l='link[rel="preload"][as="'+ve(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+ve(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+ve(n.imageSizes)+'"]')):l+='[href="'+ve(t)+'"]';var r=l;switch(e){case"style":r=Xa(t);break;case"script":r=Ga(t)}ze.has(r)||(t=at({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),ze.set(r,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(Xl(r))||e==="script"&&a.querySelector(Gl(r))||(e=a.createElement("link"),Pt(e,"link",t),Gt(e),a.head.appendChild(e)))}}function Zm(t,e){un.m(t,e);var n=La;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+ve(a)+'"][href="'+ve(t)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ga(t)}if(!ze.has(r)&&(t=at({rel:"modulepreload",href:t},e),ze.set(r,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Gl(r)))return}a=n.createElement("link"),Pt(a,"link",t),Gt(a),n.head.appendChild(a)}}}function Vm(t,e,n){un.S(t,e,n);var a=La;if(a&&t){var l=fa(a).hoistableStyles,r=Xa(t);e=e||"default";var s=l.get(r);if(!s){var d={loading:0,preload:null};if(s=a.querySelector(Xl(r)))d.loading=5;else{t=at({rel:"stylesheet",href:t,"data-precedence":e},n),(n=ze.get(r))&&qu(t,n);var p=s=a.createElement("link");Gt(p),Pt(p,"link",t),p._p=new Promise(function(x,M){p.onload=x,p.onerror=M}),p.addEventListener("load",function(){d.loading|=1}),p.addEventListener("error",function(){d.loading|=2}),d.loading|=4,sr(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:d},l.set(r,s)}}}function Km(t,e){un.X(t,e);var n=La;if(n&&t){var a=fa(n).hoistableScripts,l=Ga(t),r=a.get(l);r||(r=n.querySelector(Gl(l)),r||(t=at({src:t,async:!0},e),(e=ze.get(l))&&Bu(t,e),r=n.createElement("script"),Gt(r),Pt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Jm(t,e){un.M(t,e);var n=La;if(n&&t){var a=fa(n).hoistableScripts,l=Ga(t),r=a.get(l);r||(r=n.querySelector(Gl(l)),r||(t=at({src:t,async:!0,type:"module"},e),(e=ze.get(l))&&Bu(t,e),r=n.createElement("script"),Gt(r),Pt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function Hd(t,e,n,a){var l=(l=dn.current)?cr(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Xa(n.href),n=fa(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Xa(n.href);var r=fa(l).hoistableStyles,s=r.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=l.querySelector(Xl(t)))&&!r._p&&(s.instance=r,s.state.loading=5),ze.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ze.set(t,n),r||$m(l,t,n,s.state))),e&&a===null)throw Error(o(528,""));return s}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ga(n),n=fa(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Xa(t){return'href="'+ve(t)+'"'}function Xl(t){return'link[rel="stylesheet"]['+t+"]"}function qd(t){return at({},t,{"data-precedence":t.precedence,precedence:null})}function $m(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Pt(e,"link",n),Gt(e),t.head.appendChild(e))}function Ga(t){return'[src="'+ve(t)+'"]'}function Gl(t){return"script[async]"+t}function Bd(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+ve(n.href)+'"]');if(a)return e.instance=a,Gt(a),a;var l=at({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Gt(a),Pt(a,"style",l),sr(a,n.precedence,t),e.instance=a;case"stylesheet":l=Xa(n.href);var r=t.querySelector(Xl(l));if(r)return e.state.loading|=4,e.instance=r,Gt(r),r;a=qd(n),(l=ze.get(l))&&qu(a,l),r=(t.ownerDocument||t).createElement("link"),Gt(r);var s=r;return s._p=new Promise(function(d,p){s.onload=d,s.onerror=p}),Pt(r,"link",a),e.state.loading|=4,sr(r,n.precedence,t),e.instance=r;case"script":return r=Ga(n.src),(l=t.querySelector(Gl(r)))?(e.instance=l,Gt(l),l):(a=n,(l=ze.get(r))&&(a=at({},n),Bu(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Gt(l),Pt(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(a=e.instance,e.state.loading|=4,sr(a,n.precedence,t));return e.instance}function sr(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,s=0;s<a.length;s++){var d=a[s];if(d.dataset.precedence===e)r=d;else if(r!==l)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function qu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Bu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var fr=null;function Yd(t,e,n){if(fr===null){var a=new Map,l=fr=new Map;l.set(n,a)}else l=fr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var r=n[l];if(!(r[al]||r[Wt]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var d=a.get(s);d?d.push(r):a.set(s,[r])}}return a}function Ld(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Pm(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Xd(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}var Ql=null;function Wm(){}function Fm(t,e,n){if(Ql===null)throw Error(o(475));var a=Ql;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&!(e.state.loading&4)){if(e.instance===null){var l=Xa(n.href),r=t.querySelector(Xl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=dr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=r,Gt(r);return}r=t.ownerDocument||t,n=qd(n),(l=ze.get(l))&&qu(n,l),r=r.createElement("link"),Gt(r);var s=r;s._p=new Promise(function(d,p){s.onload=d,s.onerror=p}),Pt(r,"link",n),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&!(e.state.loading&3)&&(a.count++,e=dr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Im(){if(Ql===null)throw Error(o(475));var t=Ql;return t.stylesheets&&t.count===0&&Yu(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&Yu(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function dr(){if(this.count--,this.count===0){if(this.stylesheets)Yu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hr=null;function Yu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hr=new Map,e.forEach(tp,t),hr=null,dr.call(t))}function tp(t,e){if(!(e.state.loading&4)){var n=hr.get(t);if(n)var a=n.get(null);else{n=new Map,hr.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),r=n.get(s)||a,r===a&&n.set(null,l),n.set(s,l),this.count++,a=dr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Zl={$$typeof:H,Provider:null,Consumer:null,_currentValue:rt,_currentValue2:rt,_threadCount:0};function ep(t,e,n,a,l,r,s,d){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Lr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Lr(0),this.hiddenUpdates=Lr(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function Gd(t,e,n,a,l,r,s,d,p,x,M,C){return t=new ep(t,e,n,s,d,p,x,C),e=1,r===!0&&(e|=24),r=Ae(3,null,null,e),t.current=r,r.stateNode=t,e=go(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:e},Fo(r),t}function Qd(t){return t?(t=Sa,t):Sa}function Zd(t,e,n,a,l,r){l=Qd(l),a.context===null?a.context=l:a.pendingContext=l,a=On(e),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=Tn(t,a,e),n!==null&&(ne(n,t,e),Dl(n,t,e))}function Vd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lu(t,e){Vd(t,e),(t=t.alternate)&&Vd(t,e)}function Kd(t){if(t.tag===13){var e=bn(t,67108864);e!==null&&ne(e,t,67108864),Lu(t,67108864)}}var mr=!0;function np(t,e,n,a){var l=L.T;L.T=null;var r=Z.p;try{Z.p=2,Xu(t,e,n,a)}finally{Z.p=r,L.T=l}}function ap(t,e,n,a){var l=L.T;L.T=null;var r=Z.p;try{Z.p=8,Xu(t,e,n,a)}finally{Z.p=r,L.T=l}}function Xu(t,e,n,a){if(mr){var l=Gu(a);if(l===null)_u(t,e,a,pr,n),$d(t,a);else if(ip(l,t,e,n,a))a.stopPropagation();else if($d(t,a),e&4&&-1<lp.indexOf(t)){for(;l!==null;){var r=sa(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Bn(r.pendingLanes);if(s!==0){var d=r;for(d.pendingLanes|=2,d.entangledLanes|=2;s;){var p=1<<31-oe(s);d.entanglements[1]|=p,s&=~p}Ge(r),!(_t&6)&&(Fi=qe()+500,Bl(0))}}break;case 13:d=bn(r,2),d!==null&&ne(d,r,2),er(),Lu(r,2)}if(r=Gu(a),r===null&&_u(t,e,a,pr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else _u(t,e,a,null,n)}}function Gu(t){return t=Jr(t),Qu(t)}var pr=null;function Qu(t){if(pr=null,t=Yn(t),t!==null){var e=F(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=yt(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return pr=t,null}function Jd(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gh()){case vc:return 2;case gc:return 8;case si:case Qh:return 32;case yc:return 268435456;default:return 32}default:return 32}}var Zu=!1,Rn=null,Mn=null,Nn=null,Vl=new Map,Kl=new Map,jn=[],lp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function $d(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Vl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Kl.delete(e.pointerId)}}function Jl(t,e,n,a,l,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=sa(e),e!==null&&Kd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function ip(t,e,n,a,l){switch(e){case"focusin":return Rn=Jl(Rn,t,e,n,a,l),!0;case"dragenter":return Mn=Jl(Mn,t,e,n,a,l),!0;case"mouseover":return Nn=Jl(Nn,t,e,n,a,l),!0;case"pointerover":var r=l.pointerId;return Vl.set(r,Jl(Vl.get(r)||null,t,e,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Kl.set(r,Jl(Kl.get(r)||null,t,e,n,a,l)),!0}return!1}function Pd(t){var e=Yn(t.target);if(e!==null){var n=F(e);if(n!==null){if(e=n.tag,e===13){if(e=yt(n),e!==null){t.blockedOn=e,Ih(t.priority,function(){if(n.tag===13){var a=de(),l=bn(n,a);l!==null&&ne(l,n,a),Lu(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function br(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);Kr=a,n.target.dispatchEvent(a),Kr=null}else return e=sa(n),e!==null&&Kd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wd(t,e,n){br(t)&&n.delete(e)}function rp(){Zu=!1,Rn!==null&&br(Rn)&&(Rn=null),Mn!==null&&br(Mn)&&(Mn=null),Nn!==null&&br(Nn)&&(Nn=null),Vl.forEach(Wd),Kl.forEach(Wd)}function vr(t,e){t.blockedOn===e&&(t.blockedOn=null,Zu||(Zu=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,rp)))}var gr=null;function Fd(t){gr!==t&&(gr=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gr===t&&(gr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(Qu(a||n)===null)continue;break}var r=sa(n);r!==null&&(t.splice(e,3),e-=3,jo(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function $l(t){function e(p){return vr(p,t)}Rn!==null&&vr(Rn,t),Mn!==null&&vr(Mn,t),Nn!==null&&vr(Nn,t),Vl.forEach(e),Kl.forEach(e);for(var n=0;n<jn.length;n++){var a=jn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<jn.length&&(n=jn[0],n.blockedOn===null);)Pd(n),n.blockedOn===null&&jn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],s=l[ae]||null;if(typeof r=="function")s||Fd(n);else if(s){var d=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[ae]||null)d=s.formAction;else if(Qu(l)!==null)continue}else d=s.action;typeof d=="function"?n[a+1]=d:(n.splice(a,3),a-=3),Fd(n)}}}function Vu(t){this._internalRoot=t}yr.prototype.render=Vu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,a=de();Zd(n,a,t,e,null,null)},yr.prototype.unmount=Vu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;t.tag===0&&qa(),Zd(t.current,2,null,t,null,null),er(),e[ca]=null}};function yr(t){this._internalRoot=t}yr.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ac();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jn.length&&e!==0&&e<jn[n].priority;n++);jn.splice(n,0,t),n===0&&Pd(t)}};var Id=u.version;if(Id!=="19.0.0")throw Error(o(527,Id,"19.0.0"));Z.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=q(e),t=t!==null?Y(t):null,t=t===null?null:t.stateNode,t};var op={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:L,findFiberByHostInstance:Yn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xr.isDisabled&&xr.supportsFiber)try{tl=xr.inject(op),re=xr}catch{}}return Wl.createRoot=function(t,e){if(!f(t))throw Error(o(299));var n=!1,a="",l=bf,r=vf,s=gf,d=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(d=e.unstable_transitionCallbacks)),e=Gd(t,1,!1,null,null,n,a,l,r,s,d,null),t[ca]=e.current,ku(t.nodeType===8?t.parentNode:t),new Vu(e)},Wl.hydrateRoot=function(t,e,n){if(!f(t))throw Error(o(299));var a=!1,l="",r=bf,s=vf,d=gf,p=null,x=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(d=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(p=n.unstable_transitionCallbacks),n.formState!==void 0&&(x=n.formState)),e=Gd(t,1,!0,e,n??null,a,l,r,s,d,p,x),e.context=Qd(null),n=e.current,a=de(),l=On(a),l.callback=null,Tn(n,l,a),e.current.lanes=a,nl(e,a),Ge(e),t[ca]=e.current,ku(t),new yr(e)},Wl.version="19.0.0",Wl}var ch;function gp(){if(ch)return $u.exports;ch=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(u){console.error(u)}}return i(),$u.exports=vp(),$u.exports}var yp=gp(),Fl={},sh;function xp(){if(sh)return Fl;sh=1,Object.defineProperty(Fl,"__esModule",{value:!0}),Fl.parse=v,Fl.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,u=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,h=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function v(D,H){const k=new h,_=D.length;if(_<2)return k;const U=(H==null?void 0:H.decode)||z;let B=0;do{const V=D.indexOf("=",B);if(V===-1)break;const G=D.indexOf(";",B),it=G===-1?_:G;if(V>it){B=D.lastIndexOf(";",V-1)+1;continue}const Q=E(D,B,V),mt=b(D,V,Q),gt=D.slice(Q,mt);if(k[gt]===void 0){let At=E(D,V+1,it),L=b(D,it,At);const at=U(D.slice(At,L));k[gt]=at}B=it+1}while(B<_);return k}function E(D,H,k){do{const _=D.charCodeAt(H);if(_!==32&&_!==9)return H}while(++H<k);return k}function b(D,H,k){for(;H>k;){const _=D.charCodeAt(--H);if(_!==32&&_!==9)return H+1}return k}function m(D,H,k){const _=(k==null?void 0:k.encode)||encodeURIComponent;if(!i.test(D))throw new TypeError(`argument name is invalid: ${D}`);const U=_(H);if(!u.test(U))throw new TypeError(`argument val is invalid: ${H}`);let B=D+"="+U;if(!k)return B;if(k.maxAge!==void 0){if(!Number.isInteger(k.maxAge))throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);B+="; Max-Age="+k.maxAge}if(k.domain){if(!c.test(k.domain))throw new TypeError(`option domain is invalid: ${k.domain}`);B+="; Domain="+k.domain}if(k.path){if(!o.test(k.path))throw new TypeError(`option path is invalid: ${k.path}`);B+="; Path="+k.path}if(k.expires){if(!N(k.expires)||!Number.isFinite(k.expires.valueOf()))throw new TypeError(`option expires is invalid: ${k.expires}`);B+="; Expires="+k.expires.toUTCString()}if(k.httpOnly&&(B+="; HttpOnly"),k.secure&&(B+="; Secure"),k.partitioned&&(B+="; Partitioned"),k.priority)switch(typeof k.priority=="string"?k.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${k.priority}`)}if(k.sameSite)switch(typeof k.sameSite=="string"?k.sameSite.toLowerCase():k.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${k.sameSite}`)}return B}function z(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function N(D){return f.call(D)==="[object Date]"}return Fl}xp();/**
 * react-router v7.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fh="popstate";function Sp(i={}){function u(o,f){let{pathname:h,search:v,hash:E}=o.location;return ac("",{pathname:h,search:v,hash:E},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(o,f){return typeof f=="string"?f:ni(f)}return Op(u,c,null,i)}function Dt(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}function Ce(i,u){if(!i){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Ep(){return Math.random().toString(36).substring(2,10)}function dh(i,u){return{usr:i.state,key:i.key,idx:u}}function ac(i,u,c=null,o){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof u=="string"?Pa(u):u,state:c,key:u&&u.key||o||Ep()}}function ni({pathname:i="/",search:u="",hash:c=""}){return u&&u!=="?"&&(i+=u.charAt(0)==="?"?u:"?"+u),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function Pa(i){let u={};if(i){let c=i.indexOf("#");c>=0&&(u.hash=i.substring(c),i=i.substring(0,c));let o=i.indexOf("?");o>=0&&(u.search=i.substring(o),i=i.substring(0,o)),i&&(u.pathname=i)}return u}function Op(i,u,c,o={}){let{window:f=document.defaultView,v5Compat:h=!1}=o,v=f.history,E="POP",b=null,m=z();m==null&&(m=0,v.replaceState({...v.state,idx:m},""));function z(){return(v.state||{idx:null}).idx}function N(){E="POP";let U=z(),B=U==null?null:U-m;m=U,b&&b({action:E,location:_.location,delta:B})}function D(U,B){E="PUSH";let V=ac(_.location,U,B);m=z()+1;let G=dh(V,m),it=_.createHref(V);try{v.pushState(G,"",it)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(it)}h&&b&&b({action:E,location:_.location,delta:1})}function H(U,B){E="REPLACE";let V=ac(_.location,U,B);m=z();let G=dh(V,m),it=_.createHref(V);v.replaceState(G,"",it),h&&b&&b({action:E,location:_.location,delta:0})}function k(U){let B=f.location.origin!=="null"?f.location.origin:f.location.href,V=typeof U=="string"?U:ni(U);return V=V.replace(/ $/,"%20"),Dt(B,`No window.location.(origin|href) available to create URL for href: ${V}`),new URL(V,B)}let _={get action(){return E},get location(){return i(f,v)},listen(U){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(fh,N),b=U,()=>{f.removeEventListener(fh,N),b=null}},createHref(U){return u(f,U)},createURL:k,encodeLocation(U){let B=k(U);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:D,replace:H,go(U){return v.go(U)}};return _}function Th(i,u,c="/"){return Tp(i,u,c,!1)}function Tp(i,u,c,o){let f=typeof u=="string"?Pa(u):u,h=fn(f.pathname||"/",c);if(h==null)return null;let v=Ah(i);Ap(v);let E=null;for(let b=0;E==null&&b<v.length;++b){let m=Up(h);E=jp(v[b],m,o)}return E}function Ah(i,u=[],c=[],o=""){let f=(h,v,E)=>{let b={relativePath:E===void 0?h.path||"":E,caseSensitive:h.caseSensitive===!0,childrenIndex:v,route:h};b.relativePath.startsWith("/")&&(Dt(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length));let m=sn([o,b.relativePath]),z=c.concat(b);h.children&&h.children.length>0&&(Dt(h.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Ah(h.children,u,z,m)),!(h.path==null&&!h.index)&&u.push({path:m,score:Mp(m,h.index),routesMeta:z})};return i.forEach((h,v)=>{var E;if(h.path===""||!((E=h.path)!=null&&E.includes("?")))f(h,v);else for(let b of wh(h.path))f(h,v,b)}),u}function wh(i){let u=i.split("/");if(u.length===0)return[];let[c,...o]=u,f=c.endsWith("?"),h=c.replace(/\?$/,"");if(o.length===0)return f?[h,""]:[h];let v=wh(o.join("/")),E=[];return E.push(...v.map(b=>b===""?h:[h,b].join("/"))),f&&E.push(...v),E.map(b=>i.startsWith("/")&&b===""?"/":b)}function Ap(i){i.sort((u,c)=>u.score!==c.score?c.score-u.score:Np(u.routesMeta.map(o=>o.childrenIndex),c.routesMeta.map(o=>o.childrenIndex)))}var wp=/^:[\w-]+$/,zp=3,Dp=2,kp=1,_p=10,Rp=-2,hh=i=>i==="*";function Mp(i,u){let c=i.split("/"),o=c.length;return c.some(hh)&&(o+=Rp),u&&(o+=Dp),c.filter(f=>!hh(f)).reduce((f,h)=>f+(wp.test(h)?zp:h===""?kp:_p),o)}function Np(i,u){return i.length===u.length&&i.slice(0,-1).every((o,f)=>o===u[f])?i[i.length-1]-u[u.length-1]:0}function jp(i,u,c=!1){let{routesMeta:o}=i,f={},h="/",v=[];for(let E=0;E<o.length;++E){let b=o[E],m=E===o.length-1,z=h==="/"?u:u.slice(h.length)||"/",N=wr({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},z),D=b.route;if(!N&&m&&c&&!o[o.length-1].route.index&&(N=wr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},z)),!N)return null;Object.assign(f,N.params),v.push({params:f,pathname:sn([h,N.pathname]),pathnameBase:Yp(sn([h,N.pathnameBase])),route:D}),N.pathnameBase!=="/"&&(h=sn([h,N.pathnameBase]))}return v}function wr(i,u){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,o]=Cp(i.path,i.caseSensitive,i.end),f=u.match(c);if(!f)return null;let h=f[0],v=h.replace(/(.)\/+$/,"$1"),E=f.slice(1);return{params:o.reduce((m,{paramName:z,isOptional:N},D)=>{if(z==="*"){let k=E[D]||"";v=h.slice(0,h.length-k.length).replace(/(.)\/+$/,"$1")}const H=E[D];return N&&!H?m[z]=void 0:m[z]=(H||"").replace(/%2F/g,"/"),m},{}),pathname:h,pathnameBase:v,pattern:i}}function Cp(i,u=!1,c=!0){Ce(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let o=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,E,b)=>(o.push({paramName:E,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(o.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,u?void 0:"i"),o]}function Up(i){try{return i.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return Ce(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),i}}function fn(i,u){if(u==="/")return i;if(!i.toLowerCase().startsWith(u.toLowerCase()))return null;let c=u.endsWith("/")?u.length-1:u.length,o=i.charAt(c);return o&&o!=="/"?null:i.slice(c)||"/"}function Hp(i,u="/"){let{pathname:c,search:o="",hash:f=""}=typeof i=="string"?Pa(i):i;return{pathname:c?c.startsWith("/")?c:qp(c,u):u,search:Lp(o),hash:Xp(f)}}function qp(i,u){let c=u.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function Iu(i,u,c,o){return`Cannot include a '${i}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Bp(i){return i.filter((u,c)=>c===0||u.route.path&&u.route.path.length>0)}function oc(i){let u=Bp(i);return u.map((c,o)=>o===u.length-1?c.pathname:c.pathnameBase)}function uc(i,u,c,o=!1){let f;typeof i=="string"?f=Pa(i):(f={...i},Dt(!f.pathname||!f.pathname.includes("?"),Iu("?","pathname","search",f)),Dt(!f.pathname||!f.pathname.includes("#"),Iu("#","pathname","hash",f)),Dt(!f.search||!f.search.includes("#"),Iu("#","search","hash",f)));let h=i===""||f.pathname==="",v=h?"/":f.pathname,E;if(v==null)E=c;else{let N=u.length-1;if(!o&&v.startsWith("..")){let D=v.split("/");for(;D[0]==="..";)D.shift(),N-=1;f.pathname=D.join("/")}E=N>=0?u[N]:"/"}let b=Hp(f,E),m=v&&v!=="/"&&v.endsWith("/"),z=(h||v===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(m||z)&&(b.pathname+="/"),b}var sn=i=>i.join("/").replace(/\/\/+/g,"/"),Yp=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Lp=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Xp=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function Gp(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var zh=["POST","PUT","PATCH","DELETE"];new Set(zh);var Qp=["GET",...zh];new Set(Qp);var Wa=w.createContext(null);Wa.displayName="DataRouter";var Dr=w.createContext(null);Dr.displayName="DataRouterState";var Dh=w.createContext({isTransitioning:!1});Dh.displayName="ViewTransition";var Zp=w.createContext(new Map);Zp.displayName="Fetchers";var Vp=w.createContext(null);Vp.displayName="Await";var Ue=w.createContext(null);Ue.displayName="Navigation";var ai=w.createContext(null);ai.displayName="Location";var Qe=w.createContext({outlet:null,matches:[],isDataRoute:!1});Qe.displayName="Route";var cc=w.createContext(null);cc.displayName="RouteError";function Kp(i,{relative:u}={}){Dt(Fa(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:o}=w.useContext(Ue),{hash:f,pathname:h,search:v}=li(i,{relative:u}),E=h;return c!=="/"&&(E=h==="/"?c:sn([c,h])),o.createHref({pathname:E,search:v,hash:f})}function Fa(){return w.useContext(ai)!=null}function qn(){return Dt(Fa(),"useLocation() may be used only in the context of a <Router> component."),w.useContext(ai).location}var kh="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function _h(i){w.useContext(Ue).static||w.useLayoutEffect(i)}function sc(){let{isDataRoute:i}=w.useContext(Qe);return i?rb():Jp()}function Jp(){Dt(Fa(),"useNavigate() may be used only in the context of a <Router> component.");let i=w.useContext(Wa),{basename:u,navigator:c}=w.useContext(Ue),{matches:o}=w.useContext(Qe),{pathname:f}=qn(),h=JSON.stringify(oc(o)),v=w.useRef(!1);return _h(()=>{v.current=!0}),w.useCallback((b,m={})=>{if(Ce(v.current,kh),!v.current)return;if(typeof b=="number"){c.go(b);return}let z=uc(b,JSON.parse(h),f,m.relative==="path");i==null&&u!=="/"&&(z.pathname=z.pathname==="/"?u:sn([u,z.pathname])),(m.replace?c.replace:c.push)(z,m.state,m)},[u,c,h,f,i])}w.createContext(null);function li(i,{relative:u}={}){let{matches:c}=w.useContext(Qe),{pathname:o}=qn(),f=JSON.stringify(oc(c));return w.useMemo(()=>uc(i,JSON.parse(f),o,u==="path"),[i,f,o,u])}function $p(i,u){return Rh(i,u)}function Rh(i,u,c,o){var V;Dt(Fa(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f,static:h}=w.useContext(Ue),{matches:v}=w.useContext(Qe),E=v[v.length-1],b=E?E.params:{},m=E?E.pathname:"/",z=E?E.pathnameBase:"/",N=E&&E.route;{let G=N&&N.path||"";Mh(m,!N||G.endsWith("*")||G.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${G==="/"?"*":`${G}/*`}">.`)}let D=qn(),H;if(u){let G=typeof u=="string"?Pa(u):u;Dt(z==="/"||((V=G.pathname)==null?void 0:V.startsWith(z)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${z}" but pathname "${G.pathname}" was given in the \`location\` prop.`),H=G}else H=D;let k=H.pathname||"/",_=k;if(z!=="/"){let G=z.replace(/^\//,"").split("/");_="/"+k.replace(/^\//,"").split("/").slice(G.length).join("/")}let U=!h&&c&&c.matches&&c.matches.length>0?c.matches:Th(i,{pathname:_});Ce(N||U!=null,`No routes matched location "${H.pathname}${H.search}${H.hash}" `),Ce(U==null||U[U.length-1].route.element!==void 0||U[U.length-1].route.Component!==void 0||U[U.length-1].route.lazy!==void 0,`Matched leaf route at location "${H.pathname}${H.search}${H.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=tb(U&&U.map(G=>Object.assign({},G,{params:Object.assign({},b,G.params),pathname:sn([z,f.encodeLocation?f.encodeLocation(G.pathname).pathname:G.pathname]),pathnameBase:G.pathnameBase==="/"?z:sn([z,f.encodeLocation?f.encodeLocation(G.pathnameBase).pathname:G.pathnameBase])})),v,c,o);return u&&B?w.createElement(ai.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...H},navigationType:"POP"}},B):B}function Pp(){let i=ib(),u=Gp(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,o="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:o},h={padding:"2px 4px",backgroundColor:o},v=null;return console.error("Error handled by React Router default ErrorBoundary:",i),v=w.createElement(w.Fragment,null,w.createElement("p",null,"💿 Hey developer 👋"),w.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",w.createElement("code",{style:h},"ErrorBoundary")," or"," ",w.createElement("code",{style:h},"errorElement")," prop on your route.")),w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},u),c?w.createElement("pre",{style:f},c):null,v)}var Wp=w.createElement(Pp,null),Fp=class extends w.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,u){return u.location!==i.location||u.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:u.error,location:u.location,revalidation:i.revalidation||u.revalidation}}componentDidCatch(i,u){console.error("React Router caught the following error during render",i,u)}render(){return this.state.error!==void 0?w.createElement(Qe.Provider,{value:this.props.routeContext},w.createElement(cc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Ip({routeContext:i,match:u,children:c}){let o=w.useContext(Wa);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),w.createElement(Qe.Provider,{value:i},c)}function tb(i,u=[],c=null,o=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(u.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let f=i,h=c==null?void 0:c.errors;if(h!=null){let b=f.findIndex(m=>m.route.id&&(h==null?void 0:h[m.route.id])!==void 0);Dt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let v=!1,E=-1;if(c)for(let b=0;b<f.length;b++){let m=f[b];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(E=b),m.route.id){let{loaderData:z,errors:N}=c,D=m.route.loader&&!z.hasOwnProperty(m.route.id)&&(!N||N[m.route.id]===void 0);if(m.route.lazy||D){v=!0,E>=0?f=f.slice(0,E+1):f=[f[0]];break}}}return f.reduceRight((b,m,z)=>{let N,D=!1,H=null,k=null;c&&(N=h&&m.route.id?h[m.route.id]:void 0,H=m.route.errorElement||Wp,v&&(E<0&&z===0?(Mh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,k=null):E===z&&(D=!0,k=m.route.hydrateFallbackElement||null)));let _=u.concat(f.slice(0,z+1)),U=()=>{let B;return N?B=H:D?B=k:m.route.Component?B=w.createElement(m.route.Component,null):m.route.element?B=m.route.element:B=b,w.createElement(Ip,{match:m,routeContext:{outlet:b,matches:_,isDataRoute:c!=null},children:B})};return c&&(m.route.ErrorBoundary||m.route.errorElement||z===0)?w.createElement(Fp,{location:c.location,revalidation:c.revalidation,component:H,error:N,children:U(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):U()},null)}function fc(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eb(i){let u=w.useContext(Wa);return Dt(u,fc(i)),u}function nb(i){let u=w.useContext(Dr);return Dt(u,fc(i)),u}function ab(i){let u=w.useContext(Qe);return Dt(u,fc(i)),u}function dc(i){let u=ab(i),c=u.matches[u.matches.length-1];return Dt(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function lb(){return dc("useRouteId")}function ib(){var o;let i=w.useContext(cc),u=nb("useRouteError"),c=dc("useRouteError");return i!==void 0?i:(o=u.errors)==null?void 0:o[c]}function rb(){let{router:i}=eb("useNavigate"),u=dc("useNavigate"),c=w.useRef(!1);return _h(()=>{c.current=!0}),w.useCallback(async(f,h={})=>{Ce(c.current,kh),c.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:u,...h}))},[i,u])}var mh={};function Mh(i,u,c){!u&&!mh[i]&&(mh[i]=!0,Ce(!1,c))}w.memo(ob);function ob({routes:i,future:u,state:c}){return Rh(i,void 0,c,u)}function Qa({to:i,replace:u,state:c,relative:o}){Dt(Fa(),"<Navigate> may be used only in the context of a <Router> component.");let{static:f}=w.useContext(Ue);Ce(!f,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:h}=w.useContext(Qe),{pathname:v}=qn(),E=sc(),b=uc(i,oc(h),v,o==="path"),m=JSON.stringify(b);return w.useEffect(()=>{E(JSON.parse(m),{replace:u,state:c,relative:o})},[E,m,o,u,c]),null}function oa(i){Dt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ub({basename:i="/",children:u=null,location:c,navigationType:o="POP",navigator:f,static:h=!1}){Dt(!Fa(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=i.replace(/^\/*/,"/"),E=w.useMemo(()=>({basename:v,navigator:f,static:h,future:{}}),[v,f,h]);typeof c=="string"&&(c=Pa(c));let{pathname:b="/",search:m="",hash:z="",state:N=null,key:D="default"}=c,H=w.useMemo(()=>{let k=fn(b,v);return k==null?null:{location:{pathname:k,search:m,hash:z,state:N,key:D},navigationType:o}},[v,b,m,z,N,D,o]);return Ce(H!=null,`<Router basename="${v}"> is not able to match the URL "${b}${m}${z}" because it does not start with the basename, so the <Router> won't render anything.`),H==null?null:w.createElement(Ue.Provider,{value:E},w.createElement(ai.Provider,{children:u,value:H}))}function cb({children:i,location:u}){return $p(lc(i),u)}function lc(i,u=[]){let c=[];return w.Children.forEach(i,(o,f)=>{if(!w.isValidElement(o))return;let h=[...u,f];if(o.type===w.Fragment){c.push.apply(c,lc(o.props.children,h));return}Dt(o.type===oa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Dt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let v={id:o.props.id||h.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(v.children=lc(o.props.children,h)),c.push(v)}),c}var Tr="get",Ar="application/x-www-form-urlencoded";function kr(i){return i!=null&&typeof i.tagName=="string"}function sb(i){return kr(i)&&i.tagName.toLowerCase()==="button"}function fb(i){return kr(i)&&i.tagName.toLowerCase()==="form"}function db(i){return kr(i)&&i.tagName.toLowerCase()==="input"}function hb(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function mb(i,u){return i.button===0&&(!u||u==="_self")&&!hb(i)}var Sr=null;function pb(){if(Sr===null)try{new FormData(document.createElement("form"),0),Sr=!1}catch{Sr=!0}return Sr}var bb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function tc(i){return i!=null&&!bb.has(i)?(Ce(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ar}"`),null):i}function vb(i,u){let c,o,f,h,v;if(fb(i)){let E=i.getAttribute("action");o=E?fn(E,u):null,c=i.getAttribute("method")||Tr,f=tc(i.getAttribute("enctype"))||Ar,h=new FormData(i)}else if(sb(i)||db(i)&&(i.type==="submit"||i.type==="image")){let E=i.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||E.getAttribute("action");if(o=b?fn(b,u):null,c=i.getAttribute("formmethod")||E.getAttribute("method")||Tr,f=tc(i.getAttribute("formenctype"))||tc(E.getAttribute("enctype"))||Ar,h=new FormData(E,i),!pb()){let{name:m,type:z,value:N}=i;if(z==="image"){let D=m?`${m}.`:"";h.append(`${D}x`,"0"),h.append(`${D}y`,"0")}else m&&h.append(m,N)}}else{if(kr(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Tr,o=null,f=Ar,v=i}return h&&f==="text/plain"&&(v=h,h=void 0),{action:o,method:c.toLowerCase(),encType:f,formData:h,body:v}}function hc(i,u){if(i===!1||i===null||typeof i>"u")throw new Error(u)}async function gb(i,u){if(i.id in u)return u[i.id];try{let c=await import(i.module);return u[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yb(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function xb(i,u,c){let o=await Promise.all(i.map(async f=>{let h=u.routes[f.route.id];if(h){let v=await gb(h,c);return v.links?v.links():[]}return[]}));return Tb(o.flat(1).filter(yb).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function ph(i,u,c,o,f,h){let v=(b,m)=>c[m]?b.route.id!==c[m].route.id:!0,E=(b,m)=>{var z;return c[m].pathname!==b.pathname||((z=c[m].route.path)==null?void 0:z.endsWith("*"))&&c[m].params["*"]!==b.params["*"]};return h==="assets"?u.filter((b,m)=>v(b,m)||E(b,m)):h==="data"?u.filter((b,m)=>{var N;let z=o.routes[b.route.id];if(!z||!z.hasLoader)return!1;if(v(b,m)||E(b,m))return!0;if(b.route.shouldRevalidate){let D=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((N=c[0])==null?void 0:N.params)||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Sb(i,u,{includeHydrateFallback:c}={}){return Eb(i.map(o=>{let f=u.routes[o.route.id];if(!f)return[];let h=[f.module];return f.clientActionModule&&(h=h.concat(f.clientActionModule)),f.clientLoaderModule&&(h=h.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(h=h.concat(f.hydrateFallbackModule)),f.imports&&(h=h.concat(f.imports)),h}).flat(1))}function Eb(i){return[...new Set(i)]}function Ob(i){let u={},c=Object.keys(i).sort();for(let o of c)u[o]=i[o];return u}function Tb(i,u){let c=new Set;return new Set(u),i.reduce((o,f)=>{let h=JSON.stringify(Ob(f));return c.has(h)||(c.add(h),o.push({key:h,link:f})),o},[])}function Ab(i,u){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":u&&fn(c.pathname,u)==="/"?c.pathname=`${u.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function Nh(){let i=w.useContext(Wa);return hc(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function wb(){let i=w.useContext(Dr);return hc(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var mc=w.createContext(void 0);mc.displayName="FrameworkContext";function jh(){let i=w.useContext(mc);return hc(i,"You must render this element inside a <HydratedRouter> element"),i}function zb(i,u){let c=w.useContext(mc),[o,f]=w.useState(!1),[h,v]=w.useState(!1),{onFocus:E,onBlur:b,onMouseEnter:m,onMouseLeave:z,onTouchStart:N}=u,D=w.useRef(null);w.useEffect(()=>{if(i==="render"&&v(!0),i==="viewport"){let _=B=>{B.forEach(V=>{v(V.isIntersecting)})},U=new IntersectionObserver(_,{threshold:.5});return D.current&&U.observe(D.current),()=>{U.disconnect()}}},[i]),w.useEffect(()=>{if(o){let _=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(_)}}},[o]);let H=()=>{f(!0)},k=()=>{f(!1),v(!1)};return c?i!=="intent"?[h,D,{}]:[h,D,{onFocus:Il(E,H),onBlur:Il(b,k),onMouseEnter:Il(m,H),onMouseLeave:Il(z,k),onTouchStart:Il(N,H)}]:[!1,D,{}]}function Il(i,u){return c=>{i&&i(c),c.defaultPrevented||u(c)}}function Db({page:i,...u}){let{router:c}=Nh(),o=w.useMemo(()=>Th(c.routes,i,c.basename),[c.routes,i,c.basename]);return o?w.createElement(_b,{page:i,matches:o,...u}):null}function kb(i){let{manifest:u,routeModules:c}=jh(),[o,f]=w.useState([]);return w.useEffect(()=>{let h=!1;return xb(i,u,c).then(v=>{h||f(v)}),()=>{h=!0}},[i,u,c]),o}function _b({page:i,matches:u,...c}){let o=qn(),{manifest:f,routeModules:h}=jh(),{basename:v}=Nh(),{loaderData:E,matches:b}=wb(),m=w.useMemo(()=>ph(i,u,b,f,o,"data"),[i,u,b,f,o]),z=w.useMemo(()=>ph(i,u,b,f,o,"assets"),[i,u,b,f,o]),N=w.useMemo(()=>{if(i===o.pathname+o.search+o.hash)return[];let k=new Set,_=!1;if(u.forEach(B=>{var G;let V=f.routes[B.route.id];!V||!V.hasLoader||(!m.some(it=>it.route.id===B.route.id)&&B.route.id in E&&((G=h[B.route.id])!=null&&G.shouldRevalidate)||V.hasClientLoader?_=!0:k.add(B.route.id))}),k.size===0)return[];let U=Ab(i,v);return _&&k.size>0&&U.searchParams.set("_routes",u.filter(B=>k.has(B.route.id)).map(B=>B.route.id).join(",")),[U.pathname+U.search]},[v,E,o,f,m,u,i,h]),D=w.useMemo(()=>Sb(z,f),[z,f]),H=kb(z);return w.createElement(w.Fragment,null,N.map(k=>w.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...c})),D.map(k=>w.createElement("link",{key:k,rel:"modulepreload",href:k,...c})),H.map(({key:k,link:_})=>w.createElement("link",{key:k,..._})))}function Rb(...i){return u=>{i.forEach(c=>{typeof c=="function"?c(u):c!=null&&(c.current=u)})}}var Ch=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Ch&&(window.__reactRouterVersion="7.4.0")}catch{}function Mb({basename:i,children:u,window:c}){let o=w.useRef();o.current==null&&(o.current=Sp({window:c,v5Compat:!0}));let f=o.current,[h,v]=w.useState({action:f.action,location:f.location}),E=w.useCallback(b=>{w.startTransition(()=>v(b))},[v]);return w.useLayoutEffect(()=>f.listen(E),[f,E]),w.createElement(ub,{basename:i,children:u,location:h.location,navigationType:h.action,navigator:f})}var Uh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pc=w.forwardRef(function({onClick:u,discover:c="render",prefetch:o="none",relative:f,reloadDocument:h,replace:v,state:E,target:b,to:m,preventScrollReset:z,viewTransition:N,...D},H){let{basename:k}=w.useContext(Ue),_=typeof m=="string"&&Uh.test(m),U,B=!1;if(typeof m=="string"&&_&&(U=m,Ch))try{let L=new URL(window.location.href),at=m.startsWith("//")?new URL(L.protocol+m):new URL(m),Xt=fn(at.pathname,k);at.origin===L.origin&&Xt!=null?m=Xt+at.search+at.hash:B=!0}catch{Ce(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let V=Kp(m,{relative:f}),[G,it,Q]=zb(o,D),mt=Ub(m,{replace:v,state:E,target:b,preventScrollReset:z,relative:f,viewTransition:N});function gt(L){u&&u(L),L.defaultPrevented||mt(L)}let At=w.createElement("a",{...D,...Q,href:U||V,onClick:B||h?u:gt,ref:Rb(H,it),target:b,"data-discover":!_&&c==="render"?"true":void 0});return G&&!_?w.createElement(w.Fragment,null,At,w.createElement(Db,{page:V})):At});pc.displayName="Link";var Nb=w.forwardRef(function({"aria-current":u="page",caseSensitive:c=!1,className:o="",end:f=!1,style:h,to:v,viewTransition:E,children:b,...m},z){let N=li(v,{relative:m.relative}),D=qn(),H=w.useContext(Dr),{navigator:k,basename:_}=w.useContext(Ue),U=H!=null&&Lb(N)&&E===!0,B=k.encodeLocation?k.encodeLocation(N).pathname:N.pathname,V=D.pathname,G=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;c||(V=V.toLowerCase(),G=G?G.toLowerCase():null,B=B.toLowerCase()),G&&_&&(G=fn(G,_)||G);const it=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let Q=V===B||!f&&V.startsWith(B)&&V.charAt(it)==="/",mt=G!=null&&(G===B||!f&&G.startsWith(B)&&G.charAt(B.length)==="/"),gt={isActive:Q,isPending:mt,isTransitioning:U},At=Q?u:void 0,L;typeof o=="function"?L=o(gt):L=[o,Q?"active":null,mt?"pending":null,U?"transitioning":null].filter(Boolean).join(" ");let at=typeof h=="function"?h(gt):h;return w.createElement(pc,{...m,"aria-current":At,className:L,ref:z,style:at,to:v,viewTransition:E},typeof b=="function"?b(gt):b)});Nb.displayName="NavLink";var jb=w.forwardRef(({discover:i="render",fetcherKey:u,navigate:c,reloadDocument:o,replace:f,state:h,method:v=Tr,action:E,onSubmit:b,relative:m,preventScrollReset:z,viewTransition:N,...D},H)=>{let k=Bb(),_=Yb(E,{relative:m}),U=v.toLowerCase()==="get"?"get":"post",B=typeof E=="string"&&Uh.test(E),V=G=>{if(b&&b(G),G.defaultPrevented)return;G.preventDefault();let it=G.nativeEvent.submitter,Q=(it==null?void 0:it.getAttribute("formmethod"))||v;k(it||G.currentTarget,{fetcherKey:u,method:Q,navigate:c,replace:f,state:h,relative:m,preventScrollReset:z,viewTransition:N})};return w.createElement("form",{ref:H,method:U,action:_,onSubmit:o?b:V,...D,"data-discover":!B&&i==="render"?"true":void 0})});jb.displayName="Form";function Cb(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Hh(i){let u=w.useContext(Wa);return Dt(u,Cb(i)),u}function Ub(i,{target:u,replace:c,state:o,preventScrollReset:f,relative:h,viewTransition:v}={}){let E=sc(),b=qn(),m=li(i,{relative:h});return w.useCallback(z=>{if(mb(z,u)){z.preventDefault();let N=c!==void 0?c:ni(b)===ni(m);E(i,{replace:N,state:o,preventScrollReset:f,relative:h,viewTransition:v})}},[b,E,m,c,o,u,i,f,h,v])}var Hb=0,qb=()=>`__${String(++Hb)}__`;function Bb(){let{router:i}=Hh("useSubmit"),{basename:u}=w.useContext(Ue),c=lb();return w.useCallback(async(o,f={})=>{let{action:h,method:v,encType:E,formData:b,body:m}=vb(o,u);if(f.navigate===!1){let z=f.fetcherKey||qb();await i.fetch(z,c,f.action||h,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||v,formEncType:f.encType||E,flushSync:f.flushSync})}else await i.navigate(f.action||h,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||v,formEncType:f.encType||E,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,u,c])}function Yb(i,{relative:u}={}){let{basename:c}=w.useContext(Ue),o=w.useContext(Qe);Dt(o,"useFormAction must be used inside a RouteContext");let[f]=o.matches.slice(-1),h={...li(i||".",{relative:u})},v=qn();if(i==null){h.search=v.search;let E=new URLSearchParams(h.search),b=E.getAll("index");if(b.some(z=>z==="")){E.delete("index"),b.filter(N=>N).forEach(N=>E.append("index",N));let z=E.toString();h.search=z?`?${z}`:""}}return(!i||i===".")&&f.route.index&&(h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(h.pathname=h.pathname==="/"?c:sn([c,h.pathname])),ni(h)}function Lb(i,u={}){let c=w.useContext(Dh);Dt(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Hh("useViewTransitionState"),f=li(i,{relative:u.relative});if(!c.isTransitioning)return!1;let h=fn(c.currentLocation.pathname,o)||c.currentLocation.pathname,v=fn(c.nextLocation.pathname,o)||c.nextLocation.pathname;return wr(f.pathname,v)!=null||wr(f.pathname,h)!=null}new TextEncoder;const Xb=({columns:i})=>S.jsx("thead",{className:"text-xs text-gray-700 uppercase bg-gray-50 ",children:S.jsx("tr",{children:i.map((u,c)=>S.jsx("th",{scope:"col",className:"px-6 py-3",children:u},c))})}),Gb=(i=[])=>{let u=0,c=0,o=i.map((f,h)=>{const v=Number(f.wage)||0,E=Number(f.totalHours)||0;return u+=E,c+=v*E,S.jsxs("tr",{className:"odd:bg-white  even:bg-gray-50  border-b  border-gray-200",children:[S.jsx("td",{className:"px-6 py-4",children:f.workplace}),S.jsxs("td",{className:"px-6 py-4",children:["$",f.wage.toFixed(2)]}),S.jsx("td",{className:"px-6 py-4",children:f.totalHours}),S.jsxs("td",{className:"px-6 py-4",children:["$",f.totalWage.toFixed(2)]})]},h)});return o.push(S.jsxs("tr",{className:"bg-gray-100 border-t border-gray-300",children:[S.jsx("td",{className:"px-6 py-4 font-semibold",children:S.jsx("strong",{children:"Total:"})}),S.jsx("td",{className:"px-6 py-4"}),S.jsx("td",{className:"px-6 py-4 font-semibold",children:S.jsx("strong",{children:u})}),S.jsx("td",{className:"px-6 py-4 font-semibold",children:S.jsxs("strong",{children:["$",c.toFixed(2)]})})]},"total-row")),o},Qb=i=>i.map((u,c)=>S.jsxs("tr",{className:"odd:bg-white  even:bg-gray-50  border-b  border-gray-200",children:[S.jsx("td",{className:"px-6 py-4",children:u.workplace}),S.jsxs("td",{className:"px-6 py-4",children:["$",u.hourlyRate]})]},c)),Zb=(i=[])=>{let u=0,c=i.map((o,f)=>{const h=o.totalHours;return u+=h,S.jsxs("tr",{className:"odd:bg-white  even:bg-gray-50  border-b  border-gray-200",children:[S.jsx("td",{className:"px-6 py-4",children:o.workplace}),S.jsx("td",{className:"px-6 py-4",children:o.date}),S.jsx("td",{className:"px-6 py-4",children:o.startTime}),S.jsx("td",{className:"px-6 py-4",children:o.endTime}),S.jsx("td",{className:"px-6 py-4",children:o.totalHours})]},f)});return c.push(S.jsxs("tr",{className:"odd:bg-white  even:bg-gray-50  border-b  border-gray-200",children:[S.jsx("td",{className:"px-6 py-4",children:S.jsx("strong",{children:"Total:"})}),S.jsx("td",{className:"px-6 py-4"}),S.jsx("td",{className:"px-6 py-4"}),S.jsx("td",{className:"px-6 py-4"}),S.jsx("td",{className:"px-6 py-4",children:S.jsx("strong",{children:u})})]},"total-detailed")),c},Vb=({data:i,renderType:u})=>{let c;return u==="Detailed"?c=Zb(i):u==="Summary"?c=Gb(i):u=="Jobs"&&(c=Qb(i)),S.jsx("tbody",{children:c})},ti=({columns:i,data:u,renderType:c})=>{let o="py-4 table-container ";return!u||u.length==0?S.jsx("p",{className:"no-data-p",children:"No available data"}):(c=="Jobs"&&(o=o+" jobs-table-container"),S.jsx("div",{className:o,children:S.jsx("div",{className:"table-div relative overflow-x-auto shadow-md sm:rounded-lg",children:S.jsxs("table",{className:"w-full text-sm text-left rtl:text-right text-gray-500",children:[S.jsx(Xb,{columns:i}),S.jsx(Vb,{data:u,renderType:c})]})})}))},bh=({elements:i,icons:u,routes:c})=>i.map((o,f)=>S.jsxs("li",{children:[u[f],S.jsx(pc,{to:c[f],children:S.jsx("span",{className:"ms-3",children:o})})]},f));function Kb(){return S.jsxs("div",{children:[S.jsx(Rr,{}),S.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center h-screen text-center p-6",children:[S.jsx("img",{src:"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVtaW4zM2U3YTRrMXY2YnJubjVrazZrcmhtaDNxMGtieTZxM3JpbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ySpxjJmsq9gsw/giphy.gif",alt:"Working on it",className:"w-64 h-64 mb-6"}),S.jsx("h1",{className:"text-3xl font-bold mb-2",children:"We’re still working on this page!"}),S.jsx("p",{className:"text-lg text-gray-600",children:"Check back soon — new features are on the way 🚀"})]})]})}const Jb=({date:i,moneyAmount:u,preTaxMoneyAmount:c})=>S.jsxs("div",{className:"summary-div",children:[S.jsx("h5",{className:"summary-h5",children:"You will receive aproximately"}),S.jsxs("p",{className:"summary-money-amount",children:["$",u]}),S.jsxs("p",{className:"summary-pretax-money-amount",children:["$",c," (before taxes)"]}),S.jsxs("p",{className:"summary-date",children:["on ",i]})]}),_r="https://urshiftmate.onrender.com",ii=`${_r}/google/api`,$a=`${_r}/user/config`,$b=`${_r}/auth`;async function Pb(){try{const i=await fetch(`${$b}/status`,{credentials:"include"});if(i.ok){const u=await i.json();return{isAuthenticated:u.isAuthenticated,user:u.user}}else return{isAuthenticated:!1}}catch(i){return console.error("Auth check failed:",i),{isAuthenticated:!1}}}async function Wb(){try{const i=await fetch(`${_r}/logout`,{credentials:"include"});if(i.ok){const u=await i.json();return{logout:!0}}}catch(i){return console.error("Auth check failed:",i),{isAuthenticated:!1}}}function qh(i){const u=new Date(i);return new Intl.DateTimeFormat("en-US",{month:"long",day:"numeric",year:"numeric"}).format(u)}function Hn(i,u="en-US"){const[c,o,f]=i.split("-").map(Number);return new Date(c,o-1,f).toLocaleDateString(u,{month:"long",day:"numeric"})}async function Fb(i){var u;try{const c=await fetch(`${ii}/detailedEvents?index=${i}`,{credentials:"include"}),o=await c.json().catch(()=>null);if(!c.ok){const f=((u=o==null?void 0:o.error)==null?void 0:u.message)||(o==null?void 0:o.message)||c.statusText||"Request failed",h=new Error(f);throw h.status=c.status,h.body=o,h}return o}catch(c){const o=new Error("Network error while fetching events");throw o.cause=c,o.status=0,o}}async function Ib(i){var u;try{const c=await fetch(`${ii}/summaryEvents?index=${i}`,{credentials:"include"}),o=await c.json().catch(()=>null);if(!c.ok){const f=((u=o==null?void 0:o.error)==null?void 0:u.message)||(o==null?void 0:o.message)||c.statusText||"Request failed",h=new Error(f);throw h.status=c.status,h.body=o,h}return o}catch(c){const o=new Error("Network error while fetching events");throw o.cause=c,o.status=0,o}}async function tv(i){var u;try{const c=await fetch(`${ii}/summaryUser?index=${i}`,{credentials:"include"}),o=await c.json().catch(()=>null);if(c.ok)o.checkDay=qh(o.checkDay),o.startWeekOne=Hn(o.startWeekOne),o.endWeekOne=Hn(o.endWeekOne),o.startWeekTwo=Hn(o.startWeekTwo),o.endWeekTwo=Hn(o.endWeekTwo);else{const f=((u=o==null?void 0:o.error)==null?void 0:u.message)||(o==null?void 0:o.message)||c.statusText||"Request failed",h=new Error(f);throw h.status=c.status,h.body=o,h}return o}catch(c){const o=new Error("Network error while fetching events");throw o.cause=c,o.status=0,o}}async function ev(i){var u;try{const c=await fetch(`${ii}/user/info?index=${i}`,{credentials:"include"}),o=await c.json().catch(()=>null);if(c.ok)o.checkDay=qh(o.checkDay),o.startWeekOne=Hn(o.startWeekOne),o.endWeekOne=Hn(o.endWeekOne),o.startWeekTwo=Hn(o.startWeekTwo),o.endWeekTwo=Hn(o.endWeekTwo);else{const f=((u=o==null?void 0:o.error)==null?void 0:u.message)||(o==null?void 0:o.message)||c.statusText||"Request failed",h=new Error(f);throw h.status=c.status,h.body=o,h}return o}catch(c){const o=new Error("Network error while fetching events");throw o.cause=c,o.status=0,o}}async function nv(i,u){try{fetch(`${$a}/workplace`,{method:"POST",credentials:"include",body:JSON.stringify({workplace:i,hourlyRate:u}),headers:{"Content-type":"application/json; charset=UTF-8"}})}catch(c){console.error("Error inserting:",c)}}async function av(i,u,c,o){if(c)try{const f=await fetch(`${$a}/calendars/delete`,{credentials:"include",method:"PUT",body:JSON.stringify({calendarId:i,primary:o}),headers:{"Content-Type":"application/json"}});if(f.ok)return await f.json();{const h=await f.json();console.error("Error deleting calendar:",h)}}catch(f){console.error("Network error deleting calendar:",f)}else try{const f=await fetch(`${$a}/calendars/add`,{credentials:"include",method:"PUT",body:JSON.stringify({calendarId:i,summary:u}),headers:{"Content-Type":"application/json"}});if(f.ok)return await f.json();{const h=await f.json();console.error("Error adding calendar:",h)}}catch(f){console.error("Network error adding calendar:",f)}}async function lv(){var i;try{const u=await fetch(`${$a}/workplace`,{credentials:"include"}),c=await u.json().catch(()=>null);if(!u.ok){const o=((i=c==null?void 0:c.error)==null?void 0:i.message)||(c==null?void 0:c.message)||u.statusText||"Request failed",f=new Error(o);throw f.status=u.status,f.body=c,f}return c}catch(u){const c=new Error("Network error while fetching events");throw c.cause=u,c.status=0,c}}async function iv(){return(await(await fetch(`${ii}/existCalendars`,{credentials:"include"})).json()).calendarExists}async function rv(){var i;try{const u=await fetch(`${$a}/calendars`,{credentials:"include"}),c=await u.json().catch(()=>null);if(!u.ok){const o=((i=c==null?void 0:c.error)==null?void 0:i.message)||(c==null?void 0:c.message)||u.statusText||"Request failed",f=new Error(o);throw f.status=u.status,f.body=c,f}return c}catch(u){const c=new Error("Network error while fetching events");throw c.cause=u,c.status=0,c}}async function ov(i){var u;try{const c=await fetch(`${$a}/randomPhrase?phraseType=${i}`,{credentials:"include"}),o=await c.json().catch(()=>null);if(!c.ok){const f=((u=o==null?void 0:o.error)==null?void 0:u.message)||(o==null?void 0:o.message)||c.statusText||"Request failed",h=new Error(f);throw h.status=c.status,h.body=o,h}return o}catch(c){const o=new Error("Network error while fetching events");throw o.cause=c,o.status=0,o}}const uv=({onSubmitHandler:i})=>{const[u,c]=w.useState(""),[o,f]=w.useState(""),[h,v]=w.useState(!1);function E(z){c(z.target.value)}function b(z){f(z.target.value)}async function m(z){if(z.preventDefault(),i)try{i(u,o),f(""),c("")}catch(N){console.log("ERROR",N)}}return S.jsx("div",{className:"jobform-div-container",children:S.jsxs("form",{className:"jobform-form",action:"",method:"POST",onSubmit:m,children:[S.jsx("div",{className:"title-wrapper",children:S.jsx("h2",{className:"h2-title",children:"Add a job"})}),S.jsxs("div",{className:"div-wrapper",children:[S.jsx("div",{className:"div-form i-workplace",children:S.jsx("input",{className:"jobform-input ",name:"workplace",type:"text",value:u,onChange:E})}),S.jsx("div",{className:"div-form i-wage",children:S.jsx("input",{className:"jobform-input ",type:"number",value:o,onChange:b})}),S.jsx("button",{type:"submit",children:"ADD"})]})]})})};function cv({calendarData:i}){const[u,c]=w.useState(!1),[o,f]=w.useState(null),[h,v]=w.useState(!1),[E,b]=w.useState(null);async function m(){await av(E,o,u,h),c(!u)}return w.useEffect(()=>{c(i.activeCalendar),f(i.calendarSummary),v(i.primary),b(i.calendarId)},[]),S.jsx(S.Fragment,{children:S.jsx("li",{onClick:m,children:S.jsx("div",{className:u?"cal-li active-cal":"cal-li",children:i.calendarSummary})})})}function ec(i){let u=[],c=[];for(let o=0;o<i.length;o++)u.unshift(S.jsx(cv,{calendarData:i[o]},`${o}-cal`));return u.unshift(...c),u}function sv({calendarList:i}){let u,c,o=!1;if(!i||i.length==0)return S.jsx("p",{children:"No calendars"});if(i.length>5){const h=Math.ceil(i.length/2);u=i.slice(0,h),c=i.slice(h),o=!0}if(o){let h=ec(u),v=ec(c);return S.jsxs(S.Fragment,{children:[S.jsx("h2",{className:"h2-title",children:"Google Calendar"}),S.jsxs("div",{className:"flex-row-calendars",children:[S.jsx("ul",{children:h}),S.jsx("ul",{children:v})]})]})}let f=ec(i);return S.jsxs(S.Fragment,{children:[S.jsx("h2",{className:"h2-title",children:"Google Calendar"}),S.jsx("ul",{children:f})]})}const fv=()=>{const i=["Worplace","Wage"],[u,c]=w.useState([]),[o,f]=w.useState([]);w.useEffect(()=>{lv().then(c),rv().then(f)},[]);async function h(v,E){if(v&&E)try{await nv(v,E);const b={workplace:v,hourlyRate:E};c(m=>[...m,b])}catch(b){console.log("ERROR",b)}else console.log("No workplace nor wage provided")}return S.jsx("div",{className:"flex-row",children:S.jsxs("div",{className:"grid-layout",children:[S.jsx("div",{className:"grid-first-col sidebar",children:S.jsx(Rr,{})}),S.jsx("div",{className:"grid-header",children:S.jsx("h1",{className:"h1-title-table ",children:"You have the control to decide your future. "})}),S.jsx("div",{className:"grid-second-col main-1",children:S.jsx("div",{className:"flex-col-wrapper",children:S.jsx("div",{className:"dashboard-div-container",children:S.jsx(uv,{onSubmitHandler:h})})})}),S.jsxs("div",{className:"table-container grid-jobs",children:[S.jsx("h2",{className:"h2-title-t",children:"Current Jobs"}),S.jsx(ti,{columns:i,data:u,renderType:"Jobs"})]}),S.jsxs("div",{className:"dashboard-div-container main-2",children:[S.jsx("h2",{className:"h2-title-t",children:"Available Calendars"}),S.jsx(sv,{calendarList:o})]})]})})};function dv(){return S.jsxs("div",{children:[S.jsx(Rr,{}),S.jsxs("div",{className:"flex-1 flex flex-col items-center justify-center h-screen text-center p-6",children:[S.jsx("img",{src:"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGpiNTI3djE3dnc3dmdhMTd6cjRqcnV4bTMyOHJyeWtsN3FraWw0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VbAFrrDVGAvZu/giphy.gif",alt:"Working on it",className:"w-64 h-64 mb-6"}),S.jsx("h1",{className:"text-3xl font-bold mb-2",children:"We’re still working on this page!"}),S.jsx("p",{className:"text-lg text-gray-600",children:"Check back soon — new features are on the way 🚀"})]})]})}const bc=w.createContext(null),hv=()=>{const{auth:i,setAuth:u}=w.useContext(bc),c=sc(),o=async()=>{try{await Wb(),u({isAuthenticated:!1,user:null}),c("/login")}catch(f){console.log("error, ",f)}};return S.jsxs("button",{onClick:o,className:"flex items-center w-full p-2 text-sm font-medium text-gray-900 rounded-lg hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700",children:[S.jsx("i",{className:"bi bi-box-arrow-right me-2"}),"Logout"]})},mv=["Dashboard","Settings","Jobs & Calendar"],pv=[S.jsx("i",{className:"bi bi-speedometer2"}),S.jsx("i",{className:"bi bi-gear"}),S.jsx("i",{className:"bi bi-calendar-week"})],bv=["/dashboard","/settings","/jobs","/profile"],vv=["/profile"],gv=[S.jsx("i",{className:"bi bi-person-circle"}),S.jsx("i",{className:"bi bi-box-arrow-right"})],yv=["Profile"],xv=new Date,Sv=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"2-digit"}),Ev=Sv.format(xv),Rr=()=>S.jsxs("div",{children:[S.jsxs("button",{"data-drawer-target":"default-sidebar","data-drawer-toggle":"default-sidebar","aria-controls":"default-sidebar",type:"button",className:"inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",children:[S.jsx("span",{className:"sr-only",children:"Open sidebar"}),S.jsx("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:S.jsx("path",{clipRule:"evenodd",fillRule:"evenodd",d:"M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"})})]}),S.jsx("aside",{id:"default-sidebar",className:"fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ","aria-label":"Sidebar",children:S.jsxs("div",{className:"h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 sidebar-div sidebar-wrapper",children:[S.jsxs("div",{className:"icons-top",children:[S.jsx("h2",{className:"h2-title-sidebar",children:Ev}),S.jsx("ul",{className:"space-y-2 font-medium icons-top-ul",children:S.jsx(bh,{elements:mv,icons:pv,routes:bv})})]}),S.jsx("div",{className:"icons-bottom",children:S.jsxs("ul",{className:"space-y-2 font-medium icons-bottom-ul",children:[S.jsx(bh,{elements:yv,icons:gv,routes:vv}),S.jsx(hv,{})]})})]})})]});function Lt(i,u){u===void 0&&(u={});var c=u.insertAt;if(i&&typeof document<"u"){var o=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",c==="top"&&o.firstChild?o.insertBefore(f,o.firstChild):o.appendChild(f),f.styleSheet?f.styleSheet.cssText=i:f.appendChild(document.createTextNode(i))}}Lt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var vt=function(){return vt=Object.assign||function(i){for(var u,c=1,o=arguments.length;c<o;c++)for(var f in u=arguments[c])Object.prototype.hasOwnProperty.call(u,f)&&(i[f]=u[f]);return i},vt.apply(this,arguments)};function zr(i){return zr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},zr(i)}var Ov=/^\s+/,Tv=/\s+$/;function P(i,u){if(u=u||{},(i=i||"")instanceof P)return i;if(!(this instanceof P))return new P(i,u);var c=function(o){var f={r:0,g:0,b:0},h=1,v=null,E=null,b=null,m=!1,z=!1;typeof o=="string"&&(o=function(k){k=k.replace(Ov,"").replace(Tv,"").toLowerCase();var _,U=!1;if(ic[k])k=ic[k],U=!0;else if(k=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=Ne.rgb.exec(k))?{r:_[1],g:_[2],b:_[3]}:(_=Ne.rgba.exec(k))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=Ne.hsl.exec(k))?{h:_[1],s:_[2],l:_[3]}:(_=Ne.hsla.exec(k))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=Ne.hsv.exec(k))?{h:_[1],s:_[2],v:_[3]}:(_=Ne.hsva.exec(k))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=Ne.hex8.exec(k))?{r:he(_[1]),g:he(_[2]),b:he(_[3]),a:Eh(_[4]),format:U?"name":"hex8"}:(_=Ne.hex6.exec(k))?{r:he(_[1]),g:he(_[2]),b:he(_[3]),format:U?"name":"hex"}:(_=Ne.hex4.exec(k))?{r:he(_[1]+""+_[1]),g:he(_[2]+""+_[2]),b:he(_[3]+""+_[3]),a:Eh(_[4]+""+_[4]),format:U?"name":"hex8"}:(_=Ne.hex3.exec(k))?{r:he(_[1]+""+_[1]),g:he(_[2]+""+_[2]),b:he(_[3]+""+_[3]),format:U?"name":"hex"}:!1}(o)),zr(o)=="object"&&(cn(o.r)&&cn(o.g)&&cn(o.b)?(N=o.r,D=o.g,H=o.b,f={r:255*zt(N,255),g:255*zt(D,255),b:255*zt(H,255)},m=!0,z=String(o.r).substr(-1)==="%"?"prgb":"rgb"):cn(o.h)&&cn(o.s)&&cn(o.v)?(v=ei(o.s),E=ei(o.v),f=function(k,_,U){k=6*zt(k,360),_=zt(_,100),U=zt(U,100);var B=Math.floor(k),V=k-B,G=U*(1-_),it=U*(1-V*_),Q=U*(1-(1-V)*_),mt=B%6,gt=[U,it,G,G,Q,U][mt],At=[Q,U,U,it,G,G][mt],L=[G,G,Q,U,U,it][mt];return{r:255*gt,g:255*At,b:255*L}}(o.h,v,E),m=!0,z="hsv"):cn(o.h)&&cn(o.s)&&cn(o.l)&&(v=ei(o.s),b=ei(o.l),f=function(k,_,U){var B,V,G;function it(gt,At,L){return L<0&&(L+=1),L>1&&(L-=1),L<1/6?gt+6*(At-gt)*L:L<.5?At:L<2/3?gt+(At-gt)*(2/3-L)*6:gt}if(k=zt(k,360),_=zt(_,100),U=zt(U,100),_===0)B=V=G=U;else{var Q=U<.5?U*(1+_):U+_-U*_,mt=2*U-Q;B=it(mt,Q,k+1/3),V=it(mt,Q,k),G=it(mt,Q,k-1/3)}return{r:255*B,g:255*V,b:255*G}}(o.h,v,b),m=!0,z="hsl"),o.hasOwnProperty("a")&&(h=o.a));var N,D,H;return h=Bh(h),{ok:m,format:o.format||z,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:h}}(i);this._originalInput=i,this._r=c.r,this._g=c.g,this._b=c.b,this._a=c.a,this._roundA=Math.round(100*this._a)/100,this._format=u.format||c.format,this._gradientType=u.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=c.ok}function vh(i,u,c){i=zt(i,255),u=zt(u,255),c=zt(c,255);var o,f,h=Math.max(i,u,c),v=Math.min(i,u,c),E=(h+v)/2;if(h==v)o=f=0;else{var b=h-v;switch(f=E>.5?b/(2-h-v):b/(h+v),h){case i:o=(u-c)/b+(u<c?6:0);break;case u:o=(c-i)/b+2;break;case c:o=(i-u)/b+4}o/=6}return{h:o,s:f,l:E}}function gh(i,u,c){i=zt(i,255),u=zt(u,255),c=zt(c,255);var o,f,h=Math.max(i,u,c),v=Math.min(i,u,c),E=h,b=h-v;if(f=h===0?0:b/h,h==v)o=0;else{switch(h){case i:o=(u-c)/b+(u<c?6:0);break;case u:o=(c-i)/b+2;break;case c:o=(i-u)/b+4}o/=6}return{h:o,s:f,v:E}}function yh(i,u,c,o){var f=[je(Math.round(i).toString(16)),je(Math.round(u).toString(16)),je(Math.round(c).toString(16))];return o&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function xh(i,u,c,o){return[je(Yh(o)),je(Math.round(i).toString(16)),je(Math.round(u).toString(16)),je(Math.round(c).toString(16))].join("")}function Av(i,u){u=u===0?0:u||10;var c=P(i).toHsl();return c.s-=u/100,c.s=Mr(c.s),P(c)}function wv(i,u){u=u===0?0:u||10;var c=P(i).toHsl();return c.s+=u/100,c.s=Mr(c.s),P(c)}function zv(i){return P(i).desaturate(100)}function Dv(i,u){u=u===0?0:u||10;var c=P(i).toHsl();return c.l+=u/100,c.l=Mr(c.l),P(c)}function kv(i,u){u=u===0?0:u||10;var c=P(i).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-u/100*255))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-u/100*255))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-u/100*255))),P(c)}function _v(i,u){u=u===0?0:u||10;var c=P(i).toHsl();return c.l-=u/100,c.l=Mr(c.l),P(c)}function Rv(i,u){var c=P(i).toHsl(),o=(c.h+u)%360;return c.h=o<0?360+o:o,P(c)}function Mv(i){var u=P(i).toHsl();return u.h=(u.h+180)%360,P(u)}function Sh(i,u){if(isNaN(u)||u<=0)throw new Error("Argument to polyad must be a positive number");for(var c=P(i).toHsl(),o=[P(i)],f=360/u,h=1;h<u;h++)o.push(P({h:(c.h+h*f)%360,s:c.s,l:c.l}));return o}function Nv(i){var u=P(i).toHsl(),c=u.h;return[P(i),P({h:(c+72)%360,s:u.s,l:u.l}),P({h:(c+216)%360,s:u.s,l:u.l})]}function jv(i,u,c){u=u||6,c=c||30;var o=P(i).toHsl(),f=360/c,h=[P(i)];for(o.h=(o.h-(f*u>>1)+720)%360;--u;)o.h=(o.h+f)%360,h.push(P(o));return h}function Cv(i,u){u=u||6;for(var c=P(i).toHsv(),o=c.h,f=c.s,h=c.v,v=[],E=1/u;u--;)v.push(P({h:o,s:f,v:h})),h=(h+E)%1;return v}P.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,u,c,o=this.toRgb();return i=o.r/255,u=o.g/255,c=o.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(u<=.03928?u/12.92:Math.pow((u+.055)/1.055,2.4))+.0722*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(i){return this._a=Bh(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=gh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=gh(this._r,this._g,this._b),u=Math.round(360*i.h),c=Math.round(100*i.s),o=Math.round(100*i.v);return this._a==1?"hsv("+u+", "+c+"%, "+o+"%)":"hsva("+u+", "+c+"%, "+o+"%, "+this._roundA+")"},toHsl:function(){var i=vh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=vh(this._r,this._g,this._b),u=Math.round(360*i.h),c=Math.round(100*i.s),o=Math.round(100*i.l);return this._a==1?"hsl("+u+", "+c+"%, "+o+"%)":"hsla("+u+", "+c+"%, "+o+"%, "+this._roundA+")"},toHex:function(i){return yh(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return function(u,c,o,f,h){var v=[je(Math.round(u).toString(16)),je(Math.round(c).toString(16)),je(Math.round(o).toString(16)),je(Yh(f))];return h&&v[0].charAt(0)==v[0].charAt(1)&&v[1].charAt(0)==v[1].charAt(1)&&v[2].charAt(0)==v[2].charAt(1)&&v[3].charAt(0)==v[3].charAt(1)?v[0].charAt(0)+v[1].charAt(0)+v[2].charAt(0)+v[3].charAt(0):v.join("")}(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*zt(this._r,255))+"%",g:Math.round(100*zt(this._g,255))+"%",b:Math.round(100*zt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*zt(this._r,255))+"%, "+Math.round(100*zt(this._g,255))+"%, "+Math.round(100*zt(this._b,255))+"%)":"rgba("+Math.round(100*zt(this._r,255))+"%, "+Math.round(100*zt(this._g,255))+"%, "+Math.round(100*zt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Uv[yh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var u="#"+xh(this._r,this._g,this._b,this._a),c=u,o=this._gradientType?"GradientType = 1, ":"";if(i){var f=P(i);c="#"+xh(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+u+",endColorstr="+c+")"},toString:function(i){var u=!!i;i=i||this._format;var c=!1,o=this._a<1&&this._a>=0;return u||!o||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(c=this.toRgbString()),i==="prgb"&&(c=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(c=this.toHexString()),i==="hex3"&&(c=this.toHexString(!0)),i==="hex4"&&(c=this.toHex8String(!0)),i==="hex8"&&(c=this.toHex8String()),i==="name"&&(c=this.toName()),i==="hsl"&&(c=this.toHslString()),i==="hsv"&&(c=this.toHsvString()),c||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return P(this.toString())},_applyModification:function(i,u){var c=i.apply(null,[this].concat([].slice.call(u)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(Dv,arguments)},brighten:function(){return this._applyModification(kv,arguments)},darken:function(){return this._applyModification(_v,arguments)},desaturate:function(){return this._applyModification(Av,arguments)},saturate:function(){return this._applyModification(wv,arguments)},greyscale:function(){return this._applyModification(zv,arguments)},spin:function(){return this._applyModification(Rv,arguments)},_applyCombination:function(i,u){return i.apply(null,[this].concat([].slice.call(u)))},analogous:function(){return this._applyCombination(jv,arguments)},complement:function(){return this._applyCombination(Mv,arguments)},monochromatic:function(){return this._applyCombination(Cv,arguments)},splitcomplement:function(){return this._applyCombination(Nv,arguments)},triad:function(){return this._applyCombination(Sh,[3])},tetrad:function(){return this._applyCombination(Sh,[4])}},P.fromRatio=function(i,u){if(zr(i)=="object"){var c={};for(var o in i)i.hasOwnProperty(o)&&(c[o]=o==="a"?i[o]:ei(i[o]));i=c}return P(i,u)},P.equals=function(i,u){return!(!i||!u)&&P(i).toRgbString()==P(u).toRgbString()},P.random=function(){return P.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},P.mix=function(i,u,c){c=c===0?0:c||50;var o=P(i).toRgb(),f=P(u).toRgb(),h=c/100;return P({r:(f.r-o.r)*h+o.r,g:(f.g-o.g)*h+o.g,b:(f.b-o.b)*h+o.b,a:(f.a-o.a)*h+o.a})},P.readability=function(i,u){var c=P(i),o=P(u);return(Math.max(c.getLuminance(),o.getLuminance())+.05)/(Math.min(c.getLuminance(),o.getLuminance())+.05)},P.isReadable=function(i,u,c){var o,f,h=P.readability(i,u);switch(f=!1,(o=function(v){var E,b;return E=((v=v||{level:"AA",size:"small"}).level||"AA").toUpperCase(),b=(v.size||"small").toLowerCase(),E!=="AA"&&E!=="AAA"&&(E="AA"),b!=="small"&&b!=="large"&&(b="small"),{level:E,size:b}}(c)).level+o.size){case"AAsmall":case"AAAlarge":f=h>=4.5;break;case"AAlarge":f=h>=3;break;case"AAAsmall":f=h>=7}return f},P.mostReadable=function(i,u,c){var o,f,h,v,E=null,b=0;f=(c=c||{}).includeFallbackColors,h=c.level,v=c.size;for(var m=0;m<u.length;m++)(o=P.readability(i,u[m]))>b&&(b=o,E=P(u[m]));return P.isReadable(i,E,{level:h,size:v})||!f?E:(c.includeFallbackColors=!1,P.mostReadable(i,["#fff","#000"],c))};var ic=P.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Uv=P.hexNames=function(i){var u={};for(var c in i)i.hasOwnProperty(c)&&(u[i[c]]=c);return u}(ic);function Bh(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function zt(i,u){(function(o){return typeof o=="string"&&o.indexOf(".")!=-1&&parseFloat(o)===1})(i)&&(i="100%");var c=function(o){return typeof o=="string"&&o.indexOf("%")!=-1}(i);return i=Math.min(u,Math.max(0,parseFloat(i))),c&&(i=parseInt(i*u,10)/100),Math.abs(i-u)<1e-6?1:i%u/parseFloat(u)}function Mr(i){return Math.min(1,Math.max(0,i))}function he(i){return parseInt(i,16)}function je(i){return i.length==1?"0"+i:""+i}function ei(i){return i<=1&&(i=100*i+"%"),i}function Yh(i){return Math.round(255*parseFloat(i)).toString(16)}function Eh(i){return he(i)/255}var Un,Er,Or,Ne=(Er="[\\s|\\(]+("+(Un="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Un+")[,|\\s]+("+Un+")\\s*\\)?",Or="[\\s|\\(]+("+Un+")[,|\\s]+("+Un+")[,|\\s]+("+Un+")[,|\\s]+("+Un+")\\s*\\)?",{CSS_UNIT:new RegExp(Un),rgb:new RegExp("rgb"+Er),rgba:new RegExp("rgba"+Or),hsl:new RegExp("hsl"+Er),hsla:new RegExp("hsla"+Or),hsv:new RegExp("hsv"+Er),hsva:new RegExp("hsva"+Or),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function cn(i){return!!Ne.CSS_UNIT.exec(i)}var Nr=function(i,u){var c=(typeof i=="string"?parseInt(i):i)||0;if(c>=-5&&c<=5){var o=c,f=parseFloat(u),h=f+o*(f/5)*-1;return(h==0||h<=Number.EPSILON)&&(h=.1),{animationPeriod:h+"s"}}return{animationPeriod:u}},jr=function(i,u){var c=i||{},o="";switch(u){case"small":o="12px";break;case"medium":o="16px";break;case"large":o="20px";break;default:o=void 0}var f={};if(c.fontSize){var h=c.fontSize;f=function(v,E){var b={};for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&E.indexOf(m)<0&&(b[m]=v[m]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function"){var z=0;for(m=Object.getOwnPropertySymbols(v);z<m.length;z++)E.indexOf(m[z])<0&&Object.prototype.propertyIsEnumerable.call(v,m[z])&&(b[m[z]]=v[m[z]])}return b}(c,["fontSize"]),o=h}return{fontSize:o,styles:f}},Hv={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Cr=function(i){var u=i.className,c=i.text,o=i.textColor,f=i.staticText,h=i.style;return c?bt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(u||"").trim(),style:vt(vt(vt({},f&&Hv),o&&{color:o,mixBlendMode:"unset"}),h&&h)},typeof c=="string"&&c.length?c:"loading"):null},ri="rgb(50, 205, 50)";function Ur(i,u){if(u===void 0&&(u=0),i.length===0)throw new Error("Input array cannot be empty!");var c=[];return function o(f,h){return h===void 0&&(h=0),c.push.apply(c,f),c.length<h&&o(c,h),c.slice(0,h)}(i,u)}Lt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);P(ri).toRgb();Array.from({length:4},function(i,u){return"--atom-phase".concat(u+1,"-rgb")});Lt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--commet-phase".concat(u+1,"-color")});Lt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--OP-annulus-phase".concat(u+1,"-color")});function nc(i){return i&&i.Math===Math&&i}Lt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);nc(typeof window=="object"&&window)||nc(typeof self=="object"&&self)||nc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(i,u){return"--OP-dotted-phase".concat(u+1,"-color")});Lt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--OP-spokes-phase".concat(u+1,"-color")});Lt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(i,u){return"--OP-annulus-dual-sectors-phase".concat(u+1,"-color")});Lt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return["--OP-annulus-track-phase".concat(u+1,"-color"),"--OP-annulus-sector-phase".concat(u+1,"-color")]});Lt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--four-square-phase".concat(u+1,"-color")});Lt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--mosaic-phase".concat(u+1,"-color")});Lt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--riple-phase".concat(u+1,"-color")});Lt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Za=Array.from({length:4},function(i,u){return"--TD-pulsate-phase".concat(u+1,"-color")}),qv=function(i){var u,c=jr(i==null?void 0:i.style,i==null?void 0:i.size),o=c.styles,f=c.fontSize,h=i==null?void 0:i.easing,v=Nr(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,E=function(b){var m={};if(b instanceof Array){for(var z=Ur(b,Za.length),N=0;N<z.length&&!(N>=4);N++)m[Za[N]]=z[N];return m}try{if(typeof b!="string")throw new Error("Color String expected");for(var D=0;D<Za.length;D++)m[Za[D]]=b}catch(H){for(H instanceof Error?console.warn("[".concat(H.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),D=0;D<Za.length;D++)m[Za[D]]=ri}return m}((u=i==null?void 0:i.color)!==null&&u!==void 0?u:"");return bt.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:vt(vt(vt(vt(vt({},f&&{fontSize:f}),v&&{"--rli-animation-duration":v}),h&&{"--rli-animation-function":h}),E),o),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"rli-d-i-b pulsate-indicator"},bt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),bt.createElement("span",{className:"rli-d-i-b pulsate-dot"}),bt.createElement("span",{className:"rli-d-i-b pulsate-dot"})),bt.createElement(Cr,{staticText:!0,text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor}))};Lt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var Va=Array.from({length:4},function(i,u){return"--TD-brick-stack-phase".concat(u+1,"-color")}),Bv=function(i){var u,c=jr(i==null?void 0:i.style,i==null?void 0:i.size),o=c.styles,f=c.fontSize,h=i==null?void 0:i.easing,v=Nr(i==null?void 0:i.speedPlus,"1s").animationPeriod,E=function(b){var m={};if(b instanceof Array){for(var z=Ur(b,Va.length),N=0;N<z.length&&!(N>=4);N++)m[Va[N]]=z[N];return m}try{if(typeof b!="string")throw new Error("Color String expected");for(var D=0;D<Va.length;D++)m[Va[D]]=b}catch(H){for(H instanceof Error?console.warn("[".concat(H.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),D=0;D<Va.length;D++)m[Va[D]]=ri}return m}((u=i==null?void 0:i.color)!==null&&u!==void 0?u:"");return bt.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:vt(vt(vt(vt(vt({},f&&{fontSize:f}),v&&{"--rli-animation-duration":v}),h&&{"--rli-animation-function":h}),E),o),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},bt.createElement("span",{className:"rli-d-i-b brick-stack"})),bt.createElement(Cr,{staticText:!0,text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor}))};Lt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var Ka=Array.from({length:4},function(i,u){return"--TD-bob-phase".concat(u+1,"-color")}),Yv=function(i){var u,c=jr(i==null?void 0:i.style,i==null?void 0:i.size),o=c.styles,f=c.fontSize,h=i==null?void 0:i.easing,v=Nr(i==null?void 0:i.speedPlus,"1.2s").animationPeriod,E=function(b){var m={};if(b instanceof Array){for(var z=Ur(b,Ka.length),N=0;N<z.length&&!(N>=4);N++)m[Ka[N]]=z[N];return m}try{if(typeof b!="string")throw new Error("Color String expected");for(var D=0;D<Ka.length;D++)m[Ka[D]]=b}catch(H){for(H instanceof Error?console.warn("[".concat(H.message,']: Received "').concat(typeof b,'" instead with value, ').concat(JSON.stringify(b))):console.warn("".concat(JSON.stringify(b),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),D=0;D<Ka.length;D++)m[Ka[D]]=ri}return m}((u=i==null?void 0:i.color)!==null&&u!==void 0?u:"");return bt.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:vt(vt(vt(vt(vt({},f&&{fontSize:f}),v&&{"--rli-animation-duration":v}),h&&{"--rli-animation-function":h}),E),o),role:"status","aria-live":"polite","aria-label":"Loading"},bt.createElement("span",{className:"bob-indicator"},bt.createElement("span",{className:"bobbing"})),bt.createElement(Cr,{staticText:!0,text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor}))};Lt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var Ja=Array.from({length:4},function(i,u){return"--TD-bounce-phase".concat(u+1,"-color")}),Lv=function(i){var u,c=jr(i==null?void 0:i.style,i==null?void 0:i.size),o=c.styles,f=c.fontSize,h=i==null?void 0:i.easing,v=Nr(i==null?void 0:i.speedPlus,"0.5s").animationPeriod,E=function(b){var m={};if(b instanceof Array){for(var z=Ur(b,Ja.length),N=0;N<z.length&&!(N>=4);N++)m[Ja[N]]=z[N];return m}try{if(typeof b!="string")throw new Error("Color String expected");for(var D=0;D<Ja.length;D++)m[Ja[D]]=b}catch{for(D=0;D<Ja.length;D++)m[Ja[D]]=ri}return m}((u=i==null?void 0:i.color)!==null&&u!==void 0?u:"");return bt.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:vt(vt(vt(vt(vt({},f&&{fontSize:f}),v&&{"--rli-animation-duration":v}),h&&{"--rli-animation-function":h}),E),o)},bt.createElement("span",{className:"wrapper"},bt.createElement("span",{className:"group"},bt.createElement("span",{className:"rli-d-i-b dot"}),bt.createElement("span",{className:"rli-d-i-b dot"}),bt.createElement("span",{className:"rli-d-i-b dot"})),bt.createElement("span",{className:"group"},bt.createElement("span",{className:"rli-d-i-b shadow"}),bt.createElement("span",{className:"rli-d-i-b shadow"}),bt.createElement("span",{className:"rli-d-i-b shadow"}))),bt.createElement(Cr,{staticText:!0,text:i==null?void 0:i.text,textColor:i==null?void 0:i.textColor,style:{marginTop:"2px"}}))},Xv=function(i){var u=Object(i).variant,c=u===void 0?"pulsate":u;return c==="pulsate"?bt.createElement(qv,vt({},i)):c==="brick-stack"?bt.createElement(Bv,vt({},i)):c==="bob"?bt.createElement(Yv,vt({},i)):c==="bounce"?bt.createElement(Lv,vt({},i)):null};Lt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--shape-phase".concat(u+1,"-color")});Lt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--trophySpin-phase".concat(u+1,"-color")});Lt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--slab-phase".concat(u+1,"-color")});Lt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(i,u){return"--life-line-phase".concat(u+1,"-color")});const Gv="http://localhost:8000";function Oh(i){document.querySelectorAll(".dashboard-toggle").forEach(o=>o.classList.remove("toggle-active")),document.querySelectorAll(".table-holder").forEach(o=>o.classList.remove("table-inactive"));let u=document.getElementById("table-details"),c=document.getElementById("table-summary");i.target.id=="table-details-btn"?c.classList.add("table-inactive"):i.target.id=="table-summary-btn"&&u.classList.add("table-inactive"),i.target.classList.add("toggle-active")}function Qv(i,u){return i.replace(/\{(\w+)\}/g,(c,o)=>u[o]!==void 0?u[o]:`{${o}}`)}const Zv=({showSidebar:i=!0})=>{const{auth:u,setAuth:c}=w.useContext(bc);w.useEffect(()=>{fetch(`${Gv}/auth/status`,{credentials:"include"}).then(Y=>Y.json()).then(Y=>{c(Y),U(!1)}).catch(Y=>{console.error("Error fetching auth status:",Y),U(!1)})},[]);const[o,f]=w.useState([]),[h,v]=w.useState([]),[E,b]=w.useState(),[m,z]=w.useState(""),[N,D]=w.useState(""),[H,k]=w.useState(0),[_,U]=w.useState(!0),[B,V]=w.useState(""),[G,it]=w.useState(!1),[Q,mt]=w.useState(""),gt=["Job","Wage","Hours Worked","Total"],At=["Job","Date","Start Time","End Time","Hours Worked"],L=Y=>!Y||typeof Y!="object"?"Something went wrong. Please try again later.":Y.status===401?"Please connect your Google account to continue.":Y.status===400?"Missing or invalid parameters. Please try again.":Y.status===404?"No events found for the selected dates.":Y.status===0?"You're offline or the server is unreachable.":Y.message||"Something went wrong. Please try again later.",at=async Y=>{U(!0),V("");try{const[J,Z,rt]=await Promise.all([Fb(Y),Ib(Y),tv(Y)]);f(J||[]),b(rt||null),await g(Z||[],rt)}catch(J){V(L(J))}finally{U(!1)}},Xt=async Y=>{const J=await ev(H);mt(J)},me=async()=>{const Y=await iv();return it(Y),!!Y};if(w.useEffect(()=>{let Y=!0;return(async()=>{if(!(await Pb()).isAuthenticated){if(!Y)return;window.location.replace("/login");return}const Z=await me();Y&&(await Xt(),Z?await at(H):(f([]),v([]),b(null)),U(!1))})(),()=>{Y=!1}},[]),w.useEffect(()=>{(async()=>(H!==0||E)&&(await me()&&await at(H),await Xt()))()},[H]),_)return S.jsx("div",{className:"loading",children:S.jsx(Xv,{color:"#070c22ff",size:"medium",text:"",textColor:""})});const pe=(E==null?void 0:E.paycheck)||0,De=(Q==null?void 0:Q.checkDay)||0,Kt=(Q==null?void 0:Q.startWeekOne)||0,X=(Q==null?void 0:Q.endWeekOne)||0,tt=(Q==null?void 0:Q.startWeekTwo)||0,F=(Q==null?void 0:Q.endWeekTwo)||0,yt=(E==null?void 0:E.taxedPaycheck)||0;async function g(Y,J){const rt=Number((J==null?void 0:J.paycheck)||0)<100?"negative":"positive";D(rt),v(Y);try{const et=await ov(rt);et&&et.phrase&&z(et.phrase)}catch(et){console.error("Error fetching random phrase:",et)}}let q;return E&&(q=Qv(m,{name:(Q==null?void 0:Q.username)||"sir",hours:(E==null?void 0:E.totalHours)||0,payDate:(E==null?void 0:E.checkDay)||Date.now(),earnings:`$${E==null?void 0:E.taxedPaycheck}`||0,goalHours:40})),S.jsxs("div",{children:[i&&S.jsx(Rr,{}),S.jsxs("div",{className:"dashboard-div-container",children:[S.jsxs("h1",{className:"h1-title-table",children:[q," "]}),S.jsxs("div",{className:"summary-container",children:[S.jsx("svg",{onClick:()=>{k(H-1)},className:"w-[44px] h-[44px] text-gray-800 arrow-i","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:S.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M5 12h14M5 12l4-4m-4 4 4 4"})}),S.jsx(Jb,{date:De,moneyAmount:yt,preTaxMoneyAmount:pe}),S.jsx("svg",{onClick:()=>{k(H+1)},className:"w-[44px] h-[44px] text-gray-800 arrow-i","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",viewBox:"0 0 24 24",children:S.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M19 12H5m14 0-4 4m4-4-4-4"})})]}),S.jsxs("div",{className:"dashboard-middle",children:[S.jsxs("div",{className:"dashboard-toggle-bar",children:[S.jsx("div",{id:"table-details-btn",className:"dashboard-toggle d-t-details",onClick:Oh,children:"Details"}),S.jsx("div",{id:"table-summary-btn",className:"dashboard-toggle d-t-summary toggle-active",onClick:Oh,children:"Summary"})]}),S.jsxs("div",{id:"table-summary",className:"table-holder",children:[S.jsxs("h2",{className:"h2-title-table",children:["Hours from ",Kt," to ",X," "]}),S.jsx(ti,{columns:gt,data:h.first,renderType:"Summary"}),S.jsxs("h2",{className:"h2-title-table",children:["Hours from ",tt," to ",F," "]}),S.jsx(ti,{columns:gt,data:h.second,renderType:"Summary"})]}),S.jsxs("div",{id:"table-details",className:"table-holder table-inactive ",children:[S.jsxs("h2",{className:"h2-title-table",children:["Hours from ",Kt," to ",X," "]}),S.jsx(ti,{columns:At,data:o.first,renderType:"Detailed"}),S.jsxs("h2",{className:"h2-title-table",children:["Hours from ",tt," to ",F," "]}),S.jsx(ti,{columns:At,data:o.second,renderType:"Detailed"})]})]})]})]})},Vv="/assets/google-logo-Dl6-ARA7.png",Kv="http://localhost:8000";function Jv(){const i=`${Kv}/auth/google`;return S.jsx("div",{className:"login-wrapper",children:S.jsx("div",{className:"d-height w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700",children:S.jsxs("form",{className:"space-y-6",action:"#",children:[S.jsx("h5",{className:"text-xl font-medium text-gray-900 dark:text-white",children:"Sign in to UrshiftMate"}),S.jsx("button",{type:"submit",className:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Login to your account"}),S.jsxs("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-300",children:["Not registered? ",S.jsx("a",{href:"#",className:"text-blue-700 hover:underline dark:text-blue-500",children:"Create account"})]}),S.jsxs("div",{className:"login-options text-sm font-medium",children:[S.jsx("p",{className:"login-text",children:"Or continue with"}),S.jsx("div",{className:"circle-logo",children:S.jsx("a",{href:i,children:S.jsx("img",{src:Vv,className:"google-icon",alt:"google"})})})]})]})})})}const $v="http://localhost:8000",Pv=()=>{const[i,u]=w.useState({isAuthenticated:!1,user:null}),[c,o]=w.useState(!0);return w.useEffect(()=>{fetch(`${$v}/auth/status`,{credentials:"include"}).then(f=>f.json()).then(f=>{u(f),o(!1)}).catch(f=>{console.error("Error fetching auth status:",f),o(!1)})},[]),c?S.jsx("div",{children:"Loading..."}):S.jsx(bc.Provider,{value:{auth:i,setAuth:u},children:S.jsx(Mb,{children:S.jsxs(cb,{children:[S.jsx(oa,{path:"/login",element:i.isAuthenticated?S.jsx(Qa,{to:"/dashboard"}):S.jsx(Jv,{})}),S.jsx(oa,{path:"/dashboard",element:i.isAuthenticated?S.jsx(Zv,{}):S.jsx(Qa,{to:"/login"})}),S.jsx(oa,{path:"/settings",element:i.isAuthenticated?S.jsx(Kb,{}):S.jsx(Qa,{to:"/login"})}),S.jsx(oa,{path:"/profile",element:i.isAuthenticated?S.jsx(dv,{}):S.jsx(Qa,{to:"/login"})}),S.jsx(oa,{path:"/jobs",element:i.isAuthenticated?S.jsx(fv,{}):S.jsx(Qa,{to:"/login"})}),S.jsx(oa,{path:"*",element:S.jsx(Qa,{to:i.isAuthenticated?"/dashboard":"/login"})})]})})})};yp.createRoot(document.getElementById("root")).render(S.jsx(w.StrictMode,{children:S.jsx(Pv,{})}));
