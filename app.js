var tmi = require ('tmi.js');

var options = {
    options: {
      debug: true
    },
    connection: {
      cluster: "aws",
      reconnect: true
    },
    identity: {
        username: "your-bots-username-here",
        password: "oauthtokenhere"
    },
    channels: ["your-channel-here"]
};

var client = new tmi.client(options);
client.connect();

// User join to chat
client.on("join", function (channel, username, self) {
   client.action("your-channel-here", username + " , glad to see you!");
});

// Timeout function
function timeOut(message) {
    splitMSG = message.split(" ");
    timeoutUserName = splitMSG[1];
    timeoutDuration = splitMSG[2];
    client.timeout("your-channel-here", timeoutUserName, timeoutDuration);
    client.action('your-channel-here', timeoutUserName + ' now u have timeout mode! Duration: ' + timeoutDuration);
}

// Split command
function splitMessage(message) {
    if ((message.indexOf('!to')) !== -1){
        timeOut(message);
    } else if ((message.indexOf('!clear')) !== -1){
        client.clear("your-channel-here");
    }

}

// Commands
client.on('chat', function (channel, username, message, self) {

    if(username.username === "your-channel-here"){
        // Admin commands
        splitMessage(message);
    } else {
        // Users commands
        switch (message) {
            case "!fb":
                client.action('your-channel-here', 'your-fb-link-here');
                break;
            case "!twt":
                client.action('your-channel-here', 'your-twitter-link-here');
                break;
            default:
        }
    }
});
