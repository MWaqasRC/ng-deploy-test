(self["webpackChunkcore_app"] = self["webpackChunkcore_app"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/layout.component */ 6774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 3879)).then(m => m.AccountModule) },
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 8950)).then(m => m.PagesModule) },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-draggable-resize */ 3893);
/* harmony import */ var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-extended-pdf-viewer */ 625);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/layouts.module */ 2372);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









// initFirebaseBackend(environment.firebaseConfig);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__.AngularDraggableModule,
            ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.NgxExtendedPdfViewerModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule,
        _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_0__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ngx_draggable_resize__WEBPACK_IMPORTED_MODULE_7__.AngularDraggableModule,
        ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_8__.NgxExtendedPdfViewerModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 9453:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend),
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ 8075);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/auth */ 3416);


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                this.auth.createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = this.auth.currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                this.auth.signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = this.auth.currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                this.auth.sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                this.auth.signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            this.app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
            this.auth = (0,_firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(this.app);
            this.auth.onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 263:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 9453);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class AuthenticationService {
    constructor() { }
    /**
     * Returns the current user
     */
    currentUser() {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)()
            .loginUser(email, password)
            .then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)()
            .registerUser(email, password)
            .then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Reset password
     * @param email email
     */
    resetPassword(email) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)()
            .forgetPassword(email)
            .then((response) => {
            const message = response.data;
            return message;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
    }
    getEmployerList() {
        return [
            { id: 1, name: "Employer One" },
            { id: 2, name: "Employer Two" },
            { id: 3, name: "Employer Three" },
            { id: 4, name: "Employer Four" },
            { id: 5, name: "Employer Five" },
        ];
    }
    getCaseReadyToList() {
        return [
            { id: 1, name: "Case Ready One" },
            { id: 2, name: "Case Ready Two" },
            { id: 3, name: "Case Ready Three" },
            { id: 4, name: "Case Ready Four" },
            { id: 5, name: "Case Ready Five" },
        ];
    }
    getRefundToList() {
        return [
            { id: 1, name: "Refund One" },
            { id: 2, name: "Refund Two" },
            { id: 3, name: "Refund Three" },
            { id: 4, name: "Refund Four" },
            { id: 5, name: "Refund Five" },
        ];
    }
    getPaymentList() {
        return [
            { id: 1, name: "Payment One" },
            { id: 2, name: "Payment Two" },
            { id: 3, name: "Payment Three" },
            { id: 4, name: "Payment Four" },
            { id: 5, name: "Payment Five" },
        ];
    }
    getCommentStatusTypeList() {
        return [
            { id: 1, name: "Underwriting" },
            { id: 2, name: "Surrender" },
            { id: 3, name: "Other" },
            { id: 4, name: "Option One" },
            { id: 5, name: "Option Two" },
        ];
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 3117:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9170);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);



class EventService {
    constructor() {
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(event => event.payload))
            .subscribe(callback);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4158:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 1, consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-sm-6"], [1, "text-sm-right", "d-none", "d-sm-block"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Design & Develop by Themesbrand ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " \u00A9 Skote. ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8807:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 5566);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 6034);




/**
 * Horizontal-layout component
 */
class HorizontalComponent {
    constructor() { }
    ngOnInit() {
        document.body.setAttribute("data-layout", "horizontal");
        document.body.setAttribute("data-topbar", "dark");
        document.body.removeAttribute("data-sidebar");
        document.body.removeAttribute("data-layout-size");
        document.body.removeAttribute("data-keep-enlarged");
        document.body.removeAttribute("data-sidebar-small");
    }
    ngAfterViewInit() { }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle("right-bar-enabled");
    }
}
HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(); };
HorizontalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HorizontalComponent, selectors: [["app-horizontal"]], decls: 6, vars: 0, consts: [["id", "layout-wrapper"], [1, "main-content"], [1, "page-content"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-horizontaltopbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "app-rightsidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_0__.HorizontaltopbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_1__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5566:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontaltopbarComponent": () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/event.service */ 3117);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);







