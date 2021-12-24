const { SlasherClient } = require("discord.js-slasher");
const colors = require("colors")
// import { SlasherClient } from 'discord.js-slasher';
const config = require('./config.json')
const token = config.token

const client = new SlasherClient({ useAuth: true });

client.on("ready", () => {
    const colors = require('colors/safe');

    console.log(colors.red("░█████╗░███╗░░██╗███╗░░██╗██╗██╗░░██╗██╗██╗░░░░░░█████╗░████████╗░█████╗░██████╗░"))
    console.log(colors.red("██╔══██╗████╗░██║████╗░██║██║██║░░██║██║██║░░░░░██╔══██╗╚══██╔══╝██╔══██╗██╔══██╗"))
    console.log(colors.red("███████║██╔██╗██║██╔██╗██║██║███████║██║██║░░░░░███████║░░░██║░░░██║░░██║██████╔╝"))
    console.log(colors.red("██╔══██║██║╚████║██║╚████║██║██╔══██║██║██║░░░░░██╔══██║░░░██║░░░██║░░██║██╔══██╗"))
    console.log(colors.red("██║░░██║██║░╚███║██║░╚███║██║██║░░██║██║███████╗██║░░██║░░░██║░░░╚█████╔╝██║░░██║"))
    console.log(colors.red("╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚══╝╚═╝╚═╝░░╚═╝╚═╝╚══════╝╚═╝░░╚═╝░░░╚═╝░░░░╚════╝░╚═╝░░╚═╝"))  
});

client.login(token);
