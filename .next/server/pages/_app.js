"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 6390:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navigation_Nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3738);
/* harmony import */ var _Navigation_Nav_Mob_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7144);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_sizeContext_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9768);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Navigation_Nav_js__WEBPACK_IMPORTED_MODULE_2__, _Navigation_Nav_Mob_js__WEBPACK_IMPORTED_MODULE_3__]);
([_components_Navigation_Nav_js__WEBPACK_IMPORTED_MODULE_2__, _Navigation_Nav_Mob_js__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["html{box-sizing:border-box;--main_color:#e6ccb2;--darkest:#000000;--counter_light:#f3eadd;--another_light:#ead4be;--counter_med:#bcbcbc;--counter_dark:#524335;--alert:red;--success:blue;--shadow:#281e3254;--nav_height:7vh;--nav_width:10vh;}*,*:before,*:after{box-sizing:inherit;}body{padding:0;margin:0;width:100vw;background-color:var(--main_color);overflow-x:hidden;font-size:16px;font-family:'Cinzel',serif;}a{text-decoration:none;}a:hover{text-decoration:underline;}.main-container{max-width:1200px;margin:0 auto;}"]);
const DynamicNav = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3738)), {
  ssr: false,
  loadableGenerated: {
    modules: ["..\\components\\Layout.js -> " + "./Navigation/Nav.js"]
  }
});

const Layout = ({
  children
}) => {
  const size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_sizeContext_js__WEBPACK_IMPORTED_MODULE_5__/* .SizeContext */ .X);
  console.log("LAYOUT ..size", size);
  return size && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(GlobalStyles, {}), size === "large" || size === "desktop" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_Navigation_Nav_js__WEBPACK_IMPORTED_MODULE_2__["default"]
    /* currentUser={currentUser} */
    , {}) : size === "tablet" || size === "phone" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_Navigation_Nav_Mob_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    /* currentUser={currentUser} */
    , {}) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      children: children
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3738:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8925);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5157);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8472);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_auth__WEBPACK_IMPORTED_MODULE_4__]);
_helpers_auth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


 // Components

 // Helper Functions







gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_5__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__.ScrollTrigger); //Website Navigation

const Nav = ({
  currentUser
}) => {
  console.log("-- DESKTOP NAVBAR");
  const path = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().pathname;
  const {
    0: activateNav,
    1: setActivateNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    role,
    name,
    access
  } = currentUser ? Object.values(currentUser)[0] : {};
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    activateNav ? setActivateNav(!activateNav) : "";
  }, [path]);

  const homePageNavigation = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "navContainer_multiple_ul",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            className: "navContainer-li logo",
            children: "Murjan"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/shop/1",
            className: "navContainer-li shop-remove",
            children: "Shop"
          })
        })
      })]
    });
  };

  const homePageNavigationAdmin = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "navContainer_multiple_ul",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/landing/admin",
            className: "navContainer-li logo",
            children: "Murjan"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/landing_edit",
            className: "navContainer-li ",
            children: "Edit Landing Page"
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/shop/1",
            className: "navContainer-li shop-remove",
            children: "Shop"
          })
        })
      })]
    });
  };

  const shopPageNavigation = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "navContainer_multiple_ul",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        className: "navContainer_ul",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          className: "cart",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("img", {
              className: "cart-icon",
              src: "https://www.freeiconspng.com/uploads/shopping-basket-icon-18.png",
              alt: "cart"
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            className: "navContainer-li shop-nav",
            children: "favourites"
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("ul", {
        className: "navContainer_ul",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/landing/admin",
            className: "navContainer-li logo",
            children: "Murjan"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        className: "navContainer_ul",
        children: [!(0,_helpers_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
            className: path.includes("signin") ? "active" : "",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/signin",
              children: "SignIn"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
            className: path.includes("signup") ? "active" : "",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
              href: "/signup",
              children: "SignUp"
            })
          })]
        }), (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_4__/* .isAuth */ .$D)() && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          onClick: _helpers_auth__WEBPACK_IMPORTED_MODULE_4__/* .logout */ .kS,
          children: "LogOut"
        }), role === "admin" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          className: path.includes("admin") ? "active" : "",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/admin",
            children: "Admin"
          })
        }) : role === "customer" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
          className: path.includes("user") ? "active" : "",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/user",
            children: name
          })
        }) : ""]
      })]
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
    className: "navContainer",
    children: path === "/" ? homePageNavigation() : path === "/landing/admin" ? homePageNavigationAdmin() : shopPageNavigation()
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_sizeContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9768);
/* harmony import */ var _Icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8925);
/* harmony import */ var _helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5157);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8472);
/* harmony import */ var gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_helpers_auth__WEBPACK_IMPORTED_MODULE_5__]);
_helpers_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



 // Components

 // Helper Functions







gsap_dist_gsap__WEBPACK_IMPORTED_MODULE_6__.gsap.registerPlugin(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_7__.ScrollTrigger); //Website Navigation

