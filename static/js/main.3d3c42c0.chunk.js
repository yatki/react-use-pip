(this["webpackJsonpreact-use-pip-example"]=this["webpackJsonpreact-use-pip-example"]||[]).push([[0],{378:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);n(64),n(65);var r=n(0),c=n.n(r),a=n(56),i=n.n(a),u=n(7),o=n.n(u),s=n(5),l=n(15),p=n(57),f=n.n(p);function m(e){return e.disablePictureInPicture}function d(e){return e.webkitSupportsPresentationMode&&"function"===typeof e.webkitSetPresentationMode}function v(){return document.pictureInPictureEnabled}function P(){return(P=Object(l.a)(o.a.mark((function e(t,n,r,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t.current){e.next=2;break}return e.abrupt("return");case 2:if(!n){e.next=17;break}if(e.prev=3,!d(t.current)){e.next=9;break}t.current.webkitSetPresentationMode("picture-in-picture"),e.next=11;break;case 9:return e.next=11,t.current.requestPictureInPicture();case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(3),r&&"function"===typeof r&&r(e.t0),console.error("Video failed to enter Picture-in-Picture mode.");case 17:if(n||!document.pictureInPictureElement){e.next=32;break}if(e.prev=18,!d(t.current)){e.next=24;break}t.current.webkitSetPresentationMode("inline"),e.next=26;break;case 24:return e.next=26,document.exitPictureInPicture();case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(18),c&&"function"===typeof c&&c(e.t1),console.error("Video failed to leave Picture-in-Picture mode.");case 32:case"end":return e.stop()}}),e,null,[[3,13],[18,28]])})))).apply(this,arguments)}var b=function(e,t){var n=t||{},c=n.onEnterPictureInPicture,a=n.onLeavePictureInPicture,i=n.onRequestPictureInPictureError,u=n.onExitPictureInPictureError,o=Object(r.useState)(!1),l=Object(s.a)(o,2),p=l[0],f=l[1],b=Object(r.useState)(!1),E=Object(s.a)(b,2),h=E[0],g=E[1];return Object(r.useEffect)((function(){!function(e,t,n,r){P.apply(this,arguments)}(e,p,i,u)}),[e,p,i,u]),Object(r.useEffect)((function(){if(function(e){null===e&&console.warn("vieoRef is not referencing to an element. Please pass the videoRef as ref in a video element.");e&&"video"!==e.nodeName.toLocaleLowerCase()&&console.warn("videoRef is currently referencing to a ".concat(e.nodeName," element. Plese pass it as ref in a video element."));!e||v()||d(e)||console.warn("Picture in picture is not supported in your browser.");e&&m(e)&&console.warn("Picture in picture is disabled in your browser. If you want to activate the feature, please enable it in the browser settings.");e&&d(e)&&console.warn("Your browser supports a none-standard Picture in picture API.")}(e.current),null!==e.current)return g((d(e.current)||v())&&!m(e.current)),c&&"function"===typeof c&&e.current.addEventListener("enterpictureinpicture",c),a&&"function"===typeof a&&e.current.addEventListener("leavepictureinpicture",a),function(){null!==e.current&&(c&&"function"===typeof c&&e.current.removeEventListener("enterpictureinpicture",c),a&&"function"===typeof a&&e.current.removeEventListener("leavepictureinpicture",a))}}),[]),{isPictureInPictureActive:p,isPictureInPictureAvailable:h,togglePictureInPicture:f}},E=n(383),h=n(382),g=n(58),w=window.matchMedia("(prefers-color-scheme: dark)"),k=function(e){var t=e.language,n=e.value,a=Object(r.useState)(w.matches?"dark":"light"),i=Object(s.a)(a,2),u=i[0],o=i[1],l=function(e){var t=e.matches?"dark":"light";o(t)},p="dark"===u?h.a:g.a;return Object(r.useEffect)((function(){return w.addEventListener?w.addEventListener("change",l):w.addListener(l),function(){w.removeEventListener?w.removeEventListener("change",l):w.removeListener(l)}}),[]),c.a.createElement(E.a,{language:t,style:p},n)},x=n(62);n(378);function y(){return(y=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(".","/DOC.md"));case 2:return n=e.sent,e.next=5,n.text();case 5:r=e.sent,t(r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=function(){var e=Object(r.useRef)(null),t=b(e,{onEnterPictureInPicture:function(e){return console.log("enter picture in picture",e)},onLeavePictureInPicture:function(e){return console.log("leave picture in picture",e)}}),n=t.isPictureInPictureActive,a=t.isPictureInPictureAvailable,i=t.togglePictureInPicture,u=Object(r.useState)(),o=Object(s.a)(u,2),l=o[0],p=o[1];return Object(r.useEffect)((function(){!function(e){y.apply(this,arguments)}(p)}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"nav"},c.a.createElement("a",{href:"."},c.a.createElement("picture",{className:"picture"},c.a.createElement("source",{media:"(prefers-color-scheme: dark)",srcSet:"".concat(".","/logo-dark-64x64.png")}),c.a.createElement("img",{className:"logo",src:"".concat(".","/logo-light-64x64.png"),alt:"react-use-pip-logo"}))),c.a.createElement("a",{href:".",className:"title"},c.a.createElement("h3",null,"react-use-pip")),c.a.createElement("div",{className:"tools"}),c.a.createElement("a",{href:"https://github.com/DawChihLiou/react-use-pip",className:"icon-link"},c.a.createElement(x.a,{size:24}))),c.a.createElement("div",{className:"app"},c.a.createElement("video",{ref:e,autoPlay:!0,muted:!0,controls:!0,loop:!0,width:"100%"},c.a.createElement("source",{src:"video-sample.mp4"})),c.a.createElement("h3",null,"Try the React Hook yourself",c.a.createElement("span",{role:"img","aria-label":"emoji pointing down"},"\ud83d\udc47")),c.a.createElement("div",{className:"action-row"},a&&c.a.createElement("button",{onClick:function(){return i(!n)},className:"control-button"},n?"Exit":"Enter"," Picture in Picture"),!a&&c.a.createElement("p",null,"Picture in Picture feature API is not available in your browser.")),c.a.createElement(f.a,{source:l,renderers:{code:k}})))};i.a.render(c.a.createElement(I,null),document.getElementById("root"))},63:function(e,t,n){e.exports=n(379)},65:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.3d3c42c0.chunk.js.map