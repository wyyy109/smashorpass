const Discord = require('discord.js');
const bot = new Discord.Client();

const filter = (reaction) => {
    return ["❤️","💀"].includes(reaction.emoji.name) 
    
};

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('smash or pass:'))
    {
        message.channel.send(
            "The vote begins! \n**Name**: smash or pass? Select :heart: to smash, :skull: to pass.")
                .then(async function (message){
                    try {
                    await message.react("❤️")
                    await message.react("💀")
                    }
                catch (error) {
                    console.error('One of the emojis failed to react.');
                    }
                })
                .then(message.awaitReactions(filter, {time: 5400})
                .then(collected => {
                    var heartCount = 0;
                    var skullCount = 0;
                    for (var i = 0; i < collected.length; i++){
                        if (collected[i] === "❤️")
                        {heartCount++;}
                        else if (collected[i] === "💀")
                        {skullCount++;}
                    };
                
                    if (heartCount > skullCount){
                        message.channel.send("SMASH");
                    }
                    else if (heartCount < skullCount){
                        message.channel.send("PASS");
                    }
                    else {
                        message.channel.send("TIE");
                    }
                    
                })
                )
    }
});

bot.login(process.env.BOT_TOKEN);
