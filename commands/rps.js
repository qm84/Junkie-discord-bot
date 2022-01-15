const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rps')
		.setDescription('Play rock paper scissors with bot.'),
	async execute(interaction) {
        
	},
};