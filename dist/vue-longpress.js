/*!
 *  VueLongpress plugin v1.0.2
 * 
 *  A button component that requires you to keep pressing to confirm a given action
 * 
 *  @author Javis Perez <javisperez@gmail.com>
 *  https://github.com/javisperez/vue-longpress
 *  Released under the MIT License.
 */
!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("VueLongpress",[],factory):"object"==typeof exports?exports.VueLongpress=factory():root.VueLongpress=factory()}(this,function(){/******/
return function(modules){/******/
// The require function
/******/
function __webpack_require__(moduleId){/******/
// Check if module is in cache
/******/
if(installedModules[moduleId])/******/
return installedModules[moduleId].exports;/******/
// Create a new module (and put it into the cache)
/******/
var module=installedModules[moduleId]={/******/
exports:{},/******/
id:moduleId,/******/
loaded:!1};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}// webpackBootstrap
/******/
// The module cache
/******/
var installedModules={};/******/
// Load entry module and return exports
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// __webpack_public_path__
/******/
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.p="",__webpack_require__(0)}([/* 0 */
/***/
function(module,exports,__webpack_require__){/* styles */
__webpack_require__(1);var Component=__webpack_require__(6)(/* script */
__webpack_require__(7),/* template */
__webpack_require__(8),/* scopeId */
null,/* cssModules */
null);module.exports=Component.exports},/* 1 */
/***/
function(module,exports,__webpack_require__){
// style-loader: Adds some css to the DOM by adding a <style> tag
// load the styles
var content=__webpack_require__(2);"string"==typeof content&&(content=[[module.id,content,""]]),content.locals&&(module.exports=content.locals);
// add the styles to the DOM
__webpack_require__(4)("2a7ecb18",content,!0)},/* 2 */
/***/
function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(3)(),
// imports
// module
exports.push([module.id,".longpress-button{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative}.longpress-button .progress-bar{position:absolute;left:0;width:0;bottom:0;height:4px;background:#fff;opacity:.4}.longpress-button.counting .progress-bar{animation:longpress-progress 5s linear}.longpress-button.executing{opacity:.5;cursor:denied}@keyframes longpress-progress{to{width:100%}}",""])},/* 3 */
/***/
function(module,exports){/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
// css base code, injected by the css-loader
module.exports=function(){var list=[];
// return the list of modules as css string
// import a list of modules into the list
return list.toString=function(){for(var result=[],i=0;i<this.length;i++){var item=this[i];item[2]?result.push("@media "+item[2]+"{"+item[1]+"}"):result.push(item[1])}return result.join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];"number"==typeof id&&(alreadyImportedModules[id]=!0)}for(i=0;i<modules.length;i++){var item=modules[i];
// skip already imported module
// this implementation is not 100% perfect for weird media query combinations
//  when a module is imported multiple times with different media queries.
//  I hope this will never occur (Hey this way we have smaller bundles)
"number"==typeof item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="("+item[2]+") and ("+mediaQuery+")"),list.push(item))}},list}},/* 4 */
/***/
function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)
// has SSR styles and in production mode.
// simply do nothing.
return noop;
// has SSR styles but in dev mode.
// for some reason Chrome can't handle source map in server-rendered
// style tags - source maps in <style> only works if the style tag is
// created and inserted dynamically. So we remove the server rendered
// styles and inject new ones.
styleElement.parentNode.removeChild(styleElement)}if(isOldIE){
// use singleton mode for IE9.
var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else
// use multi-style-tag mode in all other cases
styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(
// https://developer.chrome.com/devtools/docs/javascript-debugging
// this makes source maps inside style tags work properly in Chrome
css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",
// http://stackoverflow.com/a/26603875
css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
var hasDocument="undefined"!=typeof document,listToStyles=__webpack_require__(5),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},/* 5 */
/***/
function(module,exports){/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},/* 6 */
/***/
function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);
// Vue.extend constructor export interop
var options="function"==typeof scriptExports?scriptExports.options:scriptExports;
// inject cssModules
if(
// render functions
compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),
// scopedId
scopeId&&(options._scopeId=scopeId),cssModules){var computed=options.computed||(options.computed={});Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}})}return{esModule:esModule,exports:scriptExports,options:options}}},/* 7 */
/***/
function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var timer=null;exports.default={name:"longpress-button",props:["value","onConfirm","duration","pressingText","actionText"],created:function(){var _this=this;document.addEventListener("mouseup",function(){return _this.cancel()})},destroyed:function(){var _this2=this;document.removeEventListener("mouseup",function(){return _this2.cancel()})},data:function(){return{status:"default",counter:0}},methods:{triggerCount:function(){"executing"!==this.status&&"counting"!==this.status&&(this.status="counting",this.countAndConfirm())},countAndConfirm:function(){var _this3=this;timer=setTimeout(function(){return _this3.counter++,_this3.counter>=_this3.duration?(_this3.status="executing",clearTimeout(timer),void setTimeout(function(_){_this3.onConfirm&&_this3.onConfirm(_this3.value||null),_this3.reset()},1e3)):void _this3.countAndConfirm()},1e3)},reset:function(){this.status="default",this.cancel()},cancel:function(){"executing"!==this.status&&(this.counter=0,clearTimeout(timer),this.status="default")}},computed:{countingPressingText:function(){var pressingText=this.pressingText||"";return pressingText.replace(/\{\$counter\}/gi,this.counter).replace(/\{\$rcounter\}/gi,this.duration-this.counter).replace(/\{\$duration\}/gi,this.duration)}}}},/* 8 */
/***/
function(module,exports){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"longpress-button",class:_vm.status,on:{touchend:function($event){_vm.cancel()},touchstart:function($event){$event.preventDefault(),_vm.triggerCount()},mouseup:function($event){_vm.cancel()},mousedown:function($event){$event.preventDefault(),_vm.triggerCount()}}},[_c("div",["default"===_vm.status?_vm._t("default"):_vm._e(),_vm._v(" "),"counting"===_vm.status?_c("span",[_vm._v(_vm._s(_vm.countingPressingText||"Keep pressing"))]):_vm._e(),_vm._v(" "),"executing"===_vm.status?_c("span",[_vm._v(_vm._s(_vm.actionText||"Please wait..."))]):_vm._e()],2),_vm._v(" "),_c("span",{staticClass:"progress-bar",style:"animation-duration:"+_vm.duration+"s"})])},staticRenderFns:[]}}])});