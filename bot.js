// Follow documentation and add in your own twists to build your own simple bot!
// const eris = require('eris');
// const DiscordJS = require('discord.js')
// const dotenv = require('dotenv') 

import DiscordJS from "discord.js"

/////////////////////////////
//  main branch embed color
// var embedColor = [255, 24, 1]
//  dev-rakib embed color
//  embedColor = [0, 247, 255]
//////////////////////////////

// import fetch from "node-fetch"
import dotenv from 'dotenv'


const client = new DiscordJS.Client(
    {
        intents: [
            DiscordJS.IntentsBitField.Flags.MessageContent,
            DiscordJS.IntentsBitField.Flags.Guilds,
            DiscordJS.IntentsBitField.Flags.GuildMessages
        ]
    }
)
// var fs = require('fs');

// // Read's secret file token content (ignored in .gitignore file) into var 'my_token'
// const buffer = fs.readFileSync("secret.txt");

// const my_token = buffer.toString();
dotenv.config()

// dotenv.config()

// console.log(my_token);

// Client instance using bot token.
// Replace my-token with your unique bot token!
// const bot = new eris.Client(my_token);

// Sends message to console when the bot is ready and connected
client.on('ready', () => {
    console.log('Connected and ready.');
});

// Every time a message is sent anywhere the bot is present,
// this event will fire and we will check if the bot was mentioned.
// bot.on('messageCreate', async (msg) => {
//    const botWasMentioned = msg.mentions.find(
//        mentionedUser => mentionedUser.id === bot.user.id,
//    );

//    // If the bot is mentioned, it will reply with 'I can hear you!'.
//    if (botWasMentioned) {
//        try {
//            await msg.channel.createMessage('I can hear you!');
//        } catch (err) {
//            // Sending messages can sometimes fail, this piece of
//            // code helps us know if it did
//            console.warn('Failed to respond to mention.');
//            console.warn(err);
//        }
//    }
// });

client.on('messageCreate', async (message) => {
    if (message.channel.id == '732403869484711947') {
        // alam
        if (message.author.id == '230059296430227467') {
            var randomNum = Math.round(Math.random()*3)
            if (randomNum == 0) {

                message.reply({
                    content: "https://cdn.discordapp.com/attachments/915120306195140629/1027433801112096769/unknown.png"
                })
            }
            else if (randomNum == 1){
                message.reply({
                    content: "https://imgur.com/ylmvSm2"
                })
            }
            else {
                message.reply({
                    content: "https://imgur.com/8SL84jm"
                })
            }
            

        }
        // ankan
        if (message.author.id == '634175426121564176') {

            message.reply({
                content: "https://imgur.com/24vQvSN"
            })
        }
        // kazi
        if (message.author.id == '194230808440078337') {
            var randomNum = Math.round(Math.random())
            if (randomNum == 0) {
                message.reply({
                    content: "https://imgur.com/MABXrRq"
                })
            }
            else {
                message.reply({
                    content: "https://imgur.com/dWllhrc"
                })
            }

        }
        // sharnom
        if (message.author.id == '702194451489226804') {

            message.reply({
                content: "https://imgur.com/iDxNyNN"
            })
        }
        // jubayer
        if (message.author.id == '403699636612890624') {

            message.reply({
                content: "https://imgur.com/qW0UBIq"
            })
        }
        // rakib
        if (message.author.id == '235835251052642315') {

            message.reply({
                content: "https://media.discordapp.net/attachments/904541827321974785/952698407665942638/hehe.gif"
            })
        }
        // parthiv
        if (message.author.id == '533462713167511553') {

            message.reply({
                content: "https://imgur.com/U3eISCP"
            })
        }
        
    }


})



client.login(process.env.TOKEN)