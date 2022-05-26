(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i){var a,c,u=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),c=function(){return u._element=u._getTemplate(),u._element.querySelector(".card__title").textContent=u._name,u._cardImage=u._element.querySelector(".card__image"),u._deleteButton=u._element.querySelector(".card__delete-button"),u._likeButton=u._element.querySelector(".card__like-button"),u._likeNumberElement=u._element.querySelector(".card__like-number"),u._cardImage.src=u._link,u._cardImage.alt=u._name,u._setEventListeners(),u.setLikes(u._likes),u._ownerId!==u._userId&&(u._deleteButton.style.display="none"),u._element},(a="createCard")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this._name=e.name,this._link=e.link,this._likes=e.likes,this._id=e.id,this._userId=e.userId,this._ownerId=e.ownerId,this._cardTemplateSelector=n,this._handleCardClick=r,this._handleDeleteClick=o,this._handleLikeClick=i}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"setLikes",value:function(e){this._likes=e,this._likeNumberElement.textContent=this._likes.length,this.isLiked()?this._onLike():this._offLike()}},{key:"_onLike",value:function(){this._likeButton.classList.add("card__like-button_active")}},{key:"_offLike",value:function(){this._likeButton.classList.remove("card__like-button_active")}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._cardImage.addEventListener("click",(function(t){e._handleCardClick(t)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"_showError",(function(e,t){var n=o._settings,r=n.inputErrorClass,i=n.errorVisibleClass,a=o._form.querySelector("#error-".concat(e.id));e.classList.add(r),a.classList.add(i),a.textContent=t})),r(this,"_hideError",(function(e){var t=o._settings,n=t.inputErrorClass,r=t.errorVisibleClass,i=o._form.querySelector("#error-".concat(e.id));e.classList.remove(n),i.classList.remove(r),i.textContent=""})),r(this,"_validateInput",(function(e){e.validity.valid?o._hideError(e):o._showError(e,e.validationMessage)})),r(this,"_isFormValid",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),r(this,"_disableButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.add(e),o._buttonElement.disabled=!0})),r(this,"_enableButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.remove(e),o._buttonElement.disabled=!1})),r(this,"_toggleButton",(function(){o._isFormValid()?o._disableButton():o._enableButton()})),this._form=n,this._settings=t,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.buttonSelector)}var t,o;return t=e,(o=[{key:"resetValidation",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){e._hideError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButton(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._validateInput(t),e._toggleButton()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".error-message",buttonSelector:".popup__save-button",inputErrorClass:"popup__input_type_error",errorVisibleClass:"error-message_visible",inactiveButtonClass:"popup__save-button_disabled"},a=document.querySelector(".popup_type_edit"),c=document.querySelector(".popup_type_new-card").querySelector(".popup__form"),u=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),l=document.querySelector(".profile__avatar-button"),f=document.querySelector(".popup__form_type_avatar"),p=document.querySelector(".popup__input_profile_name"),d=document.querySelector(".popup__input_profile_profession");function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._renderer=r}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.code&&this.close()}},{key:"setEventListeners",value:function(){var e=this,t=this._popup.querySelector(".popup__close-button");this._popup.addEventListener("click",(function(n){n.target!==e._popup&&n.target!==t||e.close()}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._titleImage=t._popup.querySelector(".popup__title-image"),t}return t=a,(n=[{key:"open",value:function(e,t){this._image.src=t,this._image.alt=e,this._titleImage.textContent=e,k(S(a.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function B(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function a(e,t){var n,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return O(e)}(r=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n._loadButton=n._popup.querySelector(".popup__save-button"),n._textButton=n._loadButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"changeSubmitHandler",value:function(e){this._handleSubmitForm=e}},{key:"setEventListeners",value:function(){var e=this;P(R(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues())}))}},{key:"close",value:function(){P(R(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoad",value:function(e){this._loadButton.textContent=e?"Сохранение...":this._textButton}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(v);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var U=function(){function e(t){var n=t.nameSelector,r=t.professionSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._professionElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,profession:this._professionElement.textContent,avatar:this._avatarElement.src}}},{key:"setUserInfo",value:function(e,t){this._nameElement.textContent=e,this._professionElement.textContent=t}},{key:"setAvatar",value:function(e){this._avatarElement.src=e}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var V,D=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:"9edd66f7-9bef-49a0-9444-49e8ee035a0c","Content-Type":"application/json"}});function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}Promise.all([D.getProfile(),D.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];M.setUserInfo(o.name,o.about),M.setAvatar(o.avatar),V=o._id,i.forEach((function(e){var t=K({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:V,ownerId:e.owner._id});Q.addItem(t)}))})).catch((function(e){console.log(e)}));var F=new o(i,a);F.enableValidation();var H=new o(i,c);H.enableValidation();var J=new o(i,f);J.enableValidation();var M=new U({nameSelector:".profile__name",professionSelector:".profile__profession",avatarSelector:".profile__avatar"});u.addEventListener("click",(function(){F.resetValidation();var e=M.getUserInfo(),t=e.name,n=e.profession;p.value=t,d.value=n,$.open()})),s.addEventListener("click",(function(){z.open(),H.resetValidation()}));var $=new T(".popup_type_edit",(function(e){$.renderLoad(!0);var t=e.name,n=e.profession;D.editProfile(t,n).then((function(){M.setUserInfo(t,n),$.close()})).catch((function(e){console.log(e)})).finally((function(){$.renderLoad(!1)}))})),z=new T(".popup_type_new-card",(function(e){z.renderLoad(!0),D.addCard(e.name,e.link).then((function(e){var t=K({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:V,ownerId:e.owner._id});Q.addItem(t),z.close()})).catch((function(e){console.log(e)})).finally((function(){z.renderLoad(!1)}))})),G=new T(".popup_type_avatar",(function(e){G.renderLoad(!0);var t=e.avatar;D.changeAvatar(t).then((function(){M.setAvatar(t),G.close()})).catch((function(e){console.log(e)})).finally((function(){G.renderLoad(!1)}))}));function K(e){var n=new t(e,".card_template",(function(){W.open(e.name,e.link)}),(function(e){X.open(),X.changeSubmitHandler((function(){D.deleteCard(e).then((function(e){n.deleteCard(),X.close()})).catch((function(e){console.log(e)}))}))}),(function(e){n.isLiked()?D.deleteLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)})):D.addLike(e).then((function(e){n.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return n.createCard()}var Q=new _({items:[],renderer:function(e){Q.addItem(K(e))}},".cards"),W=new L(".popup_type_image"),X=new T(".popup_type_delete");W.setEventListeners(),$.setEventListeners(),z.setEventListeners(),X.setEventListeners(),G.setEventListeners(),l.addEventListener("click",(function(){G.open(),J.resetValidation()}))})();