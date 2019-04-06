let pong = {
    name: "pong",
    desc: "test val's performance",
    callback: function (message, bot) {
        let start = Date.now();

        message.channel.send("pong!")
            .then((newMessage) => {
                let end = Date.now();
                newMessage.edit("🏓, this message took a " +
                                "roundtrip of " + (end - start) + " ms, " +
                                "and has a heartbeat of " + bot.ping + "ms.");
            });
    }
};

module.exports = pong;