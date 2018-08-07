(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["administration"],{

/***/ "./src/main/webapp/app/modules/administration/audits/audits.tsx":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/audits/audits.tsx ***!
  \**********************************************************************/
/*! exports provided: AuditsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditsPage", function() { return AuditsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/util/pagination.constants */ "./src/main/webapp/app/shared/util/pagination.constants.ts");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");









var previousMonth = function () {
    var now = new Date();
    var fromDate = now.getMonth() === 0
        ? new Date(now.getFullYear() - 1, 11, now.getDate())
        : new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    return fromDate.toISOString().slice(0, 10);
};
var today = function () {
    // Today + 1 day - needed if the current day must be included
    var day = new Date();
    day.setDate(day.getDate() + 1);
    var toDate = new Date(day.getFullYear(), day.getMonth(), day.getDate());
    return toDate.toISOString().slice(0, 10);
};
var AuditsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](AuditsPage, _super);
    function AuditsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["getSortState"])(_this.props.location, app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_7__["ITEMS_PER_PAGE"]), { fromDate: previousMonth(), toDate: today() });
        _this.onChangeFromDate = function (evt) {
            _this.setState({
                fromDate: evt.target.value
            }, function () { return _this.getAudits(); });
        };
        _this.onChangeToDate = function (evt) {
            _this.setState({
                toDate: evt.target.value
            }, function () { return _this.getAudits(); });
        };
        _this.sort = function (prop) { return function () {
            _this.setState({
                order: _this.state.order === 'asc' ? 'desc' : 'asc',
                sort: prop
            }, function () { return _this.transition(); });
        }; };
        _this.transition = function () {
            _this.getAudits();
            _this.props.history.push(_this.props.location.pathname + "?page=" + _this.state.activePage + "&sort=" + _this.state.sort + "," + _this.state.order);
        };
        _this.handlePagination = function (activePage) { return _this.setState({ activePage: activePage }, function () { return _this.transition(); }); };
        _this.getAudits = function () {
            var _a = _this.state, activePage = _a.activePage, itemsPerPage = _a.itemsPerPage, sort = _a.sort, order = _a.order, fromDate = _a.fromDate, toDate = _a.toDate;
            _this.props.getAudits(activePage - 1, itemsPerPage, sort + "," + order, fromDate, toDate);
        };
        return _this;
    }
    AuditsPage.prototype.componentDidMount = function () {
        this.getAudits();
    };
    AuditsPage.prototype.render = function () {
        var _a = this.props, audits = _a.audits, totalItems = _a.totalItems;
        var _b = this.state, fromDate = _b.fromDate, toDate = _b.toDate;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "audits-page-heading" }, "Audits"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "from"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], { type: "date", value: fromDate, onChange: this.onChangeFromDate, name: "fromDate", id: "fromDate" }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "to"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], { type: "date", value: toDate, onChange: this.onChangeToDate, name: "toDate", id: "toDate" }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], { striped: true, responsive: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { onClick: this.sort('auditEventDate') },
                            "Date",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { onClick: this.sort('principal') },
                            "User",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { onClick: this.sort('auditEventType') },
                            "State",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Extra data"))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, audits.map(function (audit, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: "audit-" + i },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: audit.timestamp, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TIMESTAMP_FORMAT"] })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, audit.principal),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, audit.type),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        audit.data ? audit.data.message : null,
                        audit.data ? audit.data.remoteAddress : null))); }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["JhiPagination"], { items: Object(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["getPaginationItemsNumber"])(totalItems, this.state.itemsPerPage), activePage: this.state.activePage, onSelect: this.handlePagination, maxButtons: 5 }))));
    };
    return AuditsPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    audits: storeState.administration.audits,
    totalItems: storeState.administration.totalItems
}); };
var mapDispatchToProps = { getAudits: _administration_reducer__WEBPACK_IMPORTED_MODULE_8__["getAudits"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(AuditsPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/audits/audits.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/audits/audits.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx":
/*!************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/configuration/configuration.tsx ***!
  \************************************************************************************/
/*! exports provided: ConfigurationPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPage", function() { return ConfigurationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");





var ConfigurationPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConfigurationPage, _super);
    function ConfigurationPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            filter: '',
            reversePrefix: false,
            reverseProperties: false
        };
        _this.setFilter = function (evt) {
            _this.setState({
                filter: evt.target.value
            });
        };
        _this.envFilterFn = function (configProp) { return configProp.toUpperCase().includes(_this.state.filter.toUpperCase()); };
        _this.propsFilterFn = function (configProp) { return configProp.prefix.toUpperCase().includes(_this.state.filter.toUpperCase()); };
        _this.reversePrefix = function () {
            _this.setState({
                reversePrefix: !_this.state.reversePrefix
            });
        };
        _this.reverseProperties = function () {
            _this.setState({
                reverseProperties: !_this.state.reverseProperties
            });
        };
        _this.getContextList = function (contexts) {
            return Object.values(contexts)
                .map(function (v) { return v.beans; })
                .reduce(function (acc, e) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, acc, e)); });
        };
        return _this;
    }
    ConfigurationPage.prototype.componentDidMount = function () {
        this.props.getConfigurations();
        this.props.getEnv();
    };
    ConfigurationPage.prototype.render = function () {
        var _this = this;
        var configuration = this.props.configuration;
        var filter = this.state.filter;
        var configProps = configuration && configuration.configProps ? configuration.configProps : {};
        var env = configuration && configuration.env ? configuration.env : {};
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "configuration-page-heading" }, "Configuration"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Filter"),
            " ",
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], { type: "search", value: filter, onChange: this.setFilter, name: "search", id: "search" }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Spring configuration"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], { className: "table table-striped table-bordered table-responsive d-table" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { onClick: this.reversePrefix }, "Prefix"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { onClick: this.reverseProperties }, "Properties"))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, configProps.contexts
                    ? Object.values(this.getContextList(configProps.contexts))
                        .filter(this.propsFilterFn)
                        .map(function (property, propIndex) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: propIndex },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, property['prefix']),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, Object.keys(property['properties']).map(function (propKey, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], { key: index },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "4" }, propKey),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "8" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], { className: "float-right badge-secondary break" }, JSON.stringify(property['properties'][propKey]))))); })))); })
                    : null)),
            env.propertySources
                ? env.propertySources.map(function (envKey, envIndex) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: envIndex },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, envKey.name)),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], { className: "table table-sm table-striped table-bordered table-responsive d-table" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: envIndex },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "w-40" }, "Property"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "w-60" }, "Value"))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, Object.keys(envKey.properties)
                            .filter(_this.envFilterFn)
                            .map(function (propKey, propIndex) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: propIndex },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "break" }, propKey),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "break" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "float-right badge badge-secondary break" }, envKey.properties[propKey].value)))); }))))); })
                : null));
    };
    return ConfigurationPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var administration = _a.administration;
    return ({
        configuration: administration.configuration,
        isFetching: administration.loading
    });
};
var mapDispatchToProps = { getConfigurations: _administration_reducer__WEBPACK_IMPORTED_MODULE_4__["getConfigurations"], getEnv: _administration_reducer__WEBPACK_IMPORTED_MODULE_4__["getEnv"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ConfigurationPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/configuration/configuration.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/configuration/configuration.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/docs/docs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/docs/docs.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DocsPage = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", { src: "../swagger-ui/index.html", width: "100%", height: "800", title: "Swagger UI", seamless: true, style: { border: 'none' } }))); };
/* harmony default export */ __webpack_exports__["default"] = (DocsPage);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/docs/docs.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/docs/docs.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health-modal.tsx":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health-modal.tsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");


var formatDiskSpaceOutput = function (rawValue) {
    // Should display storage space in an human readable unit
    var val = rawValue / 1073741824;
    if (val > 1) {
        // Value
        return val.toFixed(2) + ' GB';
    }
    else {
        return (rawValue / 1048576).toFixed(2) + ' MB';
    }
};
var HealthModal = function (_a) {
    var handleClose = _a.handleClose, healthObject = _a.healthObject, showModal = _a.showModal;
    var data = healthObject.details || {};
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], { isOpen: showModal, modalTransition: { timeout: 20 }, backdropTransition: { timeout: 10 }, toggle: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], { toggle: handleClose }, healthObject.name),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], { bordered: true },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Name"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "Value"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, Object.keys(data).map(function (key, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", { key: index },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, key),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, healthObject.name === 'diskSpace' ? formatDiskSpaceOutput(data[key]) : JSON.stringify(data[key])))); })))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalFooter"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], { color: "primary", onClick: handleClose }, "Close"))));
};
/* harmony default export */ __webpack_exports__["default"] = (HealthModal);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/health/health-modal.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/health/health-modal.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/health/health.tsx":
/*!**********************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/health/health.tsx ***!
  \**********************************************************************/
