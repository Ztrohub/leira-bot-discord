const { MessageEmbed } = require('discord.js');
const Command = require('../Structures/Command.js');

module.exports = new Command({
    name: "help",
    description: "Cara pakai Leira",

    async run(msg, args, bot){

        let botembed = new MessageEmbed()
            .setColor('#fc03e3')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=873840070849888276&permissions=259846039616&scope=bot')
            .setAuthor('Leira', 'https://cdn.discordapp.com/avatars/873840070849888276/5bc97adbb4f5f6607e0a09e620d43396.png', 'https://discord.com/api/oauth2/authorize?client_id=873840070849888276&permissions=259846039616&scope=bot')
            .setDescription(
                'Leira adalah bot multi-fungsi buatan mas Lukas. Commands di sini dibuat sesuka dia. Gosah bacot! Sapa adek pake \`hai leira\` Thx lopyu ❤️'
            )
            .addField('\u200b', '__**CARA PAKE LEIRA**__')
            .addField(
            `⚙️ SETTINGS`, `
                    \`${bot.prefix}prefix <simbol>\` - ganti prefix Leira
                    \`${bot.prefix}greeting\` - greeting member baru
                `)
            
            .addField(
                `ℹ️ INFO`, `
                    \`${bot.prefix}help\` - nunjukin pesan ini
                    \`${bot.prefix}server\` - info server ini
                    \`${bot.prefix}invite\` - link invite Leira
                    \`${bot.prefix}ping\` - ping ke Leira
                `)

            .addField(
                `💻 CODING`, `
                    \`${bot.prefix}git\` - alert repo git
                `)
            
            .addField(
                `🔨 TUKANG PUKUL`, `
                    \`${bot.prefix}tabok <@user> <alasan>\` - tandai muka orang, mute voice 10 detik
                `)

        
        msg.channel.send({embeds: [botembed]})

    }
});

