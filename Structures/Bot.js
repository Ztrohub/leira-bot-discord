const {Client, Intents, Collection} = require("discord.js");

const Command = require("./Command.js");

const fs = require('fs');

const Event = require('./Event.js');

const {
    prefix,
    owner_id,
} = require("../config.json");

class Bot extends Client {
    constructor() {
        super({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

        /**
         * @type {Collection<string, Command}
         */
        this.commands = new Collection();
        this.prefix = prefix;
        this.owner_id = owner_id;
    }

    start(TOKEN) {

        fs.readdirSync('./Commands').filter(file => file.endsWith('.js')).forEach(file => {
            /**
            * @type {Command}
            */
            const command = require(`../Commands/${file}`);
            this.commands.set(command.name, command);
        });

        fs.readdirSync("./Events").filter(file => file.endsWith('.js')).forEach(file => {
            /**
             * @type {Event}
             */
            const event = require(`../Events/${file}`);
            this.on(event.event, event.run.bind(null, this));
        });

        try {
            this.login(TOKEN);
        } catch(err) {
            console.error(err);
        }
    }

}

module.exports = Bot;