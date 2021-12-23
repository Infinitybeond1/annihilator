const { SlasherClient } = require("discord.js-slasher");
// import { SlasherClient } from 'discord.js-slasher';
const config = require('./config.json')
const token = config.token

const client = new SlasherClient({ useAuth: true });

client.on("ready", () => {
    console.log("Logged in as " + client.user.tag);
});

client.login(token);
