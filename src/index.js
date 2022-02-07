process.env.NODE_ENV = process.env.NODE_ENV ?? 'development';
const { config } = require('dotenv-cra');
const { SapphireClient: Client } = require('@sapphire/framework');
config();
const client = new Client({
    defaultPrefix: '%',
    caseInsensitiveCommands: true,
    intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS']
});
client.login();
console.log(client.stores.get('commands'));