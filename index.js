var createClient = require("flickr-client");
var client;

module.exports = setup;

function setup (options) {
  client = createClient(options);
  return following;
}

function following (userId, callback) {
  client('contacts.getPublicList', { user_id: userId }, function (error, response) {
    if (error) return callback(error);

    callback(undefined, response.contacts.contact);
  });
}
