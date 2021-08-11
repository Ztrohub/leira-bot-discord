const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "tabok",
    description: "Tandai muka orang",

    async run(msg, args, bot){
        msg.member.roles
        let rUser = msg.guild.members.cache.find(user => user.id == msg.mentions.users.first())
        let uUser = msg.author;
        if (!rUser) msg.reply("User gak ketemu!");
        else {
            if (msg.mentions.users.first().bot) msg.channel.send("Bot Lives Matter #BLM ✊");
            else {
                let reason = args.join(" ").slice(22);
                if (!reason) msg.reply("Kasih alasan kenapa nabok dia!");
                else {
                    if (rUser.id === bot.owner_id){
                        msg.reply("Beraninya anda menabok paduka! Leira tabok balik!");
                        rUser = msg.guild.members.cache.find(user => user.id == msg.member.id);
                        uUser = msg.guild.members.cache.find(user => user.id == "873840070849888276");
                        reason = "Menabok paduka!";
                    } 
                    let reportEmbed = new MessageEmbed()
                    .setTitle("Tabok Online")
                    .setColor('#fc03e3')
                    .addField('Telah ditabok sejuta cinta 🥰', '<@'+ rUser + '> ID: ' + rUser)
                    .addField('Ditabok oleh', '<@'+uUser + '> ID: ' + uUser)
                    .addField('Alasan', '' + reason)
                    .addField('\u200b', '**Anda di mute 10 Detik**')

                    rUser.voice.setMute(true, reason);

                    setTimeout(() => {
                            rUser.voice.setMute(false);
                    }, 10000) 

                    msg.channel.send({embeds: [reportEmbed]})
                }
            }
        }
    }
});

