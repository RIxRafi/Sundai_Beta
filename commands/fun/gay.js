const Discord = require('discord.js');



module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('gay')
        .setDescription('U use this cmd means u gay'),
    async execute(interaction) {
        await interaction.reply(`You r a gay`);
    },
};