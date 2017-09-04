import { Component } from '@angular/core';
export class FeatureflowComponent {
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
function FeatureflowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FeatureflowComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    FeatureflowComponent.ctorParameters;
}
//# sourceMappingURL=featureflow.component.js.map