/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
    // tslint:disable-next-line: max-line-length
    constructor(document, router, eventService) {
        this.document = document;
        this.router = router;
        this.eventService = eventService;
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
                this.activateMenu();
            }
        });
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3
        };
    }
    /**
     * On menu click
     */
    onMenuClick(event) {
        const nextEl = event.target.nextSibling;
        if (nextEl && !nextEl.classList.contains('show')) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove('show');
            }
            nextEl.classList.add('show');
        }
        else if (nextEl) {
            nextEl.classList.remove('show');
        }
        return false;
    }
    ngAfterViewInit() {
        this.activateMenu();
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Togglemenu bar
     */
    toggleMenubar() {
        const element = document.getElementById('topnav-menu-content');
        element.classList.toggle('show');
    }
    /**
     * Activates the menu
     */
    activateMenu() {
        const resetParent = (el) => {
            const parent = el.parentElement;
            if (parent) {
                parent.classList.remove('active');
                const parent2 = parent.parentElement;
                this._removeAllClass('mm-active');
                this._removeAllClass('mm-show');
                if (parent2) {
                    parent2.classList.remove('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.remove('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.remove('active');
                            }
                        }
                    }
                }
            }
        };
        // activate menu item based on location
        const links = document.getElementsByClassName('side-nav-link-ref');
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.add('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.add('active');
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    /**
     * Topbar light
     */
    topbarLight() {
        document.body.setAttribute('data-topbar', 'light');
        document.body.removeAttribute('data-layout-size');
    }
    /**
     * Set boxed width
     */
    boxedWidth() {
        document.body.setAttribute('data-layout-size', 'boxed');
        document.body.setAttribute('data-topbar', 'dark');
    }
    /**
     * Colored header
     */
    coloredHeader() {
        document.body.setAttribute('data-topbar', 'colored');
        document.body.removeAttribute('data-layout-size');
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        this.eventService.broadcast('changeLayout', layout);
        window.location.reload();
    }
}
HorizontaltopbarComponent.ɵfac = function HorizontaltopbarComponent_Factory(t) { return new (t || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_0__.EventService)); };
HorizontaltopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HorizontaltopbarComponent, selectors: [["app-horizontaltopbar"]], decls: 589, vars: 1, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["href", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["href", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-lg-block"], [1, "position-relative"], ["type", "text", "placeholder", "Search...", 1, "form-control"], [1, "bx", "bx-search-alt"], ["ngbDropdown", "", 1, "dropdown", "dropdown-mega", "d-none", "d-lg-block", "ml-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ml-2"], ["type", "button", "id", "page-header-search-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["src", "assets/images/flags/us.jpg", "alt", "Header Language", "height", "16", 1, ""], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item"], ["src", "assets/images/flags/spain.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], [1, "align-middle"], ["src", "assets/images/flags/germany.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/italy.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/russia.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "badge-danger", "badge-pill"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "row", "align-items-center"], [1, "m-0"], [1, "col-auto"], ["href", "#!", 1, "small"], [2, "height", "230px", 3, "config"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "mr-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "btn-block", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "mr-1"], ["type", "button", "id", "page-header-user-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ml-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "mr-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "badge-success", "float-right"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "mr-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "mr-1", "text-danger"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], [1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "active"], [1, "navbar-nav"], [1, "nav-item", "dropdown"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "bx", "bx-home-circle", "mr-2"], [1, "arrow-down"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu"], ["href", "javascript: void(0);", 1, "dropdown-item", "side-nav-link-ref"], [1, "bx", "bx-tone", "mr-2"], ["aria-labelledby", "topnav-components", 1, "dropdown-menu", "mega-dropdown-menu", "px-2", "dropdown-mega-menu-xl"], [1, "col-lg-4"], ["href", "javascript: void(0);", "id", "topnav-pages", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "bx", "bx-customize", "mr-2"], [1, "dropdown-menu"], [1, "dropdown"], ["href", "javascript: void(0);", "id", "topnav-email", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-email", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-ecommerce", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-ecommerce", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-crypto", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-crypto", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-project", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-project", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-task", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-task", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-contact", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-contact", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-charts", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "bx", "bx-collection", "mr-2"], ["aria-labelledby", "topnav-charts", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-form", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-form", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-table", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-table", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-map", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-map", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-more", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "bx", "bx-file", "mr-2"], ["aria-labelledby", "topnav-more", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-invoice", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-invoice", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-auth", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-auth", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-utility", "role", "button", 1, "dropdown-item", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-utility", 1, "dropdown-menu"], ["href", "javascript: void(0);", "id", "topnav-layout", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], [1, "bx", "bx-layout", "mr-2"], ["aria-labelledby", "topnav-layout", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript: void(0);", 1, "dropdown-item", 3, "click"]], template: function HorizontaltopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_14_listener() { return ctx.toggleMenubar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Mega Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "UI Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Lightbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Range Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Sweet Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Ecommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Extra Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Light Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Compact Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "Horizontal layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "UI Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Lightbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](111, "Range Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Sweet Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](116, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](117, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](123, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](129, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](130, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](133, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](135, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](137, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](141, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](144, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](146, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](147, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](150, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](151, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](153, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](157, "Italian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](158, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Russian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](162, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](164, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](172, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](175, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](176, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](177, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](180, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](182, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](186, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](188, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](191, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](193, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](194, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "a", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](198, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](200, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_200_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](201, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](202, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "button", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](204, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](205, "span", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](206, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "h6", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](212, " Notifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](214, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](215, " View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "perfect-scrollbar", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](217, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](221, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "Your order is placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](225, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](227, "If several languages coalesce the grammar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](230, " 3 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](232, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](233, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](234, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "James Lemire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](239, "It will seem like simplified English.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](240, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](241, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](242, " 1 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](244, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "span", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](247, "i", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](249, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](250, "Your item is shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](251, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](253, "If several languages coalesce the grammar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](254, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](255, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](256, " 3 min ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](259, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](260, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "h6", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](262, "Salena Layfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](263, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "p", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "As a skeptical Cambridge friend of mine occidental.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "p", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](267, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](268, " 1 hours ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](270, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](271, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](272, " View More.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](275, "img", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "span", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](277, "Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](278, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](282, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](284, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](285, " My Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](286, "a", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "span", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](289, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](290, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](291, "a", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](292, "i", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](293, " Lock screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](294, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "a", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](296, "i", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](297, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](298, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "button", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_299_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](300, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](302, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "nav", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](304, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "ul", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](306, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](307, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_307_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](308, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](309, "Dashboards ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](310, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "div", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](313, "Default");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](314, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](315, "Saas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](316, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](317, "Crypto");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](318, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_319_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](320, "i", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](321, "UI Elements ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](322, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "div", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](324, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](326, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](328, "Alerts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "Cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](334, "Carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](336, "Dropdowns");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](338, "Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Images");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](344, "Modals");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](345, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](346, "Range Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "Progress Bars");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "Sweet-Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "Tabs & Accordions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](353, "div", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](355, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](356, "Typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](358, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](360, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](362, "Colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "Image Cropper");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](365, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "a", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_366_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](367, "i", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, "Apps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](369, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](370, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](371, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](372, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](373, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](374, "Chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](376, "a", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_376_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](377, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](378, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](380, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](381, "Inbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](383, "Read Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](384, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "a", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_385_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, " Ecommerce ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](387, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "div", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](389, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](390, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](392, "Product Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](393, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](394, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](396, "Customers");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](397, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](398, "Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](399, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](400, "Checkout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](402, "Shops");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](404, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](406, "a", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_406_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](407, " Crypto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](408, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "div", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](410, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](411, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](413, "Buy/Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](415, "Exchange");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, "Lending");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](418, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](419, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, "KYC Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](423, "ICO Landing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](424, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](425, "a", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_425_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](426, " Projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](427, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "div", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](430, "Projects Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](432, "Projects List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](434, "Project Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](435, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](436, "Create New");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](438, "a", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_438_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](439, " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](440, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](442, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](443, "Task List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](445, "Kanban Board");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](447, "Create Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "a", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_449_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](450, " Contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](451, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "div", 141);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](453, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](454, "User Grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](455, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](456, "User List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](457, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](458, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](459, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](460, "a", 142);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_460_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](461, "i", 143);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](462, "Components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](463, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](464, "div", 144);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](465, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](466, "a", 145);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_466_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](467, " Forms ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](468, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](469, "div", 146);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](470, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](471, "Form Elements");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](472, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](473, "Form Validation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](474, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](475, "Form Advanced");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](476, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](477, "Form Editors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](478, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](479, "Form File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](480, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](481, "Form Repeater");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](482, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](483, "Form Wizard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](484, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](485, "Form Mask");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](486, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](487, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_487_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](488, " Tables ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](489, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](490, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](491, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](492, "Basic Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](493, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](494, "Advanced Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](495, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](496, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_496_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](497, " Charts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](498, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](499, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](500, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](501, "Apex charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](502, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](503, "Chartjs Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](504, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](505, "Chartist Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](506, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](507, "E - Chart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](508, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](509, "a", 147);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_509_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](510, " Icons ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](511, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](512, "div", 148);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](513, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](514, "Boxicons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](515, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](516, "Material Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](517, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](518, "Dripicons");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](519, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](520, "Font awesome");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](521, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](522, "a", 149);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_522_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](523, " Maps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](524, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](525, "div", 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](526, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](527, "Google Maps");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](528, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](529, "a", 151);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_529_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](530, "i", 152);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](531, "Extra pages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](532, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](533, "div", 153);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](534, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](535, "a", 154);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_535_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](536, " Invoices ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](537, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](538, "div", 155);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](539, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](540, "Invoice List");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](541, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](542, "Invoice Detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](543, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](544, "a", 156);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_544_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](545, " Authentication ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](546, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](547, "div", 157);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](548, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](549, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](550, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](551, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](552, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](553, "Recover Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](554, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](555, "Lock Screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](556, "div", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](557, "a", 158);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_557_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](558, " Utility ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](559, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](560, "div", 159);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](561, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](562, "Starter Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](563, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](564, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](565, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](566, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](567, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](568, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](569, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](570, "Pricing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](571, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](572, "Error 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](573, "a", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](574, "Error 500");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](575, "li", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](576, "a", 160);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_576_listener($event) { return ctx.onMenuClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](577, "i", 161);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](578, "Layouts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](579, "div", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](580, "div", 162);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](581, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_581_listener() { return ctx.changeLayout("vertical"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](582, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](583, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_583_listener() { return ctx.topbarLight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](584, "Topbar light");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](585, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_585_listener() { return ctx.boxedWidth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](586, "Boxed width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](587, "a", 163);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_587_listener() { return ctx.coloredHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](588, "Colored Header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("config", ctx.configData);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsdG9wYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6774:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 6091);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 3117);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 7198);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 8807);






function LayoutComponent_app_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-vertical");
} }
function LayoutComponent_app_horizontal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-horizontal");
} }
class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        // default settings
        this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
    }
    ngAfterViewInit() {
    }
    /**
     * Check if the vertical layout is requested
     */
    isVerticalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isHorizontalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LayoutComponent_app_horizontal_1_Template, 1, 0, "app-horizontal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVerticalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isHorizontalLayoutRequested());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6091:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   "LAYOUT_HORIZONTAL": () => (/* binding */ LAYOUT_HORIZONTAL)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';


