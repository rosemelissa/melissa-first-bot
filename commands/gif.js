import fetch from "node-fetch";

export async function gif(msg, tokens) {
    let keywords = 'BTS';
    if (tokens.length > 0) {
        keywords = tokens.join(' ');
    }
    let url = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&client_key=my_test_app&limit=999`;
    let response = await fetch(url);
    let json = await response.json();
    let index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
    //console.log(json);
}