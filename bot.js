const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', message => {
    if(message.content.toLowerCase().startsWith('smash or pass:'))
    {
        message.channel.send(
            "The vote begins! \n**Name**: smash or pass? Select :heart: to smash, :skull: to pass.")
            message.react('❤️')
            .then((message) => message.react('💀'));
            
            const filter = (reaction, user) => {
			return ['❤️', '💀'].includes(reaction.emoji.name) && user.id === message.author.id;
		};
		
		var heartCount = 0;
		var skullCount = 0;
		
		message.awaitReactions(filter, {time: 5400})
		.then(collected => {
		    for (var i = 0; i < collected.length; i++){
                        if (collected[i].emoji.name === "❤️")
                        {heartCount++;}
                        else if (collected[i].emoji.name === "💀")
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
