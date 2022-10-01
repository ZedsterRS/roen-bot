module.exports = {
    name: "interactionCreate",
    run: (client, message) => {
      if (message.isCommand()) {
        const command = client.commands.get(message.commandName);
        if (!command) return;
        command.run(client, message);
      }
    }
}