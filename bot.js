const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
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
		
	    	const filter = (reaction, user) => {
			return ['❤️', '💀'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
	    
		var heartCount = 0;
		var skullCount = 0;
		
		message.awaitReactions(filter, {time: 5400})
		.then(collected => {
		    for (var i = 0; i < collected.length; i++){
			var currentEmoji = collected[i];
                        if (currentEmoji.emoji.name === "❤️")
                        {heartCount++;}
                        else if (currentEmoji.emoji.name === "💀")
                        {skullCount++;}
                    }
            if (heartCount > skullCount){
                message.channel.send("SMASH" + " " + heartCount + " " + skullCount);
            }
            else if (heartCount < skullCount){
                message.channel.send("PASS"+ " " + heartCount + " " + skullCount);
            }
            else {
                message.channel.send("TIE"+ " " + heartCount + " " + skullCount);
            }
		}
		);
    }
    
    
});

bot.login(process.env.BOT_TOKEN);
