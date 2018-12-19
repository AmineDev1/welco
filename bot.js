const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` United Gaming ♥  `,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '524933542174654480').setName("W");
client.channels.find('id', '524933542174654480').setName("We");
client.channels.find('id', '524933542174654480').setName("Wel");
client.channels.find('id', '524933542174654480').setName("Welc");
client.channels.find('id', '524933542174654480').setName("Welco");
client.channels.find('id', '524933542174654480').setName("Welcom");
client.channels.find('id', '524933542174654480').setName("Welcome");
client.channels.find('id', '524933542174654480').setName("Welcome T");
client.channels.find('id', '524933542174654480').setName("Welcome To");
client.channels.find('id', '524933542174654480').setName("Welcome To ,");
client.channels.find('id', '524933542174654480').setName("Welcome To ,,");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, U");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, Un");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, Uni");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, Unit");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, Unite");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United G");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United Ga");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United Gam");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United Gami");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United Gamin");
client.channels.find('id', '524933542174654480').setName("Welcome To ,, United Gaming");
  }, 3000);
});

client.login(process.env.BOT_TOKEN);
