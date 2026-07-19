

const jokes = [
  { id: 1, category: "General", setup: "Where do otters keep their money?", punchline: "In the riverbank!" },
  { id: 2, category: "Puns", setup: "Why did the otter cross the road?", punchline: "To get to the otter side." },
  { id: 3, category: "Wholesome", setup: "What did the otter say to comfort their friend?", punchline: "Don't worry, things will be otterly fine!" },
  { id: 4, category: "General", setup: "What kind of car does an otter drive?", punchline: "An otter-mobile!" },
  { id: 5, category: "Puns", setup: "What do you call an otter with glasses?", punchline: "A spec-tangled otter!" }
];


Create an array named jokes that includes this list in this Google Sheet (https://docs.google.com/spreadsheets/d/1KghkpagtTeXcAWF8wu_-0KCwCqt0DMpceIK-bpPONes/edit?usp=sharing) of jokes with the key of id and the value of the joke number from the joke number column of the spreadsheet, then the key of category and with value of the Category listed in the category column of the spreadsheet, and the id of setup with the value of the setup listed in the setup column of the spreadsheet, and the id of punchline with the punchline listed in punchline column of the spreadsheet.


For example: 
const jokes = [
  { id: 1, category: "General", setup: "Where do otters keep their money?", punchline: "In the riverbank!" },
  { id: 2, category: "Puns", setup: "Why did the otter cross the road?", punchline: "To get to the otter side." },
  { id: 3, category: "Wholesome", setup: "What did the otter say to comfort their friend?", punchline: "Don't worry, things will be otterly fine!" },
  { id: 4, category: "General", setup: "What kind of car does an otter drive?", punchline: "An otter-mobile!" },
  { id: 5, category: "Puns", setup: "What do you call an otter with glasses?", punchline: "A spec-tangled otter!" }
];


All 100 jokes listed in the spreadsheet should be included in the array.