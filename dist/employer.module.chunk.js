webpackJsonp(["employer.module"],{

/***/ "../../../../../src/app/employer/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dashboard works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/employer/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/employer/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".searchjobseeker-section {\r\n    padding: 30px 0px;\r\n}\r\n.searchjobseeker-section h2 {\r\n    font-size: 20px !important;\r\n    font-weight: normal;\r\n    text-align: left;\r\n    padding: 0px 30px;\r\n}\r\n.jobseeeker-section {\r\n    padding: 26px 20px;\r\n}\r\n.jobseeeker-section h2 {\r\n    font-weight: normal;\r\n    letter-spacing: 0.04em;\r\n}\r\n.jobseeeker-section .product-name ul {\r\n    padding-top: 5px;\r\n}\r\n.jobseeeker-section .product-name ul li {\r\n    display: inline;\r\n    padding: 0px 6px;\r\n} \r\n.jobseeeker-section .product-thumbnail {\r\n    padding: 15px 10px 15px 0px;\r\n}\r\n.jobseeeker-section .product-thumbnail img {\r\n    width: 80px;\r\n}\r\n.jobseeeker-section .product-price .amount {\r\n    font-size: 18px;\r\n    line-height: 20px;\r\n    color: #053a4f;\r\n}\r\ninput.ng-tns-c8-0.ui-inputtext.ui-widget.ui-state-default.ui-corner-all {\r\n    background-color: white;\r\n    padding: 0px 42px;\r\n}\r\ninput#calc_shipping_state, input#calc_shipping_postcode, select#calc_shipping_country {\r\n    background-color: white;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"col-lg-3\">\r\n\t\t<section class=\"page-title text-center bg-light searchjobseeker-section\">\r\n\t\t\t<h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Search Job Seekers</h2>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-sm-10 col-sm-offset-1\">\r\n\t\t\t\t\t<label for=\"billing_address_1\" class=\"pull-left\">Date\r\n\t\t\t\t\t\t<abbr class=\"required\" title=\"required\">*</abbr>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"form-row form-row-wide \">\r\n\t\t\t\t\t\t<p-calendar [(ngModel)]=\"filterJobseekers.Date\" dataType=\"Date\" (onSelect)=\"onDateChange($event)\"></p-calendar>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-10 col-sm-offset-1\">\r\n\t\t\t\t\t<label for=\"billing_address_1\" class=\"pull-left\">Position\r\n\t\t\t\t\t\t<abbr class=\"required\" title=\"required\">*</abbr>\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"form-row form-row-wide \">\r\n\t\t\t\t\t\t<select name=\"calc_shipping_country\" id=\"calc_shipping_country\" class=\"country_to_state\" rel=\"calc_shipping_state\" (change)=\"onPositionChange()\" [(ngModel)]=\"filterJobseekers.Position\">\r\n\t\t\t\t\t\t\t<option *ngFor=\"let position of positionList\">{{position.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-10 col-sm-offset-1\">\r\n\t\t\t\t\t<label for=\"billing_address_1\" class=\"pull-left\">Hours Guaranteed\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\r\n\t\t\t\t\t\t<input type=\"number\" class=\"input-text\" value placeholder=\"No. of hours\" [(ngModel)]=\"filterJobseekers.Hours_Guarnteed\" name=\"Hours_Guarnteed\" id=\"Hours_Guarnteed\">\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-10 col-sm-offset-1\">\r\n\t\t\t\t\t<label for=\"billing_address_1\" class=\"pull-left\">Pay Requested\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"form-row form-row-wide\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"input-text\" value placeholder=\"Pay Requested\" name=\"calc_shipping_postcode\" id=\"calc_shipping_postcode\" [(ngModel)]=\"filterJobseekers.pay_request\">\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-10 col-sm-offset-1\">\r\n\t\t\t\t\t<label for=\"billing_address_1\" class=\"pull-left\">Distance (in miles)\r\n\t\t\t\t\t</label>\r\n\t\t\t\t\t<p class=\"form-row form-row-wide \">\r\n\t\t\t\t\t\t<select name=\"calc_shipping_country\" id=\"calc_shipping_country\" class=\"country_to_state\" rel=\"calc_shipping_state\" [(ngModel)]=\"filterJobseekers.distance\">\r\n\t\t\t\t\t\t\t<option value=\"VG\">Select distance</option>\r\n\t\t\t\t\t\t\t<option value=\"VI\">10</option>\r\n\t\t\t\t\t\t\t<option value=\"WF\">20</option>\r\n\t\t\t\t\t\t\t<option value=\"EH\">30</option>\r\n\t\t\t\t\t\t\t<option value=\"YE\">40</option>\r\n\t\t\t\t\t\t\t<option value=\"ZM\">50</option>\r\n\t\t\t\t\t\t\t<option value=\"ZW\">60</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t</div>\r\n\t<div class=\"col-lg-9 jobseeeker-section\">\r\n\t\t\t<h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Job Seekers</h2>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t<div class=\"table-wrap mb-30\">\r\n\t\t\t\t\t\t<table class=\"shop_table cart table\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-name\">Image</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-name\" >Position</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-price\">Hourly Rate</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-quantity\">Experience (yrs)</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-subtotal\">Zip Code</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"product-Hire\"><button class=\"btn btn-success\" routerLink=\"/employer/payment\" [disabled]=\"!itemsToHire.length\">Hire</button></th>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr class=\"cart_item\" *ngFor=\"let jobseeker of jobseekers | search:filterJobseekers\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-thumbnail\">\r\n\t\t\t\t\t\t\t\t\t\t<a >\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/img/Photos/user.png\" alt=\"\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-name\">\r\n\t\t\t\t\t\t\t\t\t\t<a ><b>{{jobseeker.JS_id.Position}}</b></a>\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t\t<li>Available</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><b>From:</b> {{jobseeker.Time_Start}}</li>\r\n\t\t\t\t\t\t\t\t\t\t\t<li><b>To:</b> {{jobseeker.Time_Finish}}</li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-price\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"amount\">$1250</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-quantity\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"quantity buttons_added\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" disabled step=\"1\" min=\"0\" value=\"{{jobseeker.Hours_Guaranteed}}\" [(ngModel)]=\"jobseeker.Hours_Guaranteed\" title=\"Qty\" class=\"input-text qty text\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-subtotal\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"amount\">{{jobseeker.JS_id.Zip_Code}}</span>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<!-- <td class=\"product-remove\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"remove\" title=\"Remove this item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ui-close\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td> -->\r\n\t\t\t\t\t\t\t\t\t<td class=\"product-hire\">\r\n\t\t\t\t\t\t\t\t\t\t<a class=\"Hire\" title=\"Hire this person\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"Hire\" (change)=\"selectToHire(jobseeker._id,$event)\">\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobSeekerSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_json_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_employer_service__ = __webpack_require__("../../../../../src/app/shared/services/employer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_haversine__ = __webpack_require__("../../../../ng2-haversine/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_haversine___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_haversine__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var JobSeekerSearchComponent = (function () {
    function JobSeekerSearchComponent(jsonLoaderService, router, userService, employerService, _haversineService) {
        var _this = this;
        this.jsonLoaderService = jsonLoaderService;
        this.router = router;
        this.userService = userService;
        this.employerService = employerService;
        this._haversineService = _haversineService;
        this.value = new Date();
        this.itemsToHire = [];
        var newDate = new Date();
        newDate.setUTCHours(0);
        newDate.setUTCMinutes(0);
        newDate.setUTCSeconds(0);
        newDate.setUTCMilliseconds(0);
        this.filterJobseekers = {
            Date: newDate,
            Hours_Guarnteed: null,
            Position: '',
            pay_request: null,
            distance: null
        };
        this.employerLocation = {
            lat: undefined,
            lng: undefined
        };
        this.subscription = userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.initUserData(user);
        });
    }
    // initialise employer data to use location lattitude and longitude
    JobSeekerSearchComponent.prototype.initUserData = function (user) {
        var _this = this;
        this.userService.getData(user.Email_Address).subscribe(function (res) {
            _this.employerLocation.lat = res.data.locationLat;
            _this.employerLocation.lng = res.data.locationLng;
        }, function (err) {
        });
    };
    JobSeekerSearchComponent.prototype.selectToHire = function (id, event) {
        if (event.target.checked) {
            this.itemsToHire.push(id);
            window.localStorage.setItem('itemsToHire', this.itemsToHire);
        }
        else if (!event.target.checked) {
            this.itemsToHire.splice(id);
            window.localStorage.setItem('itemsToHire', this.itemsToHire);
        }
    };
    JobSeekerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.tryHaversine(this.employerLocation);
        this.minDate = new Date();
        this.getJobseekers(this.filterJobseekers);
        this.jsonLoaderService.getPositions()
            .subscribe(function (data) {
            _this.positionList = data;
        }, function (error) {
            console.log(error);
        });
    };
    JobSeekerSearchComponent.prototype.onDateChange = function (event) {
        event.setUTCHours(0);
        event.setUTCMinutes(0);
        event.setUTCSeconds(0);
        event.setUTCMilliseconds(0);
        this.filterJobseekers.Date = event;
        this.getJobseekers(this.filterJobseekers);
    };
    JobSeekerSearchComponent.prototype.onPositionChange = function () {
        this.getJobseekers(this.filterJobseekers);
    };
    JobSeekerSearchComponent.prototype.filterData = function () {
        if (this.filterJobseekers.Date || this.filterJobseekers.Hours_Guarnteed) {
            this.getJobseekers(this.filterJobseekers);
        }
        else {
        }
    };
    // get the initial list of job seekers with todays date as input
    JobSeekerSearchComponent.prototype.getJobseekers = function (data) {
        var _this = this;
        console.log(data);
        this.employerService.queryJobseekers(data).subscribe(function (res) {
            console.log(res);
            _this.jobseekers = res.data;
            _this.calculateDistance(_this.jobseekers);
        }, function (err) {
            console.log(err);
        });
    };
    // calculating Distance based on the lat and lng of employer and job seeker
    JobSeekerSearchComponent.prototype.calculateDistance = function (jobseekers) {
        var _this = this;
        jobseekers.forEach(function (jobseeker) {
            if (jobseeker.JS_id.locationLat && jobseeker.JS_id.locationLng) {
                var jobseekerLocation = {
                    lat: jobseeker.JS_id.locationLat,
                    lng: jobseeker.JS_id.locationLng
                };
                jobseeker.Distance = _this.tryHaversine(_this.employerLocation, jobseekerLocation);
            }
            else {
                jobseeker.Distance = 'undefined';
            }
        });
        this.jobseekers = jobseekers;
    };
    //api for distance calculation
    JobSeekerSearchComponent.prototype.tryHaversine = function (employerLocation, jobseekerLocation) {
        var empLocation = {
            latitude: employerLocation.lat,
            longitude: employerLocation.lng
        };
        var jsLocation = {
            latitude: jobseekerLocation.lat,
            longitude: jobseekerLocation.lat
        };
        var miles = this._haversineService.getDistanceInMiles(empLocation, jsLocation);
        return miles;
    };
    return JobSeekerSearchComponent;
}());
JobSeekerSearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-job-seeker-search',
        template: __webpack_require__("../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_json_loader_service__["a" /* JsonLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_json_loader_service__["a" /* JsonLoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_employer_service__["a" /* EmployerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_employer_service__["a" /* EmployerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ng2_haversine__["HaversineService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng2_haversine__["HaversineService"]) === "function" && _e || Object])
], JobSeekerSearchComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=job-seeker-search.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/components/payment/payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active{\r\n    color:green;\r\n}\r\n.checkbox{\r\n    margin-left: 4%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/payment/payment.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Cart -->\r\n<section class=\"section-wrap shopping-cart\">\r\n  <div class=\"container relative\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 shipping-calculator-form\">\r\n        <h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Billing Address</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <input type=\"text\" class=\"input-text\" placeholder=\"Position\" value name=\"billing_city\" id=\"billing_city\">\r\n              \r\n            </div>\r\n          <div class=\"col-md-12\">\r\n            <input type=\"text\" class=\"input-text\" placeholder=\"Street address\" value name=\"billing_address_1\" id=\"billing_address_1\">\r\n            <input type=\"text\" class=\"input-text\" placeholder=\"Apartment, suite, unit etc. (optional)\" value name=\"billing_address_2\" id=\"billing_address_2\">\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <input type=\"text\" class=\"input-text\" placeholder=\"Town / City\" value name=\"billing_city\" id=\"billing_city\" [(ngModel)]=\"payment.City\">\r\n            \r\n          </div>\r\n          <div class=\"col-md-4\">\r\n              <select name=\"User_State\"  id=\"User_State\" class=\"country_to_state country_select\" title=\"State *\" [(ngModel)]=\"payment.State\">\r\n                <option value=\"\" disabled selected>State</option>\r\n                <option *ngFor=\"let state of statesList\" [attr.value]=\"state.name\">{{state.name}}</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <input type=\"text\" class=\"input-text\" placeholder=\"Postcode\" value name=\"billing_postcode\" id=\"billing_postcode\" [(ngModel)]=\"payment.Zip_Code\">\r\n          </div>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <input type=\"checkbox\" class=\"input-checkbox\" name=\"checkbox\" id=\"checkbox2\" value=\"2\">\r\n          <span>Use My Address</span>\r\n        </div>\r\n\r\n      </div>\r\n      <!-- end col shipping calculator -->\r\n      <div class=\"col-md-6 shipping-calculator-form\">\r\n          <h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Card Details</h2>\r\n\r\n          <div class=\"row\">\r\n              <div class=\"col-md-12\">\r\n                <input type=\"text\" class=\"input-text\" placeholder=\"Name On Card\" value name=\"billing_address_1\" id=\"billing_address_1\" [(ngModel)]=\"payment.Billing_Name\">\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                <div class=\"col-sm-6 col-xs-12 footer-payment-systems text-right sm-text-center mt-sml-10 pull-right\">\r\n                  <!--<i class=\"fa fa-cc-paypal\"></i>-->\r\n                  <i class=\"fa fa-cc-visa\" [ngClass]=\"{active: cardType=='Visa'}\"></i>\r\n                  <i class=\"fa fa-cc-mastercard\" [ngClass]=\"{active: cardType=='Mastercard'}\"></i>\r\n                  <i class=\"fa fa-cc-discover\" [ngClass]=\"{active: cardType=='Discover'}\"></i>\r\n                  <i class=\"fa fa-cc-amex\" [ngClass]=\"{active: cardType=='AMEX'}\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-12\">\r\n                  <input type=\"number\" class=\"input-text\" placeholder=\"Card number\" value name=\"cardNumber\" id=\"cardNumber\" [(ngModel)]=\"payment.Card_Nr\"  (change)=\"GetCardType(payment.Card_Nr)\">\r\n                  {{cardType}}\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                Expiry Date\r\n              </div>\r\n              <div class=\"col-md-5\">\r\n                <div class=\"col-xs-6\">\r\n                    <select name=\"billing_country\" id=\"billing_country\" class=\"country_to_state country_select pull-left\" title=\"Country *\" [(ngModel)]=\"payment.Expiration_Month\">\r\n                        <option value=\"YE\">MM</option>\r\n                        <option value=1>01</option>\r\n                        <option value=2>02</option>\r\n                        <option value=3>03</option><option value=4>04</option><option value=5>05</option>\r\n                        <option value=6>06</option><option value=7>07</option><option value=8>08</option>\r\n                        <option value=9>09</option><option value=10>10</option><option value=11>11</option>\r\n                        <option value=12>12</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-xs-6\">\r\n                    <select name=\"billing_country\" placeholder=\"MM\" id=\"billing_country\" class=\"country_to_state country_select pll-right\" title=\"Country *\" [(ngModel)]=\"payment.Expiration_Year\">\r\n                        <option value=\"YE\">YY</option>\r\n                        <option value=17>17</option>\r\n                        <option value=18>18</option><option value=19>19</option><option value=20>20</option>\r\n                        <option value=21>21</option><option value=22>22</option><option value=23>23</option>\r\n                      </select>\r\n                  </div>\r\n\r\n              </div>\r\n              \r\n              <div class=\"col-md-2\">\r\n                  Cvv*\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <input type=\"text\" class=\"input-text\" placeholder=\"Cvv\" value name=\"billing_postcode\" id=\"billing_postcode\">\r\n              </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-md-offset-6\">\r\n              <div class=\"actions\">\r\n                <a class=\"btn btn-md btn-dark pull-right\" (click)=\"makePayment()\"><span>Proceed to Payment</span></a>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n      <!-- end col cart totals -->\r\n\r\n    </div>\r\n    <!-- end row -->\r\n\r\n\r\n  </div>\r\n  <!-- end container -->\r\n</section>\r\n<!-- end cart -->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/employer/components/payment/payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_employer_service__ = __webpack_require__("../../../../../src/app/shared/services/employer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentComponent = (function () {
    function PaymentComponent(jsonLoaderService, employerservice) {
        this.jsonLoaderService = jsonLoaderService;
        this.employerservice = employerservice;
        this.cardNumber = null;
        this.cardType = '';
        this.initializePayment();
    }
    PaymentComponent.prototype.initializePayment = function () {
        this.payment = {
            Card_Nr: null,
            Billing_Name: '',
            Expiration_Month: null,
            Expiration_Year: null,
            City: '',
            State: '',
            Zip_Code: null,
            Amount: 2000,
            Position_id: ''
        };
    };
    PaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonLoaderService.getStates()
            .subscribe(function (data) {
            _this.statesList = data;
        }, function (error) {
            console.log(error);
        });
    };
    PaymentComponent.prototype.GetCardType = function (number) {
        // visa
        var re = new RegExp("^4");
        if (String(number).match(re) != null)
            this.cardType = "Visa";
        // Mastercard 
        // Updated for Mastercard 2017 BINs expansion
        if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(number))
            this.cardType = "Mastercard";
        // AMEX
        re = new RegExp("^3[47]");
        if (String(number).match(re) != null)
            this.cardType = "AMEX";
        // Discover
        re = new RegExp("^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)");
        if (String(number).match(re) != null)
            this.cardType = "Discover";
        // Diners
        // re = new RegExp("^36");
        // if (String(number).match(re) != null)
        //   this.cardType = "Diners";
        // Diners - Carte Blanche
        re = new RegExp("^30[0-5]");
        if (String(number).match(re) != null)
            this.cardType = "Diners - Carte Blanche";
        // JCB
        re = new RegExp("^35(2[89]|[3-8][0-9])");
        if (String(number).match(re) != null)
            this.cardType = "JCB";
        // Visa Electron
        re = new RegExp("^(4026|417500|4508|4844|491(3|7))");
        if (String(number).match(re) != null)
            this.cardType = "Visa Electron";
        if (!this.cardType) {
            this.cardType = "wrong number";
        }
    };
    //payment method
    PaymentComponent.prototype.makePayment = function () {
        var _this = this;
        this.employerservice.makePayment(this.payment).subscribe(function (res) {
            console.log(res);
            if (res.message == 'Payment Sucessfull') {
                _this.initializePayment();
            }
        });
    };
    return PaymentComponent;
}());
PaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment',
        template: __webpack_require__("../../../../../src/app/employer/components/payment/payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/payment/payment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__["a" /* JsonLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__["a" /* JsonLoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_employer_service__["a" /* EmployerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_employer_service__["a" /* EmployerService */]) === "function" && _b || Object])
], PaymentComponent);

