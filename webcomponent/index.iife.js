var IDSIcon = (function (exports) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=globalThis,e$4=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$2=new WeakMap;let n$3 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$4&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$2.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$2.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$3("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,s,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1]),t[0]);return new n$3(o,t,s$2)},S$1=(s,o)=>{if(e$4)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$4?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */const i$2=globalThis,e$3=i$2.trustedTypes,h$1=e$3?e$3.emptyScript:"",r$1=i$2.reactiveElementPolyfillSupport,o$1={toAttribute(t,s){switch(s){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},n$2=(t,s)=>s!==t&&(s==s||t==t),a$1={attribute:!0,type:String,converter:o$1,reflect:!1,hasChanged:n$2},c$1="finalized";let l$1 = class l extends HTMLElement{static addInitializer(t){this.finalize(),(this.i??=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];for(const[s,i]of this.elementProperties){const e=this._$El(s,i);void 0!==e&&(this._$Eh.set(e,s),t.push(e));}return t}static createProperty(t,s=a$1){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=Symbol(),e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,s,i){return {get(){return this[s]},set(e){const h=this[t];this[s]=e,this.requestUpdate(t,h,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||a$1}static finalize(){if(this.hasOwnProperty(c$1))return !1;this[c$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.i&&(this.i=[...t.i]),this.elementProperties=new Map(t.elementProperties),this._$Eh=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$El(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this.v();}v(){this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),this.constructor.i?.forEach((t=>t(this)));}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){const t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(this._$Ep.set(s,this[s]),delete this[s]);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s,i=a$1){const e=this.constructor._$El(t,i);if(void 0!==e&&!0===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:o$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:o$1;this._$Em=e,this[e]=h.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||n$2)(this[t],s)?(this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;this.hasUpdated,this._$Ep&&=this._$Ep.forEach(((t,s)=>this[s]=t));let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$Ek();}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){this._$EC&&=this._$EC.forEach(((t,s)=>this._$EO(s,this[s],t))),this._$Ek();}updated(t){}firstUpdated(t){}};l$1[c$1]=!0,l$1.elementProperties=new Map,l$1.elementStyles=[],l$1.shadowRootOptions={mode:"open"},r$1?.({ReactiveElement:l$1}),(i$2.reactiveElementVersions??=[]).push("2.0.0-pre.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t=globalThis,s$1=t.trustedTypes,e$2=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,n$1="$lit$",o=`lit$${(Math.random()+"").slice(9)}$`,h="?"+o,r=`<${h}>`,a=document,l=()=>a.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>d(t)||"function"==typeof t?.[Symbol.iterator],m="[ \t\n\f\r]",p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,f=/>/g,g=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),_=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,k=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=k(1),T=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),A=new WeakMap,E=a.createTreeWalker(a,129),C=(t,i)=>{const s=t.length-1,h=[];let a,l=2===i?"<svg>":"",c=p;for(let i=0;i<s;i++){const s=t[i];let e,d,u=-1,m=0;for(;m<s.length&&(c.lastIndex=m,d=c.exec(s),null!==d);)m=c.lastIndex,c===p?"!--"===d[1]?c=v:void 0!==d[1]?c=f:void 0!==d[2]?(y.test(d[2])&&(a=RegExp("</"+d[2],"g")),c=g):void 0!==d[3]&&(c=g):c===g?">"===d[0]?(c=a??p,u=-1):void 0===d[1]?u=-2:(u=c.lastIndex-d[2].length,e=d[1],c=void 0===d[3]?g:'"'===d[3]?$:_):c===$||c===_?c=g:c===v||c===f?c=p:(c=g,a=void 0);const k=c===g&&t[i+1].startsWith("/>")?" ":"";l+=c===p?s+r:u>=0?(h.push(e),s.slice(0,u)+n$1+s.slice(u)+o+k):s+o+(-2===u?i:k);}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==e$2?e$2.createHTML(d):d,h]};class P{constructor({strings:t,_$litType$:e},r){let a;this.parts=[];let c=0,d=0;const u=t.length-1,m=this.parts,[p,v]=C(t,e);if(this.el=P.createElement(p,r),E.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(a=E.nextNode())&&m.length<u;){if(1===a.nodeType){if(a.hasAttributes())for(const t of a.getAttributeNames())if(t.endsWith(n$1)){const i=v[d++],s=a.getAttribute(t).split(o),e=/([.?@])?(.*)/.exec(i);m.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?M:"@"===e[1]?R:S}),a.removeAttribute(t);}else t.startsWith(o)&&(m.push({type:6,index:c}),a.removeAttribute(t));if(y.test(a.tagName)){const t=a.textContent.split(o),i=t.length-1;if(i>0){a.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)a.append(t[s],l()),E.nextNode(),m.push({type:2,index:++c});a.append(t[i],l());}}}else if(8===a.nodeType)if(a.data===h)m.push({type:2,index:c});else {let t=-1;for(;-1!==(t=a.data.indexOf(o,t+1));)m.push({type:7,index:c}),t+=o.length-1;}c++;}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){if(i===T)return i;let n=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=n:s._$Cl=n),void 0!==n&&(i=V(t,n._$AS(t,i.values),n,e)),i}class L{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??a).importNode(i,!0);E.currentNode=e;let n=E.nextNode(),o=0,h=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new N(n,n.nextSibling,this,t):1===r.type?i=new r.ctor(n,r.name,r.strings,this,t):6===r.type&&(i=new H(n,this,t)),this._$AV.push(i),r=s[++h];}o!==r?.index&&(n=E.nextNode(),o++);}return e}p(t){let s=0;for(const e of this._$AV)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,s),s+=e.strings.length-2):e._$AI(t[s])),s++;}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=V(this,t,s),c(t)?t===w||null==t||""===t?(this._$AH!==w&&(this._$AR()),this._$AH=w):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){if(this._$AH!==w&&c(this._$AH)){const s=this._$AA.nextSibling;s.data=t;}else this.$(a.createTextNode(t));this._$AH=t;}g(t){const{values:s,_$litType$:e}=t,n="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if(this._$AH?._$AD===n)this._$AH.p(s);else {const t=new L(n,this),e=t.u(this.options);t.p(s),this.$(e),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new P(t)),i}T(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const n of t)e===i.length?i.push(s=new N(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(n),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class S{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,n){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}_$AI(t,i=this,s,e){const n=this.strings;let o=!1;if(void 0===n)t=V(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else {const e=t;let h,r;for(t=n[0],h=0;h<n.length-1;h++)r=V(this,e[s+h],i,h),r===T&&(r=this._$AH[h]),o||=!c(r)||r!==this._$AH[h],r===w?t=w:t!==w&&(t+=(r??"")+n[h+1]),this._$AH[h]=r;}o&&!e&&this.j(t);}j(t){t===w?this.element.removeAttribute(this.name):(this.element.setAttribute(this.name,t??""));}}class I extends S{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===w?void 0:t;}}class M extends S{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w);}}class R extends S{constructor(t,i,s,e,n){super(t,i,s,e,n),this.type=5;}_$AI(t,s=this){if((t=V(this,t,s,0)??w)===T)return;const e=this._$AH,n=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==w&&(e===w||n);n&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class H{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t);}}const Z=t.litHtmlPolyfillSupport;Z?.(P,N),(t.litHtmlVersions??=[]).push("3.0.0-pre.0");const j=(t,s,e)=>{const n=e?.renderBefore??s;let o=n._$litPart$;if(void 0===o){const t=e?.renderBefore??null;n._$litPart$=o=new N(s.insertBefore(l(),t),t,void 0,e??{});}return o._$AI(t),o};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */class s extends l$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const i$1=globalThis.litElementPolyfillSupport;i$1?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.0-pre.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const e$1=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

    exports.IconSize = void 0;
    (function (IconSize) {
        IconSize["Size16"] = "size16";
        IconSize["Size24"] = "size24";
        IconSize["Size32"] = "size32";
        IconSize["Size48"] = "size48";
    })(exports.IconSize || (exports.IconSize = {}));

    var iconStyles = i$3`/* @import '@ids/style-button/dist/button-styles.css'; */
.if.icon {
    fill: #331e11;
    stroke: #331e11;
}
.if.icon.size16{
    width: 16px;
    height: 16px;
}
.if.icon.size24{
    width: 24px;
    height: 24px;
}
.if.icon.size32{
    width: 32px;
    height: 32px;
}
.if.icon.size48{
    width: 48px;
    height: 48px;
}`;

    var iconVariables = i$3`/* @import '@ids/style-button/dist/button-variables.css'; */`;

    var _a$1;
    const CUSTOM_TAG$1 = 'ids-icon';
    // Inject css variables to global styles in head
    if (!document.getElementById(CUSTOM_TAG$1)) {
        const style = document.createElement('style');
        style.id = CUSTOM_TAG$1;
        style.innerHTML = iconVariables.cssText + iconStyles.cssText;
        (_a$1 = document.querySelector('head')) === null || _a$1 === void 0 ? void 0 : _a$1.prepend(style);
    }
    exports.IdsIcon = class IdsIcon extends s {
        constructor() {
            super(...arguments);
            this.size = exports.IconSize.Size16;
        }
        render() {
            const classNames = [`if icon`, this.size].join(' ');
            const src = `https://static.design.if.eu/ids-icon/ui/${this.icon}.svg`;
            return b `
            <img class=${classNames} src=${src} />
        `;
        }
    };
    exports.IdsIcon.styles = iconStyles;
    __decorate([
        n()
    ], exports.IdsIcon.prototype, "icon", void 0);
    __decorate([
        n()
    ], exports.IdsIcon.prototype, "size", void 0);
    exports.IdsIcon = __decorate([
        e$1(CUSTOM_TAG$1)
    ], exports.IdsIcon);

    var _a;
    const CUSTOM_TAG = 'ids-icon-sheet';
    // Inject css variables to global styles in head
    if (!document.getElementById(CUSTOM_TAG)) {
        const style = document.createElement('style');
        style.id = CUSTOM_TAG;
        style.innerHTML = iconVariables.cssText;
        (_a = document.querySelector('head')) === null || _a === void 0 ? void 0 : _a.prepend(style);
    }
    exports.IdsIconSheet = class IdsIconSheet extends s {
        constructor() {
            super(...arguments);
            this.size = exports.IconSize.Size16;
        }
        render() {
            const classNames = [`if icon`, this.size].join(' ');
            const src = `#${this.icon}`;
            return b `
            <svg class=${classNames}>
                <use xlink:href=${src}></use>
            </svg>
        `;
        }
    };
    exports.IdsIconSheet.styles = iconStyles;
    __decorate([
        n()
    ], exports.IdsIconSheet.prototype, "icon", void 0);
    __decorate([
        n()
    ], exports.IdsIconSheet.prototype, "size", void 0);
    exports.IdsIconSheet = __decorate([
        e$1(CUSTOM_TAG)
    ], exports.IdsIconSheet);

    return exports;

})({});
//# sourceMappingURL=index.iife.js.map
