const {
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
  } = require("discord.js");
  
  const dataModals = [
    {
      id: "ideaInput",
      label: "Entrez votre suggestion",
      placeHolder: "Je voudrais que...",
      style: TextInputStyle.Paragraph,
    },
  ];
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("suggestion")
      .setDescription("Pour suggérer une idée."),
  
    async execute(interaction, client) {
      const modal = new ModalBuilder()
        .setCustomId("suggestion-modal")
        .setTitle("Suggérer une idée");
  
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
  