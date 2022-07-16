import { Client, Intents } from "discord.js";
import 'dotenv/config';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, , Intents.FLAGS.GUILD_MESSAGES] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
    client.channels.cache.get(process.env.GUILDID).send("Bot started! Send '!help' for more info!")
});

import {commandHandler} from "./commands.js";
client.on('messageCreate', commandHandler);

// Login to Discord with your client's token
client.login(process.env.BOTTOKEN);