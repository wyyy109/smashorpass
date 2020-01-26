const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async function(message){
    if(message.content.toLowerCase().startsWith('smash or pass:'))
    {
        message.channel.send(
            "The vote begins! \n**Name**: smash or pass? Select :heart: to smash, :skull: to pass.")
            try {
                await message.react("❤️")
                await message.react("💀")
            }
            catch (error) {
                console.error('One of the emojis failed to react.');
            }
    }
});

bot.login(process.env.BOT_TOKEN);
