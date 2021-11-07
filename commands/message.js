const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "website",
    description: "Get our website",
    usage: "",
    Permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["web", "websites"],

    run: async (client, message) => {
        const embed = new MessageEmbed();
        embed.setColor(client.botconfig.EmbedColor);
        embed.setTitle(`Website dari ${client.user.username}`);
        embed.addFields(
            {
                name: `[Hit Me!!!](https://carakubeiya.unaux.com/)`,
                value: `https://cdn.discordapp.com/attachments/865743194414383134/906802671669903370/Screenshot_from_2021-11-07_14-07-35.png`,
            },
        );
    },
};