const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;




//Step up one folder to find the public directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Sample Array of Otter Jokes (Expand this with your spreadsheet data)
// const jokes = [
//   { id: 1, category: "General", setup: "Where do otters keep their money?", punchline: "In the riverbank!" },
//   { id: 2, category: "Puns", setup: "Why did the otter cross the road?", punchline: "To get to the otter side." },
//   { id: 3, category: "Wholesome", setup: "What did the otter say to comfort their friend?", punchline: "Don't worry, things will be otterly fine!" },
//   { id: 4, category: "General", setup: "What kind of car does an otter drive?", punchline: "An otter-mobile!" },
//   { id: 5, category: "Puns", setup: "What do you call an otter with glasses?", punchline: "A spec-tangled otter!" }
// ];



//Joke array from my Otter Jokes spreadsheet. Otter jokes list created by Google Gemini. Link to spreadsheet

const jokes = [
  { id: 1, category: "Classic Puns", setup: "Why did the otter cross the road?", punchline: "To get to the otter side." },
  { id: 2, category: "Classic Puns", setup: "What did the beaver say to his partner?", punchline: "I love you like no otter." },
  { id: 3, category: "Classic Puns", setup: "How do you say \"thank you\" to a marine mammal?", punchline: "I otter-ly appreciate it." },
  { id: 4, category: "Classic Puns", setup: "What do you call a regular otter?", punchline: "Nothing; they are just otter-nary animals." },
  { id: 5, category: "Classic Puns", setup: "What did the judge say to the otter in court?", punchline: "Order in the court! Or should I say, otter in the court?" },
  { id: 6, category: "Classic Puns", setup: "Why did the otter break up with the beaver?", punchline: "They thought they should start seeing otter people." },
  { id: 7, category: "Classic Puns", setup: "What did the otter say when she won the lottery?", punchline: "This is otter-ly unbelievable!" },
  { id: 8, category: "Classic Puns", setup: "Why was the otter so neat and organized?", punchline: "Because it hated being un-tail-dy." },
  { id: 9, category: "Classic Puns", setup: "What did the enthusiastic otter say before the game?", punchline: "Let's give it otter we've got!" },
  { id: 10, category: "Classic Puns", setup: "How did the otter describe the horror movie?", punchline: "It was otter-ly terrifying." },
  { id: 11, category: "Classic Puns", setup: "Why did the otter get a promotion?", punchline: "Because its work was otter this world." },
  { id: 12, category: "Classic Puns", setup: "What did the mom otter say when her kids were fighting?", punchline: "Stop blaming each otter!" },
  { id: 13, category: "Classic Puns", setup: "What do you call an otter that can't stop talking?", punchline: "An otter-mouth." },
  { id: 14, category: "Classic Puns", setup: "What do you call a highly respected otter?", punchline: "An otter-able citizen." },
  { id: 15, category: "Classic Puns", setup: "Why did the otter fail its driving test?", punchline: "It kept trying to drive an otter-matic." },
  { id: 16, category: "Classic Puns", setup: "What do you call an otter that loves space?", punchline: "An otter astronaut exploring otter space." },
  { id: 17, category: "Classic Puns", setup: "Why was the otter a good candidate for the job?", punchline: "It had excellent otter-g rani-zational skills." },
  { id: 18, category: "Classic Puns", setup: "What happens when an otter gets angry?", punchline: "It becomes an otter failure at staying calm." },
  { id: 19, category: "Classic Puns", setup: "What is an otter’s favorite piece of jewelry?", punchline: "An otter-graphed locket." },
  { id: 20, category: "Classic Puns", setup: "Why did the otter buy a camera?", punchline: "To capture otter-ly perfect moments." },
  { id: 21, category: "Professional & Tech", setup: "Where do otters keep their savings?", punchline: "In a riverbank." },
  { id: 22, category: "Professional & Tech", setup: "What kind of car does an executive otter drive?", punchline: "A Fur-rari." },
  { id: 23, category: "Professional & Tech", setup: "Why are otters great at tech support?", punchline: "They excel at otter-mation." },
  { id: 24, category: "Professional & Tech", setup: "What do you call a famous otter who signs pictures?", punchline: "An otter-graph seeker." },
  { id: 25, category: "Professional & Tech", setup: "What is an otter's favorite document format?", punchline: "A PDF (Paws; Dam; and Fur)." },
  { id: 26, category: "Professional & Tech", setup: "Why did the otter go to law school?", punchline: "To study the otter-ney general's cases." },
  { id: 27, category: "Professional & Tech", setup: "What did the business otter say during the presentation?", punchline: "Let's look at the otter quarter's profits." },
  { id: 28, category: "Professional & Tech", setup: "Why did the otter start a podcast?", punchline: "Because it wanted its voice to be heard by the otter community." },
  { id: 29, category: "Professional & Tech", setup: "What do you call an otter who writes books?", punchline: "An otter." },
  { id: 30, category: "Professional & Tech", setup: "Why did the otter get fired from the bank?", punchline: "It kept skimming off the top of the riverbank." },
  { id: 31, category: "Professional & Tech", setup: "What kind of math do otters use?", punchline: "Otter-gometry." },
  { id: 32, category: "Professional & Tech", setup: "Why did the tech-savvy otter buy a cryptocurrency?", punchline: "It wanted to invest in Bit-coon and Otter-ium." },
  { id: 33, category: "Professional & Tech", setup: "How do otters pay for their coffee?", punchline: "With their digital wallets." },
  { id: 34, category: "Professional & Tech", setup: "What do you call an otter that runs a state?", punchline: "A gov-otter." },
  { id: 35, category: "Professional & Tech", setup: "Why do otters make good detectives?", punchline: "They always look for the otter clues." },
  { id: 36, category: "Professional & Tech", setup: "What kind of business do trendy otters open?", punchline: "A boutique that sells tail-ored suits." },
  { id: 37, category: "Professional & Tech", setup: "Why did the otter start an online store?", punchline: "To sell e-stream products." },
  { id: 38, category: "Professional & Tech", setup: "What's an otter's favorite computer program?", punchline: "Adobe Photoshop (for editing out the beavers)." },
  { id: 39, category: "Professional & Tech", setup: "Why did the otter join the workforce?", punchline: "To climb the corporate ladder (or dam)." },
  { id: 40, category: "Professional & Tech", setup: "How do otters send secret messages?", punchline: "Using otter code." },
  { id: 41, category: "Food & Dining", setup: "What is an otter’s favorite movie snack?", punchline: "Pop-corn on the cob (stolen from a riverbank)." },
  { id: 42, category: "Food & Dining", setup: "What did the polite otter say to the waiter?", punchline: "Could I please get the check on my gill?" },
  { id: 43, category: "Food & Dining", setup: "Where do otters go to get a quick lunch?", punchline: "The stream-line buffet." },
  { id: 44, category: "Food & Dining", setup: "What do otters like to put on their toast?", punchline: "Mermalade." },
  { id: 45, category: "Food & Dining", setup: "What’s an otter’s favorite dessert?", punchline: "Chocolate mousse (or any other swamp animal)." },
  { id: 46, category: "Food & Dining", setup: "Why did the otter cook dinner?", punchline: "It wanted to serve its guests some otter-ly delicious food." },
  { id: 47, category: "Food & Dining", setup: "What do otters drink when they are cold?", punchline: "Hot otter-chocolate." },
  { id: 48, category: "Food & Dining", setup: "Where do hipster otters buy coffee?", punchline: "At the current grind cafe." },
  { id: 49, category: "Food & Dining", setup: "What is an otter’s favorite breakfast cereal?", punchline: "Cap'n Crunch (specifically for the crunch of sea urchins)." },
  { id: 50, category: "Food & Dining", setup: "Why did the otter refuse the salad?", punchline: "It was holding out for the otter course." },
  { id: 51, category: "Food & Dining", setup: "What do you call a group of otters having dinner?", punchline: "A wholesome feast." },
  { id: 52, category: "Food & Dining", setup: "What’s an otter’s favorite dipping sauce?", punchline: "Tartar sauce (naturally)." },
  { id: 53, category: "Food & Dining", setup: "Why are otters bad at baking?", punchline: "They always mess up the otter ingredients." },
  { id: 54, category: "Food & Dining", setup: "What kind of cheese do otters love?", punchline: "Muzz-otter-ella." },
  { id: 55, category: "Food & Dining", setup: "What did the food critic otter say about the clams?", punchline: "Simply otter-this-world." },
  { id: 56, category: "Pop Culture & School", setup: "Who is an otter’s favorite wizard?", punchline: "Harry P-otter." },
  { id: 57, category: "Pop Culture & School", setup: "What did Harry Potter say when he turned into a marine mammal?", punchline: "I'm an otter, Harry!" },
  { id: 58, category: "Pop Culture & School", setup: "What's an otter's favorite movie?", punchline: "The Otter-man Empire Strikes Back." },
  { id: 59, category: "Pop Culture & School", setup: "What did the teacher say to the misbehaving otter?", punchline: "Please sit down and look at the otter students." },
  { id: 60, category: "Pop Culture & School", setup: "Why did the otter go to art school?", punchline: "To learn how to paint with otter-colors." },
  { id: 61, category: "Pop Culture & School", setup: "What is an otter's favorite musical instrument?", punchline: "The otter-rina." },
  { id: 62, category: "Pop Culture & School", setup: "Who is a sea mammal's favorite pop star?", punchline: "Otter Swift." },
  { id: 63, category: "Pop Culture & School", setup: "What did the academic otter study?", punchline: "Otter-pology." },
  { id: 64, category: "Pop Culture & School", setup: "Why did the otter get an A in history?", punchline: "Because it knew all about the Otter-man Empire." },
  { id: 65, category: "Pop Culture & School", setup: "What do young otters do at recess?", punchline: "Play otter-tag." },
  { id: 66, category: "Pop Culture & School", setup: "What kind of music do cool otters listen to?", punchline: "Stream punk." },
  { id: 67, category: "Pop Culture & School", setup: "Why did the otter join the theater?", punchline: "It wanted to be an actor-pod." },
  { id: 68, category: "Pop Culture & School", setup: "What's an otter's favorite game show?", punchline: "The Price is Right (if the price is clams)." },
  { id: 69, category: "Pop Culture & School", setup: "Why did the otter read the dictionary?", punchline: "To improve its vocabulary... and find synonyms for \"otter.\"" },
  { id: 70, category: "Pop Culture & School", setup: "What do you call a magic otter?", punchline: "A grand wizard of the river." },
  { id: 71, category: "Outdoors & Lifestyle", setup: "Why are otters so good at swimming?", punchline: "It's just their natural drift." },
  { id: 72, category: "Outdoors & Lifestyle", setup: "What do otters do when they get tired?", punchline: "They just float it off." },
  { id: 73, category: "Outdoors & Lifestyle", setup: "What do you call a sea otter with glasses?", punchline: "A sea-nior citizen." },
  { id: 74, category: "Outdoors & Lifestyle", setup: "Why do otters always hold hands while sleeping?", punchline: "So they don't drift to the otter side of the lake." },
  { id: 75, category: "Outdoors & Lifestyle", setup: "What is an otter's favorite Olympic sport?", punchline: "Synchronized floating." },
  { id: 76, category: "Outdoors & Lifestyle", setup: "Why did the otter buy a sailboat?", punchline: "It wanted to see what was on the otter horizon." },
  { id: 77, category: "Outdoors & Lifestyle", setup: "What do you call an otter that loves hiking?", punchline: "A trail-blazing mammal." },
  { id: 78, category: "Outdoors & Lifestyle", setup: "Why did the otter go to the beach?", punchline: "To get a little sea sunning." },
  { id: 79, category: "Outdoors & Lifestyle", setup: "What do you call a grumpy otter?", punchline: "A pout-er." },
  { id: 80, category: "Outdoors & Lifestyle", setup: "What is an otter’s favorite type of weather?", punchline: "A little bit of mist and a lot of stream." },
  { id: 81, category: "Outdoors & Lifestyle", setup: "Why do otters make bad poker players?", punchline: "They always have a tell-tail sign." },
  { id: 82, category: "Outdoors & Lifestyle", setup: "What do otters wear to bed?", punchline: "Their fur coats." },
  { id: 83, category: "Outdoors & Lifestyle", setup: "Why did the otter go on a cruise?", punchline: "To relax on the otter deck." },
  { id: 84, category: "Outdoors & Lifestyle", setup: "What do you call a very fast otter?", punchline: "A stream engine." },
  { id: 85, category: "Outdoors & Lifestyle", setup: "What do otters use to style their hair?", punchline: "Seaweed gel." },
  { id: 86, category: "Miscellaneous", setup: "What do you call an otter that can predict the future?", punchline: "A proph-otter." },
  { id: 87, category: "Miscellaneous", setup: "Why did the otter cross the playground?", punchline: "To get to the otter slide." },
  { id: 88, category: "Miscellaneous", setup: "What did the sign say at the zoo's otter exhibit?", punchline: "Please do not look at the otter animals." },
  { id: 89, category: "Miscellaneous", setup: "Why was the otter so confident?", punchline: "Because it knew it was like no otter." },
  { id: 90, category: "Miscellaneous", setup: "What do you call a fish with no eyes that meets an otter?", punchline: "Dinner." },
  { id: 91, category: "Miscellaneous", setup: "Why did the otter look over its shoulder?", punchline: "To see its tail." },
  { id: 92, category: "Miscellaneous", setup: "What did the sea otter say to the clam?", punchline: "You crack me up!" },
  { id: 93, category: "Miscellaneous", setup: "Why are otters so bad at keeping secrets?", punchline: "Because they always let the cat-fish out of the bag." },
  { id: 94, category: "Miscellaneous", setup: "What do you call an otter that got into a fight?", punchline: "A bruised mammal." },
  { id: 95, category: "Miscellaneous", setup: "Why did the otter stay home from the party?", punchline: "It was feeling a bit under the weather-channel." },
  { id: 96, category: "Miscellaneous", setup: "What did the otter say when it bumped into a wall?", punchline: "Dam!" },
  { id: 97, category: "Miscellaneous", setup: "What do you call an otter that has everything figured out?", punchline: "Otter-ly enlightened." },
  { id: 98, category: "Miscellaneous", setup: "Why do otters love life so much?", punchline: "Because they live it to the otter-most." },
  { id: 99, category: "Miscellaneous", setup: "What did the romantic otter say?", punchline: "Significant otter, you have my whole heart." },
  { id: 100, category: "Miscellaneous", setup: "What is the final word in the otter dictionary?", punchline: "Z-otter." }
];








// API Endpoint to get a random joke
app.get('/api/jokes/random', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(randomJoke);
});


// Catch-all route updated for Express v5+ compatibility
app.get('*any', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

 

app.listen(PORT,  '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});