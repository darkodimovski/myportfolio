"use strict";
(() => {
var exports = {};
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/code.2b683def.jpg","height":427,"width":640,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAA//aAAwDAQACEAMQAAAAkgg//8QAGhAAAQUBAAAAAAAAAAAAAAAAAwABAgQRYf/aAAgBAQABPwBq1c0SEeHc1f/EABkRAQACAwAAAAAAAAAAAAAAAAEAAxIhcf/aAAgBAgEBPwCkMDQ9J//EABsRAAIBBQAAAAAAAAAAAAAAAAECAAMTISJB/9oACAEDAQE/AK7NcbZhnhn/2Q=="});

/***/ }),

/***/ 6596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* unused harmony export default */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7985);



function Chakra({ cookies , children  }) {
    const colorModeManager = typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;
    return(/*#__PURE__*/ _jsx(ChakraProvider, {
        theme: theme,
        colorModeManager: colorModeManager,
        /*#__PURE__*/ children: children
    }));
};
async function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ''
        }
    };
}


/***/ }),

/***/ 7578:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const StyledDiv = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    shouldForwardProp: (prop)=>{
        return (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.shouldForwardProp)(prop) || prop === 'transition';
    }
});
const Section = ({ children , delay =0  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledDiv, {
        initial: {
            y: 10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.8,
            delay
        },
        mb: 6,
        children: children
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);

});

/***/ }),

/***/ 4330:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* reexport safe */ _components_chakra__WEBPACK_IMPORTED_MODULE_6__.N)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7578);
/* harmony import */ var _components_grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(603);
/* harmony import */ var _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2857);
/* harmony import */ var _public_images_works_code_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5691);
/* harmony import */ var _components_chakra__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6596);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_section__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__]);
([_components_section__WEBPACK_IMPORTED_MODULE_2__, _components_layouts_article__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);






const Works = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layouts_article__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        title: "Works",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                    as: "h3",
                    fontSize: 20,
                    mb: 4,
                    children: "Works"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                    columns: [
                        1,
                        1,
                        2
                    ],
                    gap: 6,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_grid_item__WEBPACK_IMPORTED_MODULE_3__/* .WorkGridItem */ .Et, {
                                id: "chatapp",
                                title: "Scaledrone Chat App",
                                thumbnail: _public_images_works_code_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_grid_item__WEBPACK_IMPORTED_MODULE_3__/* .WorkGridItem */ .Et, {
                                id: "todoapp",
                                title: "Todo App",
                                thumbnail: _public_images_works_code_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_section__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_grid_item__WEBPACK_IMPORTED_MODULE_3__/* .WorkGridItem */ .Et, {
                                id: "cv",
                                title: "Curiculum Vitae",
                                thumbnail: _public_images_works_code_jpg__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                            })
                        })
                    ]
                })
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Works);


});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,985,857], () => (__webpack_exec__(4330)));
module.exports = __webpack_exports__;

})();