// Follow documentation and add in your own twists to build your own simple bot!
const eris = require('eris');

var fs = require('fs');

// Read's secret file token content (ignored in .gitignore file) into var 'my_token'
const buffer = fs.readFileSync("secret.txt");

const my_token = buffer.toString();

// console.log(my_token);

// Client instance using bot token.
// Replace my-token with your unique bot token!
const bot = new eris.Client(my_token);

// Sends message to console when the bot is ready and connected
bot.on('ready', () => {
   console.log('Connected and ready.');
});

// Every time a message is sent anywhere the bot is present,
// this event will fire and we will check if the bot was mentioned.
bot.on('messageCreate', async (msg) => {
   const botWasMentioned = msg.mentions.find(
       mentionedUser => mentionedUser.id === bot.user.id,
   );

   // If the bot is mentioned, it will reply with 'I can hear you!'.
   if (botWasMentioned) {
       try {
           await msg.channel.createMessage('I can hear you!');
       } catch (err) {
           // Sending messages can sometimes fail, this piece of
           // code helps us know if it did
           console.warn('Failed to respond to mention.');
           console.warn(err);
       }
   }
});

// Sends error message to console
bot.on('error', err => {
   console.warn(err);
});

bot.connect();