process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error);
  process.exit(1) // To exit with a 'failure' code
});

const Telegraf = require('telegraf')
const brain = require('brain.js')

const bot = new Telegraf('1427053400:AAE7aQ8KF7lQvHxC572N4tXDk6nUCBQBpfs')
const options = {
  hostname: 'api.telegram.org',
  port: 443,
  path: `/bot${config.telegram.botToken}/sendMessage`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};
var net = new brain.NeuralNetwork();
var botResponse = [
    //Greeting : 0
    ["Hello! Welcome!",
     "Hi",
     "Welcome!"],
    //Bye : 1
    ["Good Night!",
    "Have a good sleep!",
    "Sleep tight!"],
    // Purpose : 2
    ["I am here to coax you to sleep!",
    "I will stay with you until you fall asleep!",
    "I can make you happy and have a sweet dream!"],
    // Joke : 3
    ["Want to hear a construction joke? Oh never mind, I'm still working on that one.",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Talk is cheap? Have you ever talked to a lawyer?",
    "Why did the gym close down? It just didn't work out!",
    "What do you call a boomerang that doesn't come back? A stick!",
    "Why are ghosts such bad liars? Because they are easy to see through.",
    "Where do fish sleep? In the riverbed.",
    "What did one plate say to his friend? Tonight, dinner's on me!",
    "Why do French people eat snails? They don't like fast food!",
    "How do you make a milkshake? A: Put a cow on a rollercoaster.",
    "What type of bee can’t make up their mind? A: A maybe."],
    // Fun facts: 4
    ["If you feel like eating but are not sure if you’re really hungry, ask yourself if you’d like to have an apple. If the answer is ‘no’, you’re most likely bored rather than hungry. ",
    "Exercising before going to bed makes your muscles burn more calories during the night. ",	 
    "Crying releases excess stress hormones and is scientifically proven to ease mental strain. ",	 
    "A mid-day nap improves your memory and reduces the chances of developing heart diseases. ",	 
    "If you’re feeling anxious and stressed, eat a melon. Melons help relieve anxiety and stress, plus they boost your metabolism. ",	 
    "Start learning a new language or how to play an instrument. These actions help slow down the brain’s aging process. ",
    "You can ‘program’ your brain to be happy in a simple way: think of three things you’re grateful for every day. Do this for 21 days and you’ll notice the change. ",
    "Skipping a meal can cause you to gain weight. Your body thinks you’re going through a famine, which causes it to work in energy-saving mode and makes burning calories more difficult. ",
    "Listening to music regularly is said to reduce the chances of developing a brain tumor. ",
    "Drink two cups of cold water before a meal, as this boosts metabolism by up to 30%. ",	 
    "Running for half an hour a day will help you reduce 0.5kg (1 lb) of fat a week."
    ],
      
    // Music: 5
    [
      //Instrumental
      ["https://www.youtube.com/watch?v=q76bMs-NwRk",	 
      "https://www.youtube.com/watch?v=yIQd2Ya0Ziw",	 
      "https://www.youtube.com/watch?v=ubNfkpbxXUs",	 
      "https://www.youtube.com/watch?v=9QneqUhCVtU",	 
      "https://www.youtube.com/watch?v=ajABt8KCho8",	 
      "https://www.youtube.com/watch?v=HmH4W8JOifg",	 
      "https://www.youtube.com/watch?v=ru-O5L2uxho",	 
      "https://www.youtube.com/watch?v=-N9rb2QDqrw",	 
      "https://www.youtube.com/watch?v=CHFif_y2TyM",	 
      "https://www.youtube.com/watch?v=3sL0omwElxw",	 
      "https://www.youtube.com/watch?v=yPH2VnnOK9o",	 
      "https://www.youtube.com/watch?v=XoagfiWOuBE"],
      // Human
      [
        //Male
        ["https://www.youtube.com/watch?v=wmQ8s3dmo0E ",	 
        "https://www.youtube.com/watch?v=BtF85dQUMKg ",	 
        "https://www.youtube.com/watch?v=jO2viLEW-1A ",	 
        "https://www.youtube.com/watch?v=XYAghEq5Lfw ",	 
        "https://www.youtube.com/watch?v=Mw5mAozjC6M ",	 
        "https://www.youtube.com/watch?v=QEWHF3E9YJQ ",	 
        "https://www.youtube.com/watch?v=fvjpE_wFL5A ",	 
        "https://www.youtube.com/watch?v=fHeQemJJQII ",	 
        "https://www.youtube.com/watch?v=MPbUaIZAaeA ",	 
        "https://www.youtube.com/watch?v=oslCSRtn_hk ",	 
        "https://www.youtube.com/watch?v=JKPVRyg01gg ",	 
        "https://www.youtube.com/watch?v=zqKoXPHhmsM ",	
        "https://www.youtube.com/watch?v=cXZkjQSgoFw ",	 
        "https://www.youtube.com/watch?v=m78lJuzftcc ",	 
        "https://www.youtube.com/watch?v=HQ_mU73VhEQ ",	 
        "https://www.youtube.com/watch?v=GjcpFsBSw2Y "],
        //Female
        [ "https://www.youtube.com/watch?v=ZAfAud_M_mg ",	 
          "https://www.youtube.com/watch?v=DyDfgMOUjCI ",	 
          "https://www.youtube.com/watch?v=fdQgPu3iUYk ",	 
          "https://www.youtube.com/watch?v=Kg-mW8SyNVg ",	 
          "https://www.youtube.com/watch?v=RyoFapcT8o4 ",	 
          "https://www.youtube.com/watch?v=fdPP1aVU-jE ",	 
          "https://www.youtube.com/watch?v=EbJhct_HTu8 ",	 
          "https://www.youtube.com/watch?v=qLtQ18hE3wI ",	 
          "https://www.youtube.com/watch?v=SfRUaqRNaAU ",	 
          "https://www.youtube.com/watch?v=ioNng23DkIM ",	 
          "https://www.youtube.com/watch?v=vRXZj0DzXIA ",	 
          "https://www.youtube.com/watch?v=oygrmJFKYZY ",	 
          "https://www.youtube.com/watch?v=o5SQIECedTY ",	
          "https://www.youtube.com/watch?v=M7D-A1QgR1w ",	 
          "https://www.youtube.com/watch?v=gNpHuyP90Uo ",	 
          "https://www.youtube.com/watch?v=y-C5cM_0KVE "]
      ]
    ],
    // Video : 6
    [ 
      // Cartoon video
      ["https://www.youtube.com/watch?v=lAIGb1lfpBw",	 
      "https://www.youtube.com/watch?v=CUapPhdM7nc",	 
      "https://www.youtube.com/watch?v=IRPqU2VaffY",
      "https://www.youtube.com/watch?v=_6cOAcMrcQo",	 
      "https://www.youtube.com/watch?v=tHGIZ4rLbOY",	 
      "https://www.youtube.com/watch?v=uLUrYVs8AiA",	 
      "https://www.youtube.com/watch?v=rXMB5WSCVks",	 
      "https://www.youtube.com/watch?v=J2LBttJgCTk",	 
      "https://www.youtube.com/watch?v=SyPjwxHxbus",	
      "https://www.youtube.com/watch?v=M3oYKqFUqYY",	 
      "https://www.youtube.com/watch?v=uh9ORPGohaQ",	 
      "https://www.youtube.com/watch?v=TElBZqXCEQI",	 
      "https://www.youtube.com/watch?v=uFiHv3MFme0",	 
      "https://www.youtube.com/watch?v=-ctYn6S69eY",	 
      "https://www.youtube.com/watch?v=6v_6ZyuSnZg",	 
      "https://www.youtube.com/watch?v=iMXWKMkGTNY",	 
      "https://www.youtube.com/watch?v=KeuCjfjW560"
    ],
      //Animal Video
      [ "https://www.youtube.com/watch?v=5t_Dzj4rfNo ",	 
        "https://www.youtube.com/watch?v=Rk1MYMPDx3s ",	 
        "https://www.youtube.com/watch?v=bFvqf8Z13PU ",	 
        "https://www.youtube.com/watch?v=DIMN4JjP-2o ",	 
        "https://www.youtube.com/watch?v=99k-EAMBuM8 ",	 
        "https://www.youtube.com/watch?v=FwwIYdB_wic ",	 
        "https://www.youtube.com/watch?v=QSQwZlRMVAM ",	 
        "https://www.youtube.com/watch?v=DFPdtdY-a_c ",	 
        "https://www.youtube.com/watch?v=t2jlvTVV2x4 ",	 
        "https://www.youtube.com/watch?v=EEGpgo6GdrE ",	 
        "https://www.youtube.com/watch?v=pfdhxAMXH0Y ",	
        "https://www.youtube.com/watch?v=MU2gs5f1o1g ",	 
        "https://www.youtube.com/watch?v=2V1fYJntoFA ",	 
        "https://www.youtube.com/watch?v=6X-zKy70I1Y ",	 
        "https://www.youtube.com/watch?v=odIBhaui1Cg ",	 
        "https://www.youtube.com/watch?v=Zhac_t3nmBw ",	 
        "https://www.youtube.com/watch?v=S0aLVSsOY78 ",	 
        "https://www.youtube.com/watch?v=S0aLVSsOY78 ",	 
        "https://www.youtube.com/watch?v=3SCBYUE_X1U "]
    ],
    // Motivational Quote : 7
    ["In three words I can sum up everything I”ve learned about life: it goes on. ",
    "This life is what you make it. No matter what, you”re going to mess up sometimes, it”s a universal truth. But the good part is you get to decide how you”re going to mess it up. Girls will be your friends - they”ll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they”re your true best friends. Don”t let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they”ll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can”t give up because if you give up, you”ll never find your soulmate. You”ll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn”t mean you”re gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don”t, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life”s a beautiful thing and there”s so much to smile about. ",	 
    "Life isn”t about finding yourself. Life is about creating yourself. ",	 
    "Life is like riding a bicycle. To keep your balance, you must keep moving. ",	 
    "The purpose of our lives is to be happy. ",	 
    "Many of life”s failures are people who did not realize how close they were to success when they gave up. ",	 
    "If you want to live a happy life, tie it to a goal, not to people or things ",	 
    "Never let the fear of striking out keep you from playing the game. ",	 
    "Not how long, but how well you have lived is the main thing. ",	 
    "The big lesson in life, baby, is never be scared of anyone or anything. ",	 
    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. ",	 
    "Turn your wounds into wisdom. ",	 
    "The way I see it, if you want the rainbow, you gotta put up with the rain. ",	 
    "Do all the good you can, for all the people you can, in all the ways you can, as long as you can. ",	 
    "Life imposes things on you that you can”t control, but you still have the choice of how you”re going to live through this. ",	 
    "Life is really simple, but men insist on making it complicated. ",	 
    "Life is a succession of lessons which must be lived to be understood. ",	 
    "My mama always said, life is like a box of chocolates. You never know what you”re gonna get. "],
    // Sleeping quote : 8
    ["Sleep is the best meditation ",	
    "Your future depends on your dreams, so go to sleep. ",	 
    "A day without a nap is like a cupcake without frosting ",	 
    "A well spent day brings happy sleep. ",	 
    "The best bridge between despair and hope is a good night”s sleep. ",	 
    "No day is so bad it can”t be fixed with a nap. ",	 
    "True silence is the rest of the mind, and is to the spirit what sleep is to the body, nourishment and refreshment. ",	 
    "A good laugh and a long sleep are the best cures in the doctor”s book. ",	 
    "Anyone can escape into sleep. We are all geniuses when we dream, the butcher”s the poet”s equal there. ",	 
    "Early to bed and early to rise makes a man healthy, wealthy, and wise. ",	 
    "Happiness consists of getting enough sleep. Just that, nothing more. ",	 
    "If you”re going to do something tonight that you”ll be sorry for tomorrow morning, sleep late. ",	 
    "No wonder Sleeping Beauty looked so good...she took long naps, never got old, and didn”t have to do anything but snore to get her Prince Charming."
  ]

];
var trainSet = [];
var maxLen = 0;
var commands = botResponse.length;

