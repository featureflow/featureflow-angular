import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class FeatureflowComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FeatureflowComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-featureflow',
                template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `,
                styles: [`
    h1 {
      color: red;
    }
  `]
            },] },
];
/**
 * @nocollapse
 */
FeatureflowComponent.ctorParameters = () => [];

class FeatureflowModule {
}
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
FeatureflowModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { FeatureflowModule, FeatureflowComponent as ɵa };
//# sourceMappingURL=featureflow-angular.js.map
