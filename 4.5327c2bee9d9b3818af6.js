(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"nC/S":function(t,e,n){"use strict";n.r(e),n.d(e,"PaisesModule",function(){return $t});var i=n("ofXK"),s=n("tyNb"),r=n("fXoL"),o=n("Cfvw"),a=n("HDdC"),l=n("DH7j"),u=n("lJxs"),h=n("XoHu");function c(t,e){return new a.a(n=>{const i=t.length;if(0===i)return void n.complete();const s=new Array(i);let r=0,a=0;for(let l=0;l<i;l++){const u=Object(o.a)(t[l]);let h=!1;n.add(u.subscribe({next:t=>{h||(h=!0,a++),s[l]=t},error:t=>n.error(t),complete:()=>{r++,r!==i&&h||(a===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=s[n],t),{}):s),n.complete())}}))}})}class d{}const p=new r.r("NgValueAccessor"),g={provide:p,useExisting:Object(r.T)(()=>f),multi:!0},_=new r.r("CompositionEventMode");let f=(()=>{class t{constructor(t,e,n){this._renderer=t,this._elementRef=e,this._compositionMode=n,this.onChange=t=>{},this.onTouched=()=>{},this._composing=!1,null==this._compositionMode&&(this._compositionMode=!function(){const t=Object(i.q)()?Object(i.q)().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}())}writeValue(t){this._renderer.setProperty(this._elementRef.nativeElement,"value",null==t?"":t)}registerOnChange(t){this.onChange=t}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.E),r.Jb(r.l),r.Jb(_,8))},t.\u0275dir=r.Eb({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,e){1&t&&r.Sb("input",function(t){return e._handleInput(t.target.value)})("blur",function(){return e.onTouched()})("compositionstart",function(){return e._compositionStart()})("compositionend",function(t){return e._compositionEnd(t.target.value)})},features:[r.yb([g])]}),t})();function m(t){return null==t||0===t.length}function b(t){return null!=t&&"number"==typeof t.length}const y=new r.r("NgValidators"),v=new r.r("NgAsyncValidators"),C=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;class V{static min(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}(t)}static max(t){return function(t){return e=>{if(m(e.value)||m(t))return null;const n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}(t)}static required(t){return function(t){return m(t.value)?{required:!0}:null}(t)}static requiredTrue(t){return function(t){return!0===t.value?null:{required:!0}}(t)}static email(t){return function(t){return m(t.value)||C.test(t.value)?null:{email:!0}}(t)}static minLength(t){return function(t){return e=>m(e.value)||!b(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static maxLength(t){return function(t){return e=>b(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}(t)}static pattern(t){return function(t){if(!t)return O;let e,n;return"string"==typeof t?(n="","^"!==t.charAt(0)&&(n+="^"),n+=t,"$"!==t.charAt(t.length-1)&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),t=>{if(m(t.value))return null;const i=t.value;return e.test(i)?null:{pattern:{requiredPattern:n,actualValue:i}}}}(t)}static nullValidator(t){return null}static compose(t){return k(t)}static composeAsync(t){return D(t)}}function O(t){return null}function A(t){return null!=t}function w(t){const e=Object(r.qb)(t)?Object(o.a)(t):t;return Object(r.pb)(e),e}function E(t){let e={};return t.forEach(t=>{e=null!=t?Object.assign(Object.assign({},e),t):e}),0===Object.keys(e).length?null:e}function S(t,e){return e.map(e=>e(t))}function M(t){return t.map(t=>function(t){return!t.validate}(t)?t:e=>t.validate(e))}function k(t){if(!t)return null;const e=t.filter(A);return 0==e.length?null:function(t){return E(S(t,e))}}function P(t){return null!=t?k(M(t)):null}function D(t){if(!t)return null;const e=t.filter(A);return 0==e.length?null:function(t){return function(...t){if(1===t.length){const e=t[0];if(Object(l.a)(e))return c(e,null);if(Object(h.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return c(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return c(t=1===t.length&&Object(l.a)(t[0])?t[0]:t,null).pipe(Object(u.a)(t=>e(...t)))}return c(t,null)}(S(t,e).map(w)).pipe(Object(u.a)(E))}}function j(t){return null!=t?D(M(t)):null}function F(t,e){return null===t?[e]:Array.isArray(t)?[...t,e]:[t,e]}function T(t){return t._rawValidators}function x(t){return t._rawAsyncValidators}let L=(()=>{class t{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=P(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=j(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t){this.control&&this.control.reset(t)}hasError(t,e){return!!this.control&&this.control.hasError(t,e)}getError(t,e){return this.control?this.control.getError(t,e):null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t}),t})(),U=(()=>{class t extends L{get formDirective(){return null}get path(){return null}}return t.\u0275fac=function(e){return N(e||t)},t.\u0275dir=r.Eb({type:t,features:[r.wb]}),t})();const N=r.Nb(U);class I extends L{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}}class J{constructor(t){this._cd=t}is(t){var e,n;return!!(null===(n=null===(e=this._cd)||void 0===e?void 0:e.control)||void 0===n?void 0:n[t])}}let $=(()=>{class t extends J{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(I,2))},t.\u0275dir=r.Eb({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.wb]}),t})(),z=(()=>{class t extends J{constructor(t){super(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(U,10))},t.\u0275dir=r.Eb({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:14,hostBindings:function(t,e){2&t&&r.Bb("ng-untouched",e.is("untouched"))("ng-touched",e.is("touched"))("ng-pristine",e.is("pristine"))("ng-dirty",e.is("dirty"))("ng-valid",e.is("valid"))("ng-invalid",e.is("invalid"))("ng-pending",e.is("pending"))},features:[r.wb]}),t})();function R(t,e){B(t,e,!0),e.valueAccessor.writeValue(t.value),function(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,"change"===t.updateOn&&q(t,e)})}(t,e),function(t,e){const n=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}(t,e),function(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,"blur"===t.updateOn&&t._pendingChange&&q(t,e),"submit"!==t.updateOn&&t.markAsTouched()})}(t,e),function(t,e){if(e.valueAccessor.setDisabledState){const n=t=>{e.valueAccessor.setDisabledState(t)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}(t,e)}function W(t,e,n=!0){const i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),X(t,e,!0),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function G(t,e){t.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function B(t,e,n){const i=T(t);null!==e.validator?t.setValidators(F(i,e.validator)):"function"==typeof i&&t.setValidators([i]);const s=x(t);if(null!==e.asyncValidator?t.setAsyncValidators(F(s,e.asyncValidator)):"function"==typeof s&&t.setAsyncValidators([s]),n){const n=()=>t.updateValueAndValidity();G(e._rawValidators,n),G(e._rawAsyncValidators,n)}}function X(t,e,n){let i=!1;if(null!==t){if(null!==e.validator){const n=T(t);if(Array.isArray(n)&&n.length>0){const s=n.filter(t=>t!==e.validator);s.length!==n.length&&(i=!0,t.setValidators(s))}}if(null!==e.asyncValidator){const n=x(t);if(Array.isArray(n)&&n.length>0){const s=n.filter(t=>t!==e.asyncValidator);s.length!==n.length&&(i=!0,t.setAsyncValidators(s))}}}if(n){const t=()=>{};G(e._rawValidators,t),G(e._rawAsyncValidators,t)}return i}function q(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function H(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const Z="VALID",K="INVALID",Q="PENDING",Y="DISABLED";function tt(t){return(st(t)?t.validators:t)||null}function et(t){return Array.isArray(t)?P(t):t||null}function nt(t,e){return(st(e)?e.asyncValidators:t)||null}function it(t){return Array.isArray(t)?j(t):t||null}function st(t){return null!=t&&!Array.isArray(t)&&"object"==typeof t}class rt{constructor(t,e){this._hasOwnPendingAsyncValidator=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._rawValidators=t,this._rawAsyncValidators=e,this._composedValidatorFn=et(this._rawValidators),this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===Z}get invalid(){return this.status===K}get pending(){return this.status==Q}get disabled(){return this.status===Y}get enabled(){return this.status!==Y}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._rawValidators=t,this._composedValidatorFn=et(t)}setAsyncValidators(t){this._rawAsyncValidators=t,this._composedAsyncValidatorFn=it(t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(t=>{t.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(t=>{t.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=Q,!1!==t.emitEvent&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Y,this.errors=null,this._forEachChild(e=>{e.disable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this._updateValue(),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!0))}enable(t={}){const e=this._parentMarkedDirty(t.onlySelf);this.status=Z,this._forEachChild(e=>{e.enable(Object.assign(Object.assign({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Object.assign(Object.assign({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),this.status!==Z&&this.status!==Q||this._runAsyncValidator(t.emitEvent)),!1!==t.emitEvent&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Y:Z}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=Q,this._hasOwnPendingAsyncValidator=!0;const e=w(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(e=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(e,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(!1!==e.emitEvent)}get(t){return function(t,e,n){if(null==e)return null;if(Array.isArray(e)||(e=e.split(".")),Array.isArray(e)&&0===e.length)return null;let i=t;return e.forEach(t=>{i=i instanceof at?i.controls.hasOwnProperty(t)?i.controls[t]:null:i instanceof lt&&i.at(t)||null}),i}(this,t)}getError(t,e){const n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new r.n,this.statusChanges=new r.n}_calculateStatus(){return this._allControlsDisabled()?Y:this.errors?K:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Q)?Q:this._anyControlsHaveStatus(K)?K:Z}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_isBoxedValue(t){return"object"==typeof t&&null!==t&&2===Object.keys(t).length&&"value"in t&&"disabled"in t}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){st(t)&&null!=t.updateOn&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!(!this._parent||!this._parent.dirty)&&!this._parent._anyControlsDirty()}}class ot extends rt{constructor(t=null,e,n){super(tt(e),nt(n,e)),this._onChange=[],this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&!1!==e.emitModelToViewChange&&this._onChange.forEach(t=>t(this.value,!1!==e.emitViewToModelChange)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=null,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){H(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){H(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return!("submit"!==this.updateOn||(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),!this._pendingChange)||(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),0))}_applyFormState(t){this._isBoxedValue(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}}class at extends rt{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e){this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}removeControl(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity(),this._onCollectionChange()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity(),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){this._checkAllValuesPresent(t),Object.keys(t).forEach(n=>{this._throwIfControlMissing(n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(Object.keys(t).forEach(n=>{this.controls[n]&&this.controls[n].patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e instanceof ot?e.value:e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(t,e)=>!!e._syncPendingControls()||t);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!Object.keys(this.controls).length)throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.controls[t])throw new Error(`Cannot find form control with name: ${t}.`)}_forEachChild(t){Object.keys(this.controls).forEach(e=>{const n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(const e of Object.keys(this.controls)){const n=this.controls[e];if(this.contains(e)&&t(n))return!0}return!1}_reduceValue(){return this._reduceChildren({},(t,e,n)=>((e.enabled||this.disabled)&&(t[n]=e.value),t))}_reduceChildren(t,e){let n=t;return this._forEachChild((t,i)=>{n=e(n,t,i)}),n}_allControlsDisabled(){for(const t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control with name: '${n}'.`)})}}class lt extends rt{constructor(t,e,n){super(tt(e),nt(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!n})}at(t){return this.controls[t]}push(t){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity(),this._onCollectionChange()}insert(t,e){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity()}removeAt(t){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity()}setControl(t,e){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),e&&(this.controls.splice(t,0,e),this._registerControl(e)),this.updateValueAndValidity(),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){this._checkAllValuesPresent(t),t.forEach((t,n)=>{this._throwIfControlMissing(n),this.at(n).setValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){null!=t&&(t.forEach((t,n)=>{this.at(n)&&this.at(n).patchValue(t,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,i)=>{n.reset(t[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t instanceof ot?t.value:t.getRawValue())}clear(){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity())}_syncPendingControls(){let t=this.controls.reduce((t,e)=>!!e._syncPendingControls()||t,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_throwIfControlMissing(t){if(!this.controls.length)throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");if(!this.at(t))throw new Error(`Cannot find form control at index ${t}`)}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_checkAllValuesPresent(t){this._forEachChild((e,n)=>{if(void 0===t[n])throw new Error(`Must supply a value for form control at index: ${n}.`)})}_allControlsDisabled(){for(const t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}}let ut=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=r.Eb({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]}),t})(),ht=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({}),t})();const ct=new r.r("NgModelWithFormControlWarning"),dt={provide:U,useExisting:Object(r.T)(()=>pt)};let pt=(()=>{class t extends U{constructor(t,e){super(),this.validators=t,this.asyncValidators=e,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new r.n,this._setValidators(t),this._setAsyncValidators(e)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(X(this.form,this,!1),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){const e=this.form.get(t.path);return R(e,t),e.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),e}getControl(t){return this.form.get(t.path)}removeControl(t){W(t.control||null,t,!1),H(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,e){this.form.get(t.path).setValue(e)}onSubmit(t){return this.submitted=!0,e=this.directives,this.form._syncPendingControls(),e.forEach(t=>{const e=t.control;"submit"===e.updateOn&&e._pendingChange&&(t.viewToModelUpdate(e._pendingValue),e._pendingChange=!1)}),this.ngSubmit.emit(t),!1;var e}onReset(){this.resetForm()}resetForm(t){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{const e=t.control,n=this.form.get(t.path);e!==n&&(W(e||null,t),n instanceof ot&&(R(n,t),t.control=n))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){const e=this.form.get(t.path);(function(t,e){B(t,e,!1)})(e,t),e.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){const e=this.form.get(t.path);e&&function(t,e){return X(t,e,!1)}(e,t)&&e.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){B(this.form,this,!1),this._oldForm&&X(this._oldForm,this,!1)}_checkFormPresent(){}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(y,10),r.Jb(v,10))},t.\u0275dir=r.Eb({type:t,selectors:[["","formGroup",""]],hostBindings:function(t,e){1&t&&r.Sb("submit",function(t){return e.onSubmit(t)})("reset",function(){return e.onReset()})},inputs:{form:["formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[r.yb([dt]),r.wb,r.xb]}),t})();const gt={provide:I,useExisting:Object(r.T)(()=>_t)};let _t=(()=>{class t extends I{constructor(t,e,n,i,s){super(),this._ngModelWarningConfig=s,this._added=!1,this.update=new r.n,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(e),this._setAsyncValidators(n),this.valueAccessor=function(t,e){if(!e)return null;let n,i,s;return Array.isArray(e),e.forEach(t=>{t.constructor===f?n=t:Object.getPrototypeOf(t.constructor)===d?i=t:s=t}),s||i||n||null}(0,i)}set isDisabled(t){}ngOnChanges(t){this._added||this._setUpControl(),function(t,e){if(!t.hasOwnProperty("model"))return!1;const n=t.model;return!!n.isFirstChange()||!Object.is(e,n.currentValue)}(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return t=null==this.name?this.name:this.name.toString(),[...this._parent.path,t];var t}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this.control.disabled&&this.valueAccessor.setDisabledState&&this.valueAccessor.setDisabledState(!0),this._added=!0}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(U,13),r.Jb(y,10),r.Jb(v,10),r.Jb(p,10),r.Jb(ct,8))},t.\u0275dir=r.Eb({type:t,selectors:[["","formControlName",""]],inputs:{isDisabled:["disabled","isDisabled"],name:["formControlName","name"],model:["ngModel","model"]},outputs:{update:"ngModelChange"},features:[r.yb([gt]),r.wb,r.xb]}),t._ngModelWarningSentOnce=!1,t})();const ft={provide:p,useExisting:Object(r.T)(()=>bt),multi:!0};function mt(t,e){return null==t?`${e}`:(e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let bt=(()=>{class t extends d{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;const e=this._getOptionId(t);null==e&&this._renderer.setProperty(this._elementRef.nativeElement,"selectedIndex",-1);const n=mt(e,t);this._renderer.setProperty(this._elementRef.nativeElement,"value",n)}registerOnChange(t){this.onChange=e=>{this.value=this._getOptionValue(e),t(this.value)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e),t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e):t}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.E),r.Jb(r.l))},t.\u0275dir=r.Eb({type:t,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(t,e){1&t&&r.Sb("change",function(t){return e.onChange(t.target.value)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[r.yb([ft]),r.wb]}),t})(),yt=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption())}set ngValue(t){null!=this._select&&(this._select._optionMap.set(this.id,t),this._setElementValue(mt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.l),r.Jb(r.E),r.Jb(bt,9))},t.\u0275dir=r.Eb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})();const vt={provide:p,useExisting:Object(r.T)(()=>Vt),multi:!0};function Ct(t,e){return null==t?`${e}`:("string"==typeof e&&(e=`'${e}'`),e&&"object"==typeof e&&(e="Object"),`${t}: ${e}`.slice(0,50))}let Vt=(()=>{class t extends d{constructor(t,e){super(),this._renderer=t,this._elementRef=e,this._optionMap=new Map,this._idCounter=0,this.onChange=t=>{},this.onTouched=()=>{},this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){let e;if(this.value=t,Array.isArray(t)){const n=t.map(t=>this._getOptionId(t));e=(t,e)=>{t._setSelected(n.indexOf(e.toString())>-1)}}else e=(t,e)=>{t._setSelected(!1)};this._optionMap.forEach(e)}registerOnChange(t){this.onChange=e=>{const n=[];if(void 0!==e.selectedOptions){const t=e.selectedOptions;for(let e=0;e<t.length;e++){const i=t.item(e),s=this._getOptionValue(i.value);n.push(s)}}else{const t=e.options;for(let e=0;e<t.length;e++){const i=t.item(e);if(i.selected){const t=this._getOptionValue(i.value);n.push(t)}}}this.value=n,t(n)}}registerOnTouched(t){this.onTouched=t}setDisabledState(t){this._renderer.setProperty(this._elementRef.nativeElement,"disabled",t)}_registerOption(t){const e=(this._idCounter++).toString();return this._optionMap.set(e,t),e}_getOptionId(t){for(const e of Array.from(this._optionMap.keys()))if(this._compareWith(this._optionMap.get(e)._value,t))return e;return null}_getOptionValue(t){const e=function(t){return t.split(":")[0]}(t);return this._optionMap.has(e)?this._optionMap.get(e)._value:t}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.E),r.Jb(r.l))},t.\u0275dir=r.Eb({type:t,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(t,e){1&t&&r.Sb("change",function(t){return e.onChange(t.target)})("blur",function(){return e.onTouched()})},inputs:{compareWith:"compareWith"},features:[r.yb([vt]),r.wb]}),t})(),Ot=(()=>{class t{constructor(t,e,n){this._element=t,this._renderer=e,this._select=n,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){null!=this._select&&(this._value=t,this._setElementValue(Ct(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ct(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(r.l),r.Jb(r.E),r.Jb(Vt,9))},t.\u0275dir=r.Eb({type:t,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}}),t})(),At=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[ht]]}),t})(),wt=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:ct,useValue:e.warnOnNgModelWithFormControl}]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[At]}),t})(),Et=(()=>{class t{group(t,e=null){const n=this._reduceControls(t);let i,s=null,r=null;return null!=e&&(function(t){return void 0!==t.asyncValidators||void 0!==t.validators||void 0!==t.updateOn}(e)?(s=null!=e.validators?e.validators:null,r=null!=e.asyncValidators?e.asyncValidators:null,i=null!=e.updateOn?e.updateOn:void 0):(s=null!=e.validator?e.validator:null,r=null!=e.asyncValidator?e.asyncValidator:null)),new at(n,{asyncValidators:r,updateOn:i,validators:s})}control(t,e,n){return new ot(t,e,n)}array(t,e,n){const i=t.map(t=>this._createControl(t));return new lt(i,e,n)}_reduceControls(t){const e={};return Object.keys(t).forEach(n=>{e[n]=this._createControl(t[n])}),e}_createControl(t){return t instanceof ot||t instanceof at||t instanceof lt?t:Array.isArray(t)?this.control(t[0],t.length>1?t[1]:null,t.length>2?t[2]:null):this.control(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(r.Fb)({factory:function(){return new t},token:t,providedIn:wt}),t})();var St=n("vkgz"),Mt=n("eIep"),kt=n("LRne"),Pt=n("itXk"),Dt=n("tk/3");let jt=(()=>{class t{constructor(t){this.http=t,this.BaseUrl="https://restcountries.eu/rest/v2",this._regiones=["Africa","Americas","Asia","Europe","Oceania"]}get regiones(){return[...this._regiones]}getpaisesPorRegion(t){return this.http.get(`${this.BaseUrl}/region/${t}?fields=alpha3Code;name`)}getPaisPorCodigo(t){return t?this.http.get(`${this.BaseUrl}/alpha/${t}`):Object(kt.a)(null)}getPaisPorCodigoSmall(t){return this.http.get(`${this.BaseUrl}/alpha/${t}?fields=alpha3Code;name`)}getPaisesPorCodigos(t){if(!t)return Object(kt.a)([]);const e=[];return t.forEach(t=>{const n=this.getPaisPorCodigoSmall(t);e.push(n)}),Object(Pt.a)(e)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(Dt.a))},t.\u0275prov=r.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Ft(t,e){if(1&t&&(r.Mb(0,"option",10),r.Vb(1,"lowercase"),r.cc(2),r.Lb()),2&t){const t=e.$implicit;r.Xb("value",r.Wb(1,2,t)),r.zb(2),r.dc(t)}}function Tt(t,e){if(1&t&&(r.Mb(0,"option",10),r.cc(1),r.Lb()),2&t){const t=e.$implicit;r.Xb("value",t.alpha3Code),r.zb(1),r.dc(t.name)}}function xt(t,e){if(1&t&&(r.Mb(0,"div",2),r.Mb(1,"div",3),r.Mb(2,"label",4),r.cc(3,"Pais"),r.Lb(),r.Mb(4,"select",11),r.Mb(5,"option",6),r.cc(6,"-- Seleccione Pais --"),r.Lb(),r.bc(7,Tt,2,2,"option",7),r.Lb(),r.Lb(),r.Lb()),2&t){const t=r.Ub();r.zb(7),r.Xb("ngForOf",t.paises)}}function Lt(t,e){if(1&t&&(r.Mb(0,"option",10),r.cc(1),r.Lb()),2&t){const t=e.$implicit;r.Xb("value",t.alpha3Code),r.zb(1),r.dc(t.name)}}function Ut(t,e){if(1&t&&(r.Mb(0,"div",2),r.Mb(1,"div",3),r.Mb(2,"label",4),r.cc(3,"Fronteras"),r.Lb(),r.Mb(4,"select",12),r.Mb(5,"option",6),r.cc(6,"-- Seleccione el pais fronterizo --"),r.Lb(),r.bc(7,Lt,2,2,"option",7),r.Lb(),r.Lb(),r.Lb()),2&t){const t=r.Ub();r.zb(7),r.Xb("ngForOf",t.fronteras)}}function Nt(t,e){1&t&&(r.Mb(0,"div",2),r.Mb(1,"div",3),r.Mb(2,"div",13),r.cc(3," Cargando... "),r.Lb(),r.Lb(),r.Lb())}const It=[{path:"",children:[{path:"selector",component:(()=>{class t{constructor(t,e){this.fb=t,this.paisesService=e,this.miFormulario=this.fb.group({region:["",V.required],pais:["",V.required],frontera:["",V.required]}),this.regiones=[],this.paises=[],this.fronteras=[],this.cargando=!1}ngOnInit(){var t,e;this.regiones=this.paisesService.regiones,null===(t=this.miFormulario.get("region"))||void 0===t||t.valueChanges.pipe(Object(St.a)(t=>{this.miFormulario.get("pais").reset(""),this.cargando=!0}),Object(Mt.a)(t=>this.paisesService.getpaisesPorRegion(t))).subscribe(t=>{this.paises=t,this.cargando=!1}),null===(e=this.miFormulario.get("pais"))||void 0===e||e.valueChanges.pipe(Object(St.a)(()=>{var t;null===(t=this.miFormulario.get("frontera"))||void 0===t||t.reset(""),this.cargando=!0}),Object(Mt.a)(t=>this.paisesService.getPaisPorCodigo(t)),Object(Mt.a)(t=>this.paisesService.getPaisesPorCodigos(null==t?void 0:t.borders))).subscribe(t=>{this.fronteras=t,this.cargando=!1})}guardar(){console.log(this.miFormulario.value)}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(Et),r.Jb(jt))},t.\u0275cmp=r.Db({type:t,selectors:[["app-selector-page"]],decls:26,vars:9,consts:[[1,"mt-5"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],[1,"form-label"],["formControlName","region",1,"form-control"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"btn","btn-primary","float-end","mt-3"],[3,"value"],["formControlName","pais",1,"form-control"],["formControlName","frontera",1,"form-control"],[1,"alert","alert-primary"]],template:function(t,e){1&t&&(r.Mb(0,"h1",0),r.cc(1,"Selectores anidados"),r.Lb(),r.Kb(2,"hr"),r.Mb(3,"form",1),r.Sb("ngSubmit",function(){return e.guardar()}),r.Mb(4,"div",2),r.Mb(5,"div",3),r.Mb(6,"label",4),r.cc(7,"Continente"),r.Lb(),r.Mb(8,"select",5),r.Mb(9,"option",6),r.cc(10,"-- Seleccione Continente --"),r.Lb(),r.bc(11,Ft,3,4,"option",7),r.Lb(),r.Lb(),r.Lb(),r.bc(12,xt,8,1,"div",8),r.bc(13,Ut,8,1,"div",8),r.bc(14,Nt,4,0,"div",8),r.Mb(15,"div",2),r.Mb(16,"div",3),r.Mb(17,"button",9),r.cc(18," Seleccionar "),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(19,"h3"),r.cc(20,"Formulario"),r.Lb(),r.Mb(21,"pre"),r.cc(22),r.Lb(),r.Mb(23,"pre"),r.cc(24),r.Vb(25,"json"),r.Lb()),2&t&&(r.zb(3),r.Xb("formGroup",e.miFormulario),r.zb(8),r.Xb("ngForOf",e.regiones),r.zb(1),r.Xb("ngIf",0!==e.paises.length),r.zb(1),r.Xb("ngIf",e.fronteras.length>0),r.zb(1),r.Xb("ngIf",e.cargando),r.zb(8),r.dc(e.miFormulario.valid),r.zb(2),r.dc(r.Wb(25,7,e.miFormulario.value)))},directives:[ut,z,pt,bt,$,_t,yt,Ot,i.j,i.k],pipes:[i.e,i.i],encapsulation:2}),t})()},{path:"**",redirectTo:"selector"}]}];let Jt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[s.a.forChild(It)],s.a]}),t})(),$t=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[i.b,Jt,wt]]}),t})()}}]);