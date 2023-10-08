(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["toggler"],{

/***/ "./srcjs/components/toggler.js":
/*!*************************************!*\
  !*** ./srcjs/components/toggler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Toggler": () => (/* binding */ Toggler)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");
/* harmony import */ var lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit/directives/unsafe-html.js */ "./node_modules/lit/directives/unsafe-html.js");







class Toggler extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    inputShown: { type: Boolean, state: false },
    feedback: { type: String },
    accept: { type: String },
    default: { type: String, attribute: false },
  };

  constructor() {
    super();
    this.inputShown = false;
    this.feedback = "";
    this.accept = true;
    this.default = "";
  }

  _toggle() {
    this.shadowRoot.querySelector(".input").classList.toggle("d-none");
    this.shadowRoot.querySelector("slot[name=display]").classList.toggle(
      "d-none",
    );

    this.inputShown = !this.inputShown;
  }

  _showInput() {
    this.default =
      this.shadowRoot.querySelector("slot[name=input]").assignedElements({
        flatten: true,
      })[0].value;
    this.shadowRoot.querySelector("slot[name=input]").assignedElements({
      flatten: true,
    })[0].value = this.value;
    this._toggle();
  }

  _getValue() {
    this.value =
      this.shadowRoot.querySelector("slot[name=input]").assignedElements({
        flatten: true,
      })[0].value;
  }

  _validate() {
    if (this.accept != "true") {
      return;
    }

    this._toggle();
    this._getValue();
    this._send();
  }

  _cancel() {
    this.feedback = "";
    this.shadowRoot.querySelector("slot[name=input]").assignedElements({
      flatten: true,
    })[0].value = this.default;
    this._toggle();
  }

  render() {
    return lit__WEBPACK_IMPORTED_MODULE_0__.html`
      <slot @click=${this._showInput} name="display">Click me</slot>
      <div class="d-none input position-relative d-flex">
        <div class="flex-grow-1">
          <slot name="input"></slot>
        </div>
        <div class="flex-shrink-1">
          <button @click=${this._cancel} class="btn btn-danger">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button @click=${this._validate} class="btn btn-success">
            <svg style="width:1rem" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-100"">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </button>
        </div>
      </div>
      ${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__.unsafeHTML)(this.feedback)}
    `;
  }
}

customElements.define("litter-toggler", Toggler);


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

/***/ "./node_modules/lit-html/development/directives/unsafe-html.js":
/*!*********************************************************************!*\
  !*** ./node_modules/lit-html/development/directives/unsafe-html.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* binding */ UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* binding */ unsafeHTML)
/* harmony export */ });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/development/lit-html.js");
/* harmony import */ var _directive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../directive.js */ "./node_modules/lit-html/development/directive.js");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */


const HTML_RESULT = 1;
class UnsafeHTMLDirective extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.Directive {
    constructor(partInfo) {
        super(partInfo);
        this._value = _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing;
        if (partInfo.type !== _directive_js__WEBPACK_IMPORTED_MODULE_1__.PartType.CHILD) {
            throw new Error(`${this.constructor.directiveName}() can only be used in child bindings`);
        }
    }
    render(value) {
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.nothing || value == null) {
            this._templateResult = undefined;
            return (this._value = value);
        }
        if (value === _lit_html_js__WEBPACK_IMPORTED_MODULE_0__.noChange) {
            return value;
        }
        if (typeof value != 'string') {
            throw new Error(`${this.constructor.directiveName}() called with a non-string value`);
        }
        if (value === this._value) {
            return this._templateResult;
        }
        this._value = value;
        const strings = [value];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        strings.raw = strings;
        // WARNING: impersonating a TemplateResult like this is extremely
        // dangerous. Third-party directives should not do this.
        return (this._templateResult = {
            // Cast to a known set of integers that satisfy ResultType so that we
            // don't have to export ResultType and possibly encourage this pattern.
            // This property needs to remain unminified.
            ['_$litType$']: this.constructor
                .resultType,
            strings,
            values: [],
        });
    }
}
UnsafeHTMLDirective.directiveName = 'unsafeHTML';
UnsafeHTMLDirective.resultType = HTML_RESULT;
/**
 * Renders the result as HTML, rather than text.
 *
 * The values `undefined`, `null`, and `nothing`, will all result in no content
 * (empty string) being rendered.
 *
 * Note, this is unsafe to use with any user-provided input that hasn't been
 * sanitized or escaped, as it may lead to cross-site-scripting
 * vulnerabilities.
 */
