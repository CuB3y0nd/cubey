const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const uuid = require('../../utils/minecraft/uuid');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('uuid')
    .setDescription('Get target player\'s uuid.')
    .addStringOption(option =>
      option.setName('name')
        .setDescription('Minecraft username')
        .setRequired(true),
    ),

  async execute(interaction) {
    const name = interaction.options.get('name').value;

    try {
      const UUID = await uuid(`${name}`);
      if (UUID !== null) {
        await interaction.deferReply();

        const embed = new EmbedBuilder()
          .setTitle(`${name}'s Minecraft UUID`)
          .setColor('#3585d0')
          .setDescription(`**UUID: **\`${UUID}\``)
          .setThumbnail(`https://visage.surgeplay.com/full/${UUID}`)
          .setFooter({
            text: 'By @CuB3y0nd',
            iconURL: 'https://i.imgur.com/vor9cEi.jpg',
          });

        await interaction.editReply({ embeds: [embed] });
      }
      else {
        console.error('Failed to retrieve UUID');
        await interaction.reply('Failed to retrieve UUID');
      }
    }
    catch (error) {
      console.error(`Error: ${error.message}`);
      await interaction.reply('An error occurred while processing your request.');
    }
  },
};