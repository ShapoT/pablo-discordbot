const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Retourne la latence du bot"),
  async execute(interaction, client) {
    await interaction.reply({
      content: `Mon temps de latence est de **__${client.ws.ping} ms__**.`,
      ephemeral: true,
    });
  },
};