const NavMobile = ({
  currentUser
}) => {
  console.log("-- MOBILE NAVBAR");
  const path = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().pathname;
  const {
    0: activateNav,
    1: setActivateNav
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: burgerState,
    1: setBurgerState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    role,
    name,
    access
  } = currentUser ? Object.values(currentUser)[0] : {};
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("MOBILE NAVEBAR -- useEffect path", path);
    setBurgerState(false);
  }, [path]);

  const navIndependentItem = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h2", {
      className: "navbar-head",
      children: path.includes("/shop") ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/",
        children: "Murjan"
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
        href: "/shop/1",
        children: "Shop"
      })
    });
  };

  const burgerIcon = () => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: `burger-icon burger-icon${burgerState ? "--active" : ""}`,
      onClick: () => setBurgerState(!burgerState),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "line line1"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "line line2"
      })]
    });
  };

  const navigationContent = () => {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: `navbar-burger_container ${burgerState ? "active" : ""}`,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
        className: `burger-list ${burgerState ? "active" : ""}`,
        children: [(0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() && role === "admin" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: `burger-list__items${path.includes("admin") ? "active" : ""}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/admin",
            children: name
          })
        }) : (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() && role === "customer" ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: `burger-list__items${path.includes("user") ? "active" : ""}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/user",
            children: name
          })
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: `burger-list__items ${path.includes("signin") ? "active" : ""}`,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/signin",
            children: "SignIn"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: "burger-list__items",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "Cart"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: "burger-list__items",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "favourites"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: "burger-list__items",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "search"
          })
        }), (0,_helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .isAuth */ .$D)() && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("li", {
          className: "burger-list__items",
          onClick: _helpers_auth__WEBPACK_IMPORTED_MODULE_5__/* .logout */ .kS,
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
            href: "/",
            children: "LogOut"
          })
        })]
      })
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("nav", {
      className: `navbar-mobile ${burgerState ? "active" : ""}`,
      children: [navIndependentItem(), burgerIcon()]
    }), navigationContent()]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavMobile);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "c": () => (/* binding */ LandingContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const LandingContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();

const LandingContextProvider = ({
  children
}) => {
  const {
    0: landingInContext,
    1: setLanding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    0: heroVideoLoaded,
    1: setHeroVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  console.log("LANDING CONTEXT ******* ");
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(LandingContext.Provider, {
    value: {
      landingInContext,
      setLanding,
      heroVideoLoaded,
      setHeroVideo
    },
    children: children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingContextProvider);

/***/ }),

/***/ 2551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setup_withData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3625);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3159);
/* harmony import */ var next_script_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_context_userContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(212);
/* harmony import */ var _components_context_sizeContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9768);
/* harmony import */ var _components_context_filterContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2422);
/* harmony import */ var _components_context_cartContext_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9607);
/* harmony import */ var _components_context_landingContext_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(230);
/* harmony import */ var _components_context_formFieldsB4Update_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6608);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6390);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_setup_withData_js__WEBPACK_IMPORTED_MODULE_1__, _components_context_userContext__WEBPACK_IMPORTED_MODULE_3__, _components_context_filterContext__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_9__]);
([_setup_withData_js__WEBPACK_IMPORTED_MODULE_1__, _components_context_userContext__WEBPACK_IMPORTED_MODULE_3__, _components_context_filterContext__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




























const MyApp = ({
  Component,
  pageProps,
  apollo
}) => {
  console.log("_app props", pageProps);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_context_sizeContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_context_userContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_context_cartContext_js__WEBPACK_IMPORTED_MODULE_6__/* .CartContextProvider */ .GN, {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_context_formFieldsB4Update_js__WEBPACK_IMPORTED_MODULE_8__/* .FormFieldsContextProvider */ .I, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_context_filterContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_context_landingContext_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("link", {
                    rel: "preload",
                    as: "video",
                    type: "video/mp4",
                    href: "https://murjan-opti.s3.amazonaws.com/Murjan_compress.mp4"
                  })]
                })
              })
            })
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_setup_withData_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(MyApp));
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3625:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3599);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6528);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_3__]);
js_cookie__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const authLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink((operation, forward) => {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_3__["default"].get("token");
  operation.setContext(({
    headers
  }) => ({
    headers: _objectSpread({
      authorization: token ? `Bearer ${token}` : ""
    }, headers)
  }));
  return forward(operation);
});
const errorLink = (0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
  graphQLErrors,
  networkError
}) => {
  if (graphQLErrors) graphQLErrors.forEach(({
    message,
    locations,
    path
  }) => {
    console.log(`[GraphQL error]: Message: ${message}, Path: ${path}`);
  });
  if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. `);
});
const mainLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.HttpLink({
  uri: " http://localhost:5000/graphql"
});

function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([errorLink, authLink, mainLink]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default()(createClient)); //export default withApollo(createClient, { getDataFromTree });
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 3599:
/***/ ((module) => {

module.exports = require("@apollo/link-error");

/***/ }),

/***/ 4965:
/***/ ((module) => {

module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ 8472:
/***/ ((module) => {

module.exports = require("gsap/dist/gsap");

/***/ }),

/***/ 6528:
/***/ ((module) => {

module.exports = require("next-with-apollo");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 5925:
/***/ ((module) => {

module.exports = require("next/router.js");

/***/ }),

/***/ 3159:
/***/ ((module) => {

module.exports = require("next/script.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2189,3121,1563,676,1664,5152,5157,7434,792,8925,9376], () => (__webpack_exec__(2551)));
module.exports = __webpack_exports__;

})();