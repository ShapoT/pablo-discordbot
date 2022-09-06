const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "suggestion-modal",
    description: "Pour suggérer une idée.",
  },

  async execute(interaction, client) {
    await interaction.reply({
      content: "Votre suggestion a été envoyée !",
      ephemeral: true,
    });
    const suggestionLogEmbed = new EmbedBuilder()
      .setColor(0x2ecc71)
      .addFields({
        name: "Suggestion",
        value: "**" + "<@"+interaction.user.id +">"+ "** a émis une suggestion :",
      })
      .setTimestamp()
      .setFooter({ text: "Log system of PabloCoding" });
    const channelLog = client.channels.cache.get("1016813862135271425");
    await channelLog.send({ embeds: [suggestionLogEmbed] });

    const suggestionEmbed = new EmbedBuilder()
      .setColor(0x2ecc71)
      .addFields({
        name: "Suggestion",
        value: "**" + "<@"+interaction.user.id +">"+ "** a émis une suggestion",
      })
      .addFields({
        name: "Suggestion",
        value: interaction.fields.getTextInputValue("ideaInput"),
      })
      .setTimestamp()
      .setFooter({ text: "Log system of PabloCoding" });
    const channel = client.channels.cache.get("1015331859183444119");
    await channel.send({ embeds: [suggestionEmbed] }).then((msg) => {
      msg.react("✅")
      msg.react("❌")
    });
    const thread = await channel.threads.create({
        name: "Suggestion de " + interaction.user.username,
        autoArchiveDuration: 60,
    });

  },
};
