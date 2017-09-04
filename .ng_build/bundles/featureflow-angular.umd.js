(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['featureflow-angular'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var FeatureflowComponent = (function () {
    function FeatureflowComponent() {
    }
    /**
     * @return {?}
     */
    FeatureflowComponent.prototype.ngOnInit = function () {
    };
    return FeatureflowComponent;
}());
FeatureflowComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'app-featureflow',
                template: "\n    <h1>\n      <ng-content></ng-content>\n    </h1>\n  ",
                styles: ["\n    h1 {\n      color: red;\n    }\n  "]
            },] },
];
/**
 * @nocollapse
 */
FeatureflowComponent.ctorParameters = function () { return []; };
var FeatureflowModule = (function () {
    function FeatureflowModule() {
    }
    return FeatureflowModule;
}());
FeatureflowModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule
                ],
                declarations: [FeatureflowComponent],
                exports: [
                    FeatureflowComponent
                ]
            },] },
];
/**
 * @nocollapse
 */
FeatureflowModule.ctorParameters = function () { return []; };

exports.FeatureflowModule = FeatureflowModule;
exports.ɵa = FeatureflowComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=featureflow-angular.umd.js.map
