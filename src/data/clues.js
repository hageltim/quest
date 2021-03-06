const clues = [
  // {
  //   id: '6101d6ed-c553-4693-a7b5-7c74bb0a1f39',
  //   type: 'basic',
  //   clue: 'We have just one, but with eight to spare. We rumble when touched and we wail when empty.',
  //   question: 'What are we?',
  //   webAnswer: false,
  //   hint: 'We are in your house'
  // },
  {
    id: 'eb8dd419-2569-4dde-b13b-1e31134184d4',
    type: 'basic',
    clue: 'Travel to the nearest Black Bean Temple where two spoons meet. There you will find a clue to the whereabouts of the first **magic gem**. Word around town is that you may even find something there to increase your stamina',
    question: 'What is another name for this place?',
    answers: ['caribou', 'coffee'],
    successMessage: '[7950 Penn Ave S, Bloomington, MN 55431](https://goo.gl/maps/vpSBssmodBDa4Ezr7)',
    webAnswer: true,
    hint: 'Name of your favorite place to go in the morning'
  },
  // {
  //   id: '1f24fa80-6332-4ce6-87d8-cb00ce022226',
  //   type: 'basic',
  //   clue: 'A once a strong and proud warrior now reduced to a mere ornament. Remains defiled, she lost more than just her honor. ',
  //   question: 'What was she?',
  //   answers: ['bear'],
  //   webAnswer: true,
  //   hint: 'Animal'
  // },
  {
    id: 'f0266dbb-b101-4078-9954-a6df942f5831',
    type: 'basic',
    clue: 'Legends tell of a woodland beast who travelled so very far, passing many mountains, rivers, and trees...beyond the sun and over the horizon. Beneath his path, a great bounty, now sold to this very day in this temple.',
    question: 'How many trees did he pass on his journey?',
    answers: ['11'],
    webAnswer: true,
    hint: 'His story was memorialized on the walls within the Temple of the Black Bean. There he is depicted in the middle of his journey. Though it was very hard, I eventually made it home.'
  },
  {
    id: '31a874c0-1a05-45ea-82e2-ea79adcf03a3',
    type: 'basic',
    clue: 'Filled with new wisdom and vigor, you are now ready to embark on a journey to three locations. Each one will provide you with a **key** which will guide you to one of the **magic gems**.',
    question: null,
    answers: [],
    webAnswer: true,
    hint: null
  },
  {
    id: '435c10bc-8546-4d15-8a86-270f4a335a77',
    type: 'basic',
    clue: 'Deep within the metropolis lies a wondrous place full of Nature’s beauty and splendor. There you will find a wise Sorceress living there who will be able to aid you on your adventure.\r\n\r\nJin, **Mu**, **Shui**, Huo, Tu',
    question: 'Enter the name of the place:',
    image: 'fiveelements',
    answers: ['wood', 'lake'],
    webAnswer: true,
    successMessage: '[6710 Lake Shore Dr S, Richfield, MN 55423](https://goo.gl/maps/jN9Vs2FVRDYEjpjJA)',
    hint: 'This great sanctuary reserves a safe location for the old world to live on, safe from the ever growing threat of humanity.'
  },
  {
    id: '5aa10399-b215-4b90-bf48-49482790ab89',
    type: 'basic',
    clue: 'The temple here is closed, but you can still find a wealth of information about it just near the entrance.',
    question: 'They say this place is A \_\_\_\_\_ in the Middle of the City.',
    answers: ['marsh'],
    webAnswer: true,
    hint: 'Look for an area near the entrance that has a roof, but only two walls.'
  },
  {
    id: '511179de-5196-4c2d-98ee-054e3ee6fd86',
    type: 'basic',
    clue: 'Outside of the temple there is a small place where imagination is free to run wild and knowledge is passed on.',
    question: 'This gift to all is thanks to what Troop?',
    answers: ['14354'],
    webAnswer: true,
    hint: 'Go to the door of the temple, then look for another door very close to you.'
  },
  {
    id: 'd4396199-2c37-46b8-926e-fd3b5cc66745',
    type: 'basic',
    clue: 'Saving the Prince is pretty important and all, but maybe a short break wouldn\'t hurt, right?',
    question: 'Which author could provide a quick little read?',
    answers: ['donald', 'sobol'],
    webAnswer: true,
    successMessage: 'Try one out, they are pretty fun!',
    hint: 'Look for something you could read in just two minutes.'
  },
  {
    id: '7205280c-56f8-4910-8cde-db69277f030b',
    type: 'basic',
    clue: 'Here in this sanctuary for nature, we remember all those who fought to protect it. Follow the shortest path, keep the water to your left. As you travel the path, you will find many resting points which pay tribute to these individuals. One among them once said, \r\n\r\n\r\n\r\n"Savour the Past\r\n\r\nLive for today\r\n\r\nLook forward to the future"',
    question: 'What was their name?',
    answers: ['dorothy', 'holstrom'],
    webAnswer: true,
    hint: 'Start at the entrance and follow the recommended path, look closely at each resting place along the way.'
  },
  {
    id: '6e533cb1-63ef-4939-9f92-57220d63ad82',
    type: 'basic',
    clue: 'Legends tell of a benevolent Sorceress who once lived in this wooded sanctuary. They say she returns to assist those in need who are pure of heart. If the stories are true, she rests in at the heart of wood lake. Find her and ask for her aid.',
    question: 'What is her name?',
    answers: ['yentihw'],
    webAnswer: true,
    hint: 'If only there was some way you could walk across the water to the middle of the lake.'
  },
  // {
  //   id: '90107dd1-fd11-453a-b4ea-c5b038aacb84',
  //   type: 'basic',
  //   clue: 'Legends tell of a benevolent Sorceress who once lived in this wooded sanctuary. They say she returns to assist those in need who are pure of heart. If the stories are true, she can be found outside in a place where voices are meant to be heard. Find her and ask for her aid.',
  //   question: 'What is her name?',
  //   answers: ['yentihw'],
  //   webAnswer: true,
  //   hint: 'This place is designed for many to see and hear.'
  // },
  {
    id: 'c9fbc8bf-620a-4d29-b5fc-cbe77acb9ebf',
    type: 'basic',
    clue: 'A grand bazaar of amusements where you have met several of your closest friends, though far from you now, there are many like it here.',
    question: 'What is this place called?',
    answers: ['gamestop'],
    successMessage: '[34 W 66th St, Richfield, MN 55423](https://goo.gl/maps/urUjK9xuyW9orvpU9)',
    webAnswer: true,
    hint: 'It went by a different name long ago, though most have forgotten. The one which was nearest to you when you first arrived to this land, is accompanied by a rainbow all day and night.'
  },
  {
    id: 'cf6e3e8b-ab3d-494d-a912-f91f494c4e96',
    type: 'basic',
    clue: 'Here awaits one of the three **keys** that will aid you in your quest. Worry not, brave hero...there are many in this land who would see to your success. ',
    question: 'See the store merchant and ask them for that which was left for you to **pick up**.\r\n\r\nEnter the barcode.',
    image: 'barcode',
    answers: ['711719519065'],
    webAnswer: true,
    hint: 'If you didn’t get something, try the Whistle in your inventory to call the Old Woman for help.'
  },
  {
    id: '75beaf1b-66d2-44a4-95fb-2867ebbae0c6',
    type: 'basic',
    clue: 'Nice work. There is yet one more **key** you must obtain. Lucky for you, it is very near. Like...if you were playing hot or cold, you could say you are **hot**.',
    question: 'What numerals rest above the entrance?',
    answers: ['26'],
    webAnswer: true,
    successMessage: '[26 W 66th St, Richfield, MN 55423](https://goo.gl/maps/5YSNsk3ED3kuFtf87)',
    hint: 'Your sorceress actually knows the "Hot or Cold" spell. Ask her to try it out.'
  },
  {
    id: '2c2bf8ed-3e80-4da7-8d74-b6dce1f76b1a',
    type: 'basic',
    clue: 'Your final **key** awaits you here. Speak with the merchant and tell them your name, they will have what you seek in what they call a **pull box**. Since you are out there working hard trying to save the prince, this one is on the house.',
    question: 'Confirm You have received it by entering the names of the two heroes represented on the front of the **key**',
    answers: ['gambit', 'rogue'],
    webAnswer: true,
    hint: 'Try the Whistle in your inventory to call the Old Woman for help if you are having trouble.'
  },
  {
    id: 'c1bf0873-02ad-4f14-8858-9fa25a8583f2',
    type: 'gem-clue',
    clue: 'Now that you possess all three **keys**, you can enter the Echo Temple where you will find the gems. To enter the temple, you must return **Home** and carry with you all three artificacts. When you walk through the door, you will not be in your real home, but an echo of itself in another plane of existence. Prepare yourself for the final trial: **The Echo Temple**',
    question: 'Collect the three **magic gems** and enter them below',
    answers: ['lightblue', 'purple', 'yellow'],
    successMessage: 'Well done! You have collected all three of the magic gems and you are now ready to face the wizard and save the prince! To harness the power of the magic gems against the wizard, you must hold them out and recite these ancient words: Zip, Zap, Zop. Go forth brave hero, to the Evil Wizard\'s Tower!\r\n\r\n[821 S Marquette Ave, Minneapolis, MN 55402](https://goo.gl/maps/pXPHWCUb7yCcu2QJA)', webAnswer: true,
    hint: 'To answer this you must find Magic Gems within the Echo Temple.'
  }
]

export default clues;