(()=>{"use strict";const e=35.65858,t=139.74544,o=document.querySelector("#card").content.querySelector(".popup");let r=1e3,n="Квартира";const a=()=>{const e=v.value;e>1e6?v.setCustomValidity("Больше миллиона цена быть не может"):e<r?v.setCustomValidity(`Меньше ${r} цены на объект "${n}" быть не может`):v.setCustomValidity(""),v.reportValidity()},s=(e,t)=>{t.value=e.value},c=(e,t)=>{"100"===e.value&&"0"!==t.value?t.setCustomValidity("Выбранное помещение не предназначено для проживания гостей"):"100"!==e.value&&"0"===t.value?t.setCustomValidity('Варианту "не для гостей" соответствует только помещение в 100 комнат'):e.value<t.value?t.setCustomValidity("Количество гостей не может быть больше количества комнат"):t.setCustomValidity(""),t.reportValidity()},i=document.querySelector("main"),l=document.querySelector("#success").content.querySelector(".success"),d=document.querySelector("#error").content.querySelector(".error"),u=l.cloneNode(!0),p=d.cloneNode(!0),y=document.querySelector(".ad-form"),m=y.querySelector("#title"),f=y.querySelector("#type"),v=y.querySelector("#price"),h=y.querySelector("#timein"),g=y.querySelector("#timeout"),S=y.querySelector("#address"),k=y.querySelector("#room_number"),q=y.querySelector("#capacity"),E=y.querySelector(".ad-form__reset"),b=y.querySelectorAll("fieldset");m.addEventListener("input",(()=>{const e=m.value.length;e<30?m.setCustomValidity("Добавьте "+(30-e)+" симв."):e>100?m.setCustomValidity("Удалите "+(e-100)+" симв."):m.setCustomValidity(""),m.reportValidity()})),m.addEventListener("invalid",(()=>{m.validity.valueMissing&&m.setCustomValidity("Без заголовка объявление не публикуется")})),f.addEventListener("change",(e=>{switch(e.target.value){case"bungalow":r=0,n="Бунгало";break;case"flat":r=1e3,n="Квартира";break;case"house":r=5e3,n="Дом";break;case"palace":r=1e4,n="Дворец"}v.placeholder=r,a()})),v.addEventListener("input",a),v.addEventListener("invalid",(()=>{v.validity.valueMissing&&v.setCustomValidity("Без указания цены объявление не публикуется")})),g.addEventListener("change",(()=>{s(g,h)})),h.addEventListener("change",(()=>{s(h,g)})),c(k,q),q.addEventListener("change",(()=>{c(k,q)})),k.addEventListener("change",(()=>{c(k,q)}));const C=e=>{const t=document.querySelector(".error__message");i.appendChild(p),t.textContent=e;const o=()=>{i.contains(p)&&i.removeChild(p),document.removeEventListener("click",o),document.removeEventListener("keydown",r)};document.addEventListener("click",o);const r=e=>{"Escape"===e.key&&i.contains(p)&&i.removeChild(p),document.removeEventListener("click",o),document.removeEventListener("keydown",r)};document.addEventListener("keydown",r)},w=(e,t)=>{S.value=`${e}, ${t}`};S.readOnly=!0,s(h,g);const x=document.querySelector(".map__filters"),V=x.querySelectorAll("select, fieldset"),$=e=>{(e=>{e?y.classList.add("ad-form--disabled"):y.classList.remove("ad-form--disabled"),b.forEach((t=>{t.disabled=e}))})(e),(e=>{e?x.classList.add("map__filters--disabled"):x.classList.remove("map__filters--disabled"),V.forEach((t=>{t.disabled=e}))})(e)};$(!0);const T=L.map("map-canvas").on("load",(()=>{$(!1)})).setView({lat:e,lng:t},9);L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(T);const A=L.icon({iconUrl:"./img/main-pin.svg",iconSize:[52,52],iconAnchor:[26,52]}),M=L.marker({lat:e,lng:t},{draggable:!0,icon:A}),j=()=>{M.setLatLng({lat:e,lng:t}),T.setView({lat:e,lng:t},9)};M.addTo(T),w(e,t),M.on("move",(e=>{const t=e.target.getLatLng().lat,o=e.target.getLatLng().lng,r=Math.round(t*10**5)/10**5,n=Math.round(o*10**5)/10**5;w(r,n)}));const z=L.icon({iconUrl:"./img/pin.svg",iconSize:[40,40],iconAnchor:[20,40]}),D=L.layerGroup().addTo(T),H=e=>{D.getLayers().length&&D.clearLayers(),e.slice(0,10).forEach((e=>{const t=L.marker({lat:e.location.lat,lng:e.location.lng},{icon:z});t.bindPopup((e=>{const t=o.cloneNode(!0),r=t.querySelector(".popup__features"),n=e.offer.features,a=t.querySelector(".popup__photos"),s=e.offer.photos,c=t.querySelector(".popup__description"),i=e.offer.description;switch(t.querySelector("img").src=e.author.avatar,t.querySelector(".popup__title").textContent=e.offer.title,t.querySelector(".popup__text--address").textContent=e.offer.address,t.querySelector(".popup__text--price").textContent=`${e.offer.price}₽/ночь`,t.querySelector(".popup__text--capacity").textContent=`${e.offer.rooms} комнаты для ${e.offer.guests} гостей`,t.querySelector(".popup__text--time").textContent=`Заезд после ${e.offer.checkin}, выезд до ${e.offer.checkout}`,i?c.textContent=i:c.remove(),e.offer.type){case"bungalow":t.querySelector(".popup__type").textContent="Бунгало";break;case"flat":t.querySelector(".popup__type").textContent="Квартира";break;case"house":t.querySelector(".popup__type").textContent="Дом";break;case"palace":t.querySelector(".popup__type").textContent="Дворец"}return n.length?(r.innerHTML="",n.forEach((e=>{const t=`<li class="popup__feature popup__feature--${e}"></li>`;r.insertAdjacentHTML("beforeend",t)}))):r.remove(),s.length?(a.innerHTML="",s.forEach((e=>{const t=`<img src="${e}" class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`;a.insertAdjacentHTML("beforeend",t)}))):a.remove(),t})(e)),D.addLayer(t)}))},R=["gif","jpg","jpeg","png"],U=y.querySelector(".ad-form__field input[type=file]"),F=y.querySelector(".ad-form-header__preview img"),I=y.querySelector(".ad-form__upload input[type=file]"),N=y.querySelector(".ad-form__photo");var O,P,W;U.addEventListener("change",(()=>{const e=U.files[0],t=e.name.toLowerCase();if(R.some((e=>t.endsWith(e)))){const t=new FileReader;t.addEventListener("load",(()=>{F.src=t.result})),t.readAsDataURL(e)}})),I.addEventListener("change",(()=>{const e=I.files[0],t=e.name.toLowerCase();if(R.some((e=>t.endsWith(e)))){let t=new FileReader;t.addEventListener("load",(()=>{N.innerHTML=`<img src="${t.result}" alt="Фото жилья" width="70" height="70"></img>`})),t.readAsDataURL(e)}})),(e=>{const t=()=>{i.appendChild(u);const t=()=>{i.contains(u)&&(i.removeChild(u),y.reset(),e()),document.removeEventListener("click",t),document.removeEventListener("keydown",o)};document.addEventListener("click",t);const o=r=>{"Escape"===r.key&&i.contains(u)&&(i.removeChild(u),y.reset(),e()),document.removeEventListener("click",t),document.removeEventListener("keydown",o)};document.addEventListener("keydown",o)};y.addEventListener("submit",(e=>{e.preventDefault();const o=new FormData(e.target);var r,n;r=t,n=C,fetch("https://22.javascript.pages.academy/keksobooking",{method:"POST",body:o}).then((e=>{e.ok?r():n(`${e.status} (${e.statusText}).`)})).catch((e=>{n(e)}))}))})(j),O=j,E.addEventListener("click",(o=>{o.preventDefault(),y.reset(),O(),w(e,t)})),P=e=>{var t,o;H(e),t=_.debounce(H,500),o=e,x.addEventListener("change",(()=>{const e=o.filter((e=>(e=>{const t=x.querySelector("#housing-type option:checked").value;return t===e.offer.type||"any"===t})(e)&&(e=>{let t=!1;switch(x.querySelector("#housing-price option:checked").value){case"any":t=!0;break;case"low":t=e.offer.price<=1e4;break;case"middle":t=e.offer.price>1e4&&e.offer.price<5e4;break;case"high":t=e.offer.price>=5e4}return t})(e)&&(e=>{const t=x.querySelector("#housing-rooms option:checked").value;return e.offer.rooms===parseInt(t,10)||"any"===t})(e)&&(e=>{const t=x.querySelector("#housing-guests option:checked").value;return e.offer.guests===parseInt(t,10)||"any"===t})(e)&&(e=>{const t=x.querySelectorAll("#housing-features input");let o=!0;for(let r=0;r<t.length;r++)if(t[r].checked&&!e.offer.features.includes(t[r].value)){o=!1;break}return o})(e)));t(e)}))},W=e=>{const t=document.createElement("div");t.style="border: 5px solid red; z-index: 100; margin: 0 auto; text-align: center; background-color: yellow; color: red; padding: 0;",t.style.position="fixed",t.style.left=0,t.style.right=0,t.style.zIndex=3,t.style.top="595px",t.style.width="1200px",t.style.fontSize="50px",t.textContent=e,document.body.insertAdjacentElement("afterbegin",t)},fetch("https://22.javascript.pages.academy/keksobooking/data").then((e=>{if(e.ok)return e.json();throw new Error(`${e.status} (${e.statusText}).`)})).then((e=>{P(e)})).catch((e=>{W(e)}))})();
//# sourceMappingURL=main.bundle.js.map