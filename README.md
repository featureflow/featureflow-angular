# featureflow-angular

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> Featureflow Angular 2+ Module

#### This is currently under development.

Get your Featureflow account at [featureflow.io](http://www.featureflow.io)

## Get Started

The easiest way to get started is to follow the [Featureflow quick start guides](http://docs.featureflow.io/docs)

## Change Log

Please see [CHANGELOG](https://github.com/featureflow/featureflow-angular/blob/master/CHANGELOG.md).

## Installation

Using NPM
```bash
$ npm install --save featureflow-angular
```

## Usage

### Adding Featureflow
```
import {FeatureflowService} from "./featureflow.service";
```

### Evaluate a feature


```js
import Featureflow from 'featureflow-angular';
```

##### Realtime events and EventSource
Featureflow uses EventSource for realtime streaming of feature updates. If you wish to target a browser that doesn't natively support EventSource, we recommend using a polyfill such as [this one](https://github.com/Yaffle/EventSource).

You can either require/include the polyfill in your application,

```js
//for example
import 'event-source-polyfill';

```

### Quick start

Get your environment's Featureflow Javascript API key and initialise a new Featureflow client

```js
var FF_JS_API_KEY = '<Your javascript api key goes here> (The key beginning js-env-)';
//...
var featureflow = Featureflow.init(FF_JS_API_KEY);
```

This will load the value of each feature for the current environment specified by the api key. These values can be toggled on and off at `https://<your-org-key>.featureflow.io`

**Note: You are responsible for passing the featureflow client instance around your application**

In your code, you can test the value of your feature where the value of `my-feature-key` is equal to `'on'`
```js
  if (featureflow.evaluate('my-feature-key').is('on')){
    // this feature code will be run because 'my-feature-key' is set to 'on'
  }
```

Because the default variants for any feature are `'on'` and `'off'`, we have provided two helper methods `.isOn()` and `.isOff()`

```js

if(featureflow.evaluate('my-feature-key').isOn()){
  // this feature code will be run because 'my-feature-key' is set to 'on'
}

if(featureflow.evaluate('my-feature-key').isOff()){
  // this feature code won't be run because 'my-feature-key' is not set to 'off'
}
```

Further documentation can be found [here](http://docs.featureflow.io/docs)
For the full Javascript API Specification see [here] (https://github.com/featureflow/featureflow-javascript-sdk)

## Roadmap
- [x] basic wrapper

## License

Apache-2.0

[npm-url]: https://nodei.co/npm/featureflow-angular
[npm-img]: https://nodei.co/npm/featureflow-angular.png

[dependency-url]: https://www.featureflow.io
[dependency-img]: https://www.featureflow.io/wp-content/uploads/2016/12/featureflow-web.png

## Building
This repository also includes a demo app.
To run the demo:
* Requires: node >= 8 ```nvm install 8```
* Install the latest angular cli ```npm install @angular/cli``` 
* Set your JS Key in featureflow.component.ts
* Install dependencies: ```npm install```
* Start the demo ``` ng serve```

