(()=>{var e={372:()=>{}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}(()=>{"use strict";var e=document.querySelector(".popup_photo"),t=e.querySelector(".popup__close_photo"),r={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-7",headers:{authorization:"b51a5a63-5226-41fb-a533-985e542ca482","Content-Type":"application/json"}};function o(e){return e.ok?e.json():Promise.reject("error: ".concat(e.status))}var c=function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:r.headers}).then(o)},a=function(e){return fetch("".concat(r.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:r.headers}).then(o)},i=function(e){return fetch("".concat(r.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:r.headers}).then(o)},u=document.querySelectorAll(".popup");function d(e){e.classList.add("popup_opened"),document.addEventListener("keydown",l)}function s(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",l)}var l=function(e){"Escape"===e.key&&s(document.querySelector(".popup_opened"))};function p(e,t){e.textContent=t}u.forEach((function(e){e.addEventListener("click",(function(t){t.target===t.currentTarget&&s(e)}))}));var _,f=document.querySelector(".popup_edit"),v=document.querySelector(".profile__edit"),m=f.querySelector(".popup__close_edit"),h=f.querySelector(".popup__form_edit"),y=document.querySelector(".popup_edit-ava"),S=document.querySelector(".profile__avatar-edit"),E=y.querySelector(".popup__close_edit-ava"),q=y.querySelector(".popup__form_edit-ava"),b=document.getElementById("username-input"),L=document.getElementById("description-input"),k=document.getElementById("url-ava-input"),C=document.querySelector(".profile__name"),g=document.querySelector(".profile__description"),x=document.querySelector(".profile__avatar"),B=document.querySelector(".popup__submit_edit"),U=document.querySelector(".popup__submit_edit-ava");fetch("".concat(r.baseUrl,"/users/me"),{headers:r.headers}).then(o).then((function(e){_=e,C.textContent=e.name,g.textContent=e.about,x.src=e.avatar}));var A=document.querySelector(".popup_add"),T=A.querySelector(".popup__form_add"),D=document.querySelector(".profile__add-card"),I=A.querySelector(".popup__close_add"),P=document.getElementById("name-card-input"),w=document.getElementById("url-card-input"),N=document.querySelector(".popup__name"),O=document.querySelector(".popup__image"),j=document.querySelector(".cards"),J=document.querySelector(".popup__submit_add");function H(t){var n=function(t){var n=document.getElementById("card-item").content.querySelector(".card").cloneNode(!0);n.querySelector(".card__title").textContent=t.name,n.querySelector(".card__like-counter").textContent=t.likes.length;var r=n.querySelector(".card__image");r.src=t.link,r.alt=t.name,r.addEventListener("click",(function(){N.textContent=t.name,O.src=t.link,O.alt="Изображение "+t.name,d(e)}));var o=n.querySelector(".card__like");t.likes.some((function(e){return e._id===_._id}))&&o.classList.add("card__like_active"),o.addEventListener("click",(function(e){var r,o,i,u;r=t._id,i=(o=n).querySelector(".card__like"),u=o.querySelector(".card__like-counter"),i.classList.contains("card__like_active")?a(r).then((function(e){i.classList.remove("card__like_active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)})):c(r).then((function(e){i.classList.add("card__like_active"),u.textContent=e.likes.length})).catch((function(e){console.log(e)}))}));var u=n.querySelector(".card__delete");return t.owner._id===_._id&&u.classList.add("card__delete_active"),u.addEventListener("click",(function(e){return r=n,o=t._id,void i(o).then((function(e){r.remove(e)})).catch((function(e){console.log(e)}));var r,o})),n}(t);j.prepend(n)}fetch("".concat(r.baseUrl,"/cards"),{headers:r.headers}).then(o).then((function(e){e.forEach((function(e){H(e)}))})),n(372);var z=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?function(e,t){e.classList.add(t.inactiveButtonClass),e.removeAttribute("disabled")}(t,n):M(t,n)};function M(e,t){e.classList.remove(t.inactiveButtonClass),e.setAttribute("disabled",!0)}v.addEventListener("click",(function(){d(f),b.value=C.textContent,L.value=g.textContent})),m.addEventListener("click",(function(){return s(f)})),h.addEventListener("submit",(function(e){var t,n,c;e.preventDefault(),p(B,"Сохранение..."),(t=b.value,n=L.value,console.log(t,n,c),fetch("".concat(r.baseUrl,"/users/me"),{method:"PATCH",headers:r.headers,body:JSON.stringify({name:t,about:n,avatar:c})}).then(o)).then((function(e){C.textContent=e.name,g.textContent=e.about})).finally((function(){p(B,"Сохранить"),s(f)}))})),S.addEventListener("click",(function(){d(y)})),E.addEventListener("click",(function(){return s(y)})),q.addEventListener("submit",(function(e){var t;e.preventDefault(),p(U,"Сохранение..."),(t=k.value,fetch("".concat(r.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:r.headers,body:JSON.stringify({avatar:t})}).then(o)).then((function(e){x.src=e.avatar})).catch((function(e){console.log(e)})).finally((function(){p(U,"Сохранить"),s(y)}))})),D.addEventListener("click",(function(){d(A)})),I.addEventListener("click",(function(){return s(A)})),T.addEventListener("submit",(function(e){var t,n;e.preventDefault(),p(J,"Создание..."),(t=P.value,n=w.value,fetch("".concat(r.baseUrl,"/cards"),{method:"POST",headers:r.headers,body:JSON.stringify({name:t,link:n})}).then(o)).then((function(e){H(e)})).catch((function(e){console.log(e)})).finally((function(){p(J,"Создать"),s(A)})),e.target.reset()})),t.addEventListener("click",(function(){return s(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);z(n,r,t),e.addEventListener("reset",(function(){M(r,t)})),n.forEach((function(o){o.addEventListener("input",(function(){z(n,r,t),function(e,t,n){t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t)}))}))}(t,e)}))}({formSelector:".form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_type_active",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"})})()})();