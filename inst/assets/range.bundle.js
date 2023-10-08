(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["range"],{

/***/ "./srcjs/components/range.js":
/*!***********************************!*\
  !*** ./srcjs/components/range.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Range": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");






class Range extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
    this.styles = { left: "50%" };
  }

  firstUpdated() {
    this._input = this.shadowRoot.querySelector("input");
    this._sendOnConnect();
  }

  willUpdate(props) {
    if (!props.has("value")) {
      return;
    }

    const value = props.get("value");
    let output = this.shadowRoot.querySelector("output");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${1 - perc * 0.15}px))` };
  }

  updated() {
    this._sendThrottle();
  }

  _change() {
    this.value = parseInt(this._input.value);
    let output = this.shadowRoot.querySelector("output");
    let perc = ((this.value - this.min) * 100) / (this.max - this.min);
    this.styles = { left: `calc(${perc}% + (${1 - perc * 0.15}px))` };
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="position-relative w-100">
      <span class="float-start" style=${
      (0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)({ fontSize: .75 + `rem` })
    }>${this.min}</span>
      <span class="float-end" style=${
      (0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)({ fontSize: .75 + `rem` })
    }>${this.max}</span>
      <output class="position-absolute rounded px-1 bg-primary text-white" style=${
      (0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)(this.styles)
    }>${this.value}</output>
      <input
        @input='${this._change}'
        type='range'
        min='${this.min}'
        max='${this.max}'
        step='${this.step}'
        value='${this.value}'
        class='form-range ${this.class}'>
    </div>`;
  }
}

window.customElements.define("litter-range", Range);


/***/ }),

/***/ "./srcjs/input.js":
/*!************************!*\
  !*** ./srcjs/input.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LitInput": () => (/* binding */ LitInput)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var _css_bs5__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/bs5 */ "./srcjs/css/bs5.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update.js */ "./srcjs/update.js");
/* harmony import */ var _update_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_update_js__WEBPACK_IMPORTED_MODULE_4__);






class LitInput extends lit__WEBPACK_IMPORTED_MODULE_0__.LitElement {
  static styles = [(0,_css_bs5__WEBPACK_IMPORTED_MODULE_1__.getBs5)()];

  static properties = {
    value: { type: String },
    name: { type: String },
    class: { type: String },
    priority: { type: String },
    callback: { type: String },
    id: { type: String },
    send_on_connect: { 
      type: Boolean,
      converter: (value, type) => {
        value = value.toLowerCase();
        return value == "false" ? false : true;
      }
    },
    meta: {},
  };

  constructor() {
    super();
    this.priority = "deferred";
    this.class = "";
    this.meta = {};
    this.id = null;
    this.timeout = null;
    this.callback = "";
    this.send_on_connect = true;
  }

  firstUpdated() {
    this._sendOnConnect();
  }

  _send() {
    if (this.callback) {
      let cb = eval(this.callback);
      cb(this);
      return;
    }

    if (this.name == "") {
      return;
    }

    let data = {
      props: this.meta,
      value: this.value,
    };

    if (this.id) {
      data.id = this.id;
    }

    try {
      Shiny.setInputValue(
        this.name + ":litter.parse",
        data,
        {
          priority: this.priority,
        },
      );
    } catch (error) {
      console.error("shiny not connected");
    }
  }

  _sendThrottle() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this._send();
    }, 250);
  }

  _sendOnConnect() {
    if(!this.send_on_connect)
      return;

    console.log(this.send_on_connect)

    $(document).on("shiny:connected", (e) => {
      this._send();
    });
  }
}


/***/ }),

/***/ "./srcjs/update.js":
/*!*************************!*\
  !*** ./srcjs/update.js ***!
  \*************************/
/***/ (() => {

const select = (msg) => {
  if (msg.name) {
    return `[name='${msg.name}']`;
  }

  if (msg.sel) {
    return sel;
  }

  if (msg.id) {
    return `#${id}`;
  }

  return null;
};

Shiny.addCustomMessageHandler("litter-update-input", (msg) => {
  let target = select(msg);

  if (!target) {
    return;
  }

  Object.keys(msg.props).forEach((key, index) => {
    let value = msg.props[key];

    if (typeof value == "object") {
      value = JSON.stringify(value);
    }

    $(target).attr(key, value);
  });
});


/***/ }),

