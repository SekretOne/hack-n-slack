require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.botToken).then(
    () => {
        console.log('successfully logged bot')
    },
    () => {
        console.error('failed to login bot')
    });


client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
    }
});