var _a, _b;
//# sourceMappingURL=payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".prior_job_table thead tr{\r\n    background-color: #333;\r\n    padding:15px 25px;\r\n    color:#FFF\r\n}\r\n\r\n.prior_job_table thead tr th{\r\n    padding:15px 25px;\r\n}\r\n.shop_table td.product-name{\r\n    width: auto !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t<!-- Cart -->\r\n\t\t\t<section class=\"section-wrap shopping-cart\">\r\n          <div class=\"container relative\">\r\n            <div class=\"row\">\r\n                <h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Prior Job Offers</h2>          \r\n              <div class=\"col-md-12\">\r\n                <div class=\"table-wrap mb-30\">\r\n                  <table class=\"shop_table prior_job_table cart table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"product-name\" >Image</th>\r\n                        <th class=\"product-name\" >Position Id</th>\r\n                        <th class=\"product-price\">Name</th>\r\n                        <th class=\"product-quantity\">Hired</th>\r\n                        <th class=\"product-subtotal\" colspan=\"2\">Date</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr class=\"cart_item\">\r\n                        <td class=\"product-thumbnail\">\r\n                          <a>\r\n                            <img src=\"assets/img/Photos/user.png\" alt=\"\" height=\"75px\">\r\n                          </a>\r\n                        </td>\r\n                        <td class=\"product-name\">\r\n                          <a>A8D9D99D</a>\r\n                          <ul>\r\n                            <!-- <li>Texture: Yes</li> -->\r\n                            <!-- <li>Color: White</li> -->\r\n                          </ul>\r\n                        </td>\r\n                        <td class=\"product-price\">\r\n                          <span class=\"amount\">tyler durden</span>\r\n                        </td>\r\n                        <td class=\"product-quantity\">\r\n                          <div class=\"quantity buttons_added\">\r\n                            Didn't Hire\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"product-subtotal\">\r\n                          <span class=\"amount\">25/07/2017</span>\r\n                        </td>\r\n                        <td class=\"product-remove\">\r\n                          <a class=\"remove\" title=\"Remove this item\">\r\n                            <i class=\"ui-close\"></i>\r\n                          </a>\r\n                        </td>\r\n                      </tr>\r\n  \r\n                      <tr class=\"cart_item\">\r\n                        <td class=\"product-thumbnail\">\r\n                          <a >\r\n                            <img src=\"assets/img/Photos/user.png\" alt=\"\" height=\"75px\">\r\n                          </a>\r\n                        </td>\r\n                        <td class=\"product-name\">\r\n                          <a>A22S7HH8</a>\r\n                          <ul>\r\n                            <!-- <li>Texture: Yes</li> -->\r\n                            <!-- <li>Color: Black</li> -->\r\n                          </ul>\r\n                        </td>\r\n                        <td class=\"product-price\">\r\n                          <span class=\"amount\">Brad Pit</span>\r\n                        </td>\r\n                        <td class=\"product-quantity\">\r\n                          <div class=\"quantity buttons_added\">\r\n                            Hired\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"product-subtotal\">\r\n                          <span class=\"amount\">28/07/2017</span>\r\n                        </td>\r\n                        <td class=\"product-remove\">\r\n                          <a  class=\"remove\" title=\"Remove this item\">\r\n                            <i class=\"ui-close\"></i>\r\n                          </a>\r\n                        </td>\r\n                      </tr>\r\n                      <tr class=\"cart_item\">\r\n                        <td class=\"product-thumbnail\">\r\n                          <a>\r\n                            <img src=\"assets/img/Photos/user.png\" alt=\"\" height=\"75px\">\r\n                          </a>\r\n                        </td>\r\n                        <td class=\"product-name\">\r\n                          <a>A18S5HH8</a>\r\n                          <ul>\r\n                            <!-- <li>Texture: Yes</li> -->\r\n                            <!-- <li>Color: Black</li> -->\r\n                          </ul>\r\n                        </td>\r\n                        <td class=\"product-price\">\r\n                          <span class=\"amount\">Virat Kohli</span>\r\n                        </td>\r\n                        <td class=\"product-quantity\">\r\n                          <div class=\"quantity buttons_added\">\r\n                            Searched\r\n                          </div>\r\n                        </td>\r\n                        <td class=\"product-subtotal\">\r\n                          <span class=\"amount\">05/01/2017</span>\r\n                        </td>\r\n                        <td class=\"product-remove\">\r\n                          <a class=\"remove\" title=\"Remove this item\">\r\n                            <i class=\"ui-close\"></i>\r\n                          </a>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n  \r\n  \r\n              </div>\r\n              <!-- end col -->\r\n            </div>\r\n            <!-- end row -->\r\n  \r\n\r\n  \r\n          </div>\r\n          <!-- end container -->\r\n        </section>\r\n        <!-- end cart -->\r\n  "

