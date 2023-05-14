const {REST, Routes} = require('discord.js');
const {clientId, token} = require('./token.json');
const {gidTsukaima, gidBakebake, gidGFB} = require('./gids.json');
const rest = new REST().setToken(token);

// delete all tsukaima slash commands
rest.put(Routes.applicationGuildCommands(clientId, gidTsukaima, gidBakebake, gidGFB), {body: []})
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);
// for global commands
rest.put(Routes.applicationCommands(clientId), {body: []})
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);
