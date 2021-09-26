//  require necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//  create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// when the client is ready, run this code once
client.once('ready', () => {
    console.log('tsukaima is ready!');
});

// login to discord with your client's token
client.login(token);