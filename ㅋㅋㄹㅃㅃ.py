  
import discord
import os



client = discord.Client()


@client.event:
async def on_ready():
	print(client.user.id)
	print("ready")


@client.event
async def on_message(message):
	if message.content.startsmwith("안녕"):
		await message.channel.send("하지 못하겠어")





access_token = os.environ["BOT_TOKEN"]                         
client.run("access_token")