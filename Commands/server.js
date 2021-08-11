const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "server",
    description: "Info server ini",

    async run(msg, args, bot){

        let botembed = new MessageEmbed()
            .setColor('#fc03e3')
            .setTitle('SERVER INFO')
            .addFields(
            
                { name : 'Nama server :', value : ''+msg.guild.name},
                { name : 'Dibuat tanggal :', value : ''+msg.guild.createdAt},
                { name : 'Kamu gabung  tanggal:', value : ''+msg.member.joinedAt},
                { name : 'Total member :', value : ''+msg.guild.memberCount},
            )
        msg.channel.send({embeds: [botembed]})

    }
});

