const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    var heartCount = 0;
    var skullCount = 0;

    if(message.content.toLowerCase().startsWith('!vote')) {
        message.channel.send('The vote begins! Do we love it or hate it?').then(msg => {
            msg.react(`❤️`).then(() => msg.react('💀'));
            const filter = (reaction, user) => {
                return [`❤️`, '💀'].includes(reaction.emoji.name);
            };

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
                        message.channel.send("We love it!");
                    }
                    else if (heartCount < skullCount){
                        message.channel.send("We hate it.");
                    }
                    else {
                        message.channel.send("We're neutral about it.");
                    }
            });

        })
    }
})

bot.login(process.env.BOT_TOKEN);