//Greeting : 0
trainSet.push({ input: textToBinary("Hi"), output: {[0]: 1} }); 
trainSet.push({ input: textToBinary("Hey"), output: {[0]: 1} }); 
trainSet.push({ input: textToBinary("Hello"), output: {[0]: 1} }); 
trainSet.push({ input: textToBinary("Anyone?"), output: {[0]: 1} }); 
																													 
//Bye : 1
trainSet.push({ input: textToBinary("Bye"), output: {[1]: 1} }); 
trainSet.push({ input: textToBinary("Goodbye"), output: {[1]: 1} }); 
trainSet.push({ input: textToBinary("Goodnight"), output: {[1]: 1} }); 
trainSet.push({ input: textToBinary("Good night"), output: {[1]: 1} }); 
trainSet.push({ input:  textToBinary("Quit"), output: {[1]: 1} }); 

// Purpose : 2
trainSet.push({ input:  textToBinary("What can you do?"), output: {[2]: 1} }); 
trainSet.push({ input:  textToBinary("Purpose?"), output: {[2]: 1} }); 
trainSet.push({ input:  textToBinary("How can you help?"), output: {[2]: 1} }); 
trainSet.push({ input:  textToBinary("What are you?"), output: {[2]: 1} });
trainSet.push({ input:  textToBinary("Who is this?"), output: {[2]: 1} }); 
																																																								   																														 
