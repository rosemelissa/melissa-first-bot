import {bts} from "./commands/bts.js";
import {gif} from "./commands/gif.js";
import {help} from "./commands/help.js";
import 'dotenv/config';

export const commands = {bts, gif, help};

export async function commandHandler(msg) {
    if (msg.channel.id == process.env.GUILDID) {
        let tokens = msg.content.split(' ');
        let handler = tokens.shift();
        if (handler.charAt(0) === '!') {
            handler = handler.substring(1);
            commands[handler](msg, tokens);
    }
    }
}