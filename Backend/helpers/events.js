var EventEmitter = require('events').EventEmitter
  , pubsub = new EventEmitter();
  pubsub.setMaxListeners(15);
exports.pubsub = pubsub;