const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content == '!salute')
    {
        message.channel.send({files: ["https://i.imgur.com/jiaoi7A.gif"]});
    }
});

bot.login('NTM0MTQzNzYxNDg4MjgxNjEx.Dx19Cw.7BMRS4IbHvv2t-ajNh849UzKI-Q');