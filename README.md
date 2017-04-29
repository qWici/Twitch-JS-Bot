[![Npm Version](https://img.shields.io/npm/v/tmi.js.svg?style=flat)](https://www.npmjs.org/package/tmi.js) [![Node Version](https://img.shields.io/node/v/tmi.js.svg?style=flat)](https://www.npmjs.org/package/tmi.js)

# Twitch JS Bot
Simple Twitch bot using tmi.js

## Install
1. Clone repository
2. Install modules `npm i`
3. Setting up bot in `app.js`
```
identity: {
    username: "your-bots-username-here",
    password: "oauthtokenhere"
},
channels: ["your-channel-here"]
```
4. Run bot `node app.js`

## Commands
### For admin
- `!to username duration` - Timeout username on channel for X seconds.
- `!clear` - Clear all messages on a channel.

### For users
- `!fb` - Send you Facebook link
- `!twt` - Send you Twitter link

## Community

- Follow [@KucherDev on Twitter](https://twitter.com/KucherDev).
- Have a questions? [My telgram](https://t.me/qWici).