(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Lv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var wh={exports:{}},jo={};var c_;function Ey(){if(c_)return jo;c_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:c}}return jo.Fragment=t,jo.jsx=i,jo.jsxs=i,jo}var u_;function by(){return u_||(u_=1,wh.exports=Ey()),wh.exports}var ae=by(),Dh={exports:{}},de={};var f_;function Ty(){if(f_)return de;f_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),_=Symbol.iterator;function M(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function g(B,Z,mt){this.props=B,this.context=Z,this.refs=y,this.updater=mt||b}g.prototype.isReactComponent={},g.prototype.setState=function(B,Z){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Z,"setState")},g.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function A(){}A.prototype=g.prototype;function N(B,Z,mt){this.props=B,this.context=Z,this.refs=y,this.updater=mt||b}var U=N.prototype=new A;U.constructor=N,R(U,g.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function L(B,Z,mt){var At=mt.ref;return{$$typeof:o,type:B,key:Z,ref:At!==void 0?At:null,props:mt}}function J(B,Z){return L(B.type,Z,B.props)}function G(B){return typeof B=="object"&&B!==null&&B.$$typeof===o}function X(B){var Z={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(mt){return Z[mt]})}var $=/\/+/g;function tt(B,Z){return typeof B=="object"&&B!==null&&B.key!=null?X(""+B.key):Z.toString(36)}function Q(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(P,P):(B.status="pending",B.then(function(Z){B.status==="pending"&&(B.status="fulfilled",B.value=Z)},function(Z){B.status==="pending"&&(B.status="rejected",B.reason=Z)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,Z,mt,At,It){var at=typeof B;(at==="undefined"||at==="boolean")&&(B=null);var vt=!1;if(B===null)vt=!0;else switch(at){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(B.$$typeof){case o:case t:vt=!0;break;case x:return vt=B._init,z(vt(B._payload),Z,mt,At,It)}}if(vt)return It=It(B),vt=At===""?"."+tt(B,0):At,F(It)?(mt="",vt!=null&&(mt=vt.replace($,"$&/")+"/"),z(It,Z,mt,"",function(ee){return ee})):It!=null&&(G(It)&&(It=J(It,mt+(It.key==null||B&&B.key===It.key?"":(""+It.key).replace($,"$&/")+"/")+vt)),Z.push(It)),1;vt=0;var Tt=At===""?".":At+":";if(F(B))for(var Yt=0;Yt<B.length;Yt++)At=B[Yt],at=Tt+tt(At,Yt),vt+=z(At,Z,mt,at,It);else if(Yt=M(B),typeof Yt=="function")for(B=Yt.call(B),Yt=0;!(At=B.next()).done;)At=At.value,at=Tt+tt(At,Yt++),vt+=z(At,Z,mt,at,It);else if(at==="object"){if(typeof B.then=="function")return z(Q(B),Z,mt,At,It);throw Z=String(B),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return vt}function H(B,Z,mt){if(B==null)return B;var At=[],It=0;return z(B,At,"","",function(at){return Z.call(mt,at,It++)}),At}function lt(B){if(B._status===-1){var Z=B._result;Z=Z(),Z.then(function(mt){(B._status===0||B._status===-1)&&(B._status=1,B._result=mt)},function(mt){(B._status===0||B._status===-1)&&(B._status=2,B._result=mt)}),B._status===-1&&(B._status=0,B._result=Z)}if(B._status===1)return B._result.default;throw B._result}var ut=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},gt={map:H,forEach:function(B,Z,mt){H(B,function(){Z.apply(this,arguments)},mt)},count:function(B){var Z=0;return H(B,function(){Z++}),Z},toArray:function(B){return H(B,function(Z){return Z})||[]},only:function(B){if(!G(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return de.Activity=S,de.Children=gt,de.Component=g,de.Fragment=i,de.Profiler=l,de.PureComponent=N,de.StrictMode=s,de.Suspense=m,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,de.__COMPILER_RUNTIME={__proto__:null,c:function(B){return I.H.useMemoCache(B)}},de.cache=function(B){return function(){return B.apply(null,arguments)}},de.cacheSignal=function(){return null},de.cloneElement=function(B,Z,mt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var At=R({},B.props),It=B.key;if(Z!=null)for(at in Z.key!==void 0&&(It=""+Z.key),Z)!T.call(Z,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&Z.ref===void 0||(At[at]=Z[at]);var at=arguments.length-2;if(at===1)At.children=mt;else if(1<at){for(var vt=Array(at),Tt=0;Tt<at;Tt++)vt[Tt]=arguments[Tt+2];At.children=vt}return L(B.type,It,At)},de.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},de.createElement=function(B,Z,mt){var At,It={},at=null;if(Z!=null)for(At in Z.key!==void 0&&(at=""+Z.key),Z)T.call(Z,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(It[At]=Z[At]);var vt=arguments.length-2;if(vt===1)It.children=mt;else if(1<vt){for(var Tt=Array(vt),Yt=0;Yt<vt;Yt++)Tt[Yt]=arguments[Yt+2];It.children=Tt}if(B&&B.defaultProps)for(At in vt=B.defaultProps,vt)It[At]===void 0&&(It[At]=vt[At]);return L(B,at,It)},de.createRef=function(){return{current:null}},de.forwardRef=function(B){return{$$typeof:p,render:B}},de.isValidElement=G,de.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:lt}},de.memo=function(B,Z){return{$$typeof:d,type:B,compare:Z===void 0?null:Z}},de.startTransition=function(B){var Z=I.T,mt={};I.T=mt;try{var At=B(),It=I.S;It!==null&&It(mt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(P,ut)}catch(at){ut(at)}finally{Z!==null&&mt.types!==null&&(Z.types=mt.types),I.T=Z}},de.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},de.use=function(B){return I.H.use(B)},de.useActionState=function(B,Z,mt){return I.H.useActionState(B,Z,mt)},de.useCallback=function(B,Z){return I.H.useCallback(B,Z)},de.useContext=function(B){return I.H.useContext(B)},de.useDebugValue=function(){},de.useDeferredValue=function(B,Z){return I.H.useDeferredValue(B,Z)},de.useEffect=function(B,Z){return I.H.useEffect(B,Z)},de.useEffectEvent=function(B){return I.H.useEffectEvent(B)},de.useId=function(){return I.H.useId()},de.useImperativeHandle=function(B,Z,mt){return I.H.useImperativeHandle(B,Z,mt)},de.useInsertionEffect=function(B,Z){return I.H.useInsertionEffect(B,Z)},de.useLayoutEffect=function(B,Z){return I.H.useLayoutEffect(B,Z)},de.useMemo=function(B,Z){return I.H.useMemo(B,Z)},de.useOptimistic=function(B,Z){return I.H.useOptimistic(B,Z)},de.useReducer=function(B,Z,mt){return I.H.useReducer(B,Z,mt)},de.useRef=function(B){return I.H.useRef(B)},de.useState=function(B){return I.H.useState(B)},de.useSyncExternalStore=function(B,Z,mt){return I.H.useSyncExternalStore(B,Z,mt)},de.useTransition=function(){return I.H.useTransition()},de.version="19.2.4",de}var h_;function fp(){return h_||(h_=1,Dh.exports=Ty()),Dh.exports}var Jt=fp();const Ay=Lv(Jt);var Uh={exports:{}},Zo={},Lh={exports:{}},Nh={};var d_;function Ry(){return d_||(d_=1,(function(o){function t(z,H){var lt=z.length;z.push(H);t:for(;0<lt;){var ut=lt-1>>>1,gt=z[ut];if(0<l(gt,H))z[ut]=H,z[lt]=gt,lt=ut;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var H=z[0],lt=z.pop();if(lt!==H){z[0]=lt;t:for(var ut=0,gt=z.length,B=gt>>>1;ut<B;){var Z=2*(ut+1)-1,mt=z[Z],At=Z+1,It=z[At];if(0>l(mt,lt))At<gt&&0>l(It,mt)?(z[ut]=It,z[At]=lt,ut=At):(z[ut]=mt,z[Z]=lt,ut=Z);else if(At<gt&&0>l(It,lt))z[ut]=It,z[At]=lt,ut=At;else break t}}return H}function l(z,H){var lt=z.sortIndex-H.sortIndex;return lt!==0?lt:z.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();o.unstable_now=function(){return f.now()-p}}var m=[],d=[],x=1,S=null,_=3,M=!1,b=!1,R=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var H=i(d);H!==null;){if(H.callback===null)s(d);else if(H.startTime<=z)s(d),H.sortIndex=H.expirationTime,t(m,H);else break;H=i(d)}}function F(z){if(R=!1,U(z),!b)if(i(m)!==null)b=!0,P||(P=!0,X());else{var H=i(d);H!==null&&Q(F,H.startTime-z)}}var P=!1,I=-1,T=5,L=-1;function J(){return y?!0:!(o.unstable_now()-L<T)}function G(){if(y=!1,P){var z=o.unstable_now();L=z;var H=!0;try{t:{b=!1,R&&(R=!1,A(I),I=-1),M=!0;var lt=_;try{e:{for(U(z),S=i(m);S!==null&&!(S.expirationTime>z&&J());){var ut=S.callback;if(typeof ut=="function"){S.callback=null,_=S.priorityLevel;var gt=ut(S.expirationTime<=z);if(z=o.unstable_now(),typeof gt=="function"){S.callback=gt,U(z),H=!0;break e}S===i(m)&&s(m),U(z)}else s(m);S=i(m)}if(S!==null)H=!0;else{var B=i(d);B!==null&&Q(F,B.startTime-z),H=!1}}break t}finally{S=null,_=lt,M=!1}H=void 0}}finally{H?X():P=!1}}}var X;if(typeof N=="function")X=function(){N(G)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,tt=$.port2;$.port1.onmessage=G,X=function(){tt.postMessage(null)}}else X=function(){g(G,0)};function Q(z,H){I=g(function(){z(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return _},o.unstable_next=function(z){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var lt=_;_=H;try{return z()}finally{_=lt}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,H){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var lt=_;_=z;try{return H()}finally{_=lt}},o.unstable_scheduleCallback=function(z,H,lt){var ut=o.unstable_now();switch(typeof lt=="object"&&lt!==null?(lt=lt.delay,lt=typeof lt=="number"&&0<lt?ut+lt:ut):lt=ut,z){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=lt+gt,z={id:x++,callback:H,priorityLevel:z,startTime:lt,expirationTime:gt,sortIndex:-1},lt>ut?(z.sortIndex=lt,t(d,z),i(m)===null&&z===i(d)&&(R?(A(I),I=-1):R=!0,Q(F,lt-ut))):(z.sortIndex=gt,t(m,z),b||M||(b=!0,P||(P=!0,X()))),z},o.unstable_shouldYield=J,o.unstable_wrapCallback=function(z){var H=_;return function(){var lt=_;_=H;try{return z.apply(this,arguments)}finally{_=lt}}}})(Nh)),Nh}var p_;function Cy(){return p_||(p_=1,Lh.exports=Ry()),Lh.exports}var Oh={exports:{}},In={};var m_;function wy(){if(m_)return In;m_=1;var o=fp();function t(m){var d="https://react.dev/errors/"+m;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)d+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,d,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:d,implementation:x}}var f=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(m,d){if(m==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.createPortal=function(m,d){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return c(m,d,null,x)},In.flushSync=function(m){var d=f.T,x=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=d,s.p=x,s.d.f()}},In.preconnect=function(m,d){typeof m=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,s.d.C(m,d))},In.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},In.preinit=function(m,d){if(typeof m=="string"&&d&&typeof d.as=="string"){var x=d.as,S=p(x,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,M=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;x==="style"?s.d.S(m,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:S,integrity:_,fetchPriority:M}):x==="script"&&s.d.X(m,{crossOrigin:S,integrity:_,fetchPriority:M,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},In.preinitModule=function(m,d){if(typeof m=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var x=p(d.as,d.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&s.d.M(m)},In.preload=function(m,d){if(typeof m=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var x=d.as,S=p(x,d.crossOrigin);s.d.L(m,x,{crossOrigin:S,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},In.preloadModule=function(m,d){if(typeof m=="string")if(d){var x=p(d.as,d.crossOrigin);s.d.m(m,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:x,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else s.d.m(m)},In.requestFormReset=function(m){s.d.r(m)},In.unstable_batchedUpdates=function(m,d){return m(d)},In.useFormState=function(m,d,x){return f.H.useFormState(m,d,x)},In.useFormStatus=function(){return f.H.useHostTransitionStatus()},In.version="19.2.4",In}var g_;function Dy(){if(g_)return Oh.exports;g_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Oh.exports=wy(),Oh.exports}var __;function Uy(){if(__)return Zo;__=1;var o=Cy(),t=fp(),i=Dy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function d(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),e;if(h===r)return m(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=h;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,r=h;break}if(C===r){v=!0,r=u,a=h;break}C=C.sibling}if(!v){for(C=h.child;C;){if(C===a){v=!0,a=h,r=u;break}if(C===r){v=!0,r=h,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,_=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),J=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function X(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var $=Symbol.for("react.client.reference");function tt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===$?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case g:return"Profiler";case y:return"StrictMode";case F:return"Suspense";case P:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case A:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:tt(e.type)||"Memo";case T:n=e._payload,e=e._init;try{return tt(e(n))}catch{}}return null}var Q=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,lt={pending:!1,data:null,method:null,action:null},ut=[],gt=-1;function B(e){return{current:e}}function Z(e){0>gt||(e.current=ut[gt],ut[gt]=null,gt--)}function mt(e,n){gt++,ut[gt]=e.current,e.current=n}var At=B(null),It=B(null),at=B(null),vt=B(null);function Tt(e,n){switch(mt(at,n),mt(It,e),mt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Lg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Lg(n),e=Ng(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(At),mt(At,e)}function Yt(){Z(At),Z(It),Z(at)}function ee(e){e.memoizedState!==null&&mt(vt,e);var n=At.current,a=Ng(n,e.type);n!==a&&(mt(It,e),mt(At,a))}function ie(e){It.current===e&&(Z(At),Z(It)),vt.current===e&&(Z(vt),Xo._currentValue=lt)}var $e,ye;function me(e){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",ye=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+e+ye}var Ce=!1;function oe(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ft){var ot=ft}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ft){ot=ft}e.call(xt.prototype)}}else{try{throw Error()}catch(ft){ot=ft}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ft){if(ft&&ot&&typeof ft.stack=="string")return[ft.stack,ot.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),v=h[0],C=h[1];if(v&&C){var V=v.split(`
`),it=C.split(`
`);for(u=r=0;r<V.length&&!V[r].includes("DetermineComponentFrameRoot");)r++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(r===V.length||u===it.length)for(r=V.length-1,u=it.length-1;1<=r&&0<=u&&V[r]!==it[u];)u--;for(;1<=r&&0<=u;r--,u--)if(V[r]!==it[u]){if(r!==1||u!==1)do if(r--,u--,0>u||V[r]!==it[u]){var pt=`
`+V[r].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=r&&0<=u);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function qe(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return oe(e.type,!1);case 11:return oe(e.type.render,!1);case 1:return oe(e.type,!0);case 31:return me("Activity");default:return""}}function w(e){try{var n="",a=null;do n+=qe(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var yt=Object.prototype.hasOwnProperty,Gt=o.unstable_scheduleCallback,Ut=o.unstable_cancelCallback,Rt=o.unstable_shouldYield,O=o.unstable_requestPaint,E=o.unstable_now,Y=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,St=o.unstable_UserBlockingPriority,rt=o.unstable_NormalPriority,kt=o.unstable_LowPriority,Ct=o.unstable_IdlePriority,jt=o.log,te=o.unstable_setDisableYieldValue,Et=null,Mt=null;function zt(e){if(typeof jt=="function"&&te(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(Et,e)}catch{}}var Nt=Math.clz32?Math.clz32:j,Ft=Math.log,ge=Math.LN2;function j(e){return e>>>=0,e===0?32:31-(Ft(e)/ge|0)|0}var Dt=256,wt=262144,Ht=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~h,r!==0?u=bt(r):(v&=C,v!==0?u=bt(v):a||(a=C&~e,a!==0&&(u=bt(a))))):(C=r&~h,C!==0?u=bt(C):v!==0?u=bt(v):a||(a=r&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Xt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var e=Ht;return Ht<<=1,(Ht&62914560)===0&&(Ht=4194304),e}function De(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Gn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ri(e,n,a,r,u,h){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,V=e.expirationTimes,it=e.hiddenUpdates;for(a=v&~a;0<a;){var pt=31-Nt(a),xt=1<<pt;C[pt]=0,V[pt]=-1;var ot=it[pt];if(ot!==null)for(it[pt]=null,pt=0;pt<ot.length;pt++){var ft=ot[pt];ft!==null&&(ft.lane&=-536870913)}a&=~xt}r!==0&&ao(e,r,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~n))}function ao(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Nt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Zs(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Nt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function vl(e,n){var a=n&-n;return a=(a&42)!==0?1:Qs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ks(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hi(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:n_(e.type))}function Js(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Ci=Math.random().toString(36).slice(2),fn="__reactFiber$"+Ci,Sn="__reactProps$"+Ci,ia="__reactContainer$"+Ci,Oa="__reactEvents$"+Ci,xl="__reactListeners$"+Ci,Sl="__reactHandles$"+Ci,yl="__reactResources$"+Ci,_s="__reactMarker$"+Ci;function so(e){delete e[fn],delete e[Sn],delete e[Oa],delete e[xl],delete e[Sl]}function Pa(e){var n=e[fn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ia]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Hg(e);e!==null;){if(a=e[fn])return a;e=Hg(e)}return n}e=a,a=e.parentNode}return null}function Ia(e){if(e=e[fn]||e[ia]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function vs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function D(e){var n=e[yl];return n||(n=e[yl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function q(e){e[_s]=!0}var ct=new Set,st={};function et(e,n){Lt(e,n),Lt(e+"Capture",n)}function Lt(e,n){for(st[e]=n,e=0;e<n.length;e++)ct.add(n[e])}var Vt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ot={},Qt={};function $t(e){return yt.call(Qt,e)?!0:yt.call(Ot,e)?!1:Vt.test(e)?Qt[e]=!0:(Ot[e]=!0,!1)}function le(e,n,a){if($t(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function he(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function tn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function en(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,h.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ne(e){if(!e._valueTracker){var n=tn(e)?"checked":"value";e._valueTracker=en(e,n,""+e[n])}}function yn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=tn(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Vn=/[\n"\\]/g;function fe(e){return e.replace(Vn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function kn(e,n,a,r,u,h,v,C){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?wi(e,v,_e(n)):a!=null?wi(e,v,_e(a)):r!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+_e(C):e.removeAttribute("name")}function ii(e,n,a,r,u,h,v,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Ne(e);return}a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Ne(e)}function wi(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ai(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function hn(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Q(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Ne(e)}function Xn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var dn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Di(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||dn.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function aa(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Di(e,u,r)}else for(var h in n)n.hasOwnProperty(h)&&Di(e,h,n[h])}function $s(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(e){return Sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function sa(){}var Tu=null;function Au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tr=null,er=null;function Up(e){var n=Ia(e);if(n&&(e=n.stateNode)){var a=e[Sn]||null;t:switch(e=n.stateNode,n.type){case"input":if(kn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Sn]||null;if(!u)throw Error(s(90));kn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&yn(r)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ai(e,!!a.multiple,n,!1)}}}var Ru=!1;function Lp(e,n,a){if(Ru)return e(n,a);Ru=!0;try{var r=e(n);return r}finally{if(Ru=!1,(tr!==null||er!==null)&&(cc(),tr&&(n=tr,e=er,er=tr=null,Up(n),e)))for(n=0;n<e.length;n++)Up(e[n])}}function ro(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Sn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cu=!1;if(ra)try{var oo={};Object.defineProperty(oo,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",oo,oo),window.removeEventListener("test",oo,oo)}catch{Cu=!1}var za=null,wu=null,El=null;function Np(){if(El)return El;var e,n=wu,a=n.length,r,u="value"in za?za.value:za.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[h-r];r++);return El=u.slice(e,1<r?1-r:void 0)}function bl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tl(){return!0}function Op(){return!1}function Zn(e){function n(a,r,u,h,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Tl:Op,this.isPropagationStopped=Op,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Zn(xs),lo=S({},xs,{view:0,detail:0}),yx=Zn(lo),Du,Uu,co,Rl=S({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==co&&(co&&e.type==="mousemove"?(Du=e.screenX-co.screenX,Uu=e.screenY-co.screenY):Uu=Du=0,co=e),Du)},movementY:function(e){return"movementY"in e?e.movementY:Uu}}),Pp=Zn(Rl),Mx=S({},Rl,{dataTransfer:0}),Ex=Zn(Mx),bx=S({},lo,{relatedTarget:0}),Lu=Zn(bx),Tx=S({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),Ax=Zn(Tx),Rx=S({},xs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cx=Zn(Rx),wx=S({},xs,{data:0}),Ip=Zn(wx),Dx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ux={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Lx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nx(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Lx[e])?!!n[e]:!1}function Nu(){return Nx}var Ox=S({},lo,{key:function(e){if(e.key){var n=Dx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=bl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ux[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?bl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Px=Zn(Ox),Ix=S({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zp=Zn(Ix),zx=S({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),Fx=Zn(zx),Bx=S({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=Zn(Bx),Gx=S({},Rl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vx=Zn(Gx),kx=S({},xs,{newState:0,oldState:0}),Xx=Zn(kx),Wx=[9,13,27,32],Ou=ra&&"CompositionEvent"in window,uo=null;ra&&"documentMode"in document&&(uo=document.documentMode);var Yx=ra&&"TextEvent"in window&&!uo,Fp=ra&&(!Ou||uo&&8<uo&&11>=uo),Bp=" ",Hp=!1;function Gp(e,n){switch(e){case"keyup":return Wx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nr=!1;function qx(e,n){switch(e){case"compositionend":return Vp(n);case"keypress":return n.which!==32?null:(Hp=!0,Bp);case"textInput":return e=n.data,e===Bp&&Hp?null:e;default:return null}}function jx(e,n){if(nr)return e==="compositionend"||!Ou&&Gp(e,n)?(e=Np(),El=wu=za=null,nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fp&&n.locale!=="ko"?null:n.data;default:return null}}var Zx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Zx[e.type]:n==="textarea"}function Xp(e,n,a,r){tr?er?er.push(r):er=[r]:tr=r,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var fo=null,ho=null;function Qx(e){Ag(e,0)}function Cl(e){var n=vs(e);if(yn(n))return e}function Wp(e,n){if(e==="change")return n}var Yp=!1;if(ra){var Pu;if(ra){var Iu="oninput"in document;if(!Iu){var qp=document.createElement("div");qp.setAttribute("oninput","return;"),Iu=typeof qp.oninput=="function"}Pu=Iu}else Pu=!1;Yp=Pu&&(!document.documentMode||9<document.documentMode)}function jp(){fo&&(fo.detachEvent("onpropertychange",Zp),ho=fo=null)}function Zp(e){if(e.propertyName==="value"&&Cl(ho)){var n=[];Xp(n,ho,e,Au(e)),Lp(Qx,n)}}function Kx(e,n,a){e==="focusin"?(jp(),fo=n,ho=a,fo.attachEvent("onpropertychange",Zp)):e==="focusout"&&jp()}function Jx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cl(ho)}function $x(e,n){if(e==="click")return Cl(n)}function tS(e,n){if(e==="input"||e==="change")return Cl(n)}function eS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var si=typeof Object.is=="function"?Object.is:eS;function po(e,n){if(si(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!yt.call(n,u)||!si(e[u],n[u]))return!1}return!0}function Qp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Kp(e,n){var a=Qp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Qp(a)}}function Jp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Jp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function $p(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function zu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var nS=ra&&"documentMode"in document&&11>=document.documentMode,ir=null,Fu=null,mo=null,Bu=!1;function tm(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bu||ir==null||ir!==Zt(r)||(r=ir,"selectionStart"in r&&zu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&po(mo,r)||(mo=r,r=gc(Fu,"onSelect"),0<r.length&&(n=new Al("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=ir)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ar={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Hu={},em={};ra&&(em=document.createElement("div").style,"AnimationEvent"in window||(delete ar.animationend.animation,delete ar.animationiteration.animation,delete ar.animationstart.animation),"TransitionEvent"in window||delete ar.transitionend.transition);function ys(e){if(Hu[e])return Hu[e];if(!ar[e])return e;var n=ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in em)return Hu[e]=n[a];return e}var nm=ys("animationend"),im=ys("animationiteration"),am=ys("animationstart"),iS=ys("transitionrun"),aS=ys("transitionstart"),sS=ys("transitioncancel"),sm=ys("transitionend"),rm=new Map,Gu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Gu.push("scrollEnd");function Ui(e,n){rm.set(e,n),et(n,[e])}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},mi=[],sr=0,Vu=0;function Dl(){for(var e=sr,n=Vu=sr=0;n<e;){var a=mi[n];mi[n++]=null;var r=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var h=mi[n];if(mi[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}h!==0&&om(a,u,h)}}function Ul(e,n,a,r){mi[sr++]=e,mi[sr++]=n,mi[sr++]=a,mi[sr++]=r,Vu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ku(e,n,a,r){return Ul(e,n,a,r),Ll(e)}function Ms(e,n){return Ul(e,null,null,n),Ll(e)}function om(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=h.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),h):null}function Ll(e){if(50<zo)throw zo=0,$f=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var rr={};function rS(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(e,n,a,r){return new rS(e,n,a,r)}function Xu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function oa(e,n){var a=e.alternate;return a===null?(a=ri(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function lm(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Nl(e,n,a,r,u,h){var v=0;if(r=e,typeof e=="function")Xu(e)&&(v=1);else if(typeof e=="string")v=fy(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=ri(31,a,n,u),e.elementType=L,e.lanes=h,e;case R:return Es(a.children,u,h,n);case y:v=8,u|=24;break;case g:return e=ri(12,a,n,u|2),e.elementType=g,e.lanes=h,e;case F:return e=ri(13,a,n,u),e.elementType=F,e.lanes=h,e;case P:return e=ri(19,a,n,u),e.elementType=P,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break t;case A:v=9;break t;case U:v=11;break t;case I:v=14;break t;case T:v=16,r=null;break t}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ri(v,a,n,u),n.elementType=e,n.type=r,n.lanes=h,n}function Es(e,n,a,r){return e=ri(7,e,r,n),e.lanes=a,e}function Wu(e,n,a){return e=ri(6,e,null,n),e.lanes=a,e}function cm(e){var n=ri(18,null,null,0);return n.stateNode=e,n}function Yu(e,n,a){return n=ri(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var um=new WeakMap;function gi(e,n){if(typeof e=="object"&&e!==null){var a=um.get(e);return a!==void 0?a:(n={value:e,source:n,stack:w(n)},um.set(e,n),n)}return{value:e,source:n,stack:w(n)}}var or=[],lr=0,Ol=null,go=0,_i=[],vi=0,Fa=null,Gi=1,Vi="";function la(e,n){or[lr++]=go,or[lr++]=Ol,Ol=e,go=n}function fm(e,n,a){_i[vi++]=Gi,_i[vi++]=Vi,_i[vi++]=Fa,Fa=e;var r=Gi;e=Vi;var u=32-Nt(r)-1;r&=~(1<<u),a+=1;var h=32-Nt(n)+u;if(30<h){var v=u-u%5;h=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Gi=1<<32-Nt(n)+u|a<<u|r,Vi=h+e}else Gi=1<<h|a<<u|r,Vi=e}function qu(e){e.return!==null&&(la(e,1),fm(e,1,0))}function ju(e){for(;e===Ol;)Ol=or[--lr],or[lr]=null,go=or[--lr],or[lr]=null;for(;e===Fa;)Fa=_i[--vi],_i[vi]=null,Vi=_i[--vi],_i[vi]=null,Gi=_i[--vi],_i[vi]=null}function hm(e,n){_i[vi++]=Gi,_i[vi++]=Vi,_i[vi++]=Fa,Gi=n.id,Vi=n.overflow,Fa=e}var Un=null,Ke=null,we=!1,Ba=null,xi=!1,Zu=Error(s(519));function Ha(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _o(gi(n,e)),Zu}function dm(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[fn]=e,n[Sn]=r,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<Bo.length;a++)be(Bo[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),ii(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),hn(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Dg(n.textContent,a)?(r.popover!=null&&(be("beforetoggle",n),be("toggle",n)),r.onScroll!=null&&be("scroll",n),r.onScrollEnd!=null&&be("scrollend",n),r.onClick!=null&&(n.onclick=sa),n=!0):n=!1,n||Ha(e,!0)}function pm(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Un=Un.return}}function cr(e){if(e!==Un)return!1;if(!we)return pm(e),we=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ph(e.type,e.memoizedProps)),a=!a),a&&Ke&&Ha(e),pm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Bg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ke=Bg(e)}else n===27?(n=Ke,ts(e.type)?(e=xh,xh=null,Ke=e):Ke=n):Ke=Un?yi(e.stateNode.nextSibling):null;return!0}function bs(){Ke=Un=null,we=!1}function Qu(){var e=Ba;return e!==null&&($n===null?$n=e:$n.push.apply($n,e),Ba=null),e}function _o(e){Ba===null?Ba=[e]:Ba.push(e)}var Ku=B(null),Ts=null,ca=null;function Ga(e,n,a){mt(Ku,n._currentValue),n._currentValue=a}function ua(e){e._currentValue=Ku.current,Z(Ku)}function Ju(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function $u(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var v=u.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=u;for(var V=0;V<n.length;V++)if(C.context===n[V]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),Ju(h.return,a,e),r||(v=null);break t}h=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,h=v.alternate,h!==null&&(h.lanes|=a),Ju(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function ur(e,n,a,r){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;si(u.pendingProps.value,v.value)||(e!==null?e.push(C):e=[C])}}else if(u===vt.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Xo):e=[Xo])}u=u.return}e!==null&&$u(n,e,a,r),n.flags|=262144}function Pl(e){for(e=e.firstContext;e!==null;){if(!si(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function As(e){Ts=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return mm(Ts,e)}function Il(e,n){return Ts===null&&As(e),mm(e,n)}function mm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(e===null)throw Error(s(308));ca=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ca=ca.next=n;return a}var oS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},lS=o.unstable_scheduleCallback,cS=o.unstable_NormalPriority,pn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new oS,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&lS(cS,function(){e.controller.abort()})}var xo=null,ef=0,fr=0,hr=null;function uS(e,n){if(xo===null){var a=xo=[];ef=0,fr=sh(),hr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return ef++,n.then(gm,gm),n}function gm(){if(--ef===0&&xo!==null){hr!==null&&(hr.status="fulfilled");var e=xo;xo=null,fr=0,hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function fS(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var _m=z.S;z.S=function(e,n){tg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&uS(e,n),_m!==null&&_m(e,n)};var Rs=B(null);function nf(){var e=Rs.current;return e!==null?e:je.pooledCache}function zl(e,n){n===null?mt(Rs,Rs.current):mt(Rs,n.pool)}function vm(){var e=nf();return e===null?null:{parent:pn._currentValue,pool:e}}var dr=Error(s(460)),af=Error(s(474)),Fl=Error(s(542)),Bl={then:function(){}};function xm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Sm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(sa,sa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e;default:if(typeof n.status=="string")n.then(sa,sa);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Mm(e),e}throw ws=n,dr}}function Cs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ws=a,dr):a}}var ws=null;function ym(){if(ws===null)throw Error(s(459));var e=ws;return ws=null,e}function Mm(e){if(e===dr||e===Fl)throw Error(s(483))}var pr=null,So=0;function Hl(e){var n=So;return So+=1,pr===null&&(pr=[]),Sm(pr,e,n)}function yo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gl(e,n){throw n.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Em(e){function n(K,W){if(e){var nt=K.deletions;nt===null?(K.deletions=[W],K.flags|=16):nt.push(W)}}function a(K,W){if(!e)return null;for(;W!==null;)n(K,W),W=W.sibling;return null}function r(K){for(var W=new Map;K!==null;)K.key!==null?W.set(K.key,K):W.set(K.index,K),K=K.sibling;return W}function u(K,W){return K=oa(K,W),K.index=0,K.sibling=null,K}function h(K,W,nt){return K.index=nt,e?(nt=K.alternate,nt!==null?(nt=nt.index,nt<W?(K.flags|=67108866,W):nt):(K.flags|=67108866,W)):(K.flags|=1048576,W)}function v(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function C(K,W,nt,_t){return W===null||W.tag!==6?(W=Wu(nt,K.mode,_t),W.return=K,W):(W=u(W,nt),W.return=K,W)}function V(K,W,nt,_t){var ne=nt.type;return ne===R?pt(K,W,nt.props.children,_t,nt.key):W!==null&&(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&Cs(ne)===W.type)?(W=u(W,nt.props),yo(W,nt),W.return=K,W):(W=Nl(nt.type,nt.key,nt.props,null,K.mode,_t),yo(W,nt),W.return=K,W)}function it(K,W,nt,_t){return W===null||W.tag!==4||W.stateNode.containerInfo!==nt.containerInfo||W.stateNode.implementation!==nt.implementation?(W=Yu(nt,K.mode,_t),W.return=K,W):(W=u(W,nt.children||[]),W.return=K,W)}function pt(K,W,nt,_t,ne){return W===null||W.tag!==7?(W=Es(nt,K.mode,_t,ne),W.return=K,W):(W=u(W,nt),W.return=K,W)}function xt(K,W,nt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=Wu(""+W,K.mode,nt),W.return=K,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case M:return nt=Nl(W.type,W.key,W.props,null,K.mode,nt),yo(nt,W),nt.return=K,nt;case b:return W=Yu(W,K.mode,nt),W.return=K,W;case T:return W=Cs(W),xt(K,W,nt)}if(Q(W)||X(W))return W=Es(W,K.mode,nt,null),W.return=K,W;if(typeof W.then=="function")return xt(K,Hl(W),nt);if(W.$$typeof===N)return xt(K,Il(K,W),nt);Gl(K,W)}return null}function ot(K,W,nt,_t){var ne=W!==null?W.key:null;if(typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint")return ne!==null?null:C(K,W,""+nt,_t);if(typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:return nt.key===ne?V(K,W,nt,_t):null;case b:return nt.key===ne?it(K,W,nt,_t):null;case T:return nt=Cs(nt),ot(K,W,nt,_t)}if(Q(nt)||X(nt))return ne!==null?null:pt(K,W,nt,_t,null);if(typeof nt.then=="function")return ot(K,W,Hl(nt),_t);if(nt.$$typeof===N)return ot(K,W,Il(K,nt),_t);Gl(K,nt)}return null}function ft(K,W,nt,_t,ne){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return K=K.get(nt)||null,C(W,K,""+_t,ne);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case M:return K=K.get(_t.key===null?nt:_t.key)||null,V(W,K,_t,ne);case b:return K=K.get(_t.key===null?nt:_t.key)||null,it(W,K,_t,ne);case T:return _t=Cs(_t),ft(K,W,nt,_t,ne)}if(Q(_t)||X(_t))return K=K.get(nt)||null,pt(W,K,_t,ne,null);if(typeof _t.then=="function")return ft(K,W,nt,Hl(_t),ne);if(_t.$$typeof===N)return ft(K,W,nt,Il(W,_t),ne);Gl(W,_t)}return null}function qt(K,W,nt,_t){for(var ne=null,Oe=null,Kt=W,ve=W=0,Re=null;Kt!==null&&ve<nt.length;ve++){Kt.index>ve?(Re=Kt,Kt=null):Re=Kt.sibling;var Pe=ot(K,Kt,nt[ve],_t);if(Pe===null){Kt===null&&(Kt=Re);break}e&&Kt&&Pe.alternate===null&&n(K,Kt),W=h(Pe,W,ve),Oe===null?ne=Pe:Oe.sibling=Pe,Oe=Pe,Kt=Re}if(ve===nt.length)return a(K,Kt),we&&la(K,ve),ne;if(Kt===null){for(;ve<nt.length;ve++)Kt=xt(K,nt[ve],_t),Kt!==null&&(W=h(Kt,W,ve),Oe===null?ne=Kt:Oe.sibling=Kt,Oe=Kt);return we&&la(K,ve),ne}for(Kt=r(Kt);ve<nt.length;ve++)Re=ft(Kt,K,ve,nt[ve],_t),Re!==null&&(e&&Re.alternate!==null&&Kt.delete(Re.key===null?ve:Re.key),W=h(Re,W,ve),Oe===null?ne=Re:Oe.sibling=Re,Oe=Re);return e&&Kt.forEach(function(ss){return n(K,ss)}),we&&la(K,ve),ne}function se(K,W,nt,_t){if(nt==null)throw Error(s(151));for(var ne=null,Oe=null,Kt=W,ve=W=0,Re=null,Pe=nt.next();Kt!==null&&!Pe.done;ve++,Pe=nt.next()){Kt.index>ve?(Re=Kt,Kt=null):Re=Kt.sibling;var ss=ot(K,Kt,Pe.value,_t);if(ss===null){Kt===null&&(Kt=Re);break}e&&Kt&&ss.alternate===null&&n(K,Kt),W=h(ss,W,ve),Oe===null?ne=ss:Oe.sibling=ss,Oe=ss,Kt=Re}if(Pe.done)return a(K,Kt),we&&la(K,ve),ne;if(Kt===null){for(;!Pe.done;ve++,Pe=nt.next())Pe=xt(K,Pe.value,_t),Pe!==null&&(W=h(Pe,W,ve),Oe===null?ne=Pe:Oe.sibling=Pe,Oe=Pe);return we&&la(K,ve),ne}for(Kt=r(Kt);!Pe.done;ve++,Pe=nt.next())Pe=ft(Kt,K,ve,Pe.value,_t),Pe!==null&&(e&&Pe.alternate!==null&&Kt.delete(Pe.key===null?ve:Pe.key),W=h(Pe,W,ve),Oe===null?ne=Pe:Oe.sibling=Pe,Oe=Pe);return e&&Kt.forEach(function(My){return n(K,My)}),we&&la(K,ve),ne}function We(K,W,nt,_t){if(typeof nt=="object"&&nt!==null&&nt.type===R&&nt.key===null&&(nt=nt.props.children),typeof nt=="object"&&nt!==null){switch(nt.$$typeof){case M:t:{for(var ne=nt.key;W!==null;){if(W.key===ne){if(ne=nt.type,ne===R){if(W.tag===7){a(K,W.sibling),_t=u(W,nt.props.children),_t.return=K,K=_t;break t}}else if(W.elementType===ne||typeof ne=="object"&&ne!==null&&ne.$$typeof===T&&Cs(ne)===W.type){a(K,W.sibling),_t=u(W,nt.props),yo(_t,nt),_t.return=K,K=_t;break t}a(K,W);break}else n(K,W);W=W.sibling}nt.type===R?(_t=Es(nt.props.children,K.mode,_t,nt.key),_t.return=K,K=_t):(_t=Nl(nt.type,nt.key,nt.props,null,K.mode,_t),yo(_t,nt),_t.return=K,K=_t)}return v(K);case b:t:{for(ne=nt.key;W!==null;){if(W.key===ne)if(W.tag===4&&W.stateNode.containerInfo===nt.containerInfo&&W.stateNode.implementation===nt.implementation){a(K,W.sibling),_t=u(W,nt.children||[]),_t.return=K,K=_t;break t}else{a(K,W);break}else n(K,W);W=W.sibling}_t=Yu(nt,K.mode,_t),_t.return=K,K=_t}return v(K);case T:return nt=Cs(nt),We(K,W,nt,_t)}if(Q(nt))return qt(K,W,nt,_t);if(X(nt)){if(ne=X(nt),typeof ne!="function")throw Error(s(150));return nt=ne.call(nt),se(K,W,nt,_t)}if(typeof nt.then=="function")return We(K,W,Hl(nt),_t);if(nt.$$typeof===N)return We(K,W,Il(K,nt),_t);Gl(K,nt)}return typeof nt=="string"&&nt!==""||typeof nt=="number"||typeof nt=="bigint"?(nt=""+nt,W!==null&&W.tag===6?(a(K,W.sibling),_t=u(W,nt),_t.return=K,K=_t):(a(K,W),_t=Wu(nt,K.mode,_t),_t.return=K,K=_t),v(K)):a(K,W)}return function(K,W,nt,_t){try{So=0;var ne=We(K,W,nt,_t);return pr=null,ne}catch(Kt){if(Kt===dr||Kt===Fl)throw Kt;var Oe=ri(29,Kt,null,K.mode);return Oe.lanes=_t,Oe.return=K,Oe}}}var Ds=Em(!0),bm=Em(!1),Va=!1;function sf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function rf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ka(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Xa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ie&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Ll(e),om(e,null,a),n}return Ul(e,r,n,a),Ll(e)}function Mo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Zs(e,a)}}function of(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=v:h=h.next=v,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var lf=!1;function Eo(){if(lf){var e=hr;if(e!==null)throw e}}function bo(e,n,a,r){lf=!1;var u=e.updateQueue;Va=!1;var h=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var V=C,it=V.next;V.next=null,v===null?h=it:v.next=it,v=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,C=pt.lastBaseUpdate,C!==v&&(C===null?pt.firstBaseUpdate=it:C.next=it,pt.lastBaseUpdate=V))}if(h!==null){var xt=u.baseState;v=0,pt=it=V=null,C=h;do{var ot=C.lane&-536870913,ft=ot!==C.lane;if(ft?(Ae&ot)===ot:(r&ot)===ot){ot!==0&&ot===fr&&(lf=!0),pt!==null&&(pt=pt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var qt=e,se=C;ot=n;var We=a;switch(se.tag){case 1:if(qt=se.payload,typeof qt=="function"){xt=qt.call(We,xt,ot);break t}xt=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=se.payload,ot=typeof qt=="function"?qt.call(We,xt,ot):qt,ot==null)break t;xt=S({},xt,ot);break t;case 2:Va=!0}}ot=C.callback,ot!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[ot]:ft.push(ot))}else ft={lane:ot,tag:C.tag,payload:C.payload,callback:C.callback,next:null},pt===null?(it=pt=ft,V=xt):pt=pt.next=ft,v|=ot;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;ft=C,C=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(V=xt),u.baseState=V,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),Za|=v,e.lanes=v,e.memoizedState=xt}}function Tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Am(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],n)}var mr=B(null),Vl=B(0);function Rm(e,n){e=xa,mt(Vl,e),mt(mr,n),xa=e|n.baseLanes}function cf(){mt(Vl,xa),mt(mr,mr.current)}function uf(){xa=Vl.current,Z(mr),Z(Vl)}var oi=B(null),Si=null;function Wa(e){var n=e.alternate;mt(cn,cn.current&1),mt(oi,e),Si===null&&(n===null||mr.current!==null||n.memoizedState!==null)&&(Si=e)}function ff(e){mt(cn,cn.current),mt(oi,e),Si===null&&(Si=e)}function Cm(e){e.tag===22?(mt(cn,cn.current),mt(oi,e),Si===null&&(Si=e)):Ya()}function Ya(){mt(cn,cn.current),mt(oi,oi.current)}function li(e){Z(oi),Si===e&&(Si=null),Z(cn)}var cn=B(0);function kl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||_h(a)||vh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,pe=null,ke=null,mn=null,Xl=!1,gr=!1,Us=!1,Wl=0,To=0,_r=null,hS=0;function sn(){throw Error(s(321))}function hf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!si(e[a],n[a]))return!1;return!0}function df(e,n,a,r,u,h){return fa=h,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?f0:Cf,Us=!1,h=a(r,u),Us=!1,gr&&(h=Dm(n,a,r,u)),wm(e),h}function wm(e){z.H=Co;var n=ke!==null&&ke.next!==null;if(fa=0,mn=ke=pe=null,Xl=!1,To=0,_r=null,n)throw Error(s(300));e===null||gn||(e=e.dependencies,e!==null&&Pl(e)&&(gn=!0))}function Dm(e,n,a,r){pe=e;var u=0;do{if(gr&&(_r=null),To=0,gr=!1,25<=u)throw Error(s(301));if(u+=1,mn=ke=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=h0,h=n(a,r)}while(gr);return h}function dS(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Ao(n):n,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(pe.flags|=1024),n}function pf(){var e=Wl!==0;return Wl=0,e}function mf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gf(e){if(Xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xl=!1}fa=0,mn=ke=pe=null,gr=!1,To=Wl=0,_r=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?pe.memoizedState=mn=e:mn=mn.next=e,mn}function un(){if(ke===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var n=mn===null?pe.memoizedState:mn.next;if(n!==null)mn=n,ke=e;else{if(e===null)throw pe.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},mn===null?pe.memoizedState=mn=e:mn=mn.next=e}return mn}function Yl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ao(e){var n=To;return To+=1,_r===null&&(_r=[]),e=Sm(_r,e,n),n=pe,(mn===null?n.memoizedState:mn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?f0:Cf),e}function ql(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ao(e);if(e.$$typeof===N)return Ln(e)}throw Error(s(438,String(e)))}function _f(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=pe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Yl(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=J;return n.index++,a}function ha(e,n){return typeof n=="function"?n(e):n}function jl(e){var n=un();return vf(n,ke,e)}function vf(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,h=r.pending;if(h!==null){if(u!==null){var v=u.next;u.next=h.next,h.next=v}n.baseQueue=u=h,r.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var C=v=null,V=null,it=n,pt=!1;do{var xt=it.lane&-536870913;if(xt!==it.lane?(Ae&xt)===xt:(fa&xt)===xt){var ot=it.revertLane;if(ot===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),xt===fr&&(pt=!0);else if((fa&ot)===ot){it=it.next,ot===fr&&(pt=!0);continue}else xt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(C=V=xt,v=h):V=V.next=xt,pe.lanes|=ot,Za|=ot;xt=it.action,Us&&a(h,xt),h=it.hasEagerState?it.eagerState:a(h,xt)}else ot={lane:xt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},V===null?(C=V=ot,v=h):V=V.next=ot,pe.lanes|=xt,Za|=xt;it=it.next}while(it!==null&&it!==n);if(V===null?v=h:V.next=C,!si(h,e.memoizedState)&&(gn=!0,pt&&(a=hr,a!==null)))throw a;e.memoizedState=h,e.baseState=v,e.baseQueue=V,r.lastRenderedState=h}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function xf(e){var n=un(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do h=e(h,v.action),v=v.next;while(v!==u);si(h,n.memoizedState)||(gn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function Um(e,n,a){var r=pe,u=un(),h=we;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!si((ke||u).memoizedState,a);if(v&&(u.memoizedState=a,gn=!0),u=u.queue,Mf(Om.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||mn!==null&&mn.memoizedState.tag&1){if(r.flags|=2048,vr(9,{destroy:void 0},Nm.bind(null,r,u,a,n),null),je===null)throw Error(s(349));h||(fa&127)!==0||Lm(r,n,a)}return a}function Lm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Yl(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Nm(e,n,a,r){n.value=a,n.getSnapshot=r,Pm(n)&&Im(e)}function Om(e,n,a){return a(function(){Pm(n)&&Im(e)})}function Pm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!si(e,a)}catch{return!0}}function Im(e){var n=Ms(e,2);n!==null&&ti(n,e,2)}function Sf(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Us){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},n}function zm(e,n,a,r){return e.baseState=a,vf(e,ke,typeof r=="function"?r:ha)}function pS(e,n,a,r,u){if(Kl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};z.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,Fm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Fm(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var h=z.T,v={};z.T=v;try{var C=a(u,r),V=z.S;V!==null&&V(v,C),Bm(e,n,C)}catch(it){yf(e,n,it)}finally{h!==null&&v.types!==null&&(h.types=v.types),z.T=h}}else try{h=a(u,r),Bm(e,n,h)}catch(it){yf(e,n,it)}}function Bm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Hm(e,n,r)},function(r){return yf(e,n,r)}):Hm(e,n,a)}function Hm(e,n,a){n.status="fulfilled",n.value=a,Gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Fm(e,a)))}function yf(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Gm(n),n=n.next;while(n!==r)}e.action=null}function Gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Vm(e,n){return n}function km(e,n){if(we){var a=je.formState;if(a!==null){t:{var r=pe;if(we){if(Ke){e:{for(var u=Ke,h=xi;u.nodeType!==8;){if(!h){u=null;break e}if(u=yi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ke=yi(u.nextSibling),r=u.data==="F!";break t}}Ha(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:n},a.queue=r,a=l0.bind(null,pe,r),r.dispatch=a,r=Sf(!1),h=Rf.bind(null,pe,!1,r.queue),r=Wn(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=pS.bind(null,pe,u,h,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function Xm(e){var n=un();return Wm(n,ke,e)}function Wm(e,n,a){if(n=vf(e,n,Vm)[0],e=jl(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Ao(n)}catch(v){throw v===dr?Fl:v}else r=n;n=un();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,vr(9,{destroy:void 0},mS.bind(null,u,a),null)),[r,h,e]}function mS(e,n){e.action=n}function Ym(e){var n=un(),a=ke;if(a!==null)return Wm(n,a,e);un(),n=n.memoizedState,a=un();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function vr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Yl(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function qm(){return un().memoizedState}function Zl(e,n,a,r){var u=Wn();pe.flags|=e,u.memoizedState=vr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ql(e,n,a,r){var u=un();r=r===void 0?null:r;var h=u.memoizedState.inst;ke!==null&&r!==null&&hf(r,ke.memoizedState.deps)?u.memoizedState=vr(n,h,a,r):(pe.flags|=e,u.memoizedState=vr(1|n,h,a,r))}function jm(e,n){Zl(8390656,8,e,n)}function Mf(e,n){Ql(2048,8,e,n)}function gS(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Yl(),pe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Zm(e){var n=un().memoizedState;return gS({ref:n,nextImpl:e}),function(){if((Ie&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Qm(e,n){return Ql(4,2,e,n)}function Km(e,n){return Ql(4,4,e,n)}function Jm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function $m(e,n,a){a=a!=null?a.concat([e]):null,Ql(4,4,Jm.bind(null,n,e),a)}function Ef(){}function t0(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&hf(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function e0(e,n){var a=un();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&hf(n,r[1]))return r[0];if(r=e(),Us){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r}function bf(e,n,a){return a===void 0||(fa&1073741824)!==0&&(Ae&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=ng(),pe.lanes|=e,Za|=e,a)}function n0(e,n,a,r){return si(a,n)?a:mr.current!==null?(e=bf(e,a,r),si(e,n)||(gn=!0),e):(fa&42)===0||(fa&1073741824)!==0&&(Ae&261930)===0?(gn=!0,e.memoizedState=a):(e=ng(),pe.lanes|=e,Za|=e,n)}function i0(e,n,a,r,u){var h=H.p;H.p=h!==0&&8>h?h:8;var v=z.T,C={};z.T=C,Rf(e,!1,n,a);try{var V=u(),it=z.S;if(it!==null&&it(C,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=fS(V,r);Ro(e,n,pt,fi(e))}else Ro(e,n,r,fi(e))}catch(xt){Ro(e,n,{then:function(){},status:"rejected",reason:xt},fi())}finally{H.p=h,v!==null&&C.types!==null&&(v.types=C.types),z.T=v}}function _S(){}function Tf(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=a0(e).queue;i0(e,u,n,lt,a===null?_S:function(){return s0(e),a(r)})}function a0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:lt,baseState:lt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:lt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function s0(e){var n=a0(e);n.next===null&&(n=e.alternate.memoizedState),Ro(e,n.next.queue,{},fi())}function Af(){return Ln(Xo)}function r0(){return un().memoizedState}function o0(){return un().memoizedState}function vS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();e=ka(a);var r=Xa(n,e,a);r!==null&&(ti(r,n,a),Mo(r,n,a)),n={cache:tf()},e.payload=n;return}n=n.return}}function xS(e,n,a){var r=fi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Kl(e)?c0(n,a):(a=ku(e,n,a,r),a!==null&&(ti(a,e,r),u0(a,n,r)))}function l0(e,n,a){var r=fi();Ro(e,n,a,r)}function Ro(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Kl(e))c0(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var v=n.lastRenderedState,C=h(v,a);if(u.hasEagerState=!0,u.eagerState=C,si(C,v))return Ul(e,n,u,0),je===null&&Dl(),!1}catch{}if(a=ku(e,n,u,r),a!==null)return ti(a,e,r),u0(a,n,r),!0}return!1}function Rf(e,n,a,r){if(r={lane:2,revertLane:sh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Kl(e)){if(n)throw Error(s(479))}else n=ku(e,a,r,2),n!==null&&ti(n,e,2)}function Kl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function c0(e,n){gr=Xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function u0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Zs(e,a)}}var Co={readContext:Ln,use:ql,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};Co.useEffectEvent=sn;var f0={readContext:Ln,use:ql,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:jm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zl(4194308,4,Jm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zl(4194308,4,e,n)},useInsertionEffect:function(e,n){Zl(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Us){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var u=a(n);if(Us){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=xS.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Sf(e);var n=e.queue,a=l0.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ef,useDeferredValue:function(e,n){var a=Wn();return bf(a,e,n)},useTransition:function(){var e=Sf(!1);return e=i0.bind(null,pe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=pe,u=Wn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Ae&127)!==0||Lm(r,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,jm(Om.bind(null,r,h,e),[e]),r.flags|=2048,vr(9,{destroy:void 0},Nm.bind(null,r,h,a,n),null),a},useId:function(){var e=Wn(),n=je.identifierPrefix;if(we){var a=Vi,r=Gi;a=(r&~(1<<32-Nt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Wl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Af,useFormState:km,useActionState:km,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Rf.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:_f,useCacheRefresh:function(){return Wn().memoizedState=vS.bind(null,pe)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Ie&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:Ln,use:ql,useCallback:t0,useContext:Ln,useEffect:Mf,useImperativeHandle:$m,useInsertionEffect:Qm,useLayoutEffect:Km,useMemo:e0,useReducer:jl,useRef:qm,useState:function(){return jl(ha)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=un();return n0(a,ke.memoizedState,e,n)},useTransition:function(){var e=jl(ha)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:Af,useFormState:Xm,useActionState:Xm,useOptimistic:function(e,n){var a=un();return zm(a,ke,e,n)},useMemoCache:_f,useCacheRefresh:o0};Cf.useEffectEvent=Zm;var h0={readContext:Ln,use:ql,useCallback:t0,useContext:Ln,useEffect:Mf,useImperativeHandle:$m,useInsertionEffect:Qm,useLayoutEffect:Km,useMemo:e0,useReducer:xf,useRef:qm,useState:function(){return xf(ha)},useDebugValue:Ef,useDeferredValue:function(e,n){var a=un();return ke===null?bf(a,e,n):n0(a,ke.memoizedState,e,n)},useTransition:function(){var e=xf(ha)[0],n=un().memoizedState;return[typeof e=="boolean"?e:Ao(e),n]},useSyncExternalStore:Um,useId:r0,useHostTransitionStatus:Af,useFormState:Ym,useActionState:Ym,useOptimistic:function(e,n){var a=un();return ke!==null?zm(a,ke,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:_f,useCacheRefresh:o0};h0.useEffectEvent=Zm;function wf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Df={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=fi(),u=ka(r);u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,r),n!==null&&(ti(n,e,r),Mo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=fi(),u=ka(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(e,u,r),n!==null&&(ti(n,e,r),Mo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=fi(),r=ka(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(e,r,a),n!==null&&(ti(n,e,a),Mo(n,e,a))}};function d0(e,n,a,r,u,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,v):n.prototype&&n.prototype.isPureReactComponent?!po(a,r)||!po(u,h):!0}function p0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Df.enqueueReplaceState(n,n.state,null)}function Ls(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function m0(e){wl(e)}function g0(e){console.error(e)}function _0(e){wl(e)}function Jl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function v0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(e,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(e,n)},a}function x0(e){return e=ka(e),e.tag=3,e}function S0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=r.value;e.payload=function(){return u(h)},e.callback=function(){v0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){v0(n,a,r),typeof u!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function SS(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&ur(n,a,u,!0),a=oi.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?uc():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===Bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),nh(e,r,u)),!1;case 22:return a.flags|=65536,r===Bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),nh(e,r,u)),!1}throw Error(s(435,a.tag))}return nh(e,r,u),uc(),!1}if(we)return n=oi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Zu&&(e=Error(s(422),{cause:r}),_o(gi(e,a)))):(r!==Zu&&(n=Error(s(423),{cause:r}),_o(gi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=gi(r,a),u=Uf(e.stateNode,r,u),of(e,u),rn!==4&&(rn=2)),!1;var h=Error(s(520),{cause:r});if(h=gi(h,a),Io===null?Io=[h]:Io.push(h),rn!==4&&(rn=2),n===null)return!0;r=gi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Uf(a.stateNode,r,e),of(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Qa===null||!Qa.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=x0(u),S0(u,e,a,r),of(a,u),!1}a=a.return}while(a!==null);return!1}var Lf=Error(s(461)),gn=!1;function Nn(e,n,a,r){n.child=e===null?bm(n,null,a,r):Ds(n,e.child,a,r)}function y0(e,n,a,r,u){a=a.render;var h=n.ref;if("ref"in r){var v={};for(var C in r)C!=="ref"&&(v[C]=r[C])}else v=r;return As(n),r=df(e,n,a,v,h,u),C=pf(),e!==null&&!gn?(mf(e,n,u),da(e,n,u)):(we&&C&&qu(n),n.flags|=1,Nn(e,n,r,u),n.child)}function M0(e,n,a,r,u){if(e===null){var h=a.type;return typeof h=="function"&&!Xu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,E0(e,n,h,r,u)):(e=Nl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Hf(e,u)){var v=h.memoizedProps;if(a=a.compare,a=a!==null?a:po,a(v,r)&&e.ref===n.ref)return da(e,n,u)}return n.flags|=1,e=oa(h,r),e.ref=n.ref,e.return=n,n.child=e}function E0(e,n,a,r,u){if(e!==null){var h=e.memoizedProps;if(po(h,r)&&e.ref===n.ref)if(gn=!1,n.pendingProps=r=h,Hf(e,u))(e.flags&131072)!==0&&(gn=!0);else return n.lanes=e.lanes,da(e,n,u)}return Nf(e,n,a,r,u)}function b0(e,n,a,r){var u=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~h}else r=0,n.child=null;return T0(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&zl(n,h!==null?h.cachePool:null),h!==null?Rm(n,h):cf(),Cm(n);else return r=n.lanes=536870912,T0(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(zl(n,h.cachePool),Rm(n,h),Ya(),n.memoizedState=null):(e!==null&&zl(n,null),cf(),Ya());return Nn(e,n,u,a),n.child}function wo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function T0(e,n,a,r,u){var h=nf();return h=h===null?null:{parent:pn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&zl(n,null),cf(),Cm(n),e!==null&&ur(e,n,r,!0),n.childLanes=u,null}function $l(e,n){return n=ec({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function A0(e,n,a){return Ds(n,e.child,null,a),e=$l(n,n.pendingProps),e.flags|=2,li(n),n.memoizedState=null,e}function yS(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(we){if(r.mode==="hidden")return e=$l(n,r),n.lanes=536870912,wo(null,e);if(ff(n),(e=Ke)?(e=Fg(e,xi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Un=n,Ke=null)):e=null,e===null)throw Ha(n);return n.lanes=536870912,null}return $l(n,r)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(ff(n),u)if(n.flags&256)n.flags&=-257,n=A0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(gn||ur(e,n,a,!1),u=(a&e.childLanes)!==0,gn||u){if(r=je,r!==null&&(v=vl(r,a),v!==0&&v!==h.retryLane))throw h.retryLane=v,Ms(e,v),ti(r,e,v),Lf;uc(),n=A0(e,n,a)}else e=h.treeContext,Ke=yi(v.nextSibling),Un=n,we=!0,Ba=null,xi=!1,e!==null&&hm(n,e),n=$l(n,r),n.flags|=4096;return n}return e=oa(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function tc(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Nf(e,n,a,r,u){return As(n),a=df(e,n,a,r,void 0,u),r=pf(),e!==null&&!gn?(mf(e,n,u),da(e,n,u)):(we&&r&&qu(n),n.flags|=1,Nn(e,n,a,u),n.child)}function R0(e,n,a,r,u,h){return As(n),n.updateQueue=null,a=Dm(n,r,a,u),wm(e),r=pf(),e!==null&&!gn?(mf(e,n,h),da(e,n,h)):(we&&r&&qu(n),n.flags|=1,Nn(e,n,a,h),n.child)}function C0(e,n,a,r,u){if(As(n),n.stateNode===null){var h=rr,v=a.contextType;typeof v=="object"&&v!==null&&(h=Ln(v)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},sf(n),v=a.contextType,h.context=typeof v=="object"&&v!==null?Ln(v):rr,h.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(wf(n,a,v,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&Df.enqueueReplaceState(h,h.state,null),bo(n,r,h,u),Eo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,V=Ls(a,C);h.props=V;var it=h.context,pt=a.contextType;v=rr,typeof pt=="object"&&pt!==null&&(v=Ln(pt));var xt=a.getDerivedStateFromProps;pt=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||it!==v)&&p0(n,h,r,v),Va=!1;var ot=n.memoizedState;h.state=ot,bo(n,r,h,u),Eo(),it=n.memoizedState,C||ot!==it||Va?(typeof xt=="function"&&(wf(n,a,xt,r),it=n.memoizedState),(V=Va||d0(n,a,V,r,ot,it,v))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),h.props=r,h.state=it,h.context=v,r=V):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,rf(e,n),v=n.memoizedProps,pt=Ls(a,v),h.props=pt,xt=n.pendingProps,ot=h.context,it=a.contextType,V=rr,typeof it=="object"&&it!==null&&(V=Ln(it)),C=a.getDerivedStateFromProps,(it=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==xt||ot!==V)&&p0(n,h,r,V),Va=!1,ot=n.memoizedState,h.state=ot,bo(n,r,h,u),Eo();var ft=n.memoizedState;v!==xt||ot!==ft||Va||e!==null&&e.dependencies!==null&&Pl(e.dependencies)?(typeof C=="function"&&(wf(n,a,C,r),ft=n.memoizedState),(pt=Va||d0(n,a,pt,r,ot,ft,V)||e!==null&&e.dependencies!==null&&Pl(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,ft,V),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,ft,V)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ft),h.props=r,h.state=ft,h.context=V,r=pt):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,tc(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=Ds(n,e.child,null,u),n.child=Ds(n,null,a,u)):Nn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=da(e,n,u),e}function w0(e,n,a,r){return bs(),n.flags|=256,Nn(e,n,a,r),n.child}var Of={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Pf(e){return{baseLanes:e,cachePool:vm()}}function If(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ui),e}function D0(e,n,a){var r=n.pendingProps,u=!1,h=(n.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(we){if(u?Wa(n):Ya(),(e=Ke)?(e=Fg(e,xi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:Gi,overflow:Vi}:null,retryLane:536870912,hydrationErrors:null},a=cm(e),a.return=n,n.child=a,Un=n,Ke=null)):e=null,e===null)throw Ha(n);return vh(e)?n.lanes=32:n.lanes=536870912,null}var C=r.children;return r=r.fallback,u?(Ya(),u=n.mode,C=ec({mode:"hidden",children:C},u),r=Es(r,u,a,null),C.return=n,r.return=n,C.sibling=r,n.child=C,r=n.child,r.memoizedState=Pf(a),r.childLanes=If(e,v,a),n.memoizedState=Of,wo(null,r)):(Wa(n),zf(n,C))}var V=e.memoizedState;if(V!==null&&(C=V.dehydrated,C!==null)){if(h)n.flags&256?(Wa(n),n.flags&=-257,n=Ff(e,n,a)):n.memoizedState!==null?(Ya(),n.child=e.child,n.flags|=128,n=null):(Ya(),C=r.fallback,u=n.mode,r=ec({mode:"visible",children:r.children},u),C=Es(C,u,a,null),C.flags|=2,r.return=n,C.return=n,r.sibling=C,n.child=r,Ds(n,e.child,null,a),r=n.child,r.memoizedState=Pf(a),r.childLanes=If(e,v,a),n.memoizedState=Of,n=wo(null,r));else if(Wa(n),vh(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var it=v.dgst;v=it,r=Error(s(419)),r.stack="",r.digest=v,_o({value:r,source:null,stack:null}),n=Ff(e,n,a)}else if(gn||ur(e,n,a,!1),v=(a&e.childLanes)!==0,gn||v){if(v=je,v!==null&&(r=vl(v,a),r!==0&&r!==V.retryLane))throw V.retryLane=r,Ms(e,r),ti(v,e,r),Lf;_h(C)||uc(),n=Ff(e,n,a)}else _h(C)?(n.flags|=192,n.child=e.child,n=null):(e=V.treeContext,Ke=yi(C.nextSibling),Un=n,we=!0,Ba=null,xi=!1,e!==null&&hm(n,e),n=zf(n,r.children),n.flags|=4096);return n}return u?(Ya(),C=r.fallback,u=n.mode,V=e.child,it=V.sibling,r=oa(V,{mode:"hidden",children:r.children}),r.subtreeFlags=V.subtreeFlags&65011712,it!==null?C=oa(it,C):(C=Es(C,u,a,null),C.flags|=2),C.return=n,r.return=n,r.sibling=C,n.child=r,wo(null,r),r=n.child,C=e.child.memoizedState,C===null?C=Pf(a):(u=C.cachePool,u!==null?(V=pn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=vm(),C={baseLanes:C.baseLanes|a,cachePool:u}),r.memoizedState=C,r.childLanes=If(e,v,a),n.memoizedState=Of,wo(e.child,r)):(Wa(n),a=e.child,e=a.sibling,a=oa(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function zf(e,n){return n=ec({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function ec(e,n){return e=ri(22,e,null,n),e.lanes=0,e}function Ff(e,n,a){return Ds(n,e.child,null,a),e=zf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function U0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Ju(e.return,n,a)}function Bf(e,n,a,r,u,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=h)}function L0(e,n,a){var r=n.pendingProps,u=r.revealOrder,h=r.tail;r=r.children;var v=cn.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,mt(cn,v),Nn(e,n,r,a),r=we?go:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U0(e,a,n);else if(e.tag===19)U0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&kl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Bf(n,!1,u,a,h,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&kl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Bf(n,!0,a,null,h,r);break;case"together":Bf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function da(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ur(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=oa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=oa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Hf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Pl(e)))}function MS(e,n,a){switch(n.tag){case 3:Tt(n,n.stateNode.containerInfo),Ga(n,pn,e.memoizedState.cache),bs();break;case 27:case 5:ee(n);break;case 4:Tt(n,n.stateNode.containerInfo);break;case 10:Ga(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ff(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Wa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?D0(e,n,a):(Wa(n),e=da(e,n,a),e!==null?e.sibling:null);Wa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(ur(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return L0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(cn,cn.current),r)break;return null;case 22:return n.lanes=0,b0(e,n,a,n.pendingProps);case 24:Ga(n,pn,e.memoizedState.cache)}return da(e,n,a)}function N0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)gn=!0;else{if(!Hf(e,a)&&(n.flags&128)===0)return gn=!1,MS(e,n,a);gn=(e.flags&131072)!==0}else gn=!1,we&&(n.flags&1048576)!==0&&fm(n,go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Cs(n.elementType),n.type=e,typeof e=="function")Xu(e)?(r=Ls(e,r),n.tag=1,n=C0(null,n,e,r,a)):(n.tag=0,n=Nf(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=y0(null,n,e,r,a);break t}else if(u===I){n.tag=14,n=M0(null,n,e,r,a);break t}}throw n=tt(e)||e,Error(s(306,n,""))}}return n;case 0:return Nf(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ls(r,n.pendingProps),C0(e,n,r,u,a);case 3:t:{if(Tt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;u=h.element,rf(e,n),bo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Ga(n,pn,r),r!==h.cache&&$u(n,[pn],a,!0),Eo(),r=v.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=w0(e,n,r,a);break t}else if(r!==u){u=gi(Error(s(424)),n),_o(u),n=w0(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Ke=yi(e.firstChild),Un=n,we=!0,Ba=null,xi=!0,a=bm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),r===u){n=da(e,n,a);break t}Nn(e,n,r,a)}n=n.child}return n;case 26:return tc(e,n),e===null?(a=Xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:we||(a=n.type,e=n.pendingProps,r=_c(at.current).createElement(a),r[fn]=n,r[Sn]=e,On(r,a,e),q(r),n.stateNode=r):n.memoizedState=Xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ee(n),e===null&&we&&(r=n.stateNode=Gg(n.type,n.pendingProps,at.current),Un=n,xi=!0,u=Ke,ts(n.type)?(xh=u,Ke=yi(r.firstChild)):Ke=u),Nn(e,n,n.pendingProps.children,a),tc(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&we&&((u=r=Ke)&&(r=JS(r,n.type,n.pendingProps,xi),r!==null?(n.stateNode=r,Un=n,Ke=yi(r.firstChild),xi=!1,u=!0):u=!1),u||Ha(n)),ee(n),u=n.type,h=n.pendingProps,v=e!==null?e.memoizedProps:null,r=h.children,ph(u,h)?r=null:v!==null&&ph(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=df(e,n,dS,null,null,a),Xo._currentValue=u),tc(e,n),Nn(e,n,r,a),n.child;case 6:return e===null&&we&&((e=a=Ke)&&(a=$S(a,n.pendingProps,xi),a!==null?(n.stateNode=a,Un=n,Ke=null,e=!0):e=!1),e||Ha(n)),null;case 13:return D0(e,n,a);case 4:return Tt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ds(n,null,r,a):Nn(e,n,r,a),n.child;case 11:return y0(e,n,n.type,n.pendingProps,a);case 7:return Nn(e,n,n.pendingProps,a),n.child;case 8:return Nn(e,n,n.pendingProps.children,a),n.child;case 12:return Nn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Ga(n,n.type,r.value),Nn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,As(n),u=Ln(u),r=r(u),n.flags|=1,Nn(e,n,r,a),n.child;case 14:return M0(e,n,n.type,n.pendingProps,a);case 15:return E0(e,n,n.type,n.pendingProps,a);case 19:return L0(e,n,a);case 31:return yS(e,n,a);case 22:return b0(e,n,a,n.pendingProps);case 24:return As(n),r=Ln(pn),e===null?(u=nf(),u===null&&(u=je,h=tf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:r,cache:u},sf(n),Ga(n,pn,u)):((e.lanes&a)!==0&&(rf(e,n),bo(n,null,null,a),Eo()),u=e.memoizedState,h=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ga(n,pn,r)):(r=h.cache,Ga(n,pn,r),r!==u.cache&&$u(n,[pn],a,!0))),Nn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(e){e.flags|=4}function Gf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(rg())e.flags|=8192;else throw ws=Bl,af}else e.flags&=-16777217}function O0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Zg(n))if(rg())e.flags|=8192;else throw ws=Bl,af}function nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Be():536870912,e.lanes|=n,Mr|=n)}function Do(e,n){if(!we)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function ES(e,n,a){var r=n.pendingProps;switch(ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ua(pn),Yt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(cr(n)?pa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),Je(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(pa(n),h!==null?(Je(n),O0(n,h)):(Je(n),Gf(n,u,null,r,a))):h?h!==e.memoizedState?(pa(n),Je(n),O0(n,h)):(Je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&pa(n),Je(n),Gf(n,u,e,r,a)),null;case 27:if(ie(n),a=at.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),null}e=At.current,cr(n)?dm(n):(e=Gg(u,r,a),n.stateNode=e,pa(n))}return Je(n),null;case 5:if(ie(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),null}if(h=At.current,cr(n))dm(n);else{var v=_c(at.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}h[fn]=n,h[Sn]=r;t:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break t;for(;v.sibling===null;){if(v.return===null||v.return===n)break t;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=h;t:switch(On(h,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&pa(n)}}return Je(n),Gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&pa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=at.current,cr(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Un,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[fn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Dg(e.nodeValue,a)),e||Ha(n,!0)}else e=_c(e).createTextNode(r),e[fn]=n,n.stateNode=e}return Je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=cr(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[fn]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),e=!1}else a=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=cr(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Qu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),Je(n),null);case 4:return Yt(),e===null&&ch(n.stateNode.containerInfo),Je(n),null;case 10:return ua(n.type),Je(n),null;case 19:if(Z(cn),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,h=r.rendering,h===null)if(u)Do(r,!1);else{if(rn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=kl(e),h!==null){for(n.flags|=128,Do(r,!1),e=h.updateQueue,n.updateQueue=e,nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)lm(a,e),a=a.sibling;return mt(cn,cn.current&1|2),we&&la(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>oc&&(n.flags|=128,u=!0,Do(r,!1),n.lanes=4194304)}else{if(!u)if(e=kl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,nc(n,e),Do(r,!0),r.tail===null&&r.tailMode==="hidden"&&!h.alternate&&!we)return Je(n),null}else 2*E()-r.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Do(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=cn.current,mt(cn,u?a&1|2:a&1),we&&la(n,r.treeForkCount),e):(Je(n),null);case 22:case 23:return li(n),uf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&Z(Rs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ua(pn),Je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function bS(e,n){switch(ju(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ua(pn),Yt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ie(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(li(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Z(cn),null;case 4:return Yt(),null;case 10:return ua(n.type),null;case 22:case 23:return li(n),uf(),e!==null&&Z(Rs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ua(pn),null;case 25:return null;default:return null}}function P0(e,n){switch(ju(n),n.tag){case 3:ua(pn),Yt();break;case 26:case 27:case 5:ie(n);break;case 4:Yt();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Z(cn);break;case 10:ua(n.type);break;case 22:case 23:li(n),uf(),e!==null&&Z(Rs);break;case 24:ua(pn)}}function Uo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var h=a.create,v=a.inst;r=h(),v.destroy=r}a=a.next}while(a!==u)}}catch(C){Ge(n,n.return,C)}}function qa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var h=u.next;r=h;do{if((r.tag&e)===e){var v=r.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var V=a,it=C;try{it()}catch(pt){Ge(u,V,pt)}}}r=r.next}while(r!==h)}}catch(pt){Ge(n,n.return,pt)}}function I0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Am(n,a)}catch(r){Ge(e,e.return,r)}}}function z0(e,n,a){a.props=Ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ge(e,n,r)}}function Lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ge(e,n,u)}}function ki(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ge(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,n,u)}else a.current=null}function F0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Vf(e,n,a){try{var r=e.stateNode;YS(r,e.type,a,n),r[Sn]=n}catch(u){Ge(e,e.return,u)}}function B0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ts(e.type)||e.tag===4}function kf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||B0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ts(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=sa));else if(r!==4&&(r===27&&ts(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Xf(e,n,a),e=e.sibling;e!==null;)Xf(e,n,a),e=e.sibling}function ic(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&ts(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ic(e,n,a),e=e.sibling;e!==null;)ic(e,n,a),e=e.sibling}function H0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,r,a),n[fn]=e,n[Sn]=a}catch(h){Ge(e,e.return,h)}}var ma=!1,_n=!1,Wf=!1,G0=typeof WeakSet=="function"?WeakSet:Set,An=null;function TS(e,n){if(e=e.containerInfo,hh=bc,e=$p(e),zu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,h=r.focusNode;r=r.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var v=0,C=-1,V=-1,it=0,pt=0,xt=e,ot=null;e:for(;;){for(var ft;xt!==a||u!==0&&xt.nodeType!==3||(C=v+u),xt!==h||r!==0&&xt.nodeType!==3||(V=v+r),xt.nodeType===3&&(v+=xt.nodeValue.length),(ft=xt.firstChild)!==null;)ot=xt,xt=ft;for(;;){if(xt===e)break e;if(ot===a&&++it===u&&(C=v),ot===h&&++pt===r&&(V=v),(ft=xt.nextSibling)!==null)break;xt=ot,ot=xt.parentNode}xt=ft}a=C===-1||V===-1?null:{start:C,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(dh={focusedElem:e,selectionRange:a},bc=!1,An=n;An!==null;)if(n=An,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,An=e;else for(;An!==null;){switch(n=An,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,r=a.stateNode;try{var qt=Ls(a.type,u);e=r.getSnapshotBeforeUpdate(qt,h),r.__reactInternalSnapshotBeforeUpdate=e}catch(se){Ge(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)gh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,An=e;break}An=n.return}}function V0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:_a(e,a),r&4&&Uo(5,a);break;case 1:if(_a(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ge(a,a.return,v)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ge(a,a.return,v)}}r&64&&I0(a),r&512&&Lo(a,a.return);break;case 3:if(_a(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Am(e,n)}catch(v){Ge(a,a.return,v)}}break;case 27:n===null&&r&4&&H0(a);case 26:case 5:_a(e,a),n===null&&r&4&&F0(a),r&512&&Lo(a,a.return);break;case 12:_a(e,a);break;case 31:_a(e,a),r&4&&W0(e,a);break;case 13:_a(e,a),r&4&&Y0(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=OS.bind(null,a),ty(e,a))));break;case 22:if(r=a.memoizedState!==null||ma,!r){n=n!==null&&n.memoizedState!==null||_n,u=ma;var h=_n;ma=r,(_n=n)&&!h?va(e,a,(a.subtreeFlags&8772)!==0):_a(e,a),ma=u,_n=h}break;case 30:break;default:_a(e,a)}}function k0(e){var n=e.alternate;n!==null&&(e.alternate=null,k0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&so(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,Qn=!1;function ga(e,n,a){for(a=a.child;a!==null;)X0(e,n,a),a=a.sibling}function X0(e,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:_n||ki(a,n),ga(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_n||ki(a,n);var r=nn,u=Qn;ts(a.type)&&(nn=a.stateNode,Qn=!1),ga(e,n,a),Go(a.stateNode),nn=r,Qn=u;break;case 5:_n||ki(a,n);case 6:if(r=nn,u=Qn,nn=null,ga(e,n,a),nn=r,Qn=u,nn!==null)if(Qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(h){Ge(a,n,h)}else try{nn.removeChild(a.stateNode)}catch(h){Ge(a,n,h)}break;case 18:nn!==null&&(Qn?(e=nn,Ig(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dr(e)):Ig(nn,a.stateNode));break;case 4:r=nn,u=Qn,nn=a.stateNode.containerInfo,Qn=!0,ga(e,n,a),nn=r,Qn=u;break;case 0:case 11:case 14:case 15:qa(2,a,n),_n||qa(4,a,n),ga(e,n,a);break;case 1:_n||(ki(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&z0(a,n,r)),ga(e,n,a);break;case 21:ga(e,n,a);break;case 22:_n=(r=_n)||a.memoizedState!==null,ga(e,n,a),_n=r;break;default:ga(e,n,a)}}function W0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dr(e)}catch(a){Ge(n,n.return,a)}}}function Y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dr(e)}catch(a){Ge(n,n.return,a)}}function AS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new G0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new G0),n;default:throw Error(s(435,e.tag))}}function ac(e,n){var a=AS(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=PS.bind(null,e,r);r.then(u,u)}})}function Kn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],h=e,v=n,C=v;t:for(;C!==null;){switch(C.tag){case 27:if(ts(C.type)){nn=C.stateNode,Qn=!1;break t}break;case 5:nn=C.stateNode,Qn=!1;break t;case 3:case 4:nn=C.stateNode.containerInfo,Qn=!0;break t}C=C.return}if(nn===null)throw Error(s(160));X0(h,v,u),nn=null,Qn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)q0(n,e),n=n.sibling}var Li=null;function q0(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Kn(n,e),Jn(e),r&4&&(qa(3,e,e.return),Uo(3,e),qa(5,e,e.return));break;case 1:Kn(n,e),Jn(e),r&512&&(_n||a===null||ki(a,a.return)),r&64&&ma&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=Li;if(Kn(n,e),Jn(e),r&512&&(_n||a===null||ki(a,a.return)),r&4){var h=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":h=u.getElementsByTagName("title")[0],(!h||h[_s]||h[fn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(r),u.head.insertBefore(h,u.querySelector("head > title"))),On(h,r,a),h[fn]=e,q(h),r=h;break t;case"link":var v=qg("link","href",u).get(r+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(h=v[C],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break e}}h=u.createElement(r),On(h,r,a),u.head.appendChild(h);break;case"meta":if(v=qg("meta","content",u).get(r+(a.content||""))){for(C=0;C<v.length;C++)if(h=v[C],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break e}}h=u.createElement(r),On(h,r,a),u.head.appendChild(h);break;default:throw Error(s(468,r))}h[fn]=e,q(h),r=h}e.stateNode=r}else jg(u,e.type,e.stateNode);else e.stateNode=Yg(u,r,e.memoizedProps);else h!==r?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,r===null?jg(u,e.type,e.stateNode):Yg(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&Vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Kn(n,e),Jn(e),r&512&&(_n||a===null||ki(a,a.return)),a!==null&&r&4&&Vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Kn(n,e),Jn(e),r&512&&(_n||a===null||ki(a,a.return)),e.flags&32){u=e.stateNode;try{Xn(u,"")}catch(qt){Ge(e,e.return,qt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,Vf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(Wf=!0);break;case 6:if(Kn(n,e),Jn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(qt){Ge(e,e.return,qt)}}break;case 3:if(Sc=null,u=Li,Li=vc(n.containerInfo),Kn(n,e),Li=u,Jn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{Dr(n.containerInfo)}catch(qt){Ge(e,e.return,qt)}Wf&&(Wf=!1,j0(e));break;case 4:r=Li,Li=vc(e.stateNode.containerInfo),Kn(n,e),Jn(e),Li=r;break;case 12:Kn(n,e),Jn(e);break;case 31:Kn(n,e),Jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ac(e,r)));break;case 13:Kn(n,e),Jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rc=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ac(e,r)));break;case 22:u=e.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,it=ma,pt=_n;if(ma=it||u,_n=pt||V,Kn(n,e),_n=pt,ma=it,Jn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||ma||_n||Ns(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(h=V.stateNode,u)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=V.stateNode;var xt=V.memoizedProps.style,ot=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;C.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(qt){Ge(V,V.return,qt)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qt){Ge(V,V.return,qt)}}}else if(n.tag===18){if(a===null){V=n;try{var ft=V.stateNode;u?zg(ft,!0):zg(V.stateNode,!1)}catch(qt){Ge(V,V.return,qt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,ac(e,a))));break;case 19:Kn(n,e),Jn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ac(e,r)));break;case 30:break;case 21:break;default:Kn(n,e),Jn(e)}}function Jn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(B0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=kf(e);ic(e,h,u);break;case 5:var v=a.stateNode;a.flags&32&&(Xn(v,""),a.flags&=-33);var C=kf(e);ic(e,C,v);break;case 3:case 4:var V=a.stateNode.containerInfo,it=kf(e);Xf(e,it,V);break;default:throw Error(s(161))}}catch(pt){Ge(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function j0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;j0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function _a(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(e,n.alternate,n),n=n.sibling}function Ns(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:qa(4,n,n.return),Ns(n);break;case 1:ki(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&z0(n,n.return,a),Ns(n);break;case 27:Go(n.stateNode);case 26:case 5:ki(n,n.return),Ns(n);break;case 22:n.memoizedState===null&&Ns(n);break;case 30:Ns(n);break;default:Ns(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,h=n,v=h.flags;switch(h.tag){case 0:case 11:case 15:va(u,h,a),Uo(4,h);break;case 1:if(va(u,h,a),r=h,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){Ge(r,r.return,it)}if(r=h,u=r.updateQueue,u!==null){var C=r.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Tm(V[u],C)}catch(it){Ge(r,r.return,it)}}a&&v&64&&I0(h),Lo(h,h.return);break;case 27:H0(h);case 26:case 5:va(u,h,a),a&&r===null&&v&4&&F0(h),Lo(h,h.return);break;case 12:va(u,h,a);break;case 31:va(u,h,a),a&&v&4&&W0(u,h);break;case 13:va(u,h,a),a&&v&4&&Y0(u,h);break;case 22:h.memoizedState===null&&va(u,h,a),Lo(h,h.return);break;case 30:break;default:va(u,h,a)}n=n.sibling}}function Yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&vo(a))}function qf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e))}function Ni(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Z0(e,n,a,r),n=n.sibling}function Z0(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ni(e,n,a,r),u&2048&&Uo(9,n);break;case 1:Ni(e,n,a,r);break;case 3:Ni(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&vo(e)));break;case 12:if(u&2048){Ni(e,n,a,r),e=n.stateNode;try{var h=n.memoizedProps,v=h.id,C=h.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){Ge(n,n.return,V)}}else Ni(e,n,a,r);break;case 31:Ni(e,n,a,r);break;case 13:Ni(e,n,a,r);break;case 23:break;case 22:h=n.stateNode,v=n.alternate,n.memoizedState!==null?h._visibility&2?Ni(e,n,a,r):No(e,n):h._visibility&2?Ni(e,n,a,r):(h._visibility|=2,xr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Yf(v,n);break;case 24:Ni(e,n,a,r),u&2048&&qf(n.alternate,n);break;default:Ni(e,n,a,r)}}function xr(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,v=n,C=a,V=r,it=v.flags;switch(v.tag){case 0:case 11:case 15:xr(h,v,C,V,u),Uo(8,v);break;case 23:break;case 22:var pt=v.stateNode;v.memoizedState!==null?pt._visibility&2?xr(h,v,C,V,u):No(h,v):(pt._visibility|=2,xr(h,v,C,V,u)),u&&it&2048&&Yf(v.alternate,v);break;case 24:xr(h,v,C,V,u),u&&it&2048&&qf(v.alternate,v);break;default:xr(h,v,C,V,u)}n=n.sibling}}function No(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:No(a,r),u&2048&&Yf(r.alternate,r);break;case 24:No(a,r),u&2048&&qf(r.alternate,r);break;default:No(a,r)}n=n.sibling}}var Oo=8192;function Sr(e,n,a){if(e.subtreeFlags&Oo)for(e=e.child;e!==null;)Q0(e,n,a),e=e.sibling}function Q0(e,n,a){switch(e.tag){case 26:Sr(e,n,a),e.flags&Oo&&e.memoizedState!==null&&hy(a,Li,e.memoizedState,e.memoizedProps);break;case 5:Sr(e,n,a);break;case 3:case 4:var r=Li;Li=vc(e.stateNode.containerInfo),Sr(e,n,a),Li=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Oo,Oo=16777216,Sr(e,n,a),Oo=r):Sr(e,n,a));break;default:Sr(e,n,a)}}function K0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,$0(r,e)}K0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)J0(e),e=e.sibling}function J0(e){switch(e.tag){case 0:case 11:case 15:Po(e),e.flags&2048&&qa(9,e,e.return);break;case 3:Po(e);break;case 12:Po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,sc(e)):Po(e);break;default:Po(e)}}function sc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];An=r,$0(r,e)}K0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:qa(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}e=e.sibling}}function $0(e,n){for(;An!==null;){var a=An;switch(a.tag){case 0:case 11:case 15:qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:vo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,An=r;else t:for(a=e;An!==null;){r=An;var u=r.sibling,h=r.return;if(k0(r),r===a){An=null;break t}if(u!==null){u.return=h,An=u;break t}An=h}}}var RS={getCacheForType:function(e){var n=Ln(pn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Ln(pn).controller.signal}},CS=typeof WeakMap=="function"?WeakMap:Map,Ie=0,je=null,Ee=null,Ae=0,He=0,ci=null,ja=!1,yr=!1,jf=!1,xa=0,rn=0,Za=0,Os=0,Zf=0,ui=0,Mr=0,Io=null,$n=null,Qf=!1,rc=0,tg=0,oc=1/0,lc=null,Qa=null,Mn=0,Ka=null,Er=null,Sa=0,Kf=0,Jf=null,eg=null,zo=0,$f=null;function fi(){return(Ie&2)!==0&&Ae!==0?Ae&-Ae:z.T!==null?sh():Hi()}function ng(){if(ui===0)if((Ae&536870912)===0||we){var e=wt;wt<<=1,(wt&3932160)===0&&(wt=262144),ui=e}else ui=536870912;return e=oi.current,e!==null&&(e.flags|=32),ui}function ti(e,n,a){(e===je&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(br(e,0),Ja(e,Ae,ui,!1)),Gn(e,a),((Ie&2)===0||e!==je)&&(e===je&&((Ie&2)===0&&(Os|=a),rn===4&&Ja(e,Ae,ui,!1)),Xi(e))}function ig(e,n,a){if((Ie&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Xt(e,n),u=r?US(e,n):eh(e,n,!0),h=r;do{if(u===0){yr&&!r&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!wS(a)){u=eh(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;t:{var C=e;u=Io;var V=C.current.memoizedState.isDehydrated;if(V&&(br(C,v).flags|=256),v=eh(C,v,!1),v!==2){if(jf&&!V){C.errorRecoveryDisabledLanes|=h,Os|=h,u=4;break t}h=$n,$n=u,h!==null&&($n===null?$n=h:$n.push.apply($n,h))}u=v}if(h=!1,u!==2)continue}}if(u===1){br(e,0),Ja(e,n,0,!0);break}t:{switch(r=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ja(r,n,ui,!ja);break t;case 2:$n=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-E(),10<u)){if(Ja(r,n,ui,!ja),ht(r,0,!0)!==0)break t;Sa=n,r.timeoutHandle=Og(ag.bind(null,r,a,$n,lc,Qf,n,ui,Os,Mr,ja,h,"Throttled",-0,0),u);break t}ag(r,a,$n,lc,Qf,n,ui,Os,Mr,ja,h,null,-0,0)}}break}while(!0);Xi(e)}function ag(e,n,a,r,u,h,v,C,V,it,pt,xt,ot,ft){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:sa},Q0(n,h,xt);var qt=(h&62914560)===h?rc-E():(h&4194048)===h?tg-E():0;if(qt=dy(xt,qt),qt!==null){Sa=h,e.cancelPendingCommit=qt(hg.bind(null,e,n,h,a,r,u,v,C,V,pt,xt,null,ot,ft)),Ja(e,h,v,!it);return}}hg(e,n,h,a,r,u,v,C,V)}function wS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],h=u.getSnapshot;u=u.value;try{if(!si(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,r){n&=~Zf,n&=~Os,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var h=31-Nt(u),v=1<<h;r[h]=-1,u&=~v}a!==0&&ao(e,a,n)}function cc(){return(Ie&6)===0?(Fo(0),!1):!0}function th(){if(Ee!==null){if(He===0)var e=Ee.return;else e=Ee,ca=Ts=null,gf(e),pr=null,So=0,e=Ee;for(;e!==null;)P0(e.alternate,e),e=e.return;Ee=null}}function br(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,ZS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,th(),je=e,Ee=a=oa(e.current,null),Ae=n,He=0,ci=null,ja=!1,yr=Xt(e,n),jf=!1,Mr=ui=Zf=Os=Za=rn=0,$n=Io=null,Qf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Nt(r),h=1<<u;n|=e[u],r&=~h}return xa=n,Dl(),a}function sg(e,n){pe=null,z.H=Co,n===dr||n===Fl?(n=ym(),He=3):n===af?(n=ym(),He=4):He=n===Lf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,Ee===null&&(rn=1,Jl(e,gi(n,e.current)))}function rg(){var e=oi.current;return e===null?!0:(Ae&4194048)===Ae?Si===null:(Ae&62914560)===Ae||(Ae&536870912)!==0?e===Si:!1}function og(){var e=z.H;return z.H=Co,e===null?Co:e}function lg(){var e=z.A;return z.A=RS,e}function uc(){rn=4,ja||(Ae&4194048)!==Ae&&oi.current!==null||(yr=!0),(Za&134217727)===0&&(Os&134217727)===0||je===null||Ja(je,Ae,ui,!1)}function eh(e,n,a){var r=Ie;Ie|=2;var u=og(),h=lg();(je!==e||Ae!==n)&&(lc=null,br(e,n)),n=!1;var v=rn;t:do try{if(He!==0&&Ee!==null){var C=Ee,V=ci;switch(He){case 8:th(),v=6;break t;case 3:case 2:case 9:case 6:oi.current===null&&(n=!0);var it=He;if(He=0,ci=null,Tr(e,C,V,it),a&&yr){v=0;break t}break;default:it=He,He=0,ci=null,Tr(e,C,V,it)}}DS(),v=rn;break}catch(pt){sg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,ca=Ts=null,Ie=r,z.H=u,z.A=h,Ee===null&&(je=null,Ae=0,Dl()),v}function DS(){for(;Ee!==null;)cg(Ee)}function US(e,n){var a=Ie;Ie|=2;var r=og(),u=lg();je!==e||Ae!==n?(lc=null,oc=E()+500,br(e,n)):yr=Xt(e,n);t:do try{if(He!==0&&Ee!==null){n=Ee;var h=ci;e:switch(He){case 1:He=0,ci=null,Tr(e,n,h,1);break;case 2:case 9:if(xm(h)){He=0,ci=null,ug(n);break}n=function(){He!==2&&He!==9||je!==e||(He=7),Xi(e)},h.then(n,n);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:xm(h)?(He=0,ci=null,ug(n)):(He=0,ci=null,Tr(e,n,h,7));break;case 5:var v=null;switch(Ee.tag){case 26:v=Ee.memoizedState;case 5:case 27:var C=Ee;if(v?Zg(v):C.stateNode.complete){He=0,ci=null;var V=C.sibling;if(V!==null)Ee=V;else{var it=C.return;it!==null?(Ee=it,fc(it)):Ee=null}break e}}He=0,ci=null,Tr(e,n,h,5);break;case 6:He=0,ci=null,Tr(e,n,h,6);break;case 8:th(),rn=6;break t;default:throw Error(s(462))}}LS();break}catch(pt){sg(e,pt)}while(!0);return ca=Ts=null,z.H=r,z.A=u,Ie=a,Ee!==null?0:(je=null,Ae=0,Dl(),rn)}function LS(){for(;Ee!==null&&!Rt();)cg(Ee)}function cg(e){var n=N0(e.alternate,e,xa);e.memoizedProps=e.pendingProps,n===null?fc(e):Ee=n}function ug(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=R0(a,n,n.pendingProps,n.type,void 0,Ae);break;case 11:n=R0(a,n,n.pendingProps,n.type.render,n.ref,Ae);break;case 5:gf(n);default:P0(a,n),n=Ee=lm(n,xa),n=N0(a,n,xa)}e.memoizedProps=e.pendingProps,n===null?fc(e):Ee=n}function Tr(e,n,a,r){ca=Ts=null,gf(n),pr=null,So=0;var u=n.return;try{if(SS(e,u,n,a,Ae)){rn=1,Jl(e,gi(a,e.current)),Ee=null;return}}catch(h){if(u!==null)throw Ee=u,h;rn=1,Jl(e,gi(a,e.current)),Ee=null;return}n.flags&32768?(we||r===1?e=!0:yr||(Ae&536870912)!==0?e=!1:(ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=oi.current,r!==null&&r.tag===13&&(r.flags|=16384))),fg(n,e)):fc(n)}function fc(e){var n=e;do{if((n.flags&32768)!==0){fg(n,ja);return}e=n.return;var a=ES(n.alternate,n,xa);if(a!==null){Ee=a;return}if(n=n.sibling,n!==null){Ee=n;return}Ee=n=e}while(n!==null);rn===0&&(rn=5)}function fg(e,n){do{var a=bS(e.alternate,e);if(a!==null){a.flags&=32767,Ee=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ee=e;return}Ee=e=a}while(e!==null);rn=6,Ee=null}function hg(e,n,a,r,u,h,v,C,V){e.cancelPendingCommit=null;do hc();while(Mn!==0);if((Ie&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=Vu,Ri(e,a,h,v,C,V),e===je&&(Ee=je=null,Ae=0),Er=n,Ka=e,Sa=a,Kf=h,Jf=u,eg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(rt,function(){return _g(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=H.p,H.p=2,v=Ie,Ie|=4;try{TS(e,n,a)}finally{Ie=v,H.p=u,z.T=r}}Mn=1,dg(),pg(),mg()}}function dg(){if(Mn===1){Mn=0;var e=Ka,n=Er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=H.p;H.p=2;var u=Ie;Ie|=4;try{q0(n,e);var h=dh,v=$p(e.containerInfo),C=h.focusedElem,V=h.selectionRange;if(v!==C&&C&&C.ownerDocument&&Jp(C.ownerDocument.documentElement,C)){if(V!==null&&zu(C)){var it=V.start,pt=V.end;if(pt===void 0&&(pt=it),"selectionStart"in C)C.selectionStart=it,C.selectionEnd=Math.min(pt,C.value.length);else{var xt=C.ownerDocument||document,ot=xt&&xt.defaultView||window;if(ot.getSelection){var ft=ot.getSelection(),qt=C.textContent.length,se=Math.min(V.start,qt),We=V.end===void 0?se:Math.min(V.end,qt);!ft.extend&&se>We&&(v=We,We=se,se=v);var K=Kp(C,se),W=Kp(C,We);if(K&&W&&(ft.rangeCount!==1||ft.anchorNode!==K.node||ft.anchorOffset!==K.offset||ft.focusNode!==W.node||ft.focusOffset!==W.offset)){var nt=xt.createRange();nt.setStart(K.node,K.offset),ft.removeAllRanges(),se>We?(ft.addRange(nt),ft.extend(W.node,W.offset)):(nt.setEnd(W.node,W.offset),ft.addRange(nt))}}}}for(xt=[],ft=C;ft=ft.parentNode;)ft.nodeType===1&&xt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<xt.length;C++){var _t=xt[C];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}bc=!!hh,dh=hh=null}finally{Ie=u,H.p=r,z.T=a}}e.current=n,Mn=2}}function pg(){if(Mn===2){Mn=0;var e=Ka,n=Er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=H.p;H.p=2;var u=Ie;Ie|=4;try{V0(e,n.alternate,n)}finally{Ie=u,H.p=r,z.T=a}}Mn=3}}function mg(){if(Mn===4||Mn===3){Mn=0,O();var e=Ka,n=Er,a=Sa,r=eg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Er=Ka=null,gg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Qa=null),Ks(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=H.p,H.p=2,z.T=null;try{for(var h=e.onRecoverableError,v=0;v<r.length;v++){var C=r[v];h(C.value,{componentStack:C.stack})}}finally{z.T=n,H.p=u}}(Sa&3)!==0&&hc(),Xi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===$f?zo++:(zo=0,$f=e):zo=0,Fo(0)}}function gg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,vo(n)))}function hc(){return dg(),pg(),mg(),_g()}function _g(){if(Mn!==5)return!1;var e=Ka,n=Kf;Kf=0;var a=Ks(Sa),r=z.T,u=H.p;try{H.p=32>a?32:a,z.T=null,a=Jf,Jf=null;var h=Ka,v=Sa;if(Mn=0,Er=Ka=null,Sa=0,(Ie&6)!==0)throw Error(s(331));var C=Ie;if(Ie|=4,J0(h.current),Z0(h,h.current,v,a),Ie=C,Fo(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{H.p=u,z.T=r,gg(e,n)}}function vg(e,n,a){n=gi(a,n),n=Uf(e.stateNode,n,2),e=Xa(e,n,2),e!==null&&(Gn(e,2),Xi(e))}function Ge(e,n,a){if(e.tag===3)vg(e,e,a);else for(;n!==null;){if(n.tag===3){vg(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qa===null||!Qa.has(r))){e=gi(a,e),a=x0(2),r=Xa(n,a,2),r!==null&&(S0(a,r,n,e),Gn(r,2),Xi(r));break}}n=n.return}}function nh(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new CS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(jf=!0,u.add(a),e=NS.bind(null,e,n,a),n.then(e,e))}function NS(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ae&a)===a&&(rn===4||rn===3&&(Ae&62914560)===Ae&&300>E()-rc?(Ie&2)===0&&br(e,0):Zf|=a,Mr===Ae&&(Mr=0)),Xi(e)}function xg(e,n){n===0&&(n=Be()),e=Ms(e,n),e!==null&&(Gn(e,n),Xi(e))}function OS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),xg(e,a)}function PS(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),xg(e,a)}function IS(e,n){return Gt(e,n)}var dc=null,Ar=null,ih=!1,pc=!1,ah=!1,$a=0;function Xi(e){e!==Ar&&e.next===null&&(Ar===null?dc=Ar=e:Ar=Ar.next=e),pc=!0,ih||(ih=!0,FS())}function Fo(e,n){if(!ah&&pc){ah=!0;do for(var a=!1,r=dc;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var h=0;else{var v=r.suspendedLanes,C=r.pingedLanes;h=(1<<31-Nt(42|e)+1)-1,h&=u&~(v&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Eg(r,h))}else h=Ae,h=ht(r,r===je?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Xt(r,h)||(a=!0,Eg(r,h));r=r.next}while(a);ah=!1}}function zS(){Sg()}function Sg(){pc=ih=!1;var e=0;$a!==0&&jS()&&(e=$a);for(var n=E(),a=null,r=dc;r!==null;){var u=r.next,h=yg(r,n);h===0?(r.next=null,a===null?dc=u:a.next=u,u===null&&(Ar=a)):(a=r,(e!==0||(h&3)!==0)&&(pc=!0)),r=u}Mn!==0&&Mn!==5||Fo(e),$a!==0&&($a=0)}function yg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-Nt(h),C=1<<v,V=u[v];V===-1?((C&a)===0||(C&r)!==0)&&(u[v]=ue(C,n)):V<=n&&(e.expiredLanes|=C),h&=~C}if(n=je,a=Ae,a=ht(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(He===2||He===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ut(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Xt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ut(r),Ks(a)){case 2:case 8:a=St;break;case 32:a=rt;break;case 268435456:a=Ct;break;default:a=rt}return r=Mg.bind(null,e),a=Gt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ut(r),e.callbackPriority=2,e.callbackNode=null,2}function Mg(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hc()&&e.callbackNode!==a)return null;var r=Ae;return r=ht(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(ig(e,r,n),yg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Mg.bind(null,e):null)}function Eg(e,n){if(hc())return null;ig(e,n,!0)}function FS(){QS(function(){(Ie&6)!==0?Gt(dt,zS):Sg()})}function sh(){if($a===0){var e=fr;e===0&&(e=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),$a=e}return $a}function bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ml(""+e)}function Tg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function BS(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var h=bg((u[Sn]||null).action),v=r.submitter;v&&(n=(n=v[Sn]||null)?bg(n.formAction):v.getAttribute("formAction"),n!==null&&(h=n,v=null));var C=new Al("action","action",null,r,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if($a!==0){var V=v?Tg(u,v):new FormData(u);Tf(a,{pending:!0,data:V,method:u.method,action:h},null,V)}}else typeof h=="function"&&(C.preventDefault(),V=v?Tg(u,v):new FormData(u),Tf(a,{pending:!0,data:V,method:u.method,action:h},h,V))},currentTarget:u}]})}}for(var rh=0;rh<Gu.length;rh++){var oh=Gu[rh],HS=oh.toLowerCase(),GS=oh[0].toUpperCase()+oh.slice(1);Ui(HS,"on"+GS)}Ui(nm,"onAnimationEnd"),Ui(im,"onAnimationIteration"),Ui(am,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(iS,"onTransitionRun"),Ui(aS,"onTransitionStart"),Ui(sS,"onTransitionCancel"),Ui(sm,"onTransitionEnd"),Lt("onMouseEnter",["mouseout","mouseover"]),Lt("onMouseLeave",["mouseout","mouseover"]),Lt("onPointerEnter",["pointerout","pointerover"]),Lt("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bo));function Ag(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var v=r.length-1;0<=v;v--){var C=r[v],V=C.instance,it=C.currentTarget;if(C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=it;try{h(u)}catch(pt){wl(pt)}u.currentTarget=null,h=V}else for(v=0;v<r.length;v++){if(C=r[v],V=C.instance,it=C.currentTarget,C=C.listener,V!==h&&u.isPropagationStopped())break t;h=C,u.currentTarget=it;try{h(u)}catch(pt){wl(pt)}u.currentTarget=null,h=V}}}}function be(e,n){var a=n[Oa];a===void 0&&(a=n[Oa]=new Set);var r=e+"__bubble";a.has(r)||(Rg(n,e,2,!1),a.add(r))}function lh(e,n,a){var r=0;n&&(r|=4),Rg(a,e,r,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function ch(e){if(!e[mc]){e[mc]=!0,ct.forEach(function(a){a!=="selectionchange"&&(VS.has(a)||lh(a,!1,e),lh(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mc]||(n[mc]=!0,lh("selectionchange",!1,n))}}function Rg(e,n,a,r){switch(n_(n)){case 2:var u=gy;break;case 8:u=_y;break;default:u=bh}a=u.bind(null,n,a,e),u=void 0,!Cu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function uh(e,n,a,r,u){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var C=r.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=r.return;v!==null;){var V=v.tag;if((V===3||V===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=Pa(C),v===null)return;if(V=v.tag,V===5||V===6||V===26||V===27){r=h=v;continue t}C=C.parentNode}}r=r.return}Lp(function(){var it=h,pt=Au(a),xt=[];t:{var ot=rm.get(e);if(ot!==void 0){var ft=Al,qt=e;switch(e){case"keypress":if(bl(a)===0)break t;case"keydown":case"keyup":ft=Px;break;case"focusin":qt="focus",ft=Lu;break;case"focusout":qt="blur",ft=Lu;break;case"beforeblur":case"afterblur":ft=Lu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Ex;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=Fx;break;case nm:case im:case am:ft=Ax;break;case sm:ft=Hx;break;case"scroll":case"scrollend":ft=yx;break;case"wheel":ft=Vx;break;case"copy":case"cut":case"paste":ft=Cx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=zp;break;case"toggle":case"beforetoggle":ft=Xx}var se=(n&4)!==0,We=!se&&(e==="scroll"||e==="scrollend"),K=se?ot!==null?ot+"Capture":null:ot;se=[];for(var W=it,nt;W!==null;){var _t=W;if(nt=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||nt===null||K===null||(_t=ro(W,K),_t!=null&&se.push(Ho(W,_t,nt))),We)break;W=W.return}0<se.length&&(ot=new ft(ot,qt,null,a,pt),xt.push({event:ot,listeners:se}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",ot&&a!==Tu&&(qt=a.relatedTarget||a.fromElement)&&(Pa(qt)||qt[ia]))break t;if((ft||ot)&&(ot=pt.window===pt?pt:(ot=pt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ft?(qt=a.relatedTarget||a.toElement,ft=it,qt=qt?Pa(qt):null,qt!==null&&(We=c(qt),se=qt.tag,qt!==We||se!==5&&se!==27&&se!==6)&&(qt=null)):(ft=null,qt=it),ft!==qt)){if(se=Pp,_t="onMouseLeave",K="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(se=zp,_t="onPointerLeave",K="onPointerEnter",W="pointer"),We=ft==null?ot:vs(ft),nt=qt==null?ot:vs(qt),ot=new se(_t,W+"leave",ft,a,pt),ot.target=We,ot.relatedTarget=nt,_t=null,Pa(pt)===it&&(se=new se(K,W+"enter",qt,a,pt),se.target=nt,se.relatedTarget=We,_t=se),We=_t,ft&&qt)e:{for(se=kS,K=ft,W=qt,nt=0,_t=K;_t;_t=se(_t))nt++;_t=0;for(var ne=W;ne;ne=se(ne))_t++;for(;0<nt-_t;)K=se(K),nt--;for(;0<_t-nt;)W=se(W),_t--;for(;nt--;){if(K===W||W!==null&&K===W.alternate){se=K;break e}K=se(K),W=se(W)}se=null}else se=null;ft!==null&&Cg(xt,ot,ft,se,!1),qt!==null&&We!==null&&Cg(xt,We,qt,se,!0)}}t:{if(ot=it?vs(it):window,ft=ot.nodeName&&ot.nodeName.toLowerCase(),ft==="select"||ft==="input"&&ot.type==="file")var Oe=Wp;else if(kp(ot))if(Yp)Oe=tS;else{Oe=Jx;var Kt=Kx}else ft=ot.nodeName,!ft||ft.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&$s(it.elementType)&&(Oe=Wp):Oe=$x;if(Oe&&(Oe=Oe(e,it))){Xp(xt,Oe,a,pt);break t}Kt&&Kt(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&wi(ot,"number",ot.value)}switch(Kt=it?vs(it):window,e){case"focusin":(kp(Kt)||Kt.contentEditable==="true")&&(ir=Kt,Fu=it,mo=null);break;case"focusout":mo=Fu=ir=null;break;case"mousedown":Bu=!0;break;case"contextmenu":case"mouseup":case"dragend":Bu=!1,tm(xt,a,pt);break;case"selectionchange":if(nS)break;case"keydown":case"keyup":tm(xt,a,pt)}var ve;if(Ou)t:{switch(e){case"compositionstart":var Re="onCompositionStart";break t;case"compositionend":Re="onCompositionEnd";break t;case"compositionupdate":Re="onCompositionUpdate";break t}Re=void 0}else nr?Gp(e,a)&&(Re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Re="onCompositionStart");Re&&(Fp&&a.locale!=="ko"&&(nr||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&nr&&(ve=Np()):(za=pt,wu="value"in za?za.value:za.textContent,nr=!0)),Kt=gc(it,Re),0<Kt.length&&(Re=new Ip(Re,e,null,a,pt),xt.push({event:Re,listeners:Kt}),ve?Re.data=ve:(ve=Vp(a),ve!==null&&(Re.data=ve)))),(ve=Yx?qx(e,a):jx(e,a))&&(Re=gc(it,"onBeforeInput"),0<Re.length&&(Kt=new Ip("onBeforeInput","beforeinput",null,a,pt),xt.push({event:Kt,listeners:Re}),Kt.data=ve)),BS(xt,e,it,a,pt)}Ag(xt,n)})}function Ho(e,n,a){return{instance:e,listener:n,currentTarget:a}}function gc(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=ro(e,a),u!=null&&r.unshift(Ho(e,u,h)),u=ro(e,n),u!=null&&r.push(Ho(e,u,h))),e.tag===3)return r;e=e.return}return[]}function kS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Cg(e,n,a,r,u){for(var h=n._reactName,v=[];a!==null&&a!==r;){var C=a,V=C.alternate,it=C.stateNode;if(C=C.tag,V!==null&&V===r)break;C!==5&&C!==26&&C!==27||it===null||(V=it,u?(it=ro(a,h),it!=null&&v.unshift(Ho(a,it,V))):u||(it=ro(a,h),it!=null&&v.push(Ho(a,it,V)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var XS=/\r\n?/g,WS=/\u0000|\uFFFD/g;function wg(e){return(typeof e=="string"?e:""+e).replace(XS,`
`).replace(WS,"")}function Dg(e,n){return n=wg(n),wg(e)===n}function Xe(e,n,a,r,u,h){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Xn(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Xn(e,""+r);break;case"className":he(e,"class",r);break;case"tabIndex":he(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":he(e,a,r);break;case"style":aa(e,r,h);break;case"data":if(n!=="object"){he(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ml(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Xe(e,n,"name",u.name,u,null),Xe(e,n,"formEncType",u.formEncType,u,null),Xe(e,n,"formMethod",u.formMethod,u,null),Xe(e,n,"formTarget",u.formTarget,u,null)):(Xe(e,n,"encType",u.encType,u,null),Xe(e,n,"method",u.method,u,null),Xe(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Ml(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=sa);break;case"onScroll":r!=null&&be("scroll",e);break;case"onScrollEnd":r!=null&&be("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Ml(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":be("beforetoggle",e),be("toggle",e),le(e,"popover",r);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":le(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=xx.get(a)||a,le(e,a,r))}}function fh(e,n,a,r,u,h){switch(a){case"style":aa(e,r,h);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Xn(e,r):(typeof r=="number"||typeof r=="bigint")&&Xn(e,""+r);break;case"onScroll":r!=null&&be("scroll",e);break;case"onScrollEnd":r!=null&&be("scrollend",e);break;case"onClick":r!=null&&(e.onclick=sa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!st.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[Sn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof r=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):le(e,a,r)}}}function On(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",e),be("load",e);var r=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var v=a[h];if(v!=null)switch(h){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,h,v,a,null)}}u&&Xe(e,n,"srcSet",a.srcSet,a,null),r&&Xe(e,n,"src",a.src,a,null);return;case"input":be("invalid",e);var C=h=v=u=null,V=null,it=null;for(r in a)if(a.hasOwnProperty(r)){var pt=a[r];if(pt!=null)switch(r){case"name":u=pt;break;case"type":v=pt;break;case"checked":V=pt;break;case"defaultChecked":it=pt;break;case"value":h=pt;break;case"defaultValue":C=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Xe(e,n,r,pt,a,null)}}ii(e,h,C,V,it,v,u,!1);return;case"select":be("invalid",e),r=v=h=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":v=C;break;case"multiple":r=C;default:Xe(e,n,u,C,a,null)}n=h,a=v,e.multiple=!!r,n!=null?ai(e,!!r,n,!1):a!=null&&ai(e,!!r,a,!0);return;case"textarea":be("invalid",e),h=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":r=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Xe(e,n,v,C,a,null)}hn(e,r,u,h);return;case"option":for(V in a)a.hasOwnProperty(V)&&(r=a[V],r!=null)&&(V==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Xe(e,n,V,r,a,null));return;case"dialog":be("beforetoggle",e),be("toggle",e),be("cancel",e),be("close",e);break;case"iframe":case"object":be("load",e);break;case"video":case"audio":for(r=0;r<Bo.length;r++)be(Bo[r],e);break;case"image":be("error",e),be("load",e);break;case"details":be("toggle",e);break;case"embed":case"source":case"link":be("error",e),be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(r=a[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(e,n,it,r,a,null)}return;default:if($s(n)){for(pt in a)a.hasOwnProperty(pt)&&(r=a[pt],r!==void 0&&fh(e,n,pt,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Xe(e,n,C,r,a,null))}function YS(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,v=null,C=null,V=null,it=null,pt=null;for(ft in a){var xt=a[ft];if(a.hasOwnProperty(ft)&&xt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=xt;default:r.hasOwnProperty(ft)||Xe(e,n,ft,null,r,xt)}}for(var ot in r){var ft=r[ot];if(xt=a[ot],r.hasOwnProperty(ot)&&(ft!=null||xt!=null))switch(ot){case"type":h=ft;break;case"name":u=ft;break;case"checked":it=ft;break;case"defaultChecked":pt=ft;break;case"value":v=ft;break;case"defaultValue":C=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==xt&&Xe(e,n,ot,ft,r,xt)}}kn(e,v,C,V,it,pt,h,u);return;case"select":ft=v=C=ot=null;for(h in a)if(V=a[h],a.hasOwnProperty(h)&&V!=null)switch(h){case"value":break;case"multiple":ft=V;default:r.hasOwnProperty(h)||Xe(e,n,h,null,r,V)}for(u in r)if(h=r[u],V=a[u],r.hasOwnProperty(u)&&(h!=null||V!=null))switch(u){case"value":ot=h;break;case"defaultValue":C=h;break;case"multiple":v=h;default:h!==V&&Xe(e,n,u,h,r,V)}n=C,a=v,r=ft,ot!=null?ai(e,!!a,ot,!1):!!r!=!!a&&(n!=null?ai(e,!!a,n,!0):ai(e,!!a,a?[]:"",!1));return;case"textarea":ft=ot=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xe(e,n,C,null,r,u)}for(v in r)if(u=r[v],h=a[v],r.hasOwnProperty(v)&&(u!=null||h!=null))switch(v){case"value":ot=u;break;case"defaultValue":ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Xe(e,n,v,u,r,h)}ze(e,ot,ft);return;case"option":for(var qt in a)ot=a[qt],a.hasOwnProperty(qt)&&ot!=null&&!r.hasOwnProperty(qt)&&(qt==="selected"?e.selected=!1:Xe(e,n,qt,null,r,ot));for(V in r)ot=r[V],ft=a[V],r.hasOwnProperty(V)&&ot!==ft&&(ot!=null||ft!=null)&&(V==="selected"?e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol":Xe(e,n,V,ot,r,ft));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ot=a[se],a.hasOwnProperty(se)&&ot!=null&&!r.hasOwnProperty(se)&&Xe(e,n,se,null,r,ot);for(it in r)if(ot=r[it],ft=a[it],r.hasOwnProperty(it)&&ot!==ft&&(ot!=null||ft!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Xe(e,n,it,ot,r,ft)}return;default:if($s(n)){for(var We in a)ot=a[We],a.hasOwnProperty(We)&&ot!==void 0&&!r.hasOwnProperty(We)&&fh(e,n,We,void 0,r,ot);for(pt in r)ot=r[pt],ft=a[pt],!r.hasOwnProperty(pt)||ot===ft||ot===void 0&&ft===void 0||fh(e,n,pt,ot,r,ft);return}}for(var K in a)ot=a[K],a.hasOwnProperty(K)&&ot!=null&&!r.hasOwnProperty(K)&&Xe(e,n,K,null,r,ot);for(xt in r)ot=r[xt],ft=a[xt],!r.hasOwnProperty(xt)||ot===ft||ot==null&&ft==null||Xe(e,n,xt,ot,r,ft)}function Ug(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function qS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],h=u.transferSize,v=u.initiatorType,C=u.duration;if(h&&C&&Ug(v)){for(v=0,C=u.responseEnd,r+=1;r<a.length;r++){var V=a[r],it=V.startTime;if(it>C)break;var pt=V.transferSize,xt=V.initiatorType;pt&&Ug(xt)&&(V=V.responseEnd,v+=pt*(V<C?1:(C-it)/(V-it)))}if(--r,n+=8*(h+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hh=null,dh=null;function _c(e){return e.nodeType===9?e:e.ownerDocument}function Lg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ng(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function ph(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var mh=null;function jS(){var e=window.event;return e&&e.type==="popstate"?e===mh?!1:(mh=e,!0):(mh=null,!1)}var Og=typeof setTimeout=="function"?setTimeout:void 0,ZS=typeof clearTimeout=="function"?clearTimeout:void 0,Pg=typeof Promise=="function"?Promise:void 0,QS=typeof queueMicrotask=="function"?queueMicrotask:typeof Pg<"u"?function(e){return Pg.resolve(null).then(e).catch(KS)}:Og;function KS(e){setTimeout(function(){throw e})}function ts(e){return e==="head"}function Ig(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),Dr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Go(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Go(a);for(var h=a.firstChild;h;){var v=h.nextSibling,C=h.nodeName;h[_s]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=v}}else a==="body"&&Go(e.ownerDocument.body);a=u}while(a);Dr(n)}function zg(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function gh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":gh(a),so(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function JS(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[_s])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=yi(e.nextSibling),e===null)break}return null}function $S(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=yi(e.nextSibling),e===null))return null;return e}function Fg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=yi(e.nextSibling),e===null))return null;return e}function _h(e){return e.data==="$?"||e.data==="$~"}function vh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ty(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function yi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var xh=null;function Bg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return yi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Hg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Gg(e,n,a){switch(n=_c(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Go(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);so(e)}var Mi=new Map,Vg=new Set;function vc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ya=H.d;H.d={f:ey,r:ny,D:iy,C:ay,L:sy,m:ry,X:ly,S:oy,M:cy};function ey(){var e=ya.f(),n=cc();return e||n}function ny(e){var n=Ia(e);n!==null&&n.tag===5&&n.type==="form"?s0(n):ya.r(e)}var Rr=typeof document>"u"?null:document;function kg(e,n,a){var r=Rr;if(r&&typeof n=="string"&&n){var u=fe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Vg.has(u)||(Vg.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),On(n,"link",e),q(n),r.head.appendChild(n)))}}function iy(e){ya.D(e),kg("dns-prefetch",e,null)}function ay(e,n){ya.C(e,n),kg("preconnect",e,n)}function sy(e,n,a){ya.L(e,n,a);var r=Rr;if(r&&e&&n){var u='link[rel="preload"][as="'+fe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+fe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+fe(a.imageSizes)+'"]')):u+='[href="'+fe(e)+'"]';var h=u;switch(n){case"style":h=Cr(e);break;case"script":h=wr(e)}Mi.has(h)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Mi.set(h,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(Vo(h))||n==="script"&&r.querySelector(ko(h))||(n=r.createElement("link"),On(n,"link",e),q(n),r.head.appendChild(n)))}}function ry(e,n){ya.m(e,n);var a=Rr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+fe(r)+'"][href="'+fe(e)+'"]',h=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=wr(e)}if(!Mi.has(h)&&(e=S({rel:"modulepreload",href:e},n),Mi.set(h,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ko(h)))return}r=a.createElement("link"),On(r,"link",e),q(r),a.head.appendChild(r)}}}function oy(e,n,a){ya.S(e,n,a);var r=Rr;if(r&&e){var u=D(r).hoistableStyles,h=Cr(e);n=n||"default";var v=u.get(h);if(!v){var C={loading:0,preload:null};if(v=r.querySelector(Vo(h)))C.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Mi.get(h))&&Sh(e,a);var V=v=r.createElement("link");q(V),On(V,"link",e),V._p=new Promise(function(it,pt){V.onload=it,V.onerror=pt}),V.addEventListener("load",function(){C.loading|=1}),V.addEventListener("error",function(){C.loading|=2}),C.loading|=4,xc(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(h,v)}}}function ly(e,n){ya.X(e,n);var a=Rr;if(a&&e){var r=D(a).hoistableScripts,u=wr(e),h=r.get(u);h||(h=a.querySelector(ko(u)),h||(e=S({src:e,async:!0},n),(n=Mi.get(u))&&yh(e,n),h=a.createElement("script"),q(h),On(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function cy(e,n){ya.M(e,n);var a=Rr;if(a&&e){var r=D(a).hoistableScripts,u=wr(e),h=r.get(u);h||(h=a.querySelector(ko(u)),h||(e=S({src:e,async:!0,type:"module"},n),(n=Mi.get(u))&&yh(e,n),h=a.createElement("script"),q(h),On(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(u,h))}}function Xg(e,n,a,r){var u=(u=at.current)?vc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Cr(a.href),a=D(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Cr(a.href);var h=D(u).hoistableStyles,v=h.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=u.querySelector(Vo(e)))&&!h._p&&(v.instance=h,v.state.loading=5),Mi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(e,a),h||uy(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=wr(a),a=D(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Cr(e){return'href="'+fe(e)+'"'}function Vo(e){return'link[rel="stylesheet"]['+e+"]"}function Wg(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function uy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),On(n,"link",a),q(n),e.head.appendChild(n))}function wr(e){return'[src="'+fe(e)+'"]'}function ko(e){return"script[async]"+e}function Yg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+fe(a.href)+'"]');if(r)return n.instance=r,q(r),r;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),q(r),On(r,"style",u),xc(r,a.precedence,e),n.instance=r;case"stylesheet":u=Cr(a.href);var h=e.querySelector(Vo(u));if(h)return n.state.loading|=4,n.instance=h,q(h),h;r=Wg(a),(u=Mi.get(u))&&Sh(r,u),h=(e.ownerDocument||e).createElement("link"),q(h);var v=h;return v._p=new Promise(function(C,V){v.onload=C,v.onerror=V}),On(h,"link",r),n.state.loading|=4,xc(h,a.precedence,e),n.instance=h;case"script":return h=wr(a.src),(u=e.querySelector(ko(h)))?(n.instance=u,q(u),u):(r=a,(u=Mi.get(h))&&(r=S({},a),yh(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),q(u),On(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,xc(r,a.precedence,e));return n.instance}function xc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,h=u,v=0;v<r.length;v++){var C=r[v];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Sh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function yh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Sc=null;function qg(e,n,a){if(Sc===null){var r=new Map,u=Sc=new Map;u.set(a,r)}else u=Sc,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[_s]||h[fn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(n)||"";v=e+v;var C=r.get(v);C?C.push(h):r.set(v,[h])}}return r}function jg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Zg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Cr(r.href),h=n.querySelector(Vo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=yc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,q(h);return}h=n.ownerDocument||n,r=Wg(r),(u=Mi.get(u))&&Sh(r,u),h=h.createElement("link"),q(h);var v=h;v._p=new Promise(function(C,V){v.onload=C,v.onerror=V}),On(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Mh=0;function dy(e,n){return e.stylesheets&&e.count===0&&Ec(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Mh===0&&(Mh=62500*qS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ec(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Mh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function yc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function Ec(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,n.forEach(py,e),Mc=null,yc.call(e))}function py(e,n){if(!(n.state.loading&4)){var a=Mc.get(e);if(a)var r=a.get(null);else{a=new Map,Mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var v=u[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),h=a.get(v)||r,h===r&&a.set(null,u),a.set(v,u),this.count++,r=yc.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Xo={$$typeof:N,Provider:null,Consumer:null,_currentValue:lt,_currentValue2:lt,_threadCount:0};function my(e,n,a,r,u,h,v,C,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=De(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=De(0),this.hiddenUpdates=De(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Qg(e,n,a,r,u,h,v,C,V,it,pt,xt){return e=new my(e,n,a,v,V,it,pt,xt,C),n=1,h===!0&&(n|=24),h=ri(3,null,null,n),e.current=h,h.stateNode=e,n=tf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},sf(h),e}function Kg(e){return e?(e=rr,e):rr}function Jg(e,n,a,r,u,h){u=Kg(u),r.context===null?r.context=u:r.pendingContext=u,r=ka(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=Xa(e,r,n),a!==null&&(ti(a,e,n),Mo(a,e,n))}function $g(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Eh(e,n){$g(e,n),(e=e.alternate)&&$g(e,n)}function t_(e){if(e.tag===13||e.tag===31){var n=Ms(e,67108864);n!==null&&ti(n,e,67108864),Eh(e,67108864)}}function e_(e){if(e.tag===13||e.tag===31){var n=fi();n=Qs(n);var a=Ms(e,n);a!==null&&ti(a,e,n),Eh(e,n)}}var bc=!0;function gy(e,n,a,r){var u=z.T;z.T=null;var h=H.p;try{H.p=2,bh(e,n,a,r)}finally{H.p=h,z.T=u}}function _y(e,n,a,r){var u=z.T;z.T=null;var h=H.p;try{H.p=8,bh(e,n,a,r)}finally{H.p=h,z.T=u}}function bh(e,n,a,r){if(bc){var u=Th(r);if(u===null)uh(e,n,r,Tc,a),i_(e,r);else if(xy(u,e,n,a,r))r.stopPropagation();else if(i_(e,r),n&4&&-1<vy.indexOf(e)){for(;u!==null;){var h=Ia(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=bt(h.pendingLanes);if(v!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var V=1<<31-Nt(v);C.entanglements[1]|=V,v&=~V}Xi(h),(Ie&6)===0&&(oc=E()+500,Fo(0))}}break;case 31:case 13:C=Ms(h,2),C!==null&&ti(C,h,2),cc(),Eh(h,2)}if(h=Th(r),h===null&&uh(e,n,r,Tc,a),h===u)break;u=h}u!==null&&r.stopPropagation()}else uh(e,n,r,null,a)}}function Th(e){return e=Au(e),Ah(e)}var Tc=null;function Ah(e){if(Tc=null,e=Pa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Tc=e,null}function n_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case St:return 8;case rt:case kt:return 32;case Ct:return 268435456;default:return 32}default:return 32}}var Rh=!1,es=null,ns=null,is=null,Wo=new Map,Yo=new Map,as=[],vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function i_(e,n){switch(e){case"focusin":case"focusout":es=null;break;case"dragenter":case"dragleave":ns=null;break;case"mouseover":case"mouseout":is=null;break;case"pointerover":case"pointerout":Wo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(n.pointerId)}}function qo(e,n,a,r,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ia(n),n!==null&&t_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function xy(e,n,a,r,u){switch(n){case"focusin":return es=qo(es,e,n,a,r,u),!0;case"dragenter":return ns=qo(ns,e,n,a,r,u),!0;case"mouseover":return is=qo(is,e,n,a,r,u),!0;case"pointerover":var h=u.pointerId;return Wo.set(h,qo(Wo.get(h)||null,e,n,a,r,u)),!0;case"gotpointercapture":return h=u.pointerId,Yo.set(h,qo(Yo.get(h)||null,e,n,a,r,u)),!0}return!1}function a_(e){var n=Pa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Js(e.priority,function(){e_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,Js(e.priority,function(){e_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ac(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Th(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Tu=r,a.target.dispatchEvent(r),Tu=null}else return n=Ia(a),n!==null&&t_(n),e.blockedOn=a,!1;n.shift()}return!0}function s_(e,n,a){Ac(e)&&a.delete(n)}function Sy(){Rh=!1,es!==null&&Ac(es)&&(es=null),ns!==null&&Ac(ns)&&(ns=null),is!==null&&Ac(is)&&(is=null),Wo.forEach(s_),Yo.forEach(s_)}function Rc(e,n){e.blockedOn===n&&(e.blockedOn=null,Rh||(Rh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Sy)))}var Cc=null;function r_(e){Cc!==e&&(Cc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Cc===e&&(Cc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Ah(r||a)===null)continue;break}var h=Ia(a);h!==null&&(e.splice(n,3),n-=3,Tf(h,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Dr(e){function n(V){return Rc(V,e)}es!==null&&Rc(es,e),ns!==null&&Rc(ns,e),is!==null&&Rc(is,e),Wo.forEach(n),Yo.forEach(n);for(var a=0;a<as.length;a++){var r=as[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<as.length&&(a=as[0],a.blockedOn===null);)a_(a),a.blockedOn===null&&as.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],h=a[r+1],v=u[Sn]||null;if(typeof h=="function")v||r_(a);else if(v){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,v=h[Sn]||null)C=v.formAction;else if(Ah(u)!==null)continue}else C=v.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),r_(a)}}}function o_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ch(e){this._internalRoot=e}wc.prototype.render=Ch.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=fi();Jg(a,r,e,n,null,null)},wc.prototype.unmount=Ch.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Jg(e.current,2,null,e,null,null),cc(),n[ia]=null}};function wc(e){this._internalRoot=e}wc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Hi();e={blockedOn:null,target:e,priority:n};for(var a=0;a<as.length&&n!==0&&n<as[a].priority;a++);as.splice(a,0,e),a===0&&a_(e)}};var l_=t.version;if(l_!=="19.2.4")throw Error(s(527,l_,"19.2.4"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=d(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var yy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dc.isDisabled&&Dc.supportsFiber)try{Et=Dc.inject(yy),Mt=Dc}catch{}}return Zo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=m0,h=g0,v=_0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=Qg(e,1,!1,null,null,a,r,null,u,h,v,o_),e[ia]=n.current,ch(e),new Ch(n)},Zo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",h=m0,v=g0,C=_0,V=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=Qg(e,1,!0,n,a??null,r,u,V,h,v,C,o_),n.context=Kg(null),a=n.current,r=fi(),r=Qs(r),u=ka(r),u.callback=null,Xa(a,u,r),a=r,n.current.lanes=a,Gn(n,a),Xi(n),e[ia]=n.current,ch(e),new wc(n)},Zo.version="19.2.4",Zo}var v_;function Ly(){if(v_)return Uh.exports;v_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Uh.exports=Uy(),Uh.exports}var Ny=Ly();const Oy=Lv(Ny);const hp="183",qr={ROTATE:0,DOLLY:1,PAN:2},Wr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Py=0,x_=1,Iy=2,ru=1,Nv=2,ol=3,gs=0,qn=1,Zi=2,Da=0,jr=1,S_=2,y_=3,M_=4,zy=5,ks=100,Fy=101,By=102,Hy=103,Gy=104,Vy=200,ky=201,Xy=202,Wy=203,vd=204,xd=205,Yy=206,qy=207,jy=208,Zy=209,Qy=210,Ky=211,Jy=212,$y=213,tM=214,Sd=0,yd=1,Md=2,Qr=3,Ed=4,bd=5,Td=6,Ad=7,Ov=0,eM=1,nM=2,Ji=0,Pv=1,Iv=2,zv=3,Fv=4,Bv=5,Hv=6,Gv=7,Vv=300,qs=301,Kr=302,Ph=303,Ih=304,xu=306,Rd=1e3,wa=1001,Cd=1002,Pn=1003,iM=1004,Uc=1005,Hn=1006,zh=1007,Ws=1008,pi=1009,kv=1010,Xv=1011,fl=1012,dp=1013,ea=1014,Qi=1015,La=1016,pp=1017,mp=1018,hl=1020,Wv=35902,Yv=35899,qv=1021,jv=1022,Fi=1023,Na=1026,Ys=1027,Zv=1028,gp=1029,Jr=1030,_p=1031,vp=1033,ou=33776,lu=33777,cu=33778,uu=33779,wd=35840,Dd=35841,Ud=35842,Ld=35843,Nd=36196,Od=37492,Pd=37496,Id=37488,zd=37489,Fd=37490,Bd=37491,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,Yd=37814,qd=37815,jd=37816,Zd=37817,Qd=37818,Kd=37819,Jd=37820,$d=37821,tp=36492,ep=36494,np=36495,ip=36283,ap=36284,sp=36285,rp=36286,aM=3200,Qv=0,sM=1,ds="",Ti="srgb",$r="srgb-linear",pu="linear",Ve="srgb",Ur=7680,E_=519,rM=512,oM=513,lM=514,xp=515,cM=516,uM=517,Sp=518,fM=519,b_=35044,T_="300 es",Ki=2e3,dl=2001;function hM(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function dM(){const o=mu("canvas");return o.style.display="block",o}const A_={};function R_(...o){const t="THREE."+o.shift();console.log(t,...o)}function Kv(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ce(...o){o=Kv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function Ue(...o){o=Kv(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function gu(...o){const t=o.join(" ");t in A_||(A_[t]=!0,ce(...o))}function pM(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const mM={[Sd]:yd,[Md]:Td,[Ed]:Ad,[Qr]:bd,[yd]:Sd,[Td]:Md,[Ad]:Ed,[bd]:Qr};class js{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fu=Math.PI/180,op=180/Math.PI;function ml(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[o&255]+zn[o>>8&255]+zn[o>>16&255]+zn[o>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[i&63|128]+zn[i>>8&255]+"-"+zn[i>>16&255]+zn[i>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function Me(o,t,i){return Math.max(t,Math.min(i,o))}function gM(o,t){return(o%t+t)%t}function Fh(o,t,i){return(1-i)*o+i*t}function Qo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ei(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const _M={DEG2RAD:fu};class re{constructor(t=0,i=0){re.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,p){let m=s[l+0],d=s[l+1],x=s[l+2],S=s[l+3],_=c[f+0],M=c[f+1],b=c[f+2],R=c[f+3];if(S!==R||m!==_||d!==M||x!==b){let y=m*_+d*M+x*b+S*R;y<0&&(_=-_,M=-M,b=-b,R=-R,y=-y);let g=1-p;if(y<.9995){const A=Math.acos(y),N=Math.sin(A);g=Math.sin(g*A)/N,p=Math.sin(p*A)/N,m=m*g+_*p,d=d*g+M*p,x=x*g+b*p,S=S*g+R*p}else{m=m*g+_*p,d=d*g+M*p,x=x*g+b*p,S=S*g+R*p;const A=1/Math.sqrt(m*m+d*d+x*x+S*S);m*=A,d*=A,x*=A,S*=A}}t[i]=m,t[i+1]=d,t[i+2]=x,t[i+3]=S}static multiplyQuaternionsFlat(t,i,s,l,c,f){const p=s[l],m=s[l+1],d=s[l+2],x=s[l+3],S=c[f],_=c[f+1],M=c[f+2],b=c[f+3];return t[i]=p*b+x*S+m*M-d*_,t[i+1]=m*b+x*_+d*S-p*M,t[i+2]=d*b+x*M+p*_-m*S,t[i+3]=x*b-p*S-m*_-d*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,p=Math.cos,m=Math.sin,d=p(s/2),x=p(l/2),S=p(c/2),_=m(s/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=_*x*S+d*M*b,this._y=d*M*S-_*x*b,this._z=d*x*b+_*M*S,this._w=d*x*S-_*M*b;break;case"YXZ":this._x=_*x*S+d*M*b,this._y=d*M*S-_*x*b,this._z=d*x*b-_*M*S,this._w=d*x*S+_*M*b;break;case"ZXY":this._x=_*x*S-d*M*b,this._y=d*M*S+_*x*b,this._z=d*x*b+_*M*S,this._w=d*x*S-_*M*b;break;case"ZYX":this._x=_*x*S-d*M*b,this._y=d*M*S+_*x*b,this._z=d*x*b-_*M*S,this._w=d*x*S+_*M*b;break;case"YZX":this._x=_*x*S+d*M*b,this._y=d*M*S+_*x*b,this._z=d*x*b-_*M*S,this._w=d*x*S-_*M*b;break;case"XZY":this._x=_*x*S-d*M*b,this._y=d*M*S-_*x*b,this._z=d*x*b+_*M*S,this._w=d*x*S+_*M*b;break;default:ce("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],m=i[9],d=i[2],x=i[6],S=i[10],_=s+p+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(x-m)*M,this._y=(c-d)*M,this._z=(f-l)*M}else if(s>p&&s>S){const M=2*Math.sqrt(1+s-p-S);this._w=(x-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+d)/M}else if(p>S){const M=2*Math.sqrt(1+p-s-S);this._w=(c-d)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+x)/M}else{const M=2*Math.sqrt(1+S-s-p);this._w=(f-l)/M,this._x=(c+d)/M,this._y=(m+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,p=i._x,m=i._y,d=i._z,x=i._w;return this._x=s*x+f*p+l*d-c*m,this._y=l*x+f*m+c*p-s*d,this._z=c*x+f*d+s*m-l*p,this._w=f*x-s*p-l*m-c*d,this._onChangeCallback(),this}slerp(t,i){let s=t._x,l=t._y,c=t._z,f=t._w,p=this.dot(t);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let m=1-i;if(p<.9995){const d=Math.acos(p),x=Math.sin(d);m=Math.sin(m*d)/x,i=Math.sin(i*d)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,i=0,s=0){k.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(C_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(C_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,p=t.z,m=t.w,d=2*(f*l-p*s),x=2*(p*i-c*l),S=2*(c*s-f*i);return this.x=i+m*d+f*S-p*x,this.y=s+m*x+p*d-c*S,this.z=l+m*S+c*x-f*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,p=i.y,m=i.z;return this.x=l*m-c*p,this.y=c*f-s*m,this.z=s*p-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Bh.copy(this).projectOnVector(t),this.sub(Bh)}reflect(t){return this.sub(Bh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Me(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bh=new k,C_=new wn;class xe{constructor(t,i,s,l,c,f,p,m,d){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d)}set(t,i,s,l,c,f,p,m,d){const x=this.elements;return x[0]=t,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=f,x[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],m=s[6],d=s[1],x=s[4],S=s[7],_=s[2],M=s[5],b=s[8],R=l[0],y=l[3],g=l[6],A=l[1],N=l[4],U=l[7],F=l[2],P=l[5],I=l[8];return c[0]=f*R+p*A+m*F,c[3]=f*y+p*N+m*P,c[6]=f*g+p*U+m*I,c[1]=d*R+x*A+S*F,c[4]=d*y+x*N+S*P,c[7]=d*g+x*U+S*I,c[2]=_*R+M*A+b*F,c[5]=_*y+M*N+b*P,c[8]=_*g+M*U+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],x=t[8];return i*f*x-i*p*d-s*c*x+s*p*m+l*c*d-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],x=t[8],S=x*f-p*d,_=p*m-x*c,M=d*c-f*m,b=i*S+s*_+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return t[0]=S*R,t[1]=(l*d-x*s)*R,t[2]=(p*s-l*f)*R,t[3]=_*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-p*i)*R,t[6]=M*R,t[7]=(s*m-d*i)*R,t[8]=(f*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,p){const m=Math.cos(c),d=Math.sin(c);return this.set(s*m,s*d,-s*(m*f+d*p)+f+t,-l*d,l*m,-l*(-d*f+m*p)+p+i,0,0,1),this}scale(t,i){return this.premultiply(Hh.makeScale(t,i)),this}rotate(t){return this.premultiply(Hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(Hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Hh=new xe,w_=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),D_=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const o={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=Ua(l.r),l.g=Ua(l.g),l.b=Ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Zr(l.r),l.g=Zr(l.g),l.b=Zr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?pu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return gu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return gu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[$r]:{primaries:t,whitePoint:s,transfer:pu,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ti},outputColorSpaceConfig:{drawingBufferColorSpace:Ti}},[Ti]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:w_,fromXYZ:D_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ti}}}),o}const Le=vM();function Ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Zr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Lr;class xM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Lr===void 0&&(Lr=mu("canvas")),Lr.width=t.width,Lr.height=t.height;const l=Lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=mu("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ua(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ua(i[s]/255)*255):i[s]=Ua(i[s]);return{data:i,width:t.width,height:t.height}}else return ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let SM=0;class yp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SM++}),this.uuid=ml(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Gh(l[f].image)):c.push(Gh(l[f]))}else c=Gh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function Gh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?xM.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ce("Texture: Unable to serialize Texture."),{})}let yM=0;const Vh=new k;class jn extends js{constructor(t=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=wa,l=wa,c=Hn,f=Ws,p=Fi,m=pi,d=jn.DEFAULT_ANISOTROPY,x=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=ml(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=d,this.format=p,this.internalFormat=null,this.type=m,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vh).x}get height(){return this.source.getSize(Vh).y}get depth(){return this.source.getSize(Vh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ce(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rd:t.x=t.x-Math.floor(t.x);break;case wa:t.x=t.x<0?0:1;break;case Cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rd:t.y=t.y-Math.floor(t.y);break;case wa:t.y=t.y<0?0:1;break;case Cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Vv;jn.DEFAULT_ANISOTROPY=1;class ln{constructor(t=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,d=m[0],x=m[4],S=m[8],_=m[1],M=m[5],b=m[9],R=m[2],y=m[6],g=m[10];if(Math.abs(x-_)<.01&&Math.abs(S-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(x+_)<.1&&Math.abs(S+R)<.1&&Math.abs(b+y)<.1&&Math.abs(d+M+g-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(d+1)/2,U=(M+1)/2,F=(g+1)/2,P=(x+_)/4,I=(S+R)/4,T=(b+y)/4;return N>U&&N>F?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=P/s,c=I/s):U>F?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=P/l,c=T/l):F<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(F),s=I/c,l=T/c),this.set(s,l,c,i),this}let A=Math.sqrt((y-b)*(y-b)+(S-R)*(S-R)+(_-x)*(_-x));return Math.abs(A)<.001&&(A=1),this.x=(y-b)/A,this.y=(S-R)/A,this.z=(_-x)/A,this.w=Math.acos((d+M+g-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Me(this.x,t.x,i.x),this.y=Me(this.y,t.y,i.y),this.z=Me(this.z,t.z,i.z),this.w=Me(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Me(this.x,t,i),this.y=Me(this.y,t,i),this.z=Me(this.z,t,i),this.w=Me(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Me(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MM extends js{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l={width:t,height:i,depth:s.depth},c=new jn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Hn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new yp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends MM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jv extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class EM extends jn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=wa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qe{constructor(t,i,s,l,c,f,p,m,d,x,S,_,M,b,R,y){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,p,m,d,x,S,_,M,b,R,y)}set(t,i,s,l,c,f,p,m,d,x,S,_,M,b,R,y){const g=this.elements;return g[0]=t,g[4]=i,g[8]=s,g[12]=l,g[1]=c,g[5]=f,g[9]=p,g[13]=m,g[2]=d,g[6]=x,g[10]=S,g[14]=_,g[3]=M,g[7]=b,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Nr.setFromMatrixColumn(t,0).length(),c=1/Nr.setFromMatrixColumn(t,1).length(),f=1/Nr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),p=Math.sin(s),m=Math.cos(l),d=Math.sin(l),x=Math.cos(c),S=Math.sin(c);if(t.order==="XYZ"){const _=f*x,M=f*S,b=p*x,R=p*S;i[0]=m*x,i[4]=-m*S,i[8]=d,i[1]=M+b*d,i[5]=_-R*d,i[9]=-p*m,i[2]=R-_*d,i[6]=b+M*d,i[10]=f*m}else if(t.order==="YXZ"){const _=m*x,M=m*S,b=d*x,R=d*S;i[0]=_+R*p,i[4]=b*p-M,i[8]=f*d,i[1]=f*S,i[5]=f*x,i[9]=-p,i[2]=M*p-b,i[6]=R+_*p,i[10]=f*m}else if(t.order==="ZXY"){const _=m*x,M=m*S,b=d*x,R=d*S;i[0]=_-R*p,i[4]=-f*S,i[8]=b+M*p,i[1]=M+b*p,i[5]=f*x,i[9]=R-_*p,i[2]=-f*d,i[6]=p,i[10]=f*m}else if(t.order==="ZYX"){const _=f*x,M=f*S,b=p*x,R=p*S;i[0]=m*x,i[4]=b*d-M,i[8]=_*d+R,i[1]=m*S,i[5]=R*d+_,i[9]=M*d-b,i[2]=-d,i[6]=p*m,i[10]=f*m}else if(t.order==="YZX"){const _=f*m,M=f*d,b=p*m,R=p*d;i[0]=m*x,i[4]=R-_*S,i[8]=b*S+M,i[1]=S,i[5]=f*x,i[9]=-p*x,i[2]=-d*x,i[6]=M*S+b,i[10]=_-R*S}else if(t.order==="XZY"){const _=f*m,M=f*d,b=p*m,R=p*d;i[0]=m*x,i[4]=-S,i[8]=d*x,i[1]=_*S+R,i[5]=f*x,i[9]=M*S-b,i[2]=b*S-M,i[6]=p*x,i[10]=R*S+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bM,t,TM)}lookAt(t,i,s){const l=this.elements;return hi.subVectors(t,i),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),rs.crossVectors(s,hi),rs.lengthSq()===0&&(Math.abs(s.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),rs.crossVectors(s,hi)),rs.normalize(),Lc.crossVectors(hi,rs),l[0]=rs.x,l[4]=Lc.x,l[8]=hi.x,l[1]=rs.y,l[5]=Lc.y,l[9]=hi.y,l[2]=rs.z,l[6]=Lc.z,l[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],m=s[8],d=s[12],x=s[1],S=s[5],_=s[9],M=s[13],b=s[2],R=s[6],y=s[10],g=s[14],A=s[3],N=s[7],U=s[11],F=s[15],P=l[0],I=l[4],T=l[8],L=l[12],J=l[1],G=l[5],X=l[9],$=l[13],tt=l[2],Q=l[6],z=l[10],H=l[14],lt=l[3],ut=l[7],gt=l[11],B=l[15];return c[0]=f*P+p*J+m*tt+d*lt,c[4]=f*I+p*G+m*Q+d*ut,c[8]=f*T+p*X+m*z+d*gt,c[12]=f*L+p*$+m*H+d*B,c[1]=x*P+S*J+_*tt+M*lt,c[5]=x*I+S*G+_*Q+M*ut,c[9]=x*T+S*X+_*z+M*gt,c[13]=x*L+S*$+_*H+M*B,c[2]=b*P+R*J+y*tt+g*lt,c[6]=b*I+R*G+y*Q+g*ut,c[10]=b*T+R*X+y*z+g*gt,c[14]=b*L+R*$+y*H+g*B,c[3]=A*P+N*J+U*tt+F*lt,c[7]=A*I+N*G+U*Q+F*ut,c[11]=A*T+N*X+U*z+F*gt,c[15]=A*L+N*$+U*H+F*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],p=t[5],m=t[9],d=t[13],x=t[2],S=t[6],_=t[10],M=t[14],b=t[3],R=t[7],y=t[11],g=t[15],A=m*M-d*_,N=p*M-d*S,U=p*_-m*S,F=f*M-d*x,P=f*_-m*x,I=f*S-p*x;return i*(R*A-y*N+g*U)-s*(b*A-y*F+g*P)+l*(b*N-R*F+g*I)-c*(b*U-R*P+y*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],p=t[5],m=t[6],d=t[7],x=t[8],S=t[9],_=t[10],M=t[11],b=t[12],R=t[13],y=t[14],g=t[15],A=i*p-s*f,N=i*m-l*f,U=i*d-c*f,F=s*m-l*p,P=s*d-c*p,I=l*d-c*m,T=x*R-S*b,L=x*y-_*b,J=x*g-M*b,G=S*y-_*R,X=S*g-M*R,$=_*g-M*y,tt=A*$-N*X+U*G+F*J-P*L+I*T;if(tt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/tt;return t[0]=(p*$-m*X+d*G)*Q,t[1]=(l*X-s*$-c*G)*Q,t[2]=(R*I-y*P+g*F)*Q,t[3]=(_*P-S*I-M*F)*Q,t[4]=(m*J-f*$-d*L)*Q,t[5]=(i*$-l*J+c*L)*Q,t[6]=(y*U-b*I-g*N)*Q,t[7]=(x*I-_*U+M*N)*Q,t[8]=(f*X-p*J+d*T)*Q,t[9]=(s*J-i*X-c*T)*Q,t[10]=(b*P-R*U+g*A)*Q,t[11]=(S*U-x*P-M*A)*Q,t[12]=(p*L-f*G-m*T)*Q,t[13]=(i*G-s*L+l*T)*Q,t[14]=(R*N-b*F-y*A)*Q,t[15]=(x*F-S*N+_*A)*Q,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,p=t.y,m=t.z,d=c*f,x=c*p;return this.set(d*f+s,d*p-l*m,d*m+l*p,0,d*p+l*m,x*p+s,x*m-l*f,0,d*m-l*p,x*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,m=i._w,d=c+c,x=f+f,S=p+p,_=c*d,M=c*x,b=c*S,R=f*x,y=f*S,g=p*S,A=m*d,N=m*x,U=m*S,F=s.x,P=s.y,I=s.z;return l[0]=(1-(R+g))*F,l[1]=(M+U)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(M-U)*P,l[5]=(1-(_+g))*P,l[6]=(y+A)*P,l[7]=0,l[8]=(b+N)*I,l[9]=(y-A)*I,l[10]=(1-(_+R))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Nr.set(l[0],l[1],l[2]).length();const p=Nr.set(l[4],l[5],l[6]).length(),m=Nr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Oi.copy(this);const d=1/f,x=1/p,S=1/m;return Oi.elements[0]*=d,Oi.elements[1]*=d,Oi.elements[2]*=d,Oi.elements[4]*=x,Oi.elements[5]*=x,Oi.elements[6]*=x,Oi.elements[8]*=S,Oi.elements[9]*=S,Oi.elements[10]*=S,i.setFromRotationMatrix(Oi),s.x=f,s.y=p,s.z=m,this}makePerspective(t,i,s,l,c,f,p=Ki,m=!1){const d=this.elements,x=2*c/(i-t),S=2*c/(s-l),_=(i+t)/(i-t),M=(s+l)/(s-l);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(p===Ki)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(p===dl)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=S,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,i,s,l,c,f,p=Ki,m=!1){const d=this.elements,x=2/(i-t),S=2/(s-l),_=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(p===Ki)b=-2/(f-c),R=-(f+c)/(f-c);else if(p===dl)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return d[0]=x,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=S,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=b,d[14]=R,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Nr=new k,Oi=new Qe,bM=new k(0,0,0),TM=new k(1,1,1),rs=new k,Lc=new k,hi=new k,U_=new Qe,L_=new wn;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],p=l[8],m=l[1],d=l[5],x=l[9],S=l[2],_=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,M),this._z=Math.atan2(m,d)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-f,d)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Me(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,d));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,d),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(p,M));break;case"XZY":this._z=Math.asin(-Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return U_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(U_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return L_.setFromEuler(this),this.setFromQuaternion(L_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class Mp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const N_=new k,Or=new wn,Ma=new Qe,Nc=new k,Ko=new k,RM=new k,CM=new wn,O_=new k(1,0,0),P_=new k(0,1,0),I_=new k(0,0,1),z_={type:"added"},wM={type:"removed"},Pr={type:"childadded",child:null},kh={type:"childremoved",child:null};class xn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new k,i=new Bi,s=new wn,l=new k(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new xe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.multiply(Or),this}rotateOnWorldAxis(t,i){return Or.setFromAxisAngle(t,i),this.quaternion.premultiply(Or),this}rotateX(t){return this.rotateOnAxis(O_,t)}rotateY(t){return this.rotateOnAxis(P_,t)}rotateZ(t){return this.rotateOnAxis(I_,t)}translateOnAxis(t,i){return N_.copy(t).applyQuaternion(this.quaternion),this.position.add(N_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(O_,t)}translateY(t){return this.translateOnAxis(P_,t)}translateZ(t){return this.translateOnAxis(I_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ma.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Nc.copy(t):Nc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ma.lookAt(Ko,Nc,this.up):Ma.lookAt(Nc,Ko,this.up),this.quaternion.setFromRotationMatrix(Ma),l&&(Ma.extractRotation(l.matrixWorld),Or.setFromRotationMatrix(Ma),this.quaternion.premultiply(Or.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(z_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(wM),kh.child=t,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ma.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ma.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ma),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(z_),Pr.child=t,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,s=t.y,l=t.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,m){return p[m.uuid]===void 0&&(p[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const m=p.shapes;if(Array.isArray(m))for(let d=0,x=m.length;d<x;d++){const S=m[d];c(t.shapes,S)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let m=0,d=this.material.length;m<d;m++)p.push(c(t.materials,this.material[m]));l.material=p}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const m=this.animations[p];l.animations.push(c(t.animations,m))}}if(i){const p=f(t.geometries),m=f(t.materials),d=f(t.textures),x=f(t.images),S=f(t.shapes),_=f(t.skeletons),M=f(t.animations),b=f(t.nodes);p.length>0&&(s.geometries=p),m.length>0&&(s.materials=m),d.length>0&&(s.textures=d),x.length>0&&(s.images=x),S.length>0&&(s.shapes=S),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(p){const m=[];for(const d in p){const x=p[d];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new k(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Oc extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const p=this._targetRay,m=this._grip,d=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(d&&t.hand){f=!0;for(const R of t.hand.values()){const y=i.getJointPose(R,s),g=this._getHandJoint(d,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const x=d.joints["index-finger-tip"],S=d.joints["thumb-tip"],_=x.position.distanceTo(S.position),M=.02,b=.005;d.inputState.pinching&&_>M+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&_<=M-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));p!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return p!==null&&(p.visible=l!==null),m!==null&&(m.visible=c!==null),d!==null&&(d.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const $v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},os={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function Wh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Te{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=gM(t,1),i=Me(i,0,1),s=Me(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Wh(f,c,t+1/3),this.g=Wh(f,c,t),this.b=Wh(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&ce("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ce("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=$v[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ua(t.r),this.g=Ua(t.g),this.b=Ua(t.b),this}copyLinearToSRGB(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Le.workingToColorSpace(Fn.copy(this),t),Math.round(Me(Fn.r*255,0,255))*65536+Math.round(Me(Fn.g*255,0,255))*256+Math.round(Me(Fn.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let m,d;const x=(p+f)/2;if(p===f)m=0,d=0;else{const S=f-p;switch(d=x<=.5?S/(f+p):S/(2-f-p),f){case s:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-s)/S+2;break;case c:m=(s-l)/S+4;break}m/=6}return t.h=m,t.s=d,t.l=x,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Fn.copy(this),i),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=Ti){Le.workingToColorSpace(Fn.copy(this),t);const i=Fn.r,s=Fn.g,l=Fn.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(os),this.setHSL(os.h+t,os.s+i,os.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(os),t.getHSL(Pc);const s=Fh(os.h,Pc.h,i),l=Fh(os.s,Pc.s,i),c=Fh(os.l,Pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Te;Te.NAMES=$v;class UM extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Pi=new k,Ea=new k,Yh=new k,ba=new k,Ir=new k,zr=new k,F_=new k,qh=new k,jh=new k,Zh=new k,Qh=new ln,Kh=new ln,Jh=new ln;class zi{constructor(t=new k,i=new k,s=new k){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Pi.subVectors(t,i),l.cross(Pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Pi.subVectors(l,i),Ea.subVectors(s,i),Yh.subVectors(t,i);const f=Pi.dot(Pi),p=Pi.dot(Ea),m=Pi.dot(Yh),d=Ea.dot(Ea),x=Ea.dot(Yh),S=f*d-p*p;if(S===0)return c.set(0,0,0),null;const _=1/S,M=(d*m-p*x)*_,b=(f*x-p*m)*_;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ba)===null?!1:ba.x>=0&&ba.y>=0&&ba.x+ba.y<=1}static getInterpolation(t,i,s,l,c,f,p,m){return this.getBarycoord(t,i,s,l,ba)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ba.x),m.addScaledVector(f,ba.y),m.addScaledVector(p,ba.z),m)}static getInterpolatedAttribute(t,i,s,l,c,f){return Qh.setScalar(0),Kh.setScalar(0),Jh.setScalar(0),Qh.fromBufferAttribute(t,i),Kh.fromBufferAttribute(t,s),Jh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Qh,c.x),f.addScaledVector(Kh,c.y),f.addScaledVector(Jh,c.z),f}static isFrontFacing(t,i,s,l){return Pi.subVectors(s,i),Ea.subVectors(t,i),Pi.cross(Ea).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pi.subVectors(this.c,this.b),Ea.subVectors(this.a,this.b),Pi.cross(Ea).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return zi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return zi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,p;Ir.subVectors(l,s),zr.subVectors(c,s),qh.subVectors(t,s);const m=Ir.dot(qh),d=zr.dot(qh);if(m<=0&&d<=0)return i.copy(s);jh.subVectors(t,l);const x=Ir.dot(jh),S=zr.dot(jh);if(x>=0&&S<=x)return i.copy(l);const _=m*S-x*d;if(_<=0&&m>=0&&x<=0)return f=m/(m-x),i.copy(s).addScaledVector(Ir,f);Zh.subVectors(t,c);const M=Ir.dot(Zh),b=zr.dot(Zh);if(b>=0&&M<=b)return i.copy(c);const R=M*d-m*b;if(R<=0&&d>=0&&b<=0)return p=d/(d-b),i.copy(s).addScaledVector(zr,p);const y=x*b-M*S;if(y<=0&&S-x>=0&&M-b>=0)return F_.subVectors(c,l),p=(S-x)/(S-x+(M-b)),i.copy(l).addScaledVector(F_,p);const g=1/(y+R+_);return f=R*g,p=_*g,i.copy(s).addScaledVector(Ir,f).addScaledVector(zr,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class gl{constructor(t=new k(1/0,1/0,1/0),i=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)t.isMesh===!0?t.getVertexPosition(f,Ii):Ii.fromBufferAttribute(c,f),Ii.applyMatrix4(t.matrixWorld),this.expandByPoint(Ii);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ic.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ic.copy(s.boundingBox)),Ic.applyMatrix4(t.matrixWorld),this.union(Ic)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ii),Ii.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jo),zc.subVectors(this.max,Jo),Fr.subVectors(t.a,Jo),Br.subVectors(t.b,Jo),Hr.subVectors(t.c,Jo),ls.subVectors(Br,Fr),cs.subVectors(Hr,Br),Ps.subVectors(Fr,Hr);let i=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Ps.z,Ps.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Ps.z,0,-Ps.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Ps.y,Ps.x,0];return!$h(i,Fr,Br,Hr,zc)||(i=[1,0,0,0,1,0,0,0,1],!$h(i,Fr,Br,Hr,zc))?!1:(Fc.crossVectors(ls,cs),i=[Fc.x,Fc.y,Fc.z],$h(i,Fr,Br,Hr,zc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ii).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ii).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ta),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ta=[new k,new k,new k,new k,new k,new k,new k,new k],Ii=new k,Ic=new gl,Fr=new k,Br=new k,Hr=new k,ls=new k,cs=new k,Ps=new k,Jo=new k,zc=new k,Fc=new k,Is=new k;function $h(o,t,i,s,l){for(let c=0,f=o.length-3;c<=f;c+=3){Is.fromArray(o,c);const p=l.x*Math.abs(Is.x)+l.y*Math.abs(Is.y)+l.z*Math.abs(Is.z),m=t.dot(Is),d=i.dot(Is),x=s.dot(Is);if(Math.max(-Math.max(m,d,x),Math.min(m,d,x))>p)return!1}return!0}const vn=new k,Bc=new re;let LM=0;class ta{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:LM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=b_,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Bc.fromBufferAttribute(this,i),Bc.applyMatrix3(t),this.setXY(i,Bc.x,Bc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(t),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Qo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=ei(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Qo(i,this.array)),i}setX(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Qo(i,this.array)),i}setY(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Qo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Qo(i,this.array)),i}setW(t,i){return this.normalized&&(i=ei(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=ei(i,this.array),s=ei(s,this.array),l=ei(l,this.array),c=ei(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==b_&&(t.usage=this.usage),t}}class tx extends ta{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class ex extends ta{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Fe extends ta{constructor(t,i,s){super(new Float32Array(t),i,s)}}const NM=new gl,$o=new k,td=new k;class Su{constructor(t=new k,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):NM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$o.subVectors(t,this.center);const i=$o.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector($o,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(td.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($o.copy(t.center).add(td)),this.expandByPoint($o.copy(t.center).sub(td))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let OM=0;const Ei=new Qe,ed=new xn,Gr=new k,di=new gl,tl=new gl,Rn=new k;class Dn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hM(t)?ex:tx)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,i,s){return Ei.makeTranslation(t,i,s),this.applyMatrix4(Ei),this}scale(t,i,s){return Ei.makeScale(t,i,s),this.applyMatrix4(Ei),this}lookAt(t){return ed.lookAt(t),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fe(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];di.setFromBufferAttribute(c),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Su);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const s=this.boundingSphere.center;if(di.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];tl.setFromBufferAttribute(p),this.morphTargetsRelative?(Rn.addVectors(di.min,tl.min),di.expandByPoint(Rn),Rn.addVectors(di.max,tl.max),di.expandByPoint(Rn)):(di.expandByPoint(tl.min),di.expandByPoint(tl.max))}di.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Rn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Rn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],m=this.morphTargetsRelative;for(let d=0,x=p.count;d<x;d++)Rn.fromBufferAttribute(p,d),m&&(Gr.fromBufferAttribute(t,d),Rn.add(Gr)),l=Math.max(l,s.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ta(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],m=[];for(let T=0;T<s.count;T++)p[T]=new k,m[T]=new k;const d=new k,x=new k,S=new k,_=new re,M=new re,b=new re,R=new k,y=new k;function g(T,L,J){d.fromBufferAttribute(s,T),x.fromBufferAttribute(s,L),S.fromBufferAttribute(s,J),_.fromBufferAttribute(c,T),M.fromBufferAttribute(c,L),b.fromBufferAttribute(c,J),x.sub(d),S.sub(d),M.sub(_),b.sub(_);const G=1/(M.x*b.y-b.x*M.y);isFinite(G)&&(R.copy(x).multiplyScalar(b.y).addScaledVector(S,-M.y).multiplyScalar(G),y.copy(S).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(G),p[T].add(R),p[L].add(R),p[J].add(R),m[T].add(y),m[L].add(y),m[J].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,L=A.length;T<L;++T){const J=A[T],G=J.start,X=J.count;for(let $=G,tt=G+X;$<tt;$+=3)g(t.getX($+0),t.getX($+1),t.getX($+2))}const N=new k,U=new k,F=new k,P=new k;function I(T){F.fromBufferAttribute(l,T),P.copy(F);const L=p[T];N.copy(L),N.sub(F.multiplyScalar(F.dot(L))).normalize(),U.crossVectors(P,L);const G=U.dot(m[T])<0?-1:1;f.setXYZW(T,N.x,N.y,N.z,G)}for(let T=0,L=A.length;T<L;++T){const J=A[T],G=J.start,X=J.count;for(let $=G,tt=G+X;$<tt;$+=3)I(t.getX($+0)),I(t.getX($+1)),I(t.getX($+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ta(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const l=new k,c=new k,f=new k,p=new k,m=new k,d=new k,x=new k,S=new k;if(t)for(let _=0,M=t.count;_<M;_+=3){const b=t.getX(_+0),R=t.getX(_+1),y=t.getX(_+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,y),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),p.add(x),m.add(x),d.add(x),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,M=i.count;_<M;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),S.subVectors(l,c),x.cross(S),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Rn.fromBufferAttribute(t,i),Rn.normalize(),t.setXYZ(i,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function t(p,m){const d=p.array,x=p.itemSize,S=p.normalized,_=new d.constructor(m.length*x);let M=0,b=0;for(let R=0,y=m.length;R<y;R++){p.isInterleavedBufferAttribute?M=m[R]*p.data.stride+p.offset:M=m[R]*x;for(let g=0;g<x;g++)_[b++]=d[M++]}return new ta(_,x,S)}if(this.index===null)return ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Dn,s=this.index.array,l=this.attributes;for(const p in l){const m=l[p],d=t(m,s);i.setAttribute(p,d)}const c=this.morphAttributes;for(const p in c){const m=[],d=c[p];for(let x=0,S=d.length;x<S;x++){const _=d[x],M=t(_,s);m.push(M)}i.morphAttributes[p]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,m=f.length;p<m;p++){const d=f[p];i.addGroup(d.start,d.count,d.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const d in m)m[d]!==void 0&&(t[d]=m[d]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const d=s[m];t.data.attributes[m]=d.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const d=this.morphAttributes[m],x=[];for(let S=0,_=d.length;S<_;S++){const M=d[S];x.push(M.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const d in l){const x=l[d];this.setAttribute(d,x.clone(i))}const c=t.morphAttributes;for(const d in c){const x=[],S=c[d];for(let _=0,M=S.length;_<M;_++)x.push(S[_].clone(i));this.morphAttributes[d]=x}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let d=0,x=f.length;d<x;d++){const S=f[d];this.addGroup(S.start,S.count,S.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let PM=0;class eo extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PM++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=jr,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=xd,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ce(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ce(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==vd&&(s.blendSrc=this.blendSrc),this.blendDst!==xd&&(s.blendDst=this.blendDst),this.blendEquation!==ks&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ur&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ur&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ur&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const m=c[p];delete m.metadata,f.push(m)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Aa=new k,nd=new k,Hc=new k,us=new k,id=new k,Gc=new k,ad=new k;class yu{constructor(t=new k,i=new k(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){nd.copy(t).add(i).multiplyScalar(.5),Hc.copy(i).sub(t).normalize(),us.copy(this.origin).sub(nd);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Hc),p=us.dot(this.direction),m=-us.dot(Hc),d=us.lengthSq(),x=Math.abs(1-f*f);let S,_,M,b;if(x>0)if(S=f*m-p,_=f*p-m,b=c*x,S>=0)if(_>=-b)if(_<=b){const R=1/x;S*=R,_*=R,M=S*(S+f*_+2*p)+_*(f*S+_+2*m)+d}else _=c,S=Math.max(0,-(f*_+p)),M=-S*S+_*(_+2*m)+d;else _=-c,S=Math.max(0,-(f*_+p)),M=-S*S+_*(_+2*m)+d;else _<=-b?(S=Math.max(0,-(-f*c+p)),_=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+d):_<=b?(S=0,_=Math.min(Math.max(-c,-m),c),M=_*(_+2*m)+d):(S=Math.max(0,-(f*c+p)),_=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+_*(_+2*m)+d);else _=f>0?-c:c,S=Math.max(0,-(f*_+p)),M=-S*S+_*(_+2*m)+d;return s&&s.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(nd).addScaledVector(Hc,_),M}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,m=s+f;return m<0?null:p<0?this.at(m,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,p,m;const d=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,_=this.origin;return d>=0?(s=(t.min.x-_.x)*d,l=(t.max.x-_.x)*d):(s=(t.max.x-_.x)*d,l=(t.min.x-_.x)*d),x>=0?(c=(t.min.y-_.y)*x,f=(t.max.y-_.y)*x):(c=(t.max.y-_.y)*x,f=(t.min.y-_.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),S>=0?(p=(t.min.z-_.z)*S,m=(t.max.z-_.z)*S):(p=(t.max.z-_.z)*S,m=(t.min.z-_.z)*S),s>m||p>l)||((p>s||s!==s)&&(s=p),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,c){id.subVectors(i,t),Gc.subVectors(s,t),ad.crossVectors(id,Gc);let f=this.direction.dot(ad),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;us.subVectors(this.origin,t);const m=p*this.direction.dot(Gc.crossVectors(us,Gc));if(m<0)return null;const d=p*this.direction.dot(id.cross(us));if(d<0||m+d>f)return null;const x=-p*us.dot(ad);return x<0?null:this.at(x/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _l extends eo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=Ov,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const B_=new Qe,zs=new yu,Vc=new Su,H_=new k,kc=new k,Xc=new k,Wc=new k,sd=new k,Yc=new k,G_=new k,qc=new k;class Bt extends xn{constructor(t=new Dn,i=new _l){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(c&&p){Yc.set(0,0,0);for(let m=0,d=c.length;m<d;m++){const x=p[m],S=c[m];x!==0&&(sd.fromBufferAttribute(S,t),f?Yc.addScaledVector(sd,x):Yc.addScaledVector(sd.sub(i),x))}i.add(Yc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Vc.copy(s.boundingSphere),Vc.applyMatrix4(c),zs.copy(t.ray).recast(t.near),!(Vc.containsPoint(zs.origin)===!1&&(zs.intersectSphere(Vc,H_)===null||zs.origin.distanceToSquared(H_)>(t.far-t.near)**2))&&(B_.copy(c).invert(),zs.copy(t.ray).applyMatrix4(B_),!(s.boundingBox!==null&&zs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,zs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,p=c.index,m=c.attributes.position,d=c.attributes.uv,x=c.attributes.uv1,S=c.attributes.normal,_=c.groups,M=c.drawRange;if(p!==null)if(Array.isArray(f))for(let b=0,R=_.length;b<R;b++){const y=_[b],g=f[y.materialIndex],A=Math.max(y.start,M.start),N=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=A,F=N;U<F;U+=3){const P=p.getX(U),I=p.getX(U+1),T=p.getX(U+2);l=jc(this,g,t,s,d,x,S,P,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(p.count,M.start+M.count);for(let y=b,g=R;y<g;y+=3){const A=p.getX(y),N=p.getX(y+1),U=p.getX(y+2);l=jc(this,f,t,s,d,x,S,A,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=_.length;b<R;b++){const y=_[b],g=f[y.materialIndex],A=Math.max(y.start,M.start),N=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let U=A,F=N;U<F;U+=3){const P=U,I=U+1,T=U+2;l=jc(this,g,t,s,d,x,S,P,I,T),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=b,g=R;y<g;y+=3){const A=y,N=y+1,U=y+2;l=jc(this,f,t,s,d,x,S,A,N,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function IM(o,t,i,s,l,c,f,p){let m;if(t.side===qn?m=s.intersectTriangle(f,c,l,!0,p):m=s.intersectTriangle(l,c,f,t.side===gs,p),m===null)return null;qc.copy(p),qc.applyMatrix4(o.matrixWorld);const d=i.ray.origin.distanceTo(qc);return d<i.near||d>i.far?null:{distance:d,point:qc.clone(),object:o}}function jc(o,t,i,s,l,c,f,p,m,d){o.getVertexPosition(p,kc),o.getVertexPosition(m,Xc),o.getVertexPosition(d,Wc);const x=IM(o,t,i,s,kc,Xc,Wc,G_);if(x){const S=new k;zi.getBarycoord(G_,kc,Xc,Wc,S),l&&(x.uv=zi.getInterpolatedAttribute(l,p,m,d,S,new re)),c&&(x.uv1=zi.getInterpolatedAttribute(c,p,m,d,S,new re)),f&&(x.normal=zi.getInterpolatedAttribute(f,p,m,d,S,new k),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:m,c:d,normal:new k,materialIndex:0};zi.getNormal(kc,Xc,Wc,_.normal),x.face=_,x.barycoord=S}return x}class zM extends jn{constructor(t=null,i=1,s=1,l,c,f,p,m,d=Pn,x=Pn,S,_){super(null,f,p,m,d,x,l,c,S,_),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new k,FM=new k,BM=new xe;class Ca{constructor(t=new k(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=rd.subVectors(s,i).cross(FM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(rd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||BM.getNormalMatrix(t),l=this.coplanarPoint(rd).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new Su,HM=new re(.5,.5),Zc=new k;class Ep{constructor(t=new Ca,i=new Ca,s=new Ca,l=new Ca,c=new Ca,f=new Ca){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ki,s=!1){const l=this.planes,c=t.elements,f=c[0],p=c[1],m=c[2],d=c[3],x=c[4],S=c[5],_=c[6],M=c[7],b=c[8],R=c[9],y=c[10],g=c[11],A=c[12],N=c[13],U=c[14],F=c[15];if(l[0].setComponents(d-f,M-x,g-b,F-A).normalize(),l[1].setComponents(d+f,M+x,g+b,F+A).normalize(),l[2].setComponents(d+p,M+S,g+R,F+N).normalize(),l[3].setComponents(d-p,M-S,g-R,F-N).normalize(),s)l[4].setComponents(m,_,y,U).normalize(),l[5].setComponents(d-m,M-_,g-y,F-U).normalize();else if(l[4].setComponents(d-m,M-_,g-y,F-U).normalize(),i===Ki)l[5].setComponents(d+m,M+_,g+y,F+U).normalize();else if(i===dl)l[5].setComponents(m,_,y,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);const i=HM.distanceTo(t.center);return Fs.radius=.7071067811865476+i,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Zc.x=l.normal.x>0?t.max.x:t.min.x,Zc.y=l.normal.y>0?t.max.y:t.min.y,Zc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bp extends eo{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _u=new k,vu=new k,V_=new Qe,el=new yu,Qc=new Su,od=new k,k_=new k;class Ra extends xn{constructor(t=new Dn,i=new bp){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)_u.fromBufferAttribute(i,l-1),vu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=_u.distanceTo(vu);t.setAttribute("lineDistance",new Fe(s,1))}else ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Qc.copy(s.boundingSphere),Qc.applyMatrix4(l),Qc.radius+=c,t.ray.intersectsSphere(Qc)===!1)return;V_.copy(l).invert(),el.copy(t.ray).applyMatrix4(V_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=p*p,d=this.isLineSegments?2:1,x=s.index,_=s.attributes.position;if(x!==null){const M=Math.max(0,f.start),b=Math.min(x.count,f.start+f.count);for(let R=M,y=b-1;R<y;R+=d){const g=x.getX(R),A=x.getX(R+1),N=Kc(this,t,el,m,g,A,R);N&&i.push(N)}if(this.isLineLoop){const R=x.getX(b-1),y=x.getX(M),g=Kc(this,t,el,m,R,y,b-1);g&&i.push(g)}}else{const M=Math.max(0,f.start),b=Math.min(_.count,f.start+f.count);for(let R=M,y=b-1;R<y;R+=d){const g=Kc(this,t,el,m,R,R+1,R);g&&i.push(g)}if(this.isLineLoop){const R=Kc(this,t,el,m,b-1,M,b-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function Kc(o,t,i,s,l,c,f){const p=o.geometry.attributes.position;if(_u.fromBufferAttribute(p,l),vu.fromBufferAttribute(p,c),i.distanceSqToSegment(_u,vu,od,k_)>s)return;od.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(od);if(!(d<t.near||d>t.far))return{distance:d,point:k_.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const X_=new k,W_=new k;class GM extends Ra{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)X_.fromBufferAttribute(i,l),W_.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+X_.distanceTo(W_);t.setAttribute("lineDistance",new Fe(s,1))}else ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class nx extends jn{constructor(t=[],i=qs,s,l,c,f,p,m,d,x){super(t,i,s,l,c,f,p,m,d,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pl extends jn{constructor(t,i,s=ea,l,c,f,p=Pn,m=Pn,d,x=Na,S=1){if(x!==Na&&x!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:i,depth:S};super(_,l,c,f,p,m,x,s,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new yp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class VM extends pl{constructor(t,i=ea,s=qs,l,c,f=Pn,p=Pn,m,d=Na){const x={width:t,height:t,depth:1},S=[x,x,x,x,x,x];super(t,t,i,s,l,c,f,p,m,d),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ix extends jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class on extends Dn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],d=[],x=[],S=[];let _=0,M=0;b("z","y","x",-1,-1,s,i,t,f,c,0),b("z","y","x",1,-1,s,i,-t,f,c,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(S,2));function b(R,y,g,A,N,U,F,P,I,T,L){const J=U/I,G=F/T,X=U/2,$=F/2,tt=P/2,Q=I+1,z=T+1;let H=0,lt=0;const ut=new k;for(let gt=0;gt<z;gt++){const B=gt*G-$;for(let Z=0;Z<Q;Z++){const mt=Z*J-X;ut[R]=mt*A,ut[y]=B*N,ut[g]=tt,d.push(ut.x,ut.y,ut.z),ut[R]=0,ut[y]=0,ut[g]=P>0?1:-1,x.push(ut.x,ut.y,ut.z),S.push(Z/I),S.push(1-gt/T),H+=1}}for(let gt=0;gt<T;gt++)for(let B=0;B<I;B++){const Z=_+B+Q*gt,mt=_+B+Q*(gt+1),At=_+(B+1)+Q*(gt+1),It=_+(B+1)+Q*gt;m.push(Z,mt,It),m.push(mt,At,It),lt+=6}p.addGroup(M,lt,L),M+=lt,_+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Tp extends Dn{constructor(t=1,i=1,s=4,l=8,c=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:s,radialSegments:l,heightSegments:c},i=Math.max(0,i),s=Math.max(1,Math.floor(s)),l=Math.max(3,Math.floor(l)),c=Math.max(1,Math.floor(c));const f=[],p=[],m=[],d=[],x=i/2,S=Math.PI/2*t,_=i,M=2*S+_,b=s*2+c,R=l+1,y=new k,g=new k;for(let A=0;A<=b;A++){let N=0,U=0,F=0,P=0;if(A<=s){const L=A/s,J=L*Math.PI/2;U=-x-t*Math.cos(J),F=t*Math.sin(J),P=-t*Math.cos(J),N=L*S}else if(A<=s+c){const L=(A-s)/c;U=-x+L*i,F=t,P=0,N=S+L*_}else{const L=(A-s-c)/s,J=L*Math.PI/2;U=x+t*Math.sin(J),F=t*Math.cos(J),P=t*Math.sin(J),N=S+_+L*S}const I=Math.max(0,Math.min(1,N/M));let T=0;A===0?T=.5/l:A===b&&(T=-.5/l);for(let L=0;L<=l;L++){const J=L/l,G=J*Math.PI*2,X=Math.sin(G),$=Math.cos(G);g.x=-F*$,g.y=U,g.z=F*X,p.push(g.x,g.y,g.z),y.set(-F*$,P,F*X),y.normalize(),m.push(y.x,y.y,y.z),d.push(J+T,I)}if(A>0){const L=(A-1)*R;for(let J=0;J<l;J++){const G=L+J,X=L+J+1,$=A*R+J,tt=A*R+J+1;f.push(G,X,$),f.push(X,tt,$)}}}this.setIndex(f),this.setAttribute("position",new Fe(p,3)),this.setAttribute("normal",new Fe(m,3)),this.setAttribute("uv",new Fe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class Cn extends Dn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,p=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:p,thetaLength:m};const d=this;l=Math.floor(l),c=Math.floor(c);const x=[],S=[],_=[],M=[];let b=0;const R=[],y=s/2;let g=0;A(),f===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(x),this.setAttribute("position",new Fe(S,3)),this.setAttribute("normal",new Fe(_,3)),this.setAttribute("uv",new Fe(M,2));function A(){const U=new k,F=new k;let P=0;const I=(i-t)/s;for(let T=0;T<=c;T++){const L=[],J=T/c,G=J*(i-t)+t;for(let X=0;X<=l;X++){const $=X/l,tt=$*m+p,Q=Math.sin(tt),z=Math.cos(tt);F.x=G*Q,F.y=-J*s+y,F.z=G*z,S.push(F.x,F.y,F.z),U.set(Q,I,z).normalize(),_.push(U.x,U.y,U.z),M.push($,1-J),L.push(b++)}R.push(L)}for(let T=0;T<l;T++)for(let L=0;L<c;L++){const J=R[L][T],G=R[L+1][T],X=R[L+1][T+1],$=R[L][T+1];(t>0||L!==0)&&(x.push(J,G,$),P+=3),(i>0||L!==c-1)&&(x.push(G,X,$),P+=3)}d.addGroup(g,P,0),g+=P}function N(U){const F=b,P=new re,I=new k;let T=0;const L=U===!0?t:i,J=U===!0?1:-1;for(let X=1;X<=l;X++)S.push(0,y*J,0),_.push(0,J,0),M.push(.5,.5),b++;const G=b;for(let X=0;X<=l;X++){const tt=X/l*m+p,Q=Math.cos(tt),z=Math.sin(tt);I.x=L*z,I.y=y*J,I.z=L*Q,S.push(I.x,I.y,I.z),_.push(0,J,0),P.x=Q*.5+.5,P.y=z*.5*J+.5,M.push(P.x,P.y),b++}for(let X=0;X<l;X++){const $=F+X,tt=G+X;U===!0?x.push(tt,tt+1,$):x.push(tt+1,tt,$),T+=3}d.addGroup(g,T,U===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ap extends Cn{constructor(t=1,i=1,s=32,l=1,c=!1,f=0,p=Math.PI*2){super(0,t,i,s,l,c,f,p),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:f,thetaLength:p}}static fromJSON(t){return new Ap(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rp extends Dn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];p(l),d(s),x(),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(c.slice(),3)),this.setAttribute("uv",new Fe(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(A){const N=new k,U=new k,F=new k;for(let P=0;P<i.length;P+=3)M(i[P+0],N),M(i[P+1],U),M(i[P+2],F),m(N,U,F,A)}function m(A,N,U,F){const P=F+1,I=[];for(let T=0;T<=P;T++){I[T]=[];const L=A.clone().lerp(U,T/P),J=N.clone().lerp(U,T/P),G=P-T;for(let X=0;X<=G;X++)X===0&&T===P?I[T][X]=L:I[T][X]=L.clone().lerp(J,X/G)}for(let T=0;T<P;T++)for(let L=0;L<2*(P-T)-1;L++){const J=Math.floor(L/2);L%2===0?(_(I[T][J+1]),_(I[T+1][J]),_(I[T][J])):(_(I[T][J+1]),_(I[T+1][J+1]),_(I[T+1][J]))}}function d(A){const N=new k;for(let U=0;U<c.length;U+=3)N.x=c[U+0],N.y=c[U+1],N.z=c[U+2],N.normalize().multiplyScalar(A),c[U+0]=N.x,c[U+1]=N.y,c[U+2]=N.z}function x(){const A=new k;for(let N=0;N<c.length;N+=3){A.x=c[N+0],A.y=c[N+1],A.z=c[N+2];const U=y(A)/2/Math.PI+.5,F=g(A)/Math.PI+.5;f.push(U,1-F)}b(),S()}function S(){for(let A=0;A<f.length;A+=6){const N=f[A+0],U=f[A+2],F=f[A+4],P=Math.max(N,U,F),I=Math.min(N,U,F);P>.9&&I<.1&&(N<.2&&(f[A+0]+=1),U<.2&&(f[A+2]+=1),F<.2&&(f[A+4]+=1))}}function _(A){c.push(A.x,A.y,A.z)}function M(A,N){const U=A*3;N.x=t[U+0],N.y=t[U+1],N.z=t[U+2]}function b(){const A=new k,N=new k,U=new k,F=new k,P=new re,I=new re,T=new re;for(let L=0,J=0;L<c.length;L+=9,J+=6){A.set(c[L+0],c[L+1],c[L+2]),N.set(c[L+3],c[L+4],c[L+5]),U.set(c[L+6],c[L+7],c[L+8]),P.set(f[J+0],f[J+1]),I.set(f[J+2],f[J+3]),T.set(f[J+4],f[J+5]),F.copy(A).add(N).add(U).divideScalar(3);const G=y(F);R(P,J+0,A,G),R(I,J+2,N,G),R(T,J+4,U,G)}}function R(A,N,U,F){F<0&&A.x===1&&(f[N]=A.x-1),U.x===0&&U.z===0&&(f[N]=F/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function g(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rp(t.vertices,t.indices,t.radius,t.detail)}}class Yr extends Rp{constructor(t=1,i=0){const s=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],l=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(s,l,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Yr(t.radius,t.detail)}}class no extends Dn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,p=Math.floor(s),m=Math.floor(l),d=p+1,x=m+1,S=t/p,_=i/m,M=[],b=[],R=[],y=[];for(let g=0;g<x;g++){const A=g*_-f;for(let N=0;N<d;N++){const U=N*S-c;b.push(U,-A,0),R.push(0,0,1),y.push(N/p),y.push(1-g/m)}}for(let g=0;g<m;g++)for(let A=0;A<p;A++){const N=A+d*g,U=A+d*(g+1),F=A+1+d*(g+1),P=A+1+d*g;M.push(N,U,P),M.push(U,F,P)}this.setIndex(M),this.setAttribute("position",new Fe(b,3)),this.setAttribute("normal",new Fe(R,3)),this.setAttribute("uv",new Fe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.width,t.height,t.widthSegments,t.heightSegments)}}class Mu extends Dn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,p=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:p},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+p,Math.PI);let d=0;const x=[],S=new k,_=new k,M=[],b=[],R=[],y=[];for(let g=0;g<=s;g++){const A=[],N=g/s;let U=0;g===0&&f===0?U=.5/i:g===s&&m===Math.PI&&(U=-.5/i);for(let F=0;F<=i;F++){const P=F/i;S.x=-t*Math.cos(l+P*c)*Math.sin(f+N*p),S.y=t*Math.cos(f+N*p),S.z=t*Math.sin(l+P*c)*Math.sin(f+N*p),b.push(S.x,S.y,S.z),_.copy(S).normalize(),R.push(_.x,_.y,_.z),y.push(P+U,1-N),A.push(d++)}x.push(A)}for(let g=0;g<s;g++)for(let A=0;A<i;A++){const N=x[g][A+1],U=x[g][A],F=x[g+1][A],P=x[g+1][A+1];(g!==0||f>0)&&M.push(N,U,P),(g!==s-1||m<Math.PI)&&M.push(U,F,P)}this.setIndex(M),this.setAttribute("position",new Fe(b,3)),this.setAttribute("normal",new Fe(R,3)),this.setAttribute("uv",new Fe(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ps extends Dn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2,f=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c,thetaStart:f,thetaLength:p},s=Math.floor(s),l=Math.floor(l);const m=[],d=[],x=[],S=[],_=new k,M=new k,b=new k;for(let R=0;R<=s;R++){const y=f+R/s*p;for(let g=0;g<=l;g++){const A=g/l*c;M.x=(t+i*Math.cos(y))*Math.cos(A),M.y=(t+i*Math.cos(y))*Math.sin(A),M.z=i*Math.sin(y),d.push(M.x,M.y,M.z),_.x=t*Math.cos(A),_.y=t*Math.sin(A),b.subVectors(M,_).normalize(),x.push(b.x,b.y,b.z),S.push(g/l),S.push(R/s)}}for(let R=1;R<=s;R++)for(let y=1;y<=l;y++){const g=(l+1)*R+y-1,A=(l+1)*(R-1)+y-1,N=(l+1)*(R-1)+y,U=(l+1)*R+y;m.push(g,A,U),m.push(A,N,U)}this.setIndex(m),this.setAttribute("position",new Fe(d,3)),this.setAttribute("normal",new Fe(x,3)),this.setAttribute("uv",new Fe(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function to(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Yn(o){const t={};for(let i=0;i<o.length;i++){const s=to(o[i]);for(const l in s)t[l]=s[l]}return t}function kM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function ax(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const XM={clone:to,merge:Yn};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class na extends eo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=kM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qM extends na{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sx extends eo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qv,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jM extends sx{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ZM extends eo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class QM extends eo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class rx extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const ld=new Qe,Y_=new k,q_=new k;class KM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ep,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Y_.setFromMatrixPosition(t.matrixWorld),i.position.copy(Y_),q_.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(q_),i.updateMatrixWorld(),ld.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ld,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===dl||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(ld)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jc=new k,$c=new wn,Wi=new k;class ox extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jc,$c,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorld.decompose(Jc,$c,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jc,$c,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fs=new k,j_=new re,Z_=new re;class Ai extends ox{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=op*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return op*2*Math.atan(Math.tan(fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,i){return this.getViewBounds(t,j_,Z_),i.subVectors(Z_,j_)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fu*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,d=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/d,l*=f.width/m,s*=f.height/d}const p=this.filmOffset;p!==0&&(c+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Cp extends ox{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,p=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=d*this.view.offsetX,f=c+d*this.view.width,p-=x*this.view.offsetY,m=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JM extends KM{constructor(){super(new Cp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $M extends rx{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new JM}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class tE extends rx{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vr=-90,kr=1;class eE extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ai(Vr,kr,t,i);l.layers=this.layers,this.add(l);const c=new Ai(Vr,kr,t,i);c.layers=this.layers,this.add(c);const f=new Ai(Vr,kr,t,i);f.layers=this.layers,this.add(f);const p=new Ai(Vr,kr,t,i);p.layers=this.layers,this.add(p);const m=new Ai(Vr,kr,t,i);m.layers=this.layers,this.add(m);const d=new Ai(Vr,kr,t,i);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,m]=i;for(const d of i)this.remove(d);if(t===Ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===dl)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of i)this.add(d),d.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,m,d,x]=this.children,S=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;t.isWebGLRenderer===!0?y=t.state.buffers.depth.getReversed():y=t.reversedDepthBuffer,t.setRenderTarget(s,0,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,c),t.setRenderTarget(s,1,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,f),t.setRenderTarget(s,2,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(s,3,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),t.setRenderTarget(s,4,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),y&&t.autoClear===!1&&t.clearDepth(),t.render(i,x),t.setRenderTarget(S,_,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class nE extends Ai{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Q_=new Qe;class lx{constructor(t,i,s=0,l=1/0){this.ray=new yu(t,i),this.near=s,this.far=l,this.camera=null,this.layers=new Mp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,i){this.ray.set(t,i)}setFromCamera(t,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):Ue("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(t){return Q_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Q_),this}intersectObject(t,i=!0,s=[]){return lp(t,this,s,i),s.sort(K_),s}intersectObjects(t,i=!0,s=[]){for(let l=0,c=t.length;l<c;l++)lp(t[l],this,s,i);return s.sort(K_),s}}function K_(o,t){return o.distance-t.distance}function lp(o,t,i,s){let l=!0;if(o.layers.test(t.layers)&&o.raycast(t,i)===!1&&(l=!1),l===!0&&s===!0){const c=o.children;for(let f=0,p=c.length;f<p;f++)lp(c[f],t,i,!0)}}class J_{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Me(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(Me(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class iE extends GM{constructor(t=10,i=10,s=4473924,l=8947848){s=new Te(s),l=new Te(l);const c=i/2,f=t/i,p=t/2,m=[],d=[];for(let _=0,M=0,b=-p;_<=i;_++,b+=f){m.push(-p,0,b,p,0,b),m.push(b,0,-p,b,0,p);const R=_===c?s:l;R.toArray(d,M),M+=3,R.toArray(d,M),M+=3,R.toArray(d,M),M+=3,R.toArray(d,M),M+=3}const x=new Dn;x.setAttribute("position",new Fe(m,3)),x.setAttribute("color",new Fe(d,3));const S=new bp({vertexColors:!0,toneMapped:!1});super(x,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cx extends js{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ce("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function $_(o,t,i,s){const l=aE(s);switch(i){case qv:return o*t;case Zv:return o*t/l.components*l.byteLength;case gp:return o*t/l.components*l.byteLength;case Jr:return o*t*2/l.components*l.byteLength;case _p:return o*t*2/l.components*l.byteLength;case jv:return o*t*3/l.components*l.byteLength;case Fi:return o*t*4/l.components*l.byteLength;case vp:return o*t*4/l.components*l.byteLength;case ou:case lu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cu:case uu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Dd:case Ld:return Math.max(o,16)*Math.max(t,8)/4;case wd:case Ud:return Math.max(o,8)*Math.max(t,8)/2;case Nd:case Od:case Id:case zd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Pd:case Fd:case Bd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case tp:case ep:case np:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ip:case ap:return Math.ceil(o/4)*Math.ceil(t/4)*8;case sp:case rp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function aE(o){switch(o){case pi:case kv:return{byteLength:1,components:1};case fl:case Xv:case La:return{byteLength:2,components:1};case pp:case mp:return{byteLength:2,components:4};case ea:case dp:case Qi:return{byteLength:4,components:1};case Wv:case Yv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);function ux(){let o=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function sE(o){const t=new WeakMap;function i(p,m){const d=p.array,x=p.usage,S=d.byteLength,_=o.createBuffer();o.bindBuffer(m,_),o.bufferData(m,d,x),p.onUploadCallback();let M;if(d instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=o.HALF_FLOAT;else if(d instanceof Uint16Array)p.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=o.SHORT;else if(d instanceof Uint32Array)M=o.UNSIGNED_INT;else if(d instanceof Int32Array)M=o.INT;else if(d instanceof Int8Array)M=o.BYTE;else if(d instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:p.version,size:S}}function s(p,m,d){const x=m.array,S=m.updateRanges;if(o.bindBuffer(d,p),S.length===0)o.bufferSubData(d,0,x);else{S.sort((M,b)=>M.start-b.start);let _=0;for(let M=1;M<S.length;M++){const b=S[_],R=S[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++_,S[_]=R)}S.length=_+1;for(let M=0,b=S.length;M<b;M++){const R=S[M];o.bufferSubData(d,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const m=t.get(p);m&&(o.deleteBuffer(m.buffer),t.delete(p))}function f(p,m){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=t.get(p);(!x||x.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const d=t.get(p);if(d===void 0)t.set(p,i(p,m));else if(d.version<p.version){if(d.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,p,m),d.version=p.version}}return{get:l,remove:c,update:f}}var rE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,mE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_E=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,SE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ME=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,EE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,AE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,RE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,CE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,wE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,DE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,UE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,LE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,IE="gl_FragColor = linearToOutputTexel( gl_FragColor );",zE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,GE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ZE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ib=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ab=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ob=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_b=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Eb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Db=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ub=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ob=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ib=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Vb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$b=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,eT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,aT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ST=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,DT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Se={alphahash_fragment:rE,alphahash_pars_fragment:oE,alphamap_fragment:lE,alphamap_pars_fragment:cE,alphatest_fragment:uE,alphatest_pars_fragment:fE,aomap_fragment:hE,aomap_pars_fragment:dE,batching_pars_vertex:pE,batching_vertex:mE,begin_vertex:gE,beginnormal_vertex:_E,bsdfs:vE,iridescence_fragment:xE,bumpmap_pars_fragment:SE,clipping_planes_fragment:yE,clipping_planes_pars_fragment:ME,clipping_planes_pars_vertex:EE,clipping_planes_vertex:bE,color_fragment:TE,color_pars_fragment:AE,color_pars_vertex:RE,color_vertex:CE,common:wE,cube_uv_reflection_fragment:DE,defaultnormal_vertex:UE,displacementmap_pars_vertex:LE,displacementmap_vertex:NE,emissivemap_fragment:OE,emissivemap_pars_fragment:PE,colorspace_fragment:IE,colorspace_pars_fragment:zE,envmap_fragment:FE,envmap_common_pars_fragment:BE,envmap_pars_fragment:HE,envmap_pars_vertex:GE,envmap_physical_pars_fragment:JE,envmap_vertex:VE,fog_vertex:kE,fog_pars_vertex:XE,fog_fragment:WE,fog_pars_fragment:YE,gradientmap_pars_fragment:qE,lightmap_pars_fragment:jE,lights_lambert_fragment:ZE,lights_lambert_pars_fragment:QE,lights_pars_begin:KE,lights_toon_fragment:$E,lights_toon_pars_fragment:tb,lights_phong_fragment:eb,lights_phong_pars_fragment:nb,lights_physical_fragment:ib,lights_physical_pars_fragment:ab,lights_fragment_begin:sb,lights_fragment_maps:rb,lights_fragment_end:ob,logdepthbuf_fragment:lb,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:ub,logdepthbuf_vertex:fb,map_fragment:hb,map_pars_fragment:db,map_particle_fragment:pb,map_particle_pars_fragment:mb,metalnessmap_fragment:gb,metalnessmap_pars_fragment:_b,morphinstance_vertex:vb,morphcolor_vertex:xb,morphnormal_vertex:Sb,morphtarget_pars_vertex:yb,morphtarget_vertex:Mb,normal_fragment_begin:Eb,normal_fragment_maps:bb,normal_pars_fragment:Tb,normal_pars_vertex:Ab,normal_vertex:Rb,normalmap_pars_fragment:Cb,clearcoat_normal_fragment_begin:wb,clearcoat_normal_fragment_maps:Db,clearcoat_pars_fragment:Ub,iridescence_pars_fragment:Lb,opaque_fragment:Nb,packing:Ob,premultiplied_alpha_fragment:Pb,project_vertex:Ib,dithering_fragment:zb,dithering_pars_fragment:Fb,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:Hb,shadowmap_pars_fragment:Gb,shadowmap_pars_vertex:Vb,shadowmap_vertex:kb,shadowmask_pars_fragment:Xb,skinbase_vertex:Wb,skinning_pars_vertex:Yb,skinning_vertex:qb,skinnormal_vertex:jb,specularmap_fragment:Zb,specularmap_pars_fragment:Qb,tonemapping_fragment:Kb,tonemapping_pars_fragment:Jb,transmission_fragment:$b,transmission_pars_fragment:tT,uv_pars_fragment:eT,uv_pars_vertex:nT,uv_vertex:iT,worldpos_vertex:aT,background_vert:sT,background_frag:rT,backgroundCube_vert:oT,backgroundCube_frag:lT,cube_vert:cT,cube_frag:uT,depth_vert:fT,depth_frag:hT,distance_vert:dT,distance_frag:pT,equirect_vert:mT,equirect_frag:gT,linedashed_vert:_T,linedashed_frag:vT,meshbasic_vert:xT,meshbasic_frag:ST,meshlambert_vert:yT,meshlambert_frag:MT,meshmatcap_vert:ET,meshmatcap_frag:bT,meshnormal_vert:TT,meshnormal_frag:AT,meshphong_vert:RT,meshphong_frag:CT,meshphysical_vert:wT,meshphysical_frag:DT,meshtoon_vert:UT,meshtoon_frag:LT,points_vert:NT,points_frag:OT,shadow_vert:PT,shadow_frag:IT,sprite_vert:zT,sprite_frag:FT},Pt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},ji={basic:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:Se.meshbasic_vert,fragmentShader:Se.meshbasic_frag},lambert:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Se.meshlambert_vert,fragmentShader:Se.meshlambert_frag},phong:{uniforms:Yn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Se.meshphong_vert,fragmentShader:Se.meshphong_frag},standard:{uniforms:Yn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag},toon:{uniforms:Yn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Te(0)}}]),vertexShader:Se.meshtoon_vert,fragmentShader:Se.meshtoon_frag},matcap:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:Se.meshmatcap_vert,fragmentShader:Se.meshmatcap_frag},points:{uniforms:Yn([Pt.points,Pt.fog]),vertexShader:Se.points_vert,fragmentShader:Se.points_frag},dashed:{uniforms:Yn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Se.linedashed_vert,fragmentShader:Se.linedashed_frag},depth:{uniforms:Yn([Pt.common,Pt.displacementmap]),vertexShader:Se.depth_vert,fragmentShader:Se.depth_frag},normal:{uniforms:Yn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:Se.meshnormal_vert,fragmentShader:Se.meshnormal_frag},sprite:{uniforms:Yn([Pt.sprite,Pt.fog]),vertexShader:Se.sprite_vert,fragmentShader:Se.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Se.background_vert,fragmentShader:Se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:Se.backgroundCube_vert,fragmentShader:Se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Se.cube_vert,fragmentShader:Se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Se.equirect_vert,fragmentShader:Se.equirect_frag},distance:{uniforms:Yn([Pt.common,Pt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Se.distance_vert,fragmentShader:Se.distance_frag},shadow:{uniforms:Yn([Pt.lights,Pt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Se.shadow_vert,fragmentShader:Se.shadow_frag}};ji.physical={uniforms:Yn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:Se.meshphysical_vert,fragmentShader:Se.meshphysical_frag};const tu={r:0,b:0,g:0},Bs=new Bi,BT=new Qe;function HT(o,t,i,s,l,c){const f=new Te(0);let p=l===!0?0:1,m,d,x=null,S=0,_=null;function M(A){let N=A.isScene===!0?A.background:null;if(N&&N.isTexture){const U=A.backgroundBlurriness>0;N=t.get(N,U)}return N}function b(A){let N=!1;const U=M(A);U===null?y(f,p):U&&U.isColor&&(y(U,1),N=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?i.buffers.color.setClear(0,0,0,1,c):F==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(o.autoClear||N)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function R(A,N){const U=M(N);U&&(U.isCubeTexture||U.mapping===xu)?(d===void 0&&(d=new Bt(new on(1,1,1),new na({name:"BackgroundCubeMaterial",uniforms:to(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Bs.copy(N.backgroundRotation),Bs.x*=-1,Bs.y*=-1,Bs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Bs.y*=-1,Bs.z*=-1),d.material.uniforms.envMap.value=U,d.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(BT.makeRotationFromEuler(Bs)),d.material.toneMapped=Le.getTransfer(U.colorSpace)!==Ve,(x!==U||S!==U.version||_!==o.toneMapping)&&(d.material.needsUpdate=!0,x=U,S=U.version,_=o.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Bt(new no(2,2),new na({name:"BackgroundMaterial",uniforms:to(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,m.material.toneMapped=Le.getTransfer(U.colorSpace)!==Ve,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(x!==U||S!==U.version||_!==o.toneMapping)&&(m.material.needsUpdate=!0,x=U,S=U.version,_=o.toneMapping),m.layers.enableAll(),A.unshift(m,m.geometry,m.material,0,0,null))}function y(A,N){A.getRGB(tu,ax(o)),i.buffers.color.setClear(tu.r,tu.g,tu.b,N,c)}function g(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(A,N=1){f.set(A),p=N,y(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(A){p=A,y(f,p)},render:b,addToRenderList:R,dispose:g}}function GT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(G,X,$,tt,Q){let z=!1;const H=S(G,tt,$,X);c!==H&&(c=H,d(c.object)),z=M(G,tt,$,Q),z&&b(G,tt,$,Q),Q!==null&&t.update(Q,o.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,U(G,X,$,tt),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function m(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function x(G){return o.deleteVertexArray(G)}function S(G,X,$,tt){const Q=tt.wireframe===!0;let z=s[X.id];z===void 0&&(z={},s[X.id]=z);const H=G.isInstancedMesh===!0?G.id:0;let lt=z[H];lt===void 0&&(lt={},z[H]=lt);let ut=lt[$.id];ut===void 0&&(ut={},lt[$.id]=ut);let gt=ut[Q];return gt===void 0&&(gt=_(m()),ut[Q]=gt),gt}function _(G){const X=[],$=[],tt=[];for(let Q=0;Q<i;Q++)X[Q]=0,$[Q]=0,tt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:$,attributeDivisors:tt,object:G,attributes:{},index:null}}function M(G,X,$,tt){const Q=c.attributes,z=X.attributes;let H=0;const lt=$.getAttributes();for(const ut in lt)if(lt[ut].location>=0){const B=Q[ut];let Z=z[ut];if(Z===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;H++}return c.attributesNum!==H||c.index!==tt}function b(G,X,$,tt){const Q={},z=X.attributes;let H=0;const lt=$.getAttributes();for(const ut in lt)if(lt[ut].location>=0){let B=z[ut];B===void 0&&(ut==="instanceMatrix"&&G.instanceMatrix&&(B=G.instanceMatrix),ut==="instanceColor"&&G.instanceColor&&(B=G.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),Q[ut]=Z,H++}c.attributes=Q,c.attributesNum=H,c.index=tt}function R(){const G=c.newAttributes;for(let X=0,$=G.length;X<$;X++)G[X]=0}function y(G){g(G,0)}function g(G,X){const $=c.newAttributes,tt=c.enabledAttributes,Q=c.attributeDivisors;$[G]=1,tt[G]===0&&(o.enableVertexAttribArray(G),tt[G]=1),Q[G]!==X&&(o.vertexAttribDivisor(G,X),Q[G]=X)}function A(){const G=c.newAttributes,X=c.enabledAttributes;for(let $=0,tt=X.length;$<tt;$++)X[$]!==G[$]&&(o.disableVertexAttribArray($),X[$]=0)}function N(G,X,$,tt,Q,z,H){H===!0?o.vertexAttribIPointer(G,X,$,Q,z):o.vertexAttribPointer(G,X,$,tt,Q,z)}function U(G,X,$,tt){R();const Q=tt.attributes,z=$.getAttributes(),H=X.defaultAttributeValues;for(const lt in z){const ut=z[lt];if(ut.location>=0){let gt=Q[lt];if(gt===void 0&&(lt==="instanceMatrix"&&G.instanceMatrix&&(gt=G.instanceMatrix),lt==="instanceColor"&&G.instanceColor&&(gt=G.instanceColor)),gt!==void 0){const B=gt.normalized,Z=gt.itemSize,mt=t.get(gt);if(mt===void 0)continue;const At=mt.buffer,It=mt.type,at=mt.bytesPerElement,vt=It===o.INT||It===o.UNSIGNED_INT||gt.gpuType===dp;if(gt.isInterleavedBufferAttribute){const Tt=gt.data,Yt=Tt.stride,ee=gt.offset;if(Tt.isInstancedInterleavedBuffer){for(let ie=0;ie<ut.locationSize;ie++)g(ut.location+ie,Tt.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let ie=0;ie<ut.locationSize;ie++)y(ut.location+ie);o.bindBuffer(o.ARRAY_BUFFER,At);for(let ie=0;ie<ut.locationSize;ie++)N(ut.location+ie,Z/ut.locationSize,It,B,Yt*at,(ee+Z/ut.locationSize*ie)*at,vt)}else{if(gt.isInstancedBufferAttribute){for(let Tt=0;Tt<ut.locationSize;Tt++)g(ut.location+Tt,gt.meshPerAttribute);G.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Tt=0;Tt<ut.locationSize;Tt++)y(ut.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Tt=0;Tt<ut.locationSize;Tt++)N(ut.location+Tt,Z/ut.locationSize,It,B,Z*at,Z/ut.locationSize*Tt*at,vt)}}else if(H!==void 0){const B=H[lt];if(B!==void 0)switch(B.length){case 2:o.vertexAttrib2fv(ut.location,B);break;case 3:o.vertexAttrib3fv(ut.location,B);break;case 4:o.vertexAttrib4fv(ut.location,B);break;default:o.vertexAttrib1fv(ut.location,B)}}}}A()}function F(){L();for(const G in s){const X=s[G];for(const $ in X){const tt=X[$];for(const Q in tt){const z=tt[Q];for(const H in z)x(z[H].object),delete z[H];delete tt[Q]}}delete s[G]}}function P(G){if(s[G.id]===void 0)return;const X=s[G.id];for(const $ in X){const tt=X[$];for(const Q in tt){const z=tt[Q];for(const H in z)x(z[H].object),delete z[H];delete tt[Q]}}delete s[G.id]}function I(G){for(const X in s){const $=s[X];for(const tt in $){const Q=$[tt];if(Q[G.id]===void 0)continue;const z=Q[G.id];for(const H in z)x(z[H].object),delete z[H];delete Q[G.id]}}}function T(G){for(const X in s){const $=s[X],tt=G.isInstancedMesh===!0?G.id:0,Q=$[tt];if(Q!==void 0){for(const z in Q){const H=Q[z];for(const lt in H)x(H[lt].object),delete H[lt];delete Q[z]}delete $[tt],Object.keys($).length===0&&delete s[X]}}}function L(){J(),f=!0,c!==l&&(c=l,d(c.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:L,resetDefaultState:J,dispose:F,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:A}}function VT(o,t,i){let s;function l(d){s=d}function c(d,x){o.drawArrays(s,d,x),i.update(x,s,1)}function f(d,x,S){S!==0&&(o.drawArraysInstanced(s,d,x,S),i.update(x,s,S))}function p(d,x,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,x,0,S);let M=0;for(let b=0;b<S;b++)M+=x[b];i.update(M,s,1)}function m(d,x,S,_){if(S===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<d.length;b++)f(d[b],x[b],_[b]);else{M.multiDrawArraysInstancedWEBGL(s,d,0,x,0,_,0,S);let b=0;for(let R=0;R<S;R++)b+=x[R]*_[R];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=m}function kT(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Fi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(I){const T=I===La&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==pi&&s.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Qi&&!T)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=i.precision!==void 0?i.precision:"highp";const x=m(d);x!==d&&(ce("WebGLRenderer:",d,"not supported, using",x,"instead."),d=x);const S=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),g=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:p,precision:d,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:A,maxVaryings:N,maxFragmentUniforms:U,maxSamples:F,samples:P}}function XT(o){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ca,p=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||s!==0||l;return l=_,s=S.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){i=x(S,_,0)},this.setState=function(S,_,M){const b=S.clippingPlanes,R=S.clipIntersection,y=S.clipShadows,g=o.get(S);if(!l||b===null||b.length===0||c&&!y)c?x(null):d();else{const A=c?0:s,N=A*4;let U=g.clippingState||null;m.value=U,U=x(b,_,N,M);for(let F=0;F!==N;++F)U[F]=i[F];g.clippingState=U,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function d(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(S,_,M,b){const R=S!==null?S.length:0;let y=null;if(R!==0){if(y=m.value,b!==!0||y===null){const g=M+R*4,A=_.matrixWorldInverse;p.getNormalMatrix(A),(y===null||y.length<g)&&(y=new Float32Array(g));for(let N=0,U=M;N!==R;++N,U+=4)f.copy(S[N]).applyMatrix4(A,p),f.normal.toArray(y,U),y[U+3]=f.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,y}}const ms=4,tv=[.125,.215,.35,.446,.526,.582],Xs=20,WT=256,nl=new Cp,ev=new Te;let cd=null,ud=0,fd=0,hd=!1;const YT=new k;class nv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=YT}=c;cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,p),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=av(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(cd,ud,fd),this._renderer.xr.enabled=hd,t.scissorTest=!1,Xr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===qs||t.mapping===Kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cd=this._renderer.getRenderTarget(),ud=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:La,format:Fi,colorSpace:$r,depthBuffer:!1},l=iv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iv(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qT(c)),this._blurMaterial=ZT(c,t,i),this._ggxMaterial=jT(c,t,i)}return l}_compileMaterial(t){const i=new Bt(new Dn,t);this._renderer.compile(i,nl)}_sceneToCubeUV(t,i,s,l,c){const m=new Ai(90,1,i,s),d=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,M=S.toneMapping;S.getClearColor(ev),S.toneMapping=Ji,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(l),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new on,new _l({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let g=!1;const A=t.background;A?A.isColor&&(y.color.copy(A),t.background=null,g=!0):(y.color.copy(ev),g=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[N],c.y,c.z)):U===1?(m.up.set(0,0,d[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[N],c.z)):(m.up.set(0,d[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[N]));const F=this._cubeSize;Xr(l,U*F,N>2?F:0,F,F),S.setRenderTarget(l),g&&S.render(R,m),S.render(t,m)}S.toneMapping=M,S.autoClear=_,t.background=A}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===qs||t.mapping===Kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=sv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=av());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=t;const m=this._cubeSize;Xr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,nl)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const m=f.uniforms,d=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),S=Math.sqrt(d*d-x*x),_=0+d*1.25,M=S*_,{_lodMax:b}=this,R=this._sizeLods[s],y=3*R*(s>b-ms?s-b+ms:0),g=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,Xr(c,y,g,3*R,2*R),l.setRenderTarget(c),l.render(p,nl),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,Xr(t,y,g,3*R,2*R),l.setRenderTarget(t),l.render(p,nl)}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,p){const m=this._renderer,d=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[l];S.material=d;const _=d.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Xs-1),R=c/b,y=isFinite(c)?1+Math.floor(x*R):Xs;y>Xs&&ce(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xs}`);const g=[];let A=0;for(let I=0;I<Xs;++I){const T=I/R,L=Math.exp(-T*T/2);g.push(L),I===0?A+=L:I<y&&(A+=2*L)}for(let I=0;I<g.length;I++)g[I]=g[I]/A;_.envMap.value=t.texture,_.samples.value=y,_.weights.value=g,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:N}=this;_.dTheta.value=b,_.mipInt.value=N-s;const U=this._sizeLods[l],F=3*U*(l>N-ms?l-N+ms:0),P=4*(this._cubeSize-U);Xr(i,F,P,3*U,2*U),m.setRenderTarget(i),m.render(S,nl)}}function qT(o){const t=[],i=[],s=[];let l=o;const c=o-ms+1+tv.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);t.push(p);let m=1/p;f>o-ms?m=tv[f-o+ms-1]:f===0&&(m=0),i.push(m);const d=1/(p-2),x=-d,S=1+d,_=[x,x,S,x,S,S,x,x,S,S,x,S],M=6,b=6,R=3,y=2,g=1,A=new Float32Array(R*b*M),N=new Float32Array(y*b*M),U=new Float32Array(g*b*M);for(let P=0;P<M;P++){const I=P%3*2/3-1,T=P>2?0:-1,L=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];A.set(L,R*b*P),N.set(_,y*b*P);const J=[P,P,P,P,P,P];U.set(J,g*b*P)}const F=new Dn;F.setAttribute("position",new ta(A,R)),F.setAttribute("uv",new ta(N,y)),F.setAttribute("faceIndex",new ta(U,g)),s.push(new Bt(F,null)),l>ms&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function iv(o,t,i){const s=new $i(o,t,i);return s.texture.mapping=xu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function jT(o,t,i){return new na({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Eu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function ZT(o,t,i){const s=new Float32Array(Xs),l=new k(0,1,0);return new na({name:"SphericalGaussianBlur",defines:{n:Xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function av(){return new na({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function sv(){return new na({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class fx extends $i{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new on(5,5,5),c=new na({name:"CubemapFromEquirect",uniforms:to(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Da});c.uniforms.tEquirect.value=i;const f=new Bt(l,c),p=i.minFilter;return i.minFilter===Ws&&(i.minFilter=Hn),new eE(1,10,this).update(t,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}function QT(o){let t=new WeakMap,i=new WeakMap,s=null;function l(_,M=!1){return _==null?null:M?f(_):c(_)}function c(_){if(_&&_.isTexture){const M=_.mapping;if(M===Ph||M===Ih)if(t.has(_)){const b=t.get(_).texture;return p(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const R=new fx(b.height);return R.fromEquirectangularTexture(o,_),t.set(_,R),_.addEventListener("dispose",d),p(R.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const M=_.mapping,b=M===Ph||M===Ih,R=M===qs||M===Kr;if(b||R){let y=i.get(_);const g=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==g)return s===null&&(s=new nv(o)),y=b?s.fromEquirectangular(_,y):s.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),y.texture;if(y!==void 0)return y.texture;{const A=_.image;return b&&A&&A.height>0||R&&A&&m(A)?(s===null&&(s=new nv(o)),y=b?s.fromEquirectangular(_):s.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,i.set(_,y),_.addEventListener("dispose",x),y.texture):null}}}return _}function p(_,M){return M===Ph?_.mapping=qs:M===Ih&&(_.mapping=Kr),_}function m(_){let M=0;const b=6;for(let R=0;R<b;R++)_[R]!==void 0&&M++;return M===b}function d(_){const M=_.target;M.removeEventListener("dispose",d);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function x(_){const M=_.target;M.removeEventListener("dispose",x);const b=i.get(M);b!==void 0&&(i.delete(M),b.dispose())}function S(){t=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:S}}function KT(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&gu("WebGLRenderer: "+s+" extension not supported."),l}}}function JT(o,t,i,s){const l={},c=new WeakMap;function f(S){const _=S.target;_.index!==null&&t.remove(_.index);for(const b in _.attributes)t.remove(_.attributes[b]);_.removeEventListener("dispose",f),delete l[_.id];const M=c.get(_);M&&(t.remove(M),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(S,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function m(S){const _=S.attributes;for(const M in _)t.update(_[M],o.ARRAY_BUFFER)}function d(S){const _=[],M=S.index,b=S.attributes.position;let R=0;if(b===void 0)return;if(M!==null){const A=M.array;R=M.version;for(let N=0,U=A.length;N<U;N+=3){const F=A[N+0],P=A[N+1],I=A[N+2];_.push(F,P,P,I,I,F)}}else{const A=b.array;R=b.version;for(let N=0,U=A.length/3-1;N<U;N+=3){const F=N+0,P=N+1,I=N+2;_.push(F,P,P,I,I,F)}}const y=new(b.count>=65535?ex:tx)(_,1);y.version=R;const g=c.get(S);g&&t.remove(g),c.set(S,y)}function x(S){const _=c.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&d(S)}else d(S);return c.get(S)}return{get:p,update:m,getWireframeAttribute:x}}function $T(o,t,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function m(_,M){o.drawElements(s,M,c,_*f),i.update(M,s,1)}function d(_,M,b){b!==0&&(o.drawElementsInstanced(s,M,c,_*f,b),i.update(M,s,b))}function x(_,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,_,0,b);let y=0;for(let g=0;g<b;g++)y+=M[g];i.update(y,s,1)}function S(_,M,b,R){if(b===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<_.length;g++)d(_[g]/f,M[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,_,0,R,0,b);let g=0;for(let A=0;A<b;A++)g+=M[A]*R[A];i.update(g,s,1)}}this.setMode=l,this.setIndex=p,this.render=m,this.renderInstances=d,this.renderMultiDraw=x,this.renderMultiDrawInstances=S}function t1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=p*(c/3);break;case o.LINES:i.lines+=p*(c/2);break;case o.LINE_STRIP:i.lines+=p*(c-1);break;case o.LINE_LOOP:i.lines+=p*c;break;case o.POINTS:i.points+=p*c;break;default:Ue("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function e1(o,t,i){const s=new WeakMap,l=new ln;function c(f,p,m){const d=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,S=x!==void 0?x.length:0;let _=s.get(p);if(_===void 0||_.count!==S){let J=function(){T.dispose(),s.delete(p),p.removeEventListener("dispose",J)};var M=J;_!==void 0&&_.texture.dispose();const b=p.morphAttributes.position!==void 0,R=p.morphAttributes.normal!==void 0,y=p.morphAttributes.color!==void 0,g=p.morphAttributes.position||[],A=p.morphAttributes.normal||[],N=p.morphAttributes.color||[];let U=0;b===!0&&(U=1),R===!0&&(U=2),y===!0&&(U=3);let F=p.attributes.position.count*U,P=1;F>t.maxTextureSize&&(P=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*P*4*S),T=new Jv(I,F,P,S);T.type=Qi,T.needsUpdate=!0;const L=U*4;for(let G=0;G<S;G++){const X=g[G],$=A[G],tt=N[G],Q=F*P*4*G;for(let z=0;z<X.count;z++){const H=z*L;b===!0&&(l.fromBufferAttribute(X,z),I[Q+H+0]=l.x,I[Q+H+1]=l.y,I[Q+H+2]=l.z,I[Q+H+3]=0),R===!0&&(l.fromBufferAttribute($,z),I[Q+H+4]=l.x,I[Q+H+5]=l.y,I[Q+H+6]=l.z,I[Q+H+7]=0),y===!0&&(l.fromBufferAttribute(tt,z),I[Q+H+8]=l.x,I[Q+H+9]=l.y,I[Q+H+10]=l.z,I[Q+H+11]=tt.itemSize===4?l.w:1)}}_={count:S,texture:T,size:new re(F,P)},s.set(p,_),p.addEventListener("dispose",J)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<d.length;y++)b+=d[y];const R=p.morphTargetsRelative?1:1-b;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",d)}m.getUniforms().setValue(o,"morphTargetsTexture",_.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}return{update:c}}function n1(o,t,i,s,l){let c=new WeakMap;function f(d){const x=l.render.frame,S=d.geometry,_=t.get(d,S);if(c.get(_)!==x&&(t.update(_),c.set(_,x)),d.isInstancedMesh&&(d.hasEventListener("dispose",m)===!1&&d.addEventListener("dispose",m),c.get(d)!==x&&(i.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&i.update(d.instanceColor,o.ARRAY_BUFFER),c.set(d,x))),d.isSkinnedMesh){const M=d.skeleton;c.get(M)!==x&&(M.update(),c.set(M,x))}return _}function p(){c=new WeakMap}function m(d){const x=d.target;x.removeEventListener("dispose",m),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const i1={[Pv]:"LINEAR_TONE_MAPPING",[Iv]:"REINHARD_TONE_MAPPING",[zv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[Hv]:"AGX_TONE_MAPPING",[Gv]:"NEUTRAL_TONE_MAPPING",[Bv]:"CUSTOM_TONE_MAPPING"};function a1(o,t,i,s,l){const c=new $i(t,i,{type:o,depthBuffer:s,stencilBuffer:l}),f=new $i(t,i,{type:La,depthBuffer:!1,stencilBuffer:!1}),p=new Dn;p.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const m=new qM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Bt(p,m),x=new Cp(-1,1,1,-1,0,1);let S=null,_=null,M=!1,b,R=null,y=[],g=!1;this.setSize=function(A,N){c.setSize(A,N),f.setSize(A,N);for(let U=0;U<y.length;U++){const F=y[U];F.setSize&&F.setSize(A,N)}},this.setEffects=function(A){y=A,g=y.length>0&&y[0].isRenderPass===!0;const N=c.width,U=c.height;for(let F=0;F<y.length;F++){const P=y[F];P.setSize&&P.setSize(N,U)}},this.begin=function(A,N){if(M||A.toneMapping===Ji&&y.length===0)return!1;if(R=N,N!==null){const U=N.width,F=N.height;(c.width!==U||c.height!==F)&&this.setSize(U,F)}return g===!1&&A.setRenderTarget(c),b=A.toneMapping,A.toneMapping=Ji,!0},this.hasRenderPass=function(){return g},this.end=function(A,N){A.toneMapping=b,M=!0;let U=c,F=f;for(let P=0;P<y.length;P++){const I=y[P];if(I.enabled!==!1&&(I.render(A,F,U,N),I.needsSwap!==!1)){const T=U;U=F,F=T}}if(S!==A.outputColorSpace||_!==A.toneMapping){S=A.outputColorSpace,_=A.toneMapping,m.defines={},Le.getTransfer(S)===Ve&&(m.defines.SRGB_TRANSFER="");const P=i1[_];P&&(m.defines[P]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,A.setRenderTarget(R),A.render(d,x),R=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),m.dispose()}}const hx=new jn,cp=new pl(1,1),dx=new Jv,px=new EM,mx=new nx,rv=[],ov=[],lv=new Float32Array(16),cv=new Float32Array(9),uv=new Float32Array(4);function io(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=rv[l];if(c===void 0&&(c=new Float32Array(l),rv[l]=c),t!==0){s.toArray(c,0);for(let f=1,p=0;f!==t;++f)p+=i,o[f].toArray(c,p)}return c}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function Tn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function bu(o,t){let i=ov[t];i===void 0&&(i=new Int32Array(t),ov[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function s1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function r1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),Tn(i,t)}}function o1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),Tn(i,t)}}function l1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),Tn(i,t)}}function c1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),Tn(i,t)}else{if(bn(i,s))return;uv.set(s),o.uniformMatrix2fv(this.addr,!1,uv),Tn(i,s)}}function u1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),Tn(i,t)}else{if(bn(i,s))return;cv.set(s),o.uniformMatrix3fv(this.addr,!1,cv),Tn(i,s)}}function f1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),Tn(i,t)}else{if(bn(i,s))return;lv.set(s),o.uniformMatrix4fv(this.addr,!1,lv),Tn(i,s)}}function h1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function d1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),Tn(i,t)}}function p1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),Tn(i,t)}}function m1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),Tn(i,t)}}function g1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function _1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),Tn(i,t)}}function v1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),Tn(i,t)}}function x1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),Tn(i,t)}}function S1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(cp.compareFunction=i.isReversedDepthBuffer()?Sp:xp,c=cp):c=hx,i.setTexture2D(t||c,l)}function y1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||px,l)}function M1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||mx,l)}function E1(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||dx,l)}function b1(o){switch(o){case 5126:return s1;case 35664:return r1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return f1;case 5124:case 35670:return h1;case 35667:case 35671:return d1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return _1;case 36295:return v1;case 36296:return x1;case 35678:case 36198:case 36298:case 36306:case 35682:return S1;case 35679:case 36299:case 36307:return y1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}function T1(o,t){o.uniform1fv(this.addr,t)}function A1(o,t){const i=io(t,this.size,2);o.uniform2fv(this.addr,i)}function R1(o,t){const i=io(t,this.size,3);o.uniform3fv(this.addr,i)}function C1(o,t){const i=io(t,this.size,4);o.uniform4fv(this.addr,i)}function w1(o,t){const i=io(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function D1(o,t){const i=io(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function U1(o,t){const i=io(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function L1(o,t){o.uniform1iv(this.addr,t)}function N1(o,t){o.uniform2iv(this.addr,t)}function O1(o,t){o.uniform3iv(this.addr,t)}function P1(o,t){o.uniform4iv(this.addr,t)}function I1(o,t){o.uniform1uiv(this.addr,t)}function z1(o,t){o.uniform2uiv(this.addr,t)}function F1(o,t){o.uniform3uiv(this.addr,t)}function B1(o,t){o.uniform4uiv(this.addr,t)}function H1(o,t,i){const s=this.cache,l=t.length,c=bu(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));let f;this.type===o.SAMPLER_2D_SHADOW?f=cp:f=hx;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||f,c[p])}function G1(o,t,i){const s=this.cache,l=t.length,c=bu(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||px,c[f])}function V1(o,t,i){const s=this.cache,l=t.length,c=bu(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||mx,c[f])}function k1(o,t,i){const s=this.cache,l=t.length,c=bu(i,l);bn(s,c)||(o.uniform1iv(this.addr,c),Tn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||dx,c[f])}function X1(o){switch(o){case 5126:return T1;case 35664:return A1;case 35665:return R1;case 35666:return C1;case 35674:return w1;case 35675:return D1;case 35676:return U1;case 5124:case 35670:return L1;case 35667:case 35671:return N1;case 35668:case 35672:return O1;case 35669:case 35673:return P1;case 5125:return I1;case 36294:return z1;case 36295:return F1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return k1}}class W1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=b1(i.type)}}class Y1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=X1(i.type)}}class q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(t,i[p.id],s)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function fv(o,t){o.seq.push(t),o.map[t.id]=t}function j1(o,t,i){const s=o.name,l=s.length;for(dd.lastIndex=0;;){const c=dd.exec(s),f=dd.lastIndex;let p=c[1];const m=c[2]==="]",d=c[3];if(m&&(p=p|0),d===void 0||d==="["&&f+2===l){fv(i,d===void 0?new W1(p,o,t):new Y1(p,o,t));break}else{let S=i.map[p];S===void 0&&(S=new q1(p),fv(i,S)),i=S}}}class hu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=t.getActiveUniform(i,f),m=t.getUniformLocation(i,p.name);j1(p,m,this)}const l=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],m=s[p.id];m.needsUpdate!==!1&&p.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function hv(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const Z1=37297;let Q1=0;function K1(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===t?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const dv=new xe;function J1(o){Le._getMatrix(dv,Le.workingColorSpace,o);const t=`mat3( ${dv.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case pu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return ce("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function pv(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+K1(o.getShaderSource(t),p)}else return c}function $1(o,t){const i=J1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const tA={[Pv]:"Linear",[Iv]:"Reinhard",[zv]:"Cineon",[Fv]:"ACESFilmic",[Hv]:"AgX",[Gv]:"Neutral",[Bv]:"Custom"};function eA(o,t){const i=tA[t];return i===void 0?(ce("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const eu=new k;function nA(){Le.getLuminanceCoefficients(eu);const o=eu.x.toFixed(4),t=eu.y.toFixed(4),i=eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function aA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function sA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),f=c.name;let p=1;c.type===o.FLOAT_MAT2&&(p=2),c.type===o.FLOAT_MAT3&&(p=3),c.type===o.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:o.getAttribLocation(t,f),locationSize:p}}return i}function ll(o){return o!==""}function mv(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gv(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rA=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(o){return o.replace(rA,lA)}const oA=new Map;function lA(o,t){let i=Se[t];if(i===void 0){const s=oA.get(t);if(s!==void 0)i=Se[s],ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return up(i)}const cA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(o){return o.replace(cA,uA)}function uA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function vv(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const fA={[ru]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function hA(o){return fA[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dA={[qs]:"ENVMAP_TYPE_CUBE",[Kr]:"ENVMAP_TYPE_CUBE",[xu]:"ENVMAP_TYPE_CUBE_UV"};function pA(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":dA[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const mA={[Kr]:"ENVMAP_MODE_REFRACTION"};function gA(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":mA[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _A={[Ov]:"ENVMAP_BLENDING_MULTIPLY",[eM]:"ENVMAP_BLENDING_MIX",[nM]:"ENVMAP_BLENDING_ADD"};function vA(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":_A[o.combine]||"ENVMAP_BLENDING_NONE"}function xA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SA(o,t,i,s){const l=o.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const m=hA(i),d=pA(i),x=gA(i),S=vA(i),_=xA(i),M=iA(i),b=aA(c),R=l.createProgram();let y,g,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ll).join(`
`),g.length>0&&(g+=`
`)):(y=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),g=[vv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+d:"",i.envMap?"#define "+x:"",i.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ji?"#define TONE_MAPPING":"",i.toneMapping!==Ji?Se.tonemapping_pars_fragment:"",i.toneMapping!==Ji?eA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Se.colorspace_pars_fragment,$1("linearToOutputTexel",i.outputColorSpace),nA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),f=up(f),f=mv(f,i),f=gv(f,i),p=up(p),p=mv(p,i),p=gv(p,i),f=_v(f),p=_v(p),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",i.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const N=A+y+f,U=A+g+p,F=hv(l,l.VERTEX_SHADER,N),P=hv(l,l.FRAGMENT_SHADER,U);l.attachShader(R,F),l.attachShader(R,P),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function I(G){if(o.debug.checkShaderErrors){const X=l.getProgramInfoLog(R)||"",$=l.getShaderInfoLog(F)||"",tt=l.getShaderInfoLog(P)||"",Q=X.trim(),z=$.trim(),H=tt.trim();let lt=!0,ut=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,F,P);else{const gt=pv(l,F,"vertex"),B=pv(l,P,"fragment");Ue("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Q+`
`+gt+`
`+B)}else Q!==""?ce("WebGLProgram: Program Info Log:",Q):(z===""||H==="")&&(ut=!1);ut&&(G.diagnostics={runnable:lt,programLog:Q,vertexShader:{log:z,prefix:y},fragmentShader:{log:H,prefix:g}})}l.deleteShader(F),l.deleteShader(P),T=new hu(l,R),L=sA(l,R)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let L;this.getAttributes=function(){return L===void 0&&I(this),L};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(R,Z1)),J},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q1++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=P,this}let yA=0;class MA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new EA(t),i.set(t,s)),s}}class EA{constructor(t){this.id=yA++,this.code=t,this.usedTimes=0}}function bA(o,t,i,s,l,c){const f=new Mp,p=new MA,m=new Set,d=[],x=new Map,S=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,L,J,G,X){const $=G.fog,tt=X.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=t.get(T.envMap||Q,z),lt=H&&H.mapping===xu?H.image.height:null,ut=M[T.type];T.precision!==null&&(_=s.getMaxPrecision(T.precision),_!==T.precision&&ce("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const gt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,B=gt!==void 0?gt.length:0;let Z=0;tt.morphAttributes.position!==void 0&&(Z=1),tt.morphAttributes.normal!==void 0&&(Z=2),tt.morphAttributes.color!==void 0&&(Z=3);let mt,At,It,at;if(ut){const De=ji[ut];mt=De.vertexShader,At=De.fragmentShader}else mt=T.vertexShader,At=T.fragmentShader,p.update(T),It=p.getVertexShaderID(T),at=p.getFragmentShaderID(T);const vt=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Yt=X.isInstancedMesh===!0,ee=X.isBatchedMesh===!0,ie=!!T.map,$e=!!T.matcap,ye=!!H,me=!!T.aoMap,Ce=!!T.lightMap,oe=!!T.bumpMap,qe=!!T.normalMap,w=!!T.displacementMap,yt=!!T.emissiveMap,Gt=!!T.metalnessMap,Ut=!!T.roughnessMap,Rt=T.anisotropy>0,O=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,dt=T.sheen>0,St=T.transmission>0,rt=Rt&&!!T.anisotropyMap,kt=O&&!!T.clearcoatMap,Ct=O&&!!T.clearcoatNormalMap,jt=O&&!!T.clearcoatRoughnessMap,te=Y&&!!T.iridescenceMap,Et=Y&&!!T.iridescenceThicknessMap,Mt=dt&&!!T.sheenColorMap,zt=dt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,Ft=!!T.specularColorMap,ge=!!T.specularIntensityMap,j=St&&!!T.transmissionMap,Dt=St&&!!T.thicknessMap,wt=!!T.gradientMap,Ht=!!T.alphaMap,bt=T.alphaTest>0,ht=!!T.alphaHash,Xt=!!T.extensions;let ue=Ji;T.toneMapped&&(vt===null||vt.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Be={shaderID:ut,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:At,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:at,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ee,batchingColor:ee&&X._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&X.instanceColor!==null,instancingMorph:Yt&&X.morphTexture!==null,outputColorSpace:vt===null?o.outputColorSpace:vt.isXRRenderTarget===!0?vt.texture.colorSpace:$r,alphaToCoverage:!!T.alphaToCoverage,map:ie,matcap:$e,envMap:ye,envMapMode:ye&&H.mapping,envMapCubeUVHeight:lt,aoMap:me,lightMap:Ce,bumpMap:oe,normalMap:qe,displacementMap:w,emissiveMap:yt,normalMapObjectSpace:qe&&T.normalMapType===sM,normalMapTangentSpace:qe&&T.normalMapType===Qv,metalnessMap:Gt,roughnessMap:Ut,anisotropy:Rt,anisotropyMap:rt,clearcoat:O,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:E,iridescence:Y,iridescenceMap:te,iridescenceThicknessMap:Et,sheen:dt,sheenColorMap:Mt,sheenRoughnessMap:zt,specularMap:Nt,specularColorMap:Ft,specularIntensityMap:ge,transmission:St,transmissionMap:j,thicknessMap:Dt,gradientMap:wt,opaque:T.transparent===!1&&T.blending===jr&&T.alphaToCoverage===!1,alphaMap:Ht,alphaTest:bt,alphaHash:ht,combine:T.combine,mapUv:ie&&b(T.map.channel),aoMapUv:me&&b(T.aoMap.channel),lightMapUv:Ce&&b(T.lightMap.channel),bumpMapUv:oe&&b(T.bumpMap.channel),normalMapUv:qe&&b(T.normalMap.channel),displacementMapUv:w&&b(T.displacementMap.channel),emissiveMapUv:yt&&b(T.emissiveMap.channel),metalnessMapUv:Gt&&b(T.metalnessMap.channel),roughnessMapUv:Ut&&b(T.roughnessMap.channel),anisotropyMapUv:rt&&b(T.anisotropyMap.channel),clearcoatMapUv:kt&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&b(T.sheenRoughnessMap.channel),specularMapUv:Nt&&b(T.specularMap.channel),specularColorMapUv:Ft&&b(T.specularColorMap.channel),specularIntensityMapUv:ge&&b(T.specularIntensityMap.channel),transmissionMapUv:j&&b(T.transmissionMap.channel),thicknessMapUv:Dt&&b(T.thicknessMap.channel),alphaMapUv:Ht&&b(T.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(qe||Rt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!tt.attributes.uv&&(ie||Ht),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||tt.attributes.normal===void 0&&qe===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Tt,skinning:X.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Z,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:ie&&T.map.isVideoTexture===!0&&Le.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:yt&&T.emissiveMap.isVideoTexture===!0&&Le.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Zi,flipSided:T.side===qn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&T.extensions.multiDraw===!0||ee)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Be.vertexUv1s=m.has(1),Be.vertexUv2s=m.has(2),Be.vertexUv3s=m.has(3),m.clear(),Be}function y(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const J in T.defines)L.push(J),L.push(T.defines[J]);return T.isRawShaderMaterial===!1&&(g(L,T),A(L,T),L.push(o.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function g(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function A(T,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),T.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),T.push(f.mask)}function N(T){const L=M[T.type];let J;if(L){const G=ji[L];J=XM.clone(G.uniforms)}else J=T.uniforms;return J}function U(T,L){let J=x.get(L);return J!==void 0?++J.usedTimes:(J=new SA(o,L,T,l),d.push(J),x.set(L,J)),J}function F(T){if(--T.usedTimes===0){const L=d.indexOf(T);d[L]=d[d.length-1],d.pop(),x.delete(T.cacheKey),T.destroy()}}function P(T){p.remove(T)}function I(){p.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:N,acquireProgram:U,releaseProgram:F,releaseShaderCache:P,programs:d,dispose:I}}function TA(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let p=o.get(f);return p===void 0&&(p={},o.set(f,p)),p}function s(f){o.delete(f)}function l(f,p,m){o.get(f)[p]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function AA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function xv(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Sv(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function p(_,M,b,R,y,g){let A=o[t];return A===void 0?(A={id:_.id,object:_,geometry:M,material:b,materialVariant:f(_),groupOrder:R,renderOrder:_.renderOrder,z:y,group:g},o[t]=A):(A.id=_.id,A.object=_,A.geometry=M,A.material=b,A.materialVariant=f(_),A.groupOrder=R,A.renderOrder=_.renderOrder,A.z=y,A.group=g),t++,A}function m(_,M,b,R,y,g){const A=p(_,M,b,R,y,g);b.transmission>0?s.push(A):b.transparent===!0?l.push(A):i.push(A)}function d(_,M,b,R,y,g){const A=p(_,M,b,R,y,g);b.transmission>0?s.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function x(_,M){i.length>1&&i.sort(_||AA),s.length>1&&s.sort(M||xv),l.length>1&&l.sort(M||xv)}function S(){for(let _=t,M=o.length;_<M;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:d,finish:S,sort:x}}function RA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let f;return c===void 0?(f=new Sv,o.set(s,[f])):l>=c.length?(f=new Sv,c.push(f)):f=c[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function CA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new k,color:new Te};break;case"SpotLight":i={position:new k,direction:new k,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new k,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new k,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new k,halfWidth:new k,halfHeight:new k};break}return o[t.id]=i,i}}}function wA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let DA=0;function UA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function LA(o){const t=new CA,i=wA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)s.probe.push(new k);const l=new k,c=new Qe,f=new Qe;function p(d){let x=0,S=0,_=0;for(let L=0;L<9;L++)s.probe[L].set(0,0,0);let M=0,b=0,R=0,y=0,g=0,A=0,N=0,U=0,F=0,P=0,I=0;d.sort(UA);for(let L=0,J=d.length;L<J;L++){const G=d[L],X=G.color,$=G.intensity,tt=G.distance;let Q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Jr?Q=G.shadow.map.texture:Q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)x+=X.r*$,S+=X.g*$,_+=X.b*$;else if(G.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(G.sh.coefficients[z],$);I++}else if(G.isDirectionalLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,lt=i.get(G);lt.shadowIntensity=H.intensity,lt.shadowBias=H.bias,lt.shadowNormalBias=H.normalBias,lt.shadowRadius=H.radius,lt.shadowMapSize=H.mapSize,s.directionalShadow[M]=lt,s.directionalShadowMap[M]=Q,s.directionalShadowMatrix[M]=G.shadow.matrix,A++}s.directional[M]=z,M++}else if(G.isSpotLight){const z=t.get(G);z.position.setFromMatrixPosition(G.matrixWorld),z.color.copy(X).multiplyScalar($),z.distance=tt,z.coneCos=Math.cos(G.angle),z.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),z.decay=G.decay,s.spot[R]=z;const H=G.shadow;if(G.map&&(s.spotLightMap[F]=G.map,F++,H.updateMatrices(G),G.castShadow&&P++),s.spotLightMatrix[R]=H.matrix,G.castShadow){const lt=i.get(G);lt.shadowIntensity=H.intensity,lt.shadowBias=H.bias,lt.shadowNormalBias=H.normalBias,lt.shadowRadius=H.radius,lt.shadowMapSize=H.mapSize,s.spotShadow[R]=lt,s.spotShadowMap[R]=Q,U++}R++}else if(G.isRectAreaLight){const z=t.get(G);z.color.copy(X).multiplyScalar($),z.halfWidth.set(G.width*.5,0,0),z.halfHeight.set(0,G.height*.5,0),s.rectArea[y]=z,y++}else if(G.isPointLight){const z=t.get(G);if(z.color.copy(G.color).multiplyScalar(G.intensity),z.distance=G.distance,z.decay=G.decay,G.castShadow){const H=G.shadow,lt=i.get(G);lt.shadowIntensity=H.intensity,lt.shadowBias=H.bias,lt.shadowNormalBias=H.normalBias,lt.shadowRadius=H.radius,lt.shadowMapSize=H.mapSize,lt.shadowCameraNear=H.camera.near,lt.shadowCameraFar=H.camera.far,s.pointShadow[b]=lt,s.pointShadowMap[b]=Q,s.pointShadowMatrix[b]=G.shadow.matrix,N++}s.point[b]=z,b++}else if(G.isHemisphereLight){const z=t.get(G);z.skyColor.copy(G.color).multiplyScalar($),z.groundColor.copy(G.groundColor).multiplyScalar($),s.hemi[g]=z,g++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=S,s.ambient[2]=_;const T=s.hash;(T.directionalLength!==M||T.pointLength!==b||T.spotLength!==R||T.rectAreaLength!==y||T.hemiLength!==g||T.numDirectionalShadows!==A||T.numPointShadows!==N||T.numSpotShadows!==U||T.numSpotMaps!==F||T.numLightProbes!==I)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=g,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+F-P,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=I,T.directionalLength=M,T.pointLength=b,T.spotLength=R,T.rectAreaLength=y,T.hemiLength=g,T.numDirectionalShadows=A,T.numPointShadows=N,T.numSpotShadows=U,T.numSpotMaps=F,T.numLightProbes=I,s.version=DA++)}function m(d,x){let S=0,_=0,M=0,b=0,R=0;const y=x.matrixWorldInverse;for(let g=0,A=d.length;g<A;g++){const N=d[g];if(N.isDirectionalLight){const U=s.directional[S];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(N.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const U=s.point[_];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const U=s.hemi[R];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(y),R++}}}return{setup:p,setupView:m,state:s}}function yv(o){const t=new LA(o),i=[],s=[];function l(x){d.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function p(){t.setup(i)}function m(x){t.setupView(i,x)}const d={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:d,setupLights:p,setupLightsView:m,pushLight:c,pushShadow:f}}function NA(o){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let p;return f===void 0?(p=new yv(o),t.set(l,[p])):c>=f.length?(p=new yv(o),f.push(p)):p=f[c],p}function s(){t=new WeakMap}return{get:i,dispose:s}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,IA=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],zA=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Mv=new Qe,il=new k,pd=new k;function FA(o,t,i){let s=new Ep;const l=new re,c=new re,f=new ln,p=new ZM,m=new QM,d={},x=i.maxTextureSize,S={[gs]:qn,[qn]:gs,[Zi]:Zi},_=new na({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:OA,fragmentShader:PA}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const b=new Dn;b.setAttribute("position",new ta(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Bt(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let g=this.type;this.render=function(P,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Nv&&(ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const L=o.getRenderTarget(),J=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),X=o.state;X.setBlending(Da),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const $=g!==this.type;$&&I.traverse(function(tt){tt.material&&(Array.isArray(tt.material)?tt.material.forEach(Q=>Q.needsUpdate=!0):tt.material.needsUpdate=!0)});for(let tt=0,Q=P.length;tt<Q;tt++){const z=P[tt],H=z.shadow;if(H===void 0){ce("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const lt=H.getFrameExtents();l.multiply(lt),c.copy(H.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/lt.x),l.x=c.x*lt.x,H.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/lt.y),l.y=c.y*lt.y,H.mapSize.y=c.y));const ut=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ut,H.map===null||$===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ol){if(z.isPointLight){ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new $i(l.x,l.y,{format:Jr,type:La,minFilter:Hn,magFilter:Hn,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new pl(l.x,l.y,Qi),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Na,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else z.isPointLight?(H.map=new fx(l.x),H.map.depthTexture=new VM(l.x,ea)):(H.map=new $i(l.x,l.y),H.map.depthTexture=new pl(l.x,l.y,ea)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Na,this.type===ru?(H.map.depthTexture.compareFunction=ut?Sp:xp,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const gt=H.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<gt;B++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,B),o.clear();else{B===0&&(o.setRenderTarget(H.map),o.clear());const Z=H.getViewport(B);f.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),X.viewport(f)}if(z.isPointLight){const Z=H.camera,mt=H.matrix,At=z.distance||Z.far;At!==Z.far&&(Z.far=At,Z.updateProjectionMatrix()),il.setFromMatrixPosition(z.matrixWorld),Z.position.copy(il),pd.copy(Z.position),pd.add(IA[B]),Z.up.copy(zA[B]),Z.lookAt(pd),Z.updateMatrixWorld(),mt.makeTranslation(-il.x,-il.y,-il.z),Mv.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Mv,Z.coordinateSystem,Z.reversedDepth)}else H.updateMatrices(z);s=H.getFrustum(),U(I,T,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===ol&&A(H,T),H.needsUpdate=!1}g=this.type,y.needsUpdate=!1,o.setRenderTarget(L,J,G)};function A(P,I){const T=t.update(R);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new $i(l.x,l.y,{format:Jr,type:La})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(I,null,T,_,R,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(I,null,T,M,R,null)}function N(P,I,T,L){let J=null;const G=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)J=G;else if(J=T.isPointLight===!0?m:p,o.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=J.uuid,$=I.uuid;let tt=d[X];tt===void 0&&(tt={},d[X]=tt);let Q=tt[$];Q===void 0&&(Q=J.clone(),tt[$]=Q,I.addEventListener("dispose",F)),J=Q}if(J.visible=I.visible,J.wireframe=I.wireframe,L===ol?J.side=I.shadowSide!==null?I.shadowSide:I.side:J.side=I.shadowSide!==null?I.shadowSide:S[I.side],J.alphaMap=I.alphaMap,J.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,J.map=I.map,J.clipShadows=I.clipShadows,J.clippingPlanes=I.clippingPlanes,J.clipIntersection=I.clipIntersection,J.displacementMap=I.displacementMap,J.displacementScale=I.displacementScale,J.displacementBias=I.displacementBias,J.wireframeLinewidth=I.wireframeLinewidth,J.linewidth=I.linewidth,T.isPointLight===!0&&J.isMeshDistanceMaterial===!0){const X=o.properties.get(J);X.light=T}return J}function U(P,I,T,L,J){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&J===ol)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const $=t.update(P),tt=P.material;if(Array.isArray(tt)){const Q=$.groups;for(let z=0,H=Q.length;z<H;z++){const lt=Q[z],ut=tt[lt.materialIndex];if(ut&&ut.visible){const gt=N(P,ut,L,J);P.onBeforeShadow(o,P,I,T,$,gt,lt),o.renderBufferDirect(T,null,$,gt,P,lt),P.onAfterShadow(o,P,I,T,$,gt,lt)}}}else if(tt.visible){const Q=N(P,tt,L,J);P.onBeforeShadow(o,P,I,T,$,Q,null),o.renderBufferDirect(T,null,$,Q,P,null),P.onAfterShadow(o,P,I,T,$,Q,null)}}const X=P.children;for(let $=0,tt=X.length;$<tt;$++)U(X[$],I,T,L,J)}function F(P){P.target.removeEventListener("dispose",F);for(const T in d){const L=d[T],J=P.target.uuid;J in L&&(L[J].dispose(),delete L[J])}}}function BA(o,t){function i(){let j=!1;const Dt=new ln;let wt=null;const Ht=new ln(0,0,0,0);return{setMask:function(bt){wt!==bt&&!j&&(o.colorMask(bt,bt,bt,bt),wt=bt)},setLocked:function(bt){j=bt},setClear:function(bt,ht,Xt,ue,Be){Be===!0&&(bt*=ue,ht*=ue,Xt*=ue),Dt.set(bt,ht,Xt,ue),Ht.equals(Dt)===!1&&(o.clearColor(bt,ht,Xt,ue),Ht.copy(Dt))},reset:function(){j=!1,wt=null,Ht.set(-1,0,0,0)}}}function s(){let j=!1,Dt=!1,wt=null,Ht=null,bt=null;return{setReversed:function(ht){if(Dt!==ht){const Xt=t.get("EXT_clip_control");ht?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),Dt=ht;const ue=bt;bt=null,this.setClear(ue)}},getReversed:function(){return Dt},setTest:function(ht){ht?vt(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(ht){wt!==ht&&!j&&(o.depthMask(ht),wt=ht)},setFunc:function(ht){if(Dt&&(ht=mM[ht]),Ht!==ht){switch(ht){case Sd:o.depthFunc(o.NEVER);break;case yd:o.depthFunc(o.ALWAYS);break;case Md:o.depthFunc(o.LESS);break;case Qr:o.depthFunc(o.LEQUAL);break;case Ed:o.depthFunc(o.EQUAL);break;case bd:o.depthFunc(o.GEQUAL);break;case Td:o.depthFunc(o.GREATER);break;case Ad:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ht=ht}},setLocked:function(ht){j=ht},setClear:function(ht){bt!==ht&&(bt=ht,Dt&&(ht=1-ht),o.clearDepth(ht))},reset:function(){j=!1,wt=null,Ht=null,bt=null,Dt=!1}}}function l(){let j=!1,Dt=null,wt=null,Ht=null,bt=null,ht=null,Xt=null,ue=null,Be=null;return{setTest:function(De){j||(De?vt(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(De){Dt!==De&&!j&&(o.stencilMask(De),Dt=De)},setFunc:function(De,Gn,Ri){(wt!==De||Ht!==Gn||bt!==Ri)&&(o.stencilFunc(De,Gn,Ri),wt=De,Ht=Gn,bt=Ri)},setOp:function(De,Gn,Ri){(ht!==De||Xt!==Gn||ue!==Ri)&&(o.stencilOp(De,Gn,Ri),ht=De,Xt=Gn,ue=Ri)},setLocked:function(De){j=De},setClear:function(De){Be!==De&&(o.clearStencil(De),Be=De)},reset:function(){j=!1,Dt=null,wt=null,Ht=null,bt=null,ht=null,Xt=null,ue=null,Be=null}}}const c=new i,f=new s,p=new l,m=new WeakMap,d=new WeakMap;let x={},S={},_=new WeakMap,M=[],b=null,R=!1,y=null,g=null,A=null,N=null,U=null,F=null,P=null,I=new Te(0,0,0),T=0,L=!1,J=null,G=null,X=null,$=null,tt=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const lt=o.getParameter(o.VERSION);lt.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(lt)[1]),z=H>=1):lt.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(lt)[1]),z=H>=2);let ut=null,gt={};const B=o.getParameter(o.SCISSOR_BOX),Z=o.getParameter(o.VIEWPORT),mt=new ln().fromArray(B),At=new ln().fromArray(Z);function It(j,Dt,wt,Ht){const bt=new Uint8Array(4),ht=o.createTexture();o.bindTexture(j,ht),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Xt=0;Xt<wt;Xt++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ht,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Dt+Xt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return ht}const at={};at[o.TEXTURE_2D]=It(o.TEXTURE_2D,o.TEXTURE_2D,1),at[o.TEXTURE_CUBE_MAP]=It(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[o.TEXTURE_2D_ARRAY]=It(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),at[o.TEXTURE_3D]=It(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),vt(o.DEPTH_TEST),f.setFunc(Qr),oe(!1),qe(x_),vt(o.CULL_FACE),me(Da);function vt(j){x[j]!==!0&&(o.enable(j),x[j]=!0)}function Tt(j){x[j]!==!1&&(o.disable(j),x[j]=!1)}function Yt(j,Dt){return S[j]!==Dt?(o.bindFramebuffer(j,Dt),S[j]=Dt,j===o.DRAW_FRAMEBUFFER&&(S[o.FRAMEBUFFER]=Dt),j===o.FRAMEBUFFER&&(S[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function ee(j,Dt){let wt=M,Ht=!1;if(j){wt=_.get(Dt),wt===void 0&&(wt=[],_.set(Dt,wt));const bt=j.textures;if(wt.length!==bt.length||wt[0]!==o.COLOR_ATTACHMENT0){for(let ht=0,Xt=bt.length;ht<Xt;ht++)wt[ht]=o.COLOR_ATTACHMENT0+ht;wt.length=bt.length,Ht=!0}}else wt[0]!==o.BACK&&(wt[0]=o.BACK,Ht=!0);Ht&&o.drawBuffers(wt)}function ie(j){return b!==j?(o.useProgram(j),b=j,!0):!1}const $e={[ks]:o.FUNC_ADD,[Fy]:o.FUNC_SUBTRACT,[By]:o.FUNC_REVERSE_SUBTRACT};$e[Hy]=o.MIN,$e[Gy]=o.MAX;const ye={[Vy]:o.ZERO,[ky]:o.ONE,[Xy]:o.SRC_COLOR,[vd]:o.SRC_ALPHA,[Qy]:o.SRC_ALPHA_SATURATE,[jy]:o.DST_COLOR,[Yy]:o.DST_ALPHA,[Wy]:o.ONE_MINUS_SRC_COLOR,[xd]:o.ONE_MINUS_SRC_ALPHA,[Zy]:o.ONE_MINUS_DST_COLOR,[qy]:o.ONE_MINUS_DST_ALPHA,[Ky]:o.CONSTANT_COLOR,[Jy]:o.ONE_MINUS_CONSTANT_COLOR,[$y]:o.CONSTANT_ALPHA,[tM]:o.ONE_MINUS_CONSTANT_ALPHA};function me(j,Dt,wt,Ht,bt,ht,Xt,ue,Be,De){if(j===Da){R===!0&&(Tt(o.BLEND),R=!1);return}if(R===!1&&(vt(o.BLEND),R=!0),j!==zy){if(j!==y||De!==L){if((g!==ks||U!==ks)&&(o.blendEquation(o.FUNC_ADD),g=ks,U=ks),De)switch(j){case jr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case S_:o.blendFunc(o.ONE,o.ONE);break;case y_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case M_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:Ue("WebGLState: Invalid blending: ",j);break}else switch(j){case jr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case S_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case y_:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case M_:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",j);break}A=null,N=null,F=null,P=null,I.set(0,0,0),T=0,y=j,L=De}return}bt=bt||Dt,ht=ht||wt,Xt=Xt||Ht,(Dt!==g||bt!==U)&&(o.blendEquationSeparate($e[Dt],$e[bt]),g=Dt,U=bt),(wt!==A||Ht!==N||ht!==F||Xt!==P)&&(o.blendFuncSeparate(ye[wt],ye[Ht],ye[ht],ye[Xt]),A=wt,N=Ht,F=ht,P=Xt),(ue.equals(I)===!1||Be!==T)&&(o.blendColor(ue.r,ue.g,ue.b,Be),I.copy(ue),T=Be),y=j,L=!1}function Ce(j,Dt){j.side===Zi?Tt(o.CULL_FACE):vt(o.CULL_FACE);let wt=j.side===qn;Dt&&(wt=!wt),oe(wt),j.blending===jr&&j.transparent===!1?me(Da):me(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),f.setFunc(j.depthFunc),f.setTest(j.depthTest),f.setMask(j.depthWrite),c.setMask(j.colorWrite);const Ht=j.stencilWrite;p.setTest(Ht),Ht&&(p.setMask(j.stencilWriteMask),p.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),p.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),yt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?vt(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function oe(j){J!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),J=j)}function qe(j){j!==Py?(vt(o.CULL_FACE),j!==G&&(j===x_?o.cullFace(o.BACK):j===Iy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),G=j}function w(j){j!==X&&(z&&o.lineWidth(j),X=j)}function yt(j,Dt,wt){j?(vt(o.POLYGON_OFFSET_FILL),($!==Dt||tt!==wt)&&($=Dt,tt=wt,f.getReversed()&&(Dt=-Dt),o.polygonOffset(Dt,wt))):Tt(o.POLYGON_OFFSET_FILL)}function Gt(j){j?vt(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function Ut(j){j===void 0&&(j=o.TEXTURE0+Q-1),ut!==j&&(o.activeTexture(j),ut=j)}function Rt(j,Dt,wt){wt===void 0&&(ut===null?wt=o.TEXTURE0+Q-1:wt=ut);let Ht=gt[wt];Ht===void 0&&(Ht={type:void 0,texture:void 0},gt[wt]=Ht),(Ht.type!==j||Ht.texture!==Dt)&&(ut!==wt&&(o.activeTexture(wt),ut=wt),o.bindTexture(j,Dt||at[j]),Ht.type=j,Ht.texture=Dt)}function O(){const j=gt[ut];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(j){Ue("WebGLState:",j)}}function Y(){try{o.compressedTexImage3D(...arguments)}catch(j){Ue("WebGLState:",j)}}function dt(){try{o.texSubImage2D(...arguments)}catch(j){Ue("WebGLState:",j)}}function St(){try{o.texSubImage3D(...arguments)}catch(j){Ue("WebGLState:",j)}}function rt(){try{o.compressedTexSubImage2D(...arguments)}catch(j){Ue("WebGLState:",j)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){Ue("WebGLState:",j)}}function Ct(){try{o.texStorage2D(...arguments)}catch(j){Ue("WebGLState:",j)}}function jt(){try{o.texStorage3D(...arguments)}catch(j){Ue("WebGLState:",j)}}function te(){try{o.texImage2D(...arguments)}catch(j){Ue("WebGLState:",j)}}function Et(){try{o.texImage3D(...arguments)}catch(j){Ue("WebGLState:",j)}}function Mt(j){mt.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),mt.copy(j))}function zt(j){At.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),At.copy(j))}function Nt(j,Dt){let wt=d.get(Dt);wt===void 0&&(wt=new WeakMap,d.set(Dt,wt));let Ht=wt.get(j);Ht===void 0&&(Ht=o.getUniformBlockIndex(Dt,j.name),wt.set(j,Ht))}function Ft(j,Dt){const Ht=d.get(Dt).get(j);m.get(Dt)!==Ht&&(o.uniformBlockBinding(Dt,Ht,j.__bindingPointIndex),m.set(Dt,Ht))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ut=null,gt={},S={},_=new WeakMap,M=[],b=null,R=!1,y=null,g=null,A=null,N=null,U=null,F=null,P=null,I=new Te(0,0,0),T=0,L=!1,J=null,G=null,X=null,$=null,tt=null,mt.set(0,0,o.canvas.width,o.canvas.height),At.set(0,0,o.canvas.width,o.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:vt,disable:Tt,bindFramebuffer:Yt,drawBuffers:ee,useProgram:ie,setBlending:me,setMaterial:Ce,setFlipSided:oe,setCullFace:qe,setLineWidth:w,setPolygonOffset:yt,setScissorTest:Gt,activeTexture:Ut,bindTexture:Rt,unbindTexture:O,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:te,texImage3D:Et,updateUBOMapping:Nt,uniformBlockBinding:Ft,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:St,compressedTexSubImage2D:rt,compressedTexSubImage3D:kt,scissor:Mt,viewport:zt,reset:ge}}function HA(o,t,i,s,l,c,f){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new re,x=new WeakMap;let S;const _=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(O,E){return M?new OffscreenCanvas(O,E):mu("canvas")}function R(O,E,Y){let dt=1;const St=Rt(O);if((St.width>Y||St.height>Y)&&(dt=Y/Math.max(St.width,St.height)),dt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const rt=Math.floor(dt*St.width),kt=Math.floor(dt*St.height);S===void 0&&(S=b(rt,kt));const Ct=E?b(rt,kt):S;return Ct.width=rt,Ct.height=kt,Ct.getContext("2d").drawImage(O,0,0,rt,kt),ce("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+rt+"x"+kt+")."),Ct}else return"data"in O&&ce("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),O;return O}function y(O){return O.generateMipmaps}function g(O){o.generateMipmap(O)}function A(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(O,E,Y,dt,St=!1){if(O!==null){if(o[O]!==void 0)return o[O];ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let rt=E;if(E===o.RED&&(Y===o.FLOAT&&(rt=o.R32F),Y===o.HALF_FLOAT&&(rt=o.R16F),Y===o.UNSIGNED_BYTE&&(rt=o.R8)),E===o.RED_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.R8UI),Y===o.UNSIGNED_SHORT&&(rt=o.R16UI),Y===o.UNSIGNED_INT&&(rt=o.R32UI),Y===o.BYTE&&(rt=o.R8I),Y===o.SHORT&&(rt=o.R16I),Y===o.INT&&(rt=o.R32I)),E===o.RG&&(Y===o.FLOAT&&(rt=o.RG32F),Y===o.HALF_FLOAT&&(rt=o.RG16F),Y===o.UNSIGNED_BYTE&&(rt=o.RG8)),E===o.RG_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RG8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RG16UI),Y===o.UNSIGNED_INT&&(rt=o.RG32UI),Y===o.BYTE&&(rt=o.RG8I),Y===o.SHORT&&(rt=o.RG16I),Y===o.INT&&(rt=o.RG32I)),E===o.RGB_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RGB8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RGB16UI),Y===o.UNSIGNED_INT&&(rt=o.RGB32UI),Y===o.BYTE&&(rt=o.RGB8I),Y===o.SHORT&&(rt=o.RGB16I),Y===o.INT&&(rt=o.RGB32I)),E===o.RGBA_INTEGER&&(Y===o.UNSIGNED_BYTE&&(rt=o.RGBA8UI),Y===o.UNSIGNED_SHORT&&(rt=o.RGBA16UI),Y===o.UNSIGNED_INT&&(rt=o.RGBA32UI),Y===o.BYTE&&(rt=o.RGBA8I),Y===o.SHORT&&(rt=o.RGBA16I),Y===o.INT&&(rt=o.RGBA32I)),E===o.RGB&&(Y===o.UNSIGNED_INT_5_9_9_9_REV&&(rt=o.RGB9_E5),Y===o.UNSIGNED_INT_10F_11F_11F_REV&&(rt=o.R11F_G11F_B10F)),E===o.RGBA){const kt=St?pu:Le.getTransfer(dt);Y===o.FLOAT&&(rt=o.RGBA32F),Y===o.HALF_FLOAT&&(rt=o.RGBA16F),Y===o.UNSIGNED_BYTE&&(rt=kt===Ve?o.SRGB8_ALPHA8:o.RGBA8),Y===o.UNSIGNED_SHORT_4_4_4_4&&(rt=o.RGBA4),Y===o.UNSIGNED_SHORT_5_5_5_1&&(rt=o.RGB5_A1)}return(rt===o.R16F||rt===o.R32F||rt===o.RG16F||rt===o.RG32F||rt===o.RGBA16F||rt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function U(O,E){let Y;return O?E===null||E===ea||E===hl?Y=o.DEPTH24_STENCIL8:E===Qi?Y=o.DEPTH32F_STENCIL8:E===fl&&(Y=o.DEPTH24_STENCIL8,ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ea||E===hl?Y=o.DEPTH_COMPONENT24:E===Qi?Y=o.DEPTH_COMPONENT32F:E===fl&&(Y=o.DEPTH_COMPONENT16),Y}function F(O,E){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Pn&&O.minFilter!==Hn?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function P(O){const E=O.target;E.removeEventListener("dispose",P),T(E),E.isVideoTexture&&x.delete(E)}function I(O){const E=O.target;E.removeEventListener("dispose",I),J(E)}function T(O){const E=s.get(O);if(E.__webglInit===void 0)return;const Y=O.source,dt=_.get(Y);if(dt){const St=dt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&L(O),Object.keys(dt).length===0&&_.delete(Y)}s.remove(O)}function L(O){const E=s.get(O);o.deleteTexture(E.__webglTexture);const Y=O.source,dt=_.get(Y);delete dt[E.__cacheKey],f.memory.textures--}function J(O){const E=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let St=0;St<E.__webglFramebuffer[dt].length;St++)o.deleteFramebuffer(E.__webglFramebuffer[dt][St]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=O.textures;for(let dt=0,St=Y.length;dt<St;dt++){const rt=s.get(Y[dt]);rt.__webglTexture&&(o.deleteTexture(rt.__webglTexture),f.memory.textures--),s.remove(Y[dt])}s.remove(O)}let G=0;function X(){G=0}function $(){const O=G;return O>=l.maxTextures&&ce("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),G+=1,O}function tt(O){const E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function Q(O,E){const Y=s.get(O);if(O.isVideoTexture&&Gt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Y.__version!==O.version){const dt=O.image;if(dt===null)ce("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ce("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Y,O,E);return}}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,Y.__webglTexture,o.TEXTURE0+E)}function z(O,E){const Y=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){at(Y,O,E);return}else O.isExternalTexture&&(Y.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,Y.__webglTexture,o.TEXTURE0+E)}function H(O,E){const Y=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){at(Y,O,E);return}i.bindTexture(o.TEXTURE_3D,Y.__webglTexture,o.TEXTURE0+E)}function lt(O,E){const Y=s.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Y.__version!==O.version){vt(Y,O,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,Y.__webglTexture,o.TEXTURE0+E)}const ut={[Rd]:o.REPEAT,[wa]:o.CLAMP_TO_EDGE,[Cd]:o.MIRRORED_REPEAT},gt={[Pn]:o.NEAREST,[iM]:o.NEAREST_MIPMAP_NEAREST,[Uc]:o.NEAREST_MIPMAP_LINEAR,[Hn]:o.LINEAR,[zh]:o.LINEAR_MIPMAP_NEAREST,[Ws]:o.LINEAR_MIPMAP_LINEAR},B={[rM]:o.NEVER,[fM]:o.ALWAYS,[oM]:o.LESS,[xp]:o.LEQUAL,[lM]:o.EQUAL,[Sp]:o.GEQUAL,[cM]:o.GREATER,[uM]:o.NOTEQUAL};function Z(O,E){if(E.type===Qi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Hn||E.magFilter===zh||E.magFilter===Uc||E.magFilter===Ws||E.minFilter===Hn||E.minFilter===zh||E.minFilter===Uc||E.minFilter===Ws)&&ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,ut[E.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,ut[E.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,ut[E.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,gt[E.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,gt[E.minFilter]),E.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pn||E.minFilter!==Uc&&E.minFilter!==Ws||E.type===Qi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function mt(O,E){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",P));const dt=E.source;let St=_.get(dt);St===void 0&&(St={},_.set(dt,St));const rt=tt(E);if(rt!==O.__cacheKey){St[rt]===void 0&&(St[rt]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,Y=!0),St[rt].usedTimes++;const kt=St[O.__cacheKey];kt!==void 0&&(St[O.__cacheKey].usedTimes--,kt.usedTimes===0&&L(E)),O.__cacheKey=rt,O.__webglTexture=St[rt].texture}return Y}function At(O,E,Y){return Math.floor(Math.floor(O/Y)/E)}function It(O,E,Y,dt){const rt=O.updateRanges;if(rt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,Y,dt,E.data);else{rt.sort((Et,Mt)=>Et.start-Mt.start);let kt=0;for(let Et=1;Et<rt.length;Et++){const Mt=rt[kt],zt=rt[Et],Nt=Mt.start+Mt.count,Ft=At(zt.start,E.width,4),ge=At(Mt.start,E.width,4);zt.start<=Nt+1&&Ft===ge&&At(zt.start+zt.count-1,E.width,4)===Ft?Mt.count=Math.max(Mt.count,zt.start+zt.count-Mt.start):(++kt,rt[kt]=zt)}rt.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Et=0,Mt=rt.length;Et<Mt;Et++){const zt=rt[Et],Nt=Math.floor(zt.start/4),Ft=Math.ceil(zt.count/4),ge=Nt%E.width,j=Math.floor(Nt/E.width),Dt=Ft,wt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,ge,j,Dt,wt,Y,dt,E.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function at(O,E,Y){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const St=mt(O,E),rt=E.source;i.bindTexture(dt,O.__webglTexture,o.TEXTURE0+Y);const kt=s.get(rt);if(rt.version!==kt.__version||St===!0){i.activeTexture(o.TEXTURE0+Y);const Ct=Le.getPrimaries(Le.workingColorSpace),jt=E.colorSpace===ds?null:Le.getPrimaries(E.colorSpace),te=E.colorSpace===ds||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Et=R(E.image,!1,l.maxTextureSize);Et=Ut(E,Et);const Mt=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Nt=N(E.internalFormat,Mt,zt,E.colorSpace,E.isVideoTexture);Z(dt,E);let Ft;const ge=E.mipmaps,j=E.isVideoTexture!==!0,Dt=kt.__version===void 0||St===!0,wt=rt.dataReady,Ht=F(E,Et);if(E.isDepthTexture)Nt=U(E.format===Ys,E.type),Dt&&(j?i.texStorage2D(o.TEXTURE_2D,1,Nt,Et.width,Et.height):i.texImage2D(o.TEXTURE_2D,0,Nt,Et.width,Et.height,0,Mt,zt,null));else if(E.isDataTexture)if(ge.length>0){j&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ht,Nt,ge[0].width,ge[0].height);for(let bt=0,ht=ge.length;bt<ht;bt++)Ft=ge[bt],j?wt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Mt,zt,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,Nt,Ft.width,Ft.height,0,Mt,zt,Ft.data);E.generateMipmaps=!1}else j?(Dt&&i.texStorage2D(o.TEXTURE_2D,Ht,Nt,Et.width,Et.height),wt&&It(E,Et,Mt,zt)):i.texImage2D(o.TEXTURE_2D,0,Nt,Et.width,Et.height,0,Mt,zt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){j&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Nt,ge[0].width,ge[0].height,Et.depth);for(let bt=0,ht=ge.length;bt<ht;bt++)if(Ft=ge[bt],E.format!==Fi)if(Mt!==null)if(j){if(wt)if(E.layerUpdates.size>0){const Xt=$_(Ft.width,Ft.height,E.format,E.type);for(const ue of E.layerUpdates){const Be=Ft.data.subarray(ue*Xt/Ft.data.BYTES_PER_ELEMENT,(ue+1)*Xt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ue,Ft.width,Ft.height,1,Mt,Be)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,Et.depth,Mt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Nt,Ft.width,Ft.height,Et.depth,0,Ft.data,0,0);else ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?wt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ft.width,Ft.height,Et.depth,Mt,zt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Nt,Ft.width,Ft.height,Et.depth,0,Mt,zt,Ft.data)}else{j&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ht,Nt,ge[0].width,ge[0].height);for(let bt=0,ht=ge.length;bt<ht;bt++)Ft=ge[bt],E.format!==Fi?Mt!==null?j?wt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Mt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Nt,Ft.width,Ft.height,0,Ft.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?wt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ft.width,Ft.height,Mt,zt,Ft.data):i.texImage2D(o.TEXTURE_2D,bt,Nt,Ft.width,Ft.height,0,Mt,zt,Ft.data)}else if(E.isDataArrayTexture)if(j){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ht,Nt,Et.width,Et.height,Et.depth),wt)if(E.layerUpdates.size>0){const bt=$_(Et.width,Et.height,E.format,E.type);for(const ht of E.layerUpdates){const Xt=Et.data.subarray(ht*bt/Et.data.BYTES_PER_ELEMENT,(ht+1)*bt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ht,Et.width,Et.height,1,Mt,zt,Xt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,Mt,zt,Et.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Nt,Et.width,Et.height,Et.depth,0,Mt,zt,Et.data);else if(E.isData3DTexture)j?(Dt&&i.texStorage3D(o.TEXTURE_3D,Ht,Nt,Et.width,Et.height,Et.depth),wt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,Mt,zt,Et.data)):i.texImage3D(o.TEXTURE_3D,0,Nt,Et.width,Et.height,Et.depth,0,Mt,zt,Et.data);else if(E.isFramebufferTexture){if(Dt)if(j)i.texStorage2D(o.TEXTURE_2D,Ht,Nt,Et.width,Et.height);else{let bt=Et.width,ht=Et.height;for(let Xt=0;Xt<Ht;Xt++)i.texImage2D(o.TEXTURE_2D,Xt,Nt,bt,ht,0,Mt,zt,null),bt>>=1,ht>>=1}}else if(ge.length>0){if(j&&Dt){const bt=Rt(ge[0]);i.texStorage2D(o.TEXTURE_2D,Ht,Nt,bt.width,bt.height)}for(let bt=0,ht=ge.length;bt<ht;bt++)Ft=ge[bt],j?wt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Mt,zt,Ft):i.texImage2D(o.TEXTURE_2D,bt,Nt,Mt,zt,Ft);E.generateMipmaps=!1}else if(j){if(Dt){const bt=Rt(Et);i.texStorage2D(o.TEXTURE_2D,Ht,Nt,bt.width,bt.height)}wt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,zt,Et)}else i.texImage2D(o.TEXTURE_2D,0,Nt,Mt,zt,Et);y(E)&&g(dt),kt.__version=rt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function vt(O,E,Y){if(E.image.length!==6)return;const dt=mt(O,E),St=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+Y);const rt=s.get(St);if(St.version!==rt.__version||dt===!0){i.activeTexture(o.TEXTURE0+Y);const kt=Le.getPrimaries(Le.workingColorSpace),Ct=E.colorSpace===ds?null:Le.getPrimaries(E.colorSpace),jt=E.colorSpace===ds||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!te&&!Et?Mt[ht]=R(E.image[ht],!0,l.maxCubemapSize):Mt[ht]=Et?E.image[ht].image:E.image[ht],Mt[ht]=Ut(E,Mt[ht]);const zt=Mt[0],Nt=c.convert(E.format,E.colorSpace),Ft=c.convert(E.type),ge=N(E.internalFormat,Nt,Ft,E.colorSpace),j=E.isVideoTexture!==!0,Dt=rt.__version===void 0||dt===!0,wt=St.dataReady;let Ht=F(E,zt);Z(o.TEXTURE_CUBE_MAP,E);let bt;if(te){j&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,zt.width,zt.height);for(let ht=0;ht<6;ht++){bt=Mt[ht].mipmaps;for(let Xt=0;Xt<bt.length;Xt++){const ue=bt[Xt];E.format!==Fi?Nt!==null?j?wt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,ue.width,ue.height,Nt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,ge,ue.width,ue.height,0,ue.data):ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,ue.width,ue.height,Nt,Ft,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,ge,ue.width,ue.height,0,Nt,Ft,ue.data)}}}else{if(bt=E.mipmaps,j&&Dt){bt.length>0&&Ht++;const ht=Rt(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ht,ge,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Et){j?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Nt,Ft,Mt[ht].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Mt[ht].width,Mt[ht].height,0,Nt,Ft,Mt[ht].data);for(let Xt=0;Xt<bt.length;Xt++){const Be=bt[Xt].image[ht].image;j?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Be.width,Be.height,Nt,Ft,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,ge,Be.width,Be.height,0,Nt,Ft,Be.data)}}else{j?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Nt,Ft,Mt[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ge,Nt,Ft,Mt[ht]);for(let Xt=0;Xt<bt.length;Xt++){const ue=bt[Xt];j?wt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Nt,Ft,ue.image[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,ge,Nt,Ft,ue.image[ht])}}}y(E)&&g(o.TEXTURE_CUBE_MAP),rt.__version=St.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function Tt(O,E,Y,dt,St,rt){const kt=c.convert(Y.format,Y.colorSpace),Ct=c.convert(Y.type),jt=N(Y.internalFormat,kt,Ct,Y.colorSpace),te=s.get(E),Et=s.get(Y);if(Et.__renderTarget=E,!te.__hasExternalTextures){const Mt=Math.max(1,E.width>>rt),zt=Math.max(1,E.height>>rt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,rt,jt,Mt,zt,E.depth,0,kt,Ct,null):i.texImage2D(St,rt,jt,Mt,zt,0,kt,Ct,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),yt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,St,Et.__webglTexture,0,w(E)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,St,Et.__webglTexture,rt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(O,E,Y){if(o.bindRenderbuffer(o.RENDERBUFFER,O),E.depthBuffer){const dt=E.depthTexture,St=dt&&dt.isDepthTexture?dt.type:null,rt=U(E.stencilBuffer,St),kt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;yt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,w(E),rt,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,w(E),rt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,rt,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,O)}else{const dt=E.textures;for(let St=0;St<dt.length;St++){const rt=dt[St],kt=c.convert(rt.format,rt.colorSpace),Ct=c.convert(rt.type),jt=N(rt.internalFormat,kt,Ct,rt.colorSpace);yt(E)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,w(E),jt,E.width,E.height):Y?o.renderbufferStorageMultisample(o.RENDERBUFFER,w(E),jt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,jt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function ee(O,E,Y){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",P)),St.__webglTexture===void 0){St.__webglTexture=o.createTexture(),i.bindTexture(o.TEXTURE_CUBE_MAP,St.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Et=c.convert(E.depthTexture.type);let Mt;E.depthTexture.format===Na?Mt=o.DEPTH_COMPONENT24:E.depthTexture.format===Ys&&(Mt=o.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Mt,E.width,E.height,0,te,Et,null)}}else Q(E.depthTexture,0);const rt=St.__webglTexture,kt=w(E),Ct=dt?o.TEXTURE_CUBE_MAP_POSITIVE_X+Y:o.TEXTURE_2D,jt=E.depthTexture.format===Ys?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===Na)yt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,rt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,rt,0);else if(E.depthTexture.format===Ys)yt(E)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,jt,Ct,rt,0,kt):o.framebufferTexture2D(o.FRAMEBUFFER,jt,Ct,rt,0);else throw new Error("Unknown depthTexture format")}function ie(O){const E=s.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){const dt=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",St)};dt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=dt}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)ee(E.__webglFramebuffer[dt],O,dt);else{const dt=O.texture.mipmaps;dt&&dt.length>0?ee(E.__webglFramebuffer[0],O,0):ee(E.__webglFramebuffer,O,0)}else if(Y){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),Yt(E.__webglDepthbuffer[dt],O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,rt)}}else{const dt=O.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Yt(E.__webglDepthbuffer,O,!1);else{const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,rt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,rt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(O,E,Y){const dt=s.get(O);E!==void 0&&Tt(dt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),Y!==void 0&&ie(O)}function ye(O){const E=O.texture,Y=s.get(O),dt=s.get(E);O.addEventListener("dispose",I);const St=O.textures,rt=O.isWebGLCubeRenderTarget===!0,kt=St.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,f.memory.textures++),rt){Y.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ct]=[];for(let jt=0;jt<E.mipmaps.length;jt++)Y.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ct=0;Ct<E.mipmaps.length;Ct++)Y.__webglFramebuffer[Ct]=o.createFramebuffer()}else Y.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,jt=St.length;Ct<jt;Ct++){const te=s.get(St[Ct]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),f.memory.textures++)}if(O.samples>0&&yt(O)===!1){Y.__webglMultisampledFramebuffer=o.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ct=0;Ct<St.length;Ct++){const jt=St[Ct];Y.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct]);const te=c.convert(jt.format,jt.colorSpace),Et=c.convert(jt.type),Mt=N(jt.internalFormat,te,Et,jt.colorSpace,O.isXRRenderTarget===!0),zt=w(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,zt,Mt,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,Y.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=o.createRenderbuffer(),Yt(Y.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(rt){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),Z(o.TEXTURE_CUBE_MAP,E);for(let Ct=0;Ct<6;Ct++)if(E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(Y.__webglFramebuffer[Ct][jt],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else Tt(Y.__webglFramebuffer[Ct],O,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(E)&&g(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(kt){for(let Ct=0,jt=St.length;Ct<jt;Ct++){const te=St[Ct],Et=s.get(te);let Mt=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Mt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,Et.__webglTexture),Z(Mt,te),Tt(Y.__webglFramebuffer,O,te,o.COLOR_ATTACHMENT0+Ct,Mt,0),y(te)&&g(Mt)}i.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ct=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ct,dt.__webglTexture),Z(Ct,E),E.mipmaps&&E.mipmaps.length>0)for(let jt=0;jt<E.mipmaps.length;jt++)Tt(Y.__webglFramebuffer[jt],O,E,o.COLOR_ATTACHMENT0,Ct,jt);else Tt(Y.__webglFramebuffer,O,E,o.COLOR_ATTACHMENT0,Ct,0);y(E)&&g(Ct),i.unbindTexture()}O.depthBuffer&&ie(O)}function me(O){const E=O.textures;for(let Y=0,dt=E.length;Y<dt;Y++){const St=E[Y];if(y(St)){const rt=A(O),kt=s.get(St).__webglTexture;i.bindTexture(rt,kt),g(rt),i.unbindTexture()}}}const Ce=[],oe=[];function qe(O){if(O.samples>0){if(yt(O)===!1){const E=O.textures,Y=O.width,dt=O.height;let St=o.COLOR_BUFFER_BIT;const rt=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(O),Ct=E.length>1;if(Ct)for(let te=0;te<E.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=O.texture.mipmaps;jt&&jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Et=s.get(E[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Et,0)}o.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,St,o.NEAREST),m===!0&&(Ce.length=0,oe.length=0,Ce.push(o.COLOR_ATTACHMENT0+te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ce.push(rt),oe.push(rt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,oe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let te=0;te<E.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,kt.__webglColorRenderbuffer[te]);const Et=s.get(E[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Et,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&m){const E=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function w(O){return Math.min(l.maxSamples,O.samples)}function yt(O){const E=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(O){const E=f.render.frame;x.get(O)!==E&&(x.set(O,E),O.update())}function Ut(O,E){const Y=O.colorSpace,dt=O.format,St=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Y!==$r&&Y!==ds&&(Le.getTransfer(Y)===Ve?(dt!==Fi||St!==pi)&&ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",Y)),E}function Rt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=X,this.setTexture2D=Q,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=lt,this.rebindTextures=$e,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function GA(o,t){function i(s,l=ds){let c;const f=Le.getTransfer(l);if(s===pi)return o.UNSIGNED_BYTE;if(s===pp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===mp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Wv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Yv)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===kv)return o.BYTE;if(s===Xv)return o.SHORT;if(s===fl)return o.UNSIGNED_SHORT;if(s===dp)return o.INT;if(s===ea)return o.UNSIGNED_INT;if(s===Qi)return o.FLOAT;if(s===La)return o.HALF_FLOAT;if(s===qv)return o.ALPHA;if(s===jv)return o.RGB;if(s===Fi)return o.RGBA;if(s===Na)return o.DEPTH_COMPONENT;if(s===Ys)return o.DEPTH_STENCIL;if(s===Zv)return o.RED;if(s===gp)return o.RED_INTEGER;if(s===Jr)return o.RG;if(s===_p)return o.RG_INTEGER;if(s===vp)return o.RGBA_INTEGER;if(s===ou||s===lu||s===cu||s===uu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===ou)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===ou)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===lu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===cu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===uu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wd||s===Dd||s===Ud||s===Ld)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===wd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Dd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ud)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ld)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd||s===Od||s===Pd||s===Id||s===zd||s===Fd||s===Bd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nd||s===Od)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Id)return c.COMPRESSED_R11_EAC;if(s===zd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Fd)return c.COMPRESSED_RG11_EAC;if(s===Bd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Hd||s===Gd||s===Vd||s===kd||s===Xd||s===Wd||s===Yd||s===qd||s===jd||s===Zd||s===Qd||s===Kd||s===Jd||s===$d)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Qd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===$d)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tp||s===ep||s===np)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===tp)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ep)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===np)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ip||s===ap||s===sp||s===rp)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ip)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ap)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===sp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===rp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const VA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new ix(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new na({vertexShader:VA,fragmentShader:kA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Bt(new no(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WA extends js{constructor(t,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",m=1,d=null,x=null,S=null,_=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new XA,g={},A=i.getContextAttributes();let N=null,U=null;const F=[],P=[],I=new re;let T=null;const L=new Ai;L.viewport=new ln;const J=new Ai;J.viewport=new ln;const G=[L,J],X=new nE;let $=null,tt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(at){let vt=F[at];return vt===void 0&&(vt=new Xh,F[at]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(at){let vt=F[at];return vt===void 0&&(vt=new Xh,F[at]=vt),vt.getGripSpace()},this.getHand=function(at){let vt=F[at];return vt===void 0&&(vt=new Xh,F[at]=vt),vt.getHandSpace()};function Q(at){const vt=P.indexOf(at.inputSource);if(vt===-1)return;const Tt=F[vt];Tt!==void 0&&(Tt.update(at.inputSource,at.frame,d||f),Tt.dispatchEvent({type:at.type,data:at.inputSource}))}function z(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",H);for(let at=0;at<F.length;at++){const vt=P[at];vt!==null&&(P[at]=null,F[at].disconnect(vt))}$=null,tt=null,y.reset();for(const at in g)delete g[at];t.setRenderTarget(N),M=null,_=null,S=null,l=null,U=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(at){c=at,s.isPresenting===!0&&ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(at){p=at,s.isPresenting===!0&&ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||f},this.setReferenceSpace=function(at){d=at},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(l,i)),S},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(at){if(l=at,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",z),l.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await i.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Yt=null,ee=null;A.depth&&(ee=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Tt=A.stencil?Ys:Na,Yt=A.stencil?hl:ea);const ie={colorFormat:i.RGBA8,depthFormat:ee,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer(ie),l.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),U=new $i(_.textureWidth,_.textureHeight,{format:Fi,type:pi,depthTexture:new pl(_.textureWidth,_.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:A.stencil,colorSpace:t.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Tt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Tt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new $i(M.framebufferWidth,M.framebufferHeight,{format:Fi,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),d=null,f=await l.requestReferenceSpace(p),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(at){for(let vt=0;vt<at.removed.length;vt++){const Tt=at.removed[vt],Yt=P.indexOf(Tt);Yt>=0&&(P[Yt]=null,F[Yt].disconnect(Tt))}for(let vt=0;vt<at.added.length;vt++){const Tt=at.added[vt];let Yt=P.indexOf(Tt);if(Yt===-1){for(let ie=0;ie<F.length;ie++)if(ie>=P.length){P.push(Tt),Yt=ie;break}else if(P[ie]===null){P[ie]=Tt,Yt=ie;break}if(Yt===-1)break}const ee=F[Yt];ee&&ee.connect(Tt)}}const lt=new k,ut=new k;function gt(at,vt,Tt){lt.setFromMatrixPosition(vt.matrixWorld),ut.setFromMatrixPosition(Tt.matrixWorld);const Yt=lt.distanceTo(ut),ee=vt.projectionMatrix.elements,ie=Tt.projectionMatrix.elements,$e=ee[14]/(ee[10]-1),ye=ee[14]/(ee[10]+1),me=(ee[9]+1)/ee[5],Ce=(ee[9]-1)/ee[5],oe=(ee[8]-1)/ee[0],qe=(ie[8]+1)/ie[0],w=$e*oe,yt=$e*qe,Gt=Yt/(-oe+qe),Ut=Gt*-oe;if(vt.matrixWorld.decompose(at.position,at.quaternion,at.scale),at.translateX(Ut),at.translateZ(Gt),at.matrixWorld.compose(at.position,at.quaternion,at.scale),at.matrixWorldInverse.copy(at.matrixWorld).invert(),ee[10]===-1)at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const Rt=$e+Gt,O=ye+Gt,E=w-Ut,Y=yt+(Yt-Ut),dt=me*ye/O*Rt,St=Ce*ye/O*Rt;at.projectionMatrix.makePerspective(E,Y,dt,St,Rt,O),at.projectionMatrixInverse.copy(at.projectionMatrix).invert()}}function B(at,vt){vt===null?at.matrixWorld.copy(at.matrix):at.matrixWorld.multiplyMatrices(vt.matrixWorld,at.matrix),at.matrixWorldInverse.copy(at.matrixWorld).invert()}this.updateCamera=function(at){if(l===null)return;let vt=at.near,Tt=at.far;y.texture!==null&&(y.depthNear>0&&(vt=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),X.near=J.near=L.near=vt,X.far=J.far=L.far=Tt,($!==X.near||tt!==X.far)&&(l.updateRenderState({depthNear:X.near,depthFar:X.far}),$=X.near,tt=X.far),X.layers.mask=at.layers.mask|6,L.layers.mask=X.layers.mask&-5,J.layers.mask=X.layers.mask&-3;const Yt=at.parent,ee=X.cameras;B(X,Yt);for(let ie=0;ie<ee.length;ie++)B(ee[ie],Yt);ee.length===2?gt(X,L,J):X.projectionMatrix.copy(L.projectionMatrix),Z(at,X,Yt)};function Z(at,vt,Tt){Tt===null?at.matrix.copy(vt.matrixWorld):(at.matrix.copy(Tt.matrixWorld),at.matrix.invert(),at.matrix.multiply(vt.matrixWorld)),at.matrix.decompose(at.position,at.quaternion,at.scale),at.updateMatrixWorld(!0),at.projectionMatrix.copy(vt.projectionMatrix),at.projectionMatrixInverse.copy(vt.projectionMatrixInverse),at.isPerspectiveCamera&&(at.fov=op*2*Math.atan(1/at.projectionMatrix.elements[5]),at.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(at){m=at,_!==null&&(_.fixedFoveation=at),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=at)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(X)},this.getCameraTexture=function(at){return g[at]};let mt=null;function At(at,vt){if(x=vt.getViewerPose(d||f),b=vt,x!==null){const Tt=x.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Yt=!1;Tt.length!==X.cameras.length&&(X.cameras.length=0,Yt=!0);for(let ye=0;ye<Tt.length;ye++){const me=Tt[ye];let Ce=null;if(M!==null)Ce=M.getViewport(me);else{const qe=S.getViewSubImage(_,me);Ce=qe.viewport,ye===0&&(t.setRenderTargetTextures(U,qe.colorTexture,qe.depthStencilTexture),t.setRenderTarget(U))}let oe=G[ye];oe===void 0&&(oe=new Ai,oe.layers.enable(ye),oe.viewport=new ln,G[ye]=oe),oe.matrix.fromArray(me.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(me.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ye===0&&(X.matrix.copy(oe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Yt===!0&&X.cameras.push(oe)}const ee=l.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){S=s.getBinding();const ye=S.getDepthInformation(Tt[0]);ye&&ye.isValid&&ye.texture&&y.init(ye,l.renderState)}if(ee&&ee.includes("camera-access")&&R){t.state.unbindTexture(),S=s.getBinding();for(let ye=0;ye<Tt.length;ye++){const me=Tt[ye].camera;if(me){let Ce=g[me];Ce||(Ce=new ix,g[me]=Ce);const oe=S.getCameraImage(me);Ce.sourceTexture=oe}}}}for(let Tt=0;Tt<F.length;Tt++){const Yt=P[Tt],ee=F[Tt];Yt!==null&&ee!==void 0&&ee.update(Yt,vt,d||f)}mt&&mt(at,vt),vt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:vt}),b=null}const It=new ux;It.setAnimationLoop(At),this.setAnimationLoop=function(at){mt=at},this.dispose=function(){}}}const Hs=new Bi,YA=new Qe;function qA(o,t){function i(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,ax(o)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function l(y,g,A,N,U){g.isMeshBasicMaterial?c(y,g):g.isMeshLambertMaterial?(c(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(c(y,g),S(y,g)):g.isMeshPhongMaterial?(c(y,g),x(y,g),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(c(y,g),_(y,g),g.isMeshPhysicalMaterial&&M(y,g,U)):g.isMeshMatcapMaterial?(c(y,g),b(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),R(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(f(y,g),g.isLineDashedMaterial&&p(y,g)):g.isPointsMaterial?m(y,g,A,N):g.isSpriteMaterial?d(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,i(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===qn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,i(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===qn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,i(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,i(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,i(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const A=t.get(g),N=A.envMap,U=A.envMapRotation;N&&(y.envMap.value=N,Hs.copy(U),Hs.x*=-1,Hs.y*=-1,Hs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Hs.y*=-1,Hs.z*=-1),y.envMapRotation.value.setFromMatrix4(YA.makeRotationFromEuler(Hs)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,i(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,i(g.aoMap,y.aoMapTransform))}function f(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform))}function p(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function m(y,g,A,N){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*A,y.scale.value=N*.5,g.map&&(y.map.value=g.map,i(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,i(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,i(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function x(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function S(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function _(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,i(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,i(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,A){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,i(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,i(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,i(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,i(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,i(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===qn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,i(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,i(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,i(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,i(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,i(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,i(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,i(g.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const A=t.get(g).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function jA(o,t,i,s){let l={},c={},f=[];const p=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,N){const U=N.program;s.uniformBlockBinding(A,U)}function d(A,N){let U=l[A.id];U===void 0&&(b(A),U=x(A),l[A.id]=U,A.addEventListener("dispose",y));const F=N.program;s.updateUBOMapping(A,F);const P=t.render.frame;c[A.id]!==P&&(_(A),c[A.id]=P)}function x(A){const N=S();A.__bindingPointIndex=N;const U=o.createBuffer(),F=A.__size,P=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,F,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,U),U}function S(){for(let A=0;A<p;A++)if(f.indexOf(A)===-1)return f.push(A),A;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const N=l[A.id],U=A.uniforms,F=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let P=0,I=U.length;P<I;P++){const T=Array.isArray(U[P])?U[P]:[U[P]];for(let L=0,J=T.length;L<J;L++){const G=T[L];if(M(G,P,L,F)===!0){const X=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let tt=0;for(let Q=0;Q<$.length;Q++){const z=$[Q],H=R(z);typeof z=="number"||typeof z=="boolean"?(G.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,X+tt,G.__data)):z.isMatrix3?(G.__data[0]=z.elements[0],G.__data[1]=z.elements[1],G.__data[2]=z.elements[2],G.__data[3]=0,G.__data[4]=z.elements[3],G.__data[5]=z.elements[4],G.__data[6]=z.elements[5],G.__data[7]=0,G.__data[8]=z.elements[6],G.__data[9]=z.elements[7],G.__data[10]=z.elements[8],G.__data[11]=0):(z.toArray(G.__data,tt),tt+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,X,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(A,N,U,F){const P=A.value,I=N+"_"+U;if(F[I]===void 0)return typeof P=="number"||typeof P=="boolean"?F[I]=P:F[I]=P.clone(),!0;{const T=F[I];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return F[I]=P,!0}else if(T.equals(P)===!1)return T.copy(P),!0}return!1}function b(A){const N=A.uniforms;let U=0;const F=16;for(let I=0,T=N.length;I<T;I++){const L=Array.isArray(N[I])?N[I]:[N[I]];for(let J=0,G=L.length;J<G;J++){const X=L[J],$=Array.isArray(X.value)?X.value:[X.value];for(let tt=0,Q=$.length;tt<Q;tt++){const z=$[tt],H=R(z),lt=U%F,ut=lt%H.boundary,gt=lt+ut;U+=ut,gt!==0&&F-gt<H.storage&&(U+=F-gt),X.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=U,U+=H.storage}}}const P=U%F;return P>0&&(U+=F-P),A.__size=U,A.__cache={},this}function R(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ce("WebGLRenderer: Unsupported uniform value type.",A),N}function y(A){const N=A.target;N.removeEventListener("dispose",y);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function g(){for(const A in l)o.deleteBuffer(l[A]);f=[],l={},c={}}return{bind:m,update:d,dispose:g}}const ZA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function QA(){return Yi===null&&(Yi=new zM(ZA,16,16,Jr,La),Yi.name="DFG_LUT",Yi.minFilter=Hn,Yi.magFilter=Hn,Yi.wrapS=wa,Yi.wrapT=wa,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class KA{constructor(t={}){const{canvas:i=dM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:d=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:M=pi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const R=M,y=new Set([vp,_p,gp]),g=new Set([pi,ea,fl,hl,pp,mp]),A=new Uint32Array(4),N=new Int32Array(4);let U=null,F=null;const P=[],I=[];let T=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let J=!1;this._outputColorSpace=Ti;let G=0,X=0,$=null,tt=-1,Q=null;const z=new ln,H=new ln;let lt=null;const ut=new Te(0);let gt=0,B=i.width,Z=i.height,mt=1,At=null,It=null;const at=new ln(0,0,B,Z),vt=new ln(0,0,B,Z);let Tt=!1;const Yt=new Ep;let ee=!1,ie=!1;const $e=new Qe,ye=new k,me=new ln,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let oe=!1;function qe(){return $===null?mt:1}let w=s;function yt(D,q){return i.getContext(D,q)}try{const D={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:m,preserveDrawingBuffer:d,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hp}`),i.addEventListener("webglcontextlost",Xt,!1),i.addEventListener("webglcontextrestored",ue,!1),i.addEventListener("webglcontextcreationerror",Be,!1),w===null){const q="webgl2";if(w=yt(q,D),w===null)throw yt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Ue("WebGLRenderer: "+D.message),D}let Gt,Ut,Rt,O,E,Y,dt,St,rt,kt,Ct,jt,te,Et,Mt,zt,Nt,Ft,ge,j,Dt,wt,Ht;function bt(){Gt=new KT(w),Gt.init(),Dt=new GA(w,Gt),Ut=new kT(w,Gt,t,Dt),Rt=new BA(w,Gt),Ut.reversedDepthBuffer&&_&&Rt.buffers.depth.setReversed(!0),O=new t1(w),E=new TA,Y=new HA(w,Gt,Rt,E,Ut,Dt,O),dt=new QT(L),St=new sE(w),wt=new GT(w,St),rt=new JT(w,St,O,wt),kt=new n1(w,rt,St,wt,O),Ft=new e1(w,Ut,Y),Mt=new XT(E),Ct=new bA(L,dt,Gt,Ut,wt,Mt),jt=new qA(L,E),te=new RA,Et=new NA(Gt),Nt=new HT(L,dt,Rt,kt,b,m),zt=new FA(L,kt,Ut),Ht=new jA(w,O,Ut,Rt),ge=new VT(w,Gt,O),j=new $T(w,Gt,O),O.programs=Ct.programs,L.capabilities=Ut,L.extensions=Gt,L.properties=E,L.renderLists=te,L.shadowMap=zt,L.state=Rt,L.info=O}bt(),R!==pi&&(T=new a1(R,i.width,i.height,l,c));const ht=new WA(L,w);this.xr=ht,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const D=Gt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Gt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(D){D!==void 0&&(mt=D,this.setSize(B,Z,!1))},this.getSize=function(D){return D.set(B,Z)},this.setSize=function(D,q,ct=!0){if(ht.isPresenting){ce("WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,Z=q,i.width=Math.floor(D*mt),i.height=Math.floor(q*mt),ct===!0&&(i.style.width=D+"px",i.style.height=q+"px"),T!==null&&T.setSize(i.width,i.height),this.setViewport(0,0,D,q)},this.getDrawingBufferSize=function(D){return D.set(B*mt,Z*mt).floor()},this.setDrawingBufferSize=function(D,q,ct){B=D,Z=q,mt=ct,i.width=Math.floor(D*ct),i.height=Math.floor(q*ct),this.setViewport(0,0,D,q)},this.setEffects=function(D){if(R===pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let q=0;q<D.length;q++)if(D[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(at)},this.setViewport=function(D,q,ct,st){D.isVector4?at.set(D.x,D.y,D.z,D.w):at.set(D,q,ct,st),Rt.viewport(z.copy(at).multiplyScalar(mt).round())},this.getScissor=function(D){return D.copy(vt)},this.setScissor=function(D,q,ct,st){D.isVector4?vt.set(D.x,D.y,D.z,D.w):vt.set(D,q,ct,st),Rt.scissor(H.copy(vt).multiplyScalar(mt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(D){Rt.setScissorTest(Tt=D)},this.setOpaqueSort=function(D){At=D},this.setTransparentSort=function(D){It=D},this.getClearColor=function(D){return D.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor(...arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha(...arguments)},this.clear=function(D=!0,q=!0,ct=!0){let st=0;if(D){let et=!1;if($!==null){const Lt=$.texture.format;et=y.has(Lt)}if(et){const Lt=$.texture.type,Vt=g.has(Lt),Ot=Nt.getClearColor(),Qt=Nt.getClearAlpha(),$t=Ot.r,le=Ot.g,he=Ot.b;Vt?(A[0]=$t,A[1]=le,A[2]=he,A[3]=Qt,w.clearBufferuiv(w.COLOR,0,A)):(N[0]=$t,N[1]=le,N[2]=he,N[3]=Qt,w.clearBufferiv(w.COLOR,0,N))}else st|=w.COLOR_BUFFER_BIT}q&&(st|=w.DEPTH_BUFFER_BIT),ct&&(st|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),st!==0&&w.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Xt,!1),i.removeEventListener("webglcontextrestored",ue,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Nt.dispose(),te.dispose(),Et.dispose(),E.dispose(),dt.dispose(),kt.dispose(),wt.dispose(),Ht.dispose(),Ct.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Qs),ht.removeEventListener("sessionend",Ks),Hi.stop()};function Xt(D){D.preventDefault(),R_("WebGLRenderer: Context Lost."),J=!0}function ue(){R_("WebGLRenderer: Context Restored."),J=!1;const D=O.autoReset,q=zt.enabled,ct=zt.autoUpdate,st=zt.needsUpdate,et=zt.type;bt(),O.autoReset=D,zt.enabled=q,zt.autoUpdate=ct,zt.needsUpdate=st,zt.type=et}function Be(D){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function De(D){const q=D.target;q.removeEventListener("dispose",De),Gn(q)}function Gn(D){Ri(D),E.remove(D)}function Ri(D){const q=E.get(D).programs;q!==void 0&&(q.forEach(function(ct){Ct.releaseProgram(ct)}),D.isShaderMaterial&&Ct.releaseShaderCache(D))}this.renderBufferDirect=function(D,q,ct,st,et,Lt){q===null&&(q=Ce);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,Ot=yl(D,q,ct,st,et);Rt.setMaterial(st,Vt);let Qt=ct.index,$t=1;if(st.wireframe===!0){if(Qt=rt.getWireframeAttribute(ct),Qt===void 0)return;$t=2}const le=ct.drawRange,he=ct.attributes.position;let Wt=le.start*$t,_e=(le.start+le.count)*$t;Lt!==null&&(Wt=Math.max(Wt,Lt.start*$t),_e=Math.min(_e,(Lt.start+Lt.count)*$t)),Qt!==null?(Wt=Math.max(Wt,0),_e=Math.min(_e,Qt.count)):he!=null&&(Wt=Math.max(Wt,0),_e=Math.min(_e,he.count));const tn=_e-Wt;if(tn<0||tn===1/0)return;wt.setup(et,st,Ot,ct,Qt);let en,Ne=ge;if(Qt!==null&&(en=St.get(Qt),Ne=j,Ne.setIndex(en)),et.isMesh)st.wireframe===!0?(Rt.setLineWidth(st.wireframeLinewidth*qe()),Ne.setMode(w.LINES)):Ne.setMode(w.TRIANGLES);else if(et.isLine){let yn=st.linewidth;yn===void 0&&(yn=1),Rt.setLineWidth(yn*qe()),et.isLineSegments?Ne.setMode(w.LINES):et.isLineLoop?Ne.setMode(w.LINE_LOOP):Ne.setMode(w.LINE_STRIP)}else et.isPoints?Ne.setMode(w.POINTS):et.isSprite&&Ne.setMode(w.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)gu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Ne.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const yn=et._multiDrawStarts,Zt=et._multiDrawCounts,Vn=et._multiDrawCount,fe=Qt?St.get(Qt).bytesPerElement:1,kn=E.get(st).currentProgram.getUniforms();for(let ii=0;ii<Vn;ii++)kn.setValue(w,"_gl_DrawID",ii),Ne.render(yn[ii]/fe,Zt[ii])}else if(et.isInstancedMesh)Ne.renderInstances(Wt,tn,et.count);else if(ct.isInstancedBufferGeometry){const yn=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Zt=Math.min(ct.instanceCount,yn);Ne.renderInstances(Wt,tn,Zt)}else Ne.render(Wt,tn)};function ao(D,q,ct){D.transparent===!0&&D.side===Zi&&D.forceSinglePass===!1?(D.side=qn,D.needsUpdate=!0,Oa(D,q,ct),D.side=gs,D.needsUpdate=!0,Oa(D,q,ct),D.side=Zi):Oa(D,q,ct)}this.compile=function(D,q,ct=null){ct===null&&(ct=D),F=Et.get(ct),F.init(q),I.push(F),ct.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(F.pushLight(et),et.castShadow&&F.pushShadow(et))}),D!==ct&&D.traverseVisible(function(et){et.isLight&&et.layers.test(q.layers)&&(F.pushLight(et),et.castShadow&&F.pushShadow(et))}),F.setupLights();const st=new Set;return D.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const Lt=et.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const Ot=Lt[Vt];ao(Ot,ct,et),st.add(Ot)}else ao(Lt,ct,et),st.add(Lt)}),F=I.pop(),st},this.compileAsync=function(D,q,ct=null){const st=this.compile(D,q,ct);return new Promise(et=>{function Lt(){if(st.forEach(function(Vt){E.get(Vt).currentProgram.isReady()&&st.delete(Vt)}),st.size===0){et(D);return}setTimeout(Lt,10)}Gt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let Zs=null;function vl(D){Zs&&Zs(D)}function Qs(){Hi.stop()}function Ks(){Hi.start()}const Hi=new ux;Hi.setAnimationLoop(vl),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(D){Zs=D,ht.setAnimationLoop(D),D===null?Hi.stop():Hi.start()},ht.addEventListener("sessionstart",Qs),ht.addEventListener("sessionend",Ks),this.render=function(D,q){if(q!==void 0&&q.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(J===!0)return;const ct=ht.enabled===!0&&ht.isPresenting===!0,st=T!==null&&($===null||ct)&&T.begin(L,$);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(q),q=ht.getCamera()),D.isScene===!0&&D.onBeforeRender(L,D,q,$),F=Et.get(D,I.length),F.init(q),I.push(F),$e.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Yt.setFromProjectionMatrix($e,Ki,q.reversedDepth),ie=this.localClippingEnabled,ee=Mt.init(this.clippingPlanes,ie),U=te.get(D,P.length),U.init(),P.push(U),ht.enabled===!0&&ht.isPresenting===!0){const Vt=L.xr.getDepthSensingMesh();Vt!==null&&Js(Vt,q,-1/0,L.sortObjects)}Js(D,q,0,L.sortObjects),U.finish(),L.sortObjects===!0&&U.sort(At,It),oe=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,oe&&Nt.addToRenderList(U,D),this.info.render.frame++,ee===!0&&Mt.beginShadows();const et=F.state.shadowsArray;if(zt.render(et,D,q),ee===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(st&&T.hasRenderPass())===!1){const Vt=U.opaque,Ot=U.transmissive;if(F.setupLights(),q.isArrayCamera){const Qt=q.cameras;if(Ot.length>0)for(let $t=0,le=Qt.length;$t<le;$t++){const he=Qt[$t];fn(Vt,Ot,D,he)}oe&&Nt.render(D);for(let $t=0,le=Qt.length;$t<le;$t++){const he=Qt[$t];Ci(U,D,he,he.viewport)}}else Ot.length>0&&fn(Vt,Ot,D,q),oe&&Nt.render(D),Ci(U,D,q)}$!==null&&X===0&&(Y.updateMultisampleRenderTarget($),Y.updateRenderTargetMipmap($)),st&&T.end(L),D.isScene===!0&&D.onAfterRender(L,D,q),wt.resetDefaultState(),tt=-1,Q=null,I.pop(),I.length>0?(F=I[I.length-1],ee===!0&&Mt.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,P.pop(),P.length>0?U=P[P.length-1]:U=null};function Js(D,q,ct,st){if(D.visible===!1)return;if(D.layers.test(q.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(q);else if(D.isLight)F.pushLight(D),D.castShadow&&F.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||Yt.intersectsSprite(D)){st&&me.setFromMatrixPosition(D.matrixWorld).applyMatrix4($e);const Vt=kt.update(D),Ot=D.material;Ot.visible&&U.push(D,Vt,Ot,ct,me.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||Yt.intersectsObject(D))){const Vt=kt.update(D),Ot=D.material;if(st&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),me.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),me.copy(Vt.boundingSphere.center)),me.applyMatrix4(D.matrixWorld).applyMatrix4($e)),Array.isArray(Ot)){const Qt=Vt.groups;for(let $t=0,le=Qt.length;$t<le;$t++){const he=Qt[$t],Wt=Ot[he.materialIndex];Wt&&Wt.visible&&U.push(D,Vt,Wt,ct,me.z,he)}}else Ot.visible&&U.push(D,Vt,Ot,ct,me.z,null)}}const Lt=D.children;for(let Vt=0,Ot=Lt.length;Vt<Ot;Vt++)Js(Lt[Vt],q,ct,st)}function Ci(D,q,ct,st){const{opaque:et,transmissive:Lt,transparent:Vt}=D;F.setupLightsView(ct),ee===!0&&Mt.setGlobalState(L.clippingPlanes,ct),st&&Rt.viewport(z.copy(st)),et.length>0&&Sn(et,q,ct),Lt.length>0&&Sn(Lt,q,ct),Vt.length>0&&Sn(Vt,q,ct),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function fn(D,q,ct,st){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[st.id]===void 0){const Wt=Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[st.id]=new $i(1,1,{generateMipmaps:!0,type:Wt?La:pi,minFilter:Ws,samples:Ut.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace})}const Lt=F.state.transmissionRenderTarget[st.id],Vt=st.viewport||z;Lt.setSize(Vt.z*L.transmissionResolutionScale,Vt.w*L.transmissionResolutionScale);const Ot=L.getRenderTarget(),Qt=L.getActiveCubeFace(),$t=L.getActiveMipmapLevel();L.setRenderTarget(Lt),L.getClearColor(ut),gt=L.getClearAlpha(),gt<1&&L.setClearColor(16777215,.5),L.clear(),oe&&Nt.render(ct);const le=L.toneMapping;L.toneMapping=Ji;const he=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),F.setupLightsView(st),ee===!0&&Mt.setGlobalState(L.clippingPlanes,st),Sn(D,ct,st),Y.updateMultisampleRenderTarget(Lt),Y.updateRenderTargetMipmap(Lt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let _e=0,tn=q.length;_e<tn;_e++){const en=q[_e],{object:Ne,geometry:yn,material:Zt,group:Vn}=en;if(Zt.side===Zi&&Ne.layers.test(st.layers)){const fe=Zt.side;Zt.side=qn,Zt.needsUpdate=!0,ia(Ne,ct,st,yn,Zt,Vn),Zt.side=fe,Zt.needsUpdate=!0,Wt=!0}}Wt===!0&&(Y.updateMultisampleRenderTarget(Lt),Y.updateRenderTargetMipmap(Lt))}L.setRenderTarget(Ot,Qt,$t),L.setClearColor(ut,gt),he!==void 0&&(st.viewport=he),L.toneMapping=le}function Sn(D,q,ct){const st=q.isScene===!0?q.overrideMaterial:null;for(let et=0,Lt=D.length;et<Lt;et++){const Vt=D[et],{object:Ot,geometry:Qt,group:$t}=Vt;let le=Vt.material;le.allowOverride===!0&&st!==null&&(le=st),Ot.layers.test(ct.layers)&&ia(Ot,q,ct,Qt,le,$t)}}function ia(D,q,ct,st,et,Lt){D.onBeforeRender(L,q,ct,st,et,Lt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(L,q,ct,st,D,Lt),et.transparent===!0&&et.side===Zi&&et.forceSinglePass===!1?(et.side=qn,et.needsUpdate=!0,L.renderBufferDirect(ct,q,st,et,D,Lt),et.side=gs,et.needsUpdate=!0,L.renderBufferDirect(ct,q,st,et,D,Lt),et.side=Zi):L.renderBufferDirect(ct,q,st,et,D,Lt),D.onAfterRender(L,q,ct,st,et,Lt)}function Oa(D,q,ct){q.isScene!==!0&&(q=Ce);const st=E.get(D),et=F.state.lights,Lt=F.state.shadowsArray,Vt=et.state.version,Ot=Ct.getParameters(D,et.state,Lt,q,ct),Qt=Ct.getProgramCacheKey(Ot);let $t=st.programs;st.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?q.environment:null,st.fog=q.fog;const le=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;st.envMap=dt.get(D.envMap||st.environment,le),st.envMapRotation=st.environment!==null&&D.envMap===null?q.environmentRotation:D.envMapRotation,$t===void 0&&(D.addEventListener("dispose",De),$t=new Map,st.programs=$t);let he=$t.get(Qt);if(he!==void 0){if(st.currentProgram===he&&st.lightsStateVersion===Vt)return Sl(D,Ot),he}else Ot.uniforms=Ct.getUniforms(D),D.onBeforeCompile(Ot,L),he=Ct.acquireProgram(Ot,Qt),$t.set(Qt,he),st.uniforms=Ot.uniforms;const Wt=st.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Wt.clippingPlanes=Mt.uniform),Sl(D,Ot),st.needsLights=so(D),st.lightsStateVersion=Vt,st.needsLights&&(Wt.ambientLightColor.value=et.state.ambient,Wt.lightProbe.value=et.state.probe,Wt.directionalLights.value=et.state.directional,Wt.directionalLightShadows.value=et.state.directionalShadow,Wt.spotLights.value=et.state.spot,Wt.spotLightShadows.value=et.state.spotShadow,Wt.rectAreaLights.value=et.state.rectArea,Wt.ltc_1.value=et.state.rectAreaLTC1,Wt.ltc_2.value=et.state.rectAreaLTC2,Wt.pointLights.value=et.state.point,Wt.pointLightShadows.value=et.state.pointShadow,Wt.hemisphereLights.value=et.state.hemi,Wt.directionalShadowMatrix.value=et.state.directionalShadowMatrix,Wt.spotLightMatrix.value=et.state.spotLightMatrix,Wt.spotLightMap.value=et.state.spotLightMap,Wt.pointShadowMatrix.value=et.state.pointShadowMatrix),st.currentProgram=he,st.uniformsList=null,he}function xl(D){if(D.uniformsList===null){const q=D.currentProgram.getUniforms();D.uniformsList=hu.seqWithValue(q.seq,D.uniforms)}return D.uniformsList}function Sl(D,q){const ct=E.get(D);ct.outputColorSpace=q.outputColorSpace,ct.batching=q.batching,ct.batchingColor=q.batchingColor,ct.instancing=q.instancing,ct.instancingColor=q.instancingColor,ct.instancingMorph=q.instancingMorph,ct.skinning=q.skinning,ct.morphTargets=q.morphTargets,ct.morphNormals=q.morphNormals,ct.morphColors=q.morphColors,ct.morphTargetsCount=q.morphTargetsCount,ct.numClippingPlanes=q.numClippingPlanes,ct.numIntersection=q.numClipIntersection,ct.vertexAlphas=q.vertexAlphas,ct.vertexTangents=q.vertexTangents,ct.toneMapping=q.toneMapping}function yl(D,q,ct,st,et){q.isScene!==!0&&(q=Ce),Y.resetTextureUnits();const Lt=q.fog,Vt=st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial?q.environment:null,Ot=$===null?L.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:$r,Qt=st.isMeshStandardMaterial||st.isMeshLambertMaterial&&!st.envMap||st.isMeshPhongMaterial&&!st.envMap,$t=dt.get(st.envMap||Vt,Qt),le=st.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,he=!!ct.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!ct.morphAttributes.position,_e=!!ct.morphAttributes.normal,tn=!!ct.morphAttributes.color;let en=Ji;st.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(en=L.toneMapping);const Ne=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,yn=Ne!==void 0?Ne.length:0,Zt=E.get(st),Vn=F.state.lights;if(ee===!0&&(ie===!0||D!==Q)){const dn=D===Q&&st.id===tt;Mt.setState(st,D,dn)}let fe=!1;st.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Vn.state.version||Zt.outputColorSpace!==Ot||et.isBatchedMesh&&Zt.batching===!1||!et.isBatchedMesh&&Zt.batching===!0||et.isBatchedMesh&&Zt.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&Zt.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&Zt.instancing===!1||!et.isInstancedMesh&&Zt.instancing===!0||et.isSkinnedMesh&&Zt.skinning===!1||!et.isSkinnedMesh&&Zt.skinning===!0||et.isInstancedMesh&&Zt.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Zt.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Zt.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Zt.instancingMorph===!1&&et.morphTexture!==null||Zt.envMap!==$t||st.fog===!0&&Zt.fog!==Lt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Mt.numPlanes||Zt.numIntersection!==Mt.numIntersection)||Zt.vertexAlphas!==le||Zt.vertexTangents!==he||Zt.morphTargets!==Wt||Zt.morphNormals!==_e||Zt.morphColors!==tn||Zt.toneMapping!==en||Zt.morphTargetsCount!==yn)&&(fe=!0):(fe=!0,Zt.__version=st.version);let kn=Zt.currentProgram;fe===!0&&(kn=Oa(st,q,et));let ii=!1,wi=!1,ai=!1;const ze=kn.getUniforms(),hn=Zt.uniforms;if(Rt.useProgram(kn.program)&&(ii=!0,wi=!0,ai=!0),st.id!==tt&&(tt=st.id,wi=!0),ii||Q!==D){Rt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),ze.setValue(w,"projectionMatrix",D.projectionMatrix),ze.setValue(w,"viewMatrix",D.matrixWorldInverse);const Di=ze.map.cameraPosition;Di!==void 0&&Di.setValue(w,ye.setFromMatrixPosition(D.matrixWorld)),Ut.logarithmicDepthBuffer&&ze.setValue(w,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&ze.setValue(w,"isOrthographic",D.isOrthographicCamera===!0),Q!==D&&(Q=D,wi=!0,ai=!0)}if(Zt.needsLights&&(Vn.state.directionalShadowMap.length>0&&ze.setValue(w,"directionalShadowMap",Vn.state.directionalShadowMap,Y),Vn.state.spotShadowMap.length>0&&ze.setValue(w,"spotShadowMap",Vn.state.spotShadowMap,Y),Vn.state.pointShadowMap.length>0&&ze.setValue(w,"pointShadowMap",Vn.state.pointShadowMap,Y)),et.isSkinnedMesh){ze.setOptional(w,et,"bindMatrix"),ze.setOptional(w,et,"bindMatrixInverse");const dn=et.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),ze.setValue(w,"boneTexture",dn.boneTexture,Y))}et.isBatchedMesh&&(ze.setOptional(w,et,"batchingTexture"),ze.setValue(w,"batchingTexture",et._matricesTexture,Y),ze.setOptional(w,et,"batchingIdTexture"),ze.setValue(w,"batchingIdTexture",et._indirectTexture,Y),ze.setOptional(w,et,"batchingColorTexture"),et._colorsTexture!==null&&ze.setValue(w,"batchingColorTexture",et._colorsTexture,Y));const Xn=ct.morphAttributes;if((Xn.position!==void 0||Xn.normal!==void 0||Xn.color!==void 0)&&Ft.update(et,ct,kn),(wi||Zt.receiveShadow!==et.receiveShadow)&&(Zt.receiveShadow=et.receiveShadow,ze.setValue(w,"receiveShadow",et.receiveShadow)),(st.isMeshStandardMaterial||st.isMeshLambertMaterial||st.isMeshPhongMaterial)&&st.envMap===null&&q.environment!==null&&(hn.envMapIntensity.value=q.environmentIntensity),hn.dfgLUT!==void 0&&(hn.dfgLUT.value=QA()),wi&&(ze.setValue(w,"toneMappingExposure",L.toneMappingExposure),Zt.needsLights&&_s(hn,ai),Lt&&st.fog===!0&&jt.refreshFogUniforms(hn,Lt),jt.refreshMaterialUniforms(hn,st,mt,Z,F.state.transmissionRenderTarget[D.id]),hu.upload(w,xl(Zt),hn,Y)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(hu.upload(w,xl(Zt),hn,Y),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&ze.setValue(w,"center",et.center),ze.setValue(w,"modelViewMatrix",et.modelViewMatrix),ze.setValue(w,"normalMatrix",et.normalMatrix),ze.setValue(w,"modelMatrix",et.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const dn=st.uniformsGroups;for(let Di=0,aa=dn.length;Di<aa;Di++){const $s=dn[Di];Ht.update($s,kn),Ht.bind($s,kn)}}return kn}function _s(D,q){D.ambientLightColor.needsUpdate=q,D.lightProbe.needsUpdate=q,D.directionalLights.needsUpdate=q,D.directionalLightShadows.needsUpdate=q,D.pointLights.needsUpdate=q,D.pointLightShadows.needsUpdate=q,D.spotLights.needsUpdate=q,D.spotLightShadows.needsUpdate=q,D.rectAreaLights.needsUpdate=q,D.hemisphereLights.needsUpdate=q}function so(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(D,q,ct){const st=E.get(D);st.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),E.get(D.texture).__webglTexture=q,E.get(D.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:ct,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,q){const ct=E.get(D);ct.__webglFramebuffer=q,ct.__useDefaultFramebuffer=q===void 0};const Pa=w.createFramebuffer();this.setRenderTarget=function(D,q=0,ct=0){$=D,G=q,X=ct;let st=null,et=!1,Lt=!1;if(D){const Ot=E.get(D);if(Ot.__useDefaultFramebuffer!==void 0){Rt.bindFramebuffer(w.FRAMEBUFFER,Ot.__webglFramebuffer),z.copy(D.viewport),H.copy(D.scissor),lt=D.scissorTest,Rt.viewport(z),Rt.scissor(H),Rt.setScissorTest(lt),tt=-1;return}else if(Ot.__webglFramebuffer===void 0)Y.setupRenderTarget(D);else if(Ot.__hasExternalTextures)Y.rebindTextures(D,E.get(D.texture).__webglTexture,E.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const le=D.depthTexture;if(Ot.__boundDepthTexture!==le){if(le!==null&&E.has(le)&&(D.width!==le.image.width||D.height!==le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(D)}}const Qt=D.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Lt=!0);const $t=E.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray($t[q])?st=$t[q][ct]:st=$t[q],et=!0):D.samples>0&&Y.useMultisampledRTT(D)===!1?st=E.get(D).__webglMultisampledFramebuffer:Array.isArray($t)?st=$t[ct]:st=$t,z.copy(D.viewport),H.copy(D.scissor),lt=D.scissorTest}else z.copy(at).multiplyScalar(mt).floor(),H.copy(vt).multiplyScalar(mt).floor(),lt=Tt;if(ct!==0&&(st=Pa),Rt.bindFramebuffer(w.FRAMEBUFFER,st)&&Rt.drawBuffers(D,st),Rt.viewport(z),Rt.scissor(H),Rt.setScissorTest(lt),et){const Ot=E.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,ct)}else if(Lt){const Ot=q;for(let Qt=0;Qt<D.textures.length;Qt++){const $t=E.get(D.textures[Qt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Qt,$t.__webglTexture,ct,Ot)}}else if(D!==null&&ct!==0){const Ot=E.get(D.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ot.__webglTexture,ct)}tt=-1},this.readRenderTargetPixels=function(D,q,ct,st,et,Lt,Vt,Ot=0){if(!(D&&D.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Qt=Qt[Vt]),Qt){Rt.bindFramebuffer(w.FRAMEBUFFER,Qt);try{const $t=D.textures[Ot],le=$t.format,he=$t.type;if(D.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ot),!Ut.textureFormatReadable(le)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(he)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=D.width-st&&ct>=0&&ct<=D.height-et&&w.readPixels(q,ct,st,et,Dt.convert(le),Dt.convert(he),Lt)}finally{const $t=$!==null?E.get($).__webglFramebuffer:null;Rt.bindFramebuffer(w.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(D,q,ct,st,et,Lt,Vt,Ot=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qt=E.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Qt=Qt[Vt]),Qt)if(q>=0&&q<=D.width-st&&ct>=0&&ct<=D.height-et){Rt.bindFramebuffer(w.FRAMEBUFFER,Qt);const $t=D.textures[Ot],le=$t.format,he=$t.type;if(D.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ot),!Ut.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Wt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.bufferData(w.PIXEL_PACK_BUFFER,Lt.byteLength,w.STREAM_READ),w.readPixels(q,ct,st,et,Dt.convert(le),Dt.convert(he),0);const _e=$!==null?E.get($).__webglFramebuffer:null;Rt.bindFramebuffer(w.FRAMEBUFFER,_e);const tn=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await pM(w,tn,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Wt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Lt),w.deleteBuffer(Wt),w.deleteSync(tn),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,q=null,ct=0){const st=Math.pow(2,-ct),et=Math.floor(D.image.width*st),Lt=Math.floor(D.image.height*st),Vt=q!==null?q.x:0,Ot=q!==null?q.y:0;Y.setTexture2D(D,0),w.copyTexSubImage2D(w.TEXTURE_2D,ct,0,0,Vt,Ot,et,Lt),Rt.unbindTexture()};const Ia=w.createFramebuffer(),vs=w.createFramebuffer();this.copyTextureToTexture=function(D,q,ct=null,st=null,et=0,Lt=0){let Vt,Ot,Qt,$t,le,he,Wt,_e,tn;const en=D.isCompressedTexture?D.mipmaps[Lt]:D.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Ot=ct.max.y-ct.min.y,Qt=ct.isBox3?ct.max.z-ct.min.z:1,$t=ct.min.x,le=ct.min.y,he=ct.isBox3?ct.min.z:0;else{const hn=Math.pow(2,-et);Vt=Math.floor(en.width*hn),Ot=Math.floor(en.height*hn),D.isDataArrayTexture?Qt=en.depth:D.isData3DTexture?Qt=Math.floor(en.depth*hn):Qt=1,$t=0,le=0,he=0}st!==null?(Wt=st.x,_e=st.y,tn=st.z):(Wt=0,_e=0,tn=0);const Ne=Dt.convert(q.format),yn=Dt.convert(q.type);let Zt;q.isData3DTexture?(Y.setTexture3D(q,0),Zt=w.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Zt=w.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Zt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,q.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,q.unpackAlignment);const Vn=w.getParameter(w.UNPACK_ROW_LENGTH),fe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),kn=w.getParameter(w.UNPACK_SKIP_PIXELS),ii=w.getParameter(w.UNPACK_SKIP_ROWS),wi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,en.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,en.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,$t),w.pixelStorei(w.UNPACK_SKIP_ROWS,le),w.pixelStorei(w.UNPACK_SKIP_IMAGES,he);const ai=D.isDataArrayTexture||D.isData3DTexture,ze=q.isDataArrayTexture||q.isData3DTexture;if(D.isDepthTexture){const hn=E.get(D),Xn=E.get(q),dn=E.get(hn.__renderTarget),Di=E.get(Xn.__renderTarget);Rt.bindFramebuffer(w.READ_FRAMEBUFFER,dn.__webglFramebuffer),Rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let aa=0;aa<Qt;aa++)ai&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,E.get(D).__webglTexture,et,he+aa),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Lt,tn+aa)),w.blitFramebuffer($t,le,Vt,Ot,Wt,_e,Vt,Ot,w.DEPTH_BUFFER_BIT,w.NEAREST);Rt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(et!==0||D.isRenderTargetTexture||E.has(D)){const hn=E.get(D),Xn=E.get(q);Rt.bindFramebuffer(w.READ_FRAMEBUFFER,Ia),Rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,vs);for(let dn=0;dn<Qt;dn++)ai?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,hn.__webglTexture,et,he+dn):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,hn.__webglTexture,et),ze?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Xn.__webglTexture,Lt,tn+dn):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Xn.__webglTexture,Lt),et!==0?w.blitFramebuffer($t,le,Vt,Ot,Wt,_e,Vt,Ot,w.COLOR_BUFFER_BIT,w.NEAREST):ze?w.copyTexSubImage3D(Zt,Lt,Wt,_e,tn+dn,$t,le,Vt,Ot):w.copyTexSubImage2D(Zt,Lt,Wt,_e,$t,le,Vt,Ot);Rt.bindFramebuffer(w.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else ze?D.isDataTexture||D.isData3DTexture?w.texSubImage3D(Zt,Lt,Wt,_e,tn,Vt,Ot,Qt,Ne,yn,en.data):q.isCompressedArrayTexture?w.compressedTexSubImage3D(Zt,Lt,Wt,_e,tn,Vt,Ot,Qt,Ne,en.data):w.texSubImage3D(Zt,Lt,Wt,_e,tn,Vt,Ot,Qt,Ne,yn,en):D.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Lt,Wt,_e,Vt,Ot,Ne,yn,en.data):D.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Lt,Wt,_e,en.width,en.height,Ne,en.data):w.texSubImage2D(w.TEXTURE_2D,Lt,Wt,_e,Vt,Ot,Ne,yn,en);w.pixelStorei(w.UNPACK_ROW_LENGTH,Vn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,kn),w.pixelStorei(w.UNPACK_SKIP_ROWS,ii),w.pixelStorei(w.UNPACK_SKIP_IMAGES,wi),Lt===0&&q.generateMipmaps&&w.generateMipmap(Zt),Rt.unbindTexture()},this.initRenderTarget=function(D){E.get(D).__webglFramebuffer===void 0&&Y.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?Y.setTextureCube(D,0):D.isData3DTexture?Y.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Y.setTexture2DArray(D,0):Y.setTexture2D(D,0),Rt.unbindTexture()},this.resetState=function(){G=0,X=0,$=null,Rt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Ev={type:"change"},wp={type:"start"},gx={type:"end"},nu=new yu,bv=new Ca,JA=Math.cos(70*_M.DEG2RAD),En=new k,ni=2*Math.PI,Ye={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class $A extends cx{constructor(t,i=null){super(t,i),this.state=Ye.NONE,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qr.ROTATE,MIDDLE:qr.DOLLY,RIGHT:qr.PAN},this.touches={ONE:Wr.ROTATE,TWO:Wr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new k,this._lastQuaternion=new wn,this._lastTargetPosition=new k,this._quat=new wn().setFromUnitVectors(t.up,new k(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new J_,this._sphericalDelta=new J_,this._scale=1,this._panOffset=new k,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new k,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=eR.bind(this),this._onPointerDown=tR.bind(this),this._onPointerUp=nR.bind(this),this._onContextMenu=cR.bind(this),this._onMouseWheel=sR.bind(this),this._onKeyDown=rR.bind(this),this._onTouchStart=oR.bind(this),this._onTouchMove=lR.bind(this),this._onMouseDown=iR.bind(this),this._onMouseMove=aR.bind(this),this._interceptControlDown=uR.bind(this),this._interceptControlUp=fR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ev),this.update(),this.state=Ye.NONE}pan(t,i){this._pan(t,i),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const i=this.object.position;En.copy(i).sub(this.target),En.applyQuaternion(this._quat),this._spherical.setFromVector3(En),this.autoRotate&&this.state===Ye.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=ni:s>Math.PI&&(s-=ni),l<-Math.PI?l+=ni:l>Math.PI&&(l-=ni),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(En.setFromSpherical(this._spherical),En.applyQuaternion(this._quatInverse),i.copy(this.target).add(En),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const p=En.length();f=this._clampDistance(p*this._scale);const m=p-f;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const p=new k(this._mouse.x,this._mouse.y,0);p.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const d=new k(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(p),this.object.updateMatrixWorld(),f=En.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(nu.origin.copy(this.object.position),nu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nu.direction))<JA?this.object.lookAt(this.target):(bv.setFromNormalAndCoplanarPoint(this.object.up,this.target),nu.intersectPlane(bv,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(Ev),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ni/60*this.autoRotateSpeed*t:ni/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){En.setFromMatrixColumn(i,0),En.multiplyScalar(-t),this._panOffset.add(En)}_panUp(t,i){this.screenSpacePanning===!0?En.setFromMatrixColumn(i,1):(En.setFromMatrixColumn(i,0),En.crossVectors(this.object.up,En)),En.multiplyScalar(t),this._panOffset.add(En)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;En.copy(l).sub(this.target);let c=En.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,f=s.width,p=s.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/p)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ni*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(ni*this._rotateDelta.x/i.clientHeight),this._rotateUp(ni*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,p=(t.pageY+i.y)*.5;this._updateZoomParameters(f,p)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new re,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function tR(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function eR(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function nR(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(gx),this.state=Ye.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function iR(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ye.DOLLY;break;case qr.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}break;case qr.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ye.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ye.PAN}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(wp)}function aR(o){switch(this.state){case Ye.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ye.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ye.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function sR(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ye.NONE||(o.preventDefault(),this.dispatchEvent(wp),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(gx))}function rR(o){this.enabled!==!1&&this._handleKeyDown(o)}function oR(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Wr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ye.TOUCH_ROTATE;break;case Wr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ye.TOUCH_PAN;break;default:this.state=Ye.NONE}break;case 2:switch(this.touches.TWO){case Wr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ye.TOUCH_DOLLY_PAN;break;case Wr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ye.TOUCH_DOLLY_ROTATE;break;default:this.state=Ye.NONE}break;default:this.state=Ye.NONE}this.state!==Ye.NONE&&this.dispatchEvent(wp)}function lR(o){switch(this._trackPointer(o),this.state){case Ye.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ye.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ye.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ye.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ye.NONE}}function cR(o){this.enabled!==!1&&o.preventDefault()}function uR(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fR(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Gs=new lx,Bn=new k,hs=new k,an=new wn,Tv={X:new k(1,0,0),Y:new k(0,1,0),Z:new k(0,0,1)},gd={type:"change"},Av={type:"mouseDown",mode:null},Rv={type:"mouseUp",mode:null},Cv={type:"objectChange"};class hR extends cx{constructor(t,i=null){super(void 0,i);const s=new vR(this);this._root=s;const l=new xR;this._gizmo=l,s.add(l);const c=new SR;this._plane=c,s.add(c);const f=this;function p(N,U){let F=U;Object.defineProperty(f,N,{get:function(){return F!==void 0?F:U},set:function(P){F!==P&&(F=P,c[N]=P,l[N]=P,f.dispatchEvent({type:N+"-changed",value:P}),f.dispatchEvent(gd))}}),f[N]=U,c[N]=U,l[N]=U}p("camera",t),p("object",void 0),p("enabled",!0),p("axis",null),p("mode","translate"),p("translationSnap",null),p("rotationSnap",null),p("scaleSnap",null),p("space","world"),p("size",1),p("dragging",!1),p("showX",!0),p("showY",!0),p("showZ",!0),p("minX",-1/0),p("maxX",1/0),p("minY",-1/0),p("maxY",1/0),p("minZ",-1/0),p("maxZ",1/0);const m=new k,d=new k,x=new wn,S=new wn,_=new k,M=new wn,b=new k,R=new k,y=new k,g=0,A=new k;p("worldPosition",m),p("worldPositionStart",d),p("worldQuaternion",x),p("worldQuaternionStart",S),p("cameraPosition",_),p("cameraQuaternion",M),p("pointStart",b),p("pointEnd",R),p("rotationAxis",y),p("rotationAngle",g),p("eye",A),this._offset=new k,this._startNorm=new k,this._endNorm=new k,this._cameraScale=new k,this._parentPosition=new k,this._parentQuaternion=new wn,this._parentQuaternionInv=new wn,this._parentScale=new k,this._worldScaleStart=new k,this._worldQuaternionInv=new wn,this._worldScale=new k,this._positionStart=new k,this._quaternionStart=new wn,this._scaleStart=new k,this._getPointer=dR.bind(this),this._onPointerDown=mR.bind(this),this._onPointerHover=pR.bind(this),this._onPointerMove=gR.bind(this),this._onPointerUp=_R.bind(this),i!==null&&this.connect(i)}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.style.touchAction="auto"}getHelper(){return this._root}pointerHover(t){if(this.object===void 0||this.dragging===!0)return;t!==null&&Gs.setFromCamera(t,this.camera);const i=_d(this._gizmo.picker[this.mode],Gs);i?this.axis=i.object.name:this.axis=null}pointerDown(t){if(!(this.object===void 0||this.dragging===!0||t!=null&&t.button!==0)&&this.axis!==null){t!==null&&Gs.setFromCamera(t,this.camera);const i=_d(this._plane,Gs,!0);i&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(i.point).sub(this.worldPositionStart)),this.dragging=!0,Av.mode=this.mode,this.dispatchEvent(Av)}}pointerMove(t){const i=this.axis,s=this.mode,l=this.object;let c=this.space;if(s==="scale"?c="local":(i==="E"||i==="XYZE"||i==="XYZ")&&(c="world"),l===void 0||i===null||this.dragging===!1||t!==null&&t.button!==-1)return;t!==null&&Gs.setFromCamera(t,this.camera);const f=_d(this._plane,Gs,!0);if(f){if(this.pointEnd.copy(f.point).sub(this.worldPositionStart),s==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),c==="local"&&i!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),i.indexOf("X")===-1&&(this._offset.x=0),i.indexOf("Y")===-1&&(this._offset.y=0),i.indexOf("Z")===-1&&(this._offset.z=0),c==="local"&&i!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),l.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(c==="local"&&(l.position.applyQuaternion(an.copy(this._quaternionStart).invert()),i.search("X")!==-1&&(l.position.x=Math.round(l.position.x/this.translationSnap)*this.translationSnap),i.search("Y")!==-1&&(l.position.y=Math.round(l.position.y/this.translationSnap)*this.translationSnap),i.search("Z")!==-1&&(l.position.z=Math.round(l.position.z/this.translationSnap)*this.translationSnap),l.position.applyQuaternion(this._quaternionStart)),c==="world"&&(l.parent&&l.position.add(Bn.setFromMatrixPosition(l.parent.matrixWorld)),i.search("X")!==-1&&(l.position.x=Math.round(l.position.x/this.translationSnap)*this.translationSnap),i.search("Y")!==-1&&(l.position.y=Math.round(l.position.y/this.translationSnap)*this.translationSnap),i.search("Z")!==-1&&(l.position.z=Math.round(l.position.z/this.translationSnap)*this.translationSnap),l.parent&&l.position.sub(Bn.setFromMatrixPosition(l.parent.matrixWorld)))),l.position.x=Math.max(this.minX,Math.min(this.maxX,l.position.x)),l.position.y=Math.max(this.minY,Math.min(this.maxY,l.position.y)),l.position.z=Math.max(this.minZ,Math.min(this.maxZ,l.position.z));else if(s==="scale"){if(i.search("XYZ")!==-1){let p=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(p*=-1),hs.set(p,p,p)}else Bn.copy(this.pointStart),hs.copy(this.pointEnd),Bn.applyQuaternion(this._worldQuaternionInv),hs.applyQuaternion(this._worldQuaternionInv),hs.divide(Bn),i.search("X")===-1&&(hs.x=1),i.search("Y")===-1&&(hs.y=1),i.search("Z")===-1&&(hs.z=1);l.scale.copy(this._scaleStart).multiply(hs),this.scaleSnap&&(i.search("X")!==-1&&(l.scale.x=Math.round(l.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),i.search("Y")!==-1&&(l.scale.y=Math.round(l.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),i.search("Z")!==-1&&(l.scale.z=Math.round(l.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(s==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const p=20/this.worldPosition.distanceTo(Bn.setFromMatrixPosition(this.camera.matrixWorld));let m=!1;i==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(Bn.copy(this.rotationAxis).cross(this.eye))*p):(i==="X"||i==="Y"||i==="Z")&&(this.rotationAxis.copy(Tv[i]),Bn.copy(Tv[i]),c==="local"&&Bn.applyQuaternion(this.worldQuaternion),Bn.cross(this.eye),Bn.length()===0?m=!0:this.rotationAngle=this._offset.dot(Bn.normalize())*p),(i==="E"||m)&&(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),c==="local"&&i!=="E"&&i!=="XYZE"?(l.quaternion.copy(this._quaternionStart),l.quaternion.multiply(an.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),l.quaternion.copy(an.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),l.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(gd),this.dispatchEvent(Cv)}}pointerUp(t){t!==null&&t.button!==0||(this.dragging&&this.axis!==null&&(Rv.mode=this.mode,this.dispatchEvent(Rv)),this.dragging=!1,this.axis=null)}dispose(){this.disconnect(),this._root.dispose()}attach(t){return this.object=t,this._root.visible=!0,this}detach(){return this.object=void 0,this.axis=null,this._root.visible=!1,this}reset(){this.enabled&&this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(gd),this.dispatchEvent(Cv),this.pointStart.copy(this.pointEnd))}getRaycaster(){return Gs}getMode(){return this.mode}setMode(t){this.mode=t}setTranslationSnap(t){this.translationSnap=t}setRotationSnap(t){this.rotationSnap=t}setScaleSnap(t){this.scaleSnap=t}setSize(t){this.size=t}setSpace(t){this.space=t}setColors(t,i,s,l){const c=this._gizmo.materialLib;c.xAxis.color.set(t),c.yAxis.color.set(i),c.zAxis.color.set(s),c.active.color.set(l),c.xAxisTransparent.color.set(t),c.yAxisTransparent.color.set(i),c.zAxisTransparent.color.set(s),c.activeTransparent.color.set(l),c.xAxis._color&&c.xAxis._color.set(t),c.yAxis._color&&c.yAxis._color.set(i),c.zAxis._color&&c.zAxis._color.set(s),c.active._color&&c.active._color.set(l),c.xAxisTransparent._color&&c.xAxisTransparent._color.set(t),c.yAxisTransparent._color&&c.yAxisTransparent._color.set(i),c.zAxisTransparent._color&&c.zAxisTransparent._color.set(s),c.activeTransparent._color&&c.activeTransparent._color.set(l)}}function dR(o){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:o.button};{const t=this.domElement.getBoundingClientRect();return{x:(o.clientX-t.left)/t.width*2-1,y:-(o.clientY-t.top)/t.height*2+1,button:o.button}}}function pR(o){if(this.enabled)switch(o.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(o));break}}function mR(o){this.enabled&&(document.pointerLockElement||this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(o)),this.pointerDown(this._getPointer(o)))}function gR(o){this.enabled&&this.pointerMove(this._getPointer(o))}function _R(o){this.enabled&&(this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(o)))}function _d(o,t,i){const s=t.intersectObject(o,!0);for(let l=0;l<s.length;l++)if(s[l].object.visible||i)return s[l];return!1}const iu=new Bi,Ze=new k(0,1,0),wv=new k(0,0,0),Dv=new Qe,au=new wn,du=new wn,qi=new k,Uv=new Qe,cl=new k(1,0,0),Vs=new k(0,1,0),ul=new k(0,0,1),su=new k,al=new k,sl=new k;class vR extends xn{constructor(t){super(),this.isTransformControlsRoot=!0,this.controls=t,this.visible=!1}updateMatrixWorld(t){const i=this.controls;i.object!==void 0&&(i.object.updateMatrixWorld(),i.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):i.object.parent.matrixWorld.decompose(i._parentPosition,i._parentQuaternion,i._parentScale),i.object.matrixWorld.decompose(i.worldPosition,i.worldQuaternion,i._worldScale),i._parentQuaternionInv.copy(i._parentQuaternion).invert(),i._worldQuaternionInv.copy(i.worldQuaternion).invert()),i.camera.updateMatrixWorld(),i.camera.matrixWorld.decompose(i.cameraPosition,i.cameraQuaternion,i._cameraScale),i.camera.isOrthographicCamera?i.camera.getWorldDirection(i.eye).negate():i.eye.copy(i.cameraPosition).sub(i.worldPosition).normalize(),super.updateMatrixWorld(t)}dispose(){this.traverse(function(t){t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()})}}class xR extends xn{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const t=new _l({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),i=new bp({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),s=t.clone();s.opacity=.15;const l=i.clone();l.opacity=.5;const c=t.clone();c.color.setHex(16711680);const f=t.clone();f.color.setHex(65280);const p=t.clone();p.color.setHex(255);const m=t.clone();m.color.setHex(16711680),m.opacity=.5;const d=t.clone();d.color.setHex(65280),d.opacity=.5;const x=t.clone();x.color.setHex(255),x.opacity=.5;const S=t.clone();S.opacity=.25;const _=t.clone();_.color.setHex(16776960),_.opacity=.25;const M=t.clone();M.color.setHex(16776960);const b=t.clone();b.color.setHex(7895160),this.materialLib={xAxis:c,yAxis:f,zAxis:p,active:M,xAxisTransparent:m,yAxisTransparent:d,zAxisTransparent:x,activeTransparent:_};const R=new Cn(0,.04,.1,12);R.translate(0,.05,0);const y=new on(.08,.08,.08);y.translate(0,.04,0);const g=new Dn;g.setAttribute("position",new Fe([0,0,0,1,0,0],3));const A=new Cn(.0075,.0075,.5,3);A.translate(0,.25,0);function N(Q,z){const H=new ps(Q,.0075,3,64,z*Math.PI*2);return H.rotateY(Math.PI/2),H.rotateX(Math.PI/2),H}function U(){const Q=new Dn;return Q.setAttribute("position",new Fe([0,0,0,1,1,1],3)),Q}const F={X:[[new Bt(R,c),[.5,0,0],[0,0,-Math.PI/2]],[new Bt(R,c),[-.5,0,0],[0,0,Math.PI/2]],[new Bt(A,c),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new Bt(R,f),[0,.5,0]],[new Bt(R,f),[0,-.5,0],[Math.PI,0,0]],[new Bt(A,f)]],Z:[[new Bt(R,p),[0,0,.5],[Math.PI/2,0,0]],[new Bt(R,p),[0,0,-.5],[-Math.PI/2,0,0]],[new Bt(A,p),null,[Math.PI/2,0,0]]],XYZ:[[new Bt(new Yr(.1,0),S),[0,0,0]]],XY:[[new Bt(new on(.15,.15,.01),x),[.15,.15,0]]],YZ:[[new Bt(new on(.15,.15,.01),m),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Bt(new on(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]]},P={X:[[new Bt(new Cn(.2,0,.6,4),s),[.3,0,0],[0,0,-Math.PI/2]],[new Bt(new Cn(.2,0,.6,4),s),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Bt(new Cn(.2,0,.6,4),s),[0,.3,0]],[new Bt(new Cn(.2,0,.6,4),s),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Bt(new Cn(.2,0,.6,4),s),[0,0,.3],[Math.PI/2,0,0]],[new Bt(new Cn(.2,0,.6,4),s),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new Bt(new Yr(.2,0),s)]],XY:[[new Bt(new on(.2,.2,.01),s),[.15,.15,0]]],YZ:[[new Bt(new on(.2,.2,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Bt(new on(.2,.2,.01),s),[.15,0,.15],[-Math.PI/2,0,0]]]},I={START:[[new Bt(new Yr(.01,2),l),null,null,null,"helper"]],END:[[new Bt(new Yr(.01,2),l),null,null,null,"helper"]],DELTA:[[new Ra(U(),l),null,null,null,"helper"]],X:[[new Ra(g,l),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ra(g,l),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ra(g,l),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},T={XYZE:[[new Bt(N(.5,1),b),null,[0,Math.PI/2,0]]],X:[[new Bt(N(.5,.5),c)]],Y:[[new Bt(N(.5,.5),f),null,[0,0,-Math.PI/2]]],Z:[[new Bt(N(.5,.5),p),null,[0,Math.PI/2,0]]],E:[[new Bt(N(.75,1),_),null,[0,Math.PI/2,0]]]},L={AXIS:[[new Ra(g,l),[-1e3,0,0],null,[1e6,1,1],"helper"]]},J={XYZE:[[new Bt(new Mu(.25,10,8),s)]],X:[[new Bt(new ps(.5,.1,4,24),s),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new Bt(new ps(.5,.1,4,24),s),[0,0,0],[Math.PI/2,0,0]]],Z:[[new Bt(new ps(.5,.1,4,24),s),[0,0,0],[0,0,-Math.PI/2]]],E:[[new Bt(new ps(.75,.1,2,24),s)]]},G={X:[[new Bt(y,c),[.5,0,0],[0,0,-Math.PI/2]],[new Bt(A,c),[0,0,0],[0,0,-Math.PI/2]],[new Bt(y,c),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new Bt(y,f),[0,.5,0]],[new Bt(A,f)],[new Bt(y,f),[0,-.5,0],[0,0,Math.PI]]],Z:[[new Bt(y,p),[0,0,.5],[Math.PI/2,0,0]],[new Bt(A,p),[0,0,0],[Math.PI/2,0,0]],[new Bt(y,p),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new Bt(new on(.15,.15,.01),x),[.15,.15,0]]],YZ:[[new Bt(new on(.15,.15,.01),m),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Bt(new on(.15,.15,.01),d),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Bt(new on(.1,.1,.1),S)]]},X={X:[[new Bt(new Cn(.2,0,.6,4),s),[.3,0,0],[0,0,-Math.PI/2]],[new Bt(new Cn(.2,0,.6,4),s),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new Bt(new Cn(.2,0,.6,4),s),[0,.3,0]],[new Bt(new Cn(.2,0,.6,4),s),[0,-.3,0],[0,0,Math.PI]]],Z:[[new Bt(new Cn(.2,0,.6,4),s),[0,0,.3],[Math.PI/2,0,0]],[new Bt(new Cn(.2,0,.6,4),s),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new Bt(new on(.2,.2,.01),s),[.15,.15,0]]],YZ:[[new Bt(new on(.2,.2,.01),s),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new Bt(new on(.2,.2,.01),s),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new Bt(new on(.2,.2,.2),s),[0,0,0]]]},$={X:[[new Ra(g,l),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new Ra(g,l),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new Ra(g,l),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function tt(Q){const z=new xn;for(const H in Q)for(let lt=Q[H].length;lt--;){const ut=Q[H][lt][0].clone(),gt=Q[H][lt][1],B=Q[H][lt][2],Z=Q[H][lt][3],mt=Q[H][lt][4];ut.name=H,ut.tag=mt,gt&&ut.position.set(gt[0],gt[1],gt[2]),B&&ut.rotation.set(B[0],B[1],B[2]),Z&&ut.scale.set(Z[0],Z[1],Z[2]),ut.updateMatrix();const At=ut.geometry.clone();At.applyMatrix4(ut.matrix),ut.geometry=At,ut.renderOrder=1/0,ut.position.set(0,0,0),ut.rotation.set(0,0,0),ut.scale.set(1,1,1),z.add(ut)}return z}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=tt(F)),this.add(this.gizmo.rotate=tt(T)),this.add(this.gizmo.scale=tt(G)),this.add(this.picker.translate=tt(P)),this.add(this.picker.rotate=tt(J)),this.add(this.picker.scale=tt(X)),this.add(this.helper.translate=tt(I)),this.add(this.helper.rotate=tt(L)),this.add(this.helper.scale=tt($)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(t){const s=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:du;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let l=[];l=l.concat(this.picker[this.mode].children),l=l.concat(this.gizmo[this.mode].children),l=l.concat(this.helper[this.mode].children);for(let c=0;c<l.length;c++){const f=l[c];f.visible=!0,f.rotation.set(0,0,0),f.position.copy(this.worldPosition);let p;if(this.camera.isOrthographicCamera?p=(this.camera.top-this.camera.bottom)/this.camera.zoom:p=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),f.scale.set(1,1,1).multiplyScalar(p*this.size/4),f.tag==="helper"){f.visible=!1,f.name==="AXIS"?(f.visible=!!this.axis,this.axis==="X"&&(an.setFromEuler(iu.set(0,0,0)),f.quaternion.copy(s).multiply(an),Math.abs(Ze.copy(cl).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="Y"&&(an.setFromEuler(iu.set(0,0,Math.PI/2)),f.quaternion.copy(s).multiply(an),Math.abs(Ze.copy(Vs).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="Z"&&(an.setFromEuler(iu.set(0,Math.PI/2,0)),f.quaternion.copy(s).multiply(an),Math.abs(Ze.copy(ul).applyQuaternion(s).dot(this.eye))>.9&&(f.visible=!1)),this.axis==="XYZE"&&(an.setFromEuler(iu.set(0,Math.PI/2,0)),Ze.copy(this.rotationAxis),f.quaternion.setFromRotationMatrix(Dv.lookAt(wv,Ze,Vs)),f.quaternion.multiply(an),f.visible=this.dragging),this.axis==="E"&&(f.visible=!1)):f.name==="START"?(f.position.copy(this.worldPositionStart),f.visible=this.dragging):f.name==="END"?(f.position.copy(this.worldPosition),f.visible=this.dragging):f.name==="DELTA"?(f.position.copy(this.worldPositionStart),f.quaternion.copy(this.worldQuaternionStart),Bn.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),Bn.applyQuaternion(this.worldQuaternionStart.clone().invert()),f.scale.copy(Bn),f.visible=this.dragging):(f.quaternion.copy(s),this.dragging?f.position.copy(this.worldPositionStart):f.position.copy(this.worldPosition),this.axis&&(f.visible=this.axis.search(f.name)!==-1));continue}f.quaternion.copy(s),this.mode==="translate"||this.mode==="scale"?(f.name==="X"&&Math.abs(Ze.copy(cl).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="Y"&&Math.abs(Ze.copy(Vs).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="Z"&&Math.abs(Ze.copy(ul).applyQuaternion(s).dot(this.eye))>.99&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="XY"&&Math.abs(Ze.copy(ul).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="YZ"&&Math.abs(Ze.copy(cl).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1),f.name==="XZ"&&Math.abs(Ze.copy(Vs).applyQuaternion(s).dot(this.eye))<.2&&(f.scale.set(1e-10,1e-10,1e-10),f.visible=!1)):this.mode==="rotate"&&(au.copy(s),Ze.copy(this.eye).applyQuaternion(an.copy(s).invert()),f.name.search("E")!==-1&&f.quaternion.setFromRotationMatrix(Dv.lookAt(this.eye,wv,Vs)),f.name==="X"&&(an.setFromAxisAngle(cl,Math.atan2(-Ze.y,Ze.z)),an.multiplyQuaternions(au,an),f.quaternion.copy(an)),f.name==="Y"&&(an.setFromAxisAngle(Vs,Math.atan2(Ze.x,Ze.z)),an.multiplyQuaternions(au,an),f.quaternion.copy(an)),f.name==="Z"&&(an.setFromAxisAngle(ul,Math.atan2(Ze.y,Ze.x)),an.multiplyQuaternions(au,an),f.quaternion.copy(an))),f.visible=f.visible&&(f.name.indexOf("X")===-1||this.showX),f.visible=f.visible&&(f.name.indexOf("Y")===-1||this.showY),f.visible=f.visible&&(f.name.indexOf("Z")===-1||this.showZ),f.visible=f.visible&&(f.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),f.material._color=f.material._color||f.material.color.clone(),f.material._opacity=f.material._opacity||f.material.opacity,f.material.color.copy(f.material._color),f.material.opacity=f.material._opacity,this.enabled&&this.axis&&(f.name===this.axis?(f.material.color.copy(this.materialLib.active.color),f.material.opacity=1):this.axis.split("").some(function(m){return f.name===m})&&(f.material.color.copy(this.materialLib.active.color),f.material.opacity=1))}super.updateMatrixWorld(t)}}class SR extends Bt{constructor(){super(new no(1e5,1e5,2,2),new _l({visible:!1,wireframe:!0,side:Zi,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(t){let i=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(i="local"),su.copy(cl).applyQuaternion(i==="local"?this.worldQuaternion:du),al.copy(Vs).applyQuaternion(i==="local"?this.worldQuaternion:du),sl.copy(ul).applyQuaternion(i==="local"?this.worldQuaternion:du),Ze.copy(al),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ze.copy(this.eye).cross(su),qi.copy(su).cross(Ze);break;case"Y":Ze.copy(this.eye).cross(al),qi.copy(al).cross(Ze);break;case"Z":Ze.copy(this.eye).cross(sl),qi.copy(sl).cross(Ze);break;case"XY":qi.copy(sl);break;case"YZ":qi.copy(su);break;case"XZ":Ze.copy(sl),qi.copy(al);break;case"XYZ":case"E":qi.set(0,0,0);break}break;default:qi.set(0,0,0)}qi.length()===0?this.quaternion.copy(this.cameraQuaternion):(Uv.lookAt(Bn.set(0,0,0),qi,Ze),this.quaternion.setFromRotationMatrix(Uv)),super.updateMatrixWorld(t)}}const rl=new k;function bi(o,t,i,s,l,c){const f=2*Math.PI*l/4,p=Math.max(c-2*l,0),m=Math.PI/4;rl.copy(t),rl[s]=0,rl.normalize();const d=.5*f/(f+p),x=1-rl.angleTo(o)/m;return Math.sign(rl[i])===1?x*d:p/(f+p)+d+d*(1-x)}class Dp extends on{constructor(t=1,i=1,s=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(t/2,i/2,s/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:s,segments:l,radius:c},f===1)return;const p=this.toNonIndexed();this.index=null,this.attributes.position=p.attributes.position,this.attributes.normal=p.attributes.normal,this.attributes.uv=p.attributes.uv;const m=new k,d=new k,x=new k(t,i,s).divideScalar(2).subScalar(c),S=this.attributes.position.array,_=this.attributes.normal.array,M=this.attributes.uv.array,b=S.length/6,R=new k,y=.5/f;for(let g=0,A=0;g<S.length;g+=3,A+=2)switch(m.fromArray(S,g),d.copy(m),d.x-=Math.sign(d.x)*y,d.y-=Math.sign(d.y)*y,d.z-=Math.sign(d.z)*y,d.normalize(),S[g+0]=x.x*Math.sign(m.x)+d.x*c,S[g+1]=x.y*Math.sign(m.y)+d.y*c,S[g+2]=x.z*Math.sign(m.z)+d.z*c,_[g+0]=d.x,_[g+1]=d.y,_[g+2]=d.z,Math.floor(g/b)){case 0:R.set(1,0,0),M[A+0]=bi(R,d,"z","y",c,s),M[A+1]=1-bi(R,d,"y","z",c,i);break;case 1:R.set(-1,0,0),M[A+0]=1-bi(R,d,"z","y",c,s),M[A+1]=1-bi(R,d,"y","z",c,i);break;case 2:R.set(0,1,0),M[A+0]=1-bi(R,d,"x","z",c,t),M[A+1]=bi(R,d,"z","x",c,s);break;case 3:R.set(0,-1,0),M[A+0]=1-bi(R,d,"x","z",c,t),M[A+1]=1-bi(R,d,"z","x",c,s);break;case 4:R.set(0,0,1),M[A+0]=1-bi(R,d,"x","y",c,t),M[A+1]=1-bi(R,d,"y","x",c,i);break;case 5:R.set(0,0,-1),M[A+0]=bi(R,d,"x","y",c,t),M[A+1]=1-bi(R,d,"y","x",c,i);break}}static fromJSON(t){return new Dp(t.width,t.height,t.depth,t.segments,t.radius)}}const yR=o=>{const[t,i]=Jt.useState([]),[s,l]=Jt.useState(null),[c,f]=Jt.useState(null),[p,m]=Jt.useState(null),[d,x]=Jt.useState("translate"),[S,_]=Jt.useState(new Set),[M,b]=Jt.useState(null),[R,y]=Jt.useState([]),[g,A]=Jt.useState(null),N=Jt.useRef(new UM),U=Jt.useRef(new Ai(45,1,.1,1e3)),F=Jt.useRef(null),P=Jt.useRef(null),I=Jt.useRef(null),T=Jt.useRef(new lx),L=Jt.useRef(null),J=Jt.useRef(null),G=Jt.useRef({FLOOR_PLANE:new Ca(new k(0,1,0),0),typeIcons:{box:"▪",sphere:"●",cylinder:"⬭",cone:"▲",torus:"◎",capsule:"▬"}}),X=Jt.useRef({objects:[],selected:null,secondary:null,hovered:null,currentMode:"translate",lockedGroup:new Set,placementMode:null,preDragState:null,undoStack:[]}),$=Jt.useCallback((w,yt)=>{if(!w)return;tt(w);const Gt=yt!==16752394,Ut=new _l({color:Gt?16777215:16752394,side:qn,depthWrite:!1,transparent:!0,opacity:Gt?.18:.72}),Rt=new Bt(w.geometry,Ut);Rt.scale.setScalar(Gt?1.028:1.055),Rt.name="__outline__",w.add(Rt)},[]),tt=Jt.useCallback(w=>{if(!w)return;const yt=w.getObjectByName("__outline__");yt&&(yt.material.dispose(),w.remove(yt))},[]),Q=Jt.useCallback((w,yt)=>{!w||!w.material||(w.material.emissive.setHex(yt?8947848:0),w.material.emissiveIntensity=yt?.12:0)},[]),z=Jt.useCallback((w,yt)=>{const Gt=Math.floor(16+yt*48);switch(w){case"box":return new Dp(1,1,1,6,Math.max(.001,yt*.49));case"sphere":return new Mu(.5,Math.floor(6+yt*58),Math.floor(4+yt*44));case"cylinder":return new Cn(.5,.5,1,Gt);case"cone":return new Ap(.5,1,Gt);case"torus":return new ps(.38,.15,Math.floor(8+yt*24),Math.floor(16+yt*48));case"capsule":return new Tp(.35,.6,Math.floor(4+yt*12),Math.floor(8+yt*24));default:return new on(1,1,1)}},[]),H=Jt.useCallback((w,yt=0,Gt=31487)=>{const Ut=z(w,yt),Rt=new Bt(Ut,new jM({color:Gt,roughness:.15}));return Rt.castShadow=Rt.receiveShadow=!0,Rt.userData={type:w,smoothness:yt,name:`${w.charAt(0).toUpperCase()+w.slice(1)} ${X.current.objects.length+1}`},Rt},[z]),lt=Jt.useCallback(w=>{w.geometry.computeBoundingBox();const yt=w.geometry.boundingBox;return(yt.max.y-yt.min.y)/2},[]),ut=Jt.useCallback(w=>{w.geometry.computeBoundingBox();const yt=w.geometry.boundingBox.clone();return yt.applyMatrix4(w.matrixWorld),yt},[]),gt=Jt.useCallback(()=>{const w=X.current.objects.map(yt=>({t:yt.userData.type,s:yt.userData.smoothness,c:yt.material.color.getHex(),p:(yt.userData.targetPos||yt.position).clone(),r:yt.rotation.clone(),sc:yt.scale.clone(),n:yt.userData.name}));y(yt=>{const Gt=[...yt,JSON.stringify(w)];return Gt.length>40?Gt.slice(1):Gt})},[]),B=Jt.useCallback(w=>{const yt=JSON.parse(w);X.current.objects.forEach(Ut=>{tt(Ut),N.current.remove(Ut)});const Gt=yt.map(Ut=>{const Rt=H(Ut.t,Ut.s,Ut.c);return Rt.position.set(Ut.p.x,Ut.p.y,Ut.p.z),Rt.userData.targetPos=new k(Ut.p.x,Ut.p.y,Ut.p.z),Rt.rotation.copy(Ut.r),Rt.scale.copy(Ut.sc),Rt.userData.name=Ut.n,N.current.add(Rt),Rt});i(Gt),l(null),f(null),I.current.detach()},[H,tt,i,l,f]),Z=Jt.useCallback(()=>{if(!J.current||X.current.objects.length===0)return;const w=J.current,yt=L.current.width,Gt=L.current.height;w.clearRect(0,0,yt,Gt),w.fillStyle="#06060a",w.fillRect(0,0,yt,Gt);const Ut=X.current.objects.map(rt=>(rt.geometry.computeBoundingBox(),rt.geometry.boundingBox.clone().applyMatrix4(rt.matrixWorld)));let Rt=6;Ut.forEach(rt=>{Rt=Math.max(Rt,Math.abs(rt.max.x)+1,Math.abs(rt.min.x)+1,Math.abs(rt.max.z)+1,Math.abs(rt.min.z)+1)});const O=Math.min(yt,Gt)/2/Rt,E=yt/2,Y=Gt/2;w.strokeStyle="rgba(255,255,255,0.055)",w.lineWidth=.5;for(let rt=-Rt;rt<=Rt;rt+=2.5)w.beginPath(),w.moveTo(E+rt*O,0),w.lineTo(E+rt*O,Gt),w.stroke(),w.beginPath(),w.moveTo(0,Y+rt*O),w.lineTo(yt,Y+rt*O),w.stroke();w.strokeStyle="rgba(255,255,255,0.14)",w.lineWidth=.8,w.beginPath(),w.moveTo(E,0),w.lineTo(E,Gt),w.stroke(),w.beginPath(),w.moveTo(0,Y),w.lineTo(yt,Y),w.stroke();const dt=E+U.current.position.x*O,St=Y+U.current.position.z*O;w.fillStyle="rgba(255,255,255,0.2)",w.beginPath(),w.arc(dt,St,2.5,0,Math.PI*2),w.fill(),X.current.objects.forEach((rt,kt)=>{const Ct=Ut[kt],jt=Math.max((Ct.max.x-Ct.min.x)*O,3),te=Math.max((Ct.max.z-Ct.min.z)*O,3),Et=E+(Ct.min.x+Ct.max.x)/2*O,Mt=Y+(Ct.min.z+Ct.max.z)/2*O,zt="#"+rt.material.color.getHex(),Nt=["sphere","cylinder","torus","capsule","cone"].includes(rt.userData.type);w.beginPath(),Nt?w.ellipse(Et,Mt,jt/2,te/2,0,0,Math.PI*2):w.rect(Et-jt/2,Mt-te/2,jt,te),w.fillStyle=zt+"bb",w.fill(),w.strokeStyle=zt,w.lineWidth=1,w.stroke(),rt===s?(w.setLineDash([3,2]),w.beginPath(),w.rect(Et-jt/2-3,Mt-te/2-3,jt+6,te+6),w.strokeStyle="rgba(215,215,215,0.88)",w.lineWidth=1.5,w.stroke(),w.setLineDash([])):rt===c&&(w.beginPath(),w.rect(Et-jt/2-3,Mt-te/2-3,jt+6,te+6),w.strokeStyle="#ff9f0a",w.lineWidth=1.5,w.stroke())})},[s,c,L]);Jt.useCallback(()=>{},[]),Jt.useEffect(()=>{const w=o.current;if(!w)return;F.current=new KA({antialias:!0,preserveDrawingBuffer:!0}),F.current.setPixelRatio(window.devicePixelRatio),F.current.shadowMap.enabled=!0,F.current.shadowMap.type=Nv,F.current.setSize(w.clientWidth,w.clientHeight),w.appendChild(F.current.domElement),U.current.aspect=w.clientWidth/w.clientHeight,U.current.updateProjectionMatrix(),U.current.position.set(12,12,12),N.current.add(new tE(16777215,1.2));const yt=new $M(16777215,2.5);yt.position.set(10,25,15),yt.castShadow=!0,N.current.add(yt);const Gt=new Bt(new no(100,100),new sx({color:1184274,roughness:1}));Gt.rotation.x=-Math.PI/2,Gt.receiveShadow=!0,N.current.add(Gt);const Ut=new iE(50,50,3355443,2236962);Ut.position.y=.02,N.current.add(Ut),P.current=new $A(U.current,F.current.domElement),P.current.enableDamping=!0,I.current=new hR(U.current,F.current.domElement),I.current.children[0].children[0].children.forEach(E=>{E.name.includes("X")&&E.material.color.set("#CF6679"),E.name.includes("Y")&&E.material.color.set("#03DAC6"),E.name.includes("Z")&&E.material.color.set("#BB86FC")}),I.current.setSize(1.1),I.current.addEventListener("dragging-changed",E=>{P.current&&(P.current.enabled=!E.value)}),N.current.add(I.current),L.current&&(J.current=L.current.getContext("2d"));const Rt=()=>{if(!w||!F.current||!U.current)return;const E=w.clientWidth,Y=w.clientHeight;U.current.aspect=E/Y,U.current.updateProjectionMatrix(),F.current.setSize(E,Y),Z()};window.addEventListener("resize",Rt),Rt();const O=()=>{requestAnimationFrame(O),P.current&&P.current.update(),F.current&&F.current.render(N.current,U.current),Z()};return O(),()=>{window.removeEventListener("resize",Rt),F.current&&(w.removeChild(F.current.domElement),F.current.dispose()),P.current&&P.current.dispose(),I.current&&I.current.dispose()}},[o,Z]);const mt=Jt.useCallback(w=>{if(!w){l(null),f(null),I.current&&I.current.detach();return}s!==w&&(tt(s),Q(s,!1)),l(w),f(null),I.current&&I.current.attach(w),$(w,31487),Q(w,!1),gt()},[s,tt,Q,$,gt]),At=Jt.useCallback(()=>{mt(null)},[mt]),It=Jt.useCallback(w=>{c&&tt(c),f(w),w&&($(w,16752394),Q(w,!1))},[c,tt,$,Q]),at=Jt.useCallback(()=>{It(null)},[It]),vt=Jt.useCallback(()=>{s&&(N.current.remove(s),i(w=>w.filter(yt=>yt!==s)),At(),gt())},[s,i,At,gt]),Tt=Jt.useCallback(()=>{if(!s)return;s.updateMatrixWorld(!0);const yt=-ut(s).min.y;s.position.y+=yt,s.userData.targetPos=s.position.clone(),gt()},[s,gt]),Yt=Jt.useCallback(()=>{!s||!c||(_(w=>{const yt=new Set(w);return yt.add(s),yt.add(c),yt}),gt())},[s,c,gt]),ee=Jt.useCallback(()=>{_(new Set),A(null),gt()},[]),ie=Jt.useCallback(w=>{const yt=H(w),Gt=lt(yt);yt.position.set(0,Gt,0),yt.userData.targetPos=yt.position.clone(),N.current.add(yt),i(Ut=>[...Ut,yt]),mt(yt),gt()},[H,lt,mt,gt]),$e=Jt.useCallback(w=>{I.current&&(I.current.setMode(w),x(w))},[]),ye=Jt.useCallback((w,yt)=>{if(!s||!c)return;const Gt=s.userData.targetPos||s.position,Ut=c.userData.targetPos||c.position,Rt=s.position.clone(),O=c.position.clone();s.position.copy(Gt),c.position.copy(Ut),s.updateMatrixWorld(!0),c.updateMatrixWorld(!0);const E=ut(s),Y=ut(c);s.position.copy(Rt),c.position.copy(O),s.updateMatrixWorld(!0),c.updateMatrixWorld(!0);let dt;if(yt==="flush-min")dt=E.min[w]-Y.max[w];else if(yt==="center"){const rt=(E.min[w]+E.max[w])/2,kt=(Y.min[w]+Y.max[w])/2;dt=rt-kt}else dt=E.max[w]-Y.min[w];const St=Ut.clone();St[w]+=dt,c.userData.targetPos=St,c.position.copy(St),gt()},[s,c,gt]),me=Jt.useCallback(()=>{if(!(!s||!S.has(s)||!g)){if(d==="translate"){const w=s.position.x-g.selPos.x,yt=s.position.y-g.selPos.y,Gt=s.position.z-g.selPos.z;S.forEach(Ut=>{Ut!==s&&(Ut.position.set(g.members[Ut.uuid].pos.x+w,g.members[Ut.uuid].pos.y+yt,g.members[Ut.uuid].pos.z+Gt),Ut.userData.targetPos=Ut.position.clone())})}else if(d==="scale"){const w=s.scale.x/g.selPos.x,yt=s.scale.y/g.selScale.y,Gt=s.scale.z/g.selScale.z;S.forEach(Ut=>{Ut!==s&&Ut.scale.set(g.members[Ut.uuid].scale.x*w,g.members[Ut.uuid].scale.y*yt,g.members[Ut.uuid].scale.z*Gt)})}}},[s,S,g,d]),Ce=Jt.useCallback(()=>{if(!s||!S.has(s))return;const w={};S.forEach(yt=>{yt!==s&&(w[yt.uuid]={obj:yt,pos:yt.position.clone(),scale:yt.scale.clone()})}),A({selPos:s.position.clone(),selScale:s.scale.clone(),members:w})},[s,S,A]),oe=Jt.useCallback(()=>{g&&(gt(),A(null))},[g,gt]);Jt.useEffect(()=>(I.current&&(I.current.addEventListener("objectChange",me),I.current.addEventListener("mouseDown",Ce),I.current.addEventListener("mouseUp",oe)),()=>{I.current&&(I.current.removeEventListener("objectChange",me),I.current.removeEventListener("mouseDown",Ce),I.current.removeEventListener("mouseUp",oe))}),[me,Ce,oe]);const qe=Jt.useCallback(w=>{if(w.target.closest("#ui-left")||w.target.closest("#ui-right")||g)return;const yt=new re(w.clientX/window.innerWidth*2-1,-(w.clientY/window.innerHeight)*2+1);T.current.setFromCamera(yt,U.current);const Ut=T.current.intersectObjects(X.current.objects)[0]?.object??null;if(M){const Rt=new k;if(T.current.ray.intersectPlane(G.current.FLOOR_PLANE,Rt)){const O=H(M),E=lt(O);O.position.set(Rt.x,E,Rt.z),O.userData.targetPos=O.position.clone(),N.current.add(O),i(Y=>[...Y,O]),mt(O),gt(),b(null)}}else Ut?Ut===s?at():s!==null?It(Ut):mt(Ut):I.current.dragging||At()},[M,s,c,X,T,U,i,mt,At,It,at,H,lt,gt]);return Jt.useEffect(()=>(window.addEventListener("pointerdown",qe),()=>window.removeEventListener("pointerdown",qe)),[qe]),Jt.useEffect(()=>{X.current.objects=t},[t]),Jt.useEffect(()=>{X.current.selected=s},[s]),Jt.useEffect(()=>{X.current.secondary=c},[c]),Jt.useEffect(()=>{X.current.currentMode=d},[d]),Jt.useEffect(()=>{X.current.lockedGroup=S},[S]),Jt.useEffect(()=>{X.current.placementMode=M},[M]),Jt.useEffect(()=>{X.current.preDragState=g},[g]),{objects:t,selected:s,secondary:c,hovered:p,currentMode:d,lockedGroup:S,placementMode:M,undoStack:R,preDragState:g,minimapCanvasRef:L,addShape:ie,deleteShape:vt,setTransformMode:$e,selectObject:mt,deselectObject:At,setSecondaryObject:It,clearSecondaryObject:at,groundShape:Tt,lockGroup:Yt,unlockAll:ee,saveState:gt,restoreState:B,updateMinimap:Z,updateOutliner:()=>{},setPlacementMode:b,alignObjects:ye}},_x=Jt.createContext(null),MR=({children:o})=>{const t=Jt.useRef(null),i=yR(t);return ae.jsx(_x.Provider,{value:{objects:i.objects,selected:i.selected,secondary:i.secondary,hovered:i.hovered,currentMode:i.currentMode,lockedGroup:i.lockedGroup,placementMode:i.placementMode,undoStack:i.undoStack,preDragState:i.preDragState,minimapCanvasRef:i.minimapCanvasRef,addShape:i.addShape,deleteShape:i.deleteShape,setTransformMode:i.setTransformMode,selectObject:i.selectObject,deselectObject:i.deselectObject,setSecondaryObject:i.setSecondaryObject,clearSecondaryObject:i.clearSecondaryObject,groundShape:i.groundShape,lockGroup:i.lockGroup,unlockAll:i.unlockAll,saveState:i.saveState,restoreState:i.restoreState,updateMinimap:i.updateMinimap,updateOutliner:i.updateOutliner,setPlacementMode:i.setPlacementMode,alignObjects:i.alignObjects,canvasRef:t},children:o})},vx=()=>{const o=Jt.useContext(_x);if(!o)throw new Error("useThreeDSceneContext must be used within a ThreeDSceneProvider");return o},ER=()=>{const{canvasRef:o}=vx();return ae.jsx("div",{ref:o,id:"canvas-container"})},bR=()=>{const{objects:o,selected:t,secondary:i,lockedGroup:s,minimapCanvasRef:l,addShape:c,deleteShape:f,setTransformMode:p,selectObject:m,deselectObject:d,setSecondaryObject:x,clearSecondaryObject:S,groundShape:_,lockGroup:M,unlockAll:b,saveState:R,restoreState:y,updateMinimap:g,currentMode:A,placementMode:N,alignObjects:U}=vx(),F={box:"▪",sphere:"●",cylinder:"⬭",cone:"▲",torus:"◎",capsule:"▬"};return Jt.useEffect(()=>{g()},[o,t,i,g]),ae.jsxs(ae.Fragment,{children:[ae.jsxs("div",{id:"ui-left",className:"panel",children:[ae.jsxs("div",{className:"panel-header",children:[ae.jsx("div",{className:"app-name",children:"Mango"}),ae.jsx("div",{className:"app-tagline",children:"Build · Transform · Export"}),ae.jsx("button",{className:"collapse-toggle",title:"Collapse Panel",children:ae.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:ae.jsx("path",{d:"M13.5 5.5L8 11L2.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),ae.jsx("div",{className:"panel-body",children:ae.jsxs("section",{children:[ae.jsx("div",{className:"section-label",children:"Debug Info"}),ae.jsxs("div",{children:["Selected: ",t?t.userData.name:"None"]}),ae.jsxs("div",{children:["Mode: ",A]})]})}),ae.jsxs("div",{className:"panel-footer",children:[ae.jsxs("div",{className:"btn-grid col-2",children:[ae.jsx("button",{id:"btnUndo",children:"Undo"}),ae.jsx("button",{id:"btnClear",className:"danger",children:"Clear All"})]}),ae.jsx("button",{id:"btnExport",className:"export-btn",children:"Save Render"})]})]}),ae.jsxs("div",{id:"ui-right",className:"panel",children:[ae.jsxs("div",{id:"right-header",children:[ae.jsx("div",{className:"section-label",style:{margin:"0"},children:"Scene"}),ae.jsx("button",{className:"collapse-toggle",title:"Collapse Panel",children:ae.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:ae.jsx("path",{d:"M13.5 5.5L8 11L2.5 5.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),ae.jsx("div",{className:"minimap-label",children:"Top View"}),ae.jsx("div",{id:"minimap-wrap",children:ae.jsx("canvas",{ref:l,id:"minimap",width:"172",height:"110"})}),ae.jsx("div",{id:"outliner",children:o.length===0?ae.jsxs("div",{className:"outliner-empty",id:"outlinerEmpty",children:["No objects yet.",ae.jsx("br",{}),"Add a shape to begin."]}):o.map(P=>ae.jsxs("div",{className:`layer ${P===t?"selected":""} ${P===i?"secondary":""}`,onClick:()=>{d(),m(P)},children:[ae.jsx("span",{className:"layer-icon",children:F[P.userData.type]??"◻"}),ae.jsx("span",{className:"layer-name",children:P.userData.name}),s.has(P)&&ae.jsx("span",{className:"layer-lock",children:"🔗"})]},P.uuid))})]}),ae.jsxs("div",{id:"hint-bar",children:["Drag to orbit ",ae.jsx("span",{className:"sep",children:"·"})," Scroll to zoom ",ae.jsx("span",{className:"sep",children:"·"})," Click a shape to begin aligning or merging"]}),ae.jsxs("div",{id:"rh-overlay",children:[ae.jsx("div",{className:"rh",id:"rh-yp","data-axis":"y","data-dir":"1",title:"Height — drag up to make taller"}),ae.jsx("div",{className:"rh",id:"rh-yn","data-axis":"y","data-dir":"-1",title:"Height — drag down to make shorter"}),ae.jsx("div",{className:"rh",id:"rh-xp","data-axis":"x","data-dir":"1",title:"Width — drag right to make wider"}),ae.jsx("div",{className:"rh",id:"rh-xn","data-axis":"x","data-dir":"-1",title:"Width — drag left to make wider"}),ae.jsx("div",{className:"rh",id:"rh-zp","data-axis":"z","data-dir":"1",title:"Depth — drag to change depth"}),ae.jsx("div",{className:"rh",id:"rh-zn","data-axis":"z","data-dir":"-1",title:"Depth — drag to change depth"})]})]})};function TR(){return ae.jsxs(MR,{children:[ae.jsx(ER,{}),ae.jsx(bR,{})]})}Oy.createRoot(document.getElementById("root")).render(ae.jsx(Ay.StrictMode,{children:ae.jsx(TR,{})}));
