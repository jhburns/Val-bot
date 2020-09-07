function mapToObj(map){
    const obj = {}
    for (let [k,v] of map)
        obj[k] = v
    return obj
}

let mute = {
    name: "mute-all",
    alias: "ma",
    desc: "mutes everyone in your voice channel, only users with the 'among us' role can use this",
    callback: function (message, { bot }) {
        if (message.member.roles.find(role => role.name === "among us") === null) {
            message.channel.send("Sorry, you lack the 'among us' role and cannot use this command.\n" +
                "Ask an admin to give it to you in order to use this command.");
            return;
        }

        let voiceChannel = message.member.voiceChannel;
        if (voiceChannel === undefined) {
            message.channel.send("Please join a voice channel to use this command.");
            return;
        }

        let channelDetails = bot.channels.get(voiceChannel.id);
        for (const [memberID, member] of channelDetails.members) {
            if (memberID !== "235088799074484224" && memberID !== "473280648782675978") {
                member.setMute(true);
            }
        }
    }
};

module.exports = mute;