const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "ping",
    description: "NGEPING",

    async run(msg, args, bot){

        msg.reply(`Ping: ${bot.ws.ping} ms.`)

    }
});

