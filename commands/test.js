let test = {
    name: "test",
    desc: "Used only to test bot in draft mode, when not making a new command",
    draft: true, // Should always be true, I
    callback: function (message) {
        message.channel.send("Test working");
    }
};

module.exports = test;