"use strict";
(self["webpackChunkcore_app"] = self["webpackChunkcore_app"] || []).push([["src_app_pages_pages_module_ts"],{

/***/ 6868:
/*!****************************************************************************************!*\
  !*** ./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgSelectComponent": () => (/* binding */ NgSelectComponent),
/* harmony export */   "NgSelectConfig": () => (/* binding */ NgSelectConfig),
/* harmony export */   "NgSelectModule": () => (/* binding */ NgSelectModule),
/* harmony export */   "SELECTION_MODEL_FACTORY": () => (/* binding */ SELECTION_MODEL_FACTORY),
/* harmony export */   "ɵb": () => (/* binding */ DefaultSelectionModelFactory),
/* harmony export */   "ɵc": () => (/* binding */ DefaultSelectionModel),
/* harmony export */   "ɵd": () => (/* binding */ NgDropdownPanelService),
/* harmony export */   "ɵe": () => (/* binding */ NgItemLabelDirective),
/* harmony export */   "ɵf": () => (/* binding */ NgOptionTemplateDirective),
/* harmony export */   "ɵg": () => (/* binding */ NgOptgroupTemplateDirective),
/* harmony export */   "ɵh": () => (/* binding */ NgLabelTemplateDirective),
/* harmony export */   "ɵi": () => (/* binding */ NgMultiLabelTemplateDirective),
/* harmony export */   "ɵj": () => (/* binding */ NgHeaderTemplateDirective),
/* harmony export */   "ɵk": () => (/* binding */ NgFooterTemplateDirective),
/* harmony export */   "ɵl": () => (/* binding */ NgNotFoundTemplateDirective),
/* harmony export */   "ɵm": () => (/* binding */ NgTypeToSearchTemplateDirective),
/* harmony export */   "ɵn": () => (/* binding */ NgLoadingTextTemplateDirective),
/* harmony export */   "ɵo": () => (/* binding */ NgTagTemplateDirective),
/* harmony export */   "ɵp": () => (/* binding */ NgLoadingSpinnerTemplateDirective),
/* harmony export */   "ɵq": () => (/* binding */ NgDropdownPanelComponent),
/* harmony export */   "ɵr": () => (/* binding */ NgOptionComponent),
/* harmony export */   "ɵs": () => (/* binding */ ConsoleService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 7494);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 970);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2516);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9919);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



const _c0 = ["content"];
const _c1 = ["scroll"];
const _c2 = ["padding"];
const _c3 = function (a0) { return { searchTerm: a0 }; };
function NgDropdownPanelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.headerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r0.filterValue));
} }
function NgDropdownPanelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r4.footerTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r4.filterValue));
} }
const _c4 = ["*"];
const _c5 = ["searchInput"];
function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_container_4_div_1_ng_template_1_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.unselect(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 16);
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r7.label)("escape", ctx_r9.escapeHTML);
} }
function NgSelectComponent_ng_container_4_div_1_ng_template_3_Template(rf, ctx) { }
const _c6 = function (a0, a1, a2) { return { item: a0, clear: a1, label: a2 }; };
function NgSelectComponent_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_ng_template_1_Template, 3, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_4_div_1_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-value-disabled", item_r7.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r6.labelTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c6, item_r7.value, ctx_r6.clearItem, item_r7.label));
} }
function NgSelectComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_4_div_1_Template, 4, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.selectedItems)("ngForTrackBy", ctx_r0.trackByOption);
} }
function NgSelectComponent_5_ng_template_0_Template(rf, ctx) { }
const _c7 = function (a0, a1) { return { items: a0, clear: a1 }; };
function NgSelectComponent_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgSelectComponent_5_ng_template_0_Template, 0, 0, "ng-template", 14);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.multiLabelTemplate)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c7, ctx_r1.selectedValues, ctx_r1.clearItem));
} }
function NgSelectComponent_ng_container_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function NgSelectComponent_ng_container_9_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_container_9_ng_template_1_Template, 1, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_container_9_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r3.loadingSpinnerTemplate || _r16);
} }
function NgSelectComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx_r4.clearAllText);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 27);
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngItemLabel", item_r24.label)("escape", ctx_r26.escapeHTML);
} }
function NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template(rf, ctx) { }
const _c8 = function (a0, a1, a2, a3) { return { item: a0, item$: a1, index: a2, searchTerm: a3 }; };
function NgSelectComponent_ng_dropdown_panel_13_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.toggleItem(item_r24); })("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_2_Template_div_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r24 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.onItemHover(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_1_Template, 1, 2, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_2_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-disabled", item_r24.disabled)("ng-option-selected", item_r24.selected)("ng-optgroup", item_r24.children)("ng-option", !item_r24.children)("ng-option-child", !!item_r24.parent)("ng-option-marked", item_r24 === ctx_r19.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", item_r24.children ? "group" : "option")("aria-selected", item_r24.selected)("id", item_r24 == null ? null : item_r24.htmlId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r24.children ? ctx_r19.optgroupTemplate || _r25 : ctx_r19.optionTemplate || _r25)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](17, _c8, item_r24.value, item_r24, item_r24.index, ctx_r19.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r33.addTagText);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r33.searchTerm, "\"");
} }
function NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_mouseover_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.itemsList.unmarkItem(); })("click", function NgSelectComponent_ng_dropdown_panel_13_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.selectTag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_1_Template, 4, 2, "ng-template", null, 29, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-option-marked", !ctx_r20.itemsList.markedItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r20.tagTemplate || _r32)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, ctx_r20.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r39.notFoundText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_1_Template, 2, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r21.notFoundTemplate || _r38)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r21.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.typeToSearchText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_1_Template, 2, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_ng_template_3_Template, 0, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r22.typeToSearchTemplate || _r41);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r45.loadingText);
} }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template(rf, ctx) { }
function NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_1_Template, 2, 1, "ng-template", null, 34, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_ng_template_3_Template, 0, 0, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", ctx_r23.loadingTextTemplate || _r44)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c3, ctx_r23.searchTerm));
} }
function NgSelectComponent_ng_dropdown_panel_13_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-dropdown-panel", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_update_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.viewPortItems = $event; })("scroll", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scroll_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r49.scroll.emit($event); })("scrollToEnd", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_scrollToEnd_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r50.scrollToEnd.emit($event); })("outsideClick", function NgSelectComponent_ng_dropdown_panel_13_Template_ng_dropdown_panel_outsideClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NgSelectComponent_ng_dropdown_panel_13_div_2_Template, 4, 22, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NgSelectComponent_ng_dropdown_panel_13_div_3_Template, 4, 6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_dropdown_panel_13_ng_container_4_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_ng_dropdown_panel_13_ng_container_5_Template, 4, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgSelectComponent_ng_dropdown_panel_13_ng_container_6_Template, 4, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select-multiple", ctx_r5.multiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("virtualScroll", ctx_r5.virtualScroll)("bufferAmount", ctx_r5.bufferAmount)("appendTo", ctx_r5.appendTo)("position", ctx_r5.dropdownPosition)("headerTemplate", ctx_r5.headerTemplate)("footerTemplate", ctx_r5.footerTemplate)("filterValue", ctx_r5.searchTerm)("items", ctx_r5.itemsList.filteredItems)("markedItem", ctx_r5.itemsList.markedItem)("ngClass", ctx_r5.appendTo ? ctx_r5.classes : null)("id", ctx_r5.dropdownId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.viewPortItems)("ngForTrackBy", ctx_r5.trackByOption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showAddTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showNoItemsFound());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.showTypeToSearch());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.loading && ctx_r5.itemsList.filteredItems.length === 0);
} }
const unescapedHTMLExp = /[&<>"']/g;
/** @type {?} */
const hasUnescapedHTMLExp = RegExp(unescapedHTMLExp.source);
/** @type {?} */
const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    '\'': '&#39;'
};
/**
 * @param {?} string
 * @return {?}
 */
function escapeHTML(string) {
    return (string && hasUnescapedHTMLExp.test(string)) ?
        string.replace(unescapedHTMLExp, (/**
         * @param {?} chr
         * @return {?}
         */
        chr => htmlEscapes[chr])) :
        string;
}
/**
 * @param {?} value
 * @return {?}
 */
function isDefined(value) {
    return value !== undefined && value !== null;
}
/**
 * @param {?} value
 * @return {?}
 */
function isObject(value) {
    return typeof value === 'object' && isDefined(value);
}
/**
 * @param {?} value
 * @return {?}
 */
function isPromise(value) {
    return value instanceof Promise;
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return value instanceof Function;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgItemLabelDirective {
    /**
     * @param {?} element
     */
    constructor(element) {
        this.element = element;
        this.escape = true;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.element.nativeElement.innerHTML = this.escape ?
            escapeHTML(this.ngItemLabel) :
            this.ngItemLabel;
    }
}
NgItemLabelDirective.ɵfac = function NgItemLabelDirective_Factory(t) { return new (t || NgItemLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NgItemLabelDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgItemLabelDirective, selectors: [["", "ngItemLabel", ""]], inputs: { escape: "escape", ngItemLabel: "ngItemLabel" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
NgItemLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NgItemLabelDirective.propDecorators = {
    ngItemLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgItemLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ngItemLabel]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], ngItemLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}
class NgOptionTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptionTemplateDirective.ɵfac = function NgOptionTemplateDirective_Factory(t) { return new (t || NgOptionTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgOptionTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptionTemplateDirective, selectors: [["", "ng-option-tmp", ""]] });
/** @nocollapse */
NgOptionTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-option-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgOptgroupTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgOptgroupTemplateDirective.ɵfac = function NgOptgroupTemplateDirective_Factory(t) { return new (t || NgOptgroupTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgOptgroupTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgOptgroupTemplateDirective, selectors: [["", "ng-optgroup-tmp", ""]] });
/** @nocollapse */
NgOptgroupTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptgroupTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-optgroup-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLabelTemplateDirective.ɵfac = function NgLabelTemplateDirective_Factory(t) { return new (t || NgLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLabelTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLabelTemplateDirective, selectors: [["", "ng-label-tmp", ""]] });
/** @nocollapse */
NgLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgMultiLabelTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgMultiLabelTemplateDirective.ɵfac = function NgMultiLabelTemplateDirective_Factory(t) { return new (t || NgMultiLabelTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgMultiLabelTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgMultiLabelTemplateDirective, selectors: [["", "ng-multi-label-tmp", ""]] });
/** @nocollapse */
NgMultiLabelTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgMultiLabelTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-multi-label-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgHeaderTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgHeaderTemplateDirective.ɵfac = function NgHeaderTemplateDirective_Factory(t) { return new (t || NgHeaderTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgHeaderTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgHeaderTemplateDirective, selectors: [["", "ng-header-tmp", ""]] });
/** @nocollapse */
NgHeaderTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgHeaderTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-header-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgFooterTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgFooterTemplateDirective.ɵfac = function NgFooterTemplateDirective_Factory(t) { return new (t || NgFooterTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgFooterTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgFooterTemplateDirective, selectors: [["", "ng-footer-tmp", ""]] });
/** @nocollapse */
NgFooterTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgFooterTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-footer-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgNotFoundTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgNotFoundTemplateDirective.ɵfac = function NgNotFoundTemplateDirective_Factory(t) { return new (t || NgNotFoundTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgNotFoundTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgNotFoundTemplateDirective, selectors: [["", "ng-notfound-tmp", ""]] });
/** @nocollapse */
NgNotFoundTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgNotFoundTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-notfound-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgTypeToSearchTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTypeToSearchTemplateDirective.ɵfac = function NgTypeToSearchTemplateDirective_Factory(t) { return new (t || NgTypeToSearchTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgTypeToSearchTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTypeToSearchTemplateDirective, selectors: [["", "ng-typetosearch-tmp", ""]] });
/** @nocollapse */
NgTypeToSearchTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTypeToSearchTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-typetosearch-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgLoadingTextTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingTextTemplateDirective.ɵfac = function NgLoadingTextTemplateDirective_Factory(t) { return new (t || NgLoadingTextTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLoadingTextTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingTextTemplateDirective, selectors: [["", "ng-loadingtext-tmp", ""]] });
/** @nocollapse */
NgLoadingTextTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingTextTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-loadingtext-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgTagTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgTagTemplateDirective.ɵfac = function NgTagTemplateDirective_Factory(t) { return new (t || NgTagTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgTagTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTagTemplateDirective, selectors: [["", "ng-tag-tmp", ""]] });
/** @nocollapse */
NgTagTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTagTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-tag-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}
class NgLoadingSpinnerTemplateDirective {
    /**
     * @param {?} template
     */
    constructor(template) {
        this.template = template;
    }
}
NgLoadingSpinnerTemplateDirective.ɵfac = function NgLoadingSpinnerTemplateDirective_Factory(t) { return new (t || NgLoadingSpinnerTemplateDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef)); };
NgLoadingSpinnerTemplateDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgLoadingSpinnerTemplateDirective, selectors: [["", "ng-loadingspinner-tmp", ""]] });
/** @nocollapse */
NgLoadingSpinnerTemplateDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgLoadingSpinnerTemplateDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{ selector: '[ng-loadingspinner-tmp]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ConsoleService {
    /**
     * @param {?} message
     * @return {?}
     */
    warn(message) {
        console.warn(message);
    }
}
ConsoleService.ɵfac = function ConsoleService_Factory(t) { return new (t || ConsoleService)(); };
ConsoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConsoleService, factory: ConsoleService.ɵfac, providedIn: 'root' });
/** @nocollapse */ ConsoleService.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function ConsoleService_Factory() { return new ConsoleService(); }, token: ConsoleService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsoleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function newId() {
    // First character is an 'a', it's good practice to tag id to begin with a letter
    return 'axxxxxxxxxxx'.replace(/[x]/g, (/**
     * @param {?} _
     * @return {?}
     */
    function (_) {
        // tslint:disable-next-line:no-bitwise
        /** @type {?} */
        const val = Math.random() * 16 | 0;
        return val.toString(16);
    }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const diacritics = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};
/**
 * @param {?} text
 * @return {?}
 */
function stripSpecialChars(text) {
    /** @type {?} */
    const match = (/**
     * @param {?} a
     * @return {?}
     */
    (a) => {
        return diacritics[a] || a;
    });
    return text.replace(/[^\u0000-\u007E]/g, match);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ItemsList {
    /**
     * @param {?} _ngSelect
     * @param {?} _selectionModel
     */
    constructor(_ngSelect, _selectionModel) {
        this._ngSelect = _ngSelect;
        this._selectionModel = _selectionModel;
        this._items = [];
        this._filteredItems = [];
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    get items() {
        return this._items;
    }
    /**
     * @return {?}
     */
    get filteredItems() {
        return this._filteredItems;
    }
    /**
     * @return {?}
     */
    get markedIndex() {
        return this._markedIndex;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this._selectionModel.value;
    }
    /**
     * @return {?}
     */
    get markedItem() {
        return this._filteredItems[this._markedIndex];
    }
    /**
     * @return {?}
     */
    get noItemsToSelect() {
        return this._ngSelect.hideSelected && this._items.length === this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get maxItemsSelected() {
        return this._ngSelect.multiple && this._ngSelect.maxSelectedItems <= this.selectedItems.length;
    }
    /**
     * @return {?}
     */
    get lastSelectedItem() {
        /** @type {?} */
        let i = this.selectedItems.length - 1;
        for (; i >= 0; i--) {
            /** @type {?} */
            let item = this.selectedItems[i];
            if (!item.disabled) {
                return item;
            }
        }
        return null;
    }
    /**
     * @param {?} items
     * @return {?}
     */
    setItems(items) {
        this._items = items.map((/**
         * @param {?} item
         * @param {?} index
         * @return {?}
         */
        (item, index) => this.mapItem(item, index)));
        if (this._ngSelect.groupBy) {
            this._groups = this._groupBy(this._items, this._ngSelect.groupBy);
            this._items = this._flatten(this._groups);
        }
        else {
            this._groups = new Map();
            this._groups.set(undefined, this._items);
        }
        this._filteredItems = [...this._items];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (item.selected || this.maxItemsSelected) {
            return;
        }
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        if (!multiple) {
            this.clearSelected();
        }
        this._selectionModel.select(item, multiple, this._ngSelect.selectableGroupAsModel);
        if (this._ngSelect.hideSelected) {
            this._hideSelected(item);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item.selected) {
            return;
        }
        this._selectionModel.unselect(item, this._ngSelect.multiple);
        if (this._ngSelect.hideSelected && isDefined(item.index) && this._ngSelect.multiple) {
            this._showSelected(item);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    findItem(value) {
        /** @type {?} */
        let findBy;
        if (this._ngSelect.compareWith) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => this._ngSelect.compareWith(item.value, value));
        }
        else if (this._ngSelect.bindValue) {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => !item.children && this.resolveNested(item.value, this._ngSelect.bindValue) === value);
        }
        else {
            findBy = (/**
             * @param {?} item
             * @return {?}
             */
            item => item.value === value ||
                !item.children && item.label && item.label === this.resolveNested(value, this._ngSelect.bindLabel));
        }
        return this._items.find((/**
         * @param {?} item
         * @return {?}
         */
        item => findBy(item)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    addItem(item) {
        /** @type {?} */
        const option = this.mapItem(item, this._items.length);
        this._items.push(option);
        this._filteredItems.push(option);
        return option;
    }
    /**
     * @param {?=} keepDisabled
     * @return {?}
     */
    clearSelected(keepDisabled = false) {
        this._selectionModel.clear(keepDisabled);
        this._items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            item.selected = keepDisabled && item.selected && item.disabled;
            item.marked = false;
        }));
        if (this._ngSelect.hideSelected) {
            this.resetFilteredItems();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    findByLabel(term) {
        term = stripSpecialChars(term).toLocaleLowerCase();
        return this.filteredItems.find((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            /** @type {?} */
            const label = stripSpecialChars(item.label).toLocaleLowerCase();
            return label.substr(0, term.length) === term;
        }));
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (!term) {
            this.resetFilteredItems();
            return;
        }
        this._filteredItems = [];
        term = this._ngSelect.searchFn ? term : stripSpecialChars(term).toLocaleLowerCase();
        /** @type {?} */
        const match = this._ngSelect.searchFn || this._defaultSearchFn;
        /** @type {?} */
        const hideSelected = this._ngSelect.hideSelected;
        for (const key of Array.from(this._groups.keys())) {
            /** @type {?} */
            const matchedItems = [];
            for (const item of this._groups.get(key)) {
                if (hideSelected && (item.parent && item.parent.selected || item.selected)) {
                    continue;
                }
                /** @type {?} */
                const searchItem = this._ngSelect.searchFn ? item.value : item;
                if (match(term, searchItem)) {
                    matchedItems.push(item);
                }
            }
            if (matchedItems.length > 0) {
                const [last] = matchedItems.slice(-1);
                if (last.parent) {
                    /** @type {?} */
                    const head = this._items.find((/**
                     * @param {?} x
                     * @return {?}
                     */
                    x => x === last.parent));
                    this._filteredItems.push(head);
                }
                this._filteredItems.push(...matchedItems);
            }
        }
    }
    /**
     * @return {?}
     */
    resetFilteredItems() {
        if (this._filteredItems.length === this._items.length) {
            return;
        }
        if (this._ngSelect.hideSelected && this.selectedItems.length > 0) {
            this._filteredItems = this._items.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => !x.selected));
        }
        else {
            this._filteredItems = this._items;
        }
    }
    /**
     * @return {?}
     */
    unmarkItem() {
        this._markedIndex = -1;
    }
    /**
     * @return {?}
     */
    markNextItem() {
        this._stepToItem(+1);
    }
    /**
     * @return {?}
     */
    markPreviousItem() {
        this._stepToItem(-1);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    markItem(item) {
        this._markedIndex = this._filteredItems.indexOf(item);
    }
    /**
     * @param {?=} markDefault
     * @return {?}
     */
    markSelectedOrDefault(markDefault) {
        if (this._filteredItems.length === 0) {
            return;
        }
        /** @type {?} */
        const lastMarkedIndex = this._getLastMarkedIndex();
        if (lastMarkedIndex > -1) {
            this._markedIndex = lastMarkedIndex;
        }
        else {
            this._markedIndex = markDefault ? this.filteredItems.findIndex((/**
             * @param {?} x
             * @return {?}
             */
            x => !x.disabled)) : -1;
        }
    }
    /**
     * @param {?} option
     * @param {?} key
     * @return {?}
     */
    resolveNested(option, key) {
        if (!isObject(option)) {
            return option;
        }
        if (key.indexOf('.') === -1) {
            return option[key];
        }
        else {
            /** @type {?} */
            let keys = key.split('.');
            /** @type {?} */
            let value = option;
            for (let i = 0, len = keys.length; i < len; ++i) {
                if (value == null) {
                    return null;
                }
                value = value[keys[i]];
            }
            return value;
        }
    }
    /**
     * @param {?} item
     * @param {?} index
     * @return {?}
     */
    mapItem(item, index) {
        /** @type {?} */
        const label = isDefined(item.$ngOptionLabel) ? item.$ngOptionLabel : this.resolveNested(item, this._ngSelect.bindLabel);
        /** @type {?} */
        const value = isDefined(item.$ngOptionValue) ? item.$ngOptionValue : item;
        return {
            index: index,
            label: isDefined(label) ? label.toString() : '',
            value: value,
            disabled: item.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${index}`,
        };
    }
    /**
     * @return {?}
     */
    mapSelectedItems() {
        /** @type {?} */
        const multiple = this._ngSelect.multiple;
        for (const selected of this.selectedItems) {
            /** @type {?} */
            const value = this._ngSelect.bindValue ? this.resolveNested(selected.value, this._ngSelect.bindValue) : selected.value;
            /** @type {?} */
            const item = isDefined(value) ? this.findItem(value) : null;
            this._selectionModel.unselect(selected, multiple);
            this._selectionModel.select(item || selected, multiple, this._ngSelect.selectableGroupAsModel);
        }
        if (this._ngSelect.hideSelected) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => this.selectedItems.indexOf(x) === -1));
        }
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _showSelected(item) {
        this._filteredItems.push(item);
        if (item.parent) {
            /** @type {?} */
            const parent = item.parent;
            /** @type {?} */
            const parentExists = this._filteredItems.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x === parent));
            if (!parentExists) {
                this._filteredItems.push(parent);
            }
        }
        else if (item.children) {
            for (const child of item.children) {
                child.selected = false;
                this._filteredItems.push(child);
            }
        }
        this._filteredItems = [...this._filteredItems.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => (a.index - b.index)))];
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _hideSelected(item) {
        this._filteredItems = this._filteredItems.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== item));
        if (item.parent) {
            /** @type {?} */
            const children = item.parent.children;
            if (children.every((/**
             * @param {?} x
             * @return {?}
             */
            x => x.selected))) {
                this._filteredItems = this._filteredItems.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== item.parent));
            }
        }
        else if (item.children) {
            this._filteredItems = this.filteredItems.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent !== item));
        }
    }
    /**
     * @private
     * @param {?} search
     * @param {?} opt
     * @return {?}
     */
    _defaultSearchFn(search, opt) {
        /** @type {?} */
        const label = stripSpecialChars(opt.label).toLocaleLowerCase();
        return label.indexOf(search) > -1;
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    _getNextItemIndex(steps) {
        if (steps > 0) {
            return (this._markedIndex === this._filteredItems.length - 1) ? 0 : (this._markedIndex + 1);
        }
        return (this._markedIndex <= 0) ? (this._filteredItems.length - 1) : (this._markedIndex - 1);
    }
    /**
     * @private
     * @param {?} steps
     * @return {?}
     */
    _stepToItem(steps) {
        if (this._filteredItems.length === 0 || this._filteredItems.every((/**
         * @param {?} x
         * @return {?}
         */
        x => x.disabled))) {
            return;
        }
        this._markedIndex = this._getNextItemIndex(steps);
        if (this.markedItem.disabled) {
            this._stepToItem(steps);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getLastMarkedIndex() {
        if (this._ngSelect.hideSelected) {
            return -1;
        }
        if (this._markedIndex > -1 && this.markedItem === undefined) {
            return -1;
        }
        /** @type {?} */
        const selectedIndex = this._filteredItems.indexOf(this.lastSelectedItem);
        if (this.lastSelectedItem && selectedIndex < 0) {
            return -1;
        }
        return Math.max(this.markedIndex, selectedIndex);
    }
    /**
     * @private
     * @param {?} items
     * @param {?} prop
     * @return {?}
     */
    _groupBy(items, prop) {
        /** @type {?} */
        const groups = new Map();
        if (items.length === 0) {
            return groups;
        }
        // Check if items are already grouped by given key.
        if (Array.isArray(items[0].value[(/** @type {?} */ (prop))])) {
            for (const item of items) {
                /** @type {?} */
                const children = (item.value[(/** @type {?} */ (prop))] || []).map((/**
                 * @param {?} x
                 * @param {?} index
                 * @return {?}
                 */
                (x, index) => this.mapItem(x, index)));
                groups.set(item, children);
            }
            return groups;
        }
        /** @type {?} */
        const isFnKey = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const keyFn = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            let key = isFnKey ? ((/** @type {?} */ (prop)))(item.value) : item.value[(/** @type {?} */ (prop))];
            return isDefined(key) ? key : undefined;
        });
        // Group items by key.
        for (const item of items) {
            /** @type {?} */
            let key = keyFn(item);
            /** @type {?} */
            const group = groups.get(key);
            if (group) {
                group.push(item);
            }
            else {
                groups.set(key, [item]);
            }
        }
        return groups;
    }
    /**
     * @private
     * @param {?} groups
     * @return {?}
     */
    _flatten(groups) {
        /** @type {?} */
        const isGroupByFn = isFunction(this._ngSelect.groupBy);
        /** @type {?} */
        const items = [];
        for (const key of Array.from(groups.keys())) {
            /** @type {?} */
            let i = items.length;
            if (key === undefined) {
                /** @type {?} */
                const withoutGroup = groups.get(undefined) || [];
                items.push(...withoutGroup.map((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => (Object.assign({}, x, { index: i++ })))));
                continue;
            }
            /** @type {?} */
            const isObjectKey = isObject(key);
            /** @type {?} */
            const parent = {
                label: isObjectKey ? '' : String(key),
                children: undefined,
                parent: null,
                index: i++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: newId(),
            };
            /** @type {?} */
            const groupKey = isGroupByFn ? this._ngSelect.bindLabel : (/** @type {?} */ (this._ngSelect.groupBy));
            /** @type {?} */
            const groupValue = this._ngSelect.groupValue || ((/**
             * @return {?}
             */
            () => {
                if (isObjectKey) {
                    return ((/** @type {?} */ (key))).value;
                }
                return { [groupKey]: key };
            }));
            /** @type {?} */
            const children = groups.get(key).map((/**
             * @param {?} x
             * @return {?}
             */
            x => {
                x.parent = parent;
                x.children = undefined;
                x.index = i++;
                return x;
            }));
            parent.children = children;
            parent.value = groupValue(key, children.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)));
            items.push(parent);
            items.push(...children);
        }
        return items;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgOption() { }
if (false) {}
/** @enum {number} */
const KeyCode = {
    Tab: 9,
    Enter: 13,
    Esc: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40,
    Backspace: 8,
};
KeyCode[KeyCode.Tab] = 'Tab';
KeyCode[KeyCode.Enter] = 'Enter';
KeyCode[KeyCode.Esc] = 'Esc';
KeyCode[KeyCode.Space] = 'Space';
KeyCode[KeyCode.ArrowUp] = 'ArrowUp';
KeyCode[KeyCode.ArrowDown] = 'ArrowDown';
KeyCode[KeyCode.Backspace] = 'Backspace';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ItemsRangeResult() { }
if (false) {}
/**
 * @record
 */
function PanelDimensions() { }
if (false) {}
class NgDropdownPanelService {
    constructor() {
        this._dimensions = {
            itemHeight: 0,
            panelHeight: 0,
            itemsPerViewport: 0
        };
    }
    /**
     * @return {?}
     */
    get dimensions() {
        return this._dimensions;
    }
    /**
     * @param {?} scrollPos
     * @param {?} itemsLength
     * @param {?} buffer
     * @return {?}
     */
    calculateItems(scrollPos, itemsLength, buffer) {
        /** @type {?} */
        const d = this._dimensions;
        /** @type {?} */
        const scrollHeight = d.itemHeight * itemsLength;
        /** @type {?} */
        const scrollTop = Math.max(0, scrollPos);
        /** @type {?} */
        const indexByScrollTop = scrollTop / scrollHeight * itemsLength;
        /** @type {?} */
        let end = Math.min(itemsLength, Math.ceil(indexByScrollTop) + (d.itemsPerViewport + 1));
        /** @type {?} */
        const maxStartEnd = end;
        /** @type {?} */
        const maxStart = Math.max(0, maxStartEnd - d.itemsPerViewport);
        /** @type {?} */
        let start = Math.min(maxStart, Math.floor(indexByScrollTop));
        /** @type {?} */
        let topPadding = d.itemHeight * Math.ceil(start) - (d.itemHeight * Math.min(start, buffer));
        topPadding = !isNaN(topPadding) ? topPadding : 0;
        start = !isNaN(start) ? start : -1;
        end = !isNaN(end) ? end : -1;
        start -= buffer;
        start = Math.max(0, start);
        end += buffer;
        end = Math.min(itemsLength, end);
        return {
            topPadding,
            scrollHeight,
            start,
            end
        };
    }
    /**
     * @param {?} itemHeight
     * @param {?} panelHeight
     * @return {?}
     */
    setDimensions(itemHeight, panelHeight) {
        /** @type {?} */
        const itemsPerViewport = Math.max(1, Math.floor(panelHeight / itemHeight));
        this._dimensions = {
            itemHeight,
            panelHeight,
            itemsPerViewport
        };
    }
    /**
     * @param {?} itemTop
     * @param {?} itemHeight
     * @param {?} lastScroll
     * @return {?}
     */
    getScrollTo(itemTop, itemHeight, lastScroll) {
        const { panelHeight } = this.dimensions;
        /** @type {?} */
        const itemBottom = itemTop + itemHeight;
        /** @type {?} */
        const top = lastScroll;
        /** @type {?} */
        const bottom = top + panelHeight;
        if (panelHeight >= itemBottom && lastScroll === itemTop) {
            return null;
        }
        if (itemBottom > bottom) {
            return top + itemBottom - bottom;
        }
        else if (itemTop <= top) {
            return itemTop;
        }
        return null;
    }
}
NgDropdownPanelService.ɵfac = function NgDropdownPanelService_Factory(t) { return new (t || NgDropdownPanelService)(); };
NgDropdownPanelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgDropdownPanelService, factory: NgDropdownPanelService.ɵfac });

if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const TOP_CSS_CLASS = 'ng-select-top';
/** @type {?} */
const BOTTOM_CSS_CLASS = 'ng-select-bottom';
/** @type {?} */
const SCROLL_SCHEDULER = typeof requestAnimationFrame !== 'undefined' ? rxjs__WEBPACK_IMPORTED_MODULE_1__.animationFrameScheduler : rxjs__WEBPACK_IMPORTED_MODULE_2__.asapScheduler;
class NgDropdownPanelComponent {
    /**
     * @param {?} _renderer
     * @param {?} _zone
     * @param {?} _panelService
     * @param {?} _elementRef
     * @param {?} _document
     */
    constructor(_renderer, _zone, _panelService, _elementRef, _document) {
        this._renderer = _renderer;
        this._zone = _zone;
        this._panelService = _panelService;
        this._document = _document;
        this.items = [];
        this.position = 'auto';
        this.virtualScroll = false;
        this.filterValue = null;
        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.outsideClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._scrollToEndFired = false;
        this._updateScrollHeight = false;
        this._lastScrollPosition = 0;
        this._dropdown = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get currentPosition() {
        return this._currentPosition;
    }
    /**
     * @private
     * @return {?}
     */
    get itemsLength() {
        return this._itemsLength;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    set itemsLength(value) {
        if (value !== this._itemsLength) {
            this._itemsLength = value;
            this._onItemsLengthChanged();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _startOffset() {
        if (this.markedItem) {
            const { itemHeight, panelHeight } = this._panelService.dimensions;
            /** @type {?} */
            const offset = this.markedItem.index * itemHeight;
            return panelHeight > offset ? 0 : offset;
        }
        return 0;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        if (target.tagName === 'INPUT') {
            return;
        }
        $event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._select = this._dropdown.parentElement;
        this._virtualPadding = this.paddingElementRef.nativeElement;
        this._scrollablePanel = this.scrollElementRef.nativeElement;
        this._contentPanel = this.contentElementRef.nativeElement;
        this._handleScroll();
        this._handleOutsideClick();
        this._appendDropdown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.items) {
            /** @type {?} */
            const change = changes.items;
            this._onItemsChange(change.currentValue, change.firstChange);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
        this._destroy$.unsubscribe();
        if (this.appendTo) {
            this._renderer.removeChild(this._dropdown.parentNode, this._dropdown);
        }
    }
    /**
     * @param {?} option
     * @param {?=} startFromOption
     * @return {?}
     */
    scrollTo(option, startFromOption = false) {
        if (!option) {
            return;
        }
        /** @type {?} */
        const index = this.items.indexOf(option);
        if (index < 0 || index >= this.itemsLength) {
            return;
        }
        /** @type {?} */
        let scrollTo;
        if (this.virtualScroll) {
            /** @type {?} */
            const itemHeight = this._panelService.dimensions.itemHeight;
            scrollTo = this._panelService.getScrollTo(index * itemHeight, itemHeight, this._lastScrollPosition);
        }
        else {
            /** @type {?} */
            const item = this._dropdown.querySelector(`#${option.htmlId}`);
            /** @type {?} */
            const lastScroll = startFromOption ? item.offsetTop : this._lastScrollPosition;
            scrollTo = this._panelService.getScrollTo(item.offsetTop, item.clientHeight, lastScroll);
        }
        if (isDefined(scrollTo)) {
            this._scrollablePanel.scrollTop = scrollTo;
        }
    }
    /**
     * @return {?}
     */
    scrollToTag() {
        /** @type {?} */
        const panel = this._scrollablePanel;
        panel.scrollTop = panel.scrollHeight - panel.clientHeight;
    }
    /**
     * @return {?}
     */
    adjustPosition() {
        /** @type {?} */
        const parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        const select = this._select.getBoundingClientRect();
        this._setOffset(parent, select);
    }
    /**
     * @private
     * @return {?}
     */
    _handleDropdownPosition() {
        this._currentPosition = this._calculateCurrentPosition(this._dropdown);
        if (this._currentPosition === 'top') {
            this._renderer.addClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.addClass(this._select, TOP_CSS_CLASS);
            this._renderer.removeClass(this._select, BOTTOM_CSS_CLASS);
        }
        else {
            this._renderer.addClass(this._dropdown, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._dropdown, TOP_CSS_CLASS);
            this._renderer.addClass(this._select, BOTTOM_CSS_CLASS);
            this._renderer.removeClass(this._select, TOP_CSS_CLASS);
        }
        if (this.appendTo) {
            this._updatePosition();
        }
        this._dropdown.style.opacity = '1';
    }
    /**
     * @private
     * @return {?}
     */
    _handleScroll() {
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this.scrollElementRef.nativeElement, 'scroll')
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.auditTime)(0, SCROLL_SCHEDULER))
                .subscribe((/**
             * @param {?} e
             * @return {?}
             */
            (e) => this._onContentScrolled(e.target.scrollTop)));
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _handleOutsideClick() {
        if (!this._document) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'touchstart', { capture: true }), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(this._document, 'mousedown', { capture: true })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$))
                .subscribe((/**
             * @param {?} $event
             * @return {?}
             */
            $event => this._checkToClose($event)));
        }));
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _checkToClose($event) {
        if (this._select.contains($event.target) || this._dropdown.contains($event.target)) {
            return;
        }
        /** @type {?} */
        const path = $event.path || ($event.composedPath && $event.composedPath());
        if ($event.target && $event.target.shadowRoot && path && path[0] && this._select.contains(path[0])) {
            return;
        }
        this._zone.run((/**
         * @return {?}
         */
        () => this.outsideClick.emit()));
    }
    /**
     * @private
     * @param {?} items
     * @param {?} firstChange
     * @return {?}
     */
    _onItemsChange(items, firstChange) {
        this.items = items || [];
        this._scrollToEndFired = false;
        this.itemsLength = items.length;
        if (this.virtualScroll) {
            this._updateItemsRange(firstChange);
        }
        else {
            this._updateItems(firstChange);
        }
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    _updateItems(firstChange) {
        this.update.emit(this.items);
        if (firstChange === false) {
            return;
        }
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            Promise.resolve().then((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const panelHeight = this._scrollablePanel.clientHeight;
                this._panelService.setDimensions(0, panelHeight);
                this._handleDropdownPosition();
                this.scrollTo(this.markedItem, firstChange);
            }));
        }));
    }
    /**
     * @private
     * @param {?} firstChange
     * @return {?}
     */
    _updateItemsRange(firstChange) {
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._measureDimensions().then((/**
             * @return {?}
             */
            () => {
                if (firstChange) {
                    this._renderItemsRange(this._startOffset);
                    this._handleDropdownPosition();
                }
                else {
                    this._renderItemsRange();
                }
            }));
        }));
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    _onContentScrolled(scrollTop) {
        if (this.virtualScroll) {
            this._renderItemsRange(scrollTop);
        }
        this._lastScrollPosition = scrollTop;
        this._fireScrollToEnd(scrollTop);
    }
    /**
     * @private
     * @param {?} height
     * @return {?}
     */
    _updateVirtualHeight(height) {
        if (this._updateScrollHeight) {
            this._virtualPadding.style.height = `${height}px`;
            this._updateScrollHeight = false;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _onItemsLengthChanged() {
        this._updateScrollHeight = true;
    }
    /**
     * @private
     * @param {?=} scrollTop
     * @return {?}
     */
    _renderItemsRange(scrollTop = null) {
        if (scrollTop && this._lastScrollPosition === scrollTop) {
            return;
        }
        scrollTop = scrollTop || this._scrollablePanel.scrollTop;
        /** @type {?} */
        const range = this._panelService.calculateItems(scrollTop, this.itemsLength, this.bufferAmount);
        this._updateVirtualHeight(range.scrollHeight);
        this._contentPanel.style.transform = `translateY(${range.topPadding}px)`;
        this._zone.run((/**
         * @return {?}
         */
        () => {
            this.update.emit(this.items.slice(range.start, range.end));
            this.scroll.emit({ start: range.start, end: range.end });
        }));
        if (isDefined(scrollTop) && this._lastScrollPosition === 0) {
            this._scrollablePanel.scrollTop = scrollTop;
            this._lastScrollPosition = scrollTop;
        }
    }
    /**
     * @private
     * @return {?}
     */
    _measureDimensions() {
        if (this._panelService.dimensions.itemHeight > 0 || this.itemsLength === 0) {
            return Promise.resolve(this._panelService.dimensions);
        }
        const [first] = this.items;
        this.update.emit([first]);
        return Promise.resolve().then((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const option = this._dropdown.querySelector(`#${first.htmlId}`);
            /** @type {?} */
            const optionHeight = option.clientHeight;
            this._virtualPadding.style.height = `${optionHeight * this.itemsLength}px`;
            /** @type {?} */
            const panelHeight = this._scrollablePanel.clientHeight;
            this._panelService.setDimensions(optionHeight, panelHeight);
            return this._panelService.dimensions;
        }));
    }
    /**
     * @private
     * @param {?} scrollTop
     * @return {?}
     */
    _fireScrollToEnd(scrollTop) {
        if (this._scrollToEndFired || scrollTop === 0) {
            return;
        }
        /** @type {?} */
        const padding = this.virtualScroll ?
            this._virtualPadding :
            this._contentPanel;
        if (scrollTop + this._dropdown.clientHeight >= padding.clientHeight) {
            this._zone.run((/**
             * @return {?}
             */
            () => this.scrollToEnd.emit()));
            this._scrollToEndFired = true;
        }
    }
    /**
     * @private
     * @param {?} dropdownEl
     * @return {?}
     */
    _calculateCurrentPosition(dropdownEl) {
        if (this.position !== 'auto') {
            return this.position;
        }
        /** @type {?} */
        const selectRect = this._select.getBoundingClientRect();
        /** @type {?} */
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        /** @type {?} */
        const offsetTop = selectRect.top + window.pageYOffset;
        /** @type {?} */
        const height = selectRect.height;
        /** @type {?} */
        const dropdownHeight = dropdownEl.getBoundingClientRect().height;
        if (offsetTop + height + dropdownHeight > scrollTop + document.documentElement.clientHeight) {
            return 'top';
        }
        else {
            return 'bottom';
        }
    }
    /**
     * @private
     * @return {?}
     */
    _appendDropdown() {
        if (!this.appendTo) {
            return;
        }
        this._parent = document.querySelector(this.appendTo);
        if (!parent) {
            throw new Error(`appendTo selector ${this.appendTo} did not found any parent element`);
        }
        this._parent.appendChild(this._dropdown);
    }
    /**
     * @private
     * @return {?}
     */
    _updatePosition() {
        /** @type {?} */
        const select = this._select.getBoundingClientRect();
        /** @type {?} */
        const parent = this._parent.getBoundingClientRect();
        /** @type {?} */
        const offsetLeft = select.left - parent.left;
        this._setOffset(parent, select);
        this._dropdown.style.left = offsetLeft + 'px';
        this._dropdown.style.width = select.width + 'px';
        this._dropdown.style.minWidth = select.width + 'px';
    }
    /**
     * @private
     * @param {?} parent
     * @param {?} select
     * @return {?}
     */
    _setOffset(parent, select) {
        /** @type {?} */
        const delta = select.height;
        if (this._currentPosition === 'top') {
            /** @type {?} */
            const offsetBottom = parent.bottom - select.bottom;
            this._dropdown.style.bottom = offsetBottom + delta + 'px';
            this._dropdown.style.top = 'auto';
        }
        else if (this._currentPosition === 'bottom') {
            /** @type {?} */
            const offsetTop = select.top - parent.top;
            this._dropdown.style.top = offsetTop + delta + 'px';
            this._dropdown.style.bottom = 'auto';
        }
    }
}
NgDropdownPanelComponent.ɵfac = function NgDropdownPanelComponent_Factory(t) { return new (t || NgDropdownPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgDropdownPanelService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT, 8)); };
NgDropdownPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgDropdownPanelComponent, selectors: [["ng-dropdown-panel"]], viewQuery: function NgDropdownPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.contentElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollElementRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paddingElementRef = _t.first);
    } }, hostBindings: function NgDropdownPanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgDropdownPanelComponent_mousedown_HostBindingHandler($event) { return ctx.handleMousedown($event); });
    } }, inputs: { items: "items", position: "position", virtualScroll: "virtualScroll", filterValue: "filterValue", markedItem: "markedItem", appendTo: "appendTo", bufferAmount: "bufferAmount", headerTemplate: "headerTemplate", footerTemplate: "footerTemplate" }, outputs: { update: "update", scroll: "scroll", scrollToEnd: "scrollToEnd", outsideClick: "outsideClick" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 9, vars: 6, consts: [["class", "ng-dropdown-header", 4, "ngIf"], [1, "ng-dropdown-panel-items", "scroll-host"], ["scroll", ""], ["padding", ""], ["content", ""], ["class", "ng-dropdown-footer", 4, "ngIf"], [1, "ng-dropdown-header"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ng-dropdown-footer"]], template: function NgDropdownPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgDropdownPanelComponent_div_0_Template, 2, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", null, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NgDropdownPanelComponent_div_8_Template, 2, 4, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.headerTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("total-padding", ctx.virtualScroll);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrollable-content", ctx.virtualScroll && ctx.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.footerTemplate);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgDropdownPanelComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: NgDropdownPanelService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT,] }] }
];
NgDropdownPanelComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    markedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    position: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    filterValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    update: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    outsideClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    contentElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }],
    scrollElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }],
    paddingElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true },] }],
    handleMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['mousedown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgDropdownPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                selector: 'ng-dropdown-panel',
                template: `
        <div *ngIf="headerTemplate" class="ng-dropdown-header">
            <ng-container [ngTemplateOutlet]="headerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
        <div #scroll class="ng-dropdown-panel-items scroll-host">
            <div #padding [class.total-padding]="virtualScroll"></div>
            <div #content [class.scrollable-content]="virtualScroll && items.length">
                <ng-content></ng-content>
            </div>
        </div>
        <div *ngIf="footerTemplate" class="ng-dropdown-footer">
            <ng-container [ngTemplateOutlet]="footerTemplate" [ngTemplateOutletContext]="{ searchTerm: filterValue }"></ng-container>
        </div>
    `
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: NgDropdownPanelService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT]
            }] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], filterValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], outsideClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['mousedown', ['$event']]
        }], markedItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], contentElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['content', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }], scrollElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['scroll', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }], paddingElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['padding', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgOptionComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.stateChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._disabled = false;
    }
    /**
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) { this._disabled = this._isDisabled(value); }
    /**
     * @return {?}
     */
    get label() {
        return (this.elementRef.nativeElement.textContent || '').trim();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.disabled) {
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.label !== this._previousLabel) {
            this._previousLabel = this.label;
            this.stateChange$.next({
                value: this.value,
                disabled: this._disabled,
                label: this.elementRef.nativeElement.innerHTML
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChange$.complete();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isDisabled(value) {
        return value != null && `${value}` !== 'false';
    }
}
NgOptionComponent.ɵfac = function NgOptionComponent_Factory(t) { return new (t || NgOptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
NgOptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOptionComponent, selectors: [["ng-option"]], inputs: { disabled: "disabled", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c4, decls: 1, vars: 0, template: function NgOptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgOptionComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }
];
NgOptionComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ng-option',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                template: `<ng-content></ng-content>`
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }]; }, { disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgSelectConfig {
    constructor() {
        this.notFoundText = 'No items found';
        this.typeToSearchText = 'Type to search';
        this.addTagText = 'Add item';
        this.loadingText = 'Loading...';
        this.clearAllText = 'Clear all';
        this.disableVirtualScroll = true;
        this.openOnEnter = true;
        this.appearance = 'underline';
    }
}
NgSelectConfig.ɵfac = function NgSelectConfig_Factory(t) { return new (t || NgSelectConfig)(); };
NgSelectConfig.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgSelectConfig, factory: NgSelectConfig.ɵfac, providedIn: 'root' });
/** @nocollapse */ NgSelectConfig.ngInjectableDef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgSelectConfig_Factory() { return new NgSelectConfig(); }, token: NgSelectConfig, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECTION_MODEL_FACTORY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ng-select-selection-model');
class NgSelectComponent {
    /**
     * @param {?} classes
     * @param {?} autoFocus
     * @param {?} config
     * @param {?} newSelectionModel
     * @param {?} _elementRef
     * @param {?} _cd
     * @param {?} _console
     */
    constructor(classes, autoFocus, config, newSelectionModel, _elementRef, _cd, _console) {
        this.classes = classes;
        this.autoFocus = autoFocus;
        this._cd = _cd;
        this._console = _console;
        this.markFirst = true;
        this.dropdownPosition = 'auto';
        this.loading = false;
        this.closeOnSelect = true;
        this.hideSelected = false;
        this.selectOnTab = false;
        this.bufferAmount = 4;
        this.selectableGroup = false;
        this.selectableGroupAsModel = true;
        this.searchFn = null;
        this.trackByFn = null;
        this.clearOnBackspace = true;
        this.labelForId = null;
        this.inputAttrs = {};
        this.readonly = false;
        this.searchWhileComposing = true;
        this.minTermLength = 0;
        this.editableSearchTerm = false;
        this.keyDownFn = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => true);
        this.multiple = false;
        this.addTag = false;
        this.searchable = true;
        this.clearable = true;
        this.isOpen = false;
        // output events
        this.blurEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focusEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.searchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.clearEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.addEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.removeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scroll = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.scrollToEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.viewPortItems = [];
        this.searchTerm = null;
        this.dropdownId = newId();
        this.escapeHTML = true;
        this.useDefaultClass = true;
        this._items = [];
        this._defaultLabel = 'label';
        this._pressedKeys = [];
        this._isComposing = false;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._keyPress$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this._onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._onTouched = (/**
         * @return {?}
         */
        () => { });
        this.clearItem = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            /** @type {?} */
            const option = this.selectedItems.find((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value === item));
            this.unselect(option);
        });
        this.trackByOption = (/**
         * @param {?} _
         * @param {?} item
         * @return {?}
         */
        (_, item) => {
            if (this.trackByFn) {
                return this.trackByFn(item.value);
            }
            return item;
        });
        this._mergeGlobalConfig(config);
        this.itemsList = new ItemsList(this, newSelectionModel());
        this.element = _elementRef.nativeElement;
    }
    /**
     * @return {?}
     */
    get items() { return this._items; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set items(value) {
        this._itemsAreUsed = true;
        this._items = value;
    }
    ;
    /**
     * @return {?}
     */
    get compareWith() { return this._compareWith; }
    /**
     * @param {?} fn
     * @return {?}
     */
    set compareWith(fn) {
        if (!isFunction(fn)) {
            throw Error('`compareWith` must be a function.');
        }
        this._compareWith = fn;
    }
    /**
     * @return {?}
     */
    get clearSearchOnAdd() { return isDefined(this._clearSearchOnAdd) ? this._clearSearchOnAdd : this.closeOnSelect; }
    ;
    /**
     * @param {?} value
     * @return {?}
     */
    set clearSearchOnAdd(value) {
        this._clearSearchOnAdd = value;
    }
    ;
    /**
     * @return {?}
     */
    get disabled() { return this.readonly || this._disabled; }
    ;
    /**
     * @return {?}
     */
    get filtered() { return (!!this.searchTerm && this.searchable || this._isComposing); }
    ;
    /**
     * @private
     * @return {?}
     */
    get _editableSearchTerm() {
        return this.editableSearchTerm && !this.multiple;
    }
    /**
     * @return {?}
     */
    get selectedItems() {
        return this.itemsList.selectedItems;
    }
    /**
     * @return {?}
     */
    get selectedValues() {
        return this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return this.selectedItems.length > 0;
    }
    /**
     * @return {?}
     */
    get currentPanelPosition() {
        if (this.dropdownPanel) {
            return this.dropdownPanel.currentPosition;
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._handleKeyPresses();
        this._setInputAttributes();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.multiple) {
            this.itemsList.clearSelected();
        }
        if (changes.items) {
            this._setItems(changes.items.currentValue || []);
        }
        if (changes.isOpen) {
            this._manualOpen = isDefined(changes.isOpen.currentValue);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this._itemsAreUsed) {
            this.escapeHTML = false;
            this._setItemsFromNgOptions();
        }
        if (isDefined(this.autoFocus)) {
            this.focus();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroy$.next();
        this._destroy$.complete();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown($event) {
        /** @type {?} */
        const keyCode = KeyCode[$event.which];
        if (keyCode) {
            if (this.keyDownFn($event) === false) {
                return;
            }
            this.handleKeyCode($event);
        }
        else if ($event.key && $event.key.length === 1) {
            this._keyPress$.next($event.key.toLocaleLowerCase());
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyCode($event) {
        switch ($event.which) {
            case KeyCode.ArrowDown:
                this._handleArrowDown($event);
                break;
            case KeyCode.ArrowUp:
                this._handleArrowUp($event);
                break;
            case KeyCode.Space:
                this._handleSpace($event);
                break;
            case KeyCode.Enter:
                this._handleEnter($event);
                break;
            case KeyCode.Tab:
                this._handleTab($event);
                break;
            case KeyCode.Esc:
                this.close();
                $event.preventDefault();
                break;
            case KeyCode.Backspace:
                this._handleBackspace();
                break;
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    handleMousedown($event) {
        /** @type {?} */
        const target = (/** @type {?} */ ($event.target));
        if (target.tagName !== 'INPUT') {
            $event.preventDefault();
        }
        if (target.classList.contains('ng-clear-wrapper')) {
            this.handleClearClick();
            return;
        }
        if (target.classList.contains('ng-arrow-wrapper')) {
            this.handleArrowClick();
            return;
        }
        if (target.classList.contains('ng-value-icon')) {
            return;
        }
        if (!this.focused) {
            this.focus();
        }
        if (this.searchable) {
            this.open();
        }
        else {
            this.toggle();
        }
    }
    /**
     * @return {?}
     */
    handleArrowClick() {
        if (this.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    }
    /**
     * @return {?}
     */
    handleClearClick() {
        if (this.hasValue) {
            this.itemsList.clearSelected(true);
            this._updateNgModel();
        }
        this._clearSearch();
        this.focus();
        this.clearEvent.emit();
        this._onSelectionChanged();
    }
    /**
     * @return {?}
     */
    clearModel() {
        if (!this.clearable) {
            return;
        }
        this.itemsList.clearSelected();
        this._updateNgModel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.itemsList.clearSelected();
        this._handleWriteValue(value);
        this._cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    setDisabledState(state) {
        this._disabled = state;
        this._cd.markForCheck();
    }
    /**
     * @return {?}
     */
    toggle() {
        if (!this.isOpen) {
            this.open();
        }
        else {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    open() {
        if (this.disabled || this.isOpen || this.itemsList.maxItemsSelected || this._manualOpen) {
            return;
        }
        if (!this._isTypeahead && !this.addTag && this.itemsList.noItemsToSelect) {
            return;
        }
        this.isOpen = true;
        this.itemsList.markSelectedOrDefault(this.markFirst);
        this.openEvent.emit();
        if (!this.searchTerm) {
            this.focus();
        }
        this.detectChanges();
    }
    /**
     * @return {?}
     */
    close() {
        if (!this.isOpen || this._manualOpen) {
            return;
        }
        this.isOpen = false;
        if (!this._editableSearchTerm) {
            this._clearSearch();
        }
        else {
            this.itemsList.resetFilteredItems();
        }
        this.itemsList.unmarkItem();
        this._onTouched();
        this.closeEvent.emit();
        this._cd.markForCheck();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    toggleItem(item) {
        if (!item || item.disabled || this.disabled) {
            return;
        }
        if (this.multiple && item.selected) {
            this.unselect(item);
        }
        else {
            this.select(item);
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this._onSelectionChanged();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    select(item) {
        if (!item.selected) {
            this.itemsList.select(item);
            if (this.clearSearchOnAdd && !this._editableSearchTerm) {
                this._clearSearch();
            }
            this._updateNgModel();
            if (this.multiple) {
                this.addEvent.emit(item.value);
            }
        }
        if (this.closeOnSelect || this.itemsList.noItemsToSelect) {
            this.close();
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.searchInput.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.searchInput.nativeElement.blur();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    unselect(item) {
        if (!item) {
            return;
        }
        this.itemsList.unselect(item);
        this.focus();
        this._updateNgModel();
        this.removeEvent.emit(item);
    }
    /**
     * @return {?}
     */
    selectTag() {
        /** @type {?} */
        let tag;
        if (isFunction(this.addTag)) {
            tag = ((/** @type {?} */ (this.addTag)))(this.searchTerm);
        }
        else {
            tag = this._primitive ? this.searchTerm : { [this.bindLabel]: this.searchTerm };
        }
        /** @type {?} */
        const handleTag = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => this._isTypeahead || !this.isOpen ? this.itemsList.mapItem(item, null) : this.itemsList.addItem(item));
        if (isPromise(tag)) {
            tag.then((/**
             * @param {?} item
             * @return {?}
             */
            item => this.select(handleTag(item)))).catch((/**
             * @return {?}
             */
            () => { }));
        }
        else if (tag) {
            this.select(handleTag(tag));
        }
    }
    /**
     * @return {?}
     */
    showClear() {
        return this.clearable && (this.hasValue || this.searchTerm) && !this.disabled;
    }
    /**
     * @return {?}
     */
    get showAddTag() {
        if (!this._validTerm) {
            return false;
        }
        /** @type {?} */
        const term = this.searchTerm.toLowerCase().trim();
        return this.addTag &&
            (!this.itemsList.filteredItems.some((/**
             * @param {?} x
             * @return {?}
             */
            x => x.label.toLowerCase() === term)) &&
                (!this.hideSelected && this.isOpen || !this.selectedItems.some((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.label.toLowerCase() === term)))) &&
            !this.loading;
    }
    /**
     * @return {?}
     */
    showNoItemsFound() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return ((empty && !this._isTypeahead && !this.loading) ||
            (empty && this._isTypeahead && this._validTerm && !this.loading)) &&
            !this.showAddTag;
    }
    /**
     * @return {?}
     */
    showTypeToSearch() {
        /** @type {?} */
        const empty = this.itemsList.filteredItems.length === 0;
        return empty && this._isTypeahead && !this._validTerm && !this.loading;
    }
    /**
     * @return {?}
     */
    onCompositionStart() {
        this._isComposing = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onCompositionEnd(term) {
        this._isComposing = false;
        if (this.searchWhileComposing) {
            return;
        }
        this.filter(term);
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        if (this._isComposing && !this.searchWhileComposing) {
            return;
        }
        this.searchTerm = term;
        if (this._isTypeahead && (this._validTerm || this.minTermLength === 0)) {
            this.typeahead.next(term);
        }
        if (!this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
            if (this.isOpen) {
                this.itemsList.markSelectedOrDefault(this.markFirst);
            }
        }
        this.searchEvent.emit({ term, items: this.itemsList.filteredItems.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.value)) });
        this.open();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputFocus($event) {
        if (this.focused) {
            return;
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.element.classList.add('ng-select-focused');
        this.focusEvent.emit($event);
        this.focused = true;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onInputBlur($event) {
        this.element.classList.remove('ng-select-focused');
        this.blurEvent.emit($event);
        if (!this.isOpen && !this.disabled) {
            this._onTouched();
        }
        if (this._editableSearchTerm) {
            this._setSearchTermFromItems();
        }
        this.focused = false;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onItemHover(item) {
        if (item.disabled) {
            return;
        }
        this.itemsList.markItem(item);
    }
    /**
     * @return {?}
     */
    detectChanges() {
        if (!((/** @type {?} */ (this._cd))).destroyed) {
            this._cd.detectChanges();
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setSearchTermFromItems() {
        /** @type {?} */
        const selected = this.selectedItems && this.selectedItems[0];
        this.searchTerm = (selected && selected.label) || null;
    }
    /**
     * @private
     * @param {?} items
     * @return {?}
     */
    _setItems(items) {
        /** @type {?} */
        const firstItem = items[0];
        this.bindLabel = this.bindLabel || this._defaultLabel;
        this._primitive = isDefined(firstItem) ? !isObject(firstItem) : this._primitive || this.bindLabel === this._defaultLabel;
        this.itemsList.setItems(items);
        if (items.length > 0 && this.hasValue) {
            this.itemsList.mapSelectedItems();
        }
        if (this.isOpen && isDefined(this.searchTerm) && !this._isTypeahead) {
            this.itemsList.filter(this.searchTerm);
        }
        if (this._isTypeahead || this.isOpen) {
            this.itemsList.markSelectedOrDefault(this.markFirst);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _setItemsFromNgOptions() {
        /** @type {?} */
        const mapNgOptions = (/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            this.items = options.map((/**
             * @param {?} option
             * @return {?}
             */
            option => ({
                $ngOptionValue: option.value,
                $ngOptionLabel: option.elementRef.nativeElement.innerHTML,
                disabled: option.disabled
            })));
            this.itemsList.setItems(this.items);
            if (this.hasValue) {
                this.itemsList.mapSelectedItems();
            }
            this.detectChanges();
        });
        /** @type {?} */
        const handleOptionChange = (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const changedOrDestroyed = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.ngOptions.changes, this._destroy$);
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(...this.ngOptions.map((/**
             * @param {?} option
             * @return {?}
             */
            option => option.stateChange$)))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(changedOrDestroyed))
                .subscribe((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const item = this.itemsList.findItem(option.value);
                item.disabled = option.disabled;
                item.label = option.label || item.label;
                this._cd.detectChanges();
            }));
        });
        this.ngOptions.changes
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(this.ngOptions), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$))
            .subscribe((/**
         * @param {?} options
         * @return {?}
         */
        options => {
            this.bindLabel = this._defaultLabel;
            mapNgOptions(options);
            handleOptionChange();
        }));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _isValidWriteValue(value) {
        if (!isDefined(value) || (this.multiple && value === '') || Array.isArray(value) && value.length === 0) {
            return false;
        }
        /** @type {?} */
        const validateBinding = (/**
         * @param {?} item
         * @return {?}
         */
        (item) => {
            if (!isDefined(this.compareWith) && isObject(item) && this.bindValue) {
                this._console.warn(`Binding object(${JSON.stringify(item)}) with bindValue is not allowed.`);
                return false;
            }
            return true;
        });
        if (this.multiple) {
            if (!Array.isArray(value)) {
                this._console.warn('Multiple select ngModel should be array.');
                return false;
            }
            return value.every((/**
             * @param {?} item
             * @return {?}
             */
            item => validateBinding(item)));
        }
        else {
            return validateBinding(value);
        }
    }
    /**
     * @private
     * @param {?} ngModel
     * @return {?}
     */
    _handleWriteValue(ngModel) {
        if (!this._isValidWriteValue(ngModel)) {
            return;
        }
        /** @type {?} */
        const select = (/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            /** @type {?} */
            let item = this.itemsList.findItem(val);
            if (item) {
                this.itemsList.select(item);
            }
            else {
                /** @type {?} */
                const isValObject = isObject(val);
                /** @type {?} */
                const isPrimitive = !isValObject && !this.bindValue;
                if ((isValObject || isPrimitive)) {
                    this.itemsList.select(this.itemsList.mapItem(val, null));
                }
                else if (this.bindValue) {
                    item = {
                        [this.bindLabel]: null,
                        [this.bindValue]: val
                    };
                    this.itemsList.select(this.itemsList.mapItem(item, null));
                }
            }
        });
        if (this.multiple) {
            ((/** @type {?} */ (ngModel))).forEach((/**
             * @param {?} item
             * @return {?}
             */
            item => select(item)));
        }
        else {
            select(ngModel);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _handleKeyPresses() {
        if (this.searchable) {
            return;
        }
        this._keyPress$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)((/**
         * @param {?} letter
         * @return {?}
         */
        letter => this._pressedKeys.push(letter))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.filter)((/**
         * @return {?}
         */
        () => this._pressedKeys.length > 0)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.map)((/**
         * @return {?}
         */
        () => this._pressedKeys.join(''))))
            .subscribe((/**
         * @param {?} term
         * @return {?}
         */
        term => {
            /** @type {?} */
            const item = this.itemsList.findByLabel(term);
            if (item) {
                if (this.isOpen) {
                    this.itemsList.markItem(item);
                    this._cd.markForCheck();
                }
                else {
                    this.select(item);
                }
            }
            this._pressedKeys = [];
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _setInputAttributes() {
        /** @type {?} */
        const input = this.searchInput.nativeElement;
        /** @type {?} */
        const attributes = Object.assign({ type: 'text', autocorrect: 'off', autocapitalize: 'off', autocomplete: this.labelForId ? 'off' : this.dropdownId }, this.inputAttrs);
        for (const key of Object.keys(attributes)) {
            input.setAttribute(key, attributes[key]);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _updateNgModel() {
        /** @type {?} */
        const model = [];
        for (const item of this.selectedItems) {
            if (this.bindValue) {
                /** @type {?} */
                let value = null;
                if (item.children) {
                    /** @type {?} */
                    const groupKey = this.groupValue ? this.bindValue : (/** @type {?} */ (this.groupBy));
                    value = item.value[groupKey || (/** @type {?} */ (this.groupBy))];
                }
                else {
                    value = this.itemsList.resolveNested(item.value, this.bindValue);
                }
                model.push(value);
            }
            else {
                model.push(item.value);
            }
        }
        /** @type {?} */
        const selected = this.selectedItems.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.value));
        if (this.multiple) {
            this._onChange(model);
            this.changeEvent.emit(selected);
        }
        else {
            this._onChange(isDefined(model[0]) ? model[0] : null);
            this.changeEvent.emit(selected[0]);
        }
        this._cd.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    _clearSearch() {
        if (!this.searchTerm) {
            return;
        }
        this._changeSearch(null);
        this.itemsList.resetFilteredItems();
    }
    /**
     * @private
     * @param {?} searchTerm
     * @return {?}
     */
    _changeSearch(searchTerm) {
        this.searchTerm = searchTerm;
        if (this._isTypeahead) {
            this.typeahead.next(searchTerm);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToMarked() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollTo(this.itemsList.markedItem);
    }
    /**
     * @private
     * @return {?}
     */
    _scrollToTag() {
        if (!this.isOpen || !this.dropdownPanel) {
            return;
        }
        this.dropdownPanel.scrollToTag();
    }
    /**
     * @private
     * @return {?}
     */
    _onSelectionChanged() {
        if (this.isOpen && this.multiple && this.appendTo) {
            // Make sure items are rendered.
            this._cd.detectChanges();
            this.dropdownPanel.adjustPosition();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleTab($event) {
        if (this.isOpen === false && !this.addTag) {
            return;
        }
        if (this.selectOnTab) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
                $event.preventDefault();
            }
            else if (this.showAddTag) {
                this.selectTag();
                $event.preventDefault();
            }
            else {
                this.close();
            }
        }
        else {
            this.close();
        }
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleEnter($event) {
        if (this.isOpen || this._manualOpen) {
            if (this.itemsList.markedItem) {
                this.toggleItem(this.itemsList.markedItem);
            }
            else if (this.showAddTag) {
                this.selectTag();
            }
        }
        else if (this.openOnEnter) {
            this.open();
        }
        else {
            return;
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleSpace($event) {
        if (this.isOpen || this._manualOpen) {
            return;
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowDown($event) {
        if (this._nextItemIsTag(+1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markNextItem();
            this._scrollToMarked();
        }
        this.open();
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} $event
     * @return {?}
     */
    _handleArrowUp($event) {
        if (!this.isOpen) {
            return;
        }
        if (this._nextItemIsTag(-1)) {
            this.itemsList.unmarkItem();
            this._scrollToTag();
        }
        else {
            this.itemsList.markPreviousItem();
            this._scrollToMarked();
        }
        $event.preventDefault();
    }
    /**
     * @private
     * @param {?} nextStep
     * @return {?}
     */
    _nextItemIsTag(nextStep) {
        /** @type {?} */
        const nextIndex = this.itemsList.markedIndex + nextStep;
        return this.addTag && this.searchTerm
            && this.itemsList.markedItem
            && (nextIndex < 0 || nextIndex === this.itemsList.filteredItems.length);
    }
    /**
     * @private
     * @return {?}
     */
    _handleBackspace() {
        if (this.searchTerm || !this.clearable || !this.clearOnBackspace || !this.hasValue) {
            return;
        }
        if (this.multiple) {
            this.unselect(this.itemsList.lastSelectedItem);
        }
        else {
            this.clearModel();
        }
    }
    /**
     * @private
     * @return {?}
     */
    get _isTypeahead() {
        return this.typeahead && this.typeahead.observers.length > 0;
    }
    /**
     * @private
     * @return {?}
     */
    get _validTerm() {
        /** @type {?} */
        const term = this.searchTerm && this.searchTerm.trim();
        return term && term.length >= this.minTermLength;
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    _mergeGlobalConfig(config) {
        this.placeholder = this.placeholder || config.placeholder;
        this.notFoundText = this.notFoundText || config.notFoundText;
        this.typeToSearchText = this.typeToSearchText || config.typeToSearchText;
        this.addTagText = this.addTagText || config.addTagText;
        this.loadingText = this.loadingText || config.loadingText;
        this.clearAllText = this.clearAllText || config.clearAllText;
        this.virtualScroll = isDefined(this.virtualScroll)
            ? this.virtualScroll
            : isDefined(config.disableVirtualScroll) ? !config.disableVirtualScroll : false;
        this.openOnEnter = isDefined(this.openOnEnter) ? this.openOnEnter : config.openOnEnter;
        this.appendTo = this.appendTo || config.appendTo;
        this.bindValue = this.bindValue || config.bindValue;
        this.appearance = this.appearance || config.appearance;
    }
}
NgSelectComponent.ɵfac = function NgSelectComponent_Factory(t) { return new (t || NgSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('class'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('autofocus'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](NgSelectConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_MODEL_FACTORY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ConsoleService)); };
NgSelectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSelectComponent, selectors: [["ng-select"]], contentQueries: function NgSelectComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptgroupTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgMultiLabelTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgHeaderTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgFooterTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgNotFoundTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTypeToSearchTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingTextTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgTagTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgLoadingSpinnerTemplateDirective, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, NgOptionComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optionTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.optgroupTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.labelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiLabelTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.headerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.footerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.notFoundTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeToSearchTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingTextTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tagTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loadingSpinnerTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ngOptions = _t);
    } }, viewQuery: function NgSelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](NgDropdownPanelComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dropdownPanel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchInput = _t.first);
    } }, hostAttrs: ["role", "listbox"], hostVars: 20, hostBindings: function NgSelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgSelectComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyDown($event); });
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-select", ctx.useDefaultClass)("ng-select-single", !ctx.multiple)("ng-select-multiple", ctx.multiple)("ng-select-taggable", ctx.addTag)("ng-select-searchable", ctx.searchable)("ng-select-clearable", ctx.clearable)("ng-select-opened", ctx.isOpen)("ng-select-disabled", ctx.disabled)("ng-select-filtered", ctx.filtered)("ng-select-typeahead", ctx.typeahead);
    } }, inputs: { markFirst: "markFirst", dropdownPosition: "dropdownPosition", loading: "loading", closeOnSelect: "closeOnSelect", hideSelected: "hideSelected", selectOnTab: "selectOnTab", bufferAmount: "bufferAmount", selectableGroup: "selectableGroup", selectableGroupAsModel: "selectableGroupAsModel", searchFn: "searchFn", trackByFn: "trackByFn", clearOnBackspace: "clearOnBackspace", labelForId: "labelForId", inputAttrs: "inputAttrs", readonly: "readonly", searchWhileComposing: "searchWhileComposing", minTermLength: "minTermLength", editableSearchTerm: "editableSearchTerm", keyDownFn: "keyDownFn", multiple: "multiple", addTag: "addTag", searchable: "searchable", clearable: "clearable", isOpen: "isOpen", items: "items", compareWith: "compareWith", clearSearchOnAdd: "clearSearchOnAdd", bindLabel: "bindLabel", placeholder: "placeholder", notFoundText: "notFoundText", typeToSearchText: "typeToSearchText", addTagText: "addTagText", loadingText: "loadingText", clearAllText: "clearAllText", virtualScroll: "virtualScroll", openOnEnter: "openOnEnter", appendTo: "appendTo", bindValue: "bindValue", appearance: "appearance", maxSelectedItems: "maxSelectedItems", groupBy: "groupBy", groupValue: "groupValue", tabIndex: "tabIndex", typeahead: "typeahead" }, outputs: { blurEvent: "blur", focusEvent: "focus", changeEvent: "change", openEvent: "open", closeEvent: "close", searchEvent: "search", clearEvent: "clear", addEvent: "add", removeEvent: "remove", scroll: "scroll", scrollToEnd: "scrollToEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => NgSelectComponent)),
                multi: true
            }, NgDropdownPanelService]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 14, vars: 18, consts: [[1, "ng-select-container", 3, "mousedown"], [1, "ng-value-container"], [1, "ng-placeholder"], [4, "ngIf"], [1, "ng-input"], ["role", "combobox", 3, "readOnly", "disabled", "value", "input", "compositionstart", "compositionend", "focus", "blur", "change"], ["searchInput", ""], ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"], [1, "ng-arrow-wrapper"], [1, "ng-arrow"], ["class", "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ng-select-multiple", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick", 4, "ngIf"], ["class", "ng-value", 3, "ng-value-disabled", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "ng-value"], ["defaultLabelTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"], [1, "ng-value-label", 3, "ngItemLabel", "escape"], ["defaultLoadingSpinnerTemplate", ""], [3, "ngTemplateOutlet"], [1, "ng-spinner-loader"], [1, "ng-clear-wrapper", 3, "title"], ["aria-hidden", "true", 1, "ng-clear"], [1, "ng-dropdown-panel", 3, "virtualScroll", "bufferAmount", "appendTo", "position", "headerTemplate", "footerTemplate", "filterValue", "items", "markedItem", "ngClass", "id", "update", "scroll", "scrollToEnd", "outsideClick"], ["class", "ng-option", 3, "ng-option-disabled", "ng-option-selected", "ng-optgroup", "ng-option", "ng-option-child", "ng-option-marked", "click", "mouseover", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "ng-option", "role", "option", 3, "ng-option-marked", "mouseover", "click", 4, "ngIf"], [1, "ng-option", 3, "click", "mouseover"], ["defaultOptionTemplate", ""], [1, "ng-option-label", 3, "ngItemLabel", "escape"], ["role", "option", 1, "ng-option", 3, "mouseover", "click"], ["defaultTagTemplate", ""], [1, "ng-tag-label"], ["defaultNotFoundTemplate", ""], [1, "ng-option", "ng-option-disabled"], ["defaultTypeToSearchTemplate", ""], ["defaultLoadingTextTemplate", ""]], template: function NgSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function NgSelectComponent_Template_div_mousedown_0_listener($event) { return ctx.handleMousedown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgSelectComponent_ng_container_4_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NgSelectComponent_5_Template, 1, 5, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function NgSelectComponent_Template_input_input_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.filter(_r2.value); })("compositionstart", function NgSelectComponent_Template_input_compositionstart_7_listener() { return ctx.onCompositionStart(); })("compositionend", function NgSelectComponent_Template_input_compositionend_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.onCompositionEnd(_r2.value); })("focus", function NgSelectComponent_Template_input_focus_7_listener($event) { return ctx.onInputFocus($event); })("blur", function NgSelectComponent_Template_input_blur_7_listener($event) { return ctx.onInputBlur($event); })("change", function NgSelectComponent_Template_input_change_7_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NgSelectComponent_ng_container_9_Template, 4, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NgSelectComponent_span_10_Template, 3, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NgSelectComponent_ng_dropdown_panel_13_Template, 7, 19, "ng-dropdown-panel", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ng-appearance-outline", ctx.appearance === "outline")("ng-has-value", ctx.hasValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.multiLabelTemplate && ctx.selectedItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multiLabelTemplate && ctx.selectedValues.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readOnly", !ctx.searchable || ctx.itemsList.maxItemsSelected)("disabled", ctx.disabled)("value", ctx.searchTerm ? ctx.searchTerm : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.labelForId)("tabindex", ctx.tabIndex)("aria-expanded", ctx.isOpen)("aria-owns", ctx.isOpen ? ctx.dropdownId : null)("aria-activedescendant", ctx.isOpen ? ctx.itemsList == null ? null : ctx.itemsList.markedItem == null ? null : ctx.itemsList.markedItem.htmlId : null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showClear());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgTemplateOutlet, NgItemLabelDirective, NgDropdownPanelComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass], styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"], encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgSelectComponent.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['class',] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute, args: ['autofocus',] }] },
    { type: NgSelectConfig },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [SELECTION_MODEL_FACTORY,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: ConsoleService }
];
NgSelectComponent.propDecorators = {
    bindLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bindValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    markFirst: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeholder: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    notFoundText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    typeToSearchText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    addTagText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loadingText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearAllText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appearance: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dropdownPosition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    appendTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    loading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    closeOnSelect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hideSelected: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectOnTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    openOnEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    maxSelectedItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    groupValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    bufferAmount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    virtualScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectableGroup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    selectableGroupAsModel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    searchFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    trackByFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearOnBackspace: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    labelForId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    inputAttrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    readonly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    searchWhileComposing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    minTermLength: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    editableSearchTerm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    keyDownFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    typeahead: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-typeahead',] }],
    multiple: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-multiple',] }],
    addTag: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-taggable',] }],
    searchable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-searchable',] }],
    clearable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-clearable',] }],
    isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-opened',] }],
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    compareWith: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearSearchOnAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    blurEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['blur',] }],
    focusEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['focus',] }],
    changeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['change',] }],
    openEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['open',] }],
    closeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['close',] }],
    searchEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['search',] }],
    clearEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['clear',] }],
    addEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['add',] }],
    removeEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['remove',] }],
    scroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['scroll',] }],
    scrollToEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output, args: ['scrollToEnd',] }],
    optionTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    optgroupTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    labelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    multiLabelTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    headerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    footerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    notFoundTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    typeToSearchTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    loadingTextTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    tagTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    loadingSpinnerTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild, args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false },] }],
    dropdownPanel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((/**
                 * @return {?}
                 */
                () => NgDropdownPanelComponent)), { static: false },] }],
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['searchInput', { static: true },] }],
    ngOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren, args: [NgOptionComponent, { descendants: true },] }],
    disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-disabled',] }],
    filtered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding, args: ['class.ng-select-filtered',] }],
    handleKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ng-select',
                template: "<div\n    (mousedown)=\"handleMousedown($event)\"\n    [class.ng-appearance-outline]=\"appearance === 'outline'\"\n    [class.ng-has-value]=\"hasValue\"\n    class=\"ng-select-container\">\n\n    <div class=\"ng-value-container\">\n        <div class=\"ng-placeholder\">{{placeholder}}</div>\n\n        <ng-container *ngIf=\"!multiLabelTemplate && selectedItems.length > 0\">\n            <div [class.ng-value-disabled]=\"item.disabled\" class=\"ng-value\" *ngFor=\"let item of selectedItems; trackBy: trackByOption\">\n                <ng-template #defaultLabelTemplate>\n                    <span class=\"ng-value-icon left\" (click)=\"unselect(item);\" aria-hidden=\"true\">\u00D7</span>\n                    <span class=\"ng-value-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n                </ng-template>\n\n                <ng-template\n                    [ngTemplateOutlet]=\"labelTemplate || defaultLabelTemplate\"\n                    [ngTemplateOutletContext]=\"{ item: item.value, clear: clearItem, label: item.label }\">\n                </ng-template>\n            </div>\n        </ng-container>\n\n        <ng-template *ngIf=\"multiLabelTemplate && selectedValues.length > 0\"\n                [ngTemplateOutlet]=\"multiLabelTemplate\"\n                [ngTemplateOutletContext]=\"{ items: selectedValues, clear: clearItem }\">\n        </ng-template>\n\n        <div class=\"ng-input\">\n            <input #searchInput\n                   [attr.id]=\"labelForId\"\n                   [attr.tabindex]=\"tabIndex\"\n                   [readOnly]=\"!searchable || itemsList.maxItemsSelected\"\n                   [disabled]=\"disabled\"\n                   [value]=\"searchTerm ? searchTerm : ''\"\n                   (input)=\"filter(searchInput.value)\"\n                   (compositionstart)=\"onCompositionStart()\"\n                   (compositionend)=\"onCompositionEnd(searchInput.value)\"\n                   (focus)=\"onInputFocus($event)\"\n                   (blur)=\"onInputBlur($event)\"\n                   (change)=\"$event.stopPropagation()\"\n                   role=\"combobox\"\n                   [attr.aria-expanded]=\"isOpen\"\n                   [attr.aria-owns]=\"isOpen ? dropdownId : null\"\n                   [attr.aria-activedescendant]=\"isOpen ? itemsList?.markedItem?.htmlId : null\">\n        </div>\n    </div>\n\n    <ng-container *ngIf=\"loading\">\n        <ng-template #defaultLoadingSpinnerTemplate>\n            <div class=\"ng-spinner-loader\"></div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingSpinnerTemplate || defaultLoadingSpinnerTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <span *ngIf=\"showClear()\" class=\"ng-clear-wrapper\" title=\"{{clearAllText}}\">\n        <span class=\"ng-clear\" aria-hidden=\"true\">\u00D7</span>\n    </span>\n\n    <span class=\"ng-arrow-wrapper\">\n        <span class=\"ng-arrow\"></span>\n    </span>\n</div>\n\n<ng-dropdown-panel *ngIf=\"isOpen\"\n                   class=\"ng-dropdown-panel\"\n                   [virtualScroll]=\"virtualScroll\"\n                   [bufferAmount]=\"bufferAmount\"\n                   [appendTo]=\"appendTo\"\n                   [position]=\"dropdownPosition\"\n                   [headerTemplate]=\"headerTemplate\"\n                   [footerTemplate]=\"footerTemplate\"\n                   [filterValue]=\"searchTerm\"\n                   [items]=\"itemsList.filteredItems\"\n                   [markedItem]=\"itemsList.markedItem\"\n                   (update)=\"viewPortItems = $event\"\n                   (scroll)=\"scroll.emit($event)\"\n                   (scrollToEnd)=\"scrollToEnd.emit($event)\"\n                   (outsideClick)=\"close()\"\n                   [class.ng-select-multiple]=\"multiple\"\n                   [ngClass]=\"appendTo ? classes : null\"\n                   [id]=\"dropdownId\">\n\n    <ng-container>\n        <div class=\"ng-option\" [attr.role]=\"item.children ? 'group' : 'option'\" (click)=\"toggleItem(item)\" (mouseover)=\"onItemHover(item)\"\n                *ngFor=\"let item of viewPortItems; trackBy: trackByOption\"\n                [class.ng-option-disabled]=\"item.disabled\"\n                [class.ng-option-selected]=\"item.selected\"\n                [class.ng-optgroup]=\"item.children\"\n                [class.ng-option]=\"!item.children\"\n                [class.ng-option-child]=\"!!item.parent\"\n                [class.ng-option-marked]=\"item === itemsList.markedItem\"\n                [attr.aria-selected]=\"item.selected\"\n                [attr.id]=\"item?.htmlId\">\n\n            <ng-template #defaultOptionTemplate>\n                <span class=\"ng-option-label\" [ngItemLabel]=\"item.label\" [escape]=\"escapeHTML\"></span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"item.children ? (optgroupTemplate || defaultOptionTemplate) : (optionTemplate || defaultOptionTemplate)\"\n                [ngTemplateOutletContext]=\"{ item: item.value, item$:item, index: item.index, searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n\n        <div class=\"ng-option\" [class.ng-option-marked]=\"!itemsList.markedItem\" (mouseover)=\"itemsList.unmarkItem()\" role=\"option\" (click)=\"selectTag()\" *ngIf=\"showAddTag\">\n            <ng-template #defaultTagTemplate>\n                <span><span class=\"ng-tag-label\">{{addTagText}}</span>\"{{searchTerm}}\"</span>\n            </ng-template>\n\n            <ng-template\n                [ngTemplateOutlet]=\"tagTemplate || defaultTagTemplate\"\n                [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n            </ng-template>\n        </div>\n    </ng-container>\n\n    <ng-container *ngIf=\"showNoItemsFound()\">\n        <ng-template #defaultNotFoundTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{notFoundText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"notFoundTemplate || defaultNotFoundTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"showTypeToSearch()\">\n        <ng-template #defaultTypeToSearchTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{typeToSearchText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"typeToSearchTemplate || defaultTypeToSearchTemplate\">\n        </ng-template>\n    </ng-container>\n\n    <ng-container *ngIf=\"loading && itemsList.filteredItems.length === 0\">\n        <ng-template #defaultLoadingTextTemplate>\n            <div class=\"ng-option ng-option-disabled\">{{loadingText}}</div>\n        </ng-template>\n\n        <ng-template\n            [ngTemplateOutlet]=\"loadingTextTemplate || defaultLoadingTextTemplate\"\n            [ngTemplateOutletContext]=\"{ searchTerm: searchTerm }\">\n        </ng-template>\n    </ng-container>\n\n</ng-dropdown-panel>\n",
                providers: [{
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => NgSelectComponent)),
                        multi: true
                    }, NgDropdownPanelService],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                host: {
                    'role': 'listbox',
                    '[class.ng-select]': 'useDefaultClass',
                    '[class.ng-select-single]': '!multiple'
                },
                styles: [".ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:-webkit-box;display:flex;outline:0;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:-webkit-box;display:flex;-webkit-box-flex:1;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none;border:0;box-shadow:none;outline:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{-webkit-box-flex:1;flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute;z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-animation:.8s linear infinite load8;animation:.8s linear infinite load8}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@-webkit-keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes load8{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}"]
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['class']
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
                args: ['autofocus']
            }] }, { type: NgSelectConfig }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [SELECTION_MODEL_FACTORY]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: ConsoleService }]; }, { markFirst: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dropdownPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], closeOnSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hideSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectOnTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bufferAmount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectableGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], selectableGroupAsModel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], searchFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], trackByFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearOnBackspace: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], labelForId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], inputAttrs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], readonly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], searchWhileComposing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], minTermLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], editableSearchTerm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], keyDownFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-multiple']
        }], addTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-taggable']
        }], searchable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-searchable']
        }], clearable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-clearable']
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-opened']
        }], blurEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['blur']
        }], focusEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['focus']
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['change']
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['open']
        }], closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['close']
        }], searchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['search']
        }], clearEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['clear']
        }], addEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['add']
        }], removeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['remove']
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scroll']
        }], scrollToEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['scrollToEnd']
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearSearchOnAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-disabled']
        }], filtered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-filtered']
        }], 
    /**
     * @param {?} $event
     * @return {?}
     */
    handleKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], bindLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], notFoundText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], typeToSearchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], addTagText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], loadingText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearAllText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], virtualScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], openOnEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appendTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], bindValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], appearance: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], maxSelectedItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], groupValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], typeahead: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
            args: ['class.ng-select-typeahead']
        }], optionTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptionTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], optgroupTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgOptgroupTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], labelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], multiLabelTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgMultiLabelTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], headerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgHeaderTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], footerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgFooterTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], notFoundTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgNotFoundTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], typeToSearchTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTypeToSearchTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], loadingTextTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingTextTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], tagTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgTagTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], loadingSpinnerTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
            args: [NgLoadingSpinnerTemplateDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, static: false }]
        }], dropdownPanel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                             * @return {?}
                             */() => NgDropdownPanelComponent)), { static: false }]
        }], searchInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['searchInput', { static: true }]
        }], ngOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
            args: [NgOptionComponent, { descendants: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function DefaultSelectionModelFactory() {
    return new DefaultSelectionModel();
}
/**
 * @record
 */
function SelectionModel() { }
if (false) {}
class DefaultSelectionModel {
    constructor() {
        this._selected = [];
    }
    /**
     * @return {?}
     */
    get value() {
        return this._selected;
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @param {?} groupAsModel
     * @return {?}
     */
    select(item, multiple, groupAsModel) {
        item.selected = true;
        if (!item.children || (!multiple && groupAsModel)) {
            this._selected.push(item);
        }
        if (multiple) {
            if (item.parent) {
                /** @type {?} */
                const childrenCount = item.parent.children.length;
                /** @type {?} */
                const selectedCount = item.parent.children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x.selected)).length;
                item.parent.selected = childrenCount === selectedCount;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, true);
                this._removeChildren(item);
                if (groupAsModel && this._activeChildren(item)) {
                    this._selected = [...this._selected.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => x.parent !== item)), item];
                }
                else {
                    this._selected = [...this._selected, ...item.children.filter((/**
                         * @param {?} x
                         * @return {?}
                         */
                        x => !x.disabled))];
                }
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} multiple
     * @return {?}
     */
    unselect(item, multiple) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== item));
        item.selected = false;
        if (multiple) {
            if (item.parent && item.parent.selected) {
                /** @type {?} */
                const children = item.parent.children;
                this._removeParent(item.parent);
                this._removeChildren(item.parent);
                this._selected.push(...children.filter((/**
                 * @param {?} x
                 * @return {?}
                 */
                x => x !== item && !x.disabled)));
                item.parent.selected = false;
            }
            else if (item.children) {
                this._setChildrenSelectedState(item.children, false);
                this._removeChildren(item);
            }
        }
    }
    /**
     * @param {?} keepDisabled
     * @return {?}
     */
    clear(keepDisabled) {
        this._selected = keepDisabled ? this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x.disabled)) : [];
    }
    /**
     * @private
     * @param {?} children
     * @param {?} selected
     * @return {?}
     */
    _setChildrenSelectedState(children, selected) {
        for (const child of children) {
            if (child.disabled) {
                continue;
            }
            child.selected = selected;
        }
        ;
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    _removeChildren(parent) {
        this._selected = [
            ...this._selected.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent !== parent)),
            ...parent.children.filter((/**
             * @param {?} x
             * @return {?}
             */
            x => x.parent === parent && x.disabled && x.selected))
        ];
    }
    /**
     * @private
     * @param {?} parent
     * @return {?}
     */
    _removeParent(parent) {
        this._selected = this._selected.filter((/**
         * @param {?} x
         * @return {?}
         */
        x => x !== parent));
    }
    /**
     * @private
     * @param {?} item
     * @return {?}
     */
    _activeChildren(item) {
        return item.children.every((/**
         * @param {?} x
         * @return {?}
         */
        x => !x.disabled || x.selected));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = DefaultSelectionModelFactory;
class NgSelectModule {
}
NgSelectModule.ɵfac = function NgSelectModule_Factory(t) { return new (t || NgSelectModule)(); };
NgSelectModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgSelectModule });
NgSelectModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSelectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [
                    NgDropdownPanelComponent,
                    NgOptionComponent,
                    NgSelectComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective,
                    NgItemLabelDirective
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule
                ],
                exports: [
                    NgSelectComponent,
                    NgOptionComponent,
                    NgOptgroupTemplateDirective,
                    NgOptionTemplateDirective,
                    NgLabelTemplateDirective,
                    NgMultiLabelTemplateDirective,
                    NgHeaderTemplateDirective,
                    NgFooterTemplateDirective,
                    NgNotFoundTemplateDirective,
                    NgTypeToSearchTemplateDirective,
                    NgLoadingTextTemplateDirective,
                    NgTagTemplateDirective,
                    NgLoadingSpinnerTemplateDirective
                ],
                providers: [
                    { provide: SELECTION_MODEL_FACTORY, useValue: ɵ0 }
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgSelectModule, { declarations: function () { return [NgDropdownPanelComponent, NgOptionComponent, NgSelectComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective, NgItemLabelDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule]; }, exports: function () { return [NgSelectComponent, NgOptionComponent, NgOptgroupTemplateDirective, NgOptionTemplateDirective, NgLabelTemplateDirective, NgMultiLabelTemplateDirective, NgHeaderTemplateDirective, NgFooterTemplateDirective, NgNotFoundTemplateDirective, NgTypeToSearchTemplateDirective, NgLoadingTextTemplateDirective, NgTagTemplateDirective, NgLoadingSpinnerTemplateDirective]; } }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 247:
/*!*****************************************************************!*\
  !*** ./node_modules/ngx-mask/__ivy_ngcc__/fesm2015/ngx-mask.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_CONFIG": () => (/* binding */ INITIAL_CONFIG),
/* harmony export */   "MaskApplierService": () => (/* binding */ MaskApplierService),
/* harmony export */   "MaskDirective": () => (/* binding */ MaskDirective),
/* harmony export */   "MaskPipe": () => (/* binding */ MaskPipe),
/* harmony export */   "MaskService": () => (/* binding */ MaskService),
/* harmony export */   "NEW_CONFIG": () => (/* binding */ NEW_CONFIG),
/* harmony export */   "NgxMaskModule": () => (/* binding */ NgxMaskModule),
/* harmony export */   "_configFactory": () => (/* binding */ _configFactory),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "initialConfig": () => (/* binding */ initialConfig),
/* harmony export */   "timeMasks": () => (/* binding */ timeMasks),
/* harmony export */   "withoutValidation": () => (/* binding */ withoutValidation)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 196);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */

function IConfig() { }
if (false) {}
/** @type {?} */
const config = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('config');
/** @type {?} */
const NEW_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NEW_CONFIG');
/** @type {?} */
const INITIAL_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('INITIAL_CONFIG');
/** @type {?} */
const initialConfig = {
    suffix: '',
    prefix: '',
    thousandSeparator: ' ',
    decimalMarker: '.',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    placeHolderCharacter: '_',
    dropSpecialCharacters: true,
    hiddenInput: undefined,
    shownMaskExpression: '',
    separatorLimit: '',
    allowNegativeNumbers: false,
    validation: true,
    // tslint:disable-next-line: quotemark
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true,
        },
        X: {
            pattern: new RegExp('\\d'),
            symbol: '*',
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]'),
        },
        S: {
            pattern: new RegExp('[a-zA-Z]'),
        },
        d: {
            pattern: new RegExp('\\d'),
        },
        m: {
            pattern: new RegExp('\\d'),
        },
        M: {
            pattern: new RegExp('\\d'),
        },
        H: {
            pattern: new RegExp('\\d'),
        },
        h: {
            pattern: new RegExp('\\d'),
        },
        s: {
            pattern: new RegExp('\\d'),
        },
    },
};
/** @type {?} */
const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
/** @type {?} */
const withoutValidation = [
    'percent',
    'Hh',
    's0',
    'm0',
    'separator',
    'd0/M0/0000',
    'd0/M0',
    'd0',
    'M0',
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaskApplierService {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.maskExpression = '';
        this.actualValue = '';
        this.shownMaskExpression = '';
        this._formatWithSeparators = (/**
         * @param {?} str
         * @param {?} thousandSeparatorChar
         * @param {?} decimalChar
         * @param {?} precision
         * @return {?}
         */
        (str, thousandSeparatorChar, decimalChar, precision) => {
            /** @type {?} */
            const x = str.split(decimalChar);
            /** @type {?} */
            const decimals = x.length > 1 ? `${decimalChar}${x[1]}` : '';
            /** @type {?} */
            let res = x[0];
            /** @type {?} */
            const separatorLimit = this.separatorLimit.replace(/\s/g, '');
            if (separatorLimit && +separatorLimit) {
                if (res[0] === '-') {
                    res = `-${res.slice(1, res.length).slice(0, separatorLimit.length)}`;
                }
                else {
                    res = res.slice(0, separatorLimit.length);
                }
            }
            /** @type {?} */
            const rgx = /(\d+)(\d{3})/;
            while (rgx.test(res)) {
                res = res.replace(rgx, '$1' + thousandSeparatorChar + '$2');
            }
            if (precision === undefined) {
                return res + decimals;
            }
            else if (precision === 0) {
                return res;
            }
            return res + decimals.substr(0, precision + 1);
        });
        this.percentage = (/**
         * @param {?} str
         * @return {?}
         */
        (str) => {
            return Number(str) >= 0 && Number(str) <= 100;
        });
        this.getPrecision = (/**
         * @param {?} maskExpression
         * @return {?}
         */
        (maskExpression) => {
            /** @type {?} */
            const x = maskExpression.split('.');
            if (x.length > 1) {
                return Number(x[x.length - 1]);
            }
            return Infinity;
        });
        this.checkInputPrecision = (/**
         * @param {?} inputValue
         * @param {?} precision
         * @param {?} decimalMarker
         * @return {?}
         */
        (inputValue, precision, decimalMarker) => {
            if (precision < Infinity) {
                /** @type {?} */
                const precisionRegEx = new RegExp(this._charToRegExpExpression(decimalMarker) + `\\d{${precision}}.*$`);
                /** @type {?} */
                const precisionMatch = inputValue.match(precisionRegEx);
                if (precisionMatch && precisionMatch[0].length - 1 > precision) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
                else if (precision === 0 && inputValue.endsWith(decimalMarker)) {
                    inputValue = inputValue.substring(0, inputValue.length - 1);
                }
            }
            return inputValue;
        });
        this._shift = new Set();
        this.clearIfNotMatch = this._config.clearIfNotMatch;
        this.dropSpecialCharacters = this._config.dropSpecialCharacters;
        this.maskSpecialCharacters = this._config.specialCharacters;
        this.maskAvailablePatterns = this._config.patterns;
        this.prefix = this._config.prefix;
        this.suffix = this._config.suffix;
        this.thousandSeparator = this._config.thousandSeparator;
        this.decimalMarker = this._config.decimalMarker;
        this.hiddenInput = this._config.hiddenInput;
        this.showMaskTyped = this._config.showMaskTyped;
        this.placeHolderCharacter = this._config.placeHolderCharacter;
        this.validation = this._config.validation;
        this.separatorLimit = this._config.separatorLimit;
        this.allowNegativeNumbers = this._config.allowNegativeNumbers;
    }
    /**
     * @param {?} inputValue
     * @param {?} maskAndPattern
     * @return {?}
     */
    applyMaskWithPattern(inputValue, maskAndPattern) {
        const [mask, customPattern] = maskAndPattern;
        this.customPattern = customPattern;
        return this.applyMask(inputValue, mask);
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyMask(inputValue, maskExpression, position = 0, cb = (/**
     * @return {?}
     */
    () => { })) {
        if (inputValue === undefined || inputValue === null || maskExpression === undefined) {
            return '';
        }
        /** @type {?} */
        let cursor = 0;
        /** @type {?} */
        let result = '';
        /** @type {?} */
        let multi = false;
        /** @type {?} */
        let backspaceShift = false;
        /** @type {?} */
        let shift = 1;
        /** @type {?} */
        let stepBack = false;
        if (inputValue.slice(0, this.prefix.length) === this.prefix) {
            inputValue = inputValue.slice(this.prefix.length, inputValue.length);
        }
        if (!!this.suffix && inputValue.endsWith(this.suffix)) {
            inputValue = inputValue.slice(0, inputValue.length - this.suffix.length);
        }
        /** @type {?} */
        const inputArray = inputValue.toString().split('');
        if (maskExpression === 'IP') {
            this.ipError = !!(inputArray.filter((/**
             * @param {?} i
             * @return {?}
             */
            (i) => i === '.')).length < 3 && inputArray.length < 7);
            maskExpression = '099.099.099.099';
        }
        if (maskExpression.startsWith('percent')) {
            if (inputValue.match('[a-z]|[A-Z]') || inputValue.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/]/)) {
                inputValue = this._stripToDecimal(inputValue);
                /** @type {?} */
                const precision = this.getPrecision(maskExpression);
                inputValue = this.checkInputPrecision(inputValue, precision, '.');
            }
            if (inputValue.indexOf('.') > 0 && !this.percentage(inputValue.substring(0, inputValue.indexOf('.')))) {
                /** @type {?} */
                const base = inputValue.substring(0, inputValue.indexOf('.') - 1);
                inputValue = `${base}${inputValue.substring(inputValue.indexOf('.'), inputValue.length)}`;
            }
            if (this.percentage(inputValue)) {
                result = inputValue;
            }
            else {
                result = inputValue.substring(0, inputValue.length - 1);
            }
        }
        else if (maskExpression.startsWith('separator')) {
            if (inputValue.match('[wа-яА-Я]') ||
                inputValue.match('[ЁёА-я]') ||
                inputValue.match('[a-z]|[A-Z]') ||
                inputValue.match(/[-@#!$%\\^&*()_£¬'+|~=`{}\[\]:";<>.?\/]/) ||
                inputValue.match('[^A-Za-z0-9,]')) {
                inputValue = this._stripToDecimal(inputValue);
            }
            inputValue =
                inputValue.length > 1 && inputValue[0] === '0' && inputValue[1] !== this.decimalMarker
                    ? inputValue.slice(1, inputValue.length)
                    : inputValue;
            // TODO: we had different rexexps here for the different cases... but tests dont seam to bother - check this
            //  separator: no COMMA, dot-sep: no SPACE, COMMA OK, comma-sep: no SPACE, COMMA OK
            /** @type {?} */
            const thousandSeperatorCharEscaped = this._charToRegExpExpression(this.thousandSeparator);
            /** @type {?} */
            const decimalMarkerEscaped = this._charToRegExpExpression(this.decimalMarker);
            /** @type {?} */
            const invalidChars = '@#!$%^&*()_+|~=`{}\\[\\]:\\s,";<>?\\/'
                .replace(thousandSeperatorCharEscaped, '')
                .replace(decimalMarkerEscaped, '');
            /** @type {?} */
            const invalidCharRegexp = new RegExp('[' + invalidChars + ']');
            if (inputValue.match(invalidCharRegexp)) {
                inputValue = inputValue.substring(0, inputValue.length - 1);
            }
            /** @type {?} */
            const precision = this.getPrecision(maskExpression);
            inputValue = this.checkInputPrecision(inputValue, precision, this.decimalMarker);
            /** @type {?} */
            const strForSep = inputValue.replace(new RegExp(thousandSeperatorCharEscaped, 'g'), '');
            result = this._formatWithSeparators(strForSep, this.thousandSeparator, this.decimalMarker, precision);
            /** @type {?} */
            const commaShift = result.indexOf(',') - inputValue.indexOf(',');
            /** @type {?} */
            const shiftStep = result.length - inputValue.length;
            if (shiftStep > 0 && result[position] !== ',') {
                backspaceShift = true;
                /** @type {?} */
                let _shift = 0;
                do {
                    this._shift.add(position + _shift);
                    _shift++;
                } while (_shift < shiftStep);
            }
            else if ((commaShift !== 0 && position > 0 && !(result.indexOf(',') >= position && position > 3)) ||
                (!(result.indexOf('.') >= position && position > 3) && shiftStep <= 0)) {
                this._shift.clear();
                backspaceShift = true;
                shift = shiftStep;
                position += shiftStep;
                this._shift.add(position);
            }
            else {
                this._shift.clear();
            }
        }
        else {
            for (
            // tslint:disable-next-line
            let i = 0, inputSymbol = inputArray[0]; i < inputArray.length; i++, inputSymbol = inputArray[i]) {
                if (cursor === maskExpression.length) {
                    break;
                }
                if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '?') {
                    result += inputSymbol;
                    cursor += 2;
                }
                else if (maskExpression[cursor + 1] === '*' &&
                    multi &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                    multi = false;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) && maskExpression[cursor + 1] === '*') {
                    result += inputSymbol;
                    multi = true;
                }
                else if (maskExpression[cursor + 1] === '?' &&
                    this._checkSymbolMask(inputSymbol, maskExpression[cursor + 2])) {
                    result += inputSymbol;
                    cursor += 3;
                }
                else if (this._checkSymbolMask(inputSymbol, maskExpression[cursor]) ||
                    (this.hiddenInput &&
                        this.maskAvailablePatterns[maskExpression[cursor]] &&
                        this.maskAvailablePatterns[maskExpression[cursor]].symbol === inputSymbol)) {
                    if (maskExpression[cursor] === 'H') {
                        if (Number(inputSymbol) > 2) {
                            cursor += 1;
                            /** @type {?} */
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'h') {
                        if (result === '2' && Number(inputSymbol) > 3) {
                            cursor += 1;
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'm') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            /** @type {?} */
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 's') {
                        if (Number(inputSymbol) > 5) {
                            cursor += 1;
                            /** @type {?} */
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    /** @type {?} */
                    const daysCount = 31;
                    if (maskExpression[cursor] === 'd') {
                        if (Number(inputValue.slice(cursor, cursor + 2)) > daysCount || inputValue[cursor + 1] === '/') {
                            cursor += 1;
                            /** @type {?} */
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    if (maskExpression[cursor] === 'M') {
                        /** @type {?} */
                        const monthsCount = 12;
                        // mask without day
                        /** @type {?} */
                        const withoutDays = cursor === 0 &&
                            (Number(inputSymbol) > 2 ||
                                Number(inputValue.slice(cursor, cursor + 2)) > monthsCount ||
                                inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for input
                        /** @type {?} */
                        const day1monthInput = inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            ((inputValue[cursor - 2] === '/' &&
                                (Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount && inputValue[cursor] !== '/')) ||
                                inputValue[cursor] === '/' ||
                                ((inputValue[cursor - 3] === '/' &&
                                    (Number(inputValue.slice(cursor - 2, cursor)) > monthsCount && inputValue[cursor - 1] !== '/')) ||
                                    inputValue[cursor - 1] === '/'));
                        // 10<day<31 && month<12 for input
                        /** @type {?} */
                        const day2monthInput = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] === '/' &&
                            (Number(inputValue.slice(cursor, cursor + 2)) > monthsCount || inputValue[cursor + 1] === '/');
                        // day<10 && month<12 for paste whole data
                        /** @type {?} */
                        const day1monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) > daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            (!inputValue.slice(cursor - 2, cursor).includes('/') &&
                                Number(inputValue.slice(cursor - 2, cursor)) > monthsCount);
                        // 10<day<31 && month<12 for paste whole data
                        /** @type {?} */
                        const day2monthPaste = Number(inputValue.slice(cursor - 3, cursor - 1)) <= daysCount &&
                            !inputValue.slice(cursor - 3, cursor - 1).includes('/') &&
                            inputValue[cursor - 1] !== '/' &&
                            Number(inputValue.slice(cursor - 1, cursor + 1)) > monthsCount;
                        if (withoutDays || day1monthInput || day2monthInput || day1monthPaste || day2monthPaste) {
                            cursor += 1;
                            /** @type {?} */
                            const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                            this._shift.add(shiftStep + this.prefix.length || 0);
                            i--;
                            continue;
                        }
                    }
                    result += inputSymbol;
                    cursor++;
                }
                else if (this.maskSpecialCharacters.indexOf(maskExpression[cursor]) !== -1) {
                    result += maskExpression[cursor];
                    cursor++;
                    /** @type {?} */
                    const shiftStep = /[*?]/g.test(maskExpression.slice(0, cursor)) ? inputArray.length : cursor;
                    this._shift.add(shiftStep + this.prefix.length || 0);
                    i--;
                }
                else if (this.maskSpecialCharacters.indexOf(inputSymbol) > -1 &&
                    this.maskAvailablePatterns[maskExpression[cursor]] &&
                    this.maskAvailablePatterns[maskExpression[cursor]].optional) {
                    if (!!inputArray[cursor] && maskExpression !== '099.099.099.099') {
                        result += inputArray[cursor];
                    }
                    cursor++;
                    i--;
                }
                else if (this.maskExpression[cursor + 1] === '*' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.maskExpression[cursor + 1] === '?' &&
                    this._findSpecialChar(this.maskExpression[cursor + 2]) &&
                    this._findSpecialChar(inputSymbol) === this.maskExpression[cursor + 2] &&
                    multi) {
                    cursor += 3;
                    result += inputSymbol;
                }
                else if (this.showMaskTyped && this.maskSpecialCharacters.indexOf(inputSymbol) < 0 && inputSymbol !== this.placeHolderCharacter) {
                    stepBack = true;
                }
            }
        }
        if (result.length + 1 === maskExpression.length &&
            this.maskSpecialCharacters.indexOf(maskExpression[maskExpression.length - 1]) !== -1) {
            result += maskExpression[maskExpression.length - 1];
        }
        /** @type {?} */
        let newPosition = position + 1;
        while (this._shift.has(newPosition)) {
            shift++;
            newPosition++;
        }
        /** @type {?} */
        let actualShift = this._shift.has(position) ? shift : 0;
        if (stepBack) {
            actualShift--;
        }
        cb(actualShift, backspaceShift);
        if (shift < 0) {
            this._shift.clear();
        }
        /** @type {?} */
        let res = `${this.prefix}${result}${this.suffix}`;
        if (result.length === 0) {
            res = `${this.prefix}${result}`;
        }
        return res;
    }
    /**
     * @param {?} inputSymbol
     * @return {?}
     */
    _findSpecialChar(inputSymbol) {
        return this.maskSpecialCharacters.find((/**
         * @param {?} val
         * @return {?}
         */
        (val) => val === inputSymbol));
    }
    /**
     * @protected
     * @param {?} inputSymbol
     * @param {?} maskSymbol
     * @return {?}
     */
    _checkSymbolMask(inputSymbol, maskSymbol) {
        this.maskAvailablePatterns = this.customPattern ? this.customPattern : this.maskAvailablePatterns;
        return (this.maskAvailablePatterns[maskSymbol] &&
            this.maskAvailablePatterns[maskSymbol].pattern &&
            this.maskAvailablePatterns[maskSymbol].pattern.test(inputSymbol));
    }
    /**
     * @private
     * @param {?} str
     * @return {?}
     */
    _stripToDecimal(str) {
        return str
            .split('')
            .filter((/**
         * @param {?} i
         * @param {?} idx
         * @return {?}
         */
        (i, idx) => {
            return i.match('^-?\\d') || i === '.' || i === ',' || (i === '-' && idx === 0);
        }))
            .join('');
    }
    /**
     * @private
     * @param {?} char
     * @return {?}
     */
    _charToRegExpExpression(char) {
        /** @type {?} */
        const charsToEscape = '[\\^$.|?*+()';
        return char === ' ' ? '\\s' : charsToEscape.indexOf(char) >= 0 ? '\\' + char : char;
    }
}
MaskApplierService.ɵfac = function MaskApplierService_Factory(t) { return new (t || MaskApplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config)); };
MaskApplierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaskApplierService, factory: MaskApplierService.ɵfac });
/** @nocollapse */
MaskApplierService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskApplierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaskService extends MaskApplierService {
    /**
     * @param {?} document
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(document, _config, _elementRef, _renderer) {
        super(_config);
        this.document = document;
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.maskExpression = '';
        this.isNumberValue = false;
        this.placeHolderCharacter = '_';
        this.maskIsShown = '';
        this.selStart = null;
        this.selEnd = null;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this._formElement = this._elementRef.nativeElement;
    }
    // tslint:disable-next-line:cyclomatic-complexity
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyMask(inputValue, maskExpression, position = 0, cb = (/**
     * @return {?}
     */
    () => { })) {
        if (!maskExpression) {
            return inputValue;
        }
        this.maskIsShown = this.showMaskTyped ? this.showMaskInInput() : '';
        if (this.maskExpression === 'IP' && this.showMaskTyped) {
            this.maskIsShown = this.showMaskInInput(inputValue || '#');
        }
        if (!inputValue && this.showMaskTyped) {
            this.formControlResult(this.prefix);
            return this.prefix + this.maskIsShown;
        }
        /** @type {?} */
        const getSymbol = !!inputValue && typeof this.selStart === 'number' ? inputValue[this.selStart] : '';
        /** @type {?} */
        let newInputValue = '';
        if (this.hiddenInput !== undefined) {
            /** @type {?} */
            let actualResult = this.actualValue.split('');
            // tslint:disable no-unused-expression
            inputValue !== '' && actualResult.length
                ? typeof this.selStart === 'number' && typeof this.selEnd === 'number'
                    ? inputValue.length > actualResult.length
                        ? actualResult.splice(this.selStart, 0, getSymbol)
                        : inputValue.length < actualResult.length
                            ? actualResult.length - inputValue.length === 1
                                ? actualResult.splice(this.selStart - 1, 1)
                                : actualResult.splice(this.selStart, this.selEnd - this.selStart)
                            : null
                    : null
                : (actualResult = []);
            // tslint:enable no-unused-expression
            newInputValue = this.actualValue.length ? this.shiftTypedSymbols(actualResult.join('')) : inputValue;
        }
        newInputValue = Boolean(newInputValue) && newInputValue.length ? newInputValue : inputValue;
        /** @type {?} */
        const result = super.applyMask(newInputValue, maskExpression, position, cb);
        this.actualValue = this.getActualValue(result);
        // handle some separator implications:
        // a.) adjust decimalMarker default (. -> ,) if thousandSeparator is a dot
        if (this.thousandSeparator === '.' && this.decimalMarker === '.') {
            this.decimalMarker = ',';
        }
        // b) remove decimal marker from list of special characters to mask
        if (this.maskExpression.startsWith('separator') && this.dropSpecialCharacters === true) {
            this.maskSpecialCharacters = this.maskSpecialCharacters.filter((/**
             * @param {?} item
             * @return {?}
             */
            (item) => item !== this.decimalMarker));
        }
        this.formControlResult(result);
        if (!this.showMaskTyped) {
            if (this.hiddenInput) {
                return result && result.length ? this.hideInput(result, this.maskExpression) : result;
            }
            return result;
        }
        /** @type {?} */
        const resLen = result.length;
        /** @type {?} */
        const prefNmask = this.prefix + this.maskIsShown;
        return result + (this.maskExpression === 'IP' ? prefNmask : prefNmask.slice(resLen));
    }
    /**
     * @param {?=} position
     * @param {?=} cb
     * @return {?}
     */
    applyValueChanges(position = 0, cb = (/**
     * @return {?}
     */
    () => { })) {
        this._formElement.value = this.applyMask(this._formElement.value, this.maskExpression, position, cb);
        if (this._formElement === this.document.activeElement) {
            return;
        }
        this.clearIfNotMatchFn();
    }
    /**
     * @param {?} inputValue
     * @param {?} maskExpression
     * @return {?}
     */
    hideInput(inputValue, maskExpression) {
        return inputValue
            .split('')
            .map((/**
         * @param {?} curr
         * @param {?} index
         * @return {?}
         */
        (curr, index) => {
            if (this.maskAvailablePatterns &&
                this.maskAvailablePatterns[maskExpression[index]] &&
                this.maskAvailablePatterns[maskExpression[index]].symbol) {
                return this.maskAvailablePatterns[maskExpression[index]].symbol;
            }
            return curr;
        }))
            .join('');
    }
    // this function is not necessary, it checks result against maskExpression
    /**
     * @param {?} res
     * @return {?}
     */
    getActualValue(res) {
        /** @type {?} */
        const compare = res
            .split('')
            .filter((/**
         * @param {?} symbol
         * @param {?} i
         * @return {?}
         */
        (symbol, i) => this._checkSymbolMask(symbol, this.maskExpression[i]) ||
            (this.maskSpecialCharacters.includes(this.maskExpression[i]) && symbol === this.maskExpression[i])));
        if (compare.join('') === res) {
            return compare.join('');
        }
        return res;
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    shiftTypedSymbols(inputValue) {
        /** @type {?} */
        let symbolToReplace = '';
        /** @type {?} */
        const newInputValue = (inputValue &&
            inputValue.split('').map((/**
             * @param {?} currSymbol
             * @param {?} index
             * @return {?}
             */
            (currSymbol, index) => {
                if (this.maskSpecialCharacters.includes(inputValue[index + 1]) &&
                    inputValue[index + 1] !== this.maskExpression[index + 1]) {
                    symbolToReplace = currSymbol;
                    return inputValue[index + 1];
                }
                if (symbolToReplace.length) {
                    /** @type {?} */
                    const replaceSymbol = symbolToReplace;
                    symbolToReplace = '';
                    return replaceSymbol;
                }
                return currSymbol;
            }))) ||
            [];
        return newInputValue.join('');
    }
    /**
     * @param {?=} inputVal
     * @return {?}
     */
    showMaskInInput(inputVal) {
        if (this.showMaskTyped && !!this.shownMaskExpression) {
            if (this.maskExpression.length !== this.shownMaskExpression.length) {
                throw new Error('Mask expression must match mask placeholder length');
            }
            else {
                return this.shownMaskExpression;
            }
        }
        else if (this.showMaskTyped) {
            if (inputVal) {
                return this._checkForIp(inputVal);
            }
            return this.maskExpression.replace(/\w/g, this.placeHolderCharacter);
        }
        return '';
    }
    /**
     * @return {?}
     */
    clearIfNotMatchFn() {
        if (this.clearIfNotMatch &&
            this.prefix.length + this.maskExpression.length + this.suffix.length !==
                this._formElement.value.replace(/_/g, '').length) {
            this.formElementProperty = ['value', ''];
            this.applyMask(this._formElement.value, this.maskExpression);
        }
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    set formElementProperty([name, value]) {
        this._renderer.setProperty(this._formElement, name, value);
    }
    /**
     * @param {?} mask
     * @return {?}
     */
    checkSpecialCharAmount(mask) {
        /** @type {?} */
        const chars = mask.split('').filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => this._findSpecialChar(item)));
        return chars.length;
    }
    /**
     * @private
     * @param {?} inputVal
     * @return {?}
     */
    _checkForIp(inputVal) {
        if (inputVal === '#') {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        /** @type {?} */
        const arr = [];
        for (let i = 0; i < inputVal.length; i++) {
            if (inputVal[i].match('\\d')) {
                arr.push(inputVal[i]);
            }
        }
        if (arr.length <= 3) {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        if (arr.length > 3 && arr.length <= 6) {
            return `${this.placeHolderCharacter}.${this.placeHolderCharacter}`;
        }
        if (arr.length > 6 && arr.length <= 9) {
            return this.placeHolderCharacter;
        }
        if (arr.length > 9 && arr.length <= 12) {
            return '';
        }
        return '';
    }
    /**
     * @private
     * @param {?} inputValue
     * @return {?}
     */
    formControlResult(inputValue) {
        if (Array.isArray(this.dropSpecialCharacters)) {
            this.onChange(this._removeMask(this._removeSuffix(this._removePrefix(inputValue)), this.dropSpecialCharacters));
        }
        else if (this.dropSpecialCharacters) {
            this.onChange(this._checkSymbols(inputValue));
        }
        else {
            this.onChange(this._removeSuffix(this._removePrefix(inputValue)));
        }
    }
    /**
     * @private
     * @param {?} value
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _removeMask(value, specialCharactersForRemove) {
        return value ? value.replace(this._regExpForRemove(specialCharactersForRemove), '') : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removePrefix(value) {
        if (!this.prefix) {
            return value;
        }
        return value ? value.replace(this.prefix, '') : value;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _removeSuffix(value) {
        if (!this.suffix) {
            return value;
        }
        return value ? value.replace(this.suffix, '') : value;
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    _retrieveSeparatorValue(result) {
        return this._removeMask(this._removeSuffix(this._removePrefix(result)), this.maskSpecialCharacters);
    }
    /**
     * @private
     * @param {?} specialCharactersForRemove
     * @return {?}
     */
    _regExpForRemove(specialCharactersForRemove) {
        return new RegExp(specialCharactersForRemove.map((/**
         * @param {?} item
         * @return {?}
         */
        (item) => `\\${item}`)).join('|'), 'gi');
    }
    /**
     * @private
     * @param {?} result
     * @return {?}
     */
    _checkSymbols(result) {
        if (result === '') {
            return result;
        }
        /** @type {?} */
        const separatorPrecision = this._retrieveSeparatorPrecision(this.maskExpression);
        /** @type {?} */
        let separatorValue = this._retrieveSeparatorValue(result);
        if (this.decimalMarker !== '.') {
            separatorValue = separatorValue.replace(this.decimalMarker, '.');
        }
        if (this.isNumberValue) {
            if (separatorPrecision) {
                if (result === this.decimalMarker) {
                    return null;
                }
                return this._checkPrecision(this.maskExpression, separatorValue);
            }
            else {
                return Number(separatorValue);
            }
        }
        else {
            return separatorValue;
        }
    }
    // TODO should think about helpers or separting decimal precision to own property
    /**
     * @private
     * @param {?} maskExpretion
     * @return {?}
     */
    _retrieveSeparatorPrecision(maskExpretion) {
        /** @type {?} */
        const matcher = maskExpretion.match(new RegExp(`^separator\\.([^d]*)`));
        return matcher ? Number(matcher[1]) : null;
    }
    /**
     * @private
     * @param {?} separatorExpression
     * @param {?} separatorValue
     * @return {?}
     */
    _checkPrecision(separatorExpression, separatorValue) {
        if (separatorExpression.indexOf('2') > 0) {
            return Number(separatorValue).toFixed(2);
        }
        return Number(separatorValue);
    }
}
MaskService.ɵfac = function MaskService_Factory(t) { return new (t || MaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](config), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
MaskService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MaskService, factory: MaskService.ɵfac });
/** @nocollapse */
MaskService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable deprecation
class MaskDirective {
    /**
     * @param {?} document
     * @param {?} _maskService
     * @param {?} _config
     */
    constructor(document, _maskService, _config) {
        this.document = document;
        this._maskService = _maskService;
        this._config = _config;
        this.maskExpression = '';
        this.specialCharacters = [];
        this.patterns = {};
        this.prefix = '';
        this.suffix = '';
        this.thousandSeparator = ' ';
        this.decimalMarker = '.';
        this.dropSpecialCharacters = null;
        this.hiddenInput = null;
        this.showMaskTyped = null;
        this.placeHolderCharacter = null;
        this.shownMaskExpression = null;
        this.showTemplate = null;
        this.clearIfNotMatch = null;
        this.validation = null;
        this.separatorLimit = null;
        this.allowNegativeNumbers = null;
        this._maskValue = '';
        this._position = null;
        this.onChange = (/**
         * @param {?} _
         * @return {?}
         */
        (_) => { });
        this.onTouch = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { maskExpression, specialCharacters, patterns, prefix, suffix, thousandSeparator, decimalMarker, dropSpecialCharacters, hiddenInput, showMaskTyped, placeHolderCharacter, shownMaskExpression, showTemplate, clearIfNotMatch, validation, separatorLimit, allowNegativeNumbers, } = changes;
        if (maskExpression) {
            this._maskValue = changes.maskExpression.currentValue || '';
        }
        if (specialCharacters) {
            if (!specialCharacters.currentValue || !Array.isArray(specialCharacters.currentValue)) {
                return;
            }
            else {
                this._maskService.maskSpecialCharacters = changes.specialCharacters.currentValue || [];
            }
        }
        // Only overwrite the mask available patterns if a pattern has actually been passed in
        if (patterns && patterns.currentValue) {
            this._maskService.maskAvailablePatterns = patterns.currentValue;
        }
        if (prefix) {
            this._maskService.prefix = prefix.currentValue;
        }
        if (suffix) {
            this._maskService.suffix = suffix.currentValue;
        }
        if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator.currentValue;
        }
        if (decimalMarker) {
            this._maskService.decimalMarker = decimalMarker.currentValue;
        }
        if (dropSpecialCharacters) {
            this._maskService.dropSpecialCharacters = dropSpecialCharacters.currentValue;
        }
        if (hiddenInput) {
            this._maskService.hiddenInput = hiddenInput.currentValue;
        }
        if (showMaskTyped) {
            this._maskService.showMaskTyped = showMaskTyped.currentValue;
        }
        if (placeHolderCharacter) {
            this._maskService.placeHolderCharacter = placeHolderCharacter.currentValue;
        }
        if (shownMaskExpression) {
            this._maskService.shownMaskExpression = shownMaskExpression.currentValue;
        }
        if (showTemplate) {
            this._maskService.showTemplate = showTemplate.currentValue;
        }
        if (clearIfNotMatch) {
            this._maskService.clearIfNotMatch = clearIfNotMatch.currentValue;
        }
        if (validation) {
            this._maskService.validation = validation.currentValue;
        }
        if (separatorLimit) {
            this._maskService.separatorLimit = separatorLimit.currentValue;
        }
        if (allowNegativeNumbers) {
            this._maskService.maskSpecialCharacters = this._maskService.maskSpecialCharacters.filter((/**
             * @param {?} c
             * @return {?}
             */
            (c) => c !== '-'));
        }
        this._applyMask();
    }
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} __0
     * @return {?}
     */
    validate({ value }) {
        if (!this._maskService.validation) {
            return null;
        }
        if (this._maskService.ipError) {
            return this._createValidationError(value);
        }
        if (this._maskValue.startsWith('separator')) {
            return null;
        }
        if (withoutValidation.includes(this._maskValue)) {
            return null;
        }
        if (this._maskService.clearIfNotMatch) {
            return null;
        }
        if (timeMasks.includes(this._maskValue)) {
            return this._validateTime(value);
        }
        if (value && value.toString().length >= 1) {
            /** @type {?} */
            let counterOfOpt = 0;
            for (const key in this._maskService.maskAvailablePatterns) {
                if (this._maskService.maskAvailablePatterns[key].optional &&
                    this._maskService.maskAvailablePatterns[key].optional === true) {
                    if (this._maskValue.indexOf(key) !== this._maskValue.lastIndexOf(key)) {
                        /** @type {?} */
                        const opt = this._maskValue
                            .split('')
                            .filter((/**
                         * @param {?} i
                         * @return {?}
                         */
                        (i) => i === key))
                            .join('');
                        counterOfOpt += opt.length;
                    }
                    else if (this._maskValue.indexOf(key) !== -1) {
                        counterOfOpt++;
                    }
                    if (this._maskValue.indexOf(key) !== -1 && value.toString().length >= this._maskValue.indexOf(key)) {
                        return null;
                    }
                    if (counterOfOpt === this._maskValue.length) {
                        return null;
                    }
                }
            }
            if (this._maskValue.indexOf('{') === 1 &&
                value.toString().length === this._maskValue.length + Number(this._maskValue.split('{')[1].split('}')[0]) - 4) {
                return null;
            }
            if (this._maskValue.indexOf('*') === 1 || this._maskValue.indexOf('?') === 1) {
                return null;
            }
            else if ((this._maskValue.indexOf('*') > 1 && value.toString().length < this._maskValue.indexOf('*')) ||
                (this._maskValue.indexOf('?') > 1 && value.toString().length < this._maskValue.indexOf('?')) ||
                this._maskValue.indexOf('{') === 1) {
                return this._createValidationError(value);
            }
            if (this._maskValue.indexOf('*') === -1 || this._maskValue.indexOf('?') === -1) {
                /** @type {?} */
                const length = this._maskService.dropSpecialCharacters
                    ? this._maskValue.length - this._maskService.checkSpecialCharAmount(this._maskValue) - counterOfOpt
                    : this._maskValue.length - counterOfOpt;
                if (value.toString().length < length) {
                    return this._createValidationError(value);
                }
            }
        }
        return null;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onInput(e) {
        /** @type {?} */
        const el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (!this._maskValue) {
            this.onChange(el.value);
            return;
        }
        /** @type {?} */
        const position = el.selectionStart === 1
            ? ((/** @type {?} */ (el.selectionStart))) + this._maskService.prefix.length
            : ((/** @type {?} */ (el.selectionStart)));
        /** @type {?} */
        let caretShift = 0;
        /** @type {?} */
        let backspaceShift = false;
        this._maskService.applyValueChanges(position, (/**
         * @param {?} shift
         * @param {?} _backspaceShift
         * @return {?}
         */
        (shift, _backspaceShift) => {
            caretShift = shift;
            backspaceShift = _backspaceShift;
        }));
        // only set the selection if the element is active
        if (this.document.activeElement !== el) {
            return;
        }
        this._position = this._position === 1 && this._inputValue.length === 1 ? null : this._position;
        /** @type {?} */
        let positionToApply = this._position
            ? this._inputValue.length + position + caretShift
            : position + (this._code === 'Backspace' && !backspaceShift ? 0 : caretShift);
        if (positionToApply > this._getActualInputLength()) {
            positionToApply = this._getActualInputLength();
        }
        el.setSelectionRange(positionToApply, positionToApply);
        if ((this.maskExpression.includes('H') || this.maskExpression.includes('M')) && caretShift === 0) {
            el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) + 1, ((/** @type {?} */ (el.selectionStart))) + 1);
        }
        this._position = null;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._maskService.clearIfNotMatchFn();
        this.onTouch();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        /** @type {?} */
        const el = (/** @type {?} */ (e.target));
        /** @type {?} */
        const posStart = 0;
        /** @type {?} */
        const posEnd = 0;
        if (el !== null &&
            el.selectionStart !== null &&
            el.selectionStart === el.selectionEnd &&
            el.selectionStart > this._maskService.prefix.length &&
            // tslint:disable-next-line
            ((/** @type {?} */ (e))).keyCode !== 38)
            if (this._maskService.showMaskTyped) {
                // We are showing the mask in the input
                this._maskService.maskIsShown = this._maskService.showMaskInInput();
                if (el.setSelectionRange && this._maskService.prefix + this._maskService.maskIsShown === el.value) {
                    // the input ONLY contains the mask, so position the cursor at the start
                    el.focus();
                    el.setSelectionRange(posStart, posEnd);
                }
                else {
                    // the input contains some characters already
                    if (el.selectionStart > this._maskService.actualValue.length) {
                        // if the user clicked beyond our value's length, position the cursor at the end of our value
                        el.setSelectionRange(this._maskService.actualValue.length, this._maskService.actualValue.length);
                    }
                }
            }
        /** @type {?} */
        const nextValue = !el.value || el.value === this._maskService.prefix
            ? this._maskService.prefix + this._maskService.maskIsShown
            : el.value;
        /** Fix of cursor position jumping to end in most browsers no matter where cursor is inserted onFocus */
        if (el.value !== nextValue) {
            el.value = nextValue;
        }
        /** fix of cursor position with prefix when mouse click occur */
        if ((((/** @type {?} */ (el.selectionStart))) || ((/** @type {?} */ (el.selectionEnd)))) <= this._maskService.prefix.length) {
            el.selectionStart = this._maskService.prefix.length;
            return;
        }
        /** select only inserted text */
        if (((/** @type {?} */ (el.selectionEnd))) > this._getActualInputLength()) {
            el.selectionEnd = this._getActualInputLength();
        }
    }
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        this._code = e.code ? e.code : e.key;
        /** @type {?} */
        const el = (/** @type {?} */ (e.target));
        this._inputValue = el.value;
        if (e.keyCode === 38) {
            e.preventDefault();
        }
        if (e.keyCode === 37 || e.keyCode === 8 || e.keyCode === 46) {
            if (e.keyCode === 8 && el.value.length === 0) {
                el.selectionStart = el.selectionEnd;
            }
            if (e.keyCode === 8 && ((/** @type {?} */ (el.selectionStart))) !== 0) {
                // If specialChars is false, (shouldn't ever happen) then set to the defaults
                this.specialCharacters = this.specialCharacters || this._config.specialCharacters;
                if (this.prefix.length > 1 && ((/** @type {?} */ (el.selectionStart))) <= this.prefix.length) {
                    el.setSelectionRange(this.prefix.length, this.prefix.length);
                }
                else {
                    if (this._inputValue.length !== ((/** @type {?} */ (el.selectionStart))) && ((/** @type {?} */ (el.selectionStart))) !== 1) {
                        while (this.specialCharacters.includes(this._inputValue[((/** @type {?} */ (el.selectionStart))) - 1].toString()) &&
                            ((this.prefix.length >= 1 && ((/** @type {?} */ (el.selectionStart))) > this.prefix.length) ||
                                this.prefix.length === 0)) {
                            el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) - 1, ((/** @type {?} */ (el.selectionStart))) - 1);
                        }
                    }
                    this.suffixCheckOnPressDelete(e.keyCode, el);
                }
            }
            this.suffixCheckOnPressDelete(e.keyCode, el);
            if (this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionStart))) <= this._maskService.prefix.length &&
                ((/** @type {?} */ (el.selectionEnd))) <= this._maskService.prefix.length) {
                e.preventDefault();
            }
            /** @type {?} */
            const cursorStart = el.selectionStart;
            // this.onFocus(e);
            if (e.keyCode === 8 &&
                !el.readOnly &&
                cursorStart === 0 &&
                el.selectionEnd === el.value.length &&
                el.value.length !== 0) {
                this._position = this._maskService.prefix ? this._maskService.prefix.length : 0;
                this._maskService.applyMask(this._maskService.prefix, this._maskService.maskExpression, this._position);
            }
        }
        if (!!this.suffix &&
            this.suffix.length > 1 &&
            this._inputValue.length - this.suffix.length < ((/** @type {?} */ (el.selectionStart)))) {
            el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
        }
        else if ((e.keyCode === 65 && e.ctrlKey === true) || // Ctrl+ A
            (e.keyCode === 65 && e.metaKey === true) // Cmd + A (Mac)
        ) {
            el.setSelectionRange(0, this._getActualInputLength());
            e.preventDefault();
        }
        this._maskService.selStart = el.selectionStart;
        this._maskService.selEnd = el.selectionEnd;
    }
    /**
     * It writes the value in the input
     * @param {?} inputValue
     * @return {?}
     */
    writeValue(inputValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /** @this {!MaskDirective} */ function* () {
            if (inputValue === undefined) {
                inputValue = '';
            }
            if (typeof inputValue === 'number') {
                inputValue = String(inputValue);
                inputValue = this.decimalMarker !== '.' ? inputValue.replace('.', this.decimalMarker) : inputValue;
                this._maskService.isNumberValue = true;
            }
            (inputValue && this._maskService.maskExpression) ||
                (this._maskService.maskExpression && (this._maskService.prefix || this._maskService.showMaskTyped))
                ? (this._maskService.formElementProperty = [
                    'value',
                    this._maskService.applyMask(inputValue, this._maskService.maskExpression),
                ])
                : (this._maskService.formElementProperty = ['value', inputValue]);
            this._inputValue = inputValue;
        });
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
        this._maskService.onChange = this.onChange;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /**
     * @param {?} keyCode
     * @param {?} el
     * @return {?}
     */
    suffixCheckOnPressDelete(keyCode, el) {
        if (keyCode === 46 && this.suffix.length > 0) {
            if (this._inputValue.length - this.suffix.length <= ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
        }
        if (keyCode === 8) {
            if (this.suffix.length > 1 && this._inputValue.length - this.suffix.length < ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(this._inputValue.length - this.suffix.length, this._inputValue.length);
            }
            if (this.suffix.length === 1 && this._inputValue.length === ((/** @type {?} */ (el.selectionStart)))) {
                el.setSelectionRange(((/** @type {?} */ (el.selectionStart))) - 1, ((/** @type {?} */ (el.selectionStart))) - 1);
            }
        }
    }
    /**
     * It disables the input element
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._maskService.formElementProperty = ['disabled', isDisabled];
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onModelChange(e) {
        if (!e) {
            this._maskService.actualValue = '';
        }
    }
    /**
     * @private
     * @param {?} maskExp
     * @return {?}
     */
    _repeatPatternSymbols(maskExp) {
        return ((maskExp.match(/{[0-9]+}/) &&
            maskExp.split('').reduce((/**
             * @param {?} accum
             * @param {?} currval
             * @param {?} index
             * @return {?}
             */
            (accum, currval, index) => {
                this._start = currval === '{' ? index : this._start;
                if (currval !== '}') {
                    return this._maskService._findSpecialChar(currval) ? accum + currval : accum;
                }
                this._end = index;
                /** @type {?} */
                const repeatNumber = Number(maskExp.slice(this._start + 1, this._end));
                /** @type {?} */
                const repaceWith = new Array(repeatNumber + 1).join(maskExp[this._start - 1]);
                return accum + repaceWith;
            }), '')) ||
            maskExp);
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @return {?}
     */
    _applyMask() {
        this._maskService.maskExpression = this._repeatPatternSymbols(this._maskValue || '');
        this._maskService.formElementProperty = [
            'value',
            this._maskService.applyMask(this._inputValue, this._maskService.maskExpression),
        ];
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _validateTime(value) {
        /** @type {?} */
        const rowMaskLen = this._maskValue.split('').filter((/**
         * @param {?} s
         * @return {?}
         */
        (s) => s !== ':')).length;
        if (value === null || value.length === 0) {
            return null; // Don't validate empty values to allow for optional form control
        }
        if ((+value[value.length - 1] === 0 && value.length < rowMaskLen) || value.length <= rowMaskLen - 2) {
            return this._createValidationError(value);
        }
        return null;
    }
    /**
     * @private
     * @return {?}
     */
    _getActualInputLength() {
        return (this._maskService.actualValue.length || this._maskService.actualValue.length + this._maskService.prefix.length);
    }
    /**
     * @private
     * @param {?} actualValue
     * @return {?}
     */
    _createValidationError(actualValue) {
        return {
            mask: {
                requiredMask: this._maskValue,
                actualValue,
            },
        };
    }
}
MaskDirective.ɵfac = function MaskDirective_Factory(t) { return new (t || MaskDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](config)); };
MaskDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MaskDirective, selectors: [["", "mask", ""]], hostBindings: function MaskDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MaskDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("blur", function MaskDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("click", function MaskDirective_click_HostBindingHandler($event) { return ctx.onFocus($event); })("keydown", function MaskDirective_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("ngModelChange", function MaskDirective_ngModelChange_HostBindingHandler($event) { return ctx.onModelChange($event); });
    } }, inputs: { maskExpression: ["mask", "maskExpression"], specialCharacters: "specialCharacters", patterns: "patterns", prefix: "prefix", suffix: "suffix", thousandSeparator: "thousandSeparator", decimalMarker: "decimalMarker", dropSpecialCharacters: "dropSpecialCharacters", hiddenInput: "hiddenInput", showMaskTyped: "showMaskTyped", placeHolderCharacter: "placeHolderCharacter", shownMaskExpression: "shownMaskExpression", showTemplate: "showTemplate", clearIfNotMatch: "clearIfNotMatch", validation: "validation", separatorLimit: "separatorLimit", allowNegativeNumbers: "allowNegativeNumbers" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => MaskDirective)),
                multi: true
            },
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => MaskDirective)),
                multi: true
            },
            MaskService,
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
MaskDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT,] }] },
    { type: MaskService },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [config,] }] }
];
MaskDirective.propDecorators = {
    maskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['mask',] }],
    specialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    patterns: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    prefix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    suffix: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    thousandSeparator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    decimalMarker: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    dropSpecialCharacters: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hiddenInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showMaskTyped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    placeHolderCharacter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    shownMaskExpression: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    showTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    clearIfNotMatch: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    validation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    separatorLimit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    allowNegativeNumbers: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event'],] }],
    onBlur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['blur',] }],
    onFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['click', ['$event'],] }],
    onKeyDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['keydown', ['$event'],] }],
    onModelChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['ngModelChange', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[mask]',
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => MaskDirective)),
                        multi: true
                    },
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NG_VALIDATORS,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => MaskDirective)),
                        multi: true
                    },
                    MaskService,
                ]
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
            }] }, { type: MaskService }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [config]
            }] }]; }, { maskExpression: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['mask']
        }], specialCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], patterns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], prefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], suffix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], thousandSeparator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], decimalMarker: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], dropSpecialCharacters: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hiddenInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showMaskTyped: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], placeHolderCharacter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], shownMaskExpression: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], showTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], clearIfNotMatch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], validation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], separatorLimit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], allowNegativeNumbers: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], 
    /**
     * @param {?} e
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['input', ['$event']]
        }], 
    /**
     * @return {?}
     */
    onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['blur']
        }], 
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['click', ['$event']]
        }], 
    // tslint:disable-next-line: cyclomatic-complexity
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['keydown', ['$event']]
        }], 
    /**
     * @param {?} e
     * @return {?}
     */
    onModelChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['ngModelChange', ['$event']]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaskPipe {
    /**
     * @param {?} _maskService
     */
    constructor(_maskService) {
        this._maskService = _maskService;
    }
    /**
     * @param {?} value
     * @param {?} mask
     * @param {?=} thousandSeparator
     * @return {?}
     */
    transform(value, mask, thousandSeparator = null) {
        if (!value && typeof value !== 'number') {
            return '';
        }
        if (thousandSeparator) {
            this._maskService.thousandSeparator = thousandSeparator;
        }
        if (typeof mask === 'string') {
            return this._maskService.applyMask(`${value}`, mask);
        }
        return this._maskService.applyMaskWithPattern(`${value}`, mask);
    }
}
MaskPipe.ɵfac = function MaskPipe_Factory(t) { return new (t || MaskPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MaskApplierService, 16)); };
MaskPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "mask", type: MaskPipe, pure: true });
/** @nocollapse */
MaskPipe.ctorParameters = () => [
    { type: MaskApplierService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaskPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'mask',
                pure: true
            }]
    }], function () { return [{ type: MaskApplierService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxMaskModule {
    /**
     * @param {?=} configValue
     * @return {?}
     */
    static forRoot(configValue) {
        return {
            ngModule: NgxMaskModule,
            providers: [
                {
                    provide: NEW_CONFIG,
                    useValue: configValue,
                },
                {
                    provide: INITIAL_CONFIG,
                    useValue: initialConfig,
                },
                {
                    provide: config,
                    useFactory: _configFactory,
                    deps: [INITIAL_CONFIG, NEW_CONFIG],
                },
                MaskApplierService,
            ],
        };
    }
    /**
     * @param {?=} _configValue
     * @return {?}
     */
    static forChild(_configValue) {
        return {
            ngModule: NgxMaskModule,
        };
    }
}
NgxMaskModule.ɵfac = function NgxMaskModule_Factory(t) { return new (t || NgxMaskModule)(); };
NgxMaskModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxMaskModule });
NgxMaskModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxMaskModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                exports: [MaskDirective, MaskPipe],
                declarations: [MaskDirective, MaskPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxMaskModule, { declarations: [MaskDirective, MaskPipe], exports: [MaskDirective, MaskPipe] }); })();
/**
 * \@internal
 * @param {?} initConfig
 * @param {?} configValue
 * @return {?}
 */
function _configFactory(initConfig, configValue) {
    return configValue instanceof Function ? Object.assign({}, initConfig, configValue()) : Object.assign({}, initConfig, configValue);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function getCjsExportFromNamespace (n) {
	return n && n['default'] || n;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
((/**
 * @return {?}
 */
function () {
    if (!commonjsGlobal.KeyboardEvent) {
        commonjsGlobal.KeyboardEvent = (/**
         * @param {?} _eventType
         * @param {?} _init
         * @return {?}
         */
        function (_eventType, _init) { });
    }
}))();


var customKeyboardEvent = {

};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 639:
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounceTime.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounceTime": () => (/* binding */ debounceTime)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ 1003);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 2606);


function debounceTime(dueTime, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
    return (source) => source.lift(new DebounceTimeOperator(dueTime, scheduler));
}
class DebounceTimeOperator {
    constructor(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    }
}
class DebounceTimeSubscriber extends _Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber {
    constructor(destination, dueTime, scheduler) {
        super(destination);
        this.dueTime = dueTime;
        this.scheduler = scheduler;
        this.debouncedSubscription = null;
        this.lastValue = null;
        this.hasValue = false;
    }
    _next(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    }
    _complete() {
        this.debouncedNext();
        this.destination.complete();
    }
    debouncedNext() {
        this.clearDebounce();
        if (this.hasValue) {
            const { lastValue } = this;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    }
    clearDebounce() {
        const debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    }
}
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}


/***/ }),

/***/ 9862:
/*!*******************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameAction.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameAction": () => (/* binding */ AnimationFrameAction)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3115);

class AnimationFrameAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(() => scheduler.flush(null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}


/***/ }),

/***/ 8028:
/*!**********************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AnimationFrameScheduler.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnimationFrameScheduler": () => (/* binding */ AnimationFrameScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 6367);

class AnimationFrameScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 959:
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapAction.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapAction": () => (/* binding */ AsapAction)
/* harmony export */ });
/* harmony import */ var _util_Immediate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Immediate */ 5429);
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncAction */ 3115);


class AsapAction extends _AsyncAction__WEBPACK_IMPORTED_MODULE_0__.AsyncAction {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && delay > 0) {
            return super.requestAsyncId(scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if ((delay !== null && delay > 0) || (delay === null && this.delay > 0)) {
            return super.recycleAsyncId(scheduler, id, delay);
        }
        if (scheduler.actions.length === 0) {
            _util_Immediate__WEBPACK_IMPORTED_MODULE_1__.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    }
}


/***/ }),

/***/ 6346:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsapScheduler.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsapScheduler": () => (/* binding */ AsapScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 6367);

class AsapScheduler extends _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler {
    flush(action) {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 970:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/animationFrame.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "animationFrameScheduler": () => (/* binding */ animationFrameScheduler),
/* harmony export */   "animationFrame": () => (/* binding */ animationFrame)
/* harmony export */ });
/* harmony import */ var _AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnimationFrameAction */ 9862);
/* harmony import */ var _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimationFrameScheduler */ 8028);


const animationFrameScheduler = new _AnimationFrameScheduler__WEBPACK_IMPORTED_MODULE_0__.AnimationFrameScheduler(_AnimationFrameAction__WEBPACK_IMPORTED_MODULE_1__.AnimationFrameAction);
const animationFrame = animationFrameScheduler;


/***/ }),

/***/ 6317:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/asap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "asapScheduler": () => (/* binding */ asapScheduler),
/* harmony export */   "asap": () => (/* binding */ asap)
/* harmony export */ });
/* harmony import */ var _AsapAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsapAction */ 959);
/* harmony import */ var _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsapScheduler */ 6346);


const asapScheduler = new _AsapScheduler__WEBPACK_IMPORTED_MODULE_0__.AsapScheduler(_AsapAction__WEBPACK_IMPORTED_MODULE_1__.AsapAction);
const asap = asapScheduler;


/***/ }),

/***/ 5429:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/Immediate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immediate": () => (/* binding */ Immediate),
/* harmony export */   "TestTools": () => (/* binding */ TestTools)
/* harmony export */ });
let nextHandle = 1;
const RESOLVED = (() => Promise.resolve())();
const activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
const Immediate = {
    setImmediate(cb) {
        const handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(() => findAndClearHandle(handle) && cb());
        return handle;
    },
    clearImmediate(handle) {
        findAndClearHandle(handle);
    },
};
const TestTools = {
    pending() {
        return Object.keys(activeHandles).length;
    }
};


/***/ }),

/***/ 7578:
/*!***************************************************************!*\
  !*** ./src/app/directives/scroll-spy/scroll-spy.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyDirective": () => (/* binding */ ScrollSpyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);


class ScrollSpyDirective {
    constructor(_el) {
        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.children;
        const scrollTop = event.target.scrollTop;
        const parentOffset = event.target.offsetTop + 10;
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some((spiedTag) => spiedTag === element.tagName)) {
                if (element.offsetTop - parentOffset <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) { return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
ScrollSpyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollSpyDirective, selectors: [["", "scrollSpy", ""]], hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 1856:
/*!************************************************************!*\
  !*** ./src/app/directives/scroll-spy/scroll-spy.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollSpyModule": () => (/* binding */ ScrollSpyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-spy.directive */ 7578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class ScrollSpyModule {
}
ScrollSpyModule.ɵfac = function ScrollSpyModule_Factory(t) { return new (t || ScrollSpyModule)(); };
ScrollSpyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ScrollSpyModule });
ScrollSpyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ScrollSpyModule, { declarations: [_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollSpyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollSpyDirective] }); })();


/***/ }),

/***/ 1340:
/*!********************************************************!*\
  !*** ./src/app/pages/blankpage/blankpage.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlankpageComponent": () => (/* binding */ BlankpageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class BlankpageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BlankpageComponent.ɵfac = function BlankpageComponent_Factory(t) { return new (t || BlankpageComponent)(); };
BlankpageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlankpageComponent, selectors: [["app-blankpage"]], decls: 6, vars: 0, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"]], template: function BlankpageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Starter Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibGFua3BhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 4789:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 2, vars: 0, template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dashboard works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 9730:
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesRoutingModule": () => (/* binding */ PagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4789);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: "",
        redirectTo: "dashboard"
    }, {
        path: "dashboard",
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    }, {
        path: "settlement",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./settlement/settlement.module */ 3792)).then((m) => m.SettlementModule),
    }, {
        path: 'non-financial-alteration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_non-financial-alteration_non-financial-alteration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./non-financial-alteration/non-financial-alteration.module */ 2213)).then(m => m.NonFinancialAlterationModule)
    },
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵfac = function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); };
PagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages-routing.module */ 9730);
/* harmony import */ var _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blankpage/blankpage.component */ 1340);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 4789);
/* harmony import */ var _settlement_settlement_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settlement/settlement.module */ 3792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);










const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 0.3,
};
class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            _settlement_settlement_module__WEBPACK_IMPORTED_MODULE_3__.SettlementModule,
            ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__.AngularDraggableModule,
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.NgxExtendedPdfViewerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_1__.BlankpageComponent, _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.PagesRoutingModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        _settlement_settlement_module__WEBPACK_IMPORTED_MODULE_3__.SettlementModule,
        ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__.AngularDraggableModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.NgxExtendedPdfViewerModule] }); })();


/***/ }),

/***/ 7595:
/*!**********************************************************************!*\
  !*** ./src/app/pages/settlement/approval/approval-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalRoutingModule": () => (/* binding */ ApprovalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _approval_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval.component */ 599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        component: _approval_component__WEBPACK_IMPORTED_MODULE_0__.ApprovalComponent
    }
];
class ApprovalRoutingModule {
}
ApprovalRoutingModule.ɵfac = function ApprovalRoutingModule_Factory(t) { return new (t || ApprovalRoutingModule)(); };
ApprovalRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ApprovalRoutingModule });
ApprovalRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ApprovalRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 599:
/*!*****************************************************************!*\
  !*** ./src/app/pages/settlement/approval/approval.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalComponent": () => (/* binding */ ApprovalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class ApprovalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ApprovalComponent.ɵfac = function ApprovalComponent_Factory(t) { return new (t || ApprovalComponent)(); };
ApprovalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApprovalComponent, selectors: [["app-approval"]], decls: 2, vars: 0, template: function ApprovalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "approval works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHByb3ZhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 3531:
/*!**************************************************************!*\
  !*** ./src/app/pages/settlement/approval/approval.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApprovalModule": () => (/* binding */ ApprovalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _approval_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./approval-routing.module */ 7595);
/* harmony import */ var _approval_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./approval.component */ 599);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class ApprovalModule {
}
ApprovalModule.ɵfac = function ApprovalModule_Factory(t) { return new (t || ApprovalModule)(); };
ApprovalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ApprovalModule });
ApprovalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovalRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ApprovalModule, { declarations: [_approval_component__WEBPACK_IMPORTED_MODULE_1__.ApprovalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _approval_routing_module__WEBPACK_IMPORTED_MODULE_0__.ApprovalRoutingModule] }); })();


/***/ }),

/***/ 1262:
/*!***********************************************************************!*\
  !*** ./src/app/pages/settlement/request/req-new/req-new.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReqNewComponent": () => (/* binding */ ReqNewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _directives_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../directives/scroll-spy/scroll-spy.directive */ 7578);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 9234);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);















const _c0 = ["largeDataModal"];
const _c1 = ["addCommentModal"];
function ReqNewComponent_div_5_ng_container_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r31.message, " ");
} }
function ReqNewComponent_div_5_ng_container_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_134_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r31 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.settlementForm.get("formRequest").hasError(validation_r31.type) && (ctx_r13.settlementForm.get("formRequest").dirty || ctx_r13.settlementForm.get("formRequest").touched));
} }
function ReqNewComponent_div_5_ng_container_140_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r34.message, " ");
} }
function ReqNewComponent_div_5_ng_container_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_140_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r34 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.settlementForm.get("formYear").hasError(validation_r34.type) && (ctx_r14.settlementForm.get("formYear").dirty || ctx_r14.settlementForm.get("formYear").touched));
} }
function ReqNewComponent_div_5_ng_container_146_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r37.message, " ");
} }
function ReqNewComponent_div_5_ng_container_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_146_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r37 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.settlementForm.get("formActionDate").hasError(validation_r37.type) && (ctx_r15.settlementForm.get("formActionDate").dirty || ctx_r15.settlementForm.get("formActionDate").touched));
} }
function ReqNewComponent_div_5_ng_container_153_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r40.message, " ");
} }
function ReqNewComponent_div_5_ng_container_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_153_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r40 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.settlementForm.get("formPolicy").hasError(validation_r40.type) && (ctx_r16.settlementForm.get("formPolicy").dirty || ctx_r16.settlementForm.get("formPolicy").touched));
} }
function ReqNewComponent_div_5_ng_container_159_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r43.message, " ");
} }
function ReqNewComponent_div_5_ng_container_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_159_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r43 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.settlementForm.get("formProposal").hasError(validation_r43.type) && (ctx_r17.settlementForm.get("formProposal").dirty || ctx_r17.settlementForm.get("formProposal").touched));
} }
function ReqNewComponent_div_5_ng_container_165_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r46.message, " ");
} }
function ReqNewComponent_div_5_ng_container_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_165_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r46 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.settlementForm.get("formSet").hasError(validation_r46.type) && (ctx_r18.settlementForm.get("formSet").dirty || ctx_r18.settlementForm.get("formSet").touched));
} }
function ReqNewComponent_div_5_ng_container_172_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r49.message, " ");
} }
function ReqNewComponent_div_5_ng_container_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_172_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r49 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.settlementForm.get("formEffectiveDate").hasError(validation_r49.type) && (ctx_r19.settlementForm.get("formEffectiveDate").dirty || ctx_r19.settlementForm.get("formEffectiveDate").touched));
} }
function ReqNewComponent_div_5_ng_container_187_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r52.message, " ");
} }
function ReqNewComponent_div_5_ng_container_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_187_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r52 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.settlementForm.get("formAdviceInstruct").hasError(validation_r52.type) && (ctx_r20.settlementForm.get("formAdviceInstruct").dirty || ctx_r20.settlementForm.get("formAdviceInstruct").touched));
} }
function ReqNewComponent_div_5_ng_container_194_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r55.message, " ");
} }
function ReqNewComponent_div_5_ng_container_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_194_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r55 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.settlementForm.get("formComments").hasError(validation_r55.type) && (ctx_r21.settlementForm.get("formComments").dirty || ctx_r21.settlementForm.get("formComments").touched));
} }
function ReqNewComponent_div_5_ng_container_201_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r58.message, " ");
} }
function ReqNewComponent_div_5_ng_container_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_201_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r58 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.settlementForm.get("formCRTRemarks").hasError(validation_r58.type) && (ctx_r22.settlementForm.get("formCRTRemarks").dirty || ctx_r22.settlementForm.get("formCRTRemarks").touched));
} }
function ReqNewComponent_div_5_ng_container_210_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r61.message, " ");
} }
function ReqNewComponent_div_5_ng_container_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_210_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r61 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.settlementForm.get("formDueDate").hasError(validation_r61.type) && (ctx_r23.settlementForm.get("formDueDate").dirty || ctx_r23.settlementForm.get("formDueDate").touched));
} }
function ReqNewComponent_div_5_ng_container_216_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r64.message, " ");
} }
function ReqNewComponent_div_5_ng_container_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_216_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r64 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.settlementForm.get("formIssueDate").hasError(validation_r64.type) && (ctx_r24.settlementForm.get("formIssueDate").dirty || ctx_r24.settlementForm.get("formIssueDate").touched));
} }
function ReqNewComponent_div_5_ng_container_223_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r67.message, " ");
} }
function ReqNewComponent_div_5_ng_container_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_223_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r67 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.settlementForm.get("formClientCode").hasError(validation_r67.type) && (ctx_r25.settlementForm.get("formClientCode").dirty || ctx_r25.settlementForm.get("formClientCode").touched));
} }
function ReqNewComponent_div_5_ng_container_229_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r70.message, " ");
} }
function ReqNewComponent_div_5_ng_container_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_229_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r70 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r26.settlementForm.get("formClientName").hasError(validation_r70.type) && (ctx_r26.settlementForm.get("formClientName").dirty || ctx_r26.settlementForm.get("formClientName").touched));
} }
function ReqNewComponent_div_5_ng_container_236_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r73.message, " ");
} }
function ReqNewComponent_div_5_ng_container_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_236_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r73 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.settlementForm.get("formEmployer").hasError(validation_r73.type) && (ctx_r27.settlementForm.get("formEmployer").dirty || ctx_r27.settlementForm.get("formEmployer").touched));
} }
function ReqNewComponent_div_5_ng_container_243_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r76.message, " ");
} }
function ReqNewComponent_div_5_ng_container_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_243_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r76 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.settlementForm.get("formCaseReadyTo").hasError(validation_r76.type) && (ctx_r28.settlementForm.get("formCaseReadyTo").dirty || ctx_r28.settlementForm.get("formCaseReadyTo").touched));
} }
function ReqNewComponent_div_5_ng_container_250_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r79.message, " ");
} }
function ReqNewComponent_div_5_ng_container_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_250_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r79 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.settlementForm.get("formRefundTo").hasError(validation_r79.type) && (ctx_r29.settlementForm.get("formRefundTo").dirty || ctx_r29.settlementForm.get("formRefundTo").touched));
} }
function ReqNewComponent_div_5_ng_container_257_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r82.message, " ");
} }
function ReqNewComponent_div_5_ng_container_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_div_5_ng_container_257_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r82 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.settlementForm.get("formPayment").hasError(validation_r82.type) && (ctx_r30.settlementForm.get("formPayment").dirty || ctx_r30.settlementForm.get("formPayment").touched));
} }
function ReqNewComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-page-title", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Create Benefit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " Something else here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "button", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_5_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r85.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r87.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r88.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_5_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r89.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Clear ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "table", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " Request No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "14350");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " Year ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "20202020");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " Action Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "30/06/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, " Due Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "30/06/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, " Issue Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "30/06/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, " Policy No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "1004896534");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, " Proposal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "1004896534");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, " Set ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Policy Holder ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "C95321 - Full Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, " Effective Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "30/06/2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, " Maturity Setled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " Unit Linked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](89, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](91, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, " Advice Instruct ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, " C95321 - Full Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, " Case Ready To ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Dispatch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "td", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, " Comments will be shown here... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " CRT Remarks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "td", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, " CRT Remarks will be shown here... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, " Refund to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, " Nill ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, " Payment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "td", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Auto Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "perfect-scrollbar", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Request No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](132, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](134, ReqNewComponent_div_5_ng_container_134_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, ReqNewComponent_div_5_ng_container_140_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](146, ReqNewComponent_div_5_ng_container_146_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](148, "label", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](149, "Policy No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](150, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](151, "input", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](152, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, ReqNewComponent_div_5_ng_container_153_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Proposal No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](159, ReqNewComponent_div_5_ng_container_159_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](165, ReqNewComponent_div_5_ng_container_165_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](167, "label", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](168, "Effect. Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](169, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](170, "input", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](172, ReqNewComponent_div_5_ng_container_172_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](174, "input", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "label", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](176, " Maturity Settled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](178, "input", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](179, "label", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](180, " Unit Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](183, "Adv. Instruct");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](185, "input", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](187, ReqNewComponent_div_5_ng_container_187_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](189, "label", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](190, "Comments");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](192, "input", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](193, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](194, ReqNewComponent_div_5_ng_container_194_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](195, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "label", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](197, "CRT Remark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](199, "input", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](201, ReqNewComponent_div_5_ng_container_201_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](204, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "label", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](206, "Due Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](208, "input", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](209, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](210, ReqNewComponent_div_5_ng_container_210_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](216, ReqNewComponent_div_5_ng_container_216_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "label", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, "Client Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](221, "input", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](223, ReqNewComponent_div_5_ng_container_223_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](229, ReqNewComponent_div_5_ng_container_229_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Employer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "ng-select", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_div_5_Template_ng_select_change_234_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r90.onEmployerChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](236, ReqNewComponent_div_5_ng_container_236_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "C.Ready To");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "ng-select", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_div_5_Template_ng_select_change_241_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r91.onCaseReadyToChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](243, ReqNewComponent_div_5_ng_container_243_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Refund To");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "ng-select", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_div_5_Template_ng_select_change_248_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r92.onRefundToChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](250, ReqNewComponent_div_5_ng_container_250_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "ng-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_div_5_Template_ng_select_change_255_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r93.onPaymentChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](257, ReqNewComponent_div_5_ng_container_257_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx_r0.breadCrumbItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](132);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formRequest);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formYear);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formActionDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formPolicy);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formProposal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formSet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formEffectiveDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formAdviceInstruct);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formComments);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formCRTRemarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formDueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formIssueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formClientCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formClientName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r0.employerList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formEmployer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r0.caseReadyToList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formCaseReadyTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r0.refundToList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formRefundTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r0.paymentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.validation_messages.formPayment);
} }
function ReqNewComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Document Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r94.showDocumentInModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-extended-pdf-viewer", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf")("useBrowserLocale", true)("textLayer", true)("showHandToolButton", true);
} }
function ReqNewComponent_tr_562_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 205);
} if (rf & 2) {
    const item_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r96.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ReqNewComponent_tr_562_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 206);
} }
function ReqNewComponent_tr_562_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 207);
} }
function ReqNewComponent_tr_562_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 208);
} }
function ReqNewComponent_tr_562_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 209);
} }
function ReqNewComponent_tr_562_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ReqNewComponent_tr_562_img_10_Template, 1, 1, "img", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReqNewComponent_tr_562_img_11_Template, 1, 0, "img", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReqNewComponent_tr_562_img_12_Template, 1, 0, "img", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ReqNewComponent_tr_562_img_13_Template, 1, 0, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReqNewComponent_tr_562_img_14_Template, 1, 0, "img", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r96 = ctx.$implicit;
    const i_r97 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r97 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r96.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r96.mimeType == "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r96.mimeType == "pdf");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r96.mimeType == "word");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r96.mimeType == "excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r96.mimeType == "document");
} }
function ReqNewComponent_li_650_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r104 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r104.updateBy, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r104.statusType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r104.lastEntered);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r104.comment, " ");
} }
const _c2 = function (a0) { return { "bg-greenActive": a0 }; };
function ReqNewComponent_ng_template_664_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_664_div_37_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r108); const item_r106 = restoredCtx.$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r107.onProposalClick(item_r106); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r106 = ctx.$implicit;
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c2, item_r106.id == ctx_r105.selectedProposalId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r106.proposal, " ");
} }
const _c3 = function () { return { standalone: true }; };
function ReqNewComponent_ng_template_664_Template(rf, ctx) { if (rf & 1) {
    const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Baisc Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "311 Save & Assure");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, " Gross Premium ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "50,000.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Mode ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Annual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "td", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Adhoc ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "td", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "80,000.00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "form", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ReqNewComponent_ng_template_664_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r109.searchProposal = $event; })("change", function ReqNewComponent_ng_template_664_Template_input_change_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r111.onProposalSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_664_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r112.openModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ReqNewComponent_ng_template_664_div_37_Template, 9, 4, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r6.searchProposal)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.newProposalList);
} }
const _c4 = function (a0) { return { "custom-edocs-row-active": a0 }; };
function ReqNewComponent_ng_template_671_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_671_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r117); const item_r115 = restoredCtx.$implicit; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r116.onEDocsDocClick(item_r115); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r115 = ctx.$implicit;
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c4, item_r115.id == ctx_r113.selectedDocId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r115.docBarCode, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r115.docDate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r115.docType, "");
} }
const _c5 = function (a0) { return { "edoc-card-active": a0 }; };
function ReqNewComponent_ng_template_671_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_671_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r120); const item_r118 = restoredCtx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r119.onEDocsDocClick(item_r118); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "i", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Bar Code No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Document Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "p", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r118 = ctx.$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c5, item_r118.id == ctx_r114.selectedDocId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r118.docBarCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r118.docDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r118.docBranch);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r118.docType);
} }
function ReqNewComponent_ng_template_671_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ReqNewComponent_ng_template_671_div_2_Template, 14, 6, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReqNewComponent_ng_template_671_div_3_Template, 25, 7, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.edocDocList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.edocDocList);
} }
function ReqNewComponent_div_676_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_676_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r123.fullScreenModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReqNewComponent_div_676_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_676_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r125.exitFullScreenModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c6 = function (a0) { return { "custom-modal-full-screen": a0 }; };
function ReqNewComponent_div_676_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Document Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ReqNewComponent_div_676_button_5_Template, 2, 0, "button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReqNewComponent_div_676_button_6_Template, 2, 0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_676_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r127.fitModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_div_676_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r129.closeDocModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "i", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "ngx-extended-pdf-viewer", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngDraggable", ctx_r8.isModelFullScreen == false ? true : false)("ngResizable", ctx_r8.isModelFullScreen == false ? true : false)("rzHandles", "n,e,s,w,se,sw,ne,nw")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c6, ctx_r8.isModelFullScreen == true));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r8.isModelFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.isModelFullScreen);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf")("useBrowserLocale", true)("textLayer", true)("showHandToolButton", true);
} }
function ReqNewComponent_ng_template_677_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_677_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r131.onModelClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ReqNewComponent_ng_template_679_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r136.message, " ");
} }
function ReqNewComponent_ng_template_679_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_ng_template_679_ng_container_13_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r136 = ctx.$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r134.commentForm.get("formStatusType").hasError(validation_r136.type) && (ctx_r134.commentForm.get("formStatusType").dirty || ctx_r134.commentForm.get("formStatusType").touched));
} }
function ReqNewComponent_ng_template_679_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r139.message, " ");
} }
function ReqNewComponent_ng_template_679_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ReqNewComponent_ng_template_679_ng_container_21_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r139 = ctx.$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.commentForm.get("formComment").hasError(validation_r139.type) && (ctx_r135.commentForm.get("formComment").dirty || ctx_r135.commentForm.get("formComment").touched));
} }
function ReqNewComponent_ng_template_679_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add New Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_ng_template_679_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r142.onAddCommentModelClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReqNewComponent_ng_template_679_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r144.onCommentSubmit(ctx_r144.commentForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Status/Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ng-select", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_ng_template_679_Template_ng_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r145.onCommentStatusTypeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ReqNewComponent_ng_template_679_ng_container_13_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Comments ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "textarea", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n            ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ReqNewComponent_ng_template_679_ng_container_21_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r12.commentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("items", ctx_r12.commentStatusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.validation_messages.formStatusType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r12.validation_messages.formComment);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r12.commentForm.valid);
} }
const _c7 = function (a0, a1) { return { "": a0, "mr-0": a1 }; };
const _c8 = function (a0) { return { "h-35": a0 }; };
const _c9 = function (a0) { return { "h-full-35": a0 }; };
const _c10 = function (a0) { return { "ctn-active": a0 }; };
const _c11 = function () { return ["DIV"]; };
const _c12 = function (a0, a1) { return { "custom-td-btn1": a0, "custom-td-btn2": a1 }; };
const _c13 = function (a0, a1) { return { "custom-btn-tb": a0, "custom-btn-tb2": a1 }; };
const _c14 = function (a0, a1) { return { "bx-up-arrow": a0, "bx-down-arrow": a1 }; };
const _c15 = function (a0, a1) { return { "bx-right-arrow": a0, "bx-left-arrow": a1 }; };
class ReqNewComponent {
    constructor(modalService, config, formBuilder, auth) {
        this.modalService = modalService;
        this.config = config;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.isRightBarShowing = true;
        this.isTBShowing = true;
        this.isDetails = true;
        this.newProposalList = [];
        this.newProposalSearchList = [];
        this.searchProposal = "";
        this.selectedProposalId = 0;
        this.selectedDocId = 0;
        this.edocDocList = [];
        this.isEdocModal = false;
        this.isModelFullScreen = false;
        this.employerList = [];
        this.caseReadyToList = [];
        this.refundToList = [];
        this.paymentList = [];
        this.selectedTab = "section1";
        this.refDocList = [];
        this.commentList = [];
        this.commentStatusList = [];
        this.validation_messages = {
            formRequest: [{ type: "required", message: "Request No is required." }],
            formYear: [{ type: "required", message: "Year is required." }],
            formActionDate: [{ type: "required", message: "Action date is required." }],
            formDueDate: [{ type: "required", message: "Due Date is required." }],
            formIssueDate: [{ type: "required", message: "Issue date is required." }],
            formPolicy: [{ type: "required", message: "Policy No is required." }],
            formProposal: [{ type: "required", message: "Proposal No is required." }],
            formSet: [{ type: "required", message: "Set is required." }],
            formClientCode: [{ type: "required", message: "Client Code is required." }],
            formClientName: [{ type: "required", message: "Client Name is required." }],
            formEffectiveDate: [
                { type: "required", message: "Effective date is required." },
            ],
            formMaturitySetled: [
                { type: "required", message: "Maturity Setled is required." },
            ],
            formUnitLinked: [{ type: "required", message: "Unit Linked is required." }],
            formEmployer: [{ type: "required", message: "Employer is required." }],
            formAdviceInstruct: [
                { type: "required", message: "Advice Instruct is required." },
            ],
            formComments: [{ type: "required", message: "Comments is required." }],
            formCaseReadyTo: [
                { type: "required", message: "Case Ready To is required." },
            ],
            formCRTRemarks: [{ type: "required", message: "CRT Remarks is required." }],
            formRefundTo: [{ type: "required", message: "Refund to is required." }],
            formPayment: [{ type: "required", message: "Payment is required." }],
            formComment: [{ type: "required", message: "Comment is required." }],
            formStatusType: [{ type: "required", message: "Status/Type is required." }],
        };
        //config.backdrop = "static";
        //config.keyboard = false;
        let item = {
            id: 1,
            proposal: "600025533",
            clientName: "John Doe",
            dateOfIssue: "11/06/2020",
        };
        this.newProposalList.push(item);
        let item1 = {
            id: 2,
            proposal: "600025534",
            clientName: "John Doe",
            dateOfIssue: "11/06/2020",
        };
        this.newProposalList.push(item1);
        let item2 = {
            id: 3,
            proposal: "600025535",
            clientName: "John Doe",
            dateOfIssue: "11/06/2020",
        };
        this.newProposalList.push(item2);
        let item3 = {
            id: 4,
            proposal: "600025536",
            clientName: "John Doe",
            dateOfIssue: "11/06/2020",
        };
        this.newProposalList.push(item3);
        let item4 = {
            id: 6,
            proposal: "600025537",
            clientName: "John Doe",
            dateOfIssue: "11/06/2020",
        };
        this.newProposalList.push(item4);
        this.newProposalSearchList = this.newProposalList;
        console.log(this.newProposalList);
        if (this.newProposalList.length > 0) {
            this.selectedProposalId = this.newProposalList[0].id;
        }
        this.breadCrumbItems = [
            { label: "Settlement" },
            { label: "New", active: true },
        ];
    }
    ngOnInit() {
        let list = [
            {
                id: 1,
                docBarCode: "C-000000000011",
                docDate: "16/05/2020",
                docBranch: "Claims",
                docType: "Request",
            },
            {
                id: 2,
                docBarCode: "C-000000000012",
                docDate: "17/05/2020",
                docBranch: "Claims",
                docType: "Request",
            },
            {
                id: 3,
                docBarCode: "C-000000000013",
                docDate: "18/05/2020",
                docBranch: "Claims",
                docType: "Request",
            },
            {
                id: 4,
                docBarCode: "C-000000000014",
                docDate: "15/05/2020",
                docBranch: "Claims",
                docType: "Request",
            },
            {
                id: 5,
                docBarCode: "C-000000000015",
                docDate: "19/05/2020",
                docBranch: "Claims",
                docType: "Request",
            },
        ];
        this.edocDocList = list;
        console.log("edocDocList", this.edocDocList);
        let commentList = [
            {
                id: 1,
                sNo: "001",
                comment: "Test Comment 1",
                statusType: "Underwriting",
                lastEntered: "ENTAPPC06",
                updateBy: "10-08-2020",
            },
            {
                id: 2,
                sNo: "002",
                comment: "Test Comment 2",
                statusType: "Underwriting",
                lastEntered: "ENTAPPC06",
                updateBy: "10-08-2020",
            },
            {
                id: 3,
                sNo: "003",
                comment: "Test Comment 3",
                statusType: "Underwriting",
                lastEntered: "ENTAPPC06",
                updateBy: "10-08-2020",
            },
        ];
        this.commentList = commentList;
        this.setFormField();
        this.commentStatusList = this.auth.getCommentStatusTypeList();
        this.employerList =
            this.auth.getEmployerList().length > 0 ? this.auth.getEmployerList() : [];
        console.log(this.employerList);
        this.caseReadyToList =
            this.auth.getCaseReadyToList().length > 0
                ? this.auth.getCaseReadyToList()
                : [];
        console.log(this.caseReadyToList);
        this.refundToList =
            this.auth.getRefundToList().length > 0 ? this.auth.getRefundToList() : [];
        console.log(this.refundToList);
        this.paymentList =
            this.auth.getPaymentList().length > 0 ? this.auth.getPaymentList() : [];
        console.log(this.paymentList);
        window.addEventListener("scroll", this.scrolling, true);
    }
    setFormField() {
        this.formRequest = this.formBuilder.control("", []);
        this.formYear = this.formBuilder.control("", []);
        this.formActionDate = this.formBuilder.control("", []);
        this.formDueDate = this.formBuilder.control("", []);
        this.formIssueDate = this.formBuilder.control("", []);
        this.formPolicy = this.formBuilder.control("", []);
        this.formProposal = this.formBuilder.control("", []);
        this.formSet = this.formBuilder.control("", []);
        this.formClientCode = this.formBuilder.control("", []);
        this.formClientName = this.formBuilder.control("", []);
        this.formEffectiveDate = this.formBuilder.control("", []);
        this.formMaturitySetled = this.formBuilder.control("", []);
        this.formUnitLinked = this.formBuilder.control("", []);
        this.formEmployer = this.formBuilder.control("", []);
        this.formAdviceInstruct = this.formBuilder.control("", []);
        this.formComments = this.formBuilder.control("", []);
        this.formCaseReadyTo = this.formBuilder.control("", []);
        this.formCRTRemarks = this.formBuilder.control("", []);
        this.formRefundTo = this.formBuilder.control("", []);
        this.formPayment = this.formBuilder.control("", []);
        this.settlementForm = this.formBuilder.group({
            formRequest: this.formRequest,
            formYear: this.formYear,
            formActionDate: this.formActionDate,
            formDueDate: this.formDueDate,
            formIssueDate: this.formIssueDate,
            formPolicy: this.formPolicy,
            formProposal: this.formProposal,
            formSet: this.formSet,
            formClientCode: this.formClientCode,
            formClientName: this.formClientName,
            formEffectiveDate: this.formEffectiveDate,
            formMaturitySetled: this.formMaturitySetled,
            formUnitLinked: this.formUnitLinked,
            formEmployer: this.formEmployer,
            formAdviceInstruct: this.formAdviceInstruct,
            formComments: this.formComments,
            formCaseReadyTo: this.formCaseReadyTo,
            formCRTRemarks: this.formCRTRemarks,
            formRefundTo: this.formRefundTo,
            formPayment: this.formPayment,
        });
        this.formComment = this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        this.formStatusType = this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]);
        this.commentForm = this.formBuilder.group({
            formComment: this.formComment,
            formStatusType: this.formStatusType
        });
    }
    onRightBarBtnClick() {
        console.log("onRightBarBtnClick() is invoked!", this.isRightBarShowing);
        if (this.isRightBarShowing) {
            this.isRightBarShowing = false;
        }
        else {
            this.isRightBarShowing = true;
        }
        console.log(this.isRightBarShowing);
    }
    onTDBtnClick() {
        console.log("onTDBtnClick() is invoked!", this.isTBShowing);
        if (this.isTBShowing) {
            this.isTBShowing = false;
        }
        else {
            this.isTBShowing = true;
        }
        console.log(this.isTBShowing);
    }
    onProposalSearchChange(event) {
        console.log("onProposalSearchChange() is invoked!", event, event.srcElement.value, this.searchProposal, this.searchProposal.length);
        this.initializeItems();
        // set q to the value of the searchbar
        var q = event.srcElement.value;
        console.log(q);
        // if the value is an empty string don't filter the items
        if (!q) {
            return;
        }
        this.newProposalList = this.newProposalList.filter((v) => {
            console.log(v, v.proposal);
            if (v.proposal != null && v.proposal != undefined && q) {
                if (v.proposal.toLowerCase().indexOf(q.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });
        console.log(q, this.newProposalList.length);
    }
    initializeItems() {
        this.newProposalList = this.newProposalSearchList;
        console.log(this.newProposalList);
    }
    onProposalClick(item) {
        console.log("onProposalClick() is invoked!", item);
        this.selectedProposalId = item.id;
    }
    onDetailsClick() {
        console.log("onDetailsClick() is invoked!");
        this.isDetails = true;
    }
    onEDocsClick() {
        console.log("onEDocsClick() is invoked!");
    }
    onEDocsDocClick(item) {
        console.log("onEDocsDocClick() is invoked!", item);
        this.selectedDocId = item.id;
        if (!this.isTBShowing) {
            this.showDocumentInModal();
        }
        else {
            this.isDetails = false;
            this.isEdocModal = false;
        }
    }
    showDocumentInModal() {
        console.log("showDocumentInModal() is invoked!");
        this.isDetails = true;
        this.isEdocModal = true;
    }
    fullScreenModal() {
        console.log("fullScreenModal() is invoked!");
        this.isModelFullScreen = true;
    }
    exitFullScreenModal() {
        console.log("exitFullScreenModal() is invoked!");
        this.isModelFullScreen = false;
    }
    fitModal() {
        console.log("fitModal() is invoked!");
        this.isDetails = false;
        this.isEdocModal = false;
    }
    closeDocModal() {
        console.log("closeDocModal() is invoked!");
        this.isDetails = true;
        this.isEdocModal = false;
        this.selectedDocId = 0;
    }
    openModel() {
        this.modalReference = this.modalService.open(this.largeDataModal, {
            centered: true,
            size: "lg",
            backdrop: "static",
        });
        this.modalReference.result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
    }
    onModelClose() {
        console.log("onModelClose() is invoked!");
        this.modalReference.close("Close By Click on ICON");
    }
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.ESC) {
            return "by pressing ESC";
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.ModalDismissReasons.BACKDROP_CLICK) {
            return "by clicking on a backdrop";
        }
        else {
            return `with: ${reason}`;
        }
    }
    addCommentModel() {
        this.modalReference = this.modalService.open(this.addCommentModal, {
            centered: true,
            size: "lg",
            backdrop: "static",
        });
        this.modalReference.result.then((result) => {
            console.log(`Closed with: ${result}`);
        }, (reason) => {
            console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
    }
    onAddCommentModelClose() {
        console.log("onAddCommentModelClose() is invoked!");
        this.modalReference.close("Close By Click on ICON");
    }
    onSettlementSubmit(formValues) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log("onSettlementSubmit() is invoked!", formValues);
        });
    }
    addNewRecordClick() {
        console.log("addNewRecordClick() is invoked!");
    }
    onEmployerChange(event) {
        console.log("addNewRecordClick() is invoked!", event, this.formEmployer.value);
    }
    onCaseReadyToChange(event) {
        console.log("onCaseReadyToChange() is invoked!", event, this.formCaseReadyTo.value);
    }
    onRefundToChange(event) {
        console.log("onRefundToChange() is invoked!", event, this.formRefundTo.value);
    }
    onPaymentChange(event) {
        console.log("onPaymentChange() is invoked!", event, this.formPayment.value);
    }
    scrolling(event) {
        //console.log("scrolling() is invoked!", event);
    }
    onSectionChange(event) {
        console.log("onSectionChange() is invoked!", event);
        this.selectedTab = event;
    }
    scrollTo(selection) {
        console.log("scrollTo() is invoked!", selection);
        document
            .querySelector("#" + selection)
            .scrollIntoView({ behavior: "smooth" });
    }
    upload(files) {
        console.log("upload() is invoked!", files);
        this.refDocList = [];
        if (files.length === 0)
            return;
        for (let i = 0; i < files.length; i++) {
            let reader = new FileReader();
            reader.readAsDataURL(files[i]);
            reader.onload = (_event) => {
                let mimeType = "pdf";
                if (files[i].type.match(/image/g) != null) {
                    mimeType = "image";
                }
                else if (files[i].type.match(/pdf/g) != null) {
                    mimeType = "pdf";
                }
                else if (files[i].type.match(/wordprocessingml/g) != null) {
                    mimeType = "word";
                }
                else if (files[i].type.match(/spreadsheetml/g) != null) {
                    mimeType = "excel";
                }
                else {
                    mimeType = "document";
                }
                let item = {
                    id: new Date().getTime() + i,
                    imgURL: reader.result,
                    mimeType: mimeType,
                    fileName: files[i].name,
                    fileKeyword: "",
                    fileDesc: "",
                };
                this.refDocList.push(item);
            };
        }
        console.log(this.refDocList);
    }
    CBCRequest() {
        console.log("CBCRequest() is invoked!");
    }
    onCommentStatusTypeChange(event) {
        console.log("onCommentStatusTypeChange() is invoked!", event);
    }
    onCommentSubmit(values) {
        console.log("onCommentSubmit() is invoked!", values);
    }
}
ReqNewComponent.ɵfac = function ReqNewComponent_Factory(t) { return new (t || ReqNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
ReqNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ReqNewComponent, selectors: [["app-req-new"]], viewQuery: function ReqNewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.largeDataModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addCommentModal = _t.first);
    } }, decls: 681, vars: 79, consts: [[1, "container-fluid", "p-0", "custom-container-fluid"], [1, "custom-content", 3, "ngClass"], [1, "details-screen"], [1, "h-100", 3, "formGroup", "ngSubmit"], [1, "topDetails", 3, "ngClass"], ["class", "top-details-content", 4, "ngIf"], ["class", "edoc-details-content", 4, "ngIf"], [1, "belowDetails", 3, "ngClass"], [1, "card", "m-0", "h-100"], [1, "card-body", "p-0", "h-100"], [1, "ctn"], [1, "ctn-ul"], [1, "ctn-li", 3, "ngClass", "click"], ["scrollSpy", "", 1, "custom-toolbar-content", 3, "spiedTags", "sectionChange"], ["id", "section1", 1, "custom-content-body"], [1, "row", "w-100", "m-0"], [1, "col-1", "p-0", "d-flex", "align-items-center", "justify-content-end"], [1, "d-flex", "align-items-center", "justify-content-end", "font-size-12", "m-0"], [1, "col-4", "pr-0"], [1, "form-control", "form-control-sm", "custom-activity-dd"], [1, "col-7"], [1, "card", "activity-card", "m-0", "mt-2"], [1, "card-header", "pl-0", "pr-0", "pt-2", "pb-0", "bg-white"], [1, "m-0", "font-size-14"], [1, "card-body", "p-0", "pt-2", "pb-2"], [1, "table", "table-centered", "table-nowrap", "table-sm", "m-0", "font-size-12"], [1, "thead-light", "custom-activity-header"], [1, "text-right"], [1, "card", "activity-card", "h-100", "m-0", "mt-2", "mb-2"], ["id", "section2", 1, "custom-content-body"], [1, "col-6", "p-0"], [1, "card", "activity-card", "m-0", "mr-1"], [1, "card-body", "p-0", "pt-2", "pb-0"], [1, "custom-td-pr"], [1, "custom-td-pr", "text-right"], ["value", "344,490.72", 1, "custom-td-input"], ["colspan", "2", 1, "text-right"], [1, "badge", "badge-pill", "badge-soft-primary", "font-size-11"], [1, "card", "activity-card", "m-0", "ml-1"], ["value", "350.00", 1, "custom-td-input"], ["value", "4,297.00", 1, "custom-td-input"], ["value", "172,892.36", 1, "custom-td-input"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-11"], [1, "col-12", "mt-2", "p-0"], [1, "badge", "badge-pill", "badge-soft-danger", "font-size-11"], ["id", "section3", 1, "custom-content-body"], ["type", "checkbox"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm", "custom-group-btn", "btn-yn-w"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light"], ["type", "text", 1, "form-control", "form-control-sm"], ["type", "checkbox", "checked", ""], ["id", "section4", 1, "custom-content-body"], [1, ""], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-end", "pr-2"], [1, "col-10", "p-0"], [1, "form-control", "form-control-sm"], [1, "row", "w-100", "m-0", "mt-2"], [1, "col-2", "p-0", "text-right"], [1, "col-3", "p-0", "text-right"], [1, "ml-2"], [1, "table", "table-sm", "table-bordered", "bg-gray", "m-0", "font-size-12"], [1, "col-4", "p-0", "pr-2"], [1, "btn", "btn-sm", "btn-outline-primary", "btn-block", "active"], [1, "col-4", "p-0"], [1, "btn", "btn-sm", "btn-outline-primary", "btn-block"], [1, "col-4", "p-0", "pl-2"], [1, "payee-content", "d-none"], [1, "col-2", "p-0"], [1, "col-3", "p-0", "pr-2"], [1, "col-3", "p-0", "pl-2"], ["id", "section5", 1, "custom-content-body"], [1, "ref-doc-top"], [1, "m-0"], [1, "ref-doc-top-tool"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["file", ""], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "bx", "bx-upload", "mr-2"], [1, "table", "table-centered", "table-nowrap", "table-sm", "m-0", "mt-2", "font-size-12"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "section6", 1, "custom-content-body"], [1, "bx", "bx-git-pull-request", "mr-2"], ["id", "section7", 1, "custom-content-body"], [1, "custom-comment"], [1, "comment-head"], ["title", "Add new Comments", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "bx", "bx-plus"], [1, "verti-timeline", "list-unstyled"], ["class", "event-list", 4, "ngFor", "ngForOf"], [1, "custom-td-btn", 3, "ngClass"], ["type", "button", 1, "btn", "btn-light", "custom-btn-tb", "btn-sm", 3, "title", "ngClass", "click"], [1, "font-size-14", "align-middle", "bx", 3, "ngClass"], [1, "custom-rsb"], [1, "custom-rsb-content"], ["ngbNav", "", 1, "nav-tabs", "nav-tabs-custom", "nav-justified", 3, "activeId"], ["customNavSRB", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "font-size-12", "p-2", 3, "click"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "SRB-tabs-content", 3, "ngbNavOutlet"], [1, "side-bar-arrow"], ["type", "button", 1, "btn", "btn-light", "custom-btn-sb", "btn-sm", 3, "title", "click"], ["class", "custom-model", 3, "ngDraggable", "ngResizable", "rzHandles", "ngClass", 4, "ngIf"], ["largeDataModal", ""], ["addCommentModal", ""], [1, "top-details-content"], [1, "top-details-content-header"], ["title", "Settlement", 1, "h-100", "overflow-hidden", 3, "breadcrumbItems"], [1, "top-header-tool-item"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-success", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], [1, "mdi", "mdi-chevron-down", "ml-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", "btn-sm"], ["title", "Add New Record", 1, "btn", "btn-outline-light", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-plus", "font-size-16", "mr-2"], ["title", "Delete Record", 1, "btn", "btn-outline-danger", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bxs-trash-alt", "font-size-16", "mr-2"], ["title", "Save Record", 1, "btn", "btn-outline-primary", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-save", "font-size-16", "mr-2"], ["title", "Clear Record", 1, "btn", "btn-outline-light", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-reset", "font-size-16", "mr-2"], [1, "top-details-content-body"], [1, "h-100"], [1, "row", "w-100", "m-0", "h-100"], [1, "col-12", "h-100", "p-2"], [1, "table", "table-sm", "table-striped", "m-0"], [1, "master-form-td", "td", "font-weight-bold"], [1, "master-form-td", "td"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm", "custom-group-btn"], ["type", "button", "disabled", "true", 1, "btn", "btn-light"], ["type", "button", "disabled", "true", 1, "btn", "btn-primary"], ["colspan", "3", 1, "master-form-td", "td"], [1, "text-left"], ["colspan", "7", 1, "master-form-td", "td"], [1, "h-100", "d-none"], [1, "row", "w-100", "m-0", "h-100", "p-1"], [1, "col-6", "h-100", "p-0"], [1, "top-cotent-form-left"], [1, "form-group", "row", "m-0"], ["for", "request-no-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-2", "p-0"], ["type", "text", "formControlName", "formRequest", "id", "request-no-input", 1, "form-control", "form-control-sm", "p-1"], [1, "validation-errors"], ["for", "year-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formYear", "id", "year-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "action-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formActionDate", "placeholder", "dd/mm/yyyy", "id", "action-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], [1, "form-group", "row", "m-0", "mt-2"], ["for", "policy-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formPolicy", "id", "policy-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "proposal-input", 1, "col-md-2", "col-form-label", "text-right", "pl-0", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formProposal", "id", "proposal-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "set-input", 1, "col-md-2", "col-form-label", "text-right", "pl-0", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formSet", "id", "set-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "effective-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formEffectiveDate", "placeholder", "dd/mm/yyyy", "id", "effective-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], [1, "form-check", "form-check-right", "col-md-4", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "checkbox", "formControlName", "formMaturitySetled", "id", "maturity-settled-checkbox", 1, "form-check-input", "m-0"], ["for", "maturity-settled-checkbox", 1, "form-check-label", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "checkbox", "formControlName", "formUnitLinked", "id", "unit-link-checkbox", 1, "form-check-input", "m-0"], ["for", "unit-link-checkbox", 1, "form-check-label", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["for", "advice-instruct-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-10", "p-0"], ["type", "text", "formControlName", "formAdviceInstruct", "id", "advice-instruct-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "comments-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formComments", "id", "comments-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "crt-remarks-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formCRTRemarks", "id", "crt-remarks-input", 1, "form-control", "form-control-sm", "p-1"], [1, "top-cotent-form-right"], ["for", "due-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-4", "p-0"], ["type", "text", "placeholder", "dd/mm/yyyy", "formControlName", "formDueDate", "id", "due-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], ["for", "issue-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "placeholder", "dd/mm/yyyy", "formControlName", "formIssueDate", "id", "issue-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], ["for", "client-code-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formClientCode", "id", "client-code-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "client-name-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formClientName", "id", "client-name-input", 1, "form-control", "form-control-sm", "p-1"], [1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formEmployer", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formCaseReadyTo", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formRefundTo", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formPayment", 1, "custom-dd", 3, "items", "change"], ["class", "error-message custom-err", 4, "ngIf"], [1, "error-message", "custom-err"], [1, "edoc-details-content"], [1, "edoc-details-content-header"], [1, "custom-doc-btn"], ["title", "Show Document Preview in Modal", 1, "btn", "btn-light", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-copy", "font-size-16"], [1, "edoc-details-content-body"], [3, "src", "useBrowserLocale", "textLayer", "showHandToolButton"], ["width", "24", "height", "24", 3, "src", 4, "ngIf"], ["src", "./assets/images/custom/pdf.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/word.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/excel.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/document.png", "width", "24", "height", "24", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-danger"], [1, "bx", "bx-trash"], ["width", "24", "height", "24", 3, "src"], ["src", "./assets/images/custom/pdf.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/word.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/excel.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/document.png", "width", "24", "height", "24"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "media"], [1, "mr-3"], [1, "font-size-14"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ml-2"], [1, "media-body", "custom-media-body"], [1, "top-header-c"], [1, "mt-2"], [1, "side-bar-details"], [1, "h-100", "bg-white"], [1, "side-bar-details-td", "font-weight-bold"], [1, "side-bar-details-td"], [1, "side-detail-span"], [1, "badge", "badge-pill", "badge-soft-warning", "font-size-11"], [1, "side-bar-list"], [1, "app-search", "custom-app-search", "d-none", "d-lg-block", "p-0"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control", "bg-white", "h-30px", "custom-search-rsb", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "bx", "bx-search-alt", "lh-30px"], [1, "bx", "bx-filter-alt", "lh-30px", "custom-filter-icon", 3, "click"], [1, "proposal-list"], ["class", "col-6 p-0", 4, "ngFor", "ngForOf"], [1, "card", "my-card", "m-0", "mb-2", 3, "ngClass", "click"], [1, "card-body", "p-1"], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-center"], [1, "bx", "bx-file-blank", "font-size-18"], [1, "col-10", "p-0", "d-flex", "align-items-center", "justify-content-center"], [1, "m-0", "p1", "font-size-12"], [1, "edocs-content-list"], ["class", "row w-100 m-0 custom-edocs-row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "card m-0 edoc-card d-none", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", "w-100", "m-0", "custom-edocs-row", 3, "ngClass", "click"], [1, "col-2", "pl-1", "pr-0", "d-flex", "align-items-center", "justify-content-center"], [1, "far", "fa-file-pdf", "font-size-24", "edoc-i"], [1, "col-10", "p-0", "pl-2", "d-flex", "align-items-center"], [1, "custom-col-9-edocs"], [1, "custom-col-9-edocs-p1"], [1, "custom-col-9-edocs-p2"], [1, "span1"], [1, "bx", "bx-calendar-alt", "align-middle", "font-size-12"], [1, "span2"], [1, "bx", "bx-file-blank", "align-middle", "font-size-12"], [1, "card", "m-0", "edoc-card", "d-none", 3, "ngClass", "click"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-2"], [1, "bx", "bxs-file-pdf", "font-size-24", "edoc-i"], [1, "col-6", "p-0", "mb-2", "text-left"], [1, "edoc-span"], [1, "m-0", "edoc-p"], [1, "col-6", "p-0", "mb-2", "text-right"], [1, "col-6", "p-0", "text-left"], [1, "col-6", "p-0", "text-right"], [1, "custom-model", 3, "ngDraggable", "ngResizable", "rzHandles", "ngClass"], [1, "custom-modal-content"], [1, "edoc-details-content-header1"], [1, "custom-doc-modal-btn"], ["class", "btn btn-success btn-sm p-1", "title", "Full Screen Modal", 3, "click", 4, "ngIf"], ["class", "btn btn-warning btn-sm p-1", "title", "Exit Full Screen Modal", 3, "click", 4, "ngIf"], ["title", "Fit in Master Container", 1, "btn", "btn-primary", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-rectangle", "font-size-16"], ["title", "Close Modal", 1, "btn", "btn-danger", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-window-close", "font-size-16"], ["title", "Full Screen Modal", 1, "btn", "btn-success", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-fullscreen", "font-size-16"], ["title", "Exit Full Screen Modal", 1, "btn", "btn-warning", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-exit-fullscreen", "font-size-16"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], [1, "mb-0"], [1, "form-group", "row"], [1, "col-md-3", "text-right", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-9"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formStatusType", 1, "custom-ddd", 3, "items", "change"], ["rows", "5", "formControlName", "formComment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]], template: function ReqNewComponent_Template(rf, ctx) { if (rf & 1) {
        const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReqNewComponent_Template_form_ngSubmit_3_listener() { return ctx.onSettlementSubmit(ctx.settlementForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ReqNewComponent_div_5_Template, 258, 23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReqNewComponent_div_6_Template, 8, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_12_listener() { return ctx.scrollTo("section1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_14_listener() { return ctx.scrollTo("section2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Payable/Receivable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_16_listener() { return ctx.scrollTo("section3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_18_listener() { return ctx.scrollTo("section4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Payee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_20_listener() { return ctx.scrollTo("section5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Ref.Doc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_22_listener() { return ctx.scrollTo("section6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " CBC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_li_click_24_listener() { return ctx.scrollTo("section7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sectionChange", function ReqNewComponent_Template_div_sectionChange_26_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Activity Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "100010050 - Change of Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Activity B");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Sum Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "ETA Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "ETA Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "ETA Sum Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "Pure Endowment");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, " Paid up Sum Assured ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "311");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Save & Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "---");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "311");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Save & Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](94, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](98, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "---");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Benefits");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](118, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Instal.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](121, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](122, " Calculated Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](123, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](124, "Bid Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Units");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](127, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](128, "Amount Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Unit Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "A/U");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "311");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Save & Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](148, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](150, "---");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](153, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "311");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](157, "Save & Assured");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](159, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](163, "20");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](165, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](166, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](167, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](168, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](169, "---");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](170, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](171, "50,00000");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](172, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](174, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](175, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](176, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](178, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](179, "Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](180, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](181, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](182, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](184, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](185, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](186, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](189, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](190, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](191, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](192, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "P37");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](195, "CASH VALUE - 003");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](196, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](197, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](199, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](200, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](201, "Total Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](202, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, " 344,490.72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](206, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](207, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](209, "Receivable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](210, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](215, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](216, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](217, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](218, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](219, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](220, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](222, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](223, "R06");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "SURRENDER FEE");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](229, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](230, "R06");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "ZAKAT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](234, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](236, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, "R06");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, " SURRENDER PENELTY ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](243, "td", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](245, "Total Receivable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](246, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](248, " 176,892.36 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](250, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](253, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](255, "Total Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](257, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](258, " 344,490.72 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](259, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](260, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](261, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](262, "Total Receivable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](263, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](264, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](265, " 176,892.36 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](266, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](267, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](268, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](269, "Net Payable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](270, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](271, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](272, " 176,589.36 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](273, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](274, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](275, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](276, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](277, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](278, "Req. Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](279, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](280, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](281, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](282, "Select Requirement");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](283, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](284, "001 - GENERATE REQUIREMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](285, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](286, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](287, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](288, "h4", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](289, "GENERATE REQUIREMENTS");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](290, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](291, "table", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](292, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](293, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](294, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](295, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](296, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](297, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](298, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](299, "Sr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](300, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](301, "Auto Genr.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](302, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](303, "Req. Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](304, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](305, "Req. Recv/Not");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](306, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](307, "Req. Recv/Not Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](308, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](309, "Req. Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](310, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](311, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](312, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](313, "B05");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](314, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](315, "APPROVAL FROM BANK/AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](316, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](317, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](318, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](319, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](320, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](321, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](322, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](323, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](324, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](325, " Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](326, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](327, " Not Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](328, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](329, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](330, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](331, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](332, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](333, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](334, "B25");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](335, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](336, "POLICY DOCUMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](337, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](338, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](339, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](340, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](341, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](342, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](343, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](344, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](345, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](346, " Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](347, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](348, " Not Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](349, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](350, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](351, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](352, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](353, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](354, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](355, "B78");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](356, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](357, "ZAKAT DECLARATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](358, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](359, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](360, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](361, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](362, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](363, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](364, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](365, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](366, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](367, " Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](368, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](369, " Not Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](370, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](371, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](372, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](373, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](374, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](375, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](376, "B92");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](377, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](378, "SURRENDER FORM");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](379, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](380, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](381, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](382, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](383, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](384, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](385, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](386, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](387, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](388, " Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](389, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](390, " Not Recv ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](391, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](392, "08/03/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](393, "td", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](394, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](395, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](396, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](397, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](398, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](399, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](400, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](401, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](402, " Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](403, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](404, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](405, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](406, "Bank Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](407, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](408, "Auto Cheque");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](409, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](410, "Bank Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](411, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](412, "Money Transfer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](413, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](414, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](415, " Bank ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](416, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](417, "select", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](418, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](419, "21 - MCB");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](420, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](421, "26 - FBL");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](422, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](423, "29 - FSF");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](424, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](425, "80 - AGENCY");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](426, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](427, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](428, " A/C No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](429, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](430, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](431, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](432, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](433, " A/C Title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](434, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](435, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](436, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](437, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](438, " Percentage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](439, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](440, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](441, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](442, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](443, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](444, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](445, " Amount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](446, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](447, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](448, " 10000.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](449, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](450, " Total ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](451, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](452, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](453, " 10000.00 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](454, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](455, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](456, "table", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](457, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](458, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](459, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](460, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](461, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](462, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](463, "Dummy Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](464, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](465, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](466, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](467, "CNIC NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](468, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](469, "Dummy CNIC NO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](470, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](471, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](472, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](473, "Address 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](474, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](475, "Dummy Address 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](476, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](477, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](478, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](479, "Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](480, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](481, "Dummy Address 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](482, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](483, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](484, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](485, "Address 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](486, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](487, "Dummy Address 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](488, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](489, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](490, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](491, " Business Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](492, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](493, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](494, " Correspondence Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](495, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](496, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](497, " Beneficiary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](498, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](499, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](500, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](501, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](502, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](503, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](504, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](505, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](506, " CNIC NO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](507, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](508, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](509, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](510, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](511, " Address 1 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](512, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](513, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](514, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](515, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](516, " Address 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](517, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](518, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](519, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](520, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](521, " Address 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](522, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](523, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](524, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](525, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](526, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](527, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](528, " Business Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](529, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](530, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](531, " Correspondence Address ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](532, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](533, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](534, " Beneficiary ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](535, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](536, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](537, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](538, "h5", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](539, "Reference Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](540, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](541, "input", 75, 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ReqNewComponent_Template_input_change_541_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r146); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](542); return ctx.upload(_r2.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_button_click_543_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r146); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](542); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](544, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](545, " Upload Files ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](546, "table", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](547, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](548, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](549, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](550, "Doc ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](551, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](552, "Doc Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](553, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](554, "Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](555, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](556, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](557, "th", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](558, "Doc Preview");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](559, "th", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](560, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](561, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](562, ReqNewComponent_tr_562_Template, 18, 7, "tr", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](563, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](564, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](565, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](566, "h5", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](567, "CBC Remarks");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](568, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](569, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_button_click_569_listener() { return ctx.CBCRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](570, "i", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](571, " CBC Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](572, "table", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](573, "thead", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](574, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](575, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](576, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](577, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](578, "CBC By");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](579, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](580, "Date Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](581, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](582, "CBC Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](583, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](584, "CBC Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](585, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](586, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](587, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](588, "0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](589, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](590, "MAHA RAZA-0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](591, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](592, "04/08/2020 05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](593, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](594, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](595, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](596, "Some CBD Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](597, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](598, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](599, "0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](600, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](601, "MAHA RAZA-0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](602, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](603, "04/08/2020 05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](604, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](605, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](606, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](607, "Some CBD Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](608, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](609, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](610, "0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](611, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](612, "MAHA RAZA-0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](613, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](614, "04/08/2020 05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](615, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](616, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](617, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](618, "Some CBD Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](619, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](620, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](621, "0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](622, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](623, "MAHA RAZA-0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](624, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](625, "04/08/2020 05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](626, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](627, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](628, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](629, "Some CBD Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](630, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](631, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](632, "0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](633, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](634, "MAHA RAZA-0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](635, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](636, "04/08/2020 05:22");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](637, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](638, "Pending");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](639, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](640, "Some CBD Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](641, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](642, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](643, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](644, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](645, "All Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](646, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_button_click_646_listener() { return ctx.addCommentModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](647, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](648, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "ul", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](650, ReqNewComponent_li_650_Template, 16, 4, "li", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](651, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](652, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_button_click_652_listener() { return ctx.onTDBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](653, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](654, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](655, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](656, "ul", 96, 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](658, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_a_click_659_listener() { return ctx.onDetailsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](660, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](661, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](662, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](663, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](664, ReqNewComponent_ng_template_664_Template, 38, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](665, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](666, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_a_click_666_listener() { return ctx.onEDocsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](668, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "Edocs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](671, ReqNewComponent_ng_template_671_Template, 4, 2, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](672, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](673, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](674, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReqNewComponent_Template_button_click_674_listener() { return ctx.onRightBarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](675, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](676, ReqNewComponent_div_676_Template, 13, 12, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](677, ReqNewComponent_ng_template_677_Template, 12, 0, "ng-template", null, 108, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](679, ReqNewComponent_ng_template_679_Template, 25, 5, "ng-template", null, 109, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](657);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](45, _c7, ctx.isRightBarShowing, !ctx.isRightBarShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.settlementForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c8, !ctx.isTBShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isDetails && !ctx.isEdocModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](50, _c9, !ctx.isTBShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](52, _c10, ctx.selectedTab == "section1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](54, _c10, ctx.selectedTab == "section2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](56, _c10, ctx.selectedTab == "section3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](58, _c10, ctx.selectedTab == "section4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](60, _c10, ctx.selectedTab == "section5"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](62, _c10, ctx.selectedTab == "section6"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](64, _c10, ctx.selectedTab == "section7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](66, _c11));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](145);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](122);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](140);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.refDocList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("height", !ctx.isTBShowing ? 100 : 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.commentList);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](67, _c12, ctx.isTBShowing, !ctx.isTBShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.isTBShowing ? "Hide Top Content" : "Show Top Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](70, _c13, ctx.isTBShowing, !ctx.isTBShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](73, _c14, ctx.isTBShowing, !ctx.isTBShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("right", ctx.isRightBarShowing ? 0 : -250, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngbNavOutlet", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("right", ctx.isRightBarShowing ? 250 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("title", ctx.isRightBarShowing ? "Hide Right Sidebar" : "Show Right Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](76, _c15, ctx.isRightBarShowing, !ctx.isRightBarShowing));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isEdocModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxExtendedPdfViewerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__.AngularDraggableDirective, ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__.AngularResizableDirective], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap\");\n\n\n.ps[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n.ps__rail-x[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  \n  bottom: 0px;\n  \n  position: absolute;\n}\n.ps__rail-y[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  \n  right: 0;\n  \n  position: absolute;\n}\n.ps--active-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  display: block;\n  background-color: transparent;\n}\n.ps[_ngcontent-%COMP%]:hover    > .ps__rail-x[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]:hover    > .ps__rail-y[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%], .ps--scrolling-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--scrolling-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-x.ps--clicking[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]   .ps__rail-y.ps--clicking[_ngcontent-%COMP%] {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n.ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  \n  bottom: 2px;\n  \n  position: absolute;\n}\n.ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  \n  right: 2px;\n  \n  position: absolute;\n}\n.ps__rail-x[_ngcontent-%COMP%]:hover    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x[_ngcontent-%COMP%]:focus    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y[_ngcontent-%COMP%]:hover    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #999;\n  width: 11px;\n}\n\n@supports (-ms-overflow-style: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}\n.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}\n.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}\n.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}\n.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}\n.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}\n.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}\n.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}\n.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{background-color:#ebf5ff;font-weight:600}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}\n#page-topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1002;\n  background-color: #0074c8;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\n.navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  height: 50px;\n  padding: 0 calc(24px / 2) 0 0;\n}\n.navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.navbar-brand-box[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  text-align: center;\n  width: 250px;\n}\n.logo[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.logo[_ngcontent-%COMP%]   .logo-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n.logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.app-search[_ngcontent-%COMP%] {\n  padding: calc(12px / 2) 0;\n}\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  height: 38px;\n  padding-left: 40px;\n  padding-right: 20px;\n  background-color: #f3f3f9;\n  box-shadow: none;\n  border-radius: 30px;\n}\n.app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  font-size: 16px;\n  line-height: 38px;\n  left: 13px;\n  top: 0;\n  color: #74788d;\n}\n.megamenu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 0px;\n}\n.megamenu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #495057;\n}\n@media (max-width: 992px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .logo[_ngcontent-%COMP%]   span.logo-lg[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%]   span.logo-sm[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.page-content[_ngcontent-%COMP%] {\n  padding: calc(50px) 0px 0px 0px;\n}\n.header-item[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: none !important;\n  color: #fff;\n  border: 0;\n  border-radius: 0px;\n}\n.header-item[_ngcontent-%COMP%]:hover {\n  color: #555b6d;\n}\n.header-profile-user[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 36px;\n  background-color: #f6f6f6;\n  padding: 3px;\n}\n.noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.noti-icon[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  margin-left: -10px;\n}\n.notification-item[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n}\n.notification-item[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:hover {\n  background-color: #f6f6f6;\n}\n.dropdown-icon-item[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 3px;\n  line-height: 34px;\n  text-align: center;\n  padding: 15px 0 9px;\n  display: block;\n  border: 1px solid transparent;\n  color: #74788d;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]:hover {\n  border-color: #eff2f7;\n}\n.fullscreen-enable[_ngcontent-%COMP%]   [data-toggle=fullscreen][_ngcontent-%COMP%]   .bx-fullscreen[_ngcontent-%COMP%]::before {\n  content: \"\uEA3F\";\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-profile-user[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.25);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 600px) {\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    left: 10px !important;\n    right: 10px !important;\n  }\n}\n@media (max-width: 380px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-profile-user[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.25);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 600px) {\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    left: 10px !important;\n    right: 10px !important;\n  }\n}\n@media (max-width: 380px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: auto;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: calc(55px) 0px 0px 0px;\n}\n@media (max-width: 992px) {\n  body[data-layout=horizontal][_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n.page-title-box[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n.page-title-box[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n}\n.page-title-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 16px !important;\n}\n.footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  padding: 20px calc(24px / 2);\n  position: absolute;\n  right: 0;\n  color: #74788d;\n  left: 250px;\n  height: 60px;\n  background-color: #f2f2f5;\n}\n@media (max-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 50px;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\n.right-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);\n  display: block;\n  position: fixed;\n  transition: all 200ms ease-out;\n  width: 280px;\n  z-index: 9999;\n  float: right !important;\n  right: -290px;\n  top: 0;\n  bottom: 0;\n}\n.right-bar[_ngcontent-%COMP%]   .right-bar-toggle[_ngcontent-%COMP%] {\n  background-color: #444c54;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  color: #eff2f7;\n  text-align: center;\n  border-radius: 50%;\n}\n.right-bar[_ngcontent-%COMP%]   .right-bar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #4b545c;\n}\n.rightbar-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(52, 58, 64, 0.55);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 9998;\n  transition: all 0.2s ease-out;\n}\n.right-bar-enabled[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%] {\n  right: 0;\n}\n.right-bar-enabled[_ngcontent-%COMP%]   .rightbar-overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 767.98px) {\n  .right-bar[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  .right-bar[_ngcontent-%COMP%]   .slimscroll-menu[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n}\n.metismenu[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.metismenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse[_ngcontent-%COMP%] {\n  display: none;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse[_ngcontent-%COMP%]:not(.mm-show) {\n  display: none;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse.mm-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapsing[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease;\n  transition-duration: 0.35s;\n  transition-property: height, visibility;\n}\n.vertical-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  z-index: 1001;\n  background: #ffffff;\n  bottom: 0;\n  margin-top: 0;\n  position: fixed;\n  top: 50px;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 250px;\n  overflow: hidden;\n}\n.main-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 15px 10px 15px;\n  margin-top: 50px;\n}\n#sidebar-menu[_ngcontent-%COMP%] {\n  padding: 10px 0 30px 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > .has-arrow[_ngcontent-%COMP%]:after {\n  transform: rotate(-180deg);\n}\n#sidebar-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after {\n  content: \"\uDB80\uDD40\";\n  font-family: \"Material Design Icons\";\n  display: block;\n  float: right;\n  transition: transform 0.2s;\n  font-size: 1rem;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.625rem 1.5rem;\n  color: #545a6d;\n  position: relative;\n  font-size: 13px;\n  transition: all 0.4s;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 1.75rem;\n  padding-bottom: 0.125em;\n  font-size: 1.25rem;\n  line-height: 1.40625rem;\n  vertical-align: middle;\n  color: #7f8387;\n  transition: all 0.4s;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #383c40;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #383c40;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.5rem 0.4rem 3.5rem;\n  font-size: 13px;\n  color: #545a6d;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.5rem 0.4rem 4.5rem;\n  font-size: 13.5px;\n}\n.menu-title[_ngcontent-%COMP%] {\n  padding: 12px 20px !important;\n  letter-spacing: 0.05em;\n  pointer-events: none;\n  cursor: default;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #7f8387;\n  font-weight: 600;\n}\nbody.overflow-h[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n.mm-active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n@media (max-width: 992px) {\n  .vertical-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n\n  body.sidebar-enable[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: 50px !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span.logo-lg[_ngcontent-%COMP%] {\n  display: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span.logo-sm[_ngcontent-%COMP%] {\n  display: block;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px !important;\n  z-index: 5;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   perfect-scrollbar[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   perfect-scrollbar[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-mask[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-content-wrapper[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-scrollbar[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-offset[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .collapse.in[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .nav.collapse[_ngcontent-%COMP%] {\n  height: inherit !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  min-height: 55px;\n  transition: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #383c40;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  margin-left: 4px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n  padding-left: 25px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(190px + 50px);\n  color: #0074c8;\n  background-color: whitesmoke;\n  transition: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0074c8;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  display: block;\n  left: 50px;\n  position: absolute;\n  width: 190px;\n  height: auto !important;\n  box-shadow: 3px 5px 10px 0 rgba(54, 61, 71, 0.1);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  box-shadow: 3px 5px 10px 0 rgba(54, 61, 71, 0.1);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-shadow: none;\n  padding: 8px 20px;\n  position: relative;\n  width: 190px;\n  z-index: 6;\n  color: #545a6d;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #383c40;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  display: block;\n  left: 190px;\n  height: auto !important;\n  margin-top: -36px;\n  position: absolute;\n  width: 190px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span.pull-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n  transform: rotate(270deg);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f8f9fa;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a6b0cf;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6a7187;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #79829c;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  background: #2e3548;\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #79829c;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%] {\n  color: #6a7187;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  width: 160px;\n  text-align: center;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after, body[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: none !important;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-title[_ngcontent-%COMP%] {\n  background-color: #2e3548;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%] {\n  text-align: left;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 50px;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], body[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody[data-sidebar=colored].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  background-color: #007ad2;\n}\nbody[data-sidebar=colored].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.topnav[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0 calc(24px / 2);\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  margin-top: 50px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\n.topnav[_ngcontent-%COMP%]   .topnav-menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: relative;\n  padding: 1rem 1.3rem;\n  color: #545a6d;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #556ee6;\n  background-color: transparent;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: #545a6d;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #556ee6;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #556ee6;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #556ee6;\n  background-color: transparent;\n}\n@media (min-width: 1200px) {\n  body[data-layout=horizontal][_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%], body[data-layout=horizontal][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n}\n@media (min-width: 992px) {\n  .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-of-type   .nav-link[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding: 0.5rem 1.5rem;\n    min-width: 180px;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown.mega-dropdown[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    left: 0px;\n    right: auto;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    margin-top: 0;\n    border-radius: 0 0 0.25rem 0.25rem;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%]::after {\n    right: 15px;\n    transform: rotate(-135deg) translateY(-50%);\n    position: absolute;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 100%;\n    display: none;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .navbar-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.arrow-down[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.arrow-down[_ngcontent-%COMP%]:after {\n  border-color: initial;\n  border-style: solid;\n  border-width: 0 0 1px 1px;\n  content: \"\";\n  height: 0.4em;\n  display: inline-block;\n  right: 5px;\n  top: 50%;\n  margin-left: 10px;\n  transform: rotate(-45deg) translateY(-50%);\n  transform-origin: top;\n  transition: all 0.3s ease-out;\n  width: 0.4em;\n}\n@media (max-width: 1199.98px) {\n  .topnav-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    right: 100%;\n    left: auto;\n  }\n}\n@media (max-width: 991.98px) {\n  .topnav[_ngcontent-%COMP%] {\n    max-height: 360px;\n    overflow-y: auto;\n    padding: 0;\n  }\n  .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.1rem;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    padding-left: 15px;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: transparent;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n    color: #0074c8;\n  }\n  .topnav[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%]::after {\n    right: 15px;\n    position: absolute;\n  }\n}\n@media (min-width: 992px) {\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%] {\n    background-color: #0074c8;\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.5);\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n  box-shadow: none;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\n@media (min-width: 992px) {\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%] {\n    background-color: #0074c8;\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.5);\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%] {\n  background-color: #ebebf4;\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   #layout-wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8fb;\n  max-width: 1300px;\n  margin: 0 auto;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: 0 auto;\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: calc(1300px - 250px);\n}\nbody[data-layout-size=boxed].vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  max-width: calc(1300px - 50px);\n}\nbody[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   #layout-wrapper[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nbody[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n  max-width: 1300px;\n}\n.ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:hover    > .ps__thumb-y[_ngcontent-%COMP%] {\n  width: 6px !important;\n  background-color: transparent !important;\n}\n.ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #a2adb7 !important;\n}\nperfect-scrollbar[_ngcontent-%COMP%]    > .ps.ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%]:hover {\n  width: auto !important;\n}\n.ps--active-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.home-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 25px;\n}\n.custom-container-fluid[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n  overflow: hidden;\n}\n.custom-content[_ngcontent-%COMP%] {\n  margin-right: 250px;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.custom-rsb[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0px;\n  top: 50px;\n  width: 250px;\n  height: calc(100% - 50px);\n  background-color: #f8f8fb;\n}\n.side-bar-arrow[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  right: 250px;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.custom-top-rsb[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 10px !important;\n}\n.custom-proposal-rsb[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  padding-top: 8px;\n  background: #efefef;\n}\n.custom-app-search[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n.proposal-list[_ngcontent-%COMP%] {\n  height: calc(100% - 46px);\n  overflow: hidden;\n}\n.p2[_ngcontent-%COMP%] {\n  color: #898989;\n}\n.my-card[_ngcontent-%COMP%] {\n  margin: 0px 8px 5px !important;\n  cursor: pointer;\n  background: #eeeeee;\n}\n.my-card[_ngcontent-%COMP%]:hover {\n  background-color: #0074c8;\n  color: #fff;\n}\n.my-card[_ngcontent-%COMP%]:hover   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.bg-blueActive[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n  color: #fff;\n}\n.bg-blueActive[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.bg-greenActive[_ngcontent-%COMP%] {\n  background-color: #00946d;\n  color: #fff;\n}\n.bg-greenActive[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.details-screen[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.edocs-screen[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.topDetails[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.top-details-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.top-details-content-header[_ngcontent-%COMP%] {\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fefefe;\n}\n.top-details-content-body[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  overflow: hidden;\n  background-color: #ffffff;\n}\n.edoc-details-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.edoc-details-content-header[_ngcontent-%COMP%] {\n  height: 35px;\n  background: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.custom-doc-btn[_ngcontent-%COMP%] {\n  padding-right: 35px;\n  height: 27px;\n  overflow: hidden;\n}\n.custom-doc-btn[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  background-color: #f8f8fb !important;\n  border-radius: 0px !important;\n  height: 100%;\n  width: 30px;\n}\n.belowDetails[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.belowDetails.expanded[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.belowDetails.compressed[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.details-tabs-content[_ngcontent-%COMP%] {\n  height: calc(100% - 36px);\n  background: #f6f6f6;\n}\n[_nghost-%COMP%]    .details-tabs-content > .active {\n  height: 100% !important;\n}\n[_nghost-%COMP%]    .custom-active-tab-d > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n  padding: 10px;\n}\n.edocs-sidebar[_ngcontent-%COMP%] {\n  width: 30%;\n  float: left;\n  height: 100%;\n  background: #fefefe;\n  overflow: hidden;\n  padding: 10px 0px;\n}\n.edocs-content[_ngcontent-%COMP%] {\n  width: 70%;\n  float: right;\n  height: 100%;\n}\n.edoc-card[_ngcontent-%COMP%] {\n  margin: 0px 10px 10px !important;\n  background: #eeeeee;\n  cursor: pointer;\n}\n.edoc-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n.edoc-p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.edoc-i[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: red;\n}\n.edoc-card[_ngcontent-%COMP%]:hover {\n  background-color: #00946d;\n  color: #fff;\n}\n.edoc-card[_ngcontent-%COMP%]:hover   .edoc-i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.edoc-card-active[_ngcontent-%COMP%] {\n  background-color: #00946d !important;\n  color: #fff;\n}\n.edoc-card-active[_ngcontent-%COMP%]   .edoc-i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.h-30px[_ngcontent-%COMP%] {\n  height: 30px !important;\n}\n.lh-30px[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n}\n.custom-td-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2.5px;\n  height: 33px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-td-btn1[_ngcontent-%COMP%] {\n  top: calc(50% - 0px);\n}\n.custom-td-btn2[_ngcontent-%COMP%] {\n  top: 38px;\n}\n.custom-btn-sb[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-right: 0px !important;\n  border: none !important;\n}\n.custom-btn-tb[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-top-width: 1px !important;\n  border-bottom-width: 0px !important;\n  border: none !important;\n}\n.custom-btn-tb2[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-bottom-width: 1px !important;\n  border-top-width: 1px !important;\n}\n.custom-rsb-content[_ngcontent-%COMP%] {\n  height: 100%;\n  border-left: 2px solid #dddddd;\n}\n.SRB-tabs-content[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .SRB-tabs-content > .tab-pane {\n  height: 100% !important;\n  overflow: hidden;\n}\n.edocs-content-list[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  padding: 10px 0px;\n}\n[_nghost-%COMP%]    .modal-demo .ui-modal {\n  z-index: 10000 !important;\n  height: calc(100% - 50px);\n  width: 50%;\n}\n[_nghost-%COMP%]    .modal-demo .ui-icon {\n  font-size: 12px !important;\n}\n[_nghost-%COMP%]     .ui-modal-header {\n  background: #0074c8 !important;\n}\n.top-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  overflow: hidden;\n}\n.custom-model[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #eeeeee;\n  box-shadow: 2px 2px 10px;\n  min-width: 25%;\n  min-height: 50%;\n  width: 75%;\n  height: calc(100% - 50px);\n  top: 25px;\n  bottom: 25px;\n  left: 12.5%;\n  z-index: 1000000000000;\n}\n.custom-modal-full-screen[_ngcontent-%COMP%] {\n  height: 100% !important;\n  width: 100% !important;\n  left: 0px !important;\n  right: 0px !important;\n  top: 0px !important;\n  bottom: 0px !important;\n  transform: none !important;\n}\n.custom-modal-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.edoc-details-content-header1[_ngcontent-%COMP%] {\n  height: 35px;\n  background: #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.custom-doc-modal-btn[_ngcontent-%COMP%] {\n  height: 27px;\n  overflow: hidden;\n}\n.custom-doc-modal-btn[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 30px;\n  margin-right: 5px;\n}\n.edoc-details-content-body[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n}\n.custom-err[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-size: 10px;\n}\n[_nghost-%COMP%]    .top-details-content-body > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n}\n.top-cotent-form-left[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 5px;\n  margin-right: 2.5px;\n}\n.top-cotent-form-right[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 5px;\n  margin-left: 2.5px;\n}\n.custom-dd[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px) !important;\n}\n[_nghost-%COMP%]    .custom-dd > .ng-select-container {\n  min-height: calc(1.5em + 0.5rem + 2px) !important;\n  height: calc(1.5em + 0.5rem + 2px) !important;\n}\n.side-bar-details[_ngcontent-%COMP%] {\n  max-height: 50%;\n  height: 100%;\n  background: #ffffff;\n}\n.side-bar-details-td[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  background: #fff !important;\n}\n[_nghost-%COMP%]    .side-bar-details > perfect-scrollbar > div > div.ps-content {\n  padding: 8px !important;\n  height: 100%;\n}\n.side-bar-list[_ngcontent-%COMP%] {\n  max-height: 50%;\n  height: 100%;\n  background: #ffffff;\n}\n.master-form-td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  font-size: 12px;\n}\n.nav-tabs-custom[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #dddddd !important;\n  background: #ffffff;\n}\n.top-header-tool-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 36px;\n}\n.custom-filter-icon[_ngcontent-%COMP%] {\n  right: 13px !important;\n  left: auto !important;\n}\n.custom-filter-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.custom-search-rsb[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n  background: #eee !important;\n}\n.custom-group-btn[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 76px;\n}\n.custom-group-btn[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0px 5px;\n}\n.ctn[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.ctn-ul[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  border-bottom: 1px solid #dddddd;\n}\n.ctn-li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px;\n  cursor: pointer;\n  line-height: 16px;\n  border-bottom: 2px solid transparent;\n}\n.ctn-active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #00946d;\n  color: #00946d;\n}\n.custom-toolbar-content[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  overflow-y: scroll;\n  padding: 5px;\n  background: #eeeeee;\n}\n.custom-content-body[_ngcontent-%COMP%] {\n  background: #ffffff;\n  min-height: 100%;\n  margin-bottom: 5px;\n}\n.custom-content-body[_ngcontent-%COMP%]    > perfect-scrollbar[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n[_nghost-%COMP%]    .edocs-content-list > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n  padding: 0px 8px;\n}\n.custom-edocs-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid #ddd;\n  border-left: 2px solid transparent;\n}\n.custom-col-9-edocs[_ngcontent-%COMP%] {\n  padding: 6px 0px;\n  width: 100%;\n}\n.custom-col-9-edocs-p1[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 11px;\n  font-weight: 430;\n}\n.custom-col-9-edocs-p2[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 3px !important;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.custom-col-9-edocs-p3[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 11px;\n}\n.span1[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #888888;\n  line-height: 15px;\n}\n.span1[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #0074c8;\n}\n.span2[_ngcontent-%COMP%] {\n  color: #888888;\n  line-height: 15px;\n}\n.span2[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #0074c8;\n}\n.span3[_ngcontent-%COMP%] {\n  color: #888888;\n}\n.custom-edocs-row[_ngcontent-%COMP%]:hover {\n  border-left: 2px solid #00946d;\n}\n.custom-edocs-row-active[_ngcontent-%COMP%] {\n  border-left: 2px solid #00946d;\n}\n.activity-card[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd !important;\n}\n.activity-card[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  background: #ffffff !important;\n  padding-left: 8px !important;\n}\n.custom-activity-header[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  font-weight: 410 !important;\n}\n.custom-activity-dd[_ngcontent-%COMP%] {\n  background: #eeeeee !important;\n}\n.side-detail-span[_ngcontent-%COMP%] {\n  color: #00946d;\n  font-weight: bold;\n}\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #00946d !important;\n}\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  background: #00946d !important;\n}\n.custom-td-pr[_ngcontent-%COMP%] {\n  border-left: 1px solid #dddddd;\n}\n.custom-td-input[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  text-align: right;\n  width: 100%;\n  border: none;\n}\n.btn-yn-w[_ngcontent-%COMP%] {\n  width: 130px !important;\n}\n.h-35[_ngcontent-%COMP%] {\n  height: 35px !important;\n}\n.h-full-35[_ngcontent-%COMP%] {\n  height: calc(100% - 35px) !important;\n  border-top: 2px solid #dddddd;\n}\n.ref-doc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n.ref-doc-top-tool[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.bg-gray[_ngcontent-%COMP%] {\n  background: #eeeeee;\n}\n.verti-timeline[_ngcontent-%COMP%] {\n  border-left: 3px dashed #f6f6f6;\n  margin: 0 10px;\n}\n.event-list[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 25px 30px;\n}\n.event-timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9px;\n  top: 0;\n  z-index: 9;\n  font-size: 16px;\n}\n.custom-media-body[_ngcontent-%COMP%] {\n  background: #eee;\n  padding: 5px;\n  border-radius: 3px;\n}\n.top-header-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  border-bottom: 1px solid #ffffff;\n}\n.custom-comment[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.comment-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  box-shadow: 0px 0px 9px #ddd;\n}\n.comment-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.comment-head[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comment-head[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.custom-comment[_ngcontent-%COMP%]    > perfect-scrollbar[_ngcontent-%COMP%] {\n  height: calc(100% - 37px) !important;\n  padding: 15px 8px 8px !important;\n}\nng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 27px !important;\n}\nng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  height: 27px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcS1uZXcuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxmb250c1xcX2ZvbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcYXBwLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF90b3BiYXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF9wYWdlLWhlYWQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHN0cnVjdHVyZVxcX2Zvb3Rlci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGN1c3RvbVxcc3RydWN0dXJlXFxfcmlnaHQtc2lkZWJhci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF92ZXJ0aWNhbC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGN1c3RvbVxcc3RydWN0dXJlXFxfaG9yaXpvbnRhbC1uYXYuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHN0cnVjdHVyZVxcX2xheW91dHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHBsdWdpbnNcXF9jdXN0b20tc2Nyb2xsYmFyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxwYWdlc1xcX2F1dGhlbnRpY2F0aW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSVIsK0ZBQUE7QUNKUjs7Ozs7OztDQUFBO0FDQUE7O0VBRUU7QUFDRjtFQUNFLDJCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTs7RUFFRTtBQUNGO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsbUVBQW1FO0VBQ25FLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsMkRBQTJEO0VBQzNELG1FQUFtRTtFQUNuRSxXQUFXO0VBQ1gsbURBQW1EO0VBQ25ELFFBQVE7RUFDUixtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7O0VBRUUsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjtBQUVBOzs7Ozs7RUFNRSxZQUFZO0FBQ2Q7QUFFQTs7Ozs7O0VBTUUsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBOztFQUVFO0FBQ0Y7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtEQUErRDtFQUMvRCx1RUFBdUU7RUFDdkUsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsc0VBQXNFO0VBQ3RFLFVBQVU7RUFDViwwQ0FBMEM7RUFDMUMsVUFBVTtFQUNWLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTs7O0VBR0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsV0FBVztBQUNiO0FBRUEsZ0JBQWdCO0FBQ2hCO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjtBQ25IQSxpREFBaUQsZUFBZSxDQUFDLGlDQUFpQztBQUFDLHVEQUF1RCxlQUFlO0FBQUMsMkRBQTJELFFBQVEsQ0FBQyx5Q0FBeUMsQ0FBQyxzQkFBc0I7QUFBQyxpRUFBaUUseUNBQXlDO0FBQUMsa0VBQWtFLDRCQUE0QixDQUFDLDJCQUEyQjtBQUFDLCtEQUErRCx5QkFBeUIsQ0FBQyx3QkFBd0I7QUFBQyx5RUFBeUUsb0JBQW9CLENBQUMsMEVBQTBFO0FBQUMsbURBQW1ELHdCQUF3QjtBQUFDLHlDQUF5QyxZQUFZO0FBQUMsZ0NBQWdDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLENBQUMsa0JBQWtCO0FBQUMsc0NBQXNDLG1DQUFtQztBQUFDLG9EQUFvRCxrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxnRUFBZ0Usa0JBQWtCLENBQUMsY0FBYztBQUFDLG9FQUFvRSxVQUFVO0FBQUMsaURBQWlELFdBQVc7QUFBQywrRUFBK0UsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0I7QUFBQywyRkFBMkYsa0JBQWtCLENBQUMsaUJBQWlCO0FBQUMsb0dBQW9HLHdCQUF3QixDQUFDLHdCQUF3QjtBQUFDLG9IQUFvSCxhQUFhO0FBQUMsdUVBQXVFLGVBQWUsQ0FBQyxnQkFBZ0I7QUFBQyxtRkFBbUYsaUJBQWlCLENBQUMsY0FBYztBQUFDLGlGQUFpRixjQUFjLENBQUMsaUJBQWlCLENBQUMsd0JBQXdCLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCO0FBQUMsNkZBQTZGLGNBQWMsQ0FBQyxlQUFlO0FBQUMsbUdBQW1HLHdCQUF3QjtBQUFDLG1IQUFtSCxnQkFBZ0I7QUFBQywrSEFBK0gsY0FBYyxDQUFDLGlCQUFpQjtBQUFDLGlHQUFpRyxvQkFBb0IsQ0FBQyxlQUFlO0FBQUMsZ0dBQWdHLG9CQUFvQixDQUFDLGVBQWU7QUFBQyxzR0FBc0csd0JBQXdCO0FBQUMscUdBQXFHLDhCQUE4QjtBQUFDLGlIQUFpSCw2QkFBNkIsQ0FBQyxpQkFBaUI7QUFBQyxzR0FBc0csNkJBQTZCO0FBQUMsa0hBQWtILGFBQWEsQ0FBQyw4QkFBOEI7QUFBQyxpRkFBaUYsbUJBQW1CO0FBQUMsNkZBQTZGLG1CQUFtQjtBQUFDLHVGQUF1RixPQUFPLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCO0FBQUMsbUdBQW1HLGlCQUFpQixDQUFDLGNBQWM7QUFBQyw2QkFBNkIsVUFBVTtBQUFDLDZDQUE2QyxhQUFhO0FBQUMsNEJBQTRCLG1CQUFtQjtBQUFDLHdDQUF3QyxtQkFBbUI7QUFBQyw2QkFBNkIsVUFBVSxDQUFDLGlCQUFpQjtBQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxlQUFlO0FBQUMsNkNBQTZDLHFCQUFxQjtBQUFDLHVDQUF1Qyx5Q0FBeUMsQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEI7QUFBQyxtQkFBbUIscUJBQXFCLENBQUMscUJBQXFCLENBQUMsbUNBQW1DLENBQUMsTUFBTTtBQUFDLG9DQUFvQyxRQUFRLENBQUMsOEJBQThCLENBQUMsNkJBQTZCLENBQUMsd0JBQXdCLENBQUMsZUFBZTtBQUFDLG1GQUFtRiw4QkFBOEIsQ0FBQyw2QkFBNkI7QUFBQyxpQ0FBaUMsV0FBVyxDQUFDLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDLDJCQUEyQixDQUFDLGtCQUFrQjtBQUFDLGlGQUFpRiwyQkFBMkIsQ0FBQywwQkFBMEI7QUFBQyx1Q0FBdUMsNEJBQTRCLENBQUMsZUFBZTtBQUFDLHVDQUF1Qyx5QkFBeUIsQ0FBQyxlQUFlO0FBQUMseURBQXlELHdCQUFnQixDQUFoQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsY0FBYztBQUFDLDRFQUE0RSxjQUFjO0FBQUMsMEVBQTBFLHdCQUF3QjtBQUFDLHlLQUF5Syx3QkFBd0IsQ0FBQyxlQUFlO0FBQUMsdURBQXVELHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLGdCQUFnQjtBQUFDLHFLQUFxSyxVQUFVLENBQUMsd0JBQXdCO0FBQUMsdU1BQXVNLGVBQWU7QUFBQyx3RUFBd0Usd0JBQXdCLENBQUMsVUFBVTtBQUFDLDBFQUEwRSxVQUFVO0FBQUMsdUVBQXVFLGlCQUFpQjtBQUFDLG1GQUFtRixrQkFBa0IsQ0FBQyxjQUFjO0FBQUMscUVBQXFFLGFBQWEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCO0FBQUMsaUZBQWlGLGdCQUFnQixDQUFDLGVBQWU7QUFBQywrQkFBK0IsYUFBYSxDQUFDLGdCQUFnQjtBQ0kxNE87RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQ2dHSztFRC9GTCxtREM2U1c7QU5wU2I7QUtOQTtFQUNFLGFBQUE7RUFFQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlDT2M7RUROZCw2QkFBQTtBTFNGO0FLTkk7RUFDRSx5QkNxREs7QU43Q1g7QUtIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlDcUJ1QjtBTmZ6QjtBS0hBO0VBQ0UsaUJBQUE7QUxNRjtBS0pFO0VBQ0UsYUFBQTtBTE1KO0FLRkE7RUFDRSxhQUFBO0FMS0Y7QUtGQSxXQUFBO0FBRUE7RUFDRSx5QkFBQTtBTElGO0FLRkU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkN0QmU7RUR1QmYsZ0JBQUE7RUFDQSxtQkFBQTtBTElKO0FLREU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLGNDYU87QU5WWDtBS0lFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBTERKO0FLR0k7RUFDRSxjQ0VLO0FOSFg7QUtNQTtFQUNFO0lBQ0UsV0FBQTtFTEhGOztFS09FO0lBQ0UsYUFBQTtFTEpKO0VLT0U7SUFDRSxxQkFBQTtFTExKO0FBQ0Y7QUtTQTtFQUVFLCtCQUFBO0FMUkY7QUtXQTtFQUNFLFlDbEZjO0VEbUZkLDJCQUFBO0VBQ0EsV0NsQ007RURtQ04sU0FBQTtFQUNBLGtCQUFBO0FMUkY7QUtVRTtFQUNFLGNDdkZnQjtBTitFcEI7QUtZQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJDM0NTO0VENENULFlBQUE7QUxURjtBS2FFO0VBQ0UsZUFBQTtFQUNBLFdDckRJO0FOMkNSO0FLYUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBTFhKO0FLZ0JFO0VBQ0UscUJBQUE7QUxiSjtBS2VJO0VBQ0UseUJDakVLO0FOb0RYO0FLbUJBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0M1RVM7QU40RFg7QUtrQkU7RUFDRSxZQUFBO0FMaEJKO0FLbUJFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBTGpCSjtBS29CRTtFQUNFLHFCQzlGTztBTjRFWDtBS3lCSTtFQUNFLFlBQUE7QUx0Qk47QUs0QkU7RUFDRSx5QkM1SmE7QU5tSWpCO0FLOEJNO0VBQ0UsMkNBQUE7QUw1QlI7QUtnQ0k7RUFDRSxvQ0FBQTtBTDlCTjtBS2tDRTtFQUNFLGNDM0txQjtBTjJJekI7QUtrQ0k7RUFDRSxjQzlLbUI7QU44SXpCO0FLb0NFO0VBQ0UsMkNBQUE7QUxsQ0o7QUtzQ0k7RUFDRSxjQ3hMbUI7QU5vSnpCO0FLd0NFO0VBQ0UsYUFBQTtBTHRDSjtBS3lDRTtFQUNFLGNBQUE7QUx2Q0o7QUsyQ0k7RUFDRSwyQ0FBQTtFQUNBLFdDM0pFO0FOa0hSO0FLNENJOztFQUVFLCtCQUFBO0FMMUNOO0FLZ0RFO0VBQ0UsbUJDak9jO0FOb0xsQjtBS2dERTtFQUNFLGFBQUE7QUw5Q0o7QUtpREU7RUFDRSxjQUFBO0FML0NKO0FLbURBO0VBRUk7SUFDRSxnQkFBQTtFTGpESjtFS21ESTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUxqRE47QUFDRjtBS3NEQTtFQUNFO0lBQ0UsYUFBQTtFTHBERjtBQUNGO0FLd0RFO0VBQ0UseUJDclBhO0FOK0xqQjtBSzJETTtFQUNFLDJDQUFBO0FMekRSO0FLNkRJO0VBQ0Usb0NBQUE7QUwzRE47QUsrREU7RUFDRSxjQ3BRcUI7QU51TXpCO0FLK0RJO0VBQ0UsY0N2UW1CO0FOME16QjtBS2lFRTtFQUNFLDJDQUFBO0FML0RKO0FLbUVJO0VBQ0UsY0NqUm1CO0FOZ056QjtBS3FFRTtFQUNFLGFBQUE7QUxuRUo7QUtzRUU7RUFDRSxjQUFBO0FMcEVKO0FLd0VJO0VBQ0UsMkNBQUE7RUFDQSxXQ3BQRTtBTjhLUjtBS3lFSTs7RUFFRSwrQkFBQTtBTHZFTjtBSzZFRTtFQUNFLG1CQzFUYztBTmdQbEI7QUs2RUU7RUFDRSxhQUFBO0FMM0VKO0FLOEVFO0VBQ0UsY0FBQTtBTDVFSjtBS2dGQTtFQUVJO0lBQ0UsZ0JBQUE7RUw5RUo7RUtnRkk7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VMOUVOO0FBQ0Y7QUttRkE7RUFDRTtJQUNFLGFBQUE7RUxqRkY7QUFDRjtBS3FGRTtFQUNFLFdBQUE7QUxuRko7QUtzRkU7RUFDRSxnQkN2Vlk7RUR5VlosK0JBQUE7QUxyRko7QUt5RkE7RUFFSTtJQUNFLGdCQUFBO0VMdkZKO0FBQ0Y7QU9qU0E7RUFDSSxvQkRnU2dCO0FOR3BCO0FPalNJO0VBQ0ksNkJBQUE7RUFDQSxVQUFBO0FQbVNSO0FPaFNJO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FQa1NSO0FRN1NBO0VBQ0ksU0FBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsY0ZnQ1c7RUUvQlgsV0FBQTtFQUNBLFlGNEJZO0VFM0JaLHlCRjRCUTtBTm9SWjtBUTdTQTtFQUNJO0lBQ0ksT0FBQTtFUmdUTjtBQUNGO0FRM1NJO0VBQ0ksVUZWa0I7QU51VDFCO0FReFNJO0VBQ0ksa0JBQUE7QVIyU1I7QVNyVUE7RUFDSSxzQkh3RUk7RUd2RUoseUVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUhxQ2E7RUdwQ2IsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0FUd1VKO0FTdFVJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0h5REc7RUd4REgsa0JBQUE7RUFDQSxrQkFBQTtBVHdVUjtBU3RVUTtFQUNJLHlCQUFBO0FUd1VaO0FTbFVBO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0FUcVVKO0FTalVJO0VBQ0ksUUFBQTtBVG9VUjtBU2xVSTtFQUNJLGNBQUE7QVRvVVI7QVU3U0k7RURsQkE7SUFDSSxjQUFBO0VUbVVOO0VTbFVNO0lBQ0ksdUJBQUE7RVRvVVY7QUFDRjtBVzNYQTtFQUNFLFNBQUE7QVg2WEY7QVczWEU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBWDZYSjtBVzFYRTtFQUNFLGFBQUE7QVg0WEo7QVcxWEk7RUFDRSxhQUFBO0FYNFhOO0FXelhJO0VBQ0UsY0FBQTtBWDJYTjtBV3ZYRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0FYeVhKO0FXclhBO0VBQ0UsWUx0QmM7RUt1QmQsYUFBQTtFQUNBLG1CTDlCVztFSytCWCxTQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxTTGRjO0VLZWQsbURMOFFXO0FOMEdiO0FXclhBO0VBQ0Usa0JMakNjO0VLa0NkLGdCQUFBO0FYd1hGO0FXdFhFO0VBQ0UseUJBQUE7RUFDQSxnQkx4Qlk7QU5nWmhCO0FXcFhBO0VBQ0Usc0JBQUE7QVh1WEY7QVduWE07RUFDRSwwQkFBQTtBWHFYUjtBVy9XSTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FYaVhOO0FXM1dNO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsY0wxRWtCO0VLMkVsQixrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBWDZXUjtBVzNXUTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNMcEZxQjtFS3FGckIsb0JBQUE7QVg2V1Y7QVcxV1E7RUFDRSxjTHhGc0I7QU5vY2hDO0FXMVdVO0VBQ0UsY0wzRm9CO0FOdWNoQztBV3ZXTTtFQUNFLGVBQUE7QVh5V1I7QVd0V007RUFDRSxVQUFBO0FYd1dSO0FXcldVO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0w3R2tCO0FOb2Q5QjtBV3BXVTtFQUNFLFVBQUE7QVhzV1o7QVduV2M7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FYcVdoQjtBVzNWQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjTHRJNkI7RUt1STdCLGdCTG5GcUI7QU5pYnZCO0FXNVZBO0VBQ0UsMkJBQUE7QVgrVkY7QVc1VkE7RUFDRSx5QkFBQTtBWCtWRjtBVzdWRTtFQUNFLHlCQUFBO0FYK1ZKO0FXN1ZJO0VBQ0UseUJBQUE7QVgrVk47QVczVkU7RUFDRSx5QkFBQTtBWDZWSjtBV3pWQTtFQUNFO0lBQ0UsYUFBQTtFWDRWRjs7RVd6VkE7SUFDRSx5QkFBQTtFWDRWRjs7RVd4VkU7SUFDRSxjQUFBO0VYMlZKO0FBQ0Y7QVdyVkU7RUFDRSxpQkw1S3NCO0FObWdCMUI7QVdwVkU7RUFDRSxzQkFBQTtBWHNWSjtBV2xWSTtFQUNFLGFBQUE7QVhvVk47QVdqVkk7RUFDRSxjQUFBO0FYbVZOO0FXOVVFO0VBV0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QVhzVUo7QVdoVkk7RUFDRSxpQkFBQTtBWGtWTjtBV2hWTTtFQUNFLDRCQUFBO0FYa1ZSO0FXMVVJOztFQUVFLDRCQUFBO0FYNFVOO0FXelVJO0VBQ0Usd0JBQUE7QVgyVU47QVd4VUk7RUFDRSxvQkFBQTtBWDBVTjtBV3JVTTs7O0VBR0Usd0JBQUE7QVh1VVI7QVdwVU07RUFDRSwwQkFBQTtBWHNVUjtBV2xVUTtFQUNFLGFBQUE7QVhvVVY7QVcvVFE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FYaVVWO0FXL1RVO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FYaVVaO0FXL1RZO0VBR0UsY0w1UGtCO0FOMmpCaEM7QVc1VFk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FYOFRkO0FXM1RZO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FYNlRkO0FXeFRZO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNML0tQO0VLZ0xPLDRCQUFBO0VBQ0EsZ0JBQUE7QVgwVGQ7QVd4VGM7RUFDRSxjTHBMVDtBTjhlUDtBV3ZUYztFQUNFLGVBQUE7QVh5VGhCO0FXclRZO0VBQ0UsY0FBQTtFQUNBLFVMMVJZO0VLMlJaLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0RBQUE7QVh1VGQ7QVdyVGM7RUFDRSxnREFBQTtBWHVUaEI7QVdwVGM7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGNML1NjO0FOcW1COUI7QVdwVGdCO0VBQ0UsY0xoVGM7QU5zbUJoQztBVy9TUTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCTC9URztBTmduQmI7QVc3U2M7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QVgrU2hCO0FXMVNjO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FYNFNoQjtBV3RTWTtFQUNFLGNMbFJIO0FOMGpCWDtBVzlSRTtFQUNFLG1CTHhWYztBTnluQmxCO0FXM1JRO0VBQ0UsY0w5VnFCO0FOMm5CL0I7QVczUlU7RUFDRSxjTC9Wd0I7QU40bkJwQztBVzFSVTtFQUNFLGNMbFd5QjtBTjhuQnJDO0FXMVJZO0VBQ0UsY0xyV3VCO0FOaW9CckM7QVdyUlk7RUFDRSxjTC9XcUI7QU5zb0JuQztBV3JSYztFQUNFLGNMaFhxQjtBTnVvQnJDO0FXblFjO0VBQ0UsbUJBQUE7RUFDQSxjTHRZcUI7QU4yb0JyQztBV25RZ0I7RUFDRSxjTHpZbUI7QU44b0JyQztBV2hRZ0I7RUFDRSxjTGpaaUI7QU5tcEJuQztBV2hRa0I7RUFDRSxjTGxaaUI7QU5vcEJyQztBVzNQVTtFQUNFLHlCTDlaTTtBTjJwQmxCO0FXdlBZO0VBQ0UseUJBQUE7QVh5UGQ7QVd2UGM7RUFDRSx5QkFBQTtBWHlQaEI7QVdoUEU7RUFDRSx5QkFBQTtBWGtQSjtBV2hQSTtFQUNFLHlCQUFBO0FYa1BOO0FXL09JO0VBQ0UseUJBQUE7QVhpUE47QVcvT007RUFDRSx5QkFBQTtBWGlQUjtBVzVPRTtFQUNFLGNML2JnQztBTjZxQnBDO0FXek9FO0VBQ0UseUJBQUE7QVg0T0o7QVdyT0U7RUFDRSxZTHBkZTtBTjRyQm5CO0FXck9FO0VBQ0UsWUx4ZGU7RUt5ZGYsa0JBQUE7QVh1T0o7QVdyT0k7O0VBRUUsd0JBQUE7QVh1T047QVduT0U7RUFDRSxrQkxsZWU7QU51c0JuQjtBV2xPRTtFQUNFLFdMdGVlO0FOMHNCbkI7QVcvTk07RUFDRSx5QkFBQTtBWGlPUjtBVzdOUTtFQUNFLGNBQUE7QVgrTlY7QVcxTlE7RUFDRSxvQkFBQTtBWDROVjtBV3JOSTtFQUNFLGlCTGhnQm9CO0FOdXRCMUI7QVduTk07RUFDRSxnQkFBQTtBWHFOUjtBV2hOYztFQUNFLHFCQUFBO0FYa05oQjtBVzFNSTtFQUNFLFVMcGhCb0I7QU5ndUIxQjtBV3BNRTtFQUNFLHlCTGpjRztBTndvQlA7QVdwTUU7RUFDRSx5QkxyY0c7QU4yb0JQO0FXcE1JO0VBQ0UsYUFBQTtBWHNNTjtBV25NSTtFQUNFLGNBQUE7QVhxTU47QVdqTUU7RUFDRSxzQkFBQTtBWG1NSjtBV2pNSTs7RUFFRSxzQkFBQTtBWG1NTjtBVzVMUTtFQUNFLCtCQUFBO0FYOExWO0FXM0xRO0VBQ0UsK0JBQUE7QVg2TFY7QVczTFU7RUFDRSwrQkFBQTtBWDZMWjtBV3pMWTtFQUNFLG9DQUFBO0FYMkxkO0FXcExZO0VBQ0UsK0JBQUE7QVhzTGQ7QVd6S1k7RUFDRSx5QkFBQTtBWDJLZDtBV25LYztFQUNFLHlCQUFBO0FYcUtoQjtBWW54QkE7RUFDRSxnQk51Q1U7RU10Q1YseUJBQUE7RUFDQSxtRE5pVFc7RU1oVFgsZ0JObUJjO0VNbEJkLGVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QVpzeEJGO0FZcHhCRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0Fac3hCSjtBWWp4Qkk7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNOakJvQjtBTm95QjFCO0FZanhCTTtFQUNFLGVBQUE7QVpteEJSO0FZaHhCTTtFQUVFLGNOckJ5QjtFTXNCekIsNkJBQUE7QVppeEJSO0FZN3dCSTtFQUNFLGNOL0JvQjtBTjh5QjFCO0FZN3dCTTtFQUVFLGNOL0J5QjtBTjZ5QmpDO0FZendCTTtFQUNFLGNOckN5QjtBTmd6QmpDO0FZcndCUTtFQUNFLGNONUN1QjtFTTZDdkIsNkJBQUE7QVp1d0JWO0FVcHdCSTtFRVFBOztJQUVFLGNBQUE7RVpnd0JKO0FBQ0Y7QVUzd0JJO0VFb0JNO0lBQ0UsZUFBQTtFWjB2QlY7RVlwdkJFO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFWnN2Qko7RVkvdUJNO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RVppdkJSO0VZN3VCSTtJQUNFLGFBQUE7SUFDQSxrQ0FBQTtFWit1Qk47RVk1dUJRO0lBQ0UsV0FBQTtJQUNBLDJDQUFBO0lBQ0Esa0JBQUE7RVo4dUJWO0VZenVCUTtJQUNFLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLFVBQUE7SUFDQSxhQUFBO0VaMnVCVjtFWXJ1Qk07SUFDRSxjQUFBO0VadXVCUjtFWWx1QkU7SUFDRSxjQUFBO0Vab3VCSjs7RVlodUJBO0lBQ0UsYUFBQTtFWm11QkY7QUFDRjtBWWh1QkE7RUFDRSxxQkFBQTtBWmt1QkY7QVlodUJFO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0Faa3VCSjtBVXR6Qkk7RUU4RlE7SUFDRSxXQUFBO0lBQ0EsVUFBQTtFWjR0Qlo7QUFDRjtBVTd6Qkk7RUUyR0Y7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFWnF0QkY7RVlsdEJJO0lBQ0UsdUJBQUE7RVpvdEJOO0VZL3NCSTtJQUNFLDZCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RVppdEJOO0VZOXNCSTtJQUNFLGtCQUFBO0lBQ0EsNkJBQUE7RVpndEJOO0VZOXNCTTtJQUVFLGNObkdIO0VOa3pCTDtFWXpzQkk7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7RVoyc0JOO0FBQ0Y7QVVyMkJJO0VFbUtBO0lBQ0UseUJOdEhDO0VOMnpCTDtFWWpzQk07SUFDRSwrQkFBQTtFWm1zQlI7RVlqc0JRO0lBRUUsK0JBQUE7RVprc0JWO0VZNXJCVTtJQUNFLDBDQUFBO0VaOHJCWjtBQUNGO0FZbnJCRTtFQUNFLHlCTm5KRztFTW9KSCxnQkFBQTtBWnFyQko7QVlsckJFO0VBQ0UsYUFBQTtBWm9yQko7QVlqckJFO0VBQ0UsY0FBQTtBWm1yQko7QVk5cUJJO0VBQ0UsMkNBQUE7RUFDQSxXTmhNRTtBTmczQlI7QVk3cUJJOztFQUVFLCtCQUFBO0FaK3FCTjtBWTNxQkU7RUFDRSxjTnRQcUI7QU5tNkJ6QjtBWTNxQkk7RUFDRSxjTnpQbUI7QU5zNkJ6QjtBWXZxQk07RUFDRSwwQ0FBQTtBWnlxQlI7QVlycUJJO0VBQ0Usb0NBQUE7QVp1cUJOO0FZbHFCSTtFQUNFLGNOM1FtQjtBTis2QnpCO0FVcDVCSTtFRXFQQTtJQUNFLHlCTnhNQztFTjAyQkw7RVk5cEJNO0lBQ0UsK0JBQUE7RVpncUJSO0VZOXBCUTtJQUVFLCtCQUFBO0VaK3BCVjtFWXpwQlU7SUFDRSwwQ0FBQTtFWjJwQlo7QUFDRjtBYTE5QkE7RUFDSSx5QlBxRFk7QU53NkJoQjtBYTU5Qkk7RUFDSSx5QlB3T0U7RU92T0YsaUJQaURhO0VPaERiLGNBQUE7RUFDQSxtRFA4U0s7QU5nckJiO0FhMzlCSTtFQUNJLGlCUDJDYTtFTzFDYixjQUFBO0FiNjlCUjtBYTE5Qkk7RUFDSSxjQUFBO0VBQ0EsK0JBQUE7QWI0OUJSO0FheDlCUTtFQUNJLDhCQUFBO0FiMDlCWjtBYWo5Qkk7RUFDSSxlQUFBO0FibzlCUjtBYWw5Qkk7RUFDSSxpQlBtQmE7QU5pOEJyQjtBY3gvQkE7OztFQUdFLHFCQUFBO0VBQ0Esd0NBQUE7QWQyL0JGO0FjeC9CQTtFQUNFLG9DQUFBO0FkMi9CRjtBY3YvQkE7RUFDRSxzQkFBQTtBZDAvQkY7QWN2L0JBOztFQUVFLHdDQUFBO0FkMC9CRjtBZXhnQ0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FmMmdDSjtBQW5oQ0E7RUFDRSwwQkFBQTtFQUNBLGdCQUFBO0FBc2hDRjtBQXBoQ0E7RUFDRSxtQk1VcUM7RU5UckMsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF1aENGO0FBcmhDQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFlNQ3FDO0VOQXJDLHlCQUFBO0VBQ0EseUJBQUE7QUF3aENGO0FBdGhDQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWU1OcUM7QU4raEN2QztBQXZoQ0E7RUFDRSxhQUFBO0FBMGhDRjtBQXhoQ0E7RUFDRSxjQUFBO0FBMmhDRjtBQXpoQ0E7RUFDRSx1Q0FBQTtBQTRoQ0Y7QUExaENBO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBNmhDRjtBQTNoQ0E7RUFDRSx1QkFBQTtBQThoQ0Y7QUE1aENBO0VBQ0UseUJBQUE7RUFFQSxnQkFBQTtBQThoQ0Y7QUF6aENBO0VBQ0UsY0FBQTtBQTRoQ0Y7QUExaENBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE2aENGO0FBM2hDQTtFQUNFLHlCTWdESztFTi9DTCxXTWtCTTtBTjRnQ1I7QUE1aENBO0VBQ0UsY01pQlM7QU44Z0NYO0FBN2hDQTtFQUNFLHlCTXlDSztFTnhDTCxXTVdNO0FOcWhDUjtBQTloQ0E7RUFDRSxjTVVTO0FOdWhDWDtBQS9oQ0E7RUFDRSx5Qk15Q007RU54Q04sV01JTTtBTjhoQ1I7QUFoaUNBO0VBQ0UsY01HUztBTmdpQ1g7QUFqaUNBO0VBQ0UsWUFBQTtBQW9pQ0Y7QUFsaUNBO0VBQ0UsWUFBQTtBQXFpQ0Y7QUFuaUNBO0VBQ0UsV0FBQTtBQXNpQ0Y7QUFuaUNBO0VBRUUsWUFBQTtBQXFpQ0Y7QUFuaUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFzaUNGO0FBbGlDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQXFpQ0Y7QUFuaUNBO0VBQ0UsWUFBQTtBQXNpQ0Y7QUFwaUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBdWlDRjtBQXJpQ0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXdpQ0Y7QUF0aUNBO0VBQ0Usb0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBeWlDRjtBQXJpQ0E7RUFDRSxXQUFBO0FBd2lDRjtBQXRpQ0E7RUFDRSxZQUFBO0FBeWlDRjtBQXZpQ0E7RUFDRSxXQUFBO0FBMGlDRjtBQXhpQ0E7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FBMmlDRjtBQXppQ0E7RUFDRSx1QkFBQTtBQTRpQ0Y7QUExaUNBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0FBNmlDRjtBQTNpQ0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE4aUNGO0FBNWlDQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQStpQ0Y7QUE3aUNBO0VBQ0UsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFnakNGO0FBOWlDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQWlqQ0Y7QUEvaUNBO0VBQ0UsZUFBQTtBQWtqQ0Y7QUFoakNBO0VBQ0UsMEJBQUE7RUFDQSxVQUFBO0FBbWpDRjtBQWpqQ0E7RUFDRSx5Qk10RU07RU51RU4sV00zR007QU4rcENSO0FBbGpDQTtFQUNFLFdNOUdNO0FObXFDUjtBQW5qQ0E7RUFDRSxvQ0FBQTtFQUNBLFdNbEhNO0FOd3FDUjtBQXBqQ0E7RUFDRSxXTXJITTtBTjRxQ1I7QUFsakNBO0VBQ0UsdUJBQUE7QUFxakNGO0FBbmpDQTtFQUNFLDRCQUFBO0FBc2pDRjtBQXBqQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF1akNGO0FBcmpDQTtFQUVFLG9CQUFBO0FBdWpDRjtBQXJqQ0E7RUFDRSxTQUFBO0FBd2pDRjtBQXRqQ0E7RUFDRSw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQXlqQ0Y7QUF2akNBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtBQTBqQ0Y7QUF4akNBO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUEyakNGO0FBempDQTtFQUNFLFlBQUE7RUFDQSw4QkFBQTtBQTRqQ0Y7QUExakNBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQTZqQ0Y7QUExakNBO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtBQTZqQ0Y7QUEzakNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUE4akNGO0FBNWpDQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBK2pDRjtBQTdqQ0E7RUFDRSwwQkFBQTtBQWdrQ0Y7QUE5akNBO0VBQ0UsOEJBQUE7QUFpa0NGO0FBL2pDQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFra0NGO0FBaGtDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFta0NGO0FBamtDQTtFQUNFLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBb2tDRjtBQWxrQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQXFrQ0Y7QUFua0NBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBc2tDRjtBQXBrQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUF1a0NGO0FBcmtDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUF3a0NGO0FBdGtDQTtFQUNFLHlCQUFBO0FBeWtDRjtBQXZrQ0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQTBrQ0Y7QUF4a0NBO0VBS0UsdUJBQUE7QUF1a0NGO0FBcmtDQTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUF1a0NGO0FBcmtDQTtFQUNFLFlBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUF1a0NGO0FBcmtDQTtFQUNFLDZDQUFBO0FBd2tDRjtBQXRrQ0E7RUFDRSxpREFBQTtFQUNBLDZDQUFBO0FBeWtDRjtBQXZrQ0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBMGtDRjtBQXZrQ0E7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FBMGtDRjtBQXhrQ0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUEya0NGO0FBemtDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE0a0NGO0FBeGtDQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtBQTJrQ0Y7QUF6a0NBO0VBRUUsMkNBQUE7RUFDQSxtQkFBQTtBQTJrQ0Y7QUF6a0NBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBNGtDRjtBQTFrQ0E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0FBNmtDRjtBQTNrQ0E7RUFDRSxlQUFBO0FBOGtDRjtBQTVrQ0E7RUFDRSw2QkFBQTtFQUNBLDJCQUFBO0FBK2tDRjtBQTdrQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWdsQ0Y7QUE5a0NBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0FBaWxDRjtBQS9rQ0E7RUFDRSxZQUFBO0FBa2xDRjtBQWhsQ0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFtbENGO0FBamxDQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBb2xDRjtBQWxsQ0E7RUFDRSxnQ0FBQTtFQUNBLGNNalVNO0FOczVDUjtBQW5sQ0E7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBc2xDRjtBQXBsQ0E7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUF1bENGO0FBcmxDQTtFQUNFLFlBQUE7QUF3bENGO0FBdGxDQTtFQUNFLHVCQUFBO0VBQ0EsZ0JBQUE7QUF5bENGO0FBdmxDQTtFQUdFLGVBQUE7RUFHQSw2QkFBQTtFQUNBLGtDQUFBO0FBc2xDRjtBQXBsQ0E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUF1bENGO0FBcGxDQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF1bENGO0FBcmxDQTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXdsQ0Y7QUF0bENBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUF5bENGO0FBdmxDQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBMGxDRjtBQXhsQ0E7RUFDRSxpQkFBQTtFQUNBLGNNbFlLO0FONjlDUDtBQXpsQ0E7RUFFRSxjQUFBO0VBQ0EsaUJBQUE7QUEybENGO0FBemxDQTtFQUNFLGlCQUFBO0VBQ0EsY00zWUs7QU51K0NQO0FBMWxDQTtFQUNFLGNBQUE7QUE2bENGO0FBM2xDQTtFQUNFLDhCQUFBO0FBOGxDRjtBQTVsQ0E7RUFDRSw4QkFBQTtBQStsQ0Y7QUE3bENBO0VBQ0Usb0NBQUE7QUFnbUNGO0FBOWxDQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQWltQ0Y7QUEvbENBO0VBQ0UsMkJBQUE7QUFrbUNGO0FBaG1DQTtFQUNFLDhCQUFBO0FBbW1DRjtBQWptQ0E7RUFDRSxjTTlaTTtFTitaTixpQkFBQTtBQW9tQ0Y7QUFsbUNBO0VBQ0UseUJBQUE7QUFxbUNGO0FBbm1DQTtFQUNFLDhCQUFBO0FBc21DRjtBQXBtQ0E7RUFDRSw4QkFBQTtBQXVtQ0Y7QUFybUNBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBd21DRjtBQXRtQ0E7RUFDRSx1QkFBQTtBQXltQ0Y7QUF2bUNBO0VBQ0UsdUJBQUE7QUEwbUNGO0FBeG1DQTtFQUNFLG9DQUFBO0VBQ0EsNkJBQUE7QUEybUNGO0FBem1DQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDhCQUFBO0FBNG1DRjtBQTFtQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUE2bUNGO0FBM21DQTtFQUNFLG1CQUFBO0FBOG1DRjtBQTVtQ0E7RUFDRSwrQkFBQTtFQUNBLGNBQUE7QUErbUNGO0FBN21DQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUFnbkNGO0FBOW1DQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQWluQ0Y7QUEvbUNBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFrbkNGO0FBaG5DQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBbW5DRjtBQWpuQ0E7RUFDRSxZQUFBO0FBb25DRjtBQWxuQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQXFuQ0Y7QUFubkNBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBc25DRjtBQXBuQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBdW5DRjtBQXJuQ0E7RUFDRSxlQUFBO0FBd25DRjtBQXRuQ0E7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0FBeW5DRjtBQXRuQ0E7RUFDRSwyQkFBQTtBQXluQ0Y7QUF0bkNBO0VBQ0UsdUJBQUE7QUF5bkNGIiwiZmlsZSI6InJlcS1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuVGVtcGxhdGUgTmFtZTogU2tvdGUgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxuQXV0aG9yOiBUaGVtZXNicmFuZFxuVmVyc2lvbjogMS4wLjBcbldlYnNpdGU6IGh0dHBzOi8vdGhlbWVzYnJhbmQuY29tL1xuQ29udGFjdDogdGhlbWVzYnJhbmRAZ21haWwuY29tXG5GaWxlOiBNYWluIENzcyBGaWxlXG4qL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgJ35wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcbkBpbXBvcnQgXCJ+QG5nLXNlbGVjdC9uZy1zZWxlY3QvdGhlbWVzL2RlZmF1bHQudGhlbWUuY3NzXCI7XG4jcGFnZS10b3BiYXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yzg7XG4gIGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjAzKTtcbn1cblxuLm5hdmJhci1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDAgY2FsYygyNHB4IC8gMikgMCAwO1xufVxuLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duLnNob3cgLmhlYWRlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbn1cblxuLm5hdmJhci1icmFuZC1ib3gge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDI1MHB4O1xufVxuXG4ubG9nbyB7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xufVxuLmxvZ28gLmxvZ28tc20ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nby1saWdodCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIFNlYXJjaCAqL1xuLmFwcC1zZWFyY2gge1xuICBwYWRkaW5nOiBjYWxjKDEycHggLyAyKSAwO1xufVxuLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmM2YzZjk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4uYXBwLXNlYXJjaCBzcGFuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbiAgbGVmdDogMTNweDtcbiAgdG9wOiAwO1xuICBjb2xvcjogIzc0Nzg4ZDtcbn1cblxuLm1lZ2FtZW51LWxpc3QgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweCAwcHg7XG59XG4ubWVnYW1lbnUtbGlzdCBsaSBhIHtcbiAgY29sb3I6ICM0OTUwNTc7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAubmF2YmFyLWJyYW5kLWJveCB7XG4gICAgd2lkdGg6IGF1dG87XG4gIH1cblxuICAubG9nbyBzcGFuLmxvZ28tbGcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmxvZ28gc3Bhbi5sb2dvLXNtIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbn1cbi5wYWdlLWNvbnRlbnQge1xuICBwYWRkaW5nOiBjYWxjKDUwcHgpIDBweCAwcHggMHB4O1xufVxuXG4uaGVhZGVyLWl0ZW0ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuLmhlYWRlci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM1NTViNmQ7XG59XG5cbi5oZWFkZXItcHJvZmlsZS11c2VyIHtcbiAgaGVpZ2h0OiAzNnB4O1xuICB3aWR0aDogMzZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbiAgcGFkZGluZzogM3B4O1xufVxuXG4ubm90aS1pY29uIGkge1xuICBmb250LXNpemU6IDIycHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGktaWNvbiAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLWl0ZW0gLm1lZGlhIHtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xufVxuLm5vdGlmaWNhdGlvbi1pdGVtIC5tZWRpYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG59XG5cbi5kcm9wZG93bi1pY29uLWl0ZW0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBsaW5lLWhlaWdodDogMzRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxNXB4IDAgOXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjNzQ3ODhkO1xufVxuLmRyb3Bkb3duLWljb24taXRlbSBpbWcge1xuICBoZWlnaHQ6IDI0cHg7XG59XG4uZHJvcGRvd24taWNvbi1pdGVtIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZHJvcGRvd24taWNvbi1pdGVtOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZWZmMmY3O1xufVxuXG4uZnVsbHNjcmVlbi1lbmFibGUgW2RhdGEtdG9nZ2xlPWZ1bGxzY3JlZW5dIC5ieC1mdWxsc2NyZWVuOjpiZWZvcmUge1xuICBjb250ZW50OiBcIu6ov1wiO1xufVxuXG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdICNwYWdlLXRvcGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5uYXZiYXItaGVhZGVyIC5kcm9wZG93bi5zaG93IC5oZWFkZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5uYXZiYXItaGVhZGVyIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmhlYWRlci1pdGVtIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5oZWFkZXItaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuaGVhZGVyLXByb2ZpbGUtdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5ub3RpLWljb24gaSB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAubG9nby1kYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0OSwgMC4wNyk7XG4gIGNvbG9yOiAjZmZmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCBzcGFuLFxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCBpbnB1dC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubmF2YmFyLWJyYW5kLWJveCB7XG4gIGJhY2tncm91bmQ6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubG9nby1kYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5sb2dvLWxpZ2h0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyLWhlYWRlciAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdICNwYWdlLXRvcGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5uYXZiYXItaGVhZGVyIC5kcm9wZG93bi5zaG93IC5oZWFkZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5uYXZiYXItaGVhZGVyIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmhlYWRlci1pdGVtIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5oZWFkZXItaXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuaGVhZGVyLXByb2ZpbGUtdXNlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5ub3RpLWljb24gaSB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAubG9nby1kYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0OSwgMC4wNyk7XG4gIGNvbG9yOiAjZmZmO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCBzcGFuLFxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCBpbnB1dC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubmF2YmFyLWJyYW5kLWJveCB7XG4gIGJhY2tncm91bmQ6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubG9nby1kYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5sb2dvLWxpZ2h0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAubmF2YmFyLWhlYWRlciAuZHJvcGRvd24ge1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cbiAgLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XG4gIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgd2lkdGg6IGF1dG87XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5wYWdlLWNvbnRlbnQge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwYWRkaW5nOiBjYWxjKDU1cHgpIDBweCAwcHggMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXSAucGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICB9XG59XG4ucGFnZS10aXRsZS1ib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cbi5wYWdlLXRpdGxlLWJveCAuYnJlYWRjcnVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwO1xufVxuLnBhZ2UtdGl0bGUtYm94IGg0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5mb290ZXIge1xuICBib3R0b206IDA7XG4gIHBhZGRpbmc6IDIwcHggY2FsYygyNHB4IC8gMik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGNvbG9yOiAjNzQ3ODhkO1xuICBsZWZ0OiAyNTBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmY1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLmZvb3RlciB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC5mb290ZXIge1xuICBsZWZ0OiA1MHB4O1xufVxuXG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5mb290ZXIge1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMjRweCAwIHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMXB4IDAgMCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1vdXQ7XG4gIHdpZHRoOiAyODBweDtcbiAgei1pbmRleDogOTk5OTtcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAtMjkwcHg7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xufVxuLnJpZ2h0LWJhciAucmlnaHQtYmFyLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDRjNTQ7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBjb2xvcjogI2VmZjJmNztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmlnaHQtYmFyIC5yaWdodC1iYXItdG9nZ2xlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiNTQ1Yztcbn1cblxuLnJpZ2h0YmFyLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCA1OCwgNjQsIDAuNTUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogOTk5ODtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi5yaWdodC1iYXItZW5hYmxlZCAucmlnaHQtYmFyIHtcbiAgcmlnaHQ6IDA7XG59XG4ucmlnaHQtYmFyLWVuYWJsZWQgLnJpZ2h0YmFyLW92ZXJsYXkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5yaWdodC1iYXIge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIC5yaWdodC1iYXIgLnNsaW1zY3JvbGwtbWVudSB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5tZXRpc21lbnUge1xuICBtYXJnaW46IDA7XG59XG4ubWV0aXNtZW51IGxpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1ldGlzbWVudSAubW0tY29sbGFwc2Uge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm1ldGlzbWVudSAubW0tY29sbGFwc2U6bm90KC5tbS1zaG93KSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWV0aXNtZW51IC5tbS1jb2xsYXBzZS5tbS1zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWV0aXNtZW51IC5tbS1jb2xsYXBzaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xufVxuXG4udmVydGljYWwtbWVudSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgei1pbmRleDogMTAwMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTBweDtcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMDMpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLm1haW4tY29udGVudCAuY29udGVudCB7XG4gIHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbiNzaWRlYmFyLW1lbnUge1xuICBwYWRkaW5nOiAxMHB4IDAgMzBweCAwO1xufVxuI3NpZGViYXItbWVudSAubW0tYWN0aXZlID4gLmhhcy1hcnJvdzphZnRlciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xufVxuI3NpZGViYXItbWVudSAuaGFzLWFycm93OmFmdGVyIHtcbiAgY29udGVudDogXCLzsIWAXCI7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuI3NpZGViYXItbWVudSB1bCBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDAuNjI1cmVtIDEuNXJlbTtcbiAgY29sb3I6ICM1NDVhNmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAwLjEyNWVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjQwNjI1cmVtO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzdmODM4NztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogIzM4M2M0MDtcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciBpIHtcbiAgY29sb3I6ICMzODNjNDA7XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIC5iYWRnZSB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgdWwuc3ViLW1lbnUge1xuICBwYWRkaW5nOiAwO1xufVxuI3NpZGViYXItbWVudSB1bCBsaSB1bC5zdWItbWVudSBsaSBhIHtcbiAgcGFkZGluZzogMC40cmVtIDEuNXJlbSAwLjRyZW0gMy41cmVtO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNTQ1YTZkO1xufVxuI3NpZGViYXItbWVudSB1bCBsaSB1bC5zdWItbWVudSBsaSB1bC5zdWItbWVudSB7XG4gIHBhZGRpbmc6IDA7XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIHVsLnN1Yi1tZW51IGxpIGEge1xuICBwYWRkaW5nOiAwLjRyZW0gMS41cmVtIDAuNHJlbSA0LjVyZW07XG4gIGZvbnQtc2l6ZTogMTMuNXB4O1xufVxuXG4ubWVudS10aXRsZSB7XG4gIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xuICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiAjN2Y4Mzg3O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5ib2R5Lm92ZXJmbG93LWgge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5tbS1hY3RpdmUge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuLm1tLWFjdGl2ZSAuYWN0aXZlIHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cbi5tbS1hY3RpdmUgLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cbi5tbS1hY3RpdmUgPiBpIHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC52ZXJ0aWNhbC1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1haW4tY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbiAgfVxuXG4gIGJvZHkuc2lkZWJhci1lbmFibGUgLnZlcnRpY2FsLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG4udmVydGljYWwtY29sbHBzZWQgLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAubG9nbyBzcGFuLmxvZ28tbGcge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC5sb2dvIHNwYW4ubG9nby1zbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiA1O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51IHBlcmZlY3Qtc2Nyb2xsYmFyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgcGVyZmVjdC1zY3JvbGxiYXIgLnBzIHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAuc2ltcGxlYmFyLW1hc2ssXG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgLnNpbXBsZWJhci1jb250ZW50LXdyYXBwZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51IC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51IC5zaW1wbGViYXItb2Zmc2V0IHtcbiAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSAubWVudS10aXRsZSxcbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IC5iYWRnZSxcbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IC5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IC5uYXYuY29sbGFwc2Uge1xuICBoZWlnaHQ6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IC5oYXMtYXJyb3c6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgbWluLWhlaWdodDogNTVweDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGE6aG92ZXIsIC52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGE6YWN0aXZlLCAudmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhOmZvY3VzIHtcbiAgY29sb3I6ICMzODNjNDA7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIGkge1xuICBmb250LXNpemU6IDEuNDVyZW07XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiBhIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogY2FsYygxOTBweCArIDUwcHgpO1xuICBjb2xvcjogIzAwNzRjODtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEgaSB7XG4gIGNvbG9yOiAjMDA3NGM4O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gYSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTkwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMCByZ2JhKDU0LCA2MSwgNzEsIDAuMSk7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiB1bCB1bCB7XG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwIHJnYmEoNTQsIDYxLCA3MSwgMC4xKTtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IHVsIGEge1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTkwcHg7XG4gIHotaW5kZXg6IDY7XG4gIGNvbG9yOiAjNTQ1YTZkO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzgzYzQwO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCB1bCB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICB6LWluZGV4OiA5OTk5O1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCB1bCBsaTpob3ZlciA+IHVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGxlZnQ6IDE5MHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTM2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDE5MHB4O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCB1bCBsaSA+IGEgc3Bhbi5wdWxsLXJpZ2h0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiAxMnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCB1bCBsaS5hY3RpdmUgYSB7XG4gIGNvbG9yOiAjZjhmOWZhO1xufVxuXG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAudmVydGljYWwtbWVudSB7XG4gIGJhY2tncm91bmQ6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAjc2lkZWJhci1tZW51IHVsIGxpIGEge1xuICBjb2xvcjogI2E2YjBjZjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgY29sb3I6ICM2YTcxODc7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAjc2lkZWJhci1tZW51IHVsIGxpIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAjc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIGEge1xuICBjb2xvcjogIzc5ODI5Yztcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgdWwuc3ViLW1lbnUgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiBhIHtcbiAgYmFja2dyb3VuZDogIzJlMzU0ODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEgaSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiB1bCBhIHtcbiAgY29sb3I6ICM3OTgyOWM7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IHVsIGE6aG92ZXIge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCB1bCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTMwNDI7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IHVsIGxpLm1tLWFjdGl2ZSAuYWN0aXZlIHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgdWwgbGkubW0tYWN0aXZlIC5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjNTU2ZWU2ICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubW0tYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5tbS1hY3RpdmUgPiBpIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5tbS1hY3RpdmUgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubW0tYWN0aXZlIC5hY3RpdmUgaSB7XG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXSAubWVudS10aXRsZSB7XG4gIGNvbG9yOiAjNmE3MTg3O1xufVxuXG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xufVxuXG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAubmF2YmFyLWJyYW5kLWJveCB7XG4gIHdpZHRoOiAxNjBweDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdIC52ZXJ0aWNhbC1tZW51IHtcbiAgd2lkdGg6IDE2MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAudmVydGljYWwtbWVudSAuaGFzLWFycm93OmFmdGVyLFxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gLnZlcnRpY2FsLW1lbnUgLmJhZGdlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAxNjBweDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdIC5mb290ZXIge1xuICBsZWZ0OiAxNjBweDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdICNzaWRlYmFyLW1lbnUgdWwgbGkubWVudS10aXRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTM1NDg7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAjc2lkZWJhci1tZW51IHVsIGxpIGEgaSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gI3NpZGViYXItbWVudSB1bCBsaSB1bC5zdWItbWVudSBsaSBhIHtcbiAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXS52ZXJ0aWNhbC1jb2xscHNlZCAubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYSBpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0udmVydGljYWwtY29sbHBzZWQgLmZvb3RlciB7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdIC52ZXJ0aWNhbC1tZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRjODtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRjODtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdIC5uYXZiYXItYnJhbmQtYm94IC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLm5hdmJhci1icmFuZC1ib3ggLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdIC5tbS1hY3RpdmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLm1tLWFjdGl2ZSA+IGksXG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAubW0tYWN0aXZlIC5hY3RpdmUge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gI3NpZGViYXItbWVudSB1bCBsaS5tZW51LXRpdGxlIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdICNzaWRlYmFyLW1lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAjc2lkZWJhci1tZW51IHVsIGxpIGEgaSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAjc2lkZWJhci1tZW51IHVsIGxpIGEud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAjc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIGEge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2FkMjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgdWwgbGkubW0tYWN0aXZlIC5hY3RpdmUge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuXG4udG9wbmF2IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMCBjYWxjKDI0cHggLyAyKTtcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMDMpO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDA7XG59XG4udG9wbmF2IC50b3BuYXYtbWVudSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xuICBjb2xvcjogIzU0NWE2ZDtcbn1cbi50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rIGkge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udG9wbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluazpmb2N1cywgLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzU1NmVlNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4udG9wbmF2IC5uYXZiYXItbmF2IC5kcm9wZG93bi1pdGVtIHtcbiAgY29sb3I6ICM1NDVhNmQ7XG59XG4udG9wbmF2IC5uYXZiYXItbmF2IC5kcm9wZG93bi1pdGVtLmFjdGl2ZSwgLnRvcG5hdiAubmF2YmFyLW5hdiAuZHJvcGRvd24taXRlbTpob3ZlciB7XG4gIGNvbG9yOiAjNTU2ZWU2O1xufVxuLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW0gLm5hdi1saW5rLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNTU2ZWU2O1xufVxuLnRvcG5hdiAubmF2YmFyLW5hdiAuZHJvcGRvd24uYWN0aXZlID4gYSB7XG4gIGNvbG9yOiAjNTU2ZWU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5jb250YWluZXItZmx1aWQsXG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5uYXZiYXItaGVhZGVyIHtcbiAgICBtYXgtd2lkdGg6IDg1JTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZpcnN0LW9mLXR5cGUgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24taXRlbSB7XG4gICAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcbiAgICBtaW4td2lkdGg6IDE4MHB4O1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duLm1lZ2EtZHJvcGRvd24gLm1lZ2EtZHJvcGRvd24tbWVudSB7XG4gICAgbGVmdDogMHB4O1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjI1cmVtIDAuMjVyZW07XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUgLmFycm93LWRvd246OmFmdGVyIHtcbiAgICByaWdodDogMTVweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICAudG9wbmF2IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMTAwJTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duOmhvdmVyID4gLmRyb3Bkb3duLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duOmhvdmVyID4gLmRyb3Bkb3duLW1lbnUgPiAuZHJvcGRvd246aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmFycm93LWRvd24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uYXJyb3ctZG93bjphZnRlciB7XG4gIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDFweDtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAwLjRlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICByaWdodDogNXB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiAgd2lkdGg6IDAuNGVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC50b3BuYXYtbWVudSAubmF2YmFyLW5hdiBsaTpsYXN0LW9mLXR5cGUgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICByaWdodDogMTAwJTtcbiAgICBsZWZ0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnRvcG5hdiB7XG4gICAgbWF4LWhlaWdodDogMzYwcHg7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMXJlbTtcbiAgfVxuICAudG9wbmF2IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAudG9wbmF2IC5kcm9wZG93biAuZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgIGNvbG9yOiAjMDA3NGM4O1xuICB9XG4gIC50b3BuYXYgLmFycm93LWRvd246OmFmdGVyIHtcbiAgICByaWdodDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWxpZ2h0XSAudG9wbmF2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xuICB9XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9bGlnaHRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9bGlnaHRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWxpZ2h0XSAudG9wbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcbiAgfVxuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWxpZ2h0XSAudG9wbmF2IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duLmFjdGl2ZSA+IGEge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgfVxufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAjcGFnZS10b3BiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xuICBib3gtc2hhZG93OiBub25lO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAubG9nby1kYXJrIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLmFwcC1zZWFyY2ggLmZvcm0tY29udHJvbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQzLCAyNDMsIDI0OSwgMC4wNyk7XG4gIGNvbG9yOiAjZmZmO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAuYXBwLXNlYXJjaCBzcGFuLFxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAuYXBwLXNlYXJjaCBpbnB1dC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAuaGVhZGVyLWl0ZW0ge1xuICBjb2xvcjogI2U5ZWNlZjtcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLmhlYWRlci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5uYXZiYXItaGVhZGVyIC5kcm9wZG93bi5zaG93IC5oZWFkZXItaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLm5hdmJhci1oZWFkZXIgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAubm90aS1pY29uIGkge1xuICBjb2xvcjogI2U5ZWNlZjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC50b3BuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yzg7XG4gIH1cbiAgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAudG9wbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluayB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLnRvcG5hdiAubmF2YmFyLW5hdiA+IC5kcm9wZG93bi5hY3RpdmUgPiBhIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuYm9keVtkYXRhLWxheW91dC1zaXplPWJveGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZjQ7XG59XG5ib2R5W2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdICNsYXlvdXQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmI7XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMDMpO1xufVxuYm9keVtkYXRhLWxheW91dC1zaXplPWJveGVkXSAjcGFnZS10b3BiYXIge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5ib2R5W2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdIC5mb290ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiBjYWxjKDEzMDBweCAtIDI1MHB4KTtcbn1cbmJvZHlbZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0udmVydGljYWwtY29sbHBzZWQgLmZvb3RlciB7XG4gIG1heC13aWR0aDogY2FsYygxMzAwcHggLSA1MHB4KTtcbn1cblxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLWxheW91dC1zaXplPWJveGVkXSAjcGFnZS10b3BiYXIsIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gI2xheW91dC13cmFwcGVyLCBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdIC5mb290ZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdIC5jb250YWluZXItZmx1aWQsIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gLm5hdmJhci1oZWFkZXIge1xuICBtYXgtd2lkdGg6IDEzMDBweDtcbn1cblxuLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15OmZvY3VzID4gLnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXkge1xuICB3aWR0aDogNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYjcgIWltcG9ydGFudDtcbn1cblxucGVyZmVjdC1zY3JvbGxiYXIgPiAucHMucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXk6aG92ZXIge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDI1cHg7XG59XG5cbi5jdXN0b20tY29udGFpbmVyLWZsdWlkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tY29udGVudCB7XG4gIG1hcmdpbi1yaWdodDogMjUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLXJzYiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1MHB4O1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmI7XG59XG5cbi5zaWRlLWJhci1hcnJvdyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1NnB4O1xuICByaWdodDogMjUwcHg7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS10b3AtcnNiIHtcbiAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXByb3Bvc2FsLXJzYiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uY3VzdG9tLWFwcC1zZWFyY2gge1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbn1cblxuLnByb3Bvc2FsLWxpc3Qge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ2cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucDIge1xuICBjb2xvcjogIzg5ODk4OTtcbn1cblxuLm15LWNhcmQge1xuICBtYXJnaW46IDBweCA4cHggNXB4ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cblxuLm15LWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLm15LWNhcmQ6aG92ZXIgLnAyIHtcbiAgY29sb3I6ICNlZmYyZjc7XG59XG5cbi5iZy1ibHVlQWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRjODtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5iZy1ibHVlQWN0aXZlIC5wMiB7XG4gIGNvbG9yOiAjZWZmMmY3O1xufVxuXG4uYmctZ3JlZW5BY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NDZkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnLWdyZWVuQWN0aXZlIC5wMiB7XG4gIGNvbG9yOiAjZWZmMmY3O1xufVxuXG4uZGV0YWlscy1zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZG9jcy1zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3BEZXRhaWxzIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi50b3AtZGV0YWlscy1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udG9wLWRldGFpbHMtY29udGVudC1oZWFkZXIge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYmFja2dyb3VuZDogI2ZlZmVmZTtcbn1cblxuLnRvcC1kZXRhaWxzLWNvbnRlbnQtYm9keSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5lZG9jLWRldGFpbHMtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVkb2MtZGV0YWlscy1jb250ZW50LWhlYWRlciB7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmN1c3RvbS1kb2MtYnRuIHtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3VzdG9tLWRvYy1idG4gPiAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmYiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzBweDtcbn1cblxuLmJlbG93RGV0YWlscyB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uYmVsb3dEZXRhaWxzLmV4cGFuZGVkIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYmVsb3dEZXRhaWxzLmNvbXByZXNzZWQge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLmRldGFpbHMtdGFicy1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNnB4KTtcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLmRldGFpbHMtdGFicy1jb250ZW50ID4gLmFjdGl2ZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAuY3VzdG9tLWFjdGl2ZS10YWItZCA+IHBlcmZlY3Qtc2Nyb2xsYmFyID4gZGl2ID4gZGl2LnBzLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmVkb2NzLXNpZGViYXIge1xuICB3aWR0aDogMzAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuLmVkb2NzLWNvbnRlbnQge1xuICB3aWR0aDogNzAlO1xuICBmbG9hdDogcmlnaHQ7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVkb2MtY2FyZCB7XG4gIG1hcmdpbjogMHB4IDEwcHggMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZG9jLXNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZWRvYy1wIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZWRvYy1pIHtcbiAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5lZG9jLWNhcmQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NDZkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmVkb2MtY2FyZDpob3ZlciAuZWRvYy1pIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5lZG9jLWNhcmQtYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTQ2ZCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmVkb2MtY2FyZC1hY3RpdmUgLmVkb2MtaSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaC0zMHB4IHtcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5saC0zMHB4IHtcbiAgbGluZS1oZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS10ZC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyLjVweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmN1c3RvbS10ZC1idG4xIHtcbiAgdG9wOiBjYWxjKDUwJSAtIDBweCk7XG59XG5cbi5jdXN0b20tdGQtYnRuMiB7XG4gIHRvcDogMzhweDtcbn1cblxuLmN1c3RvbS1idG4tc2Ige1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1idG4tdGIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJ0bi10YjIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcnNiLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuLlNSQi10YWJzLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLlNSQi10YWJzLWNvbnRlbnQgPiAudGFiLXBhbmUge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVkb2NzLWNvbnRlbnQtbGlzdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcC5tb2RhbC1kZW1vIC51aS1tb2RhbCB7XG4gIHotaW5kZXg6IDEwMDAwICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gIHdpZHRoOiA1MCU7XG59XG5cbjpob3N0IDo6bmctZGVlcC5tb2RhbC1kZW1vIC51aS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAudWktbW9kYWwtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzAwNzRjOCAhaW1wb3J0YW50O1xufVxuXG4udG9wLWxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tbW9kZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweDtcbiAgbWluLXdpZHRoOiAyNSU7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgdG9wOiAyNXB4O1xuICBib3R0b206IDI1cHg7XG4gIGxlZnQ6IDEyLjUlO1xuICB6LWluZGV4OiAxMDAwMDAwMDAwMDAwO1xufVxuXG4uY3VzdG9tLW1vZGFsLWZ1bGwtc2NyZWVuIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLW1vZGFsLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZWRvYy1kZXRhaWxzLWNvbnRlbnQtaGVhZGVyMSB7XG4gIGhlaWdodDogMzVweDtcbiAgYmFja2dyb3VuZDogI2U4ZThlODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmN1c3RvbS1kb2MtbW9kYWwtYnRuIHtcbiAgaGVpZ2h0OiAyN3B4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3VzdG9tLWRvYy1tb2RhbC1idG4gPiAuYnRuIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5lZG9jLWRldGFpbHMtY29udGVudC1ib2R5IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcbn1cblxuLmN1c3RvbS1lcnIge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAudG9wLWRldGFpbHMtY29udGVudC1ib2R5ID4gcGVyZmVjdC1zY3JvbGxiYXIgPiBkaXYgPiBkaXYucHMtY29udGVudCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udG9wLWNvdGVudC1mb3JtLWxlZnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyLjVweDtcbn1cblxuLnRvcC1jb3RlbnQtZm9ybS1yaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tbGVmdDogMi41cHg7XG59XG5cbi5jdXN0b20tZGQge1xuICBoZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjVyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcC5jdXN0b20tZGQgPiAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMS41ZW0gKyAwLjVyZW0gKyAycHgpICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNXJlbSArIDJweCkgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtYmFyLWRldGFpbHMge1xuICBtYXgtaGVpZ2h0OiA1MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLnNpZGUtYmFyLWRldGFpbHMtdGQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAuc2lkZS1iYXItZGV0YWlscyA+IHBlcmZlY3Qtc2Nyb2xsYmFyID4gZGl2ID4gZGl2LnBzLWNvbnRlbnQge1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2lkZS1iYXItbGlzdCB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ubWFzdGVyLWZvcm0tdGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5uYXYtdGFicy1jdXN0b20ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RkZGRkZCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4udG9wLWhlYWRlci10b29sLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XG59XG5cbi5jdXN0b20tZmlsdGVyLWljb24ge1xuICByaWdodDogMTNweCAhaW1wb3J0YW50O1xuICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZmlsdGVyLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20tc2VhcmNoLXJzYiB7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tZ3JvdXAtYnRuIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNzZweDtcbn1cblxuLmN1c3RvbS1ncm91cC1idG4gPiBidXR0b24ge1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAwcHggNXB4O1xufVxuXG4uY3RuIHtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuXG4uY3RuLXVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmN0bi1saSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5jdG4tYWN0aXZlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwMDk0NmQ7XG4gIGNvbG9yOiAjMDA5NDZkO1xufVxuXG4uY3VzdG9tLXRvb2xiYXItY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4uY3VzdG9tLWNvbnRlbnQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmN1c3RvbS1jb250ZW50LWJvZHkgPiBwZXJmZWN0LXNjcm9sbGJhciB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLmVkb2NzLWNvbnRlbnQtbGlzdCA+IHBlcmZlY3Qtc2Nyb2xsYmFyID4gZGl2ID4gZGl2LnBzLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4IDhweDtcbn1cblxuLmN1c3RvbS1lZG9jcy1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLWNvbC05LWVkb2NzIHtcbiAgcGFkZGluZzogNnB4IDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tY29sLTktZWRvY3MtcDEge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDMwO1xufVxuXG4uY3VzdG9tLWNvbC05LWVkb2NzLXAyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi10b3A6IDNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDExcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmN1c3RvbS1jb2wtOS1lZG9jcy1wMyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi5zcGFuMSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uc3BhbjEgPiBpIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMDA3NGM4O1xufVxuXG4uc3BhbjIge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5zcGFuMiA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMwMDc0Yzg7XG59XG5cbi5zcGFuMyB7XG4gIGNvbG9yOiAjODg4ODg4O1xufVxuXG4uY3VzdG9tLWVkb2NzLXJvdzpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzAwOTQ2ZDtcbn1cblxuLmN1c3RvbS1lZG9jcy1yb3ctYWN0aXZlIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA5NDZkO1xufVxuXG4uYWN0aXZpdHktY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQgIWltcG9ydGFudDtcbn1cblxuLmFjdGl2aXR5LWNhcmQgPiAuY2FyZC1oZWFkZXIge1xuICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWFjdGl2aXR5LWhlYWRlciA+IHRyID4gdGgge1xuICBmb250LXdlaWdodDogNDEwICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYWN0aXZpdHktZGQge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlICFpbXBvcnRhbnQ7XG59XG5cbi5zaWRlLWRldGFpbC1zcGFuIHtcbiAgY29sb3I6ICMwMDk0NmQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubmF2LXRhYnMtY3VzdG9tIC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMwMDk0NmQgIWltcG9ydGFudDtcbn1cblxuLm5hdi10YWJzLWN1c3RvbSAubmF2LWl0ZW0gLm5hdi1saW5rOjphZnRlciB7XG4gIGJhY2tncm91bmQ6ICMwMDk0NmQgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS10ZC1wciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RkZGRkZDtcbn1cblxuLmN1c3RvbS10ZC1pbnB1dCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYnRuLXluLXcge1xuICB3aWR0aDogMTMwcHggIWltcG9ydGFudDtcbn1cblxuLmgtMzUge1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbn1cblxuLmgtZnVsbC0zNSB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZGRkZGQ7XG59XG5cbi5yZWYtZG9jLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucmVmLWRvYy10b3AtdG9vbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5iZy1ncmF5IHtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbn1cblxuLnZlcnRpLXRpbWVsaW5lIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBkYXNoZWQgI2Y2ZjZmNjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbi5ldmVudC1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDAgMjVweCAzMHB4O1xufVxuXG4uZXZlbnQtdGltZWxpbmUtZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtOXB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmN1c3RvbS1tZWRpYS1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi50b3AtaGVhZGVyLWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmZmZmY7XG59XG5cbi5jdXN0b20tY29tbWVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNvbW1lbnQtaGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDlweCAjZGRkO1xufVxuXG4uY29tbWVudC1oZWFkID4gc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jb21tZW50LWhlYWQgPiBidXR0b24ge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb21tZW50LWhlYWQgPiBidXR0b24gPiBpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY3VzdG9tLWNvbW1lbnQgPiBwZXJmZWN0LXNjcm9sbGJhciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzdweCkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTVweCA4cHggOHB4ICFpbXBvcnRhbnQ7XG59XG5cbm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbn1cblxubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDI3cHggIWltcG9ydGFudDtcbn0iLCIvL1xyXG4vLyBHb29nbGUgZm9udCAtIFJvYm90b1xyXG4vL1xyXG5cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwJyk7IiwiLypcclxuVGVtcGxhdGUgTmFtZTogU2tvdGUgLSBSZXNwb25zaXZlIEJvb3RzdHJhcCA0IEFkbWluIERhc2hib2FyZFxyXG5BdXRob3I6IFRoZW1lc2JyYW5kXHJcblZlcnNpb246IDEuMC4wXHJcbldlYnNpdGU6IGh0dHBzOi8vdGhlbWVzYnJhbmQuY29tL1xyXG5Db250YWN0OiB0aGVtZXNicmFuZEBnbWFpbC5jb21cclxuRmlsZTogTWFpbiBDc3MgRmlsZVxyXG4qL1xyXG5cclxuLy9Gb250c1xyXG5AaW1wb3J0IFwiY3VzdG9tL2ZvbnRzL2ZvbnRzXCI7XHJcblxyXG4vL0NvcmUgZmlsZXNcclxuQGltcG9ydCBcIi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJ2YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4vbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy5zY3NzXCI7XHJcblxyXG4vLyBTdHJ1Y3R1cmVcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvZ2VuZXJhbFwiO1xyXG5AaW1wb3J0IFwiY3VzdG9tL3N0cnVjdHVyZS90b3BiYXJcIjtcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvcGFnZS1oZWFkXCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL2Zvb3RlclwiO1xyXG5AaW1wb3J0IFwiY3VzdG9tL3N0cnVjdHVyZS9yaWdodC1zaWRlYmFyXCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL3ZlcnRpY2FsXCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL2hvcml6b250YWwtbmF2XCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL2xheW91dHNcIjtcclxuXHJcbi8vIFBsdWdpbnNcclxuQGltcG9ydCBcImN1c3RvbS9wbHVnaW5zL2N1c3RvbS1zY3JvbGxiYXJcIjtcclxuQGltcG9ydCBcIn5Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3NcIjtcclxuXHJcbi8vIFBhZ2VzXHJcbkBpbXBvcnQgXCJjdXN0b20vcGFnZXMvYXV0aGVudGljYXRpb25cIjtcclxuIiwiLypcbiAqIENvbnRhaW5lciBzdHlsZVxuICovXG4ucHMge1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LWFuY2hvcjogbm9uZTtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICB0b3VjaC1hY3Rpb246IGF1dG87XG4gIC1tcy10b3VjaC1hY3Rpb246IGF1dG87XG59XG5cbi8qXG4gKiBTY3JvbGxiYXIgcmFpbCBzdHlsZXNcbiAqL1xuLnBzX19yYWlsLXgge1xuICBkaXNwbGF5OiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIG9wYWNpdHkgLjJzIGxpbmVhcjtcbiAgaGVpZ2h0OiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIG9yICd0b3AnIGZvciBwc19fcmFpbC14ICovXG4gIGJvdHRvbTogMHB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICB3aWR0aDogMTVweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIG9yICdsZWZ0JyBmb3IgcHNfX3JhaWwteSAqL1xuICByaWdodDogMDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzLS1hY3RpdmUteCA+IC5wc19fcmFpbC14LFxuLnBzLS1hY3RpdmUteSA+IC5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4ucHM6aG92ZXIgPiAucHNfX3JhaWwteCxcbi5wczpob3ZlciA+IC5wc19fcmFpbC15LFxuLnBzLS1mb2N1cyA+IC5wc19fcmFpbC14LFxuLnBzLS1mb2N1cyA+IC5wc19fcmFpbC15LFxuLnBzLS1zY3JvbGxpbmcteCA+IC5wc19fcmFpbC14LFxuLnBzLS1zY3JvbGxpbmcteSA+IC5wc19fcmFpbC15IHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4ucHMgLnBzX19yYWlsLXg6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXk6aG92ZXIsXG4ucHMgLnBzX19yYWlsLXg6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXk6Zm9jdXMsXG4ucHMgLnBzX19yYWlsLXgucHMtLWNsaWNraW5nLFxuLnBzIC5wc19fcmFpbC15LnBzLS1jbGlja2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIG9wYWNpdHk6IDAuOTtcbn1cblxuLypcbiAqIFNjcm9sbGJhciB0aHVtYiBzdHlsZXNcbiAqL1xuLnBzX190aHVtYi14IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBoZWlnaHQgLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAnYm90dG9tJyBmb3IgcHNfX3RodW1iLXggKi9cbiAgYm90dG9tOiAycHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCB3aWR0aCAuMnMgZWFzZS1pbi1vdXQ7XG4gIHdpZHRoOiA2cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ3JpZ2h0JyBmb3IgcHNfX3RodW1iLXkgKi9cbiAgcmlnaHQ6IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX19yYWlsLXg6aG92ZXIgPiAucHNfX3RodW1iLXgsXG4ucHNfX3JhaWwteDpmb2N1cyA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICBoZWlnaHQ6IDExcHg7XG59XG5cbi5wc19fcmFpbC15OmhvdmVyID4gLnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgd2lkdGg6IDExcHg7XG59XG5cbi8qIE1TIHN1cHBvcnRzICovXG5Ac3VwcG9ydHMgKC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCAoLW1zLWhpZ2gtY29udHJhc3Q6IG5vbmUpIHtcbiAgLnBzIHtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4iLCIubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXJ7YmFja2dyb3VuZDojZmZmO2JvcmRlci1jb2xvcjojYjNiM2IzICNjY2MgI2Q5ZDlkOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3d7dG9wOi0ycHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICM5OTk7Ym9yZGVyLXdpZHRoOjAgNXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1vcGVuZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLWFycm93OmhvdmVye2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMzMzfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtYm90dG9tPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZC5uZy1zZWxlY3QtdG9wPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowfS5uZy1zZWxlY3Qubmctc2VsZWN0LWZvY3VzZWQ6bm90KC5uZy1zZWxlY3Qtb3BlbmVkKT4ubmctc2VsZWN0LWNvbnRhaW5lcntib3JkZXItY29sb3I6IzAwN2VmZjtib3gtc2hhZG93Omluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMDc1KSwwIDAgMCAzcHggcmdiYSgwLDEyNiwyNTUsMC4xKX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1kaXNhYmxlZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOiNmOWY5Zjl9Lm5nLXNlbGVjdCAubmctaGFzLXZhbHVlIC5uZy1wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lcntjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MXB4IHNvbGlkICNjY2M7bWluLWhlaWdodDozNnB4O2FsaWduLWl0ZW1zOmNlbnRlcn0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyOmhvdmVye2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcnthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZy1sZWZ0OjEwcHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxMHB4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXJ7aGVpZ2h0OjM2cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3RvcDo1cHg7bGVmdDowO3BhZGRpbmctbGVmdDoxMHB4O3BhZGRpbmctcmlnaHQ6NTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjUwcHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOTtib3JkZXI6MXB4IHNvbGlkICNlNmU2ZTZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nOjAgNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy10b3A6NXB4O3BhZGRpbmctbGVmdDo3cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye3BhZGRpbmctcmlnaHQ6N3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVle2ZvbnQtc2l6ZTouOWVtO21hcmdpbi1ib3R0b206NXB4O2JhY2tncm91bmQtY29sb3I6I2ViZjVmZjtib3JkZXItcmFkaXVzOjJweDttYXJnaW4tcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7bWFyZ2luLXJpZ2h0OjA7bWFyZ2luLWxlZnQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVke2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZS5uZy12YWx1ZS1kaXNhYmxlZCAubmctdmFsdWUtbGFiZWx7cGFkZGluZy1sZWZ0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6MDtwYWRkaW5nLXJpZ2h0OjVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtbGFiZWx7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MXB4IDVweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNkMWU4ZmZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ubGVmdHtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjYjhkYmZmO2JvcmRlci1yaWdodDpub25lfS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLnJpZ2h0e2JvcmRlci1sZWZ0OjFweCBzb2xpZCAjYjhkYmZmfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MDtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNiOGRiZmZ9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDAgM3B4IDNweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmc6MCAzcHggM3B4IDB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7dG9wOjVweDtwYWRkaW5nLWJvdHRvbTo1cHg7cGFkZGluZy1sZWZ0OjNweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXBsYWNlaG9sZGVye3BhZGRpbmctcmlnaHQ6M3B4O3BhZGRpbmctbGVmdDowfS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXJ7Y29sb3I6Izk5OX0ubmctc2VsZWN0IC5uZy1jbGVhci13cmFwcGVyOmhvdmVyIC5uZy1jbGVhcntjb2xvcjojRDAwMjFCfS5uZy1zZWxlY3QgLm5nLXNwaW5uZXItem9uZXtwYWRkaW5nOjVweCA1cHggMCAwfVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDAgMCA1cHh9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcnt3aWR0aDoyNXB4O3BhZGRpbmctcmlnaHQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlcntwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyOmhvdmVyIC5uZy1hcnJvd3tib3JkZXItdG9wLWNvbG9yOiM2NjZ9Lm5nLXNlbGVjdCAubmctYXJyb3ctd3JhcHBlciAubmctYXJyb3d7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDIuNXB4fS5uZy1kcm9wZG93bi1wYW5lbHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO2JveC1zaGFkb3c6MCAxcHggMCByZ2JhKDAsMCwwLDAuMDYpO2xlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbXt0b3A6MTAwJTtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZTZlNmU2O21hcmdpbi10b3A6LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LWJvdHRvbSAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpsYXN0LWNoaWxke2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcHtib3R0b206MTAwJTtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1jb2xvcjojZTZlNmU2O21hcmdpbi1ib3R0b206LTFweH0ubmctZHJvcGRvd24tcGFuZWwubmctc2VsZWN0LXRvcCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpmaXJzdC1jaGlsZHtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1oZWFkZXJ7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1mb290ZXJ7Ym9yZGVyLXRvcDoxcHggc29saWQgI2NjYztwYWRkaW5nOjVweCA3cHh9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXB7dXNlci1zZWxlY3Q6bm9uZTtwYWRkaW5nOjhweCAxMHB4O2ZvbnQtd2VpZ2h0OjUwMDtjb2xvcjpyZ2JhKDAsMCwwLDAuNTQpO2N1cnNvcjpwb2ludGVyfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2ZvbnQtd2VpZ2h0OjYwMH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb257YmFja2dyb3VuZC1jb2xvcjojZmZmO2NvbG9yOnJnYmEoMCwwLDAsMC44Nyk7cGFkZGluZzo4cHggMTBweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtjb2xvcjojMzMzO2JhY2tncm91bmQtY29sb3I6I2ViZjVmZn0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkIC5uZy1vcHRpb24tbGFiZWwsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2VkIC5uZy1vcHRpb24tbGFiZWx7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tbWFya2Vke2JhY2tncm91bmQtY29sb3I6I2Y1ZmFmZjtjb2xvcjojMzMzfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tZGlzYWJsZWR7Y29sb3I6I2NjY30ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctbGVmdDoyMnB4fVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1jaGlsZHtwYWRkaW5nLXJpZ2h0OjIycHg7cGFkZGluZy1sZWZ0OjB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIC5uZy10YWctbGFiZWx7Zm9udC1zaXplOjgwJTtmb250LXdlaWdodDo0MDA7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4O3BhZGRpbmctcmlnaHQ6MH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbHtkaXJlY3Rpb246cnRsO3RleHQtYWxpZ246cmlnaHR9XG4iLCIvL1xyXG4vLyBfaGVhZGVyLnNjc3NcclxuLy9cclxuXHJcbiNwYWdlLXRvcGJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbn1cclxuXHJcbi5uYXZiYXItaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBwYWRkaW5nOiAwIGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMikgMCAwO1xyXG5cclxuICAuZHJvcGRvd24uc2hvdyB7XHJcbiAgICAuaGVhZGVyLWl0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheS0xMDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogJG5hdmJhci1icmFuZC1ib3gtd2lkdGg7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBsaW5lLWhlaWdodDogNTBweDtcclxuXHJcbiAgLmxvZ28tc20ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5sb2dvLWxpZ2h0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4vKiBTZWFyY2ggKi9cclxuXHJcbi5hcHAtc2VhcmNoIHtcclxuICBwYWRkaW5nOiBjYWxjKCN7JGhlYWRlci1oZWlnaHQgLSAzOHB4fSAvIDIpIDA7XHJcblxyXG4gIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3BiYXItc2VhcmNoLWJnO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY29sb3I6ICRncmF5LTYwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZ2EgbWVudVxyXG5cclxuLm1lZ2FtZW51LWxpc3Qge1xyXG4gIGxpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcblxyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiAkZHJvcGRvd24tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHNwYW4ubG9nby1sZyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5sb2dvLXNtIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnBhZ2UtY29udGVudCB7XHJcbiAgLy9wYWRkaW5nOiBjYWxjKCN7JGhlYWRlci1oZWlnaHR9ICsgI3skZ3JpZC1ndXR0ZXItd2lkdGh9KSBjYWxjKCN7JGdyaWQtZ3V0dGVyLXdpZHRofSAvIDIpICRmb290ZXItaGVpZ2h0IGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMik7XHJcbiAgcGFkZGluZzogY2FsYygjeyRoZWFkZXItaGVpZ2h0fSkgMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5oZWFkZXItaXRlbSB7XHJcbiAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICR3aGl0ZTtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLWl0ZW0tY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXByb2ZpbGUtdXNlciB7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTMwMDtcclxuICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbi5ub3RpLWljb24ge1xyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5iYWRnZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLWl0ZW0ge1xyXG4gIC5tZWRpYSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTMwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIERyb3Bkb3duIHdpdGggSWNvbnNcclxuLmRyb3Bkb3duLWljb24taXRlbSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4IDAgOXB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBGdWxsIFNjcmVlblxyXG4uZnVsbHNjcmVlbi1lbmFibGUge1xyXG4gIFtkYXRhLXRvZ2dsZT1cImZ1bGxzY3JlZW5cIl0ge1xyXG4gICAgLmJ4LWZ1bGxzY3JlZW46OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxlYTNmXCI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtdG9wYmFyPVwiZGFya1wiXSB7XHJcbiAgI3BhZ2UtdG9wYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZGFyay1iZztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItaGVhZGVyIHtcclxuICAgIC5kcm9wZG93bi5zaG93IHtcclxuICAgICAgLmhlYWRlci1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4wNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR3aGl0ZSwgMC40KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItaXRlbSB7XHJcbiAgICBjb2xvcjogJGhlYWRlci1kYXJrLWl0ZW0tY29sb3I7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItcHJvZmlsZS11c2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjI1KTtcclxuICB9XHJcblxyXG4gIC5ub3RpLWljb24ge1xyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvLWRhcmsge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1zZWFyY2gge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRvcGJhci1zZWFyY2gtYmcsIDAuMDcpO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sXHJcbiAgICBpbnB1dC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtc2lkZWJhcj1cImRhcmtcIl0ge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWRhcmstYmc7XHJcbiAgfVxyXG5cclxuICAubG9nby1kYXJrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nby1saWdodCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5uYXZiYXItaGVhZGVyIHtcclxuICAgIC5kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcblxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtdG9wYmFyPVwiZGFya1wiXSB7XHJcbiAgI3BhZ2UtdG9wYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXItZGFyay1iZztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItaGVhZGVyIHtcclxuICAgIC5kcm9wZG93bi5zaG93IHtcclxuICAgICAgLmhlYWRlci1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4wNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR3aGl0ZSwgMC40KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItaXRlbSB7XHJcbiAgICBjb2xvcjogJGhlYWRlci1kYXJrLWl0ZW0tY29sb3I7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItcHJvZmlsZS11c2VyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjI1KTtcclxuICB9XHJcblxyXG4gIC5ub3RpLWljb24ge1xyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dvLWRhcmsge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1zZWFyY2gge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHRvcGJhci1zZWFyY2gtYmcsIDAuMDcpO1xyXG4gICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4sXHJcbiAgICBpbnB1dC5mb3JtLWNvbnRyb2w6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtc2lkZWJhcj1cImRhcmtcIl0ge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWRhcmstYmc7XHJcbiAgfVxyXG5cclxuICAubG9nby1kYXJrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nby1saWdodCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5uYXZiYXItaGVhZGVyIHtcclxuICAgIC5kcm9wZG93biB7XHJcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcblxyXG4gICAgICAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHJpZ2h0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzODBweCkge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAucGFnZS1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6ICRoZWFkZXItaGVpZ2h0O1xyXG4gICAgLy8gcGFkZGluZzogY2FsYyg1NXB4ICsgI3skZ3JpZC1ndXR0ZXItd2lkdGh9KSBjYWxjKCN7JGdyaWQtZ3V0dGVyLXdpZHRofSAvIDIpICRmb290ZXItaGVpZ2h0IGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMik7XHJcbiAgICBwYWRkaW5nOiBjYWxjKDU1cHgpIDBweCAwcHggMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgYm9keVtkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0ge1xyXG4gICAgLnBhZ2UtY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFZhcmlhYmxlc1xyXG5cclxuLy9cclxuLy8gY3VzdG9tLXZhcmlhYmxlc1xyXG4vL1xyXG5AdXNlIFwic2FzczptYXRoXCI7XHJcbi8vIFZlcnRpY2FsIFNpZGViYXIgLSBEZWZhdWx0IExpZ2h0XHJcbiRzaWRlYmFyLWJnOiAjZmZmZmZmO1xyXG4kc2lkZWJhci1tZW51LWl0ZW0tY29sb3I6ICM1NDVhNmQ7XHJcbiRzaWRlYmFyLW1lbnUtc3ViLWl0ZW0tY29sb3I6ICM1NDVhNmQ7XHJcbiRzaWRlYmFyLW1lbnUtaXRlbS1pY29uLWNvbG9yOiAjN2Y4Mzg3O1xyXG4kc2lkZWJhci1tZW51LWl0ZW0taG92ZXItY29sb3I6ICMzODNjNDA7XHJcbiRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3I6ICM1NTZlZTY7XHJcbiRzaWRlYmFyLXdpZHRoOiAyNTBweDtcclxuJHNpZGViYXItY29sbGFwc2VkLXdpZHRoOiA1MHB4O1xyXG4kc2lkZWJhci13aWR0aC1zbTogMTYwcHg7XHJcbiRzaWRlYmFyLXJpZ2h0LWN1c3RvbS1jb2xsYXBzZWQtd2lkdGg6IDI1MHB4O1xyXG5cclxuLy8gVmVydGljYWwgU2lkZWJhciAtIERhcmtcclxuJHNpZGViYXItZGFyay1iZzogIzJhMzA0MjsgLy8yYzMxM2FcclxuJHNpZGViYXItZGFyay1tZW51LWl0ZW0tY29sb3I6ICNhNmIwY2Y7XHJcbiRzaWRlYmFyLWRhcmstbWVudS1zdWItaXRlbS1jb2xvcjogIzc5ODI5YztcclxuJHNpZGViYXItZGFyay1tZW51LWl0ZW0taWNvbi1jb2xvcjogIzZhNzE4NztcclxuJHNpZGViYXItZGFyay1tZW51LWl0ZW0taG92ZXItY29sb3I6ICNmZmZmZmY7XHJcbiRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWFjdGl2ZS1jb2xvcjogI2ZmZmZmZjtcclxuXHJcbi8vIFRvcGJhciAtIERlYWZ1bHQgTGlnaHRcclxuJGhlYWRlci1oZWlnaHQ6IDUwcHg7XHJcbiRoZWFkZXItYmc6ICNmZmZmZmY7XHJcbiRoZWFkZXItaXRlbS1jb2xvcjogIzU1NWI2ZDtcclxuXHJcbi8vIFRvcGJhciAtIERhcmtcclxuJGhlYWRlci1kYXJrLWJnOiAjMmEzMDQyO1xyXG4kaGVhZGVyLWRhcmstaXRlbS1jb2xvcjogI2U5ZWNlZjtcclxuXHJcbi8vIFRvcGJhciBTZWFyY2hcclxuJHRvcGJhci1zZWFyY2gtYmc6ICNmM2YzZjk7XHJcblxyXG4vLyBGb290ZXJcclxuJGZvb3Rlci1oZWlnaHQ6IDYwcHg7XHJcbiRmb290ZXItYmc6ICNmMmYyZjU7XHJcbiRmb290ZXItY29sb3I6ICM3NDc4OGQ7XHJcblxyXG4vLyBIb3Jpem9udGFsIG5hdlxyXG4kdG9wbmF2LWJnOiAjZmZmO1xyXG5cclxuLy8gUmlnaHQgU2lkZWJhclxyXG4kcmlnaHRiYXItd2lkdGg6IDI4MHB4O1xyXG5cclxuLy8gRGlzcGxheVxyXG4kZGlzcGxheS1ub25lOiBub25lO1xyXG4kZGlzcGxheS1ibG9jazogYmxvY2s7XHJcblxyXG4vLyBCcmFuZFxyXG4kbmF2YmFyLWJyYW5kLWJveC13aWR0aDogMjUwcHg7XHJcblxyXG4vLyBCb3hlZCBsYXlvdXQgd2lkdGhcclxuJGJveGVkLWxheW91dC13aWR0aDogMTMwMHB4O1xyXG4kYm94ZWQtYm9keS1iZzogI2ViZWJmNDtcclxuXHJcbi8vIEZvbnQgV2VpZ2h0XHJcbiRmb250LXdlaWdodC1tZWRpdW06IDUwMDtcclxuJGZvbnQtd2VpZ2h0LXNlbWlib2xkOiA2MDA7XHJcblxyXG4vLyBhcGV4IGNoYXJ0c1xyXG4kYXBleC1ncmlkLWNvbG9yOiAjZjhmOWZhO1xyXG5cclxuLy8gQ2hhcnQgY29sb3JcclxuJGNoYXJ0LXRleHQtY29sb3I6ICMzNDNhNDA7XHJcblxyXG4vLyBWYXJpYWJsZXNcclxuLy9cclxuLy8gVmFyaWFibGVzIHNob3VsZCBmb2xsb3cgdGhlIGAkY29tcG9uZW50LXN0YXRlLXByb3BlcnR5LXNpemVgIGZvcm11bGEgZm9yXHJcbi8vIGNvbnNpc3RlbnQgbmFtaW5nLiBFeDogJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yIGFuZCAkbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzLlxyXG5cclxuLy8gQ29sb3Igc3lzdGVtXHJcblxyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmF5LTEwMDogI2Y4ZjlmYTtcclxuJGdyYXktMjAwOiAjZWZmMmY3O1xyXG4kZ3JheS0zMDA6ICNmNmY2ZjY7XHJcbiRncmF5LTQwMDogI2NlZDRkYTtcclxuJGdyYXktNTAwOiAjYWRiNWJkO1xyXG4kZ3JheS02MDA6ICM3NDc4OGQ7XHJcbiRncmF5LTcwMDogIzQ5NTA1NztcclxuJGdyYXktODAwOiAjMzQzYTQwO1xyXG4kZ3JheS05MDA6ICMyMTI1Mjk7XHJcbiRibGFjazogIzAwMDtcclxuXHJcbiRncmF5czogKCk7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRncmF5czogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiMTAwXCI6ICRncmF5LTEwMCxcclxuICAgIFwiMjAwXCI6ICRncmF5LTIwMCxcclxuICAgIFwiMzAwXCI6ICRncmF5LTMwMCxcclxuICAgIFwiNDAwXCI6ICRncmF5LTQwMCxcclxuICAgIFwiNTAwXCI6ICRncmF5LTUwMCxcclxuICAgIFwiNjAwXCI6ICRncmF5LTYwMCxcclxuICAgIFwiNzAwXCI6ICRncmF5LTcwMCxcclxuICAgIFwiODAwXCI6ICRncmF5LTgwMCxcclxuICAgIFwiOTAwXCI6ICRncmF5LTkwMCxcclxuICApLFxyXG4gICRncmF5c1xyXG4pO1xyXG5cclxuJGJsdWU6ICMwMDc0Yzg7IC8vIzU1NmVlNjtcclxuJGluZGlnbzogIzU2NGFiMTtcclxuJHB1cnBsZTogIzZmNDJjMTtcclxuJHBpbms6ICNlODNlOGM7XHJcbiRyZWQ6ICNmNDZhNmE7XHJcbiRvcmFuZ2U6ICNmMTczNGY7XHJcbiR5ZWxsb3c6ICNmMWI0NGM7XHJcbiRncmVlbjogIzAwOTQ2ZDsgLy8jMzRjMzhmO1xyXG4kdGVhbDogIzA1MDUwNTtcclxuJGN5YW46ICM1MGE1ZjE7XHJcblxyXG4kY29sb3JzOiAoKTtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJGNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwiYmx1ZVwiOiAkYmx1ZSxcclxuICAgIFwiaW5kaWdvXCI6ICRpbmRpZ28sXHJcbiAgICBcInB1cnBsZVwiOiAkcHVycGxlLFxyXG4gICAgXCJwaW5rXCI6ICRwaW5rLFxyXG4gICAgXCJyZWRcIjogJHJlZCxcclxuICAgIFwib3JhbmdlXCI6ICRvcmFuZ2UsXHJcbiAgICBcInllbGxvd1wiOiAkeWVsbG93LFxyXG4gICAgXCJncmVlblwiOiAkZ3JlZW4sXHJcbiAgICBcInRlYWxcIjogJHRlYWwsXHJcbiAgICBcImN5YW5cIjogJGN5YW4sXHJcbiAgICBcIndoaXRlXCI6ICR3aGl0ZSxcclxuICAgIFwiZ3JheVwiOiAkZ3JheS02MDAsXHJcbiAgICBcImdyYXktZGFya1wiOiAkZ3JheS04MDAsXHJcbiAgKSxcclxuICAkY29sb3JzXHJcbik7XHJcblxyXG4kcHJpbWFyeTogJGJsdWU7XHJcbiRzZWNvbmRhcnk6ICRncmF5LTYwMDtcclxuJHN1Y2Nlc3M6ICRncmVlbjtcclxuJGluZm86ICRjeWFuO1xyXG4kd2FybmluZzogJHllbGxvdztcclxuJGRhbmdlcjogJHJlZDtcclxuJGxpZ2h0OiAkZ3JheS0yMDA7XHJcbiRkYXJrOiAkZ3JheS04MDA7XHJcblxyXG4kdGhlbWUtY29sb3JzOiAoKTtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHRoZW1lLWNvbG9yczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwicHJpbWFyeVwiOiAkcHJpbWFyeSxcclxuICAgIFwic2Vjb25kYXJ5XCI6ICRzZWNvbmRhcnksXHJcbiAgICBcInN1Y2Nlc3NcIjogJHN1Y2Nlc3MsXHJcbiAgICBcImluZm9cIjogJGluZm8sXHJcbiAgICBcIndhcm5pbmdcIjogJHdhcm5pbmcsXHJcbiAgICBcImRhbmdlclwiOiAkZGFuZ2VyLFxyXG4gICAgXCJwaW5rXCI6ICRwaW5rLFxyXG4gICAgXCJsaWdodFwiOiAkbGlnaHQsXHJcbiAgICBcImRhcmtcIjogJGRhcmssXHJcbiAgKSxcclxuICAkdGhlbWUtY29sb3JzXHJcbik7XHJcblxyXG4vLyBTZXQgYSBzcGVjaWZpYyBqdW1wIHBvaW50IGZvciByZXF1ZXN0aW5nIGNvbG9yIGp1bXBzXHJcbiR0aGVtZS1jb2xvci1pbnRlcnZhbDogOCU7XHJcblxyXG4vLyBUaGUgeWlxIGxpZ2h0bmVzcyB2YWx1ZSB0aGF0IGRldGVybWluZXMgd2hlbiB0aGUgbGlnaHRuZXNzIG9mIGNvbG9yIGNoYW5nZXMgZnJvbSBcImRhcmtcIiB0byBcImxpZ2h0XCIuIEFjY2VwdGFibGUgdmFsdWVzIGFyZSBiZXR3ZWVuIDAgYW5kIDI1NS5cclxuJHlpcS1jb250cmFzdGVkLXRocmVzaG9sZDogMjAwO1xyXG5cclxuLy8gQ3VzdG9taXplIHRoZSBsaWdodCBhbmQgZGFyayB0ZXh0IGNvbG9ycyBmb3IgdXNlIGluIG91ciBZSVEgY29sb3IgY29udHJhc3QgZnVuY3Rpb24uXHJcbiR5aXEtdGV4dC1kYXJrOiAkZ3JheS05MDA7XHJcbiR5aXEtdGV4dC1saWdodDogJHdoaXRlO1xyXG5cclxuLy8gT3B0aW9uc1xyXG4vL1xyXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXHJcblxyXG4kZW5hYmxlLWNhcmV0OiBmYWxzZTtcclxuJGVuYWJsZS1yb3VuZGVkOiB0cnVlO1xyXG4kZW5hYmxlLXNoYWRvd3M6IGZhbHNlO1xyXG4kZW5hYmxlLWdyYWRpZW50czogZmFsc2U7XHJcbiRlbmFibGUtdHJhbnNpdGlvbnM6IHRydWU7XHJcbiRlbmFibGUtcHJlZmVycy1yZWR1Y2VkLW1vdGlvbi1tZWRpYS1xdWVyeTogdHJ1ZTtcclxuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogZmFsc2U7IC8vIERlcHJlY2F0ZWQsIG5vIGxvbmdlciBhZmZlY3RzIGFueSBjb21waWxlZCBDU1NcclxuJGVuYWJsZS1ncmlkLWNsYXNzZXM6IHRydWU7XHJcbiRlbmFibGUtcG9pbnRlci1jdXJzb3ItZm9yLWJ1dHRvbnM6IHRydWU7XHJcbiRlbmFibGUtcHJpbnQtc3R5bGVzOiB0cnVlO1xyXG4kZW5hYmxlLXJlc3BvbnNpdmUtZm9udC1zaXplczogZmFsc2U7XHJcbiRlbmFibGUtdmFsaWRhdGlvbi1pY29uczogdHJ1ZTtcclxuJGVuYWJsZS1kZXByZWNhdGlvbi1tZXNzYWdlczogdHJ1ZTtcclxuXHJcbi8vIFNwYWNpbmdcclxuLy9cclxuLy8gQ29udHJvbCB0aGUgZGVmYXVsdCBzdHlsaW5nIG9mIG1vc3QgQm9vdHN0cmFwIGVsZW1lbnRzIGJ5IG1vZGlmeWluZyB0aGVzZVxyXG4vLyB2YXJpYWJsZXMuIE1vc3RseSBmb2N1c2VkIG9uIHNwYWNpbmcuXHJcbi8vIFlvdSBjYW4gYWRkIG1vcmUgZW50cmllcyB0byB0aGUgJHNwYWNlcnMgbWFwLCBzaG91bGQgeW91IG5lZWQgbW9yZSB2YXJpYXRpb24uXHJcblxyXG4kc3BhY2VyOiAxcmVtO1xyXG4kc3BhY2VyczogKCk7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRzcGFjZXJzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgMDogMCxcclxuICAgIDE6IChcclxuICAgICAgJHNwYWNlciAqIDAuMjUsXHJcbiAgICApLFxyXG4gICAgMjogKFxyXG4gICAgICAkc3BhY2VyICogMC41LFxyXG4gICAgKSxcclxuICAgIDM6ICRzcGFjZXIsXHJcbiAgICA0OiAoXHJcbiAgICAgICRzcGFjZXIgKiAxLjUsXHJcbiAgICApLFxyXG4gICAgNTogKFxyXG4gICAgICAkc3BhY2VyICogMyxcclxuICAgICksXHJcbiAgKSxcclxuICAkc3BhY2Vyc1xyXG4pO1xyXG5cclxuLy8gVGhpcyB2YXJpYWJsZSBhZmZlY3RzIHRoZSBgLmgtKmAgYW5kIGAudy0qYCBjbGFzc2VzLlxyXG4kc2l6ZXM6ICgpO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kc2l6ZXM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAyNTogMjUlLFxyXG4gICAgNTA6IDUwJSxcclxuICAgIDc1OiA3NSUsXHJcbiAgICAxMDA6IDEwMCUsXHJcbiAgICBhdXRvOiBhdXRvLFxyXG4gICksXHJcbiAgJHNpemVzXHJcbik7XHJcblxyXG4vLyBCb2R5XHJcbi8vXHJcbi8vIFNldHRpbmdzIGZvciB0aGUgYDxib2R5PmAgZWxlbWVudC5cclxuXHJcbiRib2R5LWJnOiAjZjhmOGZiO1xyXG4kYm9keS1jb2xvcjogJGdyYXktNzAwO1xyXG5cclxuLy8gTGlua3NcclxuLy9cclxuLy8gU3R5bGUgYW5jaG9yIGVsZW1lbnRzLlxyXG5cclxuJGxpbmstY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcclxuJGxpbmstZGVjb3JhdGlvbjogbm9uZTtcclxuJGxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkbGluay1jb2xvciwgMTUlKTtcclxuJGxpbmstaG92ZXItZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4vLyBEYXJrZW4gcGVyY2VudGFnZSBmb3IgbGlua3Mgd2l0aCBgLnRleHQtKmAgY2xhc3MgKGUuZy4gYC50ZXh0LXN1Y2Nlc3NgKVxyXG4kZW1waGFzaXplZC1saW5rLWhvdmVyLWRhcmtlbi1wZXJjZW50YWdlOiAxNSU7XHJcblxyXG4vLyBQYXJhZ3JhcGhzXHJcbi8vXHJcbi8vIFN0eWxlIHAgZWxlbWVudC5cclxuXHJcbiRwYXJhZ3JhcGgtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbi8vIEdyaWQgYnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuXHJcbiRncmlkLWJyZWFrcG9pbnRzOiAoXHJcbiAgeHM6IDAsXHJcbiAgc206IDU3NnB4LFxyXG4gIG1kOiA3NjhweCxcclxuICBsZzogOTkycHgsXHJcbiAgeGw6IDEyMDBweCxcclxuKTtcclxuXHJcbkBpbmNsdWRlIF9hc3NlcnQtYXNjZW5kaW5nKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xyXG5AaW5jbHVkZSBfYXNzZXJ0LXN0YXJ0cy1hdC16ZXJvKCRncmlkLWJyZWFrcG9pbnRzLCBcIiRncmlkLWJyZWFrcG9pbnRzXCIpO1xyXG5cclxuLy8gR3JpZCBjb250YWluZXJzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiBgLmNvbnRhaW5lcmAgZm9yIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMuXHJcblxyXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcclxuICBzbTogNTQwcHgsXHJcbiAgbWQ6IDcyMHB4LFxyXG4gIGxnOiA5NjBweCxcclxuICB4bDogMTE0MHB4LFxyXG4pO1xyXG5cclxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGNvbnRhaW5lci1tYXgtd2lkdGhzLCBcIiRjb250YWluZXItbWF4LXdpZHRoc1wiKTtcclxuXHJcbi8vIEdyaWQgY29sdW1uc1xyXG4vL1xyXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cclxuXHJcbiRncmlkLWNvbHVtbnM6IDEyO1xyXG4kZ3JpZC1ndXR0ZXItd2lkdGg6IDI0cHg7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vXHJcbi8vIERlZmluZSBjb21tb24gcGFkZGluZyBhbmQgYm9yZGVyIHJhZGl1cyBzaXplcyBhbmQgbW9yZS5cclxuXHJcbiRsaW5lLWhlaWdodC1sZzogMS41O1xyXG4kbGluZS1oZWlnaHQtc206IDEuNTtcclxuXHJcbiRib3JkZXItd2lkdGg6IDFweDtcclxuJGJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xyXG5cclxuJGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjRyZW07XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjJyZW07XHJcblxyXG4kcm91bmRlZC1waWxsOiA1MHJlbTtcclxuXHJcbiRib3gtc2hhZG93LXNtOiAwIDAuMTI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMDc1KTtcclxuJGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxOCwgMzgsIDYzLCAwLjAzKTtcclxuJGJveC1zaGFkb3ctbGc6IDAgMXJlbSAzcmVtIHJnYmEoJGJsYWNrLCAwLjE3NSk7XHJcblxyXG4kY29tcG9uZW50LWFjdGl2ZS1iZzogJHByaW1hcnk7XHJcblxyXG4kY2FyZXQtd2lkdGg6IDAuM2VtO1xyXG4kY2FyZXQtdmVydGljYWwtYWxpZ246ICRjYXJldC13aWR0aCAqIDAuODU7XHJcbiRjYXJldC1zcGFjaW5nOiAkY2FyZXQtd2lkdGggKiAwLjg1O1xyXG5cclxuJHRyYW5zaXRpb24tYmFzZTogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiR0cmFuc2l0aW9uLWZhZGU6IG9wYWNpdHkgMC4xNXMgbGluZWFyO1xyXG4kdHJhbnNpdGlvbi1jb2xsYXBzZTogaGVpZ2h0IDAuMzVzIGVhc2U7XHJcblxyXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiAoKTtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvczogam9pbihcclxuICAoKDIxIDkpLCAoMTYgOSksICg0IDMpLCAoMSAxKSksXHJcbiAgJGVtYmVkLXJlc3BvbnNpdmUtYXNwZWN0LXJhdGlvc1xyXG4pO1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4vL1xyXG4vLyBGb250LCBsaW5lLWhlaWdodCwgYW5kIGNvbG9yIGZvciBib2R5IHRleHQsIGhlYWRpbmdzLCBhbmQgbW9yZS5cclxuXHJcbi8vIHN0eWxlbGludC1kaXNhYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6IFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcyxcclxuICBcIkxpYmVyYXRpb24gTW9ub1wiLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZTtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmO1xyXG4vLyBzdHlsZWxpbnQtZW5hYmxlIHZhbHVlLWtleXdvcmQtY2FzZVxyXG5cclxuJGZvbnQtc2l6ZS1iYXNlOiAwLjgxMjVyZW07XHJcbiRmb250LXNpemUtbGc6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcbiRmb250LXNpemUtc206ICRmb250LXNpemUtYmFzZSAqIDAuODc1O1xyXG5cclxuJGZvbnQtd2VpZ2h0LWxpZ2h0ZXI6IGxpZ2h0ZXI7XHJcbiRmb250LXdlaWdodC1saWdodDogMzAwO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcbiRmb250LXdlaWdodC1ib2xkOiA2MDA7XHJcbiRmb250LXdlaWdodC1ib2xkZXI6IGJvbGRlcjtcclxuXHJcbiRmb250LXdlaWdodC1iYXNlOiAkZm9udC13ZWlnaHQtbm9ybWFsO1xyXG4kbGluZS1oZWlnaHQtYmFzZTogMS41O1xyXG5cclxuJGgxLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMi41O1xyXG4kaDItZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyO1xyXG4kaDMtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjc1O1xyXG4kaDQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjU7XHJcbiRoNS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcbiRoNi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuXHJcbiRoZWFkaW5ncy1tYXJnaW4tYm90dG9tOiBtYXRoLmRpdigkc3BhY2VyLCAyKTtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBudWxsO1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDUwMDtcclxuJGhlYWRpbmdzLWxpbmUtaGVpZ2h0OiAxLjI7XHJcbiRoZWFkaW5ncy1jb2xvcjogbnVsbDtcclxuXHJcbiRkaXNwbGF5MS1zaXplOiA2cmVtO1xyXG4kZGlzcGxheTItc2l6ZTogNS41cmVtO1xyXG4kZGlzcGxheTMtc2l6ZTogNC41cmVtO1xyXG4kZGlzcGxheTQtc2l6ZTogMy41cmVtO1xyXG5cclxuJGRpc3BsYXkxLXdlaWdodDogMzAwO1xyXG4kZGlzcGxheTItd2VpZ2h0OiAzMDA7XHJcbiRkaXNwbGF5My13ZWlnaHQ6IDMwMDtcclxuJGRpc3BsYXk0LXdlaWdodDogMzAwO1xyXG4kZGlzcGxheS1saW5lLWhlaWdodDogJGhlYWRpbmdzLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGxlYWQtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG4kbGVhZC1mb250LXdlaWdodDogMzAwO1xyXG5cclxuJHNtYWxsLWZvbnQtc2l6ZTogODAlO1xyXG5cclxuJHRleHQtbXV0ZWQ6ICRncmF5LTYwMDtcclxuXHJcbiRibG9ja3F1b3RlLXNtYWxsLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRibG9ja3F1b3RlLXNtYWxsLWZvbnQtc2l6ZTogJHNtYWxsLWZvbnQtc2l6ZTtcclxuJGJsb2NrcXVvdGUtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAxLjI1O1xyXG5cclxuJGhyLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMSk7XHJcbiRoci1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4kbWFyay1wYWRkaW5nOiAwLjJlbTtcclxuXHJcbiRkdC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XHJcblxyXG4ka2JkLWJveC1zaGFkb3c6IGluc2V0IDAgLTAuMXJlbSAwIHJnYmEoJGJsYWNrLCAwLjI1KTtcclxuJG5lc3RlZC1rYmQtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xyXG5cclxuJGxpc3QtaW5saW5lLXBhZGRpbmc6IDAuNXJlbTtcclxuXHJcbiRtYXJrLWJnOiAjZmNmOGUzO1xyXG5cclxuJGhyLW1hcmdpbi15OiAkc3BhY2VyO1xyXG5cclxuLy8gVGFibGVzXHJcbi8vXHJcbi8vIEN1c3RvbWl6ZXMgdGhlIGAudGFibGVgIGNvbXBvbmVudCB3aXRoIGJhc2ljIHZhbHVlcywgZWFjaCB1c2VkIGFjcm9zcyBhbGwgdGFibGUgdmFyaWF0aW9ucy5cclxuXHJcbiR0YWJsZS1jZWxsLXBhZGRpbmc6IDAuNzVyZW07XHJcbiR0YWJsZS1jZWxsLXBhZGRpbmctc206IDAuM3JlbTtcclxuXHJcbiR0YWJsZS1jb2xvcjogJGJvZHktY29sb3I7XHJcbiR0YWJsZS1iZzogbnVsbDtcclxuJHRhYmxlLWFjY2VudC1iZzogJGdyYXktMTAwO1xyXG4kdGFibGUtaG92ZXItY29sb3I6ICR0YWJsZS1jb2xvcjtcclxuJHRhYmxlLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcbiR0YWJsZS1hY3RpdmUtYmc6ICR0YWJsZS1ob3Zlci1iZztcclxuXHJcbiR0YWJsZS1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiR0YWJsZS1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcblxyXG4kdGFibGUtaGVhZC1iZzogJGdyYXktMTAwO1xyXG4kdGFibGUtaGVhZC1jb2xvcjogJGdyYXktNzAwO1xyXG5cclxuJHRhYmxlLWRhcmstY29sb3I6ICR3aGl0ZTtcclxuJHRhYmxlLWRhcmstYmc6ICRncmF5LTgwMDtcclxuJHRhYmxlLWRhcmstYWNjZW50LWJnOiByZ2JhKCR3aGl0ZSwgMC4wNSk7XHJcbiR0YWJsZS1kYXJrLWhvdmVyLWNvbG9yOiAkdGFibGUtZGFyay1jb2xvcjtcclxuJHRhYmxlLWRhcmstaG92ZXItYmc6IHJnYmEoJHdoaXRlLCAwLjA3NSk7XHJcbiR0YWJsZS1kYXJrLWJvcmRlci1jb2xvcjogbGlnaHRlbigkdGFibGUtZGFyay1iZywgNy41JSk7XHJcbiR0YWJsZS1kYXJrLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kdGFibGUtc3RyaXBlZC1vcmRlcjogb2RkO1xyXG5cclxuJHRhYmxlLWNhcHRpb24tY29sb3I6ICR0ZXh0LW11dGVkO1xyXG5cclxuJHRhYmxlLWJnLWxldmVsOiAtOTtcclxuJHRhYmxlLWJvcmRlci1sZXZlbDogLTY7XHJcblxyXG4vLyBCdXR0b25zICsgRm9ybXNcclxuLy9cclxuLy8gU2hhcmVkIHZhcmlhYmxlcyB0aGF0IGFyZSByZWFzc2lnbmVkIHRvIGAkaW5wdXQtYCBhbmQgYCRidG4tYCBzcGVjaWZpYyB2YXJpYWJsZXMuXHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteTogMC40N3JlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1mYW1pbHk6IG51bGw7XHJcbiRpbnB1dC1idG4tZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJGlucHV0LWJ0bi1mb2N1cy13aWR0aDogMC4xNXJlbTtcclxuJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjogcmdiYSgkY29tcG9uZW50LWFjdGl2ZS1iZywgMC4yNSk7XHJcbiRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdzogMCAwIDAgJGlucHV0LWJ0bi1mb2N1cy13aWR0aCAkaW5wdXQtYnRuLWZvY3VzLWNvbG9yO1xyXG5cclxuJGlucHV0LWJ0bi1wYWRkaW5nLXktc206IDAuMjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRpbnB1dC1idG4tZm9udC1zaXplLXNtOiAkZm9udC1zaXplLXNtO1xyXG4kaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtOiAkbGluZS1oZWlnaHQtc207XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1sZzogMC41cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteC1sZzogMXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtbGc6ICRmb250LXNpemUtbGc7XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtbGc6ICRsaW5lLWhlaWdodC1sZztcclxuXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG5cclxuLy8gQnV0dG9uc1xyXG4vL1xyXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCwgYW5kIGJvcmRlciBjb2xvci5cclxuXHJcbiRidG4tcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGJ0bi1wYWRkaW5nLXg6ICRpbnB1dC1idG4tcGFkZGluZy14O1xyXG4kYnRuLWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kYnRuLWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRidG4tbGluZS1oZWlnaHQ6ICRpbnB1dC1idG4tbGluZS1oZWlnaHQ7XHJcblxyXG4kYnRuLXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRidG4tcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGJ0bi1mb250LXNpemUtc206ICRpbnB1dC1idG4tZm9udC1zaXplLXNtO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGJ0bi1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kYnRuLXBhZGRpbmcteC1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXgtbGc7XHJcbiRidG4tZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGJ0bi1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRidG4tYm9yZGVyLXdpZHRoOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcclxuXHJcbiRidG4tZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRidG4tYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKCR3aGl0ZSwgMC4xNSksIDAgMXB4IDFweCByZ2JhKCRibGFjaywgMC4wNzUpO1xyXG4kYnRuLWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kYnRuLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJGJ0bi1kaXNhYmxlZC1vcGFjaXR5OiAwLjY1O1xyXG4kYnRuLWFjdGl2ZS1ib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgkYmxhY2ssIDAuMTI1KTtcclxuXHJcbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGJ0bi1ibG9jay1zcGFjaW5nLXk6IDAuNXJlbTtcclxuXHJcbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcclxuJGJ0bi1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cy1sZztcclxuJGJ0bi1ib3JkZXItcmFkaXVzLXNtOiAkYm9yZGVyLXJhZGl1cy1zbTtcclxuXHJcbiRidG4tdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cclxuLy8gRm9ybXNcclxuXHJcbiRsYWJlbC1tYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4kaW5wdXQtcGFkZGluZy15OiAkaW5wdXQtYnRuLXBhZGRpbmcteTtcclxuJGlucHV0LXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRpbnB1dC1mb250LWZhbWlseTogJGlucHV0LWJ0bi1mb250LWZhbWlseTtcclxuJGlucHV0LWZvbnQtc2l6ZTogJGlucHV0LWJ0bi1mb250LXNpemU7XHJcbiRpbnB1dC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJhc2U7XHJcbiRpbnB1dC1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktc206ICRpbnB1dC1idG4tcGFkZGluZy15LXNtO1xyXG4kaW5wdXQtcGFkZGluZy14LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1zbTtcclxuJGlucHV0LWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRpbnB1dC1saW5lLWhlaWdodC1zbTogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXktbGc6ICRpbnB1dC1idG4tcGFkZGluZy15LWxnO1xyXG4kaW5wdXQtcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGlucHV0LWZvbnQtc2l6ZS1sZzogJGlucHV0LWJ0bi1mb250LXNpemUtbGc7XHJcbiRpbnB1dC1saW5lLWhlaWdodC1sZzogJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZztcclxuXHJcbiRpbnB1dC1iZzogJHdoaXRlO1xyXG4kaW5wdXQtZGlzYWJsZWQtYmc6ICR3aGl0ZTtcclxuXHJcbiRpbnB1dC1jb2xvcjogJGdyYXktNzAwO1xyXG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRpbnB1dC1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG4kaW5wdXQtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSk7XHJcblxyXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAkYm9yZGVyLXJhZGl1cy1sZztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzLXNtO1xyXG5cclxuJGlucHV0LWZvY3VzLWJnOiAkaW5wdXQtYmc7XHJcbiRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I6IGRhcmtlbigkaW5wdXQtYm9yZGVyLWNvbG9yLCAxMCUpO1xyXG4kaW5wdXQtZm9jdXMtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWZvY3VzLXdpZHRoOiAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoO1xyXG4kaW5wdXQtZm9jdXMtYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbiRpbnB1dC1wbGFjZWhvbGRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kaW5wdXQtcGxhaW50ZXh0LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuXHJcbiRpbnB1dC1oZWlnaHQtYm9yZGVyOiAkaW5wdXQtYm9yZGVyLXdpZHRoICogMjtcclxuXHJcbiRpbnB1dC1oZWlnaHQtaW5uZXI6IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn1cclxuKTtcclxuJGlucHV0LWhlaWdodC1pbm5lci1oYWxmOiBjYWxjKFxyXG4gICN7JGlucHV0LWxpbmUtaGVpZ2h0ICogMC41ZW19ICsgI3skaW5wdXQtcGFkZGluZy15fVxyXG4pO1xyXG4kaW5wdXQtaGVpZ2h0LWlubmVyLXF1YXJ0ZXI6IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQgKiAwLjI1ZW19ICsgI3ttYXRoLmRpdigkaW5wdXQtcGFkZGluZy15LCAyKX1cclxuKTtcclxuXHJcbiRpbnB1dC1oZWlnaHQ6IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQgKiAxZW19ICsgI3skaW5wdXQtcGFkZGluZy15ICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfVxyXG4pO1xyXG4kaW5wdXQtaGVpZ2h0LXNtOiBjYWxjKFxyXG4gICN7JGlucHV0LWxpbmUtaGVpZ2h0LXNtICogMWVtfSArICN7JGlucHV0LWJ0bi1wYWRkaW5nLXktc20gKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9XHJcbik7XHJcbiRpbnB1dC1oZWlnaHQtbGc6IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQtbGcgKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1sZyAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn1cclxuKTtcclxuXHJcbiRpbnB1dC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4kZm9ybS10ZXh0LW1hcmdpbi10b3A6IDAuMjVyZW07XHJcblxyXG4kZm9ybS1jaGVjay1pbnB1dC1ndXR0ZXI6IDEuMjVyZW07XHJcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi15OiAwLjNyZW07XHJcbiRmb3JtLWNoZWNrLWlucHV0LW1hcmdpbi14OiAwLjI1cmVtO1xyXG5cclxuJGZvcm0tY2hlY2staW5saW5lLW1hcmdpbi14OiAwLjc1cmVtO1xyXG4kZm9ybS1jaGVjay1pbmxpbmUtaW5wdXQtbWFyZ2luLXg6IDAuMzEyNXJlbTtcclxuXHJcbiRmb3JtLWdyaWQtZ3V0dGVyLXdpZHRoOiAxMHB4O1xyXG4kZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuJGlucHV0LWdyb3VwLWFkZG9uLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1iZzogJGdyYXktMjAwO1xyXG4kaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1mb3Jtcy10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LFxyXG4gIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1ndXR0ZXI6IDAuNXJlbTtcclxuJGN1c3RvbS1jb250cm9sLXNwYWNlci14OiAxcmVtO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplOiAxcmVtO1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnOiAkaW5wdXQtYmc7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWJnLXNpemU6IDUwJSA1MCU7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm94LXNoYWRvdzogJGlucHV0LWJveC1zaGFkb3c7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAkZ3JheS01MDA7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnO1xyXG4kY3VzdG9tLWNvbnRyb2wtbGFiZWwtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZzogJHByaW1hcnk7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1kaXNhYmxlZC1iZzogcmdiYShcclxuICB0aGVtZS1jb2xvcihcInByaW1hcnlcIiksXHJcbiAgMC41XHJcbik7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3gtc2hhZG93OiBub25lO1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtYmc7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1mb2N1cy1ib3gtc2hhZG93O1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWZvY3VzLWJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc6IGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSk7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYWN0aXZlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYmc7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScgZD0nTTYuNTY0Ljc1bC0zLjU5IDMuNjEyLTEuNTM4LTEuNTVMMCA0LjI2IDIuOTc0IDcuMjUgOCAyLjE5M3onLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG5cclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcjtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaWNvbi1pbmRldGVybWluYXRlOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNCclM2UlM2NwYXRoIHN0cm9rZT0nI3skY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWNvbG9yfScgZD0nTTAgMmg0Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxyXG4gIFwiI1wiLFxyXG4gIFwiJTIzXCJcclxuKTtcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1ib3gtc2hhZG93OiBub25lO1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJvcmRlci1jb2xvcjogJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1iZztcclxuXHJcbiRjdXN0b20tcmFkaW8taW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItaWNvbi1jaGVja2VkOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nLTQgLTQgOCA4JyUzZSUzY2NpcmNsZSByPSczJyBmaWxsPScjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1jb2xvcn0nLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG5cclxuJGN1c3RvbS1zd2l0Y2gtd2lkdGg6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSAqIDEuNzU7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1ib3JkZXItcmFkaXVzOiBtYXRoLmRpdigkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemUsIDIpO1xyXG4kY3VzdG9tLXN3aXRjaC1pbmRpY2F0b3Itc2l6ZTogY2FsYyhcclxuICAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZX0gLSAjeyRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoICpcclxuICAgIDR9XHJcbik7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXk6ICRpbnB1dC1wYWRkaW5nLXk7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteDogJGlucHV0LXBhZGRpbmcteDtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1mYW1pbHk6ICRpbnB1dC1mb250LWZhbWlseTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplO1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nOiAxcmVtOyAvLyBFeHRyYSBwYWRkaW5nIHRvIGFjY291bnQgZm9yIHRoZSBwcmVzZW5jZSBvZiB0aGUgYmFja2dyb3VuZC1pbWFnZSBiYXNlZCBpbmRpY2F0b3JcclxuJGN1c3RvbS1zZWxlY3QtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJGN1c3RvbS1zZWxlY3QtYmc6ICRpbnB1dC1iZztcclxuJGN1c3RvbS1zZWxlY3QtZGlzYWJsZWQtYmc6ICRncmF5LTIwMDtcclxuJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTogOHB4IDEwcHg7IC8vIEluIHBpeGVscyBiZWNhdXNlIGltYWdlIGRpbWVuc2lvbnNcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yOiAkZ3JheS04MDA7XHJcbiRjdXN0b20tc2VsZWN0LWluZGljYXRvcjogc3RyLXJlcGxhY2UoXHJcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnJTNlJTNjcGF0aCBmaWxsPScjeyRjdXN0b20tc2VsZWN0LWluZGljYXRvci1jb2xvcn0nIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kY3VzdG9tLXNlbGVjdC1iYWNrZ3JvdW5kOiAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3Igbm8tcmVwZWF0IHJpZ2h0XHJcbiAgJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14IGNlbnRlciAvICRjdXN0b20tc2VsZWN0LWJnLXNpemU7IC8vIFVzZWQgc28gd2UgY2FuIGhhdmUgbXVsdGlwbGUgYmFja2dyb3VuZCBlbGVtZW50cyAoZS5nLiwgYXJyb3cgYW5kIGZlZWRiYWNrIGljb24pXHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBhZGRpbmctcmlnaHQ6IGNhbGMoXHJcbiAgKDFlbSArICN7MiAqICRjdXN0b20tc2VsZWN0LXBhZGRpbmcteX0pICogMyAvIDQgKyAjeyRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArXHJcbiAgICAkY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItcGFkZGluZ31cclxuKTtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1wb3NpdGlvbjogY2VudGVyIHJpZ2h0XHJcbiAgKCRjdXN0b20tc2VsZWN0LXBhZGRpbmcteCArICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nKTtcclxuJGN1c3RvbS1zZWxlY3QtZmVlZGJhY2staWNvbi1zaXplOiAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGZcclxuICAkaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1jb2xvcjtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tc2VsZWN0LWJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpO1xyXG5cclxuJGN1c3RvbS1zZWxlY3QtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoO1xyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkY3VzdG9tLXNlbGVjdC1mb2N1cy13aWR0aFxyXG4gICRpbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktc206ICRpbnB1dC1wYWRkaW5nLXktc207XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1zbTogJGlucHV0LXBhZGRpbmcteC1zbTtcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLXNtOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtc206ICRpbnB1dC1oZWlnaHQtc207XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXktbGc6ICRpbnB1dC1wYWRkaW5nLXktbGc7XHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteC1sZzogJGlucHV0LXBhZGRpbmcteC1sZztcclxuJGN1c3RvbS1zZWxlY3QtZm9udC1zaXplLWxnOiAkaW5wdXQtZm9udC1zaXplLWxnO1xyXG4kY3VzdG9tLXNlbGVjdC1oZWlnaHQtbGc6ICRpbnB1dC1oZWlnaHQtbGc7XHJcblxyXG4kY3VzdG9tLXJhbmdlLXRyYWNrLXdpZHRoOiAxMDAlO1xyXG4kY3VzdG9tLXJhbmdlLXRyYWNrLWhlaWdodDogMC41cmVtO1xyXG4kY3VzdG9tLXJhbmdlLXRyYWNrLWN1cnNvcjogcG9pbnRlcjtcclxuJGN1c3RvbS1yYW5nZS10cmFjay1iZzogJGdyYXktMzAwO1xyXG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm94LXNoYWRvdzogaW5zZXQgMCAwLjI1cmVtIDAuMjVyZW0gcmdiYSgkYmxhY2ssIDAuMSk7XHJcblxyXG4kY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoOiAxcmVtO1xyXG4kY3VzdG9tLXJhbmdlLXRodW1iLWhlaWdodDogJGN1c3RvbS1yYW5nZS10aHVtYi13aWR0aDtcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyOiAwO1xyXG4kY3VzdG9tLXJhbmdlLXRodW1iLWJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm94LXNoYWRvdzogMCAwLjFyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4xKTtcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAxcHggJGJvZHktYmcsXHJcbiAgJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItZm9jdXMtYm94LXNoYWRvdy13aWR0aDogJGlucHV0LWZvY3VzLXdpZHRoOyAvLyBGb3IgZm9jdXMgYm94IHNoYWRvdyBpc3N1ZSBpbiBJRS9FZGdlXHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItYWN0aXZlLWJnOiBsaWdodGVuKCRjb21wb25lbnQtYWN0aXZlLWJnLCAzNSUpO1xyXG4kY3VzdG9tLXJhbmdlLXRodW1iLWRpc2FibGVkLWJnOiAkZ3JheS01MDA7XHJcblxyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xyXG4kY3VzdG9tLWZpbGUtaGVpZ2h0LWlubmVyOiAkaW5wdXQtaGVpZ2h0LWlubmVyO1xyXG4kY3VzdG9tLWZpbGUtZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLWZpbGUtZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XHJcbiRjdXN0b20tZmlsZS1kaXNhYmxlZC1iZzogJGlucHV0LWRpc2FibGVkLWJnO1xyXG5cclxuJGN1c3RvbS1maWxlLXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1maWxlLXBhZGRpbmcteDogJGlucHV0LXBhZGRpbmcteDtcclxuJGN1c3RvbS1maWxlLWxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQ7XHJcbiRjdXN0b20tZmlsZS1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5O1xyXG4kY3VzdG9tLWZpbGUtZm9udC13ZWlnaHQ6ICRpbnB1dC1mb250LXdlaWdodDtcclxuJGN1c3RvbS1maWxlLWNvbG9yOiAkaW5wdXQtY29sb3I7XHJcbiRjdXN0b20tZmlsZS1iZzogJGlucHV0LWJnO1xyXG4kY3VzdG9tLWZpbGUtYm9yZGVyLXdpZHRoOiAkaW5wdXQtYm9yZGVyLXdpZHRoO1xyXG4kY3VzdG9tLWZpbGUtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLWZpbGUtYm9yZGVyLXJhZGl1czogJGlucHV0LWJvcmRlci1yYWRpdXM7XHJcbiRjdXN0b20tZmlsZS1ib3gtc2hhZG93OiAkaW5wdXQtYm94LXNoYWRvdztcclxuJGN1c3RvbS1maWxlLWJ1dHRvbi1jb2xvcjogJGN1c3RvbS1maWxlLWNvbG9yO1xyXG4kY3VzdG9tLWZpbGUtYnV0dG9uLWJnOiAkaW5wdXQtZ3JvdXAtYWRkb24tYmc7XHJcbiRjdXN0b20tZmlsZS10ZXh0OiAoXHJcbiAgZW46IFwiQnJvd3NlXCIsXHJcbik7XHJcblxyXG4vLyBGb3JtIHZhbGlkYXRpb25cclxuXHJcbiRmb3JtLWZlZWRiYWNrLW1hcmdpbi10b3A6ICRmb3JtLXRleHQtbWFyZ2luLXRvcDtcclxuJGZvcm0tZmVlZGJhY2stZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplO1xyXG4kZm9ybS1mZWVkYmFjay12YWxpZC1jb2xvcjogdGhlbWUtY29sb3IoXCJzdWNjZXNzXCIpO1xyXG4kZm9ybS1mZWVkYmFjay1pbnZhbGlkLWNvbG9yOiB0aGVtZS1jb2xvcihcImRhbmdlclwiKTtcclxuXHJcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQtY29sb3I6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yO1xyXG4kZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcn0nIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3I6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I7XHJcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZDogc3RyLXJlcGxhY2UoXHJcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgdmlld0JveD0nLTIgLTIgNyA3JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcn0nIGQ9J00wIDBsMyAzbTAtM0wwIDMnLyUzZSUzY2NpcmNsZSByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN5PSczJyByPScuNScvJTNlJTNjY2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLyUzZSUzYy9zdmclM0VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG5cclxuJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXM6ICgpO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIFwidmFsaWRcIjogKFxyXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yLFxyXG4gICAgICBcImljb25cIjogJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZCxcclxuICAgICksXHJcbiAgICBcImludmFsaWRcIjogKFxyXG4gICAgICBcImNvbG9yXCI6ICRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3IsXHJcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQsXHJcbiAgICApLFxyXG4gICksXHJcbiAgJGZvcm0tdmFsaWRhdGlvbi1zdGF0ZXNcclxuKTtcclxuXHJcbi8vIFotaW5kZXggbWFzdGVyIGxpc3RcclxuLy9cclxuLy8gV2FybmluZzogQXZvaWQgY3VzdG9taXppbmcgdGhlc2UgdmFsdWVzLiBUaGV5J3JlIHVzZWQgZm9yIGEgYmlyZCdzIGV5ZSB2aWV3XHJcbi8vIG9mIGNvbXBvbmVudHMgZGVwZW5kZW50IG9uIHRoZSB6LWF4aXMgYW5kIGFyZSBkZXNpZ25lZCB0byBhbGwgd29yayB0b2dldGhlci5cclxuXHJcbiR6aW5kZXgtZHJvcGRvd246IDEwMDA7XHJcbiR6aW5kZXgtc3RpY2t5OiAxMDIwO1xyXG4kemluZGV4LWZpeGVkOiAxMDMwO1xyXG4kemluZGV4LW1vZGFsLWJhY2tkcm9wOiAxMDQwO1xyXG4kemluZGV4LW1vZGFsOiAxMDUwO1xyXG4kemluZGV4LXBvcG92ZXI6IDEwNjA7XHJcbiR6aW5kZXgtdG9vbHRpcDogMTA3MDtcclxuXHJcbi8vIE5hdnNcclxuXHJcbiRuYXYtbGluay1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJG5hdi1saW5rLXBhZGRpbmcteDogMXJlbTtcclxuJG5hdi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kbmF2LXRhYnMtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRuYXYtdGFicy1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRuYXYtdGFicy1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG5hdi10YWJzLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDAgJGdyYXktMjAwICRuYXYtdGFicy1ib3JkZXItY29sb3I7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1jb2xvcjogJGdyYXktNzAwO1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYmc6ICRjYXJkLWJnO1xyXG4kbmF2LXRhYnMtbGluay1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkZ3JheS00MDAgJGdyYXktNDAwICRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZztcclxuXHJcbiRuYXYtcGlsbHMtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kbmF2LXBpbGxzLWxpbmstYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuXHJcbiRuYXYtZGl2aWRlci1jb2xvcjogJGdyYXktMjAwO1xyXG4kbmF2LWRpdmlkZXItbWFyZ2luLXk6IG1hdGguZGl2KCRzcGFjZXIsIDIpO1xyXG5cclxuLy8gTmF2YmFyXHJcblxyXG4kbmF2YmFyLXBhZGRpbmcteTogbWF0aC5kaXYoJHNwYWNlciwgMik7XHJcbiRuYXZiYXItcGFkZGluZy14OiAkc3BhY2VyO1xyXG5cclxuJG5hdmJhci1uYXYtbGluay1wYWRkaW5nLXg6IDAuNXJlbTtcclxuXHJcbiRuYXZiYXItYnJhbmQtZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4vLyBDb21wdXRlIHRoZSBuYXZiYXItYnJhbmQgcGFkZGluZy15IHNvIHRoZSBuYXZiYXItYnJhbmQgd2lsbCBoYXZlIHRoZSBzYW1lIGhlaWdodCBhcyBuYXZiYXItdGV4dCBhbmQgbmF2LWxpbmtcclxuJG5hdi1saW5rLWhlaWdodDogJGZvbnQtc2l6ZS1iYXNlICogJGxpbmUtaGVpZ2h0LWJhc2UgKyAkbmF2LWxpbmstcGFkZGluZy15ICogMjtcclxuJG5hdmJhci1icmFuZC1oZWlnaHQ6ICRuYXZiYXItYnJhbmQtZm9udC1zaXplICogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcbiRuYXZiYXItYnJhbmQtcGFkZGluZy15OiBtYXRoLmRpdigoJG5hdi1saW5rLWhlaWdodCAtICRuYXZiYXItYnJhbmQtaGVpZ2h0KSwgMik7XHJcblxyXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy15OiAwLjI1cmVtO1xyXG4kbmF2YmFyLXRvZ2dsZXItcGFkZGluZy14OiAwLjc1cmVtO1xyXG4kbmF2YmFyLXRvZ2dsZXItZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xyXG4kbmF2YmFyLXRvZ2dsZXItYm9yZGVyLXJhZGl1czogJGJ0bi1ib3JkZXItcmFkaXVzO1xyXG5cclxuJG5hdmJhci1kYXJrLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuJG5hdmJhci1kYXJrLWhvdmVyLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC43NSk7XHJcbiRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I6ICR3aGl0ZTtcclxuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4yNSk7XHJcbiRuYXZiYXItZGFyay10b2dnbGVyLWljb24tYmc6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2Nzdmcgdmlld0JveD0nMCAwIDMwIDMwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JG5hdmJhci1kYXJrLWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kbmF2YmFyLWRhcmstdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJHdoaXRlLCAwLjEpO1xyXG5cclxuJG5hdmJhci1saWdodC1jb2xvcjogcmdiYSgkYmxhY2ssIDAuNSk7XHJcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjcpO1xyXG4kbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjogcmdiYSgkYmxhY2ssIDAuOSk7XHJcbiRuYXZiYXItbGlnaHQtZGlzYWJsZWQtY29sb3I6IHJnYmEoJGJsYWNrLCAwLjMpO1xyXG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItaWNvbi1iZzogc3RyLXJlcGxhY2UoXHJcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWxpZ2h0LWNvbG9yfScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgN2gyMk00IDE1aDIyTTQgMjNoMjInLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kbmF2YmFyLWxpZ2h0LXRvZ2dsZXItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcclxuXHJcbiRuYXZiYXItbGlnaHQtYnJhbmQtY29sb3I6ICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yO1xyXG4kbmF2YmFyLWxpZ2h0LWJyYW5kLWhvdmVyLWNvbG9yOiAkbmF2YmFyLWxpZ2h0LWFjdGl2ZS1jb2xvcjtcclxuJG5hdmJhci1kYXJrLWJyYW5kLWNvbG9yOiAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yO1xyXG4kbmF2YmFyLWRhcmstYnJhbmQtaG92ZXItY29sb3I6ICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I7XHJcblxyXG4vLyBEcm9wZG93bnNcclxuLy9cclxuLy8gRHJvcGRvd24gbWVudSBjb250YWluZXIgYW5kIGNvbnRlbnRzLlxyXG5cclxuJGRyb3Bkb3duLW1pbi13aWR0aDogMTByZW07XHJcbiRkcm9wZG93bi1wYWRkaW5nLXk6IDAuNXJlbTtcclxuJGRyb3Bkb3duLXNwYWNlcjogMC4xMjVyZW07XHJcbiRkcm9wZG93bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGRyb3Bkb3duLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJGRyb3Bkb3duLWJnOiAkd2hpdGU7XHJcbiRkcm9wZG93bi1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjE1KTtcclxuJGRyb3Bkb3duLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAwO1xyXG4kZHJvcGRvd24taW5uZXItYm9yZGVyLXJhZGl1czogY2FsYyhcclxuICAjeyRkcm9wZG93bi1ib3JkZXItcmFkaXVzfSAtICN7JGRyb3Bkb3duLWJvcmRlci13aWR0aH1cclxuKTtcclxuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICRncmF5LTIwMDtcclxuJGRyb3Bkb3duLWRpdmlkZXItbWFyZ2luLXk6ICRuYXYtZGl2aWRlci1tYXJnaW4teTtcclxuJGRyb3Bkb3duLWJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRkcm9wZG93bi1saW5rLWNvbG9yOiAkZ3JheS05MDA7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiBkYXJrZW4oJGdyYXktOTAwLCA1JSk7XHJcbiRkcm9wZG93bi1saW5rLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6IGRhcmtlbigkZ3JheS05MDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstYWN0aXZlLWJnOiAkZ3JheS0xMDA7XHJcblxyXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGRyb3Bkb3duLWl0ZW0tcGFkZGluZy15OiAwLjM1cmVtO1xyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXg6IDEuNXJlbTtcclxuXHJcbiRkcm9wZG93bi1oZWFkZXItY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIFBhZ2luYXRpb25cclxuXHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogMC41cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LXNtOiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1sZzogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy14LWxnOiAxLjVyZW07XHJcbiRwYWdpbmF0aW9uLWxpbmUtaGVpZ2h0OiAxLjI1O1xyXG5cclxuJHBhZ2luYXRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuJHBhZ2luYXRpb24tYmc6ICR3aGl0ZTtcclxuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWZvY3VzLWJveC1zaGFkb3c6ICRpbnB1dC1idG4tZm9jdXMtYm94LXNoYWRvdztcclxuJHBhZ2luYXRpb24tZm9jdXMtb3V0bGluZTogMDtcclxuXHJcbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcclxuJHBhZ2luYXRpb24taG92ZXItYmc6ICRncmF5LTIwMDtcclxuJHBhZ2luYXRpb24taG92ZXItYm9yZGVyLWNvbG9yOiAkZ3JheS00MDA7XHJcblxyXG4kcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG4kcGFnaW5hdGlvbi1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtYmc7XHJcblxyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogJGdyYXktNDAwO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuXHJcbi8vIEp1bWJvdHJvblxyXG5cclxuJGp1bWJvdHJvbi1wYWRkaW5nOiAycmVtO1xyXG4kanVtYm90cm9uLWNvbG9yOiBudWxsO1xyXG4kanVtYm90cm9uLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuJGNhcmQtc3BhY2VyLXk6IDAuNzVyZW07XHJcbiRjYXJkLXNwYWNlci14OiAxLjI1cmVtO1xyXG4kY2FyZC1ib3JkZXItd2lkdGg6IDA7XHJcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY2FyZC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuJGNhcmQtaW5uZXItYm9yZGVyLXJhZGl1czogY2FsYygjeyRjYXJkLWJvcmRlci1yYWRpdXN9IC0gI3skY2FyZC1ib3JkZXItd2lkdGh9KTtcclxuJGNhcmQtY2FwLWJnOiAkZ3JheS0zMDA7XHJcbiRjYXJkLWNhcC1jb2xvcjogbnVsbDtcclxuJGNhcmQtY29sb3I6IG51bGw7XHJcbiRjYXJkLWJnOiAkd2hpdGU7XHJcblxyXG4kY2FyZC10aXRsZS1kZXNjOiAkZ3JheS02MDA7XHJcblxyXG4kY2FyZC1pbWctb3ZlcmxheS1wYWRkaW5nOiAxLjI1cmVtO1xyXG5cclxuJGNhcmQtZ3JvdXAtbWFyZ2luOm1hdGguZGl2KCRncmlkLWd1dHRlci13aWR0aCwgMik7XHJcbiRjYXJkLWRlY2stbWFyZ2luOiAkY2FyZC1ncm91cC1tYXJnaW47XHJcblxyXG4kY2FyZC1jb2x1bW5zLWNvdW50OiAzO1xyXG4kY2FyZC1jb2x1bW5zLWdhcDogMS4yNXJlbTtcclxuJGNhcmQtY29sdW1ucy1tYXJnaW46ICRncmlkLWd1dHRlci13aWR0aDtcclxuXHJcbi8vIFRvb2x0aXBzXHJcblxyXG4kdG9vbHRpcC1mb250LXNpemU6ICRmb250LXNpemUtc207XHJcbiR0b29sdGlwLW1heC13aWR0aDogMjAwcHg7XHJcbiR0b29sdGlwLWNvbG9yOiAkd2hpdGU7XHJcbiR0b29sdGlwLWJnOiAkYmxhY2s7XHJcbiR0b29sdGlwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kdG9vbHRpcC1vcGFjaXR5OiAwLjk7XHJcbiR0b29sdGlwLXBhZGRpbmcteTogMC40cmVtO1xyXG4kdG9vbHRpcC1wYWRkaW5nLXg6IDAuN3JlbTtcclxuJHRvb2x0aXAtbWFyZ2luOiAwO1xyXG5cclxuJHRvb2x0aXAtYXJyb3ctd2lkdGg6IDAuOHJlbTtcclxuJHRvb2x0aXAtYXJyb3ctaGVpZ2h0OiAwLjRyZW07XHJcbiR0b29sdGlwLWFycm93LWNvbG9yOiAkdG9vbHRpcC1iZztcclxuXHJcbi8vIEZvcm0gdG9vbHRpcHMgbXVzdCBjb21lIGFmdGVyIHJlZ3VsYXIgdG9vbHRpcHNcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXk6ICR0b29sdGlwLXBhZGRpbmcteTtcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1wYWRkaW5nLXg6ICR0b29sdGlwLXBhZGRpbmcteDtcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1mb250LXNpemU6ICR0b29sdGlwLWZvbnQtc2l6ZTtcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcbiRmb3JtLWZlZWRiYWNrLXRvb2x0aXAtb3BhY2l0eTogJHRvb2x0aXAtb3BhY2l0eTtcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1ib3JkZXItcmFkaXVzOiAkdG9vbHRpcC1ib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gUG9wb3ZlcnNcclxuXHJcbiRwb3BvdmVyLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuJHBvcG92ZXItYmc6ICR3aGl0ZTtcclxuJHBvcG92ZXItbWF4LXdpZHRoOiAyNzZweDtcclxuJHBvcG92ZXItYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTIwMDtcclxuJHBvcG92ZXItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcbiRwb3BvdmVyLWJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgkYmxhY2ssIDAuMik7XHJcblxyXG4kcG9wb3Zlci1oZWFkZXItYmc6IGRhcmtlbigkcG9wb3Zlci1iZywgMyUpO1xyXG4kcG9wb3Zlci1oZWFkZXItY29sb3I6ICRoZWFkaW5ncy1jb2xvcjtcclxuJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteTogMC41cmVtO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy14OiAwLjc1cmVtO1xyXG5cclxuJHBvcG92ZXItYm9keS1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy15OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy15O1xyXG4kcG9wb3Zlci1ib2R5LXBhZGRpbmcteDogJHBvcG92ZXItaGVhZGVyLXBhZGRpbmcteDtcclxuXHJcbiRwb3BvdmVyLWFycm93LXdpZHRoOiAxcmVtO1xyXG4kcG9wb3Zlci1hcnJvdy1oZWlnaHQ6IDAuNXJlbTtcclxuJHBvcG92ZXItYXJyb3ctY29sb3I6ICRwb3BvdmVyLWJnO1xyXG5cclxuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6IGZhZGUtaW4oJHBvcG92ZXItYm9yZGVyLWNvbG9yLCAwLjA1KTtcclxuXHJcbi8vIFRvYXN0c1xyXG5cclxuJHRvYXN0LW1heC13aWR0aDogMzUwcHg7XHJcbiR0b2FzdC1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiR0b2FzdC1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiR0b2FzdC1mb250LXNpemU6IDAuODc1cmVtO1xyXG4kdG9hc3QtY29sb3I6IG51bGw7XHJcbiR0b2FzdC1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC44NSk7XHJcbiR0b2FzdC1ib3JkZXItd2lkdGg6IDFweDtcclxuJHRvYXN0LWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4kdG9hc3QtYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuJHRvYXN0LWJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoJGJsYWNrLCAwLjEpO1xyXG5cclxuJHRvYXN0LWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kdG9hc3QtaGVhZGVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjg1KTtcclxuJHRvYXN0LWhlYWRlci1ib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcblxyXG4vLyBCYWRnZXNcclxuXHJcbiRiYWRnZS1mb250LXNpemU6IDc1JTtcclxuJGJhZGdlLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtbWVkaXVtO1xyXG4kYmFkZ2UtcGFkZGluZy15OiAwLjI1ZW07XHJcbiRiYWRnZS1wYWRkaW5nLXg6IDAuNGVtO1xyXG4kYmFkZ2UtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4kYmFkZ2UtdHJhbnNpdGlvbjogJGJ0bi10cmFuc2l0aW9uO1xyXG4kYmFkZ2UtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcblxyXG4kYmFkZ2UtcGlsbC1wYWRkaW5nLXg6IDAuNmVtO1xyXG4vLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXHJcbi8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cclxuJGJhZGdlLXBpbGwtYm9yZGVyLXJhZGl1czogMTByZW07XHJcblxyXG4vLyBNb2RhbHNcclxuXHJcbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogMXJlbTtcclxuXHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luOiAwLjVyZW07XHJcbiRtb2RhbC1kaWFsb2ctbWFyZ2luLXktc20tdXA6IDEuNzVyZW07XHJcblxyXG4kbW9kYWwtdGl0bGUtbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodC1iYXNlO1xyXG5cclxuJG1vZGFsLWNvbnRlbnQtY29sb3I6IG51bGw7XHJcbiRtb2RhbC1jb250ZW50LWJnOiAkd2hpdGU7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXhzOiAwIDAuMjVyZW0gMC41cmVtIHJnYmEoJGJsYWNrLCAwLjUpO1xyXG4kbW9kYWwtY29udGVudC1ib3gtc2hhZG93LXNtLXVwOiAwIDAuNXJlbSAxcmVtIHJnYmEoJGJsYWNrLCAwLjUpO1xyXG5cclxuJG1vZGFsLWJhY2tkcm9wLWJnOiAkYmxhY2s7XHJcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAwLjU7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG4kbW9kYWwtZm9vdGVyLWJvcmRlci1jb2xvcjogJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I7XHJcbiRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoOiAkbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLXdpZHRoOiAkbW9kYWwtaGVhZGVyLWJvcmRlci13aWR0aDtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXk6IDFyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZy14OiAxcmVtO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmc6ICRtb2RhbC1oZWFkZXItcGFkZGluZy15ICRtb2RhbC1oZWFkZXItcGFkZGluZy14OyAvLyBLZWVwIHRoaXMgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XHJcblxyXG4kbW9kYWwteGw6IDExNDBweDtcclxuJG1vZGFsLWxnOiA4MDBweDtcclxuJG1vZGFsLW1kOiA1MDBweDtcclxuJG1vZGFsLXNtOiAzMDBweDtcclxuXHJcbiRtb2RhbC1mYWRlLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MHB4KTtcclxuJG1vZGFsLXNob3ctdHJhbnNmb3JtOiBub25lO1xyXG4kbW9kYWwtdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XHJcblxyXG4vLyBBbGVydHNcclxuLy9cclxuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXHJcblxyXG4kYWxlcnQtcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kYWxlcnQtcGFkZGluZy14OiAxLjI1cmVtO1xyXG4kYWxlcnQtbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuJGFsZXJ0LWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kYWxlcnQtbGluay1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XHJcbiRhbGVydC1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4kYWxlcnQtYmctbGV2ZWw6IC0xMDtcclxuJGFsZXJ0LWJvcmRlci1sZXZlbDogLTk7XHJcbiRhbGVydC1jb2xvci1sZXZlbDogNjtcclxuXHJcbi8vIFByb2dyZXNzIGJhcnNcclxuXHJcbiRwcm9ncmVzcy1oZWlnaHQ6IDAuNjI1cmVtO1xyXG4kcHJvZ3Jlc3MtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAwLjc1O1xyXG4kcHJvZ3Jlc3MtYmc6ICRncmF5LTMwMDtcclxuJHByb2dyZXNzLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kcHJvZ3Jlc3MtYm94LXNoYWRvdzogaW5zZXQgMCAwLjFyZW0gMC4xcmVtIHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4kcHJvZ3Jlc3MtYmFyLWNvbG9yOiAkd2hpdGU7XHJcbiRwcm9ncmVzcy1iYXItYmc6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcclxuJHByb2dyZXNzLWJhci1hbmltYXRpb24tdGltaW5nOiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiRwcm9ncmVzcy1iYXItdHJhbnNpdGlvbjogd2lkdGggMC42cyBlYXNlO1xyXG5cclxuLy8gTGlzdCBncm91cFxyXG5cclxuJGxpc3QtZ3JvdXAtY29sb3I6IG51bGw7XHJcbiRsaXN0LWdyb3VwLWJnOiAkd2hpdGU7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTI1KTtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kbGlzdC1ncm91cC1pdGVtLXBhZGRpbmcteDogMS4yNXJlbTtcclxuXHJcbiRsaXN0LWdyb3VwLWhvdmVyLWJnOiAkZ3JheS0xMDA7XHJcbiRsaXN0LWdyb3VwLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRsaXN0LWdyb3VwLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1iZztcclxuXHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRsaXN0LWdyb3VwLWRpc2FibGVkLWJnOiAkbGlzdC1ncm91cC1iZztcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjogJGdyYXktNzAwO1xyXG4kbGlzdC1ncm91cC1hY3Rpb24taG92ZXItY29sb3I6ICRsaXN0LWdyb3VwLWFjdGlvbi1jb2xvcjtcclxuXHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kbGlzdC1ncm91cC1hY3Rpb24tYWN0aXZlLWJnOiAkZ3JheS0yMDA7XHJcblxyXG4vLyBJbWFnZSB0aHVtYm5haWxzXHJcblxyXG4kdGh1bWJuYWlsLXBhZGRpbmc6IDAuMjVyZW07XHJcbiR0aHVtYm5haWwtYmc6ICRib2R5LWJnO1xyXG4kdGh1bWJuYWlsLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHRodW1ibmFpbC1ib3JkZXItY29sb3I6ICRncmF5LTMwMDtcclxuJHRodW1ibmFpbC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJHRodW1ibmFpbC1ib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgkYmxhY2ssIDAuMDc1KTtcclxuXHJcbi8vIEZpZ3VyZXNcclxuXHJcbiRmaWd1cmUtY2FwdGlvbi1mb250LXNpemU6IDkwJTtcclxuJGZpZ3VyZS1jYXB0aW9uLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4vLyBCcmVhZGNydW1ic1xyXG5cclxuJGJyZWFkY3J1bWItcGFkZGluZy15OiAwLjc1cmVtO1xyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXg6IDFyZW07XHJcbiRicmVhZGNydW1iLWl0ZW0tcGFkZGluZzogMC41cmVtO1xyXG5cclxuJGJyZWFkY3J1bWItbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiRicmVhZGNydW1iLWJnOiAkZ3JheS0yMDA7XHJcbiRicmVhZGNydW1iLWRpdmlkZXItY29sb3I6ICRncmF5LTYwMDtcclxuJGJyZWFkY3J1bWItYWN0aXZlLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRicmVhZGNydW1iLWRpdmlkZXI6IHF1b3RlKFwiL1wiKTtcclxuXHJcbiRicmVhZGNydW1iLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuLy8gQ2Fyb3VzZWxcclxuXHJcbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAkd2hpdGU7XHJcbiRjYXJvdXNlbC1jb250cm9sLXdpZHRoOiAxNSU7XHJcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6IDAuNTtcclxuJGNhcm91c2VsLWNvbnRyb2wtaG92ZXItb3BhY2l0eTogMC45O1xyXG4kY2Fyb3VzZWwtY29udHJvbC10cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2U7XHJcblxyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXdpZHRoOiAzMHB4O1xyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhlaWdodDogM3B4O1xyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWhpdC1hcmVhLWhlaWdodDogMTBweDtcclxuJGNhcm91c2VsLWluZGljYXRvci1zcGFjZXI6IDNweDtcclxuJGNhcm91c2VsLWluZGljYXRvci1hY3RpdmUtYmc6ICR3aGl0ZTtcclxuJGNhcm91c2VsLWluZGljYXRvci10cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZTtcclxuXHJcbiRjYXJvdXNlbC1jYXB0aW9uLXdpZHRoOiA3MCU7XHJcbiRjYXJvdXNlbC1jYXB0aW9uLWNvbG9yOiAkd2hpdGU7XHJcblxyXG4kY2Fyb3VzZWwtY29udHJvbC1pY29uLXdpZHRoOiAyMHB4O1xyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uLWJnOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxyXG4gIFwiI1wiLFxyXG4gIFwiJTIzXCJcclxuKTtcclxuJGNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uLWJnOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skY2Fyb3VzZWwtY29udHJvbC1jb2xvcn0nIHZpZXdCb3g9JzAgMCA4IDgnJTNlJTNjcGF0aCBkPSdNMi43NSAwbC0xLjUgMS41IDIuNSAyLjUtMi41IDIuNSAxLjUgMS41IDQtNC00LTR6Jy8lM2UlM2Mvc3ZnJTNlXCIpLFxyXG4gIFwiI1wiLFxyXG4gIFwiJTIzXCJcclxuKTtcclxuXHJcbiRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjZzO1xyXG4kY2Fyb3VzZWwtdHJhbnNpdGlvbjogdHJhbnNmb3JtICRjYXJvdXNlbC10cmFuc2l0aW9uLWR1cmF0aW9uIGVhc2UtaW4tb3V0OyAvLyBEZWZpbmUgdHJhbnNmb3JtIHRyYW5zaXRpb24gZmlyc3QgaWYgdXNpbmcgbXVsdGlwbGUgdHJhbnNpdGlvbnMgKGUuZy4sIGB0cmFuc2Zvcm0gMnMgZWFzZSwgb3BhY2l0eSAuNXMgZWFzZS1vdXRgKVxyXG5cclxuLy8gU3Bpbm5lcnNcclxuXHJcbiRzcGlubmVyLXdpZHRoOiAycmVtO1xyXG4kc3Bpbm5lci1oZWlnaHQ6ICRzcGlubmVyLXdpZHRoO1xyXG4kc3Bpbm5lci1ib3JkZXItd2lkdGg6IDAuMjVlbTtcclxuXHJcbiRzcGlubmVyLXdpZHRoLXNtOiAxcmVtO1xyXG4kc3Bpbm5lci1oZWlnaHQtc206ICRzcGlubmVyLXdpZHRoLXNtO1xyXG4kc3Bpbm5lci1ib3JkZXItd2lkdGgtc206IDAuMmVtO1xyXG5cclxuLy8gQ2xvc2VcclxuXHJcbiRjbG9zZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcclxuJGNsb3NlLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcclxuJGNsb3NlLWNvbG9yOiAkYmxhY2s7XHJcbiRjbG9zZS10ZXh0LXNoYWRvdzogMCAxcHggMCAkd2hpdGU7XHJcblxyXG4vLyBDb2RlXHJcblxyXG4kY29kZS1mb250LXNpemU6IDg3LjUlO1xyXG4kY29kZS1jb2xvcjogJHBpbms7XHJcblxyXG4ka2JkLXBhZGRpbmcteTogMC4ycmVtO1xyXG4ka2JkLXBhZGRpbmcteDogMC40cmVtO1xyXG4ka2JkLWZvbnQtc2l6ZTogJGNvZGUtZm9udC1zaXplO1xyXG4ka2JkLWNvbG9yOiAkd2hpdGU7XHJcbiRrYmQtYmc6ICRncmF5LTkwMDtcclxuXHJcbiRwcmUtY29sb3I6ICRncmF5LTkwMDtcclxuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6IDM0MHB4O1xyXG5cclxuLy8gVXRpbGl0aWVzXHJcblxyXG4kZGlzcGxheXM6IG5vbmUsIGlubGluZSwgaW5saW5lLWJsb2NrLCBibG9jaywgdGFibGUsIHRhYmxlLXJvdywgdGFibGUtY2VsbCwgZmxleCxcclxuICBpbmxpbmUtZmxleDtcclxuJG92ZXJmbG93czogYXV0bywgaGlkZGVuO1xyXG4kcG9zaXRpb25zOiBzdGF0aWMsIHJlbGF0aXZlLCBhYnNvbHV0ZSwgZml4ZWQsIHN0aWNreTtcclxuXHJcbi8vIFByaW50aW5nXHJcblxyXG4kcHJpbnQtcGFnZS1zaXplOiBhMztcclxuJHByaW50LWJvZHktbWluLXdpZHRoOiBtYXAtZ2V0KCRncmlkLWJyZWFrcG9pbnRzLCBcImxnXCIpO1xyXG4iLCIvLyBcclxuLy8gUGFnZS10aXRsZVxyXG4vLyBcclxuXHJcbi5wYWdlLXRpdGxlLWJveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG5cclxuICAgIC5icmVhZGNydW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIvLyBcclxuLy8gX2Zvb3Rlci5zY3NzXHJcbi8vIFxyXG5cclxuLmZvb3RlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMik7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiAkZm9vdGVyLWNvbG9yO1xyXG4gICAgbGVmdDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6ICRmb290ZXItaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1iZztcclxufVxyXG4gIFxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEVubGFyZ2UgbWVudVxyXG4udmVydGljYWwtY29sbHBzZWQge1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbGVmdDogJHNpZGViYXItY29sbGFwc2VkLXdpZHRoO1xyXG4gICAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9ICBcclxufSIsIi8vXHJcbi8vIHJpZ2h0LXNpZGViYXIuc2Nzc1xyXG4vL1xyXG5cclxuLnJpZ2h0LWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2FyZC1iZztcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcclxuICAgIHdpZHRoOiAkcmlnaHRiYXItd2lkdGg7XHJcbiAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgICByaWdodDogLSgkcmlnaHRiYXItd2lkdGggKyAxMHB4KTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuXHJcbiAgICAucmlnaHQtYmFyLXRvZ2dsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkZGFyaywgNyUpO1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICBjb2xvcjogJGdyYXktMjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRkYXJrLCAxMCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gUmlnaHRiYXIgb3ZlcmxheVxyXG4ucmlnaHRiYXItb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrLCAwLjU1KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA5OTk4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLW91dDtcclxufVxyXG5cclxuLnJpZ2h0LWJhci1lbmFibGVkIHtcclxuICAgIC5yaWdodC1iYXIge1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0YmFyLW92ZXJsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgIC5yaWdodC1iYXIge1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIC5zbGltc2Nyb2xsLW1lbnUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXHJcbi8vIF9tZW51LnNjc3NcclxuLy9cclxuXHJcbi5tZXRpc21lbnUge1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgbGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5tbS1jb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAgICY6bm90KC5tbS1zaG93KSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi5tbS1zaG93IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW0tY29sbGFwc2luZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcclxuICB9XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1tZW51IHtcclxuICB3aWR0aDogJHNpZGViYXItd2lkdGg7XHJcbiAgei1pbmRleDogMTAwMTtcclxuICBiYWNrZ3JvdW5kOiAkc2lkZWJhci1iZztcclxuICBib3R0b206IDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAkaGVhZGVyLWhlaWdodDtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLXdpZHRoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAkaGVhZGVyLWhlaWdodDtcclxuICB9XHJcbn1cclxuXHJcbiNzaWRlYmFyLW1lbnUge1xyXG4gIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XHJcblxyXG4gIC5tbS1hY3RpdmUge1xyXG4gICAgPiAuaGFzLWFycm93IHtcclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oYXMtYXJyb3cge1xyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXFxGMDE0MFwiO1xyXG4gICAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBEZXNpZ24gSWNvbnNcIjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMS41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuXHJcbiAgICAgICAgaSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBtaW4td2lkdGg6IDEuNzVyZW07XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC4xMjVlbTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQwNjI1cmVtO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taWNvbi1jb2xvcjtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhZGdlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHVsLnN1Yi1tZW51IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDEuNXJlbSAwLjRyZW0gMy41cmVtO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LXN1Yi1pdGVtLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsLnN1Yi1tZW51IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxLjVyZW0gMC40cmVtIDQuNXJlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTMuNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1lbnUtdGl0bGUge1xyXG4gIHBhZGRpbmc6IDEycHggMjBweCAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taWNvbi1jb2xvcjtcclxuICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LXNlbWlib2xkO1xyXG59XHJcbmJvZHkub3ZlcmZsb3ctaCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW0tYWN0aXZlIHtcclxuICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG5cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IGkge1xyXG4gICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBib2R5LnNpZGViYXItZW5hYmxlIHtcclxuICAgIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBFbmxhcmdlIG1lbnVcclxuLnZlcnRpY2FsLWNvbGxwc2VkIHtcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgICB3aWR0aDogJHNpZGViYXItY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubG9nbyB7XHJcbiAgICBzcGFuLmxvZ28tbGcge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ubG9nby1zbSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gU2lkZSBtZW51XHJcbiAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgLy8gc2Nyb2xsXHJcblxyXG4gICAgcGVyZmVjdC1zY3JvbGxiYXIge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICAgIC5wcyB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDU7XHJcblxyXG4gICAgLnNpbXBsZWJhci1tYXNrLFxyXG4gICAgLnNpbXBsZWJhci1jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW1wbGViYXItc2Nyb2xsYmFyIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaW1wbGViYXItb2Zmc2V0IHtcclxuICAgICAgYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gU2lkZWJhciBNZW51XHJcbiAgICAjc2lkZWJhci1tZW51IHtcclxuICAgICAgLm1lbnUtdGl0bGUsXHJcbiAgICAgIC5iYWRnZSxcclxuICAgICAgLmNvbGxhcHNlLmluIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXYuY29sbGFwc2Uge1xyXG4gICAgICAgIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaGFzLWFycm93IHtcclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICA+IHVsIHtcclxuICAgICAgICA+IGxpIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlcixcclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40NXJlbTtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxOTBweCArICN7JHNpZGViYXItY29sbGFwc2VkLXdpZHRofSk7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkc2lkZWJhci1iZywgNCUpO1xyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICBsZWZ0OiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICBib3gtc2hhZG93OiAzcHggNXB4IDEwcHggMCByZ2JhKDU0LCA2MSwgNzEsIDAuMSk7XHJcblxyXG4gICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwIHJnYmEoNTQsIDYxLCA3MSwgMC4xKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogNjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LXN1Yi1pdGVtLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzaWRlYmFyLWJnO1xyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDE5MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzZweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgc3Bhbi5wdWxsLXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaS5hY3RpdmUge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJGdyYXktMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtc2lkZWJhcj1cImRhcmtcIl0ge1xyXG4gIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgIGJhY2tncm91bmQ6ICRzaWRlYmFyLWRhcmstYmc7XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhci1tZW51IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWNvbG9yO1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0taWNvbi1jb2xvcjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bC5zdWItbWVudSB7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtc3ViLWl0ZW0tY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gRW5sYXJnZSBtZW51XHJcbiAgJi52ZXJ0aWNhbC1jb2xscHNlZCB7XHJcbiAgICAvL21pbi1oZWlnaHQ6IDEyMDBweDtcclxuXHJcbiAgICAvLyBTaWRlIG1lbnVcclxuICAgIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgICAgLy8gU2lkZWJhciBNZW51XHJcbiAgICAgICNzaWRlYmFyLW1lbnUge1xyXG4gICAgICAgID4gdWwge1xyXG4gICAgICAgICAgPiBsaSB7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRzaWRlYmFyLWRhcmstYmcsIDIlKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1zdWItaXRlbS1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItZGFyay1iZztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgJi5tbS1hY3RpdmUgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1tLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgPiBpIHtcclxuICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LXRpdGxlIHtcclxuICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1pY29uLWNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuYm9keVtkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0ge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIENvbXBhY3QgU2lkZWJhclxyXG5cclxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1cInNtYWxsXCJdIHtcclxuICAubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGgtc207XHJcbiAgfVxyXG5cclxuICAudmVydGljYWwtbWVudSB7XHJcbiAgICB3aWR0aDogJHNpZGViYXItd2lkdGgtc207XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgLmhhcy1hcnJvdzphZnRlcixcclxuICAgIC5iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLXdpZHRoLXNtO1xyXG4gIH1cclxuXHJcbiAgLmZvb3RlciB7XHJcbiAgICBsZWZ0OiAkc2lkZWJhci13aWR0aC1zbTtcclxuICB9XHJcblxyXG4gICNzaWRlYmFyLW1lbnUge1xyXG4gICAgdWwgbGkge1xyXG4gICAgICAmLm1lbnUtdGl0bGUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHNpZGViYXItZGFyay1iZywgMiUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdWwuc3ViLW1lbnUge1xyXG4gICAgICAgIGxpIGEge1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnZlcnRpY2FsLWNvbGxwc2VkIHtcclxuICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogJHNpZGViYXItY29sbGFwc2VkLXdpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgICAgI3NpZGViYXItbWVudSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgbGVmdDogJHNpZGViYXItY29sbGFwc2VkLXdpZHRoO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gY29sb3JlZCBzaWRlYmFyXHJcblxyXG5ib2R5W2RhdGEtc2lkZWJhcj1cImNvbG9yZWRcIl0ge1xyXG4gIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgLmxvZ28tZGFyayB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ28tbGlnaHQge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tbS1hY3RpdmUge1xyXG4gICAgY29sb3I6ICR3aGl0ZSAhaW1wb3J0YW50O1xyXG5cclxuICAgID4gaSxcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjc2lkZWJhci1tZW51IHtcclxuICAgIHVsIHtcclxuICAgICAgbGkge1xyXG4gICAgICAgICYubWVudS10aXRsZSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuXHJcbiAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICYud2F2ZXMtZWZmZWN0IHtcclxuICAgICAgICAgICAgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgkd2hpdGUsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsLnN1Yi1tZW51IHtcclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnZlcnRpY2FsLWNvbGxwc2VkIHtcclxuICAgIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgICAgI3NpZGViYXItbWVudSB7XHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgJjpob3ZlciA+IGEge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJHByaW1hcnksIDIlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAmLm1tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBcclxuLy8gX2hvcml6b250YWwuc2Nzc1xyXG4vLyBcclxuXHJcbi50b3BuYXYge1xyXG4gIGJhY2tncm91bmQ6ICR0b3BuYXYtYmc7XHJcbiAgcGFkZGluZzogMCBjYWxjKCN7JGdyaWQtZ3V0dGVyLXdpZHRofSAvIDIpO1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG4gIG1hcmdpbi10b3A6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgLnRvcG5hdi1tZW51IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcblxyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDFyZW0gMS4zcmVtO1xyXG4gICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWNvbG9yO1xyXG5cclxuICAgICAgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1jb2xvcjtcclxuXHJcbiAgICAgICYuYWN0aXZlLFxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXYtaXRlbSB7XHJcbiAgICAgIC5uYXYtbGluay5hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgID5hIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHhsKSB7XHJcblxyXG4gIGJvZHlbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdIHtcclxuXHJcbiAgICAuY29udGFpbmVyLWZsdWlkLFxyXG4gICAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICBtYXgtd2lkdGg6IDg1JTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuICAudG9wbmF2IHtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xyXG4gICAgICBtaW4td2lkdGg6IDE4MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93biB7XHJcbiAgICAgICYubWVnYS1kcm9wZG93biB7XHJcblxyXG4gICAgICAgIC8vIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgLm1lZ2EtZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICByaWdodDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cyAkZHJvcGRvd24tYm9yZGVyLXJhZGl1cztcclxuXHJcbiAgICAgICAgLmFycm93LWRvd24ge1xyXG4gICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZykgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRyb3Bkb3duIHtcclxuICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgID4uZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd246aG92ZXI+LmRyb3Bkb3duLW1lbnU+LmRyb3Bkb3duOmhvdmVyPi5kcm9wZG93bi1tZW51IHtcclxuICAgICAgZGlzcGxheTogYmxvY2tcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItdG9nZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXJyb3ctZG93biB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogaW5pdGlhbDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMXB4O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogLjRlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHJpZ2h0OiA1cHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgIHdpZHRoOiAuNGVtO1xyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKGxnKSB7XHJcbiAgLnRvcG5hdi1tZW51IHtcclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgbGkge1xyXG4gICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgIC5kcm9wZG93biB7XHJcbiAgICAgICAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgICAgICByaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuXHJcbiAgLnRvcG5hdiB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzNjBweDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC5uYXZiYXItbmF2IHtcclxuICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93biB7XHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kcm9wZG93bi1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgICYuYWN0aXZlLFxyXG4gICAgICAgICY6YWN0aXZlIHtcclxuICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcblxyXG4gIGJvZHlbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdW2RhdGEtdG9wYmFyPVwibGlnaHRcIl0ge1xyXG4gICAgLnRvcG5hdiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgLm5hdmJhci1uYXYge1xyXG5cclxuICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPi5kcm9wZG93biB7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgID5hIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuOSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3JlZCBUb3BiYXIgXHJcblxyXG5ib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkYXRhLXRvcGJhcj1cImNvbG9yZWRcIl0ge1xyXG4gICNwYWdlLXRvcGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nby1kYXJrIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubG9nby1saWdodCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5hcHAtc2VhcmNoIHtcclxuXHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdG9wYmFyLXNlYXJjaC1iZywgMC4wNyk7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbixcclxuICAgIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5oZWFkZXItaXRlbSB7XHJcbiAgICBjb2xvcjogJGhlYWRlci1kYXJrLWl0ZW0tY29sb3I7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXZiYXItaGVhZGVyIHtcclxuICAgIC5kcm9wZG93bi5zaG93IHtcclxuICAgICAgLmhlYWRlci1pdGVtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR3aGl0ZSwgMC4xKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vdGktaWNvbiB7XHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICAgLnRvcG5hdiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG5cclxuICAgICAgLm5hdmJhci1uYXYge1xyXG5cclxuICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG5cclxuICAgICAgICAgICY6Zm9jdXMsXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgPi5kcm9wZG93biB7XHJcbiAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgID5hIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuOSkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvLyBcclxuLy8gX2xheW91dHMuc2Nzc1xyXG4vLyBcclxuXHJcbmJvZHlbZGF0YS1sYXlvdXQtc2l6ZT1cImJveGVkXCJdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRib3hlZC1ib2R5LWJnO1xyXG4gICAgI2xheW91dC13cmFwcGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1iZztcclxuICAgICAgICBtYXgtd2lkdGg6ICRib3hlZC1sYXlvdXQtd2lkdGg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2UtdG9wYmFyIHtcclxuICAgICAgICBtYXgtd2lkdGg6ICRib3hlZC1sYXlvdXQtd2lkdGg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCN7JGJveGVkLWxheW91dC13aWR0aH0gLSAjeyRzaWRlYmFyLXdpZHRofSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi52ZXJ0aWNhbC1jb2xscHNlZCB7XHJcbiAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygjeyRib3hlZC1sYXlvdXQtd2lkdGh9IC0gI3skc2lkZWJhci1jb2xsYXBzZWQtd2lkdGh9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBIb3Jpem9udGFsIEJveGVkIExheW91dFxyXG5cclxuYm9keVtkYXRhLWxheW91dD1cImhvcml6b250YWxcIl1bZGF0YS1sYXlvdXQtc2l6ZT1cImJveGVkXCJde1xyXG4gICAgI3BhZ2UtdG9wYmFyLCAjbGF5b3V0LXdyYXBwZXIsIC5mb290ZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItZmx1aWQsIC5uYXZiYXItaGVhZGVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6ICRib3hlZC1sYXlvdXQtd2lkdGg7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0ICd+cGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcyc7XG5cbi5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cz4ucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpob3Zlcj4ucHNfX3RodW1iLXkge1xuICB3aWR0aDogNnB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5wc19fdGh1bWIteSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMmFkYjcgIWltcG9ydGFudDtcbn1cblxuXG5wZXJmZWN0LXNjcm9sbGJhcj4ucHMucHMtLWFjdGl2ZS15Pi5wc19fcmFpbC15OmhvdmVyIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnBzLS1hY3RpdmUteD4ucHNfX3JhaWwteCxcbi5wcy0tYWN0aXZlLXk+LnBzX19yYWlsLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSIsIi8vIFxyXG4vLyBhdXRoZW50aWNhdGlvbi5zY3NzXHJcbi8vXHJcblxyXG5cclxuLy8gYXV0aGVudGljYXRpb24gaG9tZSBpY29uXHJcbi5ob21lLWJ0biB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMjVweDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 3428:
/*!********************************************************************!*\
  !*** ./src/app/pages/settlement/request/request-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestRoutingModule": () => (/* binding */ RequestRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _req_new_req_new_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./req-new/req-new.component */ 1262);
/* harmony import */ var _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./requirement/requirement.component */ 1822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'req-new', component: _req_new_req_new_component__WEBPACK_IMPORTED_MODULE_0__.ReqNewComponent },
    { path: 'requirement', component: _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_1__.RequirementComponent }
];
class RequestRoutingModule {
}
RequestRoutingModule.ɵfac = function RequestRoutingModule_Factory(t) { return new (t || RequestRoutingModule)(); };
RequestRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RequestRoutingModule });
RequestRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RequestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 3825:
/*!************************************************************!*\
  !*** ./src/app/pages/settlement/request/request.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestModule": () => (/* binding */ RequestModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var _request_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-routing.module */ 3428);
/* harmony import */ var _req_new_req_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./req-new/req-new.component */ 1262);
/* harmony import */ var _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./requirement/requirement.component */ 1822);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 9668);
/* harmony import */ var src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/scroll-spy/scroll-spy.module */ 1856);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
















// import { ScrollSpyDirective } from "src/app/directives/scroll-spy/scroll-spy.directive";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 0.3,
};
class RequestModule {
}
RequestModule.ɵfac = function RequestModule_Factory(t) { return new (t || RequestModule)(); };
RequestModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: RequestModule });
RequestModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _request_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
            ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_10__.AngularDraggableModule,
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxExtendedPdfViewerModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
            src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_4__.ScrollSpyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](RequestModule, { declarations: [_req_new_req_new_component__WEBPACK_IMPORTED_MODULE_1__.ReqNewComponent,
        _requirement_requirement_component__WEBPACK_IMPORTED_MODULE_2__.RequirementComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _request_routing_module__WEBPACK_IMPORTED_MODULE_0__.RequestRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbCollapseModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarModule,
        ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_10__.AngularDraggableModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxExtendedPdfViewerModule, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbDropdownModule,
        src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_4__.ScrollSpyModule] }); })();


/***/ }),

/***/ 1822:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/settlement/request/requirement/requirement.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequirementComponent": () => (/* binding */ RequirementComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class RequirementComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequirementComponent.ɵfac = function RequirementComponent_Factory(t) { return new (t || RequirementComponent)(); };
RequirementComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequirementComponent, selectors: [["app-requirement"]], decls: 2, vars: 0, template: function RequirementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "requirement works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXF1aXJlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4338:
/*!***************************************************************!*\
  !*** ./src/app/pages/settlement/settlement-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettlementRoutingModule": () => (/* binding */ SettlementRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [
    {
        path: "request",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./request/request.module */ 3825)).then((m) => m.RequestModule),
    },
    {
        path: "approval",
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./approval/approval.module */ 3531)).then((m) => m.ApprovalModule),
    },
];
class SettlementRoutingModule {
}
SettlementRoutingModule.ɵfac = function SettlementRoutingModule_Factory(t) { return new (t || SettlementRoutingModule)(); };
SettlementRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SettlementRoutingModule });
SettlementRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettlementRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 3792:
/*!*******************************************************!*\
  !*** ./src/app/pages/settlement/settlement.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettlementModule": () => (/* binding */ SettlementModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _settlement_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settlement-routing.module */ 4338);
/* harmony import */ var _request_request_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request/request.module */ 3825);
/* harmony import */ var _approval_approval_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./approval/approval.module */ 3531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);





class SettlementModule {
}
SettlementModule.ɵfac = function SettlementModule_Factory(t) { return new (t || SettlementModule)(); };
SettlementModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettlementModule });
SettlementModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _settlement_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettlementRoutingModule,
            _request_request_module__WEBPACK_IMPORTED_MODULE_1__.RequestModule,
            _approval_approval_module__WEBPACK_IMPORTED_MODULE_2__.ApprovalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettlementModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _settlement_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettlementRoutingModule,
        _request_request_module__WEBPACK_IMPORTED_MODULE_1__.RequestModule,
        _approval_approval_module__WEBPACK_IMPORTED_MODULE_2__.ApprovalModule] }); })();


/***/ }),

/***/ 196:
/*!***************************************************************!*\
  !*** ./node_modules/ngx-mask/node_modules/tslib/tslib.es6.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
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
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_pages_pages_module_ts.js.map