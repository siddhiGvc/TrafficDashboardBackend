var EventEmitter = require('events').EventEmitter
  , pubsub = new EventEmitter();
  pubsub.setMaxListeners(100);
exports.pubsub = pubsub;