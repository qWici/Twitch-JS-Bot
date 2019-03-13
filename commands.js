const config = require('config')
const client = require('./client.js')
const activeChannel = config.get('channel')
let state = null;

let clear = () => {
  if (!checkModeratorPermission()) return

  client.clear(config.get('channel'))
}

let timeOutUser = (args) => {
  if (!checkModeratorPermission()) return

  let targetUser = args[0]
  let timeOutDuration = args[1]

  client.timeout(activeChannel, targetUser, timeOutDuration)
  client.action(activeChannel, targetUser + ' now u have timeout mode! Duration: ' + timeOutDuration)
}

const callCommand = (command, messageInfo) => {
  state = messageInfo;

  switch (command.command) {
    case 'to':
      timeOutUser(command.args)
      break
    case 'clear':
      clear();
      break
    case 'fb':
      client.action(activeChannel, config.get('social.facebook'))
      break
    case 'twt':
      client.action(activeChannel, config.get('social.twitter'))
      break
    default:
      break
  }
}

const checkModeratorPermission = () => state.user.mod || state.user.username === activeChannel

module.exports = {
  call: (command, messageInfo) => {
    callCommand(command, messageInfo)
  }
}
