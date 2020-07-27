(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "./src/app/components/prediction/prediction.component.ts");



class AppComponent {
    constructor() {
        this.title = 'midas-demonstrator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-dark", "sticky-top", "bg-dark", "flex-md-nowrap", "p-0"], ["href", "#", 1, "navbar-brand", "col-sm-3", "col-md-2", "mr-0"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Universal Named-entity Recognition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-prediction");
    } }, directives: [_components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_1__["PredictionComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_named_entities_named_entities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/named-entities/named-entities.component */ "./src/app/components/named-entities/named-entities.component.ts");
/* harmony import */ var _components_sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sentiment-analysis/sentiment-analysis.component */ "./src/app/components/sentiment-analysis/sentiment-analysis.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/prediction/prediction.component */ "./src/app/components/prediction/prediction.component.ts");


 // added new
 // added new







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"] // Added as the part of import 
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_named_entities_named_entities_component__WEBPACK_IMPORTED_MODULE_6__["NamedEntitiesComponent"],
        _components_sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_7__["SentimentAnalysisComponent"],
        _components_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
        _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__["PredictionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"] // Added as the part of import 
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_named_entities_named_entities_component__WEBPACK_IMPORTED_MODULE_6__["NamedEntitiesComponent"],
                    _components_sentiment_analysis_sentiment_analysis_component__WEBPACK_IMPORTED_MODULE_7__["SentimentAnalysisComponent"],
                    _components_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
                    _components_prediction_prediction_component__WEBPACK_IMPORTED_MODULE_9__["PredictionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"] // Added as the part of import 
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
}
EventsComponent.ɵfac = function EventsComponent_Factory(t) { return new (t || EventsComponent)(); };
EventsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventsComponent, selectors: [["app-events"]], decls: 2, vars: 0, template: function EventsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "events works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-events',
                templateUrl: './events.component.html',
                styleUrls: ['./events.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/named-entities/named-entities.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/named-entities/named-entities.component.ts ***!
  \***********************************************************************/
/*! exports provided: NamedEntitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamedEntitiesComponent", function() { return NamedEntitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NamedEntitiesComponent {
    constructor() { }
    ngOnInit() {
    }
}
NamedEntitiesComponent.ɵfac = function NamedEntitiesComponent_Factory(t) { return new (t || NamedEntitiesComponent)(); };
NamedEntitiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NamedEntitiesComponent, selectors: [["app-named-entities"]], decls: 2, vars: 0, template: function NamedEntitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "named-entities works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmFtZWQtZW50aXRpZXMvbmFtZWQtZW50aXRpZXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NamedEntitiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-named-entities',
                templateUrl: './named-entities.component.html',
                styleUrls: ['./named-entities.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/prediction/prediction.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/prediction/prediction.component.ts ***!
  \***************************************************************/
/*! exports provided: PredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionComponent", function() { return PredictionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_Document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/Document */ "./src/app/models/Document.ts");
/* harmony import */ var _services_demo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/demo.service */ "./src/app/services/demo.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = ["myInput"];
function PredictionComponent_form_27_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PredictionComponent_form_27_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter Text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PredictionComponent_form_27_Template_textarea_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.textDocument = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.textDocument);
} }
function PredictionComponent_form_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PredictionComponent_form_28_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Enter URL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PredictionComponent_form_28_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.newspaperUrl = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.newspaperUrl);
} }
function PredictionComponent_form_29_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Holy guacamole!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.errorMesssage, " ");
} }
function PredictionComponent_form_29_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 33, 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PredictionComponent_form_29_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onUploadFile(_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Choose File ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PredictionComponent_form_29_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.fileChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PredictionComponent_form_29_div_10_Template, 7, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.fileIsUploaded());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isError);
} }
function PredictionComponent_option_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r17, " ");
} }
function PredictionComponent_option_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r18, " ");
} }
class PredictionComponent {
    constructor(demoService, sanitizer) {
        this.demoService = demoService;
        this.sanitizer = sanitizer;
        this.tagNER = true;
        this.isTextOrLink = '1';
        this.textDocument = "It was released on July 24,2015, through Relapse Records ."; // TODO do not fire on empty string
        this.newspaperUrl = null; // TODO check if valid newspaper
        this.predictionsNer = null;
        this.lang_options = ["en", "hr"];
        this.selectedLang = "en";
        this.degree_options = ["very low", "low", "medium", "high"];
        this.selectedDegree = "high";
        this.isError = false;
        this.errorMesssage = null;
        this.entity_color = {
            "Name": "#0000ff",
            "Person": "#6666ff",
            // "Name":"#9999ff",
            "Fictional": "#9999ff",
            "Entity": "#9999ff",
            "Profession": "#9999ff",
            "Other": "#9999ff",
            "Organization": "#0099ff",
            "Organization_Other": "#33adff",
            "International_Organization": "#33adff",
            "Show_Organization": "#33adff",
            "Family": "#33adff",
            "Ethnic_Group": "#33adff",
            "Ethnic_Group_Other": "#80ccff",
            "Nationality": "#80ccff",
            "Sports_Organization": "#33adff",
            "Sports_Organization_Other": "#80ccff",
            "Pro_Sports_Organization": "#80ccff",
            "Sports_League": "#80ccff",
            "Corporation": "#33adff",
            "Corporation_Other": "#80ccff",
            "Company": "#80ccff",
            "Company_Group": "#80ccff",
            "Political_Organization": "#33adff",
            "Political_Organization_Other": "#80ccff",
            "Government": "#80ccff",
            "Political_Party": "#80ccff",
            "Cabinet": "#80ccff",
            "Military": "#80ccff",
            "Location": "#00ffff",
            "Location_Other": "#66ffff",
            // "Fictional": "#66ffff",
            "Spa": "#66ffff",
            "GPE": "#66ffff",
            "GPE_Other": "#b3ffff",
            "City": "#b3ffff",
            "County": "#b3ffff",
            "Province": "#b3ffff",
            "Country": "#b3ffff",
            "Region": "#66ffff",
            "Region_Other": "#b3ffff",
            "Continental_Region": "#b3ffff",
            "Domestic_Region": "#b3ffff",
            "Geological_Region": "#66ffff",
            "Geological_Region_Other": "#b3ffff",
            "Mountain": "#b3ffff",
            "Island": "#b3ffff",
            "River": "#b3ffff",
            "Lake": "#b3ffff",
            "Sea": "#b3ffff",
            "Bay": "#b3ffff",
            "Astral_Body": "#66ffff",
            "Astral_Body_Other": "#b3ffff",
            "Star": "#b3ffff",
            "Planet": "#b3ffff",
            "Constellation": "#b3ffff",
            "Address": "#66ffff",
            "Address_Other": "#b3ffff",
            "Postal_Address": "#b3ffff",
            "Email": "#b3ffff",
            "URL": "#b3ffff",
            "Facility": "#ff00ff",
            "Facility_Other": "#ff4dff",
            "Facility_Part": "#ff4dff",
            "Archaeological_Place": "#ff4dff",
            "Archaeological_Place_Other": "#ffb3ff",
            "Tumulus": "#ffb3ff",
            "GOE": "#ff4dff",
            "GOE_Other": "#ffb3ff",
            "Public_Institution": "#ffb3ff",
            "School": "#ffb3ff",
            "Research_Institute": "#ffb3ff",
            "Market": "#ffb3ff",
            "Park": "#ffb3ff",
            "Sports_Facility": "#ffb3ff",
            "Museum": "#ffb3ff",
            "Zoo": "#ffb3ff",
            "Amusement_Park": "#ffb3ff",
            "Theater": "#ffb3ff",
            "Worship_Place": "#ffb3ff",
            "Car_Stop": "#ffb3ff",
            "Station": "#ffb3ff",
            "Airport": "#ffb3ff",
            "Port": "#ffb3ff",
            "Line": "#ff4dff",
            "Line_Other": "#ffb3ff",
            "Railroad": "#ffb3ff",
            "Road": "#ffb3ff",
            "Canal": "#ffb3ff",
            "Water_Route": "#ffb3ff",
            "Tunnel": "#ffb3ff",
            "Bridge": "#ffb3ff",
            "Product": "#00ffcc",
            "Product_Other": "#80ffe5",
            "Material": "#80ffe5",
            "Clothing": "#80ffe5",
            "Object": "#ccfff5",
            "Brand": "#ccfff5",
            // "Other": "#ccfff5",
            "Money_Form": "#80ffe5",
            "Drug": "#80ffe5",
            "Substance": "#ccfff5",
            // "Brand": "#ccfff5",
            // "Other": "#ccfff5",
            "Weapon": "#80ffe5",
            // "Object": "#ccfff5",
            // "Brand": "#ccfff5",
            // "Other": "#ccfff5",
            "Stock": "#80ffe5",
            "Award": "#80ffe5",
            "Decoration": "#80ffe5",
            "Offence": "#80ffe5",
            "Service": "#80ffe5",
            "Class": "#80ffe5",
            "Vehicle": "#80ffe5",
            // "Brand": "#ccfff5",
            "Vehicle_Other": "#ccfff5",
            "Car": "#ccfff5",
            "Train": "#ccfff5",
            "Aircraft": "#ccfff5",
            "Spaceship": "#ccfff5",
            "Ship": "#ccfff5",
            "Food": "#80ffe5",
            // "Brand": "#ccfff5",
            "Food_Other": "#ccfff5",
            "Dish": "#ccfff5",
            "Art": "#80ffe5",
            "Art_Other": "#ccfff5",
            "Picture": "#ccfff5",
            "Broadcast_Program": "#ccfff5",
            "Movie": "#ccfff5",
            "Show": "#ccfff5",
            "Music": "#ccfff5",
            "Book": "#ccfff5",
            "Printing": "#80ffe5",
            "Printing_Other": "#ccfff5",
            "Newspaper": "#ccfff5",
            "Magazine": "#ccfff5",
            "Doctrine_Method": "#80ffe5",
            "Doctrine_Method_Other": "#ccfff5",
            "Culture": "#ccfff5",
            "Religion": "#ccfff5",
            "Academic": "#ccfff5",
            "Sport": "#ccfff5",
            "Style": "#ccfff5",
            "Movement": "#ccfff5",
            "Theory": "#ccfff5",
            "Plan": "#ccfff5",
            "Rule": "#80ffe5",
            "Rule_Other": "#ccfff5",
            "Treaty": "#ccfff5",
            "Law": "#ccfff5",
            "Language": "#80ffe5",
            "Language_Other": "#ccfff5",
            "National_Language": "#ccfff5",
            "Unit": "#80ffe5",
            "Unit_Other": "#ccfff5",
            "Currency": "#ccfff5",
            "Event": "##00e600",
            "Personal": "#4dff4d",
            "Event_Other": "#4dff4d",
            "Occasion": "#4dff4d",
            "Occasion_Other": "#b3ffb3",
            "Religious_Festival": "#b3ffb3",
            "Game": "#b3ffb3",
            "Conference": "#b3ffb3",
            "Historical_Event": "#4dff4d",
            // "Other": "#b3ffb3",
            "Incident": "#b3ffb3",
            "War": "#b3ffb3",
            "Natural_Phenomenon": "#4dff4d",
            "Natural_Phenomenon_Other": "#b3ffb3",
            "Natural_Disaster": "#b3ffb3",
            "Earthquake": "#b3ffb3",
            "Natural_Object": "#bf4080",
            "Natural_Object_Other": "#d279a6",
            "Element": "#d279a6",
            "Compound": "#d279a6",
            "Mineral": "#d279a6",
            "Living_Thing": "#d279a6",
            "Living_Thing_Other": "#e6b3cc",
            "Fungus": "#e6b3cc",
            "Mollusc_Arthropod": "#e6b3cc",
            "Insect": "#e6b3cc",
            "Fish": "#e6b3cc",
            "Amphibia": "#e6b3cc",
            "Reptile": "#e6b3cc",
            "Bird": "#e6b3cc",
            "Mammal": "#e6b3cc",
            "Flora": "#e6b3cc",
            "Living_Thing_Part": "#d279a6",
            "Living_Thing_Part_Other": "#e6b3cc",
            "Animal_Part": "#e6b3cc",
            "Flora_Part": "#e6b3cc",
            "Disease": "#ff661a",
            "Disease_Other": "#ff9966",
            "Animal_Disease": "#ff9966",
            "Color": "#ffff00",
            "Color_Other": "#ffff4d",
            "Nature_Color": "#ffff4d",
            "Time_TOP": "#ff0000",
            "Time_TOP_Other": "#ff471a",
            "Timex": "#ff471a",
            "Timex_Other": "#ff704d",
            "Time": "#ff704d",
            "Date": "#ff704d",
            "Day_Of_Week": "#ff704d",
            "Holiday": "#ff704d",
            "Era": "#ff704d",
            "Timex_Relative": "#ff471a",
            "Timex_Relative_Other": "#ff704d",
            // "Time": "#ff704d",
            // "Date": "#ff704d",
            // "Holiday": "#ff704d",
            // "Day_Of_Week": "#ff704d",
            "Periodx": "#ff471a",
            "Periodx_Other": "#ff704d",
            "Period_Time": "#ff704d",
            "Period_Day": "#ff704d",
            "Period_Week": "#ff704d",
            "Period_Month": "#ff704d",
            "Period_Year": "#ff704d",
            "Numex": "#a6a6a6",
            "Numex_Other": "#bfbfbf",
            "Money": "#bfbfbf",
            "Stock_Index": "#bfbfbf",
            "Point": "#bfbfbf",
            "Percent": "#bfbfbf",
            "Multiplication": "#bfbfbf",
            "Frequency": "#bfbfbf",
            "Age": "#bfbfbf",
            "School_Age": "#bfbfbf",
            "Phone_Number": "#bfbfbf",
            "ID_Number": "#bfbfbf",
            "Ordinal_Number": "#bfbfbf",
            "Rank": "#bfbfbf",
            "Latitude_Longtitude": "#bfbfbf",
            "Measurement": "#bfbfbf",
            "Measurement_Other": "#e6e6e6",
            "Physical_Extent": "#e6e6e6",
            "Space": "#e6e6e6",
            "Volume": "#e6e6e6",
            "Weight": "#e6e6e6",
            "Speed": "#e6e6e6",
            "Intensity": "#e6e6e6",
            "Temperature": "#e6e6e6",
            "Calorie": "#e6e6e6",
            "Seismic_Intensity": "#e6e6e6",
            "Seismic_Magnitude": "#e6e6e6",
            "Countx": "#bfbfbf",
            "Countx_Other": "#e6e6e6",
            "N_Person": "#e6e6e6",
            "N_Organization": "#e6e6e6",
            "N_Location": "#e6e6e6",
            "N_Location_Other": "#f2f2f2",
            "N_Country": "#f2f2f2",
            "N_Facility": "#e6e6e6",
            "N_Product": "#e6e6e6",
            "N_Event": "#e6e6e6",
            "N_Natural_Object": "#e6e6e6",
            "N_Natural_Object_Other": "#f2f2f2",
            "N_Animal": "#f2f2f2",
            "N_Flora": "#f2f2f2"
        };
    }
    show() {
        this.showModal = true; // Show-Hide Modal Check
    }
    //Bootstrap Modal Close event
    hide() {
        this.showModal = false;
    }
    ngOnInit() {
        this.selectedLang = this.lang_options[0];
    }
    onToggle(value) {
        this.isTextOrLink = value;
        // Clear display
        this.textDocument = null;
        this.newspaperUrl = null;
        this.predictionsNer = null;
        // Clear the textbox
        // TODO Clear the file uploaded
    }
    onToggleAll() {
        this.tagNER = true;
    }
    spansToMarkup(documentResult, predictionTask) {
        var hash = documentResult.predictedNerText;
        var offset = 0;
        var original = documentResult.text;
        // This will hold the final results
        var final = "";
        hash.forEach((predictions) => {
            // http://jsfiddle.net/erzo1t0w/1/
            predictions.forEach((prediction) => {
                var word = prediction[0];
                var tag = prediction[1];
                if (tag != "O") {
                    final += "<mark data-entity='" + tag.toString().toLowerCase() + "'>" + word + "</mark>";
                }
                else {
                    final += word + " ";
                }
            });
        });
        console.log(final);
        return this.sanitizer.bypassSecurityTrustHtml(final);
    }
    fileChanged(event) {
        const files = event.target.files; //this.fileUploadEl.nativeElement.files;
        console.log(`files: `, files);
        if (files.length === 0) {
            return;
        }
        ;
        this.file = files[0];
    }
    /**
     * Method is use to download file.
     * @param data - Array Buffer data
     * @param type - type of the document.
     */
    downLoadFile(data, type, filename) {
        let blob = new Blob([data], { type: type });
        const a = document.createElement('a');
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(objectUrl);
    }
    onUploadFile(form) {
        this.resetErrors();
        const params = {
            file: this.file,
            lang: this.selectedLang,
            level: this.degree_options.indexOf(this.selectedDegree) + 1
        };
        this.demoService.upload(params).subscribe(data => {
            this.downLoadFile(data, "text/csv", this.file.name);
        }, error => {
            if (error.status == "200") {
                this.downLoadFile(error.error.text, "text/csv", this.file.name);
                this.myInputVariable.nativeElement.value = "";
                this.file = null;
            }
            else {
                console.log(error);
                this.isError = true;
                this.errorMesssage = error.error;
                this.file = null;
            }
        });
    }
    resetErrors() {
        this.isError = false;
        this.errorMesssage = null;
    }
    fileIsUploaded() {
        let result = false;
        if (this.file && this.file != null) {
            result = true;
        }
        return result;
    }
    onSubmit() {
        this.predictionsNer = null;
        if (this.isTextOrLink == '1' && this.textDocument) {
            const params = {
                text: this.textDocument,
                lang: this.selectedLang,
                level: this.degree_options.indexOf(this.selectedDegree) + 1
            };
            console.log(params);
            this.demoService.getPrediction(params).subscribe(documentResult => {
                console.log(documentResult);
                this.predictionsNer = this.spansToMarkup(documentResult, src_app_models_Document__WEBPACK_IMPORTED_MODULE_1__["PredictionTask"].Ner);
            });
        }
        else if (this.isTextOrLink == '2') {
            const params = {
                text: this.newspaperUrl,
                lang: this.selectedLang,
                level: this.degree_options.indexOf(this.selectedDegree) + 1
            };
            if (this.newspaperUrl) {
                this.demoService.getPredictionLink(params).subscribe(documentResult => {
                    this.predictionsNer = this.spansToMarkup(documentResult, src_app_models_Document__WEBPACK_IMPORTED_MODULE_1__["PredictionTask"].Ner);
                }, error => {
                    console.log(error);
                });
            }
        }
        else if (this.isTextOrLink == '3') {
            // FILE UPLOAD CODE
            // this.demoService.demoFile()
        }
        // TODO call the service to get the predictions
    }
}
PredictionComponent.ɵfac = function PredictionComponent_Factory(t) { return new (t || PredictionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"])); };
PredictionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PredictionComponent, selectors: [["app-prediction"]], viewQuery: function PredictionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
    } }, decls: 47, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-md-2"], ["height", "180", "src", "assets/logo.png", "alt", "", 3, "click"], ["id", "imagemodal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal"], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "myModalLabel", 1, "modal-title"], [1, "modal-body"], ["src", "assets/UNER_scheme_v1.0.svg", "id", "imagepreview", 2, "height", "100%", "width", "100%"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-default", 3, "click"], [1, "col-md-7"], [1, ""], [1, "display-4"], ["role", "group", "aria-label", "Basic example", 1, "btn-group"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["name", "textForm", 3, "ngSubmit", 4, "ngIf"], ["name", "linkForm", 3, "ngSubmit", 4, "ngIf"], [1, "entities", 3, "innerHTML"], [1, "border-top", "my-3"], [1, "col-md-3"], [1, "form-group"], ["for", "language"], ["id", "language", 1, "custom-select", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "degree"], ["id", "degree", 1, "custom-select", 3, "ngModel", "ngModelChange"], ["name", "textForm", 3, "ngSubmit"], ["for", "textDocument"], ["id", "textDocument", "name", "textDocument", "rows", "3", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary"], ["name", "linkForm", 3, "ngSubmit"], ["for", "newspaperUrl"], ["required", "", "type", "text", "id", "newspaperUrl", "name", "newspaperUrl", "aria-label", "URL", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["fileForm", "ngForm"], ["name", "fileUpload", "type", "file", 1, "form-control-file", 3, "change"], ["myInput", ""], [1, "btn", "btn-primary", 3, "disabled"], [1, "my-3"], ["class", "alert alert-danger alert-dismissible fade show", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger", "alert-dismissible", "fade", "show"], ["type", "button", "data-dismiss", "alert", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [3, "value"]], template: function PredictionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_Template_img_click_3_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UNER Scheme V1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " --> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_Template_button_click_14_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_Template_button_click_20_listener() { return ctx.onToggle("1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_Template_button_click_22_listener() { return ctx.onToggle("2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PredictionComponent_Template_button_click_24_listener() { return ctx.onToggle("3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PredictionComponent_form_27_Template, 7, 1, "form", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PredictionComponent_form_28_Template, 7, 1, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PredictionComponent_form_29_Template, 11, 2, "form", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Language:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "select", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PredictionComponent_Template_select_ngModelChange_39_listener($event) { return ctx.selectedLang = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, PredictionComponent_option_40_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Complexity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "select", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PredictionComponent_Template_select_ngModelChange_45_listener($event) { return ctx.selectedDegree = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, PredictionComponent_option_46_Template, 2, 2, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.showModal ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isTextOrLink == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isTextOrLink == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isTextOrLink == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTextOrLink == "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTextOrLink == "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isTextOrLink == "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.predictionsNer, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lang_options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedDegree);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.degree_options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlZGljdGlvbi9wcmVkaWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PredictionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-prediction',
                templateUrl: './prediction.component.html',
                styleUrls: ['./prediction.component.css']
            }]
    }], function () { return [{ type: _services_demo_service__WEBPACK_IMPORTED_MODULE_2__["DemoService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }]; }, { myInputVariable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myInput']
        }] }); })();


