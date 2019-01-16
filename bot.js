const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content == '!salute')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
});

bot.on('message', function(message){
    if(message.content == 'o7')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
});

bot.on('message', function(message){
    if(message.content == '!balloon')
    {
        message.channel.send({files: ["https://i.imgur.com/8AsNF6y.gif"]});
    }
});

bot.login(process.env.BOT_TOKEN);
