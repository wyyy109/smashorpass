const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', function(message){
    var heartCount = 0;
    var skullCount = 0;
    
    if (message.content.toLowerCase() == 'smash or pass'){
      message.channel.send("Will you smash or pass? Vote now! Results will be tallied in five minutes. \nSelect :heart: to smash, :skull: to pass.")
      .then(msg => {
        msg.react(`❤️`).then(() => msg.react('💀'));
          const filter = (reaction, user) => {
            return [`❤️`, '💀'].includes(reaction.emoji.name);
            };

            const collector2 = msg.createReactionCollector(filter, {time: 300000});
            collector2.on('collect', (reaction, reactionCollector) => {
              if (reaction.emoji.name === `❤️`) {
                heartCount+=1
              } else if (reaction.emoji.name === `💀`) {
                skullCount+=1
                }
            });
            collector2.on('end', (reaction, reactionCollector) => {
              if (heartCount > skullCount){
                message.channel.send("OH YEAH, totally smash!!! :partying_face: :smirk: :stuck_out_tongue_winking_eye:");
              }
              else if (heartCount < skullCount){
                message.channel.send("Sorry, but we're gonna have to pass on this one. Better luck next time.... :pensive:");
              }
              else {
                message.channel.send("Hmm... looks like a tie. Maybe try again? :thinking:");
              }
            });
        })    	
    }
    
    else if(message.content.toLowerCase().startsWith('smash or pass:')) {
      var toSmash = message.content.slice(13).trim();
        
      if (toSmash.length > 0){
      message.channel.send(`**${toSmash}**: smash or pass? Vote now! Results will be tallied in five minutes. \nSelect :heart: to smash, :skull: to pass.`)
      .then(msg => {
        msg.react(`❤️`).then(() => msg.react('💀'));
          const filter = (reaction, user) => {
            return [`❤️`, '💀'].includes(reaction.emoji.name);
            };

            const collector = msg.createReactionCollector(filter, {time: 300000});
            collector.on('collect', (reaction, reactionCollector) => {
              if (reaction.emoji.name === `❤️`) {
                heartCount+=1
              } else if (reaction.emoji.name === `💀`) {
                skullCount+=1
                }
            });
            collector.on('end', (reaction, reactionCollector) => {
              if (heartCount > skullCount){
                message.channel.send(`OH YEAH, smash ${toSmash}! :partying_face: :smirk: :stuck_out_tongue_winking_eye:`);
              }
              else if (heartCount < skullCount){
                message.channel.send(`Sorry, but we're gonna have to pass on ${toSmash}. :pensive:`);
              }
              else {
                message.channel.send(`Hmm... looks like a tie. Inconclusive whether to smash or pass ${toSmash}. :thinking:`);
              }
            });
        })
      }
      else {
      message.channel.send("Will you smash or pass? Vote now! Results will be tallied in five minutes. \nSelect :heart: to smash, :skull: to pass.")
      .then(msg => {
        msg.react(`❤️`).then(() => msg.react('💀'));
          const filter = (reaction, user) => {
            return [`❤️`, '💀'].includes(reaction.emoji.name);
            };

            const collector2 = msg.createReactionCollector(filter, {time: 300000});
            collector2.on('collect', (reaction, reactionCollector) => {
              if (reaction.emoji.name === `❤️`) {
                heartCount+=1
              } else if (reaction.emoji.name === `💀`) {
                skullCount+=1
                }
            });
            collector2.on('end', (reaction, reactionCollector) => {
              if (heartCount > skullCount){
                message.channel.send("OH YEAH, totally smash!!! :partying_face: :smirk: :stuck_out_tongue_winking_eye:");
              }
              else if (heartCount < skullCount){
                message.channel.send("Sorry, but we're gonna have to pass on this one. Better luck next time.... :pensive:");
              }
              else {
                message.channel.send("Hmm... looks like a tie. Maybe try again? :thinking:");
              }
            });
        })
      }
      
    }
})

bot.login(process.env.BOT_TOKEN);
