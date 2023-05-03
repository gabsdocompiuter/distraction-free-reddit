/*! For license information please see content.js.LICENSE.txt */
!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var n,o,i=function(){var e=document.querySelector("._2BMnTatQ5gjKGK5OWROgaG"),t=/^https:\/\/www.reddit.com\/user\/([^\/]*)\/?(.*)/.exec(document.URL);return!(!t||!e)&&e.textContent===t[1]};!function(e){e[e.BLOCK=0]="BLOCK",e[e.WHITELIST=1]="WHITELIST",e[e.BLACKLIST=2]="BLACKLIST"}(n||(n={})),function(e){e[e.MAIN_FEED=0]="MAIN_FEED",e[e.USER_FEED=1]="USER_FEED",e[e.ALL=2]="ALL",e[e.COMMENTS=3]="COMMENTS",e[e.SIDEBAR=4]="SIDEBAR",e[e.SEARCH=5]="SEARCH"}(o||(o={}));var c,a={enabled:!0,mode:n.BLOCK,whitelist:[],blacklist:[],blocks:{mainFeed:!0,search:!0,sidebar:!0,userFeed:!0,all:!0,comments:!0}},s=function(e){switch(e){case 0:default:return n.BLOCK;case 1:return n.WHITELIST;case 2:return n.BLACKLIST}};function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(){u=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function a(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{a({},"")}catch(P){a=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof p?t:p,i=Object.create(o.prototype),c=new B(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=E(c,r);if(a){if(a===h)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,c),i}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var h={};function p(){}function d(){}function y(){}var v={};a(v,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(O([])));g&&g!==t&&r.call(g,o)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){a(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function n(o,i,c,a){var s=f(e[o],e,i);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==l(h)&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,c,a)}),(function(e){n("throw",e,c,a)})):t.resolve(h).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,a)}))}a(s.arg)}var o;this._invoke=function(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function B(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function O(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=y,a(w,"constructor",y),a(y,"constructor",d),d.displayName=a(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,a(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(k.prototype),a(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new k(s(t,r,n,o),i);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(w),a(w,c,"Generator"),a(w,o,(function(){return this})),a(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,B.prototype={constructor:B,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function f(e,t,r,n,o,i,c){try{var a=e[i](c),s=a.value}catch(l){return void r(l)}a.done?t(s):Promise.resolve(s).then(n,o)}function h(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function c(e){f(i,n,o,c,a,"next",e)}function a(e){f(i,n,o,c,a,"throw",e)}c(void 0)}))}}!function(e){e.HIDE_BLOCKER="HIDE_BLOCKER",e.HIDE_ELEMENTS="HIDE_ELEMENTS",e.SETTINGS_UPDATE="SETTINGS_UPDATE",e.WAKE_UP="WAKE_UP"}(c||(c={}));var p=function(){function t(){e(this,t)}return r(t,[{key:"getTimestamp",value:function(){var e=new Date;return"".concat(e.getHours(),":").concat(e.getMinutes(),":").concat(e.getSeconds())}},{key:"info",value:function(e){console.info("[".concat(this.getTimestamp(),"] [INFO] ").concat(e))}},{key:"error",value:function(e){console.error("[".concat(this.getTimestamp(),"] [ERROR] ").concat(e))}},{key:"debug",value:function(e){console.debug("[".concat(this.getTimestamp(),"] [DEBUG] ").concat(e))}},{key:"warn",value:function(e){console.warn("[".concat(this.getTimestamp(),"] [WARN] ").concat(e))}}],[{key:"getInstance",value:function(){return t.instance||(t.instance=new t),t.instance}}]),t}();p.instance=void 0;var d=p.getInstance(),y=function(){var e=h(u().mark((function e(){var t,r,n,o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.sync.get("options");case 2:return t=e.sent,r=t.options,n={all:r.blocks.all,comments:r.blocks.comments,mainFeed:r.blocks.mainFeed,sidebar:r.blocks.sidebar,search:r.blocks.search,userFeed:r.blocks.userFeed},o={enabled:r.enabled,mode:s(r.mode),blacklist:r.blacklist,whitelist:r.whitelist,blocks:n},e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=h(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.sync.set({options:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=h(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,browser.storage.sync.clear();case 2:return e.next=4,browser.storage.sync.set({options:a});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=h(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.info("Settings initialized"),browser.storage.sync.get("options").then((function(e){0===Object.keys(e).length&&browser.storage.sync.set({options:a})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=h(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.info("Sending settings reset message"),browser.runtime.connect({name:"settings"}).postMessage({type:c.SETTINGS_UPDATE});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b={getSettings:y,setSettings:v,resetSettings:m,initializeSettings:g,sendSettingsResetMessage:w};function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?k(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={selector:"",show:!0,useBlocker:!1,blockMsg:"You have blocked the main feed"},T={selector:"._3Kd8DQpBIbsr5E1JcrMFTY",show:!0,useBlocker:!1,blockMsg:"You have blocked the main feed"},P={selector:"._3Up38k81YNBWQoW1ovMU88",show:!0,useBlocker:!1,blockMsg:"Search Results have been blocked"},x={selector:"",show:!0,useBlocker:!1,blockMsg:"You have blocked access to r/All and r/Popular"},I={selector:"",show:!0,useBlocker:!1,blockMsg:""},A={selector:"",show:!0,useBlocker:!1,blockMsg:"Access to user profiles has been blocked"},_={selector:"._2rszc84L136gWQrkwH6IaM",show:!0,useBlocker:!1,blockMsg:""},M={selector:"._2M2wOqmeoPVvcSsJ6Po9-V",show:!0,useBlocker:!1,blockMsg:""},R={getHomepageBlocks:function(e){var t=B({},O),r=B({},T);return e.blocks.mainFeed&&(t.show=!1,t.useBlocker=!0,r.useBlocker=!0),e.blocks.sidebar&&(r.show=!1),[t,r]},getSearchPageBlocks:function(e){var t=B({},P);return e.blocks.search&&(t.show=!1,t.useBlocker=!0),[t]},getAllPopularBlocks:function(e){var t=B({},x);return e.blocks.all&&(t.show=!1,t.useBlocker=!0),[t]},getSubredditBlocks:function(e,t){var r=B({},I);return e.mode===n.BLACKLIST?e.blacklist.includes(t.toLowerCase())&&(r.show=!1,r.useBlocker=!0,r.blockMsg="r/".concat(t," is on your blacklist")):e.mode===n.WHITELIST&&(e.whitelist.includes(t.toLowerCase())||(r.show=!1,r.useBlocker=!0,r.blockMsg="r/".concat(t," is not on your whitelist"))),[r]},getUserProfileBlocks:function(e){var t=B({},A);return e.blocks.userFeed&&(t.show=!1,t.useBlocker=!0),[t]},getPostBlocks:function(e,t){var r=B({},_);t=t.toLowerCase(),e.mode===n.BLACKLIST?e.blacklist.includes(t)&&(r.show=!1):e.mode===n.WHITELIST&&(e.whitelist.includes(t)||(r.show=!1));var o=B({},M);return e.blocks.comments&&(o.show=!1),[r,o]}},D={HOMEPAGE:/^https:\/\/www.reddit.com\/(best\/|hot\/|new\/|top\/.*)*$/,SEARCH_PAGE:/^https:\/\/www.reddit.com\/search\/\?q=.*/,ALL_POPULAR:/^https:\/\/www.reddit.com\/r\/(all|popular)\/.*$/,USER_PROFILE:/^https:\/\/www.reddit.com\/user\/([^\/]*)\/?(.*)/,SUBREDDIT:/^https:\/\/www.reddit.com\/r\/([^\/]+)*\/$/,POST:/^https:\/\/www.reddit.com\/r\/(.*)\/comments\/.*/},j=function(){function t(r){var n=this;e(this,t),this.settings=void 0,this.blocker=void 0,this.parent=void 0,b.getSettings().then((function(e){n.settings=e,n.initialiseBlocker(),n.placeBlockerOnPage(),n.placeBlocksUrl(r)}))}return r(t,[{key:"initialiseBlocker",value:function(){var e,t=function(){var e=!1;return document.querySelector("._1VP69d9lk-Wk9zokOaylL").style.cssText.split(" ").forEach((function(t){if(t.startsWith("--background:")){var r=t.split("#")[1];e="FFFFFF;"!==r}})),e}(),r=t?"white":"black",n="position: fixed; top: 48px;\n                        width: 100%; height: 100vh; z-index: 79;\n                        background: ".concat(t?"#030303":"#DAE0E6","; text-align: center;\n                        font-size: 20px; color: ").concat(r,"; padding-top: 40px;"),o=document.createElement("div");o.id="blocker",o.style.cssText=n,i()&&(o.style.display="none"),o.innerText="Distraction Free Reddit is loading...";var c=null===(e=document.querySelector("header"))||void 0===e?void 0:e.parentElement;this.blocker=o,this.parent=c}},{key:"placeBlockerOnPage",value:function(){var e,t=this;"complete"!==document.readyState&&(e=setInterval((function(){t.parent.contains(t.blocker)||(d.debug("Retrying to place blocker on page"),t.parent.appendChild(t.blocker))}),100)),window.addEventListener("load",(function(){setTimeout((function(){clearInterval(e)}),1e3),d.info("Distraction Free Reddit Loaded"),t.parent.contains(t.blocker)||t.parent.appendChild(t.blocker)}))}},{key:"setSettings",value:function(e){this.settings=e}},{key:"placeBlocksUrl",value:function(e){var t=function(e,t){var r,n,o=[];if(!t.enabled)return o;switch(!0){case D.HOMEPAGE.test(e):o.push.apply(o,E(R.getHomepageBlocks(t)));break;case D.SEARCH_PAGE.test(e):o.push.apply(o,E(R.getSearchPageBlocks(t)));break;case D.ALL_POPULAR.test(e):o.push.apply(o,E(R.getAllPopularBlocks(t)));break;case D.USER_PROFILE.test(e):o.push.apply(o,E(R.getUserProfileBlocks(t)));break;case D.SUBREDDIT.test(e):var i=null===(r=e.match(D.SUBREDDIT))||void 0===r?void 0:r[1];o.push.apply(o,E(R.getSubredditBlocks(t,i)));break;case D.POST.test(e):i=null===(n=e.match(D.POST))||void 0===n?void 0:n[1],o.push.apply(o,E(R.getPostBlocks(t,i)))}return o}(e,this.settings);this.hideElements(t)}},{key:"hideElements",value:function(e){var t=this;if(i())this.hideBlockerElement();else{var r=!1,n="";e.forEach((function(e){e.useBlocker&&(r=!0,n=e.blockMsg),e.show?t.showElement(e):t.hideElement(e)})),r?this.showBlockerElement(n):this.hideBlockerElement()}}},{key:"hideElement",value:function(e){if(e.selector)try{var t=document.querySelector(e.selector);if(!t)throw new Error("No element found for corresponding selector");t.style.display="none"}catch(r){d.info("No element found for corresponding selector: ".concat(e.selector))}}},{key:"showElement",value:function(e){if(e.selector)try{var t=document.querySelector(e.selector);if(!t)throw new Error("No element found for corresponding selector");"none"===t.style.display&&t.style.removeProperty("display")}catch(r){d.info("No element found for corresponding selector: ".concat(e.selector))}}},{key:"hideBlockerElement",value:function(){this.blocker.style.display="none"}},{key:"showBlockerElement",value:function(e){this.blocker.style.removeProperty("display"),this.blocker.innerText=e}}]),t}();!function(){var e=new j(document.URL),t=browser.runtime.connect({name:"content"});t.onMessage.addListener((function(t){if(t.type){var r=t;r.type===c.HIDE_ELEMENTS?e.hideElements(r.payload):r.type===c.HIDE_BLOCKER?e.hideBlockerElement():r.type===c.SETTINGS_UPDATE&&(e.setSettings(r.payload),e.placeBlocksUrl(document.URL))}})),setInterval((function(){t.postMessage({type:c.WAKE_UP})}),1e4),d.info("Content script loaded")}()}();
//# sourceMappingURL=content.js.map