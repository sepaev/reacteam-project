parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/wave.png":[["wave.519b0cde.png","vmjB"],"vmjB"],"./../images/wave@2x.png":[["wave@2x.b8c7f96c.png","vrPt"],"vrPt"],"./../images/mobile-hero@2x.png":[["mobile-hero@2x.08e65f6d.png","mvhy"],"mvhy"],"./../images/mobile-hero-gradient@2x.png":[["mobile-hero-gradient@2x.704ce9c5.png","RKtq"],"RKtq"],"./../images/female-student.svg":[["female-student.786d3c2d.svg","vl78"],"vl78"],"./../images/mobile-lerning.svg":[["mobile-lerning.f49690aa.svg","dHVS"],"dHVS"],"./../images/insuranse.svg":[["insuranse.b3d80a0d.svg","23oc"],"23oc"],"/home/runner/work/reacteam-project/reacteam-project/src/images/Campfire.svg":[["Campfire.eb5384ee.svg","7IVZ"],"7IVZ"],"./../images/icon-about.svg":[["icon-about.e72fcc84.svg","om7v"],"om7v"],"./../images/icon-guarantee.svg":[["icon-guarantee.300a23dc.svg","T1zX"],"T1zX"],"/home/runner/work/reacteam-project/reacteam-project/src/images/arrow-left.svg":[["arrow-left.f61da90e.svg","AO6g"],"AO6g"],"/home/runner/work/reacteam-project/reacteam-project/src/images/arrow-right.svg":[["arrow-right.df20ad7b.svg","C0+G"],"C0+G"],"./../images/footer-mobile.jpg":[["footer-mobile.d15f36f8.jpg","TZAU"],"TZAU"],"./../images/footer-mobile@2x.jpg":[["footer-mobile@2x.9786b44f.jpg","MToQ"],"MToQ"],"./../images/footer-tablet.jpg":[["footer-tablet.7fb9d899.jpg","jt1g"],"jt1g"],"./../images/footer-tablet@2x.jpg":[["footer-tablet@2x.c5428ee2.jpg","HEeS"],"HEeS"],"./../images/footer-desctop.jpg":[["footer-desctop.0a031305.jpg","FZOy"],"FZOy"],"./../images/footer-desctop@2x.jpg":[["footer-desctop@2x.dfa95227.jpg","2+RD"],"2+RD"]}],"sByI":[function(require,module,exports) {
!function(){var e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",o),n.addEventListener("click",o),window.matchMedia("(min-width: 1280px)").addEventListener("change",function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})}();
},{}],"RSqK":[function(require,module,exports) {
!function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)}();
},{}],"KR3l":[function(require,module,exports) {
$(document).ready(function(){$(".reviewer").slick({arrows:!0,initialSlide:5,autoplaySpeed:5e3,adaptiveHeight:!1,speed:250,cssEase:"linear",fade:!0,asNavFor:".reviewers__set"}),$(".reviewers__set").slick({arrows:!1,asNavFor:".reviewer",centerMode:!0,variableWidth:!0,initialSlide:5,infinite:!0,responsive:[{breakpoint:768,settings:{slidesToShow:7,slidesPerRow:7}},{breakpoint:1280,settings:{slidesToShow:3,slidesPerRow:3}}]})});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/mobile-menu"),require("./js/modal"),require("./js/review");
},{"./sass/main.scss":"clu1","./js/mobile-menu":"sByI","./js/modal":"RSqK","./js/review":"KR3l"}]},{},["Focm"], null)
//# sourceMappingURL=/reacteam-project/src.c1acd5df.js.map