/***/ }),

/***/ 2372:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 1946);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component */ 6774);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 9504);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ 4016);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 4158);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 6034);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 8807);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vertical/vertical.component */ 7198);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./horizontaltopbar/horizontaltopbar.component */ 5566);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);














class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_6__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_7__.VerticalComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_8__.HorizontaltopbarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__.PerfectScrollbarModule] }); })();


/***/ }),

/***/ 6034:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsidebarComponent": () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 1946);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);



/**
 * Rightsidebar component
 */
class RightsidebarComponent {
    constructor() { }
    ngOnInit() {
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
}
RightsidebarComponent.ɵfac = function RightsidebarComponent_Factory(t) { return new (t || RightsidebarComponent)(); };
RightsidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RightsidebarComponent, selectors: [["app-rightsidebar"]], decls: 21, vars: 1, consts: [[1, "right-bar", 3, "exclude", "clickOutside"], [1, "h-100"], [1, "rightbar-title", "px-3", "py-4"], ["href", "javascript:void(0);", 1, "right-bar-toggle", "float-right", 3, "click"], [1, "mdi", "mdi-close", "noti-icon"], [1, "m-0"], [1, "mt-0"], [1, "text-center", "mb-0"], [1, "p-4"], [1, "mb-2"], ["href", "//skote-v-light.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-1.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-dark.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-2.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-rtl.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-3.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], [1, "rightbar-overlay"]], template: function RightsidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickOutside", function RightsidebarComponent_Template_div_clickOutside_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "perfect-scrollbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RightsidebarComponent_Template_a_click_3_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Choose Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("exclude", ".right-bar-toggle");
    } }, directives: [ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideDirective, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__.PerfectScrollbarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodHNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 1121:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: "Menu",
        isTitle: true,
    },
    // {
    //    id: 2,
    //    label: "Dashboard",
    //    icon: "bx-home-circle",
    //    link: "/dashboard",
    // },
    // {
    //    id: 3,
    //    label: "Settlement",
    //    icon: "bx-receipt",
    //    subItems: [
    //       {
    //          id: 4,
    //          label: "Request",
    //          icon: "bx-receipt",
    //          subItems: [
    //             {
    //                id: 5,
    //                label: "New",
    //                link: "/settlement/request/req-new",
    //                parentId: 4,
    //             },
    //             {
    //                id: 6,
    //                label: "Requirement",
    //                link: "/settlement/request/requirement",
    //                parentId: 4,
    //             },
    //          ],
    //          parentId: 3,
    //       },
    //       {
    //          id: 7,
    //          label: 'Approval',
    //          link: '/settlement/approval',
    //          parentId: 3
    //       }
    //    ],
    // },
    {
        id: 8,
        label: 'Non-Financial Alteration',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 9,
                label: 'Request',
                link: 'non-financial-alteration/request',
                parentId: 8
            },
            // {
            //    id: 4,
            //    label: 'Saas',
            //    link: '/dashboards/saas',
            //    parentId: 8
            // }
        ]
    },
    // {
    //     id: 2,
    //     label: 'Dashboards',
    //     icon: 'bx-home-circle',
    //     badge: {
    //         variant: 'info',
    //         text: '03',
    //     },
    //     subItems: [
    //         {
    //             id: 3,
    //             label: 'Default',
    //             link: '/dashboard',
    //             parentId: 2
    //         },
    //         {
    //             id: 4,
    //             label: 'Saas',
    //             link: '/dashboards/saas',
    //             parentId: 2
    //         },
    //         {
    //             id: 5,
    //             label: 'Crypto',
    //             link: '/dashboards/crypto',
    //             parentId: 2
    //         },
    //     ]
    // },
    // {
    //     id: 6,
    //     isLayout: true
    // },
    // {
    //     id: 7,
    //     label: 'Apps',
    //     isTitle: true
    // },
    // {
    //     id: 8,
    //     label: 'Calendar',
    //     icon: 'bx-calendar',
    //     link: '/calendar',
    // },
    // {
    //     id: 9,
    //     label: 'Chat',
    //     icon: 'bx-chat',
    //     link: '/chat',
    //     badge: {
    //         variant: 'success',
    //         text: 'New',
    //     },
    // },
    // {
    //     id: 10,
    //     label: 'Ecommerce',
    //     icon: 'bx-store',
    //     subItems: [
    //         {
    //             id: 11,
    //             label: 'Products',
    //             link: '/ecommerce/products',
    //             parentId: 10
    //         },
    //         {
    //             id: 12,
    //             label: 'Product Detail',
    //             link: '/ecommerce/product-detail',
    //             parentId: 10
    //         },
    //         {
    //             id: 13,
    //             label: 'Orders',
    //             link: '/ecommerce/orders',
    //             parentId: 10
    //         },
    //         {
    //             id: 14,
    //             label: 'Customers',
    //             link: '/ecommerce/customers',
    //             parentId: 10
    //         },
    //         {
    //             id: 15,
    //             label: 'Cart',
    //             link: '/ecommerce/cart',
    //             parentId: 10
    //         },
    //         {
    //             id: 16,
    //             label: 'Checkout',
    //             link: '/ecommerce/checkout',
    //             parentId: 10
    //         },
    //         {
    //             id: 17,
    //             label: 'Shops',
    //             link: '/ecommerce/shops',
    //             parentId: 10
    //         },
    //         {
    //             id: 18,
    //             label: 'Add Product',
    //             link: '/ecommerce/add-product',
    //             parentId: 10
    //         },
    //     ]
    // },
    // {
    //     id: 19,
    //     label: 'Crypto',
    //     icon: 'bx-bitcoin',
    //     subItems: [
    //         {
    //             id: 20,
    //             label: 'Wallet',
    //             link: '/crypto/wallet',
    //             parentId: 19
    //         },
    //         {
    //             id: 21,
    //             label: 'Buy/Sell',
    //             link: '/crypto/buy-sell',
    //             parentId: 19
    //         },
    //         {
    //             id: 22,
    //             label: 'Exchange',
    //             link: '/crypto/exchange',
    //             parentId: 19
    //         },
    //         {
    //             id: 23,
    //             label: 'Lending',
    //             link: '/crypto/lending',
    //             parentId: 19
    //         },
    //         {
    //             id: 24,
    //             label: 'Orders',
    //             link: '/crypto/orders',
    //             parentId: 19
    //         },
    //         {
    //             id: 25,
    //             label: 'KYC Application',
    //             link: '/crypto/kyc-application',
    //             parentId: 19
    //         },
    //         {
    //             id: 26,
    //             label: 'ICO Landing',
    //             link: '/crypto-ico-landing',
    //             parentId: 19
    //         }
    //     ]
    // },
    // {
    //     id: 27,
    //     label: 'Email',
    //     icon: 'bx-envelope',
    //     subItems: [
    //         {
    //             id: 28,
    //             label: 'Inbox',
    //             link: '/email/inbox',
    //             parentId: 27
    //         },
    //         {
    //             id: 29,
    //             label: 'Read Email',
    //             link: '/email/read',
    //             parentId: 27
    //         }
    //     ]
    // },
    // {
    //     id: 30,
    //     label: 'Invoices',
    //     icon: 'bx-receipt',
    //     subItems: [
    //         {
    //             id: 31,
    //             label: 'Invoice List',
    //             link: '/invoices/list',
    //             parentId: 30
    //         },
    //         {
    //             id: 32,
    //             label: 'Invoice Detail',
    //             link: '/invoices/detail',
    //             parentId: 30
    //         },
    //     ]
    // },
    // {
    //     id: 33,
    //     label: 'Projects',
    //     icon: 'bx-briefcase-alt-2',
    //     subItems: [
    //         {
    //             id: 34,
    //             label: 'Projects Grid',
    //             link: '/projects/grid',
    //             parentId: 33
    //         },
    //         {
    //             id: 35,
    //             label: 'Projects List',
    //             link: '/projects/list',
    //             parentId: 33
    //         },
    //         {
    //             id: 36,
    //             label: 'Project Overview',
    //             link: '/projects/overview',
    //             parentId: 33
    //         },
    //         {
    //             id: 37,
    //             label: 'Create New',
    //             link: '/projects/create',
    //             parentId: 33
    //         }
    //     ]
    // },
    // {
    //     id: 38,
    //     label: 'Tasks',
    //     icon: 'bx-task',
    //     subItems: [
    //         {
    //             id: 39,
    //             label: 'Task List',
    //             link: '/tasks/list',
    //             parentId: 38
    //         },
    //         {
    //             id: 40,
    //             label: 'Kanban Board',
    //             link: '/tasks/kanban',
    //             parentId: 38
    //         },
    //         {
    //             id: 41,
    //             label: 'Create Task',
    //             link: '/tasks/create',
    //             parentId: 38
    //         }
    //     ]
    // },
    // {
    //     id: 42,
    //     label: 'Contacts',
    //     icon: 'bxs-user-detail',
    //     subItems: [
    //         {
    //             id: 43,
    //             label: 'User Grid',
    //             link: '/contacts/grid',
    //             parentId: 42
    //         },
    //         {
    //             id: 44,
    //             label: 'User List',
    //             link: '/contacts/list',
    //             parentId: 42
    //         },
    //         {
    //             id: 45,
    //             label: 'Profile',
    //             link: '/contacts/profile',
    //             parentId: 42
    //         }
    //     ]
    // },
    // {
    //     id: 46,
    //     label: 'Pages',
    //     isTitle: true
    // },
    // {
    //     id: 47,
    //     label: 'Authentication',
    //     icon: 'bx-user-circle',
    //     subItems: [
    //         {
    //             id: 48,
    //             label: 'Login',
    //             link: '/pages/login-1',
    //             parentId: 47
    //         },
    //         {
    //             id: 49,
    //             label: 'Register',
    //             link: '/pages/register-1',
    //             parentId: 47
    //         },
    //         {
    //             id: 50,
    //             label: 'Recover Password',
    //             link: '/pages/recoverpwd-1',
    //             parentId: 47
    //         },
    //         {
    //             id: 51,
    //             label: 'Lock Screen',
    //             link: '/pages/lock-screen-1',
    //             parentId: 47
    //         }
    //     ]
    // },
    // {
    //     id: 52,
    //     label: 'Utility',
    //     icon: 'bx-file',
    //     subItems: [
    //         {
    //             id: 53,
    //             label: 'Starter Page',
    //             link: '/pages/starter',
    //             parentId: 52
    //         },
    //         {
    //             id: 54,
    //             label: 'Maintenance',
    //             link: '/pages/maintenance',
    //             parentId: 52
    //         },
    //         {
    //             id: 55,
    //             label: 'Timeline',
    //             link: '/pages/timeline',
    //             parentId: 52
    //         },
    //         {
    //             id: 56,
    //             label: 'FAQs',
    //             link: '/pages/faqs',
    //             parentId: 52
    //         },
    //         {
    //             id: 57,
    //             label: 'Pricing',
    //             link: '/pages/pricing',
    //             parentId: 52
    //         },
    //         {
    //             id: 58,
    //             label: 'Error 404',
    //             link: '/pages/404',
    //             parentId: 52
    //         },
    //         {
    //             id: 59,
    //             label: 'Error 500',
    //             link: '/pages/500',
    //             parentId: 52
    //         },
    //     ]
    // },
    // {
    //     id: 60,
    //     label: 'Components',
    //     isTitle: true
    // },
    // {
    //     id: 61,
    //     label: 'UI Elements',
    //     icon: 'bx-tone',
    //     subItems: [
    //         {
    //             id: 62,
    //             label: 'Alerts',
    //             link: '/ui/alerts',
    //             parentId: 61
    //         },
    //         {
    //             id: 63,
    //             label: 'Buttons',
    //             link: '/ui/buttons',
    //             parentId: 61
    //         },
    //         {
    //             id: 64,
    //             label: 'Cards',
    //             link: '/ui/cards',
    //             parentId: 61
    //         },
    //         {
    //             id: 65,
    //             label: 'Carousel',
    //             link: '/ui/carousel',
    //             parentId: 61
    //         },
    //         {
    //             id: 66,
    //             label: 'Dropdowns',
    //             link: '/ui/dropdowns',
    //             parentId: 61
    //         },
    //         {
    //             id: 67,
    //             label: 'Grid',
    //             link: '/ui/grid',
    //             parentId: 61
    //         },
    //         {
    //             id: 68,
    //             label: 'Images',
    //             link: '/ui/images',
    //             parentId: 61
    //         },
    //         {
    //             id: 69,
    //             label: 'Modals',
    //             link: '/ui/modals',
    //             parentId: 61
    //         },
    //         {
    //             id: 70,
    //             label: 'Range Slider',
    //             link: '/ui/rangeslider',
    //             parentId: 61
    //         },
    //         {
    //             id: 71,
    //             label: 'Progress Bars',
    //             link: '/ui/progressbar',
    //             parentId: 61
    //         },
    //         {
    //             id: 72,
    //             label: 'Sweet-Alert',
    //             link: '/ui/sweet-alert',
    //             parentId: 61
    //         },
    //         {
    //             id: 73,
    //             label: 'Tabs & Accordions',
    //             link: '/ui/tabs-accordions',
    //             parentId: 61
    //         },
    //         {
    //             id: 74,
    //             label: 'Typography',
    //             link: '/ui/typography',
    //             parentId: 61
    //         },
    //         {
    //             id: 75,
    //             label: 'Video',
    //             link: '/ui/video',
    //             parentId: 61
    //         },
    //         {
    //             id: 76,
    //             label: 'General',
    //             link: '/ui/general',
    //             parentId: 61
    //         },
    //         {
    //             id: 77,
    //             label: 'Colors',
    //             link: '/ui/colors',
    //             parentId: 61
    //         },
    //         {
    //             id: 78,
    //             label: 'Image Cropper',
    //             link: '/ui/image-crop',
    //             parentId: 61
    //         },
    //     ]
    // },
    // {
    //     id: 79,
    //     label: 'Forms',
    //     icon: 'bxs-eraser',
    //     subItems: [
    //         {
    //             id: 80,
    //             label: 'Form Elements',
    //             link: '/form/elements',
    //             parentId: 79
    //         },
    //         {
    //             id: 81,
    //             label: 'Form Validation',
    //             link: '/form/validation',
    //             parentId: 79
    //         },
    //         {
    //             id: 82,
    //             label: 'Form Advanced',
    //             link: '/form/advanced',
    //             parentId: 79
    //         },
    //         {
    //             id: 83,
    //             label: 'Form Editors',
    //             link: '/form/editor',
    //             parentId: 79
    //         },
    //         {
    //             id: 84,
    //             label: 'Form File Upload',
    //             link: '/form/uploads',
    //             parentId: 79
    //         },
    //         {
    //             id: 85,
    //             label: 'Form Repeater',
    //             link: '/form/repeater',
    //             parentId: 79
    //         },
    //         {
    //             id: 86,
    //             label: 'Form Wizard',
    //             link: '/form/wizard',
    //             parentId: 79
    //         },
    //         {
    //             id: 87,
    //             label: 'Form Mask',
    //             link: '/form/mask',
    //             parentId: 79
    //         }
    //     ]
    // },
    // {
    //     id: 88,
    //     icon: 'bx-list-ul',
    //     label: 'Tables',
    //     subItems: [
    //         {
    //             id: 89,
    //             label: 'Basic Tables',
    //             link: '/tables/basic',
    //             parentId: 88
    //         },
    //         {
    //             id: 90,
    //             label: 'Advanced Table',
    //             link: '/tables/advanced',
    //             parentId: 88
    //         }
    //     ]
    // },
    // {
    //     id: 91,
    //     icon: 'bxs-bar-chart-alt-2',
    //     label: 'Charts',
    //     subItems: [
    //         {
    //             id: 92,
    //             label: 'Apex charts',
    //             link: '/charts/apex',
    //             parentId: 91
    //         },
    //         {
    //             id: 93,
    //             label: 'Chartjs Chart',
    //             link: '/charts/chartjs',
    //             parentId: 91
    //         },
    //         {
    //             id: 94,
    //             label: 'Chartist Chart',
    //             link: '/charts/chartist',
    //             parentId: 91
    //         },
    //         {
    //             id: 95,
    //             label: 'E - Chart',
    //             link: '/charts/echart',
    //             parentId: 91
    //         }
    //     ]
    // },
    // {
    //     id: 96,
    //     label: 'Icons',
    //     icon: 'bx-aperture',
    //     subItems: [
    //         {
    //             id: 97,
    //             label: 'Boxicons',
    //             link: '/icons/boxicons',
    //             parentId: 96
    //         },
    //         {
    //             id: 98,
    //             label: 'Material Design',
    //             link: '/icons/materialdesign',
    //             parentId: 96
    //         },
    //         {
    //             id: 99,
    //             label: 'Dripicons',
    //             link: '/icons/dripicons',
    //             parentId: 96
    //         },
    //         {
    //             id: 100,
    //             label: 'Font awesome',
    //             link: '/icons/fontawesome',
    //             parentId: 96
    //         },
    //     ]
    // },
    // {
    //     id: 101,
    //     label: 'Maps',
    //     icon: 'bx-map',
    //     subItems: [
    //         {
    //             id: 102,
    //             label: 'Google Maps',
    //             link: '/maps/google',
    //             parentId: 101
    //         }
    //     ]
    // }
];


