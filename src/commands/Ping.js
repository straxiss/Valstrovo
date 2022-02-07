const { Command } = require('@sapphire/framework');
module.exports = class UserCommand extends Command {

    constructor(context, options) {
        super(context, {
            ...options,
            name: 'ping',
            aliases: ['pong'],
            description: ''
        });
    }

    messageRun(msg) {
        msg.channel.send('Pong!');
    }

};