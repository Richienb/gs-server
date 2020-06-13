# gs-server [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/gs-server/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/gs-server)

A fast and minimal web framework for Googlescript.

## Install

Using [gs-require](https://github.com/Richienb/gs-require):

```js
const server = require("gs-server");
```

## Usage

```js
const server = require("gs-server");

server.get((_, response) => {
	return response.send("Hello World");
});
```

## API

### get(handler)

### post(handler)

Handle `get` and `post` events.

#### handler(_request_, response)

##### query

Type: `object`

The search parameters provided in the request.

##### userAgent

Type: `string`

The client's user agent.

##### data

**Only exists for post**

Type: `string`

The posted data.

##### mimeType

**Only exists for post**

Type: `string`

The mime type of the posted data.

#### handler(request, _response_)

##### send(data, mimeType?)

##### data

Type: `string`

The data to respond with.

##### mimeType

Type: `string`\
Default: `text/plain`

The mime type to respond with.

##### html(data, values?)

##### data

Type: `string`

The HTML data to send.

##### values

Type: `object`

To use HTML templating, specify the values here.

```js
const server = require("gs-server");

server.get((_, response) => {
	return response.html("<?= foo ?>", { foo: "Hello World" });
});
```

##### json(data)

##### data

Type: `object`

The JSON data to respond with.
