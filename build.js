!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";n.r(t),n.d(t,"render",(function(){return L})),n.d(t,"hydrate",(function(){return H})),n.d(t,"createElement",(function(){return h})),n.d(t,"h",(function(){return h})),n.d(t,"Fragment",(function(){return y})),n.d(t,"createRef",(function(){return m})),n.d(t,"isValidElement",(function(){return o})),n.d(t,"Component",(function(){return g})),n.d(t,"cloneElement",(function(){return F})),n.d(t,"createContext",(function(){return W})),n.d(t,"toChildArray",(function(){return E})),n.d(t,"__u",(function(){return T})),n.d(t,"options",(function(){return r}));var r,o,u,i,c,l,a,_={},f=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function p(e,t){for(var n in t)e[n]=t[n];return e}function d(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n){var r,o=arguments,u={};for(r in t)"key"!==r&&"ref"!==r&&(u[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(u.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return v(e,u,t&&t.key,t&&t.ref,null)}function v(e,t,n,o,u){var i={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:u};return null==u&&(i.__v=i),r.vnode&&r.vnode(i),i}function m(){return{current:null}}function y(e){return e.children}function g(e,t){this.props=e,this.context=t}function b(e,t){if(null==t)return e.__?b(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?b(e):null}function C(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return C(e)}}function k(e){(!e.__d&&(e.__d=!0)&&u.push(e)&&!O.__r++||c!==r.debounceRendering)&&((c=r.debounceRendering)||i)(O)}function O(){for(var e;O.__r=u.length;)e=u.sort((function(e,t){return e.__v.__b-t.__v.__b})),u=[],e.some((function(e){var t,n,r,o,u,i,c;e.__d&&(i=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],(r=p({},u)).__v=r,o=R(c,u,r,t.__n,void 0!==c.ownerSVGElement,null,n,null==i?b(u):i),U(n,u),o!=i&&C(u)))}))}function x(e,t,n,r,o,u,i,c,l,a){var s,p,h,m,g,C,k,O=r&&r.__k||f,x=O.length;for(l==_&&(l=null!=i?i[0]:x?b(r,0):null),n.__k=[],s=0;s<t.length;s++)if(null!=(m=n.__k[s]=null==(m=t[s])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?v(null,m,null,null,m):Array.isArray(m)?v(y,{children:m},null,null,null):null!=m.__e||null!=m.__c?v(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(h=O[s])||h&&m.key==h.key&&m.type===h.type)O[s]=void 0;else for(p=0;p<x;p++){if((h=O[p])&&m.key==h.key&&m.type===h.type){O[p]=void 0;break}h=null}g=R(e,m,h=h||_,o,u,i,c,l,a),(p=m.ref)&&h.ref!=p&&(k||(k=[]),h.ref&&k.push(h.ref,null,m),k.push(p,m.__c||g,m)),null!=g?(null==C&&(C=g),l=S(e,m,h,O,i,g,l),a||"option"!=n.type?"function"==typeof n.type&&(n.__d=l):e.value=""):l&&h.__e==l&&l.parentNode!=e&&(l=b(h))}if(n.__e=C,null!=i&&"function"!=typeof n.type)for(s=i.length;s--;)null!=i[s]&&d(i[s]);for(s=x;s--;)null!=O[s]&&T(O[s],O[s]);if(k)for(s=0;s<k.length;s++)N(k[s],k[++s],k[++s])}function E(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?f.concat.apply([],e.map(E)):[e]}function S(e,t,n,r,o,u,i){var c,l,a;if(void 0!==t.__d)c=t.__d,t.__d=void 0;else if(o==n||u!=i||null==u.parentNode)e:if(null==i||i.parentNode!==e)e.appendChild(u),c=null;else{for(l=i,a=0;(l=l.nextSibling)&&a<r.length;a+=2)if(l==u)break e;e.insertBefore(u,i),c=i}return void 0!==c?c:u.nextSibling}function j(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===s.test(t)?n+"px":null==n?"":n}function A(e,t,n,r,o){var u,i,c,l,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(u=e.style,"string"==typeof n)u.cssText=n;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(l in r)n&&l in n||j(u,l,"");if(n)for(a in n)r&&n[a]===r[a]||j(u,a,n[a])}else"o"===t[0]&&"n"===t[1]?(i=t!==(t=t.replace(/Capture$/,"")),c=t.toLowerCase(),t=(c in e?c:t).slice(2),n?(r||e.addEventListener(t,w,i),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,w,i)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function w(e){this.l[e.type](r.event?r.event(e):e)}function P(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&P(o,t,n),t=S(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function R(e,t,n,o,u,i,c,l,a){var _,f,s,d,h,v,m,b,C,k,O,E=t.type;if(void 0!==t.constructor)return null;(_=r.__b)&&_(t);try{e:if("function"==typeof E){if(b=t.props,C=(_=E.contextType)&&o[_.__c],k=_?C?C.props.value:_.__:o,n.__c?m=(f=t.__c=n.__c).__=f.__E:("prototype"in E&&E.prototype.render?t.__c=f=new E(b,k):(t.__c=f=new g(b,k),f.constructor=E,f.render=D),C&&C.sub(f),f.props=b,f.state||(f.state={}),f.context=k,f.__n=o,s=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=E.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=p({},f.__s)),p(f.__s,E.getDerivedStateFromProps(b,f.__s))),d=f.props,h=f.state,s)null==E.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==E.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,k),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,k)||t.__v===n.__v){f.props=b,f.state=f.__s,t.__v!==n.__v&&(f.__d=!1),f.__v=t,t.__e=n.__e,t.__k=n.__k,f.__h.length&&c.push(f),P(t,l,e);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,k),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,h,v)}))}f.context=k,f.props=b,f.state=f.__s,(_=r.__r)&&_(t),f.__d=!1,f.__v=t,f.__P=e,_=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(o=p(p({},o),f.getChildContext())),s||null==f.getSnapshotBeforeUpdate||(v=f.getSnapshotBeforeUpdate(d,h)),O=null!=_&&_.type==y&&null==_.key?_.props.children:_,x(e,Array.isArray(O)?O:[O],t,n,o,u,i,c,l,a),f.base=t.__e,f.__h.length&&c.push(f),m&&(f.__E=f.__=null),f.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=M(n.__e,t,n,o,u,i,c,a);(_=r.diffed)&&_(t)}catch(e){t.__v=null,r.__e(e,t,n)}return t.__e}function U(e,t){r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function M(e,t,n,r,o,u,i,c){var l,a,s,p,d,h=n.props,v=t.props;if(o="svg"===t.type||o,null!=u)for(l=0;l<u.length;l++)if(null!=(a=u[l])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,u[l]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),u=null,c=!1}if(null===t.type)h!==v&&e.data!==v&&(e.data=v);else{if(null!=u&&(u=f.slice.call(e.childNodes)),s=(h=n.props||_).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=u)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||s)&&(p&&s&&p.__html==s.__html||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,r,o){var u;for(u in n)"children"===u||"key"===u||u in t||A(e,u,null,n[u],r);for(u in t)o&&"function"!=typeof t[u]||"children"===u||"key"===u||"value"===u||"checked"===u||n[u]===t[u]||A(e,u,t[u],n[u],r)})(e,v,h,o,c),p?t.__k=[]:(l=t.props.children,x(e,Array.isArray(l)?l:[l],t,n,r,"foreignObject"!==t.type&&o,u,i,_,c)),c||("value"in v&&void 0!==(l=v.value)&&l!==e.value&&A(e,"value",l,h.value,!1),"checked"in v&&void 0!==(l=v.checked)&&l!==e.checked&&A(e,"checked",l,h.checked,!1))}return e}function N(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function T(e,t,n){var o,u,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||N(o,null,t)),n||"function"==typeof e.type||(n=null!=(u=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&T(o[i],t,n);null!=u&&d(u)}function D(e,t,n){return this.constructor(e,n)}function L(e,t,n){var o,u,i;r.__&&r.__(e,t),u=(o=n===l)?null:n&&n.__k||t.__k,e=h(y,null,[e]),i=[],R(t,(o?t:n||t).__k=e,u||_,_,void 0!==t.ownerSVGElement,n&&!o?[n]:u?null:t.childNodes.length?f.slice.call(t.childNodes):null,i,n||_,o),U(i,e)}function H(e,t){L(e,t,l)}function F(e,t){var n,r;for(r in t=p(p({},e.props),t),arguments.length>2&&(t.children=f.slice.call(arguments,2)),n={},t)"key"!==r&&"ref"!==r&&(n[r]=t[r]);return v(e.type,n,t.key||e.key,t.ref||e.ref,null)}function W(e){var t={},n={__c:"__cC"+a++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,k(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}r={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return k(n.__E=n)}catch(t){e=t}throw e}},o=function(e){return null!=e&&void 0===e.constructor},g.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),k(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},g.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,O.__r=0,l=_,a=0},function(e,t,n){"use strict";n.r(t),n.d(t,"useState",(function(){return d})),n.d(t,"useReducer",(function(){return h})),n.d(t,"useEffect",(function(){return v})),n.d(t,"useLayoutEffect",(function(){return m})),n.d(t,"useRef",(function(){return y})),n.d(t,"useImperativeHandle",(function(){return g})),n.d(t,"useMemo",(function(){return b})),n.d(t,"useCallback",(function(){return C})),n.d(t,"useContext",(function(){return k})),n.d(t,"useDebugValue",(function(){return O})),n.d(t,"useErrorBoundary",(function(){return x}));var r,o,u,i=n(0),c=0,l=[],a=i.options.__r,_=i.options.diffed,f=i.options.__c,s=i.options.unmount;function p(e,t){i.options.__h&&i.options.__h(o,e,c||t),c=0;var n=o.__H||(o.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function d(e){return c=1,h(P,e)}function h(e,t,n){var u=p(r++,2);return u.t=e,u.__c||(u.__c=o,u.__=[n?n(t):P(void 0,t),function(e){var t=u.t(u.__[0],e);u.__[0]!==t&&(u.__=[t,u.__[1]],u.__c.setState({}))}]),u.__}function v(e,t){var n=p(r++,3);!i.options.__s&&w(n.__H,t)&&(n.__=e,n.__H=t,o.__H.__h.push(n))}function m(e,t){var n=p(r++,4);!i.options.__s&&w(n.__H,t)&&(n.__=e,n.__H=t,o.__h.push(n))}function y(e){return c=5,b((function(){return{current:void 0===e?null:e}}),[])}function g(e,t,n){c=6,m((function(){"function"==typeof e?e(t()):e&&(e.current=t())}),null==n?n:n.concat(e))}function b(e,t){var n=p(r++,7);return w(n.__H,t)?(n.__H=t,n.__h=e,n.__=e()):n.__}function C(e,t){return c=8,b((function(){return e}),t)}function k(e){var t=o.context[e.__c],n=p(r++,9);return n.__c=e,t?(null==n.__&&(n.__=!0,t.sub(o)),t.props.value):e.__}function O(e,t){i.options.useDebugValue&&i.options.useDebugValue(t?t(e):e)}function x(e){var t=p(r++,10),n=d();return t.__=e,o.componentDidCatch||(o.componentDidCatch=function(e){t.__&&t.__(e),n[1](e)}),[n[0],function(){n[1](void 0)}]}function E(){l.some((function(e){if(e.__P)try{e.__H.__h.forEach(j),e.__H.__h.forEach(A),e.__H.__h=[]}catch(t){return e.__H.__h=[],i.options.__e(t,e.__v),!0}})),l=[]}i.options.__r=function(e){a&&a(e),r=0;var t=(o=e.__c).__H;t&&(t.__h.forEach(j),t.__h.forEach(A),t.__h=[])},i.options.diffed=function(e){_&&_(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(1!==l.push(t)&&u===i.options.requestAnimationFrame||((u=i.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(r),S&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);S&&(t=requestAnimationFrame(n))})(E))},i.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(j),e.__h=e.__h.filter((function(e){return!e.__||A(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],i.options.__e(n,e.__v)}})),f&&f(e,t)},i.options.unmount=function(e){s&&s(e);var t=e.__c;if(t&&t.__H)try{t.__H.__.forEach(j)}catch(e){i.options.__e(e,t.__v)}};var S="function"==typeof requestAnimationFrame;function j(e){"function"==typeof e.u&&e.u()}function A(e){e.u=e.__()}function w(e,t){return!e||t.some((function(t,n){return t!==e[n]}))}function P(e,t){return"function"==typeof t?t(e):t}},function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var u=arguments[t],i=0,c=u.length;i<c;i++,o++)r[o]=u[i];return r};Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.actions=void 0;var u="SELECT_TODO",i="SAVE_TODO";t.actions={selectTodo:function(e){return{type:u,payload:e}},saveTodo:function(e){return{type:i,payload:e}}},t.initialState={selectedTodo:null,todos:[]},t.default=function(e,t){switch(t.type){case"SELECT_TODO":return r(r({},e),{selectedMovie:t.payload});case"SAVE_TODO":return r(r({},e),{todos:o(e.todos,[t.payload])});default:throw new Error("unexpected action type")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TodoContext=void 0;var r=n(0),o=n(2);t.TodoContext=r.createContext({state:o.initialState,dispatch:function(){}})},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),c=n(5),l=n(6),a=n(7),_=u(n(2)),f=n(3),s=n(8),p=n(10);a.setup(i.h);i.render(i.h((function(){var e=c.useReducer(_.default,_.initialState),t=e[0],n=e[1];return i.h(f.TodoContext.Provider,{value:{state:t,dispatch:n}},i.h(l.Router,null,i.h(l.Route,{path:"/",component:s.Todos}),i.h(l.Route,{path:"/todos/:id",component:p.Detail})))}),null),document.body)},function(e,t,n){"use strict";n.r(t),n.d(t,"version",(function(){return M})),n.d(t,"Children",(function(){return p})),n.d(t,"render",(function(){return j})),n.d(t,"hydrate",(function(){return A})),n.d(t,"unmountComponentAtNode",(function(){return L})),n.d(t,"createPortal",(function(){return x})),n.d(t,"createFactory",(function(){return N})),n.d(t,"cloneElement",(function(){return D})),n.d(t,"isValidElement",(function(){return T})),n.d(t,"findDOMNode",(function(){return H})),n.d(t,"PureComponent",(function(){return c})),n.d(t,"memo",(function(){return l})),n.d(t,"forwardRef",(function(){return f})),n.d(t,"unstable_batchedUpdates",(function(){return F})),n.d(t,"StrictMode",(function(){return W})),n.d(t,"Suspense",(function(){return m})),n.d(t,"SuspenseList",(function(){return b})),n.d(t,"lazy",(function(){return g}));var r=n(1);n.d(t,"useState",(function(){return r.useState})),n.d(t,"useReducer",(function(){return r.useReducer})),n.d(t,"useEffect",(function(){return r.useEffect})),n.d(t,"useLayoutEffect",(function(){return r.useLayoutEffect})),n.d(t,"useRef",(function(){return r.useRef})),n.d(t,"useImperativeHandle",(function(){return r.useImperativeHandle})),n.d(t,"useMemo",(function(){return r.useMemo})),n.d(t,"useCallback",(function(){return r.useCallback})),n.d(t,"useContext",(function(){return r.useContext})),n.d(t,"useDebugValue",(function(){return r.useDebugValue})),n.d(t,"useErrorBoundary",(function(){return r.useErrorBoundary}));var o=n(0);function u(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t){for(var n in e)if("__source"!==n&&!(n in t))return!0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return!0;return!1}n.d(t,"createElement",(function(){return o.createElement})),n.d(t,"createContext",(function(){return o.createContext})),n.d(t,"createRef",(function(){return o.createRef})),n.d(t,"Fragment",(function(){return o.Fragment})),n.d(t,"Component",(function(){return o.Component}));var c=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).isPureReactComponent=!0,n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.shouldComponentUpdate=function(e,t){return i(this.props,e)||i(this.state,t)},r}(o.Component);function l(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:i(this.props,e)}function r(t){return this.shouldComponentUpdate=n,Object(o.createElement)(e,t)}return r.prototype.isReactComponent=!0,r.displayName="Memo("+(e.displayName||e.name)+")",r.t=!0,r}var a=o.options.__b;o.options.__b=function(e){e.type&&e.type.t&&e.ref&&(e.props.ref=e.ref,e.ref=null),a&&a(e)};var _="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function f(e){function t(t,n){var r=u({},t);return delete r.ref,e(r,(n=t.ref||n)&&("object"!=typeof n||"current"in n)?n:null)}return t.$$typeof=_,t.render=t,t.prototype.isReactComponent=t.t=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t}var s=function(e,t){return e?Object(o.toChildArray)(e).reduce((function(e,n,r){return e.concat(t(n,r))}),[]):null},p={map:s,forEach:s,count:function(e){return e?Object(o.toChildArray)(e).length:0},only:function(e){if(1!==(e=Object(o.toChildArray)(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:o.toChildArray},d=o.options.__e;function h(e){return e&&((e=u({},e)).__c=null,e.__k=e.__k&&e.__k.map(h)),e}function v(e){return e&&(e.__v=null,e.__k=e.__k&&e.__k.map(v)),e}function m(){this.__u=0,this.o=null,this.__b=null}function y(e){var t=e.__.__c;return t&&t.u&&t.u(e)}function g(e){var t,n,r;function u(u){if(t||(t=e()).then((function(e){n=e.default||e}),(function(e){r=e})),r)throw r;if(!n)throw t;return Object(o.createElement)(n,u)}return u.displayName="Lazy",u.t=!0,u}function b(){this.i=null,this.l=null}o.options.__e=function(e,t,n){if(e.then)for(var r,o=t;o=o.__;)if((r=o.__c)&&r.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),r.__c(e,t.__c);d(e,t,n)},(m.prototype=new o.Component).__c=function(e,t){var n=this;null==n.o&&(n.o=[]),n.o.push(t);var r=y(n.__v),o=!1,u=function(){o||(o=!0,t.componentWillUnmount=t.__c,r?r(i):i())};t.__c=t.componentWillUnmount,t.componentWillUnmount=function(){u(),t.__c&&t.__c()};var i=function(){var e;if(!--n.__u)for(n.__v.__k[0]=v(n.state.u),n.setState({u:n.__b=null});e=n.o.pop();)e.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),e.then(u,u)},m.prototype.componentWillUnmount=function(){this.o=[]},m.prototype.render=function(e,t){return this.__b&&(this.__v.__k&&(this.__v.__k[0]=h(this.__b)),this.__b=null),[Object(o.createElement)(o.Fragment,null,t.u?null:e.children),t.u&&e.fallback]};var C=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};(b.prototype=new o.Component).u=function(e){var t=this,n=y(t.__v),r=t.l.get(e);return r[0]++,function(o){var u=function(){t.props.revealOrder?(r.push(o),C(t,e,r)):o()};n?n(u):u()}},b.prototype.render=function(e){this.i=null,this.l=new Map;var t=Object(o.toChildArray)(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},b.prototype.componentDidUpdate=b.prototype.componentDidMount=function(){var e=this;e.l.forEach((function(t,n){C(e,n,t)}))};var k=function(){function e(){}var t=e.prototype;return t.getChildContext=function(){return this.props.context},t.render=function(e){return e.children},e}();function O(e){var t=this,n=e.container,r=Object(o.createElement)(k,{context:t.context},e.vnode);return t.s&&t.s!==n&&(t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v),t.p=!1),e.vnode?t.p?(n.__k=t.__k,Object(o.render)(r,n),t.__k=n.__k):(t.h=document.createTextNode(""),Object(o.hydrate)("",n),n.appendChild(t.h),t.p=!0,t.s=n,Object(o.render)(r,n,t.h),t.__k=t.h.__k):t.p&&(t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v)),t.v=r,t.componentWillUnmount=function(){t.h.parentNode&&t.s.removeChild(t.h),Object(o.__u)(t.v)},null}function x(e,t){return Object(o.createElement)(O,{vnode:e,container:t})}var E=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;o.Component.prototype.isReactComponent={};var S="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;function j(e,t,n){if(null==t.__k)for(;t.firstChild;)t.removeChild(t.firstChild);return Object(o.render)(e,t),"function"==typeof n&&n(),e?e.__c:null}function A(e,t,n){return Object(o.hydrate)(e,t),"function"==typeof n&&n(),e?e.__c:null}var w=o.options.event;function P(e,t){e["UNSAFE_"+t]&&!e[t]&&Object.defineProperty(e,t,{configurable:!1,get:function(){return this["UNSAFE_"+t]},set:function(e){this["UNSAFE_"+t]=e}})}o.options.event=function(e){w&&(e=w(e)),e.persist=function(){};var t=!1,n=!1,r=e.stopPropagation;e.stopPropagation=function(){r.call(e),t=!0};var o=e.preventDefault;return e.preventDefault=function(){o.call(e),n=!0},e.isPropagationStopped=function(){return t},e.isDefaultPrevented=function(){return n},e.nativeEvent=e};var R={configurable:!0,get:function(){return this.class}},U=o.options.vnode;o.options.vnode=function(e){e.$$typeof=S;var t=e.type,n=e.props;if(t){if(n.class!=n.className&&(R.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",R)),"function"!=typeof t){var r,u,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===t&&(Object(o.toChildArray)(n.children).forEach((function(e){-1!=n.value.indexOf(e.props.value)&&(e.props.selected=!0)})),delete n.value),!0===n.download&&(n.download=""),n)if(r=E.test(i))break;if(r)for(i in u=e.props={},n)u[E.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(t){var n=e.type,r=e.props;if(r&&"string"==typeof n){var o={};for(var u in r)/^on(Ani|Tra|Tou)/.test(u)&&(r[u.toLowerCase()]=r[u],delete r[u]),o[u.toLowerCase()]=u;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var i=o.oninput||"oninput";r[i]||(r[i]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof t&&!t.m&&t.prototype&&(P(t.prototype,"componentWillMount"),P(t.prototype,"componentWillReceiveProps"),P(t.prototype,"componentWillUpdate"),t.m=!0)}U&&U(e)};var M="16.8.0";function N(e){return o.createElement.bind(null,e)}function T(e){return!!e&&e.$$typeof===S}function D(e){return T(e)?o.cloneElement.apply(null,arguments):e}function L(e){return!!e.__k&&(Object(o.render)(null,e),!0)}function H(e){return e&&(e.base||1===e.nodeType&&e)||null}var F=function(e,t){return e(t)},W=o.Fragment;t.default={useState:r.useState,useReducer:r.useReducer,useEffect:r.useEffect,useLayoutEffect:r.useLayoutEffect,useRef:r.useRef,useImperativeHandle:r.useImperativeHandle,useMemo:r.useMemo,useCallback:r.useCallback,useContext:r.useContext,useDebugValue:r.useDebugValue,version:"16.8.0",Children:p,render:j,hydrate:A,unmountComponentAtNode:L,createPortal:x,createElement:o.createElement,createContext:o.createContext,createFactory:N,cloneElement:D,createRef:o.createRef,Fragment:o.Fragment,isValidElement:T,findDOMNode:H,Component:o.Component,PureComponent:c,memo:l,forwardRef:f,unstable_batchedUpdates:F,StrictMode:o.Fragment,Suspense:m,SuspenseList:b,lazy:g}},function(e,t,n){"use strict";n.r(t),n.d(t,"subscribers",(function(){return p})),n.d(t,"getCurrentUrl",(function(){return h})),n.d(t,"route",(function(){return v})),n.d(t,"Router",(function(){return O})),n.d(t,"Route",(function(){return E})),n.d(t,"Link",(function(){return x})),n.d(t,"exec",(function(){return i}));var r=n(0),o={};function u(e,t){for(var n in t)e[n]=t[n];return e}function i(e,t,n){var r,u=/(?:\?([^#]*))?(#.*)?$/,i=e.match(u),c={};if(i&&i[1])for(var l=i[1].split("&"),_=0;_<l.length;_++){var f=l[_].split("=");c[decodeURIComponent(f[0])]=decodeURIComponent(f.slice(1).join("="))}e=a(e.replace(u,"")),t=a(t||"");for(var s=Math.max(e.length,t.length),p=0;p<s;p++)if(t[p]&&":"===t[p].charAt(0)){var d=t[p].replace(/(^:|[+*?]+$)/g,""),h=(t[p].match(/[+*?]+$/)||o)[0]||"",v=~h.indexOf("+"),m=~h.indexOf("*"),y=e[p]||"";if(!y&&!m&&(h.indexOf("?")<0||v)){r=!1;break}if(c[d]=decodeURIComponent(y),v||m){c[d]=e.slice(p).map(decodeURIComponent).join("/");break}}else if(t[p]!==e[p]){r=!1;break}return(!0===n.default||!1!==r)&&c}function c(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function l(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,a(t).map(_).join(""));var t}(e),e.props}function a(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function _(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}var f=null,s=[],p=[],d={};function h(){var e;return""+((e=f&&f.location?f.location:f&&f.getCurrentLocation?f.getCurrentLocation():"undefined"!=typeof location?location:d).pathname||"")+(e.search||"")}function v(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=s.length;t--;)if(s[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),f&&f[t]?f[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),m(e)}function m(e){for(var t=!1,n=0;n<s.length;n++)!0===s[n].routeTo(e)&&(t=!0);for(var r=p.length;r--;)p[r](e);return t}function y(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return v(t)}}function g(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return y(e.currentTarget||e.target||this),b(e)}function b(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function C(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(y(t))return b(e)}}while(t=t.parentNode)}}var k=!1;var O=function(e){function t(t){e.call(this,t),t.history&&(f=t.history),this.state={url:t.url||h()},k||("function"==typeof addEventListener&&(f||addEventListener("popstate",(function(){m(h())})),addEventListener("click",C)),k=!0)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(r.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){s.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;f&&(this.unlisten=f.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),s.splice(s.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(l).sort(c).map((function(e){var o=i(t,e.props.path,e.props);if(o){if(!1!==n){var c={url:t,matches:o};return u(c,o),delete c.ref,delete c.key,Object(r.cloneElement)(e,c)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,o=e.onChange,u=t.url,i=this.getMatchingChildren(Object(r.toChildArray)(n),u,!0),c=i[0]||null,l=this.previousUrl;return u!==l&&(this.previousUrl=u,"function"==typeof o&&o({router:this,url:u,previous:l,active:i,current:c})),c},t}(r.Component),x=function(e){return Object(r.createElement)("a",u({onClick:g},e))},E=function(e){return Object(r.createElement)(e.component,e)};O.subscribers=p,O.getCurrentUrl=h,O.route=v,O.Router=O,O.Route=E,O.Link=x,O.exec=i,t.default=O},function(e,t,n){"use strict";n.r(t),n.d(t,"css",(function(){return p})),n.d(t,"extractCss",(function(){return u})),n.d(t,"glob",(function(){return v})),n.d(t,"setup",(function(){return m})),n.d(t,"styled",(function(){return y}));let r={data:""},o=e=>{try{let t=e?e.querySelector("#_goober"):self._goober;return t||(t=(e||document.head).appendChild(document.createElement("style")),t.innerHTML=" ",t.id="_goober"),t.firstChild}catch(e){}return e||r},u=e=>{let t=o(e),n=t.data;return t.data="",n},i=/(?:([a-z0-9-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(})/gi,c=/\/\*[\s\S]*?\*\/|\s{2,}|\n/gm,l=(e,t,n)=>{let r,o="",u="",i="";for(let c in e){let a=e[c];"object"==typeof a?(r=t.replace(/([^,])+/g,"$& "+c)||c,/&/g.test(c)&&(r=c.replace(/&/g,t)),u+="@"==c[0]?"f"==c[1]?l(a,c):c+"{"+l(a,"k"==c[1]?"":t)+"}":l(a,r,n)):"@"==c[0]&&"i"==c[1]?o=c+" "+a+";":i+=l.p?l.p(c.replace(/[A-Z]/g,"-$&").toLowerCase(),a):c.replace(/[A-Z]/g,"-$&").toLowerCase()+":"+a+";"}return i[0]?(r=t+"{"+i+"}",n?u+n+"{"+("@"==n[0]?r:t+i)+"}":o+r+u):o+u},a={},_=e=>{let t="";for(let n in e)t+=n+("object"==typeof e[n]?_(e[n]):e[n]);return t},f=(e,t,n,r)=>{let o=e.toLowerCase?e:_(e),u=a[o]||(a[o]="go"+o.split("").reduce((e,t)=>101*e+t.charCodeAt(0)>>>0,11));return((e,t,n)=>{t.data.indexOf(e)<0&&(t.data=n?e+t.data:t.data+e)})(a[u]||(a[u]=l(e[0]?(e=>{let t,n=[{}];for(;t=i.exec(e.replace(c,""));)t[4]&&n.shift(),t[3]?n.unshift(n[0][t[3]]=n[0][t[3]]||{}):t[4]||(n[0][t[1]]=t[2]);return n[0]})(e):e,n?"":"."+u)),t,r),u},s=(e,t,n)=>e.reduce((e,r,o)=>{let u=t[o];if(u&&u.call){let e=u(n),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;u=t?"."+t:e&&e.props?"":e}return e+r+(null==u?"":u)},"");function p(e){let t=this||{},n=e.call?e(t.p):e;return f(n.map?s(n,[].slice.call(arguments,1),t.p):n,o(t.target),t.g,t.o)}let d,h,v=p.bind({g:1});function m(e,t,n){l.p=t,d=e,h=n}function y(e,t){let n=this||{};return function(){let r=arguments;function o(u,i){let c=Object.assign({},u),l=c.className||o.className;return n.p=Object.assign({theme:h&&h()},c),n.o=/\s*go[0-9]+/g.test(l),c.className=p.apply(n,r)+(l?" "+l:""),t&&(c.ref=i),d(c.as||e,c)}return t?t(o):o}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Todos=void 0;var r=n(0),o=n(1),u=n(3),i=n(2),c=n(9);t.Todos=function(){var e=o.useContext(u.TodoContext),t=e.state,n=e.dispatch;return r.h("div",null,t.todos.map((function(e){return r.h("div",null,e.id,e.todo)})),r.h("form",{onSubmit:function(e){e.preventDefault();try{var t=e.target.todo.value,r=c.genRandomId();n(i.actions.saveTodo({id:r,todo:t}))}catch(e){console.error(e),alert("入力の保存に失敗しました。")}}},r.h("input",{name:"todo"}),r.h("button",null,"submit")))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.genRandomId=void 0,t.genRandomId=function(){return Math.random().toString(32).substring(2)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Detail=void 0;var r=n(0);t.Detail=function(){return r.h("div",null,"detail")}}]);