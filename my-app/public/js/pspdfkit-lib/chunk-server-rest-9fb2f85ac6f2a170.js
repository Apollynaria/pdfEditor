/*!
 * PSPDFKit for Web 2023.1.1 (https://pspdfkit.com/web)
 *
 * Copyright (c) 2016-2023 PSPDFKit GmbH. All rights reserved.
 *
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 *
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
"use strict";(self.webpackChunkPSPDFKit=self.webpackChunkPSPDFKit||[]).push([[4099],{82450:(e,t,a)=>{a.r(t),a.d(t,{RESTProvider:()=>p});var s=a(81253),o=a(96156),i=a(35369),r=a(70545),n=a(41371),l=a(81928);class d extends(i.WV({alreadyLoadedPages:(0,i.D5)(),serverURL:null,authPayload:null,isLoaded:!1,isFormsEnabled:!0,loadBookmarksPromise:null,ignoredFormFieldNames:null})){}var c=a(11171),h=a(51983),m=a(14968);const u=["id"],k=["id"],y=["id"],f=["id"];function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}class p{constructor(e,t,a){let{isFormsEnabled:s}=a;(0,o.Z)(this,"canCreateBackendOrphanWidgets",!0),(0,o.Z)(this,"setDocumentHandleConflictCallback",(()=>{})),this.state=new d({serverURL:e,authPayload:t,isFormsEnabled:s}),this._setReadStateCallbacksPromise=new Promise((e=>{this._setReadStateCallbacksPromiseResolve=e}))}async load(){return this.state=this.state.set("isLoaded",!0),this.state.isFormsEnabled&&await this._initializeFormFieldValues(),this}destroy(){}setReadStateCallbacks(e){var t;this._readStateCallbacks=e,null===(t=this._setReadStateCallbacksPromiseResolve)||void 0===t||t.call(this)}setAnnotationCallbacks(e){this.annotationCallbacks=e}setBookmarkCallbacks(e){this.bookmarkCallbacks=e}setFormFieldValueCallbacks(e){this.formFieldValueCallbacks=e}async createAnnotation(e,t){this._verifyLoaded();const a=(0,n.Hs)(e),{id:o}=a,i={id:o,content:(0,s.Z)(a,u)};await this._request("/annotations","POST",i).then((e=>{if(200!==e.status)throw new r.p2("PSPDFKit Server returned an error, when saving an annotation.");e.json().then((e=>{if("attachment_missing"===e.error){const e=function(e,t){const a=new FormData;return a.append("annotation",JSON.stringify(e)),t.forEach(((e,t)=>{t&&e.data&&a.append(t,e.data)})),a}(i,t);return this._request("/annotations","POST",e).then((e=>e.json()))}return e}))}))}async updateAnnotation(e){this._verifyLoaded();const t=(0,n.Hs)(e),{id:a}=t,o=(0,s.Z)(t,k);await this._request(`/annotations/${a}`,"PUT",{id:a,content:o})}async deleteAnnotation(e){this._verifyLoaded(),await this._request(`/annotations/${e.id}`,"DELETE")}async createBookmark(e){this._verifyLoaded(),await this.loadBookmarks();const t=(0,l.a)(e),{id:a}=t,o=(0,s.Z)(t,y);if(200!==(await this._request("/bookmarks","POST",{id:a,content:o})).status)throw new r.p2("PSPDFKit Server returned an error, when saving an bookmark.")}async updateBookmark(e){this._verifyLoaded(),await this.loadBookmarks();const t=(0,l.a)(e),{id:a}=t,o=(0,s.Z)(t,f);await this._request(`/bookmarks/${a}`,"PUT",{id:a,content:o})}async deleteBookmark(e){this._verifyLoaded(),await this.loadBookmarks(),await this._request(`/bookmarks/${e}`,"DELETE")}async setFormFieldValue(e){this._verifyLoaded();const t={id:(0,c.X)(e),content:(0,n.kr)(e)};await this._request("/form-field-values","POST",{formFieldValues:[t]})}async createFormFieldValue(){}async deleteFormFieldValue(){}async loadAnnotationsForPageIndex(e){if(this._verifyLoaded(),this.state.alreadyLoadedPages.has(e))await this.state.alreadyLoadedPages.get(e);else try{const t=this._request(`/page-${e}-annotations`,"GET").then((e=>e.json())).catch((e=>{throw e}));this.state=this.state.setIn(["alreadyLoadedPages",e],t);const a=await t;this.state=this.state.setIn(["alreadyLoadedPages",e],Promise.resolve());const s=(0,i.aV)().withMutations((e=>{a.annotations.forEach((t=>{try{e.push((0,n.vH)(t.id,t.content))}catch(e){(0,r.um)(`Skipped creating annotation #${t.id} from payload because an error occurred while deserializing.`,t.content),(0,r.um)(e)}}))}));s.size>0&&((0,r.kG)(this.annotationCallbacks),this.annotationCallbacks.createAnnotations(s,(0,i.D5)(),h.y))}catch(e){this._handleError(e,"annotations")}}async loadBookmarks(){if(this._verifyLoaded(),this.state.loadBookmarksPromise)await this.state.loadBookmarksPromise;else try{const e=this._request("/bookmarks","GET").then((e=>e.json())).then((e=>e.data)).catch((e=>{throw e}));this.state=this.state.set("loadBookmarksPromise",e);const t=await e;this.state=this.state.set("loadBookmarksPromise",Promise.resolve()),(0,r.kG)(Array.isArray(t.bookmarks),"Unexpected reply from bookmarks endpoint.");const a=(0,i.aV)().withMutations((e=>{t.bookmarks.forEach((t=>{try{e.push((0,l.i)(t.id,t.content))}catch(e){(0,r.um)(`Skipped creating bookmark #${t.id} from payload because an error occurred while deserializing.`,t),(0,r.um)(e)}}))}));a.size>0&&((0,r.kG)(this.bookmarkCallbacks),this.bookmarkCallbacks.createBookmarks(a,h.y))}catch(e){this._handleError(e,"bookmarks")}}async syncChanges(){}async _initializeFormFieldValues(){const e=await this._request("/form-field-values","GET"),t=await e.json();(0,r.kG)(Array.isArray(t.formFieldValues),"Unexpected reply from form-values endpoint.");const a=(0,i.aV)(t.formFieldValues.map((e=>{let{content:t}=e;try{return(0,n.u9)(t)}catch(e){return(0,r.um)(`Skipped form field value ${t.name} from payload because an error occurred while deserializing.`,t),(0,r.um)(e),null}})).filter(Boolean));(0,r.kG)(this.formFieldValueCallbacks),this.state.ignoredFormFieldNames&&this.state.ignoredFormFieldNames.size?this.formFieldValueCallbacks.setFormFieldValues(a.filter((e=>{var t;return!(null!==(t=this.state.ignoredFormFieldNames)&&void 0!==t&&t.includes(e.name))}))):this.formFieldValueCallbacks.setFormFieldValues(a)}_handleError(e,t){(0,r.vU)(`Loading or updating ${t} failed:\n\n${e.message}`)}_request(e,t,a){(0,r.kG)(null!=this.state.authPayload,"Cannot call request without authPayload");const s=a instanceof FormData||"object"!=typeof a?null:{"Content-Type":"application/json"},i=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({"X-PSPDFKit-Token":this.state.authPayload.token,"PSPDFKit-Platform":"web","PSPDFKit-Version":(0,m.oM)()},s);return fetch(`${this.state.serverURL}${e}`,{method:t,headers:i,body:a instanceof FormData?a:"object"==typeof a?JSON.stringify(a):void 0,credentials:"include"})}_verifyLoaded(){if(!this.state.isLoaded)throw new Error("not loaded")}setIgnoredFormFieldNames(e){this.state=this.state.set("ignoredFormFieldNames",e)}}}}]);