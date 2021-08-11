const {ClientEvents} = require('discord.js');

const Bot = require('./Bot.js');

/**
 * @template {keyof ClientEvents} K
 * @param {Bot} bot 
 * @param  {ClientEvents[K]} eventArgs 
 */

function RunFunction(bot, ...eventArgs) {
    
}

/**
 * @template {keyof ClientEvents} K
 */
class Event {
    /**
     * 
     * @param {K} event 
     * @param {RunFunction<K>} runFunction 
     */

    constructor(event, runFunction){
        this.event = event;
        this.run = runFunction;

    }


}

module.exports = Event;