/***/ }),

/***/ "./src/app/components/sentiment-analysis/sentiment-analysis.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/sentiment-analysis/sentiment-analysis.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SentimentAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentimentAnalysisComponent", function() { return SentimentAnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SentimentAnalysisComponent {
    constructor() { }
    ngOnInit() {
    }
}
SentimentAnalysisComponent.ɵfac = function SentimentAnalysisComponent_Factory(t) { return new (t || SentimentAnalysisComponent)(); };
SentimentAnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SentimentAnalysisComponent, selectors: [["app-sentiment-analysis"]], decls: 2, vars: 0, template: function SentimentAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sentiment-analysis works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VudGltZW50LWFuYWx5c2lzL3NlbnRpbWVudC1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SentimentAnalysisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sentiment-analysis',
                templateUrl: './sentiment-analysis.component.html',
                styleUrls: ['./sentiment-analysis.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/models/Document.ts":
/*!************************************!*\
  !*** ./src/app/models/Document.ts ***!
  \************************************/
/*! exports provided: Document, DocumentResult, PredictionTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Document", function() { return Document; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentResult", function() { return DocumentResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictionTask", function() { return PredictionTask; });
class Document {
    // TBD
    constructor(ner, sentiment, event, text) { }
}
class DocumentResult {
}
var PredictionTask;
(function (PredictionTask) {
    PredictionTask[PredictionTask["Ner"] = 1] = "Ner";
    PredictionTask[PredictionTask["Sentiment"] = 2] = "Sentiment";
    PredictionTask[PredictionTask["Event"] = 3] = "Event";
})(PredictionTask || (PredictionTask = {}));


/***/ }),