/***/ }),

/***/ "../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriorJobOfferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PriorJobOfferComponent = (function () {
    function PriorJobOfferComponent() {
    }
    PriorJobOfferComponent.prototype.ngOnInit = function () {
    };
    return PriorJobOfferComponent;
}());
PriorJobOfferComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-prior-job-offer',
        template: __webpack_require__("../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PriorJobOfferComponent);

//# sourceMappingURL=prior-job-offer.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".forms-container-heading{\n    background-color:#00394E !important;\n    margin:0px;\n    padding:8px 15px;\n}\n.forms-container-heading h3 {\n    color:#fff;\n}\n.preview_image{\n    margin:20px 30px; \n}\n.forms-container-heading h3 {\n    margin-bottom: 0px;\n    font-weight: normal;\n}\n.row.padding-top{\n    padding-top: 17.9%;\n}\n.form-box-pad{\n    min-height: 630px !important;\n}\n.work-info-padding{\n    margin-top:15%;\n}\n.button-level{\n    margin-top: 7%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section-wrap\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"container-fluid \">\n        <div class=\"col-sm-6 forms-container\">\n          <div class=\"forms-container-heading\">\n            <h3><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Personal</h3>\n          </div>\n          <!-- view Profile -->\n          <div class=\"form-box-pad\" *ngIf=\"!isUserDataEdit\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label for=\"Firstname\"><b>Username:</b></label>\n                  <p>{{user.Firstname}}</p>\n\n                  <label for=\"Lastname\"><b>Full Name:</b></label>\n                  <p>{{user.Lastname}}</p>\n\n                  <label for=\"email\"><b>Email:</b></label>\n                  <p>{{user.Email_Address}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Photo:</b></label>\n                  <p *ngIf = \"!user.image\">\n                    <img src=\"assets/img/Photos/noImage.png\" height=\"160\" width=\"140\" alt=\"\">\n                  </p>\n                  <p *ngIf = \"user.image\">\n                    <img src=\"{{user.image}}\" height=\"160\" width=\"140\" alt=\"\">\n                  </p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label for=\"username\"><b>Street Address:</b></label>\n                  <p>{{user.Address_street}}</p>\n                </div>\n                <div class=\"col-md-12\">\n                  <label for=\"username\"><b>Land Mark:</b></label>\n                  <p class=\"\">{{user.Address_Unit}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>city/state:</b></label>\n                  <p>{{user.City}}/{{user.State}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Zip code:</b></label>\n                  <p>{{user.Zip_Code}}</p>\n                </div>\n              </div>\n              <div class=\"clear\"></div>\n              <div class=\"container-fluid\">\n                <div class=\"row  padding-top\">\n\n                  <a class=\"btn btn-inv btn-md btn-stroke pull-right\" (click)=\"editUserData()\"><span>Edit Profile</span></a>\n                </div>\n              </div>\n            </form>\n          </div>\n\n          <!-- edit profile -->\n          <div class=\"form-box-pad\" *ngIf=\"isUserDataEdit\">\n            <p>Please edit your profile and save changes.</p>\n            <form name=\"updatePersonalForm\" #updatePersonalForm='ngForm' novalidate>\n              <div class=\"row form-group\">\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Firstname\">First Name\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"text\" class=\"input-text\" placeholder [(ngModel)]=\"user.Firstname\" value=\"\" name=\"Firstname\" #Firstname='ngModel'\n                    required>\n                  <div *ngIf=\"Firstname.errors && (Firstname.dirty || Firstname.touched)\" class=\"error\">\n                    <div [hidden]=\"!Firstname.errors.required\">Please Enter Firstname</div>\n                  </div>\n                  <label for=\"User_Lastname\">Last Name\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"text\" class=\"input-text\" placeholder [(ngModel)]=\"user.Lastname\" value=\"\" name=\"Lastname\" id=\"User_Lastname\"\n                    #Lastname='ngModel' required>\n                  <div *ngIf=\"Lastname.errors && (Lastname.dirty || Lastname.touched)\" class=\"error\">\n                    <div [hidden]=\"!Lastname.errors.required\">Please Enter Lastname</div>\n                  </div>\n                  <label for=\"User_Email_Address\">Email\n                      <abbr class=\"required\" title=\"required\">*</abbr>\n                      </label>\n                  <input type=\"email\" class=\"input-text\" placeholder [(ngModel)]=\"user.Email_Address\" value=\"\" disabled name=\"Email_Address\" id=\"User_Email_Address\">\n                </div>\n                <div class=\"col-lg-6\">\n                  <input type=\"file\" (change)=\"changeListener($event)\" />\n                  <img class=\"preview_image\" src=\"{{user.image}}\" height=\"220\" width=\"160\" *ngIf=\"newImageUploaded\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <input type=\"text\" [(ngModel)] = \"address\" \n                    name=\"address\"\n                    [options]='options'\n                    (setAddress) = \"getAddress($event)\"\n                    (street_number) = 'street_number=$event'\n                    (street)= 'street=$event'\n                    (city)= 'city=$event'\n                    (state)='state=$event'\n                    (district)='district=$event'\n                    (country)='country=$event'\n                    (postal_code)='postal_code=$event'\n                    (lat)='lat=$event' \n                    (lng)='lng=$event' \n                    (adr_address)='adr_address=$event' \n                    (name)='name=$event' \n                    (place_id)='place_id=$event' \n                    (types)='types=$event' \n                    (url)='url=$event'  \n                    (utc_offset)='utc_offset=$event' \n                    (vicinity)='vicinity=$event' \n                    (photos)='photos=$event' \n                    (airport)='airport=$event' \n                    (CountryCodes)='CountryCodes=$event'\n                     id=\"autocomplete\"\n                    ng2-google-place-autocomplete/>\n                </div>\n                <div class=\"col-md-12\">\n                  <label for=\"User_Address_street\">Address\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"text\" class=\"input-text\" placeholder=\"Street address\" [(ngModel)]=\"user.Address_street\" value=\"\" name=\"Address_street\"\n                    id=\"User_Address_street\">\n                  <input type=\"text\" class=\"input-text\" placeholder=\"Apartment, suite, unit etc. (optional)\" [(ngModel)]=\"user.Address_Unit\"\n                    value=\"\" name=\"Address_Unit\" id=\"User_Address_Unit\" #Address_Unit='ngModel' required>\n                  <div *ngIf=\"Address_Unit.errors && (Address_Unit.dirty || Address_Unit.touched)\" class=\"error\">\n                    <div [hidden]=\"!Address_Unit.errors.required\">This field is required</div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <input type=\"text\" class=\"input-text\" placeholder=\"Town / City\" [(ngModel)]=\"user.City\" value=\"\" name=\"City\" id=\"USer+City\"\n                    #City='ngModel' required>\n                  <div *ngIf=\"City.errors && (City.dirty || City.touched)\" class=\"error\">\n                    <div [hidden]=\"!City.errors.required\">This field is required</div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <select name=\"User_State\" [(ngModel)]=\"user.State\" id=\"User_State\" class=\"country_to_state country_select\" title=\"State *\"\n                    #State='ngModel' required>\n                    <option value=\"\" disabled selected>State</option>\n                    <option *ngFor=\"let state of statesList\" [attr.value]=\"state.key\">{{state.name}}</option>\n                  </select>\n                  <div *ngIf=\"State.errors && (State.dirty || State.touched)\" class=\"error\">\n                    <div [hidden]=\"!State.errors.required\">This field is required</div>\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <input type=\"number\" class=\"input-text\" placeholder=\"Zip Code\" [(ngModel)]=\"user.Zip_Code\" name=\"Zip_Code\" id=\"User_Zip_Code\"\n                    #Zip_Code='ngModel' required>\n                  <div *ngIf=\"Zip_Code.errors && (Zip_Code.dirty || Zip_Code.touched)\" class=\"error\">\n                    <div [hidden]=\"!Zip_Code.errors.required\">This field is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <a class=\"btn btn-inv btn-md btn-stroke pull-left button-level\" (click)=\"cancelUpdate()\"><span>Cancel</span></a>\n                  <button class=\"btn btn-md btn-dark pull-right button-level\" [disabled]=\"!updatePersonalForm.form.valid\" (click)=\"updateUserData()\"><span>Update  Info</span></button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6 forms-container\">\n          <div class=\"forms-container-heading\">\n            <h3><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i> Work</h3>\n          </div>\n          <!-- view work information -->\n          <div class=\"form-box-pad\" *ngIf=\"!isWorkDataEdit\">\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label for=\"username\"><b>Practice Name:</b></label>\n                  <p>{{user.Practice_Name}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Practice Phone:</b></label>\n                  <p>{{user.Practice_Phone}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Speciality:</b></label>\n                  <p>{{user.Speciality}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label for=\"username\"><b>No Of Operations:</b></label>\n                  <p>{{user.Nr_of_Operations}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <label for=\"username\"><b>No of staff:</b></label>\n                  <p>{{user.Nr_of_Staff}}</p>\n                </div>\n                <div class=\"col-md-4\">\n                  <label for=\"username\"><b>Languages:</b></label>\n                  <p>{{user.Languages}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-12\">\n                  <label for=\"username\"><b>Dental School / <i>Graduated Year</i></b></label>\n                  <p>{{user.Dental_School}}/{{user.Year_Graduated}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Licence Number:</b></label>\n                  <p>{{user.License_Nr}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Years in Practice:</b></label>\n                  <p>{{user.Years_in_Practice}}</p>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Contact Person:</b></label>\n                  <p>{{user.Contact_Person}}</p>\n                </div>\n                <div class=\"col-md-6\">\n                  <label for=\"username\"><b>Contact Phone:</b></label>\n                  <p>{{user.Contact_Phone_Nr}}</p>\n                </div>\n              </div>\n              <div class=\"container-fluid\">\n                <div class=\"row work-info-padding\">\n                  <a class=\"btn btn-md btn-dark pull-right\" (click)=\"editWorkData()\"><span>Update Work Info</span></a>\n                </div>\n              </div>\n\n            </form>\n          </div>\n\n          <!-- edit work information -->\n          <div class=\"form-box-pad\" *ngIf=\"isWorkDataEdit\">\n            <form name=\"updateWorkForm\" #updateWorkForm='ngForm' novalidate>\n              <div class=\"row\">\n                <div class=\"col-lg-12\">\n                  <label for=\"user_Practice_Name\">Practice Name\n                  <!-- <abbr class=\"required\" title=\"required\">*</abbr> -->\n                  </label>\n                  <input type=\"text\" class=\"input-text\" placeholder [(ngModel)]=\"user.Practice_Name\" value name=\"Practice_Name\" id=\"user_Practice_Name\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <label for=\"user_Practice_Phone\">Practice Phone\n                   <abbr class=\"required\" title=\"required\">*</abbr> \n                  </label>\n                  <input type=\"number\" class=\"input-text\" placeholder [(ngModel)]=\"user.Practice_Phone\" value name=\"Practice_Phone\" id=\"user_Practice_Phone\"\n                    #Practice_Phone='ngModel' required>\n                  <div *ngIf=\"Practice_Phone.errors && (Practice_Phone.dirty || Practice_Phone.touched)\" class=\"error\">\n                    <div [hidden]=\"!Practice_Phone.errors.required\">This field is required</div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Speciality\">Speciality\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <select name=\"Speciality\" [(ngModel)]=\"user.Speciality\" id=\"Speciality\" class=\"country_to_state country_select\" title=\"Speciality *\"\n                    #Speciality='ngModel' required>\n                    <option value=\"\" disabled selected>select</option>\n                    <option *ngFor=\"let speciality of specialityList\" [attr.value]=\"speciality.name\">{{speciality.name}}</option>\n                  </select>\n                  <div *ngIf=\"Speciality.errors && (Speciality.dirty || Speciality.touched)\" class=\"error\">\n                    <div [hidden]=\"!Speciality.errors.required\">This field is required</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <label for=\"User_Nr_of_Operations\">No Of Operations\n                  <!--<abbr class=\"required\" title=\"required\">*</abbr>-->\n                  </label>\n                  <input type=\"number\" class=\"input-text\" [(ngModel)]=\"user.Nr_of_Operations\" placeholder=\"Nr_of_Operations\" value name=\"Nr_of_Operations\"\n                    id=\"User_Nr_of_Operations\">\n                </div>\n                <div class=\"col-md-4\">\n                  <label for=\"User_Nr_of_Staff\">Number of Staff\n                  <!--<abbr class=\"required\" title=\"required\">*</abbr>-->\n                  </label>\n                  <input type=\"number\" class=\"input-text\" placeholder=\"Street address\" [(ngModel)]=\"user.Nr_of_Staff\" value name=\"Nr_of_Staff\"\n                    id=\"User_Nr_of_Staff\">\n                </div>\n                <div class=\"col-lg-4\">\n                  <label for=\"User_Languages\">Languages\n                  <!--<abbr class=\"required\" title=\"required\">*</abbr>-->\n                  </label>\n                  <select name=\"Languages\" id=\"Languages\" [(ngModel)]=\"user.Languages\" class=\"country_to_state country_select\" title=\"Languages *\">\n                    <option value=\"\" disabled selected>Select</option>\n                    <option *ngFor=\"let language of languagesList\" [attr.value]=\"language.name\">{{language.name}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Dental_School\">Dental School\n                  <!-- <abbr class=\"required\" title=\"required\">*</abbr> -->\n                  </label>\n                  <input type=\"text\" class=\"input-text\" placeholder [(ngModel)]=\"user.Dental_School\" value name=\"Dental_School\" id=\"User_Dental_School\">\n                </div>\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Year_Graduated\">Year Graduated\n                  <!--<abbr class=\"required\" title=\"required\">*</abbr>-->\n                  </label>\n                  <select name=\"Year_Graduated\" id=\"Year_Graduated\" [(ngModel)]=\"user.Year_Graduated\" class=\"country_to_state country_select\"\n                    title=\"Year Graduated *\">\n                    <option value=\"\" disabled selected>Year</option>\n                    <option *ngFor=\"let year of yearsList\" [attr.value]=\"year.year\">{{year.year}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <label for=\"User_License_Nr\">License Number\n                  <!-- <abbr class=\"required\" title=\"required\">*</abbr> -->\n                  </label>\n                  <input type=\"text\" class=\"input-text\" [(ngModel)]=\"user.License_Nr\" placeholder value name=\"License_Nr\" id=\"User_License_Nr\">\n                </div>\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Years_in_Practice\">Years in practice\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"text\" class=\"input-text\" [(ngModel)]=\"user.Years_in_Practice\" placeholder value name=\"Years_in_Practice\" id=\"User_Years_in_Practice\">\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Contact_Person\">Contact person\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"text\" class=\"input-text\" [(ngModel)]=\"user.Contact_Person\" placeholder value name=\"Contact_Person\" id=\"User_Contact_Person\"\n                    #Contact_Person='ngModel' required>\n                  <div *ngIf=\"Contact_Person.errors && (Contact_Person.dirty || Contact_Person.touched)\" class=\"error\">\n                    <div [hidden]=\"!Contact_Person.errors.required\">This field is required</div>\n                  </div>\n                </div>\n                <div class=\"col-lg-6\">\n                  <label for=\"User_Contact_Phone_Nr\">Contact phone number\n                  <abbr class=\"required\" title=\"required\">*</abbr>\n                  </label>\n                  <input type=\"number\" class=\"input-text\" [(ngModel)]=\"user.Contact_Phone_Nr\" placeholder value name=\"Contact_Phone_Nr\" id=\"User_Contact_Phone_Nr\"\n                    #Contact_Phone_Nr='ngModel' pattern=\"[0-9]{10}\" required>\n                  <div *ngIf=\"Contact_Phone_Nr.errors && (Contact_Phone_Nr.dirty || Contact_Phone_Nr.touched)\" class=\"error\">\n                    <div [hidden]=\"!Contact_Phone_Nr.errors.required\">This field is required</div>\n                    <div [hidden]=\"!Contact_Phone_Nr.errors.pattern\">Enter valid mobile number</div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"container-fluid\">\n                <div class=\"row\">\n                  <a class=\"btn btn-inv btn-md btn-stroke pull-left\" (click)=\"cancelWorkUpdate()\"><span>Cancel</span></a>\n                  <button class=\"btn btn-md btn-dark pull-right\" [disabled]=\"!updateWorkForm.form.valid\" (click)=\"updateWorkData()\"><span>Update  Info</span></button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    \n  </div>\n</section>\n<div>\n\n</div>\n\n<!-- add_num  + address\n      location +neighborhood \n      city : city\n      state : state\n      zip : zip\n      country : country\n-->"

/***/ }),

