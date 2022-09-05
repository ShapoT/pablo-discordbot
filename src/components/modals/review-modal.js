const { EmbedBuilder, messageLink } = require("discord.js");

module.exports = {
  data: {
    name: "review-modal",
    description: "Pour soumettre votre projet à l'analyse du Discord.",
  },

  async execute(interaction, client) {
    await interaction.reply({
      content: "Votre message a été envoyé !",
      ephemeral: true,
    });
    const reviewEmbed = new EmbedBuilder()
      .setColor(0x2ecc71)
      .addFields({
        name: "Code review",
        value: "**" + "<@"+interaction.user.id +">"+ "** souhaiterais un avis sur son projet :",
      })
      .addFields({
        name: "Lien du repository",
        value: interaction.fields.getTextInputValue("linkInput"),
      })
      .setTimestamp()
    client.channels.cache
      .get("970113913481986158")
      .send({ embeds: [reviewEmbed] });
  },
};
