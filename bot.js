const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    var heartCount = 0;
    var skullCount = 0;

    if(message.content.toLowerCase().startsWith('smash or pass:')) {
        var toSmash = message.content.slice(14).trim();
        if toSmash === ""
        {
            message.channel.send(`The vote begins! \n**Smash or pass?** Select :heart: to smash, :skull: to pass.`).then(msg => {
            msg.react(`❤️`).then(() => msg.react('💀'));
            const filter = (reaction, user) => {
                return [`❤️`, '💀'].includes(reaction.emoji.name);
            };
        }
        else
        {
            message.channel.send(`The vote begins! \n**${toSmash}**: smash or pass? Select :heart: to smash, :skull: to pass.`).then(msg => {
            msg.react(`❤️`).then(() => msg.react('💀'));
            const filter = (reaction, user) => {
                return [`❤️`, '💀'].includes(reaction.emoji.name);
            };
        }

            const collector = msg.createReactionCollector(filter, {time: 10000});
            collector.on('collect', (reaction, reactionCollector) => {
                if (reaction.emoji.name === `❤️`) {
                    heartCount+=1
                } else if (reaction.emoji.name === `💀`) {
                    skullCount+=1
                }
            });
            collector.on('end', (reaction, reactionCollector) => {
                   if (heartCount > skullCount){
                        message.channel.send("SMASH!!!");
                    }
                    else if (heartCount < skullCount){
                        message.channel.send("Pass...");
                    }
                    else {
                        message.channel.send("Inconclusive.");
                    }
            });

        })
    }
})

bot.login(process.env.BOT_TOKEN);
