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
    }
});
