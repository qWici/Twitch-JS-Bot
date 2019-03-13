const commands = require('./commands.js')

let commandResolver = (channel, user, message) => {
  const command = recognizeCommand(message);

  if (!command) return

  commands.call(command, { channel, user, message });
}

let recognizeCommand = (message) => {
  const regex = /\!(.*?)$/gm;
  const fullCommand = regex.exec(message);

  if (fullCommand) {
    const splittedCommand = fullCommand[1].split(' ')
    const command = splittedCommand[0];

    splittedCommand.shift() // remove command from array

    return {
      command: command,
      args: splittedCommand
    }
  }

  return false
}

module.exports = {
  resolve: (channel, user, message) => {
    commandResolver(channel, user, message)
  }
}
