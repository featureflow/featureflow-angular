# featureflow-angular

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> Featureflow Angular Service

Get your Featureflow account at [featureflow.io](http://www.featureflow.io)

## Get Started
Import the featureflow angular library into your angular application:
``

``



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