/***/ "Shiny":
/*!************************!*\
  !*** external "Shiny" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = Shiny;

/***/ }),

/***/ "jQuery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = jQuery;

/***/ }),

/***/ "./node_modules/lit-html/development/directive.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/development/directive.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PartType": () => (/* binding */ PartType),
/* harmony export */   "directive": () => (/* binding */ directive),
/* harmony export */   "Directive": () => (/* binding */ Directive)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const PartType = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6,
};
/**
 * Creates a user-facing directive function from a Directive class. This
 * function has the same parameters as the directive's render() method.
 */
const directive = (c) => (...values) => ({
    // This property needs to remain unminified.
    ['_$litDirective$']: c,
    values,
});
/**
 * Base class for creating custom directives. Users should extend this class,
 * implement `render` and/or `update`, and then pass their subclass to
 * `directive`.
 */
class Directive {
    constructor(_partInfo) { }
    // See comment in Disconnectable interface for why this is a getter
    get _$isConnected() {
        return this._$parent._$isConnected;
    }
    /** @internal */
    _$initialize(part, parent, attributeIndex) {
        this.__part = part;
        this._$parent = parent;
        this.__attributeIndex = attributeIndex;
    }
    /** @internal */
    _$resolve(part, props) {
        return this.update(part, props);
    }
    update(_part, props) {
        return this.render(...props);
    }
}
//# sourceMappingURL=directive.js.map

/***/ }),

/***/ "./node_modules/lit-html/development/directives/style-map.js":
/*!*******************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/style-map.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* binding */ styleMap)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


class StyleMapDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        var _a;
        super(partInfo);
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.ATTRIBUTE ||
            partInfo.name !== 'style' ||
            ((_a = partInfo.strings) === null || _a === void 0 ? void 0 : _a.length) > 2) {
            throw new Error('The `styleMap` directive must be used in the `style` attribute ' +
                'and must be the only part in the attribute.');
        }
    }
    render(styleInfo) {
        return Object.keys(styleInfo).reduce((style, prop) => {
            const value = styleInfo[prop];
            if (value == null) {
                return style;
            }
            // Convert property names from camel-case to dash-case, i.e.:
            //  `backgroundColor` -> `background-color`
            // Vendor-prefixed names need an extra `-` appended to front:
            //  `webkitAppearance` -> `-webkit-appearance`
            // Exception is any property name containing a dash, including
            // custom properties; we assume these are already dash-cased i.e.:
            //  `--my-button-color` --> `--my-button-color`
            prop = prop
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                .toLowerCase();
            return style + `${prop}:${value};`;
        }, '');
    }
    update(part, [styleInfo]) {
        const { style } = part.element;
        if (this._previousStyleProperties === undefined) {
            this._previousStyleProperties = new Set();
            for (const name in styleInfo) {
                this._previousStyleProperties.add(name);
            }
            return this.render(styleInfo);
        }
        // Remove old properties that no longer exist in styleInfo
        // We use forEach() instead of for-of so that re don't require down-level
        // iteration.
        this._previousStyleProperties.forEach((name) => {
            // If the name isn't in styleInfo or it's null/undefined
            if (styleInfo[name] == null) {
                this._previousStyleProperties.delete(name);
                if (name.includes('-')) {
                    style.removeProperty(name);
                }
                else {
                    // Note reset using empty string (vs null) as IE11 does not always
                    // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = '';
                }
            }
        });
        // Add or update properties
        for (const name in styleInfo) {
            const value = styleInfo[name];
            if (value != null) {
                this._previousStyleProperties.add(name);
                if (name.includes('-')) {
                    style.setProperty(name, value);
                }
                else {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    style[name] = value;
                }
            }
        }
        return _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange;
    }
}
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS properties. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo
 */
const styleMap = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(StyleMapDirective);
//# sourceMappingURL=style-map.js.map

/***/ }),

/***/ "./node_modules/lit/directives/style-map.js":
/*!**************************************************!*\
  !*** ./node_modules/lit/directives/style-map.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styleMap": () => (/* reexport safe */ lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__.styleMap)
