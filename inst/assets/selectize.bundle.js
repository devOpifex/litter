(self["webpackChunklitter"] = self["webpackChunklitter"] || []).push([["selectize"],{

/***/ "./srcjs/components/selectize.js":
/*!***************************************!*\
  !*** ./srcjs/components/selectize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Selectize": () => (/* binding */ Selectize)
/* harmony export */ });
/* harmony import */ var lit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit */ "./node_modules/lit/index.js");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Shiny */ "Shiny");
/* harmony import */ var Shiny__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Shiny__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jQuery */ "jQuery");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input.js */ "./srcjs/input.js");
/* harmony import */ var lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit/directives/style-map.js */ "./node_modules/lit/directives/style-map.js");






class Selectize extends _input_js__WEBPACK_IMPORTED_MODULE_3__.LitInput {
  static properties = {
    options: { type: Array },
    value: { type: Array },
    endpoint: { type: String },
  };

  constructor() {
    super();
    this.endpoint = "";
    this.options = [];
    this.value = [];
    this.timeout;
    this.lastQuery = "";
  }

  _keyup() {
    clearTimeout(this.timeout);

    setTimeout(() => {
      const query = this.shadowRoot.querySelector("input").value;
      this.shadowRoot.querySelector("ul").classList.remove("d-none");

      const options = this.shadowRoot.querySelectorAll("li");
      Array.from(options).forEach((el) => {
        if (el.dataset.value.includes(query)) {
          el.style.display = "block";
          return;
        }

        el.style.display = "none";
      });

      if (this.endpoint == "") {
        return;
      }

      if (query == "") {
        return;
      }
      fetch(`${this.endpoint}&query=${encodeURIComponent(query)}`)
        .then((res) => res.json())
        .then((data) => {
          const optionsValuesToSet = data.map((el) => el.value);
          const missingValues = this.value.filter((val) =>
            !optionsValuesToSet.includes(val)
          );
          let newOpts = this.options.slice(0);
          let toAdd = newOpts.filter((el) => {
            return missingValues.includes(el.value);
          });
          data.push(...toAdd);
          this.options = data;
        })
        .catch((error) => console.error(error));
    }, 250);
  }

  _selectItem(e) {
    this.value.push(e.target.dataset.value);
    this.value = [...new Set(this.value.slice(0))];
    this.shadowRoot.querySelector("input").value = "";
    this.shadowRoot.querySelector("ul").classList.add("d-none");
  }

  _removeItem(e) {
    this.value = this.value.filter((el) => el != e.target.dataset.value);
  }

  updated() {
    this._send();
  }

