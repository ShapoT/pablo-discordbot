const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modo")
    .setDescription("Pour candidater en tant que modérateur."),

  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("modo-modal")
      .setTitle("Candidature modérateur");

    const nameInput = new TextInputBuilder()
      .setCustomId("nameInput")
      .setLabel("Entrez votre prénom")
      .setPlaceholder("Prénom")
      .setStyle(TextInputStyle.Short);

    const prezInput = new TextInputBuilder()
      .setCustomId("prezInput")
      .setLabel("Présentez vous")
      .setPlaceholder(
        "Âge, passions, pourquoi vous voulez devenir modérateur, etc...")
      .setStyle(TextInputStyle.Paragraph);

    const motivInput = new TextInputBuilder()
      .setCustomId("motivInput")
      .setLabel("Montrez-nous votre motivation")
      .setPlaceholder(
        "Pourquoi voulez-vous devenir modérateur ? Qu'allez-vous apporter à la communauté ?")
      .setStyle(TextInputStyle.Paragraph);

    const dayInput = new TextInputBuilder()
      .setCustomId("dayInput")
      .setLabel("Vos disponibilités")
      .setPlaceholder(
        "Précisez vos disponibilités (jours et heures)")
      .setStyle(TextInputStyle.Short);

    const firstActionRowBuilder = new ActionRowBuilder().addComponents(
      nameInput
    );
    const secondActionRowBuilder = new ActionRowBuilder().addComponents(
      prezInput
    );
    const thirdActionRowBuilder = new ActionRowBuilder().addComponents(
      motivInput
    );
    const fourthActionRowBuilder = new ActionRowBuilder().addComponents(
      dayInput
    );

    modal.addComponents(
      firstActionRowBuilder,
      secondActionRowBuilder,
      thirdActionRowBuilder,
      fourthActionRowBuilder
    );

    await interaction.showModal(modal);
  },
};
