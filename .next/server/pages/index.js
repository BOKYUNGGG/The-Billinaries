/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/Home.module.css":
/*!***********************************!*\
  !*** ./src/pages/Home.module.css ***!
  \***********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__n9yjj\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlsbGlvbmFyaWVzLy4vc3JjL3BhZ2VzL0hvbWUubW9kdWxlLmNzcz9lNGJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19uOXlqalwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Home.module.css\n");

/***/ }),

/***/ "./src/components/BillionaryItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/BillionaryItem.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BillionaryItem)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction BillionaryItem({ billionary  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id , name , netWorth , squareImage , industries  } = billionary;\n    const onPushBillionaryId = ()=>{\n        router.push(`/billionary/${id}`);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: onPushBillionaryId,\n        className: \"jsx-d05e2a41a75c6046\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: squareImage,\n                className: \"jsx-d05e2a41a75c6046\"\n            }, void 0, false, {\n                fileName: \"/project/The-Billinaries/src/components/BillionaryItem.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-d05e2a41a75c6046\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: \"jsx-d05e2a41a75c6046\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/project/The-Billinaries/src/components/BillionaryItem.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 16\n                    }, this),\n                    \" (\",\n                    ~~(netWorth / 1000),\n                    \"B)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/project/The-Billinaries/src/components/BillionaryItem.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"jsx-d05e2a41a75c6046\",\n                children: industries[0]\n            }, void 0, false, {\n                fileName: \"/project/The-Billinaries/src/components/BillionaryItem.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d05e2a41a75c6046\",\n                children: \"img.jsx-d05e2a41a75c6046{width:100%;-webkit-border-radius:1em;-moz-border-radius:1em;border-radius:1em;margin-bottom:.5em;image-rendering:high-quality;-webkit-box-shadow:0 .1em .1em hsl(0deg 0%0%/.075),0 .2em .2em hsl(0deg 0%0%/.075),0 .4em .4em hsl(0deg 0%0%/.075),0 .8em .8em hsl(0deg 0%0%/.075),0 1em 1em hsl(0deg 0%0%/.075);-moz-box-shadow:0 .1em .1em hsl(0deg 0%0%/.075),0 .2em .2em hsl(0deg 0%0%/.075),0 .4em .4em hsl(0deg 0%0%/.075),0 .8em .8em hsl(0deg 0%0%/.075),0 1em 1em hsl(0deg 0%0%/.075);box-shadow:0 .1em .1em hsl(0deg 0%0%/.075),0 .2em .2em hsl(0deg 0%0%/.075),0 .4em .4em hsl(0deg 0%0%/.075),0 .8em .8em hsl(0deg 0%0%/.075),0 1em 1em hsl(0deg 0%0%/.075)}.container.jsx-d05e2a41a75c6046{cursor:pointer;padding-left:.2em;padding-right:.2em;-webkit-border-radius:1em;-moz-border-radius:1em;border-radius:1em;-webkit-transition:all.6s cubic-bezier(.165,.84,.44,1);-moz-transition:all.6s cubic-bezier(.165,.84,.44,1);-o-transition:all.6s cubic-bezier(.165,.84,.44,1);transition:all.6s cubic-bezier(.165,.84,.44,1)}.container.jsx-d05e2a41a75c6046:hover{-webkit-transform:scale(1.25,1.25);-moz-transform:scale(1.1,1.1);-ms-transform:scale(1.1,1.1);-o-transform:scale(1.1,1.1);transform:scale(1.1,1.1)}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/project/The-Billinaries/src/components/BillionaryItem.tsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CaWxsaW9uYXJ5SXRlbS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ3VDO0FBRXhCLFNBQVNDLGVBQWUsRUFBQ0MsV0FBVSxFQUFpQyxFQUFDO0lBQ2hGLE1BQU1DLFNBQVNILHNEQUFTQTtJQUN4QixNQUFNLEVBQ0ZJLEdBQUUsRUFDRkMsS0FBSSxFQUNKQyxTQUFRLEVBQ1JDLFlBQVcsRUFDWEMsV0FBVSxFQUNiLEdBQUdOO0lBQ0osTUFBTU8scUJBQXFCLElBQU07UUFDN0JOLE9BQU9PLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRU4sR0FBRyxDQUFDO0lBQ25DO0lBRUEscUJBQ0ksOERBQUNPO1FBQTBCQyxTQUFTSDtrREFBckI7OzBCQUNYLDhEQUFDSTtnQkFBSUMsS0FBS1A7Ozs7Ozs7MEJBQ1YsOERBQUNROzs7a0NBQUUsOERBQUNDOztrQ0FBUVg7Ozs7OztvQkFBYztvQkFBRyxDQUFDLENBQUVDLENBQUFBLFdBQVMsSUFBRztvQkFBRzs7Ozs7OzswQkFDL0MsOERBQUNTOzswQkFBR1AsVUFBVSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQzdCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWxsaW9uYXJpZXMvLi9zcmMvY29tcG9uZW50cy9CaWxsaW9uYXJ5SXRlbS50c3g/YjgzOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaWxsaW9uYXJpZXNUeXBlIH0gZnJvbSBcIkAvdHlwZXMvdHlwZXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCaWxsaW9uYXJ5SXRlbSh7YmlsbGlvbmFyeX06e2JpbGxpb25hcnkgOiBCaWxsaW9uYXJpZXNUeXBlfSl7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IFxuICAgICAgICBpZCwgXG4gICAgICAgIG5hbWUsIFxuICAgICAgICBuZXRXb3J0aCwgXG4gICAgICAgIHNxdWFyZUltYWdlLCBcbiAgICAgICAgaW5kdXN0cmllcyBcbiAgICB9ID0gYmlsbGlvbmFyeVxuICAgIGNvbnN0IG9uUHVzaEJpbGxpb25hcnlJZCA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goYC9iaWxsaW9uYXJ5LyR7aWR9YClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIG9uQ2xpY2s9e29uUHVzaEJpbGxpb25hcnlJZH0+XG4gICAgICAgICAgICA8aW1nIHNyYz17c3F1YXJlSW1hZ2V9PjwvaW1nPlxuICAgICAgICAgICAgPHA+PHN0cm9uZz57bmFtZX08L3N0cm9uZz4gKHt+fihuZXRXb3J0aC8xMDAwKX1CKTwvcD5cbiAgICAgICAgICAgIDxwPntpbmR1c3RyaWVzWzBdfTwvcD5cblxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgIHdpZHRoIDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1cyA6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbSA6IDAuNWVtO1xuICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS1yZW5kZXJpbmc6IGhpZ2gtcXVhbGl0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdyA6IDAgMC4xZW0gMC4xZW0gaHNsKDBkZWcgMCUgMCUgLyAwLjA3NSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDAuMmVtIDAuMmVtIGhzbCgwZGVnIDAlIDAlIC8gMC4wNzUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAwLjRlbSAwLjRlbSBoc2woMGRlZyAwJSAwJSAvIDAuMDc1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMC44ZW0gMC44ZW0gaHNsKDBkZWcgMCUgMCUgLyAwLjA3NSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwIDFlbSAxZW0gaHNsKDBkZWcgMCUgMCUgLyAwLjA3NSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvciA6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQgOiAwLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQgOiAwLjJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0LCAwLjQ0LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4yNSwgMS4yNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkJpbGxpb25hcnlJdGVtIiwiYmlsbGlvbmFyeSIsInJvdXRlciIsImlkIiwibmFtZSIsIm5ldFdvcnRoIiwic3F1YXJlSW1hZ2UiLCJpbmR1c3RyaWVzIiwib25QdXNoQmlsbGlvbmFyeUlkIiwicHVzaCIsImRpdiIsIm9uQ2xpY2siLCJpbWciLCJzcmMiLCJwIiwic3Ryb25nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BillionaryItem.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_BillionaryItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BillionaryItem */ \"./src/components/BillionaryItem.tsx\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Home.module.css */ \"./src/pages/Home.module.css\");\n/* harmony import */ var _Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst useHome = ()=>{\n    const [billionaries, setBillionaries] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        (async function() {\n            try {\n                const response = await fetch(\"https://billions-api.nomadcoders.workers.dev/\");\n                const json = await response.json();\n                setBillionaries(json);\n            } catch (error) {\n                console.error(\"Fetch billionaries Error : \", error);\n            }\n        })();\n        // clean up\n        return ()=>{};\n    }, []);\n    return {\n        billionaries\n    };\n};\nfunction Home() {\n    const { billionaries  } = useHome();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-c32a082d0864a378\",\n                    children: \"The Billionaries\"\n                }, void 0, false, {\n                    fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-c32a082d0864a378\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"jsx-c32a082d0864a378\" + \" \" + \"top\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"jsx-c32a082d0864a378\",\n                                children: \"Billionaries\"\n                            }, void 0, false, {\n                                fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"jsx-c32a082d0864a378\",\n                                children: \"Welcome to the Billionaries wiki\"\n                            }, void 0, false, {\n                                fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"jsx-c32a082d0864a378\" + \" \" + ((_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container) || \"\"),\n                        children: billionaries.map((billionary)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BillionaryItem__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                billionary: billionary\n                            }, billionary.id, false, {\n                                fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 23\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/project/The-Billinaries/src/pages/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"c32a082d0864a378\",\n                children: \".top.jsx-c32a082d0864a378{padding-left:1em}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ2Y7QUFDNEI7QUFDbEI7QUFHdEMsTUFBTUssVUFBVSxJQUFNO0lBQ3BCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdOLCtDQUFRQSxDQUFxQixFQUFFO0lBQ3ZFRCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1gsa0JBQWdCO1lBQ2YsSUFBRztnQkFDRCxNQUFNUSxXQUFXLE1BQU1DLE1BQU07Z0JBQzdCLE1BQU1DLE9BQU8sTUFBTUYsU0FBU0UsSUFBSTtnQkFDaENILGdCQUFnQkc7WUFDbEIsRUFDQSxPQUFNQyxPQUFNO2dCQUNWQyxRQUFRRCxLQUFLLENBQUMsK0JBQStCQTtZQUMvQztRQUNGO1FBQ0EsV0FBVztRQUNYLE9BQU0sSUFBSSxDQUVWO0lBQ0YsR0FBRSxFQUFFO0lBRUosT0FBTztRQUFDTDtJQUFZO0FBQ3RCO0FBQ2UsU0FBU08sT0FBTztJQUM3QixNQUFNLEVBQUNQLGFBQVksRUFBQyxHQUFHRDtJQUV2QixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTswQkFDSCw0RUFBQ1k7OzhCQUFNOzs7Ozs7Ozs7OzswQkFFVCw4REFBQ0M7OztrQ0FDQyw4REFBQ0M7a0VBQWtCOzswQ0FDakIsOERBQUNDOzswQ0FBRzs7Ozs7OzBDQUNKLDhEQUFDQzs7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFTCw4REFBQ0Y7bUVBQW1CWixtRUFBZ0I7a0NBRWhDRSxhQUFhYyxHQUFHLENBQUMsQ0FBQ0MsYUFBYTs0QkFDN0IscUJBQVEsOERBQUNsQixrRUFBY0E7Z0NBQXFCa0IsWUFBWUE7K0JBQTNCQSxXQUFXQyxFQUFFOzs7Ozt3QkFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFaLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWxsaW9uYXJpZXMvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEJpbGxpb25hcnlJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9CaWxsaW9uYXJ5SXRlbSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBCaWxsaW9uYXJpZXNUeXBlIH0gZnJvbSAnQC90eXBlcy90eXBlcydcblxuY29uc3QgdXNlSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW2JpbGxpb25hcmllcywgc2V0QmlsbGlvbmFyaWVzXSA9IHVzZVN0YXRlPEJpbGxpb25hcmllc1R5cGVbXT4oW10pXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIChhc3luYyBmdW5jdGlvbigpe1xuICAgICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2JpbGxpb25zLWFwaS5ub21hZGNvZGVycy53b3JrZXJzLmRldi8nKVxuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIHNldEJpbGxpb25hcmllcyhqc29uKVxuICAgICAgfVxuICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmV0Y2ggYmlsbGlvbmFyaWVzIEVycm9yIDogXCIsIGVycm9yKVxuICAgICAgfVxuICAgIH0pKClcbiAgICAvLyBjbGVhbiB1cFxuICAgIHJldHVybigpPT57XG5cbiAgICB9XG4gIH0sW10pXG5cbiAgcmV0dXJuIHtiaWxsaW9uYXJpZXN9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7YmlsbGlvbmFyaWVzfSA9IHVzZUhvbWUoKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGhlIEJpbGxpb25hcmllczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSd0b3AnPlxuICAgICAgICAgIDxoMT5CaWxsaW9uYXJpZXM8L2gxPlxuICAgICAgICAgIDxwPldlbGNvbWUgdG8gdGhlIEJpbGxpb25hcmllcyB3aWtpPC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgYmlsbGlvbmFyaWVzLm1hcCgoYmlsbGlvbmFyeSk9PntcbiAgICAgICAgICAgICAgcmV0dXJuICg8QmlsbGlvbmFyeUl0ZW0ga2V5PXtiaWxsaW9uYXJ5LmlkfSBiaWxsaW9uYXJ5PXtiaWxsaW9uYXJ5fS8+KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQgOiAxZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8Lz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkJpbGxpb25hcnlJdGVtIiwic3R5bGVzIiwidXNlSG9tZSIsImJpbGxpb25hcmllcyIsInNldEJpbGxpb25hcmllcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiSG9tZSIsInRpdGxlIiwibWFpbiIsInNlY3Rpb24iLCJoMSIsInAiLCJjb250YWluZXIiLCJtYXAiLCJiaWxsaW9uYXJ5IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();