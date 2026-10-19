(()=>{var sx=Object.create;var pm=Object.defineProperty;var ox=Object.getOwnPropertyDescriptor;var lx=Object.getOwnPropertyNames;var ux=Object.getPrototypeOf,cx=Object.prototype.hasOwnProperty;var Ln=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(r){throw t=0,r}};var hx=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of lx(t))!cx.call(e,i)&&i!==r&&pm(e,i,{get:()=>t[i],enumerable:!(n=ox(t,i))||n.enumerable});return e};var or=(e,t,r)=>(r=e!=null?sx(ux(e)):{},hx(t||!e||!e.__esModule?pm(r,"default",{value:e,enumerable:!0}):r,e));var Tm=Ln(lt=>{"use strict";var Js=Symbol.for("react.element"),dx=Symbol.for("react.portal"),px=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),vx=Symbol.for("react.context"),_x=Symbol.for("react.forward_ref"),yx=Symbol.for("react.suspense"),xx=Symbol.for("react.memo"),Sx=Symbol.for("react.lazy"),fm=Symbol.iterator;function Mx(e){return e===null||typeof e!="object"?null:(e=fm&&e[fm]||e["@@iterator"],typeof e=="function"?e:null)}var vm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_m=Object.assign,ym={};function Ea(e,t,r){this.props=e,this.context=t,this.refs=ym,this.updater=r||vm}Ea.prototype.isReactComponent={};Ea.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ea.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function xm(){}xm.prototype=Ea.prototype;function Xc(e,t,r){this.props=e,this.context=t,this.refs=ym,this.updater=r||vm}var jc=Xc.prototype=new xm;jc.constructor=Xc;_m(jc,Ea.prototype);jc.isPureReactComponent=!0;var mm=Array.isArray,Sm=Object.prototype.hasOwnProperty,$c={current:null},Mm={key:!0,ref:!0,__self:!0,__source:!0};function wm(e,t,r){var n,i={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Sm.call(t,n)&&!Mm.hasOwnProperty(n)&&(i[n]=t[n]);var o=arguments.length-2;if(o===1)i.children=r;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in o=e.defaultProps,o)i[n]===void 0&&(i[n]=o[n]);return{$$typeof:Js,type:e,key:a,ref:s,props:i,_owner:$c.current}}function wx(e,t){return{$$typeof:Js,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Yc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Js}function Ex(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var gm=/\/+/g;function Wc(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ex(""+e.key):t.toString(36)}function _l(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Js:case dx:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Wc(s,0):n,mm(i)?(r="",e!=null&&(r=e.replace(gm,"$&/")+"/"),_l(i,t,r,"",function(u){return u})):i!=null&&(Yc(i)&&(i=wx(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(gm,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",mm(e))for(var o=0;o<e.length;o++){a=e[o];var l=n+Wc(a,o);s+=_l(a,t,r,l,i)}else if(l=Mx(e),typeof l=="function")for(e=l.call(e),o=0;!(a=e.next()).done;)a=a.value,l=n+Wc(a,o++),s+=_l(a,t,r,l,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function vl(e,t,r){if(e==null)return e;var n=[],i=0;return _l(e,n,"","",function(a){return t.call(r,a,i++)}),n}function Tx(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var _r={current:null},yl={transition:null},bx={ReactCurrentDispatcher:_r,ReactCurrentBatchConfig:yl,ReactCurrentOwner:$c};function Em(){throw Error("act(...) is not supported in production builds of React.")}lt.Children={map:vl,forEach:function(e,t,r){vl(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return vl(e,function(){t++}),t},toArray:function(e){return vl(e,function(t){return t})||[]},only:function(e){if(!Yc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};lt.Component=Ea;lt.Fragment=px;lt.Profiler=mx;lt.PureComponent=Xc;lt.StrictMode=fx;lt.Suspense=yx;lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx;lt.act=Em;lt.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=_m({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=$c.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)Sm.call(t,l)&&!Mm.hasOwnProperty(l)&&(n[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)n.children=r;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];n.children=o}return{$$typeof:Js,type:e.type,key:i,ref:a,props:n,_owner:s}};lt.createContext=function(e){return e={$$typeof:vx,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gx,_context:e},e.Consumer=e};lt.createElement=wm;lt.createFactory=function(e){var t=wm.bind(null,e);return t.type=e,t};lt.createRef=function(){return{current:null}};lt.forwardRef=function(e){return{$$typeof:_x,render:e}};lt.isValidElement=Yc;lt.lazy=function(e){return{$$typeof:Sx,_payload:{_status:-1,_result:e},_init:Tx}};lt.memo=function(e,t){return{$$typeof:xx,type:e,compare:t===void 0?null:t}};lt.startTransition=function(e){var t=yl.transition;yl.transition={};try{e()}finally{yl.transition=t}};lt.unstable_act=Em;lt.useCallback=function(e,t){return _r.current.useCallback(e,t)};lt.useContext=function(e){return _r.current.useContext(e)};lt.useDebugValue=function(){};lt.useDeferredValue=function(e){return _r.current.useDeferredValue(e)};lt.useEffect=function(e,t){return _r.current.useEffect(e,t)};lt.useId=function(){return _r.current.useId()};lt.useImperativeHandle=function(e,t,r){return _r.current.useImperativeHandle(e,t,r)};lt.useInsertionEffect=function(e,t){return _r.current.useInsertionEffect(e,t)};lt.useLayoutEffect=function(e,t){return _r.current.useLayoutEffect(e,t)};lt.useMemo=function(e,t){return _r.current.useMemo(e,t)};lt.useReducer=function(e,t,r){return _r.current.useReducer(e,t,r)};lt.useRef=function(e){return _r.current.useRef(e)};lt.useState=function(e){return _r.current.useState(e)};lt.useSyncExternalStore=function(e,t,r){return _r.current.useSyncExternalStore(e,t,r)};lt.useTransition=function(){return _r.current.useTransition()};lt.version="18.3.1"});var Ta=Ln((pR,bm)=>{"use strict";bm.exports=Tm()});var Om=Ln(Mt=>{"use strict";function Qc(e,t){var r=e.length;e.push(t);e:for(;0<r;){var n=r-1>>>1,i=e[n];if(0<xl(i,t))e[n]=t,e[r]=i,r=n;else break e}}function nn(e){return e.length===0?null:e[0]}function Ml(e){if(e.length===0)return null;var t=e[0],r=e.pop();if(r!==t){e[0]=r;e:for(var n=0,i=e.length,a=i>>>1;n<a;){var s=2*(n+1)-1,o=e[s],l=s+1,u=e[l];if(0>xl(o,r))l<i&&0>xl(u,o)?(e[n]=u,e[l]=r,n=l):(e[n]=o,e[s]=r,n=s);else if(l<i&&0>xl(u,r))e[n]=u,e[l]=r,n=l;else break e}}return t}function xl(e,t){var r=e.sortIndex-t.sortIndex;return r!==0?r:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Am=performance,Mt.unstable_now=function(){return Am.now()}):(qc=Date,Cm=qc.now(),Mt.unstable_now=function(){return qc.now()-Cm});var Am,qc,Cm,yn=[],li=[],Ax=1,$r=null,lr=3,wl=!1,Gi=!1,Qs=!1,Nm=typeof setTimeout=="function"?setTimeout:null,Lm=typeof clearTimeout=="function"?clearTimeout:null,Rm=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Zc(e){for(var t=nn(li);t!==null;){if(t.callback===null)Ml(li);else if(t.startTime<=e)Ml(li),t.sortIndex=t.expirationTime,Qc(yn,t);else break;t=nn(li)}}function eh(e){if(Qs=!1,Zc(e),!Gi)if(nn(yn)!==null)Gi=!0,rh(th);else{var t=nn(li);t!==null&&nh(eh,t.startTime-e)}}function th(e,t){Gi=!1,Qs&&(Qs=!1,Lm(Zs),Zs=-1),wl=!0;var r=lr;try{for(Zc(t),$r=nn(yn);$r!==null&&(!($r.expirationTime>t)||e&&!Um());){var n=$r.callback;if(typeof n=="function"){$r.callback=null,lr=$r.priorityLevel;var i=n($r.expirationTime<=t);t=Mt.unstable_now(),typeof i=="function"?$r.callback=i:$r===nn(yn)&&Ml(yn),Zc(t)}else Ml(yn);$r=nn(yn)}if($r!==null)var a=!0;else{var s=nn(li);s!==null&&nh(eh,s.startTime-t),a=!1}return a}finally{$r=null,lr=r,wl=!1}}var El=!1,Sl=null,Zs=-1,Dm=5,Im=-1;function Um(){return!(Mt.unstable_now()-Im<Dm)}function Jc(){if(Sl!==null){var e=Mt.unstable_now();Im=e;var t=!0;try{t=Sl(!0,e)}finally{t?Ks():(El=!1,Sl=null)}}else El=!1}var Ks;typeof Rm=="function"?Ks=function(){Rm(Jc)}:typeof MessageChannel<"u"?(Kc=new MessageChannel,Pm=Kc.port2,Kc.port1.onmessage=Jc,Ks=function(){Pm.postMessage(null)}):Ks=function(){Nm(Jc,0)};var Kc,Pm;function rh(e){Sl=e,El||(El=!0,Ks())}function nh(e,t){Zs=Nm(function(){e(Mt.unstable_now())},t)}Mt.unstable_IdlePriority=5;Mt.unstable_ImmediatePriority=1;Mt.unstable_LowPriority=4;Mt.unstable_NormalPriority=3;Mt.unstable_Profiling=null;Mt.unstable_UserBlockingPriority=2;Mt.unstable_cancelCallback=function(e){e.callback=null};Mt.unstable_continueExecution=function(){Gi||wl||(Gi=!0,rh(th))};Mt.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Dm=0<e?Math.floor(1e3/e):5};Mt.unstable_getCurrentPriorityLevel=function(){return lr};Mt.unstable_getFirstCallbackNode=function(){return nn(yn)};Mt.unstable_next=function(e){switch(lr){case 1:case 2:case 3:var t=3;break;default:t=lr}var r=lr;lr=t;try{return e()}finally{lr=r}};Mt.unstable_pauseExecution=function(){};Mt.unstable_requestPaint=function(){};Mt.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var r=lr;lr=e;try{return t()}finally{lr=r}};Mt.unstable_scheduleCallback=function(e,t,r){var n=Mt.unstable_now();switch(typeof r=="object"&&r!==null?(r=r.delay,r=typeof r=="number"&&0<r?n+r:n):r=n,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,e={id:Ax++,callback:t,priorityLevel:e,startTime:r,expirationTime:i,sortIndex:-1},r>n?(e.sortIndex=r,Qc(li,e),nn(yn)===null&&e===nn(li)&&(Qs?(Lm(Zs),Zs=-1):Qs=!0,nh(eh,r-n))):(e.sortIndex=i,Qc(yn,e),Gi||wl||(Gi=!0,rh(th))),e};Mt.unstable_shouldYield=Um;Mt.unstable_wrapCallback=function(e){var t=lr;return function(){var r=lr;lr=t;try{return e.apply(this,arguments)}finally{lr=r}}}});var zm=Ln((mR,km)=>{"use strict";km.exports=Om()});var Hv=Ln(Br=>{"use strict";var Cx=Ta(),zr=zm();function oe(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xg=new Set,Mo={};function ra(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Mo[e]=t,e=0;e<t.length;e++)Xg.add(t[e])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bh=Object.prototype.hasOwnProperty,Rx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},Bm={};function Px(e){return bh.call(Bm,e)?!0:bh.call(Fm,e)?!1:Rx.test(e)?Bm[e]=!0:(Fm[e]=!0,!1)}function Nx(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lx(e,t,r,n){if(t===null||typeof t>"u"||Nx(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Sr(e,t,r,n,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var ar={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ar[e]=new Sr(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ar[t]=new Sr(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ar[e]=new Sr(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ar[e]=new Sr(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ar[e]=new Sr(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ar[e]=new Sr(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ar[e]=new Sr(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ar[e]=new Sr(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ar[e]=new Sr(e,5,!1,e.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function yd(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_d,yd);ar[t]=new Sr(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_d,yd);ar[t]=new Sr(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_d,yd);ar[t]=new Sr(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ar[e]=new Sr(e,1,!1,e.toLowerCase(),null,!1,!1)});ar.xlinkHref=new Sr("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ar[e]=new Sr(e,1,!1,e.toLowerCase(),null,!0,!0)});function xd(e,t,r,n){var i=ar.hasOwnProperty(t)?ar[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lx(t,r,i,n)&&(r=null),n||i===null?Px(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Hn=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Tl=Symbol.for("react.element"),Ca=Symbol.for("react.portal"),Ra=Symbol.for("react.fragment"),Sd=Symbol.for("react.strict_mode"),Ah=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),$g=Symbol.for("react.context"),Md=Symbol.for("react.forward_ref"),Ch=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),wd=Symbol.for("react.memo"),ci=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),Vm=Symbol.iterator;function eo(e){return e===null||typeof e!="object"?null:(e=Vm&&e[Vm]||e["@@iterator"],typeof e=="function"?e:null)}var Ut=Object.assign,ih;function lo(e){if(ih===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ih=t&&t[1]||""}return`
`+ih+e}var ah=!1;function sh(e,t){if(!e||ah)return"";ah=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,o=a.length-1;1<=s&&0<=o&&i[s]!==a[o];)o--;for(;1<=s&&0<=o;s--,o--)if(i[s]!==a[o]){if(s!==1||o!==1)do if(s--,o--,0>o||i[s]!==a[o]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=o);break}}}finally{ah=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?lo(e):""}function Dx(e){switch(e.tag){case 5:return lo(e.type);case 16:return lo("Lazy");case 13:return lo("Suspense");case 19:return lo("SuspenseList");case 0:case 2:case 15:return e=sh(e.type,!1),e;case 11:return e=sh(e.type.render,!1),e;case 1:return e=sh(e.type,!0),e;default:return""}}function Ph(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ra:return"Fragment";case Ca:return"Portal";case Ah:return"Profiler";case Sd:return"StrictMode";case Ch:return"Suspense";case Rh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $g:return(e.displayName||"Context")+".Consumer";case jg:return(e._context.displayName||"Context")+".Provider";case Md:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case wd:return t=e.displayName||null,t!==null?t:Ph(e.type)||"Memo";case ci:t=e._payload,e=e._init;try{return Ph(e(t))}catch{}}return null}function Ix(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(t);case 8:return t===Sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ei(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ux(e){var t=qg(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function bl(e){e._valueTracker||(e._valueTracker=Ux(e))}function Jg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=qg(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function eu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nh(e,t){var r=t.checked;return Ut({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Hm(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ei(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kg(e,t){t=t.checked,t!=null&&xd(e,"checked",t,!1)}function Lh(e,t){Kg(e,t);var r=Ei(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Dh(e,t.type,r):t.hasOwnProperty("defaultValue")&&Dh(e,t.type,Ei(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Gm(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Dh(e,t,r){(t!=="number"||eu(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var uo=Array.isArray;function Ba(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ei(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ih(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Ut({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wm(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(oe(92));if(uo(r)){if(1<r.length)throw Error(oe(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ei(r)}}function Qg(e,t){var r=Ei(t.value),n=Ei(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Xm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Al,e0=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Al=Al||document.createElement("div"),Al.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Al.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wo(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ox=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(e){Ox.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),po[t]=po[e]})});function t0(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||po.hasOwnProperty(e)&&po[e]?(""+t).trim():t+"px"}function r0(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=t0(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var kx=Ut({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(e,t){if(t){if(kx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(oe(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(oe(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(oe(61))}if(t.style!=null&&typeof t.style!="object")throw Error(oe(62))}}function kh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function Ed(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fh=null,Va=null,Ha=null;function jm(e){if(e=Vo(e)){if(typeof Fh!="function")throw Error(oe(280));var t=e.stateNode;t&&(t=Cu(t),Fh(e.stateNode,e.type,t))}}function n0(e){Va?Ha?Ha.push(e):Ha=[e]:Va=e}function i0(){if(Va){var e=Va,t=Ha;if(Ha=Va=null,jm(e),t)for(e=0;e<t.length;e++)jm(t[e])}}function a0(e,t){return e(t)}function s0(){}var oh=!1;function o0(e,t,r){if(oh)return e(t,r);oh=!0;try{return a0(e,t,r)}finally{oh=!1,(Va!==null||Ha!==null)&&(s0(),i0())}}function Eo(e,t){var r=e.stateNode;if(r===null)return null;var n=Cu(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(oe(231,t,typeof r));return r}var Bh=!1;if(zn)try{ba={},Object.defineProperty(ba,"passive",{get:function(){Bh=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Bh=!1}var ba;function zx(e,t,r,n,i,a,s,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(c){this.onError(c)}}var fo=!1,tu=null,ru=!1,Vh=null,Fx={onError:function(e){fo=!0,tu=e}};function Bx(e,t,r,n,i,a,s,o,l){fo=!1,tu=null,zx.apply(Fx,arguments)}function Vx(e,t,r,n,i,a,s,o,l){if(Bx.apply(this,arguments),fo){if(fo){var u=tu;fo=!1,tu=null}else throw Error(oe(198));ru||(ru=!0,Vh=u)}}function na(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function l0(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $m(e){if(na(e)!==e)throw Error(oe(188))}function Hx(e){var t=e.alternate;if(!t){if(t=na(e),t===null)throw Error(oe(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return $m(i),e;if(a===n)return $m(i),t;a=a.sibling}throw Error(oe(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,o=i.child;o;){if(o===r){s=!0,r=i,n=a;break}if(o===n){s=!0,n=i,r=a;break}o=o.sibling}if(!s){for(o=a.child;o;){if(o===r){s=!0,r=a,n=i;break}if(o===n){s=!0,n=a,r=i;break}o=o.sibling}if(!s)throw Error(oe(189))}}if(r.alternate!==n)throw Error(oe(190))}if(r.tag!==3)throw Error(oe(188));return r.stateNode.current===r?e:t}function u0(e){return e=Hx(e),e!==null?c0(e):null}function c0(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=c0(e);if(t!==null)return t;e=e.sibling}return null}var h0=zr.unstable_scheduleCallback,Ym=zr.unstable_cancelCallback,Gx=zr.unstable_shouldYield,Wx=zr.unstable_requestPaint,Ft=zr.unstable_now,Xx=zr.unstable_getCurrentPriorityLevel,Td=zr.unstable_ImmediatePriority,d0=zr.unstable_UserBlockingPriority,nu=zr.unstable_NormalPriority,jx=zr.unstable_LowPriority,p0=zr.unstable_IdlePriority,Eu=null,wn=null;function $x(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(Eu,e,void 0,(e.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:Jx,Yx=Math.log,qx=Math.LN2;function Jx(e){return e>>>=0,e===0?32:31-(Yx(e)/qx|0)|0}var Cl=64,Rl=4194304;function co(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function iu(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var o=s&~i;o!==0?n=co(o):(a&=s,a!==0&&(n=co(a)))}else s=r&~i,s!==0?n=co(s):a!==0&&(n=co(a));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-un(t),i=1<<r,n|=e[r],t&=~i;return n}function Kx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qx(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-un(a),o=1<<s,l=i[s];l===-1?((o&r)===0||(o&n)!==0)&&(i[s]=Kx(o,t)):l<=t&&(e.expiredLanes|=o),a&=~o}}function Hh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function f0(){var e=Cl;return Cl<<=1,(Cl&4194240)===0&&(Cl=64),e}function lh(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Fo(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-un(t),e[t]=r}function Zx(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-un(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function bd(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-un(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var mt=0;function m0(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var g0,Ad,v0,_0,y0,Gh=!1,Pl=[],gi=null,vi=null,_i=null,To=new Map,bo=new Map,di=[],eS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qm(e,t){switch(e){case"focusin":case"focusout":gi=null;break;case"dragenter":case"dragleave":vi=null;break;case"mouseover":case"mouseout":_i=null;break;case"pointerover":case"pointerout":To.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(t.pointerId)}}function to(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vo(t),t!==null&&Ad(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tS(e,t,r,n,i){switch(t){case"focusin":return gi=to(gi,e,t,r,n,i),!0;case"dragenter":return vi=to(vi,e,t,r,n,i),!0;case"mouseover":return _i=to(_i,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return To.set(a,to(To.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,bo.set(a,to(bo.get(a)||null,e,t,r,n,i)),!0}return!1}function x0(e){var t=ji(e.target);if(t!==null){var r=na(t);if(r!==null){if(t=r.tag,t===13){if(t=l0(r),t!==null){e.blockedOn=t,y0(e.priority,function(){v0(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Wl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Wh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);zh=n,r.target.dispatchEvent(n),zh=null}else return t=Vo(r),t!==null&&Ad(t),e.blockedOn=r,!1;t.shift()}return!0}function Jm(e,t,r){Wl(e)&&r.delete(t)}function rS(){Gh=!1,gi!==null&&Wl(gi)&&(gi=null),vi!==null&&Wl(vi)&&(vi=null),_i!==null&&Wl(_i)&&(_i=null),To.forEach(Jm),bo.forEach(Jm)}function ro(e,t){e.blockedOn===t&&(e.blockedOn=null,Gh||(Gh=!0,zr.unstable_scheduleCallback(zr.unstable_NormalPriority,rS)))}function Ao(e){function t(i){return ro(i,e)}if(0<Pl.length){ro(Pl[0],e);for(var r=1;r<Pl.length;r++){var n=Pl[r];n.blockedOn===e&&(n.blockedOn=null)}}for(gi!==null&&ro(gi,e),vi!==null&&ro(vi,e),_i!==null&&ro(_i,e),To.forEach(t),bo.forEach(t),r=0;r<di.length;r++)n=di[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<di.length&&(r=di[0],r.blockedOn===null);)x0(r),r.blockedOn===null&&di.shift()}var Ga=Hn.ReactCurrentBatchConfig,au=!0;function nS(e,t,r,n){var i=mt,a=Ga.transition;Ga.transition=null;try{mt=1,Cd(e,t,r,n)}finally{mt=i,Ga.transition=a}}function iS(e,t,r,n){var i=mt,a=Ga.transition;Ga.transition=null;try{mt=4,Cd(e,t,r,n)}finally{mt=i,Ga.transition=a}}function Cd(e,t,r,n){if(au){var i=Wh(e,t,r,n);if(i===null)mh(e,t,n,su,r),qm(e,n);else if(tS(i,e,t,r,n))n.stopPropagation();else if(qm(e,n),t&4&&-1<eS.indexOf(e)){for(;i!==null;){var a=Vo(i);if(a!==null&&g0(a),a=Wh(e,t,r,n),a===null&&mh(e,t,n,su,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else mh(e,t,n,null,r)}}var su=null;function Wh(e,t,r,n){if(su=null,e=Ed(n),e=ji(e),e!==null)if(t=na(e),t===null)e=null;else if(r=t.tag,r===13){if(e=l0(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return su=e,null}function S0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case Td:return 1;case d0:return 4;case nu:case jx:return 16;case p0:return 536870912;default:return 16}default:return 16}}var fi=null,Rd=null,Xl=null;function M0(){if(Xl)return Xl;var e,t=Rd,r=t.length,n,i="value"in fi?fi.value:fi.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[a-n];n++);return Xl=i.slice(e,1<n?1-n:void 0)}function jl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nl(){return!0}function Km(){return!1}function Fr(e){function t(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(r=e[o],this[o]=r?r(a):a[o]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Nl:Km,this.isPropagationStopped=Km,this}return Ut(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),t}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pd=Fr(Za),Bo=Ut({},Za,{view:0,detail:0}),aS=Fr(Bo),uh,ch,no,Tu=Ut({},Bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==no&&(no&&e.type==="mousemove"?(uh=e.screenX-no.screenX,ch=e.screenY-no.screenY):ch=uh=0,no=e),uh)},movementY:function(e){return"movementY"in e?e.movementY:ch}}),Qm=Fr(Tu),sS=Ut({},Tu,{dataTransfer:0}),oS=Fr(sS),lS=Ut({},Bo,{relatedTarget:0}),hh=Fr(lS),uS=Ut({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Fr(uS),hS=Ut({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dS=Fr(hS),pS=Ut({},Za,{data:0}),Zm=Fr(pS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vS(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=gS[e])?!!t[e]:!1}function Nd(){return vS}var _S=Ut({},Bo,{key:function(e){if(e.key){var t=fS[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?mS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nd,charCode:function(e){return e.type==="keypress"?jl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yS=Fr(_S),xS=Ut({},Tu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Fr(xS),SS=Ut({},Bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nd}),MS=Fr(SS),wS=Ut({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),ES=Fr(wS),TS=Ut({},Tu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),bS=Fr(TS),AS=[9,13,27,32],Ld=zn&&"CompositionEvent"in window,mo=null;zn&&"documentMode"in document&&(mo=document.documentMode);var CS=zn&&"TextEvent"in window&&!mo,w0=zn&&(!Ld||mo&&8<mo&&11>=mo),tg=" ",rg=!1;function E0(e,t){switch(e){case"keyup":return AS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function T0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function RS(e,t){switch(e){case"compositionend":return T0(t);case"keypress":return t.which!==32?null:(rg=!0,tg);case"textInput":return e=t.data,e===tg&&rg?null:e;default:return null}}function PS(e,t){if(Pa)return e==="compositionend"||!Ld&&E0(e,t)?(e=M0(),Xl=Rd=fi=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return w0&&t.locale!=="ko"?null:t.data;default:return null}}var NS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!NS[e.type]:t==="textarea"}function b0(e,t,r,n){n0(n),t=ou(t,"onChange"),0<t.length&&(r=new Pd("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var go=null,Co=null;function LS(e){k0(e,0)}function bu(e){var t=Da(e);if(Jg(t))return e}function DS(e,t){if(e==="change")return t}var A0=!1;zn&&(zn?(Dl="oninput"in document,Dl||(dh=document.createElement("div"),dh.setAttribute("oninput","return;"),Dl=typeof dh.oninput=="function"),Ll=Dl):Ll=!1,A0=Ll&&(!document.documentMode||9<document.documentMode));var Ll,Dl,dh;function ig(){go&&(go.detachEvent("onpropertychange",C0),Co=go=null)}function C0(e){if(e.propertyName==="value"&&bu(Co)){var t=[];b0(t,Co,e,Ed(e)),o0(LS,t)}}function IS(e,t,r){e==="focusin"?(ig(),go=t,Co=r,go.attachEvent("onpropertychange",C0)):e==="focusout"&&ig()}function US(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bu(Co)}function OS(e,t){if(e==="click")return bu(t)}function kS(e,t){if(e==="input"||e==="change")return bu(t)}function zS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var hn=typeof Object.is=="function"?Object.is:zS;function Ro(e,t){if(hn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!bh.call(t,i)||!hn(e[i],t[i]))return!1}return!0}function ag(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sg(e,t){var r=ag(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ag(r)}}function R0(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?R0(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function P0(){for(var e=window,t=eu();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=eu(e.document)}return t}function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function FS(e){var t=P0(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&R0(r.ownerDocument.documentElement,r)){if(n!==null&&Dd(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=sg(r,a);var s=sg(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var BS=zn&&"documentMode"in document&&11>=document.documentMode,Na=null,Xh=null,vo=null,jh=!1;function og(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;jh||Na==null||Na!==eu(n)||(n=Na,"selectionStart"in n&&Dd(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),vo&&Ro(vo,n)||(vo=n,n=ou(Xh,"onSelect"),0<n.length&&(t=new Pd("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Na)))}function Il(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var La={animationend:Il("Animation","AnimationEnd"),animationiteration:Il("Animation","AnimationIteration"),animationstart:Il("Animation","AnimationStart"),transitionend:Il("Transition","TransitionEnd")},ph={},N0={};zn&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete La.animationend.animation,delete La.animationiteration.animation,delete La.animationstart.animation),"TransitionEvent"in window||delete La.transitionend.transition);function Au(e){if(ph[e])return ph[e];if(!La[e])return e;var t=La[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in N0)return ph[e]=t[r];return e}var L0=Au("animationend"),D0=Au("animationiteration"),I0=Au("animationstart"),U0=Au("transitionend"),O0=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(e,t){O0.set(e,t),ra(t,[e])}for(Ul=0;Ul<lg.length;Ul++)Ol=lg[Ul],ug=Ol.toLowerCase(),cg=Ol[0].toUpperCase()+Ol.slice(1),bi(ug,"on"+cg);var Ol,ug,cg,Ul;bi(L0,"onAnimationEnd");bi(D0,"onAnimationIteration");bi(I0,"onAnimationStart");bi("dblclick","onDoubleClick");bi("focusin","onFocus");bi("focusout","onBlur");bi(U0,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);ra("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ra("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ra("onBeforeInput",["compositionend","keypress","textInput","paste"]);ra("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ra("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),VS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ho));function hg(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Vx(n,t,void 0,e),e.currentTarget=null}function k0(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==a&&i.isPropagationStopped())break e;hg(i,o,u),a=l}else for(s=0;s<n.length;s++){if(o=n[s],l=o.instance,u=o.currentTarget,o=o.listener,l!==a&&i.isPropagationStopped())break e;hg(i,o,u),a=l}}}if(ru)throw e=Vh,ru=!1,Vh=null,e}function Ct(e,t){var r=t[Kh];r===void 0&&(r=t[Kh]=new Set);var n=e+"__bubble";r.has(n)||(z0(t,e,2,!1),r.add(n))}function fh(e,t,r){var n=0;t&&(n|=4),z0(r,e,n,t)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Po(e){if(!e[kl]){e[kl]=!0,Xg.forEach(function(r){r!=="selectionchange"&&(VS.has(r)||fh(r,!1,e),fh(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kl]||(t[kl]=!0,fh("selectionchange",!1,t))}}function z0(e,t,r,n){switch(S0(t)){case 1:var i=nS;break;case 4:i=iS;break;default:i=Cd}r=i.bind(null,t,r,e),i=void 0,!Bh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function mh(e,t,r,n,i){var a=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;o!==null;){if(s=ji(o),s===null)return;if(l=s.tag,l===5||l===6){n=a=s;continue e}o=o.parentNode}}n=n.return}o0(function(){var u=a,c=Ed(r),h=[];e:{var d=O0.get(e);if(d!==void 0){var f=Pd,y=e;switch(e){case"keypress":if(jl(r)===0)break e;case"keydown":case"keyup":f=yS;break;case"focusin":y="focus",f=hh;break;case"focusout":y="blur",f=hh;break;case"beforeblur":case"afterblur":f=hh;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=Qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=MS;break;case L0:case D0:case I0:f=cS;break;case U0:f=ES;break;case"scroll":f=aS;break;case"wheel":f=bS;break;case"copy":case"cut":case"paste":f=dS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=eg}var _=(t&4)!==0,v=!_&&e==="scroll",p=_?d!==null?d+"Capture":null:d;_=[];for(var m=u,g;m!==null;){g=m;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,p!==null&&(x=Eo(m,p),x!=null&&_.push(No(m,x,g)))),v)break;m=m.return}0<_.length&&(d=new f(d,y,null,r,c),h.push({event:d,listeners:_}))}}if((t&7)===0){e:{if(d=e==="mouseover"||e==="pointerover",f=e==="mouseout"||e==="pointerout",d&&r!==zh&&(y=r.relatedTarget||r.fromElement)&&(ji(y)||y[Fn]))break e;if((f||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,f?(y=r.relatedTarget||r.toElement,f=u,y=y?ji(y):null,y!==null&&(v=na(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(f=null,y=u),f!==y)){if(_=Qm,x="onMouseLeave",p="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(_=eg,x="onPointerLeave",p="onPointerEnter",m="pointer"),v=f==null?d:Da(f),g=y==null?d:Da(y),d=new _(x,m+"leave",f,r,c),d.target=v,d.relatedTarget=g,x=null,ji(c)===u&&(_=new _(p,m+"enter",y,r,c),_.target=g,_.relatedTarget=v,x=_),v=x,f&&y)t:{for(_=f,p=y,m=0,g=_;g;g=Aa(g))m++;for(g=0,x=p;x;x=Aa(x))g++;for(;0<m-g;)_=Aa(_),m--;for(;0<g-m;)p=Aa(p),g--;for(;m--;){if(_===p||p!==null&&_===p.alternate)break t;_=Aa(_),p=Aa(p)}_=null}else _=null;f!==null&&dg(h,d,f,_,!1),y!==null&&v!==null&&dg(h,v,y,_,!0)}}e:{if(d=u?Da(u):window,f=d.nodeName&&d.nodeName.toLowerCase(),f==="select"||f==="input"&&d.type==="file")var P=DS;else if(ng(d))if(A0)P=kS;else{P=US;var T=IS}else(f=d.nodeName)&&f.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=OS);if(P&&(P=P(e,u))){b0(h,P,r,c);break e}T&&T(e,d,u),e==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&Dh(d,"number",d.value)}switch(T=u?Da(u):window,e){case"focusin":(ng(T)||T.contentEditable==="true")&&(Na=T,Xh=u,vo=null);break;case"focusout":vo=Xh=Na=null;break;case"mousedown":jh=!0;break;case"contextmenu":case"mouseup":case"dragend":jh=!1,og(h,r,c);break;case"selectionchange":if(BS)break;case"keydown":case"keyup":og(h,r,c)}var b;if(Ld)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Pa?E0(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(w0&&r.locale!=="ko"&&(Pa||R!=="onCompositionStart"?R==="onCompositionEnd"&&Pa&&(b=M0()):(fi=c,Rd="value"in fi?fi.value:fi.textContent,Pa=!0)),T=ou(u,R),0<T.length&&(R=new Zm(R,e,null,r,c),h.push({event:R,listeners:T}),b?R.data=b:(b=T0(r),b!==null&&(R.data=b)))),(b=CS?RS(e,r):PS(e,r))&&(u=ou(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,r,c),h.push({event:c,listeners:u}),c.data=b))}k0(h,t)})}function No(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ou(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Eo(e,r),a!=null&&n.unshift(No(e,a,i)),a=Eo(e,t),a!=null&&n.push(No(e,a,i))),e=e.return}return n}function Aa(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function dg(e,t,r,n,i){for(var a=t._reactName,s=[];r!==null&&r!==n;){var o=r,l=o.alternate,u=o.stateNode;if(l!==null&&l===n)break;o.tag===5&&u!==null&&(o=u,i?(l=Eo(r,a),l!=null&&s.unshift(No(r,l,o))):i||(l=Eo(r,a),l!=null&&s.push(No(r,l,o)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var HS=/\r\n?/g,GS=/\u0000|\uFFFD/g;function pg(e){return(typeof e=="string"?e:""+e).replace(HS,`
`).replace(GS,"")}function zl(e,t,r){if(t=pg(t),pg(e)!==t&&r)throw Error(oe(425))}function lu(){}var $h=null,Yh=null;function qh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jh=typeof setTimeout=="function"?setTimeout:void 0,WS=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,XS=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(e){return fg.resolve(null).then(e).catch(jS)}:Jh;function jS(e){setTimeout(function(){throw e})}function gh(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Ao(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Ao(t)}function yi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function mg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var es=Math.random().toString(36).slice(2),Mn="__reactFiber$"+es,Lo="__reactProps$"+es,Fn="__reactContainer$"+es,Kh="__reactEvents$"+es,$S="__reactListeners$"+es,YS="__reactHandles$"+es;function ji(e){var t=e[Mn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Fn]||r[Mn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=mg(e);e!==null;){if(r=e[Mn])return r;e=mg(e)}return t}e=r,r=e.parentNode}return null}function Vo(e){return e=e[Mn]||e[Fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Da(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(oe(33))}function Cu(e){return e[Lo]||null}var Qh=[],Ia=-1;function Ai(e){return{current:e}}function Rt(e){0>Ia||(e.current=Qh[Ia],Qh[Ia]=null,Ia--)}function wt(e,t){Ia++,Qh[Ia]=e.current,e.current=t}var Ti={},dr=Ai(Ti),Rr=Ai(!1),Ki=Ti;function $a(e,t){var r=e.type.contextTypes;if(!r)return Ti;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pr(e){return e=e.childContextTypes,e!=null}function uu(){Rt(Rr),Rt(dr)}function gg(e,t,r){if(dr.current!==Ti)throw Error(oe(168));wt(dr,t),wt(Rr,r)}function F0(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(oe(108,Ix(e)||"Unknown",i));return Ut({},r,n)}function cu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ti,Ki=dr.current,wt(dr,e),wt(Rr,Rr.current),!0}function vg(e,t,r){var n=e.stateNode;if(!n)throw Error(oe(169));r?(e=F0(e,t,Ki),n.__reactInternalMemoizedMergedChildContext=e,Rt(Rr),Rt(dr),wt(dr,e)):Rt(Rr),wt(Rr,r)}var In=null,Ru=!1,vh=!1;function B0(e){In===null?In=[e]:In.push(e)}function qS(e){Ru=!0,B0(e)}function Ci(){if(!vh&&In!==null){vh=!0;var e=0,t=mt;try{var r=In;for(mt=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}In=null,Ru=!1}catch(i){throw In!==null&&(In=In.slice(e+1)),h0(Td,Ci),i}finally{mt=t,vh=!1}}return null}var Ua=[],Oa=0,hu=null,du=0,Yr=[],qr=0,Qi=null,Un=1,On="";function Wi(e,t){Ua[Oa++]=du,Ua[Oa++]=hu,hu=e,du=t}function V0(e,t,r){Yr[qr++]=Un,Yr[qr++]=On,Yr[qr++]=Qi,Qi=e;var n=Un;e=On;var i=32-un(n)-1;n&=~(1<<i),r+=1;var a=32-un(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Un=1<<32-un(t)+i|r<<i|n,On=a+e}else Un=1<<a|r<<i|n,On=e}function Id(e){e.return!==null&&(Wi(e,1),V0(e,1,0))}function Ud(e){for(;e===hu;)hu=Ua[--Oa],Ua[Oa]=null,du=Ua[--Oa],Ua[Oa]=null;for(;e===Qi;)Qi=Yr[--qr],Yr[qr]=null,On=Yr[--qr],Yr[qr]=null,Un=Yr[--qr],Yr[qr]=null}var kr=null,Or=null,Lt=!1,ln=null;function H0(e,t){var r=Jr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function _g(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kr=e,Or=yi(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kr=e,Or=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Qi!==null?{id:Un,overflow:On}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Jr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,kr=e,Or=null,!0):!1;default:return!1}}function Zh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ed(e){if(Lt){var t=Or;if(t){var r=t;if(!_g(e,t)){if(Zh(e))throw Error(oe(418));t=yi(r.nextSibling);var n=kr;t&&_g(e,t)?H0(n,r):(e.flags=e.flags&-4097|2,Lt=!1,kr=e)}}else{if(Zh(e))throw Error(oe(418));e.flags=e.flags&-4097|2,Lt=!1,kr=e}}}function yg(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kr=e}function Fl(e){if(e!==kr)return!1;if(!Lt)return yg(e),Lt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qh(e.type,e.memoizedProps)),t&&(t=Or)){if(Zh(e))throw G0(),Error(oe(418));for(;t;)H0(e,t),t=yi(t.nextSibling)}if(yg(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(oe(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Or=yi(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Or=null}}else Or=kr?yi(e.stateNode.nextSibling):null;return!0}function G0(){for(var e=Or;e;)e=yi(e.nextSibling)}function Ya(){Or=kr=null,Lt=!1}function Od(e){ln===null?ln=[e]:ln.push(e)}var JS=Hn.ReactCurrentBatchConfig;function io(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(oe(309));var n=r.stateNode}if(!n)throw Error(oe(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var o=i.refs;s===null?delete o[a]:o[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(oe(284));if(!r._owner)throw Error(oe(290,e))}return e}function Bl(e,t){throw e=Object.prototype.toString.call(t),Error(oe(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xg(e){var t=e._init;return t(e._payload)}function W0(e){function t(p,m){if(e){var g=p.deletions;g===null?(p.deletions=[m],p.flags|=16):g.push(m)}}function r(p,m){if(!e)return null;for(;m!==null;)t(p,m),m=m.sibling;return null}function n(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=wi(p,m),p.index=0,p.sibling=null,p}function a(p,m,g){return p.index=g,e?(g=p.alternate,g!==null?(g=g.index,g<m?(p.flags|=2,m):g):(p.flags|=2,m)):(p.flags|=1048576,m)}function s(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,m,g,x){return m===null||m.tag!==6?(m=Eh(g,p.mode,x),m.return=p,m):(m=i(m,g),m.return=p,m)}function l(p,m,g,x){var P=g.type;return P===Ra?c(p,m,g.props.children,x,g.key):m!==null&&(m.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ci&&xg(P)===m.type)?(x=i(m,g.props),x.ref=io(p,m,g),x.return=p,x):(x=Zl(g.type,g.key,g.props,null,p.mode,x),x.ref=io(p,m,g),x.return=p,x)}function u(p,m,g,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==g.containerInfo||m.stateNode.implementation!==g.implementation?(m=Th(g,p.mode,x),m.return=p,m):(m=i(m,g.children||[]),m.return=p,m)}function c(p,m,g,x,P){return m===null||m.tag!==7?(m=Ji(g,p.mode,x,P),m.return=p,m):(m=i(m,g),m.return=p,m)}function h(p,m,g){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Eh(""+m,p.mode,g),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Tl:return g=Zl(m.type,m.key,m.props,null,p.mode,g),g.ref=io(p,null,m),g.return=p,g;case Ca:return m=Th(m,p.mode,g),m.return=p,m;case ci:var x=m._init;return h(p,x(m._payload),g)}if(uo(m)||eo(m))return m=Ji(m,p.mode,g,null),m.return=p,m;Bl(p,m)}return null}function d(p,m,g,x){var P=m!==null?m.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:o(p,m,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:return g.key===P?l(p,m,g,x):null;case Ca:return g.key===P?u(p,m,g,x):null;case ci:return P=g._init,d(p,m,P(g._payload),x)}if(uo(g)||eo(g))return P!==null?null:c(p,m,g,x,null);Bl(p,g)}return null}function f(p,m,g,x,P){if(typeof x=="string"&&x!==""||typeof x=="number")return p=p.get(g)||null,o(m,p,""+x,P);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Tl:return p=p.get(x.key===null?g:x.key)||null,l(m,p,x,P);case Ca:return p=p.get(x.key===null?g:x.key)||null,u(m,p,x,P);case ci:var T=x._init;return f(p,m,g,T(x._payload),P)}if(uo(x)||eo(x))return p=p.get(g)||null,c(m,p,x,P,null);Bl(m,x)}return null}function y(p,m,g,x){for(var P=null,T=null,b=m,R=m=0,E=null;b!==null&&R<g.length;R++){b.index>R?(E=b,b=null):E=b.sibling;var M=d(p,b,g[R],x);if(M===null){b===null&&(b=E);break}e&&b&&M.alternate===null&&t(p,b),m=a(M,m,R),T===null?P=M:T.sibling=M,T=M,b=E}if(R===g.length)return r(p,b),Lt&&Wi(p,R),P;if(b===null){for(;R<g.length;R++)b=h(p,g[R],x),b!==null&&(m=a(b,m,R),T===null?P=b:T.sibling=b,T=b);return Lt&&Wi(p,R),P}for(b=n(p,b);R<g.length;R++)E=f(b,p,R,g[R],x),E!==null&&(e&&E.alternate!==null&&b.delete(E.key===null?R:E.key),m=a(E,m,R),T===null?P=E:T.sibling=E,T=E);return e&&b.forEach(function(N){return t(p,N)}),Lt&&Wi(p,R),P}function _(p,m,g,x){var P=eo(g);if(typeof P!="function")throw Error(oe(150));if(g=P.call(g),g==null)throw Error(oe(151));for(var T=P=null,b=m,R=m=0,E=null,M=g.next();b!==null&&!M.done;R++,M=g.next()){b.index>R?(E=b,b=null):E=b.sibling;var N=d(p,b,M.value,x);if(N===null){b===null&&(b=E);break}e&&b&&N.alternate===null&&t(p,b),m=a(N,m,R),T===null?P=N:T.sibling=N,T=N,b=E}if(M.done)return r(p,b),Lt&&Wi(p,R),P;if(b===null){for(;!M.done;R++,M=g.next())M=h(p,M.value,x),M!==null&&(m=a(M,m,R),T===null?P=M:T.sibling=M,T=M);return Lt&&Wi(p,R),P}for(b=n(p,b);!M.done;R++,M=g.next())M=f(b,p,R,M.value,x),M!==null&&(e&&M.alternate!==null&&b.delete(M.key===null?R:M.key),m=a(M,m,R),T===null?P=M:T.sibling=M,T=M);return e&&b.forEach(function(k){return t(p,k)}),Lt&&Wi(p,R),P}function v(p,m,g,x){if(typeof g=="object"&&g!==null&&g.type===Ra&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Tl:e:{for(var P=g.key,T=m;T!==null;){if(T.key===P){if(P=g.type,P===Ra){if(T.tag===7){r(p,T.sibling),m=i(T,g.props.children),m.return=p,p=m;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ci&&xg(P)===T.type){r(p,T.sibling),m=i(T,g.props),m.ref=io(p,T,g),m.return=p,p=m;break e}r(p,T);break}else t(p,T);T=T.sibling}g.type===Ra?(m=Ji(g.props.children,p.mode,x,g.key),m.return=p,p=m):(x=Zl(g.type,g.key,g.props,null,p.mode,x),x.ref=io(p,m,g),x.return=p,p=x)}return s(p);case Ca:e:{for(T=g.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===g.containerInfo&&m.stateNode.implementation===g.implementation){r(p,m.sibling),m=i(m,g.children||[]),m.return=p,p=m;break e}else{r(p,m);break}else t(p,m);m=m.sibling}m=Th(g,p.mode,x),m.return=p,p=m}return s(p);case ci:return T=g._init,v(p,m,T(g._payload),x)}if(uo(g))return y(p,m,g,x);if(eo(g))return _(p,m,g,x);Bl(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,m!==null&&m.tag===6?(r(p,m.sibling),m=i(m,g),m.return=p,p=m):(r(p,m),m=Eh(g,p.mode,x),m.return=p,p=m),s(p)):r(p,m)}return v}var qa=W0(!0),X0=W0(!1),pu=Ai(null),fu=null,ka=null,kd=null;function zd(){kd=ka=fu=null}function Fd(e){var t=pu.current;Rt(pu),e._currentValue=t}function td(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Wa(e,t){fu=e,kd=ka=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Cr=!0),e.firstContext=null)}function Qr(e){var t=e._currentValue;if(kd!==e)if(e={context:e,memoizedValue:t,next:null},ka===null){if(fu===null)throw Error(oe(308));ka=e,fu.dependencies={lanes:0,firstContext:e}}else ka=ka.next=e;return t}var $i=null;function Bd(e){$i===null?$i=[e]:$i.push(e)}function j0(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Bd(t)):(r.next=i.next,i.next=r),t.interleaved=r,Bn(e,n)}function Bn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var hi=!1;function Vd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xi(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ft&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Bn(e,r)}return i=n.interleaved,i===null?(t.next=t,Bd(n)):(t.next=i.next,i.next=t),n.interleaved=t,Bn(e,r)}function $l(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bd(e,r)}}function Sg(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function mu(e,t,r,n){var i=e.updateQueue;hi=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,s===null?a=u:s.next=u,s=l;var c=e.alternate;c!==null&&(c=c.updateQueue,o=c.lastBaseUpdate,o!==s&&(o===null?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(a!==null){var h=i.baseState;s=0,c=u=l=null,o=a;do{var d=o.lane,f=o.eventTime;if((n&d)===d){c!==null&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=e,_=o;switch(d=t,f=r,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(f,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(f,h,d):y,d==null)break e;h=Ut({},h,d);break e;case 2:hi=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},c===null?(u=c=f,l=h):c=c.next=f,s|=d;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;d=o,o=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);ea|=s,e.lanes=s,e.memoizedState=h}}function Mg(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(oe(191,i));i.call(n)}}}var Ho={},En=Ai(Ho),Do=Ai(Ho),Io=Ai(Ho);function Yi(e){if(e===Ho)throw Error(oe(174));return e}function Hd(e,t){switch(wt(Io,t),wt(Do,e),wt(En,Ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Uh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Uh(t,e)}Rt(En),wt(En,t)}function Ja(){Rt(En),Rt(Do),Rt(Io)}function Y0(e){Yi(Io.current);var t=Yi(En.current),r=Uh(t,e.type);t!==r&&(wt(Do,e),wt(En,r))}function Gd(e){Do.current===e&&(Rt(En),Rt(Do))}var Dt=Ai(0);function gu(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _h=[];function Wd(){for(var e=0;e<_h.length;e++)_h[e]._workInProgressVersionPrimary=null;_h.length=0}var Yl=Hn.ReactCurrentDispatcher,yh=Hn.ReactCurrentBatchConfig,Zi=0,It=null,Wt=null,qt=null,vu=!1,_o=!1,Uo=0,KS=0;function ur(){throw Error(oe(321))}function Xd(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!hn(e[r],t[r]))return!1;return!0}function jd(e,t,r,n,i,a){if(Zi=a,It=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yl.current=e===null||e.memoizedState===null?tM:rM,e=r(n,i),_o){a=0;do{if(_o=!1,Uo=0,25<=a)throw Error(oe(301));a+=1,qt=Wt=null,t.updateQueue=null,Yl.current=nM,e=r(n,i)}while(_o)}if(Yl.current=_u,t=Wt!==null&&Wt.next!==null,Zi=0,qt=Wt=It=null,vu=!1,t)throw Error(oe(300));return e}function $d(){var e=Uo!==0;return Uo=0,e}function Sn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?It.memoizedState=qt=e:qt=qt.next=e,qt}function Zr(){if(Wt===null){var e=It.alternate;e=e!==null?e.memoizedState:null}else e=Wt.next;var t=qt===null?It.memoizedState:qt.next;if(t!==null)qt=t,Wt=e;else{if(e===null)throw Error(oe(310));Wt=e,e={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},qt===null?It.memoizedState=qt=e:qt=qt.next=e}return qt}function Oo(e,t){return typeof t=="function"?t(e):t}function xh(e){var t=Zr(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var n=Wt,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var o=s=null,l=null,u=a;do{var c=u.lane;if((Zi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,s=n):l=l.next=h,It.lanes|=c,ea|=c}u=u.next}while(u!==null&&u!==a);l===null?s=n:l.next=o,hn(n,t.memoizedState)||(Cr=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=l,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,It.lanes|=a,ea|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Sh(e){var t=Zr(),r=t.queue;if(r===null)throw Error(oe(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);hn(a,t.memoizedState)||(Cr=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function q0(){}function J0(e,t){var r=It,n=Zr(),i=t(),a=!hn(n.memoizedState,i);if(a&&(n.memoizedState=i,Cr=!0),n=n.queue,Yd(Z0.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||qt!==null&&qt.memoizedState.tag&1){if(r.flags|=2048,ko(9,Q0.bind(null,r,n,i,t),void 0,null),Jt===null)throw Error(oe(349));(Zi&30)!==0||K0(r,t,i)}return i}function K0(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=It.updateQueue,t===null?(t={lastEffect:null,stores:null},It.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Q0(e,t,r,n){t.value=r,t.getSnapshot=n,ev(t)&&tv(e)}function Z0(e,t,r){return r(function(){ev(t)&&tv(e)})}function ev(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!hn(e,r)}catch{return!0}}function tv(e){var t=Bn(e,1);t!==null&&cn(t,e,1,-1)}function wg(e){var t=Sn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t.queue=e,e=e.dispatch=eM.bind(null,It,e),[t.memoizedState,e]}function ko(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=It.updateQueue,t===null?(t={lastEffect:null,stores:null},It.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function rv(){return Zr().memoizedState}function ql(e,t,r,n){var i=Sn();It.flags|=e,i.memoizedState=ko(1|t,r,void 0,n===void 0?null:n)}function Pu(e,t,r,n){var i=Zr();n=n===void 0?null:n;var a=void 0;if(Wt!==null){var s=Wt.memoizedState;if(a=s.destroy,n!==null&&Xd(n,s.deps)){i.memoizedState=ko(t,r,a,n);return}}It.flags|=e,i.memoizedState=ko(1|t,r,a,n)}function Eg(e,t){return ql(8390656,8,e,t)}function Yd(e,t){return Pu(2048,8,e,t)}function nv(e,t){return Pu(4,2,e,t)}function iv(e,t){return Pu(4,4,e,t)}function av(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sv(e,t,r){return r=r!=null?r.concat([e]):null,Pu(4,4,av.bind(null,t,e),r)}function qd(){}function ov(e,t){var r=Zr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xd(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function lv(e,t){var r=Zr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Xd(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function uv(e,t,r){return(Zi&21)===0?(e.baseState&&(e.baseState=!1,Cr=!0),e.memoizedState=r):(hn(r,t)||(r=f0(),It.lanes|=r,ea|=r,e.baseState=!0),t)}function QS(e,t){var r=mt;mt=r!==0&&4>r?r:4,e(!0);var n=yh.transition;yh.transition={};try{e(!1),t()}finally{mt=r,yh.transition=n}}function cv(){return Zr().memoizedState}function ZS(e,t,r){var n=Mi(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},hv(e))dv(t,r);else if(r=j0(e,t,r,n),r!==null){var i=xr();cn(r,e,n,i),pv(r,t,n)}}function eM(e,t,r){var n=Mi(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(hv(e))dv(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,o=a(s,r);if(i.hasEagerState=!0,i.eagerState=o,hn(o,s)){var l=t.interleaved;l===null?(i.next=i,Bd(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}r=j0(e,t,i,n),r!==null&&(i=xr(),cn(r,e,n,i),pv(r,t,n))}}function hv(e){var t=e.alternate;return e===It||t!==null&&t===It}function dv(e,t){_o=vu=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function pv(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,bd(e,r)}}var _u={readContext:Qr,useCallback:ur,useContext:ur,useEffect:ur,useImperativeHandle:ur,useInsertionEffect:ur,useLayoutEffect:ur,useMemo:ur,useReducer:ur,useRef:ur,useState:ur,useDebugValue:ur,useDeferredValue:ur,useTransition:ur,useMutableSource:ur,useSyncExternalStore:ur,useId:ur,unstable_isNewReconciler:!1},tM={readContext:Qr,useCallback:function(e,t){return Sn().memoizedState=[e,t===void 0?null:t],e},useContext:Qr,useEffect:Eg,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ql(4194308,4,av.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ql(4194308,4,e,t)},useInsertionEffect:function(e,t){return ql(4,2,e,t)},useMemo:function(e,t){var r=Sn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Sn();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=ZS.bind(null,It,e),[n.memoizedState,e]},useRef:function(e){var t=Sn();return e={current:e},t.memoizedState=e},useState:wg,useDebugValue:qd,useDeferredValue:function(e){return Sn().memoizedState=e},useTransition:function(){var e=wg(!1),t=e[0];return e=QS.bind(null,e[1]),Sn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=It,i=Sn();if(Lt){if(r===void 0)throw Error(oe(407));r=r()}else{if(r=t(),Jt===null)throw Error(oe(349));(Zi&30)!==0||K0(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Eg(Z0.bind(null,n,a,e),[e]),n.flags|=2048,ko(9,Q0.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=Sn(),t=Jt.identifierPrefix;if(Lt){var r=On,n=Un;r=(n&~(1<<32-un(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Uo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=KS++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rM={readContext:Qr,useCallback:ov,useContext:Qr,useEffect:Yd,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:lv,useReducer:xh,useRef:rv,useState:function(){return xh(Oo)},useDebugValue:qd,useDeferredValue:function(e){var t=Zr();return uv(t,Wt.memoizedState,e)},useTransition:function(){var e=xh(Oo)[0],t=Zr().memoizedState;return[e,t]},useMutableSource:q0,useSyncExternalStore:J0,useId:cv,unstable_isNewReconciler:!1},nM={readContext:Qr,useCallback:ov,useContext:Qr,useEffect:Yd,useImperativeHandle:sv,useInsertionEffect:nv,useLayoutEffect:iv,useMemo:lv,useReducer:Sh,useRef:rv,useState:function(){return Sh(Oo)},useDebugValue:qd,useDeferredValue:function(e){var t=Zr();return Wt===null?t.memoizedState=e:uv(t,Wt.memoizedState,e)},useTransition:function(){var e=Sh(Oo)[0],t=Zr().memoizedState;return[e,t]},useMutableSource:q0,useSyncExternalStore:J0,useId:cv,unstable_isNewReconciler:!1};function sn(e,t){if(e&&e.defaultProps){t=Ut({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function rd(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Ut({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Nu={isMounted:function(e){return(e=e._reactInternals)?na(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=xr(),i=Mi(e),a=kn(n,i);a.payload=t,r!=null&&(a.callback=r),t=xi(e,a,i),t!==null&&(cn(t,e,i,n),$l(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=xr(),i=Mi(e),a=kn(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=xi(e,a,i),t!==null&&(cn(t,e,i,n),$l(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=xr(),n=Mi(e),i=kn(r,n);i.tag=2,t!=null&&(i.callback=t),t=xi(e,i,n),t!==null&&(cn(t,e,n,r),$l(t,e,n))}};function Tg(e,t,r,n,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ro(r,n)||!Ro(i,a):!0}function fv(e,t,r){var n=!1,i=Ti,a=t.contextType;return typeof a=="object"&&a!==null?a=Qr(a):(i=Pr(t)?Ki:dr.current,n=t.contextTypes,a=(n=n!=null)?$a(e,i):Ti),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function bg(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Nu.enqueueReplaceState(t,t.state,null)}function nd(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Vd(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Qr(a):(a=Pr(t)?Ki:dr.current,i.context=$a(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(rd(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Nu.enqueueReplaceState(i,i.state,null),mu(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ka(e,t){try{var r="",n=t;do r+=Dx(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Mh(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function id(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var iM=typeof WeakMap=="function"?WeakMap:Map;function mv(e,t,r){r=kn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){xu||(xu=!0,fd=n),id(e,t)},r}function gv(e,t,r){r=kn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){id(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){id(e,t),typeof n!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Ag(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new iM;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=_M.bind(null,e,t,r),t.then(e,e))}function Cg(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Rg(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=kn(-1,1),t.tag=2,xi(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var aM=Hn.ReactCurrentOwner,Cr=!1;function yr(e,t,r,n){t.child=e===null?X0(t,null,r,n):qa(t,e.child,r,n)}function Pg(e,t,r,n,i){r=r.render;var a=t.ref;return Wa(t,i),n=jd(e,t,r,n,a,i),r=$d(),e!==null&&!Cr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Lt&&r&&Id(t),t.flags|=1,yr(e,t,n,i),t.child)}function Ng(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!np(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,vv(e,t,a,n,i)):(e=Zl(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ro,r(s,n)&&e.ref===t.ref)return Vn(e,t,i)}return t.flags|=1,e=wi(a,n),e.ref=t.ref,e.return=t,t.child=e}function vv(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Ro(a,n)&&e.ref===t.ref)if(Cr=!1,t.pendingProps=n=a,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Cr=!0);else return t.lanes=e.lanes,Vn(e,t,i)}return ad(e,t,r,n,i)}function _v(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},wt(Fa,Ur),Ur|=r;else{if((r&1073741824)===0)return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,wt(Fa,Ur),Ur|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,wt(Fa,Ur),Ur|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,wt(Fa,Ur),Ur|=n;return yr(e,t,i,r),t.child}function yv(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ad(e,t,r,n,i){var a=Pr(r)?Ki:dr.current;return a=$a(t,a),Wa(t,i),r=jd(e,t,r,n,a,i),n=$d(),e!==null&&!Cr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Vn(e,t,i)):(Lt&&n&&Id(t),t.flags|=1,yr(e,t,r,i),t.child)}function Lg(e,t,r,n,i){if(Pr(r)){var a=!0;cu(t)}else a=!1;if(Wa(t,i),t.stateNode===null)Jl(e,t),fv(t,r,n),nd(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,o=t.memoizedProps;s.props=o;var l=s.context,u=r.contextType;typeof u=="object"&&u!==null?u=Qr(u):(u=Pr(r)?Ki:dr.current,u=$a(t,u));var c=r.getDerivedStateFromProps,h=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==n||l!==u)&&bg(t,s,n,u),hi=!1;var d=t.memoizedState;s.state=d,mu(t,n,s,i),l=t.memoizedState,o!==n||d!==l||Rr.current||hi?(typeof c=="function"&&(rd(t,r,c,n),l=t.memoizedState),(o=hi||Tg(t,r,o,n,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=l),s.props=n,s.state=l,s.context=u,n=o):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,$0(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:sn(t.type,o),s.props=u,h=t.pendingProps,d=s.context,l=r.contextType,typeof l=="object"&&l!==null?l=Qr(l):(l=Pr(r)?Ki:dr.current,l=$a(t,l));var f=r.getDerivedStateFromProps;(c=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o!==h||d!==l)&&bg(t,s,n,l),hi=!1,d=t.memoizedState,s.state=d,mu(t,n,s,i);var y=t.memoizedState;o!==h||d!==y||Rr.current||hi?(typeof f=="function"&&(rd(t,r,f,n),y=t.memoizedState),(u=hi||Tg(t,r,u,n,d,y,l)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,y,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),s.props=n,s.state=y,s.context=l,n=u):(typeof s.componentDidUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),n=!1)}return sd(e,t,r,n,a,i)}function sd(e,t,r,n,i,a){yv(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&vg(t,r,!1),Vn(e,t,a);n=t.stateNode,aM.current=t;var o=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=qa(t,e.child,null,a),t.child=qa(t,null,o,a)):yr(e,t,o,a),t.memoizedState=n.state,i&&vg(t,r,!0),t.child}function xv(e){var t=e.stateNode;t.pendingContext?gg(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gg(e,t.context,!1),Hd(e,t.containerInfo)}function Dg(e,t,r,n,i){return Ya(),Od(i),t.flags|=256,yr(e,t,r,n),t.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ld(e){return{baseLanes:e,cachePool:null,transitions:null}}function Sv(e,t,r){var n=t.pendingProps,i=Dt.current,a=!1,s=(t.flags&128)!==0,o;if((o=s)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),wt(Dt,i&1),e===null)return ed(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},(n&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Iu(s,n,0,null),e=Ji(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ld(r),t.memoizedState=od,e):Jd(t,s));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return sM(e,t,s,n,o,i,r);if(a){a=n.fallback,s=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:n.children};return(s&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=l,t.deletions=null):(n=wi(i,l),n.subtreeFlags=i.subtreeFlags&14680064),o!==null?a=wi(o,a):(a=Ji(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?ld(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=od,n}return a=e.child,e=a.sibling,n=wi(a,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Jd(e,t){return t=Iu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Vl(e,t,r,n){return n!==null&&Od(n),qa(t,e.child,null,r),e=Jd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function sM(e,t,r,n,i,a,s){if(r)return t.flags&256?(t.flags&=-257,n=Mh(Error(oe(422))),Vl(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=Iu({mode:"visible",children:n.children},i,0,null),a=Ji(a,i,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,(t.mode&1)!==0&&qa(t,e.child,null,s),t.child.memoizedState=ld(s),t.memoizedState=od,a);if((t.mode&1)===0)return Vl(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var o=n.dgst;return n=o,a=Error(oe(419)),n=Mh(a,n,void 0),Vl(e,t,s,n)}if(o=(s&e.childLanes)!==0,Cr||o){if(n=Jt,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|s))!==0?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Bn(e,i),cn(n,e,i,-1))}return rp(),n=Mh(Error(oe(421))),Vl(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=yM.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Or=yi(i.nextSibling),kr=t,Lt=!0,ln=null,e!==null&&(Yr[qr++]=Un,Yr[qr++]=On,Yr[qr++]=Qi,Un=e.id,On=e.overflow,Qi=t),t=Jd(t,n.children),t.flags|=4096,t)}function Ig(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),td(e.return,t,r)}function wh(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function Mv(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(yr(e,t,n.children,r),n=Dt.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ig(e,r,t);else if(e.tag===19)Ig(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(wt(Dt,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&gu(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),wh(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gu(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}wh(t,!0,r,null,a);break;case"together":wh(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Jl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ea|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(oe(153));if(t.child!==null){for(e=t.child,r=wi(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=wi(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function oM(e,t,r){switch(t.tag){case 3:xv(t),Ya();break;case 5:Y0(t);break;case 1:Pr(t.type)&&cu(t);break;case 4:Hd(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;wt(pu,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(wt(Dt,Dt.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Sv(e,t,r):(wt(Dt,Dt.current&1),e=Vn(e,t,r),e!==null?e.sibling:null);wt(Dt,Dt.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Mv(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),wt(Dt,Dt.current),n)break;return null;case 22:case 23:return t.lanes=0,_v(e,t,r)}return Vn(e,t,r)}var wv,ud,Ev,Tv;wv=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ud=function(){};Ev=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Yi(En.current);var a=null;switch(r){case"input":i=Nh(e,i),n=Nh(e,n),a=[];break;case"select":i=Ut({},i,{value:void 0}),n=Ut({},n,{value:void 0}),a=[];break;case"textarea":i=Ih(e,i),n=Ih(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=lu)}Oh(r,n);var s;r=null;for(u in i)if(!n.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in n){var l=n[u];if(o=i?.[u],n.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(r||(r={}),r[s]=l[s])}else r||(a||(a=[]),a.push(u,r)),r=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ct("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}r&&(a=a||[]).push("style",r);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Tv=function(e,t,r,n){r!==n&&(t.flags|=4)};function ao(e,t){if(!Lt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function cr(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function lM(e,t,r){var n=t.pendingProps;switch(Ud(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cr(t),null;case 1:return Pr(t.type)&&uu(),cr(t),null;case 3:return n=t.stateNode,Ja(),Rt(Rr),Rt(dr),Wd(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ln!==null&&(vd(ln),ln=null))),ud(e,t),cr(t),null;case 5:Gd(t);var i=Yi(Io.current);if(r=t.type,e!==null&&t.stateNode!=null)Ev(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(oe(166));return cr(t),null}if(e=Yi(En.current),Fl(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[Mn]=t,n[Lo]=a,e=(t.mode&1)!==0,r){case"dialog":Ct("cancel",n),Ct("close",n);break;case"iframe":case"object":case"embed":Ct("load",n);break;case"video":case"audio":for(i=0;i<ho.length;i++)Ct(ho[i],n);break;case"source":Ct("error",n);break;case"img":case"image":case"link":Ct("error",n),Ct("load",n);break;case"details":Ct("toggle",n);break;case"input":Hm(n,a),Ct("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},Ct("invalid",n);break;case"textarea":Wm(n,a),Ct("invalid",n)}Oh(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var o=a[s];s==="children"?typeof o=="string"?n.textContent!==o&&(a.suppressHydrationWarning!==!0&&zl(n.textContent,o,e),i=["children",o]):typeof o=="number"&&n.textContent!==""+o&&(a.suppressHydrationWarning!==!0&&zl(n.textContent,o,e),i=["children",""+o]):Mo.hasOwnProperty(s)&&o!=null&&s==="onScroll"&&Ct("scroll",n)}switch(r){case"input":bl(n),Gm(n,a,!0);break;case"textarea":bl(n),Xm(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=lu)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zg(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[Mn]=t,e[Lo]=n,wv(e,t,!1,!1),t.stateNode=e;e:{switch(s=kh(r,n),r){case"dialog":Ct("cancel",e),Ct("close",e),i=n;break;case"iframe":case"object":case"embed":Ct("load",e),i=n;break;case"video":case"audio":for(i=0;i<ho.length;i++)Ct(ho[i],e);i=n;break;case"source":Ct("error",e),i=n;break;case"img":case"image":case"link":Ct("error",e),Ct("load",e),i=n;break;case"details":Ct("toggle",e),i=n;break;case"input":Hm(e,n),i=Nh(e,n),Ct("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=Ut({},n,{value:void 0}),Ct("invalid",e);break;case"textarea":Wm(e,n),i=Ih(e,n),Ct("invalid",e);break;default:i=n}Oh(r,i),o=i;for(a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="style"?r0(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e0(e,l)):a==="children"?typeof l=="string"?(r!=="textarea"||l!=="")&&wo(e,l):typeof l=="number"&&wo(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Mo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&Ct("scroll",e):l!=null&&xd(e,a,l,s))}switch(r){case"input":bl(e),Gm(e,n,!1);break;case"textarea":bl(e),Xm(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ei(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?Ba(e,!!n.multiple,a,!1):n.defaultValue!=null&&Ba(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=lu)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return cr(t),null;case 6:if(e&&t.stateNode!=null)Tv(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(oe(166));if(r=Yi(Io.current),Yi(En.current),Fl(t)){if(n=t.stateNode,r=t.memoizedProps,n[Mn]=t,(a=n.nodeValue!==r)&&(e=kr,e!==null))switch(e.tag){case 3:zl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zl(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Mn]=t,t.stateNode=n}return cr(t),null;case 13:if(Rt(Dt),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Lt&&Or!==null&&(t.mode&1)!==0&&(t.flags&128)===0)G0(),Ya(),t.flags|=98560,a=!1;else if(a=Fl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(oe(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(oe(317));a[Mn]=t}else Ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;cr(t),a=!1}else ln!==null&&(vd(ln),ln=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Dt.current&1)!==0?Xt===0&&(Xt=3):rp())),t.updateQueue!==null&&(t.flags|=4),cr(t),null);case 4:return Ja(),ud(e,t),e===null&&Po(t.stateNode.containerInfo),cr(t),null;case 10:return Fd(t.type._context),cr(t),null;case 17:return Pr(t.type)&&uu(),cr(t),null;case 19:if(Rt(Dt),a=t.memoizedState,a===null)return cr(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)ao(a,!1);else{if(Xt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=gu(e),s!==null){for(t.flags|=128,ao(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return wt(Dt,Dt.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ft()>Qa&&(t.flags|=128,n=!0,ao(a,!1),t.lanes=4194304)}else{if(!n)if(e=gu(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),ao(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!Lt)return cr(t),null}else 2*Ft()-a.renderingStartTime>Qa&&r!==1073741824&&(t.flags|=128,n=!0,ao(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ft(),t.sibling=null,r=Dt.current,wt(Dt,n?r&1|2:r&1),t):(cr(t),null);case 22:case 23:return tp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(Ur&1073741824)!==0&&(cr(t),t.subtreeFlags&6&&(t.flags|=8192)):cr(t),null;case 24:return null;case 25:return null}throw Error(oe(156,t.tag))}function uM(e,t){switch(Ud(t),t.tag){case 1:return Pr(t.type)&&uu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ja(),Rt(Rr),Rt(dr),Wd(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Gd(t),null;case 13:if(Rt(Dt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(oe(340));Ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Rt(Dt),null;case 4:return Ja(),null;case 10:return Fd(t.type._context),null;case 22:case 23:return tp(),null;case 24:return null;default:return null}}var Hl=!1,hr=!1,cM=typeof WeakSet=="function"?WeakSet:Set,Le=null;function za(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){kt(e,t,n)}else r.current=null}function cd(e,t,r){try{r()}catch(n){kt(e,t,n)}}var Ug=!1;function hM(e,t){if($h=au,e=P0(),Dd(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==r||i!==0&&h.nodeType!==3||(o=s+i),h!==a||n!==0&&h.nodeType!==3||(l=s+n),h.nodeType===3&&(s+=h.nodeValue.length),(f=h.firstChild)!==null;)d=h,h=f;for(;;){if(h===e)break t;if(d===r&&++u===i&&(o=s),d===a&&++c===n&&(l=s),(f=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=f}r=o===-1||l===-1?null:{start:o,end:l}}else r=null}r=r||{start:0,end:0}}else r=null;for(Yh={focusedElem:e,selectionRange:r},au=!1,Le=t;Le!==null;)if(t=Le,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Le=e;else for(;Le!==null;){t=Le;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,p=t.stateNode,m=p.getSnapshotBeforeUpdate(t.elementType===t.type?_:sn(t.type,_),v);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(x){kt(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,Le=e;break}Le=t.return}return y=Ug,Ug=!1,y}function yo(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&cd(t,r,a)}i=i.next}while(i!==n)}}function Lu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function hd(e){var t=e.ref;if(t!==null){var r=e.stateNode;e.tag,e=r,typeof t=="function"?t(e):t.current=e}}function bv(e){var t=e.alternate;t!==null&&(e.alternate=null,bv(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mn],delete t[Lo],delete t[Kh],delete t[$S],delete t[YS])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Av(e){return e.tag===5||e.tag===3||e.tag===4}function Og(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Av(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=lu));else if(n!==4&&(e=e.child,e!==null))for(dd(e,t,r),e=e.sibling;e!==null;)dd(e,t,r),e=e.sibling}function pd(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(pd(e,t,r),e=e.sibling;e!==null;)pd(e,t,r),e=e.sibling}var nr=null,on=!1;function ui(e,t,r){for(r=r.child;r!==null;)Cv(e,t,r),r=r.sibling}function Cv(e,t,r){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(Eu,r)}catch{}switch(r.tag){case 5:hr||za(r,t);case 6:var n=nr,i=on;nr=null,ui(e,t,r),nr=n,on=i,nr!==null&&(on?(e=nr,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):nr.removeChild(r.stateNode));break;case 18:nr!==null&&(on?(e=nr,r=r.stateNode,e.nodeType===8?gh(e.parentNode,r):e.nodeType===1&&gh(e,r),Ao(e)):gh(nr,r.stateNode));break;case 4:n=nr,i=on,nr=r.stateNode.containerInfo,on=!0,ui(e,t,r),nr=n,on=i;break;case 0:case 11:case 14:case 15:if(!hr&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&((a&2)!==0||(a&4)!==0)&&cd(r,t,s),i=i.next}while(i!==n)}ui(e,t,r);break;case 1:if(!hr&&(za(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(o){kt(r,t,o)}ui(e,t,r);break;case 21:ui(e,t,r);break;case 22:r.mode&1?(hr=(n=hr)||r.memoizedState!==null,ui(e,t,r),hr=n):ui(e,t,r);break;default:ui(e,t,r)}}function kg(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new cM),t.forEach(function(n){var i=xM.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function an(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 5:nr=o.stateNode,on=!1;break e;case 3:nr=o.stateNode.containerInfo,on=!0;break e;case 4:nr=o.stateNode.containerInfo,on=!0;break e}o=o.return}if(nr===null)throw Error(oe(160));Cv(a,s,i),nr=null,on=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){kt(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rv(t,e),t=t.sibling}function Rv(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),xn(e),n&4){try{yo(3,e,e.return),Lu(3,e)}catch(_){kt(e,e.return,_)}try{yo(5,e,e.return)}catch(_){kt(e,e.return,_)}}break;case 1:an(t,e),xn(e),n&512&&r!==null&&za(r,r.return);break;case 5:if(an(t,e),xn(e),n&512&&r!==null&&za(r,r.return),e.flags&32){var i=e.stateNode;try{wo(i,"")}catch(_){kt(e,e.return,_)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&a.type==="radio"&&a.name!=null&&Kg(i,a),kh(o,s);var u=kh(o,a);for(s=0;s<l.length;s+=2){var c=l[s],h=l[s+1];c==="style"?r0(i,h):c==="dangerouslySetInnerHTML"?e0(i,h):c==="children"?wo(i,h):xd(i,c,h,u)}switch(o){case"input":Lh(i,a);break;case"textarea":Qg(i,a);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var f=a.value;f!=null?Ba(i,!!a.multiple,f,!1):d!==!!a.multiple&&(a.defaultValue!=null?Ba(i,!!a.multiple,a.defaultValue,!0):Ba(i,!!a.multiple,a.multiple?[]:"",!1))}i[Lo]=a}catch(_){kt(e,e.return,_)}}break;case 6:if(an(t,e),xn(e),n&4){if(e.stateNode===null)throw Error(oe(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(_){kt(e,e.return,_)}}break;case 3:if(an(t,e),xn(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Ao(t.containerInfo)}catch(_){kt(e,e.return,_)}break;case 4:an(t,e),xn(e);break;case 13:an(t,e),xn(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Zd=Ft())),n&4&&kg(e);break;case 22:if(c=r!==null&&r.memoizedState!==null,e.mode&1?(hr=(u=hr)||c,an(t,e),hr=u):an(t,e),xn(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(Le=e,c=e.child;c!==null;){for(h=Le=c;Le!==null;){switch(d=Le,f=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:za(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){n=d,r=d.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){kt(n,r,_)}}break;case 5:za(d,d.return);break;case 22:if(d.memoizedState!==null){Fg(h);continue}}f!==null?(f.return=d,Le=f):Fg(h)}c=c.sibling}e:for(c=null,h=e;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(o=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=t0("display",s))}catch(_){kt(e,e.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){kt(e,e.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:an(t,e),xn(e),n&4&&kg(e);break;case 21:break;default:an(t,e),xn(e)}}function xn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Av(r)){var n=r;break e}r=r.return}throw Error(oe(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(wo(i,""),n.flags&=-33);var a=Og(e);pd(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,o=Og(e);dd(e,o,s);break;default:throw Error(oe(161))}}catch(l){kt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function dM(e,t,r){Le=e,Pv(e,t,r)}function Pv(e,t,r){for(var n=(e.mode&1)!==0;Le!==null;){var i=Le,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||Hl;if(!s){var o=i.alternate,l=o!==null&&o.memoizedState!==null||hr;o=Hl;var u=hr;if(Hl=s,(hr=l)&&!u)for(Le=i;Le!==null;)s=Le,l=s.child,s.tag===22&&s.memoizedState!==null?Bg(i):l!==null?(l.return=s,Le=l):Bg(i);for(;a!==null;)Le=a,Pv(a,t,r),a=a.sibling;Le=i,Hl=o,hr=u}zg(e,t,r)}else(i.subtreeFlags&8772)!==0&&a!==null?(a.return=i,Le=a):zg(e,t,r)}}function zg(e){for(;Le!==null;){var t=Le;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:hr||Lu(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!hr)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:sn(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Mg(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Mg(t,s,r)}break;case 5:var o=t.stateNode;if(r===null&&t.flags&4){r=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&r.focus();break;case"img":l.src&&(r.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}hr||t.flags&512&&hd(t)}catch(d){kt(t,t.return,d)}}if(t===e){Le=null;break}if(r=t.sibling,r!==null){r.return=t.return,Le=r;break}Le=t.return}}function Fg(e){for(;Le!==null;){var t=Le;if(t===e){Le=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Le=r;break}Le=t.return}}function Bg(e){for(;Le!==null;){var t=Le;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Lu(4,t)}catch(l){kt(t,r,l)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(l){kt(t,i,l)}}var a=t.return;try{hd(t)}catch(l){kt(t,a,l)}break;case 5:var s=t.return;try{hd(t)}catch(l){kt(t,s,l)}}}catch(l){kt(t,t.return,l)}if(t===e){Le=null;break}var o=t.sibling;if(o!==null){o.return=t.return,Le=o;break}Le=t.return}}var pM=Math.ceil,yu=Hn.ReactCurrentDispatcher,Kd=Hn.ReactCurrentOwner,Kr=Hn.ReactCurrentBatchConfig,ft=0,Jt=null,Ht=null,ir=0,Ur=0,Fa=Ai(0),Xt=0,zo=null,ea=0,Du=0,Qd=0,xo=null,Ar=null,Zd=0,Qa=1/0,Dn=null,xu=!1,fd=null,Si=null,Gl=!1,mi=null,Su=0,So=0,md=null,Kl=-1,Ql=0;function xr(){return(ft&6)!==0?Ft():Kl!==-1?Kl:Kl=Ft()}function Mi(e){return(e.mode&1)===0?1:(ft&2)!==0&&ir!==0?ir&-ir:JS.transition!==null?(Ql===0&&(Ql=f0()),Ql):(e=mt,e!==0||(e=window.event,e=e===void 0?16:S0(e.type)),e)}function cn(e,t,r,n){if(50<So)throw So=0,md=null,Error(oe(185));Fo(e,r,n),((ft&2)===0||e!==Jt)&&(e===Jt&&((ft&2)===0&&(Du|=r),Xt===4&&pi(e,ir)),Nr(e,n),r===1&&ft===0&&(t.mode&1)===0&&(Qa=Ft()+500,Ru&&Ci()))}function Nr(e,t){var r=e.callbackNode;Qx(e,t);var n=iu(e,e===Jt?ir:0);if(n===0)r!==null&&Ym(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ym(r),t===1)e.tag===0?qS(Vg.bind(null,e)):B0(Vg.bind(null,e)),XS(function(){(ft&6)===0&&Ci()}),r=null;else{switch(m0(n)){case 1:r=Td;break;case 4:r=d0;break;case 16:r=nu;break;case 536870912:r=p0;break;default:r=nu}r=zv(r,Nv.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Nv(e,t){if(Kl=-1,Ql=0,(ft&6)!==0)throw Error(oe(327));var r=e.callbackNode;if(Xa()&&e.callbackNode!==r)return null;var n=iu(e,e===Jt?ir:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=Mu(e,n);else{t=n;var i=ft;ft|=2;var a=Dv();(Jt!==e||ir!==t)&&(Dn=null,Qa=Ft()+500,qi(e,t));do try{gM();break}catch(o){Lv(e,o)}while(!0);zd(),yu.current=a,ft=i,Ht!==null?t=0:(Jt=null,ir=0,t=Xt)}if(t!==0){if(t===2&&(i=Hh(e),i!==0&&(n=i,t=gd(e,i))),t===1)throw r=zo,qi(e,0),pi(e,n),Nr(e,Ft()),r;if(t===6)pi(e,n);else{if(i=e.current.alternate,(n&30)===0&&!fM(i)&&(t=Mu(e,n),t===2&&(a=Hh(e),a!==0&&(n=a,t=gd(e,a))),t===1))throw r=zo,qi(e,0),pi(e,n),Nr(e,Ft()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(oe(345));case 2:Xi(e,Ar,Dn);break;case 3:if(pi(e,n),(n&130023424)===n&&(t=Zd+500-Ft(),10<t)){if(iu(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){xr(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Jh(Xi.bind(null,e,Ar,Dn),t);break}Xi(e,Ar,Dn);break;case 4:if(pi(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-un(n);a=1<<s,s=t[s],s>i&&(i=s),n&=~a}if(n=i,n=Ft()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*pM(n/1960))-n,10<n){e.timeoutHandle=Jh(Xi.bind(null,e,Ar,Dn),n);break}Xi(e,Ar,Dn);break;case 5:Xi(e,Ar,Dn);break;default:throw Error(oe(329))}}}return Nr(e,Ft()),e.callbackNode===r?Nv.bind(null,e):null}function gd(e,t){var r=xo;return e.current.memoizedState.isDehydrated&&(qi(e,t).flags|=256),e=Mu(e,t),e!==2&&(t=Ar,Ar=r,t!==null&&vd(t)),e}function vd(e){Ar===null?Ar=e:Ar.push.apply(Ar,e)}function fM(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!hn(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pi(e,t){for(t&=~Qd,t&=~Du,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-un(t),n=1<<r;e[r]=-1,t&=~n}}function Vg(e){if((ft&6)!==0)throw Error(oe(327));Xa();var t=iu(e,0);if((t&1)===0)return Nr(e,Ft()),null;var r=Mu(e,t);if(e.tag!==0&&r===2){var n=Hh(e);n!==0&&(t=n,r=gd(e,n))}if(r===1)throw r=zo,qi(e,0),pi(e,t),Nr(e,Ft()),r;if(r===6)throw Error(oe(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xi(e,Ar,Dn),Nr(e,Ft()),null}function ep(e,t){var r=ft;ft|=1;try{return e(t)}finally{ft=r,ft===0&&(Qa=Ft()+500,Ru&&Ci())}}function ta(e){mi!==null&&mi.tag===0&&(ft&6)===0&&Xa();var t=ft;ft|=1;var r=Kr.transition,n=mt;try{if(Kr.transition=null,mt=1,e)return e()}finally{mt=n,Kr.transition=r,ft=t,(ft&6)===0&&Ci()}}function tp(){Ur=Fa.current,Rt(Fa)}function qi(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,WS(r)),Ht!==null)for(r=Ht.return;r!==null;){var n=r;switch(Ud(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&uu();break;case 3:Ja(),Rt(Rr),Rt(dr),Wd();break;case 5:Gd(n);break;case 4:Ja();break;case 13:Rt(Dt);break;case 19:Rt(Dt);break;case 10:Fd(n.type._context);break;case 22:case 23:tp()}r=r.return}if(Jt=e,Ht=e=wi(e.current,null),ir=Ur=t,Xt=0,zo=null,Qd=Du=ea=0,Ar=xo=null,$i!==null){for(t=0;t<$i.length;t++)if(r=$i[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}$i=null}return e}function Lv(e,t){do{var r=Ht;try{if(zd(),Yl.current=_u,vu){for(var n=It.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}vu=!1}if(Zi=0,qt=Wt=It=null,_o=!1,Uo=0,Kd.current=null,r===null||r.return===null){Xt=1,zo=t,Ht=null;break}e:{var a=e,s=r.return,o=r,l=t;if(t=ir,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=o,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=Cg(s);if(f!==null){f.flags&=-257,Rg(f,s,o,a,t),f.mode&1&&Ag(a,u,t),t=f,l=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(l),t.updateQueue=_}else y.add(l);break e}else{if((t&1)===0){Ag(a,u,t),rp();break e}l=Error(oe(426))}}else if(Lt&&o.mode&1){var v=Cg(s);if(v!==null){(v.flags&65536)===0&&(v.flags|=256),Rg(v,s,o,a,t),Od(Ka(l,o));break e}}a=l=Ka(l,o),Xt!==4&&(Xt=2),xo===null?xo=[a]:xo.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var p=mv(a,l,t);Sg(a,p);break e;case 1:o=l;var m=a.type,g=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Si===null||!Si.has(g)))){a.flags|=65536,t&=-t,a.lanes|=t;var x=gv(a,o,t);Sg(a,x);break e}}a=a.return}while(a!==null)}Uv(r)}catch(P){t=P,Ht===r&&r!==null&&(Ht=r=r.return);continue}break}while(!0)}function Dv(){var e=yu.current;return yu.current=_u,e===null?_u:e}function rp(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Jt===null||(ea&268435455)===0&&(Du&268435455)===0||pi(Jt,ir)}function Mu(e,t){var r=ft;ft|=2;var n=Dv();(Jt!==e||ir!==t)&&(Dn=null,qi(e,t));do try{mM();break}catch(i){Lv(e,i)}while(!0);if(zd(),ft=r,yu.current=n,Ht!==null)throw Error(oe(261));return Jt=null,ir=0,Xt}function mM(){for(;Ht!==null;)Iv(Ht)}function gM(){for(;Ht!==null&&!Gx();)Iv(Ht)}function Iv(e){var t=kv(e.alternate,e,Ur);e.memoizedProps=e.pendingProps,t===null?Uv(e):Ht=t,Kd.current=null}function Uv(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=lM(r,t,Ur),r!==null){Ht=r;return}}else{if(r=uM(r,t),r!==null){r.flags&=32767,Ht=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Xt=6,Ht=null;return}}if(t=t.sibling,t!==null){Ht=t;return}Ht=t=e}while(t!==null);Xt===0&&(Xt=5)}function Xi(e,t,r){var n=mt,i=Kr.transition;try{Kr.transition=null,mt=1,vM(e,t,r,n)}finally{Kr.transition=i,mt=n}return null}function vM(e,t,r,n){do Xa();while(mi!==null);if((ft&6)!==0)throw Error(oe(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(oe(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Zx(e,a),e===Jt&&(Ht=Jt=null,ir=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Gl||(Gl=!0,zv(nu,function(){return Xa(),null})),a=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||a){a=Kr.transition,Kr.transition=null;var s=mt;mt=1;var o=ft;ft|=4,Kd.current=null,hM(e,r),Rv(r,e),FS(Yh),au=!!$h,Yh=$h=null,e.current=r,dM(r,e,i),Wx(),ft=o,mt=s,Kr.transition=a}else e.current=r;if(Gl&&(Gl=!1,mi=e,Su=i),a=e.pendingLanes,a===0&&(Si=null),$x(r.stateNode,n),Nr(e,Ft()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(xu)throw xu=!1,e=fd,fd=null,e;return(Su&1)!==0&&e.tag!==0&&Xa(),a=e.pendingLanes,(a&1)!==0?e===md?So++:(So=0,md=e):So=0,Ci(),null}function Xa(){if(mi!==null){var e=m0(Su),t=Kr.transition,r=mt;try{if(Kr.transition=null,mt=16>e?16:e,mi===null)var n=!1;else{if(e=mi,mi=null,Su=0,(ft&6)!==0)throw Error(oe(331));var i=ft;for(ft|=4,Le=e.current;Le!==null;){var a=Le,s=a.child;if((Le.flags&16)!==0){var o=a.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(Le=u;Le!==null;){var c=Le;switch(c.tag){case 0:case 11:case 15:yo(8,c,a)}var h=c.child;if(h!==null)h.return=c,Le=h;else for(;Le!==null;){c=Le;var d=c.sibling,f=c.return;if(bv(c),c===u){Le=null;break}if(d!==null){d.return=f,Le=d;break}Le=f}}}var y=a.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}Le=a}}if((a.subtreeFlags&2064)!==0&&s!==null)s.return=a,Le=s;else e:for(;Le!==null;){if(a=Le,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:yo(9,a,a.return)}var p=a.sibling;if(p!==null){p.return=a.return,Le=p;break e}Le=a.return}}var m=e.current;for(Le=m;Le!==null;){s=Le;var g=s.child;if((s.subtreeFlags&2064)!==0&&g!==null)g.return=s,Le=g;else e:for(s=m;Le!==null;){if(o=Le,(o.flags&2048)!==0)try{switch(o.tag){case 0:case 11:case 15:Lu(9,o)}}catch(P){kt(o,o.return,P)}if(o===s){Le=null;break e}var x=o.sibling;if(x!==null){x.return=o.return,Le=x;break e}Le=o.return}}if(ft=i,Ci(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(Eu,e)}catch{}n=!0}return n}finally{mt=r,Kr.transition=t}}return!1}function Hg(e,t,r){t=Ka(r,t),t=mv(e,t,1),e=xi(e,t,1),t=xr(),e!==null&&(Fo(e,1,t),Nr(e,t))}function kt(e,t,r){if(e.tag===3)Hg(e,e,r);else for(;t!==null;){if(t.tag===3){Hg(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Si===null||!Si.has(n))){e=Ka(r,e),e=gv(t,e,1),t=xi(t,e,1),e=xr(),t!==null&&(Fo(t,1,e),Nr(t,e));break}}t=t.return}}function _M(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=xr(),e.pingedLanes|=e.suspendedLanes&r,Jt===e&&(ir&r)===r&&(Xt===4||Xt===3&&(ir&130023424)===ir&&500>Ft()-Zd?qi(e,0):Qd|=r),Nr(e,t)}function Ov(e,t){t===0&&((e.mode&1)===0?t=1:(t=Rl,Rl<<=1,(Rl&130023424)===0&&(Rl=4194304)));var r=xr();e=Bn(e,t),e!==null&&(Fo(e,t,r),Nr(e,r))}function yM(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ov(e,r)}function xM(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(oe(314))}n!==null&&n.delete(t),Ov(e,r)}var kv;kv=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Rr.current)Cr=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Cr=!1,oM(e,t,r);Cr=(e.flags&131072)!==0}else Cr=!1,Lt&&(t.flags&1048576)!==0&&V0(t,du,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Jl(e,t),e=t.pendingProps;var i=$a(t,dr.current);Wa(t,r),i=jd(null,t,n,e,i,r);var a=$d();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pr(n)?(a=!0,cu(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vd(t),i.updater=Nu,t.stateNode=i,i._reactInternals=t,nd(t,n,e,r),t=sd(null,t,n,!0,a,r)):(t.tag=0,Lt&&a&&Id(t),yr(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Jl(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=MM(n),e=sn(n,e),i){case 0:t=ad(null,t,n,e,r);break e;case 1:t=Lg(null,t,n,e,r);break e;case 11:t=Pg(null,t,n,e,r);break e;case 14:t=Ng(null,t,n,sn(n.type,e),r);break e}throw Error(oe(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),ad(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),Lg(e,t,n,i,r);case 3:e:{if(xv(t),e===null)throw Error(oe(387));n=t.pendingProps,a=t.memoizedState,i=a.element,$0(e,t),mu(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Ka(Error(oe(423)),t),t=Dg(e,t,n,r,i);break e}else if(n!==i){i=Ka(Error(oe(424)),t),t=Dg(e,t,n,r,i);break e}else for(Or=yi(t.stateNode.containerInfo.firstChild),kr=t,Lt=!0,ln=null,r=X0(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ya(),n===i){t=Vn(e,t,r);break e}yr(e,t,n,r)}t=t.child}return t;case 5:return Y0(t),e===null&&ed(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,qh(n,i)?s=null:a!==null&&qh(n,a)&&(t.flags|=32),yv(e,t),yr(e,t,s,r),t.child;case 6:return e===null&&ed(t),null;case 13:return Sv(e,t,r);case 4:return Hd(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=qa(t,null,n,r):yr(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),Pg(e,t,n,i,r);case 7:return yr(e,t,t.pendingProps,r),t.child;case 8:return yr(e,t,t.pendingProps.children,r),t.child;case 12:return yr(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,wt(pu,n._currentValue),n._currentValue=s,a!==null)if(hn(a.value,s)){if(a.children===i.children&&!Rr.current){t=Vn(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var o=a.dependencies;if(o!==null){s=a.child;for(var l=o.firstContext;l!==null;){if(l.context===n){if(a.tag===1){l=kn(-1,r&-r),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=r,l=a.alternate,l!==null&&(l.lanes|=r),td(a.return,r,t),o.lanes|=r;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(oe(341));s.lanes|=r,o=s.alternate,o!==null&&(o.lanes|=r),td(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}yr(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Wa(t,r),i=Qr(i),n=n(i),t.flags|=1,yr(e,t,n,r),t.child;case 14:return n=t.type,i=sn(n,t.pendingProps),i=sn(n.type,i),Ng(e,t,n,i,r);case 15:return vv(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:sn(n,i),Jl(e,t),t.tag=1,Pr(n)?(e=!0,cu(t)):e=!1,Wa(t,r),fv(t,n,i),nd(t,n,i,r),sd(null,t,n,!0,e,r);case 19:return Mv(e,t,r);case 22:return _v(e,t,r)}throw Error(oe(156,t.tag))};function zv(e,t){return h0(e,t)}function SM(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jr(e,t,r,n){return new SM(e,t,r,n)}function np(e){return e=e.prototype,!(!e||!e.isReactComponent)}function MM(e){if(typeof e=="function")return np(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Md)return 11;if(e===wd)return 14}return 2}function wi(e,t){var r=e.alternate;return r===null?(r=Jr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zl(e,t,r,n,i,a){var s=2;if(n=e,typeof e=="function")np(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ra:return Ji(r.children,i,a,t);case Sd:s=8,i|=8;break;case Ah:return e=Jr(12,r,t,i|2),e.elementType=Ah,e.lanes=a,e;case Ch:return e=Jr(13,r,t,i),e.elementType=Ch,e.lanes=a,e;case Rh:return e=Jr(19,r,t,i),e.elementType=Rh,e.lanes=a,e;case Yg:return Iu(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jg:s=10;break e;case $g:s=9;break e;case Md:s=11;break e;case wd:s=14;break e;case ci:s=16,n=null;break e}throw Error(oe(130,e==null?e:typeof e,""))}return t=Jr(s,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function Ji(e,t,r,n){return e=Jr(7,e,n,t),e.lanes=r,e}function Iu(e,t,r,n){return e=Jr(22,e,n,t),e.elementType=Yg,e.lanes=r,e.stateNode={isHidden:!1},e}function Eh(e,t,r){return e=Jr(6,e,null,t),e.lanes=r,e}function Th(e,t,r){return t=Jr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wM(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lh(0),this.expirationTimes=lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ip(e,t,r,n,i,a,s,o,l){return e=new wM(e,t,r,o,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=Jr(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vd(a),e}function EM(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ca,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Fv(e){if(!e)return Ti;e=e._reactInternals;e:{if(na(e)!==e||e.tag!==1)throw Error(oe(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(oe(171))}if(e.tag===1){var r=e.type;if(Pr(r))return F0(e,r,t)}return t}function Bv(e,t,r,n,i,a,s,o,l){return e=ip(r,n,!0,e,i,a,s,o,l),e.context=Fv(null),r=e.current,n=xr(),i=Mi(r),a=kn(n,i),a.callback=t??null,xi(r,a,i),e.current.lanes=i,Fo(e,i,n),Nr(e,n),e}function Uu(e,t,r,n){var i=t.current,a=xr(),s=Mi(i);return r=Fv(r),t.context===null?t.context=r:t.pendingContext=r,t=kn(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=xi(i,t,s),e!==null&&(cn(e,i,s,a),$l(e,i,s)),s}function wu(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function Gg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ap(e,t){Gg(e,t),(e=e.alternate)&&Gg(e,t)}function TM(){return null}var Vv=typeof reportError=="function"?reportError:function(e){console.error(e)};function sp(e){this._internalRoot=e}Ou.prototype.render=sp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(oe(409));Uu(e,t,null,null)};Ou.prototype.unmount=sp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ta(function(){Uu(null,e,null,null)}),t[Fn]=null}};function Ou(e){this._internalRoot=e}Ou.prototype.unstable_scheduleHydration=function(e){if(e){var t=_0();e={blockedOn:null,target:e,priority:t};for(var r=0;r<di.length&&t!==0&&t<di[r].priority;r++);di.splice(r,0,e),r===0&&x0(e)}};function op(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ku(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wg(){}function bM(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var u=wu(s);a.call(u)}}var s=Bv(t,n,e,0,null,!1,!1,"",Wg);return e._reactRootContainer=s,e[Fn]=s.current,Po(e.nodeType===8?e.parentNode:e),ta(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var o=n;n=function(){var u=wu(l);o.call(u)}}var l=ip(e,0,!1,null,null,!1,!1,"",Wg);return e._reactRootContainer=l,e[Fn]=l.current,Po(e.nodeType===8?e.parentNode:e),ta(function(){Uu(t,l,r,n)}),l}function zu(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var o=i;i=function(){var l=wu(s);o.call(l)}}Uu(t,s,e,i)}else s=bM(r,t,e,i,n);return wu(s)}g0=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=co(t.pendingLanes);r!==0&&(bd(t,r|1),Nr(t,Ft()),(ft&6)===0&&(Qa=Ft()+500,Ci()))}break;case 13:ta(function(){var n=Bn(e,1);if(n!==null){var i=xr();cn(n,e,1,i)}}),ap(e,1)}};Ad=function(e){if(e.tag===13){var t=Bn(e,134217728);if(t!==null){var r=xr();cn(t,e,134217728,r)}ap(e,134217728)}};v0=function(e){if(e.tag===13){var t=Mi(e),r=Bn(e,t);if(r!==null){var n=xr();cn(r,e,t,n)}ap(e,t)}};_0=function(){return mt};y0=function(e,t){var r=mt;try{return mt=e,t()}finally{mt=r}};Fh=function(e,t,r){switch(t){case"input":if(Lh(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Cu(n);if(!i)throw Error(oe(90));Jg(n),Lh(n,i)}}}break;case"textarea":Qg(e,r);break;case"select":t=r.value,t!=null&&Ba(e,!!r.multiple,t,!1)}};a0=ep;s0=ta;var AM={usingClientEntryPoint:!1,Events:[Vo,Da,Cu,n0,i0,ep]},so={findFiberByHostInstance:ji,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},CM={bundleType:so.bundleType,version:so.version,rendererPackageName:so.rendererPackageName,rendererConfig:so.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=u0(e),e===null?null:e.stateNode},findFiberByHostInstance:so.findFiberByHostInstance||TM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(oo=__REACT_DEVTOOLS_GLOBAL_HOOK__,!oo.isDisabled&&oo.supportsFiber))try{Eu=oo.inject(CM),wn=oo}catch{}var oo;Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AM;Br.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!op(t))throw Error(oe(200));return EM(e,t,null,r)};Br.createRoot=function(e,t){if(!op(e))throw Error(oe(299));var r=!1,n="",i=Vv;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ip(e,1,!1,null,null,r,!1,n,i),e[Fn]=t.current,Po(e.nodeType===8?e.parentNode:e),new sp(t)};Br.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(oe(188)):(e=Object.keys(e).join(","),Error(oe(268,e)));return e=u0(t),e=e===null?null:e.stateNode,e};Br.flushSync=function(e){return ta(e)};Br.hydrate=function(e,t,r){if(!ku(t))throw Error(oe(200));return zu(null,e,t,!0,r)};Br.hydrateRoot=function(e,t,r){if(!op(e))throw Error(oe(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=Vv;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Bv(t,null,e,1,r??null,i,!1,a,s),e[Fn]=t.current,Po(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new Ou(t)};Br.render=function(e,t,r){if(!ku(t))throw Error(oe(200));return zu(null,e,t,!1,r)};Br.unmountComponentAtNode=function(e){if(!ku(e))throw Error(oe(40));return e._reactRootContainer?(ta(function(){zu(null,null,e,!1,function(){e._reactRootContainer=null,e[Fn]=null})}),!0):!1};Br.unstable_batchedUpdates=ep;Br.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!ku(r))throw Error(oe(200));if(e==null||e._reactInternals===void 0)throw Error(oe(38));return zu(e,t,r,!1,n)};Br.version="18.3.1-next-f1338f8080-20240426"});var Xv=Ln((vR,Wv)=>{"use strict";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(e){console.error(e)}}Gv(),Wv.exports=Hv()});var $v=Ln(lp=>{"use strict";var jv=Xv();lp.createRoot=jv.createRoot,lp.hydrateRoot=jv.hydrateRoot;var _R});var qv=Ln(Fu=>{"use strict";var RM=Ta(),PM=Symbol.for("react.element"),NM=Symbol.for("react.fragment"),LM=Object.prototype.hasOwnProperty,DM=RM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,IM={key:!0,ref:!0,__self:!0,__source:!0};function Yv(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)LM.call(t,n)&&!IM.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:PM,type:e,key:a,ref:s,props:i,_owner:DM.current}}Fu.Fragment=NM;Fu.jsx=Yv;Fu.jsxs=Yv});var Vr=Ln((SR,Jv)=>{"use strict";Jv.exports=qv()});var ix=or($v());var Bu=or(Ta()),Qv=or(Vr());var UM=()=>window.location.hash.slice(1).split("?")[0]||"/";function Kv({children:e}){let[,t]=Bu.default.useState(0);Bu.default.useEffect(()=>{let i=()=>t(a=>a+1);return window.addEventListener("hashchange",i),()=>window.removeEventListener("hashchange",i)},[]);let r=Bu.default.Children.toArray(e);return(r.find(i=>i.props.path===UM())||r[0]).props.element}var Vu=()=>null;var rr=or(Ta());var _t={bride:"Aastha",groom:"Mayank",brideFull:"Aastha Agrawal",groomFull:"Mayank Singhal",brideHi:"\u0906\u0938\u094D\u0925\u093E",groomHi:"\u092E\u092F\u0902\u0915",brideSurnameHi:"\u0905\u0917\u094D\u0930\u0935\u093E\u0932",groomSurnameHi:"\u0938\u093F\u0902\u0918\u0932",weddingDate:"2026-11-22",venueName:"Agrasen Bhawan",venueNameHi:"\u0905\u0917\u094D\u0930\u0938\u0947\u0928 \u092D\u0935\u0928",venueCity:"Rourkela, Odisha",mapsQuery:"Agrasen Bhawan Rourkela",events:[{id:"sangeet",name:"Sangeet",hi:"\u0938\u0902\u0917\u0940\u0924",date:"2026-11-21",time:"7:30 PM",note:"An evening of songs, dance and family.",icon:"note",venue:"Maheswari Bhawan"},{id:"baraat",name:"Baraat & Jaimala",hi:"\u092C\u093E\u0930\u093E\u0924",date:"2026-11-22",time:"6:30 PM",note:"The groom arrives. The garlands are exchanged.",icon:"diya",venue:"Agrasen Bhawan"},{id:"pheras",name:"Pheras",hi:"\u092B\u0947\u0930\u0947",date:"2026-11-22",time:"9:00 PM",note:"Seven vows around the sacred fire.",icon:"flame",venue:"Agrasen Bhawan"}],countdownTo:"2026-11-22T18:30:00+05:30",family:"The Agrawal and Singhal families"};function Go(e){let t=new Date(e+"T12:00:00+05:30"),r=n=>t.toLocaleDateString("en-IN",{timeZone:"Asia/Kolkata",...n});return{weekday:r({weekday:"long"}),day:r({day:"numeric"}),month:r({month:"long"}),monthShort:r({month:"short"}),year:r({year:"numeric"})}}function Zv(){return"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(_t.mapsQuery)}function e_(){let e=_t.events[_t.events.length-2],r=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Wedding//EN","BEGIN:VEVENT","UID:aastha-mayank-wedding@invite","DTSTAMP:20261001T000000Z","DTSTART;TZID=Asia/Kolkata:"+"20261122T183000","DTEND;TZID=Asia/Kolkata:20261122T233000",`SUMMARY:${_t.brideFull.split(" ")[0]} weds ${_t.groom} (${e.name})`,`LOCATION:${_t.venueName}\\, ${_t.venueCity}`,"END:VEVENT","END:VCALENDAR"];return"data:text/calendar;charset=utf-8,"+encodeURIComponent(r.join(`\r
`))}var Bt=or(Ta());var ht=or(Vr());function ia(e){let t=e>>>0;return()=>{t|=0,t=t+1831565813|0;let r=Math.imul(t^t>>>15,1|t);return r=r+Math.imul(r^r>>>7,61|r)^r,((r^r>>>14)>>>0)/4294967296}}function OM(){let[e,t]=(0,Bt.useState)(()=>typeof window<"u"&&!!window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);return(0,Bt.useEffect)(()=>{if(!window.matchMedia)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),n=()=>t(r.matches);return r.addEventListener?.("change",n),()=>r.removeEventListener?.("change",n)},[]),e}var n_=e=>Math.min(1,Math.max(0,e)),t_=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,kM=e=>e*e*(.6+.4*e),r_=e=>1-Math.pow(1-e,3),Wo=(e,t,r,n)=>n(n_((e-t)/(r-t)));function i_(){let e=()=>{let n=typeof window<"u"?new URLSearchParams(window.location.search).get("H"):null;if(n)return parseInt(n,10);if(typeof window<"u"&&window.top===window.self&&!n)return Math.max(520,window.innerHeight);let i=typeof window<"u"&&window.screen&&window.screen.height||800,a=typeof window<"u"&&window.innerWidth||390;return Math.round(Math.max(500,Math.min(i-250,a*2,840)))},[t,r]=(0,Bt.useState)(e);return(0,Bt.useEffect)(()=>{let n=()=>r(e());return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function a_(e=6200){let t=typeof window<"u"?new URLSearchParams(window.location.search):new URLSearchParams,r=OM(),n=t.get("skip")!==null,i=t.get("p"),[a,s]=(0,Bt.useState)(n?"done":"idle"),[o,l]=(0,Bt.useState)(n),u=(0,Bt.useRef)(null),c=(0,Bt.useRef)(0),h=y=>{let _=u.current;if(!_)return;let v=_.style;v.setProperty("--p",String(y)),v.setProperty("--door",String(Wo(y,.06,.4,t_))),v.setProperty("--cam",String(Wo(y,.16,.98,kM))),v.setProperty("--glow",String(Wo(y,.3,.9,t_))),v.setProperty("--fade",String(Wo(y,.84,1,r_))),v.setProperty("--ui",String(1-Wo(y,0,.12,r_)))};return(0,Bt.useEffect)(()=>{r&&a==="idle"&&(s("done"),l(!0))},[r,a]),(0,Bt.useEffect)(()=>{a==="idle"&&i!==null&&h(parseFloat(i))},[a,i]),(0,Bt.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),{state:a,ready:o,ref:u,start:()=>{if(a!=="idle")return;s("opening");let y=performance.now(),_=!1,v=p=>{let m=n_((p-y)/e);h(m),m>.86&&!_&&(_=!0,l(!0)),m<1?c.current=requestAnimationFrame(v):s("done")};c.current=requestAnimationFrame(v)},skip:()=>{cancelAnimationFrame(c.current),h(1),l(!0),s("done")}}}function zM(e){let[t,r]=(0,Bt.useState)(()=>Date.now());(0,Bt.useEffect)(()=>{let a=setInterval(()=>r(Date.now()),1e3);return()=>clearInterval(a)},[]);let n=Math.max(0,new Date(e).getTime()-t),i=Math.floor(n/1e3);return{days:Math.floor(i/86400),hours:Math.floor(i%86400/3600),minutes:Math.floor(i%3600/60),seconds:i%60,done:n===0}}function s_({cls:e}){let t=zM(_t.countdownTo),r=[["Days",t.days],["Hours",t.hours],["Minutes",t.minutes],["Seconds",t.seconds]];return(0,ht.jsx)("div",{className:e,role:"timer","aria-label":`${t.days} days, ${t.hours} hours, ${t.minutes} minutes and ${t.seconds} seconds until the wedding`,children:r.map(([n,i])=>(0,ht.jsxs)("div",{className:"cd-cell",children:[(0,ht.jsx)("span",{className:"cd-num","aria-hidden":"true",children:String(i).padStart(2,"0")}),(0,ht.jsx)("span",{className:"cd-label","aria-hidden":"true",children:n})]},n))})}function Gn({children:e,className:t="",delay:r=0,as:n="div"}){let i=(0,Bt.useRef)(null),[a,s]=(0,Bt.useState)(!1);return(0,Bt.useEffect)(()=>{let o=i.current;if(!o)return;if(!("IntersectionObserver"in window)){s(!0);return}let l=new IntersectionObserver(u=>u.forEach(c=>{c.isIntersecting&&(s(!0),l.disconnect())}),{threshold:.12});return l.observe(o),()=>l.disconnect()},[]),(0,ht.jsx)(n,{ref:i,className:`reveal ${a?"in":""} ${t}`,style:{transitionDelay:`${r}ms`},children:e})}function o_({count:e=22,kind:t="petal",seed:r=7}){let n=(0,Bt.useMemo)(()=>{let i=ia(r);return Array.from({length:e},()=>({l:i()*100,d:i()*-20,t:12+i()*14,s:6+i()*10,x:(i()-.5)*120,rot:i()*360,o:.35+i()*.5}))},[e,r]);return(0,ht.jsx)("div",{className:`drift drift-${t}`,"aria-hidden":"true",children:n.map((i,a)=>(0,ht.jsx)("i",{style:{left:`${i.l}%`,animationDelay:`${i.d}s`,animationDuration:`${i.t}s`,width:i.s,height:i.s*(t==="petal"?1.4:1),"--dx":`${i.x}px`,"--r":`${i.rot}deg`,opacity:i.o}},a))})}function up({name:e}){let t={fill:"none",stroke:"currentColor",strokeWidth:1.4,strokeLinecap:"round",strokeLinejoin:"round"},r={leaf:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("path",{d:"M6 26C6 14 14 7 26 6c0 12-7 20-20 20z",...t}),(0,ht.jsx)("path",{d:"M6 26L19 13",...t})]}),sun:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("circle",{cx:"16",cy:"16",r:"5",...t}),Array.from({length:8},(n,i)=>{let a=i*Math.PI/4;return(0,ht.jsx)("path",{d:`M${16+Math.cos(a)*8.5} ${16+Math.sin(a)*8.5}L${16+Math.cos(a)*12} ${16+Math.sin(a)*12}`,...t},i)})]}),note:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("path",{d:"M12 22V7l12-3v15",...t}),(0,ht.jsx)("circle",{cx:"9.5",cy:"22",r:"2.6",...t}),(0,ht.jsx)("circle",{cx:"21.5",cy:"19",r:"2.6",...t})]}),diya:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("path",{d:"M5 17c0 5 5 8 11 8s11-3 11-8z",...t}),(0,ht.jsx)("path",{d:"M16 15c-3-3-2-6 0-9 2 3 3 6 0 9z",...t})]}),flame:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("path",{d:"M16 28c-6 0-9-4-9-8 0-5 5-7 5-13 4 2 6 5 6 8 2-1 3-3 3-5 3 3 4 6 4 10 0 5-4 8-9 8z",...t}),(0,ht.jsx)("path",{d:"M16 28c-2.5 0-4-1.8-4-4 0-2.5 3-4 4-7 2 2 4 4 4 7 0 2.2-1.5 4-4 4z",...t})]}),pin:(0,ht.jsxs)(ht.Fragment,{children:[(0,ht.jsx)("path",{d:"M16 29s9-8.5 9-15a9 9 0 10-18 0c0 6.5 9 15 9 15z",...t}),(0,ht.jsx)("circle",{cx:"16",cy:"14",r:"3.4",...t})]})};return(0,ht.jsx)("svg",{viewBox:"0 0 32 32",width:"32",height:"32","aria-hidden":"true",children:r[e]})}var I=or(Vr()),Et=730,at=600;function Kt(e,t,r,n,i,a=!0){let s=n-i;return`M${e-t} ${r}V${n}C${e-t} ${n-.55*s} ${e-t*.3} ${i+.3*s} ${e} ${i}C${e+t*.3} ${i+.3*s} ${e+t} ${n-.55*s} ${e+t} ${n}V${r}${a?"Z":""}`}var Xo=(e,t,r)=>`M${e-r} ${t}C${e-r} ${t-r*.95} ${e-r*.25} ${t-r*1.05} ${e} ${t-r*1.65}C${e+r*.25} ${t-r*1.05} ${e+r} ${t-r*.95} ${e+r} ${t}Z`;function u_({x:e,y:t,s:r=1}){return(0,I.jsxs)("g",{stroke:"#f4c75a",fill:"#f4c75a",children:[(0,I.jsx)("line",{x1:e,y1:t,x2:e,y2:t-20*r,strokeWidth:2*r}),(0,I.jsx)("circle",{cx:e,cy:t-24*r,r:4.5*r,stroke:"none"}),(0,I.jsx)("circle",{cx:e,cy:t-31*r,r:2.4*r,stroke:"none"})]})}function l_({x:e,y:t,s:r=1}){let n=34*r;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Xo(e,t-38*r,n*.62),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:1.2}),(0,I.jsx)(u_,{x:e,y:t-38*r-n*.62*1.65,s:r*.7}),(0,I.jsx)("rect",{x:e-n*.7,y:t-40*r,width:n*1.4,height:4*r,fill:"#f4c75a"}),[-1,-.33,.33,1].map((i,a)=>(0,I.jsx)("rect",{x:e+i*n*.62-2*r,y:t-36*r,width:4*r,height:36*r,fill:"#8c2230",stroke:"#f4c75a",strokeWidth:.6},a)),(0,I.jsx)("rect",{x:e-n*.7,y:t-2,width:n*1.4,height:4*r,fill:"#f4c75a"})]})}function c_(){let e=ia(11),t=Array.from({length:190},()=>({x:-500+e()*2200,y:-200+e()*720,s:.6+e()*1.6,d:e()*5,t:2+e()*4}));return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rSky",gradientUnits:"userSpaceOnUse",x1:"0",y1:"0",x2:"0",y2:"900",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#14020a"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#3a0714"}),(0,I.jsx)("stop",{offset:"0.62",stopColor:"#7d1a1c"}),(0,I.jsx)("stop",{offset:"0.8",stopColor:"#c8561f"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a"})]}),(0,I.jsxs)("radialGradient",{id:"rMoon",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffe9a8",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffe9a8",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rCres",children:[(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#000"}),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"34",fill:"#fff"}),(0,I.jsx)("circle",{cx:"948",cy:"160",r:"30",fill:"#000"})]})]}),(0,I.jsx)("rect",{x:"-2000",y:"-2000",width:"5200",height:"5400",fill:"url(#rSky)"}),t.map((r,n)=>(0,I.jsx)("circle",{className:"twinkle",cx:r.x,cy:r.y,r:r.s,fill:"#ffe7a6",style:{animationDelay:`${r.d}s`,animationDuration:`${r.t}s`}},n)),(0,I.jsx)("circle",{cx:"930",cy:"170",r:"120",fill:"url(#rMoon)",opacity:"0.5"}),(0,I.jsx)("rect",{width:"1200",height:"900",fill:"#ffe9a8",mask:"url(#rCres)"})]})}function h_(){let e=ia(5),t=[],r=-900,n=0;for(;r<2100;){let i=50+e()*90,a=120+e()*170,s=640-a,o=e();t.push((0,I.jsx)("rect",{x:r,y:s,width:i,height:a+100,fill:"#3a0a16"},"b"+n)),o<.45?t.push((0,I.jsx)("path",{d:Xo(r+i/2,s,i*.38),fill:"#3a0a16"},"d"+n)):o<.7&&t.push((0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:r+i/2-4,y:s-70,width:"8",height:"70",fill:"#3a0a16"}),(0,I.jsx)("path",{d:Xo(r+i/2,s-70,9),fill:"#3a0a16"})]},"m"+n)),e()<.6&&t.push((0,I.jsx)("rect",{className:"flick",x:r+i*.3,y:s+24,width:"7",height:"12",rx:"3",fill:"#ffc45a",opacity:"0.8",style:{animationDelay:`${e()*4}s`}},"w"+n)),r+=i+2+e()*8,n++}return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("linearGradient",{id:"rHaze",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0.5",stopColor:"#f0a23a",stopOpacity:"0"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#f0a23a",stopOpacity:"0.45"})]})}),(0,I.jsx)("g",{opacity:"0.95",children:t}),(0,I.jsx)("rect",{x:"-1500",y:"420",width:"4200",height:"320",fill:"url(#rHaze)"})]})}function d_(){let n=i=>{let o=i===1?870:330,l=i===1?870:-660,u=990;return(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:l,y:"470",width:u,height:Et-470,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:l,y:"470",width:u,height:"8",fill:"#f4c75a"}),Array.from({length:Math.floor(u/15)},(c,h)=>(0,I.jsx)("rect",{x:l+h*15+2,y:"458",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},h)),Array.from({length:15},(c,h)=>{let d=i===1?o+66*h+33:o-66*h-33;return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Kt(d,22,690,590,540),fill:"#ffb347",opacity:"0.92"}),(0,I.jsx)("path",{d:Kt(d,22,690,590,540),fill:"none",stroke:"#f4c75a",strokeWidth:"2.5"}),(0,I.jsx)("path",{d:Kt(d,31,690,590,528,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.7"}),(0,I.jsx)("path",{d:Kt(d,14,690,600,565),fill:"#7b1a10",opacity:"0.55"})]},h)}),(0,I.jsx)("rect",{x:l,y:Et-36,width:u,height:"6",fill:"#f4c75a",opacity:"0.8"}),[60,270,560].map((c,h)=>(0,I.jsx)(l_,{x:i===1?870+c:330-c,y:"458",s:1.15},h))]})};return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsxs)("linearGradient",{id:"rWall",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#7a1626"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b18"})]}),(0,I.jsxs)("linearGradient",{id:"rDome",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a"}),(0,I.jsx)("stop",{offset:"0.55",stopColor:"#d99a2b"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]}),(0,I.jsxs)("radialGradient",{id:"rInner",cx:"0.5",cy:"0.62",r:"0.65",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff3c4"}),(0,I.jsx)("stop",{offset:"0.35",stopColor:"#ffc55a"}),(0,I.jsx)("stop",{offset:"0.75",stopColor:"#d9732a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#7a1c14"})]}),(0,I.jsxs)("linearGradient",{id:"rFloor",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#2a0710"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#12030a"})]}),(0,I.jsxs)("linearGradient",{id:"rSpill",x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd77a",stopOpacity:"0.95"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]}),(0,I.jsxs)("mask",{id:"rHole",maskUnits:"userSpaceOnUse",x:"-2000",y:"-1000",width:"5200",height:"3000",children:[(0,I.jsx)("rect",{x:"-2000",y:"-1000",width:"5200",height:"3000",fill:"#fff"}),(0,I.jsx)("path",{d:Kt(at,150,Et,400,262),fill:"#000"})]}),(0,I.jsx)("clipPath",{id:"rClipHole",children:(0,I.jsx)("path",{d:Kt(at,150,Et,400,262)})})]}),(0,I.jsx)("rect",{x:"-2000",y:Et-4,width:"5200",height:"1400",fill:"url(#rFloor)"}),(0,I.jsxs)("g",{clipPath:"url(#rClipHole)",children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"url(#rInner)"}),[1,.78,.58,.42].map((i,a)=>(0,I.jsx)("path",{d:Kt(at,150*.82*i,Et-40+a*6,410-a*4,306+(1-i)*140),fill:"none",stroke:"#7a1c14",strokeWidth:4-a*.7,opacity:.55-a*.06},a)),[-1,1].map(i=>[0,1,2].map(a=>(0,I.jsx)("rect",{x:at+i*(118-a*26)-5+(i<0,0),y:420+a*22,width:"10",height:300-a*40,fill:"#5b1210",opacity:.5-a*.1},i+""+a))),(0,I.jsx)("circle",{className:"flick",cx:at,cy:"355",r:"30",fill:"url(#rLamp)"}),(0,I.jsx)("circle",{cx:at,cy:"355",r:"5",fill:"#fff6cf"}),(0,I.jsx)("path",{d:`M${at-150} ${Et} L${at+150} ${Et} L${at+110} ${Et-70} L${at-110} ${Et-70}Z`,fill:"#ffe08a",opacity:"0.35"})]}),(0,I.jsxs)("g",{mask:"url(#rHole)",children:[n(1),n(-1),[330,820].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:i,y:"130",width:"50",height:Et-130,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:i,y:"130",width:"50",height:"6",fill:"#f4c75a"}),[0,1,2,3].map(a=>(0,I.jsx)("path",{d:Kt(i+25,10,230+a*120,205+a*120,188+a*120),fill:"#ffb347",className:"flick",style:{animationDelay:`${a*.7}s`},opacity:"0.85"},a)),(0,I.jsx)(l_,{x:i+25,y:"130",s:1.1})]},i)),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:Et-150,fill:"url(#rWall)"}),(0,I.jsx)("rect",{x:"380",y:"150",width:"440",height:"8",fill:"#f4c75a"}),(0,I.jsx)("rect",{x:"380",y:"164",width:"440",height:"3",fill:"#f4c75a",opacity:"0.6"}),Array.from({length:27},(i,a)=>(0,I.jsx)("rect",{x:382+a*16.2,y:"138",width:"9",height:"12",fill:"#5a1220",stroke:"#f4c75a",strokeWidth:"0.6"},a)),(0,I.jsx)("path",{d:Xo(at,138,56),fill:"url(#rDome)",stroke:"#f4c75a",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:Xo(at,138,56),fill:"none",stroke:"#8b4c10",strokeWidth:"1",opacity:"0.4",transform:"translate(0 6) scale(1 1)"}),(0,I.jsx)(u_,{x:at,y:138-56*1.65+4,s:1.5}),[-4,-3,-2,-1,1,2,3,4].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:Kt(at+i*46-(Math.abs(i)===1,0),15,250,218,190),fill:"#ffb347",className:"flick",style:{animationDelay:`${Math.abs(i)*.5}s`},opacity:"0.9"}),(0,I.jsx)("path",{d:Kt(at+i*46,20,250,218,182,!1),fill:"none",stroke:"#f4c75a",strokeWidth:"1.4"})]},i)),[-1,1].map(i=>(0,I.jsxs)("g",{children:[(0,I.jsx)("rect",{x:i<0?400:780,y:"330",width:"20",height:"360",fill:"none"}),[0,1,2].map(a=>(0,I.jsx)("path",{d:Kt(at+i*215,22,470+a*90,430+a*90,395+a*90),fill:"#3a0813",stroke:"#f4c75a",strokeWidth:"1.6"},a))]},i)),(0,I.jsx)("rect",{x:"380",y:"620",width:"440",height:"5",fill:"#f4c75a",opacity:"0.85"}),(0,I.jsx)("rect",{x:"380",y:Et-28,width:"440",height:"28",fill:"#2f0911"}),(0,I.jsx)("rect",{x:"380",y:Et-28,width:"440",height:"3",fill:"#f4c75a"})]}),(0,I.jsx)("path",{d:Kt(at,150,Et,400,262),fill:"none",stroke:"#f4c75a",strokeWidth:"6"}),(0,I.jsx)("path",{d:Kt(at,164,Et,392,232),fill:"none",stroke:"#f4c75a",strokeWidth:"2",opacity:"0.8"}),(0,I.jsx)("path",{d:Kt(at,176,Et,386,206),fill:"none",stroke:"#c98a2b",strokeWidth:"1.2",opacity:"0.7"}),Array.from({length:26},(i,a)=>{let s=a/25,o=Math.PI*(.02+.96*s),l=at-Math.cos(o)*164,u=392-Math.sin(o)*160*.98;return(0,I.jsx)("circle",{cx:l,cy:u,r:"2.4",fill:"#ffd77a",className:"twinkle",style:{animationDelay:`${a%7*.3}s`,animationDuration:"2.4s"}},a)}),(0,I.jsx)("path",{d:`M${at-14} 232Q${at} 200 ${at+14} 232Q${at} 218 ${at-14} 232Z`,fill:"#f4c75a"}),[0,1,2].map(i=>(0,I.jsx)("path",{d:`M${at-190-i*24} ${Et+i*14}H${at+190+i*24}V${Et+14+i*14}H${at-190-i*24}Z`,fill:i%2?"#2a0710":"#3a0b17",stroke:"#f4c75a",strokeWidth:"1",opacity:"0.95"},i))]})}function p_(){return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsx)("path",{d:`M${at-150} ${Et} L${at+150} ${Et} L${at+420} 900 L${at-420} 900Z`,fill:"url(#rSpill)",opacity:"0.85"})})}function f_(){let e=(t,r,n,i,a)=>Array.from({length:t},(s,o)=>(0,I.jsx)("path",{transform:`rotate(${360/t*o})`,d:`M0 ${-r}Q${i} ${(-r-n)/2} 0 ${-n}Q${-i} ${(-r-n)/2} 0 ${-r}Z`,fill:a},o));return(0,I.jsx)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:(0,I.jsxs)("g",{transform:`translate(${at} ${Et+62}) scale(1 0.17)`,opacity:"0.95",children:[(0,I.jsx)("circle",{r:"250",fill:"#2a0710",opacity:"0.6"}),e(24,130,245,22,"#e8590c"),e(24,110,190,16,"#ffb938"),e(16,70,140,20,"#b3122e"),e(12,30,90,14,"#ffe08a"),(0,I.jsx)("circle",{r:"26",fill:"#ffd77a"}),(0,I.jsx)("circle",{r:"12",fill:"#b3122e"})]})})}function m_({x:e,y:t,r,i:n}){let i=["#ff9d1c","#ffb938","#e8590c","#ffa726"][n%4];return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:e,cy:t,r,fill:i}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.62,fill:i,stroke:"#fff3c4",strokeOpacity:"0.45",strokeWidth:"0.8"}),(0,I.jsx)("circle",{cx:e,cy:t,r:r*.28,fill:"#ffe08a",opacity:"0.8"})]})}function FM({x:e,len:t,seed:r,delay:n}){let i=ia(r),a=Math.floor(t/15);return(0,I.jsxs)("g",{className:"sway",style:{animationDelay:`${n}s`},children:[(0,I.jsx)("line",{x1:e,y1:"0",x2:e,y2:t,stroke:"#6b3b12",strokeWidth:"1"}),Array.from({length:a},(s,o)=>(0,I.jsx)(m_,{x:e+(i()-.5)*2,y:10+o*15,r:7+i()*2,i:o+r},o)),(0,I.jsx)("path",{d:`M${e-7} ${t+6}Q${e} ${t+26} ${e+7} ${t+6}Z`,fill:"#b3122e"})]})}function g_(){let e=ia(3),t=(n,i,a,s,o,l)=>{let u=ia(l),c=Math.floor((i-n)/15);return(0,I.jsxs)("g",{children:[(0,I.jsx)("path",{d:`M${n} ${a}Q${(n+i)/2} ${a+s*2} ${i} ${a}`,fill:"none",stroke:"#6b3b12",strokeWidth:"1.2"}),Array.from({length:c+1},(h,d)=>{let f=d/c,y=n+(i-n)*f,_=(1-f)*(1-f)*a+2*f*(1-f)*(a+s*2)+f*f*a;return(0,I.jsx)(m_,{x:y,y:_+3+u()*1.5,r:8+u()*2,i:d},d)})]},o)},r=(n,i,a,s)=>(0,I.jsxs)("g",{className:"swing",style:{animationDelay:`${a}s`},children:[(0,I.jsx)("line",{x1:n,y1:"0",x2:n,y2:i,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("circle",{cx:n,cy:i+46,r:"64",fill:"url(#rLamp)",opacity:"0.6",className:"flick"}),(0,I.jsx)("path",{d:`M${n-6} ${i}h12l10 12h-32z`,fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${n-22} ${i+12}Q${n-34} ${i+46} ${n-20} ${i+80}H${n+20}Q${n+34} ${i+46} ${n+22} ${i+12}Z`,fill:"#e0481e",stroke:"#ffd77a",strokeWidth:"1.6"}),(0,I.jsx)("path",{d:`M${n-8} ${i+12}Q${n-14} ${i+46} ${n-8} ${i+80}M${n+8} ${i+12}Q${n+14} ${i+46} ${n+8} ${i+80}`,stroke:"#ffd77a",strokeWidth:"1",fill:"none"}),(0,I.jsx)("rect",{x:n-20,y:i+80,width:"40",height:"5",fill:"#c9952b"}),(0,I.jsx)("path",{d:`M${n} ${i+85}v22`,stroke:"#c9952b",strokeWidth:"1.4"}),(0,I.jsx)("path",{d:`M${n-5} ${i+107}h10l-5 10z`,fill:"#ffd77a"})]},s);return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rLamp",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff6cf"}),(0,I.jsx)("stop",{offset:"0.4",stopColor:"#ffd37a",stopOpacity:"0.8"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),t(330,870,-6,30,"a",21),t(330,600,20,26,"b",22),t(600,870,20,26,"c",23),[380,420,460,500,540,660,700,740,780,820].map((n,i)=>(0,I.jsx)(FM,{x:n,len:46+i*37%60,seed:i+40,delay:i%5*.4},n)),r(345,0,0,"l1"),r(855,0,.9,"l2")]})}function v_(){return(0,I.jsxs)("svg",{viewBox:"0 0 1200 900",className:"art","aria-hidden":"true",children:[(0,I.jsx)("defs",{children:(0,I.jsxs)("radialGradient",{id:"rGlow",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#ffd37a",stopOpacity:"0.9"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#ffb347",stopOpacity:"0"})]})}),[440,500,560,640,700,760].map((t,r)=>{let n=838+r%2*8;return(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{className:"flick",cx:t,cy:n-8,r:"34",fill:"url(#rGlow)",style:{animationDelay:`${r*.3}s`}}),(0,I.jsx)("path",{d:`M${t-16} ${n}Q${t} ${n+16} ${t+16} ${n}Q${t+9} ${n+3} ${t} ${n+3}Q${t-9} ${n+3} ${t-16} ${n}Z`,fill:"#c25a1e",stroke:"#ffd77a",strokeWidth:"1"}),(0,I.jsx)("path",{className:"flame",d:`M${t} ${n-2}C${t-6} ${n-9} ${t-3} ${n-16} ${t} ${n-22}C${t+3} ${n-16} ${t+6} ${n-9} ${t} ${n-2}Z`,fill:"#fff1b8",style:{animationDelay:`${r*.25}s`}})]},t)})]})}function cp({side:e}){let t="rd"+e,r=(n,i,a,s,o,l)=>Array.from({length:n},(u,c)=>(0,I.jsx)("path",{transform:`translate(${at} 520) rotate(${360/n*c})`,d:`M0 ${-i}Q${s} ${(-i-a)/2} 0 ${-a}Q${-s} ${(-i-a)/2} 0 ${-i}Z`,fill:l,stroke:o,strokeWidth:"1.1"},c));return(0,I.jsxs)("svg",{viewBox:`${e==="l"?450:600} 250 150 480`,className:"doorsvg",preserveAspectRatio:"none","aria-hidden":"true",children:[(0,I.jsxs)("defs",{children:[(0,I.jsx)("clipPath",{id:t+"c",children:(0,I.jsx)("path",{d:Kt(at,150,Et,400,262)})}),(0,I.jsxs)("linearGradient",{id:t+"g",x1:"0",y1:"0",x2:"1",y2:"0",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#5a0f1c"}),(0,I.jsx)("stop",{offset:"0.5",stopColor:"#7d1628"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#4a0b16"})]}),(0,I.jsx)("pattern",{id:t+"p",width:"22",height:"22",patternUnits:"userSpaceOnUse",patternTransform:"rotate(45)",children:(0,I.jsx)("path",{d:"M0 0H22M0 0V22",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.38"})}),(0,I.jsxs)("radialGradient",{id:t+"b",children:[(0,I.jsx)("stop",{offset:"0",stopColor:"#fff0b0"}),(0,I.jsx)("stop",{offset:"0.6",stopColor:"#e0a53a"}),(0,I.jsx)("stop",{offset:"1",stopColor:"#8b4c10"})]})]}),(0,I.jsxs)("g",{clipPath:`url(#${t}c)`,children:[(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:`url(#${t}g)`}),(0,I.jsx)("path",{d:Kt(at,138,Et-14,405,285),fill:`url(#${t}p)`}),(0,I.jsx)("path",{d:Kt(at,138,Et-14,405,285),fill:"none",stroke:"#f4c75a",strokeWidth:"2"}),(0,I.jsx)("path",{d:Kt(at,120,Et-30,410,310),fill:"none",stroke:"#f4c75a",strokeWidth:"0.9",opacity:"0.7"}),(0,I.jsx)("rect",{x:"440",y:"412",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),(0,I.jsx)("rect",{x:"440",y:"672",width:"320",height:"6",fill:"#f4c75a",opacity:"0.9"}),r(16,40,96,20,"#f4c75a","#8c1d2c"),r(16,24,64,11,"#f4c75a","#f4c75a"),r(8,12,36,9,"#7a1424","#ffe08a"),(0,I.jsx)("circle",{cx:at,cy:"520",r:"100",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,I.jsx)("circle",{cx:at,cy:"520",r:"108",fill:"none",stroke:"#f4c75a",strokeWidth:"0.8",strokeDasharray:"2 5"}),(0,I.jsx)("circle",{cx:at,cy:"520",r:"13",fill:`url(#${t}b)`}),[0,1,2,3].map(n=>Array.from({length:6},(i,a)=>(0,I.jsx)("circle",{cx:456+a*25,cy:430+n*0+(n<2?n*0:0)+0,r:"0"},n+"_"+a))),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"436",r:"3",fill:"#ffd77a",opacity:.9},"s"+i)),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"654",r:"3",fill:"#ffd77a",opacity:.9},"t"+i)),Array.from({length:7},(n,i)=>(0,I.jsx)("circle",{cx:462+i*22,cy:"696",r:"3",fill:"#ffd77a",opacity:.9},"u"+i)),[e==="l"?584:616].map(n=>(0,I.jsxs)("g",{children:[(0,I.jsx)("circle",{cx:n,cy:"560",r:"7",fill:`url(#${t}b)`}),(0,I.jsx)("circle",{cx:n,cy:"574",r:"10",fill:"none",stroke:"#f4c75a",strokeWidth:"3"})]},n)),(0,I.jsx)("rect",{x:e==="l"?592:598,y:"250",width:"10",height:"480",fill:"#2a0710",opacity:"0.5"}),(0,I.jsx)("rect",{x:"440",y:"240",width:"320",height:"500",fill:"#000",opacity:"0.12"})]})]})}var BM=0,__=1,VM=2,Oy=1,ky=2,Jn=3,Fi=0,Tr=1,bn=2,Zn=0,Rs=1,Ps=2,y_=3,x_=4,HM=5,fa=100,GM=101,WM=102,XM=103,jM=104,$M=200,YM=201,qM=202,JM=203,qp=204,Jp=205,KM=206,QM=207,ZM=208,ew=209,tw=210,rw=211,nw=212,iw=213,aw=214,Kp=0,Qp=1,Zp=2,Is=3,ef=4,tf=5,rf=6,nf=7,zy=0,sw=1,ow=2,zi=0,Fy=1,By=2,Vy=3,Yf=4,lw=5,Hy=6,Gy=7,Wy=300,Us=301,Os=302,af=303,sf=304,Oc=306,Pc=1e3,ga=1001,of=1002,jr=1003,uw=1004,Hu=1005,Cn=1006,hp=1007,va=1008,ii=1009,Xy=1010,jy=1011,ul=1012,qf=1013,_a=1014,Rn=1015,ei=1016,Jf=1017,Kf=1018,ks=1020,$y=35902,Yy=1021,qy=1022,gn=1023,Jy=1024,Ky=1025,Ns=1026,zs=1027,Qf=1028,Zf=1029,Qy=1030,em=1031,tm=1033,Mc=33776,wc=33777,Ec=33778,Tc=33779,lf=35840,uf=35841,cf=35842,hf=35843,df=36196,pf=37492,ff=37496,mf=37808,gf=37809,vf=37810,_f=37811,yf=37812,xf=37813,Sf=37814,Mf=37815,wf=37816,Ef=37817,Tf=37818,bf=37819,Af=37820,Cf=37821,bc=36492,Rf=36494,Pf=36495,Zy=36283,Nf=36284,Lf=36285,Df=36286,Nc=2300,If=2301,dp=2302,S_=2400,M_=2401,w_=2402,cw=3200,hw=3201,e1=0,dw=1,ki="",Wr="srgb",Bs="srgb-linear",kc="linear",gt="srgb",ts=7680,E_=519,pw=512,fw=513,mw=514,t1=515,gw=516,vw=517,_w=518,yw=519,Uf=35044,T_="300 es",Qn=2e3,Lc=2001,Vs=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let n=r.indexOf(t);n!==-1&&r.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let r=t.slice(0);for(let n=0,i=r.length;n<i;n++)r[n].call(this,e);e.target=null}}},pr=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pp=Math.PI/180,Of=180/Math.PI;function ti(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pr[e&255]+pr[e>>8&255]+pr[e>>16&255]+pr[e>>24&255]+"-"+pr[t&255]+pr[t>>8&255]+"-"+pr[t>>16&15|64]+pr[t>>24&255]+"-"+pr[r&63|128]+pr[r>>8&255]+"-"+pr[r>>16&255]+pr[r>>24&255]+pr[n&255]+pr[n>>8&255]+pr[n>>16&255]+pr[n>>24&255]).toLowerCase()}function Zt(e,t,r){return Math.max(t,Math.min(r,e))}function xw(e,t){return(e%t+t)%t}function fp(e,t,r){return(1-r)*e+r*t}function An(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function yt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}var ne=class r1{constructor(t=0,r=0){r1.prototype.isVector2=!0,this.x=t,this.y=r}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,r){return this.x=t,this.y=r,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let r=this.x,n=this.y,i=t.elements;return this.x=i[0]*r+i[3]*n+i[6],this.y=i[1]*r+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y;return r*r+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this}rotateAround(t,r){let n=Math.cos(r),i=Math.sin(r),a=this.x-t.x,s=this.y-t.y;return this.x=a*n-s*i+t.x,this.y=a*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class n1{constructor(t,r,n,i,a,s,o,l,u){n1.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,s,o,l,u)}set(t,r,n,i,a,s,o,l,u){let c=this.elements;return c[0]=t,c[1]=i,c[2]=o,c[3]=r,c[4]=a,c[5]=l,c[6]=n,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],this}extractBasis(t,r,n){return t.setFromMatrix3Column(this,0),r.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let r=t.elements;return this.set(r[0],r[4],r[8],r[1],r[5],r[9],r[2],r[6],r[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,s=n[0],o=n[3],l=n[6],u=n[1],c=n[4],h=n[7],d=n[2],f=n[5],y=n[8],_=i[0],v=i[3],p=i[6],m=i[1],g=i[4],x=i[7],P=i[2],T=i[5],b=i[8];return a[0]=s*_+o*m+l*P,a[3]=s*v+o*g+l*T,a[6]=s*p+o*x+l*b,a[1]=u*_+c*m+h*P,a[4]=u*v+c*g+h*T,a[7]=u*p+c*x+h*b,a[2]=d*_+f*m+y*P,a[5]=d*v+f*g+y*T,a[8]=d*p+f*x+y*b,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[3]*=t,r[6]*=t,r[1]*=t,r[4]*=t,r[7]*=t,r[2]*=t,r[5]*=t,r[8]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8];return r*s*c-r*o*u-n*a*c+n*o*l+i*a*u-i*s*l}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=c*s-o*u,d=o*l-c*a,f=u*a-s*l,y=r*h+n*d+i*f;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/y;return t[0]=h*_,t[1]=(i*u-c*n)*_,t[2]=(o*n-i*s)*_,t[3]=d*_,t[4]=(c*r-i*l)*_,t[5]=(i*a-o*r)*_,t[6]=f*_,t[7]=(n*l-u*r)*_,t[8]=(s*r-n*a)*_,this}transpose(){let t,r=this.elements;return t=r[1],r[1]=r[3],r[3]=t,t=r[2],r[2]=r[6],r[6]=t,t=r[5],r[5]=r[7],r[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let r=this.elements;return t[0]=r[0],t[1]=r[3],t[2]=r[6],t[3]=r[1],t[4]=r[4],t[5]=r[7],t[6]=r[2],t[7]=r[5],t[8]=r[8],this}setUvTransform(t,r,n,i,a,s,o){let l=Math.cos(a),u=Math.sin(a);return this.set(n*l,n*u,-n*(l*s+u*o)+s+t,-i*u,i*l,-i*(-u*s+l*o)+o+r,0,0,1),this}scale(t,r){return this.premultiply(mp.makeScale(t,r)),this}rotate(t){return this.premultiply(mp.makeRotation(-t)),this}translate(t,r){return this.premultiply(mp.makeTranslation(t,r)),this}makeTranslation(t,r){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,r,0,0,1),this}makeRotation(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,n,r,0,0,0,1),this}makeScale(t,r){return this.set(t,0,0,0,r,0,0,0,1),this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<9;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<9;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},mp=new ot;function i1(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Dc(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Sw(){let e=Dc("canvas");return e.style.display="block",e}var b_={};function nl(e){e in b_||(b_[e]=!0,console.warn(e))}function Mw(e,t,r){return new Promise(function(n,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,r);break;default:n()}}setTimeout(a,r)})}function ww(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ew(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var dt={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(e,t,r){return this.enabled===!1||t===r||!t||!r||(this.spaces[t].transfer===gt&&(e.r=ri(e.r),e.g=ri(e.g),e.b=ri(e.b)),this.spaces[t].primaries!==this.spaces[r].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===gt&&(e.r=Ls(e.r),e.g=Ls(e.g),e.b=Ls(e.b))),e},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===ki?kc:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,r){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function ri(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Ls(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var A_=[.64,.33,.3,.6,.15,.06],C_=[.2126,.7152,.0722],R_=[.3127,.329],P_=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N_=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);dt.define({[Bs]:{primaries:A_,whitePoint:R_,transfer:kc,toXYZ:P_,fromXYZ:N_,luminanceCoefficients:C_,workingColorSpaceConfig:{unpackColorSpace:Wr},outputColorSpaceConfig:{drawingBufferColorSpace:Wr}},[Wr]:{primaries:A_,whitePoint:R_,transfer:gt,toXYZ:P_,fromXYZ:N_,luminanceCoefficients:C_,outputColorSpaceConfig:{drawingBufferColorSpace:Wr}}});var rs,Tw=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{rs===void 0&&(rs=Dc("canvas")),rs.width=e.width,rs.height=e.height;let r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Dc("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=ri(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ri(t[r]/255)*255):t[r]=ri(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},bw=0,a1=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bw++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,s=n.length;a<s;a++)n[a].isDataTexture?i.push(gp(n[a].image)):i.push(gp(n[a]))}else i=gp(n);r.url=i}return t||(e.images[this.uuid]=r),r}};function gp(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?Tw.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Aw=0,tn=class Ac extends Vs{constructor(t=Ac.DEFAULT_IMAGE,r=Ac.DEFAULT_MAPPING,n=ga,i=ga,a=Cn,s=va,o=gn,l=ii,u=Ac.DEFAULT_ANISOTROPY,c=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Aw++}),this.uuid=ti(),this.name="",this.source=new a1(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let r=t===void 0||typeof t=="string";if(!r&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),r||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pc:t.x=t.x-Math.floor(t.x);break;case ga:t.x=t.x<0?0:1;break;case of:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pc:t.y=t.y-Math.floor(t.y);break;case ga:t.y=t.y<0?0:1;break;case of:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Wy;tn.DEFAULT_ANISOTROPY=1;var Tt=class s1{constructor(t=0,r=0,n=0,i=1){s1.prototype.isVector4=!0,this.x=t,this.y=r,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,r,n,i){return this.x=t,this.y=r,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;case 3:this.w=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this.w=t.w+r.w,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this.w+=t.w*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this.w=t.w-r.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=this.w,s=t.elements;return this.x=s[0]*r+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*r+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*r+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*r+s[7]*n+s[11]*i+s[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let r=Math.sqrt(1-t.w*t.w);return r<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/r,this.y=t.y/r,this.z=t.z/r),this}setAxisAngleFromRotationMatrix(t){let r,n,i,a,s=t.elements,o=s[0],l=s[4],u=s[8],c=s[1],h=s[5],d=s[9],f=s[2],y=s[6],_=s[10];if(Math.abs(l-c)<.01&&Math.abs(u-f)<.01&&Math.abs(d-y)<.01){if(Math.abs(l+c)<.1&&Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(o+h+_-3)<.1)return this.set(1,0,0,0),this;r=Math.PI;let p=(o+1)/2,m=(h+1)/2,g=(_+1)/2,x=(l+c)/4,P=(u+f)/4,T=(d+y)/4;return p>m&&p>g?p<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(p),i=x/n,a=P/n):m>g?m<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(m),n=x/i,a=T/i):g<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(g),n=P/a,i=T/a),this.set(n,i,a,r),this}let v=Math.sqrt((y-d)*(y-d)+(u-f)*(u-f)+(c-l)*(c-l));return Math.abs(v)<.001&&(v=1),this.x=(y-d)/v,this.y=(u-f)/v,this.z=(c-l)/v,this.w=Math.acos((o+h+_-1)/2),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this.w=r[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this.w=Math.max(t.w,Math.min(r.w,this.w)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this.w=Math.max(t,Math.min(r,this.w)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this.w+=(t.w-this.w)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this.w=t.w+(r.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this.w=t[r+3],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t[r+3]=this.w,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this.w=t.getW(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Cw=class extends Vs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);let n={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);let i=new tn(n,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);i.flipY=!1,i.generateMipmaps=r.generateMipmaps,i.internalFormat=r.internalFormat,this.textures=[];let a=r.count;for(let s=0;s<a;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,n=e.textures.length;r<n;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new a1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vn=class extends Cw{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},o1=class extends tn{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=jr,this.minFilter=jr,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Rw=class extends tn{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=jr,this.minFilter=jr,this.wrapR=ga,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Hs=class{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,s){let o=r[n+0],l=r[n+1],u=r[n+2],c=r[n+3],h=i[a+0],d=i[a+1],f=i[a+2],y=i[a+3];if(s===0){e[t+0]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c;return}if(s===1){e[t+0]=h,e[t+1]=d,e[t+2]=f,e[t+3]=y;return}if(c!==y||o!==h||l!==d||u!==f){let _=1-s,v=o*h+l*d+u*f+c*y,p=v>=0?1:-1,m=1-v*v;if(m>Number.EPSILON){let x=Math.sqrt(m),P=Math.atan2(x,v*p);_=Math.sin(_*P)/x,s=Math.sin(s*P)/x}let g=s*p;if(o=o*_+h*g,l=l*_+d*g,u=u*_+f*g,c=c*_+y*g,_===1-s){let x=1/Math.sqrt(o*o+l*l+u*u+c*c);o*=x,l*=x,u*=x,c*=x}}e[t]=o,e[t+1]=l,e[t+2]=u,e[t+3]=c}static multiplyQuaternionsFlat(e,t,r,n,i,a){let s=r[n],o=r[n+1],l=r[n+2],u=r[n+3],c=i[a],h=i[a+1],d=i[a+2],f=i[a+3];return e[t]=s*f+u*c+o*d-l*h,e[t+1]=o*f+u*h+l*c-s*d,e[t+2]=l*f+u*d+s*h-o*c,e[t+3]=u*f-s*c-o*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,n=e._y,i=e._z,a=e._order,s=Math.cos,o=Math.sin,l=s(r/2),u=s(n/2),c=s(i/2),h=o(r/2),d=o(n/2),f=o(i/2);switch(a){case"XYZ":this._x=h*u*c+l*d*f,this._y=l*d*c-h*u*f,this._z=l*u*f+h*d*c,this._w=l*u*c-h*d*f;break;case"YXZ":this._x=h*u*c+l*d*f,this._y=l*d*c-h*u*f,this._z=l*u*f-h*d*c,this._w=l*u*c+h*d*f;break;case"ZXY":this._x=h*u*c-l*d*f,this._y=l*d*c+h*u*f,this._z=l*u*f+h*d*c,this._w=l*u*c-h*d*f;break;case"ZYX":this._x=h*u*c-l*d*f,this._y=l*d*c+h*u*f,this._z=l*u*f-h*d*c,this._w=l*u*c+h*d*f;break;case"YZX":this._x=h*u*c+l*d*f,this._y=l*d*c+h*u*f,this._z=l*u*f-h*d*c,this._w=l*u*c-h*d*f;break;case"XZY":this._x=h*u*c-l*d*f,this._y=l*d*c-h*u*f,this._z=l*u*f+h*d*c,this._w=l*u*c+h*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],s=t[5],o=t[9],l=t[2],u=t[6],c=t[10],h=r+s+c;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-o)*d,this._y=(i-l)*d,this._z=(a-n)*d}else if(r>s&&r>c){let d=2*Math.sqrt(1+r-s-c);this._w=(u-o)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(i+l)/d}else if(s>c){let d=2*Math.sqrt(1+s-r-c);this._w=(i-l)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(o+u)/d}else{let d=2*Math.sqrt(1+c-r-s);this._w=(a-n)/d,this._x=(i+l)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,n=e._y,i=e._z,a=e._w,s=t._x,o=t._y,l=t._z,u=t._w;return this._x=r*u+a*s+n*l-i*o,this._y=n*u+a*o+i*s-r*l,this._z=i*u+a*l+r*o-n*s,this._w=a*u-r*s-n*o-i*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let r=this._x,n=this._y,i=this._z,a=this._w,s=a*e._w+r*e._x+n*e._y+i*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=r,this._y=n,this._z=i,this;let o=1-s*s;if(o<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*r+t*this._x,this._y=d*n+t*this._y,this._z=d*i+t*this._z,this.normalize(),this}let l=Math.sqrt(o),u=Math.atan2(l,s),c=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=a*c+this._w*h,this._x=r*c+this._x*h,this._y=n*c+this._y*h,this._z=i*c+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class l1{constructor(t=0,r=0,n=0){l1.prototype.isVector3=!0,this.x=t,this.y=r,this.z=n}set(t,r,n){return n===void 0&&(n=this.z),this.x=t,this.y=r,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,r){switch(t){case 0:this.x=r;break;case 1:this.y=r;break;case 2:this.z=r;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,r){return this.x=t.x+r.x,this.y=t.y+r.y,this.z=t.z+r.z,this}addScaledVector(t,r){return this.x+=t.x*r,this.y+=t.y*r,this.z+=t.z*r,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,r){return this.x=t.x-r.x,this.y=t.y-r.y,this.z=t.z-r.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,r){return this.x=t.x*r.x,this.y=t.y*r.y,this.z=t.z*r.z,this}applyEuler(t){return this.applyQuaternion(L_.setFromEuler(t))}applyAxisAngle(t,r){return this.applyQuaternion(L_.setFromAxisAngle(t,r))}applyMatrix3(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[3]*n+a[6]*i,this.y=a[1]*r+a[4]*n+a[7]*i,this.z=a[2]*r+a[5]*n+a[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let r=this.x,n=this.y,i=this.z,a=t.elements,s=1/(a[3]*r+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*r+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*r+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*r+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(t){let r=this.x,n=this.y,i=this.z,a=t.x,s=t.y,o=t.z,l=t.w,u=2*(s*i-o*n),c=2*(o*r-a*i),h=2*(a*n-s*r);return this.x=r+l*u+s*h-o*c,this.y=n+l*c+o*u-a*h,this.z=i+l*h+a*c-s*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let r=this.x,n=this.y,i=this.z,a=t.elements;return this.x=a[0]*r+a[4]*n+a[8]*i,this.y=a[1]*r+a[5]*n+a[9]*i,this.z=a[2]*r+a[6]*n+a[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,r){return this.x=Math.max(t.x,Math.min(r.x,this.x)),this.y=Math.max(t.y,Math.min(r.y,this.y)),this.z=Math.max(t.z,Math.min(r.z,this.z)),this}clampScalar(t,r){return this.x=Math.max(t,Math.min(r,this.x)),this.y=Math.max(t,Math.min(r,this.y)),this.z=Math.max(t,Math.min(r,this.z)),this}clampLength(t,r){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(r,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,r){return this.x+=(t.x-this.x)*r,this.y+=(t.y-this.y)*r,this.z+=(t.z-this.z)*r,this}lerpVectors(t,r,n){return this.x=t.x+(r.x-t.x)*n,this.y=t.y+(r.y-t.y)*n,this.z=t.z+(r.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,r){let n=t.x,i=t.y,a=t.z,s=r.x,o=r.y,l=r.z;return this.x=i*l-a*o,this.y=a*s-n*l,this.z=n*o-i*s,this}projectOnVector(t){let r=t.lengthSq();if(r===0)return this.set(0,0,0);let n=t.dot(this)/r;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return vp.copy(this).projectOnVector(t),this.sub(vp)}reflect(t){return this.sub(vp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let r=Math.sqrt(this.lengthSq()*t.lengthSq());if(r===0)return Math.PI/2;let n=this.dot(t)/r;return Math.acos(Zt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let r=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return r*r+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,r,n){let i=Math.sin(r)*t;return this.x=i*Math.sin(n),this.y=Math.cos(r)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,r,n){return this.x=t*Math.sin(r),this.y=n,this.z=t*Math.cos(r),this}setFromMatrixPosition(t){let r=t.elements;return this.x=r[12],this.y=r[13],this.z=r[14],this}setFromMatrixScale(t){let r=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=r,this.y=n,this.z=i,this}setFromMatrixColumn(t,r){return this.fromArray(t.elements,r*4)}setFromMatrix3Column(t,r){return this.fromArray(t.elements,r*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,r=0){return this.x=t[r],this.y=t[r+1],this.z=t[r+2],this}toArray(t=[],r=0){return t[r]=this.x,t[r+1]=this.y,t[r+2]=this.z,t}fromBufferAttribute(t,r){return this.x=t.getX(r),this.y=t.getY(r),this.z=t.getZ(r),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,r=Math.random()*2-1,n=Math.sqrt(1-r*r);return this.x=n*Math.cos(t),this.y=r,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vp=new L,L_=new Hs,xa=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=i.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,dn):dn.fromBufferAttribute(i,a),dn.applyMatrix4(e.matrixWorld),this.expandByPoint(dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Gu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Gu.copy(r.boundingBox)),Gu.applyMatrix4(e.matrixWorld),this.union(Gu)}let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,dn),dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),Wu.subVectors(this.max,jo),ns.subVectors(e.a,jo),is.subVectors(e.b,jo),as.subVectors(e.c,jo),Ri.subVectors(is,ns),Pi.subVectors(as,is),aa.subVectors(ns,as);let t=[0,-Ri.z,Ri.y,0,-Pi.z,Pi.y,0,-aa.z,aa.y,Ri.z,0,-Ri.x,Pi.z,0,-Pi.x,aa.z,0,-aa.x,-Ri.y,Ri.x,0,-Pi.y,Pi.x,0,-aa.y,aa.x,0];return!_p(t,ns,is,as,Wu)||(t=[1,0,0,0,1,0,0,0,1],!_p(t,ns,is,as,Wu))?!1:(Xu.crossVectors(Ri,Pi),t=[Xu.x,Xu.y,Xu.z],_p(t,ns,is,as,Wu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Wn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,Gu=new xa,ns=new L,is=new L,as=new L,Ri=new L,Pi=new L,aa=new L,jo=new L,Wu=new L,Xu=new L,sa=new L;function _p(e,t,r,n,i){for(let a=0,s=e.length-3;a<=s;a+=3){sa.fromArray(e,a);let o=i.x*Math.abs(sa.x)+i.y*Math.abs(sa.y)+i.z*Math.abs(sa.z),l=t.dot(sa),u=r.dot(sa),c=n.dot(sa);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}var Pw=new xa,$o=new L,yp=new L,Gs=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):Pw.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let t=$o.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector($o,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yp.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(yp)),this.expandByPoint($o.copy(e.center).sub(yp))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Xn=new L,xp=new L,ju=new L,Ni=new L,Sp=new L,$u=new L,Mp=new L,u1=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){xp.copy(e).add(t).multiplyScalar(.5),ju.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(xp);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ju),s=Ni.dot(this.direction),o=-Ni.dot(ju),l=Ni.lengthSq(),u=Math.abs(1-a*a),c,h,d,f;if(u>0)if(c=a*o-s,h=a*s-o,f=i*u,c>=0)if(h>=-f)if(h<=f){let y=1/u;c*=y,h*=y,d=c*(c+a*h+2*s)+h*(a*c+h+2*o)+l}else h=i,c=Math.max(0,-(a*h+s)),d=-c*c+h*(h+2*o)+l;else h=-i,c=Math.max(0,-(a*h+s)),d=-c*c+h*(h+2*o)+l;else h<=-f?(c=Math.max(0,-(-a*i+s)),h=c>0?-i:Math.min(Math.max(-i,-o),i),d=-c*c+h*(h+2*o)+l):h<=f?(c=0,h=Math.min(Math.max(-i,-o),i),d=h*(h+2*o)+l):(c=Math.max(0,-(a*i+s)),h=c>0?i:Math.min(Math.max(-i,-o),i),d=-c*c+h*(h+2*o)+l);else h=a>0?-i:i,c=Math.max(0,-(a*h+s)),d=-c*c+h*(h+2*o)+l;return r&&r.copy(this.origin).addScaledVector(this.direction,c),n&&n.copy(xp).addScaledVector(ju,h),d}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);let r=Xn.dot(this.direction),n=Xn.dot(Xn)-r*r,i=e.radius*e.radius;if(n>i)return null;let a=Math.sqrt(i-n),s=r-a,o=r+a;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,s,o,l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,h=this.origin;return l>=0?(r=(e.min.x-h.x)*l,n=(e.max.x-h.x)*l):(r=(e.max.x-h.x)*l,n=(e.min.x-h.x)*l),u>=0?(i=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(i=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),c>=0?(s=(e.min.z-h.z)*c,o=(e.max.z-h.z)*c):(s=(e.max.z-h.z)*c,o=(e.min.z-h.z)*c),r>o||s>n)||((s>r||r!==r)&&(r=s),(o<n||n!==n)&&(n=o),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,r,n,i){Sp.subVectors(t,e),$u.subVectors(r,e),Mp.crossVectors(Sp,$u);let a=this.direction.dot(Mp),s;if(a>0){if(n)return null;s=1}else if(a<0)s=-1,a=-a;else return null;Ni.subVectors(this.origin,e);let o=s*this.direction.dot($u.crossVectors(Ni,$u));if(o<0)return null;let l=s*this.direction.dot(Sp.cross(Ni));if(l<0||o+l>a)return null;let u=-s*Ni.dot(Mp);return u<0?null:this.at(u/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bt=class kf{constructor(t,r,n,i,a,s,o,l,u,c,h,d,f,y,_,v){kf.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,r,n,i,a,s,o,l,u,c,h,d,f,y,_,v)}set(t,r,n,i,a,s,o,l,u,c,h,d,f,y,_,v){let p=this.elements;return p[0]=t,p[4]=r,p[8]=n,p[12]=i,p[1]=a,p[5]=s,p[9]=o,p[13]=l,p[2]=u,p[6]=c,p[10]=h,p[14]=d,p[3]=f,p[7]=y,p[11]=_,p[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kf().fromArray(this.elements)}copy(t){let r=this.elements,n=t.elements;return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r[4]=n[4],r[5]=n[5],r[6]=n[6],r[7]=n[7],r[8]=n[8],r[9]=n[9],r[10]=n[10],r[11]=n[11],r[12]=n[12],r[13]=n[13],r[14]=n[14],r[15]=n[15],this}copyPosition(t){let r=this.elements,n=t.elements;return r[12]=n[12],r[13]=n[13],r[14]=n[14],this}setFromMatrix3(t){let r=t.elements;return this.set(r[0],r[3],r[6],0,r[1],r[4],r[7],0,r[2],r[5],r[8],0,0,0,0,1),this}extractBasis(t,r,n){return t.setFromMatrixColumn(this,0),r.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,r,n){return this.set(t.x,r.x,n.x,0,t.y,r.y,n.y,0,t.z,r.z,n.z,0,0,0,0,1),this}extractRotation(t){let r=this.elements,n=t.elements,i=1/ss.setFromMatrixColumn(t,0).length(),a=1/ss.setFromMatrixColumn(t,1).length(),s=1/ss.setFromMatrixColumn(t,2).length();return r[0]=n[0]*i,r[1]=n[1]*i,r[2]=n[2]*i,r[3]=0,r[4]=n[4]*a,r[5]=n[5]*a,r[6]=n[6]*a,r[7]=0,r[8]=n[8]*s,r[9]=n[9]*s,r[10]=n[10]*s,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromEuler(t){let r=this.elements,n=t.x,i=t.y,a=t.z,s=Math.cos(n),o=Math.sin(n),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),h=Math.sin(a);if(t.order==="XYZ"){let d=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=-l*h,r[8]=u,r[1]=f+y*u,r[5]=d-_*u,r[9]=-o*l,r[2]=_-d*u,r[6]=y+f*u,r[10]=s*l}else if(t.order==="YXZ"){let d=l*c,f=l*h,y=u*c,_=u*h;r[0]=d+_*o,r[4]=y*o-f,r[8]=s*u,r[1]=s*h,r[5]=s*c,r[9]=-o,r[2]=f*o-y,r[6]=_+d*o,r[10]=s*l}else if(t.order==="ZXY"){let d=l*c,f=l*h,y=u*c,_=u*h;r[0]=d-_*o,r[4]=-s*h,r[8]=y+f*o,r[1]=f+y*o,r[5]=s*c,r[9]=_-d*o,r[2]=-s*u,r[6]=o,r[10]=s*l}else if(t.order==="ZYX"){let d=s*c,f=s*h,y=o*c,_=o*h;r[0]=l*c,r[4]=y*u-f,r[8]=d*u+_,r[1]=l*h,r[5]=_*u+d,r[9]=f*u-y,r[2]=-u,r[6]=o*l,r[10]=s*l}else if(t.order==="YZX"){let d=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=_-d*h,r[8]=y*h+f,r[1]=h,r[5]=s*c,r[9]=-o*c,r[2]=-u*c,r[6]=f*h+y,r[10]=d-_*h}else if(t.order==="XZY"){let d=s*l,f=s*u,y=o*l,_=o*u;r[0]=l*c,r[4]=-h,r[8]=u*c,r[1]=d*h+_,r[5]=s*c,r[9]=f*h-y,r[2]=y*h-f,r[6]=o*c,r[10]=_*h+d}return r[3]=0,r[7]=0,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Nw,t,Lw)}lookAt(t,r,n){let i=this.elements;return Hr.subVectors(t,r),Hr.lengthSq()===0&&(Hr.z=1),Hr.normalize(),Li.crossVectors(n,Hr),Li.lengthSq()===0&&(Math.abs(n.z)===1?Hr.x+=1e-4:Hr.z+=1e-4,Hr.normalize(),Li.crossVectors(n,Hr)),Li.normalize(),Yu.crossVectors(Hr,Li),i[0]=Li.x,i[4]=Yu.x,i[8]=Hr.x,i[1]=Li.y,i[5]=Yu.y,i[9]=Hr.y,i[2]=Li.z,i[6]=Yu.z,i[10]=Hr.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,r){let n=t.elements,i=r.elements,a=this.elements,s=n[0],o=n[4],l=n[8],u=n[12],c=n[1],h=n[5],d=n[9],f=n[13],y=n[2],_=n[6],v=n[10],p=n[14],m=n[3],g=n[7],x=n[11],P=n[15],T=i[0],b=i[4],R=i[8],E=i[12],M=i[1],N=i[5],k=i[9],H=i[13],W=i[2],$=i[6],j=i[10],ie=i[14],Y=i[3],de=i[7],Me=i[11],Ke=i[15];return a[0]=s*T+o*M+l*W+u*Y,a[4]=s*b+o*N+l*$+u*de,a[8]=s*R+o*k+l*j+u*Me,a[12]=s*E+o*H+l*ie+u*Ke,a[1]=c*T+h*M+d*W+f*Y,a[5]=c*b+h*N+d*$+f*de,a[9]=c*R+h*k+d*j+f*Me,a[13]=c*E+h*H+d*ie+f*Ke,a[2]=y*T+_*M+v*W+p*Y,a[6]=y*b+_*N+v*$+p*de,a[10]=y*R+_*k+v*j+p*Me,a[14]=y*E+_*H+v*ie+p*Ke,a[3]=m*T+g*M+x*W+P*Y,a[7]=m*b+g*N+x*$+P*de,a[11]=m*R+g*k+x*j+P*Me,a[15]=m*E+g*H+x*ie+P*Ke,this}multiplyScalar(t){let r=this.elements;return r[0]*=t,r[4]*=t,r[8]*=t,r[12]*=t,r[1]*=t,r[5]*=t,r[9]*=t,r[13]*=t,r[2]*=t,r[6]*=t,r[10]*=t,r[14]*=t,r[3]*=t,r[7]*=t,r[11]*=t,r[15]*=t,this}determinant(){let t=this.elements,r=t[0],n=t[4],i=t[8],a=t[12],s=t[1],o=t[5],l=t[9],u=t[13],c=t[2],h=t[6],d=t[10],f=t[14],y=t[3],_=t[7],v=t[11],p=t[15];return y*(+a*l*h-i*u*h-a*o*d+n*u*d+i*o*f-n*l*f)+_*(+r*l*f-r*u*d+a*s*d-i*s*f+i*u*c-a*l*c)+v*(+r*u*h-r*o*f-a*s*h+n*s*f+a*o*c-n*u*c)+p*(-i*o*c-r*l*h+r*o*d+i*s*h-n*s*d+n*l*c)}transpose(){let t=this.elements,r;return r=t[1],t[1]=t[4],t[4]=r,r=t[2],t[2]=t[8],t[8]=r,r=t[6],t[6]=t[9],t[9]=r,r=t[3],t[3]=t[12],t[12]=r,r=t[7],t[7]=t[13],t[13]=r,r=t[11],t[11]=t[14],t[14]=r,this}setPosition(t,r,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=r,i[14]=n),this}invert(){let t=this.elements,r=t[0],n=t[1],i=t[2],a=t[3],s=t[4],o=t[5],l=t[6],u=t[7],c=t[8],h=t[9],d=t[10],f=t[11],y=t[12],_=t[13],v=t[14],p=t[15],m=h*v*u-_*d*u+_*l*f-o*v*f-h*l*p+o*d*p,g=y*d*u-c*v*u-y*l*f+s*v*f+c*l*p-s*d*p,x=c*_*u-y*h*u+y*o*f-s*_*f-c*o*p+s*h*p,P=y*h*l-c*_*l-y*o*d+s*_*d+c*o*v-s*h*v,T=r*m+n*g+i*x+a*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/T;return t[0]=m*b,t[1]=(_*d*a-h*v*a-_*i*f+n*v*f+h*i*p-n*d*p)*b,t[2]=(o*v*a-_*l*a+_*i*u-n*v*u-o*i*p+n*l*p)*b,t[3]=(h*l*a-o*d*a-h*i*u+n*d*u+o*i*f-n*l*f)*b,t[4]=g*b,t[5]=(c*v*a-y*d*a+y*i*f-r*v*f-c*i*p+r*d*p)*b,t[6]=(y*l*a-s*v*a-y*i*u+r*v*u+s*i*p-r*l*p)*b,t[7]=(s*d*a-c*l*a+c*i*u-r*d*u-s*i*f+r*l*f)*b,t[8]=x*b,t[9]=(y*h*a-c*_*a-y*n*f+r*_*f+c*n*p-r*h*p)*b,t[10]=(s*_*a-y*o*a+y*n*u-r*_*u-s*n*p+r*o*p)*b,t[11]=(c*o*a-s*h*a-c*n*u+r*h*u+s*n*f-r*o*f)*b,t[12]=P*b,t[13]=(c*_*i-y*h*i+y*n*d-r*_*d-c*n*v+r*h*v)*b,t[14]=(y*o*i-s*_*i-y*n*l+r*_*l+s*n*v-r*o*v)*b,t[15]=(s*h*i-c*o*i+c*n*l-r*h*l-s*n*d+r*o*d)*b,this}scale(t){let r=this.elements,n=t.x,i=t.y,a=t.z;return r[0]*=n,r[4]*=i,r[8]*=a,r[1]*=n,r[5]*=i,r[9]*=a,r[2]*=n,r[6]*=i,r[10]*=a,r[3]*=n,r[7]*=i,r[11]*=a,this}getMaxScaleOnAxis(){let t=this.elements,r=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(r,n,i))}makeTranslation(t,r,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,r,0,0,1,n,0,0,0,1),this}makeRotationX(t){let r=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,r,-n,0,0,n,r,0,0,0,0,1),this}makeRotationY(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,0,n,0,0,1,0,0,-n,0,r,0,0,0,0,1),this}makeRotationZ(t){let r=Math.cos(t),n=Math.sin(t);return this.set(r,-n,0,0,n,r,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,r){let n=Math.cos(r),i=Math.sin(r),a=1-n,s=t.x,o=t.y,l=t.z,u=a*s,c=a*o;return this.set(u*s+n,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+n,c*l-i*s,0,u*l-i*o,c*l+i*s,a*l*l+n,0,0,0,0,1),this}makeScale(t,r,n){return this.set(t,0,0,0,0,r,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,r,n,i,a,s){return this.set(1,n,a,0,t,1,s,0,r,i,1,0,0,0,0,1),this}compose(t,r,n){let i=this.elements,a=r._x,s=r._y,o=r._z,l=r._w,u=a+a,c=s+s,h=o+o,d=a*u,f=a*c,y=a*h,_=s*c,v=s*h,p=o*h,m=l*u,g=l*c,x=l*h,P=n.x,T=n.y,b=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+x)*P,i[2]=(y-g)*P,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(d+p))*T,i[6]=(v+m)*T,i[7]=0,i[8]=(y+g)*b,i[9]=(v-m)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,r,n){let i=this.elements,a=ss.set(i[0],i[1],i[2]).length(),s=ss.set(i[4],i[5],i[6]).length(),o=ss.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);let l=1/a,u=1/s,c=1/o;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=c,pn.elements[9]*=c,pn.elements[10]*=c,r.setFromRotationMatrix(pn),n.x=a,n.y=s,n.z=o,this}makePerspective(t,r,n,i,a,s,o=Qn){let l=this.elements,u=2*a/(r-t),c=2*a/(n-i),h=(r+t)/(r-t),d=(n+i)/(n-i),f,y;if(o===Qn)f=-(s+a)/(s-a),y=-2*s*a/(s-a);else if(o===Lc)f=-s/(s-a),y=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,r,n,i,a,s,o=Qn){let l=this.elements,u=1/(r-t),c=1/(n-i),h=1/(s-a),d=(r+t)*u,f=(n+i)*c,y,_;if(o===Qn)y=(s+a)*h,_=-2*h;else if(o===Lc)y=a*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let r=this.elements,n=t.elements;for(let i=0;i<16;i++)if(r[i]!==n[i])return!1;return!0}fromArray(t,r=0){for(let n=0;n<16;n++)this.elements[n]=t[n+r];return this}toArray(t=[],r=0){let n=this.elements;return t[r]=n[0],t[r+1]=n[1],t[r+2]=n[2],t[r+3]=n[3],t[r+4]=n[4],t[r+5]=n[5],t[r+6]=n[6],t[r+7]=n[7],t[r+8]=n[8],t[r+9]=n[9],t[r+10]=n[10],t[r+11]=n[11],t[r+12]=n[12],t[r+13]=n[13],t[r+14]=n[14],t[r+15]=n[15],t}},ss=new L,pn=new bt,Nw=new L(0,0,0),Lw=new L(1,1,1),Li=new L,Yu=new L,Hr=new L,D_=new bt,I_=new Hs,Bi=class c1{constructor(t=0,r=0,n=0,i=c1.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=r,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,r,n,i=this._order){return this._x=t,this._y=r,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,r=this._order,n=!0){let i=t.elements,a=i[0],s=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],d=i[6],f=i[10];switch(r){case"XYZ":this._y=Math.asin(Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+r)}return this._order=r,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,r,n){return D_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(D_,r,n)}setFromVector3(t,r=this._order){return this.set(t.x,t.y,t.z,r)}reorder(t){return I_.setFromEuler(this),this.setFromQuaternion(I_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],r=0){return t[r]=this._x,t[r+1]=this._y,t[r+2]=this._z,t[r+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Bi.DEFAULT_ORDER="XYZ";var h1=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Dw=0,U_=new L,os=new Hs,jn=new bt,qu=new L,Yo=new L,Iw=new L,Uw=new Hs,O_=new L(1,0,0),k_=new L(0,1,0),z_=new L(0,0,1),F_={type:"added"},Ow={type:"removed"},ls={type:"childadded",child:null},wp={type:"childremoved",child:null},er=class Cc extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dw++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cc.DEFAULT_UP.clone();let t=new L,r=new Bi,n=new Hs,i=new L(1,1,1);function a(){n.setFromEuler(r,!1)}function s(){r.setFromQuaternion(n,void 0,!1)}r._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:r},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new bt},normalMatrix:{value:new ot}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=Cc.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cc.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new h1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,r){this.quaternion.setFromAxisAngle(t,r)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,r){return os.setFromAxisAngle(t,r),this.quaternion.multiply(os),this}rotateOnWorldAxis(t,r){return os.setFromAxisAngle(t,r),this.quaternion.premultiply(os),this}rotateX(t){return this.rotateOnAxis(O_,t)}rotateY(t){return this.rotateOnAxis(k_,t)}rotateZ(t){return this.rotateOnAxis(z_,t)}translateOnAxis(t,r){return U_.copy(t).applyQuaternion(this.quaternion),this.position.add(U_.multiplyScalar(r)),this}translateX(t){return this.translateOnAxis(O_,t)}translateY(t){return this.translateOnAxis(k_,t)}translateZ(t){return this.translateOnAxis(z_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,r,n){t.isVector3?qu.copy(t):qu.set(t,r,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Yo,qu,this.up):jn.lookAt(qu,Yo,this.up),this.quaternion.setFromRotationMatrix(jn),i&&(jn.extractRotation(i.matrixWorld),os.setFromRotationMatrix(jn),this.quaternion.premultiply(os.invert()))}add(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.add(arguments[r]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(F_),ls.child=t,this.dispatchEvent(ls),ls.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let r=this.children.indexOf(t);return r!==-1&&(t.parent=null,this.children.splice(r,1),t.dispatchEvent(Ow),wp.child=t,this.dispatchEvent(wp),wp.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(F_),ls.child=t,this.dispatchEvent(ls),ls.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,r){if(this[t]===r)return this;for(let n=0,i=this.children.length;n<i;n++){let a=this.children[n].getObjectByProperty(t,r);if(a!==void 0)return a}}getObjectsByProperty(t,r,n=[]){this[t]===r&&n.push(this);let i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(t,r,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,Iw),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,Uw,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let r=this.matrixWorld.elements;return t.set(r[8],r[9],r[10]).normalize()}raycast(){}traverse(t){t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].traverseVisible(t)}traverseAncestors(t){let r=this.parent;r!==null&&(t(r),r.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let r=this.children;for(let n=0,i=r.length;n<i;n++)r[n].updateMatrixWorld(t)}updateWorldMatrix(t,r){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),r===!0){let i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].updateWorldMatrix(!1,!0)}}toJSON(t){let r=t===void 0||typeof t=="string",n={};r&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){let h=l[u];a(t.shapes,h)}else a(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(t.materials,this.material[l]));i.material=o}else i.material=a(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];i.animations.push(a(t.animations,l))}}if(r){let o=s(t.geometries),l=s(t.materials),u=s(t.textures),c=s(t.images),h=s(t.shapes),d=s(t.skeletons),f=s(t.animations),y=s(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),y.length>0&&(n.nodes=y)}return n.object=i,n;function s(o){let l=[];for(let u in o){let c=o[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,r=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),r===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};er.DEFAULT_UP=new L(0,1,0);er.DEFAULT_MATRIX_AUTO_UPDATE=!0;er.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fn=new L,$n=new L,Ep=new L,Yn=new L,us=new L,cs=new L,B_=new L,Tp=new L,bp=new L,Ap=new L,Cp=new Tt,Rp=new Tt,Pp=new Tt,ws=class Es{constructor(t=new L,r=new L,n=new L){this.a=t,this.b=r,this.c=n}static getNormal(t,r,n,i){i.subVectors(n,r),fn.subVectors(t,r),i.cross(fn);let a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(t,r,n,i,a){fn.subVectors(i,r),$n.subVectors(n,r),Ep.subVectors(t,r);let s=fn.dot(fn),o=fn.dot($n),l=fn.dot(Ep),u=$n.dot($n),c=$n.dot(Ep),h=s*u-o*o;if(h===0)return a.set(0,0,0),null;let d=1/h,f=(u*l-o*c)*d,y=(s*c-o*l)*d;return a.set(1-f-y,y,f)}static containsPoint(t,r,n,i){return this.getBarycoord(t,r,n,i,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,r,n,i,a,s,o,l){return this.getBarycoord(t,r,n,i,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Yn.x),l.addScaledVector(s,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,r,n,i,a,s){return Cp.setScalar(0),Rp.setScalar(0),Pp.setScalar(0),Cp.fromBufferAttribute(t,r),Rp.fromBufferAttribute(t,n),Pp.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(Cp,a.x),s.addScaledVector(Rp,a.y),s.addScaledVector(Pp,a.z),s}static isFrontFacing(t,r,n,i){return fn.subVectors(n,r),$n.subVectors(t,r),fn.cross($n).dot(i)<0}set(t,r,n){return this.a.copy(t),this.b.copy(r),this.c.copy(n),this}setFromPointsAndIndices(t,r,n,i){return this.a.copy(t[r]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,r,n,i){return this.a.fromBufferAttribute(t,r),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),fn.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Es.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,r){return Es.getBarycoord(t,this.a,this.b,this.c,r)}getInterpolation(t,r,n,i,a){return Es.getInterpolation(t,this.a,this.b,this.c,r,n,i,a)}containsPoint(t){return Es.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Es.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,r){let n=this.a,i=this.b,a=this.c,s,o;us.subVectors(i,n),cs.subVectors(a,n),Tp.subVectors(t,n);let l=us.dot(Tp),u=cs.dot(Tp);if(l<=0&&u<=0)return r.copy(n);bp.subVectors(t,i);let c=us.dot(bp),h=cs.dot(bp);if(c>=0&&h<=c)return r.copy(i);let d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),r.copy(n).addScaledVector(us,s);Ap.subVectors(t,a);let f=us.dot(Ap),y=cs.dot(Ap);if(y>=0&&f<=y)return r.copy(a);let _=f*u-l*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),r.copy(n).addScaledVector(cs,o);let v=c*y-f*h;if(v<=0&&h-c>=0&&f-y>=0)return B_.subVectors(a,i),o=(h-c)/(h-c+(f-y)),r.copy(i).addScaledVector(B_,o);let p=1/(v+_+d);return s=_*p,o=d*p,r.copy(n).addScaledVector(us,s).addScaledVector(cs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},d1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Np(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*6*(2/3-r):e}var je=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,n=dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,dt.toWorkingColorSpace(this,n),this}setHSL(e,t,r,n=dt.workingColorSpace){if(e=xw(e,1),t=Zt(t,0,1),r=Zt(r,0,1),t===0)this.r=this.g=this.b=r;else{let i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=Np(a,i,e+1/3),this.g=Np(a,i,e),this.b=Np(a,i,e-1/3)}return dt.toWorkingColorSpace(this,n),this}setStyle(e,t=Wr){function r(i){i!==void 0&&parseFloat(i)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=n[1],s=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wr){let r=d1[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wr){return dt.fromWorkingColorSpace(fr.copy(this),e),Math.round(Zt(fr.r*255,0,255))*65536+Math.round(Zt(fr.g*255,0,255))*256+Math.round(Zt(fr.b*255,0,255))}getHexString(e=Wr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.fromWorkingColorSpace(fr.copy(this),t);let r=fr.r,n=fr.g,i=fr.b,a=Math.max(r,n,i),s=Math.min(r,n,i),o,l,u=(s+a)/2;if(s===a)o=0,l=0;else{let c=a-s;switch(l=u<=.5?c/(a+s):c/(2-a-s),a){case r:o=(n-i)/c+(n<i?6:0);break;case n:o=(i-r)/c+2;break;case i:o=(r-n)/c+4;break}o/=6}return e.h=o,e.s=l,e.l=u,e}getRGB(e,t=dt.workingColorSpace){return dt.fromWorkingColorSpace(fr.copy(this),t),e.r=fr.r,e.g=fr.g,e.b=fr.b,e}getStyle(e=Wr){dt.fromWorkingColorSpace(fr.copy(this),e);let t=fr.r,r=fr.g,n=fr.b;return e!==Wr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+t,Di.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Di),e.getHSL(Ju);let r=fp(Di.h,Ju.h,t),n=fp(Di.s,Ju.s,t),i=fp(Di.l,Ju.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fr=new je;je.NAMES=d1;var kw=0,Sa=class extends Vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kw++}),this.uuid=ti(),this.name="",this.blending=Rs,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qp,this.blendDst=Jp,this.blendEquation=fa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=E_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ts,this.stencilZFail=ts,this.stencilZPass=ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(r.blending=this.blending),this.side!==Fi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qp&&(r.blendSrc=this.blendSrc),this.blendDst!==Jp&&(r.blendDst=this.blendDst),this.blendEquation!==fa&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==E_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){let a=[];for(let s in i){let o=i[s];delete o.metadata,a.push(o)}return a}if(t){let i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Kn=class extends Sa{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=zy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gt=new L,Ku=new ne,vr=class{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Uf,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ku.fromBufferAttribute(this,t),Ku.applyMatrix3(e),this.setXY(t,Ku.x,Ku.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=An(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=yt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=An(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=An(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=An(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=An(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),r=yt(r,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Uf&&(e.usage=this.usage),e}},p1=class extends vr{constructor(e,t,r){super(new Uint16Array(e),t,r)}},f1=class extends vr{constructor(e,t,r){super(new Uint32Array(e),t,r)}},vt=class extends vr{constructor(e,t,r){super(new Float32Array(e),t,r)}},zw=0,en=new bt,Lp=new er,hs=new L,Gr=new xa,qo=new xa,Qt=new L,tr=class m1 extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zw++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(i1(t)?f1:p1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,r){return this.attributes[t]=r,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,r,n=0){this.groups.push({start:t,count:r,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,r){this.drawRange.start=t,this.drawRange.count=r}applyMatrix4(t){let r=this.attributes.position;r!==void 0&&(r.applyMatrix4(t),r.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let a=new ot().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,r,n){return en.makeTranslation(t,r,n),this.applyMatrix4(en),this}scale(t,r,n){return en.makeScale(t,r,n),this.applyMatrix4(en),this}lookAt(t){return Lp.lookAt(t),Lp.updateMatrix(),this.applyMatrix4(Lp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(t){let r=this.getAttribute("position");if(r===void 0){let n=[];for(let i=0,a=t.length;i<a;i++){let s=t[i];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new vt(n,3))}else{for(let n=0,i=r.count;n<i;n++){let a=t[n];r.setXYZ(n,a.x,a.y,a.z||0)}t.length>r.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),r.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),r)for(let n=0,i=r.length;n<i;n++){let a=r[n];Gr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Gr.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Gr.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Gr.min),this.boundingBox.expandByPoint(Gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);let t=this.attributes.position,r=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(Gr.setFromBufferAttribute(t),r)for(let a=0,s=r.length;a<s;a++){let o=r[a];qo.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Gr.min,qo.min),Gr.expandByPoint(Qt),Qt.addVectors(Gr.max,qo.max),Gr.expandByPoint(Qt)):(Gr.expandByPoint(qo.min),Gr.expandByPoint(qo.max))}Gr.getCenter(n);let i=0;for(let a=0,s=t.count;a<s;a++)Qt.fromBufferAttribute(t,a),i=Math.max(i,n.distanceToSquared(Qt));if(r)for(let a=0,s=r.length;a<s;a++){let o=r[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)Qt.fromBufferAttribute(o,u),l&&(hs.fromBufferAttribute(t,u),Qt.add(hs)),i=Math.max(i,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,r=this.attributes;if(t===null||r.position===void 0||r.normal===void 0||r.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=r.position,i=r.normal,a=r.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vr(new Float32Array(4*n.count),4));let s=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;let u=new L,c=new L,h=new L,d=new ne,f=new ne,y=new ne,_=new L,v=new L;function p(R,E,M){u.fromBufferAttribute(n,R),c.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),d.fromBufferAttribute(a,R),f.fromBufferAttribute(a,E),y.fromBufferAttribute(a,M),c.sub(u),h.sub(u),f.sub(d),y.sub(d);let N=1/(f.x*y.y-y.x*f.y);isFinite(N)&&(_.copy(c).multiplyScalar(y.y).addScaledVector(h,-f.y).multiplyScalar(N),v.copy(h).multiplyScalar(f.x).addScaledVector(c,-y.x).multiplyScalar(N),o[R].add(_),o[E].add(_),o[M].add(_),l[R].add(v),l[E].add(v),l[M].add(v))}let m=this.groups;m.length===0&&(m=[{start:0,count:t.count}]);for(let R=0,E=m.length;R<E;++R){let M=m[R],N=M.start,k=M.count;for(let H=N,W=N+k;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let g=new L,x=new L,P=new L,T=new L;function b(R){P.fromBufferAttribute(i,R),T.copy(P);let E=o[R];g.copy(E),g.sub(P.multiplyScalar(P.dot(E))).normalize(),x.crossVectors(T,E);let M=x.dot(l[R])<0?-1:1;s.setXYZW(R,g.x,g.y,g.z,M)}for(let R=0,E=m.length;R<E;++R){let M=m[R],N=M.start,k=M.count;for(let H=N,W=N+k;H<W;H+=3)b(t.getX(H+0)),b(t.getX(H+1)),b(t.getX(H+2))}}computeVertexNormals(){let t=this.index,r=this.getAttribute("position");if(r!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vr(new Float32Array(r.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,a=new L,s=new L,o=new L,l=new L,u=new L,c=new L,h=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let y=t.getX(d+0),_=t.getX(d+1),v=t.getX(d+2);i.fromBufferAttribute(r,y),a.fromBufferAttribute(r,_),s.fromBufferAttribute(r,v),c.subVectors(s,a),h.subVectors(i,a),c.cross(h),o.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,v),o.add(c),l.add(c),u.add(c),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let d=0,f=r.count;d<f;d+=3)i.fromBufferAttribute(r,d+0),a.fromBufferAttribute(r,d+1),s.fromBufferAttribute(r,d+2),c.subVectors(s,a),h.subVectors(i,a),c.cross(h),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let r=0,n=t.count;r<n;r++)Qt.fromBufferAttribute(t,r),Qt.normalize(),t.setXYZ(r,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function t(o,l){let u=o.array,c=o.itemSize,h=o.normalized,d=new u.constructor(l.length*c),f=0,y=0;for(let _=0,v=l.length;_<v;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let p=0;p<c;p++)d[y++]=u[f++]}return new vr(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let r=new m1,n=this.index.array,i=this.attributes;for(let o in i){let l=i[o],u=t(l,n);r.setAttribute(o,u)}let a=this.morphAttributes;for(let o in a){let l=[],u=a[o];for(let c=0,h=u.length;c<h;c++){let d=u[c],f=t(d,n);l.push(f)}r.morphAttributes[o]=l}r.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let u=s[o];r.addGroup(u.start,u.count,u.materialIndex)}return r}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};let r=this.index;r!==null&&(t.data.index={type:r.array.constructor.name,array:Array.prototype.slice.call(r.array)});let n=this.attributes;for(let l in n){let u=n[l];t.data.attributes[l]=u.toJSON(t.data)}let i={},a=!1;for(let l in this.morphAttributes){let u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){let f=u[h];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,a=!0)}a&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let r={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(r));let i=t.attributes;for(let u in i){let c=i[u];this.setAttribute(u,c.clone(r))}let a=t.morphAttributes;for(let u in a){let c=[],h=a[u];for(let d=0,f=h.length;d<f;d++)c.push(h[d].clone(r));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let u=0,c=s.length;u<c;u++){let h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},V_=new bt,oa=new u1,Qu=new Gs,H_=new L,Zu=new L,ec=new L,tc=new L,Dp=new L,rc=new L,G_=new L,nc=new L,He=class extends er{constructor(e=new tr,t=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}getVertexPosition(e,t){let r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);let s=this.morphTargetInfluences;if(i&&s){rc.set(0,0,0);for(let o=0,l=i.length;o<l;o++){let u=s[o],c=i[o];u!==0&&(Dp.fromBufferAttribute(c,e),a?rc.addScaledVector(Dp,u):rc.addScaledVector(Dp.sub(t),u))}t.add(rc)}return t}raycast(e,t){let r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Qu.copy(r.boundingSphere),Qu.applyMatrix4(i),oa.copy(e.ray).recast(e.near),!(Qu.containsPoint(oa.origin)===!1&&(oa.intersectSphere(Qu,H_)===null||oa.origin.distanceToSquared(H_)>(e.far-e.near)**2))&&(V_.copy(i).invert(),oa.copy(e.ray).applyMatrix4(V_),!(r.boundingBox!==null&&oa.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,oa)))}_computeIntersections(e,t,r){let n,i=this.geometry,a=this.material,s=i.index,o=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv1,c=i.attributes.normal,h=i.groups,d=i.drawRange;if(s!==null)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],p=Math.max(_.start,d.start),m=Math.min(s.count,Math.min(_.start+_.count,d.start+d.count));for(let g=p,x=m;g<x;g+=3){let P=s.getX(g),T=s.getX(g+1),b=s.getX(g+2);n=ic(this,v,e,r,l,u,c,P,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,d.start),y=Math.min(s.count,d.start+d.count);for(let _=f,v=y;_<v;_+=3){let p=s.getX(_),m=s.getX(_+1),g=s.getX(_+2);n=ic(this,a,e,r,l,u,c,p,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}else if(o!==void 0)if(Array.isArray(a))for(let f=0,y=h.length;f<y;f++){let _=h[f],v=a[_.materialIndex],p=Math.max(_.start,d.start),m=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let g=p,x=m;g<x;g+=3){let P=g,T=g+1,b=g+2;n=ic(this,v,e,r,l,u,c,P,T,b),n&&(n.faceIndex=Math.floor(g/3),n.face.materialIndex=_.materialIndex,t.push(n))}}else{let f=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let _=f,v=y;_<v;_+=3){let p=_,m=_+1,g=_+2;n=ic(this,a,e,r,l,u,c,p,m,g),n&&(n.faceIndex=Math.floor(_/3),t.push(n))}}}};function Fw(e,t,r,n,i,a,s,o){let l;if(t.side===Tr?l=n.intersectTriangle(s,a,i,!0,o):l=n.intersectTriangle(i,a,s,t.side===Fi,o),l===null)return null;nc.copy(o),nc.applyMatrix4(e.matrixWorld);let u=r.ray.origin.distanceTo(nc);return u<r.near||u>r.far?null:{distance:u,point:nc.clone(),object:e}}function ic(e,t,r,n,i,a,s,o,l,u){e.getVertexPosition(o,Zu),e.getVertexPosition(l,ec),e.getVertexPosition(u,tc);let c=Fw(e,t,r,n,Zu,ec,tc,G_);if(c){let h=new L;ws.getBarycoord(G_,Zu,ec,tc,h),i&&(c.uv=ws.getInterpolatedAttribute(i,o,l,u,h,new ne)),a&&(c.uv1=ws.getInterpolatedAttribute(a,o,l,u,h,new ne)),s&&(c.normal=ws.getInterpolatedAttribute(s,o,l,u,h,new L),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));let d={a:o,b:l,c:u,normal:new L,materialIndex:0};ws.getNormal(Zu,ec,tc,d.normal),c.face=d,c.barycoord=h}return c}var gr=class g1 extends tr{constructor(t=1,r=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:r,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};let o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);let l=[],u=[],c=[],h=[],d=0,f=0;y("z","y","x",-1,-1,n,r,t,s,a,0),y("z","y","x",1,-1,n,r,-t,s,a,1),y("x","z","y",1,1,t,n,r,i,s,2),y("x","z","y",1,-1,t,n,-r,i,s,3),y("x","y","z",1,-1,t,r,n,i,a,4),y("x","y","z",-1,-1,t,r,-n,i,a,5),this.setIndex(l),this.setAttribute("position",new vt(u,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(h,2));function y(_,v,p,m,g,x,P,T,b,R,E){let M=x/b,N=P/R,k=x/2,H=P/2,W=T/2,$=b+1,j=R+1,ie=0,Y=0,de=new L;for(let Me=0;Me<j;Me++){let Ke=Me*N-H;for(let tt=0;tt<$;tt++){let J=tt*M-k;de[_]=J*m,de[v]=Ke*g,de[p]=W,u.push(de.x,de.y,de.z),de[_]=0,de[v]=0,de[p]=T>0?1:-1,c.push(de.x,de.y,de.z),h.push(tt/b),h.push(1-Me/R),ie+=1}}for(let Me=0;Me<R;Me++)for(let Ke=0;Ke<b;Ke++){let tt=d+Ke+$*Me,J=d+Ke+$*(Me+1),ce=d+(Ke+1)+$*(Me+1),ke=d+(Ke+1)+$*Me;l.push(tt,J,ke),l.push(J,ce,ke),Y+=6}o.addGroup(f,Y,E),f+=Y,d+=ie}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new g1(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fs(e){let t={};for(let r in e){t[r]={};for(let n in e[r]){let i=e[r][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[r][n]=null):t[r][n]=i.clone():Array.isArray(i)?t[r][n]=i.slice():t[r][n]=i}}return t}function Er(e){let t={};for(let r=0;r<e.length;r++){let n=Fs(e[r]);for(let i in n)t[i]=n[i]}return t}function Bw(e){let t=[];for(let r=0;r<e.length;r++)t.push(e[r].clone());return t}function v1(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:dt.workingColorSpace}var cl={clone:Fs,merge:Er},Vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sr=class extends Sa{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vw,this.fragmentShader=Hw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=Bw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let i=this.uniforms[n].value;i&&i.isTexture?t.uniforms[n]={type:"t",value:i.toJSON(e).uuid}:i&&i.isColor?t.uniforms[n]={type:"c",value:i.getHex()}:i&&i.isVector2?t.uniforms[n]={type:"v2",value:i.toArray()}:i&&i.isVector3?t.uniforms[n]={type:"v3",value:i.toArray()}:i&&i.isVector4?t.uniforms[n]={type:"v4",value:i.toArray()}:i&&i.isMatrix3?t.uniforms[n]={type:"m3",value:i.toArray()}:i&&i.isMatrix4?t.uniforms[n]={type:"m4",value:i.toArray()}:t.uniforms[n]={value:i}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}},_1=class extends er{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=Qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ii=new L,W_=new ne,X_=new ne,Xr=class extends _1{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Of*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pp*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Of*2*Math.atan(Math.tan(pp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,t){return this.getViewBounds(e,W_,X_),t.subVectors(X_,W_)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(pp*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let o=a.fullWidth,l=a.fullHeight;i+=a.offsetX*n/o,t-=a.offsetY*r/l,n*=a.width/o,r*=a.height/l}let s=this.filmOffset;s!==0&&(i+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ds=-90,ps=1,Gw=class extends er{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Xr(ds,ps,e,t);n.layers=this.layers,this.add(n);let i=new Xr(ds,ps,e,t);i.layers=this.layers,this.add(i);let a=new Xr(ds,ps,e,t);a.layers=this.layers,this.add(a);let s=new Xr(ds,ps,e,t);s.layers=this.layers,this.add(s);let o=new Xr(ds,ps,e,t);o.layers=this.layers,this.add(o);let l=new Xr(ds,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,s,o]=t;for(let l of t)this.remove(l);if(e===Qn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Lc)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,s,o,l,u]=this.children,c=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,n),e.render(t,i),e.setRenderTarget(r,1,n),e.render(t,a),e.setRenderTarget(r,2,n),e.render(t,s),e.setRenderTarget(r,3,n),e.render(t,o),e.setRenderTarget(r,4,n),e.render(t,l),r.texture.generateMipmaps=y,e.setRenderTarget(r,5,n),e.render(t,u),e.setRenderTarget(c,h,d),e.xr.enabled=f,r.texture.needsPMREMUpdate=!0}},y1=class extends tn{constructor(e,t,r,n,i,a,s,o,l,u){e=e!==void 0?e:[],t=t!==void 0?t:Us,super(e,t,r,n,i,a,s,o,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ww=class extends vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new y1(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new gr(5,5,5),i=new sr({name:"CubemapFromEquirect",uniforms:Fs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Tr,blending:Zn});i.uniforms.tEquirect.value=t;let a=new He(n,i),s=t.minFilter;return t.minFilter===va&&(t.minFilter=Cn),new Gw(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,n){let i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}},Ip=new L,Xw=new L,jw=new ot,da=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let n=Ip.subVectors(r,t).cross(Xw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let r=e.delta(Ip),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/n;return i<0||i>1?null:t.copy(e.start).addScaledVector(r,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||jw.getNormalMatrix(e),n=this.coplanarPoint(Ip).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},la=new Gs,ac=new L,rm=class{constructor(e=new da,t=new da,r=new da,n=new da,i=new da,a=new da){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(r),s[3].copy(n),s[4].copy(i),s[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qn){let r=this.planes,n=e.elements,i=n[0],a=n[1],s=n[2],o=n[3],l=n[4],u=n[5],c=n[6],h=n[7],d=n[8],f=n[9],y=n[10],_=n[11],v=n[12],p=n[13],m=n[14],g=n[15];if(r[0].setComponents(o-i,h-l,_-d,g-v).normalize(),r[1].setComponents(o+i,h+l,_+d,g+v).normalize(),r[2].setComponents(o+a,h+u,_+f,g+p).normalize(),r[3].setComponents(o-a,h-u,_-f,g-p).normalize(),r[4].setComponents(o-s,h-c,_-y,g-m).normalize(),t===Qn)r[5].setComponents(o+s,h+c,_+y,g+m).normalize();else if(t===Lc)r[5].setComponents(s,c,y,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),la.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),la.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(la)}intersectsSprite(e){return la.center.set(0,0,0),la.radius=.7071067811865476,la.applyMatrix4(e.matrixWorld),this.intersectsSphere(la)}intersectsSphere(e){let t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let n=t[r];if(ac.x=n.normal.x>0?e.max.x:e.min.x,ac.y=n.normal.y>0?e.max.y:e.min.y,ac.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function x1(){let e=null,t=!1,r=null,n=null;function i(a,s){r(a,s),n=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&r!==null&&(n=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){r=a},setContext:function(a){e=a}}}function $w(e){let t=new WeakMap;function r(o,l){let u=o.array,c=o.usage,h=u.byteLength,d=e.createBuffer();e.bindBuffer(l,d),e.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=e.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=e.HALF_FLOAT:f=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=e.SHORT;else if(u instanceof Uint32Array)f=e.UNSIGNED_INT;else if(u instanceof Int32Array)f=e.INT;else if(u instanceof Int8Array)f=e.BYTE;else if(u instanceof Uint8Array)f=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,u){let c=l.array,h=l.updateRanges;if(e.bindBuffer(u,o),h.length===0)e.bufferSubData(u,0,c);else{h.sort((f,y)=>f.start-y.start);let d=0;for(let f=1;f<h.length;f++){let y=h[d],_=h[f];_.start<=y.start+y.count+1?y.count=Math.max(y.count,_.start+_.count-y.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,y=h.length;f<y;f++){let _=h[f];e.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let u=t.get(o);if(u===void 0)t.set(o,r(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:i,remove:a,update:s}}var Oi=class S1 extends tr{constructor(t=1,r=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:r,widthSegments:n,heightSegments:i};let a=t/2,s=r/2,o=Math.floor(n),l=Math.floor(i),u=o+1,c=l+1,h=t/o,d=r/l,f=[],y=[],_=[],v=[];for(let p=0;p<c;p++){let m=p*d-s;for(let g=0;g<u;g++){let x=g*h-a;y.push(x,-m,0),_.push(0,0,1),v.push(g/o),v.push(1-p/l)}}for(let p=0;p<l;p++)for(let m=0;m<o;m++){let g=m+u*p,x=m+u*(p+1),P=m+1+u*(p+1),T=m+1+u*p;f.push(g,x,T),f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new S1(t.width,t.height,t.widthSegments,t.heightSegments)}},Yw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qw=`#ifdef USE_ALPHAHASH
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
#endif`,Jw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rE=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oE=`#ifdef USE_IRIDESCENCE
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
#endif`,lE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,vE=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yE=`vec3 transformedNormal = objectNormal;
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
#endif`,xE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bE=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,AE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,NE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,LE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FE=`uniform bool receiveShadow;
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
#endif`,BE=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,VE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,jE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$E=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,qE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,n2=`#if defined( USE_POINTS_UV )
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
#endif`,i2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`#ifdef USE_MORPHTARGETS
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
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
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
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,w2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,L2=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,I2=`#ifdef USE_SKINNING
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
#endif`,U2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,k2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V2=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,H2=`#ifdef USE_TRANSMISSION
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
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,j2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Y2=`uniform sampler2D t2D;
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
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,tT=`#define DISTANCE
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
}`,rT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`uniform float scale;
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
}`,sT=`uniform vec3 diffuse;
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
}`,oT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,hT=`#define MATCAP
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
}`,dT=`#define MATCAP
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
}`,pT=`#define NORMAL
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
}`,fT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,vT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,yT=`#define TOON
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
}`,xT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ST=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,wT=`#include <common>
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
}`,ET=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,TT=`uniform float rotation;
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
}`,bT=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Yw,alphahash_pars_fragment:qw,alphamap_fragment:Jw,alphamap_pars_fragment:Kw,alphatest_fragment:Qw,alphatest_pars_fragment:Zw,aomap_fragment:eE,aomap_pars_fragment:tE,batching_pars_vertex:rE,batching_vertex:nE,begin_vertex:iE,beginnormal_vertex:aE,bsdfs:sE,iridescence_fragment:oE,bumpmap_pars_fragment:lE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:dE,color_fragment:pE,color_pars_fragment:fE,color_pars_vertex:mE,color_vertex:gE,common:vE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:yE,displacementmap_pars_vertex:xE,displacementmap_vertex:SE,emissivemap_fragment:ME,emissivemap_pars_fragment:wE,colorspace_fragment:EE,colorspace_pars_fragment:TE,envmap_fragment:bE,envmap_common_pars_fragment:AE,envmap_pars_fragment:CE,envmap_pars_vertex:RE,envmap_physical_pars_fragment:BE,envmap_vertex:PE,fog_vertex:NE,fog_pars_vertex:LE,fog_fragment:DE,fog_pars_fragment:IE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:OE,lights_lambert_fragment:kE,lights_lambert_pars_fragment:zE,lights_pars_begin:FE,lights_toon_fragment:VE,lights_toon_pars_fragment:HE,lights_phong_fragment:GE,lights_phong_pars_fragment:WE,lights_physical_fragment:XE,lights_physical_pars_fragment:jE,lights_fragment_begin:$E,lights_fragment_maps:YE,lights_fragment_end:qE,logdepthbuf_fragment:JE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:QE,logdepthbuf_vertex:ZE,map_fragment:e2,map_pars_fragment:t2,map_particle_fragment:r2,map_particle_pars_fragment:n2,metalnessmap_fragment:i2,metalnessmap_pars_fragment:a2,morphinstance_vertex:s2,morphcolor_vertex:o2,morphnormal_vertex:l2,morphtarget_pars_vertex:u2,morphtarget_vertex:c2,normal_fragment_begin:h2,normal_fragment_maps:d2,normal_pars_fragment:p2,normal_pars_vertex:f2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:x2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:w2,project_vertex:E2,dithering_fragment:T2,dithering_pars_fragment:b2,roughnessmap_fragment:A2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:R2,shadowmap_pars_vertex:P2,shadowmap_vertex:N2,shadowmask_pars_fragment:L2,skinbase_vertex:D2,skinning_pars_vertex:I2,skinning_vertex:U2,skinnormal_vertex:O2,specularmap_fragment:k2,specularmap_pars_fragment:z2,tonemapping_fragment:F2,tonemapping_pars_fragment:B2,transmission_fragment:V2,transmission_pars_fragment:H2,uv_pars_fragment:G2,uv_pars_vertex:W2,uv_vertex:X2,worldpos_vertex:j2,background_vert:$2,background_frag:Y2,backgroundCube_vert:q2,backgroundCube_frag:J2,cube_vert:K2,cube_frag:Q2,depth_vert:Z2,depth_frag:eT,distanceRGBA_vert:tT,distanceRGBA_frag:rT,equirect_vert:nT,equirect_frag:iT,linedashed_vert:aT,linedashed_frag:sT,meshbasic_vert:oT,meshbasic_frag:lT,meshlambert_vert:uT,meshlambert_frag:cT,meshmatcap_vert:hT,meshmatcap_frag:dT,meshnormal_vert:pT,meshnormal_frag:fT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:_T,meshtoon_vert:yT,meshtoon_frag:xT,points_vert:ST,points_frag:MT,shadow_vert:wT,shadow_frag:ET,sprite_vert:TT,sprite_frag:bT},we={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Tn={basic:{uniforms:Er([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Er([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Er([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Er([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Er([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new je(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Er([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Er([we.points,we.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Er([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Er([we.common,we.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Er([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Er([we.sprite,we.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Er([we.common,we.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Er([we.lights,we.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Tn.physical={uniforms:Er([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};var sc={r:0,b:0,g:0},ua=new Bi,AT=new bt;function CT(e,t,r,n,i,a,s){let o=new je(0),l=a===!0?0:1,u,c,h=null,d=0,f=null;function y(m){let g=m.isScene===!0?m.background:null;return g&&g.isTexture&&(g=(m.backgroundBlurriness>0?r:t).get(g)),g}function _(m){let g=!1,x=y(m);x===null?p(o,l):x&&x.isColor&&(p(x,1),g=!0);let P=e.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,s):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(e.autoClear||g)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function v(m,g){let x=y(g);x&&(x.isCubeTexture||x.mapping===Oc)?(c===void 0&&(c=new He(new gr(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Fs(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),ua.copy(g.backgroundRotation),ua.x*=-1,ua.y*=-1,ua.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ua.y*=-1,ua.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AT.makeRotationFromEuler(ua)),c.material.toneMapped=dt.getTransfer(x.colorSpace)!==gt,(h!==x||d!==x.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=e.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new He(new Oi(2,2),new sr({name:"BackgroundMaterial",uniforms:Fs(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.toneMapped=dt.getTransfer(x.colorSpace)!==gt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==e.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,f=e.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function p(m,g){m.getRGB(sc,v1(e)),n.buffers.color.setClear(sc.r,sc.g,sc.b,g,s)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),l=g,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:_,addToRenderList:v}}function RT(e,t){let r=e.getParameter(e.MAX_VERTEX_ATTRIBS),n={},i=d(null),a=i,s=!1;function o(M,N,k,H,W){let $=!1,j=h(H,k,N);a!==j&&(a=j,u(a.object)),$=f(M,H,k,W),$&&y(M,H,k,W),W!==null&&t.update(W,e.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(M,N,k,H),W!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return e.createVertexArray()}function u(M){return e.bindVertexArray(M)}function c(M){return e.deleteVertexArray(M)}function h(M,N,k){let H=k.wireframe===!0,W=n[M.id];W===void 0&&(W={},n[M.id]=W);let $=W[N.id];$===void 0&&($={},W[N.id]=$);let j=$[H];return j===void 0&&(j=d(l()),$[H]=j),j}function d(M){let N=[],k=[],H=[];for(let W=0;W<r;W++)N[W]=0,k[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:k,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,N,k,H){let W=a.attributes,$=N.attributes,j=0,ie=k.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let de=W[Y],Me=$[Y];if(Me===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),de===void 0||de.attribute!==Me||Me&&de.data!==Me.data)return!0;j++}return a.attributesNum!==j||a.index!==H}function y(M,N,k,H){let W={},$=N.attributes,j=0,ie=k.getAttributes();for(let Y in ie)if(ie[Y].location>=0){let de=$[Y];de===void 0&&(Y==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),Y==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));let Me={};Me.attribute=de,de&&de.data&&(Me.data=de.data),W[Y]=Me,j++}a.attributes=W,a.attributesNum=j,a.index=H}function _(){let M=a.newAttributes;for(let N=0,k=M.length;N<k;N++)M[N]=0}function v(M){p(M,0)}function p(M,N){let k=a.newAttributes,H=a.enabledAttributes,W=a.attributeDivisors;k[M]=1,H[M]===0&&(e.enableVertexAttribArray(M),H[M]=1),W[M]!==N&&(e.vertexAttribDivisor(M,N),W[M]=N)}function m(){let M=a.newAttributes,N=a.enabledAttributes;for(let k=0,H=N.length;k<H;k++)N[k]!==M[k]&&(e.disableVertexAttribArray(k),N[k]=0)}function g(M,N,k,H,W,$,j){j===!0?e.vertexAttribIPointer(M,N,k,W,$):e.vertexAttribPointer(M,N,k,H,W,$)}function x(M,N,k,H){_();let W=H.attributes,$=k.getAttributes(),j=N.defaultAttributeValues;for(let ie in $){let Y=$[ie];if(Y.location>=0){let de=W[ie];if(de===void 0&&(ie==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),ie==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){let Me=de.normalized,Ke=de.itemSize,tt=t.get(de);if(tt===void 0)continue;let J=tt.buffer,ce=tt.type,ke=tt.bytesPerElement,De=ce===e.INT||ce===e.UNSIGNED_INT||de.gpuType===qf;if(de.isInterleavedBufferAttribute){let me=de.data,Ye=me.stride,nt=de.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)p(Y.location+Je,me.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<Y.locationSize;Je++)v(Y.location+Je);e.bindBuffer(e.ARRAY_BUFFER,J);for(let Je=0;Je<Y.locationSize;Je++)g(Y.location+Je,Ke/Y.locationSize,ce,Me,Ye*ke,(nt+Ke/Y.locationSize*Je)*ke,De)}else{if(de.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)p(Y.location+me,de.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let me=0;me<Y.locationSize;me++)v(Y.location+me);e.bindBuffer(e.ARRAY_BUFFER,J);for(let me=0;me<Y.locationSize;me++)g(Y.location+me,Ke/Y.locationSize,ce,Me,Ke*ke,Ke/Y.locationSize*me*ke,De)}}else if(j!==void 0){let Me=j[ie];if(Me!==void 0)switch(Me.length){case 2:e.vertexAttrib2fv(Y.location,Me);break;case 3:e.vertexAttrib3fv(Y.location,Me);break;case 4:e.vertexAttrib4fv(Y.location,Me);break;default:e.vertexAttrib1fv(Y.location,Me)}}}}m()}function P(){R();for(let M in n){let N=n[M];for(let k in N){let H=N[k];for(let W in H)c(H[W].object),delete H[W];delete N[k]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;let N=n[M.id];for(let k in N){let H=N[k];for(let W in H)c(H[W].object),delete H[W];delete N[k]}delete n[M.id]}function b(M){for(let N in n){let k=n[N];if(k[M.id]===void 0)continue;let H=k[M.id];for(let W in H)c(H[W].object),delete H[W];delete k[M.id]}}function R(){E(),s=!0,a!==i&&(a=i,u(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:v,disableUnusedAttributes:m}}function PT(e,t,r){let n;function i(u){n=u}function a(u,c){e.drawArrays(n,u,c),r.update(c,n,1)}function s(u,c,h){h!==0&&(e.drawArraysInstanced(n,u,c,h),r.update(c,n,h))}function o(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];r.update(d,n,1)}function l(u,c,h,d){if(h===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let y=0;y<u.length;y++)s(u[y],c[y],d[y]);else{f.multiDrawArraysInstancedWEBGL(n,u,0,c,0,d,0,h);let y=0;for(let _=0;_<h;_++)y+=c[_]*d[_];r.update(y,n,1)}}this.setMode=i,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function NT(e,t,r,n){let i;function a(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=e.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(b){return!(b!==gn&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){let R=b===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==ii&&n.convert(b)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Rn&&!R)}function l(b){if(b==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=r.precision!==void 0?r.precision:"highp",c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);let h=r.logarithmicDepthBuffer===!0,d=r.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),y=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),v=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),m=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),g=e.getParameter(e.MAX_VARYING_VECTORS),x=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,T=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:y,maxTextureSize:_,maxCubemapSize:v,maxAttributes:p,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:P,maxSamples:T}}function LT(e){let t=this,r=null,n=0,i=!1,a=!1,s=new da,o=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){r=c(h,d,0)},this.setState=function(h,d,f){let y=h.clippingPlanes,_=h.clipIntersection,v=h.clipShadows,p=e.get(h);if(!i||y===null||y.length===0||a&&!v)a?c(null):u();else{let m=a?0:n,g=m*4,x=p.clippingState||null;l.value=x,x=c(y,d,g,f);for(let P=0;P!==g;++P)x[P]=r[P];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==r&&(l.value=r,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(h,d,f,y){let _=h!==null?h.length:0,v=null;if(_!==0){if(v=l.value,y!==!0||v===null){let p=f+_*4,m=d.matrixWorldInverse;o.getNormalMatrix(m),(v===null||v.length<p)&&(v=new Float32Array(p));for(let g=0,x=f;g!==_;++g,x+=4)s.copy(h[g]).applyMatrix4(m,o),s.normal.toArray(v,x),v[x+3]=s.constant}l.value=v,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,v}}function DT(e){let t=new WeakMap;function r(s,o){return o===af?s.mapping=Us:o===sf&&(s.mapping=Os),s}function n(s){if(s&&s.isTexture){let o=s.mapping;if(o===af||o===sf)if(t.has(s)){let l=t.get(s).texture;return r(l,s.mapping)}else{let l=s.image;if(l&&l.height>0){let u=new Ww(l.height);return u.fromEquirectangularTexture(e,s),t.set(s,u),s.addEventListener("dispose",i),r(u.texture,s.mapping)}else return null}}return s}function i(s){let o=s.target;o.removeEventListener("dispose",i);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}var nm=class extends _1{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=r-e,a=r+e,s=n+t,o=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=l*this.view.offsetX,a=i+l*this.view.width,s-=u*this.view.offsetY,o=s-u*this.view.height}this.projectionMatrix.makeOrthographic(i,a,s,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bs=4,j_=[.125,.215,.35,.446,.526,.582],ma=20,Up=new nm,$_=new je,Op=null,kp=0,zp=0,Fp=!1,pa=(1+Math.sqrt(5))/2,fs=1/pa,Y_=[new L(-pa,fs,0),new L(pa,fs,0),new L(-fs,0,pa),new L(fs,0,pa),new L(0,pa,-fs),new L(0,pa,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],zf=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,n=100){Op=this._renderer.getRenderTarget(),kp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,r,n,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Op,kp,zp),this._renderer.xr.enabled=Fp,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Op=this._renderer.getRenderTarget(),kp=this._renderer.getActiveCubeFace(),zp=this._renderer.getActiveMipmapLevel(),Fp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:ei,format:gn,colorSpace:Bs,depthBuffer:!1},n=q_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,t,r);let{_lodMax:i}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(i)),this._blurMaterial=UT(i,e,t)}return n}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Up)}_sceneToCubeUV(e,t,r,n){let i=new Xr(90,1,t,r),a=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],o=this._renderer,l=o.autoClear,u=o.toneMapping;o.getClearColor($_),o.toneMapping=zi,o.autoClear=!1;let c=new Kn({name:"PMREM.Background",side:Tr,depthWrite:!1,depthTest:!1}),h=new He(new gr,c),d=!1,f=e.background;f?f.isColor&&(c.color.copy(f),e.background=null,d=!0):(c.color.copy($_),d=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(i.up.set(0,a[y],0),i.lookAt(s[y],0,0)):_===1?(i.up.set(0,0,a[y]),i.lookAt(0,s[y],0)):(i.up.set(0,a[y],0),i.lookAt(0,0,s[y]));let v=this._cubeSize;oc(n,_*v,y>2?v:0,v,v),o.setRenderTarget(n),d&&o.render(h,i),o.render(e,i)}h.geometry.dispose(),h.material.dispose(),o.toneMapping=u,o.autoClear=l,e.background=f}_textureToCubeUV(e,t){let r=this._renderer,n=e.mapping===Us||e.mapping===Os;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());let i=n?this._cubemapMaterial:this._equirectMaterial,a=new He(this._lodPlanes[0],i),s=i.uniforms;s.envMap.value=e;let o=this._cubeSize;oc(t,0,0,3*o,2*o),r.setRenderTarget(t),r.render(a,Up)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let n=this._lodPlanes.length;for(let i=1;i<n;i++){let a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Y_[(n-i-1)%Y_.length];this._blur(e,i-1,i,a,s)}t.autoClear=r}_blur(e,t,r,n,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,n,"latitudinal",i),this._halfBlur(a,e,r,r,n,"longitudinal",i)}_halfBlur(e,t,r,n,i,a,s){let o=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,c=new He(this._lodPlanes[n],l),h=l.uniforms,d=this._sizeLods[r]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*ma-1),y=i/f,_=isFinite(i)?1+Math.floor(u*y):ma;_>ma&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ma}`);let v=[],p=0;for(let T=0;T<ma;++T){let b=T/y,R=Math.exp(-b*b/2);v.push(R),T===0?p+=R:T<_&&(p+=2*R)}for(let T=0;T<v.length;T++)v[T]=v[T]/p;h.envMap.value=e.texture,h.samples.value=_,h.weights.value=v,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);let{_lodMax:m}=this;h.dTheta.value=f,h.mipInt.value=m-r;let g=this._sizeLods[n],x=3*g*(n>m-bs?n-m+bs:0),P=4*(this._cubeSize-g);oc(t,x,P,3*g,2*g),o.setRenderTarget(t),o.render(c,Up)}};function IT(e){let t=[],r=[],n=[],i=e,a=e-bs+1+j_.length;for(let s=0;s<a;s++){let o=Math.pow(2,i);r.push(o);let l=1/o;s>e-bs?l=j_[s-e+bs-1]:s===0&&(l=0),n.push(l);let u=1/(o-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],f=6,y=6,_=3,v=2,p=1,m=new Float32Array(_*y*f),g=new Float32Array(v*y*f),x=new Float32Array(p*y*f);for(let T=0;T<f;T++){let b=T%3*2/3-1,R=T>2?0:-1,E=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];m.set(E,_*y*T),g.set(d,v*y*T);let M=[T,T,T,T,T,T];x.set(M,p*y*T)}let P=new tr;P.setAttribute("position",new vr(m,_)),P.setAttribute("uv",new vr(g,v)),P.setAttribute("faceIndex",new vr(x,p)),t.push(P),i>bs&&i--}return{lodPlanes:t,sizeLods:r,sigmas:n}}function q_(e,t,r){let n=new vn(e,t,r);return n.texture.mapping=Oc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(e,t,r,n,i){e.viewport.set(t,r,n,i),e.scissor.set(t,r,n,i)}function UT(e,t,r){let n=new Float32Array(ma),i=new L(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:ma,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/r,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:im(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function J_(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:im(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function K_(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:im(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function im(){return`

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
	`}function OT(e){let t=new WeakMap,r=null;function n(o){if(o&&o.isTexture){let l=o.mapping,u=l===af||l===sf,c=l===Us||l===Os;if(u||c){let h=t.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return r===null&&(r=new zf(e)),h=u?r.fromEquirectangular(o,h):r.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return u&&f&&f.height>0||c&&f&&i(f)?(r===null&&(r=new zf(e)),h=u?r.fromEquirectangular(o):r.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function i(o){let l=0,u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){let l=o.target;l.removeEventListener("dispose",a);let u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function s(){t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:s}}function kT(e){let t={};function r(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=e.getExtension(n)}return t[n]=i,i}return{has:function(n){return r(n)!==null},init:function(){r("EXT_color_buffer_float"),r("WEBGL_clip_cull_distance"),r("OES_texture_float_linear"),r("EXT_color_buffer_half_float"),r("WEBGL_multisampled_render_to_texture"),r("WEBGL_render_shared_exponent")},get:function(n){let i=r(n);return i===null&&nl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function zT(e,t,r,n){let i={},a=new WeakMap;function s(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);for(let y in d.morphAttributes){let _=d.morphAttributes[y];for(let v=0,p=_.length;v<p;v++)t.remove(_[v])}d.removeEventListener("dispose",s),delete i[d.id];let f=a.get(d);f&&(t.remove(f),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,r.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,r.memory.geometries++),d}function l(h){let d=h.attributes;for(let y in d)t.update(d[y],e.ARRAY_BUFFER);let f=h.morphAttributes;for(let y in f){let _=f[y];for(let v=0,p=_.length;v<p;v++)t.update(_[v],e.ARRAY_BUFFER)}}function u(h){let d=[],f=h.index,y=h.attributes.position,_=0;if(f!==null){let m=f.array;_=f.version;for(let g=0,x=m.length;g<x;g+=3){let P=m[g+0],T=m[g+1],b=m[g+2];d.push(P,T,T,b,b,P)}}else if(y!==void 0){let m=y.array;_=y.version;for(let g=0,x=m.length/3-1;g<x;g+=3){let P=g+0,T=g+1,b=g+2;d.push(P,T,T,b,b,P)}}else return;let v=new(i1(d)?f1:p1)(d,1);v.version=_;let p=a.get(h);p&&t.remove(p),a.set(h,v)}function c(h){let d=a.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&u(h)}else u(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function FT(e,t,r){let n;function i(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function l(d,f){e.drawElements(n,f,a,d*s),r.update(f,n,1)}function u(d,f,y){y!==0&&(e.drawElementsInstanced(n,f,a,d*s,y),r.update(f,n,y))}function c(d,f,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,a,d,0,y);let _=0;for(let v=0;v<y;v++)_+=f[v];r.update(_,n,1)}function h(d,f,y,_){if(y===0)return;let v=t.get("WEBGL_multi_draw");if(v===null)for(let p=0;p<d.length;p++)u(d[p]/s,f[p],_[p]);else{v.multiDrawElementsInstancedWEBGL(n,f,0,a,d,0,_,0,y);let p=0;for(let m=0;m<y;m++)p+=f[m]*_[m];r.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function BT(e){let t={geometries:0,textures:0},r={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(r.calls++,s){case e.TRIANGLES:r.triangles+=o*(a/3);break;case e.LINES:r.lines+=o*(a/2);break;case e.LINE_STRIP:r.lines+=o*(a-1);break;case e.LINE_LOOP:r.lines+=o*a;break;case e.POINTS:r.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){r.calls=0,r.triangles=0,r.points=0,r.lines=0}return{memory:t,render:r,programs:null,autoReset:!0,reset:i,update:n}}function VT(e,t,r){let n=new WeakMap,i=new Tt;function a(s,o,l){let u=s.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=c!==void 0?c.length:0,d=n.get(o);if(d===void 0||d.count!==h){let f=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();let y=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],x=0;y===!0&&(x=1),_===!0&&(x=2),v===!0&&(x=3);let P=o.attributes.position.count*x,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);let b=new Float32Array(P*T*4*h),R=new o1(b,P,T,h);R.type=Rn,R.needsUpdate=!0;let E=x*4;for(let M=0;M<h;M++){let N=p[M],k=m[M],H=g[M],W=P*T*4*M;for(let $=0;$<N.count;$++){let j=$*E;y===!0&&(i.fromBufferAttribute(N,$),b[W+j+0]=i.x,b[W+j+1]=i.y,b[W+j+2]=i.z,b[W+j+3]=0),_===!0&&(i.fromBufferAttribute(k,$),b[W+j+4]=i.x,b[W+j+5]=i.y,b[W+j+6]=i.z,b[W+j+7]=0),v===!0&&(i.fromBufferAttribute(H,$),b[W+j+8]=i.x,b[W+j+9]=i.y,b[W+j+10]=i.z,b[W+j+11]=H.itemSize===4?i.w:1)}}d={count:h,texture:R,size:new ne(P,T)},n.set(o,d),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,r);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];let y=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(e,"morphTargetBaseInfluence",y),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",d.texture,r),l.getUniforms().setValue(e,"morphTargetsTextureSize",d.size)}return{update:a}}function HT(e,t,r,n){let i=new WeakMap;function a(l){let u=n.render.frame,c=l.geometry,h=t.get(l,c);if(i.get(h)!==u&&(t.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(r.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&r.update(l.instanceColor,e.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==u&&(d.update(),i.set(d,u))}return h}function s(){i=new WeakMap}function o(l){let u=l.target;u.removeEventListener("dispose",o),r.remove(u.instanceMatrix),u.instanceColor!==null&&r.remove(u.instanceColor)}return{update:a,dispose:s}}var M1=class extends tn{constructor(e,t,r,n,i,a,s,o,l,u=Ns){if(u!==Ns&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===Ns&&(r=_a),r===void 0&&u===zs&&(r=ks),super(null,n,i,a,s,o,u,r,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:jr,this.minFilter=o!==void 0?o:jr,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},w1=new tn,Q_=new M1(1,1),E1=new o1,T1=new Rw,b1=new y1,Z_=[],ey=[],ty=new Float32Array(16),ry=new Float32Array(9),ny=new Float32Array(4);function Ws(e,t,r){let n=e[0];if(n<=0||n>0)return e;let i=t*r,a=Z_[i];if(a===void 0&&(a=new Float32Array(i),Z_[i]=a),t!==0){n.toArray(a,0);for(let s=1,o=0;s!==t;++s)o+=r,e[s].toArray(a,o)}return a}function jt(e,t){if(e.length!==t.length)return!1;for(let r=0,n=e.length;r<n;r++)if(e[r]!==t[r])return!1;return!0}function $t(e,t){for(let r=0,n=t.length;r<n;r++)e[r]=t[r]}function zc(e,t){let r=ey[t];r===void 0&&(r=new Int32Array(t),ey[t]=r);for(let n=0;n!==t;++n)r[n]=e.allocateTextureUnit();return r}function GT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1f(this.addr,t),r[0]=t)}function WT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(jt(r,t))return;e.uniform2fv(this.addr,t),$t(r,t)}}function XT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else if(t.r!==void 0)(r[0]!==t.r||r[1]!==t.g||r[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),r[0]=t.r,r[1]=t.g,r[2]=t.b);else{if(jt(r,t))return;e.uniform3fv(this.addr,t),$t(r,t)}}function jT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(jt(r,t))return;e.uniform4fv(this.addr,t),$t(r,t)}}function $T(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(jt(r,t))return;e.uniformMatrix2fv(this.addr,!1,t),$t(r,t)}else{if(jt(r,n))return;ny.set(n),e.uniformMatrix2fv(this.addr,!1,ny),$t(r,n)}}function YT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(jt(r,t))return;e.uniformMatrix3fv(this.addr,!1,t),$t(r,t)}else{if(jt(r,n))return;ry.set(n),e.uniformMatrix3fv(this.addr,!1,ry),$t(r,n)}}function qT(e,t){let r=this.cache,n=t.elements;if(n===void 0){if(jt(r,t))return;e.uniformMatrix4fv(this.addr,!1,t),$t(r,t)}else{if(jt(r,n))return;ty.set(n),e.uniformMatrix4fv(this.addr,!1,ty),$t(r,n)}}function JT(e,t){let r=this.cache;r[0]!==t&&(e.uniform1i(this.addr,t),r[0]=t)}function KT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(jt(r,t))return;e.uniform2iv(this.addr,t),$t(r,t)}}function QT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(jt(r,t))return;e.uniform3iv(this.addr,t),$t(r,t)}}function ZT(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(jt(r,t))return;e.uniform4iv(this.addr,t),$t(r,t)}}function eb(e,t){let r=this.cache;r[0]!==t&&(e.uniform1ui(this.addr,t),r[0]=t)}function tb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),r[0]=t.x,r[1]=t.y);else{if(jt(r,t))return;e.uniform2uiv(this.addr,t),$t(r,t)}}function rb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),r[0]=t.x,r[1]=t.y,r[2]=t.z);else{if(jt(r,t))return;e.uniform3uiv(this.addr,t),$t(r,t)}}function nb(e,t){let r=this.cache;if(t.x!==void 0)(r[0]!==t.x||r[1]!==t.y||r[2]!==t.z||r[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),r[0]=t.x,r[1]=t.y,r[2]=t.z,r[3]=t.w);else{if(jt(r,t))return;e.uniform4uiv(this.addr,t),$t(r,t)}}function ib(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Q_.compareFunction=t1,a=Q_):a=w1,r.setTexture2D(t||a,i)}function ab(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture3D(t||T1,i)}function sb(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTextureCube(t||b1,i)}function ob(e,t,r){let n=this.cache,i=r.allocateTextureUnit();n[0]!==i&&(e.uniform1i(this.addr,i),n[0]=i),r.setTexture2DArray(t||E1,i)}function lb(e){switch(e){case 5126:return GT;case 35664:return WT;case 35665:return XT;case 35666:return jT;case 35674:return $T;case 35675:return YT;case 35676:return qT;case 5124:case 35670:return JT;case 35667:case 35671:return KT;case 35668:case 35672:return QT;case 35669:case 35673:return ZT;case 5125:return eb;case 36294:return tb;case 36295:return rb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ob}}function ub(e,t){e.uniform1fv(this.addr,t)}function cb(e,t){let r=Ws(t,this.size,2);e.uniform2fv(this.addr,r)}function hb(e,t){let r=Ws(t,this.size,3);e.uniform3fv(this.addr,r)}function db(e,t){let r=Ws(t,this.size,4);e.uniform4fv(this.addr,r)}function pb(e,t){let r=Ws(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,r)}function fb(e,t){let r=Ws(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,r)}function mb(e,t){let r=Ws(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,r)}function gb(e,t){e.uniform1iv(this.addr,t)}function vb(e,t){e.uniform2iv(this.addr,t)}function _b(e,t){e.uniform3iv(this.addr,t)}function yb(e,t){e.uniform4iv(this.addr,t)}function xb(e,t){e.uniform1uiv(this.addr,t)}function Sb(e,t){e.uniform2uiv(this.addr,t)}function Mb(e,t){e.uniform3uiv(this.addr,t)}function wb(e,t){e.uniform4uiv(this.addr,t)}function Eb(e,t,r){let n=this.cache,i=t.length,a=zc(r,i);jt(n,a)||(e.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==i;++s)r.setTexture2D(t[s]||w1,a[s])}function Tb(e,t,r){let n=this.cache,i=t.length,a=zc(r,i);jt(n,a)||(e.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==i;++s)r.setTexture3D(t[s]||T1,a[s])}function bb(e,t,r){let n=this.cache,i=t.length,a=zc(r,i);jt(n,a)||(e.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==i;++s)r.setTextureCube(t[s]||b1,a[s])}function Ab(e,t,r){let n=this.cache,i=t.length,a=zc(r,i);jt(n,a)||(e.uniform1iv(this.addr,a),$t(n,a));for(let s=0;s!==i;++s)r.setTexture2DArray(t[s]||E1,a[s])}function Cb(e){switch(e){case 5126:return ub;case 35664:return cb;case 35665:return hb;case 35666:return db;case 35674:return pb;case 35675:return fb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return vb;case 35668:case 35672:return _b;case 35669:case 35673:return yb;case 5125:return xb;case 36294:return Sb;case 36295:return Mb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Eb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Ab}}var Rb=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=lb(t.type)}},Pb=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cb(t.type)}},Nb=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let s=n[i];s.setValue(e,t[s.id],r)}}},Bp=/(\w+)(\])?(\[|\.)?/g;function iy(e,t){e.seq.push(t),e.map[t.id]=t}function Lb(e,t,r){let n=e.name,i=n.length;for(Bp.lastIndex=0;;){let a=Bp.exec(n),s=Bp.lastIndex,o=a[1],l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===i){iy(r,u===void 0?new Rb(o,e,t):new Pb(o,e,t));break}else{let c=r.map[o];c===void 0&&(c=new Nb(o),iy(r,c)),r=c}}}var Rc=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<r;++n){let i=e.getActiveUniform(t,n),a=e.getUniformLocation(t,i.name);Lb(i,a,this)}}setValue(e,t,r,n){let i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){let n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){let s=t[i],o=r[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,n)}}static seqWithValue(e,t){let r=[];for(let n=0,i=e.length;n!==i;++n){let a=e[n];a.id in t&&r.push(a)}return r}};function ay(e,t,r){let n=e.createShader(t);return e.shaderSource(n,r),e.compileShader(n),n}var Db=37297,Ib=0;function Ub(e,t){let r=e.split(`
`),n=[],i=Math.max(t-6,0),a=Math.min(t+6,r.length);for(let s=i;s<a;s++){let o=s+1;n.push(`${o===t?">":" "} ${o}: ${r[s]}`)}return n.join(`
`)}var sy=new ot;function Ob(e){dt._getMatrix(sy,dt.workingColorSpace,e);let t=`mat3( ${sy.elements.map(r=>r.toFixed(4))} )`;switch(dt.getTransfer(e)){case kc:return[t,"LinearTransferOETF"];case gt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function oy(e,t,r){let n=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(n&&i==="")return"";let a=/ERROR: 0:(\d+)/.exec(i);if(a){let s=parseInt(a[1]);return r.toUpperCase()+`

`+i+`

`+Ub(e.getShaderSource(t),s)}else return i}function kb(e,t){let r=Ob(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${r[1]}( vec4( value.rgb * ${r[0]}, value.a ) );`,"}"].join(`
`)}function zb(e,t){let r;switch(t){case Fy:r="Linear";break;case By:r="Reinhard";break;case Vy:r="Cineon";break;case Yf:r="ACESFilmic";break;case Hy:r="AgX";break;case Gy:r="Neutral";break;case lw:r="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),r="Linear"}return"vec3 "+e+"( vec3 color ) { return "+r+"ToneMapping( color ); }"}var lc=new L;function Fb(){dt.getLuminanceCoefficients(lc);let e=lc.x.toFixed(4),t=lc.y.toFixed(4),r=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${r} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function Vb(e){let t=[];for(let r in e){let n=e[r];n!==!1&&t.push("#define "+r+" "+n)}return t.join(`
`)}function Hb(e,t){let r={},n=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let a=e.getActiveAttrib(t,i),s=a.name,o=1;a.type===e.FLOAT_MAT2&&(o=2),a.type===e.FLOAT_MAT3&&(o=3),a.type===e.FLOAT_MAT4&&(o=4),r[s]={type:a.type,location:e.getAttribLocation(t,s),locationSize:o}}return r}function il(e){return e!==""}function ly(e,t){let r=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,r).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function uy(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ff(e){return e.replace(Gb,Xb)}var Wb=new Map;function Xb(e,t){let r=st[t];if(r===void 0){let n=Wb.get(t);if(n!==void 0)r=st[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ff(r)}var jb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cy(e){return e.replace(jb,$b)}function $b(e,t,r,n){let i="";for(let a=parseInt(t);a<parseInt(r);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function hy(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Yb(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Oy?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===ky?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function qb(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case Us:case Os:t="ENVMAP_TYPE_CUBE";break;case Oc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Jb(e){let t="ENVMAP_MODE_REFLECTION";return e.envMap&&e.envMapMode===Os&&(t="ENVMAP_MODE_REFRACTION"),t}function Kb(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case zy:t="ENVMAP_BLENDING_MULTIPLY";break;case sw:t="ENVMAP_BLENDING_MIX";break;case ow:t="ENVMAP_BLENDING_ADD";break}return t}function Qb(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let r=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,r),112)),texelHeight:n,maxMip:r}}function Zb(e,t,r,n){let i=e.getContext(),a=r.defines,s=r.vertexShader,o=r.fragmentShader,l=Yb(r),u=qb(r),c=Jb(r),h=Kb(r),d=Qb(r),f=Bb(r),y=Vb(a),_=i.createProgram(),v,p,m=r.glslVersion?"#version "+r.glslVersion+`
`:"";r.isRawShaderMaterial?(v=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(il).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y].filter(il).join(`
`),p.length>0&&(p+=`
`)):(v=[hy(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",r.batching?"#define USE_BATCHING":"",r.batchingColor?"#define USE_BATCHING_COLOR":"",r.instancing?"#define USE_INSTANCING":"",r.instancingColor?"#define USE_INSTANCING_COLOR":"",r.instancingMorph?"#define USE_INSTANCING_MORPH":"",r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+c:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.displacementMap?"#define USE_DISPLACEMENTMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.mapUv?"#define MAP_UV "+r.mapUv:"",r.alphaMapUv?"#define ALPHAMAP_UV "+r.alphaMapUv:"",r.lightMapUv?"#define LIGHTMAP_UV "+r.lightMapUv:"",r.aoMapUv?"#define AOMAP_UV "+r.aoMapUv:"",r.emissiveMapUv?"#define EMISSIVEMAP_UV "+r.emissiveMapUv:"",r.bumpMapUv?"#define BUMPMAP_UV "+r.bumpMapUv:"",r.normalMapUv?"#define NORMALMAP_UV "+r.normalMapUv:"",r.displacementMapUv?"#define DISPLACEMENTMAP_UV "+r.displacementMapUv:"",r.metalnessMapUv?"#define METALNESSMAP_UV "+r.metalnessMapUv:"",r.roughnessMapUv?"#define ROUGHNESSMAP_UV "+r.roughnessMapUv:"",r.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+r.anisotropyMapUv:"",r.clearcoatMapUv?"#define CLEARCOATMAP_UV "+r.clearcoatMapUv:"",r.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+r.clearcoatNormalMapUv:"",r.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+r.clearcoatRoughnessMapUv:"",r.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+r.iridescenceMapUv:"",r.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+r.iridescenceThicknessMapUv:"",r.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+r.sheenColorMapUv:"",r.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+r.sheenRoughnessMapUv:"",r.specularMapUv?"#define SPECULARMAP_UV "+r.specularMapUv:"",r.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+r.specularColorMapUv:"",r.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+r.specularIntensityMapUv:"",r.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+r.transmissionMapUv:"",r.thicknessMapUv?"#define THICKNESSMAP_UV "+r.thicknessMapUv:"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&r.flatShading===!1?"#define USE_MORPHNORMALS":"",r.morphColors?"#define USE_MORPHCOLORS":"",r.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+r.morphTextureStride:"",r.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+r.morphTargetsCount:"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),p=[hy(r),"#define SHADER_TYPE "+r.shaderType,"#define SHADER_NAME "+r.shaderName,y,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp2?"#define FOG_EXP2":"",r.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",r.map?"#define USE_MAP":"",r.matcap?"#define USE_MATCAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+u:"",r.envMap?"#define "+c:"",r.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",r.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.anisotropy?"#define USE_ANISOTROPY":"",r.anisotropyMap?"#define USE_ANISOTROPYMAP":"",r.clearcoat?"#define USE_CLEARCOAT":"",r.clearcoatMap?"#define USE_CLEARCOATMAP":"",r.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",r.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",r.dispersion?"#define USE_DISPERSION":"",r.iridescence?"#define USE_IRIDESCENCE":"",r.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",r.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",r.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.alphaTest?"#define USE_ALPHATEST":"",r.alphaHash?"#define USE_ALPHAHASH":"",r.sheen?"#define USE_SHEEN":"",r.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",r.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",r.transmission?"#define USE_TRANSMISSION":"",r.transmissionMap?"#define USE_TRANSMISSIONMAP":"",r.thicknessMap?"#define USE_THICKNESSMAP":"",r.vertexTangents&&r.flatShading===!1?"#define USE_TANGENT":"",r.vertexColors||r.instancingColor||r.batchingColor?"#define USE_COLOR":"",r.vertexAlphas?"#define USE_COLOR_ALPHA":"",r.vertexUv1s?"#define USE_UV1":"",r.vertexUv2s?"#define USE_UV2":"",r.vertexUv3s?"#define USE_UV3":"",r.pointsUvs?"#define USE_POINTS_UV":"",r.gradientMap?"#define USE_GRADIENTMAP":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"",r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+l:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.numLightProbes>0?"#define USE_LIGHT_PROBES":"",r.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",r.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",r.toneMapping!==zi?"#define TONE_MAPPING":"",r.toneMapping!==zi?st.tonemapping_pars_fragment:"",r.toneMapping!==zi?zb("toneMapping",r.toneMapping):"",r.dithering?"#define DITHERING":"",r.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,kb("linearToOutputTexel",r.outputColorSpace),Fb(),r.useDepthPacking?"#define DEPTH_PACKING "+r.depthPacking:"",`
`].filter(il).join(`
`)),s=Ff(s),s=ly(s,r),s=uy(s,r),o=Ff(o),o=ly(o,r),o=uy(o,r),s=cy(s),o=cy(o),r.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",r.glslVersion===T_?"":"layout(location = 0) out highp vec4 pc_fragColor;",r.glslVersion===T_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let g=m+v+s,x=m+p+o,P=ay(i,i.VERTEX_SHADER,g),T=ay(i,i.FRAGMENT_SHADER,x);i.attachShader(_,P),i.attachShader(_,T),r.index0AttributeName!==void 0?i.bindAttribLocation(_,0,r.index0AttributeName):r.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(N){if(e.debug.checkShaderErrors){let k=i.getProgramInfoLog(_).trim(),H=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(T).trim(),$=!0,j=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(i,_,P,T);else{let ie=oy(i,P,"vertex"),Y=oy(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+k+`
`+ie+`
`+Y)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(H===""||W==="")&&(j=!1);j&&(N.diagnostics={runnable:$,programLog:k,vertexShader:{log:H,prefix:v},fragmentShader:{log:W,prefix:p}})}i.deleteShader(P),i.deleteShader(T),R=new Rc(i,_),E=Hb(i,_)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let E;this.getAttributes=function(){return E===void 0&&b(this),E};let M=r.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(_,Db)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=r.shaderType,this.name=r.shaderName,this.id=Ib++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}var eA=0,tA=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,r=e.fragmentShader,n=this._getShaderStage(t),i=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new rA(e),t.set(e,r)),r}},rA=class{constructor(e){this.id=eA++,this.code=e,this.usedTimes=0}};function nA(e,t,r,n,i,a,s){let o=new h1,l=new tA,u=new Set,c=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return u.add(E),E===0?"uv":`uv${E}`}function v(E,M,N,k,H){let W=k.fog,$=H.geometry,j=E.isMeshStandardMaterial?k.environment:null,ie=(E.isMeshStandardMaterial?r:t).get(E.envMap||j),Y=ie&&ie.mapping===Oc?ie.image.height:null,de=y[E.type];E.precision!==null&&(f=i.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));let Me=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ke=Me!==void 0?Me.length:0,tt=0;$.morphAttributes.position!==void 0&&(tt=1),$.morphAttributes.normal!==void 0&&(tt=2),$.morphAttributes.color!==void 0&&(tt=3);let J,ce,ke,De;if(de){let pt=Tn[de];J=pt.vertexShader,ce=pt.fragmentShader}else J=E.vertexShader,ce=E.fragmentShader,l.update(E),ke=l.getVertexShaderID(E),De=l.getFragmentShaderID(E);let me=e.getRenderTarget(),Ye=e.state.buffers.depth.getReversed(),nt=H.isInstancedMesh===!0,Je=H.isBatchedMesh===!0,Q=!!E.map,pe=!!E.matcap,C=!!ie,Re=!!E.aoMap,ue=!!E.lightMap,Ue=!!E.bumpMap,ae=!!E.normalMap,Ge=!!E.displacementMap,Te=!!E.emissiveMap,be=!!E.metalnessMap,A=!!E.roughnessMap,w=E.anisotropy>0,z=E.clearcoat>0,K=E.dispersion>0,te=E.iridescence>0,q=E.sheen>0,Be=E.transmission>0,xe=w&&!!E.anisotropyMap,Se=z&&!!E.clearcoatMap,Xe=z&&!!E.clearcoatNormalMap,he=z&&!!E.clearcoatRoughnessMap,Ce=te&&!!E.iridescenceMap,it=te&&!!E.iridescenceThicknessMap,qe=q&&!!E.sheenColorMap,Ne=q&&!!E.sheenRoughnessMap,Ze=!!E.specularMap,et=!!E.specularColorMap,St=!!E.specularIntensityMap,O=Be&&!!E.transmissionMap,se=Be&&!!E.thicknessMap,X=!!E.gradientMap,ee=!!E.alphaMap,Ee=E.alphaTest>0,ge=!!E.alphaHash,ut=!!E.extensions,Pt=zi;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Pt=e.toneMapping);let Yt={shaderID:de,shaderType:E.type,shaderName:E.name,vertexShader:J,fragmentShader:ce,defines:E.defines,customVertexShaderID:ke,customFragmentShaderID:De,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Je,batchingColor:Je&&H._colorsTexture!==null,instancing:nt,instancingColor:nt&&H.instanceColor!==null,instancingMorph:nt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?e.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Bs,alphaToCoverage:!!E.alphaToCoverage,map:Q,matcap:pe,envMap:C,envMapMode:C&&ie.mapping,envMapCubeUVHeight:Y,aoMap:Re,lightMap:ue,bumpMap:Ue,normalMap:ae,displacementMap:d&&Ge,emissiveMap:Te,normalMapObjectSpace:ae&&E.normalMapType===dw,normalMapTangentSpace:ae&&E.normalMapType===e1,metalnessMap:be,roughnessMap:A,anisotropy:w,anisotropyMap:xe,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:Xe,clearcoatRoughnessMap:he,dispersion:K,iridescence:te,iridescenceMap:Ce,iridescenceThicknessMap:it,sheen:q,sheenColorMap:qe,sheenRoughnessMap:Ne,specularMap:Ze,specularColorMap:et,specularIntensityMap:St,transmission:Be,transmissionMap:O,thicknessMap:se,gradientMap:X,opaque:E.transparent===!1&&E.blending===Rs&&E.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ee,alphaHash:ge,combine:E.combine,mapUv:Q&&_(E.map.channel),aoMapUv:Re&&_(E.aoMap.channel),lightMapUv:ue&&_(E.lightMap.channel),bumpMapUv:Ue&&_(E.bumpMap.channel),normalMapUv:ae&&_(E.normalMap.channel),displacementMapUv:Ge&&_(E.displacementMap.channel),emissiveMapUv:Te&&_(E.emissiveMap.channel),metalnessMapUv:be&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:xe&&_(E.anisotropyMap.channel),clearcoatMapUv:Se&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:it&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(E.sheenRoughnessMap.channel),specularMapUv:Ze&&_(E.specularMap.channel),specularColorMapUv:et&&_(E.specularColorMap.channel),specularIntensityMapUv:St&&_(E.specularIntensityMap.channel),transmissionMapUv:O&&_(E.transmissionMap.channel),thicknessMapUv:se&&_(E.thicknessMap.channel),alphaMapUv:ee&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ae||w),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!$.attributes.uv&&(Q||ee),fog:!!W,useFog:E.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ye,skinning:H.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ke,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:E.dithering,shadowMapEnabled:e.shadowMap.enabled&&N.length>0,shadowMapType:e.shadowMap.type,toneMapping:Pt,decodeVideoTexture:Q&&E.map.isVideoTexture===!0&&dt.getTransfer(E.map.colorSpace)===gt,decodeVideoTextureEmissive:Te&&E.emissiveMap.isVideoTexture===!0&&dt.getTransfer(E.emissiveMap.colorSpace)===gt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===bn,flipSided:E.side===Tr,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:ut&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ut&&E.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Yt.vertexUv1s=u.has(1),Yt.vertexUv2s=u.has(2),Yt.vertexUv3s=u.has(3),u.clear(),Yt}function p(E){let M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(let N in E.defines)M.push(N),M.push(E.defines[N]);return E.isRawShaderMaterial===!1&&(m(M,E),g(M,E),M.push(e.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function m(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function g(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function x(E){let M=y[E.type],N;if(M){let k=Tn[M];N=cl.clone(k.uniforms)}else N=E.uniforms;return N}function P(E,M){let N;for(let k=0,H=c.length;k<H;k++){let W=c[k];if(W.cacheKey===M){N=W,++N.usedTimes;break}}return N===void 0&&(N=new Zb(e,M,E,a),c.push(N)),N}function T(E){if(--E.usedTimes===0){let M=c.indexOf(E);c[M]=c[c.length-1],c.pop(),E.destroy()}}function b(E){l.remove(E)}function R(){l.dispose()}return{getParameters:v,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:T,releaseShaderCache:b,programs:c,dispose:R}}function iA(){let e=new WeakMap;function t(s){return e.has(s)}function r(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function n(s){e.delete(s)}function i(s,o,l){e.get(s)[o]=l}function a(){e=new WeakMap}return{has:t,get:r,remove:n,update:i,dispose:a}}function aA(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function dy(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function py(){let e=[],t=0,r=[],n=[],i=[];function a(){t=0,r.length=0,n.length=0,i.length=0}function s(h,d,f,y,_,v){let p=e[t];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:y,renderOrder:h.renderOrder,z:_,group:v},e[t]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=y,p.renderOrder=h.renderOrder,p.z=_,p.group=v),t++,p}function o(h,d,f,y,_,v){let p=s(h,d,f,y,_,v);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):r.push(p)}function l(h,d,f,y,_,v){let p=s(h,d,f,y,_,v);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):r.unshift(p)}function u(h,d){r.length>1&&r.sort(h||aA),n.length>1&&n.sort(d||dy),i.length>1&&i.sort(d||dy)}function c(){for(let h=t,d=e.length;h<d;h++){let f=e[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:r,transmissive:n,transparent:i,init:a,push:o,unshift:l,finish:c,sort:u}}function sA(){let e=new WeakMap;function t(n,i){let a=e.get(n),s;return a===void 0?(s=new py,e.set(n,[s])):i>=a.length?(s=new py,a.push(s)):s=a[i],s}function r(){e=new WeakMap}return{get:t,dispose:r}}function oA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={direction:new L,color:new je};break;case"SpotLight":r={position:new L,direction:new L,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":r={position:new L,color:new je,distance:0,decay:0};break;case"HemisphereLight":r={direction:new L,skyColor:new je,groundColor:new je};break;case"RectAreaLight":r={color:new je,position:new L,halfWidth:new L,halfHeight:new L};break}return e[t.id]=r,r}}}function lA(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let r;switch(t.type){case"DirectionalLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":r={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=r,r}}}var uA=0;function cA(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function hA(e){let t=new oA,r=lA(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new L);let i=new L,a=new bt,s=new bt;function o(u){let c=0,h=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,y=0,_=0,v=0,p=0,m=0,g=0,x=0,P=0,T=0,b=0;u.sort(cA);for(let E=0,M=u.length;E<M;E++){let N=u[E],k=N.color,H=N.intensity,W=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)c+=k.r*H,h+=k.g*H,d+=k.b*H;else if(N.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(N.sh.coefficients[j],H);b++}else if(N.isDirectionalLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ie=N.shadow,Y=r.get(N);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=N.shadow.matrix,m++}n.directional[f]=j,f++}else if(N.isSpotLight){let j=t.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(k).multiplyScalar(H),j.distance=W,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,n.spot[_]=j;let ie=N.shadow;if(N.map&&(n.spotLightMap[P]=N.map,P++,ie.updateMatrices(N),N.castShadow&&T++),n.spotLightMatrix[_]=ie.matrix,N.castShadow){let Y=r.get(N);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=$,x++}_++}else if(N.isRectAreaLight){let j=t.get(N);j.color.copy(k).multiplyScalar(H),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),n.rectArea[v]=j,v++}else if(N.isPointLight){let j=t.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity),j.distance=N.distance,j.decay=N.decay,N.castShadow){let ie=N.shadow,Y=r.get(N);Y.shadowIntensity=ie.intensity,Y.shadowBias=ie.bias,Y.shadowNormalBias=ie.normalBias,Y.shadowRadius=ie.radius,Y.shadowMapSize=ie.mapSize,Y.shadowCameraNear=ie.camera.near,Y.shadowCameraFar=ie.camera.far,n.pointShadow[y]=Y,n.pointShadowMap[y]=$,n.pointShadowMatrix[y]=N.shadow.matrix,g++}n.point[y]=j,y++}else if(N.isHemisphereLight){let j=t.get(N);j.skyColor.copy(N.color).multiplyScalar(H),j.groundColor.copy(N.groundColor).multiplyScalar(H),n.hemi[p]=j,p++}}v>0&&(e.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=h,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==f||R.pointLength!==y||R.spotLength!==_||R.rectAreaLength!==v||R.hemiLength!==p||R.numDirectionalShadows!==m||R.numPointShadows!==g||R.numSpotShadows!==x||R.numSpotMaps!==P||R.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=v,n.point.length=y,n.hemi.length=p,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=g,n.pointShadowMap.length=g,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=g,n.spotLightMatrix.length=x+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,R.directionalLength=f,R.pointLength=y,R.spotLength=_,R.rectAreaLength=v,R.hemiLength=p,R.numDirectionalShadows=m,R.numPointShadows=g,R.numSpotShadows=x,R.numSpotMaps=P,R.numLightProbes=b,n.version=uA++)}function l(u,c){let h=0,d=0,f=0,y=0,_=0,v=c.matrixWorldInverse;for(let p=0,m=u.length;p<m;p++){let g=u[p];if(g.isDirectionalLight){let x=n.directional[h];x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),h++}else if(g.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),x.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(v),f++}else if(g.isRectAreaLight){let x=n.rectArea[y];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),s.identity(),a.copy(g.matrixWorld),a.premultiply(v),s.extractRotation(a),x.halfWidth.set(g.width*.5,0,0),x.halfHeight.set(0,g.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),y++}else if(g.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(g.matrixWorld),x.position.applyMatrix4(v),d++}else if(g.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(g.matrixWorld),x.direction.transformDirection(v),_++}}}return{setup:o,setupView:l,state:n}}function fy(e){let t=new hA(e),r=[],n=[];function i(c){u.camera=c,r.length=0,n.length=0}function a(c){r.push(c)}function s(c){n.push(c)}function o(){t.setup(r)}function l(c){t.setupView(r,c)}let u={lightsArray:r,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:u,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function dA(e){let t=new WeakMap;function r(i,a=0){let s=t.get(i),o;return s===void 0?(o=new fy(e),t.set(i,[o])):a>=s.length?(o=new fy(e),s.push(o)):o=s[a],o}function n(){t=new WeakMap}return{get:r,dispose:n}}var pA=class extends Sa{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=cw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},fA=class extends Sa{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},mA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function vA(e,t,r){let n=new rm,i=new ne,a=new ne,s=new Tt,o=new pA({depthPacking:hw}),l=new fA,u={},c=r.maxTextureSize,h={[Fi]:Tr,[Tr]:Fi,[bn]:bn},d=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:mA,fragmentShader:gA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let y=new tr;y.setAttribute("position",new vr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(y,d),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oy;let p=this.type;this.render=function(T,b,R){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||T.length===0)return;let E=e.getRenderTarget(),M=e.getActiveCubeFace(),N=e.getActiveMipmapLevel(),k=e.state;k.setBlending(Zn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let H=p!==Jn&&this.type===Jn,W=p===Jn&&this.type!==Jn;for(let $=0,j=T.length;$<j;$++){let ie=T[$],Y=ie.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);let de=Y.getFrameExtents();if(i.multiply(de),a.copy(Y.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/de.x),i.x=a.x*de.x,Y.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/de.y),i.y=a.y*de.y,Y.mapSize.y=a.y)),Y.map===null||H===!0||W===!0){let Ke=this.type!==Jn?{minFilter:jr,magFilter:jr}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vn(i.x,i.y,Ke),Y.map.texture.name=ie.name+".shadowMap",Y.camera.updateProjectionMatrix()}e.setRenderTarget(Y.map),e.clear();let Me=Y.getViewportCount();for(let Ke=0;Ke<Me;Ke++){let tt=Y.getViewport(Ke);s.set(a.x*tt.x,a.y*tt.y,a.x*tt.z,a.y*tt.w),k.viewport(s),Y.updateMatrices(ie,Ke),n=Y.getFrustum(),x(b,R,Y.camera,ie,this.type)}Y.isPointLightShadow!==!0&&this.type===Jn&&m(Y,R),Y.needsUpdate=!1}p=this.type,v.needsUpdate=!1,e.setRenderTarget(E,M,N)};function m(T,b){let R=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new vn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,e.setRenderTarget(T.mapPass),e.clear(),e.renderBufferDirect(b,null,R,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,e.setRenderTarget(T.map),e.clear(),e.renderBufferDirect(b,null,R,f,_,null)}function g(T,b,R,E){let M=null,N=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(N!==void 0)M=N;else if(M=R.isPointLight===!0?l:o,e.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let k=M.uuid,H=b.uuid,W=u[k];W===void 0&&(W={},u[k]=W);let $=W[H];$===void 0&&($=M.clone(),W[H]=$,b.addEventListener("dispose",P)),M=$}if(M.visible=b.visible,M.wireframe=b.wireframe,E===Jn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:h[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let k=e.properties.get(M);k.light=R}return M}function x(T,b,R,E,M){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Jn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let k=t.update(T),H=T.material;if(Array.isArray(H)){let W=k.groups;for(let $=0,j=W.length;$<j;$++){let ie=W[$],Y=H[ie.materialIndex];if(Y&&Y.visible){let de=g(T,Y,E,M);T.onBeforeShadow(e,T,b,R,k,de,ie),e.renderBufferDirect(R,null,k,de,T,ie),T.onAfterShadow(e,T,b,R,k,de,ie)}}}else if(H.visible){let W=g(T,H,E,M);T.onBeforeShadow(e,T,b,R,k,W,null),e.renderBufferDirect(R,null,k,W,T,null),T.onAfterShadow(e,T,b,R,k,W,null)}}let N=T.children;for(let k=0,H=N.length;k<H;k++)x(N[k],b,R,E,M)}function P(T){T.target.removeEventListener("dispose",P);for(let b in u){let R=u[b],E=T.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}var _A={[Kp]:Qp,[Zp]:rf,[ef]:nf,[Is]:tf,[Qp]:Kp,[rf]:Zp,[nf]:ef,[tf]:Is};function yA(e,t){function r(){let O=!1,se=new Tt,X=null,ee=new Tt(0,0,0,0);return{setMask:function(Ee){X!==Ee&&!O&&(e.colorMask(Ee,Ee,Ee,Ee),X=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,ge,ut,Pt,Yt){Yt===!0&&(Ee*=Pt,ge*=Pt,ut*=Pt),se.set(Ee,ge,ut,Pt),ee.equals(se)===!1&&(e.clearColor(Ee,ge,ut,Pt),ee.copy(se))},reset:function(){O=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let O=!1,se=!1,X=null,ee=null,Ee=null;return{setReversed:function(ge){if(se!==ge){let ut=t.get("EXT_clip_control");se?ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.ZERO_TO_ONE_EXT):ut.clipControlEXT(ut.LOWER_LEFT_EXT,ut.NEGATIVE_ONE_TO_ONE_EXT);let Pt=Ee;Ee=null,this.setClear(Pt)}se=ge},getReversed:function(){return se},setTest:function(ge){ge?me(e.DEPTH_TEST):Ye(e.DEPTH_TEST)},setMask:function(ge){X!==ge&&!O&&(e.depthMask(ge),X=ge)},setFunc:function(ge){if(se&&(ge=_A[ge]),ee!==ge){switch(ge){case Kp:e.depthFunc(e.NEVER);break;case Qp:e.depthFunc(e.ALWAYS);break;case Zp:e.depthFunc(e.LESS);break;case Is:e.depthFunc(e.LEQUAL);break;case ef:e.depthFunc(e.EQUAL);break;case tf:e.depthFunc(e.GEQUAL);break;case rf:e.depthFunc(e.GREATER);break;case nf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}ee=ge}},setLocked:function(ge){O=ge},setClear:function(ge){Ee!==ge&&(se&&(ge=1-ge),e.clearDepth(ge),Ee=ge)},reset:function(){O=!1,X=null,ee=null,Ee=null,se=!1}}}function i(){let O=!1,se=null,X=null,ee=null,Ee=null,ge=null,ut=null,Pt=null,Yt=null;return{setTest:function(pt){O||(pt?me(e.STENCIL_TEST):Ye(e.STENCIL_TEST))},setMask:function(pt){se!==pt&&!O&&(e.stencilMask(pt),se=pt)},setFunc:function(pt,Lr,Dr){(X!==pt||ee!==Lr||Ee!==Dr)&&(e.stencilFunc(pt,Lr,Dr),X=pt,ee=Lr,Ee=Dr)},setOp:function(pt,Lr,Dr){(ge!==pt||ut!==Lr||Pt!==Dr)&&(e.stencilOp(pt,Lr,Dr),ge=pt,ut=Lr,Pt=Dr)},setLocked:function(pt){O=pt},setClear:function(pt){Yt!==pt&&(e.clearStencil(pt),Yt=pt)},reset:function(){O=!1,se=null,X=null,ee=null,Ee=null,ge=null,ut=null,Pt=null,Yt=null}}}let a=new r,s=new n,o=new i,l=new WeakMap,u=new WeakMap,c={},h={},d=new WeakMap,f=[],y=null,_=!1,v=null,p=null,m=null,g=null,x=null,P=null,T=null,b=new je(0,0,0),R=0,E=!1,M=null,N=null,k=null,H=null,W=null,$=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ie=0,Y=e.getParameter(e.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=ie>=2);let de=null,Me={},Ke=e.getParameter(e.SCISSOR_BOX),tt=e.getParameter(e.VIEWPORT),J=new Tt().fromArray(Ke),ce=new Tt().fromArray(tt);function ke(O,se,X,ee){let Ee=new Uint8Array(4),ge=e.createTexture();e.bindTexture(O,ge),e.texParameteri(O,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(O,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let ut=0;ut<X;ut++)O===e.TEXTURE_3D||O===e.TEXTURE_2D_ARRAY?e.texImage3D(se,0,e.RGBA,1,1,ee,0,e.RGBA,e.UNSIGNED_BYTE,Ee):e.texImage2D(se+ut,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Ee);return ge}let De={};De[e.TEXTURE_2D]=ke(e.TEXTURE_2D,e.TEXTURE_2D,1),De[e.TEXTURE_CUBE_MAP]=ke(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[e.TEXTURE_2D_ARRAY]=ke(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),De[e.TEXTURE_3D]=ke(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),me(e.DEPTH_TEST),s.setFunc(Is),Ue(!1),ae(__),me(e.CULL_FACE),Re(Zn);function me(O){c[O]!==!0&&(e.enable(O),c[O]=!0)}function Ye(O){c[O]!==!1&&(e.disable(O),c[O]=!1)}function nt(O,se){return h[O]!==se?(e.bindFramebuffer(O,se),h[O]=se,O===e.DRAW_FRAMEBUFFER&&(h[e.FRAMEBUFFER]=se),O===e.FRAMEBUFFER&&(h[e.DRAW_FRAMEBUFFER]=se),!0):!1}function Je(O,se){let X=f,ee=!1;if(O){X=d.get(se),X===void 0&&(X=[],d.set(se,X));let Ee=O.textures;if(X.length!==Ee.length||X[0]!==e.COLOR_ATTACHMENT0){for(let ge=0,ut=Ee.length;ge<ut;ge++)X[ge]=e.COLOR_ATTACHMENT0+ge;X.length=Ee.length,ee=!0}}else X[0]!==e.BACK&&(X[0]=e.BACK,ee=!0);ee&&e.drawBuffers(X)}function Q(O){return y!==O?(e.useProgram(O),y=O,!0):!1}let pe={[fa]:e.FUNC_ADD,[GM]:e.FUNC_SUBTRACT,[WM]:e.FUNC_REVERSE_SUBTRACT};pe[XM]=e.MIN,pe[jM]=e.MAX;let C={[$M]:e.ZERO,[YM]:e.ONE,[qM]:e.SRC_COLOR,[qp]:e.SRC_ALPHA,[tw]:e.SRC_ALPHA_SATURATE,[ZM]:e.DST_COLOR,[KM]:e.DST_ALPHA,[JM]:e.ONE_MINUS_SRC_COLOR,[Jp]:e.ONE_MINUS_SRC_ALPHA,[ew]:e.ONE_MINUS_DST_COLOR,[QM]:e.ONE_MINUS_DST_ALPHA,[rw]:e.CONSTANT_COLOR,[nw]:e.ONE_MINUS_CONSTANT_COLOR,[iw]:e.CONSTANT_ALPHA,[aw]:e.ONE_MINUS_CONSTANT_ALPHA};function Re(O,se,X,ee,Ee,ge,ut,Pt,Yt,pt){if(O===Zn){_===!0&&(Ye(e.BLEND),_=!1);return}if(_===!1&&(me(e.BLEND),_=!0),O!==HM){if(O!==v||pt!==E){if((p!==fa||x!==fa)&&(e.blendEquation(e.FUNC_ADD),p=fa,x=fa),pt)switch(O){case Rs:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ps:e.blendFunc(e.ONE,e.ONE);break;case y_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case x_:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Rs:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case Ps:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case y_:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case x_:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,g=null,P=null,T=null,b.set(0,0,0),R=0,v=O,E=pt}return}Ee=Ee||se,ge=ge||X,ut=ut||ee,(se!==p||Ee!==x)&&(e.blendEquationSeparate(pe[se],pe[Ee]),p=se,x=Ee),(X!==m||ee!==g||ge!==P||ut!==T)&&(e.blendFuncSeparate(C[X],C[ee],C[ge],C[ut]),m=X,g=ee,P=ge,T=ut),(Pt.equals(b)===!1||Yt!==R)&&(e.blendColor(Pt.r,Pt.g,Pt.b,Yt),b.copy(Pt),R=Yt),v=O,E=!1}function ue(O,se){O.side===bn?Ye(e.CULL_FACE):me(e.CULL_FACE);let X=O.side===Tr;se&&(X=!X),Ue(X),O.blending===Rs&&O.transparent===!1?Re(Zn):Re(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);let ee=O.stencilWrite;o.setTest(ee),ee&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Te(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):Ye(e.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(O){M!==O&&(O?e.frontFace(e.CW):e.frontFace(e.CCW),M=O)}function ae(O){O!==BM?(me(e.CULL_FACE),O!==N&&(O===__?e.cullFace(e.BACK):O===VM?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ye(e.CULL_FACE),N=O}function Ge(O){O!==k&&(j&&e.lineWidth(O),k=O)}function Te(O,se,X){O?(me(e.POLYGON_OFFSET_FILL),(H!==se||W!==X)&&(e.polygonOffset(se,X),H=se,W=X)):Ye(e.POLYGON_OFFSET_FILL)}function be(O){O?me(e.SCISSOR_TEST):Ye(e.SCISSOR_TEST)}function A(O){O===void 0&&(O=e.TEXTURE0+$-1),de!==O&&(e.activeTexture(O),de=O)}function w(O,se,X){X===void 0&&(de===null?X=e.TEXTURE0+$-1:X=de);let ee=Me[X];ee===void 0&&(ee={type:void 0,texture:void 0},Me[X]=ee),(ee.type!==O||ee.texture!==se)&&(de!==X&&(e.activeTexture(X),de=X),e.bindTexture(O,se||De[O]),ee.type=O,ee.texture=se)}function z(){let O=Me[de];O!==void 0&&O.type!==void 0&&(e.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function K(){try{e.compressedTexImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{e.compressedTexImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{e.texSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(){try{e.texSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Xe(){try{e.texStorage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{e.texStorage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{e.texImage2D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function it(){try{e.texImage3D.apply(e,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(O){J.equals(O)===!1&&(e.scissor(O.x,O.y,O.z,O.w),J.copy(O))}function Ne(O){ce.equals(O)===!1&&(e.viewport(O.x,O.y,O.z,O.w),ce.copy(O))}function Ze(O,se){let X=u.get(se);X===void 0&&(X=new WeakMap,u.set(se,X));let ee=X.get(O);ee===void 0&&(ee=e.getUniformBlockIndex(se,O.name),X.set(O,ee))}function et(O,se){let X=u.get(se).get(O);l.get(se)!==X&&(e.uniformBlockBinding(se,X,O.__bindingPointIndex),l.set(se,X))}function St(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),c={},de=null,Me={},h={},d=new WeakMap,f=[],y=null,_=!1,v=null,p=null,m=null,g=null,x=null,P=null,T=null,b=new je(0,0,0),R=0,E=!1,M=null,N=null,k=null,H=null,W=null,J.set(0,0,e.canvas.width,e.canvas.height),ce.set(0,0,e.canvas.width,e.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:me,disable:Ye,bindFramebuffer:nt,drawBuffers:Je,useProgram:Q,setBlending:Re,setMaterial:ue,setFlipSided:Ue,setCullFace:ae,setLineWidth:Ge,setPolygonOffset:Te,setScissorTest:be,activeTexture:A,bindTexture:w,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:Ce,texImage3D:it,updateUBOMapping:Ze,uniformBlockBinding:et,texStorage2D:Xe,texStorage3D:he,texSubImage2D:q,texSubImage3D:Be,compressedTexSubImage2D:xe,compressedTexSubImage3D:Se,scissor:qe,viewport:Ne,reset:St}}function my(e,t,r,n){let i=xA(n);switch(r){case Yy:return e*t;case Jy:return e*t;case Ky:return e*t*2;case Qf:return e*t/i.components*i.byteLength;case Zf:return e*t/i.components*i.byteLength;case Qy:return e*t*2/i.components*i.byteLength;case em:return e*t*2/i.components*i.byteLength;case qy:return e*t*3/i.components*i.byteLength;case gn:return e*t*4/i.components*i.byteLength;case tm:return e*t*4/i.components*i.byteLength;case Mc:case wc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case uf:case hf:return Math.max(e,16)*Math.max(t,8)/4;case lf:case cf:return Math.max(e,8)*Math.max(t,8)/2;case df:case pf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ff:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case mf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case vf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case _f:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case yf:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xf:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Sf:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Mf:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case wf:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ef:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Tf:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case bf:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Af:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Cf:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case bc:case Rf:case Pf:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Zy:case Nf:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Lf:case Df:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${r} format.`)}function xA(e){switch(e){case ii:case Xy:return{byteLength:1,components:1};case ul:case jy:case ei:return{byteLength:2,components:1};case Jf:case Kf:return{byteLength:2,components:4};case _a:case qf:case Rn:return{byteLength:4,components:1};case $y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function SA(e,t,r,n,i,a,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ne,c=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,w){return f?new OffscreenCanvas(A,w):Dc("canvas")}function _(A,w,z){let K=1,te=be(A);if((te.width>z||te.height>z)&&(K=z/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let q=Math.floor(K*te.width),Be=Math.floor(K*te.height);h===void 0&&(h=y(q,Be));let xe=w?y(q,Be):h;return xe.width=q,xe.height=Be,xe.getContext("2d").drawImage(A,0,0,q,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+Be+")."),xe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function v(A){return A.generateMipmaps}function p(A){e.generateMipmap(A)}function m(A){return A.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?e.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function g(A,w,z,K,te=!1){if(A!==null){if(e[A]!==void 0)return e[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let q=w;if(w===e.RED&&(z===e.FLOAT&&(q=e.R32F),z===e.HALF_FLOAT&&(q=e.R16F),z===e.UNSIGNED_BYTE&&(q=e.R8)),w===e.RED_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.R8UI),z===e.UNSIGNED_SHORT&&(q=e.R16UI),z===e.UNSIGNED_INT&&(q=e.R32UI),z===e.BYTE&&(q=e.R8I),z===e.SHORT&&(q=e.R16I),z===e.INT&&(q=e.R32I)),w===e.RG&&(z===e.FLOAT&&(q=e.RG32F),z===e.HALF_FLOAT&&(q=e.RG16F),z===e.UNSIGNED_BYTE&&(q=e.RG8)),w===e.RG_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RG8UI),z===e.UNSIGNED_SHORT&&(q=e.RG16UI),z===e.UNSIGNED_INT&&(q=e.RG32UI),z===e.BYTE&&(q=e.RG8I),z===e.SHORT&&(q=e.RG16I),z===e.INT&&(q=e.RG32I)),w===e.RGB_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RGB8UI),z===e.UNSIGNED_SHORT&&(q=e.RGB16UI),z===e.UNSIGNED_INT&&(q=e.RGB32UI),z===e.BYTE&&(q=e.RGB8I),z===e.SHORT&&(q=e.RGB16I),z===e.INT&&(q=e.RGB32I)),w===e.RGBA_INTEGER&&(z===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),z===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),z===e.UNSIGNED_INT&&(q=e.RGBA32UI),z===e.BYTE&&(q=e.RGBA8I),z===e.SHORT&&(q=e.RGBA16I),z===e.INT&&(q=e.RGBA32I)),w===e.RGB&&z===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),w===e.RGBA){let Be=te?kc:dt.getTransfer(K);z===e.FLOAT&&(q=e.RGBA32F),z===e.HALF_FLOAT&&(q=e.RGBA16F),z===e.UNSIGNED_BYTE&&(q=Be===gt?e.SRGB8_ALPHA8:e.RGBA8),z===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),z===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function x(A,w){let z;return A?w===null||w===_a||w===ks?z=e.DEPTH24_STENCIL8:w===Rn?z=e.DEPTH32F_STENCIL8:w===ul&&(z=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===_a||w===ks?z=e.DEPTH_COMPONENT24:w===Rn?z=e.DEPTH_COMPONENT32F:w===ul&&(z=e.DEPTH_COMPONENT16),z}function P(A,w){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==jr&&A.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function T(A){let w=A.target;w.removeEventListener("dispose",T),R(w),w.isVideoTexture&&c.delete(w)}function b(A){let w=A.target;w.removeEventListener("dispose",b),M(w)}function R(A){let w=n.get(A);if(w.__webglInit===void 0)return;let z=A.source,K=d.get(z);if(K){let te=K[w.__cacheKey];te.usedTimes--,te.usedTimes===0&&E(A),Object.keys(K).length===0&&d.delete(z)}n.remove(A)}function E(A){let w=n.get(A);e.deleteTexture(w.__webglTexture);let z=A.source,K=d.get(z);delete K[w.__cacheKey],s.memory.textures--}function M(A){let w=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(w.__webglFramebuffer[K]))for(let te=0;te<w.__webglFramebuffer[K].length;te++)e.deleteFramebuffer(w.__webglFramebuffer[K][te]);else e.deleteFramebuffer(w.__webglFramebuffer[K]);w.__webglDepthbuffer&&e.deleteRenderbuffer(w.__webglDepthbuffer[K])}else{if(Array.isArray(w.__webglFramebuffer))for(let K=0;K<w.__webglFramebuffer.length;K++)e.deleteFramebuffer(w.__webglFramebuffer[K]);else e.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&e.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&e.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let K=0;K<w.__webglColorRenderbuffer.length;K++)w.__webglColorRenderbuffer[K]&&e.deleteRenderbuffer(w.__webglColorRenderbuffer[K]);w.__webglDepthRenderbuffer&&e.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let z=A.textures;for(let K=0,te=z.length;K<te;K++){let q=n.get(z[K]);q.__webglTexture&&(e.deleteTexture(q.__webglTexture),s.memory.textures--),n.remove(z[K])}n.remove(A)}let N=0;function k(){N=0}function H(){let A=N;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),N+=1,A}function W(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function $(A,w){let z=n.get(A);if(A.isVideoTexture&&Ge(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){let K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(z,A,w);return}}r.bindTexture(e.TEXTURE_2D,z.__webglTexture,e.TEXTURE0+w)}function j(A,w){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ce(z,A,w);return}r.bindTexture(e.TEXTURE_2D_ARRAY,z.__webglTexture,e.TEXTURE0+w)}function ie(A,w){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ce(z,A,w);return}r.bindTexture(e.TEXTURE_3D,z.__webglTexture,e.TEXTURE0+w)}function Y(A,w){let z=n.get(A);if(A.version>0&&z.__version!==A.version){ke(z,A,w);return}r.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture,e.TEXTURE0+w)}let de={[Pc]:e.REPEAT,[ga]:e.CLAMP_TO_EDGE,[of]:e.MIRRORED_REPEAT},Me={[jr]:e.NEAREST,[uw]:e.NEAREST_MIPMAP_NEAREST,[Hu]:e.NEAREST_MIPMAP_LINEAR,[Cn]:e.LINEAR,[hp]:e.LINEAR_MIPMAP_NEAREST,[va]:e.LINEAR_MIPMAP_LINEAR},Ke={[pw]:e.NEVER,[yw]:e.ALWAYS,[fw]:e.LESS,[t1]:e.LEQUAL,[mw]:e.EQUAL,[_w]:e.GEQUAL,[gw]:e.GREATER,[vw]:e.NOTEQUAL};function tt(A,w){if(w.type===Rn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===Cn||w.magFilter===hp||w.magFilter===Hu||w.magFilter===va||w.minFilter===Cn||w.minFilter===hp||w.minFilter===Hu||w.minFilter===va)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(A,e.TEXTURE_WRAP_S,de[w.wrapS]),e.texParameteri(A,e.TEXTURE_WRAP_T,de[w.wrapT]),(A===e.TEXTURE_3D||A===e.TEXTURE_2D_ARRAY)&&e.texParameteri(A,e.TEXTURE_WRAP_R,de[w.wrapR]),e.texParameteri(A,e.TEXTURE_MAG_FILTER,Me[w.magFilter]),e.texParameteri(A,e.TEXTURE_MIN_FILTER,Me[w.minFilter]),w.compareFunction&&(e.texParameteri(A,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(A,e.TEXTURE_COMPARE_FUNC,Ke[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===jr||w.minFilter!==Hu&&w.minFilter!==va||w.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");e.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function J(A,w){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",T));let K=w.source,te=d.get(K);te===void 0&&(te={},d.set(K,te));let q=W(w);if(q!==A.__cacheKey){te[q]===void 0&&(te[q]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,z=!0),te[q].usedTimes++;let Be=te[A.__cacheKey];Be!==void 0&&(te[A.__cacheKey].usedTimes--,Be.usedTimes===0&&E(w)),A.__cacheKey=q,A.__webglTexture=te[q].texture}return z}function ce(A,w,z){let K=e.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(K=e.TEXTURE_2D_ARRAY),w.isData3DTexture&&(K=e.TEXTURE_3D);let te=J(A,w),q=w.source;r.bindTexture(K,A.__webglTexture,e.TEXTURE0+z);let Be=n.get(q);if(q.version!==Be.__version||te===!0){r.activeTexture(e.TEXTURE0+z);let xe=dt.getPrimaries(dt.workingColorSpace),Se=w.colorSpace===ki?null:dt.getPrimaries(w.colorSpace),Xe=w.colorSpace===ki||xe===Se?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let he=_(w.image,!1,i.maxTextureSize);he=Te(w,he);let Ce=a.convert(w.format,w.colorSpace),it=a.convert(w.type),qe=g(w.internalFormat,Ce,it,w.colorSpace,w.isVideoTexture);tt(K,w);let Ne,Ze=w.mipmaps,et=w.isVideoTexture!==!0,St=Be.__version===void 0||te===!0,O=q.dataReady,se=P(w,he);if(w.isDepthTexture)qe=x(w.format===zs,w.type),St&&(et?r.texStorage2D(e.TEXTURE_2D,1,qe,he.width,he.height):r.texImage2D(e.TEXTURE_2D,0,qe,he.width,he.height,0,Ce,it,null));else if(w.isDataTexture)if(Ze.length>0){et&&St&&r.texStorage2D(e.TEXTURE_2D,se,qe,Ze[0].width,Ze[0].height);for(let X=0,ee=Ze.length;X<ee;X++)Ne=Ze[X],et?O&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Ce,it,Ne.data):r.texImage2D(e.TEXTURE_2D,X,qe,Ne.width,Ne.height,0,Ce,it,Ne.data);w.generateMipmaps=!1}else et?(St&&r.texStorage2D(e.TEXTURE_2D,se,qe,he.width,he.height),O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,he.width,he.height,Ce,it,he.data)):r.texImage2D(e.TEXTURE_2D,0,qe,he.width,he.height,0,Ce,it,he.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&St&&r.texStorage3D(e.TEXTURE_2D_ARRAY,se,qe,Ze[0].width,Ze[0].height,he.depth);for(let X=0,ee=Ze.length;X<ee;X++)if(Ne=Ze[X],w.format!==gn)if(Ce!==null)if(et){if(O)if(w.layerUpdates.size>0){let Ee=my(Ne.width,Ne.height,w.format,w.type);for(let ge of w.layerUpdates){let ut=Ne.data.subarray(ge*Ee/Ne.data.BYTES_PER_ELEMENT,(ge+1)*Ee/Ne.data.BYTES_PER_ELEMENT);r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,ge,Ne.width,Ne.height,1,Ce,ut)}w.clearLayerUpdates()}else r.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Ne.width,Ne.height,he.depth,Ce,Ne.data)}else r.compressedTexImage3D(e.TEXTURE_2D_ARRAY,X,qe,Ne.width,Ne.height,he.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?O&&r.texSubImage3D(e.TEXTURE_2D_ARRAY,X,0,0,0,Ne.width,Ne.height,he.depth,Ce,it,Ne.data):r.texImage3D(e.TEXTURE_2D_ARRAY,X,qe,Ne.width,Ne.height,he.depth,0,Ce,it,Ne.data)}else{et&&St&&r.texStorage2D(e.TEXTURE_2D,se,qe,Ze[0].width,Ze[0].height);for(let X=0,ee=Ze.length;X<ee;X++)Ne=Ze[X],w.format!==gn?Ce!==null?et?O&&r.compressedTexSubImage2D(e.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Ce,Ne.data):r.compressedTexImage2D(e.TEXTURE_2D,X,qe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?O&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Ne.width,Ne.height,Ce,it,Ne.data):r.texImage2D(e.TEXTURE_2D,X,qe,Ne.width,Ne.height,0,Ce,it,Ne.data)}else if(w.isDataArrayTexture)if(et){if(St&&r.texStorage3D(e.TEXTURE_2D_ARRAY,se,qe,he.width,he.height,he.depth),O)if(w.layerUpdates.size>0){let X=my(he.width,he.height,w.format,w.type);for(let ee of w.layerUpdates){let Ee=he.data.subarray(ee*X/he.data.BYTES_PER_ELEMENT,(ee+1)*X/he.data.BYTES_PER_ELEMENT);r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,ee,he.width,he.height,1,Ce,it,Ee)}w.clearLayerUpdates()}else r.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Ce,it,he.data)}else r.texImage3D(e.TEXTURE_2D_ARRAY,0,qe,he.width,he.height,he.depth,0,Ce,it,he.data);else if(w.isData3DTexture)et?(St&&r.texStorage3D(e.TEXTURE_3D,se,qe,he.width,he.height,he.depth),O&&r.texSubImage3D(e.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Ce,it,he.data)):r.texImage3D(e.TEXTURE_3D,0,qe,he.width,he.height,he.depth,0,Ce,it,he.data);else if(w.isFramebufferTexture){if(St)if(et)r.texStorage2D(e.TEXTURE_2D,se,qe,he.width,he.height);else{let X=he.width,ee=he.height;for(let Ee=0;Ee<se;Ee++)r.texImage2D(e.TEXTURE_2D,Ee,qe,X,ee,0,Ce,it,null),X>>=1,ee>>=1}}else if(Ze.length>0){if(et&&St){let X=be(Ze[0]);r.texStorage2D(e.TEXTURE_2D,se,qe,X.width,X.height)}for(let X=0,ee=Ze.length;X<ee;X++)Ne=Ze[X],et?O&&r.texSubImage2D(e.TEXTURE_2D,X,0,0,Ce,it,Ne):r.texImage2D(e.TEXTURE_2D,X,qe,Ce,it,Ne);w.generateMipmaps=!1}else if(et){if(St){let X=be(he);r.texStorage2D(e.TEXTURE_2D,se,qe,X.width,X.height)}O&&r.texSubImage2D(e.TEXTURE_2D,0,0,0,Ce,it,he)}else r.texImage2D(e.TEXTURE_2D,0,qe,Ce,it,he);v(w)&&p(K),Be.__version=q.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ke(A,w,z){if(w.image.length!==6)return;let K=J(A,w),te=w.source;r.bindTexture(e.TEXTURE_CUBE_MAP,A.__webglTexture,e.TEXTURE0+z);let q=n.get(te);if(te.version!==q.__version||K===!0){r.activeTexture(e.TEXTURE0+z);let Be=dt.getPrimaries(dt.workingColorSpace),xe=w.colorSpace===ki?null:dt.getPrimaries(w.colorSpace),Se=w.colorSpace===ki||Be===xe?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,w.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,w.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Xe=w.isCompressedTexture||w.image[0].isCompressedTexture,he=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let ee=0;ee<6;ee++)!Xe&&!he?Ce[ee]=_(w.image[ee],!0,i.maxCubemapSize):Ce[ee]=he?w.image[ee].image:w.image[ee],Ce[ee]=Te(w,Ce[ee]);let it=Ce[0],qe=a.convert(w.format,w.colorSpace),Ne=a.convert(w.type),Ze=g(w.internalFormat,qe,Ne,w.colorSpace),et=w.isVideoTexture!==!0,St=q.__version===void 0||K===!0,O=te.dataReady,se=P(w,it);tt(e.TEXTURE_CUBE_MAP,w);let X;if(Xe){et&&St&&r.texStorage2D(e.TEXTURE_CUBE_MAP,se,Ze,it.width,it.height);for(let ee=0;ee<6;ee++){X=Ce[ee].mipmaps;for(let Ee=0;Ee<X.length;Ee++){let ge=X[Ee];w.format!==gn?qe!==null?et?O&&r.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ge.width,ge.height,qe,ge.data):r.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Ze,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,0,0,ge.width,ge.height,qe,Ne,ge.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee,Ze,ge.width,ge.height,0,qe,Ne,ge.data)}}}else{if(X=w.mipmaps,et&&St){X.length>0&&se++;let ee=be(Ce[0]);r.texStorage2D(e.TEXTURE_CUBE_MAP,se,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(he){et?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ce[ee].width,Ce[ee].height,qe,Ne,Ce[ee].data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Ce[ee].width,Ce[ee].height,0,qe,Ne,Ce[ee].data);for(let Ee=0;Ee<X.length;Ee++){let ge=X[Ee].image[ee].image;et?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,ge.width,ge.height,qe,Ne,ge.data):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Ze,ge.width,ge.height,0,qe,Ne,ge.data)}}else{et?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,qe,Ne,Ce[ee]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,qe,Ne,Ce[ee]);for(let Ee=0;Ee<X.length;Ee++){let ge=X[Ee];et?O&&r.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,0,0,qe,Ne,ge.image[ee]):r.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ee+1,Ze,qe,Ne,ge.image[ee])}}}v(w)&&p(e.TEXTURE_CUBE_MAP),q.__version=te.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function De(A,w,z,K,te,q){let Be=a.convert(z.format,z.colorSpace),xe=a.convert(z.type),Se=g(z.internalFormat,Be,xe,z.colorSpace),Xe=n.get(w),he=n.get(z);if(he.__renderTarget=w,!Xe.__hasExternalTextures){let Ce=Math.max(1,w.width>>q),it=Math.max(1,w.height>>q);te===e.TEXTURE_3D||te===e.TEXTURE_2D_ARRAY?r.texImage3D(te,q,Se,Ce,it,w.depth,0,Be,xe,null):r.texImage2D(te,q,Se,Ce,it,0,Be,xe,null)}r.bindFramebuffer(e.FRAMEBUFFER,A),ae(w)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,K,te,he.__webglTexture,0,Ue(w)):(te===e.TEXTURE_2D||te>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,K,te,he.__webglTexture,q),r.bindFramebuffer(e.FRAMEBUFFER,null)}function me(A,w,z){if(e.bindRenderbuffer(e.RENDERBUFFER,A),w.depthBuffer){let K=w.depthTexture,te=K&&K.isDepthTexture?K.type:null,q=x(w.stencilBuffer,te),Be=w.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,xe=Ue(w);ae(w)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,xe,q,w.width,w.height):z?e.renderbufferStorageMultisample(e.RENDERBUFFER,xe,q,w.width,w.height):e.renderbufferStorage(e.RENDERBUFFER,q,w.width,w.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Be,e.RENDERBUFFER,A)}else{let K=w.textures;for(let te=0;te<K.length;te++){let q=K[te],Be=a.convert(q.format,q.colorSpace),xe=a.convert(q.type),Se=g(q.internalFormat,Be,xe,q.colorSpace),Xe=Ue(w);z&&ae(w)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,Xe,Se,w.width,w.height):ae(w)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Xe,Se,w.width,w.height):e.renderbufferStorage(e.RENDERBUFFER,Se,w.width,w.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ye(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(r.bindFramebuffer(e.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(w.depthTexture);z.__renderTarget=w,(!z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),$(w.depthTexture,0);let K=z.__webglTexture,te=Ue(w);if(w.depthTexture.format===Ns)ae(w)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,K,0);else if(w.depthTexture.format===zs)ae(w)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0,te):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function nt(A){let w=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let K=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),K){let te=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),w.__depthDisposeCallback=te}w.__boundDepthTexture=K}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ye(w.__webglFramebuffer,A)}else if(z){w.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(r.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer[K]),w.__webglDepthbuffer[K]===void 0)w.__webglDepthbuffer[K]=e.createRenderbuffer(),me(w.__webglDepthbuffer[K],A,!1);else{let te=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,q=w.__webglDepthbuffer[K];e.bindRenderbuffer(e.RENDERBUFFER,q),e.framebufferRenderbuffer(e.FRAMEBUFFER,te,e.RENDERBUFFER,q)}}else if(r.bindFramebuffer(e.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=e.createRenderbuffer(),me(w.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,te=w.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,te),e.framebufferRenderbuffer(e.FRAMEBUFFER,K,e.RENDERBUFFER,te)}r.bindFramebuffer(e.FRAMEBUFFER,null)}function Je(A,w,z){let K=n.get(A);w!==void 0&&De(K.__webglFramebuffer,A,A.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),z!==void 0&&nt(A)}function Q(A){let w=A.texture,z=n.get(A),K=n.get(w);A.addEventListener("dispose",b);let te=A.textures,q=A.isWebGLCubeRenderTarget===!0,Be=te.length>1;if(Be||(K.__webglTexture===void 0&&(K.__webglTexture=e.createTexture()),K.__version=w.version,s.memory.textures++),q){z.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[xe]=[];for(let Se=0;Se<w.mipmaps.length;Se++)z.__webglFramebuffer[xe][Se]=e.createFramebuffer()}else z.__webglFramebuffer[xe]=e.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)z.__webglFramebuffer[xe]=e.createFramebuffer()}else z.__webglFramebuffer=e.createFramebuffer();if(Be)for(let xe=0,Se=te.length;xe<Se;xe++){let Xe=n.get(te[xe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=e.createTexture(),s.memory.textures++)}if(A.samples>0&&ae(A)===!1){z.__webglMultisampledFramebuffer=e.createFramebuffer(),z.__webglColorRenderbuffer=[],r.bindFramebuffer(e.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let xe=0;xe<te.length;xe++){let Se=te[xe];z.__webglColorRenderbuffer[xe]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,z.__webglColorRenderbuffer[xe]);let Xe=a.convert(Se.format,Se.colorSpace),he=a.convert(Se.type),Ce=g(Se.internalFormat,Xe,he,Se.colorSpace,A.isXRRenderTarget===!0),it=Ue(A);e.renderbufferStorageMultisample(e.RENDERBUFFER,it,Ce,A.width,A.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xe,e.RENDERBUFFER,z.__webglColorRenderbuffer[xe])}e.bindRenderbuffer(e.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=e.createRenderbuffer(),me(z.__webglDepthRenderbuffer,A,!0)),r.bindFramebuffer(e.FRAMEBUFFER,null)}}if(q){r.bindTexture(e.TEXTURE_CUBE_MAP,K.__webglTexture),tt(e.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)De(z.__webglFramebuffer[xe][Se],A,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else De(z.__webglFramebuffer[xe],A,w,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(w)&&p(e.TEXTURE_CUBE_MAP),r.unbindTexture()}else if(Be){for(let xe=0,Se=te.length;xe<Se;xe++){let Xe=te[xe],he=n.get(Xe);r.bindTexture(e.TEXTURE_2D,he.__webglTexture),tt(e.TEXTURE_2D,Xe),De(z.__webglFramebuffer,A,Xe,e.COLOR_ATTACHMENT0+xe,e.TEXTURE_2D,0),v(Xe)&&p(e.TEXTURE_2D)}r.unbindTexture()}else{let xe=e.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(xe=A.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),r.bindTexture(xe,K.__webglTexture),tt(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Se=0;Se<w.mipmaps.length;Se++)De(z.__webglFramebuffer[Se],A,w,e.COLOR_ATTACHMENT0,xe,Se);else De(z.__webglFramebuffer,A,w,e.COLOR_ATTACHMENT0,xe,0);v(w)&&p(xe),r.unbindTexture()}A.depthBuffer&&nt(A)}function pe(A){let w=A.textures;for(let z=0,K=w.length;z<K;z++){let te=w[z];if(v(te)){let q=m(A),Be=n.get(te).__webglTexture;r.bindTexture(q,Be),p(q),r.unbindTexture()}}}let C=[],Re=[];function ue(A){if(A.samples>0){if(ae(A)===!1){let w=A.textures,z=A.width,K=A.height,te=e.COLOR_BUFFER_BIT,q=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Be=n.get(A),xe=w.length>1;if(xe)for(let Se=0;Se<w.length;Se++)r.bindFramebuffer(e.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,null),r.bindFramebuffer(e.FRAMEBUFFER,Be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,null,0);r.bindFramebuffer(e.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Se=0;Se<w.length;Se++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=e.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=e.STENCIL_BUFFER_BIT)),xe){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Be.__webglColorRenderbuffer[Se]);let Xe=n.get(w[Se]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Xe,0)}e.blitFramebuffer(0,0,z,K,0,0,z,K,te,e.NEAREST),l===!0&&(C.length=0,Re.length=0,C.push(e.COLOR_ATTACHMENT0+Se),A.depthBuffer&&A.resolveDepthBuffer===!1&&(C.push(q),Re.push(q),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Re)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,C))}if(r.bindFramebuffer(e.READ_FRAMEBUFFER,null),r.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),xe)for(let Se=0;Se<w.length;Se++){r.bindFramebuffer(e.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.RENDERBUFFER,Be.__webglColorRenderbuffer[Se]);let Xe=n.get(w[Se]).__webglTexture;r.bindFramebuffer(e.FRAMEBUFFER,Be.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Se,e.TEXTURE_2D,Xe,0)}r.bindFramebuffer(e.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let w=A.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[w])}}}function Ue(A){return Math.min(i.maxSamples,A.samples)}function ae(A){let w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ge(A){let w=s.render.frame;c.get(A)!==w&&(c.set(A,w),A.update())}function Te(A,w){let z=A.colorSpace,K=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Bs&&z!==ki&&(dt.getTransfer(z)===gt?(K!==gn||te!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=j,this.setTexture3D=ie,this.setTextureCube=Y,this.rebindTextures=Je,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ae}function MA(e,t){function r(n,i=ki){let a,s=dt.getTransfer(i);if(n===ii)return e.UNSIGNED_BYTE;if(n===Jf)return e.UNSIGNED_SHORT_4_4_4_4;if(n===Kf)return e.UNSIGNED_SHORT_5_5_5_1;if(n===$y)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===Xy)return e.BYTE;if(n===jy)return e.SHORT;if(n===ul)return e.UNSIGNED_SHORT;if(n===qf)return e.INT;if(n===_a)return e.UNSIGNED_INT;if(n===Rn)return e.FLOAT;if(n===ei)return e.HALF_FLOAT;if(n===Yy)return e.ALPHA;if(n===qy)return e.RGB;if(n===gn)return e.RGBA;if(n===Jy)return e.LUMINANCE;if(n===Ky)return e.LUMINANCE_ALPHA;if(n===Ns)return e.DEPTH_COMPONENT;if(n===zs)return e.DEPTH_STENCIL;if(n===Qf)return e.RED;if(n===Zf)return e.RED_INTEGER;if(n===Qy)return e.RG;if(n===em)return e.RG_INTEGER;if(n===tm)return e.RGBA_INTEGER;if(n===Mc||n===wc||n===Ec||n===Tc)if(s===gt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Mc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ec)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Mc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ec)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lf||n===uf||n===cf||n===hf)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===lf)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===uf)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cf)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hf)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===df||n===pf||n===ff)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===df||n===pf)return s===gt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===ff)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mf||n===gf||n===vf||n===_f||n===yf||n===xf||n===Sf||n===Mf||n===wf||n===Ef||n===Tf||n===bf||n===Af||n===Cf)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===mf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===gf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_f)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Mf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ef)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Af)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cf)return s===gt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bc||n===Rf||n===Pf)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===bc)return s===gt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rf)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pf)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zy||n===Nf||n===Lf||n===Df)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===bc)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Nf)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Lf)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Df)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?e.UNSIGNED_INT_24_8:e[n]!==void 0?e[n]:null}return{convert:r}}var wA=class extends Xr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},As=class extends er{constructor(){super(),this.isGroup=!0,this.type="Group"}},EA={type:"move"},Vp=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new As,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new As,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new As,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let _=t.getJointPose(y,r),v=this._getHandJoint(l,y);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}let u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],h=u.position.distanceTo(c.position),d=.02,f=.005;l.inputState.pinching&&h>d+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1));s!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(s.matrix.fromArray(n.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,n.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(n.linearVelocity)):s.hasLinearVelocity=!1,n.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(n.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(EA)))}return s!==null&&(s.visible=n!==null),o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new As;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bA=`
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

}`,AA=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){let n=new tn,i=e.properties.get(n);i.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new sr({vertexShader:TA,fragmentShader:bA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Oi(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},CA=class extends Vs{constructor(e,t){super();let r=this,n=null,i=1,a=null,s="local-floor",o=1,l=null,u=null,c=null,h=null,d=null,f=null,y=new AA,_=t.getContextAttributes(),v=null,p=null,m=[],g=[],x=new ne,P=null,T=new Xr;T.viewport=new Tt;let b=new Xr;b.viewport=new Tt;let R=[T,b],E=new wA,M=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ce=m[J];return ce===void 0&&(ce=new Vp,m[J]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(J){let ce=m[J];return ce===void 0&&(ce=new Vp,m[J]=ce),ce.getGripSpace()},this.getHand=function(J){let ce=m[J];return ce===void 0&&(ce=new Vp,m[J]=ce),ce.getHandSpace()};function k(J){let ce=g.indexOf(J.inputSource);if(ce===-1)return;let ke=m[ce];ke!==void 0&&(ke.update(J.inputSource,J.frame,l||a),ke.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){n.removeEventListener("select",k),n.removeEventListener("selectstart",k),n.removeEventListener("selectend",k),n.removeEventListener("squeeze",k),n.removeEventListener("squeezestart",k),n.removeEventListener("squeezeend",k),n.removeEventListener("end",H),n.removeEventListener("inputsourceschange",W);for(let J=0;J<m.length;J++){let ce=g[J];ce!==null&&(g[J]=null,m[J].disconnect(ce))}M=null,N=null,y.reset(),e.setRenderTarget(v),d=null,h=null,c=null,n=null,p=null,tt.stop(),r.isPresenting=!1,e.setPixelRatio(P),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){i=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){s=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return c},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(v=e.getRenderTarget(),n.addEventListener("select",k),n.addEventListener("selectstart",k),n.addEventListener("selectend",k),n.addEventListener("squeeze",k),n.addEventListener("squeezestart",k),n.addEventListener("squeezeend",k),n.addEventListener("end",H),n.addEventListener("inputsourceschange",W),_.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(x),n.renderState.layers===void 0){let ce={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};d=new XRWebGLLayer(n,t,ce),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new vn(d.framebufferWidth,d.framebufferHeight,{format:gn,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ce=null,ke=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=_.stencil?zs:Ns,ke=_.stencil?ks:_a);let me={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:i};c=new XRWebGLBinding(n,t),h=c.createProjectionLayer(me),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),p=new vn(h.textureWidth,h.textureHeight,{format:gn,type:ii,depthTexture:new M1(h.textureWidth,h.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(o),l=null,a=await n.requestReferenceSpace(s),tt.setContext(n),tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(J){for(let ce=0;ce<J.removed.length;ce++){let ke=J.removed[ce],De=g.indexOf(ke);De>=0&&(g[De]=null,m[De].disconnect(ke))}for(let ce=0;ce<J.added.length;ce++){let ke=J.added[ce],De=g.indexOf(ke);if(De===-1){for(let Ye=0;Ye<m.length;Ye++)if(Ye>=g.length){g.push(ke),De=Ye;break}else if(g[Ye]===null){g[Ye]=ke,De=Ye;break}if(De===-1)break}let me=m[De];me&&me.connect(ke)}}let $=new L,j=new L;function ie(J,ce,ke){$.setFromMatrixPosition(ce.matrixWorld),j.setFromMatrixPosition(ke.matrixWorld);let De=$.distanceTo(j),me=ce.projectionMatrix.elements,Ye=ke.projectionMatrix.elements,nt=me[14]/(me[10]-1),Je=me[14]/(me[10]+1),Q=(me[9]+1)/me[5],pe=(me[9]-1)/me[5],C=(me[8]-1)/me[0],Re=(Ye[8]+1)/Ye[0],ue=nt*C,Ue=nt*Re,ae=De/(-C+Re),Ge=ae*-C;if(ce.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ge),J.translateZ(ae),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),me[10]===-1)J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{let Te=nt+ae,be=Je+ae,A=ue-Ge,w=Ue+(De-Ge),z=Q*Je/be*Te,K=pe*Je/be*Te;J.projectionMatrix.makePerspective(A,w,z,K,Te,be),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Y(J,ce){ce===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ce.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ce=J.near,ke=J.far;y.texture!==null&&(y.depthNear>0&&(ce=y.depthNear),y.depthFar>0&&(ke=y.depthFar)),E.near=b.near=T.near=ce,E.far=b.far=T.far=ke,(M!==E.near||N!==E.far)&&(n.updateRenderState({depthNear:E.near,depthFar:E.far}),M=E.near,N=E.far),T.layers.mask=J.layers.mask|2,b.layers.mask=J.layers.mask|4,E.layers.mask=T.layers.mask|b.layers.mask;let De=J.parent,me=E.cameras;Y(E,De);for(let Ye=0;Ye<me.length;Ye++)Y(me[Ye],De);me.length===2?ie(E,T,b):E.projectionMatrix.copy(T.projectionMatrix),de(J,E,De)};function de(J,ce,ke){ke===null?J.matrix.copy(ce.matrixWorld):(J.matrix.copy(ke.matrixWorld),J.matrix.invert(),J.matrix.multiply(ce.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ce.projectionMatrix),J.projectionMatrixInverse.copy(ce.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Of*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return o},this.setFoveation=function(J){o=J,h!==null&&(h.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(E)};let Me=null;function Ke(J,ce){if(u=ce.getViewerPose(l||a),f=ce,u!==null){let ke=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let De=!1;ke.length!==E.cameras.length&&(E.cameras.length=0,De=!0);for(let Ye=0;Ye<ke.length;Ye++){let nt=ke[Ye],Je=null;if(d!==null)Je=d.getViewport(nt);else{let pe=c.getViewSubImage(h,nt);Je=pe.viewport,Ye===0&&(e.setRenderTargetTextures(p,pe.colorTexture,h.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(p))}let Q=R[Ye];Q===void 0&&(Q=new Xr,Q.layers.enable(Ye),Q.viewport=new Tt,R[Ye]=Q),Q.matrix.fromArray(nt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(nt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Je.x,Je.y,Je.width,Je.height),Ye===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),De===!0&&E.cameras.push(Q)}let me=n.enabledFeatures;if(me&&me.includes("depth-sensing")){let Ye=c.getDepthInformation(ke[0]);Ye&&Ye.isValid&&Ye.texture&&y.init(e,Ye,n.renderState)}}for(let ke=0;ke<m.length;ke++){let De=g[ke],me=m[ke];De!==null&&me!==void 0&&me.update(De,ce,l||a)}Me&&Me(J,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),f=null}let tt=new x1;tt.setAnimationLoop(Ke),this.setAnimationLoop=function(J){Me=J},this.dispose=function(){}}},ca=new Bi,RA=new bt;function PA(e,t){function r(v,p){v.matrixAutoUpdate===!0&&v.updateMatrix(),p.value.copy(v.matrix)}function n(v,p){p.color.getRGB(v.fogColor.value,v1(e)),p.isFog?(v.fogNear.value=p.near,v.fogFar.value=p.far):p.isFogExp2&&(v.fogDensity.value=p.density)}function i(v,p,m,g,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?a(v,p):p.isMeshToonMaterial?(a(v,p),h(v,p)):p.isMeshPhongMaterial?(a(v,p),c(v,p)):p.isMeshStandardMaterial?(a(v,p),d(v,p),p.isMeshPhysicalMaterial&&f(v,p,x)):p.isMeshMatcapMaterial?(a(v,p),y(v,p)):p.isMeshDepthMaterial?a(v,p):p.isMeshDistanceMaterial?(a(v,p),_(v,p)):p.isMeshNormalMaterial?a(v,p):p.isLineBasicMaterial?(s(v,p),p.isLineDashedMaterial&&o(v,p)):p.isPointsMaterial?l(v,p,m,g):p.isSpriteMaterial?u(v,p):p.isShadowMaterial?(v.color.value.copy(p.color),v.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(v,p){v.opacity.value=p.opacity,p.color&&v.diffuse.value.copy(p.color),p.emissive&&v.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(v.map.value=p.map,r(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,r(p.alphaMap,v.alphaMapTransform)),p.bumpMap&&(v.bumpMap.value=p.bumpMap,r(p.bumpMap,v.bumpMapTransform),v.bumpScale.value=p.bumpScale,p.side===Tr&&(v.bumpScale.value*=-1)),p.normalMap&&(v.normalMap.value=p.normalMap,r(p.normalMap,v.normalMapTransform),v.normalScale.value.copy(p.normalScale),p.side===Tr&&v.normalScale.value.negate()),p.displacementMap&&(v.displacementMap.value=p.displacementMap,r(p.displacementMap,v.displacementMapTransform),v.displacementScale.value=p.displacementScale,v.displacementBias.value=p.displacementBias),p.emissiveMap&&(v.emissiveMap.value=p.emissiveMap,r(p.emissiveMap,v.emissiveMapTransform)),p.specularMap&&(v.specularMap.value=p.specularMap,r(p.specularMap,v.specularMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest);let m=t.get(p),g=m.envMap,x=m.envMapRotation;g&&(v.envMap.value=g,ca.copy(x),ca.x*=-1,ca.y*=-1,ca.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ca.y*=-1,ca.z*=-1),v.envMapRotation.value.setFromMatrix4(RA.makeRotationFromEuler(ca)),v.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=p.reflectivity,v.ior.value=p.ior,v.refractionRatio.value=p.refractionRatio),p.lightMap&&(v.lightMap.value=p.lightMap,v.lightMapIntensity.value=p.lightMapIntensity,r(p.lightMap,v.lightMapTransform)),p.aoMap&&(v.aoMap.value=p.aoMap,v.aoMapIntensity.value=p.aoMapIntensity,r(p.aoMap,v.aoMapTransform))}function s(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,p.map&&(v.map.value=p.map,r(p.map,v.mapTransform))}function o(v,p){v.dashSize.value=p.dashSize,v.totalSize.value=p.dashSize+p.gapSize,v.scale.value=p.scale}function l(v,p,m,g){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.size.value=p.size*m,v.scale.value=g*.5,p.map&&(v.map.value=p.map,r(p.map,v.uvTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,r(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function u(v,p){v.diffuse.value.copy(p.color),v.opacity.value=p.opacity,v.rotation.value=p.rotation,p.map&&(v.map.value=p.map,r(p.map,v.mapTransform)),p.alphaMap&&(v.alphaMap.value=p.alphaMap,r(p.alphaMap,v.alphaMapTransform)),p.alphaTest>0&&(v.alphaTest.value=p.alphaTest)}function c(v,p){v.specular.value.copy(p.specular),v.shininess.value=Math.max(p.shininess,1e-4)}function h(v,p){p.gradientMap&&(v.gradientMap.value=p.gradientMap)}function d(v,p){v.metalness.value=p.metalness,p.metalnessMap&&(v.metalnessMap.value=p.metalnessMap,r(p.metalnessMap,v.metalnessMapTransform)),v.roughness.value=p.roughness,p.roughnessMap&&(v.roughnessMap.value=p.roughnessMap,r(p.roughnessMap,v.roughnessMapTransform)),p.envMap&&(v.envMapIntensity.value=p.envMapIntensity)}function f(v,p,m){v.ior.value=p.ior,p.sheen>0&&(v.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),v.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(v.sheenColorMap.value=p.sheenColorMap,r(p.sheenColorMap,v.sheenColorMapTransform)),p.sheenRoughnessMap&&(v.sheenRoughnessMap.value=p.sheenRoughnessMap,r(p.sheenRoughnessMap,v.sheenRoughnessMapTransform))),p.clearcoat>0&&(v.clearcoat.value=p.clearcoat,v.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(v.clearcoatMap.value=p.clearcoatMap,r(p.clearcoatMap,v.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,r(p.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(v.clearcoatNormalMap.value=p.clearcoatNormalMap,r(p.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Tr&&v.clearcoatNormalScale.value.negate())),p.dispersion>0&&(v.dispersion.value=p.dispersion),p.iridescence>0&&(v.iridescence.value=p.iridescence,v.iridescenceIOR.value=p.iridescenceIOR,v.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(v.iridescenceMap.value=p.iridescenceMap,r(p.iridescenceMap,v.iridescenceMapTransform)),p.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=p.iridescenceThicknessMap,r(p.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),p.transmission>0&&(v.transmission.value=p.transmission,v.transmissionSamplerMap.value=m.texture,v.transmissionSamplerSize.value.set(m.width,m.height),p.transmissionMap&&(v.transmissionMap.value=p.transmissionMap,r(p.transmissionMap,v.transmissionMapTransform)),v.thickness.value=p.thickness,p.thicknessMap&&(v.thicknessMap.value=p.thicknessMap,r(p.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=p.attenuationDistance,v.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(v.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(v.anisotropyMap.value=p.anisotropyMap,r(p.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=p.specularIntensity,v.specularColor.value.copy(p.specularColor),p.specularColorMap&&(v.specularColorMap.value=p.specularColorMap,r(p.specularColorMap,v.specularColorMapTransform)),p.specularIntensityMap&&(v.specularIntensityMap.value=p.specularIntensityMap,r(p.specularIntensityMap,v.specularIntensityMapTransform))}function y(v,p){p.matcap&&(v.matcap.value=p.matcap)}function _(v,p){let m=t.get(p).light;v.referencePosition.value.setFromMatrixPosition(m.matrixWorld),v.nearDistance.value=m.shadow.camera.near,v.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function NA(e,t,r,n){let i={},a={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,g){let x=g.program;n.uniformBlockBinding(m,x)}function u(m,g){let x=i[m.id];x===void 0&&(y(m),x=c(m),i[m.id]=x,m.addEventListener("dispose",v));let P=g.program;n.updateUBOMapping(m,P);let T=t.render.frame;a[m.id]!==T&&(d(m),a[m.id]=T)}function c(m){let g=h();m.__bindingPointIndex=g;let x=e.createBuffer(),P=m.__size,T=m.usage;return e.bindBuffer(e.UNIFORM_BUFFER,x),e.bufferData(e.UNIFORM_BUFFER,P,T),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,g,x),x}function h(){for(let m=0;m<o;m++)if(s.indexOf(m)===-1)return s.push(m),m;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(m){let g=i[m.id],x=m.uniforms,P=m.__cache;e.bindBuffer(e.UNIFORM_BUFFER,g);for(let T=0,b=x.length;T<b;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,M=R.length;E<M;E++){let N=R[E];if(f(N,T,E,P)===!0){let k=N.__offset,H=Array.isArray(N.value)?N.value:[N.value],W=0;for(let $=0;$<H.length;$++){let j=H[$],ie=_(j);typeof j=="number"||typeof j=="boolean"?(N.__data[0]=j,e.bufferSubData(e.UNIFORM_BUFFER,k+W,N.__data)):j.isMatrix3?(N.__data[0]=j.elements[0],N.__data[1]=j.elements[1],N.__data[2]=j.elements[2],N.__data[3]=0,N.__data[4]=j.elements[3],N.__data[5]=j.elements[4],N.__data[6]=j.elements[5],N.__data[7]=0,N.__data[8]=j.elements[6],N.__data[9]=j.elements[7],N.__data[10]=j.elements[8],N.__data[11]=0):(j.toArray(N.__data,W),W+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,k,N.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function f(m,g,x,P){let T=m.value,b=g+"_"+x;if(P[b]===void 0)return typeof T=="number"||typeof T=="boolean"?P[b]=T:P[b]=T.clone(),!0;{let R=P[b];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[b]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function y(m){let g=m.uniforms,x=0,P=16;for(let b=0,R=g.length;b<R;b++){let E=Array.isArray(g[b])?g[b]:[g[b]];for(let M=0,N=E.length;M<N;M++){let k=E[M],H=Array.isArray(k.value)?k.value:[k.value];for(let W=0,$=H.length;W<$;W++){let j=H[W],ie=_(j),Y=x%P,de=Y%ie.boundary,Me=Y+de;x+=de,Me!==0&&P-Me<ie.storage&&(x+=P-Me),k.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=x,x+=ie.storage}}}let T=x%P;return T>0&&(x+=P-T),m.__size=x,m.__cache={},this}function _(m){let g={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(g.boundary=4,g.storage=4):m.isVector2?(g.boundary=8,g.storage=8):m.isVector3||m.isColor?(g.boundary=16,g.storage=12):m.isVector4?(g.boundary=16,g.storage=16):m.isMatrix3?(g.boundary=48,g.storage=48):m.isMatrix4?(g.boundary=64,g.storage=64):m.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",m),g}function v(m){let g=m.target;g.removeEventListener("dispose",v);let x=s.indexOf(g.__bindingPointIndex);s.splice(x,1),e.deleteBuffer(i[g.id]),delete i[g.id],delete a[g.id]}function p(){for(let m in i)e.deleteBuffer(i[m]);s=[],i={},a={}}return{bind:l,update:u,dispose:p}}var LA=class{constructor(e={}){let{canvas:t=Sw(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=r.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),y=new Int32Array(4),_=null,v=null,p=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wr,this.toneMapping=zi,this.toneMappingExposure=1;let g=this,x=!1,P=0,T=0,b=null,R=-1,E=null,M=new Tt,N=new Tt,k=null,H=new je(0),W=0,$=t.width,j=t.height,ie=1,Y=null,de=null,Me=new Tt(0,0,$,j),Ke=new Tt(0,0,$,j),tt=!1,J=new rm,ce=!1,ke=!1,De=new bt,me=new bt,Ye=new L,nt=new Tt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Q=!1;function pe(){return b===null?ie:1}let C=r;function Re(S,D){return t.getContext(S,D)}try{let S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),C===null){let D="webgl2";if(C=Re(D,S),C===null)throw Re(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ue,Ue,ae,Ge,Te,be,A,w,z,K,te,q,Be,xe,Se,Xe,he,Ce,it,qe,Ne,Ze,et,St;function O(){ue=new kT(C),ue.init(),Ze=new MA(C,ue),Ue=new NT(C,ue,e,Ze),ae=new yA(C,ue),Ue.reverseDepthBuffer&&h&&ae.buffers.depth.setReversed(!0),Ge=new BT(C),Te=new iA,be=new SA(C,ue,ae,Te,Ue,Ze,Ge),A=new DT(g),w=new OT(g),z=new $w(C),et=new RT(C,z),K=new zT(C,z,Ge,et),te=new HT(C,K,z,Ge),it=new VT(C,Ue,be),Xe=new LT(Te),q=new nA(g,A,w,ue,Ue,et,Xe),Be=new PA(g,Te),xe=new sA,Se=new dA(ue),Ce=new CT(g,A,w,ae,te,d,o),he=new vA(g,te,Ue),St=new NA(C,Ge,Ue,ae),qe=new PT(C,ue,Ge),Ne=new FT(C,ue,Ge),Ge.programs=q.programs,g.capabilities=Ue,g.extensions=ue,g.properties=Te,g.renderLists=xe,g.shadowMap=he,g.state=ae,g.info=Ge}O();let se=new CA(g,C);this.xr=se,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let S=ue.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ue.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(S){S!==void 0&&(ie=S,this.setSize($,j,!1))},this.getSize=function(S){return S.set($,j)},this.setSize=function(S,D,V=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,j=D,t.width=Math.floor(S*ie),t.height=Math.floor(D*ie),V===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set($*ie,j*ie).floor()},this.setDrawingBufferSize=function(S,D,V){$=S,j=D,ie=V,t.width=Math.floor(S*V),t.height=Math.floor(D*V),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(M)},this.getViewport=function(S){return S.copy(Me)},this.setViewport=function(S,D,V,B){S.isVector4?Me.set(S.x,S.y,S.z,S.w):Me.set(S,D,V,B),ae.viewport(M.copy(Me).multiplyScalar(ie).round())},this.getScissor=function(S){return S.copy(Ke)},this.setScissor=function(S,D,V,B){S.isVector4?Ke.set(S.x,S.y,S.z,S.w):Ke.set(S,D,V,B),ae.scissor(N.copy(Ke).multiplyScalar(ie).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(S){ae.setScissorTest(tt=S)},this.setOpaqueSort=function(S){Y=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,D=!0,V=!0){let B=0;if(S){let U=!1;if(b!==null){let Z=b.texture.format;U=Z===tm||Z===em||Z===Zf}if(U){let Z=b.texture.type,_e=Z===ii||Z===_a||Z===ul||Z===ks||Z===Jf||Z===Kf,Pe=Ce.getClearColor(),Ie=Ce.getClearAlpha(),Qe=Pe.r,ye=Pe.g,Ae=Pe.b;_e?(f[0]=Qe,f[1]=ye,f[2]=Ae,f[3]=Ie,C.clearBufferuiv(C.COLOR,0,f)):(y[0]=Qe,y[1]=ye,y[2]=Ae,y[3]=Ie,C.clearBufferiv(C.COLOR,0,y))}else B|=C.COLOR_BUFFER_BIT}D&&(B|=C.DEPTH_BUFFER_BIT),V&&(B|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),xe.dispose(),Se.dispose(),Te.dispose(),A.dispose(),w.dispose(),te.dispose(),et.dispose(),St.dispose(),q.dispose(),se.dispose(),se.removeEventListener("sessionstart",Dr),se.removeEventListener("sessionend",js),Nn.stop()};function X(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let S=Ge.autoReset,D=he.enabled,V=he.autoUpdate,B=he.needsUpdate,U=he.type;O(),Ge.autoReset=S,he.enabled=D,he.autoUpdate=V,he.needsUpdate=B,he.type=U}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ge(S){let D=S.target;D.removeEventListener("dispose",ge),ut(D)}function ut(S){Pt(S),Te.remove(S)}function Pt(S){let D=Te.get(S).programs;D!==void 0&&(D.forEach(function(V){q.releaseProgram(V)}),S.isShaderMaterial&&q.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,V,B,U,Z){D===null&&(D=Je);let _e=U.isMesh&&U.matrixWorld.determinant()<0,Pe=$e(S,D,V,B,U);ae.setMaterial(B,_e);let Ie=V.index,Qe=1;if(B.wireframe===!0){if(Ie=K.getWireframeAttribute(V),Ie===void 0)return;Qe=2}let ye=V.drawRange,Ae=V.attributes.position,rt=ye.start*Qe,ct=(ye.start+ye.count)*Qe;Z!==null&&(rt=Math.max(rt,Z.start*Qe),ct=Math.min(ct,(Z.start+Z.count)*Qe)),Ie!==null?(rt=Math.max(rt,0),ct=Math.min(ct,Ie.count)):Ae!=null&&(rt=Math.max(rt,0),ct=Math.min(ct,Ae.count));let xt=ct-rt;if(xt<0||xt===1/0)return;et.setup(U,B,Pe,V,Ie);let Vt,Nt=qe;if(Ie!==null&&(Vt=z.get(Ie),Nt=Ne,Nt.setIndex(Vt)),U.isMesh)B.wireframe===!0?(ae.setLineWidth(B.wireframeLinewidth*pe()),Nt.setMode(C.LINES)):Nt.setMode(C.TRIANGLES);else if(U.isLine){let Ve=B.linewidth;Ve===void 0&&(Ve=1),ae.setLineWidth(Ve*pe()),U.isLineSegments?Nt.setMode(C.LINES):U.isLineLoop?Nt.setMode(C.LINE_LOOP):Nt.setMode(C.LINE_STRIP)}else U.isPoints?Nt.setMode(C.POINTS):U.isSprite&&Nt.setMode(C.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Nt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Ve=U._multiDrawStarts,Vi=U._multiDrawCounts,Hi=U._multiDrawCount,rn=Ie?z.get(Ie).bytesPerElement:1,wa=Te.get(B).currentProgram.getUniforms();for(let Ir=0;Ir<Hi;Ir++)wa.setValue(C,"_gl_DrawID",Ir),Nt.render(Ve[Ir]/rn,Vi[Ir])}else if(U.isInstancedMesh)Nt.renderInstances(rt,xt,U.count);else if(V.isInstancedBufferGeometry){let Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Vi=Math.min(V.instanceCount,Ve);Nt.renderInstances(rt,xt,Vi)}else Nt.render(rt,xt)};function Yt(S,D,V){S.transparent===!0&&S.side===bn&&S.forceSinglePass===!1?(S.side=Tr,S.needsUpdate=!0,fe(S,D,V),S.side=Fi,S.needsUpdate=!0,fe(S,D,V),S.side=bn):fe(S,D,V)}this.compile=function(S,D,V=null){V===null&&(V=S),v=Se.get(V),v.init(D),m.push(v),V.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),S!==V&&S.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights();let B=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let Z=U.material;if(Z)if(Array.isArray(Z))for(let _e=0;_e<Z.length;_e++){let Pe=Z[_e];Yt(Pe,V,U),B.add(Pe)}else Yt(Z,V,U),B.add(Z)}),m.pop(),v=null,B},this.compileAsync=function(S,D,V=null){let B=this.compile(S,D,V);return new Promise(U=>{function Z(){if(B.forEach(function(_e){Te.get(_e).currentProgram.isReady()&&B.delete(_e)}),B.size===0){U(S);return}setTimeout(Z,10)}ue.get("KHR_parallel_shader_compile")!==null?Z():setTimeout(Z,10)})};let pt=null;function Lr(S){pt&&pt(S)}function Dr(){Nn.stop()}function js(){Nn.start()}let Nn=new x1;Nn.setAnimationLoop(Lr),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(S){pt=S,se.setAnimationLoop(S),S===null?Nn.stop():Nn.start()},se.addEventListener("sessionstart",Dr),se.addEventListener("sessionend",js),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,D,b),v=Se.get(S,m.length),v.init(D),m.push(v),me.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),J.setFromProjectionMatrix(me),ke=this.localClippingEnabled,ce=Xe.init(this.clippingPlanes,ke),_=xe.get(S,p.length),_.init(),p.push(_),se.enabled===!0&&se.isPresenting===!0){let Z=g.xr.getDepthSensingMesh();Z!==null&&Ma(Z,D,-1/0,g.sortObjects)}Ma(S,D,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(Y,de),Q=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Q&&Ce.addToRenderList(_,S),this.info.render.frame++,ce===!0&&Xe.beginShadows();let V=v.state.shadowsArray;he.render(V,S,D),ce===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();let B=_.opaque,U=_.transmissive;if(v.setupLights(),D.isArrayCamera){let Z=D.cameras;if(U.length>0)for(let _e=0,Pe=Z.length;_e<Pe;_e++){let Ie=Z[_e];re(B,U,S,Ie)}Q&&Ce.render(S);for(let _e=0,Pe=Z.length;_e<Pe;_e++){let Ie=Z[_e];G(_,S,Ie,Ie.viewport)}}else U.length>0&&re(B,U,S,D),Q&&Ce.render(S),G(_,S,D);b!==null&&(be.updateMultisampleRenderTarget(b),be.updateRenderTargetMipmap(b)),S.isScene===!0&&S.onAfterRender(g,S,D),et.resetDefaultState(),R=-1,E=null,m.pop(),m.length>0?(v=m[m.length-1],ce===!0&&Xe.setGlobalState(g.clippingPlanes,v.state.camera)):v=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function Ma(S,D,V,B){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)V=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)v.pushLight(S),S.castShadow&&v.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){B&&nt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(me);let Z=te.update(S),_e=S.material;_e.visible&&_.push(S,Z,_e,V,nt.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||J.intersectsObject(S))){let Z=te.update(S),_e=S.material;if(B&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),nt.copy(S.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),nt.copy(Z.boundingSphere.center)),nt.applyMatrix4(S.matrixWorld).applyMatrix4(me)),Array.isArray(_e)){let Pe=Z.groups;for(let Ie=0,Qe=Pe.length;Ie<Qe;Ie++){let ye=Pe[Ie],Ae=_e[ye.materialIndex];Ae&&Ae.visible&&_.push(S,Z,Ae,V,nt.z,ye)}}else _e.visible&&_.push(S,Z,_e,V,nt.z,null)}}let U=S.children;for(let Z=0,_e=U.length;Z<_e;Z++)Ma(U[Z],D,V,B)}function G(S,D,V,B){let U=S.opaque,Z=S.transmissive,_e=S.transparent;v.setupLightsView(V),ce===!0&&Xe.setGlobalState(g.clippingPlanes,V),B&&ae.viewport(M.copy(B)),U.length>0&&le(U,D,V),Z.length>0&&le(Z,D,V),_e.length>0&&le(_e,D,V),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function re(S,D,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new vn(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float")?ei:ii,minFilter:va,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace}));let U=v.state.transmissionRenderTarget[B.id],Z=B.viewport||M;U.setSize(Z.z,Z.w);let _e=g.getRenderTarget();g.setRenderTarget(U),g.getClearColor(H),W=g.getClearAlpha(),W<1&&g.setClearColor(16777215,.5),g.clear(),Q&&Ce.render(V);let Pe=g.toneMapping;g.toneMapping=zi;let Ie=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),ce===!0&&Xe.setGlobalState(g.clippingPlanes,B),le(S,V,B),be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U),ue.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let ye=0,Ae=D.length;ye<Ae;ye++){let rt=D[ye],ct=rt.object,xt=rt.geometry,Vt=rt.material,Nt=rt.group;if(Vt.side===bn&&ct.layers.test(B.layers)){let Ve=Vt.side;Vt.side=Tr,Vt.needsUpdate=!0,ve(ct,V,B,xt,Vt,Nt),Vt.side=Ve,Vt.needsUpdate=!0,Qe=!0}}Qe===!0&&(be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U))}g.setRenderTarget(_e),g.setClearColor(H,W),Ie!==void 0&&(B.viewport=Ie),g.toneMapping=Pe}function le(S,D,V){let B=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Z=S.length;U<Z;U++){let _e=S[U],Pe=_e.object,Ie=_e.geometry,Qe=B===null?_e.material:B,ye=_e.group;Pe.layers.test(V.layers)&&ve(Pe,D,V,Ie,Qe,ye)}}function ve(S,D,V,B,U,Z){S.onBeforeRender(g,D,V,B,U,Z),S.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(g,D,V,B,S,Z),U.transparent===!0&&U.side===bn&&U.forceSinglePass===!1?(U.side=Tr,U.needsUpdate=!0,g.renderBufferDirect(V,D,B,U,S,Z),U.side=Fi,U.needsUpdate=!0,g.renderBufferDirect(V,D,B,U,S,Z),U.side=bn):g.renderBufferDirect(V,D,B,U,S,Z),S.onAfterRender(g,D,V,B,U,Z)}function fe(S,D,V){D.isScene!==!0&&(D=Je);let B=Te.get(S),U=v.state.lights,Z=v.state.shadowsArray,_e=U.state.version,Pe=q.getParameters(S,U.state,Z,D,V),Ie=q.getProgramCacheKey(Pe),Qe=B.programs;B.environment=S.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(S.isMeshStandardMaterial?w:A).get(S.envMap||B.environment),B.envMapRotation=B.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Qe===void 0&&(S.addEventListener("dispose",ge),Qe=new Map,B.programs=Qe);let ye=Qe.get(Ie);if(ye!==void 0){if(B.currentProgram===ye&&B.lightsStateVersion===_e)return Fe(S,Pe),ye}else Pe.uniforms=q.getUniforms(S),S.onBeforeCompile(Pe,g),ye=q.acquireProgram(Pe,Ie),Qe.set(Ie,ye),B.uniforms=Pe.uniforms;let Ae=B.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=Xe.uniform),Fe(S,Pe),B.needsLights=We(S),B.lightsStateVersion=_e,B.needsLights&&(Ae.ambientLightColor.value=U.state.ambient,Ae.lightProbe.value=U.state.probe,Ae.directionalLights.value=U.state.directional,Ae.directionalLightShadows.value=U.state.directionalShadow,Ae.spotLights.value=U.state.spot,Ae.spotLightShadows.value=U.state.spotShadow,Ae.rectAreaLights.value=U.state.rectArea,Ae.ltc_1.value=U.state.rectAreaLTC1,Ae.ltc_2.value=U.state.rectAreaLTC2,Ae.pointLights.value=U.state.point,Ae.pointLightShadows.value=U.state.pointShadow,Ae.hemisphereLights.value=U.state.hemi,Ae.directionalShadowMap.value=U.state.directionalShadowMap,Ae.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ae.spotShadowMap.value=U.state.spotShadowMap,Ae.spotLightMatrix.value=U.state.spotLightMatrix,Ae.spotLightMap.value=U.state.spotLightMap,Ae.pointShadowMap.value=U.state.pointShadowMap,Ae.pointShadowMatrix.value=U.state.pointShadowMatrix),B.currentProgram=ye,B.uniformsList=null,ye}function ze(S){if(S.uniformsList===null){let D=S.currentProgram.getUniforms();S.uniformsList=Rc.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Fe(S,D){let V=Te.get(S);V.outputColorSpace=D.outputColorSpace,V.batching=D.batching,V.batchingColor=D.batchingColor,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.instancingMorph=D.instancingMorph,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function $e(S,D,V,B,U){D.isScene!==!0&&(D=Je),be.resetTextureUnits();let Z=D.fog,_e=B.isMeshStandardMaterial?D.environment:null,Pe=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Bs,Ie=(B.isMeshStandardMaterial?w:A).get(B.envMap||_e),Qe=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,ye=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!V.morphAttributes.position,rt=!!V.morphAttributes.normal,ct=!!V.morphAttributes.color,xt=zi;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=g.toneMapping);let Vt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Nt=Vt!==void 0?Vt.length:0,Ve=Te.get(B),Vi=v.state.lights;if(ce===!0&&(ke===!0||S!==E)){let br=S===E&&B.id===R;Xe.setState(B,S,br)}let Hi=!1;B.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Vi.state.version||Ve.outputColorSpace!==Pe||U.isBatchedMesh&&Ve.batching===!1||!U.isBatchedMesh&&Ve.batching===!0||U.isBatchedMesh&&Ve.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ve.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ve.instancing===!1||!U.isInstancedMesh&&Ve.instancing===!0||U.isSkinnedMesh&&Ve.skinning===!1||!U.isSkinnedMesh&&Ve.skinning===!0||U.isInstancedMesh&&Ve.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ve.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ve.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ve.instancingMorph===!1&&U.morphTexture!==null||Ve.envMap!==Ie||B.fog===!0&&Ve.fog!==Z||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Xe.numPlanes||Ve.numIntersection!==Xe.numIntersection)||Ve.vertexAlphas!==Qe||Ve.vertexTangents!==ye||Ve.morphTargets!==Ae||Ve.morphNormals!==rt||Ve.morphColors!==ct||Ve.toneMapping!==xt||Ve.morphTargetsCount!==Nt)&&(Hi=!0):(Hi=!0,Ve.__version=B.version);let rn=Ve.currentProgram;Hi===!0&&(rn=fe(B,D,U));let wa=!1,Ir=!1,$s=!1,At=rn.getUniforms(),_n=Ve.uniforms;if(ae.useProgram(rn.program)&&(wa=!0,Ir=!0,$s=!0),B.id!==R&&(R=B.id,Ir=!0),wa||E!==S){ae.buffers.depth.getReversed()?(De.copy(S.projectionMatrix),ww(De),Ew(De),At.setValue(C,"projectionMatrix",De)):At.setValue(C,"projectionMatrix",S.projectionMatrix),At.setValue(C,"viewMatrix",S.matrixWorldInverse);let br=At.map.cameraPosition;br!==void 0&&br.setValue(C,Ye.setFromMatrixPosition(S.matrixWorld)),Ue.logarithmicDepthBuffer&&At.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),E!==S&&(E=S,Ir=!0,$s=!0)}if(U.isSkinnedMesh){At.setOptional(C,U,"bindMatrix"),At.setOptional(C,U,"bindMatrixInverse");let br=U.skeleton;br&&(br.boneTexture===null&&br.computeBoneTexture(),At.setValue(C,"boneTexture",br.boneTexture,be))}U.isBatchedMesh&&(At.setOptional(C,U,"batchingTexture"),At.setValue(C,"batchingTexture",U._matricesTexture,be),At.setOptional(C,U,"batchingIdTexture"),At.setValue(C,"batchingIdTexture",U._indirectTexture,be),At.setOptional(C,U,"batchingColorTexture"),U._colorsTexture!==null&&At.setValue(C,"batchingColorTexture",U._colorsTexture,be));let Ys=V.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&it.update(U,V,rn),(Ir||Ve.receiveShadow!==U.receiveShadow)&&(Ve.receiveShadow=U.receiveShadow,At.setValue(C,"receiveShadow",U.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(_n.envMap.value=Ie,_n.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(_n.envMapIntensity.value=D.environmentIntensity),Ir&&(At.setValue(C,"toneMappingExposure",g.toneMappingExposure),Ve.needsLights&&Oe(_n,$s),Z&&B.fog===!0&&Be.refreshFogUniforms(_n,Z),Be.refreshMaterialUniforms(_n,B,ie,j,v.state.transmissionRenderTarget[S.id]),Rc.upload(C,ze(Ve),_n,be)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Rc.upload(C,ze(Ve),_n,be),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(C,"center",U.center),At.setValue(C,"modelViewMatrix",U.modelViewMatrix),At.setValue(C,"normalMatrix",U.normalMatrix),At.setValue(C,"modelMatrix",U.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){let br=B.uniformsGroups;for(let qs=0,oi=br.length;qs<oi;qs++){let dm=br[qs];St.update(dm,rn),St.bind(dm,rn)}}return rn}function Oe(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function We(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(S,D,V){Te.get(S.texture).__webglTexture=D,Te.get(S.depthTexture).__webglTexture=V;let B=Te.get(S);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=V===void 0,B.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,D){let V=Te.get(S);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,V=0){b=S,P=D,T=V;let B=!0,U=null,Z=!1,_e=!1;if(S){let Pe=Te.get(S);if(Pe.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(C.FRAMEBUFFER,null),B=!1;else if(Pe.__webglFramebuffer===void 0)be.setupRenderTarget(S);else if(Pe.__hasExternalTextures)be.rebindTextures(S,Te.get(S.texture).__webglTexture,Te.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let ye=S.depthTexture;if(Pe.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(S.width!==ye.image.width||S.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(S)}}let Ie=S.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(_e=!0);let Qe=Te.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Qe[D])?U=Qe[D][V]:U=Qe[D],Z=!0):S.samples>0&&be.useMultisampledRTT(S)===!1?U=Te.get(S).__webglMultisampledFramebuffer:Array.isArray(Qe)?U=Qe[V]:U=Qe,M.copy(S.viewport),N.copy(S.scissor),k=S.scissorTest}else M.copy(Me).multiplyScalar(ie).floor(),N.copy(Ke).multiplyScalar(ie).floor(),k=tt;if(ae.bindFramebuffer(C.FRAMEBUFFER,U)&&B&&ae.drawBuffers(S,U),ae.viewport(M),ae.scissor(N),ae.setScissorTest(k),Z){let Pe=Te.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pe.__webglTexture,V)}else if(_e){let Pe=Te.get(S.texture),Ie=D||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Pe.__webglTexture,V||0,Ie)}R=-1},this.readRenderTargetPixels=function(S,D,V,B,U,Z,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){ae.bindFramebuffer(C.FRAMEBUFFER,Pe);try{let Ie=S.texture,Qe=Ie.format,ye=Ie.type;if(!Ue.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-B&&V>=0&&V<=S.height-U&&C.readPixels(D,V,B,U,Ze.convert(Qe),Ze.convert(ye),Z)}finally{let Ie=b!==null?Te.get(b).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(S,D,V,B,U,Z,_e){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Te.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Pe=Pe[_e]),Pe){let Ie=S.texture,Qe=Ie.format,ye=Ie.type;if(!Ue.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=S.width-B&&V>=0&&V<=S.height-U){ae.bindFramebuffer(C.FRAMEBUFFER,Pe);let Ae=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ae),C.bufferData(C.PIXEL_PACK_BUFFER,Z.byteLength,C.STREAM_READ),C.readPixels(D,V,B,U,Ze.convert(Qe),Ze.convert(ye),0);let rt=b!==null?Te.get(b).__webglFramebuffer:null;ae.bindFramebuffer(C.FRAMEBUFFER,rt);let ct=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Mw(C,ct,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ae),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Z),C.deleteBuffer(Ae),C.deleteSync(ct),Z}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,D=null,V=0){S.isTexture!==!0&&(nl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,S=arguments[1]);let B=Math.pow(2,-V),U=Math.floor(S.image.width*B),Z=Math.floor(S.image.height*B),_e=D!==null?D.x:0,Pe=D!==null?D.y:0;be.setTexture2D(S,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,_e,Pe,U,Z),ae.unbindTexture()},this.copyTextureToTexture=function(S,D,V=null,B=null,U=0){S.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1],D=arguments[2],U=arguments[3]||0,V=null);let Z,_e,Pe,Ie,Qe,ye,Ae,rt,ct,xt=S.isCompressedTexture?S.mipmaps[U]:S.image;V!==null?(Z=V.max.x-V.min.x,_e=V.max.y-V.min.y,Pe=V.isBox3?V.max.z-V.min.z:1,Ie=V.min.x,Qe=V.min.y,ye=V.isBox3?V.min.z:0):(Z=xt.width,_e=xt.height,Pe=xt.depth||1,Ie=0,Qe=0,ye=0),B!==null?(Ae=B.x,rt=B.y,ct=B.z):(Ae=0,rt=0,ct=0);let Vt=Ze.convert(D.format),Nt=Ze.convert(D.type),Ve;D.isData3DTexture?(be.setTexture3D(D,0),Ve=C.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(be.setTexture2DArray(D,0),Ve=C.TEXTURE_2D_ARRAY):(be.setTexture2D(D,0),Ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);let Vi=C.getParameter(C.UNPACK_ROW_LENGTH),Hi=C.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=C.getParameter(C.UNPACK_SKIP_PIXELS),wa=C.getParameter(C.UNPACK_SKIP_ROWS),Ir=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,xt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,xt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ie),C.pixelStorei(C.UNPACK_SKIP_ROWS,Qe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ye);let $s=S.isDataArrayTexture||S.isData3DTexture,At=D.isDataArrayTexture||D.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){let _n=Te.get(S),Ys=Te.get(D),br=Te.get(_n.__renderTarget),qs=Te.get(Ys.__renderTarget);ae.bindFramebuffer(C.READ_FRAMEBUFFER,br.__webglFramebuffer),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,qs.__webglFramebuffer);for(let oi=0;oi<Pe;oi++)$s&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(S).__webglTexture,U,ye+oi),S.isDepthTexture?(At&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Te.get(D).__webglTexture,U,ct+oi),C.blitFramebuffer(Ie,Qe,Z,_e,Ae,rt,Z,_e,C.DEPTH_BUFFER_BIT,C.NEAREST)):At?C.copyTexSubImage3D(Ve,U,Ae,rt,ct+oi,Ie,Qe,Z,_e):C.copyTexSubImage2D(Ve,U,Ae,rt,ct+oi,Ie,Qe,Z,_e);ae.bindFramebuffer(C.READ_FRAMEBUFFER,null),ae.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else At?S.isDataTexture||S.isData3DTexture?C.texSubImage3D(Ve,U,Ae,rt,ct,Z,_e,Pe,Vt,Nt,xt.data):D.isCompressedArrayTexture?C.compressedTexSubImage3D(Ve,U,Ae,rt,ct,Z,_e,Pe,Vt,xt.data):C.texSubImage3D(Ve,U,Ae,rt,ct,Z,_e,Pe,Vt,Nt,xt):S.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,U,Ae,rt,Z,_e,Vt,Nt,xt.data):S.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,U,Ae,rt,xt.width,xt.height,Vt,xt.data):C.texSubImage2D(C.TEXTURE_2D,U,Ae,rt,Z,_e,Vt,Nt,xt);C.pixelStorei(C.UNPACK_ROW_LENGTH,Vi),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Hi),C.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),C.pixelStorei(C.UNPACK_SKIP_ROWS,wa),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ir),U===0&&D.generateMipmaps&&C.generateMipmap(Ve),ae.unbindTexture()},this.copyTextureToTexture3D=function(S,D,V=null,B=null,U=0){return S.isTexture!==!0&&(nl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,B=arguments[1]||null,S=arguments[2],D=arguments[3],U=arguments[4]||0),nl('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,D,V,B,U)},this.initRenderTarget=function(S){Te.get(S).__webglFramebuffer===void 0&&be.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?be.setTextureCube(S,0):S.isData3DTexture?be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?be.setTexture2DArray(S,0):be.setTexture2D(S,0),ae.unbindTexture()},this.resetState=function(){P=0,T=0,b=null,ae.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}},DA=class A1{constructor(t,r=25e-5){this.isFogExp2=!0,this.name="",this.color=new je(t),this.density=r}clone(){return new A1(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}},gy=class extends er{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},IA=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Uf,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let n=0,i=this.stride;n<i;n++)this.array[e+n]=t.array[r+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mr=new L,vy=class C1{constructor(t,r,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=r,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let r=0,n=this.data.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.applyMatrix4(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}applyNormalMatrix(t){for(let r=0,n=this.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.applyNormalMatrix(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}transformDirection(t){for(let r=0,n=this.count;r<n;r++)Mr.fromBufferAttribute(this,r),Mr.transformDirection(t),this.setXYZ(r,Mr.x,Mr.y,Mr.z);return this}getComponent(t,r){let n=this.array[t*this.data.stride+this.offset+r];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,r,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[t*this.data.stride+this.offset+r]=n,this}setX(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset]=r,this}setY(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+1]=r,this}setZ(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+2]=r,this}setW(t,r){return this.normalized&&(r=yt(r,this.array)),this.data.array[t*this.data.stride+this.offset+3]=r,this}getX(t){let r=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(r=An(r,this.array)),r}getY(t){let r=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(r=An(r,this.array)),r}getZ(t){let r=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(r=An(r,this.array)),r}getW(t){let r=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(r=An(r,this.array)),r}setXY(t,r,n){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),n=yt(n,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this}setXYZ(t,r,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,r,n,i,a){return t=t*this.data.stride+this.offset,this.normalized&&(r=yt(r,this.array),n=yt(n,this.array),i=yt(i,this.array),a=yt(a,this.array)),this.data.array[t+0]=r,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=a,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return new vr(new this.array.constructor(r),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new C1(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let r=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)r.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:r,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},R1=class extends Sa{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ms,Jo=new L,gs=new L,vs=new L,_s=new ne,Ko=new ne,P1=new bt,uc=new L,Qo=new L,cc=new L,_y=new ne,Hp=new ne,yy=new ne,ys=class extends er{constructor(e=new R1){if(super(),this.isSprite=!0,this.type="Sprite",ms===void 0){ms=new tr;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new IA(t,5);ms.setIndex([0,1,2,0,2,3]),ms.setAttribute("position",new vy(r,3,0,!1)),ms.setAttribute("uv",new vy(r,2,3,!1))}this.geometry=ms,this.material=e,this.center=new ne(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),gs.setFromMatrixScale(this.matrixWorld),P1.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&gs.multiplyScalar(-vs.z);let r=this.material.rotation,n,i;r!==0&&(i=Math.cos(r),n=Math.sin(r));let a=this.center;hc(uc.set(-.5,-.5,0),vs,a,gs,n,i),hc(Qo.set(.5,-.5,0),vs,a,gs,n,i),hc(cc.set(.5,.5,0),vs,a,gs,n,i),_y.set(0,0),Hp.set(1,0),yy.set(1,1);let s=e.ray.intersectTriangle(uc,Qo,cc,!1,Jo);if(s===null&&(hc(Qo.set(-.5,.5,0),vs,a,gs,n,i),Hp.set(0,1),s=e.ray.intersectTriangle(uc,cc,Qo,!1,Jo),s===null))return;let o=e.ray.origin.distanceTo(Jo);o<e.near||o>e.far||t.push({distance:o,point:Jo.clone(),uv:ws.getInterpolation(Jo,uc,Qo,cc,_y,Hp,yy,new ne),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hc(e,t,r,n,i,a){_s.subVectors(e,r).addScalar(.5).multiply(n),i!==void 0?(Ko.x=a*_s.x-i*_s.y,Ko.y=i*_s.x+a*_s.y):Ko.copy(_s),e.copy(t),e.x+=Ko.x,e.y+=Ko.y,e.applyMatrix4(P1)}var UA=class extends tn{constructor(e=null,t=1,r=1,n,i,a,s,o,l=jr,u=jr,c,h){super(null,a,s,o,l,u,n,i,c,h),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},xy=class extends vr{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},xs=new bt,Sy=new bt,dc=[],My=new xa,OA=new bt,Zo=new He,el=new Gs,ha=class extends He{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xy(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<r;n++)this.setMatrixAt(n,OA)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new xa),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xs),My.copy(e.boundingBox).applyMatrix4(xs),this.boundingBox.union(My)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,xs),el.copy(e.boundingSphere).applyMatrix4(xs),this.boundingSphere.union(el)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let r=t.morphTargetInfluences,n=this.morphTexture.source.data.data,i=r.length+1,a=e*i+1;for(let s=0;s<r.length;s++)r[s]=n[a+s]}raycast(e,t){let r=this.matrixWorld,n=this.count;if(Zo.geometry=this.geometry,Zo.material=this.material,Zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),el.copy(this.boundingSphere),el.applyMatrix4(r),e.ray.intersectsSphere(el)!==!1))for(let i=0;i<n;i++){this.getMatrixAt(i,xs),Sy.multiplyMatrices(r,xs),Zo.matrixWorld=Sy,Zo.raycast(e,dc);for(let a=0,s=dc.length;a<s;a++){let o=dc[a];o.instanceId=i,o.object=this,t.push(o)}dc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new xy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let r=t.morphTargetInfluences,n=r.length+1;this.morphTexture===null&&(this.morphTexture=new UA(new Float32Array(n*this.count),n,this.count,Qf,Rn));let i=this.morphTexture.source.data.data,a=0;for(let l=0;l<r.length;l++)a+=r[l];let s=this.geometry.morphTargetsRelative?1:1-a,o=n*e;i[o]=s,i.set(r,o+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Bf=class extends Sa{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wy=new bt,Vf=new u1,pc=new Gs,fc=new L,Gp=class extends er{constructor(e=new tr,t=new Bf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),pc.copy(r.boundingSphere),pc.applyMatrix4(n),pc.radius+=i,e.ray.intersectsSphere(pc)===!1)return;wy.copy(n).invert(),Vf.copy(e.ray).applyMatrix4(wy);let s=i/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=r.index,u=r.attributes.position;if(l!==null){let c=Math.max(0,a.start),h=Math.min(l.count,a.start+a.count);for(let d=c,f=h;d<f;d++){let y=l.getX(d);fc.fromBufferAttribute(u,y),Ey(fc,y,o,n,e,t,this)}}else{let c=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let d=c,f=h;d<f;d++)fc.fromBufferAttribute(u,d),Ey(fc,d,o,n,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,i=r.length;n<i;n++){let a=r[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=n}}}}};function Ey(e,t,r,n,i,a,s){let o=Vf.distanceSqToPoint(e);if(o<r){let l=new L;Vf.closestPointToPoint(e,l),l.applyMatrix4(n);let u=i.ray.origin.distanceTo(l);if(u<i.near||u>i.far)return;a.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var kA=class extends tn{constructor(e,t,r,n,i,a,s,o,l){super(e,t,r,n,i,a,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Pn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){let t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],r,n=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)r=this.getPoint(a/e),i+=r.distanceTo(n),t.push(i),n=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let r=this.getLengths(),n=0,i=r.length,a;t?a=t:a=e*r[i-1];let s=0,o=i-1,l;for(;s<=o;)if(n=Math.floor(s+(o-s)/2),l=r[n]-a,l<0)s=n+1;else if(l>0)o=n-1;else{o=n;break}if(n=o,r[n]===a)return n/(i-1);let u=r[n],c=r[n+1]-u,h=(a-u)/c;return(n+h)/(i-1)}getTangent(e,t){let r=e-1e-4,n=e+1e-4;r<0&&(r=0),n>1&&(n=1);let i=this.getPoint(r),a=this.getPoint(n),s=t||(i.isVector2?new ne:new L);return s.copy(a).sub(i).normalize(),s}getTangentAt(e,t){let r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){let r=new L,n=[],i=[],a=[],s=new L,o=new bt;for(let d=0;d<=e;d++){let f=d/e;n[d]=this.getTangentAt(f,new L)}i[0]=new L,a[0]=new L;let l=Number.MAX_VALUE,u=Math.abs(n[0].x),c=Math.abs(n[0].y),h=Math.abs(n[0].z);u<=l&&(l=u,r.set(1,0,0)),c<=l&&(l=c,r.set(0,1,0)),h<=l&&r.set(0,0,1),s.crossVectors(n[0],r).normalize(),i[0].crossVectors(n[0],s),a[0].crossVectors(n[0],i[0]);for(let d=1;d<=e;d++){if(i[d]=i[d-1].clone(),a[d]=a[d-1].clone(),s.crossVectors(n[d-1],n[d]),s.length()>Number.EPSILON){s.normalize();let f=Math.acos(Zt(n[d-1].dot(n[d]),-1,1));i[d].applyMatrix4(o.makeRotationAxis(s,f))}a[d].crossVectors(n[d],i[d])}if(t===!0){let d=Math.acos(Zt(i[0].dot(i[e]),-1,1));d/=e,n[0].dot(s.crossVectors(i[0],i[e]))>0&&(d=-d);for(let f=1;f<=e;f++)i[f].applyMatrix4(o.makeRotationAxis(n[f],d*f)),a[f].crossVectors(n[f],i[f])}return{tangents:n,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},am=class extends Pn{constructor(e=0,t=0,r=1,n=1,i=0,a=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=n,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new ne){let r=t,n=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<Number.EPSILON;for(;i<0;)i+=n;for(;i>n;)i-=n;i<Number.EPSILON&&(a?i=0:i=n),this.aClockwise===!0&&!a&&(i===n?i=-n:i=i-n);let s=this.aStartAngle+e*i,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),h=o-this.aX,d=l-this.aY;o=h*u-d*c+this.aX,l=h*c+d*u+this.aY}return r.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},zA=class extends am{constructor(e,t,r,n,i,a){super(e,t,r,r,n,i,a),this.isArcCurve=!0,this.type="ArcCurve"}};function sm(){let e=0,t=0,r=0,n=0;function i(a,s,o,l){e=a,t=o,r=-3*a+3*s-2*o-l,n=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){i(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,h){let d=(s-a)/u-(o-a)/(u+c)+(o-s)/c,f=(o-s)/c-(l-s)/(c+h)+(l-o)/h;d*=c,f*=c,i(s,o,d,f)},calc:function(a){let s=a*a,o=s*a;return e+t*a+r*s+n*o}}}var mc=new L,Wp=new sm,Xp=new sm,jp=new sm,FA=class extends Pn{constructor(e=[],t=!1,r="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=n}getPoint(e,t=new L){let r=t,n=this.points,i=n.length,a=(i-(this.closed?0:1))*e,s=Math.floor(a),o=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/i)+1)*i:o===0&&s===i-1&&(s=i-2,o=1);let l,u;this.closed||s>0?l=n[(s-1)%i]:(mc.subVectors(n[0],n[1]).add(n[0]),l=mc);let c=n[s%i],h=n[(s+1)%i];if(this.closed||s+2<i?u=n[(s+2)%i]:(mc.subVectors(n[i-1],n[i-2]).add(n[i-1]),u=mc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,f=Math.pow(l.distanceToSquared(c),d),y=Math.pow(c.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(u),d);y<1e-4&&(y=1),f<1e-4&&(f=y),_<1e-4&&(_=y),Wp.initNonuniformCatmullRom(l.x,c.x,h.x,u.x,f,y,_),Xp.initNonuniformCatmullRom(l.y,c.y,h.y,u.y,f,y,_),jp.initNonuniformCatmullRom(l.z,c.z,h.z,u.z,f,y,_)}else this.curveType==="catmullrom"&&(Wp.initCatmullRom(l.x,c.x,h.x,u.x,this.tension),Xp.initCatmullRom(l.y,c.y,h.y,u.y,this.tension),jp.initCatmullRom(l.z,c.z,h.z,u.z,this.tension));return r.set(Wp.calc(o),Xp.calc(o),jp.calc(o)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ty(e,t,r,n,i){let a=(n-t)*.5,s=(i-r)*.5,o=e*e,l=e*o;return(2*r-2*n+a+s)*l+(-3*r+3*n-2*a-s)*o+a*e+r}function BA(e,t){let r=1-e;return r*r*t}function VA(e,t){return 2*(1-e)*e*t}function HA(e,t){return e*e*t}function sl(e,t,r,n){return BA(e,t)+VA(e,r)+HA(e,n)}function GA(e,t){let r=1-e;return r*r*r*t}function WA(e,t){let r=1-e;return 3*r*r*e*t}function XA(e,t){return 3*(1-e)*e*e*t}function jA(e,t){return e*e*e*t}function ol(e,t,r,n,i){return GA(e,t)+WA(e,r)+XA(e,n)+jA(e,i)}var N1=class extends Pn{constructor(e=new ne,t=new ne,r=new ne,n=new ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new ne){let r=t,n=this.v0,i=this.v1,a=this.v2,s=this.v3;return r.set(ol(e,n.x,i.x,a.x,s.x),ol(e,n.y,i.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},$A=class extends Pn{constructor(e=new L,t=new L,r=new L,n=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=n}getPoint(e,t=new L){let r=t,n=this.v0,i=this.v1,a=this.v2,s=this.v3;return r.set(ol(e,n.x,i.x,a.x,s.x),ol(e,n.y,i.y,a.y,s.y),ol(e,n.z,i.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},L1=class extends Pn{constructor(e=new ne,t=new ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ne){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},YA=class extends Pn{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},D1=class extends Pn{constructor(e=new ne,t=new ne,r=new ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new ne){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(sl(e,n.x,i.x,a.x),sl(e,n.y,i.y,a.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},I1=class extends Pn{constructor(e=new L,t=new L,r=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new L){let r=t,n=this.v0,i=this.v1,a=this.v2;return r.set(sl(e,n.x,i.x,a.x),sl(e,n.y,i.y,a.y),sl(e,n.z,i.z,a.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},U1=class extends Pn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ne){let r=t,n=this.points,i=(n.length-1)*e,a=Math.floor(i),s=i-a,o=n[a===0?a:a-1],l=n[a],u=n[a>n.length-2?n.length-1:a+1],c=n[a>n.length-3?n.length-1:a+2];return r.set(Ty(s,o.x,l.x,u.x,c.x),Ty(s,o.y,l.y,u.y,c.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){let n=e.points[t];this.points.push(new ne().fromArray(n))}return this}},Hf=Object.freeze({__proto__:null,ArcCurve:zA,CatmullRomCurve3:FA,CubicBezierCurve:N1,CubicBezierCurve3:$A,EllipseCurve:am,LineCurve:L1,LineCurve3:YA,QuadraticBezierCurve:D1,QuadraticBezierCurve3:I1,SplineCurve:U1}),qA=class extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hf[r](t,e))}return this}getPoint(e,t){let r=e*this.getLength(),n=this.getCurveLengths(),i=0;for(;i<n.length;){if(n[i]>=r){let a=n[i]-r,s=this.curves[i],o=s.getLength(),l=o===0?0:1-a/o;return s.getPointAt(l,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let r=0,n=this.curves.length;r<n;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],r;for(let n=0,i=this.curves;n<i.length;n++){let a=i[n],s=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,o=a.getPoints(s);for(let l=0;l<o.length;l++){let u=o[l];r&&r.equals(u)||(t.push(u),r=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){let n=e.curves[t];this.curves.push(new Hf[n.type]().fromJSON(n))}return this}},ll=class extends qA{constructor(e){super(),this.type="Path",this.currentPoint=new ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let r=new L1(this.currentPoint.clone(),new ne(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,n){let i=new D1(this.currentPoint.clone(),new ne(e,t),new ne(r,n));return this.curves.push(i),this.currentPoint.set(r,n),this}bezierCurveTo(e,t,r,n,i,a){let s=new N1(this.currentPoint.clone(),new ne(e,t),new ne(r,n),new ne(i,a));return this.curves.push(s),this.currentPoint.set(i,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),r=new U1(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,n,i,a){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,r,n,i,a),this}absarc(e,t,r,n,i,a){return this.absellipse(e,t,r,r,n,i,a),this}ellipse(e,t,r,n,i,a,s,o){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,r,n,i,a,s,o),this}absellipse(e,t,r,n,i,a,s,o){let l=new am(e,t,r,n,i,a,s,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},JA=class O1 extends tr{constructor(t=[new ne(0,-.5),new ne(.5,0),new ne(0,.5)],r=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:r,phiStart:n,phiLength:i},r=Math.floor(r),i=Zt(i,0,Math.PI*2);let a=[],s=[],o=[],l=[],u=[],c=1/r,h=new L,d=new ne,f=new L,y=new L,_=new L,v=0,p=0;for(let m=0;m<=t.length-1;m++)switch(m){case 0:v=t[m+1].x-t[m].x,p=t[m+1].y-t[m].y,f.x=p*1,f.y=-v,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:v=t[m+1].x-t[m].x,p=t[m+1].y-t[m].y,f.x=p*1,f.y=-v,f.z=p*0,y.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(y)}for(let m=0;m<=r;m++){let g=n+m*c*i,x=Math.sin(g),P=Math.cos(g);for(let T=0;T<=t.length-1;T++){h.x=t[T].x*x,h.y=t[T].y,h.z=t[T].x*P,s.push(h.x,h.y,h.z),d.x=m/r,d.y=T/(t.length-1),o.push(d.x,d.y);let b=l[3*T+0]*x,R=l[3*T+1],E=l[3*T+0]*P;u.push(b,R,E)}}for(let m=0;m<r;m++)for(let g=0;g<t.length-1;g++){let x=g+m*t.length,P=x,T=x+t.length,b=x+t.length+1,R=x+1;a.push(P,T,R),a.push(b,R,T)}this.setIndex(a),this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(u,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O1(t.points,t.segments,t.phiStart,t.phiLength)}},Gf=class k1 extends tr{constructor(t=1,r=1,n=1,i=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:r,height:n,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};let u=this;i=Math.floor(i),a=Math.floor(a);let c=[],h=[],d=[],f=[],y=0,_=[],v=n/2,p=0;m(),s===!1&&(t>0&&g(!0),r>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new vt(h,3)),this.setAttribute("normal",new vt(d,3)),this.setAttribute("uv",new vt(f,2));function m(){let x=new L,P=new L,T=0,b=(r-t)/n;for(let R=0;R<=a;R++){let E=[],M=R/a,N=M*(r-t)+t;for(let k=0;k<=i;k++){let H=k/i,W=H*l+o,$=Math.sin(W),j=Math.cos(W);P.x=N*$,P.y=-M*n+v,P.z=N*j,h.push(P.x,P.y,P.z),x.set($,b,j).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-M),E.push(y++)}_.push(E)}for(let R=0;R<i;R++)for(let E=0;E<a;E++){let M=_[E][R],N=_[E+1][R],k=_[E+1][R+1],H=_[E][R+1];(t>0||E!==0)&&(c.push(M,N,H),T+=3),(r>0||E!==a-1)&&(c.push(N,k,H),T+=3)}u.addGroup(p,T,0),p+=T}function g(x){let P=y,T=new ne,b=new L,R=0,E=x===!0?t:r,M=x===!0?1:-1;for(let k=1;k<=i;k++)h.push(0,v*M,0),d.push(0,M,0),f.push(.5,.5),y++;let N=y;for(let k=0;k<=i;k++){let H=k/i*l+o,W=Math.cos(H),$=Math.sin(H);b.x=E*$,b.y=v*M,b.z=E*W,h.push(b.x,b.y,b.z),d.push(0,M,0),T.x=W*.5+.5,T.y=$*.5*M+.5,f.push(T.x,T.y),y++}for(let k=0;k<i;k++){let H=P+k,W=N+k;x===!0?c.push(W,W+1,H):c.push(W+1,W,H),R+=3}u.addGroup(p,R,x===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new k1(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tl=class z1 extends Gf{constructor(t=1,r=1,n=32,i=1,a=!1,s=0,o=Math.PI*2){super(0,t,r,n,i,a,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(t){return new z1(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},KA=class F1 extends tr{constructor(t=[],r=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:r,radius:n,detail:i};let a=[],s=[];o(i),u(n),c(),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(a.slice(),3)),this.setAttribute("uv",new vt(s,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(m){let g=new L,x=new L,P=new L;for(let T=0;T<r.length;T+=3)f(r[T+0],g),f(r[T+1],x),f(r[T+2],P),l(g,x,P,m)}function l(m,g,x,P){let T=P+1,b=[];for(let R=0;R<=T;R++){b[R]=[];let E=m.clone().lerp(x,R/T),M=g.clone().lerp(x,R/T),N=T-R;for(let k=0;k<=N;k++)k===0&&R===T?b[R][k]=E:b[R][k]=E.clone().lerp(M,k/N)}for(let R=0;R<T;R++)for(let E=0;E<2*(T-R)-1;E++){let M=Math.floor(E/2);E%2===0?(d(b[R][M+1]),d(b[R+1][M]),d(b[R][M])):(d(b[R][M+1]),d(b[R+1][M+1]),d(b[R+1][M]))}}function u(m){let g=new L;for(let x=0;x<a.length;x+=3)g.x=a[x+0],g.y=a[x+1],g.z=a[x+2],g.normalize().multiplyScalar(m),a[x+0]=g.x,a[x+1]=g.y,a[x+2]=g.z}function c(){let m=new L;for(let g=0;g<a.length;g+=3){m.x=a[g+0],m.y=a[g+1],m.z=a[g+2];let x=v(m)/2/Math.PI+.5,P=p(m)/Math.PI+.5;s.push(x,1-P)}y(),h()}function h(){for(let m=0;m<s.length;m+=6){let g=s[m+0],x=s[m+2],P=s[m+4],T=Math.max(g,x,P),b=Math.min(g,x,P);T>.9&&b<.1&&(g<.2&&(s[m+0]+=1),x<.2&&(s[m+2]+=1),P<.2&&(s[m+4]+=1))}}function d(m){a.push(m.x,m.y,m.z)}function f(m,g){let x=m*3;g.x=t[x+0],g.y=t[x+1],g.z=t[x+2]}function y(){let m=new L,g=new L,x=new L,P=new L,T=new ne,b=new ne,R=new ne;for(let E=0,M=0;E<a.length;E+=9,M+=6){m.set(a[E+0],a[E+1],a[E+2]),g.set(a[E+3],a[E+4],a[E+5]),x.set(a[E+6],a[E+7],a[E+8]),T.set(s[M+0],s[M+1]),b.set(s[M+2],s[M+3]),R.set(s[M+4],s[M+5]),P.copy(m).add(g).add(x).divideScalar(3);let N=v(P);_(T,M+0,m,N),_(b,M+2,g,N),_(R,M+4,x,N)}}function _(m,g,x,P){P<0&&m.x===1&&(s[g]=m.x-1),x.x===0&&x.z===0&&(s[g]=P/2/Math.PI+.5)}function v(m){return Math.atan2(m.z,-m.x)}function p(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new F1(t.vertices,t.indices,t.radius,t.details)}},mn=class extends ll{constructor(e){super(e),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let r=0,n=this.holes.length;r<n;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){let n=e.holes[t];this.holes.push(new ll().fromJSON(n))}return this}},QA={triangulate:function(e,t,r=2){let n=t&&t.length,i=n?t[0]*r:e.length,a=B1(e,0,i,r,!0),s=[];if(!a||a.next===a.prev)return s;let o,l,u,c,h,d,f;if(n&&(a=nC(e,t,a,r)),e.length>80*r){o=u=e[0],l=c=e[1];for(let y=r;y<i;y+=r)h=e[y],d=e[y+1],h<o&&(o=h),d<l&&(l=d),h>u&&(u=h),d>c&&(c=d);f=Math.max(u-o,c-l),f=f!==0?32767/f:0}return hl(a,s,r,o,l,f,0),s}};function B1(e,t,r,n,i){let a,s;if(i===fC(e,t,r,n)>0)for(a=t;a<r;a+=n)s=by(a,e[a],e[a+1],s);else for(a=r-n;a>=t;a-=n)s=by(a,e[a],e[a+1],s);return s&&Fc(s,s.next)&&(pl(s),s=s.next),s}function ya(e,t){if(!e)return e;t||(t=e);let r=e,n;do if(n=!1,!r.steiner&&(Fc(r,r.next)||Ot(r.prev,r,r.next)===0)){if(pl(r),r=t=r.prev,r===r.next)break;n=!0}else r=r.next;while(n||r!==t);return t}function hl(e,t,r,n,i,a,s){if(!e)return;!s&&a&&lC(e,n,i,a);let o=e,l,u;for(;e.prev!==e.next;){if(l=e.prev,u=e.next,a?eC(e,n,i,a):ZA(e)){t.push(l.i/r|0),t.push(e.i/r|0),t.push(u.i/r|0),pl(e),e=u.next,o=u.next;continue}if(e=u,e===o){s?s===1?(e=tC(ya(e),t,r),hl(e,t,r,n,i,a,2)):s===2&&rC(e,t,r,n,i,a):hl(ya(e),t,r,n,i,a,1);break}}}function ZA(e){let t=e.prev,r=e,n=e.next;if(Ot(t,r,n)>=0)return!1;let i=t.x,a=r.x,s=n.x,o=t.y,l=r.y,u=n.y,c=i<a?i<s?i:s:a<s?a:s,h=o<l?o<u?o:u:l<u?l:u,d=i>a?i>s?i:s:a>s?a:s,f=o>l?o>u?o:u:l>u?l:u,y=n.next;for(;y!==t;){if(y.x>=c&&y.x<=d&&y.y>=h&&y.y<=f&&Cs(i,o,a,l,s,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function eC(e,t,r,n){let i=e.prev,a=e,s=e.next;if(Ot(i,a,s)>=0)return!1;let o=i.x,l=a.x,u=s.x,c=i.y,h=a.y,d=s.y,f=o<l?o<u?o:u:l<u?l:u,y=c<h?c<d?c:d:h<d?h:d,_=o>l?o>u?o:u:l>u?l:u,v=c>h?c>d?c:d:h>d?h:d,p=Wf(f,y,t,r,n),m=Wf(_,v,t,r,n),g=e.prevZ,x=e.nextZ;for(;g&&g.z>=p&&x&&x.z<=m;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==s&&Cs(o,c,l,h,u,d,g.x,g.y)&&Ot(g.prev,g,g.next)>=0||(g=g.prevZ,x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==s&&Cs(o,c,l,h,u,d,x.x,x.y)&&Ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;g&&g.z>=p;){if(g.x>=f&&g.x<=_&&g.y>=y&&g.y<=v&&g!==i&&g!==s&&Cs(o,c,l,h,u,d,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;x&&x.z<=m;){if(x.x>=f&&x.x<=_&&x.y>=y&&x.y<=v&&x!==i&&x!==s&&Cs(o,c,l,h,u,d,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function tC(e,t,r){let n=e;do{let i=n.prev,a=n.next.next;!Fc(i,a)&&V1(i,n,n.next,a)&&dl(i,a)&&dl(a,i)&&(t.push(i.i/r|0),t.push(n.i/r|0),t.push(a.i/r|0),pl(n),pl(n.next),n=e=a),n=n.next}while(n!==e);return ya(n)}function rC(e,t,r,n,i,a){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&hC(s,o)){let l=H1(s,o);s=ya(s,s.next),l=ya(l,l.next),hl(s,t,r,n,i,a,0),hl(l,t,r,n,i,a,0);return}o=o.next}s=s.next}while(s!==e)}function nC(e,t,r,n){let i=[],a,s,o,l,u;for(a=0,s=t.length;a<s;a++)o=t[a]*n,l=a<s-1?t[a+1]*n:e.length,u=B1(e,o,l,n,!1),u===u.next&&(u.steiner=!0),i.push(cC(u));for(i.sort(iC),a=0;a<i.length;a++)r=aC(i[a],r);return r}function iC(e,t){return e.x-t.x}function aC(e,t){let r=sC(e,t);if(!r)return t;let n=H1(r,e);return ya(n,n.next),ya(r,r.next)}function sC(e,t){let r=t,n=-1/0,i,a=e.x,s=e.y;do{if(s<=r.y&&s>=r.next.y&&r.next.y!==r.y){let d=r.x+(s-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(d<=a&&d>n&&(n=d,i=r.x<r.next.x?r:r.next,d===a))return i}r=r.next}while(r!==t);if(!i)return null;let o=i,l=i.x,u=i.y,c=1/0,h;r=i;do a>=r.x&&r.x>=l&&a!==r.x&&Cs(s<u?a:n,s,l,u,s<u?n:a,s,r.x,r.y)&&(h=Math.abs(s-r.y)/(a-r.x),dl(r,e)&&(h<c||h===c&&(r.x>i.x||r.x===i.x&&oC(i,r)))&&(i=r,c=h)),r=r.next;while(r!==o);return i}function oC(e,t){return Ot(e.prev,e,t.prev)<0&&Ot(t.next,e,e.next)<0}function lC(e,t,r,n){let i=e;do i.z===0&&(i.z=Wf(i.x,i.y,t,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,uC(i)}function uC(e){let t,r,n,i,a,s,o,l,u=1;do{for(r=e,e=null,a=null,s=0;r;){for(s++,n=r,o=0,t=0;t<u&&(o++,n=n.nextZ,!!n);t++);for(l=u;o>0||l>0&&n;)o!==0&&(l===0||!n||r.z<=n.z)?(i=r,r=r.nextZ,o--):(i=n,n=n.nextZ,l--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=n}a.nextZ=null,u*=2}while(s>1);return e}function Wf(e,t,r,n,i){return e=(e-r)*i|0,t=(t-n)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function cC(e){let t=e,r=e;do(t.x<r.x||t.x===r.x&&t.y<r.y)&&(r=t),t=t.next;while(t!==e);return r}function Cs(e,t,r,n,i,a,s,o){return(i-s)*(t-o)>=(e-s)*(a-o)&&(e-s)*(n-o)>=(r-s)*(t-o)&&(r-s)*(a-o)>=(i-s)*(n-o)}function hC(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!dC(e,t)&&(dl(e,t)&&dl(t,e)&&pC(e,t)&&(Ot(e.prev,e,t.prev)||Ot(e,t.prev,t))||Fc(e,t)&&Ot(e.prev,e,e.next)>0&&Ot(t.prev,t,t.next)>0)}function Ot(e,t,r){return(t.y-e.y)*(r.x-t.x)-(t.x-e.x)*(r.y-t.y)}function Fc(e,t){return e.x===t.x&&e.y===t.y}function V1(e,t,r,n){let i=vc(Ot(e,t,r)),a=vc(Ot(e,t,n)),s=vc(Ot(r,n,e)),o=vc(Ot(r,n,t));return!!(i!==a&&s!==o||i===0&&gc(e,r,t)||a===0&&gc(e,n,t)||s===0&&gc(r,e,n)||o===0&&gc(r,t,n))}function gc(e,t,r){return t.x<=Math.max(e.x,r.x)&&t.x>=Math.min(e.x,r.x)&&t.y<=Math.max(e.y,r.y)&&t.y>=Math.min(e.y,r.y)}function vc(e){return e>0?1:e<0?-1:0}function dC(e,t){let r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==t.i&&r.next.i!==t.i&&V1(r,r.next,e,t))return!0;r=r.next}while(r!==e);return!1}function dl(e,t){return Ot(e.prev,e,e.next)<0?Ot(e,t,e.next)>=0&&Ot(e,e.prev,t)>=0:Ot(e,t,e.prev)<0||Ot(e,e.next,t)<0}function pC(e,t){let r=e,n=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do r.y>a!=r.next.y>a&&r.next.y!==r.y&&i<(r.next.x-r.x)*(a-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next;while(r!==e);return n}function H1(e,t){let r=new Xf(e.i,e.x,e.y),n=new Xf(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,r.next=i,i.prev=r,n.next=r,r.prev=n,a.next=n,n.prev=a,n}function by(e,t,r,n){let i=new Xf(e,t,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function pl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Xf(e,t,r){this.i=e,this.x=t,this.y=r,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fC(e,t,r,n){let i=0;for(let a=t,s=r-n;a<r;a+=n)i+=(e[s]-e[a])*(e[a+1]+e[s+1]),s=a;return i}var Ds=class G1{static area(t){let r=t.length,n=0;for(let i=r-1,a=0;a<r;i=a++)n+=t[i].x*t[a].y-t[a].x*t[i].y;return n*.5}static isClockWise(t){return G1.area(t)<0}static triangulateShape(t,r){let n=[],i=[],a=[];Ay(t),Cy(n,t);let s=t.length;r.forEach(Ay);for(let l=0;l<r.length;l++)i.push(s),s+=r[l].length,Cy(n,r[l]);let o=QA.triangulate(n,i);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}};function Ay(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Cy(e,t){for(let r=0;r<t.length;r++)e.push(t[r].x),e.push(t[r].y)}var _c=class W1 extends tr{constructor(t=new mn([new ne(.5,.5),new ne(-.5,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:r},t=Array.isArray(t)?t:[t];let n=this,i=[],a=[];for(let o=0,l=t.length;o<l;o++){let u=t[o];s(u)}this.setAttribute("position",new vt(i,3)),this.setAttribute("uv",new vt(a,2)),this.computeVertexNormals();function s(o){let l=[],u=r.curveSegments!==void 0?r.curveSegments:12,c=r.steps!==void 0?r.steps:1,h=r.depth!==void 0?r.depth:1,d=r.bevelEnabled!==void 0?r.bevelEnabled:!0,f=r.bevelThickness!==void 0?r.bevelThickness:.2,y=r.bevelSize!==void 0?r.bevelSize:f-.1,_=r.bevelOffset!==void 0?r.bevelOffset:0,v=r.bevelSegments!==void 0?r.bevelSegments:3,p=r.extrudePath,m=r.UVGenerator!==void 0?r.UVGenerator:mC,g,x=!1,P,T,b,R;p&&(g=p.getSpacedPoints(c),x=!0,d=!1,P=p.computeFrenetFrames(c,!1),T=new L,b=new L,R=new L),d||(v=0,f=0,y=0,_=0);let E=o.extractPoints(u),M=E.shape,N=E.holes;if(!Ds.isClockWise(M)){M=M.reverse();for(let Q=0,pe=N.length;Q<pe;Q++){let C=N[Q];Ds.isClockWise(C)&&(N[Q]=C.reverse())}}let k=Ds.triangulateShape(M,N),H=M;for(let Q=0,pe=N.length;Q<pe;Q++){let C=N[Q];M=M.concat(C)}function W(Q,pe,C){return pe||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(pe,C)}let $=M.length,j=k.length;function ie(Q,pe,C){let Re,ue,Ue,ae=Q.x-pe.x,Ge=Q.y-pe.y,Te=C.x-Q.x,be=C.y-Q.y,A=ae*ae+Ge*Ge,w=ae*be-Ge*Te;if(Math.abs(w)>Number.EPSILON){let z=Math.sqrt(A),K=Math.sqrt(Te*Te+be*be),te=pe.x-Ge/z,q=pe.y+ae/z,Be=C.x-be/K,xe=C.y+Te/K,Se=((Be-te)*be-(xe-q)*Te)/(ae*be-Ge*Te);Re=te+ae*Se-Q.x,ue=q+Ge*Se-Q.y;let Xe=Re*Re+ue*ue;if(Xe<=2)return new ne(Re,ue);Ue=Math.sqrt(Xe/2)}else{let z=!1;ae>Number.EPSILON?Te>Number.EPSILON&&(z=!0):ae<-Number.EPSILON?Te<-Number.EPSILON&&(z=!0):Math.sign(Ge)===Math.sign(be)&&(z=!0),z?(Re=-Ge,ue=ae,Ue=Math.sqrt(A)):(Re=ae,ue=Ge,Ue=Math.sqrt(A/2))}return new ne(Re/Ue,ue/Ue)}let Y=[];for(let Q=0,pe=H.length,C=pe-1,Re=Q+1;Q<pe;Q++,C++,Re++)C===pe&&(C=0),Re===pe&&(Re=0),Y[Q]=ie(H[Q],H[C],H[Re]);let de=[],Me,Ke=Y.concat();for(let Q=0,pe=N.length;Q<pe;Q++){let C=N[Q];Me=[];for(let Re=0,ue=C.length,Ue=ue-1,ae=Re+1;Re<ue;Re++,Ue++,ae++)Ue===ue&&(Ue=0),ae===ue&&(ae=0),Me[Re]=ie(C[Re],C[Ue],C[ae]);de.push(Me),Ke=Ke.concat(Me)}for(let Q=0;Q<v;Q++){let pe=Q/v,C=f*Math.cos(pe*Math.PI/2),Re=y*Math.sin(pe*Math.PI/2)+_;for(let ue=0,Ue=H.length;ue<Ue;ue++){let ae=W(H[ue],Y[ue],Re);De(ae.x,ae.y,-C)}for(let ue=0,Ue=N.length;ue<Ue;ue++){let ae=N[ue];Me=de[ue];for(let Ge=0,Te=ae.length;Ge<Te;Ge++){let be=W(ae[Ge],Me[Ge],Re);De(be.x,be.y,-C)}}}let tt=y+_;for(let Q=0;Q<$;Q++){let pe=d?W(M[Q],Ke[Q],tt):M[Q];x?(b.copy(P.normals[0]).multiplyScalar(pe.x),T.copy(P.binormals[0]).multiplyScalar(pe.y),R.copy(g[0]).add(b).add(T),De(R.x,R.y,R.z)):De(pe.x,pe.y,0)}for(let Q=1;Q<=c;Q++)for(let pe=0;pe<$;pe++){let C=d?W(M[pe],Ke[pe],tt):M[pe];x?(b.copy(P.normals[Q]).multiplyScalar(C.x),T.copy(P.binormals[Q]).multiplyScalar(C.y),R.copy(g[Q]).add(b).add(T),De(R.x,R.y,R.z)):De(C.x,C.y,h/c*Q)}for(let Q=v-1;Q>=0;Q--){let pe=Q/v,C=f*Math.cos(pe*Math.PI/2),Re=y*Math.sin(pe*Math.PI/2)+_;for(let ue=0,Ue=H.length;ue<Ue;ue++){let ae=W(H[ue],Y[ue],Re);De(ae.x,ae.y,h+C)}for(let ue=0,Ue=N.length;ue<Ue;ue++){let ae=N[ue];Me=de[ue];for(let Ge=0,Te=ae.length;Ge<Te;Ge++){let be=W(ae[Ge],Me[Ge],Re);x?De(be.x,be.y+g[c-1].y,g[c-1].x+C):De(be.x,be.y,h+C)}}}J(),ce();function J(){let Q=i.length/3;if(d){let pe=0,C=$*pe;for(let Re=0;Re<j;Re++){let ue=k[Re];me(ue[2]+C,ue[1]+C,ue[0]+C)}pe=c+v*2,C=$*pe;for(let Re=0;Re<j;Re++){let ue=k[Re];me(ue[0]+C,ue[1]+C,ue[2]+C)}}else{for(let pe=0;pe<j;pe++){let C=k[pe];me(C[2],C[1],C[0])}for(let pe=0;pe<j;pe++){let C=k[pe];me(C[0]+$*c,C[1]+$*c,C[2]+$*c)}}n.addGroup(Q,i.length/3-Q,0)}function ce(){let Q=i.length/3,pe=0;ke(H,pe),pe+=H.length;for(let C=0,Re=N.length;C<Re;C++){let ue=N[C];ke(ue,pe),pe+=ue.length}n.addGroup(Q,i.length/3-Q,1)}function ke(Q,pe){let C=Q.length;for(;--C>=0;){let Re=C,ue=C-1;ue<0&&(ue=Q.length-1);for(let Ue=0,ae=c+v*2;Ue<ae;Ue++){let Ge=$*Ue,Te=$*(Ue+1),be=pe+Re+Ge,A=pe+ue+Ge,w=pe+ue+Te,z=pe+Re+Te;Ye(be,A,w,z)}}}function De(Q,pe,C){l.push(Q),l.push(pe),l.push(C)}function me(Q,pe,C){nt(Q),nt(pe),nt(C);let Re=i.length/3,ue=m.generateTopUV(n,i,Re-3,Re-2,Re-1);Je(ue[0]),Je(ue[1]),Je(ue[2])}function Ye(Q,pe,C,Re){nt(Q),nt(pe),nt(Re),nt(pe),nt(C),nt(Re);let ue=i.length/3,Ue=m.generateSideWallUV(n,i,ue-6,ue-3,ue-2,ue-1);Je(Ue[0]),Je(Ue[1]),Je(Ue[3]),Je(Ue[1]),Je(Ue[2]),Je(Ue[3])}function nt(Q){i.push(l[Q*3+0]),i.push(l[Q*3+1]),i.push(l[Q*3+2])}function Je(Q){a.push(Q.x),a.push(Q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes,n=this.parameters.options;return gC(r,n,t)}static fromJSON(t,r){let n=[];for(let a=0,s=t.shapes.length;a<s;a++){let o=r[t.shapes[a]];n.push(o)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Hf[i.type]().fromJSON(i)),new W1(n,t.options)}},mC={generateTopUV:function(e,t,r,n,i){let a=t[r*3],s=t[r*3+1],o=t[n*3],l=t[n*3+1],u=t[i*3],c=t[i*3+1];return[new ne(a,s),new ne(o,l),new ne(u,c)]},generateSideWallUV:function(e,t,r,n,i,a){let s=t[r*3],o=t[r*3+1],l=t[r*3+2],u=t[n*3],c=t[n*3+1],h=t[n*3+2],d=t[i*3],f=t[i*3+1],y=t[i*3+2],_=t[a*3],v=t[a*3+1],p=t[a*3+2];return Math.abs(o-c)<Math.abs(s-u)?[new ne(s,1-l),new ne(u,1-h),new ne(d,1-y),new ne(_,1-p)]:[new ne(o,1-l),new ne(c,1-h),new ne(f,1-y),new ne(v,1-p)]}};function gC(e,t,r){if(r.shapes=[],Array.isArray(e))for(let n=0,i=e.length;n<i;n++){let a=e[n];r.shapes.push(a.uuid)}else r.shapes.push(e.uuid);return r.options=Object.assign({},t),t.extrudePath!==void 0&&(r.options.extrudePath=t.extrudePath.toJSON()),r}var Ry=class X1 extends KA{constructor(t=1,r=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,a,t,r),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:r}}static fromJSON(t){return new X1(t.radius,t.detail)}},yc=class j1 extends tr{constructor(t=new mn([new ne(0,.5),new ne(-.5,-.5),new ne(.5,-.5)]),r=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:r};let n=[],i=[],a=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)u(t);else for(let c=0;c<t.length;c++)u(t[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new vt(i,3)),this.setAttribute("normal",new vt(a,3)),this.setAttribute("uv",new vt(s,2));function u(c){let h=i.length/3,d=c.extractPoints(r),f=d.shape,y=d.holes;Ds.isClockWise(f)===!1&&(f=f.reverse());for(let v=0,p=y.length;v<p;v++){let m=y[v];Ds.isClockWise(m)===!0&&(y[v]=m.reverse())}let _=Ds.triangulateShape(f,y);for(let v=0,p=y.length;v<p;v++){let m=y[v];f=f.concat(m)}for(let v=0,p=f.length;v<p;v++){let m=f[v];i.push(m.x,m.y,0),a.push(0,0,1),s.push(m.x,m.y)}for(let v=0,p=_.length;v<p;v++){let m=_[v],g=m[0]+h,x=m[1]+h,P=m[2]+h;n.push(g,x,P),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),r=this.parameters.shapes;return vC(r,t)}static fromJSON(t,r){let n=[];for(let i=0,a=t.shapes.length;i<a;i++){let s=r[t.shapes[i]];n.push(s)}return new j1(n,t.curveSegments)}};function vC(e,t){if(t.shapes=[],Array.isArray(e))for(let r=0,n=e.length;r<n;r++){let i=e[r];t.shapes.push(i.uuid)}else t.shapes.push(e.uuid);return t}var Ui=class $1 extends tr{constructor(t=1,r=32,n=16,i=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:r,heightSegments:n,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},r=Math.max(3,Math.floor(r)),n=Math.max(2,Math.floor(n));let l=Math.min(s+o,Math.PI),u=0,c=[],h=new L,d=new L,f=[],y=[],_=[],v=[];for(let p=0;p<=n;p++){let m=[],g=p/n,x=0;p===0&&s===0?x=.5/r:p===n&&l===Math.PI&&(x=-.5/r);for(let P=0;P<=r;P++){let T=P/r;h.x=-t*Math.cos(i+T*a)*Math.sin(s+g*o),h.y=t*Math.cos(s+g*o),h.z=t*Math.sin(i+T*a)*Math.sin(s+g*o),y.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),v.push(T+x,1-g),m.push(u++)}c.push(m)}for(let p=0;p<n;p++)for(let m=0;m<r;m++){let g=c[p][m+1],x=c[p][m],P=c[p+1][m],T=c[p+1][m+1];(p!==0||s>0)&&f.push(g,x,T),(p!==n-1||l<Math.PI)&&f.push(x,P,T)}this.setIndex(f),this.setAttribute("position",new vt(y,3)),this.setAttribute("normal",new vt(_,3)),this.setAttribute("uv",new vt(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $1(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Py=class Y1 extends tr{constructor(t=1,r=.4,n=12,i=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:r,radialSegments:n,tubularSegments:i,arc:a},n=Math.floor(n),i=Math.floor(i);let s=[],o=[],l=[],u=[],c=new L,h=new L,d=new L;for(let f=0;f<=n;f++)for(let y=0;y<=i;y++){let _=y/i*a,v=f/n*Math.PI*2;h.x=(t+r*Math.cos(v))*Math.cos(_),h.y=(t+r*Math.cos(v))*Math.sin(_),h.z=r*Math.sin(v),o.push(h.x,h.y,h.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(h,c).normalize(),l.push(d.x,d.y,d.z),u.push(y/i),u.push(f/n)}for(let f=1;f<=n;f++)for(let y=1;y<=i;y++){let _=(i+1)*f+y-1,v=(i+1)*(f-1)+y-1,p=(i+1)*(f-1)+y,m=(i+1)*f+y;s.push(_,v,m),s.push(v,p,m)}this.setIndex(s),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Y1(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},_C=class extends sr{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}},mr=class extends Sa{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e1,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yC=class extends mr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function xc(e,t,r){return!e||!r&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function xC(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Bc=class{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let a;r:{n:if(!(e<n)){for(let s=r+2;;){if(n===void 0){if(e<i)break n;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===s)break;if(i=n,n=t[++r],e<n)break t}a=t.length;break r}if(!(e>=i)){let s=t[1];e<s&&(r=2,i=s);for(let o=r-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===o)break;if(n=i,i=t[--r-1],e>=i)break t}a=r,r=0;break r}break e}for(;r<a;){let s=r+a>>>1;e<t[s]?a=s:r=s+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let a=0;a!==n;++a)t[a]=r[i+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},SC=class extends Bc{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:S_,endingEnd:S_}}intervalChanged_(e,t,r){let n=this.parameterPositions,i=e-2,a=e+1,s=n[i],o=n[a];if(s===void 0)switch(this.getSettings_().endingStart){case M_:i=e,s=2*t-r;break;case w_:i=n.length-2,s=t+n[i]-n[i+1];break;default:i=e,s=r}if(o===void 0)switch(this.getSettings_().endingEnd){case M_:a=e,o=2*r-t;break;case w_:a=1,o=r+n[1]-n[0];break;default:a=e-1,o=t}let l=(r-t)*.5,u=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-r),this._offsetPrev=i*u,this._offsetNext=a*u}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=this._offsetPrev,c=this._offsetNext,h=this._weightPrev,d=this._weightNext,f=(r-t)/(n-t),y=f*f,_=y*f,v=-h*_+2*h*y-h*f,p=(1+h)*_+(-1.5-2*h)*y+(-.5+h)*f+1,m=(-1-d)*_+(1.5+d)*y+.5*f,g=d*_-d*y;for(let x=0;x!==s;++x)i[x]=v*a[u+x]+p*a[l+x]+m*a[o+x]+g*a[c+x];return i}},MC=class extends Bc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,u=(r-t)/(n-t),c=1-u;for(let h=0;h!==s;++h)i[h]=a[l+h]*c+a[o+h]*u;return i}},wC=class extends Bc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}},ai=class{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=xc(t,this.TimeBufferType),this.values=xc(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:xc(e.times,Array),values:xc(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new wC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new MC(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new SC(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nc:t=this.InterpolantFactoryMethodDiscrete;break;case If:t=this.InterpolantFactoryMethodLinear;break;case dp:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nc;case this.InterpolantFactoryMethodLinear:return If;case this.InterpolantFactoryMethodSmooth:return dp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e}return this}trim(e,t){let r=this.times,n=r.length,i=0,a=n-1;for(;i!==n&&r[i]<e;)++i;for(;a!==-1&&r[a]>t;)--a;if(++a,i!==0||a!==n){i>=a&&(a=Math.max(a,1),i=a-1);let s=this.getValueSize();this.times=r.slice(i,a),this.values=this.values.slice(i*s,a*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,n=this.values,i=r.length;i===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let s=0;s!==i;s++){let o=r[s];if(typeof o=="number"&&isNaN(o)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(a!==null&&a>o){console.error("THREE.KeyframeTrack: Out of order keys.",this,s,o,a),e=!1;break}a=o}if(n!==void 0&&xC(n))for(let s=0,o=n.length;s!==o;++s){let l=n[s];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===dp,i=e.length-1,a=1;for(let s=1;s<i;++s){let o=!1,l=e[s],u=e[s+1];if(l!==u&&(s!==1||l!==e[0]))if(n)o=!0;else{let c=s*r,h=c-r,d=c+r;for(let f=0;f!==r;++f){let y=t[c+f];if(y!==t[h+f]||y!==t[d+f]){o=!0;break}}}if(o){if(s!==a){e[a]=e[s];let c=s*r,h=a*r;for(let d=0;d!==r;++d)t[h+d]=t[c+d]}++a}}if(i>0){e[a]=e[i];for(let s=i*r,o=a*r,l=0;l!==r;++l)t[o+l]=t[s+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=If;var fl=class extends ai{constructor(e,t,r){super(e,t,r)}};fl.prototype.ValueTypeName="bool";fl.prototype.ValueBufferType=Array;fl.prototype.DefaultInterpolation=Nc;fl.prototype.InterpolantFactoryMethodLinear=void 0;fl.prototype.InterpolantFactoryMethodSmooth=void 0;var EC=class extends ai{};EC.prototype.ValueTypeName="color";var TC=class extends ai{};TC.prototype.ValueTypeName="number";var bC=class extends Bc{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,s=this.valueSize,o=(r-t)/(n-t),l=e*s;for(let u=l+s;l!==u;l+=4)Hs.slerpFlat(i,0,a,l-s,a,l,o);return i}},q1=class extends ai{InterpolantFactoryMethodLinear(e){return new bC(this.times,this.values,this.getValueSize(),e)}};q1.prototype.ValueTypeName="quaternion";q1.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends ai{constructor(e,t,r){super(e,t,r)}};ml.prototype.ValueTypeName="string";ml.prototype.ValueBufferType=Array;ml.prototype.DefaultInterpolation=Nc;ml.prototype.InterpolantFactoryMethodLinear=void 0;ml.prototype.InterpolantFactoryMethodSmooth=void 0;var AC=class extends ai{};AC.prototype.ValueTypeName="vector";var CC=class{constructor(e,t,r){let n=this,i=!1,a=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){s++,i===!1&&n.onStart!==void 0&&n.onStart(u,a,s),i=!0},this.itemEnd=function(u){a++,n.onProgress!==void 0&&n.onProgress(u,a,s),a===s&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(u){n.onError!==void 0&&n.onError(u)},this.resolveURL=function(u){return o?o(u):u},this.setURLModifier=function(u){return o=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){let c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,h=l.length;c<h;c+=2){let d=l[c],f=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return f}return null}}},RC=new CC,PC=class{constructor(e){this.manager=e!==void 0?e:RC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};PC.DEFAULT_MATERIAL_NAME="__DEFAULT";var om=class extends er{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},NC=class extends om{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(er.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},$p=new bt,Ny=new L,Ly=new L,J1=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rm,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,r=this.matrix;Ny.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ny),Ly.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ly),t.updateMatrixWorld(),$p.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($p),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply($p)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dy=new bt,rl=new L,Yp=new L,LC=class extends J1{constructor(){super(new Xr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){let r=this.camera,n=this.matrix,i=e.distance||r.far;i!==r.far&&(r.far=i,r.updateProjectionMatrix()),rl.setFromMatrixPosition(e.matrixWorld),r.position.copy(rl),Yp.copy(r.position),Yp.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Yp),r.updateMatrixWorld(),n.makeTranslation(-rl.x,-rl.y,-rl.z),Dy.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dy)}},Ss=class extends om{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new LC}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},DC=class extends J1{constructor(){super(new nm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},IC=class extends om{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(er.DEFAULT_UP),this.updateMatrix(),this.target=new er,this.shadow=new DC}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},UC=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Iy(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Iy();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Iy(){return performance.now()}var lm="\\[\\]\\.:\\/",OC=new RegExp("["+lm+"]","g"),um="[^"+lm+"]",kC="[^"+lm.replace("\\.","")+"]",zC=/((?:WC+[\/:])*)/.source.replace("WC",um),FC=/(WCOD+)?/.source.replace("WCOD",kC),BC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",um),VC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",um),HC=new RegExp("^"+zC+FC+BC+VC+"$"),GC=["material","materials","bones","map"],WC=class{constructor(e,t,r){let n=r||zt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},zt=class Ts{constructor(t,r,n){this.path=r,this.parsedPath=n||Ts.parseTrackName(r),this.node=Ts.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,r,n){return t&&t.isAnimationObjectGroup?new Ts.Composite(t,r,n):new Ts(t,r,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(OC,"")}static parseTrackName(t){let r=HC.exec(t);if(r===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:r[2],objectName:r[3],objectIndex:r[4],propertyName:r[5],propertyIndex:r[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let a=n.nodeName.substring(i+1);GC.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,r){if(r===void 0||r===""||r==="."||r===-1||r===t.name||r===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(r);if(n!==void 0)return n}if(t.children){let n=function(a){for(let s=0;s<a.length;s++){let o=a[s];if(o.name===r||o.uuid===r)return o;let l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,r){t[r]=this.targetObject[this.propertyName]}_getValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)t[r++]=n[i]}_getValue_arrayElement(t,r){t[r]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,r){this.resolvedProperty.toArray(t,r)}_setValue_direct(t,r){this.targetObject[this.propertyName]=t[r]}_setValue_direct_setNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,r){this.targetObject[this.propertyName]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++]}_setValue_array_setNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,r){let n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=t[r++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,r){this.resolvedProperty[this.propertyIndex]=t[r]}_setValue_arrayElement_setNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty[this.propertyIndex]=t[r],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,r){this.resolvedProperty.fromArray(t,r)}_setValue_fromArray_setNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,r){this.resolvedProperty.fromArray(t,r),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,r){this.bind(),this.getValue(t,r)}_setValue_unbound(t,r){this.bind(),this.setValue(t,r)}bind(){let t=this.node,r=this.parsedPath,n=r.objectName,i=r.propertyName,a=r.propertyIndex;if(t||(t=Ts.findNode(this.rootNode,r.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let u=r.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===u){u=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let s=t[i];if(s===void 0){let u=r.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};zt.Composite=WC;zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};zt.prototype.GetterByBindingType=[zt.prototype._getValue_direct,zt.prototype._getValue_array,zt.prototype._getValue_arrayElement,zt.prototype._getValue_toArray];zt.prototype.SetterByBindingTypeAndVersioning=[[zt.prototype._setValue_direct,zt.prototype._setValue_direct_setNeedsUpdate,zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_array,zt.prototype._setValue_array_setNeedsUpdate,zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_arrayElement,zt.prototype._setValue_arrayElement_setNeedsUpdate,zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[zt.prototype._setValue_fromArray,zt.prototype._setValue_fromArray_setNeedsUpdate,zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var NR=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var K1={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Xs=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},XC=new nm(-1,1,1,-1,0,1),jC=class extends tr{constructor(){super(),this.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new vt([0,2,0,0,2,0],2))}},$C=new jC,cm=class{constructor(e){this._mesh=new He($C,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,XC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Q1=class extends Xs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof sr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=cl.clone(e.uniforms),this.material=new sr({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new cm(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Uy=class extends Xs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),i.buffers.stencil.setClear(s),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}},YC=class extends Xs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},qC=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let r=e.getSize(new ne);this._width=r.width,this._height=r.height,t=new vn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Q1(K1),this.copyPass.material.blending=Zn,this.clock=new UC}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let n=0,i=this.passes.length;n<i;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let s=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),o.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Uy!==void 0&&(a instanceof Uy?r=!0:a instanceof YC&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},JC=class extends Xs{constructor(e,t,r=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new je}render(e,t,r){let n=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}},KC={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},hm=class jf extends Xs{constructor(t,r,n,i){super(),this.strength=r!==void 0?r:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new ne(t.x,t.y):new ne(256,256),this.clearColor=new je(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new vn(a,s,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new vn(a,s,{type:ei});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new vn(a,s,{type:ei});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),a=Math.round(a/2),s=Math.round(s/2)}let o=KC;this.highPassUniforms=cl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new sr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ne(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=r,this.compositeMaterial.uniforms.bloomRadius.value=.1;let u=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=u,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let c=K1;this.copyUniforms=cl.clone(c.uniforms),this.blendMaterial=new sr({uniforms:this.copyUniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader,blending:Ps,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new je,this.oldClearAlpha=1,this.basic=new Kn,this.fsQuad=new cm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,r){let n=Math.round(t/2),i=Math.round(r/2);this.renderTargetBright.setSize(n,i);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,i),this.renderTargetsVertical[a].setSize(n,i),this.separableBlurMaterials[a].uniforms.invSize.value=new ne(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,r,n,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=jf.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=jf.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=s}getSeperableBlurMaterial(t){let r=[];for(let n=0;n<t;n++)r.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new sr({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ne(.5,.5)},direction:{value:new ne(.5,.5)},gaussianCoefficients:{value:r}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new sr({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};hm.BlurDirectionX=new ne(1,0);hm.BlurDirectionY=new ne(0,1);var QC={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},ZC=class extends Xs{constructor(){super();let e=QC;this.uniforms=cl.clone(e.uniforms),this.material=new _C({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new cm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},dt.getTransfer(this._outputColorSpace)===gt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fy?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===By?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vy?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Yf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hy?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gy&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},eR=14921803,Ic=new URLSearchParams(location.search),Uc=window.__MAXQ===!0||Ic.has("max"),Ms=Uc||!Ic.has("lite")&&(Ic.has("fid")||(navigator.hardwareConcurrency||4)>=6&&(navigator.deviceMemory||4)>=4),al=(e,t=0,r=1)=>Math.min(r,Math.max(t,e)),$f=e=>e*e*(3-2*e),wr=(e,t,r)=>$f(al((e-t)/(r-t)));function ni(e,t,r,n,i=!0){let a=document.createElement("canvas");a.width=e,a.height=t;let s=a.getContext("2d");r(s,e,t);let o=new kA(a);return i&&(o.colorSpace=Wr),o.wrapS=o.wrapT=Pc,n&&o.repeat.set(n[0],n[1]),o.anisotropy=4,o}function tR(e="rgba(255,240,190,1)",t="rgba(255,190,90,.45)"){return ni(128,128,r=>{let n=r.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,e),n.addColorStop(.25,t),n.addColorStop(1,"rgba(255,150,40,0)"),r.fillStyle=n,r.fillRect(0,0,128,128)})}function rR(){return ni(256,256,(e,t,r)=>{e.fillStyle="#6a2434",e.fillRect(0,0,t,r);for(let n=0;n<1800;n++)e.fillStyle=`rgba(${Math.random()<.5?"255,200,150":"30,0,10"},${Math.random()*.07})`,e.fillRect(Math.random()*t,Math.random()*r,2+Math.random()*6,2+Math.random()*6);e.strokeStyle="rgba(20,0,8,.55)",e.lineWidth=3;for(let n=0;n<=r;n+=64)e.beginPath(),e.moveTo(0,n),e.lineTo(t,n),e.stroke();for(let n=0;n<4;n++)for(let i=n%2*64;i<=t;i+=128)e.beginPath(),e.moveTo(i,n*64),e.lineTo(i,n*64+64),e.stroke();e.strokeStyle="rgba(227,176,75,.22)",e.lineWidth=1.5;for(let n=0;n<4;n++)for(let i=0;i<2;i++)e.strokeRect(i*128+8+n%2*64%128*0,n*64+8,112,48)})}function nR(){return ni(256,256,(e,t,r)=>{e.fillStyle="#2a1018",e.fillRect(0,0,t,r);for(let n=0;n<2200;n++)e.fillStyle=`rgba(255,190,140,${Math.random()*.05})`,e.fillRect(Math.random()*t,Math.random()*r,3,3);e.strokeStyle="rgba(227,176,75,.45)",e.lineWidth=2,e.strokeRect(2,2,t-4,r-4),e.strokeStyle="rgba(227,176,75,.2)",e.lineWidth=1.5,e.beginPath(),e.moveTo(t/2,24),e.lineTo(t-24,r/2),e.lineTo(t/2,r-24),e.lineTo(24,r/2),e.closePath(),e.stroke(),e.beginPath(),e.arc(t/2,r/2,30,0,7),e.stroke()})}function iR(){return ni(256,256,(e,t,r)=>{e.fillStyle="#7a0f22",e.fillRect(0,0,t,r),e.fillStyle="#e3b04b",e.fillRect(0,0,14,r),e.fillRect(t-14,0,14,r),e.fillStyle="#4a0612",e.fillRect(14,0,10,r),e.fillRect(t-24,0,10,r),e.strokeStyle="#e3b04b",e.lineWidth=2,e.save(),e.translate(t/2,r/2);for(let n=0;n<12;n++)e.rotate(Math.PI/6),e.beginPath(),e.ellipse(0,-44,14,34,0,0,7),e.stroke();e.beginPath(),e.arc(0,0,14,0,7),e.fillStyle="#f4c75a",e.fill(),e.restore()})}function aR(){return ni(256,512,(e,t,r)=>{let n=e.createLinearGradient(0,0,t,0);n.addColorStop(0,"#4a0a16"),n.addColorStop(.5,"#6d1424"),n.addColorStop(1,"#4a0a16"),e.fillStyle=n,e.fillRect(0,0,t,r),e.strokeStyle="#e3b04b",e.lineWidth=6,e.strokeRect(8,8,t-16,r-16),e.lineWidth=2,e.strokeRect(22,22,t-44,r-44);for(let i=0;i<4;i++)for(let a=0;a<2;a++){let s=34+a*100,o=40+i*118;e.strokeStyle="rgba(227,176,75,.9)",e.lineWidth=2,e.strokeRect(s,o,88,104),e.beginPath(),e.moveTo(s+44,o+12),e.lineTo(s+76,o+52),e.lineTo(s+44,o+92),e.lineTo(s+12,o+52),e.closePath(),e.stroke(),e.fillStyle="#f4c75a",e.beginPath(),e.arc(s+44,o+52,7,0,7),e.fill();for(let[l,u]of[[6,6],[82,6],[6,98],[82,98]])e.beginPath(),e.arc(s+l,o+u,3,0,7),e.fill()}})}function sR(){return ni(128,128,(e,t,r)=>{e.fillStyle="#1a0408",e.fillRect(0,0,t,r),e.strokeStyle="#ffd98a",e.lineWidth=5;for(let n=0;n<=t;n+=64)for(let i=0;i<=r;i+=64)e.beginPath(),e.arc(n,i,32,0,7),e.stroke(),e.beginPath(),e.arc(n+32,i+32,32,0,7),e.stroke()},[6,3])}function qn(e,t,r,n=new mn,i=!1){let a=e/2;return n.moveTo(-a,0),n.lineTo(-a,t),n.quadraticCurveTo(-a,t+r*.78,0,t+r),n.quadraticCurveTo(a,t+r*.78,a,t),n.lineTo(a,0),n.lineTo(-a,0),n}function Sc(e,t=20){return Uc&&(t=Math.round(t*2.4)),new JA(e.map(([r,n])=>new ne(r,n)),t)}function Z1(e,t,r={}){let n=Math.min(window.innerWidth,screen.width||999)<820,i=new LA({canvas:e,antialias:!n,alpha:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio||1,Uc?2.5:n?1.5:2)),i.toneMapping=Yf,i.toneMappingExposure=1.15;let a=new gy;a.background=new je(1180684),a.fog=new DA(1771283,.0105);let s=new Xr(55,1,.3,700),o=[],l=G=>(o.push(G),G),u=l(new sr({side:Tr,depthWrite:!1,fog:!1,uniforms:{top:{value:new je(656416)},mid:{value:new je(4853808)},hor:{value:new je(15764026)}},vertexShader:"varying vec3 v; void main(){ v=normalize(position); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec3 v; uniform vec3 top,mid,hor; void main(){ float h=clamp(v.y,0.,1.); vec3 c=mix(hor,mid,smoothstep(0.,.22,h)); c=mix(c,top,smoothstep(.15,.7,h)); gl_FragColor=vec4(c,1.); }"})),c=new He(l(new Ui(400,24,16)),u);a.add(c);{let G=new zf(i),re=new gy;re.add(new He(new Ui(50,16,12),u));let le=new He(new Ui(8,8,8),new Kn({color:16760944}));le.position.set(0,10,40),re.add(le);let ve=le.clone();ve.position.set(0,12,-40),re.add(ve),a.environment=G.fromScene(re,.04).texture,a.environmentIntensity=.55,G.dispose()}{let G=new Float32Array(1260);for(let le=0;le<420;le++){let ve=Math.random()*Math.PI*2,fe=Math.random()*1.2+.18,ze=380;G[le*3]=Math.cos(ve)*Math.cos(fe)*ze,G[le*3+1]=Math.sin(fe)*ze,G[le*3+2]=Math.sin(ve)*Math.cos(fe)*ze}let re=l(new tr);re.setAttribute("position",new vr(G,3)),a.add(new Gp(re,l(new Bf({color:16773583,size:1.7,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.85,depthWrite:!1}))))}let h=l(tR()),d=(G,re=1)=>l(new R1({map:h,color:G,blending:Ps,depthWrite:!1,transparent:!0,opacity:re,fog:!1})),f=new ys(d(16771522,.9));f.scale.set(40,40,1),f.position.set(-75,78,-240),a.add(f);let y=new He(l(new Ui(7,20,14)),l(new Kn({color:16774366,fog:!1})));y.position.copy(f.position),a.add(y);let _=l(rR()),v=l(new mr({map:_,roughness:.82,metalness:.02,color:16766664})),p=l(new mr({color:13146744,roughness:.75,metalness:.02})),m=l(ni(128,128,(G,re,le)=>{G.fillStyle="#777",G.fillRect(0,0,re,le);for(let ve=0;ve<1400;ve++){let fe=90+Math.random()*110;G.fillStyle=`rgba(${fe},${fe},${fe},.5)`,G.fillRect(Math.random()*re,Math.random()*le,1+Math.random()*3,1+Math.random()*3)}},[4,4],!1)),g=l(new mr({color:eR,roughness:.55,roughnessMap:m,bumpMap:m,bumpScale:.6,metalness:.95,envMapIntensity:1.3})),x=l(new mr({color:12158256,roughness:.7,roughnessMap:m,metalness:.85})),P=l(new mr({color:15851456,roughness:.6,metalness:.05})),T=l(new Kn({color:16761960,fog:!1})),b=l(new Kn({color:16762976,fog:!1}));l(nR()).repeat.set(36,36);let R=new He(l(new Oi(180,180)),l(new mr({roughness:.7,metalness:.1,color:3420218})));R.rotation.x=-Math.PI/2,R.position.set(0,0,-20),a.add(R);let E=l(iR());E.repeat.set(1,26);let M=new He(l(new Oi(4.6,80)),l(new yC({map:E,roughness:.92,sheen:1,sheenColor:new je(16747104),sheenRoughness:.45})));M.rotation.x=-Math.PI/2,M.position.set(0,.02,2),a.add(M);let N=6.2,k=5,H=2.5,W=2.6,$=9.6,j=l(ni(256,256,(G,re,le)=>{G.fillStyle="#7a1620",G.fillRect(0,0,re,le);let ve=32,fe=64;for(let ze=0;ze<le/ve;ze++)for(let Fe=-1;Fe<re/fe+1;Fe++){let $e=Fe*fe+(ze%2?fe/2:0),Oe=.8+Math.random()*.4;G.fillStyle=`rgb(${Math.round(150*Oe)},${Math.round(34*Oe)},${Math.round(40*Oe)})`,G.fillRect($e+2,ze*ve+2,fe-4,ve-4)}for(let ze=0;ze<1800;ze++)G.fillStyle=`rgba(${Math.random()<.5?"255,200,170":"40,0,0"},${Math.random()*.1})`,G.fillRect(Math.random()*re,Math.random()*le,1+Math.random()*4,1+Math.random()*4)}));j.repeat.set(1/8,1/8);let ie=l(ni(256,256,(G,re,le)=>{G.fillStyle="#222",G.fillRect(0,0,re,le);for(let ve=0;ve<8;ve++)for(let fe=-1;fe<5;fe++){let ze=fe*64+(ve%2?32:0),Fe=150+Math.random()*90;G.fillStyle=`rgb(${Fe},${Fe},${Fe})`,G.fillRect(ze+3,ve*32+3,58,26)}for(let ve=0;ve<2500;ve++){let fe=Math.random()*255;G.fillStyle=`rgba(${fe},${fe},${fe},.18)`,G.fillRect(Math.random()*re,Math.random()*le,2,2)}},null,!1));ie.repeat.set(1/8,1/8);let Y=l(new mr({map:j,bumpMap:ie,bumpScale:2.2,roughness:.82,metalness:.02})),de=l(new mr({color:3115564,roughness:.6,emissive:666120,emissiveIntensity:.5,side:bn})),Me=l(new mr({color:16751124,roughness:.6,emissive:6957568,emissiveIntensity:.7})),Ke=l(new mr({color:11817758,roughness:.8})),tt=l(Sc([[.01,0],[.16,.04],[.28,.26],[.31,.5],[.22,.74],[.16,.84],[.26,.92],[.28,.98]],14)),J=l(new Ui(.2,12,9)),ce=l(new tl(.1,.55,4)),ke=l(new tl(.05,.3,6));function De(G,re,le,ve=1){let fe=new As;fe.position.set(G,re,le),fe.scale.setScalar(ve),fe.add(new He(tt,g));for(let $e=0;$e<7;$e++){let Oe=$e/7*Math.PI*2,We=new He(ce,de);We.position.set(Math.cos(Oe)*.2,1.15,Math.sin(Oe)*.2),We.rotation.set(Math.sin(Oe)*.5,0,-Math.cos(Oe)*.5),fe.add(We)}let ze=new He(J,x);ze.position.y=1.08,ze.scale.y=1.2,fe.add(ze);let Fe=new He(ke,g);return Fe.position.y=1.5,fe.add(Fe),a.add(fe),fe}function me(G,re,le,ve,fe,ze,Fe=.55,$e=.78){let Oe=ve,We=fe,S=re;for(let D=0;D<ze;D++){let V=new He(l(new gr(Oe,Fe,We)),D%2?g:Y);V.position.set(G,S+Fe/2,le),a.add(V);let B=new He(l(new gr(Oe+.25,.1,We+.25)),x);B.position.set(G,S+.05,le),a.add(B),S+=Fe,Oe*=$e,We*=$e}return S}function Ye(G,re,le,ve,fe){let ze=new He(l(new _c(qn(ve+.5,fe,fe*.4,new mn),{depth:.2,bevelEnabled:!1,curveSegments:8})),g);ze.position.set(G,re,le),a.add(ze);let Fe=new He(l(new yc(qn(ve,fe-.15,fe*.34,new mn),8)),T);Fe.position.set(G,re+.02,le+.22),a.add(Fe);let $e=new He(l(new gr(ve+.9,.18,.7)),g);$e.position.set(G,re-.05,le+.3),a.add($e)}{let G=new mn;G.moveTo(-64/2,0),G.lineTo(64/2,0),G.lineTo(64/2,$),G.lineTo(-64/2,$),G.lineTo(-64/2,0),G.holes.push(qn(N,k,H,new ll));let re=new He(l(new _c(G,{depth:W,bevelEnabled:!1,curveSegments:12})),Y);re.position.z=-W,a.add(re);let le=qn(N+1.5,k+.1,H+.55,new mn);le.holes.push(qn(N,k,H,new ll));let ve=new He(l(new _c(le,{depth:.35,bevelEnabled:!1,curveSegments:12})),g);ve.position.z=.02,a.add(ve);for(let[Oe,We]of[[$-.1,.5],[$-1.1,.18]]){let S=new He(l(new gr(64,We,.55)),g);S.position.set(0,Oe,.12),a.add(S)}{let Oe=N/2+1,We=64/2-Oe;for(let S of[-1,1]){let D=new He(l(new gr(We,.2,.55)),g);D.position.set(S*(Oe+We/2),1.2,.12),a.add(D)}}let fe=new ha(l(new gr(.34,.42,.4)),x,60),ze=new er,Fe=0;for(let Oe=-28;Oe<=28;Oe+=1)Math.abs(Oe)<4.2||(ze.position.set(Oe,$-.55,.3),ze.updateMatrix(),fe.setMatrixAt(Fe++,ze.matrix));fe.count=Fe,a.add(fe);let $e=new ha(l(new tl(.34,.85,4)),g,70);Fe=0;for(let Oe=-30;Oe<=30;Oe+=.9)ze.position.set(Oe,$+.6,.12),ze.rotation.y=Math.PI/4,ze.updateMatrix(),$e.setMatrixAt(Fe++,ze.matrix);$e.count=Fe,a.add($e);for(let Oe of[-1,1])for(let We of[7.5,11.5,16,21])Ye(Oe*We,3.2,0,1.5,2.6);for(let Oe of[-1,1])for(let We of[7.5,11.5,16,21]){let S=new He(l(new yc(qn(1,1.2,.5,new mn),6)),T);S.position.set(Oe*We,6.7,.02),a.add(S)}}for(let G of[-1,1]){let re=G*13.5,le=new He(l(new gr(4.2,5.2,4.6)),Y);le.position.set(re,$+2.6,-.3),a.add(le);let ve=new He(l(new gr(4.6,.3,5)),g);ve.position.set(re,$+.3,-.3),a.add(ve),Ye(re,$+1.6,2,1.2,2.2);let fe=me(re,$+5.2,-.3,4.8,5.2,4,.5,.74);De(re,fe,-.3,1.5);for(let ze of[-1,1])for(let Fe of[-1,1])De(re+ze*2.1,$+5.2,-.3+Fe*2.3,.5)}{let G=[.7,3.6],re=l(Sc([[.42,0],[.5,.2],[.3,.6],[.26,.9],[.24,6],[.3,7-.7],[.5,7-.4],[.55,7]],14));for(let ye of[-1,1])for(let Ae of G){let rt=new He(re,g);rt.position.set(ye*3.95,0,Ae),a.add(rt);let ct=new He(l(new Py(.3,.05,6,14)),x);ct.rotation.x=Math.PI/2,ct.position.set(ye*3.95,2.2,Ae),a.add(ct);let xt=ct.clone();xt.position.y=4.4,a.add(xt)}let le=new He(l(new gr(3.95*2+1.4,.5,.6)),g);for(let ye of G){let Ae=le.clone();Ae.position.set(0,7+.2,ye),a.add(Ae)}for(let ye of[-1,1]){let Ae=new He(l(new gr(.6,.5,G[1]-G[0]+1.2)),g);Ae.position.set(ye*3.95,7+.2,(G[0]+G[1])/2),a.add(Ae)}let ve=(G[0]+G[1])/2,fe=G[1]-G[0]+1.6,ze=me(0,7+.45,ve,3.95*2+1.8,fe,4,.5,.7);De(0,ze,ve,1.7);for(let ye of[-1,1])for(let Ae of G)De(ye*3.95,7+.45,Ae,.6);let Fe=l(new tl(.11,.52,4));Fe.translate(0,-.26,0),Fe.scale(1,1,.35);let $e=70,Oe=new ha(Fe,de,$e*2),We=new er,S=0,D=G[1]+.34;for(let ye=0;ye<$e;ye++){let Ae=-4.45+ye/($e-1)*8.9,rt=.28*Math.sin(ye/($e-1)*Math.PI*6)*0;We.position.set(Ae,7-.05+rt,D),We.rotation.set(0,0,ye%2?.1:-.1),We.scale.set(1,1+ye%3*.18,1),We.updateMatrix(),Oe.setMatrixAt(S++,We.matrix)}for(let ye=0;ye<$e;ye++){let Ae=-4.45+ye/($e-1)*8.9;We.position.set(Ae,7-.05,G[0]-.34),We.rotation.set(0,0,ye%2?.1:-.1),We.scale.set(1,1+ye%3*.18,1),We.updateMatrix(),Oe.setMatrixAt(S++,We.matrix)}Oe.count=S,a.add(Oe);let V=l(new Ry(.12,1)),B=13,U=8,Z=new ha(V,Me,B*U);S=0;let _e=[new je(16747036),new je(16757788),new je(16738832)];for(let ye=0;ye<B;ye++){let Ae=-4.25+ye/(B-1)*8.5,rt=1.3+ye%2*.9+Math.sin(ye*1.7)*.25;for(let ct=0;ct<U;ct++)We.position.set(Ae,7-.35-ct/(U-1)*rt,D+.06),We.rotation.set(ct,ye,0),We.scale.setScalar(ct===U-1?1.5:.95),We.updateMatrix(),Z.setMatrixAt(S,We.matrix),Z.setColorAt(S,_e[(ye+ct)%3]),S++}a.add(Z);let Pe=l(new Ui(.17,12,6,0,Math.PI*2,Math.PI/2,Math.PI/2));Pe.scale(1.3,.8,1.3);let Ie=[];for(let ye=4.6;ye<36;ye+=2.4)Ie.push(ye);let Qe=new ha(Pe,Ke,Ie.length*2);S=0,a.userData.diyaSprites=[];for(let ye of[-1,1])for(let Ae of Ie){We.position.set(ye*2.75,.04,Ae),We.rotation.set(Math.PI,0,0),We.scale.setScalar(1),We.updateMatrix(),Qe.setMatrixAt(S++,We.matrix);let rt=new ys(d(16754236,.9));rt.scale.set(.9,.9,1),rt.position.set(ye*2.75,.2,Ae),a.add(rt),a.userData.diyaSprites.push(rt)}a.add(Qe)}{let G=new He(l(new Oi(60,60)),l(new mr({color:1782560,roughness:1})));G.rotation.x=-Math.PI/2,G.position.set(0,.005,30),a.add(G)}{let G=n?70:120,re=new Float32Array(G*3);for(let ve=0;ve<G;ve++){let fe=-30+ve/(G-1)*60;re[ve*3]=fe,re[ve*3+1]=$-1.45-Math.abs(Math.sin(fe*.9))*.3,re[ve*3+2]=.55}let le=l(new tr);le.setAttribute("position",new vr(re,3)),a.add(new Gp(le,l(new Bf({color:16766090,size:7,sizeAttenuation:!1,map:h,transparent:!0,depthWrite:!1,blending:Ps,fog:!1}))))}let nt=new Ss(16758886,420,34,2);nt.position.set(-6,4,9),a.add(nt);let Je=new Ss(16758886,420,34,2);Je.position.set(9,4,9),a.add(Je);let Q=l(sR());{let G=new mn,re=N/2;G.moveTo(-re,k),G.quadraticCurveTo(-re,k+H*.78,0,k+H),G.quadraticCurveTo(re,k+H*.78,re,k),G.lineTo(-re,k);let le=l(new yc(G,12));{let fe=le.attributes.uv,ze=le.attributes.position;for(let Fe=0;Fe<fe.count;Fe++)fe.setXY(Fe,ze.getX(Fe)/1.6,ze.getY(Fe)/1.6)}let ve=new He(le,l(new Kn({map:Q,color:16760928,fog:!1})));ve.position.z=-.7,a.add(ve)}let pe=l(aR()),C=l(new mr({map:pe,roughness:.5,metalness:.35,emissive:2753544,emissiveIntensity:.5})),Re=N/2;function ue(G){let re=new As;re.position.set(G*N/2,0,-.9);let le=new He(l(new gr(Re,k,.3)),[p,p,p,p,C,C]);le.position.set(-G*Re/2,k/2,0),re.add(le);for(let ze=0;ze<2;ze++){let Fe=new He(l(new Py(.28,.06,8,20)),g);Fe.position.set(-G*(Re-.55),3.4+ze*0,.23),Fe.position.y=3.4,ze&&(Fe.position.z=-.23,Fe.rotation.y=Math.PI),re.add(Fe)}let ve=new He(l(new gr(Re,.25,.4)),g);ve.position.set(-G*Re/2,k-.2,0),re.add(ve);let fe=ve.clone();return fe.position.y=.3,re.add(fe),a.add(re),re}let Ue=ue(-1),ae=ue(1),Ge=34,Te=8.5,be=8.6,A=-W;{let G=l(new mr({map:_.clone(),roughness:.7,color:16764840}));G.map.needsUpdate=!0,G.map.repeat.set(7,3),l(G.map);for(let S of[-1,1]){let D=new He(l(new Oi(Ge,be)),G);D.position.set(S*Te,be/2,A-Ge/2),D.rotation.y=-S*Math.PI/2,a.add(D)}let re=new He(l(new Oi(Te*2,Ge)),l(new mr({color:4853792,roughness:.8,emissive:2755080})));re.rotation.x=Math.PI/2,re.position.set(0,be,A-Ge/2),a.add(re);let le=l(Sc([[.7,0],[.9,.3],[.55,.7],[.42,1.2],[.4,8.8],[.5,9.3],[.65,9.8],[.75,10.2]],14)),ve=l(new gr(Te*2,.5,.7));for(let S=0;S<6;S++){let D=A-4-S*5;for(let Pe of[-1,1]){let Ie=new He(le,S%2?x:g);Ie.scale.y=.78,Ie.position.set(Pe*5,0,D),a.add(Ie)}let V=new He(ve,x);V.position.set(0,be-.5,D),a.add(V);let B=new He(l(new Gf(.02,.02,2.2,4)),g);B.position.set(0,be-1.6,D),a.add(B);let U=new He(l(new Ui(.5,14,10)),b);U.position.set(0,be-3.2,D),a.add(U);let Z=new ys(d(16758874,.9));Z.scale.set(5,5,1),Z.position.copy(U.position),a.add(Z);let _e=new He(l(new tl(.62,.5,14)),g);_e.position.set(0,be-2.75,D),a.add(_e)}let fe=qn(5.6,5.5,3.2,new mn),ze=new He(l(new yc(fe,10)),l(new Kn({color:16767392,fog:!1})));ze.position.set(0,0,A-Ge+.05),a.add(ze);let Fe=new He(l(new Oi(Te*2,be)),G);Fe.position.set(0,be/2,A-Ge),a.add(Fe);let $e=new ys(d(16770728,1));$e.scale.set(26,26,1),$e.position.set(0,5.2,A-Ge+1),a.add($e),a.userData.endSun=$e;let Oe=qn(6.4,5.6,3.3,new mn);Oe.holes.push(qn(5.6,5.5,3.2,new ll));let We=new He(l(new _c(Oe,{depth:.4,bevelEnabled:!1,curveSegments:10})),g);We.position.set(0,0,A-Ge+.1),a.add(We)}let w=[],z=l(Sc([[.3,0],[.18,.4],[.1,1],[.08,3.4],[.2,3.8],[.45,4.2],[.5,4.5]],10)),K=l(new mr({color:16747036,roughness:.6,emissive:5906432,emissiveIntensity:.6})),te=l(new Ry(.13,1)),q=[];for(let G of[-1,1])for(let re=0;re<6;re++){let le=G*5.2,ve=7+re*6.5,fe=new He(z,g);fe.position.set(le,0,ve),a.add(fe);let ze=new He(l(new Ui(.22,10,8)),b);ze.scale.set(.8,1.5,.8),ze.position.set(le,4.85,ve),a.add(ze);let Fe=new ys(d(16753210,.95));Fe.scale.set(2.8,2.8,1),Fe.position.set(le,4.9,ve),a.add(Fe),w.push({fl:ze,sp:Fe,ph:Math.random()*6}),q.push([le,ve])}{let G=[],re=[];for(let $e of[-1,1])for(let Oe=0;Oe<5;Oe++){let We=new L($e*5.2,4.1,7+Oe*6.5),S=new L($e*5.2,4.1,7+(Oe+1)*6.5),D=We.clone().lerp(S,.5);D.y-=1.5,re.push(new I1(We,D,S))}let le=new ha(te,K,re.length*46),ve=new er,fe=0,ze=[new je(16747036),new je(16757788),new je(16738832)];for(let $e of re)for(let Oe=0;Oe<46;Oe++){let We=$e.getPoint(Oe/45);ve.position.copy(We),ve.position.x+=(Math.random()-.5)*.1,ve.position.y+=(Math.random()-.5)*.12,ve.scale.setScalar(.85+Math.random()*.5),ve.rotation.set(Math.random()*3,Math.random()*3,0),ve.updateMatrix(),le.setMatrixAt(fe,ve.matrix),le.setColorAt(fe,ze[fe%3]),fe++}a.add(le);for(let $e=0;$e<9;$e++){let Oe=-4.2+$e*1.05,We=1.2+$e%2*1.3+Math.sin($e)*.3,S=new He(l(new Gf(.025,.025,We,4)),K);S.position.set(Oe,k+H-1-We/2+.3-Math.abs(Oe)/4.2*1.5,.55),S.visible=!1}let Fe=new ha(te,K,81);fe=0;for(let $e=0;$e<9;$e++){let Oe=-3.1+$e*.775,We=k+.2+H*(1-Math.pow(Math.abs(Oe)/(N/2),2.2))*.9-.55,S=1.6+$e%2*.9;for(let D=0;D<9;D++)ve.position.set(Oe,We-D/8*S,.7),ve.scale.setScalar(1+(D===8?.6:0)),ve.rotation.set(D,$e,0),ve.updateMatrix(),Fe.setMatrixAt(fe,ve.matrix),Fe.setColorAt(fe,ze[($e+D)%3]),fe++}a.add(Fe)}let Be=n?140:260,xe=l(new sr({transparent:!0,depthWrite:!1,blending:Ps,uniforms:{t:{value:0},pr:{value:i.getPixelRatio()},map:{value:h}},vertexShader:"attribute vec4 a; uniform float t; uniform float pr; varying float al; void main(){ vec3 p=position; float ph=a.w; p.y=mod(p.y+t*a.x*.6+ph*8.,14.); p.x+=sin(t*.5*a.y+ph*20.)*1.4; p.z+=cos(t*.4*a.y+ph*11.)*1.4; vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv; gl_PointSize=a.z*pr*(220./-mv.z); al=smoothstep(0.,2.,p.y)*(1.-smoothstep(10.,14.,p.y))*(.55+.45*sin(t*2.+ph*40.)); }",fragmentShader:"uniform sampler2D map; varying float al; void main(){ vec4 c=texture2D(map,gl_PointCoord); gl_FragColor=vec4(c.rgb*1.4,c.a*al); }"}));{let G=new Float32Array(Be*3),re=new Float32Array(Be*4);for(let fe=0;fe<Be;fe++)G[fe*3]=(Math.random()-.5)*26,G[fe*3+1]=Math.random()*14,G[fe*3+2]=40-Math.random()*62,re[fe*4]=.5+Math.random(),re[fe*4+1]=.5+Math.random(),re[fe*4+2]=.35+Math.random()*.8,re[fe*4+3]=Math.random();let le=l(new tr);le.setAttribute("position",new vr(G,3)),le.setAttribute("a",new vr(re,4));let ve=new Gp(le,xe);ve.frustumCulled=!1,a.add(ve)}a.add(new NC(6970024,3805216,.55));let Se=new IC(11122943,1.1);Se.position.set(-30,40,30),a.add(Se),i.shadowMap.enabled=Ms,i.shadowMap.type=ky,Se.castShadow=Ms,Se.shadow.mapSize.set(n?1024:2048,n?1024:2048);{let G=Se.shadow.camera;G.left=-22,G.right=22,G.top=18,G.bottom=-18,G.near=10,G.far=110,Se.target.position.set(0,0,8),a.add(Se.target),Se.shadow.radius=4,Se.shadow.bias=-6e-4,Se.shadow.normalBias=.04}a.traverse(G=>{G.isMesh&&!(G.material&&G.material.isShaderMaterial)&&G!==R&&G!==M&&(G.castShadow=!0,G.receiveShadow=!0)}),R.receiveShadow=!0,M.receiveShadow=!0;let Xe=new qC(i);Xe.setPixelRatio(i.getPixelRatio()),Xe.addPass(new JC(a,s));let he=new hm(new ne(256,256),n?.28:.35,.45,1.05);Xe.addPass(he),Xe.addPass(new ZC);let Ce=new Q1({uniforms:{tDiffuse:{value:null},t:{value:0},asp:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float t; uniform float asp; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233))+t)*43758.5453); }
      void main(){
        vec2 c=vUv-.5; float r=dot(c,c);
        vec2 off=c*r*0.012;
        vec3 col=vec3(texture2D(tDiffuse,vUv+off).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-off).b);
        float l=dot(col,vec3(.299,.587,.114));
        col=mix(vec3(l),col,1.12);
        col=mix(col*vec3(1.0,.93,.84),col*vec3(.92,.97,1.06),smoothstep(.55,.1,l));
        col*=1.0-smoothstep(.12,.62,r)*.55;
        col+=(h(vUv*vec2(asp*900.,900.))-.5)*.035;
        gl_FragColor=vec4(col,1.);
      }`});Xe.addPass(Ce);let it=new Ss(16754768,900,55,2);it.position.set(0,4.5,12),a.add(it);let qe=new Ss(16754768,500,40,2);qe.position.set(0,4.5,30),a.add(qe);let Ne=new Ss(16762996,0,40,2);Ne.position.set(0,8,-8),a.add(Ne);let Ze=new Ss(16767120,0,44,2);Ze.position.set(0,7,-24),a.add(Ze);let et=new ys(d(16760928,0));et.scale.set(16,12,1),et.position.set(0,4.8,-.2),a.add(et);let St={w:1,h:1},O=()=>{let G=t.getBoundingClientRect(),re=Math.max(1,Math.round(G.width)),le=Math.max(1,Math.round(G.height));St.w=re,St.h=le,i.setSize(re,le,!1),typeof Xe<"u"&&(Xe.setSize(re,le),Ce.uniforms.asp.value=re/le,he.setSize(Math.round(re*(n?.5:.75)),Math.round(le*(n?.5:.75)))),s.aspect=re/le,s.updateProjectionMatrix()};O();let se=typeof ResizeObserver<"u"?new ResizeObserver(O):null;se&&se.observe(t);let X={x:0,y:0,tx:0,ty:0},ee=G=>{let re=t.getBoundingClientRect();X.tx=((G.clientX-re.left)/re.width-.5)*2,X.ty=((G.clientY-re.top)/re.height-.5)*2};t.addEventListener("pointermove",ee);let Ee=G=>{G.gamma!=null&&(X.tx=al(G.gamma/25,-1,1),X.ty=al(((G.beta||45)-45)/25,-1,1))};window.addEventListener("deviceorientation",Ee);let ge=0,ut=!1,Pt=performance.now(),Yt=-1,pt=new L,Lr=0,Dr=0,js=0,Nn=()=>{let G=parseFloat(t.style.getPropertyValue("--p"));return isNaN(G)?0:G},Ma=G=>{if(ut)return;ge=requestAnimationFrame(Ma);let re=(G-Pt)/1e3,le=Nn(),ve=wr(le,.07,.36),fe=$f($f(al(le/1))),ze=le<.001?0:Math.pow(al(le),1),Fe=40-70*(.6*wr(ze,0,.55)*.75+0)-0,$e=40-64*(.22*wr(le,0,.35)+.78*wr(le,.3,1)),Oe=1-wr(le,0,.05);X.x+=(X.tx-X.x)*.05,X.y+=(X.ty-X.y)*.05;let We=Math.sin(re*.5)*.25*Oe;s.position.set(X.x*.9*(1-wr(le,.55,.9))+Math.sin(re*.35)*.4*Oe,1.9+wr(le,.1,.6)*1.6+wr(le,.6,1)*.6+We-X.y*.25,$e-(1-Oe)*0+Math.sin(re*.3)*.8*Oe);let S=Math.min(0,$e-22),D=(S+$e-22-Math.sqrt((S-($e-22))**2+16))/2*0+S;pt.set(X.x*.8*.5,5-wr(le,.35,1)*.6+X.y*-.3,D),s.lookAt(pt),s.rotateZ(Math.sin(re*.4)*.006*Oe+wr(le,.4,.8)*Math.sin(le*14)*.008);let V=(s.aspect<1?66:40)+wr(le,.55,1)*12-wr(le,0,.3)*4;Math.abs(s.fov-V)>.01&&(s.fov=V,s.updateProjectionMatrix());let B=ve*1.78;Ue.rotation.y=B,ae.rotation.y=-B;let U=.88+Math.sin(re*9.1)*.05+Math.sin(re*13.7+1)*.04;it.intensity=900*U,qe.intensity=500*(.92+Math.sin(re*7.3)*.06);let Z=ve;Ne.intensity=30+380*Z,Ze.intensity=20+420*Z,et.material.opacity=.5*Z*(1-wr(le,.55,.75)),et.scale.set(10+8*Z,8+8*Z,1),a.userData.endSun.material.opacity=.3+.4*Z,a.userData.endSun.scale.setScalar(20+22*wr(le,.5,1));for(let _e of w){let Pe=.85+Math.sin(re*8+_e.ph)*.12+Math.sin(re*15+_e.ph*2)*.06;_e.sp.scale.setScalar(2.8*Pe),_e.fl.scale.set(.8,1.4*Pe+.15,.8)}if(a.userData.diyaSprites&&a.userData.diyaSprites.forEach((_e,Pe)=>_e.scale.setScalar(.85+Math.sin(re*9+Pe*1.7)*.12)),xe.uniforms.t.value=re,i.toneMappingExposure=(Ms?.62:1)+wr(le,.8,1)*(Ms?.35:.6),Ms){if(Lr++>20&&Lr<100){let _e=G-js;Dr+=_e>40?1:0,Lr===99&&Dr>40&&!Ic.has("fid")&&!Uc&&(Ms=!1,Se.castShadow=!1)}js=G,Ce.uniforms.t.value=G%1e3*.001,Xe.render()}else i.render(a,s)};return ge=requestAnimationFrame(Ma),{dispose(){ut=!0,cancelAnimationFrame(ge),se&&se.disconnect(),t.removeEventListener("pointermove",ee),window.removeEventListener("deviceorientation",Ee),o.forEach(G=>G.dispose&&G.dispose()),a.traverse(G=>{G.geometry&&G.geometry.dispose()}),i.dispose()}}}function ex(){try{let e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl2")||e.getContext("webgl")))}catch{return!1}}var F=or(Vr());if(typeof window<"u"&&!window.__noGyro){window.__noGyro=!0;let e=window.addEventListener.bind(window);window.addEventListener=(t,...r)=>t==="deviceorientation"?void 0:e(t,...r)}function oR(){let e=rr.default.useRef(null),t=rr.default.useRef(null);return rr.default.useEffect(()=>{if(!e.current||!t.current)return;let r=Z1(t.current,e.current.parentElement);return()=>r.dispose()},[]),(0,F.jsx)("div",{ref:e,className:"g3d","aria-hidden":"true",children:(0,F.jsx)("canvas",{ref:t})})}function lR({intro:e,sound:t,onReveal:r,onOut:n,onFail:i,rev:a,out:s}){let o=rr.default.useRef(null),l=rr.default.useRef(!1);return rr.default.useEffect(()=>{let u=o.current;if(!u)return;u.muted=!0;let c=u.play();c&&c.catch&&c.catch(()=>{!l.current&&new URLSearchParams(window.location.search).get("vdebug")===null&&i()});let h=new URLSearchParams(window.location.search).get("vdebug")!==null,d=window.setTimeout(()=>{!l.current&&!h&&i()},9e3);return()=>window.clearTimeout(d)},[]),rr.default.useEffect(()=>{let u=o.current;if(u&&(u.muted=!t||s,t&&!s)){u.volume=1;let c=u.play();c&&c.catch&&c.catch(()=>{})}},[t,s]),(0,F.jsxs)("div",{className:`vintro ${a?"rev":""} ${s?"out":""}`,"aria-hidden":"true",children:[(0,F.jsxs)("video",{ref:o,muted:!0,playsInline:!0,autoPlay:!0,preload:"auto",poster:e.poster,onPlaying:()=>{l.current=!0},onTimeUpdate:u=>{u.target.currentTime>=(e.rev??5)&&r()},onPause:u=>{let c=u.currentTarget;if(!c.ended&&!s){let h=c.play();h&&h.catch&&h.catch(()=>{c.muted=!0,c.play().catch(()=>{})})}},onEnded:n,onError:()=>{l.current||i()},children:[(0,F.jsx)("source",{src:e.webm,type:"video/webm"}),(0,F.jsx)("source",{src:e.mp4,type:"video/mp4"})]}),(0,F.jsx)("div",{className:"vscrim"})]})}function gl({k:e,cls:t="",children:r}){return(0,F.jsx)("div",{className:`layer ${t}`,style:{"--k":e},children:(0,F.jsx)("div",{className:"stage",children:r})})}function Vc({cls:e}){return(0,F.jsxs)("svg",{className:`corner ${e}`,viewBox:"0 0 120 120","aria-hidden":"true",children:[(0,F.jsx)("path",{d:"M4 116V30C4 15 15 4 30 4h86",fill:"none",stroke:"#f4c75a",strokeWidth:"1.6"}),(0,F.jsx)("path",{d:"M14 116V36C14 24 24 14 36 14h80",fill:"none",stroke:"#f4c75a",strokeWidth:"0.7",opacity:"0.7"}),(0,F.jsxs)("g",{transform:"translate(34 34)",fill:"none",stroke:"#f4c75a",strokeWidth:"1.1",children:[Array.from({length:8},(t,r)=>(0,F.jsx)("path",{transform:`rotate(${r*45})`,d:"M0 -4Q5 -12 0 -22Q-5 -12 0 -4Z",fill:r%2?"none":"rgba(244,199,90,0.25)"},r)),(0,F.jsx)("circle",{r:"3",fill:"#f4c75a"})]})]})}function uR(){return(0,F.jsx)("svg",{className:"mandala",viewBox:"-200 -200 400 400","aria-hidden":"true",children:(0,F.jsxs)("g",{fill:"none",stroke:"#f4c75a",strokeWidth:"1",children:[[190,160,118,70].map((e,t)=>(0,F.jsx)("circle",{r:e,strokeDasharray:t===1?"2 6":void 0,opacity:.8-t*.1},e)),Array.from({length:24},(e,t)=>(0,F.jsx)("path",{transform:`rotate(${t*15})`,d:"M0 -120Q16 -150 0 -188Q-16 -150 0 -120Z"},t)),Array.from({length:12},(e,t)=>(0,F.jsx)("path",{transform:`rotate(${t*30+15})`,d:"M0 -72Q22 -96 0 -118Q-22 -96 0 -72Z"},"b"+t)),Array.from({length:8},(e,t)=>(0,F.jsx)("path",{transform:`rotate(${t*45})`,d:"M0 -20Q12 -44 0 -68Q-12 -44 0 -20Z"},"c"+t))]})})}function Hc(){return(0,F.jsxs)("div",{className:"rdiv","aria-hidden":"true",children:[(0,F.jsx)("span",{}),(0,F.jsxs)("svg",{viewBox:"0 0 60 20",width:"60",height:"20",children:[(0,F.jsx)("path",{d:"M2 10H20M40 10H58",stroke:"#f4c75a",strokeWidth:"1"}),(0,F.jsx)("path",{d:"M30 2l6 8-6 8-6-8z",fill:"none",stroke:"#f4c75a",strokeWidth:"1.2"}),(0,F.jsx)("circle",{cx:"30",cy:"10",r:"2",fill:"#f4c75a"})]}),(0,F.jsx)("span",{})]})}function tx(e){let t=document.querySelector(".vintro video");if(!t)return;t.muted=!e,e&&(t.volume=1);let r=t.play();r&&r.catch&&r.catch(()=>{t.muted=!0,t.play().catch(()=>{})})}function cR({sound:e,setSound:t,vActive:r}){let n=rr.default.useRef(null),i=rr.default.useRef(0),a=rr.default.useRef({sound:!1,vActive:!0});a.current={sound:e,vActive:r};let s=typeof window<"u"?window.__LOOP:void 0,o=(u,c)=>{let h=n.current;h&&(window.clearInterval(i.current),i.current=window.setInterval(()=>{let d=u-h.volume;Math.abs(d)<.04?(h.volume=u,window.clearInterval(i.current),c&&c()):h.volume=Math.max(0,Math.min(1,h.volume+Math.sign(d)*.04))},80))};return rr.default.useEffect(()=>{if(new URLSearchParams(window.location.search).get("nomusic")!==null)return;let u=!1,c=h=>{if(u)return;u=!0;let d=n.current;if(d){d.volume=0;let f=d.play();f&&f.then&&f.then(()=>{a.current.sound&&!a.current.vActive||d.pause()}).catch(()=>{})}h.target.closest&&h.target.closest(".mbtn")||(tx(!0),t(()=>!0))};return window.addEventListener("pointerup",c,{passive:!0}),()=>window.removeEventListener("pointerup",c)},[]),rr.default.useEffect(()=>{let u=n.current;if(u)if(e&&!r){u.volume=0;let c=u.play();c&&c.then?c.then(()=>o(.45)).catch(()=>{}):o(.45)}else u.paused||o(0,()=>u.pause())},[e,r]),(0,F.jsxs)(F.Fragment,{children:[s?(0,F.jsx)("audio",{ref:n,src:s,loop:!0,preload:"auto",playsInline:!0}):null,(0,F.jsxs)("button",{className:`mbtn ${e?"on":""}`,onClick:u=>{u.stopPropagation(),tx(!e),t(c=>!c)},"aria-label":e?"Mute sound":"Turn sound on",children:[(0,F.jsxs)("svg",{viewBox:"0 0 24 24",width:"18",height:"18",fill:"none",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,F.jsx)("path",{d:"M4 9v6h4l5 4V5L8 9z"}),e?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)("path",{d:"M16.5 8.5a5 5 0 0 1 0 7"}),(0,F.jsx)("path",{d:"M19 6a8.5 8.5 0 0 1 0 12"})]}):(0,F.jsx)("path",{d:"M17 9l5 6M22 9l-5 6"})]}),!e&&r?(0,F.jsx)("span",{className:"mcue",children:"Tap for sound"}):null]})]})}function Gc(){let e=a_(6600),t=i_(),r=Go(_t.weddingDate),[n]=rr.default.useState(()=>ex()&&new URLSearchParams(window.location.search).get("flat")===null),i=e.state==="idle"?e.start:void 0,a=typeof window<"u"?window.__INTRO:void 0,[s,o]=rr.default.useState(()=>{let m=new URLSearchParams(window.location.search);return!!a&&m.get("flat")===null&&m.get("skip")===null&&!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)}),[l,u]=rr.default.useState("play"),[c,h]=rr.default.useState(()=>new URLSearchParams(window.location.search).get("vdebug")==="rev"),d=()=>{h(!0),u(m=>m==="play"?(window.setTimeout(()=>u("done"),1600),"out"):m)},f=s&&l==="play",y=s&&l!=="done",[_,v]=rr.default.useState(!1),p=_t.events.map(m=>({...m,d:Go(m.date)}));return(0,F.jsxs)("div",{className:`royal ${s?"vmode":""} ${s&&l!=="play"?"vout":""} ${!s&&e.state!=="done"||s&&l==="play"?"locked":""}`,style:{"--H":`${t}px`},children:[typeof window<"u"&&(window.__LOOP||window.__INTRO)?(0,F.jsx)(cR,{sound:_,setSound:v,vActive:f}):null,y&&(0,F.jsx)(lR,{sound:_,intro:a,rev:c,out:l==="out",onReveal:()=>h(!0),onOut:d,onFail:()=>o(!1)}),s&&l==="play"&&(0,F.jsx)("button",{className:"gu-skip vskip",onClick:d,children:"Skip intro"}),!s&&e.state!=="done"&&(0,F.jsxs)("div",{ref:e.ref,className:`gate rg is-${e.state}`,onClick:i,children:[n?(0,F.jsx)(oR,{}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(gl,{k:.35,children:(0,F.jsx)(c_,{})}),(0,F.jsx)(gl,{k:.9,children:(0,F.jsx)(h_,{})}),(0,F.jsxs)(gl,{k:4.9,cls:"main",children:[(0,F.jsx)(d_,{}),(0,F.jsx)(f_,{}),(0,F.jsx)("div",{className:"spill",children:(0,F.jsx)(p_,{})}),(0,F.jsxs)("div",{className:"doors",children:[(0,F.jsx)("div",{className:"door dl",children:(0,F.jsx)(cp,{side:"l"})}),(0,F.jsx)("div",{className:"door dr",children:(0,F.jsx)(cp,{side:"r"})})]})]}),(0,F.jsx)(gl,{k:2.8,children:(0,F.jsx)(g_,{})}),(0,F.jsx)(gl,{k:2.3,children:(0,F.jsx)(v_,{})})]}),(0,F.jsx)("div",{className:"glow"}),(0,F.jsx)("div",{className:"vignette"}),(0,F.jsxs)("div",{className:"gate-ui",children:[(0,F.jsx)("span",{}),(0,F.jsxs)("div",{className:"gu-bottom",children:[(0,F.jsx)("p",{className:"gu-inv",children:"You are warmly invited to the wedding of"}),(0,F.jsxs)("h1",{className:"gu-names",children:[_t.bride," ",(0,F.jsx)("i",{children:"&"})," ",_t.groom]}),(0,F.jsx)("button",{className:"gu-open",onClick:m=>{m.stopPropagation(),e.start()},disabled:e.state!=="idle",children:(0,F.jsx)("span",{children:"Open the invitation"})})]})]}),(0,F.jsx)("button",{className:"gu-skip",onClick:m=>{m.stopPropagation(),e.skip()},children:"Skip intro"})]}),(0,F.jsxs)("main",{className:`rpage ${(s?c:e.ready)?"ready":""}`,children:[(0,F.jsxs)("section",{className:"hero",children:[(0,F.jsx)("div",{className:"hbg","aria-hidden":"true"}),(0,F.jsx)(uR,{}),(0,F.jsx)(Vc,{cls:"c1"}),(0,F.jsx)(Vc,{cls:"c2"}),(0,F.jsx)(Vc,{cls:"c3"}),(0,F.jsx)(Vc,{cls:"c4"}),(0,F.jsx)(o_,{count:26,kind:"petal",seed:4}),(0,F.jsxs)("div",{className:"hero-in",children:[(0,F.jsx)("p",{className:"h-ganesh e1",lang:"hi",children:"\u0965 \u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903 \u0965"}),(0,F.jsx)("p",{className:"h-kicker e2",children:"Together with their families"}),(0,F.jsxs)("h1",{className:"h-names",children:[(0,F.jsx)("span",{className:"nm e3",children:_t.bride}),(0,F.jsx)("span",{className:"amp e4",children:"&"}),(0,F.jsx)("span",{className:"nm e5",children:_t.groom})]}),(0,F.jsxs)("p",{className:"h-hi e6",lang:"hi",children:[_t.brideHi," ",(0,F.jsx)("small",{children:"weds"})," ",_t.groomHi]}),(0,F.jsx)(Hc,{}),(0,F.jsx)("p",{className:"h-ask e7",children:"request the honour of your presence at their wedding"}),(0,F.jsxs)("div",{className:"h-date e8","aria-label":`${r.weekday}, ${r.day} ${r.month} ${r.year}`,children:[(0,F.jsx)("span",{children:r.weekday}),(0,F.jsx)("b",{children:r.day}),(0,F.jsxs)("span",{children:[r.month," ",r.year]})]}),(0,F.jsxs)("p",{className:"h-venue e9",children:[_t.venueName,", ",_t.venueCity]})]}),(0,F.jsx)("div",{className:"scroll-cue","aria-hidden":"true",children:(0,F.jsx)("i",{})})]}),(0,F.jsxs)("section",{className:"sec",children:[(0,F.jsxs)(Gn,{children:[(0,F.jsx)("p",{className:"eyebrow",children:"Every moment counts"}),(0,F.jsx)("h2",{children:"The countdown begins"}),(0,F.jsx)(Hc,{})]}),(0,F.jsx)(Gn,{delay:120,children:(0,F.jsx)(s_,{cls:"rcd"})}),(0,F.jsx)(Gn,{delay:200,children:(0,F.jsxs)("p",{className:"cd-note",children:["until the baraat arrives, ",Go(_t.weddingDate).day," ",Go(_t.weddingDate).month]})})]}),(0,F.jsxs)("section",{className:"sec",children:[(0,F.jsxs)(Gn,{children:[(0,F.jsx)("p",{className:"eyebrow",children:"Two days of joy"}),(0,F.jsx)("h2",{children:"The celebrations"}),(0,F.jsx)(Hc,{})]}),(0,F.jsx)("ol",{className:"tl",children:p.map((m,g)=>(0,F.jsxs)(Gn,{as:"li",className:"ev",delay:g*60,children:[(0,F.jsxs)("div",{className:"ev-date",children:[(0,F.jsx)("b",{children:m.d.day}),(0,F.jsx)("span",{children:m.d.monthShort})]}),(0,F.jsx)("i",{className:"ev-dot","aria-hidden":"true"}),(0,F.jsxs)("div",{className:"ev-card",children:[(0,F.jsx)("div",{className:"ev-ic",children:(0,F.jsx)(up,{name:m.icon})}),(0,F.jsxs)("p",{className:"ev-day",children:[m.d.weekday," \xB7 ",m.time]}),(0,F.jsxs)("h3",{children:[m.name," ",(0,F.jsx)("small",{lang:"hi",children:m.hi})]}),(0,F.jsx)("p",{className:"ev-note",children:m.note}),(0,F.jsxs)("p",{className:"ev-where",children:[m.venue,", Rourkela"]})]})]},m.id))})]}),(0,F.jsxs)("section",{className:"sec venue",children:[(0,F.jsxs)(Gn,{children:[(0,F.jsx)("p",{className:"eyebrow",children:"Where to find us"}),(0,F.jsx)("h2",{children:"The venue"}),(0,F.jsx)(Hc,{})]}),(0,F.jsxs)(Gn,{delay:100,className:"v-card",children:[(0,F.jsx)("div",{className:"ev-ic",children:(0,F.jsx)(up,{name:"pin"})}),(0,F.jsx)("h3",{children:_t.venueName}),(0,F.jsxs)("p",{lang:"hi",className:"v-hi",children:[_t.venueNameHi,", \u0930\u093E\u0909\u0930\u0915\u0947\u0932\u093E"]}),(0,F.jsx)("p",{children:_t.venueCity}),(0,F.jsxs)("div",{className:"btns",children:[(0,F.jsx)("a",{className:"rbtn",href:Zv(),target:"_blank",rel:"noopener noreferrer",children:"Get directions"}),(0,F.jsx)("a",{className:"rbtn ghost",href:e_(),download:"aastha-mayank-wedding.ics",children:"Add to calendar"})]})]})]}),(0,F.jsx)("footer",{className:"rfoot",children:(0,F.jsxs)(Gn,{children:[(0,F.jsx)("p",{lang:"hi",className:"h-ganesh",children:"\u0965 \u0936\u0941\u092D \u0935\u093F\u0935\u093E\u0939 \u0965"}),(0,F.jsxs)("p",{className:"f-names",children:[_t.bride," & ",_t.groom]}),(0,F.jsxs)("p",{className:"f-note",children:["With love and blessings from",(0,F.jsx)("br",{}),_t.family]}),(0,F.jsx)("p",{className:"f-sub",children:"Your presence will make our celebration complete."})]})})]})]})}var si=or(Vr());function rx(){return(0,si.jsxs)(Kv,{children:[(0,si.jsx)(Vu,{path:"/",element:(0,si.jsx)(Gc,{})}),(0,si.jsx)(Vu,{path:"/royal",element:(0,si.jsx)(Gc,{})}),(0,si.jsx)(Vu,{path:"*",element:(0,si.jsx)(Gc,{})})]})}var ax=or(Vr()),nx=new URLSearchParams(location.search).get("vh");if(nx){let e=document.createElement("style");e.textContent=`.hero,.ivhero{min-height:${nx}px!important}`,document.head.appendChild(e)}(0,ix.createRoot)(document.getElementById("root")).render((0,ax.jsx)(rx,{}));})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
