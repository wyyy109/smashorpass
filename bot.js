const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    var heartCount = 0;
    var skullCount = 0;

    if(message.content.toLowerCase().startsWith('smash or pass')) {
      var toSmashTemp = message.content.slice(13);
      var toSmash;
      if (toSmashTemp.charAt(0) === ":"){
        toSmash = toSmashTemp.slice(1).trim();
      }
      else {
       toSmash = toSmashTemp.trim();
      }

      if (toSmash.length > 0){
      message.channel.send(`**${toSmash}**: smash or pass? \nSelect :heart: to smash, :skull: to pass.`)
      .then(msg => {
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
                message.channel.send("SMASH");
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
      else {
      message.channel.send("Smash or pass? \nSelect :heart: to smash, :skull: to pass.")
      .then(msg => {
        msg.react(`❤️`).then(() => msg.react('💀'));
          const filter = (reaction, user) => {
            return [`❤️`, '💀'].includes(reaction.emoji.name);
            };

            const collector2 = msg.createReactionCollector(filter, {time: 10000});
            collector2.on('collect', (reaction, reactionCollector) => {
              if (reaction.emoji.name === `❤️`) {
                heartCount+=1
              } else if (reaction.emoji.name === `💀`) {
                skullCount+=1
                }
            });
            collector2.on('end', (reaction, reactionCollector) => {
              if (heartCount > skullCount){
                message.channel.send("SMASH");
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
      
    }
})

bot.login(process.env.BOT_TOKEN);
