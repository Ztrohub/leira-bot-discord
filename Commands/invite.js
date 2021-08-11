const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "invite",
    description: "link invite Leira",

    async run(msg, args, bot){

        msg.reply('https://cutt.ly/Invite-Leira-Bot')

    }
});

