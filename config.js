let config = require('config');

module.exports = {
  options: {
    debug: config.get('options.debug')
  },
  connection: {
    cluster: config.get('connection.cluster'),
    reconnect: config.get('connection.reconnect')
  },
  identity: {
    username: config.get('bot.username'),
    password: config.get('bot.oauth_token')
  },
  channels: [config.get('channel')]
};
