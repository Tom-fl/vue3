import{R as e}from"./index.67228c61.js";var t,r={exports:{}},n={exports:{}},o=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}},i=o,a=Object.prototype.toString,s=(t=Object.create(null),function(e){var r=a.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())});function u(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function c(e){return Array.isArray(e)}function f(e){return void 0===e}var l=u("ArrayBuffer");function d(e){return null!==e&&"object"==typeof e}function p(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var h=u("Date"),m=u("File"),v=u("Blob"),y=u("FileList");function g(e){return"[object Function]"===a.call(e)}var E=u("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var w,O=(w="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return w&&e instanceof w}),R={isArray:c,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!f(e)&&null!==e.constructor&&!f(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||a.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:d,isPlainObject:p,isUndefined:f,isDate:h,isFile:m,isBlob:v,isFunction:g,isStream:function(e){return d(e)&&g(e.pipe)},isURLSearchParams:E,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){p(t[n])&&p(r)?t[n]=e(t[n],r):p(r)?t[n]=e({},r):c(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,n){e[n]=r&&"function"==typeof t?i(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,o,i,a={};t=t||{};do{for(o=(n=Object.getOwnPropertyNames(e)).length;o-- >0;)a[i=n[o]]||(t[i]=e[i],a[i]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:u,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(f(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:O,isFileList:y},A=R;function S(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var T=function(e,t,r){if(!t)return e;var n;if(r)n=r(t);else if(A.isURLSearchParams(t))n=t.toString();else{var o=[];A.forEach(t,(function(e,t){null!=e&&(A.isArray(e)?t+="[]":e=[e],A.forEach(e,(function(e){A.isDate(e)?e=e.toISOString():A.isObject(e)&&(e=JSON.stringify(e)),o.push(S(t)+"="+S(e))})))})),n=o.join("&")}if(n){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e},x=R;function N(){this.handlers=[]}N.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},N.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},N.prototype.forEach=function(e){x.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var j=N,C=R,_=R;function P(e,t,r,n,o){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}_.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var U=P.prototype,B={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){B[e]={value:e}})),Object.defineProperties(P,B),Object.defineProperty(U,"isAxiosError",{value:!0}),P.from=function(e,t,r,n,o,i){var a=Object.create(U);return _.toFlatObject(e,a,(function(e){return e!==Error.prototype})),P.call(a,e.message,t,r,n,o),a.name=e.name,i&&Object.assign(a,i),a};var D=P,L={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},k=R;var F,q,I,J,M=function(e,t){t=t||new FormData;var r=[];function n(e){return null===e?"":k.isDate(e)?e.toISOString():k.isArrayBuffer(e)||k.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,i){if(k.isPlainObject(o)||k.isArray(o)){if(-1!==r.indexOf(o))throw Error("Circular reference detected in "+i);r.push(o),k.forEach(o,(function(r,o){if(!k.isUndefined(r)){var a,s=i?i+"."+o:o;if(r&&!i&&"object"==typeof r)if(k.endsWith(o,"{}"))r=JSON.stringify(r);else if(k.endsWith(o,"[]")&&(a=k.toArray(r)))return void a.forEach((function(e){!k.isUndefined(e)&&t.append(s,n(e))}));e(r,s)}})),r.pop()}else t.append(i,n(o))}(e),t};var H,W,z,V,X,K,$,Q,G,Y,Z,ee,te=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},re=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},ne=function(e,t){return e&&!te(t)?re(e,t):t};function oe(){if(K)return X;K=1;var e=D;function t(t){e.call(this,null==t?"canceled":t,e.ERR_CANCELED),this.name="CanceledError"}return R.inherits(t,e,{__CANCEL__:!0}),X=t}function ie(){if(Y)return G;Y=1;var e=R,t=function(){if(q)return F;q=1;var e=D;return F=function(t,r,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?r(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}}(),r=function(){if(J)return I;J=1;var e=R;return I=e.isStandardBrowserEnv()?{write:function(t,r,n,o,i,a){var s=[];s.push(t+"="+encodeURIComponent(r)),e.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),e.isString(o)&&s.push("path="+o),e.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}(),n=T,o=ne,i=function(){if(W)return H;W=1;var e=R,t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return H=function(r){var n,o,i,a={};return r?(e.forEach(r.split("\n"),(function(r){if(i=r.indexOf(":"),n=e.trim(r.substr(0,i)).toLowerCase(),o=e.trim(r.substr(i+1)),n){if(a[n]&&t.indexOf(n)>=0)return;a[n]="set-cookie"===n?(a[n]?a[n]:[]).concat([o]):a[n]?a[n]+", "+o:o}})),a):a}}(),a=function(){if(V)return z;V=1;var e=R;return z=e.isStandardBrowserEnv()?function(){var t,r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var t=e;return r&&(n.setAttribute("href",t),t=n.href),n.setAttribute("href",t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(r){var n=e.isString(r)?o(r):r;return n.protocol===t.protocol&&n.host===t.host}}():function(){return!0}}(),s=L,u=D,c=oe(),f=Q?$:(Q=1,$=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""});return G=function(l){return new Promise((function(d,p){var h,m=l.data,v=l.headers,y=l.responseType;function g(){l.cancelToken&&l.cancelToken.unsubscribe(h),l.signal&&l.signal.removeEventListener("abort",h)}e.isFormData(m)&&e.isStandardBrowserEnv()&&delete v["Content-Type"];var E=new XMLHttpRequest;if(l.auth){var b=l.auth.username||"",w=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";v.Authorization="Basic "+btoa(b+":"+w)}var O=o(l.baseURL,l.url);function R(){if(E){var e="getAllResponseHeaders"in E?i(E.getAllResponseHeaders()):null,r={data:y&&"text"!==y&&"json"!==y?E.response:E.responseText,status:E.status,statusText:E.statusText,headers:e,config:l,request:E};t((function(e){d(e),g()}),(function(e){p(e),g()}),r),E=null}}if(E.open(l.method.toUpperCase(),n(O,l.params,l.paramsSerializer),!0),E.timeout=l.timeout,"onloadend"in E?E.onloadend=R:E.onreadystatechange=function(){E&&4===E.readyState&&(0!==E.status||E.responseURL&&0===E.responseURL.indexOf("file:"))&&setTimeout(R)},E.onabort=function(){E&&(p(new u("Request aborted",u.ECONNABORTED,l,E)),E=null)},E.onerror=function(){p(new u("Network Error",u.ERR_NETWORK,l,E,E)),E=null},E.ontimeout=function(){var e=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded",t=l.transitional||s;l.timeoutErrorMessage&&(e=l.timeoutErrorMessage),p(new u(e,t.clarifyTimeoutError?u.ETIMEDOUT:u.ECONNABORTED,l,E)),E=null},e.isStandardBrowserEnv()){var A=(l.withCredentials||a(O))&&l.xsrfCookieName?r.read(l.xsrfCookieName):void 0;A&&(v[l.xsrfHeaderName]=A)}"setRequestHeader"in E&&e.forEach(v,(function(e,t){void 0===m&&"content-type"===t.toLowerCase()?delete v[t]:E.setRequestHeader(t,e)})),e.isUndefined(l.withCredentials)||(E.withCredentials=!!l.withCredentials),y&&"json"!==y&&(E.responseType=l.responseType),"function"==typeof l.onDownloadProgress&&E.addEventListener("progress",l.onDownloadProgress),"function"==typeof l.onUploadProgress&&E.upload&&E.upload.addEventListener("progress",l.onUploadProgress),(l.cancelToken||l.signal)&&(h=function(e){E&&(p(!e||e&&e.type?new c:e),E.abort(),E=null)},l.cancelToken&&l.cancelToken.subscribe(h),l.signal&&(l.signal.aborted?h():l.signal.addEventListener("abort",h))),m||(m=null);var S=f(O);S&&-1===["http","https","file"].indexOf(S)?p(new u("Unsupported protocol "+S+":",u.ERR_BAD_REQUEST,l)):E.send(m)}))}}var ae=R,se=function(e,t){C.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))},ue=D,ce=M,fe={"Content-Type":"application/x-www-form-urlencoded"};function le(e,t){!ae.isUndefined(e)&&ae.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var de,pe={transitional:L,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(de=ie()),de),transformRequest:[function(e,t){if(se(t,"Accept"),se(t,"Content-Type"),ae.isFormData(e)||ae.isArrayBuffer(e)||ae.isBuffer(e)||ae.isStream(e)||ae.isFile(e)||ae.isBlob(e))return e;if(ae.isArrayBufferView(e))return e.buffer;if(ae.isURLSearchParams(e))return le(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,n=ae.isObject(e),o=t&&t["Content-Type"];if((r=ae.isFileList(e))||n&&"multipart/form-data"===o){var i=this.env&&this.env.FormData;return ce(r?{"files[]":e}:e,i&&new i)}return n||"application/json"===o?(le(t,"application/json"),function(e,t,r){if(ae.isString(e))try{return(t||JSON.parse)(e),ae.trim(e)}catch(n){if("SyntaxError"!==n.name)throw n}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||pe.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&ae.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(o){if("SyntaxError"===i.name)throw ue.from(i,ue.ERR_BAD_RESPONSE,this,null,this.response);throw i}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ee?Z:(ee=1,Z=null)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ae.forEach(["delete","get","head"],(function(e){pe.headers[e]={}})),ae.forEach(["post","put","patch"],(function(e){pe.headers[e]=ae.merge(fe)}));var he,me,ve=pe,ye=R,ge=ve;function Ee(){return me?he:(me=1,he=function(e){return!(!e||!e.__CANCEL__)})}var be=R,we=function(e,t,r){var n=this||ge;return ye.forEach(r,(function(r){e=r.call(n,e,t)})),e},Oe=Ee(),Re=ve,Ae=oe();function Se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ae}var Te,xe,Ne=R,je=function(e,t){t=t||{};var r={};function n(e,t){return Ne.isPlainObject(e)&&Ne.isPlainObject(t)?Ne.merge(e,t):Ne.isPlainObject(t)?Ne.merge({},t):Ne.isArray(t)?t.slice():t}function o(r){return Ne.isUndefined(t[r])?Ne.isUndefined(e[r])?void 0:n(void 0,e[r]):n(e[r],t[r])}function i(e){if(!Ne.isUndefined(t[e]))return n(void 0,t[e])}function a(r){return Ne.isUndefined(t[r])?Ne.isUndefined(e[r])?void 0:n(void 0,e[r]):n(void 0,t[r])}function s(r){return r in t?n(e[r],t[r]):r in e?n(void 0,e[r]):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s};return Ne.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,n=t(e);Ne.isUndefined(n)&&t!==s||(r[e]=n)})),r};function Ce(){return xe?Te:(xe=1,Te={version:"0.27.2"})}var _e=Ce().version,Pe=D,Ue={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){Ue[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var Be={};Ue.transitional=function(e,t,r){function n(e,t){return"[Axios v"+_e+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,o,i){if(!1===e)throw new Pe(n(o," has been removed"+(t?" in "+t:"")),Pe.ERR_DEPRECATED);return t&&!Be[o]&&(Be[o]=!0,console.warn(n(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,o,i)}};var De,Le,ke,Fe,qe,Ie,Je=R,Me=T,He=j,We=function(e){return Se(e),e.headers=e.headers||{},e.data=we.call(e,e.data,e.headers,e.transformRequest),e.headers=be.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),be.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||Re.adapter)(e).then((function(t){return Se(e),t.data=we.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return Oe(t)||(Se(e),t&&t.response&&(t.response.data=we.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ze=je,Ve=ne,Xe={assertOptions:function(e,t,r){if("object"!=typeof e)throw new Pe("options must be an object",Pe.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],a=t[i];if(a){var s=e[i],u=void 0===s||a(s,i,e);if(!0!==u)throw new Pe("option "+i+" must be "+u,Pe.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new Pe("Unknown option "+i,Pe.ERR_BAD_OPTION)}},validators:Ue},Ke=Xe.validators;function $e(e){this.defaults=e,this.interceptors={request:new He,response:new He}}$e.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=ze(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&Xe.assertOptions(r,{silentJSONParsing:Ke.transitional(Ke.boolean),forcedJSONParsing:Ke.transitional(Ke.boolean),clarifyTimeoutError:Ke.transitional(Ke.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(o=o&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var i,a=[];if(this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)})),!o){var s=[We,void 0];for(Array.prototype.unshift.apply(s,n),s=s.concat(a),i=Promise.resolve(t);s.length;)i=i.then(s.shift(),s.shift());return i}for(var u=t;n.length;){var c=n.shift(),f=n.shift();try{u=c(u)}catch(l){f(l);break}}try{i=We(u)}catch(l){return Promise.reject(l)}for(;a.length;)i=i.then(a.shift(),a.shift());return i},$e.prototype.getUri=function(e){e=ze(this.defaults,e);var t=Ve(e.baseURL,e.url);return Me(t,e.params,e.paramsSerializer)},Je.forEach(["delete","get","head","options"],(function(e){$e.prototype[e]=function(t,r){return this.request(ze(r||{},{method:e,url:t,data:(r||{}).data}))}})),Je.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,o){return this.request(ze(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}$e.prototype[e]=t(),$e.prototype[e+"Form"]=t(!0)}));var Qe=R,Ge=o,Ye=$e,Ze=je;var et=function e(t){var r=new Ye(t),n=Ge(Ye.prototype.request,r);return Qe.extend(n,Ye.prototype,r),Qe.extend(n,r),n.create=function(r){return e(Ze(t,r))},n}(ve);et.Axios=Ye,et.CanceledError=oe(),et.CancelToken=function(){if(Le)return De;Le=1;var e=oe();function t(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},t((function(t){n.reason||(n.reason=new e(t),r(n.reason))}))}return t.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},t.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},t.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},t.source=function(){var e;return{token:new t((function(t){e=t})),cancel:e}},De=t}(),et.isCancel=Ee(),et.VERSION=Ce().version,et.toFormData=M,et.AxiosError=D,et.Cancel=et.CanceledError,et.all=function(e){return Promise.all(e)},et.spread=Fe?ke:(Fe=1,ke=function(e){return function(t){return e.apply(null,t)}}),et.isAxiosError=function(){if(Ie)return qe;Ie=1;var e=R;return qe=function(t){return e.isObject(t)&&!0===t.isAxiosError}}(),n.exports=et,n.exports.default=et;const tt=e(r.exports=n.exports).create({baseURL:"http://113.142.151.144:3333/"}),rt={get(e,t){const r={method:"get",url:e,data:null};return t&&(r.params=t),tt(r)},post(e,t){const r={method:"post",url:e,data:null};return t&&(r.data=t),tt(r)},postForm(e,t){const r={method:"post",url:e,headers:{"content-type":"application/x-www-form-urlencoded; charset=UTF-8"},data:null};return t&&(r.data=t),tt(r)},put(e,t){const r={method:"put",url:e,data:null};return t&&(r.data=t),tt(r)},putSplice(e,t){const r={method:"put",url:e,params:null};return t&&(r.params=t),tt(r)},delete(e,t){const r={method:"delete",url:e,params:null};return t&&(r.params=t),tt(r)},deleteBody(e,t){const r={method:"delete",url:e,data:null};return t&&(r.data=t),tt(r)},requestFile(e,t){const r=new FormData;r.append("file",t);const n={method:"post",url:e,headers:{"Content-Type":"multipart/form-data"},data:{}};return t&&(n.data=r),tt(n)}};export{rt as h};
