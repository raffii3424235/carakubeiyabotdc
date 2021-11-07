const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "website",
    description: "Get our website",
    usage: "",
    Permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["web", ""]
};