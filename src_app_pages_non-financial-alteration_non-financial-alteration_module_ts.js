"use strict";
(self["webpackChunkcore_app"] = self["webpackChunkcore_app"] || []).push([["src_app_pages_non-financial-alteration_non-financial-alteration_module_ts"],{

/***/ 8390:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/non-financial-alteration/non-financial-alteration-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonFinancialAlterationRoutingModule": () => (/* binding */ NonFinancialAlterationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request/request.component */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    {
        path: '',
        redirectTo: 'request',
        pathMatch: 'full'
    }, {
        path: 'request',
        component: _request_request_component__WEBPACK_IMPORTED_MODULE_0__.RequestComponent
    },
];
class NonFinancialAlterationRoutingModule {
}
NonFinancialAlterationRoutingModule.ɵfac = function NonFinancialAlterationRoutingModule_Factory(t) { return new (t || NonFinancialAlterationRoutingModule)(); };
NonFinancialAlterationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NonFinancialAlterationRoutingModule });
NonFinancialAlterationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NonFinancialAlterationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2213:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/non-financial-alteration/non-financial-alteration.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NonFinancialAlterationModule": () => (/* binding */ NonFinancialAlterationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 9668);
/* harmony import */ var src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/directives/scroll-spy/scroll-spy.module */ 1856);
/* harmony import */ var _non_financial_alteration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./non-financial-alteration-routing.module */ 8390);
/* harmony import */ var _request_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request/request.component */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelSpeed: 0.3,
};
class NonFinancialAlterationModule {
}
NonFinancialAlterationModule.ɵfac = function NonFinancialAlterationModule_Factory(t) { return new (t || NonFinancialAlterationModule)(); };
NonFinancialAlterationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NonFinancialAlterationModule });
NonFinancialAlterationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _non_financial_alteration_routing_module__WEBPACK_IMPORTED_MODULE_2__.NonFinancialAlterationRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapseModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
            ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_9__.AngularDraggableModule,
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.NgxExtendedPdfViewerModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule.forRoot(),
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule,
            src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NonFinancialAlterationModule, { declarations: [_request_request_component__WEBPACK_IMPORTED_MODULE_3__.RequestComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _non_financial_alteration_routing_module__WEBPACK_IMPORTED_MODULE_2__.NonFinancialAlterationRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbCollapseModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarModule,
        ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_9__.AngularDraggableModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__.NgxExtendedPdfViewerModule, ngx_mask__WEBPACK_IMPORTED_MODULE_11__.NgxMaskModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownModule,
        src_app_directives_scroll_spy_scroll_spy_module__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyModule] }); })();


/***/ }),

/***/ 1757:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/non-financial-alteration/request/request.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestComponent": () => (/* binding */ RequestComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/services/auth.service */ 263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _directives_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../directives/scroll-spy/scroll-spy.directive */ 7578);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 9234);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mask */ 247);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 6868);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);















