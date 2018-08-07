(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account"],{

/***/ "./src/main/webapp/app/modules/account/index.tsx":
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/modules/account/index.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/shared/error/error-boundary-route */ "./src/main/webapp/app/shared/error/error-boundary-route.tsx");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings */ "./src/main/webapp/app/modules/account/settings/settings.tsx");
/* harmony import */ var _password_password__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password/password */ "./src/main/webapp/app/modules/account/password/password.tsx");
/* harmony import */ var _sessions_sessions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/sessions */ "./src/main/webapp/app/modules/account/sessions/sessions.tsx");





var Routes = function (_a) {
    var match = _a.match;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: match.url + "/settings", component: _settings_settings__WEBPACK_IMPORTED_MODULE_2__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: match.url + "/password", component: _password_password__WEBPACK_IMPORTED_MODULE_3__["default"] }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(app_shared_error_error_boundary_route__WEBPACK_IMPORTED_MODULE_1__["default"], { path: match.url + "/sessions", component: _sessions_sessions__WEBPACK_IMPORTED_MODULE_4__["default"] })));
};
/* harmony default export */ __webpack_exports__["default"] = (Routes);


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/index.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/index.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/account/password/password.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/password/password.tsx ***!
  \*******************************************************************/
/*! exports provided: PasswordPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordPage", function() { return PasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/layout/password/password-strength-bar */ "./src/main/webapp/app/shared/layout/password/password-strength-bar.tsx");
/* harmony import */ var _password_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./password.reducer */ "./src/main/webapp/app/modules/account/password/password.reducer.ts");








var PasswordPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PasswordPage, _super);
    function PasswordPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            password: ''
        };
        _this.handleValidSubmit = function (event, values) {
            _this.props.savePassword(values.currentPassword, values.newPassword);
        };
        _this.updatePassword = function (event) {
            _this.setState({ password: event.target.value });
        };
        return _this;
    }
    PasswordPage.prototype.componentDidMount = function () {
        this.props.reset();
        this.props.getSession();
    };
    PasswordPage.prototype.componentWillUnmount = function () {
        this.props.reset();
    };
    PasswordPage.prototype.render = function () {
        var account = this.props.account;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], { md: "8" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { id: "password-title" },
                        "Password for ",
                        account.login),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__["AvForm"], { id: "password-form", onValidSubmit: this.handleValidSubmit },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__["AvField"], { name: "currentPassword", label: "Current password", placeholder: "Current password", type: "password", validate: {
                                required: { value: true, errorMessage: 'Your password is required.' }
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__["AvField"], { name: "newPassword", label: "New password", placeholder: "New password", type: "password", validate: {
                                required: { value: true, errorMessage: 'Your password is required.' },
                                minLength: { value: 4, errorMessage: 'Your password is required to be at least 4 characters.' },
                                maxLength: { value: 50, errorMessage: 'Your password cannot be longer than 50 characters.' }
                            }, onChange: this.updatePassword }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_shared_layout_password_password_strength_bar__WEBPACK_IMPORTED_MODULE_6__["default"], { password: this.state.password }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_3__["AvField"], { name: "confirmPassword", label: "New password confirmation", placeholder: "Confirm the new password", type: "password", validate: {
                                required: {
                                    value: true,
                                    errorMessage: 'Your confirmation password is required.'
                                },
                                minLength: {
                                    value: 4,
                                    errorMessage: 'Your confirmation password is required to be at least 4 characters.'
                                },
                                maxLength: {
                                    value: 50,
                                    errorMessage: 'Your confirmation password cannot be longer than 50 characters.'
                                },
                                match: {
                                    value: 'newPassword',
                                    errorMessage: 'The password and its confirmation do not match!'
                                }
                            } }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { color: "success", type: "submit" }, "Save"))))));
    };
    return PasswordPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var authentication = _a.authentication;
    return ({
        account: authentication.account,
        isAuthenticated: authentication.isAuthenticated
    });
};
var mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__["getSession"], savePassword: _password_reducer__WEBPACK_IMPORTED_MODULE_7__["savePassword"], reset: _password_reducer__WEBPACK_IMPORTED_MODULE_7__["reset"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(PasswordPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/password/password.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/password/password.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/account/sessions/sessions.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/sessions/sessions.tsx ***!
  \*******************************************************************/
/*! exports provided: SessionsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsPage", function() { return SessionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _sessions_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions.reducer */ "./src/main/webapp/app/modules/account/sessions/sessions.reducer.ts");






var SessionsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SessionsPage, _super);
    function SessionsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.doSessionInvalidation = function (series) { return function () {
            _this.props.invalidateSession(series);
            _this.props.findAll();
        }; };
        _this.refreshList = function () {
            _this.props.findAll();
        };
        return _this;
    }
    SessionsPage.prototype.componentDidMount = function () {
        this.props.getSession();
        this.props.findAll();
    };
    SessionsPage.prototype.render = function () {
        var _this = this;
        var _a = this.props, account = _a.account, sessions = _a.sessions, updateSuccess = _a.updateSuccess, updateFailure = _a.updateFailure;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null,
                "Active sessions for [",
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, account.login),
                "]"),
            updateSuccess ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], { color: "success" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Session invalidated!"))) : null,
            updateFailure ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], { color: "danger" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "An error has occured!"),
                    " The session could not be invalidated."))) : null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { color: "primary", onClick: this.refreshList }, "Refresh"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "table-responsive" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], { className: "table-striped" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "IP Address"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "User agent"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null, "Date"),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, sessions.map(function (s) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, s.ipAddress),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, s.userAgent),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, s.tokenDate),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], { color: "primary", onClick: _this.doSessionInvalidation(s.series) }, "Invalidate")))); }))))));
    };
    return SessionsPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var authentication = _a.authentication, sessions = _a.sessions;
    return ({
        account: authentication.account,
        sessions: sessions.sessions,
        updateSuccess: sessions.updateSuccess,
        updateFailure: sessions.updateFailure
    });
};
var mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_4__["getSession"], findAll: _sessions_reducer__WEBPACK_IMPORTED_MODULE_5__["findAll"], invalidateSession: _sessions_reducer__WEBPACK_IMPORTED_MODULE_5__["invalidateSession"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(SessionsPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/sessions/sessions.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/sessions/sessions.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/main/webapp/app/modules/account/settings/settings.tsx":
/*!*******************************************************************!*\
  !*** ./src/main/webapp/app/modules/account/settings/settings.tsx ***!
  \*******************************************************************/
/*! exports provided: SettingsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! availity-reactstrap-validation */ "./node_modules/availity-reactstrap-validation/lib/index.js");
/* harmony import */ var availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/reducers/authentication */ "./src/main/webapp/app/shared/reducers/authentication.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.reducer */ "./src/main/webapp/app/modules/account/settings/settings.reducer.ts");







var SettingsPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingsPage, _super);
    function SettingsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleValidSubmit = function (event, values) {
            var account = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.props.account, values);
            _this.props.saveAccountSettings(account);
            event.persist();
        };
        return _this;
    }
    SettingsPage.prototype.componentDidMount = function () {
        this.props.getSession();
    };
    SettingsPage.prototype.componentWillUnmount = function () {
        this.props.reset();
    };
    SettingsPage.prototype.render = function () {
        var account = this.props.account;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], { md: "8" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { id: "settings-title" },
                        "User settings for ",
                        account.login),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__["AvForm"], { id: "settings-form", onValidSubmit: this.handleValidSubmit },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__["AvField"], { className: "form-control", name: "firstName", label: "First Name", id: "firstName", placeholder: "Your first name", validate: {
                                required: { value: true, errorMessage: 'Your first name is required.' },
                                minLength: { value: 1, errorMessage: 'Your first name is required to be at least 1 character' },
                                maxLength: { value: 50, errorMessage: 'Your first name cannot be longer than 50 characters' }
                            }, value: account.firstName }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__["AvField"], { className: "form-control", name: "lastName", label: "Last Name", id: "lastName", placeholder: "Your last name", validate: {
                                required: { value: true, errorMessage: 'Your last name is required.' },
                                minLength: { value: 1, errorMessage: 'Your last name is required to be at least 1 character' },
                                maxLength: { value: 50, errorMessage: 'Your last name cannot be longer than 50 characters' }
                            }, value: account.lastName }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(availity_reactstrap_validation__WEBPACK_IMPORTED_MODULE_4__["AvField"], { name: "email", label: "Email", placeholder: "Your email", type: "email", validate: {
                                required: { value: true, errorMessage: 'Your email is required.' },
                                minLength: { value: 5, errorMessage: 'Your email is required to be at least 5 characters.' },
                                maxLength: { value: 254, errorMessage: 'Your email cannot be longer than 50 characters.' }
                            }, value: account.email }),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], { color: "primary", type: "submit" }, "Save"))))));
    };
    return SettingsPage;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var authentication = _a.authentication;
    return ({
        account: authentication.account,
        isAuthenticated: authentication.isAuthenticated
    });
};
var mapDispatchToProps = { getSession: app_shared_reducers_authentication__WEBPACK_IMPORTED_MODULE_5__["getSession"], saveAccountSettings: _settings_reducer__WEBPACK_IMPORTED_MODULE_6__["saveAccountSettings"], reset: _settings_reducer__WEBPACK_IMPORTED_MODULE_6__["reset"] };
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(SettingsPage));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/settings/settings.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/var/www/html/payroll_manager/front-end/src/main/webapp/app/modules/account/settings/settings.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=account.chunk.js.map