/*! exports provided: HealthPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthPage", function() { return HealthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var _health_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-modal */ "./src/main/webapp/app/modules/administration/health/health-modal.tsx");







var HealthPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](HealthPage, _super);
    function HealthPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            healthObject: {},
            showModal: false
        };
        _this.getSystemHealth = function () {
            if (!_this.props.isFetching) {
                _this.props.systemHealth();
            }
        };
        _this.getSystemHealthInfo = function (name, healthObject) { return function () {
            _this.setState({
                showModal: true,
                healthObject: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, healthObject, { name: name })
            });
        }; };
        _this.handleClose = function () {
            _this.setState({
                showModal: false
            });
        };
        _this.renderModal = function () {
            var healthObject = _this.state.healthObject;
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_health_modal__WEBPACK_IMPORTED_MODULE_6__["default"], { healthObject: healthObject, handleClose: _this.handleClose, showModal: _this.state.showModal });
        };
        return _this;
    }
    HealthPage.prototype.componentDidMount = function () {
        this.props.systemHealth();
    };
    HealthPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, health = _a.health, isFetching = _a.isFetching;
        var data = (health || {}).details || {};
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "health-page-heading" }, "Health Checks"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: this.getSystemHealth, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { icon: "sync" }),
                    "\u00A0 Refresh")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], { bordered: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Service Name"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Status"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Details"))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, Object.keys(data).map(function (configPropKey, configPropIndex) {
                            return configPropKey !== 'status' ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: configPropIndex },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, configPropKey),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], { color: data[configPropKey].status !== 'UP' ? 'danger' : 'success' }, data[configPropKey].status)),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, data[configPropKey].details ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { onClick: _this.getSystemHealthInfo(configPropKey, data[configPropKey]) },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { icon: "eye" }))) : null))) : null;
                        }))))),
            this.renderModal()));
    };
    return HealthPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    health: storeState.administration.health,
    isFetching: storeState.administration.loading
}); };
var mapDispatchToProps = { systemHealth: _administration_reducer__WEBPACK_IMPORTED_MODULE_5__["systemHealth"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(HealthPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/health/health.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/health/health.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/index.tsx":
/*!**************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/index.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/index.tsx");
/* harmony import */ var _logs_logs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logs/logs */ "./src/main/webapp/app/modules/administration/logs/logs.tsx");
/* harmony import */ var _health_health__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health/health */ "./src/main/webapp/app/modules/administration/health/health.tsx");
/* harmony import */ var _metrics_metrics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metrics/metrics */ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx");
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration/configuration */ "./src/main/webapp/app/modules/administration/configuration/configuration.tsx");
/* harmony import */ var _audits_audits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audits/audits */ "./src/main/webapp/app/modules/administration/audits/audits.tsx");
/* harmony import */ var _docs_docs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./docs/docs */ "./src/main/webapp/app/modules/administration/docs/docs.tsx");