  render() {
    const opts = this.options.filter((el) => {
      return !this.value.includes(el);
    }).map((el) => {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<li @click=${this._selectItem} class="list-group-item" data-value="${el.value}">${
        el.label || el.value
      }</li>`;
    });

    const selected = this.options.filter((opt) => {
      return this.value.includes(opt.value);
    }).map((variable) => {
      return lit__WEBPACK_IMPORTED_MODULE_0__.html`<span data-value="${variable.value}" @click=${this._removeItem} style=${
        (0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)({ height: 80 + "%", paddingTop: 1.5 + "%" })
      } class="badge bg-primary  m-1">${
        variable.label || variable.value
      }</span>`;
    });

    return lit__WEBPACK_IMPORTED_MODULE_0__.html`<div class="d-flex">
      <div class="flex-shrink-1 position-relative">
        <input
          placeholder="Search..." class='form-control ${this.class}' @keyup=${this._keyup} />
        <ul style=${
      (0,lit_directives_style_map_js__WEBPACK_IMPORTED_MODULE_4__.styleMap)({ zIndex: 9999, maxHeight: 15 + "rem" })
    } class="list-group w-100 position-absolute d-none bg-light">${opts}</ul>
      </div>
      <div class="flex-grow-1">${selected}</div>
    </div>
      `;
  }
}

customElements.define("litter-selectize", Selectize);


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
/******/ __webpack_require__.O(0, ["lit","bs5"], () => (__webpack_exec__("./srcjs/components/selectize.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBDO0FBQ3dCO0FBQ2xFLGdDQUFnQyxvREFBUztBQUN6QztBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkRBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsS0FBSyxHQUFHLE9BQU87QUFDN0MsU0FBUztBQUNUO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ08saUJBQWlCLHdEQUFTO0FBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkc4QztBQUM5QyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2NvbXBvbmVudHMvc2VsZWN0aXplLmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL2lucHV0LmpzIiwid2VicGFjazovL2xpdHRlci8uL3NyY2pzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwiU2hpbnlcIiIsIndlYnBhY2s6Ly9saXR0ZXIvZXh0ZXJuYWwgdmFyIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC1odG1sL2RldmVsb3BtZW50L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9saXR0ZXIvLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvZGV2ZWxvcG1lbnQvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanMiLCJ3ZWJwYWNrOi8vbGl0dGVyLy4vbm9kZV9tb2R1bGVzL2xpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodG1sLCBMaXRFbGVtZW50IH0gZnJvbSBcImxpdFwiO1xuaW1wb3J0IFwiU2hpbnlcIjtcbmltcG9ydCBcImpRdWVyeVwiO1xuaW1wb3J0IHsgTGl0SW5wdXQgfSBmcm9tIFwiLi4vaW5wdXQuanNcIjtcbmltcG9ydCB7IHN0eWxlTWFwIH0gZnJvbSBcImxpdC9kaXJlY3RpdmVzL3N0eWxlLW1hcC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgU2VsZWN0aXplIGV4dGVuZHMgTGl0SW5wdXQge1xuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICBvcHRpb25zOiB7IHR5cGU6IEFycmF5IH0sXG4gICAgdmFsdWU6IHsgdHlwZTogQXJyYXkgfSxcbiAgICBlbmRwb2ludDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuZW5kcG9pbnQgPSBcIlwiO1xuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xuICAgIHRoaXMudmFsdWUgPSBbXTtcbiAgICB0aGlzLnRpbWVvdXQ7XG4gICAgdGhpcy5sYXN0UXVlcnkgPSBcIlwiO1xuICB9XG5cbiAgX2tleXVwKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBxdWVyeSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikudmFsdWU7XG4gICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInVsXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJkLW5vbmVcIik7XG5cbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuICAgICAgQXJyYXkuZnJvbShvcHRpb25zKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBpZiAoZWwuZGF0YXNldC52YWx1ZS5pbmNsdWRlcyhxdWVyeSkpIHtcbiAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGhpcy5lbmRwb2ludCA9PSBcIlwiKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHF1ZXJ5ID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZmV0Y2goYCR7dGhpcy5lbmRwb2ludH0mcXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQocXVlcnkpfWApXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uc1ZhbHVlc1RvU2V0ID0gZGF0YS5tYXAoKGVsKSA9PiBlbC52YWx1ZSk7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IHRoaXMudmFsdWUuZmlsdGVyKCh2YWwpID0+XG4gICAgICAgICAgICAhb3B0aW9uc1ZhbHVlc1RvU2V0LmluY2x1ZGVzKHZhbClcbiAgICAgICAgICApO1xuICAgICAgICAgIGxldCBuZXdPcHRzID0gdGhpcy5vcHRpb25zLnNsaWNlKDApO1xuICAgICAgICAgIGxldCB0b0FkZCA9IG5ld09wdHMuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG1pc3NpbmdWYWx1ZXMuaW5jbHVkZXMoZWwudmFsdWUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGRhdGEucHVzaCguLi50b0FkZCk7XG4gICAgICAgICAgdGhpcy5vcHRpb25zID0gZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VsZWN0SXRlbShlKSB7XG4gICAgdGhpcy52YWx1ZS5wdXNoKGUudGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuICAgIHRoaXMudmFsdWUgPSBbLi4ubmV3IFNldCh0aGlzLnZhbHVlLnNsaWNlKDApKV07XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJ1bFwiKS5jbGFzc0xpc3QuYWRkKFwiZC1ub25lXCIpO1xuICB9XG5cbiAgX3JlbW92ZUl0ZW0oZSkge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmZpbHRlcigoZWwpID0+IGVsICE9IGUudGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlZCgpIHtcbiAgICB0aGlzLl9zZW5kKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgb3B0cyA9IHRoaXMub3B0aW9ucy5maWx0ZXIoKGVsKSA9PiB7XG4gICAgICByZXR1cm4gIXRoaXMudmFsdWUuaW5jbHVkZXMoZWwpO1xuICAgIH0pLm1hcCgoZWwpID0+IHtcbiAgICAgIHJldHVybiBodG1sYDxsaSBAY2xpY2s9JHt0aGlzLl9zZWxlY3RJdGVtfSBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiIGRhdGEtdmFsdWU9XCIke2VsLnZhbHVlfVwiPiR7XG4gICAgICAgIGVsLmxhYmVsIHx8IGVsLnZhbHVlXG4gICAgICB9PC9saT5gO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLm9wdGlvbnMuZmlsdGVyKChvcHQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlLmluY2x1ZGVzKG9wdC52YWx1ZSk7XG4gICAgfSkubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgcmV0dXJuIGh0bWxgPHNwYW4gZGF0YS12YWx1ZT1cIiR7dmFyaWFibGUudmFsdWV9XCIgQGNsaWNrPSR7dGhpcy5fcmVtb3ZlSXRlbX0gc3R5bGU9JHtcbiAgICAgICAgc3R5bGVNYXAoeyBoZWlnaHQ6IDgwICsgXCIlXCIsIHBhZGRpbmdUb3A6IDEuNSArIFwiJVwiIH0pXG4gICAgICB9IGNsYXNzPVwiYmFkZ2UgYmctcHJpbWFyeSAgbS0xXCI+JHtcbiAgICAgICAgdmFyaWFibGUubGFiZWwgfHwgdmFyaWFibGUudmFsdWVcbiAgICAgIH08L3NwYW4+YDtcbiAgICB9KTtcblxuICAgIHJldHVybiBodG1sYDxkaXYgY2xhc3M9XCJkLWZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LXNocmluay0xIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgY2xhc3M9J2Zvcm0tY29udHJvbCAke3RoaXMuY2xhc3N9JyBAa2V5dXA9JHt0aGlzLl9rZXl1cH0gLz5cbiAgICAgICAgPHVsIHN0eWxlPSR7XG4gICAgICBzdHlsZU1hcCh7IHpJbmRleDogOTk5OSwgbWF4SGVpZ2h0OiAxNSArIFwicmVtXCIgfSlcbiAgICB9IGNsYXNzPVwibGlzdC1ncm91cCB3LTEwMCBwb3NpdGlvbi1hYnNvbHV0ZSBkLW5vbmUgYmctbGlnaHRcIj4ke29wdHN9PC91bD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvdy0xXCI+JHtzZWxlY3RlZH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibGl0dGVyLXNlbGVjdGl6ZVwiLCBTZWxlY3RpemUpO1xuIiwiaW1wb3J0IHsgaHRtbCwgTGl0RWxlbWVudCB9IGZyb20gXCJsaXRcIjtcbmltcG9ydCB7IGdldEJzNSB9IGZyb20gXCIuL2Nzcy9iczVcIjtcbmltcG9ydCBcIlNoaW55XCI7XG5pbXBvcnQgXCJqUXVlcnlcIjtcbmltcG9ydCBcIi4vdXBkYXRlLmpzXCI7XG5cbmV4cG9ydCBjbGFzcyBMaXRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICBzdGF0aWMgc3R5bGVzID0gW2dldEJzNSgpXTtcblxuICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNsYXNzOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHByaW9yaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGNhbGxiYWNrOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGlkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHNlbmRfb25fY29ubmVjdDogeyBcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICBjb252ZXJ0ZXI6ICh2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiB2YWx1ZSA9PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWU7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRhOiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucHJpb3JpdHkgPSBcImRlZmVycmVkXCI7XG4gICAgdGhpcy5jbGFzcyA9IFwiXCI7XG4gICAgdGhpcy5tZXRhID0ge307XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB0aGlzLmNhbGxiYWNrID0gXCJcIjtcbiAgICB0aGlzLnNlbmRfb25fY29ubmVjdCA9IHRydWU7XG4gIH1cblxuICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgdGhpcy5fc2VuZE9uQ29ubmVjdCgpO1xuICB9XG5cbiAgX3NlbmQoKSB7XG4gICAgaWYgKHRoaXMuY2FsbGJhY2spIHtcbiAgICAgIGxldCBjYiA9IGV2YWwodGhpcy5jYWxsYmFjayk7XG4gICAgICBjYih0aGlzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uYW1lID09IFwiXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGF0YSA9IHtcbiAgICAgIHByb3BzOiB0aGlzLm1ldGEsXG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuaWQpIHtcbiAgICAgIGRhdGEuaWQgPSB0aGlzLmlkO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBTaGlueS5zZXRJbnB1dFZhbHVlKFxuICAgICAgICB0aGlzLm5hbWUgKyBcIjpsaXR0ZXIucGFyc2VcIixcbiAgICAgICAgZGF0YSxcbiAgICAgICAge1xuICAgICAgICAgIHByaW9yaXR5OiB0aGlzLnByaW9yaXR5LFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihcInNoaW55IG5vdCBjb25uZWN0ZWRcIik7XG4gICAgfVxuICB9XG5cbiAgX3NlbmRUaHJvdHRsZSgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fc2VuZCgpO1xuICAgIH0sIDI1MCk7XG4gIH1cblxuICBfc2VuZE9uQ29ubmVjdCgpIHtcbiAgICBpZighdGhpcy5zZW5kX29uX2Nvbm5lY3QpXG4gICAgICByZXR1cm47XG5cbiAgICBjb25zb2xlLmxvZyh0aGlzLnNlbmRfb25fY29ubmVjdClcblxuICAgICQoZG9jdW1lbnQpLm9uKFwic2hpbnk6Y29ubmVjdGVkXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLl9zZW5kKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImNvbnN0IHNlbGVjdCA9IChtc2cpID0+IHtcbiAgaWYgKG1zZy5uYW1lKSB7XG4gICAgcmV0dXJuIGBbbmFtZT0nJHttc2cubmFtZX0nXWA7XG4gIH1cblxuICBpZiAobXNnLnNlbCkge1xuICAgIHJldHVybiBzZWw7XG4gIH1cblxuICBpZiAobXNnLmlkKSB7XG4gICAgcmV0dXJuIGAjJHtpZH1gO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5TaGlueS5hZGRDdXN0b21NZXNzYWdlSGFuZGxlcihcImxpdHRlci11cGRhdGUtaW5wdXRcIiwgKG1zZykgPT4ge1xuICBsZXQgdGFyZ2V0ID0gc2VsZWN0KG1zZyk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBPYmplY3Qua2V5cyhtc2cucHJvcHMpLmZvckVhY2goKGtleSwgaW5kZXgpID0+IHtcbiAgICBsZXQgdmFsdWUgPSBtc2cucHJvcHNba2V5XTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT0gXCJvYmplY3RcIikge1xuICAgICAgdmFsdWUgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgJCh0YXJnZXQpLmF0dHIoa2V5LCB2YWx1ZSk7XG4gIH0pO1xufSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFNoaW55OyIsIm1vZHVsZS5leHBvcnRzID0galF1ZXJ5OyIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcnRUeXBlID0ge1xuICAgIEFUVFJJQlVURTogMSxcbiAgICBDSElMRDogMixcbiAgICBQUk9QRVJUWTogMyxcbiAgICBCT09MRUFOX0FUVFJJQlVURTogNCxcbiAgICBFVkVOVDogNSxcbiAgICBFTEVNRU5UOiA2LFxufTtcbi8qKlxuICogQ3JlYXRlcyBhIHVzZXItZmFjaW5nIGRpcmVjdGl2ZSBmdW5jdGlvbiBmcm9tIGEgRGlyZWN0aXZlIGNsYXNzLiBUaGlzXG4gKiBmdW5jdGlvbiBoYXMgdGhlIHNhbWUgcGFyYW1ldGVycyBhcyB0aGUgZGlyZWN0aXZlJ3MgcmVuZGVyKCkgbWV0aG9kLlxuICovXG5leHBvcnQgY29uc3QgZGlyZWN0aXZlID0gKGMpID0+ICguLi52YWx1ZXMpID0+ICh7XG4gICAgLy8gVGhpcyBwcm9wZXJ0eSBuZWVkcyB0byByZW1haW4gdW5taW5pZmllZC5cbiAgICBbJ18kbGl0RGlyZWN0aXZlJCddOiBjLFxuICAgIHZhbHVlcyxcbn0pO1xuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBjcmVhdGluZyBjdXN0b20gZGlyZWN0aXZlcy4gVXNlcnMgc2hvdWxkIGV4dGVuZCB0aGlzIGNsYXNzLFxuICogaW1wbGVtZW50IGByZW5kZXJgIGFuZC9vciBgdXBkYXRlYCwgYW5kIHRoZW4gcGFzcyB0aGVpciBzdWJjbGFzcyB0b1xuICogYGRpcmVjdGl2ZWAuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKF9wYXJ0SW5mbykgeyB9XG4gICAgLy8gU2VlIGNvbW1lbnQgaW4gRGlzY29ubmVjdGFibGUgaW50ZXJmYWNlIGZvciB3aHkgdGhpcyBpcyBhIGdldHRlclxuICAgIGdldCBfJGlzQ29ubmVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fJHBhcmVudC5fJGlzQ29ubmVjdGVkO1xuICAgIH1cbiAgICAvKiogQGludGVybmFsICovXG4gICAgXyRpbml0aWFsaXplKHBhcnQsIHBhcmVudCwgYXR0cmlidXRlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fX3BhcnQgPSBwYXJ0O1xuICAgICAgICB0aGlzLl8kcGFyZW50ID0gcGFyZW50O1xuICAgICAgICB0aGlzLl9fYXR0cmlidXRlSW5kZXggPSBhdHRyaWJ1dGVJbmRleDtcbiAgICB9XG4gICAgLyoqIEBpbnRlcm5hbCAqL1xuICAgIF8kcmVzb2x2ZShwYXJ0LCBwcm9wcykge1xuICAgICAgICByZXR1cm4gdGhpcy51cGRhdGUocGFydCwgcHJvcHMpO1xuICAgIH1cbiAgICB1cGRhdGUoX3BhcnQsIHByb3BzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlciguLi5wcm9wcyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGlyZWN0aXZlLmpzLm1hcCIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE4IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuaW1wb3J0IHsgbm9DaGFuZ2UgfSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUsIERpcmVjdGl2ZSwgUGFydFR5cGUsIH0gZnJvbSAnLi4vZGlyZWN0aXZlLmpzJztcbmNsYXNzIFN0eWxlTWFwRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJ0SW5mbykge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHN1cGVyKHBhcnRJbmZvKTtcbiAgICAgICAgaWYgKHBhcnRJbmZvLnR5cGUgIT09IFBhcnRUeXBlLkFUVFJJQlVURSB8fFxuICAgICAgICAgICAgcGFydEluZm8ubmFtZSAhPT0gJ3N0eWxlJyB8fFxuICAgICAgICAgICAgKChfYSA9IHBhcnRJbmZvLnN0cmluZ3MpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5sZW5ndGgpID4gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgYHN0eWxlTWFwYCBkaXJlY3RpdmUgbXVzdCBiZSB1c2VkIGluIHRoZSBgc3R5bGVgIGF0dHJpYnV0ZSAnICtcbiAgICAgICAgICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbmRlcihzdHlsZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHN0eWxlSW5mbykucmVkdWNlKChzdHlsZSwgcHJvcCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZUluZm9bcHJvcF07XG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIENvbnZlcnQgcHJvcGVydHkgbmFtZXMgZnJvbSBjYW1lbC1jYXNlIHRvIGRhc2gtY2FzZSwgaS5lLjpcbiAgICAgICAgICAgIC8vICBgYmFja2dyb3VuZENvbG9yYCAtPiBgYmFja2dyb3VuZC1jb2xvcmBcbiAgICAgICAgICAgIC8vIFZlbmRvci1wcmVmaXhlZCBuYW1lcyBuZWVkIGFuIGV4dHJhIGAtYCBhcHBlbmRlZCB0byBmcm9udDpcbiAgICAgICAgICAgIC8vICBgd2Via2l0QXBwZWFyYW5jZWAgLT4gYC13ZWJraXQtYXBwZWFyYW5jZWBcbiAgICAgICAgICAgIC8vIEV4Y2VwdGlvbiBpcyBhbnkgcHJvcGVydHkgbmFtZSBjb250YWluaW5nIGEgZGFzaCwgaW5jbHVkaW5nXG4gICAgICAgICAgICAvLyBjdXN0b20gcHJvcGVydGllczsgd2UgYXNzdW1lIHRoZXNlIGFyZSBhbHJlYWR5IGRhc2gtY2FzZWQgaS5lLjpcbiAgICAgICAgICAgIC8vICBgLS1teS1idXR0b24tY29sb3JgIC0tPiBgLS1teS1idXR0b24tY29sb3JgXG4gICAgICAgICAgICBwcm9wID0gcHJvcFxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8oPzpeKHdlYmtpdHxtb3p8bXN8byl8KSg/PVtBLVpdKS9nLCAnLSQmJylcbiAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZSArIGAke3Byb3B9OiR7dmFsdWV9O2A7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG4gICAgdXBkYXRlKHBhcnQsIFtzdHlsZUluZm9dKSB7XG4gICAgICAgIGNvbnN0IHsgc3R5bGUgfSA9IHBhcnQuZWxlbWVudDtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzID0gbmV3IFNldCgpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzLmFkZChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlbmRlcihzdHlsZUluZm8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBvbGQgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdCBpbiBzdHlsZUluZm9cbiAgICAgICAgLy8gV2UgdXNlIGZvckVhY2goKSBpbnN0ZWFkIG9mIGZvci1vZiBzbyB0aGF0IHJlIGRvbid0IHJlcXVpcmUgZG93bi1sZXZlbFxuICAgICAgICAvLyBpdGVyYXRpb24uXG4gICAgICAgIHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBuYW1lIGlzbid0IGluIHN0eWxlSW5mbyBvciBpdCdzIG51bGwvdW5kZWZpbmVkXG4gICAgICAgICAgICBpZiAoc3R5bGVJbmZvW25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcmV2aW91c1N0eWxlUHJvcGVydGllcy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJy0nKSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5yZW1vdmVQcm9wZXJ0eShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5vdGUgcmVzZXQgdXNpbmcgZW1wdHkgc3RyaW5nICh2cyBudWxsKSBhcyBJRTExIGRvZXMgbm90IGFsd2F5c1xuICAgICAgICAgICAgICAgICAgICAvLyByZXNldCB2aWEgbnVsbCAoaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0VsZW1lbnRDU1NJbmxpbmVTdHlsZS9zdHlsZSNzZXR0aW5nX3N0eWxlcylcbiAgICAgICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBBZGQgb3IgdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIHN0eWxlSW5mbykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBzdHlsZUluZm9bbmFtZV07XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZpb3VzU3R5bGVQcm9wZXJ0aWVzLmFkZChuYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnLScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub0NoYW5nZTtcbiAgICB9XG59XG4vKipcbiAqIEEgZGlyZWN0aXZlIHRoYXQgYXBwbGllcyBDU1MgcHJvcGVydGllcyB0byBhbiBlbGVtZW50LlxuICpcbiAqIGBzdHlsZU1hcGAgY2FuIG9ubHkgYmUgdXNlZCBpbiB0aGUgYHN0eWxlYCBhdHRyaWJ1dGUgYW5kIG11c3QgYmUgdGhlIG9ubHlcbiAqIGV4cHJlc3Npb24gaW4gdGhlIGF0dHJpYnV0ZS4gSXQgdGFrZXMgdGhlIHByb3BlcnR5IG5hbWVzIGluIHRoZSBgc3R5bGVJbmZvYFxuICogb2JqZWN0IGFuZCBhZGRzIHRoZSBwcm9wZXJ0eSB2YWx1ZXMgYXMgQ1NTIHByb3BlcnRpZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm9cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKFN0eWxlTWFwRGlyZWN0aXZlKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLW1hcC5qcy5tYXAiLCJleHBvcnQqZnJvbVwibGl0LWh0bWwvZGlyZWN0aXZlcy9zdHlsZS1tYXAuanNcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLW1hcC5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==