(window.webpackJsonp_starter_block=window.webpackJsonp_starter_block||[]).push([[1],{4:function(e,t,r){}}]),function(e){function t(t){for(var o,l,u=t[0],i=t[1],p=t[2],s=0,f=[];s<u.length;s++)l=u[s],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);for(a&&a(t);f.length;)f.shift()();return c.push.apply(c,p||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],o=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(o=!1)}o&&(c.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},n={0:0},c=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var u=window.webpackJsonp_starter_block=window.webpackJsonp_starter_block||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var a=i;c.push([6,1]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var o=r(3),n=(r(4),r(0)),c=r(1),l=r(2);r(5),Object(o.registerBlockType)("create-block/starter-block",{edit:function(){return Object(n.createElement)("p",Object(l.useBlockProps)(),Object(c.__)("Starter Block – hello from the editor!","starter-block"))},save:function(){return Object(n.createElement)("p",l.useBlockProps.save(),Object(c.__)("Starter Block – hello from the saved content!","starter-block"))}})}]);