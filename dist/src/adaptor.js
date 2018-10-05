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
var LayoutAdaptor = (function (_super) {
    __extends(LayoutAdaptor, _super);
    function LayoutAdaptor(options) {
        var _this = _super.call(this) || this;
        var self = _this;
        var o = options;
        if (o.trigger) {
            _this.trigger = o.trigger;
        }
        if (o.kick) {
            _this.kick = o.kick;
        }
        if (o.drag) {
            _this.drag = o.drag;
        }
        if (o.on) {
            _this.on = o.on;
        }
        _this.dragstart = _this.dragStart = layout_1.Layout.dragStart;
        _this.dragend = _this.dragEnd = layout_1.Layout.dragEnd;
        return _this;
    }
    LayoutAdaptor.prototype.trigger = function (e) { };
    ;
    LayoutAdaptor.prototype.kick = function () { };
    ;
    LayoutAdaptor.prototype.drag = function () { };
    ;
    LayoutAdaptor.prototype.on = function (eventType, listener) { return this; };
    ;
    return LayoutAdaptor;
}(layout_1.Layout));
exports.LayoutAdaptor = LayoutAdaptor;
function adaptor(options) {
    return new LayoutAdaptor(options);
}
exports.adaptor = adaptor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1dlYkNvbGEvc3JjL2FkYXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQWlEO0FBRTdDO0lBQW1DLGlDQUFNO0lBYXJDLHVCQUFhLE9BQU87UUFBcEIsWUFDSSxpQkFBTyxTQXlCVjtRQXJCRyxJQUFJLElBQUksR0FBRyxLQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBRWhCLEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxPQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBRSxDQUFDLENBQUMsSUFBSyxDQUFDLENBQUEsQ0FBQztZQUNWLEtBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUUsQ0FBQyxDQUFDLElBQUssQ0FBQyxDQUFBLENBQUM7WUFDVixLQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFFLENBQUMsQ0FBQyxFQUFHLENBQUMsQ0FBQSxDQUFDO1lBQ1IsS0FBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxTQUFTLEdBQUcsZUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQzs7SUFDakQsQ0FBQztJQXBDRCwrQkFBTyxHQUFQLFVBQVEsQ0FBUSxJQUFHLENBQUM7SUFBQSxDQUFDO0lBQ3JCLDRCQUFJLEdBQUosY0FBUSxDQUFDO0lBQUEsQ0FBQztJQUNWLDRCQUFJLEdBQUosY0FBUSxDQUFDO0lBQUEsQ0FBQztJQUNWLDBCQUFFLEdBQUYsVUFBRyxTQUE2QixFQUFFLFFBQW9CLElBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFBQSxDQUFDO0lBa0NwRixvQkFBQztBQUFELENBQUMsQUF4Q0QsQ0FBbUMsZUFBTSxHQXdDeEM7QUF4Q1ksc0NBQWE7QUE2QzFCLGlCQUF5QixPQUFPO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztBQUN4QyxDQUFDO0FBRkQsMEJBRUMifQ==