const { exec } = require('child_process');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if(!msg.content.startsWith('//')) return;

  message = msg.content.substring(2);
  command = config.command

  switch(message) {
    case 'help':
      msg.channel.send('The following commands are available:\n\tvhstart - Start the server\n\tvhstop - Stop the server\n\tvhupdate - Check for updates and restart the server\n\tvhrestart - Restart the server')
      break;
    case 'vhstart':
      msg.channel.send("Starting Server...")
      exec(`${config.command} start`)
      msg.channel.send("Server Started!")
      break;
    case 'vhstop':
      msg.channel.send("Stoping Server...")
      exec(`${config.command} stop`)
      msg.channel.send("Server Stopped!")
      break;
    case 'vhrestart':
      msg.channel.send("Restarting Server...")
      exec(`${config.command} restart`)
      msg.channel.send("Server Restarted!")
      break;
    case 'vhupdate':
      msg.channel.send("Updating Server...")
      exec(`${config.command} update`)
      msg.channel.send("Server Updated!")
      break;
    default:
      // code block
  }
});

client.login(config.token);