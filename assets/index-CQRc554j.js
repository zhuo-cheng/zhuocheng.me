(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();function Jv(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var xf={exports:{}},da={},yf={exports:{}},vt={};var Ym;function Qv(){if(Ym)return vt;Ym=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,A={};function y(U,Y,Ae){this.props=U,this.context=Y,this.refs=A,this.updater=Ae||x}y.prototype.isReactComponent={},y.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(U,Y,Ae){this.props=U,this.context=Y,this.refs=A,this.updater=Ae||x}var L=R.prototype=new S;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(U,Y,Ae){var We,$e={},ie=null,pe=null;if(Y!=null)for(We in Y.ref!==void 0&&(pe=Y.ref),Y.key!==void 0&&(ie=""+Y.key),Y)F.call(Y,We)&&!k.hasOwnProperty(We)&&($e[We]=Y[We]);var de=arguments.length-2;if(de===1)$e.children=Ae;else if(1<de){for(var Ue=Array(de),Ve=0;Ve<de;Ve++)Ue[Ve]=arguments[Ve+2];$e.children=Ue}if(U&&U.defaultProps)for(We in de=U.defaultProps,de)$e[We]===void 0&&($e[We]=de[We]);return{$$typeof:o,type:U,key:ie,ref:pe,props:$e,_owner:N.current}}function P(U,Y){return{$$typeof:o,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function le(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function O(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return Y[Ae]})}var J=/\/+/g;function Z(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):Y.toString(36)}function ae(U,Y,Ae,We,$e){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case o:case e:pe=!0}}if(pe)return pe=U,$e=$e(pe),U=We===""?"."+Z(pe,0):We,C($e)?(Ae="",U!=null&&(Ae=U.replace(J,"$&/")+"/"),ae($e,Y,Ae,"",function(Ve){return Ve})):$e!=null&&(le($e)&&($e=P($e,Ae+(!$e.key||pe&&pe.key===$e.key?"":(""+$e.key).replace(J,"$&/")+"/")+U)),Y.push($e)),1;if(pe=0,We=We===""?".":We+":",C(U))for(var de=0;de<U.length;de++){ie=U[de];var Ue=We+Z(ie,de);pe+=ae(ie,Y,Ae,Ue,$e)}else if(Ue=m(U),typeof Ue=="function")for(U=Ue.call(U),de=0;!(ie=U.next()).done;)ie=ie.value,Ue=We+Z(ie,de++),pe+=ae(ie,Y,Ae,Ue,$e);else if(ie==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return pe}function Q(U,Y,Ae){if(U==null)return U;var We=[],$e=0;return ae(U,We,"","",function(ie){return Y.call(Ae,ie,$e++)}),We}function te(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},K={transition:null},oe={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:K,ReactCurrentOwner:N};function ce(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Q,forEach:function(U,Y,Ae){Q(U,function(){Y.apply(this,arguments)},Ae)},count:function(U){var Y=0;return Q(U,function(){Y++}),Y},toArray:function(U){return Q(U,function(Y){return Y})||[]},only:function(U){if(!le(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},vt.Component=y,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=R,vt.StrictMode=i,vt.Suspense=h,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,vt.act=ce,vt.cloneElement=function(U,Y,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=M({},U.props),$e=U.key,ie=U.ref,pe=U._owner;if(Y!=null){if(Y.ref!==void 0&&(ie=Y.ref,pe=N.current),Y.key!==void 0&&($e=""+Y.key),U.type&&U.type.defaultProps)var de=U.type.defaultProps;for(Ue in Y)F.call(Y,Ue)&&!k.hasOwnProperty(Ue)&&(We[Ue]=Y[Ue]===void 0&&de!==void 0?de[Ue]:Y[Ue])}var Ue=arguments.length-2;if(Ue===1)We.children=Ae;else if(1<Ue){de=Array(Ue);for(var Ve=0;Ve<Ue;Ve++)de[Ve]=arguments[Ve+2];We.children=de}return{$$typeof:o,type:U.type,key:$e,ref:ie,props:We,_owner:pe}},vt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:a,_context:U},U.Consumer=U},vt.createElement=w,vt.createFactory=function(U){var Y=w.bind(null,U);return Y.type=U,Y},vt.createRef=function(){return{current:null}},vt.forwardRef=function(U){return{$$typeof:f,render:U}},vt.isValidElement=le,vt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:te}},vt.memo=function(U,Y){return{$$typeof:d,type:U,compare:Y===void 0?null:Y}},vt.startTransition=function(U){var Y=K.transition;K.transition={};try{U()}finally{K.transition=Y}},vt.unstable_act=ce,vt.useCallback=function(U,Y){return W.current.useCallback(U,Y)},vt.useContext=function(U){return W.current.useContext(U)},vt.useDebugValue=function(){},vt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},vt.useEffect=function(U,Y){return W.current.useEffect(U,Y)},vt.useId=function(){return W.current.useId()},vt.useImperativeHandle=function(U,Y,Ae){return W.current.useImperativeHandle(U,Y,Ae)},vt.useInsertionEffect=function(U,Y){return W.current.useInsertionEffect(U,Y)},vt.useLayoutEffect=function(U,Y){return W.current.useLayoutEffect(U,Y)},vt.useMemo=function(U,Y){return W.current.useMemo(U,Y)},vt.useReducer=function(U,Y,Ae){return W.current.useReducer(U,Y,Ae)},vt.useRef=function(U){return W.current.useRef(U)},vt.useState=function(U){return W.current.useState(U)},vt.useSyncExternalStore=function(U,Y,Ae){return W.current.useSyncExternalStore(U,Y,Ae)},vt.useTransition=function(){return W.current.useTransition()},vt.version="18.3.1",vt}var qm;function od(){return qm||(qm=1,yf.exports=Qv()),yf.exports}var Km;function ex(){if(Km)return da;Km=1;var o=od(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,d){var g,_={},m=null,x=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(x=h.ref);for(g in h)i.call(h,g)&&!a.hasOwnProperty(g)&&(_[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:f,key:m,ref:x,props:_,_owner:s.current}}return da.Fragment=t,da.jsx=c,da.jsxs=c,da}var $m;function tx(){return $m||($m=1,xf.exports=ex()),xf.exports}var zt=tx(),Ti=od(),Yl={},Sf={exports:{}},Vn={},Mf={exports:{}},Ef={};var Zm;function nx(){return Zm||(Zm=1,(function(o){function e(K,oe){var ce=K.length;K.push(oe);e:for(;0<ce;){var U=ce-1>>>1,Y=K[U];if(0<s(Y,oe))K[U]=oe,K[ce]=Y,ce=U;else break e}}function t(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var oe=K[0],ce=K.pop();if(ce!==oe){K[0]=ce;e:for(var U=0,Y=K.length,Ae=Y>>>1;U<Ae;){var We=2*(U+1)-1,$e=K[We],ie=We+1,pe=K[ie];if(0>s($e,ce))ie<Y&&0>s(pe,$e)?(K[U]=pe,K[ie]=ce,U=ie):(K[U]=$e,K[We]=ce,U=We);else if(ie<Y&&0>s(pe,ce))K[U]=pe,K[ie]=ce,U=ie;else break e}}return oe}function s(K,oe){var ce=K.sortIndex-oe.sortIndex;return ce!==0?ce:K.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var h=[],d=[],g=1,_=null,m=3,x=!1,M=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(K){for(var oe=t(d);oe!==null;){if(oe.callback===null)i(d);else if(oe.startTime<=K)i(d),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(d)}}function C(K){if(A=!1,L(K),!M)if(t(h)!==null)M=!0,te(F);else{var oe=t(d);oe!==null&&W(C,oe.startTime-K)}}function F(K,oe){M=!1,A&&(A=!1,S(w),w=-1),x=!0;var ce=m;try{for(L(oe),_=t(h);_!==null&&(!(_.expirationTime>oe)||K&&!O());){var U=_.callback;if(typeof U=="function"){_.callback=null,m=_.priorityLevel;var Y=U(_.expirationTime<=oe);oe=o.unstable_now(),typeof Y=="function"?_.callback=Y:_===t(h)&&i(h),L(oe)}else i(h);_=t(h)}if(_!==null)var Ae=!0;else{var We=t(d);We!==null&&W(C,We.startTime-oe),Ae=!1}return Ae}finally{_=null,m=ce,x=!1}}var N=!1,k=null,w=-1,P=5,le=-1;function O(){return!(o.unstable_now()-le<P)}function J(){if(k!==null){var K=o.unstable_now();le=K;var oe=!0;try{oe=k(!0,K)}finally{oe?Z():(N=!1,k=null)}}else N=!1}var Z;if(typeof R=="function")Z=function(){R(J)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,Q=ae.port2;ae.port1.onmessage=J,Z=function(){Q.postMessage(null)}}else Z=function(){y(J,0)};function te(K){k=K,N||(N=!0,Z())}function W(K,oe){w=y(function(){K(o.unstable_now())},oe)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(K){K.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,te(F))},o.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<K?Math.floor(1e3/K):5},o.unstable_getCurrentPriorityLevel=function(){return m},o.unstable_getFirstCallbackNode=function(){return t(h)},o.unstable_next=function(K){switch(m){case 1:case 2:case 3:var oe=3;break;default:oe=m}var ce=m;m=oe;try{return K()}finally{m=ce}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ce=m;m=K;try{return oe()}finally{m=ce}},o.unstable_scheduleCallback=function(K,oe,ce){var U=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,K){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ce+Y,K={id:g++,callback:oe,priorityLevel:K,startTime:ce,expirationTime:Y,sortIndex:-1},ce>U?(K.sortIndex=ce,e(d,K),t(h)===null&&K===t(d)&&(A?(S(w),w=-1):A=!0,W(C,ce-U))):(K.sortIndex=Y,e(h,K),M||x||(M=!0,te(F))),K},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(K){var oe=m;return function(){var ce=m;m=oe;try{return K.apply(this,arguments)}finally{m=ce}}}})(Ef)),Ef}var Jm;function ix(){return Jm||(Jm=1,Mf.exports=nx()),Mf.exports}var Qm;function rx(){if(Qm)return Vn;Qm=1;var o=od(),e=ix();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return h.call(_,n)?!0:h.call(g,n)?!1:d.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||x(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function A(n,r,l,u,p,v,T){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new A(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new A(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new A(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);y[r]=new A(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),le=Symbol.for("react.provider"),O=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),K=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function Y(n){if(U===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);U=r&&r[1]||""}return`
`+U+n}var Ae=!1;function We(n,r){if(!n||Ae)return"";Ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(re){var u=re}Reflect.construct(n,[],r)}else{try{r.call()}catch(re){u=re}n.call(r.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var p=re.stack.split(`
`),v=u.stack.split(`
`),T=p.length-1,I=v.length-1;1<=T&&0<=I&&p[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==v[I]){var B=`
`+p[T].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=T&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Y(n):""}function $e(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case N:return"Portal";case P:return"Profiler";case w:return"StrictMode";case Z:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case le:return(n._context.displayName||"Context")+".Provider";case J:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return r=n.displayName||null,r!==null?r:ie(n.type)||"Memo";case te:r=n._payload,n=n._init;try{return ie(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ve(n){var r=Ue(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(T){u=""+T,v.call(this,T)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Zt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tt(n,r){var l=r.checked;return ce({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Pt(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=de(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function ft(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function Vt(n,r){ft(n,r);var l=de(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Xt(n,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function z(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Xt(n,r,l){(r!=="number"||_t(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var yt=Array.isArray;function wt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+de(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function He(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:de(l)}}function E(n,r){var l=de(r.value),u=de(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function G(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?he(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Te(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ye={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(Ye).forEach(function(n){it.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ye[r]=Ye[n]})});function xe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ye.hasOwnProperty(n)&&Ye[n]?(""+r).trim():r+"px"}function Ee(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=xe(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var Ge=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,r){if(r){if(Ge[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Pe(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ut=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Se=null,Le=null;function ye(n){if(n=Jo(n)){if(typeof we!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ll(r),we(n.stateNode,n.type,r))}}function fe(n){Se?Le?Le.push(n):Le=[n]:Se=n}function Be(){if(Se){var n=Se,r=Le;if(Le=Se=null,ye(n),r)for(n=0;n<r.length;n++)ye(r[n])}}function st(n,r){return n(r)}function Dt(){}var At=!1;function ei(n,r,l){if(At)return n(r,l);At=!0;try{return st(n,r,l)}finally{At=!1,(Se!==null||Le!==null)&&(Dt(),Be())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var u=ll(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var bs=!1;if(f)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{bs=!1}function zc(n,r,l,u,p,v,T,I,B){var re=Array.prototype.slice.call(arguments,3);try{r.apply(l,re)}catch(_e){this.onError(_e)}}var Sr=!1,Jr=null,ti=!1,Qr=null,za={onError:function(n){Sr=!0,Jr=n}};function Va(n,r,l,u,p,v,T,I,B){Sr=!1,Jr=null,zc.apply(za,arguments)}function Rs(n,r,l,u,p,v,T,I,B){if(Va.apply(this,arguments),Sr){if(Sr){var re=Jr;Sr=!1,Jr=null}else throw Error(t(198));ti||(ti=!0,Qr=re)}}function Ni(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function es(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function No(n){if(Ni(n)!==n)throw Error(t(188))}function Ha(n){var r=n.alternate;if(!r){if(r=Ni(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return No(p),n;if(v===u)return No(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var T=!1,I=p.child;I;){if(I===l){T=!0,l=p,u=v;break}if(I===u){T=!0,u=p,l=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===l){T=!0,l=v,u=p;break}if(I===u){T=!0,u=v,l=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Ga(n){return n=Ha(n),n!==null?Wa(n):null}function Wa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Wa(n);if(r!==null)return r;n=n.sibling}return null}var Xa=e.unstable_scheduleCallback,ja=e.unstable_cancelCallback,Vc=e.unstable_shouldYield,Hc=e.unstable_requestPaint,b=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,se=e.unstable_ImmediatePriority,ne=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,Re=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,be=null,De=null;function Ke(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Lt,ht=Math.log,Ze=Math.LN2;function Lt(n){return n>>>=0,n===0?32:31-(ht(n)/Ze|0)|0}var kt=64,Ot=4194304;function Et(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,T=l&268435455;if(T!==0){var I=T&~p;I!==0?u=Et(I):(v&=T,v!==0&&(u=Et(v)))}else T=l&~p,T!==0?u=Et(T):v!==0&&(u=Et(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-Qe(r),p=1<<l,u|=n[l],r&=~p;return u}function je(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var T=31-Qe(v),I=1<<T,B=p[T];B===-1?((I&l)===0||(I&u)!==0)&&(p[T]=je(I,r)):B<=r&&(n.expiredLanes|=I),v&=~I}}function St(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Nn(){var n=kt;return kt<<=1,(kt&4194240)===0&&(kt=64),n}function Un(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function jn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Qe(r),n[r]=l}function Mr(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-Qe(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function Ct(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-Qe(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var ot=0;function pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qt,ni,Qi,Uo,Cd,Gc=!1,Ya=[],Er=null,Tr=null,wr=null,Fo=new Map,Oo=new Map,Ar=[],y_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pd(n,r){switch(n){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Fo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(r.pointerId)}}function ko(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Jo(r),r!==null&&ni(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function S_(n,r,l,u,p){switch(r){case"focusin":return Er=ko(Er,n,r,l,u,p),!0;case"dragenter":return Tr=ko(Tr,n,r,l,u,p),!0;case"mouseover":return wr=ko(wr,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return Fo.set(v,ko(Fo.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,Oo.set(v,ko(Oo.get(v)||null,n,r,l,u,p)),!0}return!1}function Ld(n){var r=ts(n.target);if(r!==null){var l=Ni(r);if(l!==null){if(r=l.tag,r===13){if(r=es(l),r!==null){n.blockedOn=r,Cd(n.priority,function(){Qi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qa(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Xc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);ut=u,l.target.dispatchEvent(u),ut=null}else return r=Jo(l),r!==null&&ni(r),n.blockedOn=l,!1;r.shift()}return!0}function Dd(n,r,l){qa(n)&&l.delete(r)}function M_(){Gc=!1,Er!==null&&qa(Er)&&(Er=null),Tr!==null&&qa(Tr)&&(Tr=null),wr!==null&&qa(wr)&&(wr=null),Fo.forEach(Dd),Oo.forEach(Dd)}function Bo(n,r){n.blockedOn===r&&(n.blockedOn=null,Gc||(Gc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,M_)))}function zo(n){function r(p){return Bo(p,n)}if(0<Ya.length){Bo(Ya[0],n);for(var l=1;l<Ya.length;l++){var u=Ya[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Er!==null&&Bo(Er,n),Tr!==null&&Bo(Tr,n),wr!==null&&Bo(wr,n),Fo.forEach(r),Oo.forEach(r),l=0;l<Ar.length;l++)u=Ar[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ar.length&&(l=Ar[0],l.blockedOn===null);)Ld(l),l.blockedOn===null&&Ar.shift()}var Cs=C.ReactCurrentBatchConfig,Ka=!0;function E_(n,r,l,u){var p=ot,v=Cs.transition;Cs.transition=null;try{ot=1,Wc(n,r,l,u)}finally{ot=p,Cs.transition=v}}function T_(n,r,l,u){var p=ot,v=Cs.transition;Cs.transition=null;try{ot=4,Wc(n,r,l,u)}finally{ot=p,Cs.transition=v}}function Wc(n,r,l,u){if(Ka){var p=Xc(n,r,l,u);if(p===null)lu(n,r,u,$a,l),Pd(n,u);else if(S_(p,n,r,l,u))u.stopPropagation();else if(Pd(n,u),r&4&&-1<y_.indexOf(n)){for(;p!==null;){var v=Jo(p);if(v!==null&&Qt(v),v=Xc(n,r,l,u),v===null&&lu(n,r,u,$a,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else lu(n,r,u,null,l)}}var $a=null;function Xc(n,r,l,u){if($a=null,n=V(u),n=ts(n),n!==null)if(r=Ni(n),r===null)n=null;else if(l=r.tag,l===13){if(n=es(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return $a=n,null}function Id(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case se:return 1;case ne:return 4;case $:case Re:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var br=null,jc=null,Za=null;function Nd(){if(Za)return Za;var n,r=jc,l=r.length,u,p="value"in br?br.value:br.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var T=l-n;for(u=1;u<=T&&r[l-u]===p[v-u];u++);return Za=p.slice(n,1<u?1-u:void 0)}function Ja(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Qa(){return!0}function Ud(){return!1}function Yn(n){function r(l,u,p,v,T){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Qa:Ud,this.isPropagationStopped=Ud,this}return ce(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),r}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=Yn(Ps),Vo=ce({},Ps,{view:0,detail:0}),w_=Yn(Vo),qc,Kc,Ho,el=ce({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ho&&(Ho&&n.type==="mousemove"?(qc=n.screenX-Ho.screenX,Kc=n.screenY-Ho.screenY):Kc=qc=0,Ho=n),qc)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),Fd=Yn(el),A_=ce({},el,{dataTransfer:0}),b_=Yn(A_),R_=ce({},Vo,{relatedTarget:0}),$c=Yn(R_),C_=ce({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=Yn(C_),L_=ce({},Ps,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),D_=Yn(L_),I_=ce({},Ps,{data:0}),Od=Yn(I_),N_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},U_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},F_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=F_[n])?!!r[n]:!1}function Zc(){return O_}var k_=ce({},Vo,{key:function(n){if(n.key){var r=N_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ja(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?U_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zc,charCode:function(n){return n.type==="keypress"?Ja(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ja(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),B_=Yn(k_),z_=ce({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=Yn(z_),V_=ce({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zc}),H_=Yn(V_),G_=ce({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=Yn(G_),X_=ce({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),j_=Yn(X_),Y_=[9,13,27,32],Jc=f&&"CompositionEvent"in window,Go=null;f&&"documentMode"in document&&(Go=document.documentMode);var q_=f&&"TextEvent"in window&&!Go,Bd=f&&(!Jc||Go&&8<Go&&11>=Go),zd=" ",Vd=!1;function Hd(n,r){switch(n){case"keyup":return Y_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ls=!1;function K_(n,r){switch(n){case"compositionend":return Gd(r);case"keypress":return r.which!==32?null:(Vd=!0,zd);case"textInput":return n=r.data,n===zd&&Vd?null:n;default:return null}}function $_(n,r){if(Ls)return n==="compositionend"||!Jc&&Hd(n,r)?(n=Nd(),Za=jc=br=null,Ls=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Bd&&r.locale!=="ko"?null:r.data;default:return null}}var Z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wd(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Z_[n.type]:r==="textarea"}function Xd(n,r,l,u){fe(u),r=sl(r,"onChange"),0<r.length&&(l=new Yc("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var Wo=null,Xo=null;function J_(n){cp(n,0)}function tl(n){var r=Fs(n);if(Zt(r))return n}function Q_(n,r){if(n==="change")return r}var jd=!1;if(f){var Qc;if(f){var eu="oninput"in document;if(!eu){var Yd=document.createElement("div");Yd.setAttribute("oninput","return;"),eu=typeof Yd.oninput=="function"}Qc=eu}else Qc=!1;jd=Qc&&(!document.documentMode||9<document.documentMode)}function qd(){Wo&&(Wo.detachEvent("onpropertychange",Kd),Xo=Wo=null)}function Kd(n){if(n.propertyName==="value"&&tl(Xo)){var r=[];Xd(r,Xo,n,V(n)),ei(J_,r)}}function ev(n,r,l){n==="focusin"?(qd(),Wo=r,Xo=l,Wo.attachEvent("onpropertychange",Kd)):n==="focusout"&&qd()}function tv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(Xo)}function nv(n,r){if(n==="click")return tl(r)}function iv(n,r){if(n==="input"||n==="change")return tl(r)}function rv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var mi=typeof Object.is=="function"?Object.is:rv;function jo(n,r){if(mi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!h.call(r,p)||!mi(n[p],r[p]))return!1}return!0}function $d(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zd(n,r){var l=$d(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$d(l)}}function Jd(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Jd(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Qd(){for(var n=window,r=_t();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=_t(n.document)}return r}function tu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function sv(n){var r=Qd(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Jd(l.ownerDocument.documentElement,l)){if(u!==null&&tu(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Zd(l,v);var T=Zd(l,u);p&&T&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(T.node,T.offset)):(r.setEnd(T.node,T.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ov=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,nu=null,Yo=null,iu=!1;function ep(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;iu||Ds==null||Ds!==_t(u)||(u=Ds,"selectionStart"in u&&tu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Yo&&jo(Yo,u)||(Yo=u,u=sl(nu,"onSelect"),0<u.length&&(r=new Yc("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Ds)))}function nl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Is={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},ru={},tp={};f&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function il(n){if(ru[n])return ru[n];if(!Is[n])return n;var r=Is[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in tp)return ru[n]=r[l];return n}var np=il("animationend"),ip=il("animationiteration"),rp=il("animationstart"),sp=il("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,r){op.set(n,r),a(r,[n])}for(var su=0;su<ap.length;su++){var ou=ap[su],av=ou.toLowerCase(),lv=ou[0].toUpperCase()+ou.slice(1);Rr(av,"on"+lv)}Rr(np,"onAnimationEnd"),Rr(ip,"onAnimationIteration"),Rr(rp,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(sp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cv=new Set("cancel close invalid load scroll toggle".split(" ").concat(qo));function lp(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,Rs(u,r,void 0,n),n.currentTarget=null}function cp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var T=u.length-1;0<=T;T--){var I=u[T],B=I.instance,re=I.currentTarget;if(I=I.listener,B!==v&&p.isPropagationStopped())break e;lp(p,I,re),v=B}else for(T=0;T<u.length;T++){if(I=u[T],B=I.instance,re=I.currentTarget,I=I.listener,B!==v&&p.isPropagationStopped())break e;lp(p,I,re),v=B}}}if(ti)throw n=Qr,ti=!1,Qr=null,n}function Ht(n,r){var l=r[pu];l===void 0&&(l=r[pu]=new Set);var u=n+"__bubble";l.has(u)||(up(r,n,2,!1),l.add(u))}function au(n,r,l){var u=0;r&&(u|=4),up(l,n,u,r)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ko(n){if(!n[rl]){n[rl]=!0,i.forEach(function(l){l!=="selectionchange"&&(cv.has(l)||au(l,!1,n),au(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[rl]||(r[rl]=!0,au("selectionchange",!1,r))}}function up(n,r,l,u){switch(Id(r)){case 1:var p=E_;break;case 4:p=T_;break;default:p=Wc}l=p.bind(null,r,l,n),p=void 0,!bs||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function lu(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var I=u.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=u.return;T!==null;){var B=T.tag;if((B===3||B===4)&&(B=T.stateNode.containerInfo,B===p||B.nodeType===8&&B.parentNode===p))return;T=T.return}for(;I!==null;){if(T=ts(I),T===null)return;if(B=T.tag,B===5||B===6){u=v=T;continue e}I=I.parentNode}}u=u.return}ei(function(){var re=v,_e=V(l),ve=[];e:{var ge=op.get(n);if(ge!==void 0){var Ie=Yc,ze=n;switch(n){case"keypress":if(Ja(l)===0)break e;case"keydown":case"keyup":Ie=B_;break;case"focusin":ze="focus",Ie=$c;break;case"focusout":ze="blur",Ie=$c;break;case"beforeblur":case"afterblur":Ie=$c;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=b_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=H_;break;case np:case ip:case rp:Ie=P_;break;case sp:Ie=W_;break;case"scroll":Ie=w_;break;case"wheel":Ie=j_;break;case"copy":case"cut":case"paste":Ie=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=kd}var Xe=(r&4)!==0,en=!Xe&&n==="scroll",q=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var H=re,ee;H!==null;){ee=H;var Me=ee.stateNode;if(ee.tag===5&&Me!==null&&(ee=Me,q!==null&&(Me=An(H,q),Me!=null&&Xe.push($o(H,Me,ee)))),en)break;H=H.return}0<Xe.length&&(ge=new Ie(ge,ze,null,l,_e),ve.push({event:ge,listeners:Xe}))}}if((r&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&l!==ut&&(ze=l.relatedTarget||l.fromElement)&&(ts(ze)||ze[er]))break e;if((Ie||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(ze=l.relatedTarget||l.toElement,Ie=re,ze=ze?ts(ze):null,ze!==null&&(en=Ni(ze),ze!==en||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ie=null,ze=re),Ie!==ze)){if(Xe=Fd,Me="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=kd,Me="onPointerLeave",q="onPointerEnter",H="pointer"),en=Ie==null?ge:Fs(Ie),ee=ze==null?ge:Fs(ze),ge=new Xe(Me,H+"leave",Ie,l,_e),ge.target=en,ge.relatedTarget=ee,Me=null,ts(_e)===re&&(Xe=new Xe(q,H+"enter",ze,l,_e),Xe.target=ee,Xe.relatedTarget=en,Me=Xe),en=Me,Ie&&ze)t:{for(Xe=Ie,q=ze,H=0,ee=Xe;ee;ee=Ns(ee))H++;for(ee=0,Me=q;Me;Me=Ns(Me))ee++;for(;0<H-ee;)Xe=Ns(Xe),H--;for(;0<ee-H;)q=Ns(q),ee--;for(;H--;){if(Xe===q||q!==null&&Xe===q.alternate)break t;Xe=Ns(Xe),q=Ns(q)}Xe=null}else Xe=null;Ie!==null&&fp(ve,ge,Ie,Xe,!1),ze!==null&&en!==null&&fp(ve,en,ze,Xe,!0)}}e:{if(ge=re?Fs(re):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var qe=Q_;else if(Wd(ge))if(jd)qe=iv;else{qe=tv;var et=ev}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(qe=nv);if(qe&&(qe=qe(n,re))){Xd(ve,qe,l,_e);break e}et&&et(n,ge,re),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Xt(ge,"number",ge.value)}switch(et=re?Fs(re):window,n){case"focusin":(Wd(et)||et.contentEditable==="true")&&(Ds=et,nu=re,Yo=null);break;case"focusout":Yo=nu=Ds=null;break;case"mousedown":iu=!0;break;case"contextmenu":case"mouseup":case"dragend":iu=!1,ep(ve,l,_e);break;case"selectionchange":if(ov)break;case"keydown":case"keyup":ep(ve,l,_e)}var tt;if(Jc)e:{switch(n){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else Ls?Hd(n,l)&&(at="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(at="onCompositionStart");at&&(Bd&&l.locale!=="ko"&&(Ls||at!=="onCompositionStart"?at==="onCompositionEnd"&&Ls&&(tt=Nd()):(br=_e,jc="value"in br?br.value:br.textContent,Ls=!0)),et=sl(re,at),0<et.length&&(at=new Od(at,n,null,l,_e),ve.push({event:at,listeners:et}),tt?at.data=tt:(tt=Gd(l),tt!==null&&(at.data=tt)))),(tt=q_?K_(n,l):$_(n,l))&&(re=sl(re,"onBeforeInput"),0<re.length&&(_e=new Od("onBeforeInput","beforeinput",null,l,_e),ve.push({event:_e,listeners:re}),_e.data=tt))}cp(ve,r)})}function $o(n,r,l){return{instance:n,listener:r,currentTarget:l}}function sl(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=An(n,l),v!=null&&u.unshift($o(n,v,p)),v=An(n,r),v!=null&&u.push($o(n,v,p))),n=n.return}return u}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function fp(n,r,l,u,p){for(var v=r._reactName,T=[];l!==null&&l!==u;){var I=l,B=I.alternate,re=I.stateNode;if(B!==null&&B===u)break;I.tag===5&&re!==null&&(I=re,p?(B=An(l,v),B!=null&&T.unshift($o(l,B,I))):p||(B=An(l,v),B!=null&&T.push($o(l,B,I)))),l=l.return}T.length!==0&&n.push({event:r,listeners:T})}var uv=/\r\n?/g,fv=/\u0000|\uFFFD/g;function hp(n){return(typeof n=="string"?n:""+n).replace(uv,`
`).replace(fv,"")}function ol(n,r,l){if(r=hp(r),hp(n)!==r&&l)throw Error(t(425))}function al(){}var cu=null,uu=null;function fu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var hu=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,dv=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(n){return dp.resolve(null).then(n).catch(pv)}:hu;function pv(n){setTimeout(function(){throw n})}function du(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),zo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);zo(r)}function Cr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function pp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Us=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Us,Zo="__reactProps$"+Us,er="__reactContainer$"+Us,pu="__reactEvents$"+Us,mv="__reactListeners$"+Us,gv="__reactHandles$"+Us;function ts(n){var r=n[Ui];if(r)return r;for(var l=n.parentNode;l;){if(r=l[er]||l[Ui]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=pp(n);n!==null;){if(l=n[Ui])return l;n=pp(n)}return r}n=l,l=n.parentNode}return null}function Jo(n){return n=n[Ui]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ll(n){return n[Zo]||null}var mu=[],Os=-1;function Pr(n){return{current:n}}function Gt(n){0>Os||(n.current=mu[Os],mu[Os]=null,Os--)}function Bt(n,r){Os++,mu[Os]=n.current,n.current=r}var Lr={},yn=Pr(Lr),Fn=Pr(!1),ns=Lr;function ks(n,r){var l=n.type.contextTypes;if(!l)return Lr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function On(n){return n=n.childContextTypes,n!=null}function cl(){Gt(Fn),Gt(yn)}function mp(n,r,l){if(yn.current!==Lr)throw Error(t(168));Bt(yn,r),Bt(Fn,l)}function gp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,pe(n)||"Unknown",p));return ce({},l,u)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,ns=yn.current,Bt(yn,n),Bt(Fn,Fn.current),!0}function _p(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=gp(n,r,ns),u.__reactInternalMemoizedMergedChildContext=n,Gt(Fn),Gt(yn),Bt(yn,n)):Gt(Fn),Bt(Fn,l)}var tr=null,fl=!1,gu=!1;function vp(n){tr===null?tr=[n]:tr.push(n)}function _v(n){fl=!0,vp(n)}function Dr(){if(!gu&&tr!==null){gu=!0;var n=0,r=ot;try{var l=tr;for(ot=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}tr=null,fl=!1}catch(p){throw tr!==null&&(tr=tr.slice(n+1)),Xa(se,Dr),p}finally{ot=r,gu=!1}}return null}var Bs=[],zs=0,hl=null,dl=0,ii=[],ri=0,is=null,nr=1,ir="";function rs(n,r){Bs[zs++]=dl,Bs[zs++]=hl,hl=n,dl=r}function xp(n,r,l){ii[ri++]=nr,ii[ri++]=ir,ii[ri++]=is,is=n;var u=nr;n=ir;var p=32-Qe(u)-1;u&=~(1<<p),l+=1;var v=32-Qe(r)+p;if(30<v){var T=p-p%5;v=(u&(1<<T)-1).toString(32),u>>=T,p-=T,nr=1<<32-Qe(r)+p|l<<p|u,ir=v+n}else nr=1<<v|l<<p|u,ir=n}function _u(n){n.return!==null&&(rs(n,1),xp(n,1,0))}function vu(n){for(;n===hl;)hl=Bs[--zs],Bs[zs]=null,dl=Bs[--zs],Bs[zs]=null;for(;n===is;)is=ii[--ri],ii[ri]=null,ir=ii[--ri],ii[ri]=null,nr=ii[--ri],ii[ri]=null}var qn=null,Kn=null,jt=!1,gi=null;function yp(n,r){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Sp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,qn=n,Kn=Cr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,qn=n,Kn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=is!==null?{id:nr,overflow:ir}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,qn=n,Kn=null,!0):!1;default:return!1}}function xu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yu(n){if(jt){var r=Kn;if(r){var l=r;if(!Sp(n,r)){if(xu(n))throw Error(t(418));r=Cr(l.nextSibling);var u=qn;r&&Sp(n,r)?yp(u,l):(n.flags=n.flags&-4097|2,jt=!1,qn=n)}}else{if(xu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,qn=n}}}function Mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function pl(n){if(n!==qn)return!1;if(!jt)return Mp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!fu(n.type,n.memoizedProps)),r&&(r=Kn)){if(xu(n))throw Ep(),Error(t(418));for(;r;)yp(n,r),r=Cr(r.nextSibling)}if(Mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Kn=Cr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Kn=null}}else Kn=qn?Cr(n.stateNode.nextSibling):null;return!0}function Ep(){for(var n=Kn;n;)n=Cr(n.nextSibling)}function Vs(){Kn=qn=null,jt=!1}function Su(n){gi===null?gi=[n]:gi.push(n)}var vv=C.ReactCurrentBatchConfig;function Qo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(T){var I=p.refs;T===null?delete I[v]:I[v]=T},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Tp(n){var r=n._init;return r(n._payload)}function wp(n){function r(q,H){if(n){var ee=q.deletions;ee===null?(q.deletions=[H],q.flags|=16):ee.push(H)}}function l(q,H){if(!n)return null;for(;H!==null;)r(q,H),H=H.sibling;return null}function u(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function p(q,H){return q=zr(q,H),q.index=0,q.sibling=null,q}function v(q,H,ee){return q.index=ee,n?(ee=q.alternate,ee!==null?(ee=ee.index,ee<H?(q.flags|=2,H):ee):(q.flags|=2,H)):(q.flags|=1048576,H)}function T(q){return n&&q.alternate===null&&(q.flags|=2),q}function I(q,H,ee,Me){return H===null||H.tag!==6?(H=df(ee,q.mode,Me),H.return=q,H):(H=p(H,ee),H.return=q,H)}function B(q,H,ee,Me){var qe=ee.type;return qe===k?_e(q,H,ee.props.children,Me,ee.key):H!==null&&(H.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===te&&Tp(qe)===H.type)?(Me=p(H,ee.props),Me.ref=Qo(q,H,ee),Me.return=q,Me):(Me=Bl(ee.type,ee.key,ee.props,null,q.mode,Me),Me.ref=Qo(q,H,ee),Me.return=q,Me)}function re(q,H,ee,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==ee.containerInfo||H.stateNode.implementation!==ee.implementation?(H=pf(ee,q.mode,Me),H.return=q,H):(H=p(H,ee.children||[]),H.return=q,H)}function _e(q,H,ee,Me,qe){return H===null||H.tag!==7?(H=hs(ee,q.mode,Me,qe),H.return=q,H):(H=p(H,ee),H.return=q,H)}function ve(q,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return H=df(""+H,q.mode,ee),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case F:return ee=Bl(H.type,H.key,H.props,null,q.mode,ee),ee.ref=Qo(q,null,H),ee.return=q,ee;case N:return H=pf(H,q.mode,ee),H.return=q,H;case te:var Me=H._init;return ve(q,Me(H._payload),ee)}if(yt(H)||oe(H))return H=hs(H,q.mode,ee,null),H.return=q,H;ml(q,H)}return null}function ge(q,H,ee,Me){var qe=H!==null?H.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return qe!==null?null:I(q,H,""+ee,Me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case F:return ee.key===qe?B(q,H,ee,Me):null;case N:return ee.key===qe?re(q,H,ee,Me):null;case te:return qe=ee._init,ge(q,H,qe(ee._payload),Me)}if(yt(ee)||oe(ee))return qe!==null?null:_e(q,H,ee,Me,null);ml(q,ee)}return null}function Ie(q,H,ee,Me,qe){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return q=q.get(ee)||null,I(H,q,""+Me,qe);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case F:return q=q.get(Me.key===null?ee:Me.key)||null,B(H,q,Me,qe);case N:return q=q.get(Me.key===null?ee:Me.key)||null,re(H,q,Me,qe);case te:var et=Me._init;return Ie(q,H,ee,et(Me._payload),qe)}if(yt(Me)||oe(Me))return q=q.get(ee)||null,_e(H,q,Me,qe,null);ml(H,Me)}return null}function ze(q,H,ee,Me){for(var qe=null,et=null,tt=H,at=H=0,pn=null;tt!==null&&at<ee.length;at++){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var Rt=ge(q,tt,ee[at],Me);if(Rt===null){tt===null&&(tt=pn);break}n&&tt&&Rt.alternate===null&&r(q,tt),H=v(Rt,H,at),et===null?qe=Rt:et.sibling=Rt,et=Rt,tt=pn}if(at===ee.length)return l(q,tt),jt&&rs(q,at),qe;if(tt===null){for(;at<ee.length;at++)tt=ve(q,ee[at],Me),tt!==null&&(H=v(tt,H,at),et===null?qe=tt:et.sibling=tt,et=tt);return jt&&rs(q,at),qe}for(tt=u(q,tt);at<ee.length;at++)pn=Ie(tt,q,at,ee[at],Me),pn!==null&&(n&&pn.alternate!==null&&tt.delete(pn.key===null?at:pn.key),H=v(pn,H,at),et===null?qe=pn:et.sibling=pn,et=pn);return n&&tt.forEach(function(Vr){return r(q,Vr)}),jt&&rs(q,at),qe}function Xe(q,H,ee,Me){var qe=oe(ee);if(typeof qe!="function")throw Error(t(150));if(ee=qe.call(ee),ee==null)throw Error(t(151));for(var et=qe=null,tt=H,at=H=0,pn=null,Rt=ee.next();tt!==null&&!Rt.done;at++,Rt=ee.next()){tt.index>at?(pn=tt,tt=null):pn=tt.sibling;var Vr=ge(q,tt,Rt.value,Me);if(Vr===null){tt===null&&(tt=pn);break}n&&tt&&Vr.alternate===null&&r(q,tt),H=v(Vr,H,at),et===null?qe=Vr:et.sibling=Vr,et=Vr,tt=pn}if(Rt.done)return l(q,tt),jt&&rs(q,at),qe;if(tt===null){for(;!Rt.done;at++,Rt=ee.next())Rt=ve(q,Rt.value,Me),Rt!==null&&(H=v(Rt,H,at),et===null?qe=Rt:et.sibling=Rt,et=Rt);return jt&&rs(q,at),qe}for(tt=u(q,tt);!Rt.done;at++,Rt=ee.next())Rt=Ie(tt,q,at,Rt.value,Me),Rt!==null&&(n&&Rt.alternate!==null&&tt.delete(Rt.key===null?at:Rt.key),H=v(Rt,H,at),et===null?qe=Rt:et.sibling=Rt,et=Rt);return n&&tt.forEach(function(Zv){return r(q,Zv)}),jt&&rs(q,at),qe}function en(q,H,ee,Me){if(typeof ee=="object"&&ee!==null&&ee.type===k&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case F:e:{for(var qe=ee.key,et=H;et!==null;){if(et.key===qe){if(qe=ee.type,qe===k){if(et.tag===7){l(q,et.sibling),H=p(et,ee.props.children),H.return=q,q=H;break e}}else if(et.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===te&&Tp(qe)===et.type){l(q,et.sibling),H=p(et,ee.props),H.ref=Qo(q,et,ee),H.return=q,q=H;break e}l(q,et);break}else r(q,et);et=et.sibling}ee.type===k?(H=hs(ee.props.children,q.mode,Me,ee.key),H.return=q,q=H):(Me=Bl(ee.type,ee.key,ee.props,null,q.mode,Me),Me.ref=Qo(q,H,ee),Me.return=q,q=Me)}return T(q);case N:e:{for(et=ee.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ee.containerInfo&&H.stateNode.implementation===ee.implementation){l(q,H.sibling),H=p(H,ee.children||[]),H.return=q,q=H;break e}else{l(q,H);break}else r(q,H);H=H.sibling}H=pf(ee,q.mode,Me),H.return=q,q=H}return T(q);case te:return et=ee._init,en(q,H,et(ee._payload),Me)}if(yt(ee))return ze(q,H,ee,Me);if(oe(ee))return Xe(q,H,ee,Me);ml(q,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,H!==null&&H.tag===6?(l(q,H.sibling),H=p(H,ee),H.return=q,q=H):(l(q,H),H=df(ee,q.mode,Me),H.return=q,q=H),T(q)):l(q,H)}return en}var Hs=wp(!0),Ap=wp(!1),gl=Pr(null),_l=null,Gs=null,Mu=null;function Eu(){Mu=Gs=_l=null}function Tu(n){var r=gl.current;Gt(gl),n._currentValue=r}function wu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Ws(n,r){_l=n,Mu=Gs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(kn=!0),n.firstContext=null)}function si(n){var r=n._currentValue;if(Mu!==n)if(n={context:n,memoizedValue:r,next:null},Gs===null){if(_l===null)throw Error(t(308));Gs=n,_l.dependencies={lanes:0,firstContext:n}}else Gs=Gs.next=n;return r}var ss=null;function Au(n){ss===null?ss=[n]:ss.push(n)}function bp(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Au(r)):(l.next=p.next,p.next=l),r.interleaved=l,rr(n,u)}function rr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ir=!1;function bu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function sr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Nr(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(bt&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,rr(n,l)}return p=u.interleaved,p===null?(r.next=r,Au(u)):(r.next=p.next,p.next=r),u.interleaved=r,rr(n,l)}function vl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Ct(n,l)}}function Cp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=T:v=v.next=T,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function xl(n,r,l,u){var p=n.updateQueue;Ir=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var B=I,re=B.next;B.next=null,T===null?v=re:T.next=re,T=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=re:I.next=re,_e.lastBaseUpdate=B))}if(v!==null){var ve=p.baseState;T=0,_e=re=B=null,I=v;do{var ge=I.lane,Ie=I.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=n,Xe=I;switch(ge=r,Ie=l,Xe.tag){case 1:if(ze=Xe.payload,typeof ze=="function"){ve=ze.call(Ie,ve,ge);break e}ve=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Xe.payload,ge=typeof ze=="function"?ze.call(Ie,ve,ge):ze,ge==null)break e;ve=ce({},ve,ge);break e;case 2:Ir=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=p.effects,ge===null?p.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(re=_e=Ie,B=ve):_e=_e.next=Ie,T|=ge;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);if(_e===null&&(B=ve),p.baseState=B,p.firstBaseUpdate=re,p.lastBaseUpdate=_e,r=p.shared.interleaved,r!==null){p=r;do T|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);ls|=T,n.lanes=T,n.memoizedState=ve}}function Pp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ea={},Fi=Pr(ea),ta=Pr(ea),na=Pr(ea);function os(n){if(n===ea)throw Error(t(174));return n}function Ru(n,r){switch(Bt(na,r),Bt(ta,n),Bt(Fi,ea),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:me(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=me(r,n)}Gt(Fi),Bt(Fi,r)}function Xs(){Gt(Fi),Gt(ta),Gt(na)}function Lp(n){os(na.current);var r=os(Fi.current),l=me(r,n.type);r!==l&&(Bt(ta,n),Bt(Fi,l))}function Cu(n){ta.current===n&&(Gt(Fi),Gt(ta))}var Yt=Pr(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Pu=[];function Lu(){for(var n=0;n<Pu.length;n++)Pu[n]._workInProgressVersionPrimary=null;Pu.length=0}var Sl=C.ReactCurrentDispatcher,Du=C.ReactCurrentBatchConfig,as=0,qt=null,sn=null,hn=null,Ml=!1,ia=!1,ra=0,xv=0;function Sn(){throw Error(t(321))}function Iu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!mi(n[l],r[l]))return!1;return!0}function Nu(n,r,l,u,p,v){if(as=v,qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=n===null||n.memoizedState===null?Ev:Tv,n=l(u,p),ia){v=0;do{if(ia=!1,ra=0,25<=v)throw Error(t(301));v+=1,hn=sn=null,r.updateQueue=null,Sl.current=wv,n=l(u,p)}while(ia)}if(Sl.current=wl,r=sn!==null&&sn.next!==null,as=0,hn=sn=qt=null,Ml=!1,r)throw Error(t(300));return n}function Uu(){var n=ra!==0;return ra=0,n}function Oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?qt.memoizedState=hn=n:hn=hn.next=n,hn}function oi(){if(sn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=sn.next;var r=hn===null?qt.memoizedState:hn.next;if(r!==null)hn=r,sn=n;else{if(n===null)throw Error(t(310));sn=n,n={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},hn===null?qt.memoizedState=hn=n:hn=hn.next=n}return hn}function sa(n,r){return typeof r=="function"?r(n):r}function Fu(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=sn,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var I=T=null,B=null,re=v;do{var _e=re.lane;if((as&_e)===_e)B!==null&&(B=B.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var ve={lane:_e,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};B===null?(I=B=ve,T=u):B=B.next=ve,qt.lanes|=_e,ls|=_e}re=re.next}while(re!==null&&re!==v);B===null?T=u:B.next=I,mi(u,r.memoizedState)||(kn=!0),r.memoizedState=u,r.baseState=T,r.baseQueue=B,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,qt.lanes|=v,ls|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Ou(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var T=p=p.next;do v=n(v,T.action),T=T.next;while(T!==p);mi(v,r.memoizedState)||(kn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Dp(){}function Ip(n,r){var l=qt,u=oi(),p=r(),v=!mi(u.memoizedState,p);if(v&&(u.memoizedState=p,kn=!0),u=u.queue,ku(Fp.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||hn!==null&&hn.memoizedState.tag&1){if(l.flags|=2048,oa(9,Up.bind(null,l,u,p,r),void 0,null),dn===null)throw Error(t(349));(as&30)!==0||Np(l,r,p)}return p}function Np(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Up(n,r,l,u){r.value=l,r.getSnapshot=u,Op(r)&&kp(n)}function Fp(n,r,l){return l(function(){Op(r)&&kp(n)})}function Op(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!mi(n,l)}catch{return!0}}function kp(n){var r=rr(n,1);r!==null&&yi(r,n,1,-1)}function Bp(n){var r=Oi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:n},r.queue=n,n=n.dispatch=Mv.bind(null,qt,n),[r.memoizedState,n]}function oa(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=qt.updateQueue,r===null?(r={lastEffect:null,stores:null},qt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function zp(){return oi().memoizedState}function El(n,r,l,u){var p=Oi();qt.flags|=n,p.memoizedState=oa(1|r,l,void 0,u===void 0?null:u)}function Tl(n,r,l,u){var p=oi();u=u===void 0?null:u;var v=void 0;if(sn!==null){var T=sn.memoizedState;if(v=T.destroy,u!==null&&Iu(u,T.deps)){p.memoizedState=oa(r,l,v,u);return}}qt.flags|=n,p.memoizedState=oa(1|r,l,v,u)}function Vp(n,r){return El(8390656,8,n,r)}function ku(n,r){return Tl(2048,8,n,r)}function Hp(n,r){return Tl(4,2,n,r)}function Gp(n,r){return Tl(4,4,n,r)}function Wp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Xp(n,r,l){return l=l!=null?l.concat([n]):null,Tl(4,4,Wp.bind(null,r,n),l)}function Bu(){}function jp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Iu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Yp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Iu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function qp(n,r,l){return(as&21)===0?(n.baseState&&(n.baseState=!1,kn=!0),n.memoizedState=l):(mi(l,r)||(l=Nn(),qt.lanes|=l,ls|=l,n.baseState=!0),r)}function yv(n,r){var l=ot;ot=l!==0&&4>l?l:4,n(!0);var u=Du.transition;Du.transition={};try{n(!1),r()}finally{ot=l,Du.transition=u}}function Kp(){return oi().memoizedState}function Sv(n,r,l){var u=kr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},$p(n))Zp(r,l);else if(l=bp(n,r,l,u),l!==null){var p=Cn();yi(l,n,u,p),Jp(l,r,u)}}function Mv(n,r,l){var u=kr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if($p(n))Zp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var T=r.lastRenderedState,I=v(T,l);if(p.hasEagerState=!0,p.eagerState=I,mi(I,T)){var B=r.interleaved;B===null?(p.next=p,Au(r)):(p.next=B.next,B.next=p),r.interleaved=p;return}}catch{}l=bp(n,r,p,u),l!==null&&(p=Cn(),yi(l,n,u,p),Jp(l,r,u))}}function $p(n){var r=n.alternate;return n===qt||r!==null&&r===qt}function Zp(n,r){ia=Ml=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Jp(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Ct(n,l)}}var wl={readContext:si,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Ev={readContext:si,useCallback:function(n,r){return Oi().memoizedState=[n,r===void 0?null:r],n},useContext:si,useEffect:Vp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,El(4194308,4,Wp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return El(4194308,4,n,r)},useInsertionEffect:function(n,r){return El(4,2,n,r)},useMemo:function(n,r){var l=Oi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Oi();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Sv.bind(null,qt,n),[u.memoizedState,n]},useRef:function(n){var r=Oi();return n={current:n},r.memoizedState=n},useState:Bp,useDebugValue:Bu,useDeferredValue:function(n){return Oi().memoizedState=n},useTransition:function(){var n=Bp(!1),r=n[0];return n=yv.bind(null,n[1]),Oi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=qt,p=Oi();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),dn===null)throw Error(t(349));(as&30)!==0||Np(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Vp(Fp.bind(null,u,v,n),[n]),u.flags|=2048,oa(9,Up.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=Oi(),r=dn.identifierPrefix;if(jt){var l=ir,u=nr;l=(u&~(1<<32-Qe(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=ra++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=xv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Tv={readContext:si,useCallback:jp,useContext:si,useEffect:ku,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Yp,useReducer:Fu,useRef:zp,useState:function(){return Fu(sa)},useDebugValue:Bu,useDeferredValue:function(n){var r=oi();return qp(r,sn.memoizedState,n)},useTransition:function(){var n=Fu(sa)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:Kp,unstable_isNewReconciler:!1},wv={readContext:si,useCallback:jp,useContext:si,useEffect:ku,useImperativeHandle:Xp,useInsertionEffect:Hp,useLayoutEffect:Gp,useMemo:Yp,useReducer:Ou,useRef:zp,useState:function(){return Ou(sa)},useDebugValue:Bu,useDeferredValue:function(n){var r=oi();return sn===null?r.memoizedState=n:qp(r,sn.memoizedState,n)},useTransition:function(){var n=Ou(sa)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Dp,useSyncExternalStore:Ip,useId:Kp,unstable_isNewReconciler:!1};function _i(n,r){if(n&&n.defaultProps){r=ce({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function zu(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ce({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Al={isMounted:function(n){return(n=n._reactInternals)?Ni(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=kr(n),v=sr(u,p);v.payload=r,l!=null&&(v.callback=l),r=Nr(n,v,p),r!==null&&(yi(r,n,p,u),vl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=kr(n),v=sr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Nr(n,v,p),r!==null&&(yi(r,n,p,u),vl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),u=kr(n),p=sr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Nr(n,p,u),r!==null&&(yi(r,n,u,l),vl(r,n,u))}};function Qp(n,r,l,u,p,v,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,T):r.prototype&&r.prototype.isPureReactComponent?!jo(l,u)||!jo(p,v):!0}function em(n,r,l){var u=!1,p=Lr,v=r.contextType;return typeof v=="object"&&v!==null?v=si(v):(p=On(r)?ns:yn.current,u=r.contextTypes,v=(u=u!=null)?ks(n,p):Lr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Al,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function tm(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Al.enqueueReplaceState(r,r.state,null)}function Vu(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},bu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=si(v):(v=On(r)?ns:yn.current,p.context=ks(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(zu(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Al.enqueueReplaceState(p,p.state,null),xl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,r){try{var l="",u=r;do l+=$e(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Hu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Gu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Av=typeof WeakMap=="function"?WeakMap:Map;function nm(n,r,l){l=sr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Il||(Il=!0,sf=u),Gu(n,r)},l}function im(n,r,l){l=sr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){Gu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Gu(n,r),typeof u!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})}),l}function rm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Av;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=zv.bind(null,n,r,l),r.then(n,n))}function sm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function om(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=sr(-1,1),r.tag=2,Nr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var bv=C.ReactCurrentOwner,kn=!1;function Rn(n,r,l,u){r.child=n===null?Ap(r,null,l,u):Hs(r,n.child,l,u)}function am(n,r,l,u,p){l=l.render;var v=r.ref;return Ws(r,p),u=Nu(n,r,l,u,v,p),l=Uu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,or(n,r,p)):(jt&&l&&_u(r),r.flags|=1,Rn(n,r,u,p),r.child)}function lm(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!hf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,cm(n,r,v,u,p)):(n=Bl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var T=v.memoizedProps;if(l=l.compare,l=l!==null?l:jo,l(T,u)&&n.ref===r.ref)return or(n,r,p)}return r.flags|=1,n=zr(v,u),n.ref=r.ref,n.return=r,r.child=n}function cm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if(jo(v,u)&&n.ref===r.ref)if(kn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(kn=!0);else return r.lanes=n.lanes,or(n,r,p)}return Wu(n,r,l,u,p)}function um(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Bt(qs,$n),$n|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Bt(qs,$n),$n|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,Bt(qs,$n),$n|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,Bt(qs,$n),$n|=u;return Rn(n,r,p,l),r.child}function fm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Wu(n,r,l,u,p){var v=On(l)?ns:yn.current;return v=ks(r,v),Ws(r,p),l=Nu(n,r,l,u,v,p),u=Uu(),n!==null&&!kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,or(n,r,p)):(jt&&u&&_u(r),r.flags|=1,Rn(n,r,l,p),r.child)}function hm(n,r,l,u,p){if(On(l)){var v=!0;ul(r)}else v=!1;if(Ws(r,p),r.stateNode===null)Rl(n,r),em(r,l,u),Vu(r,l,u,p),u=!0;else if(n===null){var T=r.stateNode,I=r.memoizedProps;T.props=I;var B=T.context,re=l.contextType;typeof re=="object"&&re!==null?re=si(re):(re=On(l)?ns:yn.current,re=ks(r,re));var _e=l.getDerivedStateFromProps,ve=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ve||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==u||B!==re)&&tm(r,T,u,re),Ir=!1;var ge=r.memoizedState;T.state=ge,xl(r,u,T,p),B=r.memoizedState,I!==u||ge!==B||Fn.current||Ir?(typeof _e=="function"&&(zu(r,l,_e,u),B=r.memoizedState),(I=Ir||Qp(r,l,I,u,ge,B,re))?(ve||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(r.flags|=4194308)):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=B),T.props=u,T.state=B,T.context=re,u=I):(typeof T.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{T=r.stateNode,Rp(n,r),I=r.memoizedProps,re=r.type===r.elementType?I:_i(r.type,I),T.props=re,ve=r.pendingProps,ge=T.context,B=l.contextType,typeof B=="object"&&B!==null?B=si(B):(B=On(l)?ns:yn.current,B=ks(r,B));var Ie=l.getDerivedStateFromProps;(_e=typeof Ie=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ve||ge!==B)&&tm(r,T,u,B),Ir=!1,ge=r.memoizedState,T.state=ge,xl(r,u,T,p);var ze=r.memoizedState;I!==ve||ge!==ze||Fn.current||Ir?(typeof Ie=="function"&&(zu(r,l,Ie,u),ze=r.memoizedState),(re=Ir||Qp(r,l,re,u,ge,ze,B)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,ze,B),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,ze,B)),typeof T.componentDidUpdate=="function"&&(r.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ze),T.props=u,T.state=ze,T.context=B,u=re):(typeof T.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(r.flags|=1024),u=!1)}return Xu(n,r,l,u,v,p)}function Xu(n,r,l,u,p,v){fm(n,r);var T=(r.flags&128)!==0;if(!u&&!T)return p&&_p(r,l,!1),or(n,r,v);u=r.stateNode,bv.current=r;var I=T&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&T?(r.child=Hs(r,n.child,null,v),r.child=Hs(r,null,I,v)):Rn(n,r,I,v),r.memoizedState=u.state,p&&_p(r,l,!0),r.child}function dm(n){var r=n.stateNode;r.pendingContext?mp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&mp(n,r.context,!1),Ru(n,r.containerInfo)}function pm(n,r,l,u,p){return Vs(),Su(p),r.flags|=256,Rn(n,r,l,u),r.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function mm(n,r,l){var u=r.pendingProps,p=Yt.current,v=!1,T=(r.flags&128)!==0,I;if((I=T)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Bt(Yt,p&1),n===null)return yu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(T=u.children,n=u.fallback,v?(u=r.mode,v=r.child,T={mode:"hidden",children:T},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=zl(T,u,0,null),n=hs(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Yu(l),r.memoizedState=ju,n):qu(r,T));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return Rv(n,r,T,u,I,p,l);if(v){v=u.fallback,T=r.mode,p=n.child,I=p.sibling;var B={mode:"hidden",children:u.children};return(T&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=B,r.deletions=null):(u=zr(p,B),u.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=zr(I,v):(v=hs(v,T,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,T=n.child.memoizedState,T=T===null?Yu(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=n.childLanes&~l,r.memoizedState=ju,u}return v=n.child,n=v.sibling,u=zr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function qu(n,r){return r=zl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function bl(n,r,l,u){return u!==null&&Su(u),Hs(r,n.child,null,l),n=qu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Rv(n,r,l,u,p,v,T){if(l)return r.flags&256?(r.flags&=-257,u=Hu(Error(t(422))),bl(n,r,T,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=zl({mode:"visible",children:u.children},p,0,null),v=hs(v,p,T,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Hs(r,n.child,null,T),r.child.memoizedState=Yu(T),r.memoizedState=ju,v);if((r.mode&1)===0)return bl(n,r,T,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var I=u.dgst;return u=I,v=Error(t(419)),u=Hu(v,u,void 0),bl(n,r,T,u)}if(I=(T&n.childLanes)!==0,kn||I){if(u=dn,u!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|T))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,rr(n,p),yi(u,n,p,-1))}return ff(),u=Hu(Error(t(421))),bl(n,r,T,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Vv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Kn=Cr(p.nextSibling),qn=r,jt=!0,gi=null,n!==null&&(ii[ri++]=nr,ii[ri++]=ir,ii[ri++]=is,nr=n.id,ir=n.overflow,is=r),r=qu(r,u.children),r.flags|=4096,r)}function gm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),wu(n.return,r,l)}function Ku(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function _m(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Rn(n,r,u.children,l),u=Yt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&gm(n,l,r);else if(n.tag===19)gm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Bt(Yt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&yl(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Ku(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&yl(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Ku(r,!0,l,null,v);break;case"together":Ku(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function or(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ls|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=zr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=zr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Cv(n,r,l){switch(r.tag){case 3:dm(r),Vs();break;case 5:Lp(r);break;case 1:On(r.type)&&ul(r);break;case 4:Ru(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;Bt(gl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(Bt(Yt,Yt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?mm(n,r,l):(Bt(Yt,Yt.current&1),n=or(n,r,l),n!==null?n.sibling:null);Bt(Yt,Yt.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return _m(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Bt(Yt,Yt.current),u)break;return null;case 22:case 23:return r.lanes=0,um(n,r,l)}return or(n,r,l)}var vm,$u,xm,ym;vm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},$u=function(){},xm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,os(Fi.current);var v=null;switch(l){case"input":p=Tt(n,p),u=Tt(n,u),v=[];break;case"select":p=ce({},p,{value:void 0}),u=ce({},u,{value:void 0}),v=[];break;case"textarea":p=He(n,p),u=He(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=al)}ke(l,u);var T;l=null;for(re in p)if(!u.hasOwnProperty(re)&&p.hasOwnProperty(re)&&p[re]!=null)if(re==="style"){var I=p[re];for(T in I)I.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(s.hasOwnProperty(re)?v||(v=[]):(v=v||[]).push(re,null));for(re in u){var B=u[re];if(I=p?.[re],u.hasOwnProperty(re)&&B!==I&&(B!=null||I!=null))if(re==="style")if(I){for(T in I)!I.hasOwnProperty(T)||B&&B.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in B)B.hasOwnProperty(T)&&I[T]!==B[T]&&(l||(l={}),l[T]=B[T])}else l||(v||(v=[]),v.push(re,l)),l=B;else re==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,I=I?I.__html:void 0,B!=null&&I!==B&&(v=v||[]).push(re,B)):re==="children"?typeof B!="string"&&typeof B!="number"||(v=v||[]).push(re,""+B):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(s.hasOwnProperty(re)?(B!=null&&re==="onScroll"&&Ht("scroll",n),v||I===B||(v=[])):(v=v||[]).push(re,B))}l&&(v=v||[]).push("style",l);var re=v;(r.updateQueue=re)&&(r.flags|=4)}},ym=function(n,r,l,u){l!==u&&(r.flags|=4)};function aa(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function Pv(n,r,l){var u=r.pendingProps;switch(vu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(r),null;case 1:return On(r.type)&&cl(),Mn(r),null;case 3:return u=r.stateNode,Xs(),Gt(Fn),Gt(yn),Lu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(pl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,gi!==null&&(lf(gi),gi=null))),$u(n,r),Mn(r),null;case 5:Cu(r);var p=os(na.current);if(l=r.type,n!==null&&r.stateNode!=null)xm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Mn(r),null}if(n=os(Fi.current),pl(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Ui]=r,u[Zo]=v,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(p=0;p<qo.length;p++)Ht(qo[p],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":Pt(u,v),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Ht("invalid",u);break;case"textarea":D(u,v),Ht("invalid",u)}ke(l,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?u.textContent!==I&&(v.suppressHydrationWarning!==!0&&ol(u.textContent,I,n),p=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&ol(u.textContent,I,n),p=["children",""+I]):s.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ht("scroll",u)}switch(l){case"input":nt(u),z(u,v,!0);break;case"textarea":nt(u),G(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=al)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(l,{is:u.is}):(n=T.createElement(l),l==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,l),n[Ui]=r,n[Zo]=u,vm(n,r,!1,!1),r.stateNode=n;e:{switch(T=Pe(l,u),l){case"dialog":Ht("cancel",n),Ht("close",n),p=u;break;case"iframe":case"object":case"embed":Ht("load",n),p=u;break;case"video":case"audio":for(p=0;p<qo.length;p++)Ht(qo[p],n);p=u;break;case"source":Ht("error",n),p=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),p=u;break;case"details":Ht("toggle",n),p=u;break;case"input":Pt(n,u),p=Tt(n,u),Ht("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ce({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":D(n,u),p=He(n,u),Ht("invalid",n);break;default:p=u}ke(l,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var B=I[v];v==="style"?Ee(n,B):v==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&Oe(n,B)):v==="children"?typeof B=="string"?(l!=="textarea"||B!=="")&&Te(n,B):typeof B=="number"&&Te(n,""+B):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?B!=null&&v==="onScroll"&&Ht("scroll",n):B!=null&&L(n,v,B,T))}switch(l){case"input":nt(n),z(n,u,!1);break;case"textarea":nt(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+de(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?wt(n,!!u.multiple,v,!1):u.defaultValue!=null&&wt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=al)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Mn(r),null;case 6:if(n&&r.stateNode!=null)ym(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=os(na.current),os(Fi.current),pl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Ui]=r,(v=u.nodeValue!==l)&&(n=qn,n!==null))switch(n.tag){case 3:ol(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ui]=r,r.stateNode=u}return Mn(r),null;case 13:if(Gt(Yt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Kn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ep(),Vs(),r.flags|=98560,v=!1;else if(v=pl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ui]=r}else Vs(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Mn(r),v=!1}else gi!==null&&(lf(gi),gi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Yt.current&1)!==0?on===0&&(on=3):ff())),r.updateQueue!==null&&(r.flags|=4),Mn(r),null);case 4:return Xs(),$u(n,r),n===null&&Ko(r.stateNode.containerInfo),Mn(r),null;case 10:return Tu(r.type._context),Mn(r),null;case 17:return On(r.type)&&cl(),Mn(r),null;case 19:if(Gt(Yt),v=r.memoizedState,v===null)return Mn(r),null;if(u=(r.flags&128)!==0,T=v.rendering,T===null)if(u)aa(v,!1);else{if(on!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(T=yl(n),T!==null){for(r.flags|=128,aa(v,!1),u=T.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,n=T.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Bt(Yt,Yt.current&1|2),r.child}n=n.sibling}v.tail!==null&&b()>Ks&&(r.flags|=128,u=!0,aa(v,!1),r.lanes=4194304)}else{if(!u)if(n=yl(T),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),aa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!jt)return Mn(r),null}else 2*b()-v.renderingStartTime>Ks&&l!==1073741824&&(r.flags|=128,u=!0,aa(v,!1),r.lanes=4194304);v.isBackwards?(T.sibling=r.child,r.child=T):(l=v.last,l!==null?l.sibling=T:r.child=T,v.last=T)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=b(),r.sibling=null,l=Yt.current,Bt(Yt,u?l&1|2:l&1),r):(Mn(r),null);case 22:case 23:return uf(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?($n&1073741824)!==0&&(Mn(r),r.subtreeFlags&6&&(r.flags|=8192)):Mn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Lv(n,r){switch(vu(r),r.tag){case 1:return On(r.type)&&cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xs(),Gt(Fn),Gt(yn),Lu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Cu(r),null;case 13:if(Gt(Yt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Vs()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(Yt),null;case 4:return Xs(),null;case 10:return Tu(r.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var Cl=!1,En=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function Ys(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){$t(n,r,u)}else l.current=null}function Zu(n,r,l){try{l()}catch(u){$t(n,r,u)}}var Sm=!1;function Iv(n,r){if(cu=Ka,n=Qd(),tu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var T=0,I=-1,B=-1,re=0,_e=0,ve=n,ge=null;t:for(;;){for(var Ie;ve!==l||p!==0&&ve.nodeType!==3||(I=T+p),ve!==v||u!==0&&ve.nodeType!==3||(B=T+u),ve.nodeType===3&&(T+=ve.nodeValue.length),(Ie=ve.firstChild)!==null;)ge=ve,ve=Ie;for(;;){if(ve===n)break t;if(ge===l&&++re===p&&(I=T),ge===v&&++_e===u&&(B=T),(Ie=ve.nextSibling)!==null)break;ve=ge,ge=ve.parentNode}ve=Ie}l=I===-1||B===-1?null:{start:I,end:B}}else l=null}l=l||{start:0,end:0}}else l=null;for(uu={focusedElem:n,selectionRange:l},Ka=!1,Fe=r;Fe!==null;)if(r=Fe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Fe=n;else for(;Fe!==null;){r=Fe;try{var ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Xe=ze.memoizedProps,en=ze.memoizedState,q=r.stateNode,H=q.getSnapshotBeforeUpdate(r.elementType===r.type?Xe:_i(r.type,Xe),en);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ee=r.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){$t(r,r.return,Me)}if(n=r.sibling,n!==null){n.return=r.return,Fe=n;break}Fe=r.return}return ze=Sm,Sm=!1,ze}function la(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Zu(r,l,v)}p=p.next}while(p!==u)}}function Pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Ju(n){var r=n.ref;if(r!==null){var l=n.stateNode;n.tag,n=l,typeof r=="function"?r(n):r.current=n}}function Mm(n){var r=n.alternate;r!==null&&(n.alternate=null,Mm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ui],delete r[Zo],delete r[pu],delete r[mv],delete r[gv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Em(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Em(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Qu(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=al));else if(u!==4&&(n=n.child,n!==null))for(Qu(n,r,l),n=n.sibling;n!==null;)Qu(n,r,l),n=n.sibling}function ef(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ef(n,r,l),n=n.sibling;n!==null;)ef(n,r,l),n=n.sibling}var vn=null,vi=!1;function Ur(n,r,l){for(l=l.child;l!==null;)wm(n,r,l),l=l.sibling}function wm(n,r,l){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(be,l)}catch{}switch(l.tag){case 5:En||Ys(l,r);case 6:var u=vn,p=vi;vn=null,Ur(n,r,l),vn=u,vi=p,vn!==null&&(vi?(n=vn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):vn.removeChild(l.stateNode));break;case 18:vn!==null&&(vi?(n=vn,l=l.stateNode,n.nodeType===8?du(n.parentNode,l):n.nodeType===1&&du(n,l),zo(n)):du(vn,l.stateNode));break;case 4:u=vn,p=vi,vn=l.stateNode.containerInfo,vi=!0,Ur(n,r,l),vn=u,vi=p;break;case 0:case 11:case 14:case 15:if(!En&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Zu(l,r,T),p=p.next}while(p!==u)}Ur(n,r,l);break;case 1:if(!En&&(Ys(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(I){$t(l,r,I)}Ur(n,r,l);break;case 21:Ur(n,r,l);break;case 22:l.mode&1?(En=(u=En)||l.memoizedState!==null,Ur(n,r,l),En=u):Ur(n,r,l);break;default:Ur(n,r,l)}}function Am(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Dv),r.forEach(function(u){var p=Hv.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function xi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,T=r,I=T;e:for(;I!==null;){switch(I.tag){case 5:vn=I.stateNode,vi=!1;break e;case 3:vn=I.stateNode.containerInfo,vi=!0;break e;case 4:vn=I.stateNode.containerInfo,vi=!0;break e}I=I.return}if(vn===null)throw Error(t(160));wm(v,T,p),vn=null,vi=!1;var B=p.alternate;B!==null&&(B.return=null),p.return=null}catch(re){$t(p,r,re)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)bm(r,n),r=r.sibling}function bm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(xi(r,n),ki(n),u&4){try{la(3,n,n.return),Pl(3,n)}catch(Xe){$t(n,n.return,Xe)}try{la(5,n,n.return)}catch(Xe){$t(n,n.return,Xe)}}break;case 1:xi(r,n),ki(n),u&512&&l!==null&&Ys(l,l.return);break;case 5:if(xi(r,n),ki(n),u&512&&l!==null&&Ys(l,l.return),n.flags&32){var p=n.stateNode;try{Te(p,"")}catch(Xe){$t(n,n.return,Xe)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,T=l!==null?l.memoizedProps:v,I=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&ft(p,v),Pe(I,T);var re=Pe(I,v);for(T=0;T<B.length;T+=2){var _e=B[T],ve=B[T+1];_e==="style"?Ee(p,ve):_e==="dangerouslySetInnerHTML"?Oe(p,ve):_e==="children"?Te(p,ve):L(p,_e,ve,re)}switch(I){case"input":Vt(p,v);break;case"textarea":E(p,v);break;case"select":var ge=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Ie=v.value;Ie!=null?wt(p,!!v.multiple,Ie,!1):ge!==!!v.multiple&&(v.defaultValue!=null?wt(p,!!v.multiple,v.defaultValue,!0):wt(p,!!v.multiple,v.multiple?[]:"",!1))}p[Zo]=v}catch(Xe){$t(n,n.return,Xe)}}break;case 6:if(xi(r,n),ki(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(Xe){$t(n,n.return,Xe)}}break;case 3:if(xi(r,n),ki(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{zo(r.containerInfo)}catch(Xe){$t(n,n.return,Xe)}break;case 4:xi(r,n),ki(n);break;case 13:xi(r,n),ki(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(rf=b())),u&4&&Am(n);break;case 22:if(_e=l!==null&&l.memoizedState!==null,n.mode&1?(En=(re=En)||_e,xi(r,n),En=re):xi(r,n),ki(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!_e&&(n.mode&1)!==0)for(Fe=n,_e=n.child;_e!==null;){for(ve=Fe=_e;Fe!==null;){switch(ge=Fe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:la(4,ge,ge.return);break;case 1:Ys(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ge,l=ge.return;try{r=u,ze.props=r.memoizedProps,ze.state=r.memoizedState,ze.componentWillUnmount()}catch(Xe){$t(u,l,Xe)}}break;case 5:Ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Pm(ve);continue}}Ie!==null?(Ie.return=ge,Fe=Ie):Pm(ve)}_e=_e.sibling}e:for(_e=null,ve=n;;){if(ve.tag===5){if(_e===null){_e=ve;try{p=ve.stateNode,re?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ve.stateNode,B=ve.memoizedProps.style,T=B!=null&&B.hasOwnProperty("display")?B.display:null,I.style.display=xe("display",T))}catch(Xe){$t(n,n.return,Xe)}}}else if(ve.tag===6){if(_e===null)try{ve.stateNode.nodeValue=re?"":ve.memoizedProps}catch(Xe){$t(n,n.return,Xe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;_e===ve&&(_e=null),ve=ve.return}_e===ve&&(_e=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:xi(r,n),ki(n),u&4&&Am(n);break;case 21:break;default:xi(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Em(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Te(p,""),u.flags&=-33);var v=Tm(n);ef(n,v,p);break;case 3:case 4:var T=u.stateNode.containerInfo,I=Tm(n);Qu(n,I,T);break;default:throw Error(t(161))}}catch(B){$t(n,n.return,B)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Nv(n,r,l){Fe=n,Rm(n)}function Rm(n,r,l){for(var u=(n.mode&1)!==0;Fe!==null;){var p=Fe,v=p.child;if(p.tag===22&&u){var T=p.memoizedState!==null||Cl;if(!T){var I=p.alternate,B=I!==null&&I.memoizedState!==null||En;I=Cl;var re=En;if(Cl=T,(En=B)&&!re)for(Fe=p;Fe!==null;)T=Fe,B=T.child,T.tag===22&&T.memoizedState!==null?Lm(p):B!==null?(B.return=T,Fe=B):Lm(p);for(;v!==null;)Fe=v,Rm(v),v=v.sibling;Fe=p,Cl=I,En=re}Cm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Fe=v):Cm(n)}}function Cm(n){for(;Fe!==null;){var r=Fe;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:En||Pl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!En)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:_i(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Pp(r,v,u);break;case 3:var T=r.updateQueue;if(T!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Pp(r,T,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var B=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&l.focus();break;case"img":B.src&&(l.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var re=r.alternate;if(re!==null){var _e=re.memoizedState;if(_e!==null){var ve=_e.dehydrated;ve!==null&&zo(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||r.flags&512&&Ju(r)}catch(ge){$t(r,r.return,ge)}}if(r===n){Fe=null;break}if(l=r.sibling,l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function Pm(n){for(;Fe!==null;){var r=Fe;if(r===n){Fe=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Fe=l;break}Fe=r.return}}function Lm(n){for(;Fe!==null;){var r=Fe;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Pl(4,r)}catch(B){$t(r,l,B)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(B){$t(r,p,B)}}var v=r.return;try{Ju(r)}catch(B){$t(r,v,B)}break;case 5:var T=r.return;try{Ju(r)}catch(B){$t(r,T,B)}}}catch(B){$t(r,r.return,B)}if(r===n){Fe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Fe=I;break}Fe=r.return}}var Uv=Math.ceil,Ll=C.ReactCurrentDispatcher,tf=C.ReactCurrentOwner,ai=C.ReactCurrentBatchConfig,bt=0,dn=null,nn=null,xn=0,$n=0,qs=Pr(0),on=0,ca=null,ls=0,Dl=0,nf=0,ua=null,Bn=null,rf=0,Ks=1/0,ar=null,Il=!1,sf=null,Fr=null,Nl=!1,Or=null,Ul=0,fa=0,of=null,Fl=-1,Ol=0;function Cn(){return(bt&6)!==0?b():Fl!==-1?Fl:Fl=b()}function kr(n){return(n.mode&1)===0?1:(bt&2)!==0&&xn!==0?xn&-xn:vv.transition!==null?(Ol===0&&(Ol=Nn()),Ol):(n=ot,n!==0||(n=window.event,n=n===void 0?16:Id(n.type)),n)}function yi(n,r,l,u){if(50<fa)throw fa=0,of=null,Error(t(185));jn(n,l,u),((bt&2)===0||n!==dn)&&(n===dn&&((bt&2)===0&&(Dl|=l),on===4&&Br(n,xn)),zn(n,u),l===1&&bt===0&&(r.mode&1)===0&&(Ks=b()+500,fl&&Dr()))}function zn(n,r){var l=n.callbackNode;bn(n,r);var u=Jt(n,n===dn?xn:0);if(u===0)l!==null&&ja(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&ja(l),r===1)n.tag===0?_v(Im.bind(null,n)):vp(Im.bind(null,n)),dv(function(){(bt&6)===0&&Dr()}),l=null;else{switch(pi(u)){case 1:l=se;break;case 4:l=ne;break;case 16:l=$;break;case 536870912:l=Ne;break;default:l=$}l=Vm(l,Dm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Dm(n,r){if(Fl=-1,Ol=0,(bt&6)!==0)throw Error(t(327));var l=n.callbackNode;if($s()&&n.callbackNode!==l)return null;var u=Jt(n,n===dn?xn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=kl(n,u);else{r=u;var p=bt;bt|=2;var v=Um();(dn!==n||xn!==r)&&(ar=null,Ks=b()+500,us(n,r));do try{kv();break}catch(I){Nm(n,I)}while(!0);Eu(),Ll.current=v,bt=p,nn!==null?r=0:(dn=null,xn=0,r=on)}if(r!==0){if(r===2&&(p=St(n),p!==0&&(u=p,r=af(n,p))),r===1)throw l=ca,us(n,0),Br(n,u),zn(n,b()),l;if(r===6)Br(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Fv(p)&&(r=kl(n,u),r===2&&(v=St(n),v!==0&&(u=v,r=af(n,v))),r===1))throw l=ca,us(n,0),Br(n,u),zn(n,b()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:fs(n,Bn,ar);break;case 3:if(Br(n,u),(u&130023424)===u&&(r=rf+500-b(),10<r)){if(Jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=hu(fs.bind(null,n,Bn,ar),r);break}fs(n,Bn,ar);break;case 4:if(Br(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var T=31-Qe(u);v=1<<T,T=r[T],T>p&&(p=T),u&=~v}if(u=p,u=b()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Uv(u/1960))-u,10<u){n.timeoutHandle=hu(fs.bind(null,n,Bn,ar),u);break}fs(n,Bn,ar);break;case 5:fs(n,Bn,ar);break;default:throw Error(t(329))}}}return zn(n,b()),n.callbackNode===l?Dm.bind(null,n):null}function af(n,r){var l=ua;return n.current.memoizedState.isDehydrated&&(us(n,r).flags|=256),n=kl(n,r),n!==2&&(r=Bn,Bn=l,r!==null&&lf(r)),n}function lf(n){Bn===null?Bn=n:Bn.push.apply(Bn,n)}function Fv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!mi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Br(n,r){for(r&=~nf,r&=~Dl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Qe(r),u=1<<l;n[l]=-1,r&=~u}}function Im(n){if((bt&6)!==0)throw Error(t(327));$s();var r=Jt(n,0);if((r&1)===0)return zn(n,b()),null;var l=kl(n,r);if(n.tag!==0&&l===2){var u=St(n);u!==0&&(r=u,l=af(n,u))}if(l===1)throw l=ca,us(n,0),Br(n,r),zn(n,b()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,fs(n,Bn,ar),zn(n,b()),null}function cf(n,r){var l=bt;bt|=1;try{return n(r)}finally{bt=l,bt===0&&(Ks=b()+500,fl&&Dr())}}function cs(n){Or!==null&&Or.tag===0&&(bt&6)===0&&$s();var r=bt;bt|=1;var l=ai.transition,u=ot;try{if(ai.transition=null,ot=1,n)return n()}finally{ot=u,ai.transition=l,bt=r,(bt&6)===0&&Dr()}}function uf(){$n=qs.current,Gt(qs)}function us(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,hv(l)),nn!==null)for(l=nn.return;l!==null;){var u=l;switch(vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&cl();break;case 3:Xs(),Gt(Fn),Gt(yn),Lu();break;case 5:Cu(u);break;case 4:Xs();break;case 13:Gt(Yt);break;case 19:Gt(Yt);break;case 10:Tu(u.type._context);break;case 22:case 23:uf()}l=l.return}if(dn=n,nn=n=zr(n.current,null),xn=$n=r,on=0,ca=null,nf=Dl=ls=0,Bn=ua=null,ss!==null){for(r=0;r<ss.length;r++)if(l=ss[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var T=v.next;v.next=p,u.next=T}l.pending=u}ss=null}return n}function Nm(n,r){do{var l=nn;try{if(Eu(),Sl.current=wl,Ml){for(var u=qt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Ml=!1}if(as=0,hn=sn=qt=null,ia=!1,ra=0,tf.current=null,l===null||l.return===null){on=1,ca=r,nn=null;break}e:{var v=n,T=l.return,I=l,B=r;if(r=xn,I.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var re=B,_e=I,ve=_e.tag;if((_e.mode&1)===0&&(ve===0||ve===11||ve===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ie=sm(T);if(Ie!==null){Ie.flags&=-257,om(Ie,T,I,v,r),Ie.mode&1&&rm(v,re,r),r=Ie,B=re;var ze=r.updateQueue;if(ze===null){var Xe=new Set;Xe.add(B),r.updateQueue=Xe}else ze.add(B);break e}else{if((r&1)===0){rm(v,re,r),ff();break e}B=Error(t(426))}}else if(jt&&I.mode&1){var en=sm(T);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),om(en,T,I,v,r),Su(js(B,I));break e}}v=B=js(B,I),on!==4&&(on=2),ua===null?ua=[v]:ua.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var q=nm(v,B,r);Cp(v,q);break e;case 1:I=B;var H=v.type,ee=v.stateNode;if((v.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(Fr===null||!Fr.has(ee)))){v.flags|=65536,r&=-r,v.lanes|=r;var Me=im(v,I,r);Cp(v,Me);break e}}v=v.return}while(v!==null)}Om(l)}catch(qe){r=qe,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function Um(){var n=Ll.current;return Ll.current=wl,n===null?wl:n}function ff(){(on===0||on===3||on===2)&&(on=4),dn===null||(ls&268435455)===0&&(Dl&268435455)===0||Br(dn,xn)}function kl(n,r){var l=bt;bt|=2;var u=Um();(dn!==n||xn!==r)&&(ar=null,us(n,r));do try{Ov();break}catch(p){Nm(n,p)}while(!0);if(Eu(),bt=l,Ll.current=u,nn!==null)throw Error(t(261));return dn=null,xn=0,on}function Ov(){for(;nn!==null;)Fm(nn)}function kv(){for(;nn!==null&&!Vc();)Fm(nn)}function Fm(n){var r=zm(n.alternate,n,$n);n.memoizedProps=n.pendingProps,r===null?Om(n):nn=r,tf.current=null}function Om(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Pv(l,r,$n),l!==null){nn=l;return}}else{if(l=Lv(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{on=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);on===0&&(on=5)}function fs(n,r,l){var u=ot,p=ai.transition;try{ai.transition=null,ot=1,Bv(n,r,l,u)}finally{ai.transition=p,ot=u}return null}function Bv(n,r,l,u){do $s();while(Or!==null);if((bt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Mr(n,v),n===dn&&(nn=dn=null,xn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Nl||(Nl=!0,Vm($,function(){return $s(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ai.transition,ai.transition=null;var T=ot;ot=1;var I=bt;bt|=4,tf.current=null,Iv(n,l),bm(l,n),sv(uu),Ka=!!cu,uu=cu=null,n.current=l,Nv(l),Hc(),bt=I,ot=T,ai.transition=v}else n.current=l;if(Nl&&(Nl=!1,Or=n,Ul=p),v=n.pendingLanes,v===0&&(Fr=null),Ke(l.stateNode),zn(n,b()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Il)throw Il=!1,n=sf,sf=null,n;return(Ul&1)!==0&&n.tag!==0&&$s(),v=n.pendingLanes,(v&1)!==0?n===of?fa++:(fa=0,of=n):fa=0,Dr(),null}function $s(){if(Or!==null){var n=pi(Ul),r=ai.transition,l=ot;try{if(ai.transition=null,ot=16>n?16:n,Or===null)var u=!1;else{if(n=Or,Or=null,Ul=0,(bt&6)!==0)throw Error(t(331));var p=bt;for(bt|=4,Fe=n.current;Fe!==null;){var v=Fe,T=v.child;if((Fe.flags&16)!==0){var I=v.deletions;if(I!==null){for(var B=0;B<I.length;B++){var re=I[B];for(Fe=re;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:la(8,_e,v)}var ve=_e.child;if(ve!==null)ve.return=_e,Fe=ve;else for(;Fe!==null;){_e=Fe;var ge=_e.sibling,Ie=_e.return;if(Mm(_e),_e===re){Fe=null;break}if(ge!==null){ge.return=Ie,Fe=ge;break}Fe=Ie}}}var ze=v.alternate;if(ze!==null){var Xe=ze.child;if(Xe!==null){ze.child=null;do{var en=Xe.sibling;Xe.sibling=null,Xe=en}while(Xe!==null)}}Fe=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,Fe=T;else e:for(;Fe!==null;){if(v=Fe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:la(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,Fe=q;break e}Fe=v.return}}var H=n.current;for(Fe=H;Fe!==null;){T=Fe;var ee=T.child;if((T.subtreeFlags&2064)!==0&&ee!==null)ee.return=T,Fe=ee;else e:for(T=H;Fe!==null;){if(I=Fe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Pl(9,I)}}catch(qe){$t(I,I.return,qe)}if(I===T){Fe=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Fe=Me;break e}Fe=I.return}}if(bt=p,Dr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(be,n)}catch{}u=!0}return u}finally{ot=l,ai.transition=r}}return!1}function km(n,r,l){r=js(l,r),r=nm(n,r,1),n=Nr(n,r,1),r=Cn(),n!==null&&(jn(n,1,r),zn(n,r))}function $t(n,r,l){if(n.tag===3)km(n,n,l);else for(;r!==null;){if(r.tag===3){km(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fr===null||!Fr.has(u))){n=js(l,n),n=im(r,n,1),r=Nr(r,n,1),n=Cn(),r!==null&&(jn(r,1,n),zn(r,n));break}}r=r.return}}function zv(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,dn===n&&(xn&l)===l&&(on===4||on===3&&(xn&130023424)===xn&&500>b()-rf?us(n,0):nf|=l),zn(n,r)}function Bm(n,r){r===0&&((n.mode&1)===0?r=1:(r=Ot,Ot<<=1,(Ot&130023424)===0&&(Ot=4194304)));var l=Cn();n=rr(n,r),n!==null&&(jn(n,r,l),zn(n,l))}function Vv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Bm(n,l)}function Hv(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Bm(n,l)}var zm;zm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Fn.current)kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return kn=!1,Cv(n,r,l);kn=(n.flags&131072)!==0}else kn=!1,jt&&(r.flags&1048576)!==0&&xp(r,dl,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;Rl(n,r),n=r.pendingProps;var p=ks(r,yn.current);Ws(r,l),p=Nu(null,r,u,n,p,l);var v=Uu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,On(u)?(v=!0,ul(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,bu(r),p.updater=Al,r.stateNode=p,p._reactInternals=r,Vu(r,u,n,l),r=Xu(null,r,u,!0,v,l)):(r.tag=0,jt&&v&&_u(r),Rn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(Rl(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Wv(u),n=_i(u,n),p){case 0:r=Wu(null,r,u,n,l);break e;case 1:r=hm(null,r,u,n,l);break e;case 11:r=am(null,r,u,n,l);break e;case 14:r=lm(null,r,u,_i(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),Wu(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),hm(n,r,u,p,l);case 3:e:{if(dm(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Rp(n,r),xl(r,u,null,l);var T=r.memoizedState;if(u=T.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=js(Error(t(423)),r),r=pm(n,r,u,l,p);break e}else if(u!==p){p=js(Error(t(424)),r),r=pm(n,r,u,l,p);break e}else for(Kn=Cr(r.stateNode.containerInfo.firstChild),qn=r,jt=!0,gi=null,l=Ap(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Vs(),u===p){r=or(n,r,l);break e}Rn(n,r,u,l)}r=r.child}return r;case 5:return Lp(r),n===null&&yu(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,T=p.children,fu(u,p)?T=null:v!==null&&fu(u,v)&&(r.flags|=32),fm(n,r),Rn(n,r,T,l),r.child;case 6:return n===null&&yu(r),null;case 13:return mm(n,r,l);case 4:return Ru(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Hs(r,null,u,l):Rn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),am(n,r,u,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,T=p.value,Bt(gl,u._currentValue),u._currentValue=T,v!==null)if(mi(v.value,T)){if(v.children===p.children&&!Fn.current){r=or(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var B=I.firstContext;B!==null;){if(B.context===u){if(v.tag===1){B=sr(-1,l&-l),B.tag=2;var re=v.updateQueue;if(re!==null){re=re.shared;var _e=re.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),re.pending=B}}v.lanes|=l,B=v.alternate,B!==null&&(B.lanes|=l),wu(v.return,l,r),I.lanes|=l;break}B=B.next}}else if(v.tag===10)T=v.type===r.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=l,I=T.alternate,I!==null&&(I.lanes|=l),wu(T,l,r),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===r){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Ws(r,l),p=si(p),u=u(p),r.flags|=1,Rn(n,r,u,l),r.child;case 14:return u=r.type,p=_i(u,r.pendingProps),p=_i(u.type,p),lm(n,r,u,p,l);case 15:return cm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:_i(u,p),Rl(n,r),r.tag=1,On(u)?(n=!0,ul(r)):n=!1,Ws(r,l),em(r,u,p),Vu(r,u,p,l),Xu(null,r,u,!0,n,l);case 19:return _m(n,r,l);case 22:return um(n,r,l)}throw Error(t(156,r.tag))};function Vm(n,r){return Xa(n,r)}function Gv(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,l,u){return new Gv(n,r,l,u)}function hf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Wv(n){if(typeof n=="function")return hf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===Q)return 14}return 2}function zr(n,r){var l=n.alternate;return l===null?(l=li(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Bl(n,r,l,u,p,v){var T=2;if(u=n,typeof n=="function")hf(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case k:return hs(l.children,p,v,r);case w:T=8,p|=8;break;case P:return n=li(12,l,r,p|2),n.elementType=P,n.lanes=v,n;case Z:return n=li(13,l,r,p),n.elementType=Z,n.lanes=v,n;case ae:return n=li(19,l,r,p),n.elementType=ae,n.lanes=v,n;case W:return zl(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case le:T=10;break e;case O:T=9;break e;case J:T=11;break e;case Q:T=14;break e;case te:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=li(T,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function hs(n,r,l,u){return n=li(7,n,u,r),n.lanes=l,n}function zl(n,r,l,u){return n=li(22,n,u,r),n.elementType=W,n.lanes=l,n.stateNode={isHidden:!1},n}function df(n,r,l){return n=li(6,n,null,r),n.lanes=l,n}function pf(n,r,l){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Xv(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Un(0),this.expirationTimes=Un(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function mf(n,r,l,u,p,v,T,I,B){return n=new Xv(n,r,l,I,B),r===1?(r=1,v===!0&&(r|=8)):r=0,v=li(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(v),n}function jv(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function Hm(n){if(!n)return Lr;n=n._reactInternals;e:{if(Ni(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(On(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(On(l))return gp(n,l,r)}return r}function Gm(n,r,l,u,p,v,T,I,B){return n=mf(l,u,!0,n,p,v,T,I,B),n.context=Hm(null),l=n.current,u=Cn(),p=kr(l),v=sr(u,p),v.callback=r??null,Nr(l,v,p),n.current.lanes=p,jn(n,p,u),zn(n,u),n}function Vl(n,r,l,u){var p=r.current,v=Cn(),T=kr(p);return l=Hm(l),r.context===null?r.context=l:r.pendingContext=l,r=sr(v,T),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Nr(p,r,T),n!==null&&(yi(n,p,T,v),vl(n,p,T)),T}function Hl(n){return n=n.current,n.child?(n.child.tag===5,n.child.stateNode):null}function Wm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function gf(n,r){Wm(n,r),(n=n.alternate)&&Wm(n,r)}function Yv(){return null}var Xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function _f(n){this._internalRoot=n}Gl.prototype.render=_f.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Vl(n,r,null,null)},Gl.prototype.unmount=_f.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;cs(function(){Vl(null,n,null,null)}),r[er]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Uo();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Ar.length&&r!==0&&r<Ar[l].priority;l++);Ar.splice(l,0,n),l===0&&Ld(n)}};function vf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jm(){}function qv(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var re=Hl(T);v.call(re)}}var T=Gm(r,u,n,0,null,!1,!1,"",jm);return n._reactRootContainer=T,n[er]=T.current,Ko(n.nodeType===8?n.parentNode:n),cs(),T}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var I=u;u=function(){var re=Hl(B);I.call(re)}}var B=mf(n,0,!1,null,null,!1,!1,"",jm);return n._reactRootContainer=B,n[er]=B.current,Ko(n.nodeType===8?n.parentNode:n),cs(function(){Vl(r,B,l,u)}),B}function Xl(n,r,l,u,p){var v=l._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var I=p;p=function(){var B=Hl(T);I.call(B)}}Vl(r,T,n,p)}else T=qv(l,r,n,p,u);return Hl(T)}Qt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Et(r.pendingLanes);l!==0&&(Ct(r,l|1),zn(r,b()),(bt&6)===0&&(Ks=b()+500,Dr()))}break;case 13:cs(function(){var u=rr(n,1);if(u!==null){var p=Cn();yi(u,n,1,p)}}),gf(n,1)}},ni=function(n){if(n.tag===13){var r=rr(n,134217728);if(r!==null){var l=Cn();yi(r,n,134217728,l)}gf(n,134217728)}},Qi=function(n){if(n.tag===13){var r=kr(n),l=rr(n,r);if(l!==null){var u=Cn();yi(l,n,r,u)}gf(n,r)}},Uo=function(){return ot},Cd=function(n,r){var l=ot;try{return ot=n,r()}finally{ot=l}},we=function(n,r,l){switch(r){case"input":if(Vt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=ll(u);if(!p)throw Error(t(90));Zt(u),Vt(u,p)}}}break;case"textarea":E(n,l);break;case"select":r=l.value,r!=null&&wt(n,!!l.multiple,r,!1)}},st=cf,Dt=cs;var Kv={usingClientEntryPoint:!1,Events:[Jo,Fs,ll,fe,Be,cf]},ha={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$v={bundleType:ha.bundleType,version:ha.version,rendererPackageName:ha.rendererPackageName,rendererConfig:ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ga(n),n===null?null:n.stateNode},findFiberByHostInstance:ha.findFiberByHostInstance||Yv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{be=jl.inject($v),De=jl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kv,Vn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!vf(r))throw Error(t(200));return jv(n,r,null,l)},Vn.createRoot=function(n,r){if(!vf(n))throw Error(t(299));var l=!1,u="",p=Xm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=mf(n,1,!1,null,null,l,!1,u,p),n[er]=r.current,Ko(n.nodeType===8?n.parentNode:n),new _f(r)},Vn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ga(r),n=n===null?null:n.stateNode,n},Vn.flushSync=function(n){return cs(n)},Vn.hydrate=function(n,r,l){if(!Wl(r))throw Error(t(200));return Xl(null,n,r,!0,l)},Vn.hydrateRoot=function(n,r,l){if(!vf(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",T=Xm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),r=Gm(r,null,n,1,l??null,p,!1,v,T),n[er]=r.current,Ko(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new Gl(r)},Vn.render=function(n,r,l){if(!Wl(r))throw Error(t(200));return Xl(null,n,r,!1,l)},Vn.unmountComponentAtNode=function(n){if(!Wl(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Xl(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1},Vn.unstable_batchedUpdates=cf,Vn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Wl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Xl(n,r,l,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var eg;function sx(){if(eg)return Sf.exports;eg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sf.exports=rx(),Sf.exports}var tg;function ox(){if(tg)return Yl;tg=1;var o=sx();return Yl.createRoot=o.createRoot,Yl.hydrateRoot=o.hydrateRoot,Yl}var ax=ox();const lx=Jv(ax);const ad="183",go={ROTATE:0,DOLLY:1,PAN:2},po={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cx=0,ng=1,ux=2,Ec=1,fx=2,mo=3,vr=0,Wn=1,Gi=2,gr=0,_o=1,ig=2,rg=3,sg=4,hx=5,ys=100,dx=101,px=102,mx=103,gx=104,_x=200,vx=201,xx=202,yx=203,uh=204,fh=205,Sx=206,Mx=207,Ex=208,Tx=209,wx=210,Ax=211,bx=212,Rx=213,Cx=214,hh=0,dh=1,ph=2,yo=3,mh=4,gh=5,_h=6,vh=7,C0=0,Px=1,Lx=2,bi=0,P0=1,L0=2,D0=3,I0=4,N0=5,U0=6,F0=7,og="attached",Dx="detached",O0=300,ws=301,So=302,Tf=303,wf=304,Fc=306,Mo=1e3,Wi=1001,Pc=1002,ln=1003,k0=1004,Ta=1005,cn=1006,Tc=1007,pr=1008,Qn=1009,B0=1010,z0=1011,Ca=1012,ld=1013,Yi=1014,fi=1015,xr=1016,cd=1017,ud=1018,Pa=1020,V0=35902,H0=35899,G0=1021,W0=1022,hi=1023,yr=1026,Ms=1027,fd=1028,hd=1029,Eo=1030,dd=1031,pd=1033,wc=33776,Ac=33777,bc=33778,Rc=33779,xh=35840,yh=35841,Sh=35842,Mh=35843,Eh=36196,Th=37492,wh=37496,Ah=37488,bh=37489,Rh=37490,Ch=37491,Ph=37808,Lh=37809,Dh=37810,Ih=37811,Nh=37812,Uh=37813,Fh=37814,Oh=37815,kh=37816,Bh=37817,zh=37818,Vh=37819,Hh=37820,Gh=37821,Wh=36492,Xh=36494,jh=36495,Yh=36283,qh=36284,Kh=36285,$h=36286,La=2300,Da=2301,Af=2302,ag=2303,lg=2400,cg=2401,ug=2402,Ix=2500,Nx=0,X0=1,Zh=2,Ux=3200,j0=0,Fx=1,$r="",gn="srgb",In="srgb-linear",Lc="linear",It="srgb",Zs=7680,fg=519,Ox=512,kx=513,Bx=514,md=515,zx=516,Vx=517,gd=518,Hx=519,Jh=35044,hg="300 es",Xi=2e3,Ia=2001;function Gx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Wx(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function Na(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Xx(){const o=Na("canvas");return o.style.display="block",o}const dg={};function Dc(...o){const e="THREE."+o.shift();console.log(e,...o)}function Y0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Je(...o){o=Y0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function rt(...o){o=Y0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Ic(...o){const e=o.join(" ");e in dg||(dg[e]=!0,Je(...o))}function jx(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const Yx={[hh]:dh,[ph]:_h,[mh]:vh,[yo]:gh,[dh]:hh,[_h]:ph,[vh]:mh,[gh]:yo};class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pg=1234567;const Aa=Math.PI/180,To=180/Math.PI;function Ri(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tn[o&255]+Tn[o>>8&255]+Tn[o>>16&255]+Tn[o>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]).toLowerCase()}function gt(o,e,t){return Math.max(e,Math.min(t,o))}function _d(o,e){return(o%e+e)%e}function qx(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function Kx(o,e,t){return o!==e?(t-o)/(e-o):0}function ba(o,e,t){return(1-t)*o+t*e}function $x(o,e,t,i){return ba(o,e,1-Math.exp(-t*i))}function Zx(o,e=1){return e-Math.abs(_d(o,e*2)-e)}function Jx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Qx(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function ey(o,e){return o+Math.floor(Math.random()*(e-o+1))}function ty(o,e){return o+Math.random()*(e-o)}function ny(o){return o*(.5-Math.random())}function iy(o){o!==void 0&&(pg=o);let e=pg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ry(o){return o*Aa}function sy(o){return o*To}function oy(o){return(o&o-1)===0&&o!==0}function ay(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function ly(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function cy(o,e,t,i,s){const a=Math.cos,c=Math.sin,f=a(t/2),h=c(t/2),d=a((e+i)/2),g=c((e+i)/2),_=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(f*g,h*_,h*m,f*d);break;case"YZY":o.set(h*m,f*g,h*_,f*d);break;case"ZXZ":o.set(h*_,h*m,f*g,f*d);break;case"XZX":o.set(f*g,h*M,h*x,f*d);break;case"YXY":o.set(h*x,f*g,h*M,f*d);break;case"ZYZ":o.set(h*M,h*x,f*g,f*d);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Nt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const q0={DEG2RAD:Aa,RAD2DEG:To,generateUUID:Ri,clamp:gt,euclideanModulo:_d,mapLinear:qx,inverseLerp:Kx,lerp:ba,damp:$x,pingpong:Zx,smoothstep:Jx,smootherstep:Qx,randInt:ey,randFloat:ty,randFloatSpread:ny,seededRandom:iy,degToRad:ry,radToDeg:sy,isPowerOfTwo:oy,ceilPowerOfTwo:ay,floorPowerOfTwo:ly,setQuaternionFromProperEuler:cy,normalize:Nt,denormalize:wi};class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Li{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,f){let h=i[s+0],d=i[s+1],g=i[s+2],_=i[s+3],m=a[c+0],x=a[c+1],M=a[c+2],A=a[c+3];if(_!==A||h!==m||d!==x||g!==M){let y=h*m+d*x+g*M+_*A;y<0&&(m=-m,x=-x,M=-M,A=-A,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,f=Math.sin(f*R)/L,h=h*S+m*f,d=d*S+x*f,g=g*S+M*f,_=_*S+A*f}else{h=h*S+m*f,d=d*S+x*f,g=g*S+M*f,_=_*S+A*f;const R=1/Math.sqrt(h*h+d*d+g*g+_*_);h*=R,d*=R,g*=R,_*=R}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,c){const f=i[s],h=i[s+1],d=i[s+2],g=i[s+3],_=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=f*M+g*_+h*x-d*m,e[t+1]=h*M+g*m+d*_-f*x,e[t+2]=d*M+g*x+f*m-h*_,e[t+3]=g*M-f*_-h*m-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(i/2),g=f(s/2),_=f(a/2),m=h(i/2),x=h(s/2),M=h(a/2);switch(c){case"XYZ":this._x=m*g*_+d*x*M,this._y=d*x*_-m*g*M,this._z=d*g*M+m*x*_,this._w=d*g*_-m*x*M;break;case"YXZ":this._x=m*g*_+d*x*M,this._y=d*x*_-m*g*M,this._z=d*g*M-m*x*_,this._w=d*g*_+m*x*M;break;case"ZXY":this._x=m*g*_-d*x*M,this._y=d*x*_+m*g*M,this._z=d*g*M+m*x*_,this._w=d*g*_-m*x*M;break;case"ZYX":this._x=m*g*_-d*x*M,this._y=d*x*_+m*g*M,this._z=d*g*M-m*x*_,this._w=d*g*_+m*x*M;break;case"YZX":this._x=m*g*_+d*x*M,this._y=d*x*_+m*g*M,this._z=d*g*M-m*x*_,this._w=d*g*_-m*x*M;break;case"XZY":this._x=m*g*_-d*x*M,this._y=d*x*_-m*g*M,this._z=d*g*M+m*x*_,this._w=d*g*_+m*x*M;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],f=t[5],h=t[9],d=t[2],g=t[6],_=t[10],m=i+f+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-h)*x,this._y=(a-d)*x,this._z=(c-s)*x}else if(i>f&&i>_){const x=2*Math.sqrt(1+i-f-_);this._w=(g-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+d)/x}else if(f>_){const x=2*Math.sqrt(1+f-i-_);this._w=(a-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+_-i-f);this._w=(c-s)/x,this._x=(a+d)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=i*g+c*f+s*d-a*h,this._y=s*g+c*h+a*f-i*d,this._z=a*g+c*d+i*h-s*f,this._w=c*g-i*f-s*h-a*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,s=-s,a=-a,c=-c,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+a*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*s-f*i),g=2*(f*t-a*s),_=2*(a*i-c*t);return this.x=t+h*d+c*_-f*g,this.y=i+h*g+f*d-a*_,this.z=s+h*_+a*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,f=t.y,h=t.z;return this.x=s*h-a*f,this.y=a*c-i*h,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bf.copy(this).projectOnVector(e),this.sub(bf)}reflect(e){return this.sub(bf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bf=new j,mg=new Li;class dt{constructor(e,t,i,s,a,c,f,h,d){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,h,d)}set(e,t,i,s,a,c,f,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=a,g[5]=h,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[3],h=i[6],d=i[1],g=i[4],_=i[7],m=i[2],x=i[5],M=i[8],A=s[0],y=s[3],S=s[6],R=s[1],L=s[4],C=s[7],F=s[2],N=s[5],k=s[8];return a[0]=c*A+f*R+h*F,a[3]=c*y+f*L+h*N,a[6]=c*S+f*C+h*k,a[1]=d*A+g*R+_*F,a[4]=d*y+g*L+_*N,a[7]=d*S+g*C+_*k,a[2]=m*A+x*R+M*F,a[5]=m*y+x*L+M*N,a[8]=m*S+x*C+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*c*g-t*f*d-i*a*g+i*f*h+s*a*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],_=g*c-f*d,m=f*h-g*a,x=d*a-c*h,M=t*_+i*m+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/M;return e[0]=_*A,e[1]=(s*d-g*i)*A,e[2]=(f*i-s*c)*A,e[3]=m*A,e[4]=(g*t-s*h)*A,e[5]=(s*a-f*t)*A,e[6]=x*A,e[7]=(i*h-d*t)*A,e[8]=(c*t-i*a)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,f){const h=Math.cos(a),d=Math.sin(a);return this.set(i*h,i*d,-i*(h*c+d*f)+c+e,-s*d,s*h,-s*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Rf.makeScale(e,t)),this}rotate(e){return this.premultiply(Rf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Rf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Rf=new dt,gg=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uy(){const o={enabled:!0,workingColorSpace:In,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===It&&(s.r=_r(s.r),s.g=_r(s.g),s.b=_r(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===It&&(s.r=vo(s.r),s.g=vo(s.g),s.b=vo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===$r?Lc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Ic("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Ic("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[In]:{primaries:e,whitePoint:i,transfer:Lc,toXYZ:gg,fromXYZ:_g,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:It,toXYZ:gg,fromXYZ:_g,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),o}const Mt=uy();function _r(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Js;class fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Js===void 0&&(Js=Na("canvas")),Js.width=e.width,Js.height=e.height;const s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Js}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Na("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=_r(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hy=0;class vd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?a.push(Cf(s[c].image)):a.push(Cf(s[c]))}else a=Cf(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Cf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?fy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let dy=0;const Pf=new j;class _n extends As{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=Wi,s=Wi,a=cn,c=pr,f=hi,h=Qn,d=_n.DEFAULT_ANISOTROPY,g=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=Ri(),this.name="",this.source=new vd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Pf).x}get height(){return this.source.getSize(Pf).y}get depth(){return this.source.getSize(Pf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=O0;_n.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const h=e.elements,d=h[0],g=h[4],_=h[8],m=h[1],x=h[5],M=h[9],A=h[2],y=h[6],S=h[10];if(Math.abs(g-m)<.01&&Math.abs(_-A)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+A)<.1&&Math.abs(M+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(d+1)/2,C=(x+1)/2,F=(S+1)/2,N=(g+m)/4,k=(_+A)/4,w=(M+y)/4;return L>C&&L>F?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=N/i,a=k/i):C>F?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=N/s,a=w/s):F<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(F),i=k/a,s=w/a),this.set(i,s,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(_-A)*(_-A)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-A)/R,this.z=(m-g)/R,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends As{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new _n(s),c=i.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new vd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ji extends py{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K0 extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mt{constructor(e,t,i,s,a,c,f,h,d,g,_,m,x,M,A,y){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,h,d,g,_,m,x,M,A,y)}set(e,t,i,s,a,c,f,h,d,g,_,m,x,M,A,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=a,S[5]=c,S[9]=f,S[13]=h,S[2]=d,S[6]=g,S[10]=_,S[14]=m,S[3]=x,S[7]=M,S[11]=A,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Qs.setFromMatrixColumn(e,0).length(),a=1/Qs.setFromMatrixColumn(e,1).length(),c=1/Qs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(s),d=Math.sin(s),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=c*g,x=c*_,M=f*g,A=f*_;t[0]=h*g,t[4]=-h*_,t[8]=d,t[1]=x+M*d,t[5]=m-A*d,t[9]=-f*h,t[2]=A-m*d,t[6]=M+x*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*g,x=h*_,M=d*g,A=d*_;t[0]=m+A*f,t[4]=M*f-x,t[8]=c*d,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=x*f-M,t[6]=A+m*f,t[10]=c*h}else if(e.order==="ZXY"){const m=h*g,x=h*_,M=d*g,A=d*_;t[0]=m-A*f,t[4]=-c*_,t[8]=M+x*f,t[1]=x+M*f,t[5]=c*g,t[9]=A-m*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const m=c*g,x=c*_,M=f*g,A=f*_;t[0]=h*g,t[4]=M*d-x,t[8]=m*d+A,t[1]=h*_,t[5]=A*d+m,t[9]=x*d-M,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,x=c*d,M=f*h,A=f*d;t[0]=h*g,t[4]=A-m*_,t[8]=M*_+x,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-d*g,t[6]=x*_+M,t[10]=m-A*_}else if(e.order==="XZY"){const m=c*h,x=c*d,M=f*h,A=f*d;t[0]=h*g,t[4]=-_,t[8]=d*g,t[1]=m*_+A,t[5]=c*g,t[9]=x*_-M,t[2]=M*_-x,t[6]=f*g,t[10]=A*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gy,e,_y)}lookAt(e,t,i){const s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),Hr.crossVectors(i,Zn),Hr.lengthSq()===0&&(Math.abs(i.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),Hr.crossVectors(i,Zn)),Hr.normalize(),ql.crossVectors(Zn,Hr),s[0]=Hr.x,s[4]=ql.x,s[8]=Zn.x,s[1]=Hr.y,s[5]=ql.y,s[9]=Zn.y,s[2]=Hr.z,s[6]=ql.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[4],h=i[8],d=i[12],g=i[1],_=i[5],m=i[9],x=i[13],M=i[2],A=i[6],y=i[10],S=i[14],R=i[3],L=i[7],C=i[11],F=i[15],N=s[0],k=s[4],w=s[8],P=s[12],le=s[1],O=s[5],J=s[9],Z=s[13],ae=s[2],Q=s[6],te=s[10],W=s[14],K=s[3],oe=s[7],ce=s[11],U=s[15];return a[0]=c*N+f*le+h*ae+d*K,a[4]=c*k+f*O+h*Q+d*oe,a[8]=c*w+f*J+h*te+d*ce,a[12]=c*P+f*Z+h*W+d*U,a[1]=g*N+_*le+m*ae+x*K,a[5]=g*k+_*O+m*Q+x*oe,a[9]=g*w+_*J+m*te+x*ce,a[13]=g*P+_*Z+m*W+x*U,a[2]=M*N+A*le+y*ae+S*K,a[6]=M*k+A*O+y*Q+S*oe,a[10]=M*w+A*J+y*te+S*ce,a[14]=M*P+A*Z+y*W+S*U,a[3]=R*N+L*le+C*ae+F*K,a[7]=R*k+L*O+C*Q+F*oe,a[11]=R*w+L*J+C*te+F*ce,a[15]=R*P+L*Z+C*W+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],f=e[5],h=e[9],d=e[13],g=e[2],_=e[6],m=e[10],x=e[14],M=e[3],A=e[7],y=e[11],S=e[15],R=h*x-d*m,L=f*x-d*_,C=f*m-h*_,F=c*x-d*g,N=c*m-h*g,k=c*_-f*g;return t*(A*R-y*L+S*C)-i*(M*R-y*F+S*N)+s*(M*L-A*F+S*k)-a*(M*C-A*N+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],_=e[9],m=e[10],x=e[11],M=e[12],A=e[13],y=e[14],S=e[15],R=t*f-i*c,L=t*h-s*c,C=t*d-a*c,F=i*h-s*f,N=i*d-a*f,k=s*d-a*h,w=g*A-_*M,P=g*y-m*M,le=g*S-x*M,O=_*y-m*A,J=_*S-x*A,Z=m*S-x*y,ae=R*Z-L*J+C*O+F*le-N*P+k*w;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/ae;return e[0]=(f*Z-h*J+d*O)*Q,e[1]=(s*J-i*Z-a*O)*Q,e[2]=(A*k-y*N+S*F)*Q,e[3]=(m*N-_*k-x*F)*Q,e[4]=(h*le-c*Z-d*P)*Q,e[5]=(t*Z-s*le+a*P)*Q,e[6]=(y*C-M*k-S*L)*Q,e[7]=(g*k-m*C+x*L)*Q,e[8]=(c*J-f*le+d*w)*Q,e[9]=(i*le-t*J-a*w)*Q,e[10]=(M*N-A*C+S*R)*Q,e[11]=(_*C-g*N-x*R)*Q,e[12]=(f*P-c*O-h*w)*Q,e[13]=(t*O-i*P+s*w)*Q,e[14]=(A*L-M*F-y*R)*Q,e[15]=(g*F-_*L+m*R)*Q,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,f=e.y,h=e.z,d=a*c,g=a*f;return this.set(d*c+i,d*f-s*h,d*h+s*f,0,d*f+s*h,g*f+i,g*h-s*c,0,d*h-s*f,g*h+s*c,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,f=t._z,h=t._w,d=a+a,g=c+c,_=f+f,m=a*d,x=a*g,M=a*_,A=c*g,y=c*_,S=f*_,R=h*d,L=h*g,C=h*_,F=i.x,N=i.y,k=i.z;return s[0]=(1-(A+S))*F,s[1]=(x+C)*F,s[2]=(M-L)*F,s[3]=0,s[4]=(x-C)*N,s[5]=(1-(m+S))*N,s[6]=(y+R)*N,s[7]=0,s[8]=(M+L)*k,s[9]=(y-R)*k,s[10]=(1-(m+A))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=Qs.set(s[0],s[1],s[2]).length();const f=Qs.set(s[4],s[5],s[6]).length(),h=Qs.set(s[8],s[9],s[10]).length();a<0&&(c=-c),Si.copy(this);const d=1/c,g=1/f,_=1/h;return Si.elements[0]*=d,Si.elements[1]*=d,Si.elements[2]*=d,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,t.setFromRotationMatrix(Si),i.x=c,i.y=f,i.z=h,this}makePerspective(e,t,i,s,a,c,f=Xi,h=!1){const d=this.elements,g=2*a/(t-e),_=2*a/(i-s),m=(t+e)/(t-e),x=(i+s)/(i-s);let M,A;if(h)M=a/(c-a),A=c*a/(c-a);else if(f===Xi)M=-(c+a)/(c-a),A=-2*c*a/(c-a);else if(f===Ia)M=-c/(c-a),A=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=_,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,a,c,f=Xi,h=!1){const d=this.elements,g=2/(t-e),_=2/(i-s),m=-(t+e)/(t-e),x=-(i+s)/(i-s);let M,A;if(h)M=1/(c-a),A=c/(c-a);else if(f===Xi)M=-2/(c-a),A=-(c+a)/(c-a);else if(f===Ia)M=-1/(c-a),A=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=_,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=M,d[14]=A,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qs=new j,Si=new mt,gy=new j(0,0,0),_y=new j(1,1,1),Hr=new j,ql=new j,Zn=new j,vg=new mt,xg=new Li;class qi{constructor(e=0,t=0,i=0,s=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],f=s[8],h=s[1],d=s[5],g=s[9],_=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(gt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xg.setFromEuler(this),this.setFromQuaternion(xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vy=0;const yg=new j,eo=new Li,lr=new mt,Kl=new j,pa=new j,xy=new j,yy=new Li,Sg=new j(1,0,0),Mg=new j(0,1,0),Eg=new j(0,0,1),Tg={type:"added"},Sy={type:"removed"},to={type:"childadded",child:null},Lf={type:"childremoved",child:null};class Kt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vy++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new j,t=new qi,i=new Li,s=new j(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new dt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.multiply(eo),this}rotateOnWorldAxis(e,t){return eo.setFromAxisAngle(e,t),this.quaternion.premultiply(eo),this}rotateX(e){return this.rotateOnAxis(Sg,e)}rotateY(e){return this.rotateOnAxis(Mg,e)}rotateZ(e){return this.rotateOnAxis(Eg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sg,e)}translateY(e){return this.translateOnAxis(Mg,e)}translateZ(e){return this.translateOnAxis(Eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Kl.copy(e):Kl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),pa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(pa,Kl,this.up):lr.lookAt(Kl,pa,this.up),this.quaternion.setFromRotationMatrix(lr),s&&(lr.extractRotation(s.matrixWorld),eo.setFromRotationMatrix(lr),this.quaternion.premultiply(eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tg),to.child=e,this.dispatchEvent(to),to.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sy),Lf.child=e,this.dispatchEvent(Lf),Lf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tg),to.child=e,this.dispatchEvent(to),to.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,e,xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pa,yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const _=h[d];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(a(e.materials,this.material[h]));s.material=f}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(a(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),g=c(e.images),_=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new j(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Es extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const My={type:"move"};class Df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,i),S=this._getHandJoint(d,A);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,M=.005;d.inputState.pinching&&m>x+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=x-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(My)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=a!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},$l={h:0,s:0,l:0};function If(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ct{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Mt.workingColorSpace){if(e=_d(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=If(c,a,e+1/3),this.g=If(c,a,e),this.b=If(c,a,e-1/3)}return Mt.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(a){a!==void 0&&parseFloat(a)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=vo(e.r),this.g=vo(e.g),this.b=vo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Mt.workingToColorSpace(wn.copy(this),e),Math.round(gt(wn.r*255,0,255))*65536+Math.round(gt(wn.g*255,0,255))*256+Math.round(gt(wn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(wn.copy(this),t);const i=wn.r,s=wn.g,a=wn.b,c=Math.max(i,s,a),f=Math.min(i,s,a);let h,d;const g=(f+c)/2;if(f===c)h=0,d=0;else{const _=c-f;switch(d=g<=.5?_/(c+f):_/(2-c-f),c){case i:h=(s-a)/_+(s<a?6:0);break;case s:h=(a-i)/_+2;break;case a:h=(i-s)/_+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=gn){Mt.workingToColorSpace(wn.copy(this),e);const t=wn.r,i=wn.g,s=wn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL($l);const i=ba(Gr.h,$l.h,t),s=ba(Gr.s,$l.s,t),a=ba(Gr.l,$l.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new ct;ct.NAMES=Z0;class Ey extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Mi=new j,cr=new j,Nf=new j,ur=new j,no=new j,io=new j,wg=new j,Uf=new j,Ff=new j,Of=new j,kf=new Wt,Bf=new Wt,zf=new Wt;class Ai{constructor(e=new j,t=new j,i=new j){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mi.subVectors(e,t),s.cross(Mi);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Mi.subVectors(s,t),cr.subVectors(i,t),Nf.subVectors(e,t);const c=Mi.dot(Mi),f=Mi.dot(cr),h=Mi.dot(Nf),d=cr.dot(cr),g=cr.dot(Nf),_=c*d-f*f;if(_===0)return a.set(0,0,0),null;const m=1/_,x=(d*h-f*g)*m,M=(c*g-f*h)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,i,s,a,c,f,h){return this.getBarycoord(e,t,i,s,ur)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,ur.x),h.addScaledVector(c,ur.y),h.addScaledVector(f,ur.z),h)}static getInterpolatedAttribute(e,t,i,s,a,c){return kf.setScalar(0),Bf.setScalar(0),zf.setScalar(0),kf.fromBufferAttribute(e,t),Bf.fromBufferAttribute(e,i),zf.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(kf,a.x),c.addScaledVector(Bf,a.y),c.addScaledVector(zf,a.z),c}static isFrontFacing(e,t,i,s){return Mi.subVectors(i,t),cr.subVectors(e,t),Mi.cross(cr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Mi.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Ai.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,f;no.subVectors(s,i),io.subVectors(a,i),Uf.subVectors(e,i);const h=no.dot(Uf),d=io.dot(Uf);if(h<=0&&d<=0)return t.copy(i);Ff.subVectors(e,s);const g=no.dot(Ff),_=io.dot(Ff);if(g>=0&&_<=g)return t.copy(s);const m=h*_-g*d;if(m<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(i).addScaledVector(no,c);Of.subVectors(e,a);const x=no.dot(Of),M=io.dot(Of);if(M>=0&&x<=M)return t.copy(a);const A=x*d-h*M;if(A<=0&&d>=0&&M<=0)return f=d/(d-M),t.copy(i).addScaledVector(io,f);const y=g*M-x*_;if(y<=0&&_-g>=0&&x-M>=0)return wg.subVectors(a,s),f=(_-g)/(_-g+(x-M)),t.copy(s).addScaledVector(wg,f);const S=1/(y+A+m);return c=A*S,f=m*S,t.copy(i).addScaledVector(no,c).addScaledVector(io,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $i{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ei):Ei.fromBufferAttribute(a,c),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zl.copy(i.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Jl.subVectors(this.max,ma),ro.subVectors(e.a,ma),so.subVectors(e.b,ma),oo.subVectors(e.c,ma),Wr.subVectors(so,ro),Xr.subVectors(oo,so),ds.subVectors(ro,oo);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-ds.z,ds.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,ds.z,0,-ds.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-ds.y,ds.x,0];return!Vf(t,ro,so,oo,Jl)||(t=[1,0,0,0,1,0,0,0,1],!Vf(t,ro,so,oo,Jl))?!1:(Ql.crossVectors(Wr,Xr),t=[Ql.x,Ql.y,Ql.z],Vf(t,ro,so,oo,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new j,new j,new j,new j,new j,new j,new j,new j],Ei=new j,Zl=new $i,ro=new j,so=new j,oo=new j,Wr=new j,Xr=new j,ds=new j,ma=new j,Jl=new j,Ql=new j,ps=new j;function Vf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ps.fromArray(o,a);const f=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),h=e.dot(ps),d=t.dot(ps),g=i.dot(ps);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const rn=new j,ec=new lt;let Ty=0;class Dn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ty++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),a=Nt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jh&&(e.usage=this.usage),e}}class J0 extends Dn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q0 extends Dn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ci extends Dn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const wy=new $i,ga=new j,Hf=new j;class Di{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):wy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ga,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Hf)),this.expandByPoint(ga.copy(e.center).sub(Hf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ay=0;const ci=new mt,Gf=new Kt,ao=new j,Jn=new $i,_a=new $i,mn=new j;class di extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gx(e)?Q0:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new dt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return Gf.lookAt(e),Gf.updateMatrix(),this.applyMatrix4(Gf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ao).negate(),this.translate(ao.x,ao.y,ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ci(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Jn.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Jn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Jn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Jn.min),this.boundingBox.expandByPoint(Jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Jn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];_a.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Jn.min,_a.min),Jn.expandByPoint(mn),mn.addVectors(Jn.max,_a.max),Jn.expandByPoint(mn)):(Jn.expandByPoint(_a.min),Jn.expandByPoint(_a.max))}Jn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)mn.fromBufferAttribute(f,d),h&&(ao.fromBufferAttribute(e,d),mn.add(ao)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<i.count;w++)f[w]=new j,h[w]=new j;const d=new j,g=new j,_=new j,m=new lt,x=new lt,M=new lt,A=new j,y=new j;function S(w,P,le){d.fromBufferAttribute(i,w),g.fromBufferAttribute(i,P),_.fromBufferAttribute(i,le),m.fromBufferAttribute(a,w),x.fromBufferAttribute(a,P),M.fromBufferAttribute(a,le),g.sub(d),_.sub(d),x.sub(m),M.sub(m);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(A.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(O),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(O),f[w].add(A),f[P].add(A),f[le].add(A),h[w].add(y),h[P].add(y),h[le].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,P=R.length;w<P;++w){const le=R[w],O=le.start,J=le.count;for(let Z=O,ae=O+J;Z<ae;Z+=3)S(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new j,C=new j,F=new j,N=new j;function k(w){F.fromBufferAttribute(s,w),N.copy(F);const P=f[w];L.copy(P),L.sub(F.multiplyScalar(F.dot(P))).normalize(),C.crossVectors(N,P);const O=C.dot(h[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,P=R.length;w<P;++w){const le=R[w],O=le.start,J=le.count;for(let Z=O,ae=O+J;Z<ae;Z+=3)k(e.getX(Z+0)),k(e.getX(Z+1)),k(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const s=new j,a=new j,c=new j,f=new j,h=new j,d=new j,g=new j,_=new j;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),A=e.getX(m+1),y=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),c.fromBufferAttribute(t,y),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),f.fromBufferAttribute(i,M),h.fromBufferAttribute(i,A),d.fromBufferAttribute(i,y),f.add(g),h.add(g),d.add(g),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(A,h.x,h.y,h.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,_=f.normalized,m=new d.constructor(h.length*g);let x=0,M=0;for(let A=0,y=h.length;A<y;A++){f.isInterleavedBufferAttribute?x=h[A]*f.data.stride+f.offset:x=h[A]*g;for(let S=0;S<g;S++)m[M++]=d[x++]}return new Dn(m,g,_)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new di,i=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,i);t.setAttribute(f,d)}const a=this.morphAttributes;for(const f in a){const h=[],d=a[f];for(let g=0,_=d.length;g<_;g++){const m=d[g],x=e(m,i);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let a=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let _=0,m=d.length;_<m;_++){const x=d[_];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const a=e.morphAttributes;for(const d in a){const g=[],_=a[d];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const _=c[d];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class by{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new j;class xd{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Nt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Nt(t,this.array),i=Nt(i,this.array),s=Nt(s,this.array),a=Nt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){Dc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Dn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new xd(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Dc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Ry=0;class Pi extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=_o,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Zs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Zs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const f in a){const h=a[f];delete h.metadata,c.push(h)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new j,Wf=new j,tc=new j,jr=new j,Xf=new j,nc=new j,jf=new j;class Fa{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wf.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),jr.copy(this.origin).sub(Wf);const a=e.distanceTo(t)*.5,c=-this.direction.dot(tc),f=jr.dot(this.direction),h=-jr.dot(tc),d=jr.lengthSq(),g=Math.abs(1-c*c);let _,m,x,M;if(g>0)if(_=c*h-f,m=c*f-h,M=a*g,_>=0)if(m>=-M)if(m<=M){const A=1/g;_*=A,m*=A,x=_*(_+c*m+2*f)+m*(c*_+m+2*h)+d}else m=a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*h)+d;else m=-a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*h)+d;else m<=-M?(_=Math.max(0,-(-c*a+f)),m=_>0?-a:Math.min(Math.max(-a,-h),a),x=-_*_+m*(m+2*h)+d):m<=M?(_=0,m=Math.min(Math.max(-a,-h),a),x=m*(m+2*h)+d):(_=Math.max(0,-(c*a+f)),m=_>0?a:Math.min(Math.max(-a,-h),a),x=-_*_+m*(m+2*h)+d);else m=c>0?-a:a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Wf).addScaledVector(tc,m),x}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const i=hr.dot(this.direction),s=hr.dot(hr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,f,h;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,s=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,s=(e.min.x-m.x)*d),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-m.z)*_,h=(e.max.z-m.z)*_):(f=(e.max.z-m.z)*_,h=(e.min.z-m.z)*_),i>h||f>s)||((f>i||i!==i)&&(i=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,i,s,a){Xf.subVectors(t,e),nc.subVectors(i,e),jf.crossVectors(Xf,nc);let c=this.direction.dot(jf),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;jr.subVectors(this.origin,e);const h=f*this.direction.dot(nc.crossVectors(jr,nc));if(h<0)return null;const d=f*this.direction.dot(Xf.cross(jr));if(d<0||h+d>c)return null;const g=-f*jr.dot(jf);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ts extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=C0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ag=new mt,ms=new Fa,ic=new Di,bg=new j,rc=new j,sc=new j,oc=new j,Yf=new j,ac=new j,Rg=new j,lc=new j;class Xn extends Kt{constructor(e=new di,t=new Ts){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(a&&f){ac.set(0,0,0);for(let h=0,d=a.length;h<d;h++){const g=f[h],_=a[h];g!==0&&(Yf.fromBufferAttribute(_,e),c?ac.addScaledVector(Yf,g):ac.addScaledVector(Yf.sub(t),g))}t.add(ac)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ic.copy(i.boundingSphere),ic.applyMatrix4(a),ms.copy(e.ray).recast(e.near),!(ic.containsPoint(ms.origin)===!1&&(ms.intersectSphere(ic,bg)===null||ms.origin.distanceToSquared(bg)>(e.far-e.near)**2))&&(Ag.copy(a).invert(),ms.copy(e.ray).applyMatrix4(Ag),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,f=a.index,h=a.attributes.position,d=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,m=a.groups,x=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let C=R,F=L;C<F;C+=3){const N=f.getX(C),k=f.getX(C+1),w=f.getX(C+2);s=cc(this,S,e,i,d,g,_,N,k,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),A=Math.min(f.count,x.start+x.count);for(let y=M,S=A;y<S;y+=3){const R=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);s=cc(this,c,e,i,d,g,_,R,L,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,A=m.length;M<A;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=R,F=L;C<F;C+=3){const N=C,k=C+1,w=C+2;s=cc(this,S,e,i,d,g,_,N,k,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let y=M,S=A;y<S;y+=3){const R=y,L=y+1,C=y+2;s=cc(this,c,e,i,d,g,_,R,L,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function Cy(o,e,t,i,s,a,c,f){let h;if(e.side===Wn?h=i.intersectTriangle(c,a,s,!0,f):h=i.intersectTriangle(s,a,c,e.side===vr,f),h===null)return null;lc.copy(f),lc.applyMatrix4(o.matrixWorld);const d=t.ray.origin.distanceTo(lc);return d<t.near||d>t.far?null:{distance:d,point:lc.clone(),object:o}}function cc(o,e,t,i,s,a,c,f,h,d){o.getVertexPosition(f,rc),o.getVertexPosition(h,sc),o.getVertexPosition(d,oc);const g=Cy(o,e,t,i,rc,sc,oc,Rg);if(g){const _=new j;Ai.getBarycoord(Rg,rc,sc,oc,_),s&&(g.uv=Ai.getInterpolatedAttribute(s,f,h,d,_,new lt)),a&&(g.uv1=Ai.getInterpolatedAttribute(a,f,h,d,_,new lt)),c&&(g.normal=Ai.getInterpolatedAttribute(c,f,h,d,_,new j),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:h,c:d,normal:new j,materialIndex:0};Ai.getNormal(rc,sc,oc,m.normal),g.face=m,g.barycoord=_}return g}const Cg=new j,Pg=new Wt,Lg=new Wt,Py=new j,Dg=new mt,uc=new j,qf=new Di,Ig=new mt,Kf=new Fa;class Ly extends Xn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=og,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new $i),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingBox.expandByPoint(uc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,uc),this.boundingSphere.expandByPoint(uc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qf.copy(this.boundingSphere),qf.applyMatrix4(s),e.ray.intersectsSphere(qf)!==!1&&(Ig.copy(s).invert(),Kf.copy(e.ray).applyMatrix4(Ig),!(this.boundingBox!==null&&Kf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Kf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===og?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Je("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Pg.fromBufferAttribute(s.attributes.skinIndex,e),Lg.fromBufferAttribute(s.attributes.skinWeight,e),Cg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Lg.getComponent(a);if(c!==0){const f=Pg.getComponent(a);Dg.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(Py.copy(Cg).applyMatrix4(Dg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class e_ extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class yd extends _n{constructor(e=null,t=1,i=1,s,a,c,f,h,d=ln,g=ln,_,m){super(null,c,f,h,d,g,s,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ng=new mt,Dy=new mt;class Sd{constructor(e=[],t=[]){this.uuid=Ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Je("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new mt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const f=e[a]?e[a].matrixWorld:Dy;Ng.multiplyMatrices(f,t[a]),Ng.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Sd(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new yd(t,e,e,hi,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(Je("Skeleton: No bone found with UUID:",a),c=new e_),this.bones.push(c),this.boneInverses.push(new mt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const f=i[s];e.boneInverses.push(f.toArray())}return e}}class Qh extends Dn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const lo=new mt,Ug=new mt,fc=[],Fg=new $i,Iy=new mt,va=new Xn,xa=new Di;class Ny extends Xn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Iy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),Fg.copy(e.boundingBox).applyMatrix4(lo),this.boundingBox.union(Fg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,lo),xa.copy(e.boundingSphere).applyMatrix4(lo),this.boundingSphere.union(xa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let f=0;f<i.length;f++)i[f]=s[c+f]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(va.geometry=this.geometry,va.material=this.material,va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xa.copy(this.boundingSphere),xa.applyMatrix4(i),e.ray.intersectsSphere(xa)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,lo),Ug.multiplyMatrices(i,lo),va.matrixWorld=Ug,va.raycast(e,fc);for(let c=0,f=fc.length;c<f;c++){const h=fc[c];h.instanceId=a,h.object=this,t.push(h)}fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new yd(new Float32Array(s*this.count),s,this.count,fd,fi));const a=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const f=this.geometry.morphTargetsRelative?1:1-c,h=s*e;a[h]=f,a.set(i,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const $f=new j,Uy=new j,Fy=new dt;class Kr{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=$f.subVectors(i,t).cross(Uy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($f),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Fy.getNormalMatrix(e),s=this.coplanarPoint($f).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Di,Oy=new lt(.5,.5),hc=new j;class Md{constructor(e=new Kr,t=new Kr,i=new Kr,s=new Kr,a=new Kr,c=new Kr){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Xi,i=!1){const s=this.planes,a=e.elements,c=a[0],f=a[1],h=a[2],d=a[3],g=a[4],_=a[5],m=a[6],x=a[7],M=a[8],A=a[9],y=a[10],S=a[11],R=a[12],L=a[13],C=a[14],F=a[15];if(s[0].setComponents(d-c,x-g,S-M,F-R).normalize(),s[1].setComponents(d+c,x+g,S+M,F+R).normalize(),s[2].setComponents(d+f,x+_,S+A,F+L).normalize(),s[3].setComponents(d-f,x-_,S-A,F-L).normalize(),i)s[4].setComponents(h,m,y,C).normalize(),s[5].setComponents(d-h,x-m,S-y,F-C).normalize();else if(s[4].setComponents(d-h,x-m,S-y,F-C).normalize(),t===Xi)s[5].setComponents(d+h,x+m,S+y,F+C).normalize();else if(t===Ia)s[5].setComponents(h,m,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=Oy.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(hc.x=s.normal.x>0?e.max.x:e.min.x,hc.y=s.normal.y>0?e.max.y:e.min.y,hc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t_ extends Pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Nc=new j,Uc=new j,Og=new mt,ya=new Fa,dc=new Di,Zf=new j,kg=new j;class Ed extends Kt{constructor(e=new di,t=new t_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Nc.fromBufferAttribute(t,s-1),Uc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Nc.distanceTo(Uc);e.setAttribute("lineDistance",new Ci(i,1))}else Je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),dc.copy(i.boundingSphere),dc.applyMatrix4(s),dc.radius+=a,e.ray.intersectsSphere(dc)===!1)return;Og.copy(s).invert(),ya.copy(e.ray).applyMatrix4(Og);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let A=x,y=M-1;A<y;A+=d){const S=g.getX(A),R=g.getX(A+1),L=pc(this,e,ya,h,S,R,A);L&&t.push(L)}if(this.isLineLoop){const A=g.getX(M-1),y=g.getX(x),S=pc(this,e,ya,h,A,y,M-1);S&&t.push(S)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let A=x,y=M-1;A<y;A+=d){const S=pc(this,e,ya,h,A,A+1,A);S&&t.push(S)}if(this.isLineLoop){const A=pc(this,e,ya,h,M-1,x,M-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function pc(o,e,t,i,s,a,c){const f=o.geometry.attributes.position;if(Nc.fromBufferAttribute(f,s),Uc.fromBufferAttribute(f,a),t.distanceSqToSegment(Nc,Uc,Zf,kg)>i)return;Zf.applyMatrix4(o.matrixWorld);const d=e.ray.origin.distanceTo(Zf);if(!(d<e.near||d>e.far))return{distance:d,point:kg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Bg=new j,zg=new j;class ky extends Ed{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Bg.fromBufferAttribute(t,s),zg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Bg.distanceTo(zg);e.setAttribute("lineDistance",new Ci(i,1))}else Je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class By extends Ed{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class n_ extends Pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vg=new mt,ed=new Fa,mc=new Di,gc=new j;class zy extends Kt{constructor(e=new di,t=new n_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),mc.copy(i.boundingSphere),mc.applyMatrix4(s),mc.radius+=a,e.ray.intersectsSphere(mc)===!1)return;Vg.copy(s).invert(),ed.copy(e.ray).applyMatrix4(Vg);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=i.index,_=i.attributes.position;if(d!==null){const m=Math.max(0,c.start),x=Math.min(d.count,c.start+c.count);for(let M=m,A=x;M<A;M++){const y=d.getX(M);gc.fromBufferAttribute(_,y),Hg(gc,y,h,s,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=m,A=x;M<A;M++)gc.fromBufferAttribute(_,M),Hg(gc,M,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Hg(o,e,t,i,s,a,c){const f=ed.distanceSqToPoint(o);if(f<t){const h=new j;ed.closestPointToPoint(o,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;a.push({distance:d,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class i_ extends _n{constructor(e=[],t=ws,i,s,a,c,f,h,d,g){super(e,t,i,s,a,c,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ua extends _n{constructor(e,t,i=Yi,s,a,c,f=ln,h=ln,d,g=yr,_=1){if(g!==yr&&g!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,s,a,c,f,h,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vy extends Ua{constructor(e,t=Yi,i=ws,s,a,c=ln,f=ln,h,d=yr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,s,a,c,f,h,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r_ extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oa extends di{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const f=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const h=[],d=[],g=[],_=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(h),this.setAttribute("position",new Ci(d,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(_,2));function M(A,y,S,R,L,C,F,N,k,w,P){const le=C/k,O=F/w,J=C/2,Z=F/2,ae=N/2,Q=k+1,te=w+1;let W=0,K=0;const oe=new j;for(let ce=0;ce<te;ce++){const U=ce*O-Z;for(let Y=0;Y<Q;Y++){const Ae=Y*le-J;oe[A]=Ae*R,oe[y]=U*L,oe[S]=ae,d.push(oe.x,oe.y,oe.z),oe[A]=0,oe[y]=0,oe[S]=N>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(Y/k),_.push(1-ce/w),W+=1}}for(let ce=0;ce<w;ce++)for(let U=0;U<k;U++){const Y=m+U+Q*ce,Ae=m+U+Q*(ce+1),We=m+(U+1)+Q*(ce+1),$e=m+(U+1)+Q*ce;h.push(Y,Ae,$e),h.push(Ae,We,$e),K+=6}f.addGroup(x,K,P),x+=K,m+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ka extends di{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,f=Math.floor(i),h=Math.floor(s),d=f+1,g=h+1,_=e/f,m=t/h,x=[],M=[],A=[],y=[];for(let S=0;S<g;S++){const R=S*m-c;for(let L=0;L<d;L++){const C=L*_-a;M.push(C,-R,0),A.push(0,0,1),y.push(L/f),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<f;R++){const L=R+d*S,C=R+d*(S+1),F=R+1+d*(S+1),N=R+1+d*S;x.push(L,C,N),x.push(C,F,N)}this.setIndex(x),this.setAttribute("position",new Ci(M,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hy extends Pi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ct(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function wo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(o){const e={};for(let t=0;t<o.length;t++){const i=wo(o[t]);for(const s in i)e[s]=i[s]}return e}function Gy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function s_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const Wy={clone:wo,merge:Ln};var Xy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xy,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Yy extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Td extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j0,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zi extends Td{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qy extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ux,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ky extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function _c(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function $y(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Gg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const f=t[a]*e;for(let h=0;h!==e;++h)s[c++]=o[f+h]}return s}function o_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class Co{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let f=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const f=t[1];e<f&&(i=2,a=f);for(let h=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===h)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const f=i+c>>>1;e<t[f]?c=f:i=f+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zy extends Co{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lg,endingEnd:lg}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,f=s[a],h=s[c];if(f===void 0)switch(this.getSettings_().endingStart){case cg:a=e,f=2*t-i;break;case ug:a=s.length-2,f=t+s[a]-s[a+1];break;default:a=e,f=i}if(h===void 0)switch(this.getSettings_().endingEnd){case cg:c=e,h=2*i-t;break;case ug:c=1,h=i+s[1]-s[0];break;default:c=e-1,h=t}const d=(i-t)*.5,g=this.valueSize;this._weightPrev=d/(t-f),this._weightNext=d/(h-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),A=M*M,y=A*M,S=-m*y+2*m*A-m*M,R=(1+m)*y+(-1.5-2*m)*A+(-.5+m)*M+1,L=(-1-x)*y+(1.5+x)*A+.5*M,C=x*y-x*A;for(let F=0;F!==f;++F)a[F]=S*c[g+F]+R*c[d+F]+L*c[h+F]+C*c[_+F];return a}}class Jy extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=(i-t)/(s-t),_=1-g;for(let m=0;m!==f;++m)a[m]=c[d+m]*_+c[h+m]*g;return a}}class Qy extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class eS extends Co{interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=e*f,d=h-f,g=this.settings||this.DefaultSettings_,_=g.inTangents,m=g.outTangents;if(!_||!m){const A=(i-t)/(s-t),y=1-A;for(let S=0;S!==f;++S)a[S]=c[d+S]*y+c[h+S]*A;return a}const x=f*2,M=e-1;for(let A=0;A!==f;++A){const y=c[d+A],S=c[h+A],R=M*x+A*2,L=m[R],C=m[R+1],F=e*x+A*2,N=_[F],k=_[F+1];let w=(i-t)/(s-t),P,le,O,J,Z;for(let ae=0;ae<8;ae++){P=w*w,le=P*w,O=1-w,J=O*O,Z=J*O;const te=Z*t+3*J*w*L+3*O*P*N+le*s-i;if(Math.abs(te)<1e-10)break;const W=3*J*(L-t)+6*O*w*(N-L)+3*P*(s-N);if(Math.abs(W)<1e-10)break;w=w-te/W,w=Math.max(0,Math.min(1,w))}a[A]=Z*y+3*J*w*C+3*O*P*k+le*S}return a}}class Ii{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_c(t,this.TimeBufferType),this.values=_c(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:_c(e.times,Array),values:_c(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Qy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new eS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case La:t=this.InterpolantFactoryMethodDiscrete;break;case Da:t=this.InterpolantFactoryMethodLinear;break;case Af:t=this.InterpolantFactoryMethodSmooth;break;case ag:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Je("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return La;case this.InterpolantFactoryMethodLinear:return Da;case this.InterpolantFactoryMethodSmooth:return Af;case this.InterpolantFactoryMethodBezier:return ag}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const f=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*f,c*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(rt("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(rt("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==a;f++){const h=i[f];if(typeof h=="number"&&isNaN(h)){rt("KeyframeTrack: Time is not a valid number.",this,f,h),e=!1;break}if(c!==null&&c>h){rt("KeyframeTrack: Out of order keys.",this,f,h,c),e=!1;break}c=h}if(s!==void 0&&Wx(s))for(let f=0,h=s.length;f!==h;++f){const d=s[f];if(isNaN(d)){rt("KeyframeTrack: Value is not a valid number.",this,f,d),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Af,a=e.length-1;let c=1;for(let f=1;f<a;++f){let h=!1;const d=e[f],g=e[f+1];if(d!==g&&(f!==1||d!==e[0]))if(s)h=!0;else{const _=f*i,m=_-i,x=_+i;for(let M=0;M!==i;++M){const A=t[_+M];if(A!==t[m+M]||A!==t[x+M]){h=!0;break}}}if(h){if(f!==c){e[c]=e[f];const _=f*i,m=c*i;for(let x=0;x!==i;++x)t[m+x]=t[_+x]}++c}}if(a>0){e[c]=e[a];for(let f=a*i,h=c*i,d=0;d!==i;++d)t[h+d]=t[f+d];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ii.prototype.ValueTypeName="";Ii.prototype.TimeBufferType=Float32Array;Ii.prototype.ValueBufferType=Float32Array;Ii.prototype.DefaultInterpolation=Da;class Po extends Ii{constructor(e,t,i){super(e,t,i)}}Po.prototype.ValueTypeName="bool";Po.prototype.ValueBufferType=Array;Po.prototype.DefaultInterpolation=La;Po.prototype.InterpolantFactoryMethodLinear=void 0;Po.prototype.InterpolantFactoryMethodSmooth=void 0;class a_ extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}a_.prototype.ValueTypeName="color";class Ao extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}Ao.prototype.ValueTypeName="number";class tS extends Co{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=(i-t)/(s-t);let d=e*f;for(let g=d+f;d!==g;d+=4)Li.slerpFlat(a,0,c,d-f,c,d,h);return a}}class bo extends Ii{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new tS(this.times,this.values,this.getValueSize(),e)}}bo.prototype.ValueTypeName="quaternion";bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Lo extends Ii{constructor(e,t,i){super(e,t,i)}}Lo.prototype.ValueTypeName="string";Lo.prototype.ValueBufferType=Array;Lo.prototype.DefaultInterpolation=La;Lo.prototype.InterpolantFactoryMethodLinear=void 0;Lo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ro extends Ii{constructor(e,t,i,s){super(e,t,i,s)}}Ro.prototype.ValueTypeName="vector";class nS{constructor(e="",t=-1,i=[],s=Ix){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ri(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,f=i.length;c!==f;++c)t.push(rS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(Ii.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let f=0;f<a;f++){let h=[],d=[];h.push((f+a-1)%a,f,(f+1)%a),d.push(0,1,0);const g=$y(h);h=Gg(h,1,g),d=Gg(d,1,g),!s&&h[0]===0&&(h.push(a),d.push(d[0])),c.push(new Ao(".morphTargetInfluences["+t[f].name+"]",h,d).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let f=0,h=e.length;f<h;f++){const d=e[f],g=d.name.match(a);if(g&&g.length>1){const _=g[1];let m=s[_];m||(s[_]=m=[]),m.push(d)}}const c=[];for(const f in s)c.push(this.CreateFromMorphTargetSequence(f,s[f],t,i));return c}static parseAnimation(e,t){if(Je("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return rt("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,m,x,M,A){if(x.length!==0){const y=[],S=[];o_(x,y,S,M),y.length!==0&&A.push(new _(m,y,S))}},s=[],a=e.name||"default",c=e.fps||30,f=e.blendMode;let h=e.length||-1;const d=e.hierarchy||[];for(let _=0;_<d.length;_++){const m=d[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const x={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let A=0;A<m[M].morphTargets.length;A++)x[m[M].morphTargets[A]]=-1;for(const A in x){const y=[],S=[];for(let R=0;R!==m[M].morphTargets.length;++R){const L=m[M];y.push(L.time),S.push(L.morphTarget===A?1:0)}s.push(new Ao(".morphTargetInfluence["+A+"]",y,S))}h=x.length*c}else{const x=".bones["+t[_].name+"]";i(Ro,x+".position",m,"pos",s),i(bo,x+".quaternion",m,"rot",s),i(Ro,x+".scale",m,"scl",s)}}return s.length===0?null:new this(a,h,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function iS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ao;case"vector":case"vector2":case"vector3":case"vector4":return Ro;case"color":return a_;case"quaternion":return bo;case"bool":case"boolean":return Po;case"string":return Lo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function rS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=iS(o.type);if(o.times===void 0){const t=[],i=[];o_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const mr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Wg(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Wg(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Wg(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class sS{constructor(e,t,i){const s=this;let a=!1,c=0,f=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){f++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,f),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,f),c===f&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,_){return d.push(g,_),this},this.removeHandler=function(g){const _=d.indexOf(g);return _!==-1&&d.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=d.length;_<m;_+=2){const x=d[_],M=d[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const oS=new sS;class Do{constructor(e){this.manager=e!==void 0?e:oS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Do.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class aS extends Error{constructor(e,t){super(e),this.response=t}}class l_ extends Do{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=mr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:i,onError:s});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&Je("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const g=dr[e],_=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),x=m?parseInt(m):0,M=x!==0;let A=0;const y=new ReadableStream({start(S){R();function R(){_.read().then(({done:L,value:C})=>{if(L)S.close();else{A+=C.byteLength;const F=new ProgressEvent("progress",{lengthComputable:M,loaded:A,total:x});for(let N=0,k=g.length;N<k;N++){const w=g[N];w.onProgress&&w.onProgress(F)}S.enqueue(C),R()}},L=>{S.error(L)})}}});return new Response(y)}else throw new aS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return d.json();default:if(f==="")return d.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),m=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(m);return d.arrayBuffer().then(M=>x.decode(M))}}}).then(d=>{mr.add(`file:${e}`,d);const g=dr[e];delete dr[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onLoad&&x.onLoad(d)}}).catch(d=>{const g=dr[e];if(g===void 0)throw this.manager.itemError(e),d;delete dr[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onError&&x.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const co=new WeakMap;class lS extends Do{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=mr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let _=co.get(c);_===void 0&&(_=[],co.set(c,_)),_.push({onLoad:t,onError:s})}return c}const f=Na("img");function h(){g(),t&&t(this);const _=co.get(this)||[];for(let m=0;m<_.length;m++){const x=_[m];x.onLoad&&x.onLoad(this)}co.delete(this),a.manager.itemEnd(e)}function d(_){g(),s&&s(_),mr.remove(`image:${e}`);const m=co.get(this)||[];for(let x=0;x<m.length;x++){const M=m[x];M.onError&&M.onError(_)}co.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){f.removeEventListener("load",h,!1),f.removeEventListener("error",d,!1)}return f.addEventListener("load",h,!1),f.addEventListener("error",d,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),mr.add(`image:${e}`,f),a.manager.itemStart(e),f.src=e,f}}class cS extends Do{constructor(e){super(e)}load(e,t,i,s){const a=new _n,c=new lS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){a.image=f,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Oc extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Jf=new mt,Xg=new j,jg=new j;class wd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Md,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xg),jg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jg),t.updateMatrixWorld(),Jf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Ia||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new j,xc=new Li,Bi=new j;class c_ extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,xc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,xc,Bi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(vc,xc,Bi),Bi.x===1&&Bi.y===1&&Bi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,xc,Bi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Yr=new j,Yg=new lt,qg=new lt;class Gn extends c_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Aa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Aa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z),Yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yr.x,Yr.y).multiplyScalar(-e/Yr.z)}getViewSize(e,t){return this.getViewBounds(e,Yg,qg),t.subVectors(qg,Yg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Aa*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;a+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class uS extends wd{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=To*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class fS extends Oc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new uS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class hS extends wd{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class dS extends Oc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new hS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ba extends c_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=d*this.view.offsetX,c=a+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class pS extends wd{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new pS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class mS extends Oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ra{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Qf=new WeakMap;class gS extends Do{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Je("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Je("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=mr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(d=>{if(Qf.has(c)===!0)s&&s(Qf.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(d),a.manager.itemEnd(e),d});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const h=fetch(e,f).then(function(d){return d.blob()}).then(function(d){return createImageBitmap(d,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(d){return mr.add(`image-bitmap:${e}`,d),t&&t(d),a.manager.itemEnd(e),d}).catch(function(d){s&&s(d),Qf.set(h,d),mr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});mr.add(`image-bitmap:${e}`,h),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const uo=-90,fo=1;class _S extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gn(uo,fo,e,t);s.layers=this.layers,this.add(s);const a=new Gn(uo,fo,e,t);a.layers=this.layers,this.add(a);const c=new Gn(uo,fo,e,t);c.layers=this.layers,this.add(c);const f=new Gn(uo,fo,e,t);f.layers=this.layers,this.add(f);const h=new Gn(uo,fo,e,t);h.layers=this.layers,this.add(h);const d=new Gn(uo,fo,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,f,h]=t;for(const d of t)this.remove(d);if(e===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Ia)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,h,d,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const A=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=A,e.setRenderTarget(i,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class vS extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ad="\\[\\]\\.:\\/",xS=new RegExp("["+Ad+"]","g"),bd="[^"+Ad+"]",yS="[^"+Ad.replace("\\.","")+"]",SS=/((?:WC+[\/:])*)/.source.replace("WC",bd),MS=/(WCOD+)?/.source.replace("WCOD",yS),ES=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bd),TS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bd),wS=new RegExp("^"+SS+MS+ES+TS+"$"),AS=["material","materials","bones","map"];class bS{constructor(e,t,i){const s=i||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ut{constructor(e,t,i){this.path=t,this.parsedPath=i||Ut.parseTrackName(t),this.node=Ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ut.Composite(e,t,i):new Ut(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xS,"")}static parseTrackName(e){const t=wS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);AS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const f=a[c];if(f.name===t||f.uuid===t)return f;const h=i(f.children);if(h)return h}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Je("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let d=t.objectIndex;switch(i){case"materials":if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){rt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){rt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===d){d=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){rt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){rt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){rt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(d!==void 0){if(e[d]===void 0){rt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[d]}}const c=e[s];if(c===void 0){const d=t.nodeName;rt("PropertyBinding: Trying to update property for track: "+d+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){rt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}h=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(h=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ut.Composite=bS;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Kg{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=gt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(gt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class RS extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Je("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function $g(o,e,t,i){const s=CS(i);switch(t){case G0:return o*e;case fd:return o*e/s.components*s.byteLength;case hd:return o*e/s.components*s.byteLength;case Eo:return o*e*2/s.components*s.byteLength;case dd:return o*e*2/s.components*s.byteLength;case W0:return o*e*3/s.components*s.byteLength;case hi:return o*e*4/s.components*s.byteLength;case pd:return o*e*4/s.components*s.byteLength;case wc:case Ac:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Rc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case yh:case Mh:return Math.max(o,16)*Math.max(e,8)/4;case xh:case Sh:return Math.max(o,8)*Math.max(e,8)/2;case Eh:case Th:case Ah:case bh:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case wh:case Rh:case Ch:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Wh:case Xh:case jh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Yh:case qh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Kh:case $h:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function CS(o){switch(o){case Qn:case B0:return{byteLength:1,components:1};case Ca:case z0:case xr:return{byteLength:2,components:1};case cd:case ud:return{byteLength:2,components:4};case Yi:case ld:case fi:return{byteLength:4,components:1};case V0:case H0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ad}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ad);function u_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function PS(o){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,_=d.byteLength,m=o.createBuffer();o.bindBuffer(h,m),o.bufferData(h,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=o.SHORT;else if(d instanceof Uint32Array)x=o.UNSIGNED_INT;else if(d instanceof Int32Array)x=o.INT;else if(d instanceof Int8Array)x=o.BYTE;else if(d instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,h,d){const g=h.array,_=h.updateRanges;if(o.bindBuffer(d,f),_.length===0)o.bufferSubData(d,0,g);else{_.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<_.length;x++){const M=_[m],A=_[x];A.start<=M.start+M.count+1?M.count=Math.max(M.count,A.start+A.count-M.start):(++m,_[m]=A)}_.length=m+1;for(let x=0,M=_.length;x<M;x++){const A=_[x];o.bufferSubData(d,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(o.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,h),d.version=f.version}}return{get:s,remove:a,update:c}}var LS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DS=`#ifdef USE_ALPHAHASH
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
#endif`,IS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,OS=`#ifdef USE_AOMAP
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
#endif`,kS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BS=`#ifdef USE_BATCHING
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
#endif`,zS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,HS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WS=`#ifdef USE_IRIDESCENCE
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
#endif`,XS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$S=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,oM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
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
#endif`,hM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_M=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,xM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RM=`PhysicalMaterial material;
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
#endif`,CM=`uniform sampler2D dfgLUT;
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
}`,PM=`
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
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
#endif`,DM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,GM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
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
#endif`,eE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mE=`float getShadowMask() {
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
}`,gE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_E=`#ifdef USE_SKINNING
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
#endif`,vE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xE=`#ifdef USE_SKINNING
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
#endif`,yE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ME=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,EE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LE=`uniform sampler2D t2D;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`#include <common>
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
}`,OE=`#if DEPTH_PACKING == 3200
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
}`,kE=`#define DISTANCE
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
}`,BE=`#define DISTANCE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`uniform float scale;
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
}`,GE=`uniform vec3 diffuse;
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
}`,WE=`#include <common>
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
}`,XE=`uniform vec3 diffuse;
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
}`,jE=`#define LAMBERT
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
}`,YE=`#define LAMBERT
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
}`,qE=`#define MATCAP
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
}`,KE=`#define MATCAP
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
}`,$E=`#define NORMAL
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
}`,ZE=`#define NORMAL
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
}`,JE=`#define PHONG
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
}`,QE=`#define PHONG
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
}`,eT=`#define STANDARD
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
}`,tT=`#define STANDARD
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
}`,nT=`#define TOON
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
}`,iT=`#define TOON
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
}`,rT=`uniform float size;
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,aT=`uniform vec3 color;
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
}`,lT=`uniform float rotation;
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
}`,cT=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:LS,alphahash_pars_fragment:DS,alphamap_fragment:IS,alphamap_pars_fragment:NS,alphatest_fragment:US,alphatest_pars_fragment:FS,aomap_fragment:OS,aomap_pars_fragment:kS,batching_pars_vertex:BS,batching_vertex:zS,begin_vertex:VS,beginnormal_vertex:HS,bsdfs:GS,iridescence_fragment:WS,bumpmap_pars_fragment:XS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:YS,clipping_planes_pars_vertex:qS,clipping_planes_vertex:KS,color_fragment:$S,color_pars_fragment:ZS,color_pars_vertex:JS,color_vertex:QS,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:oM,colorspace_fragment:aM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:fM,envmap_pars_vertex:hM,envmap_physical_pars_fragment:EM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:_M,gradientmap_pars_fragment:vM,lightmap_pars_fragment:xM,lights_lambert_fragment:yM,lights_lambert_pars_fragment:SM,lights_pars_begin:MM,lights_toon_fragment:TM,lights_toon_pars_fragment:wM,lights_phong_fragment:AM,lights_phong_pars_fragment:bM,lights_physical_fragment:RM,lights_physical_pars_fragment:CM,lights_fragment_begin:PM,lights_fragment_maps:LM,lights_fragment_end:DM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:NM,logdepthbuf_pars_vertex:UM,logdepthbuf_vertex:FM,map_fragment:OM,map_pars_fragment:kM,map_particle_fragment:BM,map_particle_pars_fragment:zM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:HM,morphinstance_vertex:GM,morphcolor_vertex:WM,morphnormal_vertex:XM,morphtarget_pars_vertex:jM,morphtarget_vertex:YM,normal_fragment_begin:qM,normal_fragment_maps:KM,normal_pars_fragment:$M,normal_pars_vertex:ZM,normal_vertex:JM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:eE,clearcoat_normal_fragment_maps:tE,clearcoat_pars_fragment:nE,iridescence_pars_fragment:iE,opaque_fragment:rE,packing:sE,premultiplied_alpha_fragment:oE,project_vertex:aE,dithering_fragment:lE,dithering_pars_fragment:cE,roughnessmap_fragment:uE,roughnessmap_pars_fragment:fE,shadowmap_pars_fragment:hE,shadowmap_pars_vertex:dE,shadowmap_vertex:pE,shadowmask_pars_fragment:mE,skinbase_vertex:gE,skinning_pars_vertex:_E,skinning_vertex:vE,skinnormal_vertex:xE,specularmap_fragment:yE,specularmap_pars_fragment:SE,tonemapping_fragment:ME,tonemapping_pars_fragment:EE,transmission_fragment:TE,transmission_pars_fragment:wE,uv_pars_fragment:AE,uv_pars_vertex:bE,uv_vertex:RE,worldpos_vertex:CE,background_vert:PE,background_frag:LE,backgroundCube_vert:DE,backgroundCube_frag:IE,cube_vert:NE,cube_frag:UE,depth_vert:FE,depth_frag:OE,distance_vert:kE,distance_frag:BE,equirect_vert:zE,equirect_frag:VE,linedashed_vert:HE,linedashed_frag:GE,meshbasic_vert:WE,meshbasic_frag:XE,meshlambert_vert:jE,meshlambert_frag:YE,meshmatcap_vert:qE,meshmatcap_frag:KE,meshnormal_vert:$E,meshnormal_frag:ZE,meshphong_vert:JE,meshphong_frag:QE,meshphysical_vert:eT,meshphysical_frag:tT,meshtoon_vert:nT,meshtoon_frag:iT,points_vert:rT,points_frag:sT,shadow_vert:oT,shadow_frag:aT,sprite_vert:lT,sprite_frag:cT},Ce={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Hi={basic:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new ct(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Ln([Ce.points,Ce.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Ln([Ce.common,Ce.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Ln([Ce.sprite,Ce.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:Ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:Ln([Ce.lights,Ce.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:Ln([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const yc={r:0,b:0,g:0},_s=new qi,uT=new mt;function fT(o,e,t,i,s,a){const c=new ct(0);let f=s===!0?0:1,h,d,g=null,_=0,m=null;function x(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const C=R.backgroundBlurriness>0;L=e.get(L,C)}return L}function M(R){let L=!1;const C=x(R);C===null?y(c,f):C&&C.isColor&&(y(C,1),L=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,a):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function A(R,L){const C=x(L);C&&(C.isCubeTexture||C.mapping===Fc)?(d===void 0&&(d=new Xn(new Oa(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:wo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(F,N,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),_s.copy(L.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),d.material.uniforms.envMap.value=C,d.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(_s)),d.material.toneMapped=Mt.getTransfer(C.colorSpace)!==It,(g!==C||_!==C.version||m!==o.toneMapping)&&(d.material.needsUpdate=!0,g=C,_=C.version,m=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Xn(new ka(2,2),new Ki({name:"BackgroundMaterial",uniforms:wo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Mt.getTransfer(C.colorSpace)!==It,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||_!==C.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,g=C,_=C.version,m=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,L){R.getRGB(yc,s_(o)),t.buffers.color.setClear(yc.r,yc.g,yc.b,L,a)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),f=L,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(c,f)},render:M,addToRenderList:A,dispose:S}}function hT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,c=!1;function f(O,J,Z,ae,Q){let te=!1;const W=_(O,ae,Z,J);a!==W&&(a=W,d(a.object)),te=x(O,ae,Z,Q),te&&M(O,ae,Z,Q),Q!==null&&e.update(Q,o.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,C(O,J,Z,ae),Q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return o.createVertexArray()}function d(O){return o.bindVertexArray(O)}function g(O){return o.deleteVertexArray(O)}function _(O,J,Z,ae){const Q=ae.wireframe===!0;let te=i[J.id];te===void 0&&(te={},i[J.id]=te);const W=O.isInstancedMesh===!0?O.id:0;let K=te[W];K===void 0&&(K={},te[W]=K);let oe=K[Z.id];oe===void 0&&(oe={},K[Z.id]=oe);let ce=oe[Q];return ce===void 0&&(ce=m(h()),oe[Q]=ce),ce}function m(O){const J=[],Z=[],ae=[];for(let Q=0;Q<t;Q++)J[Q]=0,Z[Q]=0,ae[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Z,attributeDivisors:ae,object:O,attributes:{},index:null}}function x(O,J,Z,ae){const Q=a.attributes,te=J.attributes;let W=0;const K=Z.getAttributes();for(const oe in K)if(K[oe].location>=0){const U=Q[oe];let Y=te[oe];if(Y===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;W++}return a.attributesNum!==W||a.index!==ae}function M(O,J,Z,ae){const Q={},te=J.attributes;let W=0;const K=Z.getAttributes();for(const oe in K)if(K[oe].location>=0){let U=te[oe];U===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),Q[oe]=Y,W++}a.attributes=Q,a.attributesNum=W,a.index=ae}function A(){const O=a.newAttributes;for(let J=0,Z=O.length;J<Z;J++)O[J]=0}function y(O){S(O,0)}function S(O,J){const Z=a.newAttributes,ae=a.enabledAttributes,Q=a.attributeDivisors;Z[O]=1,ae[O]===0&&(o.enableVertexAttribArray(O),ae[O]=1),Q[O]!==J&&(o.vertexAttribDivisor(O,J),Q[O]=J)}function R(){const O=a.newAttributes,J=a.enabledAttributes;for(let Z=0,ae=J.length;Z<ae;Z++)J[Z]!==O[Z]&&(o.disableVertexAttribArray(Z),J[Z]=0)}function L(O,J,Z,ae,Q,te,W){W===!0?o.vertexAttribIPointer(O,J,Z,Q,te):o.vertexAttribPointer(O,J,Z,ae,Q,te)}function C(O,J,Z,ae){A();const Q=ae.attributes,te=Z.getAttributes(),W=J.defaultAttributeValues;for(const K in te){const oe=te[K];if(oe.location>=0){let ce=Q[K];if(ce===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),ce!==void 0){const U=ce.normalized,Y=ce.itemSize,Ae=e.get(ce);if(Ae===void 0)continue;const We=Ae.buffer,$e=Ae.type,ie=Ae.bytesPerElement,pe=$e===o.INT||$e===o.UNSIGNED_INT||ce.gpuType===ld;if(ce.isInterleavedBufferAttribute){const de=ce.data,Ue=de.stride,Ve=ce.offset;if(de.isInstancedInterleavedBuffer){for(let nt=0;nt<oe.locationSize;nt++)S(oe.location+nt,de.meshPerAttribute);O.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let nt=0;nt<oe.locationSize;nt++)y(oe.location+nt);o.bindBuffer(o.ARRAY_BUFFER,We);for(let nt=0;nt<oe.locationSize;nt++)L(oe.location+nt,Y/oe.locationSize,$e,U,Ue*ie,(Ve+Y/oe.locationSize*nt)*ie,pe)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<oe.locationSize;de++)S(oe.location+de,ce.meshPerAttribute);O.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<oe.locationSize;de++)y(oe.location+de);o.bindBuffer(o.ARRAY_BUFFER,We);for(let de=0;de<oe.locationSize;de++)L(oe.location+de,Y/oe.locationSize,$e,U,Y*ie,Y/oe.locationSize*de*ie,pe)}}else if(W!==void 0){const U=W[K];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(oe.location,U);break;case 3:o.vertexAttrib3fv(oe.location,U);break;case 4:o.vertexAttrib4fv(oe.location,U);break;default:o.vertexAttrib1fv(oe.location,U)}}}}R()}function F(){P();for(const O in i){const J=i[O];for(const Z in J){const ae=J[Z];for(const Q in ae){const te=ae[Q];for(const W in te)g(te[W].object),delete te[W];delete ae[Q]}}delete i[O]}}function N(O){if(i[O.id]===void 0)return;const J=i[O.id];for(const Z in J){const ae=J[Z];for(const Q in ae){const te=ae[Q];for(const W in te)g(te[W].object),delete te[W];delete ae[Q]}}delete i[O.id]}function k(O){for(const J in i){const Z=i[J];for(const ae in Z){const Q=Z[ae];if(Q[O.id]===void 0)continue;const te=Q[O.id];for(const W in te)g(te[W].object),delete te[W];delete Q[O.id]}}}function w(O){for(const J in i){const Z=i[J],ae=O.isInstancedMesh===!0?O.id:0,Q=Z[ae];if(Q!==void 0){for(const te in Q){const W=Q[te];for(const K in W)g(W[K].object),delete W[K];delete Q[te]}delete Z[ae],Object.keys(Z).length===0&&delete i[J]}}}function P(){le(),c=!0,a!==s&&(a=s,d(a.object))}function le(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:P,resetDefaultState:le,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:A,enableAttribute:y,disableUnusedAttributes:R}}function dT(o,e,t){let i;function s(d){i=d}function a(d,g){o.drawArrays(i,d,g),t.update(g,i,1)}function c(d,g,_){_!==0&&(o.drawArraysInstanced(i,d,g,_),t.update(g,i,_))}function f(d,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,g,0,_);let x=0;for(let M=0;M<_;M++)x+=g[M];t.update(x,i,1)}function h(d,g,_,m){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<d.length;M++)c(d[M],g[M],m[M]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,g,0,m,0,_);let M=0;for(let A=0;A<_;A++)M+=g[A]*m[A];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function pT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(k){return!(k!==hi&&i.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Qn&&i.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==fi&&!w)}function h(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(Je("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=o.getParameter(o.MAX_SAMPLES),N=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:A,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:C,maxSamples:F,samples:N}}function mT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new Kr,f=new dt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||i!==0||s;return s=m,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const M=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!s||M===null||M.length===0||a&&!y)a?g(null):d();else{const R=a?0:i,L=R*4;let C=S.clippingState||null;h.value=C,C=g(M,m,L,x);for(let F=0;F!==L;++F)C[F]=t[F];S.clippingState=C,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=R}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,x,M){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=h.value,M!==!0||y===null){const S=x+A*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,C=x;L!==A;++L,C+=4)c.copy(_[L]).applyMatrix4(R,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}const Zr=4,Zg=[.125,.215,.35,.446,.526,.582],Ss=20,gT=256,Sa=new Ba,Jg=new ct;let eh=null,th=0,nh=0,ih=!1;const _T=new j;class Qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:f=_T}=a;eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(eh,th,nh),this._renderer.xr.enabled=ih,e.scissorTest=!1,ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eh=this._renderer.getRenderTarget(),th=this._renderer.getActiveCubeFace(),nh=this._renderer.getActiveMipmapLevel(),ih=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:xr,format:hi,colorSpace:In,depthBuffer:!1},s=e0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e0(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=vT(a)),this._blurMaterial=yT(a,e,t),this._ggxMaterial=xT(a,e,t)}return s}_compileMaterial(e){const t=new Xn(new di,e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,i,s,a){const h=new Gn(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(Jg),_.toneMapping=bi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xn(new Oa,new Ts({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(Jg),S=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(h.up.set(0,d[L],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x+g[L],a.y,a.z)):C===1?(h.up.set(0,0,d[L]),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y+g[L],a.z)):(h.up.set(0,d[L],0),h.position.set(a.x,a.y,a.z),h.lookAt(a.x,a.y,a.z+g[L]));const F=this._cubeSize;ho(s,C*F,L>2?F:0,F,F),_.setRenderTarget(s),S&&_.render(A,h),_.render(e,h)}_.toneMapping=x,_.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ws||e.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=n0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t0());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const h=this._cubeSize;ho(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Sa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),m=0+d*1.25,x=_*m,{_lodMax:M}=this,A=this._sizeLods[i],y=3*A*(i>M-Zr?i-M+Zr:0),S=4*(this._cubeSize-A);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=M-t,ho(a,y,S,3*A,2*A),s.setRenderTarget(a),s.render(f,Sa),h.envMap.value=a.texture,h.roughness.value=0,h.mipInt.value=M-i,ho(e,y,S,3*A,2*A),s.setRenderTarget(e),s.render(f,Sa)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[s];_.material=d;const m=d.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*Ss-1),A=a/M,y=isFinite(a)?1+Math.floor(g*A):Ss;y>Ss&&Je(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Ss}`);const S=[];let R=0;for(let k=0;k<Ss;++k){const w=k/A,P=Math.exp(-w*w/2);S.push(P),k===0?R+=P:k<y&&(R+=2*P)}for(let k=0;k<S.length;k++)S[k]=S[k]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:L}=this;m.dTheta.value=M,m.mipInt.value=L-i;const C=this._sizeLods[s],F=3*C*(s>L-Zr?s-L+Zr:0),N=4*(this._cubeSize-C);ho(t,F,N,3*C,2*C),h.setRenderTarget(t),h.render(_,Sa)}}function vT(o){const e=[],t=[],i=[];let s=o;const a=o-Zr+1+Zg.length;for(let c=0;c<a;c++){const f=Math.pow(2,s);e.push(f);let h=1/f;c>o-Zr?h=Zg[c-o+Zr-1]:c===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,_=1+d,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,A=3,y=2,S=1,R=new Float32Array(A*M*x),L=new Float32Array(y*M*x),C=new Float32Array(S*M*x);for(let N=0;N<x;N++){const k=N%3*2/3-1,w=N>2?0:-1,P=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];R.set(P,A*M*N),L.set(m,y*M*N);const le=[N,N,N,N,N,N];C.set(le,S*M*N)}const F=new di;F.setAttribute("position",new Dn(R,A)),F.setAttribute("uv",new Dn(L,y)),F.setAttribute("faceIndex",new Dn(C,S)),i.push(new Xn(F,null)),s>Zr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function e0(o,e,t){const i=new ji(o,e,t);return i.texture.mapping=Fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ho(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function xT(o,e,t){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function yT(o,e,t){const i=new Float32Array(Ss),s=new j(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function t0(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function n0(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function kc(){return`

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
	`}class f_ extends ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new i_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oa(5,5,5),a=new Ki({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Wn,blending:gr});a.uniforms.tEquirect.value=t;const c=new Xn(s,a),f=t.minFilter;return t.minFilter===pr&&(t.minFilter=cn),new _S(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}function ST(o){let e=new WeakMap,t=new WeakMap,i=null;function s(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===Tf||x===wf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const A=new f_(M.height);return A.fromEquirectangularTexture(o,m),e.set(m,A),m.addEventListener("dispose",d),f(A.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===Tf||x===wf,A=x===ws||x===So;if(M||A){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new Qg(o)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const R=m.image;return M&&R&&R.height>0||A&&R&&h(R)?(i===null&&(i=new Qg(o)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,x){return x===Tf?m.mapping=ws:x===wf&&(m.mapping=So),m}function h(m){let x=0;const M=6;for(let A=0;A<M;A++)m[A]!==void 0&&x++;return x===M}function d(m){const x=m.target;x.removeEventListener("dispose",d);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function MT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ic("WebGLRenderer: "+i+" extension not supported."),s}}}function ET(o,e,t,i){const s={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete s[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(_,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(_){const m=_.attributes;for(const x in m)e.update(m[x],o.ARRAY_BUFFER)}function d(_){const m=[],x=_.index,M=_.attributes.position;let A=0;if(M===void 0)return;if(x!==null){const R=x.array;A=x.version;for(let L=0,C=R.length;L<C;L+=3){const F=R[L+0],N=R[L+1],k=R[L+2];m.push(F,N,N,k,k,F)}}else{const R=M.array;A=M.version;for(let L=0,C=R.length/3-1;L<C;L+=3){const F=L+0,N=L+1,k=L+2;m.push(F,N,N,k,k,F)}}const y=new(M.count>=65535?Q0:J0)(m,1);y.version=A;const S=a.get(_);S&&e.remove(S),a.set(_,y)}function g(_){const m=a.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&d(_)}else d(_);return a.get(_)}return{get:f,update:h,getWireframeAttribute:g}}function TT(o,e,t){let i;function s(m){i=m}let a,c;function f(m){a=m.type,c=m.bytesPerElement}function h(m,x){o.drawElements(i,x,a,m*c),t.update(x,i,1)}function d(m,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,m*c,M),t.update(x,i,M))}function g(m,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,m,0,M);let y=0;for(let S=0;S<M;S++)y+=x[S];t.update(y,i,1)}function _(m,x,M,A){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<m.length;S++)d(m[S]/c,x[S],A[S]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,a,m,0,A,0,M);let S=0;for(let R=0;R<M;R++)S+=x[R]*A[R];t.update(S,i,1)}}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function wT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,f){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=f*(a/3);break;case o.LINES:t.lines+=f*(a/2);break;case o.LINE_STRIP:t.lines+=f*(a-1);break;case o.LINE_LOOP:t.lines+=f*a;break;case o.POINTS:t.points+=f*a;break;default:rt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function AT(o,e,t){const i=new WeakMap,s=new Wt;function a(c,f,h){const d=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(f);if(m===void 0||m.count!==_){let le=function(){w.dispose(),i.delete(f),f.removeEventListener("dispose",le)};var x=le;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),A===!0&&(C=2),y===!0&&(C=3);let F=f.attributes.position.count*C,N=1;F>e.maxTextureSize&&(N=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const k=new Float32Array(F*N*4*_),w=new K0(k,F,N,_);w.type=fi,w.needsUpdate=!0;const P=C*4;for(let O=0;O<_;O++){const J=S[O],Z=R[O],ae=L[O],Q=F*N*4*O;for(let te=0;te<J.count;te++){const W=te*P;M===!0&&(s.fromBufferAttribute(J,te),k[Q+W+0]=s.x,k[Q+W+1]=s.y,k[Q+W+2]=s.z,k[Q+W+3]=0),A===!0&&(s.fromBufferAttribute(Z,te),k[Q+W+4]=s.x,k[Q+W+5]=s.y,k[Q+W+6]=s.z,k[Q+W+7]=0),y===!0&&(s.fromBufferAttribute(ae,te),k[Q+W+8]=s.x,k[Q+W+9]=s.y,k[Q+W+10]=s.z,k[Q+W+11]=ae.itemSize===4?s.w:1)}}m={count:_,texture:w,size:new lt(F,N)},i.set(f,m),f.addEventListener("dispose",le)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<d.length;y++)M+=d[y];const A=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(o,"morphTargetBaseInfluence",A),h.getUniforms().setValue(o,"morphTargetInfluences",d)}h.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}return{update:a}}function bT(o,e,t,i,s){let a=new WeakMap;function c(d){const g=s.render.frame,_=d.geometry,m=e.get(d,_);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),a.get(d)!==g&&(t.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,o.ARRAY_BUFFER),a.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return m}function f(){a=new WeakMap}function h(d){const g=d.target;g.removeEventListener("dispose",h),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const RT={[P0]:"LINEAR_TONE_MAPPING",[L0]:"REINHARD_TONE_MAPPING",[D0]:"CINEON_TONE_MAPPING",[I0]:"ACES_FILMIC_TONE_MAPPING",[U0]:"AGX_TONE_MAPPING",[F0]:"NEUTRAL_TONE_MAPPING",[N0]:"CUSTOM_TONE_MAPPING"};function CT(o,e,t,i,s){const a=new ji(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new ji(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),f=new di;f.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const h=new Yy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Xn(f,h),g=new Ba(-1,1,1,-1,0,1);let _=null,m=null,x=!1,M,A=null,y=[],S=!1;this.setSize=function(R,L){a.setSize(R,L),c.setSize(R,L);for(let C=0;C<y.length;C++){const F=y[C];F.setSize&&F.setSize(R,L)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const L=a.width,C=a.height;for(let F=0;F<y.length;F++){const N=y[F];N.setSize&&N.setSize(L,C)}},this.begin=function(R,L){if(x||R.toneMapping===bi&&y.length===0)return!1;if(A=L,L!==null){const C=L.width,F=L.height;(a.width!==C||a.height!==F)&&this.setSize(C,F)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=bi,!0},this.hasRenderPass=function(){return S},this.end=function(R,L){R.toneMapping=M,x=!0;let C=a,F=c;for(let N=0;N<y.length;N++){const k=y[N];if(k.enabled!==!1&&(k.render(R,F,C,L),k.needsSwap!==!1)){const w=C;C=F,F=w}}if(_!==R.outputColorSpace||m!==R.toneMapping){_=R.outputColorSpace,m=R.toneMapping,h.defines={},Mt.getTransfer(_)===It&&(h.defines.SRGB_TRANSFER="");const N=RT[m];N&&(h.defines[N]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(A),R.render(d,g),A=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),h.dispose()}}const h_=new _n,nd=new Ua(1,1),d_=new K0,p_=new my,m_=new i_,i0=[],r0=[],s0=new Float32Array(16),o0=new Float32Array(9),a0=new Float32Array(4);function Io(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=i0[s];if(a===void 0&&(a=new Float32Array(s),i0[s]=a),e!==0){i.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,o[c].toArray(a,f)}return a}function un(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function fn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Bc(o,e){let t=r0[e];t===void 0&&(t=new Int32Array(e),r0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function PT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function LT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2fv(this.addr,e),fn(t,e)}}function DT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;o.uniform3fv(this.addr,e),fn(t,e)}}function IT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4fv(this.addr,e),fn(t,e)}}function NT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;a0.set(i),o.uniformMatrix2fv(this.addr,!1,a0),fn(t,i)}}function UT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;o0.set(i),o.uniformMatrix3fv(this.addr,!1,o0),fn(t,i)}}function FT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;s0.set(i),o.uniformMatrix4fv(this.addr,!1,s0),fn(t,i)}}function OT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function kT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2iv(this.addr,e),fn(t,e)}}function BT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3iv(this.addr,e),fn(t,e)}}function zT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4iv(this.addr,e),fn(t,e)}}function VT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function HT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2uiv(this.addr,e),fn(t,e)}}function GT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3uiv(this.addr,e),fn(t,e)}}function WT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4uiv(this.addr,e),fn(t,e)}}function XT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(nd.compareFunction=t.isReversedDepthBuffer()?gd:md,a=nd):a=h_,t.setTexture2D(e||a,s)}function jT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||p_,s)}function YT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||m_,s)}function qT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||d_,s)}function KT(o){switch(o){case 5126:return PT;case 35664:return LT;case 35665:return DT;case 35666:return IT;case 35674:return NT;case 35675:return UT;case 35676:return FT;case 5124:case 35670:return OT;case 35667:case 35671:return kT;case 35668:case 35672:return BT;case 35669:case 35673:return zT;case 5125:return VT;case 36294:return HT;case 36295:return GT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return XT;case 35679:case 36299:case 36307:return jT;case 35680:case 36300:case 36308:case 36293:return YT;case 36289:case 36303:case 36311:case 36292:return qT}}function $T(o,e){o.uniform1fv(this.addr,e)}function ZT(o,e){const t=Io(e,this.size,2);o.uniform2fv(this.addr,t)}function JT(o,e){const t=Io(e,this.size,3);o.uniform3fv(this.addr,t)}function QT(o,e){const t=Io(e,this.size,4);o.uniform4fv(this.addr,t)}function e1(o,e){const t=Io(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function t1(o,e){const t=Io(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function n1(o,e){const t=Io(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function i1(o,e){o.uniform1iv(this.addr,e)}function r1(o,e){o.uniform2iv(this.addr,e)}function s1(o,e){o.uniform3iv(this.addr,e)}function o1(o,e){o.uniform4iv(this.addr,e)}function a1(o,e){o.uniform1uiv(this.addr,e)}function l1(o,e){o.uniform2uiv(this.addr,e)}function c1(o,e){o.uniform3uiv(this.addr,e)}function u1(o,e){o.uniform4uiv(this.addr,e)}function f1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=nd:c=h_;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||c,a[f])}function h1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||p_,a[c])}function d1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||m_,a[c])}function p1(o,e,t){const i=this.cache,s=e.length,a=Bc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||d_,a[c])}function m1(o){switch(o){case 5126:return $T;case 35664:return ZT;case 35665:return JT;case 35666:return QT;case 35674:return e1;case 35675:return t1;case 35676:return n1;case 5124:case 35670:return i1;case 35667:case 35671:return r1;case 35668:case 35672:return s1;case 35669:case 35673:return o1;case 5125:return a1;case 36294:return l1;case 36295:return c1;case 36296:return u1;case 35678:case 36198:case 36298:case 36306:case 35682:return f1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return d1;case 36289:case 36303:case 36311:case 36292:return p1}}class g1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=KT(t.type)}}class _1{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=m1(t.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const f=s[a];f.setValue(e,t[f.id],i)}}}const rh=/(\w+)(\])?(\[|\.)?/g;function l0(o,e){o.seq.push(e),o.map[e.id]=e}function x1(o,e,t){const i=o.name,s=i.length;for(rh.lastIndex=0;;){const a=rh.exec(i),c=rh.lastIndex;let f=a[1];const h=a[2]==="]",d=a[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===s){l0(t,d===void 0?new g1(f,o,e):new _1(f,o,e));break}else{let _=t.map[f];_===void 0&&(_=new v1(f),l0(t,_)),t=_}}}class Cc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);x1(f,h,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const f=t[a],h=i[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function c0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const y1=37297;let S1=0;function M1(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const u0=new dt;function E1(o){Mt._getMatrix(u0,Mt.workingColorSpace,o);const e=`mat3( ${u0.elements.map(t=>t.toFixed(4))} )`;switch(Mt.getTransfer(o)){case Lc:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function f0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+M1(o.getShaderSource(e),f)}else return a}function T1(o,e){const t=E1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const w1={[P0]:"Linear",[L0]:"Reinhard",[D0]:"Cineon",[I0]:"ACESFilmic",[U0]:"AgX",[F0]:"Neutral",[N0]:"Custom"};function A1(o,e){const t=w1[e];return t===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new j;function b1(){Mt.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function C1(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function P1(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let f=1;a.type===o.FLOAT_MAT2&&(f=2),a.type===o.FLOAT_MAT3&&(f=3),a.type===o.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:f}}return t}function wa(o){return o!==""}function h0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(o){return o.replace(L1,I1)}const D1=new Map;function I1(o,e){let t=pt[e];if(t===void 0){const i=D1.get(e);if(i!==void 0)t=pt[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return id(t)}const N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p0(o){return o.replace(N1,U1)}function U1(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function m0(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const F1={[Ec]:"SHADOWMAP_TYPE_PCF",[mo]:"SHADOWMAP_TYPE_VSM"};function O1(o){return F1[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const k1={[ws]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[Fc]:"ENVMAP_TYPE_CUBE_UV"};function B1(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":k1[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const z1={[So]:"ENVMAP_MODE_REFRACTION"};function V1(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":z1[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const H1={[C0]:"ENVMAP_BLENDING_MULTIPLY",[Px]:"ENVMAP_BLENDING_MIX",[Lx]:"ENVMAP_BLENDING_ADD"};function G1(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":H1[o.combine]||"ENVMAP_BLENDING_NONE"}function W1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function X1(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=O1(t),d=B1(t),g=V1(t),_=G1(t),m=W1(t),x=R1(t),M=C1(a),A=s.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wa).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(wa).join(`
`),S.length>0&&(S+=`
`)):(y=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),S=[m0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bi?"#define TONE_MAPPING":"",t.toneMapping!==bi?pt.tonemapping_pars_fragment:"",t.toneMapping!==bi?A1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,T1("linearToOutputTexel",t.outputColorSpace),b1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),c=id(c),c=h0(c,t),c=d0(c,t),f=id(f),f=h0(f,t),f=d0(f,t),c=p0(c),f=p0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=R+y+c,C=R+S+f,F=c0(s,s.VERTEX_SHADER,L),N=c0(s,s.FRAGMENT_SHADER,C);s.attachShader(A,F),s.attachShader(A,N),t.index0AttributeName!==void 0?s.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(A,0,"position"),s.linkProgram(A);function k(O){if(o.debug.checkShaderErrors){const J=s.getProgramInfoLog(A)||"",Z=s.getShaderInfoLog(F)||"",ae=s.getShaderInfoLog(N)||"",Q=J.trim(),te=Z.trim(),W=ae.trim();let K=!0,oe=!0;if(s.getProgramParameter(A,s.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,A,F,N);else{const ce=f0(s,F,"vertex"),U=f0(s,N,"fragment");rt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(A,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+ce+`
`+U)}else Q!==""?Je("WebGLProgram: Program Info Log:",Q):(te===""||W==="")&&(oe=!1);oe&&(O.diagnostics={runnable:K,programLog:Q,vertexShader:{log:te,prefix:y},fragmentShader:{log:W,prefix:S}})}s.deleteShader(F),s.deleteShader(N),w=new Cc(s,A),P=P1(s,A)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let le=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return le===!1&&(le=s.getProgramParameter(A,y1)),le},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=N,this}let j1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new q1(e),t.set(e,i)),i}}class q1{constructor(e){this.id=j1++,this.code=e,this.usedTimes=0}}function K1(o,e,t,i,s,a){const c=new $0,f=new Y1,h=new Set,d=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function A(w,P,le,O,J){const Z=O.fog,ae=J.geometry,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,te=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,W=e.get(w.envMap||Q,te),K=W&&W.mapping===Fc?W.image.height:null,oe=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&Je("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ce=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,U=ce!==void 0?ce.length:0;let Y=0;ae.morphAttributes.position!==void 0&&(Y=1),ae.morphAttributes.normal!==void 0&&(Y=2),ae.morphAttributes.color!==void 0&&(Y=3);let Ae,We,$e,ie;if(oe){const At=Hi[oe];Ae=At.vertexShader,We=At.fragmentShader}else Ae=w.vertexShader,We=w.fragmentShader,f.update(w),$e=f.getVertexShaderID(w),ie=f.getFragmentShaderID(w);const pe=o.getRenderTarget(),de=o.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,Ve=J.isBatchedMesh===!0,nt=!!w.map,Zt=!!w.matcap,_t=!!W,Tt=!!w.aoMap,Pt=!!w.lightMap,ft=!!w.bumpMap,Vt=!!w.normalMap,z=!!w.displacementMap,Xt=!!w.emissiveMap,yt=!!w.metalnessMap,wt=!!w.roughnessMap,He=w.anisotropy>0,D=w.clearcoat>0,E=w.dispersion>0,G=w.iridescence>0,he=w.sheen>0,me=w.transmission>0,ue=He&&!!w.anisotropyMap,Oe=D&&!!w.clearcoatMap,Te=D&&!!w.clearcoatNormalMap,Ye=D&&!!w.clearcoatRoughnessMap,it=G&&!!w.iridescenceMap,xe=G&&!!w.iridescenceThicknessMap,Ee=he&&!!w.sheenColorMap,Ge=he&&!!w.sheenRoughnessMap,ke=!!w.specularMap,Pe=!!w.specularColorMap,ut=!!w.specularIntensityMap,V=me&&!!w.transmissionMap,we=me&&!!w.thicknessMap,Se=!!w.gradientMap,Le=!!w.alphaMap,ye=w.alphaTest>0,fe=!!w.alphaHash,Be=!!w.extensions;let st=bi;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(st=o.toneMapping);const Dt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:We,defines:w.defines,customVertexShaderID:$e,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,outputColorSpace:pe===null?o.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:In,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:Zt,envMap:_t,envMapMode:_t&&W.mapping,envMapCubeUVHeight:K,aoMap:Tt,lightMap:Pt,bumpMap:ft,normalMap:Vt,displacementMap:z,emissiveMap:Xt,normalMapObjectSpace:Vt&&w.normalMapType===Fx,normalMapTangentSpace:Vt&&w.normalMapType===j0,metalnessMap:yt,roughnessMap:wt,anisotropy:He,anisotropyMap:ue,clearcoat:D,clearcoatMap:Oe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ye,dispersion:E,iridescence:G,iridescenceMap:it,iridescenceThicknessMap:xe,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Ge,specularMap:ke,specularColorMap:Pe,specularIntensityMap:ut,transmission:me,transmissionMap:V,thicknessMap:we,gradientMap:Se,opaque:w.transparent===!1&&w.blending===_o&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:ye,alphaHash:fe,combine:w.combine,mapUv:nt&&M(w.map.channel),aoMapUv:Tt&&M(w.aoMap.channel),lightMapUv:Pt&&M(w.lightMap.channel),bumpMapUv:ft&&M(w.bumpMap.channel),normalMapUv:Vt&&M(w.normalMap.channel),displacementMapUv:z&&M(w.displacementMap.channel),emissiveMapUv:Xt&&M(w.emissiveMap.channel),metalnessMapUv:yt&&M(w.metalnessMap.channel),roughnessMapUv:wt&&M(w.roughnessMap.channel),anisotropyMapUv:ue&&M(w.anisotropyMap.channel),clearcoatMapUv:Oe&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ye&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(w.sheenRoughnessMap.channel),specularMapUv:ke&&M(w.specularMap.channel),specularColorMapUv:Pe&&M(w.specularColorMap.channel),specularIntensityMapUv:ut&&M(w.specularIntensityMap.channel),transmissionMapUv:V&&M(w.transmissionMap.channel),thicknessMapUv:we&&M(w.thicknessMap.channel),alphaMapUv:Le&&M(w.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Vt||He),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ae.attributes.uv&&(nt||Le),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ae.attributes.normal===void 0&&Vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:de,skinning:J.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&le.length>0,shadowMapType:o.shadowMap.type,toneMapping:st,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&Mt.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Gi,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=h.has(1),Dt.vertexUv2s=h.has(2),Dt.vertexUv3s=h.has(3),h.clear(),Dt}function y(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const le in w.defines)P.push(le),P.push(w.defines[le]);return w.isRawShaderMaterial===!1&&(S(P,w),R(P,w),P.push(o.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function S(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function R(w,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),w.push(c.mask)}function L(w){const P=x[w.type];let le;if(P){const O=Hi[P];le=Wy.clone(O.uniforms)}else le=w.uniforms;return le}function C(w,P){let le=g.get(P);return le!==void 0?++le.usedTimes:(le=new X1(o,P,w,s),d.push(le),g.set(P,le)),le}function F(w){if(--w.usedTimes===0){const P=d.indexOf(w);d[P]=d[d.length-1],d.pop(),g.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function k(){f.dispose()}return{getParameters:A,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:F,releaseShaderCache:N,programs:d,dispose:k}}function $1(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function s(c,f,h){o.get(c)[f]=h}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function Z1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function g0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function _0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function f(m,x,M,A,y,S){let R=o[e];return R===void 0?(R={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:A,renderOrder:m.renderOrder,z:y,group:S},o[e]=R):(R.id=m.id,R.object=m,R.geometry=x,R.material=M,R.materialVariant=c(m),R.groupOrder=A,R.renderOrder=m.renderOrder,R.z=y,R.group=S),e++,R}function h(m,x,M,A,y,S){const R=f(m,x,M,A,y,S);M.transmission>0?i.push(R):M.transparent===!0?s.push(R):t.push(R)}function d(m,x,M,A,y,S){const R=f(m,x,M,A,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?s.unshift(R):t.unshift(R)}function g(m,x){t.length>1&&t.sort(m||Z1),i.length>1&&i.sort(x||g0),s.length>1&&s.sort(x||g0)}function _(){for(let m=e,x=o.length;m<x;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:h,unshift:d,finish:_,sort:g}}function J1(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new _0,o.set(i,[c])):s>=a.length?(c=new _0,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function Q1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new ct};break;case"SpotLight":t={position:new j,direction:new j,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new j,halfWidth:new j,halfHeight:new j};break}return o[e.id]=t,t}}}function ew(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let tw=0;function nw(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function iw(o){const e=new Q1,t=ew(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new j);const s=new j,a=new mt,c=new mt;function f(d){let g=0,_=0,m=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let x=0,M=0,A=0,y=0,S=0,R=0,L=0,C=0,F=0,N=0,k=0;d.sort(nw);for(let P=0,le=d.length;P<le;P++){const O=d[P],J=O.color,Z=O.intensity,ae=O.distance;let Q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Eo?Q=O.shadow.map.texture:Q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)g+=J.r*Z,_+=J.g*Z,m+=J.b*Z;else if(O.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(O.sh.coefficients[te],Z);k++}else if(O.isDirectionalLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const W=O.shadow,K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=Q,i.directionalShadowMatrix[x]=O.shadow.matrix,R++}i.directional[x]=te,x++}else if(O.isSpotLight){const te=e.get(O);te.position.setFromMatrixPosition(O.matrixWorld),te.color.copy(J).multiplyScalar(Z),te.distance=ae,te.coneCos=Math.cos(O.angle),te.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),te.decay=O.decay,i.spot[A]=te;const W=O.shadow;if(O.map&&(i.spotLightMap[F]=O.map,F++,W.updateMatrices(O),O.castShadow&&N++),i.spotLightMatrix[A]=W.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,i.spotShadow[A]=K,i.spotShadowMap[A]=Q,C++}A++}else if(O.isRectAreaLight){const te=e.get(O);te.color.copy(J).multiplyScalar(Z),te.halfWidth.set(O.width*.5,0,0),te.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=te,y++}else if(O.isPointLight){const te=e.get(O);if(te.color.copy(O.color).multiplyScalar(O.intensity),te.distance=O.distance,te.decay=O.decay,O.castShadow){const W=O.shadow,K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,i.pointShadow[M]=K,i.pointShadowMap[M]=Q,i.pointShadowMatrix[M]=O.shadow.matrix,L++}i.point[M]=te,M++}else if(O.isHemisphereLight){const te=e.get(O);te.skyColor.copy(O.color).multiplyScalar(Z),te.groundColor.copy(O.groundColor).multiplyScalar(Z),i.hemi[S]=te,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==M||w.spotLength!==A||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==C||w.numSpotMaps!==F||w.numLightProbes!==k)&&(i.directional.length=x,i.spot.length=A,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+F-N,i.spotLightMap.length=F,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=k,w.directionalLength=x,w.pointLength=M,w.spotLength=A,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=C,w.numSpotMaps=F,w.numLightProbes=k,i.version=tw++)}function h(d,g){let _=0,m=0,x=0,M=0,A=0;const y=g.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const L=d[S];if(L.isDirectionalLight){const C=i.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),_++}else if(L.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),m++}else if(L.isHemisphereLight){const C=i.hemi[A];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),A++}}}return{setup:f,setupView:h,state:i}}function v0(o){const e=new iw(o),t=[],i=[];function s(g){d.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const d={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:h,pushLight:a,pushShadow:c}}function rw(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let f;return c===void 0?(f=new v0(o),e.set(s,[f])):a>=c.length?(f=new v0(o),c.push(f)):f=c[a],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const sw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ow=`uniform sampler2D shadow_pass;
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
}`,aw=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],lw=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],x0=new mt,Ma=new j,sh=new j;function cw(o,e,t){let i=new Md;const s=new lt,a=new lt,c=new Wt,f=new qy,h=new Ky,d={},g=t.maxTextureSize,_={[vr]:Wn,[Wn]:vr,[Gi]:Gi},m=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:sw,fragmentShader:ow}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new di;M.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Xn(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ec;let S=this.type;this.render=function(N,k,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===fx&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ec);const P=o.getRenderTarget(),le=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),J=o.state;J.setBlending(gr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=S!==this.type;Z&&k.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(Q=>Q.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,Q=N.length;ae<Q;ae++){const te=N[ae],W=te.shadow;if(W===void 0){Je("WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const K=W.getFrameExtents();s.multiply(K),a.copy(W.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/K.x),s.x=a.x*K.x,W.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/K.y),s.y=a.y*K.y,W.mapSize.y=a.y));const oe=o.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===mo){if(te.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ji(s.x,s.y,{format:Eo,type:xr,minFilter:cn,magFilter:cn,generateMipmaps:!1}),W.map.texture.name=te.name+".shadowMap",W.map.depthTexture=new Ua(s.x,s.y,fi),W.map.depthTexture.name=te.name+".shadowMapDepth",W.map.depthTexture.format=yr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ln,W.map.depthTexture.magFilter=ln}else te.isPointLight?(W.map=new f_(s.x),W.map.depthTexture=new Vy(s.x,Yi)):(W.map=new ji(s.x,s.y),W.map.depthTexture=new Ua(s.x,s.y,Yi)),W.map.depthTexture.name=te.name+".shadowMap",W.map.depthTexture.format=yr,this.type===Ec?(W.map.depthTexture.compareFunction=oe?gd:md,W.map.depthTexture.minFilter=cn,W.map.depthTexture.magFilter=cn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ln,W.map.depthTexture.magFilter=ln);W.camera.updateProjectionMatrix()}const ce=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(W.map.isWebGLCubeRenderTarget)o.setRenderTarget(W.map,U),o.clear();else{U===0&&(o.setRenderTarget(W.map),o.clear());const Y=W.getViewport(U);c.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),J.viewport(c)}if(te.isPointLight){const Y=W.camera,Ae=W.matrix,We=te.distance||Y.far;We!==Y.far&&(Y.far=We,Y.updateProjectionMatrix()),Ma.setFromMatrixPosition(te.matrixWorld),Y.position.copy(Ma),sh.copy(Y.position),sh.add(aw[U]),Y.up.copy(lw[U]),Y.lookAt(sh),Y.updateMatrixWorld(),Ae.makeTranslation(-Ma.x,-Ma.y,-Ma.z),x0.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W._frustum.setFromProjectionMatrix(x0,Y.coordinateSystem,Y.reversedDepth)}else W.updateMatrices(te);i=W.getFrustum(),C(k,w,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===mo&&R(W,w),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(P,le,O)};function R(N,k){const w=e.update(A);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ji(s.x,s.y,{format:Eo,type:xr})),m.uniforms.shadow_pass.value=N.map.depthTexture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(k,null,w,m,A,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(k,null,w,x,A,null)}function L(N,k,w,P){let le=null;const O=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(O!==void 0)le=O;else if(le=w.isPointLight===!0?h:f,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=le.uuid,Z=k.uuid;let ae=d[J];ae===void 0&&(ae={},d[J]=ae);let Q=ae[Z];Q===void 0&&(Q=le.clone(),ae[Z]=Q,k.addEventListener("dispose",F)),le=Q}if(le.visible=k.visible,le.wireframe=k.wireframe,P===mo?le.side=k.shadowSide!==null?k.shadowSide:k.side:le.side=k.shadowSide!==null?k.shadowSide:_[k.side],le.alphaMap=k.alphaMap,le.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,le.map=k.map,le.clipShadows=k.clipShadows,le.clippingPlanes=k.clippingPlanes,le.clipIntersection=k.clipIntersection,le.displacementMap=k.displacementMap,le.displacementScale=k.displacementScale,le.displacementBias=k.displacementBias,le.wireframeLinewidth=k.wireframeLinewidth,le.linewidth=k.linewidth,w.isPointLight===!0&&le.isMeshDistanceMaterial===!0){const J=o.properties.get(le);J.light=w}return le}function C(N,k,w,P,le){if(N.visible===!1)return;if(N.layers.test(k.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&le===mo)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const Z=e.update(N),ae=N.material;if(Array.isArray(ae)){const Q=Z.groups;for(let te=0,W=Q.length;te<W;te++){const K=Q[te],oe=ae[K.materialIndex];if(oe&&oe.visible){const ce=L(N,oe,P,le);N.onBeforeShadow(o,N,k,w,Z,ce,K),o.renderBufferDirect(w,null,Z,ce,N,K),N.onAfterShadow(o,N,k,w,Z,ce,K)}}}else if(ae.visible){const Q=L(N,ae,P,le);N.onBeforeShadow(o,N,k,w,Z,Q,null),o.renderBufferDirect(w,null,Z,Q,N,null),N.onAfterShadow(o,N,k,w,Z,Q,null)}}const J=N.children;for(let Z=0,ae=J.length;Z<ae;Z++)C(J[Z],k,w,P,le)}function F(N){N.target.removeEventListener("dispose",F);for(const w in d){const P=d[w],le=N.target.uuid;le in P&&(P[le].dispose(),delete P[le])}}}function uw(o,e){function t(){let V=!1;const we=new Wt;let Se=null;const Le=new Wt(0,0,0,0);return{setMask:function(ye){Se!==ye&&!V&&(o.colorMask(ye,ye,ye,ye),Se=ye)},setLocked:function(ye){V=ye},setClear:function(ye,fe,Be,st,Dt){Dt===!0&&(ye*=st,fe*=st,Be*=st),we.set(ye,fe,Be,st),Le.equals(we)===!1&&(o.clearColor(ye,fe,Be,st),Le.copy(we))},reset:function(){V=!1,Se=null,Le.set(-1,0,0,0)}}}function i(){let V=!1,we=!1,Se=null,Le=null,ye=null;return{setReversed:function(fe){if(we!==fe){const Be=e.get("EXT_clip_control");fe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const st=ye;ye=null,this.setClear(st)}},getReversed:function(){return we},setTest:function(fe){fe?pe(o.DEPTH_TEST):de(o.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!V&&(o.depthMask(fe),Se=fe)},setFunc:function(fe){if(we&&(fe=Yx[fe]),Le!==fe){switch(fe){case hh:o.depthFunc(o.NEVER);break;case dh:o.depthFunc(o.ALWAYS);break;case ph:o.depthFunc(o.LESS);break;case yo:o.depthFunc(o.LEQUAL);break;case mh:o.depthFunc(o.EQUAL);break;case gh:o.depthFunc(o.GEQUAL);break;case _h:o.depthFunc(o.GREATER);break;case vh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Le=fe}},setLocked:function(fe){V=fe},setClear:function(fe){ye!==fe&&(ye=fe,we&&(fe=1-fe),o.clearDepth(fe))},reset:function(){V=!1,Se=null,Le=null,ye=null,we=!1}}}function s(){let V=!1,we=null,Se=null,Le=null,ye=null,fe=null,Be=null,st=null,Dt=null;return{setTest:function(At){V||(At?pe(o.STENCIL_TEST):de(o.STENCIL_TEST))},setMask:function(At){we!==At&&!V&&(o.stencilMask(At),we=At)},setFunc:function(At,ei,An){(Se!==At||Le!==ei||ye!==An)&&(o.stencilFunc(At,ei,An),Se=At,Le=ei,ye=An)},setOp:function(At,ei,An){(fe!==At||Be!==ei||st!==An)&&(o.stencilOp(At,ei,An),fe=At,Be=ei,st=An)},setLocked:function(At){V=At},setClear:function(At){Dt!==At&&(o.clearStencil(At),Dt=At)},reset:function(){V=!1,we=null,Se=null,Le=null,ye=null,fe=null,Be=null,st=null,Dt=null}}}const a=new t,c=new i,f=new s,h=new WeakMap,d=new WeakMap;let g={},_={},m=new WeakMap,x=[],M=null,A=!1,y=null,S=null,R=null,L=null,C=null,F=null,N=null,k=new ct(0,0,0),w=0,P=!1,le=null,O=null,J=null,Z=null,ae=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,W=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),te=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),te=W>=2);let oe=null,ce={};const U=o.getParameter(o.SCISSOR_BOX),Y=o.getParameter(o.VIEWPORT),Ae=new Wt().fromArray(U),We=new Wt().fromArray(Y);function $e(V,we,Se,Le){const ye=new Uint8Array(4),fe=o.createTexture();o.bindTexture(V,fe),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Se;Be++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Le,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(we+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return fe}const ie={};ie[o.TEXTURE_2D]=$e(o.TEXTURE_2D,o.TEXTURE_2D,1),ie[o.TEXTURE_CUBE_MAP]=$e(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[o.TEXTURE_2D_ARRAY]=$e(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ie[o.TEXTURE_3D]=$e(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(o.DEPTH_TEST),c.setFunc(yo),ft(!1),Vt(ng),pe(o.CULL_FACE),Tt(gr);function pe(V){g[V]!==!0&&(o.enable(V),g[V]=!0)}function de(V){g[V]!==!1&&(o.disable(V),g[V]=!1)}function Ue(V,we){return _[V]!==we?(o.bindFramebuffer(V,we),_[V]=we,V===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=we),V===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(V,we){let Se=x,Le=!1;if(V){Se=m.get(we),Se===void 0&&(Se=[],m.set(we,Se));const ye=V.textures;if(Se.length!==ye.length||Se[0]!==o.COLOR_ATTACHMENT0){for(let fe=0,Be=ye.length;fe<Be;fe++)Se[fe]=o.COLOR_ATTACHMENT0+fe;Se.length=ye.length,Le=!0}}else Se[0]!==o.BACK&&(Se[0]=o.BACK,Le=!0);Le&&o.drawBuffers(Se)}function nt(V){return M!==V?(o.useProgram(V),M=V,!0):!1}const Zt={[ys]:o.FUNC_ADD,[dx]:o.FUNC_SUBTRACT,[px]:o.FUNC_REVERSE_SUBTRACT};Zt[mx]=o.MIN,Zt[gx]=o.MAX;const _t={[_x]:o.ZERO,[vx]:o.ONE,[xx]:o.SRC_COLOR,[uh]:o.SRC_ALPHA,[wx]:o.SRC_ALPHA_SATURATE,[Ex]:o.DST_COLOR,[Sx]:o.DST_ALPHA,[yx]:o.ONE_MINUS_SRC_COLOR,[fh]:o.ONE_MINUS_SRC_ALPHA,[Tx]:o.ONE_MINUS_DST_COLOR,[Mx]:o.ONE_MINUS_DST_ALPHA,[Ax]:o.CONSTANT_COLOR,[bx]:o.ONE_MINUS_CONSTANT_COLOR,[Rx]:o.CONSTANT_ALPHA,[Cx]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(V,we,Se,Le,ye,fe,Be,st,Dt,At){if(V===gr){A===!0&&(de(o.BLEND),A=!1);return}if(A===!1&&(pe(o.BLEND),A=!0),V!==hx){if(V!==y||At!==P){if((S!==ys||C!==ys)&&(o.blendEquation(o.FUNC_ADD),S=ys,C=ys),At)switch(V){case _o:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ig:o.blendFunc(o.ONE,o.ONE);break;case rg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rt("WebGLState: Invalid blending: ",V);break}else switch(V){case _o:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ig:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case rg:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sg:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",V);break}R=null,L=null,F=null,N=null,k.set(0,0,0),w=0,y=V,P=At}return}ye=ye||we,fe=fe||Se,Be=Be||Le,(we!==S||ye!==C)&&(o.blendEquationSeparate(Zt[we],Zt[ye]),S=we,C=ye),(Se!==R||Le!==L||fe!==F||Be!==N)&&(o.blendFuncSeparate(_t[Se],_t[Le],_t[fe],_t[Be]),R=Se,L=Le,F=fe,N=Be),(st.equals(k)===!1||Dt!==w)&&(o.blendColor(st.r,st.g,st.b,Dt),k.copy(st),w=Dt),y=V,P=!1}function Pt(V,we){V.side===Gi?de(o.CULL_FACE):pe(o.CULL_FACE);let Se=V.side===Wn;we&&(Se=!Se),ft(Se),V.blending===_o&&V.transparent===!1?Tt(gr):Tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),a.setMask(V.colorWrite);const Le=V.stencilWrite;f.setTest(Le),Le&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Xt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(o.SAMPLE_ALPHA_TO_COVERAGE):de(o.SAMPLE_ALPHA_TO_COVERAGE)}function ft(V){le!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),le=V)}function Vt(V){V!==cx?(pe(o.CULL_FACE),V!==O&&(V===ng?o.cullFace(o.BACK):V===ux?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):de(o.CULL_FACE),O=V}function z(V){V!==J&&(te&&o.lineWidth(V),J=V)}function Xt(V,we,Se){V?(pe(o.POLYGON_OFFSET_FILL),(Z!==we||ae!==Se)&&(Z=we,ae=Se,c.getReversed()&&(we=-we),o.polygonOffset(we,Se))):de(o.POLYGON_OFFSET_FILL)}function yt(V){V?pe(o.SCISSOR_TEST):de(o.SCISSOR_TEST)}function wt(V){V===void 0&&(V=o.TEXTURE0+Q-1),oe!==V&&(o.activeTexture(V),oe=V)}function He(V,we,Se){Se===void 0&&(oe===null?Se=o.TEXTURE0+Q-1:Se=oe);let Le=ce[Se];Le===void 0&&(Le={type:void 0,texture:void 0},ce[Se]=Le),(Le.type!==V||Le.texture!==we)&&(oe!==Se&&(o.activeTexture(Se),oe=Se),o.bindTexture(V,we||ie[V]),Le.type=V,Le.texture=we)}function D(){const V=ce[oe];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function G(){try{o.compressedTexImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function he(){try{o.texSubImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function me(){try{o.texSubImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function Oe(){try{o.compressedTexSubImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function Te(){try{o.texStorage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function Ye(){try{o.texStorage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function it(){try{o.texImage2D(...arguments)}catch(V){rt("WebGLState:",V)}}function xe(){try{o.texImage3D(...arguments)}catch(V){rt("WebGLState:",V)}}function Ee(V){Ae.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Ge(V){We.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function ke(V,we){let Se=d.get(we);Se===void 0&&(Se=new WeakMap,d.set(we,Se));let Le=Se.get(V);Le===void 0&&(Le=o.getUniformBlockIndex(we,V.name),Se.set(V,Le))}function Pe(V,we){const Le=d.get(we).get(V);h.get(we)!==Le&&(o.uniformBlockBinding(we,Le,V.__bindingPointIndex),h.set(we,Le))}function ut(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},oe=null,ce={},_={},m=new WeakMap,x=[],M=null,A=!1,y=null,S=null,R=null,L=null,C=null,F=null,N=null,k=new ct(0,0,0),w=0,P=!1,le=null,O=null,J=null,Z=null,ae=null,Ae.set(0,0,o.canvas.width,o.canvas.height),We.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:pe,disable:de,bindFramebuffer:Ue,drawBuffers:Ve,useProgram:nt,setBlending:Tt,setMaterial:Pt,setFlipSided:ft,setCullFace:Vt,setLineWidth:z,setPolygonOffset:Xt,setScissorTest:yt,activeTexture:wt,bindTexture:He,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:it,texImage3D:xe,updateUBOMapping:ke,uniformBlockBinding:Pe,texStorage2D:Te,texStorage3D:Ye,texSubImage2D:he,texSubImage3D:me,compressedTexSubImage2D:ue,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Ge,reset:ut}}function fw(o,e,t,i,s,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new lt,g=new WeakMap;let _;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return x?new OffscreenCanvas(D,E):Na("canvas")}function A(D,E,G){let he=1;const me=He(D);if((me.width>G||me.height>G)&&(he=G/Math.max(me.width,me.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(he*me.width),Oe=Math.floor(he*me.height);_===void 0&&(_=M(ue,Oe));const Te=E?M(ue,Oe):_;return Te.width=ue,Te.height=Oe,Te.getContext("2d").drawImage(D,0,0,ue,Oe),Je("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ue+"x"+Oe+")."),Te}else return"data"in D&&Je("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function y(D){return D.generateMipmaps}function S(D){o.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(D,E,G,he,me=!1){if(D!==null){if(o[D]!==void 0)return o[D];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=E;if(E===o.RED&&(G===o.FLOAT&&(ue=o.R32F),G===o.HALF_FLOAT&&(ue=o.R16F),G===o.UNSIGNED_BYTE&&(ue=o.R8)),E===o.RED_INTEGER&&(G===o.UNSIGNED_BYTE&&(ue=o.R8UI),G===o.UNSIGNED_SHORT&&(ue=o.R16UI),G===o.UNSIGNED_INT&&(ue=o.R32UI),G===o.BYTE&&(ue=o.R8I),G===o.SHORT&&(ue=o.R16I),G===o.INT&&(ue=o.R32I)),E===o.RG&&(G===o.FLOAT&&(ue=o.RG32F),G===o.HALF_FLOAT&&(ue=o.RG16F),G===o.UNSIGNED_BYTE&&(ue=o.RG8)),E===o.RG_INTEGER&&(G===o.UNSIGNED_BYTE&&(ue=o.RG8UI),G===o.UNSIGNED_SHORT&&(ue=o.RG16UI),G===o.UNSIGNED_INT&&(ue=o.RG32UI),G===o.BYTE&&(ue=o.RG8I),G===o.SHORT&&(ue=o.RG16I),G===o.INT&&(ue=o.RG32I)),E===o.RGB_INTEGER&&(G===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),G===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),G===o.UNSIGNED_INT&&(ue=o.RGB32UI),G===o.BYTE&&(ue=o.RGB8I),G===o.SHORT&&(ue=o.RGB16I),G===o.INT&&(ue=o.RGB32I)),E===o.RGBA_INTEGER&&(G===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),G===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),G===o.UNSIGNED_INT&&(ue=o.RGBA32UI),G===o.BYTE&&(ue=o.RGBA8I),G===o.SHORT&&(ue=o.RGBA16I),G===o.INT&&(ue=o.RGBA32I)),E===o.RGB&&(G===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),G===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),E===o.RGBA){const Oe=me?Lc:Mt.getTransfer(he);G===o.FLOAT&&(ue=o.RGBA32F),G===o.HALF_FLOAT&&(ue=o.RGBA16F),G===o.UNSIGNED_BYTE&&(ue=Oe===It?o.SRGB8_ALPHA8:o.RGBA8),G===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),G===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function C(D,E){let G;return D?E===null||E===Yi||E===Pa?G=o.DEPTH24_STENCIL8:E===fi?G=o.DEPTH32F_STENCIL8:E===Ca&&(G=o.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===Pa?G=o.DEPTH_COMPONENT24:E===fi?G=o.DEPTH_COMPONENT32F:E===Ca&&(G=o.DEPTH_COMPONENT16),G}function F(D,E){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ln&&D.minFilter!==cn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function N(D){const E=D.target;E.removeEventListener("dispose",N),w(E),E.isVideoTexture&&g.delete(E)}function k(D){const E=D.target;E.removeEventListener("dispose",k),le(E)}function w(D){const E=i.get(D);if(E.__webglInit===void 0)return;const G=D.source,he=m.get(G);if(he){const me=he[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&P(D),Object.keys(he).length===0&&m.delete(G)}i.remove(D)}function P(D){const E=i.get(D);o.deleteTexture(E.__webglTexture);const G=D.source,he=m.get(G);delete he[E.__cacheKey],c.memory.textures--}function le(D){const E=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let me=0;me<E.__webglFramebuffer[he].length;me++)o.deleteFramebuffer(E.__webglFramebuffer[he][me]);else o.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)o.deleteFramebuffer(E.__webglFramebuffer[he]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=D.textures;for(let he=0,me=G.length;he<me;he++){const ue=i.get(G[he]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove(G[he])}i.remove(D)}let O=0;function J(){O=0}function Z(){const D=O;return D>=s.maxTextures&&Je("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),O+=1,D}function ae(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Q(D,E){const G=i.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const he=D.image;if(he===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,D,E);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,G.__webglTexture,o.TEXTURE0+E)}function te(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){ie(G,D,E);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,G.__webglTexture,o.TEXTURE0+E)}function W(D,E){const G=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){ie(G,D,E);return}t.bindTexture(o.TEXTURE_3D,G.__webglTexture,o.TEXTURE0+E)}function K(D,E){const G=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){pe(G,D,E);return}t.bindTexture(o.TEXTURE_CUBE_MAP,G.__webglTexture,o.TEXTURE0+E)}const oe={[Mo]:o.REPEAT,[Wi]:o.CLAMP_TO_EDGE,[Pc]:o.MIRRORED_REPEAT},ce={[ln]:o.NEAREST,[k0]:o.NEAREST_MIPMAP_NEAREST,[Ta]:o.NEAREST_MIPMAP_LINEAR,[cn]:o.LINEAR,[Tc]:o.LINEAR_MIPMAP_NEAREST,[pr]:o.LINEAR_MIPMAP_LINEAR},U={[Ox]:o.NEVER,[Hx]:o.ALWAYS,[kx]:o.LESS,[md]:o.LEQUAL,[Bx]:o.EQUAL,[gd]:o.GEQUAL,[zx]:o.GREATER,[Vx]:o.NOTEQUAL};function Y(D,E){if(E.type===fi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===cn||E.magFilter===Tc||E.magFilter===Ta||E.magFilter===pr||E.minFilter===cn||E.minFilter===Tc||E.minFilter===Ta||E.minFilter===pr)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,oe[E.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,oe[E.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,oe[E.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,ce[E.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ln||E.minFilter!==Ta&&E.minFilter!==pr||E.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(D,E){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",N));const he=E.source;let me=m.get(he);me===void 0&&(me={},m.set(he,me));const ue=ae(E);if(ue!==D.__cacheKey){me[ue]===void 0&&(me[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[ue].usedTimes++;const Oe=me[D.__cacheKey];Oe!==void 0&&(me[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&P(E)),D.__cacheKey=ue,D.__webglTexture=me[ue].texture}return G}function We(D,E,G){return Math.floor(Math.floor(D/G)/E)}function $e(D,E,G,he){const ue=D.updateRanges;if(ue.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,G,he,E.data);else{ue.sort((xe,Ee)=>xe.start-Ee.start);let Oe=0;for(let xe=1;xe<ue.length;xe++){const Ee=ue[Oe],Ge=ue[xe],ke=Ee.start+Ee.count,Pe=We(Ge.start,E.width,4),ut=We(Ee.start,E.width,4);Ge.start<=ke+1&&Pe===ut&&We(Ge.start+Ge.count-1,E.width,4)===Pe?Ee.count=Math.max(Ee.count,Ge.start+Ge.count-Ee.start):(++Oe,ue[Oe]=Ge)}ue.length=Oe+1;const Te=o.getParameter(o.UNPACK_ROW_LENGTH),Ye=o.getParameter(o.UNPACK_SKIP_PIXELS),it=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ee=ue.length;xe<Ee;xe++){const Ge=ue[xe],ke=Math.floor(Ge.start/4),Pe=Math.ceil(Ge.count/4),ut=ke%E.width,V=Math.floor(ke/E.width),we=Pe,Se=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ut),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),t.texSubImage2D(o.TEXTURE_2D,0,ut,V,we,Se,G,he,E.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Te),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ye),o.pixelStorei(o.UNPACK_SKIP_ROWS,it)}}function ie(D,E,G){let he=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=o.TEXTURE_3D);const me=Ae(D,E),ue=E.source;t.bindTexture(he,D.__webglTexture,o.TEXTURE0+G);const Oe=i.get(ue);if(ue.version!==Oe.__version||me===!0){t.activeTexture(o.TEXTURE0+G);const Te=Mt.getPrimaries(Mt.workingColorSpace),Ye=E.colorSpace===$r?null:Mt.getPrimaries(E.colorSpace),it=E.colorSpace===$r||Te===Ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let xe=A(E.image,!1,s.maxTextureSize);xe=wt(E,xe);const Ee=a.convert(E.format,E.colorSpace),Ge=a.convert(E.type);let ke=L(E.internalFormat,Ee,Ge,E.colorSpace,E.isVideoTexture);Y(he,E);let Pe;const ut=E.mipmaps,V=E.isVideoTexture!==!0,we=Oe.__version===void 0||me===!0,Se=ue.dataReady,Le=F(E,xe);if(E.isDepthTexture)ke=C(E.format===Ms,E.type),we&&(V?t.texStorage2D(o.TEXTURE_2D,1,ke,xe.width,xe.height):t.texImage2D(o.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Ge,null));else if(E.isDataTexture)if(ut.length>0){V&&we&&t.texStorage2D(o.TEXTURE_2D,Le,ke,ut[0].width,ut[0].height);for(let ye=0,fe=ut.length;ye<fe;ye++)Pe=ut[ye],V?Se&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ee,Ge,Pe.data):t.texImage2D(o.TEXTURE_2D,ye,ke,Pe.width,Pe.height,0,Ee,Ge,Pe.data);E.generateMipmaps=!1}else V?(we&&t.texStorage2D(o.TEXTURE_2D,Le,ke,xe.width,xe.height),Se&&$e(E,xe,Ee,Ge)):t.texImage2D(o.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Ge,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&we&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,ke,ut[0].width,ut[0].height,xe.depth);for(let ye=0,fe=ut.length;ye<fe;ye++)if(Pe=ut[ye],E.format!==hi)if(Ee!==null)if(V){if(Se)if(E.layerUpdates.size>0){const Be=$g(Pe.width,Pe.height,E.format,E.type);for(const st of E.layerUpdates){const Dt=Pe.data.subarray(st*Be/Pe.data.BYTES_PER_ELEMENT,(st+1)*Be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,st,Pe.width,Pe.height,1,Ee,Dt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,xe.depth,Ee,Pe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,ke,Pe.width,Pe.height,xe.depth,0,Pe.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Pe.width,Pe.height,xe.depth,Ee,Ge,Pe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,ye,ke,Pe.width,Pe.height,xe.depth,0,Ee,Ge,Pe.data)}else{V&&we&&t.texStorage2D(o.TEXTURE_2D,Le,ke,ut[0].width,ut[0].height);for(let ye=0,fe=ut.length;ye<fe;ye++)Pe=ut[ye],E.format!==hi?Ee!==null?V?Se&&t.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ee,Pe.data):t.compressedTexImage2D(o.TEXTURE_2D,ye,ke,Pe.width,Pe.height,0,Pe.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,Pe.width,Pe.height,Ee,Ge,Pe.data):t.texImage2D(o.TEXTURE_2D,ye,ke,Pe.width,Pe.height,0,Ee,Ge,Pe.data)}else if(E.isDataArrayTexture)if(V){if(we&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Le,ke,xe.width,xe.height,xe.depth),Se)if(E.layerUpdates.size>0){const ye=$g(xe.width,xe.height,E.format,E.type);for(const fe of E.layerUpdates){const Be=xe.data.subarray(fe*ye/xe.data.BYTES_PER_ELEMENT,(fe+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,Ee,Ge,Be)}E.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Ge,xe.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,xe.width,xe.height,xe.depth,0,Ee,Ge,xe.data);else if(E.isData3DTexture)V?(we&&t.texStorage3D(o.TEXTURE_3D,Le,ke,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Ge,xe.data)):t.texImage3D(o.TEXTURE_3D,0,ke,xe.width,xe.height,xe.depth,0,Ee,Ge,xe.data);else if(E.isFramebufferTexture){if(we)if(V)t.texStorage2D(o.TEXTURE_2D,Le,ke,xe.width,xe.height);else{let ye=xe.width,fe=xe.height;for(let Be=0;Be<Le;Be++)t.texImage2D(o.TEXTURE_2D,Be,ke,ye,fe,0,Ee,Ge,null),ye>>=1,fe>>=1}}else if(ut.length>0){if(V&&we){const ye=He(ut[0]);t.texStorage2D(o.TEXTURE_2D,Le,ke,ye.width,ye.height)}for(let ye=0,fe=ut.length;ye<fe;ye++)Pe=ut[ye],V?Se&&t.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ee,Ge,Pe):t.texImage2D(o.TEXTURE_2D,ye,ke,Ee,Ge,Pe);E.generateMipmaps=!1}else if(V){if(we){const ye=He(xe);t.texStorage2D(o.TEXTURE_2D,Le,ke,ye.width,ye.height)}Se&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Ge,xe)}else t.texImage2D(o.TEXTURE_2D,0,ke,Ee,Ge,xe);y(E)&&S(he),Oe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,G){if(E.image.length!==6)return;const he=Ae(D,E),me=E.source;t.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+G);const ue=i.get(me);if(me.version!==ue.__version||he===!0){t.activeTexture(o.TEXTURE0+G);const Oe=Mt.getPrimaries(Mt.workingColorSpace),Te=E.colorSpace===$r?null:Mt.getPrimaries(E.colorSpace),Ye=E.colorSpace===$r||Oe===Te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!it&&!xe?Ee[fe]=A(E.image[fe],!0,s.maxCubemapSize):Ee[fe]=xe?E.image[fe].image:E.image[fe],Ee[fe]=wt(E,Ee[fe]);const Ge=Ee[0],ke=a.convert(E.format,E.colorSpace),Pe=a.convert(E.type),ut=L(E.internalFormat,ke,Pe,E.colorSpace),V=E.isVideoTexture!==!0,we=ue.__version===void 0||he===!0,Se=me.dataReady;let Le=F(E,Ge);Y(o.TEXTURE_CUBE_MAP,E);let ye;if(it){V&&we&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ut,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){ye=Ee[fe].mipmaps;for(let Be=0;Be<ye.length;Be++){const st=ye[Be];E.format!==hi?ke!==null?V?Se&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,st.width,st.height,ke,st.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,ut,st.width,st.height,0,st.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,0,0,st.width,st.height,ke,Pe,st.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be,ut,st.width,st.height,0,ke,Pe,st.data)}}}else{if(ye=E.mipmaps,V&&we){ye.length>0&&Le++;const fe=He(Ee[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Le,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){V?Se&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,ke,Pe,Ee[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Ee[fe].width,Ee[fe].height,0,ke,Pe,Ee[fe].data);for(let Be=0;Be<ye.length;Be++){const Dt=ye[Be].image[fe].image;V?Se&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,Dt.width,Dt.height,ke,Pe,Dt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,ut,Dt.width,Dt.height,0,ke,Pe,Dt.data)}}else{V?Se&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke,Pe,Ee[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,ke,Pe,Ee[fe]);for(let Be=0;Be<ye.length;Be++){const st=ye[Be];V?Se&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,0,0,ke,Pe,st.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Be+1,ut,ke,Pe,st.image[fe])}}}y(E)&&S(o.TEXTURE_CUBE_MAP),ue.__version=me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function de(D,E,G,he,me,ue){const Oe=a.convert(G.format,G.colorSpace),Te=a.convert(G.type),Ye=L(G.internalFormat,Oe,Te,G.colorSpace),it=i.get(E),xe=i.get(G);if(xe.__renderTarget=E,!it.__hasExternalTextures){const Ee=Math.max(1,E.width>>ue),Ge=Math.max(1,E.height>>ue);me===o.TEXTURE_3D||me===o.TEXTURE_2D_ARRAY?t.texImage3D(me,ue,Ye,Ee,Ge,E.depth,0,Oe,Te,null):t.texImage2D(me,ue,Ye,Ee,Ge,0,Oe,Te,null)}t.bindFramebuffer(o.FRAMEBUFFER,D),Xt(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,me,xe.__webglTexture,0,z(E)):(me===o.TEXTURE_2D||me>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,me,xe.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ue(D,E,G){if(o.bindRenderbuffer(o.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,me=he&&he.isDepthTexture?he.type:null,ue=C(E.stencilBuffer,me),Oe=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xt(E)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(E),ue,E.width,E.height):G?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(E),ue,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ue,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Oe,o.RENDERBUFFER,D)}else{const he=E.textures;for(let me=0;me<he.length;me++){const ue=he[me],Oe=a.convert(ue.format,ue.colorSpace),Te=a.convert(ue.type),Ye=L(ue.internalFormat,Oe,Te,ue.colorSpace);Xt(E)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,z(E),Ye,E.width,E.height):G?o.renderbufferStorageMultisample(o.RENDERBUFFER,z(E),Ye,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Ye,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ve(D,E,G){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",N)),me.__webglTexture===void 0){me.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,me.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E.depthTexture);const it=a.convert(E.depthTexture.format),xe=a.convert(E.depthTexture.type);let Ee;E.depthTexture.format===yr?Ee=o.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Ee=o.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ee,E.width,E.height,0,it,xe,null)}}else Q(E.depthTexture,0);const ue=me.__webglTexture,Oe=z(E),Te=he?o.TEXTURE_CUBE_MAP_POSITIVE_X+G:o.TEXTURE_2D,Ye=E.depthTexture.format===Ms?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(E.depthTexture.format===yr)Xt(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ye,Te,ue,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Ye,Te,ue,0);else if(E.depthTexture.format===Ms)Xt(E)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ye,Te,ue,0,Oe):o.framebufferTexture2D(o.FRAMEBUFFER,Ye,Te,ue,0);else throw new Error("Unknown depthTexture format")}function nt(D){const E=i.get(D),G=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",me)};he.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)Ve(E.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?Ve(E.__webglFramebuffer[0],D,0):Ve(E.__webglFramebuffer,D,0)}else if(G){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=o.createRenderbuffer(),Ue(E.__webglDepthbuffer[he],D,!1);else{const me=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),Ue(E.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,me,o.RENDERBUFFER,ue)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(D,E,G){const he=i.get(D);E!==void 0&&de(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),G!==void 0&&nt(D)}function _t(D){const E=D.texture,G=i.get(D),he=i.get(E);D.addEventListener("dispose",k);const me=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=E.version,c.memory.textures++),ue){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Ye=0;Ye<E.mipmaps.length;Ye++)G.__webglFramebuffer[Te][Ye]=o.createFramebuffer()}else G.__webglFramebuffer[Te]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)G.__webglFramebuffer[Te]=o.createFramebuffer()}else G.__webglFramebuffer=o.createFramebuffer();if(Oe)for(let Te=0,Ye=me.length;Te<Ye;Te++){const it=i.get(me[Te]);it.__webglTexture===void 0&&(it.__webglTexture=o.createTexture(),c.memory.textures++)}if(D.samples>0&&Xt(D)===!1){G.__webglMultisampledFramebuffer=o.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const Ye=me[Te];G.__webglColorRenderbuffer[Te]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const it=a.convert(Ye.format,Ye.colorSpace),xe=a.convert(Ye.type),Ee=L(Ye.internalFormat,it,xe,Ye.colorSpace,D.isXRRenderTarget===!0),Ge=z(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ge,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),Y(o.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)de(G.__webglFramebuffer[Te][Ye],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Ye);else de(G.__webglFramebuffer[Te],D,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);y(E)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Te=0,Ye=me.length;Te<Ye;Te++){const it=me[Te],xe=i.get(it);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),Y(Ee,it),de(G.__webglFramebuffer,D,it,o.COLOR_ATTACHMENT0+Te,Ee,0),y(it)&&S(Ee)}t.unbindTexture()}else{let Te=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),Y(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let Ye=0;Ye<E.mipmaps.length;Ye++)de(G.__webglFramebuffer[Ye],D,E,o.COLOR_ATTACHMENT0,Te,Ye);else de(G.__webglFramebuffer,D,E,o.COLOR_ATTACHMENT0,Te,0);y(E)&&S(Te),t.unbindTexture()}D.depthBuffer&&nt(D)}function Tt(D){const E=D.textures;for(let G=0,he=E.length;G<he;G++){const me=E[G];if(y(me)){const ue=R(D),Oe=i.get(me).__webglTexture;t.bindTexture(ue,Oe),S(ue),t.unbindTexture()}}}const Pt=[],ft=[];function Vt(D){if(D.samples>0){if(Xt(D)===!1){const E=D.textures,G=D.width,he=D.height;let me=o.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Oe=i.get(D),Te=E.length>1;if(Te)for(let it=0;it<E.length;it++)t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Ye=D.texture.mipmaps;Ye&&Ye.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let it=0;it<E.length;it++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=o.STENCIL_BUFFER_BIT)),Te){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[it]);const xe=i.get(E[it]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,xe,0)}o.blitFramebuffer(0,0,G,he,0,0,G,he,me,o.NEAREST),h===!0&&(Pt.length=0,ft.length=0,Pt.push(o.COLOR_ATTACHMENT0+it),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Pt.push(ue),ft.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ft)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Te)for(let it=0;it<E.length;it++){t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.RENDERBUFFER,Oe.__webglColorRenderbuffer[it]);const xe=i.get(E[it]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Oe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+it,o.TEXTURE_2D,xe,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const E=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function z(D){return Math.min(s.maxSamples,D.samples)}function Xt(D){const E=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(D){const E=c.render.frame;g.get(D)!==E&&(g.set(D,E),D.update())}function wt(D,E){const G=D.colorSpace,he=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==In&&G!==$r&&(Mt.getTransfer(G)===It?(he!==hi||me!==Qn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",G)),E}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=Q,this.setTexture2DArray=te,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Zt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hw(o,e){function t(i,s=$r){let a;const c=Mt.getTransfer(s);if(i===Qn)return o.UNSIGNED_BYTE;if(i===cd)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ud)return o.UNSIGNED_SHORT_5_5_5_1;if(i===V0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===H0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===B0)return o.BYTE;if(i===z0)return o.SHORT;if(i===Ca)return o.UNSIGNED_SHORT;if(i===ld)return o.INT;if(i===Yi)return o.UNSIGNED_INT;if(i===fi)return o.FLOAT;if(i===xr)return o.HALF_FLOAT;if(i===G0)return o.ALPHA;if(i===W0)return o.RGB;if(i===hi)return o.RGBA;if(i===yr)return o.DEPTH_COMPONENT;if(i===Ms)return o.DEPTH_STENCIL;if(i===fd)return o.RED;if(i===hd)return o.RED_INTEGER;if(i===Eo)return o.RG;if(i===dd)return o.RG_INTEGER;if(i===pd)return o.RGBA_INTEGER;if(i===wc||i===Ac||i===bc||i===Rc)if(c===It)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===wc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===wc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xh||i===yh||i===Sh||i===Mh)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===xh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh||i===Th||i===wh||i===Ah||i===bh||i===Rh||i===Ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Eh||i===Th)return c===It?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===wh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ah)return a.COMPRESSED_R11_EAC;if(i===bh)return a.COMPRESSED_SIGNED_R11_EAC;if(i===Rh)return a.COMPRESSED_RG11_EAC;if(i===Ch)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ph||i===Lh||i===Dh||i===Ih||i===Nh||i===Uh||i===Fh||i===Oh||i===kh||i===Bh||i===zh||i===Vh||i===Hh||i===Gh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Ph)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Hh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return c===It?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Wh||i===Xh||i===jh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Wh)return c===It?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===jh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yh||i===qh||i===Kh||i===$h)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Yh)return a.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pa?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const dw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pw=`
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

}`;class mw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new r_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ki({vertexShader:dw,fragmentShader:pw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xn(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gw extends As{constructor(e,t){super();const i=this;let s=null,a=1,c=null,f="local-floor",h=1,d=null,g=null,_=null,m=null,x=null,M=null;const A=typeof XRWebGLBinding<"u",y=new mw,S={},R=t.getContextAttributes();let L=null,C=null;const F=[],N=[],k=new lt;let w=null;const P=new Gn;P.viewport=new Wt;const le=new Gn;le.viewport=new Wt;const O=[P,le],J=new vS;let Z=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Df,F[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Df,F[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Df,F[ie]=pe),pe.getHandSpace()};function Q(ie){const pe=N.indexOf(ie.inputSource);if(pe===-1)return;const de=F[pe];de!==void 0&&(de.update(ie.inputSource,ie.frame,d||c),de.dispatchEvent({type:ie.type,data:ie.inputSource}))}function te(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",W);for(let ie=0;ie<F.length;ie++){const pe=N[ie];pe!==null&&(N[ie]=null,F[ie].disconnect(pe))}Z=null,ae=null,y.reset();for(const ie in S)delete S[ie];e.setRenderTarget(L),x=null,m=null,_=null,s=null,C=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){a=ie,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ie){d=ie},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",te),s.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ue=null,Ve=null;R.depth&&(Ve=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=R.stencil?Ms:yr,Ue=R.stencil?Pa:Yi);const nt={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(nt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new ji(m.textureWidth,m.textureHeight,{format:hi,type:Qn,depthTexture:new Ua(m.textureWidth,m.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new ji(x.framebufferWidth,x.framebufferHeight,{format:hi,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(f),$e.setContext(s),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(ie){for(let pe=0;pe<ie.removed.length;pe++){const de=ie.removed[pe],Ue=N.indexOf(de);Ue>=0&&(N[Ue]=null,F[Ue].disconnect(de))}for(let pe=0;pe<ie.added.length;pe++){const de=ie.added[pe];let Ue=N.indexOf(de);if(Ue===-1){for(let nt=0;nt<F.length;nt++)if(nt>=N.length){N.push(de),Ue=nt;break}else if(N[nt]===null){N[nt]=de,Ue=nt;break}if(Ue===-1)break}const Ve=F[Ue];Ve&&Ve.connect(de)}}const K=new j,oe=new j;function ce(ie,pe,de){K.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(de.matrixWorld);const Ue=K.distanceTo(oe),Ve=pe.projectionMatrix.elements,nt=de.projectionMatrix.elements,Zt=Ve[14]/(Ve[10]-1),_t=Ve[14]/(Ve[10]+1),Tt=(Ve[9]+1)/Ve[5],Pt=(Ve[9]-1)/Ve[5],ft=(Ve[8]-1)/Ve[0],Vt=(nt[8]+1)/nt[0],z=Zt*ft,Xt=Zt*Vt,yt=Ue/(-ft+Vt),wt=yt*-ft;if(pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(wt),ie.translateZ(yt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const He=Zt+yt,D=_t+yt,E=z-wt,G=Xt+(Ue-wt),he=Tt*_t/D*He,me=Pt*_t/D*He;ie.projectionMatrix.makePerspective(E,G,he,me,He,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let pe=ie.near,de=ie.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(de=y.depthFar)),J.near=le.near=P.near=pe,J.far=le.far=P.far=de,(Z!==J.near||ae!==J.far)&&(s.updateRenderState({depthNear:J.near,depthFar:J.far}),Z=J.near,ae=J.far),J.layers.mask=ie.layers.mask|6,P.layers.mask=J.layers.mask&-5,le.layers.mask=J.layers.mask&-3;const Ue=ie.parent,Ve=J.cameras;U(J,Ue);for(let nt=0;nt<Ve.length;nt++)U(Ve[nt],Ue);Ve.length===2?ce(J,P,le):J.projectionMatrix.copy(P.projectionMatrix),Y(ie,J,Ue)};function Y(ie,pe,de){de===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(de.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=To*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(m===null&&x===null))return h},this.setFoveation=function(ie){h=ie,m!==null&&(m.fixedFoveation=ie),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(J)},this.getCameraTexture=function(ie){return S[ie]};let Ae=null;function We(ie,pe){if(g=pe.getViewerPose(d||c),M=pe,g!==null){const de=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Ue=!1;de.length!==J.cameras.length&&(J.cameras.length=0,Ue=!0);for(let _t=0;_t<de.length;_t++){const Tt=de[_t];let Pt=null;if(x!==null)Pt=x.getViewport(Tt);else{const Vt=_.getViewSubImage(m,Tt);Pt=Vt.viewport,_t===0&&(e.setRenderTargetTextures(C,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(C))}let ft=O[_t];ft===void 0&&(ft=new Gn,ft.layers.enable(_t),ft.viewport=new Wt,O[_t]=ft),ft.matrix.fromArray(Tt.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(Tt.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),_t===0&&(J.matrix.copy(ft.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ue===!0&&J.cameras.push(ft)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&A){_=i.getBinding();const _t=_.getDepthInformation(de[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,s.renderState)}if(Ve&&Ve.includes("camera-access")&&A){e.state.unbindTexture(),_=i.getBinding();for(let _t=0;_t<de.length;_t++){const Tt=de[_t].camera;if(Tt){let Pt=S[Tt];Pt||(Pt=new r_,S[Tt]=Pt);const ft=_.getCameraImage(Tt);Pt.sourceTexture=ft}}}}for(let de=0;de<F.length;de++){const Ue=N[de],Ve=F[de];Ue!==null&&Ve!==void 0&&Ve.update(Ue,pe,d||c)}Ae&&Ae(ie,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),M=null}const $e=new u_;$e.setAnimationLoop(We),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const vs=new qi,_w=new mt;function vw(o,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,s_(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,R,L,C){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),_(y,S)):S.isMeshPhongMaterial?(a(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,C)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),A(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?h(y,S,R,L):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Wn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Wn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,C=R.envMapRotation;L&&(y.envMap.value=L,vs.copy(C),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(vs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function A(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function xw(o,e,t,i){let s={},a={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,L){const C=L.program;i.uniformBlockBinding(R,C)}function d(R,L){let C=s[R.id];C===void 0&&(M(R),C=g(R),s[R.id]=C,R.addEventListener("dispose",y));const F=L.program;i.updateUBOMapping(R,F);const N=e.render.frame;a[R.id]!==N&&(m(R),a[R.id]=N)}function g(R){const L=_();R.__bindingPointIndex=L;const C=o.createBuffer(),F=R.__size,N=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,F,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function _(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const L=s[R.id],C=R.uniforms,F=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let N=0,k=C.length;N<k;N++){const w=Array.isArray(C[N])?C[N]:[C[N]];for(let P=0,le=w.length;P<le;P++){const O=w[P];if(x(O,N,P,F)===!0){const J=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let ae=0;for(let Q=0;Q<Z.length;Q++){const te=Z[Q],W=A(te);typeof te=="number"||typeof te=="boolean"?(O.__data[0]=te,o.bufferSubData(o.UNIFORM_BUFFER,J+ae,O.__data)):te.isMatrix3?(O.__data[0]=te.elements[0],O.__data[1]=te.elements[1],O.__data[2]=te.elements[2],O.__data[3]=0,O.__data[4]=te.elements[3],O.__data[5]=te.elements[4],O.__data[6]=te.elements[5],O.__data[7]=0,O.__data[8]=te.elements[6],O.__data[9]=te.elements[7],O.__data[10]=te.elements[8],O.__data[11]=0):(te.toArray(O.__data,ae),ae+=W.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,J,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(R,L,C,F){const N=R.value,k=L+"_"+C;if(F[k]===void 0)return typeof N=="number"||typeof N=="boolean"?F[k]=N:F[k]=N.clone(),!0;{const w=F[k];if(typeof N=="number"||typeof N=="boolean"){if(w!==N)return F[k]=N,!0}else if(w.equals(N)===!1)return w.copy(N),!0}return!1}function M(R){const L=R.uniforms;let C=0;const F=16;for(let k=0,w=L.length;k<w;k++){const P=Array.isArray(L[k])?L[k]:[L[k]];for(let le=0,O=P.length;le<O;le++){const J=P[le],Z=Array.isArray(J.value)?J.value:[J.value];for(let ae=0,Q=Z.length;ae<Q;ae++){const te=Z[ae],W=A(te),K=C%F,oe=K%W.boundary,ce=K+oe;C+=oe,ce!==0&&F-ce<W.storage&&(C+=F-ce),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=W.storage}}}const N=C%F;return N>0&&(C+=F-N),R.__size=C,R.__cache={},this}function A(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",R),L}function y(R){const L=R.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function S(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:h,update:d,dispose:S}}const yw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function Sw(){return zi===null&&(zi=new yd(yw,16,16,Eo,xr),zi.name="DFG_LUT",zi.minFilter=cn,zi.magFilter=cn,zi.wrapS=Wi,zi.wrapT=Wi,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class Mw{constructor(e={}){const{canvas:t=Xx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Qn}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const A=x,y=new Set([pd,dd,hd]),S=new Set([Qn,Yi,Ca,Pa,cd,ud]),R=new Uint32Array(4),L=new Int32Array(4);let C=null,F=null;const N=[],k=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let le=!1;this._outputColorSpace=gn;let O=0,J=0,Z=null,ae=-1,Q=null;const te=new Wt,W=new Wt;let K=null;const oe=new ct(0);let ce=0,U=t.width,Y=t.height,Ae=1,We=null,$e=null;const ie=new Wt(0,0,U,Y),pe=new Wt(0,0,U,Y);let de=!1;const Ue=new Md;let Ve=!1,nt=!1;const Zt=new mt,_t=new j,Tt=new Wt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Vt(){return Z===null?Ae:1}let z=i;function Xt(b,X){return t.getContext(b,X)}try{const b={alpha:!0,depth:s,stencil:a,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ad}`),t.addEventListener("webglcontextlost",Be,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),z===null){const X="webgl2";if(z=Xt(X,b),z===null)throw Xt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw rt("WebGLRenderer: "+b.message),b}let yt,wt,He,D,E,G,he,me,ue,Oe,Te,Ye,it,xe,Ee,Ge,ke,Pe,ut,V,we,Se,Le;function ye(){yt=new MT(z),yt.init(),we=new hw(z,yt),wt=new pT(z,yt,e,we),He=new uw(z,yt),wt.reversedDepthBuffer&&m&&He.buffers.depth.setReversed(!0),D=new wT(z),E=new $1,G=new fw(z,yt,He,E,wt,we,D),he=new ST(P),me=new PS(z),Se=new hT(z,me),ue=new ET(z,me,D,Se),Oe=new bT(z,ue,me,Se,D),Pe=new AT(z,wt,G),Ee=new mT(E),Te=new K1(P,he,yt,wt,Se,Ee),Ye=new vw(P,E),it=new J1,xe=new rw(yt),ke=new fT(P,he,He,Oe,M,h),Ge=new cw(P,Oe,wt),Le=new xw(z,D,wt,He),ut=new dT(z,yt,D),V=new TT(z,yt,D),D.programs=Te.programs,P.capabilities=wt,P.extensions=yt,P.properties=E,P.renderLists=it,P.shadowMap=Ge,P.state=He,P.info=D}ye(),A!==Qn&&(w=new CT(A,t.width,t.height,s,a));const fe=new gw(P,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const b=yt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=yt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(b){b!==void 0&&(Ae=b,this.setSize(U,Y,!1))},this.getSize=function(b){return b.set(U,Y)},this.setSize=function(b,X,se=!0){if(fe.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,Y=X,t.width=Math.floor(b*Ae),t.height=Math.floor(X*Ae),se===!0&&(t.style.width=b+"px",t.style.height=X+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,X)},this.getDrawingBufferSize=function(b){return b.set(U*Ae,Y*Ae).floor()},this.setDrawingBufferSize=function(b,X,se){U=b,Y=X,Ae=se,t.width=Math.floor(b*se),t.height=Math.floor(X*se),this.setViewport(0,0,b,X)},this.setEffects=function(b){if(A===Qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let X=0;X<b.length;X++)if(b[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(te)},this.getViewport=function(b){return b.copy(ie)},this.setViewport=function(b,X,se,ne){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,X,se,ne),He.viewport(te.copy(ie).multiplyScalar(Ae).round())},this.getScissor=function(b){return b.copy(pe)},this.setScissor=function(b,X,se,ne){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,X,se,ne),He.scissor(W.copy(pe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(b){He.setScissorTest(de=b)},this.setOpaqueSort=function(b){We=b},this.setTransparentSort=function(b){$e=b},this.getClearColor=function(b){return b.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(b=!0,X=!0,se=!0){let ne=0;if(b){let $=!1;if(Z!==null){const Re=Z.texture.format;$=y.has(Re)}if($){const Re=Z.texture.type,Ne=S.has(Re),be=ke.getClearColor(),De=ke.getClearAlpha(),Ke=be.r,Qe=be.g,ht=be.b;Ne?(R[0]=Ke,R[1]=Qe,R[2]=ht,R[3]=De,z.clearBufferuiv(z.COLOR,0,R)):(L[0]=Ke,L[1]=Qe,L[2]=ht,L[3]=De,z.clearBufferiv(z.COLOR,0,L))}else ne|=z.COLOR_BUFFER_BIT}X&&(ne|=z.DEPTH_BUFFER_BIT),se&&(ne|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&z.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Be,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),ke.dispose(),it.dispose(),xe.dispose(),E.dispose(),he.dispose(),Oe.dispose(),Se.dispose(),Le.dispose(),Te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",Sr),fe.removeEventListener("sessionend",Jr),ti.stop()};function Be(b){b.preventDefault(),Dc("WebGLRenderer: Context Lost."),le=!0}function st(){Dc("WebGLRenderer: Context Restored."),le=!1;const b=D.autoReset,X=Ge.enabled,se=Ge.autoUpdate,ne=Ge.needsUpdate,$=Ge.type;ye(),D.autoReset=b,Ge.enabled=X,Ge.autoUpdate=se,Ge.needsUpdate=ne,Ge.type=$}function Dt(b){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function At(b){const X=b.target;X.removeEventListener("dispose",At),ei(X)}function ei(b){An(b),E.remove(b)}function An(b){const X=E.get(b).programs;X!==void 0&&(X.forEach(function(se){Te.releaseProgram(se)}),b.isShaderMaterial&&Te.releaseShaderCache(b))}this.renderBufferDirect=function(b,X,se,ne,$,Re){X===null&&(X=Pt);const Ne=$.isMesh&&$.matrixWorld.determinant()<0,be=Ga(b,X,se,ne,$);He.setMaterial(ne,Ne);let De=se.index,Ke=1;if(ne.wireframe===!0){if(De=ue.getWireframeAttribute(se),De===void 0)return;Ke=2}const Qe=se.drawRange,ht=se.attributes.position;let Ze=Qe.start*Ke,Lt=(Qe.start+Qe.count)*Ke;Re!==null&&(Ze=Math.max(Ze,Re.start*Ke),Lt=Math.min(Lt,(Re.start+Re.count)*Ke)),De!==null?(Ze=Math.max(Ze,0),Lt=Math.min(Lt,De.count)):ht!=null&&(Ze=Math.max(Ze,0),Lt=Math.min(Lt,ht.count));const kt=Lt-Ze;if(kt<0||kt===1/0)return;Se.setup($,ne,be,se,De);let Ot,Et=ut;if(De!==null&&(Ot=me.get(De),Et=V,Et.setIndex(Ot)),$.isMesh)ne.wireframe===!0?(He.setLineWidth(ne.wireframeLinewidth*Vt()),Et.setMode(z.LINES)):Et.setMode(z.TRIANGLES);else if($.isLine){let Jt=ne.linewidth;Jt===void 0&&(Jt=1),He.setLineWidth(Jt*Vt()),$.isLineSegments?Et.setMode(z.LINES):$.isLineLoop?Et.setMode(z.LINE_LOOP):Et.setMode(z.LINE_STRIP)}else $.isPoints?Et.setMode(z.POINTS):$.isSprite&&Et.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ic("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Jt=$._multiDrawStarts,je=$._multiDrawCounts,bn=$._multiDrawCount,St=De?me.get(De).bytesPerElement:1,Nn=E.get(ne).currentProgram.getUniforms();for(let Un=0;Un<bn;Un++)Nn.setValue(z,"_gl_DrawID",Un),Et.render(Jt[Un]/St,je[Un])}else if($.isInstancedMesh)Et.renderInstances(Ze,kt,$.count);else if(se.isInstancedBufferGeometry){const Jt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,je=Math.min(se.instanceCount,Jt);Et.renderInstances(Ze,kt,je)}else Et.render(Ze,kt)};function bs(b,X,se){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=Wn,b.needsUpdate=!0,es(b,X,se),b.side=vr,b.needsUpdate=!0,es(b,X,se),b.side=Gi):es(b,X,se)}this.compile=function(b,X,se=null){se===null&&(se=b),F=xe.get(se),F.init(X),k.push(F),se.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),b!==se&&b.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const ne=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Ne=0;Ne<Re.length;Ne++){const be=Re[Ne];bs(be,se,$),ne.add(be)}else bs(Re,se,$),ne.add(Re)}),F=k.pop(),ne},this.compileAsync=function(b,X,se=null){const ne=this.compile(b,X,se);return new Promise($=>{function Re(){if(ne.forEach(function(Ne){E.get(Ne).currentProgram.isReady()&&ne.delete(Ne)}),ne.size===0){$(b);return}setTimeout(Re,10)}yt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ji=null;function zc(b){Ji&&Ji(b)}function Sr(){ti.stop()}function Jr(){ti.start()}const ti=new u_;ti.setAnimationLoop(zc),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Ji=b,fe.setAnimationLoop(b),b===null?ti.stop():ti.start()},fe.addEventListener("sessionstart",Sr),fe.addEventListener("sessionend",Jr),this.render=function(b,X){if(X!==void 0&&X.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(le===!0)return;const se=fe.enabled===!0&&fe.isPresenting===!0,ne=w!==null&&(Z===null||se)&&w.begin(P,Z);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,X,Z),F=xe.get(b,k.length),F.init(X),k.push(F),Zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ue.setFromProjectionMatrix(Zt,Xi,X.reversedDepth),nt=this.localClippingEnabled,Ve=Ee.init(this.clippingPlanes,nt),C=it.get(b,N.length),C.init(),N.push(C),fe.enabled===!0&&fe.isPresenting===!0){const Ne=P.xr.getDepthSensingMesh();Ne!==null&&Qr(Ne,X,-1/0,P.sortObjects)}Qr(b,X,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(We,$e),ft=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ft&&ke.addToRenderList(C,b),this.info.render.frame++,Ve===!0&&Ee.beginShadows();const $=F.state.shadowsArray;if(Ge.render($,b,X),Ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&w.hasRenderPass())===!1){const Ne=C.opaque,be=C.transmissive;if(F.setupLights(),X.isArrayCamera){const De=X.cameras;if(be.length>0)for(let Ke=0,Qe=De.length;Ke<Qe;Ke++){const ht=De[Ke];Va(Ne,be,b,ht)}ft&&ke.render(b);for(let Ke=0,Qe=De.length;Ke<Qe;Ke++){const ht=De[Ke];za(C,b,ht,ht.viewport)}}else be.length>0&&Va(Ne,be,b,X),ft&&ke.render(b),za(C,b,X)}Z!==null&&J===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),ne&&w.end(P),b.isScene===!0&&b.onAfterRender(P,b,X),Se.resetDefaultState(),ae=-1,Q=null,k.pop(),k.length>0?(F=k[k.length-1],Ve===!0&&Ee.setGlobalState(P.clippingPlanes,F.state.camera)):F=null,N.pop(),N.length>0?C=N[N.length-1]:C=null};function Qr(b,X,se,ne){if(b.visible===!1)return;if(b.layers.test(X.layers)){if(b.isGroup)se=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(X);else if(b.isLight)F.pushLight(b),b.castShadow&&F.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ue.intersectsSprite(b)){ne&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Zt);const Ne=Oe.update(b),be=b.material;be.visible&&C.push(b,Ne,be,se,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ue.intersectsObject(b))){const Ne=Oe.update(b),be=b.material;if(ne&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),Tt.copy(Ne.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(Zt)),Array.isArray(be)){const De=Ne.groups;for(let Ke=0,Qe=De.length;Ke<Qe;Ke++){const ht=De[Ke],Ze=be[ht.materialIndex];Ze&&Ze.visible&&C.push(b,Ne,Ze,se,Tt.z,ht)}}else be.visible&&C.push(b,Ne,be,se,Tt.z,null)}}const Re=b.children;for(let Ne=0,be=Re.length;Ne<be;Ne++)Qr(Re[Ne],X,se,ne)}function za(b,X,se,ne){const{opaque:$,transmissive:Re,transparent:Ne}=b;F.setupLightsView(se),Ve===!0&&Ee.setGlobalState(P.clippingPlanes,se),ne&&He.viewport(te.copy(ne)),$.length>0&&Rs($,X,se),Re.length>0&&Rs(Re,X,se),Ne.length>0&&Rs(Ne,X,se),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Va(b,X,se,ne){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[ne.id]===void 0){const Ze=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[ne.id]=new ji(1,1,{generateMipmaps:!0,type:Ze?xr:Qn,minFilter:pr,samples:Math.max(4,wt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const Re=F.state.transmissionRenderTarget[ne.id],Ne=ne.viewport||te;Re.setSize(Ne.z*P.transmissionResolutionScale,Ne.w*P.transmissionResolutionScale);const be=P.getRenderTarget(),De=P.getActiveCubeFace(),Ke=P.getActiveMipmapLevel();P.setRenderTarget(Re),P.getClearColor(oe),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),ft&&ke.render(se);const Qe=P.toneMapping;P.toneMapping=bi;const ht=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),F.setupLightsView(ne),Ve===!0&&Ee.setGlobalState(P.clippingPlanes,ne),Rs(b,se,ne),G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re),yt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Lt=0,kt=X.length;Lt<kt;Lt++){const Ot=X[Lt],{object:Et,geometry:Jt,material:je,group:bn}=Ot;if(je.side===Gi&&Et.layers.test(ne.layers)){const St=je.side;je.side=Wn,je.needsUpdate=!0,Ni(Et,se,ne,Jt,je,bn),je.side=St,je.needsUpdate=!0,Ze=!0}}Ze===!0&&(G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re))}P.setRenderTarget(be,De,Ke),P.setClearColor(oe,ce),ht!==void 0&&(ne.viewport=ht),P.toneMapping=Qe}function Rs(b,X,se){const ne=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Re=b.length;$<Re;$++){const Ne=b[$],{object:be,geometry:De,group:Ke}=Ne;let Qe=Ne.material;Qe.allowOverride===!0&&ne!==null&&(Qe=ne),be.layers.test(se.layers)&&Ni(be,X,se,De,Qe,Ke)}}function Ni(b,X,se,ne,$,Re){b.onBeforeRender(P,X,se,ne,$,Re),b.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(P,X,se,ne,b,Re),$.transparent===!0&&$.side===Gi&&$.forceSinglePass===!1?($.side=Wn,$.needsUpdate=!0,P.renderBufferDirect(se,X,ne,$,b,Re),$.side=vr,$.needsUpdate=!0,P.renderBufferDirect(se,X,ne,$,b,Re),$.side=Gi):P.renderBufferDirect(se,X,ne,$,b,Re),b.onAfterRender(P,X,se,ne,$,Re)}function es(b,X,se){X.isScene!==!0&&(X=Pt);const ne=E.get(b),$=F.state.lights,Re=F.state.shadowsArray,Ne=$.state.version,be=Te.getParameters(b,$.state,Re,X,se),De=Te.getProgramCacheKey(be);let Ke=ne.programs;ne.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?X.environment:null,ne.fog=X.fog;const Qe=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;ne.envMap=he.get(b.envMap||ne.environment,Qe),ne.envMapRotation=ne.environment!==null&&b.envMap===null?X.environmentRotation:b.envMapRotation,Ke===void 0&&(b.addEventListener("dispose",At),Ke=new Map,ne.programs=Ke);let ht=Ke.get(De);if(ht!==void 0){if(ne.currentProgram===ht&&ne.lightsStateVersion===Ne)return Ha(b,be),ht}else be.uniforms=Te.getUniforms(b),b.onBeforeCompile(be,P),ht=Te.acquireProgram(be,De),Ke.set(De,ht),ne.uniforms=be.uniforms;const Ze=ne.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ze.clippingPlanes=Ee.uniform),Ha(b,be),ne.needsLights=Xa(b),ne.lightsStateVersion=Ne,ne.needsLights&&(Ze.ambientLightColor.value=$.state.ambient,Ze.lightProbe.value=$.state.probe,Ze.directionalLights.value=$.state.directional,Ze.directionalLightShadows.value=$.state.directionalShadow,Ze.spotLights.value=$.state.spot,Ze.spotLightShadows.value=$.state.spotShadow,Ze.rectAreaLights.value=$.state.rectArea,Ze.ltc_1.value=$.state.rectAreaLTC1,Ze.ltc_2.value=$.state.rectAreaLTC2,Ze.pointLights.value=$.state.point,Ze.pointLightShadows.value=$.state.pointShadow,Ze.hemisphereLights.value=$.state.hemi,Ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ze.spotLightMatrix.value=$.state.spotLightMatrix,Ze.spotLightMap.value=$.state.spotLightMap,Ze.pointShadowMatrix.value=$.state.pointShadowMatrix),ne.currentProgram=ht,ne.uniformsList=null,ht}function No(b){if(b.uniformsList===null){const X=b.currentProgram.getUniforms();b.uniformsList=Cc.seqWithValue(X.seq,b.uniforms)}return b.uniformsList}function Ha(b,X){const se=E.get(b);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function Ga(b,X,se,ne,$){X.isScene!==!0&&(X=Pt),G.resetTextureUnits();const Re=X.fog,Ne=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?X.environment:null,be=Z===null?P.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:In,De=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Ke=he.get(ne.envMap||Ne,De),Qe=ne.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ht=!!se.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!se.morphAttributes.position,Lt=!!se.morphAttributes.normal,kt=!!se.morphAttributes.color;let Ot=bi;ne.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ot=P.toneMapping);const Et=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Jt=Et!==void 0?Et.length:0,je=E.get(ne),bn=F.state.lights;if(Ve===!0&&(nt===!0||b!==Q)){const Qt=b===Q&&ne.id===ae;Ee.setState(ne,b,Qt)}let St=!1;ne.version===je.__version?(je.needsLights&&je.lightsStateVersion!==bn.state.version||je.outputColorSpace!==be||$.isBatchedMesh&&je.batching===!1||!$.isBatchedMesh&&je.batching===!0||$.isBatchedMesh&&je.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&je.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&je.instancing===!1||!$.isInstancedMesh&&je.instancing===!0||$.isSkinnedMesh&&je.skinning===!1||!$.isSkinnedMesh&&je.skinning===!0||$.isInstancedMesh&&je.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&je.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&je.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&je.instancingMorph===!1&&$.morphTexture!==null||je.envMap!==Ke||ne.fog===!0&&je.fog!==Re||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ee.numPlanes||je.numIntersection!==Ee.numIntersection)||je.vertexAlphas!==Qe||je.vertexTangents!==ht||je.morphTargets!==Ze||je.morphNormals!==Lt||je.morphColors!==kt||je.toneMapping!==Ot||je.morphTargetsCount!==Jt)&&(St=!0):(St=!0,je.__version=ne.version);let Nn=je.currentProgram;St===!0&&(Nn=es(ne,X,$));let Un=!1,jn=!1,Mr=!1;const Ct=Nn.getUniforms(),ot=je.uniforms;if(He.useProgram(Nn.program)&&(Un=!0,jn=!0,Mr=!0),ne.id!==ae&&(ae=ne.id,jn=!0),Un||Q!==b){He.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Ct.setValue(z,"projectionMatrix",b.projectionMatrix),Ct.setValue(z,"viewMatrix",b.matrixWorldInverse);const ni=Ct.map.cameraPosition;ni!==void 0&&ni.setValue(z,_t.setFromMatrixPosition(b.matrixWorld)),wt.logarithmicDepthBuffer&&Ct.setValue(z,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Ct.setValue(z,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,jn=!0,Mr=!0)}if(je.needsLights&&(bn.state.directionalShadowMap.length>0&&Ct.setValue(z,"directionalShadowMap",bn.state.directionalShadowMap,G),bn.state.spotShadowMap.length>0&&Ct.setValue(z,"spotShadowMap",bn.state.spotShadowMap,G),bn.state.pointShadowMap.length>0&&Ct.setValue(z,"pointShadowMap",bn.state.pointShadowMap,G)),$.isSkinnedMesh){Ct.setOptional(z,$,"bindMatrix"),Ct.setOptional(z,$,"bindMatrixInverse");const Qt=$.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Ct.setValue(z,"boneTexture",Qt.boneTexture,G))}$.isBatchedMesh&&(Ct.setOptional(z,$,"batchingTexture"),Ct.setValue(z,"batchingTexture",$._matricesTexture,G),Ct.setOptional(z,$,"batchingIdTexture"),Ct.setValue(z,"batchingIdTexture",$._indirectTexture,G),Ct.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&Ct.setValue(z,"batchingColorTexture",$._colorsTexture,G));const pi=se.morphAttributes;if((pi.position!==void 0||pi.normal!==void 0||pi.color!==void 0)&&Pe.update($,se,Nn),(jn||je.receiveShadow!==$.receiveShadow)&&(je.receiveShadow=$.receiveShadow,Ct.setValue(z,"receiveShadow",$.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&X.environment!==null&&(ot.envMapIntensity.value=X.environmentIntensity),ot.dfgLUT!==void 0&&(ot.dfgLUT.value=Sw()),jn&&(Ct.setValue(z,"toneMappingExposure",P.toneMappingExposure),je.needsLights&&Wa(ot,Mr),Re&&ne.fog===!0&&Ye.refreshFogUniforms(ot,Re),Ye.refreshMaterialUniforms(ot,ne,Ae,Y,F.state.transmissionRenderTarget[b.id]),Cc.upload(z,No(je),ot,G)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Cc.upload(z,No(je),ot,G),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Ct.setValue(z,"center",$.center),Ct.setValue(z,"modelViewMatrix",$.modelViewMatrix),Ct.setValue(z,"normalMatrix",$.normalMatrix),Ct.setValue(z,"modelMatrix",$.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Qt=ne.uniformsGroups;for(let ni=0,Qi=Qt.length;ni<Qi;ni++){const Uo=Qt[ni];Le.update(Uo,Nn),Le.bind(Uo,Nn)}}return Nn}function Wa(b,X){b.ambientLightColor.needsUpdate=X,b.lightProbe.needsUpdate=X,b.directionalLights.needsUpdate=X,b.directionalLightShadows.needsUpdate=X,b.pointLights.needsUpdate=X,b.pointLightShadows.needsUpdate=X,b.spotLights.needsUpdate=X,b.spotLightShadows.needsUpdate=X,b.rectAreaLights.needsUpdate=X,b.hemisphereLights.needsUpdate=X}function Xa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(b,X,se){const ne=E.get(b);ne.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=X,E.get(b.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:se,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,X){const se=E.get(b);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const ja=z.createFramebuffer();this.setRenderTarget=function(b,X=0,se=0){Z=b,O=X,J=se;let ne=null,$=!1,Re=!1;if(b){const be=E.get(b);if(be.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),te.copy(b.viewport),W.copy(b.scissor),K=b.scissorTest,He.viewport(te),He.scissor(W),He.setScissorTest(K),ae=-1;return}else if(be.__webglFramebuffer===void 0)G.setupRenderTarget(b);else if(be.__hasExternalTextures)G.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Qe=b.depthTexture;if(be.__boundDepthTexture!==Qe){if(Qe!==null&&E.has(Qe)&&(b.width!==Qe.image.width||b.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(b)}}const De=b.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);const Ke=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ke[X])?ne=Ke[X][se]:ne=Ke[X],$=!0):b.samples>0&&G.useMultisampledRTT(b)===!1?ne=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Ke)?ne=Ke[se]:ne=Ke,te.copy(b.viewport),W.copy(b.scissor),K=b.scissorTest}else te.copy(ie).multiplyScalar(Ae).floor(),W.copy(pe).multiplyScalar(Ae).floor(),K=de;if(se!==0&&(ne=ja),He.bindFramebuffer(z.FRAMEBUFFER,ne)&&He.drawBuffers(b,ne),He.viewport(te),He.scissor(W),He.setScissorTest(K),$){const be=E.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,be.__webglTexture,se)}else if(Re){const be=X;for(let De=0;De<b.textures.length;De++){const Ke=E.get(b.textures[De]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+De,Ke.__webglTexture,se,be)}}else if(b!==null&&se!==0){const be=E.get(b.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,se)}ae=-1},this.readRenderTargetPixels=function(b,X,se,ne,$,Re,Ne,be=0){if(!(b&&b.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(De=De[Ne]),De){He.bindFramebuffer(z.FRAMEBUFFER,De);try{const Ke=b.textures[be],Qe=Ke.format,ht=Ke.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!wt.textureFormatReadable(Qe)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(ht)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=b.width-ne&&se>=0&&se<=b.height-$&&z.readPixels(X,se,ne,$,we.convert(Qe),we.convert(ht),Re)}finally{const Ke=Z!==null?E.get(Z).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Ke)}}},this.readRenderTargetPixelsAsync=async function(b,X,se,ne,$,Re,Ne,be=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(De=De[Ne]),De)if(X>=0&&X<=b.width-ne&&se>=0&&se<=b.height-$){He.bindFramebuffer(z.FRAMEBUFFER,De);const Ke=b.textures[be],Qe=Ke.format,ht=Ke.type;if(b.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be),!wt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.bufferData(z.PIXEL_PACK_BUFFER,Re.byteLength,z.STREAM_READ),z.readPixels(X,se,ne,$,we.convert(Qe),we.convert(ht),0);const Lt=Z!==null?E.get(Z).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Lt);const kt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await jx(z,kt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ze),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Re),z.deleteBuffer(Ze),z.deleteSync(kt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,X=null,se=0){const ne=Math.pow(2,-se),$=Math.floor(b.image.width*ne),Re=Math.floor(b.image.height*ne),Ne=X!==null?X.x:0,be=X!==null?X.y:0;G.setTexture2D(b,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ne,be,$,Re),He.unbindTexture()};const Vc=z.createFramebuffer(),Hc=z.createFramebuffer();this.copyTextureToTexture=function(b,X,se=null,ne=null,$=0,Re=0){let Ne,be,De,Ke,Qe,ht,Ze,Lt,kt;const Ot=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(se!==null)Ne=se.max.x-se.min.x,be=se.max.y-se.min.y,De=se.isBox3?se.max.z-se.min.z:1,Ke=se.min.x,Qe=se.min.y,ht=se.isBox3?se.min.z:0;else{const ot=Math.pow(2,-$);Ne=Math.floor(Ot.width*ot),be=Math.floor(Ot.height*ot),b.isDataArrayTexture?De=Ot.depth:b.isData3DTexture?De=Math.floor(Ot.depth*ot):De=1,Ke=0,Qe=0,ht=0}ne!==null?(Ze=ne.x,Lt=ne.y,kt=ne.z):(Ze=0,Lt=0,kt=0);const Et=we.convert(X.format),Jt=we.convert(X.type);let je;X.isData3DTexture?(G.setTexture3D(X,0),je=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),je=z.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),je=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const bn=z.getParameter(z.UNPACK_ROW_LENGTH),St=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Nn=z.getParameter(z.UNPACK_SKIP_PIXELS),Un=z.getParameter(z.UNPACK_SKIP_ROWS),jn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Ot.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Ot.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ke),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ht);const Mr=b.isDataArrayTexture||b.isData3DTexture,Ct=X.isDataArrayTexture||X.isData3DTexture;if(b.isDepthTexture){const ot=E.get(b),pi=E.get(X),Qt=E.get(ot.__renderTarget),ni=E.get(pi.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,Qt.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let Qi=0;Qi<De;Qi++)Mr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(b).__webglTexture,$,ht+Qi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Re,kt+Qi)),z.blitFramebuffer(Ke,Qe,Ne,be,Ze,Lt,Ne,be,z.DEPTH_BUFFER_BIT,z.NEAREST);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||E.has(b)){const ot=E.get(b),pi=E.get(X);He.bindFramebuffer(z.READ_FRAMEBUFFER,Vc),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,Hc);for(let Qt=0;Qt<De;Qt++)Mr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ot.__webglTexture,$,ht+Qt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ot.__webglTexture,$),Ct?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,pi.__webglTexture,Re,kt+Qt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,pi.__webglTexture,Re),$!==0?z.blitFramebuffer(Ke,Qe,Ne,be,Ze,Lt,Ne,be,z.COLOR_BUFFER_BIT,z.NEAREST):Ct?z.copyTexSubImage3D(je,Re,Ze,Lt,kt+Qt,Ke,Qe,Ne,be):z.copyTexSubImage2D(je,Re,Ze,Lt,Ke,Qe,Ne,be);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ct?b.isDataTexture||b.isData3DTexture?z.texSubImage3D(je,Re,Ze,Lt,kt,Ne,be,De,Et,Jt,Ot.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(je,Re,Ze,Lt,kt,Ne,be,De,Et,Ot.data):z.texSubImage3D(je,Re,Ze,Lt,kt,Ne,be,De,Et,Jt,Ot):b.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Re,Ze,Lt,Ne,be,Et,Jt,Ot.data):b.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Re,Ze,Lt,Ot.width,Ot.height,Et,Ot.data):z.texSubImage2D(z.TEXTURE_2D,Re,Ze,Lt,Ne,be,Et,Jt,Ot);z.pixelStorei(z.UNPACK_ROW_LENGTH,bn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,St),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Nn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Un),z.pixelStorei(z.UNPACK_SKIP_IMAGES,jn),Re===0&&X.generateMipmaps&&z.generateMipmap(je),He.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&G.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?G.setTextureCube(b,0):b.isData3DTexture?G.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?G.setTexture2DArray(b,0):G.setTexture2D(b,0),He.unbindTexture()},this.resetState=function(){O=0,J=0,Z=null,He.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}}const y0={type:"change"},Rd={type:"start"},g_={type:"end"},Mc=new Fa,S0=new Kr,Ew=Math.cos(70*q0.DEG2RAD),an=new j,Hn=2*Math.PI,Ft={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oh=1e-6;class Tw extends RS{constructor(e,t=null){super(e,t),this.state=Ft.NONE,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:go.ROTATE,MIDDLE:go.DOLLY,RIGHT:go.PAN},this.touches={ONE:po.ROTATE,TWO:po.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new Li,this._lastTargetPosition=new j,this._quat=new Li().setFromUnitVectors(e.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Kg,this._sphericalDelta=new Kg,this._scale=1,this._panOffset=new j,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new j,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Aw.bind(this),this._onPointerDown=ww.bind(this),this._onPointerUp=bw.bind(this),this._onContextMenu=Nw.bind(this),this._onMouseWheel=Pw.bind(this),this._onKeyDown=Lw.bind(this),this._onTouchStart=Dw.bind(this),this._onTouchMove=Iw.bind(this),this._onMouseDown=Rw.bind(this),this._onMouseMove=Cw.bind(this),this._interceptControlDown=Uw.bind(this),this._interceptControlUp=Fw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(y0),this.update(),this.state=Ft.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;an.copy(t).sub(this.target),an.applyQuaternion(this._quat),this._spherical.setFromVector3(an),this.autoRotate&&this.state===Ft.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Hn:i>Math.PI&&(i-=Hn),s<-Math.PI?s+=Hn:s>Math.PI&&(s-=Hn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=c!=this._spherical.radius}if(an.setFromSpherical(this._spherical),an.applyQuaternion(this._quatInverse),t.copy(this.target).add(an),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const f=an.length();c=this._clampDistance(f*this._scale);const h=f-c;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),a=!!h}else if(this.object.isOrthographicCamera){const f=new j(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=h!==this.object.zoom;const d=new j(this._mouse.x,this._mouse.y,0);d.unproject(this.object),this.object.position.sub(d).add(f),this.object.updateMatrixWorld(),c=an.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(Mc.origin.copy(this.object.position),Mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mc.direction))<Ew?this.object.lookAt(this.target):(S0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mc.intersectPlane(S0,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>oh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oh||this._lastTargetPosition.distanceToSquared(this.target)>oh?(this.dispatchEvent(y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Hn/60*this.autoRotateSpeed*e:Hn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){an.setFromMatrixColumn(t,0),an.multiplyScalar(-e),this._panOffset.add(an)}_panUp(e,t){this.screenSpacePanning===!0?an.setFromMatrixColumn(t,1):(an.setFromMatrixColumn(t,0),an.crossVectors(this.object.up,an)),an.multiplyScalar(e),this._panOffset.add(an)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;an.copy(s).sub(this.target);let a=an.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,c=i.width,f=i.height;this._mouse.x=s/c*2-1,this._mouse.y=-(a/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Hn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Hn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Hn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(c,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function ww(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Aw(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function bw(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(g_),this.state=Ft.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Rw(o){let e;switch(o.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case go.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ft.DOLLY;break;case go.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}break;case go.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ft.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ft.PAN}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Rd)}function Cw(o){switch(this.state){case Ft.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ft.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ft.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function Pw(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ft.NONE||(o.preventDefault(),this.dispatchEvent(Rd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(g_))}function Lw(o){this.enabled!==!1&&this._handleKeyDown(o)}function Dw(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case po.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ft.TOUCH_ROTATE;break;case po.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ft.TOUCH_PAN;break;default:this.state=Ft.NONE}break;case 2:switch(this.touches.TWO){case po.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ft.TOUCH_DOLLY_PAN;break;case po.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ft.TOUCH_DOLLY_ROTATE;break;default:this.state=Ft.NONE}break;default:this.state=Ft.NONE}this.state!==Ft.NONE&&this.dispatchEvent(Rd)}function Iw(o){switch(this._trackPointer(o),this.state){case Ft.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ft.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ft.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ft.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ft.NONE}}function Nw(o){this.enabled!==!1&&o.preventDefault()}function Uw(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Fw(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function M0(o,e){if(e===Nx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Zh||e===X0){let t=o.getIndex();if(t===null){const c=[],f=o.getAttribute("position");if(f!==void 0){for(let h=0;h<f.count;h++)c.push(h);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Zh)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}function Ow(o){const e=new Map,t=new Map,i=o.clone();return __(o,i,function(s,a){e.set(a,s),t.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const a=s,c=e.get(s),f=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=f.map(function(h){return t.get(h)}),a.bind(a.skeleton,a.bindMatrix)}),i}function __(o,e,t){t(o,e);for(let i=0;i<o.children.length;i++)__(o.children[i],e.children[i],t)}class kw extends Do{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gw(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new eA(t)}),this.register(function(t){return new tA(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new Hw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new Jw(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new E0(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new E0(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new nA(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const d=Ra.extractUrlBase(e);c=Ra.resolveURL(d,this.path)}else c=Ra.extractUrlBase(e);this.manager.itemStart(e);const f=function(d){s?s(d):console.error(d),a.manager.itemError(e),a.manager.itemEnd(e)},h=new l_(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(e,function(d){try{a.parse(d,c,function(g){t(g),a.manager.itemEnd(e)},f)}catch(g){f(g)}},i,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},f={},h=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(h.decode(new Uint8Array(e,0,4))===v_){try{c[xt.KHR_BINARY_GLTF]=new iA(e)}catch(_){s&&s(_);return}a=JSON.parse(c[xt.KHR_BINARY_GLTF].content)}else a=JSON.parse(h.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const d=new gA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});d.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](d);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,c[_.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const _=a.extensionsUsed[g],m=a.extensionsRequired||[];switch(_){case xt.KHR_MATERIALS_UNLIT:c[_]=new Vw;break;case xt.KHR_DRACO_MESH_COMPRESSION:c[_]=new rA(a,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:c[_]=new sA;break;case xt.KHR_MESH_QUANTIZATION:c[_]=new oA;break;default:m.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}d.setExtensions(c),d.setPlugins(f),d.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function Bw(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}function tn(o,e,t){const i=o.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zw{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,h=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let d;const g=new ct(16777215);h.color!==void 0&&g.setRGB(h.color[0],h.color[1],h.color[2],In);const _=h.range!==void 0?h.range:0;switch(h.type){case"directional":d=new td(g),d.target.position.set(0,0,-1),d.add(d.target);break;case"point":d=new dS(g),d.distance=_;break;case"spot":d=new fS(g),d.distance=_,h.spot=h.spot||{},h.spot.innerConeAngle=h.spot.innerConeAngle!==void 0?h.spot.innerConeAngle:0,h.spot.outerConeAngle=h.spot.outerConeAngle!==void 0?h.spot.outerConeAngle:Math.PI/4,d.angle=h.spot.outerConeAngle,d.penumbra=1-h.spot.innerConeAngle/h.spot.outerConeAngle,d.target.position.set(0,0,-1),d.add(d.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+h.type)}return d.position.set(0,0,0),Vi(d,h),h.intensity!==void 0&&(d.intensity=h.intensity),d.name=t.createUniqueName(h.name||"light_"+e),s=Promise.resolve(d),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],f=(a.extensions&&a.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(h){return i._getNodeRef(t.cache,f,h)})}}class Vw{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Ts}extendParams(e,t,i){const s=[];e.color=new ct(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],In),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,gn))}return Promise.all(s)}}class Hw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class Gw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new lt(a,a)}return Promise.all(s)}}class Ww{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class Xw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class jw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new ct(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],In)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,gn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class Yw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class qw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new ct().setRGB(a[0],a[1],a[2],In),Promise.all(s)}}class Kw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class $w{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new ct().setRGB(a[0],a[1],a[2],In),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,gn)),Promise.all(s)}}class Zw{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class Jw{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Zi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class Qw{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class eA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let h=i.textureLoader;if(f.uri){const d=i.options.manager.getHandler(f.uri);d!==null&&(h=d)}return i.loadTextureImage(e,c.source,h)}}class tA{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let h=i.textureLoader;if(f.uri){const d=i.options.manager.getHandler(f.uri);d!==null&&(h=d)}return i.loadTextureImage(e,c.source,h)}}class E0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(f){const h=s.byteOffset||0,d=s.byteLength||0,g=s.count,_=s.byteStride,m=new Uint8Array(f,h,d);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,_,m,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(g*_);return c.decodeGltfBuffer(new Uint8Array(x),g,_,m,s.mode,s.filter),x})})}else return null}}class nA{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const d of s.primitives)if(d.mode!==ui.TRIANGLES&&d.mode!==ui.TRIANGLE_STRIP&&d.mode!==ui.TRIANGLE_FAN&&d.mode!==void 0)return null;const c=i.extensions[this.name].attributes,f=[],h={};for(const d in c)f.push(this.parser.getDependency("accessor",c[d]).then(g=>(h[d]=g,h[d])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(d=>{const g=d.pop(),_=g.isGroup?g.children:[g],m=d[0].count,x=[];for(const M of _){const A=new mt,y=new j,S=new Li,R=new j(1,1,1),L=new Ny(M.geometry,M.material,m);for(let C=0;C<m;C++)h.TRANSLATION&&y.fromBufferAttribute(h.TRANSLATION,C),h.ROTATION&&S.fromBufferAttribute(h.ROTATION,C),h.SCALE&&R.fromBufferAttribute(h.SCALE,C),L.setMatrixAt(C,A.compose(y,S,R));for(const C in h)if(C==="_COLOR_0"){const F=h[C];L.instanceColor=new Qh(F.array,F.itemSize,F.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,h[C]);Kt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const v_="glTF",Ea=12,T0={JSON:1313821514,BIN:5130562};class iA{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ea),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ea,a=new DataView(e,Ea);let c=0;for(;c<s;){const f=a.getUint32(c,!0);c+=4;const h=a.getUint32(c,!0);if(c+=4,h===T0.JSON){const d=new Uint8Array(e,Ea+c,f);this.content=i.decode(d)}else if(h===T0.BIN){const d=Ea+c;this.body=e.slice(d,d+f)}c+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class rA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,f={},h={},d={};for(const g in c){const _=rd[g]||g.toLowerCase();f[_]=c[g]}for(const g in e.attributes){const _=rd[g]||g.toLowerCase();if(c[g]!==void 0){const m=i.accessors[e.attributes[g]],x=xo[m.componentType];d[_]=x.name,h[_]=m.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(_,m){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const A=x.attributes[M],y=h[M];y!==void 0&&(A.normalized=y)}_(x)},f,d,In,m)})})}}class sA{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class oA{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class x_ extends Co{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,h=f*2,d=f*3,g=s-t,_=(i-t)/g,m=_*_,x=m*_,M=e*d,A=M-d,y=-2*x+3*m,S=x-m,R=1-y,L=S-m+_;for(let C=0;C!==f;C++){const F=c[A+C+f],N=c[A+C+h]*g,k=c[M+C+f],w=c[M+C]*g;a[C]=R*F+L*N+y*k+S*w}return a}}const aA=new Li;class lA extends x_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return aA.fromArray(a).normalize().toArray(a),a}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},xo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},w0={9728:ln,9729:cn,9984:k0,9985:Tc,9986:Ta,9987:pr},A0={33071:Wi,33648:Pc,10497:Mo},ah={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},cA={CUBICSPLINE:void 0,LINEAR:Da,STEP:La},lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Td({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vr})),o.DefaultMaterial}function xs(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Vi(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function fA(o,e,t){let i=!1,s=!1,a=!1;for(let d=0,g=e.length;d<g;d++){const _=e[d];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(s=!0),_.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],f=[],h=[];for(let d=0,g=e.length;d<g;d++){const _=e[d];if(i){const m=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):o.attributes.position;c.push(m)}if(s){const m=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):o.attributes.normal;f.push(m)}if(a){const m=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):o.attributes.color;h.push(m)}}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(h)]).then(function(d){const g=d[0],_=d[1],m=d[2];return i&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=_),a&&(o.morphAttributes.color=m),o.morphTargetsRelative=!0,o})}function hA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function dA(o){let e;const t=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ch(t.attributes):e=o.indices+":"+ch(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+ch(o.targets[i]);return e}function ch(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function sd(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function pA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const mA=new mt;class gA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Bw,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const f=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(f)===!0;const h=f.match(/Version\/(\d+)/);s=i&&h?parseInt(h[1],10):-1,a=f.indexOf("Firefox")>-1,c=a?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new cS(this.options.manager):this.textureLoader=new gS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new l_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const f={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return xs(a,f,s),Vi(f,s),Promise.all(i._invokeAll(function(h){return h.afterRoot&&h.afterRoot(f)})).then(function(){for(const h of f.scenes)h.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let f=0,h=c.length;f<h;f++)e[c[f]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,f)=>{const h=this.associations.get(c);h!=null&&this.associations.set(f,h);for(const[d,g]of c.children.entries())a(g,f.children[d])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(Ra.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=ah[s.type],f=xo[s.componentType],h=s.normalized===!0,d=new f(s.count*c);return Promise.resolve(new Dn(d,c,h))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const f=c[0],h=ah[s.type],d=xo[s.componentType],g=d.BYTES_PER_ELEMENT,_=g*h,m=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let A,y;if(x&&x!==_){const S=Math.floor(m/x),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+S+":"+s.count;let L=t.cache.get(R);L||(A=new d(f,S*x,s.count*x/g),L=new by(A,x/g),t.cache.add(R,L)),y=new xd(L,h,m%x/g,M)}else f===null?A=new d(s.count*h):A=new d(f,m,s.count*h),y=new Dn(A,h,M);if(s.sparse!==void 0){const S=ah.SCALAR,R=xo[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,F=new R(c[1],L,s.sparse.count*S),N=new d(c[2],C,s.sparse.count*h);f!==null&&(y=new Dn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let k=0,w=F.length;k<w;k++){const P=F[k];if(y.setX(P,N[k*h]),h>=2&&y.setY(P,N[k*h+1]),h>=3&&y.setZ(P,N[k*h+2]),h>=4&&y.setW(P,N[k*h+3]),h>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let f=this.textureLoader;if(c.uri){const h=i.manager.getHandler(c.uri);h!==null&&(f=h)}return this.loadTextureImage(e,a,f)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],f=a.images[t],h=(f.uri||f.bufferView)+":"+c.sampler;if(this.textureCache[h])return this.textureCache[h];const d=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const m=(a.samplers||{})[c.sampler]||{};return g.magFilter=w0[m.magFilter]||cn,g.minFilter=w0[m.minFilter]||pr,g.wrapS=A0[m.wrapS]||Mo,g.wrapT=A0[m.wrapT]||Mo,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==ln&&g.minFilter!==cn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[h]=d,d}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=s.images[e],f=self.URL||self.webkitURL;let h=c.uri||"",d=!1;if(c.bufferView!==void 0)h=i.getDependency("bufferView",c.bufferView).then(function(_){d=!0;const m=new Blob([_],{type:c.mimeType});return h=f.createObjectURL(m),h});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(h).then(function(_){return new Promise(function(m,x){let M=m;t.isImageBitmapLoader===!0&&(M=function(A){const y=new _n(A);y.needsUpdate=!0,m(y)}),t.load(Ra.resolveURL(_,a.path),M,void 0,x)})}).then(function(_){return d===!0&&f.revokeObjectURL(h),Vi(_,c),_.userData.mimeType=c.mimeType||pA(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",h),_});return this.sourceCache[e]=g,g}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[xt.KHR_TEXTURE_TRANSFORM]){const f=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const h=a.associations.get(c);c=a.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(c,f),a.associations.set(c,h)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+i.uuid;let h=this.cache.get(f);h||(h=new n_,Pi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,h.sizeAttenuation=!1,this.cache.add(f,h)),i=h}else if(e.isLine){const f="LineBasicMaterial:"+i.uuid;let h=this.cache.get(f);h||(h=new t_,Pi.prototype.copy.call(h,i),h.color.copy(i.color),h.map=i.map,this.cache.add(f,h)),i=h}if(s||a||c){let f="ClonedMaterial:"+i.uuid+":";s&&(f+="derivative-tangents:"),a&&(f+="vertex-colors:"),c&&(f+="flat-shading:");let h=this.cache.get(f);h||(h=i.clone(),a&&(h.vertexColors=!0),c&&(h.flatShading=!0),s&&(h.normalScale&&(h.normalScale.y*=-1),h.clearcoatNormalScale&&(h.clearcoatNormalScale.y*=-1)),this.cache.add(f,h),this.associations.set(h,this.associations.get(i))),i=h}e.material=i}getMaterialType(){return Td}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const f={},h=a.extensions||{},d=[];if(h[xt.KHR_MATERIALS_UNLIT]){const _=s[xt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),d.push(_.extendParams(f,a,t))}else{const _=a.pbrMetallicRoughness||{};if(f.color=new ct(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const m=_.baseColorFactor;f.color.setRGB(m[0],m[1],m[2],In),f.opacity=m[3]}_.baseColorTexture!==void 0&&d.push(t.assignTexture(f,"map",_.baseColorTexture,gn)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(d.push(t.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),d.push(t.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),d.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,f)})))}a.doubleSided===!0&&(f.side=Gi);const g=a.alphaMode||lh.OPAQUE;if(g===lh.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===lh.MASK&&(f.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Ts&&(d.push(t.assignTexture(f,"normalMap",a.normalTexture)),f.normalScale=new lt(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;f.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&c!==Ts&&(d.push(t.assignTexture(f,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Ts){const _=a.emissiveFactor;f.emissive=new ct().setRGB(_[0],_[1],_[2],In)}return a.emissiveTexture!==void 0&&c!==Ts&&d.push(t.assignTexture(f,"emissiveMap",a.emissiveTexture,gn)),Promise.all(d).then(function(){const _=new c(f);return a.name&&(_.name=a.name),Vi(_,a),t.associations.set(_,{materials:e}),a.extensions&&xs(s,_,a),_})}createUniqueName(e){const t=Ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(f){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(h){return b0(h,f,t)})}const c=[];for(let f=0,h=e.length;f<h;f++){const d=e[f],g=dA(d),_=s[g];if(_)c.push(_.promise);else{let m;d.extensions&&d.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?m=a(d):m=b0(new di,d,t),s[g]={primitive:d,promise:m},c.push(m)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h].material===void 0?uA(this.cache):this.getDependency("material",c[h].material);f.push(g)}return f.push(t.loadGeometries(c)),Promise.all(f).then(function(h){const d=h.slice(0,h.length-1),g=h[h.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const A=g[x],y=c[x];let S;const R=d[x];if(y.mode===ui.TRIANGLES||y.mode===ui.TRIANGLE_STRIP||y.mode===ui.TRIANGLE_FAN||y.mode===void 0)S=a.isSkinnedMesh===!0?new Ly(A,R):new Xn(A,R),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===ui.TRIANGLE_STRIP?S.geometry=M0(S.geometry,X0):y.mode===ui.TRIANGLE_FAN&&(S.geometry=M0(S.geometry,Zh));else if(y.mode===ui.LINES)S=new ky(A,R);else if(y.mode===ui.LINE_STRIP)S=new Ed(A,R);else if(y.mode===ui.LINE_LOOP)S=new By(A,R);else if(y.mode===ui.POINTS)S=new zy(A,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&hA(S,a),S.name=t.createUniqueName(a.name||"mesh_"+e),Vi(S,a),y.extensions&&xs(s,S,y),t.assignFinalMaterial(S),_.push(S)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return a.extensions&&xs(s,_[0],a),_[0];const m=new Es;a.extensions&&xs(s,m,a),t.associations.set(m,{meshes:e});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);return m})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gn(q0.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Ba(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Vi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,f=[],h=[];for(let d=0,g=c.length;d<g;d++){const _=c[d];if(_){f.push(_);const m=new mt;a!==null&&m.fromArray(a.array,d*16),h.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[d])}return new Sd(f,h)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],f=[],h=[],d=[],g=[];for(let _=0,m=s.channels.length;_<m;_++){const x=s.channels[_],M=s.samplers[x.sampler],A=x.target,y=A.node,S=s.parameters!==void 0?s.parameters[M.input]:M.input,R=s.parameters!==void 0?s.parameters[M.output]:M.output;A.node!==void 0&&(c.push(this.getDependency("node",y)),f.push(this.getDependency("accessor",S)),h.push(this.getDependency("accessor",R)),d.push(M),g.push(A))}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(h),Promise.all(d),Promise.all(g)]).then(function(_){const m=_[0],x=_[1],M=_[2],A=_[3],y=_[4],S=[];for(let L=0,C=m.length;L<C;L++){const F=m[L],N=x[L],k=M[L],w=A[L],P=y[L];if(F===void 0)continue;F.updateMatrix&&F.updateMatrix();const le=i._createAnimationTracks(F,N,k,w,P);if(le)for(let O=0;O<le.length;O++)S.push(le[O])}const R=new nS(a,void 0,S);return Vi(R,s),R})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(f){if(f.isMesh)for(let h=0,d=s.weights.length;h<d;h++)f.morphTargetInfluences[h]=s.weights[h]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],f=s.children||[];for(let d=0,g=f.length;d<g;d++)c.push(i.getDependency("node",f[d]));const h=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),h]).then(function(d){const g=d[0],_=d[1],m=d[2];m!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(m,mA)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,M=_[0];g.pivot=new j().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],M.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",f=[],h=s._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});return h&&f.push(h),a.camera!==void 0&&f.push(s.getDependency("camera",a.camera).then(function(d){return s._getNodeRef(s.cameraCache,a.camera,d)})),s._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){f.push(d)}),this.nodeCache[e]=Promise.all(f).then(function(d){let g;if(a.isBone===!0?g=new e_:d.length>1?g=new Es:d.length===1?g=d[0]:g=new Kt,g!==d[0])for(let _=0,m=d.length;_<m;_++)g.add(d[_]);if(a.name&&(g.userData.name=a.name,g.name=c),Vi(g,a),a.extensions&&xs(i,g,a),a.matrix!==void 0){const _=new mt;_.fromArray(a.matrix),g.applyMatrix4(_)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const _=s.associations.get(g);s.associations.set(g,{..._})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new Es;i.name&&(a.name=s.createUniqueName(i.name)),Vi(a,i),i.extensions&&xs(t,a,i);const c=i.nodes||[],f=[];for(let h=0,d=c.length;h<d;h++)f.push(s.getDependency("node",c[h]));return Promise.all(f).then(function(h){for(let g=0,_=h.length;g<_;g++){const m=h[g];m.parent!==null?a.add(Ow(m)):a.add(m)}const d=g=>{const _=new Map;for(const[m,x]of s.associations)(m instanceof Pi||m instanceof _n)&&_.set(m,x);return g.traverse(m=>{const x=s.associations.get(m);x!=null&&_.set(m,x)}),_};return s.associations=d(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],f=e.name?e.name:e.uuid,h=[];qr[a.path]===qr.weights?e.traverse(function(m){m.morphTargetInfluences&&h.push(m.name?m.name:m.uuid)}):h.push(f);let d;switch(qr[a.path]){case qr.weights:d=Ao;break;case qr.rotation:d=bo;break;case qr.translation:case qr.scale:d=Ro;break;default:i.itemSize===1?d=Ao:d=Ro;break}const g=s.interpolation!==void 0?cA[s.interpolation]:Da,_=this._getArrayFromAccessor(i);for(let m=0,x=h.length;m<x;m++){const M=new d(h[m]+"."+qr[a.path],t.array,_,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=sd(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof bo?lA:x_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function _A(o,e,t){const i=e.attributes,s=new $i;if(i.POSITION!==void 0){const f=t.json.accessors[i.POSITION],h=f.min,d=f.max;if(h!==void 0&&d!==void 0){if(s.set(new j(h[0],h[1],h[2]),new j(d[0],d[1],d[2])),f.normalized){const g=sd(xo[f.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const f=new j,h=new j;for(let d=0,g=a.length;d<g;d++){const _=a[d];if(_.POSITION!==void 0){const m=t.json.accessors[_.POSITION],x=m.min,M=m.max;if(x!==void 0&&M!==void 0){if(h.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),h.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),h.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),m.normalized){const A=sd(xo[m.componentType]);h.multiplyScalar(A)}f.max(h)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const c=new Di;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function b0(o,e,t){const i=e.attributes,s=[];function a(c,f){return t.getDependency("accessor",c).then(function(h){o.setAttribute(f,h)})}for(const c in i){const f=rd[c]||c.toLowerCase();f in o.attributes||s.push(a(i[c],f))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(c)}return Mt.workingColorSpace!==In&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),Vi(o,e),_A(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?fA(o,e.targets,t):o})}const vA="/assets/hippo.vox-BxFCtGw8.glb",xA=()=>{const o=Ti.useRef(),[e,t]=Ti.useState(!0),i=Ti.useRef(),s=Ti.useCallback(()=>{const{current:a}=i,{current:c}=o;c&&a&&a.setSize(c.clientWidth,c.clientHeight)},[]);return Ti.useEffect(()=>{const{current:a}=o;if(!a)return;const c=a.clientWidth,f=a.clientHeight,h=new Mw({antialias:!0,alpha:!0});h.setPixelRatio(window.devicePixelRatio),h.setSize(c,f),h.outputColorSpace=gn,h.toneMapping=bi,h.shadowMap.enabled=!0,h.shadowMap.type=mo,a.appendChild(h.domElement),i.current=h;const d=new Ey,g=new j(-.5,1.2,0),_=f*.005+4.8,m=new Ba(-_,_,_,-_,.01,5e4);m.position.set(-30*Math.sin(.2*Math.PI),10,30*Math.cos(.2*Math.PI)),m.lookAt(g);const x=new mS(16777215,1.2);d.add(x);const M=new td(16777215,2.4);M.position.set(-4,18,10),M.castShadow=!0,M.shadow.mapSize.set(1024,1024),M.shadow.camera.near=1,M.shadow.camera.far=180,M.shadow.camera.left=-12,M.shadow.camera.right=12,M.shadow.camera.top=18,M.shadow.camera.bottom=-8,M.shadow.radius=20,M.shadow.bias=-5e-4,d.add(M);const A=new td(11193599,.5);A.position.set(6,6,-10),d.add(A);const y=new Xn(new ka(40,40),new Hy({color:0,opacity:.2,transparent:!0}));y.rotation.x=-Math.PI/2,y.receiveShadow=!0,d.add(y);const S=new Tw(m,h.domElement);S.autoRotate=!0,S.autoRotateSpeed=2,S.target=g,S.enableDamping=!0,S.dampingFactor=.08,new kw().load(vA,F=>{const N=F.scene;N.name="model",N.traverse(O=>{O.isMesh&&(O.castShadow=!0,O.receiveShadow=!0)}),d.add(N);const k=new $i().setFromObject(N),w=k.getCenter(new j),le=k.getBoundingSphere(new Di).radius;m.left=-le,m.right=le,m.top=le,m.bottom=-le,m.updateProjectionMatrix(),S.target.copy(w),y.position.y=k.min.y-.02,C(),t(!1)},void 0,()=>t(!1));let L=null;const C=()=>{L=requestAnimationFrame(C),S.update(),h.render(d,m)};return()=>{cancelAnimationFrame(L),h.domElement.remove(),h.dispose()}},[]),Ti.useEffect(()=>(window.addEventListener("resize",s,!1),()=>window.removeEventListener("resize",s,!1)),[s]),zt.jsx("div",{className:"voxel-model-canvas",ref:o,children:e&&zt.jsx("div",{className:"model-loading model-loading-visible","aria-hidden":"true",children:zt.jsx("span",{className:"model-loading-spinner"})})})},R0=[{emoji:"☕️",text:"brew pour-over coffee",animationAttr:"coffee"},{emoji:"🐈",text:"play with my cat",animationAttr:"cat"},{emoji:"🎧",text:"listen to rap",animationAttr:"headphone"},{emoji:"✈️",text:"enjoy traveling",animationAttr:"plane"}],yA=0,SA=()=>{const[o,e]=Ti.useState(!1),t=Ti.useRef(null);Ti.useEffect(()=>()=>{t.current&&clearTimeout(t.current)},[]);const i=()=>{e(!0),t.current&&clearTimeout(t.current),t.current=setTimeout(()=>{e(!1)},yA)};return zt.jsxs("div",{children:[zt.jsxs("div",{className:"homepage-model-wrap",children:[zt.jsx(xA,{}),zt.jsxs("p",{className:"model-credit",children:["model designed by my wife"," ",zt.jsx("span",{style:{fontStyle:"normal"},children:":)"})]})]}),zt.jsxs("h1",{children:[zt.jsx("span",{className:`waving-hand ${o?"-no-high-five":""}`,onClick:i,onKeyDown:s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i())},role:"button",tabIndex:0,"aria-label":"High five"}),"Hey there! I'm Zhuo Cheng"]}),zt.jsxs("p",{children:["Software Engineer @"," ",zt.jsx("a",{href:"https://www.lycorp.co.jp/en/",target:"_blank",rel:"noreferrer noopener",className:"highlight company-highlight",children:"LY Corporation"})]}),zt.jsxs("p",{className:"activity",children:["When I'm not coding, I ...",zt.jsx("br",{}),R0.map((s,a)=>zt.jsxs(Ti.Fragment,{children:[a!==0&&", ",a===R0.length-1&&"and ",zt.jsx("span",{className:"activity-hover-able no-wrap","data-emoji":s.emoji,"data-animation":s.animationAttr,children:s.text})]},s.text))]})]})},MA="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='%23eaeaea'%3e%3cpath%20d='M16%200.395c-8.836%200-16%207.163-16%2016%200%207.069%204.585%2013.067%2010.942%2015.182%200.8%200.148%201.094-0.347%201.094-0.77%200-0.381-0.015-1.642-0.022-2.979-4.452%200.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993%200.11-0.973%200.11-0.973%201.606%200.113%202.452%201.649%202.452%201.649%201.427%202.446%203.743%201.739%204.656%201.33%200.143-1.034%200.558-1.74%201.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907%200-1.747%200.625-3.174%201.649-4.295-0.166-0.403-0.714-2.030%200.155-4.234%200%200%201.344-0.43%204.401%201.64%201.276-0.355%202.645-0.532%204.005-0.539%201.359%200.006%202.729%200.184%204.008%200.539%203.054-2.070%204.395-1.64%204.395-1.64%200.871%202.204%200.323%203.831%200.157%204.234%201.026%201.12%201.647%202.548%201.647%204.295%200%206.145-3.743%207.498-7.306%207.895%200.574%200.497%201.085%201.47%201.085%202.963%200%202.141-0.019%203.864-0.019%204.391%200%200.426%200.288%200.925%201.099%200.768%206.354-2.118%2010.933-8.113%2010.933-15.18%200-8.837-7.164-16-16-16z'%3e%3c/path%3e%3c/svg%3e",EA="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='%23eaeaea'%3e%3cpath%20d='M12%2012h5.535v2.837h0.079c0.77-1.381%202.655-2.837%205.464-2.837%205.842%200%206.922%203.637%206.922%208.367v9.633h-5.769v-8.54c0-2.037-0.042-4.657-3.001-4.657-3.005%200-3.463%202.218-3.463%204.509v8.688h-5.767v-18z'%3e%3c/path%3e%3cpath%20d='M2%2012h6v18h-6v-18z'%3e%3c/path%3e%3cpath%20d='M8%207c0%201.657-1.343%203-3%203s-3-1.343-3-3c0-1.657%201.343-3%203-3s3%201.343%203%203z'%3e%3c/path%3e%3c/svg%3e",TA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99609,255.99609'%20width='50px'%20height='50px'%20fill-rule='nonzero'%3e%3cg%20fill='%23eaeaea'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M32,11h5c0.552,0%201,-0.448%201,-1v-6.737c0,-0.524%20-0.403,-0.96%20-0.925,-0.997c-1.591,-0.113%20-4.699,-0.266%20-6.934,-0.266c-6.141,0%20-10.141,3.68%20-10.141,10.368v6.632h-7c-0.552,0%20-1,0.448%20-1,1v7c0,0.552%200.448,1%201,1h7v19c0,0.552%200.448,1%201,1h7c0.552,0%201,-0.448%201,-1v-19h7.222c0.51,0%200.938,-0.383%200.994,-0.89l0.778,-7c0.066,-0.592%20-0.398,-1.11%20-0.994,-1.11h-8v-5c0,-1.657%201.343,-3%203,-3z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",wA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99609,255.99609'%20width='50px'%20height='50px'%3e%3cg%20fill='%23eaeaea'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M5.91992,6l14.66211,21.375l-14.35156,16.625h3.17969l12.57617,-14.57812l10,14.57813h12.01367l-15.31836,-22.33008l13.51758,-15.66992h-3.16992l-11.75391,13.61719l-9.3418,-13.61719zM9.7168,8h7.16406l23.32227,34h-7.16406z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",AA="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0,0,255.99609,255.99609'%20width='50px'%20height='50px'%3e%3cg%20fill='%23eaeaea'%20fill-rule='nonzero'%20stroke='none'%20stroke-width='1'%20stroke-linecap='butt'%20stroke-linejoin='miter'%20stroke-miterlimit='10'%20stroke-dasharray=''%20stroke-dashoffset='0'%20font-family='none'%20font-weight='none'%20font-size='none'%20text-anchor='none'%20style='mix-blend-mode:%20normal'%3e%3cg%20transform='scale(5.12,5.12)'%3e%3cpath%20d='M16,3c-7.16752,0%20-13,5.83248%20-13,13v18c0,7.16752%205.83248,13%2013,13h18c7.16752,0%2013,-5.83248%2013,-13v-18c0,-7.16752%20-5.83248,-13%20-13,-13zM16,5h18c6.08648,0%2011,4.91352%2011,11v18c0,6.08648%20-4.91352,11%20-11,11h-18c-6.08648,0%20-11,-4.91352%20-11,-11v-18c0,-6.08648%204.91352,-11%2011,-11zM37,11c-1.10457,0%20-2,0.89543%20-2,2c0,1.10457%200.89543,2%202,2c1.10457,0%202,-0.89543%202,-2c0,-1.10457%20-0.89543,-2%20-2,-2zM25,14c-6.06329,0%20-11,4.93671%20-11,11c0,6.06329%204.93671,11%2011,11c6.06329,0%2011,-4.93671%2011,-11c0,-6.06329%20-4.93671,-11%20-11,-11zM25,16c4.98241,0%209,4.01759%209,9c0,4.98241%20-4.01759,9%20-9,9c-4.98241,0%20-9,-4.01759%20-9,-9c0,-4.98241%204.01759,-9%209,-9z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e",bA="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2088.3%2088.3'%20style='enable-background:new%200%200%2088.3%2088.3;'%20xml:space='preserve'%3e%3cg%20fill='%23eaeaea'%3e%3cpath%20class='st0'%20d='M3.9,83.3h17c0.9,0,1.7-0.5,2.2-1.2L69.9,5.2c0.6-1-0.1-2.2-1.3-2.2H52.5c-0.8,0-1.5,0.4-1.9,1.1L3.1,81.9%20C2.8,82.5,3.2,83.3,3.9,83.3z'/%3e%3cpath%20class='st0'%20d='M62.5,82.1l22.1-35.5c0.7-1.1-0.1-2.5-1.4-2.5h-16c-0.6,0-1.2,0.3-1.5,0.8L43,81.2c-0.6,0.9,0.1,2.1,1.2,2.1%20h16.3C61.3,83.3,62.1,82.9,62.5,82.1z'/%3e%3c/g%3e%3c/svg%3e",RA="data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%201000%201000'%20enable-background='new%200%200%201000%201000'%20xml:space='preserve'%20fill='%23eaeaea'%3e%3cg%3e%3cpath%20d='M908,167.8H92c-45.2,0-82,36.8-82,82.1v500.4c0,45.3,36.8,82,82,82H908c45.4,0,82-36.7,82-82V249.9C990,204.6,953.5,167.8,908,167.8z%20M886.2,227.5l-323.6,287c-28.2,25.1-49.1,37.7-62.6,37.7c-13.5,0-34.4-12.6-62.6-37.7l-323.6-287H886.2z%20M72,730.2V281.7l252.1,221.1L72,730.2z%20M116.2,772.8l253.5-225.2l41.5,36.4c24.1,21.1,53.8,31.9,88.8,31.9c35.2,0,64.7-10.8,88.9-31.9l41.5-36.4l253.5,225.2H116.2z%20M928.1,730.2L675.9,502.8l252.1-221.1V730.2z'/%3e%3c/g%3e%3c/svg%3e",CA=[{name:"GitHub",url:"https://github.com/zhuo-cheng/",icon:MA},{name:"LinkedIn",url:"https://www.linkedin.com/in/zhuo-cheng/",icon:EA},{name:"Facebook",url:"https://www.facebook.com/joel.zhuo.cheng/",icon:TA},{name:"X",url:"https://twitter.com/zhuoch/",icon:wA},{name:"Instagram",url:"https://www.instagram.com/zhuo.ch/",icon:AA},{name:"Zenn",url:"https://zenn.dev/zhuo_cheng",icon:bA},{name:"Email",url:"mailto:joel.zhuo.cheng@gmail.com",icon:RA}],PA=()=>zt.jsx("ul",{className:"links",children:CA.map(o=>zt.jsx("li",{className:"link",children:zt.jsxs("a",{href:o.url,target:"_blank",rel:"noreferrer noopener",children:[zt.jsx("img",{src:o.icon,alt:`${o.name} icon`}),zt.jsx("span",{children:o.name})]})},o.name))});function LA(){return zt.jsxs("main",{children:[zt.jsx(SA,{}),zt.jsx(PA,{})]})}const DA=lx.createRoot(document.getElementById("root"));DA.render(zt.jsx(Ti.StrictMode,{children:zt.jsx(LA,{})}));
