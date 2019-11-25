# featureflow-javascript-sdk

[![][npm-img]][npm-url]

[![][dependency-img]][dependency-url]

> Featureflow Javascript Client SDK

Get your Featureflow account at [featureflow.io](http://www.featureflow.io)

## Get Started

The easiest way to get started is to follow the [Featureflow quick start guides](http://docs.featureflow.io/docs)

> Alternatively to see featureflow running in action, you can run the example in this repo:
1. Clone this repository
2. Update example/src/index.js ```const FF_KEY = 'your-javascript-environment-sdk-key';``` 
3. Run `$ npm install` and `$ npm run example`




## Change Log

Please see [CHANGELOG](https://github.com/featureflow/featureflow-javascript-sdk/blob/master/CHANGELOG.md).

## Installation

Using NPM
```bash
$ npm install --save featureflow-client
```

Using bower
```bash
$ bower install featureflow-client
```

## Usage

### Adding Featureflow

##### Webpack
If you are using `webpack`, you can require the code using
```js
var Featureflow = require('featureflow-client');
```
or using es6 syntax
```js
import Featureflow from 'featureflow-client';
```

##### Bower
Include the following script in HTML file. This will expose the global variable `Featureflow`
```html
<script crossorigin="anonymous" src="bower_components/featureflow-client/dist/featureflow.min.js"></script>
```
Note: It is recommended to use build tools to manage your bower dependencies.
Please see the [bower website](https://bower.io/#use-packages) for more details.

##### CDN
Include the following script in HTML file. This will expose the global variable `Featureflow`
```html
<script crossorigin="anonymous" src="https://cdn.featureflow.io/featureflow.js"></script>
```

##### Realtime events and EventSource 
Featureflow uses EventSource for realtime streaming of feature updates. If you wish to target a browser that doesn't natively support EventSource, we recommend using a polyfill such as [this one](https://github.com/Yaffle/EventSource).

You can either require/include the polyfill in your application, 

```js
//for example
import 'event-source-polyfill';

```

or include it in your `<head>` of your html file before you load the Featureflow client.

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/event-source-polyfill/0.0.9/eventsource.js"></script>
```


### Quick start

Get your environment's Featureflow Javascript API key and initialise a new Featureflow client

```js
var FF_JS_API_KEY = '<Your javascript api key goes here>';
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


#### Anonymous User and Featureflow Server SDKs
In some instances you will want to split test a feature with anonymous users that spans both client and server code.
The `featureflow` client generates a unique anonymous key for the user which can be shared with your server requests. 
There are a couple of ways you can do this.
##### 1. Access the cookie `ff-anonymous-id`
Anytime the anonymous user is updated the `featureflow` client will set the `ff-anonymous-id` cookie. 
If request server is on the same \[sub\]domain and it doesn't have a user id you should use this cookie.
##### 2. Pass the value into the request yourself
If you cannot use cookies (e.g. api on a separate \[sub\]domain), you can pass the anonymous id directly into the request.
Here are some examples of how you can do this:
1. Using HTTP Header: `headers["X-Featureflow-Anonymous-Id"] = featureflow.getAnonymousId()`
2. Adding a query param: `'?ff-anonymousid='+featureflow.getAnonymousId()`

### API and Configuration
#### Globals
#### `Featureflow.init(apiKey, [user], [config])`
Returns a `featureflow` instance, see below

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `apiKey*` | `string` | **`Required`** | The Featureflow Javascript API key for the environment or project you are targeting |
| `user` | `user` |  | See the `user` object below |
| `config` | `config` |  | See the `config` object below |
| **`return`** | `featureflow` |  | See Featureflow Instance below |

####Featureflow Instance
These properties are available on the return of `Featureflow.init(...)`
#### `featureflow.evaluate(featureKey)`
Returns an object that can be used to help evaluate feature values in an expressive way.
##### `featureflow.evaluate(featureKey).is(value)`
Evaluates the value of a feature for the given user.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `featureKey*`  | `string` | **`Required`** | The feature key you are targeting |
| `value*`  | `string` | **`Required`** | The value you are testing against |
| **`return`** | `boolean` | | `true` if the feature's value is equal to the `value` provided, otherwise `false`  |


##### `featureflow.evaluate(featureKey).isOn()`
Evaluates the value of a feature for the given user is equal to `'on'`.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `featureKey*`  | `string` | **`Required`** | The feature key you are targeting |
| **`return`** | `boolean` | | `true` if the feature's value is equal to `'on'` provided, otherwise `false`  |


##### `featureflow.evaluate(featureKey).isOff()`
Evaluates the value of a feature for the given user is equal to `'off'`.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `featureKey*`  | `string` | **`Required`** | The feature key you are targeting |
| **`return`** | `boolean` | | `true` if the feature's value is equal to `'off'` provided, otherwise `false`  |

##### `featureflow.evaluate(featureKey).value()`
Returns the value of a feature for the given user.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `featureKey*`  | `string` | **`Required`** | The feature key you are targeting |
| **`return`** | `string` | | The value of the feature, or the default feature value from `config.defaultFeatures[featureKey]` if present, or `'off'`  |

#### `featureflow.goal(goalKey)`
Sends a goal event, along with the current evaluated features to **featureflow.io**. Use with experiments in the admin console.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `goalKey*` | `string` |  | The key of the goal you want to target. |

#### `featureflow.updateUser(user, [callback])`
Updates the current `user` of the instance and reevaluates all feature features using the new `user`. 

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `user` | `user` | ... | See the `user` object below |

Fires a `Featureflow.events.LOADED` event when the features have been evaluated.
Also Fires the callback if provided with the newly evaluated features.


#### `featureflow.getFeatures()`
Returns the current evaluated `features` as flat key-value map

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| **`return`**  | `object` |  | The current `features` object |

#### `featureflow.getUser()`
Returns the current `user`

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| **`return`**  | `user` |  | The current `user`  |


#### `featureflow.on(event, callback, [bindContext])`
Listen to events when the `featureflow` instance is updated

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `event*`  | `string` | **`Required`** | The name of the event to subscribe to. See `Events` section below for available events. |
| `callback*`  | `function` | **`Required`** | The function to call when the event is emitted.  |
| `bindContext`  | `any` | `undefined` | The context to bind the event callback to.  |


#### `featureflow.off(event, [callback])`
Listen to events when the `featureflow` instance is updated

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `event*`  | `string` | **`Required`** | The name of the event to unsubscribe from. |
| `callback`  | `function` | **`Required`** | The callback used when binding the object  |


#### `featureflow.getAnonymousId()`
Returns the anonymous user id assigned for the user in localStorage.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| **`return`**  | `string` |  | The string of the anonymous user id in localStorage. |

#### `featureflow.hasReceivedInitialResponse()`
Returns true if an initial response has been returned from the server, regardless of the status code.

| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| **`return`**  | `boolean` | false | `true` if the initial request to featureflow has completed  |


#### `featureflow.resetAnonymousId()`
Resets the anonymous user id for the user stored in localStorage. This will not re-evaluate the features, you must still call `updateUser()` to evaluate the latest features variants.


| Params | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| **`return`**  | `string` |  | The string of the **new** anonymous user id. |

#### Object Types
#### `user`
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `id` | `string` | `'anonymous:**********'` | Uniquely identifies the current user. Also used to calculate split variants. If not provided a random string prefixed with `'anonymous:'` will be used. This will set a cookie that can be used to link the anonymous user with your server's Featureflow SDK. |
| `attributes` | `object` | `undefined` | Flat key-value object containing extra meta about the current user. Used to serve different features for specifically targeted attributes.

#### `config`
| Property | Type | Default | Description |
|---------------|----------|--------------|----------------------------------------------------------------|
| `streaming` | `boolean` | `false` | Set to `true` when calling `Featureflow.init(..., ..., config)` to listen for realtime updates via SSE |
| `useCookies` | `boolean` | `true` | Set to `false` if you do not want to use cookies (you will have to pass the result of `featureflow.getAnonymousId()` to any future requests if you wish for the server to match the client anonymous key)  |
| `defaultFeatures` | `object` | `undefined` | A flat key-value object representing the default variants a feature should be set to if there is an interrupted connection and no cached value.  <br/> <br/> *e.g. if you set `config.defaultFeatures` to `{'my-feature': 'on'}`, `featureflow.evaluate('my-feature').isOn()` will return `true` when there is an interrupted connection to Featureflow and no locally cached feature features.*|
| `offline` | `boolean` | `false` | Set to `true` to run in offline mode, this is for testing purposes. Featureflow will not attempt and calls and will use the defaultFeatures values only  |

#### Events
#### `Featureflow.events.LOADED_FROM_CACHE`
Fired when features have been loaded from localstorage. 
Triggered by both `Featureflow.init(...)` and `featureflow.updateUser`.

Callback is fired with one parameter with the value of all evaluated `features`.

#### `Featureflow.events.INIT`
Fired when features have been evaluated and loaded. 
Triggered by both `Featureflow.init(...)` and `featureflow.updateUser`.

Callback is fired with one parameter with the value of all evaluated `features`.

#### `Featureflow.events.LOADED` 
**Deprecated:** Use `Featureflow.events.INIT` instead.

#### `Featureflow.events.UPDATED_FEATURE`
Only available when streaming is enabled.
Fired when a feature has been changed. 

Callback is fired with one parameter with the value of only the updated `features` returned by the stream. In the majority of cases, this object will only contain one property.

#### `Featureflow.events.ERROR`
Fired when an error has occurred evaluating the feature features for the given user.

Callback is fired with one parameter with the error message.


## Roadmap
- [x] Write documentation
- [x] Release to npm
- [x] Release to bower
- [x] Automate release to bower on `npm prepublish`
- [ ] Automate release script to cdn on `npm prepublish`

## License

Apache-2.0

[npm-url]: https://nodei.co/npm/featureflow-client
[npm-img]: https://nodei.co/npm/featureflow-client.png

[dependency-url]: https://www.featureflow.io
[dependency-img]: https://www.featureflow.io/wp-content/uploads/2016/12/featureflow-web.png
