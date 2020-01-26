const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('smash or pass:'))
    {
        message.channel.send(
            "The vote begins! /n**Name**: smash or pass? Select :heart: to smash, :skull: to pass.")
            .then(function (message){
                message.react(❤️)
                message.react(💀)
            }
            )
    }
});

bot.login(process.env.BOT_TOKEN);
