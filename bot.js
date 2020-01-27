const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('!vote'))
    {
    var heartCount = 0;
    var skullCount = 0;
        message.channel.send(
            //will later add way to change "Name" to fetched name from user message
            "The vote begins! Do we love it or hate it?")
                .then(async function (message){
                    try {
                    await message.react("❤️")
                    await message.react("💀")
                    }
                catch (error) {
                    console.error('One of the emojis failed to react.');
                    }
                })
        const filter = (reaction, user) => {
        return ["❤️","💀"].includes(reaction.emoji.name) && user.id === message.author.id };
                
                message.awaitReactions(filter, {time: 10000})
                .then(collected => {
                    for (var i = 0; i < collected.length; i++){
                        if (collected[i].emoji.name === "❤️")
                        {heartCount++;}
                        else if (collected[i].emoji.name === "💀")
                        {skullCount++;}
                    };
                
                    if (heartCount > skullCount){
                        message.channel.send("We love it!");
                    }
                    else if (heartCount < skullCount){
                        message.channel.send("We hate it.");
                    }
                    else {
                        message.channel.send("We're neutral about it.");
                    }
                    
                })
    }
});

bot.login(process.env.BOT_TOKEN);
