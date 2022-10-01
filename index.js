require('dotenv').config();
const { REST, Routes, Client, GatewayIntentBits, Collection} = require("discord.js");
const rest = new REST({ version: "10" }).setToken('TOKEN');
const fs = require("fs");
const path = require("path");
const client = new Client({ intents: [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.MessageContent
] });
const TOKEN = process.env.BOT_TOKEN;
client.commands = new Collection();

client.on('messageCreate', async (message) => {
  const prefix = process.env.PREFIX;

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command);
    if(cmd) {
        cmd.run(client, message, args, prefix);
    }
  }
)


const dirEvents = fs.readdirSync(path.join(__dirname, "events"));
const dirCommands = fs.readdirSync(path.join(__dirname, "commands"));

for (const fileEvent of dirEvents) {
    const event = require(path.join(__dirname, "events", fileEvent));
    client.on(event.name, (...args) => event.run(client, ...args));
};

for (const subFolder of dirCommands) {
    const filesCommands = fs.readdirSync(path.join(__dirname, "commands", subFolder));
    for (const fileCommand of filesCommands) {
      const command = require(path.join(__dirname, "commands", subFolder, fileCommand));
      console.log(`- ${command.name} cargado correctamente`);
      client.commands.set(command.name, command);
    }
};

client.login(TOKEN);