/* harmony export */ });
/* harmony import */ var lit_html_directives_style_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/style-map.js */ "./node_modules/lit-html/development/directives/style-map.js");

//# sourceMappingURL=style-map.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/range.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ25DO0FBQ0M7QUFDdUI7QUFDZ0I7O0FBRWhELG9CQUFvQiwrQ0FBUTtBQUNuQztBQUNBLGFBQWEsY0FBYztBQUMzQixXQUFXLGNBQWM7QUFDekIsV0FBVyxjQUFjO0FBQ3pCLFlBQVksY0FBYztBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWMsS0FBSyxPQUFPLGdCQUFnQjtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYyxLQUFLLE9BQU8sZ0JBQWdCO0FBQzlEOztBQUVBO0FBQ0EsV0FBVyxxQ0FBSTtBQUNmO0FBQ0EsTUFBTSxxRUFBUSxHQUFHLHVCQUF1QjtBQUN4QyxLQUFLLEdBQUcsU0FBUztBQUNqQjtBQUNBLE1BQU0scUVBQVEsR0FBRyx1QkFBdUI7QUFDeEMsS0FBSyxHQUFHLFNBQVM7QUFDakI7QUFDQSxNQUFNLHFFQUFRO0FBQ2QsS0FBSyxHQUFHLFdBQVc7QUFDbkI7QUFDQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFVBQVU7QUFDMUIsaUJBQWlCLFdBQVc7QUFDNUIsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RXVDO0FBQ0o7QUFDcEI7QUFDQztBQUNLOztBQUVkLHVCQUF1QiwyQ0FBVTtBQUN4QyxtQkFBbUIsZ0RBQU07O0FBRXpCO0FBQ0EsYUFBYSxjQUFjO0FBQzNCLFlBQVksY0FBYztBQUMxQixhQUFhLGNBQWM7QUFDM0IsZ0JBQWdCLGNBQWM7QUFDOUIsZ0JBQWdCLGNBQWM7QUFDOUIsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7O0FDNUZBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLEdBQUc7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7QUNoQ0Q7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEM7QUFDd0I7QUFDbEUsZ0NBQWdDLG9EQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2REFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixLQUFLLEdBQUcsT0FBTztBQUM3QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDTyxpQkFBaUIsd0RBQVM7QUFDakM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRzhDO0FBQzlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy9yYW5nZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9zcmNqcy91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcIlNoaW55XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyL2V4dGVybmFsIHZhciBcImpRdWVyeVwiIiwid2VicGFjazovL2xpdHRlci8uL25vZGVfbW9kdWxlcy9saXQtaHRtbC9kZXZlbG9wbWVudC9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZXMvc3R5bGUtbWFwLmpzIiwid2VicGFjazovL2xpdHRlci8uL25vZGVfbW9kdWxlcy9saXQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCwgdW5zYWZlQ1NTIH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IHsgTGl0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUmFuZ2UgZXh0ZW5kcyBMaXRJbnB1dCB7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIHZhbHVlOiB7IHR5cGU6IE51bWJlciB9LFxuICAgIG1pbjogeyB0eXBlOiBOdW1iZXIgfSxcbiAgICBtYXg6IHsgdHlwZTogTnVtYmVyIH0sXG4gICAgc3RlcDogeyB0eXBlOiBOdW1iZXIgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudmFsdWUgPSAwO1xuICAgIHRoaXMuc3R5bGVzID0geyBsZWZ0OiBcIjUwJVwiIH07XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5faW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIHdpbGxVcGRhdGUocHJvcHMpIHtcbiAgICBpZiAoIXByb3BzLmhhcyhcInZhbHVlXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy5nZXQoXCJ2YWx1ZVwiKTtcbiAgICBsZXQgb3V0cHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJvdXRwdXRcIik7XG4gICAgbGV0IHBlcmMgPSAoKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgKiAxMDApIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHRoaXMuc3R5bGVzID0geyBsZWZ0OiBgY2FsYygke3BlcmN9JSArICgkezEgLSBwZXJjICogMC4xNX1weCkpYCB9O1xuICB9XG5cbiAgdXBkYXRlZCgpIHtcbiAgICB0aGlzLl9zZW5kVGhyb3R0bGUoKTtcbiAgfVxuXG4gIF9jaGFuZ2UoKSB7XG4gICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KHRoaXMuX2lucHV0LnZhbHVlKTtcbiAgICBsZXQgb3V0cHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJvdXRwdXRcIik7XG4gICAgbGV0IHBlcmMgPSAoKHRoaXMudmFsdWUgLSB0aGlzLm1pbikgKiAxMDApIC8gKHRoaXMubWF4IC0gdGhpcy5taW4pO1xuICAgIHRoaXMuc3R5bGVzID0geyBsZWZ0OiBgY2FsYygke3BlcmN9JSArICgkezEgLSBwZXJjICogMC4xNX1weCkpYCB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1zdGFydFwiIHN0eWxlPSR7XG4gICAgICBzdHlsZU1hcCh7IGZvbnRTaXplOiAuNzUgKyBgcmVtYCB9KVxuICAgIH0+JHt0aGlzLm1pbn08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LWVuZFwiIHN0eWxlPSR7XG4gICAgICBzdHlsZU1hcCh7IGZvbnRTaXplOiAuNzUgKyBgcmVtYCB9KVxuICAgIH0+JHt0aGlzLm1heH08L3NwYW4+XG4gICAgICA8b3V0cHV0IGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgcm91bmRlZCBweC0xIGJnLXByaW1hcnkgdGV4dC13aGl0ZVwiIHN0eWxlPSR7XG4gICAgICBzdHlsZU1hcCh0aGlzLnN0eWxlcylcbiAgICB9PiR7dGhpcy52YWx1ZX08L291dHB1dD5cbiAgICAgIDxpbnB1dFxuICAgICAgICBAaW5wdXQ9JyR7dGhpcy5fY2hhbmdlfSdcbiAgICAgICAgdHlwZT0ncmFuZ2UnXG4gICAgICAgIG1pbj0nJHt0aGlzLm1pbn0nXG4gICAgICAgIG1heD0nJHt0aGlzLm1heH0nXG4gICAgICAgIHN0ZXA9JyR7dGhpcy5zdGVwfSdcbiAgICAgICAgdmFsdWU9JyR7dGhpcy52YWx1ZX0nXG4gICAgICAgIGNsYXNzPSdmb3JtLXJhbmdlICR7dGhpcy5jbGFzc30nPlxuICAgIDwvZGl2PmA7XG4gIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImxpdHRlci1yYW5nZVwiLCBSYW5nZSk7XG4iLCJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IHsgZ2V0QnM1IH0gZnJvbSBcIi4vY3NzL2JzNVwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IFwiLi91cGRhdGUuanNcIjtcblxuZXhwb3J0IGNsYXNzIExpdElucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIHN0YXRpYyBzdHlsZXMgPSBbZ2V0QnM1KCldO1xuXG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIHZhbHVlOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgY2xhc3M6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgcHJpb3JpdHk6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgY2FsbGJhY2s6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgaWQ6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgc2VuZF9vbl9jb25uZWN0OiB7IFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGNvbnZlcnRlcjogKHZhbHVlLCB0eXBlKSA9PiB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlID09IFwiZmFsc2VcIiA/IGZhbHNlIDogdHJ1ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGE6IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wcmlvcml0eSA9IFwiZGVmZXJyZWRcIjtcbiAgICB0aGlzLmNsYXNzID0gXCJcIjtcbiAgICB0aGlzLm1ldGEgPSB7fTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuY2FsbGJhY2sgPSBcIlwiO1xuICAgIHRoaXMuc2VuZF9vbl9jb25uZWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIGZpcnN0VXBkYXRlZCgpIHtcbiAgICB0aGlzLl9zZW5kT25Db25uZWN0KCk7XG4gIH1cblxuICBfc2VuZCgpIHtcbiAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgbGV0IGNiID0gZXZhbCh0aGlzLmNhbGxiYWNrKTtcbiAgICAgIGNiKHRoaXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm5hbWUgPT0gXCJcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkYXRhID0ge1xuICAgICAgcHJvcHM6IHRoaXMubWV0YSxcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pZCkge1xuICAgICAgZGF0YS5pZCA9IHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIFNoaW55LnNldElucHV0VmFsdWUoXG4gICAgICAgIHRoaXMubmFtZSArIFwiOmxpdHRlci5wYXJzZVwiLFxuICAgICAgICBkYXRhLFxuICAgICAgICB7XG4gICAgICAgICAgcHJpb3JpdHk6IHRoaXMucHJpb3JpdHksXG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwic2hpbnkgbm90IGNvbm5lY3RlZFwiKTtcbiAgICB9XG4gIH1cblxuICBfc2VuZFRocm90dGxlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSwgMjUwKTtcbiAgfVxuXG4gIF9zZW5kT25Db25uZWN0KCkge1xuICAgIGlmKCF0aGlzLnNlbmRfb25fY29ubmVjdClcbiAgICAgIHJldHVybjtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc2VuZF9vbl9jb25uZWN0KVxuXG4gICAgJChkb2N1bWVudCkub24oXCJzaGlueTpjb25uZWN0ZWRcIiwgKGUpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiY29uc3Qgc2VsZWN0ID0gKG1zZykgPT4ge1xuICBpZiAobXNnLm5hbWUpIHtcbiAgICByZXR1cm4gYFtuYW1lPScke21zZy5uYW1lfSddYDtcbiAgfVxuXG4gIGlmIChtc2cuc2VsKSB7XG4gICAgcmV0dXJuIHNlbDtcbiAgfVxuXG4gIGlmIChtc2cuaWQpIHtcbiAgICByZXR1cm4gYCMke2lkfWA7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cblNoaW55LmFkZEN1c3RvbU1lc3NhZ2VIYW5kbGVyKFwibGl0dGVyLXVwZGF0ZS1pbnB1dFwiLCAobXNnKSA9PiB7XG4gIGxldCB0YXJnZXQgPSBzZWxlY3QobXNnKTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE9iamVjdC5rZXlzKG1zZy5wcm9wcykuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCB2YWx1ZSA9IG1zZy5wcm9wc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICB9XG5cbiAgICAkKHRhcmdldCkuYXR0cihrZXksIHZhbHVlKTtcbiAgfSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0gU2hpbnk7IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5leHBvcnQgY29uc3QgUGFydFR5cGUgPSB7XG4gICAgQVRUUklCVVRFOiAxLFxuICAgIENISUxEOiAyLFxuICAgIFBST1BFUlRZOiAzLFxuICAgIEJPT0xFQU5fQVRUUklCVVRFOiA0LFxuICAgIEVWRU5UOiA1LFxuICAgIEVMRU1FTlQ6IDYsXG59O1xuLyoqXG4gKiBDcmVhdGVzIGEgdXNlci1mYWNpbmcgZGlyZWN0aXZlIGZ1bmN0aW9uIGZyb20gYSBEaXJlY3RpdmUgY2xhc3MuIFRoaXNcbiAqIGZ1bmN0aW9uIGhhcyB0aGUgc2FtZSBwYXJhbWV0ZXJzIGFzIHRoZSBkaXJlY3RpdmUncyByZW5kZXIoKSBtZXRob2QuXG4gKi9cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmUgPSAoYykgPT4gKC4uLnZhbHVlcykgPT4gKHtcbiAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgIFsnXyRsaXREaXJlY3RpdmUkJ106IGMsXG4gICAgdmFsdWVzLFxufSk7XG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGNyZWF0aW5nIGN1c3RvbSBkaXJlY3RpdmVzLiBVc2VycyBzaG91bGQgZXh0ZW5kIHRoaXMgY2xhc3MsXG4gKiBpbXBsZW1lbnQgYHJlbmRlcmAgYW5kL29yIGB1cGRhdGVgLCBhbmQgdGhlbiBwYXNzIHRoZWlyIHN1YmNsYXNzIHRvXG4gKiBgZGlyZWN0aXZlYC5cbiAqL1xuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoX3BhcnRJbmZvKSB7IH1cbiAgICAvLyBTZWUgY29tbWVudCBpbiBEaXNjb25uZWN0YWJsZSBpbnRlcmZhY2UgZm9yIHdoeSB0aGlzIGlzIGEgZ2V0dGVyXG4gICAgZ2V0IF8kaXNDb25uZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl8kcGFyZW50Ll8kaXNDb25uZWN0ZWQ7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJGluaXRpYWxpemUocGFydCwgcGFyZW50LCBhdHRyaWJ1dGVJbmRleCkge1xuICAgICAgICB0aGlzLl9fcGFydCA9IHBhcnQ7XG4gICAgICAgIHRoaXMuXyRwYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuX19hdHRyaWJ1dGVJbmRleCA9IGF0dHJpYnV0ZUluZGV4O1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRyZXNvbHZlKHBhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVwZGF0ZShwYXJ0LCBwcm9wcyk7XG4gICAgfVxuICAgIHVwZGF0ZShfcGFydCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKC4uLnByb3BzKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaXJlY3RpdmUuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTggR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBub0NoYW5nZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSwgRGlyZWN0aXZlLCBQYXJ0VHlwZSwgfSBmcm9tICcuLi9kaXJlY3RpdmUuanMnO1xuY2xhc3MgU3R5bGVNYXBEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHBhcnRJbmZvKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgc3VwZXIocGFydEluZm8pO1xuICAgICAgICBpZiAocGFydEluZm8udHlwZSAhPT0gUGFydFR5cGUuQVRUUklCVVRFIHx8XG4gICAgICAgICAgICBwYXJ0SW5mby5uYW1lICE9PSAnc3R5bGUnIHx8XG4gICAgICAgICAgICAoKF9hID0gcGFydEluZm8uc3RyaW5ncykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmxlbmd0aCkgPiAyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBgc3R5bGVNYXBgIGRpcmVjdGl2ZSBtdXN0IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlICcgK1xuICAgICAgICAgICAgICAgICdhbmQgbXVzdCBiZSB0aGUgb25seSBwYXJ0IGluIHRoZSBhdHRyaWJ1dGUuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKHN0eWxlSW5mbykge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGVJbmZvKS5yZWR1Y2UoKHN0eWxlLCBwcm9wKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlSW5mb1twcm9wXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ29udmVydCBwcm9wZXJ0eSBuYW1lcyBmcm9tIGNhbWVsLWNhc2UgdG8gZGFzaC1jYXNlLCBpLmUuOlxuICAgICAgICAgICAgLy8gIGBiYWNrZ3JvdW5kQ29sb3JgIC0+IGBiYWNrZ3JvdW5kLWNvbG9yYFxuICAgICAgICAgICAgLy8gVmVuZG9yLXByZWZpeGVkIG5hbWVzIG5lZWQgYW4gZXh0cmEgYC1gIGFwcGVuZGVkIHRvIGZyb250OlxuICAgICAgICAgICAgLy8gIGB3ZWJraXRBcHBlYXJhbmNlYCAtPiBgLXdlYmtpdC1hcHBlYXJhbmNlYFxuICAgICAgICAgICAgLy8gRXhjZXB0aW9uIGlzIGFueSBwcm9wZXJ0eSBuYW1lIGNvbnRhaW5pbmcgYSBkYXNoLCBpbmNsdWRpbmdcbiAgICAgICAgICAgIC8vIGN1c3RvbSBwcm9wZXJ0aWVzOyB3ZSBhc3N1bWUgdGhlc2UgYXJlIGFscmVhZHkgZGFzaC1jYXNlZCBpLmUuOlxuICAgICAgICAgICAgLy8gIGAtLW15LWJ1dHRvbi1jb2xvcmAgLS0+IGAtLW15LWJ1dHRvbi1jb2xvcmBcbiAgICAgICAgICAgIHByb3AgPSBwcm9wXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoLyg/Ol4od2Via2l0fG1venxtc3xvKXwpKD89W0EtWl0pL2csICctJCYnKVxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlICsgYCR7cHJvcH06JHt2YWx1ZX07YDtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cbiAgICB1cGRhdGUocGFydCwgW3N0eWxlSW5mb10pIHtcbiAgICAgICAgY29uc3QgeyBzdHlsZSB9ID0gcGFydC5lbGVtZW50O1xuICAgICAgICBpZiAodGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuYWRkKG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyKHN0eWxlSW5mbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIG9sZCBwcm9wZXJ0aWVzIHRoYXQgbm8gbG9uZ2VyIGV4aXN0IGluIHN0eWxlSW5mb1xuICAgICAgICAvLyBXZSB1c2UgZm9yRWFjaCgpIGluc3RlYWQgb2YgZm9yLW9mIHNvIHRoYXQgcmUgZG9uJ3QgcmVxdWlyZSBkb3duLWxldmVsXG4gICAgICAgIC8vIGl0ZXJhdGlvbi5cbiAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgdGhlIG5hbWUgaXNuJ3QgaW4gc3R5bGVJbmZvIG9yIGl0J3MgbnVsbC91bmRlZmluZWRcbiAgICAgICAgICAgIGlmIChzdHlsZUluZm9bbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSByZXNldCB1c2luZyBlbXB0eSBzdHJpbmcgKHZzIG51bGwpIGFzIElFMTEgZG9lcyBub3QgYWx3YXlzXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHZpYSBudWxsIChodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudENTU0lubGluZVN0eWxlL3N0eWxlI3NldHRpbmdfc3R5bGVzKVxuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9ICcnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIEFkZCBvciB1cGRhdGUgcHJvcGVydGllc1xuICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHN0eWxlSW5mb1tuYW1lXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuYWRkKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vQ2hhbmdlO1xuICAgIH1cbn1cbi8qKlxuICogQSBkaXJlY3RpdmUgdGhhdCBhcHBsaWVzIENTUyBwcm9wZXJ0aWVzIHRvIGFuIGVsZW1lbnQuXG4gKlxuICogYHN0eWxlTWFwYCBjYW4gb25seSBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSBhbmQgbXVzdCBiZSB0aGUgb25seVxuICogZXhwcmVzc2lvbiBpbiB0aGUgYXR0cmlidXRlLiBJdCB0YWtlcyB0aGUgcHJvcGVydHkgbmFtZXMgaW4gdGhlIGBzdHlsZUluZm9gXG4gKiBvYmplY3QgYW5kIGFkZHMgdGhlIHByb3BlcnR5IHZhbHVlcyBhcyBDU1MgcHJvcGVydGllcy4gUHJvcGVydHkgbmFtZXMgd2l0aFxuICogZGFzaGVzIChgLWApIGFyZSBhc3N1bWVkIHRvIGJlIHZhbGlkIENTUyBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZVxuICogZWxlbWVudCdzIHN0eWxlIG9iamVjdCB1c2luZyBgc2V0UHJvcGVydHkoKWAuIE5hbWVzIHdpdGhvdXQgZGFzaGVzIGFyZVxuICogYXNzdW1lZCB0byBiZSBjYW1lbENhc2VkIEphdmFTY3JpcHQgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGUgZWxlbWVudCdzXG4gKiBzdHlsZSBvYmplY3QgdXNpbmcgcHJvcGVydHkgYXNzaWdubWVudCwgYWxsb3dpbmcgdGhlIHN0eWxlIG9iamVjdCB0b1xuICogdHJhbnNsYXRlIEphdmFTY3JpcHQtc3R5bGUgbmFtZXMgdG8gQ1NTIHByb3BlcnR5IG5hbWVzLlxuICpcbiAqIEZvciBleGFtcGxlIGBzdHlsZU1hcCh7YmFja2dyb3VuZENvbG9yOiAncmVkJywgJ2JvcmRlci10b3AnOiAnNXB4JywgJy0tc2l6ZSc6XG4gKiAnMCd9KWAgc2V0cyB0aGUgYGJhY2tncm91bmQtY29sb3JgLCBgYm9yZGVyLXRvcGAgYW5kIGAtLXNpemVgIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHN0eWxlSW5mb1xuICovXG5leHBvcnQgY29uc3Qgc3R5bGVNYXAgPSBkaXJlY3RpdmUoU3R5bGVNYXBEaXJlY3RpdmUpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUtbWFwLmpzLm1hcCIsImV4cG9ydCpmcm9tXCJsaXQtaHRtbC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUtbWFwLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9