/***/ "../../../../../src/app/employer/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(jsonLoaderService, userService, notificationsService) {
        var _this = this;
        this.jsonLoaderService = jsonLoaderService;
        this.userService = userService;
        this.notificationsService = notificationsService;
        this.isUserDataEdit = false;
        this.isWorkDataEdit = false;
        this.alertOptions = {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: false,
            clickToClose: false,
            maxLength: 50
        };
        this.newImageUploaded = false;
        this.options = { types: ['address'], componentRestrictions: { country: 'US' } };
        this.specialityList = [
            { "name": "General Dentistry" },
            { "name": "Endodontist" },
            { "name": "Orthodontist" },
            { "name": "Oral Surgeon" },
            { "name": "Pedodontist" },
            { "name": "Periodontist" },
        ];
        this.user = {
            Firstname: "",
            Lastname: "",
            Email_Address: "",
            Address_street: "",
            Address_Unit: "",
            City: "",
            State: "",
            Zip_Code: undefined,
            Practice_Name: "",
            Speciality: "",
            Practice_Phone: undefined,
            Nr_of_Operations: undefined,
            Nr_of_Staff: undefined,
            Languages: "",
            Dental_School: "",
            Year_Graduated: undefined,
            License_Nr: "",
            Years_in_Practice: undefined,
            Contact_Person: "",
            Contact_Phone_Nr: undefined,
            image: ""
        };
        this.subscription = userService.currentUser.subscribe(function (user) {
            _this.isUserDataEdit = user.personalInfo;
            _this.isWorkDataEdit = user.workInfo;
            _this.currentUser = user;
            _this.initUserData(user);
        });
    }
    ProfileComponent.prototype.getAddress = function (event) {
        this.geoLocation = this.shuffleGoogleMapsAddress(event);
        var streetNumber = (this.geoLocation.addr_num) ? this.geoLocation.addr_num : '';
        var streetName = (this.geoLocation.addr) ? this.geoLocation.addr : '';
        var location = (this.geoLocation.location) ? this.geoLocation.location : '';
        var neighborhood = (this.geoLocation.neighborhood) ? this.geoLocation.neighborhood : '';
        var city = (this.geoLocation.city) ? this.geoLocation.city : '';
        var state = (this.geoLocation.state) ? this.geoLocation.state : '';
        var zip = (this.geoLocation.zip) ? this.geoLocation.zip : '';
        this.user.Address_street = streetNumber + ', ' + streetName;
        this.user.Address_Unit = location + ', ' + neighborhood;
        this.user.City = this.geoLocation.city;
        this.user.State = this.geoLocation.state;
        this.user.Zip_Code = this.geoLocation.zip;
        this.user.locationLat = this.geoLocation.lat;
        this.user.locationLng = this.geoLocation.lng;
    };
    ProfileComponent.prototype.initUserData = function (user) {
        var _this = this;
        this.userService.getData(user.Email_Address).subscribe(function (res) {
            console.log(res);
            _this.user = res.data;
        }, function (err) {
        });
    };
    ProfileComponent.prototype.editUserData = function () {
        this.isUserDataEdit = !this.isUserDataEdit;
    };
    ProfileComponent.prototype.cancelUpdate = function () {
        this.isUserDataEdit = !this.isUserDataEdit;
    };
    ProfileComponent.prototype.updateUserData = function () {
        var _this = this;
        this.userService.updatePersonal(this.user).subscribe(function (res) {
            console.log(res);
            _this.notificationsService.success('Success', res.message, _this.alertOptions);
            _this.isUserDataEdit = !_this.isUserDataEdit;
        }, function (err) {
            console.log(err);
            _this.notificationsService.error(err.title, err.error.message, _this.alertOptions);
        });
    };
    ProfileComponent.prototype.editWorkData = function () {
        this.isWorkDataEdit = !this.isWorkDataEdit;
    };
    ProfileComponent.prototype.cancelWorkUpdate = function () {
        this.isWorkDataEdit = !this.isWorkDataEdit;
    };
    ProfileComponent.prototype.updateWorkData = function (user) {
        var _this = this;
        this.userService.updateWork(this.user).subscribe(function (res) {
            console.log(res);
            _this.notificationsService.success('Success', res.message, _this.alertOptions);
            _this.isWorkDataEdit = !_this.isWorkDataEdit;
        }, function (err) {
            console.log(err);
            _this.notificationsService.error(err.title, err.error.message, _this.alertOptions);
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jsonLoaderService.getStates()
            .subscribe(function (data) {
            _this.statesList = data;
        }, function (error) {
            console.log(error);
        });
        this.jsonLoaderService.getLanguages()
            .subscribe(function (data) {
            _this.languagesList = data;
        }, function (error) {
            console.log(error);
        });
        this.jsonLoaderService.getYears()
            .subscribe(function (data) {
            _this.yearsList = data;
        }, function (error) {
            console.log(error);
        });
    };
    ProfileComponent.prototype.changeListener = function ($event) {
        this.newImageUploaded = true;
        this.readThis($event.target);
    };
    ProfileComponent.prototype.readThis = function (inputValue) {
        var _this = this;
        var file = inputValue.files[0];
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.user.image = myReader.result;
        };
        myReader.readAsDataURL(file);
    };
    ProfileComponent.prototype.shuffleGoogleMapsAddress = function (selectedData) {
        var geo_lat = selectedData.geometry.location.lat();
        var geo_lng = selectedData.geometry.location.lng();
        if (selectedData.name) {
            for (var i = 0; i < selectedData.address_components.length; i++) {
                if (selectedData.address_components[i].types[0] == "country") {
                    var geo_country = selectedData.address_components[i].long_name;
                }
                if (selectedData.address_components[i].types[0] == "street_number") {
                    var geo_addr_num = selectedData.address_components[i].long_name;
                }
                if (selectedData.address_components[i].types[0] == "route") {
                    var geo_addr = selectedData.address_components[i].long_name;
                }
                if (selectedData.address_components[i].types[0] == "administrative_area_level_1") {
                    var geo_state = selectedData.address_components[i].short_name;
                }
                if (selectedData.address_components[i].types[0] == "neighborhood") {
                    var geo_neigh = selectedData.address_components[i].short_name;
                }
                if (selectedData.address_components[i].types[0] == "sublocality_level_2") {
                    var geo_loc2 = selectedData.address_components[i].short_name;
                }
                if (selectedData.address_components[i].types[0] == "sublocality_level_1") {
                    var geo_loc1 = selectedData.address_components[i].short_name;
                }
                if (selectedData.address_components[i].types[0] == "locality") {
                    var geo_city = selectedData.address_components[i].long_name;
                }
                if (selectedData.address_components[i].types[0] == "administrative_area_level_2") {
                    var geo_city_2 = selectedData.address_components[i].long_name;
                }
                if (selectedData.address_components[i].types[0] == "postal_code") {
                    var geo_zip = selectedData.address_components[i].long_name;
                }
            }
            return {
                lat: geo_lat,
                lng: geo_lng,
                neighborhood: geo_neigh,
                location: geo_loc2,
                country: geo_country,
                addr_num: geo_addr_num,
                addr: geo_addr,
                state: geo_state,
                city: geo_city,
                city2: geo_city_2,
                zip: geo_zip
            };
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/employer/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__["a" /* JsonLoaderService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_json_loader_service__["a" /* JsonLoaderService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/components/transaction-history/transaction-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".transaction_table thead{\r\n    background-color: #333;\r\n    padding:10px 25px 10px 25px;\r\n}\r\n\r\n.transaction_table thead th{\r\n    padding:15px 25px;\r\n    color:#FFF;\r\n}\r\n\r\n.transaction_table tbody tr td{\r\n    padding:15px 25px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/components/transaction-history/transaction-history.component.html":
/***/ (function(module, exports) {

module.exports = "\t\t\t<!-- Cart -->\r\n\t\t\t<section class=\"section-wrap shopping-cart\">\r\n          <div class=\"container relative\">\r\n            <div class=\"row\">\r\n                <h2 class=\"heading relative uppercase bottom-line full-grey mb-30\">Transaction History</h2>        \r\n              <div class=\"col-md-12\">\r\n                <div class=\"table-wrap mb-30\">\r\n                  <table class=\"shop_table transaction_table cart table\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th class=\"product-name\" >Transaction Id</th>\r\n                        <th class=\"product-price\">Position</th>\r\n                        <th class=\"product-price\">Amount</th>\r\n                        <th class=\"product-quantity\">Transcation Status</th>\r\n                        <th class=\"product-subtotal\" colspan=\"2\">Date</th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr class=\"cart_item\" *ngFor=\"let transaction of transactions\">\r\n                        <td class=\"product-name\">\r\n                          <a >{{transaction._id}}</a>\r\n                        </td>\r\n                        <td class=\"product-price\">\r\n                          <span class=\"amount\">{{transaction.Position_id}}</span>\r\n                        </td>\r\n                        <td class=\"product-quantity\">\r\n                          <span class=\"amount\">{{transaction.Amount}}</span>\r\n                        </td>\r\n                        <td class=\"product-quantity\">\r\n                          <span class=\"amount\">Success</span>\r\n                        </td>\r\n                        <td class=\"product-subtotal\">\r\n                          <span class=\"amount\">{{transaction.Date_Submitted | date:'dd/MM/yy'}}</span>\r\n                        </td>\r\n                      </tr>\r\n                      <!-- <tr class=\"cart_item\">\r\n                          <td class=\"product-name\">\r\n                            <a >2324324</a>\r\n                          </td>\r\n                          <td class=\"product-price\">\r\n                            <span class=\"position\">Registered Dental Assistant</span>\r\n                          </td>\r\n                          <td class=\"product-quantity\">\r\n                            <span class=\"amount\">$15</span>\r\n                          </td>\r\n                          <td class=\"product-quantity\">\r\n                            <span class=\"status\">In Process</span>\r\n                          </td>\r\n                          <td class=\"product-subtotal\">\r\n                            <span class=\"date\">25/06/2017</span>\r\n                          </td>\r\n                        </tr> -->\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n  \r\n\r\n  \r\n              </div>\r\n              <!-- end col -->\r\n            </div>\r\n            <!-- end row -->\r\n  \r\n\r\n            <!-- end row -->\r\n  \r\n  \r\n          </div>\r\n          <!-- end container -->\r\n        </section>\r\n        <!-- end cart -->"

/***/ }),

/***/ "../../../../../src/app/employer/components/transaction-history/transaction-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_employer_service__ = __webpack_require__("../../../../../src/app/shared/services/employer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionHistoryComponent = (function () {
    function TransactionHistoryComponent(employerService) {
        var _this = this;
        this.employerService = employerService;
        this.employerService.getTransactions().subscribe(function (res) {
            _this.transactions = res.data;
            console.log(res.data);
        });
    }
    TransactionHistoryComponent.prototype.ngOnInit = function () {
    };
    return TransactionHistoryComponent;
}());
TransactionHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-transaction-history',
        template: __webpack_require__("../../../../../src/app/employer/components/transaction-history/transaction-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/components/transaction-history/transaction-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_employer_service__["a" /* EmployerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_employer_service__["a" /* EmployerService */]) === "function" && _a || Object])
], TransactionHistoryComponent);

var _a;
//# sourceMappingURL=transaction-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/employer-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employer_component__ = __webpack_require__("../../../../../src/app/employer/employer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/employer/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_job_seeker_search_job_seeker_search_component__ = __webpack_require__("../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_transaction_history_transaction_history_component__ = __webpack_require__("../../../../../src/app/employer/components/transaction-history/transaction-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_prior_job_offer_prior_job_offer_component__ = __webpack_require__("../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/employer/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/employer/components/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__employer_component__["a" /* EmployerComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__components_job_seeker_search_job_seeker_search_component__["a" /* JobSeekerSearchComponent */] },
            // {path:'profile', component:ViewProfileComponent},
            { path: 'transactionhistory', component: __WEBPACK_IMPORTED_MODULE_5__components_transaction_history_transaction_history_component__["a" /* TransactionHistoryComponent */] },
            { path: 'joboffers', component: __WEBPACK_IMPORTED_MODULE_6__components_prior_job_offer_prior_job_offer_component__["a" /* PriorJobOfferComponent */] },
            { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_7__components_payment_payment_component__["a" /* PaymentComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */] },
        ]
    }
];
var EmployerRoutingModule = (function () {
    function EmployerRoutingModule() {
    }
    return EmployerRoutingModule;
}());
EmployerRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"]]
    })
], EmployerRoutingModule);

