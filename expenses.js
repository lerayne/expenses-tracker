/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.query = query;

var _mysql = __webpack_require__(71);

var _mysql2 = _interopRequireDefault(_mysql);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 09.01.17.
 */

const db = _mysql2.default.createConnection(_config.dbConfig);

db.connect(err => {
    if (err) {
        console.error('Database connection error');
        return null;
    }

    console.log('Database connected as', db.threadId);
});

exports.default = db;
function query(query, data = false) {
    return new Promise((resolve, reject) => {

        query = _mysql2.default.format(query, data);

        const params = [query];

        params.push((err, rows) => {
            if (err) reject(err);
            if (rows) resolve(rows);
        });

        db.query(...params);
    });
}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Button");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("./config.js");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/FormControl");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = checkUserAuth;

var _jsonwebtoken = __webpack_require__(18);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 22.03.17.
 */

function checkUserAuth(req) {
    return new Promise((resolve, reject) => {

        if (!req.cookies.access_token) {
            resolve(false);
        } else {
            _jsonwebtoken2.default.verify(req.cookies.access_token, _config.secretKey, (err, decoded) => {
                if (err) {
                    resolve(false);
                } else {
                    resolve(decoded);
                }
            });
        }
    });
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/FormGroup");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Navbar");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Table");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 23.03.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (email) {
        const SQLQuery = `
        SELECT 
            id, 
            email, 
            password_hash 
        FROM users 
        WHERE email = ?
    `;

        const dbResp = yield (0, _db.query)(SQLQuery, [email]);

        if (!dbResp[0]) {
            return false;
        } else {
            return dbResp[0];
        }
    });

    function getUserAuth(_x) {
        return _ref.apply(this, arguments);
    }

    return getUserAuth;
})();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getTransactions = __webpack_require__(38);

var _getTransactions2 = _interopRequireDefault(_getTransactions);

var _createTransaction = __webpack_require__(33);

var _createTransaction2 = _interopRequireDefault(_createTransaction);

var _deleteTransaction = __webpack_require__(34);

var _deleteTransaction2 = _interopRequireDefault(_deleteTransaction);

var _getSummary = __webpack_require__(37);

var _getSummary2 = _interopRequireDefault(_getSummary);

var _getCategories = __webpack_require__(36);

var _getCategories2 = _interopRequireDefault(_getCategories);

var _createCategory = __webpack_require__(32);

var _createCategory2 = _interopRequireDefault(_createCategory);

var _editTransaction = __webpack_require__(35);

var _editTransaction2 = _interopRequireDefault(_editTransaction);

var _getUserAuth = __webpack_require__(13);

var _getUserAuth2 = _interopRequireDefault(_getUserAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 09.01.17.
 */

exports.default = {
    getTransactions: _getTransactions2.default,
    createTransaction: _createTransaction2.default,
    deleteTransaction: _deleteTransaction2.default,
    getSummary: _getSummary2.default,
    getCategories: _getCategories2.default,
    createCategory: _createCategory2.default,
    editTransaction: _editTransaction2.default,
    getUserAuth: _getUserAuth2.default
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ms = __webpack_require__(70);

var _ms2 = _interopRequireDefault(_ms);

var _config = __webpack_require__(4);

var _createToken = __webpack_require__(40);

var _createToken2 = _interopRequireDefault(_createToken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 23.03.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (req, res, insecureUser) {

        try {
            // removing password hash
            const { password_hash } = insecureUser,
                  rest = _objectWithoutProperties(insecureUser, ['password_hash']);

            const user = _extends({}, rest, {
                ip: '0.0.0.0' // todo - current IP
            });

            // todo - get domain from env (doesnt work now on prod)
            // const host = req.get('host')
            // const hostname = host.split(':')[0]

            const token = yield (0, _createToken2.default)(user);

            res.cookie('access_token', token, {
                path: '/',
                domain: _config.domain,
                maxAge: (0, _ms2.default)(_config.keyExpiresIn)
            });
        } catch (error) {
            console.error('grantAccess:', error);
        }
    });

    function grantAccess(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    }

    return grantAccess;
})();

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.categoriesPageInit = categoriesPageInit;
exports.fetchCategories = fetchCategories;
exports.createCategory = createCategory;

var _api = __webpack_require__(17);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function categoriesPageInit() {
    return dispatch => dispatch(fetchCategories());
} /**
   * Created by lerayne on 19.02.17.
   */

function fetchCategories() {
    return {
        type: "FETCH_CATEGORIES",
        promise: _api2.default.getCategories()
    };
}

function createCategory(category) {
    return dispatch => {

        const createPromise = _api2.default.createCategory(category);

        dispatch({
            type: 'CREATE_CATEGORY',
            promise: createPromise
        });

        //createPromise.then(() => dispatch(fetchCategories()))

        return createPromise;
    };
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by lerayne on 10.01.17.
 */

let api;

if (false) {
    api = require('../client/api').default;
} else {
    api = __webpack_require__(14).default;
}

exports.default = api;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/ButtonGroup");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/ControlLabel");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Nav");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/NavItem");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = createStaticPage;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(79);

var _server2 = _interopRequireDefault(_server);

var _reactRouter = __webpack_require__(11);

var _reactRedux = __webpack_require__(5);

var _url = __webpack_require__(12);

var _checkUserAuth = __webpack_require__(7);

var _checkUserAuth2 = _interopRequireDefault(_checkUserAuth);

var _grantAccess = __webpack_require__(15);

var _grantAccess2 = _interopRequireDefault(_grantAccess);

var _routes = __webpack_require__(61);

var _routes2 = _interopRequireDefault(_routes);

var _getHTML = __webpack_require__(39);

var _getHTML2 = _interopRequireDefault(_getHTML);

var _configureStore = __webpack_require__(51);

var _configureStore2 = _interopRequireDefault(_configureStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 08.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

function createStaticPage(req, res) {

    // создаем store (для каждого подключения store будет свой, т.к. store - это отражение
    // клиентского состояния, а не состояния всего приложения)
    const store = (0, _configureStore2.default)();
    const { url } = req;

    // смотрим, соответсвует ли путь запроса одному из путей роутинга
    (0, _reactRouter.match)({ routes: (0, _routes2.default)(store), location: url }, (() => {
        var _ref = _asyncToGenerator(function* (error, redirectLocation, renderProps) {

            if (redirectLocation) {
                // Если необходимо сделать redirect
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            if (error) {
                // Произошла ошибка любого рода
                return res.status(500).send(error.message);
            }

            if (!renderProps) {
                // Мы не определили путь, который бы подошел для URL
                return res.status(404).send('Not found');
            }

            const { payload: currentUser } = yield (0, _checkUserAuth2.default)(req);

            if (currentUser) {
                store.dispatch({
                    type: 'SET_USER',
                    payload: currentUser
                });

                // todo - only reauthorize near expiration (performance)
                // todo - check ip

                // sliding - now only on static page render
                yield (0, _grantAccess2.default)(req, res, currentUser);
            }

            const promises = [];

            renderProps.routes.forEach(function (route) {
                const component = route.component.WrappedComponent || route.component;

                //if static "loginRequired" field defined on a component - redirect to /login
                // todo - maybe think of another way to do that
                if (component.loginRequired && !currentUser) {
                    return res.redirect(302, (0, _url.format)({ pathname: '/login', query: { next: url } }));
                }

                if (component.anonymousRequired && currentUser) {
                    return res.redirect(302, (0, _url.format)({ pathname: '/' }));
                }

                if (component.initialize) {
                    promises.push(component.initialize(store.dispatch));
                }
            });

            Promise.all(promises).then(function () {

                const componentHTML = _server2.default.renderToString(_react2.default.createElement(
                    _reactRedux.Provider,
                    { store: store },
                    _react2.default.createElement(_reactRouter.RouterContext, renderProps)
                ));

                // рендерим html, включая в него текущий state для передачи клиентскому redux
                res.end((0, _getHTML2.default)(componentHTML, store.getState()));
            });
        });

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    })());
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bcryptjs = __webpack_require__(67);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _url = __webpack_require__(12);

var _url2 = _interopRequireDefault(_url);

var _checkUserAuth = __webpack_require__(7);

var _checkUserAuth2 = _interopRequireDefault(_checkUserAuth);

var _grantAccess = __webpack_require__(15);

var _grantAccess2 = _interopRequireDefault(_grantAccess);

var _getUserAuth = __webpack_require__(13);

var _getUserAuth2 = _interopRequireDefault(_getUserAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 22.03.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

function redirectToFailure(req, res) {
    res.redirect(302, _url2.default.format({
        pathname: '/login', query: {
            next: req.body.nextUrl,
            error: 1
        }
    }));
}

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (req, res) {

        const { payload: currentUser } = yield (0, _checkUserAuth2.default)(req);

        if (currentUser) {
            // Already logged in: redirect back
            res.redirect(302, req.body.nextUrl || '/');
        } else {

            const user = yield (0, _getUserAuth2.default)(req.body.email);

            if (!user) {
                // No such user
                redirectToFailure(req, res);
            } else {
                const passwordCorrect = yield _bcryptjs2.default.compare(req.body.password, user.password_hash);

                if (!passwordCorrect) {
                    // Wrong password
                    redirectToFailure(req, res);
                } else {
                    // User is successfully authed!
                    yield (0, _grantAccess2.default)(req, res, user);
                    res.redirect(302, req.body.nextUrl || '/');
                }
            }
        }
    });

    function login(_x, _x2) {
        return _ref.apply(this, arguments);
    }

    return login;
})();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

let authorized = (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
        const userAuthed = yield (0, _checkUserAuth2.default)(req);

        if (!userAuthed) {
            res.json({
                status: 401,
                error: 'Unauthorized'
            });
            return false;
        } else {
            return true;
        }
    });

    return function authorized(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

exports.default = setApiListeners;

var _api = __webpack_require__(14);

var _api2 = _interopRequireDefault(_api);

var _checkUserAuth = __webpack_require__(7);

var _checkUserAuth2 = _interopRequireDefault(_checkUserAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 29.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

// importing SERVER api


function setApiListeners(app) {

    app.get('/api/transactions', (() => {
        var _ref2 = _asyncToGenerator(function* (req, res) {
            if (yield authorized(req, res)) {
                const { dateFrom, dateTo } = req.query;
                res.json((yield _api2.default.getTransactions(dateFrom, dateTo)));
            }
        });

        return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
        };
    })());

    app.post('/api/transaction', (() => {
        var _ref3 = _asyncToGenerator(function* (req, res) {
            return (yield authorized(req, res)) && res.json((yield _api2.default.createTransaction(req.body)));
        });

        return function (_x5, _x6) {
            return _ref3.apply(this, arguments);
        };
    })());

    app.put('/api/transaction/:id', (() => {
        var _ref4 = _asyncToGenerator(function* (req, res) {
            return (yield authorized(req, res)) && res.json((yield _api2.default.editTransaction(req.params.id, req.body)));
        });

        return function (_x7, _x8) {
            return _ref4.apply(this, arguments);
        };
    })());

    app.delete('/api/transaction/:id', (() => {
        var _ref5 = _asyncToGenerator(function* (req, res) {
            return (yield authorized(req, res)) && res.json((yield _api2.default.deleteTransaction(req.params.id)));
        });

        return function (_x9, _x10) {
            return _ref5.apply(this, arguments);
        };
    })());

    app.get('/api/summary', (() => {
        var _ref6 = _asyncToGenerator(function* (req, res) {
            if (yield authorized(req, res)) {
                const { dateFrom, dateTo } = req.query;
                res.json((yield _api2.default.getSummary(dateFrom, dateTo)));
            }
        });

        return function (_x11, _x12) {
            return _ref6.apply(this, arguments);
        };
    })());

    app.get('/api/categories', (() => {
        var _ref7 = _asyncToGenerator(function* (req, res) {
            return (yield authorized(req, res)) && res.json((yield _api2.default.getCategories()));
        });

        return function (_x13, _x14) {
            return _ref7.apply(this, arguments);
        };
    })());

    app.post('/api/category', (() => {
        var _ref8 = _asyncToGenerator(function* (req, res) {
            return (yield authorized(req, res)) && res.json((yield _api2.default.createCategory(req.body)));
        });

        return function (_x15, _x16) {
            return _ref8.apply(this, arguments);
        };
    })());
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = __webpack_require__(81);

var _reduxDevtoolsLogMonitor = __webpack_require__(83);

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = __webpack_require__(82);

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 07.01.17.
 */

const DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
    _reduxDevtoolsDockMonitor2.default,
    {
        toggleVisibilityKey: 'ctrl-h',
        changePositionKey: 'ctrl-q',
        defaultIsVisible: false
    },
    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, null)
));

exports.default = DevTools;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(29);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(27);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(28);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _config = __webpack_require__(4);

var _createStaticPage = __webpack_require__(24);

var _createStaticPage2 = _interopRequireDefault(_createStaticPage);

var _setApiListeners = __webpack_require__(26);

var _setApiListeners2 = _interopRequireDefault(_setApiListeners);

var _login = __webpack_require__(25);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// создаем центральный апп
const app = (0, _express2.default)();

// стандартный модуль, для парсинга JSON в запросах
/**
 * Created by lerayne on 07.01.17.
 */

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

app.use(_express2.default.static('public'));

// post login
app.post('/login', _login2.default);

// logout
app.get('/logout', (req, res) => {
    res.clearCookie('access_token', { path: '/', domain: _config.domain });
    res.redirect(302, '/');
});

// API HANDLERS
(0, _setApiListeners2.default)(app);

// коллбек на запрос к серверу (doesn't start width "/api/")
app.get(/^(?!\/api\/).*$/, _createStaticPage2.default);

const PORT = __webpack_require__.i({"BROWSER":false,"NODE_ENV":"development"}).LISTEN || 3001;

