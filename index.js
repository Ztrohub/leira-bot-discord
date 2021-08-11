// RUN "nodemon -e js"
// TURN OFF = "heroku ps:scale worker=0"
// TURN ON = "heroku ps:scale worker=1"

console.clear();

require('dotenv').config()

const Bot = require('./Structures/Bot.js')

const bot = new Bot();

bot.start(process.env.TOKEN);