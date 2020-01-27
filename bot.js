const Discord = require('discord.js');
const bot = new Discord.Client();

const filter = (reaction, user) => {
    return ["❤️","💀"].includes(reaction.emoji.name) && user.id === message.author.id };

bot.on('message', function(message){
    if(message.content.toLowerCase().startsWith('smash or pass:'))
    {
    var heartCount = 0;
    var skullCount = 0;
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
                    const emojiList = collected;
                    for (var i = 0; i < emojiList.length; i++){
                        if (emojiList[i].emoji.name === "❤️")
                        {heartCount++;}
                        else if (emojiList[i].emoji.name === "💀")
                        {skullCount++;}
                    };
                
                    if (heartCount > skullCount){
                        message.channel.send("SMASH" + " " + heartCount + " " + skullCount);
                    }
                    else if (heartCount < skullCount){
                        message.channel.send("PASS"+ " " + heartCount + " " + skullCount);
                    }
                    else {
                        message.channel.send("TIE"+ " " + heartCount + " " + skullCount);
                    }
                    
                })
                )
    }
});

bot.login(process.env.BOT_TOKEN);
