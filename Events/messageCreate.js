const { MessageEmbed } = require('discord.js');
const Event = require('../Structures/Event.js');

module.exports = new Event("messageCreate", (bot, msg) => {
    if (msg.channel.type === "dm") return;

    if (msg.content.toLowerCase() === "hai leira"){
        if (msg.author.id === bot.owner_id) msg.reply("Hai bebebku ❤️")
        else msg.reply("Halo")
        return;
    }

    if (msg.content.toLowerCase().split(' ')[0] === "teng"){

        let botembed = new MessageEmbed()
            .setColor('RED')
            .setTitle('Coblos Gambar Banteng')
            .setImage('https://awsimages.detik.net.id/community/media/visual/2019/04/15/0ed3f774-4eb9-4275-b7f2-9b514f9676e9_43.jpeg?w=700&q=90')

        return msg.reply({embeds: [botembed]});
    }

    if (!msg.content.startsWith(bot.prefix) || msg.author.bot) return;

    const args = msg.content.slice(bot.prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    // ;say hello -> ; = prefix, say = cmd, hello = args

    const command = bot.commands.find(e => e.name === cmd);

    if (!command) return;

    if (command.permission){

        const permission = msg.member.permissions.has(command.permission);

        if (!permission) return msg.reply(`Anda bukan ${command.permission}`)
    }

    command.run(msg, args, bot);
});