var Routes = function (_a) {
    var match = _a.match;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: match.url + "/user-management", component: _user_management__WEBPACK_IMPORTED_MODULE_2__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/health", component: _health_health__WEBPACK_IMPORTED_MODULE_4__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/metrics", component: _metrics_metrics__WEBPACK_IMPORTED_MODULE_5__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/docs", component: _docs_docs__WEBPACK_IMPORTED_MODULE_8__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/configuration", component: _configuration_configuration__WEBPACK_IMPORTED_MODULE_6__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/audits", component: _audits_audits__WEBPACK_IMPORTED_MODULE_7__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { exact: true, path: match.url + "/logs", component: _logs_logs__WEBPACK_IMPORTED_MODULE_3__["default"] })));
};
/* harmony default export */ __webpack_exports__["default"] = (Routes);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/index.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/logs/logs.tsx":
/*!******************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/logs/logs.tsx ***!
  \******************************************************************/
/*! exports provided: LogsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogsPage", function() { return LogsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");




var LogsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](LogsPage, _super);
    function LogsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            filter: ''
        };
        _this.getLogs = function () {
            if (!_this.props.isFetching) {
                _this.props.getLoggers();
            }
        };
        _this.changeLevel = function (loggerName, level) { return function () {
            _this.props.changeLogLevel(loggerName, level);
        }; };
        _this.setFilter = function (evt) {
            _this.setState({
                filter: evt.target.value
            });
        };
        _this.getClassName = function (level, check, className) { return (level === check ? "btn btn-sm btn-" + className : 'btn btn-sm btn-light'); };
        _this.filterFn = function (l) { return l.name.toUpperCase().includes(_this.state.filter.toUpperCase()); };
        return _this;
    }
    LogsPage.prototype.componentDidMount = function () {
        this.props.getLoggers();
    };
    LogsPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, logs = _a.logs, isFetching = _a.isFetching;
        var filter = this.state.filter;
        var loggers = logs ? logs.loggers : [];
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "logs-page-heading" }, "Logs"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                "There are ",
                loggers.length.toString(),
                " loggers."),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Filter"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", value: filter, onChange: this.setFilter, className: "form-control", disabled: isFetching }),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", { className: "table table-sm table-striped table-bordered" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { title: "click to order" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Name")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Level")))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, loggers.filter(this.filterFn).map(function (logger, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: "log-row-" + i },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", null, logger.name)),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'TRACE'), className: _this.getClassName(logger.level, 'TRACE', 'primary') }, "TRACE"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'DEBUG'), className: _this.getClassName(logger.level, 'DEBUG', 'success') }, "DEBUG"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'INFO'), className: _this.getClassName(logger.level, 'INFO', 'info') }, "INFO"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'WARN'), className: _this.getClassName(logger.level, 'WARN', 'warning') }, "WARN"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'ERROR'), className: _this.getClassName(logger.level, 'ERROR', 'danger') }, "ERROR"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { disabled: isFetching, onClick: _this.changeLevel(logger.name, 'OFF'), className: _this.getClassName(logger.level, 'OFF', 'secondary') }, "OFF")))); })))));
    };
    return LogsPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var administration = _a.administration;
    return ({
        logs: administration.logs,
        isFetching: administration.loading
    });
};
var mapDispatchToProps = { getLoggers: _administration_reducer__WEBPACK_IMPORTED_MODULE_3__["getLoggers"], changeLogLevel: _administration_reducer__WEBPACK_IMPORTED_MODULE_3__["changeLogLevel"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(LogsPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/logs/logs.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/logs/logs.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/metrics/metrics-modal.tsx":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/metrics/metrics-modal.tsx ***!
  \******************************************************************************/
/*! exports provided: MetricsModal, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsModal", function() { return MetricsModal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _thread_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thread-item */ "./src/main/webapp/app/modules/administration/metrics/thread-item.tsx");




