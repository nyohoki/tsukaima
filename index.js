//  require necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

//  create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// when the client is ready, run this code once
client.once('ready', () => {
    console.log('tsukaima is ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

// login to discord with your client's token, this needs to be last
client.login(token);