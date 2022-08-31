const { InteractionType } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const { commandName } = interaction;
      const { commands } = client;
      const command = commands.get(commandName);
      if (!command) return new Error(`Cette commande n'existe pas !`);
      try {
        await command.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Une erreur est survenue lors de l'exécution de la commande",
          ephemeral: true,
        });
      }
    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error("Ce bouton n'existe pas");
      try {
        await button.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Une erreur est survenue lors de l'exécution du bouton",
          ephemeral: true,
        });
      }
    } else if (interaction.isSelectMenu()) {
      const { selectMenus } = client;
      const { customId } = interaction;
      const menu = selectMenus.get(customId);
      if (!menu) return new Error("Ce menu n'existe pas");
      try {
        await menu.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Une erreur est survenue lors de l'exécution du menu",
          ephemeral: true,
        });
      }
    } else if (interaction.type == InteractionType.ModalSubmit) {
      const { modals } = client;
      const { customId } = interaction;
      const modal = modals.get(customId);
      if (!modal) return new Error("Ce formulaire n'existe pas");
      try {
        await modal.execute(interaction, client);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Une erreur est survenue lors de l'exécution du formulaire",
          ephemeral: true,
        });
      }
    }
  },
};
