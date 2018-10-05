"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var layout_1 = require("./layout");
var D3StyleLayoutAdaptor = (function (_super) {
    __extends(D3StyleLayoutAdaptor, _super);
    function D3StyleLayoutAdaptor() {
        var _this = _super.call(this) || this;
        _this.event = d3.dispatch(layout_1.EventType[layout_1.EventType.start], layout_1.EventType[layout_1.EventType.tick], layout_1.EventType[layout_1.EventType.end]);
        var d3layout = _this;
        var drag;
        _this.drag = function () {
            if (!drag) {
                var drag = d3.behavior.drag()
                    .origin(layout_1.Layout.dragOrigin)
                    .on("dragstart.d3adaptor", layout_1.Layout.dragStart)
                    .on("drag.d3adaptor", function (d) {
                    layout_1.Layout.drag(d, d3.event);
                    d3layout.resume();
                })
                    .on("dragend.d3adaptor", layout_1.Layout.dragEnd);
            }
            if (!arguments.length)
                return drag;
            this
                .call(drag);
        };
        return _this;
    }
    D3StyleLayoutAdaptor.prototype.trigger = function (e) {
        var d3event = { type: layout_1.EventType[e.type], alpha: e.alpha, stress: e.stress };
        this.event[d3event.type](d3event);
    };
    D3StyleLayoutAdaptor.prototype.kick = function () {
        var _this = this;
        d3.timer(function () { return _super.prototype.tick.call(_this); });
    };
    D3StyleLayoutAdaptor.prototype.on = function (eventType, listener) {
        if (typeof eventType === 'string') {
            this.event.on(eventType, listener);
        }
        else {
            this.event.on(layout_1.EventType[eventType], listener);
        }
        return this;
    };
    return D3StyleLayoutAdaptor;
}(layout_1.Layout));
exports.D3StyleLayoutAdaptor = D3StyleLayoutAdaptor;
function d3adaptor() {
    return new D3StyleLayoutAdaptor();
}
exports.d3adaptor = d3adaptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZDN2M2FkYXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9XZWJDb2xhL3NyYy9kM3YzYWRhcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFNQSxtQ0FBa0Q7QUFHOUM7SUFBMEMsd0NBQU07SUFnQjVDO1FBQUEsWUFDSSxpQkFBTyxTQXVCVjtRQXZDRCxXQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBUyxDQUFDLGtCQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsa0JBQVMsQ0FBQyxrQkFBUyxDQUFDLElBQUksQ0FBQyxFQUFFLGtCQUFTLENBQUMsa0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBa0JqRyxJQUFJLFFBQVEsR0FBRyxLQUFJLENBQUM7UUFDcEIsSUFBSSxJQUFJLENBQUM7UUFDVCxLQUFJLENBQUMsSUFBSSxHQUFHO1lBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNSLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO3FCQUN4QixNQUFNLENBQUMsZUFBTSxDQUFDLFVBQVUsQ0FBQztxQkFDekIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLGVBQU0sQ0FBQyxTQUFTLENBQUM7cUJBQzNDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLENBQUM7b0JBQ25CLGVBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFPLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDOUIsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO2dCQUN0QixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNqRCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO2dCQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFHbkMsSUFBSTtpQkFFQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFBOztJQUNMLENBQUM7SUFyQ0Qsc0NBQU8sR0FBUCxVQUFRLENBQVE7UUFDWixJQUFJLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxrQkFBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFHRCxtQ0FBSSxHQUFKO1FBQUEsaUJBRUM7UUFERyxFQUFFLENBQUMsS0FBSyxDQUFDLGNBQU0sT0FBQSxpQkFBTSxJQUFJLFlBQUUsRUFBWixDQUFZLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBZ0NELGlDQUFFLEdBQUYsVUFBRyxTQUE2QixFQUFFLFFBQW9CO1FBQ2xELEVBQUUsQ0FBQyxDQUFDLE9BQU8sU0FBUyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGtCQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLDJCQUFDO0FBQUQsQ0FBQyxBQW5ERCxDQUEwQyxlQUFNLEdBbUQvQztBQW5EWSxvREFBb0I7QUFpRWpDO0lBQ0ksTUFBTSxDQUFDLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBRkQsOEJBRUMifQ==