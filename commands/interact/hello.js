module.exports = {
    name: "hello",
    description: "Saluda un usuario",
    options: [ 
      {
        type: 6,
        name: "usuario",
        description: "hola",
        required: true
      } 
   ],
    run: (client, message, prefix, args) => {
      message.reply({
        content: "...",
        fetchReply: true
      }).then((m) => {
        m.edit(`Hola ${usuario.username}  ${picture}`);
      });
      const usuario = "usuario";
      const picture = "https://tenor.com/0aU1.gif";
    }
};