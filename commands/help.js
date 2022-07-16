import {commands} from "../commands.js";

export function help(msg, tokens) {
    let commandsArray = Object.keys(commands).join('\n');
    msg.channel.send(`Here are my commands:
${commandsArray}
Use '!' at the start of each command`);
}