/***/ "./src/app/services/demo.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/demo.service.ts ***!
  \******************************************/
/*! exports provided: DemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoService", function() { return DemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        "content-type": "application/json",
    })
};
class DemoService {
    constructor(http) {
        this.http = http;
        // TODO 
        this.demoUrl = "http://cleopatra.ijs.si/midas/api/v1/service";
        this.demoPredict = "/predict";
        this.demoLink = "/predict/link";
        this.demoFile = "/predict/upload";
    }
    getModels() {
        return this.http.get(`${this.demoUrl}`);
    }
    getPrediction(document) {
        return this.http.post(`${this.demoUrl}${this.demoPredict}`, document, httpOptions);
    }
    getPredictionLink(document) {
        return this.http.post(`${this.demoUrl}${this.demoLink}`, document, httpOptions);
    }
    upload(document) {
        const formData = new FormData();
        formData.append('file', document.file, document.file.name);
        formData.append('lang', document.lang);
        formData.append('level', document.level);
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'FileName': document.file.name,
            Accept: "application/plain",
            responseType: "arraybuffer",
        });
        return this.http.post(`${this.demoUrl}${this.demoFile}`, formData, {
            headers,
        });
    }
}
DemoService.ɵfac = function DemoService_Factory(t) { return new (t || DemoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DemoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DemoService, factory: DemoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/gaurish/angela/projects/angular-crash-course/midas/midas-demonstrator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map