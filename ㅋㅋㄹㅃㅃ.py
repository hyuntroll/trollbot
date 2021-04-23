import discord
import os

client = discord.Cient()



@Client.event
async def on redy():
  prinnt(client.user.id)
  print(client.user.id)
  print("ready")
 
@client.event
async def on_message(message):
  if message.content.startsyith('안녕친구"):
      awit message.channel.send("gktpdy"):
                                

access_token = os.environ["BOT_TOKEN"]                         
client.run("access_token")