var MetricsModal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MetricsModal, _super);
    function MetricsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            badgeFilter: '',
            searchFilter: ''
        };
        _this.computeFilteredList = function () {
            var _a = _this.state, badgeFilter = _a.badgeFilter, searchFilter = _a.searchFilter;
            var filteredList = _this.props.threadDump.threads;
            if (badgeFilter !== '') {
                filteredList = filteredList.filter(function (t) { return t.threadState === badgeFilter; });
            }
            if (searchFilter !== '') {
                filteredList = filteredList.filter(function (t) { return t.lockName && t.lockName.toLowerCase().includes(searchFilter.toLowerCase()); });
            }
            return filteredList;
        };
        _this.computeCounters = function () {
            var threadDumpAll = 0;
            var threadDumpRunnable = 0;
            var threadDumpWaiting = 0;
            var threadDumpTimedWaiting = 0;
            var threadDumpBlocked = 0;
            _this.props.threadDump.threads.forEach(function (t) {
                switch (t.threadState) {
                    case 'RUNNABLE':
                        threadDumpRunnable++;
                        break;
                    case 'WAITING':
                        threadDumpWaiting++;
                        break;
                    case 'TIMED_WAITING':
                        threadDumpTimedWaiting++;
                        break;
                    case 'BLOCKED':
                        threadDumpBlocked++;
                        break;
                    default:
                        break;
                }
            });
            threadDumpAll = threadDumpRunnable + threadDumpWaiting + threadDumpTimedWaiting + threadDumpBlocked;
            return { threadDumpAll: threadDumpAll, threadDumpRunnable: threadDumpRunnable, threadDumpWaiting: threadDumpWaiting, threadDumpTimedWaiting: threadDumpTimedWaiting, threadDumpBlocked: threadDumpBlocked };
        };
        _this.getBadgeClass = function (threadState) {
            if (threadState === 'RUNNABLE') {
                return 'badge-success';
            }
            else if (threadState === 'WAITING') {
                return 'badge-info';
            }
            else if (threadState === 'TIMED_WAITING') {
                return 'badge-warning';
            }
            else if (threadState === 'BLOCKED') {
                return 'badge-danger';
            }
        };
        _this.updateBadgeFilter = function (badge) { return function () { return _this.setState({ badgeFilter: badge }); }; };
        _this.updateSearchFilter = function (event) { return _this.setState({ searchFilter: event.target.value }); };
        return _this;
    }
    MetricsModal.prototype.render = function () {
        var _this = this;
        var _a = this.props, showModal = _a.showModal, handleClose = _a.handleClose, threadDump = _a.threadDump;
        var counters = {};
        var filteredList = null;
        if (threadDump && threadDump.threads) {
            counters = this.computeCounters();
            filteredList = this.computeFilteredList();
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Modal"], { isOpen: showModal, toggle: handleClose, className: "modal-lg" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalHeader"], { toggle: handleClose }, "Threads dump"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalBody"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { color: "primary", className: "hand", onClick: this.updateBadgeFilter('') },
                    "All\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { pill: true }, counters.threadDumpAll || 0)),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { color: "success", className: "hand", onClick: this.updateBadgeFilter('RUNNABLE') },
                    "Runnable\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { pill: true }, counters.threadDumpRunnable || 0)),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { color: "info", className: "hand", onClick: this.updateBadgeFilter('WAITING') },
                    "Waiting\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { pill: true }, counters.threadDumpWaiting || 0)),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { color: "warning", className: "hand", onClick: this.updateBadgeFilter('TIMED_WAITING') },
                    "Timed Waiting\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { pill: true }, counters.threadDumpTimedWaiting || 0)),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { color: "danger", className: "hand", onClick: this.updateBadgeFilter('BLOCKED') },
                    "Blocked\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Badge"], { pill: true }, counters.threadDumpBlocked || 0)),
                "\u00A0",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "mt-2" }, "\u00A0"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Input"], { type: "text", className: "form-control", placeholder: "Filter by Lock Name...", onChange: this.updateSearchFilter }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { style: { padding: '10px' } }, filteredList
                    ? filteredList.map(function (threadDumpInfo, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: "dump-" + i },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", null,
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: 'badge ' + _this.getBadgeClass(threadDumpInfo.threadState) }, threadDumpInfo.threadState),
                            "\u00A0",
                            threadDumpInfo.threadName,
                            " (ID ",
                            threadDumpInfo.threadId,
                            ")\u00A0"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_thread_item__WEBPACK_IMPORTED_MODULE_3__["default"], { threadDumpInfo: threadDumpInfo }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], { responsive: true },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Blocked Time"),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Blocked Count"),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Waited Time"),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Waited Count"),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Lock Name"))),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: threadDumpInfo.lockName },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, threadDumpInfo.blockedTime),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, threadDumpInfo.blockedCount),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, threadDumpInfo.waitedTime),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, threadDumpInfo.waitedCount),
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "thread-dump-modal-lock", title: threadDumpInfo.lockName },
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null, threadDumpInfo.lockName)))))))); })
                    : null)),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ModalFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { color: "primary", onClick: handleClose }, "Close"))));
    };
    return MetricsModal;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

/* harmony default export */ __webpack_exports__["default"] = (MetricsModal);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/metrics-modal.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/metrics-modal.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/metrics/metrics.tsx":
/*!************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/metrics/metrics.tsx ***!
  \************************************************************************/
/*! exports provided: MetricsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsPage", function() { return MetricsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var _administration_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../administration.reducer */ "./src/main/webapp/app/modules/administration/administration.reducer.ts");
/* harmony import */ var _metrics_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metrics-modal */ "./src/main/webapp/app/modules/administration/metrics/metrics-modal.tsx");









var MetricsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MetricsPage, _super);
    function MetricsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showModal: false
        };
        _this.getMetrics = function () {
            if (!_this.props.isFetching) {
                _this.props.systemMetrics();
            }
        };
        _this.getThreadDump = function () {
            _this.props.systemThreadDump();
            _this.setState({
                showModal: true
            });
        };
        _this.handleClose = function () {
            _this.setState({
                showModal: false
            });
        };
        _this.filterNaN = function (input) { return (isNaN(input) ? 0 : input); };
        _this.getStats = function (metrics) {
            var stat = {
                servicesStats: {},
                cachesStats: {}
            };
            if (!_this.props.isFetching && metrics && metrics.timers) {
                Object.keys(metrics.timers).forEach(function (key, indexNm) {
                    if (key.indexOf('web.rest') !== -1 || key.indexOf('service') !== -1) {
                        stat.servicesStats[key] = metrics.timers[key];
                    }
                    if (key.indexOf('net.sf.ehcache.Cache') !== -1) {
                        // remove gets or puts
                        var index = key.lastIndexOf('.');
                        var newKey = key.substr(0, index);
                        // Keep the name of the domain
                        stat.cachesStats[newKey] = {
                            name: newKey,
                            value: metrics.timers[key]
                        };
                    }
                });
            }
            return stat;
        };
        _this.gaugeRow = function (metrics, label, key) {
            return metrics.gauges[key] ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "9" }, label),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "3", className: "text-right" }, metrics.gauges[key].value))) : null;
        };
        _this.renderModal = function () { return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_metrics_modal__WEBPACK_IMPORTED_MODULE_8__["default"], { handleClose: _this.handleClose, showModal: _this.state.showModal, threadDump: _this.props.threadDump }); };
        _this.renderGauges = function (metrics) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { sm: "12" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "JVM Metrics"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "4" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Memory"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Total Memory"),
                            " (",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.total.used'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M /",
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.total.max'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M)"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, value: metrics.gauges['jvm.memory.total.used'].value, min: "0", max: metrics.gauges['jvm.memory.total.max'].value, color: "success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.memory.total.used'].value * 100) / metrics.gauges['jvm.memory.total.max'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Heap Memory"),
                            " (",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.heap.used'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M /",
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.heap.max'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M)"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", max: metrics.gauges['jvm.memory.heap.max'].value, value: metrics.gauges['jvm.memory.heap.used'].value, color: "success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.memory.heap.used'].value * 100) / metrics.gauges['jvm.memory.heap.max'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Non-Heap Memory"),
                            " (",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.non-heap.used'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M /",
                            ' ',
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.gauges['jvm.memory.non-heap.committed'].value / 1048576, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                            "M)"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", max: metrics.gauges['jvm.memory.non-heap.committed'].value, value: metrics.gauges['jvm.memory.non-heap.used'].value, color: "success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.memory.non-heap.used'].value * 100) / metrics.gauges['jvm.memory.non-heap.committed'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "4" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Threads"),
                        " (Total: ",
                        metrics.gauges['jvm.threads.count'].value,
                        ")",
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { color: "link", className: "hand", onClick: _this.getThreadDump },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { icon: "eye" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Runnable"),
                            " ",
                            metrics.gauges['jvm.threads.runnable.count'].value),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", value: metrics.gauges['jvm.threads.runnable.count'].value, max: metrics.gauges['jvm.threads.count'].value, color: "success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.threads.runnable.count'].value * 100) / metrics.gauges['jvm.threads.count'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Timed Waiting"),
                            " (",
                            metrics.gauges['jvm.threads.timed_waiting.count'].value,
                            ")"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", value: metrics.gauges['jvm.threads.timed_waiting.count'].value, max: metrics.gauges['jvm.threads.count'].value, color: "warning" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.threads.timed_waiting.count'].value * 100) / metrics.gauges['jvm.threads.count'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Waiting"),
                            " (",
                            metrics.gauges['jvm.threads.waiting.count'].value,
                            ")"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", value: metrics.gauges['jvm.threads.waiting.count'].value, max: metrics.gauges['jvm.threads.count'].value, color: "warning" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.threads.waiting.count'].value * 100) / metrics.gauges['jvm.threads.count'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Blocked"),
                            " (",
                            metrics.gauges['jvm.threads.blocked.count'].value,
                            ")"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { animated: true, min: "0", value: metrics.gauges['jvm.threads.blocked.count'].value, max: metrics.gauges['jvm.threads.count'].value, color: "success" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['jvm.threads.blocked.count'].value * 100) / metrics.gauges['jvm.threads.count'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                "%"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { md: "4" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Garbage collections"),
                        _this.gaugeRow(metrics, 'Mark Sweep count', 'jvm.garbage.PS-MarkSweep.count'),
                        _this.gaugeRow(metrics, 'Mark Sweep time', 'jvm.garbage.PS-MarkSweep.time'),
                        _this.gaugeRow(metrics, 'Scavenge count', 'jvm.garbage.PS-Scavenge.count'),
                        _this.gaugeRow(metrics, 'Scavenge time', 'jvm.garbage.PS-Scavenge.time')))))); };
        return _this;
    }
    MetricsPage.prototype.componentDidMount = function () {
        this.props.systemMetrics();
    };
    MetricsPage.prototype.render = function () {
        var _a = this.props, metrics = _a.metrics, isFetching = _a.isFetching;
        var data = metrics || {};
        var _b = this.getStats(data), servicesStats = _b.servicesStats, cachesStats = _b.cachesStats;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "metrics-page-heading" }, "Application Metrics"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { onClick: this.getMetrics, color: isFetching ? 'btn btn-danger' : 'btn btn-primary', disabled: isFetching },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], { icon: "sync" }),
                    "\u00A0 Refresh")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", null),
            metrics.gauges ? this.renderGauges(metrics) : '',
            metrics.meters && metrics.timers ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { sm: "12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "HTTP requests (events per second)"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Active requests:"),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.counters['com.codahale.metrics.servlet.InstrumentedFilter.activeRequests'].count, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        ' ',
                        "- ",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Total requests:"),
                        ' ',
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Code"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Count"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "Mean"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Average"),
                                    " (1 min)"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Average"),
                                    " (5 min)"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Average"),
                                    " (15 min)"))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: 0 },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "OK"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { min: "0", max: metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count, value: metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].count, color: "success", animated: true })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].mean_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m1_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m5_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.ok'].m15_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] }))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: 1 },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Not Found"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { min: "0", max: metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count, value: metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].count, color: "success", animated: true })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].mean_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m1_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m5_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.notFound'].m15_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] }))),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: 2 },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, "Server Error"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { min: "0", max: metrics.timers['com.codahale.metrics.servlet.InstrumentedFilter.requests'].count, value: metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].count, color: "success", animated: true })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].mean_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m1_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m5_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.meters['com.codahale.metrics.servlet.InstrumentedFilter.responseCodes.serverError'].m15_rate), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })))))))) : (''),
            servicesStats ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { sm: "12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Services statistics (time in millisecond)")),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Service name"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Count"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Mean"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Min"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "p50"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "p75"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "p95"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "p99"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Max"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, Object.keys(servicesStats).map(function (key, index) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: key },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, key),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, servicesStats[key].count),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].mean * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].min * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].p50 * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].p75 * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].p95 * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].p99 * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: servicesStats[key].max * 1024, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] })))); }))))) : (''),
            cachesStats ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { sm: "12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Ehcache statistics"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Cache Name"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Object"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Misses"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Eviction Count"))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, Object.keys(cachesStats).map(function (k, v) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: k },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, k),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, metrics.gauges[k + ".objects"].value),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, metrics.gauges[k + ".hits"].value),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, metrics.gauges[k + ".misses"].value),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, metrics.gauges[k + ".eviction-count"].value))); })))))) : (''),
            metrics.gauges &&
                metrics.gauges['HikariPool-1.pool.TotalConnections'] &&
                metrics.gauges['HikariPool-1.pool.TotalConnections'].value > 0 ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], { sm: "12" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "DataSource statistics (time in millisecond)"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Usage"),
                                    "(",
                                    metrics.gauges['HikariPool-1.pool.ActiveConnections'].value,
                                    " /",
                                    ' ',
                                    metrics.gauges['HikariPool-1.pool.TotalConnections'].value,
                                    ")"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "Count"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "Mean"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "Min"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "p50"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "p75"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "p95"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "p99"),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "text-right" }, "Max"))),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: "DB" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Progress"], { min: "0", max: metrics.gauges['HikariPool-1.pool.TotalConnections'].value, value: metrics.gauges['HikariPool-1.pool.ActiveConnections'].value },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: (metrics.gauges['HikariPool-1.pool.ActiveConnections'].value * 100) /
                                                    metrics.gauges['HikariPool-1.pool.TotalConnections'].value, type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_WHOLE_NUMBER_FORMAT"] }),
                                            "%"))),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" }, metrics.histograms['HikariPool-1.pool.Usage'].count),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].mean), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].min), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p50), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p75), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p95), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].p99), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_4__["TextFormat"], { value: this.filterNaN(metrics.histograms['HikariPool-1.pool.Usage'].max), type: "number", format: app_config_constants__WEBPACK_IMPORTED_MODULE_6__["APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT"] })))))))) : (''),
            this.renderModal()));
    };
    return MetricsPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    metrics: storeState.administration.metrics,
    isFetching: storeState.administration.loading,
    threadDump: storeState.administration.threadDump
}); };
var mapDispatchToProps = { systemMetrics: _administration_reducer__WEBPACK_IMPORTED_MODULE_7__["systemMetrics"], systemThreadDump: _administration_reducer__WEBPACK_IMPORTED_MODULE_7__["systemThreadDump"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(MetricsPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/metrics.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/metrics.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/metrics/thread-item.tsx":
/*!****************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/metrics/thread-item.tsx ***!
  \****************************************************************************/
/*! exports provided: ThreadItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadItem", function() { return ThreadItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");



var ThreadItem = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ThreadItem, _super);
    function ThreadItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapse: false
        };
        _this.toggleStackTrace = function () {
            _this.setState({
                collapse: !_this.state.collapse
            });
        };
        return _this;
    }
    ThreadItem.prototype.render = function () {
        var threadDumpInfo = this.props.threadDumpInfo;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { onClick: this.toggleStackTrace, style: { color: 'hotpink' } }, this.state.collapse ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Hide StackTrace") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "Show StackTrace")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], { isOpen: this.state.collapse },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], { className: "break", style: { overflowX: 'scroll' } },
                            Object.entries(threadDumpInfo.stackTrace).map(function (_a) {
                                var stK = _a[0], stV = _a[1];
                                return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("samp", { key: "detail-" + stK },
                                    stV.className,
                                    ".",
                                    stV.methodName,
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", null,
                                        "(",
                                        stV.fileName,
                                        ":",
                                        stV.lineNumber,
                                        ")")));
                            }),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "mt-1" })))))));
    };
    return ThreadItem;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

/* harmony default export */ __webpack_exports__["default"] = (ThreadItem);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/thread-item.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/metrics/thread-item.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/index.tsx":
/*!******************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/index.tsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _user_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-management */ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx");
/* harmony import */ var _user_management_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-management-detail */ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx");
/* harmony import */ var _user_management_update__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management-update */ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx");
/* harmony import */ var _user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-management-delete-dialog */ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx");







var Routes = function (_a) {
    var match = _a.match;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__["default"], { exact: true, path: match.url + "/new", component: _user_management_update__WEBPACK_IMPORTED_MODULE_5__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__["default"], { exact: true, path: match.url + "/:login/edit", component: _user_management_update__WEBPACK_IMPORTED_MODULE_5__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__["default"], { exact: true, path: match.url + "/:login", component: _user_management_detail__WEBPACK_IMPORTED_MODULE_4__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__["default"], { path: match.url, component: _user_management__WEBPACK_IMPORTED_MODULE_3__["default"] })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_2__["default"], { path: match.url + "/:login/delete", component: _user_management_delete_dialog__WEBPACK_IMPORTED_MODULE_6__["default"] })));
};
/* harmony default export */ __webpack_exports__["default"] = (Routes);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/index.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx":
/*!******************************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx ***!
  \******************************************************************************************************/
/*! exports provided: UserManagementDeleteDialog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementDeleteDialog", function() { return UserManagementDeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");






var UserManagementDeleteDialog = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserManagementDeleteDialog, _super);
    function UserManagementDeleteDialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.confirmDelete = function (event) {
            _this.props.deleteUser(_this.props.user.login);
            _this.handleClose(event);
        };
        _this.handleClose = function (event) {
            event.stopPropagation();
            _this.props.history.goBack();
        };
        return _this;
    }
    UserManagementDeleteDialog.prototype.componentDidMount = function () {
        this.props.getUser(this.props.match.params.login);
    };
    UserManagementDeleteDialog.prototype.render = function () {
        var user = this.props.user;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Modal"], { isOpen: true, toggle: this.handleClose },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalHeader"], { toggle: this.handleClose }, "Confirm delete operation"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalBody"], null, "Are you sure you want to delete this User?"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["ModalFooter"], null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { color: "secondary", onClick: this.handleClose },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { icon: "ban" }),
                    "\u00A0 Cancel"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { color: "danger", onClick: this.confirmDelete },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], { icon: "trash" }),
                    "\u00A0 Delete"))));
    };
    return UserManagementDeleteDialog;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    user: storeState.userManagement.user
}); };
var mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__["getUser"], deleteUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_5__["deleteUser"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(UserManagementDeleteDialog));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-delete-dialog.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx ***!
  \***********************************************************************************************/
/*! exports provided: UserManagementDetail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementDetail", function() { return UserManagementDetail; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");









var UserManagementDetail = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserManagementDetail, _super);
    function UserManagementDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserManagementDetail.prototype.componentDidMount = function () {
        this.props.getUser(this.props.match.params.login);
    };
    UserManagementDetail.prototype.render = function () {
        var user = this.props.user;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null,
                "User [",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, user.login),
                "]"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { size: "md" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dl", { className: "jh-entity-details" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Login"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, user.login),
                        "\u00A0",
                        user.activated ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], { color: "success" }, "Activated") : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], { color: "danger" }, "Deactivated")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "First Name"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, user.firstName),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Last Name"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, user.lastName),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Email"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, user.email),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Created By"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, user.createdBy),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Created Date"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["TextFormat"], { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMAT"], blankOnInvalid: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Last Modified By"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null, user.lastModifiedBy),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Last Modified Date"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["TextFormat"], { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMAT"], blankOnInvalid: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dt", null, "Profiles"),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("dd", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", { className: "list-unstyled" }, user.authorities
                            ? user.authorities.map(function (authority, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", { key: "user-auth-" + i },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], { color: "info" }, authority))); })
                            : null)))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: "/admin/user-management", replace: true, color: "info" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "arrow-left" }),
                " ",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" }, "Back"))));
    };
    return UserManagementDetail;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    user: storeState.userManagement.user
}); };
var mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_8__["getUser"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(UserManagementDetail));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-detail.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx":
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management-update.tsx ***!
  \***********************************************************************************************/
/*! exports provided: UserManagementUpdate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementUpdate", function() { return UserManagementUpdate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");








var UserManagementUpdate = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserManagementUpdate, _super);
    function UserManagementUpdate() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isNew: !_this.props.match.params || !_this.props.match.params.login
        };
        _this.saveUser = function (event, values) {
            if (_this.state.isNew) {
                _this.props.createUser(values);
            }
            else {
                _this.props.updateUser(values);
            }
            _this.handleClose();
        };
        _this.handleClose = function () {
            _this.props.history.push('/admin/user-management');
        };
        return _this;
    }
    UserManagementUpdate.prototype.componentDidMount = function () {
        !this.state.isNew && this.props.getUser(this.props.match.params.login);
        this.props.getRoles();
    };
    UserManagementUpdate.prototype.componentWillUnmount = function () {
        this.props.reset();
    };
    UserManagementUpdate.prototype.render = function () {
        var isInvalid = false;
        var _a = this.props, user = _a.user, loading = _a.loading, updating = _a.updating, roles = _a.roles;
        var isNew = this.state.isNew;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], { md: "8" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Create or edit a User"))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], { md: "8" }, loading ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Loading...")) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvForm"], { onValidSubmit: this.saveUser },
                    user.id ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], { for: "id" }, "ID"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvField"], { type: "text", className: "form-control", name: "id", required: true, readOnly: true, value: user.id }))) : null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], { for: "login" }, "Login"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvField"], { type: "text", className: "form-control", name: "login", validate: {
                                required: {
                                    value: true,
                                    errorMessage: 'Your username is required.'
                                },
                                pattern: {
                                    value: '^[_.@A-Za-z0-9-]*$',
                                    errorMessage: 'Your username can only contain letters and digits.'
                                },
                                minLength: {
                                    value: 1,
                                    errorMessage: 'Your username is required to be at least 1 character.'
                                },
                                maxLength: {
                                    value: 50,
                                    errorMessage: 'Your username cannot be longer than 50 characters.'
                                }
                            }, value: user.login })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], { for: "firstName" }, "First Name"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvField"], { type: "text", className: "form-control", name: "firstName", validate: {
                                maxLength: {
                                    value: 50,
                                    errorMessage: 'This field cannot be longer than {{ max }} characters.'
                                }
                            }, value: user.firstName })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], { for: "lastName" }, "Last Name"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvField"], { type: "text", className: "form-control", name: "lastName", validate: {
                                maxLength: {
                                    value: 50,
                                    errorMessage: 'This field cannot be longer than {{ max }} characters.'
                                }
                            }, value: user.lastName }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvFeedback"], null, "This field cannot be longer than 50 characters.")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvField"], { name: "email", label: "Email", placeholder: "Your email", type: "email", validate: {
                                required: {
                                    value: true,
                                    errorMessage: 'Your email is required.'
                                },
                                email: {
                                    errorMessage: 'Your email is invalid.'
                                },
                                minLength: {
                                    value: 5,
                                    errorMessage: 'Your email is required to be at least 5 characters.'
                                },
                                maxLength: {
                                    value: 254,
                                    errorMessage: 'Your email cannot be longer than 50 characters.'
                                }
                            }, value: user.email })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], { check: true },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvInput"], { type: "checkbox", name: "activated", value: user.activated }),
                            " Activated")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvGroup"], null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], { for: "authorities" }, "Language Key"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_5__["AvInput"], { type: "select", className: "form-control", name: "authorities", value: user.authorities, multiple: true }, roles.map(function (role) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", { value: role, key: role }, role)); }))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: "/admin/user-management", replace: true, color: "info" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "arrow-left" }),
                        "\u00A0",
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" }, "Back")),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { color: "primary", type: "submit", disabled: isInvalid || updating },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "save" }),
                        "\u00A0 Save")))))));
    };
    return UserManagementUpdate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    user: storeState.userManagement.user,
    roles: storeState.userManagement.authorities,
    loading: storeState.userManagement.loading,
    updating: storeState.userManagement.updating
}); };
var mapDispatchToProps = { getUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__["getUser"], getRoles: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__["getRoles"], updateUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__["updateUser"], createUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__["createUser"], reset: _user_management_reducer__WEBPACK_IMPORTED_MODULE_7__["reset"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(UserManagementUpdate));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-update.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management-update.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/administration/user-management/user-management.tsx":
/*!****************************************************************************************!*\
  !*** ./src/main/webapp/app/modules/administration/user-management/user-management.tsx ***!
  \****************************************************************************************/
/*! exports provided: UserManagement, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagement", function() { return UserManagement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var app_config_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/config/constants */ "./src/main/webapp/app/config/constants.ts");
/* harmony import */ var app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/util/pagination.constants */ "./src/main/webapp/app/shared/util/pagination.constants.ts");
/* harmony import */ var _user_management_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-management.reducer */ "./src/main/webapp/app/modules/administration/user-management/user-management.reducer.ts");