//запускаем сервер
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 20.02.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (category) {

        const newRow = {
            name: category.name
        };

        const creationResult = yield (0, _db.query)(`
        INSERT INTO categories (??) VALUES (?)
    `, [Object.keys(newRow), Object.values(newRow)]);

        return _extends({}, newRow, {
            id: creationResult.insertId
        });
    });

    function createCategory(_x) {
        return _ref.apply(this, arguments);
    }

    return createCategory;
})();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _db = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 14.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (ta) {

        const now = (0, _moment2.default)();

        if (ta.date) {
            if (!ta.date.split(' ')[1]) {
                ta.date += ' 13:00';
            }
        }

        const officialMoment = ta.date ? (0, _moment2.default)(ta.date, 'YYYY.MM.DD HH.mm') : now;

        if (!officialMoment.isValid()) {
            //todo - think of error handling
            throw 'date is invalid!';
            return false;
        }

        const officialTS = officialMoment.valueOf();
        const realTS = now.valueOf();
        const income = ta.income * 1;
        const category = parseInt(ta.category, 10);
        let value = parseInt(ta.value, 10);
        if (!income && value > 0 || income && value < 0) {
            value *= -1;
        }

        const newRow = {
            user: 1,
            name: ta.name,
            value,
            income,
            category: !isNaN(category) && category > 0 ? category : null,
            created: realTS,
            updated: realTS,
            official_date: officialTS
        };

        const creationResponse = yield (0, _db.query)(`
            INSERT INTO transactions (??)
            VALUES (?)
        `, [Object.keys(newRow), Object.values(newRow)]);

        return _extends({}, newRow, {
            id: creationResponse.insertId
        });
    });

    function createTransaction(_x) {
        return _ref.apply(this, arguments);
    }

    return createTransaction;
})();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 29.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (id) {
        const deletionResult = yield (0, _db.query)(`
        DELETE FROM transactions WHERE id = ?
    `, id);

        return { id };
    });

    function deleteTransaction(_x) {
        return _ref.apply(this, arguments);
    }

    return deleteTransaction;
})();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _db = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 20.02.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (id, ta) {

        console.log('editing', id, ta);

        id = parseInt(id, 10);

        const now = (0, _moment2.default)();

        if (!ta.date.split(' ')[1]) {
            ta.date += ' 13:00';
        }

        const officialMoment = (0, _moment2.default)(ta.date, 'YYYY.MM.DD HH.mm');

        const category = parseInt(ta.category, 10);
        const income = ta.income * 1;
        let value = parseInt(ta.value, 10);

        if (!income && value > 0 || income && value < 0) {
            value *= -1;
        }

        const editedTA = {
            name: ta.name,
            income,
            value,
            category: !isNaN(category) && category > 0 ? category : null,
            updated: now.valueOf(),
            official_date: officialMoment.valueOf()
        };

        console.log('editedTA', editedTA);

        try {
            const editResult = yield (0, _db.query)(`
        UPDATE transactions
        SET ?
        WHERE id = ?
    `, [editedTA, id]);

            console.log('edited', id, editResult);

            return _extends({}, editedTA, {
                id
            });
        } catch (error) {
            console.error('error in editTA', error);
        }
    });

    function editTransaction(_x, _x2) {
        return _ref.apply(this, arguments);
    }

    return editTransaction;
})();

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 19.02.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* () {

        const rows = yield (0, _db.query)(`
        SELECT 
            id,
            name
        FROM categories
        ORDER BY name 
    `);

        //console.log('cats', rows)

        return {
            list: rows
        };
    });

    function getCategories() {
        return _ref.apply(this, arguments);
    }

    return getCategories;
})();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 14.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (dateFrom, dateTo) {

        dateFrom = dateFrom * 1;
        dateTo = dateTo * 1;

        const promises = [(0, _db.query)(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 1
                AND official_date > ?
                AND official_date < ?
        `, [dateFrom, dateTo]), (0, _db.query)(`
            SELECT SUM(value) AS value
            FROM transactions
            WHERE income = 0
                AND official_date > ?
                AND official_date < ?
        `, [dateFrom, dateTo])];

        const summary = yield Promise.all(promises);

        const totalIncome = summary[0][0].value;
        const totalExpenses = summary[1][0].value;

        return {
            totalIncome,
            totalExpenses,
            expectedRemains: totalIncome + totalExpenses
        };
    });

    function getSummary(_x, _x2) {
        return _ref.apply(this, arguments);
    }

    return getSummary;
})();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _db = __webpack_require__(1);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 14.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

exports.default = (() => {
    var _ref = _asyncToGenerator(function* (dateFrom, dateTo) {

        dateFrom = dateFrom * 1;
        dateTo = dateTo * 1;

        const rows = yield (0, _db.query)(`
        SELECT
            id,
            created,
            updated,
            official_date,
            category,
            name,
            income,
            value
        FROM transactions 
        WHERE user = ?
            AND official_date > ?
            AND official_date < ?
        ORDER BY official_date DESC 
    `, [1, // user
        dateFrom, dateTo]);

        return {
            list: rows
        };
    });

    function getTransactions(_x, _x2) {
        return _ref.apply(this, arguments);
    }

    return getTransactions;
})();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderHTML;
/**
 * Created by lerayne on 08.01.17.
 */

const assetUrl =  true ? 'http://localhost:8050/public/' : '';

function renderHTML(componentHTML, initialState) {
  const html = `
    <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Expenses tracker</title>
        <link rel="stylesheet" href="${assetUrl}assets/styles.css">
        <script>
          window.REDUX_INITIAL_STATE = ${JSON.stringify(initialState)}
        </script>
      </head>
      <body>
        <div id="react-view">${componentHTML}</div>
        <div id="dev-tools"></div>
        <script type="application/javascript" src="${assetUrl}assets/bundle.js"></script>
      </body>
    </html>
  `;
  return html;
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by lerayne on 23.03.17.
                                                                                                                                                                                                                                                                   */

exports.default = createToken;

var _jsonwebtoken = __webpack_require__(18);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _config = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createToken(payload, optionsOverride = {}) {
    const options = _extends({
        expiresIn: _config.keyExpiresIn
    }, optionsOverride);

    return new Promise((resolve, reject) => {
        _jsonwebtoken2.default.sign({ payload }, _config.secretKey, options, function (err, token) {
            if (err) {
                reject(err);
            } else {
                resolve(token);
            }
        });
    });
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.transactionsPageInit = transactionsPageInit;
exports.transactionsPageLoadAll = transactionsPageLoadAll;
exports.setDateOffsets = setDateOffsets;
exports.setDateOffsetsUpdate = setDateOffsetsUpdate;
exports.fetchTransactions = fetchTransactions;
exports.createTransaction = createTransaction;
exports.editTransaction = editTransaction;
exports.deleteTransaction = deleteTransaction;
exports.fetchSummary = fetchSummary;

var _api = __webpack_require__(17);

var _api2 = _interopRequireDefault(_api);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _categoriesActions = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialization function for TransactionsPage container.
 * note: Any initialization action must return a single promise. A "dispatch" of Thunk action
 * returns what the thunk-function returns
 *
 * @returns {function(func, func) => Promise}
 */
function transactionsPageInit() {
    return dispatch => {

        const now = (0, _moment2.default)();

        // date is dynamic data, so it can't be moved to reducer
        dispatch(setDateOffsets(now.clone().startOf('month').valueOf(), now.clone().endOf('month').valueOf()));

        return dispatch(transactionsPageLoadAll());
    };
}

/**
 * Collects all filters data from state and reloads all data for the TransactionsPage
 *
 * @returns {function(func, func) => Promise}
 */
/**
 * Created by lerayne on 09.01.17.
 */

function transactionsPageLoadAll() {
    return (dispatch, getState) => {
        const { dateFrom, dateTo } = getState().transactions;

        const promises = [dispatch(fetchTransactions(dateFrom, dateTo)), dispatch(fetchSummary(dateFrom, dateTo)), dispatch((0, _categoriesActions.fetchCategories)())];

        return Promise.all(promises);
    };
}

/**
 * Synchronous setter of date filter
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, payload: {dateFrom: number, dateTo: number}}}
 */
function setDateOffsets(dateFrom, dateTo) {
    return {
        type: 'SET_DATE_OFFSETS',
        payload: {
            dateFrom,
            dateTo
        }
    };
}

/**
 * Async set date filter then reload all data
 *
 * @param from - number
 * @param to - number
 * @returns {function(func, func) => Promise}
 */
function setDateOffsetsUpdate(from, to) {
    return dispatch => {

        dispatch(setDateOffsets(from, to));

        return dispatch(transactionsPageLoadAll());
    };
}

/**
 * Requests transactions list
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, promise: Promise}}
 */
function fetchTransactions(dateFrom, dateTo) {
    return {
        type: 'FETCH_TRANSACTIONS',
        promise: _api2.default.getTransactions(dateFrom, dateTo)
    };
}

/**
 * Creates a new transactions
 * (tends to be client-only action)
 *
 * @param ta (transaction)
 * @returns {function(func, func) => Promise}
 */
function createTransaction(ta) {
    return (dispatch, getState) => {

        const createPromise = _api2.default.createTransaction(ta);

        dispatch({
            type: 'CREATE_TRANSACTION',
            promise: createPromise
        });

        const { dateFrom, dateTo } = getState().transactions;

        createPromise.then(() => dispatch(fetchSummary(dateFrom, dateTo)));

        //todo - разобраться с возвратом промиса и очередностью действий
        return createPromise;
    };
}

function editTransaction(id, ta) {
    return (dispatch, getState) => {

        const editPromise = _api2.default.editTransaction(id, ta);

        dispatch({
            type: 'EDIT_TRANSACTION',
            promise: editPromise
        });

        const { dateFrom, dateTo } = getState().transactions;

        editPromise.then(() => dispatch(fetchSummary(dateFrom, dateTo)));

        //todo - разобраться с возвратом промиса и очередностью действий
        return editPromise;
    };
}

/**
 * Requests transaction deletion
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param id
 * @returns {function(func, func)}
 */
function deleteTransaction(id) {
    return (dispatch, getState) => {

        const promise = _api2.default.deleteTransaction(id);

        dispatch({
            type: 'DELETE_TRANSACTION',
            promise
        });

        const { dateFrom, dateTo } = getState().transactions;

        promise.then(() => dispatch(fetchSummary(dateFrom, dateTo)));

        return promise;
    };
}

/**
 * Requests summary information
 * note: Promise action, "dispatch" returns promise which resolves when the API call is done and
 * state is changed by it's results
 *
 * @param dateFrom - number
 * @param dateTo - number
 * @returns {{type: string, promise: Promise}}
 */
function fetchSummary(dateFrom, dateTo) {
    return {
        type: 'FETCH_SUMMARY',
        promise: _api2.default.getSummary(dateFrom, dateTo)
    };
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CategoriesControls;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Navbar = __webpack_require__(9);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CategoriesControls({ createCategory }) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            _Navbar2.default,
            { inverse: true, className: 'narrow' },
            _react2.default.createElement(
                _Navbar2.default.Form,
                null,
                _react2.default.createElement(
                    _Button2.default,
                    {
                        bsStyle: 'primary',
                        bsSize: 'xsmall',
                        onClick: createCategory
                    },
                    '\u041D\u043E\u0432\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                )
            )
        )
    );
} /**
   * Created by lerayne on 19.02.17.
   */

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CategoriesList;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(10);

var _Table2 = _interopRequireDefault(_Table);

var _ButtonGroup = __webpack_require__(19);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 19.02.17.
 */

function CategoriesList({ categories }) {
    return _react2.default.createElement(
        'div',
        { className: 'CategoriesList' },
        _react2.default.createElement(
            _Table2.default,
            { responsive: true, condensed: true, striped: true },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                categories.map(category => _react2.default.createElement(
                    'tr',
                    { key: category.id },
                    _react2.default.createElement(
                        'td',
                        null,
                        category.name
                    )
                ))
            )
        )
    );
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Modal = __webpack_require__(77);

var _Modal2 = _interopRequireDefault(_Modal);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _FormControl = __webpack_require__(6);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _ControlLabel = __webpack_require__(20);

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormGroup = __webpack_require__(8);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 19.02.17.
 */

class CategoryModal extends _react.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            newName: ''
        }, _temp;
    }

    render() {
        const {
            close
        } = this.props;

        const {
            newName
        } = this.state;

        return _react2.default.createElement(
            _Modal2.default.Dialog,
            null,
            _react2.default.createElement(
                _Modal2.default.Header,
                null,
                _react2.default.createElement(
                    _Modal2.default.Title,
                    null,
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044E'
                )
            ),
            _react2.default.createElement(
                _Modal2.default.Body,
                null,
                _react2.default.createElement(
                    _FormGroup2.default,
                    null,
                    _react2.default.createElement(
                        _ControlLabel2.default,
                        null,
                        '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F'
                    ),
                    _react2.default.createElement(_FormControl2.default, {
                        type: 'text',
                        value: newName,
                        onChange: e => this.setState({ newName: e.target.value })
                    })
                )
            ),
            _react2.default.createElement(
                _Modal2.default.Footer,
                null,
                _react2.default.createElement(
                    _Button2.default,
                    { onClick: close },
                    '\u041E\u0442\u043C\u0435\u043D\u0430'
                ),
                _react2.default.createElement(
                    _Button2.default,
                    {
                        bsStyle: 'primary',
                        onClick: this.create.bind(this),
                        disabled: !newName
                    },
                    '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
                )
            )
        );
    }

    create() {
        if (this.state.newName) {
            this.props.create({
                name: this.state.newName
            });
        }
    }
}
exports.default = CategoryModal;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _FormControl = __webpack_require__(6);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = __webpack_require__(8);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by lerayne on 20.02.17.
                                                                                                                                                                                                                              */

class DateInput extends _react.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            validation: null
        }, _temp;
    }

    componentWillMount() {
        this.setValidationState(this.props.value);
    }

    componentWillReceiveProps(newProps) {
        if (newProps.value != this.props.value) {
            this.setValidationState(newProps.value);
        }
    }

    render() {
        // just screening from getting into "rest"
        const _props = this.props,
              { type, onChange, formats } = _props,
              rest = _objectWithoutProperties(_props, ['type', 'onChange', 'formats']);

        return _react2.default.createElement(
            _FormGroup2.default,
            {
                style: { display: 'inline-block' },
                validationState: this.state.validation
            },
            _react2.default.createElement(_FormControl2.default, _extends({
                type: 'text',
                onChange: e => this.onChange(e.target.value)
            }, rest))
        );
    }

    onChange(value) {
        this.setValidationState(value);
        this.props.onChange(value);
    }

    validate(value) {
        return (0, _moment2.default)(value, this.props.formats).isValid();
    }

    setValidationState(value) {
        this.setState({
            validation: this.validate(value) ? null : 'error'
        });
    }
}

DateInput.propTypes = {
    formats: _react.PropTypes.arrayOf(_react.PropTypes.string).isRequired,
    value: _react.PropTypes.string.isRequired,
    onChange: _react.PropTypes.func.isRequired
};
exports.default = DateInput;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ShortDate;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ShortDate({ momentDate }) {

    return _react2.default.createElement(
        'abbr',
        { title: momentDate.format('dddd, D MMMM YYYY, HH:mm') },
        momentDate.format('D MMMM')
    );
} /**
   * Created by lerayne on 15.01.17.
   */

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by lerayne on 11.01.17.
                                                                                                                                                                                                                                                                   */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _FormControl = __webpack_require__(6);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _InputGroup = __webpack_require__(75);

var _InputGroup2 = _interopRequireDefault(_InputGroup);

var _Checkbox = __webpack_require__(73);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _DateInput = __webpack_require__(45);

var _DateInput2 = _interopRequireDefault(_DateInput);

var _TransactionInputPanel = __webpack_require__(63);

var _TransactionInputPanel2 = _interopRequireDefault(_TransactionInputPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const validDateFormats = ['YYYY-MM-DD', 'YYYY-MM-DD HH:mm'];

class TransactionInputPanel extends _react.Component {

    constructor(props) {
        super(props);

        this.state = this.initialState(props);
    }

    initialState(props) {
        return {
            mode: 'create',
            id: -1,
            name: '',
            value: '0',
            income: false,
            category: -1,
            subcategory: -1,
            beneficiars: [],
            dateIsNow: true,
            date: (0, _moment2.default)().format('YYYY.MM.DD')
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.transaction != this.props.transaction) {

            if (typeof newProps.transaction == 'object') {
                this.enterEditMode(newProps.transaction);
            }

            if (newProps.transaction === false) {
                this.setState(this.initialState(newProps));
            }
        }
    }

    render() {

        let {
            name,
            value,
            income,
            category,
            dateIsNow,
            date,
            mode
        } = this.state;

        const {
            categories,
            cancelEdit
        } = this.props;

        if (category === null) {
            category = -1;
        }

        return _react2.default.createElement(
            'div',
            { className: _TransactionInputPanel2.default.main, id: 'Test' },
            _react2.default.createElement(
                'div',
                null,
                'sadd',
                _react2.default.createElement(_FormControl2.default, {
                    type: 'text',
                    className: 'name',
                    placeholder: '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435',
                    value: name,
                    onChange: e => this.setState({ name: e.target.value }),
                    onKeyUp: this.handleType.bind(this)
                }),
                _react2.default.createElement(
                    _FormControl2.default,
                    {
                        componentClass: 'select',
                        className: 'category',
                        placeholder: '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F',
                        value: category,
                        onChange: e => this.setState({ category: e.target.value })
                    },
                    _react2.default.createElement(
                        'option',
                        { value: -1 },
                        '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F (\u043D\u0435\u0442)'
                    ),
                    categories.map(category => _react2.default.createElement(
                        'option',
                        { key: category.id, value: category.id },
                        category.name
                    ))
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'beneficiars' },
                    _react2.default.createElement(
                        _InputGroup2.default,
                        null,
                        _react2.default.createElement(_FormControl2.default, { type: 'text', placeholder: '\u0411\u0435\u043D\u0435\u0444\u0438\u0446\u0438\u0430\u0440\u044B', disabled: true }),
                        _react2.default.createElement(
                            _InputGroup2.default.Button,
                            null,
                            _react2.default.createElement(
                                _Button2.default,
                                null,
                                '+'
                            )
                        )
                    )
                ),
                mode == 'create' && _react2.default.createElement(
                    _Button2.default,
                    {
                        className: 'submit',
                        bsStyle: 'primary',
                        onClick: this.submit.bind(this),
                        disabled: !this.canSubmit()
                    },
                    '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C'
                ),
                mode == 'edit' && _react2.default.createElement(
                    _Button2.default,
                    {
                        className: 'submit',
                        bsStyle: 'primary',
                        onClick: this.save.bind(this),
                        disabled: !this.canSubmit()
                    },
                    '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C'
                ),
                mode == 'edit' && _react2.default.createElement(
                    _Button2.default,
                    {
                        className: 'cancelEdit',
                        onClick: cancelEdit
                    },
                    '\u041E\u0442\u043C\u0435\u043D\u0430'
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'value' },
                    _react2.default.createElement(
                        _InputGroup2.default,
                        null,
                        _react2.default.createElement(
                            _InputGroup2.default.Button,
                            null,
                            !income && _react2.default.createElement(
                                _Button2.default,
                                {
                                    className: 'expense',
                                    bsStyle: 'danger',
                                    onClick: () => this.setState({ income: true })
                                },
                                '-'
                            ),
                            !!income && _react2.default.createElement(
                                _Button2.default,
                                {
                                    className: 'income',
                                    bsStyle: 'success',
                                    onClick: () => this.setState({ income: false })
                                },
                                '+'
                            )
                        ),
                        _react2.default.createElement(_FormControl2.default, {
                            type: 'text',
                            placeholder: '\u0421\u0443\u043C\u043C\u0430',
                            value: value,
                            onChange: e => this.setState({ value: e.target.value }),
                            onKeyUp: this.handleType.bind(this)
                        })
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _Checkbox2.default,
                    {
                        checked: dateIsNow,
                        onChange: e => this.setState({ dateIsNow: e.target.checked })
                    },
                    _react2.default.createElement(
                        'span',
                        {
                            style: { textDecoration: dateIsNow ? 'none' : 'line-through' } },
                        '\u0421\u0435\u0439\u0447\u0430\u0441'
                    )
                ),
                !dateIsNow && _react2.default.createElement(_DateInput2.default, {
                    value: date,
                    onChange: newDate => this.setState({ date: newDate }),
                    formats: validDateFormats,
                    bsSize: 'small',
                    className: 'date'
                })
            )
        );
    }

    canSubmit() {
        let canSubmit = true;

        const {
            name,
            value,
            date,
            dateIsNow
        } = this.state;

        if (!name) {
            return false;
        }

        if (!value || isNaN(parseInt(value)) || value == 0) {
            return false;
        }

        if (!dateIsNow && !this.getMomentFromFormatted(date).isValid()) {
            return false;
        }

        return true;
    }

    submit() {
        console.log('submit', _extends({}, this.state));

        const {
            name,
            value,
            category,
            income,
            dateIsNow,
            date
        } = this.state;

        const newTransaction = {
            name,
            value,
            income,
            category
        };

        if (!dateIsNow) {
            newTransaction.date = date;
        }

        this.props.createTransaction(newTransaction);

        this.setState({ name: '', value: '0', income: false });
    }

    enterEditMode(transaction) {
        let {
            id,
            name,
            value,
            category,
            income,
            official_date
        } = transaction;

        if (value < 0) {
            value *= -1;
        }

        this.setState({
            id,
            name,
            value,
            category,
            mode: 'edit',
            income: !!income,
            dateIsNow: false,
            date: (0, _moment2.default)(official_date).format('YYYY.MM.DD HH:mm')
        });
    }

    save() {
        const {
            id,
            name,
            value,
            income,
            category,
            date
        } = this.state;

        const editedTransaction = {
            id,
            name,
            value,
            income,
            category,
            date
        };

        console.log('save', editedTransaction);

        this.props.saveTransaction(editedTransaction);
        this.props.cancelEdit();
        this.setState(this.initialState(this.props));
    }

    handleType(e) {
        if (e.keyCode == 13 && this.canSubmit()) {
            this.submit();
        }
    }

    getMomentFromFormatted(date) {
        return (0, _moment2.default)(date, validDateFormats);
    }
}
exports.default = TransactionInputPanel;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _Navbar = __webpack_require__(9);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Nav = __webpack_require__(21);

var _Nav2 = _interopRequireDefault(_Nav);

var _NavDropdown = __webpack_require__(78);

var _NavDropdown2 = _interopRequireDefault(_NavDropdown);

var _NavItem = __webpack_require__(22);

var _NavItem2 = _interopRequireDefault(_NavItem);

var _MenuItem = __webpack_require__(76);

var _MenuItem2 = _interopRequireDefault(_MenuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']; /**
                                                                                                                                      * Created by lerayne on 11.02.17.
                                                                                                                                      */

class TransactionsControls extends _react.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateFrom: props.dateFrom,
            dateTo: props.dateTo
        };
    }

    render() {

        const { dateFrom } = this.props;
        const momentFrom = (0, _moment2.default)(dateFrom);
        const currentMonth = momentFrom.month();
        const currentYear = momentFrom.year();

        return _react2.default.createElement(
            _Navbar2.default,
            { inverse: true, className: 'narrow' },
            _react2.default.createElement(
                _Nav2.default,
                null,
                _react2.default.createElement(
                    _NavDropdown2.default,
                    { title: currentYear, id: 'basic-nav-dropdown' },
                    _react2.default.createElement(
                        _MenuItem2.default,
                        { disabled: true },
                        currentYear
                    )
                ),
                _react2.default.createElement(
                    _NavDropdown2.default,
                    { title: months[currentMonth], id: 'basic-nav-dropdown' },
                    months.map((name, i) => _react2.default.createElement(
                        _MenuItem2.default,
                        {
                            key: i,
                            disabled: currentMonth == i,
                            onClick: () => this.setMonth(i)
                        },
                        name
                    ))
                )
            )
        );
    }

    setMonth(index) {

        const { dateFrom } = this.props;
        const newMoment = (0, _moment2.default)(dateFrom).clone().month(index);
        const newDateFrom = newMoment.clone().startOf('month').valueOf();
        const newDateTo = newMoment.clone().endOf('month').valueOf();

        this.props.setDate(newDateFrom, newDateTo);
    }
}
exports.default = TransactionsControls;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TransactionsList;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(10);

var _Table2 = _interopRequireDefault(_Table);

var _ButtonGroup = __webpack_require__(19);

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _classnames = __webpack_require__(68);

var _classnames2 = _interopRequireDefault(_classnames);

var _ShortDate = __webpack_require__(46);

var _ShortDate2 = _interopRequireDefault(_ShortDate);

__webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 11.01.17.
 */

function TransactionsList({
    transactions,
    categories,
    deleteTransaction,
    editTransaction
}) {
    return _react2.default.createElement(
        'div',
        { className: 'TransactionsList' },
        _react2.default.createElement(
            _Table2.default,
            { responsive: true, condensed: true, striped: true, className: 'main-table' },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u0414\u0430\u0442\u0430'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u0411\u0435\u043D\u0435\u0444\u0438\u0446\u0438\u0430\u0440\u044B'
                    ),
                    _react2.default.createElement(
                        'th',
                        { style: { textAlign: 'right' } },
                        '\u0421\u0443\u043C\u043C\u0430'
                    ),
                    _react2.default.createElement(
                        'th',
                        { style: { textAlign: 'right' } },
                        '\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F'
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                transactions.map(ta => {
                    const categoryIndex = categories.findIndex(cat => cat.id == ta.category);
                    const categoryName = categoryIndex > -1 ? categories[categoryIndex].name : '';

                    return _react2.default.createElement(
                        'tr',
                        { key: ta.id },
                        _react2.default.createElement(
                            'td',
                            null,
                            _react2.default.createElement(_ShortDate2.default, { momentDate: ta.official_date })
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            ta.name
                        ),
                        _react2.default.createElement(
                            'td',
                            null,
                            categoryName
                        ),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement('td', null),
                        _react2.default.createElement(
                            'td',
                            {
                                className: (0, _classnames2.default)('ta-value', {
                                    'text-success': ta.value > 0,
                                    'text-danger': ta.value < 0
                                }),
                                style: { textAlign: 'right' }
                            },
                            ta.value > 0 && '+',
                            ta.value,
                            ' \u0433\u0440\u043D'
                        ),
                        _react2.default.createElement(
                            'td',
                            { style: { textAlign: 'right' } },
                            _react2.default.createElement(
                                _ButtonGroup2.default,
                                { bsSize: 'xsmall' },
                                _react2.default.createElement(
                                    _Button2.default,
                                    { onClick: () => editTransaction(ta.id) },
                                    '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C'
                                ),
                                _react2.default.createElement(
                                    _Button2.default,
                                    { onClick: () => deleteTransaction(ta.id) },
                                    '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
                                )
                            )
                        )
                    );
                })
            )
        )
    );
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = TransactionsSummary;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Table = __webpack_require__(10);

var _Table2 = _interopRequireDefault(_Table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 14.01.17.
 */

function TransactionsSummary({
    totalIncome,
    totalExpenses,
    expectedRemains
}) {
    return _react2.default.createElement(
        'div',
        { className: 'TransactionsSummary' },
        _react2.default.createElement(
            _Table2.default,
            { responsive: true, condensed: true, striped: true },
            _react2.default.createElement(
                'thead',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u0412\u0441\u0435\u0433\u043E \u0434\u043E\u0445\u043E\u0434\u043E\u0432'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u0412\u0441\u0435\u0433\u043E \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432'
                    ),
                    _react2.default.createElement(
                        'th',
                        null,
                        '\u0420\u0430\u0441\u0441\u0447\u0435\u0442\u043D\u044B\u0439 \u043E\u0441\u0442\u0430\u0442\u043E\u043A'
                    )
                )
            ),
            _react2.default.createElement(
                'tbody',
                null,
                _react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        { className: 'text-success' },
                        totalIncome
                    ),
                    _react2.default.createElement(
                        'td',
                        { className: 'text-danger' },
                        totalExpenses
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        expectedRemains
                    )
                )
            )
        )
    );
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(23);

var _reduxThunk = __webpack_require__(84);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(58);

var _reducers2 = _interopRequireDefault(_reducers);

var _promiseMiddleware = __webpack_require__(56);

var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 07.01.17.
 */

function configureStore(initialState = {}) {

    let enhancer;
    const middlewares = (0, _redux.applyMiddleware)(_reduxThunk2.default, _promiseMiddleware2.default);

    if (true) {

        const DevTools = __webpack_require__(30).default;

        enhancer = (0, _redux.compose)(middlewares, DevTools.instrument());
    } else {
        enhancer = middlewares;
    }

    const store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);

    if (false) {
        module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers/index').default));
    }

    return store;
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _Grid = __webpack_require__(74);

var _Grid2 = _interopRequireDefault(_Grid);

var _Nav = __webpack_require__(21);

var _Nav2 = _interopRequireDefault(_Nav);

var _Navbar = __webpack_require__(9);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _NavItem = __webpack_require__(22);

var _NavItem2 = _interopRequireDefault(_NavItem);

__webpack_require__(62);

var _reactRouter = __webpack_require__(11);

var _LinkContainer = __webpack_require__(80);

var _LinkContainer2 = _interopRequireDefault(_LinkContainer);

__webpack_require__(65);

__webpack_require__(66);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const propTypes = {
    children: _react.PropTypes.node
}; /**
    * Created by lerayne on 07.01.17.
    */

class App extends _react.Component {
    render() {
        return _react2.default.createElement(
            'div',
            { className: 'main' },
            _react2.default.createElement(
                _Navbar2.default,
                null,
                _react2.default.createElement(
                    _Navbar2.default.Header,
                    null,
                    _react2.default.createElement(
                        _Navbar2.default.Brand,
                        null,
                        _react2.default.createElement(
                            _reactRouter.Link,
                            { to: '/' },
                            'EXPENSES'
                        )
                    ),
                    _react2.default.createElement(_Navbar2.default.Toggle, null)
                ),
                _react2.default.createElement(
                    _Navbar2.default.Collapse,
                    null,
                    _react2.default.createElement(
                        _Nav2.default,
                        { navbar: true },
                        _react2.default.createElement(
                            _LinkContainer2.default,
                            { to: '/categories' },
                            _react2.default.createElement(
                                _NavItem2.default,
                                null,
                                '\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438'
                            )
                        ),
                        this.props.user.id > 0 && _react2.default.createElement(
                            _NavItem2.default,
                            { href: '/logout' },
                            'Log out'
                        )
                    )
                )
            ),
            _react2.default.createElement(
                _Grid2.default,
                null,
                this.props.children
            )
        );
    }
}

App.propTypes = propTypes;

exports.default = App = (0, _reactRedux.connect)(state => ({
    user: state.user
}))(App);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _CategoriesList = __webpack_require__(43);

var _CategoriesList2 = _interopRequireDefault(_CategoriesList);

var _CategoriesControls = __webpack_require__(42);

var _CategoriesControls2 = _interopRequireDefault(_CategoriesControls);

var _CategoryModal = __webpack_require__(44);

var _CategoryModal2 = _interopRequireDefault(_CategoryModal);

var _categoriesActions = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by lerayne on 14.01.17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */

class CategoriesPage extends _react.Component {

    static initialize(dispatch) {
        return dispatch((0, _categoriesActions.categoriesPageInit)());
    }

    constructor() {
        super();
        this.state = {
            modalOpen: false
        };
    }

    componentWillMount() {
        //SSR!
    }

    render() {
        var _this = this;

        const {
            categories,

            dispatch
        } = this.props;

        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_CategoriesControls2.default, {
                createCategory: () => this.setState({ modalOpen: true })
            }),
            _react2.default.createElement(_CategoriesList2.default, {
                categories
            }),
            this.state.modalOpen && _react2.default.createElement(_CategoryModal2.default, {
                close: () => this.setState({ modalOpen: false }),
                create: (() => {
                    var _ref = _asyncToGenerator(function* (category) {
                        yield dispatch((0, _categoriesActions.createCategory)(category));
                        _this.setState({ modalOpen: false });
                    });

                    return function create(_x) {
                        return _ref.apply(this, arguments);
                    };
                })()
            })
        );
    }
}

CategoriesPage.loginRequired = true;
exports.default = CategoriesPage = (0, _reactRedux.connect)(state => ({
    categories: state.categories.list
}))(CategoriesPage);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _FormGroup = __webpack_require__(8);

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _FormControl = __webpack_require__(6);

var _FormControl2 = _interopRequireDefault(_FormControl);

var _ControlLabel = __webpack_require__(20);

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _Button = __webpack_require__(3);

var _Button2 = _interopRequireDefault(_Button);

var _Alert = __webpack_require__(72);

var _Alert2 = _interopRequireDefault(_Alert);

var _url = __webpack_require__(12);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 22.03.17.
 */

class LoginPage extends _react.Component {

    render() {
        const mainStyle = {};
        const formStyle = {
            width: '400px',
            margin: 'auto'
        };

        const { query } = _url2.default.parse(_url2.default.format(this.props.location), true);

        const actionPath = '/login';

        return _react2.default.createElement(
            'div',
            { style: mainStyle },
            _react2.default.createElement(
                'form',
                { method: 'POST', action: actionPath, style: formStyle },
                _react2.default.createElement('input', { type: 'hidden', name: 'nextUrl', value: query.next }),
                query.error && _react2.default.createElement(
                    _Alert2.default,
                    { bsStyle: 'danger' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Email or password does not match!'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        'Try again or visit us later'
                    )
                ),
                _react2.default.createElement(
                    _FormGroup2.default,
                    null,
                    _react2.default.createElement(
                        _ControlLabel2.default,
                        null,
                        'email:'
                    ),
                    _react2.default.createElement(_FormControl2.default, { type: 'text', name: 'email' })
                ),
                _react2.default.createElement(
                    _FormGroup2.default,
                    null,
                    _react2.default.createElement(
                        _ControlLabel2.default,
                        null,
                        'password:'
                    ),
                    _react2.default.createElement(_FormControl2.default, { type: 'password', name: 'password' })
                ),
                _react2.default.createElement(
                    _Button2.default,
                    { type: 'submit' },
                    'Login'
                )
            )
        );
    }
}

LoginPage.anonymousRequired = true;
exports.default = LoginPage = (0, _reactRedux.connect)()(LoginPage);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by lerayne on 09.01.17.
                                                                                                                                                                                                                                                                   */

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(5);

var _moment = __webpack_require__(2);

var _moment2 = _interopRequireDefault(_moment);

var _transactionsActions = __webpack_require__(41);

var _TransactionInputPanel = __webpack_require__(47);

var _TransactionInputPanel2 = _interopRequireDefault(_TransactionInputPanel);

var _TransactionsList = __webpack_require__(49);

var _TransactionsList2 = _interopRequireDefault(_TransactionsList);

var _TransactionsSummary = __webpack_require__(50);

var _TransactionsSummary2 = _interopRequireDefault(_TransactionsSummary);

var _TransactionsControls = __webpack_require__(48);

var _TransactionsControls2 = _interopRequireDefault(_TransactionsControls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.locale('ru');

class TransactionsPage extends _react.Component {
    constructor(...args) {
        var _temp;

        return _temp = super(...args), this.state = {
            activeTransaction: false
        }, _temp;
    }

    static initialize(dispatch) {
        return dispatch((0, _transactionsActions.transactionsPageInit)());
    }

    componentDidMount() {
        if (!this.props.transactions.length) {
            TransactionsPage.initialize(this.props.dispatch);
        }
    }

    render() {

        let {
            transactions,
            totalIncome,
            totalExpenses,
            expectedRemains,
            dateFrom,
            dateTo,

            categories,

            dispatch
        } = this.props;

        const { activeTransaction } = this.state;

        transactions = transactions.map(ta => _extends({}, ta, {
            created: (0, _moment2.default)(ta.created),
            updated: (0, _moment2.default)(ta.updated),
            official_date: (0, _moment2.default)(ta.official_date)
        }));

        return _react2.default.createElement(
            'div',
            { id: 'TransactionsPage' },
            _react2.default.createElement(_TransactionsControls2.default, {
                dateFrom,
                dateTo,
                setDate: (from, to) => dispatch((0, _transactionsActions.setDateOffsetsUpdate)(from, to))
            }),
            _react2.default.createElement(_TransactionsSummary2.default, {
                totalIncome,
                totalExpenses,
                expectedRemains
            }),
            _react2.default.createElement(_TransactionsList2.default, {
                transactions,
                categories,
                deleteTransaction: this.confirmDeletion.bind(this),
                editTransaction: this.enterEditMode.bind(this)
            }),
            _react2.default.createElement(_TransactionInputPanel2.default, {
                categories,
                transaction: activeTransaction,
                createTransaction: ta => dispatch((0, _transactionsActions.createTransaction)(ta)),
                saveTransaction: ta => dispatch((0, _transactionsActions.editTransaction)(ta.id, ta)),
                cancelEdit: () => this.setState({ activeTransaction: false })
            })
        );
    }

    confirmDeletion(id) {
        const transaction = this.props.transactions.find(ta => ta.id == id);
        if (confirm(`Удалить транзакцию "${transaction.name}"?`)) {
            this.props.dispatch((0, _transactionsActions.deleteTransaction)(id));
        }
    }

    enterEditMode(id) {
        const activeTransaction = this.props.transactions.find(ta => ta.id == id);
        this.setState({
            activeTransaction
        });
    }
}

TransactionsPage.loginRequired = true;
exports.default = TransactionsPage = (0, _reactRedux.connect)(state => ({
    transactions: state.transactions.list,
    totalIncome: state.transactions.totalIncome,
    totalExpenses: state.transactions.totalExpenses,
    expectedRemains: state.transactions.expectedRemains,
    dateFrom: state.transactions.dateFrom,
    dateTo: state.transactions.dateTo,

    categories: state.categories.list
}))(TransactionsPage);

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = promiseMiddleware;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * Created by lerayne on 17.01.17.
 */

function promiseMiddleware({ getState, dispatch }) {
    return next => action => {
        if (!action.promise) {
            return next(action);
        } else {
            const { type, promise } = action,
                  rest = _objectWithoutProperties(action, ['type', 'promise']);

            next(action);

            return promise.then(result => {
                next(_extends({}, rest, {
                    payload: result,
                    type: type + '_SUCCESS'
                }));

                return true;
            }, error => {
                console.error(error);
                next(_extends({}, rest, {
                    payload: error,
                    type: type + '_FAILURE'
                }));

                return false;
            });
        }
    };
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'FETCH_CATEGORIES_SUCCESS':
            return _extends({}, state, {
                list: payload.list
            });

        case 'CREATE_CATEGORY_SUCCESS':
            return _extends({}, state, {
                list: [payload, ...state.list]
            });

        default:
            return state;
    }
};

/**
 * Created by lerayne on 19.02.17.
 */

const initialState = {
    list: []
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(23);

var _transactionsReducer = __webpack_require__(59);

var _transactionsReducer2 = _interopRequireDefault(_transactionsReducer);

var _categoriesReducer = __webpack_require__(57);

var _categoriesReducer2 = _interopRequireDefault(_categoriesReducer);

var _userReducer = __webpack_require__(60);

var _userReducer2 = _interopRequireDefault(_userReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 07.01.17.
 */

exports.default = (0, _redux.combineReducers)({
    transactions: _transactionsReducer2.default,
    categories: _categoriesReducer2.default,
    user: _userReducer2.default
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by lerayne on 10.01.17.
                                                                                                                                                                                                                                                                   */

exports.default = expensesReducer;

var _immutabilityHelper = __webpack_require__(69);

var _immutabilityHelper2 = _interopRequireDefault(_immutabilityHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const initialState = {
    list: [],
    totalIncome: 0,
    totalExpenses: 0,
    expectedRemains: 0,
    dateFrom: 0,
    dateTo: 0
};

function expensesReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {

        case 'SET_DATE_OFFSETS':
            return _extends({}, state, {
                dateFrom: payload.dateFrom,
                dateTo: payload.dateTo
            });

        case 'FETCH_TRANSACTIONS_SUCCESS':
            return _extends({}, state, {
                list: payload.list
            });

        case 'CREATE_TRANSACTION_SUCCESS':
            return _extends({}, state, {
                list: [payload, ...state.list]
            });

        case 'DELETE_TRANSACTION_SUCCESS':
            return _extends({}, state, {
                list: state.list.filter(item => item.id != payload.id)
            });

        case 'FETCH_SUMMARY_SUCCESS':
            const { totalIncome, totalExpenses, expectedRemains } = payload;
            return _extends({}, state, {
                totalIncome,
                totalExpenses,
                expectedRemains
            });

        case 'EDIT_TRANSACTION_SUCCESS':
            const targetTAIndex = state.list.findIndex(ta => ta.id == payload.id);

            console.log('EDIT_TRANSACTION_SUCCESS', payload, targetTAIndex);

            if (targetTAIndex == -1) return state;

            return (0, _immutabilityHelper2.default)(state, { list: { [targetTAIndex]: { $set: payload } } });

        default:
            return state;
    }
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;
/**
 * Created by lerayne on 22.03.17.
 */

const initialState = {
    id: -1,
    email: ''
};

function userReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'SET_USER':
            return _extends({}, state, {
                id: payload.id,
                email: payload.email
            });

        default:
            return state;
    }
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = RoutesComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(11);

var _App = __webpack_require__(52);

var _App2 = _interopRequireDefault(_App);

var _TransactionsPage = __webpack_require__(55);

var _TransactionsPage2 = _interopRequireDefault(_TransactionsPage);

var _CategoriesPage = __webpack_require__(53);

var _CategoriesPage2 = _interopRequireDefault(_CategoriesPage);

var _LoginPage = __webpack_require__(54);

var _LoginPage2 = _interopRequireDefault(_LoginPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by lerayne on 07.01.17.
 */

function RoutesComponent(store) {
    return _react2.default.createElement(
        _reactRouter.Route,
        { component: _App2.default, path: '/' },
        _react2.default.createElement(_reactRouter.IndexRoute, { component: _TransactionsPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'categories', component: _CategoriesPage2.default }),
        _react2.default.createElement(_reactRouter.Route, { path: 'login', component: _LoginPage2.default })
    );
}

/***/ }),
/* 62 */
/***/ (function(module, exports) {



/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {
	"main": "TransactionInputPanel-main--3n3ME"
};

/***/ }),
/* 64 */
/***/ (function(module, exports) {



/***/ }),
/* 65 */
/***/ (function(module, exports) {



/***/ }),
/* 66 */
/***/ (function(module, exports) {



/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("immutability-helper");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("mysql");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Alert");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Checkbox");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Grid");

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/InputGroup");

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/MenuItem");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/Modal");

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/lib/NavDropdown");

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = require("react-router-bootstrap/lib/LinkContainer");

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-dock-monitor");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-log-monitor");

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWM5OWY0ODk3M2FiYzE1ZTk4ZGIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2RiLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVxdWlyZShcXFwiLi9jb25maWcuanNcXFwiKVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VjdXJpdHkvY2hlY2tVc2VyQXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTmF2YmFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2dldFVzZXJBdXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvc2VjdXJpdHkvZ3JhbnRBY2Nlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9hY3Rpb25zL2NhdGVnb3JpZXNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYXBpLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uR3JvdXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTmF2XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZJdGVtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2NyZWF0ZVN0YXRpY1BhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9zZWN1cml0eS9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NldEFwaUxpc3RlbmVycy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsaWVudC9jb21wb25lbnRzL0RldlRvb2xzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2NyZWF0ZUNhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2NyZWF0ZVRyYW5zYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2RlbGV0ZVRyYW5zYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2VkaXRUcmFuc2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL2FwaS9nZXRDYXRlZ29yaWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvYXBpL2dldFN1bW1hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci9hcGkvZ2V0VHJhbnNhY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2ZXIvZ2V0SFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyL3NlY3VyaXR5L2NyZWF0ZVRva2VuLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvYWN0aW9ucy90cmFuc2FjdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9DYXRlZ29yaWVzQ29udHJvbHMvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9DYXRlZ29yaWVzTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0NhdGVnb3J5TW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9EYXRlSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9TaG9ydERhdGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9UcmFuc2FjdGlvbklucHV0UGFuZWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9UcmFuc2FjdGlvbnNDb250cm9scy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0xpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29tcG9uZW50cy9UcmFuc2FjdGlvbnNTdW1tYXJ5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9BcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvY29udGFpbmVycy9DYXRlZ29yaWVzUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL0xvZ2luUGFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9jb250YWluZXJzL1RyYW5zYWN0aW9uc1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcHJvbWlzZU1pZGRsZXdhcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9jYXRlZ29yaWVzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcmVkdWNlcnMvdHJhbnNhY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3JlZHVjZXJzL3VzZXJSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvcm91dGVzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JbnB1dFBhbmVsL1RyYW5zYWN0aW9uSW5wdXRQYW5lbC5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0anNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW1tdXRhYmlsaXR5LWhlbHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXlzcWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9DaGVja2JveFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvSW5wdXRHcm91cFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTWVudUl0ZW1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL01vZGFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZEcm9wZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItYm9vdHN0cmFwL2xpYi9MaW5rQ29udGFpbmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtZGV2dG9vbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1kb2NrLW1vbml0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1sb2ctbW9uaXRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsicXVlcnkiLCJkYiIsImNyZWF0ZUNvbm5lY3Rpb24iLCJjb25uZWN0IiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwibG9nIiwidGhyZWFkSWQiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtYXQiLCJwYXJhbXMiLCJwdXNoIiwicm93cyIsImNoZWNrVXNlckF1dGgiLCJyZXEiLCJjb29raWVzIiwiYWNjZXNzX3Rva2VuIiwidmVyaWZ5IiwiZGVjb2RlZCIsImVtYWlsIiwiU1FMUXVlcnkiLCJkYlJlc3AiLCJnZXRVc2VyQXV0aCIsImdldFRyYW5zYWN0aW9ucyIsImNyZWF0ZVRyYW5zYWN0aW9uIiwiZGVsZXRlVHJhbnNhY3Rpb24iLCJnZXRTdW1tYXJ5IiwiZ2V0Q2F0ZWdvcmllcyIsImNyZWF0ZUNhdGVnb3J5IiwiZWRpdFRyYW5zYWN0aW9uIiwicmVzIiwiaW5zZWN1cmVVc2VyIiwicGFzc3dvcmRfaGFzaCIsInJlc3QiLCJ1c2VyIiwiaXAiLCJ0b2tlbiIsImNvb2tpZSIsInBhdGgiLCJkb21haW4iLCJtYXhBZ2UiLCJncmFudEFjY2VzcyIsImNhdGVnb3JpZXNQYWdlSW5pdCIsImZldGNoQ2F0ZWdvcmllcyIsImRpc3BhdGNoIiwidHlwZSIsInByb21pc2UiLCJjYXRlZ29yeSIsImNyZWF0ZVByb21pc2UiLCJhcGkiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImNyZWF0ZVN0YXRpY1BhZ2UiLCJzdG9yZSIsInVybCIsInJvdXRlcyIsImxvY2F0aW9uIiwicmVkaXJlY3RMb2NhdGlvbiIsInJlbmRlclByb3BzIiwicmVkaXJlY3QiLCJwYXRobmFtZSIsInNlYXJjaCIsInN0YXR1cyIsInNlbmQiLCJtZXNzYWdlIiwicGF5bG9hZCIsImN1cnJlbnRVc2VyIiwicHJvbWlzZXMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwicm91dGUiLCJXcmFwcGVkQ29tcG9uZW50IiwibG9naW5SZXF1aXJlZCIsIm5leHQiLCJhbm9ueW1vdXNSZXF1aXJlZCIsImluaXRpYWxpemUiLCJhbGwiLCJ0aGVuIiwiY29tcG9uZW50SFRNTCIsInJlbmRlclRvU3RyaW5nIiwiZW5kIiwiZ2V0U3RhdGUiLCJyZWRpcmVjdFRvRmFpbHVyZSIsImJvZHkiLCJuZXh0VXJsIiwicGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsInBhc3N3b3JkIiwibG9naW4iLCJ1c2VyQXV0aGVkIiwianNvbiIsImF1dGhvcml6ZWQiLCJzZXRBcGlMaXN0ZW5lcnMiLCJhcHAiLCJnZXQiLCJkYXRlRnJvbSIsImRhdGVUbyIsInBvc3QiLCJwdXQiLCJpZCIsImRlbGV0ZSIsIkRldlRvb2xzIiwidXNlIiwidXJsZW5jb2RlZCIsImV4dGVuZGVkIiwic3RhdGljIiwiY2xlYXJDb29raWUiLCJQT1JUIiwiTElTVEVOIiwibGlzdGVuIiwibmV3Um93IiwibmFtZSIsImNyZWF0aW9uUmVzdWx0IiwiT2JqZWN0Iiwia2V5cyIsInZhbHVlcyIsImluc2VydElkIiwidGEiLCJub3ciLCJkYXRlIiwic3BsaXQiLCJvZmZpY2lhbE1vbWVudCIsImlzVmFsaWQiLCJvZmZpY2lhbFRTIiwidmFsdWVPZiIsInJlYWxUUyIsImluY29tZSIsInBhcnNlSW50IiwidmFsdWUiLCJpc05hTiIsImNyZWF0ZWQiLCJ1cGRhdGVkIiwib2ZmaWNpYWxfZGF0ZSIsImNyZWF0aW9uUmVzcG9uc2UiLCJkZWxldGlvblJlc3VsdCIsImVkaXRlZFRBIiwiZWRpdFJlc3VsdCIsImxpc3QiLCJzdW1tYXJ5IiwidG90YWxJbmNvbWUiLCJ0b3RhbEV4cGVuc2VzIiwiZXhwZWN0ZWRSZW1haW5zIiwicmVuZGVySFRNTCIsImFzc2V0VXJsIiwiaW5pdGlhbFN0YXRlIiwiaHRtbCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjcmVhdGVUb2tlbiIsIm9wdGlvbnNPdmVycmlkZSIsIm9wdGlvbnMiLCJleHBpcmVzSW4iLCJzaWduIiwidHJhbnNhY3Rpb25zUGFnZUluaXQiLCJ0cmFuc2FjdGlvbnNQYWdlTG9hZEFsbCIsInNldERhdGVPZmZzZXRzIiwic2V0RGF0ZU9mZnNldHNVcGRhdGUiLCJmZXRjaFRyYW5zYWN0aW9ucyIsImZldGNoU3VtbWFyeSIsImNsb25lIiwic3RhcnRPZiIsImVuZE9mIiwidHJhbnNhY3Rpb25zIiwiZnJvbSIsInRvIiwiZWRpdFByb21pc2UiLCJDYXRlZ29yaWVzQ29udHJvbHMiLCJDYXRlZ29yaWVzTGlzdCIsImNhdGVnb3JpZXMiLCJtYXAiLCJDYXRlZ29yeU1vZGFsIiwic3RhdGUiLCJuZXdOYW1lIiwicmVuZGVyIiwiY2xvc2UiLCJwcm9wcyIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImNyZWF0ZSIsIkRhdGVJbnB1dCIsInZhbGlkYXRpb24iLCJjb21wb25lbnRXaWxsTW91bnQiLCJzZXRWYWxpZGF0aW9uU3RhdGUiLCJjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIiwibmV3UHJvcHMiLCJvbkNoYW5nZSIsImZvcm1hdHMiLCJkaXNwbGF5IiwidmFsaWRhdGUiLCJwcm9wVHlwZXMiLCJhcnJheU9mIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiLCJTaG9ydERhdGUiLCJtb21lbnREYXRlIiwidmFsaWREYXRlRm9ybWF0cyIsIlRyYW5zYWN0aW9uSW5wdXRQYW5lbCIsImNvbnN0cnVjdG9yIiwibW9kZSIsInN1YmNhdGVnb3J5IiwiYmVuZWZpY2lhcnMiLCJkYXRlSXNOb3ciLCJ0cmFuc2FjdGlvbiIsImVudGVyRWRpdE1vZGUiLCJjYW5jZWxFZGl0IiwibWFpbiIsImhhbmRsZVR5cGUiLCJzdWJtaXQiLCJjYW5TdWJtaXQiLCJzYXZlIiwiY2hlY2tlZCIsInRleHREZWNvcmF0aW9uIiwibmV3RGF0ZSIsImdldE1vbWVudEZyb21Gb3JtYXR0ZWQiLCJuZXdUcmFuc2FjdGlvbiIsImVkaXRlZFRyYW5zYWN0aW9uIiwic2F2ZVRyYW5zYWN0aW9uIiwia2V5Q29kZSIsIm1vbnRocyIsIlRyYW5zYWN0aW9uc0NvbnRyb2xzIiwibW9tZW50RnJvbSIsImN1cnJlbnRNb250aCIsIm1vbnRoIiwiY3VycmVudFllYXIiLCJ5ZWFyIiwiaSIsInNldE1vbnRoIiwiaW5kZXgiLCJuZXdNb21lbnQiLCJuZXdEYXRlRnJvbSIsIm5ld0RhdGVUbyIsInNldERhdGUiLCJUcmFuc2FjdGlvbnNMaXN0IiwidGV4dEFsaWduIiwiY2F0ZWdvcnlJbmRleCIsImZpbmRJbmRleCIsImNhdCIsImNhdGVnb3J5TmFtZSIsIlRyYW5zYWN0aW9uc1N1bW1hcnkiLCJjb25maWd1cmVTdG9yZSIsImVuaGFuY2VyIiwibWlkZGxld2FyZXMiLCJpbnN0cnVtZW50IiwibW9kdWxlIiwiaG90IiwiYWNjZXB0IiwicmVwbGFjZVJlZHVjZXIiLCJjaGlsZHJlbiIsIm5vZGUiLCJBcHAiLCJDYXRlZ29yaWVzUGFnZSIsIm1vZGFsT3BlbiIsIkxvZ2luUGFnZSIsIm1haW5TdHlsZSIsImZvcm1TdHlsZSIsIndpZHRoIiwibWFyZ2luIiwicGFyc2UiLCJhY3Rpb25QYXRoIiwibG9jYWxlIiwiVHJhbnNhY3Rpb25zUGFnZSIsImFjdGl2ZVRyYW5zYWN0aW9uIiwiY29tcG9uZW50RGlkTW91bnQiLCJsZW5ndGgiLCJjb25maXJtRGVsZXRpb24iLCJmaW5kIiwiY29uZmlybSIsInByb21pc2VNaWRkbGV3YXJlIiwiYWN0aW9uIiwicmVzdWx0IiwiZXhwZW5zZXNSZWR1Y2VyIiwiZmlsdGVyIiwiaXRlbSIsInRhcmdldFRBSW5kZXgiLCIkc2V0IiwidXNlclJlZHVjZXIiLCJSb3V0ZXNDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDaEVBLGtDOzs7Ozs7Ozs7Ozs7UUNvQmdCQSxLLEdBQUFBLEs7O0FBaEJoQjs7OztBQUNBOzs7O0FBTEE7Ozs7QUFPQSxNQUFNQyxLQUFLLGdCQUFNQyxnQkFBTixrQkFBWDs7QUFFQUQsR0FBR0UsT0FBSCxDQUFXQyxPQUFPO0FBQ2QsUUFBSUEsR0FBSixFQUFTO0FBQ0xDLGdCQUFRQyxLQUFSLENBQWMsMkJBQWQ7QUFDQSxlQUFPLElBQVA7QUFDSDs7QUFFREQsWUFBUUUsR0FBUixDQUFZLHVCQUFaLEVBQXFDTixHQUFHTyxRQUF4QztBQUNILENBUEQ7O2tCQVNlUCxFO0FBRVIsU0FBU0QsS0FBVCxDQUFlQSxLQUFmLEVBQXNCUyxPQUFLLEtBQTNCLEVBQWlDO0FBQ3BDLFdBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFx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QUEsd0Q7Ozs7OztBQ0FBLHVEOzs7Ozs7QUNBQSx3QyIsImZpbGUiOiJleHBlbnNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYzk5ZjQ4OTczYWJjMTVlOThkYiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwOS4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwnXG5pbXBvcnQge2RiQ29uZmlnfSBmcm9tICdjb25maWcnXG5cbmNvbnN0IGRiID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbihkYkNvbmZpZylcblxuZGIuY29ubmVjdChlcnIgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgY29ubmVjdGlvbiBlcnJvcicpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coJ0RhdGFiYXNlIGNvbm5lY3RlZCBhcycsIGRiLnRocmVhZElkKVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZGJcblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5KHF1ZXJ5LCBkYXRhPWZhbHNlKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXG4gICAgICAgIHF1ZXJ5ID0gbXlzcWwuZm9ybWF0KHF1ZXJ5LCBkYXRhKVxuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IFtxdWVyeV1cblxuICAgICAgICBwYXJhbXMucHVzaCgoZXJyLCByb3dzKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSByZWplY3QoZXJyKVxuICAgICAgICAgICAgaWYgKHJvd3MpIHJlc29sdmUocm93cylcbiAgICAgICAgfSlcblxuICAgICAgICBkYi5xdWVyeSguLi5wYXJhbXMpXG4gICAgfSlcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2RiLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9tZW50XCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvblwiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vY29uZmlnLmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVxdWlyZShcXFwiLi9jb25maWcuanNcXFwiKVwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtcmVkdXhcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDIyLjAzLjE3LlxuICovXG5cbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJ1xuaW1wb3J0IHtzZWNyZXRLZXl9IGZyb20gJ2NvbmZpZydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hlY2tVc2VyQXV0aChyZXEpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgaWYgKCFyZXEuY29va2llcy5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqd3QudmVyaWZ5KHJlcS5jb29raWVzLmFjY2Vzc190b2tlbiwgc2VjcmV0S2V5LCAoZXJyLCBkZWNvZGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGVjb2RlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2VjdXJpdHkvY2hlY2tVc2VyQXV0aC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXBcIlxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvbGliL05hdmJhclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTmF2YmFyXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9UYWJsZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvVGFibGVcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3Qtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInVybFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAyMy4wMy4xNy5cbiAqL1xuXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckF1dGgoZW1haWwpIHtcbiAgICBjb25zdCBTUUxRdWVyeSA9IGBcbiAgICAgICAgU0VMRUNUIFxuICAgICAgICAgICAgaWQsIFxuICAgICAgICAgICAgZW1haWwsIFxuICAgICAgICAgICAgcGFzc3dvcmRfaGFzaCBcbiAgICAgICAgRlJPTSB1c2VycyBcbiAgICAgICAgV0hFUkUgZW1haWwgPSA/XG4gICAgYFxuXG4gICAgY29uc3QgZGJSZXNwID0gYXdhaXQgcXVlcnkoU1FMUXVlcnksIFtlbWFpbF0pXG5cbiAgICBpZiAoIWRiUmVzcFswXSkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGJSZXNwWzBdXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBpL2dldFVzZXJBdXRoLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMDkuMDEuMTcuXG4gKi9cblxuaW1wb3J0IGdldFRyYW5zYWN0aW9ucyBmcm9tICcuL2dldFRyYW5zYWN0aW9ucydcbmltcG9ydCBjcmVhdGVUcmFuc2FjdGlvbiBmcm9tICcuL2NyZWF0ZVRyYW5zYWN0aW9uJ1xuaW1wb3J0IGRlbGV0ZVRyYW5zYWN0aW9uIGZyb20gJy4vZGVsZXRlVHJhbnNhY3Rpb24nXG5pbXBvcnQgZ2V0U3VtbWFyeSBmcm9tICcuL2dldFN1bW1hcnknXG5pbXBvcnQgZ2V0Q2F0ZWdvcmllcyBmcm9tICcuL2dldENhdGVnb3JpZXMnXG5pbXBvcnQgY3JlYXRlQ2F0ZWdvcnkgZnJvbSAnLi9jcmVhdGVDYXRlZ29yeSdcbmltcG9ydCBlZGl0VHJhbnNhY3Rpb24gZnJvbSAnLi9lZGl0VHJhbnNhY3Rpb24nXG5pbXBvcnQgZ2V0VXNlckF1dGggZnJvbSAnLi9nZXRVc2VyQXV0aCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldFRyYW5zYWN0aW9ucyxcbiAgICBjcmVhdGVUcmFuc2FjdGlvbixcbiAgICBkZWxldGVUcmFuc2FjdGlvbixcbiAgICBnZXRTdW1tYXJ5LFxuICAgIGdldENhdGVnb3JpZXMsXG4gICAgY3JlYXRlQ2F0ZWdvcnksXG4gICAgZWRpdFRyYW5zYWN0aW9uLFxuICAgIGdldFVzZXJBdXRoXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvaW5kZXguanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAyMy4wMy4xNy5cbiAqL1xuXG5pbXBvcnQgbXMgZnJvbSAnbXMnXG5cbmltcG9ydCB7ZG9tYWlufSBmcm9tICdjb25maWcnXG5pbXBvcnQge2tleUV4cGlyZXNJbn0gZnJvbSAnY29uZmlnJ1xuaW1wb3J0IGNyZWF0ZVRva2VuIGZyb20gJy4vY3JlYXRlVG9rZW4nXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdyYW50QWNjZXNzKHJlcSwgcmVzLCBpbnNlY3VyZVVzZXIpIHtcblxuICAgIHRyeSB7XG4gICAgICAgIC8vIHJlbW92aW5nIHBhc3N3b3JkIGhhc2hcbiAgICAgICAgY29uc3Qge3Bhc3N3b3JkX2hhc2gsIC4uLnJlc3R9ID0gaW5zZWN1cmVVc2VyXG5cbiAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICBpcDogJzAuMC4wLjAnIC8vIHRvZG8gLSBjdXJyZW50IElQXG4gICAgICAgIH1cblxuICAgICAgICAvLyB0b2RvIC0gZ2V0IGRvbWFpbiBmcm9tIGVudiAoZG9lc250IHdvcmsgbm93IG9uIHByb2QpXG4gICAgICAgIC8vIGNvbnN0IGhvc3QgPSByZXEuZ2V0KCdob3N0JylcbiAgICAgICAgLy8gY29uc3QgaG9zdG5hbWUgPSBob3N0LnNwbGl0KCc6JylbMF1cblxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGNyZWF0ZVRva2VuKHVzZXIpXG5cbiAgICAgICAgcmVzLmNvb2tpZSgnYWNjZXNzX3Rva2VuJywgdG9rZW4sIHtcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGRvbWFpbixcbiAgICAgICAgICAgIG1heEFnZTogbXMoa2V5RXhwaXJlc0luKVxuICAgICAgICB9KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2dyYW50QWNjZXNzOicsIGVycm9yKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3NlY3VyaXR5L2dyYW50QWNjZXNzLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTkuMDIuMTcuXG4gKi9cblxuaW1wb3J0IGFwaSBmcm9tICcuLi9hcGknXG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRlZ29yaWVzUGFnZUluaXQoKXtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4gZGlzcGF0Y2goZmV0Y2hDYXRlZ29yaWVzKCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXMoKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOlwiRkVUQ0hfQ0FURUdPUklFU1wiLFxuICAgICAgICBwcm9taXNlOiBhcGkuZ2V0Q2F0ZWdvcmllcygpXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIGNvbnN0IGNyZWF0ZVByb21pc2UgPSBhcGkuY3JlYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpXG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTonQ1JFQVRFX0NBVEVHT1JZJyxcbiAgICAgICAgICAgIHByb21pc2U6IGNyZWF0ZVByb21pc2VcbiAgICAgICAgfSlcblxuICAgICAgICAvL2NyZWF0ZVByb21pc2UudGhlbigoKSA9PiBkaXNwYXRjaChmZXRjaENhdGVnb3JpZXMoKSkpXG5cbiAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2VcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9hY3Rpb25zL2NhdGVnb3JpZXNBY3Rpb25zLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTAuMDEuMTcuXG4gKi9cblxubGV0IGFwaVxuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICAgIGFwaSA9IHJlcXVpcmUoJy4uL2NsaWVudC9hcGknKS5kZWZhdWx0XG59IGVsc2Uge1xuICAgIGFwaSA9IHJlcXVpcmUoJy4uL3NlcnZlci9hcGknKS5kZWZhdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFwaVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvYXBpLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwianNvbndlYnRva2VuXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uR3JvdXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbkdyb3VwXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWxcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL05hdlwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW1cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL05hdkl0ZW1cIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwOC4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tL3NlcnZlcidcbmltcG9ydCB7bWF0Y2gsIFJvdXRlckNvbnRleHR9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtmb3JtYXQgYXMgdXJsRm9ybWF0fSBmcm9tICd1cmwnXG5cbmltcG9ydCBjaGVja1VzZXJBdXRoIGZyb20gJy4vc2VjdXJpdHkvY2hlY2tVc2VyQXV0aCdcbmltcG9ydCBncmFudEFjY2VzcyBmcm9tICcuL3NlY3VyaXR5L2dyYW50QWNjZXNzJ1xuaW1wb3J0IFJvdXRlc0NvbXBvbmVudCBmcm9tICcuLi9zaGFyZWQvcm91dGVzJ1xuaW1wb3J0IGdldEhUTUwgZnJvbSAnLi9nZXRIVE1MJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4uL3NoYXJlZC9jb25maWd1cmVTdG9yZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3RhdGljUGFnZShyZXEsIHJlcykge1xuXG4gICAgLy8g0YHQvtC30LTQsNC10Lwgc3RvcmUgKNC00LvRjyDQutCw0LbQtNC+0LPQviDQv9C+0LTQutC70Y7Rh9C10L3QuNGPIHN0b3JlINCx0YPQtNC10YIg0YHQstC+0LksINGCLtC6LiBzdG9yZSAtINGN0YLQviDQvtGC0YDQsNC20LXQvdC40LVcbiAgICAvLyDQutC70LjQtdC90YLRgdC60L7Qs9C+INGB0L7RgdGC0L7Rj9C90LjRjywg0LAg0L3QtSDRgdC+0YHRgtC+0Y/QvdC40Y8g0LLRgdC10LPQviDQv9GA0LjQu9C+0LbQtdC90LjRjylcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKClcbiAgICBjb25zdCB7dXJsfSA9IHJlcVxuXG4gICAgLy8g0YHQvNC+0YLRgNC40LwsINGB0L7QvtGC0LLQtdGC0YHQstGD0LXRgiDQu9C4INC/0YPRgtGMINC30LDQv9GA0L7RgdCwINC+0LTQvdC+0LzRgyDQuNC3INC/0YPRgtC10Lkg0YDQvtGD0YLQuNC90LPQsFxuICAgIG1hdGNoKHtyb3V0ZXM6IFJvdXRlc0NvbXBvbmVudChzdG9yZSksIGxvY2F0aW9uOiB1cmx9LCBhc3luYyAoZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzKSA9PiB7XG5cbiAgICAgICAgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHsgLy8g0JXRgdC70Lgg0L3QtdC+0LHRhdC+0LTQuNC80L4g0YHQtNC10LvQsNGC0YwgcmVkaXJlY3RcbiAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lICsgcmVkaXJlY3RMb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IpIHsgLy8g0J/RgNC+0LjQt9C+0YjQu9CwINC+0YjQuNCx0LrQsCDQu9GO0LHQvtCz0L4g0YDQvtC00LBcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvci5tZXNzYWdlKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFyZW5kZXJQcm9wcykgeyAvLyDQnNGLINC90LUg0L7Qv9GA0LXQtNC10LvQuNC70Lgg0L/Rg9GC0YwsINC60L7RgtC+0YDRi9C5INCx0Ysg0L/QvtC00L7RiNC10Lsg0LTQu9GPIFVSTFxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCdOb3QgZm91bmQnKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qge3BheWxvYWQ6IGN1cnJlbnRVc2VyfSA9IGF3YWl0IGNoZWNrVXNlckF1dGgocmVxKVxuXG4gICAgICAgIGlmIChjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdTRVRfVVNFUicsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogY3VycmVudFVzZXJcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8vIHRvZG8gLSBvbmx5IHJlYXV0aG9yaXplIG5lYXIgZXhwaXJhdGlvbiAocGVyZm9ybWFuY2UpXG4gICAgICAgICAgICAvLyB0b2RvIC0gY2hlY2sgaXBcblxuICAgICAgICAgICAgLy8gc2xpZGluZyAtIG5vdyBvbmx5IG9uIHN0YXRpYyBwYWdlIHJlbmRlclxuICAgICAgICAgICAgYXdhaXQgZ3JhbnRBY2Nlc3MocmVxLCByZXMsIGN1cnJlbnRVc2VyKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXVxuXG4gICAgICAgIHJlbmRlclByb3BzLnJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJvdXRlLmNvbXBvbmVudC5XcmFwcGVkQ29tcG9uZW50IHx8IHJvdXRlLmNvbXBvbmVudFxuXG4gICAgICAgICAgICAvL2lmIHN0YXRpYyBcImxvZ2luUmVxdWlyZWRcIiBmaWVsZCBkZWZpbmVkIG9uIGEgY29tcG9uZW50IC0gcmVkaXJlY3QgdG8gL2xvZ2luXG4gICAgICAgICAgICAvLyB0b2RvIC0gbWF5YmUgdGhpbmsgb2YgYW5vdGhlciB3YXkgdG8gZG8gdGhhdFxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5sb2dpblJlcXVpcmVkICYmICFjdXJyZW50VXNlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCB1cmxGb3JtYXQoe3BhdGhuYW1lOiAnL2xvZ2luJywgcXVlcnk6e25leHQ6IHVybH19KSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5hbm9ueW1vdXNSZXF1aXJlZCAmJiBjdXJyZW50VXNlcil7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDIsIHVybEZvcm1hdCh7cGF0aG5hbWU6ICcvJ30pKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29tcG9uZW50LmluaXRpYWxpemUpIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNvbXBvbmVudC5pbml0aWFsaXplKHN0b3JlLmRpc3BhdGNoKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudEhUTUwgPSBSZWFjdERvbS5yZW5kZXJUb1N0cmluZyhcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckNvbnRleHQgey4uLnJlbmRlclByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIC8vINGA0LXQvdC00LXRgNC40LwgaHRtbCwg0LLQutC70Y7Rh9Cw0Y8g0LIg0L3QtdCz0L4g0YLQtdC60YPRidC40Lkgc3RhdGUg0LTQu9GPINC/0LXRgNC10LTQsNGH0Lgg0LrQu9C40LXQvdGC0YHQutC+0LzRgyByZWR1eFxuICAgICAgICAgICAgcmVzLmVuZChnZXRIVE1MKGNvbXBvbmVudEhUTUwsIHN0b3JlLmdldFN0YXRlKCkpKVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9jcmVhdGVTdGF0aWNQYWdlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjIuMDMuMTcuXG4gKi9cblxuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcydcbmltcG9ydCB1cmwgZnJvbSAndXJsJ1xuXG5pbXBvcnQgY2hlY2tVc2VyQXV0aCBmcm9tICcuL2NoZWNrVXNlckF1dGgnXG5pbXBvcnQgZ3JhbnRBY2Nlc3MgZnJvbSAnLi9ncmFudEFjY2VzcydcbmltcG9ydCBnZXRVc2VyQXV0aCBmcm9tICcuLi9hcGkvZ2V0VXNlckF1dGgnXG5cbmZ1bmN0aW9uIHJlZGlyZWN0VG9GYWlsdXJlKHJlcSwgcmVzKSB7XG4gICAgcmVzLnJlZGlyZWN0KDMwMiwgdXJsLmZvcm1hdCh7XG4gICAgICAgIHBhdGhuYW1lOiAnL2xvZ2luJywgcXVlcnk6IHtcbiAgICAgICAgICAgIG5leHQ6IHJlcS5ib2R5Lm5leHRVcmwsXG4gICAgICAgICAgICBlcnJvcjogMVxuICAgICAgICB9XG4gICAgfSkpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGxvZ2luKHJlcSwgcmVzKSB7XG5cbiAgICBjb25zdCB7cGF5bG9hZDogY3VycmVudFVzZXJ9ID0gYXdhaXQgY2hlY2tVc2VyQXV0aChyZXEpXG5cbiAgICBpZiAoY3VycmVudFVzZXIpIHtcbiAgICAgICAgLy8gQWxyZWFkeSBsb2dnZWQgaW46IHJlZGlyZWN0IGJhY2tcbiAgICAgICAgcmVzLnJlZGlyZWN0KDMwMiwgcmVxLmJvZHkubmV4dFVybCB8fCAnLycpXG4gICAgfSBlbHNlIHtcblxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckF1dGgocmVxLmJvZHkuZW1haWwpXG5cbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgICAvLyBObyBzdWNoIHVzZXJcbiAgICAgICAgICAgIHJlZGlyZWN0VG9GYWlsdXJlKHJlcSwgcmVzKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRDb3JyZWN0ID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocmVxLmJvZHkucGFzc3dvcmQsIHVzZXIucGFzc3dvcmRfaGFzaClcblxuICAgICAgICAgICAgaWYgKCFwYXNzd29yZENvcnJlY3QpIHtcbiAgICAgICAgICAgICAgICAvLyBXcm9uZyBwYXNzd29yZFxuICAgICAgICAgICAgICAgIHJlZGlyZWN0VG9GYWlsdXJlKHJlcSwgcmVzKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBVc2VyIGlzIHN1Y2Nlc3NmdWxseSBhdXRoZWQhXG4gICAgICAgICAgICAgICAgYXdhaXQgZ3JhbnRBY2Nlc3MocmVxLCByZXMsIHVzZXIpXG4gICAgICAgICAgICAgICAgcmVzLnJlZGlyZWN0KDMwMiwgcmVxLmJvZHkubmV4dFVybCB8fCAnLycpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL3NlY3VyaXR5L2xvZ2luLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjkuMDEuMTcuXG4gKi9cblxuaW1wb3J0IGFwaSBmcm9tICcuL2FwaScgLy8gaW1wb3J0aW5nIFNFUlZFUiBhcGlcbmltcG9ydCBjaGVja1VzZXJBdXRoIGZyb20gJy4vc2VjdXJpdHkvY2hlY2tVc2VyQXV0aCdcblxuYXN5bmMgZnVuY3Rpb24gYXV0aG9yaXplZChyZXEsIHJlcykge1xuICAgIGNvbnN0IHVzZXJBdXRoZWQgPSBhd2FpdCBjaGVja1VzZXJBdXRoKHJlcSlcblxuICAgIGlmICghdXNlckF1dGhlZCl7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICAgIHN0YXR1czo0MDEsXG4gICAgICAgICAgICBlcnJvcjonVW5hdXRob3JpemVkJ1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXBpTGlzdGVuZXJzKGFwcCkge1xuXG4gICAgYXBwLmdldCgnL2FwaS90cmFuc2FjdGlvbnMnLFxuICAgICAgICBhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGF3YWl0IGF1dGhvcml6ZWQocmVxLCByZXMpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qge2RhdGVGcm9tLCBkYXRlVG99ID0gcmVxLnF1ZXJ5XG4gICAgICAgICAgICAgICAgcmVzLmpzb24oYXdhaXQgYXBpLmdldFRyYW5zYWN0aW9ucyhkYXRlRnJvbSwgZGF0ZVRvKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcblxuICAgIGFwcC5wb3N0KCcvYXBpL3RyYW5zYWN0aW9uJyxcbiAgICAgICAgYXN5bmMocmVxLCByZXMpID0+IGF3YWl0IGF1dGhvcml6ZWQocmVxLCByZXMpICYmIHJlcy5qc29uKGF3YWl0IGFwaS5jcmVhdGVUcmFuc2FjdGlvbihyZXEuYm9keSkpXG4gICAgKVxuXG4gICAgYXBwLnB1dCgnL2FwaS90cmFuc2FjdGlvbi86aWQnLFxuICAgICAgICBhc3luYyhyZXEsIHJlcykgPT4gYXdhaXQgYXV0aG9yaXplZChyZXEsIHJlcykgJiYgcmVzLmpzb24oYXdhaXQgYXBpLmVkaXRUcmFuc2FjdGlvbihyZXEucGFyYW1zLmlkLCByZXEuYm9keSkpXG4gICAgKVxuXG4gICAgYXBwLmRlbGV0ZSgnL2FwaS90cmFuc2FjdGlvbi86aWQnLFxuICAgICAgICBhc3luYyhyZXEsIHJlcykgPT4gYXdhaXQgYXV0aG9yaXplZChyZXEsIHJlcykgJiYgcmVzLmpzb24oYXdhaXQgYXBpLmRlbGV0ZVRyYW5zYWN0aW9uKHJlcS5wYXJhbXMuaWQpKVxuICAgIClcblxuICAgIGFwcC5nZXQoJy9hcGkvc3VtbWFyeScsXG4gICAgICAgIGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXdhaXQgYXV0aG9yaXplZChyZXEsIHJlcykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7ZGF0ZUZyb20sIGRhdGVUb30gPSByZXEucXVlcnlcbiAgICAgICAgICAgICAgICByZXMuanNvbihhd2FpdCBhcGkuZ2V0U3VtbWFyeShkYXRlRnJvbSwgZGF0ZVRvKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIClcblxuICAgIGFwcC5nZXQoJy9hcGkvY2F0ZWdvcmllcycsXG4gICAgICAgIGFzeW5jKHJlcSwgcmVzKSA9PiBhd2FpdCBhdXRob3JpemVkKHJlcSwgcmVzKSAmJiByZXMuanNvbihhd2FpdCBhcGkuZ2V0Q2F0ZWdvcmllcygpKVxuICAgIClcblxuICAgIGFwcC5wb3N0KCcvYXBpL2NhdGVnb3J5JyxcbiAgICAgICAgYXN5bmMocmVxLCByZXMpID0+IGF3YWl0IGF1dGhvcml6ZWQocmVxLCByZXMpICYmIHJlcy5qc29uKGF3YWl0IGFwaS5jcmVhdGVDYXRlZ29yeShyZXEuYm9keSkpXG4gICAgKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2V0QXBpTGlzdGVuZXJzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY29va2llLXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiZXhwcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwNy4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlRGV2VG9vbHMgfSBmcm9tICdyZWR1eC1kZXZ0b29scyc7XG5pbXBvcnQgTG9nTW9uaXRvciBmcm9tICdyZWR1eC1kZXZ0b29scy1sb2ctbW9uaXRvcic7XG5pbXBvcnQgRG9ja01vbml0b3IgZnJvbSAncmVkdXgtZGV2dG9vbHMtZG9jay1tb25pdG9yJztcblxuY29uc3QgRGV2VG9vbHMgPSBjcmVhdGVEZXZUb29scyhcbiAgICA8RG9ja01vbml0b3JcbiAgICAgICAgdG9nZ2xlVmlzaWJpbGl0eUtleT0nY3RybC1oJ1xuICAgICAgICBjaGFuZ2VQb3NpdGlvbktleT0nY3RybC1xJ1xuICAgICAgICBkZWZhdWx0SXNWaXNpYmxlPXtmYWxzZX1cbiAgICA+XG4gICAgICAgIDxMb2dNb25pdG9yIC8+XG4gICAgPC9Eb2NrTW9uaXRvcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IERldlRvb2xzXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NsaWVudC9jb21wb25lbnRzL0RldlRvb2xzL2luZGV4LmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDA3LjAxLjE3LlxuICovXG5cbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcidcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcidcblxuaW1wb3J0IHtkb21haW59IGZyb20gJ2NvbmZpZydcbmltcG9ydCBjcmVhdGVTdGF0aWNQYWdlIGZyb20gJy4vc2VydmVyL2NyZWF0ZVN0YXRpY1BhZ2UnXG5pbXBvcnQgc2V0QXBpTGlzdGVuZXJzIGZyb20gJy4vc2VydmVyL3NldEFwaUxpc3RlbmVycydcbmltcG9ydCBsb2dpbiBmcm9tICcuL3NlcnZlci9zZWN1cml0eS9sb2dpbidcblxuLy8g0YHQvtC30LTQsNC10Lwg0YbQtdC90YLRgNCw0LvRjNC90YvQuSDQsNC/0L9cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuXG4vLyDRgdGC0LDQvdC00LDRgNGC0L3Ri9C5INC80L7QtNGD0LvRjCwg0LTQu9GPINC/0LDRgNGB0LjQvdCz0LAgSlNPTiDQsiDQt9Cw0L/RgNC+0YHQsNGFXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOmZhbHNlfSkpXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKVxuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKCdwdWJsaWMnKSlcblxuLy8gcG9zdCBsb2dpblxuYXBwLnBvc3QoJy9sb2dpbicsIGxvZ2luKVxuXG4vLyBsb2dvdXRcbmFwcC5nZXQoJy9sb2dvdXQnLCAocmVxLCByZXMpID0+IHtcbiAgICByZXMuY2xlYXJDb29raWUoJ2FjY2Vzc190b2tlbicsIHtwYXRoOicvJywgZG9tYWlufSlcbiAgICByZXMucmVkaXJlY3QoMzAyLCAnLycpXG59KVxuXG4vLyBBUEkgSEFORExFUlNcbnNldEFwaUxpc3RlbmVycyhhcHApXG5cbi8vINC60L7Qu9C70LHQtdC6INC90LAg0LfQsNC/0YDQvtGBINC6INGB0LXRgNCy0LXRgNGDIChkb2Vzbid0IHN0YXJ0IHdpZHRoIFwiL2FwaS9cIilcbmFwcC5nZXQoL14oPyFcXC9hcGlcXC8pLiokLywgY3JlYXRlU3RhdGljUGFnZSlcblxuY29uc3QgUE9SVCA9IHByb2Nlc3MuZW52LkxJU1RFTiB8fCAzMDAxXG5cbi8v0LfQsNC/0YPRgdC60LDQtdC8INGB0LXRgNCy0LXRgFxuYXBwLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBsaXN0ZW5pbmcgb24gJHtQT1JUfWApXG59KVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAyMC4wMi4xNy5cbiAqL1xuXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcnkoY2F0ZWdvcnkpIHtcblxuICAgIGNvbnN0IG5ld1JvdyA9IHtcbiAgICAgICAgbmFtZTogY2F0ZWdvcnkubmFtZVxuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBJTlNFUlQgSU5UTyBjYXRlZ29yaWVzICg/PykgVkFMVUVTICg/KVxuICAgIGAsIFtPYmplY3Qua2V5cyhuZXdSb3cpLCBPYmplY3QudmFsdWVzKG5ld1JvdyldKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLi4ubmV3Um93LFxuICAgICAgICBpZDogY3JlYXRpb25SZXN1bHQuaW5zZXJ0SWRcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvY3JlYXRlQ2F0ZWdvcnkuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxNC4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IHtxdWVyeX0gZnJvbSAnLi4vZGInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZVRyYW5zYWN0aW9uKHRhKSB7XG5cbiAgICBjb25zdCBub3cgPSBtb21lbnQoKVxuXG4gICAgaWYgKHRhLmRhdGUpIHtcbiAgICAgICAgaWYgKCF0YS5kYXRlLnNwbGl0KCcgJylbMV0pe1xuICAgICAgICAgICAgdGEuZGF0ZSArPSAnIDEzOjAwJ1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb2ZmaWNpYWxNb21lbnQgPSB0YS5kYXRlID8gbW9tZW50KHRhLmRhdGUsICdZWVlZLk1NLkREIEhILm1tJykgOiBub3dcblxuICAgIGlmICghb2ZmaWNpYWxNb21lbnQuaXNWYWxpZCgpKSB7XG4gICAgICAgIC8vdG9kbyAtIHRoaW5rIG9mIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIHRocm93ICdkYXRlIGlzIGludmFsaWQhJ1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBvZmZpY2lhbFRTID0gb2ZmaWNpYWxNb21lbnQudmFsdWVPZigpXG4gICAgY29uc3QgcmVhbFRTID0gbm93LnZhbHVlT2YoKVxuICAgIGNvbnN0IGluY29tZSA9IHRhLmluY29tZSoxXG4gICAgY29uc3QgY2F0ZWdvcnkgPSBwYXJzZUludCh0YS5jYXRlZ29yeSwgMTApXG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGEudmFsdWUsIDEwKVxuICAgIGlmICgoIWluY29tZSAmJiB2YWx1ZSA+IDApIHx8IChpbmNvbWUgJiYgdmFsdWUgPCAwKSl7XG4gICAgICAgIHZhbHVlICo9IC0xXG4gICAgfVxuXG4gICAgY29uc3QgbmV3Um93ID0ge1xuICAgICAgICB1c2VyOjEsXG4gICAgICAgIG5hbWU6IHRhLm5hbWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBpbmNvbWUsXG4gICAgICAgIGNhdGVnb3J5OiAhaXNOYU4oY2F0ZWdvcnkpICYmIGNhdGVnb3J5ID4gMCA/IGNhdGVnb3J5IDogbnVsbCxcbiAgICAgICAgY3JlYXRlZDogcmVhbFRTLFxuICAgICAgICB1cGRhdGVkOiByZWFsVFMsXG4gICAgICAgIG9mZmljaWFsX2RhdGU6IG9mZmljaWFsVFMsXG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRpb25SZXNwb25zZSA9IGF3YWl0IHF1ZXJ5KFxuICAgICAgICBgXG4gICAgICAgICAgICBJTlNFUlQgSU5UTyB0cmFuc2FjdGlvbnMgKD8/KVxuICAgICAgICAgICAgVkFMVUVTICg/KVxuICAgICAgICBgLCBbT2JqZWN0LmtleXMobmV3Um93KSwgT2JqZWN0LnZhbHVlcyhuZXdSb3cpXVxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIC4uLm5ld1JvdyxcbiAgICAgICAgaWQ6IGNyZWF0aW9uUmVzcG9uc2UuaW5zZXJ0SWRcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvY3JlYXRlVHJhbnNhY3Rpb24uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAyOS4wMS4xNy5cbiAqL1xuXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVHJhbnNhY3Rpb24oaWQpe1xuICAgIGNvbnN0IGRlbGV0aW9uUmVzdWx0ID0gYXdhaXQgcXVlcnkoYFxuICAgICAgICBERUxFVEUgRlJPTSB0cmFuc2FjdGlvbnMgV0hFUkUgaWQgPSA/XG4gICAgYCwgaWQpXG5cbiAgICByZXR1cm4ge2lkfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBpL2RlbGV0ZVRyYW5zYWN0aW9uLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjAuMDIuMTcuXG4gKi9cblxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZWRpdFRyYW5zYWN0aW9uKGlkLCB0YSl7XG5cbiAgICBjb25zb2xlLmxvZygnZWRpdGluZycsIGlkLCB0YSlcblxuICAgIGlkID0gcGFyc2VJbnQoaWQsIDEwKVxuXG4gICAgY29uc3Qgbm93ID0gbW9tZW50KClcblxuICAgIGlmICghdGEuZGF0ZS5zcGxpdCgnICcpWzFdKXtcbiAgICAgICAgdGEuZGF0ZSArPSAnIDEzOjAwJ1xuICAgIH1cblxuICAgIGNvbnN0IG9mZmljaWFsTW9tZW50ID0gbW9tZW50KHRhLmRhdGUsICdZWVlZLk1NLkREIEhILm1tJylcblxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcGFyc2VJbnQodGEuY2F0ZWdvcnksIDEwKVxuICAgIGNvbnN0IGluY29tZSA9IHRhLmluY29tZSoxXG4gICAgbGV0IHZhbHVlID0gcGFyc2VJbnQodGEudmFsdWUsIDEwKVxuXG4gICAgaWYgKCghaW5jb21lICYmIHZhbHVlID4gMCkgfHwgKGluY29tZSAmJiB2YWx1ZSA8IDApKXtcbiAgICAgICAgdmFsdWUgKj0gLTFcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0ZWRUQSA9IHtcbiAgICAgICAgbmFtZTogdGEubmFtZSxcbiAgICAgICAgaW5jb21lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgY2F0ZWdvcnk6ICFpc05hTihjYXRlZ29yeSkgJiYgY2F0ZWdvcnkgPiAwID8gY2F0ZWdvcnkgOiBudWxsLFxuICAgICAgICB1cGRhdGVkOiBub3cudmFsdWVPZigpLFxuICAgICAgICBvZmZpY2lhbF9kYXRlOiBvZmZpY2lhbE1vbWVudC52YWx1ZU9mKClcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnZWRpdGVkVEEnLCBlZGl0ZWRUQSlcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGVkaXRSZXN1bHQgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFVQREFURSB0cmFuc2FjdGlvbnNcbiAgICAgICAgU0VUID9cbiAgICAgICAgV0hFUkUgaWQgPSA/XG4gICAgYCwgW2VkaXRlZFRBLCBpZF0pXG5cbiAgICAgICAgY29uc29sZS5sb2coJ2VkaXRlZCcsIGlkLCBlZGl0UmVzdWx0KVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5lZGl0ZWRUQSxcbiAgICAgICAgICAgIGlkXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcil7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluIGVkaXRUQScsIGVycm9yKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwaS9lZGl0VHJhbnNhY3Rpb24uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxOS4wMi4xNy5cbiAqL1xuXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpIHtcblxuICAgIGNvbnN0IHJvd3MgPSBhd2FpdCBxdWVyeShgXG4gICAgICAgIFNFTEVDVCBcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICBGUk9NIGNhdGVnb3JpZXNcbiAgICAgICAgT1JERVIgQlkgbmFtZSBcbiAgICBgKVxuXG4gICAgLy9jb25zb2xlLmxvZygnY2F0cycsIHJvd3MpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0OiByb3dzXG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvYXBpL2dldENhdGVnb3JpZXMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxNC4wMS4xNy5cbiAqL1xuXG5pbXBvcnQge3F1ZXJ5fSBmcm9tICcuLi9kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0U3VtbWFyeShkYXRlRnJvbSwgZGF0ZVRvKSB7XG5cbiAgICBkYXRlRnJvbSA9IGRhdGVGcm9tKjFcbiAgICBkYXRlVG8gPSBkYXRlVG8qMVxuXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbXG4gICAgICAgIHF1ZXJ5KGBcbiAgICAgICAgICAgIFNFTEVDVCBTVU0odmFsdWUpIEFTIHZhbHVlXG4gICAgICAgICAgICBGUk9NIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgV0hFUkUgaW5jb21lID0gMVxuICAgICAgICAgICAgICAgIEFORCBvZmZpY2lhbF9kYXRlID4gP1xuICAgICAgICAgICAgICAgIEFORCBvZmZpY2lhbF9kYXRlIDwgP1xuICAgICAgICBgLCBbZGF0ZUZyb20sIGRhdGVUb10pLFxuXG4gICAgICAgIHF1ZXJ5KGBcbiAgICAgICAgICAgIFNFTEVDVCBTVU0odmFsdWUpIEFTIHZhbHVlXG4gICAgICAgICAgICBGUk9NIHRyYW5zYWN0aW9uc1xuICAgICAgICAgICAgV0hFUkUgaW5jb21lID0gMFxuICAgICAgICAgICAgICAgIEFORCBvZmZpY2lhbF9kYXRlID4gP1xuICAgICAgICAgICAgICAgIEFORCBvZmZpY2lhbF9kYXRlIDwgP1xuICAgICAgICBgLCBbZGF0ZUZyb20sIGRhdGVUb10pXG4gICAgXVxuXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuXG4gICAgY29uc3QgdG90YWxJbmNvbWUgPSBzdW1tYXJ5WzBdWzBdLnZhbHVlXG4gICAgY29uc3QgdG90YWxFeHBlbnNlcyA9IHN1bW1hcnlbMV1bMF0udmFsdWVcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRvdGFsSW5jb21lLFxuICAgICAgICB0b3RhbEV4cGVuc2VzLFxuICAgICAgICBleHBlY3RlZFJlbWFpbnM6IHRvdGFsSW5jb21lICsgdG90YWxFeHBlbnNlc1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VydmVyL2FwaS9nZXRTdW1tYXJ5LmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTQuMDEuMTcuXG4gKi9cblxuaW1wb3J0IHtxdWVyeX0gZnJvbSAnLi4vZGInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFRyYW5zYWN0aW9ucyhkYXRlRnJvbSwgZGF0ZVRvKSB7XG5cbiAgICBkYXRlRnJvbSA9IGRhdGVGcm9tKjFcbiAgICBkYXRlVG8gPSBkYXRlVG8qMVxuXG4gICAgY29uc3Qgcm93cyA9IGF3YWl0IHF1ZXJ5KGBcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGNyZWF0ZWQsXG4gICAgICAgICAgICB1cGRhdGVkLFxuICAgICAgICAgICAgb2ZmaWNpYWxfZGF0ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGluY29tZSxcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIEZST00gdHJhbnNhY3Rpb25zIFxuICAgICAgICBXSEVSRSB1c2VyID0gP1xuICAgICAgICAgICAgQU5EIG9mZmljaWFsX2RhdGUgPiA/XG4gICAgICAgICAgICBBTkQgb2ZmaWNpYWxfZGF0ZSA8ID9cbiAgICAgICAgT1JERVIgQlkgb2ZmaWNpYWxfZGF0ZSBERVNDIFxuICAgIGAsIFtcbiAgICAgICAgMSwgLy8gdXNlclxuICAgICAgICBkYXRlRnJvbSxcbiAgICAgICAgZGF0ZVRvXG4gICAgXSlcblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3Q6IHJvd3NcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9hcGkvZ2V0VHJhbnNhY3Rpb25zLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMDguMDEuMTcuXG4gKi9cblxuY29uc3QgYXNzZXRVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/ICdodHRwOi8vbG9jYWxob3N0OjgwNTAvcHVibGljLycgOiAnJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIVE1MKGNvbXBvbmVudEhUTUwsIGluaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgPCFET0NUWVBFIGh0bWw+XG4gICAgICA8aHRtbD5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIj5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcIj5cbiAgICAgICAgPHRpdGxlPkV4cGVuc2VzIHRyYWNrZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIiR7YXNzZXRVcmx9YXNzZXRzL3N0eWxlcy5jc3NcIj5cbiAgICAgICAgPHNjcmlwdD5cbiAgICAgICAgICB3aW5kb3cuUkVEVVhfSU5JVElBTF9TVEFURSA9ICR7SlNPTi5zdHJpbmdpZnkoaW5pdGlhbFN0YXRlKX1cbiAgICAgICAgPC9zY3JpcHQ+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD1cInJlYWN0LXZpZXdcIj4ke2NvbXBvbmVudEhUTUx9PC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJkZXYtdG9vbHNcIj48L2Rpdj5cbiAgICAgICAgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vamF2YXNjcmlwdFwiIHNyYz1cIiR7YXNzZXRVcmx9YXNzZXRzL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgYFxuICAgIHJldHVybiBodG1sXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlcnZlci9nZXRIVE1MLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjMuMDMuMTcuXG4gKi9cblxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nXG5pbXBvcnQge3NlY3JldEtleSwga2V5RXhwaXJlc0lufSBmcm9tICdjb25maWcnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRva2VuKHBheWxvYWQsIG9wdGlvbnNPdmVycmlkZSA9IHt9KXtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBleHBpcmVzSW46IGtleUV4cGlyZXNJbixcbiAgICAgICAgLi4ub3B0aW9uc092ZXJyaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgand0LnNpZ24oe3BheWxvYWR9LCBzZWNyZXRLZXksIG9wdGlvbnMsIGZ1bmN0aW9uIChlcnIsIHRva2VuKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0b2tlbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZXJ2ZXIvc2VjdXJpdHkvY3JlYXRlVG9rZW4uanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwOS4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgYXBpIGZyb20gJy4uL2FwaSdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQge2ZldGNoQ2F0ZWdvcmllc30gZnJvbSAnLi9jYXRlZ29yaWVzQWN0aW9ucydcblxuLyoqXG4gKiBJbml0aWFsaXphdGlvbiBmdW5jdGlvbiBmb3IgVHJhbnNhY3Rpb25zUGFnZSBjb250YWluZXIuXG4gKiBub3RlOiBBbnkgaW5pdGlhbGl6YXRpb24gYWN0aW9uIG11c3QgcmV0dXJuIGEgc2luZ2xlIHByb21pc2UuIEEgXCJkaXNwYXRjaFwiIG9mIFRodW5rIGFjdGlvblxuICogcmV0dXJucyB3aGF0IHRoZSB0aHVuay1mdW5jdGlvbiByZXR1cm5zXG4gKlxuICogQHJldHVybnMge2Z1bmN0aW9uKGZ1bmMsIGZ1bmMpID0+IFByb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2FjdGlvbnNQYWdlSW5pdCgpe1xuICAgIHJldHVybiBkaXNwYXRjaCA9PiB7XG5cbiAgICAgICAgY29uc3Qgbm93ID0gbW9tZW50KClcblxuICAgICAgICAvLyBkYXRlIGlzIGR5bmFtaWMgZGF0YSwgc28gaXQgY2FuJ3QgYmUgbW92ZWQgdG8gcmVkdWNlclxuICAgICAgICBkaXNwYXRjaChzZXREYXRlT2Zmc2V0cyhcbiAgICAgICAgICAgIG5vdy5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJykudmFsdWVPZigpLFxuICAgICAgICAgICAgbm93LmNsb25lKCkuZW5kT2YoJ21vbnRoJykudmFsdWVPZigpXG4gICAgICAgICkpXG5cbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHRyYW5zYWN0aW9uc1BhZ2VMb2FkQWxsKCkpXG4gICAgfVxufVxuXG4vKipcbiAqIENvbGxlY3RzIGFsbCBmaWx0ZXJzIGRhdGEgZnJvbSBzdGF0ZSBhbmQgcmVsb2FkcyBhbGwgZGF0YSBmb3IgdGhlIFRyYW5zYWN0aW9uc1BhZ2VcbiAqXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oZnVuYywgZnVuYykgPT4gUHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zYWN0aW9uc1BhZ2VMb2FkQWxsKCl7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qge2RhdGVGcm9tLCBkYXRlVG99ID0gZ2V0U3RhdGUoKS50cmFuc2FjdGlvbnNcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoVHJhbnNhY3Rpb25zKGRhdGVGcm9tLCBkYXRlVG8pKSxcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoU3VtbWFyeShkYXRlRnJvbSwgZGF0ZVRvKSksXG4gICAgICAgICAgICBkaXNwYXRjaChmZXRjaENhdGVnb3JpZXMoKSlcbiAgICAgICAgXVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcylcbiAgICB9XG59XG5cbi8qKlxuICogU3luY2hyb25vdXMgc2V0dGVyIG9mIGRhdGUgZmlsdGVyXG4gKlxuICogQHBhcmFtIGRhdGVGcm9tIC0gbnVtYmVyXG4gKiBAcGFyYW0gZGF0ZVRvIC0gbnVtYmVyXG4gKiBAcmV0dXJucyB7e3R5cGU6IHN0cmluZywgcGF5bG9hZDoge2RhdGVGcm9tOiBudW1iZXIsIGRhdGVUbzogbnVtYmVyfX19XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlT2Zmc2V0cyhkYXRlRnJvbSwgZGF0ZVRvKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiAnU0VUX0RBVEVfT0ZGU0VUUycsXG4gICAgICAgIHBheWxvYWQ6e1xuICAgICAgICAgICAgZGF0ZUZyb20sXG4gICAgICAgICAgICBkYXRlVG9cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBBc3luYyBzZXQgZGF0ZSBmaWx0ZXIgdGhlbiByZWxvYWQgYWxsIGRhdGFcbiAqXG4gKiBAcGFyYW0gZnJvbSAtIG51bWJlclxuICogQHBhcmFtIHRvIC0gbnVtYmVyXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oZnVuYywgZnVuYykgPT4gUHJvbWlzZX1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldERhdGVPZmZzZXRzVXBkYXRlKGZyb20sIHRvKXtcbiAgICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuXG4gICAgICAgIGRpc3BhdGNoKHNldERhdGVPZmZzZXRzKGZyb20sIHRvKSlcblxuICAgICAgICByZXR1cm4gZGlzcGF0Y2godHJhbnNhY3Rpb25zUGFnZUxvYWRBbGwoKSlcbiAgICB9XG59XG5cbi8qKlxuICogUmVxdWVzdHMgdHJhbnNhY3Rpb25zIGxpc3RcbiAqIG5vdGU6IFByb21pc2UgYWN0aW9uLCBcImRpc3BhdGNoXCIgcmV0dXJucyBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHdoZW4gdGhlIEFQSSBjYWxsIGlzIGRvbmUgYW5kXG4gKiBzdGF0ZSBpcyBjaGFuZ2VkIGJ5IGl0J3MgcmVzdWx0c1xuICpcbiAqIEBwYXJhbSBkYXRlRnJvbSAtIG51bWJlclxuICogQHBhcmFtIGRhdGVUbyAtIG51bWJlclxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHByb21pc2U6IFByb21pc2V9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hUcmFuc2FjdGlvbnMoZGF0ZUZyb20sIGRhdGVUbyl7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTonRkVUQ0hfVFJBTlNBQ1RJT05TJyxcbiAgICAgICAgcHJvbWlzZTogYXBpLmdldFRyYW5zYWN0aW9ucyhkYXRlRnJvbSwgZGF0ZVRvKVxuICAgIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IHRyYW5zYWN0aW9uc1xuICogKHRlbmRzIHRvIGJlIGNsaWVudC1vbmx5IGFjdGlvbilcbiAqXG4gKiBAcGFyYW0gdGEgKHRyYW5zYWN0aW9uKVxuICogQHJldHVybnMge2Z1bmN0aW9uKGZ1bmMsIGZ1bmMpID0+IFByb21pc2V9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUcmFuc2FjdGlvbih0YSl7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcblxuICAgICAgICBjb25zdCBjcmVhdGVQcm9taXNlID0gYXBpLmNyZWF0ZVRyYW5zYWN0aW9uKHRhKVxuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdDUkVBVEVfVFJBTlNBQ1RJT04nLFxuICAgICAgICAgICAgcHJvbWlzZTogY3JlYXRlUHJvbWlzZVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IHtkYXRlRnJvbSwgZGF0ZVRvfSA9IGdldFN0YXRlKCkudHJhbnNhY3Rpb25zXG5cbiAgICAgICAgY3JlYXRlUHJvbWlzZS50aGVuKCgpID0+IGRpc3BhdGNoKGZldGNoU3VtbWFyeShkYXRlRnJvbSwgZGF0ZVRvKSkpXG5cbiAgICAgICAgLy90b2RvIC0g0YDQsNC30L7QsdGA0LDRgtGM0YHRjyDRgSDQstC+0LfQstGA0LDRgtC+0Lwg0L/RgNC+0LzQuNGB0LAg0Lgg0L7Rh9C10YDQtdC00L3QvtGB0YLRjNGOINC00LXQudGB0YLQstC40LlcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVByb21pc2VcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VHJhbnNhY3Rpb24oaWQsIHRhKXtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGVkaXRQcm9taXNlID0gYXBpLmVkaXRUcmFuc2FjdGlvbihpZCwgdGEpXG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogJ0VESVRfVFJBTlNBQ1RJT04nLFxuICAgICAgICAgICAgcHJvbWlzZTogZWRpdFByb21pc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB7ZGF0ZUZyb20sIGRhdGVUb30gPSBnZXRTdGF0ZSgpLnRyYW5zYWN0aW9uc1xuXG4gICAgICAgIGVkaXRQcm9taXNlLnRoZW4oKCkgPT4gZGlzcGF0Y2goZmV0Y2hTdW1tYXJ5KGRhdGVGcm9tLCBkYXRlVG8pKSlcblxuICAgICAgICAvL3RvZG8gLSDRgNCw0LfQvtCx0YDQsNGC0YzRgdGPINGBINCy0L7Qt9Cy0YDQsNGC0L7QvCDQv9GA0L7QvNC40YHQsCDQuCDQvtGH0LXRgNC10LTQvdC+0YHRgtGM0Y4g0LTQtdC50YHRgtCy0LjQuVxuICAgICAgICByZXR1cm4gZWRpdFByb21pc2VcbiAgICB9XG59XG5cbi8qKlxuICogUmVxdWVzdHMgdHJhbnNhY3Rpb24gZGVsZXRpb25cbiAqIG5vdGU6IFByb21pc2UgYWN0aW9uLCBcImRpc3BhdGNoXCIgcmV0dXJucyBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHdoZW4gdGhlIEFQSSBjYWxsIGlzIGRvbmUgYW5kXG4gKiBzdGF0ZSBpcyBjaGFuZ2VkIGJ5IGl0J3MgcmVzdWx0c1xuICpcbiAqIEBwYXJhbSBpZFxuICogQHJldHVybnMge2Z1bmN0aW9uKGZ1bmMsIGZ1bmMpfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVHJhbnNhY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBhcGkuZGVsZXRlVHJhbnNhY3Rpb24oaWQpXG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTonREVMRVRFX1RSQU5TQUNUSU9OJyxcbiAgICAgICAgICAgIHByb21pc2VcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCB7ZGF0ZUZyb20sIGRhdGVUb30gPSBnZXRTdGF0ZSgpLnRyYW5zYWN0aW9uc1xuXG4gICAgICAgIHByb21pc2UudGhlbigoKSA9PiBkaXNwYXRjaChmZXRjaFN1bW1hcnkoZGF0ZUZyb20sIGRhdGVUbykpKVxuXG4gICAgICAgIHJldHVybiBwcm9taXNlXG4gICAgfVxufVxuXG4vKipcbiAqIFJlcXVlc3RzIHN1bW1hcnkgaW5mb3JtYXRpb25cbiAqIG5vdGU6IFByb21pc2UgYWN0aW9uLCBcImRpc3BhdGNoXCIgcmV0dXJucyBwcm9taXNlIHdoaWNoIHJlc29sdmVzIHdoZW4gdGhlIEFQSSBjYWxsIGlzIGRvbmUgYW5kXG4gKiBzdGF0ZSBpcyBjaGFuZ2VkIGJ5IGl0J3MgcmVzdWx0c1xuICpcbiAqIEBwYXJhbSBkYXRlRnJvbSAtIG51bWJlclxuICogQHBhcmFtIGRhdGVUbyAtIG51bWJlclxuICogQHJldHVybnMge3t0eXBlOiBzdHJpbmcsIHByb21pc2U6IFByb21pc2V9fVxuICovXG5leHBvcnQgZnVuY3Rpb24gZmV0Y2hTdW1tYXJ5KGRhdGVGcm9tLCBkYXRlVG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOidGRVRDSF9TVU1NQVJZJyxcbiAgICAgICAgcHJvbWlzZTogYXBpLmdldFN1bW1hcnkoZGF0ZUZyb20sIGRhdGVUbylcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9hY3Rpb25zL3RyYW5zYWN0aW9uc0FjdGlvbnMuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxOS4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzQ29udHJvbHMoe2NyZWF0ZUNhdGVnb3J5fSkge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGludmVyc2UgY2xhc3NOYW1lPVwibmFycm93XCI+XG4gICAgICAgICAgICA8TmF2YmFyLkZvcm0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIGJzU2l6ZT1cInhzbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NyZWF0ZUNhdGVnb3J5fVxuICAgICAgICAgICAgICAgID7QndC+0LLQsNGPINC60LDRgtC10LPQvtGA0LjRjzwvQnV0dG9uPlxuICAgICAgICAgICAgPC9OYXZiYXIuRm9ybT5cbiAgICAgICAgPC9OYXZiYXI+XG4gICAgPC9kaXY+XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0NhdGVnb3JpZXNDb250cm9scy9pbmRleC5qc3giLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxOS4wMi4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL1RhYmxlJ1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uR3JvdXAnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yaWVzTGlzdCh7Y2F0ZWdvcmllc30pIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJDYXRlZ29yaWVzTGlzdFwiPlxuICAgICAgICA8VGFibGUgcmVzcG9uc2l2ZSBjb25kZW5zZWQgc3RyaXBlZD5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aD7QmtCw0YLQtdCz0L7RgNC40Y88L3RoPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+XG4gICAgICAgICAgICAgICAgPHRyIGtleT17Y2F0ZWdvcnkuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5Lm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0NhdGVnb3JpZXNMaXN0L2luZGV4LmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDE5LjAyLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBNb2RhbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL01vZGFsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbidcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Db250cm9sJ1xuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbCdcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXAnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5TW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBuZXdOYW1lOicnXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjbG9zZVxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5ld05hbWVcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICByZXR1cm4gPE1vZGFsLkRpYWxvZz5cblxuICAgICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgICAgICA8TW9kYWwuVGl0bGU+0KHQvtC30LTQsNGC0Ywg0L3QvtCy0YPRjiDQutCw0YLQtdCz0L7RgNC40Y48L01vZGFsLlRpdGxlPlxuICAgICAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG5cbiAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+0JLQstC10LTQuNGC0LUg0LjQvNGPPC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25ld05hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtuZXdOYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17Y2xvc2V9PtCe0YLQvNC10L3QsDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXs6OnRoaXMuY3JlYXRlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IW5ld05hbWV9XG4gICAgICAgICAgICAgICAgPtCh0L7Qt9C00LDRgtGMPC9CdXR0b24+XG4gICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cblxuICAgICAgICA8L01vZGFsLkRpYWxvZz5cbiAgICB9XG5cbiAgICBjcmVhdGUoKXtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUubmV3TmFtZSl7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5uZXdOYW1lXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvY29tcG9uZW50cy9DYXRlZ29yeU1vZGFsL2luZGV4LmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDIwLjAyLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudCwgUHJvcFR5cGVzfSBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbCdcbmltcG9ydCBGb3JtR3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtR3JvdXAnXG5cbmNsYXNzIERhdGVJbnB1dCBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBmb3JtYXRzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICAgIH1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWxpZGF0aW9uOiBudWxsXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSh0aGlzLnByb3BzLnZhbHVlKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKG5ld1Byb3BzLnZhbHVlICE9IHRoaXMucHJvcHMudmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvblN0YXRlKG5ld1Byb3BzLnZhbHVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBqdXN0IHNjcmVlbmluZyBmcm9tIGdldHRpbmcgaW50byBcInJlc3RcIlxuICAgICAgICBjb25zdCB7dHlwZSwgb25DaGFuZ2UsIGZvcm1hdHMsIC4uLnJlc3R9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIHJldHVybiA8Rm9ybUdyb3VwXG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdpbmxpbmUtYmxvY2snfX1cbiAgICAgICAgICAgIHZhbGlkYXRpb25TdGF0ZT17dGhpcy5zdGF0ZS52YWxpZGF0aW9ufVxuICAgICAgICA+XG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5vbkNoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnNldFZhbGlkYXRpb25TdGF0ZSh2YWx1ZSlcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh2YWx1ZSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbW9tZW50KHZhbHVlLCB0aGlzLnByb3BzLmZvcm1hdHMpLmlzVmFsaWQoKVxuICAgIH1cblxuICAgIHNldFZhbGlkYXRpb25TdGF0ZSh2YWx1ZSl7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsaWRhdGlvbjogdGhpcy52YWxpZGF0ZSh2YWx1ZSkgPyBudWxsIDogJ2Vycm9yJ1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGF0ZUlucHV0XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL0RhdGVJbnB1dC5qc3giLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxNS4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaG9ydERhdGUoe21vbWVudERhdGV9KSB7XG5cbiAgICByZXR1cm4gPGFiYnIgdGl0bGU9e21vbWVudERhdGUuZm9ybWF0KCdkZGRkLCBEIE1NTU0gWVlZWSwgSEg6bW0nKX0+XG4gICAgICAgIHttb21lbnREYXRlLmZvcm1hdCgnRCBNTU1NJyl9XG4gICAgPC9hYmJyPlxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvY29tcG9uZW50cy9TaG9ydERhdGUuanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTEuMDEuMTcuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uJ1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2wnXG5pbXBvcnQgSW5wdXRHcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXAnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9DaGVja2JveCdcblxuaW1wb3J0IERhdGVJbnB1dCBmcm9tICcuLi9EYXRlSW5wdXQnXG5cbmltcG9ydCBjc3MgZnJvbSAnLi9UcmFuc2FjdGlvbklucHV0UGFuZWwuY3NzJ1xuXG5jb25zdCB2YWxpZERhdGVGb3JtYXRzID0gWydZWVlZLU1NLUREJywgJ1lZWVktTU0tREQgSEg6bW0nXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2FjdGlvbklucHV0UGFuZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuaW5pdGlhbFN0YXRlKHByb3BzKVxuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZShwcm9wcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kZTogJ2NyZWF0ZScsXG4gICAgICAgICAgICBpZDogLTEsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICBpbmNvbWU6IGZhbHNlLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IC0xLFxuICAgICAgICAgICAgc3ViY2F0ZWdvcnk6IC0xLFxuICAgICAgICAgICAgYmVuZWZpY2lhcnM6IFtdLFxuICAgICAgICAgICAgZGF0ZUlzTm93OiB0cnVlLFxuICAgICAgICAgICAgZGF0ZTogbW9tZW50KCkuZm9ybWF0KCdZWVlZLk1NLkREJylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV3UHJvcHMpIHtcbiAgICAgICAgaWYgKG5ld1Byb3BzLnRyYW5zYWN0aW9uICE9IHRoaXMucHJvcHMudHJhbnNhY3Rpb24pIHtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdQcm9wcy50cmFuc2FjdGlvbiA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJFZGl0TW9kZShuZXdQcm9wcy50cmFuc2FjdGlvbilcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Byb3BzLnRyYW5zYWN0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUobmV3UHJvcHMpKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpbmNvbWUsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIGRhdGVJc05vdyxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBtb2RlXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgIGNhbmNlbEVkaXRcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBpZiAoY2F0ZWdvcnkgPT09IG51bGwpe1xuICAgICAgICAgICAgY2F0ZWdvcnkgPSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtjc3MubWFpbn0gaWQ9XCJUZXN0XCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHNhZGRcbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQndCw0LfQstCw0L3QuNC1XCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9ezo6dGhpcy5oYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50Q2xhc3M9XCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JrQsNGC0LXQs9C+0YDQuNGPXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NhdGVnb3J5fVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtjYXRlZ29yeTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ey0xfT7QmtCw0YLQtdCz0L7RgNC40Y8gKNC90LXRgik8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17Y2F0ZWdvcnkuaWR9IHZhbHVlPXtjYXRlZ29yeS5pZH0+e2NhdGVnb3J5Lm5hbWV9PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cblxuICAgICAgICAgICAgICAgIHsvKjxGb3JtQ29udHJvbFxuICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudENsYXNzPVwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LTQutCw0YLQtdCz0L7RgNC40Y9cIlxuICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ey0xfT7Qn9C+0LTQutCw0YLQtdCz0L7RgNC40Y8gKNC90LXRgik8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgPG9wdGlvbj4yPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgIDxvcHRpb24+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPiovfVxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmVuZWZpY2lhcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cItCR0LXQvdC10YTQuNGG0LjQsNGA0YtcIiBkaXNhYmxlZD17dHJ1ZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24+KzwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwLkJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgIHttb2RlID09ICdjcmVhdGUnICYmIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXs6OnRoaXMuc3VibWl0fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuY2FuU3VibWl0KCl9XG4gICAgICAgICAgICAgICAgPtCU0L7QsdCw0LLQuNGC0Yw8L0J1dHRvbj59XG5cbiAgICAgICAgICAgICAgICB7bW9kZSA9PSAnZWRpdCcgJiYgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBic1N0eWxlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9ezo6dGhpcy5zYXZlfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuY2FuU3VibWl0KCl9XG4gICAgICAgICAgICAgICAgPtCh0L7RhdGA0LDQvdC40YLRjDwvQnV0dG9uPn1cblxuICAgICAgICAgICAgICAgIHttb2RlID09ICdlZGl0JyAmJiA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhbmNlbEVkaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjYW5jZWxFZGl0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAg0J7RgtC80LXQvdCwXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+fVxuXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cC5CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpbmNvbWUgJiYgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleHBlbnNlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT1cImRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoe2luY29tZTogdHJ1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID4tPC9CdXR0b24+fVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhaW5jb21lICYmIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5jb21lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnNTdHlsZT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtpbmNvbWU6IGZhbHNlfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPis8L0J1dHRvbj59XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXAuQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0KHRg9C80LzQsFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9ezo6dGhpcy5oYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXRlSXNOb3d9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2RhdGVJc05vdzogZS50YXJnZXQuY2hlY2tlZH0pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7dGV4dERlY29yYXRpb246IGRhdGVJc05vdyA/ICdub25lJyA6ICdsaW5lLXRocm91Z2gnfX0+0KHQtdC50YfQsNGBPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvQ2hlY2tib3g+XG5cbiAgICAgICAgICAgICAgICB7IWRhdGVJc05vdyAmJiA8RGF0ZUlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkYXRlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17bmV3RGF0ZSA9PiB0aGlzLnNldFN0YXRlKHtkYXRlOiBuZXdEYXRlfSl9XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHM9e3ZhbGlkRGF0ZUZvcm1hdHN9XG4gICAgICAgICAgICAgICAgICAgIGJzU2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGF0ZVwiXG4gICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxuXG4gICAgY2FuU3VibWl0KCkge1xuICAgICAgICBsZXQgY2FuU3VibWl0ID0gdHJ1ZVxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGRhdGUsXG4gICAgICAgICAgICBkYXRlSXNOb3dcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcblxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF2YWx1ZSB8fCBpc05hTihwYXJzZUludCh2YWx1ZSkpIHx8IHZhbHVlID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRlSXNOb3cgJiYgIXRoaXMuZ2V0TW9tZW50RnJvbUZvcm1hdHRlZChkYXRlKS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCB7Li4udGhpcy5zdGF0ZX0pXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgY2F0ZWdvcnksXG4gICAgICAgICAgICBpbmNvbWUsXG4gICAgICAgICAgICBkYXRlSXNOb3csXG4gICAgICAgICAgICBkYXRlXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgY29uc3QgbmV3VHJhbnNhY3Rpb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpbmNvbWUsXG4gICAgICAgICAgICBjYXRlZ29yeVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkYXRlSXNOb3cpIHtcbiAgICAgICAgICAgIG5ld1RyYW5zYWN0aW9uLmRhdGUgPSBkYXRlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZVRyYW5zYWN0aW9uKG5ld1RyYW5zYWN0aW9uKVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6ICcnLCB2YWx1ZTogJzAnLCBpbmNvbWU6IGZhbHNlfSlcbiAgICB9XG5cbiAgICBlbnRlckVkaXRNb2RlKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgaW5jb21lLFxuICAgICAgICAgICAgb2ZmaWNpYWxfZGF0ZVxuICAgICAgICB9ID0gdHJhbnNhY3Rpb25cblxuICAgICAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICAgICAgICB2YWx1ZSAqPSAtMVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgbW9kZTogJ2VkaXQnLFxuICAgICAgICAgICAgaW5jb21lOiAhIWluY29tZSxcbiAgICAgICAgICAgIGRhdGVJc05vdzogZmFsc2UsXG4gICAgICAgICAgICBkYXRlOiBtb21lbnQob2ZmaWNpYWxfZGF0ZSkuZm9ybWF0KCdZWVlZLk1NLkREIEhIOm1tJylcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICAgIGluY29tZSxcbiAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgZGF0ZVxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGNvbnN0IGVkaXRlZFRyYW5zYWN0aW9uID0ge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBpbmNvbWUsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIGRhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJywgZWRpdGVkVHJhbnNhY3Rpb24pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5zYXZlVHJhbnNhY3Rpb24oZWRpdGVkVHJhbnNhY3Rpb24pXG4gICAgICAgIHRoaXMucHJvcHMuY2FuY2VsRWRpdCgpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUodGhpcy5pbml0aWFsU3RhdGUodGhpcy5wcm9wcykpXG4gICAgfVxuXG4gICAgaGFuZGxlVHlwZShlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT0gMTMgJiYgdGhpcy5jYW5TdWJtaXQoKSkge1xuICAgICAgICAgICAgdGhpcy5zdWJtaXQoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9tZW50RnJvbUZvcm1hdHRlZChkYXRlKXtcbiAgICAgICAgcmV0dXJuIG1vbWVudChkYXRlLCB2YWxpZERhdGVGb3JtYXRzKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JbnB1dFBhbmVsL2luZGV4LmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDExLjAyLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IE5hdmJhciBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL05hdmJhcidcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9OYXYnXG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZEcm9wZG93bidcbmltcG9ydCBOYXZJdGVtIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2SXRlbSdcbmltcG9ydCBNZW51SXRlbSBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL01lbnVJdGVtJ1xuXG5jb25zdCBtb250aHMgPSBbXG4gICAgJ9GP0L3QstCw0YDRjCcsXG4gICAgJ9GE0LXQstGA0LDQu9GMJyxcbiAgICAn0LzQsNGA0YInLFxuICAgICfQsNC/0YDQtdC70YwnLFxuICAgICfQvNCw0LknLFxuICAgICfQuNGO0L3RjCcsXG4gICAgJ9C40Y7Qu9GMJyxcbiAgICAn0LDQstCz0YPRgdGCJyxcbiAgICAn0YHQtdC90YLRj9Cx0YDRjCcsXG4gICAgJ9C+0LrRgtGP0LHRgNGMJyxcbiAgICAn0L3QvtGP0LHRgNGMJyxcbiAgICAn0LTQtdC60LDQsdGA0YwnLFxuXVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2FjdGlvbnNDb250cm9scyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgZGF0ZUZyb206IHByb3BzLmRhdGVGcm9tLFxuICAgICAgICAgICAgZGF0ZVRvOiBwcm9wcy5kYXRlVG9cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7ZGF0ZUZyb219ID0gdGhpcy5wcm9wc1xuICAgICAgICBjb25zdCBtb21lbnRGcm9tID0gbW9tZW50KGRhdGVGcm9tKVxuICAgICAgICBjb25zdCBjdXJyZW50TW9udGggPSBtb21lbnRGcm9tLm1vbnRoKClcbiAgICAgICAgY29uc3QgY3VycmVudFllYXIgPSBtb21lbnRGcm9tLnllYXIoKVxuXG4gICAgICAgIHJldHVybiA8TmF2YmFyIGludmVyc2UgY2xhc3NOYW1lPVwibmFycm93XCI+XG4gICAgICAgICAgICA8TmF2PlxuICAgICAgICAgICAgICAgIHsvKjxOYXZJdGVtPjxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+JiN4RTMxNDs8L2k+PC9OYXZJdGVtPiovfVxuXG4gICAgICAgICAgICAgICAgPE5hdkRyb3Bkb3duIHRpdGxlPXtjdXJyZW50WWVhcn0gaWQ9XCJiYXNpYy1uYXYtZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGRpc2FibGVkPntjdXJyZW50WWVhcn08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG5cbiAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9e21vbnRoc1tjdXJyZW50TW9udGhdfSBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICB7bW9udGhzLm1hcCgobmFtZSwgaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17Y3VycmVudE1vbnRoID09IGl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRNb250aChpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgID57bmFtZX08L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvTmF2RHJvcGRvd24+XG5cbiAgICAgICAgICAgICAgICB7Lyo8TmF2SXRlbT48aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29uc1wiPiYjeEUzMTU7PC9pPjwvTmF2SXRlbT4qL31cbiAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICA8L05hdmJhcj5cbiAgICB9XG5cbiAgICBzZXRNb250aChpbmRleCl7XG5cbiAgICAgICAgY29uc3Qge2RhdGVGcm9tfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgbmV3TW9tZW50ID0gbW9tZW50KGRhdGVGcm9tKS5jbG9uZSgpLm1vbnRoKGluZGV4KVxuICAgICAgICBjb25zdCBuZXdEYXRlRnJvbSA9IG5ld01vbWVudC5jbG9uZSgpLnN0YXJ0T2YoJ21vbnRoJykudmFsdWVPZigpXG4gICAgICAgIGNvbnN0IG5ld0RhdGVUbyA9IG5ld01vbWVudC5jbG9uZSgpLmVuZE9mKCdtb250aCcpLnZhbHVlT2YoKVxuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0RGF0ZShuZXdEYXRlRnJvbSwgbmV3RGF0ZVRvKVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zQ29udHJvbHMvaW5kZXguanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTEuMDEuMTcuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRhYmxlIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvVGFibGUnXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b25Hcm91cCdcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24nXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJ1xuXG5pbXBvcnQgU2hvcnREYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU2hvcnREYXRlJ1xuaW1wb3J0ICcuL1RyYW5zYWN0aW9uc0xpc3QuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvbnNMaXN0KHtcbiAgICB0cmFuc2FjdGlvbnMsXG4gICAgY2F0ZWdvcmllcyxcbiAgICBkZWxldGVUcmFuc2FjdGlvbixcbiAgICBlZGl0VHJhbnNhY3Rpb25cbn0pIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJUcmFuc2FjdGlvbnNMaXN0XCI+XG4gICAgICAgIDxUYWJsZSByZXNwb25zaXZlIGNvbmRlbnNlZCBzdHJpcGVkIGNsYXNzTmFtZT1cIm1haW4tdGFibGVcIj5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICA8dGg+0JTQsNGC0LA8L3RoPlxuICAgICAgICAgICAgICAgIDx0aD7QndCw0LfQstCw0L3QuNC1PC90aD5cbiAgICAgICAgICAgICAgICA8dGg+0JrQsNGC0LXQs9C+0YDQuNGPPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+0J/QvtC00LrQsNGC0LXQs9C+0YDQuNGPPC90aD5cbiAgICAgICAgICAgICAgICA8dGg+0JHQtdC90LXRhNC40YbQuNCw0YDRizwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiAncmlnaHQnfX0+0KHRg9C80LzQsDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXt7dGV4dEFsaWduOiAncmlnaHQnfX0+0JTQtdC50YHRgtCy0LjRjzwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHt0cmFuc2FjdGlvbnMubWFwKHRhID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeUluZGV4ID0gY2F0ZWdvcmllcy5maW5kSW5kZXgoY2F0ID0+IGNhdC5pZCA9PSB0YS5jYXRlZ29yeSlcbiAgICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeU5hbWUgPSBjYXRlZ29yeUluZGV4ID4gLTEgPyBjYXRlZ29yaWVzW2NhdGVnb3J5SW5kZXhdLm5hbWUgOiAnJ1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDx0ciBrZXk9e3RhLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjxTaG9ydERhdGUgbW9tZW50RGF0ZT17dGEub2ZmaWNpYWxfZGF0ZX0vPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57dGEubmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2NhdGVnb3J5TmFtZX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRkXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKCd0YS12YWx1ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGV4dC1zdWNjZXNzJzogdGEudmFsdWUgPiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0ZXh0LWRhbmdlcic6IHRhLnZhbHVlIDwgMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3RleHRBbGlnbjogJ3JpZ2h0J319XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0YS52YWx1ZSA+IDAgJiYgJysnfXt0YS52YWx1ZX0g0LPRgNC9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7dGV4dEFsaWduOiAncmlnaHQnfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uR3JvdXAgYnNTaXplPVwieHNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBlZGl0VHJhbnNhY3Rpb24odGEuaWQpfT7QmNC30LzQtdC90LjRgtGMPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVUcmFuc2FjdGlvbih0YS5pZCl9PtCj0LTQsNC70LjRgtGMPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkdyb3VwPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgPC9kaXY+XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9jb21wb25lbnRzL1RyYW5zYWN0aW9uc0xpc3QvaW5kZXguanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMTQuMDEuMTcuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUYWJsZSBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL1RhYmxlJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmFuc2FjdGlvbnNTdW1tYXJ5KHtcbiAgICB0b3RhbEluY29tZSxcbiAgICB0b3RhbEV4cGVuc2VzLFxuICAgIGV4cGVjdGVkUmVtYWlucyxcbn0pIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJUcmFuc2FjdGlvbnNTdW1tYXJ5XCI+XG4gICAgICAgIDxUYWJsZSByZXNwb25zaXZlIGNvbmRlbnNlZCBzdHJpcGVkPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoPtCS0YHQtdCz0L4g0LTQvtGF0L7QtNC+0LI8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGg+0JLRgdC10LPQviDRgNCw0YHRhdC+0LTQvtCyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoPtCg0LDRgdGB0YfQtdGC0L3Ri9C5INC+0YHRgtCw0YLQvtC6PC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJ0ZXh0LXN1Y2Nlc3NcIj57dG90YWxJbmNvbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e3RvdGFsRXhwZW5zZXN9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkPntleHBlY3RlZFJlbWFpbnN9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICA8L2Rpdj5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zU3VtbWFyeS9pbmRleC5qc3giLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwNy4wMS4xNy5cbiAqL1xuXG5pbXBvcnQge2FwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVuayBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgcHJvbWlzZU1pZGRsZXdhcmUgZnJvbSAnLi9wcm9taXNlTWlkZGxld2FyZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoaW5pdGlhbFN0YXRlID0ge30pIHtcblxuICAgIGxldCBlbmhhbmNlclxuICAgIGNvbnN0IG1pZGRsZXdhcmVzID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBwcm9taXNlTWlkZGxld2FyZSlcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyl7XG5cbiAgICAgICAgY29uc3QgRGV2VG9vbHMgPSByZXF1aXJlKCcuLi9jbGllbnQvY29tcG9uZW50cy9EZXZUb29scy9pbmRleCcpLmRlZmF1bHRcblxuICAgICAgICBlbmhhbmNlciA9IGNvbXBvc2UoXG4gICAgICAgICAgICBtaWRkbGV3YXJlcyxcbiAgICAgICAgICAgIERldlRvb2xzLmluc3RydW1lbnQoKVxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgZW5oYW5jZXIgPSBtaWRkbGV3YXJlc1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xuXG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vcmVkdWNlcnMnLCAoKSA9PlxuICAgICAgICAgICAgc3RvcmUucmVwbGFjZVJlZHVjZXIocmVxdWlyZSgnLi9yZWR1Y2Vycy9pbmRleCcpLmRlZmF1bHQpXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3JlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvY29uZmlndXJlU3RvcmUuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAwNy4wMS4xNy5cbiAqL1xuXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IEdyaWQgIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvR3JpZCc7XG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZiYXInO1xuaW1wb3J0IE5hdkl0ZW0gIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvTmF2SXRlbSc7XG5cbmltcG9ydCAnbWF0ZXJpYWwtZGVzaWduLWljb25zLWljb25mb250L2Rpc3QvZm9udHMvbWF0ZXJpYWwtaWNvbnMuY3NzJ1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IExpbmtDb250YWluZXIgZnJvbSAncmVhY3Qtcm91dGVyLWJvb3RzdHJhcC9saWIvTGlua0NvbnRhaW5lcic7XG5cbmltcG9ydCAnLi9ib290c3RyYXAuY3NzJ1xuaW1wb3J0ICcuL2xvY2FsLmNzcydcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICAgICAgICAgIDxOYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5CcmFuZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9cIj5FWFBFTlNFUzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmJhci5Ub2dnbGUgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZiYXIuSGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdiBuYXZiYXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtDb250YWluZXIgdG89XCIvY2F0ZWdvcmllc1wiPjxOYXZJdGVtPtCa0LDRgtC10LPQvtGA0LjQuDwvTmF2SXRlbT48L0xpbmtDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlci5pZCA+IDAgJiYgPE5hdkl0ZW0gaHJlZj1cIi9sb2dvdXRcIj5Mb2cgb3V0PC9OYXZJdGVtPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2PlxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L05hdmJhcj5cbiAgICAgICAgICAgICAgICA8R3JpZD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5BcHAucHJvcFR5cGVzID0gcHJvcFR5cGVzXG5cbmV4cG9ydCBkZWZhdWx0IEFwcCA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICB1c2VyOiBzdGF0ZS51c2VyXG59KSkoQXBwKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvQXBwL2luZGV4LmpzeCIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDE0LjAxLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQ2F0ZWdvcmllc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzTGlzdCdcbmltcG9ydCBDYXRlZ29yaWVzQ29udHJvbHMgZnJvbSAnLi4vY29tcG9uZW50cy9DYXRlZ29yaWVzQ29udHJvbHMnXG5pbXBvcnQgQ2F0ZWdvcnlNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL0NhdGVnb3J5TW9kYWwnXG5cbmltcG9ydCB7XG4gICAgY2F0ZWdvcmllc1BhZ2VJbml0LFxuICAgIGNyZWF0ZUNhdGVnb3J5XG59IGZyb20gJy4uL2FjdGlvbnMvY2F0ZWdvcmllc0FjdGlvbnMnXG5cbmNsYXNzIENhdGVnb3JpZXNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHN0YXRpYyBpbml0aWFsaXplKGRpc3BhdGNoKSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChjYXRlZ29yaWVzUGFnZUluaXQoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW5SZXF1aXJlZCA9IHRydWVcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBtb2RhbE9wZW46IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xuICAgICAgICAvL1NTUiFcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2F0ZWdvcmllcyxcblxuICAgICAgICAgICAgZGlzcGF0Y2hcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICByZXR1cm4gPGRpdj5cblxuICAgICAgICAgICAgPENhdGVnb3JpZXNDb250cm9scyB7Li4ue1xuICAgICAgICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5OiAoKSA9PiB0aGlzLnNldFN0YXRlKHttb2RhbE9wZW46IHRydWV9KVxuICAgICAgICAgICAgfX0vPlxuXG4gICAgICAgICAgICA8Q2F0ZWdvcmllc0xpc3Qgey4uLntcbiAgICAgICAgICAgICAgICBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5tb2RhbE9wZW4gJiYgPENhdGVnb3J5TW9kYWwgey4uLntcbiAgICAgICAgICAgICAgICBjbG9zZTogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7bW9kYWxPcGVuOiBmYWxzZX0pLFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogYXN5bmMgY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkaXNwYXRjaChjcmVhdGVDYXRlZ29yeShjYXRlZ29yeSkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe21vZGFsT3BlbjogZmFsc2V9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19Lz59XG5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzUGFnZSA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICBjYXRlZ29yaWVzOiBzdGF0ZS5jYXRlZ29yaWVzLmxpc3Rcbn0pKShDYXRlZ29yaWVzUGFnZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvQ2F0ZWdvcmllc1BhZ2UuanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjIuMDMuMTcuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwJ1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2wnXG5pbXBvcnQgQ29udHJvbExhYmVsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQ29udHJvbExhYmVsJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0J1dHRvbidcbmltcG9ydCBBbGVydCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0J1xuaW1wb3J0IHVybCBmcm9tICd1cmwnXG5cbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgYW5vbnltb3VzUmVxdWlyZWQgPSB0cnVlXG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3QgbWFpblN0eWxlID0ge31cbiAgICAgICAgY29uc3QgZm9ybVN0eWxlID0ge1xuICAgICAgICAgICAgd2lkdGg6JzQwMHB4JyxcbiAgICAgICAgICAgIG1hcmdpbjonYXV0bydcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHtxdWVyeX0gPSB1cmwucGFyc2UodXJsLmZvcm1hdCh0aGlzLnByb3BzLmxvY2F0aW9uKSwgdHJ1ZSlcblxuICAgICAgICBjb25zdCBhY3Rpb25QYXRoID0gJy9sb2dpbidcblxuICAgICAgICByZXR1cm4gPGRpdiBzdHlsZT17bWFpblN0eWxlfT5cbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249e2FjdGlvblBhdGh9IHN0eWxlPXtmb3JtU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cIm5leHRVcmxcIiB2YWx1ZT17cXVlcnkubmV4dH0gLz5cblxuICAgICAgICAgICAgICAgIHtxdWVyeS5lcnJvciAmJiA8QWxlcnQgYnNTdHlsZT1cImRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+RW1haWwgb3IgcGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ghPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHA+VHJ5IGFnYWluIG9yIHZpc2l0IHVzIGxhdGVyPC9wPlxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+fVxuXG4gICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xMYWJlbD5lbWFpbDo8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImVtYWlsXCIgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cblxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgIDxDb250cm9sTGFiZWw+cGFzc3dvcmQ6PC9Db250cm9sTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2UgPSBjb25uZWN0KCkoTG9naW5QYWdlKVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zaGFyZWQvY29udGFpbmVycy9Mb2dpblBhZ2UuanN4IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMDkuMDEuMTcuXG4gKi9cblxuaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuaW1wb3J0IHtcbiAgICB0cmFuc2FjdGlvbnNQYWdlSW5pdCxcbiAgICBjcmVhdGVUcmFuc2FjdGlvbixcbiAgICBlZGl0VHJhbnNhY3Rpb24sXG4gICAgZGVsZXRlVHJhbnNhY3Rpb24sXG4gICAgc2V0RGF0ZU9mZnNldHNVcGRhdGVcbn0gZnJvbSAnLi4vYWN0aW9ucy90cmFuc2FjdGlvbnNBY3Rpb25zJ1xuXG5pbXBvcnQgVHJhbnNhY3Rpb25JbnB1dFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JbnB1dFBhbmVsJ1xuaW1wb3J0IFRyYW5zYWN0aW9uc0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2FjdGlvbnNMaXN0J1xuaW1wb3J0IFRyYW5zYWN0aW9uc1N1bW1hcnkgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc2FjdGlvbnNTdW1tYXJ5J1xuaW1wb3J0IFRyYW5zYWN0aW9uc0NvbnRyb2xzIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25zQ29udHJvbHMnXG5cbm1vbWVudC5sb2NhbGUoJ3J1JylcblxuY2xhc3MgVHJhbnNhY3Rpb25zUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBzdGF0aWMgaW5pdGlhbGl6ZShkaXNwYXRjaCkge1xuICAgICAgICByZXR1cm4gZGlzcGF0Y2godHJhbnNhY3Rpb25zUGFnZUluaXQoKSlcbiAgICB9XG5cbiAgICBzdGF0aWMgbG9naW5SZXF1aXJlZCA9IHRydWVcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBhY3RpdmVUcmFuc2FjdGlvbjogZmFsc2VcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnRyYW5zYWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIFRyYW5zYWN0aW9uc1BhZ2UuaW5pdGlhbGl6ZSh0aGlzLnByb3BzLmRpc3BhdGNoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICB0cmFuc2FjdGlvbnMsXG4gICAgICAgICAgICB0b3RhbEluY29tZSxcbiAgICAgICAgICAgIHRvdGFsRXhwZW5zZXMsXG4gICAgICAgICAgICBleHBlY3RlZFJlbWFpbnMsXG4gICAgICAgICAgICBkYXRlRnJvbSxcbiAgICAgICAgICAgIGRhdGVUbyxcblxuICAgICAgICAgICAgY2F0ZWdvcmllcyxcblxuICAgICAgICAgICAgZGlzcGF0Y2hcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCB7YWN0aXZlVHJhbnNhY3Rpb259ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIHRyYW5zYWN0aW9ucyA9IHRyYW5zYWN0aW9ucy5tYXAodGEgPT4gKHtcbiAgICAgICAgICAgIC4uLnRhLFxuICAgICAgICAgICAgY3JlYXRlZDogbW9tZW50KHRhLmNyZWF0ZWQpLFxuICAgICAgICAgICAgdXBkYXRlZDogbW9tZW50KHRhLnVwZGF0ZWQpLFxuICAgICAgICAgICAgb2ZmaWNpYWxfZGF0ZTogbW9tZW50KHRhLm9mZmljaWFsX2RhdGUpXG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiA8ZGl2IGlkPVwiVHJhbnNhY3Rpb25zUGFnZVwiPlxuXG4gICAgICAgICAgICA8VHJhbnNhY3Rpb25zQ29udHJvbHMgey4uLntcbiAgICAgICAgICAgICAgICBkYXRlRnJvbSxcbiAgICAgICAgICAgICAgICBkYXRlVG8sXG4gICAgICAgICAgICAgICAgc2V0RGF0ZTogKGZyb20sIHRvKSA9PiBkaXNwYXRjaChzZXREYXRlT2Zmc2V0c1VwZGF0ZShmcm9tLCB0bykpXG4gICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICA8VHJhbnNhY3Rpb25zU3VtbWFyeSB7Li4ue1xuICAgICAgICAgICAgICAgIHRvdGFsSW5jb21lLFxuICAgICAgICAgICAgICAgIHRvdGFsRXhwZW5zZXMsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRSZW1haW5zLFxuICAgICAgICAgICAgfX0gLz5cblxuICAgICAgICAgICAgPFRyYW5zYWN0aW9uc0xpc3Qgey4uLntcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnMsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICBkZWxldGVUcmFuc2FjdGlvbjogOjp0aGlzLmNvbmZpcm1EZWxldGlvbixcbiAgICAgICAgICAgICAgICBlZGl0VHJhbnNhY3Rpb246IDo6dGhpcy5lbnRlckVkaXRNb2RlXG4gICAgICAgICAgICB9fSAvPlxuXG4gICAgICAgICAgICA8VHJhbnNhY3Rpb25JbnB1dFBhbmVsIHsuLi57XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyxcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbjogYWN0aXZlVHJhbnNhY3Rpb24sXG4gICAgICAgICAgICAgICAgY3JlYXRlVHJhbnNhY3Rpb246IHRhID0+IGRpc3BhdGNoKGNyZWF0ZVRyYW5zYWN0aW9uKHRhKSksXG4gICAgICAgICAgICAgICAgc2F2ZVRyYW5zYWN0aW9uOiB0YSA9PiBkaXNwYXRjaChlZGl0VHJhbnNhY3Rpb24odGEuaWQsIHRhKSksXG4gICAgICAgICAgICAgICAgY2FuY2VsRWRpdDogKCkgPT4gdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVHJhbnNhY3Rpb246IGZhbHNlfSlcbiAgICAgICAgICAgIH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIH1cblxuICAgIGNvbmZpcm1EZWxldGlvbihpZCl7XG4gICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gdGhpcy5wcm9wcy50cmFuc2FjdGlvbnMuZmluZCh0YSA9PiB0YS5pZCA9PSBpZClcbiAgICAgICAgaWYgKGNvbmZpcm0oYNCj0LTQsNC70LjRgtGMINGC0YDQsNC90LfQsNC60YbQuNGOIFwiJHt0cmFuc2FjdGlvbi5uYW1lfVwiP2ApKXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goZGVsZXRlVHJhbnNhY3Rpb24oaWQpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW50ZXJFZGl0TW9kZShpZCl7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVRyYW5zYWN0aW9uID0gdGhpcy5wcm9wcy50cmFuc2FjdGlvbnMuZmluZCh0YSA9PiB0YS5pZCA9PSBpZClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVUcmFuc2FjdGlvblxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNhY3Rpb25zUGFnZSA9IGNvbm5lY3Qoc3RhdGUgPT4gKHtcbiAgICB0cmFuc2FjdGlvbnM6IHN0YXRlLnRyYW5zYWN0aW9ucy5saXN0LFxuICAgIHRvdGFsSW5jb21lOiBzdGF0ZS50cmFuc2FjdGlvbnMudG90YWxJbmNvbWUsXG4gICAgdG90YWxFeHBlbnNlczogc3RhdGUudHJhbnNhY3Rpb25zLnRvdGFsRXhwZW5zZXMsXG4gICAgZXhwZWN0ZWRSZW1haW5zOiBzdGF0ZS50cmFuc2FjdGlvbnMuZXhwZWN0ZWRSZW1haW5zLFxuICAgIGRhdGVGcm9tOiBzdGF0ZS50cmFuc2FjdGlvbnMuZGF0ZUZyb20sXG4gICAgZGF0ZVRvOiBzdGF0ZS50cmFuc2FjdGlvbnMuZGF0ZVRvLFxuXG4gICAgY2F0ZWdvcmllczogc3RhdGUuY2F0ZWdvcmllcy5saXN0XG59KSkoVHJhbnNhY3Rpb25zUGFnZSlcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL2NvbnRhaW5lcnMvVHJhbnNhY3Rpb25zUGFnZS5qc3giLCIvKipcbiAqIENyZWF0ZWQgYnkgbGVyYXluZSBvbiAxNy4wMS4xNy5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9taXNlTWlkZGxld2FyZSh7Z2V0U3RhdGUsIGRpc3BhdGNofSkge1xuICAgIHJldHVybiBuZXh0ID0+IGFjdGlvbiA9PiB7XG4gICAgICAgIGlmICghYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXh0KGFjdGlvbilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHt0eXBlLCBwcm9taXNlLCAuLi5yZXN0fSA9IGFjdGlvblxuXG4gICAgICAgICAgICBuZXh0KGFjdGlvbilcblxuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihcbiAgICAgICAgICAgICAgICByZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJlc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiByZXN1bHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlICsgJ19TVUNDRVNTJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIG5leHQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSArICdfRkFJTFVSRSdcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9wcm9taXNlTWlkZGxld2FyZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDE5LjAyLjE3LlxuICovXG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBsaXN0OiBbXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIGNvbnN0IHt0eXBlLCBwYXlsb2FkfSA9IGFjdGlvblxuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ0ZFVENIX0NBVEVHT1JJRVNfU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxpc3Q6IHBheWxvYWQubGlzdFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0NSRUFURV9DQVRFR09SWV9TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbGlzdDogW3BheWxvYWQsIC4uLnN0YXRlLmxpc3RdXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3JlZHVjZXJzL2NhdGVnb3JpZXNSZWR1Y2VyLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMDcuMDEuMTcuXG4gKi9cblxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdHJhbnNhY3Rpb25zIGZyb20gJy4vdHJhbnNhY3Rpb25zUmVkdWNlcidcbmltcG9ydCBjYXRlZ29yaWVzIGZyb20gJy4vY2F0ZWdvcmllc1JlZHVjZXInXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXJSZWR1Y2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICAgIHRyYW5zYWN0aW9ucyxcbiAgICBjYXRlZ29yaWVzLFxuICAgIHVzZXJcbn0pXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9yZWR1Y2Vycy9pbmRleC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDEwLjAxLjE3LlxuICovXG5cbmltcG9ydCBuZXdTdGF0ZSBmcm9tICdpbW11dGFiaWxpdHktaGVscGVyJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgbGlzdDogW10sXG4gICAgdG90YWxJbmNvbWU6IDAsXG4gICAgdG90YWxFeHBlbnNlczogMCxcbiAgICBleHBlY3RlZFJlbWFpbnM6IDAsXG4gICAgZGF0ZUZyb206IDAsXG4gICAgZGF0ZVRvOiAwXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4cGVuc2VzUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gICAgY29uc3Qge3R5cGUsIHBheWxvYWR9ID0gYWN0aW9uXG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcblxuICAgICAgICBjYXNlICdTRVRfREFURV9PRkZTRVRTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZGF0ZUZyb206IHBheWxvYWQuZGF0ZUZyb20sXG4gICAgICAgICAgICAgICAgZGF0ZVRvOiBwYXlsb2FkLmRhdGVUb1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0ZFVENIX1RSQU5TQUNUSU9OU19TVUNDRVNTJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbGlzdDogcGF5bG9hZC5saXN0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnQ1JFQVRFX1RSQU5TQUNUSU9OX1NVQ0NFU1MnOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsaXN0OiBbcGF5bG9hZCwgLi4uc3RhdGUubGlzdF1cbiAgICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdERUxFVEVfVFJBTlNBQ1RJT05fU1VDQ0VTUyc6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxpc3Q6IHN0YXRlLmxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPSBwYXlsb2FkLmlkKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgJ0ZFVENIX1NVTU1BUllfU1VDQ0VTUyc6XG4gICAgICAgICAgICBjb25zdCB7dG90YWxJbmNvbWUsIHRvdGFsRXhwZW5zZXMsIGV4cGVjdGVkUmVtYWluc30gPSBwYXlsb2FkXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvdGFsSW5jb21lLFxuICAgICAgICAgICAgICAgIHRvdGFsRXhwZW5zZXMsXG4gICAgICAgICAgICAgICAgZXhwZWN0ZWRSZW1haW5zXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnRURJVF9UUkFOU0FDVElPTl9TVUNDRVNTJzpcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldFRBSW5kZXggPSBzdGF0ZS5saXN0LmZpbmRJbmRleCh0YSA9PiB0YS5pZCA9PSBwYXlsb2FkLmlkKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRURJVF9UUkFOU0FDVElPTl9TVUNDRVNTJywgcGF5bG9hZCwgdGFyZ2V0VEFJbmRleClcblxuICAgICAgICAgICAgaWYgKHRhcmdldFRBSW5kZXggPT0gLTEpIHJldHVybiBzdGF0ZVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3U3RhdGUoc3RhdGUsIHtsaXN0OiB7W3RhcmdldFRBSW5kZXhdOiB7JHNldDogcGF5bG9hZH19fSlcblxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9yZWR1Y2Vycy90cmFuc2FjdGlvbnNSZWR1Y2VyLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGxlcmF5bmUgb24gMjIuMDMuMTcuXG4gKi9cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIGlkOiAtMSxcbiAgICBlbWFpbDonJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICAgIGNvbnN0IHt0eXBlLCBwYXlsb2FkfSA9IGFjdGlvblxuXG4gICAgc3dpdGNoKHR5cGUpIHtcbiAgICAgICAgY2FzZSAnU0VUX1VTRVInOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBpZDogcGF5bG9hZC5pZCxcbiAgICAgICAgICAgICAgICBlbWFpbDogcGF5bG9hZC5lbWFpbFxuICAgICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NoYXJlZC9yZWR1Y2Vycy91c2VyUmVkdWNlci5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBsZXJheW5lIG9uIDA3LjAxLjE3LlxuICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEluZGV4Um91dGUsIFJvdXRlIH0gIGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBBcHAgZnJvbSAnLi9jb250YWluZXJzL0FwcCdcbmltcG9ydCBUcmFuc2FjdGlvbnNQYWdlIGZyb20gJy4vY29udGFpbmVycy9UcmFuc2FjdGlvbnNQYWdlJ1xuaW1wb3J0IENhdGVnb3JpZXNQYWdlIGZyb20gJy4vY29udGFpbmVycy9DYXRlZ29yaWVzUGFnZSdcbmltcG9ydCBMb2dpblBhZ2UgZnJvbSAnLi9jb250YWluZXJzL0xvZ2luUGFnZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm91dGVzQ29tcG9uZW50KHN0b3JlKSB7XG4gICAgcmV0dXJuIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0gcGF0aD0nLyc+XG4gICAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17VHJhbnNhY3Rpb25zUGFnZX0vPlxuICAgICAgICA8Um91dGUgcGF0aD1cImNhdGVnb3JpZXNcIiBjb21wb25lbnQ9e0NhdGVnb3JpZXNQYWdlfSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImxvZ2luXCIgY29tcG9uZW50PXtMb2dpblBhZ2V9IC8+XG4gICAgPC9Sb3V0ZT5cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2hhcmVkL3JvdXRlcy5qc3giLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiVHJhbnNhY3Rpb25JbnB1dFBhbmVsLW1haW4tLTNuM01FXCJcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvVHJhbnNhY3Rpb25JbnB1dFBhbmVsL1RyYW5zYWN0aW9uSW5wdXRQYW5lbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmNyeXB0anNcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNsYXNzbmFtZXNcIlxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tdXRhYmlsaXR5LWhlbHBlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImltbXV0YWJpbGl0eS1oZWxwZXJcIlxuLy8gbW9kdWxlIGlkID0gNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJteXNxbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm15c3FsXCJcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvQWxlcnRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0FsZXJ0XCJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvQ2hlY2tib3hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0NoZWNrYm94XCJcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvR3JpZFwiXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXAvbGliL0lucHV0R3JvdXBcIlxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9NZW51SXRlbVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTWVudUl0ZW1cIlxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9Nb2RhbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWxcIlxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwL2xpYi9OYXZEcm9wZG93blwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcC9saWIvTmF2RHJvcGRvd25cIlxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tL3NlcnZlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWJvb3RzdHJhcC9saWIvTGlua0NvbnRhaW5lclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0LXJvdXRlci1ib290c3RyYXAvbGliL0xpbmtDb250YWluZXJcIlxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29sc1wiXG4vLyBtb2R1bGUgaWQgPSA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1kb2NrLW1vbml0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1kb2NrLW1vbml0b3JcIlxuLy8gbW9kdWxlIGlkID0gODJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtbG9nLW1vbml0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1sb2ctbW9uaXRvclwiXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlZHV4LXRodW5rXCJcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=