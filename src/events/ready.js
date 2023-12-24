const { Events, ActivityType } = require('discord.js');

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    console.log(`Ready! ${client.user.tag} is online now.`);

    client.user.setActivity({
      name: '/help - By @CuB3y0nd',
      type: ActivityType.Custom,
    });
  },
};
