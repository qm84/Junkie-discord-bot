const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('test')
		.setDescription('Loads commands.'),
	async execute(interaction) {
		return interaction.reply('Bot is running.');
	},
};
