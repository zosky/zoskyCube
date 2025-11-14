(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function _l(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},Xr=[],zt=()=>{},ep=()=>!1,sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yl=t=>t.startsWith("onUpdate:"),tt=Object.assign,vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},i_=Object.prototype.hasOwnProperty,be=(t,e)=>i_.call(t,e),ie=Array.isArray,Zr=t=>Ci(t)==="[object Map]",ia=t=>Ci(t)==="[object Set]",Ah=t=>Ci(t)==="[object Date]",ue=t=>typeof t=="function",We=t=>typeof t=="string",hn=t=>typeof t=="symbol",Oe=t=>t!==null&&typeof t=="object",tp=t=>(Oe(t)||ue(t))&&ue(t.then)&&ue(t.catch),np=Object.prototype.toString,Ci=t=>np.call(t),o_=t=>Ci(t).slice(8,-1),rp=t=>Ci(t)==="[object Object]",El=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Js=_l(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},a_=/-\w/g,Bt=oa(t=>t.replace(a_,e=>e.slice(1).toUpperCase())),c_=/\B([A-Z])/g,gr=oa(t=>t.replace(c_,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),tc=oa(t=>t?`on${aa(t)}`:""),Yn=(t,e)=>!Object.is(t,e),lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},sp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Co=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const Si=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Tl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?f_(r):Tl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||Oe(t))return t}const l_=/;(?![^(]*\))/g,u_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function f_(t){const e={};return t.replace(h_,"").split(l_).forEach(n=>{if(n){const r=n.split(u_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function It(t){let e="";if(We(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=It(t[n]);r&&(e+=r+" ")}else if(Oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const d_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",p_=_l(d_);function ip(t){return!!t||t===""}function g_(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=ca(t[r],e[r]);return n}function ca(t,e){if(t===e)return!0;let n=Ah(t),r=Ah(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=hn(t),r=hn(e),n||r)return t===e;if(n=ie(t),r=ie(e),n||r)return n&&r?g_(t,e):!1;if(n=Oe(t),r=Oe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!ca(t[o],e[o]))return!1}}return String(t)===String(e)}function m_(t,e){return t.findIndex(n=>ca(n,e))}const op=t=>!!(t&&t.__v_isRef===!0),uo=t=>We(t)?t:t==null?"":ie(t)||Oe(t)&&(t.toString===np||!ue(t.toString))?op(t)?uo(t.value):JSON.stringify(t,ap,2):String(t),ap=(t,e)=>op(e)?ap(t,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[nc(r,i)+" =>"]=s,n),{})}:ia(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:hn(e)?nc(e):Oe(e)&&!ie(e)&&!rp(e)?String(e):e,nc=(t,e="")=>{var n;return hn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rt;class __{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Rt,!e&&Rt&&(this.index=(Rt.scopes||(Rt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Rt;try{return Rt=this,e()}finally{Rt=n}}}on(){++this._on===1&&(this.prevScope=Rt,Rt=this)}off(){this._on>0&&--this._on===0&&(Rt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function y_(){return Rt}let De;const rc=new WeakSet;class cp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Rt&&Rt.active&&Rt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rc.has(this)&&(rc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||up(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ch(this),hp(this);const e=De,n=Gt;De=this,Gt=!0;try{return this.fn()}finally{fp(this),De=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Al(e);this.deps=this.depsTail=void 0,Ch(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Rc(this)&&this.run()}get dirty(){return Rc(this)}}let lp=0,Ys,Xs;function up(t,e=!1){if(t.flags|=8,e){t.next=Xs,Xs=t;return}t.next=Ys,Ys=t}function wl(){lp++}function Il(){if(--lp>0)return;if(Xs){let e=Xs;for(Xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ys;){let e=Ys;for(Ys=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function hp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Al(r),v_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Rc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===hi)||(t.globalVersion=hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Rc(t))))return;t.flags|=2;const e=t.dep,n=De,r=Gt;De=t,Gt=!0;try{hp(t);const s=t.fn(t._value);(e.version===0||Yn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Gt=r,fp(t),t.flags&=-3}}function Al(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Al(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function v_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const pp=[];function Cn(){pp.push(Gt),Gt=!1}function Sn(){const t=pp.pop();Gt=t===void 0?!0:t}function Ch(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let hi=0;class E_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!Gt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new E_(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,gp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,hi++,this.notify(e)}notify(e){wl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Il()}}}function gp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)gp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pc=new WeakMap,Rr=Symbol(""),Vc=Symbol(""),fi=Symbol("");function gt(t,e,n){if(Gt&&De){let r=Pc.get(t);r||Pc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bl),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const o=Pc.get(t);if(!o){hi++;return}const c=l=>{l&&l.trigger()};if(wl(),e==="clear")o.forEach(c);else{const l=ie(t),u=l&&El(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,g)=>{(g==="length"||g===fi||!hn(g)&&g>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(fi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Rr)),Zr(t)&&c(o.get(Vc)));break;case"delete":l||(c(o.get(Rr)),Zr(t)&&c(o.get(Vc)));break;case"set":Zr(t)&&c(o.get(Rr));break}}Il()}function Hr(t){const e=Ae(t);return e===t?e:(gt(e,"iterate",fi),Ft(t)?e:e.map(at))}function la(t){return gt(t=Ae(t),"iterate",fi),t}const T_={__proto__:null,[Symbol.iterator](){return sc(this,Symbol.iterator,at)},concat(...t){return Hr(this).concat(...t.map(e=>ie(e)?Hr(e):e))},entries(){return sc(this,"entries",t=>(t[1]=at(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(at),arguments)},find(t,e){return _n(this,"find",t,e,at,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,at,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return Hr(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return js(this,"pop")},push(...t){return js(this,"push",t)},reduce(t,...e){return Sh(this,"reduce",t,e)},reduceRight(t,...e){return Sh(this,"reduceRight",t,e)},shift(){return js(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return js(this,"splice",t)},toReversed(){return Hr(this).toReversed()},toSorted(t){return Hr(this).toSorted(t)},toSpliced(...t){return Hr(this).toSpliced(...t)},unshift(...t){return js(this,"unshift",t)},values(){return sc(this,"values",at)}};function sc(t,e,n){const r=la(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const w_=Array.prototype;function _n(t,e,n,r,s,i){const o=la(t),c=o!==t&&!Ft(t),l=o[e];if(l!==w_[e]){const p=l.apply(t,i);return c?at(p):p}let u=n;o!==t&&(c?u=function(p,g){return n.call(this,at(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Sh(t,e,n,r){const s=la(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(o,c,l){return n.call(this,o,c,l,t)}):i=function(o,c,l){return n.call(this,o,at(c),l,t)}),s[e](i,...r)}function ic(t,e,n){const r=Ae(t);gt(r,"iterate",fi);const s=r[e](...n);return(s===-1||s===!1)&&Rl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function js(t,e,n=[]){Cn(),wl();const r=Ae(t)[e].apply(t,n);return Il(),Sn(),r}const I_=_l("__proto__,__v_isRef,__isVue"),mp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hn));function A_(t){hn(t)||(t=String(t));const e=Ae(this);return gt(e,"has",t),e.hasOwnProperty(t)}class _p{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?O_:Tp:i?Ep:vp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ie(e);if(!s){let l;if(o&&(l=T_[n]))return l;if(n==="hasOwnProperty")return A_}const c=Reflect.get(e,n,vt(e)?e:r);return(hn(n)?mp.has(n):I_(n))||(s||gt(e,"get",n),i)?c:vt(c)?o&&El(n)?c:c.value:Oe(c)?s?Ip(c):ua(c):c}}class yp extends _p{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=sr(i);if(!Ft(r)&&!sr(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&vt(i)&&!vt(r))return l||(i.value=r),!0}const o=ie(e)&&El(n)?Number(n)<e.length:be(e,n),c=Reflect.set(e,n,r,vt(e)?e:s);return e===Ae(s)&&(o?Yn(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),c}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!hn(n)||!mp.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",ie(e)?"length":Rr),Reflect.ownKeys(e)}}class b_ extends _p{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const C_=new yp,S_=new b_,R_=new yp(!0);const kc=t=>t,Yi=t=>Reflect.getPrototypeOf(t);function P_(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=Zr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?kc:e?So:at;return!e&&gt(i,"iterate",l?Vc:Rr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Xi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function V_(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(Yn(s,c)&&gt(o,"get",s),gt(o,"get",c));const{has:l}=Yi(o),u=e?kc:t?So:at;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Ae(s),"iterate",Rr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(Yn(s,c)&&gt(o,"has",s),gt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),u=e?kc:t?So:at;return!t&&gt(l,"iterate",Rr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return tt(n,t?{add:Xi("add"),set:Xi("set"),delete:Xi("delete"),clear:Xi("clear")}:{add(s){!e&&!Ft(s)&&!sr(s)&&(s=Ae(s));const i=Ae(this);return Yi(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!sr(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=Yi(o);let u=c.call(o,s);u||(s=Ae(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?Yn(i,f)&&Tn(o,"set",s,i):Tn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=Yi(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Tn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&Tn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=P_(s,t,e)}),n}function Cl(t,e){const n=V_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const k_={get:Cl(!1,!1)},D_={get:Cl(!1,!0)},N_={get:Cl(!0,!1)};const vp=new WeakMap,Ep=new WeakMap,Tp=new WeakMap,O_=new WeakMap;function M_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function x_(t){return t.__v_skip||!Object.isExtensible(t)?0:M_(o_(t))}function ua(t){return sr(t)?t:Sl(t,!1,C_,k_,vp)}function wp(t){return Sl(t,!1,R_,D_,Ep)}function Ip(t){return Sl(t,!0,S_,N_,Tp)}function Sl(t,e,n,r,s){if(!Oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=x_(t);if(i===0)return t;const o=s.get(t);if(o)return o;const c=new Proxy(t,i===2?r:n);return s.set(t,c),c}function es(t){return sr(t)?es(t.__v_raw):!!(t&&t.__v_isReactive)}function sr(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Rl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function L_(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&sp(t,"__v_skip",!0),t}const at=t=>Oe(t)?ua(t):t,So=t=>Oe(t)?Ip(t):t;function vt(t){return t?t.__v_isRef===!0:!1}function At(t){return Ap(t,!1)}function F_(t){return Ap(t,!0)}function Ap(t,e){return vt(t)?t:new U_(t,e)}class U_{constructor(e,n){this.dep=new bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:at(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||sr(e);e=r?e:Ae(e),Yn(e,n)&&(this._rawValue=e,this._value=r?e:at(e),this.dep.trigger())}}function Te(t){return vt(t)?t.value:t}const $_={get:(t,e,n)=>e==="__v_raw"?t:Te(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return vt(s)&&!vt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function bp(t){return es(t)?t:new Proxy(t,$_)}class B_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return up(this,!0),!0}get value(){const e=this.dep.track();return dp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function j_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new B_(r,s,n)}const Zi={},Ro=new WeakMap;let Ar;function H_(t,e=!1,n=Ar){if(n){let r=Ro.get(n);r||Ro.set(n,r=[]),r.push(t)}}function q_(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=z=>s?z:Ft(z)||s===!1||s===0?wn(z,1):wn(z);let f,p,g,_,k=!1,D=!1;if(vt(t)?(p=()=>t.value,k=Ft(t)):es(t)?(p=()=>u(t),k=!0):ie(t)?(D=!0,k=t.some(z=>es(z)||Ft(z)),p=()=>t.map(z=>{if(vt(z))return z.value;if(es(z))return u(z);if(ue(z))return l?l(z,2):z()})):ue(t)?e?p=l?()=>l(t,2):t:p=()=>{if(g){Cn();try{g()}finally{Sn()}}const z=Ar;Ar=f;try{return l?l(t,3,[_]):t(_)}finally{Ar=z}}:p=zt,e&&s){const z=p,te=s===!0?1/0:s;p=()=>wn(z(),te)}const R=y_(),O=()=>{f.stop(),R&&R.active&&vl(R.effects,f)};if(i&&e){const z=e;e=(...te)=>{z(...te),O()}}let N=D?new Array(t.length).fill(Zi):Zi;const H=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const te=f.run();if(s||k||(D?te.some((ae,A)=>Yn(ae,N[A])):Yn(te,N))){g&&g();const ae=Ar;Ar=f;try{const A=[te,N===Zi?void 0:D&&N[0]===Zi?[]:N,_];N=te,l?l(e,3,A):e(...A)}finally{Ar=ae}}}else f.run()};return c&&c(H),f=new cp(p),f.scheduler=o?()=>o(H,!1):H,_=z=>H_(z,!1,f),g=f.onStop=()=>{const z=Ro.get(f);if(z){if(l)l(z,4);else for(const te of z)te();Ro.delete(f)}},e?r?H(!0):N=f.run():o?o(H.bind(null,!0),!0):f.run(),O.pause=f.pause.bind(f),O.resume=f.resume.bind(f),O.stop=O,O}function wn(t,e=1/0,n){if(e<=0||!Oe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,vt(t))wn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)wn(t[r],e,n);else if(ia(t)||Zr(t))t.forEach(r=>{wn(r,e,n)});else if(rp(t)){for(const r in t)wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ri(t,e,n,r){try{return r?t(...r):t()}catch(s){ha(s,e,n)}}function fn(t,e,n,r){if(ue(t)){const s=Ri(t,e,n,r);return s&&tp(s)&&s.catch(i=>{ha(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(fn(t[i],e,n,r));return s}}function ha(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Cn(),Ri(i,null,10,[t,l,u]),Sn();return}}z_(t,n,s,r,o)}function z_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const bt=[];let Zt=-1;const ts=[];let jn=null,zr=0;const Cp=Promise.resolve();let Po=null;function Pl(t){const e=Po||Cp;return t?e.then(this?t.bind(this):t):e}function G_(t){let e=Zt+1,n=bt.length;for(;e<n;){const r=e+n>>>1,s=bt[r],i=di(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Vl(t){if(!(t.flags&1)){const e=di(t),n=bt[bt.length-1];!n||!(t.flags&2)&&e>=di(n)?bt.push(t):bt.splice(G_(e),0,t),t.flags|=1,Sp()}}function Sp(){Po||(Po=Cp.then(Pp))}function K_(t){ie(t)?ts.push(...t):jn&&t.id===-1?jn.splice(zr+1,0,t):t.flags&1||(ts.push(t),t.flags|=1),Sp()}function Rh(t,e,n=Zt+1){for(;n<bt.length;n++){const r=bt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;bt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rp(t){if(ts.length){const e=[...new Set(ts)].sort((n,r)=>di(n)-di(r));if(ts.length=0,jn){jn.push(...e);return}for(jn=e,zr=0;zr<jn.length;zr++){const n=jn[zr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}jn=null,zr=0}}const di=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Pp(t){const e=zt;try{for(Zt=0;Zt<bt.length;Zt++){const n=bt[Zt];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Ri(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;Zt<bt.length;Zt++){const n=bt[Zt];n&&(n.flags&=-2)}Zt=-1,bt.length=0,Rp(),Po=null,(bt.length||ts.length)&&Pp()}}let Ot=null,Vp=null;function Vo(t){const e=Ot;return Ot=t,Vp=t&&t.type.__scopeId||null,e}function W_(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&No(-1);const i=Vo(e);let o;try{o=t(...s)}finally{Vo(i),r._d&&No(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function ZC(t,e){if(Ot===null)return t;const n=ma(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function wr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Cn(),fn(l,n,8,[t.el,c,t,e]),Sn())}}const Q_=Symbol("_vte"),J_=t=>t.__isTeleport,Y_=Symbol("_leaveCb");function kl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,kl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Dl(t,e){return ue(t)?(()=>tt({name:t.name},e,{setup:t}))():t}function kp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ko=new WeakMap;function Zs(t,e,n,r,s=!1){if(ie(t)){t.forEach((k,D)=>Zs(k,e&&(ie(e)?e[D]:e),n,r,s));return}if(ei(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Zs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ma(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ve?c.refs={}:c.refs,p=c.setupState,g=Ae(p),_=p===Ve?ep:k=>be(g,k);if(u!=null&&u!==l){if(Ph(e),We(u))f[u]=null,_(u)&&(p[u]=null);else if(vt(u)){u.value=null;const k=e;k.k&&(f[k.k]=null)}}if(ue(l))Ri(l,c,12,[o,f]);else{const k=We(l),D=vt(l);if(k||D){const R=()=>{if(t.f){const O=k?_(l)?p[l]:f[l]:l.value;if(s)ie(O)&&vl(O,i);else if(ie(O))O.includes(i)||O.push(i);else if(k)f[l]=[i],_(l)&&(p[l]=f[l]);else{const N=[i];l.value=N,t.k&&(f[t.k]=N)}}else k?(f[l]=o,_(l)&&(p[l]=o)):D&&(l.value=o,t.k&&(f[t.k]=o))};if(o){const O=()=>{R(),ko.delete(t)};O.id=-1,ko.set(t,O),Nt(O,n)}else Ph(t),R()}}}function Ph(t){const e=ko.get(t);e&&(e.flags|=8,ko.delete(t))}Si().requestIdleCallback;Si().cancelIdleCallback;const ei=t=>!!t.type.__asyncLoader,Dp=t=>t.type.__isKeepAlive;function X_(t,e){Np(t,"a",e)}function Z_(t,e){Np(t,"da",e)}function Np(t,e,n=_t){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Dp(s.parent.vnode)&&ey(r,e,n,s),s=s.parent}}function ey(t,e,n,r){const s=fa(e,t,r,!0);Mp(()=>{vl(r[e],s)},n)}function fa(t,e,n=_t,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Cn();const c=Pi(n),l=fn(e,n,t,o);return c(),Sn(),l});return r?s.unshift(i):s.push(i),i}}const Dn=t=>(e,n=_t)=>{(!gi||t==="sp")&&fa(t,(...r)=>e(...r),n)},ty=Dn("bm"),Op=Dn("m"),ny=Dn("bu"),ry=Dn("u"),sy=Dn("bum"),Mp=Dn("um"),iy=Dn("sp"),oy=Dn("rtg"),ay=Dn("rtc");function cy(t,e=_t){fa("ec",t,e)}const xp="components";function ly(t,e){return hy(xp,t,!0,e)||t}const uy=Symbol.for("v-ndc");function hy(t,e,n=!0,r=!1){const s=Ot||_t;if(s){const i=s.type;if(t===xp){const c=t0(i,!1);if(c&&(c===e||c===Bt(e)||c===aa(Bt(e))))return i}const o=Vh(s[t]||i[t],e)||Vh(s.appContext[t],e);return!o&&r?i:o}}function Vh(t,e){return t&&(t[e]||t[Bt(e)]||t[aa(Bt(e))])}function eS(t,e,n,r){let s;const i=n&&n[r],o=ie(t);if(o||We(t)){const c=o&&es(t);let l=!1,u=!1;c&&(l=!Ft(t),u=sr(t),t=la(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?So(at(t[f])):at(t[f]):t[f],f,void 0,i&&i[f])}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(Oe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i&&i[l]));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i&&i[l])}}else s=[];return n&&(n[r]=s),s}const Dc=t=>t?ng(t)?ma(t):Dc(t.parent):null,ti=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dc(t.parent),$root:t=>Dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nl(t),$forceUpdate:t=>t.f||(t.f=()=>{Vl(t.update)}),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>Ny.bind(t)}),oc=(t,e)=>t!==Ve&&!t.__isScriptSetup&&be(t,e),fy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let u;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(oc(r,e))return o[e]=1,r[e];if(s!==Ve&&be(s,e))return o[e]=2,s[e];if((u=t.propsOptions[0])&&be(u,e))return o[e]=3,i[e];if(n!==Ve&&be(n,e))return o[e]=4,n[e];Nc&&(o[e]=0)}}const f=ti[e];let p,g;if(f)return e==="$attrs"&&gt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Ve&&be(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return oc(s,e)?(s[e]=n,!0):r!==Ve&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i,type:o}},c){let l,u;return!!(n[c]||t!==Ve&&c[0]!=="$"&&be(t,c)||oc(e,c)||(l=i[0])&&be(l,c)||be(r,c)||be(ti,c)||be(s.config.globalProperties,c)||(u=o.__cssModules)&&u[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function kh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Nc=!0;function dy(t){const e=Nl(t),n=t.proxy,r=t.ctx;Nc=!1,e.beforeCreate&&Dh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:k,activated:D,deactivated:R,beforeDestroy:O,beforeUnmount:N,destroyed:H,unmounted:z,render:te,renderTracked:ae,renderTriggered:A,errorCaptured:v,serverPrefetch:T,expose:I,inheritAttrs:b,components:C,directives:E,filters:$e}=e;if(u&&py(u,r,null),o)for(const we in o){const pe=o[we];ue(pe)&&(r[we]=pe.bind(n))}if(s){const we=s.call(n,n);Oe(we)&&(t.data=ua(we))}if(Nc=!0,i)for(const we in i){const pe=i[we],Ct=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):zt,Qt=!ue(pe)&&ue(pe.set)?pe.set.bind(n):zt,kt=Ne({get:Ct,set:Qt});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>kt.value,set:rt=>kt.value=rt})}if(c)for(const we in c)Lp(c[we],r,n,we);if(l){const we=ue(l)?l.call(n):l;Reflect.ownKeys(we).forEach(pe=>{ho(pe,we[pe])})}f&&Dh(f,t,"c");function Le(we,pe){ie(pe)?pe.forEach(Ct=>we(Ct.bind(n))):pe&&we(pe.bind(n))}if(Le(ty,p),Le(Op,g),Le(ny,_),Le(ry,k),Le(X_,D),Le(Z_,R),Le(cy,v),Le(ay,ae),Le(oy,A),Le(sy,N),Le(Mp,z),Le(iy,T),ie(I))if(I.length){const we=t.exposed||(t.exposed={});I.forEach(pe=>{Object.defineProperty(we,pe,{get:()=>n[pe],set:Ct=>n[pe]=Ct,enumerable:!0})})}else t.exposed||(t.exposed={});te&&t.render===zt&&(t.render=te),b!=null&&(t.inheritAttrs=b),C&&(t.components=C),E&&(t.directives=E),T&&kp(t)}function py(t,e,n=zt){ie(t)&&(t=Oc(t));for(const r in t){const s=t[r];let i;Oe(s)?"default"in s?i=Ut(s.from||r,s.default,!0):i=Ut(s.from||r):i=Ut(s),vt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Dh(t,e,n){fn(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lp(t,e,n,r){let s=r.includes(".")?Jp(n,r):()=>n[r];if(We(t)){const i=e[t];ue(i)&&fo(s,i)}else if(ue(t))fo(s,t.bind(n));else if(Oe(t))if(ie(t))t.forEach(i=>Lp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&fo(s,i,t)}}function Nl(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Do(l,u,o,!0)),Do(l,e,o)),Oe(e)&&i.set(e,l),l}function Do(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Do(t,i,n,!0),s&&s.forEach(o=>Do(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=gy[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const gy={data:Nh,props:Oh,emits:Oh,methods:zs,computed:zs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:zs,directives:zs,watch:_y,provide:Nh,inject:my};function Nh(t,e){return e?t?function(){return tt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function my(t,e){return zs(Oc(t),Oc(e))}function Oc(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function zs(t,e){return t?tt(Object.create(null),t,e):e}function Oh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:tt(Object.create(null),kh(t),kh(e!=null?e:{})):e}function _y(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function Fp(){return{app:null,config:{isNativeTag:ep,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let yy=0;function vy(t,e){return function(r,s=null){ue(r)||(r=tt({},r)),s!=null&&!Oe(s)&&(s=null);const i=Fp(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:yy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:r0,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&ue(f.install)?(o.add(f),f.install(u,...p)):ue(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!l){const _=u._ceVNode||Pe(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(_,f):t(_,f,g),l=!0,u._container=f,f.__vue_app__=u,ma(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(fn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ns;ns=u;try{return f()}finally{ns=p}}};return u}}let ns=null;function ho(t,e){if(_t){let n=_t.provides;const r=_t.parent&&_t.parent.provides;r===n&&(n=_t.provides=Object.create(r)),n[t]=e}}function Ut(t,e,n=!1){const r=Jy();if(r||ns){let s=ns?ns._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Up={},$p=()=>Object.create(Up),Bp=t=>Object.getPrototypeOf(t)===Up;function Ey(t,e,n,r=!1){const s={},i=$p();t.propsDefaults=Object.create(null),jp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:wp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ty(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(da(t.emitsOptions,g))continue;const _=e[g];if(l)if(be(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const k=Bt(g);s[k]=Mc(l,c,k,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{jp(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!be(e,p)&&((f=gr(p))===p||!be(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Mc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!be(e,p)&&!0)&&(delete i[p],u=!0)}u&&Tn(t.attrs,"set","")}function jp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Js(l))continue;const u=e[l];let f;s&&be(s,f=Bt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:da(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ae(n),u=c||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Mc(s,l,p,u[p],t,!be(u,p))}}return o}function Mc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=be(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ue(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Pi(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===gr(n))&&(r=!0))}return r}const wy=new WeakMap;function Hp(t,e,n=!1){const r=n?wy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!ue(t)){const f=p=>{l=!0;const[g,_]=Hp(p,e,!0);tt(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Oe(t)&&r.set(t,Xr),Xr;if(ie(i))for(let f=0;f<i.length;f++){const p=Bt(i[f]);Mh(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=Bt(f);if(Mh(p)){const g=i[f],_=o[p]=ie(g)||ue(g)?{type:g}:tt({},g),k=_.type;let D=!1,R=!0;if(ie(k))for(let O=0;O<k.length;++O){const N=k[O],H=ue(N)&&N.name;if(H==="Boolean"){D=!0;break}else H==="String"&&(R=!1)}else D=ue(k)&&k.name==="Boolean";_[0]=D,_[1]=R,(D||be(_,"default"))&&c.push(p)}}const u=[o,c];return Oe(t)&&r.set(t,u),u}function Mh(t){return t[0]!=="$"&&!Js(t)}const Ol=t=>t==="_"||t==="_ctx"||t==="$stable",Ml=t=>ie(t)?t.map(tn):[tn(t)],Iy=(t,e,n)=>{if(e._n)return e;const r=W_((...s)=>Ml(e(...s)),n);return r._c=!1,r},qp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Ol(s))continue;const i=t[s];if(ue(i))e[s]=Iy(s,i,r);else if(i!=null){const o=Ml(i);e[s]=()=>o}}},zp=(t,e)=>{const n=Ml(e);t.slots.default=()=>n},Gp=(t,e,n)=>{for(const r in e)(n||!Ol(r))&&(t[r]=e[r])},Ay=(t,e,n)=>{const r=t.slots=$p();if(t.vnode.shapeFlag&32){const s=e._;s?(Gp(r,e,n),n&&sp(r,"_",s,!0)):qp(e,r)}else e&&zp(t,e)},by=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Gp(s,e,n):(i=!e.$stable,qp(e,s)),o=e}else e&&(zp(t,e),o={default:1});if(i)for(const c in s)!Ol(c)&&o[c]==null&&delete s[c]};function Cy(){typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__!="boolean"&&(Si().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const Nt=By;function Sy(t){return Ry(t)}function Ry(t,e){Cy();const n=Si();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=zt,insertStaticContent:k}=t,D=(y,w,P,U=null,M=null,F=null,K=void 0,q=null,B=!!w.dynamicChildren)=>{if(y===w)return;y&&!Hs(y,w)&&(U=x(y),rt(y,M,F,!0),y=null),w.patchFlag===-2&&(B=!1,w.dynamicChildren=null);const{type:j,ref:re,shapeFlag:J}=w;switch(j){case pa:R(y,w,P,U);break;case ir:O(y,w,P,U);break;case po:y==null&&N(w,P,U,K);break;case En:C(y,w,P,U,M,F,K,q,B);break;default:J&1?te(y,w,P,U,M,F,K,q,B):J&6?E(y,w,P,U,M,F,K,q,B):(J&64||J&128)&&j.process(y,w,P,U,M,F,K,q,B,Z)}re!=null&&M?Zs(re,y&&y.ref,F,w||y,!w):re==null&&y&&y.ref!=null&&Zs(y.ref,null,F,y,!0)},R=(y,w,P,U)=>{if(y==null)r(w.el=c(w.children),P,U);else{const M=w.el=y.el;w.children!==y.children&&u(M,w.children)}},O=(y,w,P,U)=>{y==null?r(w.el=l(w.children||""),P,U):w.el=y.el},N=(y,w,P,U)=>{[y.el,y.anchor]=k(y.children,w,P,U,y.el,y.anchor)},H=({el:y,anchor:w},P,U)=>{let M;for(;y&&y!==w;)M=g(y),r(y,P,U),y=M;r(w,P,U)},z=({el:y,anchor:w})=>{let P;for(;y&&y!==w;)P=g(y),s(y),y=P;s(w)},te=(y,w,P,U,M,F,K,q,B)=>{w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),y==null?ae(w,P,U,M,F,K,q,B):T(y,w,M,F,K,q,B)},ae=(y,w,P,U,M,F,K,q)=>{let B,j;const{props:re,shapeFlag:J,transition:ee,dirs:se}=y;if(B=y.el=o(y.type,F,re&&re.is,re),J&8?f(B,y.children):J&16&&v(y.children,B,null,U,M,ac(y,F),K,q),se&&wr(y,null,U,"created"),A(B,y,y.scopeId,K,U),re){for(const Ce in re)Ce!=="value"&&!Js(Ce)&&i(B,Ce,null,re[Ce],F,U);"value"in re&&i(B,"value",null,re.value,F),(j=re.onVnodeBeforeMount)&&Xt(j,U,y)}se&&wr(y,null,U,"beforeMount");const fe=Py(M,ee);fe&&ee.beforeEnter(B),r(B,w,P),((j=re&&re.onVnodeMounted)||fe||se)&&Nt(()=>{j&&Xt(j,U,y),fe&&ee.enter(B),se&&wr(y,null,U,"mounted")},M)},A=(y,w,P,U,M)=>{if(P&&_(y,P),U)for(let F=0;F<U.length;F++)_(y,U[F]);if(M){let F=M.subTree;if(w===F||Xp(F.type)&&(F.ssContent===w||F.ssFallback===w)){const K=M.vnode;A(y,K,K.scopeId,K.slotScopeIds,M.parent)}}},v=(y,w,P,U,M,F,K,q,B=0)=>{for(let j=B;j<y.length;j++){const re=y[j]=q?Hn(y[j]):tn(y[j]);D(null,re,w,P,U,M,F,K,q)}},T=(y,w,P,U,M,F,K)=>{const q=w.el=y.el;let{patchFlag:B,dynamicChildren:j,dirs:re}=w;B|=y.patchFlag&16;const J=y.props||Ve,ee=w.props||Ve;let se;if(P&&Ir(P,!1),(se=ee.onVnodeBeforeUpdate)&&Xt(se,P,w,y),re&&wr(w,y,P,"beforeUpdate"),P&&Ir(P,!0),(J.innerHTML&&ee.innerHTML==null||J.textContent&&ee.textContent==null)&&f(q,""),j?I(y.dynamicChildren,j,q,P,U,ac(w,M),F):K||pe(y,w,q,null,P,U,ac(w,M),F,!1),B>0){if(B&16)b(q,J,ee,P,M);else if(B&2&&J.class!==ee.class&&i(q,"class",null,ee.class,M),B&4&&i(q,"style",J.style,ee.style,M),B&8){const fe=w.dynamicProps;for(let Ce=0;Ce<fe.length;Ce++){const ye=fe[Ce],ht=J[ye],Ye=ee[ye];(Ye!==ht||ye==="value")&&i(q,ye,ht,Ye,M,P)}}B&1&&y.children!==w.children&&f(q,w.children)}else!K&&j==null&&b(q,J,ee,P,M);((se=ee.onVnodeUpdated)||re)&&Nt(()=>{se&&Xt(se,P,w,y),re&&wr(w,y,P,"updated")},U)},I=(y,w,P,U,M,F,K)=>{for(let q=0;q<w.length;q++){const B=y[q],j=w[q],re=B.el&&(B.type===En||!Hs(B,j)||B.shapeFlag&198)?p(B.el):P;D(B,j,re,null,U,M,F,K,!0)}},b=(y,w,P,U,M)=>{if(w!==P){if(w!==Ve)for(const F in w)!Js(F)&&!(F in P)&&i(y,F,w[F],null,M,U);for(const F in P){if(Js(F))continue;const K=P[F],q=w[F];K!==q&&F!=="value"&&i(y,F,q,K,M,U)}"value"in P&&i(y,"value",w.value,P.value,M)}},C=(y,w,P,U,M,F,K,q,B)=>{const j=w.el=y?y.el:c(""),re=w.anchor=y?y.anchor:c("");let{patchFlag:J,dynamicChildren:ee,slotScopeIds:se}=w;se&&(q=q?q.concat(se):se),y==null?(r(j,P,U),r(re,P,U),v(w.children||[],P,re,M,F,K,q,B)):J>0&&J&64&&ee&&y.dynamicChildren?(I(y.dynamicChildren,ee,P,M,F,K,q),(w.key!=null||M&&w===M.subTree)&&Kp(y,w,!0)):pe(y,w,P,re,M,F,K,q,B)},E=(y,w,P,U,M,F,K,q,B)=>{w.slotScopeIds=q,y==null?w.shapeFlag&512?M.ctx.activate(w,P,U,K,B):$e(w,P,U,M,F,K,B):nt(y,w,B)},$e=(y,w,P,U,M,F,K)=>{const q=y.component=Qy(y,U,M);if(Dp(y)&&(q.ctx.renderer=Z),Yy(q,!1,K),q.asyncDep){if(M&&M.registerDep(q,Le,K),!y.el){const B=q.subTree=Pe(ir);O(null,B,w,P),y.placeholder=B.el}}else Le(q,y,w,P,M,F,K)},nt=(y,w,P)=>{const U=w.component=y.component;if(Uy(y,w,P))if(U.asyncDep&&!U.asyncResolved){we(U,w,P);return}else U.next=w,U.update();else w.el=y.el,U.vnode=w},Le=(y,w,P,U,M,F,K)=>{const q=()=>{if(y.isMounted){let{next:J,bu:ee,u:se,parent:fe,vnode:Ce}=y;{const ft=Wp(y);if(ft){J&&(J.el=Ce.el,we(y,J,K)),ft.asyncDep.then(()=>{y.isUnmounted||q()});return}}let ye=J,ht;Ir(y,!1),J?(J.el=Ce.el,we(y,J,K)):J=Ce,ee&&lo(ee),(ht=J.props&&J.props.onVnodeBeforeUpdate)&&Xt(ht,fe,J,Ce),Ir(y,!0);const Ye=cc(y),St=y.subTree;y.subTree=Ye,D(St,Ye,p(St.el),x(St),y,M,F),J.el=Ye.el,ye===null&&$y(y,Ye.el),se&&Nt(se,M),(ht=J.props&&J.props.onVnodeUpdated)&&Nt(()=>Xt(ht,fe,J,Ce),M)}else{let J;const{el:ee,props:se}=w,{bm:fe,m:Ce,parent:ye,root:ht,type:Ye}=y,St=ei(w);if(Ir(y,!1),fe&&lo(fe),!St&&(J=se&&se.onVnodeBeforeMount)&&Xt(J,ye,w),Ir(y,!0),ee&&Se){const ft=()=>{y.subTree=cc(y),Se(ee,y.subTree,y,M,null)};St&&Ye.__asyncHydrate?Ye.__asyncHydrate(ee,y,ft):ft()}else{ht.ce&&ht.ce._def.shadowRoot!==!1&&ht.ce._injectChildStyle(Ye);const ft=y.subTree=cc(y);D(null,ft,P,U,y,M,F),w.el=ft.el}if(Ce&&Nt(Ce,M),!St&&(J=se&&se.onVnodeMounted)){const ft=w;Nt(()=>Xt(J,ye,ft),M)}(w.shapeFlag&256||ye&&ei(ye.vnode)&&ye.vnode.shapeFlag&256)&&y.a&&Nt(y.a,M),y.isMounted=!0,w=P=U=null}};y.scope.on();const B=y.effect=new cp(q);y.scope.off();const j=y.update=B.run.bind(B),re=y.job=B.runIfDirty.bind(B);re.i=y,re.id=y.uid,B.scheduler=()=>Vl(re),Ir(y,!0),j()},we=(y,w,P)=>{w.component=y;const U=y.vnode.props;y.vnode=w,y.next=null,Ty(y,w.props,U,P),by(y,w.children,P),Cn(),Rh(y),Sn()},pe=(y,w,P,U,M,F,K,q,B=!1)=>{const j=y&&y.children,re=y?y.shapeFlag:0,J=w.children,{patchFlag:ee,shapeFlag:se}=w;if(ee>0){if(ee&128){Qt(j,J,P,U,M,F,K,q,B);return}else if(ee&256){Ct(j,J,P,U,M,F,K,q,B);return}}se&8?(re&16&&ut(j,M,F),J!==j&&f(P,J)):re&16?se&16?Qt(j,J,P,U,M,F,K,q,B):ut(j,M,F,!0):(re&8&&f(P,""),se&16&&v(J,P,U,M,F,K,q,B))},Ct=(y,w,P,U,M,F,K,q,B)=>{y=y||Xr,w=w||Xr;const j=y.length,re=w.length,J=Math.min(j,re);let ee;for(ee=0;ee<J;ee++){const se=w[ee]=B?Hn(w[ee]):tn(w[ee]);D(y[ee],se,P,null,M,F,K,q,B)}j>re?ut(y,M,F,!0,!1,J):v(w,P,U,M,F,K,q,B,J)},Qt=(y,w,P,U,M,F,K,q,B)=>{let j=0;const re=w.length;let J=y.length-1,ee=re-1;for(;j<=J&&j<=ee;){const se=y[j],fe=w[j]=B?Hn(w[j]):tn(w[j]);if(Hs(se,fe))D(se,fe,P,null,M,F,K,q,B);else break;j++}for(;j<=J&&j<=ee;){const se=y[J],fe=w[ee]=B?Hn(w[ee]):tn(w[ee]);if(Hs(se,fe))D(se,fe,P,null,M,F,K,q,B);else break;J--,ee--}if(j>J){if(j<=ee){const se=ee+1,fe=se<re?w[se].el:U;for(;j<=ee;)D(null,w[j]=B?Hn(w[j]):tn(w[j]),P,fe,M,F,K,q,B),j++}}else if(j>ee)for(;j<=J;)rt(y[j],M,F,!0),j++;else{const se=j,fe=j,Ce=new Map;for(j=fe;j<=ee;j++){const st=w[j]=B?Hn(w[j]):tn(w[j]);st.key!=null&&Ce.set(st.key,j)}let ye,ht=0;const Ye=ee-fe+1;let St=!1,ft=0;const Ht=new Array(Ye);for(j=0;j<Ye;j++)Ht[j]=0;for(j=se;j<=J;j++){const st=y[j];if(ht>=Ye){rt(st,M,F,!0);continue}let Xe;if(st.key!=null)Xe=Ce.get(st.key);else for(ye=fe;ye<=ee;ye++)if(Ht[ye-fe]===0&&Hs(st,w[ye])){Xe=ye;break}Xe===void 0?rt(st,M,F,!0):(Ht[Xe-fe]=j+1,Xe>=ft?ft=Xe:St=!0,D(st,w[Xe],P,null,M,F,K,q,B),ht++)}const Ur=St?Vy(Ht):Xr;for(ye=Ur.length-1,j=Ye-1;j>=0;j--){const st=fe+j,Xe=w[st],Ss=w[st+1],_r=st+1<re?Ss.el||Ss.placeholder:U;Ht[j]===0?D(null,Xe,P,_r,M,F,K,q,B):St&&(ye<0||j!==Ur[ye]?kt(Xe,P,_r,2):ye--)}}},kt=(y,w,P,U,M=null)=>{const{el:F,type:K,transition:q,children:B,shapeFlag:j}=y;if(j&6){kt(y.component.subTree,w,P,U);return}if(j&128){y.suspense.move(w,P,U);return}if(j&64){K.move(y,w,P,Z);return}if(K===En){r(F,w,P);for(let J=0;J<B.length;J++)kt(B[J],w,P,U);r(y.anchor,w,P);return}if(K===po){H(y,w,P);return}if(U!==2&&j&1&&q)if(U===0)q.beforeEnter(F),r(F,w,P),Nt(()=>q.enter(F),M);else{const{leave:J,delayLeave:ee,afterLeave:se}=q,fe=()=>{y.ctx.isUnmounted?s(F):r(F,w,P)},Ce=()=>{F._isLeaving&&F[Y_](!0),J(F,()=>{fe(),se&&se()})};ee?ee(F,fe,Ce):Ce()}else r(F,w,P)},rt=(y,w,P,U=!1,M=!1)=>{const{type:F,props:K,ref:q,children:B,dynamicChildren:j,shapeFlag:re,patchFlag:J,dirs:ee,cacheIndex:se}=y;if(J===-2&&(M=!1),q!=null&&(Cn(),Zs(q,null,P,y,!0),Sn()),se!=null&&(w.renderCache[se]=void 0),re&256){w.ctx.deactivate(y);return}const fe=re&1&&ee,Ce=!ei(y);let ye;if(Ce&&(ye=K&&K.onVnodeBeforeUnmount)&&Xt(ye,w,y),re&6)Nn(y.component,P,U);else{if(re&128){y.suspense.unmount(P,U);return}fe&&wr(y,null,w,"beforeUnmount"),re&64?y.type.remove(y,w,P,Z,U):j&&!j.hasOnce&&(F!==En||J>0&&J&64)?ut(j,w,P,!1,!0):(F===En&&J&384||!M&&re&16)&&ut(B,w,P),U&&mn(y)}(Ce&&(ye=K&&K.onVnodeUnmounted)||fe)&&Nt(()=>{ye&&Xt(ye,w,y),fe&&wr(y,null,w,"unmounted")},P)},mn=y=>{const{type:w,el:P,anchor:U,transition:M}=y;if(w===En){jt(P,U);return}if(w===po){z(y);return}const F=()=>{s(P),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(y.shapeFlag&1&&M&&!M.persisted){const{leave:K,delayLeave:q}=M,B=()=>K(P,F);q?q(y.el,F,B):B()}else F()},jt=(y,w)=>{let P;for(;y!==w;)P=g(y),s(y),y=P;s(w)},Nn=(y,w,P)=>{const{bum:U,scope:M,job:F,subTree:K,um:q,m:B,a:j}=y;xh(B),xh(j),U&&lo(U),M.stop(),F&&(F.flags|=8,rt(K,y,w,P)),q&&Nt(q,w),Nt(()=>{y.isUnmounted=!0},w)},ut=(y,w,P,U=!1,M=!1,F=0)=>{for(let K=F;K<y.length;K++)rt(y[K],w,P,U,M)},x=y=>{if(y.shapeFlag&6)return x(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=g(y.anchor||y.el),P=w&&w[Q_];return P?g(P):w};let Y=!1;const W=(y,w,P)=>{y==null?w._vnode&&rt(w._vnode,null,null,!0):D(w._vnode||null,y,w,null,null,null,P),w._vnode=y,Y||(Y=!0,Rh(),Rp(),Y=!1)},Z={p:D,um:rt,m:kt,r:mn,mt:$e,mc:v,pc:pe,pbc:I,n:x,o:t};let Ee,Se;return e&&([Ee,Se]=e(Z)),{render:W,hydrate:Ee,createApp:vy(W,Ee)}}function ac({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Ir({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Py(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Hn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Kp(o,c)),c.type===pa&&c.patchFlag!==-1&&(c.el=o.el),c.type===ir&&!c.el&&(c.el=o.el)}}function Vy(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wp(e)}function xh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ky=Symbol.for("v-scx"),Dy=()=>Ut(ky);function fo(t,e,n){return Qp(t,e,n)}function Qp(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=tt({},n),l=e&&r||!e&&i!=="post";let u;if(gi){if(i==="sync"){const _=Dy();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=zt,_.resume=zt,_.pause=zt,_}}const f=_t;c.call=(_,k,D)=>fn(_,f,k,D);let p=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,k)=>{k?_():Vl(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=q_(t,e,c);return gi&&(u?u.push(g):l&&g()),g}function Ny(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?Jp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const o=Pi(this),c=Qp(s,i.bind(r),n);return o(),c}function Jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Oy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Bt(e)}Modifiers`]||t[`${gr(e)}Modifiers`];function My(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&Oy(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(Co)));let c,l=r[c=tc(e)]||r[c=tc(Bt(e))];!l&&i&&(l=r[c=tc(gr(e))]),l&&fn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,fn(u,t,6,s)}}const xy=new WeakMap;function Yp(t,e,n=!1){const r=n?xy:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!ue(t)){const l=u=>{const f=Yp(u,e,!0);f&&(c=!0,tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Oe(t)&&r.set(t,null),null):(ie(i)?i.forEach(l=>o[l]=null):tt(o,i),Oe(t)&&r.set(t,o),o)}function da(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,gr(e))||be(t,e))}function cc(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:k,inheritAttrs:D}=t,R=Vo(t);let O,N;try{if(n.shapeFlag&4){const z=s||r,te=z;O=tn(u.call(te,z,f,p,_,g,k)),N=c}else{const z=e;O=tn(z.length>1?z(p,{attrs:c,slots:o,emit:l}):z(p,null)),N=e.props?c:Ly(c)}}catch(z){ni.length=0,ha(z,t,1),O=Pe(ir)}let H=O;if(N&&D!==!1){const z=Object.keys(N),{shapeFlag:te}=H;z.length&&te&7&&(i&&z.some(yl)&&(N=Fy(N,i)),H=ls(H,N,!1,!0))}return n.dirs&&(H=ls(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&kl(H,n.transition),O=H,Vo(R),O}const Ly=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},Fy=(t,e)=>{const n={};for(const r in t)(!yl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Uy(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Lh(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!da(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Lh(r,o,u):!0:!!o;return!1}function Lh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function $y({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Xp=t=>t.__isSuspense;function By(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):K_(t)}const En=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),ir=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),ni=[];let Mt=null;function $t(t=!1){ni.push(Mt=t?null:[])}function jy(){ni.pop(),Mt=ni[ni.length-1]||null}let pi=1;function No(t,e=!1){pi+=t,t<0&&Mt&&e&&(Mt.hasOnce=!0)}function Zp(t){return t.dynamicChildren=pi>0?Mt||Xr:null,jy(),pi>0&&Mt&&Mt.push(t),t}function or(t,e,n,r,s,i){return Zp(nn(t,e,n,r,s,i,!0))}function ga(t,e,n,r,s){return Zp(Pe(t,e,n,r,s,!0))}function Oo(t){return t?t.__v_isVNode===!0:!1}function Hs(t,e){return t.type===e.type&&t.key===e.key}const eg=({key:t})=>t!=null?t:null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||vt(t)||ue(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function nn(t,e=null,n=null,r=0,s=null,i=t===En?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&eg(e),ref:e&&go(e),scopeId:Vp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return c?(xl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),pi>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const Pe=Hy;function Hy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===uy)&&(t=ir),Oo(t)){const c=ls(t,e,!0);return n&&xl(c,n),pi>0&&!i&&Mt&&(c.shapeFlag&6?Mt[Mt.indexOf(t)]=c:Mt.push(c)),c.patchFlag=-2,c}if(n0(t)&&(t=t.__vccOpts),e){e=qy(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=It(c)),Oe(l)&&(Rl(l)&&!ie(l)&&(l=tt({},l)),e.style=Tl(l))}const o=We(t)?1:Xp(t)?128:J_(t)?64:Oe(t)?4:ue(t)?2:0;return nn(t,e,n,r,s,o,i,!0)}function qy(t){return t?Rl(t)||Bp(t)?tt({},t):t:null}function ls(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?Gy(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&eg(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==En?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ls(t.ssContent),ssFallback:t.ssFallback&&ls(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&kl(f,l.clone(f)),f}function zy(t=" ",e=0){return Pe(pa,null,t,e)}function tg(t,e){const n=Pe(po,null,t);return n.staticCount=e,n}function Fh(t="",e=!1){return e?($t(),ga(ir,null,t)):Pe(ir,null,t)}function tn(t){return t==null||typeof t=="boolean"?Pe(ir):ie(t)?Pe(En,null,t.slice()):Oo(t)?Hn(t):Pe(pa,null,String(t))}function Hn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ls(t)}function xl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Bp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[zy(e)]):n=8);t.children=e,t.shapeFlag|=n}function Gy(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=It([e.class,r.class]));else if(s==="style")e.style=Tl([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ie(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){fn(t,e,7,[n,r])}const Ky=Fp();let Wy=0;function Qy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ky,i={uid:Wy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new __(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hp(r,s),emitsOptions:Yp(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=My.bind(null,i),t.ce&&t.ce(i),i}let _t=null;const Jy=()=>_t||Ot;let Mo,xc;{const t=Si(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>_t=n),xc=e("__VUE_SSR_SETTERS__",n=>gi=n)}const Pi=t=>{const e=_t;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Uh=()=>{_t&&_t.scope.off(),Mo(null)};function ng(t){return t.vnode.shapeFlag&4}let gi=!1;function Yy(t,e=!1,n=!1){e&&xc(e);const{props:r,children:s}=t.vnode,i=ng(t);Ey(t,r,i,e),Ay(t,s,n||e);const o=i?Xy(t,e):void 0;return e&&xc(!1),o}function Xy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,fy);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?e0(t):null,i=Pi(t),o=Ri(r,t,0,[t.props,s]),c=tp(o);if(Sn(),i(),(c||t.sp)&&!ei(t)&&kp(t),c){if(o.then(Uh,Uh),e)return o.then(l=>{$h(t,l,e)}).catch(l=>{ha(l,t,0)});t.asyncDep=o}else $h(t,o,e)}else rg(t,e)}function $h(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Oe(e)&&(t.setupState=bp(e)),rg(t,n)}let Bh;function rg(t,e,n){const r=t.type;if(!t.render){if(!e&&Bh&&!r.render){const s=r.template||Nl(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,u=tt(tt({isCustomElement:i,delimiters:c},o),l);r.render=Bh(s,u)}}t.render=r.render||zt}{const s=Pi(t);Cn();try{dy(t)}finally{Sn(),s()}}}const Zy={get(t,e){return gt(t,"get",""),t[e]}};function e0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Zy),slots:t.slots,emit:t.emit,expose:e}}function ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bp(L_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}})):t.proxy}function t0(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function n0(t){return ue(t)&&"__vccOpts"in t}const Ne=(t,e)=>j_(t,e,gi);function sg(t,e,n){const r=(i,o,c)=>{No(-1);try{return Pe(i,o,c)}finally{No(1)}},s=arguments.length;return s===2?Oe(e)&&!ie(e)?Oo(e)?r(t,null,[e]):r(t,e):r(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Oo(n)&&(n=[n]),r(t,e,n))}const r0="3.5.21";/**
* @vue/runtime-dom v3.5.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lc;const jh=typeof window<"u"&&window.trustedTypes;if(jh)try{Lc=jh.createPolicy("vue",{createHTML:t=>t})}catch{}const ig=Lc?t=>Lc.createHTML(t):t=>t,s0="http://www.w3.org/2000/svg",i0="http://www.w3.org/1998/Math/MathML",vn=typeof document<"u"?document:null,Hh=vn&&vn.createElement("template"),o0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?vn.createElementNS(s0,t):e==="mathml"?vn.createElementNS(i0,t):n?vn.createElement(t,{is:n}):vn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>vn.createTextNode(t),createComment:t=>vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hh.innerHTML=ig(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Hh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},a0=Symbol("_vtc");function c0(t,e,n){const r=t[a0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qh=Symbol("_vod"),l0=Symbol("_vsh"),u0=Symbol(""),h0=/(?:^|;)\s*display\s*:/;function f0(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&mo(r,c,"")}else for(const o in e)n[o]==null&&mo(r,o,"");for(const o in n)o==="display"&&(i=!0),mo(r,o,n[o])}else if(s){if(e!==n){const o=r[u0];o&&(n+=";"+o),r.cssText=n,i=h0.test(n)}}else e&&t.removeAttribute("style");qh in t&&(t[qh]=i?r.display:"",t[l0]&&(r.display="none"))}const zh=/\s*!important$/;function mo(t,e,n){if(ie(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=d0(t,e);zh.test(n)?t.setProperty(gr(r),n.replace(zh,""),"important"):t[r]=n}}const Gh=["Webkit","Moz","ms"],lc={};function d0(t,e){const n=lc[e];if(n)return n;let r=Bt(e);if(r!=="filter"&&r in t)return lc[e]=r;r=aa(r);for(let s=0;s<Gh.length;s++){const i=Gh[s]+r;if(i in t)return lc[e]=i}return e}const Kh="http://www.w3.org/1999/xlink";function Wh(t,e,n,r,s,i=p_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kh,e.slice(6,e.length)):t.setAttributeNS(Kh,e,n):n==null||i&&!ip(n)?t.removeAttribute(e):t.setAttribute(e,i?"":hn(n)?String(n):n)}function Qh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ig(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ip(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Cr(t,e,n,r){t.addEventListener(e,n,r)}function p0(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function g0(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=m0(e);if(r){const u=i[e]=v0(r,s);Cr(t,c,u,l)}else o&&(p0(t,c,o,l),i[e]=void 0)}}const Yh=/(?:Once|Passive|Capture)$/;function m0(t){let e;if(Yh.test(t)){e={};let r;for(;r=t.match(Yh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):gr(t.slice(2)),e]}let uc=0;const _0=Promise.resolve(),y0=()=>uc||(_0.then(()=>uc=0),uc=Date.now());function v0(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;fn(E0(r,n.value),e,5,[r])};return n.value=t,n.attached=y0(),n}function E0(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Xh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,T0=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?c0(t,r,o):e==="style"?f0(t,n,r):sa(e)?yl(e)||g0(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w0(t,e,r,o))?(Qh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!We(r))?Qh(t,Bt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wh(t,e,r,o))};function w0(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xh(e)&&We(n)?!1:e in t}const xo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>lo(e,n):e};function I0(t){t.target.composing=!0}function Zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs=Symbol("_assign"),tS={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rs]=xo(s);const i=r||s.props&&s.props.type==="number";Cr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=Co(c)),t[rs](c)}),n&&Cr(t,"change",()=>{t.value=t.value.trim()}),e||(Cr(t,"compositionstart",I0),Cr(t,"compositionend",Zh),Cr(t,"change",Zh))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[rs]=xo(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Co(t.value):t.value,l=e==null?"":e;c!==l&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l))}},nS={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=ia(e);Cr(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Co(Lo(o)):Lo(o));t[rs](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,Pl(()=>{t._assigning=!1})}),t[rs]=xo(r)},mounted(t,{value:e}){ef(t,e)},beforeUpdate(t,e,n){t[rs]=xo(n)},updated(t,{value:e}){t._assigning||ef(t,e)}};function ef(t,e){const n=t.multiple,r=ie(e);if(!(n&&!r&&!ia(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Lo(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=m_(e,c)>-1}else o.selected=e.has(c);else if(ca(Lo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Lo(t){return"_value"in t?t._value:t.value}const A0=["ctrl","shift","alt","meta"],b0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>A0.some(n=>t[`${n}Key`]&&!e.includes(n))},C0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=b0[e[o]];if(c&&c(s,e))return}return t(s,...i)})},S0={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},rS=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=gr(s.key);if(e.some(o=>o===i||S0[o]===i))return t(s)})},R0=tt({patchProp:T0},o0);let tf;function P0(){return tf||(tf=Sy(R0))}const V0=(...t)=>{const e=P0().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=D0(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,k0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function k0(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function D0(t){return We(t)?document.querySelector(t):t}const N0="modulepreload",O0=function(t){return"/zoskyCube/"+t},nf={},it=function(e,n,r){if(!n||n.length===0)return e();const s=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=O0(i),i in nf)return;nf[i]=!0;const o=i.endsWith(".css"),c=o?'[rel="stylesheet"]':"";if(!!r)for(let f=s.length-1;f>=0;f--){const p=s[f];if(p.href===i&&(!o||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${c}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":N0,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof document<"u";function og(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function M0(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&og(t.default)}const Ie=Object.assign;function hc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Kt(s)?s.map(t):t(s)}return n}const ri=()=>{},Kt=Array.isArray,ag=/#/g,x0=/&/g,L0=/\//g,F0=/=/g,U0=/\?/g,cg=/\+/g,$0=/%5B/g,B0=/%5D/g,lg=/%5E/g,j0=/%60/g,ug=/%7B/g,H0=/%7C/g,hg=/%7D/g,q0=/%20/g;function Ll(t){return encodeURI(""+t).replace(H0,"|").replace($0,"[").replace(B0,"]")}function z0(t){return Ll(t).replace(ug,"{").replace(hg,"}").replace(lg,"^")}function Fc(t){return Ll(t).replace(cg,"%2B").replace(q0,"+").replace(ag,"%23").replace(x0,"%26").replace(j0,"`").replace(ug,"{").replace(hg,"}").replace(lg,"^")}function G0(t){return Fc(t).replace(F0,"%3D")}function K0(t){return Ll(t).replace(ag,"%23").replace(U0,"%3F")}function W0(t){return t==null?"":K0(t).replace(L0,"%2F")}function mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Q0=/\/$/,J0=t=>t.replace(Q0,"");function fc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return c<l&&c>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,c>-1?c:e.length),s=t(i)),c>-1&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=ev(r!=null?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:mi(o)}}function Y0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function X0(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&us(e.matched[r],n.matched[s])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Z0(t[n],e[n]))return!1;return!0}function Z0(t,e){return Kt(t)?sf(t,e):Kt(e)?sf(e,t):t===e}function sf(t,e){return Kt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ev(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const $n={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(si||(si={}));function tv(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),J0(t)}const nv=/^[^#]+#/;function rv(t,e){return t.replace(nv,"#")+e}function sv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const _a=()=>({left:window.scrollX,top:window.scrollY});function iv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=sv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function of(t,e){return(history.state?history.state.position-e:-1)+t}const Uc=new Map;function ov(t,e){Uc.set(t,e)}function av(t){const e=Uc.get(t);return Uc.delete(t),e}let cv=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),rf(l,"")}return rf(n,t)+r+s}function lv(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=dg(t,location),k=n.value,D=e.value;let R=0;if(g){if(n.value=_,e.value=g,o&&o===k){o=null;return}R=D?g.position-D.position:0}else r(_);s.forEach(O=>{O(n.value,k,{delta:R,type:_i.pop,direction:R?R>0?si.forward:si.back:si.unknown})})};function l(){o=n.value}function u(g){s.push(g);const _=()=>{const k=s.indexOf(g);k>-1&&s.splice(k,1)};return i.push(_),_}function f(){const{history:g}=window;!g.state||g.replaceState(Ie({},g.state,{scroll:_a()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:l,listen:u,destroy:p}}function af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?_a():null}}function uv(t){const{history:e,location:n}=window,r={value:dg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:cv()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,u){const f=Ie({},e.state,af(s.value.back,l,s.value.forward,!0),u,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,u){const f=Ie({},s.value,e.state,{forward:l,scroll:_a()});i(f.current,f,!0);const p=Ie({},af(r.value,l,null),{position:f.position+1},u);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function hv(t){t=tv(t);const e=uv(t),n=lv(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ie({location:"",base:t,go:r,createHref:rv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function fv(t){return typeof t=="string"||t&&typeof t=="object"}function pg(t){return typeof t=="string"||typeof t=="symbol"}const gg=Symbol("");var cf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(cf||(cf={}));function hs(t,e){return Ie(new Error,{type:t,[gg]:!0},e)}function yn(t,e){return t instanceof Error&&gg in t&&(e==null||!!(t.type&e))}const lf="[^/]+?",dv={sensitive:!1,strict:!1,start:!0,end:!0},pv=/[.+*?^${}()[\]/\\]/g;function gv(t,e){const n=Ie({},dv,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(pv,"\\$&"),_+=40;else if(g.type===1){const{value:k,repeatable:D,optional:R,regexp:O}=g;i.push({name:k,repeatable:D,optional:R});const N=O||lf;if(N!==lf){_+=10;try{new RegExp(`(${N})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${k}" (${N}): `+z.message)}}let H=D?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;p||(H=R&&u.length<2?`(?:/${H})`:"/"+H),R&&(H+="?"),s+=H,_+=20,R&&(_+=-8),D&&(_+=-20),N===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",k=i[g-1];p[k.name]=_&&k.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:k,repeatable:D,optional:R}=_,O=k in u?u[k]:"";if(Kt(O)&&!D)throw new Error(`Provided param "${k}" is an array but it is not repeatable (* or + modifiers)`);const N=Kt(O)?O.join("/"):O;if(!N)if(R)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${k}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function mv(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function mg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=mv(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(uf(r))return 1;if(uf(s))return-1}return s.length-r.length}function uf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _v={type:0,value:""},yv=/[a-zA-Z0-9_]/;function vv(t){if(!t)return[[]];if(t==="/")return[[_v]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){!u||(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:yv.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}function Ev(t,e,n){const r=gv(vv(t.path),n),s=Ie(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Tv(t,e){const n=[],r=new Map;e=pf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const k=!_,D=ff(p);D.aliasOf=_&&_.record;const R=pf(e,p),O=[D];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const te of z)O.push(ff(Ie({},D,{components:_?_.record.components:D.components,path:te,aliasOf:_?_.record:D})))}let N,H;for(const z of O){const{path:te}=z;if(g&&te[0]!=="/"){const ae=g.record.path,A=ae[ae.length-1]==="/"?"":"/";z.path=g.record.path+(te&&A+te)}if(N=Ev(z,g,R),_?_.alias.push(N):(H=H||N,H!==N&&H.alias.push(N),k&&p.name&&!df(N)&&o(p.name)),_g(N)&&l(N),D.children){const ae=D.children;for(let A=0;A<ae.length;A++)i(ae[A],N,_&&_.children[A])}_=_||N}return H?()=>{o(H)}:ri}function o(p){if(pg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const g=Av(p,n);n.splice(g,0,p),p.record.name&&!df(p)&&r.set(p.record.name,p)}function u(p,g){let _,k={},D,R;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw hs(1,{location:p});R=_.record.name,k=Ie(hf(g.params,_.keys.filter(H=>!H.optional).concat(_.parent?_.parent.keys.filter(H=>H.optional):[]).map(H=>H.name)),p.params&&hf(p.params,_.keys.map(H=>H.name))),D=_.stringify(k)}else if(p.path!=null)D=p.path,_=n.find(H=>H.re.test(D)),_&&(k=_.parse(D),R=_.record.name);else{if(_=g.name?r.get(g.name):n.find(H=>H.re.test(g.path)),!_)throw hs(1,{location:p,currentLocation:g});R=_.record.name,k=Ie({},g.params,p.params),D=_.stringify(k)}const O=[];let N=_;for(;N;)O.unshift(N.record),N=N.parent;return{name:R,path:D,params:k,matched:O,meta:Iv(O)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function hf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:wv(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function wv(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Iv(t){return t.reduce((e,n)=>Ie(e,n.meta),{})}function pf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Av(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;mg(t,e[i])<0?r=i:n=i+1}const s=bv(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function bv(t){let e=t;for(;e=e.parent;)if(_g(e)&&mg(t,e)===0)return e}function _g({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cv(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(cg," "),o=i.indexOf("="),c=mi(o<0?i:i.slice(0,o)),l=o<0?null:mi(i.slice(o+1));if(c in e){let u=e[c];Kt(u)||(u=e[c]=[u]),u.push(l)}else e[c]=l}return e}function gf(t){let e="";for(let n in t){const r=t[n];if(n=G0(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Kt(r)?r.map(i=>i&&Fc(i)):[r&&Fc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Sv(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Kt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Rv=Symbol(""),mf=Symbol(""),ya=Symbol(""),Fl=Symbol(""),$c=Symbol("");function qs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(hs(4,{from:n,to:e})):g instanceof Error?l(g):fv(g)?l(hs(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>l(g))})}function dc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(og(l)){const f=(l.__vccOpts||l)[e];f&&i.push(qn(f,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=M0(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const _=(p.__vccOpts||p)[e];return _&&qn(_,n,r,o,c,s)()}))}}return i}function _f(t){const e=Ut(ya),n=Ut(Fl),r=Ne(()=>{const l=Te(t.to);return e.resolve(l)}),s=Ne(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(us.bind(null,f));if(g>-1)return g;const _=yf(l[u-2]);return u>1&&yf(f)===_&&p[p.length-1].path!==_?p.findIndex(us.bind(null,l[u-2])):g}),i=Ne(()=>s.value>-1&&Nv(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&fg(n.params,r.value.params));function c(l={}){if(Dv(l)){const u=e[Te(t.replace)?"replace":"push"](Te(t.to)).catch(ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Pv(t){return t.length===1?t[0]:t}const Vv=Dl({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_f,setup(t,{slots:e}){const n=ua(_f(t)),{options:r}=Ut(ya),s=Ne(()=>({[vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Pv(e.default(n));return t.custom?i:sg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),kv=Vv;function Dv(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Nv(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Kt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vf=(t,e,n)=>t!=null?t:e!=null?e:n,Ov=Dl({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ut($c),s=Ne(()=>t.route||r.value),i=Ut(mf,0),o=Ne(()=>{let u=Te(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ne(()=>s.value.matched[o.value]);ho(mf,Ne(()=>o.value+1)),ho(Rv,c),ho($c,s);const l=At();return fo(()=>[l.value,c.value,t.name],([u,f,p],[g,_,k])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!us(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(D=>D(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,g=p&&p.components[f];if(!g)return Ef(n.default,{Component:g,route:u});const _=p.props[f],k=_?_===!0?u.params:typeof _=="function"?_(u):_:null,R=sg(g,Ie({},k,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Ef(n.default,{Component:R,route:u})||R}}});function Ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Mv=Ov;function xv(t){const e=Tv(t.routes,t),n=t.parseQuery||Cv,r=t.stringifyQuery||gf,s=t.history,i=qs(),o=qs(),c=qs(),l=F_($n);let u=$n;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=hc.bind(null,x=>""+x),p=hc.bind(null,W0),g=hc.bind(null,mi);function _(x,Y){let W,Z;return pg(x)?(W=e.getRecordMatcher(x),Z=Y):Z=x,e.addRoute(Z,W)}function k(x){const Y=e.getRecordMatcher(x);Y&&e.removeRoute(Y)}function D(){return e.getRoutes().map(x=>x.record)}function R(x){return!!e.getRecordMatcher(x)}function O(x,Y){if(Y=Ie({},Y||l.value),typeof x=="string"){const w=fc(n,x,Y.path),P=e.resolve({path:w.path},Y),U=s.createHref(w.fullPath);return Ie(w,P,{params:g(P.params),hash:mi(w.hash),redirectedFrom:void 0,href:U})}let W;if(x.path!=null)W=Ie({},x,{path:fc(n,x.path,Y.path).path});else{const w=Ie({},x.params);for(const P in w)w[P]==null&&delete w[P];W=Ie({},x,{params:p(w)}),Y.params=p(Y.params)}const Z=e.resolve(W,Y),Ee=x.hash||"";Z.params=f(g(Z.params));const Se=Y0(r,Ie({},x,{hash:z0(Ee),path:Z.path})),y=s.createHref(Se);return Ie({fullPath:Se,hash:Ee,query:r===gf?Sv(x.query):x.query||{}},Z,{redirectedFrom:void 0,href:y})}function N(x){return typeof x=="string"?fc(n,x,l.value.path):Ie({},x)}function H(x,Y){if(u!==x)return hs(8,{from:Y,to:x})}function z(x){return A(x)}function te(x){return z(Ie(N(x),{replace:!0}))}function ae(x){const Y=x.matched[x.matched.length-1];if(Y&&Y.redirect){const{redirect:W}=Y;let Z=typeof W=="function"?W(x):W;return typeof Z=="string"&&(Z=Z.includes("?")||Z.includes("#")?Z=N(Z):{path:Z},Z.params={}),Ie({query:x.query,hash:x.hash,params:Z.path!=null?{}:x.params},Z)}}function A(x,Y){const W=u=O(x),Z=l.value,Ee=x.state,Se=x.force,y=x.replace===!0,w=ae(W);if(w)return A(Ie(N(w),{state:typeof w=="object"?Ie({},Ee,w.state):Ee,force:Se,replace:y}),Y||W);const P=W;P.redirectedFrom=Y;let U;return!Se&&X0(r,Z,W)&&(U=hs(16,{to:P,from:Z}),kt(Z,Z,!0,!1)),(U?Promise.resolve(U):I(P,Z)).catch(M=>yn(M)?yn(M,2)?M:Qt(M):pe(M,P,Z)).then(M=>{if(M){if(yn(M,2))return A(Ie({replace:y},N(M.to),{state:typeof M.to=="object"?Ie({},Ee,M.to.state):Ee,force:Se}),Y||P)}else M=C(P,Z,!0,y,Ee);return b(P,Z,M),M})}function v(x,Y){const W=H(x,Y);return W?Promise.reject(W):Promise.resolve()}function T(x){const Y=jt.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(x):x()}function I(x,Y){let W;const[Z,Ee,Se]=Lv(x,Y);W=dc(Z.reverse(),"beforeRouteLeave",x,Y);for(const w of Z)w.leaveGuards.forEach(P=>{W.push(qn(P,x,Y))});const y=v.bind(null,x,Y);return W.push(y),ut(W).then(()=>{W=[];for(const w of i.list())W.push(qn(w,x,Y));return W.push(y),ut(W)}).then(()=>{W=dc(Ee,"beforeRouteUpdate",x,Y);for(const w of Ee)w.updateGuards.forEach(P=>{W.push(qn(P,x,Y))});return W.push(y),ut(W)}).then(()=>{W=[];for(const w of Se)if(w.beforeEnter)if(Kt(w.beforeEnter))for(const P of w.beforeEnter)W.push(qn(P,x,Y));else W.push(qn(w.beforeEnter,x,Y));return W.push(y),ut(W)}).then(()=>(x.matched.forEach(w=>w.enterCallbacks={}),W=dc(Se,"beforeRouteEnter",x,Y,T),W.push(y),ut(W))).then(()=>{W=[];for(const w of o.list())W.push(qn(w,x,Y));return W.push(y),ut(W)}).catch(w=>yn(w,8)?w:Promise.reject(w))}function b(x,Y,W){c.list().forEach(Z=>T(()=>Z(x,Y,W)))}function C(x,Y,W,Z,Ee){const Se=H(x,Y);if(Se)return Se;const y=Y===$n,w=Gr?history.state:{};W&&(Z||y?s.replace(x.fullPath,Ie({scroll:y&&w&&w.scroll},Ee)):s.push(x.fullPath,Ee)),l.value=x,kt(x,Y,W,y),Qt()}let E;function $e(){E||(E=s.listen((x,Y,W)=>{if(!Nn.listening)return;const Z=O(x),Ee=ae(Z);if(Ee){A(Ie(Ee,{replace:!0,force:!0}),Z).catch(ri);return}u=Z;const Se=l.value;Gr&&ov(of(Se.fullPath,W.delta),_a()),I(Z,Se).catch(y=>yn(y,12)?y:yn(y,2)?(A(Ie(N(y.to),{force:!0}),Z).then(w=>{yn(w,20)&&!W.delta&&W.type===_i.pop&&s.go(-1,!1)}).catch(ri),Promise.reject()):(W.delta&&s.go(-W.delta,!1),pe(y,Z,Se))).then(y=>{y=y||C(Z,Se,!1),y&&(W.delta&&!yn(y,8)?s.go(-W.delta,!1):W.type===_i.pop&&yn(y,20)&&s.go(-1,!1)),b(Z,Se,y)}).catch(ri)}))}let nt=qs(),Le=qs(),we;function pe(x,Y,W){Qt(x);const Z=Le.list();return Z.length?Z.forEach(Ee=>Ee(x,Y,W)):console.error(x),Promise.reject(x)}function Ct(){return we&&l.value!==$n?Promise.resolve():new Promise((x,Y)=>{nt.add([x,Y])})}function Qt(x){return we||(we=!x,$e(),nt.list().forEach(([Y,W])=>x?W(x):Y()),nt.reset()),x}function kt(x,Y,W,Z){const{scrollBehavior:Ee}=t;if(!Gr||!Ee)return Promise.resolve();const Se=!W&&av(of(x.fullPath,0))||(Z||!W)&&history.state&&history.state.scroll||null;return Pl().then(()=>Ee(x,Y,Se)).then(y=>y&&iv(y)).catch(y=>pe(y,x,Y))}const rt=x=>s.go(x);let mn;const jt=new Set,Nn={currentRoute:l,listening:!0,addRoute:_,removeRoute:k,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:D,resolve:O,options:t,push:z,replace:te,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Le.add,isReady:Ct,install(x){const Y=this;x.component("RouterLink",kv),x.component("RouterView",Mv),x.config.globalProperties.$router=Y,Object.defineProperty(x.config.globalProperties,"$route",{enumerable:!0,get:()=>Te(l)}),Gr&&!mn&&l.value===$n&&(mn=!0,z(s.location).catch(Ee=>{}));const W={};for(const Ee in $n)Object.defineProperty(W,Ee,{get:()=>l.value[Ee],enumerable:!0});x.provide(ya,Y),x.provide(Fl,wp(W)),x.provide($c,l);const Z=x.unmount;jt.add(x),x.unmount=function(){jt.delete(x),jt.size<1&&(u=$n,E&&E(),E=null,l.value=$n,mn=!1,we=!1),Z()}}};function ut(x){return x.reduce((Y,W)=>Y.then(()=>T(W)),Promise.resolve())}return Nn}function Lv(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>us(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>us(u,l))||s.push(l))}return[n,r,s]}function yg(){return Ut(ya)}function Fv(t){return Ut(Fl)}const Tf=[{path:"/",name:"/",component:()=>it(()=>import("./index.ed9cf391.js"),["assets/index.ed9cf391.js","assets/index.4d99888c.css"])},{path:"/:404(.*)",name:"/[...404]",component:()=>it(()=>import("./_...404_.3c47b111.js"),[])},{path:"/ark",name:"/ark",component:()=>it(()=>import("./ark.41ecdf6e.js"),["assets/ark.41ecdf6e.js","assets/ark.cb2b9785.css"])},{path:"/auth",name:"/auth",component:()=>it(()=>import("./auth.2de8d400.js"),["assets/auth.2de8d400.js","assets/Points.cf0eb099.js","assets/Points.861a0434.css"])},{path:"/collection",name:"/collection",component:()=>it(()=>import("./collection.28f36da0.js"),["assets/collection.28f36da0.js","assets/collection.ae101cc5.css"])},{path:"/counter",name:"/counter",component:()=>it(()=>import("./counter.f6bb8a5b.js"),[])},{path:"/halo",name:"/halo",component:()=>it(()=>import("./halo.4cf94a9c.js"),["assets/halo.4cf94a9c.js","assets/halo.00516e0a.css"])},{path:"/help",children:[{path:"",name:"/help/",component:()=>it(()=>import("./index.fab30f21.js"),["assets/index.fab30f21.js","assets/Points.cf0eb099.js","assets/Points.861a0434.css","assets/index.b4c28e1b.css"])},{path:"pixelPower",name:"/help/pixelPower",component:()=>it(()=>import("./pixelPower.128bfb5b.js"),["assets/pixelPower.128bfb5b.js","assets/pixelPower.04558e1b.css"])},{path:"squadRush",name:"/help/squadRush",component:()=>it(()=>import("./squadRush.395ed2a9.js"),["assets/squadRush.395ed2a9.js","assets/squadRush.f6181dd2.css"])},{path:"vodVote",name:"/help/vodVote",component:()=>it(()=>import("./vodVote.f9b7ab7c.js"),["assets/vodVote.f9b7ab7c.js","assets/Points.cf0eb099.js","assets/Points.861a0434.css","assets/vodVote.55c40847.css"])}]},{path:"/pixelPower",name:"/pixelPower",component:()=>it(()=>import("./pixelPower.03c81156.js"),["assets/pixelPower.03c81156.js","assets/pixelPower.ad8fd59f.css"])},{path:"/stats",children:[{path:"",name:"/stats/",component:()=>it(()=>import("./index.2e1eb3f5.js"),[])},{path:"compare",name:"/stats/compare",component:()=>it(()=>import("./compare.98ca2730.js"),["assets/compare.98ca2730.js","assets/SourcePieChart.56331ccf.js","assets/SourcePieChart.393315b2.css"])},{path:"user",name:"/stats/user",component:()=>it(()=>import("./user.b8f34357.js"),["assets/user.b8f34357.js","assets/Points.cf0eb099.js","assets/Points.861a0434.css","assets/SourcePieChart.56331ccf.js","assets/SourcePieChart.393315b2.css","assets/user.d60a9178.css"])}]},{path:"/videos",name:"/videos",component:()=>it(()=>import("./videos.f1dea71b.js"),["assets/videos.f1dea71b.js","assets/videos.1e049fb4.css"])},{path:"/winning",name:"/winning",component:()=>it(()=>import("./winning.513f4390.js"),["assets/winning.513f4390.js","assets/winning.e3b0c442.css"])}];function Uv(t){const{extendRoutes:e}=t;return xv(Object.assign(t,{routes:typeof e=="function"?e(Tf):Tf}))}const Vi=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},$v={},Bv={viewBox:"0 0 48 48"};function jv(t,e){return $t(),or("svg",Bv,[...e[0]||(e[0]=[tg('<polygon fill="#757575" points="24,12 24,12 24,12 11,37 13,39 14,41 15,41 13.511,38.021 24,16 35,39 37,37"></polygon><polygon fill="#757575" points="34,41 33,41 38,33 39,34"></polygon><polygon fill="#64b5f6" points="29,7 29,9 24,16 19,9 19,7"></polygon><polygon fill="#90caf9" points="22.013,7 24,10 24,7"></polygon><polygon fill="#90caf9" points="24,10 27.229,10.463 25,13"></polygon><polygon fill="#90caf9" points="21.827,11.11 24,10 22.332,13.424"></polygon><polygon fill="#039be5" points="19,7 20,7 24,16 19,9"></polygon><polygon fill="#039be5" points="29,7 28,7 24,16 29,9"></polygon><polygon fill="#757575" points="18.043,12 17,16 20,16 20,13"></polygon><polygon fill="#757575" points="24,21 24,21 23,25 24,26"></polygon><polygon fill="#90a4ae" points="42,32 37,23 35,24 35.826,21 28,9 25.181,14.347 36,37 34,41 37,41"></polygon><polygon fill="#90a4ae" points="15.13,31 12,37 14,41 11,41 6,32 11.47,22.08 13,23 12.87,19.94 16.06,15.05 19,15 18.04,12 20,9 22.82,14.35 17.26,25 24,25 24,21 29,31"></polygon><polygon fill="#c62828" points="11,41 1.83,41 3.42,38.14 4.05,37 5.04,35.21 5,32 6,32"></polygon><polygon fill="#757575" points="29,31 28,33 15,33 16.096,31"></polygon><polygon fill="#e53935" points="10,41 0,41 1.59,38.14 2.22,37 3.21,35.21 3.68,34.37 5,32 6.68,35.02 7.03,35.65 8.17,37.7 8.17,37.71"></polygon><polygon fill="#e57373" points="8.17,37.7 5,37 7.03,35.65"></polygon><polygon fill="#e57373" points="5,37 2.22,37 3.21,35.21"></polygon><polygon fill="#e57373" points="5,41 3,41 5,37"></polygon><polygon fill="#689f38" points="37,41 46.17,41 44.58,38.14 43.95,37 42.96,35.21 43,32 42,32"></polygon><polygon fill="#aeea00" points="38,41 48,41 46.41,38.14 45.78,37 44.79,35.21 44.32,34.37 43,32 41.32,35.02 40.97,35.65 39.83,37.7 39.83,37.71"></polygon><polygon fill="#b2ff59" points="39.83,37.7 43,37 40.97,35.65"></polygon><polygon fill="#b2ff59" points="43,37 45.78,37 44.79,35.21"></polygon><polygon fill="#b2ff59" points="43,41 45,41 43,37"></polygon>',23)])])}const Hv=Vi($v,[["render",jv]]),qv={},zv={viewBox:"0 0 2592 1152"};function Gv(t,e){return $t(),or("svg",zv,[...e[0]||(e[0]=[tg(`<g><g><path fill="#393E42" d="M1651.909,89.782L1656,61.361L1707.137,37c580.908,119.774,701.591,326.843,701.591,326.843H2556v269.999
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
                        h30.009c31.549-7.383,30.267-28.767,30.267-28.767C2191.444,760.554,2160.665,761.316,2160.665,761.316z"></path></g></g></g>`,1)])])}const Kv=Vi(qv,[["render",Gv]]);/*!
  * mdue v0.1.4
  * (c) 2020 Sharad Chand
  * @license MIT
  */const Wv={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 24 24"},Qv=t=>Pe("path",{d:t},null,-1),Ue=(t,e)=>Dl({name:t,render:()=>($t(),ga("svg",Wv,[Qv(e)]))}),Jv=Ue(name,"M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"),sS=Ue(name,"M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"),iS=Ue(name,"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"),Yv=Ue(name,"M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"),oS=Ue(name,"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"),aS=Ue(name,"M12,1C8.14,1 5,4.14 5,8A7,7 0 0,0 12,15C15.86,15 19,11.87 19,8C19,4.14 15.86,1 12,1M12,3.15C14.67,3.15 16.85,5.32 16.85,8C16.85,10.68 14.67,12.85 12,12.85A4.85,4.85 0 0,1 7.15,8A4.85,4.85 0 0,1 12,3.15M11,5V8.69L14.19,10.53L14.94,9.23L12.5,7.82V5M15,16V19H3V21H15V24L19,20M19,20V24H21V16H19"),cS=Ue(name,"M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"),lS=Ue(name,"M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z"),uS=Ue(name,"M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"),Xv=Ue(name,"M6,9H8V11H10V13H8V15H6V13H4V11H6V9M18.5,9A1.5,1.5 0 0,1 20,10.5A1.5,1.5 0 0,1 18.5,12A1.5,1.5 0 0,1 17,10.5A1.5,1.5 0 0,1 18.5,9M15.5,12A1.5,1.5 0 0,1 17,13.5A1.5,1.5 0 0,1 15.5,15A1.5,1.5 0 0,1 14,13.5A1.5,1.5 0 0,1 15.5,12M17,5A7,7 0 0,1 24,12A7,7 0 0,1 17,19C15.04,19 13.27,18.2 12,16.9C10.73,18.2 8.96,19 7,19A7,7 0 0,1 0,12A7,7 0 0,1 7,5H17M7,7A5,5 0 0,0 2,12A5,5 0 0,0 7,17C8.64,17 10.09,16.21 11,15H13C13.91,16.21 15.36,17 17,17A5,5 0 0,0 22,12A5,5 0 0,0 17,7H7Z"),Zv=Ue(name,"M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z"),hS=Ue(name,"M21,9H15V22H13V16H11V22H9V9H3V7H21M12,2A2,2 0 0,1 14,4A2,2 0 0,1 12,6C10.89,6 10,5.1 10,4C10,2.89 10.89,2 12,2Z"),fS=Ue(name,"M12,2A3,3 0 0,1 15,5A3,3 0 0,1 12,8A3,3 0 0,1 9,5A3,3 0 0,1 12,2M11,22H8V16H6V9H18V16H16V22H13V18H11V22Z"),dS=Ue(name,"M6,18V8H8V18H6M6,4.5H8V6.5H6V4.5M17,4H19V18H17V17.75C17,17.75 15.67,18 15,18A5,5 0 0,1 10,13A5,5 0 0,1 15,8C15.67,8 17,8.25 17,8.25V4M17,10.25C17,10.25 15.67,10 15,10A3,3 0 0,0 12,13A3,3 0 0,0 15,16C15.67,16 17,15.75 17,15.75V10.25Z"),eE=Ue(name,"M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"),pS=Ue(name,"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"),tE=Ue(name,"M17,13H13V17H11V13H7V11H11V7H13V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"),nE=Ue(name,"M15.8,18.5L21.8,20.1L21.4,22L12,19.5L2.6,22L2.1,20.1L8.1,18.5L2,16.9L2.5,15L11.9,17.5L21.3,15L21.8,16.9L15.8,18.5M18,8C18,9.8 17.2,11.3 16,12.4V15H14V13.7L14,13H13V15H11V13H10V13.7L10,15H8V12.4C6.8,11.3 6,9.8 6,8A6,6 0 0,1 12,2A6,6 0 0,1 18,8M11,7.5C11,6.7 10.3,6 9.5,6C8.7,6 8,6.7 8,7.5C8,8.3 8.7,9 9.5,9C10.3,9 11,8.3 11,7.5M13,11L12,9L11,11H13M16,7.5C16,6.7 15.3,6 14.5,6C13.7,6 13,6.7 13,7.5C13,8.3 13.7,9 14.5,9C15.3,9 16,8.3 16,7.5Z"),rE=Ue(name,"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C7.4,22 3.55,18.92 2.36,14.73L6.19,16.31C6.45,17.6 7.6,18.58 8.97,18.58C10.53,18.58 11.8,17.31 11.8,15.75V15.62L15.2,13.19H15.28C17.36,13.19 19.05,11.5 19.05,9.42C19.05,7.34 17.36,5.65 15.28,5.65C13.2,5.65 11.5,7.34 11.5,9.42V9.47L9.13,12.93L8.97,12.92C8.38,12.92 7.83,13.1 7.38,13.41L2,11.2C2.43,6.05 6.73,2 12,2M8.28,17.17C9.08,17.5 10,17.13 10.33,16.33C10.66,15.53 10.28,14.62 9.5,14.29L8.22,13.76C8.71,13.58 9.26,13.57 9.78,13.79C10.31,14 10.72,14.41 10.93,14.94C11.15,15.46 11.15,16.04 10.93,16.56C10.5,17.64 9.23,18.16 8.15,17.71C7.65,17.5 7.27,17.12 7.06,16.67L8.28,17.17M17.8,9.42C17.8,10.81 16.67,11.94 15.28,11.94C13.9,11.94 12.77,10.81 12.77,9.42A2.5,2.5 0 0,1 15.28,6.91C16.67,6.91 17.8,8.04 17.8,9.42M13.4,9.42C13.4,10.46 14.24,11.31 15.29,11.31C16.33,11.31 17.17,10.46 17.17,9.42C17.17,8.38 16.33,7.53 15.29,7.53C14.24,7.53 13.4,8.38 13.4,9.42Z"),gS=Ue(name,"M5.5,7A1.5,1.5 0 0,1 4,5.5A1.5,1.5 0 0,1 5.5,4A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 5.5,7M21.41,11.58L12.41,2.58C12.05,2.22 11.55,2 11,2H4C2.89,2 2,2.89 2,4V11C2,11.55 2.22,12.05 2.59,12.41L11.58,21.41C11.95,21.77 12.45,22 13,22C13.55,22 14.05,21.77 14.41,21.41L21.41,14.41C21.78,14.05 22,13.55 22,13C22,12.44 21.77,11.94 21.41,11.58Z"),sE=Ue(name,"M18 2C17.1 2 16 3 16 4H8C8 3 6.9 2 6 2H2V11C2 12 3 13 4 13H6.2C6.6 15 7.9 16.7 11 17V19.08C8 19.54 8 22 8 22H16C16 22 16 19.54 13 19.08V17C16.1 16.7 17.4 15 17.8 13H20C21 13 22 12 22 11V2H18M6 11H4V4H6V11M16 11.5C16 13.43 15.42 15 12 15C8.59 15 8 13.43 8 11.5V6H16V11.5M20 11H18V4H20V11Z"),iE=Ue(name,"M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M7 2L3.43 5.57V18.43H7.71V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.71V3.43H19.14Z"),oE=Ue(name,"M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z");const aE={key:1,class:"flex flex-col items-center scale-75 origin-left -mr-2"},cE=["title"],lE=["title"],uE={__name:"HeaderBarYt",setup(t){const e=yg(),n=Ut("gameStore"),{youtubeVods:r}=n;function s(l){return r.value.filter(f=>f.game===l).sort((f,p)=>new Date(p.date)-new Date(f.date))[0]}const i=Ne(()=>r.value.length),o=Ne(()=>[...new Set(r.value.map(u=>u.game))].sort((u,f)=>{const p=s(u),g=s(f);return new Date(g.date)-new Date(p.date)})),c=Ne(()=>{const l=r.value.reduce((g,_)=>g+(_.duration||0),0);if(l===0)return"0h";const u=Math.floor(l/86400),f=Math.floor(l%86400/3600),p=Math.floor(l%3600/60);return u>0?`${u}d${f}h`:f>0?`${f}h${p}m`:`${p}m`});return(l,u)=>($t(),or("button",{title:"yt:zoskyCube",class:It(["-my-2",l.$route.path=="/videos"?"active":"text-red-600"]),onClick:u[0]||(u[0]=f=>Te(e).push("/videos"))},[Pe(Te(oE),{class:"text-3xl"}),Te(o).length?($t(),or("div",aE,[nn("p",{class:"text-sm",title:`- games: ${Te(o).length}
 - videos: ${Te(i)}`},uo(Te(o).length)+"\u2022"+uo(Te(i)),9,cE),nn("p",{class:"text-xs opacity-75 -mt-1",title:`Total duration: ${Te(c)}`},uo(Te(c)),9,lE)])):($t(),ga(Te(eE),{key:0,class:"animate-spin"}))],2))}},hE=Vi(uE,[["__scopeId","data-v-4c770571"]]),fE={class:"flex flex-row gap-1 rounded-lg shadow-md"},dE={class:"flex flex-row items-center gap-1 text-purple-600",href:"https://twitch.tv/zoskyCube",target:"_blank",rel:"noopener noreferrer"},pE={__name:"TtvStatus",setup(t){return(e,n)=>($t(),or("div",fE,[nn("a",dE,[Pe(Te(iE),{class:"text-2xl"})])]))}},gE="/zoskyCube/assets/logo.1eae5aa8.png",mE="/zoskyCube/assets/pixelPower.76d170e2.png",_E=()=>{};/**
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
 */const vg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Eg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new vE;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const k=u<<6&192|p;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(t){const e=vg(t);return Eg.encodeByteArray(e,!0)},Fo=function(t){return EE(t).replace(/\./g,"")},Tg=function(t){try{return Eg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wE=()=>TE().__FIREBASE_DEFAULTS__,IE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Tg(t[1]);return e&&JSON.parse(e)},va=()=>{try{return _E()||wE()||IE()||AE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wg=t=>{var e,n;return(n=(e=va())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},Ig=t=>{const e=wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ag=()=>{var t;return(t=va())==null?void 0:t.config},bg=t=>{var e;return(e=va())==null?void 0:e[`_${t}`]};/**
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
 */class bE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function mr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ul(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function CE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t},c="";return[Fo(JSON.stringify(n)),Fo(JSON.stringify(o)),c].join(".")}const ii={};function SE(){const t={prod:[],emulator:[]};for(const e of Object.keys(ii))ii[e]?t.emulator.push(e):t.prod.push(e);return t}function RE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let wf=!1;function $l(t,e){if(typeof window>"u"||typeof document>"u"||!mr(window.location.host)||ii[t]===e||ii[t]||wf)return;ii[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=SE().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{wf=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=RE(r),_=n("text"),k=document.getElementById(_)||document.createElement("span"),D=n("learnmore"),R=document.getElementById(D)||document.createElement("a"),O=n("preprendIcon"),N=document.getElementById(O)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const H=g.element;c(H),f(R,D);const z=u();l(N,O),H.append(N,k,R,z),document.body.appendChild(H)}i?(k.innerText="Preview backend disconnected.",N.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Et())}function VE(){var e;const t=(e=va())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function OE(){const t=Et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ME(){return!VE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xE(){try{return typeof indexedDB=="object"}catch{return!1}}function LE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const FE="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FE,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UE(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new pn(s,c,r)}}function UE(t,e){return t.replace($E,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $E=/\{\$([^}]+)}/g;function BE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(If(i)&&If(o)){if(!Dr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
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
 */function Di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function jE(t,e){const n=new HE(t,e);return n.subscribe.bind(n)}class HE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=pc),s.error===void 0&&(s.error=pc),s.complete===void 0&&(s.complete=pc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}/**
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
 */function ct(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class zE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var s;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(s=e==null?void 0:e.optional)!=null?s:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(KE(e))try{this.getOrInitializeService({instanceIdentifier:br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=br){return this.instances.has(e)}getOptions(e=br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var o;const r=this.normalizeInstanceIdentifier(n),s=(o=this.onInitCallbacks.get(r))!=null?o:new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=br){return this.component?this.component.multipleInstances?e:br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GE(t){return t===br?void 0:t}function KE(t){return t.instantiationMode==="EAGER"}/**
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
 */class WE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var de;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(de||(de={}));const QE={debug:de.DEBUG,verbose:de.VERBOSE,info:de.INFO,warn:de.WARN,error:de.ERROR,silent:de.SILENT},JE=de.INFO,YE={[de.DEBUG]:"log",[de.VERBOSE]:"log",[de.INFO]:"info",[de.WARN]:"warn",[de.ERROR]:"error"},XE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bl{constructor(e){this.name=e,this._logLevel=JE,this._logHandler=XE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in de))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?QE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,de.DEBUG,...e),this._logHandler(this,de.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,de.VERBOSE,...e),this._logHandler(this,de.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,de.INFO,...e),this._logHandler(this,de.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,de.WARN,...e),this._logHandler(this,de.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,de.ERROR,...e),this._logHandler(this,de.ERROR,...e)}}const ZE=(t,e)=>e.some(n=>t instanceof n);let Af,bf;function e2(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t2(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Bc=new WeakMap,Sg=new WeakMap,gc=new WeakMap,jl=new WeakMap;function n2(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Xn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,t)}).catch(()=>{}),jl.set(e,t),e}function r2(t){if(Bc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Bc.set(t,e)}let jc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Bc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function s2(t){jc=t(jc)}function i2(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(mc(this),e,...n);return Sg.set(r,e.sort?e.sort():[e]),Xn(r)}:t2().includes(t)?function(...e){return t.apply(mc(this),e),Xn(Cg.get(this))}:function(...e){return Xn(t.apply(mc(this),e))}}function o2(t){return typeof t=="function"?i2(t):(t instanceof IDBTransaction&&r2(t),ZE(t,e2())?new Proxy(t,jc):t)}function Xn(t){if(t instanceof IDBRequest)return n2(t);if(gc.has(t))return gc.get(t);const e=o2(t);return e!==t&&(gc.set(t,e),jl.set(e,t)),e}const mc=t=>jl.get(t);function a2(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Xn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Xn(o.result),l.oldVersion,l.newVersion,Xn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const c2=["get","getKey","getAll","getAllKeys","count"],l2=["put","add","delete","clear"],_c=new Map;function Cf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=l2.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||c2.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return _c.set(e,i),i}s2(t=>({...t,get:(e,n,r)=>Cf(e,n)||t.get(e,n,r),has:(e,n)=>!!Cf(e,n)||t.has(e,n)}));/**
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
 */class u2{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(h2(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function h2(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hc="@firebase/app",Sf="0.14.5";/**
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
 */const Rn=new Bl("@firebase/app"),f2="@firebase/app-compat",d2="@firebase/analytics-compat",p2="@firebase/analytics",g2="@firebase/app-check-compat",m2="@firebase/app-check",_2="@firebase/auth",y2="@firebase/auth-compat",v2="@firebase/database",E2="@firebase/data-connect",T2="@firebase/database-compat",w2="@firebase/functions",I2="@firebase/functions-compat",A2="@firebase/installations",b2="@firebase/installations-compat",C2="@firebase/messaging",S2="@firebase/messaging-compat",R2="@firebase/performance",P2="@firebase/performance-compat",V2="@firebase/remote-config",k2="@firebase/remote-config-compat",D2="@firebase/storage",N2="@firebase/storage-compat",O2="@firebase/firestore",M2="@firebase/ai",x2="@firebase/firestore-compat",L2="firebase",F2="12.5.0";/**
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
 */const qc="[DEFAULT]",U2={[Hc]:"fire-core",[f2]:"fire-core-compat",[p2]:"fire-analytics",[d2]:"fire-analytics-compat",[m2]:"fire-app-check",[g2]:"fire-app-check-compat",[_2]:"fire-auth",[y2]:"fire-auth-compat",[v2]:"fire-rtdb",[E2]:"fire-data-connect",[T2]:"fire-rtdb-compat",[w2]:"fire-fn",[I2]:"fire-fn-compat",[A2]:"fire-iid",[b2]:"fire-iid-compat",[C2]:"fire-fcm",[S2]:"fire-fcm-compat",[R2]:"fire-perf",[P2]:"fire-perf-compat",[V2]:"fire-rc",[k2]:"fire-rc-compat",[D2]:"fire-gcs",[N2]:"fire-gcs-compat",[O2]:"fire-fst",[x2]:"fire-fst-compat",[M2]:"fire-vertex","fire-js":"fire-js",[L2]:"fire-js-all"};/**
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
 */const Uo=new Map,$2=new Map,zc=new Map;function Rf(t,e){try{t.container.addComponent(e)}catch(n){Rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nr(t){const e=t.name;if(zc.has(e))return Rn.debug(`There were multiple attempts to register component ${e}.`),!1;zc.set(e,t);for(const n of Uo.values())Rf(n,t);for(const n of $2.values())Rf(n,t);return!0}function Ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const B2={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},Zn=new ki("app","Firebase",B2);/**
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
 */class j2{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=F2;function Rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:qc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Zn.create("bad-app-name",{appName:String(s)});if(n||(n=Ag()),!n)throw Zn.create("no-options");const i=Uo.get(s);if(i){if(Dr(n,i.options)&&Dr(r,i.config))return i;throw Zn.create("duplicate-app",{appName:s})}const o=new WE(s);for(const l of zc.values())o.addComponent(l);const c=new j2(n,r,o);return Uo.set(s,c),c}function Hl(t=qc){const e=Uo.get(t);if(!e&&t===qc&&Ag())return Rg();if(!e)throw Zn.create("no-app",{appName:t});return e}function sn(t,e,n){var o;let r=(o=U2[t])!=null?o:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rn.warn(c.join(" "));return}Nr(new ar(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const H2="firebase-heartbeat-database",q2=1,yi="firebase-heartbeat-store";let yc=null;function Pg(){return yc||(yc=a2(H2,q2,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Zn.create("idb-open",{originalErrorMessage:t.message})})),yc}async function z2(t){try{const n=(await Pg()).transaction(yi),r=await n.objectStore(yi).get(Vg(t));return await n.done,r}catch(e){if(e instanceof pn)Rn.warn(e.message);else{const n=Zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rn.warn(n.message)}}}async function Pf(t,e){try{const r=(await Pg()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Vg(t)),await r.done}catch(n){if(n instanceof pn)Rn.warn(n.message);else{const r=Zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rn.warn(r.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const G2=1024,K2=30;class W2{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J2(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Vf();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>K2){const o=Y2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Vf(),{heartbeatsToSend:r,unsentEntries:s}=Q2(this._heartbeatsCache.heartbeats),i=Fo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Rn.warn(n),""}}}function Vf(){return new Date().toISOString().substring(0,10)}function Q2(t,e=G2){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class J2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xE()?LE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await z2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var r;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(r=e.lastSentHeartbeatDate)!=null?r:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kf(t){return Fo(JSON.stringify({version:2,heartbeats:t})).length}function Y2(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function X2(t){Nr(new ar("platform-logger",e=>new u2(e),"PRIVATE")),Nr(new ar("heartbeat",e=>new W2(e),"PRIVATE")),sn(Hc,Sf,t),sn(Hc,Sf,"esm2020"),sn("fire-js","")}X2("");function kg(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z2=kg,Dg=new ki("auth","Firebase",kg());/**
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
 */const $o=new Bl("@firebase/auth");function eT(t,...e){$o.logLevel<=de.WARN&&$o.warn(`Auth (${Ts}): ${t}`,...e)}function _o(t,...e){$o.logLevel<=de.ERROR&&$o.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function Pn(t,...e){throw ql(t,...e)}function on(t,...e){return ql(t,...e)}function Ng(t,e,n){const r={...Z2(),[e]:n};return new ki("auth","Firebase",r).create(e,{appName:t.name})}function er(t){return Ng(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ql(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Dg.create(t,...e)}function oe(t,e,...n){if(!t)throw ql(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Vn(t,e){t||In(e)}/**
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
 */function Gc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function tT(){return Df()==="http:"||Df()==="https:"}function Df(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function nT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tT()||DE()||"connection"in navigator)?navigator.onLine:!0}function rT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ni{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=PE()||NE()}get(){return nT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function zl(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Og{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oT=new Ni(3e4,6e4);function Ta(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function ws(t,e,n,r,s={}){return Mg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Di({key:t.config.apiKey,...o}).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u={method:e,headers:l,...i};return kE()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&mr(t.emulatorConfig.host)&&(u.credentials="include"),Og.fetch()(await Lg(t,t.config.apiHost,n,c),u)})}async function Mg(t,e,n){t._canInitEmulator=!1;const r={...sT,...e};try{const s=new aT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw eo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ng(t,f,u);Pn(t,f)}}catch(s){if(s instanceof pn)throw s;Pn(t,"network-request-failed",{message:String(s)})}}async function xg(t,e,n,r,s={}){const i=await ws(t,e,n,r,s);return"mfaPendingCredential"in i&&Pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?zl(t.config,s):`${t.config.apiScheme}://${s}`;return iT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class aT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),oT.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function cT(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function Bo(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function oi(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function lT(t,e=!1){const n=ct(t),r=await n.getIdToken(e),s=Gl(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(vc(s.auth_time)),issuedAtTime:oi(vc(s.iat)),expirationTime:oi(vc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function vc(t){return Number(t)*1e3}function Gl(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tg(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nf(t){const e=Gl(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&uT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function uT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class hT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!=null?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function jo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await vi(t,Bo(e,{idToken:n}));oe(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?Fg(s.providerUserInfo):[],o=dT(t.providerData,i),c=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Kc(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,f)}async function fT(t){const e=ct(t);await jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fg(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function pT(t,e){const n=await Mg(t,{},async()=>{const r=Di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Lg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&mr(t.emulatorConfig.host)&&(l.credentials="include"),Og.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gT(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Ta(t,e))}/**
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
 */class ss{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ss;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ss,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Bn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new hT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return lT(this,e)}reload(){return fT(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(er(this.auth));const e=await this.getIdToken();return await vi(this,cT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var N,H,z,te,ae,A,v,T;const r=(N=n.displayName)!=null?N:void 0,s=(H=n.email)!=null?H:void 0,i=(z=n.phoneNumber)!=null?z:void 0,o=(te=n.photoURL)!=null?te:void 0,c=(ae=n.tenantId)!=null?ae:void 0,l=(A=n._redirectEventId)!=null?A:void 0,u=(v=n.createdAt)!=null?v:void 0,f=(T=n.lastLoginAt)!=null?T:void 0,{uid:p,emailVerified:g,isAnonymous:_,providerData:k,stsTokenManager:D}=n;oe(p&&D,e,"internal-error");const R=ss.fromJSON(this.name,D);oe(typeof p=="string",e,"internal-error"),Bn(r,e.name),Bn(s,e.name),oe(typeof g=="boolean",e,"internal-error"),oe(typeof _=="boolean",e,"internal-error"),Bn(i,e.name),Bn(o,e.name),Bn(c,e.name),Bn(l,e.name),Bn(u,e.name),Bn(f,e.name);const O=new qt({uid:p,auth:e,email:s,emailVerified:g,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:R,createdAt:u,lastLoginAt:f});return k&&Array.isArray(k)&&(O.providerData=k.map(I=>({...I}))),l&&(O._redirectEventId=l),O}static async _fromIdTokenResponse(e,n,r=!1){const s=new ss;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await jo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ss;c.updateFromIdToken(r);const l=new qt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Kc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Of=new Map;function An(t){Vn(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
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
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ug.type="NONE";const Mf=Ug;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Bo(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(An(Mf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||An(Mf);const o=yo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const g=await Bo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await qt._fromGetAccountInfoResponse(e,g,f)}else p=qt._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new is(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new is(i,e,r))}}/**
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
 */function xf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zg(e))return"Blackberry";if(Gg(e))return"Webos";if(Bg(e))return"Safari";if((e.includes("chrome/")||jg(e))&&!e.includes("edge/"))return"Chrome";if(qg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $g(t=Et()){return/firefox\//i.test(t)}function Bg(t=Et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jg(t=Et()){return/crios\//i.test(t)}function Hg(t=Et()){return/iemobile/i.test(t)}function qg(t=Et()){return/android/i.test(t)}function zg(t=Et()){return/blackberry/i.test(t)}function Gg(t=Et()){return/webos/i.test(t)}function Kl(t=Et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mT(t=Et()){var e;return Kl(t)&&!!((e=window.navigator)!=null&&e.standalone)}function _T(){return OE()&&document.documentMode===10}function Kg(t=Et()){return Kl(t)||qg(t)||Gg(t)||zg(t)||/windows phone/i.test(t)||Hg(t)}/**
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
 */function Wg(t,e=[]){let n;switch(t){case"Browser":n=xf(Et());break;case"Worker":n=`${xf(Et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class yT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function vT(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Ta(t,e))}/**
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
 */const ET=6;class TT{constructor(e){var r,s,i,o;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=n.minPasswordLength)!=null?r:ET,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))!=null?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!=null?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var r,s,i,o,c,l;const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=(r=n.meetsMinPasswordLength)!=null?r:!0),n.isValid&&(n.isValid=(s=n.meetsMaxPasswordLength)!=null?s:!0),n.isValid&&(n.isValid=(i=n.containsLowercaseLetter)!=null?i:!0),n.isValid&&(n.isValid=(o=n.containsUppercaseLetter)!=null?o:!0),n.isValid&&(n.isValid=(c=n.containsNumericCharacter)!=null?c:!0),n.isValid&&(n.isValid=(l=n.containsNonAlphanumericCharacter)!=null?l:!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class wT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new yT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Dg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=An(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Bo(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l==null?void 0:l.user)&&(r=l.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(er(this));const n=e?ct(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(An(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await vT(this),n=new TT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&An(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[An(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=(r=(n=this.currentUser)==null?void 0:n.uid)!=null?r:null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&eT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function wa(t){return ct(t)}class Lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=jE(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Wl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IT(t){Wl=t}function AT(t){return Wl.loadJS(t)}function bT(){return Wl.gapiScript}function CT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function ST(t,e){const n=Ea(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dr(i,e!=null?e:{}))return s;Pn(s,"already-initialized")}return n.initialize({options:e})}function RT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(An);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function PT(t,e,n){const r=wa(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Qg(e),{host:o,port:c}=VT(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(Dr(u,r.config.emulator)&&Dr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,mr(o)?(Ul(`${i}//${o}${l}`),$l("Auth",!0)):s||kT()}function Qg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function VT(t){const e=Qg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ff(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ff(o)}}}function Ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function kT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Jg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}/**
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
 */async function os(t,e){return xg(t,"POST","/v1/accounts:signInWithIdp",Ta(t,e))}/**
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
 */const DT="http://localhost";class Or extends Jg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new Or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,os(e,n)}buildRequest(){const e={requestUri:DT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Di(n)}return e}}/**
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
 */class Yg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Oi extends Yg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class zn extends Oi{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return zn.credential(e.oauthAccessToken)}catch{return null}}}zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";zn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Oi{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Wn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.TWITTER_SIGN_IN_METHOD="twitter.com";Wn.PROVIDER_ID="twitter.com";/**
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
 */class Mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),o=Uf(r);return new Mr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Uf(r);return new Mr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Uf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ho extends pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ho.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!=null?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ho(e,n,r,s)}}function Xg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ho._fromErrorAndOperation(t,i,e,r):i})}async function NT(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mr._forOperation(t,"link",r)}/**
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
 */async function OT(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(er(r));const s="reauthenticate";try{const i=await vi(t,Xg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const o=Gl(i.idToken);oe(o,r,"internal-error");const{sub:c}=o;return oe(t.uid===c,r,"user-mismatch"),Mr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Pn(r,"user-mismatch"),i}}/**
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
 */async function MT(t,e,n=!1){if(xt(t.app))return Promise.reject(er(t));const r="signIn",s=await Xg(t,r,e),i=await Mr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
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
 */async function xT(t,e){return xg(t,"POST","/v1/accounts:signInWithCustomToken",Ta(t,e))}/**
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
 */async function mS(t,e){if(xt(t.app))return Promise.reject(er(t));const n=wa(t),r=await xT(n,{token:e,returnSecureToken:!0}),s=await Mr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function LT(t,e,n,r){return ct(t).onIdTokenChanged(e,n,r)}function FT(t,e,n){return ct(t).beforeAuthStateChanged(e,n)}function UT(t,e,n,r){return ct(t).onAuthStateChanged(e,n,r)}function $T(t){return ct(t).signOut()}const qo="__sak";/**
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
 */class Zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BT=1e3,jT=10;class em extends Zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,jT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}em.type="LOCAL";const HT=em;/**
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
 */class tm extends Zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}tm.type="SESSION";const nm=tm;/**
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
 */function qT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ia{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ia(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await qT(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ia.receivers=[];/**
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
 */function Ql(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class zT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Ql("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function GT(t){an().location.href=t}/**
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
 */function rm(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function KT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function WT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function QT(){return rm()?self:null}/**
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
 */const sm="firebaseLocalStorageDb",JT=1,zo="firebaseLocalStorage",im="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Aa(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function YT(){const t=indexedDB.deleteDatabase(sm);return new Mi(t).toPromise()}function Wc(){const t=indexedDB.open(sm,JT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:im})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await YT(),e(await Wc()))})})}async function $f(t,e,n){const r=Aa(t,!0).put({[im]:e,value:n});return new Mi(r).toPromise()}async function XT(t,e){const n=Aa(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Bf(t,e){const n=Aa(t,!0).delete(e);return new Mi(n).toPromise()}const ZT=800,ew=3;class om{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ew)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return rm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ia._getInstance(QT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await KT(),!this.activeServiceWorker)return;this.sender=new zT(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);!e||((n=e[0])==null?void 0:n.fulfilled)&&((r=e[0])==null?void 0:r.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||WT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wc();return await $f(e,qo,"1"),await Bf(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$f(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>XT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Aa(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}om.type="LOCAL";const tw=om;new Ni(3e4,6e4);/**
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
 */function nw(t,e){return e?An(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jl extends Jg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function rw(t){return MT(t.auth,new Jl(t),t.bypassAuthState)}function sw(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),OT(n,new Jl(t),t.bypassAuthState)}async function iw(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),NT(n,new Jl(t),t.bypassAuthState)}/**
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
 */class am{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rw;case"linkViaPopup":case"linkViaRedirect":return iw;case"reauthViaPopup":case"reauthViaRedirect":return sw;default:Pn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const ow=new Ni(2e3,1e4);class Yr extends am{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yr.currentPopupAction&&Yr.currentPopupAction.cancel(),Yr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Ql();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ow.get())};e()}}Yr.currentPopupAction=null;/**
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
 */const aw="pendingRedirect",vo=new Map;class cw extends am{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await lw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lw(t,e){const n=fw(e),r=hw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function uw(t,e){vo.set(t._key(),e)}function hw(t){return An(t._redirectPersistence)}function fw(t){return yo(aw,t.config.apiKey,t.name)}async function dw(t,e,n=!1){if(xt(t.app))return Promise.reject(er(t));const r=wa(t),s=nw(r,e),o=await new cw(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const pw=10*60*1e3;class gw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cm(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pw&&this.cachedEventUids.clear(),this.cachedEventUids.has(jf(e))}saveEventToCache(e){this.cachedEventUids.add(jf(e)),this.lastProcessedEventTime=Date.now()}}function jf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cm(t);default:return!1}}/**
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
 */async function _w(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const yw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vw=/^https?/;async function Ew(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _w(t);for(const n of e)try{if(Tw(n))return}catch{}Pn(t,"unauthorized-domain")}function Tw(t){const e=Gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vw.test(n))return!1;if(yw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ww=new Ni(3e4,6e4);function Hf(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Iw(t){return new Promise((e,n)=>{var s,i,o;function r(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(on(t,"network-request-failed"))},timeout:ww.get()})}if((i=(s=an().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const c=CT("iframefcb");return an()[c]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},AT(`${bT()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function Aw(t){return Eo=Eo||Iw(t),Eo}/**
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
 */const bw=new Ni(5e3,15e3),Cw="__/auth/iframe",Sw="emulator/auth/iframe",Rw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Vw(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zl(e,Sw):`https://${t.config.authDomain}/${Cw}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=Pw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Di(r).slice(1)}`}async function kw(t){const e=await Aw(t),n=an().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:Vw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),c=an().setTimeout(()=>{i(o)},bw.get());function l(){an().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Dw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nw=500,Ow=600,Mw="_blank",xw="http://localhost";class qf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lw(t,e,n,r=Nw,s=Ow){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l={...Dw,width:r.toString(),height:s.toString(),top:i,left:o},u=Et().toLowerCase();n&&(c=jg(u)?Mw:n),$g(u)&&(e=e||xw,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,k])=>`${g}${_}=${k},`,"");if(mT(u)&&c!=="_self")return Fw(e||"",c),new qf(null);const p=window.open(e||"",c,f);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new qf(p)}function Fw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Uw="__/auth/handler",$w="emulator/auth/handler",Bw=encodeURIComponent("fac");async function zf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof Yg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(i||{}))o[f]=p}if(e instanceof Oi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Bw}=${encodeURIComponent(l)}`:"";return`${jw(t)}?${Di(c).slice(1)}${u}`}function jw({config:t}){return t.emulator?zl(t,$w):`https://${t.authDomain}/${Uw}`}/**
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
 */const Ec="webStorageSupport";class Hw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=nm,this._completeRedirectFn=dw,this._overrideRedirectResult=uw}async _openPopup(e,n,r,s){var o;Vn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await zf(e,n,r,Gc(),s);return Lw(e,i,Ql())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zf(e,n,r,Gc(),s);return GT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kw(e),r=new gw(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ec,{type:Ec},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[Ec];i!==void 0&&n(!!i),Pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ew(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Kg()||Bg()||Kl()}}const qw=Hw;var Gf="@firebase/auth",Kf="1.11.1";/**
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
 */class zw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Kw(t){Nr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wg(t)},u=new wT(r,s,i,l);return RT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nr(new ar("auth-internal",e=>{const n=wa(e.getProvider("auth").getImmediate());return(r=>new zw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(Gf,Kf,Gw(t)),sn(Gf,Kf,"esm2020")}/**
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
 */const Ww=5*60,Qw=bg("authIdTokenMaxAge")||Ww;let Wf=null;const Jw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Qw)return;const s=n==null?void 0:n.token;Wf!==s&&(Wf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Yw(t=Hl()){const e=Ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=ST(t,{popupRedirectResolver:qw,persistence:[tw,HT,nm]}),r=bg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Jw(i.toString());FT(n,o,()=>o(n.currentUser)),LT(n,c=>o(c))}}const s=wg("auth");return s&&PT(n,`http://${s}`),n}function Xw(){var t,e;return(e=(t=document.getElementsByTagName("head"))==null?void 0:t[0])!=null?e:document}IT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Xw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Kw("Browser");var Qf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tr,lm;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function T(){}T.prototype=v.prototype,A.F=v.prototype,A.prototype=new T,A.prototype.constructor=A,A.D=function(I,b,C){for(var E=Array(arguments.length-2),$e=2;$e<arguments.length;$e++)E[$e-2]=arguments[$e];return v.prototype[b].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,T){T||(T=0);const I=Array(16);if(typeof v=="string")for(var b=0;b<16;++b)I[b]=v.charCodeAt(T++)|v.charCodeAt(T++)<<8|v.charCodeAt(T++)<<16|v.charCodeAt(T++)<<24;else for(b=0;b<16;++b)I[b]=v[T++]|v[T++]<<8|v[T++]<<16|v[T++]<<24;v=A.g[0],T=A.g[1],b=A.g[2];let C=A.g[3],E;E=v+(C^T&(b^C))+I[0]+3614090360&4294967295,v=T+(E<<7&4294967295|E>>>25),E=C+(b^v&(T^b))+I[1]+3905402710&4294967295,C=v+(E<<12&4294967295|E>>>20),E=b+(T^C&(v^T))+I[2]+606105819&4294967295,b=C+(E<<17&4294967295|E>>>15),E=T+(v^b&(C^v))+I[3]+3250441966&4294967295,T=b+(E<<22&4294967295|E>>>10),E=v+(C^T&(b^C))+I[4]+4118548399&4294967295,v=T+(E<<7&4294967295|E>>>25),E=C+(b^v&(T^b))+I[5]+1200080426&4294967295,C=v+(E<<12&4294967295|E>>>20),E=b+(T^C&(v^T))+I[6]+2821735955&4294967295,b=C+(E<<17&4294967295|E>>>15),E=T+(v^b&(C^v))+I[7]+4249261313&4294967295,T=b+(E<<22&4294967295|E>>>10),E=v+(C^T&(b^C))+I[8]+1770035416&4294967295,v=T+(E<<7&4294967295|E>>>25),E=C+(b^v&(T^b))+I[9]+2336552879&4294967295,C=v+(E<<12&4294967295|E>>>20),E=b+(T^C&(v^T))+I[10]+4294925233&4294967295,b=C+(E<<17&4294967295|E>>>15),E=T+(v^b&(C^v))+I[11]+2304563134&4294967295,T=b+(E<<22&4294967295|E>>>10),E=v+(C^T&(b^C))+I[12]+1804603682&4294967295,v=T+(E<<7&4294967295|E>>>25),E=C+(b^v&(T^b))+I[13]+4254626195&4294967295,C=v+(E<<12&4294967295|E>>>20),E=b+(T^C&(v^T))+I[14]+2792965006&4294967295,b=C+(E<<17&4294967295|E>>>15),E=T+(v^b&(C^v))+I[15]+1236535329&4294967295,T=b+(E<<22&4294967295|E>>>10),E=v+(b^C&(T^b))+I[1]+4129170786&4294967295,v=T+(E<<5&4294967295|E>>>27),E=C+(T^b&(v^T))+I[6]+3225465664&4294967295,C=v+(E<<9&4294967295|E>>>23),E=b+(v^T&(C^v))+I[11]+643717713&4294967295,b=C+(E<<14&4294967295|E>>>18),E=T+(C^v&(b^C))+I[0]+3921069994&4294967295,T=b+(E<<20&4294967295|E>>>12),E=v+(b^C&(T^b))+I[5]+3593408605&4294967295,v=T+(E<<5&4294967295|E>>>27),E=C+(T^b&(v^T))+I[10]+38016083&4294967295,C=v+(E<<9&4294967295|E>>>23),E=b+(v^T&(C^v))+I[15]+3634488961&4294967295,b=C+(E<<14&4294967295|E>>>18),E=T+(C^v&(b^C))+I[4]+3889429448&4294967295,T=b+(E<<20&4294967295|E>>>12),E=v+(b^C&(T^b))+I[9]+568446438&4294967295,v=T+(E<<5&4294967295|E>>>27),E=C+(T^b&(v^T))+I[14]+3275163606&4294967295,C=v+(E<<9&4294967295|E>>>23),E=b+(v^T&(C^v))+I[3]+4107603335&4294967295,b=C+(E<<14&4294967295|E>>>18),E=T+(C^v&(b^C))+I[8]+1163531501&4294967295,T=b+(E<<20&4294967295|E>>>12),E=v+(b^C&(T^b))+I[13]+2850285829&4294967295,v=T+(E<<5&4294967295|E>>>27),E=C+(T^b&(v^T))+I[2]+4243563512&4294967295,C=v+(E<<9&4294967295|E>>>23),E=b+(v^T&(C^v))+I[7]+1735328473&4294967295,b=C+(E<<14&4294967295|E>>>18),E=T+(C^v&(b^C))+I[12]+2368359562&4294967295,T=b+(E<<20&4294967295|E>>>12),E=v+(T^b^C)+I[5]+4294588738&4294967295,v=T+(E<<4&4294967295|E>>>28),E=C+(v^T^b)+I[8]+2272392833&4294967295,C=v+(E<<11&4294967295|E>>>21),E=b+(C^v^T)+I[11]+1839030562&4294967295,b=C+(E<<16&4294967295|E>>>16),E=T+(b^C^v)+I[14]+4259657740&4294967295,T=b+(E<<23&4294967295|E>>>9),E=v+(T^b^C)+I[1]+2763975236&4294967295,v=T+(E<<4&4294967295|E>>>28),E=C+(v^T^b)+I[4]+1272893353&4294967295,C=v+(E<<11&4294967295|E>>>21),E=b+(C^v^T)+I[7]+4139469664&4294967295,b=C+(E<<16&4294967295|E>>>16),E=T+(b^C^v)+I[10]+3200236656&4294967295,T=b+(E<<23&4294967295|E>>>9),E=v+(T^b^C)+I[13]+681279174&4294967295,v=T+(E<<4&4294967295|E>>>28),E=C+(v^T^b)+I[0]+3936430074&4294967295,C=v+(E<<11&4294967295|E>>>21),E=b+(C^v^T)+I[3]+3572445317&4294967295,b=C+(E<<16&4294967295|E>>>16),E=T+(b^C^v)+I[6]+76029189&4294967295,T=b+(E<<23&4294967295|E>>>9),E=v+(T^b^C)+I[9]+3654602809&4294967295,v=T+(E<<4&4294967295|E>>>28),E=C+(v^T^b)+I[12]+3873151461&4294967295,C=v+(E<<11&4294967295|E>>>21),E=b+(C^v^T)+I[15]+530742520&4294967295,b=C+(E<<16&4294967295|E>>>16),E=T+(b^C^v)+I[2]+3299628645&4294967295,T=b+(E<<23&4294967295|E>>>9),E=v+(b^(T|~C))+I[0]+4096336452&4294967295,v=T+(E<<6&4294967295|E>>>26),E=C+(T^(v|~b))+I[7]+1126891415&4294967295,C=v+(E<<10&4294967295|E>>>22),E=b+(v^(C|~T))+I[14]+2878612391&4294967295,b=C+(E<<15&4294967295|E>>>17),E=T+(C^(b|~v))+I[5]+4237533241&4294967295,T=b+(E<<21&4294967295|E>>>11),E=v+(b^(T|~C))+I[12]+1700485571&4294967295,v=T+(E<<6&4294967295|E>>>26),E=C+(T^(v|~b))+I[3]+2399980690&4294967295,C=v+(E<<10&4294967295|E>>>22),E=b+(v^(C|~T))+I[10]+4293915773&4294967295,b=C+(E<<15&4294967295|E>>>17),E=T+(C^(b|~v))+I[1]+2240044497&4294967295,T=b+(E<<21&4294967295|E>>>11),E=v+(b^(T|~C))+I[8]+1873313359&4294967295,v=T+(E<<6&4294967295|E>>>26),E=C+(T^(v|~b))+I[15]+4264355552&4294967295,C=v+(E<<10&4294967295|E>>>22),E=b+(v^(C|~T))+I[6]+2734768916&4294967295,b=C+(E<<15&4294967295|E>>>17),E=T+(C^(b|~v))+I[13]+1309151649&4294967295,T=b+(E<<21&4294967295|E>>>11),E=v+(b^(T|~C))+I[4]+4149444226&4294967295,v=T+(E<<6&4294967295|E>>>26),E=C+(T^(v|~b))+I[11]+3174756917&4294967295,C=v+(E<<10&4294967295|E>>>22),E=b+(v^(C|~T))+I[2]+718787259&4294967295,b=C+(E<<15&4294967295|E>>>17),E=T+(C^(b|~v))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(b+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+C&4294967295}r.prototype.v=function(A,v){v===void 0&&(v=A.length);const T=v-this.blockSize,I=this.C;let b=this.h,C=0;for(;C<v;){if(b==0)for(;C<=T;)s(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<v;)if(I[b++]=A.charCodeAt(C++),b==this.blockSize){s(this,I),b=0;break}}else for(;C<v;)if(I[b++]=A[C++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=v},r.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;v=this.o*8;for(var T=A.length-8;T<A.length;++T)A[T]=v&255,v/=256;for(this.v(A),A=Array(16),v=0,T=0;T<4;++T)for(let I=0;I<32;I+=8)A[v++]=this.g[T]>>>I&255;return A};function i(A,v){var T=c;return Object.prototype.hasOwnProperty.call(T,A)?T[A]:T[A]=v(A)}function o(A,v){this.h=v;const T=[];let I=!0;for(let b=A.length-1;b>=0;b--){const C=A[b]|0;I&&C==v||(T[b]=C,I=!1)}this.g=T}var c={};function l(A){return-128<=A&&A<128?i(A,function(v){return new o([v|0],v<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(A<0)return R(u(-A));const v=[];let T=1;for(let I=0;A>=T;I++)v[I]=A/T|0,T*=4294967296;return new o(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return R(f(A.substring(1),v));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=u(Math.pow(v,8));let I=p;for(let C=0;C<A.length;C+=8){var b=Math.min(8,A.length-C);const E=parseInt(A.substring(C,C+b),v);b<8?(b=u(Math.pow(v,b)),I=I.j(b).add(u(E))):(I=I.j(T),I=I.add(u(E)))}return I}var p=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(D(this))return-R(this).m();let A=0,v=1;for(let T=0;T<this.g.length;T++){const I=this.i(T);A+=(I>=0?I:4294967296+I)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(k(this))return"0";if(D(this))return"-"+R(this).toString(A);const v=u(Math.pow(A,6));var T=this;let I="";for(;;){const b=z(T,v).g;T=O(T,b.j(v));let C=((T.g.length>0?T.g[0]:T.h)>>>0).toString(A);if(T=b,k(T))return C+I;for(;C.length<6;)C="0"+C;I=C+I}},t.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function k(A){if(A.h!=0)return!1;for(let v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function D(A){return A.h==-1}t.l=function(A){return A=O(this,A),D(A)?-1:k(A)?0:1};function R(A){const v=A.g.length,T=[];for(let I=0;I<v;I++)T[I]=~A.g[I];return new o(T,~A.h).add(g)}t.abs=function(){return D(this)?R(this):this},t.add=function(A){const v=Math.max(this.g.length,A.g.length),T=[];let I=0;for(let b=0;b<=v;b++){let C=I+(this.i(b)&65535)+(A.i(b)&65535),E=(C>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);I=E>>>16,C&=65535,E&=65535,T[b]=E<<16|C}return new o(T,T[T.length-1]&-2147483648?-1:0)};function O(A,v){return A.add(R(v))}t.j=function(A){if(k(this)||k(A))return p;if(D(this))return D(A)?R(this).j(R(A)):R(R(this).j(A));if(D(A))return R(this.j(R(A)));if(this.l(_)<0&&A.l(_)<0)return u(this.m()*A.m());const v=this.g.length+A.g.length,T=[];for(var I=0;I<2*v;I++)T[I]=0;for(I=0;I<this.g.length;I++)for(let b=0;b<A.g.length;b++){const C=this.i(I)>>>16,E=this.i(I)&65535,$e=A.i(b)>>>16,nt=A.i(b)&65535;T[2*I+2*b]+=E*nt,N(T,2*I+2*b),T[2*I+2*b+1]+=C*nt,N(T,2*I+2*b+1),T[2*I+2*b+1]+=E*$e,N(T,2*I+2*b+1),T[2*I+2*b+2]+=C*$e,N(T,2*I+2*b+2)}for(A=0;A<v;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=v;A<2*v;A++)T[A]=0;return new o(T,0)};function N(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function H(A,v){this.g=A,this.h=v}function z(A,v){if(k(v))throw Error("division by zero");if(k(A))return new H(p,p);if(D(A))return v=z(R(A),v),new H(R(v.g),R(v.h));if(D(v))return v=z(A,R(v)),new H(R(v.g),v.h);if(A.g.length>30){if(D(A)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var T=g,I=v;I.l(A)<=0;)T=te(T),I=te(I);var b=ae(T,1),C=ae(I,1);for(I=ae(I,2),T=ae(T,2);!k(I);){var E=C.add(I);E.l(A)<=0&&(b=b.add(T),C=E),I=ae(I,1),T=ae(T,1)}return v=O(A,b.j(v)),new H(b,v)}for(b=p;A.l(v)>=0;){for(T=Math.max(1,Math.floor(A.m()/v.m())),I=Math.ceil(Math.log(T)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),C=u(T),E=C.j(v);D(E)||E.l(A)>0;)T-=I,C=u(T),E=C.j(v);k(C)&&(C=g),b=b.add(C),A=O(A,E)}return new H(b,A)}t.B=function(A){return z(this,A).h},t.and=function(A){const v=Math.max(this.g.length,A.g.length),T=[];for(let I=0;I<v;I++)T[I]=this.i(I)&A.i(I);return new o(T,this.h&A.h)},t.or=function(A){const v=Math.max(this.g.length,A.g.length),T=[];for(let I=0;I<v;I++)T[I]=this.i(I)|A.i(I);return new o(T,this.h|A.h)},t.xor=function(A){const v=Math.max(this.g.length,A.g.length),T=[];for(let I=0;I<v;I++)T[I]=this.i(I)^A.i(I);return new o(T,this.h^A.h)};function te(A){const v=A.g.length+1,T=[];for(let I=0;I<v;I++)T[I]=A.i(I)<<1|A.i(I-1)>>>31;return new o(T,A.h)}function ae(A,v){const T=v>>5;v%=32;const I=A.g.length-T,b=[];for(let C=0;C<I;C++)b[C]=v>0?A.i(C+T)>>>v|A.i(C+T+1)<<32-v:A.i(C+T);return new o(b,A.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,lm=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,tr=o}).apply(typeof Qf<"u"?Qf:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var um,Gs,hm,To,Qc,fm,dm,pm;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var S=a[m];if(!(S in d))break e;d=d[S]}a=a[a.length-1],m=d[a],h=h(m),h!=m&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var d=[],m;for(m in h)Object.prototype.hasOwnProperty.call(h,m)&&d.push([m,h[m]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function l(a,h,d){return a.call.apply(a.bind,arguments)}function u(a,h,d){return u=l,u.apply(null,arguments)}function f(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function p(a,h){function d(){}d.prototype=h.prototype,a.Z=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(m,S,V){for(var G=Array(arguments.length-2),he=2;he<arguments.length;he++)G[he-2]=arguments[he];return h.prototype[S].apply(m,G)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const d=Array(h);for(let m=0;m<h;m++)d[m]=a[m];return d}return[]}function k(a,h){for(let m=1;m<arguments.length;m++){const S=arguments[m];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=a.length||0;const V=S.length||0;a.length=d+V;for(let G=0;G<V;G++)a[d+G]=S[G]}else a.push(S)}}class D{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function R(a){o.setTimeout(()=>{throw a},0)}function O(){var a=A;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class N{constructor(){this.h=this.g=null}add(h,d){const m=H.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var H=new D(()=>new z,a=>a.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let te,ae=!1,A=new N,v=()=>{const a=Promise.resolve(void 0);te=()=>{a.then(T)}};function T(){for(var a;a=O();){try{a.h.call(a.g)}catch(d){R(d)}var h=H;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}ae=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function b(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}b.prototype.h=function(){this.defaultPrevented=!0};var C=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,h),o.removeEventListener("test",d,h)}catch{}return a}();function E(a){return/^[\s\xa0]*$/.test(a)}function $e(a,h){b.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p($e,b),$e.prototype.init=function(a,h){const d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&$e.Z.h.call(this)},$e.prototype.h=function(){$e.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var nt="closure_listenable_"+(Math.random()*1e6|0),Le=0;function we(a,h,d,m,S){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=S,this.key=++Le,this.da=this.fa=!1}function pe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ct(a,h,d){for(const m in a)h.call(d,a[m],m,a)}function Qt(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function kt(a){const h={};for(const d in a)h[d]=a[d];return h}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function mn(a,h){let d,m;for(let S=1;S<arguments.length;S++){m=arguments[S];for(d in m)a[d]=m[d];for(let V=0;V<rt.length;V++)d=rt[V],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function jt(a){this.src=a,this.g={},this.h=0}jt.prototype.add=function(a,h,d,m,S){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const G=ut(a,h,m,S);return G>-1?(h=a[G],d||(h.fa=!1)):(h=new we(h,this.src,V,!!m,S),h.fa=d,a.push(h)),h};function Nn(a,h){const d=h.type;if(d in a.g){var m=a.g[d],S=Array.prototype.indexOf.call(m,h,void 0),V;(V=S>=0)&&Array.prototype.splice.call(m,S,1),V&&(pe(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ut(a,h,d,m){for(let S=0;S<a.length;++S){const V=a[S];if(!V.da&&V.listener==h&&V.capture==!!d&&V.ha==m)return S}return-1}var x="closure_lm_"+(Math.random()*1e6|0),Y={};function W(a,h,d,m,S){if(m&&m.once)return Se(a,h,d,m,S);if(Array.isArray(h)){for(let V=0;V<h.length;V++)W(a,h[V],d,m,S);return null}return d=K(d),a&&a[nt]?a.J(h,d,c(m)?!!m.capture:!!m,S):Z(a,h,d,!1,m,S)}function Z(a,h,d,m,S,V){if(!h)throw Error("Invalid event type");const G=c(S)?!!S.capture:!!S;let he=M(a);if(he||(a[x]=he=new jt(a)),d=he.add(h,d,m,G,V),d.proxy)return d;if(m=Ee(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)C||(S=G),S===void 0&&(S=!1),a.addEventListener(h.toString(),m,S);else if(a.attachEvent)a.attachEvent(P(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Ee(){function a(d){return h.call(a.src,a.listener,d)}const h=U;return a}function Se(a,h,d,m,S){if(Array.isArray(h)){for(let V=0;V<h.length;V++)Se(a,h[V],d,m,S);return null}return d=K(d),a&&a[nt]?a.K(h,d,c(m)?!!m.capture:!!m,S):Z(a,h,d,!0,m,S)}function y(a,h,d,m,S){if(Array.isArray(h))for(var V=0;V<h.length;V++)y(a,h[V],d,m,S);else m=c(m)?!!m.capture:!!m,d=K(d),a&&a[nt]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],d=ut(h,d,m,S),d>-1&&(pe(h[d]),Array.prototype.splice.call(h,d,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=M(a))&&(h=a.g[h.toString()],a=-1,h&&(a=ut(h,d,m,S)),(d=a>-1?h[a]:null)&&w(d))}function w(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[nt])Nn(h.i,a);else{var d=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(d,m,a.capture):h.detachEvent?h.detachEvent(P(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=M(h))?(Nn(d,a),d.h==0&&(d.src=null,h[x]=null)):pe(a)}}}function P(a){return a in Y?Y[a]:Y[a]="on"+a}function U(a,h){if(a.da)a=!0;else{h=new $e(h,this);const d=a.listener,m=a.ha||a.src;a.fa&&w(a),a=d.call(m,h)}return a}function M(a){return a=a[x],a instanceof jt?a:null}var F="__closure_events_fn_"+(Math.random()*1e9>>>0);function K(a){return typeof a=="function"?a:(a[F]||(a[F]=function(h){return a.handleEvent(h)}),a[F])}function q(){I.call(this),this.i=new jt(this),this.M=this,this.G=null}p(q,I),q.prototype[nt]=!0,q.prototype.removeEventListener=function(a,h,d,m){y(this,a,h,d,m)};function B(a,h){var d,m=a.G;if(m)for(d=[];m;m=m.G)d.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new b(h,a);else if(h instanceof b)h.target=h.target||a;else{var S=h;h=new b(m,a),mn(h,S)}S=!0;let V,G;if(d)for(G=d.length-1;G>=0;G--)V=h.g=d[G],S=j(V,m,!0,h)&&S;if(V=h.g=a,S=j(V,m,!0,h)&&S,S=j(V,m,!1,h)&&S,d)for(G=0;G<d.length;G++)V=h.g=d[G],S=j(V,m,!1,h)&&S}q.prototype.N=function(){if(q.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const d=a.g[h];for(let m=0;m<d.length;m++)pe(d[m]);delete a.g[h],a.h--}}this.G=null},q.prototype.J=function(a,h,d,m){return this.i.add(String(a),h,!1,d,m)},q.prototype.K=function(a,h,d,m){return this.i.add(String(a),h,!0,d,m)};function j(a,h,d,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let S=!0;for(let V=0;V<h.length;++V){const G=h[V];if(G&&!G.da&&G.capture==d){const he=G.listener,Qe=G.ha||G.src;G.fa&&Nn(a.i,G),S=he.call(Qe,m)!==!1&&S}}return S&&!m.defaultPrevented}function re(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function J(a){a.g=re(()=>{a.g=null,a.i&&(a.i=!1,J(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ee extends I{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:J(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function se(a){I.call(this),this.h=a,this.g={}}p(se,I);var fe=[];function Ce(a){Ct(a.g,function(h,d){this.g.hasOwnProperty(d)&&w(h)},a),a.g={}}se.prototype.N=function(){se.Z.N.call(this),Ce(this)},se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ye=o.JSON.stringify,ht=o.JSON.parse,Ye=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function St(){}function ft(){}var Ht={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ur(){b.call(this,"d")}p(Ur,b);function st(){b.call(this,"c")}p(st,b);var Xe={},Ss=null;function _r(){return Ss=Ss||new q}Xe.Ia="serverreachability";function xu(a){b.call(this,Xe.Ia,a)}p(xu,b);function Rs(a){const h=_r();B(h,new xu(h))}Xe.STAT_EVENT="statevent";function Lu(a,h){b.call(this,Xe.STAT_EVENT,a),this.stat=h}p(Lu,b);function Tt(a){const h=_r();B(h,new Lu(h,a))}Xe.Ja="timingevent";function Fu(a,h){b.call(this,Xe.Ja,a),this.size=h}p(Fu,b);function Ps(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function Vs(){this.g=!0}Vs.prototype.ua=function(){this.g=!1};function L1(a,h,d,m,S,V){a.info(function(){if(a.g)if(V){var G="",he=V.split("&");for(let Re=0;Re<he.length;Re++){var Qe=he[Re].split("=");if(Qe.length>1){const Ze=Qe[0];Qe=Qe[1];const Yt=Ze.split("_");G=Yt.length>=2&&Yt[1]=="type"?G+(Ze+"="+Qe+"&"):G+(Ze+"=redacted&")}}}else G=null;else G=V;return"XMLHTTP REQ ("+m+") [attempt "+S+"]: "+h+`
`+d+`
`+G})}function F1(a,h,d,m,S,V,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+S+"]: "+h+`
`+d+`
`+V+" "+G})}function $r(a,h,d,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+$1(a,d)+(m?" "+m:"")})}function U1(a,h){a.info(function(){return"TIMEOUT: "+h})}Vs.prototype.info=function(){};function $1(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var d=V[a];if(!(d.length<2)){var m=d[1];if(Array.isArray(m)&&!(m.length<1)){var S=m[0];if(S!="noop"&&S!="stop"&&S!="close")for(let G=1;G<m.length;G++)m[G]=""}}}}return ye(V)}catch{return h}}var Bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Uu={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},$u;function Ba(){}p(Ba,St),Ba.prototype.g=function(){return new XMLHttpRequest},$u=new Ba;function ks(a){return encodeURIComponent(String(a))}function B1(a){var h=1;a=a.split(":");const d=[];for(;h>0&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function On(a,h,d,m){this.j=a,this.i=h,this.l=d,this.S=m||1,this.V=new se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bu}function Bu(){this.i=null,this.g="",this.h=!1}var ju={},ja={};function Ha(a,h,d){a.M=1,a.A=Hi(Jt(h)),a.u=d,a.R=!0,Hu(a,null)}function Hu(a,h){a.F=Date.now(),ji(a),a.B=Jt(a.A);var d=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),nh(d.i,"t",m),a.C=0,d=a.j.L,a.h=new Bu,a.g=Eh(a.j,d?h:null,!a.u),a.P>0&&(a.O=new ee(u(a.Y,a,a.g),a.P)),h=a.V,d=a.g,m=a.ba;var S="readystatechange";Array.isArray(S)||(S&&(fe[0]=S.toString()),S=fe);for(let V=0;V<S.length;V++){const G=W(d,S[V],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.J?kt(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Rs(),L1(a.i,a.v,a.B,a.l,a.S,a.u)}On.prototype.ba=function(a){a=a.target;const h=this.O;h&&Ln(a)==3?h.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const he=Ln(this.g),Qe=this.g.ya(),Re=this.g.ca();if(!(he<3)&&(he!=3||this.g&&(this.h.h||this.g.la()||lh(this.g)))){this.K||he!=4||Qe==7||(Qe==8||Re<=0?Rs(3):Rs(2)),qa(this);var h=this.g.ca();this.X=h;var d=j1(this);if(this.o=h==200,F1(this.i,this.v,this.B,this.l,this.S,he,h),this.o){if(this.U&&!this.L){t:{if(this.g){var m,S=this.g;if((m=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(m)){var V=m;break t}}V=null}if(a=V)$r(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,za(this,a);else{this.o=!1,this.m=3,Tt(12),yr(this),Ds(this);break e}}if(this.R){a=!0;let Ze;for(;!this.K&&this.C<d.length;)if(Ze=H1(this,d),Ze==ja){he==4&&(this.m=4,Tt(14),a=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Ze==ju){this.m=4,Tt(15),$r(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else $r(this.i,this.l,Ze,null),za(this,Ze);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),he!=4||d.length!=0||this.h.h||(this.m=1,Tt(16),a=!1),this.o=this.o&&a,!a)$r(this.i,this.l,d,"[Invalid Chunked Response]"),yr(this),Ds(this);else if(d.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Za(G),G.P=!0,Tt(11))}}else $r(this.i,this.l,d,null),za(this,d);he==4&&yr(this),this.o&&!this.K&&(he==4?mh(this.j,this):(this.o=!1,ji(this)))}else r_(this.g),h==400&&d.indexOf("Unknown SID")>0?(this.m=3,Tt(12)):(this.m=0,Tt(13)),yr(this),Ds(this)}}}catch{}finally{}};function j1(a){if(!qu(a))return a.g.la();const h=lh(a.g);if(h==="")return"";let d="";const m=h.length,S=Ln(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return yr(a),Ds(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<m;V++)a.h.h=!0,d+=a.h.i.decode(h[V],{stream:!(S&&V==m-1)});return h.length=0,a.h.g+=d,a.C=0,a.h.g}function qu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function H1(a,h){var d=a.C,m=h.indexOf(`
`,d);return m==-1?ja:(d=Number(h.substring(d,m)),isNaN(d)?ju:(m+=1,m+d>h.length?ja:(h=h.slice(m,m+d),a.C=m+d,h)))}On.prototype.cancel=function(){this.K=!0,yr(this)};function ji(a){a.T=Date.now()+a.H,zu(a,a.H)}function zu(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=Ps(u(a.aa,a),h)}function qa(a){a.D&&(o.clearTimeout(a.D),a.D=null)}On.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(U1(this.i,this.B),this.M!=2&&(Rs(),Tt(17)),yr(this),this.m=2,Ds(this)):zu(this,this.T-a)};function Ds(a){a.j.I==0||a.K||mh(a.j,a)}function yr(a){qa(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,Ce(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function za(a,h){try{var d=a.j;if(d.I!=0&&(d.g==a||Ga(d.h,a))){if(!a.L&&Ga(d.h,a)&&d.I==3){try{var m=d.Ba.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var S=m;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Wi(d),Gi(d);else break e;Xa(d),Tt(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Ps(u(d.Va,d),6e3));Wu(d.h)<=1&&d.ta&&(d.ta=void 0)}else Er(d,11)}else if((a.L||d.g==a)&&Wi(d),!E(h))for(S=d.Ba.g.parse(h),h=0;h<S.length;h++){let Re=S[h];const Ze=Re[0];if(!(Ze<=d.K))if(d.K=Ze,Re=Re[1],d.I==2)if(Re[0]=="c"){d.M=Re[1],d.ba=Re[2];const Yt=Re[3];Yt!=null&&(d.ka=Yt,d.j.info("VER="+d.ka));const Tr=Re[4];Tr!=null&&(d.za=Tr,d.j.info("SVER="+d.za));const Fn=Re[5];Fn!=null&&typeof Fn=="number"&&Fn>0&&(m=1.5*Fn,d.O=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Un=a.g;if(Un){const Ji=Un.g?Un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var V=m.h;V.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Ka(V,V.h),V.h=null))}if(m.G){const ec=Un.g?Un.g.getResponseHeader("X-HTTP-Session-Id"):null;ec&&(m.wa=ec,Me(m.J,m.G,ec))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),m=d;var G=a;if(m.na=vh(m,m.L?m.ba:null,m.W),G.L){Qu(m.h,G);var he=G,Qe=m.O;Qe&&(he.H=Qe),he.D&&(qa(he),ji(he)),m.g=G}else ph(m);d.i.length>0&&Ki(d)}else Re[0]!="stop"&&Re[0]!="close"||Er(d,7);else d.I==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Er(d,7):Ya(d):Re[0]!="noop"&&d.l&&d.l.qa(Re),d.A=0)}}Rs(4)}catch{}}var q1=class{constructor(a,h){this.g=a,this.map=h}};function Gu(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ku(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Wu(a){return a.h?1:a.g?a.g.size:0}function Ga(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Ka(a,h){a.g?a.g.add(h):a.h=h}function Qu(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gu.prototype.cancel=function(){if(this.i=Ju(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ju(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.G);return h}return _(a.i)}var Yu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function z1(a,h){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const m=a[d].indexOf("=");let S,V=null;m>=0?(S=a[d].substring(0,m),V=a[d].substring(m+1)):S=a[d],h(S,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Mn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof Mn?(this.l=a.l,Ns(this,a.j),this.o=a.o,this.g=a.g,Os(this,a.u),this.h=a.h,Wa(this,rh(a.i)),this.m=a.m):a&&(h=String(a).match(Yu))?(this.l=!1,Ns(this,h[1]||"",!0),this.o=Ms(h[2]||""),this.g=Ms(h[3]||"",!0),Os(this,h[4]),this.h=Ms(h[5]||"",!0),Wa(this,h[6]||"",!0),this.m=Ms(h[7]||"")):(this.l=!1,this.i=new Ls(null,this.l))}Mn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(xs(h,Xu,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(xs(h,Xu,!0),"@"),a.push(ks(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(xs(d,d.charAt(0)=="/"?W1:K1,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",xs(d,J1)),a.join("")},Mn.prototype.resolve=function(a){const h=Jt(this);let d=!!a.j;d?Ns(h,a.j):d=!!a.o,d?h.o=a.o:d=!!a.g,d?h.g=a.g:d=a.u!=null;var m=a.h;if(d)Os(h,a.u);else if(d=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var S=h.h.lastIndexOf("/");S!=-1&&(m=h.h.slice(0,S+1)+m)}if(S=m,S==".."||S==".")m="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){m=S.lastIndexOf("/",0)==0,S=S.split("/");const V=[];for(let G=0;G<S.length;){const he=S[G++];he=="."?m&&G==S.length&&V.push(""):he==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),m&&G==S.length&&V.push("")):(V.push(he),m=!0)}m=V.join("/")}else m=S}return d?h.h=m:d=a.i.toString()!=="",d?Wa(h,rh(a.i)):d=!!a.m,d&&(h.m=a.m),h};function Jt(a){return new Mn(a)}function Ns(a,h,d){a.j=d?Ms(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Os(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Wa(a,h,d){h instanceof Ls?(a.i=h,Y1(a.i,a.l)):(d||(h=xs(h,Q1)),a.i=new Ls(h,a.l))}function Me(a,h,d){a.i.set(h,d)}function Hi(a){return Me(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Ms(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function xs(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,G1),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function G1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Xu=/[#\/\?@]/g,K1=/[#\?:]/g,W1=/[#\?]/g,Q1=/[#\?@]/g,J1=/#/g;function Ls(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function vr(a){a.g||(a.g=new Map,a.h=0,a.i&&z1(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Ls.prototype,t.add=function(a,h){vr(this),this.i=null,a=Br(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Zu(a,h){vr(a),h=Br(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function eh(a,h){return vr(a),h=Br(a,h),a.g.has(h)}t.forEach=function(a,h){vr(this),this.g.forEach(function(d,m){d.forEach(function(S){a.call(h,S,m,this)},this)},this)};function th(a,h){vr(a);let d=[];if(typeof h=="string")eh(a,h)&&(d=d.concat(a.g.get(Br(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)d=d.concat(a[h]);return d}t.set=function(a,h){return vr(this),this.i=null,a=Br(this,a),eh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=th(this,a),a.length>0?String(a[0]):h):h};function nh(a,h,d){Zu(a,h),d.length>0&&(a.i=null,a.g.set(Br(a,h),_(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let m=0;m<h.length;m++){var d=h[m];const S=ks(d);d=th(this,d);for(let V=0;V<d.length;V++){let G=S;d[V]!==""&&(G+="="+ks(d[V])),a.push(G)}}return this.i=a.join("&")};function rh(a){const h=new Ls;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Br(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Y1(a,h){h&&!a.j&&(vr(a),a.i=null,a.g.forEach(function(d,m){const S=m.toLowerCase();m!=S&&(Zu(this,m),nh(this,S,d))},a)),a.j=h}function X1(a,h){const d=new Vs;if(o.Image){const m=new Image;m.onload=f(xn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=f(xn,d,"TestLoadImage: error",!1,h,m),m.onabort=f(xn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=f(xn,d,"TestLoadImage: timeout",!1,h,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Z1(a,h){const d=new Vs,m=new AbortController,S=setTimeout(()=>{m.abort(),xn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(V=>{clearTimeout(S),V.ok?xn(d,"TestPingServer: ok",!0,h):xn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(S),xn(d,"TestPingServer: error",!1,h)})}function xn(a,h,d,m,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),m(d)}catch{}}function e_(){this.g=new Ye}function Qa(a){this.i=a.Sb||null,this.h=a.ab||!1}p(Qa,St),Qa.prototype.g=function(){return new qi(this.i,this.h)};function qi(a,h){q.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(qi,q),t=qi.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,Us(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Us(this)),this.g&&(this.readyState=3,Us(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sh(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sh(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Fs(this):Us(this),this.readyState==3&&sh(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Fs(this))},t.Na=function(a){this.g&&(this.response=a,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,Us(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function Us(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ih(a){let h="";return Ct(a,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Ja(a,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=ih(d),typeof a=="string"?d!=null&&ks(d):Me(a,h,d))}function Be(a){q.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Be,q);var t_=/^https?$/i,n_=["POST","PUT"];t=Be.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$u.g(),this.g.onreadystatechange=g(u(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){oh(this,V);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var S in m)d.set(S,m[S]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())d.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(V=>V.toLowerCase()=="content-type"),S=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(n_,h,void 0)>=0)||m||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of d)this.g.setRequestHeader(V,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){oh(this,V)}};function oh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,ah(a),zi(a)}function ah(a){a.A||(a.A=!0,B(a,"complete"),B(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,B(this,"complete"),B(this,"abort"),zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),Be.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?ch(this):this.Xa())},t.Xa=function(){ch(this)};function ch(a){if(a.h&&typeof i<"u"){if(a.v&&Ln(a)==4)setTimeout(a.Ca.bind(a),0);else if(B(a,"readystatechange"),Ln(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=V===0){let G=String(a.D).match(Yu)[1]||null;!G&&o.self&&o.self.location&&(G=o.self.location.protocol.slice(0,-1)),m=!t_.test(G?G.toLowerCase():"")}d=m}if(d)B(a,"complete"),B(a,"success");else{a.o=6;try{var S=Ln(a)>2?a.g.statusText:""}catch{S=""}a.l=S+" ["+a.ca()+"]",ah(a)}}finally{zi(a)}}}}function zi(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,h||B(a,"ready");try{d.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Ln(a){return a.g?a.g.readyState:0}t.ca=function(){try{return Ln(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),ht(h)}};function lh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function r_(a){const h={};a=(a.g&&Ln(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(E(a[m]))continue;var d=B1(a[m]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const V=h[S]||[];h[S]=V,V.push(d)}Qt(h,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function uh(a){this.za=0,this.i=[],this.j=new Vs,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$s("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$s("baseRetryDelayMs",5e3,a),this.Za=$s("retryDelaySeedMs",1e4,a),this.Ta=$s("forwardChannelMaxRetries",2,a),this.va=$s("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Gu(a&&a.concurrentRequestLimit),this.Ba=new e_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=uh.prototype,t.ka=8,t.I=1,t.connect=function(a,h,d,m){Tt(0),this.W=a,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.J=vh(this,null,this.W),Ki(this)};function Ya(a){if(hh(a),a.I==3){var h=a.V++,d=Jt(a.J);if(Me(d,"SID",a.M),Me(d,"RID",h),Me(d,"TYPE","terminate"),Bs(a,d),h=new On(a,a.j,h),h.M=2,h.A=Hi(Jt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=h.A,d=!0),d||(h.g=Eh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ji(h)}yh(a)}function Gi(a){a.g&&(Za(a),a.g.cancel(),a.g=null)}function hh(a){Gi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Wi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ki(a){if(!Ku(a.h)&&!a.m){a.m=!0;var h=a.Ea;te||v(),ae||(te(),ae=!0),A.add(h,a),a.D=0}}function s_(a,h){return Wu(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=Ps(u(a.Ea,a,h),_h(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const S=new On(this,this.j,a);let V=this.o;if(this.U&&(V?(V=kt(V),mn(V,this.U)):V=this.U),this.u!==null||this.R||(S.J=V,V=null),this.S)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,h>4096){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=dh(this,S,h),d=Jt(this.J),Me(d,"RID",a),Me(d,"CVER",22),this.G&&Me(d,"X-HTTP-Session-Id",this.G),Bs(this,d),V&&(this.R?h="headers="+ks(ih(V))+"&"+h:this.u&&Ja(d,this.u,V)),Ka(this.h,S),this.Ra&&Me(d,"TYPE","init"),this.S?(Me(d,"$req",h),Me(d,"SID","null"),S.U=!0,Ha(S,d,null)):Ha(S,d,h),this.I=2}}else this.I==3&&(a?fh(this,a):this.i.length==0||Ku(this.h)||fh(this))};function fh(a,h){var d;h?d=h.l:d=a.V++;const m=Jt(a.J);Me(m,"SID",a.M),Me(m,"RID",d),Me(m,"AID",a.K),Bs(a,m),a.u&&a.o&&Ja(m,a.u,a.o),d=new On(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),h&&(a.i=h.G.concat(a.i)),h=dh(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ka(a.h,d),Ha(d,m,h)}function Bs(a,h){a.H&&Ct(a.H,function(d,m){Me(h,m,d)}),a.l&&Ct({},function(d,m){Me(h,m,d)})}function dh(a,h,d){d=Math.min(a.i.length,d);const m=a.l?u(a.l.Ka,a.l,a):null;e:{var S=a.i;let he=-1;for(;;){const Qe=["count="+d];he==-1?d>0?(he=S[0].g,Qe.push("ofs="+he)):he=0:Qe.push("ofs="+he);let Re=!0;for(let Ze=0;Ze<d;Ze++){var V=S[Ze].g;const Yt=S[Ze].map;if(V-=he,V<0)he=Math.max(0,S[Ze].g-100),Re=!1;else try{V="req"+V+"_"||"";try{var G=Yt instanceof Map?Yt:Object.entries(Yt);for(const[Tr,Fn]of G){let Un=Fn;c(Fn)&&(Un=ye(Fn)),Qe.push(V+Tr+"="+encodeURIComponent(Un))}}catch(Tr){throw Qe.push(V+"type="+encodeURIComponent("_badmap")),Tr}}catch{m&&m(Yt)}}if(Re){G=Qe.join("&");break e}}G=void 0}return a=a.i.splice(0,d),h.G=a,G}function ph(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;te||v(),ae||(te(),ae=!0),A.add(h,a),a.A=0}}function Xa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=Ps(u(a.Da,a),_h(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=Ps(u(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Tt(10),Gi(this),gh(this))};function Za(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gh(a){a.g=new On(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Jt(a.na);Me(h,"RID","rpc"),Me(h,"SID",a.M),Me(h,"AID",a.K),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&Me(h,"TO",a.ia),Me(h,"TYPE","xmlhttp"),Bs(a,h),a.u&&a.o&&Ja(h,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Hi(Jt(h)),d.u=null,d.R=!0,Hu(d,a)}t.Va=function(){this.C!=null&&(this.C=null,Gi(this),Xa(this),Tt(19))};function Wi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function mh(a,h){var d=null;if(a.g==h){Wi(a),Za(a),a.g=null;var m=2}else if(Ga(a.h,h))d=h.G,Qu(a.h,h),m=1;else return;if(a.I!=0){if(h.o)if(m==1){d=h.u?h.u.length:0,h=Date.now()-h.F;var S=a.D;m=_r(),B(m,new Fu(m,d)),Ki(a)}else ph(a);else if(S=h.m,S==3||S==0&&h.X>0||!(m==1&&s_(a,h)||m==2&&Xa(a)))switch(d&&d.length>0&&(h=a.h,h.i=h.i.concat(d)),S){case 1:Er(a,5);break;case 4:Er(a,10);break;case 3:Er(a,6);break;default:Er(a,2)}}}function _h(a,h){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*h}function Er(a,h){if(a.j.info("Error code "+h),h==2){var d=u(a.bb,a),m=a.Ua;const S=!m;m=new Mn(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ns(m,"https"),Hi(m),S?X1(m.toString(),d):Z1(m.toString(),d)}else Tt(2);a.I=0,a.l&&a.l.pa(h),yh(a),hh(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Tt(2)):(this.j.info("Failed to ping google.com"),Tt(1))};function yh(a){if(a.I=0,a.ja=[],a.l){const h=Ju(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ja,h),k(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function vh(a,h,d){var m=d instanceof Mn?Jt(d):new Mn(d);if(m.g!="")h&&(m.g=h+"."+m.g),Os(m,m.u);else{var S=o.location;m=S.protocol,h=h?h+"."+S.hostname:S.hostname,S=+S.port;const V=new Mn(null);m&&Ns(V,m),h&&(V.g=h),S&&Os(V,S),d&&(V.h=d),m=V}return d=a.G,h=a.wa,d&&h&&Me(m,d,h),Me(m,"VER",a.ka),Bs(a,m),m}function Eh(a,h,d){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Be(new Qa({ab:d})):new Be(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Th(){}t=Th.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Qi(){}Qi.prototype.g=function(a,h){return new Dt(a,h)};function Dt(a,h){q.call(this),this.g=new uh(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!E(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new jr(this)}p(Dt,q),Dt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ya(this.g)},Dt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=ye(a),a=d);h.i.push(new q1(h.Ya++,a)),h.I==3&&Ki(h)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ya(this.g),delete this.g,Dt.Z.N.call(this)};function wh(a){Ur.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(wh,Ur);function Ih(){st.call(this),this.status=1}p(Ih,st);function jr(a){this.g=a}p(jr,Th),jr.prototype.ra=function(){B(this.g,"a")},jr.prototype.qa=function(a){B(this.g,new wh(a))},jr.prototype.pa=function(a){B(this.g,new Ih)},jr.prototype.oa=function(){B(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,pm=function(){return new Qi},dm=function(){return _r()},fm=Xe,Qc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,To=Bi,Uu.COMPLETE="complete",hm=Uu,ft.EventType=Ht,Ht.OPEN="a",Ht.CLOSE="b",Ht.ERROR="c",Ht.MESSAGE="d",q.prototype.listen=q.prototype.J,Gs=ft,Be.prototype.listenOnce=Be.prototype.K,Be.prototype.getLastError=Be.prototype.Ha,Be.prototype.getLastErrorCode=Be.prototype.ya,Be.prototype.getStatus=Be.prototype.ca,Be.prototype.getResponseJson=Be.prototype.La,Be.prototype.getResponseText=Be.prototype.la,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Fa,um=Be}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const Jf="@firebase/firestore",Yf="4.9.2";/**
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
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
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
 */let Is="12.3.0";/**
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
 */const xr=new Bl("@firebase/firestore");function Kr(){return xr.logLevel}function X(t,...e){if(xr.logLevel<=de.DEBUG){const n=e.map(Yl);xr.debug(`Firestore (${Is}): ${t}`,...n)}}function kn(t,...e){if(xr.logLevel<=de.ERROR){const n=e.map(Yl);xr.error(`Firestore (${Is}): ${t}`,...n)}}function fs(t,...e){if(xr.logLevel<=de.WARN){const n=e.map(Yl);xr.warn(`Firestore (${Is}): ${t}`,...n)}}function Yl(t){if(typeof t=="string")return t;try{/**
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
 */function le(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,gm(t,r,n)}function gm(t,e,n){let r=`FIRESTORE (${Is}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw kn(r),new Error(r)}function Fe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||gm(e,s,r)}function _e(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class nr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class mm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Zw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class eI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tI{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Fe(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new nr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new nr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new nr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string",31837,{l:r}),new mm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class nI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class rI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new nI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Xf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Fe(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Xf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Xf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function iI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Xl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=iI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Jc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return Tc(s)===Tc(i)?ge(s,i):Tc(s)?1:-1}return ge(t.length,e.length)}const oI=55296,aI=57343;function Tc(t){const e=t.charCodeAt(0);return e>=oI&&e<=aI}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Zf="__name__";class en{constructor(e,n,r){n===void 0?n=0:n>e.length&&le(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&le(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return en.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof en?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=en.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=en.isNumericId(e),s=en.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?en.extractNumericId(e).compare(en.extractNumericId(n)):Jc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return tr.fromString(e.substring(4,e.length-2))}}class ke extends en{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const cI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends en{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return cI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Zf}static keyField(){return new yt([Zf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class ne{constructor(e){this.path=e}static fromPath(e){return new ne(ke.fromString(e))}static fromName(e){return new ne(ke.fromString(e).popFirst(5))}static empty(){return new ne(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ne(new ke(e.slice()))}}/**
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
 */function Zl(t,e,n){if(!n)throw new Q($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lI(t,e,n,r){if(e===!0&&r===!0)throw new Q($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ed(t){if(!ne.isDocumentKey(t))throw new Q($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function td(t){if(ne.isDocumentKey(t))throw new Q($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _m(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":le(12329,{type:typeof t})}function bn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ba(t);throw new Q($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function uI(t,e){if(e<=0)throw new Q($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ge(t,e){const n={typeString:t};return e&&(n.value=e),n}function xi(t,e){if(!_m(t))throw new Q($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q($.INVALID_ARGUMENT,n);return!0}/**
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
 */const nd=-62135596800,rd=1e6;class xe{static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*rd);return new xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<nd)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/rd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:xe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(xi(e,xe._jsonSchema))return new xe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-nd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}xe._jsonSchemaVersion="firestore/timestamp/1.0",xe._jsonSchema={type:Ge("string",xe._jsonSchemaVersion),seconds:Ge("number"),nanoseconds:Ge("number")};/**
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
 */const Ei=-1;function hI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new cr(s,ne.empty(),e)}function fI(t){return new cr(t.readTime,t.key,Ei)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(ce.min(),ne.empty(),Ei)}static max(){return new cr(ce.max(),ne.empty(),Ei)}}function dI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ne.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const pI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ca(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==pI)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(f=>{o[u]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function As(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const _I=-1;function Ra(t){return t==null}function Go(t){return t===0&&1/t==-1/0}function yI(t){return typeof t=="number"&&Number.isInteger(t)&&!Go(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ym="";function vI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=sd(e)),e=EI(t.get(n),e);return sd(e)}function EI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case ym:n+="";break;default:n+=i}}return n}function sd(t){return t+ym+""}/**
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
 */function id(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r!=null?r:ot.RED,this.left=s!=null?s:ot.EMPTY,this.right=i!=null?i:ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,s!=null?s:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new od(this.data.getIterator())}getIteratorFrom(e){return new od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Qn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Qn([])}unionWith(e){let n=new Je(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Qn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Em extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Em("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const TI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function lr(t){if(Fe(!!t,39018),typeof t=="string"){let e=0;const n=TI.exec(t);if(Fe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ur(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
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
 */const Tm="server_timestamp",wm="__type__",Im="__previous_value__",Am="__local_write_time__";function eu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[wm])==null?void 0:r.stringValue)===Tm}function Pa(t){const e=t.mapValue.fields[Im];return eu(e)?Pa(e):e}function Ti(t){const e=lr(t.mapValue.fields[Am].timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class wI{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ko="(default)";class wi{constructor(e,n){this.projectId=e,this.database=n||Ko}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database===Ko}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const bm="__type__",Cm="__max__",ro={mapValue:{fields:{__type__:{stringValue:Cm}}}},Sm="__vector__",Wo="value";function hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eu(t)?4:AI(t)?9007199254740991:II(t)?10:11:le(28295,{value:t})}function dn(t,e){if(t===e)return!0;const n=hr(t);if(n!==hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ti(t).isEqual(Ti(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=lr(s.timestampValue),c=lr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ur(s.bytesValue).isEqual(ur(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return He(s.geoPointValue.latitude)===He(i.geoPointValue.latitude)&&He(s.geoPointValue.longitude)===He(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return He(s.integerValue)===He(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=He(s.doubleValue),c=He(i.doubleValue);return o===c?Go(o)===Go(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(id(o)!==id(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!dn(o[l],c[l])))return!1;return!0}(t,e);default:return le(52216,{left:t})}}function Ii(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=hr(t),r=hr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=He(i.integerValue||i.doubleValue),l=He(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return ad(t.timestampValue,e.timestampValue);case 4:return ad(Ti(t),Ti(e));case 5:return Jc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ur(i),l=ur(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ge(He(i.latitude),He(o.latitude));return c!==0?c:ge(He(i.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return cd(t.arrayValue,e.arrayValue);case 10:return function(i,o){var g,_,k,D;const c=i.fields||{},l=o.fields||{},u=(g=c[Wo])==null?void 0:g.arrayValue,f=(_=l[Wo])==null?void 0:_.arrayValue,p=ge(((k=u==null?void 0:u.values)==null?void 0:k.length)||0,((D=f==null?void 0:f.values)==null?void 0:D.length)||0);return p!==0?p:cd(u,f)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ro.mapValue&&o===ro.mapValue)return 0;if(i===ro.mapValue)return 1;if(o===ro.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Jc(l[p],f[p]);if(g!==0)return g;const _=ps(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)}(t.mapValue,e.mapValue);default:throw le(23264,{he:n})}}function ad(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=lr(t),r=lr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function cd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ps(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function gs(t){return Yc(t)}function Yc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ur(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ne.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Yc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Yc(n.fields[o])}`;return s+"}"}(t.mapValue):le(61005,{value:t})}function wo(t){switch(hr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Pa(t);return e?16+wo(e):16;case 5:return 2*t.stringValue.length;case 6:return ur(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+wo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return bs(r.fields,(i,o)=>{s+=i.length+wo(o)}),s}(t.mapValue);default:throw le(13486,{value:t})}}function ld(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xc(t){return!!t&&"integerValue"in t}function tu(t){return!!t&&"arrayValue"in t}function ud(t){return!!t&&"nullValue"in t}function hd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wc(t){return!!t&&"mapValue"in t}function II(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[bm])==null?void 0:r.stringValue)===Sm}function ai(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ai(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return{...t}}function AI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Cm}/**
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
 */class rn{constructor(e){this.value=e}static empty(){return new rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ai(n)}setAll(e){let n=yt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ai(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());wc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];wc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new rn(ai(this.value))}}/**
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
 */class mt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new mt(e,0,ce.min(),ce.min(),ce.min(),rn.empty(),0)}static newFoundDocument(e,n,r,s){return new mt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new mt(e,2,n,ce.min(),ce.min(),rn.empty(),0)}static newUnknownDocument(e,n){return new mt(e,3,n,ce.min(),ce.min(),rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof mt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new mt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function fd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ne.comparator(ne.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ai{constructor(e,n="asc"){this.field=e,this.dir=n}}function bI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Rm{}class ze extends Rm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SI(e,n,r):n==="array-contains"?new VI(e,r):n==="in"?new kI(e,r):n==="not-in"?new DI(e,r):n==="array-contains-any"?new NI(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RI(e,r):new PI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ps(n,this.value)):n!==null&&hr(this.value)===hr(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends Rm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Wt(e,n)}matches(e){return Pm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Pm(t){return t.op==="and"}function Vm(t){return CI(t)&&Pm(t)}function CI(t){for(const e of t.filters)if(e instanceof Wt)return!1;return!0}function Zc(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Vm(t))return t.filters.map(e=>Zc(e)).join(",");{const e=t.filters.map(n=>Zc(n)).join(",");return`${t.op}(${e})`}}function km(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&km(o,s.filters[c]),!0):!1}(t,e):void le(19439)}function Dm(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof Wt?function(n){return n.op.toString()+" {"+n.getFilters().map(Dm).join(" ,")+"}"}(t):"Filter"}class SI extends ze{constructor(e,n,r){super(e,n,r),this.key=ne.fromName(r.referenceValue)}matches(e){const n=ne.comparator(e.key,this.key);return this.matchesComparison(n)}}class RI extends ze{constructor(e,n){super(e,"in",n),this.keys=Nm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class PI extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Nm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Nm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>ne.fromName(r.referenceValue))}class VI extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return tu(n)&&Ii(n.arrayValue,this.value)}}class kI extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class DI extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ii(this.value.arrayValue,n)}}class NI extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!tu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
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
 */class OI{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function pd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new OI(t,e,n,r,s,i,o)}function nu(t){const e=_e(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Zc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ra(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.Te=n}return e.Te}function ru(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!km(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!dd(t.startAt,e.startAt)&&dd(t.endAt,e.endAt)}function el(t){return ne.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Lr{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function MI(t,e,n,r,s,i,o,c){return new Lr(t,e,n,r,s,i,o,c)}function Va(t){return new Lr(t)}function gd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Om(t){return t.collectionGroup!==null}function ci(t){const e=_e(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Je(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(c=c.add(u.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new Ai(i,r))}),n.has(yt.keyField().canonicalString())||e.Ie.push(new Ai(yt.keyField(),r))}return e.Ie}function cn(t){const e=_e(t);return e.Ee||(e.Ee=xI(e,ci(t))),e.Ee}function xI(t,e){if(t.limitType==="F")return pd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ai(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return pd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function tl(t,e){const n=t.filters.concat([e]);return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Jo(t,e,n){return new Lr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ka(t,e){return ru(cn(t),cn(e))&&t.limitType===e.limitType}function Mm(t){return`${nu(cn(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Dm(s)).join(", ")}]`),Ra(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function Da(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ne.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ci(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const u=fd(o,c,l);return o.inclusive?u<=0:u<0}(r.startAt,ci(r),s)||r.endAt&&!function(o,c,l){const u=fd(o,c,l);return o.inclusive?u>=0:u>0}(r.endAt,ci(r),s))}(t,e)}function LI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xm(t){return(e,n)=>{let r=!1;for(const s of ci(t)){const i=FI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FI(t,e,n){const r=t.field.isKeyField()?ne.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?ps(l,u):le(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:t.dir})}}/**
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
 */class Fr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return vm(this.inner)}size(){return this.innerSize}}/**
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
 */const UI=new je(ne.comparator);function fr(){return UI}const Lm=new je(ne.comparator);function Ks(...t){let e=Lm;for(const n of t)e=e.insert(n.key,n);return e}function $I(t){let e=Lm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Sr(){return li()}function Fm(){return li()}function li(){return new Fr(t=>t.toString(),(t,e)=>t.isEqual(e))}new je(ne.comparator);const BI=new Je(ne.comparator);function ve(...t){let e=BI;for(const n of t)e=e.add(n);return e}const jI=new Je(ge);function HI(){return jI}/**
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
 */function su(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Go(e)?"-0":e}}function Um(t){return{integerValue:""+t}}function qI(t,e){return yI(e)?Um(e):su(t,e)}/**
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
 */class Na{constructor(){this._=void 0}}function zI(t,e,n){return t instanceof nl?function(s,i){const o={fields:{[wm]:{stringValue:Tm},[Am]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eu(i)&&(i=Pa(i)),i&&(o.fields[Im]=i),{mapValue:o}}(n,e):t instanceof Yo?$m(t,e):t instanceof Xo?Bm(t,e):function(s,i){const o=KI(s,i),c=md(o)+md(s.Ae);return Xc(o)&&Xc(s.Ae)?Um(c):su(s.serializer,c)}(t,e)}function GI(t,e,n){return t instanceof Yo?$m(t,e):t instanceof Xo?Bm(t,e):n}function KI(t,e){return t instanceof rl?function(r){return Xc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class nl extends Na{}class Yo extends Na{constructor(e){super(),this.elements=e}}function $m(t,e){const n=jm(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Xo extends Na{constructor(e){super(),this.elements=e}}function Bm(t,e){let n=jm(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class rl extends Na{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function md(t){return He(t.integerValue||t.doubleValue)}function jm(t){return tu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function WI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Yo&&s instanceof Yo||r instanceof Xo&&s instanceof Xo?ds(r.elements,s.elements,dn):r instanceof rl&&s instanceof rl?dn(r.Ae,s.Ae):r instanceof nl&&s instanceof nl}(t.transform,e.transform)}class Pr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pr}static exists(e){return new Pr(void 0,e)}static updateTime(e){return new Pr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class iu{}function Hm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new JI(t.key,Pr.none()):new ou(t.key,t.data,Pr.none());{const n=t.data,r=rn.empty();let s=new Je(yt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Oa(t.key,r,new Qn(s.toArray()),Pr.none())}}function QI(t,e,n){t instanceof ou?function(s,i,o){const c=s.value.clone(),l=yd(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Oa?function(s,i,o){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=yd(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(qm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ui(t,e,n,r){return t instanceof ou?function(i,o,c,l){if(!Io(i.precondition,o))return c;const u=i.value.clone(),f=vd(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Oa?function(i,o,c,l){if(!Io(i.precondition,o))return c;const u=vd(i.fieldTransforms,l,o),f=o.data;return f.setAll(qm(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Io(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function _d(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,o)=>WI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ou extends iu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Oa extends iu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function qm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function yd(t,e,n){const r=new Map;Fe(t.length===n.length,32656,{Re:n.length,Ve:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,GI(o,c,n[s]))}return r}function vd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,zI(i,o,e))}return r}class JI extends iu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&QI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Fm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Hm(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ve())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>_d(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>_d(n,r))}}/**
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
 */class XI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var qe,me;function zm(t){if(t===void 0)return kn("GRPC error has no .code"),$.UNKNOWN;switch(t){case qe.OK:return $.OK;case qe.CANCELLED:return $.CANCELLED;case qe.UNKNOWN:return $.UNKNOWN;case qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qe.INTERNAL:return $.INTERNAL;case qe.UNAVAILABLE:return $.UNAVAILABLE;case qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qe.NOT_FOUND:return $.NOT_FOUND;case qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qe.ABORTED:return $.ABORTED;case qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qe.DATA_LOSS:return $.DATA_LOSS;default:return le(39323,{code:t})}}(me=qe||(qe={}))[me.OK=0]="OK",me[me.CANCELLED=1]="CANCELLED",me[me.UNKNOWN=2]="UNKNOWN",me[me.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",me[me.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",me[me.NOT_FOUND=5]="NOT_FOUND",me[me.ALREADY_EXISTS=6]="ALREADY_EXISTS",me[me.PERMISSION_DENIED=7]="PERMISSION_DENIED",me[me.UNAUTHENTICATED=16]="UNAUTHENTICATED",me[me.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",me[me.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",me[me.ABORTED=10]="ABORTED",me[me.OUT_OF_RANGE=11]="OUT_OF_RANGE",me[me.UNIMPLEMENTED=12]="UNIMPLEMENTED",me[me.INTERNAL=13]="INTERNAL",me[me.UNAVAILABLE=14]="UNAVAILABLE",me[me.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eA(){return new TextEncoder}/**
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
 */const tA=new tr([4294967295,4294967295],0);function Ed(t){const e=eA().encode(t),n=new lm;return n.update(e),new Uint8Array(n.digest())}function Td(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new tr([n,r],0),new tr([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ws(`Invalid padding: ${n}`);if(r<0)throw new Ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ws(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=tr.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(tr.fromNumber(r)));return s.compare(tA)===1&&(s=new tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Ed(e),[r,s]=Td(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Ed(e),[r,s]=Td(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Li.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ma(ce.min(),s,new je(ge),fr(),ve())}}class Li{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Li(r,n,ve(),ve(),ve())}}/**
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
 */class Ao{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class Gm{constructor(e,n){this.targetId=e,this.Ce=n}}class Km{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class wd{constructor(){this.ve=0,this.Fe=Id(),this.Me=lt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ve(),n=ve(),r=ve();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:le(38017,{changeType:i})}}),new Li(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Id()}Qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class nA{constructor(e){this.Ge=e,this.ze=new Map,this.je=fr(),this.Je=so(),this.He=so(),this.Ye=new je(ge)}Ze(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Xe(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(el(i))if(r===0){const o=new ne(i.path);this.et(n,o,mt.newNoDocument(o,ce.min()))}else Fe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,u)}Ic==null||Ic.lt(function(f,p,g,_,k){var O,N,H,z,te,ae;const D={localCacheCount:f,existenceFilterCount:p.count,databaseId:g.database,projectId:g.projectId},R=p.unchangedNames;return R&&(D.bloomFilter={applied:k===0,hashCount:(O=R==null?void 0:R.hashCount)!=null?O:0,bitmapLength:(z=(H=(N=R==null?void 0:R.bits)==null?void 0:N.bitmap)==null?void 0:H.length)!=null?z:0,padding:(ae=(te=R==null?void 0:R.bits)==null?void 0:te.padding)!=null?ae:0,mightContain:A=>{var v;return(v=_==null?void 0:_.mightContain(A))!=null?v:!1}}),D}(o,e.Ce,this.Ge.ht(),c,l))}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ur(r).toUint8Array()}catch(l){if(l instanceof Em)return fs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new au(o,s,i)}catch(l){return fs(l instanceof Ws?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&el(c.target)){const l=new ne(c.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,mt.newNoDocument(l,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=ve();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new Ma(e,n,this.Ye,this.je,r);return this.je=fr(),this.Je=so(),this.He=so(),this.Ye=new je(ge),s}Xe(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.dt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,n)?s.Qe(n,1):s.$e(n),this.He=this.He.insert(n,this.dt(n).delete(e)),this.He=this.He.insert(n,this.dt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let n=this.ze.get(e);return n||(n=new wd,this.ze.set(e,n)),n}dt(e){let n=this.He.get(e);return n||(n=new Je(ge),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new Je(ge),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new wd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function so(){return new je(ne.comparator)}function Id(){return new je(ne.comparator)}const rA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),sA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),iA=(()=>({and:"AND",or:"OR"}))();class oA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function sl(t,e){return t.useProto3Json||Ra(e)?e:{value:e}}function il(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function as(t){return Fe(!!t,49232),ce.fromTimestamp(function(n){const r=lr(n);return new xe(r.seconds,r.nanos)}(t))}function Qm(t,e){return ol(t,e).canonicalString()}function ol(t,e){const n=function(s){return new ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Jm(t){const e=ke.fromString(t);return Fe(t1(e),10190,{key:e.toString()}),e}function Ac(t,e){const n=Jm(e);if(n.get(1)!==t.databaseId.projectId)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ne(Xm(n))}function Ym(t,e){return Qm(t.databaseId,e)}function aA(t){const e=Jm(t);return e.length===4?ke.emptyPath():Xm(e)}function Ad(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Xm(t){return Fe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:le(39313,{state:u})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string",58123),lt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),lt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const f=u.code===void 0?$.UNKNOWN:zm(u.code);return new Q(f,u.message||"")}(o);n=new Km(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ac(t,r.document.name),i=as(r.document.updateTime),o=r.document.createTime?as(r.document.createTime):ce.min(),c=new rn({mapValue:{fields:r.document.fields}}),l=mt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Ao(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ac(t,r.document),i=r.readTime?as(r.readTime):ce.min(),o=mt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Ao([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ac(t,r.document),i=r.removedTargetIds||[];n=new Ao([],i,s,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new ZI(s,i),c=r.targetId;n=new Gm(c,o)}}return n}function lA(t,e){return{documents:[Ym(t,e.path)]}}function uA(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ym(t,s);const i=function(u){if(u.length!==0)return e1(Wt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(f=>function(g){return{field:Qr(g.field),direction:dA(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=sl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ft:n,parent:s}}function hA(t){let e=aA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Fe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Zm(p);return g instanceof Wt&&Vm(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(k){return new Ai(Jr(k.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,Ra(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,_=p.values||[];return new Qo(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Qo(_,g)}(n.endAt)),MI(e,s,o,i,c,"F",l,u)}function fA(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Zm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Jr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Jr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Jr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wt.create(n.compositeFilter.filters.map(r=>Zm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return le(1026)}}(n.compositeFilter.op))}(t):le(30097,{filter:t})}function dA(t){return rA[t]}function pA(t){return sA[t]}function gA(t){return iA[t]}function Qr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return yt.fromServerFormat(t.fieldPath)}function e1(t){return t instanceof ze?function(n){if(n.op==="=="){if(hd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NAN"}};if(ud(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hd(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NAN"}};if(ud(n.value))return{unaryFilter:{field:Qr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qr(n.field),op:pA(n.op),value:n.value}}}(t):t instanceof Wt?function(n){const r=n.getFilters().map(s=>e1(s));return r.length===1?r[0]:{compositeFilter:{op:gA(n.op),filters:r}}}(t):le(54877,{filter:t})}function t1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Jn{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mA{constructor(e){this.yt=e}}function _A(t){const e=hA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jo(e,e.limit,"L"):e}/**
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
 */class yA{constructor(){this.Cn=new vA}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(cr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class vA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Je(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Je(ke.comparator)).toArray()}}/**
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
 */const bd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},n1=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(n1,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */const Cd="LruGarbageCollector",EA=1048576;function Sd([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class TA{constructor(e){this.Ir=e,this.buffer=new Je(Sd),this.Er=0}dr(){return++this.Er}Ar(e){const n=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Sd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){X(Cd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){As(n)?X(Cd,"Ignoring IndexedDB error during garbage collection: ",n):await Ca(n)}await this.Vr(3e5)})}}class IA{constructor(e,n){this.mr=e,this.params=n}calculateTargetCount(e,n){return this.mr.gr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Sa.ce);const r=new TA(n);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.mr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.mr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(bd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bd):this.yr(e,n))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Kr()<=de.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function AA(t,e){return new IA(t,e)}/**
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
 */class bA{constructor(){this.changes=new Fr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,mt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class CA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class SA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ui(r.mutation,s,Qn.empty(),xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ve()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ve()){const s=Sr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Ks();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Sr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ve()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=fr();const o=li(),c=function(){return li()}();return n.forEach((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Oa)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),ui(f.mutation,u,f.mutation.getFieldMask(),xe.now())):o.set(u.key,Qn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return c.set(u,new CA(f,(p=o.get(u))!=null?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=li();let s=new je((o,c)=>o-c),i=ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Qn.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||ve()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=Fm();f.forEach(g=>{if(!i.has(g)){const _=Hm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ne.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Om(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Sr());let c=Ei,l=i;return o.next(u=>L.forEach(u,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ve())).next(f=>({batchId:c,changes:$I(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ne(n)).next(r=>{let s=Ks();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ks();return this.indexManager.getCollectionParents(e,i).next(c=>L.forEach(c,l=>{const u=function(p,g){return new Lr(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,mt.newInvalidDocument(f)))});let c=Ks();return o.forEach((l,u)=>{const f=i.get(l);f!==void 0&&ui(f.mutation,u,Qn.empty(),xe.now()),Da(n,u)&&(c=c.insert(l,u))}),c})}}/**
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
 */class RA{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,n){return L.resolve(this.Lr.get(n))}saveBundleMetadata(e,n){return this.Lr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:as(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.kr.get(n))}saveNamedQuery(e,n){return this.kr.set(n.name,function(s){return{name:s.name,query:_A(s.bundledQuery),readTime:as(s.readTime)}}(n)),L.resolve()}}/**
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
 */class PA{constructor(){this.overlays=new je(ne.comparator),this.qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Sr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Sr(),i=n.length+1,o=new ne(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Sr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Sr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,f)=>c.set(u,f)),!(c.size()>=s)););return L.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new XI(n,r));let i=this.qr.get(n);i===void 0&&(i=ve(),this.qr.set(n,i)),this.qr.set(n,i.add(r.key))}}/**
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
 */class VA{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class cu{constructor(){this.Qr=new Je(et.$r),this.Ur=new Je(et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Gr(new et(e,n))}zr(e,n){e.forEach(r=>this.removeReference(r,n))}jr(e){const n=new ne(new ke([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Ur.forEachInRange([r,s],o=>{this.Gr(o),i.push(o.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const n=new ne(new ke([])),r=new et(n,e),s=new et(n,e+1);let i=ve();return this.Ur.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Yr=n}static $r(e,n){return ne.comparator(e.key,n.key)||ge(e.Yr,n.Yr)}static Kr(e,n){return ge(e.Yr,n.Yr)||ne.comparator(e.key,n.key)}}/**
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
 */class kA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Je(et.$r)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YI(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Zr=this.Zr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ei(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?_I:this.tr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],o=>{const c=this.Xr(o.Yr);i.push(c)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(ge);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,o],c=>{r=r.add(c.Yr)})}),L.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ne.isDocumentKey(i)||(i=i.child(""));const o=new et(new ne(i),0);let c=new Je(ge);return this.Zr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Yr)),!0)},o),L.resolve(this.ti(c))}ti(e){const n=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Fe(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return L.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,n){const r=new et(n,0),s=this.Zr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ni(e,n){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const n=this.ei(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class DA{constructor(e){this.ri=e,this.docs=function(){return new je(ne.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():mt.newInvalidDocument(n))}getEntries(e,n){let r=fr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():mt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=fr();const o=n.path,c=new ne(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||dI(fI(f),r)<=0||(s.has(f.key)||Da(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){le(9500)}ii(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new NA(this)}getSize(e){return L.resolve(this.size)}}class NA extends bA{constructor(e){super(),this.Nr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Nr.getEntry(e,n)}getAllFromCache(e,n){return this.Nr.getEntries(e,n)}}/**
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
 */class OA{constructor(e){this.persistence=e,this.si=new Fr(n=>nu(n),ru),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.oi=0,this._i=new cu,this.targetCount=0,this.ai=ms.ur()}forEachTarget(e,n){return this.si.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),L.resolve()}Pr(e){this.si.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ai=new ms(n),this.highestTargetId=n),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,n){return this.Pr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Pr(n),L.resolve()}removeTargetData(e,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.si.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.si.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.si.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this._i.Wr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this._i.zr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this._i.jr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this._i.Hr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this._i.containsKey(n))}}/**
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
 */class r1{constructor(e,n){this.ui={},this.overlays={},this.ci=new Sa(0),this.li=!1,this.li=!0,this.hi=new VA,this.referenceDelegate=e(this),this.Pi=new OA(this),this.indexManager=new yA,this.remoteDocumentCache=function(s){return new DA(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new mA(n),this.Ii=new RA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ui[e.toKey()];return r||(r=new kA(n,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new MA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,n){return L.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,n)))}}class MA extends gI{constructor(e){super(),this.currentSequenceNumber=e}}class lu{constructor(e){this.persistence=e,this.Ri=new cu,this.Vi=null}static mi(e){return new lu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.fi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ri.jr(n.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ei(){this.Vi=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.fi,r=>{const s=ne.fromPath(r);return this.gi(e,s).next(i=>{i||n.removeEntry(s,ce.min())})}).next(()=>(this.Vi=null,n.apply(e)))}updateLimboDocument(e,n){return this.gi(e,n).next(r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())})}Ti(e){return 0}gi(e,n){return L.or([()=>L.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ai(e,n)])}}class Zo{constructor(e,n){this.persistence=e,this.pi=new Fr(r=>vI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=AA(this,n)}static mi(e,n){return new Zo(e,n)}Ei(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}gr(e){const n=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}wr(e){let n=0;return this.pr(e,r=>{n++}).next(()=>n)}pr(e,n){return L.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,o=>this.br(e,o,n).next(c=>{c||(r++,i.removeEntry(o,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.pi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.pi.set(n,e.currentSequenceNumber),L.resolve()}Ti(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wo(e.data.value)),n}br(e,n,r){return L.or([()=>this.persistence.Ai(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.pi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class uu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Es=r,this.ds=s}static As(e,n){let r=ve(),s=ve();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uu(e,n.fromCache,r,s)}}/**
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
 */class xA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class LA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return ME()?8:mI(Et())>0?6:4}()}initialize(e,n){this.ps=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ys(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ws(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xA;return this.Ss(e,n,o).next(c=>{if(i.result=c,this.Vs)return this.bs(e,n,o,c.size)})}).next(()=>i.result)}bs(e,n,r,s){return r.documentReadCount<this.fs?(Kr()<=de.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),L.resolve()):(Kr()<=de.DEBUG&&X("QueryEngine","Query:",Wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Kr()<=de.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):L.resolve())}ys(e,n){if(gd(n))return L.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jo(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ve(...i);return this.ps.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Ds(n,c);return this.Cs(n,u,o,l.readTime)?this.ys(e,Jo(n,null,"F")):this.vs(e,u,n,l)}))})))}ws(e,n,r,s){return gd(n)||s.isEqual(ce.min())?L.resolve(null):this.ps.getDocuments(e,r).next(i=>{const o=this.Ds(n,i);return this.Cs(n,o,r,s)?L.resolve(null):(Kr()<=de.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wr(n)),this.vs(e,o,n,hI(s,Ei)).next(c=>c))})}Ds(e,n){let r=new Je(xm(e));return n.forEach((s,i)=>{Da(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,n,r){return Kr()<=de.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Wr(n)),this.ps.getDocumentsMatchingQuery(e,n,cr.min(),r)}vs(e,n,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const hu="LocalStore",FA=3e8;class UA{constructor(e,n,r,s){this.persistence=e,this.Fs=n,this.serializer=s,this.Ms=new je(ge),this.xs=new Fr(i=>nu(i),ru),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SA(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ms))}}function $A(t,e,n,r){return new UA(t,e,n,r)}async function s1(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Bs(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=ve();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Ls:u,removedBatchIds:o,addedBatchIds:c}))})})}function i1(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Pi.getLastRemoteSnapshotVersion(n))}function BA(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ns.newChangeBuffer({trackRemovals:!0});s=n.Ms;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Pi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Pi.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(lt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(D,R,O){return D.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=FA?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(g,_,f)&&c.push(n.Pi.updateTargetData(i,_))});let l=fr(),u=ve();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(jA(i,o,e.documentUpdates).next(f=>{l=f.ks,u=f.qs})),!r.isEqual(ce.min())){const f=n.Pi.getLastRemoteSnapshotVersion(i).next(p=>n.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return L.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ms=s,i))}function jA(t,e,n){let r=ve(),s=ve();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=fr();return n.forEach((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(hu,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)}),{ks:o,qs:s}})}function HA(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Pi.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Pi.allocateTargetId(r).next(o=>(s=new Jn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(e,r.targetId)),r})}async function al(t,e,n){const r=_e(t),s=r.Ms.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!As(o))throw o;X(hu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function Rd(t,e,n){const r=_e(t);let s=ce.min(),i=ve();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,f){const p=_e(l),g=p.xs.get(f);return g!==void 0?L.resolve(p.Ms.get(g)):p.Pi.getTargetData(u,f)}(r,o,cn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.Fs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ve())).next(c=>(qA(r,LI(e),c),{documents:c,Qs:i})))}function qA(t,e,n){let r=t.Os.get(e)||ce.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Os.set(e,r)}class Pd{constructor(){this.activeTargetIds=HI()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this.Mo=new Pd,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,n,r){this.xo[e]=n}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new Pd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class GA{Oo(e){}shutdown(){}}/**
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
 */const Vd="ConnectivityMonitor";class kd{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){X(Vd,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){X(Vd,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let io=null;function cl(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
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
 */const bc="RestConnection",KA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===Ko?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,n,r,s,i){const o=cl(),c=this.zo(e,n.toUriEncodedString());X(bc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(l,s,i);const{host:u}=new URL(c),f=mr(u);return this.Jo(e,c,l,r,f).then(p=>(X(bc,`Received RPC '${e}' ${o}: `,p),p),p=>{throw fs(bc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}Ho(e,n,r,s,i,o){return this.Go(e,n,r,s,i)}jo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Is}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,n){const r=KA[e];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
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
 */class QA{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const dt="WebChannelConnection";class JA extends WA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const o=cl();return new Promise((c,l)=>{const u=new um;u.setWithCredentials(!0),u.listenOnce(hm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case To.NO_ERROR:const p=u.getResponseJson();X(dt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case To.TIMEOUT:X(dt,`RPC '${e}' ${o} timed out`),l(new Q($.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const g=u.getStatus();if(X(dt,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const k=_==null?void 0:_.error;if(k&&k.status&&k.message){const D=function(O){const N=O.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(N)>=0?N:$.UNKNOWN}(k.status);l(new Q(D,k.message))}else l(new Q($.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Q($.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{X(dt,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(s);X(dt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=cl(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=pm(),c=dm(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.jo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(dt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.I_(p);let g=!1,_=!1;const k=new QA({Yo:R=>{_?X(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,R):(g||(X(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(dt,`RPC '${e}' stream ${s} sending:`,R),p.send(R))},Zo:()=>p.close()}),D=(R,O,N)=>{R.listen(O,H=>{try{N(H)}catch(z){setTimeout(()=>{throw z},0)}})};return D(p,Gs.EventType.OPEN,()=>{_||(X(dt,`RPC '${e}' stream ${s} transport opened.`),k.o_())}),D(p,Gs.EventType.CLOSE,()=>{_||(_=!0,X(dt,`RPC '${e}' stream ${s} transport closed`),k.a_(),this.E_(p))}),D(p,Gs.EventType.ERROR,R=>{_||(_=!0,fs(dt,`RPC '${e}' stream ${s} transport errored. Name:`,R.name,"Message:",R.message),k.a_(new Q($.UNAVAILABLE,"The operation could not be completed")))}),D(p,Gs.EventType.MESSAGE,R=>{var O;if(!_){const N=R.data[0];Fe(!!N,16349);const H=N,z=(H==null?void 0:H.error)||((O=H[0])==null?void 0:O.error);if(z){X(dt,`RPC '${e}' stream ${s} received error:`,z);const te=z.status;let ae=function(T){const I=qe[T];if(I!==void 0)return zm(I)}(te),A=z.message;ae===void 0&&(ae=$.INTERNAL,A="Unknown error status: "+te+" with message "+z.message),_=!0,k.a_(new Q(ae,A)),p.close()}else X(dt,`RPC '${e}' stream ${s} received:`,N),k.u_(N)}}),D(c,fm.STAT_EVENT,R=>{R.stat===Qc.PROXY?X(dt,`RPC '${e}' stream ${s} detected buffering proxy`):R.stat===Qc.NOPROXY&&X(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.__()},0),k}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(n=>n===e)}}function Cc(){return typeof document<"u"?document:null}/**
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
 */function xa(t){return new oA(t,!0)}/**
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
 */class o1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=n,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Dd="PersistentStream";class YA{constructor(e,n,r,s,i,o,c,l){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new o1(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(n)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Q($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.W_(this.D_);this.stream=this.j_(e,n),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return X(Dd,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return n=>{this.Mi.enqueueAndForget(()=>this.D_===e?n():(X(Dd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XA extends YA{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?as(o.readTime):ce.min()}(e);return this.listener.H_(n,r)}Y_(e){const n={};n.database=Ad(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=el(l)?{documents:lA(i,l)}:{query:uA(i,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Wm(i,o.resumeToken);const u=sl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=il(i,o.snapshotVersion.toTimestamp());const u=sl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c}(this.serializer,e);const r=fA(this.serializer,e);r&&(n.labels=r),this.q_(n)}Z_(e){const n={};n.database=Ad(this.serializer),n.removeTarget=e,this.q_(n)}}/**
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
 */class ZA{}class eb extends ZA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Go(e,ol(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q($.UNKNOWN,i.toString())})}Ho(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Ho(e,ol(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q($.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class tb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const _s="RemoteStore";class nb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(o=>{r.enqueueAndForget(async()=>{Ui(this)&&(X(_s,"Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.Ea.add(4),await Fi(u),u.Ra.set("Unknown"),u.Ea.delete(4),await La(u)}(this))})}),this.Ra=new tb(r,s)}}async function La(t){if(Ui(t))for(const e of t.da)await e(!0)}async function Fi(t){for(const e of t.da)await e(!1)}function a1(t,e){const n=_e(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),gu(n)?pu(n):Cs(n).O_()&&du(n,e))}function fu(t,e){const n=_e(t),r=Cs(n);n.Ia.delete(e),r.O_()&&c1(n,e),n.Ia.size===0&&(r.O_()?r.L_():Ui(n)&&n.Ra.set("Unknown"))}function du(t,e){if(t.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Cs(t).Y_(e)}function c1(t,e){t.Va.Ue(e),Cs(t).Z_(e)}function pu(t){t.Va=new nA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Cs(t).start(),t.Ra.ua()}function gu(t){return Ui(t)&&!Cs(t).x_()&&t.Ia.size>0}function Ui(t){return _e(t).Ea.size===0}function l1(t){t.Va=void 0}async function rb(t){t.Ra.set("Online")}async function sb(t){t.Ia.forEach((e,n)=>{du(t,e)})}async function ib(t,e){l1(t),gu(t)?(t.Ra.ha(e),pu(t)):t.Ra.set("Unknown")}async function ob(t,e,n){if(t.Ra.set("Online"),e instanceof Km&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ia.delete(c),s.Va.removeTarget(c))}(t,e)}catch(r){X(_s,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nd(t,r)}else if(e instanceof Ao?t.Va.Ze(e):e instanceof Gm?t.Va.st(e):t.Va.tt(e),!n.isEqual(ce.min()))try{const r=await i1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Va.Tt(o);return c.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ia.get(u);f&&i.Ia.set(u,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,u)=>{const f=i.Ia.get(l);if(!f)return;i.Ia.set(l,f.withResumeToken(lt.EMPTY_BYTE_STRING,f.snapshotVersion)),c1(i,l);const p=new Jn(f.target,l,u,f.sequenceNumber);du(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){X(_s,"Failed to raise snapshot:",r),await Nd(t,r)}}async function Nd(t,e,n){if(!As(e))throw e;t.Ea.add(1),await Fi(t),t.Ra.set("Offline"),n||(n=()=>i1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(_s,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await La(t)})}async function Od(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),X(_s,"RemoteStore received new credentials");const r=Ui(n);n.Ea.add(3),await Fi(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await La(n)}async function ab(t,e){const n=_e(t);e?(n.Ea.delete(2),await La(n)):e||(n.Ea.add(2),await Fi(n),n.Ra.set("Unknown"))}function Cs(t){return t.ma||(t.ma=function(n,r,s){const i=_e(n);return i.sa(),new XA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Xo:rb.bind(null,t),t_:sb.bind(null,t),r_:ib.bind(null,t),H_:ob.bind(null,t)}),t.da.push(async e=>{e?(t.ma.B_(),gu(t)?pu(t):t.Ra.set("Unknown")):(await t.ma.stop(),l1(t))})),t.ma}/**
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
 */class mu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new mu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function u1(t,e){if(kn("AsyncQueue",`${e}: ${t}`),As(t))return new Q($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{static emptySet(e){return new cs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||ne.comparator(n.key,r.key):(n,r)=>ne.comparator(n.key,r.key),this.keyedMap=Ks(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Md{constructor(){this.ga=new je(ne.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new ys(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ka(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class cb{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class lb{constructor(){this.queries=xd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=_e(n),i=s.queries;s.queries=xd(),i.forEach((o,c)=>{for(const l of c.Sa)l.onError(r)})})(this,new Q($.ABORTED,"Firestore shutting down"))}}function xd(){return new Fr(t=>Mm(t),ka)}async function _u(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new cb,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=u1(o,`Initialization of query '${Wr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&vu(n)}async function yu(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ub(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&vu(n)}function hb(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function vu(t){t.Ca.forEach(e=>{e.next()})}var ll,Ld;(Ld=ll||(ll={})).Ma="default",Ld.Cache="cache";class Eu{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==ll.Cache}}/**
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
 */class h1{constructor(e){this.key=e}}class f1{constructor(e){this.key=e}}class fb{constructor(e,n){this.query=e,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ve(),this.mutatedKeys=ve(),this.eu=xm(e),this.tu=new cs(this.eu)}get nu(){return this.Ya}ru(e,n){const r=n?n.iu:new Md,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=Da(this.query,p)?p:null,k=!!g&&this.mutatedKeys.has(g.key),D=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;g&&_?g.data.isEqual(_.data)?k!==D&&(r.track({type:3,doc:_}),R=!0):this.su(g,_)||(r.track({type:2,doc:_}),R=!0,(l&&this.eu(_,l)>0||u&&this.eu(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),R=!0):g&&!_&&(r.track({type:1,doc:g}),R=!0,(l||u)&&(c=!0)),R&&(_?(o=o.add(_),i=D?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{tu:o,iu:r,Cs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((f,p)=>function(_,k){const D=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:R})}};return D(_)-D(k)}(f.type,p.type)||this.eu(f.doc,p.doc)),this.ou(r),s=s!=null?s:!1;const c=n&&!s?this._u():[],l=this.Xa.size===0&&this.current&&!s?1:0,u=l!==this.Za;return this.Za=l,o.length!==0||u?{snapshot:new ys(this.query,e.tu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Md,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Ya=this.Ya.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ya=this.Ya.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ve(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const n=[];return e.forEach(r=>{this.Xa.has(r)||n.push(new f1(r))}),this.Xa.forEach(r=>{e.has(r)||n.push(new h1(r))}),n}cu(e){this.Ya=e.Qs,this.Xa=ve();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Tu="SyncEngine";class db{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pb{constructor(e){this.key=e,this.hu=!1}}class gb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new Fr(c=>Mm(c),ka),this.Iu=new Map,this.Eu=new Set,this.du=new je(ne.comparator),this.Au=new Map,this.Ru=new cu,this.Vu={},this.mu=new Map,this.fu=ms.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function mb(t,e,n=!0){const r=_1(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await d1(r,e,n,!0),s}async function _b(t,e){const n=_1(t);await d1(n,e,!0,!1)}async function d1(t,e,n,r){const s=await HA(t.localStore,cn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await yb(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&a1(t.remoteStore,s),c}async function yb(t,e,n,r,s){t.pu=(p,g,_)=>async function(D,R,O,N){let H=R.view.ru(O);H.Cs&&(H=await Rd(D.localStore,R.query,!1).then(({documents:A})=>R.view.ru(A,H)));const z=N&&N.targetChanges.get(R.targetId),te=N&&N.targetMismatches.get(R.targetId)!=null,ae=R.view.applyChanges(H,D.isPrimaryClient,z,te);return Ud(D,R.targetId,ae.au),ae.snapshot}(t,p,g,_);const i=await Rd(t.localStore,e,!0),o=new fb(e,i.Qs),c=o.ru(i.documents),l=Li.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Ud(t,n,u.au);const f=new db(e,n,o);return t.Tu.set(e,f),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function vb(t,e,n){const r=_e(t),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(o=>!ka(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await al(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&fu(r.remoteStore,s.targetId),ul(r,s.targetId)}).catch(Ca)):(ul(r,s.targetId),await al(r.localStore,s.targetId,!0))}async function Eb(t,e){const n=_e(t),r=n.Tu.get(e),s=n.Iu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fu(n.remoteStore,r.targetId))}async function p1(t,e){const n=_e(t);try{const r=await BA(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(Fe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?Fe(o.hu,14607):s.removedDocuments.size>0&&(Fe(o.hu,42227),o.hu=!1))}),await m1(n,r,e)}catch(r){await Ca(r)}}function Fd(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=_e(o);l.onlineState=c;let u=!1;l.queries.forEach((f,p)=>{for(const g of p.Sa)g.va(c)&&(u=!0)}),u&&vu(l)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tb(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new je(ne.comparator);o=o.insert(i,mt.newNoDocument(i,ce.min()));const c=ve().add(i),l=new Ma(ce.min(),new Map,new je(ge),o,c);await p1(r,l),r.du=r.du.remove(i),r.Au.delete(e),wu(r)}else await al(r.localStore,e,!1).then(()=>ul(r,e,n)).catch(Ca)}function ul(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Ru.jr(e).forEach(r=>{t.Ru.containsKey(r)||g1(t,r)})}function g1(t,e){t.Eu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(fu(t.remoteStore,n),t.du=t.du.remove(e),t.Au.delete(n),wu(t))}function Ud(t,e,n){for(const r of n)r instanceof h1?(t.Ru.addReference(r.key,e),wb(t,r)):r instanceof f1?(X(Tu,"Document no longer in limbo: "+r.key),t.Ru.removeReference(r.key,e),t.Ru.containsKey(r.key)||g1(t,r.key)):le(19791,{wu:r})}function wb(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Eu.has(r)||(X(Tu,"New document in limbo: "+n),t.Eu.add(r),wu(t))}function wu(t){for(;t.Eu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new ne(ke.fromString(e)),r=t.fu.next();t.Au.set(r,new pb(n)),t.du=t.du.insert(n,r),a1(t.remoteStore,new Jn(cn(Va(n.path)),r,"TargetPurposeLimboResolution",Sa.ce))}}async function m1(t,e,n){const r=_e(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,l)=>{o.push(r.pu(l,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=uu.As(l.targetId,u);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(l,u){const f=_e(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,g=>L.forEach(g.Es,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>L.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!As(p))throw p;X(hu,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.Ms.get(g),k=_.snapshotVersion,D=_.withLastLimboFreeSnapshotVersion(k);f.Ms=f.Ms.insert(g,D)}}}(r.localStore,i))}async function Ib(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){X(Tu,"User change. New user:",e.toKey());const r=await s1(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(l=>{l.reject(new Q($.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await m1(n,r.Ls)}}function Ab(t,e){const n=_e(t),r=n.Au.get(e);if(r&&r.hu)return ve().add(r.key);{let s=ve();const i=n.Iu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function _1(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=p1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tb.bind(null,e),e.Pu.H_=ub.bind(null,e.eventManager),e.Pu.yu=hb.bind(null,e.eventManager),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=xa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return $A(this.persistence,new LA,e.initialUser,this.serializer)}Cu(e){return new r1(lu.mi,this.serializer)}Du(e){return new zA}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class bb extends ea{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){Fe(this.persistence.referenceDelegate instanceof Zo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wA(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new r1(r=>Zo.mi(r,n),this.serializer)}}class hl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ib.bind(null,this.syncEngine),await ab(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lb}()}createDatastore(e){const n=xa(e.databaseInfo.databaseId),r=function(i){return new JA(i)}(e.databaseInfo);return function(i,o,c,l){return new eb(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new nb(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Fd(this.syncEngine,n,0),function(){return kd.v()?new kd:new GA}())}createSyncEngine(e,n){return function(s,i,o,c,l,u,f){const p=new gb(s,i,o,c,l,u);return f&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=_e(s);X(_s,"RemoteStore shutting down."),i.Ea.add(5),await Fi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}hl.provider={build:()=>new hl};/**
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
 */class Iu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const dr="FirestoreClient";class Cb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Xl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{X(dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(X(dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=u1(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sc(t,e){t.asyncQueue.verifyOperationInProgress(),X(dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await s1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Sb(t);X(dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Od(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Od(e.remoteStore,s)),t._onlineComponents=e}async function Sb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(dr,"Using user provided OfflineComponentProvider");try{await Sc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await Sc(t,new ea)}}else X(dr,"Using default OfflineComponentProvider"),await Sc(t,new bb(void 0));return t._offlineComponents}async function Rb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(dr,"Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(X(dr,"Using default OnlineComponentProvider"),await $d(t,new hl))),t._onlineComponents}async function ta(t){const e=await Rb(t),n=e.eventManager;return n.onListen=mb.bind(null,e.syncEngine),n.onUnlisten=vb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_b.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Eb.bind(null,e.syncEngine),n}function Pb(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Iu({next:g=>{f.Nu(),o.enqueueAndForget(()=>yu(i,p));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new Q($.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new Q($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Eu(Va(c.path),f,{includeMetadataChanges:!0,qa:!0});return _u(i,p)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}function Vb(t,e,n={}){const r=new nr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,u){const f=new Iu({next:g=>{f.Nu(),o.enqueueAndForget(()=>yu(i,p)),g.fromCache&&l.source==="server"?u.reject(new Q($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),p=new Eu(c,f,{includeMetadataChanges:!0,qa:!0});return _u(i,p)}(await ta(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function y1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Bd=new Map;/**
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
 */const v1="firestore.googleapis.com",jd=!0;class Hd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=v1,this.ssl=jd}else this.host=e.host,this.ssl=(n=e.ssl)!=null?n:jd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=n1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<EA)throw new Q($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y1((r=e.experimentalLongPollingOptions)!=null?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $i{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Zw;switch(r.type){case"firstParty":return new rI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bd.get(n);r&&(X("ComponentProvider","Removing Datastore"),Bd.delete(n),r.terminate())}(this),Promise.resolve()}}function kb(t,e,n,r={}){var u;t=bn(t,$i);const s=mr(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&(Ul(`https://${c}`),$l("Firestore",!0)),i.host!==v1&&i.host!==c&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...i,host:c,ssl:s,emulatorOptions:r};if(!Dr(l,o)&&(t._setSettings(l),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=pt.MOCK_USER;else{f=CE(r.mockUserToken,(u=t._app)==null?void 0:u.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new Q($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(g)}t._authCredentials=new eI(new mm(f,p))}}/**
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
 */class gn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gn(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(xi(n,Ke._jsonSchema))return new Ke(e,r||null,new ne(ke.fromString(n.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:Ge("string",Ke._jsonSchemaVersion),referencePath:Ge("string")};class rr extends gn{constructor(e,n,r){super(e,n,Va(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new ne(e))}withConverter(e){return new rr(this.firestore,e,this._path)}}function yS(t,e,...n){if(t=ct(t),Zl("collection","path",e),t instanceof $i){const r=ke.fromString(e,...n);return td(r),new rr(t,null,r)}{if(!(t instanceof Ke||t instanceof rr))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return td(r),new rr(t.firestore,null,r)}}function vS(t,e){if(t=bn(t,$i),Zl("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Q($.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new gn(t,null,function(r){return new Lr(ke.emptyPath(),r)}(e))}function oo(t,e,...n){if(t=ct(t),arguments.length===1&&(e=Xl.newId()),Zl("doc","path",e),t instanceof $i){const r=ke.fromString(e,...n);return ed(r),new Ke(t,null,new ne(r))}{if(!(t instanceof Ke||t instanceof rr))throw new Q($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return ed(r),new Ke(t.firestore,t instanceof rr?t.converter:null,new ne(r))}}/**
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
 */const qd="AsyncQueue";class zd{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new o1(this,"async_queue_retry"),this._c=()=>{const r=Cc();r&&X(qd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=Cc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new nr;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!As(e))throw e;X(qd,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,kn("INTERNAL UNHANDLED ERROR: ",Gd(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=mu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&le(47125,{Pc:Gd(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function Gd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
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
 */function Kd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class bi extends $i{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zd(e),this._firestoreClient=void 0,await e}}}function Db(t,e){const n=typeof t=="object"?t:Hl(),r=typeof t=="string"?t:e||Ko,s=Ea(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ig("firestore");i&&kb(s,...i)}return s}function Au(t){if(t._terminated)throw new Q($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Nb(t),t._firestoreClient}function Nb(t){var r,s,i;const e=t._freezeSettings(),n=function(c,l,u,f){return new wI(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,y1(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,e);t._componentsProvider||((s=e.localCache)==null?void 0:s._offlineComponentProvider)&&((i=e.localCache)==null?void 0:i._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Cb(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lt(lt.fromBase64String(e))}catch(n){throw new Q($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Lt(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(xi(e,Lt._jsonSchema))return Lt.fromBase64String(e.bytes)}}Lt._jsonSchemaVersion="firestore/bytes/1.0",Lt._jsonSchema={type:Ge("string",Lt._jsonSchemaVersion),bytes:Ge("string")};/**
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
 */class E1{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class T1{constructor(e){this._methodName=e}}/**
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
 */class ln{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ln._jsonSchemaVersion}}static fromJSON(e){if(xi(e,ln._jsonSchema))return new ln(e.latitude,e.longitude)}}ln._jsonSchemaVersion="firestore/geoPoint/1.0",ln._jsonSchema={type:Ge("string",ln._jsonSchemaVersion),latitude:Ge("number"),longitude:Ge("number")};/**
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
 */class un{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:un._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(xi(e,un._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new un(e.vectorValues);throw new Q($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}un._jsonSchemaVersion="firestore/vectorValue/1.0",un._jsonSchema={type:Ge("string",un._jsonSchemaVersion),vectorValues:Ge("object")};/**
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
 */const Ob=/^__.*__$/;function w1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:t})}}class bu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new bu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.gc(e),r}yc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return fl(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(w1(this.Ac)&&Ob.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class Mb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||xa(e)}Cc(e,n,r,s=!1){return new bu({Ac:e,methodName:n,Dc:r,path:yt.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xb(t){const e=t._freezeSettings(),n=xa(t._databaseId);return new Mb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Lb(t,e,n,r=!1){return Cu(n,t.Cc(r?4:3,e))}function Cu(t,e){if(I1(t=ct(t)))return Ub("Unsupported field value:",e,t),Fb(t,e);if(t instanceof T1)return function(r,s){if(!w1(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=Cu(c,s.wc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ct(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=xe.fromDate(r);return{timestampValue:il(s.serializer,i)}}if(r instanceof xe){const i=new xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:il(s.serializer,i)}}if(r instanceof ln)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Lt)return{bytesValue:Wm(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Sc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof un)return function(o,c){return{mapValue:{fields:{[bm]:{stringValue:Sm},[Wo]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Sc("VectorValues must only contain numeric values.");return su(c.serializer,u)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${ba(r)}`)}(t,e)}function Fb(t,e){const n={};return vm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=Cu(s,e.mc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function I1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof ln||t instanceof Lt||t instanceof Ke||t instanceof T1||t instanceof un)}function Ub(t,e,n){if(!I1(n)||!_m(n)){const r=ba(n);throw r==="an object"?e.Sc(t+" a custom object"):e.Sc(t+" "+r)}}const $b=new RegExp("[~\\*/\\[\\]]");function Bb(t,e,n){if(e.search($b)>=0)throw fl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new E1(...e.split("."))._internalPath}catch{throw fl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q($.INVALID_ARGUMENT,c+t+l)}/**
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
 */class A1{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new jb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fa("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class jb extends A1{data(){return super.data()}}function Fa(t,e){return typeof e=="string"?Bb(t,e):e instanceof E1?e._internalPath:e._delegate._internalPath}/**
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
 */function b1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Su{}class Ru extends Su{}function ES(t,e,...n){let r=[];e instanceof Su&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Pu).length,c=i.filter(l=>l instanceof Ua).length;if(o>1||o>0&&c>0)throw new Q($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ua extends Ru{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ua(e,n,r)}_apply(e){const n=this._parse(e);return C1(e._query,n),new gn(e.firestore,e.converter,tl(e._query,n))}_parse(e){const n=xb(e.firestore);return function(i,o,c,l,u,f,p){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Q($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Qd(p,f);const k=[];for(const D of p)k.push(Wd(l,i,D));g={arrayValue:{values:k}}}else g=Wd(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Qd(p,f),g=Lb(c,o,p,f==="in"||f==="not-in");return ze.create(u,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function TS(t,e,n){const r=e,s=Fa("where",t);return Ua._create(s,r,n)}class Pu extends Su{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Wt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)C1(o,l),o=tl(o,l)}(e._query,n),new gn(e.firestore,e.converter,tl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Vu extends Ru{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Vu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Q($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ai(i,o)}(e._query,this._field,this._direction);return new gn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Lr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function wS(t,e="asc"){const n=e,r=Fa("orderBy",t);return Vu._create(r,n)}class ku extends Ru{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new ku(e,n,r)}_apply(e){return new gn(e.firestore,e.converter,Jo(e._query,this._limit,this._limitType))}}function IS(t){return uI("limit",t),ku._create("limit",t,"F")}function Wd(t,e,n){if(typeof(n=ct(n))=="string"){if(n==="")throw new Q($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Om(e)&&n.indexOf("/")!==-1)throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!ne.isDocumentKey(r))throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ld(t,new ne(r))}if(n instanceof Ke)return ld(t,n._key);throw new Q($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ba(n)}.`)}function Qd(t,e){if(!Array.isArray(t)||t.length===0)throw new Q($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C1(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Q($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Hb{convertValue(e,n="none"){switch(hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ur(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return bs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[Wo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>He(o.doubleValue));return new un(n)}convertGeoPoint(e){return new ln(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Pa(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ti(e));default:return null}}convertTimestamp(e){const n=lr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Fe(t1(r),9688,{name:e});const s=new wi(r.get(1),r.get(3)),i=new ne(r.popFirst(5));return s.isEqual(n)||kn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}class Qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Vr extends A1{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Vr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Vr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Vr._jsonSchema={type:Ge("string",Vr._jsonSchemaVersion),bundleSource:Ge("string","DocumentSnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class bo extends Vr{data(e={}){return super.data(e)}}class kr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Qs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bo(this._firestore,this._userDataWriter,r.key,r,new Qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new bo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Qs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:qb(c.type),doc:l,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=kr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Xl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:t})}}/**
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
 */function ao(t){t=bn(t,Ke);const e=bn(t.firestore,bi);return Pb(Au(e),t._key).then(n=>S1(e,t,n))}kr._jsonSchemaVersion="firestore/querySnapshot/1.0",kr._jsonSchema={type:Ge("string",kr._jsonSchemaVersion),bundleSource:Ge("string","QuerySnapshot"),bundleName:Ge("string"),bundle:Ge("string")};class Du extends Hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function AS(t){t=bn(t,gn);const e=bn(t.firestore,bi),n=Au(e),r=new Du(e);return b1(t._query),Vb(n,t._query).then(s=>new kr(e,r,t,s))}function bS(t,...e){var l,u,f;t=ct(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Kd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Kd(e[r])){const p=e[r];e[r]=(l=p.next)==null?void 0:l.bind(p),e[r+1]=(u=p.error)==null?void 0:u.bind(p),e[r+2]=(f=p.complete)==null?void 0:f.bind(p)}let i,o,c;if(t instanceof Ke)o=bn(t.firestore,bi),c=Va(t._key.path),i={next:p=>{e[r]&&e[r](S1(o,t,p))},error:e[r+1],complete:e[r+2]};else{const p=bn(t,gn);o=bn(p.firestore,bi),c=p._query;const g=new Du(o);i={next:_=>{e[r]&&e[r](new kr(o,g,p,_))},error:e[r+1],complete:e[r+2]},b1(t._query)}return function(g,_,k,D){const R=new Iu(D),O=new Eu(_,R,k);return g.asyncQueue.enqueueAndForget(async()=>_u(await ta(g),O)),()=>{R.Nu(),g.asyncQueue.enqueueAndForget(async()=>yu(await ta(g),O))}}(Au(o),c,s,i)}function S1(t,e,n){const r=n.docs.get(e._key),s=new Du(t);return new Vr(t,s,e._key,r,new Qs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Is=s})(Ts),Nr(new ar("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new bi(new tI(r.getProvider("auth-internal")),new sI(o,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Q($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(u.options.projectId,f)}(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),sn(Jf,Yf,e),sn(Jf,Yf,"esm2020")})();var zb="firebase",Gb="12.5.0";/**
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
 */sn(zb,Gb,"app");/**
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
 */const Kb="type.googleapis.com/google.protobuf.Int64Value",Wb="type.googleapis.com/google.protobuf.UInt64Value";function R1(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function na(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>na(e));if(typeof t=="function"||typeof t=="object")return R1(t,e=>na(e));throw new Error("Data cannot be encoded in JSON: "+t)}function vs(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Kb:case Wb:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>vs(e)):typeof t=="function"||typeof t=="object"?R1(t,e=>vs(e)):t}/**
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
 */const Jd={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Vt extends pn{constructor(e,n,r){super(`${Nu}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,Vt.prototype)}}function Qb(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function ra(t,e){let n=Qb(t),r=n,s;try{const i=e&&e.error;if(i){const o=i.status;if(typeof o=="string"){if(!Jd[o])return new Vt("internal","internal");n=Jd[o],r=o}const c=i.message;typeof c=="string"&&(r=c),s=i.details,s!==void 0&&(s=vs(s))}}catch{}return n==="ok"?null:new Vt(n,r,s)}/**
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
 */class Jb{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,xt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(!!this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const dl="us-central1",Yb=/^data: (.*?)(?:\n|$)/;function Xb(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Vt("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class Zb{constructor(e,n,r,s,i=dl,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new Jb(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=dl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function eC(t,e,n){const r=mr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Ul(t.emulatorOrigin+"/backends"),$l("Functions",!0))}function tC(t,e,n){const r=s=>rC(t,e,s,n||{});return r.stream=(s,i)=>iC(t,e,s,i),r}function P1(t){return t.emulatorOrigin&&mr(t.emulatorOrigin)?"include":void 0}async function nC(t,e,n,r,s){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:P1(s)})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}async function V1(t,e){const n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function rC(t,e,n,r){const s=t._url(e);return sC(t,s,n,r)}async function sC(t,e,n,r){n=na(n);const s={data:n},i=await V1(t,r),o=r.timeout||7e4,c=Xb(o),l=await Promise.race([nC(e,s,i,t.fetchImpl,t),c.promise,t.cancelAllRequests]);if(c.cancel(),!l)throw new Vt("cancelled","Firebase Functions instance was deleted.");const u=ra(l.status,l.json);if(u)throw u;if(!l.json)throw new Vt("internal","Response is not valid JSON object.");let f=l.json.data;if(typeof f>"u"&&(f=l.json.result),typeof f>"u")throw new Vt("internal","Response is missing data field.");return{data:vs(f)}}function iC(t,e,n,r){const s=t._url(e);return oC(t,s,n,r||{})}async function oC(t,e,n,r){var g;n=na(n);const s={data:n},i=await V1(t,r);i["Content-Type"]="application/json",i.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(s),headers:i,signal:r==null?void 0:r.signal,credentials:P1(t)})}catch(_){if(_ instanceof Error&&_.name==="AbortError"){const D=new Vt("cancelled","Request was cancelled.");return{data:Promise.reject(D),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(D)}}}}}}const k=ra(0,null);return{data:Promise.reject(k),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(k)}}}}}}let c,l;const u=new Promise((_,k)=>{c=_,l=k});(g=r==null?void 0:r.signal)==null||g.addEventListener("abort",()=>{const _=new Vt("cancelled","Request was cancelled.");l(_)});const f=o.body.getReader(),p=aC(f,c,l,r==null?void 0:r.signal);return{stream:{[Symbol.asyncIterator](){const _=p.getReader();return{async next(){const{value:k,done:D}=await _.read();return{value:k,done:D}},async return(){return await _.cancel(),{done:!0,value:void 0}}}}},data:u}}function aC(t,e,n,r){const s=(o,c)=>{const l=o.match(Yb);if(!l)return;const u=l[1];try{const f=JSON.parse(u);if("result"in f){e(vs(f.result));return}if("message"in f){c.enqueue(vs(f.message));return}if("error"in f){const p=ra(0,f);c.error(p),n(p);return}}catch(f){if(f instanceof Vt){c.error(f),n(f);return}}},i=new TextDecoder;return new ReadableStream({start(o){let c="";return l();async function l(){if(r!=null&&r.aborted){const u=new Vt("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{const{value:u,done:f}=await t.read();if(f){c.trim()&&s(c.trim(),o),o.close();return}if(r!=null&&r.aborted){const g=new Vt("cancelled","Request was cancelled");o.error(g),n(g),await t.cancel();return}c+=i.decode(u,{stream:!0});const p=c.split(`
`);c=p.pop()||"";for(const g of p)g.trim()&&s(g.trim(),o);return l()}catch(u){const f=u instanceof Vt?u:ra(0,null);o.error(f),n(f)}}},cancel(){return t.cancel()}})}const Yd="@firebase/functions",Xd="0.13.1";/**
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
 */const cC="auth-internal",lC="app-check-internal",uC="messaging-internal";function hC(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(cC),o=n.getProvider(uC),c=n.getProvider(lC);return new Zb(s,i,o,c,r)};Nr(new ar(Nu,e,"PUBLIC").setMultipleInstances(!0)),sn(Yd,Xd,t),sn(Yd,Xd,"esm2020")}/**
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
 */function fC(t=Hl(),e=dl){const r=Ea(ct(t),Nu).getImmediate({identifier:e}),s=Ig("functions");return s&&dC(r,...s),r}function dC(t,e,n){eC(ct(t),e,n)}function CS(t,e,n){return tC(ct(t),e,n)}hC();const pC={apiKey:"AIzaSyDl6HjloKSeSo_mfsYSxVbGibCHaC8EJdk",authDomain:"zoskycube-bossbattle.firebaseapp.com",projectId:"zoskycube-bossbattle",storageBucket:"zoskycube-bossbattle.firebasestorage.app",messagingSenderId:"592683947591",appId:"1:592683947591:web:06c2d76ececacaa845c362"},Ou=Rg(pC),k1=Yw(Ou),co=Db(Ou),SS=fC(Ou,"us-central1"),Es=At(null),pr=At(null),pl=At(!0),Mu=At(""),gC=Ne(()=>!!Es.value),D1=Ne(()=>{var t;return!!((t=pr.value)!=null&&t.steam)}),N1=Ne(()=>{var t;return!!((t=pr.value)!=null&&t.discord)}),O1=Ne(()=>{var t;return!!((t=pr.value)!=null&&t.twitch)}),mC=Ne(()=>D1.value&&N1.value&&O1.value),M1=async t=>{try{console.log("\u{1F525} useAuth: Loading user profile for UID:",t),localStorage.getItem("linkUuid")||localStorage.setItem("linkUuid",t);const e=oo(co,"account_links",t),n=await ao(e);if(!n.exists()){console.log("\u{1F525} useAuth: No account links found in Firestore"),pr.value=null;return}const r=n.data();console.log("\u{1F525} useAuth: Account links loaded:",r);const s={};if(r.steamId&&r.steamId!=="not-yet"){const i=oo(co,"steam_profiles",r.steamId),o=await ao(i);o.exists()&&(s.steam=o.data())}if(r.discordId&&r.discordId!=="not-yet"){const i=oo(co,"discord_profiles",r.discordId),o=await ao(i);o.exists()&&(s.discord=o.data())}if(r.twitchId&&r.twitchId!=="not-yet"){const i=oo(co,"twitch_profiles",r.twitchId),o=await ao(i);o.exists()&&(s.twitch=o.data())}pr.value=s,console.log("\u{1F525} useAuth: User profile built:",s)}catch(e){throw console.error("\u{1F525} useAuth: Error loading user profile:",e),Mu.value="Failed to load profile data",e}},_C=async()=>{if(!Es.value){console.warn("\u{1F525} useAuth: Cannot refresh profile - no user authenticated");return}await M1(Es.value.uid)},yC=async()=>{try{await $T(k1),Es.value=null,pr.value=null,console.log("\u{1F525} useAuth: User signed out successfully")}catch(t){throw console.error("\u{1F525} useAuth: Sign out error:",t),Mu.value="Failed to sign out",t}};let gl=!1;const vC=()=>{if(gl){console.warn("\u{1F525} useAuth: Auth state already initialized");return}gl=!0,console.log("\u{1F525} useAuth: Initializing auth state listener"),UT(k1,async t=>{if(pl.value=!0,Es.value=t,t){console.log("\u{1F525} useAuth: User authenticated:",t.uid);try{await M1(t.uid)}catch(e){console.error("\u{1F525} useAuth: Failed to load profile on auth state change:",e)}}else console.log("\u{1F525} useAuth: No user authenticated"),pr.value=null;pl.value=!1})};function EC(){return gl||vC(),{user:Es,userProfile:pr,loading:pl,error:Mu,isAuthenticated:gC,steamConnected:D1,discordConnected:N1,twitchConnected:O1,allConnected:mC,refreshProfile:_C,signOut:yC}}const TC={class:"custom-cyan-shadow"},wC={href:"https://twitch.tv/zoskyCube",title:"ttv:zoskyCube"},IC=["src","alt"],AC={__name:"HeaderBar",setup(t){const e=yg();Fv();const{user:n,userProfile:r}=EC(),s=At(0);Op(()=>{const u=localStorage.getItem("preferredAvatarIndex");u&&(s.value=parseInt(u))});const i=Ne(()=>{var p,g,_,k,D,R,O,N;if(!r.value)return null;const f=["twitch","steam","discord"][s.value%3];return f==="twitch"&&((p=r.value.twitch)==null?void 0:p.profileImage)?r.value.twitch.profileImage:f==="steam"&&((g=r.value.steam)==null?void 0:g.avatar)?r.value.steam.avatar:f==="discord"&&((_=r.value.discord)==null?void 0:_.avatar)&&((k=r.value.discord)==null?void 0:k.id)?`https://cdn.discordapp.com/avatars/${r.value.discord.id}/${r.value.discord.avatar}.png`:((D=r.value.twitch)==null?void 0:D.profileImage)||((R=r.value.steam)==null?void 0:R.avatar)||(((O=r.value.discord)==null?void 0:O.avatar)&&((N=r.value.discord)==null?void 0:N.id)?`https://cdn.discordapp.com/avatars/${r.value.discord.id}/${r.value.discord.avatar}.png`:null)});function o(){e.push("/stats")}function c(){var u,f;n.value&&((f=(u=r.value)==null?void 0:u.twitch)==null?void 0:f.username)&&e.push(`/stats/user?username=${r.value.twitch.username}`)}function l(u){u.preventDefault(),s.value=(s.value+1)%3,localStorage.setItem("preferredAvatarIndex",s.value.toString())}return(u,f)=>{var D;const p=pE,g=hE,_=Kv,k=Hv;return $t(),or("nav",TC,[f[9]||(f[9]=nn("a",{href:"./"},[nn("img",{id:"logo",src:gE,alt:"zoskyCube Logo"})],-1)),nn("a",wC,[Pe(p)]),Pe(g),Pe(Te(rE),{class:It([{active:u.$route.path=="/collection"},"cursor-pointer"]),onClick:f[0]||(f[0]=R=>u.$router.push("./collection")),title:"Game Collection"},null,8,["class"]),Pe(Te(nE),{class:It([{active:u.$route.path=="/"},"cursor-pointer"]),onClick:f[1]||(f[1]=R=>u.$router.push("/"))},null,8,["class"]),Pe(Te(tE),{class:It([u.$route.path=="/counter"?"active":"hidden","cursor-pointer"]),onClick:f[2]||(f[2]=R=>u.$router.push("/counter")),title:"Add Death"},null,8,["class"]),Pe(Te(sE),{class:It([{active:u.$route.path=="/winning"},"cursor-pointer"]),onClick:f[3]||(f[3]=R=>u.$router.push("/winning")),title:"Completed Games"},null,8,["class"]),Pe(Te(Zv),{class:It([{active:u.$route.path.includes("/help/")},"cursor-pointer"]),onClick:f[4]||(f[4]=R=>u.$router.push("/help/")),title:"Help Center"},null,8,["class"]),Pe(Te(Yv),{class:It([{active:u.$route.path==="/stats"&&!u.$route.query.username},"cursor-pointer"]),onClick:o,title:"Leaderboard / Table of Contents"},null,8,["class"]),u.$route.path=="/auth"||!Te(n)?($t(),ga(Te(Jv),{key:0,class:It([{active:u.$route.path=="/auth"},"cursor-pointer"]),onClick:f[5]||(f[5]=R=>u.$router.push("/auth")),title:"Connect Gaming Accounts"},null,8,["class"])):Fh("",!0),nn("img",{src:mE,alt:"PixelPower Art Collection",title:"PixelPower Art Collection",class:It([{"bg-purple-400/40":u.$route.path=="/pixelPower"},"inline h-14 -mb-4 -mt-3"]),onClick:f[6]||(f[6]=R=>u.$router.push("/pixelPower"))},null,2),Pe(_,{class:It([{"animate-pulse":u.$route.path=="/halo"},"cursor-pointer h-10 w-auto -mx-1"]),title:"Halo campaign Stats",onClick:f[7]||(f[7]=R=>u.$router.push("/halo"))},null,8,["class"]),Pe(k,{class:It([{"animate-pulse":u.$route.path=="/halo"},"cursor-pointer w-10 h-auto -mx-2"]),title:"arkTribe timeline",onClick:f[8]||(f[8]=R=>u.$router.push("/ark"))},null,8,["class"]),Pe(Te(Xv)),Te(n)&&Te(r)&&Te(i)?($t(),or("div",{key:1,class:It(["user-avatar-container",{active:u.$route.path.includes("/stats/user")}]),onClick:c,onMousedown:C0(l,["middle","prevent"]),title:"My Personal Stats (Middle-click to cycle avatar)"},[nn("img",{src:Te(i),alt:`${((D=Te(r).twitch)==null?void 0:D.username)||"User"} avatar`,class:"user-avatar"},null,8,IC)],34)):Fh("",!0)])}}},bC=Vi(AC,[["__scopeId","data-v-b281b56a"]]),CC={},SC={class:"app-container"};function RC(t,e){const n=bC,r=ly("router-view");return $t(),or("div",SC,[Pe(n),Pe(r)])}const PC=Vi(CC,[["render",RC]]),qr=async t=>{const r=(await(await fetch(t)).text()).split(`
`).filter(c=>c.trim()!==""),s=c=>{const l=[];let u="",f=!1;for(let p=0;p<c.length;p++){const g=c[p],_=c[p+1];g==='"'?f&&_==='"'?(u+='"',p++):f=!f:g===","&&!f?(l.push(u),u=""):u+=g}return l.push(u),l},i=s(r[0]);return i.indexOf("private"),r.slice(1).map((c,l)=>{const u=s(c),f={};return i.forEach((p,g)=>{const _=u[g]||"";if(p==="private"){!_||_.trim(),_&&_.toLowerCase();const k=_&&_.toLowerCase()!=="false"&&_.trim()!=="";f[p]=k}else f[p]=!isNaN(Number(_))&&_.trim()!==""?Number(_):_}),f})},VC=t=>{if(!t||t===""||t==="undefined")return null;const e=new Date(t);return isNaN(e.getTime())?null:e.getTime()/1e3},kC=t=>{var n;const e=(n=t==null?void 0:t.steamID)!=null?n:t==null?void 0:t.steamId;return!e||e===""||e==="undefined"?null:e},DC=t=>{const e=t==null?void 0:t.player;return!e||e===""||e==="undefined"?1:Number(e)||1},NC=t=>{var r;const e=(r=t==null?void 0:t.death)!=null?r:t==null?void 0:t.deaths,n=t==null?void 0:t.lives;return e!=null&&e!==""?Number(e)||0:n!=null&&n!==""&&Number(n)||0},OC=()=>{const t=At([]),e=At(!0),n=At(null),r=At({}),s=At({}),i=At({}),o=At([]),c=At([]),l=At([]),u=Ne(()=>{const R={};return t.value.forEach(O=>{const N=O.steamId,H=O.player;N&&(R[N]||(R[N]={}),R[N][H]||(R[N][H]=[]),R[N][H].push(O))}),R}),f=Ne(()=>{const R={};return t.value.forEach(O=>{const N=O.steamId;N&&!R[N]&&(R[N]=[]),N&&R[N].push(O)}),R}),p=Ne(()=>{const R=[];return Object.keys(u.value).forEach(O=>{const N=u.value[O],H=Object.keys(N).map(z=>{var te;return{player:Number(z),playerName:`Player ${z}`,count:N[z].length,entries:N[z],lastDeath:((te=N[z].at(-1))==null?void 0:te.lives)||0}}).sort((z,te)=>z.player-te.player);R.push({id:O,name:r.value[O]||"UnknownId:"+O,players:H,totalCount:H.reduce((z,te)=>z+te.count,0)})}),R.sort((O,N)=>O.name.localeCompare(N.name))}),g=Ne(()=>{const R=[];return Object.keys(u.value).forEach(O=>{const N=u.value[O];Object.keys(N).forEach(H=>{R.push({id:O,player:Number(H),name:r.value[O]||"UnknownId:"+O,count:N[H].length,playerName:`Player ${H}`})})}),R.sort((O,N)=>O.name.localeCompare(N.name)||O.player-N.player)}),_=Ne(()=>o.value.reduce((R,O)=>(O.steamId&&(R[O.steamId]||(R[O.steamId]=[]),R[O.steamId].push(O)),R),{})),k=Ne(()=>Object.keys(f.value).map(R=>({id:R,name:r.value[R]||"UnknownId:"+R,count:f.value[R].length})));async function D(R=!1){if(!(!R&&(e.value||t.value.length>0))){e.value=!0;try{const O="1nOSih6IJEXlBFEtwExaMBQY9ONb1OZmrzzWapRq9M7s",N=I=>`https://docs.google.com/spreadsheets/d/${O}/gviz/tq?tqx=out:csv&sheet=${I}`,H=await qr(N("history")),z=await qr(N("ytVods")),te=await qr(N("winning")),ae=await qr(N("steamXref")),A=await qr(N("invested")),v=await qr(N("arkTribe"));t.value=H.map(I=>{var Le;const b=(Le=I==null?void 0:I.timestamp)!=null?Le:I==null?void 0:I.Timestamp,C=VC(b),E=kC(I),$e=DC(I),nt=NC(I);return C!==null&&E!==null?{...I,time:C,steamId:E,player:$e,lives:nt}:null}).filter(I=>I!==null).sort((I,b)=>I.time-b.time),o.value=z.map(I=>({...I,game:I.name})),c.value=te;const T=I=>ae.reduce((b,C)=>(b[C.steamId]=C[I],b),{});r.value=T("name"),s.value=T("color"),i.value=A,l.value=v}catch(O){n.value=O.message}finally{e.value=!1}}}return{rawData:t,steamNames:r,steamColors:s,steamLibrary:i,youtubeVods:o,winningGames:c,youtubeVodsBySteamId:_,isLoading:e,error:n,groupedBySteamId:f,groupedBySteamIdAndPlayer:u,steamIdStats:k,steamIdPlayerStats:g,gameStats:p,arkTribe:l,fetchData:D}},MC="/zoskyCube/assets/Carbonemys.8b490c4a.webp",xC=Object.freeze(Object.defineProperty({__proto__:null,default:MC},Symbol.toStringTag,{value:"Module"})),LC="/zoskyCube/assets/Dilophosaur.380d56a1.webp",FC=Object.freeze(Object.defineProperty({__proto__:null,default:LC},Symbol.toStringTag,{value:"Module"})),UC="/zoskyCube/assets/Dodo.66335a56.webp",$C=Object.freeze(Object.defineProperty({__proto__:null,default:UC},Symbol.toStringTag,{value:"Module"})),BC="/zoskyCube/assets/Lystrosaurus.3422cafc.webp",jC=Object.freeze(Object.defineProperty({__proto__:null,default:BC},Symbol.toStringTag,{value:"Module"})),HC="/zoskyCube/assets/Moschops.a3ae5243.webp",qC=Object.freeze(Object.defineProperty({__proto__:null,default:HC},Symbol.toStringTag,{value:"Module"})),zC="/zoskyCube/assets/Parasaur.8653d907.webp",GC=Object.freeze(Object.defineProperty({__proto__:null,default:zC},Symbol.toStringTag,{value:"Module"})),KC="/zoskyCube/assets/Pteranodon.2e1c91a8.webp",WC=Object.freeze(Object.defineProperty({__proto__:null,default:KC},Symbol.toStringTag,{value:"Module"})),QC="/zoskyCube/assets/Triceratops.71949641.webp",JC=Object.freeze(Object.defineProperty({__proto__:null,default:QC},Symbol.toStringTag,{value:"Module"})),Zd=Object.assign({"../assets/ark/Carbonemys.webp":xC,"../assets/ark/Dilophosaur.webp":FC,"../assets/ark/Dodo.webp":$C,"../assets/ark/Lystrosaurus.webp":jC,"../assets/ark/Moschops.webp":qC,"../assets/ark/Parasaur.webp":GC,"../assets/ark/Pteranodon.webp":WC,"../assets/ark/Triceratops.webp":JC}),ml={};for(const t in Zd){const e=t.split("/").pop().replace(".webp","");ml[e]=Zd[t].default}const YC={install(t){t.config.globalProperties.$arkDinos=ml,t.provide("arkDinos",ml)}};const XC=Uv({history:hv()}),$a=V0(PC),x1=OC();$a.provide("gameStore",x1);$a.use(YC);x1.fetchData(!0);$a.use(XC);$a.mount("#app");export{Pl as $,UT as A,rE as B,aS as C,lS as D,Jv as E,En as F,cS as G,hS as H,dS as I,oS as J,iS as K,eE as L,uS as M,gS as N,sS as O,k1 as P,mS as Q,oo as R,nE as S,iE as T,co as U,ao as V,CS as W,SS as X,oE as Y,nS as Z,Vi as _,or as a,pS as a0,Kv as a1,ly as a2,W_ as a3,tg as a4,Mp as a5,mE as a6,yS as a7,ES as a8,IS as a9,wS as aa,AS as ab,TS as ac,EC as ad,vS as ae,rS as af,Dl as ag,F_ as ah,sg as ai,r0 as aj,Ae as ak,Rl as al,bS as am,nn as b,Ne as c,zy as d,Pe as e,Fh as f,ga as g,fS as h,Tl as i,At as j,Op as k,sy as l,Ut as m,It as n,$t as o,ZC as p,vt as q,eS as r,C0 as s,uo as t,Te as u,tS as v,fo as w,yg as x,Hv as y,Fv as z};
