const {
    SlashCommandBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("review")
      .setDescription("Pour soumettre votre projet à l'analyse du Discord."),
  
    async execute(interaction, client) {
      const modal = new ModalBuilder()
        .setCustomId("review-modal")
        .setTitle("Code review");
  
      const linkInput = new TextInputBuilder()
        .setCustomId("linkInput")
        .setLabel("Entrez le lien du repository GitHub de votre projet")
        .setPlaceholder("https://github.com/Johndoe/MyProject")
        .setStyle(TextInputStyle.Paragraph);
    
      const firstActionRowBuilder = new ActionRowBuilder().addComponents(
        linkInput
      );
  
      modal.addComponents(
        firstActionRowBuilder,
      );
  
      await interaction.showModal(modal);
    },
  };  