/***/ }),

/***/ 9504:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ 1194);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 1121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 3117);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);








const _c0 = ["sideMenu"];
function SidebarComponent_ng_template_0_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.label);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Layouts");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r11.changeLayout("horizontal"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Horizontal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r13.lightSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Light Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r14.compactSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Compact Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r15.iconSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Icon Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r16.boxedLayout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Boxed Layout");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SidebarComponent_ng_template_0_ng_container_3_li_2_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r17.coloredSidebar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Colored Sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bx ", item_r6.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-", item_r6.badge.variant, " float-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.badge.text);
} }
const _c1 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_i_1_Template, 1, 3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_span_4_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](4, _c1, !item_r6.badge, item_r6.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("bx ", item_r6.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("badge badge-pill badge-", item_r6.badge.variant, " float-right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r6.badge.text);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_i_1_Template, 1, 3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_span_4_Template, 2, 4, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", item_r6.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r6.label, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c1, !subitem_r32.badge, subitem_r32.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subitem_r32.label, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subitem_r32.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-parent", subitem_r32.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subitem_r32.label, " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitems_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", subitems_r39.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("data-parent", subitems_r39.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", subitems_r39.label, " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_ul_3_li_1_Template, 3, 3, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", subitem_r32.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_a_1_Template, 3, 5, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_a_2_Template, 2, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_ul_3_Template, 2, 1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.hasItems(subitem_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r31.hasItems(subitem_r32));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r31.hasItems(subitem_r32));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_li_1_Template, 4, 3, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", item_r6.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_3_a_1_Template, 5, 7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_3_a_2_Template, 5, 4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_3_ul_3_Template, 2, 1, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r9.hasItems(item_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r6));
} }
function SidebarComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_1_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_Template, 24, 0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_3_Template, 4, 3, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r6.isLayout);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r6.isTitle && !item_r6.isLayout);
} }
function SidebarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ul", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_Template, 4, 3, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
} }
function SidebarComponent_div_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_div_4_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function SidebarComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, SidebarComponent_div_5_ng_container_1_Template, 1, 0, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
/**
 * Sidebar component
 */