const unsafeHTML = (0,_directive_js__WEBPACK_IMPORTED_MODULE_1__.directive)(UnsafeHTMLDirective);
//# sourceMappingURL=unsafe-html.js.map

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


/***/ }),

/***/ "./node_modules/lit/directives/unsafe-html.js":
/*!****************************************************!*\
  !*** ./node_modules/lit/directives/unsafe-html.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsafeHTMLDirective": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.UnsafeHTMLDirective),
/* harmony export */   "unsafeHTML": () => (/* reexport safe */ lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__.unsafeHTML)
/* harmony export */ });
/* harmony import */ var lit_html_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-html/directives/unsafe-html.js */ "./node_modules/lit-html/development/directives/unsafe-html.js");

//# sourceMappingURL=unsafe-html.js.map


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/toggler.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sbUJBQW1CLHdEQUFTO0FBQ25DOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUQ4QztBQUM5Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGdEO0FBQ2hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGl0dGVyLy4vc3JjanMvY29tcG9uZW50cy90b2dnbGVyLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9ub2RlX21vZHVsZXMvbGl0L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCB7IExpdElucHV0IH0gZnJvbSBcIi4uL2lucHV0LmpzXCI7XG5pbXBvcnQgeyBzdHlsZU1hcCB9IGZyb20gXCJsaXQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanNcIjtcbmltcG9ydCB7IHVuc2FmZUhUTUwgfSBmcm9tIFwibGl0L2RpcmVjdGl2ZXMvdW5zYWZlLWh0bWwuanNcIjtcblxuZXhwb3J0IGNsYXNzIFRvZ2dsZXIgZXh0ZW5kcyBMaXRJbnB1dCB7XG4gIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgIGlucHV0U2hvd246IHsgdHlwZTogQm9vbGVhbiwgc3RhdGU6IGZhbHNlIH0sXG4gICAgZmVlZGJhY2s6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgYWNjZXB0OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGRlZmF1bHQ6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IGZhbHNlIH0sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlucHV0U2hvd24gPSBmYWxzZTtcbiAgICB0aGlzLmZlZWRiYWNrID0gXCJcIjtcbiAgICB0aGlzLmFjY2VwdCA9IHRydWU7XG4gICAgdGhpcy5kZWZhdWx0ID0gXCJcIjtcbiAgfVxuXG4gIF90b2dnbGUoKSB7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXRcIikuY2xhc3NMaXN0LnRvZ2dsZShcImQtbm9uZVwiKTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RbbmFtZT1kaXNwbGF5XVwiKS5jbGFzc0xpc3QudG9nZ2xlKFxuICAgICAgXCJkLW5vbmVcIixcbiAgICApO1xuXG4gICAgdGhpcy5pbnB1dFNob3duID0gIXRoaXMuaW5wdXRTaG93bjtcbiAgfVxuXG4gIF9zaG93SW5wdXQoKSB7XG4gICAgdGhpcy5kZWZhdWx0ID1cbiAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPWlucHV0XVwiKS5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgICAgZmxhdHRlbjogdHJ1ZSxcbiAgICAgIH0pWzBdLnZhbHVlO1xuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPWlucHV0XVwiKS5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgfSlbMF0udmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuX3RvZ2dsZSgpO1xuICB9XG5cbiAgX2dldFZhbHVlKCkge1xuICAgIHRoaXMudmFsdWUgPVxuICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJzbG90W25hbWU9aW5wdXRdXCIpLmFzc2lnbmVkRWxlbWVudHMoe1xuICAgICAgICBmbGF0dGVuOiB0cnVlLFxuICAgICAgfSlbMF0udmFsdWU7XG4gIH1cblxuICBfdmFsaWRhdGUoKSB7XG4gICAgaWYgKHRoaXMuYWNjZXB0ICE9IFwidHJ1ZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdG9nZ2xlKCk7XG4gICAgdGhpcy5fZ2V0VmFsdWUoKTtcbiAgICB0aGlzLl9zZW5kKCk7XG4gIH1cblxuICBfY2FuY2VsKCkge1xuICAgIHRoaXMuZmVlZGJhY2sgPSBcIlwiO1xuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFtuYW1lPWlucHV0XVwiKS5hc3NpZ25lZEVsZW1lbnRzKHtcbiAgICAgIGZsYXR0ZW46IHRydWUsXG4gICAgfSlbMF0udmFsdWUgPSB0aGlzLmRlZmF1bHQ7XG4gICAgdGhpcy5fdG9nZ2xlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c2xvdCBAY2xpY2s9JHt0aGlzLl9zaG93SW5wdXR9IG5hbWU9XCJkaXNwbGF5XCI+Q2xpY2sgbWU8L3Nsb3Q+XG4gICAgICA8ZGl2IGNsYXNzPVwiZC1ub25lIGlucHV0IHBvc2l0aW9uLXJlbGF0aXZlIGQtZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93LTFcIj5cbiAgICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1zaHJpbmstMVwiPlxuICAgICAgICAgIDxidXR0b24gQGNsaWNrPSR7dGhpcy5fY2FuY2VsfSBjbGFzcz1cImJ0biBidG4tZGFuZ2VyXCI+XG4gICAgICAgICAgICA8c3ZnIHN0eWxlPVwid2lkdGg6MXJlbVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImgtMTAwXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz0ke3RoaXMuX3ZhbGlkYXRlfSBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxuICAgICAgICAgICAgPHN2ZyBzdHlsZT1cIndpZHRoOjFyZW1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJoLTEwMFwiXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNC41IDEyLjc1bDYgNiA5LTEzLjVcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICAke3Vuc2FmZUhUTUwodGhpcy5mZWVkYmFjayl9XG4gICAgYDtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaXR0ZXItdG9nZ2xlclwiLCBUb2dnbGVyKTtcbiIsImltcG9ydCB7IGh0bWwsIExpdEVsZW1lbnQgfSBmcm9tIFwibGl0XCI7XG5pbXBvcnQgeyBnZXRCczUgfSBmcm9tIFwiLi9jc3MvYnM1XCI7XG5pbXBvcnQgXCJTaGlueVwiO1xuaW1wb3J0IFwialF1ZXJ5XCI7XG5pbXBvcnQgXCIuL3VwZGF0ZS5qc1wiO1xuXG5leHBvcnQgY2xhc3MgTGl0SW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgc3RhdGljIHN0eWxlcyA9IFtnZXRCczUoKV07XG5cbiAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjbGFzczogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBwcmlvcml0eTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBjYWxsYmFjazogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBpZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBzZW5kX29uX2Nvbm5lY3Q6IHsgXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgY29udmVydGVyOiAodmFsdWUsIHR5cGUpID0+IHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gdmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlO1xuICAgICAgfVxuICAgIH0sXG4gICAgbWV0YToge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnByaW9yaXR5ID0gXCJkZWZlcnJlZFwiO1xuICAgIHRoaXMuY2xhc3MgPSBcIlwiO1xuICAgIHRoaXMubWV0YSA9IHt9O1xuICAgIHRoaXMuaWQgPSBudWxsO1xuICAgIHRoaXMudGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5jYWxsYmFjayA9IFwiXCI7XG4gICAgdGhpcy5zZW5kX29uX2Nvbm5lY3QgPSB0cnVlO1xuICB9XG5cbiAgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMuX3NlbmRPbkNvbm5lY3QoKTtcbiAgfVxuXG4gIF9zZW5kKCkge1xuICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICBsZXQgY2IgPSBldmFsKHRoaXMuY2FsbGJhY2spO1xuICAgICAgY2IodGhpcyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubmFtZSA9PSBcIlwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBwcm9wczogdGhpcy5tZXRhLFxuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlkKSB7XG4gICAgICBkYXRhLmlkID0gdGhpcy5pZDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgU2hpbnkuc2V0SW5wdXRWYWx1ZShcbiAgICAgICAgdGhpcy5uYW1lICsgXCI6bGl0dGVyLnBhcnNlXCIsXG4gICAgICAgIGRhdGEsXG4gICAgICAgIHtcbiAgICAgICAgICBwcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgICAgfSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJzaGlueSBub3QgY29ubmVjdGVkXCIpO1xuICAgIH1cbiAgfVxuXG4gIF9zZW5kVGhyb3R0bGUoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3NlbmQoKTtcbiAgICB9LCAyNTApO1xuICB9XG5cbiAgX3NlbmRPbkNvbm5lY3QoKSB7XG4gICAgaWYoIXRoaXMuc2VuZF9vbl9jb25uZWN0KVxuICAgICAgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2codGhpcy5zZW5kX29uX2Nvbm5lY3QpXG5cbiAgICAkKGRvY3VtZW50KS5vbihcInNoaW55OmNvbm5lY3RlZFwiLCAoZSkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJjb25zdCBzZWxlY3QgPSAobXNnKSA9PiB7XG4gIGlmIChtc2cubmFtZSkge1xuICAgIHJldHVybiBgW25hbWU9JyR7bXNnLm5hbWV9J11gO1xuICB9XG5cbiAgaWYgKG1zZy5zZWwpIHtcbiAgICByZXR1cm4gc2VsO1xuICB9XG5cbiAgaWYgKG1zZy5pZCkge1xuICAgIHJldHVybiBgIyR7aWR9YDtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuU2hpbnkuYWRkQ3VzdG9tTWVzc2FnZUhhbmRsZXIoXCJsaXR0ZXItdXBkYXRlLWlucHV0XCIsIChtc2cpID0+IHtcbiAgbGV0IHRhcmdldCA9IHNlbGVjdChtc2cpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgT2JqZWN0LmtleXMobXNnLnByb3BzKS5mb3JFYWNoKChrZXksIGluZGV4KSA9PiB7XG4gICAgbGV0IHZhbHVlID0gbXNnLnByb3BzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09IFwib2JqZWN0XCIpIHtcbiAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIH1cblxuICAgICQodGFyZ2V0KS5hdHRyKGtleSwgdmFsdWUpO1xuICB9KTtcbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBTaGlueTsiLCJtb2R1bGUuZXhwb3J0cyA9IGpRdWVyeTsiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmV4cG9ydCBjb25zdCBQYXJ0VHlwZSA9IHtcbiAgICBBVFRSSUJVVEU6IDEsXG4gICAgQ0hJTEQ6IDIsXG4gICAgUFJPUEVSVFk6IDMsXG4gICAgQk9PTEVBTl9BVFRSSUJVVEU6IDQsXG4gICAgRVZFTlQ6IDUsXG4gICAgRUxFTUVOVDogNixcbn07XG4vKipcbiAqIENyZWF0ZXMgYSB1c2VyLWZhY2luZyBkaXJlY3RpdmUgZnVuY3Rpb24gZnJvbSBhIERpcmVjdGl2ZSBjbGFzcy4gVGhpc1xuICogZnVuY3Rpb24gaGFzIHRoZSBzYW1lIHBhcmFtZXRlcnMgYXMgdGhlIGRpcmVjdGl2ZSdzIHJlbmRlcigpIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpcmVjdGl2ZSA9IChjKSA9PiAoLi4udmFsdWVzKSA9PiAoe1xuICAgIC8vIFRoaXMgcHJvcGVydHkgbmVlZHMgdG8gcmVtYWluIHVubWluaWZpZWQuXG4gICAgWydfJGxpdERpcmVjdGl2ZSQnXTogYyxcbiAgICB2YWx1ZXMsXG59KTtcbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgY3JlYXRpbmcgY3VzdG9tIGRpcmVjdGl2ZXMuIFVzZXJzIHNob3VsZCBleHRlbmQgdGhpcyBjbGFzcyxcbiAqIGltcGxlbWVudCBgcmVuZGVyYCBhbmQvb3IgYHVwZGF0ZWAsIGFuZCB0aGVuIHBhc3MgdGhlaXIgc3ViY2xhc3MgdG9cbiAqIGBkaXJlY3RpdmVgLlxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihfcGFydEluZm8pIHsgfVxuICAgIC8vIFNlZSBjb21tZW50IGluIERpc2Nvbm5lY3RhYmxlIGludGVyZmFjZSBmb3Igd2h5IHRoaXMgaXMgYSBnZXR0ZXJcbiAgICBnZXQgXyRpc0Nvbm5lY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuXyRwYXJlbnQuXyRpc0Nvbm5lY3RlZDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kaW5pdGlhbGl6ZShwYXJ0LCBwYXJlbnQsIGF0dHJpYnV0ZUluZGV4KSB7XG4gICAgICAgIHRoaXMuX19wYXJ0ID0gcGFydDtcbiAgICAgICAgdGhpcy5fJHBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fX2F0dHJpYnV0ZUluZGV4ID0gYXR0cmlidXRlSW5kZXg7XG4gICAgfVxuICAgIC8qKiBAaW50ZXJuYWwgKi9cbiAgICBfJHJlc29sdmUocGFydCwgcHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlKHBhcnQsIHByb3BzKTtcbiAgICB9XG4gICAgdXBkYXRlKF9wYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoLi4ucHJvcHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpcmVjdGl2ZS5qcy5tYXAiLCIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOCBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi9cbmltcG9ydCB7IG5vQ2hhbmdlIH0gZnJvbSAnLi4vbGl0LWh0bWwuanMnO1xuaW1wb3J0IHsgZGlyZWN0aXZlLCBEaXJlY3RpdmUsIFBhcnRUeXBlLCB9IGZyb20gJy4uL2RpcmVjdGl2ZS5qcyc7XG5jbGFzcyBTdHlsZU1hcERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocGFydEluZm8pIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBzdXBlcihwYXJ0SW5mbyk7XG4gICAgICAgIGlmIChwYXJ0SW5mby50eXBlICE9PSBQYXJ0VHlwZS5BVFRSSUJVVEUgfHxcbiAgICAgICAgICAgIHBhcnRJbmZvLm5hbWUgIT09ICdzdHlsZScgfHxcbiAgICAgICAgICAgICgoX2EgPSBwYXJ0SW5mby5zdHJpbmdzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubGVuZ3RoKSA+IDIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgJyArXG4gICAgICAgICAgICAgICAgJ2FuZCBtdXN0IGJlIHRoZSBvbmx5IHBhcnQgaW4gdGhlIGF0dHJpYnV0ZS4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW5kZXIoc3R5bGVJbmZvKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZUluZm8pLnJlZHVjZSgoc3R5bGUsIHByb3ApID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW3Byb3BdO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDb252ZXJ0IHByb3BlcnR5IG5hbWVzIGZyb20gY2FtZWwtY2FzZSB0byBkYXNoLWNhc2UsIGkuZS46XG4gICAgICAgICAgICAvLyAgYGJhY2tncm91bmRDb2xvcmAgLT4gYGJhY2tncm91bmQtY29sb3JgXG4gICAgICAgICAgICAvLyBWZW5kb3ItcHJlZml4ZWQgbmFtZXMgbmVlZCBhbiBleHRyYSBgLWAgYXBwZW5kZWQgdG8gZnJvbnQ6XG4gICAgICAgICAgICAvLyAgYHdlYmtpdEFwcGVhcmFuY2VgIC0+IGAtd2Via2l0LWFwcGVhcmFuY2VgXG4gICAgICAgICAgICAvLyBFeGNlcHRpb24gaXMgYW55IHByb3BlcnR5IG5hbWUgY29udGFpbmluZyBhIGRhc2gsIGluY2x1ZGluZ1xuICAgICAgICAgICAgLy8gY3VzdG9tIHByb3BlcnRpZXM7IHdlIGFzc3VtZSB0aGVzZSBhcmUgYWxyZWFkeSBkYXNoLWNhc2VkIGkuZS46XG4gICAgICAgICAgICAvLyAgYC0tbXktYnV0dG9uLWNvbG9yYCAtLT4gYC0tbXktYnV0dG9uLWNvbG9yYFxuICAgICAgICAgICAgcHJvcCA9IHByb3BcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvKD86Xih3ZWJraXR8bW96fG1zfG8pfCkoPz1bQS1aXSkvZywgJy0kJicpXG4gICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGUgKyBgJHtwcm9wfToke3ZhbHVlfTtgO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuICAgIHVwZGF0ZShwYXJ0LCBbc3R5bGVJbmZvXSkge1xuICAgICAgICBjb25zdCB7IHN0eWxlIH0gPSBwYXJ0LmVsZW1lbnQ7XG4gICAgICAgIGlmICh0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXIoc3R5bGVJbmZvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgb2xkIHByb3BlcnRpZXMgdGhhdCBubyBsb25nZXIgZXhpc3QgaW4gc3R5bGVJbmZvXG4gICAgICAgIC8vIFdlIHVzZSBmb3JFYWNoKCkgaW5zdGVhZCBvZiBmb3Itb2Ygc28gdGhhdCByZSBkb24ndCByZXF1aXJlIGRvd24tbGV2ZWxcbiAgICAgICAgLy8gaXRlcmF0aW9uLlxuICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgbmFtZSBpc24ndCBpbiBzdHlsZUluZm8gb3IgaXQncyBudWxsL3VuZGVmaW5lZFxuICAgICAgICAgICAgaWYgKHN0eWxlSW5mb1tuYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNTdHlsZVByb3BlcnRpZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCctJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucmVtb3ZlUHJvcGVydHkobmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBOb3RlIHJlc2V0IHVzaW5nIGVtcHR5IHN0cmluZyAodnMgbnVsbCkgYXMgSUUxMSBkb2VzIG5vdCBhbHdheXNcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdmlhIG51bGwgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9FbGVtZW50Q1NTSW5saW5lU3R5bGUvc3R5bGUjc2V0dGluZ19zdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gQWRkIG9yIHVwZGF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBpbiBzdHlsZUluZm8pIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3R5bGVJbmZvW25hbWVdO1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5hZGQobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5zZXRQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgICAgICBzdHlsZVtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbm9DaGFuZ2U7XG4gICAgfVxufVxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0aWVzLiBQcm9wZXJ0eSBuYW1lcyB3aXRoXG4gKiBkYXNoZXMgKGAtYCkgYXJlIGFzc3VtZWQgdG8gYmUgdmFsaWQgQ1NTIHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlXG4gKiBlbGVtZW50J3Mgc3R5bGUgb2JqZWN0IHVzaW5nIGBzZXRQcm9wZXJ0eSgpYC4gTmFtZXMgd2l0aG91dCBkYXNoZXMgYXJlXG4gKiBhc3N1bWVkIHRvIGJlIGNhbWVsQ2FzZWQgSmF2YVNjcmlwdCBwcm9wZXJ0eSBuYW1lcyBhbmQgc2V0IG9uIHRoZSBlbGVtZW50J3NcbiAqIHN0eWxlIG9iamVjdCB1c2luZyBwcm9wZXJ0eSBhc3NpZ25tZW50LCBhbGxvd2luZyB0aGUgc3R5bGUgb2JqZWN0IHRvXG4gKiB0cmFuc2xhdGUgSmF2YVNjcmlwdC1zdHlsZSBuYW1lcyB0byBDU1MgcHJvcGVydHkgbmFtZXMuXG4gKlxuICogRm9yIGV4YW1wbGUgYHN0eWxlTWFwKHtiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLCAnYm9yZGVyLXRvcCc6ICc1cHgnLCAnLS1zaXplJzpcbiAqICcwJ30pYCBzZXRzIHRoZSBgYmFja2dyb3VuZC1jb2xvcmAsIGBib3JkZXItdG9wYCBhbmQgYC0tc2l6ZWAgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0gc3R5bGVJbmZvXG4gKi9cbmV4cG9ydCBjb25zdCBzdHlsZU1hcCA9IGRpcmVjdGl2ZShTdHlsZU1hcERpcmVjdGl2ZSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5pbXBvcnQgeyBub3RoaW5nLCBub0NoYW5nZSB9IGZyb20gJy4uL2xpdC1odG1sLmpzJztcbmltcG9ydCB7IGRpcmVjdGl2ZSwgRGlyZWN0aXZlLCBQYXJ0VHlwZSB9IGZyb20gJy4uL2RpcmVjdGl2ZS5qcyc7XG5jb25zdCBIVE1MX1JFU1VMVCA9IDE7XG5leHBvcnQgY2xhc3MgVW5zYWZlSFRNTERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IocGFydEluZm8pIHtcbiAgICAgICAgc3VwZXIocGFydEluZm8pO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG5vdGhpbmc7XG4gICAgICAgIGlmIChwYXJ0SW5mby50eXBlICE9PSBQYXJ0VHlwZS5DSElMRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3RoaXMuY29uc3RydWN0b3IuZGlyZWN0aXZlTmFtZX0oKSBjYW4gb25seSBiZSB1c2VkIGluIGNoaWxkIGJpbmRpbmdzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVuZGVyKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbm90aGluZyB8fCB2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl90ZW1wbGF0ZVJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5fdmFsdWUgPSB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSBub0NoYW5nZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHt0aGlzLmNvbnN0cnVjdG9yLmRpcmVjdGl2ZU5hbWV9KCkgY2FsbGVkIHdpdGggYSBub24tc3RyaW5nIHZhbHVlYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLl92YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlUmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvbnN0IHN0cmluZ3MgPSBbdmFsdWVdO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICBzdHJpbmdzLnJhdyA9IHN0cmluZ3M7XG4gICAgICAgIC8vIFdBUk5JTkc6IGltcGVyc29uYXRpbmcgYSBUZW1wbGF0ZVJlc3VsdCBsaWtlIHRoaXMgaXMgZXh0cmVtZWx5XG4gICAgICAgIC8vIGRhbmdlcm91cy4gVGhpcmQtcGFydHkgZGlyZWN0aXZlcyBzaG91bGQgbm90IGRvIHRoaXMuXG4gICAgICAgIHJldHVybiAodGhpcy5fdGVtcGxhdGVSZXN1bHQgPSB7XG4gICAgICAgICAgICAvLyBDYXN0IHRvIGEga25vd24gc2V0IG9mIGludGVnZXJzIHRoYXQgc2F0aXNmeSBSZXN1bHRUeXBlIHNvIHRoYXQgd2VcbiAgICAgICAgICAgIC8vIGRvbid0IGhhdmUgdG8gZXhwb3J0IFJlc3VsdFR5cGUgYW5kIHBvc3NpYmx5IGVuY291cmFnZSB0aGlzIHBhdHRlcm4uXG4gICAgICAgICAgICAvLyBUaGlzIHByb3BlcnR5IG5lZWRzIHRvIHJlbWFpbiB1bm1pbmlmaWVkLlxuICAgICAgICAgICAgWydfJGxpdFR5cGUkJ106IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgICAgICAucmVzdWx0VHlwZSxcbiAgICAgICAgICAgIHN0cmluZ3MsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICB9KTtcbiAgICB9XG59XG5VbnNhZmVIVE1MRGlyZWN0aXZlLmRpcmVjdGl2ZU5hbWUgPSAndW5zYWZlSFRNTCc7XG5VbnNhZmVIVE1MRGlyZWN0aXZlLnJlc3VsdFR5cGUgPSBIVE1MX1JFU1VMVDtcbi8qKlxuICogUmVuZGVycyB0aGUgcmVzdWx0IGFzIEhUTUwsIHJhdGhlciB0aGFuIHRleHQuXG4gKlxuICogVGhlIHZhbHVlcyBgdW5kZWZpbmVkYCwgYG51bGxgLCBhbmQgYG5vdGhpbmdgLCB3aWxsIGFsbCByZXN1bHQgaW4gbm8gY29udGVudFxuICogKGVtcHR5IHN0cmluZykgYmVpbmcgcmVuZGVyZWQuXG4gKlxuICogTm90ZSwgdGhpcyBpcyB1bnNhZmUgdG8gdXNlIHdpdGggYW55IHVzZXItcHJvdmlkZWQgaW5wdXQgdGhhdCBoYXNuJ3QgYmVlblxuICogc2FuaXRpemVkIG9yIGVzY2FwZWQsIGFzIGl0IG1heSBsZWFkIHRvIGNyb3NzLXNpdGUtc2NyaXB0aW5nXG4gKiB2dWxuZXJhYmlsaXRpZXMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnNhZmVIVE1MID0gZGlyZWN0aXZlKFVuc2FmZUhUTUxEaXJlY3RpdmUpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5zYWZlLWh0bWwuanMubWFwIiwiZXhwb3J0KmZyb21cImxpdC1odG1sL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLmpzXCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdHlsZS1tYXAuanMubWFwXG4iLCJleHBvcnQqZnJvbVwibGl0LWh0bWwvZGlyZWN0aXZlcy91bnNhZmUtaHRtbC5qc1wiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dW5zYWZlLWh0bWwuanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=