const _c0 = ["largeDataModal"];
const _c1 = ["addCommentModal"];
function RequestComponent_div_5_ng_container_134_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r31.message, " ");
} }
function RequestComponent_div_5_ng_container_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_134_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r31 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.settlementForm.get("formRequest").hasError(validation_r31.type) && (ctx_r13.settlementForm.get("formRequest").dirty || ctx_r13.settlementForm.get("formRequest").touched));
} }
function RequestComponent_div_5_ng_container_140_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r34.message, " ");
} }
function RequestComponent_div_5_ng_container_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_140_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r34 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r14.settlementForm.get("formYear").hasError(validation_r34.type) && (ctx_r14.settlementForm.get("formYear").dirty || ctx_r14.settlementForm.get("formYear").touched));
} }
function RequestComponent_div_5_ng_container_146_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r37.message, " ");
} }
function RequestComponent_div_5_ng_container_146_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_146_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r37 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r15.settlementForm.get("formActionDate").hasError(validation_r37.type) && (ctx_r15.settlementForm.get("formActionDate").dirty || ctx_r15.settlementForm.get("formActionDate").touched));
} }
function RequestComponent_div_5_ng_container_153_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r40.message, " ");
} }
function RequestComponent_div_5_ng_container_153_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_153_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r40 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.settlementForm.get("formPolicy").hasError(validation_r40.type) && (ctx_r16.settlementForm.get("formPolicy").dirty || ctx_r16.settlementForm.get("formPolicy").touched));
} }
function RequestComponent_div_5_ng_container_159_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r43.message, " ");
} }
function RequestComponent_div_5_ng_container_159_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_159_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r43 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r17.settlementForm.get("formProposal").hasError(validation_r43.type) && (ctx_r17.settlementForm.get("formProposal").dirty || ctx_r17.settlementForm.get("formProposal").touched));
} }
function RequestComponent_div_5_ng_container_165_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r46.message, " ");
} }
function RequestComponent_div_5_ng_container_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_165_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r46 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r18.settlementForm.get("formSet").hasError(validation_r46.type) && (ctx_r18.settlementForm.get("formSet").dirty || ctx_r18.settlementForm.get("formSet").touched));
} }
function RequestComponent_div_5_ng_container_172_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r49.message, " ");
} }
function RequestComponent_div_5_ng_container_172_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_172_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r49 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.settlementForm.get("formEffectiveDate").hasError(validation_r49.type) && (ctx_r19.settlementForm.get("formEffectiveDate").dirty || ctx_r19.settlementForm.get("formEffectiveDate").touched));
} }
function RequestComponent_div_5_ng_container_187_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r52.message, " ");
} }
function RequestComponent_div_5_ng_container_187_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_187_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r52 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r20.settlementForm.get("formAdviceInstruct").hasError(validation_r52.type) && (ctx_r20.settlementForm.get("formAdviceInstruct").dirty || ctx_r20.settlementForm.get("formAdviceInstruct").touched));
} }
function RequestComponent_div_5_ng_container_194_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r55.message, " ");
} }
function RequestComponent_div_5_ng_container_194_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_194_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r55 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r21.settlementForm.get("formComments").hasError(validation_r55.type) && (ctx_r21.settlementForm.get("formComments").dirty || ctx_r21.settlementForm.get("formComments").touched));
} }
function RequestComponent_div_5_ng_container_201_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r58.message, " ");
} }
function RequestComponent_div_5_ng_container_201_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_201_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r58 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.settlementForm.get("formCRTRemarks").hasError(validation_r58.type) && (ctx_r22.settlementForm.get("formCRTRemarks").dirty || ctx_r22.settlementForm.get("formCRTRemarks").touched));
} }
function RequestComponent_div_5_ng_container_210_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r61.message, " ");
} }
function RequestComponent_div_5_ng_container_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_210_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r61 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.settlementForm.get("formDueDate").hasError(validation_r61.type) && (ctx_r23.settlementForm.get("formDueDate").dirty || ctx_r23.settlementForm.get("formDueDate").touched));
} }
function RequestComponent_div_5_ng_container_216_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r64.message, " ");
} }
function RequestComponent_div_5_ng_container_216_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_216_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r64 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r24.settlementForm.get("formIssueDate").hasError(validation_r64.type) && (ctx_r24.settlementForm.get("formIssueDate").dirty || ctx_r24.settlementForm.get("formIssueDate").touched));
} }
function RequestComponent_div_5_ng_container_223_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r67.message, " ");
} }
function RequestComponent_div_5_ng_container_223_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_223_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r67 = ctx.$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r25.settlementForm.get("formClientCode").hasError(validation_r67.type) && (ctx_r25.settlementForm.get("formClientCode").dirty || ctx_r25.settlementForm.get("formClientCode").touched));
} }
function RequestComponent_div_5_ng_container_229_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r70.message, " ");
} }
function RequestComponent_div_5_ng_container_229_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_229_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r70 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r26.settlementForm.get("formClientName").hasError(validation_r70.type) && (ctx_r26.settlementForm.get("formClientName").dirty || ctx_r26.settlementForm.get("formClientName").touched));
} }
function RequestComponent_div_5_ng_container_236_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r73.message, " ");
} }
function RequestComponent_div_5_ng_container_236_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_236_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r73 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r27.settlementForm.get("formEmployer").hasError(validation_r73.type) && (ctx_r27.settlementForm.get("formEmployer").dirty || ctx_r27.settlementForm.get("formEmployer").touched));
} }
function RequestComponent_div_5_ng_container_243_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r76.message, " ");
} }
function RequestComponent_div_5_ng_container_243_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_243_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r76 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r28.settlementForm.get("formCaseReadyTo").hasError(validation_r76.type) && (ctx_r28.settlementForm.get("formCaseReadyTo").dirty || ctx_r28.settlementForm.get("formCaseReadyTo").touched));
} }
function RequestComponent_div_5_ng_container_250_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r79.message, " ");
} }
function RequestComponent_div_5_ng_container_250_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_250_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r79 = ctx.$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r29.settlementForm.get("formRefundTo").hasError(validation_r79.type) && (ctx_r29.settlementForm.get("formRefundTo").dirty || ctx_r29.settlementForm.get("formRefundTo").touched));
} }
function RequestComponent_div_5_ng_container_257_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r82.message, " ");
} }
function RequestComponent_div_5_ng_container_257_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_div_5_ng_container_257_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r82 = ctx.$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r30.settlementForm.get("formPayment").hasError(validation_r82.type) && (ctx_r30.settlementForm.get("formPayment").dirty || ctx_r30.settlementForm.get("formPayment").touched));
} }
function RequestComponent_div_5_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_5_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r85.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "i", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Add ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_5_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r87.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "i", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_5_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r88.addNewRecordClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "i", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_5_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r89.addNewRecordClick(); });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](134, RequestComponent_div_5_ng_container_134_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](135, "label", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](136, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](137, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](138, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](140, RequestComponent_div_5_ng_container_140_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "label", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](144, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](145, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](146, RequestComponent_div_5_ng_container_146_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](153, RequestComponent_div_5_ng_container_153_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](154, "label", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](155, "Proposal No");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](156, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](157, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](158, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](159, RequestComponent_div_5_ng_container_159_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](160, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](161, "Set");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](162, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "input", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](165, RequestComponent_div_5_ng_container_165_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](172, RequestComponent_div_5_ng_container_172_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](187, RequestComponent_div_5_ng_container_187_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](194, RequestComponent_div_5_ng_container_194_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](201, RequestComponent_div_5_ng_container_201_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](210, RequestComponent_div_5_ng_container_210_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](211, "label", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](212, "Issue Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](213, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](214, "input", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](215, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](216, RequestComponent_div_5_ng_container_216_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](223, RequestComponent_div_5_ng_container_223_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "label", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](225, "Client Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](226, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](227, "input", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](229, RequestComponent_div_5_ng_container_229_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](231, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](232, "Employer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](234, "ng-select", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_div_5_Template_ng_select_change_234_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r90.onEmployerChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](235, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](236, RequestComponent_div_5_ng_container_236_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](237, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](239, "C.Ready To");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](240, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](241, "ng-select", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_div_5_Template_ng_select_change_241_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r91.onCaseReadyToChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](243, RequestComponent_div_5_ng_container_243_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](244, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](245, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](246, "Refund To");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](247, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](248, "ng-select", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_div_5_Template_ng_select_change_248_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r92.onRefundToChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](249, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](250, RequestComponent_div_5_ng_container_250_Template, 2, 1, "ng-container", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](251, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](252, "label", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](253, "Payment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](254, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](255, "ng-select", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_div_5_Template_ng_select_change_255_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r86); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r93.onPaymentChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](256, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](257, RequestComponent_div_5_ng_container_257_Template, 2, 1, "ng-container", 81);
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
function RequestComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Document Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r94.showDocumentInModal(); });
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
function RequestComponent_tr_562_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 205);
} if (rf & 2) {
    const item_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", item_r96.imgURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function RequestComponent_tr_562_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 206);
} }
function RequestComponent_tr_562_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 207);
} }
function RequestComponent_tr_562_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 208);
} }
function RequestComponent_tr_562_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 209);
} }
function RequestComponent_tr_562_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, RequestComponent_tr_562_img_10_Template, 1, 1, "img", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, RequestComponent_tr_562_img_11_Template, 1, 0, "img", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, RequestComponent_tr_562_img_12_Template, 1, 0, "img", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RequestComponent_tr_562_img_13_Template, 1, 0, "img", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, RequestComponent_tr_562_img_14_Template, 1, 0, "img", 202);
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
function RequestComponent_li_650_Template(rf, ctx) { if (rf & 1) {
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
function RequestComponent_ng_template_664_div_37_Template(rf, ctx) { if (rf & 1) {
    const _r108 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_664_div_37_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r108); const item_r106 = restoredCtx.$implicit; const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r107.onProposalClick(item_r106); });
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
function RequestComponent_ng_template_664_Template(rf, ctx) { if (rf & 1) {
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RequestComponent_ng_template_664_Template_input_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r109.searchProposal = $event; })("change", function RequestComponent_ng_template_664_Template_input_change_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r111.onProposalSearchChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "span", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_664_Template_span_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r110); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r112.openModel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, RequestComponent_ng_template_664_div_37_Template, 9, 4, "div", 233);
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
function RequestComponent_ng_template_671_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_671_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r117); const item_r115 = restoredCtx.$implicit; const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r116.onEDocsDocClick(item_r115); });
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
function RequestComponent_ng_template_671_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_671_div_3_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r120); const item_r118 = restoredCtx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r119.onEDocsDocClick(item_r118); });
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
function RequestComponent_ng_template_671_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "perfect-scrollbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, RequestComponent_ng_template_671_div_2_Template, 14, 6, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, RequestComponent_ng_template_671_div_3_Template, 25, 7, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.edocDocList);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r7.edocDocList);
} }
function RequestComponent_div_676_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_676_button_5_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r123.fullScreenModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function RequestComponent_div_676_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_676_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r125.exitFullScreenModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c6 = function (a0) { return { "custom-modal-full-screen": a0 }; };
function RequestComponent_div_676_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Document Preview ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RequestComponent_div_676_button_5_Template, 2, 0, "button", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RequestComponent_div_676_button_6_Template, 2, 0, "button", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_676_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r127.fitModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "i", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_div_676_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r128); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r129.closeDocModal(); });
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
function RequestComponent_ng_template_677_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Large modal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_677_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r131.onModelClose(); });
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
function RequestComponent_ng_template_679_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r136.message, " ");
} }
function RequestComponent_ng_template_679_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_ng_template_679_ng_container_13_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r136 = ctx.$implicit;
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r134.commentForm.get("formStatusType").hasError(validation_r136.type) && (ctx_r134.commentForm.get("formStatusType").dirty || ctx_r134.commentForm.get("formStatusType").touched));
} }
function RequestComponent_ng_template_679_ng_container_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const validation_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", validation_r139.message, " ");
} }
function RequestComponent_ng_template_679_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, RequestComponent_ng_template_679_ng_container_21_div_1_Template, 2, 1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const validation_r139 = ctx.$implicit;
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.commentForm.get("formComment").hasError(validation_r139.type) && (ctx_r135.commentForm.get("formComment").dirty || ctx_r135.commentForm.get("formComment").touched));
} }
function RequestComponent_ng_template_679_Template(rf, ctx) { if (rf & 1) {
    const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Add New Comment");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_ng_template_679_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r142.onAddCommentModelClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " \u00D7 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RequestComponent_ng_template_679_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r144.onCommentSubmit(ctx_r144.commentForm.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Status/Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ng-select", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_ng_template_679_Template_ng_select_change_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r143); const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r145.onCommentStatusTypeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, RequestComponent_ng_template_679_ng_container_13_Template, 2, 1, "ng-container", 81);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "\n             ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, RequestComponent_ng_template_679_ng_container_21_Template, 2, 1, "ng-container", 81);
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
class RequestComponent {
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
RequestComponent.ɵfac = function RequestComponent_Factory(t) { return new (t || RequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
RequestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RequestComponent, selectors: [["app-request"]], viewQuery: function RequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.largeDataModal = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.addCommentModal = _t.first);
    } }, decls: 681, vars: 79, consts: [[1, "container-fluid", "p-0", "custom-container-fluid"], [1, "custom-content", 3, "ngClass"], [1, "details-screen"], [1, "h-100", 3, "formGroup", "ngSubmit"], [1, "topDetails", 3, "ngClass"], ["class", "top-details-content", 4, "ngIf"], ["class", "edoc-details-content", 4, "ngIf"], [1, "belowDetails", 3, "ngClass"], [1, "card", "m-0", "h-100"], [1, "card-body", "p-0", "h-100"], [1, "ctn"], [1, "ctn-ul"], [1, "ctn-li", 3, "ngClass", "click"], ["scrollSpy", "", 1, "custom-toolbar-content", 3, "spiedTags", "sectionChange"], ["id", "section1", 1, "custom-content-body"], [1, "row", "w-100", "m-0"], [1, "col-1", "p-0", "d-flex", "align-items-center", "justify-content-end"], [1, "d-flex", "align-items-center", "justify-content-end", "font-size-12", "m-0"], [1, "col-4", "pr-0"], [1, "form-control", "form-control-sm", "custom-activity-dd"], [1, "col-7"], [1, "card", "activity-card", "m-0", "mt-2"], [1, "card-header", "pl-0", "pr-0", "pt-2", "pb-0", "bg-white"], [1, "m-0", "font-size-14"], [1, "card-body", "p-0", "pt-2", "pb-2"], [1, "table", "table-centered", "table-nowrap", "table-sm", "m-0", "font-size-12"], [1, "thead-light", "custom-activity-header"], [1, "text-right"], [1, "card", "activity-card", "h-100", "m-0", "mt-2", "mb-2"], ["id", "section2", 1, "custom-content-body"], [1, "col-6", "p-0"], [1, "card", "activity-card", "m-0", "mr-1"], [1, "card-body", "p-0", "pt-2", "pb-0"], [1, "custom-td-pr"], [1, "custom-td-pr", "text-right"], ["value", "344,490.72", 1, "custom-td-input"], ["colspan", "2", 1, "text-right"], [1, "badge", "badge-pill", "badge-soft-primary", "font-size-11"], [1, "card", "activity-card", "m-0", "ml-1"], ["value", "350.00", 1, "custom-td-input"], ["value", "4,297.00", 1, "custom-td-input"], ["value", "172,892.36", 1, "custom-td-input"], [1, "badge", "badge-pill", "badge-soft-success", "font-size-11"], [1, "col-12", "mt-2", "p-0"], [1, "badge", "badge-pill", "badge-soft-danger", "font-size-11"], ["id", "section3", 1, "custom-content-body"], ["type", "checkbox"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm", "custom-group-btn", "btn-yn-w"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light"], ["type", "text", 1, "form-control", "form-control-sm"], ["type", "checkbox", "checked", ""], ["id", "section4", 1, "custom-content-body"], [1, ""], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-end", "pr-2"], [1, "col-10", "p-0"], [1, "form-control", "form-control-sm"], [1, "row", "w-100", "m-0", "mt-2"], [1, "col-2", "p-0", "text-right"], [1, "col-3", "p-0", "text-right"], [1, "ml-2"], [1, "table", "table-sm", "table-bordered", "bg-gray", "m-0", "font-size-12"], [1, "col-4", "p-0", "pr-2"], [1, "btn", "btn-sm", "btn-outline-primary", "btn-block", "active"], [1, "col-4", "p-0"], [1, "btn", "btn-sm", "btn-outline-primary", "btn-block"], [1, "col-4", "p-0", "pl-2"], [1, "payee-content", "d-none"], [1, "col-2", "p-0"], [1, "col-3", "p-0", "pr-2"], [1, "col-3", "p-0", "pl-2"], ["id", "section5", 1, "custom-content-body"], [1, "ref-doc-top"], [1, "m-0"], [1, "ref-doc-top-tool"], ["type", "file", "multiple", "", 1, "d-none", 3, "change"], ["file", ""], [1, "btn", "btn-outline-success", "btn-sm", 3, "click"], [1, "bx", "bx-upload", "mr-2"], [1, "table", "table-centered", "table-nowrap", "table-sm", "m-0", "mt-2", "font-size-12"], [1, "text-center"], [4, "ngFor", "ngForOf"], ["id", "section6", 1, "custom-content-body"], [1, "bx", "bx-git-pull-request", "mr-2"], ["id", "section7", 1, "custom-content-body"], [1, "custom-comment"], [1, "comment-head"], ["title", "Add new Comments", 1, "btn", "btn-sm", "btn-outline-success", 3, "click"], [1, "bx", "bx-plus"], [1, "verti-timeline", "list-unstyled"], ["class", "event-list", 4, "ngFor", "ngForOf"], [1, "custom-td-btn", 3, "ngClass"], ["type", "button", 1, "btn", "btn-light", "custom-btn-tb", "btn-sm", 3, "title", "ngClass", "click"], [1, "font-size-14", "align-middle", "bx", 3, "ngClass"], [1, "custom-rsb"], [1, "custom-rsb-content"], ["ngbNav", "", 1, "nav-tabs", "nav-tabs-custom", "nav-justified", 3, "activeId"], ["customNavSRB", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", "", 1, "font-size-12", "p-2", 3, "click"], [1, "d-block", "d-sm-none"], [1, "fas", "fa-home"], [1, "d-none", "d-sm-block"], ["ngbNavContent", ""], [1, "SRB-tabs-content", 3, "ngbNavOutlet"], [1, "side-bar-arrow"], ["type", "button", 1, "btn", "btn-light", "custom-btn-sb", "btn-sm", 3, "title", "click"], ["class", "custom-model", 3, "ngDraggable", "ngResizable", "rzHandles", "ngClass", 4, "ngIf"], ["largeDataModal", ""], ["addCommentModal", ""], [1, "top-details-content"], [1, "top-details-content-header"], ["title", "Settlement", 1, "h-100", "overflow-hidden", 3, "breadcrumbItems"], [1, "top-header-tool-item"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "btn-outline-success", "btn-sm", "dropdown-toggle", "d-flex", "align-items-center"], [1, "mdi", "mdi-chevron-down", "ml-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-item", "btn-sm"], ["title", "Add New Record", 1, "btn", "btn-outline-light", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-plus", "font-size-16", "mr-2"], ["title", "Delete Record", 1, "btn", "btn-outline-danger", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bxs-trash-alt", "font-size-16", "mr-2"], ["title", "Save Record", 1, "btn", "btn-outline-primary", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-save", "font-size-16", "mr-2"], ["title", "Clear Record", 1, "btn", "btn-outline-light", "btn-sm", "p-1", "pr-2", "ml-1", "d-flex", "align-items-center", "justify-content-center", 3, "click"], [1, "bx", "bx-reset", "font-size-16", "mr-2"], [1, "top-details-content-body"], [1, "h-100"], [1, "row", "w-100", "m-0", "h-100"], [1, "col-12", "h-100", "p-2"], [1, "table", "table-sm", "table-striped", "m-0"], [1, "master-form-td", "td", "font-weight-bold"], [1, "master-form-td", "td"], ["role", "group", "aria-label", "Basic example", 1, "btn-group", "btn-group-sm", "custom-group-btn"], ["type", "button", "disabled", "true", 1, "btn", "btn-light"], ["type", "button", "disabled", "true", 1, "btn", "btn-primary"], ["colspan", "3", 1, "master-form-td", "td"], [1, "text-left"], ["colspan", "7", 1, "master-form-td", "td"], [1, "h-100", "d-none"], [1, "row", "w-100", "m-0", "h-100", "p-1"], [1, "col-6", "h-100", "p-0"], [1, "top-cotent-form-left"], [1, "form-group", "row", "m-0"], ["for", "request-no-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-2", "p-0"], ["type", "text", "formControlName", "formRequest", "id", "request-no-input", 1, "form-control", "form-control-sm", "p-1"], [1, "validation-errors"], ["for", "year-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formYear", "id", "year-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "action-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formActionDate", "placeholder", "dd/mm/yyyy", "id", "action-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], [1, "form-group", "row", "m-0", "mt-2"], ["for", "policy-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formPolicy", "id", "policy-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "proposal-input", 1, "col-md-2", "col-form-label", "text-right", "pl-0", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formProposal", "id", "proposal-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "set-input", 1, "col-md-2", "col-form-label", "text-right", "pl-0", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formSet", "id", "set-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "effective-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formEffectiveDate", "placeholder", "dd/mm/yyyy", "id", "effective-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], [1, "form-check", "form-check-right", "col-md-4", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "checkbox", "formControlName", "formMaturitySetled", "id", "maturity-settled-checkbox", 1, "form-check-input", "m-0"], ["for", "maturity-settled-checkbox", 1, "form-check-label", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "checkbox", "formControlName", "formUnitLinked", "id", "unit-link-checkbox", 1, "form-check-input", "m-0"], ["for", "unit-link-checkbox", 1, "form-check-label", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["for", "advice-instruct-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-10", "p-0"], ["type", "text", "formControlName", "formAdviceInstruct", "id", "advice-instruct-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "comments-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formComments", "id", "comments-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "crt-remarks-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formCRTRemarks", "id", "crt-remarks-input", 1, "form-control", "form-control-sm", "p-1"], [1, "top-cotent-form-right"], ["for", "due-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-4", "p-0"], ["type", "text", "placeholder", "dd/mm/yyyy", "formControlName", "formDueDate", "id", "due-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], ["for", "issue-date-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "placeholder", "dd/mm/yyyy", "formControlName", "formIssueDate", "id", "issue-date-input", "mask", "00/00/0000", 1, "form-control", "form-control-sm", "p-1"], ["for", "client-code-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formClientCode", "id", "client-code-input", 1, "form-control", "form-control-sm", "p-1"], ["for", "client-name-input", 1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["type", "text", "formControlName", "formClientName", "id", "client-name-input", 1, "form-control", "form-control-sm", "p-1"], [1, "col-md-2", "col-form-label", "text-right", "pt-0", "pb-0", "pr-2", "pl-0", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formEmployer", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formCaseReadyTo", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formRefundTo", 1, "custom-dd", 3, "items", "change"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formPayment", 1, "custom-dd", 3, "items", "change"], ["class", "error-message custom-err", 4, "ngIf"], [1, "error-message", "custom-err"], [1, "edoc-details-content"], [1, "edoc-details-content-header"], [1, "custom-doc-btn"], ["title", "Show Document Preview in Modal", 1, "btn", "btn-light", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-copy", "font-size-16"], [1, "edoc-details-content-body"], [3, "src", "useBrowserLocale", "textLayer", "showHandToolButton"], ["width", "24", "height", "24", 3, "src", 4, "ngIf"], ["src", "./assets/images/custom/pdf.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/word.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/excel.png", "width", "24", "height", "24", 4, "ngIf"], ["src", "./assets/images/custom/document.png", "width", "24", "height", "24", 4, "ngIf"], [1, "btn", "btn-sm", "btn-outline-danger"], [1, "bx", "bx-trash"], ["width", "24", "height", "24", 3, "src"], ["src", "./assets/images/custom/pdf.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/word.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/excel.png", "width", "24", "height", "24"], ["src", "./assets/images/custom/document.png", "width", "24", "height", "24"], [1, "event-list"], [1, "event-timeline-dot"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "media"], [1, "mr-3"], [1, "font-size-14"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ml-2"], [1, "media-body", "custom-media-body"], [1, "top-header-c"], [1, "mt-2"], [1, "side-bar-details"], [1, "h-100", "bg-white"], [1, "side-bar-details-td", "font-weight-bold"], [1, "side-bar-details-td"], [1, "side-detail-span"], [1, "badge", "badge-pill", "badge-soft-warning", "font-size-11"], [1, "side-bar-list"], [1, "app-search", "custom-app-search", "d-none", "d-lg-block", "p-0"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control", "bg-white", "h-30px", "custom-search-rsb", 3, "ngModel", "ngModelOptions", "ngModelChange", "change"], [1, "bx", "bx-search-alt", "lh-30px"], [1, "bx", "bx-filter-alt", "lh-30px", "custom-filter-icon", 3, "click"], [1, "proposal-list"], ["class", "col-6 p-0", 4, "ngFor", "ngForOf"], [1, "card", "my-card", "m-0", "mb-2", 3, "ngClass", "click"], [1, "card-body", "p-1"], [1, "col-2", "p-0", "d-flex", "align-items-center", "justify-content-center"], [1, "bx", "bx-file-blank", "font-size-18"], [1, "col-10", "p-0", "d-flex", "align-items-center", "justify-content-center"], [1, "m-0", "p1", "font-size-12"], [1, "edocs-content-list"], ["class", "row w-100 m-0 custom-edocs-row", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["class", "card m-0 edoc-card d-none", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "row", "w-100", "m-0", "custom-edocs-row", 3, "ngClass", "click"], [1, "col-2", "pl-1", "pr-0", "d-flex", "align-items-center", "justify-content-center"], [1, "far", "fa-file-pdf", "font-size-24", "edoc-i"], [1, "col-10", "p-0", "pl-2", "d-flex", "align-items-center"], [1, "custom-col-9-edocs"], [1, "custom-col-9-edocs-p1"], [1, "custom-col-9-edocs-p2"], [1, "span1"], [1, "bx", "bx-calendar-alt", "align-middle", "font-size-12"], [1, "span2"], [1, "bx", "bx-file-blank", "align-middle", "font-size-12"], [1, "card", "m-0", "edoc-card", "d-none", 3, "ngClass", "click"], [1, "card-body", "p-2"], [1, "d-flex", "align-items-center", "justify-content-center", "mb-2"], [1, "bx", "bxs-file-pdf", "font-size-24", "edoc-i"], [1, "col-6", "p-0", "mb-2", "text-left"], [1, "edoc-span"], [1, "m-0", "edoc-p"], [1, "col-6", "p-0", "mb-2", "text-right"], [1, "col-6", "p-0", "text-left"], [1, "col-6", "p-0", "text-right"], [1, "custom-model", 3, "ngDraggable", "ngResizable", "rzHandles", "ngClass"], [1, "custom-modal-content"], [1, "edoc-details-content-header1"], [1, "custom-doc-modal-btn"], ["class", "btn btn-success btn-sm p-1", "title", "Full Screen Modal", 3, "click", 4, "ngIf"], ["class", "btn btn-warning btn-sm p-1", "title", "Exit Full Screen Modal", 3, "click", 4, "ngIf"], ["title", "Fit in Master Container", 1, "btn", "btn-primary", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-rectangle", "font-size-16"], ["title", "Close Modal", 1, "btn", "btn-danger", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-window-close", "font-size-16"], ["title", "Full Screen Modal", 1, "btn", "btn-success", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-fullscreen", "font-size-16"], ["title", "Exit Full Screen Modal", 1, "btn", "btn-warning", "btn-sm", "p-1", 3, "click"], [1, "bx", "bx-exit-fullscreen", "font-size-16"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "close", 3, "click"], [1, "modal-body"], [1, "mb-0"], [1, "form-group", "row"], [1, "col-md-3", "text-right", "font-size-12", "d-flex", "align-items-center", "justify-content-end"], [1, "col-md-9"], ["bindLabel", "name", "bindValue", "id", "formControlName", "formStatusType", 1, "custom-ddd", 3, "items", "change"], ["rows", "5", "formControlName", "formComment", 1, "form-control"], ["type", "submit", 1, "btn", "btn-sm", "btn-primary", 3, "disabled"]], template: function RequestComponent_Template(rf, ctx) { if (rf & 1) {
        const _r146 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function RequestComponent_Template_form_ngSubmit_3_listener() { return ctx.onSettlementSubmit(ctx.settlementForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RequestComponent_div_5_Template, 258, 23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, RequestComponent_div_6_Template, 8, 4, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_12_listener() { return ctx.scrollTo("section1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Activity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_14_listener() { return ctx.scrollTo("section2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " Payable/Receivable ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_16_listener() { return ctx.scrollTo("section3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_18_listener() { return ctx.scrollTo("section4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Payee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_20_listener() { return ctx.scrollTo("section5"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " Ref.Doc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_22_listener() { return ctx.scrollTo("section6"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " CBC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_li_click_24_listener() { return ctx.scrollTo("section7"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, " Comments ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sectionChange", function RequestComponent_Template_div_sectionChange_26_listener($event) { return ctx.onSectionChange($event); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RequestComponent_Template_input_change_541_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r146); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](542); return ctx.upload(_r2.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](543, "button", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_543_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r146); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](542); return _r2.click(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](562, RequestComponent_tr_562_Template, 18, 7, "tr", 81);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_569_listener() { return ctx.CBCRequest(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_646_listener() { return ctx.addCommentModel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](647, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](648, "perfect-scrollbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](649, "ul", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](650, RequestComponent_li_650_Template, 16, 4, "li", 90);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_652_listener() { return ctx.onTDBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](653, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](654, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](655, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](656, "ul", 96, 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](658, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](659, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_a_click_659_listener() { return ctx.onDetailsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](660, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](661, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](662, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](663, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](664, RequestComponent_ng_template_664_Template, 38, 4, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](665, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](666, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_a_click_666_listener() { return ctx.onEDocsClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](667, "span", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](668, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](669, "span", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](670, "Edocs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](671, RequestComponent_ng_template_671_Template, 4, 2, "ng-template", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](672, "div", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](673, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](674, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RequestComponent_Template_button_click_674_listener() { return ctx.onRightBarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](675, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](676, RequestComponent_div_676_Template, 13, 12, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](677, RequestComponent_ng_template_677_Template, 12, 0, "ng-template", null, 108, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](679, RequestComponent_ng_template_679_Template, 25, 5, "ng-template", null, 109, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _directives_scroll_spy_scroll_spy_directive__WEBPACK_IMPORTED_MODULE_1__.ScrollSpyDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__.PerfectScrollbarComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_9__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_11__.NgxExtendedPdfViewerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__.AngularDraggableDirective, ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_12__.AngularResizableDirective], styles: ["@charset \"UTF-8\";\n@import url(\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap\");\n\n\n.ps[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n.ps__rail-x[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  \n  bottom: 0px;\n  \n  position: absolute;\n}\n.ps__rail-y[_ngcontent-%COMP%] {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  \n  right: 0;\n  \n  position: absolute;\n}\n.ps--active-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  display: block;\n  background-color: transparent;\n}\n.ps[_ngcontent-%COMP%]:hover    > .ps__rail-x[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]:hover    > .ps__rail-y[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--focus[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%], .ps--scrolling-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--scrolling-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:hover, .ps[_ngcontent-%COMP%]   .ps__rail-x[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-y[_ngcontent-%COMP%]:focus, .ps[_ngcontent-%COMP%]   .ps__rail-x.ps--clicking[_ngcontent-%COMP%], .ps[_ngcontent-%COMP%]   .ps__rail-y.ps--clicking[_ngcontent-%COMP%] {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n.ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  \n  bottom: 2px;\n  \n  position: absolute;\n}\n.ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  \n  right: 2px;\n  \n  position: absolute;\n}\n.ps__rail-x[_ngcontent-%COMP%]:hover    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x[_ngcontent-%COMP%]:focus    > .ps__thumb-x[_ngcontent-%COMP%], .ps__rail-x.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-x[_ngcontent-%COMP%] {\n  background-color: #999;\n  height: 11px;\n}\n.ps__rail-y[_ngcontent-%COMP%]:hover    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #999;\n  width: 11px;\n}\n\n@supports (-ms-overflow-style: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps[_ngcontent-%COMP%] {\n    overflow: auto !important;\n  }\n}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#fff;border-color:#b3b3b3 #ccc #d9d9d9}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:none}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{top:-2px;border-color:transparent transparent #999;border-width:0 5px 5px}\n.ng-select.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]:hover{border-color:transparent transparent #333}\n.ng-select.ng-select-opened.ng-select-bottom[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-bottom-right-radius:0;border-bottom-left-radius:0}\n.ng-select.ng-select-opened.ng-select-top[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{border-top-right-radius:0;border-top-left-radius:0}\n.ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#007eff;box-shadow:inset 0 1px 1px rgba(0,0,0,0.075),0 0 0 3px rgba(0,126,255,0.1)}\n.ng-select.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background-color:#f9f9f9}\n.ng-select[_ngcontent-%COMP%]   .ng-has-value[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{display:none}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#333;background-color:#fff;border-radius:4px;border:1px solid #ccc;min-height:36px;align-items:center}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]:hover{box-shadow:0 1px 0 rgba(0,0,0,0.06)}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{align-items:center;padding-left:10px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:10px;padding-left:0}\n.ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{color:#999}\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{height:36px}\n.ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{top:5px;left:0;padding-left:10px;padding-right:50px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding-right:10px;padding-left:50px}\n.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{background-color:#f9f9f9;border:1px solid #e6e6e6}\n.ng-select.ng-select-multiple.ng-select-disabled[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding:0 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-top:5px;padding-left:7px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]{padding-right:7px;padding-left:0}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{font-size:.9em;margin-bottom:5px;background-color:#ebf5ff;border-radius:2px;margin-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]{margin-right:0;margin-left:5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]{background-color:#f9f9f9}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value.ng-value-disabled[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{padding-left:0;padding-right:5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-label[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]{display:inline-block;padding:1px 5px}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon[_ngcontent-%COMP%]:hover{background-color:#d1e8ff}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-right:1px solid #b8dbff}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.left[_ngcontent-%COMP%]{border-left:1px solid #b8dbff;border-right:none}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:1px solid #b8dbff}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-value[_ngcontent-%COMP%]   .ng-value-icon.right[_ngcontent-%COMP%]{border-left:0;border-right:1px solid #b8dbff}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 0 3px 3px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-input[_ngcontent-%COMP%]{padding:0 3px 3px 0}\n.ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{top:5px;padding-bottom:5px;padding-left:3px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select.ng-select-multiple[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]   .ng-value-container[_ngcontent-%COMP%]   .ng-placeholder[_ngcontent-%COMP%]{padding-right:3px;padding-left:0}\n.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]{color:#999}\n.ng-select[_ngcontent-%COMP%]   .ng-clear-wrapper[_ngcontent-%COMP%]:hover   .ng-clear[_ngcontent-%COMP%]{color:#D0021B}\n.ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 5px 0 0}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-spinner-zone[_ngcontent-%COMP%]{padding:5px 0 0 5px}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{width:25px;padding-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]:hover   .ng-arrow[_ngcontent-%COMP%]{border-top-color:#666}\n.ng-select[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 2.5px}\n.ng-dropdown-panel[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,0.06);left:0}\n.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]{top:100%;border-bottom-right-radius:4px;border-bottom-left-radius:4px;border-top-color:#e6e6e6;margin-top:-1px}\n.ng-dropdown-panel.ng-select-bottom[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:4px;border-bottom-left-radius:4px}\n.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]{bottom:100%;border-top-right-radius:4px;border-top-left-radius:4px;border-bottom-color:#e6e6e6;margin-bottom:-1px}\n.ng-dropdown-panel.ng-select-top[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]:first-child{border-top-right-radius:4px;border-top-left-radius:4px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-header[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-footer[_ngcontent-%COMP%]{border-top:1px solid #ccc;padding:5px 7px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;padding:8px 10px;font-weight:500;color:rgba(0,0,0,0.54);cursor:pointer}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-disabled[_ngcontent-%COMP%]{cursor:default}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-optgroup.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{background-color:#ebf5ff;font-weight:600}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]{background-color:#fff;color:rgba(0,0,0,0.87);padding:8px 10px}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]{color:#333;background-color:#ebf5ff}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%], .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-selected.ng-option-marked[_ngcontent-%COMP%]   .ng-option-label[_ngcontent-%COMP%]{font-weight:600}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-marked[_ngcontent-%COMP%]{background-color:#f5faff;color:#333}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-disabled[_ngcontent-%COMP%]{color:#ccc}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-left:22px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option.ng-option-child[_ngcontent-%COMP%]{padding-right:22px;padding-left:0}\n.ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{font-size:80%;font-weight:400;padding-right:5px}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]   .ng-dropdown-panel-items[_ngcontent-%COMP%]   .ng-option[_ngcontent-%COMP%]   .ng-tag-label[_ngcontent-%COMP%]{padding-left:5px;padding-right:0}\n[dir=\"rtl\"][_ngcontent-%COMP%]   .ng-dropdown-panel[_ngcontent-%COMP%]{direction:rtl;text-align:right}\n#page-topbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1002;\n  background-color: #0074c8;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\n.navbar-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 auto;\n  height: 50px;\n  padding: 0 calc(24px / 2) 0 0;\n}\n.navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n}\n.navbar-brand-box[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  text-align: center;\n  width: 250px;\n}\n.logo[_ngcontent-%COMP%] {\n  line-height: 50px;\n}\n.logo[_ngcontent-%COMP%]   .logo-sm[_ngcontent-%COMP%] {\n  display: none;\n}\n.logo-light[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.app-search[_ngcontent-%COMP%] {\n  padding: calc(12px / 2) 0;\n}\n.app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n  height: 38px;\n  padding-left: 40px;\n  padding-right: 20px;\n  background-color: #f3f3f9;\n  box-shadow: none;\n  border-radius: 30px;\n}\n.app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 10;\n  font-size: 16px;\n  line-height: 38px;\n  left: 13px;\n  top: 0;\n  color: #74788d;\n}\n.megamenu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 0px;\n}\n.megamenu-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #495057;\n}\n@media (max-width: 992px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    width: auto;\n  }\n\n  .logo[_ngcontent-%COMP%]   span.logo-lg[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .logo[_ngcontent-%COMP%]   span.logo-sm[_ngcontent-%COMP%] {\n    display: inline-block;\n  }\n}\n.page-content[_ngcontent-%COMP%] {\n  padding: calc(50px) 0px 0px 0px;\n}\n.header-item[_ngcontent-%COMP%] {\n  height: 50px;\n  box-shadow: none !important;\n  color: #fff;\n  border: 0;\n  border-radius: 0px;\n}\n.header-item[_ngcontent-%COMP%]:hover {\n  color: #555b6d;\n}\n.header-profile-user[_ngcontent-%COMP%] {\n  height: 36px;\n  width: 36px;\n  background-color: #f6f6f6;\n  padding: 3px;\n}\n.noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n  color: #fff;\n}\n.noti-icon[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  margin-left: -10px;\n}\n.notification-item[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n}\n.notification-item[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]:hover {\n  background-color: #f6f6f6;\n}\n.dropdown-icon-item[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 3px;\n  line-height: 34px;\n  text-align: center;\n  padding: 15px 0 9px;\n  display: block;\n  border: 1px solid transparent;\n  color: #74788d;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 24px;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.dropdown-icon-item[_ngcontent-%COMP%]:hover {\n  border-color: #eff2f7;\n}\n.fullscreen-enable[_ngcontent-%COMP%]   [data-toggle=fullscreen][_ngcontent-%COMP%]   .bx-fullscreen[_ngcontent-%COMP%]::before {\n  content: \"\uEA3F\";\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-profile-user[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.25);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 600px) {\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    left: 10px !important;\n    right: 10px !important;\n  }\n}\n@media (max-width: 380px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.05);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .header-profile-user[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.25);\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-topbar=dark][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 600px) {\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .navbar-header[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    left: 10px !important;\n    right: 10px !important;\n  }\n}\n@media (max-width: 380px) {\n  .navbar-brand-box[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: auto;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  padding: calc(55px) 0px 0px 0px;\n}\n@media (max-width: 992px) {\n  body[data-layout=horizontal][_ngcontent-%COMP%]   .page-content[_ngcontent-%COMP%] {\n    margin-top: 15px;\n  }\n}\n.page-title-box[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n.page-title-box[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  background-color: transparent;\n  padding: 0;\n}\n.page-title-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 600;\n  font-size: 16px !important;\n}\n.footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  padding: 20px calc(24px / 2);\n  position: absolute;\n  right: 0;\n  color: #74788d;\n  left: 250px;\n  height: 60px;\n  background-color: #f2f2f5;\n}\n@media (max-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    left: 0;\n  }\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 50px;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 0 !important;\n}\n.right-bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);\n  display: block;\n  position: fixed;\n  transition: all 200ms ease-out;\n  width: 280px;\n  z-index: 9999;\n  float: right !important;\n  right: -290px;\n  top: 0;\n  bottom: 0;\n}\n.right-bar[_ngcontent-%COMP%]   .right-bar-toggle[_ngcontent-%COMP%] {\n  background-color: #444c54;\n  height: 24px;\n  width: 24px;\n  line-height: 24px;\n  color: #eff2f7;\n  text-align: center;\n  border-radius: 50%;\n}\n.right-bar[_ngcontent-%COMP%]   .right-bar-toggle[_ngcontent-%COMP%]:hover {\n  background-color: #4b545c;\n}\n.rightbar-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(52, 58, 64, 0.55);\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: none;\n  z-index: 9998;\n  transition: all 0.2s ease-out;\n}\n.right-bar-enabled[_ngcontent-%COMP%]   .right-bar[_ngcontent-%COMP%] {\n  right: 0;\n}\n.right-bar-enabled[_ngcontent-%COMP%]   .rightbar-overlay[_ngcontent-%COMP%] {\n  display: block;\n}\n@media (max-width: 767.98px) {\n  .right-bar[_ngcontent-%COMP%] {\n    overflow: auto;\n  }\n  .right-bar[_ngcontent-%COMP%]   .slimscroll-menu[_ngcontent-%COMP%] {\n    height: auto !important;\n  }\n}\n.metismenu[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.metismenu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse[_ngcontent-%COMP%] {\n  display: none;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse[_ngcontent-%COMP%]:not(.mm-show) {\n  display: none;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapse.mm-show[_ngcontent-%COMP%] {\n  display: block;\n}\n.metismenu[_ngcontent-%COMP%]   .mm-collapsing[_ngcontent-%COMP%] {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease;\n  transition-duration: 0.35s;\n  transition-property: height, visibility;\n}\n.vertical-menu[_ngcontent-%COMP%] {\n  width: 250px;\n  z-index: 1001;\n  background: #ffffff;\n  bottom: 0;\n  margin-top: 0;\n  position: fixed;\n  top: 50px;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-left: 250px;\n  overflow: hidden;\n}\n.main-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 0 15px 10px 15px;\n  margin-top: 50px;\n}\n#sidebar-menu[_ngcontent-%COMP%] {\n  padding: 10px 0 30px 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > .has-arrow[_ngcontent-%COMP%]:after {\n  transform: rotate(-180deg);\n}\n#sidebar-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after {\n  content: \"\uDB80\uDD40\";\n  font-family: \"Material Design Icons\";\n  display: block;\n  float: right;\n  transition: transform 0.2s;\n  font-size: 1rem;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.625rem 1.5rem;\n  color: #545a6d;\n  position: relative;\n  font-size: 13px;\n  transition: all 0.4s;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  min-width: 1.75rem;\n  padding-bottom: 0.125em;\n  font-size: 1.25rem;\n  line-height: 1.40625rem;\n  vertical-align: middle;\n  color: #7f8387;\n  transition: all 0.4s;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #383c40;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #383c40;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.5rem 0.4rem 3.5rem;\n  font-size: 13px;\n  color: #545a6d;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%] {\n  padding: 0;\n}\n#sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.4rem 1.5rem 0.4rem 4.5rem;\n  font-size: 13.5px;\n}\n.menu-title[_ngcontent-%COMP%] {\n  padding: 12px 20px !important;\n  letter-spacing: 0.05em;\n  pointer-events: none;\n  cursor: default;\n  font-size: 11px;\n  text-transform: uppercase;\n  color: #7f8387;\n  font-weight: 600;\n}\nbody.overflow-h[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n.mm-active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n@media (max-width: 992px) {\n  .vertical-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .main-content[_ngcontent-%COMP%] {\n    margin-left: 0 !important;\n  }\n\n  body.sidebar-enable[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: 50px !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span.logo-lg[_ngcontent-%COMP%] {\n  display: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span.logo-sm[_ngcontent-%COMP%] {\n  display: block;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px !important;\n  z-index: 5;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   perfect-scrollbar[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   perfect-scrollbar[_ngcontent-%COMP%]   .ps[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-mask[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-content-wrapper[_ngcontent-%COMP%] {\n  overflow: visible !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-scrollbar[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .simplebar-offset[_ngcontent-%COMP%] {\n  bottom: 0 !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%], .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .collapse.in[_ngcontent-%COMP%] {\n  display: none !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .nav.collapse[_ngcontent-%COMP%] {\n  height: inherit !important;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  padding: 15px 10px;\n  min-height: 55px;\n  transition: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover, .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:active, .vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus {\n  color: #383c40;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.45rem;\n  margin-left: 4px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none;\n  padding-left: 25px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  position: relative;\n  width: calc(190px + 50px);\n  color: #0074c8;\n  background-color: whitesmoke;\n  transition: none;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0074c8;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  display: block;\n  left: 50px;\n  position: absolute;\n  width: 190px;\n  height: auto !important;\n  box-shadow: 3px 5px 10px 0 rgba(54, 61, 71, 0.1);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  box-shadow: 3px 5px 10px 0 rgba(54, 61, 71, 0.1);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  box-shadow: none;\n  padding: 8px 20px;\n  position: relative;\n  width: 190px;\n  z-index: 6;\n  color: #545a6d;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #383c40;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  z-index: 9999;\n  display: none;\n  background-color: #ffffff;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%] {\n  display: block;\n  left: 190px;\n  height: auto !important;\n  margin-top: -36px;\n  position: absolute;\n  width: 190px;\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span.pull-right[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 20px;\n  top: 12px;\n  transform: rotate(270deg);\n}\n.vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #f8f9fa;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  background: #2a3042;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a6b0cf;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6a7187;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #79829c;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  background: #2e3548;\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #79829c;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  background-color: #2a3042;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\nbody[data-sidebar=dark].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n}\nbody[data-sidebar=dark][_ngcontent-%COMP%]   .menu-title[_ngcontent-%COMP%] {\n  color: #6a7187;\n}\nbody[data-layout=horizontal][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  width: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  width: 160px;\n  text-align: center;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .has-arrow[_ngcontent-%COMP%]:after, body[data-sidebar-size=small][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: none !important;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 160px;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-title[_ngcontent-%COMP%] {\n  background-color: #2e3548;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-sidebar-size=small][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-left: 1.5rem;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .main-content[_ngcontent-%COMP%] {\n  margin-left: 50px;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%] {\n  text-align: left;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n}\nbody[data-sidebar-size=small].vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  left: 50px;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .navbar-brand-box[_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], body[data-sidebar=colored][_ngcontent-%COMP%]   .mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.menu-title[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n}\nbody[data-sidebar=colored][_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ul.sub-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.4);\n}\nbody[data-sidebar=colored].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]:hover    > a[_ngcontent-%COMP%] {\n  background-color: #007ad2;\n}\nbody[data-sidebar=colored].vertical-collpsed[_ngcontent-%COMP%]   .vertical-menu[_ngcontent-%COMP%]   #sidebar-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.mm-active[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #556ee6 !important;\n}\n.topnav[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 0 calc(24px / 2);\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n  margin-top: 50px;\n  position: fixed;\n  left: 0;\n  right: 0;\n  z-index: 100;\n}\n.topnav[_ngcontent-%COMP%]   .topnav-menu[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 14px;\n  position: relative;\n  padding: 1rem 1.3rem;\n  color: #545a6d;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #556ee6;\n  background-color: transparent;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  color: #545a6d;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\n  color: #556ee6;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #556ee6;\n}\n.topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: #556ee6;\n  background-color: transparent;\n}\n@media (min-width: 1200px) {\n  body[data-layout=horizontal][_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%], body[data-layout=horizontal][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n    max-width: 85%;\n  }\n}\n@media (min-width: 992px) {\n  .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:first-of-type   .nav-link[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    padding: 0.5rem 1.5rem;\n    min-width: 180px;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown.mega-dropdown[_ngcontent-%COMP%]   .mega-dropdown-menu[_ngcontent-%COMP%] {\n    left: 0px;\n    right: auto;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    margin-top: 0;\n    border-radius: 0 0 0.25rem 0.25rem;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%]::after {\n    right: 15px;\n    transform: rotate(-135deg) translateY(-50%);\n    position: absolute;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 100%;\n    display: none;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%]    > .dropdown[_ngcontent-%COMP%]:hover    > .dropdown-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .navbar-toggle[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.arrow-down[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.arrow-down[_ngcontent-%COMP%]:after {\n  border-color: initial;\n  border-style: solid;\n  border-width: 0 0 1px 1px;\n  content: \"\";\n  height: 0.4em;\n  display: inline-block;\n  right: 5px;\n  top: 50%;\n  margin-left: 10px;\n  transform: rotate(-45deg) translateY(-50%);\n  transform-origin: top;\n  transition: all 0.3s ease-out;\n  width: 0.4em;\n}\n@media (max-width: 1199.98px) {\n  .topnav-menu[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-of-type   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    right: 100%;\n    left: auto;\n  }\n}\n@media (max-width: 991.98px) {\n  .topnav[_ngcontent-%COMP%] {\n    max-height: 360px;\n    overflow-y: auto;\n    padding: 0;\n  }\n  .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding: 0.75rem 1.1rem;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: none;\n    box-shadow: none;\n    padding-left: 15px;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: transparent;\n  }\n  .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%], .topnav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active {\n    color: #0074c8;\n  }\n  .topnav[_ngcontent-%COMP%]   .arrow-down[_ngcontent-%COMP%]::after {\n    right: 15px;\n    position: absolute;\n  }\n}\n@media (min-width: 992px) {\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%] {\n    background-color: #0074c8;\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.5);\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  body[data-layout=horizontal][data-topbar=light][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n  box-shadow: none;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .logo-dark[_ngcontent-%COMP%] {\n  display: none;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .logo-light[_ngcontent-%COMP%] {\n  display: block;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  background-color: rgba(243, 243, 249, 0.07);\n  color: #fff;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .app-search[_ngcontent-%COMP%]   input.form-control[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: rgba(255, 255, 255, 0.5);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%]:hover {\n  color: #e9ecef;\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .dropdown.show[_ngcontent-%COMP%]   .header-item[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.1);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%]   .waves-effect[_ngcontent-%COMP%]   .waves-ripple[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.4);\n}\nbody[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .noti-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #e9ecef;\n}\n@media (min-width: 992px) {\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%] {\n    background-color: #0074c8;\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.5);\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:focus, body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n    color: rgba(255, 255, 255, 0.9);\n  }\n  body[data-layout=horizontal][data-topbar=colored][_ngcontent-%COMP%]   .topnav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]    > .dropdown.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    color: rgba(255, 255, 255, 0.9) !important;\n  }\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%] {\n  background-color: #ebebf4;\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   #layout-wrapper[_ngcontent-%COMP%] {\n  background-color: #f8f8fb;\n  max-width: 1300px;\n  margin: 0 auto;\n  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%] {\n  max-width: 1300px;\n  margin: 0 auto;\n}\nbody[data-layout-size=boxed][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: calc(1300px - 250px);\n}\nbody[data-layout-size=boxed].vertical-collpsed[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  max-width: calc(1300px - 50px);\n}\nbody[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   #page-topbar[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   #layout-wrapper[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\nbody[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%], body[data-layout=horizontal][data-layout-size=boxed][_ngcontent-%COMP%]   .navbar-header[_ngcontent-%COMP%] {\n  max-width: 1300px;\n}\n.ps__rail-y.ps--clicking[_ngcontent-%COMP%]   .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:focus    > .ps__thumb-y[_ngcontent-%COMP%], .ps__rail-y[_ngcontent-%COMP%]:hover    > .ps__thumb-y[_ngcontent-%COMP%] {\n  width: 6px !important;\n  background-color: transparent !important;\n}\n.ps__thumb-y[_ngcontent-%COMP%] {\n  background-color: #a2adb7 !important;\n}\nperfect-scrollbar[_ngcontent-%COMP%]    > .ps.ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%]:hover {\n  width: auto !important;\n}\n.ps--active-x[_ngcontent-%COMP%]    > .ps__rail-x[_ngcontent-%COMP%], .ps--active-y[_ngcontent-%COMP%]    > .ps__rail-y[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n}\n.home-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 25px;\n}\n.custom-container-fluid[_ngcontent-%COMP%] {\n  height: calc(100vh - 50px);\n  overflow: hidden;\n}\n.custom-content[_ngcontent-%COMP%] {\n  margin-right: 250px;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.custom-rsb[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 0px;\n  top: 50px;\n  width: 250px;\n  height: calc(100% - 50px);\n  background-color: #f8f8fb;\n}\n.side-bar-arrow[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 56px;\n  right: 250px;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n.show[_ngcontent-%COMP%] {\n  display: block;\n}\n.custom-top-rsb[_ngcontent-%COMP%] {\n  padding: 10px 10px 10px 10px !important;\n}\n.custom-proposal-rsb[_ngcontent-%COMP%] {\n  height: calc(100% - 100px);\n  padding-top: 8px;\n  background: #efefef;\n}\n.custom-app-search[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\n.proposal-list[_ngcontent-%COMP%] {\n  height: calc(100% - 46px);\n  overflow: hidden;\n}\n.p2[_ngcontent-%COMP%] {\n  color: #898989;\n}\n.my-card[_ngcontent-%COMP%] {\n  margin: 0px 8px 5px !important;\n  cursor: pointer;\n  background: #eeeeee;\n}\n.my-card[_ngcontent-%COMP%]:hover {\n  background-color: #0074c8;\n  color: #fff;\n}\n.my-card[_ngcontent-%COMP%]:hover   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.bg-blueActive[_ngcontent-%COMP%] {\n  background-color: #0074c8;\n  color: #fff;\n}\n.bg-blueActive[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.bg-greenActive[_ngcontent-%COMP%] {\n  background-color: #00946d;\n  color: #fff;\n}\n.bg-greenActive[_ngcontent-%COMP%]   .p2[_ngcontent-%COMP%] {\n  color: #eff2f7;\n}\n.details-screen[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.edocs-screen[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.topDetails[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.top-details-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.top-details-content-header[_ngcontent-%COMP%] {\n  height: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: #fefefe;\n}\n.top-details-content-body[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  overflow: hidden;\n  background-color: #ffffff;\n}\n.edoc-details-content[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.edoc-details-content-header[_ngcontent-%COMP%] {\n  height: 35px;\n  background: #eee;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.custom-doc-btn[_ngcontent-%COMP%] {\n  padding-right: 35px;\n  height: 27px;\n  overflow: hidden;\n}\n.custom-doc-btn[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  background-color: #f8f8fb !important;\n  border-radius: 0px !important;\n  height: 100%;\n  width: 30px;\n}\n.belowDetails[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.belowDetails.expanded[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.belowDetails.compressed[_ngcontent-%COMP%] {\n  height: 50%;\n}\n.details-tabs-content[_ngcontent-%COMP%] {\n  height: calc(100% - 36px);\n  background: #f6f6f6;\n}\n[_nghost-%COMP%]    .details-tabs-content > .active {\n  height: 100% !important;\n}\n[_nghost-%COMP%]    .custom-active-tab-d > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n  padding: 10px;\n}\n.edocs-sidebar[_ngcontent-%COMP%] {\n  width: 30%;\n  float: left;\n  height: 100%;\n  background: #fefefe;\n  overflow: hidden;\n  padding: 10px 0px;\n}\n.edocs-content[_ngcontent-%COMP%] {\n  width: 70%;\n  float: right;\n  height: 100%;\n}\n.edoc-card[_ngcontent-%COMP%] {\n  margin: 0px 10px 10px !important;\n  background: #eeeeee;\n  cursor: pointer;\n}\n.edoc-span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n}\n.edoc-p[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.edoc-i[_ngcontent-%COMP%] {\n  font-size: 24px !important;\n  color: red;\n}\n.edoc-card[_ngcontent-%COMP%]:hover {\n  background-color: #00946d;\n  color: #fff;\n}\n.edoc-card[_ngcontent-%COMP%]:hover   .edoc-i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.edoc-card-active[_ngcontent-%COMP%] {\n  background-color: #00946d !important;\n  color: #fff;\n}\n.edoc-card-active[_ngcontent-%COMP%]   .edoc-i[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.h-30px[_ngcontent-%COMP%] {\n  height: 30px !important;\n}\n.lh-30px[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n}\n.custom-td-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2.5px;\n  height: 33px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.custom-td-btn1[_ngcontent-%COMP%] {\n  top: calc(50% - 0px);\n}\n.custom-td-btn2[_ngcontent-%COMP%] {\n  top: 38px;\n}\n.custom-btn-sb[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-right: 0px !important;\n  border: none !important;\n}\n.custom-btn-tb[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-top-width: 1px !important;\n  border-bottom-width: 0px !important;\n  border: none !important;\n}\n.custom-btn-tb2[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  border-radius: 0px !important;\n  border-bottom-width: 1px !important;\n  border-top-width: 1px !important;\n}\n.custom-rsb-content[_ngcontent-%COMP%] {\n  height: 100%;\n  border-left: 2px solid #dddddd;\n}\n.SRB-tabs-content[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  background: #ffffff;\n}\n[_nghost-%COMP%]     .SRB-tabs-content > .tab-pane {\n  height: 100% !important;\n  overflow: hidden;\n}\n.edocs-content-list[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: hidden;\n  padding: 10px 0px;\n}\n[_nghost-%COMP%]    .modal-demo .ui-modal {\n  z-index: 10000 !important;\n  height: calc(100% - 50px);\n  width: 50%;\n}\n[_nghost-%COMP%]    .modal-demo .ui-icon {\n  font-size: 12px !important;\n}\n[_nghost-%COMP%]     .ui-modal-header {\n  background: #0074c8 !important;\n}\n.top-layer[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  border: 0;\n  overflow: hidden;\n}\n.custom-model[_ngcontent-%COMP%] {\n  position: absolute;\n  background: #eeeeee;\n  box-shadow: 2px 2px 10px;\n  min-width: 25%;\n  min-height: 50%;\n  width: 75%;\n  height: calc(100% - 50px);\n  top: 25px;\n  bottom: 25px;\n  left: 12.5%;\n  z-index: 1000000000000;\n}\n.custom-modal-full-screen[_ngcontent-%COMP%] {\n  height: 100% !important;\n  width: 100% !important;\n  left: 0px !important;\n  right: 0px !important;\n  top: 0px !important;\n  bottom: 0px !important;\n  transform: none !important;\n}\n.custom-modal-content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.edoc-details-content-header1[_ngcontent-%COMP%] {\n  height: 35px;\n  background: #e8e8e8;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 10px;\n  font-size: 16px;\n  font-weight: bold;\n  position: relative;\n}\n.custom-doc-modal-btn[_ngcontent-%COMP%] {\n  height: 27px;\n  overflow: hidden;\n}\n.custom-doc-modal-btn[_ngcontent-%COMP%]    > .btn[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 30px;\n  margin-right: 5px;\n}\n.edoc-details-content-body[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n}\n.custom-err[_ngcontent-%COMP%] {\n  color: #ff0000;\n  font-size: 10px;\n}\n[_nghost-%COMP%]    .top-details-content-body > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n}\n.top-cotent-form-left[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 5px;\n  margin-right: 2.5px;\n}\n.top-cotent-form-right[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 5px;\n  margin-left: 2.5px;\n}\n.custom-dd[_ngcontent-%COMP%] {\n  height: calc(1.5em + 0.5rem + 2px) !important;\n}\n[_nghost-%COMP%]    .custom-dd > .ng-select-container {\n  min-height: calc(1.5em + 0.5rem + 2px) !important;\n  height: calc(1.5em + 0.5rem + 2px) !important;\n}\n.side-bar-details[_ngcontent-%COMP%] {\n  max-height: 50%;\n  height: 100%;\n  background: #ffffff;\n}\n.side-bar-details-td[_ngcontent-%COMP%] {\n  font-size: 12px !important;\n  background: #fff !important;\n}\n[_nghost-%COMP%]    .side-bar-details > perfect-scrollbar > div > div.ps-content {\n  padding: 8px !important;\n  height: 100%;\n}\n.side-bar-list[_ngcontent-%COMP%] {\n  max-height: 50%;\n  height: 100%;\n  background: #ffffff;\n}\n.master-form-td[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  font-size: 12px;\n}\n.nav-tabs-custom[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #dddddd !important;\n  background: #ffffff;\n}\n.top-header-tool-item[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 36px;\n}\n.custom-filter-icon[_ngcontent-%COMP%] {\n  right: 13px !important;\n  left: auto !important;\n}\n.custom-filter-icon[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.custom-search-rsb[_ngcontent-%COMP%] {\n  border-radius: 5px !important;\n  background: #eee !important;\n}\n.custom-group-btn[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 76px;\n}\n.custom-group-btn[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  width: 50%;\n  padding: 0px 5px;\n}\n.ctn[_ngcontent-%COMP%] {\n  height: 35px;\n}\n.ctn-ul[_ngcontent-%COMP%] {\n  text-decoration: none;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  border-bottom: 1px solid #dddddd;\n}\n.ctn-li[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 8px;\n  cursor: pointer;\n  line-height: 16px;\n  border-bottom: 2px solid transparent;\n}\n.ctn-active[_ngcontent-%COMP%] {\n  border-bottom: 2px solid #00946d;\n  color: #00946d;\n}\n.custom-toolbar-content[_ngcontent-%COMP%] {\n  height: calc(100% - 35px);\n  overflow-y: scroll;\n  padding: 5px;\n  background: #eeeeee;\n}\n.custom-content-body[_ngcontent-%COMP%] {\n  background: #ffffff;\n  min-height: 100%;\n  margin-bottom: 5px;\n}\n.custom-content-body[_ngcontent-%COMP%]    > perfect-scrollbar[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n[_nghost-%COMP%]    .edocs-content-list > perfect-scrollbar > div > div.ps-content {\n  height: 100% !important;\n  padding: 0px 8px;\n}\n.custom-edocs-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-bottom: 1px solid #ddd;\n  border-left: 2px solid transparent;\n}\n.custom-col-9-edocs[_ngcontent-%COMP%] {\n  padding: 6px 0px;\n  width: 100%;\n}\n.custom-col-9-edocs-p1[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 11px;\n  font-weight: 430;\n}\n.custom-col-9-edocs-p2[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 3px !important;\n  font-size: 11px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.custom-col-9-edocs-p3[_ngcontent-%COMP%] {\n  margin: 0px;\n  font-size: 11px;\n}\n.span1[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #888888;\n  line-height: 15px;\n}\n.span1[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #0074c8;\n}\n.span2[_ngcontent-%COMP%] {\n  color: #888888;\n  line-height: 15px;\n}\n.span2[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  color: #0074c8;\n}\n.span3[_ngcontent-%COMP%] {\n  color: #888888;\n}\n.custom-edocs-row[_ngcontent-%COMP%]:hover {\n  border-left: 2px solid #00946d;\n}\n.custom-edocs-row-active[_ngcontent-%COMP%] {\n  border-left: 2px solid #00946d;\n}\n.activity-card[_ngcontent-%COMP%] {\n  border: 1px solid #dddddd !important;\n}\n.activity-card[_ngcontent-%COMP%]    > .card-header[_ngcontent-%COMP%] {\n  border-radius: 3px !important;\n  background: #ffffff !important;\n  padding-left: 8px !important;\n}\n.custom-activity-header[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  font-weight: 410 !important;\n}\n.custom-activity-dd[_ngcontent-%COMP%] {\n  background: #eeeeee !important;\n}\n.side-detail-span[_ngcontent-%COMP%] {\n  color: #00946d;\n  font-weight: bold;\n}\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #00946d !important;\n}\n.nav-tabs-custom[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]::after {\n  background: #00946d !important;\n}\n.custom-td-pr[_ngcontent-%COMP%] {\n  border-left: 1px solid #dddddd;\n}\n.custom-td-input[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n  text-align: right;\n  width: 100%;\n  border: none;\n}\n.btn-yn-w[_ngcontent-%COMP%] {\n  width: 130px !important;\n}\n.h-35[_ngcontent-%COMP%] {\n  height: 35px !important;\n}\n.h-full-35[_ngcontent-%COMP%] {\n  height: calc(100% - 35px) !important;\n  border-top: 2px solid #dddddd;\n}\n.ref-doc-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n.ref-doc-top-tool[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.bg-gray[_ngcontent-%COMP%] {\n  background: #eeeeee;\n}\n.verti-timeline[_ngcontent-%COMP%] {\n  border-left: 3px dashed #f6f6f6;\n  margin: 0 10px;\n}\n.event-list[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 0 25px 30px;\n}\n.event-timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -9px;\n  top: 0;\n  z-index: 9;\n  font-size: 16px;\n}\n.custom-media-body[_ngcontent-%COMP%] {\n  background: #eee;\n  padding: 5px;\n  border-radius: 3px;\n}\n.top-header-c[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 12px;\n  border-bottom: 1px solid #ffffff;\n}\n.custom-comment[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.comment-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px;\n  box-shadow: 0px 0px 9px #ddd;\n}\n.comment-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.comment-head[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.comment-head[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.custom-comment[_ngcontent-%COMP%]    > perfect-scrollbar[_ngcontent-%COMP%] {\n  height: calc(100% - 37px) !important;\n  padding: 15px 8px 8px !important;\n}\nng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  min-height: 27px !important;\n}\nng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n  height: 27px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcXVlc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXGZvbnRzXFxfZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGFwcC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3BlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvQG5nLXNlbGVjdC9uZy1zZWxlY3QvdGhlbWVzL2RlZmF1bHQudGhlbWUuY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF90b3BiYXIuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXHNjc3NcXGN1c3RvbVxcc3RydWN0dXJlXFxfcGFnZS1oZWFkLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHN0cnVjdHVyZVxcX2Zvb3Rlci5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF9yaWdodC1zaWRlYmFyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcYm9vdHN0cmFwXFxzY3NzXFxtaXhpbnNcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF92ZXJ0aWNhbC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF9ob3Jpem9udGFsLW5hdi5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcc2Nzc1xcY3VzdG9tXFxzdHJ1Y3R1cmVcXF9sYXlvdXRzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHBsdWdpbnNcXF9jdXN0b20tc2Nyb2xsYmFyLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzY3NzXFxjdXN0b21cXHBhZ2VzXFxfYXV0aGVudGljYXRpb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJUiwrRkFBQTtBQ0pSOzs7Ozs7O0NBQUE7QUNBQTs7RUFFRTtBQUNGO0VBQ0UsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUVBOztFQUVFO0FBQ0Y7RUFDRSxhQUFhO0VBQ2IsVUFBVTtFQUNWLDJEQUEyRDtFQUMzRCxtRUFBbUU7RUFDbkUsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDViwyREFBMkQ7RUFDM0QsbUVBQW1FO0VBQ25FLFdBQVc7RUFDWCxtREFBbUQ7RUFDbkQsUUFBUTtFQUNSLG1DQUFtQztFQUNuQyxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxjQUFjO0VBQ2QsNkJBQTZCO0FBQy9CO0FBRUE7Ozs7OztFQU1FLFlBQVk7QUFDZDtBQUVBOzs7Ozs7RUFNRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7O0VBRUU7QUFDRjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0RBQStEO0VBQy9ELHVFQUF1RTtFQUN2RSxXQUFXO0VBQ1gsMkNBQTJDO0VBQzNDLFdBQVc7RUFDWCxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCxzRUFBc0U7RUFDdEUsVUFBVTtFQUNWLDBDQUEwQztFQUMxQyxVQUFVO0VBQ1YsbUNBQW1DO0VBQ25DLGtCQUFrQjtBQUNwQjtBQUVBOzs7RUFHRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkO0FBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7QUFFQSxnQkFBZ0I7QUFDaEI7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0FDbkhBLGlEQUFpRCxlQUFlLENBQUMsaUNBQWlDO0FBQUMsdURBQXVELGVBQWU7QUFBQywyREFBMkQsUUFBUSxDQUFDLHlDQUF5QyxDQUFDLHNCQUFzQjtBQUFDLGlFQUFpRSx5Q0FBeUM7QUFBQyxrRUFBa0UsNEJBQTRCLENBQUMsMkJBQTJCO0FBQUMsK0RBQStELHlCQUF5QixDQUFDLHdCQUF3QjtBQUFDLHlFQUF5RSxvQkFBb0IsQ0FBQywwRUFBMEU7QUFBQyxtREFBbUQsd0JBQXdCO0FBQUMseUNBQXlDLFlBQVk7QUFBQyxnQ0FBZ0MsVUFBVSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxrQkFBa0I7QUFBQyxzQ0FBc0MsbUNBQW1DO0FBQUMsb0RBQW9ELGtCQUFrQixDQUFDLGlCQUFpQjtBQUFDLGdFQUFnRSxrQkFBa0IsQ0FBQyxjQUFjO0FBQUMsb0VBQW9FLFVBQVU7QUFBQyxpREFBaUQsV0FBVztBQUFDLCtFQUErRSxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQjtBQUFDLDJGQUEyRixrQkFBa0IsQ0FBQyxpQkFBaUI7QUFBQyxvR0FBb0csd0JBQXdCLENBQUMsd0JBQXdCO0FBQUMsb0hBQW9ILGFBQWE7QUFBQyx1RUFBdUUsZUFBZSxDQUFDLGdCQUFnQjtBQUFDLG1GQUFtRixpQkFBaUIsQ0FBQyxjQUFjO0FBQUMsaUZBQWlGLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0I7QUFBQyw2RkFBNkYsY0FBYyxDQUFDLGVBQWU7QUFBQyxtR0FBbUcsd0JBQXdCO0FBQUMsbUhBQW1ILGdCQUFnQjtBQUFDLCtIQUErSCxjQUFjLENBQUMsaUJBQWlCO0FBQUMsaUdBQWlHLG9CQUFvQixDQUFDLGVBQWU7QUFBQyxnR0FBZ0csb0JBQW9CLENBQUMsZUFBZTtBQUFDLHNHQUFzRyx3QkFBd0I7QUFBQyxxR0FBcUcsOEJBQThCO0FBQUMsaUhBQWlILDZCQUE2QixDQUFDLGlCQUFpQjtBQUFDLHNHQUFzRyw2QkFBNkI7QUFBQyxrSEFBa0gsYUFBYSxDQUFDLDhCQUE4QjtBQUFDLGlGQUFpRixtQkFBbUI7QUFBQyw2RkFBNkYsbUJBQW1CO0FBQUMsdUZBQXVGLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0I7QUFBQyxtR0FBbUcsaUJBQWlCLENBQUMsY0FBYztBQUFDLDZCQUE2QixVQUFVO0FBQUMsNkNBQTZDLGFBQWE7QUFBQyw0QkFBNEIsbUJBQW1CO0FBQUMsd0NBQXdDLG1CQUFtQjtBQUFDLDZCQUE2QixVQUFVLENBQUMsaUJBQWlCO0FBQUMseUNBQXlDLGdCQUFnQixDQUFDLGVBQWU7QUFBQyw2Q0FBNkMscUJBQXFCO0FBQUMsdUNBQXVDLHlDQUF5QyxDQUFDLGtCQUFrQixDQUFDLDBCQUEwQjtBQUFDLG1CQUFtQixxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxtQ0FBbUMsQ0FBQyxNQUFNO0FBQUMsb0NBQW9DLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyw2QkFBNkIsQ0FBQyx3QkFBd0IsQ0FBQyxlQUFlO0FBQUMsbUZBQW1GLDhCQUE4QixDQUFDLDZCQUE2QjtBQUFDLGlDQUFpQyxXQUFXLENBQUMsMkJBQTJCLENBQUMsMEJBQTBCLENBQUMsMkJBQTJCLENBQUMsa0JBQWtCO0FBQUMsaUZBQWlGLDJCQUEyQixDQUFDLDBCQUEwQjtBQUFDLHVDQUF1Qyw0QkFBNEIsQ0FBQyxlQUFlO0FBQUMsdUNBQXVDLHlCQUF5QixDQUFDLGVBQWU7QUFBQyx5REFBeUQsd0JBQWdCLENBQWhCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyxzQkFBc0IsQ0FBQyxjQUFjO0FBQUMsNEVBQTRFLGNBQWM7QUFBQywwRUFBMEUsd0JBQXdCO0FBQUMseUtBQXlLLHdCQUF3QixDQUFDLGVBQWU7QUFBQyx1REFBdUQscUJBQXFCLENBQUMsc0JBQXNCLENBQUMsZ0JBQWdCO0FBQUMscUtBQXFLLFVBQVUsQ0FBQyx3QkFBd0I7QUFBQyx1TUFBdU0sZUFBZTtBQUFDLHdFQUF3RSx3QkFBd0IsQ0FBQyxVQUFVO0FBQUMsMEVBQTBFLFVBQVU7QUFBQyx1RUFBdUUsaUJBQWlCO0FBQUMsbUZBQW1GLGtCQUFrQixDQUFDLGNBQWM7QUFBQyxxRUFBcUUsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUI7QUFBQyxpRkFBaUYsZ0JBQWdCLENBQUMsZUFBZTtBQUFDLCtCQUErQixhQUFhLENBQUMsZ0JBQWdCO0FDSTE0TztFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0VBQ0EseUJDZ0dLO0VEL0ZMLG1EQzZTVztBTnBTYjtBS05BO0VBQ0UsYUFBQTtFQUVBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUNPYztFRE5kLDZCQUFBO0FMU0Y7QUtOSTtFQUNFLHlCQ3FESztBTjdDWDtBS0hBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUNxQnVCO0FOZnpCO0FLSEE7RUFDRSxpQkFBQTtBTE1GO0FLSkU7RUFDRSxhQUFBO0FMTUo7QUtGQTtFQUNFLGFBQUE7QUxLRjtBS0ZBLFdBQUE7QUFFQTtFQUNFLHlCQUFBO0FMSUY7QUtGRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ3RCZTtFRHVCZixnQkFBQTtFQUNBLG1CQUFBO0FMSUo7QUtERTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsY0NhTztBTlZYO0FLSUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FMREo7QUtHSTtFQUNFLGNDRUs7QU5IWDtBS01BO0VBQ0U7SUFDRSxXQUFBO0VMSEY7O0VLT0U7SUFDRSxhQUFBO0VMSko7RUtPRTtJQUNFLHFCQUFBO0VMTEo7QUFDRjtBS1NBO0VBRUUsK0JBQUE7QUxSRjtBS1dBO0VBQ0UsWUNsRmM7RURtRmQsMkJBQUE7RUFDQSxXQ2xDTTtFRG1DTixTQUFBO0VBQ0Esa0JBQUE7QUxSRjtBS1VFO0VBQ0UsY0N2RmdCO0FOK0VwQjtBS1lBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkMzQ1M7RUQ0Q1QsWUFBQTtBTFRGO0FLYUU7RUFDRSxlQUFBO0VBQ0EsV0NyREk7QU4yQ1I7QUthRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FMWEo7QUtnQkU7RUFDRSxxQkFBQTtBTGJKO0FLZUk7RUFDRSx5QkNqRUs7QU5vRFg7QUttQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQzVFUztBTjREWDtBS2tCRTtFQUNFLFlBQUE7QUxoQko7QUttQkU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FMakJKO0FLb0JFO0VBQ0UscUJDOUZPO0FONEVYO0FLeUJJO0VBQ0UsWUFBQTtBTHRCTjtBSzRCRTtFQUNFLHlCQzVKYTtBTm1JakI7QUs4Qk07RUFDRSwyQ0FBQTtBTDVCUjtBS2dDSTtFQUNFLG9DQUFBO0FMOUJOO0FLa0NFO0VBQ0UsY0MzS3FCO0FOMkl6QjtBS2tDSTtFQUNFLGNDOUttQjtBTjhJekI7QUtvQ0U7RUFDRSwyQ0FBQTtBTGxDSjtBS3NDSTtFQUNFLGNDeExtQjtBTm9KekI7QUt3Q0U7RUFDRSxhQUFBO0FMdENKO0FLeUNFO0VBQ0UsY0FBQTtBTHZDSjtBSzJDSTtFQUNFLDJDQUFBO0VBQ0EsV0MzSkU7QU5rSFI7QUs0Q0k7O0VBRUUsK0JBQUE7QUwxQ047QUtnREU7RUFDRSxtQkNqT2M7QU5vTGxCO0FLZ0RFO0VBQ0UsYUFBQTtBTDlDSjtBS2lERTtFQUNFLGNBQUE7QUwvQ0o7QUttREE7RUFFSTtJQUNFLGdCQUFBO0VMakRKO0VLbURJO0lBQ0UscUJBQUE7SUFDQSxzQkFBQTtFTGpETjtBQUNGO0FLc0RBO0VBQ0U7SUFDRSxhQUFBO0VMcERGO0FBQ0Y7QUt3REU7RUFDRSx5QkNyUGE7QU4rTGpCO0FLMkRNO0VBQ0UsMkNBQUE7QUx6RFI7QUs2REk7RUFDRSxvQ0FBQTtBTDNETjtBSytERTtFQUNFLGNDcFFxQjtBTnVNekI7QUsrREk7RUFDRSxjQ3ZRbUI7QU4wTXpCO0FLaUVFO0VBQ0UsMkNBQUE7QUwvREo7QUttRUk7RUFDRSxjQ2pSbUI7QU5nTnpCO0FLcUVFO0VBQ0UsYUFBQTtBTG5FSjtBS3NFRTtFQUNFLGNBQUE7QUxwRUo7QUt3RUk7RUFDRSwyQ0FBQTtFQUNBLFdDcFBFO0FOOEtSO0FLeUVJOztFQUVFLCtCQUFBO0FMdkVOO0FLNkVFO0VBQ0UsbUJDMVRjO0FOZ1BsQjtBSzZFRTtFQUNFLGFBQUE7QUwzRUo7QUs4RUU7RUFDRSxjQUFBO0FMNUVKO0FLZ0ZBO0VBRUk7SUFDRSxnQkFBQTtFTDlFSjtFS2dGSTtJQUNFLHFCQUFBO0lBQ0Esc0JBQUE7RUw5RU47QUFDRjtBS21GQTtFQUNFO0lBQ0UsYUFBQTtFTGpGRjtBQUNGO0FLcUZFO0VBQ0UsV0FBQTtBTG5GSjtBS3NGRTtFQUNFLGdCQ3ZWWTtFRHlWWiwrQkFBQTtBTHJGSjtBS3lGQTtFQUVJO0lBQ0UsZ0JBQUE7RUx2Rko7QUFDRjtBT2pTQTtFQUNJLG9CRGdTZ0I7QU5HcEI7QU9qU0k7RUFDSSw2QkFBQTtFQUNBLFVBQUE7QVBtU1I7QU9oU0k7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QVBrU1I7QVE3U0E7RUFDSSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjRmdDVztFRS9CWCxXQUFBO0VBQ0EsWUY0Qlk7RUUzQloseUJGNEJRO0FOb1JaO0FRN1NBO0VBQ0k7SUFDSSxPQUFBO0VSZ1ROO0FBQ0Y7QVEzU0k7RUFDSSxVRlZrQjtBTnVUMUI7QVF4U0k7RUFDSSxrQkFBQTtBUjJTUjtBU3JVQTtFQUNJLHNCSHdFSTtFR3ZFSix5RUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxZSHFDYTtFR3BDYixhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QVR3VUo7QVN0VUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxjSHlERztFR3hESCxrQkFBQTtFQUNBLGtCQUFBO0FUd1VSO0FTdFVRO0VBQ0kseUJBQUE7QVR3VVo7QVNsVUE7RUFDSSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QVRxVUo7QVNqVUk7RUFDSSxRQUFBO0FUb1VSO0FTbFVJO0VBQ0ksY0FBQTtBVG9VUjtBVTdTSTtFRGxCQTtJQUNJLGNBQUE7RVRtVU47RVNsVU07SUFDSSx1QkFBQTtFVG9VVjtBQUNGO0FXM1hBO0VBQ0UsU0FBQTtBWDZYRjtBVzNYRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FYNlhKO0FXMVhFO0VBQ0UsYUFBQTtBWDRYSjtBVzFYSTtFQUNFLGFBQUE7QVg0WE47QVd6WEk7RUFDRSxjQUFBO0FYMlhOO0FXdlhFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7QVh5WEo7QVdyWEE7RUFDRSxZTHRCYztFS3VCZCxhQUFBO0VBQ0EsbUJMOUJXO0VLK0JYLFNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNMZGM7RUtlZCxtREw4UVc7QU4wR2I7QVdyWEE7RUFDRSxrQkxqQ2M7RUtrQ2QsZ0JBQUE7QVh3WEY7QVd0WEU7RUFDRSx5QkFBQTtFQUNBLGdCTHhCWTtBTmdaaEI7QVdwWEE7RUFDRSxzQkFBQTtBWHVYRjtBV25YTTtFQUNFLDBCQUFBO0FYcVhSO0FXL1dJO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QVhpWE47QVczV007RUFDRSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxjTDFFa0I7RUsyRWxCLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FYNldSO0FXM1dRO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0xwRnFCO0VLcUZyQixvQkFBQTtBWDZXVjtBVzFXUTtFQUNFLGNMeEZzQjtBTm9jaEM7QVcxV1U7RUFDRSxjTDNGb0I7QU51Y2hDO0FXdldNO0VBQ0UsZUFBQTtBWHlXUjtBV3RXTTtFQUNFLFVBQUE7QVh3V1I7QVdyV1U7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxjTDdHa0I7QU5vZDlCO0FXcFdVO0VBQ0UsVUFBQTtBWHNXWjtBV25XYztFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7QVhxV2hCO0FXM1ZBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNMdEk2QjtFS3VJN0IsZ0JMbkZxQjtBTmlidkI7QVc1VkE7RUFDRSwyQkFBQTtBWCtWRjtBVzVWQTtFQUNFLHlCQUFBO0FYK1ZGO0FXN1ZFO0VBQ0UseUJBQUE7QVgrVko7QVc3Vkk7RUFDRSx5QkFBQTtBWCtWTjtBVzNWRTtFQUNFLHlCQUFBO0FYNlZKO0FXelZBO0VBQ0U7SUFDRSxhQUFBO0VYNFZGOztFV3pWQTtJQUNFLHlCQUFBO0VYNFZGOztFV3hWRTtJQUNFLGNBQUE7RVgyVko7QUFDRjtBV3JWRTtFQUNFLGlCTDVLc0I7QU5tZ0IxQjtBV3BWRTtFQUNFLHNCQUFBO0FYc1ZKO0FXbFZJO0VBQ0UsYUFBQTtBWG9WTjtBV2pWSTtFQUNFLGNBQUE7QVhtVk47QVc5VUU7RUFXRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBWHNVSjtBV2hWSTtFQUNFLGlCQUFBO0FYa1ZOO0FXaFZNO0VBQ0UsNEJBQUE7QVhrVlI7QVcxVUk7O0VBRUUsNEJBQUE7QVg0VU47QVd6VUk7RUFDRSx3QkFBQTtBWDJVTjtBV3hVSTtFQUNFLG9CQUFBO0FYMFVOO0FXclVNOzs7RUFHRSx3QkFBQTtBWHVVUjtBV3BVTTtFQUNFLDBCQUFBO0FYc1VSO0FXbFVRO0VBQ0UsYUFBQTtBWG9VVjtBVy9UUTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QVhpVVY7QVcvVFU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QVhpVVo7QVcvVFk7RUFHRSxjTDVQa0I7QU4yakJoQztBVzVUWTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QVg4VGQ7QVczVFk7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QVg2VGQ7QVd4VFk7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0wvS1A7RUtnTE8sNEJBQUE7RUFDQSxnQkFBQTtBWDBUZDtBV3hUYztFQUNFLGNMcExUO0FOOGVQO0FXdlRjO0VBQ0UsZUFBQTtBWHlUaEI7QVdyVFk7RUFDRSxjQUFBO0VBQ0EsVUwxUlk7RUsyUlosa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxnREFBQTtBWHVUZDtBV3JUYztFQUNFLGdEQUFBO0FYdVRoQjtBV3BUYztFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0wvU2M7QU5xbUI5QjtBV3BUZ0I7RUFDRSxjTGhUYztBTnNtQmhDO0FXL1NRO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EseUJML1RHO0FOZ25CYjtBVzdTYztFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBWCtTaEI7QVcxU2M7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QVg0U2hCO0FXdFNZO0VBQ0UsY0xsUkg7QU4wakJYO0FXOVJFO0VBQ0UsbUJMeFZjO0FOeW5CbEI7QVczUlE7RUFDRSxjTDlWcUI7QU4ybkIvQjtBVzNSVTtFQUNFLGNML1Z3QjtBTjRuQnBDO0FXMVJVO0VBQ0UsY0xsV3lCO0FOOG5CckM7QVcxUlk7RUFDRSxjTHJXdUI7QU5pb0JyQztBV3JSWTtFQUNFLGNML1dxQjtBTnNvQm5DO0FXclJjO0VBQ0UsY0xoWHFCO0FOdW9CckM7QVduUWM7RUFDRSxtQkFBQTtFQUNBLGNMdFlxQjtBTjJvQnJDO0FXblFnQjtFQUNFLGNMelltQjtBTjhvQnJDO0FXaFFnQjtFQUNFLGNMalppQjtBTm1wQm5DO0FXaFFrQjtFQUNFLGNMbFppQjtBTm9wQnJDO0FXM1BVO0VBQ0UseUJMOVpNO0FOMnBCbEI7QVd2UFk7RUFDRSx5QkFBQTtBWHlQZDtBV3ZQYztFQUNFLHlCQUFBO0FYeVBoQjtBV2hQRTtFQUNFLHlCQUFBO0FYa1BKO0FXaFBJO0VBQ0UseUJBQUE7QVhrUE47QVcvT0k7RUFDRSx5QkFBQTtBWGlQTjtBVy9PTTtFQUNFLHlCQUFBO0FYaVBSO0FXNU9FO0VBQ0UsY0wvYmdDO0FONnFCcEM7QVd6T0U7RUFDRSx5QkFBQTtBWDRPSjtBV3JPRTtFQUNFLFlMcGRlO0FONHJCbkI7QVdyT0U7RUFDRSxZTHhkZTtFS3lkZixrQkFBQTtBWHVPSjtBV3JPSTs7RUFFRSx3QkFBQTtBWHVPTjtBV25PRTtFQUNFLGtCTGxlZTtBTnVzQm5CO0FXbE9FO0VBQ0UsV0x0ZWU7QU4wc0JuQjtBVy9OTTtFQUNFLHlCQUFBO0FYaU9SO0FXN05RO0VBQ0UsY0FBQTtBWCtOVjtBVzFOUTtFQUNFLG9CQUFBO0FYNE5WO0FXck5JO0VBQ0UsaUJMaGdCb0I7QU51dEIxQjtBV25OTTtFQUNFLGdCQUFBO0FYcU5SO0FXaE5jO0VBQ0UscUJBQUE7QVhrTmhCO0FXMU1JO0VBQ0UsVUxwaEJvQjtBTmd1QjFCO0FXcE1FO0VBQ0UseUJMamNHO0FOd29CUDtBV3BNRTtFQUNFLHlCTHJjRztBTjJvQlA7QVdwTUk7RUFDRSxhQUFBO0FYc01OO0FXbk1JO0VBQ0UsY0FBQTtBWHFNTjtBV2pNRTtFQUNFLHNCQUFBO0FYbU1KO0FXak1JOztFQUVFLHNCQUFBO0FYbU1OO0FXNUxRO0VBQ0UsK0JBQUE7QVg4TFY7QVczTFE7RUFDRSwrQkFBQTtBWDZMVjtBVzNMVTtFQUNFLCtCQUFBO0FYNkxaO0FXekxZO0VBQ0Usb0NBQUE7QVgyTGQ7QVdwTFk7RUFDRSwrQkFBQTtBWHNMZDtBV3pLWTtFQUNFLHlCQUFBO0FYMktkO0FXbktjO0VBQ0UseUJBQUE7QVhxS2hCO0FZbnhCQTtFQUNFLGdCTnVDVTtFTXRDVix5QkFBQTtFQUNBLG1ETmlUVztFTWhUWCxnQk5tQmM7RU1sQmQsZUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBWnN4QkY7QVlweEJFO0VBQ0UsU0FBQTtFQUNBLFVBQUE7QVpzeEJKO0FZanhCSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY05qQm9CO0FOb3lCMUI7QVlqeEJNO0VBQ0UsZUFBQTtBWm14QlI7QVloeEJNO0VBRUUsY05yQnlCO0VNc0J6Qiw2QkFBQTtBWml4QlI7QVk3d0JJO0VBQ0UsY04vQm9CO0FOOHlCMUI7QVk3d0JNO0VBRUUsY04vQnlCO0FONnlCakM7QVl6d0JNO0VBQ0UsY05yQ3lCO0FOZ3pCakM7QVlyd0JRO0VBQ0UsY041Q3VCO0VNNkN2Qiw2QkFBQTtBWnV3QlY7QVVwd0JJO0VFUUE7O0lBRUUsY0FBQTtFWmd3Qko7QUFDRjtBVTN3Qkk7RUVvQk07SUFDRSxlQUFBO0VaMHZCVjtFWXB2QkU7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0Vac3ZCSjtFWS91Qk07SUFDRSxTQUFBO0lBQ0EsV0FBQTtFWml2QlI7RVk3dUJJO0lBQ0UsYUFBQTtJQUNBLGtDQUFBO0VaK3VCTjtFWTV1QlE7SUFDRSxXQUFBO0lBQ0EsMkNBQUE7SUFDQSxrQkFBQTtFWjh1QlY7RVl6dUJRO0lBQ0Usa0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLGFBQUE7RVoydUJWO0VZcnVCTTtJQUNFLGNBQUE7RVp1dUJSO0VZbHVCRTtJQUNFLGNBQUE7RVpvdUJKOztFWWh1QkE7SUFDRSxhQUFBO0VabXVCRjtBQUNGO0FZaHVCQTtFQUNFLHFCQUFBO0Faa3VCRjtBWWh1QkU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxpQkFBQTtFQUNBLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7QVprdUJKO0FVdHpCSTtFRThGUTtJQUNFLFdBQUE7SUFDQSxVQUFBO0VaNHRCWjtBQUNGO0FVN3pCSTtFRTJHRjtJQUNFLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0VacXRCRjtFWWx0Qkk7SUFDRSx1QkFBQTtFWm90Qk47RVkvc0JJO0lBQ0UsNkJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFWml0Qk47RVk5c0JJO0lBQ0Usa0JBQUE7SUFDQSw2QkFBQTtFWmd0Qk47RVk5c0JNO0lBRUUsY05uR0g7RU5rekJMO0VZenNCSTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtFWjJzQk47QUFDRjtBVXIyQkk7RUVtS0E7SUFDRSx5Qk50SEM7RU4yekJMO0VZanNCTTtJQUNFLCtCQUFBO0VabXNCUjtFWWpzQlE7SUFFRSwrQkFBQTtFWmtzQlY7RVk1ckJVO0lBQ0UsMENBQUE7RVo4ckJaO0FBQ0Y7QVluckJFO0VBQ0UseUJObkpHO0VNb0pILGdCQUFBO0FacXJCSjtBWWxyQkU7RUFDRSxhQUFBO0Fab3JCSjtBWWpyQkU7RUFDRSxjQUFBO0FabXJCSjtBWTlxQkk7RUFDRSwyQ0FBQTtFQUNBLFdOaE1FO0FOZzNCUjtBWTdxQkk7O0VBRUUsK0JBQUE7QVorcUJOO0FZM3FCRTtFQUNFLGNOdFBxQjtBTm02QnpCO0FZM3FCSTtFQUNFLGNOelBtQjtBTnM2QnpCO0FZdnFCTTtFQUNFLDBDQUFBO0FaeXFCUjtBWXJxQkk7RUFDRSxvQ0FBQTtBWnVxQk47QVlscUJJO0VBQ0UsY04zUW1CO0FOKzZCekI7QVVwNUJJO0VFcVBBO0lBQ0UseUJOeE1DO0VOMDJCTDtFWTlwQk07SUFDRSwrQkFBQTtFWmdxQlI7RVk5cEJRO0lBRUUsK0JBQUE7RVorcEJWO0VZenBCVTtJQUNFLDBDQUFBO0VaMnBCWjtBQUNGO0FhMTlCQTtFQUNJLHlCUHFEWTtBTnc2QmhCO0FhNTlCSTtFQUNJLHlCUHdPRTtFT3ZPRixpQlBpRGE7RU9oRGIsY0FBQTtFQUNBLG1EUDhTSztBTmdyQmI7QWEzOUJJO0VBQ0ksaUJQMkNhO0VPMUNiLGNBQUE7QWI2OUJSO0FhMTlCSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtBYjQ5QlI7QWF4OUJRO0VBQ0ksOEJBQUE7QWIwOUJaO0FhajlCSTtFQUNJLGVBQUE7QWJvOUJSO0FhbDlCSTtFQUNJLGlCUG1CYTtBTmk4QnJCO0FjeC9CQTs7O0VBR0UscUJBQUE7RUFDQSx3Q0FBQTtBZDIvQkY7QWN4L0JBO0VBQ0Usb0NBQUE7QWQyL0JGO0Fjdi9CQTtFQUNFLHNCQUFBO0FkMC9CRjtBY3YvQkE7O0VBRUUsd0NBQUE7QWQwL0JGO0FleGdDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QWYyZ0NKO0FBbGhDQTtFQUNHLDBCQUFBO0VBQ0EsZ0JBQUE7QUFxaENIO0FBbGhDQTtFQUNHLG1CTVFvQztFTlBwQyxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXFoQ0g7QUFsaENBO0VBQ0csZUFBQTtFQUNBLFVBQUE7RUFDQSxTTUh1QjtFTkl2QixZTUZvQztFTkdwQyx5QkFBQTtFQUNBLHlCQUFBO0FBcWhDSDtBQWxoQ0E7RUFDRyxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlNVm9DO0FOK2hDdkM7QUFsaENBO0VBQ0csYUFBQTtBQXFoQ0g7QUFsaENBO0VBQ0csY0FBQTtBQXFoQ0g7QUFsaENBO0VBQ0csdUNBQUE7QUFxaENIO0FBbGhDQTtFQUNHLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQXFoQ0g7QUFsaENBO0VBQ0csdUJBQUE7QUFxaENIO0FBbGhDQTtFQUNHLHlCQUFBO0VBRUEsZ0JBQUE7QUFvaENIO0FBN2dDQTtFQUNHLGNBQUE7QUFnaENIO0FBN2dDQTtFQUNHLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBZ2hDSDtBQTdnQ0E7RUFDRyx5Qk1rQ0k7RU5qQ0osV01JSztBTjRnQ1I7QUE3Z0NBO0VBQ0csY01FUTtBTjhnQ1g7QUE3Z0NBO0VBQ0cseUJNeUJJO0VOeEJKLFdNTEs7QU5xaENSO0FBN2dDQTtFQUNHLGNNUFE7QU51aENYO0FBN2dDQTtFQUNHLHlCTXVCSztFTnRCTCxXTWRLO0FOOGhDUjtBQTdnQ0E7RUFDRyxjTWhCUTtBTmdpQ1g7QUE3Z0NBO0VBQ0csWUFBQTtBQWdoQ0g7QUE3Z0NBO0VBQ0csWUFBQTtBQWdoQ0g7QUE3Z0NBO0VBQ0csV0FBQTtBQWdoQ0g7QUE1Z0NBO0VBRUcsWUFBQTtBQThnQ0g7QUEzZ0NBO0VBQ0csWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUE4Z0NIO0FBemdDQTtFQUNHLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQTRnQ0g7QUF6Z0NBO0VBQ0csWUFBQTtBQTRnQ0g7QUF6Z0NBO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBNGdDSDtBQXpnQ0E7RUFDRyxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQTRnQ0g7QUF6Z0NBO0VBQ0csb0NBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBNGdDSDtBQXZnQ0E7RUFDRyxXQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyxZQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyxXQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyx5QkFBQTtFQUNBLG1CQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyx1QkFBQTtBQTBnQ0g7QUF2Z0NBO0VBQ0csdUJBQUE7RUFDQSxhQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUEwZ0NIO0FBdmdDQTtFQUNHLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQTBnQ0g7QUF2Z0NBO0VBQ0csZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUEwZ0NIO0FBdmdDQTtFQUNHLGVBQUE7RUFDQSxpQkFBQTtBQTBnQ0g7QUF2Z0NBO0VBQ0csZUFBQTtBQTBnQ0g7QUF2Z0NBO0VBQ0csMEJBQUE7RUFDQSxVQUFBO0FBMGdDSDtBQXZnQ0E7RUFDRyx5Qk1oSEs7RU5pSEwsV01ySks7QU4rcENSO0FBdmdDQTtFQUNHLFdNekpLO0FObXFDUjtBQXZnQ0E7RUFDRyxvQ0FBQTtFQUNBLFdNOUpLO0FOd3FDUjtBQXZnQ0E7RUFDRyxXTWxLSztBTjRxQ1I7QUFwZ0NBO0VBQ0csdUJBQUE7QUF1Z0NIO0FBcGdDQTtFQUNHLDRCQUFBO0FBdWdDSDtBQXBnQ0E7RUFDRyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF1Z0NIO0FBcGdDQTtFQUVHLG9CQUFBO0FBc2dDSDtBQW5nQ0E7RUFDRyxTQUFBO0FBc2dDSDtBQW5nQ0E7RUFDRyw4QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtBQXNnQ0g7QUFuZ0NBO0VBQ0csOEJBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSx1QkFBQTtBQXNnQ0g7QUFuZ0NBO0VBQ0csOEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUFzZ0NIO0FBbmdDQTtFQUNHLFlBQUE7RUFDQSw4QkFBQTtBQXNnQ0g7QUFuZ0NBO0VBQ0cseUJBQUE7RUFDQSxtQkFBQTtBQXNnQ0g7QUFsZ0NBO0VBQ0csdUJBQUE7RUFDQSxnQkFBQTtBQXFnQ0g7QUFsZ0NBO0VBQ0csWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxVQUFBO0FBcWdDSDtBQWxnQ0E7RUFDRywwQkFBQTtBQXFnQ0g7QUFsZ0NBO0VBQ0csOEJBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FBcWdDSDtBQWxnQ0E7RUFDRyxXQUFBO0VBQ0EsWUFBQTtBQXFnQ0g7QUFsZ0NBO0VBQ0csWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcWdDSDtBQWxnQ0E7RUFDRyxZQUFBO0VBQ0EsZ0JBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLHlCQUFBO0FBcWdDSDtBQWxnQ0E7RUFDRyxjQUFBO0VBQ0EsZUFBQTtBQXFnQ0g7QUFsZ0NBO0VBQ0csdUJBQUE7QUFxZ0NIO0FBbGdDQTtFQUNHLFlBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7QUFvZ0NIO0FBamdDQTtFQUNHLFlBQUE7RUFFQSxZQUFBO0VBQ0Esa0JBQUE7QUFtZ0NIO0FBaGdDQTtFQUNHLDZDQUFBO0FBbWdDSDtBQWhnQ0E7RUFDRyxpREFBQTtFQUNBLDZDQUFBO0FBbWdDSDtBQWhnQ0E7RUFDRyxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBbWdDSDtBQS8vQkE7RUFDRywwQkFBQTtFQUNBLDJCQUFBO0FBa2dDSDtBQS8vQkE7RUFDRyx1QkFBQTtFQUNBLFlBQUE7QUFrZ0NIO0FBLy9CQTtFQUNHLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFrZ0NIO0FBNy9CQTtFQUNHLHlCQUFBO0VBQ0EsZUFBQTtBQWdnQ0g7QUE3L0JBO0VBRUcsMkNBQUE7RUFDQSxtQkFBQTtBQSsvQkg7QUE1L0JBO0VBQ0csYUFBQTtFQUNBLGtCQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxzQkFBQTtFQUNBLHFCQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxlQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyw2QkFBQTtFQUNBLDJCQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtBQSsvQkg7QUE1L0JBO0VBQ0csVUFBQTtFQUNBLGdCQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxZQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUErL0JIO0FBNS9CQTtFQUNHLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxnQ0FBQTtFQUNBLGNNdlpLO0FOczVDUjtBQTUvQkE7RUFDRyx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBKy9CSDtBQTUvQkE7RUFDRyxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUErL0JIO0FBNS9CQTtFQUNHLFlBQUE7QUErL0JIO0FBNS9CQTtFQUNHLHVCQUFBO0VBQ0EsZ0JBQUE7QUErL0JIO0FBNS9CQTtFQUdHLGVBQUE7RUFHQSw2QkFBQTtFQUNBLGtDQUFBO0FBMi9CSDtBQXgvQkE7RUFDRyxnQkFBQTtFQUNBLFdBQUE7QUEyL0JIO0FBdi9CQTtFQUNHLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUEwL0JIO0FBdi9CQTtFQUNHLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQTAvQkg7QUF2L0JBO0VBQ0csV0FBQTtFQUNBLGVBQUE7QUEwL0JIO0FBdi9CQTtFQUNHLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBMC9CSDtBQXYvQkE7RUFDRyxpQkFBQTtFQUNBLGNNbmVJO0FONjlDUDtBQXYvQkE7RUFFRyxjQUFBO0VBQ0EsaUJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLGlCQUFBO0VBQ0EsY005ZUk7QU51K0NQO0FBdC9CQTtFQUNHLGNBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLDhCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyw4QkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csb0NBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csMkJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLDhCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyxjTXpnQks7RU4wZ0JMLGlCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyx5QkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csOEJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLDhCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLHVCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyx1QkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csb0NBQUE7RUFDQSw2QkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csYUFBQTtFQUNBLHFCQUFBO0VBQ0EsOEJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csbUJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLCtCQUFBO0VBQ0EsY0FBQTtBQXkvQkg7QUF0L0JBO0VBQ0csa0JBQUE7RUFDQSxzQkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csa0JBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQXkvQkg7QUF0L0JBO0VBQ0csYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLFlBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyxlQUFBO0VBQ0EsaUJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLGVBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLG9DQUFBO0VBQ0EsZ0NBQUE7QUF5L0JIO0FBdC9CQTtFQUNHLDJCQUFBO0FBeS9CSDtBQXQvQkE7RUFDRyx1QkFBQTtBQXkvQkgiLCJmaWxlIjoicmVxdWVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG5UZW1wbGF0ZSBOYW1lOiBTa290ZSAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXG5BdXRob3I6IFRoZW1lc2JyYW5kXG5WZXJzaW9uOiAxLjAuMFxuV2Vic2l0ZTogaHR0cHM6Ly90aGVtZXNicmFuZC5jb20vXG5Db250YWN0OiB0aGVtZXNicmFuZEBnbWFpbC5jb21cbkZpbGU6IE1haW4gQ3NzIEZpbGVcbiovXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Qb3BwaW5zOjMwMCw0MDAsNTAwLDYwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCAnfnBlcmZlY3Qtc2Nyb2xsYmFyL2Nzcy9wZXJmZWN0LXNjcm9sbGJhci5jc3MnO1xuQGltcG9ydCBcIn5Abmctc2VsZWN0L25nLXNlbGVjdC90aGVtZXMvZGVmYXVsdC50aGVtZS5jc3NcIjtcbiNwYWdlLXRvcGJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRjODtcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMDMpO1xufVxuXG4ubmF2YmFyLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCBjYWxjKDI0cHggLyAyKSAwIDA7XG59XG4ubmF2YmFyLWhlYWRlciAuZHJvcGRvd24uc2hvdyAuaGVhZGVyLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xufVxuXG4ubmF2YmFyLWJyYW5kLWJveCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5sb2dvIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG4ubG9nbyAubG9nby1zbSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvLWxpZ2h0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyogU2VhcmNoICovXG4uYXBwLXNlYXJjaCB7XG4gIHBhZGRpbmc6IGNhbGMoMTJweCAvIDIpIDA7XG59XG4uYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDM4cHg7XG4gIHBhZGRpbmctbGVmdDogNDBweDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmOTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbi5hcHAtc2VhcmNoIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBsZWZ0OiAxM3B4O1xuICB0b3A6IDA7XG4gIGNvbG9yOiAjNzQ3ODhkO1xufVxuXG4ubWVnYW1lbnUtbGlzdCBsaSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNXB4IDBweDtcbn1cbi5tZWdhbWVudS1saXN0IGxpIGEge1xuICBjb2xvcjogIzQ5NTA1Nztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxuXG4gIC5sb2dvIHNwYW4ubG9nby1sZyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAubG9nbyBzcGFuLmxvZ28tc20ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxufVxuLnBhZ2UtY29udGVudCB7XG4gIHBhZGRpbmc6IGNhbGMoNTBweCkgMHB4IDBweCAwcHg7XG59XG5cbi5oZWFkZXItaXRlbSB7XG4gIGhlaWdodDogNTBweDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG4uaGVhZGVyLWl0ZW06aG92ZXIge1xuICBjb2xvcjogIzU1NWI2ZDtcbn1cblxuLmhlYWRlci1wcm9maWxlLXVzZXIge1xuICBoZWlnaHQ6IDM2cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xuICBwYWRkaW5nOiAzcHg7XG59XG5cbi5ub3RpLWljb24gaSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubm90aS1pY29uIC5iYWRnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5ub3RpZmljYXRpb24taXRlbSAubWVkaWEge1xuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG59XG4ubm90aWZpY2F0aW9uLWl0ZW0gLm1lZGlhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmRyb3Bkb3duLWljb24taXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE1cHggMCA5cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM3NDc4OGQ7XG59XG4uZHJvcGRvd24taWNvbi1pdGVtIGltZyB7XG4gIGhlaWdodDogMjRweDtcbn1cbi5kcm9wZG93bi1pY29uLWl0ZW0gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5kcm9wZG93bi1pY29uLWl0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICNlZmYyZjc7XG59XG5cbi5mdWxsc2NyZWVuLWVuYWJsZSBbZGF0YS10b2dnbGU9ZnVsbHNjcmVlbl0gLmJ4LWZ1bGxzY3JlZW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi7qi/XCI7XG59XG5cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gI3BhZ2UtdG9wYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duLnNob3cgLmhlYWRlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5hdmJhci1oZWFkZXIgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuaGVhZGVyLWl0ZW0ge1xuICBjb2xvcjogI2U5ZWNlZjtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmhlYWRlci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5oZWFkZXItcHJvZmlsZS11c2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5vdGktaWNvbiBpIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAubG9nby1saWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0MywgMjQ5LCAwLjA3KTtcbiAgY29sb3I6ICNmZmY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5hcHAtc2VhcmNoIHNwYW4sXG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5hcHAtc2VhcmNoIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgYmFja2dyb3VuZDogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXItaGVhZGVyIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAubmF2YmFyLWhlYWRlciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLm5hdmJhci1icmFuZC1ib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gI3BhZ2UtdG9wYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duLnNob3cgLmhlYWRlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5hdmJhci1oZWFkZXIgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuaGVhZGVyLWl0ZW0ge1xuICBjb2xvcjogI2U5ZWNlZjtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLmhlYWRlci1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5oZWFkZXItcHJvZmlsZS11c2VyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbn1cbmJvZHlbZGF0YS10b3BiYXI9ZGFya10gLm5vdGktaWNvbiBpIHtcbiAgY29sb3I6ICNlOWVjZWY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAubG9nby1saWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keVtkYXRhLXRvcGJhcj1kYXJrXSAuYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0MywgMjQ5LCAwLjA3KTtcbiAgY29sb3I6ICNmZmY7XG59XG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5hcHAtc2VhcmNoIHNwYW4sXG5ib2R5W2RhdGEtdG9wYmFyPWRhcmtdIC5hcHAtc2VhcmNoIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgYmFja2dyb3VuZDogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gLmxvZ28tbGlnaHQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXZiYXItaGVhZGVyIC5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuICAubmF2YmFyLWhlYWRlciAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIGxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgICByaWdodDogMTBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLm5hdmJhci1icmFuZC1ib3gge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLm5hdmJhci1icmFuZC1ib3gge1xuICB3aWR0aDogYXV0bztcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLnBhZ2UtY29udGVudCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBhZGRpbmc6IGNhbGMoNTVweCkgMHB4IDBweCAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdIC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gIH1cbn1cbi5wYWdlLXRpdGxlLWJveCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuLnBhZ2UtdGl0bGUtYm94IC5icmVhZGNydW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG59XG4ucGFnZS10aXRsZS1ib3ggaDQge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLmZvb3RlciB7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMjBweCBjYWxjKDI0cHggLyAyKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICM3NDc4OGQ7XG4gIGxlZnQ6IDI1MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyIHtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4udmVydGljYWwtY29sbHBzZWQgLmZvb3RlciB7XG4gIGxlZnQ6IDUwcHg7XG59XG5cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLmZvb3RlciB7XG4gIGxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCAyNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAxcHggMCAwIHJnYmEoMCwgMCwgMCwgMC4wMik7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLW91dDtcbiAgd2lkdGg6IDI4MHB4O1xuICB6LWluZGV4OiA5OTk5O1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgcmlnaHQ6IC0yOTBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG59XG4ucmlnaHQtYmFyIC5yaWdodC1iYXItdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NGM1NDtcbiAgaGVpZ2h0OiAyNHB4O1xuICB3aWR0aDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIGNvbG9yOiAjZWZmMmY3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5yaWdodC1iYXIgLnJpZ2h0LWJhci10b2dnbGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGI1NDVjO1xufVxuXG4ucmlnaHRiYXItb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDU4LCA2NCwgMC41NSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICB6LWluZGV4OiA5OTk4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLW91dDtcbn1cblxuLnJpZ2h0LWJhci1lbmFibGVkIC5yaWdodC1iYXIge1xuICByaWdodDogMDtcbn1cbi5yaWdodC1iYXItZW5hYmxlZCAucmlnaHRiYXItb3ZlcmxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnJpZ2h0LWJhciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgLnJpZ2h0LWJhciAuc2xpbXNjcm9sbC1tZW51IHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuLm1ldGlzbWVudSB7XG4gIG1hcmdpbjogMDtcbn1cbi5tZXRpc21lbnUgbGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWV0aXNtZW51IC5tbS1jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ubWV0aXNtZW51IC5tbS1jb2xsYXBzZTpub3QoLm1tLXNob3cpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5tZXRpc21lbnUgLm1tLWNvbGxhcHNlLm1tLXNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5tZXRpc21lbnUgLm1tLWNvbGxhcHNpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG59XG5cbi52ZXJ0aWNhbC1tZW51IHtcbiAgd2lkdGg6IDI1MHB4O1xuICB6LWluZGV4OiAxMDAxO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MHB4O1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMjUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubWFpbi1jb250ZW50IC5jb250ZW50IHtcbiAgcGFkZGluZzogMCAxNXB4IDEwcHggMTVweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuI3NpZGViYXItbWVudSB7XG4gIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XG59XG4jc2lkZWJhci1tZW51IC5tbS1hY3RpdmUgPiAuaGFzLWFycm93OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4jc2lkZWJhci1tZW51IC5oYXMtYXJyb3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIvOwhYBcIjtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgRGVzaWduIEljb25zXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xuICBmb250LXNpemU6IDFyZW07XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMC42MjVyZW0gMS41cmVtO1xuICBjb2xvcjogIzU0NWE2ZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xufVxuI3NpZGViYXItbWVudSB1bCBsaSBhIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMS43NXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuMTI1ZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNDA2MjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjN2Y4Mzg3O1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzgzYzQwO1xufVxuI3NpZGViYXItbWVudSB1bCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogIzM4M2M0MDtcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgLmJhZGdlIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuI3NpZGViYXItbWVudSB1bCBsaSB1bC5zdWItbWVudSB7XG4gIHBhZGRpbmc6IDA7XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIGEge1xuICBwYWRkaW5nOiAwLjRyZW0gMS41cmVtIDAuNHJlbSAzLjVyZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM1NDVhNmQ7XG59XG4jc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIHVsLnN1Yi1tZW51IHtcbiAgcGFkZGluZzogMDtcbn1cbiNzaWRlYmFyLW1lbnUgdWwgbGkgdWwuc3ViLW1lbnUgbGkgdWwuc3ViLW1lbnUgbGkgYSB7XG4gIHBhZGRpbmc6IDAuNHJlbSAxLjVyZW0gMC40cmVtIDQuNXJlbTtcbiAgZm9udC1zaXplOiAxMy41cHg7XG59XG5cbi5tZW51LXRpdGxlIHtcbiAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICM3ZjgzODc7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmJvZHkub3ZlcmZsb3ctaCB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm1tLWFjdGl2ZSB7XG4gIGNvbG9yOiAjNTU2ZWU2ICFpbXBvcnRhbnQ7XG59XG4ubW0tYWN0aXZlIC5hY3RpdmUge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuLm1tLWFjdGl2ZSAuYWN0aXZlIGkge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuLm1tLWFjdGl2ZSA+IGkge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnZlcnRpY2FsLW1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgYm9keS5zaWRlYmFyLWVuYWJsZSAudmVydGljYWwtbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG4udmVydGljYWwtY29sbHBzZWQgLm5hdmJhci1icmFuZC1ib3gge1xuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC5sb2dvIHNwYW4ubG9nby1sZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtY29sbHBzZWQgLmxvZ28gc3Bhbi5sb2dvLXNtIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDU7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgcGVyZmVjdC1zY3JvbGxiYXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSBwZXJmZWN0LXNjcm9sbGJhciAucHMge1xuICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51IC5zaW1wbGViYXItbWFzayxcbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAuc2ltcGxlYmFyLWNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgLnNpbXBsZWJhci1vZmZzZXQge1xuICBib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51IC5tZW51LXRpdGxlLFxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgLmJhZGdlLFxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgLmNvbGxhcHNlLmluIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgLm5hdi5jb2xsYXBzZSB7XG4gIGhlaWdodDogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgLmhhcy1hcnJvdzphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIHtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBtaW4taGVpZ2h0OiA1NXB4O1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYTpob3ZlciwgLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpID4gYTphY3RpdmUsIC52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzM4M2M0MDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEgaSB7XG4gIGZvbnQtc2l6ZTogMS40NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaSA+IGEgc3BhbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiBjYWxjKDE5MHB4ICsgNTBweCk7XG4gIGNvbG9yOiAjMDA3NGM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gYSBpIHtcbiAgY29sb3I6ICMwMDc0Yzg7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiBhIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsZWZ0OiA1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxOTBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwIHJnYmEoNTQsIDYxLCA3MSwgMC4xKTtcbn1cbi52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IHVsIHVsIHtcbiAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IDAgcmdiYSg1NCwgNjEsIDcxLCAwLjEpO1xufVxuLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwgYSB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOTBweDtcbiAgei1pbmRleDogNjtcbiAgY29sb3I6ICM1NDVhNmQ7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGk6aG92ZXIgPiB1bCBhOmhvdmVyIHtcbiAgY29sb3I6ICMzODNjNDA7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsIHVsIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIHotaW5kZXg6IDk5OTk7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsIHVsIGxpOmhvdmVyID4gdWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbGVmdDogMTkwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAtMzZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTkwcHg7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsIHVsIGxpID4gYSBzcGFuLnB1bGwtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDEycHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XG59XG4udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsIHVsIGxpLmFjdGl2ZSBhIHtcbiAgY29sb3I6ICNmOGY5ZmE7XG59XG5cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC52ZXJ0aWNhbC1tZW51IHtcbiAgYmFja2dyb3VuZDogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgYSB7XG4gIGNvbG9yOiAjYTZiMGNmO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gI3NpZGViYXItbWVudSB1bCBsaSBhIGkge1xuICBjb2xvcjogIzZhNzE4Nztcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gI3NpZGViYXItbWVudSB1bCBsaSBhOmhvdmVyIGkge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdICNzaWRlYmFyLW1lbnUgdWwgbGkgdWwuc3ViLW1lbnUgbGkgYSB7XG4gIGNvbG9yOiAjNzk4MjljO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gI3NpZGViYXItbWVudSB1bCBsaSB1bC5zdWItbWVudSBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICBiYWNrZ3JvdW5kOiAjMmUzNTQ4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gYSBpIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1kYXJrXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IHVsIGEge1xuICBjb2xvcjogIzc5ODI5Yztcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgPiB1bCA+IGxpOmhvdmVyID4gdWwgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsIHVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJhMzA0Mjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUgdWwgbGkubW0tYWN0aXZlIC5hY3RpdmUge1xuICBjb2xvcjogIzU1NmVlNiAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSB1bCBsaS5tbS1hY3RpdmUgLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICM1NTZlZTYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5tbS1hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gLm1tLWFjdGl2ZSA+IGkge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuYm9keVtkYXRhLXNpZGViYXI9ZGFya10gLm1tLWFjdGl2ZSAuYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5tbS1hY3RpdmUgLmFjdGl2ZSBpIHtcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWRhcmtdIC5tZW51LXRpdGxlIHtcbiAgY29sb3I6ICM2YTcxODc7XG59XG5cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLm1haW4tY29udGVudCB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdIC5uYXZiYXItYnJhbmQtYm94IHtcbiAgd2lkdGg6IDE2MHB4O1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gLnZlcnRpY2FsLW1lbnUge1xuICB3aWR0aDogMTYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdIC52ZXJ0aWNhbC1tZW51IC5oYXMtYXJyb3c6YWZ0ZXIsXG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAudmVydGljYWwtbWVudSAuYmFkZ2Uge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWxlZnQ6IDE2MHB4O1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gLmZvb3RlciB7XG4gIGxlZnQ6IDE2MHB4O1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0gI3NpZGViYXItbWVudSB1bCBsaS5tZW51LXRpdGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJlMzU0ODtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdICNzaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXSAjc2lkZWJhci1tZW51IHVsIGxpIHVsLnN1Yi1tZW51IGxpIGEge1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdLnZlcnRpY2FsLWNvbGxwc2VkIC5tYWluLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogNTBweDtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyLXNpemU9c21hbGxdLnZlcnRpY2FsLWNvbGxwc2VkIC52ZXJ0aWNhbC1tZW51ICNzaWRlYmFyLW1lbnUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuYm9keVtkYXRhLXNpZGViYXItc2l6ZT1zbWFsbF0udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSA+IHVsID4gbGkgPiBhIGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPXNtYWxsXS52ZXJ0aWNhbC1jb2xscHNlZCAuZm9vdGVyIHtcbiAgbGVmdDogNTBweDtcbn1cblxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLnZlcnRpY2FsLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLm5hdmJhci1icmFuZC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLm5hdmJhci1icmFuZC1ib3ggLmxvZ28tZGFyayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAubmF2YmFyLWJyYW5kLWJveCAubG9nby1saWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gLm1tLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAubW0tYWN0aXZlID4gaSxcbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdIC5tbS1hY3RpdmUgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXSAjc2lkZWJhci1tZW51IHVsIGxpLm1lbnUtdGl0bGUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0gI3NpZGViYXItbWVudSB1bCBsaSBhIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdICNzaWRlYmFyLW1lbnUgdWwgbGkgYSBpIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdICNzaWRlYmFyLW1lbnUgdWwgbGkgYS53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbmJvZHlbZGF0YS1zaWRlYmFyPWNvbG9yZWRdICNzaWRlYmFyLW1lbnUgdWwgbGkgdWwuc3ViLW1lbnUgbGkgYSB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5ib2R5W2RhdGEtc2lkZWJhcj1jb2xvcmVkXS52ZXJ0aWNhbC1jb2xscHNlZCAudmVydGljYWwtbWVudSAjc2lkZWJhci1tZW51ID4gdWwgPiBsaTpob3ZlciA+IGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YWQyO1xufVxuYm9keVtkYXRhLXNpZGViYXI9Y29sb3JlZF0udmVydGljYWwtY29sbHBzZWQgLnZlcnRpY2FsLW1lbnUgI3NpZGViYXItbWVudSB1bCBsaS5tbS1hY3RpdmUgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNTU2ZWU2ICFpbXBvcnRhbnQ7XG59XG5cbi50b3BuYXYge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwIGNhbGMoMjRweCAvIDIpO1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi50b3BuYXYgLnRvcG5hdi1tZW51IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMXJlbSAxLjNyZW07XG4gIGNvbG9yOiAjNTQ1YTZkO1xufVxuLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsgaSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmZvY3VzLCAudG9wbmF2IC5uYXZiYXItbmF2IC5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjNTU2ZWU2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi50b3BuYXYgLm5hdmJhci1uYXYgLmRyb3Bkb3duLWl0ZW0ge1xuICBjb2xvcjogIzU0NWE2ZDtcbn1cbi50b3BuYXYgLm5hdmJhci1uYXYgLmRyb3Bkb3duLWl0ZW0uYWN0aXZlLCAudG9wbmF2IC5uYXZiYXItbmF2IC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM1NTZlZTY7XG59XG4udG9wbmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbSAubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICM1NTZlZTY7XG59XG4udG9wbmF2IC5uYXZiYXItbmF2IC5kcm9wZG93bi5hY3RpdmUgPiBhIHtcbiAgY29sb3I6ICM1NTZlZTY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLmNvbnRhaW5lci1mbHVpZCxcbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF0gLm5hdmJhci1oZWFkZXIge1xuICAgIG1heC13aWR0aDogODUlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06Zmlyc3Qtb2YtdHlwZSAubmF2LWxpbmsge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAudG9wbmF2IC5kcm9wZG93bi1pdGVtIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgIG1pbi13aWR0aDogMTgwcHg7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24ubWVnYS1kcm9wZG93biAubWVnYS1kcm9wZG93bi1tZW51IHtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IGF1dG87XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAuMjVyZW0gMC4yNXJlbTtcbiAgfVxuICAudG9wbmF2IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSAuYXJyb3ctZG93bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IC5kcm9wZG93biAuZHJvcGRvd24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAxMDAlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd246aG92ZXIgPiAuZHJvcGRvd24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd246aG92ZXIgPiAuZHJvcGRvd24tbWVudSA+IC5kcm9wZG93bjpob3ZlciA+IC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5uYXZiYXItdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uYXJyb3ctZG93biB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hcnJvdy1kb3duOmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMCAxcHggMXB4O1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDAuNGVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHJpZ2h0OiA1cHg7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICB3aWR0aDogMC40ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLnRvcG5hdi1tZW51IC5uYXZiYXItbmF2IGxpOmxhc3Qtb2YtdHlwZSAuZHJvcGRvd24gLmRyb3Bkb3duLW1lbnUge1xuICAgIHJpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAudG9wbmF2IHtcbiAgICBtYXgtaGVpZ2h0OiAzNjBweDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4xcmVtO1xuICB9XG4gIC50b3BuYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIH1cbiAgLnRvcG5hdiAuZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuICAudG9wbmF2IC5kcm9wZG93biAuZHJvcGRvd24taXRlbS5hY3RpdmUsIC50b3BuYXYgLmRyb3Bkb3duIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSB7XG4gICAgY29sb3I6ICMwMDc0Yzg7XG4gIH1cbiAgLnRvcG5hdiAuYXJyb3ctZG93bjo6YWZ0ZXIge1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9bGlnaHRdIC50b3BuYXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yzg7XG4gIH1cbiAgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1saWdodF0gLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbmsge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1saWdodF0gLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9bGlnaHRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xuICB9XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9bGlnaHRdIC50b3BuYXYgLm5hdmJhci1uYXYgPiAuZHJvcGRvd24uYWN0aXZlID4gYSB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xuICB9XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdICNwYWdlLXRvcGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yzg7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5sb2dvLWRhcmsge1xuICBkaXNwbGF5OiBub25lO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAubG9nby1saWdodCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAuYXBwLXNlYXJjaCAuZm9ybS1jb250cm9sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0MywgMjQ5LCAwLjA3KTtcbiAgY29sb3I6ICNmZmY7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5hcHAtc2VhcmNoIHNwYW4sXG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5hcHAtc2VhcmNoIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5oZWFkZXItaXRlbSB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAuaGVhZGVyLWl0ZW06aG92ZXIge1xuICBjb2xvcjogI2U5ZWNlZjtcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLm5hdmJhci1oZWFkZXIgLmRyb3Bkb3duLnNob3cgLmhlYWRlci1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAubmF2YmFyLWhlYWRlciAud2F2ZXMtZWZmZWN0IC53YXZlcy1yaXBwbGUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG59XG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC5ub3RpLWljb24gaSB7XG4gIGNvbG9yOiAjZTllY2VmO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLnRvcG5hdiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRjODtcbiAgfVxuICBib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtdG9wYmFyPWNvbG9yZWRdIC50b3BuYXYgLm5hdmJhci1uYXYgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICB9XG4gIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbms6Zm9jdXMsIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS10b3BiYXI9Y29sb3JlZF0gLnRvcG5hdiAubmF2YmFyLW5hdiAubmF2LWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIH1cbiAgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLXRvcGJhcj1jb2xvcmVkXSAudG9wbmF2IC5uYXZiYXItbmF2ID4gLmRyb3Bkb3duLmFjdGl2ZSA+IGEge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSkgIWltcG9ydGFudDtcbiAgfVxufVxuXG5ib2R5W2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ViZWJmNDtcbn1cbmJvZHlbZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gI2xheW91dC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmYjtcbiAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTgsIDM4LCA2MywgMC4wMyk7XG59XG5ib2R5W2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdICNwYWdlLXRvcGJhciB7XG4gIG1heC13aWR0aDogMTMwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbmJvZHlbZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gLmZvb3RlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXgtd2lkdGg6IGNhbGMoMTMwMHB4IC0gMjUwcHgpO1xufVxuYm9keVtkYXRhLWxheW91dC1zaXplPWJveGVkXS52ZXJ0aWNhbC1jb2xscHNlZCAuZm9vdGVyIHtcbiAgbWF4LXdpZHRoOiBjYWxjKDEzMDBweCAtIDUwcHgpO1xufVxuXG5ib2R5W2RhdGEtbGF5b3V0PWhvcml6b250YWxdW2RhdGEtbGF5b3V0LXNpemU9Ym94ZWRdICNwYWdlLXRvcGJhciwgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLWxheW91dC1zaXplPWJveGVkXSAjbGF5b3V0LXdyYXBwZXIsIGJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gLmZvb3RlciB7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cbmJvZHlbZGF0YS1sYXlvdXQ9aG9yaXpvbnRhbF1bZGF0YS1sYXlvdXQtc2l6ZT1ib3hlZF0gLmNvbnRhaW5lci1mbHVpZCwgYm9keVtkYXRhLWxheW91dD1ob3Jpem9udGFsXVtkYXRhLWxheW91dC1zaXplPWJveGVkXSAubmF2YmFyLWhlYWRlciB7XG4gIG1heC13aWR0aDogMTMwMHB4O1xufVxuXG4ucHNfX3JhaWwteS5wcy0tY2xpY2tpbmcgLnBzX190aHVtYi15LFxuLnBzX19yYWlsLXk6Zm9jdXMgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpob3ZlciA+IC5wc19fdGh1bWIteSB7XG4gIHdpZHRoOiA2cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRiNyAhaW1wb3J0YW50O1xufVxuXG5wZXJmZWN0LXNjcm9sbGJhciA+IC5wcy5wcy0tYWN0aXZlLXkgPiAucHNfX3JhaWwteTpob3ZlciB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5wcy0tYWN0aXZlLXggPiAucHNfX3JhaWwteCxcbi5wcy0tYWN0aXZlLXkgPiAucHNfX3JhaWwteSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5ob21lLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMjVweDtcbn1cblxuLmN1c3RvbS1jb250YWluZXItZmx1aWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1MHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1jb250ZW50IHtcbiAgbWFyZ2luLXJpZ2h0OiAyNTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jdXN0b20tcnNiIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMHB4O1xuICB0b3A6IDUwcHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmYjtcbn1cblxuLnNpZGUtYmFyLWFycm93IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDU2cHg7XG4gIHJpZ2h0OiAyNTBweDtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLXRvcC1yc2Ige1xuICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tcHJvcG9zYWwtcnNiIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5jdXN0b20tYXBwLXNlYXJjaCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuXG4ucHJvcG9zYWwtbGlzdCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDZweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5wMiB7XG4gIGNvbG9yOiAjODk4OTg5O1xufVxuXG4ubXktY2FyZCB7XG4gIG1hcmdpbjogMHB4IDhweCA1cHggIWltcG9ydGFudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4ubXktY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDc0Yzg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubXktY2FyZDpob3ZlciAucDIge1xuICBjb2xvcjogI2VmZjJmNztcbn1cblxuLmJnLWJsdWVBY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGM4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmJnLWJsdWVBY3RpdmUgLnAyIHtcbiAgY29sb3I6ICNlZmYyZjc7XG59XG5cbi5iZy1ncmVlbkFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk0NmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmctZ3JlZW5BY3RpdmUgLnAyIHtcbiAgY29sb3I6ICNlZmYyZjc7XG59XG5cbi5kZXRhaWxzLXNjcmVlbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmVkb2NzLXNjcmVlbiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRvcERldGFpbHMge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLnRvcC1kZXRhaWxzLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50b3AtZGV0YWlscy1jb250ZW50LWhlYWRlciB7XG4gIGhlaWdodDogMzVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xufVxuXG4udG9wLWRldGFpbHMtY29udGVudC1ib2R5IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmVkb2MtZGV0YWlscy1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZWRvYy1kZXRhaWxzLWNvbnRlbnQtaGVhZGVyIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLWRvYy1idG4ge1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tZG9jLWJ0biA+IC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZiICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uYmVsb3dEZXRhaWxzIHtcbiAgaGVpZ2h0OiA1MCU7XG59XG5cbi5iZWxvd0RldGFpbHMuZXhwYW5kZWQge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5iZWxvd0RldGFpbHMuY29tcHJlc3NlZCB7XG4gIGhlaWdodDogNTAlO1xufVxuXG4uZGV0YWlscy10YWJzLWNvbnRlbnQge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM2cHgpO1xuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xufVxuXG46aG9zdCA6Om5nLWRlZXAuZGV0YWlscy10YWJzLWNvbnRlbnQgPiAuYWN0aXZlIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcC5jdXN0b20tYWN0aXZlLXRhYi1kID4gcGVyZmVjdC1zY3JvbGxiYXIgPiBkaXYgPiBkaXYucHMtY29udGVudCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uZWRvY3Mtc2lkZWJhciB7XG4gIHdpZHRoOiAzMCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZWZlZmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xufVxuXG4uZWRvY3MtY29udGVudCB7XG4gIHdpZHRoOiA3MCU7XG4gIGZsb2F0OiByaWdodDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZWRvYy1jYXJkIHtcbiAgbWFyZ2luOiAwcHggMTBweCAxMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkb2Mtc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5lZG9jLXAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lZG9jLWkge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmVkb2MtY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk0NmQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZWRvYy1jYXJkOmhvdmVyIC5lZG9jLWkge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmVkb2MtY2FyZC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5NDZkICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZWRvYy1jYXJkLWFjdGl2ZSAuZWRvYy1pIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5oLTMwcHgge1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbn1cblxuLmxoLTMwcHgge1xuICBsaW5lLWhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXRkLWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIuNXB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY3VzdG9tLXRkLWJ0bjEge1xuICB0b3A6IGNhbGMoNTAlIC0gMHB4KTtcbn1cblxuLmN1c3RvbS10ZC1idG4yIHtcbiAgdG9wOiAzOHB4O1xufVxuXG4uY3VzdG9tLWJ0bi1zYiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWJ0bi10YiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci10b3Atd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYnRuLXRiMiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1yc2ItY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uU1JCLXRhYnMtY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzVweCk7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuU1JCLXRhYnMtY29udGVudCA+IC50YWItcGFuZSB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZWRvY3MtY29udGVudC1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLm1vZGFsLWRlbW8gLnVpLW1vZGFsIHtcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcbiAgd2lkdGg6IDUwJTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLm1vZGFsLWRlbW8gLnVpLWljb24ge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC51aS1tb2RhbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiAjMDA3NGM4ICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtbGF5ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmN1c3RvbS1tb2RlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2VlZWVlZTtcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4O1xuICBtaW4td2lkdGg6IDI1JTtcbiAgbWluLWhlaWdodDogNTAlO1xuICB3aWR0aDogNzUlO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xuICB0b3A6IDI1cHg7XG4gIGJvdHRvbTogMjVweDtcbiAgbGVmdDogMTIuNSU7XG4gIHotaW5kZXg6IDEwMDAwMDAwMDAwMDA7XG59XG5cbi5jdXN0b20tbW9kYWwtZnVsbC1zY3JlZW4ge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tbW9kYWwtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5lZG9jLWRldGFpbHMtY29udGVudC1oZWFkZXIxIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBiYWNrZ3JvdW5kOiAjZThlOGU4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY3VzdG9tLWRvYy1tb2RhbC1idG4ge1xuICBoZWlnaHQ6IDI3cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jdXN0b20tZG9jLW1vZGFsLWJ0biA+IC5idG4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmVkb2MtZGV0YWlscy1jb250ZW50LWJvZHkge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpO1xufVxuXG4uY3VzdG9tLWVyciB7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcC50b3AtZGV0YWlscy1jb250ZW50LWJvZHkgPiBwZXJmZWN0LXNjcm9sbGJhciA+IGRpdiA+IGRpdi5wcy1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50b3AtY290ZW50LWZvcm0tbGVmdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDIuNXB4O1xufVxuXG4udG9wLWNvdGVudC1mb3JtLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyLjVweDtcbn1cblxuLmN1c3RvbS1kZCB7XG4gIGhlaWdodDogY2FsYygxLjVlbSArIDAuNXJlbSArIDJweCkgIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwLmN1c3RvbS1kZCA+IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogY2FsYygxLjVlbSArIDAuNXJlbSArIDJweCkgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBjYWxjKDEuNWVtICsgMC41cmVtICsgMnB4KSAhaW1wb3J0YW50O1xufVxuXG4uc2lkZS1iYXItZGV0YWlscyB7XG4gIG1heC1oZWlnaHQ6IDUwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4uc2lkZS1iYXItZGV0YWlscy10ZCB7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcC5zaWRlLWJhci1kZXRhaWxzID4gcGVyZmVjdC1zY3JvbGxiYXIgPiBkaXYgPiBkaXYucHMtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlLWJhci1saXN0IHtcbiAgbWF4LWhlaWdodDogNTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi5tYXN0ZXItZm9ybS10ZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm5hdi10YWJzLWN1c3RvbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGRkZGRkICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG5cbi50b3AtaGVhZGVyLXRvb2wtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMzZweDtcbn1cblxuLmN1c3RvbS1maWx0ZXItaWNvbiB7XG4gIHJpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1maWx0ZXItaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1c3RvbS1zZWFyY2gtcnNiIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNlZWUgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1ncm91cC1idG4ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA3NnB4O1xufVxuXG4uY3VzdG9tLWdyb3VwLWJ0biA+IGJ1dHRvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5jdG4ge1xuICBoZWlnaHQ6IDM1cHg7XG59XG5cbi5jdG4tdWwge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uY3RuLWxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cblxuLmN0bi1hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzAwOTQ2ZDtcbiAgY29sb3I6ICMwMDk0NmQ7XG59XG5cbi5jdXN0b20tdG9vbGJhci1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG59XG5cbi5jdXN0b20tY29udGVudC1ib2R5IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY3VzdG9tLWNvbnRlbnQtYm9keSA+IHBlcmZlY3Qtc2Nyb2xsYmFyIHtcbiAgcGFkZGluZzogOHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAuZWRvY3MtY29udGVudC1saXN0ID4gcGVyZmVjdC1zY3JvbGxiYXIgPiBkaXYgPiBkaXYucHMtY29udGVudCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggOHB4O1xufVxuXG4uY3VzdG9tLWVkb2NzLXJvdyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG59XG5cbi5jdXN0b20tY29sLTktZWRvY3Mge1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1jb2wtOS1lZG9jcy1wMSB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MzA7XG59XG5cbi5jdXN0b20tY29sLTktZWRvY3MtcDIge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY3VzdG9tLWNvbC05LWVkb2NzLXAzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnNwYW4xIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjb2xvcjogIzg4ODg4ODtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5zcGFuMSA+IGkge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMwMDc0Yzg7XG59XG5cbi5zcGFuMiB7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnNwYW4yID4gaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogIzAwNzRjODtcbn1cblxuLnNwYW4zIHtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi5jdXN0b20tZWRvY3Mtcm93OmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjMDA5NDZkO1xufVxuXG4uY3VzdG9tLWVkb2NzLXJvdy1hY3RpdmUge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICMwMDk0NmQ7XG59XG5cbi5hY3Rpdml0eS1jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZpdHktY2FyZCA+IC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctbGVmdDogOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tYWN0aXZpdHktaGVhZGVyID4gdHIgPiB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA0MTAgIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1hY3Rpdml0eS1kZCB7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWUgIWltcG9ydGFudDtcbn1cblxuLnNpZGUtZGV0YWlsLXNwYW4ge1xuICBjb2xvcjogIzAwOTQ2ZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXYtdGFicy1jdXN0b20gLm5hdi1pdGVtIC5uYXYtbGluay5hY3RpdmUge1xuICBjb2xvcjogIzAwOTQ2ZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMtY3VzdG9tIC5uYXYtaXRlbSAubmF2LWxpbms6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzAwOTQ2ZCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLXRkLXByIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4uY3VzdG9tLXRkLWlucHV0IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idG4teW4tdyB7XG4gIHdpZHRoOiAxMzBweCAhaW1wb3J0YW50O1xufVxuXG4uaC0zNSB7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xufVxuXG4uaC1mdWxsLTM1IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzNXB4KSAhaW1wb3J0YW50O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2RkZGRkZDtcbn1cblxuLnJlZi1kb2MtdG9wIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5yZWYtZG9jLXRvcC10b29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJnLWdyYXkge1xuICBiYWNrZ3JvdW5kOiAjZWVlZWVlO1xufVxuXG4udmVydGktdGltZWxpbmUge1xuICBib3JkZXItbGVmdDogM3B4IGRhc2hlZCAjZjZmNmY2O1xuICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmV2ZW50LWxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMCAyNXB4IDMwcHg7XG59XG5cbi5ldmVudC10aW1lbGluZS1kb3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC05cHg7XG4gIHRvcDogMDtcbiAgei1pbmRleDogOTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uY3VzdG9tLW1lZGlhLWJvZHkge1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnRvcC1oZWFkZXItYyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZmZmZjtcbn1cblxuLmN1c3RvbS1jb21tZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29tbWVudC1oZWFkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggOXB4ICNkZGQ7XG59XG5cbi5jb21tZW50LWhlYWQgPiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNvbW1lbnQtaGVhZCA+IGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbW1lbnQtaGVhZCA+IGJ1dHRvbiA+IGkge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jdXN0b20tY29tbWVudCA+IHBlcmZlY3Qtc2Nyb2xsYmFyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzN3B4KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxNXB4IDhweCA4cHggIWltcG9ydGFudDtcbn1cblxubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMjdweCAhaW1wb3J0YW50O1xufVxuXG5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lciB7XG4gIGhlaWdodDogMjdweCAhaW1wb3J0YW50O1xufSIsIi8vXHJcbi8vIEdvb2dsZSBmb250IC0gUm9ib3RvXHJcbi8vXHJcblxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVBvcHBpbnM6MzAwLDQwMCw1MDAsNjAwLDcwMCZkaXNwbGF5PXN3YXAnKTsiLCIvKlxyXG5UZW1wbGF0ZSBOYW1lOiBTa290ZSAtIFJlc3BvbnNpdmUgQm9vdHN0cmFwIDQgQWRtaW4gRGFzaGJvYXJkXHJcbkF1dGhvcjogVGhlbWVzYnJhbmRcclxuVmVyc2lvbjogMS4wLjBcclxuV2Vic2l0ZTogaHR0cHM6Ly90aGVtZXNicmFuZC5jb20vXHJcbkNvbnRhY3Q6IHRoZW1lc2JyYW5kQGdtYWlsLmNvbVxyXG5GaWxlOiBNYWluIENzcyBGaWxlXHJcbiovXHJcblxyXG4vL0ZvbnRzXHJcbkBpbXBvcnQgXCJjdXN0b20vZm9udHMvZm9udHNcIjtcclxuXHJcbi8vQ29yZSBmaWxlc1xyXG5AaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zLnNjc3NcIjtcclxuXHJcbi8vIFN0cnVjdHVyZVxyXG5AaW1wb3J0IFwiY3VzdG9tL3N0cnVjdHVyZS9nZW5lcmFsXCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL3RvcGJhclwiO1xyXG5AaW1wb3J0IFwiY3VzdG9tL3N0cnVjdHVyZS9wYWdlLWhlYWRcIjtcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvZm9vdGVyXCI7XHJcbkBpbXBvcnQgXCJjdXN0b20vc3RydWN0dXJlL3JpZ2h0LXNpZGViYXJcIjtcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvdmVydGljYWxcIjtcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvaG9yaXpvbnRhbC1uYXZcIjtcclxuQGltcG9ydCBcImN1c3RvbS9zdHJ1Y3R1cmUvbGF5b3V0c1wiO1xyXG5cclxuLy8gUGx1Z2luc1xyXG5AaW1wb3J0IFwiY3VzdG9tL3BsdWdpbnMvY3VzdG9tLXNjcm9sbGJhclwiO1xyXG5AaW1wb3J0IFwifkBuZy1zZWxlY3Qvbmctc2VsZWN0L3RoZW1lcy9kZWZhdWx0LnRoZW1lLmNzc1wiO1xyXG5cclxuLy8gUGFnZXNcclxuQGltcG9ydCBcImN1c3RvbS9wYWdlcy9hdXRoZW50aWNhdGlvblwiO1xyXG4iLCIvKlxuICogQ29udGFpbmVyIHN0eWxlXG4gKi9cbi5wcyB7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogYXV0bztcbiAgLW1zLXRvdWNoLWFjdGlvbjogYXV0bztcbn1cblxuLypcbiAqIFNjcm9sbGJhciByYWlsIHN0eWxlc1xuICovXG4ucHNfX3JhaWwteCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgb3BhY2l0eSAuMnMgbGluZWFyO1xuICBoZWlnaHQ6IDE1cHg7XG4gIC8qIHRoZXJlIG11c3QgYmUgJ2JvdHRvbScgb3IgJ3RvcCcgZm9yIHBzX19yYWlsLXggKi9cbiAgYm90dG9tOiAwcHg7XG4gIC8qIHBsZWFzZSBkb24ndCBjaGFuZ2UgJ3Bvc2l0aW9uJyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5wc19fcmFpbC15IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMnMgbGluZWFyLCBvcGFjaXR5IC4ycyBsaW5lYXI7XG4gIHdpZHRoOiAxNXB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdyaWdodCcgb3IgJ2xlZnQnIGZvciBwc19fcmFpbC15ICovXG4gIHJpZ2h0OiAwO1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHMtLWFjdGl2ZS14ID4gLnBzX19yYWlsLXgsXG4ucHMtLWFjdGl2ZS15ID4gLnBzX19yYWlsLXkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5wczpob3ZlciA+IC5wc19fcmFpbC14LFxuLnBzOmhvdmVyID4gLnBzX19yYWlsLXksXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXgsXG4ucHMtLWZvY3VzID4gLnBzX19yYWlsLXksXG4ucHMtLXNjcm9sbGluZy14ID4gLnBzX19yYWlsLXgsXG4ucHMtLXNjcm9sbGluZy15ID4gLnBzX19yYWlsLXkge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5wcyAucHNfX3JhaWwteDpob3Zlcixcbi5wcyAucHNfX3JhaWwteTpob3Zlcixcbi5wcyAucHNfX3JhaWwteDpmb2N1cyxcbi5wcyAucHNfX3JhaWwteTpmb2N1cyxcbi5wcyAucHNfX3JhaWwteC5wcy0tY2xpY2tpbmcsXG4ucHMgLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKlxuICogU2Nyb2xsYmFyIHRodW1iIHN0eWxlc1xuICovXG4ucHNfX3RodW1iLXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjJzIGxpbmVhciwgaGVpZ2h0IC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIGhlaWdodCAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogNnB4O1xuICAvKiB0aGVyZSBtdXN0IGJlICdib3R0b20nIGZvciBwc19fdGh1bWIteCAqL1xuICBib3R0b206IDJweDtcbiAgLyogcGxlYXNlIGRvbid0IGNoYW5nZSAncG9zaXRpb24nICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4ycyBsaW5lYXIsIHdpZHRoIC4ycyBlYXNlLWluLW91dDtcbiAgd2lkdGg6IDZweDtcbiAgLyogdGhlcmUgbXVzdCBiZSAncmlnaHQnIGZvciBwc19fdGh1bWIteSAqL1xuICByaWdodDogMnB4O1xuICAvKiBwbGVhc2UgZG9uJ3QgY2hhbmdlICdwb3NpdGlvbicgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ucHNfX3JhaWwteDpob3ZlciA+IC5wc19fdGh1bWIteCxcbi5wc19fcmFpbC14OmZvY3VzID4gLnBzX190aHVtYi14LFxuLnBzX19yYWlsLXgucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGhlaWdodDogMTFweDtcbn1cblxuLnBzX19yYWlsLXk6aG92ZXIgPiAucHNfX3RodW1iLXksXG4ucHNfX3JhaWwteTpmb2N1cyA+IC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15LnBzLS1jbGlja2luZyAucHNfX3RodW1iLXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTFweDtcbn1cblxuLyogTVMgc3VwcG9ydHMgKi9cbkBzdXBwb3J0cyAoLW1zLW92ZXJmbG93LXN0eWxlOiBub25lKSB7XG4gIC5wcyB7XG4gICAgb3ZlcmZsb3c6IGF1dG8gIWltcG9ydGFudDtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSksICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAucHMge1xuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbiIsIi5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcntiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLWNvbG9yOiNiM2IzYjMgI2NjYyAjZDlkOWQ5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lcjpob3Zlcntib3gtc2hhZG93Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkPi5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy1hcnJvd3t0b3A6LTJweDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzk5OTtib3JkZXItd2lkdGg6MCA1cHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW9wZW5lZD4ubmctc2VsZWN0LWNvbnRhaW5lciAubmctYXJyb3c6aG92ZXJ7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICMzMzN9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC1ib3R0b20+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3Qtb3BlbmVkLm5nLXNlbGVjdC10b3A+Lm5nLXNlbGVjdC1jb250YWluZXJ7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtZm9jdXNlZDpub3QoLm5nLXNlbGVjdC1vcGVuZWQpPi5uZy1zZWxlY3QtY29udGFpbmVye2JvcmRlci1jb2xvcjojMDA3ZWZmO2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4wNzUpLDAgMCAwIDNweCByZ2JhKDAsMTI2LDI1NSwwLjEpfS5uZy1zZWxlY3Qubmctc2VsZWN0LWRpc2FibGVkPi5uZy1zZWxlY3QtY29udGFpbmVye2JhY2tncm91bmQtY29sb3I6I2Y5ZjlmOX0ubmctc2VsZWN0IC5uZy1oYXMtdmFsdWUgLm5nLXBsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubmctc2VsZWN0IC5uZy1zZWxlY3QtY29udGFpbmVye2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6NHB4O2JvcmRlcjoxcHggc29saWQgI2NjYzttaW4taGVpZ2h0OjM2cHg7YWxpZ24taXRlbXM6Y2VudGVyfS5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXI6aG92ZXJ7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNil9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVye2FsaWduLWl0ZW1zOmNlbnRlcjtwYWRkaW5nLWxlZnQ6MTBweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3QgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXJpZ2h0OjEwcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcntjb2xvcjojOTk5fS5uZy1zZWxlY3Qubmctc2VsZWN0LXNpbmdsZSAubmctc2VsZWN0LWNvbnRhaW5lcntoZWlnaHQ6MzZweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7dG9wOjVweDtsZWZ0OjA7cGFkZGluZy1sZWZ0OjEwcHg7cGFkZGluZy1yaWdodDo1MHB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3Qtc2luZ2xlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLWlucHV0e3BhZGRpbmctcmlnaHQ6MTBweDtwYWRkaW5nLWxlZnQ6NTBweH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5O2JvcmRlcjoxcHggc29saWQgI2U2ZTZlNn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZS5uZy1zZWxlY3QtZGlzYWJsZWQ+Lm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmc6MCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lcntwYWRkaW5nLXRvcDo1cHg7cGFkZGluZy1sZWZ0OjdweH1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXJ7cGFkZGluZy1yaWdodDo3cHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWV7Zm9udC1zaXplOi45ZW07bWFyZ2luLWJvdHRvbTo1cHg7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmO2JvcmRlci1yYWRpdXM6MnB4O21hcmdpbi1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZXttYXJnaW4tcmlnaHQ6MDttYXJnaW4tbGVmdDo1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWR7YmFja2dyb3VuZC1jb2xvcjojZjlmOWY5fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlLm5nLXZhbHVlLWRpc2FibGVkIC5uZy12YWx1ZS1sYWJlbHtwYWRkaW5nLWxlZnQ6NXB4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUubmctdmFsdWUtZGlzYWJsZWQgLm5nLXZhbHVlLWxhYmVse3BhZGRpbmctbGVmdDowO3BhZGRpbmctcmlnaHQ6NXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1sYWJlbHtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjFweCA1cHh9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzoxcHggNXB4fS5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uOmhvdmVye2JhY2tncm91bmQtY29sb3I6I2QxZThmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5sZWZ0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn1bZGlyPVwicnRsXCJdIC5uZy1zZWxlY3Qubmctc2VsZWN0LW11bHRpcGxlIC5uZy1zZWxlY3QtY29udGFpbmVyIC5uZy12YWx1ZS1jb250YWluZXIgLm5nLXZhbHVlIC5uZy12YWx1ZS1pY29uLmxlZnR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmY7Ym9yZGVyLXJpZ2h0Om5vbmV9Lm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctdmFsdWUgLm5nLXZhbHVlLWljb24ucmlnaHR7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNiOGRiZmZ9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy12YWx1ZSAubmctdmFsdWUtaWNvbi5yaWdodHtib3JkZXItbGVmdDowO2JvcmRlci1yaWdodDoxcHggc29saWQgI2I4ZGJmZn0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1pbnB1dHtwYWRkaW5nOjAgMCAzcHggM3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctaW5wdXR7cGFkZGluZzowIDNweCAzcHggMH0ubmctc2VsZWN0Lm5nLXNlbGVjdC1tdWx0aXBsZSAubmctc2VsZWN0LWNvbnRhaW5lciAubmctdmFsdWUtY29udGFpbmVyIC5uZy1wbGFjZWhvbGRlcnt0b3A6NXB4O3BhZGRpbmctYm90dG9tOjVweDtwYWRkaW5nLWxlZnQ6M3B4fVtkaXI9XCJydGxcIl0gLm5nLXNlbGVjdC5uZy1zZWxlY3QtbXVsdGlwbGUgLm5nLXNlbGVjdC1jb250YWluZXIgLm5nLXZhbHVlLWNvbnRhaW5lciAubmctcGxhY2Vob2xkZXJ7cGFkZGluZy1yaWdodDozcHg7cGFkZGluZy1sZWZ0OjB9Lm5nLXNlbGVjdCAubmctY2xlYXItd3JhcHBlcntjb2xvcjojOTk5fS5uZy1zZWxlY3QgLm5nLWNsZWFyLXdyYXBwZXI6aG92ZXIgLm5nLWNsZWFye2NvbG9yOiNEMDAyMUJ9Lm5nLXNlbGVjdCAubmctc3Bpbm5lci16b25le3BhZGRpbmc6NXB4IDVweCAwIDB9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1zcGlubmVyLXpvbmV7cGFkZGluZzo1cHggMCAwIDVweH0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3dpZHRoOjI1cHg7cGFkZGluZy1yaWdodDo1cHh9W2Rpcj1cInJ0bFwiXSAubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVye3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfS5uZy1zZWxlY3QgLm5nLWFycm93LXdyYXBwZXI6aG92ZXIgLm5nLWFycm93e2JvcmRlci10b3AtY29sb3I6IzY2Nn0ubmctc2VsZWN0IC5uZy1hcnJvdy13cmFwcGVyIC5uZy1hcnJvd3tib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMi41cHh9Lm5nLWRyb3Bkb3duLXBhbmVse2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXI6MXB4IHNvbGlkICNjY2M7Ym94LXNoYWRvdzowIDFweCAwIHJnYmEoMCwwLDAsMC4wNik7bGVmdDowfS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9te3RvcDoxMDAlO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDtib3JkZXItdG9wLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLXRvcDotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtYm90dG9tIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmxhc3QtY2hpbGR7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NHB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9we2JvdHRvbToxMDAlO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweDtib3JkZXItYm90dG9tLWNvbG9yOiNlNmU2ZTY7bWFyZ2luLWJvdHRvbTotMXB4fS5uZy1kcm9wZG93bi1wYW5lbC5uZy1zZWxlY3QtdG9wIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmZpcnN0LWNoaWxke2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjRweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWhlYWRlcntib3JkZXItYm90dG9tOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLWZvb3Rlcntib3JkZXItdG9wOjFweCBzb2xpZCAjY2NjO3BhZGRpbmc6NXB4IDdweH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cHt1c2VyLXNlbGVjdDpub25lO3BhZGRpbmc6OHB4IDEwcHg7Zm9udC13ZWlnaHQ6NTAwO2NvbG9yOnJnYmEoMCwwLDAsMC41NCk7Y3Vyc29yOnBvaW50ZXJ9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0Z3JvdXAubmctb3B0aW9uLWRpc2FibGVke2N1cnNvcjpkZWZhdWx0fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGdyb3VwLm5nLW9wdGlvbi1zZWxlY3RlZCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRncm91cC5uZy1vcHRpb24tc2VsZWN0ZWQubmctb3B0aW9uLW1hcmtlZHtiYWNrZ3JvdW5kLWNvbG9yOiNlYmY1ZmY7Zm9udC13ZWlnaHQ6NjAwfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbntiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Y29sb3I6cmdiYSgwLDAsMCwwLjg3KTtwYWRkaW5nOjhweCAxMHB4fS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQsLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1zZWxlY3RlZC5uZy1vcHRpb24tbWFya2Vke2NvbG9yOiMzMzM7YmFja2dyb3VuZC1jb2xvcjojZWJmNWZmfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tc2VsZWN0ZWQgLm5nLW9wdGlvbi1sYWJlbCwubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLXNlbGVjdGVkLm5nLW9wdGlvbi1tYXJrZWQgLm5nLW9wdGlvbi1sYWJlbHtmb250LXdlaWdodDo2MDB9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1tYXJrZWR7YmFja2dyb3VuZC1jb2xvcjojZjVmYWZmO2NvbG9yOiMzMzN9Lm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uLm5nLW9wdGlvbi1kaXNhYmxlZHtjb2xvcjojY2NjfS5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbi5uZy1vcHRpb24tY2hpbGR7cGFkZGluZy1sZWZ0OjIycHh9W2Rpcj1cInJ0bFwiXSAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ubmctb3B0aW9uLWNoaWxke3BhZGRpbmctcmlnaHQ6MjJweDtwYWRkaW5nLWxlZnQ6MH0ubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24gLm5nLXRhZy1sYWJlbHtmb250LXNpemU6ODAlO2ZvbnQtd2VpZ2h0OjQwMDtwYWRkaW5nLXJpZ2h0OjVweH1bZGlyPVwicnRsXCJdIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiAubmctdGFnLWxhYmVse3BhZGRpbmctbGVmdDo1cHg7cGFkZGluZy1yaWdodDowfVtkaXI9XCJydGxcIl0gLm5nLWRyb3Bkb3duLXBhbmVse2RpcmVjdGlvbjpydGw7dGV4dC1hbGlnbjpyaWdodH1cbiIsIi8vXHJcbi8vIF9oZWFkZXIuc2Nzc1xyXG4vL1xyXG5cclxuI3BhZ2UtdG9wYmFyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwMjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIHBhZGRpbmc6IDAgY2FsYygjeyRncmlkLWd1dHRlci13aWR0aH0gLyAyKSAwIDA7XHJcblxyXG4gIC5kcm9wZG93bi5zaG93IHtcclxuICAgIC5oZWFkZXItaXRlbSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LTEwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQtYm94IHtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAkbmF2YmFyLWJyYW5kLWJveC13aWR0aDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cclxuICAubG9nby1zbSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ28tbGlnaHQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCAqL1xyXG5cclxuLmFwcC1zZWFyY2gge1xyXG4gIHBhZGRpbmc6IGNhbGMoI3skaGVhZGVyLWhlaWdodCAtIDM4cHh9IC8gMikgMDtcclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcGJhci1zZWFyY2gtYmc7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGxlZnQ6IDEzcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogJGdyYXktNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVnYSBtZW51XHJcblxyXG4ubWVnYW1lbnUtbGlzdCB7XHJcbiAgbGkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogNXB4IDBweDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICRkcm9wZG93bi1jb2xvcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28ge1xyXG4gICAgc3Bhbi5sb2dvLWxnIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLmxvZ28tc20ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucGFnZS1jb250ZW50IHtcclxuICAvL3BhZGRpbmc6IGNhbGMoI3skaGVhZGVyLWhlaWdodH0gKyAjeyRncmlkLWd1dHRlci13aWR0aH0pIGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMikgJGZvb3Rlci1oZWlnaHQgY2FsYygjeyRncmlkLWd1dHRlci13aWR0aH0gLyAyKTtcclxuICBwYWRkaW5nOiBjYWxjKCN7JGhlYWRlci1oZWlnaHR9KSAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmhlYWRlci1pdGVtIHtcclxuICBoZWlnaHQ6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICRoZWFkZXItaXRlbS1jb2xvcjtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItcHJvZmlsZS11c2VyIHtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMzAwO1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLm5vdGktaWNvbiB7XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJhZGdlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5ub3RpZmljYXRpb24taXRlbSB7XHJcbiAgLm1lZGlhIHtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktMzAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRHJvcGRvd24gd2l0aCBJY29uc1xyXG4uZHJvcGRvd24taWNvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMCA5cHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjRweDtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICRncmF5LTIwMDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEZ1bGwgU2NyZWVuXHJcbi5mdWxsc2NyZWVuLWVuYWJsZSB7XHJcbiAgW2RhdGEtdG9nZ2xlPVwiZnVsbHNjcmVlblwiXSB7XHJcbiAgICAuYngtZnVsbHNjcmVlbjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcXGVhM2ZcIjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS10b3BiYXI9XCJkYXJrXCJdIHtcclxuICAjcGFnZS10b3BiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1kYXJrLWJnO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLmRyb3Bkb3duLnNob3cge1xyXG4gICAgICAuaGVhZGVyLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1pdGVtIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1wcm9maWxlLXVzZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgLm5vdGktaWNvbiB7XHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tZGFyayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tbGlnaHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYXBwLXNlYXJjaCB7XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdG9wYmFyLXNlYXJjaC1iZywgMC4wNyk7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbixcclxuICAgIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1zaWRlYmFyPVwiZGFya1wiXSB7XHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogJHNpZGViYXItZGFyay1iZztcclxuICB9XHJcblxyXG4gIC5sb2dvLWRhcmsge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuXHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS10b3BiYXI9XCJkYXJrXCJdIHtcclxuICAjcGFnZS10b3BiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhlYWRlci1kYXJrLWJnO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLmRyb3Bkb3duLnNob3cge1xyXG4gICAgICAuaGVhZGVyLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53YXZlcy1lZmZlY3QgLndhdmVzLXJpcHBsZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJHdoaXRlLCAwLjQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1pdGVtIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1wcm9maWxlLXVzZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMjUpO1xyXG4gIH1cclxuXHJcbiAgLm5vdGktaWNvbiB7XHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ28tZGFyayB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28tbGlnaHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYXBwLXNlYXJjaCB7XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkdG9wYmFyLXNlYXJjaC1iZywgMC4wNyk7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbixcclxuICAgIGlucHV0LmZvcm0tY29udHJvbDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC41KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1zaWRlYmFyPVwiZGFya1wiXSB7XHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgYmFja2dyb3VuZDogJHNpZGViYXItZGFyay1iZztcclxuICB9XHJcblxyXG4gIC5sb2dvLWRhcmsge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuXHJcbiAgICAgIC5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLm5hdmJhci1icmFuZC1ib3gge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdIHtcclxuICAubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5wYWdlLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogJGhlYWRlci1oZWlnaHQ7XHJcbiAgICAvLyBwYWRkaW5nOiBjYWxjKDU1cHggKyAjeyRncmlkLWd1dHRlci13aWR0aH0pIGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMikgJGZvb3Rlci1oZWlnaHQgY2FsYygjeyRncmlkLWd1dHRlci13aWR0aH0gLyAyKTtcclxuICAgIHBhZGRpbmc6IGNhbGMoNTVweCkgMHB4IDBweCAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICBib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgICAucGFnZS1jb250ZW50IHtcclxuICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLy8gVmFyaWFibGVzXHJcblxyXG4vL1xyXG4vLyBjdXN0b20tdmFyaWFibGVzXHJcbi8vXHJcbkB1c2UgXCJzYXNzOm1hdGhcIjtcclxuLy8gVmVydGljYWwgU2lkZWJhciAtIERlZmF1bHQgTGlnaHRcclxuJHNpZGViYXItYmc6ICNmZmZmZmY7XHJcbiRzaWRlYmFyLW1lbnUtaXRlbS1jb2xvcjogIzU0NWE2ZDtcclxuJHNpZGViYXItbWVudS1zdWItaXRlbS1jb2xvcjogIzU0NWE2ZDtcclxuJHNpZGViYXItbWVudS1pdGVtLWljb24tY29sb3I6ICM3ZjgzODc7XHJcbiRzaWRlYmFyLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjogIzM4M2M0MDtcclxuJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvcjogIzU1NmVlNjtcclxuJHNpZGViYXItd2lkdGg6IDI1MHB4O1xyXG4kc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg6IDUwcHg7XHJcbiRzaWRlYmFyLXdpZHRoLXNtOiAxNjBweDtcclxuJHNpZGViYXItcmlnaHQtY3VzdG9tLWNvbGxhcHNlZC13aWR0aDogMjUwcHg7XHJcblxyXG4vLyBWZXJ0aWNhbCBTaWRlYmFyIC0gRGFya1xyXG4kc2lkZWJhci1kYXJrLWJnOiAjMmEzMDQyOyAvLzJjMzEzYVxyXG4kc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1jb2xvcjogI2E2YjBjZjtcclxuJHNpZGViYXItZGFyay1tZW51LXN1Yi1pdGVtLWNvbG9yOiAjNzk4MjljO1xyXG4kc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1pY29uLWNvbG9yOiAjNmE3MTg3O1xyXG4kc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjogI2ZmZmZmZjtcclxuJHNpZGViYXItZGFyay1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yOiAjZmZmZmZmO1xyXG5cclxuLy8gVG9wYmFyIC0gRGVhZnVsdCBMaWdodFxyXG4kaGVhZGVyLWhlaWdodDogNTBweDtcclxuJGhlYWRlci1iZzogI2ZmZmZmZjtcclxuJGhlYWRlci1pdGVtLWNvbG9yOiAjNTU1YjZkO1xyXG5cclxuLy8gVG9wYmFyIC0gRGFya1xyXG4kaGVhZGVyLWRhcmstYmc6ICMyYTMwNDI7XHJcbiRoZWFkZXItZGFyay1pdGVtLWNvbG9yOiAjZTllY2VmO1xyXG5cclxuLy8gVG9wYmFyIFNlYXJjaFxyXG4kdG9wYmFyLXNlYXJjaC1iZzogI2YzZjNmOTtcclxuXHJcbi8vIEZvb3RlclxyXG4kZm9vdGVyLWhlaWdodDogNjBweDtcclxuJGZvb3Rlci1iZzogI2YyZjJmNTtcclxuJGZvb3Rlci1jb2xvcjogIzc0Nzg4ZDtcclxuXHJcbi8vIEhvcml6b250YWwgbmF2XHJcbiR0b3BuYXYtYmc6ICNmZmY7XHJcblxyXG4vLyBSaWdodCBTaWRlYmFyXHJcbiRyaWdodGJhci13aWR0aDogMjgwcHg7XHJcblxyXG4vLyBEaXNwbGF5XHJcbiRkaXNwbGF5LW5vbmU6IG5vbmU7XHJcbiRkaXNwbGF5LWJsb2NrOiBibG9jaztcclxuXHJcbi8vIEJyYW5kXHJcbiRuYXZiYXItYnJhbmQtYm94LXdpZHRoOiAyNTBweDtcclxuXHJcbi8vIEJveGVkIGxheW91dCB3aWR0aFxyXG4kYm94ZWQtbGF5b3V0LXdpZHRoOiAxMzAwcHg7XHJcbiRib3hlZC1ib2R5LWJnOiAjZWJlYmY0O1xyXG5cclxuLy8gRm9udCBXZWlnaHRcclxuJGZvbnQtd2VpZ2h0LW1lZGl1bTogNTAwO1xyXG4kZm9udC13ZWlnaHQtc2VtaWJvbGQ6IDYwMDtcclxuXHJcbi8vIGFwZXggY2hhcnRzXHJcbiRhcGV4LWdyaWQtY29sb3I6ICNmOGY5ZmE7XHJcblxyXG4vLyBDaGFydCBjb2xvclxyXG4kY2hhcnQtdGV4dC1jb2xvcjogIzM0M2E0MDtcclxuXHJcbi8vIFZhcmlhYmxlc1xyXG4vL1xyXG4vLyBWYXJpYWJsZXMgc2hvdWxkIGZvbGxvdyB0aGUgYCRjb21wb25lbnQtc3RhdGUtcHJvcGVydHktc2l6ZWAgZm9ybXVsYSBmb3JcclxuLy8gY29uc2lzdGVudCBuYW1pbmcuIEV4OiAkbmF2LWxpbmstZGlzYWJsZWQtY29sb3IgYW5kICRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHMuXHJcblxyXG4vLyBDb2xvciBzeXN0ZW1cclxuXHJcbiR3aGl0ZTogI2ZmZjtcclxuJGdyYXktMTAwOiAjZjhmOWZhO1xyXG4kZ3JheS0yMDA6ICNlZmYyZjc7XHJcbiRncmF5LTMwMDogI2Y2ZjZmNjtcclxuJGdyYXktNDAwOiAjY2VkNGRhO1xyXG4kZ3JheS01MDA6ICNhZGI1YmQ7XHJcbiRncmF5LTYwMDogIzc0Nzg4ZDtcclxuJGdyYXktNzAwOiAjNDk1MDU3O1xyXG4kZ3JheS04MDA6ICMzNDNhNDA7XHJcbiRncmF5LTkwMDogIzIxMjUyOTtcclxuJGJsYWNrOiAjMDAwO1xyXG5cclxuJGdyYXlzOiAoKTtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJGdyYXlzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCIxMDBcIjogJGdyYXktMTAwLFxyXG4gICAgXCIyMDBcIjogJGdyYXktMjAwLFxyXG4gICAgXCIzMDBcIjogJGdyYXktMzAwLFxyXG4gICAgXCI0MDBcIjogJGdyYXktNDAwLFxyXG4gICAgXCI1MDBcIjogJGdyYXktNTAwLFxyXG4gICAgXCI2MDBcIjogJGdyYXktNjAwLFxyXG4gICAgXCI3MDBcIjogJGdyYXktNzAwLFxyXG4gICAgXCI4MDBcIjogJGdyYXktODAwLFxyXG4gICAgXCI5MDBcIjogJGdyYXktOTAwLFxyXG4gICksXHJcbiAgJGdyYXlzXHJcbik7XHJcblxyXG4kYmx1ZTogIzAwNzRjODsgLy8jNTU2ZWU2O1xyXG4kaW5kaWdvOiAjNTY0YWIxO1xyXG4kcHVycGxlOiAjNmY0MmMxO1xyXG4kcGluazogI2U4M2U4YztcclxuJHJlZDogI2Y0NmE2YTtcclxuJG9yYW5nZTogI2YxNzM0ZjtcclxuJHllbGxvdzogI2YxYjQ0YztcclxuJGdyZWVuOiAjMDA5NDZkOyAvLyMzNGMzOGY7XHJcbiR0ZWFsOiAjMDUwNTA1O1xyXG4kY3lhbjogIzUwYTVmMTtcclxuXHJcbiRjb2xvcnM6ICgpO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJibHVlXCI6ICRibHVlLFxyXG4gICAgXCJpbmRpZ29cIjogJGluZGlnbyxcclxuICAgIFwicHVycGxlXCI6ICRwdXJwbGUsXHJcbiAgICBcInBpbmtcIjogJHBpbmssXHJcbiAgICBcInJlZFwiOiAkcmVkLFxyXG4gICAgXCJvcmFuZ2VcIjogJG9yYW5nZSxcclxuICAgIFwieWVsbG93XCI6ICR5ZWxsb3csXHJcbiAgICBcImdyZWVuXCI6ICRncmVlbixcclxuICAgIFwidGVhbFwiOiAkdGVhbCxcclxuICAgIFwiY3lhblwiOiAkY3lhbixcclxuICAgIFwid2hpdGVcIjogJHdoaXRlLFxyXG4gICAgXCJncmF5XCI6ICRncmF5LTYwMCxcclxuICAgIFwiZ3JheS1kYXJrXCI6ICRncmF5LTgwMCxcclxuICApLFxyXG4gICRjb2xvcnNcclxuKTtcclxuXHJcbiRwcmltYXJ5OiAkYmx1ZTtcclxuJHNlY29uZGFyeTogJGdyYXktNjAwO1xyXG4kc3VjY2VzczogJGdyZWVuO1xyXG4kaW5mbzogJGN5YW47XHJcbiR3YXJuaW5nOiAkeWVsbG93O1xyXG4kZGFuZ2VyOiAkcmVkO1xyXG4kbGlnaHQ6ICRncmF5LTIwMDtcclxuJGRhcms6ICRncmF5LTgwMDtcclxuXHJcbiR0aGVtZS1jb2xvcnM6ICgpO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kdGhlbWUtY29sb3JzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJwcmltYXJ5XCI6ICRwcmltYXJ5LFxyXG4gICAgXCJzZWNvbmRhcnlcIjogJHNlY29uZGFyeSxcclxuICAgIFwic3VjY2Vzc1wiOiAkc3VjY2VzcyxcclxuICAgIFwiaW5mb1wiOiAkaW5mbyxcclxuICAgIFwid2FybmluZ1wiOiAkd2FybmluZyxcclxuICAgIFwiZGFuZ2VyXCI6ICRkYW5nZXIsXHJcbiAgICBcInBpbmtcIjogJHBpbmssXHJcbiAgICBcImxpZ2h0XCI6ICRsaWdodCxcclxuICAgIFwiZGFya1wiOiAkZGFyayxcclxuICApLFxyXG4gICR0aGVtZS1jb2xvcnNcclxuKTtcclxuXHJcbi8vIFNldCBhIHNwZWNpZmljIGp1bXAgcG9pbnQgZm9yIHJlcXVlc3RpbmcgY29sb3IganVtcHNcclxuJHRoZW1lLWNvbG9yLWludGVydmFsOiA4JTtcclxuXHJcbi8vIFRoZSB5aXEgbGlnaHRuZXNzIHZhbHVlIHRoYXQgZGV0ZXJtaW5lcyB3aGVuIHRoZSBsaWdodG5lc3Mgb2YgY29sb3IgY2hhbmdlcyBmcm9tIFwiZGFya1wiIHRvIFwibGlnaHRcIi4gQWNjZXB0YWJsZSB2YWx1ZXMgYXJlIGJldHdlZW4gMCBhbmQgMjU1LlxyXG4keWlxLWNvbnRyYXN0ZWQtdGhyZXNob2xkOiAyMDA7XHJcblxyXG4vLyBDdXN0b21pemUgdGhlIGxpZ2h0IGFuZCBkYXJrIHRleHQgY29sb3JzIGZvciB1c2UgaW4gb3VyIFlJUSBjb2xvciBjb250cmFzdCBmdW5jdGlvbi5cclxuJHlpcS10ZXh0LWRhcms6ICRncmF5LTkwMDtcclxuJHlpcS10ZXh0LWxpZ2h0OiAkd2hpdGU7XHJcblxyXG4vLyBPcHRpb25zXHJcbi8vXHJcbi8vIFF1aWNrbHkgbW9kaWZ5IGdsb2JhbCBzdHlsaW5nIGJ5IGVuYWJsaW5nIG9yIGRpc2FibGluZyBvcHRpb25hbCBmZWF0dXJlcy5cclxuXHJcbiRlbmFibGUtY2FyZXQ6IGZhbHNlO1xyXG4kZW5hYmxlLXJvdW5kZWQ6IHRydWU7XHJcbiRlbmFibGUtc2hhZG93czogZmFsc2U7XHJcbiRlbmFibGUtZ3JhZGllbnRzOiBmYWxzZTtcclxuJGVuYWJsZS10cmFuc2l0aW9uczogdHJ1ZTtcclxuJGVuYWJsZS1wcmVmZXJzLXJlZHVjZWQtbW90aW9uLW1lZGlhLXF1ZXJ5OiB0cnVlO1xyXG4kZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5OiBmYWxzZTsgLy8gRGVwcmVjYXRlZCwgbm8gbG9uZ2VyIGFmZmVjdHMgYW55IGNvbXBpbGVkIENTU1xyXG4kZW5hYmxlLWdyaWQtY2xhc3NlczogdHJ1ZTtcclxuJGVuYWJsZS1wb2ludGVyLWN1cnNvci1mb3ItYnV0dG9uczogdHJ1ZTtcclxuJGVuYWJsZS1wcmludC1zdHlsZXM6IHRydWU7XHJcbiRlbmFibGUtcmVzcG9uc2l2ZS1mb250LXNpemVzOiBmYWxzZTtcclxuJGVuYWJsZS12YWxpZGF0aW9uLWljb25zOiB0cnVlO1xyXG4kZW5hYmxlLWRlcHJlY2F0aW9uLW1lc3NhZ2VzOiB0cnVlO1xyXG5cclxuLy8gU3BhY2luZ1xyXG4vL1xyXG4vLyBDb250cm9sIHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgbW9zdCBCb290c3RyYXAgZWxlbWVudHMgYnkgbW9kaWZ5aW5nIHRoZXNlXHJcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cclxuLy8gWW91IGNhbiBhZGQgbW9yZSBlbnRyaWVzIHRvIHRoZSAkc3BhY2VycyBtYXAsIHNob3VsZCB5b3UgbmVlZCBtb3JlIHZhcmlhdGlvbi5cclxuXHJcbiRzcGFjZXI6IDFyZW07XHJcbiRzcGFjZXJzOiAoKTtcclxuLy8gc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNjc3MvZG9sbGFyLXZhcmlhYmxlLWRlZmF1bHRcclxuJHNwYWNlcnM6IG1hcC1tZXJnZShcclxuICAoXHJcbiAgICAwOiAwLFxyXG4gICAgMTogKFxyXG4gICAgICAkc3BhY2VyICogMC4yNSxcclxuICAgICksXHJcbiAgICAyOiAoXHJcbiAgICAgICRzcGFjZXIgKiAwLjUsXHJcbiAgICApLFxyXG4gICAgMzogJHNwYWNlcixcclxuICAgIDQ6IChcclxuICAgICAgJHNwYWNlciAqIDEuNSxcclxuICAgICksXHJcbiAgICA1OiAoXHJcbiAgICAgICRzcGFjZXIgKiAzLFxyXG4gICAgKSxcclxuICApLFxyXG4gICRzcGFjZXJzXHJcbik7XHJcblxyXG4vLyBUaGlzIHZhcmlhYmxlIGFmZmVjdHMgdGhlIGAuaC0qYCBhbmQgYC53LSpgIGNsYXNzZXMuXHJcbiRzaXplczogKCk7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRzaXplczogbWFwLW1lcmdlKFxyXG4gIChcclxuICAgIDI1OiAyNSUsXHJcbiAgICA1MDogNTAlLFxyXG4gICAgNzU6IDc1JSxcclxuICAgIDEwMDogMTAwJSxcclxuICAgIGF1dG86IGF1dG8sXHJcbiAgKSxcclxuICAkc2l6ZXNcclxuKTtcclxuXHJcbi8vIEJvZHlcclxuLy9cclxuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxyXG5cclxuJGJvZHktYmc6ICNmOGY4ZmI7XHJcbiRib2R5LWNvbG9yOiAkZ3JheS03MDA7XHJcblxyXG4vLyBMaW5rc1xyXG4vL1xyXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXHJcblxyXG4kbGluay1jb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xyXG4kbGluay1kZWNvcmF0aW9uOiBub25lO1xyXG4kbGluay1ob3Zlci1jb2xvcjogZGFya2VuKCRsaW5rLWNvbG9yLCAxNSUpO1xyXG4kbGluay1ob3Zlci1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbi8vIERhcmtlbiBwZXJjZW50YWdlIGZvciBsaW5rcyB3aXRoIGAudGV4dC0qYCBjbGFzcyAoZS5nLiBgLnRleHQtc3VjY2Vzc2ApXHJcbiRlbXBoYXNpemVkLWxpbmstaG92ZXItZGFya2VuLXBlcmNlbnRhZ2U6IDE1JTtcclxuXHJcbi8vIFBhcmFncmFwaHNcclxuLy9cclxuLy8gU3R5bGUgcCBlbGVtZW50LlxyXG5cclxuJHBhcmFncmFwaC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuLy8gR3JpZCBicmVha3BvaW50c1xyXG4vL1xyXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcclxuLy8gYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxyXG5cclxuJGdyaWQtYnJlYWtwb2ludHM6IChcclxuICB4czogMCxcclxuICBzbTogNTc2cHgsXHJcbiAgbWQ6IDc2OHB4LFxyXG4gIGxnOiA5OTJweCxcclxuICB4bDogMTIwMHB4LFxyXG4pO1xyXG5cclxuQGluY2x1ZGUgX2Fzc2VydC1hc2NlbmRpbmcoJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XHJcbkBpbmNsdWRlIF9hc3NlcnQtc3RhcnRzLWF0LXplcm8oJGdyaWQtYnJlYWtwb2ludHMsIFwiJGdyaWQtYnJlYWtwb2ludHNcIik7XHJcblxyXG4vLyBHcmlkIGNvbnRhaW5lcnNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtYXhpbXVtIHdpZHRoIG9mIGAuY29udGFpbmVyYCBmb3IgZGlmZmVyZW50IHNjcmVlbiBzaXplcy5cclxuXHJcbiRjb250YWluZXItbWF4LXdpZHRoczogKFxyXG4gIHNtOiA1NDBweCxcclxuICBtZDogNzIwcHgsXHJcbiAgbGc6IDk2MHB4LFxyXG4gIHhsOiAxMTQwcHgsXHJcbik7XHJcblxyXG5AaW5jbHVkZSBfYXNzZXJ0LWFzY2VuZGluZygkY29udGFpbmVyLW1heC13aWR0aHMsIFwiJGNvbnRhaW5lci1tYXgtd2lkdGhzXCIpO1xyXG5cclxuLy8gR3JpZCBjb2x1bW5zXHJcbi8vXHJcbi8vIFNldCB0aGUgbnVtYmVyIG9mIGNvbHVtbnMgYW5kIHNwZWNpZnkgdGhlIHdpZHRoIG9mIHRoZSBndXR0ZXJzLlxyXG5cclxuJGdyaWQtY29sdW1uczogMTI7XHJcbiRncmlkLWd1dHRlci13aWR0aDogMjRweDtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy9cclxuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxyXG5cclxuJGxpbmUtaGVpZ2h0LWxnOiAxLjU7XHJcbiRsaW5lLWhlaWdodC1zbTogMS41O1xyXG5cclxuJGJvcmRlci13aWR0aDogMXB4O1xyXG4kYm9yZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcblxyXG4kYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNHJlbTtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMnJlbTtcclxuXHJcbiRyb3VuZGVkLXBpbGw6IDUwcmVtO1xyXG5cclxuJGJveC1zaGFkb3ctc206IDAgMC4xMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4wNzUpO1xyXG4kYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE4LCAzOCwgNjMsIDAuMDMpO1xyXG4kYm94LXNoYWRvdy1sZzogMCAxcmVtIDNyZW0gcmdiYSgkYmxhY2ssIDAuMTc1KTtcclxuXHJcbiRjb21wb25lbnQtYWN0aXZlLWJnOiAkcHJpbWFyeTtcclxuXHJcbiRjYXJldC13aWR0aDogMC4zZW07XHJcbiRjYXJldC12ZXJ0aWNhbC1hbGlnbjogJGNhcmV0LXdpZHRoICogMC44NTtcclxuJGNhcmV0LXNwYWNpbmc6ICRjYXJldC13aWR0aCAqIDAuODU7XHJcblxyXG4kdHJhbnNpdGlvbi1iYXNlOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuJHRyYW5zaXRpb24tZmFkZTogb3BhY2l0eSAwLjE1cyBsaW5lYXI7XHJcbiR0cmFuc2l0aW9uLWNvbGxhcHNlOiBoZWlnaHQgMC4zNXMgZWFzZTtcclxuXHJcbiRlbWJlZC1yZXNwb25zaXZlLWFzcGVjdC1yYXRpb3M6ICgpO1xyXG4vLyBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgc2Nzcy9kb2xsYXItdmFyaWFibGUtZGVmYXVsdFxyXG4kZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zOiBqb2luKFxyXG4gICgoMjEgOSksICgxNiA5KSwgKDQgMyksICgxIDEpKSxcclxuICAkZW1iZWQtcmVzcG9uc2l2ZS1hc3BlY3QtcmF0aW9zXHJcbik7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbi8vXHJcbi8vIEZvbnQsIGxpbmUtaGVpZ2h0LCBhbmQgY29sb3IgZm9yIGJvZHkgdGV4dCwgaGVhZGluZ3MsIGFuZCBtb3JlLlxyXG5cclxuLy8gc3R5bGVsaW50LWRpc2FibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuJGZvbnQtZmFtaWx5LW1vbm9zcGFjZTogU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLFxyXG4gIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlO1xyXG4kZm9udC1mYW1pbHktYmFzZTogJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY7XHJcbi8vIHN0eWxlbGludC1lbmFibGUgdmFsdWUta2V5d29yZC1jYXNlXHJcblxyXG4kZm9udC1zaXplLWJhc2U6IDAuODEyNXJlbTtcclxuJGZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcclxuJGZvbnQtc2l6ZS1zbTogJGZvbnQtc2l6ZS1iYXNlICogMC44NzU7XHJcblxyXG4kZm9udC13ZWlnaHQtbGlnaHRlcjogbGlnaHRlcjtcclxuJGZvbnQtd2VpZ2h0LWxpZ2h0OiAzMDA7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGQ6IDYwMDtcclxuJGZvbnQtd2VpZ2h0LWJvbGRlcjogYm9sZGVyO1xyXG5cclxuJGZvbnQtd2VpZ2h0LWJhc2U6ICRmb250LXdlaWdodC1ub3JtYWw7XHJcbiRsaW5lLWhlaWdodC1iYXNlOiAxLjU7XHJcblxyXG4kaDEtZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2UgKiAyLjU7XHJcbiRoMi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDI7XHJcbiRoMy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNzU7XHJcbiRoNC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuNTtcclxuJGg1LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS4yNTtcclxuJGg2LWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG5cclxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRzcGFjZXIsIDIpO1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IG51bGw7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogNTAwO1xyXG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6IDEuMjtcclxuJGhlYWRpbmdzLWNvbG9yOiBudWxsO1xyXG5cclxuJGRpc3BsYXkxLXNpemU6IDZyZW07XHJcbiRkaXNwbGF5Mi1zaXplOiA1LjVyZW07XHJcbiRkaXNwbGF5My1zaXplOiA0LjVyZW07XHJcbiRkaXNwbGF5NC1zaXplOiAzLjVyZW07XHJcblxyXG4kZGlzcGxheTEtd2VpZ2h0OiAzMDA7XHJcbiRkaXNwbGF5Mi13ZWlnaHQ6IDMwMDtcclxuJGRpc3BsYXkzLXdlaWdodDogMzAwO1xyXG4kZGlzcGxheTQtd2VpZ2h0OiAzMDA7XHJcbiRkaXNwbGF5LWxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XHJcblxyXG4kbGVhZC1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcbiRsZWFkLWZvbnQtd2VpZ2h0OiAzMDA7XHJcblxyXG4kc21hbGwtZm9udC1zaXplOiA4MCU7XHJcblxyXG4kdGV4dC1tdXRlZDogJGdyYXktNjAwO1xyXG5cclxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICRncmF5LTYwMDtcclxuJGJsb2NrcXVvdGUtc21hbGwtZm9udC1zaXplOiAkc21hbGwtZm9udC1zaXplO1xyXG4kYmxvY2txdW90ZS1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDEuMjU7XHJcblxyXG4kaHItYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xKTtcclxuJGhyLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiRtYXJrLXBhZGRpbmc6IDAuMmVtO1xyXG5cclxuJGR0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcclxuXHJcbiRrYmQtYm94LXNoYWRvdzogaW5zZXQgMCAtMC4xcmVtIDAgcmdiYSgkYmxhY2ssIDAuMjUpO1xyXG4kbmVzdGVkLWtiZC1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LWJvbGQ7XHJcblxyXG4kbGlzdC1pbmxpbmUtcGFkZGluZzogMC41cmVtO1xyXG5cclxuJG1hcmstYmc6ICNmY2Y4ZTM7XHJcblxyXG4kaHItbWFyZ2luLXk6ICRzcGFjZXI7XHJcblxyXG4vLyBUYWJsZXNcclxuLy9cclxuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxyXG5cclxuJHRhYmxlLWNlbGwtcGFkZGluZzogMC43NXJlbTtcclxuJHRhYmxlLWNlbGwtcGFkZGluZy1zbTogMC4zcmVtO1xyXG5cclxuJHRhYmxlLWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJHRhYmxlLWJnOiBudWxsO1xyXG4kdGFibGUtYWNjZW50LWJnOiAkZ3JheS0xMDA7XHJcbiR0YWJsZS1ob3Zlci1jb2xvcjogJHRhYmxlLWNvbG9yO1xyXG4kdGFibGUtaG92ZXItYmc6ICRncmF5LTEwMDtcclxuJHRhYmxlLWFjdGl2ZS1iZzogJHRhYmxlLWhvdmVyLWJnO1xyXG5cclxuJHRhYmxlLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJHRhYmxlLWJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvcjtcclxuXHJcbiR0YWJsZS1oZWFkLWJnOiAkZ3JheS0xMDA7XHJcbiR0YWJsZS1oZWFkLWNvbG9yOiAkZ3JheS03MDA7XHJcblxyXG4kdGFibGUtZGFyay1jb2xvcjogJHdoaXRlO1xyXG4kdGFibGUtZGFyay1iZzogJGdyYXktODAwO1xyXG4kdGFibGUtZGFyay1hY2NlbnQtYmc6IHJnYmEoJHdoaXRlLCAwLjA1KTtcclxuJHRhYmxlLWRhcmstaG92ZXItY29sb3I6ICR0YWJsZS1kYXJrLWNvbG9yO1xyXG4kdGFibGUtZGFyay1ob3Zlci1iZzogcmdiYSgkd2hpdGUsIDAuMDc1KTtcclxuJHRhYmxlLWRhcmstYm9yZGVyLWNvbG9yOiBsaWdodGVuKCR0YWJsZS1kYXJrLWJnLCA3LjUlKTtcclxuJHRhYmxlLWRhcmstY29sb3I6ICR3aGl0ZTtcclxuXHJcbiR0YWJsZS1zdHJpcGVkLW9yZGVyOiBvZGQ7XHJcblxyXG4kdGFibGUtY2FwdGlvbi1jb2xvcjogJHRleHQtbXV0ZWQ7XHJcblxyXG4kdGFibGUtYmctbGV2ZWw6IC05O1xyXG4kdGFibGUtYm9yZGVyLWxldmVsOiAtNjtcclxuXHJcbi8vIEJ1dHRvbnMgKyBGb3Jtc1xyXG4vL1xyXG4vLyBTaGFyZWQgdmFyaWFibGVzIHRoYXQgYXJlIHJlYXNzaWduZWQgdG8gYCRpbnB1dC1gIGFuZCBgJGJ0bi1gIHNwZWNpZmljIHZhcmlhYmxlcy5cclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15OiAwLjQ3cmVtO1xyXG4kaW5wdXQtYnRuLXBhZGRpbmcteDogMC43NXJlbTtcclxuJGlucHV0LWJ0bi1mb250LWZhbWlseTogbnVsbDtcclxuJGlucHV0LWJ0bi1mb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kaW5wdXQtYnRuLWZvY3VzLXdpZHRoOiAwLjE1cmVtO1xyXG4kaW5wdXQtYnRuLWZvY3VzLWNvbG9yOiByZ2JhKCRjb21wb25lbnQtYWN0aXZlLWJnLCAwLjI1KTtcclxuJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93OiAwIDAgMCAkaW5wdXQtYnRuLWZvY3VzLXdpZHRoICRpbnB1dC1idG4tZm9jdXMtY29sb3I7XHJcblxyXG4kaW5wdXQtYnRuLXBhZGRpbmcteS1zbTogMC4yNXJlbTtcclxuJGlucHV0LWJ0bi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJGlucHV0LWJ0bi1mb250LXNpemUtc206ICRmb250LXNpemUtc207XHJcbiRpbnB1dC1idG4tbGluZS1oZWlnaHQtc206ICRsaW5lLWhlaWdodC1zbTtcclxuXHJcbiRpbnB1dC1idG4tcGFkZGluZy15LWxnOiAwLjVyZW07XHJcbiRpbnB1dC1idG4tcGFkZGluZy14LWxnOiAxcmVtO1xyXG4kaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZzogJGZvbnQtc2l6ZS1sZztcclxuJGlucHV0LWJ0bi1saW5lLWhlaWdodC1sZzogJGxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcblxyXG4vLyBCdXR0b25zXHJcbi8vXHJcbi8vIEZvciBlYWNoIG9mIEJvb3RzdHJhcCdzIGJ1dHRvbnMsIGRlZmluZSB0ZXh0LCBiYWNrZ3JvdW5kLCBhbmQgYm9yZGVyIGNvbG9yLlxyXG5cclxuJGJ0bi1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kYnRuLXBhZGRpbmcteDogJGlucHV0LWJ0bi1wYWRkaW5nLXg7XHJcbiRidG4tZm9udC1mYW1pbHk6ICRpbnB1dC1idG4tZm9udC1mYW1pbHk7XHJcbiRidG4tZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGJ0bi1saW5lLWhlaWdodDogJGlucHV0LWJ0bi1saW5lLWhlaWdodDtcclxuXHJcbiRidG4tcGFkZGluZy15LXNtOiAkaW5wdXQtYnRuLXBhZGRpbmcteS1zbTtcclxuJGJ0bi1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kYnRuLWZvbnQtc2l6ZS1zbTogJGlucHV0LWJ0bi1mb250LXNpemUtc207XHJcbiRidG4tbGluZS1oZWlnaHQtc206ICRpbnB1dC1idG4tbGluZS1oZWlnaHQtc207XHJcblxyXG4kYnRuLXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRidG4tcGFkZGluZy14LWxnOiAkaW5wdXQtYnRuLXBhZGRpbmcteC1sZztcclxuJGJ0bi1mb250LXNpemUtbGc6ICRpbnB1dC1idG4tZm9udC1zaXplLWxnO1xyXG4kYnRuLWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGJ0bi1ib3JkZXItd2lkdGg6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LW5vcm1hbDtcclxuJGJ0bi1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAwIHJnYmEoJHdoaXRlLCAwLjE1KSwgMCAxcHggMXB4IHJnYmEoJGJsYWNrLCAwLjA3NSk7XHJcbiRidG4tZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRidG4tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kYnRuLWRpc2FibGVkLW9wYWNpdHk6IDAuNjU7XHJcbiRidG4tYWN0aXZlLWJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKCRibGFjaywgMC4xMjUpO1xyXG5cclxuJGJ0bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kYnRuLWJsb2NrLXNwYWNpbmcteTogMC41cmVtO1xyXG5cclxuLy8gQWxsb3dzIGZvciBjdXN0b21pemluZyBidXR0b24gcmFkaXVzIGluZGVwZW5kZW50bHkgZnJvbSBnbG9iYWwgYm9yZGVyIHJhZGl1c1xyXG4kYnRuLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICRib3JkZXItcmFkaXVzLXNtO1xyXG5cclxuJGJ0bi10cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjE1cyBlYXNlLWluLW91dCxcclxuICBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4vLyBGb3Jtc1xyXG5cclxuJGxhYmVsLW1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuXHJcbiRpbnB1dC1wYWRkaW5nLXk6ICRpbnB1dC1idG4tcGFkZGluZy15O1xyXG4kaW5wdXQtcGFkZGluZy14OiAkaW5wdXQtYnRuLXBhZGRpbmcteDtcclxuJGlucHV0LWZvbnQtZmFtaWx5OiAkaW5wdXQtYnRuLWZvbnQtZmFtaWx5O1xyXG4kaW5wdXQtZm9udC1zaXplOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZTtcclxuJGlucHV0LWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYmFzZTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0OiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0O1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1zbTogJGlucHV0LWJ0bi1wYWRkaW5nLXktc207XHJcbiRpbnB1dC1wYWRkaW5nLXgtc206ICRpbnB1dC1idG4tcGFkZGluZy14LXNtO1xyXG4kaW5wdXQtZm9udC1zaXplLXNtOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1zbTtcclxuJGlucHV0LWxpbmUtaGVpZ2h0LXNtOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LXNtO1xyXG5cclxuJGlucHV0LXBhZGRpbmcteS1sZzogJGlucHV0LWJ0bi1wYWRkaW5nLXktbGc7XHJcbiRpbnB1dC1wYWRkaW5nLXgtbGc6ICRpbnB1dC1idG4tcGFkZGluZy14LWxnO1xyXG4kaW5wdXQtZm9udC1zaXplLWxnOiAkaW5wdXQtYnRuLWZvbnQtc2l6ZS1sZztcclxuJGlucHV0LWxpbmUtaGVpZ2h0LWxnOiAkaW5wdXQtYnRuLWxpbmUtaGVpZ2h0LWxnO1xyXG5cclxuJGlucHV0LWJnOiAkd2hpdGU7XHJcbiRpbnB1dC1kaXNhYmxlZC1iZzogJHdoaXRlO1xyXG5cclxuJGlucHV0LWNvbG9yOiAkZ3JheS03MDA7XHJcbiRpbnB1dC1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJGlucHV0LWJvcmRlci13aWR0aDogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XHJcbiRpbnB1dC1ib3gtc2hhZG93OiBpbnNldCAwIDFweCAxcHggcmdiYSgkYmxhY2ssIDAuMDc1KTtcclxuXHJcbiRpbnB1dC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGlucHV0LWJvcmRlci1yYWRpdXMtbGc6ICRib3JkZXItcmFkaXVzLWxnO1xyXG4kaW5wdXQtYm9yZGVyLXJhZGl1cy1zbTogJGJvcmRlci1yYWRpdXMtc207XHJcblxyXG4kaW5wdXQtZm9jdXMtYmc6ICRpbnB1dC1iZztcclxuJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjogZGFya2VuKCRpbnB1dC1ib3JkZXItY29sb3IsIDEwJSk7XHJcbiRpbnB1dC1mb2N1cy1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kaW5wdXQtZm9jdXMtd2lkdGg6ICRpbnB1dC1idG4tZm9jdXMtd2lkdGg7XHJcbiRpbnB1dC1mb2N1cy1ib3gtc2hhZG93OiBub25lO1xyXG5cclxuJGlucHV0LXBsYWNlaG9sZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiRpbnB1dC1wbGFpbnRleHQtY29sb3I6ICRib2R5LWNvbG9yO1xyXG5cclxuJGlucHV0LWhlaWdodC1ib3JkZXI6ICRpbnB1dC1ib3JkZXItd2lkdGggKiAyO1xyXG5cclxuJGlucHV0LWhlaWdodC1pbm5lcjogY2FsYyhcclxuICAjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfVxyXG4pO1xyXG4kaW5wdXQtaGVpZ2h0LWlubmVyLWhhbGY6IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQgKiAwLjVlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXl9XHJcbik7XHJcbiRpbnB1dC1oZWlnaHQtaW5uZXItcXVhcnRlcjogY2FsYyhcclxuICAjeyRpbnB1dC1saW5lLWhlaWdodCAqIDAuMjVlbX0gKyAje21hdGguZGl2KCRpbnB1dC1wYWRkaW5nLXksIDIpfVxyXG4pO1xyXG5cclxuJGlucHV0LWhlaWdodDogY2FsYyhcclxuICAjeyRpbnB1dC1saW5lLWhlaWdodCAqIDFlbX0gKyAjeyRpbnB1dC1wYWRkaW5nLXkgKiAyfSArICN7JGlucHV0LWhlaWdodC1ib3JkZXJ9XHJcbik7XHJcbiRpbnB1dC1oZWlnaHQtc206IGNhbGMoXHJcbiAgI3skaW5wdXQtbGluZS1oZWlnaHQtc20gKiAxZW19ICsgI3skaW5wdXQtYnRuLXBhZGRpbmcteS1zbSAqIDJ9ICsgI3skaW5wdXQtaGVpZ2h0LWJvcmRlcn1cclxuKTtcclxuJGlucHV0LWhlaWdodC1sZzogY2FsYyhcclxuICAjeyRpbnB1dC1saW5lLWhlaWdodC1sZyAqIDFlbX0gKyAjeyRpbnB1dC1idG4tcGFkZGluZy15LWxnICogMn0gKyAjeyRpbnB1dC1oZWlnaHQtYm9yZGVyfVxyXG4pO1xyXG5cclxuJGlucHV0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAwLjE1cyBlYXNlLWluLW91dDtcclxuXHJcbiRmb3JtLXRleHQtbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuXHJcbiRmb3JtLWNoZWNrLWlucHV0LWd1dHRlcjogMS4yNXJlbTtcclxuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXk6IDAuM3JlbTtcclxuJGZvcm0tY2hlY2staW5wdXQtbWFyZ2luLXg6IDAuMjVyZW07XHJcblxyXG4kZm9ybS1jaGVjay1pbmxpbmUtbWFyZ2luLXg6IDAuNzVyZW07XHJcbiRmb3JtLWNoZWNrLWlubGluZS1pbnB1dC1tYXJnaW4teDogMC4zMTI1cmVtO1xyXG5cclxuJGZvcm0tZ3JpZC1ndXR0ZXItd2lkdGg6IDEwcHg7XHJcbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206IDFyZW07XHJcblxyXG4kaW5wdXQtZ3JvdXAtYWRkb24tY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAkZ3JheS0yMDA7XHJcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XHJcblxyXG4kY3VzdG9tLWZvcm1zLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsXHJcbiAgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWd1dHRlcjogMC41cmVtO1xyXG4kY3VzdG9tLWNvbnRyb2wtc3BhY2VyLXg6IDFyZW07XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLXNpemU6IDFyZW07XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmc6ICRpbnB1dC1iZztcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItYmctc2l6ZTogNTAlIDUwJTtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3gtc2hhZG93OiAkaW5wdXQtYm94LXNoYWRvdztcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItY29sb3I6ICRncmF5LTUwMDtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGg7XHJcblxyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmc7XHJcbiRjdXN0b20tY29udHJvbC1sYWJlbC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJnOiAkcHJpbWFyeTtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWRpc2FibGVkLWJnOiByZ2JhKFxyXG4gIHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKSxcclxuICAwLjVcclxuKTtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1ib3JkZXItY29sb3I6ICRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItY2hlY2tlZC1iZztcclxuXHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWZvY3VzLWJveC1zaGFkb3c7XHJcbiRjdXN0b20tY29udHJvbC1pbmRpY2F0b3ItZm9jdXMtYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG5cclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtY29sb3I6ICRjb21wb25lbnQtYWN0aXZlLWNvbG9yO1xyXG4kY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZzogbGlnaHRlbigkY29tcG9uZW50LWFjdGl2ZS1iZywgMzUlKTtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm94LXNoYWRvdzogbm9uZTtcclxuJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1hY3RpdmUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWFjdGl2ZS1iZztcclxuXHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skY3VzdG9tLWNvbnRyb2wtaW5kaWNhdG9yLWNoZWNrZWQtY29sb3J9JyBkPSdNNi41NjQuNzVsLTMuNTkgMy42MTItMS41MzgtMS41NUwwIDQuMjYgMi45NzQgNy4yNSA4IDIuMTkzeicvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcblxyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuJGN1c3RvbS1jaGVja2JveC1pbmRpY2F0b3ItaW5kZXRlcm1pbmF0ZS1jb2xvcjogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yO1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pY29uLWluZGV0ZXJtaW5hdGU6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNCA0JyUzZSUzY3BhdGggc3Ryb2tlPScjeyRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtY29sb3J9JyBkPSdNMCAyaDQnLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJveC1zaGFkb3c6IG5vbmU7XHJcbiRjdXN0b20tY2hlY2tib3gtaW5kaWNhdG9yLWluZGV0ZXJtaW5hdGUtYm9yZGVyLWNvbG9yOiAkY3VzdG9tLWNoZWNrYm94LWluZGljYXRvci1pbmRldGVybWluYXRlLWJnO1xyXG5cclxuJGN1c3RvbS1yYWRpby1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1czogNTAlO1xyXG4kY3VzdG9tLXJhZGlvLWluZGljYXRvci1pY29uLWNoZWNrZWQ6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PSctNCAtNCA4IDgnJTNlJTNjY2lyY2xlIHI9JzMnIGZpbGw9JyN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1jaGVja2VkLWNvbG9yfScvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcblxyXG4kY3VzdG9tLXN3aXRjaC13aWR0aDogJGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplICogMS43NTtcclxuJGN1c3RvbS1zd2l0Y2gtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXM6IG1hdGguZGl2KCRjdXN0b20tY29udHJvbC1pbmRpY2F0b3Itc2l6ZSwgMik7XHJcbiRjdXN0b20tc3dpdGNoLWluZGljYXRvci1zaXplOiBjYWxjKFxyXG4gICN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1zaXplfSAtICN7JGN1c3RvbS1jb250cm9sLWluZGljYXRvci1ib3JkZXItd2lkdGggKlxyXG4gICAgNH1cclxuKTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteTogJGlucHV0LXBhZGRpbmcteTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14OiAkaW5wdXQtcGFkZGluZy14O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LWZhbWlseTogJGlucHV0LWZvbnQtZmFtaWx5O1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemU6ICRpbnB1dC1mb250LXNpemU7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodDogJGlucHV0LWhlaWdodDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmc6IDFyZW07IC8vIEV4dHJhIHBhZGRpbmcgdG8gYWNjb3VudCBmb3IgdGhlIHByZXNlbmNlIG9mIHRoZSBiYWNrZ3JvdW5kLWltYWdlIGJhc2VkIGluZGljYXRvclxyXG4kY3VzdG9tLXNlbGVjdC1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1saW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0O1xyXG4kY3VzdG9tLXNlbGVjdC1jb2xvcjogJGlucHV0LWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1jb2xvcjogJGdyYXktNjAwO1xyXG4kY3VzdG9tLXNlbGVjdC1iZzogJGlucHV0LWJnO1xyXG4kY3VzdG9tLXNlbGVjdC1kaXNhYmxlZC1iZzogJGdyYXktMjAwO1xyXG4kY3VzdG9tLXNlbGVjdC1iZy1zaXplOiA4cHggMTBweDsgLy8gSW4gcGl4ZWxzIGJlY2F1c2UgaW1hZ2UgZGltZW5zaW9uc1xyXG4kY3VzdG9tLXNlbGVjdC1pbmRpY2F0b3ItY29sb3I6ICRncmF5LTgwMDtcclxuJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDQgNSclM2UlM2NwYXRoIGZpbGw9JyN7JGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLWNvbG9yfScgZD0nTTIgMEwwIDJoNHptMCA1TDAgM2g0eicvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcbiRjdXN0b20tc2VsZWN0LWJhY2tncm91bmQ6ICRjdXN0b20tc2VsZWN0LWluZGljYXRvciBuby1yZXBlYXQgcmlnaHRcclxuICAkY3VzdG9tLXNlbGVjdC1wYWRkaW5nLXggY2VudGVyIC8gJGN1c3RvbS1zZWxlY3QtYmctc2l6ZTsgLy8gVXNlZCBzbyB3ZSBjYW4gaGF2ZSBtdWx0aXBsZSBiYWNrZ3JvdW5kIGVsZW1lbnRzIChlLmcuLCBhcnJvdyBhbmQgZmVlZGJhY2sgaWNvbilcclxuXHJcbiRjdXN0b20tc2VsZWN0LWZlZWRiYWNrLWljb24tcGFkZGluZy1yaWdodDogY2FsYyhcclxuICAoMWVtICsgI3syICogJGN1c3RvbS1zZWxlY3QtcGFkZGluZy15fSkgKiAzIC8gNCArICN7JGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICtcclxuICAgICRjdXN0b20tc2VsZWN0LWluZGljYXRvci1wYWRkaW5nfVxyXG4pO1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHRcclxuICAoJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14ICsgJGN1c3RvbS1zZWxlY3QtaW5kaWNhdG9yLXBhZGRpbmcpO1xyXG4kY3VzdG9tLXNlbGVjdC1mZWVkYmFjay1pY29uLXNpemU6ICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZlxyXG4gICRpbnB1dC1oZWlnaHQtaW5uZXItaGFsZjtcclxuXHJcbiRjdXN0b20tc2VsZWN0LWJvcmRlci13aWR0aDogJGlucHV0LWJvcmRlci13aWR0aDtcclxuJGN1c3RvbS1zZWxlY3QtYm9yZGVyLWNvbG9yOiAkaW5wdXQtYm9yZGVyLWNvbG9yO1xyXG4kY3VzdG9tLXNlbGVjdC1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1zZWxlY3QtYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMnB4IHJnYmEoJGJsYWNrLCAwLjA3NSk7XHJcblxyXG4kY3VzdG9tLXNlbGVjdC1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGg7XHJcbiRjdXN0b20tc2VsZWN0LWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwICRjdXN0b20tc2VsZWN0LWZvY3VzLXdpZHRoXHJcbiAgJGlucHV0LWJ0bi1mb2N1cy1jb2xvcjtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1zbTogJGlucHV0LXBhZGRpbmcteS1zbTtcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LXNtOiAkaW5wdXQtcGFkZGluZy14LXNtO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtc206ICRpbnB1dC1mb250LXNpemUtc207XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1zbTogJGlucHV0LWhlaWdodC1zbTtcclxuXHJcbiRjdXN0b20tc2VsZWN0LXBhZGRpbmcteS1sZzogJGlucHV0LXBhZGRpbmcteS1sZztcclxuJGN1c3RvbS1zZWxlY3QtcGFkZGluZy14LWxnOiAkaW5wdXQtcGFkZGluZy14LWxnO1xyXG4kY3VzdG9tLXNlbGVjdC1mb250LXNpemUtbGc6ICRpbnB1dC1mb250LXNpemUtbGc7XHJcbiRjdXN0b20tc2VsZWN0LWhlaWdodC1sZzogJGlucHV0LWhlaWdodC1sZztcclxuXHJcbiRjdXN0b20tcmFuZ2UtdHJhY2std2lkdGg6IDEwMCU7XHJcbiRjdXN0b20tcmFuZ2UtdHJhY2staGVpZ2h0OiAwLjVyZW07XHJcbiRjdXN0b20tcmFuZ2UtdHJhY2stY3Vyc29yOiBwb2ludGVyO1xyXG4kY3VzdG9tLXJhbmdlLXRyYWNrLWJnOiAkZ3JheS0zMDA7XHJcbiRjdXN0b20tcmFuZ2UtdHJhY2stYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGN1c3RvbS1yYW5nZS10cmFjay1ib3gtc2hhZG93OiBpbnNldCAwIDAuMjVyZW0gMC4yNXJlbSByZ2JhKCRibGFjaywgMC4xKTtcclxuXHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItd2lkdGg6IDFyZW07XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItaGVpZ2h0OiAkY3VzdG9tLXJhbmdlLXRodW1iLXdpZHRoO1xyXG4kY3VzdG9tLXJhbmdlLXRodW1iLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3JkZXI6IDA7XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItYm9yZGVyLXJhZGl1czogMXJlbTtcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1ib3gtc2hhZG93OiAwIDAuMXJlbSAwLjI1cmVtIHJnYmEoJGJsYWNrLCAwLjEpO1xyXG4kY3VzdG9tLXJhbmdlLXRodW1iLWZvY3VzLWJveC1zaGFkb3c6IDAgMCAwIDFweCAkYm9keS1iZyxcclxuICAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdztcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1mb2N1cy1ib3gtc2hhZG93LXdpZHRoOiAkaW5wdXQtZm9jdXMtd2lkdGg7IC8vIEZvciBmb2N1cyBib3ggc2hhZG93IGlzc3VlIGluIElFL0VkZ2VcclxuJGN1c3RvbS1yYW5nZS10aHVtYi1hY3RpdmUtYmc6IGxpZ2h0ZW4oJGNvbXBvbmVudC1hY3RpdmUtYmcsIDM1JSk7XHJcbiRjdXN0b20tcmFuZ2UtdGh1bWItZGlzYWJsZWQtYmc6ICRncmF5LTUwMDtcclxuXHJcbiRjdXN0b20tZmlsZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XHJcbiRjdXN0b20tZmlsZS1oZWlnaHQtaW5uZXI6ICRpbnB1dC1oZWlnaHQtaW5uZXI7XHJcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tZmlsZS1mb2N1cy1ib3gtc2hhZG93OiAkaW5wdXQtZm9jdXMtYm94LXNoYWRvdztcclxuJGN1c3RvbS1maWxlLWRpc2FibGVkLWJnOiAkaW5wdXQtZGlzYWJsZWQtYmc7XHJcblxyXG4kY3VzdG9tLWZpbGUtcGFkZGluZy15OiAkaW5wdXQtcGFkZGluZy15O1xyXG4kY3VzdG9tLWZpbGUtcGFkZGluZy14OiAkaW5wdXQtcGFkZGluZy14O1xyXG4kY3VzdG9tLWZpbGUtbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodDtcclxuJGN1c3RvbS1maWxlLWZvbnQtZmFtaWx5OiAkaW5wdXQtZm9udC1mYW1pbHk7XHJcbiRjdXN0b20tZmlsZS1mb250LXdlaWdodDogJGlucHV0LWZvbnQtd2VpZ2h0O1xyXG4kY3VzdG9tLWZpbGUtY29sb3I6ICRpbnB1dC1jb2xvcjtcclxuJGN1c3RvbS1maWxlLWJnOiAkaW5wdXQtYmc7XHJcbiRjdXN0b20tZmlsZS1ib3JkZXItd2lkdGg6ICRpbnB1dC1ib3JkZXItd2lkdGg7XHJcbiRjdXN0b20tZmlsZS1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3I7XHJcbiRjdXN0b20tZmlsZS1ib3JkZXItcmFkaXVzOiAkaW5wdXQtYm9yZGVyLXJhZGl1cztcclxuJGN1c3RvbS1maWxlLWJveC1zaGFkb3c6ICRpbnB1dC1ib3gtc2hhZG93O1xyXG4kY3VzdG9tLWZpbGUtYnV0dG9uLWNvbG9yOiAkY3VzdG9tLWZpbGUtY29sb3I7XHJcbiRjdXN0b20tZmlsZS1idXR0b24tYmc6ICRpbnB1dC1ncm91cC1hZGRvbi1iZztcclxuJGN1c3RvbS1maWxlLXRleHQ6IChcclxuICBlbjogXCJCcm93c2VcIixcclxuKTtcclxuXHJcbi8vIEZvcm0gdmFsaWRhdGlvblxyXG5cclxuJGZvcm0tZmVlZGJhY2stbWFyZ2luLXRvcDogJGZvcm0tdGV4dC1tYXJnaW4tdG9wO1xyXG4kZm9ybS1mZWVkYmFjay1mb250LXNpemU6ICRzbWFsbC1mb250LXNpemU7XHJcbiRmb3JtLWZlZWRiYWNrLXZhbGlkLWNvbG9yOiB0aGVtZS1jb2xvcihcInN1Y2Nlc3NcIik7XHJcbiRmb3JtLWZlZWRiYWNrLWludmFsaWQtY29sb3I6IHRoZW1lLWNvbG9yKFwiZGFuZ2VyXCIpO1xyXG5cclxuJGZvcm0tZmVlZGJhY2staWNvbi12YWxpZC1jb2xvcjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3I7XHJcbiRmb3JtLWZlZWRiYWNrLWljb24tdmFsaWQ6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgOCA4JyUzZSUzY3BhdGggZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLWNvbG9yfScgZD0nTTIuMyA2LjczTC42IDQuNTNjLS40LTEuMDQuNDYtMS40IDEuMS0uOGwxLjEgMS40IDMuNC0zLjhjLjYtLjYzIDEuNi0uMjcgMS4yLjdsLTQgNC42Yy0uNDMuNS0uOC40LTEuMS4xeicvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcbiRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZC1jb2xvcjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcjtcclxuJGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nI3skZm9ybS1mZWVkYmFjay1pY29uLWludmFsaWQtY29sb3J9JyB2aWV3Qm94PSctMiAtMiA3IDcnJTNlJTNjcGF0aCBzdHJva2U9JyN7JGZvcm0tZmVlZGJhY2staWNvbi1pbnZhbGlkLWNvbG9yfScgZD0nTTAgMGwzIDNtMC0zTDAgMycvJTNlJTNjY2lyY2xlIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3k9JzMnIHI9Jy41Jy8lM2UlM2NjaXJjbGUgY3g9JzMnIGN5PSczJyByPScuNScvJTNlJTNjL3N2ZyUzRVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcblxyXG4kZm9ybS12YWxpZGF0aW9uLXN0YXRlczogKCk7XHJcbi8vIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzY3NzL2RvbGxhci12YXJpYWJsZS1kZWZhdWx0XHJcbiRmb3JtLXZhbGlkYXRpb24tc3RhdGVzOiBtYXAtbWVyZ2UoXHJcbiAgKFxyXG4gICAgXCJ2YWxpZFwiOiAoXHJcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2stdmFsaWQtY29sb3IsXHJcbiAgICAgIFwiaWNvblwiOiAkZm9ybS1mZWVkYmFjay1pY29uLXZhbGlkLFxyXG4gICAgKSxcclxuICAgIFwiaW52YWxpZFwiOiAoXHJcbiAgICAgIFwiY29sb3JcIjogJGZvcm0tZmVlZGJhY2staW52YWxpZC1jb2xvcixcclxuICAgICAgXCJpY29uXCI6ICRmb3JtLWZlZWRiYWNrLWljb24taW52YWxpZCxcclxuICAgICksXHJcbiAgKSxcclxuICAkZm9ybS12YWxpZGF0aW9uLXN0YXRlc1xyXG4pO1xyXG5cclxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxyXG4vL1xyXG4vLyBXYXJuaW5nOiBBdm9pZCBjdXN0b21pemluZyB0aGVzZSB2YWx1ZXMuIFRoZXkncmUgdXNlZCBmb3IgYSBiaXJkJ3MgZXllIHZpZXdcclxuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxyXG5cclxuJHppbmRleC1kcm9wZG93bjogMTAwMDtcclxuJHppbmRleC1zdGlja3k6IDEwMjA7XHJcbiR6aW5kZXgtZml4ZWQ6IDEwMzA7XHJcbiR6aW5kZXgtbW9kYWwtYmFja2Ryb3A6IDEwNDA7XHJcbiR6aW5kZXgtbW9kYWw6IDEwNTA7XHJcbiR6aW5kZXgtcG9wb3ZlcjogMTA2MDtcclxuJHppbmRleC10b29sdGlwOiAxMDcwO1xyXG5cclxuLy8gTmF2c1xyXG5cclxuJG5hdi1saW5rLXBhZGRpbmcteTogMC41cmVtO1xyXG4kbmF2LWxpbmstcGFkZGluZy14OiAxcmVtO1xyXG4kbmF2LWxpbmstZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbiRuYXYtdGFicy1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuJG5hdi10YWJzLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJG5hdi10YWJzLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTIwMCAkZ3JheS0yMDAgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcclxuJG5hdi10YWJzLWxpbmstYWN0aXZlLWNvbG9yOiAkZ3JheS03MDA7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1iZzogJGNhcmQtYmc7XHJcbiRuYXYtdGFicy1saW5rLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRncmF5LTQwMCAkZ3JheS00MDAgJG5hdi10YWJzLWxpbmstYWN0aXZlLWJnO1xyXG5cclxuJG5hdi1waWxscy1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuJG5hdi1waWxscy1saW5rLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRuYXYtcGlsbHMtbGluay1hY3RpdmUtYmc6ICRjb21wb25lbnQtYWN0aXZlLWJnO1xyXG5cclxuJG5hdi1kaXZpZGVyLWNvbG9yOiAkZ3JheS0yMDA7XHJcbiRuYXYtZGl2aWRlci1tYXJnaW4teTogbWF0aC5kaXYoJHNwYWNlciwgMik7XHJcblxyXG4vLyBOYXZiYXJcclxuXHJcbiRuYXZiYXItcGFkZGluZy15OiBtYXRoLmRpdigkc3BhY2VyLCAyKTtcclxuJG5hdmJhci1wYWRkaW5nLXg6ICRzcGFjZXI7XHJcblxyXG4kbmF2YmFyLW5hdi1saW5rLXBhZGRpbmcteDogMC41cmVtO1xyXG5cclxuJG5hdmJhci1icmFuZC1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbi8vIENvbXB1dGUgdGhlIG5hdmJhci1icmFuZCBwYWRkaW5nLXkgc28gdGhlIG5hdmJhci1icmFuZCB3aWxsIGhhdmUgdGhlIHNhbWUgaGVpZ2h0IGFzIG5hdmJhci10ZXh0IGFuZCBuYXYtbGlua1xyXG4kbmF2LWxpbmstaGVpZ2h0OiAkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQtYmFzZSArICRuYXYtbGluay1wYWRkaW5nLXkgKiAyO1xyXG4kbmF2YmFyLWJyYW5kLWhlaWdodDogJG5hdmJhci1icmFuZC1mb250LXNpemUgKiAkbGluZS1oZWlnaHQtYmFzZTtcclxuJG5hdmJhci1icmFuZC1wYWRkaW5nLXk6IG1hdGguZGl2KCgkbmF2LWxpbmstaGVpZ2h0IC0gJG5hdmJhci1icmFuZC1oZWlnaHQpLCAyKTtcclxuXHJcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXk6IDAuMjVyZW07XHJcbiRuYXZiYXItdG9nZ2xlci1wYWRkaW5nLXg6IDAuNzVyZW07XHJcbiRuYXZiYXItdG9nZ2xlci1mb250LXNpemU6ICRmb250LXNpemUtbGc7XHJcbiRuYXZiYXItdG9nZ2xlci1ib3JkZXItcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXM7XHJcblxyXG4kbmF2YmFyLWRhcmstY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6IHJnYmEoJHdoaXRlLCAwLjc1KTtcclxuJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjogJHdoaXRlO1xyXG4kbmF2YmFyLWRhcmstZGlzYWJsZWQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjI1KTtcclxuJG5hdmJhci1kYXJrLXRvZ2dsZXItaWNvbi1iZzogc3RyLXJlcGxhY2UoXHJcbiAgdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzY3N2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM2UlM2NwYXRoIHN0cm9rZT0nI3skbmF2YmFyLWRhcmstY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcbiRuYXZiYXItZGFyay10b2dnbGVyLWJvcmRlci1jb2xvcjogcmdiYSgkd2hpdGUsIDAuMSk7XHJcblxyXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiByZ2JhKCRibGFjaywgMC41KTtcclxuJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuNyk7XHJcbiRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yOiByZ2JhKCRibGFjaywgMC45KTtcclxuJG5hdmJhci1saWdodC1kaXNhYmxlZC1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMyk7XHJcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1pY29uLWJnOiBzdHItcmVwbGFjZShcclxuICB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNjc3ZnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzZSUzY3BhdGggc3Ryb2tlPScjeyRuYXZiYXItbGlnaHQtY29sb3J9JyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA3aDIyTTQgMTVoMjJNNCAyM2gyMicvJTNlJTNjL3N2ZyUzZVwiKSxcclxuICBcIiNcIixcclxuICBcIiUyM1wiXHJcbik7XHJcbiRuYXZiYXItbGlnaHQtdG9nZ2xlci1ib3JkZXItY29sb3I6IHJnYmEoJGJsYWNrLCAwLjEpO1xyXG5cclxuJG5hdmJhci1saWdodC1icmFuZC1jb2xvcjogJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I7XHJcbiRuYXZiYXItbGlnaHQtYnJhbmQtaG92ZXItY29sb3I6ICRuYXZiYXItbGlnaHQtYWN0aXZlLWNvbG9yO1xyXG4kbmF2YmFyLWRhcmstYnJhbmQtY29sb3I6ICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I7XHJcbiRuYXZiYXItZGFyay1icmFuZC1ob3Zlci1jb2xvcjogJG5hdmJhci1kYXJrLWFjdGl2ZS1jb2xvcjtcclxuXHJcbi8vIERyb3Bkb3duc1xyXG4vL1xyXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXHJcblxyXG4kZHJvcGRvd24tbWluLXdpZHRoOiAxMHJlbTtcclxuJGRyb3Bkb3duLXBhZGRpbmcteTogMC41cmVtO1xyXG4kZHJvcGRvd24tc3BhY2VyOiAwLjEyNXJlbTtcclxuJGRyb3Bkb3duLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xyXG4kZHJvcGRvd24tY29sb3I6ICRib2R5LWNvbG9yO1xyXG4kZHJvcGRvd24tYmc6ICR3aGl0ZTtcclxuJGRyb3Bkb3duLWJvcmRlci1jb2xvcjogcmdiYSgkYmxhY2ssIDAuMTUpO1xyXG4kZHJvcGRvd24tYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRkcm9wZG93bi1ib3JkZXItd2lkdGg6IDA7XHJcbiRkcm9wZG93bi1pbm5lci1ib3JkZXItcmFkaXVzOiBjYWxjKFxyXG4gICN7JGRyb3Bkb3duLWJvcmRlci1yYWRpdXN9IC0gI3skZHJvcGRvd24tYm9yZGVyLXdpZHRofVxyXG4pO1xyXG4kZHJvcGRvd24tZGl2aWRlci1iZzogJGdyYXktMjAwO1xyXG4kZHJvcGRvd24tZGl2aWRlci1tYXJnaW4teTogJG5hdi1kaXZpZGVyLW1hcmdpbi15O1xyXG4kZHJvcGRvd24tYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKCRibGFjaywgMC4xNzUpO1xyXG5cclxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICRncmF5LTkwMDtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItY29sb3I6IGRhcmtlbigkZ3JheS05MDAsIDUlKTtcclxuJGRyb3Bkb3duLWxpbmstaG92ZXItYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1jb2xvcjogZGFya2VuKCRncmF5LTkwMCwgNSUpO1xyXG4kZHJvcGRvd24tbGluay1hY3RpdmUtYmc6ICRncmF5LTEwMDtcclxuXHJcbiRkcm9wZG93bi1saW5rLWRpc2FibGVkLWNvbG9yOiAkZ3JheS02MDA7XHJcblxyXG4kZHJvcGRvd24taXRlbS1wYWRkaW5nLXk6IDAuMzVyZW07XHJcbiRkcm9wZG93bi1pdGVtLXBhZGRpbmcteDogMS41cmVtO1xyXG5cclxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG5cclxuLy8gUGFnaW5hdGlvblxyXG5cclxuJHBhZ2luYXRpb24tcGFkZGluZy15OiAwLjVyZW07XHJcbiRwYWdpbmF0aW9uLXBhZGRpbmcteDogMC43NXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LXNtOiAwLjI1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206IDAuNXJlbTtcclxuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAwLjc1cmVtO1xyXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtbGc6IDEuNXJlbTtcclxuJHBhZ2luYXRpb24tbGluZS1oZWlnaHQ6IDEuMjU7XHJcblxyXG4kcGFnaW5hdGlvbi1jb2xvcjogJGdyYXktNjAwO1xyXG4kcGFnaW5hdGlvbi1iZzogJHdoaXRlO1xyXG4kcGFnaW5hdGlvbi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG5cclxuJHBhZ2luYXRpb24tZm9jdXMtYm94LXNoYWRvdzogJGlucHV0LWJ0bi1mb2N1cy1ib3gtc2hhZG93O1xyXG4kcGFnaW5hdGlvbi1mb2N1cy1vdXRsaW5lOiAwO1xyXG5cclxuJHBhZ2luYXRpb24taG92ZXItY29sb3I6ICRsaW5rLWhvdmVyLWNvbG9yO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1iZzogJGdyYXktMjAwO1xyXG4kcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXItY29sb3I6ICRncmF5LTQwMDtcclxuXHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1iZzogJGNvbXBvbmVudC1hY3RpdmUtYmc7XHJcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1iZztcclxuXHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yOiAkZ3JheS00MDA7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAkd2hpdGU7XHJcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJvcmRlci1jb2xvcjogJGdyYXktNDAwO1xyXG5cclxuLy8gSnVtYm90cm9uXHJcblxyXG4kanVtYm90cm9uLXBhZGRpbmc6IDJyZW07XHJcbiRqdW1ib3Ryb24tY29sb3I6IG51bGw7XHJcbiRqdW1ib3Ryb24tYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIENhcmRzXHJcblxyXG4kY2FyZC1zcGFjZXIteTogMC43NXJlbTtcclxuJGNhcmQtc3BhY2VyLXg6IDEuMjVyZW07XHJcbiRjYXJkLWJvcmRlci13aWR0aDogMDtcclxuJGNhcmQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRjYXJkLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG4kY2FyZC1pbm5lci1ib3JkZXItcmFkaXVzOiBjYWxjKCN7JGNhcmQtYm9yZGVyLXJhZGl1c30gLSAjeyRjYXJkLWJvcmRlci13aWR0aH0pO1xyXG4kY2FyZC1jYXAtYmc6ICRncmF5LTMwMDtcclxuJGNhcmQtY2FwLWNvbG9yOiBudWxsO1xyXG4kY2FyZC1jb2xvcjogbnVsbDtcclxuJGNhcmQtYmc6ICR3aGl0ZTtcclxuXHJcbiRjYXJkLXRpdGxlLWRlc2M6ICRncmF5LTYwMDtcclxuXHJcbiRjYXJkLWltZy1vdmVybGF5LXBhZGRpbmc6IDEuMjVyZW07XHJcblxyXG4kY2FyZC1ncm91cC1tYXJnaW46bWF0aC5kaXYoJGdyaWQtZ3V0dGVyLXdpZHRoLCAyKTtcclxuJGNhcmQtZGVjay1tYXJnaW46ICRjYXJkLWdyb3VwLW1hcmdpbjtcclxuXHJcbiRjYXJkLWNvbHVtbnMtY291bnQ6IDM7XHJcbiRjYXJkLWNvbHVtbnMtZ2FwOiAxLjI1cmVtO1xyXG4kY2FyZC1jb2x1bW5zLW1hcmdpbjogJGdyaWQtZ3V0dGVyLXdpZHRoO1xyXG5cclxuLy8gVG9vbHRpcHNcclxuXHJcbiR0b29sdGlwLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1zbTtcclxuJHRvb2x0aXAtbWF4LXdpZHRoOiAyMDBweDtcclxuJHRvb2x0aXAtY29sb3I6ICR3aGl0ZTtcclxuJHRvb2x0aXAtYmc6ICRibGFjaztcclxuJHRvb2x0aXAtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiR0b29sdGlwLW9wYWNpdHk6IDAuOTtcclxuJHRvb2x0aXAtcGFkZGluZy15OiAwLjRyZW07XHJcbiR0b29sdGlwLXBhZGRpbmcteDogMC43cmVtO1xyXG4kdG9vbHRpcC1tYXJnaW46IDA7XHJcblxyXG4kdG9vbHRpcC1hcnJvdy13aWR0aDogMC44cmVtO1xyXG4kdG9vbHRpcC1hcnJvdy1oZWlnaHQ6IDAuNHJlbTtcclxuJHRvb2x0aXAtYXJyb3ctY29sb3I6ICR0b29sdGlwLWJnO1xyXG5cclxuLy8gRm9ybSB0b29sdGlwcyBtdXN0IGNvbWUgYWZ0ZXIgcmVndWxhciB0b29sdGlwc1xyXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteTogJHRvb2x0aXAtcGFkZGluZy15O1xyXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLXBhZGRpbmcteDogJHRvb2x0aXAtcGFkZGluZy14O1xyXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWZvbnQtc2l6ZTogJHRvb2x0aXAtZm9udC1zaXplO1xyXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtYmFzZTtcclxuJGZvcm0tZmVlZGJhY2stdG9vbHRpcC1vcGFjaXR5OiAkdG9vbHRpcC1vcGFjaXR5O1xyXG4kZm9ybS1mZWVkYmFjay10b29sdGlwLWJvcmRlci1yYWRpdXM6ICR0b29sdGlwLWJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyBQb3BvdmVyc1xyXG5cclxuJHBvcG92ZXItZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xyXG4kcG9wb3Zlci1iZzogJHdoaXRlO1xyXG4kcG9wb3Zlci1tYXgtd2lkdGg6IDI3NnB4O1xyXG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRwb3BvdmVyLWJvcmRlci1jb2xvcjogJGdyYXktMjAwO1xyXG4kcG9wb3Zlci1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1sZztcclxuJHBvcG92ZXItYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNXJlbSByZ2JhKCRibGFjaywgMC4yKTtcclxuXHJcbiRwb3BvdmVyLWhlYWRlci1iZzogZGFya2VuKCRwb3BvdmVyLWJnLCAzJSk7XHJcbiRwb3BvdmVyLWhlYWRlci1jb2xvcjogJGhlYWRpbmdzLWNvbG9yO1xyXG4kcG9wb3Zlci1oZWFkZXItcGFkZGluZy15OiAwLjVyZW07XHJcbiRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXg6IDAuNzVyZW07XHJcblxyXG4kcG9wb3Zlci1ib2R5LWNvbG9yOiAkYm9keS1jb2xvcjtcclxuJHBvcG92ZXItYm9keS1wYWRkaW5nLXk6ICRwb3BvdmVyLWhlYWRlci1wYWRkaW5nLXk7XHJcbiRwb3BvdmVyLWJvZHktcGFkZGluZy14OiAkcG9wb3Zlci1oZWFkZXItcGFkZGluZy14O1xyXG5cclxuJHBvcG92ZXItYXJyb3ctd2lkdGg6IDFyZW07XHJcbiRwb3BvdmVyLWFycm93LWhlaWdodDogMC41cmVtO1xyXG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogJHBvcG92ZXItYmc7XHJcblxyXG4kcG9wb3Zlci1hcnJvdy1vdXRlci1jb2xvcjogZmFkZS1pbigkcG9wb3Zlci1ib3JkZXItY29sb3IsIDAuMDUpO1xyXG5cclxuLy8gVG9hc3RzXHJcblxyXG4kdG9hc3QtbWF4LXdpZHRoOiAzNTBweDtcclxuJHRvYXN0LXBhZGRpbmcteDogMC43NXJlbTtcclxuJHRvYXN0LXBhZGRpbmcteTogMC4yNXJlbTtcclxuJHRvYXN0LWZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiR0b2FzdC1jb2xvcjogbnVsbDtcclxuJHRvYXN0LWJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjg1KTtcclxuJHRvYXN0LWJvcmRlci13aWR0aDogMXB4O1xyXG4kdG9hc3QtYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiR0b2FzdC1ib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG4kdG9hc3QtYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgkYmxhY2ssIDAuMSk7XHJcblxyXG4kdG9hc3QtaGVhZGVyLWNvbG9yOiAkZ3JheS02MDA7XHJcbiR0b2FzdC1oZWFkZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkd2hpdGUsIDAuODUpO1xyXG4kdG9hc3QtaGVhZGVyLWJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuXHJcbi8vIEJhZGdlc1xyXG5cclxuJGJhZGdlLWZvbnQtc2l6ZTogNzUlO1xyXG4kYmFkZ2UtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1tZWRpdW07XHJcbiRiYWRnZS1wYWRkaW5nLXk6IDAuMjVlbTtcclxuJGJhZGdlLXBhZGRpbmcteDogMC40ZW07XHJcbiRiYWRnZS1ib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cztcclxuXHJcbiRiYWRnZS10cmFuc2l0aW9uOiAkYnRuLXRyYW5zaXRpb247XHJcbiRiYWRnZS1mb2N1cy13aWR0aDogJGlucHV0LWJ0bi1mb2N1cy13aWR0aDtcclxuXHJcbiRiYWRnZS1waWxsLXBhZGRpbmcteDogMC42ZW07XHJcbi8vIFVzZSBhIGhpZ2hlciB0aGFuIG5vcm1hbCB2YWx1ZSB0byBlbnN1cmUgY29tcGxldGVseSByb3VuZGVkIGVkZ2VzIHdoZW5cclxuLy8gY3VzdG9taXppbmcgcGFkZGluZyBvciBmb250LXNpemUgb24gbGFiZWxzLlxyXG4kYmFkZ2UtcGlsbC1ib3JkZXItcmFkaXVzOiAxMHJlbTtcclxuXHJcbi8vIE1vZGFsc1xyXG5cclxuLy8gUGFkZGluZyBhcHBsaWVkIHRvIHRoZSBtb2RhbCBib2R5XHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiAxcmVtO1xyXG5cclxuJG1vZGFsLWRpYWxvZy1tYXJnaW46IDAuNXJlbTtcclxuJG1vZGFsLWRpYWxvZy1tYXJnaW4teS1zbS11cDogMS43NXJlbTtcclxuXHJcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LWJhc2U7XHJcblxyXG4kbW9kYWwtY29udGVudC1jb2xvcjogbnVsbDtcclxuJG1vZGFsLWNvbnRlbnQtYmc6ICR3aGl0ZTtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAkZ3JheS0zMDA7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3cteHM6IDAgMC4yNXJlbSAwLjVyZW0gcmdiYSgkYmxhY2ssIDAuNSk7XHJcbiRtb2RhbC1jb250ZW50LWJveC1zaGFkb3ctc20tdXA6IDAgMC41cmVtIDFyZW0gcmdiYSgkYmxhY2ssIDAuNSk7XHJcblxyXG4kbW9kYWwtYmFja2Ryb3AtYmc6ICRibGFjaztcclxuJG1vZGFsLWJhY2tkcm9wLW9wYWNpdHk6IDAuNTtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICRib3JkZXItY29sb3I7XHJcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAkbW9kYWwtaGVhZGVyLWJvcmRlci1jb2xvcjtcclxuJG1vZGFsLWhlYWRlci1ib3JkZXItd2lkdGg6ICRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDtcclxuJG1vZGFsLWZvb3Rlci1ib3JkZXItd2lkdGg6ICRtb2RhbC1oZWFkZXItYm9yZGVyLXdpZHRoO1xyXG4kbW9kYWwtaGVhZGVyLXBhZGRpbmcteTogMXJlbTtcclxuJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg6IDFyZW07XHJcbiRtb2RhbC1oZWFkZXItcGFkZGluZzogJG1vZGFsLWhlYWRlci1wYWRkaW5nLXkgJG1vZGFsLWhlYWRlci1wYWRkaW5nLXg7IC8vIEtlZXAgdGhpcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcclxuXHJcbiRtb2RhbC14bDogMTE0MHB4O1xyXG4kbW9kYWwtbGc6IDgwMHB4O1xyXG4kbW9kYWwtbWQ6IDUwMHB4O1xyXG4kbW9kYWwtc206IDMwMHB4O1xyXG5cclxuJG1vZGFsLWZhZGUtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwcHgpO1xyXG4kbW9kYWwtc2hvdy10cmFuc2Zvcm06IG5vbmU7XHJcbiRtb2RhbC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcclxuXHJcbi8vIEFsZXJ0c1xyXG4vL1xyXG4vLyBEZWZpbmUgYWxlcnQgY29sb3JzLCBib3JkZXIgcmFkaXVzLCBhbmQgcGFkZGluZy5cclxuXHJcbiRhbGVydC1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRhbGVydC1wYWRkaW5nLXg6IDEuMjVyZW07XHJcbiRhbGVydC1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtYm9sZDtcclxuJGFsZXJ0LWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aDtcclxuXHJcbiRhbGVydC1iZy1sZXZlbDogLTEwO1xyXG4kYWxlcnQtYm9yZGVyLWxldmVsOiAtOTtcclxuJGFsZXJ0LWNvbG9yLWxldmVsOiA2O1xyXG5cclxuLy8gUHJvZ3Jlc3MgYmFyc1xyXG5cclxuJHByb2dyZXNzLWhlaWdodDogMC42MjVyZW07XHJcbiRwcm9ncmVzcy1mb250LXNpemU6ICRmb250LXNpemUtYmFzZSAqIDAuNzU7XHJcbiRwcm9ncmVzcy1iZzogJGdyYXktMzAwO1xyXG4kcHJvZ3Jlc3MtYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiRwcm9ncmVzcy1ib3gtc2hhZG93OiBpbnNldCAwIDAuMXJlbSAwLjFyZW0gcmdiYSgkYmxhY2ssIDAuMSk7XHJcbiRwcm9ncmVzcy1iYXItY29sb3I6ICR3aGl0ZTtcclxuJHByb2dyZXNzLWJhci1iZzogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xyXG4kcHJvZ3Jlc3MtYmFyLWFuaW1hdGlvbi10aW1pbmc6IDFzIGxpbmVhciBpbmZpbml0ZTtcclxuJHByb2dyZXNzLWJhci10cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XHJcblxyXG4vLyBMaXN0IGdyb3VwXHJcblxyXG4kbGlzdC1ncm91cC1jb2xvcjogbnVsbDtcclxuJGxpc3QtZ3JvdXAtYmc6ICR3aGl0ZTtcclxuJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yOiByZ2JhKCRibGFjaywgMC4xMjUpO1xyXG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGg7XHJcbiRsaXN0LWdyb3VwLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG5cclxuJGxpc3QtZ3JvdXAtaXRlbS1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRsaXN0LWdyb3VwLWl0ZW0tcGFkZGluZy14OiAxLjI1cmVtO1xyXG5cclxuJGxpc3QtZ3JvdXAtaG92ZXItYmc6ICRncmF5LTEwMDtcclxuJGxpc3QtZ3JvdXAtYWN0aXZlLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1jb2xvcjtcclxuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcclxuJGxpc3QtZ3JvdXAtYWN0aXZlLWJvcmRlci1jb2xvcjogJGxpc3QtZ3JvdXAtYWN0aXZlLWJnO1xyXG5cclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICRncmF5LTYwMDtcclxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc6ICRsaXN0LWdyb3VwLWJnO1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yOiAkZ3JheS03MDA7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1ob3Zlci1jb2xvcjogJGxpc3QtZ3JvdXAtYWN0aW9uLWNvbG9yO1xyXG5cclxuJGxpc3QtZ3JvdXAtYWN0aW9uLWFjdGl2ZS1jb2xvcjogJGJvZHktY29sb3I7XHJcbiRsaXN0LWdyb3VwLWFjdGlvbi1hY3RpdmUtYmc6ICRncmF5LTIwMDtcclxuXHJcbi8vIEltYWdlIHRodW1ibmFpbHNcclxuXHJcbiR0aHVtYm5haWwtcGFkZGluZzogMC4yNXJlbTtcclxuJHRodW1ibmFpbC1iZzogJGJvZHktYmc7XHJcbiR0aHVtYm5haWwtYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoO1xyXG4kdGh1bWJuYWlsLWJvcmRlci1jb2xvcjogJGdyYXktMzAwO1xyXG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4kdGh1bWJuYWlsLWJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKCRibGFjaywgMC4wNzUpO1xyXG5cclxuLy8gRmlndXJlc1xyXG5cclxuJGZpZ3VyZS1jYXB0aW9uLWZvbnQtc2l6ZTogOTAlO1xyXG4kZmlndXJlLWNhcHRpb24tY29sb3I6ICRncmF5LTYwMDtcclxuXHJcbi8vIEJyZWFkY3J1bWJzXHJcblxyXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXk6IDAuNzVyZW07XHJcbiRicmVhZGNydW1iLXBhZGRpbmcteDogMXJlbTtcclxuJGJyZWFkY3J1bWItaXRlbS1wYWRkaW5nOiAwLjVyZW07XHJcblxyXG4kYnJlYWRjcnVtYi1tYXJnaW4tYm90dG9tOiAxcmVtO1xyXG5cclxuJGJyZWFkY3J1bWItYmc6ICRncmF5LTIwMDtcclxuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogJGdyYXktNjAwO1xyXG4kYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I6ICRncmF5LTYwMDtcclxuJGJyZWFkY3J1bWItZGl2aWRlcjogcXVvdGUoXCIvXCIpO1xyXG5cclxuJGJyZWFkY3J1bWItYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcblxyXG4vLyBDYXJvdXNlbFxyXG5cclxuJGNhcm91c2VsLWNvbnRyb2wtY29sb3I6ICR3aGl0ZTtcclxuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6IDE1JTtcclxuJGNhcm91c2VsLWNvbnRyb2wtb3BhY2l0eTogMC41O1xyXG4kY2Fyb3VzZWwtY29udHJvbC1ob3Zlci1vcGFjaXR5OiAwLjk7XHJcbiRjYXJvdXNlbC1jb250cm9sLXRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgZWFzZTtcclxuXHJcbiRjYXJvdXNlbC1pbmRpY2F0b3Itd2lkdGg6IDMwcHg7XHJcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGVpZ2h0OiAzcHg7XHJcbiRjYXJvdXNlbC1pbmRpY2F0b3ItaGl0LWFyZWEtaGVpZ2h0OiAxMHB4O1xyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXNwYWNlcjogM3B4O1xyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogJHdoaXRlO1xyXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLXRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlO1xyXG5cclxuJGNhcm91c2VsLWNhcHRpb24td2lkdGg6IDcwJTtcclxuJGNhcm91c2VsLWNhcHRpb24tY29sb3I6ICR3aGl0ZTtcclxuXHJcbiRjYXJvdXNlbC1jb250cm9sLWljb24td2lkdGg6IDIwcHg7XHJcblxyXG4kY2Fyb3VzZWwtY29udHJvbC1wcmV2LWljb24tYmc6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG4kY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24tYmc6IHN0ci1yZXBsYWNlKFxyXG4gIHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPScjeyRjYXJvdXNlbC1jb250cm9sLWNvbG9yfScgdmlld0JveD0nMCAwIDggOCclM2UlM2NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzZSUzYy9zdmclM2VcIiksXHJcbiAgXCIjXCIsXHJcbiAgXCIlMjNcIlxyXG4pO1xyXG5cclxuJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb246IDAuNnM7XHJcbiRjYXJvdXNlbC10cmFuc2l0aW9uOiB0cmFuc2Zvcm0gJGNhcm91c2VsLXRyYW5zaXRpb24tZHVyYXRpb24gZWFzZS1pbi1vdXQ7IC8vIERlZmluZSB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBmaXJzdCBpZiB1c2luZyBtdWx0aXBsZSB0cmFuc2l0aW9ucyAoZS5nLiwgYHRyYW5zZm9ybSAycyBlYXNlLCBvcGFjaXR5IC41cyBlYXNlLW91dGApXHJcblxyXG4vLyBTcGlubmVyc1xyXG5cclxuJHNwaW5uZXItd2lkdGg6IDJyZW07XHJcbiRzcGlubmVyLWhlaWdodDogJHNwaW5uZXItd2lkdGg7XHJcbiRzcGlubmVyLWJvcmRlci13aWR0aDogMC4yNWVtO1xyXG5cclxuJHNwaW5uZXItd2lkdGgtc206IDFyZW07XHJcbiRzcGlubmVyLWhlaWdodC1zbTogJHNwaW5uZXItd2lkdGgtc207XHJcbiRzcGlubmVyLWJvcmRlci13aWR0aC1zbTogMC4yZW07XHJcblxyXG4vLyBDbG9zZVxyXG5cclxuJGNsb3NlLWZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlICogMS41O1xyXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodC1ib2xkO1xyXG4kY2xvc2UtY29sb3I6ICRibGFjaztcclxuJGNsb3NlLXRleHQtc2hhZG93OiAwIDFweCAwICR3aGl0ZTtcclxuXHJcbi8vIENvZGVcclxuXHJcbiRjb2RlLWZvbnQtc2l6ZTogODcuNSU7XHJcbiRjb2RlLWNvbG9yOiAkcGluaztcclxuXHJcbiRrYmQtcGFkZGluZy15OiAwLjJyZW07XHJcbiRrYmQtcGFkZGluZy14OiAwLjRyZW07XHJcbiRrYmQtZm9udC1zaXplOiAkY29kZS1mb250LXNpemU7XHJcbiRrYmQtY29sb3I6ICR3aGl0ZTtcclxuJGtiZC1iZzogJGdyYXktOTAwO1xyXG5cclxuJHByZS1jb2xvcjogJGdyYXktOTAwO1xyXG4kcHJlLXNjcm9sbGFibGUtbWF4LWhlaWdodDogMzQwcHg7XHJcblxyXG4vLyBVdGlsaXRpZXNcclxuXHJcbiRkaXNwbGF5czogbm9uZSwgaW5saW5lLCBpbmxpbmUtYmxvY2ssIGJsb2NrLCB0YWJsZSwgdGFibGUtcm93LCB0YWJsZS1jZWxsLCBmbGV4LFxyXG4gIGlubGluZS1mbGV4O1xyXG4kb3ZlcmZsb3dzOiBhdXRvLCBoaWRkZW47XHJcbiRwb3NpdGlvbnM6IHN0YXRpYywgcmVsYXRpdmUsIGFic29sdXRlLCBmaXhlZCwgc3RpY2t5O1xyXG5cclxuLy8gUHJpbnRpbmdcclxuXHJcbiRwcmludC1wYWdlLXNpemU6IGEzO1xyXG4kcHJpbnQtYm9keS1taW4td2lkdGg6IG1hcC1nZXQoJGdyaWQtYnJlYWtwb2ludHMsIFwibGdcIik7XHJcbiIsIi8vIFxyXG4vLyBQYWdlLXRpdGxlXHJcbi8vIFxyXG5cclxuLnBhZ2UtdGl0bGUtYm94IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkZ3JpZC1ndXR0ZXItd2lkdGg7XHJcblxyXG4gICAgLmJyZWFkY3J1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi8vIFxyXG4vLyBfZm9vdGVyLnNjc3NcclxuLy8gXHJcblxyXG4uZm9vdGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDIwcHggY2FsYygjeyRncmlkLWd1dHRlci13aWR0aH0gLyAyKTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgY29sb3I6ICRmb290ZXItY29sb3I7XHJcbiAgICBsZWZ0OiAyNTBweDtcclxuICAgIGhlaWdodDogJGZvb3Rlci1oZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZm9vdGVyLWJnO1xyXG59XHJcbiAgXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gICAgLmZvb3RlciB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gRW5sYXJnZSBtZW51XHJcbi52ZXJ0aWNhbC1jb2xscHNlZCB7XHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBsZWZ0OiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdIHtcclxuICAgIC5mb290ZXIge1xyXG4gICAgICAgIGxlZnQ6IDAgIWltcG9ydGFudDtcclxuICAgIH0gIFxyXG59IiwiLy9cclxuLy8gcmlnaHQtc2lkZWJhci5zY3NzXHJcbi8vXHJcblxyXG4ucmlnaHQtYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJnO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDI0cHggMCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDFweCAwIDAgcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6ICRyaWdodGJhci13aWR0aDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxuICAgIHJpZ2h0OiAtKCRyaWdodGJhci13aWR0aCArIDEwcHgpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIC5yaWdodC1iYXItdG9nZ2xlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRkYXJrLCA3JSk7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGNvbG9yOiAkZ3JheS0yMDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGRhcmssIDEwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBSaWdodGJhciBvdmVybGF5XHJcbi5yaWdodGJhci1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGRhcmssIDAuNTUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHotaW5kZXg6IDk5OTg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ucmlnaHQtYmFyLWVuYWJsZWQge1xyXG4gICAgLnJpZ2h0LWJhciB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAucmlnaHRiYXItb3ZlcmxheSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgLnJpZ2h0LWJhciB7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgLnNsaW1zY3JvbGwtbWVudSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiLy9cclxuLy8gX21lbnUuc2Nzc1xyXG4vL1xyXG5cclxuLm1ldGlzbWVudSB7XHJcbiAgbWFyZ2luOiAwO1xyXG5cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLm1tLWNvbGxhcHNlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICAgJjpub3QoLm1tLXNob3cpIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAmLm1tLXNob3cge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tbS1jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gIH1cclxufVxyXG5cclxuLnZlcnRpY2FsLW1lbnUge1xyXG4gIHdpZHRoOiAkc2lkZWJhci13aWR0aDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG4gIGJhY2tncm91bmQ6ICRzaWRlYmFyLWJnO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIGJveC1zaGFkb3c6ICRib3gtc2hhZG93O1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogJHNpZGViYXItd2lkdGg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDEwcHggMTVweDtcclxuICAgIG1hcmdpbi10b3A6ICRoZWFkZXItaGVpZ2h0O1xyXG4gIH1cclxufVxyXG5cclxuI3NpZGViYXItbWVudSB7XHJcbiAgcGFkZGluZzogMTBweCAwIDMwcHggMDtcclxuXHJcbiAgLm1tLWFjdGl2ZSB7XHJcbiAgICA+IC5oYXMtYXJyb3cge1xyXG4gICAgICAmOmFmdGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhhcy1hcnJvdyB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCJcXEYwMTQwXCI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIERlc2lnbiBJY29uc1wiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycztcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBhIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1jb2xvcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG5cclxuICAgICAgICBpIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIG1pbi13aWR0aDogMS43NXJlbTtcclxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjEyNWVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDA2MjVyZW07XHJcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1pY29uLWNvbG9yO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYmFkZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdWwuc3ViLW1lbnUge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGxpIHtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjRyZW0gMS41cmVtIDAuNHJlbSAzLjVyZW07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtc3ViLWl0ZW0tY29sb3I7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwuc3ViLW1lbnUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC40cmVtIDEuNXJlbSAwLjRyZW0gNC41cmVtO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMy41cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS10aXRsZSB7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1pY29uLWNvbG9yO1xyXG4gIGZvbnQtd2VpZ2h0OiAkZm9udC13ZWlnaHQtc2VtaWJvbGQ7XHJcbn1cclxuYm9keS5vdmVyZmxvdy1oIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tbS1hY3RpdmUge1xyXG4gIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5hY3RpdmUge1xyXG4gICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICBpIHtcclxuICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gID4gaSB7XHJcbiAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGJvZHkuc2lkZWJhci1lbmFibGUge1xyXG4gICAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEVubGFyZ2UgbWVudVxyXG4udmVydGljYWwtY29sbHBzZWQge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICRzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIHdpZHRoOiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHNwYW4ubG9nby1sZyB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbi5sb2dvLXNtIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBTaWRlIG1lbnVcclxuICAudmVydGljYWwtbWVudSB7XHJcbiAgICAvLyBzY3JvbGxcclxuXHJcbiAgICBwZXJmZWN0LXNjcm9sbGJhciB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgICAgLnBzIHtcclxuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6ICRzaWRlYmFyLWNvbGxhcHNlZC13aWR0aCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogNTtcclxuXHJcbiAgICAuc2ltcGxlYmFyLW1hc2ssXHJcbiAgICAuc2ltcGxlYmFyLWNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbXBsZWJhci1zY3JvbGxiYXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpbXBsZWJhci1vZmZzZXQge1xyXG4gICAgICBib3R0b206IDAgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTaWRlYmFyIE1lbnVcclxuICAgICNzaWRlYmFyLW1lbnUge1xyXG4gICAgICAubWVudS10aXRsZSxcclxuICAgICAgLmJhZGdlLFxyXG4gICAgICAuY29sbGFwc2UuaW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdi5jb2xsYXBzZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oYXMtYXJyb3cge1xyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gdWwge1xyXG4gICAgICAgID4gbGkge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDU1cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgICAmOmFjdGl2ZSxcclxuICAgICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1ob3Zlci1jb2xvcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjQ1cmVtO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgID4gYSB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDE5MHB4ICsgI3skc2lkZWJhci1jb2xsYXBzZWQtd2lkdGh9KTtcclxuICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzaWRlYmFyLWJnLCA0JSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgID4gdWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgIGxlZnQ6ICRzaWRlYmFyLWNvbGxhcHNlZC13aWR0aDtcclxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDNweCA1cHggMTBweCAwIHJnYmEoNTQsIDYxLCA3MSwgMC4xKTtcclxuXHJcbiAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogM3B4IDVweCAxMHB4IDAgcmdiYSg1NCwgNjEsIDcxLCAwLjEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTkwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA2O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtc3ViLWl0ZW0tY29sb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNpZGViYXItYmc7XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTkwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNnB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5MHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICBzcGFuLnB1bGwtcmlnaHQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAkZ3JheS0xMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmJvZHlbZGF0YS1zaWRlYmFyPVwiZGFya1wiXSB7XHJcbiAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZDogJHNpZGViYXItZGFyay1iZztcclxuICB9XHJcblxyXG4gICNzaWRlYmFyLW1lbnUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0tY29sb3I7XHJcblxyXG4gICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1pY29uLWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcblxyXG4gICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVsLnN1Yi1tZW51IHtcclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1zdWItaXRlbS1jb2xvcjtcclxuXHJcbiAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBFbmxhcmdlIG1lbnVcclxuICAmLnZlcnRpY2FsLWNvbGxwc2VkIHtcclxuICAgIC8vbWluLWhlaWdodDogMTIwMHB4O1xyXG5cclxuICAgIC8vIFNpZGUgbWVudVxyXG4gICAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgICAvLyBTaWRlYmFyIE1lbnVcclxuICAgICAgI3NpZGViYXItbWVudSB7XHJcbiAgICAgICAgPiB1bCB7XHJcbiAgICAgICAgICA+IGxpIHtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgPiBhIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJHNpZGViYXItZGFyay1iZywgMiUpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0taG92ZXItY29sb3I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICA+IHVsIHtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LXN1Yi1pdGVtLWNvbG9yO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWhvdmVyLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZWJhci1kYXJrLWJnO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAmLm1tLWFjdGl2ZSAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWFjdGl2ZS1jb2xvciAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubW0tYWN0aXZlIHtcclxuICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICA+IGkge1xyXG4gICAgICBjb2xvcjogJHNpZGViYXItZGFyay1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuXHJcbiAgICAgIGkge1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1kYXJrLW1lbnUtaXRlbS1hY3RpdmUtY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1lbnUtdGl0bGUge1xyXG4gICAgY29sb3I6ICRzaWRlYmFyLWRhcmstbWVudS1pdGVtLWljb24tY29sb3I7XHJcbiAgfVxyXG59XHJcblxyXG5ib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXSB7XHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ29tcGFjdCBTaWRlYmFyXHJcblxyXG5ib2R5W2RhdGEtc2lkZWJhci1zaXplPVwic21hbGxcIl0ge1xyXG4gIC5uYXZiYXItYnJhbmQtYm94IHtcclxuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aC1zbTtcclxuICB9XHJcblxyXG4gIC52ZXJ0aWNhbC1tZW51IHtcclxuICAgIHdpZHRoOiAkc2lkZWJhci13aWR0aC1zbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAuaGFzLWFycm93OmFmdGVyLFxyXG4gICAgLmJhZGdlIHtcclxuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1haW4tY29udGVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHNpZGViYXItd2lkdGgtc207XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGxlZnQ6ICRzaWRlYmFyLXdpZHRoLXNtO1xyXG4gIH1cclxuXHJcbiAgI3NpZGViYXItbWVudSB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgICYubWVudS10aXRsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkc2lkZWJhci1kYXJrLWJnLCAyJSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB1bC5zdWItbWVudSB7XHJcbiAgICAgICAgbGkgYSB7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudmVydGljYWwtY29sbHBzZWQge1xyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgICAjc2lkZWJhci1tZW51IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICA+IGEge1xyXG4gICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXIge1xyXG4gICAgICBsZWZ0OiAkc2lkZWJhci1jb2xsYXBzZWQtd2lkdGg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBjb2xvcmVkIHNpZGViYXJcclxuXHJcbmJvZHlbZGF0YS1zaWRlYmFyPVwiY29sb3JlZFwiXSB7XHJcbiAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kLWJveCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuXHJcbiAgICAubG9nby1kYXJrIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9nby1saWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1tLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJHdoaXRlICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgPiBpLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAkd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNzaWRlYmFyLW1lbnUge1xyXG4gICAgdWwge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgJi5tZW51LXRpdGxlIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC42KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG5cclxuICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJi53YXZlcy1lZmZlY3Qge1xyXG4gICAgICAgICAgICAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKCR3aGl0ZSwgMC4xKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWwuc3ViLW1lbnUge1xyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudmVydGljYWwtY29sbHBzZWQge1xyXG4gICAgLnZlcnRpY2FsLW1lbnUge1xyXG4gICAgICAjc2lkZWJhci1tZW51IHtcclxuICAgICAgICA+IHVsIHtcclxuICAgICAgICAgID4gbGkge1xyXG4gICAgICAgICAgICAmOmhvdmVyID4gYSB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigkcHJpbWFyeSwgMiUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bCB7XHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICYubW0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFxyXG4vLyBfaG9yaXpvbnRhbC5zY3NzXHJcbi8vIFxyXG5cclxuLnRvcG5hdiB7XHJcbiAgYmFja2dyb3VuZDogJHRvcG5hdi1iZztcclxuICBwYWRkaW5nOiAwIGNhbGMoI3skZ3JpZC1ndXR0ZXItd2lkdGh9IC8gMik7XHJcbiAgYm94LXNoYWRvdzogJGJveC1zaGFkb3c7XHJcbiAgbWFyZ2luLXRvcDogJGhlYWRlci1oZWlnaHQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG5cclxuICAudG9wbmF2LW1lbnUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItbmF2IHtcclxuXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMXJlbSAxLjNyZW07XHJcbiAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tY29sb3I7XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6Zm9jdXMsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBjb2xvcjogJHNpZGViYXItbWVudS1pdGVtLWNvbG9yO1xyXG5cclxuICAgICAgJi5hY3RpdmUsXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAkc2lkZWJhci1tZW51LWl0ZW0tYWN0aXZlLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdi1pdGVtIHtcclxuICAgICAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZHJvcGRvd24ge1xyXG4gICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgPmEge1xyXG4gICAgICAgICAgY29sb3I6ICRzaWRlYmFyLW1lbnUtaXRlbS1hY3RpdmUtY29sb3I7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoeGwpIHtcclxuXHJcbiAgYm9keVtkYXRhLWxheW91dD1cImhvcml6b250YWxcIl0ge1xyXG5cclxuICAgIC5jb250YWluZXItZmx1aWQsXHJcbiAgICAubmF2YmFyLWhlYWRlciB7XHJcbiAgICAgIG1heC13aWR0aDogODUlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gIC50b3BuYXYge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICBwYWRkaW5nOiAuNXJlbSAxLjVyZW07XHJcbiAgICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgICAgJi5tZWdhLWRyb3Bkb3duIHtcclxuXHJcbiAgICAgICAgLy8gcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICAubWVnYS1kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgIHJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwICRkcm9wZG93bi1ib3JkZXItcmFkaXVzICRkcm9wZG93bi1ib3JkZXItcmFkaXVzO1xyXG5cclxuICAgICAgICAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKSB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZHJvcGRvd24ge1xyXG4gICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgPi5kcm9wZG93bi1tZW51IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kcm9wZG93bjpob3Zlcj4uZHJvcGRvd24tbWVudT4uZHJvcGRvd246aG92ZXI+LmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci10b2dnbGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5hcnJvdy1kb3duIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICY6YWZ0ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMCAwIDFweCAxcHg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgaGVpZ2h0OiAuNGVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgd2lkdGg6IC40ZW07XHJcbiAgfVxyXG59XHJcblxyXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obGcpIHtcclxuICAudG9wbmF2LW1lbnUge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgLmRyb3Bkb3duIHtcclxuICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgIGxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG5cclxuICAudG9wbmF2IHtcclxuICAgIG1heC1oZWlnaHQ6IDM2MHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gMS4xcmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmRyb3Bkb3duIHtcclxuICAgICAgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgJi5hY3RpdmUsXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcnJvdy1kb3duIHtcclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAobGcpIHtcclxuXHJcbiAgYm9keVtkYXRhLWxheW91dD1cImhvcml6b250YWxcIl1bZGF0YS10b3BiYXI9XCJsaWdodFwiXSB7XHJcbiAgICAudG9wbmF2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcblxyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuOSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+LmRyb3Bkb3duIHtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgPmEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDb2xvcmVkIFRvcGJhciBcclxuXHJcbmJvZHlbZGF0YS1sYXlvdXQ9XCJob3Jpem9udGFsXCJdW2RhdGEtdG9wYmFyPVwiY29sb3JlZFwiXSB7XHJcbiAgI3BhZ2UtdG9wYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWRhcmsge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5sb2dvLWxpZ2h0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmFwcC1zZWFyY2gge1xyXG5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCR0b3BiYXItc2VhcmNoLWJnLCAwLjA3KTtcclxuICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuLFxyXG4gICAgaW5wdXQuZm9ybS1jb250cm9sOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoJHdoaXRlLCAwLjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhlYWRlci1pdGVtIHtcclxuICAgIGNvbG9yOiAkaGVhZGVyLWRhcmstaXRlbS1jb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRoZWFkZXItZGFyay1pdGVtLWNvbG9yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgLmRyb3Bkb3duLnNob3cge1xyXG4gICAgICAuaGVhZGVyLWl0ZW0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHdoaXRlLCAwLjEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndhdmVzLWVmZmVjdCAud2F2ZXMtcmlwcGxlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgkd2hpdGUsIDAuNCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm90aS1pY29uIHtcclxuICAgIGkge1xyXG4gICAgICBjb2xvcjogJGhlYWRlci1kYXJrLWl0ZW0tY29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKGxnKSB7XHJcbiAgICAudG9wbmF2IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcblxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcblxyXG4gICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuNSk7XHJcblxyXG4gICAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkd2hpdGUsIDAuOSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+LmRyb3Bkb3duIHtcclxuICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgPmEge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCR3aGl0ZSwgMC45KSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8vIFxyXG4vLyBfbGF5b3V0cy5zY3NzXHJcbi8vIFxyXG5cclxuYm9keVtkYXRhLWxheW91dC1zaXplPVwiYm94ZWRcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJveGVkLWJvZHktYmc7XHJcbiAgICAjbGF5b3V0LXdyYXBwZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xyXG4gICAgICAgIG1heC13aWR0aDogJGJveGVkLWxheW91dC13aWR0aDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBib3gtc2hhZG93OiAkYm94LXNoYWRvdztcclxuICAgIH1cclxuXHJcbiAgICAjcGFnZS10b3BiYXIge1xyXG4gICAgICAgIG1heC13aWR0aDogJGJveGVkLWxheW91dC13aWR0aDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoI3skYm94ZWQtbGF5b3V0LXdpZHRofSAtICN7JHNpZGViYXItd2lkdGh9KTtcclxuICAgIH1cclxuXHJcbiAgICAmLnZlcnRpY2FsLWNvbGxwc2VkIHtcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKCN7JGJveGVkLWxheW91dC13aWR0aH0gLSAjeyRzaWRlYmFyLWNvbGxhcHNlZC13aWR0aH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEhvcml6b250YWwgQm94ZWQgTGF5b3V0XHJcblxyXG5ib2R5W2RhdGEtbGF5b3V0PVwiaG9yaXpvbnRhbFwiXVtkYXRhLWxheW91dC1zaXplPVwiYm94ZWRcIl17XHJcbiAgICAjcGFnZS10b3BiYXIsICNsYXlvdXQtd3JhcHBlciwgLmZvb3RlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1mbHVpZCwgLm5hdmJhci1oZWFkZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogJGJveGVkLWxheW91dC13aWR0aDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgJ35wZXJmZWN0LXNjcm9sbGJhci9jc3MvcGVyZmVjdC1zY3JvbGxiYXIuY3NzJztcblxuLnBzX19yYWlsLXkucHMtLWNsaWNraW5nIC5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15OmZvY3VzPi5wc19fdGh1bWIteSxcbi5wc19fcmFpbC15OmhvdmVyPi5wc19fdGh1bWIteSB7XG4gIHdpZHRoOiA2cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLnBzX190aHVtYi15IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2EyYWRiNyAhaW1wb3J0YW50O1xufVxuXG5cbnBlcmZlY3Qtc2Nyb2xsYmFyPi5wcy5wcy0tYWN0aXZlLXk+LnBzX19yYWlsLXk6aG92ZXIge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ucHMtLWFjdGl2ZS14Pi5wc19fcmFpbC14LFxuLnBzLS1hY3RpdmUteT4ucHNfX3JhaWwteSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59IiwiLy8gXHJcbi8vIGF1dGhlbnRpY2F0aW9uLnNjc3NcclxuLy9cclxuXHJcblxyXG4vLyBhdXRoZW50aWNhdGlvbiBob21lIGljb25cclxuLmhvbWUtYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTVweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_pages_non-financial-alteration_non-financial-alteration_module_ts.js.map