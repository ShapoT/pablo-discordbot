const {
  SlashCommandBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

const dataModals = [
  {
    id: "nameInput",
    label: "Entrez votre prénom",
    placeHolder: "Prénom",
    style: TextInputStyle.Short,
  },
  {
    id: "prezInput",
    label: "Présentez vous",
    placeHolder:
      "Âge, passions, pourquoi vous voulez devenir modérateur, etc...",
    style: TextInputStyle.Paragraph,
  },
  {
    id: "motivInput",
    label: "Montrez-nous votre motivation",
    placeHolder:
      "Pourquoi voulez-vous devenir modérateur ? Qu'allez-vous apporter à la communauté ?",
    style: TextInputStyle.Paragraph,
  },
  {
    id: "dayInput",
    label: "Vos disponibilités",
    placeHolder: "Précisez vos disponibilités (jours et heures)",
    style: TextInputStyle.Short,
  },
];

module.exports = {
  data: new SlashCommandBuilder()
    .setName("modo")
    .setDescription("Pour candidater en tant que modérateur."),

  async execute(interaction, client) {
    const modal = new ModalBuilder()
      .setCustomId("modo-modal")
      .setTitle("Candidature modérateur");

    for (let i = 0; i < dataModals.length; i++) {
      const inputType = new TextInputBuilder()
        .setCustomId(dataModals[i].id)
        .setLabel(dataModals[i].label)
        .setPlaceholder(dataModals[i].placeHolder)
        .setStyle(dataModals[i].style);

      const actionRowBuilder = new ActionRowBuilder().addComponents(inputType);
      modal.addComponents(actionRowBuilder);
    }
    await interaction.showModal(modal);
  },
};
