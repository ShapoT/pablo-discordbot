module.exports = {
  name: "guildMemberAdd",
  async execute(GuildMember) {
    if (!GuildMember.user.bot) {
      const channel = GuildMember.guild.channels.cache.get("1015333375411765388");
      channel.send(`> ๐ ยป Salut <@${GuildMember.user.id}> et bienvenue ร  toi sur le serveur de **PabloCoding** !\n > Je t'invite ร  lire le channel <#967715495493140511> pour que tu puisse t'amuser correctement sur le serveur ! ๐`);
    }
  },
};