class SidebarComponent {
    constructor(eventService, router) {
        this.eventService = eventService;
        this.router = router;
        this.isCondensed = false;
        this.menuItems = [];
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd) {
                this._activateMenuDropdown();
            }
        });
    }
    ngOnInit() {
        this.initialize();
        document.body.setAttribute("data-sidebar", "dark");
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3,
        };
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        this.eventService.broadcast("changeLayout", layout);
    }
    ngAfterViewInit() {
        this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
    }
    ngOnChanges() {
        if ((!this.isCondensed && this.sideMenu) || this.isCondensed) {
            setTimeout(() => {
                this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
            });
        }
        else if (this.menu) {
            this.menu.dispose();
        }
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Light sidebar
     */
    lightSidebar() {
        document.body.setAttribute("data-sidebar", "light");
        document.body.setAttribute("data-topbar", "dark");
        document.body.removeAttribute("data-sidebar-size");
        document.body.removeAttribute("data-layout-size");
        document.body.removeAttribute("data-keep-enlarged");
        document.body.classList.remove("vertical-collpsed");
        document.body.classList.add("overflow-h");
    }
    /**
     * Compact sidebar
     */
    compactSidebar() {
        document.body.setAttribute("data-sidebar-size", "small");
        document.body.setAttribute("data-sidebar", "dark");
        document.body.removeAttribute("data-topbar");
        document.body.removeAttribute("data-layout-size");
        document.body.removeAttribute("data-keep-enlarged");
        document.body.classList.remove("sidebar-enable");
        document.body.classList.remove("vertical-collpsed");
        document.body.classList.add("overflow-h");
    }
    /**
     * Icon sidebar
     */
    iconSidebar() {
        document.body.classList.add("sidebar-enable");
        document.body.classList.add("vertical-collpsed");
        document.body.setAttribute("data-sidebar", "dark");
        document.body.removeAttribute("data-layout-size");
        document.body.removeAttribute("data-keep-enlarged");
        document.body.removeAttribute("data-topbar");
        document.body.classList.add("overflow-h");
    }
    /**
     * Boxed layout
     */
    boxedLayout() {
        document.body.setAttribute("data-keep-enlarged", "true");
        document.body.setAttribute("data-layout-size", "boxed");
        document.body.setAttribute("data-sidebar", "dark");
        document.body.classList.add("vertical-collpsed");
        document.body.classList.remove("sidebar-enable");
        document.body.removeAttribute("data-topbar");
        document.body.classList.add("overflow-h");
    }
    /**
     * Colored sidebar
     */
    coloredSidebar() {
        document.body.setAttribute("data-sidebar", "colored");
        document.body.removeAttribute("data-sidebar-size");
        document.body.removeAttribute("data-layout-size");
        document.body.classList.remove("vertical-collpsed");
        document.body.removeAttribute("data-topbar");
        document.body.classList.add("overflow-h");
    }
    /**
     * Activate the parent dropdown
     */
    _activateMenuDropdown() {
        this._removeAllClass("mm-active");
        this._removeAllClass("mm-show");
        const links = document.getElementsByClassName("side-nav-link-ref");
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (window.location.pathname === links[i]["pathname"]) {
                menuItemEl = links[i];
                break;
            }
        }
        if (menuItemEl) {
            menuItemEl.classList.add("active");
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add("mm-active");
                const parent2El = parentEl.parentElement.closest("ul");
                if (parent2El && parent2El.id !== "side-menu") {
                    parent2El.classList.add("mm-show");
                    const parent3El = parent2El.parentElement;
                    if (parent3El) {
                        parent3El.classList.add("mm-active");
                        const childAnchor = parent3El.querySelector(".has-arrow");
                        const childDropdown = parent3El.querySelector(".has-dropdown");
                        if (childAnchor)
                            childAnchor.classList.add("mm-active");
                        if (childDropdown)
                            childDropdown.classList.add("mm-active");
                        const parent4El = parent3El.parentElement;
                        if (parent4El) {
                            parent4El.classList.add("mm-show");
                            const parent5El = parent4El.parentElement;
                            if (parent5El) {
                                parent5El.classList.add("mm-active");
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        // console.log(item);
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, inputs: { isCondensed: "isCondensed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 3, consts: [["contentTemplate", ""], [1, "vertical-menu"], [3, "config"], [4, "ngIf"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [1, "menu-title"], ["href", "javascript: void(0);", 1, "has-arrow"], [1, "bx", "bx-layout"], ["aria-expanded", "false", 1, "sub-menu"], ["href", "javascript: void(0);", 3, "click"], ["href", "javascript:void(0);", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 3, "ngClass"], [3, "class", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], [4, "ngTemplateOutlet"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SidebarComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("config", ctx.configData);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCondensed);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4016:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/auth.service */ 263);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 9150);







/**
 * Topbar component
 */
class TopbarComponent {
    constructor(document, router, authService) {
        this.document = document;
        this.router = router;
        this.authService = authService;
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() {
        this.openMobileMenu = false;
        this.element = document.documentElement;
        this.configData = {
            suppressScrollX: true,
            wheelSpeed: 0.3,
        };
    }
    /**
     * Logout the user
     */
    logout() {
        this.authService.logout();
        this.router.navigate(["/account/login"]);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        console.log("toggleMobileMenu() is invoked!");
        this.mobileMenuButtonClicked.emit();
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle("fullscreen-enable");
        if (!document.fullscreenElement &&
            !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 287, vars: 1, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-icon.png", "alt", "", "height", "22"], ["src", "assets/images/logo.png", "alt", "", "height", "50"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "btn", "btn-sm", "font-size-16", "header-item", "m-0", "custom-heading", "pl-0"], ["src", "assets/images/app-icon.png", 1, "custom-app-icon"], ["ngbDropdown", "", 1, "dropdown-mega", "d-none", "d-lg-block", "ml-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ml-2"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "p-3"], [1, "form-group", "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item"], ["src", "assets/images/flags/spain.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], [1, "align-middle"], ["src", "assets/images/flags/germany.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/italy.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["src", "assets/images/flags/russia.jpg", "alt", "user-image", "height", "12", 1, "mr-1"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "ml-1"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "badge-danger", "badge-pill"], ["aria-labelledby", "page-header-notifications-dropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-right", "p-0"], [1, "row", "align-items-center"], [1, "m-0"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px", 3, "config"], ["href", "", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "mr-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "mr-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-light", "btn-block", "text-center"], [1, "mdi", "mdi-arrow-down-circle", "mr-1"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ml-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "mr-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "mr-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "mr-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "mr-1", "text-danger"], [1, "dropdown", "d-inline-block"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_14_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Core App Plus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "UI Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Lightbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Range Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Sweet Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Applications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Ecommerce");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Extra Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Light Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Compact Sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Horizontal layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Coming Soon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100, "UI Components");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Lightbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Range Slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Sweet Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Forms");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119, "Tables");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Charts");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](129, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "form", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](134, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](145, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "German");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](149, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](151, "Italian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](153, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "span", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Russian");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](172, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](183, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "span", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "h6", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, " View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "perfect-scrollbar", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "span", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](211, "i", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "h6", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](214, "Your order is placed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, " If several languages coalesce the grammar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, " 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "h6", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](226, "James Lemire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229, "It will seem like simplified English.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](231, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232, " 1 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "span", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](237, "i", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "h6", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "Your item is shipped");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243, " If several languages coalesce the grammar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](245, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](246, " 3 min ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "a", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "h6", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "Salena Layfield");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](255, " As a skeptical Cambridge friend of mine occidental. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "p", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, " 1 hours ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "a", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262, " Load More.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "button", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](265, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "span", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](267, "Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](271, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](272, " Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "i", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, " My Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](276, "a", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](277, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](278, " Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](279, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](280, "i", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](281, " Lock screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](282, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_283_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](285, " Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](206);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx.configData);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent], styles: [".custom-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: bold;\n}\n\n.custom-app-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  margin-right: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 5px;\n  padding: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVGIiwiZmlsZSI6InRvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jdXN0b20taGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jdXN0b20tYXBwLWljb24ge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 7198:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../topbar/topbar.component */ 4016);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 9504);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 6034);






/**
 * Vertical component
 */
class VerticalComponent {
    constructor(router) {
        this.router = router;
        this.isCondensed = false;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                document.body.classList.remove("sidebar-enable");
            }
        });
    }
    ngOnInit() {
        document.body.removeAttribute("data-layout");
        document.body.removeAttribute("data-topbar");
        document.body.removeAttribute("data-layout-size");
        document.body.classList.add("sidebar-enable");
        document.body.classList.add("vertical-collpsed");
        document.body.removeAttribute("data-sidebar-size");
        document.body.classList.add("overflow-h");
    }
    isMobile() {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    }
    ngAfterViewInit() { }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle("right-bar-enabled");
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        console.log("onToggleMobileMenu() is fired!");
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle("sidebar-enable");
        document.body.classList.toggle("vertical-collpsed");
        if (window.screen.width <= 768) {
            document.body.classList.remove("vertical-collpsed");
        }
    }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
VerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 7, vars: 1, consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [3, "isCondensed"], [1, "main-content"], [1, "page-content"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() { return ctx.onSettingsButtonClicked(); })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-rightsidebar");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isCondensed", ctx.isCondensed);
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_0__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_2__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui.module */ 9668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule] }); })();


/***/ }),

/***/ 9234:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagetitleComponent": () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


function PagetitleComponent_ng_container_5_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function PagetitleComponent_ng_container_5_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.label, " ");
} }
function PagetitleComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_ng_container_5_li_1_Template, 3, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagetitleComponent_ng_container_5_li_2_Template, 2, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
} }
class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagetitleComponent.ɵfac = function PagetitleComponent_Factory(t) { return new (t || PagetitleComponent)(); };
PagetitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 6, vars: 1, consts: [[1, "row", "h-100", "m-0"], [1, "col-12", "p-0"], [1, "d-flex", "align-items-center", "justify-content-between"], [1, "page-title-right"], [1, "breadcrumb", "m-0", "bg-white", "p-2"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]], template: function PagetitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PagetitleComponent_ng_container_5_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2V0aXRsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FBQ0YiLCJmaWxlIjoicGFnZXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9668:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIModule": () => (/* binding */ UIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 1288);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 1946);
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ 9234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);






class UIModule {
}
UIModule.ɵfac = function UIModule_Factory(t) { return new (t || UIModule)(); };
UIModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UIModule });
UIModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTimepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UIModule, { declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule], exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: "",
        measurementId: "",
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map