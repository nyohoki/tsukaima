const {Client, Collection, GatewayIntentBits} = require('discord.js');
const client = new Client({intents: 32767});
client.commands = new Collection();
client.on("messageCreate", (message) => {
  if (message.content.startsWith("slut")) {
    message.react("😄");
  }
})