var UserManagement = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserManagement, _super);
    function UserManagement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["getSortState"])(_this.props.location, app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"]));
        _this.sort = function (prop) { return function () {
            _this.setState({
                order: _this.state.order === 'asc' ? 'desc' : 'asc',
                sort: prop
            }, function () { return _this.sortUsers(); });
        }; };
        _this.handlePagination = function (activePage) { return _this.setState({ activePage: activePage }, function () { return _this.sortUsers(); }); };
        _this.getUsers = function () {
            var _a = _this.state, activePage = _a.activePage, itemsPerPage = _a.itemsPerPage, sort = _a.sort, order = _a.order;
            _this.props.getUsers(activePage - 1, itemsPerPage, sort + "," + order);
        };
        _this.toggleActive = function (user) { return function () {
            _this.props.updateUser(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, user, { activated: !user.activated }));
        }; };
        return _this;
    }
    UserManagement.prototype.componentDidMount = function () {
        this.getUsers();
    };
    UserManagement.prototype.sortUsers = function () {
        this.getUsers();
        this.props.history.push(this.props.location.pathname + "?page=" + this.state.activePage + "&sort=" + this.state.sort + "," + this.state.order);
    };
    UserManagement.prototype.render = function () {
        var _this = this;
        var _a = this.props, users = _a.users, account = _a.account, match = _a.match, totalItems = _a.totalItems;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { className: "userManagement-page-heading" },
                "Users",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: match.url + "/new", className: "btn btn-primary float-right jh-create-entity" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "plus" }),
                    " Create a new user")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], { responsive: true, striped: true },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('id') },
                            "ID",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('login') },
                            "Login",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('email') },
                            "Email",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Profiles"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('createdDate') },
                            "Created Date",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('lastModifiedBy') },
                            "Last Modified By",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('lastModifiedDate') },
                            "Last Modified Date",
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, users.map(function (user, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { id: user.login, key: "user-" + i },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + user.login, color: "link", size: "sm" }, user.id)),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, user.login),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, user.email),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, user.activated ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { color: "success", onClick: _this.toggleActive(user) }, "Activated")) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { color: "danger", onClick: _this.toggleActive(user) }, "Deactivated"))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, user.authorities
                        ? user.authorities.map(function (authority, j) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { key: "user-auth-" + i + "-" + j },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], { color: "info" }, authority))); })
                        : null),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["TextFormat"], { value: user.createdDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMAT"], blankOnInvalid: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, user.lastModifiedBy),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["TextFormat"], { value: user.lastModifiedDate, type: "date", format: app_config_constants__WEBPACK_IMPORTED_MODULE_7__["APP_DATE_FORMAT"], blankOnInvalid: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn-group flex-btn-group-container" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + user.login, color: "info", size: "sm" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "eye" }),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" }, "View")),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + user.login + "/edit", color: "primary", size: "sm" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "pencil-alt" }),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" }, "Edit")),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + user.login + "/delete", color: "danger", size: "sm", disabled: account.login === user.login },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "trash" }),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" }, "Delete")))))); }))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiPagination"], { items: Object(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["getPaginationItemsNumber"])(totalItems, this.state.itemsPerPage), activePage: this.state.activePage, onSelect: this.handlePagination, maxButtons: 5 }))));
    };
    return UserManagement;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (storeState) { return ({
    users: storeState.userManagement.users,
    totalItems: storeState.userManagement.totalItems,
    account: storeState.authentication.account
}); };
var mapDispatchToProps = { getUsers: _user_management_reducer__WEBPACK_IMPORTED_MODULE_9__["getUsers"], updateUser: _user_management_reducer__WEBPACK_IMPORTED_MODULE_9__["updateUser"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(UserManagement));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/administration/user-management/user-management.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/shared/util/pagination.constants.ts":
/*!*****************************************************************!*\
  !*** ./src/main/webapp/app/shared/util/pagination.constants.ts ***!
  \*****************************************************************/
/*! exports provided: ITEMS_PER_PAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ITEMS_PER_PAGE", function() { return ITEMS_PER_PAGE; });
var ITEMS_PER_PAGE = 20;


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/shared/util/pagination.constants.ts"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/shared/util/pagination.constants.ts"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=administration.chunk.js.map