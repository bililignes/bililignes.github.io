(self.webpackChunkgatsby_starter_amsterdam=self.webpackChunkgatsby_starter_amsterdam||[]).push([[904],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,s,f;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(t[u],a[u]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(f=t.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;for(f=t.entries();!(u=f.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(f=t.entries();!(u=f.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(e&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!t.$$typeof)&&!i(t[s[u]],a[s[u]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=t(s.map((function(t){return t.props}))),l.canUseDOM?e(u):n&&(u=n(u))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=u;return u=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",c),l}}},9586:function(t,e,n){"use strict";var r=n(6771),o=(n(7294),n(3431)),i=(0,r.Z)("section",{target:"e1rg2g750"})("flex-grow:1;margin:0 auto;width:100%;padding:",(function(t){return t.noPadding?0:"2.5rem 1.5rem"}),";max-width:",(function(t){return t.fullWidth?"100%":t.theme.sizes.maxWidth}),";");e.Z=function(t){return(0,o.tZ)(i,t,t.children)}},3425:function(t,e,n){"use strict";n.d(e,{Z:function(){return Tt}});var r,o,i,a,c=n(7294),u=n(5697),s=n.n(u),f=n(4839),l=n.n(f),p=n(2993),d=n.n(p),y=n(6494),h=n.n(y),m="bodyAttributes",b="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(T).map((function(t){return T[t]})),"charset"),w="cssText",A="href",O="http-equiv",C="innerHTML",S="itemprop",E="name",j="property",P="rel",k="src",x="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",N="encodeSpecialCharacters",_="onChangeClientState",R="titleTemplate",Z=Object.keys(L).reduce((function(t,e){return t[L[e]]=e,t}),{}),B=[T.NOSCRIPT,T.SCRIPT,T.STYLE],D="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Y=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),F=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},U=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},z=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},K=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(t){var e=J(t,T.TITLE),n=J(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=J(t,I);return e||r||void 0},V=function(t){return J(t,_)||function(){}},$=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return F({},t,e)}),{})},Q=function(t,e){return e.filter((function(t){return void 0!==t[T.BASE]})).map((function(t){return t[T.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},G=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+H(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===e.indexOf(u)||n===P&&"canonical"===t[n].toLowerCase()||u===P&&"stylesheet"===t[u].toLowerCase()||(n=u),-1===e.indexOf(c)||c!==C&&c!==w&&c!==S||(n=c)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=h()({},r[c],o[c]);r[c]=u}return t}),[]).reverse()},J=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ot=null,it=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;ut(T.BODY,r),ut(T.HTML,o),ct(l,p);var d={baseTag:st(T.BASE,n),linkTags:st(T.LINK,i),metaTags:st(T.META,a),noscriptTags:st(T.NOSCRIPT,c),scriptTags:st(T.SCRIPT,s),styleTags:st(T.STYLE,f)},y={},h={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(y[t]=n),r.length&&(h[t]=d[t].oldTags)})),e&&e(),u(t,y,h)},at=function(t){return Array.isArray(t)?t.join(""):t},ct=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ut(T.TITLE,e)},ut=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(D),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),c=0;c<a.length;c++){var u=a[c],s=e[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(D):n.getAttribute(D)!==a.join(",")&&n.setAttribute(D,a.join(","))}},st=function(t,e){var n=document.head||document.querySelector(T.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===C)n.innerHTML=e.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var c=void 0===e[r]?"":e[r];n.setAttribute(r,c)}n.setAttribute(D,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ft=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},lt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[L[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case T.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[D]=!0,o=lt(n,r),[c.createElement(T.TITLE,o,t)];var t,n,r,o},toString:function(){return function(t,e,n,r){var o=ft(n),i=at(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+K(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case m:case b:return{toComponent:function(){return lt(e)},toString:function(){return ft(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[D]=!0,r);return Object.keys(e).forEach((function(t){var n=L[t]||t;if(n===C||n===w){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),c.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===C||t===w)})).reduce((function(t,e){var o=void 0===r[e]?e:e+'="'+K(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===B.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},dt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,c=t.noscriptTags,u=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,p=t.titleAttributes;return{base:pt(T.BASE,e,r),bodyAttributes:pt(m,n,r),htmlAttributes:pt(b,o,r),link:pt(T.LINK,i,r),meta:pt(T.META,a,r),noscript:pt(T.NOSCRIPT,c,r),script:pt(T.SCRIPT,u,r),style:pt(T.STYLE,s,r),title:pt(T.TITLE,{title:l,titleAttributes:p},r)}},yt=l()((function(t){return{baseTag:Q([A,x],t),bodyAttributes:$(m,t),defer:J(t,M),encode:J(t,N),htmlAttributes:$(b,t),linkTags:G(T.LINK,[P,A],t),metaTags:G(T.META,[E,v,O,j,S],t),noscriptTags:G(T.NOSCRIPT,[C],t),onChangeClientState:V(t),scriptTags:G(T.SCRIPT,[k,C],t),styleTags:G(T.STYLE,[w],t),title:W(t),titleAttributes:$(g,t)}}),(function(t){ot&&nt(ot),t.defer?ot=et((function(){it(t,(function(){ot=null}))})):(it(t),ot=null)}),dt)((function(){return null})),ht=(o=yt,a=i=function(t){function e(){return q(this,e),z(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!d()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:e};case T.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return F({},r,((e={})[n.type]=[].concat(r[n.type]||[],[F({},o,this.mapNestedChildrenToProps(n,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case T.TITLE:return F({},o,((e={})[r.type]=a,e.titleAttributes=F({},i),e));case T.BODY:return F({},o,{bodyAttributes:F({},i)});case T.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((n={})[r.type]=F({},i),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=F({},e);return Object.keys(t).forEach((function(e){var r;n=F({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return c.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[Z[n]||n]=t[n],e}),e)}(U(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=U(t,["children"]),r=F({},n);return e&&(r=this.mapChildrenToProps(e,r)),c.createElement(o,r)},Y(e,null,[{key:"canUseDOM",set:function(t){o.canUseDOM=t}}]),e}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var t=o.rewind();return t||(t=dt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ht.renderStatic=ht.rewind;var mt=ht,bt=n(1597),gt=n(3431),Tt=function(t){var e=t.title,n=t.description,r=t.image,o=(t.slug,(0,bt.useStaticQuery)("292498141").site),i=n||o.siteMetadata.description,a=e||o.siteMetadata.title,c=o.siteMetadata.url,u=o.siteMetadata.image?o.siteMetadata.image:c+"/og-image.jpg",s=r?c+r:u;return(0,gt.tZ)(mt,{htmlAttributes:{lang:"en"},title:e,defaultTitle:o.siteMetadata.title,titleTemplate:"%s | "+o.siteMetadata.title},(0,gt.tZ)("meta",{charSet:"utf-8"}),(0,gt.tZ)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,gt.tZ)("meta",{name:"image",content:r}),(0,gt.tZ)("meta",{name:"description",content:i}),(0,gt.tZ)("meta",{property:"og:title",content:a}),(0,gt.tZ)("meta",{property:"og:image",content:s}),(0,gt.tZ)("meta",{property:"og:description",content:i}),(0,gt.tZ)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,gt.tZ)("meta",{name:"twitter:title",content:a}),(0,gt.tZ)("meta",{name:"twitter:image",content:s}),(0,gt.tZ)("meta",{name:"twitter:description",content:i}))}}}]);
//# sourceMappingURL=1488be7800fe85547e1442d7504bf385603c821d-c2efdbf28dfe501e9ee3.js.map