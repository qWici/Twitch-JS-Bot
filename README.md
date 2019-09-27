[![Npm Version](https://img.shields.io/npm/v/tmi.js.svg?style=flat)](https://www.npmjs.org/package/tmi.js) [![Node Version](https://img.shields.io/node/v/tmi.js.svg?style=flat)](https://www.npmjs.org/package/tmi.js)

# Twitch JS Bot
Simple Twitch bot using tmi.js

## Version 2
With Jest, TMI.js, Nodemon, Config, Babel
[twitch-bot-boilerplate](https://github.com/qWici/twitch-bot-boilerplate)


## Install
1. Clone repository

2. Install modules `npm i` or `yarn install`

3. Copy example config

    ```bash
    cp config/default.example.json5 config/default.json5
    ```
    
4. Setup bot

`oauth_token` you can get [here by login via bot](https://twitchapps.com/tmi/)

```
bot: {
    username: "your-bots-username-here",
    oauth_token: "oauthtokenhere"
},
channel: "your-channel-here"
```

5. Run bot `node bot.js`

## Commands
### For admin
- `!to username duration` - Timeout username on channel for X seconds.
- `!clear` - Clear all messages on a channel.

### For users
- `!fb` - Send you Facebook link
- `!twt` - Send you Twitter link

## Get in touch
- Me on Medium [@KucherDev](https://medium.com/@KucherDev)
- Follow [@KucherDev on Twitter](https://twitter.com/KucherDev)
- Have a questions? [My telegram](https://t.me/qWici)
