const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content == '!salute')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
    else if(message.content == 'o7')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
    else if(message.content == 'O7')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
    else if(message.content == 'f')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
    else if(message.content == 'F')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
    else if(message.content == '!gay')
    {
        message.channel.send({files: ["https://i.imgur.com/MOLAAtG.png"]});
    }
    else if(message.content == '!ocelot')
    {
        message.channel.send({files: ["https://i.imgur.com/W8x06md.gif"]});
    }
    else if(message.content == '!balloon')
    {
        message.channel.send({files: ["https://i.imgur.com/j3t3Sgv.gif"]});
    }
});

bot.login(process.env.BOT_TOKEN);
