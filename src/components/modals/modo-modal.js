const { EmbedBuilder, messageLink } = require("discord.js");

module.exports = {
  data: {
    name: "modo-modal",
    description: "Pour candidater en tant que modérateur.",
  },

  async execute(interaction, client) {
    await interaction.reply({
      content: "Votre candidature a été soumise !",
      ephemeral: true,
    });
    const modoEmbed = new EmbedBuilder()
      .setColor(0x2ecc71)
      .addFields({
        name: "Candidature modérateur",
        value: "**" + "<@"+interaction.user.id +">"+ "** a soumis sa candidature :",
      })
      .addFields({
        name: "Prénom",
        value: interaction.fields.getTextInputValue("nameInput"),
      })
      .addFields({
        name: "Présentation",
        value: interaction.fields.getTextInputValue("prezInput"),
      })
      .addFields({
        name: "Motivation",
        value: interaction.fields.getTextInputValue("motivInput"),
      })
      .addFields({
        name: "Disponibilités",
        value: interaction.fields.getTextInputValue("dayInput"),
      })
      .setTimestamp()
      .setFooter({ text: "Log system of PabloCoding" });
    client.channels.cache
      .get("1010633613047500960")
      .send({ embeds: [modoEmbed] });
    
    modoEmbed.react("✅")
      .react("❌");
  },
};
