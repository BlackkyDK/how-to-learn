(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a,s,c=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s=function(){return c._element=c._getTemplate(),c._element.querySelector(".card__title").textContent=c._name,c._cardImage=c._element.querySelector(".card__image"),c._deleteButton=c._element.querySelector(".card__delete-button"),c._likeButton=c._element.querySelector(".card__like-button"),c._likeNumberElement=c._element.querySelector(".card__like-number"),c._cardImage.src=c._link,c._cardImage.alt=c._name,c._setEventListeners(),c.setLikes(c._likes),c._ownerId!==c._userId&&(c._deleteButton.style.display="none"),c._element},(a="createCard")in this?Object.defineProperty(this,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):this[a]=s,this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._cardTemplateSelector=n,this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeNumberElement.textContent=this._likes.length,this.isLiked()?this._onLike():this._offLike()}},{key:"_onLike",value:function(){this._likeButton.classList.add("card__like-button_active")}},{key:"_offLike",value:function(){this._likeButton.classList.remove("card__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(t){e._handleCardClick(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._settings,r=n.inputErrorClass,i=n.errorVisibleClass,a=o._form.querySelector("#error-".concat(e.id));e.classList.add(r),a.classList.add(i),a.textContent=t})),r(this,"_hideError",(function(e){var t=o._settings,n=t.inputErrorClass,r=t.errorVisibleClass,i=o._form.querySelector("#error-".concat(e.id));e.classList.remove(n),i.classList.remove(r),i.textContent=""})),r(this,"_validateInput",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),r(this,"_isFormValid",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_disableButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.add(e),o._buttonElement.disabled=!0})),r(this,"_enableButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.remove(e),o._buttonElement.disabled=!1})),r(this,"_toggleButton",(function(){o._isFormValid()?o._disableButton():o._enableButton()})),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.buttonSelector)}var t,o;return t=e,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".error-message",buttonSelector:".popup__save-button",inputErrorClass:"popup__input_type_error",errorVisibleClass:"error-message_visible",inactiveButtonClass:"popup__save-button_disabled"};function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t,e._container)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.code&&this.close()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close-button");this._popup.addEventListener("click",(function(n){n.target.closest(".popup__container")&&n.target!==t||e.close()}))}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function h(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._titleImage=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._titleImage.textContent=e,p(y(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return b(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._loadButton=n._popup.querySelector(".popup__save-button"),n._textButton=n._loadButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleSubmitForm=e}},{key:"setEventListeners",value:function(){var e=this;g(j(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues()),e.close()}))}},{key:"close",value:function(){g(j(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoad",value:function(e){this._loadButton.textContent=e?"Сохранение...":this._textButton,console.log(e)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(u);function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.nameSelector,r=t.professionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._professionElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,profession:this._professionElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._professionElement.textContent=t}},{key:"setAvatar",value:function(e){this._avatarElement.src=e}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I,q=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch(console.log)}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"9edd66f7-9bef-49a0-9444-49e8ee035a0c","Content-Type":"application/json"}});q.getProfile().then((function(e){console.log(e),J.setUserInfo(e.name,e.about),J.setAvatar(e.avatar),I=e._id})),q.getInitialCards().then((function(e){e.forEach((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:I,ownerId:e.owner._id});z.addItem(t)}))}));var B=document.querySelector(".popup_type_edit"),T=document.querySelector(".popup_type_new-card").querySelector(".popup__form"),R=document.querySelector(".profile__edit-button"),U=document.querySelector(".profile__add-button"),x=document.querySelector(".profile__avatar-button"),A=document.querySelector(".popup__form_type_avatar"),V=document.querySelector(".popup__input_profile_name"),D=document.querySelector(".popup__input_profile_profession"),N=new o(i,B);N.enableValidation();var F=new o(i,T);F.enableValidation();var H=new o(i,A);H.enableValidation();var J=new O({nameSelector:".profile__name",professionSelector:".profile__profession",avatarSelector:".profile__avatar"});function M(e){var n=new t(e,".card_template",(function(){$.open(e.name,e.link)}),(function(e){Q.open(),Q.changeSubmitHandler((function(){q.deleteCard(e).then((function(e){n.deleteCard(),Q.close()}))}))}),(function(e){n.isLiked()?q.deleteLike(e).then((function(e){n.setLikes(e.likes)})):q.addLike(e).then((function(e){n.setLikes(e.likes)}))}));return n.createCard()}R.addEventListener("click",(function(){N.resetValidation();var e=J.getUserInfo(),t=e.name,n=e.profession;V.value=t,D.value=n,G.open()})),U.addEventListener("click",(function(){K.open(),F.resetValidation()}));var z=new s({items:[],renderer:function(e){z.addItem(M(e))}},".cards");z.renderItems();var $=new v(".popup_type_image"),G=new L(".popup_type_edit",(function(e){var t=e.name,n=e.profession;q.editProfile(t,n).then((function(){J.setUserInfo(t,n)})),G.close()})),K=new L(".popup_type_new-card",(function(e){q.addCard(e.name,e.link).then((function(e){var t=M({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:I,ownerId:e.owner._id});z.addItem(t),K.close()}))})),Q=new L(".popup_type_delete"),W=new L(".popup_type_avatar",(function(e){var t=e.avatar;q.changeAvatar(t).then((function(){J.setAvatar(t)})),W.close()}));$.setEventListeners(),G.setEventListeners(),K.setEventListeners(),Q.setEventListeners(),W.setEventListeners(),x.addEventListener("click",(function(){H.resetValidation(),W.open()}))})();