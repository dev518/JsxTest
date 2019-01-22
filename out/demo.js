"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var demo =
/*#__PURE__*/
function () {
  function demo() {
    _classCallCheck(this, demo);
  }

  _createClass(demo, [{
    key: "click",
    value: function click() {}
  }, {
    key: "render",
    value: function render() {
      var arr = [1, 2, 3];
      return CreatView(BaseView, {
        x: 0,
        y: 100
      }, CreatView("button", {
        x: 100,
        y: 200,
        onclick: this.click
      }), CreatView("c2", {
        x: 100,
        y: 200
      }, arr.map(function (item) {
        return CreatView("c3", {
          x: 100,
          y: 200
        });
      })));
    }
  }]);

  return demo;
}();