import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                imports: [
                    CommonModule
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
/**
 * Generated bundle index. Do not edit.
 */
export { FeatureflowModule, FeatureflowComponent as ɵa };
//# sourceMappingURL=featureflow-angular.es5.js.map