// Joke : 3
trainSet.push({ input:  textToBinary("joke"), output: {[3]: 1} });
trainSet.push({ input:  textToBinary("Tell me a joke!"), output: {[3]: 1} }); 
trainSet.push({ input:  textToBinary("I am sad"), output: {[3]: 1} }); 
trainSet.push({ input:  textToBinary("sad"), output: {[3]: 1} }); 
trainSet.push({ input:  textToBinary("fun"), output: {[3]: 1} }); 
trainSet.push({ input:  textToBinary("Make me laugh"), output: {[3]: 1} }); 

// Fun facts: 4
trainSet.push({ input:  textToBinary("fact"), output: {[4]: 1} }); 
trainSet.push({ input:  textToBinary("Tell me anything"), output: {[4]: 1} }); 
trainSet.push({ input:  textToBinary("learn something"), output: {[4]: 1} }); 
trainSet.push({ input:  textToBinary("learn"), output: {[4]: 1} }); 
trainSet.push({ input:  textToBinary("fun fact"), output: {[4]: 1} }); 
trainSet.push({ input:  textToBinary("anything"), output: {[4]: 1} }); 


// Music: 5
trainSet.push({ input:  textToBinary("Play me some music"), output: {[5]: 1} }); 
trainSet.push({ input:  textToBinary("Music"), output: {[5]: 1} }); 
trainSet.push({ input:  textToBinary("Play me a song"), output: {[5]: 1} }); 
trainSet.push({ input:  textToBinary("Song"), output: {[5]: 1} }); 
trainSet.push({ input:  textToBinary("Sound"), output: {[5]: 1} }); 

