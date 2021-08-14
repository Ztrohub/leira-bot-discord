// RUN "nodemon -e js"

console.clear();

require('dotenv').config()

const Bot = require('./Structures/Bot.js')

const bot = new Bot();

bot.start(process.env.TOKEN);