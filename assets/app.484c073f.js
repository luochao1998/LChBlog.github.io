const yn={},a4="modulepreload",fs={},r4="/LChBlog.github.io/",l1=function(t,e){return!e||e.length===0?t():Promise.all(e.map(r=>{if(r=`${r4}${r}`,r in fs)return;fs[r]=!0;const l=r.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":a4,l||(h.as="script",h.crossOrigin=""),h.href=r,document.head.appendChild(h),l)return new Promise((d,u)=>{h.addEventListener("load",d),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())},c3={"v-8daa1a0e":()=>l1(()=>import("./index.html.7040d26a.js"),[]).then(({data:n})=>n),"v-769f6067":()=>l1(()=>import("./102601.html.e6c7c103.js"),[]).then(({data:n})=>n),"v-729d99c6":()=>l1(()=>import("./110401.html.04ebfece.js"),[]).then(({data:n})=>n),"v-307a6c96":()=>l1(()=>import("./101201.html.9fae504b.js"),[]).then(({data:n})=>n),"v-37e04cf1":()=>l1(()=>import("./101701.html.7c6f87d0.js"),[]).then(({data:n})=>n),"v-a289eec0":()=>l1(()=>import("./092901.html.27ca33e7.js"),[]).then(({data:n})=>n),"v-1ca0b669":()=>l1(()=>import("./100801.html.3839e5ca.js"),[]).then(({data:n})=>n),"v-1e558f08":()=>l1(()=>import("./100802.html.499afec0.js"),[]).then(({data:n})=>n),"v-29a06e76":()=>l1(()=>import("./111801.html.f503d42f.js"),[]).then(({data:n})=>n),"v-3706649a":()=>l1(()=>import("./404.html.ab74ef0a.js"),[]).then(({data:n})=>n),"v-73395324":()=>l1(()=>import("./index.html.65a399a6.js"),[]).then(({data:n})=>n),"v-3de79fea":()=>l1(()=>import("./index.html.7e2f8775.js"),[]).then(({data:n})=>n),"v-a2486af8":()=>l1(()=>import("./index.html.19a3b71a.js"),[]).then(({data:n})=>n),"v-1d404bd6":()=>l1(()=>import("./index.html.453dd7eb.js"),[]).then(({data:n})=>n),"v-1cd2f072":()=>l1(()=>import("./index.html.bd0c3cfb.js"),[]).then(({data:n})=>n),"v-d6e06a32":()=>l1(()=>import("./index.html.f90ae3fa.js"),[]).then(({data:n})=>n),"v-12186d64":()=>l1(()=>import("./index.html.4c82983d.js"),[]).then(({data:n})=>n),"v-01560935":()=>l1(()=>import("./index.html.d093fa6b.js"),[]).then(({data:n})=>n),"v-03d52fd3":()=>l1(()=>import("./index.html.098e1930.js"),[]).then(({data:n})=>n)};function qe(n,t){const e=Object.create(null),r=n.split(",");for(let l=0;l<r.length;l++)e[r[l]]=!0;return t?l=>!!e[l.toLowerCase()]:l=>!!e[l]}const l4="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i4=qe(l4);function a3(n){return!!n||n===""}function m2(n){if(Q(n)){const t={};for(let e=0;e<n.length;e++){const r=n[e],l=C1(r)?d4(r):m2(r);if(l)for(const i in l)t[i]=l[i]}return t}else{if(C1(n))return n;if(F1(n))return n}}const p4=/;(?![^(]*\))/g,h4=/:(.+)/;function d4(n){const t={};return n.split(p4).forEach(e=>{if(e){const r=e.split(h4);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function G1(n){let t="";if(C1(n))t=n;else if(Q(n))for(let e=0;e<n.length;e++){const r=G1(n[e]);r&&(t+=r+" ")}else if(F1(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}function u4(n,t){if(n.length!==t.length)return!1;let e=!0;for(let r=0;e&&r<n.length;r++)e=sn(n[r],t[r]);return e}function sn(n,t){if(n===t)return!0;let e=$s(n),r=$s(t);if(e||r)return e&&r?n.getTime()===t.getTime():!1;if(e=Un(n),r=Un(t),e||r)return n===t;if(e=Q(n),r=Q(t),e||r)return e&&r?u4(n,t):!1;if(e=F1(n),r=F1(t),e||r){if(!e||!r)return!1;const l=Object.keys(n).length,i=Object.keys(t).length;if(l!==i)return!1;for(const h in n){const d=n.hasOwnProperty(h),u=t.hasOwnProperty(h);if(d&&!u||!d&&u||!sn(n[h],t[h]))return!1}}return String(n)===String(t)}function Ge(n,t){return n.findIndex(e=>sn(e,t))}const y1=n=>C1(n)?n:n==null?"":Q(n)||F1(n)&&(n.toString===i3||!u1(n.toString))?JSON.stringify(n,r3,2):String(n),r3=(n,t)=>t&&t.__v_isRef?r3(n,t.value):hn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[r,l])=>(e[`${r} =>`]=l,e),{})}:mn(t)?{[`Set(${t.size})`]:[...t.values()]}:F1(t)&&!Q(t)&&!p3(t)?String(t):t,A1={},pn=[],h2=()=>{},w4=()=>!1,v4=/^on[^a-z]/,st=n=>v4.test(n),Ne=n=>n.startsWith("onUpdate:"),K1=Object.assign,Ue=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},_4=Object.prototype.hasOwnProperty,m1=(n,t)=>_4.call(n,t),Q=Array.isArray,hn=n=>ot(n)==="[object Map]",mn=n=>ot(n)==="[object Set]",$s=n=>ot(n)==="[object Date]",u1=n=>typeof n=="function",C1=n=>typeof n=="string",Un=n=>typeof n=="symbol",F1=n=>n!==null&&typeof n=="object",l3=n=>F1(n)&&u1(n.then)&&u1(n.catch),i3=Object.prototype.toString,ot=n=>i3.call(n),g4=n=>ot(n).slice(8,-1),p3=n=>ot(n)==="[object Object]",We=n=>C1(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Tn=qe(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Dt=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},k4=/-(\w)/g,x2=Dt(n=>n.replace(k4,(t,e)=>e?e.toUpperCase():"")),m4=/\B([A-Z])/g,xn=Dt(n=>n.replace(m4,"-$1").toLowerCase()),Ft=Dt(n=>n.charAt(0).toUpperCase()+n.slice(1)),Qt=Dt(n=>n?`on${Ft(n)}`:""),Wn=(n,t)=>!Object.is(n,t),Ct=(n,t)=>{for(let e=0;e<n.length;e++)n[e](t)},Bt=(n,t,e)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,value:e})},Kn=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let Ms;const x4=()=>Ms||(Ms=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let n2;class f4{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&n2&&(this.parent=n2,this.index=(n2.scopes||(n2.scopes=[])).push(this)-1)}run(t){if(this.active){const e=n2;try{return n2=this,t()}finally{n2=e}}}on(){n2=this}off(){n2=this.parent}stop(t){if(this.active){let e,r;for(e=0,r=this.effects.length;e<r;e++)this.effects[e].stop();for(e=0,r=this.cleanups.length;e<r;e++)this.cleanups[e]();if(this.scopes)for(e=0,r=this.scopes.length;e<r;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.active=!1}}}function $4(n,t=n2){t&&t.active&&t.effects.push(n)}function M4(){return n2}function C4(n){n2&&n2.cleanups.push(n)}const Ke=n=>{const t=new Set(n);return t.w=0,t.n=0,t},h3=n=>(n.w&O2)>0,d3=n=>(n.n&O2)>0,z4=({deps:n})=>{if(n.length)for(let t=0;t<n.length;t++)n[t].w|=O2},b4=n=>{const{deps:t}=n;if(t.length){let e=0;for(let r=0;r<t.length;r++){const l=t[r];h3(l)&&!d3(l)?l.delete(n):t[e++]=l,l.w&=~O2,l.n&=~O2}t.length=e}},me=new WeakMap;let An=0,O2=1;const xe=30;let i2;const tn=Symbol(""),fe=Symbol("");class Je{constructor(t,e=null,r){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,$4(this,r)}run(){if(!this.active)return this.fn();let t=i2,e=E2;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=i2,i2=this,E2=!0,O2=1<<++An,An<=xe?z4(this):Cs(this),this.fn()}finally{An<=xe&&b4(this),O2=1<<--An,i2=this.parent,E2=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){i2===this?this.deferStop=!0:this.active&&(Cs(this),this.onStop&&this.onStop(),this.active=!1)}}function Cs(n){const{deps:t}=n;if(t.length){for(let e=0;e<t.length;e++)t[e].delete(n);t.length=0}}let E2=!0;const u3=[];function fn(){u3.push(E2),E2=!1}function $n(){const n=u3.pop();E2=n===void 0?!0:n}function s2(n,t,e){if(E2&&i2){let r=me.get(n);r||me.set(n,r=new Map);let l=r.get(e);l||r.set(e,l=Ke()),w3(l)}}function w3(n,t){let e=!1;An<=xe?d3(n)||(n.n|=O2,e=!h3(n)):e=!n.has(i2),e&&(n.add(i2),i2.deps.push(n))}function B2(n,t,e,r,l,i){const h=me.get(n);if(!h)return;let d=[];if(t==="clear")d=[...h.values()];else if(e==="length"&&Q(n))h.forEach((u,w)=>{(w==="length"||w>=r)&&d.push(u)});else switch(e!==void 0&&d.push(h.get(e)),t){case"add":Q(n)?We(e)&&d.push(h.get("length")):(d.push(h.get(tn)),hn(n)&&d.push(h.get(fe)));break;case"delete":Q(n)||(d.push(h.get(tn)),hn(n)&&d.push(h.get(fe)));break;case"set":hn(n)&&d.push(h.get(tn));break}if(d.length===1)d[0]&&$e(d[0]);else{const u=[];for(const w of d)w&&u.push(...w);$e(Ke(u))}}function $e(n,t){const e=Q(n)?n:[...n];for(const r of e)r.computed&&zs(r);for(const r of e)r.computed||zs(r)}function zs(n,t){(n!==i2||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const B4=qe("__proto__,__v_isRef,__isVue"),v3=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Un)),y4=Ye(),L4=Ye(!1,!0),H4=Ye(!0),bs=V4();function V4(){const n={};return["includes","indexOf","lastIndexOf"].forEach(t=>{n[t]=function(...e){const r=z1(this);for(let i=0,h=this.length;i<h;i++)s2(r,"get",i+"");const l=r[t](...e);return l===-1||l===!1?r[t](...e.map(z1)):l}}),["push","pop","shift","unshift","splice"].forEach(t=>{n[t]=function(...e){fn();const r=z1(this)[t].apply(this,e);return $n(),r}}),n}function Ye(n=!1,t=!1){return function(r,l,i){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return t;if(l==="__v_raw"&&i===(n?t?W4:x3:t?m3:k3).get(r))return r;const h=Q(r);if(!n&&h&&m1(bs,l))return Reflect.get(bs,l,i);const d=Reflect.get(r,l,i);return(Un(l)?v3.has(l):B4(l))||(n||s2(r,"get",l),t)?d:U1(d)?h&&We(l)?d:d.value:F1(d)?n?ct(d):N2(d):d}}const j4=_3(),S4=_3(!0);function _3(n=!1){return function(e,r,l,i){let h=e[r];if(Jn(h)&&U1(h)&&!U1(l))return!1;if(!n&&!Jn(l)&&(Me(l)||(l=z1(l),h=z1(h)),!Q(e)&&U1(h)&&!U1(l)))return h.value=l,!0;const d=Q(e)&&We(r)?Number(r)<e.length:m1(e,r),u=Reflect.set(e,r,l,i);return e===z1(i)&&(d?Wn(l,h)&&B2(e,"set",r,l):B2(e,"add",r,l)),u}}function A4(n,t){const e=m1(n,t);n[t];const r=Reflect.deleteProperty(n,t);return r&&e&&B2(n,"delete",t,void 0),r}function R4(n,t){const e=Reflect.has(n,t);return(!Un(t)||!v3.has(t))&&s2(n,"has",t),e}function P4(n){return s2(n,"iterate",Q(n)?"length":tn),Reflect.ownKeys(n)}const g3={get:y4,set:j4,deleteProperty:A4,has:R4,ownKeys:P4},T4={get:H4,set(n,t){return!0},deleteProperty(n,t){return!0}},D4=K1({},g3,{get:L4,set:S4}),Ze=n=>n,Et=n=>Reflect.getPrototypeOf(n);function pt(n,t,e=!1,r=!1){n=n.__v_raw;const l=z1(n),i=z1(t);e||(t!==i&&s2(l,"get",t),s2(l,"get",i));const{has:h}=Et(l),d=r?Ze:e?ns:Yn;if(h.call(l,t))return d(n.get(t));if(h.call(l,i))return d(n.get(i));n!==l&&n.get(t)}function ht(n,t=!1){const e=this.__v_raw,r=z1(e),l=z1(n);return t||(n!==l&&s2(r,"has",n),s2(r,"has",l)),n===l?e.has(n):e.has(n)||e.has(l)}function dt(n,t=!1){return n=n.__v_raw,!t&&s2(z1(n),"iterate",tn),Reflect.get(n,"size",n)}function Bs(n){n=z1(n);const t=z1(this);return Et(t).has.call(t,n)||(t.add(n),B2(t,"add",n,n)),this}function ys(n,t){t=z1(t);const e=z1(this),{has:r,get:l}=Et(e);let i=r.call(e,n);i||(n=z1(n),i=r.call(e,n));const h=l.call(e,n);return e.set(n,t),i?Wn(t,h)&&B2(e,"set",n,t):B2(e,"add",n,t),this}function Ls(n){const t=z1(this),{has:e,get:r}=Et(t);let l=e.call(t,n);l||(n=z1(n),l=e.call(t,n)),r&&r.call(t,n);const i=t.delete(n);return l&&B2(t,"delete",n,void 0),i}function Hs(){const n=z1(this),t=n.size!==0,e=n.clear();return t&&B2(n,"clear",void 0,void 0),e}function ut(n,t){return function(r,l){const i=this,h=i.__v_raw,d=z1(h),u=t?Ze:n?ns:Yn;return!n&&s2(d,"iterate",tn),h.forEach((w,v)=>r.call(l,u(w),u(v),i))}}function wt(n,t,e){return function(...r){const l=this.__v_raw,i=z1(l),h=hn(i),d=n==="entries"||n===Symbol.iterator&&h,u=n==="keys"&&h,w=l[n](...r),v=e?Ze:t?ns:Yn;return!t&&s2(i,"iterate",u?fe:tn),{next(){const{value:k,done:_}=w.next();return _?{value:k,done:_}:{value:d?[v(k[0]),v(k[1])]:v(k),done:_}},[Symbol.iterator](){return this}}}}function V2(n){return function(...t){return n==="delete"?!1:this}}function F4(){const n={get(i){return pt(this,i)},get size(){return dt(this)},has:ht,add:Bs,set:ys,delete:Ls,clear:Hs,forEach:ut(!1,!1)},t={get(i){return pt(this,i,!1,!0)},get size(){return dt(this)},has:ht,add:Bs,set:ys,delete:Ls,clear:Hs,forEach:ut(!1,!0)},e={get(i){return pt(this,i,!0)},get size(){return dt(this,!0)},has(i){return ht.call(this,i,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:ut(!0,!1)},r={get(i){return pt(this,i,!0,!0)},get size(){return dt(this,!0)},has(i){return ht.call(this,i,!0)},add:V2("add"),set:V2("set"),delete:V2("delete"),clear:V2("clear"),forEach:ut(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=wt(i,!1,!1),e[i]=wt(i,!0,!1),t[i]=wt(i,!1,!0),r[i]=wt(i,!0,!0)}),[n,e,t,r]}const[E4,I4,O4,q4]=F4();function Qe(n,t){const e=t?n?q4:O4:n?I4:E4;return(r,l,i)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?r:Reflect.get(m1(e,l)&&l in r?e:r,l,i)}const G4={get:Qe(!1,!1)},N4={get:Qe(!1,!0)},U4={get:Qe(!0,!1)},k3=new WeakMap,m3=new WeakMap,x3=new WeakMap,W4=new WeakMap;function K4(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function J4(n){return n.__v_skip||!Object.isExtensible(n)?0:K4(g4(n))}function N2(n){return Jn(n)?n:Xe(n,!1,g3,G4,k3)}function Y4(n){return Xe(n,!1,D4,N4,m3)}function ct(n){return Xe(n,!0,T4,U4,x3)}function Xe(n,t,e,r,l){if(!F1(n)||n.__v_raw&&!(t&&n.__v_isReactive))return n;const i=l.get(n);if(i)return i;const h=J4(n);if(h===0)return n;const d=new Proxy(n,h===2?r:e);return l.set(n,d),d}function dn(n){return Jn(n)?dn(n.__v_raw):!!(n&&n.__v_isReactive)}function Jn(n){return!!(n&&n.__v_isReadonly)}function Me(n){return!!(n&&n.__v_isShallow)}function f3(n){return dn(n)||Jn(n)}function z1(n){const t=n&&n.__v_raw;return t?z1(t):n}function $3(n){return Bt(n,"__v_skip",!0),n}const Yn=n=>F1(n)?N2(n):n,ns=n=>F1(n)?ct(n):n;function M3(n){E2&&i2&&(n=z1(n),w3(n.dep||(n.dep=Ke())))}function C3(n,t){n=z1(n),n.dep&&$e(n.dep)}function U1(n){return!!(n&&n.__v_isRef===!0)}function Y(n){return b3(n,!1)}function z3(n){return b3(n,!0)}function b3(n,t){return U1(n)?n:new Z4(n,t)}class Z4{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:z1(t),this._value=e?t:Yn(t)}get value(){return M3(this),this._value}set value(t){t=this.__v_isShallow?t:z1(t),Wn(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Yn(t),C3(this))}}function N1(n){return U1(n)?n.value:n}const Q4={get:(n,t,e)=>N1(Reflect.get(n,t,e)),set:(n,t,e,r)=>{const l=n[t];return U1(l)&&!U1(e)?(l.value=e,!0):Reflect.set(n,t,e,r)}};function B3(n){return dn(n)?n:new Proxy(n,Q4)}function Mn(n){const t=Q(n)?new Array(n.length):{};for(const e in n)t[e]=nc(n,e);return t}class X4{constructor(t,e,r){this._object=t,this._key=e,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}}function nc(n,t,e){const r=n[t];return U1(r)?r:new X4(n,t,e)}class tc{constructor(t,e,r,l){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Je(t,()=>{this._dirty||(this._dirty=!0,C3(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=r}get value(){const t=z1(this);return M3(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ec(n,t,e=!1){let r,l;const i=u1(n);return i?(r=n,l=h2):(r=n.get,l=n.set),new tc(r,l,i||!l,e)}function I2(n,t,e,r){let l;try{l=r?n(...r):n()}catch(i){at(i,t,e)}return l}function a2(n,t,e,r){if(u1(n)){const i=I2(n,t,e,r);return i&&l3(i)&&i.catch(h=>{at(h,t,e)}),i}const l=[];for(let i=0;i<n.length;i++)l.push(a2(n[i],t,e,r));return l}function at(n,t,e,r=!0){const l=t?t.vnode:null;if(t){let i=t.parent;const h=t.proxy,d=e;for(;i;){const w=i.ec;if(w){for(let v=0;v<w.length;v++)if(w[v](n,h,d)===!1)return}i=i.parent}const u=t.appContext.config.errorHandler;if(u){I2(u,null,10,[n,h,d]);return}}sc(n,e,l,r)}function sc(n,t,e,r=!0){console.error(n)}let yt=!1,Ce=!1;const t2=[];let M2=0;const Dn=[];let Rn=null,an=0;const Fn=[];let P2=null,rn=0;const y3=Promise.resolve();let ts=null,ze=null;function es(n){const t=ts||y3;return n?t.then(this?n.bind(this):n):t}function oc(n){let t=M2+1,e=t2.length;for(;t<e;){const r=t+e>>>1;Zn(t2[r])<n?t=r+1:e=r}return t}function ss(n){(!t2.length||!t2.includes(n,yt&&n.allowRecurse?M2+1:M2))&&n!==ze&&(n.id==null?t2.push(n):t2.splice(oc(n.id),0,n),L3())}function L3(){!yt&&!Ce&&(Ce=!0,ts=y3.then(V3))}function cc(n){const t=t2.indexOf(n);t>M2&&t2.splice(t,1)}function H3(n,t,e,r){Q(n)?e.push(...n):(!t||!t.includes(n,n.allowRecurse?r+1:r))&&e.push(n),L3()}function ac(n){H3(n,Rn,Dn,an)}function rc(n){H3(n,P2,Fn,rn)}function It(n,t=null){if(Dn.length){for(ze=t,Rn=[...new Set(Dn)],Dn.length=0,an=0;an<Rn.length;an++)Rn[an]();Rn=null,an=0,ze=null,It(n,t)}}function Lt(n){if(It(),Fn.length){const t=[...new Set(Fn)];if(Fn.length=0,P2){P2.push(...t);return}for(P2=t,P2.sort((e,r)=>Zn(e)-Zn(r)),rn=0;rn<P2.length;rn++)P2[rn]();P2=null,rn=0}}const Zn=n=>n.id==null?1/0:n.id;function V3(n){Ce=!1,yt=!0,It(n),t2.sort((e,r)=>Zn(e)-Zn(r));const t=h2;try{for(M2=0;M2<t2.length;M2++){const e=t2[M2];e&&e.active!==!1&&I2(e,null,14)}}finally{M2=0,t2.length=0,Lt(),yt=!1,ts=null,(t2.length||Dn.length||Fn.length)&&V3(n)}}function lc(n,t,...e){if(n.isUnmounted)return;const r=n.vnode.props||A1;let l=e;const i=t.startsWith("update:"),h=i&&t.slice(7);if(h&&h in r){const v=`${h==="modelValue"?"model":h}Modifiers`,{number:k,trim:_}=r[v]||A1;_&&(l=e.map(g=>g.trim())),k&&(l=e.map(Kn))}let d,u=r[d=Qt(t)]||r[d=Qt(x2(t))];!u&&i&&(u=r[d=Qt(xn(t))]),u&&a2(u,n,6,l);const w=r[d+"Once"];if(w){if(!n.emitted)n.emitted={};else if(n.emitted[d])return;n.emitted[d]=!0,a2(w,n,6,l)}}function j3(n,t,e=!1){const r=t.emitsCache,l=r.get(n);if(l!==void 0)return l;const i=n.emits;let h={},d=!1;if(!u1(n)){const u=w=>{const v=j3(w,t,!0);v&&(d=!0,K1(h,v))};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!d?(r.set(n,null),null):(Q(i)?i.forEach(u=>h[u]=null):K1(h,i),r.set(n,h),h)}function Ot(n,t){return!n||!st(t)?!1:(t=t.slice(2).replace(/Once$/,""),m1(n,t[0].toLowerCase()+t.slice(1))||m1(n,xn(t))||m1(n,t))}let J1=null,S3=null;function Ht(n){const t=J1;return J1=n,S3=n&&n.type.__scopeId||null,t}function ic(n,t=J1,e){if(!t||n._n)return n;const r=(...l)=>{r._d&&Is(-1);const i=Ht(t),h=n(...l);return Ht(i),r._d&&Is(1),h};return r._n=!0,r._c=!0,r._d=!0,r}function Xt(n){const{type:t,vnode:e,proxy:r,withProxy:l,props:i,propsOptions:[h],slots:d,attrs:u,emit:w,render:v,renderCache:k,data:_,setupState:g,ctx:x,inheritAttrs:C}=n;let b,f;const M=Ht(n);try{if(e.shapeFlag&4){const B=l||r;b=l2(v.call(B,B,k,i,g,_,x)),f=u}else{const B=t;b=l2(B.length>1?B(i,{attrs:u,slots:d,emit:w}):B(i,null)),f=t.props?u:pc(u)}}catch(B){In.length=0,at(B,n,1),b=g1(e2)}let L=b;if(f&&C!==!1){const B=Object.keys(f),{shapeFlag:S}=L;B.length&&S&7&&(h&&B.some(Ne)&&(f=hc(f,h)),L=q2(L,f))}return e.dirs&&(L=q2(L),L.dirs=L.dirs?L.dirs.concat(e.dirs):e.dirs),e.transition&&(L.transition=e.transition),b=L,Ht(M),b}const pc=n=>{let t;for(const e in n)(e==="class"||e==="style"||st(e))&&((t||(t={}))[e]=n[e]);return t},hc=(n,t)=>{const e={};for(const r in n)(!Ne(r)||!(r.slice(9)in t))&&(e[r]=n[r]);return e};function dc(n,t,e){const{props:r,children:l,component:i}=n,{props:h,children:d,patchFlag:u}=t,w=i.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&u>=0){if(u&1024)return!0;if(u&16)return r?Vs(r,h,w):!!h;if(u&8){const v=t.dynamicProps;for(let k=0;k<v.length;k++){const _=v[k];if(h[_]!==r[_]&&!Ot(w,_))return!0}}}else return(l||d)&&(!d||!d.$stable)?!0:r===h?!1:r?h?Vs(r,h,w):!0:!!h;return!1}function Vs(n,t,e){const r=Object.keys(t);if(r.length!==Object.keys(n).length)return!0;for(let l=0;l<r.length;l++){const i=r[l];if(t[i]!==n[i]&&!Ot(e,i))return!0}return!1}function uc({vnode:n,parent:t},e){for(;t&&t.subTree===n;)(n=t.vnode).el=e,t=t.parent}const wc=n=>n.__isSuspense;function A3(n,t){t&&t.pendingBranch?Q(n)?t.effects.push(...n):t.effects.push(n):rc(n)}function d2(n,t){if(O1){let e=O1.provides;const r=O1.parent&&O1.parent.provides;r===e&&(e=O1.provides=Object.create(r)),e[n]=t}}function D1(n,t,e=!1){const r=O1||J1;if(r){const l=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return e&&u1(t)?t.call(r.proxy):t}}const js={};function W1(n,t,e){return R3(n,t,e)}function R3(n,t,{immediate:e,deep:r,flush:l,onTrack:i,onTrigger:h}=A1){const d=O1;let u,w=!1,v=!1;if(U1(n)?(u=()=>n.value,w=Me(n)):dn(n)?(u=()=>n,r=!0):Q(n)?(v=!0,w=n.some(f=>dn(f)||Me(f)),u=()=>n.map(f=>{if(U1(f))return f.value;if(dn(f))return nn(f);if(u1(f))return I2(f,d,2)})):u1(n)?t?u=()=>I2(n,d,2):u=()=>{if(!(d&&d.isUnmounted))return k&&k(),a2(n,d,3,[_])}:u=h2,t&&r){const f=u;u=()=>nn(f())}let k,_=f=>{k=b.onStop=()=>{I2(f,d,4)}};if(vn)return _=h2,t?e&&a2(t,d,3,[u(),v?[]:void 0,_]):u(),h2;let g=v?[]:js;const x=()=>{if(!!b.active)if(t){const f=b.run();(r||w||(v?f.some((M,L)=>Wn(M,g[L])):Wn(f,g)))&&(k&&k(),a2(t,d,3,[f,g===js?void 0:g,_]),g=f)}else b.run()};x.allowRecurse=!!t;let C;l==="sync"?C=x:l==="post"?C=()=>Q1(x,d&&d.suspense):C=()=>ac(x);const b=new Je(u,C);return t?e?x():g=b.run():l==="post"?Q1(b.run.bind(b),d&&d.suspense):b.run(),()=>{b.stop(),d&&d.scope&&Ue(d.scope.effects,b)}}function vc(n,t,e){const r=this.proxy,l=C1(n)?n.includes(".")?P3(r,n):()=>r[n]:n.bind(r,r);let i;u1(t)?i=t:(i=t.handler,e=t);const h=O1;wn(this);const d=R3(l,i.bind(r),e);return h?wn(h):en(),d}function P3(n,t){const e=t.split(".");return()=>{let r=n;for(let l=0;l<e.length&&r;l++)r=r[e[l]];return r}}function nn(n,t){if(!F1(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),U1(n))nn(n.value,t);else if(Q(n))for(let e=0;e<n.length;e++)nn(n[e],t);else if(mn(n)||hn(n))n.forEach(e=>{nn(e,t)});else if(p3(n))for(const e in n)nn(n[e],t);return n}function _c(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Y1(()=>{n.isMounted=!0}),lt(()=>{n.isUnmounting=!0}),n}const o2=[Function,Array],gc={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:o2,onEnter:o2,onAfterEnter:o2,onEnterCancelled:o2,onBeforeLeave:o2,onLeave:o2,onAfterLeave:o2,onLeaveCancelled:o2,onBeforeAppear:o2,onAppear:o2,onAfterAppear:o2,onAppearCancelled:o2},setup(n,{slots:t}){const e=Xc(),r=_c();let l;return()=>{const i=t.default&&F3(t.default(),!0);if(!i||!i.length)return;let h=i[0];if(i.length>1){for(const C of i)if(C.type!==e2){h=C;break}}const d=z1(n),{mode:u}=d;if(r.isLeaving)return ne(h);const w=Ss(h);if(!w)return ne(h);const v=be(w,d,r,e);Be(w,v);const k=e.subTree,_=k&&Ss(k);let g=!1;const{getTransitionKey:x}=w.type;if(x){const C=x();l===void 0?l=C:C!==l&&(l=C,g=!0)}if(_&&_.type!==e2&&(!Q2(w,_)||g)){const C=be(_,d,r,e);if(Be(_,C),u==="out-in")return r.isLeaving=!0,C.afterLeave=()=>{r.isLeaving=!1,e.update()},ne(h);u==="in-out"&&w.type!==e2&&(C.delayLeave=(b,f,M)=>{const L=D3(r,_);L[String(_.key)]=_,b._leaveCb=()=>{f(),b._leaveCb=void 0,delete v.delayedLeave},v.delayedLeave=M})}return h}}},T3=gc;function D3(n,t){const{leavingVNodes:e}=n;let r=e.get(t.type);return r||(r=Object.create(null),e.set(t.type,r)),r}function be(n,t,e,r){const{appear:l,mode:i,persisted:h=!1,onBeforeEnter:d,onEnter:u,onAfterEnter:w,onEnterCancelled:v,onBeforeLeave:k,onLeave:_,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:C,onAppear:b,onAfterAppear:f,onAppearCancelled:M}=t,L=String(n.key),B=D3(e,n),S=(P,J)=>{P&&a2(P,r,9,J)},I=(P,J)=>{const X=J[1];S(P,J),Q(P)?P.every(i1=>i1.length<=1)&&X():P.length<=1&&X()},W={mode:i,persisted:h,beforeEnter(P){let J=d;if(!e.isMounted)if(l)J=C||d;else return;P._leaveCb&&P._leaveCb(!0);const X=B[L];X&&Q2(n,X)&&X.el._leaveCb&&X.el._leaveCb(),S(J,[P])},enter(P){let J=u,X=w,i1=v;if(!e.isMounted)if(l)J=b||u,X=f||w,i1=M||v;else return;let D=!1;const p1=P._enterCb=U=>{D||(D=!0,U?S(i1,[P]):S(X,[P]),W.delayedLeave&&W.delayedLeave(),P._enterCb=void 0)};J?I(J,[P,p1]):p1()},leave(P,J){const X=String(n.key);if(P._enterCb&&P._enterCb(!0),e.isUnmounting)return J();S(k,[P]);let i1=!1;const D=P._leaveCb=p1=>{i1||(i1=!0,J(),p1?S(x,[P]):S(g,[P]),P._leaveCb=void 0,B[X]===n&&delete B[X])};B[X]=n,_?I(_,[P,D]):D()},clone(P){return be(P,t,e,r)}};return W}function ne(n){if(rt(n))return n=q2(n),n.children=null,n}function Ss(n){return rt(n)?n.children?n.children[0]:void 0:n}function Be(n,t){n.shapeFlag&6&&n.component?Be(n.component.subTree,t):n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function F3(n,t=!1,e){let r=[],l=0;for(let i=0;i<n.length;i++){let h=n[i];const d=e==null?h.key:String(e)+String(h.key!=null?h.key:i);h.type===H1?(h.patchFlag&128&&l++,r=r.concat(F3(h.children,t,d))):(t||h.type!==e2)&&r.push(d!=null?q2(h,{key:d}):h)}if(l>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function a(n){return u1(n)?{setup:n,name:n.name}:n}const un=n=>!!n.type.__asyncLoader;function T1(n){u1(n)&&(n={loader:n});const{loader:t,loadingComponent:e,errorComponent:r,delay:l=200,timeout:i,suspensible:h=!0,onError:d}=n;let u=null,w,v=0;const k=()=>(v++,u=null,_()),_=()=>{let g;return u||(g=u=t().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),d)return new Promise((C,b)=>{d(x,()=>C(k()),()=>b(x),v+1)});throw x}).then(x=>g!==u&&u?u:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),w=x,x)))};return a({name:"AsyncComponentWrapper",__asyncLoader:_,get __asyncResolved(){return w},setup(){const g=O1;if(w)return()=>te(w,g);const x=M=>{u=null,at(M,g,13,!r)};if(h&&g.suspense||vn)return _().then(M=>()=>te(M,g)).catch(M=>(x(M),()=>r?g1(r,{error:M}):null));const C=Y(!1),b=Y(),f=Y(!!l);return l&&setTimeout(()=>{f.value=!1},l),i!=null&&setTimeout(()=>{if(!C.value&&!b.value){const M=new Error(`Async component timed out after ${i}ms.`);x(M),b.value=M}},i),_().then(()=>{C.value=!0,g.parent&&rt(g.parent.vnode)&&ss(g.parent.update)}).catch(M=>{x(M),b.value=M}),()=>{if(C.value&&w)return te(w,g);if(b.value&&r)return g1(r,{error:b.value});if(e&&!f.value)return g1(e)}}})}function te(n,{vnode:{ref:t,props:e,children:r,shapeFlag:l},parent:i}){const h=g1(n,e,r);return h.ref=t,h}const rt=n=>n.type.__isKeepAlive;function kc(n,t){E3(n,"a",t)}function mc(n,t){E3(n,"da",t)}function E3(n,t,e=O1){const r=n.__wdc||(n.__wdc=()=>{let l=e;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(qt(t,r,e),e){let l=e.parent;for(;l&&l.parent;)rt(l.parent.vnode)&&xc(r,t,e,l),l=l.parent}}function xc(n,t,e,r){const l=qt(t,n,r,!0);os(()=>{Ue(r[t],l)},e)}function qt(n,t,e=O1,r=!1){if(e){const l=e[n]||(e[n]=[]),i=t.__weh||(t.__weh=(...h)=>{if(e.isUnmounted)return;fn(),wn(e);const d=a2(t,e,n,h);return en(),$n(),d});return r?l.unshift(i):l.push(i),i}}const H2=n=>(t,e=O1)=>(!vn||n==="sp")&&qt(n,t,e),fc=H2("bm"),Y1=H2("m"),$c=H2("bu"),Mc=H2("u"),lt=H2("bum"),os=H2("um"),Cc=H2("sp"),zc=H2("rtg"),bc=H2("rtc");function Bc(n,t=O1){qt("ec",n,t)}function vt(n,t){const e=J1;if(e===null)return n;const r=Ut(e)||e.proxy,l=n.dirs||(n.dirs=[]);for(let i=0;i<t.length;i++){let[h,d,u,w=A1]=t[i];u1(h)&&(h={mounted:h,updated:h}),h.deep&&nn(d),l.push({dir:h,instance:r,value:d,oldValue:void 0,arg:u,modifiers:w})}return n}function k2(n,t,e,r){const l=n.dirs,i=t&&t.dirs;for(let h=0;h<l.length;h++){const d=l[h];i&&(d.oldValue=i[h].value);let u=d.dir[r];u&&(fn(),a2(u,e,8,[n.el,d,n,t]),$n())}}const cs="components";function E1(n,t){return O3(cs,n,!0,t)||n}const I3=Symbol();function ye(n){return C1(n)?O3(cs,n,!1)||n:n||I3}function O3(n,t,e=!0,r=!1){const l=J1||O1;if(l){const i=l.type;if(n===cs){const d=oa(i,!1);if(d&&(d===t||d===x2(t)||d===Ft(x2(t))))return i}const h=As(l[n]||i[n],t)||As(l.appContext[n],t);return!h&&r?i:h}}function As(n,t){return n&&(n[t]||n[x2(t)]||n[Ft(x2(t))])}function b2(n,t,e,r){let l;const i=e&&e[r];if(Q(n)||C1(n)){l=new Array(n.length);for(let h=0,d=n.length;h<d;h++)l[h]=t(n[h],h,void 0,i&&i[h])}else if(typeof n=="number"){l=new Array(n);for(let h=0;h<n;h++)l[h]=t(h+1,h,void 0,i&&i[h])}else if(F1(n))if(n[Symbol.iterator])l=Array.from(n,(h,d)=>t(h,d,void 0,i&&i[d]));else{const h=Object.keys(n);l=new Array(h.length);for(let d=0,u=h.length;d<u;d++){const w=h[d];l[d]=t(n[w],w,d,i&&i[d])}}else l=[];return e&&(e[r]=l),l}function Gt(n,t,e={},r,l){if(J1.isCE||J1.parent&&un(J1.parent)&&J1.parent.isCE)return g1("slot",t==="default"?null:{name:t},r&&r());let i=n[t];i&&i._c&&(i._d=!1),o();const h=i&&q3(i(e)),d=w2(H1,{key:e.key||`_${t}`},h||(r?r():[]),h&&n._===1?64:-2);return!l&&d.scopeId&&(d.slotScopeIds=[d.scopeId+"-s"]),i&&i._c&&(i._d=!0),d}function q3(n){return n.some(t=>At(t)?!(t.type===e2||t.type===H1&&!q3(t.children)):!0)?n:null}const Le=n=>n?t0(n)?Ut(n)||n.proxy:Le(n.parent):null,Vt=K1(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Le(n.parent),$root:n=>Le(n.root),$emit:n=>n.emit,$options:n=>N3(n),$forceUpdate:n=>n.f||(n.f=()=>ss(n.update)),$nextTick:n=>n.n||(n.n=es.bind(n.proxy)),$watch:n=>vc.bind(n)}),yc={get({_:n},t){const{ctx:e,setupState:r,data:l,props:i,accessCache:h,type:d,appContext:u}=n;let w;if(t[0]!=="$"){const g=h[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return l[t];case 4:return e[t];case 3:return i[t]}else{if(r!==A1&&m1(r,t))return h[t]=1,r[t];if(l!==A1&&m1(l,t))return h[t]=2,l[t];if((w=n.propsOptions[0])&&m1(w,t))return h[t]=3,i[t];if(e!==A1&&m1(e,t))return h[t]=4,e[t];He&&(h[t]=0)}}const v=Vt[t];let k,_;if(v)return t==="$attrs"&&s2(n,"get",t),v(n);if((k=d.__cssModules)&&(k=k[t]))return k;if(e!==A1&&m1(e,t))return h[t]=4,e[t];if(_=u.config.globalProperties,m1(_,t))return _[t]},set({_:n},t,e){const{data:r,setupState:l,ctx:i}=n;return l!==A1&&m1(l,t)?(l[t]=e,!0):r!==A1&&m1(r,t)?(r[t]=e,!0):m1(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(i[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:r,appContext:l,propsOptions:i}},h){let d;return!!e[h]||n!==A1&&m1(n,h)||t!==A1&&m1(t,h)||(d=i[0])&&m1(d,h)||m1(r,h)||m1(Vt,h)||m1(l.config.globalProperties,h)},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:m1(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};let He=!0;function Lc(n){const t=N3(n),e=n.proxy,r=n.ctx;He=!1,t.beforeCreate&&Rs(t.beforeCreate,n,"bc");const{data:l,computed:i,methods:h,watch:d,provide:u,inject:w,created:v,beforeMount:k,mounted:_,beforeUpdate:g,updated:x,activated:C,deactivated:b,beforeDestroy:f,beforeUnmount:M,destroyed:L,unmounted:B,render:S,renderTracked:I,renderTriggered:W,errorCaptured:P,serverPrefetch:J,expose:X,inheritAttrs:i1,components:D,directives:p1,filters:U}=t;if(w&&Hc(w,r,null,n.appContext.config.unwrapInjectedRef),h)for(const b1 in h){const B1=h[b1];u1(B1)&&(r[b1]=B1.bind(e))}if(l){const b1=l.call(e,e);F1(b1)&&(n.data=N2(b1))}if(He=!0,i)for(const b1 in i){const B1=i[b1],G=u1(B1)?B1.bind(e,e):u1(B1.get)?B1.get.bind(e,e):h2,o1=!u1(B1)&&u1(B1.set)?B1.set.bind(e):h2,a1=n1({get:G,set:o1});Object.defineProperty(r,b1,{enumerable:!0,configurable:!0,get:()=>a1.value,set:L1=>a1.value=L1})}if(d)for(const b1 in d)G3(d[b1],r,e,b1);if(u){const b1=u1(u)?u.call(e):u;Reflect.ownKeys(b1).forEach(B1=>{d2(B1,b1[B1])})}v&&Rs(v,n,"c");function k1(b1,B1){Q(B1)?B1.forEach(G=>b1(G.bind(e))):B1&&b1(B1.bind(e))}if(k1(fc,k),k1(Y1,_),k1($c,g),k1(Mc,x),k1(kc,C),k1(mc,b),k1(Bc,P),k1(bc,I),k1(zc,W),k1(lt,M),k1(os,B),k1(Cc,J),Q(X))if(X.length){const b1=n.exposed||(n.exposed={});X.forEach(B1=>{Object.defineProperty(b1,B1,{get:()=>e[B1],set:G=>e[B1]=G})})}else n.exposed||(n.exposed={});S&&n.render===h2&&(n.render=S),i1!=null&&(n.inheritAttrs=i1),D&&(n.components=D),p1&&(n.directives=p1)}function Hc(n,t,e=h2,r=!1){Q(n)&&(n=Ve(n));for(const l in n){const i=n[l];let h;F1(i)?"default"in i?h=D1(i.from||l,i.default,!0):h=D1(i.from||l):h=D1(i),U1(h)&&r?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>h.value,set:d=>h.value=d}):t[l]=h}}function Rs(n,t,e){a2(Q(n)?n.map(r=>r.bind(t.proxy)):n.bind(t.proxy),t,e)}function G3(n,t,e,r){const l=r.includes(".")?P3(e,r):()=>e[r];if(C1(n)){const i=t[n];u1(i)&&W1(l,i)}else if(u1(n))W1(l,n.bind(e));else if(F1(n))if(Q(n))n.forEach(i=>G3(i,t,e,r));else{const i=u1(n.handler)?n.handler.bind(e):t[n.handler];u1(i)&&W1(l,i,n)}}function N3(n){const t=n.type,{mixins:e,extends:r}=t,{mixins:l,optionsCache:i,config:{optionMergeStrategies:h}}=n.appContext,d=i.get(t);let u;return d?u=d:!l.length&&!e&&!r?u=t:(u={},l.length&&l.forEach(w=>jt(u,w,h,!0)),jt(u,t,h)),i.set(t,u),u}function jt(n,t,e,r=!1){const{mixins:l,extends:i}=t;i&&jt(n,i,e,!0),l&&l.forEach(h=>jt(n,h,e,!0));for(const h in t)if(!(r&&h==="expose")){const d=Vc[h]||e&&e[h];n[h]=d?d(n[h],t[h]):t[h]}return n}const Vc={data:Ps,props:Y2,emits:Y2,methods:Y2,computed:Y2,beforeCreate:Z1,created:Z1,beforeMount:Z1,mounted:Z1,beforeUpdate:Z1,updated:Z1,beforeDestroy:Z1,beforeUnmount:Z1,destroyed:Z1,unmounted:Z1,activated:Z1,deactivated:Z1,errorCaptured:Z1,serverPrefetch:Z1,components:Y2,directives:Y2,watch:Sc,provide:Ps,inject:jc};function Ps(n,t){return t?n?function(){return K1(u1(n)?n.call(this,this):n,u1(t)?t.call(this,this):t)}:t:n}function jc(n,t){return Y2(Ve(n),Ve(t))}function Ve(n){if(Q(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Z1(n,t){return n?[...new Set([].concat(n,t))]:t}function Y2(n,t){return n?K1(K1(Object.create(null),n),t):t}function Sc(n,t){if(!n)return t;if(!t)return n;const e=K1(Object.create(null),n);for(const r in t)e[r]=Z1(n[r],t[r]);return e}function Ac(n,t,e,r=!1){const l={},i={};Bt(i,Nt,1),n.propsDefaults=Object.create(null),U3(n,t,l,i);for(const h in n.propsOptions[0])h in l||(l[h]=void 0);e?n.props=r?l:Y4(l):n.type.props?n.props=l:n.props=i,n.attrs=i}function Rc(n,t,e,r){const{props:l,attrs:i,vnode:{patchFlag:h}}=n,d=z1(l),[u]=n.propsOptions;let w=!1;if((r||h>0)&&!(h&16)){if(h&8){const v=n.vnode.dynamicProps;for(let k=0;k<v.length;k++){let _=v[k];if(Ot(n.emitsOptions,_))continue;const g=t[_];if(u)if(m1(i,_))g!==i[_]&&(i[_]=g,w=!0);else{const x=x2(_);l[x]=je(u,d,x,g,n,!1)}else g!==i[_]&&(i[_]=g,w=!0)}}}else{U3(n,t,l,i)&&(w=!0);let v;for(const k in d)(!t||!m1(t,k)&&((v=xn(k))===k||!m1(t,v)))&&(u?e&&(e[k]!==void 0||e[v]!==void 0)&&(l[k]=je(u,d,k,void 0,n,!0)):delete l[k]);if(i!==d)for(const k in i)(!t||!m1(t,k)&&!0)&&(delete i[k],w=!0)}w&&B2(n,"set","$attrs")}function U3(n,t,e,r){const[l,i]=n.propsOptions;let h=!1,d;if(t)for(let u in t){if(Tn(u))continue;const w=t[u];let v;l&&m1(l,v=x2(u))?!i||!i.includes(v)?e[v]=w:(d||(d={}))[v]=w:Ot(n.emitsOptions,u)||(!(u in r)||w!==r[u])&&(r[u]=w,h=!0)}if(i){const u=z1(e),w=d||A1;for(let v=0;v<i.length;v++){const k=i[v];e[k]=je(l,u,k,w[k],n,!m1(w,k))}}return h}function je(n,t,e,r,l,i){const h=n[e];if(h!=null){const d=m1(h,"default");if(d&&r===void 0){const u=h.default;if(h.type!==Function&&u1(u)){const{propsDefaults:w}=l;e in w?r=w[e]:(wn(l),r=w[e]=u.call(null,t),en())}else r=u}h[0]&&(i&&!d?r=!1:h[1]&&(r===""||r===xn(e))&&(r=!0))}return r}function W3(n,t,e=!1){const r=t.propsCache,l=r.get(n);if(l)return l;const i=n.props,h={},d=[];let u=!1;if(!u1(n)){const v=k=>{u=!0;const[_,g]=W3(k,t,!0);K1(h,_),g&&d.push(...g)};!e&&t.mixins.length&&t.mixins.forEach(v),n.extends&&v(n.extends),n.mixins&&n.mixins.forEach(v)}if(!i&&!u)return r.set(n,pn),pn;if(Q(i))for(let v=0;v<i.length;v++){const k=x2(i[v]);Ts(k)&&(h[k]=A1)}else if(i)for(const v in i){const k=x2(v);if(Ts(k)){const _=i[v],g=h[k]=Q(_)||u1(_)?{type:_}:_;if(g){const x=Es(Boolean,g.type),C=Es(String,g.type);g[0]=x>-1,g[1]=C<0||x<C,(x>-1||m1(g,"default"))&&d.push(k)}}}const w=[h,d];return r.set(n,w),w}function Ts(n){return n[0]!=="$"}function Ds(n){const t=n&&n.toString().match(/^\s*function (\w+)/);return t?t[1]:n===null?"null":""}function Fs(n,t){return Ds(n)===Ds(t)}function Es(n,t){return Q(t)?t.findIndex(e=>Fs(e,n)):u1(t)&&Fs(t,n)?0:-1}const K3=n=>n[0]==="_"||n==="$stable",as=n=>Q(n)?n.map(l2):[l2(n)],Pc=(n,t,e)=>{if(t._n)return t;const r=ic((...l)=>as(t(...l)),e);return r._c=!1,r},J3=(n,t,e)=>{const r=n._ctx;for(const l in n){if(K3(l))continue;const i=n[l];if(u1(i))t[l]=Pc(l,i,r);else if(i!=null){const h=as(i);t[l]=()=>h}}},Y3=(n,t)=>{const e=as(t);n.slots.default=()=>e},Tc=(n,t)=>{if(n.vnode.shapeFlag&32){const e=t._;e?(n.slots=z1(t),Bt(t,"_",e)):J3(t,n.slots={})}else n.slots={},t&&Y3(n,t);Bt(n.slots,Nt,1)},Dc=(n,t,e)=>{const{vnode:r,slots:l}=n;let i=!0,h=A1;if(r.shapeFlag&32){const d=t._;d?e&&d===1?i=!1:(K1(l,t),!e&&d===1&&delete l._):(i=!t.$stable,J3(t,l)),h=t}else t&&(Y3(n,t),h={default:1});if(i)for(const d in l)!K3(d)&&!(d in h)&&delete l[d]};function Z3(){return{app:null,config:{isNativeTag:w4,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fc=0;function Ec(n,t){return function(r,l=null){u1(r)||(r=Object.assign({},r)),l!=null&&!F1(l)&&(l=null);const i=Z3(),h=new Set;let d=!1;const u=i.app={_uid:Fc++,_component:r,_props:l,_container:null,_context:i,_instance:null,version:aa,get config(){return i.config},set config(w){},use(w,...v){return h.has(w)||(w&&u1(w.install)?(h.add(w),w.install(u,...v)):u1(w)&&(h.add(w),w(u,...v))),u},mixin(w){return i.mixins.includes(w)||i.mixins.push(w),u},component(w,v){return v?(i.components[w]=v,u):i.components[w]},directive(w,v){return v?(i.directives[w]=v,u):i.directives[w]},mount(w,v,k){if(!d){const _=g1(r,l);return _.appContext=i,v&&t?t(_,w):n(_,w,k),d=!0,u._container=w,w.__vue_app__=u,Ut(_.component)||_.component.proxy}},unmount(){d&&(n(null,u._container),delete u._container.__vue_app__)},provide(w,v){return i.provides[w]=v,u}};return u}}function St(n,t,e,r,l=!1){if(Q(n)){n.forEach((_,g)=>St(_,t&&(Q(t)?t[g]:t),e,r,l));return}if(un(r)&&!l)return;const i=r.shapeFlag&4?Ut(r.component)||r.component.proxy:r.el,h=l?null:i,{i:d,r:u}=n,w=t&&t.r,v=d.refs===A1?d.refs={}:d.refs,k=d.setupState;if(w!=null&&w!==u&&(C1(w)?(v[w]=null,m1(k,w)&&(k[w]=null)):U1(w)&&(w.value=null)),u1(u))I2(u,d,12,[h,v]);else{const _=C1(u),g=U1(u);if(_||g){const x=()=>{if(n.f){const C=_?v[u]:u.value;l?Q(C)&&Ue(C,i):Q(C)?C.includes(i)||C.push(i):_?(v[u]=[i],m1(k,u)&&(k[u]=v[u])):(u.value=[i],n.k&&(v[n.k]=u.value))}else _?(v[u]=h,m1(k,u)&&(k[u]=h)):g&&(u.value=h,n.k&&(v[n.k]=h))};h?(x.id=-1,Q1(x,e)):x()}}}let j2=!1;const _t=n=>/svg/.test(n.namespaceURI)&&n.tagName!=="foreignObject",gt=n=>n.nodeType===8;function Ic(n){const{mt:t,p:e,o:{patchProp:r,createText:l,nextSibling:i,parentNode:h,remove:d,insert:u,createComment:w}}=n,v=(f,M)=>{if(!M.hasChildNodes()){e(null,f,M),Lt(),M._vnode=f;return}j2=!1,k(M.firstChild,f,null,null,null),Lt(),M._vnode=f,j2&&console.error("Hydration completed but contains mismatches.")},k=(f,M,L,B,S,I=!1)=>{const W=gt(f)&&f.data==="[",P=()=>C(f,M,L,B,S,W),{type:J,ref:X,shapeFlag:i1,patchFlag:D}=M,p1=f.nodeType;M.el=f,D===-2&&(I=!1,M.dynamicChildren=null);let U=null;switch(J){case Qn:p1!==3?M.children===""?(u(M.el=l(""),h(f),f),U=f):U=P():(f.data!==M.children&&(j2=!0,f.data=M.children),U=i(f));break;case e2:p1!==8||W?U=P():U=i(f);break;case En:if(p1!==1&&p1!==3)U=P();else{U=f;const I1=!M.children.length;for(let k1=0;k1<M.staticCount;k1++)I1&&(M.children+=U.nodeType===1?U.outerHTML:U.data),k1===M.staticCount-1&&(M.anchor=U),U=i(U);return U}break;case H1:W?U=x(f,M,L,B,S,I):U=P();break;default:if(i1&1)p1!==1||M.type.toLowerCase()!==f.tagName.toLowerCase()?U=P():U=_(f,M,L,B,S,I);else if(i1&6){M.slotScopeIds=S;const I1=h(f);if(t(M,I1,null,L,B,_t(I1),I),U=W?b(f):i(f),U&&gt(U)&&U.data==="teleport end"&&(U=i(U)),un(M)){let k1;W?(k1=g1(H1),k1.anchor=U?U.previousSibling:I1.lastChild):k1=f.nodeType===3?u2(""):g1("div"),k1.el=f,M.component.subTree=k1}}else i1&64?p1!==8?U=P():U=M.type.hydrate(f,M,L,B,S,I,n,g):i1&128&&(U=M.type.hydrate(f,M,L,B,_t(h(f)),S,I,n,k))}return X!=null&&St(X,null,B,M),U},_=(f,M,L,B,S,I)=>{I=I||!!M.dynamicChildren;const{type:W,props:P,patchFlag:J,shapeFlag:X,dirs:i1}=M,D=W==="input"&&i1||W==="option";if(D||J!==-1){if(i1&&k2(M,null,L,"created"),P)if(D||!I||J&48)for(const U in P)(D&&U.endsWith("value")||st(U)&&!Tn(U))&&r(f,U,null,P[U],!1,void 0,L);else P.onClick&&r(f,"onClick",null,P.onClick,!1,void 0,L);let p1;if((p1=P&&P.onVnodeBeforeMount)&&c2(p1,L,M),i1&&k2(M,null,L,"beforeMount"),((p1=P&&P.onVnodeMounted)||i1)&&A3(()=>{p1&&c2(p1,L,M),i1&&k2(M,null,L,"mounted")},B),X&16&&!(P&&(P.innerHTML||P.textContent))){let U=g(f.firstChild,M,f,L,B,S,I);for(;U;){j2=!0;const I1=U;U=U.nextSibling,d(I1)}}else X&8&&f.textContent!==M.children&&(j2=!0,f.textContent=M.children)}return f.nextSibling},g=(f,M,L,B,S,I,W)=>{W=W||!!M.dynamicChildren;const P=M.children,J=P.length;for(let X=0;X<J;X++){const i1=W?P[X]:P[X]=l2(P[X]);if(f)f=k(f,i1,B,S,I,W);else{if(i1.type===Qn&&!i1.children)continue;j2=!0,e(null,i1,L,null,B,S,_t(L),I)}}return f},x=(f,M,L,B,S,I)=>{const{slotScopeIds:W}=M;W&&(S=S?S.concat(W):W);const P=h(f),J=g(i(f),M,P,L,B,S,I);return J&&gt(J)&&J.data==="]"?i(M.anchor=J):(j2=!0,u(M.anchor=w("]"),P,J),J)},C=(f,M,L,B,S,I)=>{if(j2=!0,M.el=null,I){const J=b(f);for(;;){const X=i(f);if(X&&X!==J)d(X);else break}}const W=i(f),P=h(f);return d(f),e(null,M,P,W,L,B,_t(P),S),W},b=f=>{let M=0;for(;f;)if(f=i(f),f&&gt(f)&&(f.data==="["&&M++,f.data==="]")){if(M===0)return i(f);M--}return f};return[v,k]}const Q1=A3;function Oc(n){return qc(n,Ic)}function qc(n,t){const e=x4();e.__VUE__=!0;const{insert:r,remove:l,patchProp:i,createElement:h,createText:d,createComment:u,setText:w,setElementText:v,parentNode:k,nextSibling:_,setScopeId:g=h2,cloneNode:x,insertStaticContent:C}=n,b=(m,$,z,V=null,H=null,T=null,O=!1,R=null,E=!!$.dynamicChildren)=>{if(m===$)return;m&&!Q2(m,$)&&(V=K(m),M1(m,H,T,!0),m=null),$.patchFlag===-2&&(E=!1,$.dynamicChildren=null);const{type:j,ref:t1,shapeFlag:Z}=$;switch(j){case Qn:f(m,$,z,V);break;case e2:M(m,$,z,V);break;case En:m==null&&L($,z,V,O);break;case H1:p1(m,$,z,V,H,T,O,R,E);break;default:Z&1?I(m,$,z,V,H,T,O,R,E):Z&6?U(m,$,z,V,H,T,O,R,E):(Z&64||Z&128)&&j.process(m,$,z,V,H,T,O,R,E,_1)}t1!=null&&H&&St(t1,m&&m.ref,T,$||m,!$)},f=(m,$,z,V)=>{if(m==null)r($.el=d($.children),z,V);else{const H=$.el=m.el;$.children!==m.children&&w(H,$.children)}},M=(m,$,z,V)=>{m==null?r($.el=u($.children||""),z,V):$.el=m.el},L=(m,$,z,V)=>{[m.el,m.anchor]=C(m.children,$,z,V,m.el,m.anchor)},B=({el:m,anchor:$},z,V)=>{let H;for(;m&&m!==$;)H=_(m),r(m,z,V),m=H;r($,z,V)},S=({el:m,anchor:$})=>{let z;for(;m&&m!==$;)z=_(m),l(m),m=z;l($)},I=(m,$,z,V,H,T,O,R,E)=>{O=O||$.type==="svg",m==null?W($,z,V,H,T,O,R,E):X(m,$,H,T,O,R,E)},W=(m,$,z,V,H,T,O,R)=>{let E,j;const{type:t1,props:Z,shapeFlag:e1,transition:r1,patchFlag:x1,dirs:V1}=m;if(m.el&&x!==void 0&&x1===-1)E=m.el=x(m.el);else{if(E=m.el=h(m.type,T,Z&&Z.is,Z),e1&8?v(E,m.children):e1&16&&J(m.children,E,null,V,H,T&&t1!=="foreignObject",O,R),V1&&k2(m,null,V,"created"),Z){for(const P1 in Z)P1!=="value"&&!Tn(P1)&&i(E,P1,null,Z[P1],T,m.children,V,H,A);"value"in Z&&i(E,"value",null,Z.value),(j=Z.onVnodeBeforeMount)&&c2(j,V,m)}P(E,m,m.scopeId,O,V)}V1&&k2(m,null,V,"beforeMount");const j1=(!H||H&&!H.pendingBranch)&&r1&&!r1.persisted;j1&&r1.beforeEnter(E),r(E,$,z),((j=Z&&Z.onVnodeMounted)||j1||V1)&&Q1(()=>{j&&c2(j,V,m),j1&&r1.enter(E),V1&&k2(m,null,V,"mounted")},H)},P=(m,$,z,V,H)=>{if(z&&g(m,z),V)for(let T=0;T<V.length;T++)g(m,V[T]);if(H){let T=H.subTree;if($===T){const O=H.vnode;P(m,O,O.scopeId,O.slotScopeIds,H.parent)}}},J=(m,$,z,V,H,T,O,R,E=0)=>{for(let j=E;j<m.length;j++){const t1=m[j]=R?T2(m[j]):l2(m[j]);b(null,t1,$,z,V,H,T,O,R)}},X=(m,$,z,V,H,T,O)=>{const R=$.el=m.el;let{patchFlag:E,dynamicChildren:j,dirs:t1}=$;E|=m.patchFlag&16;const Z=m.props||A1,e1=$.props||A1;let r1;z&&U2(z,!1),(r1=e1.onVnodeBeforeUpdate)&&c2(r1,z,$,m),t1&&k2($,m,z,"beforeUpdate"),z&&U2(z,!0);const x1=H&&$.type!=="foreignObject";if(j?i1(m.dynamicChildren,j,R,z,V,x1,T):O||G(m,$,R,null,z,V,x1,T,!1),E>0){if(E&16)D(R,$,Z,e1,z,V,H);else if(E&2&&Z.class!==e1.class&&i(R,"class",null,e1.class,H),E&4&&i(R,"style",Z.style,e1.style,H),E&8){const V1=$.dynamicProps;for(let j1=0;j1<V1.length;j1++){const P1=V1[j1],r2=Z[P1],on=e1[P1];(on!==r2||P1==="value")&&i(R,P1,r2,on,H,m.children,z,V,A)}}E&1&&m.children!==$.children&&v(R,$.children)}else!O&&j==null&&D(R,$,Z,e1,z,V,H);((r1=e1.onVnodeUpdated)||t1)&&Q1(()=>{r1&&c2(r1,z,$,m),t1&&k2($,m,z,"updated")},V)},i1=(m,$,z,V,H,T,O)=>{for(let R=0;R<$.length;R++){const E=m[R],j=$[R],t1=E.el&&(E.type===H1||!Q2(E,j)||E.shapeFlag&70)?k(E.el):z;b(E,j,t1,null,V,H,T,O,!0)}},D=(m,$,z,V,H,T,O)=>{if(z!==V){for(const R in V){if(Tn(R))continue;const E=V[R],j=z[R];E!==j&&R!=="value"&&i(m,R,j,E,O,$.children,H,T,A)}if(z!==A1)for(const R in z)!Tn(R)&&!(R in V)&&i(m,R,z[R],null,O,$.children,H,T,A);"value"in V&&i(m,"value",z.value,V.value)}},p1=(m,$,z,V,H,T,O,R,E)=>{const j=$.el=m?m.el:d(""),t1=$.anchor=m?m.anchor:d("");let{patchFlag:Z,dynamicChildren:e1,slotScopeIds:r1}=$;r1&&(R=R?R.concat(r1):r1),m==null?(r(j,z,V),r(t1,z,V),J($.children,z,t1,H,T,O,R,E)):Z>0&&Z&64&&e1&&m.dynamicChildren?(i1(m.dynamicChildren,e1,z,H,T,O,R),($.key!=null||H&&$===H.subTree)&&Q3(m,$,!0)):G(m,$,z,t1,H,T,O,R,E)},U=(m,$,z,V,H,T,O,R,E)=>{$.slotScopeIds=R,m==null?$.shapeFlag&512?H.ctx.activate($,z,V,O,E):I1($,z,V,H,T,O,E):k1(m,$,E)},I1=(m,$,z,V,H,T,O)=>{const R=m.component=Qc(m,V,H);if(rt(m)&&(R.ctx.renderer=_1),na(R),R.asyncDep){if(H&&H.registerDep(R,b1),!m.el){const E=R.subTree=g1(e2);M(null,E,$,z)}return}b1(R,m,$,z,H,T,O)},k1=(m,$,z)=>{const V=$.component=m.component;if(dc(m,$,z))if(V.asyncDep&&!V.asyncResolved){B1(V,$,z);return}else V.next=$,cc(V.update),V.update();else $.el=m.el,V.vnode=$},b1=(m,$,z,V,H,T,O)=>{const R=()=>{if(m.isMounted){let{next:t1,bu:Z,u:e1,parent:r1,vnode:x1}=m,V1=t1,j1;U2(m,!1),t1?(t1.el=x1.el,B1(m,t1,O)):t1=x1,Z&&Ct(Z),(j1=t1.props&&t1.props.onVnodeBeforeUpdate)&&c2(j1,r1,t1,x1),U2(m,!0);const P1=Xt(m),r2=m.subTree;m.subTree=P1,b(r2,P1,k(r2.el),K(r2),m,H,T),t1.el=P1.el,V1===null&&uc(m,P1.el),e1&&Q1(e1,H),(j1=t1.props&&t1.props.onVnodeUpdated)&&Q1(()=>c2(j1,r1,t1,x1),H)}else{let t1;const{el:Z,props:e1}=$,{bm:r1,m:x1,parent:V1}=m,j1=un($);if(U2(m,!1),r1&&Ct(r1),!j1&&(t1=e1&&e1.onVnodeBeforeMount)&&c2(t1,V1,$),U2(m,!0),Z&&h1){const P1=()=>{m.subTree=Xt(m),h1(Z,m.subTree,m,H,null)};j1?$.type.__asyncLoader().then(()=>!m.isUnmounted&&P1()):P1()}else{const P1=m.subTree=Xt(m);b(null,P1,z,V,m,H,T),$.el=P1.el}if(x1&&Q1(x1,H),!j1&&(t1=e1&&e1.onVnodeMounted)){const P1=$;Q1(()=>c2(t1,V1,P1),H)}($.shapeFlag&256||V1&&un(V1.vnode)&&V1.vnode.shapeFlag&256)&&m.a&&Q1(m.a,H),m.isMounted=!0,$=z=V=null}},E=m.effect=new Je(R,()=>ss(j),m.scope),j=m.update=()=>E.run();j.id=m.uid,U2(m,!0),j()},B1=(m,$,z)=>{$.component=m;const V=m.vnode.props;m.vnode=$,m.next=null,Rc(m,$.props,V,z),Dc(m,$.children,z),fn(),It(void 0,m.update),$n()},G=(m,$,z,V,H,T,O,R,E=!1)=>{const j=m&&m.children,t1=m?m.shapeFlag:0,Z=$.children,{patchFlag:e1,shapeFlag:r1}=$;if(e1>0){if(e1&128){a1(j,Z,z,V,H,T,O,R,E);return}else if(e1&256){o1(j,Z,z,V,H,T,O,R,E);return}}r1&8?(t1&16&&A(j,H,T),Z!==j&&v(z,Z)):t1&16?r1&16?a1(j,Z,z,V,H,T,O,R,E):A(j,H,T,!0):(t1&8&&v(z,""),r1&16&&J(Z,z,V,H,T,O,R,E))},o1=(m,$,z,V,H,T,O,R,E)=>{m=m||pn,$=$||pn;const j=m.length,t1=$.length,Z=Math.min(j,t1);let e1;for(e1=0;e1<Z;e1++){const r1=$[e1]=E?T2($[e1]):l2($[e1]);b(m[e1],r1,z,null,H,T,O,R,E)}j>t1?A(m,H,T,!0,!1,Z):J($,z,V,H,T,O,R,E,Z)},a1=(m,$,z,V,H,T,O,R,E)=>{let j=0;const t1=$.length;let Z=m.length-1,e1=t1-1;for(;j<=Z&&j<=e1;){const r1=m[j],x1=$[j]=E?T2($[j]):l2($[j]);if(Q2(r1,x1))b(r1,x1,z,null,H,T,O,R,E);else break;j++}for(;j<=Z&&j<=e1;){const r1=m[Z],x1=$[e1]=E?T2($[e1]):l2($[e1]);if(Q2(r1,x1))b(r1,x1,z,null,H,T,O,R,E);else break;Z--,e1--}if(j>Z){if(j<=e1){const r1=e1+1,x1=r1<t1?$[r1].el:V;for(;j<=e1;)b(null,$[j]=E?T2($[j]):l2($[j]),z,x1,H,T,O,R,E),j++}}else if(j>e1)for(;j<=Z;)M1(m[j],H,T,!0),j++;else{const r1=j,x1=j,V1=new Map;for(j=x1;j<=e1;j++){const X1=$[j]=E?T2($[j]):l2($[j]);X1.key!=null&&V1.set(X1.key,j)}let j1,P1=0;const r2=e1-x1+1;let on=!1,ks=0;const Ln=new Array(r2);for(j=0;j<r2;j++)Ln[j]=0;for(j=r1;j<=Z;j++){const X1=m[j];if(P1>=r2){M1(X1,H,T,!0);continue}let g2;if(X1.key!=null)g2=V1.get(X1.key);else for(j1=x1;j1<=e1;j1++)if(Ln[j1-x1]===0&&Q2(X1,$[j1])){g2=j1;break}g2===void 0?M1(X1,H,T,!0):(Ln[g2-x1]=j+1,g2>=ks?ks=g2:on=!0,b(X1,$[g2],z,null,H,T,O,R,E),P1++)}const ms=on?Gc(Ln):pn;for(j1=ms.length-1,j=r2-1;j>=0;j--){const X1=x1+j,g2=$[X1],xs=X1+1<t1?$[X1+1].el:V;Ln[j]===0?b(null,g2,z,xs,H,T,O,R,E):on&&(j1<0||j!==ms[j1]?L1(g2,z,xs,2):j1--)}}},L1=(m,$,z,V,H=null)=>{const{el:T,type:O,transition:R,children:E,shapeFlag:j}=m;if(j&6){L1(m.component.subTree,$,z,V);return}if(j&128){m.suspense.move($,z,V);return}if(j&64){O.move(m,$,z,_1);return}if(O===H1){r(T,$,z);for(let Z=0;Z<E.length;Z++)L1(E[Z],$,z,V);r(m.anchor,$,z);return}if(O===En){B(m,$,z);return}if(V!==2&&j&1&&R)if(V===0)R.beforeEnter(T),r(T,$,z),Q1(()=>R.enter(T),H);else{const{leave:Z,delayLeave:e1,afterLeave:r1}=R,x1=()=>r(T,$,z),V1=()=>{Z(T,()=>{x1(),r1&&r1()})};e1?e1(T,x1,V1):V1()}else r(T,$,z)},M1=(m,$,z,V=!1,H=!1)=>{const{type:T,props:O,ref:R,children:E,dynamicChildren:j,shapeFlag:t1,patchFlag:Z,dirs:e1}=m;if(R!=null&&St(R,null,z,m,!0),t1&256){$.ctx.deactivate(m);return}const r1=t1&1&&e1,x1=!un(m);let V1;if(x1&&(V1=O&&O.onVnodeBeforeUnmount)&&c2(V1,$,m),t1&6)F(m.component,z,V);else{if(t1&128){m.suspense.unmount(z,V);return}r1&&k2(m,null,$,"beforeUnmount"),t1&64?m.type.remove(m,$,z,H,_1,V):j&&(T!==H1||Z>0&&Z&64)?A(j,$,z,!1,!0):(T===H1&&Z&384||!H&&t1&16)&&A(E,$,z),V&&w1(m)}(x1&&(V1=O&&O.onVnodeUnmounted)||r1)&&Q1(()=>{V1&&c2(V1,$,m),r1&&k2(m,null,$,"unmounted")},z)},w1=m=>{const{type:$,el:z,anchor:V,transition:H}=m;if($===H1){y(z,V);return}if($===En){S(m);return}const T=()=>{l(z),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(m.shapeFlag&1&&H&&!H.persisted){const{leave:O,delayLeave:R}=H,E=()=>O(z,T);R?R(m.el,T,E):E()}else T()},y=(m,$)=>{let z;for(;m!==$;)z=_(m),l(m),m=z;l($)},F=(m,$,z)=>{const{bum:V,scope:H,update:T,subTree:O,um:R}=m;V&&Ct(V),H.stop(),T&&(T.active=!1,M1(O,m,$,z)),R&&Q1(R,$),Q1(()=>{m.isUnmounted=!0},$),$&&$.pendingBranch&&!$.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===$.pendingId&&($.deps--,$.deps===0&&$.resolve())},A=(m,$,z,V=!1,H=!1,T=0)=>{for(let O=T;O<m.length;O++)M1(m[O],$,z,V,H)},K=m=>m.shapeFlag&6?K(m.component.subTree):m.shapeFlag&128?m.suspense.next():_(m.anchor||m.el),$1=(m,$,z)=>{m==null?$._vnode&&M1($._vnode,null,null,!0):b($._vnode||null,m,$,null,null,null,z),Lt(),$._vnode=m},_1={p:b,um:M1,m:L1,r:w1,mt:I1,mc:J,pc:G,pbc:i1,n:K,o:n};let d1,h1;return t&&([d1,h1]=t(_1)),{render:$1,hydrate:d1,createApp:Ec($1,d1)}}function U2({effect:n,update:t},e){n.allowRecurse=t.allowRecurse=e}function Q3(n,t,e=!1){const r=n.children,l=t.children;if(Q(r)&&Q(l))for(let i=0;i<r.length;i++){const h=r[i];let d=l[i];d.shapeFlag&1&&!d.dynamicChildren&&((d.patchFlag<=0||d.patchFlag===32)&&(d=l[i]=T2(l[i]),d.el=h.el),e||Q3(h,d))}}function Gc(n){const t=n.slice(),e=[0];let r,l,i,h,d;const u=n.length;for(r=0;r<u;r++){const w=n[r];if(w!==0){if(l=e[e.length-1],n[l]<w){t[r]=l,e.push(r);continue}for(i=0,h=e.length-1;i<h;)d=i+h>>1,n[e[d]]<w?i=d+1:h=d;w<n[e[i]]&&(i>0&&(t[r]=e[i-1]),e[i]=r)}}for(i=e.length,h=e[i-1];i-- >0;)e[i]=h,h=t[h];return e}const Nc=n=>n.__isTeleport,H1=Symbol(void 0),Qn=Symbol(void 0),e2=Symbol(void 0),En=Symbol(void 0),In=[];let p2=null;function o(n=!1){In.push(p2=n?null:[])}function Uc(){In.pop(),p2=In[In.length-1]||null}let Xn=1;function Is(n){Xn+=n}function X3(n){return n.dynamicChildren=Xn>0?p2||pn:null,Uc(),Xn>0&&p2&&p2.push(n),n}function c(n,t,e,r,l,i){return X3(s(n,t,e,r,l,i,!0))}function w2(n,t,e,r,l){return X3(g1(n,t,e,r,l,!0))}function At(n){return n?n.__v_isVNode===!0:!1}function Q2(n,t){return n.type===t.type&&n.key===t.key}const Nt="__vInternal",n0=({key:n})=>n!=null?n:null,zt=({ref:n,ref_key:t,ref_for:e})=>n!=null?C1(n)||U1(n)||u1(n)?{i:J1,r:n,k:t,f:!!e}:n:null;function s(n,t=null,e=null,r=0,l=null,i=n===H1?0:1,h=!1,d=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&n0(t),ref:t&&zt(t),scopeId:S3,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:l,dynamicChildren:null,appContext:null};return d?(rs(u,e),i&128&&n.normalize(u)):e&&(u.shapeFlag|=C1(e)?8:16),Xn>0&&!h&&p2&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&p2.push(u),u}const g1=Wc;function Wc(n,t=null,e=null,r=0,l=null,i=!1){if((!n||n===I3)&&(n=e2),At(n)){const d=q2(n,t,!0);return e&&rs(d,e),Xn>0&&!i&&p2&&(d.shapeFlag&6?p2[p2.indexOf(n)]=d:p2.push(d)),d.patchFlag|=-2,d}if(ca(n)&&(n=n.__vccOpts),t){t=Kc(t);let{class:d,style:u}=t;d&&!C1(d)&&(t.class=G1(d)),F1(u)&&(f3(u)&&!Q(u)&&(u=K1({},u)),t.style=m2(u))}const h=C1(n)?1:wc(n)?128:Nc(n)?64:F1(n)?4:u1(n)?2:0;return s(n,t,e,r,l,h,i,!0)}function Kc(n){return n?f3(n)||Nt in n?K1({},n):n:null}function q2(n,t,e=!1){const{props:r,ref:l,patchFlag:i,children:h}=n,d=t?Jc(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:d,key:d&&n0(d),ref:t&&t.ref?e&&l?Q(l)?l.concat(zt(t)):[l,zt(t)]:zt(t):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:h,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==H1?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&q2(n.ssContent),ssFallback:n.ssFallback&&q2(n.ssFallback),el:n.el,anchor:n.anchor}}function u2(n=" ",t=0){return g1(Qn,null,n,t)}function p(n,t){const e=g1(En,null,n);return e.staticCount=t,e}function v1(n="",t=!1){return t?(o(),w2(e2,null,n)):g1(e2,null,n)}function l2(n){return n==null||typeof n=="boolean"?g1(e2):Q(n)?g1(H1,null,n.slice()):typeof n=="object"?T2(n):g1(Qn,null,String(n))}function T2(n){return n.el===null||n.memo?n:q2(n)}function rs(n,t){let e=0;const{shapeFlag:r}=n;if(t==null)t=null;else if(Q(t))e=16;else if(typeof t=="object")if(r&65){const l=t.default;l&&(l._c&&(l._d=!1),rs(n,l()),l._c&&(l._d=!0));return}else{e=32;const l=t._;!l&&!(Nt in t)?t._ctx=J1:l===3&&J1&&(J1.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else u1(t)?(t={default:t,_ctx:J1},e=32):(t=String(t),r&64?(e=16,t=[u2(t)]):e=8);n.children=t,n.shapeFlag|=e}function Jc(...n){const t={};for(let e=0;e<n.length;e++){const r=n[e];for(const l in r)if(l==="class")t.class!==r.class&&(t.class=G1([t.class,r.class]));else if(l==="style")t.style=m2([t.style,r.style]);else if(st(l)){const i=t[l],h=r[l];h&&i!==h&&!(Q(i)&&i.includes(h))&&(t[l]=i?[].concat(i,h):h)}else l!==""&&(t[l]=r[l])}return t}function c2(n,t,e,r=null){a2(n,t,7,[e,r])}const Yc=Z3();let Zc=0;function Qc(n,t,e){const r=n.type,l=(t?t.appContext:n.appContext)||Yc,i={uid:Zc++,vnode:n,type:r,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new f4(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:W3(r,l),emitsOptions:j3(r,l),emit:null,emitted:null,propsDefaults:A1,inheritAttrs:r.inheritAttrs,ctx:A1,data:A1,props:A1,attrs:A1,slots:A1,refs:A1,setupState:A1,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=lc.bind(null,i),n.ce&&n.ce(i),i}let O1=null;const Xc=()=>O1||J1,wn=n=>{O1=n,n.scope.on()},en=()=>{O1&&O1.scope.off(),O1=null};function t0(n){return n.vnode.shapeFlag&4}let vn=!1;function na(n,t=!1){vn=t;const{props:e,children:r}=n.vnode,l=t0(n);Ac(n,e,l,t),Tc(n,r);const i=l?ta(n,t):void 0;return vn=!1,i}function ta(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=$3(new Proxy(n.ctx,yc));const{setup:r}=e;if(r){const l=n.setupContext=r.length>1?sa(n):null;wn(n),fn();const i=I2(r,n,0,[n.props,l]);if($n(),en(),l3(i)){if(i.then(en,en),t)return i.then(h=>{Os(n,h,t)}).catch(h=>{at(h,n,0)});n.asyncDep=i}else Os(n,i,t)}else e0(n,t)}function Os(n,t,e){u1(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:F1(t)&&(n.setupState=B3(t)),e0(n,e)}let qs;function e0(n,t,e){const r=n.type;if(!n.render){if(!t&&qs&&!r.render){const l=r.template;if(l){const{isCustomElement:i,compilerOptions:h}=n.appContext.config,{delimiters:d,compilerOptions:u}=r,w=K1(K1({isCustomElement:i,delimiters:d},h),u);r.render=qs(l,w)}}n.render=r.render||h2}wn(n),fn(),Lc(n),$n(),en()}function ea(n){return new Proxy(n.attrs,{get(t,e){return s2(n,"get","$attrs"),t[e]}})}function sa(n){const t=r=>{n.exposed=r||{}};let e;return{get attrs(){return e||(e=ea(n))},slots:n.slots,emit:n.emit,expose:t}}function Ut(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(B3($3(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in Vt)return Vt[e](n)}}))}function oa(n,t=!0){return u1(n)?n.displayName||n.name:n.name||t&&n.__name}function ca(n){return u1(n)&&"__vccOpts"in n}const n1=(n,t)=>ec(n,t,vn);function q(n,t,e){const r=arguments.length;return r===2?F1(t)&&!Q(t)?At(t)?g1(n,null,[t]):g1(n,t):g1(n,null,t):(r>3?e=Array.prototype.slice.call(arguments,2):r===3&&At(e)&&(e=[e]),g1(n,t,e))}const aa="3.2.37",ra="http://www.w3.org/2000/svg",X2=typeof document!="undefined"?document:null,Gs=X2&&X2.createElement("template"),la={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,r)=>{const l=t?X2.createElementNS(ra,n):X2.createElement(n,e?{is:e}:void 0);return n==="select"&&r&&r.multiple!=null&&l.setAttribute("multiple",r.multiple),l},createText:n=>X2.createTextNode(n),createComment:n=>X2.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>X2.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},cloneNode(n){const t=n.cloneNode(!0);return"_value"in n&&(t._value=n._value),t},insertStaticContent(n,t,e,r,l,i){const h=e?e.previousSibling:t.lastChild;if(l&&(l===i||l.nextSibling))for(;t.insertBefore(l.cloneNode(!0),e),!(l===i||!(l=l.nextSibling)););else{Gs.innerHTML=r?`<svg>${n}</svg>`:n;const d=Gs.content;if(r){const u=d.firstChild;for(;u.firstChild;)d.appendChild(u.firstChild);d.removeChild(u)}t.insertBefore(d,e)}return[h?h.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}};function ia(n,t,e){const r=n._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}function pa(n,t,e){const r=n.style,l=C1(e);if(e&&!l){for(const i in e)Se(r,i,e[i]);if(t&&!C1(t))for(const i in t)e[i]==null&&Se(r,i,"")}else{const i=r.display;l?t!==e&&(r.cssText=e):t&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const Ns=/\s*!important$/;function Se(n,t,e){if(Q(e))e.forEach(r=>Se(n,t,r));else if(e==null&&(e=""),t.startsWith("--"))n.setProperty(t,e);else{const r=ha(n,t);Ns.test(e)?n.setProperty(xn(r),e.replace(Ns,""),"important"):n[r]=e}}const Us=["Webkit","Moz","ms"],ee={};function ha(n,t){const e=ee[t];if(e)return e;let r=x2(t);if(r!=="filter"&&r in n)return ee[t]=r;r=Ft(r);for(let l=0;l<Us.length;l++){const i=Us[l]+r;if(i in n)return ee[t]=i}return t}const Ws="http://www.w3.org/1999/xlink";function da(n,t,e,r,l){if(r&&t.startsWith("xlink:"))e==null?n.removeAttributeNS(Ws,t.slice(6,t.length)):n.setAttributeNS(Ws,t,e);else{const i=i4(t);e==null||i&&!a3(e)?n.removeAttribute(t):n.setAttribute(t,i?"":e)}}function ua(n,t,e,r,l,i,h){if(t==="innerHTML"||t==="textContent"){r&&h(r,l,i),n[t]=e==null?"":e;return}if(t==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=e;const u=e==null?"":e;(n.value!==u||n.tagName==="OPTION")&&(n.value=u),e==null&&n.removeAttribute(t);return}let d=!1;if(e===""||e==null){const u=typeof n[t];u==="boolean"?e=a3(e):e==null&&u==="string"?(e="",d=!0):u==="number"&&(e=0,d=!0)}try{n[t]=e}catch{}d&&n.removeAttribute(t)}const[s0,wa]=(()=>{let n=Date.now,t=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(n=performance.now.bind(performance));const e=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(e&&Number(e[1])<=53)}return[n,t]})();let Ae=0;const va=Promise.resolve(),_a=()=>{Ae=0},ga=()=>Ae||(va.then(_a),Ae=s0());function C2(n,t,e,r){n.addEventListener(t,e,r)}function ka(n,t,e,r){n.removeEventListener(t,e,r)}function ma(n,t,e,r,l=null){const i=n._vei||(n._vei={}),h=i[t];if(r&&h)h.value=r;else{const[d,u]=xa(t);if(r){const w=i[t]=fa(r,l);C2(n,d,w,u)}else h&&(ka(n,d,h,u),i[t]=void 0)}}const Ks=/(?:Once|Passive|Capture)$/;function xa(n){let t;if(Ks.test(n)){t={};let e;for(;e=n.match(Ks);)n=n.slice(0,n.length-e[0].length),t[e[0].toLowerCase()]=!0}return[xn(n.slice(2)),t]}function fa(n,t){const e=r=>{const l=r.timeStamp||s0();(wa||l>=e.attached-1)&&a2($a(r,e.value),t,5,[r])};return e.value=n,e.attached=ga(),e}function $a(n,t){if(Q(t)){const e=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{e.call(n),n._stopped=!0},t.map(r=>l=>!l._stopped&&r&&r(l))}else return t}const Js=/^on[a-z]/,Ma=(n,t,e,r,l=!1,i,h,d,u)=>{t==="class"?ia(n,r,l):t==="style"?pa(n,e,r):st(t)?Ne(t)||ma(n,t,e,r,h):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ca(n,t,r,l))?ua(n,t,r,i,h,d,u):(t==="true-value"?n._trueValue=r:t==="false-value"&&(n._falseValue=r),da(n,t,r,l))};function Ca(n,t,e,r){return r?!!(t==="innerHTML"||t==="textContent"||t in n&&Js.test(t)&&u1(e)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA"||Js.test(t)&&C1(e)?!1:t in n}const S2="transition",Hn="animation",ls=(n,{slots:t})=>q(T3,za(n),t);ls.displayName="Transition";const o0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ls.props=K1({},T3.props,o0);const W2=(n,t=[])=>{Q(n)?n.forEach(e=>e(...t)):n&&n(...t)},Ys=n=>n?Q(n)?n.some(t=>t.length>1):n.length>1:!1;function za(n){const t={};for(const D in n)D in o0||(t[D]=n[D]);if(n.css===!1)return t;const{name:e="v",type:r,duration:l,enterFromClass:i=`${e}-enter-from`,enterActiveClass:h=`${e}-enter-active`,enterToClass:d=`${e}-enter-to`,appearFromClass:u=i,appearActiveClass:w=h,appearToClass:v=d,leaveFromClass:k=`${e}-leave-from`,leaveActiveClass:_=`${e}-leave-active`,leaveToClass:g=`${e}-leave-to`}=n,x=ba(l),C=x&&x[0],b=x&&x[1],{onBeforeEnter:f,onEnter:M,onEnterCancelled:L,onLeave:B,onLeaveCancelled:S,onBeforeAppear:I=f,onAppear:W=M,onAppearCancelled:P=L}=t,J=(D,p1,U)=>{K2(D,p1?v:d),K2(D,p1?w:h),U&&U()},X=(D,p1)=>{D._isLeaving=!1,K2(D,k),K2(D,g),K2(D,_),p1&&p1()},i1=D=>(p1,U)=>{const I1=D?W:M,k1=()=>J(p1,D,U);W2(I1,[p1,k1]),Zs(()=>{K2(p1,D?u:i),A2(p1,D?v:d),Ys(I1)||Qs(p1,r,C,k1)})};return K1(t,{onBeforeEnter(D){W2(f,[D]),A2(D,i),A2(D,h)},onBeforeAppear(D){W2(I,[D]),A2(D,u),A2(D,w)},onEnter:i1(!1),onAppear:i1(!0),onLeave(D,p1){D._isLeaving=!0;const U=()=>X(D,p1);A2(D,k),La(),A2(D,_),Zs(()=>{!D._isLeaving||(K2(D,k),A2(D,g),Ys(B)||Qs(D,r,b,U))}),W2(B,[D,U])},onEnterCancelled(D){J(D,!1),W2(L,[D])},onAppearCancelled(D){J(D,!0),W2(P,[D])},onLeaveCancelled(D){X(D),W2(S,[D])}})}function ba(n){if(n==null)return null;if(F1(n))return[se(n.enter),se(n.leave)];{const t=se(n);return[t,t]}}function se(n){return Kn(n)}function A2(n,t){t.split(/\s+/).forEach(e=>e&&n.classList.add(e)),(n._vtc||(n._vtc=new Set)).add(t)}function K2(n,t){t.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const{_vtc:e}=n;e&&(e.delete(t),e.size||(n._vtc=void 0))}function Zs(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let Ba=0;function Qs(n,t,e,r){const l=n._endId=++Ba,i=()=>{l===n._endId&&r()};if(e)return setTimeout(i,e);const{type:h,timeout:d,propCount:u}=ya(n,t);if(!h)return r();const w=h+"end";let v=0;const k=()=>{n.removeEventListener(w,_),i()},_=g=>{g.target===n&&++v>=u&&k()};setTimeout(()=>{v<u&&k()},d+1),n.addEventListener(w,_)}function ya(n,t){const e=window.getComputedStyle(n),r=x=>(e[x]||"").split(", "),l=r(S2+"Delay"),i=r(S2+"Duration"),h=Xs(l,i),d=r(Hn+"Delay"),u=r(Hn+"Duration"),w=Xs(d,u);let v=null,k=0,_=0;t===S2?h>0&&(v=S2,k=h,_=i.length):t===Hn?w>0&&(v=Hn,k=w,_=u.length):(k=Math.max(h,w),v=k>0?h>w?S2:Hn:null,_=v?v===S2?i.length:u.length:0);const g=v===S2&&/\b(transform|all)(,|$)/.test(e[S2+"Property"]);return{type:v,timeout:k,propCount:_,hasTransform:g}}function Xs(n,t){for(;n.length<t.length;)n=n.concat(n);return Math.max(...t.map((e,r)=>no(e)+no(n[r])))}function no(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function La(){return document.body.offsetHeight}const G2=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Q(t)?e=>Ct(t,e):t};function Ha(n){n.target.composing=!0}function to(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Re={created(n,{modifiers:{lazy:t,trim:e,number:r}},l){n._assign=G2(l);const i=r||l.props&&l.props.type==="number";C2(n,t?"change":"input",h=>{if(h.target.composing)return;let d=n.value;e&&(d=d.trim()),i&&(d=Kn(d)),n._assign(d)}),e&&C2(n,"change",()=>{n.value=n.value.trim()}),t||(C2(n,"compositionstart",Ha),C2(n,"compositionend",to),C2(n,"change",to))},mounted(n,{value:t}){n.value=t==null?"":t},beforeUpdate(n,{value:t,modifiers:{lazy:e,trim:r,number:l}},i){if(n._assign=G2(i),n.composing||document.activeElement===n&&n.type!=="range"&&(e||r&&n.value.trim()===t||(l||n.type==="number")&&Kn(n.value)===t))return;const h=t==null?"":t;n.value!==h&&(n.value=h)}},Va={deep:!0,created(n,t,e){n._assign=G2(e),C2(n,"change",()=>{const r=n._modelValue,l=_n(n),i=n.checked,h=n._assign;if(Q(r)){const d=Ge(r,l),u=d!==-1;if(i&&!u)h(r.concat(l));else if(!i&&u){const w=[...r];w.splice(d,1),h(w)}}else if(mn(r)){const d=new Set(r);i?d.add(l):d.delete(l),h(d)}else h(c0(n,i))})},mounted:eo,beforeUpdate(n,t,e){n._assign=G2(e),eo(n,t,e)}};function eo(n,{value:t,oldValue:e},r){n._modelValue=t,Q(t)?n.checked=Ge(t,r.props.value)>-1:mn(t)?n.checked=t.has(r.props.value):t!==e&&(n.checked=sn(t,c0(n,!0)))}const ja={created(n,{value:t},e){n.checked=sn(t,e.props.value),n._assign=G2(e),C2(n,"change",()=>{n._assign(_n(n))})},beforeUpdate(n,{value:t,oldValue:e},r){n._assign=G2(r),t!==e&&(n.checked=sn(t,r.props.value))}},Sa={deep:!0,created(n,{value:t,modifiers:{number:e}},r){const l=mn(t);C2(n,"change",()=>{const i=Array.prototype.filter.call(n.options,h=>h.selected).map(h=>e?Kn(_n(h)):_n(h));n._assign(n.multiple?l?new Set(i):i:i[0])}),n._assign=G2(r)},mounted(n,{value:t}){so(n,t)},beforeUpdate(n,t,e){n._assign=G2(e)},updated(n,{value:t}){so(n,t)}};function so(n,t){const e=n.multiple;if(!(e&&!Q(t)&&!mn(t))){for(let r=0,l=n.options.length;r<l;r++){const i=n.options[r],h=_n(i);if(e)Q(t)?i.selected=Ge(t,h)>-1:i.selected=t.has(h);else if(sn(_n(i),t)){n.selectedIndex!==r&&(n.selectedIndex=r);return}}!e&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function _n(n){return"_value"in n?n._value:n.value}function c0(n,t){const e=t?"_trueValue":"_falseValue";return e in n?n[e]:t}const Aa={created(n,t,e){kt(n,t,e,null,"created")},mounted(n,t,e){kt(n,t,e,null,"mounted")},beforeUpdate(n,t,e,r){kt(n,t,e,r,"beforeUpdate")},updated(n,t,e,r){kt(n,t,e,r,"updated")}};function Ra(n,t){switch(n){case"SELECT":return Sa;case"TEXTAREA":return Re;default:switch(t){case"checkbox":return Va;case"radio":return ja;default:return Re}}}function kt(n,t,e,r,l){const h=Ra(n.tagName,e.props&&e.props.type)[l];h&&h(n,t,e,r)}const oo={beforeMount(n,{value:t},{transition:e}){n._vod=n.style.display==="none"?"":n.style.display,e&&t?e.beforeEnter(n):Vn(n,t)},mounted(n,{value:t},{transition:e}){e&&t&&e.enter(n)},updated(n,{value:t,oldValue:e},{transition:r}){!t!=!e&&(r?t?(r.beforeEnter(n),Vn(n,!0),r.enter(n)):r.leave(n,()=>{Vn(n,!1)}):Vn(n,t))},beforeUnmount(n,{value:t}){Vn(n,t)}};function Vn(n,t){n.style.display=t?n._vod:"none"}const Pa=K1({patchProp:Ma},la);let oe,co=!1;function Ta(){return oe=co?oe:Oc(Pa),co=!0,oe}const Da=(...n)=>{const t=Ta().createApp(...n),{mount:e}=t;return t.mount=r=>{const l=Fa(r);if(l)return e(l,!0,l instanceof SVGElement)},t};function Fa(n){return C1(n)?document.querySelector(n):n}const a0=JSON.parse('{"base":"/LChBlog.github.io/","lang":"zh-CN","title":"LCh","description":"Enjoy when you can, and endure when you must.","head":[["link",{"rel":"icon","href":"/browser.png"}],["meta",{"name":"viewport","content":"width=device-width,initial-scale=1,user-scalable=no"}]],"locales":{}}');var Ea=([n,t,e])=>n==="meta"&&t.name?`${n}.${t.name}`:["title","base"].includes(n)?n:n==="template"&&t.id?`${n}.${t.id}`:JSON.stringify([n,t,e]),Ia=n=>{const t=new Set,e=[];return n.forEach(r=>{const l=Ea(r);t.has(l)||(t.add(l),e.push(r))}),e},Oa=n=>/^(https?:)?\/\//.test(n),iWn=n=>/^mailto:/.test(n),pWn=n=>/^tel:/.test(n),r0=n=>Object.prototype.toString.call(n)==="[object Object]",qa=n=>n.replace(/\/$/,""),Ga=n=>n.replace(/^\//,""),l0=(n,t)=>{const e=Object.keys(n).sort((r,l)=>{const i=l.split("/").length-r.split("/").length;return i!==0?i:l.length-r.length});for(const r of e)if(t.startsWith(r))return r;return"/"};const is={"v-8daa1a0e":T1(()=>l1(()=>import("./index.html.03194a71.js"),[])),"v-769f6067":T1(()=>l1(()=>import("./102601.html.c031f542.js"),[])),"v-729d99c6":T1(()=>l1(()=>import("./110401.html.6068a9c8.js"),[])),"v-307a6c96":T1(()=>l1(()=>import("./101201.html.949e059f.js"),[])),"v-37e04cf1":T1(()=>l1(()=>import("./101701.html.177dd2d2.js"),[])),"v-a289eec0":T1(()=>l1(()=>import("./092901.html.8401aef0.js"),[])),"v-1ca0b669":T1(()=>l1(()=>import("./100801.html.d2acfafe.js"),[])),"v-1e558f08":T1(()=>l1(()=>import("./100802.html.5658fbb9.js"),[])),"v-29a06e76":T1(()=>l1(()=>import("./111801.html.d01d357b.js"),[])),"v-3706649a":T1(()=>l1(()=>import("./404.html.071ee59b.js"),[])),"v-73395324":T1(()=>l1(()=>import("./index.html.f58675ab.js"),[])),"v-3de79fea":T1(()=>l1(()=>import("./index.html.52038117.js"),[])),"v-a2486af8":T1(()=>l1(()=>import("./index.html.34d7b106.js"),[])),"v-1d404bd6":T1(()=>l1(()=>import("./index.html.5896b063.js"),[])),"v-1cd2f072":T1(()=>l1(()=>import("./index.html.7c65a18a.js"),[])),"v-d6e06a32":T1(()=>l1(()=>import("./index.html.14777007.js"),[])),"v-12186d64":T1(()=>l1(()=>import("./index.html.5bffca47.js"),[])),"v-01560935":T1(()=>l1(()=>import("./index.html.1e067f1e.js"),[])),"v-03d52fd3":T1(()=>l1(()=>import("./index.html.999e80b2.js"),[]))},i0={404:T1(()=>l1(()=>import("./404.43d7f082.js"),["assets/404.43d7f082.js","assets/index.51464e07.js"])),Categories:T1(()=>l1(()=>import("./Categories.262f0f20.js"),["assets/Categories.262f0f20.js","assets/index.51464e07.js","assets/Pagation.b1a7aa8d.js"])),Layout:T1(()=>l1(()=>import("./Layout.cf9b3f57.js"),["assets/Layout.cf9b3f57.js","assets/index.51464e07.js","assets/Pagation.b1a7aa8d.js"])),Post:T1(()=>l1(()=>import("./Post.4ad37ca9.js"),[])),Timeline:T1(()=>l1(()=>import("./Timeline.d7cd38c4.js"),[]))};var p0=Y(c3),h0=ct({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),z2=Y(h0),Wt=()=>z2;yn.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=n=>{p0.value[n.key]=()=>Promise.resolve(n),n.key===z2.value.key&&(z2.value=n)});var d0=Symbol(""),Na=()=>{const n=D1(d0);if(!n)throw new Error("usePageFrontmatter() is called without provider.");return n},u0=Symbol(""),Ua=()=>{const n=D1(u0);if(!n)throw new Error("usePageHead() is called without provider.");return n},Wa=Symbol(""),w0=Symbol(""),v0=()=>{const n=D1(w0);if(!n)throw new Error("usePageLang() is called without provider.");return n},ps=Symbol(""),_0=()=>{const n=D1(ps);if(!n)throw new Error("useRouteLocale() is called without provider.");return n},F2=Y(a0),g0=()=>F2;yn.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=n=>{F2.value=n});var k0=Symbol(""),hWn=()=>{const n=D1(k0);if(!n)throw new Error("useSiteLocaleData() is called without provider.");return n},Ka=Symbol(""),Z2=N2({resolvePageData:async n=>{const t=p0.value[n],e=await(t==null?void 0:t());return e!=null?e:h0},resolvePageFrontmatter:n=>n.frontmatter,resolvePageHead:(n,t,e)=>{const r=C1(t.description)?t.description:e.description,l=[...Q(t.head)?t.head:[],...e.head,["title",{},n],["meta",{name:"description",content:r}]];return Ia(l)},resolvePageHeadTitle:(n,t)=>`${n.title?`${n.title} | `:""}${t.title}`,resolvePageLang:n=>n.lang||"en",resolveRouteLocale:(n,t)=>l0(n,t),resolveSiteLocaleData:(n,t)=>({...n,...n.locales[t]})}),Ja=a({name:"ClientOnly",setup(n,t){const e=Y(!1);return Y1(()=>{e.value=!0}),()=>{var r,l;return e.value?(l=(r=t.slots).default)==null?void 0:l.call(r):null}}}),Ya=a({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(n){const t=Wt(),e=n1(()=>is[n.pageKey||t.value.key]);return()=>e.value?q(e.value):q("div","404 Not Found")}}),ao=a({name:"Vuepress",setup(){const n=Wt(),t=n1(()=>{let e;if(n.value.path){const r=n.value.frontmatter.layout;C1(r)?e=r:e="Layout"}else e="404";return i0[e]||E1(e,!1)});return()=>q(t.value)}}),m0=n=>Oa(n)?n:`${g0().value.base}${Ga(n)}`,f2=n=>n;const Za=JSON.parse('{"style":"@vuepress-reco/style-default","logo":"/banner_2.png","author":"LCh","authorAvatar":"/banner_2.png","docsRepo":"https://github.com/luochao1998/LChBlog.github.io","docsBranch":"gh-pages-source","lastUpdatedText":"","navbar":[{"text":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60","link":"/blogs/weixin/2022/111801.md"},{"text":"Contact","children":[{"text":"GitHub","link":"https://github.com/luochao1998/LChBlog.github.io"}]}],"commentConfig":{"type":"valine","options":{"appId":"uBAKoDkIfzTavmYryZabkkww-gzGzoHsz","appKey":"HnIVfK9A0GQ11t7HPn3TlpgJ","placeholder":"\u586B\u5199\u90AE\u7BB1\u53EF\u4EE5\u6536\u5230\u56DE\u590D\u63D0\u9192\u54E6\uFF01","verify":true,"recordIP":true}},"autoAddCategoryToNavbar":true}'),x0=Y(Za),Qa=()=>x0;yn.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=n=>{x0.value=n});const f0=Symbol(""),Kt=()=>{const n=D1(f0);if(!n)throw new Error("useThemeLocaleData() is called without provider.");return n},Xa=(n,t)=>{var e;return{...n,...(e=n.locales)==null?void 0:e[t]}};function nr(){const n=Kt(),t=n1(()=>{var i;return(i=n==null?void 0:n.value)===null||i===void 0?void 0:i.bulletin}),e=Y(!1),r="__CLOSE_BULLETIN_POPOVER__";return Y1(()=>{var i;const h=sessionStorage.getItem(r);e.value=h!=="true"&&!!(!((i=t==null?void 0:t.value)===null||i===void 0)&&i.body)}),{visible:e,bulletin:t,closeBulletinPopover:()=>{e.value=!1,sessionStorage.setItem(r,"true")}}}const tr={handleImage(n){return`<img style="${n.style||""}" src="${n.src}" />`},handleText(n){return`<div style="${n.style||""}">${n.content}</div>`},handleTitle(n){return`<h5 style="${n.style||""}">${n.content}</h5>`},handleButton(n){return`<a style="${n.style||""}" class="btn" href="${n.link}">${n.text}</a>`},handleButtongroup(n){return`<div class="btn-group">${(n.children||[]).reduce((e,r)=>e+=`<a style="${r.style||n.style||""}" class="btn" href="${r.link}">${r.text}</a>`,"")}</div>`},handleHr(n){return"<hr />"}};function er(){const n=Kt();function t(r){if(Array.isArray(r))return r.map(l=>t(l));{let l=r.type;return l=l.slice(0,1).toUpperCase()+l.slice(1),tr[`handle${l}`](r)}}return{bodyNodes:n1(()=>{var r,l;return t((l=(r=n==null?void 0:n.value)===null||r===void 0?void 0:r.bulletin)===null||l===void 0?void 0:l.body).join("")}),handleNode:t}}var Cn=(n,t)=>{const e=n.__vccOpts||n;for(const[r,l]of t)e[r]=l;return e};const sr={class:"bulletin-title"},or=s("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[s("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),cr=[or],ar=["innerHTML"],rr=a({__name:"Bulletin",setup(n){const{visible:t,bulletin:e,closeBulletinPopover:r}=nr(),{bodyNodes:l}=er();return(i,h)=>{var u,w;const d=E1("Xicons");return N1(t)?(o(),c("div",{key:0,class:"bulletin-wrapper",style:m2({width:((u=N1(e))==null?void 0:u.width)||"300px"})},[s("div",sr,[g1(d,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((w=N1(e))==null?void 0:w.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),s("i",{class:"btn-close",onClick:h[0]||(h[0]=(...v)=>N1(r)&&N1(r)(...v))},cr)]),s("div",{class:"bulletin-content",innerHTML:N1(l)},null,8,ar)],4)):v1("",!0)}}});var lr=Cn(rr,[["__file","Bulletin.vue"]]),ir=f2({rootComponents:[lr]});function pr(){const n=Kt(),t=n1(()=>{var r;switch((r=n.value.commentConfig)===null||r===void 0?void 0:r.type){case"valine":return"valine";case"waline":return"waline";default:return""}}),e=n1(()=>{var r,l;return((l=(r=n.value)===null||r===void 0?void 0:r.commentConfig)===null||l===void 0?void 0:l.options)||{}});return{solution:t,options:e}}/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const ln=typeof window!="undefined";function hr(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const S1=Object.assign;function ce(n,t){const e={};for(const r in t){const l=t[r];e[r]=v2(l)?l.map(n):n(l)}return e}const On=()=>{},v2=Array.isArray,dr=/\/$/,ur=n=>n.replace(dr,"");function ae(n,t,e="/"){let r,l={},i="",h="";const d=t.indexOf("#");let u=t.indexOf("?");return d<u&&d>=0&&(u=-1),u>-1&&(r=t.slice(0,u),i=t.slice(u+1,d>-1?d:t.length),l=n(i)),d>-1&&(r=r||t.slice(0,d),h=t.slice(d,t.length)),r=gr(r!=null?r:t,e),{fullPath:r+(i&&"?")+i+h,path:r,query:l,hash:h}}function wr(n,t){const e=t.query?n(t.query):"";return t.path+(e&&"?")+e+(t.hash||"")}function ro(n,t){return!t||!n.toLowerCase().startsWith(t.toLowerCase())?n:n.slice(t.length)||"/"}function vr(n,t,e){const r=t.matched.length-1,l=e.matched.length-1;return r>-1&&r===l&&gn(t.matched[r],e.matched[l])&&$0(t.params,e.params)&&n(t.query)===n(e.query)&&t.hash===e.hash}function gn(n,t){return(n.aliasOf||n)===(t.aliasOf||t)}function $0(n,t){if(Object.keys(n).length!==Object.keys(t).length)return!1;for(const e in n)if(!_r(n[e],t[e]))return!1;return!0}function _r(n,t){return v2(n)?lo(n,t):v2(t)?lo(t,n):n===t}function lo(n,t){return v2(t)?n.length===t.length&&n.every((e,r)=>e===t[r]):n.length===1&&n[0]===t}function gr(n,t){if(n.startsWith("/"))return n;if(!n)return t;const e=t.split("/"),r=n.split("/");let l=e.length-1,i,h;for(i=0;i<r.length;i++)if(h=r[i],h!==".")if(h==="..")l>1&&l--;else break;return e.slice(0,l).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var nt;(function(n){n.pop="pop",n.push="push"})(nt||(nt={}));var qn;(function(n){n.back="back",n.forward="forward",n.unknown=""})(qn||(qn={}));function kr(n){if(!n)if(ln){const t=document.querySelector("base");n=t&&t.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ur(n)}const mr=/^[^#]+#/;function xr(n,t){return n.replace(mr,"#")+t}function fr(n,t){const e=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:t.behavior,left:r.left-e.left-(t.left||0),top:r.top-e.top-(t.top||0)}}const Jt=()=>({left:window.pageXOffset,top:window.pageYOffset});function $r(n){let t;if("el"in n){const e=n.el,r=typeof e=="string"&&e.startsWith("#"),l=typeof e=="string"?r?document.getElementById(e.slice(1)):document.querySelector(e):e;if(!l)return;t=fr(l,n)}else t=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function io(n,t){return(history.state?history.state.position-t:-1)+n}const Pe=new Map;function Mr(n,t){Pe.set(n,t)}function Cr(n){const t=Pe.get(n);return Pe.delete(n),t}let zr=()=>location.protocol+"//"+location.host;function M0(n,t){const{pathname:e,search:r,hash:l}=t,i=n.indexOf("#");if(i>-1){let d=l.includes(n.slice(i))?n.slice(i).length:1,u=l.slice(d);return u[0]!=="/"&&(u="/"+u),ro(u,"")}return ro(e,n)+r+l}function br(n,t,e,r){let l=[],i=[],h=null;const d=({state:_})=>{const g=M0(n,location),x=e.value,C=t.value;let b=0;if(_){if(e.value=g,t.value=_,h&&h===x){h=null;return}b=C?_.position-C.position:0}else r(g);l.forEach(f=>{f(e.value,x,{delta:b,type:nt.pop,direction:b?b>0?qn.forward:qn.back:qn.unknown})})};function u(){h=e.value}function w(_){l.push(_);const g=()=>{const x=l.indexOf(_);x>-1&&l.splice(x,1)};return i.push(g),g}function v(){const{history:_}=window;!_.state||_.replaceState(S1({},_.state,{scroll:Jt()}),"")}function k(){for(const _ of i)_();i=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",v)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",v),{pauseListeners:u,listen:w,destroy:k}}function po(n,t,e,r=!1,l=!1){return{back:n,current:t,forward:e,replaced:r,position:window.history.length,scroll:l?Jt():null}}function Br(n){const{history:t,location:e}=window,r={value:M0(n,e)},l={value:t.state};l.value||i(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function i(u,w,v){const k=n.indexOf("#"),_=k>-1?(e.host&&document.querySelector("base")?n:n.slice(k))+u:zr()+n+u;try{t[v?"replaceState":"pushState"](w,"",_),l.value=w}catch(g){console.error(g),e[v?"replace":"assign"](_)}}function h(u,w){const v=S1({},t.state,po(l.value.back,u,l.value.forward,!0),w,{position:l.value.position});i(u,v,!0),r.value=u}function d(u,w){const v=S1({},l.value,t.state,{forward:u,scroll:Jt()});i(v.current,v,!0);const k=S1({},po(r.value,u,null),{position:v.position+1},w);i(u,k,!1),r.value=u}return{location:r,state:l,push:d,replace:h}}function yr(n){n=kr(n);const t=Br(n),e=br(n,t.state,t.location,t.replace);function r(i,h=!0){h||e.pauseListeners(),history.go(i)}const l=S1({location:"",base:n,go:r,createHref:xr.bind(null,n)},t,e);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>t.state.value}),l}function Lr(n){return typeof n=="string"||n&&typeof n=="object"}function C0(n){return typeof n=="string"||typeof n=="symbol"}const $2={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z0=Symbol("");var ho;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(ho||(ho={}));function kn(n,t){return S1(new Error,{type:n,[z0]:!0},t)}function R2(n,t){return n instanceof Error&&z0 in n&&(t==null||!!(n.type&t))}const uo="[^/]+?",Hr={sensitive:!1,strict:!1,start:!0,end:!0},Vr=/[.+*?^${}()[\]/\\]/g;function jr(n,t){const e=S1({},Hr,t),r=[];let l=e.start?"^":"";const i=[];for(const w of n){const v=w.length?[]:[90];e.strict&&!w.length&&(l+="/");for(let k=0;k<w.length;k++){const _=w[k];let g=40+(e.sensitive?.25:0);if(_.type===0)k||(l+="/"),l+=_.value.replace(Vr,"\\$&"),g+=40;else if(_.type===1){const{value:x,repeatable:C,optional:b,regexp:f}=_;i.push({name:x,repeatable:C,optional:b});const M=f||uo;if(M!==uo){g+=10;try{new RegExp(`(${M})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${x}" (${M}): `+B.message)}}let L=C?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;k||(L=b&&w.length<2?`(?:/${L})`:"/"+L),b&&(L+="?"),l+=L,g+=20,b&&(g+=-8),C&&(g+=-20),M===".*"&&(g+=-50)}v.push(g)}r.push(v)}if(e.strict&&e.end){const w=r.length-1;r[w][r[w].length-1]+=.7000000000000001}e.strict||(l+="/?"),e.end?l+="$":e.strict&&(l+="(?:/|$)");const h=new RegExp(l,e.sensitive?"":"i");function d(w){const v=w.match(h),k={};if(!v)return null;for(let _=1;_<v.length;_++){const g=v[_]||"",x=i[_-1];k[x.name]=g&&x.repeatable?g.split("/"):g}return k}function u(w){let v="",k=!1;for(const _ of n){(!k||!v.endsWith("/"))&&(v+="/"),k=!1;for(const g of _)if(g.type===0)v+=g.value;else if(g.type===1){const{value:x,repeatable:C,optional:b}=g,f=x in w?w[x]:"";if(v2(f)&&!C)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const M=v2(f)?f.join("/"):f;if(!M)if(b)_.length<2&&n.length>1&&(v.endsWith("/")?v=v.slice(0,-1):k=!0);else throw new Error(`Missing required param "${x}"`);v+=M}}return v}return{re:h,score:r,keys:i,parse:d,stringify:u}}function Sr(n,t){let e=0;for(;e<n.length&&e<t.length;){const r=t[e]-n[e];if(r)return r;e++}return n.length<t.length?n.length===1&&n[0]===40+40?-1:1:n.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ar(n,t){let e=0;const r=n.score,l=t.score;for(;e<r.length&&e<l.length;){const i=Sr(r[e],l[e]);if(i)return i;e++}if(Math.abs(l.length-r.length)===1){if(wo(r))return 1;if(wo(l))return-1}return l.length-r.length}function wo(n){const t=n[n.length-1];return n.length>0&&t[t.length-1]<0}const Rr={type:0,value:""},Pr=/[a-zA-Z0-9_]/;function Tr(n){if(!n)return[[]];if(n==="/")return[[Rr]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function t(g){throw new Error(`ERR (${e})/"${w}": ${g}`)}let e=0,r=e;const l=[];let i;function h(){i&&l.push(i),i=[]}let d=0,u,w="",v="";function k(){!w||(e===0?i.push({type:0,value:w}):e===1||e===2||e===3?(i.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${w}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:w,regexp:v,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),w="")}function _(){w+=u}for(;d<n.length;){if(u=n[d++],u==="\\"&&e!==2){r=e,e=4;continue}switch(e){case 0:u==="/"?(w&&k(),h()):u===":"?(k(),e=1):_();break;case 4:_(),e=r;break;case 1:u==="("?e=2:Pr.test(u)?_():(k(),e=0,u!=="*"&&u!=="?"&&u!=="+"&&d--);break;case 2:u===")"?v[v.length-1]=="\\"?v=v.slice(0,-1)+u:e=3:v+=u;break;case 3:k(),e=0,u!=="*"&&u!=="?"&&u!=="+"&&d--,v="";break;default:t("Unknown state");break}}return e===2&&t(`Unfinished custom RegExp for param "${w}"`),k(),h(),l}function Dr(n,t,e){const r=jr(Tr(n.path),e),l=S1(r,{record:n,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}function Fr(n,t){const e=[],r=new Map;t=_o({strict:!1,end:!0,sensitive:!1},t);function l(v){return r.get(v)}function i(v,k,_){const g=!_,x=Ir(v);x.aliasOf=_&&_.record;const C=_o(t,v),b=[x];if("alias"in v){const L=typeof v.alias=="string"?[v.alias]:v.alias;for(const B of L)b.push(S1({},x,{components:_?_.record.components:x.components,path:B,aliasOf:_?_.record:x}))}let f,M;for(const L of b){const{path:B}=L;if(k&&B[0]!=="/"){const S=k.record.path,I=S[S.length-1]==="/"?"":"/";L.path=k.record.path+(B&&I+B)}if(f=Dr(L,k,C),_?_.alias.push(f):(M=M||f,M!==f&&M.alias.push(f),g&&v.name&&!vo(f)&&h(v.name)),x.children){const S=x.children;for(let I=0;I<S.length;I++)i(S[I],f,_&&_.children[I])}_=_||f,u(f)}return M?()=>{h(M)}:On}function h(v){if(C0(v)){const k=r.get(v);k&&(r.delete(v),e.splice(e.indexOf(k),1),k.children.forEach(h),k.alias.forEach(h))}else{const k=e.indexOf(v);k>-1&&(e.splice(k,1),v.record.name&&r.delete(v.record.name),v.children.forEach(h),v.alias.forEach(h))}}function d(){return e}function u(v){let k=0;for(;k<e.length&&Ar(v,e[k])>=0&&(v.record.path!==e[k].record.path||!b0(v,e[k]));)k++;e.splice(k,0,v),v.record.name&&!vo(v)&&r.set(v.record.name,v)}function w(v,k){let _,g={},x,C;if("name"in v&&v.name){if(_=r.get(v.name),!_)throw kn(1,{location:v});C=_.record.name,g=S1(Er(k.params,_.keys.filter(M=>!M.optional).map(M=>M.name)),v.params),x=_.stringify(g)}else if("path"in v)x=v.path,_=e.find(M=>M.re.test(x)),_&&(g=_.parse(x),C=_.record.name);else{if(_=k.name?r.get(k.name):e.find(M=>M.re.test(k.path)),!_)throw kn(1,{location:v,currentLocation:k});C=_.record.name,g=S1({},k.params,v.params),x=_.stringify(g)}const b=[];let f=_;for(;f;)b.unshift(f.record),f=f.parent;return{name:C,path:x,params:g,matched:b,meta:qr(b)}}return n.forEach(v=>i(v)),{addRoute:i,resolve:w,removeRoute:h,getRoutes:d,getRecordMatcher:l}}function Er(n,t){const e={};for(const r of t)r in n&&(e[r]=n[r]);return e}function Ir(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Or(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Or(n){const t={},e=n.props||!1;if("component"in n)t.default=e;else for(const r in n.components)t[r]=typeof e=="boolean"?e:e[r];return t}function vo(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function qr(n){return n.reduce((t,e)=>S1(t,e.meta),{})}function _o(n,t){const e={};for(const r in n)e[r]=r in t?t[r]:n[r];return e}function b0(n,t){return t.children.some(e=>e===n||b0(n,e))}const B0=/#/g,Gr=/&/g,Nr=/\//g,Ur=/=/g,Wr=/\?/g,y0=/\+/g,Kr=/%5B/g,Jr=/%5D/g,L0=/%5E/g,Yr=/%60/g,H0=/%7B/g,Zr=/%7C/g,V0=/%7D/g,Qr=/%20/g;function hs(n){return encodeURI(""+n).replace(Zr,"|").replace(Kr,"[").replace(Jr,"]")}function Xr(n){return hs(n).replace(H0,"{").replace(V0,"}").replace(L0,"^")}function Te(n){return hs(n).replace(y0,"%2B").replace(Qr,"+").replace(B0,"%23").replace(Gr,"%26").replace(Yr,"`").replace(H0,"{").replace(V0,"}").replace(L0,"^")}function n6(n){return Te(n).replace(Ur,"%3D")}function t6(n){return hs(n).replace(B0,"%23").replace(Wr,"%3F")}function e6(n){return n==null?"":t6(n).replace(Nr,"%2F")}function Rt(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function s6(n){const t={};if(n===""||n==="?")return t;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<r.length;++l){const i=r[l].replace(y0," "),h=i.indexOf("="),d=Rt(h<0?i:i.slice(0,h)),u=h<0?null:Rt(i.slice(h+1));if(d in t){let w=t[d];v2(w)||(w=t[d]=[w]),w.push(u)}else t[d]=u}return t}function go(n){let t="";for(let e in n){const r=n[e];if(e=n6(e),r==null){r!==void 0&&(t+=(t.length?"&":"")+e);continue}(v2(r)?r.map(i=>i&&Te(i)):[r&&Te(r)]).forEach(i=>{i!==void 0&&(t+=(t.length?"&":"")+e,i!=null&&(t+="="+i))})}return t}function o6(n){const t={};for(const e in n){const r=n[e];r!==void 0&&(t[e]=v2(r)?r.map(l=>l==null?null:""+l):r==null?r:""+r)}return t}const c6=Symbol(""),ko=Symbol(""),Yt=Symbol(""),ds=Symbol(""),De=Symbol("");function jn(){let n=[];function t(r){return n.push(r),()=>{const l=n.indexOf(r);l>-1&&n.splice(l,1)}}function e(){n=[]}return{add:t,list:()=>n,reset:e}}function D2(n,t,e,r,l){const i=r&&(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((h,d)=>{const u=k=>{k===!1?d(kn(4,{from:e,to:t})):k instanceof Error?d(k):Lr(k)?d(kn(2,{from:t,to:k})):(i&&r.enterCallbacks[l]===i&&typeof k=="function"&&i.push(k),h())},w=n.call(r&&r.instances[l],t,e,u);let v=Promise.resolve(w);n.length<3&&(v=v.then(u)),v.catch(k=>d(k))})}function re(n,t,e,r){const l=[];for(const i of n)for(const h in i.components){let d=i.components[h];if(!(t!=="beforeRouteEnter"&&!i.instances[h]))if(a6(d)){const w=(d.__vccOpts||d)[t];w&&l.push(D2(w,e,r,i,h))}else{let u=d();l.push(()=>u.then(w=>{if(!w)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${i.path}"`));const v=hr(w)?w.default:w;i.components[h]=v;const _=(v.__vccOpts||v)[t];return _&&D2(_,e,r,i,h)()}))}}return l}function a6(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function mo(n){const t=D1(Yt),e=D1(ds),r=n1(()=>t.resolve(N1(n.to))),l=n1(()=>{const{matched:u}=r.value,{length:w}=u,v=u[w-1],k=e.matched;if(!v||!k.length)return-1;const _=k.findIndex(gn.bind(null,v));if(_>-1)return _;const g=xo(u[w-2]);return w>1&&xo(v)===g&&k[k.length-1].path!==g?k.findIndex(gn.bind(null,u[w-2])):_}),i=n1(()=>l.value>-1&&p6(e.params,r.value.params)),h=n1(()=>l.value>-1&&l.value===e.matched.length-1&&$0(e.params,r.value.params));function d(u={}){return i6(u)?t[N1(n.replace)?"replace":"push"](N1(n.to)).catch(On):Promise.resolve()}return{route:r,href:n1(()=>r.value.href),isActive:i,isExactActive:h,navigate:d}}const r6=a({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:mo,setup(n,{slots:t}){const e=N2(mo(n)),{options:r}=D1(Yt),l=n1(()=>({[fo(n.activeClass,r.linkActiveClass,"router-link-active")]:e.isActive,[fo(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:e.isExactActive}));return()=>{const i=t.default&&t.default(e);return n.custom?i:q("a",{"aria-current":e.isExactActive?n.ariaCurrentValue:null,href:e.href,onClick:e.navigate,class:l.value},i)}}}),l6=r6;function i6(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const t=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return n.preventDefault&&n.preventDefault(),!0}}function p6(n,t){for(const e in t){const r=t[e],l=n[e];if(typeof r=="string"){if(r!==l)return!1}else if(!v2(l)||l.length!==r.length||r.some((i,h)=>i!==l[h]))return!1}return!0}function xo(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const fo=(n,t,e)=>n!=null?n:t!=null?t:e,h6=a({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:t,slots:e}){const r=D1(De),l=n1(()=>n.route||r.value),i=D1(ko,0),h=n1(()=>{let w=N1(i);const{matched:v}=l.value;let k;for(;(k=v[w])&&!k.components;)w++;return w}),d=n1(()=>l.value.matched[h.value]);d2(ko,n1(()=>h.value+1)),d2(c6,d),d2(De,l);const u=Y();return W1(()=>[u.value,d.value,n.name],([w,v,k],[_,g,x])=>{v&&(v.instances[k]=w,g&&g!==v&&w&&w===_&&(v.leaveGuards.size||(v.leaveGuards=g.leaveGuards),v.updateGuards.size||(v.updateGuards=g.updateGuards))),w&&v&&(!g||!gn(v,g)||!_)&&(v.enterCallbacks[k]||[]).forEach(C=>C(w))},{flush:"post"}),()=>{const w=l.value,v=d.value,k=v&&v.components[n.name],_=n.name;if(!k)return $o(e.default,{Component:k,route:w});const g=v.props[n.name],x=g?g===!0?w.params:typeof g=="function"?g(w):g:null,b=q(k,S1({},x,t,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(v.instances[_]=null)},ref:u}));return $o(e.default,{Component:b,route:w})||b}}});function $o(n,t){if(!n)return null;const e=n(t);return e.length===1?e[0]:e}const j0=h6;function d6(n){const t=Fr(n.routes,n),e=n.parseQuery||s6,r=n.stringifyQuery||go,l=n.history,i=jn(),h=jn(),d=jn(),u=z3($2);let w=$2;ln&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const v=ce.bind(null,y=>""+y),k=ce.bind(null,e6),_=ce.bind(null,Rt);function g(y,F){let A,K;return C0(y)?(A=t.getRecordMatcher(y),K=F):K=y,t.addRoute(K,A)}function x(y){const F=t.getRecordMatcher(y);F&&t.removeRoute(F)}function C(){return t.getRoutes().map(y=>y.record)}function b(y){return!!t.getRecordMatcher(y)}function f(y,F){if(F=S1({},F||u.value),typeof y=="string"){const h1=ae(e,y,F.path),m=t.resolve({path:h1.path},F),$=l.createHref(h1.fullPath);return S1(h1,m,{params:_(m.params),hash:Rt(h1.hash),redirectedFrom:void 0,href:$})}let A;if("path"in y)A=S1({},y,{path:ae(e,y.path,F.path).path});else{const h1=S1({},y.params);for(const m in h1)h1[m]==null&&delete h1[m];A=S1({},y,{params:k(y.params)}),F.params=k(F.params)}const K=t.resolve(A,F),$1=y.hash||"";K.params=v(_(K.params));const _1=wr(r,S1({},y,{hash:Xr($1),path:K.path})),d1=l.createHref(_1);return S1({fullPath:_1,hash:$1,query:r===go?o6(y.query):y.query||{}},K,{redirectedFrom:void 0,href:d1})}function M(y){return typeof y=="string"?ae(e,y,u.value.path):S1({},y)}function L(y,F){if(w!==y)return kn(8,{from:F,to:y})}function B(y){return W(y)}function S(y){return B(S1(M(y),{replace:!0}))}function I(y){const F=y.matched[y.matched.length-1];if(F&&F.redirect){const{redirect:A}=F;let K=typeof A=="function"?A(y):A;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=M(K):{path:K},K.params={}),S1({query:y.query,hash:y.hash,params:"path"in K?{}:y.params},K)}}function W(y,F){const A=w=f(y),K=u.value,$1=y.state,_1=y.force,d1=y.replace===!0,h1=I(A);if(h1)return W(S1(M(h1),{state:$1,force:_1,replace:d1}),F||A);const m=A;m.redirectedFrom=F;let $;return!_1&&vr(r,K,A)&&($=kn(16,{to:m,from:K}),o1(K,K,!0,!1)),($?Promise.resolve($):J(m,K)).catch(z=>R2(z)?R2(z,2)?z:G(z):b1(z,m,K)).then(z=>{if(z){if(R2(z,2))return W(S1(M(z.to),{state:$1,force:_1,replace:d1}),F||m)}else z=i1(m,K,!0,d1,$1);return X(m,K,z),z})}function P(y,F){const A=L(y,F);return A?Promise.reject(A):Promise.resolve()}function J(y,F){let A;const[K,$1,_1]=u6(y,F);A=re(K.reverse(),"beforeRouteLeave",y,F);for(const h1 of K)h1.leaveGuards.forEach(m=>{A.push(D2(m,y,F))});const d1=P.bind(null,y,F);return A.push(d1),cn(A).then(()=>{A=[];for(const h1 of i.list())A.push(D2(h1,y,F));return A.push(d1),cn(A)}).then(()=>{A=re($1,"beforeRouteUpdate",y,F);for(const h1 of $1)h1.updateGuards.forEach(m=>{A.push(D2(m,y,F))});return A.push(d1),cn(A)}).then(()=>{A=[];for(const h1 of y.matched)if(h1.beforeEnter&&!F.matched.includes(h1))if(v2(h1.beforeEnter))for(const m of h1.beforeEnter)A.push(D2(m,y,F));else A.push(D2(h1.beforeEnter,y,F));return A.push(d1),cn(A)}).then(()=>(y.matched.forEach(h1=>h1.enterCallbacks={}),A=re(_1,"beforeRouteEnter",y,F),A.push(d1),cn(A))).then(()=>{A=[];for(const h1 of h.list())A.push(D2(h1,y,F));return A.push(d1),cn(A)}).catch(h1=>R2(h1,8)?h1:Promise.reject(h1))}function X(y,F,A){for(const K of d.list())K(y,F,A)}function i1(y,F,A,K,$1){const _1=L(y,F);if(_1)return _1;const d1=F===$2,h1=ln?history.state:{};A&&(K||d1?l.replace(y.fullPath,S1({scroll:d1&&h1&&h1.scroll},$1)):l.push(y.fullPath,$1)),u.value=y,o1(y,F,A,d1),G()}let D;function p1(){D||(D=l.listen((y,F,A)=>{if(!w1.listening)return;const K=f(y),$1=I(K);if($1){W(S1($1,{replace:!0}),K).catch(On);return}w=K;const _1=u.value;ln&&Mr(io(_1.fullPath,A.delta),Jt()),J(K,_1).catch(d1=>R2(d1,12)?d1:R2(d1,2)?(W(d1.to,K).then(h1=>{R2(h1,20)&&!A.delta&&A.type===nt.pop&&l.go(-1,!1)}).catch(On),Promise.reject()):(A.delta&&l.go(-A.delta,!1),b1(d1,K,_1))).then(d1=>{d1=d1||i1(K,_1,!1),d1&&(A.delta?l.go(-A.delta,!1):A.type===nt.pop&&R2(d1,20)&&l.go(-1,!1)),X(K,_1,d1)}).catch(On)}))}let U=jn(),I1=jn(),k1;function b1(y,F,A){G(y);const K=I1.list();return K.length?K.forEach($1=>$1(y,F,A)):console.error(y),Promise.reject(y)}function B1(){return k1&&u.value!==$2?Promise.resolve():new Promise((y,F)=>{U.add([y,F])})}function G(y){return k1||(k1=!y,p1(),U.list().forEach(([F,A])=>y?A(y):F()),U.reset()),y}function o1(y,F,A,K){const{scrollBehavior:$1}=n;if(!ln||!$1)return Promise.resolve();const _1=!A&&Cr(io(y.fullPath,0))||(K||!A)&&history.state&&history.state.scroll||null;return es().then(()=>$1(y,F,_1)).then(d1=>d1&&$r(d1)).catch(d1=>b1(d1,y,F))}const a1=y=>l.go(y);let L1;const M1=new Set,w1={currentRoute:u,listening:!0,addRoute:g,removeRoute:x,hasRoute:b,getRoutes:C,resolve:f,options:n,push:B,replace:S,go:a1,back:()=>a1(-1),forward:()=>a1(1),beforeEach:i.add,beforeResolve:h.add,afterEach:d.add,onError:I1.add,isReady:B1,install(y){const F=this;y.component("RouterLink",l6),y.component("RouterView",j0),y.config.globalProperties.$router=F,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>N1(u)}),ln&&!L1&&u.value===$2&&(L1=!0,B(l.location).catch($1=>{}));const A={};for(const $1 in $2)A[$1]=n1(()=>u.value[$1]);y.provide(Yt,F),y.provide(ds,N2(A)),y.provide(De,u);const K=y.unmount;M1.add(y),y.unmount=function(){M1.delete(y),M1.size<1&&(w=$2,D&&D(),D=null,u.value=$2,L1=!1,k1=!1),K()}}};return w1}function cn(n){return n.reduce((t,e)=>t.then(()=>e()),Promise.resolve())}function u6(n,t){const e=[],r=[],l=[],i=Math.max(t.matched.length,n.matched.length);for(let h=0;h<i;h++){const d=t.matched[h];d&&(n.matched.find(w=>gn(w,d))?r.push(d):e.push(d));const u=n.matched[h];u&&(t.matched.find(w=>gn(w,u))||l.push(u))}return[e,r,l]}function zn(){return D1(Yt)}function it(){return D1(ds)}var Mo=a({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(n){const t=zn(),{options:e}=Mn(n);let r=null;Y1(async()=>{const{Valine:l}=await l1(()=>import("./reco-valine.88224ab5.js"),[]),i=async()=>{if(r)return;const h={el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname,...e.value};r=new l(h)};i(),W1(()=>t.currentRoute.value.path,h=>{i()},{immediate:!0,deep:!0})})},render(){return q("div",{class:"reco-valine-wrapper"},q("div",{id:"valine"}))}}),J2,mt,Gn=typeof Map=="function"?new Map:(J2=[],mt=[],{has:function(n){return J2.indexOf(n)>-1},get:function(n){return mt[J2.indexOf(n)]},set:function(n,t){J2.indexOf(n)===-1&&(J2.push(n),mt.push(t))},delete:function(n){var t=J2.indexOf(n);t>-1&&(J2.splice(t,1),mt.splice(t,1))}}),S0=function(n){return new Event(n,{bubbles:!0})};try{new Event("test")}catch{S0=function(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!1),e}}function w6(n){var t=Gn.get(n);t&&t.destroy()}function v6(n){var t=Gn.get(n);t&&t.update()}var Pn=null;typeof window=="undefined"||typeof window.getComputedStyle!="function"?((Pn=function(n){return n}).destroy=function(n){return n},Pn.update=function(n){return n}):((Pn=function(n,t){return n&&Array.prototype.forEach.call(n.length?n:[n],function(e){return function(r){if(r&&r.nodeName&&r.nodeName==="TEXTAREA"&&!Gn.has(r)){var l,i=null,h=null,d=null,u=function(){r.clientWidth!==h&&_()},w=function(g){window.removeEventListener("resize",u,!1),r.removeEventListener("input",_,!1),r.removeEventListener("keyup",_,!1),r.removeEventListener("autosize:destroy",w,!1),r.removeEventListener("autosize:update",_,!1),Object.keys(g).forEach(function(x){r.style[x]=g[x]}),Gn.delete(r)}.bind(r,{height:r.style.height,resize:r.style.resize,overflowY:r.style.overflowY,overflowX:r.style.overflowX,wordWrap:r.style.wordWrap});r.addEventListener("autosize:destroy",w,!1),"onpropertychange"in r&&"oninput"in r&&r.addEventListener("keyup",_,!1),window.addEventListener("resize",u,!1),r.addEventListener("input",_,!1),r.addEventListener("autosize:update",_,!1),r.style.overflowX="hidden",r.style.wordWrap="break-word",Gn.set(r,{destroy:w,update:_}),(l=window.getComputedStyle(r,null)).resize==="vertical"?r.style.resize="none":l.resize==="both"&&(r.style.resize="horizontal"),i=l.boxSizing==="content-box"?-(parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)):parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth),isNaN(i)&&(i=0),_()}function v(g){var x=r.style.width;r.style.width="0px",r.style.width=x,r.style.overflowY=g}function k(){if(r.scrollHeight!==0){var g=function(C){for(var b=[];C&&C.parentNode&&C.parentNode instanceof Element;)C.parentNode.scrollTop&&b.push({node:C.parentNode,scrollTop:C.parentNode.scrollTop}),C=C.parentNode;return b}(r),x=document.documentElement&&document.documentElement.scrollTop;r.style.height="",r.style.height=r.scrollHeight+i+"px",h=r.clientWidth,g.forEach(function(C){C.node.scrollTop=C.scrollTop}),x&&(document.documentElement.scrollTop=x)}}function _(){k();var g=Math.round(parseFloat(r.style.height)),x=window.getComputedStyle(r,null),C=x.boxSizing==="content-box"?Math.round(parseFloat(x.height)):r.offsetHeight;if(C<g?x.overflowY==="hidden"&&(v("scroll"),k(),C=x.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight):x.overflowY!=="hidden"&&(v("hidden"),k(),C=x.boxSizing==="content-box"?Math.round(parseFloat(window.getComputedStyle(r,null).height)):r.offsetHeight),d!==C){d=C;var b=S0("autosize:resized");try{r.dispatchEvent(b)}catch{}}}}(e)}),n}).destroy=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],w6),n},Pn.update=function(n){return n&&Array.prototype.forEach.call(n.length?n:[n],v6),n});var Co=Pn;function A0(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}let bn=A0();function _6(n){bn=n}const g6=/[&<>"']/,k6=/[&<>"']/g,m6=/[<>"']|&(?!#?\w+;)/,x6=/[<>"']|&(?!#?\w+;)/g,f6={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},zo=n=>f6[n];function q1(n,t){if(t){if(g6.test(n))return n.replace(k6,zo)}else if(m6.test(n))return n.replace(x6,zo);return n}const $6=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function R0(n){return n.replace($6,(t,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const M6=/(^|[^\[])\^/g;function R1(n,t){n=typeof n=="string"?n:n.source,t=t||"";const e={replace:(r,l)=>(l=l.source||l,l=l.replace(M6,"$1"),n=n.replace(r,l),e),getRegex:()=>new RegExp(n,t)};return e}const C6=/[^\w:]/g,z6=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function bo(n,t,e){if(n){let r;try{r=decodeURIComponent(R0(e)).replace(C6,"").toLowerCase()}catch{return null}if(r.indexOf("javascript:")===0||r.indexOf("vbscript:")===0||r.indexOf("data:")===0)return null}t&&!z6.test(e)&&(e=L6(t,e));try{e=encodeURI(e).replace(/%25/g,"%")}catch{return null}return e}const xt={},b6=/^[^:]+:\/*[^/]*$/,B6=/^([^:]+:)[\s\S]*$/,y6=/^([^:]+:\/*[^/]*)[\s\S]*$/;function L6(n,t){xt[" "+n]||(b6.test(n)?xt[" "+n]=n+"/":xt[" "+n]=bt(n,"/",!0)),n=xt[" "+n];const e=n.indexOf(":")===-1;return t.substring(0,2)==="//"?e?t:n.replace(B6,"$1")+t:t.charAt(0)==="/"?e?t:n.replace(y6,"$1")+t:n+t}const Pt={exec:function(){}};function _2(n){let t=1,e,r;for(;t<arguments.length;t++){e=arguments[t];for(r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}function Bo(n,t){const e=n.replace(/\|/g,(i,h,d)=>{let u=!1,w=h;for(;--w>=0&&d[w]==="\\";)u=!u;return u?"|":" |"}),r=e.split(/ \|/);let l=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(/\\\|/g,"|");return r}function bt(n,t,e){const r=n.length;if(r===0)return"";let l=0;for(;l<r;){const i=n.charAt(r-l-1);if(i===t&&!e)l++;else if(i!==t&&e)l++;else break}return n.slice(0,r-l)}function H6(n,t){if(n.indexOf(t[1])===-1)return-1;const e=n.length;let r=0,l=0;for(;l<e;l++)if(n[l]==="\\")l++;else if(n[l]===t[0])r++;else if(n[l]===t[1]&&(r--,r<0))return l;return-1}function P0(n){n&&n.sanitize&&!n.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function yo(n,t){if(t<1)return"";let e="";for(;t>1;)t&1&&(e+=n),t>>=1,n+=n;return e+n}function Lo(n,t,e,r){const l=t.href,i=t.title?q1(t.title):null,h=n[1].replace(/\\([\[\]])/g,"$1");if(n[0].charAt(0)!=="!"){r.state.inLink=!0;const d={type:"link",raw:e,href:l,title:i,text:h,tokens:r.inlineTokens(h,[])};return r.state.inLink=!1,d}return{type:"image",raw:e,href:l,title:i,text:q1(h)}}function V6(n,t){const e=n.match(/^(\s+)(?:```)/);if(e===null)return t;const r=e[1];return t.split(`
`).map(l=>{const i=l.match(/^\s+/);if(i===null)return l;const[h]=i;return h.length>=r.length?l.slice(r.length):l}).join(`
`)}class us{constructor(t){this.options=t||bn}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const r=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?r:bt(r,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const r=e[0],l=V6(r,e[3]||"");return{type:"code",raw:r,lang:e[2]?e[2].trim():e[2],text:l}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let r=e[2].trim();if(/#$/.test(r)){const i=bt(r,"#");(this.options.pedantic||!i||/ $/.test(i))&&(r=i.trim())}const l={type:"heading",raw:e[0],depth:e[1].length,text:r,tokens:[]};return this.lexer.inline(l.text,l.tokens),l}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:e[0]}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){const r=e[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:e[0],tokens:this.lexer.blockTokens(r,[]),text:r}}}list(t){let e=this.rules.block.list.exec(t);if(e){let r,l,i,h,d,u,w,v,k,_,g,x,C=e[1].trim();const b=C.length>1,f={type:"list",raw:"",ordered:b,start:b?+C.slice(0,-1):"",loose:!1,items:[]};C=b?`\\d{1,9}\\${C.slice(-1)}`:`\\${C}`,this.options.pedantic&&(C=b?C:"[*+-]");const M=new RegExp(`^( {0,3}${C})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;t&&(x=!1,!(!(e=M.exec(t))||this.rules.block.hr.test(t)));){if(r=e[0],t=t.substring(r.length),v=e[2].split(`
`,1)[0],k=t.split(`
`,1)[0],this.options.pedantic?(h=2,g=v.trimLeft()):(h=e[2].search(/[^ ]/),h=h>4?1:h,g=v.slice(h),h+=e[1].length),u=!1,!v&&/^ *$/.test(k)&&(r+=k+`
`,t=t.substring(k.length+1),x=!0),!x){const B=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),S=new RegExp(`^ {0,${Math.min(3,h-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),I=new RegExp(`^ {0,${Math.min(3,h-1)}}(?:\`\`\`|~~~)`),W=new RegExp(`^ {0,${Math.min(3,h-1)}}#`);for(;t&&(_=t.split(`
`,1)[0],v=_,this.options.pedantic&&(v=v.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!(I.test(v)||W.test(v)||B.test(v)||S.test(t)));){if(v.search(/[^ ]/)>=h||!v.trim())g+=`
`+v.slice(h);else if(!u)g+=`
`+v;else break;!u&&!v.trim()&&(u=!0),r+=_+`
`,t=t.substring(_.length+1)}}f.loose||(w?f.loose=!0:/\n *\n *$/.test(r)&&(w=!0)),this.options.gfm&&(l=/^\[[ xX]\] /.exec(g),l&&(i=l[0]!=="[ ] ",g=g.replace(/^\[[ xX]\] +/,""))),f.items.push({type:"list_item",raw:r,task:!!l,checked:i,loose:!1,text:g}),f.raw+=r}f.items[f.items.length-1].raw=r.trimRight(),f.items[f.items.length-1].text=g.trimRight(),f.raw=f.raw.trimRight();const L=f.items.length;for(d=0;d<L;d++){this.lexer.state.top=!1,f.items[d].tokens=this.lexer.blockTokens(f.items[d].text,[]);const B=f.items[d].tokens.filter(I=>I.type==="space"),S=B.every(I=>{const W=I.raw.split("");let P=0;for(const J of W)if(J===`
`&&(P+=1),P>1)return!0;return!1});!f.loose&&B.length&&S&&(f.loose=!0,f.items[d].loose=!0)}return f}}html(t){const e=this.rules.block.html.exec(t);if(e){const r={type:"html",raw:e[0],pre:!this.options.sanitizer&&(e[1]==="pre"||e[1]==="script"||e[1]==="style"),text:e[0]};return this.options.sanitize&&(r.type="paragraph",r.text=this.options.sanitizer?this.options.sanitizer(e[0]):q1(e[0]),r.tokens=[],this.lexer.inline(r.text,r.tokens)),r}}def(t){const e=this.rules.block.def.exec(t);if(e){e[3]&&(e[3]=e[3].substring(1,e[3].length-1));const r=e[1].toLowerCase().replace(/\s+/g," ");return{type:"def",tag:r,raw:e[0],href:e[2],title:e[3]}}}table(t){const e=this.rules.block.table.exec(t);if(e){const r={type:"table",header:Bo(e[1]).map(l=>({text:l})),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(r.header.length===r.align.length){r.raw=e[0];let l=r.align.length,i,h,d,u;for(i=0;i<l;i++)/^ *-+: *$/.test(r.align[i])?r.align[i]="right":/^ *:-+: *$/.test(r.align[i])?r.align[i]="center":/^ *:-+ *$/.test(r.align[i])?r.align[i]="left":r.align[i]=null;for(l=r.rows.length,i=0;i<l;i++)r.rows[i]=Bo(r.rows[i],r.header.length).map(w=>({text:w}));for(l=r.header.length,h=0;h<l;h++)r.header[h].tokens=[],this.lexer.inline(r.header[h].text,r.header[h].tokens);for(l=r.rows.length,h=0;h<l;h++)for(u=r.rows[h],d=0;d<u.length;d++)u[d].tokens=[],this.lexer.inline(u[d].text,u[d].tokens);return r}}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e){const r={type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const r={type:"paragraph",raw:e[0],text:e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}text(t){const e=this.rules.block.text.exec(t);if(e){const r={type:"text",raw:e[0],text:e[0],tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:q1(e[1])}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):q1(e[0]):e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const r=e[2].trim();if(!this.options.pedantic&&/^</.test(r)){if(!/>$/.test(r))return;const h=bt(r.slice(0,-1),"\\");if((r.length-h.length)%2===0)return}else{const h=H6(e[2],"()");if(h>-1){const u=(e[0].indexOf("!")===0?5:4)+e[1].length+h;e[2]=e[2].substring(0,h),e[0]=e[0].substring(0,u).trim(),e[3]=""}}let l=e[2],i="";if(this.options.pedantic){const h=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(l);h&&(l=h[1],i=h[3])}else i=e[3]?e[3].slice(1,-1):"";return l=l.trim(),/^</.test(l)&&(this.options.pedantic&&!/>$/.test(r)?l=l.slice(1):l=l.slice(1,-1)),Lo(e,{href:l&&l.replace(this.rules.inline._escapes,"$1"),title:i&&i.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(t,e){let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let l=(r[2]||r[1]).replace(/\s+/g," ");if(l=e[l.toLowerCase()],!l||!l.href){const i=r[0].charAt(0);return{type:"text",raw:i,text:i}}return Lo(r,l,r[0],this.lexer)}}emStrong(t,e,r=""){let l=this.rules.inline.emStrong.lDelim.exec(t);if(!l||l[3]&&r.match(/[\p{L}\p{N}]/u))return;const i=l[1]||l[2]||"";if(!i||i&&(r===""||this.rules.inline.punctuation.exec(r))){const h=l[0].length-1;let d,u,w=h,v=0;const k=l[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(k.lastIndex=0,e=e.slice(-1*t.length+h);(l=k.exec(e))!=null;){if(d=l[1]||l[2]||l[3]||l[4]||l[5]||l[6],!d)continue;if(u=d.length,l[3]||l[4]){w+=u;continue}else if((l[5]||l[6])&&h%3&&!((h+u)%3)){v+=u;continue}if(w-=u,w>0)continue;if(u=Math.min(u,u+w+v),Math.min(h,u)%2){const g=t.slice(1,h+l.index+u);return{type:"em",raw:t.slice(0,h+l.index+u+1),text:g,tokens:this.lexer.inlineTokens(g,[])}}const _=t.slice(2,h+l.index+u-1);return{type:"strong",raw:t.slice(0,h+l.index+u+1),text:_,tokens:this.lexer.inlineTokens(_,[])}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let r=e[2].replace(/\n/g," ");const l=/[^ ]/.test(r),i=/^ /.test(r)&&/ $/.test(r);return l&&i&&(r=r.substring(1,r.length-1)),r=q1(r,!0),{type:"codespan",raw:e[0],text:r}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2],[])}}autolink(t,e){const r=this.rules.inline.autolink.exec(t);if(r){let l,i;return r[2]==="@"?(l=q1(this.options.mangle?e(r[1]):r[1]),i="mailto:"+l):(l=q1(r[1]),i=l),{type:"link",raw:r[0],text:l,href:i,tokens:[{type:"text",raw:l,text:l}]}}}url(t,e){let r;if(r=this.rules.inline.url.exec(t)){let l,i;if(r[2]==="@")l=q1(this.options.mangle?e(r[0]):r[0]),i="mailto:"+l;else{let h;do h=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(h!==r[0]);l=q1(r[0]),r[1]==="www."?i="http://"+l:i=l}return{type:"link",raw:r[0],text:l,href:i,tokens:[{type:"text",raw:l,text:l}]}}}inlineText(t,e){const r=this.rules.inline.text.exec(t);if(r){let l;return this.lexer.state.inRawBlock?l=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):q1(r[0]):r[0]:l=q1(this.options.smartypants?e(r[0]):r[0]),{type:"text",raw:r[0],text:l}}}}const s1={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:Pt,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};s1._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;s1._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;s1.def=R1(s1.def).replace("label",s1._label).replace("title",s1._title).getRegex();s1.bullet=/(?:[*+-]|\d{1,9}[.)])/;s1.listItemStart=R1(/^( *)(bull) */).replace("bull",s1.bullet).getRegex();s1.list=R1(s1.list).replace(/bull/g,s1.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+s1.def.source+")").getRegex();s1._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";s1._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;s1.html=R1(s1.html,"i").replace("comment",s1._comment).replace("tag",s1._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();s1.paragraph=R1(s1._paragraph).replace("hr",s1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",s1._tag).getRegex();s1.blockquote=R1(s1.blockquote).replace("paragraph",s1.paragraph).getRegex();s1.normal=_2({},s1);s1.gfm=_2({},s1.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"});s1.gfm.table=R1(s1.gfm.table).replace("hr",s1.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",s1._tag).getRegex();s1.gfm.paragraph=R1(s1._paragraph).replace("hr",s1.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",s1.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",s1._tag).getRegex();s1.pedantic=_2({},s1.normal,{html:R1(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",s1._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Pt,paragraph:R1(s1.normal._paragraph).replace("hr",s1.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",s1.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const N={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:Pt,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:Pt,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};N._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";N.punctuation=R1(N.punctuation).replace(/punctuation/g,N._punctuation).getRegex();N.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;N.escapedEmSt=/\\\*|\\_/g;N._comment=R1(s1._comment).replace("(?:-->|$)","-->").getRegex();N.emStrong.lDelim=R1(N.emStrong.lDelim).replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimAst=R1(N.emStrong.rDelimAst,"g").replace(/punct/g,N._punctuation).getRegex();N.emStrong.rDelimUnd=R1(N.emStrong.rDelimUnd,"g").replace(/punct/g,N._punctuation).getRegex();N._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;N._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;N._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;N.autolink=R1(N.autolink).replace("scheme",N._scheme).replace("email",N._email).getRegex();N._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;N.tag=R1(N.tag).replace("comment",N._comment).replace("attribute",N._attribute).getRegex();N._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;N._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;N._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;N.link=R1(N.link).replace("label",N._label).replace("href",N._href).replace("title",N._title).getRegex();N.reflink=R1(N.reflink).replace("label",N._label).replace("ref",s1._label).getRegex();N.nolink=R1(N.nolink).replace("ref",s1._label).getRegex();N.reflinkSearch=R1(N.reflinkSearch,"g").replace("reflink",N.reflink).replace("nolink",N.nolink).getRegex();N.normal=_2({},N);N.pedantic=_2({},N.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:R1(/^!?\[(label)\]\((.*?)\)/).replace("label",N._label).getRegex(),reflink:R1(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",N._label).getRegex()});N.gfm=_2({},N.normal,{escape:R1(N.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/});N.gfm.url=R1(N.gfm.url,"i").replace("email",N.gfm._extended_email).getRegex();N.breaks=_2({},N.gfm,{br:R1(N.br).replace("{2,}","*").getRegex(),text:R1(N.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});function j6(n){return n.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201C").replace(/"/g,"\u201D").replace(/\.{3}/g,"\u2026")}function Ho(n){let t="",e,r;const l=n.length;for(e=0;e<l;e++)r=n.charCodeAt(e),Math.random()>.5&&(r="x"+r.toString(16)),t+="&#"+r+";";return t}class y2{constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||bn,this.options.tokenizer=this.options.tokenizer||new us,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:s1.normal,inline:N.normal};this.options.pedantic?(e.block=s1.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=s1.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}static get rules(){return{block:s1,inline:N}}static lex(t,e){return new y2(e).lex(t)}static lexInline(t,e){return new y2(e).inlineTokens(t)}lex(t){t=t.replace(/\r\n|\r/g,`
`),this.blockTokens(t,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(t,e=[]){this.options.pedantic?t=t.replace(/\t/g,"    ").replace(/^ +$/gm,""):t=t.replace(/^( *)(\t+)/gm,(d,u,w)=>u+"    ".repeat(w.length));let r,l,i,h;for(;t;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(d=>(r=d.call({lexer:this},t,e))?(t=t.substring(r.raw.length),e.push(r),!0):!1))){if(r=this.tokenizer.space(t)){t=t.substring(r.raw.length),r.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(r);continue}if(r=this.tokenizer.code(t)){t=t.substring(r.raw.length),l=e[e.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(r);continue}if(r=this.tokenizer.fences(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.heading(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.hr(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.blockquote(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.list(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.html(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.def(t)){t=t.substring(r.raw.length),l=e[e.length-1],l&&(l.type==="paragraph"||l.type==="text")?(l.raw+=`
`+r.raw,l.text+=`
`+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=l.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});continue}if(r=this.tokenizer.table(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.lheading(t)){t=t.substring(r.raw.length),e.push(r);continue}if(i=t,this.options.extensions&&this.options.extensions.startBlock){let d=1/0;const u=t.slice(1);let w;this.options.extensions.startBlock.forEach(function(v){w=v.call({lexer:this},u),typeof w=="number"&&w>=0&&(d=Math.min(d,w))}),d<1/0&&d>=0&&(i=t.substring(0,d+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i))){l=e[e.length-1],h&&l.type==="paragraph"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(r),h=i.length!==t.length,t=t.substring(r.raw.length);continue}if(r=this.tokenizer.text(t)){t=t.substring(r.raw.length),l=e[e.length-1],l&&l.type==="text"?(l.raw+=`
`+r.raw,l.text+=`
`+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=l.text):e.push(r);continue}if(t){const d="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(d);break}else throw new Error(d)}}return this.state.top=!0,e}inline(t,e){this.inlineQueue.push({src:t,tokens:e})}inlineTokens(t,e=[]){let r,l,i,h=t,d,u,w;if(this.tokens.links){const v=Object.keys(this.tokens.links);if(v.length>0)for(;(d=this.tokenizer.rules.inline.reflinkSearch.exec(h))!=null;)v.includes(d[0].slice(d[0].lastIndexOf("[")+1,-1))&&(h=h.slice(0,d.index)+"["+yo("a",d[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(d=this.tokenizer.rules.inline.blockSkip.exec(h))!=null;)h=h.slice(0,d.index)+"["+yo("a",d[0].length-2)+"]"+h.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(d=this.tokenizer.rules.inline.escapedEmSt.exec(h))!=null;)h=h.slice(0,d.index)+"++"+h.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;t;)if(u||(w=""),u=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(v=>(r=v.call({lexer:this},t,e))?(t=t.substring(r.raw.length),e.push(r),!0):!1))){if(r=this.tokenizer.escape(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.tag(t)){t=t.substring(r.raw.length),l=e[e.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):e.push(r);continue}if(r=this.tokenizer.link(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(r.raw.length),l=e[e.length-1],l&&r.type==="text"&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):e.push(r);continue}if(r=this.tokenizer.emStrong(t,h,w)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.codespan(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.br(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.del(t)){t=t.substring(r.raw.length),e.push(r);continue}if(r=this.tokenizer.autolink(t,Ho)){t=t.substring(r.raw.length),e.push(r);continue}if(!this.state.inLink&&(r=this.tokenizer.url(t,Ho))){t=t.substring(r.raw.length),e.push(r);continue}if(i=t,this.options.extensions&&this.options.extensions.startInline){let v=1/0;const k=t.slice(1);let _;this.options.extensions.startInline.forEach(function(g){_=g.call({lexer:this},k),typeof _=="number"&&_>=0&&(v=Math.min(v,_))}),v<1/0&&v>=0&&(i=t.substring(0,v+1))}if(r=this.tokenizer.inlineText(i,j6)){t=t.substring(r.raw.length),r.raw.slice(-1)!=="_"&&(w=r.raw.slice(-1)),u=!0,l=e[e.length-1],l&&l.type==="text"?(l.raw+=r.raw,l.text+=r.text):e.push(r);continue}if(t){const v="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(v);break}else throw new Error(v)}}return e}}class ws{constructor(t){this.options=t||bn}code(t,e,r){const l=(e||"").match(/\S*/)[0];if(this.options.highlight){const i=this.options.highlight(t,l);i!=null&&i!==t&&(r=!0,t=i)}return t=t.replace(/\n$/,"")+`
`,l?'<pre><code class="'+this.options.langPrefix+q1(l,!0)+'">'+(r?t:q1(t,!0))+`</code></pre>
`:"<pre><code>"+(r?t:q1(t,!0))+`</code></pre>
`}blockquote(t){return`<blockquote>
${t}</blockquote>
`}html(t){return t}heading(t,e,r,l){if(this.options.headerIds){const i=this.options.headerPrefix+l.slug(r);return`<h${e} id="${i}">${t}</h${e}>
`}return`<h${e}>${t}</h${e}>
`}hr(){return this.options.xhtml?`<hr/>
`:`<hr>
`}list(t,e,r){const l=e?"ol":"ul",i=e&&r!==1?' start="'+r+'"':"";return"<"+l+i+`>
`+t+"</"+l+`>
`}listitem(t){return`<li>${t}</li>
`}checkbox(t){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(t){return`<p>${t}</p>
`}table(t,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+e+`</table>
`}tablerow(t){return`<tr>
${t}</tr>
`}tablecell(t,e){const r=e.header?"th":"td";return(e.align?`<${r} align="${e.align}">`:`<${r}>`)+t+`</${r}>
`}strong(t){return`<strong>${t}</strong>`}em(t){return`<em>${t}</em>`}codespan(t){return`<code>${t}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(t){return`<del>${t}</del>`}link(t,e,r){if(t=bo(this.options.sanitize,this.options.baseUrl,t),t===null)return r;let l='<a href="'+q1(t)+'"';return e&&(l+=' title="'+e+'"'),l+=">"+r+"</a>",l}image(t,e,r){if(t=bo(this.options.sanitize,this.options.baseUrl,t),t===null)return r;let l=`<img src="${t}" alt="${r}"`;return e&&(l+=` title="${e}"`),l+=this.options.xhtml?"/>":">",l}text(t){return t}}class T0{strong(t){return t}em(t){return t}codespan(t){return t}del(t){return t}html(t){return t}text(t){return t}link(t,e,r){return""+r}image(t,e,r){return""+r}br(){return""}}class D0{constructor(){this.seen={}}serialize(t){return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(t,e){let r=t,l=0;if(this.seen.hasOwnProperty(r)){l=this.seen[t];do l++,r=t+"-"+l;while(this.seen.hasOwnProperty(r))}return e||(this.seen[t]=l,this.seen[r]=0),r}slug(t,e={}){const r=this.serialize(t);return this.getNextSafeSlug(r,e.dryrun)}}class L2{constructor(t){this.options=t||bn,this.options.renderer=this.options.renderer||new ws,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new T0,this.slugger=new D0}static parse(t,e){return new L2(e).parse(t)}static parseInline(t,e){return new L2(e).parseInline(t)}parse(t,e=!0){let r="",l,i,h,d,u,w,v,k,_,g,x,C,b,f,M,L,B,S,I;const W=t.length;for(l=0;l<W;l++){if(g=t[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[g.type]&&(I=this.options.extensions.renderers[g.type].call({parser:this},g),I!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(g.type))){r+=I||"";continue}switch(g.type){case"space":continue;case"hr":{r+=this.renderer.hr();continue}case"heading":{r+=this.renderer.heading(this.parseInline(g.tokens),g.depth,R0(this.parseInline(g.tokens,this.textRenderer)),this.slugger);continue}case"code":{r+=this.renderer.code(g.text,g.lang,g.escaped);continue}case"table":{for(k="",v="",d=g.header.length,i=0;i<d;i++)v+=this.renderer.tablecell(this.parseInline(g.header[i].tokens),{header:!0,align:g.align[i]});for(k+=this.renderer.tablerow(v),_="",d=g.rows.length,i=0;i<d;i++){for(w=g.rows[i],v="",u=w.length,h=0;h<u;h++)v+=this.renderer.tablecell(this.parseInline(w[h].tokens),{header:!1,align:g.align[h]});_+=this.renderer.tablerow(v)}r+=this.renderer.table(k,_);continue}case"blockquote":{_=this.parse(g.tokens),r+=this.renderer.blockquote(_);continue}case"list":{for(x=g.ordered,C=g.start,b=g.loose,d=g.items.length,_="",i=0;i<d;i++)M=g.items[i],L=M.checked,B=M.task,f="",M.task&&(S=this.renderer.checkbox(L),b?M.tokens.length>0&&M.tokens[0].type==="paragraph"?(M.tokens[0].text=S+" "+M.tokens[0].text,M.tokens[0].tokens&&M.tokens[0].tokens.length>0&&M.tokens[0].tokens[0].type==="text"&&(M.tokens[0].tokens[0].text=S+" "+M.tokens[0].tokens[0].text)):M.tokens.unshift({type:"text",text:S}):f+=S),f+=this.parse(M.tokens,b),_+=this.renderer.listitem(f,B,L);r+=this.renderer.list(_,x,C);continue}case"html":{r+=this.renderer.html(g.text);continue}case"paragraph":{r+=this.renderer.paragraph(this.parseInline(g.tokens));continue}case"text":{for(_=g.tokens?this.parseInline(g.tokens):g.text;l+1<W&&t[l+1].type==="text";)g=t[++l],_+=`
`+(g.tokens?this.parseInline(g.tokens):g.text);r+=e?this.renderer.paragraph(_):_;continue}default:{const P='Token with "'+g.type+'" type was not found.';if(this.options.silent){console.error(P);return}else throw new Error(P)}}}return r}parseInline(t,e){e=e||this.renderer;let r="",l,i,h;const d=t.length;for(l=0;l<d;l++){if(i=t[l],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[i.type]&&(h=this.options.extensions.renderers[i.type].call({parser:this},i),h!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type))){r+=h||"";continue}switch(i.type){case"escape":{r+=e.text(i.text);break}case"html":{r+=e.html(i.text);break}case"link":{r+=e.link(i.href,i.title,this.parseInline(i.tokens,e));break}case"image":{r+=e.image(i.href,i.title,i.text);break}case"strong":{r+=e.strong(this.parseInline(i.tokens,e));break}case"em":{r+=e.em(this.parseInline(i.tokens,e));break}case"codespan":{r+=e.codespan(i.text);break}case"br":{r+=e.br();break}case"del":{r+=e.del(this.parseInline(i.tokens,e));break}case"text":{r+=e.text(i.text);break}default:{const u='Token with "'+i.type+'" type was not found.';if(this.options.silent){console.error(u);return}else throw new Error(u)}}}return r}}function c1(n,t,e){if(typeof n=="undefined"||n===null)throw new Error("marked(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");if(typeof t=="function"&&(e=t,t=null),t=_2({},c1.defaults,t||{}),P0(t),e){const r=t.highlight;let l;try{l=y2.lex(n,t)}catch(d){return e(d)}const i=function(d){let u;if(!d)try{t.walkTokens&&c1.walkTokens(l,t.walkTokens),u=L2.parse(l,t)}catch(w){d=w}return t.highlight=r,d?e(d):e(null,u)};if(!r||r.length<3||(delete t.highlight,!l.length))return i();let h=0;c1.walkTokens(l,function(d){d.type==="code"&&(h++,setTimeout(()=>{r(d.text,d.lang,function(u,w){if(u)return i(u);w!=null&&w!==d.text&&(d.text=w,d.escaped=!0),h--,h===0&&i()})},0))}),h===0&&i();return}try{const r=y2.lex(n,t);return t.walkTokens&&c1.walkTokens(r,t.walkTokens),L2.parse(r,t)}catch(r){if(r.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+q1(r.message+"",!0)+"</pre>";throw r}}c1.options=c1.setOptions=function(n){return _2(c1.defaults,n),_6(c1.defaults),c1};c1.getDefaults=A0;c1.defaults=bn;c1.use=function(...n){const t=_2({},...n),e=c1.defaults.extensions||{renderers:{},childTokens:{}};let r;n.forEach(l=>{if(l.extensions&&(r=!0,l.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if(i.renderer){const h=e.renderers?e.renderers[i.name]:null;h?e.renderers[i.name]=function(...d){let u=i.renderer.apply(this,d);return u===!1&&(u=h.apply(this,d)),u}:e.renderers[i.name]=i.renderer}if(i.tokenizer){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");e[i.level]?e[i.level].unshift(i.tokenizer):e[i.level]=[i.tokenizer],i.start&&(i.level==="block"?e.startBlock?e.startBlock.push(i.start):e.startBlock=[i.start]:i.level==="inline"&&(e.startInline?e.startInline.push(i.start):e.startInline=[i.start]))}i.childTokens&&(e.childTokens[i.name]=i.childTokens)})),l.renderer){const i=c1.defaults.renderer||new ws;for(const h in l.renderer){const d=i[h];i[h]=(...u)=>{let w=l.renderer[h].apply(i,u);return w===!1&&(w=d.apply(i,u)),w}}t.renderer=i}if(l.tokenizer){const i=c1.defaults.tokenizer||new us;for(const h in l.tokenizer){const d=i[h];i[h]=(...u)=>{let w=l.tokenizer[h].apply(i,u);return w===!1&&(w=d.apply(i,u)),w}}t.tokenizer=i}if(l.walkTokens){const i=c1.defaults.walkTokens;t.walkTokens=function(h){l.walkTokens.call(this,h),i&&i.call(this,h)}}r&&(t.extensions=e),c1.setOptions(t)})};c1.walkTokens=function(n,t){for(const e of n)switch(t.call(c1,e),e.type){case"table":{for(const r of e.header)c1.walkTokens(r.tokens,t);for(const r of e.rows)for(const l of r)c1.walkTokens(l.tokens,t);break}case"list":{c1.walkTokens(e.items,t);break}default:c1.defaults.extensions&&c1.defaults.extensions.childTokens&&c1.defaults.extensions.childTokens[e.type]?c1.defaults.extensions.childTokens[e.type].forEach(function(r){c1.walkTokens(e[r],t)}):e.tokens&&c1.walkTokens(e.tokens,t)}};c1.parseInline=function(n,t){if(typeof n=="undefined"||n===null)throw new Error("marked.parseInline(): input parameter is undefined or null");if(typeof n!="string")throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected");t=_2({},c1.defaults,t||{}),P0(t);try{const e=y2.lexInline(n,t);return t.walkTokens&&c1.walkTokens(e,t.walkTokens),L2.parseInline(e,t)}catch(e){if(e.message+=`
Please report this to https://github.com/markedjs/marked.`,t.silent)return"<p>An error occurred:</p><pre>"+q1(e.message+"",!0)+"</pre>";throw e}};c1.Parser=L2;c1.parser=L2.parse;c1.Renderer=ws;c1.TextRenderer=T0;c1.Lexer=y2;c1.lexer=y2.lex;c1.Tokenizer=us;c1.Slugger=D0;c1.parse=c1;c1.options;c1.setOptions;c1.use;c1.walkTokens;c1.parseInline;L2.parse;y2.lex;function Nn(n){return!!M4()&&(C4(n),!0)}var Vo;const tt=typeof window!="undefined",le=()=>{};function F0(n,t){return function(...e){n(()=>t.apply(this,e),{fn:t,thisArg:this,args:e})}}tt&&((Vo=window==null?void 0:window.navigator)==null?void 0:Vo.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const E0=n=>n();function S6(n,t=200,e={}){return F0(function(r,l={}){let i,h;return d=>{const u=N1(r),w=N1(l.maxWait);if(i&&clearTimeout(i),u<=0||w!==void 0&&w<=0)return h&&(clearTimeout(h),h=null),d();w&&!h&&(h=setTimeout(()=>{i&&clearTimeout(i),h=null,d()},w)),i=setTimeout(()=>{h&&clearTimeout(h),h=null,d()},u)}}(t,e),n)}var jo=Object.getOwnPropertySymbols,A6=Object.prototype.hasOwnProperty,R6=Object.prototype.propertyIsEnumerable;function P6(n,t,e={}){const r=e,{eventFilter:l=E0}=r,i=((h,d)=>{var u={};for(var w in h)A6.call(h,w)&&d.indexOf(w)<0&&(u[w]=h[w]);if(h!=null&&jo)for(var w of jo(h))d.indexOf(w)<0&&R6.call(h,w)&&(u[w]=h[w]);return u})(r,["eventFilter"]);return W1(n,F0(l,t),i)}var T6=Object.defineProperty,D6=Object.defineProperties,F6=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertySymbols,So=Object.prototype.hasOwnProperty,Ao=Object.prototype.propertyIsEnumerable,Ro=(n,t,e)=>t in n?T6(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;function E6(n,t,e={}){const r=e,{eventFilter:l}=r,i=((_,g)=>{var x={};for(var C in _)So.call(_,C)&&g.indexOf(C)<0&&(x[C]=_[C]);if(_!=null&&ft)for(var C of ft(_))g.indexOf(C)<0&&Ao.call(_,C)&&(x[C]=_[C]);return x})(r,["eventFilter"]),{eventFilter:h,pause:d,resume:u,isActive:w}=function(_=E0){const g=Y(!0);return{isActive:g,pause:function(){g.value=!1},resume:function(){g.value=!0},eventFilter:(...x)=>{g.value&&_(...x)}}}(l),v=P6(n,t,(k=((_,g)=>{for(var x in g||(g={}))So.call(g,x)&&Ro(_,x,g[x]);if(ft)for(var x of ft(g))Ao.call(g,x)&&Ro(_,x,g[x]);return _})({},i),D6(k,F6({eventFilter:h}))));var k;return{stop:v,pause:d,resume:u,isActive:w}}const Tt=tt?window:void 0,I6=tt?window.document:void 0;function O6(...n){let t,e,r,l;if(typeof n[0]=="string"?([e,r,l]=n,t=Tt):[t,e,r,l]=n,!t)return le;let i=le;const h=W1(()=>function(u){var w;const v=N1(u);return(w=v==null?void 0:v.$el)!=null?w:v}(t),u=>{i(),u&&(u.addEventListener(e,r,l),i=()=>{u.removeEventListener(e,r,l),i=le})},{immediate:!0,flush:"post"}),d=()=>{h(),i()};return Nn(d),d}const Fe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Ee="__vueuse_ssr_handlers__";Fe[Ee]=Fe[Ee]||{};const q6=Fe[Ee],G6={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}};function et(n,t,e,r={}){var l;const{flush:i="pre",deep:h=!0,listenToStorageChanges:d=!0,writeDefaults:u=!0,shallow:w,window:v=Tt,eventFilter:k,onError:_=B=>{console.error(B)}}=r,g=(w?z3:Y)(t);if(!e)try{e=function(B,S){return q6[B]||S}("getDefaultStorage",()=>{var B;return(B=Tt)==null?void 0:B.localStorage})()}catch(B){_(B)}if(!e)return g;const x=N1(t),C=function(B){return B==null?"any":B instanceof Set?"set":B instanceof Map?"map":B instanceof Date?"date":typeof B=="boolean"?"boolean":typeof B=="string"?"string":typeof B=="object"||Array.isArray(B)?"object":Number.isNaN(B)?"any":"number"}(x),b=(l=r.serializer)!=null?l:G6[C],{pause:f,resume:M}=E6(g,()=>function(B){try{B==null?e.removeItem(n):e.setItem(n,b.write(B))}catch(S){_(S)}}(g.value),{flush:i,deep:h,eventFilter:k});return v&&d&&O6(v,"storage",L),L(),g;function L(B){B&&B.key!==n||(g.value=function(S){if(!S||S.key===n){f();try{const I=S?S.newValue:e.getItem(n);return I==null?(u&&x!==null&&e.setItem(n,b.write(x)),x):typeof I!="string"?I:b.read(I)}catch(I){_(I)}finally{M()}}}(B))}}var Po,Sn,N6=Object.defineProperty,To=Object.getOwnPropertySymbols,U6=Object.prototype.hasOwnProperty,W6=Object.prototype.propertyIsEnumerable,Do=(n,t,e)=>t in n?N6(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;function K6(n={}){const{controls:t=!1,interval:e="requestAnimationFrame"}=n,r=Y(new Date),l=()=>r.value=new Date,i=e==="requestAnimationFrame"?function(h,d={}){const{immediate:u=!0,window:w=Tt}=d,v=Y(!1);let k=null;function _(){v.value&&w&&(h(),k=w.requestAnimationFrame(_))}function g(){!v.value&&w&&(v.value=!0,_())}function x(){v.value=!1,k!=null&&w&&(w.cancelAnimationFrame(k),k=null)}return u&&g(),Nn(x),{isActive:v,pause:x,resume:g}}(l,{immediate:!0}):function(h,d=1e3,u={}){const{immediate:w=!0,immediateCallback:v=!1}=u;let k=null;const _=Y(!1);function g(){k&&(clearInterval(k),k=null)}function x(){_.value=!1,g()}function C(){N1(d)<=0||(_.value=!0,v&&h(),g(),k=setInterval(h,N1(d)))}return w&&tt&&C(),U1(d)&&Nn(W1(d,()=>{w&&tt&&C()})),Nn(x),{isActive:_,pause:x,resume:C}}(l,e,{immediate:!0});return t?((h,d)=>{for(var u in d||(d={}))U6.call(d,u)&&Do(h,u,d[u]);if(To)for(var u of To(d))W6.call(d,u)&&Do(h,u,d[u]);return h})({now:r},i):r}(Sn=Po||(Po={})).UP="UP",Sn.RIGHT="RIGHT",Sn.DOWN="DOWN",Sn.LEFT="LEFT",Sn.NONE="NONE";let J6=0;const vs=({size:n})=>q("svg",{width:n,height:n,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},q("circle",{cx:50,cy:50,fill:"none",stroke:"currentColor",strokeWidth:"4",r:"40","stroke-dasharray":"85 30"},q("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})));var Zt=(n,t)=>{const e=n.__vccOpts||n;for(const[r,l]of t)e[r]=l;return e};const Y6=a({name:"ImageWall",components:{LoadingIcon:vs},props:{items:{type:Array,default:()=>[]},columnWidth:{type:Number,default:300},gap:{type:Number,default:0}},emit:["insert"],setup(n){let t=null;const e=Y(null),r=Y({}),l=Y([]),i=()=>{const u=Math.floor((e.value.getBoundingClientRect().width+n.gap)/(n.columnWidth+n.gap));return u>0?u:1},h=async u=>{var v;if(u>=n.items.length)return;await es();const w=Array.from(((v=e.value)==null?void 0:v.children)||[]).reduce((k,_)=>_.getBoundingClientRect().height<k.getBoundingClientRect().height?_:k);l.value[Number(w.dataset.index)].push(u),await h(u+1)},d=async(u=!1)=>{if(l.value.length===i()&&!u)return;var w;l.value=(w=i(),new Array(w).fill(null).map(()=>[]));const v=window.scrollY;await h(0),window.scrollTo({top:v})};return W1(()=>[n.items],()=>{r.value={},d(!0)}),W1(()=>[n.columnWidth,n.gap],()=>d()),Y1(()=>{d(!0),t=new ResizeObserver(()=>d()),t.observe(e.value)}),lt(()=>t.unobserve(e.value)),{columns:l,state:r,wall:e}}}),Z6=["data-index"],Q6=["src","title","onLoad","onClick"];var X6=Zt(Y6,[["render",function(n,t,e,r,l,i){const h=E1("LoadingIcon");return o(),c("div",{ref:"wall",class:"wl-gallery",style:m2({gap:`${n.gap}px`})},[(o(!0),c(H1,null,b2(n.columns,(d,u)=>(o(),c("div",{key:u,class:"wl-gallery-column","data-index":u,style:m2({gap:`${n.gap}px`})},[(o(!0),c(H1,null,b2(d,w=>(o(),c(H1,{key:w},[n.state[n.items[w].src]?v1("v-if",!0):(o(),w2(h,{key:0,size:36,style:{margin:"20px auto"}})),s("img",{class:"wl-gallery-item",src:n.items[w].src,title:n.items[w].title,loading:"lazy",onLoad:v=>n.state[n.items[w].src]=!0,onClick:v=>n.$emit("insert",`![](${n.items[w].src})`)},null,40,Q6)],64))),128))],12,Z6))),128))],4)}],["__file","ImageWall.vue"]]);const nl=["nick","mail","link"],Fo=n=>n.filter(t=>nl.includes(t)),tl=n=>new Promise((t,e)=>{const r=new FileReader;r.readAsDataURL(n),r.onload=()=>{var l;return t(((l=r.result)==null?void 0:l.toString())||"")},r.onerror=e}),el=n=>n===!0?'<p class="wl-tex">Tex is not available in preview</p>':'<span class="wl-tex">Tex is not available in preview</span>',sl=()=>{const n={next:""},t=({keyword:e,pos:r})=>{const l=new URLSearchParams("media_filter=minimal");return l.set("key","PAY5JLFIH6V6"),l.set("limit","20"),l.set("pos",r||""),l.set("q",e),fetch(`https://g.tenor.com/v1/search?${l.toString()}`,{headers:{"Content-Type":"application/json"}}).then(i=>i.json()).catch(()=>({next:r||"",results:[]}))};return{search:(e="")=>t({keyword:e}).then(r=>(n.next=r.next,r.results.map(l=>({title:l.title,src:l.media[0].tinygif.url})))),more:e=>t({keyword:e,pos:n.next}).then(r=>(n.next=r.next,r.results.map(l=>({title:l.title,src:l.media[0].tinygif.url}))))}},ol=new RegExp(`(${/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source}|${/</.source})|((?:${/(?:^|\s)\/\/(.+?)$/gm.source})|(?:${/\/\*([\S\s]*?)\*\//gm.source}))`,"gmi"),Eo=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],ie={},cl=n=>{let t=0;return n.replace(ol,(e,r,l)=>{if(l)return`<span style="color: slategray">${l}</span>`;if(r==="<")return"&lt;";let i;ie[r]?i=ie[r]:(i=Eo[t],ie[r]=i);const h=`<span style="color: #${i}">${r}</span>`;return t=++t%Eo.length,h})},al=["nick","nickError","mail","mailError","link","optional","placeholder","sofa","submit","like","cancelLike","reply","cancelReply","comment","refresh","more","preview","emoji","uploadImage","seconds","minutes","hours","days","now","uploading","login","logout","admin","sticky","word","wordHint","anonymous","level0","level1","level2","level3","level4","level5","gif","gifSearchPlaceholder"],Bn=n=>Object.fromEntries(n.map((t,e)=>[al[e],t]));var pe=Bn(["NickName","NickName cannot be less than 3 bytes.","E-Mail","Please confirm your email address.","Website","Optional","Comment here...","No comment yet.","Submit","Like","Cancel like","Reply","Cancel reply","Comments","Refresh","Load More...","Preview","Emoji","Upload Image","seconds ago","minutes ago","hours ago","days ago","just now","Uploading","Login","logout","Admin","Sticky","Words",`Please input comments between $0 and $1 words!
 Current word number: $2`,"Anonymous","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Search GIF"]),he=Bn(["\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0","3\u30D0\u30A4\u30C8\u4EE5\u4E0A\u306E\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3092\u3054\u5165\u529B\u304F\u3060\u3055\u3044.","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u3054\u78BA\u8A8D\u304F\u3060\u3055\u3044.","\u30B5\u30A4\u30C8","\u30AA\u30D7\u30B7\u30E7\u30F3","\u3053\u3053\u306B\u30B3\u30E1\u30F3\u30C8","\u30B3\u30E1\u30F3\u30C8\u3057\u307E\u3057\u3087\u3046~","\u63D0\u51FA\u3059\u308B","Like","Cancel like","\u8FD4\u4FE1\u3059\u308B","\u30AD\u30E3\u30F3\u30BB\u30EB","\u30B3\u30E1\u30F3\u30C8","\u66F4\u65B0","\u3055\u3089\u306B\u8AAD\u307F\u8FBC\u3080","\u30D7\u30EC\u30D3\u30E5\u30FC","\u7D75\u6587\u5B57","\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u79D2\u524D","\u5206\u524D","\u6642\u9593\u524D","\u65E5\u524D","\u305F\u3063\u3060\u4ECA","\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","\u30ED\u30B0\u30A4\u30F3\u3059\u308B","\u30ED\u30B0\u30A2\u30A6\u30C8","\u7BA1\u7406\u8005","\u30C8\u30C3\u30D7\u306B\u7F6E\u304F","\u30EF\u30FC\u30C9",`\u30B3\u30E1\u30F3\u30C8\u306F $0 \u304B\u3089 $1 \u30EF\u30FC\u30C9\u306E\u9593\u3067\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093!
 \u73FE\u5728\u306E\u5358\u8A9E\u756A\u53F7: $2`,"\u533F\u540D","\u3046\u3048\u306B\u3093","\u306A\u304B\u306B\u3093","\u3057\u3082\u304A\u3057","\u7279\u306B\u3057\u3082\u304A\u3057","\u304B\u3052","\u306A\u306C\u3057","GIF","\u63A2\u3059 GIF"]),de=Bn(["\u6635\u79F0","\u6635\u79F0\u4E0D\u80FD\u5C11\u4E8E3\u4E2A\u5B57\u7B26","\u90AE\u7BB1","\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u4EF6\u5730\u5740","\u7F51\u5740","\u53EF\u9009","\u6B22\u8FCE\u8BC4\u8BBA","\u6765\u53D1\u8BC4\u8BBA\u5427~","\u63D0\u4EA4","\u559C\u6B22","\u53D6\u6D88\u559C\u6B22","\u56DE\u590D","\u53D6\u6D88\u56DE\u590D","\u8BC4\u8BBA","\u5237\u65B0","\u52A0\u8F7D\u66F4\u591A...","\u9884\u89C8","\u8868\u60C5","\u4E0A\u4F20\u56FE\u7247","\u79D2\u524D","\u5206\u949F\u524D","\u5C0F\u65F6\u524D","\u5929\u524D","\u521A\u521A","\u6B63\u5728\u4E0A\u4F20","\u767B\u5F55","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9876","\u5B57",`\u8BC4\u8BBA\u5B57\u6570\u5E94\u5728 $0 \u5230 $1 \u5B57\u4E4B\u95F4\uFF01
\u5F53\u524D\u5B57\u6570\uFF1A$2`,"\u533F\u540D","\u6F5C\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8DC3","\u8BDD\u75E8","\u4F20\u8BF4","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),Io=Bn(["\u66B1\u7A31","\u90F5\u7BB1","\u7DB2\u5740","\u53EF\u9078","\u66B1\u7A31\u4E0D\u80FD\u5C11\u65BC3\u500B\u5B57\u5143","\u8ACB\u586B\u5BEB\u6B63\u78BA\u7684\u90F5\u4EF6\u5730\u5740","\u6B61\u8FCE\u8A55\u8AD6","\u4F86\u767C\u8A55\u8AD6\u5427~","\u63D0\u4EA4","\u559C\u6B61","\u53D6\u6D88\u559C\u6B61","\u56DE\u8986","\u53D6\u6D88\u56DE\u8986","\u8A55\u8AD6","\u5237\u65B0","\u8F09\u5165\u66F4\u591A...","\u9810\u89BD","\u8868\u60C5","\u4E0A\u50B3\u5716\u7247","\u79D2\u524D","\u5206\u9418\u524D","\u5C0F\u6642\u524D","\u5929\u524D","\u525B\u525B","\u6B63\u5728\u4E0A\u50B3","\u767B\u9304","\u9000\u51FA","\u535A\u4E3B","\u7F6E\u9802","\u5B57",`\u8A55\u8AD6\u5B57\u6578\u61C9\u5728 $0 \u5230 $1 \u5B57\u4E4B\u9593\uFF01
\u7576\u524D\u5B57\u6578\uFF1A$2`,"\u533F\u540D","\u6F5B\u6C34","\u5192\u6CE1","\u5410\u69FD","\u6D3B\u8E8D","\u8A71\u7646","\u50B3\u8AAA","\u8868\u60C5\u5305","\u641C\u7D22\u8868\u60C5\u5305"]),Oo=Bn(["Apelido","Apelido n\xE3o pode ser menor que 3 bytes.","E-Mail","Por favor, confirme seu endere\xE7o de e-mail.","Website","Opcional","Comente aqui...","Nenhum coment\xE1rio, ainda.","Enviar","Like","Cancel like","Responder","Cancelar resposta","Coment\xE1rios","Refrescar","Carregar Mais...","Visualizar","Emoji","Enviar Imagem","segundos atr\xE1s","minutos atr\xE1s","horas atr\xE1s","dias atr\xE1s","agora mesmo","Enviando","Entrar","Sair","Admin","Sticky","Palavras",`Favor enviar coment\xE1rio com $0 a $1 palavras!
 N\xFAmero de palavras atuais: $2`,"An\xF4nimo","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","Pesquisar GIF"]),ue=Bn(["\u041F\u0441\u0435\u0432\u0434\u043E\u043D\u0438\u043C","\u041D\u0438\u043A\u043D\u0435\u0439\u043C \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 3 \u0431\u0430\u0439\u0442.","\u042D\u043B. \u0430\u0434\u0440\u0435\u0441","\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0439 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043F\u043E\u0447\u0442\u044B.","\u0412\u0435\u0431-\u0441\u0430\u0439\u0442","\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0439","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u0437\u0434\u0435\u0441\u044C...","\u041F\u043E\u043A\u0430 \u043D\u0435\u0442 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0435\u0432.","\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C","Like","Cancel like","\u041E\u0442\u0432\u0435\u0447\u0430\u0442\u044C","\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u043E\u0442\u0432\u0435\u0442","\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438","\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C","\u0417\u0430\u0433\u0440\u0443\u0437\u0438 \u0431\u043E\u043B\u044C\u0448\u0435...","\u041F\u0440\u0435\u0432\u044C\u044E","\u044D\u043C\u043E\u0434\u0437\u0438","\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435","\u0441\u0435\u043A\u0443\u043D\u0434 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043C\u0438\u043D\u0443\u0442 \u043D\u0430\u0437\u0430\u0434","\u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0447\u0430\u0441\u043E\u0432 \u043D\u0430\u0437\u0430\u0434","\u0434\u043D\u0435\u0439 \u043D\u0430\u0437\u0430\u0434","\u043F\u0440\u044F\u043C\u043E \u0441\u0435\u0439\u0447\u0430\u0441","\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430","\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F","\u0412\u044B\u0445\u043E\u0434 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043C\u044B","\u0410\u0434\u043C\u0438\u043D","\u041B\u0438\u043F\u043A\u0438\u0439","\u0421\u043B\u043E\u0432\u0430",`\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 \u043E\u0442 $0 \u0434\u043E $1 \u0441\u043B\u043E\u0432!
\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043A\u0443\u0449\u0435\u0433\u043E \u0441\u043B\u043E\u0432\u0430: $2`,"\u0410\u043D\u043E\u043D\u0438\u043C\u043D\u044B\u0439","Dwarves","Hobbits","Ents","Wizards","Elves","Maiar","GIF","\u041F\u043E\u0438\u0441\u043A GIF"]);const qo={zh:de,"zh-cn":de,"zh-CN":de,"zh-tw":Io,"zh-TW":Io,en:pe,"en-US":pe,"en-us":pe,jp:he,"jp-jp":he,"jp-JP":he,"pt-br":Oo,"pt-BR":Oo,ru:ue,"ru-ru":ue,"ru-RU":ue},rl=n=>{try{n=decodeURI(n)}catch{}return n},I0=(n="")=>n.replace(/\/$/u,""),O0=n=>/^(https?:)?\/\//.test(n),ll=n=>{const t=I0(n);return O0(t)?t:`https://${t}`},il=n=>Array.isArray(n)?n:!!n&&[0,n],we=(n,t)=>typeof n=="function"?n:n!==!1&&t,ve="{--waline-white:#000;--waline-light-grey:#666;--waline-dark-grey:#999;--waline-color:#888;--waline-bgcolor:#1e1e1e;--waline-bgcolor-light:#272727;--waline-bgcolor-hover: #444;--waline-border-color:#333;--waline-disable-bgcolor:#444;--waline-disable-color:#272727;--waline-bq-color:#272727;--waline-info-bgcolor:#272727;--waline-info-color:#666}",_e=(n,t)=>{let e=n.toString();for(;e.length<t;)e="0"+e;return e},pl=(n,t,e)=>{if(!n)return"";const r=typeof n=="string"?new Date(n.indexOf(" ")!==-1?n.replace(/-/g,"/"):n):n,l=t.getTime()-r.getTime(),i=Math.floor(l/864e5);if(i===0){const h=l%864e5,d=Math.floor(h/36e5);if(d===0){const u=h%36e5,w=Math.floor(u/6e4);if(w===0){const v=u%6e4;return`${Math.round(v/1e3)} ${e.seconds}`}return`${w} ${e.minutes}`}return`${d} ${e.hours}`}return i<0?e.now:i<8?`${i} ${e.days}`:(h=>{const d=_e(h.getDate(),2),u=_e(h.getMonth()+1,2);return`${_e(h.getFullYear(),2)}-${u}-${d}`})(r)},hl=n=>{const t=et("WALINE_EMOJI",{}),e=Boolean(/@[0-9]+\.[0-9]+\.[0-9]+/.test(n));if(e){const r=t.value[n];if(r)return Promise.resolve(r)}return fetch(`${n}/info.json`).then(r=>r.json()).then(r=>{const l={folder:n,...r};return e&&(t.value[n]=l),l})},Go=(n,t="",e="",r="")=>`${t?`${t}/`:""}${e}${n}${r?`.${r}`:""}`,dl={"Content-Type":"application/json"},ul=({serverURL:n,lang:t,path:e,page:r,pageSize:l,signal:i,token:h})=>{const d={};return h&&(d.Authorization=`Bearer ${h}`),fetch(`${n}/comment?path=${encodeURIComponent(e)}&pageSize=${l}&page=${r}&lang=${t}`,{signal:i,headers:d}).then(u=>u.json()).then(u=>((w,v="")=>{if(typeof w=="object"&&w.errno)throw new TypeError(`Fetch ${v} failed with ${w.errno}: ${w.errmsg}`);return w})(u,"comment list"))},No=({serverURL:n,lang:t,token:e,objectId:r,...l})=>fetch(`${n}/comment/${r}?lang=${t}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`},body:JSON.stringify(l)}).then(i=>i.json()),wl=n=>n.type.includes("image"),Uo=n=>{const t=Array.from(n).find(wl);return t?t.getAsFile():null},vl=/\$.*?\$/,_l=/^\$(.*?)\$/,gl=/^(?:\s{0,3})\$\$((?:[^\n]|\n[^\n])+?)\n{0,1}\$\$/,q0=(n="",t={})=>n.replace(/:(.+?):/g,(e,r)=>t[r]?`<img class="wl-emoji" src="${t[r]}" alt="${r}">`:e),kl=(n,{emojiMap:t,highlighter:e,texRenderer:r})=>{if(c1.setOptions({highlight:e||void 0,breaks:!0,smartLists:!0,smartypants:!0}),r){const l=(i=>[{name:"blockMath",level:"block",tokenizer(h){const d=gl.exec(h);if(d!==null)return{type:"html",raw:d[0],text:i(!0,d[1])}}},{name:"inlineMath",level:"inline",start(h){const d=h.search(vl);return d!==-1?d:h.length},tokenizer(h){const d=_l.exec(h);if(d!==null)return{type:"html",raw:d[0],text:i(!1,d[1])}}}])(r);c1.use({extensions:l})}return c1.parse(q0(n,t))};let Wo=null;const _s=()=>Wo||(Wo=et("USER_KEY",{}));let Ko=null;const G0=()=>Ko||(Ko=et("WALINE_LIKE",[])),ml=a({name:"CommentBox",components:{CloseIcon:({size:n})=>q("svg",{class:"wl-close-icon",viewBox:"0 0 1024 1024",width:n,height:n},[q("path",{d:"M697.173 85.333h-369.92c-144.64 0-241.92 101.547-241.92 252.587v348.587c0 150.613 97.28 252.16 241.92 252.16h369.92c144.64 0 241.494-101.547 241.494-252.16V337.92c0-151.04-96.854-252.587-241.494-252.587z",fill:"currentColor"}),q("path",{d:"m640.683 587.52-75.947-75.861 75.904-75.862a37.29 37.29 0 0 0 0-52.778 37.205 37.205 0 0 0-52.779 0l-75.946 75.818-75.862-75.946a37.419 37.419 0 0 0-52.821 0 37.419 37.419 0 0 0 0 52.821l75.947 75.947-75.776 75.733a37.29 37.29 0 1 0 52.778 52.821l75.776-75.776 75.947 75.947a37.376 37.376 0 0 0 52.779-52.821z",fill:"#888"})]),EmojiIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"M563.2 463.3 677 540c1.7 1.2 3.7 1.8 5.8 1.8.7 0 1.4-.1 2-.2 2.7-.5 5.1-2.1 6.6-4.4l25.3-37.8c1.5-2.3 2.1-5.1 1.6-7.8s-2.1-5.1-4.4-6.6l-73.6-49.1 73.6-49.1c2.3-1.5 3.9-3.9 4.4-6.6.5-2.7 0-5.5-1.6-7.8l-25.3-37.8a10.1 10.1 0 0 0-6.6-4.4c-.7-.1-1.3-.2-2-.2-2.1 0-4.1.6-5.8 1.8l-113.8 76.6c-9.2 6.2-14.7 16.4-14.7 27.5.1 11 5.5 21.3 14.7 27.4zM387 348.8h-45.5c-5.7 0-10.4 4.7-10.4 10.4v153.3c0 5.7 4.7 10.4 10.4 10.4H387c5.7 0 10.4-4.7 10.4-10.4V359.2c0-5.7-4.7-10.4-10.4-10.4zm333.8 241.3-41-20a10.3 10.3 0 0 0-8.1-.5c-2.6.9-4.8 2.9-5.9 5.4-30.1 64.9-93.1 109.1-164.4 115.2-5.7.5-9.9 5.5-9.5 11.2l3.9 45.5c.5 5.3 5 9.5 10.3 9.5h.9c94.8-8 178.5-66.5 218.6-152.7 2.4-5 .3-11.2-4.8-13.6zm186-186.1c-11.9-42-30.5-81.4-55.2-117.1-24.1-34.9-53.5-65.6-87.5-91.2-33.9-25.6-71.5-45.5-111.6-59.2-41.2-14-84.1-21.1-127.8-21.1h-1.2c-75.4 0-148.8 21.4-212.5 61.7-63.7 40.3-114.3 97.6-146.5 165.8-32.2 68.1-44.3 143.6-35.1 218.4 9.3 74.8 39.4 145 87.3 203.3.1.2.3.3.4.5l36.2 38.4c1.1 1.2 2.5 2.1 3.9 2.6 73.3 66.7 168.2 103.5 267.5 103.5 73.3 0 145.2-20.3 207.7-58.7 37.3-22.9 70.3-51.5 98.1-85 27.1-32.7 48.7-69.5 64.2-109.1 15.5-39.7 24.4-81.3 26.6-123.8 2.4-43.6-2.5-87-14.5-129zm-60.5 181.1c-8.3 37-22.8 72-43 104-19.7 31.1-44.3 58.6-73.1 81.7-28.8 23.1-61 41-95.7 53.4-35.6 12.7-72.9 19.1-110.9 19.1-82.6 0-161.7-30.6-222.8-86.2l-34.1-35.8c-23.9-29.3-42.4-62.2-55.1-97.7-12.4-34.7-18.8-71-19.2-107.9-.4-36.9 5.4-73.3 17.1-108.2 12-35.8 30-69.2 53.4-99.1 31.7-40.4 71.1-72 117.2-94.1 44.5-21.3 94-32.6 143.4-32.6 49.3 0 97 10.8 141.8 32 34.3 16.3 65.3 38.1 92 64.8 26.1 26 47.5 56 63.6 89.2 16.2 33.2 26.6 68.5 31 105.1 4.6 37.5 2.7 75.3-5.6 112.3z",fill:"currentColor"})),ImageIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M784 112H240c-88 0-160 72-160 160v480c0 88 72 160 160 160h544c88 0 160-72 160-160V272c0-88-72-160-160-160zm96 640c0 52.8-43.2 96-96 96H240c-52.8 0-96-43.2-96-96V272c0-52.8 43.2-96 96-96h544c52.8 0 96 43.2 96 96v480z",fill:"currentColor"}),q("path",{d:"M352 480c52.8 0 96-43.2 96-96s-43.2-96-96-96-96 43.2-96 96 43.2 96 96 96zm0-128c17.6 0 32 14.4 32 32s-14.4 32-32 32-32-14.4-32-32 14.4-32 32-32zm462.4 379.2-3.2-3.2-177.6-177.6c-25.6-25.6-65.6-25.6-91.2 0l-80 80-36.8-36.8c-25.6-25.6-65.6-25.6-91.2 0L200 728c-4.8 6.4-8 14.4-8 24 0 17.6 14.4 32 32 32 9.6 0 16-3.2 22.4-9.6L380.8 640l134.4 134.4c6.4 6.4 14.4 9.6 24 9.6 17.6 0 32-14.4 32-32 0-9.6-4.8-17.6-9.6-24l-52.8-52.8 80-80L769.6 776c6.4 4.8 12.8 8 20.8 8 17.6 0 32-14.4 32-32 0-8-3.2-16-8-20.8z",fill:"currentColor"})]),ImageWall:X6,MarkdownIcon:()=>q("svg",{width:"16",height:"16",ariaHidden:"true"},q("path",{d:"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z",fill:"currentColor"})),PreviewIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M710.816 654.301c70.323-96.639 61.084-230.578-23.705-314.843-46.098-46.098-107.183-71.109-172.28-71.109-65.008 0-126.092 25.444-172.28 71.109-45.227 46.098-70.756 107.183-70.756 172.106 0 64.923 25.444 126.007 71.194 172.106 46.099 46.098 107.184 71.109 172.28 71.109 51.414 0 100.648-16.212 142.824-47.404l126.53 126.006c7.058 7.06 16.297 10.979 26.406 10.979 10.105 0 19.343-3.919 26.402-10.979 14.467-14.467 14.467-38.172 0-52.723L710.816 654.301zm-315.107-23.265c-65.88-65.88-65.88-172.54 0-238.42 32.069-32.07 74.245-49.149 119.471-49.149 45.227 0 87.407 17.603 119.472 49.149 65.88 65.879 65.88 172.539 0 238.42-63.612 63.178-175.242 63.178-238.943 0zm0 0",fill:"currentColor"}),q("path",{d:"M703.319 121.603H321.03c-109.8 0-199.469 89.146-199.469 199.38v382.034c0 109.796 89.236 199.38 199.469 199.38h207.397c20.653 0 37.384-16.645 37.384-37.299 0-20.649-16.731-37.296-37.384-37.296H321.03c-68.582 0-124.352-55.77-124.352-124.267V321.421c0-68.496 55.77-124.267 124.352-124.267h382.289c68.582 0 124.352 55.771 124.352 124.267V524.72c0 20.654 16.736 37.299 37.385 37.299 20.654 0 37.384-16.645 37.384-37.299V320.549c-.085-109.8-89.321-198.946-199.121-198.946zm0 0",fill:"currentColor"})]),LoadingIcon:vs,GifIcon:()=>q("svg",{width:24,height:24,fill:"currentcolor",viewBox:"0 0 24 24"},[q("path",{style:"transform: translateY(0.5px)",d:"M18.968 10.5H15.968V11.484H17.984V12.984H15.968V15H14.468V9H18.968V10.5V10.5ZM8.984 9C9.26533 9 9.49967 9.09367 9.687 9.281C9.87433 9.46833 9.968 9.70267 9.968 9.984V10.5H6.499V13.5H8.468V12H9.968V14.016C9.968 14.2973 9.87433 14.5317 9.687 14.719C9.49967 14.9063 9.26533 15 8.984 15H5.984C5.70267 15 5.46833 14.9063 5.281 14.719C5.09367 14.5317 5 14.2973 5 14.016V9.985C5 9.70367 5.09367 9.46933 5.281 9.282C5.46833 9.09467 5.70267 9.001 5.984 9.001H8.984V9ZM11.468 9H12.968V15H11.468V9V9Z"}),q("path",{d:"M18.5 3H5.75C3.6875 3 2 4.6875 2 6.75V18C2 20.0625 3.6875 21.75 5.75 21.75H18.5C20.5625 21.75 22.25 20.0625 22.25 18V6.75C22.25 4.6875 20.5625 3 18.5 3ZM20.75 18C20.75 19.2375 19.7375 20.25 18.5 20.25H5.75C4.5125 20.25 3.5 19.2375 3.5 18V6.75C3.5 5.5125 4.5125 4.5 5.75 4.5H18.5C19.7375 4.5 20.75 5.5125 20.75 6.75V18Z"})])},props:{rootId:{type:String,default:""},replyId:{type:String,default:""},replyUser:{type:String,default:""}},emits:["submit","cancel-reply"],setup(n,{emit:t}){const e=D1("config"),r=et("WALINE_COMMENT_BOX_EDITOR",""),l=et("WALINE_USER_META",{nick:"",mail:"",link:""}),i=_s(),h=Y({}),d=Y(null),u=Y(null),w=Y(null),v=Y(null),k=Y(null),_=Y(null),g=Y(null),x=Y({tabs:[],map:{}}),C=Y(0),b=Y(!1),f=Y(!1),M=Y(!1),L=Y(""),B=Y(0),S=N2({loading:!0,list:[]}),I=Y(0),W=Y(!1),P=Y(""),J=Y(!1),X=n1(()=>e.value.locale),i1=n1(()=>{var G;return Boolean((G=i.value)==null?void 0:G.token)}),D=n1(()=>e.value.imageUploader!==!1),p1=G=>{const o1=d.value,a1=o1.selectionStart,L1=o1.selectionEnd||0,M1=o1.scrollTop;r.value=o1.value.substring(0,a1)+G+o1.value.substring(L1,o1.value.length),o1.focus(),o1.selectionStart=a1+G.length,o1.selectionEnd=a1+G.length,o1.scrollTop=M1},U=G=>{const o1=`![${e.value.locale.uploading} ${G.name}]()`;return p1(o1),Promise.resolve().then(()=>e.value.imageUploader(G)).then(a1=>{r.value=r.value.replace(o1,`\r
![${G.name}](${a1})`)})},I1=()=>{var y,F,A,K,$1;const{serverURL:G,lang:o1,login:a1,wordLimit:L1,requiredMeta:M1}=e.value,w1={comment:P.value,nick:l.value.nick,mail:l.value.mail,link:l.value.link,ua:navigator.userAgent,url:e.value.path};if((y=i.value)!=null&&y.token)w1.nick=i.value.display_name,w1.mail=i.value.email,w1.link=i.value.url;else{if(a1==="force")return;if(M1.indexOf("nick")>-1&&!w1.nick)return(F=h.value.nick)==null||F.focus(),alert(X.value.nickError);if(M1.indexOf("mail")>-1&&!w1.mail||w1.mail&&!/^\w(?:[\w._-]*\w)?@(?:\w(?:[\w-]*\w)?\.)*\w+$/.exec(w1.mail))return(A=h.value.mail)==null||A.focus(),alert(X.value.mailError);if(!w1.comment)return void((K=d.value)==null?void 0:K.focus());w1.nick||(w1.nick=X.value.anonymous)}if(!W.value)return alert(X.value.wordHint.replace("$0",L1[0].toString()).replace("$1",L1[1].toString()).replace("$2",B.value.toString()));w1.comment=q0(w1.comment,x.value.map),n.replyId&&n.rootId&&(w1.pid=n.replyId,w1.rid=n.rootId,w1.at=n.replyUser),J.value=!0,(({serverURL:_1,lang:d1,token:h1,comment:m})=>{const $={"Content-Type":"application/json"};return h1&&($.Authorization=`Bearer ${h1}`),fetch(`${_1}/comment?lang=${d1}`,{method:"POST",headers:$,body:JSON.stringify(m)}).then(z=>z.json())})({serverURL:G,lang:o1,token:($1=i.value)==null?void 0:$1.token,comment:w1}).then(_1=>{if(J.value=!1,_1.errmsg)return alert(_1.errmsg);t("submit",_1.data),r.value="",L.value="",n.replyId&&t("cancel-reply")}).catch(_1=>{J.value=!1,alert(_1.message)})},k1=G=>{w.value.contains(G.target)||v.value.contains(G.target)||(b.value=!1),k.value.contains(G.target)||_.value.contains(G.target)||(f.value=!1)},b1=async G=>{var F;const{scrollTop:o1,clientHeight:a1,scrollHeight:L1}=G.target,M1=(a1+o1)/L1,w1=e.value.search,y=((F=g.value)==null?void 0:F.value)||"";M1<.9||S.loading||(S.loading=!0,S.list.push(...w1.more?await w1.more(y,S.list.length):await w1.search(y)),S.loading=!1,setTimeout(()=>{G.target.scrollTop=o1},50))},B1=S6(G=>{S.list=[],b1(G)},300);return W1([e,B],([G,o1])=>{const{wordLimit:a1}=G;a1?o1<a1[0]&&a1[0]!==0?(I.value=a1[0],W.value=!1):o1>a1[1]?(I.value=a1[1],W.value=!1):(I.value=a1[1],W.value=!0):(I.value=0,W.value=!0)},{immediate:!0}),W1(f,async G=>{if(!G)return;const o1=e.value.search;g.value&&(g.value.value=""),S.loading=!0,S.list=o1.default?await o1.default():await o1.search(""),S.loading=!1}),Y1(()=>{document.body.addEventListener("click",k1),W1(()=>r.value,G=>{const{highlighter:o1,texRenderer:a1}=e.value;P.value=G,L.value=kl(G,{emojiMap:x.value.map,highlighter:o1,texRenderer:a1}),B.value=(L1=>(M1=>M1.match(/[\w\d\s\u00C0-\u024F]+/giu)||[])(L1).reduce((M1,w1)=>M1+(w1.trim()===""?0:w1.trim().split(/\s+/u).length),0)+(M1=>M1.match(/[\u4E00-\u9FA5]/gu)||[])(L1).length)(G),G?Co(d.value):Co.destroy(d.value)},{immediate:!0}),W1(()=>e.value.emoji,G=>{return(o1=Array.isArray(G)?G:[],Promise.all(o1.map(a1=>typeof a1=="string"?hl(I0(a1)):Promise.resolve(a1))).then(a1=>{const L1={tabs:[],map:{}};return a1.forEach(M1=>{const{name:w1,folder:y,icon:F,prefix:A,type:K,items:$1}=M1;L1.tabs.push({name:w1,icon:Go(F,y,A,K),items:$1.map(_1=>{const d1=`${A||""}${_1}`;return L1.map[d1]=Go(_1,y,A,K),d1})})}),L1})).then(a1=>{x.value=a1});var o1},{immediate:!0})}),os(()=>{document.body.removeEventListener("click",k1)}),{config:e,locale:X,insert:p1,onChange:()=>{const G=u.value;G.files&&D.value&&U(G.files[0]).then(()=>{G.value=""})},onDrop:G=>{var o1;if((o1=G.dataTransfer)!=null&&o1.items){const a1=Uo(G.dataTransfer.items);a1&&D.value&&(U(a1),G.preventDefault())}},onKeyDown:G=>{const o1=G.key;(G.ctrlKey||G.metaKey)&&o1==="Enter"&&I1()},onPaste:G=>{if(G.clipboardData){const o1=Uo(G.clipboardData.items);o1&&D.value&&U(o1)}},onLogin:G=>{G.preventDefault();const{lang:o1,serverURL:a1}=e.value,L1=(window.innerWidth-450)/2,M1=(window.innerHeight-450)/2,w1=window.open(`${a1}/ui/login?lng=${encodeURIComponent(o1)}`,"_blank",`width=450,height=450,left=${L1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`);w1==null||w1.postMessage({type:"TOKEN",data:null},"*");const y=({data:F})=>{F&&F.type==="userInfo"&&F.data.token&&(w1==null||w1.close(),i.value=F.data,(F.data.remember?localStorage:sessionStorage).setItem("WALINE_USER",JSON.stringify(F.data)),window.removeEventListener("message",y))};window.addEventListener("message",y)},onLogout:()=>{i.value={},localStorage.setItem("WALINE_USER","null"),sessionStorage.setItem("WALINE_USER","null")},onProfile:G=>{var y;G.preventDefault();const{lang:o1,serverURL:a1}=e.value,L1=(window.innerWidth-800)/2,M1=(window.innerHeight-800)/2;(y=window.open(`${a1}/ui/profile?lng=${encodeURIComponent(o1)}`,"_blank",`width=800,height=800,left=${L1},top=${M1},scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no`))==null||y.postMessage({type:"TOKEN",data:i.value.token},"*");const w1=({data:F})=>{F&&F.type==="profile"&&(i.value={...i.value,...F},[localStorage,sessionStorage].filter(A=>A.getItem("WALINE_USER")).forEach(A=>A.setItem("WALINE_USER",JSON.stringify(i))),window.removeEventListener("message",w1))};window.addEventListener("message",w1)},submitComment:I1,onImageWallScroll:b1,onGifSearch:B1,isLogin:i1,userInfo:i,isSubmitting:J,wordNumber:B,wordLimit:I,isWordNumberLegal:W,editor:r,userMeta:l,emoji:x,emojiTabIndex:C,showEmoji:b,gifData:S,showGif:f,canUploadImage:D,previewText:L,showPreview:M,inputRefs:h,editorRef:d,emojiButtonRef:w,emojiPopupRef:v,gifButtonRef:k,gifPopupRef:_,imageUploadRef:u,gifSearchInputRef:g}}}),xl={class:"wl-comment"},fl={key:0,class:"wl-login-info"},$l={class:"wl-avatar"},Ml=["title"],Cl=["src"],zl=["textContent"],bl={class:"wl-panel"},Bl=["for","textContent"],yl=["id","name","type","onUpdate:modelValue"],Ll=["placeholder"],Hl={class:"wl-preview"},Vl=s("hr",null,null,-1),jl=["innerHTML"],Sl={class:"wl-footer"},Al={class:"wl-actions"},Rl={href:"https://guides.github.com/features/mastering-markdown/",title:"Markdown Guide","aria-label":"Markdown is supported",class:"wl-action",target:"_blank",rel:"noreferrer"},Pl=["title"],Tl=["title"],Dl=["title"],Fl=["title"],El={class:"wl-info"},Il={class:"wl-text-number"},Ol={key:0},ql=u2(" \xA0/\xA0 "),Gl=["textContent"],Nl=["textContent"],Ul=["disabled"],Wl=["placeholder"],Kl={key:0,class:"wl-loading"},Jl={key:0,class:"wl-tab-wrapper"},Yl=["title","onClick"],Zl=["src","alt"],Ql={key:0,class:"wl-tabs"},Xl=["onClick"],ni=["src","alt","title"],ti=["title"];var N0=Zt(ml,[["render",function(n,t,e,r,l,i){const h=E1("CloseIcon"),d=E1("MarkdownIcon"),u=E1("EmojiIcon"),w=E1("GifIcon"),v=E1("ImageIcon"),k=E1("PreviewIcon"),_=E1("LoadingIcon"),g=E1("ImageWall");return o(),c("div",xl,[n.config.login!=="disable"&&n.isLogin?(o(),c("div",fl,[s("div",$l,[s("button",{class:"wl-logout-btn",title:n.locale.logout,onClick:t[0]||(t[0]=(...x)=>n.onLogout&&n.onLogout(...x))},[g1(h,{size:14})],8,Ml),s("img",{src:n.userInfo.avatar,alt:"avatar"},null,8,Cl)]),s("a",{href:"#",class:"wl-login-nick","aria-label":"Profile",onClick:t[1]||(t[1]=(...x)=>n.onProfile&&n.onProfile(...x)),textContent:y1(n.userInfo.display_name)},null,8,zl)])):v1("v-if",!0),s("div",bl,[n.config.login!=="force"&&n.config.meta.length&&!n.isLogin?(o(),c("div",{key:0,class:G1(["wl-header",`item${n.config.meta.length}`])},[(o(!0),c(H1,null,b2(n.config.meta,x=>(o(),c("div",{class:"wl-header-item",key:x},[s("label",{for:x,textContent:y1(n.locale[x]+(n.config.requiredMeta.includes(x)||!n.config.requiredMeta.length?"":`(${n.locale.optional})`))},null,8,Bl),vt(s("input",{ref_for:!0,ref:C=>{C&&(n.inputRefs[x]=C)},id:`wl-${x}`,class:G1(["wl-input",`wl-${x}`]),name:x,type:x==="mail"?"email":"text","onUpdate:modelValue":C=>n.userMeta[x]=C},null,10,yl),[[Aa,n.userMeta[x]]])]))),128))],2)):v1("v-if",!0),vt(s("textarea",{class:"wl-editor",ref:"editorRef",id:"wl-edit",placeholder:n.replyUser?`@${n.replyUser}`:n.locale.placeholder,"onUpdate:modelValue":t[2]||(t[2]=x=>n.editor=x),onKeydown:t[3]||(t[3]=(...x)=>n.onKeyDown&&n.onKeyDown(...x)),onDrop:t[4]||(t[4]=(...x)=>n.onDrop&&n.onDrop(...x)),onPaste:t[5]||(t[5]=(...x)=>n.onPaste&&n.onPaste(...x))},null,40,Ll),[[Re,n.editor]]),vt(s("div",Hl,[Vl,s("h4",null,y1(n.locale.preview)+":",1),s("div",{class:"wl-content",innerHTML:n.previewText},null,8,jl)],512),[[oo,n.showPreview]]),s("div",Sl,[s("div",Al,[s("a",Rl,[g1(d)]),vt(s("button",{ref:"emojiButtonRef",class:G1(["wl-action",{actived:n.showEmoji}]),title:n.locale.emoji,onClick:t[6]||(t[6]=x=>n.showEmoji=!n.showEmoji)},[g1(u)],10,Pl),[[oo,n.emoji.tabs.length]]),n.config.search?(o(),c("button",{key:0,ref:"gifButtonRef",class:G1(["wl-action",{actived:n.showGif}]),title:n.locale.gif,onClick:t[7]||(t[7]=x=>n.showGif=!n.showGif)},[g1(w)],10,Tl)):v1("v-if",!0),s("input",{ref:"imageUploadRef",class:"upload",id:"wl-image-upload",type:"file",accept:".png,.jpg,.jpeg,.webp,.bmp,.gif",onChange:t[8]||(t[8]=(...x)=>n.onChange&&n.onChange(...x))},null,544),n.canUploadImage?(o(),c("label",{key:1,for:"wl-image-upload",class:"wl-action",title:n.locale.uploadImage},[g1(v)],8,Dl)):v1("v-if",!0),s("button",{class:G1(["wl-action",{actived:n.showPreview}]),title:n.locale.preview,onClick:t[9]||(t[9]=x=>n.showPreview=!n.showPreview)},[g1(k)],10,Fl)]),s("div",El,[s("div",Il,[u2(y1(n.wordNumber)+" ",1),n.config.wordLimit?(o(),c("span",Ol,[ql,s("span",{class:G1({illegal:!n.isWordNumberLegal}),textContent:y1(n.wordLimit)},null,10,Gl)])):v1("v-if",!0),u2(" \xA0"+y1(n.locale.word),1)]),n.config.login==="disable"||n.isLogin?v1("v-if",!0):(o(),c("button",{key:0,class:"wl-btn",onClick:t[10]||(t[10]=(...x)=>n.onLogin&&n.onLogin(...x)),textContent:y1(n.locale.login)},null,8,Nl)),n.config.login!=="force"||n.isLogin?(o(),c("button",{key:1,class:"wl-btn primary",title:"Cmd|Ctrl + Enter",disabled:n.isSubmitting,onClick:t[11]||(t[11]=(...x)=>n.submitComment&&n.submitComment(...x))},[n.isSubmitting?(o(),w2(_,{key:0,size:16})):(o(),c(H1,{key:1},[u2(y1(n.locale.submit),1)],64))],8,Ul)):v1("v-if",!0)]),s("div",{ref:"gifPopupRef",class:G1(["wl-gif-popup",{display:n.showGif}])},[s("input",{type:"text",placeholder:n.locale.gifSearchPlaceholder,ref:"gifSearchInputRef",onInput:t[12]||(t[12]=(...x)=>n.onGifSearch&&n.onGifSearch(...x))},null,40,Wl),g1(g,{items:n.gifData.list,"column-width":200,gap:6,onInsert:t[13]||(t[13]=x=>n.insert(x)),onScroll:n.onImageWallScroll},null,8,["items","onScroll"]),n.gifData.loading?(o(),c("div",Kl,[g1(_,{size:30})])):v1("v-if",!0)],2),s("div",{ref:"emojiPopupRef",class:G1(["wl-emoji-popup",{display:n.showEmoji}])},[(o(!0),c(H1,null,b2(n.emoji.tabs,(x,C)=>(o(),c(H1,{key:x.name},[C===n.emojiTabIndex?(o(),c("div",Jl,[(o(!0),c(H1,null,b2(x.items,b=>(o(),c("button",{key:b,title:b,onClick:f=>n.insert(`:${b}:`)},[n.showEmoji?(o(),c("img",{key:0,class:"wl-emoji",src:n.emoji.map[b],alt:b,loading:"lazy",referrerPolicy:"no-referrer"},null,8,Zl)):v1("v-if",!0)],8,Yl))),128))])):v1("v-if",!0)],64))),128)),n.emoji.tabs.length>1?(o(),c("div",Ql,[(o(!0),c(H1,null,b2(n.emoji.tabs,(x,C)=>(o(),c("button",{key:x.name,class:G1(["wl-tab",{active:n.emojiTabIndex===C}]),onClick:b=>n.emojiTabIndex=C},[s("img",{class:"wl-emoji",src:x.icon,alt:x.name,title:x.name,loading:"lazy",referrerPolicy:"no-referrer"},null,8,ni)],10,Xl))),128))])):v1("v-if",!0)],2)])]),n.replyId?(o(),c("button",{key:1,class:"wl-close",title:n.locale.cancelReply,onClick:t[14]||(t[14]=x=>n.$emit("cancel-reply"))},[g1(h,{size:24})],8,ti)):v1("v-if",!0)])}],["__file","CommentBox.vue"]]);const ei=["approved","waiting","spam"],si=a({props:{comment:{type:Object,required:!0},rootId:{type:String,required:!0},reply:{type:Object}},components:{CommentBox:N0,DeleteIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"m341.013 394.667 27.755 393.45h271.83l27.733-393.45h64.106l-28.01 397.952a64 64 0 0 1-63.83 59.498H368.768a64 64 0 0 1-63.83-59.52l-28.053-397.93h64.128zm139.307 19.818v298.667h-64V414.485h64zm117.013 0v298.667h-64V414.485h64zM181.333 288h640v64h-640v-64zm453.483-106.667v64h-256v-64h256z",fill:"red"})),LikeIcon:({active:n=!1})=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},[q("path",{d:"M850.654 323.804c-11.042-25.625-26.862-48.532-46.885-68.225-20.022-19.61-43.258-34.936-69.213-45.73-26.78-11.124-55.124-16.727-84.375-16.727-40.622 0-80.256 11.123-114.698 32.135A214.79 214.79 0 0 0 512 241.819a214.79 214.79 0 0 0-23.483-16.562c-34.442-21.012-74.076-32.135-114.698-32.135-29.25 0-57.595 5.603-84.375 16.727-25.872 10.711-49.19 26.12-69.213 45.73-20.105 19.693-35.843 42.6-46.885 68.225-11.453 26.615-17.303 54.877-17.303 83.963 0 27.439 5.603 56.03 16.727 85.117 9.31 24.307 22.659 49.52 39.715 74.981 27.027 40.293 64.188 82.316 110.33 124.915 76.465 70.615 152.189 119.394 155.402 121.371l19.528 12.525c8.652 5.52 19.776 5.52 28.427 0l19.529-12.525c3.213-2.06 78.854-50.756 155.401-121.371 46.143-42.6 83.304-84.622 110.33-124.915 17.057-25.46 30.487-50.674 39.716-74.981 11.124-29.087 16.727-57.678 16.727-85.117.082-29.086-5.768-57.348-17.221-83.963z"+(n?"":"M512 761.5S218.665 573.55 218.665 407.767c0-83.963 69.461-152.023 155.154-152.023 60.233 0 112.473 33.618 138.181 82.727 25.708-49.109 77.948-82.727 138.18-82.727 85.694 0 155.155 68.06 155.155 152.023C805.335 573.551 512 761.5 512 761.5z"),fill:n?"red":"currentColor"})]),ReplyIcon:()=>q("svg",{viewBox:"0 0 1024 1024",width:"24",height:"24"},q("path",{d:"M810.667 213.333a64 64 0 0 1 64 64V704a64 64 0 0 1-64 64H478.336l-146.645 96.107a21.333 21.333 0 0 1-33.024-17.856V768h-85.334a64 64 0 0 1-64-64V277.333a64 64 0 0 1 64-64h597.334zm0 64H213.333V704h149.334v63.296L459.243 704h351.424V277.333zm-271.36 213.334v64h-176.64v-64h176.64zm122.026-128v64H362.667v-64h298.666z",fill:"currentColor"})),VerifiedIcon:()=>q("svg",{class:"verified-icon",viewBox:"0 0 1024 1024",width:"14",height:"14"},q("path",{d:"m894.4 461.56-54.4-63.2c-10.4-12-18.8-34.4-18.8-50.4v-68c0-42.4-34.8-77.2-77.2-77.2h-68c-15.6 0-38.4-8.4-50.4-18.8l-63.2-54.4c-27.6-23.6-72.8-23.6-100.8 0l-62.8 54.8c-12 10-34.8 18.4-50.4 18.4h-69.2c-42.4 0-77.2 34.8-77.2 77.2v68.4c0 15.6-8.4 38-18.4 50l-54 63.6c-23.2 27.6-23.2 72.4 0 100l54 63.6c10 12 18.4 34.4 18.4 50v68.4c0 42.4 34.8 77.2 77.2 77.2h69.2c15.6 0 38.4 8.4 50.4 18.8l63.2 54.4c27.6 23.6 72.8 23.6 100.8 0l63.2-54.4c12-10.4 34.4-18.8 50.4-18.8h68c42.4 0 77.2-34.8 77.2-77.2v-68c0-15.6 8.4-38.4 18.8-50.4l54.4-63.2c23.2-27.6 23.2-73.2-.4-100.8zm-216-25.2-193.2 193.2a30 30 0 0 1-42.4 0l-96.8-96.8a30.16 30.16 0 0 1 0-42.4c11.6-11.6 30.8-11.6 42.4 0l75.6 75.6 172-172c11.6-11.6 30.8-11.6 42.4 0 11.6 11.6 11.6 30.8 0 42.4z",fill:"#27ae60"}))},emits:["submit","reply","like","delete","status","sticky"],setup(n){const t=D1("config"),e=G0(),r=_s(),l=n1(()=>t.value.locale),i=n1(()=>{let{link:k}=n.comment;return k?O0(k)?k:`https://${k}`:""}),h=n1(()=>e.value.includes(n.comment.objectId)),d=((k,_)=>{const g=K6();return n1(()=>pl(k,g.value,_))})(n.comment.insertedAt,l.value),u=n1(()=>r.value.type==="administrator"),w=n1(()=>n.comment.user_id&&r.value.objectId===n.comment.user_id),v=n1(()=>{var k;return n.comment.objectId===((k=n.reply)==null?void 0:k.objectId)});return{config:t,locale:l,isReplyingCurrent:v,link:i,like:h,time:d,isAdmin:u,isOwner:w,commentStatus:ei}}}),oi=["id"],ci={class:"wl-user","aria-hidden":"true"},ai=["src"],ri={class:"wl-card"},li={class:"wl-head"},ii=["href"],pi={key:1,class:"wl-nick"},hi=["textContent"],di=["textContent"],ui=["textContent"],wi=["textContent"],vi=["textContent"],_i={class:"wl-comment-actions"},gi=["title"],ki=["textContent"],mi=["title"],xi={class:"wl-meta","aria-hidden":"true"},fi=["textContent"],$i=["textContent"],Mi=["textContent"],Ci=["innerHTML"],zi={key:0,class:"wl-admin-actions"},bi={class:"wl-comment-status"},Bi=["disabled","onClick","textContent"],yi={key:1,class:"wl-reply-wrapper"},Li={key:2,class:"wl-quote"},Hi=a({name:"WalineRoot",components:{CommentBox:N0,CommentCard:Zt(si,[["render",function(n,t,e,r,l,i){const h=E1("VerifiedIcon"),d=E1("DeleteIcon"),u=E1("LikeIcon"),w=E1("ReplyIcon"),v=E1("CommentBox"),k=E1("CommentCard",!0);return o(),c("div",{class:"wl-item",id:n.comment.objectId},[s("div",ci,[n.comment.avatar?(o(),c("img",{key:0,src:n.comment.avatar},null,8,ai)):v1("v-if",!0),n.comment.type?(o(),w2(h,{key:1})):v1("v-if",!0)]),s("div",ri,[s("div",li,[n.link?(o(),c("a",{key:0,class:"wl-nick",href:n.link,target:"_blank",rel:"nofollow noreferrer"},y1(n.comment.nick),9,ii)):(o(),c("span",pi,y1(n.comment.nick),1)),n.comment.type==="administrator"?(o(),c("span",{key:2,class:"wl-badge",textContent:y1(n.locale.admin)},null,8,hi)):v1("v-if",!0),n.comment.label?(o(),c("span",{key:3,class:"wl-badge",textContent:y1(n.comment.label)},null,8,di)):v1("v-if",!0),n.comment.sticky?(o(),c("span",{key:4,class:"wl-badge",textContent:y1(n.locale.sticky)},null,8,ui)):v1("v-if",!0),n.comment.level!==void 0&&n.comment.level>=0?(o(),c("span",{key:5,class:G1(`wl-badge level${n.comment.level}`),textContent:y1(n.locale[`level${n.comment.level}`]||`Level ${n.comment.level}`)},null,10,wi)):v1("v-if",!0),s("span",{class:"wl-time",textContent:y1(n.time)},null,8,vi),s("div",_i,[n.isAdmin||n.isOwner?(o(),c("button",{key:0,class:"wl-delete",onClick:t[0]||(t[0]=_=>n.$emit("delete",n.comment))},[g1(d)])):v1("v-if",!0),s("button",{class:"wl-like",onClick:t[1]||(t[1]=_=>n.$emit("like",n.comment)),title:n.like?n.locale.cancelLike:n.locale.like},[g1(u,{active:n.like},null,8,["active"]),"like"in n.comment?(o(),c("span",{key:0,textContent:y1(n.comment.like)},null,8,ki)):v1("v-if",!0)],8,gi),s("button",{class:G1(["wl-reply",{active:n.isReplyingCurrent}]),title:n.isReplyingCurrent?n.locale.cancelReply:n.locale.reply,onClick:t[2]||(t[2]=_=>n.$emit("reply",n.isReplyingCurrent?null:n.comment))},[g1(w)],10,mi)])]),s("div",xi,[n.comment.addr?(o(),c("span",{key:0,textContent:y1(n.comment.addr)},null,8,fi)):v1("v-if",!0),n.comment.browser?(o(),c("span",{key:1,textContent:y1(n.comment.browser)},null,8,$i)):v1("v-if",!0),n.comment.os?(o(),c("span",{key:2,textContent:y1(n.comment.os)},null,8,Mi)):v1("v-if",!0)]),s("div",{class:"wl-content",innerHTML:n.comment.comment},null,8,Ci),n.isAdmin?(o(),c("div",zi,[s("span",bi,[(o(!0),c(H1,null,b2(n.commentStatus,_=>(o(),c("button",{key:_,class:G1(`wl-btn wl-${_}`),disabled:n.comment.status===_,onClick:g=>n.$emit("status",{status:_,comment:n.comment}),textContent:y1(_)},null,10,Bi))),128))]),n.isAdmin&&!n.comment.rid?(o(),c("button",{key:0,class:"wl-btn wl-sticky",onClick:t[3]||(t[3]=_=>n.$emit("sticky",n.comment))},y1(n.comment.sticky?"unsticky":"sticky"),1)):v1("v-if",!0)])):v1("v-if",!0),n.isReplyingCurrent?(o(),c("div",yi,[g1(v,{replyId:n.comment.objectId,replyUser:n.comment.nick,rootId:n.rootId,onSubmit:t[4]||(t[4]=_=>n.$emit("submit",_)),onCancelReply:t[5]||(t[5]=_=>n.$emit("reply",null))},null,8,["replyId","replyUser","rootId"])])):v1("v-if",!0),n.comment.children?(o(),c("div",Li,[(o(!0),c(H1,null,b2(n.comment.children,_=>(o(),w2(k,{key:_.objectId,comment:_,reply:n.reply,rootId:n.rootId,onReply:t[6]||(t[6]=g=>n.$emit("reply",g)),onSubmit:t[7]||(t[7]=g=>n.$emit("submit",g)),onLike:t[8]||(t[8]=g=>n.$emit("like",g)),onDelete:t[9]||(t[9]=g=>n.$emit("delete",g)),onStatus:t[10]||(t[10]=g=>n.$emit("status",g)),onSticky:t[11]||(t[11]=g=>n.$emit("sticky",g))},null,8,["comment","reply","rootId"]))),128))])):v1("v-if",!0)])],8,oi)}],["__file","CommentCard.vue"]]),LoadingIcon:vs},props:["serverURL","path","meta","requiredMeta","dark","lang","locale","pageSize","wordLimit","emoji","login","highlighter","texRenderer","imageUploader","copyright"],setup(n){const t=n1(()=>(({serverURL:x,path:C=location.pathname,lang:b="zh-CN",locale:f,emoji:M=["//unpkg.com/@waline/emojis@1.0.1/weibo"],meta:L=["nick","mail","link"],requiredMeta:B=[],dark:S=!1,pageSize:I=10,wordLimit:W,imageUploader:P,highlighter:J,texRenderer:X,copyright:i1=!0,login:D="enable",search:p1=sl(),...U})=>({serverURL:ll(x),path:rl(C),locale:{...qo[b]||qo["zh-CN"],...typeof f=="object"?f:{}},wordLimit:il(W),meta:Fo(L),requiredMeta:Fo(B),imageUploader:we(P,tl),highlighter:we(J,cl),texRenderer:we(X,el),lang:b,dark:S,emoji:M,pageSize:I,login:D,copyright:i1,search:p1,...U}))(n)),e=_s(),r=G0(),l=Y("loading"),i=Y(0),h=Y(1),d=Y(0),u=Y([]),w=Y(null),v=n1(()=>{return typeof(x=t.value.dark)=="string"?x==="auto"?`@media(prefers-color-scheme:dark){body${ve}}`:`${x}${ve}`:x===!0?`:root${ve}`:"";var x});let k;(function(x,C={}){const b=Y(!1),{document:f=I6,immediate:M=!0,manual:L=!1,id:B="vueuse_styletag_"+ ++J6}=C,S=Y(x);let I=()=>{};const W=()=>{if(!f)return;const J=f.getElementById(B)||f.createElement("style");J.type="text/css",J.id=B,C.media&&(J.media=C.media),f.head.appendChild(J),b.value||(I=W1(S,X=>{J.innerText=X},{immediate:!0}),b.value=!0)},P=()=>{f&&b.value&&(I(),f.head.removeChild(f.getElementById(B)),b.value=!1)};M&&!L&&W(),L||Nn(P),ct(b)})(v);const _=x=>{var L;const{serverURL:C,path:b,pageSize:f}=t.value,M=new AbortController;l.value="loading",k==null||k(),ul({serverURL:C,lang:t.value.lang,path:b,pageSize:f,page:x,signal:M.signal,token:(L=e.value)==null?void 0:L.token}).then(B=>{l.value="success",i.value=B.count,u.value.push(...B.data),h.value=x,d.value=B.totalPages}).catch(B=>{B.name!=="AbortError"&&(console.error(B.message),l.value="error")}),k=M.abort.bind(M)},g=()=>{i.value=0,u.value=[],_(1)};return d2("config",t),W1(()=>n.path,g),Y1(()=>g()),{config:t,darkmodeStyle:v,i18n:n1(()=>t.value.locale),status:l,count:i,page:h,totalPages:d,data:u,reply:w,loadMore:()=>_(h.value+1),refresh:g,onReply:x=>{w.value=x},onSubmit:x=>{if(x.rid){const C=u.value.find(({objectId:b})=>b===x.rid);if(!C)return;Array.isArray(C.children)||(C.children=[]),C.children.push(x)}else u.value.unshift(x)},onStatusChange:async({comment:x,status:C})=>{var M;if(x.status===C)return;const{serverURL:b,lang:f}=t.value;await No({serverURL:b,lang:f,token:(M=e.value)==null?void 0:M.token,objectId:x.objectId,status:C}),x.status=C},onDelete:async({objectId:x})=>{var f;if(!confirm("Are you sure you want to delete this comment?"))return;const{serverURL:C,lang:b}=t.value;await(({serverURL:M,lang:L,token:B,objectId:S})=>fetch(`${M}/comment/${S}?lang=${L}`,{method:"DELETE",headers:{Authorization:`Bearer ${B}`}}).then(I=>I.json()))({serverURL:C,lang:b,token:(f=e.value)==null?void 0:f.token,objectId:x}),u.value.some((M,L)=>M.objectId===x?(u.value=u.value.filter((B,S)=>S!==L),!0):M.children.some((B,S)=>B.objectId===x&&(u.value[L].children=M.children.filter((I,W)=>W!==S),!0)))},onSticky:async x=>{var f;if(x.rid)return;const{serverURL:C,lang:b}=t.value;await No({serverURL:C,lang:b,token:(f=e.value)==null?void 0:f.token,objectId:x.objectId,sticky:x.sticky?0:1}),x.sticky=!x.sticky},onLike:async x=>{const{serverURL:C,lang:b}=t.value,{objectId:f}=x,M=r.value.includes(f);await(({serverURL:L,lang:B,objectId:S,like:I})=>fetch(`${L}/comment/${S}?lang=${B}`,{method:"PUT",headers:dl,body:JSON.stringify({like:I})}).then(W=>W.json()))({serverURL:C,lang:b,objectId:f,like:!M}),M?r.value=r.value.filter(L=>L!==f):(r.value=[...r.value,f],r.value.length>50&&(r.value=r.value.slice(-50))),x.like=(x.like||0)+(M?-1:1)},version:"2.6.1"}}}),Vi={"data-waline":""},ji={class:"wl-count"},Si=["textContent"],Ai={class:"wl-cards"},Ri={key:1,class:"wl-operation"},Pi=["textContent"],Ti={key:0,class:"wl-loading"},Di=["textContent"],Fi={class:"wl-operation"},Ei=["textContent"],Ii={key:3,class:"wl-power"},Oi=u2(" Powered by "),qi=s("a",{href:"https://github.com/walinejs/waline",target:"_blank",rel:"noreferrer"}," Waline ",-1);var Gi=Zt(Hi,[["render",function(n,t,e,r,l,i){const h=E1("CommentBox"),d=E1("CommentCard"),u=E1("LoadingIcon");return o(),c("div",Vi,[n.reply?v1("v-if",!0):(o(),w2(h,{key:0,onSubmit:n.onSubmit},null,8,["onSubmit"])),s("div",ji,[n.count?(o(),c("span",{key:0,class:"wl-num",textContent:y1(n.count)},null,8,Si)):v1("v-if",!0),u2(" "+y1(n.i18n.comment),1)]),s("div",Ai,[(o(!0),c(H1,null,b2(n.data,w=>(o(),w2(d,{key:w.objectId,"root-id":w.objectId,comment:w,reply:n.reply,onReply:n.onReply,onSubmit:n.onSubmit,onStatus:n.onStatusChange,onDelete:n.onDelete,onSticky:n.onSticky,onLike:n.onLike},null,8,["root-id","comment","reply","onReply","onSubmit","onStatus","onDelete","onSticky","onLike"]))),128))]),n.status==="error"?(o(),c("div",Ri,[s("button",{type:"button",class:"wl-btn",onClick:t[0]||(t[0]=(...w)=>n.refresh&&n.refresh(...w)),textContent:y1(n.i18n.refresh)},null,8,Pi)])):(o(),c(H1,{key:2},[n.status==="loading"?(o(),c("div",Ti,[g1(u,{size:30})])):n.data.length?n.page<n.totalPages?(o(),c(H1,{key:2},[v1(" Load more button "),s("div",Fi,[s("button",{type:"button",class:"wl-btn",onClick:t[1]||(t[1]=(...w)=>n.loadMore&&n.loadMore(...w)),textContent:y1(n.i18n.more)},null,8,Ei)])],2112)):v1("v-if",!0):(o(),c("div",{key:1,class:"wl-empty",textContent:y1(n.i18n.sofa)},null,8,Di))],64)),v1(" Copyright Information "),n.config.copyright?(o(),c("div",Ii,[Oi,qi,u2(" v"+y1(n.version),1)])):v1("v-if",!0)])}],["__file","Waline.vue"]]);var Jo=a({name:"Waline",props:{options:{type:Object,default(){return{}}}},setup(n){const t=it(),{options:e}=Mn(n),r=v0(),l=n1(()=>({lang:r.value||"zh-CN",dark:"html.dark",path:m0(t.path),...e.value}));return()=>q("div",{class:"reco-waline-wrapper"},q(Gi,l.value))}}),Ni=a({components:{Valine:Mo,Waline:Jo},props:{hideComments:{type:Boolean,default:!0}},setup(n){const{solution:t,options:e}=pr(),{hideComments:r}=Mn(n);let l;switch(t.value){case"valine":l=Mo;break;case"waline":l=Jo;break;default:l="";break}return()=>l?q(l,{options:e.value,style:`display: ${r.value?"none":"block"}`}):null}}),Ui=a({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(n){const t=g0(),e=it(),{idVal:r,numStyle:l,flagTitle:i}=Mn(n),h=d=>t.value.base.slice(0,t.value.base.length-1)+d;return()=>q("span",{id:h(r.value||e.path),class:"leancloud-visitors","data-flag-title":i.value},q("a",{class:"leancloud-visitors-count",style:l.value}))}});function Wi({app:n}){n.component("Comments",t=>q(Ni,{...t})),n.component("ValineViews",t=>q(Ui,{...t}))}var Ki=f2({enhance(...n){Wi(...n)}});const U0=Symbol(""),W0=Symbol(""),Ie=Symbol("");function dWn(){const n=D1(W0)||{},t=D1(Ie)||{},e=D1(U0)||{};if(!Ie)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:r}=zn();return{classificationPosts:n1(()=>e.value[r.value.path]||{}),classificationSummary:n,posts:t}}const Ji={"/categories/css/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"css",pages:[{data:{key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/110401.md"},key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],content:`
### Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A
\`\`\`js
<template>
  <div class="custom-basic-page-layout-container">
    <CustomNavBar :title="headerTitle" />
    <div class="main-content">
      <slot name="body"></slot>
    </div>
    <div class="foot-btn-area">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="ManagePage">
  const props = defineProps({
    headerTitle: {
      type: String,
      default: '\u7A7A',
    },
    footerHeight: {
      type: String,
      default: '62.39px',
    },
  });
  // \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09
  const minH = \`calc(100vh - 47.83px - \${props.footerHeight})\`;
<\/script>

<style lang="scss" scoped>
  .custom-basic-page-layout-container {
    height: 100vh;
    background-color: #f7f8fa;
    .main-content {
      min-height: v-bind('minH');
    }
    .foot-btn-area {
      background-color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>

\`\`\`

### \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09
\`\`\`js
<template>
	<div class="content" :style="{'--color': themeColor}">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="themeColor='pink'">\u4FEE\u6539\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {
			return {
				themeColor: 'red'
			}
		},
	}
<\/script>
 
<style lang="scss">
	.content {
		// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528
		width: 100%;
		height: 200px;
		background-color: var(--color);
 
		.title {
			background-color: white;
			color: var(--color);
		}
	}
</style>
\`\`\`

### \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539
\`\`\`js
<template>
	<div class="content" ref="content">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="changeBgColor">\u4FEE\u6539\u80CC\u666F\u989C\u8272</button>
	<button @click="changeFontColor">\u4FEE\u6539\u5B57\u4F53\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {},
		methods: {
			changeBgColor() {
				document.getElementsByTagName('body')[0].style.setProperty('--bg-color', 'pink');
			},
			changeFontColor() {
				// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539
				this.$refs.content.style.setProperty("--font-color", 'pink');
			}
		},
	}
<\/script>
 
<style lang="scss">
	// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY
	// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C
	$themeBgColor: var(--bg-color, red);
 
	.content {
		--font-color: red;
		width: 100%;
		height: 200px;
		background-color: $themeBgColor;
 
		.title {
			background-color: white;
			color: var(--font-color);
		}
	}
</style>
\`\`\``,contentRendered:`<h3 id="vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" aria-hidden="true">#</a> Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"custom-basic-page-layout-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomNavBar <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"headerTitle"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-content"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-btn-area"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup name<span class="token operator">=</span><span class="token string">"ManagePage"</span><span class="token operator">></span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u7A7A'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footerHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'62.39px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09</span>
  <span class="token keyword">const</span> minH <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - 47.83px - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>footerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
  <span class="token punctuation">.</span>custom<span class="token operator">-</span>basic<span class="token operator">-</span>page<span class="token operator">-</span>layout<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f7f8fa<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
      min<span class="token operator">-</span>height<span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'minH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>foot<span class="token operator">-</span>btn<span class="token operator">-</span>area <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'--color': themeColor}"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"themeColor='pink'"</span><span class="token operator">></span>\u4FEE\u6539\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token comment">// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> ref<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeBgColor"</span><span class="token operator">></span>\u4FEE\u6539\u80CC\u666F\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeFontColor"</span><span class="token operator">></span>\u4FEE\u6539\u5B57\u4F53\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">changeBgColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--bg-color'</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">changeFontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--font-color"</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token comment">// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY</span>
	<span class="token comment">// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C</span>
	<span class="token literal-property property">$themeBgColor</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>bg<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> $themeBgColor<span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-04",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/110401.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF"},slug:"110401",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/110401.md",filePathRelative:"blogs/css/2022/110401.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.vue",componentFilePathRelative:"pages/blogs/css/2022/110401.html.vue",componentFileChunkName:"v-729d99c6",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.js",dataFilePathRelative:"pages/blogs/css/2022/110401.html.js",dataFileChunkName:"v-729d99c6",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/110401.html",htmlFilePathRelative:"blogs/css/2022/110401.html"},{data:{key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/102601.md"},key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],content:`
## gap
\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694

## position: sticky
\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
![](https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png)
\`\`\`js
// css \u90E8\u5206
.container {
    background-color: oldlace;
    height: 200px;
    width: 140px;
    overflow: auto;
  }
  .container div {
    height: 20px;
    background-color: aqua;
    border: 1px solid;
  }
  .container .header {
    position: sticky;
    top: 0;
    background-color: rgb(187, 153, 153);
}

// html \u90E8\u5206
<div class="container">
  <div class="header">Header</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
\`\`\``,contentRendered:`<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2>
<p>\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694</p>
<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h2>
<p>\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
<img src="https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// css \u90E8\u5206</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> oldlace<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 140px<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container div <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// html \u90E8\u5206</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-26",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/102601.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027"},slug:"102601",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/102601.md",filePathRelative:"blogs/css/2022/102601.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.vue",componentFilePathRelative:"pages/blogs/css/2022/102601.html.vue",componentFileChunkName:"v-769f6067",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.js",dataFilePathRelative:"pages/blogs/css/2022/102601.html.js",dataFileChunkName:"v-769f6067",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/102601.html",htmlFilePathRelative:"blogs/css/2022/102601.html"}]},"/categories/js/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"js",pages:[{data:{key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101701.md"},key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],content:`
## \u590D\u5236\u5230\u526A\u5207\u677F
\`\`\`js
const copyToClipboard = (text:any) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
const click=()=>{
  copyToClipboard("Hello World!")
}
\`\`\`

\`\`\`js
const input = document.createElement('input'); // js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846
input.value = 'hello world';
document.body.appendChild(input); // \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762
input.select(); // \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9
document.execCommand('Copy'); // \u6267\u884C\u590D\u5236\u64CD\u4F5C
document.body.removeChild(input); // \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C
\`\`\`

## \u6EDA\u52A8\u5230\u9876\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
\`\`\`

## \u6EDA\u52A8\u5230\u5E95\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "end" });
}
\`\`\`

## \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D
\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver
\`\`\`js
const callback = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      // \`entry.target\` is the dom element
      console.log(\`\${entry.target.id} is visible\`);
    }else{
      console.log(\`\${entry.target.id} is notvisible\`);
    }
  });
};
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C
const scrollContainer=()=>{
  const testDiv:any=document.getElementById("testDiv"); // \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20
  observer.observe(testDiv);
}
\`\`\`

## \u68C0\u6D4B\u8BBE\u5907
\`\`\`js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";

console.log(detectDeviceType());
\`\`\``,contentRendered:`<h2 id="\u590D\u5236\u5230\u526A\u5207\u677F" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5230\u526A\u5207\u677F" aria-hidden="true">#</a> \u590D\u5236\u5230\u526A\u5207\u677F</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span>writeText <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762</span>
input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'Copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u590D\u5236\u64CD\u4F5C</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u9876\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u9876\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"start"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u5E95\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u5E95\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"end"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" aria-hidden="true">#</a> \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D</h2>
<p>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entries</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entry</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`entry.target\` is the dom element</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is visible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is notvisible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C</span>
<span class="token keyword">const</span> <span class="token function-variable function">scrollContainer</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">testDiv</span><span class="token operator">:</span>any<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testDiv"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>testDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BBE\u5907" aria-hidden="true">#</a> \u68C0\u6D4B\u8BBE\u5907</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">detectDeviceType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
    navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Mobile"</span> <span class="token operator">:</span> <span class="token string">"Desktop"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101701.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570"},slug:"101701",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101701.md",filePathRelative:"blogs/js/2022/101701.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101701.html.vue",componentFileChunkName:"v-37e04cf1",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.js",dataFilePathRelative:"pages/blogs/js/2022/101701.html.js",dataFileChunkName:"v-37e04cf1",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101701.html",htmlFilePathRelative:"blogs/js/2022/101701.html"},{data:{key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101201.md"},key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],content:`
## \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD
::: tip
Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4
:::
\`\`\`js
// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
const setData = Array.from(new Set(arr));
console.log(setData); //[1,2,3,4,5]
\`\`\`

### \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD
\`\`\`js
// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1)
      j--
    }
  }
}
console.log(arr); //[1,2,3,4,5]
\`\`\`

### \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  let repeatArr = [];
  for (let i = 0,len = arr.length ; i < len; i++) 
    if (repeatArr.indexOf(arr[i]) === -1)  repeatArr.push(arr[i])
    // if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])
  return repeatArr;
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

### \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  arr.filter((item,index)=> arr.indexOf(item,0)===index)
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

## \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u4F7F\u7528filter\u548CMap
\`\`\`js
// \u6700\u63A8\u8350
function uniqueFunc(arr, uniId){
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
\`\`\`

### \u4F7F\u7528reduce
\`\`\`js
function uniqueFunc(arr, uniId){
  let hash = {}
  return arr.reduce((accum,item) => {
    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
    return accum
  },[])
}
\`\`\`

### \u4F7F\u7528for\u5FAA\u73AF
\`\`\`js
function uniqueFunc(arr, uniId){
  let obj = {}
  let tempArr = []
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i][uniId]]){
      tempArr.push(arr[i])
      obj[arr[i][uniId]] = true
    }
  }
  return tempArr
}
\`\`\``,contentRendered:`<h2 id="\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4</p>
</div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> setData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> repeatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeatArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  repeatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])</span>
  <span class="token keyword">return</span> repeatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">===</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u4F7F\u7528filter\u548Cmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528filter\u548Cmap" aria-hidden="true">#</a> \u4F7F\u7528filter\u548CMap</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6700\u63A8\u8350</span>
<span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528reduce" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528reduce" aria-hidden="true">#</a> \u4F7F\u7528reduce</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accum<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> accum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">return</span> accum
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528for\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528for\u5FAA\u73AF</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tempArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-13",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101201.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},slug:"101201",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101201.md",filePathRelative:"blogs/js/2022/101201.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101201.html.vue",componentFileChunkName:"v-307a6c96",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.js",dataFilePathRelative:"pages/blogs/js/2022/101201.html.js",dataFileChunkName:"v-307a6c96",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101201.html",htmlFilePathRelative:"blogs/js/2022/101201.html"}]},"/categories/vue3.0/1/":{pageSize:10,total:3,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"vue3.0",pages:[{data:{key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100802.md"},key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A

:::: code-group
::: code-group-item main.js
\`\`\`js 
import App from './App.vue'
import commUtils from './utils/comm'

const app=createApp(App)
app.config.globalProperties.$commUtils = commUtils;
\`\`\`
:::
::: code-group-item comm.ts
\`\`\`js
// \u91D1\u989D\u683C\u5F0F\u5316
const formatPrice = (num: number) => {
  return num
    ? Number(num)
        .toFixed(2)
        .replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,')
    : '0.00';
}; 

export default{formatPrice}
\`\`\`
:::
::: code-group-item index.vue
\`\`\`js
import {getCurrentInstance } from 'vue';

const { proxy }:any = getCurrentInstance()
console.log(proxy.$commUtils.formatPrice(1998)); //1,998.00
\`\`\`
:::
::::
`,contentRendered:`<p>Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="main.js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> commUtils <span class="token keyword">from</span> <span class="token string">'./utils/comm'</span>

<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$commUtils <span class="token operator">=</span> commUtils<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="comm.ts">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u91D1\u989D\u683C\u5F0F\u5316</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
    <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'$1,'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">'0.00'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>formatPrice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="index.vue">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>$commUtils<span class="token punctuation">.</span><span class="token function">formatPrice</span><span class="token punctuation">(</span><span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,998.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5"},slug:"100802",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100802.md",filePathRelative:"blogs/vue3.0/2022/100802.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.vue",componentFileChunkName:"v-1e558f08",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.js",dataFileChunkName:"v-1e558f08",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100802.html",htmlFilePathRelative:"blogs/vue3.0/2022/100802.html"},{data:{key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100801.md"},key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A
\`\`\`js
<script setup>
import { getCurrentInstance } from 'vue'

const { ctx } = getCurrentInstance()
console.log(ctx) // \u548C this \u7684\u5C5E\u6027\u4E00\u6837
<\/script>
\`\`\`
\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A

![](https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png)`,contentRendered:`<p>Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// \u548C this \u7684\u5C5E\u6027\u4E00\u6837</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png" alt=""></p>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this"},slug:"100801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100801.md",filePathRelative:"blogs/vue3.0/2022/100801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.vue",componentFileChunkName:"v-1ca0b669",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.js",dataFileChunkName:"v-1ca0b669",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100801.html",htmlFilePathRelative:"blogs/vue3.0/2022/100801.html"},{data:{key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/092901.md"},key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D

. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D

2.\u6DF1\u62F7\u8D1D

![alt](https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png)


![alt](https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png)`,contentRendered:`<p>1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D</p>
<p>. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D</p>
<p>2.\u6DF1\u62F7\u8D1D</p>
<p><img src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png" alt="alt"></p>
<p><img src="https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png" alt="alt"></p>
`,date:"2022-09-29",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D"},slug:"092901",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/092901.md",filePathRelative:"blogs/vue3.0/2022/092901.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.vue",componentFileChunkName:"v-a289eec0",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.js",dataFileChunkName:"v-a289eec0",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/092901.html",htmlFilePathRelative:"blogs/vue3.0/2022/092901.html"}]},"/tags/weixinxiaochengxu/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"weixinxiaochengxu",pages:[{data:{key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/weixin/2022/111801.md"},key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],content:`
## \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027
\`\`\`js
// wxml
<image src="{{ imgSrc }}" mode="widthFix"></image>

// js
data: {
  imgSrc: 'http://www.itcast.cn/2018czgw/images/logo.png'
}
\`\`\`

## \u5E38\u7528\u4E8B\u4EF6
* bindtap\u3001bindinput\u3001bindchange
* bind:tap\u3001bind:input\u3001bind:chage

|  \u7C7B\u578B  |         \u7ED1\u5B9A\u65B9\u5F0F          |                    \u4E8B\u4EF6\u63CF\u8FF0                     |
| :----: | :-----------------------: | :---------------------------------------------: |
|  tap   |    bindtap \u6216 bind:tap    | \u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6 |
| input  | bindinput \u6216\u8005 bind:input |                \u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6                 |
| change | bindchange \u6216 bind:change |                 \u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1                  |

### bindtap\u8BED\u6CD5
\`\`\`js
// wxml
<button type="primary" bindtap="bindTapHandler">\u6309\u94AE</button>

// js
Page({
  bindTapHandler(e:any){
    console.log(e);
  }
})
\`\`\`
* \u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570
\`\`\`js
// wxml
// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548
<button type="primary" bindtap="bindTapHandler(123)">\u6309\u94AE</button>

// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F
// wxml
<button type="primary" bindtap="bindTapHandler" data-myInfo="{{ {age:'18',name:'luochao'}  }}">\u6309\u94AE</button>
// js
Page({
  bindTapHandler(e:any){
    // e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20
    // e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20
    console.log(e.target.dataset) // dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879
    console.log(e.target.dataset.myInfo); // {age:'18',name:'luochao'}
  }
})
\`\`\`
::: warning
\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget
:::
* \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C
\`\`\`js
Page({
  data:{
    textMyObj:{
      number:999
    }
  },
  bindTapHandler(e:any){
    this.setData({
      textMyObj:{
        number:888
      }
    })
  },
})
\`\`\`
### bindinput\u8BED\u6CD5
\`\`\`js
// wxml
<input bindinput="inputHandler"></input>

// js
Page({
  inputHandler(e:any){
    // e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C
    console.log(e.detail.value)
  }
})
\`\`\`
* input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A
\`\`\`js
// wxml
<input value="{{count}}" bindinput="inputHandler"></input>

// js
Page({
  data:{
    count:1,
  },
  inputHandler(e:any){
    this.setData({
      count:e.detail.value
    })
  },
})
\`\`\`

## \u6761\u4EF6\u6E32\u67D3
\`\`\`js
// \u76F8\u5F53\u4E8Ev-if
<view wx:if="{{ type === 1 }}">\u7537</view>
<view wx:elif="{{ type === 2 }}">\u5973</view>
<view wx:else>\u4FDD\u5BC6</view>

<block wx:if="{{ true }}"> // \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E
  <view>\u4E9A\u745F</view>
  <view>\u59B2\u5DF1</view>
  <view>\u8499\u606C</view>
</block>

// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690
<view hidden="{{ false }}">\u6761\u4EF6\u4E3A true \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A false \u663E\u793A</view>
\`\`\`

## \u5217\u8868\u6E32\u67D3
### \u5E38\u89C4
\`\`\`js
// wxml
// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item
<view wx:for="{{ arr }}">
  \u7D22\u5F15\u662F: {{ index }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ item }}
</view>

// js
Page({
  data:{
    arr:['\u4E9A\u745F', '\u59B2\u5DF1', '\u8499\u606C']
  },
})
\`\`\`
### \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D
\`\`\`js
// wxml
// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C
<view wx:for="{{ arr }}" wx:for-index="idx" wx:for-item="itemName" wx:key="id">
  \u7D22\u5F15\u662F: {{ idx }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ itemName }}
</view>

// js
Page({
  data:{
    arr:[
      {id:1,name:'\u5C0F\u7EA2'},
      {id:2,name:'\u5C0F\u9EC4'},
      {id:3,name:'\u5C0F\u767D'},
    ]
  },
})
\`\`\`

## wxss
\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709
* rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px

* @import\u5F15\u5165\u6837\u5F0F\u8868
![](https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png)

## \u6570\u636E\u8BF7\u6C42
### \u9650\u5236
* \u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3
* \u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --> \u5F00\u53D1 --> \u5F00\u53D1\u7BA1\u7406 --> \u5F00\u53D1\u8BBE\u7F6E --> \u670D\u52A1\u5668\u57DF\u540D --> \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D

### \u53D1\u8D77\u8BF7\u6C42
\`\`\`js
wx.request({
  url: 'example.php', //\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740
  method:'GET',
  data: {
    x: '',
    y: ''
  },
  success (res) {
    console.log(res.data)
  },
  fail () {
    console.log('fail')
  },
  complete () {
    console.log('complete')
  },
})
\`\`\`

## \u9875\u9762\u5BFC\u822A
### \u7F16\u7A0B\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/home/home" open-type="switchTab">\u8DF3\u8F6C</navigator>
\`\`\`
* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/info/info?age=18&name=\u7F57\u8D85" open-type="navigate">\u8DF3\u8F6C</navigator>
\`\`\`
::: info
\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548

\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`
:::

### \u58F0\u660E\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToTabBar(){
  wx.switchTab({
    url:'/pages/contact/contact',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToNoTabBar(){
  wx.navigateTo({
    url:'/pages/info/info?name=luochao',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`
\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`

### \u540E\u9000\u5BFC\u822A
\`\`\`js
// \u58F0\u660E\u5F0F\u5BFC\u822A
// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7
<navigator open-type="navigateBack" delta="1">\u8FD4\u56DE\u4E0A\u4E00\u9875</navigator>

// \u7F16\u7A0B\u5F0F\u5BFC\u822A
// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002
// wx.navigateBack(Object object)
gotToBack(){
  wx.navigateBack({
    delta:1,
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

## \u4E0B\u62C9\u5237\u65B0
* \u5168\u5C40\u5F00\u542F

\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

* \u5C40\u90E8\u5F00\u542F

\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

::: tip
\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F
:::

\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code>

\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C

\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code>

## \u4E0A\u62C9\u89E6\u5E95
\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px

\u89E6\u53D1\uFF1A<code>onReachBottom()</code>

## wxs
* \u5185\u5D4Cwxs\u811A\u672C
\`\`\`js
<view>
  {{m1.toLower('HJSFSFKS')}}
</view>

<wxs module="m1">
  module.exports.toLower = function(str) {
    return str.toLower()
  }
</wxs>
\`\`\`

* \u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C
\`\`\`js
// tools.wxs
function toLower(str){
  return str.toLowerCase()
}

module.exports={
  toLower:toLower
}

// message.wxml
<view>
  {{m2.toLower('HJSFSFKS')}}
</view>

<wxs src="../../wxs/tools.wxs" module="m2"/>
\`\`\`

## \u5176\u4ED6
\`\`\`js
// \u4FEE\u6539navBar\u6807\u9898
wx.setNavigationBarTitle({
  title: 'test'
})

// \u52A0\u8F7D\u6548\u679Capi
// \u52A0\u8F7D\u4E2D
wx.showLoading({
  title:'\u6570\u636E\u52A0\u8F7D\u4E2D......'
})
// \u7ED3\u675F
wx.hideLoading()

// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3
wx.stopPullDownRefresh()

// \u8F7B\u63D0\u793A
wx.showToast({
  title:'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01',
  icon:'none'
})
\`\`\``,contentRendered:`<h2 id="\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>image src<span class="token operator">=</span><span class="token string">"{{ imgSrc }}"</span> mode<span class="token operator">=</span><span class="token string">"widthFix"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>image<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">imgSrc</span><span class="token operator">:</span> <span class="token string">'http://www.itcast.cn/2018czgw/images/logo.png'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u4E8B\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u4E8B\u4EF6</h2>
<ul>
<li>bindtap\u3001bindinput\u3001bindchange</li>
<li>bind:tap\u3001bind:input\u3001bind:chage</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u7ED1\u5B9A\u65B9\u5F0F</th>
<th style="text-align:center">\u4E8B\u4EF6\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tap</td>
<td style="text-align:center">bindtap \u6216 bind:tap</td>
<td style="text-align:center">\u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">input</td>
<td style="text-align:center">bindinput \u6216\u8005 bind:input</td>
<td style="text-align:center">\u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">bindchange \u6216 bind:change</td>
<td style="text-align:center">\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td>
</tr>
</tbody>
</table>
<h3 id="bindtap\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindtap\u8BED\u6CD5" aria-hidden="true">#</a> bindtap\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler(123)"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F</span>
<span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span> data<span class="token operator">-</span>myInfo<span class="token operator">=</span><span class="token string">"{{ {age:'18',name:'luochao'}  }}"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    <span class="token comment">// e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span> <span class="token comment">// dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>myInfo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {age:'18',name:'luochao'}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget</p>
</div><ul>
<li>\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">999</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">888</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bindinput\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindinput\u8BED\u6CD5" aria-hidden="true">#</a> bindinput\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token string">"{{count}}"</span> bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u76F8\u5F53\u4E8Ev-if</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ type === 1 }}"</span><span class="token operator">></span>\u7537<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span>elif<span class="token operator">=</span><span class="token string">"{{ type === 2 }}"</span><span class="token operator">></span>\u5973<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">else</span><span class="token operator">></span>\u4FDD\u5BC6<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>block wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ true }}"</span><span class="token operator">></span> <span class="token comment">// \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E</span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u4E9A\u745F<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u59B2\u5DF1<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u8499\u606C<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>block<span class="token operator">></span>

<span class="token comment">// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690</span>
<span class="token operator">&lt;</span>view hidden<span class="token operator">=</span><span class="token string">"{{ false }}"</span><span class="token operator">></span>\u6761\u4EF6\u4E3A <span class="token boolean">true</span> \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A <span class="token boolean">false</span> \u663E\u793A<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u5217\u8868\u6E32\u67D3</h2>
<h3 id="\u5E38\u89C4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4" aria-hidden="true">#</a> \u5E38\u89C4</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'\u4E9A\u745F'</span><span class="token punctuation">,</span> <span class="token string">'\u59B2\u5DF1'</span><span class="token punctuation">,</span> <span class="token string">'\u8499\u606C'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" aria-hidden="true">#</a> \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>index<span class="token operator">=</span><span class="token string">"idx"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>item<span class="token operator">=</span><span class="token string">"itemName"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"id"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> idx <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> itemName <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u7EA2'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u9EC4'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u767D'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> wxss</h2>
<p>\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709</p>
<ul>
<li>
<p>rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px</p>
</li>
<li>
<p>@import\u5F15\u5165\u6837\u5F0F\u8868
<img src="https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png" alt=""></p>
</li>
</ul>
<h2 id="\u6570\u636E\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8BF7\u6C42" aria-hidden="true">#</a> \u6570\u636E\u8BF7\u6C42</h2>
<h3 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h3>
<ul>
<li>\u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3</li>
<li>\u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --&gt; \u5F00\u53D1 --&gt; \u5F00\u53D1\u7BA1\u7406 --&gt; \u5F00\u53D1\u8BBE\u7F6E --&gt; \u670D\u52A1\u5668\u57DF\u540D --&gt; \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D</li>
</ul>
<h3 id="\u53D1\u8D77\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D1\u8D77\u8BF7\u6C42" aria-hidden="true">#</a> \u53D1\u8D77\u8BF7\u6C42</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'example.php'</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">success</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">complete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'complete'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5BFC\u822A" aria-hidden="true">#</a> \u9875\u9762\u5BFC\u822A</h2>
<h3 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/home/home"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"switchTab"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/info/info?age=18&amp;name=\u7F57\u8D85"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigate"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p><p>\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548</p>
<p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/contact/contact'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToNoTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/info/info?name=luochao'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u9000\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u540E\u9000\u5BFC\u822A" aria-hidden="true">#</a> \u540E\u9000\u5BFC\u822A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7</span>
<span class="token operator">&lt;</span>navigator open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigateBack"</span> delta<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>\u8FD4\u56DE\u4E0A\u4E00\u9875<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>

<span class="token comment">// \u7F16\u7A0B\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002</span>
<span class="token comment">// wx.navigateBack(Object object)</span>
<span class="token function">gotToBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u4E0B\u62C9\u5237\u65B0</h2>
<ul>
<li>\u5168\u5C40\u5F00\u542F</li>
</ul>
<p>\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<ul>
<li>\u5C40\u90E8\u5F00\u542F</li>
</ul>
<p>\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F</p>
</div><p>\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code></p>
<p>\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C</p>
<p>\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code></p>
<h2 id="\u4E0A\u62C9\u89E6\u5E95" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62C9\u89E6\u5E95" aria-hidden="true">#</a> \u4E0A\u62C9\u89E6\u5E95</h2>
<p>\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px</p>
<p>\u89E6\u53D1\uFF1A<code>onReachBottom()</code></p>
<h2 id="wxs" tabindex="-1"><a class="header-anchor" href="#wxs" aria-hidden="true">#</a> wxs</h2>
<ul>
<li>\u5185\u5D4Cwxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m1<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs module<span class="token operator">=</span><span class="token string">"m1"</span><span class="token operator">></span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">toLower</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tools.wxs</span>
<span class="token keyword">function</span> <span class="token function">toLower</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">toLower</span><span class="token operator">:</span>toLower
<span class="token punctuation">}</span>

<span class="token comment">// message.wxml</span>
<span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m2<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs src<span class="token operator">=</span><span class="token string">"../../wxs/tools.wxs"</span> module<span class="token operator">=</span><span class="token string">"m2"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u4FEE\u6539navBar\u6807\u9898</span>
wx<span class="token punctuation">.</span><span class="token function">setNavigationBarTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u52A0\u8F7D\u6548\u679Capi</span>
<span class="token comment">// \u52A0\u8F7D\u4E2D</span>
wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u4E2D......'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u7ED3\u675F</span>
wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3</span>
wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F7B\u63D0\u793A</span>
wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">'none'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-18",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/weixin/2022/111801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60"},slug:"111801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/weixin/2022/111801.md",filePathRelative:"blogs/weixin/2022/111801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.vue",componentFilePathRelative:"pages/blogs/weixin/2022/111801.html.vue",componentFileChunkName:"v-29a06e76",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.js",dataFilePathRelative:"pages/blogs/weixin/2022/111801.html.js",dataFileChunkName:"v-29a06e76",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/weixin/2022/111801.html",htmlFilePathRelative:"blogs/weixin/2022/111801.html"}]},"/tags/css/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"css",pages:[{data:{key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/110401.md"},key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],content:`
### Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A
\`\`\`js
<template>
  <div class="custom-basic-page-layout-container">
    <CustomNavBar :title="headerTitle" />
    <div class="main-content">
      <slot name="body"></slot>
    </div>
    <div class="foot-btn-area">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="ManagePage">
  const props = defineProps({
    headerTitle: {
      type: String,
      default: '\u7A7A',
    },
    footerHeight: {
      type: String,
      default: '62.39px',
    },
  });
  // \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09
  const minH = \`calc(100vh - 47.83px - \${props.footerHeight})\`;
<\/script>

<style lang="scss" scoped>
  .custom-basic-page-layout-container {
    height: 100vh;
    background-color: #f7f8fa;
    .main-content {
      min-height: v-bind('minH');
    }
    .foot-btn-area {
      background-color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>

\`\`\`

### \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09
\`\`\`js
<template>
	<div class="content" :style="{'--color': themeColor}">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="themeColor='pink'">\u4FEE\u6539\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {
			return {
				themeColor: 'red'
			}
		},
	}
<\/script>
 
<style lang="scss">
	.content {
		// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528
		width: 100%;
		height: 200px;
		background-color: var(--color);
 
		.title {
			background-color: white;
			color: var(--color);
		}
	}
</style>
\`\`\`

### \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539
\`\`\`js
<template>
	<div class="content" ref="content">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="changeBgColor">\u4FEE\u6539\u80CC\u666F\u989C\u8272</button>
	<button @click="changeFontColor">\u4FEE\u6539\u5B57\u4F53\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {},
		methods: {
			changeBgColor() {
				document.getElementsByTagName('body')[0].style.setProperty('--bg-color', 'pink');
			},
			changeFontColor() {
				// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539
				this.$refs.content.style.setProperty("--font-color", 'pink');
			}
		},
	}
<\/script>
 
<style lang="scss">
	// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY
	// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C
	$themeBgColor: var(--bg-color, red);
 
	.content {
		--font-color: red;
		width: 100%;
		height: 200px;
		background-color: $themeBgColor;
 
		.title {
			background-color: white;
			color: var(--font-color);
		}
	}
</style>
\`\`\``,contentRendered:`<h3 id="vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" aria-hidden="true">#</a> Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"custom-basic-page-layout-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomNavBar <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"headerTitle"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-content"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-btn-area"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup name<span class="token operator">=</span><span class="token string">"ManagePage"</span><span class="token operator">></span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u7A7A'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footerHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'62.39px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09</span>
  <span class="token keyword">const</span> minH <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - 47.83px - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>footerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
  <span class="token punctuation">.</span>custom<span class="token operator">-</span>basic<span class="token operator">-</span>page<span class="token operator">-</span>layout<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f7f8fa<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
      min<span class="token operator">-</span>height<span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'minH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>foot<span class="token operator">-</span>btn<span class="token operator">-</span>area <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'--color': themeColor}"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"themeColor='pink'"</span><span class="token operator">></span>\u4FEE\u6539\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token comment">// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> ref<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeBgColor"</span><span class="token operator">></span>\u4FEE\u6539\u80CC\u666F\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeFontColor"</span><span class="token operator">></span>\u4FEE\u6539\u5B57\u4F53\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">changeBgColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--bg-color'</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">changeFontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--font-color"</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token comment">// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY</span>
	<span class="token comment">// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C</span>
	<span class="token literal-property property">$themeBgColor</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>bg<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> $themeBgColor<span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-04",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/110401.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF"},slug:"110401",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/110401.md",filePathRelative:"blogs/css/2022/110401.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.vue",componentFilePathRelative:"pages/blogs/css/2022/110401.html.vue",componentFileChunkName:"v-729d99c6",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.js",dataFilePathRelative:"pages/blogs/css/2022/110401.html.js",dataFileChunkName:"v-729d99c6",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/110401.html",htmlFilePathRelative:"blogs/css/2022/110401.html"},{data:{key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/102601.md"},key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],content:`
## gap
\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694

## position: sticky
\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
![](https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png)
\`\`\`js
// css \u90E8\u5206
.container {
    background-color: oldlace;
    height: 200px;
    width: 140px;
    overflow: auto;
  }
  .container div {
    height: 20px;
    background-color: aqua;
    border: 1px solid;
  }
  .container .header {
    position: sticky;
    top: 0;
    background-color: rgb(187, 153, 153);
}

// html \u90E8\u5206
<div class="container">
  <div class="header">Header</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
\`\`\``,contentRendered:`<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2>
<p>\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694</p>
<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h2>
<p>\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
<img src="https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// css \u90E8\u5206</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> oldlace<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 140px<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container div <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// html \u90E8\u5206</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-26",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/102601.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027"},slug:"102601",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/102601.md",filePathRelative:"blogs/css/2022/102601.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.vue",componentFilePathRelative:"pages/blogs/css/2022/102601.html.vue",componentFileChunkName:"v-769f6067",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.js",dataFilePathRelative:"pages/blogs/css/2022/102601.html.js",dataFileChunkName:"v-769f6067",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/102601.html",htmlFilePathRelative:"blogs/css/2022/102601.html"}]},"/tags/js/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"js",pages:[{data:{key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101701.md"},key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],content:`
## \u590D\u5236\u5230\u526A\u5207\u677F
\`\`\`js
const copyToClipboard = (text:any) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
const click=()=>{
  copyToClipboard("Hello World!")
}
\`\`\`

\`\`\`js
const input = document.createElement('input'); // js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846
input.value = 'hello world';
document.body.appendChild(input); // \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762
input.select(); // \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9
document.execCommand('Copy'); // \u6267\u884C\u590D\u5236\u64CD\u4F5C
document.body.removeChild(input); // \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C
\`\`\`

## \u6EDA\u52A8\u5230\u9876\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
\`\`\`

## \u6EDA\u52A8\u5230\u5E95\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "end" });
}
\`\`\`

## \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D
\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver
\`\`\`js
const callback = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      // \`entry.target\` is the dom element
      console.log(\`\${entry.target.id} is visible\`);
    }else{
      console.log(\`\${entry.target.id} is notvisible\`);
    }
  });
};
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C
const scrollContainer=()=>{
  const testDiv:any=document.getElementById("testDiv"); // \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20
  observer.observe(testDiv);
}
\`\`\`

## \u68C0\u6D4B\u8BBE\u5907
\`\`\`js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";

console.log(detectDeviceType());
\`\`\``,contentRendered:`<h2 id="\u590D\u5236\u5230\u526A\u5207\u677F" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5230\u526A\u5207\u677F" aria-hidden="true">#</a> \u590D\u5236\u5230\u526A\u5207\u677F</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span>writeText <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762</span>
input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'Copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u590D\u5236\u64CD\u4F5C</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u9876\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u9876\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"start"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u5E95\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u5E95\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"end"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" aria-hidden="true">#</a> \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D</h2>
<p>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entries</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entry</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`entry.target\` is the dom element</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is visible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is notvisible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C</span>
<span class="token keyword">const</span> <span class="token function-variable function">scrollContainer</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">testDiv</span><span class="token operator">:</span>any<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testDiv"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>testDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BBE\u5907" aria-hidden="true">#</a> \u68C0\u6D4B\u8BBE\u5907</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">detectDeviceType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
    navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Mobile"</span> <span class="token operator">:</span> <span class="token string">"Desktop"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101701.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570"},slug:"101701",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101701.md",filePathRelative:"blogs/js/2022/101701.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101701.html.vue",componentFileChunkName:"v-37e04cf1",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.js",dataFilePathRelative:"pages/blogs/js/2022/101701.html.js",dataFileChunkName:"v-37e04cf1",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101701.html",htmlFilePathRelative:"blogs/js/2022/101701.html"},{data:{key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101201.md"},key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],content:`
## \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD
::: tip
Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4
:::
\`\`\`js
// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
const setData = Array.from(new Set(arr));
console.log(setData); //[1,2,3,4,5]
\`\`\`

### \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD
\`\`\`js
// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1)
      j--
    }
  }
}
console.log(arr); //[1,2,3,4,5]
\`\`\`

### \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  let repeatArr = [];
  for (let i = 0,len = arr.length ; i < len; i++) 
    if (repeatArr.indexOf(arr[i]) === -1)  repeatArr.push(arr[i])
    // if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])
  return repeatArr;
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

### \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  arr.filter((item,index)=> arr.indexOf(item,0)===index)
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

## \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u4F7F\u7528filter\u548CMap
\`\`\`js
// \u6700\u63A8\u8350
function uniqueFunc(arr, uniId){
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
\`\`\`

### \u4F7F\u7528reduce
\`\`\`js
function uniqueFunc(arr, uniId){
  let hash = {}
  return arr.reduce((accum,item) => {
    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
    return accum
  },[])
}
\`\`\`

### \u4F7F\u7528for\u5FAA\u73AF
\`\`\`js
function uniqueFunc(arr, uniId){
  let obj = {}
  let tempArr = []
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i][uniId]]){
      tempArr.push(arr[i])
      obj[arr[i][uniId]] = true
    }
  }
  return tempArr
}
\`\`\``,contentRendered:`<h2 id="\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4</p>
</div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> setData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> repeatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeatArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  repeatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])</span>
  <span class="token keyword">return</span> repeatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">===</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u4F7F\u7528filter\u548Cmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528filter\u548Cmap" aria-hidden="true">#</a> \u4F7F\u7528filter\u548CMap</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6700\u63A8\u8350</span>
<span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528reduce" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528reduce" aria-hidden="true">#</a> \u4F7F\u7528reduce</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accum<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> accum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">return</span> accum
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528for\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528for\u5FAA\u73AF</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tempArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-13",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101201.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},slug:"101201",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101201.md",filePathRelative:"blogs/js/2022/101201.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101201.html.vue",componentFileChunkName:"v-307a6c96",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.js",dataFilePathRelative:"pages/blogs/js/2022/101201.html.js",dataFileChunkName:"v-307a6c96",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101201.html",htmlFilePathRelative:"blogs/js/2022/101201.html"}]},"/tags/vue/1/":{pageSize:10,total:3,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"vue",pages:[{data:{key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100802.md"},key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A

:::: code-group
::: code-group-item main.js
\`\`\`js 
import App from './App.vue'
import commUtils from './utils/comm'

const app=createApp(App)
app.config.globalProperties.$commUtils = commUtils;
\`\`\`
:::
::: code-group-item comm.ts
\`\`\`js
// \u91D1\u989D\u683C\u5F0F\u5316
const formatPrice = (num: number) => {
  return num
    ? Number(num)
        .toFixed(2)
        .replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,')
    : '0.00';
}; 

export default{formatPrice}
\`\`\`
:::
::: code-group-item index.vue
\`\`\`js
import {getCurrentInstance } from 'vue';

const { proxy }:any = getCurrentInstance()
console.log(proxy.$commUtils.formatPrice(1998)); //1,998.00
\`\`\`
:::
::::
`,contentRendered:`<p>Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="main.js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> commUtils <span class="token keyword">from</span> <span class="token string">'./utils/comm'</span>

<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$commUtils <span class="token operator">=</span> commUtils<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="comm.ts">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u91D1\u989D\u683C\u5F0F\u5316</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
    <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'$1,'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">'0.00'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>formatPrice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="index.vue">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>$commUtils<span class="token punctuation">.</span><span class="token function">formatPrice</span><span class="token punctuation">(</span><span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,998.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5"},slug:"100802",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100802.md",filePathRelative:"blogs/vue3.0/2022/100802.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.vue",componentFileChunkName:"v-1e558f08",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.js",dataFileChunkName:"v-1e558f08",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100802.html",htmlFilePathRelative:"blogs/vue3.0/2022/100802.html"},{data:{key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100801.md"},key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A
\`\`\`js
<script setup>
import { getCurrentInstance } from 'vue'

const { ctx } = getCurrentInstance()
console.log(ctx) // \u548C this \u7684\u5C5E\u6027\u4E00\u6837
<\/script>
\`\`\`
\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A

![](https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png)`,contentRendered:`<p>Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// \u548C this \u7684\u5C5E\u6027\u4E00\u6837</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png" alt=""></p>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this"},slug:"100801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100801.md",filePathRelative:"blogs/vue3.0/2022/100801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.vue",componentFileChunkName:"v-1ca0b669",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.js",dataFileChunkName:"v-1ca0b669",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100801.html",htmlFilePathRelative:"blogs/vue3.0/2022/100801.html"},{data:{key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/092901.md"},key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D

. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D

2.\u6DF1\u62F7\u8D1D

![alt](https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png)


![alt](https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png)`,contentRendered:`<p>1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D</p>
<p>. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D</p>
<p>2.\u6DF1\u62F7\u8D1D</p>
<p><img src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png" alt="alt"></p>
<p><img src="https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png" alt="alt"></p>
`,date:"2022-09-29",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D"},slug:"092901",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/092901.md",filePathRelative:"blogs/vue3.0/2022/092901.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.vue",componentFileChunkName:"v-a289eec0",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.js",dataFileChunkName:"v-a289eec0",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/092901.html",htmlFilePathRelative:"blogs/vue3.0/2022/092901.html"}]}},Yi=[{data:{key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/weixin/2022/111801.md"},key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],content:`
## \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027
\`\`\`js
// wxml
<image src="{{ imgSrc }}" mode="widthFix"></image>

// js
data: {
  imgSrc: 'http://www.itcast.cn/2018czgw/images/logo.png'
}
\`\`\`

## \u5E38\u7528\u4E8B\u4EF6
* bindtap\u3001bindinput\u3001bindchange
* bind:tap\u3001bind:input\u3001bind:chage

|  \u7C7B\u578B  |         \u7ED1\u5B9A\u65B9\u5F0F          |                    \u4E8B\u4EF6\u63CF\u8FF0                     |
| :----: | :-----------------------: | :---------------------------------------------: |
|  tap   |    bindtap \u6216 bind:tap    | \u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6 |
| input  | bindinput \u6216\u8005 bind:input |                \u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6                 |
| change | bindchange \u6216 bind:change |                 \u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1                  |

### bindtap\u8BED\u6CD5
\`\`\`js
// wxml
<button type="primary" bindtap="bindTapHandler">\u6309\u94AE</button>

// js
Page({
  bindTapHandler(e:any){
    console.log(e);
  }
})
\`\`\`
* \u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570
\`\`\`js
// wxml
// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548
<button type="primary" bindtap="bindTapHandler(123)">\u6309\u94AE</button>

// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F
// wxml
<button type="primary" bindtap="bindTapHandler" data-myInfo="{{ {age:'18',name:'luochao'}  }}">\u6309\u94AE</button>
// js
Page({
  bindTapHandler(e:any){
    // e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20
    // e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20
    console.log(e.target.dataset) // dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879
    console.log(e.target.dataset.myInfo); // {age:'18',name:'luochao'}
  }
})
\`\`\`
::: warning
\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget
:::
* \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C
\`\`\`js
Page({
  data:{
    textMyObj:{
      number:999
    }
  },
  bindTapHandler(e:any){
    this.setData({
      textMyObj:{
        number:888
      }
    })
  },
})
\`\`\`
### bindinput\u8BED\u6CD5
\`\`\`js
// wxml
<input bindinput="inputHandler"></input>

// js
Page({
  inputHandler(e:any){
    // e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C
    console.log(e.detail.value)
  }
})
\`\`\`
* input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A
\`\`\`js
// wxml
<input value="{{count}}" bindinput="inputHandler"></input>

// js
Page({
  data:{
    count:1,
  },
  inputHandler(e:any){
    this.setData({
      count:e.detail.value
    })
  },
})
\`\`\`

## \u6761\u4EF6\u6E32\u67D3
\`\`\`js
// \u76F8\u5F53\u4E8Ev-if
<view wx:if="{{ type === 1 }}">\u7537</view>
<view wx:elif="{{ type === 2 }}">\u5973</view>
<view wx:else>\u4FDD\u5BC6</view>

<block wx:if="{{ true }}"> // \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E
  <view>\u4E9A\u745F</view>
  <view>\u59B2\u5DF1</view>
  <view>\u8499\u606C</view>
</block>

// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690
<view hidden="{{ false }}">\u6761\u4EF6\u4E3A true \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A false \u663E\u793A</view>
\`\`\`

## \u5217\u8868\u6E32\u67D3
### \u5E38\u89C4
\`\`\`js
// wxml
// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item
<view wx:for="{{ arr }}">
  \u7D22\u5F15\u662F: {{ index }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ item }}
</view>

// js
Page({
  data:{
    arr:['\u4E9A\u745F', '\u59B2\u5DF1', '\u8499\u606C']
  },
})
\`\`\`
### \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D
\`\`\`js
// wxml
// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C
<view wx:for="{{ arr }}" wx:for-index="idx" wx:for-item="itemName" wx:key="id">
  \u7D22\u5F15\u662F: {{ idx }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ itemName }}
</view>

// js
Page({
  data:{
    arr:[
      {id:1,name:'\u5C0F\u7EA2'},
      {id:2,name:'\u5C0F\u9EC4'},
      {id:3,name:'\u5C0F\u767D'},
    ]
  },
})
\`\`\`

## wxss
\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709
* rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px

* @import\u5F15\u5165\u6837\u5F0F\u8868
![](https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png)

## \u6570\u636E\u8BF7\u6C42
### \u9650\u5236
* \u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3
* \u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --> \u5F00\u53D1 --> \u5F00\u53D1\u7BA1\u7406 --> \u5F00\u53D1\u8BBE\u7F6E --> \u670D\u52A1\u5668\u57DF\u540D --> \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D

### \u53D1\u8D77\u8BF7\u6C42
\`\`\`js
wx.request({
  url: 'example.php', //\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740
  method:'GET',
  data: {
    x: '',
    y: ''
  },
  success (res) {
    console.log(res.data)
  },
  fail () {
    console.log('fail')
  },
  complete () {
    console.log('complete')
  },
})
\`\`\`

## \u9875\u9762\u5BFC\u822A
### \u7F16\u7A0B\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/home/home" open-type="switchTab">\u8DF3\u8F6C</navigator>
\`\`\`
* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/info/info?age=18&name=\u7F57\u8D85" open-type="navigate">\u8DF3\u8F6C</navigator>
\`\`\`
::: info
\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548

\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`
:::

### \u58F0\u660E\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToTabBar(){
  wx.switchTab({
    url:'/pages/contact/contact',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToNoTabBar(){
  wx.navigateTo({
    url:'/pages/info/info?name=luochao',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`
\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`

### \u540E\u9000\u5BFC\u822A
\`\`\`js
// \u58F0\u660E\u5F0F\u5BFC\u822A
// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7
<navigator open-type="navigateBack" delta="1">\u8FD4\u56DE\u4E0A\u4E00\u9875</navigator>

// \u7F16\u7A0B\u5F0F\u5BFC\u822A
// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002
// wx.navigateBack(Object object)
gotToBack(){
  wx.navigateBack({
    delta:1,
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

## \u4E0B\u62C9\u5237\u65B0
* \u5168\u5C40\u5F00\u542F

\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

* \u5C40\u90E8\u5F00\u542F

\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

::: tip
\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F
:::

\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code>

\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C

\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code>

## \u4E0A\u62C9\u89E6\u5E95
\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px

\u89E6\u53D1\uFF1A<code>onReachBottom()</code>

## wxs
* \u5185\u5D4Cwxs\u811A\u672C
\`\`\`js
<view>
  {{m1.toLower('HJSFSFKS')}}
</view>

<wxs module="m1">
  module.exports.toLower = function(str) {
    return str.toLower()
  }
</wxs>
\`\`\`

* \u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C
\`\`\`js
// tools.wxs
function toLower(str){
  return str.toLowerCase()
}

module.exports={
  toLower:toLower
}

// message.wxml
<view>
  {{m2.toLower('HJSFSFKS')}}
</view>

<wxs src="../../wxs/tools.wxs" module="m2"/>
\`\`\`

## \u5176\u4ED6
\`\`\`js
// \u4FEE\u6539navBar\u6807\u9898
wx.setNavigationBarTitle({
  title: 'test'
})

// \u52A0\u8F7D\u6548\u679Capi
// \u52A0\u8F7D\u4E2D
wx.showLoading({
  title:'\u6570\u636E\u52A0\u8F7D\u4E2D......'
})
// \u7ED3\u675F
wx.hideLoading()

// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3
wx.stopPullDownRefresh()

// \u8F7B\u63D0\u793A
wx.showToast({
  title:'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01',
  icon:'none'
})
\`\`\``,contentRendered:`<h2 id="\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>image src<span class="token operator">=</span><span class="token string">"{{ imgSrc }}"</span> mode<span class="token operator">=</span><span class="token string">"widthFix"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>image<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">imgSrc</span><span class="token operator">:</span> <span class="token string">'http://www.itcast.cn/2018czgw/images/logo.png'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u4E8B\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u4E8B\u4EF6</h2>
<ul>
<li>bindtap\u3001bindinput\u3001bindchange</li>
<li>bind:tap\u3001bind:input\u3001bind:chage</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u7ED1\u5B9A\u65B9\u5F0F</th>
<th style="text-align:center">\u4E8B\u4EF6\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tap</td>
<td style="text-align:center">bindtap \u6216 bind:tap</td>
<td style="text-align:center">\u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">input</td>
<td style="text-align:center">bindinput \u6216\u8005 bind:input</td>
<td style="text-align:center">\u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">bindchange \u6216 bind:change</td>
<td style="text-align:center">\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td>
</tr>
</tbody>
</table>
<h3 id="bindtap\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindtap\u8BED\u6CD5" aria-hidden="true">#</a> bindtap\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler(123)"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F</span>
<span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span> data<span class="token operator">-</span>myInfo<span class="token operator">=</span><span class="token string">"{{ {age:'18',name:'luochao'}  }}"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    <span class="token comment">// e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span> <span class="token comment">// dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>myInfo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {age:'18',name:'luochao'}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget</p>
</div><ul>
<li>\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">999</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">888</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bindinput\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindinput\u8BED\u6CD5" aria-hidden="true">#</a> bindinput\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token string">"{{count}}"</span> bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u76F8\u5F53\u4E8Ev-if</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ type === 1 }}"</span><span class="token operator">></span>\u7537<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span>elif<span class="token operator">=</span><span class="token string">"{{ type === 2 }}"</span><span class="token operator">></span>\u5973<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">else</span><span class="token operator">></span>\u4FDD\u5BC6<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>block wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ true }}"</span><span class="token operator">></span> <span class="token comment">// \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E</span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u4E9A\u745F<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u59B2\u5DF1<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u8499\u606C<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>block<span class="token operator">></span>

<span class="token comment">// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690</span>
<span class="token operator">&lt;</span>view hidden<span class="token operator">=</span><span class="token string">"{{ false }}"</span><span class="token operator">></span>\u6761\u4EF6\u4E3A <span class="token boolean">true</span> \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A <span class="token boolean">false</span> \u663E\u793A<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u5217\u8868\u6E32\u67D3</h2>
<h3 id="\u5E38\u89C4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4" aria-hidden="true">#</a> \u5E38\u89C4</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'\u4E9A\u745F'</span><span class="token punctuation">,</span> <span class="token string">'\u59B2\u5DF1'</span><span class="token punctuation">,</span> <span class="token string">'\u8499\u606C'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" aria-hidden="true">#</a> \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>index<span class="token operator">=</span><span class="token string">"idx"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>item<span class="token operator">=</span><span class="token string">"itemName"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"id"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> idx <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> itemName <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u7EA2'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u9EC4'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u767D'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> wxss</h2>
<p>\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709</p>
<ul>
<li>
<p>rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px</p>
</li>
<li>
<p>@import\u5F15\u5165\u6837\u5F0F\u8868
<img src="https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png" alt=""></p>
</li>
</ul>
<h2 id="\u6570\u636E\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8BF7\u6C42" aria-hidden="true">#</a> \u6570\u636E\u8BF7\u6C42</h2>
<h3 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h3>
<ul>
<li>\u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3</li>
<li>\u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --&gt; \u5F00\u53D1 --&gt; \u5F00\u53D1\u7BA1\u7406 --&gt; \u5F00\u53D1\u8BBE\u7F6E --&gt; \u670D\u52A1\u5668\u57DF\u540D --&gt; \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D</li>
</ul>
<h3 id="\u53D1\u8D77\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D1\u8D77\u8BF7\u6C42" aria-hidden="true">#</a> \u53D1\u8D77\u8BF7\u6C42</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'example.php'</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">success</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">complete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'complete'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5BFC\u822A" aria-hidden="true">#</a> \u9875\u9762\u5BFC\u822A</h2>
<h3 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/home/home"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"switchTab"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/info/info?age=18&amp;name=\u7F57\u8D85"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigate"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p><p>\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548</p>
<p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/contact/contact'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToNoTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/info/info?name=luochao'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u9000\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u540E\u9000\u5BFC\u822A" aria-hidden="true">#</a> \u540E\u9000\u5BFC\u822A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7</span>
<span class="token operator">&lt;</span>navigator open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigateBack"</span> delta<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>\u8FD4\u56DE\u4E0A\u4E00\u9875<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>

<span class="token comment">// \u7F16\u7A0B\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002</span>
<span class="token comment">// wx.navigateBack(Object object)</span>
<span class="token function">gotToBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u4E0B\u62C9\u5237\u65B0</h2>
<ul>
<li>\u5168\u5C40\u5F00\u542F</li>
</ul>
<p>\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<ul>
<li>\u5C40\u90E8\u5F00\u542F</li>
</ul>
<p>\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F</p>
</div><p>\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code></p>
<p>\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C</p>
<p>\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code></p>
<h2 id="\u4E0A\u62C9\u89E6\u5E95" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62C9\u89E6\u5E95" aria-hidden="true">#</a> \u4E0A\u62C9\u89E6\u5E95</h2>
<p>\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px</p>
<p>\u89E6\u53D1\uFF1A<code>onReachBottom()</code></p>
<h2 id="wxs" tabindex="-1"><a class="header-anchor" href="#wxs" aria-hidden="true">#</a> wxs</h2>
<ul>
<li>\u5185\u5D4Cwxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m1<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs module<span class="token operator">=</span><span class="token string">"m1"</span><span class="token operator">></span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">toLower</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tools.wxs</span>
<span class="token keyword">function</span> <span class="token function">toLower</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">toLower</span><span class="token operator">:</span>toLower
<span class="token punctuation">}</span>

<span class="token comment">// message.wxml</span>
<span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m2<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs src<span class="token operator">=</span><span class="token string">"../../wxs/tools.wxs"</span> module<span class="token operator">=</span><span class="token string">"m2"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u4FEE\u6539navBar\u6807\u9898</span>
wx<span class="token punctuation">.</span><span class="token function">setNavigationBarTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u52A0\u8F7D\u6548\u679Capi</span>
<span class="token comment">// \u52A0\u8F7D\u4E2D</span>
wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u4E2D......'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u7ED3\u675F</span>
wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3</span>
wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F7B\u63D0\u793A</span>
wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">'none'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-18",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/weixin/2022/111801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60"},slug:"111801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/weixin/2022/111801.md",filePathRelative:"blogs/weixin/2022/111801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.vue",componentFilePathRelative:"pages/blogs/weixin/2022/111801.html.vue",componentFileChunkName:"v-29a06e76",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.js",dataFilePathRelative:"pages/blogs/weixin/2022/111801.html.js",dataFileChunkName:"v-29a06e76",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/weixin/2022/111801.html",htmlFilePathRelative:"blogs/weixin/2022/111801.html"},{data:{key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/110401.md"},key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],content:`
### Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A
\`\`\`js
<template>
  <div class="custom-basic-page-layout-container">
    <CustomNavBar :title="headerTitle" />
    <div class="main-content">
      <slot name="body"></slot>
    </div>
    <div class="foot-btn-area">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="ManagePage">
  const props = defineProps({
    headerTitle: {
      type: String,
      default: '\u7A7A',
    },
    footerHeight: {
      type: String,
      default: '62.39px',
    },
  });
  // \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09
  const minH = \`calc(100vh - 47.83px - \${props.footerHeight})\`;
<\/script>

<style lang="scss" scoped>
  .custom-basic-page-layout-container {
    height: 100vh;
    background-color: #f7f8fa;
    .main-content {
      min-height: v-bind('minH');
    }
    .foot-btn-area {
      background-color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>

\`\`\`

### \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09
\`\`\`js
<template>
	<div class="content" :style="{'--color': themeColor}">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="themeColor='pink'">\u4FEE\u6539\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {
			return {
				themeColor: 'red'
			}
		},
	}
<\/script>
 
<style lang="scss">
	.content {
		// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528
		width: 100%;
		height: 200px;
		background-color: var(--color);
 
		.title {
			background-color: white;
			color: var(--color);
		}
	}
</style>
\`\`\`

### \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539
\`\`\`js
<template>
	<div class="content" ref="content">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="changeBgColor">\u4FEE\u6539\u80CC\u666F\u989C\u8272</button>
	<button @click="changeFontColor">\u4FEE\u6539\u5B57\u4F53\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {},
		methods: {
			changeBgColor() {
				document.getElementsByTagName('body')[0].style.setProperty('--bg-color', 'pink');
			},
			changeFontColor() {
				// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539
				this.$refs.content.style.setProperty("--font-color", 'pink');
			}
		},
	}
<\/script>
 
<style lang="scss">
	// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY
	// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C
	$themeBgColor: var(--bg-color, red);
 
	.content {
		--font-color: red;
		width: 100%;
		height: 200px;
		background-color: $themeBgColor;
 
		.title {
			background-color: white;
			color: var(--font-color);
		}
	}
</style>
\`\`\``,contentRendered:`<h3 id="vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" aria-hidden="true">#</a> Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"custom-basic-page-layout-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomNavBar <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"headerTitle"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-content"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-btn-area"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup name<span class="token operator">=</span><span class="token string">"ManagePage"</span><span class="token operator">></span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u7A7A'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footerHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'62.39px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09</span>
  <span class="token keyword">const</span> minH <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - 47.83px - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>footerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
  <span class="token punctuation">.</span>custom<span class="token operator">-</span>basic<span class="token operator">-</span>page<span class="token operator">-</span>layout<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f7f8fa<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
      min<span class="token operator">-</span>height<span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'minH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>foot<span class="token operator">-</span>btn<span class="token operator">-</span>area <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'--color': themeColor}"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"themeColor='pink'"</span><span class="token operator">></span>\u4FEE\u6539\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token comment">// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> ref<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeBgColor"</span><span class="token operator">></span>\u4FEE\u6539\u80CC\u666F\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeFontColor"</span><span class="token operator">></span>\u4FEE\u6539\u5B57\u4F53\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">changeBgColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--bg-color'</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">changeFontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--font-color"</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token comment">// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY</span>
	<span class="token comment">// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C</span>
	<span class="token literal-property property">$themeBgColor</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>bg<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> $themeBgColor<span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-04",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/110401.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF"},slug:"110401",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/110401.md",filePathRelative:"blogs/css/2022/110401.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.vue",componentFilePathRelative:"pages/blogs/css/2022/110401.html.vue",componentFileChunkName:"v-729d99c6",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.js",dataFilePathRelative:"pages/blogs/css/2022/110401.html.js",dataFileChunkName:"v-729d99c6",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/110401.html",htmlFilePathRelative:"blogs/css/2022/110401.html"},{data:{key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/102601.md"},key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],content:`
## gap
\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694

## position: sticky
\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
![](https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png)
\`\`\`js
// css \u90E8\u5206
.container {
    background-color: oldlace;
    height: 200px;
    width: 140px;
    overflow: auto;
  }
  .container div {
    height: 20px;
    background-color: aqua;
    border: 1px solid;
  }
  .container .header {
    position: sticky;
    top: 0;
    background-color: rgb(187, 153, 153);
}

// html \u90E8\u5206
<div class="container">
  <div class="header">Header</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
\`\`\``,contentRendered:`<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2>
<p>\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694</p>
<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h2>
<p>\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
<img src="https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// css \u90E8\u5206</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> oldlace<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 140px<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container div <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// html \u90E8\u5206</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-26",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/102601.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027"},slug:"102601",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/102601.md",filePathRelative:"blogs/css/2022/102601.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.vue",componentFilePathRelative:"pages/blogs/css/2022/102601.html.vue",componentFileChunkName:"v-769f6067",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.js",dataFilePathRelative:"pages/blogs/css/2022/102601.html.js",dataFileChunkName:"v-769f6067",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/102601.html",htmlFilePathRelative:"blogs/css/2022/102601.html"},{data:{key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101701.md"},key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],content:`
## \u590D\u5236\u5230\u526A\u5207\u677F
\`\`\`js
const copyToClipboard = (text:any) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
const click=()=>{
  copyToClipboard("Hello World!")
}
\`\`\`

\`\`\`js
const input = document.createElement('input'); // js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846
input.value = 'hello world';
document.body.appendChild(input); // \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762
input.select(); // \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9
document.execCommand('Copy'); // \u6267\u884C\u590D\u5236\u64CD\u4F5C
document.body.removeChild(input); // \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C
\`\`\`

## \u6EDA\u52A8\u5230\u9876\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
\`\`\`

## \u6EDA\u52A8\u5230\u5E95\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "end" });
}
\`\`\`

## \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D
\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver
\`\`\`js
const callback = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      // \`entry.target\` is the dom element
      console.log(\`\${entry.target.id} is visible\`);
    }else{
      console.log(\`\${entry.target.id} is notvisible\`);
    }
  });
};
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C
const scrollContainer=()=>{
  const testDiv:any=document.getElementById("testDiv"); // \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20
  observer.observe(testDiv);
}
\`\`\`

## \u68C0\u6D4B\u8BBE\u5907
\`\`\`js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";

console.log(detectDeviceType());
\`\`\``,contentRendered:`<h2 id="\u590D\u5236\u5230\u526A\u5207\u677F" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5230\u526A\u5207\u677F" aria-hidden="true">#</a> \u590D\u5236\u5230\u526A\u5207\u677F</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span>writeText <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762</span>
input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'Copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u590D\u5236\u64CD\u4F5C</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u9876\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u9876\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"start"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u5E95\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u5E95\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"end"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" aria-hidden="true">#</a> \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D</h2>
<p>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entries</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entry</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`entry.target\` is the dom element</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is visible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is notvisible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C</span>
<span class="token keyword">const</span> <span class="token function-variable function">scrollContainer</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">testDiv</span><span class="token operator">:</span>any<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testDiv"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>testDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BBE\u5907" aria-hidden="true">#</a> \u68C0\u6D4B\u8BBE\u5907</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">detectDeviceType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
    navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Mobile"</span> <span class="token operator">:</span> <span class="token string">"Desktop"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101701.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570"},slug:"101701",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101701.md",filePathRelative:"blogs/js/2022/101701.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101701.html.vue",componentFileChunkName:"v-37e04cf1",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.js",dataFilePathRelative:"pages/blogs/js/2022/101701.html.js",dataFileChunkName:"v-37e04cf1",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101701.html",htmlFilePathRelative:"blogs/js/2022/101701.html"},{data:{key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101201.md"},key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],content:`
## \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD
::: tip
Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4
:::
\`\`\`js
// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
const setData = Array.from(new Set(arr));
console.log(setData); //[1,2,3,4,5]
\`\`\`

### \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD
\`\`\`js
// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1)
      j--
    }
  }
}
console.log(arr); //[1,2,3,4,5]
\`\`\`

### \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  let repeatArr = [];
  for (let i = 0,len = arr.length ; i < len; i++) 
    if (repeatArr.indexOf(arr[i]) === -1)  repeatArr.push(arr[i])
    // if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])
  return repeatArr;
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

### \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  arr.filter((item,index)=> arr.indexOf(item,0)===index)
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

## \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u4F7F\u7528filter\u548CMap
\`\`\`js
// \u6700\u63A8\u8350
function uniqueFunc(arr, uniId){
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
\`\`\`

### \u4F7F\u7528reduce
\`\`\`js
function uniqueFunc(arr, uniId){
  let hash = {}
  return arr.reduce((accum,item) => {
    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
    return accum
  },[])
}
\`\`\`

### \u4F7F\u7528for\u5FAA\u73AF
\`\`\`js
function uniqueFunc(arr, uniId){
  let obj = {}
  let tempArr = []
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i][uniId]]){
      tempArr.push(arr[i])
      obj[arr[i][uniId]] = true
    }
  }
  return tempArr
}
\`\`\``,contentRendered:`<h2 id="\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4</p>
</div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> setData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> repeatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeatArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  repeatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])</span>
  <span class="token keyword">return</span> repeatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">===</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u4F7F\u7528filter\u548Cmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528filter\u548Cmap" aria-hidden="true">#</a> \u4F7F\u7528filter\u548CMap</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6700\u63A8\u8350</span>
<span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528reduce" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528reduce" aria-hidden="true">#</a> \u4F7F\u7528reduce</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accum<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> accum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">return</span> accum
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528for\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528for\u5FAA\u73AF</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tempArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-13",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101201.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},slug:"101201",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101201.md",filePathRelative:"blogs/js/2022/101201.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101201.html.vue",componentFileChunkName:"v-307a6c96",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.js",dataFilePathRelative:"pages/blogs/js/2022/101201.html.js",dataFileChunkName:"v-307a6c96",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101201.html",htmlFilePathRelative:"blogs/js/2022/101201.html"},{data:{key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100802.md"},key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A

:::: code-group
::: code-group-item main.js
\`\`\`js 
import App from './App.vue'
import commUtils from './utils/comm'

const app=createApp(App)
app.config.globalProperties.$commUtils = commUtils;
\`\`\`
:::
::: code-group-item comm.ts
\`\`\`js
// \u91D1\u989D\u683C\u5F0F\u5316
const formatPrice = (num: number) => {
  return num
    ? Number(num)
        .toFixed(2)
        .replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,')
    : '0.00';
}; 

export default{formatPrice}
\`\`\`
:::
::: code-group-item index.vue
\`\`\`js
import {getCurrentInstance } from 'vue';

const { proxy }:any = getCurrentInstance()
console.log(proxy.$commUtils.formatPrice(1998)); //1,998.00
\`\`\`
:::
::::
`,contentRendered:`<p>Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="main.js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> commUtils <span class="token keyword">from</span> <span class="token string">'./utils/comm'</span>

<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$commUtils <span class="token operator">=</span> commUtils<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="comm.ts">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u91D1\u989D\u683C\u5F0F\u5316</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
    <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'$1,'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">'0.00'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>formatPrice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="index.vue">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>$commUtils<span class="token punctuation">.</span><span class="token function">formatPrice</span><span class="token punctuation">(</span><span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,998.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5"},slug:"100802",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100802.md",filePathRelative:"blogs/vue3.0/2022/100802.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.vue",componentFileChunkName:"v-1e558f08",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.js",dataFileChunkName:"v-1e558f08",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100802.html",htmlFilePathRelative:"blogs/vue3.0/2022/100802.html"},{data:{key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100801.md"},key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A
\`\`\`js
<script setup>
import { getCurrentInstance } from 'vue'

const { ctx } = getCurrentInstance()
console.log(ctx) // \u548C this \u7684\u5C5E\u6027\u4E00\u6837
<\/script>
\`\`\`
\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A

![](https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png)`,contentRendered:`<p>Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// \u548C this \u7684\u5C5E\u6027\u4E00\u6837</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png" alt=""></p>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this"},slug:"100801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100801.md",filePathRelative:"blogs/vue3.0/2022/100801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.vue",componentFileChunkName:"v-1ca0b669",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.js",dataFileChunkName:"v-1ca0b669",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100801.html",htmlFilePathRelative:"blogs/vue3.0/2022/100801.html"},{data:{key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/092901.md"},key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D

. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D

2.\u6DF1\u62F7\u8D1D

![alt](https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png)


![alt](https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png)`,contentRendered:`<p>1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D</p>
<p>. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D</p>
<p>2.\u6DF1\u62F7\u8D1D</p>
<p><img src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png" alt="alt"></p>
<p><img src="https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png" alt="alt"></p>
`,date:"2022-09-29",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D"},slug:"092901",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/092901.md",filePathRelative:"blogs/vue3.0/2022/092901.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.vue",componentFileChunkName:"v-a289eec0",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.js",dataFileChunkName:"v-a289eec0",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/092901.html",htmlFilePathRelative:"blogs/vue3.0/2022/092901.html"}],Zi={categories:{pagination:10,extendedPages:[{},{},{}],items:{css:{length:2,pages:[{data:{key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/110401.md"},key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],content:`
### Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A
\`\`\`js
<template>
  <div class="custom-basic-page-layout-container">
    <CustomNavBar :title="headerTitle" />
    <div class="main-content">
      <slot name="body"></slot>
    </div>
    <div class="foot-btn-area">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="ManagePage">
  const props = defineProps({
    headerTitle: {
      type: String,
      default: '\u7A7A',
    },
    footerHeight: {
      type: String,
      default: '62.39px',
    },
  });
  // \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09
  const minH = \`calc(100vh - 47.83px - \${props.footerHeight})\`;
<\/script>

<style lang="scss" scoped>
  .custom-basic-page-layout-container {
    height: 100vh;
    background-color: #f7f8fa;
    .main-content {
      min-height: v-bind('minH');
    }
    .foot-btn-area {
      background-color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>

\`\`\`

### \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09
\`\`\`js
<template>
	<div class="content" :style="{'--color': themeColor}">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="themeColor='pink'">\u4FEE\u6539\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {
			return {
				themeColor: 'red'
			}
		},
	}
<\/script>
 
<style lang="scss">
	.content {
		// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528
		width: 100%;
		height: 200px;
		background-color: var(--color);
 
		.title {
			background-color: white;
			color: var(--color);
		}
	}
</style>
\`\`\`

### \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539
\`\`\`js
<template>
	<div class="content" ref="content">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="changeBgColor">\u4FEE\u6539\u80CC\u666F\u989C\u8272</button>
	<button @click="changeFontColor">\u4FEE\u6539\u5B57\u4F53\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {},
		methods: {
			changeBgColor() {
				document.getElementsByTagName('body')[0].style.setProperty('--bg-color', 'pink');
			},
			changeFontColor() {
				// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539
				this.$refs.content.style.setProperty("--font-color", 'pink');
			}
		},
	}
<\/script>
 
<style lang="scss">
	// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY
	// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C
	$themeBgColor: var(--bg-color, red);
 
	.content {
		--font-color: red;
		width: 100%;
		height: 200px;
		background-color: $themeBgColor;
 
		.title {
			background-color: white;
			color: var(--font-color);
		}
	}
</style>
\`\`\``,contentRendered:`<h3 id="vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" aria-hidden="true">#</a> Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"custom-basic-page-layout-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomNavBar <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"headerTitle"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-content"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-btn-area"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup name<span class="token operator">=</span><span class="token string">"ManagePage"</span><span class="token operator">></span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u7A7A'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footerHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'62.39px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09</span>
  <span class="token keyword">const</span> minH <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - 47.83px - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>footerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
  <span class="token punctuation">.</span>custom<span class="token operator">-</span>basic<span class="token operator">-</span>page<span class="token operator">-</span>layout<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f7f8fa<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
      min<span class="token operator">-</span>height<span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'minH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>foot<span class="token operator">-</span>btn<span class="token operator">-</span>area <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'--color': themeColor}"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"themeColor='pink'"</span><span class="token operator">></span>\u4FEE\u6539\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token comment">// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> ref<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeBgColor"</span><span class="token operator">></span>\u4FEE\u6539\u80CC\u666F\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeFontColor"</span><span class="token operator">></span>\u4FEE\u6539\u5B57\u4F53\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">changeBgColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--bg-color'</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">changeFontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--font-color"</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token comment">// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY</span>
	<span class="token comment">// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C</span>
	<span class="token literal-property property">$themeBgColor</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>bg<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> $themeBgColor<span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-04",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/110401.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF"},slug:"110401",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/110401.md",filePathRelative:"blogs/css/2022/110401.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.vue",componentFilePathRelative:"pages/blogs/css/2022/110401.html.vue",componentFileChunkName:"v-729d99c6",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.js",dataFilePathRelative:"pages/blogs/css/2022/110401.html.js",dataFileChunkName:"v-729d99c6",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/110401.html",htmlFilePathRelative:"blogs/css/2022/110401.html"},{data:{key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/102601.md"},key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],content:`
## gap
\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694

## position: sticky
\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
![](https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png)
\`\`\`js
// css \u90E8\u5206
.container {
    background-color: oldlace;
    height: 200px;
    width: 140px;
    overflow: auto;
  }
  .container div {
    height: 20px;
    background-color: aqua;
    border: 1px solid;
  }
  .container .header {
    position: sticky;
    top: 0;
    background-color: rgb(187, 153, 153);
}

// html \u90E8\u5206
<div class="container">
  <div class="header">Header</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
\`\`\``,contentRendered:`<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2>
<p>\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694</p>
<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h2>
<p>\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
<img src="https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// css \u90E8\u5206</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> oldlace<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 140px<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container div <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// html \u90E8\u5206</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-26",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/102601.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027"},slug:"102601",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/102601.md",filePathRelative:"blogs/css/2022/102601.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.vue",componentFilePathRelative:"pages/blogs/css/2022/102601.html.vue",componentFileChunkName:"v-769f6067",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.js",dataFilePathRelative:"pages/blogs/css/2022/102601.html.js",dataFileChunkName:"v-769f6067",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/102601.html",htmlFilePathRelative:"blogs/css/2022/102601.html"}],label:"css"},js:{length:2,pages:[{data:{key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101701.md"},key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],content:`
## \u590D\u5236\u5230\u526A\u5207\u677F
\`\`\`js
const copyToClipboard = (text:any) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
const click=()=>{
  copyToClipboard("Hello World!")
}
\`\`\`

\`\`\`js
const input = document.createElement('input'); // js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846
input.value = 'hello world';
document.body.appendChild(input); // \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762
input.select(); // \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9
document.execCommand('Copy'); // \u6267\u884C\u590D\u5236\u64CD\u4F5C
document.body.removeChild(input); // \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C
\`\`\`

## \u6EDA\u52A8\u5230\u9876\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
\`\`\`

## \u6EDA\u52A8\u5230\u5E95\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "end" });
}
\`\`\`

## \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D
\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver
\`\`\`js
const callback = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      // \`entry.target\` is the dom element
      console.log(\`\${entry.target.id} is visible\`);
    }else{
      console.log(\`\${entry.target.id} is notvisible\`);
    }
  });
};
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C
const scrollContainer=()=>{
  const testDiv:any=document.getElementById("testDiv"); // \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20
  observer.observe(testDiv);
}
\`\`\`

## \u68C0\u6D4B\u8BBE\u5907
\`\`\`js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";

console.log(detectDeviceType());
\`\`\``,contentRendered:`<h2 id="\u590D\u5236\u5230\u526A\u5207\u677F" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5230\u526A\u5207\u677F" aria-hidden="true">#</a> \u590D\u5236\u5230\u526A\u5207\u677F</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span>writeText <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762</span>
input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'Copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u590D\u5236\u64CD\u4F5C</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u9876\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u9876\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"start"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u5E95\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u5E95\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"end"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" aria-hidden="true">#</a> \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D</h2>
<p>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entries</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entry</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`entry.target\` is the dom element</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is visible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is notvisible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C</span>
<span class="token keyword">const</span> <span class="token function-variable function">scrollContainer</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">testDiv</span><span class="token operator">:</span>any<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testDiv"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>testDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BBE\u5907" aria-hidden="true">#</a> \u68C0\u6D4B\u8BBE\u5907</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">detectDeviceType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
    navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Mobile"</span> <span class="token operator">:</span> <span class="token string">"Desktop"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101701.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570"},slug:"101701",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101701.md",filePathRelative:"blogs/js/2022/101701.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101701.html.vue",componentFileChunkName:"v-37e04cf1",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.js",dataFilePathRelative:"pages/blogs/js/2022/101701.html.js",dataFileChunkName:"v-37e04cf1",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101701.html",htmlFilePathRelative:"blogs/js/2022/101701.html"},{data:{key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101201.md"},key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],content:`
## \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD
::: tip
Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4
:::
\`\`\`js
// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
const setData = Array.from(new Set(arr));
console.log(setData); //[1,2,3,4,5]
\`\`\`

### \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD
\`\`\`js
// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1)
      j--
    }
  }
}
console.log(arr); //[1,2,3,4,5]
\`\`\`

### \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  let repeatArr = [];
  for (let i = 0,len = arr.length ; i < len; i++) 
    if (repeatArr.indexOf(arr[i]) === -1)  repeatArr.push(arr[i])
    // if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])
  return repeatArr;
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

### \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  arr.filter((item,index)=> arr.indexOf(item,0)===index)
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

## \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u4F7F\u7528filter\u548CMap
\`\`\`js
// \u6700\u63A8\u8350
function uniqueFunc(arr, uniId){
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
\`\`\`

### \u4F7F\u7528reduce
\`\`\`js
function uniqueFunc(arr, uniId){
  let hash = {}
  return arr.reduce((accum,item) => {
    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
    return accum
  },[])
}
\`\`\`

### \u4F7F\u7528for\u5FAA\u73AF
\`\`\`js
function uniqueFunc(arr, uniId){
  let obj = {}
  let tempArr = []
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i][uniId]]){
      tempArr.push(arr[i])
      obj[arr[i][uniId]] = true
    }
  }
  return tempArr
}
\`\`\``,contentRendered:`<h2 id="\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4</p>
</div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> setData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> repeatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeatArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  repeatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])</span>
  <span class="token keyword">return</span> repeatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">===</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u4F7F\u7528filter\u548Cmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528filter\u548Cmap" aria-hidden="true">#</a> \u4F7F\u7528filter\u548CMap</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6700\u63A8\u8350</span>
<span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528reduce" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528reduce" aria-hidden="true">#</a> \u4F7F\u7528reduce</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accum<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> accum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">return</span> accum
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528for\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528for\u5FAA\u73AF</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tempArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-13",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101201.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},slug:"101201",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101201.md",filePathRelative:"blogs/js/2022/101201.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101201.html.vue",componentFileChunkName:"v-307a6c96",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.js",dataFilePathRelative:"pages/blogs/js/2022/101201.html.js",dataFileChunkName:"v-307a6c96",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101201.html",htmlFilePathRelative:"blogs/js/2022/101201.html"}],label:"js"},"vue3.0":{length:3,pages:[{data:{key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100802.md"},key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A

:::: code-group
::: code-group-item main.js
\`\`\`js 
import App from './App.vue'
import commUtils from './utils/comm'

const app=createApp(App)
app.config.globalProperties.$commUtils = commUtils;
\`\`\`
:::
::: code-group-item comm.ts
\`\`\`js
// \u91D1\u989D\u683C\u5F0F\u5316
const formatPrice = (num: number) => {
  return num
    ? Number(num)
        .toFixed(2)
        .replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,')
    : '0.00';
}; 

export default{formatPrice}
\`\`\`
:::
::: code-group-item index.vue
\`\`\`js
import {getCurrentInstance } from 'vue';

const { proxy }:any = getCurrentInstance()
console.log(proxy.$commUtils.formatPrice(1998)); //1,998.00
\`\`\`
:::
::::
`,contentRendered:`<p>Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="main.js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> commUtils <span class="token keyword">from</span> <span class="token string">'./utils/comm'</span>

<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$commUtils <span class="token operator">=</span> commUtils<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="comm.ts">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u91D1\u989D\u683C\u5F0F\u5316</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
    <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'$1,'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">'0.00'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>formatPrice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="index.vue">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>$commUtils<span class="token punctuation">.</span><span class="token function">formatPrice</span><span class="token punctuation">(</span><span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,998.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5"},slug:"100802",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100802.md",filePathRelative:"blogs/vue3.0/2022/100802.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.vue",componentFileChunkName:"v-1e558f08",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.js",dataFileChunkName:"v-1e558f08",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100802.html",htmlFilePathRelative:"blogs/vue3.0/2022/100802.html"},{data:{key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100801.md"},key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A
\`\`\`js
<script setup>
import { getCurrentInstance } from 'vue'

const { ctx } = getCurrentInstance()
console.log(ctx) // \u548C this \u7684\u5C5E\u6027\u4E00\u6837
<\/script>
\`\`\`
\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A

![](https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png)`,contentRendered:`<p>Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// \u548C this \u7684\u5C5E\u6027\u4E00\u6837</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png" alt=""></p>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this"},slug:"100801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100801.md",filePathRelative:"blogs/vue3.0/2022/100801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.vue",componentFileChunkName:"v-1ca0b669",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.js",dataFileChunkName:"v-1ca0b669",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100801.html",htmlFilePathRelative:"blogs/vue3.0/2022/100801.html"},{data:{key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/092901.md"},key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D

. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D

2.\u6DF1\u62F7\u8D1D

![alt](https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png)


![alt](https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png)`,contentRendered:`<p>1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D</p>
<p>. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D</p>
<p>2.\u6DF1\u62F7\u8D1D</p>
<p><img src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png" alt="alt"></p>
<p><img src="https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png" alt="alt"></p>
`,date:"2022-09-29",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D"},slug:"092901",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/092901.md",filePathRelative:"blogs/vue3.0/2022/092901.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.vue",componentFileChunkName:"v-a289eec0",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.js",dataFileChunkName:"v-a289eec0",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/092901.html",htmlFilePathRelative:"blogs/vue3.0/2022/092901.html"}],label:"vue3.0"}},layout:"Categories"},tags:{pagination:10,extendedPages:[{},{},{},{}],items:{weixinxiaochengxu:{pages:[{data:{key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/weixin/2022/111801.md"},key:"v-29a06e76",path:"/blogs/weixin/2022/111801.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",lang:"zh-CN",frontmatter:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",date:"2022-11-18 10:26:57",tags:["\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"]},excerpt:"",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],content:`
## \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027
\`\`\`js
// wxml
<image src="{{ imgSrc }}" mode="widthFix"></image>

// js
data: {
  imgSrc: 'http://www.itcast.cn/2018czgw/images/logo.png'
}
\`\`\`

## \u5E38\u7528\u4E8B\u4EF6
* bindtap\u3001bindinput\u3001bindchange
* bind:tap\u3001bind:input\u3001bind:chage

|  \u7C7B\u578B  |         \u7ED1\u5B9A\u65B9\u5F0F          |                    \u4E8B\u4EF6\u63CF\u8FF0                     |
| :----: | :-----------------------: | :---------------------------------------------: |
|  tap   |    bindtap \u6216 bind:tap    | \u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6 |
| input  | bindinput \u6216\u8005 bind:input |                \u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6                 |
| change | bindchange \u6216 bind:change |                 \u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1                  |

### bindtap\u8BED\u6CD5
\`\`\`js
// wxml
<button type="primary" bindtap="bindTapHandler">\u6309\u94AE</button>

// js
Page({
  bindTapHandler(e:any){
    console.log(e);
  }
})
\`\`\`
* \u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570
\`\`\`js
// wxml
// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548
<button type="primary" bindtap="bindTapHandler(123)">\u6309\u94AE</button>

// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F
// wxml
<button type="primary" bindtap="bindTapHandler" data-myInfo="{{ {age:'18',name:'luochao'}  }}">\u6309\u94AE</button>
// js
Page({
  bindTapHandler(e:any){
    // e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20
    // e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20
    console.log(e.target.dataset) // dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879
    console.log(e.target.dataset.myInfo); // {age:'18',name:'luochao'}
  }
})
\`\`\`
::: warning
\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget
:::
* \u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C
\`\`\`js
Page({
  data:{
    textMyObj:{
      number:999
    }
  },
  bindTapHandler(e:any){
    this.setData({
      textMyObj:{
        number:888
      }
    })
  },
})
\`\`\`
### bindinput\u8BED\u6CD5
\`\`\`js
// wxml
<input bindinput="inputHandler"></input>

// js
Page({
  inputHandler(e:any){
    // e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C
    console.log(e.detail.value)
  }
})
\`\`\`
* input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A
\`\`\`js
// wxml
<input value="{{count}}" bindinput="inputHandler"></input>

// js
Page({
  data:{
    count:1,
  },
  inputHandler(e:any){
    this.setData({
      count:e.detail.value
    })
  },
})
\`\`\`

## \u6761\u4EF6\u6E32\u67D3
\`\`\`js
// \u76F8\u5F53\u4E8Ev-if
<view wx:if="{{ type === 1 }}">\u7537</view>
<view wx:elif="{{ type === 2 }}">\u5973</view>
<view wx:else>\u4FDD\u5BC6</view>

<block wx:if="{{ true }}"> // \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E
  <view>\u4E9A\u745F</view>
  <view>\u59B2\u5DF1</view>
  <view>\u8499\u606C</view>
</block>

// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690
<view hidden="{{ false }}">\u6761\u4EF6\u4E3A true \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A false \u663E\u793A</view>
\`\`\`

## \u5217\u8868\u6E32\u67D3
### \u5E38\u89C4
\`\`\`js
// wxml
// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item
<view wx:for="{{ arr }}">
  \u7D22\u5F15\u662F: {{ index }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ item }}
</view>

// js
Page({
  data:{
    arr:['\u4E9A\u745F', '\u59B2\u5DF1', '\u8499\u606C']
  },
})
\`\`\`
### \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D
\`\`\`js
// wxml
// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D
// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C
<view wx:for="{{ arr }}" wx:for-index="idx" wx:for-item="itemName" wx:key="id">
  \u7D22\u5F15\u662F: {{ idx }}\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A{{ itemName }}
</view>

// js
Page({
  data:{
    arr:[
      {id:1,name:'\u5C0F\u7EA2'},
      {id:2,name:'\u5C0F\u9EC4'},
      {id:3,name:'\u5C0F\u767D'},
    ]
  },
})
\`\`\`

## wxss
\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709
* rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px

* @import\u5F15\u5165\u6837\u5F0F\u8868
![](https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png)

## \u6570\u636E\u8BF7\u6C42
### \u9650\u5236
* \u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3
* \u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --> \u5F00\u53D1 --> \u5F00\u53D1\u7BA1\u7406 --> \u5F00\u53D1\u8BBE\u7F6E --> \u670D\u52A1\u5668\u57DF\u540D --> \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D

### \u53D1\u8D77\u8BF7\u6C42
\`\`\`js
wx.request({
  url: 'example.php', //\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740
  method:'GET',
  data: {
    x: '',
    y: ''
  },
  success (res) {
    console.log(res.data)
  },
  fail () {
    console.log('fail')
  },
  complete () {
    console.log('complete')
  },
})
\`\`\`

## \u9875\u9762\u5BFC\u822A
### \u7F16\u7A0B\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/home/home" open-type="switchTab">\u8DF3\u8F6C</navigator>
\`\`\`
* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\`\`\`js
<navigator url="/pages/info/info?age=18&name=\u7F57\u8D85" open-type="navigate">\u8DF3\u8F6C</navigator>
\`\`\`
::: info
\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548

\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`
:::

### \u58F0\u660E\u5F0F\u5BFC\u822A
* \u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToTabBar(){
  wx.switchTab({
    url:'/pages/contact/contact',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

* \u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A

|   \u5C5E\u6027   |   \u7C7B\u578B   | \u662F\u5426\u5FC5\u9009 |                       \u8BF4\u660E                        |
| :------: | :------: | :------: | :-----------------------------------------------: |
|   url    |  string  |    \u662F    | \u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002 |
| success  | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570               |
|   fail   | function |    \u5426    |              \u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570               |
| complete | function |    \u5426    | \u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09  |

\`\`\`js
goToNoTabBar(){
  wx.navigateTo({
    url:'/pages/info/info?name=luochao',
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`
\u53D6\u53C2\uFF1A
\`\`\`js
onLoad(option) {
  // options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61
  console.log(option,'option');
},
\`\`\`

### \u540E\u9000\u5BFC\u822A
\`\`\`js
// \u58F0\u660E\u5F0F\u5BFC\u822A
// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7
<navigator open-type="navigateBack" delta="1">\u8FD4\u56DE\u4E0A\u4E00\u9875</navigator>

// \u7F16\u7A0B\u5F0F\u5BFC\u822A
// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002
// wx.navigateBack(Object object)
gotToBack(){
  wx.navigateBack({
    delta:1,
    success:(e)=>{
      console.log(e);
    }
  })
},
\`\`\`

## \u4E0B\u62C9\u5237\u65B0
* \u5168\u5C40\u5F00\u542F

\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

* \u5C40\u90E8\u5F00\u542F

\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue

::: tip
\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F
:::

\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code>

\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C

\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code>

## \u4E0A\u62C9\u89E6\u5E95
\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px

\u89E6\u53D1\uFF1A<code>onReachBottom()</code>

## wxs
* \u5185\u5D4Cwxs\u811A\u672C
\`\`\`js
<view>
  {{m1.toLower('HJSFSFKS')}}
</view>

<wxs module="m1">
  module.exports.toLower = function(str) {
    return str.toLower()
  }
</wxs>
\`\`\`

* \u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C
\`\`\`js
// tools.wxs
function toLower(str){
  return str.toLowerCase()
}

module.exports={
  toLower:toLower
}

// message.wxml
<view>
  {{m2.toLower('HJSFSFKS')}}
</view>

<wxs src="../../wxs/tools.wxs" module="m2"/>
\`\`\`

## \u5176\u4ED6
\`\`\`js
// \u4FEE\u6539navBar\u6807\u9898
wx.setNavigationBarTitle({
  title: 'test'
})

// \u52A0\u8F7D\u6548\u679Capi
// \u52A0\u8F7D\u4E2D
wx.showLoading({
  title:'\u6570\u636E\u52A0\u8F7D\u4E2D......'
})
// \u7ED3\u675F
wx.hideLoading()

// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3
wx.stopPullDownRefresh()

// \u8F7B\u63D0\u793A
wx.showToast({
  title:'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01',
  icon:'none'
})
\`\`\``,contentRendered:`<h2 id="\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027" aria-hidden="true">#</a> \u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>image src<span class="token operator">=</span><span class="token string">"{{ imgSrc }}"</span> mode<span class="token operator">=</span><span class="token string">"widthFix"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>image<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">imgSrc</span><span class="token operator">:</span> <span class="token string">'http://www.itcast.cn/2018czgw/images/logo.png'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u4E8B\u4EF6" aria-hidden="true">#</a> \u5E38\u7528\u4E8B\u4EF6</h2>
<ul>
<li>bindtap\u3001bindinput\u3001bindchange</li>
<li>bind:tap\u3001bind:input\u3001bind:chage</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u7ED1\u5B9A\u65B9\u5F0F</th>
<th style="text-align:center">\u4E8B\u4EF6\u63CF\u8FF0</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">tap</td>
<td style="text-align:center">bindtap \u6216 bind:tap</td>
<td style="text-align:center">\u624B\u6307\u89E6\u6478\u540E\u9A6C\u4E0A\u79BB\u5F00\uFF0C\u7C7B\u4F3C\u4E8E HTML \u4E2D\u7684 click \u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">input</td>
<td style="text-align:center">bindinput \u6216\u8005 bind:input</td>
<td style="text-align:center">\u6587\u672C\u6846\u7684\u8F93\u5165\u4E8B\u4EF6</td>
</tr>
<tr>
<td style="text-align:center">change</td>
<td style="text-align:center">bindchange \u6216 bind:change</td>
<td style="text-align:center">\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1</td>
</tr>
</tbody>
</table>
<h3 id="bindtap\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindtap\u8BED\u6CD5" aria-hidden="true">#</a> bindtap\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5C0F\u7A0B\u5E8F\u4E2D\u7684\u4E8B\u4EF6\u4F20\u53C2\u6BD4\u8F83\u7279\u6B8A\uFF0C\u4E0D\u80FD\u5728\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u540C\u65F6\u4E3A\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u4F20\u9012\u53C2\u6570</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u8BE5\u4EE3\u7801\u4E0D\u751F\u6548</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler(123)"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>

<span class="token comment">// \u4F20\u53C2\u7684\u6B63\u786E\u65B9\u5F0F</span>
<span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>button type<span class="token operator">=</span><span class="token string">"primary"</span> bindtap<span class="token operator">=</span><span class="token string">"bindTapHandler"</span> data<span class="token operator">-</span>myInfo<span class="token operator">=</span><span class="token string">"{{ {age:'18',name:'luochao'}  }}"</span><span class="token operator">></span>\u6309\u94AE<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.target\u8FD4\u56DE\u7684\u662F\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    <span class="token comment">// e.currentTarget\u8FD4\u56DE\u7684\u662F\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u5143\u7D20</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span> <span class="token comment">// dataset\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u6240\u6709data-* \u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u9879</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>myInfo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {age:'18',name:'luochao'}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>\u5FAA\u73AF\u6E32\u67D3\u4E00\u4E2Aview\u6807\u7B7E\uFF0C\u4F46\u662F\u8FD9\u4E2A\u6807\u7B7E\u4E2D\u8FD8\u6709\u5B50\u5143\u7D20\uFF0C\u5982\u679C\u4F7F\u7528e.target\u7684\u8BDD\uFF0C\u5BB9\u6613\u51FA\u73B0\uFF0C\u9F20\u6807\u70B9\u51FB\u5B50\u5143\u7D20\u7684\u65F6\u5019\u83B7\u53D6\u4E0D\u5230\u7236\u5143\u7D20\u4E0A\u7ED1\u5B9A\u7684\u81EA\u5B9A\u4E49\u5C5E\u6027\u7684\u503C\u3002\u6240\u4EE5\u8BF4\uFF1A\u5982\u679C\u5355\u6807\u7B7E\u7ED1\u5B9A\u7684\u4E8B\u4EF6 \u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0A\u4EFB\u610F\u4E24\u79CD\u65B9\u6CD5\u90FD\u662F\u53EF\u884C\u7684\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E8B\u4EF6\u7684\u6807\u7B7E\u5185\u8FD8\u6709\u591A\u4E2A\u5B50\u6807\u7B7E\u7684\u8BDD\u5EFA\u8BAE\u4F7F\u7528 e.currentTarget</p>
</div><ul>
<li>\u5728\u4E8B\u4EF6\u5904\u7406\u51FD\u6570\u4E2D\u4E3A data \u4E2D\u7684\u6570\u636E\u8D4B\u503C
\u901A\u8FC7\u8C03\u7528 this.setData(dataObject) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7ED9\u9875\u9762 data \u4E2D\u7684\u6570\u636E\u91CD\u65B0\u8D4B\u503C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">999</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">bindTapHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">textMyObj</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span><span class="token number">888</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bindinput\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#bindinput\u8BED\u6CD5" aria-hidden="true">#</a> bindinput\u8BED\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// e.detail.value \u662F\u8F93\u5165\u6846\u6700\u65B0\u8F93\u5165\u7684\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>input\u8F93\u5165\u6846\u7684\u6570\u636E\u7ED1\u5B9A</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token operator">&lt;</span>input value<span class="token operator">=</span><span class="token string">"{{count}}"</span> bindinput<span class="token operator">=</span><span class="token string">"inputHandler"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>input<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">inputHandler</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>value
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6761\u4EF6\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u6761\u4EF6\u6E32\u67D3" aria-hidden="true">#</a> \u6761\u4EF6\u6E32\u67D3</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u76F8\u5F53\u4E8Ev-if</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ type === 1 }}"</span><span class="token operator">></span>\u7537<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span>elif<span class="token operator">=</span><span class="token string">"{{ type === 2 }}"</span><span class="token operator">></span>\u5973<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">else</span><span class="token operator">></span>\u4FDD\u5BC6<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>block wx<span class="token operator">:</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">"{{ true }}"</span><span class="token operator">></span> <span class="token comment">// \u76F8\u5F53\u4E8Etemplate\u6807\u7B7E</span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u4E9A\u745F<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u59B2\u5DF1<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
  <span class="token operator">&lt;</span>view<span class="token operator">></span>\u8499\u606C<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>block<span class="token operator">></span>

<span class="token comment">// \u76F8\u5F53\u4E8Ev-show,\u5207\u6362\u6837\u5F0Fdisplay:none/block\uFF0C\u63A7\u5236\u5143\u7D20\u663E\u9690</span>
<span class="token operator">&lt;</span>view hidden<span class="token operator">=</span><span class="token string">"{{ false }}"</span><span class="token operator">></span>\u6761\u4EF6\u4E3A <span class="token boolean">true</span> \u9690\u85CF\uFF0C\u6761\u4EF6\u4E3A <span class="token boolean">false</span> \u663E\u793A<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5217\u8868\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5217\u8868\u6E32\u67D3" aria-hidden="true">#</a> \u5217\u8868\u6E32\u67D3</h2>
<h3 id="\u5E38\u89C4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4" aria-hidden="true">#</a> \u5E38\u89C4</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u9ED8\u8BA4\u6570\u7EC4\u7684\u5F53\u524D\u9879\u7684\u4E0B\u6807\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A index\uFF0C\u6570\u7EC4\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D\u9ED8\u8BA4\u4E3A item</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> index <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> item <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">'\u4E9A\u745F'</span><span class="token punctuation">,</span> <span class="token string">'\u59B2\u5DF1'</span><span class="token punctuation">,</span> <span class="token string">'\u8499\u606C'</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D" aria-hidden="true">#</a> \u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// wxml</span>
<span class="token comment">// \u4F7F\u7528 wx:for-item \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u5143\u7D20\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:for-index \u53EF\u4EE5\u6307\u5B9A\u6570\u7EC4\u5F53\u524D\u4E0B\u8868\u7684\u53D8\u91CF\u540D</span>
<span class="token comment">// \u4F7F\u7528 wx:key \u53EF\u4EE5\u5217\u8868\u9879\u6307\u5B9A\u552F\u4E00\u7684 key \u503C</span>
<span class="token operator">&lt;</span>view wx<span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">=</span><span class="token string">"{{ arr }}"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>index<span class="token operator">=</span><span class="token string">"idx"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span><span class="token keyword">for</span><span class="token operator">-</span>item<span class="token operator">=</span><span class="token string">"itemName"</span> <span class="token literal-property property">wx</span><span class="token operator">:</span>key<span class="token operator">=</span><span class="token string">"id"</span><span class="token operator">></span>
  <span class="token literal-property property">\u7D22\u5F15\u662F</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> idx <span class="token punctuation">}</span><span class="token punctuation">}</span>\uFF0C\u6570\u7EC4\u7684\u6BCF\u4E00\u9879\u662F\uFF1A<span class="token punctuation">{</span><span class="token punctuation">{</span> itemName <span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token comment">// js</span>
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">arr</span><span class="token operator">:</span><span class="token punctuation">[</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u7EA2'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u9EC4'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">'\u5C0F\u767D'</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wxss" tabindex="-1"><a class="header-anchor" href="#wxss" aria-hidden="true">#</a> wxss</h2>
<p>\u4E0Ecss\u76F8\u6BD4\uFF0Cwxss\u6269\u5C55\u7684\u7279\u6027\u6709</p>
<ul>
<li>
<p>rpx
\u662F\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u72EC\u6709\u7684\u7528\u6765\u89E3\u51B3\u5C4F\u5E55\u9002\u914D\u7684\u5C3A\u5BF8\u5355\u4F4D
\u5B9E\u73B0\u539F\u7406\uFF1Arpx\u628A\u6240\u6709\u5927\u5C0F\u7684\u5C4F\u5E55\u7B49\u5206\u4E3A750\u4EFD\uFF0C\u6BCF\u4E00\u4EFD\u5C31\u662F1rpx
\u4EE5iphone6\u4E3A\u4F8B\uFF0Ciphone6\u5C4F\u5E55\u4E3A375px\uFF0C1rpx=0.5px</p>
</li>
<li>
<p>@import\u5F15\u5165\u6837\u5F0F\u8868
<img src="https://s3.uuu.ovh/imgs/2022/11/18/9d771ebebb378e83.png" alt=""></p>
</li>
</ul>
<h2 id="\u6570\u636E\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8BF7\u6C42" aria-hidden="true">#</a> \u6570\u636E\u8BF7\u6C42</h2>
<h3 id="\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236" aria-hidden="true">#</a> \u9650\u5236</h3>
<ul>
<li>\u53EA\u80FD\u8BF7\u6C42https\u7C7B\u578B\u7684\u63A5\u53E3</li>
<li>\u5FC5\u987B\u5C06\u63A5\u53E3\u7684\u57DF\u540D\u6DFB\u52A0\u5230\u4FE1\u4EFB\u5217\u8868\u4E2D
\u914D\u7F6E\u6B65\u9AA4\uFF1A\u767B\u5F55\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 --&gt; \u5F00\u53D1 --&gt; \u5F00\u53D1\u7BA1\u7406 --&gt; \u5F00\u53D1\u8BBE\u7F6E --&gt; \u670D\u52A1\u5668\u57DF\u540D --&gt; \u4FEE\u6539 request \u5408\u6CD5\u57DF\u540D</li>
</ul>
<h3 id="\u53D1\u8D77\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#\u53D1\u8D77\u8BF7\u6C42" aria-hidden="true">#</a> \u53D1\u8D77\u8BF7\u6C42</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'example.php'</span><span class="token punctuation">,</span> <span class="token comment">//\u4EC5\u4E3A\u793A\u4F8B\uFF0C\u5E76\u975E\u771F\u5B9E\u7684\u63A5\u53E3\u5730\u5740</span>
  <span class="token literal-property property">method</span><span class="token operator">:</span><span class="token string">'GET'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token string">''</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">success</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">fail</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'fail'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">complete</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'complete'</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9875\u9762\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u5BFC\u822A" aria-hidden="true">#</a> \u9875\u9762\u5BFC\u822A</h2>
<h3 id="\u7F16\u7A0B\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7A0B\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u7F16\u7A0B\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/home/home"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"switchTab"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>navigator url<span class="token operator">=</span><span class="token string">"/pages/info/info?age=18&amp;name=\u7F57\u8D85"</span> open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigate"</span><span class="token operator">></span>\u8DF3\u8F6C<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">INFO</p><p>\u4F20\u53C2\uFF1A\u5728\u8DEF\u5F84\u540E\u62FC\u63A5\uFF0C\u4F46\u662FtabBar\u9875\u9762\u4F20\u53C2\u65E0\u6548</p>
<p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="\u58F0\u660E\u5F0F\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u5F0F\u5BFC\u822A" aria-hidden="true">#</a> \u58F0\u660E\u5F0F\u5BFC\u822A</h3>
<ul>
<li>\u5BFC\u822A\u5230tabBar\u9875\u9762
\u8C03\u7528wx.switchTab(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684 tabBar \u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u4E0D\u80FD\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">switchTab</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/contact/contact'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5BFC\u822A\u5230\u975EtabBar\u9875\u9762
\u8C03\u7528wx.navigateTo(object object)\u65B9\u6CD5\uFF0Cobject\u7684\u53C2\u6570\u5BF9\u8C61\u7684\u5C5E\u6027\uFF1A</li>
</ul>
<table>
<thead>
<tr>
<th style="text-align:center">\u5C5E\u6027</th>
<th style="text-align:center">\u7C7B\u578B</th>
<th style="text-align:center">\u662F\u5426\u5FC5\u9009</th>
<th style="text-align:center">\u8BF4\u660E</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">url</td>
<td style="text-align:center">string</td>
<td style="text-align:center">\u662F</td>
<td style="text-align:center">\u9700\u8981\u8DF3\u8F6C\u7684\u5E94\u7528\u5185\u975E tabBar \u7684\u9875\u9762\u7684\u8DEF\u5F84 \uFF0C<code>\u8DEF\u5F84\u540E\u53EF\u4EE5\u5E26\u53C2\u6570</code>\u3002</td>
</tr>
<tr>
<td style="text-align:center">success</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">fail</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\u51FD\u6570</td>
</tr>
<tr>
<td style="text-align:center">complete</td>
<td style="text-align:center">function</td>
<td style="text-align:center">\u5426</td>
<td style="text-align:center">\u63A5\u53E3\u8C03\u7528\u7ED3\u675F\u7684\u56DE\u8C03\u51FD\u6570\uFF08\u8C03\u7528\u6210\u529F\u3001\u5931\u8D25\u90FD\u4F1A\u6267\u884C\uFF09</td>
</tr>
</tbody>
</table>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">goToNoTabBar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateTo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">'/pages/info/info?name=luochao'</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53D6\u53C2\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">onLoad</span><span class="token punctuation">(</span><span class="token parameter">option</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// options\u5C31\u662F\u5BFC\u822A\u4F20\u9012\u8FC7\u6765\u7684\u53C2\u6570\u5BF9\u8C61</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>option<span class="token punctuation">,</span><span class="token string">'option'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u540E\u9000\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u540E\u9000\u5BFC\u822A" aria-hidden="true">#</a> \u540E\u9000\u5BFC\u822A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u58F0\u660E\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u5FC5\u987B\u662F\u6570\u5B57\uFF0C\u8868\u793A\u8981\u540E\u9000\u7684\u5C42\u7EA7</span>
<span class="token operator">&lt;</span>navigator open<span class="token operator">-</span>type<span class="token operator">=</span><span class="token string">"navigateBack"</span> delta<span class="token operator">=</span><span class="token string">"1"</span><span class="token operator">></span>\u8FD4\u56DE\u4E0A\u4E00\u9875<span class="token operator">&lt;</span><span class="token operator">/</span>navigator<span class="token operator">></span>

<span class="token comment">// \u7F16\u7A0B\u5F0F\u5BFC\u822A</span>
<span class="token comment">// delta\u8FD4\u56DE\u7684\u9875\u9762\u6570\uFF0C\u5982\u679C delta \u5927\u4E8E\u73B0\u6709\u9875\u9762\u6570\uFF0C\u5219\u8FD4\u56DE\u5230\u9996\u9875\u3002</span>
<span class="token comment">// wx.navigateBack(Object object)</span>
<span class="token function">gotToBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">delta</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E0B\u62C9\u5237\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u62C9\u5237\u65B0" aria-hidden="true">#</a> \u4E0B\u62C9\u5237\u65B0</h2>
<ul>
<li>\u5168\u5C40\u5F00\u542F</li>
</ul>
<p>\u5728app.json\u7684window\u8282\u70B9\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<ul>
<li>\u5C40\u90E8\u5F00\u542F</li>
</ul>
<p>\u5728.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u5C06<code>enablePullDownRefresh</code>\u8BBE\u7F6E\u4E3Atrue</p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>\u5728\u5168\u5C40\u6216\u9875\u9762\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>backgroundColor</code>\u548C<code>backgroundTextStyle</code>\u6765\u914D\u7F6E\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3\u6837\u5F0F</p>
</div><p>\u89E6\u53D1\uFF1A<code>onPullDownRefresh()</code></p>
<p>\u5F53\u5904\u7406\u5B8C\u4E0B\u62C9\u5237\u65B0\u540E\uFF0C\u4E0B\u62C9\u5237\u65B0\u7684 loading \u6548\u679C\u4F1A\u4E00\u76F4\u663E\u793A\uFF0C\u4E0D\u4F1A\u4E3B\u52A8\u6D88\u5931\uFF0C \u6240\u4EE5\u9700\u8981\u624B\u52A8\u9690\u85CF loading \u6548\u679C</p>
<p>\u505C\u6B62\u4E0B\u62C9\u5237\u65B0\uFF1A<code>wx.stopPullDownRefresh()</code></p>
<h2 id="\u4E0A\u62C9\u89E6\u5E95" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u62C9\u89E6\u5E95" aria-hidden="true">#</a> \u4E0A\u62C9\u89E6\u5E95</h2>
<p>\u5728\u5168\u5C40\u6216\u5C40\u90E8\u7684.json\u914D\u7F6E\u6587\u4EF6\u4E2D\uFF0C\u901A\u8FC7<code>onReachBottomDistance</code>\u5C5E\u6027\u6765\u914D\u7F6E\u4E0A\u62C9\u89E6\u5E95\u7684\u8DDD\u79BB\uFF0C\u9ED8\u8BA4\u8DDD\u79BB\u662F50px</p>
<p>\u89E6\u53D1\uFF1A<code>onReachBottom()</code></p>
<h2 id="wxs" tabindex="-1"><a class="header-anchor" href="#wxs" aria-hidden="true">#</a> wxs</h2>
<ul>
<li>\u5185\u5D4Cwxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m1<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs module<span class="token operator">=</span><span class="token string">"m1"</span><span class="token operator">></span>
  module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span><span class="token function-variable function">toLower</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>wxs<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u5B9A\u4E49\u5916\u8054\u7684wxs\u811A\u672C</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// tools.wxs</span>
<span class="token keyword">function</span> <span class="token function">toLower</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
  <span class="token literal-property property">toLower</span><span class="token operator">:</span>toLower
<span class="token punctuation">}</span>

<span class="token comment">// message.wxml</span>
<span class="token operator">&lt;</span>view<span class="token operator">></span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>m2<span class="token punctuation">.</span><span class="token function">toLower</span><span class="token punctuation">(</span><span class="token string">'HJSFSFKS'</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>view<span class="token operator">></span>

<span class="token operator">&lt;</span>wxs src<span class="token operator">=</span><span class="token string">"../../wxs/tools.wxs"</span> module<span class="token operator">=</span><span class="token string">"m2"</span><span class="token operator">/</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6" aria-hidden="true">#</a> \u5176\u4ED6</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u4FEE\u6539navBar\u6807\u9898</span>
wx<span class="token punctuation">.</span><span class="token function">setNavigationBarTitle</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'test'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u52A0\u8F7D\u6548\u679Capi</span>
<span class="token comment">// \u52A0\u8F7D\u4E2D</span>
wx<span class="token punctuation">.</span><span class="token function">showLoading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u4E2D......'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u7ED3\u675F</span>
wx<span class="token punctuation">.</span><span class="token function">hideLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5173\u95ED\u4E0B\u62C9\u5237\u65B0\u7A97\u53E3</span>
wx<span class="token punctuation">.</span><span class="token function">stopPullDownRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u8F7B\u63D0\u793A</span>
wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span><span class="token string">'\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF01'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span><span class="token string">'none'</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-18",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/weixin/2022/111801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60"},slug:"111801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/weixin/2022/111801.md",filePathRelative:"blogs/weixin/2022/111801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.vue",componentFilePathRelative:"pages/blogs/weixin/2022/111801.html.vue",componentFileChunkName:"v-29a06e76",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/weixin/2022/111801.html.js",dataFilePathRelative:"pages/blogs/weixin/2022/111801.html.js",dataFileChunkName:"v-29a06e76",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/weixin/2022/111801.html",htmlFilePathRelative:"blogs/weixin/2022/111801.html"}],length:1,label:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"},css:{length:2,pages:[{data:{key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/110401.md"},key:"v-729d99c6",path:"/blogs/css/2022/110401.html",title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",lang:"zh-CN",frontmatter:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",date:"2022-11-04 10:00:18",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],content:`
### Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A
\`\`\`js
<template>
  <div class="custom-basic-page-layout-container">
    <CustomNavBar :title="headerTitle" />
    <div class="main-content">
      <slot name="body"></slot>
    </div>
    <div class="foot-btn-area">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup name="ManagePage">
  const props = defineProps({
    headerTitle: {
      type: String,
      default: '\u7A7A',
    },
    footerHeight: {
      type: String,
      default: '62.39px',
    },
  });
  // \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09
  const minH = \`calc(100vh - 47.83px - \${props.footerHeight})\`;
<\/script>

<style lang="scss" scoped>
  .custom-basic-page-layout-container {
    height: 100vh;
    background-color: #f7f8fa;
    .main-content {
      min-height: v-bind('minH');
    }
    .foot-btn-area {
      background-color: #ffffff;
      height: 60px;
      line-height: 60px;
      text-align: center;
    }
  }
</style>

\`\`\`

### \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09
\`\`\`js
<template>
	<div class="content" :style="{'--color': themeColor}">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="themeColor='pink'">\u4FEE\u6539\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {
			return {
				themeColor: 'red'
			}
		},
	}
<\/script>
 
<style lang="scss">
	.content {
		// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528
		width: 100%;
		height: 200px;
		background-color: var(--color);
 
		.title {
			background-color: white;
			color: var(--color);
		}
	}
</style>
\`\`\`

### \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539
\`\`\`js
<template>
	<div class="content" ref="content">
		<div class="title">\u8FD9\u662F\u4E00\u4E2A\u6807\u9898</div>
	</div>
	<button @click="changeBgColor">\u4FEE\u6539\u80CC\u666F\u989C\u8272</button>
	<button @click="changeFontColor">\u4FEE\u6539\u5B57\u4F53\u989C\u8272</button>
</template>
 
<script>
	export default {
		name: 'DEMO',
		data() {},
		methods: {
			changeBgColor() {
				document.getElementsByTagName('body')[0].style.setProperty('--bg-color', 'pink');
			},
			changeFontColor() {
				// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539
				this.$refs.content.style.setProperty("--font-color", 'pink');
			}
		},
	}
<\/script>
 
<style lang="scss">
	// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY
	// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C
	$themeBgColor: var(--bg-color, red);
 
	.content {
		--font-color: red;
		width: 100%;
		height: 200px;
		background-color: $themeBgColor;
 
		.title {
			background-color: white;
			color: var(--font-color);
		}
	}
</style>
\`\`\``,contentRendered:`<h3 id="vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A" aria-hidden="true">#</a> Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"custom-basic-page-layout-container"</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>CustomNavBar <span class="token operator">:</span>title<span class="token operator">=</span><span class="token string">"headerTitle"</span> <span class="token operator">/</span><span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"main-content"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"body"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"foot-btn-area"</span><span class="token operator">></span>
      <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">"footer"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">></span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>

<span class="token operator">&lt;</span>script lang<span class="token operator">=</span><span class="token string">"ts"</span> setup name<span class="token operator">=</span><span class="token string">"ManagePage"</span><span class="token operator">></span>
  <span class="token keyword">const</span> props <span class="token operator">=</span> <span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">headerTitle</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'\u7A7A'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">footerHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">'62.39px'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u53EF\u89C6\u5316\u533A\u57DF\u9AD8\u5EA6-\u5BFC\u822A\u5934\u9AD8\u5EA6\uFF08\u56FA\u5B9A\u6B7B\u7684\uFF09-\u5E95\u90E8\u6309\u94AE\u533A\u57DF\u9AD8\u5EA6\uFF08\u52A8\u6001\uFF09</span>
  <span class="token keyword">const</span> minH <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">calc(100vh - 47.83px - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>props<span class="token punctuation">.</span>footerHeight<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span>
  <span class="token punctuation">.</span>custom<span class="token operator">-</span>basic<span class="token operator">-</span>page<span class="token operator">-</span>layout<span class="token operator">-</span>container <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 100vh<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> #f7f8fa<span class="token punctuation">;</span>
    <span class="token punctuation">.</span>main<span class="token operator">-</span>content <span class="token punctuation">{</span>
      min<span class="token operator">-</span>height<span class="token operator">:</span> v<span class="token operator">-</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">'minH'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>foot<span class="token operator">-</span>btn<span class="token operator">-</span>area <span class="token punctuation">{</span>
      background<span class="token operator">-</span>color<span class="token operator">:</span> #ffffff<span class="token punctuation">;</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      line<span class="token operator">-</span>height<span class="token operator">:</span> 60px<span class="token punctuation">;</span>
      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A" aria-hidden="true">#</a> \u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> <span class="token operator">:</span>style<span class="token operator">=</span><span class="token string">"{'--color': themeColor}"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"themeColor='pink'"</span><span class="token operator">></span>\u4FEE\u6539\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">{</span>
				<span class="token literal-property property">themeColor</span><span class="token operator">:</span> <span class="token string">'red'</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token comment">// --color \u5728content\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539" aria-hidden="true">#</a> \u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>template<span class="token operator">></span>
	<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"content"</span> ref<span class="token operator">=</span><span class="token string">"content"</span><span class="token operator">></span>
		<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"title"</span><span class="token operator">></span>\u8FD9\u662F\u4E00\u4E2A\u6807\u9898<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeBgColor"</span><span class="token operator">></span>\u4FEE\u6539\u80CC\u666F\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
	<span class="token operator">&lt;</span>button @click<span class="token operator">=</span><span class="token string">"changeFontColor"</span><span class="token operator">></span>\u4FEE\u6539\u5B57\u4F53\u989C\u8272<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
 
<span class="token operator">&lt;</span>script<span class="token operator">></span>
	<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'DEMO'</span><span class="token punctuation">,</span>
		<span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token function">changeBgColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">'body'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">'--bg-color'</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token function">changeFontColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// --font-color \u5728\u54EA\u4E2A\u5143\u7D20\u5B9A\u4E49\u7684\u5C31\u5728\u54EA\u4E2A\u5143\u7D20\u4FEE\u6539</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>content<span class="token punctuation">.</span>style<span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">"--font-color"</span><span class="token punctuation">,</span> <span class="token string">'pink'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
 
<span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span><span class="token operator">></span>
	<span class="token comment">// --label-font-color\uFF1A\u4E3Ajs\u64CD\u4F5C\u6B64\u53D8\u91CF\u9700\u8981\u7528\u5230\u7684KEY</span>
	<span class="token comment">// --red\uFF1A\u9ED8\u8BA4css\u5C5E\u6027\u503C</span>
	<span class="token literal-property property">$themeBgColor</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>bg<span class="token operator">-</span>color<span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
	<span class="token punctuation">.</span>content <span class="token punctuation">{</span>
		<span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token operator">:</span> red<span class="token punctuation">;</span>
		<span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
		<span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
		background<span class="token operator">-</span>color<span class="token operator">:</span> $themeBgColor<span class="token punctuation">;</span>
 
		<span class="token punctuation">.</span>title <span class="token punctuation">{</span>
			background<span class="token operator">-</span>color<span class="token operator">:</span> white<span class="token punctuation">;</span>
			<span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token keyword">var</span><span class="token punctuation">(</span><span class="token operator">--</span>font<span class="token operator">-</span>color<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-11-04",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/110401.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF"},slug:"110401",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/110401.md",filePathRelative:"blogs/css/2022/110401.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.vue",componentFilePathRelative:"pages/blogs/css/2022/110401.html.vue",componentFileChunkName:"v-729d99c6",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/110401.html.js",dataFilePathRelative:"pages/blogs/css/2022/110401.html.js",dataFileChunkName:"v-729d99c6",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/110401.html",htmlFilePathRelative:"blogs/css/2022/110401.html"},{data:{key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/css/2022/102601.md"},key:"v-769f6067",path:"/blogs/css/2022/102601.html",title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",lang:"zh-CN",frontmatter:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",date:"2022-10-26 15:33:43",categories:["css"],tags:["css"]},excerpt:"",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],content:`
## gap
\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694

## position: sticky
\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
![](https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png)
\`\`\`js
// css \u90E8\u5206
.container {
    background-color: oldlace;
    height: 200px;
    width: 140px;
    overflow: auto;
  }
  .container div {
    height: 20px;
    background-color: aqua;
    border: 1px solid;
  }
  .container .header {
    position: sticky;
    top: 0;
    background-color: rgb(187, 153, 153);
}

// html \u90E8\u5206
<div class="container">
  <div class="header">Header</div>
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
\`\`\``,contentRendered:`<h2 id="gap" tabindex="-1"><a class="header-anchor" href="#gap" aria-hidden="true">#</a> gap</h2>
<p>\u9002\u7528\u4E8Eflex\u548Cgrid\u5E03\u5C40\uFF0C\u8BBE\u7F6E\u6BCF\u4E2A\u5143\u7D20\u4E4B\u95F4\u7684\u95F4\u9694</p>
<h2 id="position-sticky" tabindex="-1"><a class="header-anchor" href="#position-sticky" aria-hidden="true">#</a> position: sticky</h2>
<p>\u9002\u7528\u4E8E\u5438\u9876\u9700\u6C42\uFF1A\u6807\u9898\u5728\u6EDA\u52A8\u7684\u65F6\u5019\uFF0C\u4F1A\u4E00\u76F4\u8D34\u7740\u6700\u9876\u4E0A,\u573A\u666F\uFF1A\u6BD4\u5982\u8868\u683C\u7684\u6807\u9898\u680F\u3001\u7F51\u7AD9\u7684\u5BFC\u822A\u680F\u3001\u624B\u673A\u901A\u8BAF\u5F55\u7684\u4EBA\u540D\u9996\u5B57\u6BCD\u6807\u9898\u7B49\u7B49
<img src="https://s3.bmp.ovh/imgs/2022/10/26/722bfd8126dfa870.png" alt=""></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// css \u90E8\u5206</span>
<span class="token punctuation">.</span>container <span class="token punctuation">{</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> oldlace<span class="token punctuation">;</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 200px<span class="token punctuation">;</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> 140px<span class="token punctuation">;</span>
    <span class="token literal-property property">overflow</span><span class="token operator">:</span> auto<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container div <span class="token punctuation">{</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> 20px<span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> aqua<span class="token punctuation">;</span>
    <span class="token literal-property property">border</span><span class="token operator">:</span> 1px solid<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">.</span>container <span class="token punctuation">.</span>header <span class="token punctuation">{</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> sticky<span class="token punctuation">;</span>
    <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">187</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">,</span> <span class="token number">153</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// html \u90E8\u5206</span>
<span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"container"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"header"</span><span class="token operator">></span>Header<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">1</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">2</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
  <span class="token operator">&lt;</span>div<span class="token operator">></span><span class="token number">3</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-26",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/css/2022/102601.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027"},slug:"102601",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/css/2022/102601.md",filePathRelative:"blogs/css/2022/102601.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.vue",componentFilePathRelative:"pages/blogs/css/2022/102601.html.vue",componentFileChunkName:"v-769f6067",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/css/2022/102601.html.js",dataFilePathRelative:"pages/blogs/css/2022/102601.html.js",dataFileChunkName:"v-769f6067",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/css/2022/102601.html",htmlFilePathRelative:"blogs/css/2022/102601.html"}],label:"css"},js:{length:2,pages:[{data:{key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101701.md"},key:"v-37e04cf1",path:"/blogs/js/2022/101701.html",title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",lang:"zh-CN",frontmatter:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",date:"2022-10-17 15:18:19",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],content:`
## \u590D\u5236\u5230\u526A\u5207\u677F
\`\`\`js
const copyToClipboard = (text:any) => navigator.clipboard && navigator.clipboard.writeText && navigator.clipboard.writeText(text)
const click=()=>{
  copyToClipboard("Hello World!")
}
\`\`\`

\`\`\`js
const input = document.createElement('input'); // js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846
input.value = 'hello world';
document.body.appendChild(input); // \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762
input.select(); // \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9
document.execCommand('Copy'); // \u6267\u884C\u590D\u5236\u64CD\u4F5C
document.body.removeChild(input); // \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C
\`\`\`

## \u6EDA\u52A8\u5230\u9876\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "start" });
}
\`\`\`

## \u6EDA\u52A8\u5230\u5E95\u90E8
\`\`\`js
const homeContainer=ref() //\u9700\u8981\u4F5C\u7528\u7684dom
const testScrollTop=()=>{
  homeContainer.value.scrollIntoView({ behavior: "smooth", block: "end" });
}
\`\`\`

## \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D
\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver
\`\`\`js
const callback = (entries:any) => {
  entries.forEach((entry:any) => {
    if (entry.isIntersecting) {
      // \`entry.target\` is the dom element
      console.log(\`\${entry.target.id} is visible\`);
    }else{
      console.log(\`\${entry.target.id} is notvisible\`);
    }
  });
};
const options = {
  threshold: 1.0,
};
const observer = new IntersectionObserver(callback, options);
// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C
const scrollContainer=()=>{
  const testDiv:any=document.getElementById("testDiv"); // \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20
  observer.observe(testDiv);
}
\`\`\`

## \u68C0\u6D4B\u8BBE\u5907
\`\`\`js
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) ? "Mobile" : "Desktop";

console.log(detectDeviceType());
\`\`\``,contentRendered:`<h2 id="\u590D\u5236\u5230\u526A\u5207\u677F" tabindex="-1"><a class="header-anchor" href="#\u590D\u5236\u5230\u526A\u5207\u677F" aria-hidden="true">#</a> \u590D\u5236\u5230\u526A\u5207\u677F</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">copyToClipboard</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">text</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> navigator<span class="token punctuation">.</span>clipboard <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span>writeText <span class="token operator">&amp;&amp;</span> navigator<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">writeText</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">click</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token function">copyToClipboard</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">'input'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// js\u521B\u5EFA\u4E00\u4E2Ainput\u8F93\u5165\u6846</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5C06\u8F93\u5165\u6846\u6682\u65F6\u521B\u5EFA\u5230\u5B9E\u4F8B\u91CC\u9762</span>
input<span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9009\u4E2D\u8F93\u5165\u6846\u4E2D\u7684\u5185\u5BB9</span>
document<span class="token punctuation">.</span><span class="token function">execCommand</span><span class="token punctuation">(</span><span class="token string">'Copy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6267\u884C\u590D\u5236\u64CD\u4F5C</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>input<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6700\u540E\u5220\u9664\u5B9E\u4F8B\u4E2D\u4E34\u65F6\u521B\u5EFA\u7684input\u8F93\u5165\u6846\uFF0C\u5B8C\u6210\u590D\u5236\u64CD\u4F5C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u9876\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u9876\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u9876\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"start"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6EDA\u52A8\u5230\u5E95\u90E8" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u52A8\u5230\u5E95\u90E8" aria-hidden="true">#</a> \u6EDA\u52A8\u5230\u5E95\u90E8</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> homeContainer<span class="token operator">=</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u9700\u8981\u4F5C\u7528\u7684dom</span>
<span class="token keyword">const</span> <span class="token function-variable function">testScrollTop</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  homeContainer<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">scrollIntoView</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">behavior</span><span class="token operator">:</span> <span class="token string">"smooth"</span><span class="token punctuation">,</span> <span class="token literal-property property">block</span><span class="token operator">:</span> <span class="token string">"end"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D" aria-hidden="true">#</a> \u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D</h2>
<p>\u68C0\u67E5\u5143\u7D20\u662F\u5426\u5728\u7A97\u53E3\u4E2D\u6700\u597D\u7684\u65B9\u6CD5\u662F\u4F7F\u7528 IntersectionObserver</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entries</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">entry</span><span class="token operator">:</span>any</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \`entry.target\` is the dom element</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is visible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>entry<span class="token punctuation">.</span>target<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> is notvisible</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">threshold</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> observer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u4E00\u822C\u914D\u5408\u6EDA\u52A8\u4E8B\u4EF6\u4F7F\u7528 @scroll="scrollContainer"\uFF0C\u7ED1\u5B9A\u6EDA\u52A8\u4E8B\u4EF6\u7684\u5BB9\u5668\u5FC5\u987B\u8BBE\u7F6E\u9AD8\u5EA6\u548Coverflow-y: auto;\uFF0C\u5426\u5219\u6EDA\u52A8\u4E8B\u4EF6\u4E0D\u6267\u884C</span>
<span class="token keyword">const</span> <span class="token function-variable function">scrollContainer</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token literal-property property">testDiv</span><span class="token operator">:</span>any<span class="token operator">=</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"testDiv"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9700\u8981\u68C0\u6D4B\u7684\u5143\u7D20</span>
  observer<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>testDiv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u68C0\u6D4B\u8BBE\u5907" tabindex="-1"><a class="header-anchor" href="#\u68C0\u6D4B\u8BBE\u5907" aria-hidden="true">#</a> \u68C0\u6D4B\u8BBE\u5907</h2>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">detectDeviceType</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span>
  <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>
    navigator<span class="token punctuation">.</span>userAgent
  <span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">"Mobile"</span> <span class="token operator">:</span> <span class="token string">"Desktop"</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">detectDeviceType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-17",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101701.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570"},slug:"101701",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101701.md",filePathRelative:"blogs/js/2022/101701.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101701.html.vue",componentFileChunkName:"v-37e04cf1",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101701.html.js",dataFilePathRelative:"pages/blogs/js/2022/101701.html.js",dataFileChunkName:"v-37e04cf1",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101701.html",htmlFilePathRelative:"blogs/js/2022/101701.html"},{data:{key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/js/2022/101201.md"},key:"v-307a6c96",path:"/blogs/js/2022/101201.html",title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",lang:"zh-CN",frontmatter:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",date:"2022-10-13 10:12:56",categories:["js"],tags:["js"]},excerpt:"",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],content:`
## \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD
::: tip
Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4
:::
\`\`\`js
// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
const setData = Array.from(new Set(arr));
console.log(setData); //[1,2,3,4,5]
\`\`\`

### \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD
\`\`\`js
// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
for(let i=0;i<arr.length;i++){
  for(let j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1)
      j--
    }
  }
}
console.log(arr); //[1,2,3,4,5]
\`\`\`

### \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  let repeatArr = [];
  for (let i = 0,len = arr.length ; i < len; i++) 
    if (repeatArr.indexOf(arr[i]) === -1)  repeatArr.push(arr[i])
    // if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])
  return repeatArr;
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

### \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD
\`\`\`js
// \u53BB\u91CD
const arr = [1,1,2,2,3,3,4,4,5,5];
//\u53BB\u91CD
const handleRemoveRepeat = (arr) => {
  arr.filter((item,index)=> arr.indexOf(item,0)===index)
}
handleRemoveRepeat(arr) //[1,2,3,4,5]
\`\`\`

## \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD

### \u4F7F\u7528filter\u548CMap
\`\`\`js
// \u6700\u63A8\u8350
function uniqueFunc(arr, uniId){
  const res = new Map();
  return arr.filter((item) => !res.has(item[uniId]) && res.set(item[uniId], 1));
}
\`\`\`

### \u4F7F\u7528reduce
\`\`\`js
function uniqueFunc(arr, uniId){
  let hash = {}
  return arr.reduce((accum,item) => {
    hash[item[uniId]] ? '' : hash[item[uniId]] = true && accum.push(item)
    return accum
  },[])
}
\`\`\`

### \u4F7F\u7528for\u5FAA\u73AF
\`\`\`js
function uniqueFunc(arr, uniId){
  let obj = {}
  let tempArr = []
  for(var i = 0; i<arr.length; i++){
    if(!obj[arr[i][uniId]]){
      tempArr.push(arr[i])
      obj[arr[i][uniId]] = true
    }
  }
  return tempArr
}
\`\`\``,contentRendered:`<h2 id="\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD</h3>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>Set\u53BB\u91CD\u6709\u4E00\u4E2A\u5F0A\u7AEF\uFF0C\u4ED6\u65E0\u6CD5\u53BB\u91CD\u5F15\u7528\u7C7B\u578B\u7684\u6570\u636E\u3002\u6BD4\u5982\u5BF9\u8C61\u6570\u7EC4</p>
</div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5C06\u4E00\u4E2A\u6570\u7EC4\u8F6C\u5316\u4E3ASet\u6570\u636E\uFF0C\u518D\u8F6C\u5316\u56DE\u6765\uFF0C\u5C31\u5B8C\u6210\u4E86\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> setData <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>setData<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53CC\u91CD\u5FAA\u73AF\u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> j<span class="token operator">=</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">===</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      arr<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span>
      j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> repeatArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>repeatArr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  repeatArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment">// if (!repeatArr.includes(arr[i]))  repeatArr.push(arr[i])</span>
  <span class="token keyword">return</span> repeatArr<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD" aria-hidden="true">#</a> \u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u53BB\u91CD</span>
<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">//\u53BB\u91CD</span>
<span class="token keyword">const</span> <span class="token function-variable function">handleRemoveRepeat</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">===</span>index<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">handleRemoveRepeat</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span> <span class="token comment">//[1,2,3,4,5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD" aria-hidden="true">#</a> \u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD</h2>
<h3 id="\u4F7F\u7528filter\u548Cmap" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528filter\u548Cmap" aria-hidden="true">#</a> \u4F7F\u7528filter\u548CMap</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u6700\u63A8\u8350</span>
<span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token operator">!</span>res<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528reduce" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528reduce" aria-hidden="true">#</a> \u4F7F\u7528reduce</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> hash <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accum<span class="token punctuation">,</span>item</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token string">''</span> <span class="token operator">:</span> hash<span class="token punctuation">[</span>item<span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> accum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
    <span class="token keyword">return</span> accum
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528for\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528for\u5FAA\u73AF" aria-hidden="true">#</a> \u4F7F\u7528for\u5FAA\u73AF</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">uniqueFunc</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> uniId</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token keyword">let</span> tempArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      tempArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
      obj<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>uniId<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tempArr
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"2022-10-13",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/js/2022/101201.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD"},slug:"101201",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/js/2022/101201.md",filePathRelative:"blogs/js/2022/101201.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.vue",componentFilePathRelative:"pages/blogs/js/2022/101201.html.vue",componentFileChunkName:"v-307a6c96",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/js/2022/101201.html.js",dataFilePathRelative:"pages/blogs/js/2022/101201.html.js",dataFileChunkName:"v-307a6c96",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/js/2022/101201.html",htmlFilePathRelative:"blogs/js/2022/101201.html"}],label:"js"},vue:{length:3,pages:[{data:{key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100802.md"},key:"v-1e558f08",path:"/blogs/vue3.0/2022/100802.html",title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",lang:"zh-CN",frontmatter:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",date:"2022-10-08 16:49:28",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A

:::: code-group
::: code-group-item main.js
\`\`\`js 
import App from './App.vue'
import commUtils from './utils/comm'

const app=createApp(App)
app.config.globalProperties.$commUtils = commUtils;
\`\`\`
:::
::: code-group-item comm.ts
\`\`\`js
// \u91D1\u989D\u683C\u5F0F\u5316
const formatPrice = (num: number) => {
  return num
    ? Number(num)
        .toFixed(2)
        .replace(/(\\d)(?=(\\d{3})+\\.)/g, '$1,')
    : '0.00';
}; 

export default{formatPrice}
\`\`\`
:::
::: code-group-item index.vue
\`\`\`js
import {getCurrentInstance } from 'vue';

const { proxy }:any = getCurrentInstance()
console.log(proxy.$commUtils.formatPrice(1998)); //1,998.00
\`\`\`
:::
::::
`,contentRendered:`<p>Vue2 \u4E2D\u7684\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5\uFF0C\u662F\u5728\u6784\u9020\u51FD\u6570 Vue \u7684\u539F\u578B\u5BF9\u8C61\u4E0A\u8FDB\u884C\u6DFB\u52A0\uFF0C\u5982\uFF1A<code>Vue.prototype.$axios = axios</code> \u3002\u4F46\u5728 Vue3 \u4E2D\uFF0C\u9700\u8981\u5728 app \u5B9E\u4F8B\u4E0A\u6DFB\u52A0\uFF1A</p>
<CodeGroup>
<CodeGroupItem title="main.js">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span>
<span class="token keyword">import</span> commUtils <span class="token keyword">from</span> <span class="token string">'./utils/comm'</span>

<span class="token keyword">const</span> app<span class="token operator">=</span><span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$commUtils <span class="token operator">=</span> commUtils<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="comm.ts">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u91D1\u989D\u683C\u5F0F\u5316</span>
<span class="token keyword">const</span> <span class="token function-variable function">formatPrice</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">num</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num
    <span class="token operator">?</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\\d)(?=(\\d{3})+\\.)</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">'$1,'</span><span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token string">'0.00'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span> 

<span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>formatPrice<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="index.vue">
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> proxy <span class="token punctuation">}</span><span class="token operator">:</span>any <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">.</span>$commUtils<span class="token punctuation">.</span><span class="token function">formatPrice</span><span class="token punctuation">(</span><span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//1,998.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5"},slug:"100802",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100802.md",filePathRelative:"blogs/vue3.0/2022/100802.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.vue",componentFileChunkName:"v-1e558f08",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100802.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100802.html.js",dataFileChunkName:"v-1e558f08",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100802.html",htmlFilePathRelative:"blogs/vue3.0/2022/100802.html"},{data:{key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/100801.md"},key:"v-1ca0b669",path:"/blogs/vue3.0/2022/100801.html",title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",lang:"zh-CN",frontmatter:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",date:"2022-10-08 15:09:47",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A
\`\`\`js
<script setup>
import { getCurrentInstance } from 'vue'

const { ctx } = getCurrentInstance()
console.log(ctx) // \u548C this \u7684\u5C5E\u6027\u4E00\u6837
<\/script>
\`\`\`
\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A

![](https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png)`,contentRendered:`<p>Vue3 \u7684 setup \u4E2D\u65E0\u6CD5\u4F7F\u7528 this \u8FD9\u4E2A\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF0C\u5982\u679C\u975E\u8981\u4F7F\u7528this\u4E0A\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u4F9D\u7136\u53EF\u4EE5\u901A\u8FC7<code>getCurrentInstance</code>\u65B9\u6CD5\u83B7\u53D6\u4E0A\u4E0B\u6587\u5BF9\u8C61\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> ctx <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span> <span class="token comment">// \u548C this \u7684\u5C5E\u6027\u4E00\u6837</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6253\u5370\u51FA\u6765\u7684\u7ED3\u679C\u5982\u4E0B\uFF1A</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/10/08/b07c02fced996006.png" alt=""></p>
`,date:"2022-10-08",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this"},slug:"100801",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/100801.md",filePathRelative:"blogs/vue3.0/2022/100801.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.vue",componentFileChunkName:"v-1ca0b669",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/100801.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/100801.html.js",dataFileChunkName:"v-1ca0b669",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/100801.html",htmlFilePathRelative:"blogs/vue3.0/2022/100801.html"},{data:{key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],git:{createdTime:1670809329e3,updatedTime:1670809329e3,contributors:[{name:"luochao1998",email:"lch19981107@163.com",commits:1}]},filePathRelative:"blogs/vue3.0/2022/092901.md"},key:"v-a289eec0",path:"/blogs/vue3.0/2022/092901.html",title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",lang:"zh-CN",frontmatter:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",date:"2022-9-29 16:59:40",categories:["vue3.0"],tags:["vue"]},excerpt:"",headers:[],content:`
1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D

. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D

2.\u6DF1\u62F7\u8D1D

![alt](https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png)


![alt](https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png)`,contentRendered:`<p>1.\u6D45\u62F7\u8D1D
Object.assign( { } , ...... )---\u5BF9\u4E8E\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7684\u662F\u6D45\u62F7\u8D1D\uFF0C
\u5982\u679C\u662F\u8FD9\u6837\u7684\u5199\u6CD5Object.assign( ...... )---\u4E0D\u7BA1\u7B2C\u4E00\u5C42\u8FD8\u662F\u5D4C\u5957\u7684\u90FD\u662F\u6D45\u62F7\u8D1D</p>
<p>. . .\u5C55\u5F00\u8FD0\u7B97\u7B26\u7B2C\u4E00\u5C42\u662F\u6DF1\u62F7\u8D1D\uFF0C\u7B2C\u4E8C\u5C42\u662F\u6D45\u62F7\u8D1D</p>
<p>2.\u6DF1\u62F7\u8D1D</p>
<p><img src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png" alt="alt"></p>
<p><img src="https://s3.bmp.ovh/imgs/2022/09/29/a0308b658a52cc34.png" alt="alt"></p>
`,date:"2022-09-29",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D"},slug:"092901",filePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/blogs/vue3.0/2022/092901.md",filePathRelative:"blogs/vue3.0/2022/092901.md",componentFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.vue",componentFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.vue",componentFileChunkName:"v-a289eec0",dataFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/.vuepress/.temp/pages/blogs/vue3.0/2022/092901.html.js",dataFilePathRelative:"pages/blogs/vue3.0/2022/092901.html.js",dataFileChunkName:"v-a289eec0",htmlFilePath:"/home/runner/work/LChBlog.github.io/LChBlog.github.io/public/blogs/vue3.0/2022/092901.html",htmlFilePathRelative:"blogs/vue3.0/2022/092901.html"}],label:"vue"}},layout:"Categories"}};async function Qi(){const n=n1(()=>Ji),t=n1(()=>Yi),e=n1(()=>Zi);d2(U0,n),d2(W0,e),d2(Ie,t)}var Xi=f2({setup(){Qi()}}),n8=f2({enhance({app:n}){const t=Qa(),e=n._context.provides[ps],r=n1(()=>Xa(t.value,e.value));n.provide(f0,r),Object.defineProperties(n.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}});const t8=(n,t)=>t.some(e=>{if(C1(e))return e===n.key;const{key:r,ctrl:l=!1,shift:i=!1,alt:h=!1}=e;return r===n.key&&l===n.ctrlKey&&i===n.shiftKey&&h===n.altKey}),e8=/[^\x00-\x7F]/,s8=n=>n.split(/\s+/g).map(t=>t.trim()).filter(t=>!!t),Yo=n=>n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),Zo=(n,t)=>{const e=t.join(" "),r=s8(n);if(e8.test(n))return r.some(h=>e.toLowerCase().indexOf(h)>-1);const l=n.endsWith(" ");return new RegExp(r.map((h,d)=>r.length===d+1&&!l?`(?=.*\\b${Yo(h)})`:`(?=.*\\b${Yo(h)}\\b)`).join("")+".+","gi").test(e)},o8=({input:n,hotKeys:t})=>{if(t.value.length===0)return;const e=r=>{!n.value||t8(r,t.value)&&!n.value.contains(r.target)&&(r.preventDefault(),n.value.focus())};Y1(()=>{document.addEventListener("keydown",e)}),lt(()=>{document.removeEventListener("keydown",e)})},c8=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"\u51B7\u95E8\u53C8\u597D\u7528\u7684css\u5C5E\u6027",headers:[{level:2,title:"gap",slug:"gap",children:[]},{level:2,title:"position: sticky",slug:"position-sticky",children:[]}],path:"/blogs/css/2022/102601.html",pathLocale:"/",extraFields:[]},{title:"\u5728scss\u4E2D\u4F7F\u7528data\u4E2D\u7684\u53D8\u91CF",headers:[{level:3,title:"Vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",slug:"vue3\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528v-bind\u7ED1\u5B9A",children:[]},{level:3,title:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C\uFF08\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A\uFF09",slug:"\u5728scss\u4E2D\u4F7F\u7528js\u53D8\u91CF\u503C-\u4F7F\u7528v-bind\u53CC\u5411\u7ED1\u5B9A",children:[]},{level:3,title:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49\uFF0C\u5728js\u8FDB\u884C\u4FEE\u6539",slug:"\u53D8\u91CF\u5728style\u6807\u7B7E\u5B9A\u4E49-\u5728js\u8FDB\u884C\u4FEE\u6539",children:[]}],path:"/blogs/css/2022/110401.html",pathLocale:"/",extraFields:[]},{title:"\u6570\u7EC4\u53BB\u91CD\uFF0C\u6570\u7EC4\u5BF9\u8C61\u53BB\u91CD",headers:[{level:2,title:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u503C\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5\uFF0CES6\u7684Set\u53BB\u91CD",slug:"\u6700\u63A8\u8350\u7684\u65B9\u6CD5-es6\u7684set\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5\uFF0C\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",slug:"\u6700\u53E4\u8001\u7684\u65B9\u6CD5-\u53CC\u91CDfor\u5FAA\u73AF\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5\uFF0CindexOf Or includes \u53BB\u91CD",slug:"\u6700\u9E21\u808B\u7684\u65B9\u6CD5-indexof-or-includes-\u53BB\u91CD",children:[]},{level:3,title:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5\uFF0Cfilter \u53BB\u91CD",slug:"\u6700\u6709\u8DA3\u7684\u65B9\u6CD5-filter-\u53BB\u91CD",children:[]}]},{level:2,title:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",slug:"\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u53BB\u91CD",children:[{level:3,title:"\u4F7F\u7528filter\u548CMap",slug:"\u4F7F\u7528filter\u548Cmap",children:[]},{level:3,title:"\u4F7F\u7528reduce",slug:"\u4F7F\u7528reduce",children:[]},{level:3,title:"\u4F7F\u7528for\u5FAA\u73AF",slug:"\u4F7F\u7528for\u5FAA\u73AF",children:[]}]}],path:"/blogs/js/2022/101201.html",pathLocale:"/",extraFields:[]},{title:"\u5E38\u7528\u7684 JavaScript \u51FD\u6570",headers:[{level:2,title:"\u590D\u5236\u5230\u526A\u5207\u677F",slug:"\u590D\u5236\u5230\u526A\u5207\u677F",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u9876\u90E8",slug:"\u6EDA\u52A8\u5230\u9876\u90E8",children:[]},{level:2,title:"\u6EDA\u52A8\u5230\u5E95\u90E8",slug:"\u6EDA\u52A8\u5230\u5E95\u90E8",children:[]},{level:2,title:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",slug:"\u68C0\u6D4B\u5143\u7D20\u662F\u5426\u5728\u5C4F\u5E55\u4E2D",children:[]},{level:2,title:"\u68C0\u6D4B\u8BBE\u5907",slug:"\u68C0\u6D4B\u8BBE\u5907",children:[]}],path:"/blogs/js/2022/101701.html",pathLocale:"/",extraFields:[]},{title:"\u6D45\u62F7\u8D1D\uFF0C\u6DF1\u62F7\u8D1D",headers:[],path:"/blogs/vue3.0/2022/092901.html",pathLocale:"/",extraFields:[]},{title:"\u5728vue3\u4E2D\u4F7F\u7528\u4E0A\u4E0B\u6587this",headers:[],path:"/blogs/vue3.0/2022/100801.html",pathLocale:"/",extraFields:[]},{title:"\u5168\u5C40\u5C5E\u6027\u6216\u5168\u5C40\u65B9\u6CD5",headers:[],path:"/blogs/vue3.0/2022/100802.html",pathLocale:"/",extraFields:[]},{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B66\u4E60",headers:[{level:2,title:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",slug:"\u52A8\u6001\u7ED1\u5B9A\u5C5E\u6027",children:[]},{level:2,title:"\u5E38\u7528\u4E8B\u4EF6",slug:"\u5E38\u7528\u4E8B\u4EF6",children:[{level:3,title:"bindtap\u8BED\u6CD5",slug:"bindtap\u8BED\u6CD5",children:[]},{level:3,title:"bindinput\u8BED\u6CD5",slug:"bindinput\u8BED\u6CD5",children:[]}]},{level:2,title:"\u6761\u4EF6\u6E32\u67D3",slug:"\u6761\u4EF6\u6E32\u67D3",children:[]},{level:2,title:"\u5217\u8868\u6E32\u67D3",slug:"\u5217\u8868\u6E32\u67D3",children:[{level:3,title:"\u5E38\u89C4",slug:"\u5E38\u89C4",children:[]},{level:3,title:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",slug:"\u624B\u52A8\u6307\u5B9A\u7D22\u5F15\u548C\u5F53\u524D\u9879\u7684\u53D8\u91CF\u540D",children:[]}]},{level:2,title:"wxss",slug:"wxss",children:[]},{level:2,title:"\u6570\u636E\u8BF7\u6C42",slug:"\u6570\u636E\u8BF7\u6C42",children:[{level:3,title:"\u9650\u5236",slug:"\u9650\u5236",children:[]},{level:3,title:"\u53D1\u8D77\u8BF7\u6C42",slug:"\u53D1\u8D77\u8BF7\u6C42",children:[]}]},{level:2,title:"\u9875\u9762\u5BFC\u822A",slug:"\u9875\u9762\u5BFC\u822A",children:[{level:3,title:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",slug:"\u7F16\u7A0B\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u58F0\u660E\u5F0F\u5BFC\u822A",slug:"\u58F0\u660E\u5F0F\u5BFC\u822A",children:[]},{level:3,title:"\u540E\u9000\u5BFC\u822A",slug:"\u540E\u9000\u5BFC\u822A",children:[]}]},{level:2,title:"\u4E0B\u62C9\u5237\u65B0",slug:"\u4E0B\u62C9\u5237\u65B0",children:[]},{level:2,title:"\u4E0A\u62C9\u89E6\u5E95",slug:"\u4E0A\u62C9\u89E6\u5E95",children:[]},{level:2,title:"wxs",slug:"wxs",children:[]},{level:2,title:"\u5176\u4ED6",slug:"\u5176\u4ED6",children:[]}],path:"/blogs/weixin/2022/111801.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/css/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/js/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/vue3.0/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/weixinxiaochengxu/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/css/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/js/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/vue/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]}],K0=Y(c8),a8=()=>K0;yn.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=n=>{K0.value=n});const r8=({searchIndex:n,routeLocale:t,query:e,maxSuggestions:r})=>{const l=n1(()=>n.value.filter(i=>i.pathLocale===t.value));return n1(()=>{const i=e.value.trim().toLowerCase();if(!i)return[];const h=[],d=(u,w)=>{Zo(i,[w.title])&&h.push({link:`${u.path}#${w.slug}`,title:u.title,header:w.title});for(const v of w.children){if(h.length>=r.value)return;d(u,v)}};for(const u of l.value){if(h.length>=r.value)break;if(Zo(i,[u.title,...u.extraFields])){h.push({link:u.path,title:u.title});continue}for(const w of u.headers){if(h.length>=r.value)break;d(u,w)}}return h})},l8=n=>{const t=Y(0);return{focusIndex:t,focusNext:()=>{t.value<n.value.length-1?t.value+=1:t.value=0},focusPrev:()=>{t.value>0?t.value-=1:t.value=n.value.length-1}}},i8=a({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(n){const{locales:t,hotKeys:e,maxSuggestions:r}=Mn(n),l=zn(),i=_0(),h=a8(),d=Y(null),u=Y(!1),w=Y(""),v=n1(()=>{var L;return(L=t.value[i.value])!=null?L:{}}),k=r8({searchIndex:h,routeLocale:i,query:w,maxSuggestions:r}),{focusIndex:_,focusNext:g,focusPrev:x}=l8(k);o8({input:d,hotKeys:e});const C=n1(()=>u.value&&!!k.value.length),b=()=>{!C.value||x()},f=()=>{!C.value||g()},M=L=>{if(!C.value)return;const B=k.value[L];!B||l.push(B.link).then(()=>{w.value="",_.value=0})};return()=>q("form",{class:"search-box",role:"search"},[q("input",{ref:d,type:"search",placeholder:v.value.placeholder,autocomplete:"off",spellcheck:!1,value:w.value,onFocus:()=>u.value=!0,onBlur:()=>u.value=!1,onInput:L=>w.value=L.target.value,onKeydown:L=>{switch(L.key){case"ArrowUp":{b();break}case"ArrowDown":{f();break}case"Enter":{L.preventDefault(),M(_.value);break}}}}),C.value&&q("ul",{class:"suggestions",onMouseleave:()=>_.value=-1},k.value.map(({link:L,title:B,header:S},I)=>q("li",{class:["suggestion",{focus:_.value===I}],onMouseenter:()=>_.value=I,onMousedown:()=>M(I)},q("a",{href:L,onClick:W=>W.preventDefault()},[q("span",{class:"page-title"},B),S&&q("span",{class:"page-header"},`> ${S}`)]))))])}});const p8={},h8=[{key:"s",ctrl:!0}],d8=5;var u8=f2({enhance({app:n}){n.component("SearchBox",t=>q(i8,{locales:p8,hotKeys:h8,maxSuggestions:d8,...t}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT