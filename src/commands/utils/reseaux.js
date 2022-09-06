const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("réseaux")
    .setDescription("Réseaux sociaux de Pablo"),
  async execute(interaction, client) {
    await interaction.reply({
      content: `
            Github  : https://github.com/PabloCodingg
            YouTube : https://www.youtube.com/c/PabloCoding
            Twitch  : https://www.twitch.tv/pablocoding
            Twitter : https://twitter.com/PabloCoding  
            `,
      ephemeral: true,
    });
  },
};