//# sourceMappingURL=employer-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/employer/employer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/employer/employer.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/employer/employer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployerComponent = (function () {
    function EmployerComponent() {
    }
    EmployerComponent.prototype.ngOnInit = function () {
    };
    return EmployerComponent;
}());
EmployerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-employer',
        template: __webpack_require__("../../../../../src/app/employer/employer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/employer/employer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmployerComponent);

//# sourceMappingURL=employer.component.js.map

/***/ }),

/***/ "../../../../../src/app/employer/employer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployerModule", function() { return EmployerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_google_place_autocomplete__ = __webpack_require__("../../../../ng2-google-place-autocomplete/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employer_routing_module__ = __webpack_require__("../../../../../src/app/employer/employer-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employer_component__ = __webpack_require__("../../../../../src/app/employer/employer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/employer/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_job_seeker_search_job_seeker_search_component__ = __webpack_require__("../../../../../src/app/employer/components/job-seeker-search/job-seeker-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_transaction_history_transaction_history_component__ = __webpack_require__("../../../../../src/app/employer/components/transaction-history/transaction-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_prior_job_offer_prior_job_offer_component__ = __webpack_require__("../../../../../src/app/employer/components/prior-job-offer/prior-job-offer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_payment_payment_component__ = __webpack_require__("../../../../../src/app/employer/components/payment/payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/employer/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_services_json_loader_service__ = __webpack_require__("../../../../../src/app/shared/services/json-loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_services_employer_service__ = __webpack_require__("../../../../../src/app/shared/services/employer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_pipes_search_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/search.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var EmployerModule = (function () {
    function EmployerModule() {
    }
    return EmployerModule;
}());
EmployerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__employer_routing_module__["a" /* EmployerRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_google_place_autocomplete__["a" /* GooglePlaceModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__employer_component__["a" /* EmployerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_job_seeker_search_job_seeker_search_component__["a" /* JobSeekerSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_transaction_history_transaction_history_component__["a" /* TransactionHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_prior_job_offer_prior_job_offer_component__["a" /* PriorJobOfferComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_payment_payment_component__["a" /* PaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_pipes_search_pipe__["a" /* SearchPipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__shared_services_json_loader_service__["a" /* JsonLoaderService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_services_employer_service__["a" /* EmployerService */]
        ]
    })
], EmployerModule);

