# featureflow-angular

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> Featureflow Angular Service

Get your Featureflow account at [featureflow.io](http://www.featureflow.io)

## Installation

Using NPM
```bash
$ npm install --save featureflow-angular
```

## Get Started
1. add  `FeatureflowAngularModule` to app `NgModule`.
    ```typescript
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { FeatureflowAngularModule } from 'featureflow-angular';
    //...
    @NgModule({
      declarations: [
       //...
      ],
      imports: [
        BrowserModule,
        FeatureflowAngularModule // FeatureflowAngularModule added
      ],
      providers: [],
   })
   class MainModule {}
   ```
   Use
   ---

   ```typescript
   import { Component } from '@angular/core';
   import { FeatureflowAngularService } from 'featureflow-angular';
   
   @Component({
       //...
       template: `
       <div *ngIf="featureflowService.evaluate('my-feature-key').isOn()">
           <h2>I will be seen when the feature is on</h2>
           <p>And this is some extra text</p>
       </div>
       <div *ngFor="let item of features | keyvalue">
             {{item.key}}:{{item.value}}
       </div>`
   })
   export class YourComponent {
     features: any;
     featureflow: any;
   
     constructor(
       private featureflowService: FeatureflowAngularService
     ) {           
           featureflowService.init(API_KEY, {id: 'uniqueUserId1'}, null);
           //or featureflowService.init(API_KEY);//creates a random userId
           this.features = featureflowService.getFeatures();
           this.featureflow = featureflowService.client();
     }
   }
   ```

3. That's it.
4. If you want to update your component when the evaluated feature changes in realtime, 
   us featureChanged$ subscription from `featureflowService`
      ```typescript
      import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
      import { Subscription } from 'rxjs';
      
      @Component({
          //...
          changeDetection: ChangeDetectionStrategy.OnPush // to make your app perform smooth and faster
      })
      export class YourComponent {
        features: any;
        featureflow: any;
        updateFeatures: Subscription = null;
      
        constructor(
          //...
          private ref: ChangeDetectorRef
        ) {
              // listen for the real time streaming changes
              this.updateFeatures = this.featureflowService.featureChanged$.subscribe(features => {
                    this.features = featureflowService.getFeatures(); // update features after feature change
                    this.ref.detectChanges(); // change detection in features is manually run 
              });
        }
      
        ngOnDestroy() {
          // unsubscribe to ensure no memory leaks
          this.updateFeatures.unsubscribe();
        }
      }
      ```
## Example
Update the SDK key to match your JS Client Environment SDK Key in featureflow-angular-examaple/src/app/app.component.ts

```
    featureflowService.init('js-env-YOUR-KEY-HER', {id: '1'}, null);
```
Start the example project
```bash
cd projects/featureflow-angular-example
ng serve
```
Try toggling features in the featureflow dashboard for your project and environment.   

## Developing
This project consists of 2 modules:
* /projects/featureflow-angular - the angular service library
* /projects/featureflow-angular-example - the example implementation

to build the library, from the root directory run 
```
ng build featureflow-angular
```
then run the example

```bash
cd projects/featureflow-angular-example
ng serve
```
## Publishing
After building your library with `ng build featureflow-angular`, go to the dist folder `cd dist/featureflow-angular` and run `npm publish`.

## Running unit tests

Run `ng test featureflow-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).


[npm-url]: https://nodei.co/npm/featureflow-angular
[npm-img]: https://nodei.co/npm/featureflow-angular.png

[dependency-url]: https://www.featureflow.io
[dependency-img]: https://www.featureflow.io/wp-content/uploads/2016/12/featureflow-web.png
