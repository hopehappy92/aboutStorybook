import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Button = function Button() {
  return /*#__PURE__*/React.createElement(StyledButton, null, "hi");
};
var StyledButton = styled.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1ulxvp5-0"
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  background-color: ", ";\n  color: ", ";\n"])), function (p) {
  return p.width || "200px";
}, function (p) {
  return p.height || "80px";
}, function (p) {
  return p.bgColor || "orange";
}, function (p) {
  return p.color || "white";
});
var templateObject_1;

export default Button;
//# sourceMappingURL=index.js.map