//# sourceMappingURL=employer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, args) {
        var source = [];
        if (!value)
            return value;
        if (args.Hours_Guarnteed != undefined) {
            value.filter(function (eachValue) {
                if (eachValue) {
                    if (eachValue.Hours_Guaranteed == args.Hours_Guarnteed) {
                        source.push(eachValue);
                    }
                }
            });
            return source;
        }
        else {
            return value;
        }
    };
    return SearchPipe;
}());
SearchPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'search', pure: false })
], SearchPipe);

//# sourceMappingURL=search.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/employer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_service__ = __webpack_require__("../../../../../src/app/shared/services/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployerService = (function () {
    function EmployerService(apiService) {
        this.apiService = apiService;
    }
    EmployerService.prototype.queryJobseekers = function (data) {
        var path = 'availability/query';
        return this.apiService.post(path, data)
            .map(function (data) {
            return data;
        });
    };
    EmployerService.prototype.makePayment = function (data) {
        var route = 'payments/pay';
        return this.apiService.post(route, data).map(function (res) {
            return res;
        });
    };
    EmployerService.prototype.getTransactions = function () {
        var route = 'payments/';
        return this.apiService.get(route).map(function (res) {
            return res;
        });
    };
    return EmployerService;
}());
EmployerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], EmployerService);

var _a;
//# sourceMappingURL=employer.service.js.map

/***/ })

});
//# sourceMappingURL=employer.module.chunk.js.map