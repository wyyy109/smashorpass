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
    if(message.content == 'f')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
});

bot.on('message', function(message){
    if(message.content == 'F')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
});

bot.on('message', function(message){
    if(message.content == '!gay')
    {
        message.channel.send({files: ["https://i.imgur.com/MOLAAtG.png"]});
    }
});

bot.on('message', function(message){
    if(message.content == '!ocelot')
    {
        message.channel.send({files: ["https://i.imgur.com/W8x06md.gif"]});
    }
});

bot.login(process.env.BOT_TOKEN);
