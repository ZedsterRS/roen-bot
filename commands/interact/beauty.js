const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "beauty",
  description: "Mensaje para neir",
  options: [],
  run: (client, message, prefix, args) => {
    const embed = new EmbedBuilder()
      .setTitle("Neir es bellisima")
      .setDescription("❤️ úwù")
      .setColor("Blue")
      .setImage("https://media.tenor.com/U45Q8YaJzBUAAAAC/moti-hearts.gif")
    message.reply({ embeds: [embed] });
  }
};