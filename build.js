!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return L})),n.d(t,"hydrate",(function(){return H})),n.d(t,"createElement",(function(){return h})),n.d(t,"h",(function(){return h})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return v})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return b})),n.d(t,"cloneElement",(function(){return F})),n.d(t,"createContext",(function(){return W})),n.d(t,"toChildArray",(function(){return S})),n.d(t,"__u",(function(){return N})),n.d(t,"options",(function(){return r}));var r,o,u,i,c,l,a,s={},f=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n){var r,o=arguments,u={};for(r in t)"key"!==r&&"ref"!==r&&(u[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return m(e,u,t&&t.key,t&&t.ref,null)}function m(e,t,n,o,u){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:u};return null==u&&(i.__v=i),r.vnode&&r.vnode(i),i}function v(){return{current:null}}function y(e){return e.children}function b(e,t){this.props=e,this.context=t}function g(e,t){if(null==t)return e.__?g(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?g(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function x(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!k.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||i)(k)}function k(){for(var e;k.__r=u.length;)e=u.sort((function(e,t){return e.__v.__b-t.__v.__b})),u=[],e.some((function(e){var t,n,r,o,u,i,c;e.__d&&(i=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],(r=p({},u)).__v=r,o=A(c,u,r,t.__n,void 0!==c.ownerSVGElement,null,n,null==i?g(u):i),R(n,u),o!=i&&C(u)))}))}function O(e,t,n,r,o,u,i,c,l,a){var _,p,h,v,b,C,x,k=r&&r.__k||f,O=k.length;for(l==s&&(l=null!=i?i[0]:O?g(r,0):null),n.__k=[],_=0;_<t.length;_++)if(null!=(v=n.__k[_]=null==(v=t[_])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?m(null,v,null,null,v):Array.isArray(v)?m(y,{children:v},null,null,null):null!=v.__e||null!=v.__c?m(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(h=k[_])||h&&v.key==h.key&&v.type===h.type)k[_]=void 0;else for(p=0;p<O;p++){if((h=k[p])&&v.key==h.key&&v.type===h.type){k[p]=void 0;break}h=null}b=A(e,v,h=h||s,o,u,i,c,l,a),(p=v.ref)&&h.ref!=p&&(x||(x=[]),h.ref&&x.push(h.ref,null,v),x.push(p,v.__c||b,v)),null!=b?(null==C&&(C=b),l=j(e,v,h,k,i,b,l),a||"option"!=n.type?"function"==typeof n.type&&(n.__d=l):e.value=""):l&&h.__e==l&&l.parentNode!=e&&(l=g(h))}if(n.__e=C,null!=i&&"function"!=typeof n.type)for(_=i.length;_--;)null!=i[_]&&d(i[_]);for(_=O;_--;)null!=k[_]&&N(k[_],k[_]);if(x)for(_=0;_<x.length;_++)U(x[_],x[++_],x[++_])}function S(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?f.concat.apply([],e.map(S)):[e]}function j(e,t,n,r,o,u,i){var c,l,a;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(o==n||u!=i||null==u.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(u),c=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==u)break e;e.insertBefore(u,i),c=i}return void 0!==c?c:u.nextSibling}function E(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===_.test(t)?n+"px":null==n?"":n}function w(e,t,n,r,o){var u,i,c,l,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(u=e.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(l in r)n&&l in n||E(u,l,"");if(n)for(a in n)r&&n[a]===r[a]||E(u,a,n[a])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(r||e.addEventListener(t,P,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,P,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function P(e){this.l[e.type](r.event?r.event(e):e)}function T(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&T(o,t,n),t=j(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function A(e,t,n,o,u,i,c,l,a){var s,f,_,d,h,m,v,g,C,x,k,S=t.type;if(void 0!==t.constructor)return null;(s=r.__b)&&s(t);try{e:if("function"==typeof S){if(g=t.props,C=(s=S.contextType)&&o[s.__c],x=s?C?C.props.value:s.__:o,n.__c?v=(f=t.__c=n.__c).__=f.__E:("prototype"in S&&S.prototype.render?t.__c=f=new S(g,x):(t.__c=f=new b(g,x),f.constructor=S,f.render=M),C&&C.sub(f),f.props=g,f.state||(f.state={}),f.context=x,f.__n=o,_=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,S.getDerivedStateFromProps(g,f.__s))),d=f.props,h=f.state,_)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&g!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(g,x),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(g,f.__s,x)||t.__v===n.__v){f.props=g,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&c.push(f),T(t,l,e);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(g,f.__s,x),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,m)}))}f.context=x,f.props=g,f.state=f.__s,(s=r.__r)&&s(t),f.__d=!1,f.__v=t,f.__P=e,s=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=p(p({},o),f.getChildContext())),_||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(d,h)),k=null!=s&&s.type==y&&null==s.key?s.props.children:s,O(e,Array.isArray(k)?k:[k],t,n,o,u,i,c,l,a),f.base=t.__e,f.__h.length&&c.push(f),v&&(f.__E=f.__=null),f.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=D(n.__e,t,n,o,u,i,c,a);(s=r.diffed)&&s(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function R(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function D(e,t,n,r,o,u,i,c){var l,a,_,p,d,h=n.props,m=t.props;if(o="svg"===t.type||o,null!=u)for(l=0;l<u.length;l++)if(null!=(a=u[l])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,u[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(m);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,m.is&&{is:m.is}),u=null,c=!1}if(null===t.type)h!==m&&e.data!==m&&(e.data=m);else{if(null!=u&&(u=f.slice.call(e.childNodes)),_=(h=n.props||s).dangerouslySetInnerHTML,p=m.dangerouslySetInnerHTML,!c){if(null!=u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||_)&&(p&&_&&p.__html==_.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var u;for(u in n)"children"===u||"key"===u||u in t||w(e,u,null,n[u],r);for(u in t)o&&"function"!=typeof t[u]||"children"===u||"key"===u||"value"===u||"checked"===u||n[u]===t[u]||w(e,u,t[u],n[u],r)})(e,m,h,o,c),p?t.__k=[]:(l=t.props.children,O(e,Array.isArray(l)?l:[l],t,n,r,"foreignObject"!==t.type&&o,u,i,s,c)),c||("value"in m&&void 0!==(l=m.value)&&l!==e.value&&w(e,"value",l,h.value,!1),"checked"in m&&void 0!==(l=m.checked)&&l!==e.checked&&w(e,"checked",l,h.checked,!1))}return e}function U(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function N(e,t,n){var o,u,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,t)),n||"function"==typeof e.type||(n=null!=(u=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&N(o[i],t,n);null!=u&&d(u)}function M(e,t,n){return this.constructor(e,n)}function L(e,t,n){var o,u,i;r.__&&r.__(e,t),u=(o=n===l)?null:n&&n.__k||t.__k,e=h(y,null,[e]),i=[],A(t,(o?t:n||t).__k=e,u||s,s,void 0!==t.ownerSVGElement,n&&!o?[n]:u?null:t.childNodes.length?f.slice.call(t.childNodes):null,i,n||s,o),R(i,e)}function H(e,t){L(e,t,l)}function F(e,t){var n,r;for(r in t=p(p({},e.props),t),arguments.length>2&&(t.children=f.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return m(e.type,n,t.key||e.key,t.ref||e.ref,null)}function W(e){var t={},n={__c:"__cC"+a++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,x(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return x(n.__E=n)}catch(t){e=t}throw e}},o=function(e){return null!=e&&void 0===e.constructor},b.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),x(this))},b.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),x(this))},b.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,l=s,a=0},function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return d})),n.d(t,"useReducer",(function(){return h})),n.d(t,"useEffect",(function(){return m})),n.d(t,"useLayoutEffect",(function(){return v})),n.d(t,"useRef",(function(){return y})),n.d(t,"useImperativeHandle",(function(){return b})),n.d(t,"useMemo",(function(){return g})),n.d(t,"useCallback",(function(){return C})),n.d(t,"useContext",(function(){return x})),n.d(t,"useDebugValue",(function(){return k})),n.d(t,"useErrorBoundary",(function(){return O}));var r,o,u,i=n(0),c=0,l=[],a=i.options.__r,s=i.options.diffed,f=i.options.__c,_=i.options.unmount;function p(e,t){i.options.__h&&i.options.__h(o,e,c||t),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function d(e){return c=1,h(T,e)}function h(e,t,n){var u=p(r++,2);return u.t=e,u.__c||(u.__c=o,u.__=[n?n(t):T(void 0,t),function(e){var t=u.t(u.__[0],e);u.__[0]!==t&&(u.__=[t,u.__[1]],u.__c.setState({}))}]),u.__}function m(e,t){var n=p(r++,3);!i.options.__s&&P(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function v(e,t){var n=p(r++,4);!i.options.__s&&P(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function y(e){return c=5,g((function(){return{current:void 0===e?null:e}}),[])}function b(e,t,n){c=6,v((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function g(e,t){var n=p(r++,7);return P(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function C(e,t){return c=8,g((function(){return e}),t)}function x(e){var t=o.context[e.__c],n=p(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function k(e,t){i.options.useDebugValue&&i.options.useDebugValue(t?t(e):e)}function O(e){var t=p(r++,10),n=d();return t.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function S(){l.some((function(e){if(e.__P)try{e.__H.__h.forEach(E),e.__H.__h.forEach(w),e.__H.__h=[]}catch(t){return e.__H.__h=[],i.options.__e(t,e.__v),!0}})),l=[]}i.options.__r=function(e){a&&a(e),r=0;var t=(o=e.__c).__H;t&&(t.__h.forEach(E),t.__h.forEach(w),t.__h=[])},i.options.diffed=function(e){s&&s(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==l.push(t)&&u===i.options.requestAnimationFrame||((u=i.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),j&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);j&&(t=requestAnimationFrame(n))})(S))},i.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(E),e.__h=e.__h.filter((function(e){return!e.__||w(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],i.options.__e(n,e.__v)}})),f&&f(e,t)},i.options.unmount=function(e){_&&_(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(E)}catch(e){i.options.__e(e,t.__v)}};var j="function"==typeof requestAnimationFrame;function E(e){"function"==typeof e.u&&e.u()}function w(e){e.u=e.__()}function P(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function T(e,t){return"function"==typeof t?t(e):t}},function(e,t,n){"use strict";n.r(t),n.d(t,"css",(function(){return p})),n.d(t,"extractCss",(function(){return u})),n.d(t,"glob",(function(){return m})),n.d(t,"setup",(function(){return v})),n.d(t,"styled",(function(){return y}));let r={data:""},o=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(e){}return e||r},u=e=>{let t=o(e),n=t.data;return t.data="",n},i=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,c=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,l=(e,t,n)=>{let r,o="",u="",i="";for(let c in e){let a=e[c];"object"==typeof a?(r=t.replace(/([^,])+/g,"$& "+c)||c,/&/g.test(c)&&(r=c.replace(/&/g,t)),u+="@"==c[0]?"f"==c[1]?l(a,c):c+"{"+l(a,"k"==c[1]?"":t)+"}":l(a,r,n)):"@"==c[0]&&"i"==c[1]?o=c+" "+a+";":i+=l.p?l.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),a):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+a+";"}return i[0]?(r=t+"{"+i+"}",n?u+n+"{"+("@"==n[0]?r:t+i)+"}":o+r+u):o+u},a={},s=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?s(e[n]):e[n]);return t},f=(e,t,n,r)=>{let o=e.toLowerCase?e:s(e),u=a[o]||(a[o]="go"+o.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));return((e,t,n)=>{t.data.indexOf(e)<0&&(t.data=n?e+t.data:t.data+e)})(a[u]||(a[u]=l(e[0]?(e=>{let t,n=[{}];for(;t=i.exec(e.replace(c,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e):e,n?"":"."+u)),t,r),u},_=(e,t,n)=>e.reduce((e,r,o)=>{let u=t[o];if(u&&u.call){let e=u(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;u=t?"."+t:e&&e.props?"":e}return e+r+(null==u?"":u)},"");function p(e){let t=this||{},n=e.call?e(t.p):e;return f(n.map?_(n,[].slice.call(arguments,1),t.p):n,o(t.target),t.g,t.o)}let d,h,m=p.bind({g:1});function v(e,t,n){l.p=t,d=e,h=n}function y(e,t){let n=this||{};return function(){let r=arguments;function o(u,i){let c=Object.assign({},u),l=c.className||o.className;return n.p=Object.assign({theme:h&&h()},c),n.o=/\s*go[0-9]+/g.test(l),c.className=p.apply(n,r)+(l?" "+l:""),t&&(c.ref=i),d(c.as||e,c)}return t?t(o):o}}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.actions=void 0;var u="SELECT_TODO",i="SAVE_TODO";t.actions={selectTodo:function(e){return{type:u,payload:e}},saveTodo:function(e){return{type:i,payload:e}}},t.initialState={selectedTodo:null,todos:[]},t.default=function(e,t){switch(t.type){case"SELECT_TODO":return r(r({},e),{selectedTodo:t.payload});case"SAVE_TODO":return r(r({},e),{todos:o(e.todos,[t.payload])});default:throw new Error("unexpected action type")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TodoDispatchContext=t.TodoStateContext=void 0;var r=n(0),o=n(3);t.TodoStateContext=r.createContext({state:o.initialState}),t.TodoDispatchContext=r.createContext({dispatch:function(){}})},function(e,t,n){"use strict";n.r(t),n.d(t,"subscribers",(function(){return p})),n.d(t,"getCurrentUrl",(function(){return h})),n.d(t,"route",(function(){return m})),n.d(t,"Router",(function(){return k})),n.d(t,"Route",(function(){return S})),n.d(t,"Link",(function(){return O})),n.d(t,"exec",(function(){return i}));var r=n(0),o={};function u(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t,n){var r,u=/(?:\?([^#]*))?(#.*)?$/,i=e.match(u),c={};if(i&&i[1])for(var l=i[1].split("&"),s=0;s<l.length;s++){var f=l[s].split("=");c[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}e=a(e.replace(u,"")),t=a(t||"");for(var _=Math.max(e.length,t.length),p=0;p<_;p++)if(t[p]&&":"===t[p].charAt(0)){var d=t[p].replace(/(^:|[+*?]+$)/g,""),h=(t[p].match(/[+*?]+$/)||o)[0]||"",m=~h.indexOf("+"),v=~h.indexOf("*"),y=e[p]||"";if(!y&&!v&&(h.indexOf("?")<0||m)){r=!1;break}if(c[d]=decodeURIComponent(y),m||v){c[d]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,a(t).map(s).join(""));var t}(e),e.props}function a(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function s(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var f=null,_=[],p=[],d={};function h(){var e;return""+((e=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(e.search||"")}function m(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=_.length;t--;)if(_[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),f&&f[t]?f[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),v(e)}function v(e){for(var t=!1,n=0;n<_.length;n++)!0===_[n].routeTo(e)&&(t=!0);for(var r=p.length;r--;)p[r](e);return t}function y(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return m(t)}}function b(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return y(e.currentTarget||e.target||this),g(e)}function g(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function C(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(y(t))return g(e)}}while(t=t.parentNode)}}var x=!1;var k=function(e){function t(t){e.call(this,t),t.history&&(f=t.history),this.state={url:t.url||h()},x||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){v(h())})),addEventListener("click",C)),x=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){_.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;f&&(this.unlisten=f.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),_.splice(_.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(c).map((function(e){var o=i(t,e.props.path,e.props);if(o){if(!1!==n){var c={url:t,matches:o};return u(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(e,c)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,u=t.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),u,!0),c=i[0]||null,l=this.previousUrl;return u!==l&&(this.previousUrl=u,"function"==typeof o&&o({router:this,url:u,previous:l,active:i,current:c})),c},t}(r.Component),O=function(e){return Object(r.createElement)("a",u({onClick:b},e))},S=function(e){return Object(r.createElement)(e.component,e)};k.subscribers=p,k.getCurrentUrl=h,k.route=m,k.Router=k,k.Route=S,k.Link=O,k.exec=i,t.default=k},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},o=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),u=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&o(t,e,n);return u(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c=n(0),l=n(7),a=n(5),s=n(2),f=i(n(3)),_=n(4),p=n(8),d=n(11);s.setup(c.h),s.glob(h||(h=r(["\n*,\n*:after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n}\n"],["\n*,\n*:after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n}\n"])));var h;c.render(c.h((function(){var e=l.useReducer(f.default,f.initialState),t=e[0],n=e[1];return c.h(_.TodoStateContext.Provider,{value:{state:t}},c.h(_.TodoDispatchContext.Provider,{value:{dispatch:n}},c.h(a.Router,null,c.h(a.Route,{path:"/",component:p.Todos}),c.h(a.Route,{path:"/todos/:id",component:d.Detail}))))}),null),document.body)},function(e,t,n){"use strict";n.r(t),n.d(t,"version",(function(){return D})),n.d(t,"Children",(function(){return p})),n.d(t,"render",(function(){return E})),n.d(t,"hydrate",(function(){return w})),n.d(t,"unmountComponentAtNode",(function(){return L})),n.d(t,"createPortal",(function(){return O})),n.d(t,"createFactory",(function(){return U})),n.d(t,"cloneElement",(function(){return M})),n.d(t,"isValidElement",(function(){return N})),n.d(t,"findDOMNode",(function(){return H})),n.d(t,"PureComponent",(function(){return c})),n.d(t,"memo",(function(){return l})),n.d(t,"forwardRef",(function(){return f})),n.d(t,"unstable_batchedUpdates",(function(){return F})),n.d(t,"StrictMode",(function(){return W})),n.d(t,"Suspense",(function(){return v})),n.d(t,"SuspenseList",(function(){return g})),n.d(t,"lazy",(function(){return b}));var r=n(1);n.d(t,"useState",(function(){return r.useState})),n.d(t,"useReducer",(function(){return r.useReducer})),n.d(t,"useEffect",(function(){return r.useEffect})),n.d(t,"useLayoutEffect",(function(){return r.useLayoutEffect})),n.d(t,"useRef",(function(){return r.useRef})),n.d(t,"useImperativeHandle",(function(){return r.useImperativeHandle})),n.d(t,"useMemo",(function(){return r.useMemo})),n.d(t,"useCallback",(function(){return r.useCallback})),n.d(t,"useContext",(function(){return r.useContext})),n.d(t,"useDebugValue",(function(){return r.useDebugValue})),n.d(t,"useErrorBoundary",(function(){return r.useErrorBoundary}));var o=n(0);function u(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}n.d(t,"createElement",(function(){return o.createElement})),n.d(t,"createContext",(function(){return o.createContext})),n.d(t,"createRef",(function(){return o.createRef})),n.d(t,"Fragment",(function(){return o.Fragment})),n.d(t,"Component",(function(){return o.Component}));var c=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(e,t){return i(this.props,e)||i(this.state,t)},r}(o.Component);function l(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:i(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Object(o.createElement)(e,t)}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var a=o.options.__b;o.options.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),a&&a(e)};var s="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function f(e){function t(t,n){var r=u({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=s,t.render=t,t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var _=function(e,t){return e?Object(o.toChildArray)(e).reduce((function(e,n,r){return e.concat(t(n,r))}),[]):null},p={map:_,forEach:_,count:function(e){return e?Object(o.toChildArray)(e).length:0},only:function(e){if(1!==(e=Object(o.toChildArray)(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:o.toChildArray},d=o.options.__e;function h(e){return e&&((e=u({},e)).__c=null,e.__k=e.__k&&e.__k.map(h)),e}function m(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(m)),e}function v(){this.__u=0,this.o=null,this.__b=null}function y(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function b(e){var t,n,r;function u(u){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return Object(o.createElement)(n,u)}return u.displayName="Lazy",u.t=!0,u}function g(){this.i=null,this.l=null}o.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t.__c);d(e,t,n)},(v.prototype=new o.Component).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var r=y(n.__v),o=!1,u=function(){o||(o=!0,t.componentWillUnmount=t.__c,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){var e;if(!--n.__u)for(n.__v.__k[0]=m(n.state.u),n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(u,u)},v.prototype.componentWillUnmount=function(){this.o=[]},v.prototype.render=function(e,t){return this.__b&&(this.__v.__k&&(this.__v.__k[0]=h(this.__b)),this.__b=null),[Object(o.createElement)(o.Fragment,null,t.u?null:e.children),t.u&&e.fallback]};var C=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(g.prototype=new o.Component).u=function(e){var t=this,n=y(t.__v),r=t.l.get(e);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),C(t,e,r)):o()};n?n(u):u()}},g.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(o.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},g.prototype.componentDidUpdate=g.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){C(e,n,t)}))};var x=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children},e}();function k(e){var t=this,n=e.container,r=Object(o.createElement)(x,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Object(o.render)(r,n),t.__k=n.__k):(t.h=document.createTextNode(""),Object(o.hydrate)("",n),n.appendChild(t.h),t.p=!0,t.s=n,Object(o.render)(r,n,t.h),t.__k=t.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v)},null}function O(e,t){return Object(o.createElement)(k,{vnode:e,container:t})}var S=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;o.Component.prototype.isReactComponent={};var j="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function E(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Object(o.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function w(e,t,n){return Object(o.hydrate)(e,t),"function"==typeof n&&n(),e?e.__c:null}var P=o.options.event;function T(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}o.options.event=function(e){P&&(e=P(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var o=e.preventDefault;return e.preventDefault=function(){o.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var A={configurable:!0,get:function(){return this.class}},R=o.options.vnode;o.options.vnode=function(e){e.$$typeof=j;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(A.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",A)),"function"!=typeof t){var r,u,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(o.toChildArray)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),!0===n.download&&(n.download=""),n)if(r=S.test(i))break;if(r)for(i in u=e.props={},n)u[S.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(t){var n=e.type,r=e.props;if(r&&"string"==typeof n){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(T(t.prototype,"componentWillMount"),T(t.prototype,"componentWillReceiveProps"),T(t.prototype,"componentWillUpdate"),t.m=!0)}R&&R(e)};var D="16.8.0";function U(e){return o.createElement.bind(null,e)}function N(e){return!!e&&e.$$typeof===j}function M(e){return N(e)?o.cloneElement.apply(null,arguments):e}function L(e){return!!e.__k&&(Object(o.render)(null,e),!0)}function H(e){return e&&(e.base||1===e.nodeType&&e)||null}var F=function(e,t){return e(t)},W=o.Fragment;t.default={useState:r.useState,useReducer:r.useReducer,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useRef:r.useRef,useImperativeHandle:r.useImperativeHandle,useMemo:r.useMemo,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,version:"16.8.0",Children:p,render:E,hydrate:w,unmountComponentAtNode:L,createPortal:O,createElement:o.createElement,createContext:o.createContext,createFactory:U,cloneElement:M,createRef:o.createRef,Fragment:o.Fragment,isValidElement:N,findDOMNode:H,Component:o.Component,PureComponent:c,memo:l,forwardRef:f,unstable_batchedUpdates:F,StrictMode:o.Fragment,Suspense:v,SuspenseList:g,lazy:b}},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0}),t.Todos=void 0;var o=n(0),u=n(1),i=n(5),c=n(2),l=n(4),a=n(3),s=n(9),f=n(10);t.Todos=function(){var e=u.useContext(l.TodoStateContext),t=u.useContext(l.TodoDispatchContext),n=e.state,r=t.dispatch;return o.h(v,null,o.h(y,null,"TODO LIST"),o.h(g,null,n.todos.map((function(e){return o.h(i.Link,{href:"/todos/"+e.id,onClick:function(){r(a.actions.selectTodo(e))}},o.h(C,{data:e,key:e.id}))}))),o.h("form",{onSubmit:function(e){e.preventDefault();try{var t=e.target.todo.value,n=s.genRandomId();r(a.actions.saveTodo({id:n,todo:t}))}catch(e){console.error(e),alert("入力の保存に失敗しました。")}}},o.h(b,{name:"todo"}),o.h("button",null,"submit")))};var _,p,d,h,m,v=c.styled("div")(_||(_=r(["\n  padding: 12px;\n"],["\n  padding: 12px;\n"]))),y=c.styled("h1")(p||(p=r(["\n  font-size: 3rem;\n  margin-bottm: 0.8rem;\n"],["\n  font-size: 3rem;\n  margin-bottm: 0.8rem;\n"]))),b=c.styled("input")(d||(d=r(["\n  margin-top: 1.2rem;\n  margin-right: 0.8rem;\n"],["\n  margin-top: 1.2rem;\n  margin-right: 0.8rem;\n"]))),g=c.styled("div")(h||(h=r(["\n  display: flex;\n  flex-direction: row;\n  @media screen and (max-width: 450px) {\n    flex-direction: column;\n  }\n"],["\n  display: flex;\n  flex-direction: row;\n  @media screen and (max-width: 450px) {\n    flex-direction: column;\n  }\n"]))),C=c.styled(f.Item)(m||(m=r(["\n  border: solid 1px #ccc;\n  border-radius: 8px;\n  margin: 4px 12px;\n  @media screen and (max-width: 450px) {\n    flex-direction: column;\n    margin: 12px 0px;\n  }\n"],["\n  border: solid 1px #ccc;\n  border-radius: 8px;\n  margin: 4px 12px;\n  @media screen and (max-width: 450px) {\n    flex-direction: column;\n    margin: 12px 0px;\n  }\n"])))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genRandomId=void 0,t.genRandomId=function(){return Math.random().toString(32).substring(2)}},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0}),t.Item=void 0;var o=n(0),u=n(2);t.Item=function(e){return console.log(e.data.id),o.h(l,{className:e.className},o.h(a,null,e.data.todo))};var i,c,l=u.styled("div")(i||(i=r(["\n  padding: 12px;\n"],["\n  padding: 12px;\n"]))),a=u.styled("p")(c||(c=r(["\n  font-size: 1.6rem;\n"],["\n  font-size: 1.6rem;\n"])))},function(e,t,n){"use strict";var r=this&&this.__makeTemplateObject||function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e};Object.defineProperty(t,"__esModule",{value:!0}),t.Detail=void 0;var o=n(0),u=n(2),i=n(1),c=n(4);t.Detail=function(){var e,t=i.useContext(c.TodoStateContext).state;return o.h(a,null,null===(e=t.selectedTodo)||void 0===e?void 0:e.todo)};var l,a=u.styled("div")(l||(l=r(["\n  padding: 12px;\n  font-size: 1.6rem;\n"],["\n  padding: 12px;\n  font-size: 1.6rem;\n"])))}]);