// Video : 6
trainSet.push({ input:  textToBinary("Video"), output: {[6]: 1} }); 
trainSet.push({ input:  textToBinary("Play me a video"), output: {[6]: 1} }); 
trainSet.push({ input:  textToBinary("watch a video"), output: {[6]: 1} }); 
trainSet.push({ input:  textToBinary("watch video"), output: {[6]: 1} }); 
trainSet.push({ input:  textToBinary("Animal"), output: {[6]: 1} }); 
trainSet.push({ input:  textToBinary("Cartoon"), output: {[6]: 1} }); 

// Motivational Quote : 7
trainSet.push({ input:  textToBinary("stressful"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("lost"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("hopeless"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("some hope"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("No hope"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("hope"), output: {[7]: 1} }); 
trainSet.push({ input:  textToBinary("What is life?"), output: {[7]: 1} }); 


// Sleeping quote : 8
trainSet.push({ input:  textToBinary("I want to sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Sleepy"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Cannot sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Want to sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Dream"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("I don't want to sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("I can't sleep"), output: {[8]: 1} }); 
trainSet.push({ input:  textToBinary("Why should I sleep?"), output: {[8]: 1} }); 

for (i=0; i< trainSet.length; i++){
	if (trainSet[i].input.length < maxLen){
		var remainingLength = maxLen - trainSet[i].input.length;
		trainSet[i].input = trainSet[i].input.concat(Array(remainingLength).fill(0));
	}
}

console.log(trainSet);

//Training
net.train(trainSet, {
	errorThresh: 0.005,  // error threshold to reach before completion
	log: false,           // console.log() progress periodically 
	logPeriod: 10,       // number of iterations between logging 
	learningRate: 0.3    // learning rate 
}); //Using all the training data to train the AI

bot.start((ctx) => {
  
  ctx.reply("Hello! Welcome!");
})

bot.help((ctx) => {
  ctx.reply("This bot can talk to you when you cannot fall asleep :)");
})

bot.on('message', (ctx) => {
  var data = textToBinary(ctx.message.text);
  var result = brain.likely(data, net);
  var category = botResponse[result];
  var response;
  if(response == 5) {

  } else {
    category[Math.floor(Math.random() * category.length)]
  }
  ctx.reply(response);
})

bot.launch()



function textToBinary(input){
	input = input.toUpperCase();
	var text = [];
	var code = "";
	for (i=0;i<input.length;i++){
		code += input[i].charCodeAt(0).toString(2);
	}
	for(i=0;i<code.length;i++){
		text = text.concat([parseInt(code[i])]);
	}
	if (text.length > maxLen){
		maxLen = text.length;
		console.log(maxLen);
	} 
	else{
		text = text.concat(Array(maxLen - text.length).fill(0));
	}
	//FOR DEBUG 
	//console.log(input)
	//console.log(text)
	return text;
}
