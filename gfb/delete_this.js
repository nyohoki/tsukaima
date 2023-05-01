const {REST, Routes} = require('discord.js');
const {clientId, token} = require('../token.json');
const {guildId} = require('./gid.json');
const rest = new REST().setToken(token);

// delete all tsukaima slash commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), {body: []})
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);
// for global commands
rest.put(Routes.applicationCommands(clientId), {body: []})
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
