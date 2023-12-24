const dotenv = require('dotenv');
const { Client, IntentsBitField } = require('discord.js');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');

const BOT_INTENTS = new IntentsBitField();

BOT_INTENTS.add(
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMembers,
  IntentsBitField.Flags.GuildMessages,
  IntentsBitField.Flags.MessageContent,
);

const client = new Client({ intents: BOT_INTENTS });

commandHandler(client);
eventHandler(client);

dotenv.config();

client.login(process.env.TOKEN);

