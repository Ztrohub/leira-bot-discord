const {Message, Interaction, PermissionString} = require("discord.js");
const Bot = require("./Bot.js")

/**
 * 
 * @param {Message | Interaction} msg 
 * @param {string[]} args 
 * @param {Bot} bot 
 */

function RunFunction(msg, args, bot) {
    
}

class Command {
    /**
     * @typedef {{name: string, description: string, permission: PermissionString, run: RunFunction}} CommandOptions
     * @param {CommandOptions} options 
     */

    constructor(options) {
        this.name = options.name;
        this.description = options.description;
        this.permission = options.permission;
        this.run = options.run;
    }
}

module.exports = Command;