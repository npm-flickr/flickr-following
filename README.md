## flickr-following

List the people given user follows on Flickr

## Install

```bash
$ npm install flickr-following
```

## Usage

```js
var following = require('flickr-following')({
  key: 'api-key'
})

following('user-id', function (error, users) {
  users.length
  // => 400

  users[0]
  { "nsid": "49575362@N05", "username": "**mog**", "iconserver": "3770", "iconfarm": 4, "ignored": 0, "rev_ignored": 0 }
})
```

[flickr-client](http://github.com/npm-flickr/flickr-client) can be passed to avoid repeating auth options:

```js
var client = require('flickr-client')({
  key: 'api-key'
});

var following = require('flickr-following')(client)
```
