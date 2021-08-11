const Event = require('../Structures/Event.js');

module.exports = new Event("ready", bot => {
    console.log(`${bot.user.username} is online!`)
    bot.user.setActivity("I Love You ❤️")
});