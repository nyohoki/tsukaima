const {SlashCommandBuilder} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('benis')
		.setDescription('fug'),
	async execute(interaction) {
		await interaction.reply('FUG :DDD');
	},
};
