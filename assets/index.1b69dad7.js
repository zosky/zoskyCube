(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function El(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ke={},Jr=[],Wt=()=>{},np=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),wl=t=>t.startsWith("onUpdate:"),it=Object.assign,Tl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},__=Object.prototype.hasOwnProperty,be=(t,e)=>__.call(t,e),oe=Array.isArray,Xr=t=>Di(t)==="[object Map]",ws=t=>Di(t)==="[object Set]",Ah=t=>Di(t)==="[object Date]",ue=t=>typeof t=="function",Ke=t=>typeof t=="string",dn=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",rp=t=>(Me(t)||ue(t))&&ue(t.then)&&ue(t.catch),sp=Object.prototype.toString,Di=t=>sp.call(t),y_=t=>Di(t).slice(8,-1),ip=t=>Di(t)==="[object Object]",Il=t=>Ke(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Zs=El(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v_=/-\w/g,jt=aa(t=>t.replace(v_,e=>e.slice(1).toUpperCase())),E_=/\B([A-Z])/g,gr=aa(t=>t.replace(E_,"-$1").toLowerCase()),ca=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=aa(t=>t?`on${ca(t)}`:""),Xn=(t,e)=>!Object.is(t,e),mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},op=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ko=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ch;const Ni=()=>Ch||(Ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ke(r)?A_(r):la(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ke(t)||Me(t))return t}const w_=/;(?![^(]*\))/g,T_=/:([^]+)/,I_=/\/\*[^]*?\*\//g;function A_(t){const e={};return t.replace(I_,"").split(w_).forEach(n=>{if(n){const r=n.split(T_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function _t(t){let e="";if(Ke(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=_t(t[n]);r&&(e+=r+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const C_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b_=El(C_);function ap(t){return!!t||t===""}function S_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Oi(t[r],e[r]);return n}function Oi(t,e){if(t===e)return!0;let n=Ah(t),r=Ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=dn(t),r=dn(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?S_(t,e):!1;if(n=Me(t),r=Me(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Oi(t[o],e[o]))return!1}}return String(t)===String(e)}function Al(t,e){return t.findIndex(n=>Oi(n,e))}const cp=t=>!!(t&&t.__v_isRef===!0),Rr=t=>Ke(t)?t:t==null?"":oe(t)||Me(t)&&(t.toString===sp||!ue(t.toString))?cp(t)?Rr(t.value):JSON.stringify(t,lp,2):String(t),lp=(t,e)=>cp(e)?lp(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:ws(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:dn(e)?nc(e):Me(e)&&!oe(e)&&!ip(e)?String(e):e,nc=(t,e="")=>{var n;return dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dt;class R_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Dt,!e&&Dt&&(this.index=(Dt.scopes||(Dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Dt;try{return Dt=this,e()}finally{Dt=n}}}on(){++this._on===1&&(this.prevScope=Dt,Dt=this)}off(){this._on>0&&--this._on===0&&(Dt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function P_(){return Dt}let Ne;const rc=new WeakSet;class up{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Dt&&Dt.active&&Dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||fp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bh(this),dp(this);const e=Ne,n=Qt;Ne=this,Qt=!0;try{return this.fn()}finally{pp(this),Ne=e,Qt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Sl(e);this.deps=this.depsTail=void 0,bh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rc(this)&&this.run()}get dirty(){return Rc(this)}}let hp=0,ei,ti;function fp(t,e=!1){if(t.flags|=8,e){t.next=ti,ti=t;return}t.next=ei,ei=t}function Cl(){hp++}function bl(){if(--hp>0)return;if(ti){let e=ti;for(ti=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ei;){let e=ei;for(ei=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function dp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function pp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Sl(r),V_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===mi)||(t.globalVersion=mi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Rc(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Qt;Ne=t,Qt=!0;try{dp(t);const s=t.fn(t._value);(e.version===0||Xn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Qt=r,pp(t),t.flags&=-3}}function Sl(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Sl(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function V_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Qt=!0;const mp=[];function bn(){mp.push(Qt),Qt=!1}function Sn(){const t=mp.pop();Qt=t===void 0?!0:t}function bh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let mi=0;class k_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ne||!Qt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new k_(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,_p(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,mi++,this.notify(e)}notify(e){Cl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bl()}}}function _p(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)_p(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,Pr=Symbol(""),Vc=Symbol(""),_i=Symbol("");function vt(t,e,n){if(Qt&&Ne){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Rl),s.map=r,s.key=n),s.track()}}function wn(t,e,n,r,s,i){const o=Pc.get(t);if(!o){mi++;return}const c=l=>{l&&l.trigger()};if(Cl(),e==="clear")o.forEach(c);else{const l=oe(t),h=l&&Il(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===_i||!dn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(_i)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Pr)),Xr(t)&&c(o.get(Vc)));break;case"delete":l||(c(o.get(Pr)),Xr(t)&&c(o.get(Vc)));break;case"set":Xr(t)&&c(o.get(Pr));break}}bl()}function Hr(t){const e=Ce(t);return e===t?e:(vt(e,"iterate",_i),Bt(t)?e:e.map(ht))}function ua(t){return vt(t=Ce(t),"iterate",_i),t}const D_={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,ht)},concat(...t){return Hr(this).concat(...t.map(e=>oe(e)?Hr(e):e))},entries(){return sc(this,"entries",t=>(t[1]=ht(t[1]),t))},every(t,e){return yn(this,"every",t,e,void 0,arguments)},filter(t,e){return yn(this,"filter",t,e,n=>n.map(ht),arguments)},find(t,e){return yn(this,"find",t,e,ht,arguments)},findIndex(t,e){return yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return yn(this,"findLast",t,e,ht,arguments)},findLastIndex(t,e){return yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return yn(this,"map",t,e,void 0,arguments)},pop(){return zs(this,"pop")},push(...t){return zs(this,"push",t)},reduce(t,...e){return Sh(this,"reduce",t,e)},reduceRight(t,...e){return Sh(this,"reduceRight",t,e)},shift(){return zs(this,"shift")},some(t,e){return yn(this,"some",t,e,void 0,arguments)},splice(...t){return zs(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return zs(this,"unshift",t)},values(){return sc(this,"values",ht)}};function sc(t,e,n){const r=ua(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const N_=Array.prototype;function yn(t,e,n,r,s,i){const o=ua(t),c=o!==t&&!Bt(t),l=o[e];if(l!==N_[e]){const p=l.apply(t,i);return c?ht(p):p}let h=n;o!==t&&(c?h=function(p,g){return n.call(this,ht(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Sh(t,e,n,r){const s=ua(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,ht(c),l,t)}),s[e](i,...r)}function ic(t,e,n){const r=Ce(t);vt(r,"iterate",_i);const s=r[e](...n);return(s===-1||s===!1)&&kl(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function zs(t,e,n=[]){bn(),Cl();const r=Ce(t)[e].apply(t,n);return bl(),Sn(),r}const O_=El("__proto__,__v_isRef,__isVue"),yp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(dn));function M_(t){dn(t)||(t=String(t));const e=Ce(this);return vt(e,"has",t),e.hasOwnProperty(t)}class vp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?z_:Ip:i?Tp:wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=D_[n]))return l;if(n==="hasOwnProperty")return M_}const c=Reflect.get(e,n,It(e)?e:r);return(dn(n)?yp.has(n):O_(n))||(s||vt(e,"get",n),i)?c:It(c)?o&&Il(n)?c:c.value:Me(c)?s?Cp(c):ha(c):c}}class Ep extends vp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ir(i);if(!Bt(r)&&!ir(r)&&(i=Ce(i),r=Ce(r)),!oe(e)&&It(i)&&!It(r))return l||(i.value=r),!0}const o=oe(e)&&Il(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,It(e)?e:s);return e===Ce(s)&&(o?Xn(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!dn(n)||!yp.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",oe(e)?"length":Pr),Reflect.ownKeys(e)}}class L_ extends vp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const x_=new Ep,F_=new L_,U_=new Ep(!0);const kc=t=>t,no=t=>Reflect.getPrototypeOf(t);function $_(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Xr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?kc:e?Do:ht;return!e&&vt(i,"iterate",l?Vc:Pr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function B_(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(Xn(s,c)&&vt(o,"get",s),vt(o,"get",c));const{has:l}=no(o),h=e?kc:t?Do:ht;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&vt(Ce(s),"iterate",Pr),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(Xn(s,c)&&vt(o,"has",s),vt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),h=e?kc:t?Do:ht;return!t&&vt(l,"iterate",Pr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return it(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(s){!e&&!Bt(s)&&!ir(s)&&(s=Ce(s));const i=Ce(this);return no(i).has.call(i,s)||(i.add(s),wn(i,"add",s,s)),this},set(s,i){!e&&!Bt(i)&&!ir(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=no(o);let h=c.call(o,s);h||(s=Ce(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?Xn(i,f)&&wn(o,"set",s,i):wn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=no(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&wn(i,"delete",s,void 0),h},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&wn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$_(s,t,e)}),n}function Pl(t,e){const n=B_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const H_={get:Pl(!1,!1)},j_={get:Pl(!1,!0)},q_={get:Pl(!0,!1)};const wp=new WeakMap,Tp=new WeakMap,Ip=new WeakMap,z_=new WeakMap;function G_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function K_(t){return t.__v_skip||!Object.isExtensible(t)?0:G_(y_(t))}function ha(t){return ir(t)?t:Vl(t,!1,x_,H_,wp)}function Ap(t){return Vl(t,!1,U_,j_,Tp)}function Cp(t){return Vl(t,!0,F_,q_,Ip)}function Vl(t,e,n,r,s){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=K_(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function Zr(t){return ir(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function kl(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function W_(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&op(t,"__v_skip",!0),t}const ht=t=>Me(t)?ha(t):t,Do=t=>Me(t)?Cp(t):t;function It(t){return t?t.__v_isRef===!0:!1}function lt(t){return bp(t,!1)}function Q_(t){return bp(t,!0)}function bp(t,e){return It(t)?t:new Y_(t,e)}class Y_{constructor(e,n){this.dep=new Rl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||ir(e);e=r?e:Ce(e),Xn(e,n)&&(this._rawValue=e,this._value=r?e:ht(e),this.dep.trigger())}}function ve(t){return It(t)?t.value:t}const J_={get:(t,e,n)=>e==="__v_raw"?t:ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Sp(t){return Zr(t)?t:new Proxy(t,J_)}class X_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Rl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=mi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return fp(this,!0),!0}get value(){const e=this.dep.track();return gp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Z_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new X_(r,s,n)}const so={},No=new WeakMap;let Cr;function ey(t,e=!1,n=Cr){if(n){let r=No.get(n);r||No.set(n,r=[]),r.push(t)}}function ty(t,e,n=ke){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=$=>s?$:Bt($)||s===!1||s===0?Tn($,1):Tn($);let f,p,g,_,P=!1,D=!1;if(It(t)?(p=()=>t.value,P=Bt(t)):Zr(t)?(p=()=>h(t),P=!0):oe(t)?(D=!0,P=t.some($=>Zr($)||Bt($)),p=()=>t.map($=>{if(It($))return $.value;if(Zr($))return h($);if(ue($))return l?l($,2):$()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){bn();try{g()}finally{Sn()}}const $=Cr;Cr=f;try{return l?l(t,3,[_]):t(_)}finally{Cr=$}}:p=Wt,e&&s){const $=p,Z=s===!0?1/0:s;p=()=>Tn($(),Z)}const R=P_(),O=()=>{f.stop(),R&&R.active&&Tl(R.effects,f)};if(i&&e){const $=e;e=(...Z)=>{$(...Z),O()}}let N=D?new Array(t.length).fill(so):so;const x=$=>{if(!(!(f.flags&1)||!f.dirty&&!$))if(e){const Z=f.run();if(s||P||(D?Z.some((re,A)=>Xn(re,N[A])):Xn(Z,N))){g&&g();const re=Cr;Cr=f;try{const A=[Z,N===so?void 0:D&&N[0]===so?[]:N,_];N=Z,l?l(e,3,A):e(...A)}finally{Cr=re}}}else f.run()};return c&&c(x),f=new up(p),f.scheduler=o?()=>o(x,!1):x,_=$=>ey($,!1,f),g=f.onStop=()=>{const $=No.get(f);if($){if(l)l($,4);else for(const Z of $)Z();No.delete(f)}},e?r?x(!0):N=f.run():o?o(x.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function Tn(t,e=1/0,n){if(e<=0||!Me(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,It(t))Tn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(ws(t)||Xr(t))t.forEach(r=>{Tn(r,e,n)});else if(ip(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,r){try{return r?t(...r):t()}catch(s){fa(s,e,n)}}function pn(t,e,n,r){if(ue(t)){const s=Mi(t,e,n,r);return s&&rp(s)&&s.catch(i=>{fa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(pn(t[i],e,n,r));return s}}function fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ke;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){bn(),Mi(i,null,10,[t,l,h]),Sn();return}}ny(t,n,s,r,o)}function ny(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let nn=-1;const es=[];let Hn=null,qr=0;const Rp=Promise.resolve();let Oo=null;function Dl(t){const e=Oo||Rp;return t?e.then(this?t.bind(this):t):e}function ry(t){let e=nn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=yi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Nl(t){if(!(t.flags&1)){const e=yi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=yi(n)?Pt.push(t):Pt.splice(ry(e),0,t),t.flags|=1,Pp()}}function Pp(){Oo||(Oo=Rp.then(kp))}function sy(t){oe(t)?es.push(...t):Hn&&t.id===-1?Hn.splice(qr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),Pp()}function Rh(t,e,n=nn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Vp(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>yi(n)-yi(r));if(es.length=0,Hn){Hn.push(...e);return}for(Hn=e,qr=0;qr<Hn.length;qr++){const n=Hn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Hn=null,qr=0}}const yi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function kp(t){const e=Wt;try{for(nn=0;nn<Pt.length;nn++){const n=Pt[nn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Mi(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;nn<Pt.length;nn++){const n=Pt[nn];n&&(n.flags&=-2)}nn=-1,Pt.length=0,Vp(),Oo=null,(Pt.length||es.length)&&kp()}}let xt=null,Dp=null;function Mo(t){const e=xt;return xt=t,Dp=t&&t.type.__scopeId||null,e}function iy(t,e=xt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Fo(-1);const i=Mo(e);let o;try{o=t(...s)}finally{Mo(i),r._d&&Fo(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function VS(t,e){if(xt===null)return t;const n=ma(xt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=ke]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(bn(),pn(l,n,8,[t.el,c,t,e]),Sn())}}const Np=Symbol("_vte"),oy=t=>t.__isTeleport,ni=t=>t&&(t.disabled||t.disabled===""),Ph=t=>t&&(t.defer||t.defer===""),Vh=t=>typeof SVGElement<"u"&&t instanceof SVGElement,kh=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Dc=(t,e)=>{const n=t&&t.to;return Ke(n)?e?e(n):null:n},Op={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,h){const{mc:f,pc:p,pbc:g,o:{insert:_,querySelector:P,createText:D,createComment:R}}=h,O=ni(e.props);let{shapeFlag:N,children:x,dynamicChildren:$}=e;if(t==null){const Z=e.el=D(""),re=e.anchor=D("");_(Z,n,r),_(re,n,r);const A=(E,I)=>{N&16&&(s&&s.isCE&&(s.ce._teleportTarget=E),f(x,E,I,s,i,o,c,l))},v=()=>{const E=e.target=Dc(e.props,P),I=Mp(E,e,D,_);E&&(o!=="svg"&&Vh(E)?o="svg":o!=="mathml"&&kh(E)&&(o="mathml"),O||(A(E,I),_o(e,!1)))};O&&(A(n,re),_o(e,!0)),Ph(e.props)?(e.el.__isMounted=!1,Rt(()=>{v(),delete e.el.__isMounted},i)):v()}else{if(Ph(e.props)&&t.el.__isMounted===!1){Rt(()=>{Op.process(t,e,n,r,s,i,o,c,l,h)},i);return}e.el=t.el,e.targetStart=t.targetStart;const Z=e.anchor=t.anchor,re=e.target=t.target,A=e.targetAnchor=t.targetAnchor,v=ni(t.props),E=v?n:re,I=v?Z:A;if(o==="svg"||Vh(re)?o="svg":(o==="mathml"||kh(re))&&(o="mathml"),$?(g(t.dynamicChildren,$,E,s,i,o,c),Ul(t,e,!0)):l||p(t,e,E,I,s,i,o,c,!1),O)v?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):io(e,n,Z,h,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const C=e.target=Dc(e.props,P);C&&io(e,C,null,h,0)}else v&&io(e,re,A,h,1);_o(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:h,targetAnchor:f,target:p,props:g}=t;if(p&&(s(h),s(f)),i&&s(l),o&16){const _=i||!ni(g);for(let P=0;P<c.length;P++){const D=c[P];r(D,e,n,_,!!D.dynamicChildren)}}},move:io,hydrate:ay};function io(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:h,props:f}=t,p=i===2;if(p&&r(o,e,n),(!p||ni(f))&&l&16)for(let g=0;g<h.length;g++)s(h[g],e,n,2);p&&r(c,e,n)}function ay(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:h,createText:f}},p){function g(D,R,O,N){R.anchor=p(o(D),R,c(D),n,r,s,i),R.targetStart=O,R.targetAnchor=N}const _=e.target=Dc(e.props,l),P=ni(e.props);if(_){const D=_._lpa||_.firstChild;if(e.shapeFlag&16)if(P)g(t,e,D,D&&o(D));else{e.anchor=o(t);let R=D;for(;R;){if(R&&R.nodeType===8){if(R.data==="teleport start anchor")e.targetStart=R;else if(R.data==="teleport anchor"){e.targetAnchor=R,_._lpa=e.targetAnchor&&o(e.targetAnchor);break}}R=o(R)}e.targetAnchor||Mp(_,e,f,h),p(D&&o(D),e,_,n,r,s,i)}_o(e,P)}else P&&e.shapeFlag&16&&g(t,e,t,o(t));return e.anchor&&o(e.anchor)}const kS=Op;function _o(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Mp(t,e,n,r){const s=e.targetStart=n(""),i=e.targetAnchor=n("");return s[Np]=i,t&&(r(s,t),r(i,t)),i}const cy=Symbol("_leaveCb");function Ol(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ol(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ml(t,e){return ue(t)?(()=>it({name:t.name},e,{setup:t}))():t}function Lp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Lo=new WeakMap;function ri(t,e,n,r,s=!1){if(oe(t)){t.forEach((P,D)=>ri(P,e&&(oe(e)?e[D]:e),n,r,s));return}if(si(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ri(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===ke?c.refs={}:c.refs,p=c.setupState,g=Ce(p),_=p===ke?np:P=>be(g,P);if(h!=null&&h!==l){if(Dh(e),Ke(h))f[h]=null,_(h)&&(p[h]=null);else if(It(h)){h.value=null;const P=e;P.k&&(f[P.k]=null)}}if(ue(l))Mi(l,c,12,[o,f]);else{const P=Ke(l),D=It(l);if(P||D){const R=()=>{if(t.f){const O=P?_(l)?p[l]:f[l]:l.value;if(s)oe(O)&&Tl(O,i);else if(oe(O))O.includes(i)||O.push(i);else if(P)f[l]=[i],_(l)&&(p[l]=f[l]);else{const N=[i];l.value=N,t.k&&(f[t.k]=N)}}else P?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const O=()=>{R(),Lo.delete(t)};O.id=-1,Lo.set(t,O),Rt(O,n)}else Dh(t),R()}}}function Dh(t){const e=Lo.get(t);e&&(e.flags|=8,Lo.delete(t))}Ni().requestIdleCallback;Ni().cancelIdleCallback;const si=t=>!!t.type.__asyncLoader,xp=t=>t.type.__isKeepAlive;function ly(t,e){Fp(t,"a",e)}function uy(t,e){Fp(t,"da",e)}function Fp(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)xp(s.parent.vnode)&&hy(r,e,n,s),s=s.parent}}function hy(t,e,n,r){const s=da(e,t,r,!0);$p(()=>{Tl(r[e],s)},n)}function da(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{bn();const c=Li(n),l=pn(e,n,t,o);return c(),Sn(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=wt)=>{(!Ei||t==="sp")&&da(t,(...r)=>e(...r),n)},fy=Dn("bm"),Up=Dn("m"),dy=Dn("bu"),py=Dn("u"),gy=Dn("bum"),$p=Dn("um"),my=Dn("sp"),_y=Dn("rtg"),yy=Dn("rtc");function vy(t,e=wt){da("ec",t,e)}const Bp="components";function Ey(t,e){return Ty(Bp,t,!0,e)||t}const wy=Symbol.for("v-ndc");function Ty(t,e,n=!0,r=!1){const s=xt||wt;if(s){const i=s.type;if(t===Bp){const c=h0(i,!1);if(c&&(c===e||c===jt(e)||c===ca(jt(e))))return i}const o=Nh(s[t]||i[t],e)||Nh(s.appContext[t],e);return!o&&r?i:o}}function Nh(t,e){return t&&(t[e]||t[jt(e)]||t[ca(jt(e))])}function DS(t,e,n,r){let s;const i=n&&n[r],o=oe(t);if(o||Ke(t)){const c=o&&Zr(t);let l=!1,h=!1;c&&(l=!Bt(t),h=ir(t),t=ua(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?Do(ht(t[f])):ht(t[f]):t[f],f,void 0,i&&i[f])}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(Me(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i&&i[l]));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const Nc=t=>t?og(t)?ma(t):Nc(t.parent):null,ii=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Nc(t.parent),$root:t=>Nc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Ll(t),$forceUpdate:t=>t.f||(t.f=()=>{Nl(t.update)}),$nextTick:t=>t.n||(t.n=Dl.bind(t.proxy)),$watch:t=>qy.bind(t)}),oc=(t,e)=>t!==ke&&!t.__isScriptSetup&&be(t,e),Iy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oc(r,e))return o[e]=1,r[e];if(s!==ke&&be(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&be(h,e))return o[e]=3,i[e];if(n!==ke&&be(n,e))return o[e]=4,n[e];Oc&&(o[e]=0)}}const f=ii[e];let p,g;if(f)return e==="$attrs"&&vt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==ke&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oc(s,e)?(s[e]=n,!0):r!==ke&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,h;return!!(n[c]||t!==ke&&c[0]!=="$"&&be(t,c)||oc(e,c)||(l=i[0])&&be(l,c)||be(r,c)||be(ii,c)||be(s.config.globalProperties,c)||(h=o.__cssModules)&&h[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Oh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Oc=!0;function Ay(t){const e=Ll(t),n=t.proxy,r=t.ctx;Oc=!1,e.beforeCreate&&Mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:P,activated:D,deactivated:R,beforeDestroy:O,beforeUnmount:N,destroyed:x,unmounted:$,render:Z,renderTracked:re,renderTriggered:A,errorCaptured:v,serverPrefetch:E,expose:I,inheritAttrs:C,components:b,directives:w,filters:$e}=e;if(h&&Cy(h,r,null),o)for(const Ie in o){const pe=o[Ie];ue(pe)&&(r[Ie]=pe.bind(n))}if(s){const Ie=s.call(n,n);Me(Ie)&&(t.data=ha(Ie))}if(Oc=!0,i)for(const Ie in i){const pe=i[Ie],Vt=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):Wt,Xt=!ue(pe)&&ue(pe.set)?pe.set.bind(n):Wt,Mt=Te({get:Vt,set:Xt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:at=>Mt.value=at})}if(c)for(const Ie in c)Hp(c[Ie],r,n,Ie);if(l){const Ie=ue(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(pe=>{yo(pe,Ie[pe])})}f&&Mh(f,t,"c");function Fe(Ie,pe){oe(pe)?pe.forEach(Vt=>Ie(Vt.bind(n))):pe&&Ie(pe.bind(n))}if(Fe(fy,p),Fe(Up,g),Fe(dy,_),Fe(py,P),Fe(ly,D),Fe(uy,R),Fe(vy,v),Fe(yy,re),Fe(_y,A),Fe(gy,N),Fe($p,$),Fe(my,E),oe(I))if(I.length){const Ie=t.exposed||(t.exposed={});I.forEach(pe=>{Object.defineProperty(Ie,pe,{get:()=>n[pe],set:Vt=>n[pe]=Vt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===Wt&&(t.render=Z),C!=null&&(t.inheritAttrs=C),b&&(t.components=b),w&&(t.directives=w),E&&Lp(t)}function Cy(t,e,n=Wt){oe(t)&&(t=Mc(t));for(const r in t){const s=t[r];let i;Me(s)?"default"in s?i=Ht(s.from||r,s.default,!0):i=Ht(s.from||r):i=Ht(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Mh(t,e,n){pn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hp(t,e,n,r){let s=r.includes(".")?eg(n,r):()=>n[r];if(Ke(t)){const i=e[t];ue(i)&&oi(s,i)}else if(ue(t))oi(s,t.bind(n));else if(Me(t))if(oe(t))t.forEach(i=>Hp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&oi(s,i,t)}}function Ll(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>xo(l,h,o,!0)),xo(l,e,o)),Me(e)&&i.set(e,l),l}function xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xo(t,i,n,!0),s&&s.forEach(o=>xo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=by[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const by={data:Lh,props:xh,emits:xh,methods:Ws,computed:Ws,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Ws,directives:Ws,watch:Ry,provide:Lh,inject:Sy};function Lh(t,e){return e?t?function(){return it(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function Sy(t,e){return Ws(Mc(t),Mc(e))}function Mc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?it(Object.create(null),t,e):e}function xh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:it(Object.create(null),Oh(t),Oh(e!=null?e:{})):e}function Ry(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function jp(){return{app:null,config:{isNativeTag:np,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Py=0;function Vy(t,e){return function(r,s=null){ue(r)||(r=it({},r)),s!=null&&!Me(s)&&(s=null);const i=jp(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Py++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:d0,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(h,...p)):ue(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!l){const _=h._ceVNode||Re(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(_,f):t(_,f,g),l=!0,h._container=f,f.__vue_app__=h,ma(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(pn(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=ts;ts=h;try{return f()}finally{ts=p}}};return h}}let ts=null;function yo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function Ht(t,e,n=!1){const r=o0();if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const qp={},zp=()=>Object.create(qp),Gp=t=>Object.getPrototypeOf(t)===qp;function ky(t,e,n,r=!1){const s={},i=zp();t.propsDefaults=Object.create(null),Kp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ap(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Dy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(pa(t.emitsOptions,g))continue;const _=e[g];if(l)if(be(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const P=jt(g);s[P]=Lc(l,c,P,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Kp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=gr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Lc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p)&&!0)&&(delete i[p],h=!0)}h&&wn(t.attrs,"set","")}function Kp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Zs(l))continue;const h=e[l];let f;s&&be(s,f=jt(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:pa(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ce(n),h=c||ke;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Lc(s,l,p,h[p],t,!be(h,p))}}return o}function Lc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Li(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===gr(n))&&(r=!0))}return r}const Ny=new WeakMap;function Wp(t,e,n=!1){const r=n?Ny:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,_]=Wp(p,e,!0);it(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Me(t)&&r.set(t,Jr),Jr;if(oe(i))for(let f=0;f<i.length;f++){const p=jt(i[f]);Fh(p)&&(o[p]=ke)}else if(i)for(const f in i){const p=jt(f);if(Fh(p)){const g=i[f],_=o[p]=oe(g)||ue(g)?{type:g}:it({},g),P=_.type;let D=!1,R=!0;if(oe(P))for(let O=0;O<P.length;++O){const N=P[O],x=ue(N)&&N.name;if(x==="Boolean"){D=!0;break}else x==="String"&&(R=!1)}else D=ue(P)&&P.name==="Boolean";_[0]=D,_[1]=R,(D||be(_,"default"))&&c.push(p)}}const h=[o,c];return Me(t)&&r.set(t,h),h}function Fh(t){return t[0]!=="$"&&!Zs(t)}const xl=t=>t==="_"||t==="_ctx"||t==="$stable",Fl=t=>oe(t)?t.map(sn):[sn(t)],Oy=(t,e,n)=>{if(e._n)return e;const r=iy((...s)=>Fl(e(...s)),n);return r._c=!1,r},Qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xl(s))continue;const i=t[s];if(ue(i))e[s]=Oy(s,i,r);else if(i!=null){const o=Fl(i);e[s]=()=>o}}},Yp=(t,e)=>{const n=Fl(e);t.slots.default=()=>n},Jp=(t,e,n)=>{for(const r in e)(n||!xl(r))&&(t[r]=e[r])},My=(t,e,n)=>{const r=t.slots=zp();if(t.vnode.shapeFlag&32){const s=e._;s?(Jp(r,e,n),n&&op(r,"_",s,!0)):Qp(e,r)}else e&&Yp(t,e)},Ly=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ke;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Jp(s,e,n):(i=!e.$stable,Qp(e,s)),o=e}else e&&(Yp(t,e),o={default:1});if(i)for(const c in s)!xl(c)&&o[c]==null&&delete s[c]};function xy(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Ni().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Rt=Xy;function Fy(t){return Uy(t)}function Uy(t,e){xy();const n=Ni();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Wt,insertStaticContent:P}=t,D=(y,T,V,B=null,M=null,U=null,K=void 0,z=null,j=!!T.dynamicChildren)=>{if(y===T)return;y&&!Gs(y,T)&&(B=L(y),at(y,M,U,!0),y=null),T.patchFlag===-2&&(j=!1,T.dynamicChildren=null);const{type:q,ref:se,shapeFlag:Q}=T;switch(q){case ga:R(y,T,V,B);break;case or:O(y,T,V,B);break;case vo:y==null&&N(T,V,B,K);break;case Gt:b(y,T,V,B,M,U,K,z,j);break;default:Q&1?Z(y,T,V,B,M,U,K,z,j):Q&6?w(y,T,V,B,M,U,K,z,j):(Q&64||Q&128)&&q.process(y,T,V,B,M,U,K,z,j,ee)}se!=null&&M?ri(se,y&&y.ref,U,T||y,!T):se==null&&y&&y.ref!=null&&ri(y.ref,null,U,y,!0)},R=(y,T,V,B)=>{if(y==null)r(T.el=c(T.children),V,B);else{const M=T.el=y.el;T.children!==y.children&&h(M,T.children)}},O=(y,T,V,B)=>{y==null?r(T.el=l(T.children||""),V,B):T.el=y.el},N=(y,T,V,B)=>{[y.el,y.anchor]=P(y.children,T,V,B,y.el,y.anchor)},x=({el:y,anchor:T},V,B)=>{let M;for(;y&&y!==T;)M=g(y),r(y,V,B),y=M;r(T,V,B)},$=({el:y,anchor:T})=>{let V;for(;y&&y!==T;)V=g(y),s(y),y=V;s(T)},Z=(y,T,V,B,M,U,K,z,j)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),y==null?re(T,V,B,M,U,K,z,j):E(y,T,M,U,K,z,j)},re=(y,T,V,B,M,U,K,z)=>{let j,q;const{props:se,shapeFlag:Q,transition:te,dirs:ie}=y;if(j=y.el=o(y.type,U,se&&se.is,se),Q&8?f(j,y.children):Q&16&&v(y.children,j,null,B,M,ac(y,U),K,z),ie&&Ir(y,null,B,"created"),A(j,y,y.scopeId,K,B),se){for(const Se in se)Se!=="value"&&!Zs(Se)&&i(j,Se,null,se[Se],U,B);"value"in se&&i(j,"value",null,se.value,U),(q=se.onVnodeBeforeMount)&&tn(q,B,y)}ie&&Ir(y,null,B,"beforeMount");const fe=$y(M,te);fe&&te.beforeEnter(j),r(j,T,V),((q=se&&se.onVnodeMounted)||fe||ie)&&Rt(()=>{q&&tn(q,B,y),fe&&te.enter(j),ie&&Ir(y,null,B,"mounted")},M)},A=(y,T,V,B,M)=>{if(V&&_(y,V),B)for(let U=0;U<B.length;U++)_(y,B[U]);if(M){let U=M.subTree;if(T===U||ng(U.type)&&(U.ssContent===T||U.ssFallback===T)){const K=M.vnode;A(y,K,K.scopeId,K.slotScopeIds,M.parent)}}},v=(y,T,V,B,M,U,K,z,j=0)=>{for(let q=j;q<y.length;q++){const se=y[q]=z?jn(y[q]):sn(y[q]);D(null,se,T,V,B,M,U,K,z)}},E=(y,T,V,B,M,U,K)=>{const z=T.el=y.el;let{patchFlag:j,dynamicChildren:q,dirs:se}=T;j|=y.patchFlag&16;const Q=y.props||ke,te=T.props||ke;let ie;if(V&&Ar(V,!1),(ie=te.onVnodeBeforeUpdate)&&tn(ie,V,T,y),se&&Ir(T,y,V,"beforeUpdate"),V&&Ar(V,!0),(Q.innerHTML&&te.innerHTML==null||Q.textContent&&te.textContent==null)&&f(z,""),q?I(y.dynamicChildren,q,z,V,B,ac(T,M),U):K||pe(y,T,z,null,V,B,ac(T,M),U,!1),j>0){if(j&16)C(z,Q,te,V,M);else if(j&2&&Q.class!==te.class&&i(z,"class",null,te.class,M),j&4&&i(z,"style",Q.style,te.style,M),j&8){const fe=T.dynamicProps;for(let Se=0;Se<fe.length;Se++){const ye=fe[Se],pt=Q[ye],tt=te[ye];(tt!==pt||ye==="value")&&i(z,ye,pt,tt,M,V)}}j&1&&y.children!==T.children&&f(z,T.children)}else!K&&q==null&&C(z,Q,te,V,M);((ie=te.onVnodeUpdated)||se)&&Rt(()=>{ie&&tn(ie,V,T,y),se&&Ir(T,y,V,"updated")},B)},I=(y,T,V,B,M,U,K)=>{for(let z=0;z<T.length;z++){const j=y[z],q=T[z],se=j.el&&(j.type===Gt||!Gs(j,q)||j.shapeFlag&198)?p(j.el):V;D(j,q,se,null,B,M,U,K,!0)}},C=(y,T,V,B,M)=>{if(T!==V){if(T!==ke)for(const U in T)!Zs(U)&&!(U in V)&&i(y,U,T[U],null,M,B);for(const U in V){if(Zs(U))continue;const K=V[U],z=T[U];K!==z&&U!=="value"&&i(y,U,z,K,M,B)}"value"in V&&i(y,"value",T.value,V.value,M)}},b=(y,T,V,B,M,U,K,z,j)=>{const q=T.el=y?y.el:c(""),se=T.anchor=y?y.anchor:c("");let{patchFlag:Q,dynamicChildren:te,slotScopeIds:ie}=T;ie&&(z=z?z.concat(ie):ie),y==null?(r(q,V,B),r(se,V,B),v(T.children||[],V,se,M,U,K,z,j)):Q>0&&Q&64&&te&&y.dynamicChildren?(I(y.dynamicChildren,te,V,M,U,K,z),(T.key!=null||M&&T===M.subTree)&&Ul(y,T,!0)):pe(y,T,V,se,M,U,K,z,j)},w=(y,T,V,B,M,U,K,z,j)=>{T.slotScopeIds=z,y==null?T.shapeFlag&512?M.ctx.activate(T,V,B,K,j):$e(T,V,B,M,U,K,j):ot(y,T,j)},$e=(y,T,V,B,M,U,K)=>{const z=y.component=i0(y,B,M);if(xp(y)&&(z.ctx.renderer=ee),a0(z,!1,K),z.asyncDep){if(M&&M.registerDep(z,Fe,K),!y.el){const j=z.subTree=Re(or);O(null,j,T,V),y.placeholder=j.el}}else Fe(z,y,T,V,M,U,K)},ot=(y,T,V)=>{const B=T.component=y.component;if(Yy(y,T,V))if(B.asyncDep&&!B.asyncResolved){Ie(B,T,V);return}else B.next=T,B.update();else T.el=y.el,B.vnode=T},Fe=(y,T,V,B,M,U,K)=>{const z=()=>{if(y.isMounted){let{next:Q,bu:te,u:ie,parent:fe,vnode:Se}=y;{const gt=Xp(y);if(gt){Q&&(Q.el=Se.el,Ie(y,Q,K)),gt.asyncDep.then(()=>{y.isUnmounted||z()});return}}let ye=Q,pt;Ar(y,!1),Q?(Q.el=Se.el,Ie(y,Q,K)):Q=Se,te&&mo(te),(pt=Q.props&&Q.props.onVnodeBeforeUpdate)&&tn(pt,fe,Q,Se),Ar(y,!0);const tt=cc(y),kt=y.subTree;y.subTree=tt,D(kt,tt,p(kt.el),L(kt),y,M,U),Q.el=tt.el,ye===null&&Jy(y,tt.el),ie&&Rt(ie,M),(pt=Q.props&&Q.props.onVnodeUpdated)&&Rt(()=>tn(pt,fe,Q,Se),M)}else{let Q;const{el:te,props:ie}=T,{bm:fe,m:Se,parent:ye,root:pt,type:tt}=y,kt=si(T);if(Ar(y,!1),fe&&mo(fe),!kt&&(Q=ie&&ie.onVnodeBeforeMount)&&tn(Q,ye,T),Ar(y,!0),te&&Pe){const gt=()=>{y.subTree=cc(y),Pe(te,y.subTree,y,M,null)};kt&&tt.__asyncHydrate?tt.__asyncHydrate(te,y,gt):gt()}else{pt.ce&&pt.ce._def.shadowRoot!==!1&&pt.ce._injectChildStyle(tt);const gt=y.subTree=cc(y);D(null,gt,V,B,y,M,U),T.el=gt.el}if(Se&&Rt(Se,M),!kt&&(Q=ie&&ie.onVnodeMounted)){const gt=T;Rt(()=>tn(Q,ye,gt),M)}(T.shapeFlag&256||ye&&si(ye.vnode)&&ye.vnode.shapeFlag&256)&&y.a&&Rt(y.a,M),y.isMounted=!0,T=V=B=null}};y.scope.on();const j=y.effect=new up(z);y.scope.off();const q=y.update=j.run.bind(j),se=y.job=j.runIfDirty.bind(j);se.i=y,se.id=y.uid,j.scheduler=()=>Nl(se),Ar(y,!0),q()},Ie=(y,T,V)=>{T.component=y;const B=y.vnode.props;y.vnode=T,y.next=null,Dy(y,T.props,B,V),Ly(y,T.children,V),bn(),Rh(y),Sn()},pe=(y,T,V,B,M,U,K,z,j=!1)=>{const q=y&&y.children,se=y?y.shapeFlag:0,Q=T.children,{patchFlag:te,shapeFlag:ie}=T;if(te>0){if(te&128){Xt(q,Q,V,B,M,U,K,z,j);return}else if(te&256){Vt(q,Q,V,B,M,U,K,z,j);return}}ie&8?(se&16&&dt(q,M,U),Q!==q&&f(V,Q)):se&16?ie&16?Xt(q,Q,V,B,M,U,K,z,j):dt(q,M,U,!0):(se&8&&f(V,""),ie&16&&v(Q,V,B,M,U,K,z,j))},Vt=(y,T,V,B,M,U,K,z,j)=>{y=y||Jr,T=T||Jr;const q=y.length,se=T.length,Q=Math.min(q,se);let te;for(te=0;te<Q;te++){const ie=T[te]=j?jn(T[te]):sn(T[te]);D(y[te],ie,V,null,M,U,K,z,j)}q>se?dt(y,M,U,!0,!1,Q):v(T,V,B,M,U,K,z,j,Q)},Xt=(y,T,V,B,M,U,K,z,j)=>{let q=0;const se=T.length;let Q=y.length-1,te=se-1;for(;q<=Q&&q<=te;){const ie=y[q],fe=T[q]=j?jn(T[q]):sn(T[q]);if(Gs(ie,fe))D(ie,fe,V,null,M,U,K,z,j);else break;q++}for(;q<=Q&&q<=te;){const ie=y[Q],fe=T[te]=j?jn(T[te]):sn(T[te]);if(Gs(ie,fe))D(ie,fe,V,null,M,U,K,z,j);else break;Q--,te--}if(q>Q){if(q<=te){const ie=te+1,fe=ie<se?T[ie].el:B;for(;q<=te;)D(null,T[q]=j?jn(T[q]):sn(T[q]),V,fe,M,U,K,z,j),q++}}else if(q>te)for(;q<=Q;)at(y[q],M,U,!0),q++;else{const ie=q,fe=q,Se=new Map;for(q=fe;q<=te;q++){const ct=T[q]=j?jn(T[q]):sn(T[q]);ct.key!=null&&Se.set(ct.key,q)}let ye,pt=0;const tt=te-fe+1;let kt=!1,gt=0;const zt=new Array(tt);for(q=0;q<tt;q++)zt[q]=0;for(q=ie;q<=Q;q++){const ct=y[q];if(pt>=tt){at(ct,M,U,!0);continue}let nt;if(ct.key!=null)nt=Se.get(ct.key);else for(ye=fe;ye<=te;ye++)if(zt[ye-fe]===0&&Gs(ct,T[ye])){nt=ye;break}nt===void 0?at(ct,M,U,!0):(zt[nt-fe]=q+1,nt>=gt?gt=nt:kt=!0,D(ct,T[nt],V,null,M,U,K,z,j),pt++)}const Fr=kt?By(zt):Jr;for(ye=Fr.length-1,q=tt-1;q>=0;q--){const ct=fe+q,nt=T[ct],Vs=T[ct+1],yr=ct+1<se?Vs.el||Vs.placeholder:B;zt[q]===0?D(null,nt,V,yr,M,U,K,z,j):kt&&(ye<0||q!==Fr[ye]?Mt(nt,V,yr,2):ye--)}}},Mt=(y,T,V,B,M=null)=>{const{el:U,type:K,transition:z,children:j,shapeFlag:q}=y;if(q&6){Mt(y.component.subTree,T,V,B);return}if(q&128){y.suspense.move(T,V,B);return}if(q&64){K.move(y,T,V,ee);return}if(K===Gt){r(U,T,V);for(let Q=0;Q<j.length;Q++)Mt(j[Q],T,V,B);r(y.anchor,T,V);return}if(K===vo){x(y,T,V);return}if(B!==2&&q&1&&z)if(B===0)z.beforeEnter(U),r(U,T,V),Rt(()=>z.enter(U),M);else{const{leave:Q,delayLeave:te,afterLeave:ie}=z,fe=()=>{y.ctx.isUnmounted?s(U):r(U,T,V)},Se=()=>{U._isLeaving&&U[cy](!0),Q(U,()=>{fe(),ie&&ie()})};te?te(U,fe,Se):Se()}else r(U,T,V)},at=(y,T,V,B=!1,M=!1)=>{const{type:U,props:K,ref:z,children:j,dynamicChildren:q,shapeFlag:se,patchFlag:Q,dirs:te,cacheIndex:ie}=y;if(Q===-2&&(M=!1),z!=null&&(bn(),ri(z,null,V,y,!0),Sn()),ie!=null&&(T.renderCache[ie]=void 0),se&256){T.ctx.deactivate(y);return}const fe=se&1&&te,Se=!si(y);let ye;if(Se&&(ye=K&&K.onVnodeBeforeUnmount)&&tn(ye,T,y),se&6)Nn(y.component,V,B);else{if(se&128){y.suspense.unmount(V,B);return}fe&&Ir(y,null,T,"beforeUnmount"),se&64?y.type.remove(y,T,V,ee,B):q&&!q.hasOnce&&(U!==Gt||Q>0&&Q&64)?dt(q,T,V,!1,!0):(U===Gt&&Q&384||!M&&se&16)&&dt(j,T,V),B&&_n(y)}(Se&&(ye=K&&K.onVnodeUnmounted)||fe)&&Rt(()=>{ye&&tn(ye,T,y),fe&&Ir(y,null,T,"unmounted")},V)},_n=y=>{const{type:T,el:V,anchor:B,transition:M}=y;if(T===Gt){qt(V,B);return}if(T===vo){$(y);return}const U=()=>{s(V),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:z}=M,j=()=>K(V,U);z?z(y.el,U,j):j()}else U()},qt=(y,T)=>{let V;for(;y!==T;)V=g(y),s(y),y=V;s(T)},Nn=(y,T,V)=>{const{bum:B,scope:M,job:U,subTree:K,um:z,m:j,a:q}=y;Uh(j),Uh(q),B&&mo(B),M.stop(),U&&(U.flags|=8,at(K,y,T,V)),z&&Rt(z,T),Rt(()=>{y.isUnmounted=!0},T)},dt=(y,T,V,B=!1,M=!1,U=0)=>{for(let K=U;K<y.length;K++)at(y[K],T,V,B,M)},L=y=>{if(y.shapeFlag&6)return L(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=g(y.anchor||y.el),V=T&&T[Np];return V?g(V):T};let J=!1;const W=(y,T,V)=>{y==null?T._vnode&&at(T._vnode,null,null,!0):D(T._vnode||null,y,T,null,null,null,V),T._vnode=y,J||(J=!0,Rh(),Vp(),J=!1)},ee={p:D,um:at,m:Mt,r:_n,mt:$e,mc:v,pc:pe,pbc:I,n:L,o:t};let we,Pe;return e&&([we,Pe]=e(ee)),{render:W,hydrate:we,createApp:Vy(W,we)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ar({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function $y(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ul(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=jn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Ul(o,c)),c.type===ga&&c.patchFlag!==-1&&(c.el=o.el),c.type===or&&!c.el&&(c.el=o.el)}}function By(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Xp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xp(e)}function Uh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const Hy=Symbol.for("v-scx"),jy=()=>Ht(Hy);function oi(t,e,n){return Zp(t,e,n)}function Zp(t,e,n=ke){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let h;if(Ei){if(i==="sync"){const _=jy();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Wt,_.resume=Wt,_.pause=Wt,_}}const f=wt;c.call=(_,P,D)=>pn(_,f,P,D);let p=!1;i==="post"?c.scheduler=_=>{Rt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,P)=>{P?_():Nl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=ty(t,e,c);return Ei&&(h?h.push(g):l&&g()),g}function qy(t,e,n){const r=this.proxy,s=Ke(t)?t.includes(".")?eg(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Li(this),c=Zp(s,i.bind(r),n);return o(),c}function eg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const zy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${gr(e)}Modifiers`];function Gy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ke;let s=n;const i=e.startsWith("update:"),o=i&&zy(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ke(f)?f.trim():f)),o.number&&(s=n.map(ko)));let c,l=r[c=tc(e)]||r[c=tc(jt(e))];!l&&i&&(l=r[c=tc(gr(e))]),l&&pn(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,pn(h,t,6,s)}}const Ky=new WeakMap;function tg(t,e,n=!1){const r=n?Ky:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=h=>{const f=tg(h,e,!0);f&&(c=!0,it(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Me(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):it(o,i),Me(t)&&r.set(t,o),o)}function pa(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,gr(e))||be(t,e))}function cc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:P,inheritAttrs:D}=t,R=Mo(t);let O,N;try{if(n.shapeFlag&4){const $=s||r,Z=$;O=sn(h.call(Z,$,f,p,_,g,P)),N=c}else{const $=e;O=sn($.length>1?$(p,{attrs:c,slots:o,emit:l}):$(p,null)),N=e.props?c:Wy(c)}}catch($){ai.length=0,fa($,t,1),O=Re(or)}let x=O;if(N&&D!==!1){const $=Object.keys(N),{shapeFlag:Z}=x;$.length&&Z&7&&(i&&$.some(wl)&&(N=Qy(N,i)),x=cs(x,N,!1,!0))}return n.dirs&&(x=cs(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Ol(x,n.transition),O=x,Mo(R),O}const Wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Qy=(t,e)=>{const n={};for(const r in t)(!wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Yy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?$h(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!pa(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?$h(r,o,h):!0:!!o;return!1}function $h(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function Jy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ng=t=>t.__isSuspense;function Xy(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):sy(t)}const Gt=Symbol.for("v-fgt"),ga=Symbol.for("v-txt"),or=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),ai=[];let Ft=null;function qe(t=!1){ai.push(Ft=t?null:[])}function Zy(){ai.pop(),Ft=ai[ai.length-1]||null}let vi=1;function Fo(t,e=!1){vi+=t,t<0&&Ft&&e&&(Ft.hasOnce=!0)}function rg(t){return t.dynamicChildren=vi>0?Ft||Jr:null,Zy(),vi>0&&Ft&&Ft.push(t),t}function Xe(t,e,n,r,s,i){return rg(je(t,e,n,r,s,i,!0))}function $l(t,e,n,r,s){return rg(Re(t,e,n,r,s,!0))}function Uo(t){return t?t.__v_isVNode===!0:!1}function Gs(t,e){return t.type===e.type&&t.key===e.key}const sg=({key:t})=>t!=null?t:null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ke(t)||It(t)||ue(t)?{i:xt,r:t,k:e,f:!!n}:t:null);function je(t,e=null,n=null,r=0,s=null,i=t===Gt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sg(e),ref:e&&Eo(e),scopeId:Dp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xt};return c?(Bl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ke(n)?8:16),vi>0&&!o&&Ft&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ft.push(l),l}const Re=e0;function e0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wy)&&(t=or),Uo(t)){const c=cs(t,e,!0);return n&&Bl(c,n),vi>0&&!i&&Ft&&(c.shapeFlag&6?Ft[Ft.indexOf(t)]=c:Ft.push(c)),c.patchFlag=-2,c}if(f0(t)&&(t=t.__vccOpts),e){e=t0(e);let{class:c,style:l}=e;c&&!Ke(c)&&(e.class=_t(c)),Me(l)&&(kl(l)&&!oe(l)&&(l=it({},l)),e.style=la(l))}const o=Ke(t)?1:ng(t)?128:oy(t)?64:Me(t)?4:ue(t)?2:0;return je(t,e,n,r,s,o,i,!0)}function t0(t){return t?kl(t)||Gp(t)?it({},t):t:null}function cs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?n0(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&sg(h),ref:e&&e.ref?n&&i?oe(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&cs(t.ssContent),ssFallback:t.ssFallback&&cs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ol(f,l.clone(f)),f}function xc(t=" ",e=0){return Re(ga,null,t,e)}function ig(t,e){const n=Re(vo,null,t);return n.staticCount=e,n}function Fc(t="",e=!1){return e?(qe(),$l(or,null,t)):Re(or,null,t)}function sn(t){return t==null||typeof t=="boolean"?Re(or):oe(t)?Re(Gt,null,t.slice()):Uo(t)?jn(t):Re(ga,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:cs(t)}function Bl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Bl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gp(e)?e._ctx=xt:s===3&&xt&&(xt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:xt},n=32):(e=String(e),r&64?(n=16,e=[xc(e)]):n=8);t.children=e,t.shapeFlag|=n}function n0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=_t([e.class,r.class]));else if(s==="style")e.style=la([e.style,r.style]);else if(oa(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){pn(t,e,7,[n,r])}const r0=jp();let s0=0;function i0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||r0,i={uid:s0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new R_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wp(r,s),emitsOptions:tg(r,s),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Gy.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const o0=()=>wt||xt;let $o,Uc;{const t=Ni(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};$o=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),Uc=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const Li=t=>{const e=wt;return $o(t),t.scope.on(),()=>{t.scope.off(),$o(e)}},Bh=()=>{wt&&wt.scope.off(),$o(null)};function og(t){return t.vnode.shapeFlag&4}let Ei=!1;function a0(t,e=!1,n=!1){e&&Uc(e);const{props:r,children:s}=t.vnode,i=og(t);ky(t,r,i,e),My(t,s,n||e);const o=i?c0(t,e):void 0;return e&&Uc(!1),o}function c0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Iy);const{setup:r}=n;if(r){bn();const s=t.setupContext=r.length>1?u0(t):null,i=Li(t),o=Mi(r,t,0,[t.props,s]),c=rp(o);if(Sn(),i(),(c||t.sp)&&!si(t)&&Lp(t),c){if(o.then(Bh,Bh),e)return o.then(l=>{Hh(t,l,e)}).catch(l=>{fa(l,t,0)});t.asyncDep=o}else Hh(t,o,e)}else ag(t,e)}function Hh(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=Sp(e)),ag(t,n)}let jh;function ag(t,e,n){const r=t.type;if(!t.render){if(!e&&jh&&!r.render){const s=r.template||Ll(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=it(it({isCustomElement:i,delimiters:c},o),l);r.render=jh(s,h)}}t.render=r.render||Wt}{const s=Li(t);bn();try{Ay(t)}finally{Sn(),s()}}}const l0={get(t,e){return vt(t,"get",""),t[e]}};function u0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,l0),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sp(W_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ii)return ii[n](t)},has(e,n){return n in e||n in ii}})):t.proxy}function h0(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function f0(t){return ue(t)&&"__vccOpts"in t}const Te=(t,e)=>Z_(t,e,Ei);function cg(t,e,n){const r=(i,o,c)=>{Fo(-1);try{return Re(i,o,c)}finally{Fo(1)}},s=arguments.length;return s===2?Me(e)&&!oe(e)?Uo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Uo(n)&&(n=[n]),r(t,e,n))}const d0="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $c;const qh=typeof window<"u"&&window.trustedTypes;if(qh)try{$c=qh.createPolicy("vue",{createHTML:t=>t})}catch{}const lg=$c?t=>$c.createHTML(t):t=>t,p0="http://www.w3.org/2000/svg",g0="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,zh=En&&En.createElement("template"),m0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(p0,t):e==="mathml"?En.createElementNS(g0,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zh.innerHTML=lg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=zh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_0=Symbol("_vtc");function y0(t,e,n){const r=t[_0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gh=Symbol("_vod"),v0=Symbol("_vsh"),E0=Symbol(""),w0=/(?:^|;)\s*display\s*:/;function T0(t,e,n){const r=t.style,s=Ke(n);let i=!1;if(n&&!s){if(e)if(Ke(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&wo(r,c,"")}else for(const o in e)n[o]==null&&wo(r,o,"");for(const o in n)o==="display"&&(i=!0),wo(r,o,n[o])}else if(s){if(e!==n){const o=r[E0];o&&(n+=";"+o),r.cssText=n,i=w0.test(n)}}else e&&t.removeAttribute("style");Gh in t&&(t[Gh]=i?r.display:"",t[v0]&&(r.display="none"))}const Kh=/\s*!important$/;function wo(t,e,n){if(oe(n))n.forEach(r=>wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=I0(t,e);Kh.test(n)?t.setProperty(gr(r),n.replace(Kh,""),"important"):t[r]=n}}const Wh=["Webkit","Moz","ms"],lc={};function I0(t,e){const n=lc[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return lc[e]=r;r=ca(r);for(let s=0;s<Wh.length;s++){const i=Wh[s]+r;if(i in t)return lc[e]=i}return e}const Qh="http://www.w3.org/1999/xlink";function Yh(t,e,n,r,s,i=b_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n):n==null||i&&!ap(n)?t.removeAttribute(e):t.setAttribute(e,i?"":dn(n)?String(n):n)}function Jh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ap(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function zn(t,e,n,r){t.addEventListener(e,n,r)}function A0(t,e,n,r){t.removeEventListener(e,n,r)}const Xh=Symbol("_vei");function C0(t,e,n,r,s=null){const i=t[Xh]||(t[Xh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=b0(e);if(r){const h=i[e]=P0(r,s);zn(t,c,h,l)}else o&&(A0(t,c,o,l),i[e]=void 0)}}const Zh=/(?:Once|Passive|Capture)$/;function b0(t){let e;if(Zh.test(t)){e={};let r;for(;r=t.match(Zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gr(t.slice(2)),e]}let uc=0;const S0=Promise.resolve(),R0=()=>uc||(S0.then(()=>uc=0),uc=Date.now());function P0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;pn(V0(r,n.value),e,5,[r])};return n.value=t,n.attached=R0(),n}function V0(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ef=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,k0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?y0(t,r,o):e==="style"?T0(t,n,r):oa(e)?wl(e)||C0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):D0(t,e,r,o))?(Jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Yh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ke(r))?Jh(t,jt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Yh(t,e,r,o))};function D0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ef(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ef(e)&&Ke(n)?!1:e in t}const ls=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>mo(e,n):e};function N0(t){t.target.composing=!0}function tf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Cn=Symbol("_assign"),NS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Cn]=ls(s);const i=r||s.props&&s.props.type==="number";zn(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=ko(c)),t[Cn](c)}),n&&zn(t,"change",()=>{t.value=t.value.trim()}),e||(zn(t,"compositionstart",N0),zn(t,"compositionend",tf),zn(t,"change",tf))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Cn]=ls(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?ko(t.value):t.value,l=e==null?"":e;c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},OS={deep:!0,created(t,e,n){t[Cn]=ls(n),zn(t,"change",()=>{const r=t._modelValue,s=wi(t),i=t.checked,o=t[Cn];if(oe(r)){const c=Al(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const h=[...r];h.splice(c,1),o(h)}}else if(ws(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(ug(t,i))})},mounted:nf,beforeUpdate(t,e,n){t[Cn]=ls(n),nf(t,e,n)}};function nf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=Al(e,r.props.value)>-1;else if(ws(e))s=e.has(r.props.value);else{if(e===n)return;s=Oi(e,ug(t,!0))}t.checked!==s&&(t.checked=s)}const MS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ws(e);zn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ko(wi(o)):wi(o));t[Cn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Dl(()=>{t._assigning=!1})}),t[Cn]=ls(r)},mounted(t,{value:e}){rf(t,e)},beforeUpdate(t,e,n){t[Cn]=ls(n)},updated(t,{value:e}){t._assigning||rf(t,e)}};function rf(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!ws(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=wi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Al(e,c)>-1}else o.selected=e.has(c);else if(Oi(wi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function wi(t){return"_value"in t?t._value:t.value}function ug(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const O0=["ctrl","shift","alt","meta"],M0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>O0.some(n=>t[`${n}Key`]&&!e.includes(n))},L0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=M0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},x0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},LS=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=gr(s.key);if(e.some(o=>o===i||x0[o]===i))return t(s)})},F0=it({patchProp:k0},m0);let sf;function U0(){return sf||(sf=Fy(F0))}const $0=(...t)=>{const e=U0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=H0(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,B0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function B0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function H0(t){return Ke(t)?document.querySelector(t):t}const j0="modulepreload",q0=function(t){return"/zoskyCube/"+t},of={},He=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=q0(i),i in of)return;of[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const p=s[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const h=document.createElement("link");if(h.rel=o?"stylesheet":j0,o||(h.as="script",h.crossOrigin=""),h.href=i,document.head.appendChild(h),o)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof document<"u";function hg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function z0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hg(t.default)}const Ae=Object.assign;function hc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Yt(s)?s.map(t):t(s)}return n}const ci=()=>{},Yt=Array.isArray,fg=/#/g,G0=/&/g,K0=/\//g,W0=/=/g,Q0=/\?/g,dg=/\+/g,Y0=/%5B/g,J0=/%5D/g,pg=/%5E/g,X0=/%60/g,gg=/%7B/g,Z0=/%7C/g,mg=/%7D/g,ev=/%20/g;function Hl(t){return encodeURI(""+t).replace(Z0,"|").replace(Y0,"[").replace(J0,"]")}function tv(t){return Hl(t).replace(gg,"{").replace(mg,"}").replace(pg,"^")}function Bc(t){return Hl(t).replace(dg,"%2B").replace(ev,"+").replace(fg,"%23").replace(G0,"%26").replace(X0,"`").replace(gg,"{").replace(mg,"}").replace(pg,"^")}function nv(t){return Bc(t).replace(W0,"%3D")}function rv(t){return Hl(t).replace(fg,"%23").replace(Q0,"%3F")}function sv(t){return t==null?"":rv(t).replace(K0,"%2F")}function Ti(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const iv=/\/$/,ov=t=>t.replace(iv,"");function fc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=uv(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:Ti(o)}}function av(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&us(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lv(t[n],e[n]))return!1;return!0}function lv(t,e){return Yt(t)?cf(t,e):Yt(e)?cf(e,t):t===e}function cf(t,e){return Yt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function uv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ii;(function(t){t.pop="pop",t.push="push"})(Ii||(Ii={}));var li;(function(t){t.back="back",t.forward="forward",t.unknown=""})(li||(li={}));function hv(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ov(t)}const fv=/^[^#]+#/;function dv(t,e){return t.replace(fv,"#")+e}function pv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _a=()=>({left:window.scrollX,top:window.scrollY});function gv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=pv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function lf(t,e){return(history.state?history.state.position-e:-1)+t}const Hc=new Map;function mv(t,e){Hc.set(t,e)}function _v(t){const e=Hc.get(t);return Hc.delete(t),e}let yv=()=>location.protocol+"//"+location.host;function yg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),af(l,"")}return af(n,t)+r+s}function vv(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=yg(t,location),P=n.value,D=e.value;let R=0;if(g){if(n.value=_,e.value=g,o&&o===P){o=null;return}R=D?g.position-D.position:0}else r(_);s.forEach(O=>{O(n.value,P,{delta:R,type:Ii.pop,direction:R?R>0?li.forward:li.back:li.unknown})})};function l(){o=n.value}function h(g){s.push(g);const _=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(_),_}function f(){const{history:g}=window;!g.state||g.replaceState(Ae({},g.state,{scroll:_a()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:h,destroy:p}}function uf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_a():null}}function Ev(t){const{history:e,location:n}=window,r={value:yg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:yv()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,h){const f=Ae({},e.state,uf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Ae({},s.value,e.state,{forward:l,scroll:_a()});i(f.current,f,!0);const p=Ae({},uf(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function wv(t){t=hv(t);const e=Ev(t),n=vv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ae({location:"",base:t,go:r,createHref:dv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Tv(t){return typeof t=="string"||t&&typeof t=="object"}function vg(t){return typeof t=="string"||typeof t=="symbol"}const Eg=Symbol("");var hf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hf||(hf={}));function hs(t,e){return Ae(new Error,{type:t,[Eg]:!0},e)}function vn(t,e){return t instanceof Error&&Eg in t&&(e==null||!!(t.type&e))}const ff="[^/]+?",Iv={sensitive:!1,strict:!1,start:!0,end:!0},Av=/[.+*?^${}()[\]/\\]/g;function Cv(t,e){const n=Ae({},Iv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(Av,"\\$&"),_+=40;else if(g.type===1){const{value:P,repeatable:D,optional:R,regexp:O}=g;i.push({name:P,repeatable:D,optional:R});const N=O||ff;if(N!==ff){_+=10;try{new RegExp(`(${N})`)}catch($){throw new Error(`Invalid custom RegExp for param "${P}" (${N}): `+$.message)}}let x=D?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(x=R&&h.length<2?`(?:/${x})`:"/"+x),R&&(x+="?"),s+=x,_+=20,R&&(_+=-8),D&&(_+=-20),N===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",P=i[g-1];p[P.name]=_&&P.repeatable?_.split("/"):_}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:P,repeatable:D,optional:R}=_,O=P in h?h[P]:"";if(Yt(O)&&!D)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const N=Yt(O)?O.join("/"):O;if(!N)if(R)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function bv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=bv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(df(r))return 1;if(df(s))return-1}return s.length-r.length}function df(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Sv={type:0,value:""},Rv=/[a-zA-Z0-9_]/;function Pv(t){if(!t)return[[]];if(t==="/")return[[Sv]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){!h||(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:Rv.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function Vv(t,e,n){const r=Cv(Pv(t.path),n),s=Ae(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function kv(t,e){const n=[],r=new Map;e=_f({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const P=!_,D=gf(p);D.aliasOf=_&&_.record;const R=_f(e,p),O=[D];if("alias"in p){const $=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of $)O.push(gf(Ae({},D,{components:_?_.record.components:D.components,path:Z,aliasOf:_?_.record:D})))}let N,x;for(const $ of O){const{path:Z}=$;if(g&&Z[0]!=="/"){const re=g.record.path,A=re[re.length-1]==="/"?"":"/";$.path=g.record.path+(Z&&A+Z)}if(N=Vv($,g,R),_?_.alias.push(N):(x=x||N,x!==N&&x.alias.push(N),P&&p.name&&!mf(N)&&o(p.name)),Tg(N)&&l(N),D.children){const re=D.children;for(let A=0;A<re.length;A++)i(re[A],N,_&&_.children[A])}_=_||N}return x?()=>{o(x)}:ci}function o(p){if(vg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Ov(p,n);n.splice(g,0,p),p.record.name&&!mf(p)&&r.set(p.record.name,p)}function h(p,g){let _,P={},D,R;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw hs(1,{location:p});R=_.record.name,P=Ae(pf(g.params,_.keys.filter(x=>!x.optional).concat(_.parent?_.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&pf(p.params,_.keys.map(x=>x.name))),D=_.stringify(P)}else if(p.path!=null)D=p.path,_=n.find(x=>x.re.test(D)),_&&(P=_.parse(D),R=_.record.name);else{if(_=g.name?r.get(g.name):n.find(x=>x.re.test(g.path)),!_)throw hs(1,{location:p,currentLocation:g});R=_.record.name,P=Ae({},g.params,p.params),D=_.stringify(P)}const O=[];let N=_;for(;N;)O.unshift(N.record),N=N.parent;return{name:R,path:D,params:P,matched:O,meta:Nv(O)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function pf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Dv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Dv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function mf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Nv(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function _f(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Ov(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wg(t,e[i])<0?r=i:n=i+1}const s=Mv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Mv(t){let e=t;for(;e=e.parent;)if(Tg(e)&&wg(t,e)===0)return e}function Tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Lv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dg," "),o=i.indexOf("="),c=Ti(o<0?i:i.slice(0,o)),l=o<0?null:Ti(i.slice(o+1));if(c in e){let h=e[c];Yt(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function yf(t){let e="";for(let n in t){const r=t[n];if(n=nv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Yt(r)?r.map(i=>i&&Bc(i)):[r&&Bc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function xv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Yt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Fv=Symbol(""),vf=Symbol(""),ya=Symbol(""),jl=Symbol(""),jc=Symbol("");function Ks(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=g=>{g===!1?l(hs(4,{from:n,to:e})):g instanceof Error?l(g):Tv(g)?l(hs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>l(g))})}function dc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(hg(l)){const f=(l.__vccOpts||l)[e];f&&i.push(qn(f,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=z0(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&qn(_,n,r,o,c,s)()}))}}return i}function Ef(t){const e=Ht(ya),n=Ht(jl),r=Te(()=>{const l=ve(t.to);return e.resolve(l)}),s=Te(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(us.bind(null,f));if(g>-1)return g;const _=wf(l[h-2]);return h>1&&wf(f)===_&&p[p.length-1].path!==_?p.findIndex(us.bind(null,l[h-2])):g}),i=Te(()=>s.value>-1&&jv(n.params,r.value.params)),o=Te(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function c(l={}){if(Hv(l)){const h=e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(ci);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Te(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Uv(t){return t.length===1?t[0]:t}const $v=Ml({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ef,setup(t,{slots:e}){const n=ha(Ef(t)),{options:r}=Ht(ya),s=Te(()=>({[Tf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Tf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Uv(e.default(n));return t.custom?i:cg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Bv=$v;function Hv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Yt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function wf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Tf=(t,e,n)=>t!=null?t:e!=null?e:n,qv=Ml({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ht(jc),s=Te(()=>t.route||r.value),i=Ht(vf,0),o=Te(()=>{let h=ve(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Te(()=>s.value.matched[o.value]);yo(vf,Te(()=>o.value+1)),yo(Fv,c),yo(jc,s);const l=lt();return oi(()=>[l.value,c.value,t.name],([h,f,p],[g,_,P])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!us(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return If(n.default,{Component:g,route:h});const _=p.props[f],P=_?_===!0?h.params:typeof _=="function"?_(h):_:null,R=cg(g,Ae({},P,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return If(n.default,{Component:R,route:h})||R}}});function If(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zv=qv;function Gv(t){const e=kv(t.routes,t),n=t.parseQuery||Lv,r=t.stringifyQuery||yf,s=t.history,i=Ks(),o=Ks(),c=Ks(),l=Q_($n);let h=$n;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hc.bind(null,L=>""+L),p=hc.bind(null,sv),g=hc.bind(null,Ti);function _(L,J){let W,ee;return vg(L)?(W=e.getRecordMatcher(L),ee=J):ee=L,e.addRoute(ee,W)}function P(L){const J=e.getRecordMatcher(L);J&&e.removeRoute(J)}function D(){return e.getRoutes().map(L=>L.record)}function R(L){return!!e.getRecordMatcher(L)}function O(L,J){if(J=Ae({},J||l.value),typeof L=="string"){const T=fc(n,L,J.path),V=e.resolve({path:T.path},J),B=s.createHref(T.fullPath);return Ae(T,V,{params:g(V.params),hash:Ti(T.hash),redirectedFrom:void 0,href:B})}let W;if(L.path!=null)W=Ae({},L,{path:fc(n,L.path,J.path).path});else{const T=Ae({},L.params);for(const V in T)T[V]==null&&delete T[V];W=Ae({},L,{params:p(T)}),J.params=p(J.params)}const ee=e.resolve(W,J),we=L.hash||"";ee.params=f(g(ee.params));const Pe=av(r,Ae({},L,{hash:tv(we),path:ee.path})),y=s.createHref(Pe);return Ae({fullPath:Pe,hash:we,query:r===yf?xv(L.query):L.query||{}},ee,{redirectedFrom:void 0,href:y})}function N(L){return typeof L=="string"?fc(n,L,l.value.path):Ae({},L)}function x(L,J){if(h!==L)return hs(8,{from:J,to:L})}function $(L){return A(L)}function Z(L){return $(Ae(N(L),{replace:!0}))}function re(L){const J=L.matched[L.matched.length-1];if(J&&J.redirect){const{redirect:W}=J;let ee=typeof W=="function"?W(L):W;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=N(ee):{path:ee},ee.params={}),Ae({query:L.query,hash:L.hash,params:ee.path!=null?{}:L.params},ee)}}function A(L,J){const W=h=O(L),ee=l.value,we=L.state,Pe=L.force,y=L.replace===!0,T=re(W);if(T)return A(Ae(N(T),{state:typeof T=="object"?Ae({},we,T.state):we,force:Pe,replace:y}),J||W);const V=W;V.redirectedFrom=J;let B;return!Pe&&cv(r,ee,W)&&(B=hs(16,{to:V,from:ee}),Mt(ee,ee,!0,!1)),(B?Promise.resolve(B):I(V,ee)).catch(M=>vn(M)?vn(M,2)?M:Xt(M):pe(M,V,ee)).then(M=>{if(M){if(vn(M,2))return A(Ae({replace:y},N(M.to),{state:typeof M.to=="object"?Ae({},we,M.to.state):we,force:Pe}),J||V)}else M=b(V,ee,!0,y,we);return C(V,ee,M),M})}function v(L,J){const W=x(L,J);return W?Promise.reject(W):Promise.resolve()}function E(L){const J=qt.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(L):L()}function I(L,J){let W;const[ee,we,Pe]=Kv(L,J);W=dc(ee.reverse(),"beforeRouteLeave",L,J);for(const T of ee)T.leaveGuards.forEach(V=>{W.push(qn(V,L,J))});const y=v.bind(null,L,J);return W.push(y),dt(W).then(()=>{W=[];for(const T of i.list())W.push(qn(T,L,J));return W.push(y),dt(W)}).then(()=>{W=dc(we,"beforeRouteUpdate",L,J);for(const T of we)T.updateGuards.forEach(V=>{W.push(qn(V,L,J))});return W.push(y),dt(W)}).then(()=>{W=[];for(const T of Pe)if(T.beforeEnter)if(Yt(T.beforeEnter))for(const V of T.beforeEnter)W.push(qn(V,L,J));else W.push(qn(T.beforeEnter,L,J));return W.push(y),dt(W)}).then(()=>(L.matched.forEach(T=>T.enterCallbacks={}),W=dc(Pe,"beforeRouteEnter",L,J,E),W.push(y),dt(W))).then(()=>{W=[];for(const T of o.list())W.push(qn(T,L,J));return W.push(y),dt(W)}).catch(T=>vn(T,8)?T:Promise.reject(T))}function C(L,J,W){c.list().forEach(ee=>E(()=>ee(L,J,W)))}function b(L,J,W,ee,we){const Pe=x(L,J);if(Pe)return Pe;const y=J===$n,T=zr?history.state:{};W&&(ee||y?s.replace(L.fullPath,Ae({scroll:y&&T&&T.scroll},we)):s.push(L.fullPath,we)),l.value=L,Mt(L,J,W,y),Xt()}let w;function $e(){w||(w=s.listen((L,J,W)=>{if(!Nn.listening)return;const ee=O(L),we=re(ee);if(we){A(Ae(we,{replace:!0,force:!0}),ee).catch(ci);return}h=ee;const Pe=l.value;zr&&mv(lf(Pe.fullPath,W.delta),_a()),I(ee,Pe).catch(y=>vn(y,12)?y:vn(y,2)?(A(Ae(N(y.to),{force:!0}),ee).then(T=>{vn(T,20)&&!W.delta&&W.type===Ii.pop&&s.go(-1,!1)}).catch(ci),Promise.reject()):(W.delta&&s.go(-W.delta,!1),pe(y,ee,Pe))).then(y=>{y=y||b(ee,Pe,!1),y&&(W.delta&&!vn(y,8)?s.go(-W.delta,!1):W.type===Ii.pop&&vn(y,20)&&s.go(-1,!1)),C(ee,Pe,y)}).catch(ci)}))}let ot=Ks(),Fe=Ks(),Ie;function pe(L,J,W){Xt(L);const ee=Fe.list();return ee.length?ee.forEach(we=>we(L,J,W)):console.error(L),Promise.reject(L)}function Vt(){return Ie&&l.value!==$n?Promise.resolve():new Promise((L,J)=>{ot.add([L,J])})}function Xt(L){return Ie||(Ie=!L,$e(),ot.list().forEach(([J,W])=>L?W(L):J()),ot.reset()),L}function Mt(L,J,W,ee){const{scrollBehavior:we}=t;if(!zr||!we)return Promise.resolve();const Pe=!W&&_v(lf(L.fullPath,0))||(ee||!W)&&history.state&&history.state.scroll||null;return Dl().then(()=>we(L,J,Pe)).then(y=>y&&gv(y)).catch(y=>pe(y,L,J))}const at=L=>s.go(L);let _n;const qt=new Set,Nn={currentRoute:l,listening:!0,addRoute:_,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:D,resolve:O,options:t,push:$,replace:Z,go:at,back:()=>at(-1),forward:()=>at(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Fe.add,isReady:Vt,install(L){const J=this;L.component("RouterLink",Bv),L.component("RouterView",zv),L.config.globalProperties.$router=J,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(l)}),zr&&!_n&&l.value===$n&&(_n=!0,$(s.location).catch(we=>{}));const W={};for(const we in $n)Object.defineProperty(W,we,{get:()=>l.value[we],enumerable:!0});L.provide(ya,J),L.provide(jl,Ap(W)),L.provide(jc,l);const ee=L.unmount;qt.add(L),L.unmount=function(){qt.delete(L),qt.size<1&&(h=$n,w&&w(),w=null,l.value=$n,_n=!1,Ie=!1),ee()}}};function dt(L){return L.reduce((J,W)=>J.then(()=>E(W)),Promise.resolve())}return Nn}function Kv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>us(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>us(h,l))||s.push(l))}return[n,r,s]}function Ig(){return Ht(ya)}function Wv(t){return Ht(jl)}const Af=[{path:"/",name:"/",component:()=>He(()=>import("./index.b032b2f1.js"),["assets/index.b032b2f1.js","assets/route-block.6a611cbf.js","assets/index.4d99888c.css"]),meta:{title:"Game Stats"}},{path:"/:404(.*)",name:"/[...404]",component:()=>He(()=>import("./_...404_.c95a4c49.js"),["assets/_...404_.c95a4c49.js","assets/route-block.6a611cbf.js"]),meta:{title:"Page Not Found"}},{path:"/ark",name:"/ark",component:()=>He(()=>import("./ark.e5c1a30b.js"),["assets/ark.e5c1a30b.js","assets/route-block.6a611cbf.js","assets/ark.cb2b9785.css"]),meta:{title:"ARK Tribe"}},{path:"/auth",name:"/auth",component:()=>He(()=>import("./auth.5f4b22e3.js"),["assets/auth.5f4b22e3.js","assets/route-block.6a611cbf.js","assets/auth.e0f8b465.css"]),meta:{title:"Whitelist Auth"}},{path:"/collection",name:"/collection",component:()=>He(()=>import("./collection.c19b09f8.js"),["assets/collection.c19b09f8.js","assets/route-block.6a611cbf.js","assets/collection.1cdbc1f2.css"]),meta:{title:"Game Collection"}},{path:"/counter",name:"/counter",component:()=>He(()=>import("./counter.2b21d9dc.js"),["assets/counter.2b21d9dc.js","assets/route-block.6a611cbf.js"]),meta:{title:"manual \u2620\uFE0F++"}},{path:"/halo",name:"/halo",component:()=>He(()=>import("./halo.d8e7bc84.js"),["assets/halo.d8e7bc84.js","assets/route-block.6a611cbf.js","assets/halo.3819f617.css"]),meta:{title:"Halo Stats"}},{path:"/help",children:[{path:"",name:"/help/",component:()=>He(()=>import("./index.256b9462.js"),["assets/index.256b9462.js","assets/index.86119cbe.css"])},{path:"dailyDose",name:"/help/dailyDose",component:()=>He(()=>import("./dailyDose.43df2e33.js"),["assets/dailyDose.43df2e33.js","assets/dailyDose.10a9ecaa.css"])},{path:"pixelPower",name:"/help/pixelPower",component:()=>He(()=>import("./pixelPower.08c3b31e.js"),["assets/pixelPower.08c3b31e.js","assets/pixelPower.eaed5837.css"])},{path:"referralRewards",name:"/help/referralRewards",component:()=>He(()=>import("./referralRewards.07f30d67.js"),["assets/referralRewards.07f30d67.js","assets/referralRewards.d7cd05d2.css"])},{path:"squadRush",name:"/help/squadRush",component:()=>He(()=>import("./squadRush.91d78ded.js"),["assets/squadRush.91d78ded.js","assets/squadRush.f6181dd2.css"])},{path:"vodVote",name:"/help/vodVote",component:()=>He(()=>import("./vodVote.b9832089.js"),["assets/vodVote.b9832089.js","assets/vodVote.5689d697.css"])},{path:"zoskyZappers",name:"/help/zoskyZappers",component:()=>He(()=>import("./zoskyZappers.cd74ace3.js"),["assets/zoskyZappers.cd74ace3.js","assets/zoskyZappers.087a54d2.css"])}]},{path:"/pixelPower",name:"/pixelPower",component:()=>He(()=>import("./pixelPower.80f78096.js"),["assets/pixelPower.80f78096.js","assets/route-block.6a611cbf.js","assets/pixelPower.46940ee9.css"]),meta:{title:"Pixel Power Gallery"}},{path:"/stats",children:[{path:"",name:"/stats/",component:()=>He(()=>import("./index.80583097.js"),["assets/index.80583097.js","assets/useHandoutsData.d245e5a5.js","assets/vodVote.1d803d80.js"])},{path:"analytics",name:"/stats/analytics",component:()=>He(()=>import("./analytics.7edc1835.js"),["assets/analytics.7edc1835.js","assets/index.fe103049.js","assets/chartjs-adapter-date-fns.esm.204a280f.js","assets/useHandoutsData.d245e5a5.js","assets/analytics.201b7309.css"])},{path:"compare",name:"/stats/compare",component:()=>He(()=>import("./compare.24382cba.js"),["assets/compare.24382cba.js","assets/index.fe103049.js","assets/compare.393315b2.css"])},{path:"user",name:"/stats/user",component:()=>He(()=>import("./user.f004155e.js"),["assets/user.f004155e.js","assets/useHandoutsData.d245e5a5.js","assets/vodVote.1d803d80.js","assets/index.fe103049.js","assets/chartjs-adapter-date-fns.esm.204a280f.js"])}]},{path:"/store",name:"/store",component:()=>He(()=>import("./store.b561b4d3.js"),["assets/store.b561b4d3.js","assets/route-block.6a611cbf.js","assets/store.817f1b50.css"]),meta:{title:"Reward Store"}},{path:"/videos",name:"/videos",component:()=>He(()=>import("./videos.f0f8e213.js"),["assets/videos.f0f8e213.js","assets/route-block.6a611cbf.js","assets/videos.60c43465.css"]),meta:{title:"VOD Archive"}},{path:"/winning",name:"/winning",component:()=>He(()=>import("./winning.204874fb.js"),["assets/winning.204874fb.js","assets/route-block.6a611cbf.js","assets/winning.e3b0c442.css"]),meta:{title:"Completed Games"}}];function Qv(t){const{extendRoutes:e}=t;return Gv(Object.assign(t,{routes:typeof e=="function"?e(Af):Af}))}const Ts=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Yv={},Jv={viewBox:"0 0 48 48"};function Xv(t,e){return qe(),Xe("svg",Jv,[...e[0]||(e[0]=[ig('<polygon fill="#757575" points="24,12 24,12 24,12 11,37 13,39 14,41 15,41 13.511,38.021 24,16 35,39 37,37"></polygon><polygon fill="#757575" points="34,41 33,41 38,33 39,34"></polygon><polygon fill="#64b5f6" points="29,7 29,9 24,16 19,9 19,7"></polygon><polygon fill="#90caf9" points="22.013,7 24,10 24,7"></polygon><polygon fill="#90caf9" points="24,10 27.229,10.463 25,13"></polygon><polygon fill="#90caf9" points="21.827,11.11 24,10 22.332,13.424"></polygon><polygon fill="#039be5" points="19,7 20,7 24,16 19,9"></polygon><polygon fill="#039be5" points="29,7 28,7 24,16 29,9"></polygon><polygon fill="#757575" points="18.043,12 17,16 20,16 20,13"></polygon><polygon fill="#757575" points="24,21 24,21 23,25 24,26"></polygon><polygon fill="#90a4ae" points="42,32 37,23 35,24 35.826,21 28,9 25.181,14.347 36,37 34,41 37,41"></polygon><polygon fill="#90a4ae" points="15.13,31 12,37 14,41 11,41 6,32 11.47,22.08 13,23 12.87,19.94 16.06,15.05 19,15 18.04,12 20,9 22.82,14.35 17.26,25 24,25 24,21 29,31"></polygon><polygon fill="#c62828" points="11,41 1.83,41 3.42,38.14 4.05,37 5.04,35.21 5,32 6,32"></polygon><polygon fill="#757575" points="29,31 28,33 15,33 16.096,31"></polygon><polygon fill="#e53935" points="10,41 0,41 1.59,38.14 2.22,37 3.21,35.21 3.68,34.37 5,32 6.68,35.02 7.03,35.65 8.17,37.7 8.17,37.71"></polygon><polygon fill="#e57373" points="8.17,37.7 5,37 7.03,35.65"></polygon><polygon fill="#e57373" points="5,37 2.22,37 3.21,35.21"></polygon><polygon fill="#e57373" points="5,41 3,41 5,37"></polygon><polygon fill="#689f38" points="37,41 46.17,41 44.58,38.14 43.95,37 42.96,35.21 43,32 42,32"></polygon><polygon fill="#aeea00" points="38,41 48,41 46.41,38.14 45.78,37 44.79,35.21 44.32,34.37 43,32 41.32,35.02 40.97,35.65 39.83,37.7 39.83,37.71"></polygon><polygon fill="#b2ff59" points="39.83,37.7 43,37 40.97,35.65"></polygon><polygon fill="#b2ff59" points="43,37 45.78,37 44.79,35.21"></polygon><polygon fill="#b2ff59" points="43,41 45,41 43,37"></polygon>',23)])])}const Zv=Ts(Yv,[["render",Xv]]),eE={},tE={viewBox:"0 0 2592 1152"};function nE(t,e){return qe(),Xe("svg",tE,[...e[0]||(e[0]=[ig(`<g><g><path fill="#393E42" d="M1651.909,89.782L1656,61.361L1707.137,37c580.908,119.774,701.591,326.843,701.591,326.843H2556v269.999
                    l-77.728,75.113h-65.454c-312.955,414.135-1210.909,357.293-1210.909,357.293L1152.818,1117
                    c-212.728-14.211-488.864-93.384-488.864-93.384l-16.364-60.901C576,938.354,541.228,924.143,541.228,924.143l-26.591,18.271
                    c-81.818-32.481-143.182-81.203-143.182-81.203l2.045-30.451c-59.318-40.602-102.272-87.294-102.272-87.294H121.909L36,656.173
                    V339.481h225l77.728-69.022l75.682,20.301C805.091,10.609,1651.909,89.782,1651.909,89.782z"></path><path fill="#6A797C" d="M379.303,522.371H211.036l-67.306-97.334h146.391c55.529-219.694,541.822-314.248,541.822-314.248
                    l-6.731-34.763c662.975-80.647,989.415,43.104,989.415,43.104c397.116,120.973,442.55,312.858,442.55,312.858
                    c16.825,61.182,67.306,54.229,67.306,54.229h151.44v58.401H2327.85c-57.213-2.781-74.039,62.569-74.039,62.569
                    c-222.114,426.879-1098.79,375.43-1098.79,375.43l-21.873-45.886c-402.162-15.294-504.806-91.771-504.806-91.771l84.135-75.085
                    c625.957,179.371,1088.695-61.18,1088.695-61.18c299.514-157.126,106.009-333.718,106.009-333.718
                    c-245.675-218.305-826.197-193.276-826.197-193.276C384.352,234.541,379.303,522.371,379.303,522.371z"></path></g><g><g><g><path fill="#FFFFFF" d="M98.591,402.909H80.616v-22.428h139.178v139.151h257.813V418.2
                            c85.766,2.549,97.065,38.229,97.065,38.229v205.413h33.382v13.763h-33.382v14.271h-61.115v-10.194h-35.95V555.312H254.203
                            v81.043c-1.541,40.777,63.683,40.777,63.683,40.777v19.88h-33.382v7.646H175.113v-15.292H93.968v-10.194h29.274
                            c16.435-1.019,13.867-22.937,13.867-22.937V436.55C129.918,398.322,98.591,402.909,98.591,402.909z"></path><path fill="#FFFFFF" d="M973.204,394.754l255.759,268.107h52.898v15.292h-66.764v12.742h-67.792l-14.38-11.214h-40.059v-15.291
                            h28.247l-84.226-89.199H902.844l-66.764,75.947v12.742h57.006v14.272h-99.633l-11.812,12.232h-94.498v-25.995h34.409
                            l103.742-113.665h32.868l16.948-21.408h121.203l-51.357-55.559c-9.245-14.272-17.462,0-17.462,0l-8.73,14.271h-36.977
                            l40.572-44.854h6.677L973.204,394.754z"></path><path fill="#FFFFFF" d="M1387.657,425.846h-47.249v-18.859h131.988v14.272h87.82v22.427h-17.976
                            c-34.409,8.666-29.786,29.563-29.786,29.563v161.578h223.917c34.923-6.116,29.787-30.583,29.787-30.583h15.407v71.87h-28.246
                            l-15.407,18.35h-298.386v-19.88h-88.334v-16.82h33.383c20.028-6.115,20.542-27.014,20.542-27.014V451.332
                            C1405.632,425.846,1387.657,425.846,1387.657,425.846z"></path><path fill="#FFFFFF" d="M2182.666,540.531h34.923v13.252h-35.437c-15.407,27.525-61.629,26.505-61.629,26.505
                            c-57.006,0-50.844-32.111-50.844-32.111c-3.08-33.641,55.979-34.15,55.979-34.15
                            C2173.422,516.574,2182.666,540.531,2182.666,540.531z"></path><path fill="#FFFFFF" d="M1877.604,549.196h-51.357l-20.542-35.68h44.68c16.948-80.534,165.371-115.194,165.371-115.194
                            l-2.055-12.743c202.347-29.563,301.98,15.801,301.98,15.801c121.203,44.345,135.07,114.685,135.07,114.685
                            c5.136,22.428,20.543,19.879,20.543,19.879h46.221v21.408h-45.193c-17.463-1.02-22.598,22.937-22.598,22.937
                            c-67.792,156.481-335.363,137.622-335.363,137.622l-6.676-16.82c-122.744-5.607-154.072-33.642-154.072-33.642l25.68-27.523
                            c191.048,65.752,332.281-22.427,332.281-22.427c91.415-57.598,32.354-122.332,32.354-122.332
                            c-74.981-80.024-252.164-70.85-252.164-70.85C1879.146,443.686,1877.604,549.196,1877.604,549.196z"></path></g><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="1272.604" y1="387.6255" x2="1272.604" y2="703.9771"><stop offset="0" style="stop-color:#FFFFFF;"></stop><stop offset="0.1205" style="stop-color:#FBFCFE;"></stop><stop offset="0.2454" style="stop-color:#EEF4F9;"></stop><stop offset="0.3724" style="stop-color:#DAE7F2;"></stop><stop offset="0.5008" style="stop-color:#BCD5E9;"></stop><stop offset="0.6304" style="stop-color:#97BDDC;"></stop><stop offset="0.761" style="stop-color:#69A0CC;"></stop><stop offset="0.8898" style="stop-color:#347EBA;"></stop><stop offset="1" style="stop-color:#005DA9;"></stop></linearGradient><path fill="url(#SVGID_1_)" d="M98.591,388.637h109.391v134.564c2.055,11.213,14.894,10.703,14.894,10.703H476.58
                        c17.975-2.039,15.921-13.762,15.921-13.762v-85.122c56.493,3.568,69.846,29.054,69.846,29.054v212.549H526.91
                        c-4.108-13.762-11.298-11.723-11.298-11.723H490.96V550.216c-0.514-8.156-14.38-9.685-14.38-9.685h-222.89
                        c-11.299,0-12.839,13.252-12.839,13.252v90.729c-2.054,22.937,38.518,42.306,38.518,42.306l-5.136,5.607h-87.307
                        c0-15.802-9.245-14.271-9.245-14.271h-29.273V425.846C142.758,386.089,98.591,388.637,98.591,388.637z M927.496,459.997
                        c0,0,11.299-13.762,20.03-3.568l63.169,65.243c0,0,11.299,20.897-10.785,22.937H881.274l-14.894,18.859h-34.923L727.203,677.133
                        h44.167c0,0,6.163,1.021,13.353-5.606c0,0,3.082-6.626,12.326-7.646h26.192c0,0-0.514-22.427,4.108-22.938l67.278-73.398
                        c0,0,3.082-7.136,11.812-7.645h131.474c0,0,7.19-2.039,12.326,6.117l84.227,92.257v7.136c0,0,6.163-2.549,17.975,11.213h51.871
                        c0,0,1.541-11.213,8.217-10.703L971.663,413.613l-66.765,58.617h9.244L927.496,459.997z M1419.498,435.531v197.257
                        c0,0-0.513,19.369-12.839,28.544h35.437c0,0,9.244-3.568,10.785,11.213v8.156h280.41l14.894-16.311h21.057v-27.524
                        c0,0-8.218,12.233-30.302,12.743h-224.943c0,0-14.381,2.548-14.894-15.802c-12.839-6.627-1.028,0-1.028,0V473.249
                        c0,0-5.648-30.582,31.842-37.209h-68.305v-22.427h-77.035C1384.576,413.613,1412.309,413.104,1419.498,435.531z M1833.95,536.453
                        h31.842c0,0,4.108-112.646,228.54-126.918c0,0,217.241-16.311,278.355,102.961c0,0,48.276,107.549-153.56,155.972
                        c0,0-146.368,25.484-235.729-11.724l-6.676,6.626c0,0,33.382,19.369,133.53,23.957c0,0,10.271-2.039,10.271,15.801
                        c0,0,197.212,16.82,301.467-99.395c0,0,31.842-41.286,23.111-68.811c0,0-10.271-46.894-62.655-82.063
                        c0,0-123.257-96.845-348.716-54.539l-6.676,11.723c0,0-45.709,7.646-99.12,35.68c0,0-53.925,20.389-70.359,79.005h-33.382
                        L1833.95,536.453z M2124.633,524.73c-23.258,0-42.112,9.128-42.112,20.389c0,11.259,18.854,20.388,42.112,20.388
                        s42.112-9.129,42.112-20.388C2166.745,533.858,2147.891,524.73,2124.633,524.73z"></path></g><g><path fill="#FFFFFF" d="M479.336,759.571c16.572,0,37.011,12.226,37.011,12.226v-13.288c-18.229-7.443-42.535-3.722-42.535-3.722
                        c-59.108,2.658-56.898,34.021-56.898,34.021s-2.21,31.363,56.898,34.021c0,0,24.306,3.722,42.535-3.722v-13.289
                        c0,0-20.439,12.227-37.011,12.227c0,0-30.935,2.126-34.249-29.237C448.402,757.445,479.336,759.571,479.336,759.571z"></path><path fill="#FFFFFF" d="M671.021,789.63c0,19.531-28.565,35.362-63.803,35.362c-35.237,0-63.803-15.831-63.803-35.362
                        c0-19.53,28.566-35.362,63.803-35.362C642.456,754.268,671.021,770.1,671.021,789.63z M607.218,760.238
                        c-19.83,0-35.905,13.158-35.905,29.392s16.076,29.393,35.905,29.393c19.831,0,35.907-13.159,35.907-29.393
                        S627.049,760.238,607.218,760.238z"></path><path fill="#FFFFFF" d="M1717.271,789.63c0,19.531-28.565,35.362-63.803,35.362c-35.236,0-63.803-15.831-63.803-35.362
                        c0-19.53,28.566-35.362,63.803-35.362C1688.706,754.268,1717.271,770.1,1717.271,789.63z M1653.469,760.238
                        c-19.83,0-35.906,13.158-35.906,29.392s16.076,29.393,35.906,29.393c19.831,0,35.906-13.159,35.906-29.393
                        S1673.3,760.238,1653.469,760.238z"></path><polygon fill="#FFFFFF" points="739.707,756.356 698.233,756.356 710.29,762.578 710.29,816.664 698.233,822.887 
                        737.055,822.887 724.034,816.425 724.034,767.125 769.848,804.698 815.663,767.604 815.663,816.664 802.642,823.126 
                        850.868,823.126 839.053,816.186 839.053,761.622 851.591,755.639 816.386,755.639 777.323,787.707 			"></polygon><path fill="#FFFFFF" d="M877.393,755.639h54.013c0,0,40.992-0.957,45.573,16.512c0,0,3.858,11.249-24.354,16.514
                        c0,0,30.623,1.437,31.588,16.514c0,0,3.617,15.555-42.921,18.427h-63.658l13.503-6.94V762.34L877.393,755.639z M931.165,761.382
                        h-17.603v25.607h20.255c21.219-4.068,19.291-13.163,19.291-13.163C952.625,763.058,931.165,761.382,931.165,761.382z
                        M934.273,791.775h-20.711v25.607h23.833c24.967-4.068,22.697-13.163,22.697-13.163
                        C959.524,793.451,934.273,791.775,934.273,791.775z"></path><path fill="#FFFFFF" d="M1039.264,823.686H998.48l13.851-6.618l46.426-61.097h13.851l45.913,60.587l12.568,6.62h-48.991
                        l11.029-5.855l-8.977-13.747h-47.452l-9.234,12.729L1039.264,823.686z M1040.803,797.466h37.961l-18.467-24.693L1040.803,797.466
                        z"></path><polygon fill="#FFFFFF" points="1162.895,761.571 1188.288,761.571 1188.288,816.812 1176.232,822.923 1222.401,822.923 
                        1210.603,816.558 1210.603,761.826 1235.739,761.826 1251.642,768.954 1251.642,756.226 1146.735,756.226 1146.735,769.718 			
                        "></polygon><polygon fill="#FFFFFF" points="1341.929,755.462 1433.755,755.462 1433.755,769.718 1417.339,761.826 1376.556,761.826 
                        1376.556,784.229 1406.31,784.229 1417.853,778.628 1417.853,795.938 1405.284,789.574 1376.556,789.574 1376.556,816.558 
                        1417.082,816.558 1433.242,809.685 1433.242,823.432 1341.672,823.432 1353.472,817.067 1353.472,762.336 			"></polygon><polygon fill="#FFFFFF" points="1983.031,755.462 2074.856,755.462 2074.856,769.718 2058.441,761.826 2017.658,761.826 
                        2017.658,784.229 2047.412,784.229 2058.955,778.628 2058.955,795.938 2046.387,789.574 2017.658,789.574 2017.658,816.558 
                        2058.185,816.558 2074.345,809.685 2074.345,823.432 1982.774,823.432 1994.574,817.067 1994.574,762.336 			"></polygon><polygon fill="#FFFFFF" points="1489.414,761.826 1501.214,755.717 1450.427,755.717 1464.021,762.59 1505.317,823.432 
                        1519.425,823.432 1562.003,762.59 1575.084,755.971 1534.813,755.971 1546.87,762.336 1518.142,805.104 			"></polygon><polygon fill="#FFFFFF" points="1778.486,761.571 1778.486,817.577 1814.139,817.577 1831.068,809.685 1831.068,823.432 
                        1742.833,823.432 1755.401,817.067 1755.401,762.081 1743.346,755.462 1791.055,755.462 			"></polygon><polygon fill="#FFFFFF" points="1927.766,755.462 1967.779,755.462 1954.698,761.571 1912.633,822.668 1897.242,822.668 
                        1856.973,762.844 1843.122,755.717 1894.164,755.717 1882.109,761.826 1910.324,804.084 1939.565,762.081 			"></polygon><path fill="#FFFFFF" d="M2101.67,755.207h63.355c65.919,6.364,60.021,34.112,60.021,34.112
                        c-1.539,33.349-58.481,34.366-58.481,34.366h-65.149l12.567-6.873v-54.477L2101.67,755.207z M2160.665,761.316h-23.084v56.006
                        h30.009c31.549-7.383,30.267-28.767,30.267-28.767C2191.444,760.554,2160.665,761.316,2160.665,761.316z"></path></g></g></g>`,1)])])}const rE=Ts(eE,[["render",nE]]);/*!
  * mdue v0.1.4
  * (c) 2020 Sharad Chand
  * @license MIT
  */const sE={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 24 24"},iE=t=>Re("path",{d:t},null,-1),De=(t,e)=>Ml({name:t,render:()=>(qe(),$l("svg",sE,[iE(e)]))}),oE=De(name,"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"),xS=De(name,"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"),FS=De(name,"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"),aE=De(name,"M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"),US=De(name,"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"),$S=De(name,"M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15C15.86,15 19,11.87 19,8C19,4.14 15.86,1 12,1M12,3.15C14.67,3.15 16.85,5.32 16.85,8C16.85,10.68 14.67,12.85 12,12.85A4.85,4.85 0 0,1 7.15,8A4.85,4.85 0 0,1 12,3.15M11,5V8.69L14.19,10.53L14.94,9.23L12.5,7.82V5M15,16V19H3V21H15V24L19,20M19,20V24H21V16H19"),BS=De(name,"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"),HS=De(name,"M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"),jS=De(name,"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"),qS=De(name,"M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"),zS=De(name,"M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"),cE=De(name,"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"),GS=De(name,"M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z"),KS=De(name,"M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z"),WS=De(name,"M6,18V8H8V18H6M6,4.5H8V6.5H6V4.5M17,4H19V18H17V17.75C17,17.75 15.67,18 15,18A5,5 0 0,1 10,13A5,5 0 0,1 15,8C15.67,8 17,8.25 17,8.25V4M17,10.25C17,10.25 15.67,10 15,10A3,3 0 0,0 12,13A3,3 0 0,0 15,16C15.67,16 17,15.75 17,15.75V10.25Z"),lE=De(name,"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"),QS=De(name,"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"),uE=De(name,"M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"),hE=De(name,"M15.8,18.5L21.8,20.1L21.4,22L12,19.5L2.6,22L2.1,20.1L8.1,18.5L2,16.9L2.5,15L11.9,17.5L21.3,15L21.8,16.9L15.8,18.5M18,8C18,9.8 17.2,11.3 16,12.4V15H14V13.7L14,13H13V15H11V13H10V13.7L10,15H8V12.4C6.8,11.3 6,9.8 6,8A6,6 0 0,1 12,2A6,6 0 0,1 18,8M11,7.5C11,6.7 10.3,6 9.5,6C8.7,6 8,6.7 8,7.5C8,8.3 8.7,9 9.5,9C10.3,9 11,8.3 11,7.5M13,11L12,9L11,11H13M16,7.5C16,6.7 15.3,6 14.5,6C13.7,6 13,6.7 13,7.5C13,8.3 13.7,9 14.5,9C15.3,9 16,8.3 16,7.5Z"),YS=De(name,"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"),JS=De(name,"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z"),fE=De(name,"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L9.13,12.93L8.97,12.92C8.38,12.92 7.83,13.1 7.38,13.41L2,11.2C2.43,6.05 6.73,2 12,2M8.28,17.17C9.08,17.5 10,17.13 10.33,16.33C10.66,15.53 10.28,14.62 9.5,14.29L8.22,13.76C8.71,13.58 9.26,13.57 9.78,13.79C10.31,14 10.72,14.41 10.93,14.94C11.15,15.46 11.15,16.04 10.93,16.56C10.5,17.64 9.23,18.16 8.15,17.71C7.65,17.5 7.27,17.12 7.06,16.67L8.28,17.17M17.8,9.42C17.8,10.81 16.67,11.94 15.28,11.94C13.9,11.94 12.77,10.81 12.77,9.42A2.5,2.5 0 0,1 15.28,6.91C16.67,6.91 17.8,8.04 17.8,9.42M13.4,9.42C13.4,10.46 14.24,11.31 15.29,11.31C16.33,11.31 17.17,10.46 17.17,9.42C17.17,8.38 16.33,7.53 15.29,7.53C14.24,7.53 13.4,8.38 13.4,9.42Z"),dE=De(name,"M12,18H6V14H12M21,14V12L20,7H4L3,12V14H4V20H14V14H18V20H20V14M20,4H4V6H20V4Z"),XS=De(name,"M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"),pE=De(name,"M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z"),gE=De(name,"M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z"),mE=De(name,"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z");const _E={key:1,class:"flex flex-col items-center scale-75 origin-left -mr-2"},yE=["title"],vE=["title"],EE={__name:"HeaderBarYt",setup(t){const e=Ig(),n=Ht("gameStore"),{youtubeVods:r}=n;function s(l){return r.value.filter(f=>f.game===l).sort((f,p)=>new Date(p.date)-new Date(f.date))[0]}const i=Te(()=>r.value.length),o=Te(()=>[...new Set(r.value.map(h=>h.game))].sort((h,f)=>{const p=s(h),g=s(f);return new Date(g.date)-new Date(p.date)})),c=Te(()=>{const l=r.value.reduce((g,_)=>g+(_.duration||0),0);if(l===0)return"0h";const h=Math.floor(l/86400),f=Math.floor(l%86400/3600),p=Math.floor(l%3600/60);return h>0?`${h}d${f}h`:f>0?`${f}h${p}m`:`${p}m`});return(l,h)=>(qe(),Xe("button",{title:"yt:zoskyCube",class:_t(["-my-2",l.$route.path=="/videos"?"active":"text-red-600"]),onClick:h[0]||(h[0]=f=>ve(e).push("/videos"))},[Re(ve(mE),{class:"text-3xl"}),ve(o).length?(qe(),Xe("div",_E,[je("p",{class:"text-sm",title:`- games: ${ve(o).length}
 - videos: ${ve(i)}`},Rr(ve(o).length)+"\u2022"+Rr(ve(i)),9,yE),je("p",{class:"text-xs opacity-75 -mt-1",title:`Total duration: ${ve(c)}`},Rr(ve(c)),9,vE)])):(qe(),$l(ve(lE),{key:0,class:"animate-spin"}))],2))}},wE=Ts(EE,[["__scopeId","data-v-4c770571"]]),TE={class:"flex flex-row gap-1 rounded-lg shadow-md"},IE={class:"flex flex-row items-center gap-1 text-purple-600",href:"https://twitch.tv/zoskyCube",target:"_blank",rel:"noopener noreferrer"},AE={__name:"TtvStatus",setup(t){return(e,n)=>(qe(),Xe("div",TE,[je("a",IE,[Re(ve(gE),{class:"text-2xl"})])]))}},CE="/zoskyCube/assets/logo.1eae5aa8.png",bE="/zoskyCube/assets/pixelPower.76d170e2.png",SE=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},RE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Cg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,_=h&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ag(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):RE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new PE;const g=i<<2|c>>4;if(r.push(g),h!==64){const _=c<<4&240|h>>2;if(r.push(_),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class PE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VE=function(t){const e=Ag(t);return Cg.encodeByteArray(e,!0)},Bo=function(t){return VE(t).replace(/\./g,"")},bg=function(t){try{return Cg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=()=>kE().__FIREBASE_DEFAULTS__,NE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bg(t[1]);return e&&JSON.parse(e)},va=()=>{try{return SE()||DE()||NE()||OE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sg=t=>{var e,n;return(n=(e=va())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Rg=t=>{const e=Sg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>{var t;return(t=va())==null?void 0:t.config},Vg=t=>{var e;return(e=va())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ql(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},c="";return[Bo(JSON.stringify(n)),Bo(JSON.stringify(o)),c].join(".")}const ui={};function xE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ui))ui[e]?t.emulator.push(e):t.prod.push(e);return t}function FE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Cf=!1;function zl(t,e){if(typeof window>"u"||typeof document>"u"||!mr(window.location.host)||ui[t]===e||ui[t]||Cf)return;ui[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=xE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Cf=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=FE(r),_=n("text"),P=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),R=document.getElementById(D)||document.createElement("a"),O=n("preprendIcon"),N=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const x=g.element;c(x),f(R,D);const $=h();l(N,O),x.append(N,P,R,$),document.body.appendChild(x)}i?(P.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(N.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function UE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(At())}function $E(){var e;const t=(e=va())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function HE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qE(){const t=At();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zE(){return!$E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function GE(){try{return typeof indexedDB=="object"}catch{return!1}}function KE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="FirebaseError";class mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WE,Object.setPrototypeOf(this,mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new mn(s,c,r)}}function QE(t,e){return t.replace(YE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;function JE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(bf(i)&&bf(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function XE(t,e){const n=new ZE(t,e);return n.subscribe.bind(n)}class ZE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e2(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e2(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ME;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var s;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(s=e==null?void 0:e.optional)!=null?s:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(r2(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var o;const r=this.normalizeInstanceIdentifier(n),s=(o=this.onInitCallbacks.get(r))!=null?o:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:n2(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function n2(t){return t===br?void 0:t}function r2(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new t2(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const i2={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},o2=de.INFO,a2={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},c2=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=a2[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gl{constructor(e){this.name=e,this._logLevel=o2,this._logHandler=c2,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?i2[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const l2=(t,e)=>e.some(n=>t instanceof n);let Sf,Rf;function u2(){return Sf||(Sf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function h2(){return Rf||(Rf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kg=new WeakMap,qc=new WeakMap,Dg=new WeakMap,gc=new WeakMap,Kl=new WeakMap;function f2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kg.set(n,t)}).catch(()=>{}),Kl.set(e,t),e}function d2(t){if(qc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});qc.set(t,e)}let zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function p2(t){zc=t(zc)}function g2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return Dg.set(r,e.sort?e.sort():[e]),Zn(r)}:h2().includes(t)?function(...e){return t.apply(mc(this),e),Zn(kg.get(this))}:function(...e){return Zn(t.apply(mc(this),e))}}function m2(t){return typeof t=="function"?g2(t):(t instanceof IDBTransaction&&d2(t),l2(t,u2())?new Proxy(t,zc):t)}function Zn(t){if(t instanceof IDBRequest)return f2(t);if(gc.has(t))return gc.get(t);const e=m2(t);return e!==t&&(gc.set(t,e),Kl.set(e,t)),e}const mc=t=>Kl.get(t);function _2(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const y2=["get","getKey","getAll","getAllKeys","count"],v2=["put","add","delete","clear"],_c=new Map;function Pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=v2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||y2.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return _c.set(e,i),i}p2(t=>({...t,get:(e,n,r)=>Pf(e,n)||t.get(e,n,r),has:(e,n)=>!!Pf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(w2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function w2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gc="@firebase/app",Vf="0.14.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new Gl("@firebase/app"),T2="@firebase/app-compat",I2="@firebase/analytics-compat",A2="@firebase/analytics",C2="@firebase/app-check-compat",b2="@firebase/app-check",S2="@firebase/auth",R2="@firebase/auth-compat",P2="@firebase/database",V2="@firebase/data-connect",k2="@firebase/database-compat",D2="@firebase/functions",N2="@firebase/functions-compat",O2="@firebase/installations",M2="@firebase/installations-compat",L2="@firebase/messaging",x2="@firebase/messaging-compat",F2="@firebase/performance",U2="@firebase/performance-compat",$2="@firebase/remote-config",B2="@firebase/remote-config-compat",H2="@firebase/storage",j2="@firebase/storage-compat",q2="@firebase/firestore",z2="@firebase/ai",G2="@firebase/firestore-compat",K2="firebase",W2="12.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="[DEFAULT]",Q2={[Gc]:"fire-core",[T2]:"fire-core-compat",[A2]:"fire-analytics",[I2]:"fire-analytics-compat",[b2]:"fire-app-check",[C2]:"fire-app-check-compat",[S2]:"fire-auth",[R2]:"fire-auth-compat",[P2]:"fire-rtdb",[V2]:"fire-data-connect",[k2]:"fire-rtdb-compat",[D2]:"fire-fn",[N2]:"fire-fn-compat",[O2]:"fire-iid",[M2]:"fire-iid-compat",[L2]:"fire-fcm",[x2]:"fire-fcm-compat",[F2]:"fire-perf",[U2]:"fire-perf-compat",[$2]:"fire-rc",[B2]:"fire-rc-compat",[H2]:"fire-gcs",[j2]:"fire-gcs-compat",[q2]:"fire-fst",[G2]:"fire-fst-compat",[z2]:"fire-vertex","fire-js":"fire-js",[K2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,Y2=new Map,Wc=new Map;function kf(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(Wc.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;Wc.set(e,t);for(const n of Ho.values())kf(n,t);for(const n of Y2.values())kf(n,t);return!0}function Ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ut(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},er=new xi("app","Firebase",J2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=W2;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:Kc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw er.create("no-options");const i=Ho.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const o=new s2(s);for(const l of Wc.values())o.addComponent(l);const c=new X2(n,r,o);return Ho.set(s,c),c}function Wl(t=Kc){const e=Ho.get(t);if(!e&&t===Kc&&Pg())return Ng();if(!e)throw er.create("no-app",{appName:t});return e}function an(t,e,n){var o;let r=(o=Q2[t])!=null?o:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(c.join(" "));return}Nr(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="firebase-heartbeat-database",ew=1,Ai="firebase-heartbeat-store";let yc=null;function Og(){return yc||(yc=_2(Z2,ew,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ai)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),yc}async function tw(t){try{const n=(await Og()).transaction(Ai),r=await n.objectStore(Ai).get(Mg(t));return await n.done,r}catch(e){if(e instanceof mn)Rn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function Df(t,e){try{const r=(await Og()).transaction(Ai,"readwrite");await r.objectStore(Ai).put(e,Mg(t)),await r.done}catch(n){if(n instanceof mn)Rn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function Mg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=1024,rw=30;class sw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ow(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>rw){const o=aw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nf(),{heartbeatsToSend:r,unsentEntries:s}=iw(this._heartbeatsCache.heartbeats),i=Bo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Rn.warn(n),""}}}function Nf(){return new Date().toISOString().substring(0,10)}function iw(t,e=nw){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Of(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Of(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ow{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GE()?KE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await tw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Df(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Df(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Of(t){return Bo(JSON.stringify({version:2,heartbeats:t})).length}function aw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cw(t){Nr(new ar("platform-logger",e=>new E2(e),"PRIVATE")),Nr(new ar("heartbeat",e=>new sw(e),"PRIVATE")),an(Gc,Vf,t),an(Gc,Vf,"esm2020"),an("fire-js","")}cw("");function Lg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const lw=Lg,xg=new xi("auth","Firebase",Lg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jo=new Gl("@firebase/auth");function uw(t,...e){jo.logLevel<=de.WARN&&jo.warn(`Auth (${Is}): ${t}`,...e)}function To(t,...e){jo.logLevel<=de.ERROR&&jo.error(`Auth (${Is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t,...e){throw Ql(t,...e)}function cn(t,...e){return Ql(t,...e)}function Fg(t,e,n){const r={...lw(),[e]:n};return new xi("auth","Firebase",r).create(e,{appName:t.name})}function tr(t){return Fg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ql(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xg.create(t,...e)}function ae(t,e,...n){if(!t)throw Ql(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw To(e),new Error(e)}function Vn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function hw(){return Mf()==="http:"||Mf()==="https:"}function Mf(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(hw()||HE()||"connection"in navigator)?navigator.onLine:!0}function dw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=UE()||jE()}get(){return fw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],mw=new Ui(3e4,6e4);function wa(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function As(t,e,n,r,s={}){return $g(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Fi({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:l,...i};return BE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&mr(t.emulatorConfig.host)&&(h.credentials="include"),Ug.fetch()(await Hg(t,t.config.apiHost,n,c),h)})}async function $g(t,e,n){t._canInitEmulator=!1;const r={...pw,...e};try{const s=new _w(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw oo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw oo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw oo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw oo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Fg(t,f,h);Pn(t,f)}}catch(s){if(s instanceof mn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function Bg(t,e,n,r,s={}){const i=await As(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Hg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Yl(t.config,s):`${t.config.apiScheme}://${s}`;return gw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class _w{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),mw.get())})}}function oo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(t,e){return As(t,"POST","/v1/accounts:delete",e)}async function qo(t,e){return As(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vw(t,e=!1){const n=Ct(t),r=await n.getIdToken(e),s=Jl(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:hi(vc(s.auth_time)),issuedAtTime:hi(vc(s.iat)),expirationTime:hi(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Jl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const s=bg(n);return s?JSON.parse(s):(To("Failed to decode base64 JWT payload"),null)}catch(s){return To("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Lf(t){const e=Jl(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mn&&Ew(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ew({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!=null?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hi(this.lastLoginAt),this.creationTime=hi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Ci(t,qo(e,{idToken:n}));ae(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?jg(s.providerUserInfo):[],o=Iw(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Yc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function Tw(t){const e=Ct(t);await zo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Iw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aw(t,e){const n=await $g(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Hg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&mr(t.emulatorConfig.host)&&(l.credentials="include"),Ug.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cw(t,e){return As(t,"POST","/v2/accounts:revokeToken",wa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Lf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Lf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Aw(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ns;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new ww(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Yc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ci(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return vw(this,e)}reload(){return Tw(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ut(this.auth.app))return Promise.reject(tr(this.auth));const e=await this.getIdToken();return await Ci(this,yw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var N,x,$,Z,re,A,v,E;const r=(N=n.displayName)!=null?N:void 0,s=(x=n.email)!=null?x:void 0,i=($=n.phoneNumber)!=null?$:void 0,o=(Z=n.photoURL)!=null?Z:void 0,c=(re=n.tenantId)!=null?re:void 0,l=(A=n._redirectEventId)!=null?A:void 0,h=(v=n.createdAt)!=null?v:void 0,f=(E=n.lastLoginAt)!=null?E:void 0,{uid:p,emailVerified:g,isAnonymous:_,providerData:P,stsTokenManager:D}=n;ae(p&&D,e,"internal-error");const R=ns.fromJSON(this.name,D);ae(typeof p=="string",e,"internal-error"),Bn(r,e.name),Bn(s,e.name),ae(typeof g=="boolean",e,"internal-error"),ae(typeof _=="boolean",e,"internal-error"),Bn(i,e.name),Bn(o,e.name),Bn(c,e.name),Bn(l,e.name),Bn(h,e.name),Bn(f,e.name);const O=new Kt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:h,lastLoginAt:f});return P&&Array.isArray(P)&&(O.providerData=P.map(I=>({...I}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new ns;s.updateFromServerResponse(n);const i=new Kt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await zo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ns;c.updateFromIdToken(r);const l=new Kt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf=new Map;function An(t){Vn(t instanceof Function,"Expected a class definition");let e=xf.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qg.type="NONE";const Ff=qg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Io(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Io(this.userKey,s.apiKey,i),this.fullPersistenceKey=Io("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await qo(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(An(Ff),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||An(Ff);const o=Io(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const g=await qo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Kt._fromGetAccountInfoResponse(e,g,f)}else p=Kt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new rs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Wg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Yg(e))return"Blackberry";if(Jg(e))return"Webos";if(Gg(e))return"Safari";if((e.includes("chrome/")||Kg(e))&&!e.includes("edge/"))return"Chrome";if(Qg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zg(t=At()){return/firefox\//i.test(t)}function Gg(t=At()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kg(t=At()){return/crios\//i.test(t)}function Wg(t=At()){return/iemobile/i.test(t)}function Qg(t=At()){return/android/i.test(t)}function Yg(t=At()){return/blackberry/i.test(t)}function Jg(t=At()){return/webos/i.test(t)}function Xl(t=At()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function bw(t=At()){var e;return Xl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function Sw(){return qE()&&document.documentMode===10}function Xg(t=At()){return Xl(t)||Qg(t)||Jg(t)||Yg(t)||/windows phone/i.test(t)||Wg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t,e=[]){let n;switch(t){case"Browser":n=Uf(At());break;case"Worker":n=`${Uf(At())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t,e={}){return As(t,"GET","/v2/passwordPolicy",wa(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw=6;class kw{constructor(e){var r,s,i,o;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=n.minPasswordLength)!=null?r:Vw,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))!=null?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,s,i,o,c,l;const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=(r=n.meetsMinPasswordLength)!=null?r:!0),n.isValid&&(n.isValid=(s=n.meetsMaxPasswordLength)!=null?s:!0),n.isValid&&(n.isValid=(i=n.containsLowercaseLetter)!=null?i:!0),n.isValid&&(n.isValid=(o=n.containsUppercaseLetter)!=null?o:!0),n.isValid&&(n.isValid=(c=n.containsNumericCharacter)!=null?c:!0),n.isValid&&(n.isValid=(l=n.containsNonAlphanumericCharacter)!=null?l:!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $f(this),this.idTokenSubscription=new $f(this),this.beforeStateQueue=new Rw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await qo(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(Ut(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l==null?void 0:l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ut(this.app))return Promise.reject(tr(this));const n=e?Ct(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ut(this.app)?Promise.reject(tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ut(this.app)?Promise.reject(tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Pw(this),n=new kw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(n=this.currentUser)==null?void 0:n.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(Ut(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&uw(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ta(t){return Ct(t)}class $f{constructor(e){this.auth=e,this.observer=null,this.addObserver=XE(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Nw(t){Zl=t}function Ow(t){return Zl.loadJS(t)}function Mw(){return Zl.gapiScript}function Lw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t,e){const n=Ea(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,e!=null?e:{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function Fw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Uw(t,e,n){const r=Ta(t);ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=em(e),{host:o,port:c}=$w(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ae(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ae(Dr(h,r.config.emulator)&&Dr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,mr(o)?(ql(`${i}//${o}${l}`),zl("Auth",!0)):s||Bw()}function em(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $w(t){const e=em(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Bf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Bf(o)}}}function Bf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Bw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return Bg(t,"POST","/v1/accounts:signInWithIdp",wa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="http://localhost";class Or extends tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:Hw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i extends nm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends $i{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends $i{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends $i{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends $i{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Kt._fromIdTokenResponse(e,r,s),o=Hf(r);return new Mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Hf(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Hf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!=null?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function rm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function jw(t,e,n=!1){const r=await Ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e,n=!1){const{auth:r}=t;if(Ut(r.app))return Promise.reject(tr(r));const s="reauthenticate";try{const i=await Ci(t,rm(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=Jl(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Mr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e,n=!1){if(Ut(t.app))return Promise.reject(tr(t));const r="signIn",s=await rm(t,r,e),i=await Mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t,e){return Bg(t,"POST","/v1/accounts:signInWithCustomToken",wa(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){if(Ut(t.app))return Promise.reject(tr(t));const n=Ta(t),r=await Gw(n,{token:e,returnSecureToken:!0}),s=await Mr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function Kw(t,e,n,r){return Ct(t).onIdTokenChanged(e,n,r)}function Ww(t,e,n){return Ct(t).beforeAuthStateChanged(e,n)}function Qw(t,e,n,r){return Ct(t).onAuthStateChanged(e,n,r)}function Yw(t){return Ct(t).signOut()}const Ko="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ko,"1"),this.storage.removeItem(Ko),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=1e3,Xw=10;class im extends sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Sw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Xw):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Jw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}im.type="LOCAL";const Zw=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}om.type="SESSION";const am=om;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await eT(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=eu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function nT(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function iT(){return cm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebaseLocalStorageDb",oT=1,Wo="firebaseLocalStorage",um="fbase_key";class Bi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([Wo],e?"readwrite":"readonly").objectStore(Wo)}function aT(){const t=indexedDB.deleteDatabase(lm);return new Bi(t).toPromise()}function Jc(){const t=indexedDB.open(lm,oT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wo,{keyPath:um})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wo)?e(r):(r.close(),await aT(),e(await Jc()))})})}async function jf(t,e,n){const r=Aa(t,!0).put({[um]:e,value:n});return new Bi(r).toPromise()}async function cT(t,e){const n=Aa(t,!1).get(e),r=await new Bi(n).toPromise();return r===void 0?null:r.value}function qf(t,e){const n=Aa(t,!0).delete(e);return new Bi(n).toPromise()}const lT=800,uT=3;class hm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>uT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return cm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(iT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new tT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);!e||((n=e[0])==null?void 0:n.fulfilled)&&((r=e[0])==null?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jc();return await jf(e,Ko,"1"),await qf(e,Ko),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Aa(s,!1).getAll();return new Bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hm.type="LOCAL";const hT=hm;new Ui(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fT(t,e){return e?An(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu extends tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dT(t){return zw(t.auth,new tu(t),t.bypassAuthState)}function pT(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),qw(n,new tu(t),t.bypassAuthState)}async function gT(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),jw(n,new tu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return gT;case"reauthViaPopup":case"reauthViaRedirect":return pT;default:Pn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=new Ui(2e3,1e4);class Yr extends fm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=eu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mT.get())};e()}}Yr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T="pendingRedirect",Ao=new Map;class yT extends fm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ao.get(this.auth._key());if(!e){try{const r=await vT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ao.set(this.auth._key(),e)}return this.bypassAuthState||Ao.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vT(t,e){const n=TT(e),r=wT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ET(t,e){Ao.set(t._key(),e)}function wT(t){return An(t._redirectPersistence)}function TT(t){return Io(_T,t.config.apiKey,t.name)}async function IT(t,e,n=!1){if(Ut(t.app))return Promise.reject(tr(t));const r=Ta(t),s=fT(r,e),o=await new yT(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=10*60*1e3;class CT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(zf(e))}saveEventToCache(e){this.cachedEventUids.add(zf(e)),this.lastProcessedEventTime=Date.now()}}function zf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ST(t,e={}){return As(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PT=/^https?/;async function VT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ST(t);for(const n of e)try{if(kT(n))return}catch{}Pn(t,"unauthorized-domain")}function kT(t){const e=Qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!PT.test(n))return!1;if(RT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT=new Ui(3e4,6e4);function Gf(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var s,i,o;function r(){Gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gf(),n(cn(t,"network-request-failed"))},timeout:DT.get()})}if((i=(s=ln().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=ln().gapi)!=null&&o.load)r();else{const c=Lw("iframefcb");return ln()[c]=()=>{gapi.load?r():n(cn(t,"network-request-failed"))},Ow(`${Mw()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Co=null,e})}let Co=null;function OT(t){return Co=Co||NT(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT=new Ui(5e3,15e3),LT="__/auth/iframe",xT="emulator/auth/iframe",FT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $T(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Yl(e,xT):`https://${t.config.authDomain}/${LT}`,r={apiKey:e.apiKey,appName:t.name,v:Is},s=UT.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function BT(t){const e=await OT(t),n=ln().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:$T(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),c=ln().setTimeout(()=>{i(o)},MT.get());function l(){ln().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jT=500,qT=600,zT="_blank",GT="http://localhost";class Kf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KT(t,e,n,r=jT,s=qT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...HT,width:r.toString(),height:s.toString(),top:i,left:o},h=At().toLowerCase();n&&(c=Kg(h)?zT:n),zg(h)&&(e=e||GT,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,P])=>`${g}${_}=${P},`,"");if(bw(h)&&c!=="_self")return WT(e||"",c),new Kf(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new Kf(p)}function WT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT="__/auth/handler",YT="emulator/auth/handler",JT=encodeURIComponent("fac");async function Wf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Is,eventId:s};if(e instanceof nm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(i||{}))o[f]=p}if(e instanceof $i){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${JT}=${encodeURIComponent(l)}`:"";return`${XT(t)}?${Fi(c).slice(1)}${h}`}function XT({config:t}){return t.emulator?Yl(t,YT):`https://${t.authDomain}/${QT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec="webStorageSupport";class ZT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=am,this._completeRedirectFn=IT,this._overrideRedirectResult=ET}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wf(e,n,r,Qc(),s);return KT(e,i,eu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wf(e,n,r,Qc(),s);return nT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await BT(e),r=new CT(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ec];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=VT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xg()||Gg()||Xl()}}const eI=ZT;var Qf="@firebase/auth",Yf="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rI(t){Nr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zg(t)},h=new Dw(r,s,i,l);return Fw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new ar("auth-internal",e=>{const n=Ta(e.getProvider("auth").getImmediate());return(r=>new tI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),an(Qf,Yf,nI(t)),an(Qf,Yf,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=5*60,iI=Vg("authIdTokenMaxAge")||sI;let Jf=null;const oI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iI)return;const s=n==null?void 0:n.token;Jf!==s&&(Jf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function aI(t=Wl()){const e=Ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=xw(t,{popupRedirectResolver:eI,persistence:[hT,Zw,am]}),r=Vg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=oI(i.toString());Ww(n,o,()=>o(n.currentUser)),Kw(n,c=>o(c))}}const s=Sg("auth");return s&&Uw(n,`http://${s}`),n}function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))==null?void 0:t[0])!=null?e:document}Nw({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rI("Browser");var Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nr,pm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function E(){}E.prototype=v.prototype,A.F=v.prototype,A.prototype=new E,A.prototype.constructor=A,A.D=function(I,C,b){for(var w=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)w[$e-2]=arguments[$e];return v.prototype[C].apply(I,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,E){E||(E=0);const I=Array(16);if(typeof v=="string")for(var C=0;C<16;++C)I[C]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(C=0;C<16;++C)I[C]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=A.g[0],E=A.g[1],C=A.g[2];let b=A.g[3],w;w=v+(b^E&(C^b))+I[0]+3614090360&4294967295,v=E+(w<<7&4294967295|w>>>25),w=b+(C^v&(E^C))+I[1]+3905402710&4294967295,b=v+(w<<12&4294967295|w>>>20),w=C+(E^b&(v^E))+I[2]+606105819&4294967295,C=b+(w<<17&4294967295|w>>>15),w=E+(v^C&(b^v))+I[3]+3250441966&4294967295,E=C+(w<<22&4294967295|w>>>10),w=v+(b^E&(C^b))+I[4]+4118548399&4294967295,v=E+(w<<7&4294967295|w>>>25),w=b+(C^v&(E^C))+I[5]+1200080426&4294967295,b=v+(w<<12&4294967295|w>>>20),w=C+(E^b&(v^E))+I[6]+2821735955&4294967295,C=b+(w<<17&4294967295|w>>>15),w=E+(v^C&(b^v))+I[7]+4249261313&4294967295,E=C+(w<<22&4294967295|w>>>10),w=v+(b^E&(C^b))+I[8]+1770035416&4294967295,v=E+(w<<7&4294967295|w>>>25),w=b+(C^v&(E^C))+I[9]+2336552879&4294967295,b=v+(w<<12&4294967295|w>>>20),w=C+(E^b&(v^E))+I[10]+4294925233&4294967295,C=b+(w<<17&4294967295|w>>>15),w=E+(v^C&(b^v))+I[11]+2304563134&4294967295,E=C+(w<<22&4294967295|w>>>10),w=v+(b^E&(C^b))+I[12]+1804603682&4294967295,v=E+(w<<7&4294967295|w>>>25),w=b+(C^v&(E^C))+I[13]+4254626195&4294967295,b=v+(w<<12&4294967295|w>>>20),w=C+(E^b&(v^E))+I[14]+2792965006&4294967295,C=b+(w<<17&4294967295|w>>>15),w=E+(v^C&(b^v))+I[15]+1236535329&4294967295,E=C+(w<<22&4294967295|w>>>10),w=v+(C^b&(E^C))+I[1]+4129170786&4294967295,v=E+(w<<5&4294967295|w>>>27),w=b+(E^C&(v^E))+I[6]+3225465664&4294967295,b=v+(w<<9&4294967295|w>>>23),w=C+(v^E&(b^v))+I[11]+643717713&4294967295,C=b+(w<<14&4294967295|w>>>18),w=E+(b^v&(C^b))+I[0]+3921069994&4294967295,E=C+(w<<20&4294967295|w>>>12),w=v+(C^b&(E^C))+I[5]+3593408605&4294967295,v=E+(w<<5&4294967295|w>>>27),w=b+(E^C&(v^E))+I[10]+38016083&4294967295,b=v+(w<<9&4294967295|w>>>23),w=C+(v^E&(b^v))+I[15]+3634488961&4294967295,C=b+(w<<14&4294967295|w>>>18),w=E+(b^v&(C^b))+I[4]+3889429448&4294967295,E=C+(w<<20&4294967295|w>>>12),w=v+(C^b&(E^C))+I[9]+568446438&4294967295,v=E+(w<<5&4294967295|w>>>27),w=b+(E^C&(v^E))+I[14]+3275163606&4294967295,b=v+(w<<9&4294967295|w>>>23),w=C+(v^E&(b^v))+I[3]+4107603335&4294967295,C=b+(w<<14&4294967295|w>>>18),w=E+(b^v&(C^b))+I[8]+1163531501&4294967295,E=C+(w<<20&4294967295|w>>>12),w=v+(C^b&(E^C))+I[13]+2850285829&4294967295,v=E+(w<<5&4294967295|w>>>27),w=b+(E^C&(v^E))+I[2]+4243563512&4294967295,b=v+(w<<9&4294967295|w>>>23),w=C+(v^E&(b^v))+I[7]+1735328473&4294967295,C=b+(w<<14&4294967295|w>>>18),w=E+(b^v&(C^b))+I[12]+2368359562&4294967295,E=C+(w<<20&4294967295|w>>>12),w=v+(E^C^b)+I[5]+4294588738&4294967295,v=E+(w<<4&4294967295|w>>>28),w=b+(v^E^C)+I[8]+2272392833&4294967295,b=v+(w<<11&4294967295|w>>>21),w=C+(b^v^E)+I[11]+1839030562&4294967295,C=b+(w<<16&4294967295|w>>>16),w=E+(C^b^v)+I[14]+4259657740&4294967295,E=C+(w<<23&4294967295|w>>>9),w=v+(E^C^b)+I[1]+2763975236&4294967295,v=E+(w<<4&4294967295|w>>>28),w=b+(v^E^C)+I[4]+1272893353&4294967295,b=v+(w<<11&4294967295|w>>>21),w=C+(b^v^E)+I[7]+4139469664&4294967295,C=b+(w<<16&4294967295|w>>>16),w=E+(C^b^v)+I[10]+3200236656&4294967295,E=C+(w<<23&4294967295|w>>>9),w=v+(E^C^b)+I[13]+681279174&4294967295,v=E+(w<<4&4294967295|w>>>28),w=b+(v^E^C)+I[0]+3936430074&4294967295,b=v+(w<<11&4294967295|w>>>21),w=C+(b^v^E)+I[3]+3572445317&4294967295,C=b+(w<<16&4294967295|w>>>16),w=E+(C^b^v)+I[6]+76029189&4294967295,E=C+(w<<23&4294967295|w>>>9),w=v+(E^C^b)+I[9]+3654602809&4294967295,v=E+(w<<4&4294967295|w>>>28),w=b+(v^E^C)+I[12]+3873151461&4294967295,b=v+(w<<11&4294967295|w>>>21),w=C+(b^v^E)+I[15]+530742520&4294967295,C=b+(w<<16&4294967295|w>>>16),w=E+(C^b^v)+I[2]+3299628645&4294967295,E=C+(w<<23&4294967295|w>>>9),w=v+(C^(E|~b))+I[0]+4096336452&4294967295,v=E+(w<<6&4294967295|w>>>26),w=b+(E^(v|~C))+I[7]+1126891415&4294967295,b=v+(w<<10&4294967295|w>>>22),w=C+(v^(b|~E))+I[14]+2878612391&4294967295,C=b+(w<<15&4294967295|w>>>17),w=E+(b^(C|~v))+I[5]+4237533241&4294967295,E=C+(w<<21&4294967295|w>>>11),w=v+(C^(E|~b))+I[12]+1700485571&4294967295,v=E+(w<<6&4294967295|w>>>26),w=b+(E^(v|~C))+I[3]+2399980690&4294967295,b=v+(w<<10&4294967295|w>>>22),w=C+(v^(b|~E))+I[10]+4293915773&4294967295,C=b+(w<<15&4294967295|w>>>17),w=E+(b^(C|~v))+I[1]+2240044497&4294967295,E=C+(w<<21&4294967295|w>>>11),w=v+(C^(E|~b))+I[8]+1873313359&4294967295,v=E+(w<<6&4294967295|w>>>26),w=b+(E^(v|~C))+I[15]+4264355552&4294967295,b=v+(w<<10&4294967295|w>>>22),w=C+(v^(b|~E))+I[6]+2734768916&4294967295,C=b+(w<<15&4294967295|w>>>17),w=E+(b^(C|~v))+I[13]+1309151649&4294967295,E=C+(w<<21&4294967295|w>>>11),w=v+(C^(E|~b))+I[4]+4149444226&4294967295,v=E+(w<<6&4294967295|w>>>26),w=b+(E^(v|~C))+I[11]+3174756917&4294967295,b=v+(w<<10&4294967295|w>>>22),w=C+(v^(b|~E))+I[2]+718787259&4294967295,C=b+(w<<15&4294967295|w>>>17),w=E+(b^(C|~v))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(C+(w<<21&4294967295|w>>>11))&4294967295,A.g[2]=A.g[2]+C&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.v=function(A,v){v===void 0&&(v=A.length);const E=v-this.blockSize,I=this.C;let C=this.h,b=0;for(;b<v;){if(C==0)for(;b<=E;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<v;)if(I[C++]=A.charCodeAt(b++),C==this.blockSize){s(this,I),C=0;break}}else for(;b<v;)if(I[C++]=A[b++],C==this.blockSize){s(this,I),C=0;break}}this.h=C,this.o+=v},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var E=A.length-8;E<A.length;++E)A[E]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,E=0;E<4;++E)for(let I=0;I<32;I+=8)A[v++]=this.g[E]>>>I&255;return A};function i(A,v){var E=c;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=v(A)}function o(A,v){this.h=v;const E=[];let I=!0;for(let C=A.length-1;C>=0;C--){const b=A[C]|0;I&&b==v||(E[C]=b,I=!1)}this.g=E}var c={};function l(A){return-128<=A&&A<128?i(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return R(h(-A));const v=[];let E=1;for(let I=0;A>=E;I++)v[I]=A/E|0,E*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return R(f(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=h(Math.pow(v,8));let I=p;for(let b=0;b<A.length;b+=8){var C=Math.min(8,A.length-b);const w=parseInt(A.substring(b,b+C),v);C<8?(C=h(Math.pow(v,C)),I=I.j(C).add(h(w))):(I=I.j(E),I=I.add(h(w)))}return I}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-R(this).m();let A=0,v=1;for(let E=0;E<this.g.length;E++){const I=this.i(E);A+=(I>=0?I:4294967296+I)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(D(this))return"-"+R(this).toString(A);const v=h(Math.pow(A,6));var E=this;let I="";for(;;){const C=$(E,v).g;E=O(E,C.j(v));let b=((E.g.length>0?E.g[0]:E.h)>>>0).toString(A);if(E=C,P(E))return b+I;for(;b.length<6;)b="0"+b;I=b+I}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=O(this,A),D(A)?-1:P(A)?0:1};function R(A){const v=A.g.length,E=[];for(let I=0;I<v;I++)E[I]=~A.g[I];return new o(E,~A.h).add(g)}t.abs=function(){return D(this)?R(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),E=[];let I=0;for(let C=0;C<=v;C++){let b=I+(this.i(C)&65535)+(A.i(C)&65535),w=(b>>>16)+(this.i(C)>>>16)+(A.i(C)>>>16);I=w>>>16,b&=65535,w&=65535,E[C]=w<<16|b}return new o(E,E[E.length-1]&-2147483648?-1:0)};function O(A,v){return A.add(R(v))}t.j=function(A){if(P(this)||P(A))return p;if(D(this))return D(A)?R(this).j(R(A)):R(R(this).j(A));if(D(A))return R(this.j(R(A)));if(this.l(_)<0&&A.l(_)<0)return h(this.m()*A.m());const v=this.g.length+A.g.length,E=[];for(var I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(let C=0;C<A.g.length;C++){const b=this.i(I)>>>16,w=this.i(I)&65535,$e=A.i(C)>>>16,ot=A.i(C)&65535;E[2*I+2*C]+=w*ot,N(E,2*I+2*C),E[2*I+2*C+1]+=b*ot,N(E,2*I+2*C+1),E[2*I+2*C+1]+=w*$e,N(E,2*I+2*C+1),E[2*I+2*C+2]+=b*$e,N(E,2*I+2*C+2)}for(A=0;A<v;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=v;A<2*v;A++)E[A]=0;return new o(E,0)};function N(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function x(A,v){this.g=A,this.h=v}function $(A,v){if(P(v))throw Error("division by zero");if(P(A))return new x(p,p);if(D(A))return v=$(R(A),v),new x(R(v.g),R(v.h));if(D(v))return v=$(A,R(v)),new x(R(v.g),v.h);if(A.g.length>30){if(D(A)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=v;I.l(A)<=0;)E=Z(E),I=Z(I);var C=re(E,1),b=re(I,1);for(I=re(I,2),E=re(E,2);!P(I);){var w=b.add(I);w.l(A)<=0&&(C=C.add(E),b=w),I=re(I,1),E=re(E,1)}return v=O(A,C.j(v)),new x(C,v)}for(C=p;A.l(v)>=0;){for(E=Math.max(1,Math.floor(A.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),b=h(E),w=b.j(v);D(w)||w.l(A)>0;)E-=I,b=h(E),w=b.j(v);P(b)&&(b=g),C=C.add(b),A=O(A,w)}return new x(C,A)}t.B=function(A){return $(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),E=[];for(let I=0;I<v;I++)E[I]=this.i(I)&A.i(I);return new o(E,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),E=[];for(let I=0;I<v;I++)E[I]=this.i(I)|A.i(I);return new o(E,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),E=[];for(let I=0;I<v;I++)E[I]=this.i(I)^A.i(I);return new o(E,this.h^A.h)};function Z(A){const v=A.g.length+1,E=[];for(let I=0;I<v;I++)E[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(E,A.h)}function re(A,v){const E=v>>5;v%=32;const I=A.g.length-E,C=[];for(let b=0;b<I;b++)C[b]=v>0?A.i(b+E)>>>v|A.i(b+E+1)<<32-v:A.i(b+E);return new o(C,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,pm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,nr=o}).apply(typeof Xf<"u"?Xf:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var gm,Qs,mm,bo,Xc,_m,ym,vm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],m;for(m in u)Object.prototype.hasOwnProperty.call(u,m)&&d.push([m,u[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function h(a,u,d){return h=l,h.apply(null,arguments)}function f(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,S,k){for(var G=Array(arguments.length-2),he=2;he<arguments.length;he++)G[he-2]=arguments[he];return u.prototype[S].apply(m,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function P(a,u){for(let m=1;m<arguments.length;m++){const S=arguments[m];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const k=S.length||0;a.length=d+k;for(let G=0;G<k;G++)a[d+G]=S[G]}else a.push(S)}}class D{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function R(a){o.setTimeout(()=>{throw a},0)}function O(){var a=A;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class N{constructor(){this.h=this.g=null}add(u,d){const m=x.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var x=new D(()=>new $,a=>a.reset());class ${constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Z,re=!1,A=new N,v=()=>{const a=Promise.resolve(void 0);Z=()=>{a.then(E)}};function E(){for(var a;a=O();){try{a.h.call(a.g)}catch(d){R(d)}var u=x;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}re=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function C(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}C.prototype.h=function(){this.defaultPrevented=!0};var b=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function w(a){return/^[\s\xa0]*$/.test(a)}function $e(a,u){C.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}p($e,C),$e.prototype.init=function(a,u){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ot="closure_listenable_"+(Math.random()*1e6|0),Fe=0;function Ie(a,u,d,m,S){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=S,this.key=++Fe,this.da=this.fa=!1}function pe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Vt(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function Xt(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Mt(a){const u={};for(const d in a)u[d]=a[d];return u}const at="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _n(a,u){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let k=0;k<at.length;k++)d=at[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function qt(a){this.src=a,this.g={},this.h=0}qt.prototype.add=function(a,u,d,m,S){const k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);const G=dt(a,u,m,S);return G>-1?(u=a[G],d||(u.fa=!1)):(u=new Ie(u,this.src,k,!!m,S),u.fa=d,a.push(u)),u};function Nn(a,u){const d=u.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,u,void 0),k;(k=S>=0)&&Array.prototype.splice.call(m,S,1),k&&(pe(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function dt(a,u,d,m){for(let S=0;S<a.length;++S){const k=a[S];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return S}return-1}var L="closure_lm_"+(Math.random()*1e6|0),J={};function W(a,u,d,m,S){if(m&&m.once)return Pe(a,u,d,m,S);if(Array.isArray(u)){for(let k=0;k<u.length;k++)W(a,u[k],d,m,S);return null}return d=K(d),a&&a[ot]?a.J(u,d,c(m)?!!m.capture:!!m,S):ee(a,u,d,!1,m,S)}function ee(a,u,d,m,S,k){if(!u)throw Error("Invalid event type");const G=c(S)?!!S.capture:!!S;let he=M(a);if(he||(a[L]=he=new qt(a)),d=he.add(u,d,m,G,k),d.proxy)return d;if(m=we(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)b||(S=G),S===void 0&&(S=!1),a.addEventListener(u.toString(),m,S);else if(a.attachEvent)a.attachEvent(V(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function we(){function a(d){return u.call(a.src,a.listener,d)}const u=B;return a}function Pe(a,u,d,m,S){if(Array.isArray(u)){for(let k=0;k<u.length;k++)Pe(a,u[k],d,m,S);return null}return d=K(d),a&&a[ot]?a.K(u,d,c(m)?!!m.capture:!!m,S):ee(a,u,d,!0,m,S)}function y(a,u,d,m,S){if(Array.isArray(u))for(var k=0;k<u.length;k++)y(a,u[k],d,m,S);else m=c(m)?!!m.capture:!!m,d=K(d),a&&a[ot]?(a=a.i,k=String(u).toString(),k in a.g&&(u=a.g[k],d=dt(u,d,m,S),d>-1&&(pe(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[k],a.h--)))):a&&(a=M(a))&&(u=a.g[u.toString()],a=-1,u&&(a=dt(u,d,m,S)),(d=a>-1?u[a]:null)&&T(d))}function T(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[ot])Nn(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(V(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=M(u))?(Nn(d,a),d.h==0&&(d.src=null,u[L]=null)):pe(a)}}}function V(a){return a in J?J[a]:J[a]="on"+a}function B(a,u){if(a.da)a=!0;else{u=new $e(u,this);const d=a.listener,m=a.ha||a.src;a.fa&&T(a),a=d.call(m,u)}return a}function M(a){return a=a[L],a instanceof qt?a:null}var U="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[U]||(a[U]=function(u){return a.handleEvent(u)}),a[U])}function z(){I.call(this),this.i=new qt(this),this.M=this,this.G=null}p(z,I),z.prototype[ot]=!0,z.prototype.removeEventListener=function(a,u,d,m){y(this,a,u,d,m)};function j(a,u){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new C(u,a);else if(u instanceof C)u.target=u.target||a;else{var S=u;u=new C(m,a),_n(u,S)}S=!0;let k,G;if(d)for(G=d.length-1;G>=0;G--)k=u.g=d[G],S=q(k,m,!0,u)&&S;if(k=u.g=a,S=q(k,m,!0,u)&&S,S=q(k,m,!1,u)&&S,d)for(G=0;G<d.length;G++)k=u.g=d[G],S=q(k,m,!1,u)&&S}z.prototype.N=function(){if(z.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let m=0;m<d.length;m++)pe(d[m]);delete a.g[u],a.h--}}this.G=null},z.prototype.J=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},z.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function q(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let k=0;k<u.length;++k){const G=u[k];if(G&&!G.da&&G.capture==d){const he=G.listener,Je=G.ha||G.src;G.fa&&Nn(a.i,G),S=he.call(Je,m)!==!1&&S}}return S&&!m.defaultPrevented}function se(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Q(a){a.g=se(()=>{a.g=null,a.i&&(a.i=!1,Q(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class te extends I{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Q(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(a){I.call(this),this.h=a,this.g={}}p(ie,I);var fe=[];function Se(a){Vt(a.g,function(u,d){this.g.hasOwnProperty(d)&&T(u)},a),a.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Se(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ye=o.JSON.stringify,pt=o.JSON.parse,tt=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function kt(){}function gt(){}var zt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Fr(){C.call(this,"d")}p(Fr,C);function ct(){C.call(this,"c")}p(ct,C);var nt={},Vs=null;function yr(){return Vs=Vs||new z}nt.Ia="serverreachability";function Lu(a){C.call(this,nt.Ia,a)}p(Lu,C);function ks(a){const u=yr();j(u,new Lu(u))}nt.STAT_EVENT="statevent";function xu(a,u){C.call(this,nt.STAT_EVENT,a),this.stat=u}p(xu,C);function bt(a){const u=yr();j(u,new xu(u,a))}nt.Ja="timingevent";function Fu(a,u){C.call(this,nt.Ja,a),this.size=u}p(Fu,C);function Ds(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function Ns(){this.g=!0}Ns.prototype.ua=function(){this.g=!1};function Q1(a,u,d,m,S,k){a.info(function(){if(a.g)if(k){var G="",he=k.split("&");for(let Ve=0;Ve<he.length;Ve++){var Je=he[Ve].split("=");if(Je.length>1){const rt=Je[0];Je=Je[1];const en=rt.split("_");G=en.length>=2&&en[1]=="type"?G+(rt+"="+Je+"&"):G+(rt+"=redacted&")}}}else G=null;else G=k;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+u+`
`+d+`
`+G})}function Y1(a,u,d,m,S,k,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+u+`
`+d+`
`+k+" "+G})}function Ur(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+X1(a,d)+(m?" "+m:"")})}function J1(a,u){a.info(function(){return"TIMEOUT: "+u})}Ns.prototype.info=function(){};function X1(a,u){if(!a.g)return u;if(!u)return null;try{const k=JSON.parse(u);if(k){for(a=0;a<k.length;a++)if(Array.isArray(k[a])){var d=k[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let G=1;G<m.length;G++)m[G]=""}}}}return ye(k)}catch{return u}}var Gi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Uu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function Ba(){}p(Ba,kt),Ba.prototype.g=function(){return new XMLHttpRequest},$u=new Ba;function Os(a){return encodeURIComponent(String(a))}function Z1(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function On(a,u,d,m){this.j=a,this.i=u,this.l=d,this.S=m||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var Hu={},Ha={};function ja(a,u,d){a.M=1,a.A=Wi(Zt(u)),a.u=d,a.R=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),Ki(a),a.B=Zt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),nh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Bu,a.g=Eh(a.j,d?u:null,!a.u),a.P>0&&(a.O=new te(h(a.Y,a,a.g),a.P)),u=a.V,d=a.g,m=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(fe[0]=S.toString()),S=fe);for(let k=0;k<S.length;k++){const G=W(d,S[k],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.J?Mt(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),ks(),Q1(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const u=this.O;u&&xn(a)==3?u.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const he=xn(this.g),Je=this.g.ya(),Ve=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||lh(this.g)))){this.K||he!=4||Je==7||(Je==8||Ve<=0?ks(3):ks(2)),qa(this);var u=this.g.ca();this.X=u;var d=e_(this);if(this.o=u==200,Y1(this.i,this.v,this.B,this.l,this.S,he,u),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(m)){var k=m;break t}}k=null}if(a=k)Ur(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,za(this,a);else{this.o=!1,this.m=3,bt(12),vr(this),Ms(this);break e}}if(this.R){a=!0;let rt;for(;!this.K&&this.C<d.length;)if(rt=t_(this,d),rt==Ha){he==4&&(this.m=4,bt(14),a=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(rt==Hu){this.m=4,bt(15),Ur(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else Ur(this.i,this.l,rt,null),za(this,rt);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,bt(16),a=!1),this.o=this.o&&a,!a)Ur(this.i,this.l,d,"[Invalid Chunked Response]"),vr(this),Ms(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Za(G),G.P=!0,bt(11))}}else Ur(this.i,this.l,d,null),za(this,d);he==4&&vr(this),this.o&&!this.K&&(he==4?mh(this.j,this):(this.o=!1,Ki(this)))}else g_(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,bt(12)):(this.m=0,bt(13)),vr(this),Ms(this)}}}catch{}finally{}};function e_(a){if(!qu(a))return a.g.la();const u=lh(a.g);if(u==="")return"";let d="";const m=u.length,S=xn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return vr(a),Ms(a),"";a.h.i=new o.TextDecoder}for(let k=0;k<m;k++)a.h.h=!0,d+=a.h.i.decode(u[k],{stream:!(S&&k==m-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function qu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function t_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Ha:(d=Number(u.substring(d,m)),isNaN(d)?Hu:(m+=1,m+d>u.length?Ha:(u=u.slice(m,m+d),a.C=m+d,u)))}On.prototype.cancel=function(){this.K=!0,vr(this)};function Ki(a){a.T=Date.now()+a.H,zu(a,a.H)}function zu(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ds(h(a.aa,a),u)}function qa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(J1(this.i,this.B),this.M!=2&&(ks(),bt(17)),vr(this),this.m=2,Ms(this)):zu(this,this.T-a)};function Ms(a){a.j.I==0||a.K||mh(a.j,a)}function vr(a){qa(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,Se(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function za(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Ga(d.h,a))){if(!a.L&&Ga(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Zi(d),Ji(d);else break e;Xa(d),bt(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ds(h(d.Va,d),6e3));Wu(d.h)<=1&&d.ta&&(d.ta=void 0)}else wr(d,11)}else if((a.L||d.g==a)&&Zi(d),!w(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let Ve=S[u];const rt=Ve[0];if(!(rt<=d.K))if(d.K=rt,Ve=Ve[1],d.I==2)if(Ve[0]=="c"){d.M=Ve[1],d.ba=Ve[2];const en=Ve[3];en!=null&&(d.ka=en,d.j.info("VER="+d.ka));const Tr=Ve[4];Tr!=null&&(d.za=Tr,d.j.info("SVER="+d.za));const Fn=Ve[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(m=1.5*Fn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Un=a.g;if(Un){const to=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(to){var k=m.h;k.g||to.indexOf("spdy")==-1&&to.indexOf("quic")==-1&&to.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ka(k,k.h),k.h=null))}if(m.G){const ec=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(m.wa=ec,Le(m.J,m.G,ec))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var G=a;if(m.na=vh(m,m.L?m.ba:null,m.W),G.L){Qu(m.h,G);var he=G,Je=m.O;Je&&(he.H=Je),he.D&&(qa(he),Ki(he)),m.g=G}else ph(m);d.i.length>0&&Xi(d)}else Ve[0]!="stop"&&Ve[0]!="close"||wr(d,7);else d.I==3&&(Ve[0]=="stop"||Ve[0]=="close"?Ve[0]=="stop"?wr(d,7):Ja(d):Ve[0]!="noop"&&d.l&&d.l.qa(Ve),d.A=0)}}ks(4)}catch{}}var n_=class{constructor(a,u){this.g=a,this.map=u}};function Gu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ku(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function Ga(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Ka(a,u){a.g?a.g.add(u):a.h=u}function Qu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Gu.prototype.cancel=function(){if(this.i=Yu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yu(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return _(a.i)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function r_(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let S,k=null;m>=0?(S=a[d].substring(0,m),k=a[d].substring(m+1)):S=a[d],u(S,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof Mn?(this.l=a.l,Ls(this,a.j),this.o=a.o,this.g=a.g,xs(this,a.u),this.h=a.h,Wa(this,rh(a.i)),this.m=a.m):a&&(u=String(a).match(Ju))?(this.l=!1,Ls(this,u[1]||"",!0),this.o=Fs(u[2]||""),this.g=Fs(u[3]||"",!0),xs(this,u[4]),this.h=Fs(u[5]||"",!0),Wa(this,u[6]||"",!0),this.m=Fs(u[7]||"")):(this.l=!1,this.i=new $s(null,this.l))}Mn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(Us(u,Xu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Us(u,Xu,!0),"@"),a.push(Os(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Us(d,d.charAt(0)=="/"?o_:i_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Us(d,c_)),a.join("")},Mn.prototype.resolve=function(a){const u=Zt(this);let d=!!a.j;d?Ls(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var m=a.h;if(d)xs(u,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=u.h.lastIndexOf("/");S!=-1&&(m=u.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const k=[];for(let G=0;G<S.length;){const he=S[G++];he=="."?m&&G==S.length&&k.push(""):he==".."?((k.length>1||k.length==1&&k[0]!="")&&k.pop(),m&&G==S.length&&k.push("")):(k.push(he),m=!0)}m=k.join("/")}else m=S}return d?u.h=m:d=a.i.toString()!=="",d?Wa(u,rh(a.i)):d=!!a.m,d&&(u.m=a.m),u};function Zt(a){return new Mn(a)}function Ls(a,u,d){a.j=d?Fs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function xs(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function Wa(a,u,d){u instanceof $s?(a.i=u,l_(a.i,a.l)):(d||(u=Us(u,a_)),a.i=new $s(u,a.l))}function Le(a,u,d){a.i.set(u,d)}function Wi(a){return Le(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Fs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Us(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,s_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function s_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,i_=/[#\?:]/g,o_=/[#\?]/g,a_=/[#\?@]/g,c_=/#/g;function $s(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Er(a){a.g||(a.g=new Map,a.h=0,a.i&&r_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=$s.prototype,t.add=function(a,u){Er(this),this.i=null,a=$r(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Zu(a,u){Er(a),u=$r(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function eh(a,u){return Er(a),u=$r(a,u),a.g.has(u)}t.forEach=function(a,u){Er(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(u,S,m,this)},this)},this)};function th(a,u){Er(a);let d=[];if(typeof u=="string")eh(a,u)&&(d=d.concat(a.g.get($r(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}t.set=function(a,u){return Er(this),this.i=null,a=$r(this,a),eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=th(this,a),a.length>0?String(a[0]):u):u};function nh(a,u,d){Zu(a,u),d.length>0&&(a.i=null,a.g.set($r(a,u),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let m=0;m<u.length;m++){var d=u[m];const S=Os(d);d=th(this,d);for(let k=0;k<d.length;k++){let G=S;d[k]!==""&&(G+="="+Os(d[k])),a.push(G)}}return this.i=a.join("&")};function rh(a){const u=new $s;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function $r(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function l_(a,u){u&&!a.j&&(Er(a),a.i=null,a.g.forEach(function(d,m){const S=m.toLowerCase();m!=S&&(Zu(this,m),nh(this,S,d))},a)),a.j=u}function u_(a,u){const d=new Ns;if(o.Image){const m=new Image;m.onload=f(Ln,d,"TestLoadImage: loaded",!0,u,m),m.onerror=f(Ln,d,"TestLoadImage: error",!1,u,m),m.onabort=f(Ln,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=f(Ln,d,"TestLoadImage: timeout",!1,u,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function h_(a,u){const d=new Ns,m=new AbortController,S=setTimeout(()=>{m.abort(),Ln(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(S),k.ok?Ln(d,"TestPingServer: ok",!0,u):Ln(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),Ln(d,"TestPingServer: error",!1,u)})}function Ln(a,u,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function f_(){this.g=new tt}function Qa(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Qa,kt),Qa.prototype.g=function(){return new Qi(this.i,this.h)};function Qi(a,u){z.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Qi,z),t=Qi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,Hs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Bs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Hs(this)),this.g&&(this.readyState=3,Hs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Bs(this):Hs(this),this.readyState==3&&sh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Bs(this))},t.Na=function(a){this.g&&(this.response=a,Bs(this))},t.ga=function(){this.g&&Bs(this)};function Bs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Hs(a)}t.setRequestHeader=function(a,u){this.A.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Hs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ih(a){let u="";return Vt(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ya(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ih(d),typeof a=="string"?d!=null&&Os(d):Le(a,u,d))}function Be(a){z.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Be,z);var d_=/^https?$/i,p_=["POST","PUT"];t=Be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=g(h(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){oh(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(p_,u,void 0)>=0)||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,G]of d)this.g.setRequestHeader(k,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(k){oh(this,k)}};function oh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,ah(a),Yi(a)}function ah(a){a.A||(a.A=!0,j(a,"complete"),j(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,j(this,"complete"),j(this,"abort"),Yi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yi(this,!0)),Be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ch(this):this.Xa())},t.Xa=function(){ch(this)};function ch(a){if(a.h&&typeof i<"u"){if(a.v&&xn(a)==4)setTimeout(a.Ca.bind(a),0);else if(j(a,"readystatechange"),xn(a)==4){a.h=!1;try{const k=a.ca();e:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=k===0){let G=String(a.D).match(Ju)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),m=!d_.test(G?G.toLowerCase():"")}d=m}if(d)j(a,"complete"),j(a,"success");else{a.o=6;try{var S=xn(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",ah(a)}}finally{Yi(a)}}}}function Yi(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||j(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return xn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),pt(u)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function g_(a){const u={};a=(a.g&&xn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(w(a[m]))continue;var d=Z1(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[S]||[];u[S]=k,k.push(d)}Xt(u,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function js(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function uh(a){this.za=0,this.i=[],this.j=new Ns,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=js("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=js("baseRetryDelayMs",5e3,a),this.Za=js("retryDelaySeedMs",1e4,a),this.Ta=js("forwardChannelMaxRetries",2,a),this.va=js("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Gu(a&&a.concurrentRequestLimit),this.Ba=new f_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=uh.prototype,t.ka=8,t.I=1,t.connect=function(a,u,d,m){bt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=vh(this,null,this.W),Xi(this)};function Ja(a){if(hh(a),a.I==3){var u=a.V++,d=Zt(a.J);if(Le(d,"SID",a.M),Le(d,"RID",u),Le(d,"TYPE","terminate"),qs(a,d),u=new On(a,a.j,u),u.M=2,u.A=Wi(Zt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Eh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ki(u)}yh(a)}function Ji(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function hh(a){Ji(a),a.v&&(o.clearTimeout(a.v),a.v=null),Zi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Xi(a){if(!Ku(a.h)&&!a.m){a.m=!0;var u=a.Ea;Z||v(),re||(Z(),re=!0),A.add(u,a),a.D=0}}function m_(a,u){return Wu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ds(h(a.Ea,a,u),_h(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new On(this,this.j,a);let k=this.o;if(this.U&&(k?(k=Mt(k),_n(k,this.U)):k=this.U),this.u!==null||this.R||(S.J=k,k=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=dh(this,S,u),d=Zt(this.J),Le(d,"RID",a),Le(d,"CVER",22),this.G&&Le(d,"X-HTTP-Session-Id",this.G),qs(this,d),k&&(this.R?u="headers="+Os(ih(k))+"&"+u:this.u&&Ya(d,this.u,k)),Ka(this.h,S),this.Ra&&Le(d,"TYPE","init"),this.S?(Le(d,"$req",u),Le(d,"SID","null"),S.U=!0,ja(S,d,null)):ja(S,d,u),this.I=2}}else this.I==3&&(a?fh(this,a):this.i.length==0||Ku(this.h)||fh(this))};function fh(a,u){var d;u?d=u.l:d=a.V++;const m=Zt(a.J);Le(m,"SID",a.M),Le(m,"RID",d),Le(m,"AID",a.K),qs(a,m),a.u&&a.o&&Ya(m,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=dh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ka(a.h,d),ja(d,m,u)}function qs(a,u){a.H&&Vt(a.H,function(d,m){Le(u,m,d)}),a.l&&Vt({},function(d,m){Le(u,m,d)})}function dh(a,u,d){d=Math.min(a.i.length,d);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var S=a.i;let he=-1;for(;;){const Je=["count="+d];he==-1?d>0?(he=S[0].g,Je.push("ofs="+he)):he=0:Je.push("ofs="+he);let Ve=!0;for(let rt=0;rt<d;rt++){var k=S[rt].g;const en=S[rt].map;if(k-=he,k<0)he=Math.max(0,S[rt].g-100),Ve=!1;else try{k="req"+k+"_"||"";try{var G=en instanceof Map?en:Object.entries(en);for(const[Tr,Fn]of G){let Un=Fn;c(Fn)&&(Un=ye(Fn)),Je.push(k+Tr+"="+encodeURIComponent(Un))}}catch(Tr){throw Je.push(k+"type="+encodeURIComponent("_badmap")),Tr}}catch{m&&m(en)}}if(Ve){G=Je.join("&");break e}}G=void 0}return a=a.i.splice(0,d),u.G=a,G}function ph(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;Z||v(),re||(Z(),re=!0),A.add(u,a),a.A=0}}function Xa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ds(h(a.Da,a),_h(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ds(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,bt(10),Ji(this),gh(this))};function Za(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gh(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=Zt(a.na);Le(u,"RID","rpc"),Le(u,"SID",a.M),Le(u,"AID",a.K),Le(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&Le(u,"TO",a.ia),Le(u,"TYPE","xmlhttp"),qs(a,u),a.u&&a.o&&Ya(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Wi(Zt(u)),d.u=null,d.R=!0,ju(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Ji(this),Xa(this),bt(19))};function Zi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function mh(a,u){var d=null;if(a.g==u){Zi(a),Za(a),a.g=null;var m=2}else if(Ga(a.h,u))d=u.G,Qu(a.h,u),m=1;else return;if(a.I!=0){if(u.o)if(m==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=a.D;m=yr(),j(m,new Fu(m,d)),Xi(a)}else ph(a);else if(S=u.m,S==3||S==0&&u.X>0||!(m==1&&m_(a,u)||m==2&&Xa(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),S){case 1:wr(a,5);break;case 4:wr(a,10);break;case 3:wr(a,6);break;default:wr(a,2)}}}function _h(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function wr(a,u){if(a.j.info("Error code "+u),u==2){var d=h(a.bb,a),m=a.Ua;const S=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ls(m,"https"),Wi(m),S?u_(m.toString(),d):h_(m.toString(),d)}else bt(2);a.I=0,a.l&&a.l.pa(u),yh(a),hh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function yh(a){if(a.I=0,a.ja=[],a.l){const u=Yu(a.h);(u.length!=0||a.i.length!=0)&&(P(a.ja,u),P(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function vh(a,u,d){var m=d instanceof Mn?Zt(d):new Mn(d);if(m.g!="")u&&(m.g=u+"."+m.g),xs(m,m.u);else{var S=o.location;m=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const k=new Mn(null);m&&Ls(k,m),u&&(k.g=u),S&&xs(k,S),d&&(k.h=d),m=k}return d=a.G,u=a.wa,d&&u&&Le(m,d,u),Le(m,"VER",a.ka),qs(a,m),m}function Eh(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new Be(new Qa({ab:d})):new Be(a.ma),u.Fa(a.L),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wh(){}t=wh.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function eo(){}eo.prototype.g=function(a,u){return new Lt(a,u)};function Lt(a,u){z.call(this),this.g=new uh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!w(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!w(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Br(this)}p(Lt,z),Lt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ja(this.g)},Lt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ye(a),a=d);u.i.push(new n_(u.Ya++,a)),u.I==3&&Xi(u)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ja(this.g),delete this.g,Lt.Z.N.call(this)};function Th(a){Fr.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}p(Th,Fr);function Ih(){ct.call(this),this.status=1}p(Ih,ct);function Br(a){this.g=a}p(Br,wh),Br.prototype.ra=function(){j(this.g,"a")},Br.prototype.qa=function(a){j(this.g,new Th(a))},Br.prototype.pa=function(a){j(this.g,new Ih)},Br.prototype.oa=function(){j(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,vm=function(){return new eo},ym=function(){return yr()},_m=nt,Xc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,bo=Gi,Uu.COMPLETE="complete",mm=Uu,gt.EventType=zt,zt.OPEN="a",zt.CLOSE="b",zt.ERROR="c",zt.MESSAGE="d",z.prototype.listen=z.prototype.J,Qs=gt,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,gm=Be}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const Zf="@firebase/firestore",ed="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}yt.UNAUTHENTICATED=new yt(null),yt.GOOGLE_CREDENTIALS=new yt("google-credentials-uid"),yt.FIRST_PARTY=new yt("first-party-uid"),yt.MOCK_USER=new yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cs="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Gl("@firebase/firestore");function Gr(){return Lr.logLevel}function X(t,...e){if(Lr.logLevel<=de.DEBUG){const n=e.map(nu);Lr.debug(`Firestore (${Cs}): ${t}`,...n)}}function kn(t,...e){if(Lr.logLevel<=de.ERROR){const n=e.map(nu);Lr.error(`Firestore (${Cs}): ${t}`,...n)}}function fs(t,...e){if(Lr.logLevel<=de.WARN){const n=e.map(nu);Lr.warn(`Firestore (${Cs}): ${t}`,...n)}}function nu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Em(t,r,n)}function Em(t,e,n){let r=`FIRESTORE (${Cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kn(r),new Error(r)}function Ue(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Em(e,s,r)}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Y extends mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class lI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(yt.UNAUTHENTICATED))}shutdown(){}}class uI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class hI{constructor(e){this.t=e,this.currentUser=yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ue(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new rr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new rr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ue(typeof r.accessToken=="string",31837,{l:r}),new wm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ue(e===null||typeof e=="string",2055,{h:e}),new yt(e)}}class fI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=yt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class dI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new fI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class td{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class pI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ut(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ue(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new td(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ue(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new td(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=gI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Zc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return wc(s)===wc(i)?ge(s,i):wc(s)?1:-1}return ge(t.length,e.length)}const mI=55296,_I=57343;function wc(t){const e=t.charCodeAt(0);return e>=mI&&e<=_I}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="__name__";class rn{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return rn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof rn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=rn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=rn.isNumericId(e),s=rn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?rn.extractNumericId(e).compare(rn.extractNumericId(n)):Zc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return nr.fromString(e.substring(4,e.length-2))}}class Oe extends rn{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Y(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const yI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Tt extends rn{construct(e,n,r){return new Tt(e,n,r)}static isValidIdentifier(e){return yI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===nd}static keyField(){return new Tt([nd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Y(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Y(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Y(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Y(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Tt(n)}static emptyPath(){return new Tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(Oe.fromString(e))}static fromName(e){return new ne(Oe.fromString(e).popFirst(5))}static empty(){return new ne(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new Oe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){if(!n)throw new Y(H.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function vI(t,e,n,r){if(e===!0&&r===!0)throw new Y(H.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rd(t){if(!ne.isDocumentKey(t))throw new Y(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sd(t){if(ne.isDocumentKey(t))throw new Y(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Im(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ca(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function bi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Y(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ca(t);throw new Y(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function EI(t,e){if(e<=0)throw new Y(H.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t,e){const n={typeString:t};return e&&(n.value=e),n}function Hi(t,e){if(!Im(t))throw new Y(H.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Y(H.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=-62135596800,od=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*od);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Y(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<id)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Y(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/od}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Hi(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-id;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Ye("string",xe._jsonSchemaVersion),seconds:Ye("number"),nanoseconds:Ye("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new xe(0,0))}static max(){return new ce(new xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=-1;function wI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new cr(s,ne.empty(),e)}function TI(t){return new cr(t.readTime,t.key,Si)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(ce.min(),ne.empty(),Si)}static max(){return new cr(ce.max(),ne.empty(),Si)}}function II(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t){if(t.code!==H.FAILED_PRECONDITION||t.message!==AI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function bI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function bs(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Sa.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=-1;function Ra(t){return t==null}function Qo(t){return t===0&&1/t==-1/0}function RI(t){return typeof t=="number"&&Number.isInteger(t)&&!Qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="";function PI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ad(e)),e=VI(t.get(n),e);return ad(e)}function VI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Am:n+="";break;default:n+=i}}return n}function ad(t){return t+Am+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ss(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Cm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ut.RED,this.left=s!=null?s:ut.EMPTY,this.right=i!=null?i:ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ld(this.data.getIterator())}getIteratorFrom(e){return new ld(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class ld{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.fields=e,e.sort(Tt.comparator)}static empty(){return new Yn([])}unionWith(e){let n=new et(Tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new bm("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Ue(!!t,39018),typeof t=="string"){let e=0;const n=kI.exec(t);if(Ue(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="server_timestamp",Rm="__type__",Pm="__previous_value__",Vm="__local_write_time__";function su(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[Rm])==null?void 0:r.stringValue)===Sm}function Pa(t){const e=t.mapValue.fields[Pm];return su(e)?Pa(e):e}function Ri(t){const e=lr(t.mapValue.fields[Vm].timestampValue);return new xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const Yo="(default)";class Pi{constructor(e,n){this.projectId=e,this.database=n||Yo}static empty(){return new Pi("","")}get isDefaultDatabase(){return this.database===Yo}isEqual(e){return e instanceof Pi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="__type__",Dm="__max__",lo={mapValue:{fields:{__type__:{stringValue:Dm}}}},Nm="__vector__",Jo="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?su(t)?4:OI(t)?9007199254740991:NI(t)?10:11:le(28295,{value:t})}function gn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ri(t).isEqual(Ri(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),c=lr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?Qo(o)===Qo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],gn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(cd(o)!==cd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!gn(o[l],c[l])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function Vi(t,e){return(t.values||[]).find(n=>gn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ud(t.timestampValue,e.timestampValue);case 4:return ud(Ri(t),Ri(e));case 5:return Zc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ur(i),l=ur(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=ge(c[h],l[h]);if(f!==0)return f}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ge(Ge(i.latitude),Ge(o.latitude));return c!==0?c:ge(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return hd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,_,P,D;const c=i.fields||{},l=o.fields||{},h=(g=c[Jo])==null?void 0:g.arrayValue,f=(_=l[Jo])==null?void 0:_.arrayValue,p=ge(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:hd(h,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===lo.mapValue&&o===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(o===lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Zc(l[p],f[p]);if(g!==0)return g;const _=ps(c[l[p]],h[f[p]]);if(_!==0)return _}return ge(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function ud(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=lr(t),r=lr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function hd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ps(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function gs(t){return el(t)}function el(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=el(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${el(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function So(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pa(t);return e?16+So(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+So(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ss(r.fields,(i,o)=>{s+=i.length+So(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function fd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function tl(t){return!!t&&"integerValue"in t}function iu(t){return!!t&&"arrayValue"in t}function dd(t){return!!t&&"nullValue"in t}function pd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tc(t){return!!t&&"mapValue"in t}function NI(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[km])==null?void 0:r.stringValue)===Nm}function fi(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Ss(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=fi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=fi(t.arrayValue.values[n]);return e}return{...t}}function OI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Dm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.value=e}static empty(){return new on({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(n)}setAll(e){let n=Tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=fi(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return gn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ss(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new on(fi(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new Et(e,0,ce.min(),ce.min(),ce.min(),on.empty(),0)}static newFoundDocument(e,n,r,s){return new Et(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new Et(e,2,n,ce.min(),ce.min(),on.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,ce.min(),ce.min(),on.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=on.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=on.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.position=e,this.inclusive=n}}function gd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function md(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!gn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function MI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{}class Qe extends Om{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xI(e,n,r):n==="array-contains"?new $I(e,r):n==="in"?new BI(e,r):n==="not-in"?new HI(e,r):n==="array-contains-any"?new jI(e,r):new Qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new UI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ps(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends Om{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Jt(e,n)}matches(e){return Mm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Mm(t){return t.op==="and"}function Lm(t){return LI(t)&&Mm(t)}function LI(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function nl(t){if(t instanceof Qe)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Lm(t))return t.filters.map(e=>nl(e)).join(",");{const e=t.filters.map(n=>nl(n)).join(",");return`${t.op}(${e})`}}function xm(t,e){return t instanceof Qe?function(r,s){return s instanceof Qe&&r.op===s.op&&r.field.isEqual(s.field)&&gn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&xm(o,s.filters[c]),!0):!1}(t,e):void le(19439)}function Fm(t){return t instanceof Qe?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(Fm).join(" ,")+"}"}(t):"Filter"}class xI extends Qe{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends Qe{constructor(e,n){super(e,"in",n),this.keys=Um("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UI extends Qe{constructor(e,n){super(e,"not-in",n),this.keys=Um("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Um(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class $I extends Qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return iu(n)&&Vi(n.arrayValue,this.value)}}class BI extends Qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class HI extends Qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Vi(this.value.arrayValue,n)}}class jI extends Qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!iu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function _d(t,e=null,n=[],r=[],s=null,i=null,o=null){return new qI(t,e,n,r,s,i,o)}function ou(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>nl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.Te=n}return e.Te}function au(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!MI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!md(t.startAt,e.startAt)&&md(t.endAt,e.endAt)}function rl(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function zI(t,e,n,r,s,i,o,c){return new Rs(t,e,n,r,s,i,o,c)}function cu(t){return new Rs(t)}function yd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $m(t){return t.collectionGroup!==null}function di(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(Tt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new ki(i,r))}),n.has(Tt.keyField().canonicalString())||e.Ie.push(new ki(Tt.keyField(),r))}return e.Ie}function un(t){const e=_e(t);return e.Ee||(e.Ee=GI(e,di(t))),e.Ee}function GI(t,e){if(t.limitType==="F")return _d(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ki(s.field,i)});const n=t.endAt?new Xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xo(t.startAt.position,t.startAt.inclusive):null;return _d(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sl(t,e){const n=t.filters.concat([e]);return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Zo(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Va(t,e){return au(un(t),un(e))&&t.limitType===e.limitType}function Bm(t){return`${ou(un(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fm(s)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function ka(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of di(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=gd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,di(r),s)||r.endAt&&!function(o,c,l){const h=gd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,di(r),s))}(t,e)}function KI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Hm(t){return(e,n)=>{let r=!1;for(const s of di(t)){const i=WI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function WI(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?ps(l,h):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ss(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Cm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI=new ze(ne.comparator);function fr(){return QI}const jm=new ze(ne.comparator);function Ys(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function YI(t){let e=jm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return pi()}function qm(){return pi()}function pi(){return new xr(t=>t.toString(),(t,e)=>t.isEqual(e))}new ze(ne.comparator);const JI=new et(ne.comparator);function Ee(...t){let e=JI;for(const n of t)e=e.add(n);return e}const XI=new et(ge);function ZI(){return XI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qo(e)?"-0":e}}function zm(t){return{integerValue:""+t}}function eA(t,e){return RI(e)?zm(e):lu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this._=void 0}}function tA(t,e,n){return t instanceof il?function(s,i){const o={fields:{[Rm]:{stringValue:Sm},[Vm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&su(i)&&(i=Pa(i)),i&&(o.fields[Pm]=i),{mapValue:o}}(n,e):t instanceof ea?Gm(t,e):t instanceof ta?Km(t,e):function(s,i){const o=rA(s,i),c=vd(o)+vd(s.Ae);return tl(o)&&tl(s.Ae)?zm(c):lu(s.serializer,c)}(t,e)}function nA(t,e,n){return t instanceof ea?Gm(t,e):t instanceof ta?Km(t,e):n}function rA(t,e){return t instanceof ol?function(r){return tl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class il extends Da{}class ea extends Da{constructor(e){super(),this.elements=e}}function Gm(t,e){const n=Wm(e);for(const r of t.elements)n.some(s=>gn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Da{constructor(e){super(),this.elements=e}}function Km(t,e){let n=Wm(e);for(const r of t.elements)n=n.filter(s=>!gn(s,r));return{arrayValue:{values:n}}}class ol extends Da{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function vd(t){return Ge(t.integerValue||t.doubleValue)}function Wm(t){return iu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function sA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ea&&s instanceof ea||r instanceof ta&&s instanceof ta?ds(r.elements,s.elements,gn):r instanceof ol&&s instanceof ol?gn(r.Ae,s.Ae):r instanceof il&&s instanceof il}(t.transform,e.transform)}class Vr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ro(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function Qm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new oA(t.key,Vr.none()):new hu(t.key,t.data,Vr.none());{const n=t.data,r=on.empty();let s=new et(Tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Na(t.key,r,new Yn(s.toArray()),Vr.none())}}function iA(t,e,n){t instanceof hu?function(s,i,o){const c=s.value.clone(),l=wd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Na?function(s,i,o){if(!Ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=wd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Ym(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function gi(t,e,n,r){return t instanceof hu?function(i,o,c,l){if(!Ro(i.precondition,o))return c;const h=i.value.clone(),f=Td(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Na?function(i,o,c,l){if(!Ro(i.precondition,o))return c;const h=Td(i.fieldTransforms,l,o),f=o.data;return f.setAll(Ym(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function Ed(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,o)=>sA(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hu extends uu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Na extends uu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Ym(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function wd(t,e,n){const r=new Map;Ue(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,nA(o,c,n[s]))}return r}function Td(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,tA(i,o,e))}return r}class oA extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&iA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=gi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Qm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Ed(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Ed(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,me;function Jm(t){if(t===void 0)return kn("GRPC error has no .code"),H.UNKNOWN;switch(t){case We.OK:return H.OK;case We.CANCELLED:return H.CANCELLED;case We.UNKNOWN:return H.UNKNOWN;case We.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case We.INTERNAL:return H.INTERNAL;case We.UNAVAILABLE:return H.UNAVAILABLE;case We.UNAUTHENTICATED:return H.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case We.NOT_FOUND:return H.NOT_FOUND;case We.ALREADY_EXISTS:return H.ALREADY_EXISTS;case We.PERMISSION_DENIED:return H.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case We.ABORTED:return H.ABORTED;case We.OUT_OF_RANGE:return H.OUT_OF_RANGE;case We.UNIMPLEMENTED:return H.UNIMPLEMENTED;case We.DATA_LOSS:return H.DATA_LOSS;default:return le(39323,{code:t})}}(me=We||(We={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ic=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new nr([4294967295,4294967295],0);function Id(t){const e=uA().encode(t),n=new pm;return n.update(e),new Uint8Array(n.digest())}function Ad(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new nr([n,r],0),new nr([s,i],0)]}class fu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=nr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(nr.fromNumber(r)));return s.compare(hA)===1&&(s=new nr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Id(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new fu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Id(e),[r,s]=Ad(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Oa(ce.min(),s,new ze(ge),fr(),Ee())}}class ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ji(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Xm{constructor(e,n){this.targetId=e,this.Ce=n}}class Zm{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cd{constructor(){this.ve=0,this.Fe=bd(),this.Me=ft.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ee(),n=Ee(),r=Ee();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new ji(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=bd()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ue(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class fA{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.Je=uo(),this.He=uo(),this.Ye=new ze(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(rl(i))if(r===0){const o=new ne(i.path);this.et(n,o,Et.newNoDocument(o,ce.min()))}else Ue(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,h)}Ic==null||Ic.lt(function(f,p,g,_,P){var O,N,x,$,Z,re;const D={localCacheCount:f,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},R=p.unchangedNames;return R&&(D.bloomFilter={applied:P===0,hashCount:(O=R==null?void 0:R.hashCount)!=null?O:0,bitmapLength:($=(x=(N=R==null?void 0:R.bits)==null?void 0:N.bitmap)==null?void 0:x.length)!=null?$:0,padding:(re=(Z=R==null?void 0:R.bits)==null?void 0:Z.padding)!=null?re:0,mightContain:A=>{var v;return(v=_==null?void 0:_.mightContain(A))!=null?v:!1}}),D}(o,e.Ce,this.Ge.ht(),c,l))}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ur(r).toUint8Array()}catch(l){if(l instanceof bm)return fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new fu(o,s,i)}catch(l){return fs(l instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&rl(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,Et.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=Ee();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.ot(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Oa(e,n,this.Ye,this.je,r);return this.je=fr(),this.Je=uo(),this.He=uo(),this.Ye=new ze(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new Cd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new et(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new et(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Cd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function uo(){return new ze(ne.comparator)}function bd(){return new ze(ne.comparator)}const dA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),gA=(()=>({and:"AND",or:"OR"}))();class mA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function al(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function cl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function e1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function is(t){return Ue(!!t,49232),ce.fromTimestamp(function(n){const r=lr(n);return new xe(r.seconds,r.nanos)}(t))}function t1(t,e){return ll(t,e).canonicalString()}function ll(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n1(t){const e=Oe.fromString(t);return Ue(a1(e),10190,{key:e.toString()}),e}function Ac(t,e){const n=n1(e);if(n.get(1)!==t.databaseId.projectId)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Y(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(s1(n))}function r1(t,e){return t1(t.databaseId,e)}function _A(t){const e=n1(t);return e.length===4?Oe.emptyPath():s1(e)}function Sd(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function s1(t){return Ue(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function yA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:le(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Ue(f===void 0||typeof f=="string",58123),ft.fromBase64String(f||"")):(Ue(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ft.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?H.UNKNOWN:Jm(h.code);return new Y(f,h.message||"")}(o);n=new Zm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ac(t,r.document.name),i=is(r.document.updateTime),o=r.document.createTime?is(r.document.createTime):ce.min(),c=new on({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Po(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ac(t,r.document),i=r.readTime?is(r.readTime):ce.min(),o=Et.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Po([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ac(t,r.document),i=r.removedTargetIds||[];n=new Po([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new lA(s,i),c=r.targetId;n=new Xm(c,o)}}return n}function vA(t,e){return{documents:[r1(t,e.path)]}}function EA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r1(t,s);const i=function(h){if(h.length!==0)return o1(Jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Wr(g.field),direction:IA(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=al(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{ft:n,parent:s}}function wA(t){let e=_A(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ue(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=i1(p);return g instanceof Jt&&Lm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(P){return new ki(Qr(P.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ra(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Xo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Xo(_,g)}(n.endAt)),zI(e,s,o,i,c,"F",l,h)}function TA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function i1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return Qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return Qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return Qe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return Qe.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>i1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function IA(t){return dA[t]}function AA(t){return pA[t]}function CA(t){return gA[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return Tt.fromServerFormat(t.fieldPath)}function o1(t){return t instanceof Qe?function(n){if(n.op==="=="){if(pd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(dd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(dd(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:AA(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>o1(s));return r.length===1?r[0]:{compositeFilter:{op:CA(n.op),filters:r}}}(t):le(54877,{filter:t})}function a1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.yt=e}}function SA(t){const e=wA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Zo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.Cn=new PA}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(cr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class PA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},c1=41943040;class Nt{static withCacheSize(e){return new Nt(e,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt.DEFAULT_COLLECTION_PERCENTILE=10,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nt.DEFAULT=new Nt(c1,Nt.DEFAULT_COLLECTION_PERCENTILE,Nt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nt.DISABLED=new Nt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ms(0)}static cr(){return new ms(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd="LruGarbageCollector",VA=1048576;function Vd([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class kA{constructor(e){this.Ir=e,this.buffer=new et(Vd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Vd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Pd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){bs(n)?X(Pd,"Ignoring IndexedDB error during garbage collection: ",n):await ba(n)}await this.Vr(3e5)})}}class NA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Sa.ce);const r=new kA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Rd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Rd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Gr()<=de.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function OA(t,e){return new NA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.changes=new xr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&gi(r.mutation,s,Yn.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ys();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=fr();const o=pi(),c=function(){return pi()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Na)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),gi(f.mutation,h,f.mutation.getFieldMask(),xe.now())):o.set(h.key,Yn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new LA(f,(p=o.get(h))!=null?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=pi();let s=new ze((o,c)=>o-c),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Yn.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=qm();f.forEach(g=>{if(!i.has(g)){const _=Qm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return F.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$m(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Sr());let c=Si,l=i;return o.next(h=>F.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,Ee())).next(f=>({batchId:c,changes:YI(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Ys();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ys();return this.indexManager.getCollectionParents(e,i).next(c=>F.forEach(c,l=>{const h=function(p,g){return new Rs(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Et.newInvalidDocument(f)))});let c=Ys();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&gi(f.mutation,h,Yn.empty(),xe.now()),ka(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return F.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:is(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:SA(s.bundledQuery),readTime:is(s.readTime)}}(n)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(){this.overlays=new ze(ne.comparator),this.qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ze((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=Sr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return F.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cA(n,r));let i=this.qr.get(n);i===void 0&&(i=Ee(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.Qr=new et(st.$r),this.Ur=new et(st.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new st(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new st(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new Oe([])),r=new st(n,e),s=new st(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new Oe([])),r=new st(n,e),s=new st(n,e+1);let i=Ee();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new st(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class st{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new et(st.$r)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new aA(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new st(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?SI:this.tr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new st(n,0),s=new st(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ge);return n.forEach(s=>{const i=new st(s,0),o=new st(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),F.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new st(new ne(i),0);let c=new et(ge);return this.Zr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Yr)),!0)},o),F.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ue(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return F.forEach(n.mutations,s=>{const i=new st(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new st(n,0),s=this.Zr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.ri=e,this.docs=function(){return new ze(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Et.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fr();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||II(TI(f),r)<=0||(s.has(f.key)||ka(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new jA(this)}getSize(e){return F.resolve(this.size)}}class jA extends MA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.persistence=e,this.si=new xr(n=>ou(n),au),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new du,this.targetCount=0,this.ai=ms.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),F.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Pr(n),F.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Sa(0),this.li=!1,this.li=!0,this.hi=new $A,this.referenceDelegate=e(this),this.Pi=new qA(this),this.indexManager=new RA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new bA(n),this.Ii=new FA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new BA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new zA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return F.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class zA extends CI{constructor(e){super(),this.currentSequenceNumber=e}}class pu{constructor(e){this.persistence=e,this.Ri=new du,this.Vi=null}static mi(e){return new pu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.fi,r=>{const s=ne.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return F.or([()=>F.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class na{constructor(e,n){this.persistence=e,this.pi=new xr(r=>PI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=OA(this,n)}static mi(e,n){return new na(e,n)}Ei(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return F.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),F.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=So(e.data.value)),n}br(e,n,r){return F.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return zE()?8:bI(At())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GA;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Gr()<=de.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),F.resolve()):(Gr()<=de.DEBUG&&X("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Gr()<=de.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):F.resolve())}ys(e,n){if(yd(n))return F.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Zo(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Ds(n,c);return this.Cs(n,h,o,l.readTime)?this.ys(e,Zo(n,null,"F")):this.vs(e,h,n,l)}))})))}ws(e,n,r,s){return yd(n)||s.isEqual(ce.min())?F.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?F.resolve(null):(Gr()<=de.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kr(n)),this.vs(e,o,n,wI(s,Si)).next(c=>c))})}Ds(e,n){let r=new et(Hm(e));return n.forEach((s,i)=>{ka(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Gr()<=de.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.ps.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu="LocalStore",WA=3e8;class QA{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new ze(ge),this.xs=new xr(i=>ou(i),au),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new xA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function YA(t,e,n,r){return new QA(t,e,n,r)}async function u1(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=Ee();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({Ls:h,removedBatchIds:o,addedBatchIds:c}))})})}function h1(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function JA(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ft.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,R,O){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=WA?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=fr(),h=Ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(XA(i,o,e.documentUpdates).next(f=>{l=f.ks,h=f.qs})),!r.isEqual(ce.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return F.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Ms=s,i))}function XA(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fr();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(mu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{ks:o,qs:s}})}function ZA(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,F.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function ul(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!bs(o))throw o;X(mu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function kd(t,e,n){const r=_e(t);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=_e(l),g=p.xs.get(f);return g!==void 0?F.resolve(p.Ms.get(g)):p.Pi.getTargetData(h,f)}(r,o,un(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Ee())).next(c=>(eC(r,KI(e),c),{documents:c,Qs:i})))}function eC(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Dd{constructor(){this.activeTargetIds=ZI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tC{constructor(){this.Mo=new Dd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nd="ConnectivityMonitor";class Od{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Nd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Nd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho=null;function hl(){return ho===null?ho=function(){return 268435456+Math.round(2147483648*Math.random())}():ho++,"0x"+ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="RestConnection",rC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sC{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Yo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=hl(),c=this.zo(e,n.toUriEncodedString());X(Cc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:h}=new URL(c),f=mr(h);return this.Jo(e,c,l,r,f).then(p=>(X(Cc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw fs(Cc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=rC[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt="WebChannelConnection";class oC extends sC{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=hl();return new Promise((c,l)=>{const h=new gm;h.setWithCredentials(!0),h.listenOnce(mm.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case bo.NO_ERROR:const p=h.getResponseJson();X(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case bo.TIMEOUT:X(mt,`RPC '${e}' ${o} timed out`),l(new Y(H.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const g=h.getStatus();if(X(mt,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const D=function(O){const N=O.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(N)>=0?N:H.UNKNOWN}(P.status);l(new Y(D,P.message))}else l(new Y(H.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new Y(H.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{X(mt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(mt,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)})}T_(e,n,r){const s=hl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vm(),c=ym(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,_=!1;const P=new iC({Yo:R=>{_?X(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(X(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(mt,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Zo:()=>p.close()}),D=(R,O,N)=>{R.listen(O,x=>{try{N(x)}catch($){setTimeout(()=>{throw $},0)}})};return D(p,Qs.EventType.OPEN,()=>{_||(X(mt,`RPC '${e}' stream ${s} transport opened.`),P.o_())}),D(p,Qs.EventType.CLOSE,()=>{_||(_=!0,X(mt,`RPC '${e}' stream ${s} transport closed`),P.a_(),this.E_(p))}),D(p,Qs.EventType.ERROR,R=>{_||(_=!0,fs(mt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),P.a_(new Y(H.UNAVAILABLE,"The operation could not be completed")))}),D(p,Qs.EventType.MESSAGE,R=>{var O;if(!_){const N=R.data[0];Ue(!!N,16349);const x=N,$=(x==null?void 0:x.error)||((O=x[0])==null?void 0:O.error);if($){X(mt,`RPC '${e}' stream ${s} received error:`,$);const Z=$.status;let re=function(E){const I=We[E];if(I!==void 0)return Jm(I)}(Z),A=$.message;re===void 0&&(re=H.INTERNAL,A="Unknown error status: "+Z+" with message "+$.message),_=!0,P.a_(new Y(re,A)),p.close()}else X(mt,`RPC '${e}' stream ${s} received:`,N),P.u_(N)}}),D(c,_m.STAT_EVENT,R=>{R.stat===Xc.PROXY?X(mt,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Xc.NOPROXY&&X(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.__()},0),P}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(t){return new mA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="PersistentStream";class aC{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new f1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===H.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Y(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(Md,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(Md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cC extends aC{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=yA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?is(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Sd(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=rl(l)?{documents:vA(i,l)}:{query:EA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=e1(i,o.resumeToken);const h=al(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=cl(i,o.snapshotVersion.toTimestamp());const h=al(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=TA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Sd(this.serializer),n.removeTarget=e,this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{}class uC extends lC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ll(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Y(H.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,ll(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Y(H.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class hC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(kn(n),this.aa=!1):X("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="RemoteStore";class fC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{zi(this)&&(X(_s,"Restarting streams for network reachability change."),await async function(l){const h=_e(l);h.Ea.add(4),await qi(h),h.Ra.set("Unknown"),h.Ea.delete(4),await La(h)}(this))})}),this.Ra=new hC(r,s)}}async function La(t){if(zi(t))for(const e of t.da)await e(!0)}async function qi(t){for(const e of t.da)await e(!1)}function d1(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Eu(n)?vu(n):Ps(n).O_()&&yu(n,e))}function _u(t,e){const n=_e(t),r=Ps(n);n.Ia.delete(e),r.O_()&&p1(n,e),n.Ia.size===0&&(r.O_()?r.L_():zi(n)&&n.Ra.set("Unknown"))}function yu(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).Y_(e)}function p1(t,e){t.Va.Ue(e),Ps(t).Z_(e)}function vu(t){t.Va=new fA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.Ra.ua()}function Eu(t){return zi(t)&&!Ps(t).x_()&&t.Ia.size>0}function zi(t){return _e(t).Ea.size===0}function g1(t){t.Va=void 0}async function dC(t){t.Ra.set("Online")}async function pC(t){t.Ia.forEach((e,n)=>{yu(t,e)})}async function gC(t,e){g1(t),Eu(t)?(t.Ra.ha(e),vu(t)):t.Ra.set("Unknown")}async function mC(t,e,n){if(t.Ra.set("Online"),e instanceof Zm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){X(_s,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ld(t,r)}else if(e instanceof Po?t.Va.Ze(e):e instanceof Xm?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await h1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(h);f&&i.Ia.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(ft.EMPTY_BYTE_STRING,f.snapshotVersion)),p1(i,l);const p=new Jn(f.target,l,h,f.sequenceNumber);yu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(_s,"Failed to raise snapshot:",r),await Ld(t,r)}}async function Ld(t,e,n){if(!bs(e))throw e;t.Ea.add(1),await qi(t),t.Ra.set("Offline"),n||(n=()=>h1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(_s,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await La(t)})}async function xd(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),X(_s,"RemoteStore received new credentials");const r=zi(n);n.Ea.add(3),await qi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await La(n)}async function _C(t,e){const n=_e(t);e?(n.Ea.delete(2),await La(n)):e||(n.Ea.add(2),await qi(n),n.Ra.set("Unknown"))}function Ps(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new cC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:dC.bind(null,t),t_:pC.bind(null,t),r_:gC.bind(null,t),H_:mC.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),Eu(t)?vu(t):t.Ra.set("Unknown")):(await t.ma.stop(),g1(t))})),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new wu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Y(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function m1(t,e){if(kn("AsyncQueue",`${e}: ${t}`),bs(t))return new Y(H.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{static emptySet(e){return new os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ys(),this.sortedSet=new ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(){this.ga=new ze(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ys(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Va(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class vC{constructor(){this.queries=Ud(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=Ud(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Y(H.ABORTED,"Firestore shutting down"))}}function Ud(){return new xr(t=>Bm(t),Va)}async function _1(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new yC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=m1(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Tu(n)}async function y1(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function EC(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Tu(n)}function wC(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Tu(t){t.Ca.forEach(e=>{e.next()})}var fl,$d;($d=fl||(fl={})).Ma="default",$d.Cache="cache";class v1{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==fl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.key=e}}class w1{constructor(e){this.key=e}}class TC{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ee(),this.mutatedKeys=Ee(),this.eu=Hm(e),this.tu=new os(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Fd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=ka(this.query,p)?p:null,P=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;g&&_?g.data.isEqual(_.data)?P!==D&&(r.track({type:3,doc:_}),R=!0):this.su(g,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||h&&this.eu(_,h)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),R=!0):g&&!_&&(r.track({type:1,doc:g}),R=!0,(l||h)&&(c=!0)),R&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,P){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:R})}};return D(_)-D(P)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s!=null?s:!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,h=l!==this.Za;return this.Za=l,o.length!==0||h?{snapshot:new ys(this.query,e.tu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Fd,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ee(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new w1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new E1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=Ee();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Iu="SyncEngine";class IC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class AC{constructor(e){this.key=e,this.hu=!1}}class CC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new xr(c=>Bm(c),Va),this.Iu=new Map,this.Eu=new Set,this.du=new ze(ne.comparator),this.Au=new Map,this.Ru=new du,this.Vu={},this.mu=new Map,this.fu=ms.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function bC(t,e,n=!0){const r=b1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await T1(r,e,n,!0),s}async function SC(t,e){const n=b1(t);await T1(n,e,!0,!1)}async function T1(t,e,n,r){const s=await ZA(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await RC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&d1(t.remoteStore,s),c}async function RC(t,e,n,r,s){t.pu=(p,g,_)=>async function(D,R,O,N){let x=R.view.ru(O);x.Cs&&(x=await kd(D.localStore,R.query,!1).then(({documents:A})=>R.view.ru(A,x)));const $=N&&N.targetChanges.get(R.targetId),Z=N&&N.targetMismatches.get(R.targetId)!=null,re=R.view.applyChanges(x,D.isPrimaryClient,$,Z);return Hd(D,R.targetId,re.au),re.snapshot}(t,p,g,_);const i=await kd(t.localStore,e,!0),o=new TC(e,i.Qs),c=o.ru(i.documents),l=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Hd(t,n,h.au);const f=new IC(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),h.snapshot}async function PC(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!Va(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ul(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_u(r.remoteStore,s.targetId),dl(r,s.targetId)}).catch(ba)):(dl(r,s.targetId),await ul(r.localStore,s.targetId,!0))}async function VC(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_u(n.remoteStore,r.targetId))}async function I1(t,e){const n=_e(t);try{const r=await JA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Ue(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Ue(o.hu,14607):s.removedDocuments.size>0&&(Ue(o.hu,42227),o.hu=!1))}),await C1(n,r,e)}catch(r){await ba(r)}}function Bd(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(h=!0)}),h&&Tu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kC(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new ze(ne.comparator);o=o.insert(i,Et.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new Oa(ce.min(),new Map,new ze(ge),o,c);await I1(r,l),r.du=r.du.remove(i),r.Au.delete(e),Au(r)}else await ul(r.localStore,e,!1).then(()=>dl(r,e,n)).catch(ba)}function dl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||A1(t,r)})}function A1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(_u(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),Au(t))}function Hd(t,e,n){for(const r of n)r instanceof E1?(t.Ru.addReference(r.key,e),DC(t,r)):r instanceof w1?(X(Iu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||A1(t,r.key)):le(19791,{wu:r})}function DC(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Iu,"New document in limbo: "+n),t.Eu.add(r),Au(t))}function Au(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(Oe.fromString(e)),r=t.fu.next();t.Au.set(r,new AC(n)),t.du=t.du.insert(n,r),d1(t.remoteStore,new Jn(un(cu(n.path)),r,"TargetPurposeLimboResolution",Sa.ce))}}async function C1(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=gu.As(l.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,h){const f=_e(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(h,g=>F.forEach(g.Es,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>F.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!bs(p))throw p;X(mu,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.Ms.get(g),P=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(P);f.Ms=f.Ms.insert(g,D)}}}(r.localStore,i))}async function NC(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){X(Iu,"User change. New user:",e.toKey());const r=await u1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Y(H.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await C1(n,r.Ls)}}function OC(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return Ee().add(r.key);{let s=Ee();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function b1(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=I1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kC.bind(null,e),e.Pu.H_=EC.bind(null,e.eventManager),e.Pu.yu=wC.bind(null,e.eventManager),e}class ra{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ma(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return YA(this.persistence,new KA,e.initialUser,this.serializer)}Cu(e){return new l1(pu.mi,this.serializer)}Du(e){return new tC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ra.provider={build:()=>new ra};class MC extends ra{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Ue(this.persistence.referenceDelegate instanceof na,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Nt.withCacheSize(this.cacheSizeBytes):Nt.DEFAULT;return new l1(r=>na.mi(r,n),this.serializer)}}class pl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NC.bind(null,this.syncEngine),await _C(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new vC}()}createDatastore(e){const n=Ma(e.databaseInfo.databaseId),r=function(i){return new oC(i)}(e.databaseInfo);return function(i,o,c,l){return new uC(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new fC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Bd(this.syncEngine,n,0),function(){return Od.v()?new Od:new nC}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new CC(s,i,o,c,l,h);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);X(_s,"RemoteStore shutting down."),i.Ea.add(5),await qi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}pl.provider={build:()=>new pl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="FirestoreClient";class LC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=yt.UNAUTHENTICATED,this.clientId=ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=m1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),X(dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await u1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function jd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xC(t);X(dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xd(e.remoteStore,s)),t._onlineComponents=e}async function xC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(dr,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===H.FAILED_PRECONDITION||s.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Sc(t,new ra)}}else X(dr,"Using default OfflineComponentProvider"),await Sc(t,new MC(void 0));return t._offlineComponents}async function FC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(dr,"Using user provided OnlineComponentProvider"),await jd(t,t._uninitializedComponentsProvider._online)):(X(dr,"Using default OnlineComponentProvider"),await jd(t,new pl))),t._onlineComponents}async function R1(t){const e=await FC(t),n=e.eventManager;return n.onListen=bC.bind(null,e.syncEngine),n.onUnlisten=PC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=SC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=VC.bind(null,e.syncEngine),n}function UC(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new S1({next:g=>{f.Nu(),o.enqueueAndForget(()=>y1(i,p));const _=g.docs.has(c);!_&&g.fromCache?h.reject(new Y(H.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?h.reject(new Y(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new v1(cu(c.path),f,{includeMetadataChanges:!0,qa:!0});return _1(i,p)}(await R1(t),t.asyncQueue,e,n,r)),r.promise}function $C(t,e,n={}){const r=new rr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new S1({next:g=>{f.Nu(),o.enqueueAndForget(()=>y1(i,p)),g.fromCache&&l.source==="server"?h.reject(new Y(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new v1(c,f,{includeMetadataChanges:!0,qa:!0});return _1(i,p)}(await R1(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firestore.googleapis.com",zd=!0;class Gd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Y(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=V1,this.ssl=zd}else this.host=e.host,this.ssl=(n=e.ssl)!=null?n:zd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=c1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<VA)throw new Y(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=P1((r=e.experimentalLongPollingOptions)!=null?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Y(H.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class xa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Y(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Y(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new lI;switch(r.type){case"firstParty":return new dI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Y(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=qd.get(n);r&&(X("ComponentProvider","Removing Datastore"),qd.delete(n),r.terminate())}(this),Promise.resolve()}}function BC(t,e,n,r={}){var h;t=bi(t,xa);const s=mr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(ql(`https://${c}`),zl("Firestore",!0)),i.host!==V1&&i.host!==c&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Dr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=yt.MOCK_USER;else{f=LE(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Y(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new yt(g)}t._authCredentials=new uI(new wm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _r(this.firestore,e,this._query)}}class Ze{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ze(this.firestore,e,this._key)}toJSON(){return{type:Ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Hi(n,Ze._jsonSchema))return new Ze(e,r||null,new ne(Oe.fromString(n.referencePath)))}}Ze._jsonSchemaVersion="firestore/documentReference/1.0",Ze._jsonSchema={type:Ye("string",Ze._jsonSchemaVersion),referencePath:Ye("string")};class sr extends _r{constructor(e,n,r){super(e,n,cu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ze(this.firestore,null,new ne(e))}withConverter(e){return new sr(this.firestore,e,this._path)}}function t4(t,e,...n){if(t=Ct(t),Tm("collection","path",e),t instanceof xa){const r=Oe.fromString(e,...n);return sd(r),new sr(t,null,r)}{if(!(t instanceof Ze||t instanceof sr))throw new Y(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return sd(r),new sr(t.firestore,null,r)}}function fo(t,e,...n){if(t=Ct(t),arguments.length===1&&(e=ru.newId()),Tm("doc","path",e),t instanceof xa){const r=Oe.fromString(e,...n);return rd(r),new Ze(t,null,new ne(r))}{if(!(t instanceof Ze||t instanceof sr))throw new Y(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return rd(r),new Ze(t.firestore,t instanceof sr?t.converter:null,new ne(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="AsyncQueue";class Wd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new f1(this,"async_queue_retry"),this._c=()=>{const r=bc();r&&X(Kd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=bc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new rr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!bs(e))throw e;X(Kd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,kn("INTERNAL UNHANDLED ERROR: ",Qd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=wu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Qd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Qd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Cu extends xa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wd(e),this._firestoreClient=void 0,await e}}}function HC(t,e){const n=typeof t=="object"?t:Wl(),r=typeof t=="string"?t:e||Yo,s=Ea(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rg("firestore");i&&BC(s,...i)}return s}function k1(t){if(t._terminated)throw new Y(H.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||jC(t),t._firestoreClient}function jC(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,h,f){return new DI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,P1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||((s=e.localCache)==null?void 0:s._offlineComponentProvider)&&((i=e.localCache)==null?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new LC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $t(ft.fromBase64String(e))}catch(n){throw new Y(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $t(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:$t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Hi(e,$t._jsonSchema))return $t.fromBase64String(e.bytes)}}$t._jsonSchemaVersion="firestore/bytes/1.0",$t._jsonSchema={type:Ye("string",$t._jsonSchemaVersion),bytes:Ye("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Y(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N1{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Y(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Y(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:hn._jsonSchemaVersion}}static fromJSON(e){if(Hi(e,hn._jsonSchema))return new hn(e.latitude,e.longitude)}}hn._jsonSchemaVersion="firestore/geoPoint/1.0",hn._jsonSchema={type:Ye("string",hn._jsonSchemaVersion),latitude:Ye("number"),longitude:Ye("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:fn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Hi(e,fn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new fn(e.vectorValues);throw new Y(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}fn._jsonSchemaVersion="firestore/vectorValue/1.0",fn._jsonSchema={type:Ye("string",fn._jsonSchemaVersion),vectorValues:Ye("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC=/^__.*__$/;function O1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new bu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return gl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(O1(this.Ac)&&qC.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class zC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ma(e)}Cc(e,n,r,s=!1){return new bu({Ac:e,methodName:n,Dc:r,path:Tt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function GC(t){const e=t._freezeSettings(),n=Ma(t._databaseId);return new zC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function KC(t,e,n,r=!1){return Su(n,t.Cc(r?4:3,e))}function Su(t,e){if(M1(t=Ct(t)))return QC("Unsupported field value:",e,t),WC(t,e);if(t instanceof N1)return function(r,s){if(!O1(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Su(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:cl(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:cl(s.serializer,i)}}if(r instanceof hn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof $t)return{bytesValue:e1(s.serializer,r._byteString)};if(r instanceof Ze){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:t1(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof fn)return function(o,c){return{mapValue:{fields:{[km]:{stringValue:Nm},[Jo]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw c.Sc("VectorValues must only contain numeric values.");return lu(c.serializer,h)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Ca(r)}`)}(t,e)}function WC(t,e){const n={};return Cm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ss(t,(r,s)=>{const i=Su(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function M1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof hn||t instanceof $t||t instanceof Ze||t instanceof N1||t instanceof fn)}function QC(t,e,n){if(!M1(n)||!Im(n)){const r=Ca(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}const YC=new RegExp("[~\\*/\\[\\]]");function JC(t,e,n){if(e.search(YC)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new D1(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Y(H.INVALID_ARGUMENT,c+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XC extends L1{data(){return super.data()}}function Fa(t,e){return typeof e=="string"?JC(t,e):e instanceof D1?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZC(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Y(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ru{}class Pu extends Ru{}function n4(t,e,...n){let r=[];e instanceof Ru&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Vu).length,c=i.filter(l=>l instanceof Ua).length;if(o>1||o>0&&c>0)throw new Y(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ua extends Pu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ua(e,n,r)}_apply(e){const n=this._parse(e);return x1(e._query,n),new _r(e.firestore,e.converter,sl(e._query,n))}_parse(e){const n=GC(e.firestore);return function(i,o,c,l,h,f,p){let g;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Y(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Jd(p,f);const P=[];for(const D of p)P.push(Yd(l,i,D));g={arrayValue:{values:P}}}else g=Yd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Jd(p,f),g=KC(c,o,p,f==="in"||f==="not-in");return Qe.create(h,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function r4(t,e,n){const r=e,s=Fa("where",t);return Ua._create(s,r,n)}class Vu extends Ru{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Vu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)x1(o,l),o=sl(o,l)}(e._query,n),new _r(e.firestore,e.converter,sl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ku extends Pu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new ku(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Y(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Y(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ki(i,o)}(e._query,this._field,this._direction);return new _r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Rs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function s4(t,e="asc"){const n=e,r=Fa("orderBy",t);return ku._create(r,n)}class Du extends Pu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Du(e,n,r)}_apply(e){return new _r(e.firestore,e.converter,Zo(e._query,this._limit,this._limitType))}}function i4(t){return EI("limit",t),Du._create("limit",t,"F")}function Yd(t,e,n){if(typeof(n=Ct(n))=="string"){if(n==="")throw new Y(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$m(e)&&n.indexOf("/")!==-1)throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Oe.fromString(n));if(!ne.isDocumentKey(r))throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fd(t,new ne(r))}if(n instanceof Ze)return fd(t,n._key);throw new Y(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ca(n)}.`)}function Jd(t,e){if(!Array.isArray(t)||t.length===0)throw new Y(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function x1(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Y(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Y(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class eb{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ss(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Jo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Ge(o.doubleValue));return new fn(n)}convertGeoPoint(e){return new hn(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ri(e));default:return null}}convertTimestamp(e){const n=lr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Ue(a1(r),9688,{name:e});const s=new Pi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kr extends L1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Vo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=kr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}kr._jsonSchemaVersion="firestore/documentSnapshot/1.0",kr._jsonSchema={type:Ye("string",kr._jsonSchemaVersion),bundleSource:Ye("string","DocumentSnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class Vo extends kr{data(e={}){return super.data(e)}}class as{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Vo(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Y(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Vo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Vo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tb(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Y(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=as._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ru.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){t=bi(t,Ze);const e=bi(t.firestore,Cu);return UC(k1(e),t._key).then(n=>nb(e,t,n))}as._jsonSchemaVersion="firestore/querySnapshot/1.0",as._jsonSchema={type:Ye("string",as._jsonSchemaVersion),bundleSource:Ye("string","QuerySnapshot"),bundleName:Ye("string"),bundle:Ye("string")};class F1 extends eb{constructor(e){super(),this.firestore=e}convertBytes(e){return new $t(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ze(this.firestore,null,n)}}function o4(t){t=bi(t,_r);const e=bi(t.firestore,Cu),n=k1(e),r=new F1(e);return ZC(t._query),$C(n,t._query).then(s=>new as(e,r,t,s))}function nb(t,e,n){const r=n.docs.get(e._key),s=new F1(t);return new kr(t,s,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Cs=s})(Is),Nr(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Cu(new hI(r.getProvider("auth-internal")),new pI(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Y(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Pi(h.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),an(Zf,ed,e),an(Zf,ed,"esm2020")})();var rb="firebase",sb="12.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */an(rb,sb,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ib="type.googleapis.com/google.protobuf.Int64Value",ob="type.googleapis.com/google.protobuf.UInt64Value";function U1(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function sa(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>sa(e));if(typeof t=="function"||typeof t=="object")return U1(t,e=>sa(e));throw new Error("Data cannot be encoded in JSON: "+t)}function vs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case ib:case ob:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>vs(e)):typeof t=="function"||typeof t=="object"?U1(t,e=>vs(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nu="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ot extends mn{constructor(e,n,r){super(`${Nu}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Ot.prototype)}}function ab(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ia(t,e){let n=ab(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Xd[o])return new Ot("internal","internal");n=Xd[o],r=o}const c=i.message;typeof c=="string"&&(r=c),s=i.details,s!==void 0&&(s=vs(s))}}catch{}return n==="ok"?null:new Ot(n,r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ut(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="us-central1",lb=/^data: (.*?)(?:\n|$)/;function ub(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Ot("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class hb{constructor(e,n,r,s,i=ml,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new cb(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=ml}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function fb(t,e,n){const r=mr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(ql(t.emulatorOrigin+"/backends"),zl("Functions",!0))}function db(t,e,n){const r=s=>gb(t,e,s,n||{});return r.stream=(s,i)=>_b(t,e,s,i),r}function $1(t){return t.emulatorOrigin&&mr(t.emulatorOrigin)?"include":void 0}async function pb(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:$1(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function B1(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function gb(t,e,n,r){const s=t._url(e);return mb(t,s,n,r)}async function mb(t,e,n,r){n=sa(n);const s={data:n},i=await B1(t,r),o=r.timeout||7e4,c=ub(o),l=await Promise.race([pb(e,s,i,t.fetchImpl,t),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new Ot("cancelled","Firebase Functions instance was deleted.");const h=ia(l.status,l.json);if(h)throw h;if(!l.json)throw new Ot("internal","Response is not valid JSON object.");let f=l.json.data;if(typeof f>"u"&&(f=l.json.result),typeof f>"u")throw new Ot("internal","Response is missing data field.");return{data:vs(f)}}function _b(t,e,n,r){const s=t._url(e);return yb(t,s,n,r||{})}async function yb(t,e,n,r){var g;n=sa(n);const s={data:n},i=await B1(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:$1(t)})}catch(_){if(_ instanceof Error&&_.name==="AbortError"){const D=new Ot("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const P=ia(0,null);return{data:Promise.reject(P),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(P)}}}}}}let c,l;const h=new Promise((_,P)=>{c=_,l=P});(g=r==null?void 0:r.signal)==null||g.addEventListener("abort",()=>{const _=new Ot("cancelled","Request was cancelled.");l(_)});const f=o.body.getReader(),p=vb(f,c,l,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const _=p.getReader();return{async next(){const{value:P,done:D}=await _.read();return{value:P,done:D}},async return(){return await _.cancel(),{done:!0,value:void 0}}}}},data:h}}function vb(t,e,n,r){const s=(o,c)=>{const l=o.match(lb);if(!l)return;const h=l[1];try{const f=JSON.parse(h);if("result"in f){e(vs(f.result));return}if("message"in f){c.enqueue(vs(f.message));return}if("error"in f){const p=ia(0,f);c.error(p),n(p);return}}catch(f){if(f instanceof Ot){c.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let c="";return l();async function l(){if(r!=null&&r.aborted){const h=new Ot("cancelled","Request was cancelled");return o.error(h),n(h),Promise.resolve()}try{const{value:h,done:f}=await t.read();if(f){c.trim()&&s(c.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Ot("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}c+=i.decode(h,{stream:!0});const p=c.split(`
`);c=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return l()}catch(h){const f=h instanceof Ot?h:ia(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const Zd="@firebase/functions",ep="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="auth-internal",wb="app-check-internal",Tb="messaging-internal";function Ib(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(Eb),o=n.getProvider(Tb),c=n.getProvider(wb);return new hb(s,i,o,c,r)};Nr(new ar(Nu,e,"PUBLIC").setMultipleInstances(!0)),an(Zd,ep,t),an(Zd,ep,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ab(t=Wl(),e=ml){const r=Ea(Ct(t),Nu).getImmediate({identifier:e}),s=Rg("functions");return s&&Cb(r,...s),r}function Cb(t,e,n){fb(Ct(t),e,n)}function a4(t,e,n){return db(Ct(t),e,n)}Ib();const bb={apiKey:"AIzaSyDl6HjloKSeSo_mfsYSxVbGibCHaC8EJdk",authDomain:"zoskycube-bossbattle.firebaseapp.com",projectId:"zoskycube-bossbattle",storageBucket:"zoskycube-bossbattle.firebasestorage.app",messagingSenderId:"592683947591",appId:"1:592683947591:web:06c2d76ececacaa845c362"},Ou=Ng(bb),H1=aI(Ou),go=HC(Ou),c4=Ab(Ou,"us-central1"),Es=lt(null),pr=lt(null),_l=lt(!0),Mu=lt(""),Sb=Te(()=>!!Es.value),j1=Te(()=>{var t;return!!((t=pr.value)!=null&&t.steam)}),q1=Te(()=>{var t;return!!((t=pr.value)!=null&&t.discord)}),z1=Te(()=>{var t;return!!((t=pr.value)!=null&&t.twitch)}),Rb=Te(()=>j1.value&&q1.value&&z1.value),G1=async t=>{try{console.log("\u{1F525} useAuth: Loading user profile for UID:",t),localStorage.getItem("linkUuid")||localStorage.setItem("linkUuid",t);const e=fo(go,"account_links",t),n=await po(e);if(!n.exists()){console.log("\u{1F525} useAuth: No account links found in Firestore"),pr.value=null;return}const r=n.data();console.log("\u{1F525} useAuth: Account links loaded:",r);const s={};if(r.steamId&&r.steamId!=="not-yet"){const i=fo(go,"steam_profiles",r.steamId),o=await po(i);o.exists()&&(s.steam=o.data())}if(r.discordId&&r.discordId!=="not-yet"){const i=fo(go,"discord_profiles",r.discordId),o=await po(i);o.exists()&&(s.discord=o.data())}if(r.twitchId&&r.twitchId!=="not-yet"){const i=fo(go,"twitch_profiles",r.twitchId),o=await po(i);o.exists()&&(s.twitch=o.data())}pr.value=s,console.log("\u{1F525} useAuth: User profile built:",s)}catch(e){throw console.error("\u{1F525} useAuth: Error loading user profile:",e),Mu.value="Failed to load profile data",e}},Pb=async()=>{if(!Es.value){console.warn("\u{1F525} useAuth: Cannot refresh profile - no user authenticated");return}await G1(Es.value.uid)},Vb=async()=>{try{await Yw(H1),Es.value=null,pr.value=null,console.log("\u{1F525} useAuth: User signed out successfully")}catch(t){throw console.error("\u{1F525} useAuth: Sign out error:",t),Mu.value="Failed to sign out",t}};let yl=!1;const kb=()=>{if(yl){console.warn("\u{1F525} useAuth: Auth state already initialized");return}yl=!0,console.log("\u{1F525} useAuth: Initializing auth state listener"),Qw(H1,async t=>{if(_l.value=!0,Es.value=t,t){console.log("\u{1F525} useAuth: User authenticated:",t.uid);try{await G1(t.uid)}catch(e){console.error("\u{1F525} useAuth: Failed to load profile on auth state change:",e)}}else console.log("\u{1F525} useAuth: No user authenticated"),pr.value=null;_l.value=!1})};function Db(){return yl||kb(),{user:Es,userProfile:pr,loading:_l,error:Mu,isAuthenticated:Sb,steamConnected:j1,discordConnected:q1,twitchConnected:z1,allConnected:Rb,refreshProfile:Pb,signOut:Vb}}const Nb="/zoskyCube/assets/zBlock.8ecfbf7a.png",Ob="/zoskyCube/assets/zCube.1e5db001.png";const Mb={key:0,class:"points-container"},Lb={class:"points-number"},xb={key:0,class:"cents-superscript"},Fb={key:0,class:"cad-icon"},Ub=["src","alt"],$b={key:1,class:"icon-only"},Bb={key:0,class:"cad-icon"},Hb=["src","alt"],jb={__name:"Points",props:{currency:{type:String,required:!0,validator:t=>{const e=t.toLowerCase();return e==="zb"||e==="zc"||e==="cad"}},n:{type:[Number,String],default:null},size:{type:String,default:"1.5em"}},setup(t){const e=t,n=Te(()=>e.currency.toLowerCase()==="cad"),r=Te(()=>{if(!n.value||e.n===null||e.n===void 0)return"";const l=typeof e.n=="string"?parseFloat(e.n):e.n;return`$${Math.floor(l/100).toLocaleString()}`}),s=Te(()=>!n.value||e.n===null||e.n===void 0?"00":((typeof e.n=="string"?parseFloat(e.n):e.n)%100).toString().padStart(2,"0")),i=Te(()=>e.currency.toLowerCase()==="zb"?Nb:Ob),o=Te(()=>e.currency.toLowerCase()==="zb"?"zBlock":"zCube"),c=Te(()=>e.n===null||e.n===void 0?"":(typeof e.n=="string"?parseFloat(e.n):e.n).toLocaleString());return(l,h)=>t.n!==null&&t.n!==void 0?(qe(),Xe("span",Mb,[je("span",Lb,[n.value?(qe(),Xe(Gt,{key:0},[xc(Rr(r.value),1),s.value!=="00"?(qe(),Xe("sup",xb,Rr(s.value),1)):Fc("",!0)],64)):(qe(),Xe(Gt,{key:1},[xc(Rr(c.value),1)],64))]),n.value?(qe(),Xe("span",Fb,"\u{1F341}")):(qe(),Xe("img",{key:1,src:i.value,alt:o.value,class:"points-icon",style:la({width:t.size,height:t.size})},null,12,Ub))])):(qe(),Xe("span",$b,[n.value?(qe(),Xe("span",Bb,"\u{1F341}")):(qe(),Xe("img",{key:1,src:i.value,alt:o.value,class:"points-icon"},null,8,Hb))]))}},qb=Ts(jb,[["__scopeId","data-v-288bb0de"]]);const zb={class:"custom-cyan-shadow"},Gb={href:"https://twitch.tv/zoskyCube",title:"ttv:zoskyCube"},Kb={key:0,class:"user-balance-container"},Wb={key:0,class:"balance-display",title:"Your zCube Balance"},Qb={key:1,class:"balance-display animate-pulse"},Yb=["src","alt"],Jb="668816ac484cab966df79977",Xb={__name:"HeaderBar",setup(t){const e=Ig();Wv();const{user:n,userProfile:r}=Db(),s=lt(null),i=lt(!1),o=async g=>{if(!!g){i.value=!0;try{const _=await fetch(`https://api.streamelements.com/kappa/v2/points/${Jb}/${g}`);if(_.ok){const P=await _.json();s.value=P.points||0}}catch(_){console.error("Failed to fetch user points:",_)}finally{i.value=!1}}};oi(()=>{var g,_;return(_=(g=r.value)==null?void 0:g.twitch)==null?void 0:_.username},g=>{g&&s.value===null&&o(g)},{immediate:!0});const c=lt(0);Up(()=>{const g=localStorage.getItem("preferredAvatarIndex");g&&(c.value=parseInt(g))});const l=Te(()=>{var P,D,R,O,N,x,$,Z;if(!r.value)return null;const _=["twitch","steam","discord"][c.value%3];return _==="twitch"&&((P=r.value.twitch)==null?void 0:P.profileImage)?r.value.twitch.profileImage:_==="steam"&&((D=r.value.steam)==null?void 0:D.avatar)?r.value.steam.avatar:_==="discord"&&((R=r.value.discord)==null?void 0:R.avatar)&&((O=r.value.discord)==null?void 0:O.id)?`https://cdn.discordapp.com/avatars/${r.value.discord.id}/${r.value.discord.avatar}.png`:((N=r.value.twitch)==null?void 0:N.profileImage)||((x=r.value.steam)==null?void 0:x.avatar)||((($=r.value.discord)==null?void 0:$.avatar)&&((Z=r.value.discord)==null?void 0:Z.id)?`https://cdn.discordapp.com/avatars/${r.value.discord.id}/${r.value.discord.avatar}.png`:null)});function h(){e.push("/stats")}function f(){var g,_;n.value&&((_=(g=r.value)==null?void 0:g.twitch)==null?void 0:_.username)&&e.push(`/stats/user?username=${r.value.twitch.username}`)}function p(g){g.preventDefault(),c.value=(c.value+1)%3,localStorage.setItem("preferredAvatarIndex",c.value.toString())}return(g,_)=>{var N;const P=AE,D=wE,R=rE,O=Zv;return qe(),Xe("nav",zb,[_[10]||(_[10]=je("a",{href:"./"},[je("img",{id:"logo",src:CE,alt:"zoskyCube Logo"})],-1)),je("a",Gb,[Re(P)]),Re(D),je("div",{class:_t([{active:g.$route.path=="/collection"},"cursor-pointer"]),onClick:_[0]||(_[0]=x=>g.$router.push("./collection")),title:"Game Collection"},[Re(ve(fE))],2),je("div",{class:_t([{active:g.$route.path=="/store"},"cursor-pointer"]),onClick:_[1]||(_[1]=x=>g.$router.push("/store")),title:"Reward Store"},[Re(ve(dE))],2),je("div",{class:_t([{active:g.$route.path=="/"},"cursor-pointer"]),title:"Death Counter",onClick:_[2]||(_[2]=x=>g.$router.push("/"))},[Re(ve(hE))],2),je("div",{class:_t([g.$route.path=="/counter"?"active":"hidden","cursor-pointer"]),onClick:_[3]||(_[3]=x=>g.$router.push("/counter")),title:"Add Death"},[Re(ve(uE))],2),je("div",{class:_t([{active:g.$route.path=="/winning"},"cursor-pointer"]),onClick:_[4]||(_[4]=x=>g.$router.push("/winning")),title:"Completed Games"},[Re(ve(pE))],2),je("div",{class:_t([{active:g.$route.path.includes("/help/")},"cursor-pointer"]),onClick:_[5]||(_[5]=x=>g.$router.push("/help/")),title:"Help Center"},[Re(ve(cE))],2),je("div",{class:_t([{active:g.$route.path==="/stats"&&!g.$route.query.username},"cursor-pointer"]),onClick:h,title:"Leaderboard / Table of Contents"},[Re(ve(aE))],2),je("div",{class:_t([{active:g.$route.path=="/auth"},"cursor-pointer"]),onClick:_[6]||(_[6]=x=>g.$router.push("/auth")),title:"Connect Gaming Accounts"},[Re(ve(oE))],2),je("img",{src:bE,alt:"PixelPower Art Collection",title:"PixelPower Art Collection",class:_t([{"bg-purple-400/40":g.$route.path=="/pixelPower"},"inline h-14 -mb-4 -mt-3"]),onClick:_[7]||(_[7]=x=>g.$router.push("/pixelPower"))},null,2),je("div",{class:_t([{"animate-pulse":g.$route.path=="/halo"},"cursor-pointer h-10 w-auto -mx-1"]),title:"Halo campaign Stats",onClick:_[8]||(_[8]=x=>g.$router.push("/halo"))},[Re(R)],2),je("div",{class:_t([{"animate-pulse":g.$route.path=="/halo"},"cursor-pointer w-10 h-auto -mx-2"]),title:"arkTribe timeline",onClick:_[9]||(_[9]=x=>g.$router.push("/ark"))},[Re(O)],2),ve(n)&&ve(r)&&ve(l)?(qe(),Xe("div",Kb,[ve(s)!==null?(qe(),Xe("div",Wb,[Re(qb,{currency:"zC",n:ve(s)},null,8,["n"])])):ve(i)?(qe(),Xe("div",Qb," ... ")):Fc("",!0),je("div",{class:_t(["user-avatar-wrapper",{active:g.$route.path.includes("/stats/user")}]),onClick:f,onMousedown:L0(p,["middle","prevent"]),title:"My Personal Stats (Middle-click to cycle avatar)"},[je("img",{src:ve(l),alt:`${((N=ve(r).twitch)==null?void 0:N.username)||"User"} avatar`,class:"user-avatar"},null,8,Yb)],34)])):Fc("",!0)])}}},Zb=Ts(Xb,[["__scopeId","data-v-41530fff"]]),eS={},tS={class:"app-container"};function nS(t,e){const n=Zb,r=Ey("router-view");return qe(),Xe("div",tS,[Re(n),Re(r)])}const rS=Ts(eS,[["render",nS]]),jr=async t=>{const r=(await(await fetch(t)).text()).split(`
`).filter(c=>c.trim()!==""),s=c=>{const l=[];let h="",f=!1;for(let p=0;p<c.length;p++){const g=c[p],_=c[p+1];g==='"'?f&&_==='"'?(h+='"',p++):f=!f:g===","&&!f?(l.push(h),h=""):h+=g}return l.push(h),l},i=s(r[0]);return i.indexOf("private"),r.slice(1).map((c,l)=>{const h=s(c),f={};return i.forEach((p,g)=>{const _=h[g]||"";if(p==="private"){!_||_.trim(),_&&_.toLowerCase();const P=_&&_.toLowerCase()!=="false"&&_.trim()!=="";f[p]=P}else f[p]=!isNaN(Number(_))&&_.trim()!==""?Number(_):_}),f})},sS=t=>{if(!t||t===""||t==="undefined")return null;const e=new Date(t);return isNaN(e.getTime())?null:e.getTime()/1e3},iS=t=>{var n;const e=(n=t==null?void 0:t.steamID)!=null?n:t==null?void 0:t.steamId;return!e||e===""||e==="undefined"?null:e},oS=t=>{const e=t==null?void 0:t.player;return!e||e===""||e==="undefined"?1:Number(e)||1},aS=t=>{var r;const e=(r=t==null?void 0:t.death)!=null?r:t==null?void 0:t.deaths,n=t==null?void 0:t.lives;return e!=null&&e!==""?Number(e)||0:n!=null&&n!==""&&Number(n)||0},cS=()=>{const t=lt([]),e=lt(!0),n=lt(null),r=lt({}),s=lt({}),i=lt({}),o=lt([]),c=lt([]),l=lt([]),h=Te(()=>{const R={};return t.value.forEach(O=>{const N=O.steamId,x=O.player;N&&(R[N]||(R[N]={}),R[N][x]||(R[N][x]=[]),R[N][x].push(O))}),R}),f=Te(()=>{const R={};return t.value.forEach(O=>{const N=O.steamId;N&&!R[N]&&(R[N]=[]),N&&R[N].push(O)}),R}),p=Te(()=>{const R=[];return Object.keys(h.value).forEach(O=>{const N=h.value[O],x=Object.keys(N).map($=>{var Z;return{player:Number($),playerName:`Player ${$}`,count:N[$].length,entries:N[$],lastDeath:((Z=N[$].at(-1))==null?void 0:Z.lives)||0}}).sort(($,Z)=>$.player-Z.player);R.push({id:O,name:r.value[O]||"UnknownId:"+O,players:x,totalCount:x.reduce(($,Z)=>$+Z.count,0)})}),R.sort((O,N)=>O.name.localeCompare(N.name))}),g=Te(()=>{const R=[];return Object.keys(h.value).forEach(O=>{const N=h.value[O];Object.keys(N).forEach(x=>{R.push({id:O,player:Number(x),name:r.value[O]||"UnknownId:"+O,count:N[x].length,playerName:`Player ${x}`})})}),R.sort((O,N)=>O.name.localeCompare(N.name)||O.player-N.player)}),_=Te(()=>o.value.reduce((R,O)=>(O.steamId&&(R[O.steamId]||(R[O.steamId]=[]),R[O.steamId].push(O)),R),{})),P=Te(()=>Object.keys(f.value).map(R=>({id:R,name:r.value[R]||"UnknownId:"+R,count:f.value[R].length})));async function D(R=!1){if(!(!R&&(e.value||t.value.length>0))){e.value=!0;try{const O="1nOSih6IJEXlBFEtwExaMBQY9ONb1OZmrzzWapRq9M7s",N=I=>`https://docs.google.com/spreadsheets/d/${O}/gviz/tq?tqx=out:csv&sheet=${I}`,x=await jr(N("history")),$=await jr(N("ytVods")),Z=await jr(N("winning")),re=await jr(N("steamXref")),A=await jr(N("invested")),v=await jr(N("arkTribe"));t.value=x.map(I=>{var Fe;const C=(Fe=I==null?void 0:I.timestamp)!=null?Fe:I==null?void 0:I.Timestamp,b=sS(C),w=iS(I),$e=oS(I),ot=aS(I);return b!==null&&w!==null?{...I,time:b,steamId:w,player:$e,lives:ot}:null}).filter(I=>I!==null).sort((I,C)=>I.time-C.time),o.value=$.map(I=>({...I,game:I.name})),c.value=Z;const E=I=>re.reduce((C,b)=>(C[b.steamId]=b[I],C),{});r.value=E("name"),s.value=E("color"),i.value=A,l.value=v}catch(O){n.value=O.message}finally{e.value=!1}}}return{rawData:t,steamNames:r,steamColors:s,steamLibrary:i,youtubeVods:o,winningGames:c,youtubeVodsBySteamId:_,isLoading:e,error:n,groupedBySteamId:f,groupedBySteamIdAndPlayer:h,steamIdStats:P,steamIdPlayerStats:g,gameStats:p,arkTribe:l,fetchData:D}},lS="/zoskyCube/assets/Carbonemys.8b490c4a.webp",uS=Object.freeze(Object.defineProperty({__proto__:null,default:lS},Symbol.toStringTag,{value:"Module"})),hS="/zoskyCube/assets/Dilophosaur.380d56a1.webp",fS=Object.freeze(Object.defineProperty({__proto__:null,default:hS},Symbol.toStringTag,{value:"Module"})),dS="/zoskyCube/assets/Dodo.66335a56.webp",pS=Object.freeze(Object.defineProperty({__proto__:null,default:dS},Symbol.toStringTag,{value:"Module"})),gS="/zoskyCube/assets/Lystrosaurus.3422cafc.webp",mS=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"})),_S="/zoskyCube/assets/Moschops.a3ae5243.webp",yS=Object.freeze(Object.defineProperty({__proto__:null,default:_S},Symbol.toStringTag,{value:"Module"})),vS="/zoskyCube/assets/Parasaur.8653d907.webp",ES=Object.freeze(Object.defineProperty({__proto__:null,default:vS},Symbol.toStringTag,{value:"Module"})),wS="/zoskyCube/assets/Pteranodon.2e1c91a8.webp",TS=Object.freeze(Object.defineProperty({__proto__:null,default:wS},Symbol.toStringTag,{value:"Module"})),IS="/zoskyCube/assets/Triceratops.71949641.webp",AS=Object.freeze(Object.defineProperty({__proto__:null,default:IS},Symbol.toStringTag,{value:"Module"})),tp=Object.assign({"../assets/ark/Carbonemys.webp":uS,"../assets/ark/Dilophosaur.webp":fS,"../assets/ark/Dodo.webp":pS,"../assets/ark/Lystrosaurus.webp":mS,"../assets/ark/Moschops.webp":yS,"../assets/ark/Parasaur.webp":ES,"../assets/ark/Pteranodon.webp":TS,"../assets/ark/Triceratops.webp":AS}),vl={};for(const t in tp){const e=t.split("/").pop().replace(".webp","");vl[e]=tp[t].default}const CS={install(t){t.config.globalProperties.$arkDinos=vl,t.provide("arkDinos",vl)}};function bS(){const t="G-TCPDMW1ERZ";window.dataLayer=window.dataLayer||[];function e(){window.dataLayer.push(arguments)}window.gtag=e,e("js",new Date),e("config",t,{send_page_view:!1,anonymize_ip:!0,allow_google_signals:!1,allow_ad_personalization_signals:!1}),console.log("GA4 initialized:",t)}function SS(t,e={}){if(!(typeof window.gtag>"u"))try{window.gtag("event",t,e)}catch(n){console.error("GA4 tracking error:",n)}}function RS(t,e){SS("page_view",{page_path:t,page_title:e||document.title})}const PS="/zoskyCube/",K1=Qv({history:wv(PS)}),$a=$0(rS),W1=cS();$a.provide("gameStore",W1);$a.use(CS);W1.fetchData(!0);$a.use(K1);bS();K1.afterEach(t=>{RS(t.path,t.meta.title||document.title)});$a.mount("#app");export{a4 as $,SS as A,Qw as B,$S as C,fE as D,HS as E,Gt as F,ig as G,GS as H,oE as I,WS as J,BS as K,lE as L,US as M,FS as N,jS as O,XS as P,xS as Q,MS as R,hE as S,gE as T,H1 as U,ZS as V,fo as W,go as X,mE as Y,po as Z,Ts as _,Xe as a,c4 as a0,qb as a1,Dl as a2,QS as a3,rE as a4,Ey as a5,iy as a6,$p as a7,bE as a8,t4 as a9,n4 as aa,i4 as ab,s4 as ac,o4 as ad,xe as ae,r4 as af,Db as ag,OS as ah,Q_ as ai,ha as aj,He as ak,Ml as al,cg as am,d0 as an,Ce as ao,kl as ap,LS as aq,YS as ar,JS as as,zS as at,qS as au,kS as av,je as b,Te as c,xc as d,Re as e,Fc as f,$l as g,KS as h,la as i,lt as j,Up as k,gy as l,Ht as m,_t as n,qe as o,VS as p,It as q,DS as r,L0 as s,Rr as t,ve as u,NS as v,oi as w,Ig as x,Zv as y,Wv as z};
