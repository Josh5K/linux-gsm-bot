import { exec } from 'child_process';
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json')

try {
  const jsonString = fs.readFileSync('./customer.json')
  const config = JSON.parse(jsonString)
} catch(err) {
  console.log(err)
  return
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if(!msg.message.startsWith(';;')) return;

  message = msg.message.substring(2);

  switch(message) {
    case 'help':
      msg.channel.send('The following commands are available:\n\tvhstart - Start the server\n\tvhstop - Stop the server\n\tvhupdate - Check for updates and restart the server')
      break;
    case 'vhstart':
      msg.channel.send(exec('/home/vhserver/vhserver start'))
      break;
    case 'vhstop':
      msg.channel.send(exec('/home/vhserver/vhserver stop'))
      break;
    case 'vhupdate':
      msg.channel.send(exec('/home/vhserver/vhserver update'))
      break;
    default:
      // code block
  }
});

client.login(config.token);
