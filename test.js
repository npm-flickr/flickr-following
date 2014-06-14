require('with-env')();

var test = require("prova");
var following = require("./")({
  key: process.env.FLICKR_API_KEY
});

test('getting contacts', function (t) {
  following('98269877@N00', function (error, users) {
    debugger;
    t.plan(4);
    t.error(error);
    t.ok(users.length > 300);
    t.ok(users[0].nsid);
    t.ok(users[0].username);
  });
});
