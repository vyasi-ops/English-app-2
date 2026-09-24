const IDIOMS = [
  { id:1, name:"Piece of Cake", meaning:"Something very easy to do", example:"The spelling test was a piece of cake." },
  { id:2, name:"Break the Ice", meaning:"Start conversation in an awkward situation", example:"She told a joke to break the ice at the party." },
  { id:3, name:"Spill the Beans", meaning:"Reveal a secret, often by accident", example:"Don't spill the beans about the surprise." },
  { id:4, name:"Under the Weather", meaning:"Feeling sick or unwell", example:"I stayed home because I was under the weather." },
  { id:5, name:"Cost an Arm and a Leg", meaning:"Very expensive", example:"That new phone cost an arm and a leg." },
  { id:6, name:"Once in a Blue Moon", meaning:"Something that happens very rarely", example:"He visits his cousins once in a blue moon." },
  { id:7, name:"On Cloud Nine", meaning:"Extremely happy", example:"She was on cloud nine after winning the medal." },
  { id:8, name:"Hit the Books", meaning:"To study hard", example:"I need to hit the books before the test." },
  { id:9, name:"Bite the Bullet", meaning:"Face something difficult with courage", example:"He bit the bullet and apologised first." },
  { id:10, name:"Let the Cat Out of the Bag", meaning:"Accidentally reveal a secret", example:"He let the cat out of the bag about the trip." },
  { id:11, name:"A Penny for Your Thoughts", meaning:"Asking what someone is thinking", example:"You look worried — a penny for your thoughts?" },
  { id:12, name:"Burn the Midnight Oil", meaning:"Stay up very late working or studying", example:"She burned the midnight oil finishing her essay." },
  { id:13, name:"Cry Over Spilt Milk", meaning:"Be upset about something that cannot be undone", example:"The vase broke, but no use crying over spilt milk." },
  { id:14, name:"The Ball Is in Your Court", meaning:"It is your turn to decide or act", example:"I have said yes — the ball is in your court." },
  { id:15, name:"Bark Up the Wrong Tree", meaning:"Look in the wrong place or blame the wrong person", example:"If you think I broke it, you are barking up the wrong tree." },
  { id:16, name:"Beat Around the Bush", meaning:"Avoid saying what you mean directly", example:"Stop beating around the bush and tell me." },
  { id:17, name:"Bite Off More Than You Can Chew", meaning:"Take on more than you can handle", example:"She joined five clubs and bit off more than she could chew." },
  { id:18, name:"Burn Bridges", meaning:"Ruin a relationship so it cannot be repaired", example:"Do not burn bridges with your teammates." },
  { id:19, name:"Call It a Day", meaning:"Stop working on something for now", example:"We have done enough — let us call it a day." },
  { id:20, name:"Hit the Nail on the Head", meaning:"Be exactly right about something", example:"When you said he was nervous, you hit the nail on the head." },
  { id:21, name:"When Pigs Fly", meaning:"Something that will never happen", example:"He will clean his room when pigs fly." },
  { id:22, name:"Kill Two Birds with One Stone", meaning:"Solve two problems at once", example:"Cycling to school saves time and gives exercise — killing two birds with one stone." },
  { id:23, name:"A Blessing in Disguise", meaning:"Something bad that turns out to be good", example:"Missing the bus was a blessing in disguise — I found a shortcut." },
  { id:24, name:"Sit on the Fence", meaning:"Not take a side or make a decision", example:"Stop sitting on the fence and pick a team." },
  { id:25, name:"The Last Straw", meaning:"The final problem that makes you lose patience", example:"Forgetting her birthday was the last straw." },
  { id:26, name:"Actions Speak Louder Than Words", meaning:"What you do matters more than what you say", example:"You keep promising to help — actions speak louder than words." },
  { id:27, name:"Add Fuel to the Fire", meaning:"Make a bad situation worse", example:"Shouting at him only added fuel to the fire." },
  { id:28, name:"Back to Square One", meaning:"Start over from the beginning", example:"The experiment failed, so we are back to square one." },
  { id:29, name:"Get Out of Hand", meaning:"Become uncontrollable", example:"The argument got out of hand quickly." },
  { id:30, name:"Go the Extra Mile", meaning:"Do more than what is expected", example:"She always goes the extra mile for her friends." },
  { id:31, name:"In Hot Water", meaning:"In trouble", example:"He is in hot water for skipping class." },
  { id:32, name:"Jump on the Bandwagon", meaning:"Follow a trend because others are doing it", example:"Everyone jumped on the bandwagon when fidget spinners came out." },
  { id:33, name:"Keep Your Chin Up", meaning:"Stay positive during hard times", example:"I know the match was tough — keep your chin up." },
  { id:34, name:"Miss the Boat", meaning:"Miss an opportunity", example:"If you do not sign up today, you will miss the boat." },
  { id:35, name:"No Pain, No Gain", meaning:"You must work hard to get results", example:"Training is tough, but no pain, no gain." },
  { id:36, name:"Pull Someone's Leg", meaning:"Joke with someone or tease them", example:"I am just pulling your leg — I did not eat your sandwich." },
  { id:37, name:"See Eye to Eye", meaning:"Agree with someone", example:"The two captains do not see eye to eye on strategy." },
  { id:38, name:"Steal Someone's Thunder", meaning:"Take credit or attention from someone else", example:"She stole my thunder by announcing the news first." },
  { id:39, name:"The Tip of the Iceberg", meaning:"A small part of a much bigger problem", example:"The messy desk is just the tip of the iceberg." },
  { id:40, name:"Throw in the Towel", meaning:"Give up", example:"He threw in the towel after the third round." },
  { id:41, name:"Under Your Nose", meaning:"Right in front of you but unnoticed", example:"The keys were under my nose the whole time." },
  { id:42, name:"Up in the Air", meaning:"Uncertain or not decided yet", example:"Our holiday plans are still up in the air." },
  { id:43, name:"A Taste of Your Own Medicine", meaning:"Experience the same bad treatment you give others", example:"He kept interrupting, so they gave him a taste of his own medicine." },
  { id:44, name:"At the Drop of a Hat", meaning:"Without hesitation, instantly", example:"She would help anyone at the drop of a hat." },
  { id:45, name:"Better Late Than Never", meaning:"Doing something late is better than not doing it at all", example:"You finally submitted your homework — better late than never." },
  { id:46, name:"Cut Corners", meaning:"Do something in the easiest or cheapest way, skipping quality", example:"Do not cut corners on safety." },
  { id:47, name:"Don't Judge a Book by Its Cover", meaning:"Do not judge by appearance alone", example:"The quiet kid won the debate — do not judge a book by its cover." },
  { id:48, name:"Easy as Pie", meaning:"Very easy to do", example:"Setting up the tent was easy as pie." },
  { id:49, name:"Get Cold Feet", meaning:"Become too nervous to do something", example:"He got cold feet before his speech." },
  { id:50, name:"Go Down in Flames", meaning:"Fail spectacularly", example:"Their plan went down in flames." },
  { id:51, name:"Hang in There", meaning:"Keep going and do not give up", example:"The last lap is hard, but hang in there." },
  { id:52, name:"It Takes Two to Tango", meaning:"Both people are responsible, not just one", example:"The fight was not one-sided — it takes two to tango." },
  { id:53, name:"Jump the Gun", meaning:"Act too soon, before the right time", example:"She jumped the gun and announced the winner early." },
  { id:54, name:"Keep an Eye On", meaning:"Watch carefully", example:"Keep an eye on the soup — it might boil over." },
  { id:55, name:"Leave No Stone Unturned", meaning:"Search everywhere and try everything", example:"The detective left no stone unturned." },
  { id:56, name:"Make a Long Story Short", meaning:"Get to the point quickly", example:"To make a long story short, we missed the train." },
  { id:57, name:"Not My Cup of Tea", meaning:"Not something I enjoy", example:"Horror movies are not my cup of tea." },
  { id:58, name:"On the Same Page", meaning:"In agreement, understanding each other", example:"Let us make sure we are on the same page before the project starts." },
  { id:59, name:"Play It by Ear", meaning:"Decide as you go, without a fixed plan", example:"We do not have a schedule — we will play it by ear." },
  { id:60, name:"Put All Your Eggs in One Basket", meaning:"Risk everything on a single plan", example:"Do not put all your eggs in one basket — apply to more schools." },
  { id:61, name:"Rain on Someone's Parade", meaning:"Ruin someone's plans or happy mood", example:"Do not rain on her parade — she is excited about the show." },
  { id:62, name:"Read Between the Lines", meaning:"Understand the hidden meaning", example:"She said she was fine, but read between the lines — she was not." },
  { id:63, name:"Ring a Bell", meaning:"Sound familiar", example:"That name rings a bell, but I cannot place it." },
  { id:64, name:"Rock the Boat", meaning:"Cause trouble in a stable situation", example:"Nobody wanted to rock the boat before the finals." },
  { id:65, name:"Run Out of Steam", meaning:"Lose energy or enthusiasm", example:"The team ran out of steam in the second half." },
  { id:66, name:"Save for a Rainy Day", meaning:"Keep something for when you need it later", example:"She puts aside money to save for a rainy day." },
  { id:67, name:"Speak of the Devil", meaning:"The person you were just talking about appears", example:"Speak of the devil — there is Rohan now." },
  { id:68, name:"Take It with a Grain of Salt", meaning:"Do not believe it completely", example:"He exaggerates, so take his stories with a grain of salt." },
  { id:69, name:"The Best of Both Worlds", meaning:"Enjoy two good things at the same time", example:"Working from home gives you the best of both worlds." },
  { id:70, name:"Through Thick and Thin", meaning:"In good times and bad times", example:"Best friends stick together through thick and thin." },
  { id:71, name:"Time Flies", meaning:"Time passes very quickly", example:"Time flies when you are having fun." },
  { id:72, name:"Turn Over a New Leaf", meaning:"Make a fresh start and change your behaviour", example:"He turned over a new leaf and started studying daily." },
  { id:73, name:"Two Heads Are Better Than One", meaning:"Working together is better than working alone", example:"Let us do the project together — two heads are better than one." },
  { id:74, name:"Wear Your Heart on Your Sleeve", meaning:"Show your emotions openly", example:"She wears her heart on her sleeve — you always know how she feels." },
  { id:75, name:"A Picture Is Worth a Thousand Words", meaning:"An image can explain more than words can", example:"The graph showed the damage clearly — a picture is worth a thousand words." },
  { id:76, name:"Cross That Bridge When You Come to It", meaning:"Deal with a problem only when it actually happens", example:"We will cross that bridge when we come to it." },
  { id:77, name:"Every Cloud Has a Silver Lining", meaning:"Something good comes from every bad situation", example:"Losing the match taught us a lot — every cloud has a silver lining." },
  { id:78, name:"Go Back to the Drawing Board", meaning:"Start planning again from scratch", example:"The design did not work, so we went back to the drawing board." },
  { id:79, name:"The Elephant in the Room", meaning:"An obvious problem that nobody talks about", example:"Nobody mentioned the broken window — it was the elephant in the room." },
  { id:80, name:"Wrap Your Head Around", meaning:"Understand something complicated", example:"I still cannot wrap my head around quantum physics." }
];

const QUESTIONS = {
  1: [
    { type:"mcq", q:"Anya finished her art project in ten minutes and said it was simple. Which idiom fits?", opts:["Piece of Cake","Hit the Books","Bite the Bullet","Burn the Midnight Oil"], ans:0 },
    { type:"mcq", q:"What does 'Piece of Cake' mean?", opts:["Something very easy","Something delicious","Something expensive","Something surprising"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Piece of Cake'?", opts:["A student finds a maths problem very simple","A baker runs out of flour","A boy cannot find his bag","A girl is nervous about a test"], ans:0 },
    { type:"fitb", q:"The quiz had only five questions — it was a ___.", opts:["piece of cake","last straw","hot water","blue moon"], ans:0 },
    { type:"fitb", q:"Learning to tie my shoes was hard at first, but now it is a ___.", opts:["piece of cake","cold feet","long story","sharp cookie"], ans:0 }
  ],
  2: [
    { type:"mcq", q:"At the new school, Raj told a funny story so everyone would start talking. Which idiom fits?", opts:["Break the Ice","Spill the Beans","Rock the Boat","Jump the Gun"], ans:0 },
    { type:"mcq", q:"What does 'Break the Ice' mean?", opts:["Start a conversation in an awkward situation","Break something frozen","Get into an argument","Tell a secret"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Break the Ice'?", opts:["A teacher plays a name game on the first day","A boy drops his glass of water","Two friends plan a trip","A girl finishes her homework early"], ans:0 },
    { type:"fitb", q:"Nobody was talking at the table, so Sam cracked a joke to ___.", opts:["break the ice","spill the beans","call it a day","burn bridges"], ans:0 },
    { type:"fitb", q:"The new student introduced herself with a smile to ___ with the class.", opts:["break the ice","bite the bullet","miss the boat","cut corners"], ans:0 }
  ],
  3: [
    { type:"mcq", q:"Priya accidentally told Meera about the surprise birthday party. Which idiom fits?", opts:["Spill the Beans","Break the Ice","Hit the Nail on the Head","Ring a Bell"], ans:0 },
    { type:"mcq", q:"What does 'Spill the Beans' mean?", opts:["Reveal a secret","Make a mess","Cook dinner","Start an argument"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Spill the Beans'?", opts:["A boy accidentally tells his sister about her gift","A girl drops her lunch tray","A student answers a hard question","A teacher gives extra homework"], ans:0 },
    { type:"fitb", q:"Please do not ___ about the surprise trip — it is a secret!", opts:["spill the beans","burn bridges","throw in the towel","save for a rainy day"], ans:0 },
    { type:"fitb", q:"I cannot believe you ___ about the party — now everyone knows!", opts:["spilled the beans","hit the books","called it a day","sat on the fence"], ans:0 }
  ],
  4: [
    { type:"mcq", q:"Dev did not come to school because he had a cold and a sore throat. Which idiom fits?", opts:["Under the Weather","On Cloud Nine","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'Under the Weather' mean?", opts:["Feeling sick or unwell","Standing in the rain","Feeling scared","Being very cold"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Under the Weather'?", opts:["A girl stays in bed with a fever","A boy plays football in the rain","A student forgets her umbrella","A teacher cancels the trip because of storms"], ans:0 },
    { type:"fitb", q:"I am feeling a bit ___ today, so I will skip practice.", opts:["under the weather","on cloud nine","over the moon","in the dark"], ans:0 },
    { type:"fitb", q:"Mum told me to rest because I was ___.", opts:["under the weather","on the fence","in hot water","up in the air"], ans:0 }
  ],
  5: [
    { type:"mcq", q:"The bicycle Ravi wanted was so expensive that he could not afford it. Which idiom fits?", opts:["Cost an Arm and a Leg","Piece of Cake","Once in a Blue Moon","Easy as Pie"], ans:0 },
    { type:"mcq", q:"What does 'Cost an Arm and a Leg' mean?", opts:["Very expensive","Very painful","Very rare","Very large"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cost an Arm and a Leg'?", opts:["A family saves for months to buy a new car","A boy finds a coin on the street","A girl gets a free sample at the shop","A student borrows a pencil"], ans:0 },
    { type:"fitb", q:"The new gaming laptop ___ — Dad said we cannot afford it right now.", opts:["costs an arm and a leg","breaks the ice","rings a bell","hits the books"], ans:0 },
    { type:"fitb", q:"Those concert tickets ___! I had to use all my savings.", opts:["cost an arm and a leg","flew off the handle","broke the ice","called it a day"], ans:0 }
  ],
  6: [
    { type:"mcq", q:"Grandma only visits during the summer holidays, which is very rare. Which idiom fits?", opts:["Once in a Blue Moon","At the Drop of a Hat","Time Flies","Every Cloud Has a Silver Lining"], ans:0 },
    { type:"mcq", q:"What does 'Once in a Blue Moon' mean?", opts:["Very rarely","Very quickly","Very sadly","Very brightly"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Once in a Blue Moon'?", opts:["A family eats out only on special occasions","A boy eats lunch every day","A girl reads before bed each night","A student walks to school daily"], ans:0 },
    { type:"fitb", q:"We only get snow here ___ — maybe once every ten years.", opts:["once in a blue moon","at the drop of a hat","under the weather","on cloud nine"], ans:0 },
    { type:"fitb", q:"My uncle lives abroad, so we see him only ___.", opts:["once in a blue moon","back to square one","in hot water","on the same page"], ans:0 }
  ],
  7: [
    { type:"mcq", q:"Sita was extremely happy after her team won the science competition. Which idiom fits?", opts:["On Cloud Nine","Under the Weather","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'On Cloud Nine' mean?", opts:["Extremely happy","Very confused","Very tired","Extremely scared"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'On Cloud Nine'?", opts:["A boy finds out he got the lead role in the school play","A girl loses her favourite book","A student forgets his lunch","A teacher gives a surprise test"], ans:0 },
    { type:"fitb", q:"When I found out I passed the exam, I was ___!", opts:["on cloud nine","in hot water","under the weather","on the fence"], ans:0 },
    { type:"fitb", q:"She has been ___ ever since she got accepted into the art programme.", opts:["on cloud nine","back to square one","out of hand","up in the air"], ans:0 }
  ],
  8: [
    { type:"mcq", q:"With exams next week, Neha decided to study every evening. Which idiom fits?", opts:["Hit the Books","Break the Ice","Burn Bridges","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Hit the Books' mean?", opts:["Study hard","Throw books away","Read for fun","Skip school"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hit the Books'?", opts:["A student spends the weekend preparing for a test","A boy organises his bookshelf","A girl returns a library book","A teacher hands out new textbooks"], ans:0 },
    { type:"fitb", q:"The final exam is tomorrow — I really need to ___.", opts:["hit the books","call it a day","rock the boat","throw in the towel"], ans:0 },
    { type:"fitb", q:"Instead of playing video games, he decided to ___ for the quiz.", opts:["hit the books","burn bridges","jump the gun","pull my leg"], ans:0 }
  ],
  9: [
    { type:"mcq", q:"Even though he was scared of the roller coaster, Arjun went on it anyway. Which idiom fits?", opts:["Bite the Bullet","Spill the Beans","Miss the Boat","Sit on the Fence"], ans:0 },
    { type:"mcq", q:"What does 'Bite the Bullet' mean?", opts:["Face something difficult with courage","Eat something hard","Get angry quickly","Run away from danger"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bite the Bullet'?", opts:["A girl goes to the dentist even though she is nervous","A boy skips his chores","A student copies from a friend","A teacher postpones the test"], ans:0 },
    { type:"fitb", q:"I was nervous about the presentation, but I ___ and did it anyway.", opts:["bit the bullet","burned the midnight oil","jumped on the bandwagon","threw in the towel"], ans:0 },
    { type:"fitb", q:"She had to ___ and tell her parents about the broken vase.", opts:["bite the bullet","beat around the bush","cry over spilt milk","kill two birds"], ans:0 }
  ],
  10: [
    { type:"mcq", q:"Kiran accidentally told everyone about the surprise farewell for the teacher. Which idiom fits?", opts:["Let the Cat Out of the Bag","Pull Someone's Leg","Bark Up the Wrong Tree","Speak of the Devil"], ans:0 },
    { type:"mcq", q:"What does 'Let the Cat Out of the Bag' mean?", opts:["Accidentally reveal a secret","Release a pet","Start a fight","Tell a joke"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Let the Cat Out of the Bag'?", opts:["A boy mentions a surprise gift in front of the birthday girl","A girl feeds a stray cat","A student opens his school bag","A teacher reads out loud"], ans:0 },
    { type:"fitb", q:"Oops — I think I just ___ about the surprise party!", opts:["let the cat out of the bag","burned the midnight oil","hit the nail on the head","sat on the fence"], ans:0 },
    { type:"fitb", q:"She ___ when she told Mum about the holiday plans.", opts:["let the cat out of the bag","threw in the towel","went back to the drawing board","crossed that bridge"], ans:0 }
  ],
  11: [
    { type:"mcq", q:"Nisha has been staring out of the window quietly for a while. Her friend asks what she is thinking. Which idiom fits?", opts:["A Penny for Your Thoughts","Speak of the Devil","Ring a Bell","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'A Penny for Your Thoughts' mean?", opts:["Asking what someone is thinking","Offering money","Giving advice","Making a wish"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Penny for Your Thoughts'?", opts:["A father notices his daughter looking thoughtful and asks what is on her mind","A boy counts his pocket money","A girl buys a candy bar","A student raises her hand in class"], ans:0 },
    { type:"fitb", q:"You have been quiet all morning. ___?", opts:["A penny for your thoughts","Once in a blue moon","Better late than never","Under the weather"], ans:0 },
    { type:"fitb", q:"She looked lost in thought, so I said, '___.'", opts:["A penny for your thoughts","Time flies","No pain, no gain","The last straw"], ans:0 }
  ],
  12: [
    { type:"mcq", q:"Aarav stayed up until midnight to finish his science project. Which idiom fits?", opts:["Burn the Midnight Oil","Hit the Nail on the Head","Call It a Day","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Burn the Midnight Oil' mean?", opts:["Stay up very late working or studying","Set something on fire","Waste time","Cook a late dinner"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Burn the Midnight Oil'?", opts:["A girl studies past midnight for an exam","A boy sleeps early after a tiring day","A student takes a nap during lunch","A teacher leaves school on time"], ans:0 },
    { type:"fitb", q:"She had to ___ to finish the assignment before the deadline.", opts:["burn the midnight oil","spill the beans","throw in the towel","rock the boat"], ans:0 },
    { type:"fitb", q:"We ___ all weekend preparing for the school play.", opts:["burned the midnight oil","let the cat out of the bag","jumped the gun","missed the boat"], ans:0 }
  ],
  13: [
    { type:"mcq", q:"Riya broke her favourite mug, and her mum said there was no point being upset. Which idiom fits?", opts:["Cry Over Spilt Milk","Under the Weather","Throw in the Towel","Rain on Someone's Parade"], ans:0 },
    { type:"mcq", q:"What does 'Cry Over Spilt Milk' mean?", opts:["Be upset about something that cannot be undone","Make a mess in the kitchen","Feel sick after eating","Argue with a friend"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cry Over Spilt Milk'?", opts:["A boy keeps complaining about losing a game that is already over","A girl cleans up a spill","A student asks for extra credit","A teacher hands back test papers"], ans:0 },
    { type:"fitb", q:"The match is over — there is no use ___.", opts:["crying over spilt milk","burning the midnight oil","breaking the ice","hitting the books"], ans:0 },
    { type:"fitb", q:"I know you lost your pen, but do not ___ — we can buy a new one.", opts:["cry over spilt milk","burn bridges","jump the gun","add fuel to the fire"], ans:0 }
  ],
  14: [
    { type:"mcq", q:"Amit has made his offer. Now it is Sana's turn to decide. Which idiom fits?", opts:["The Ball Is in Your Court","Speak of the Devil","The Tip of the Iceberg","A Blessing in Disguise"], ans:0 },
    { type:"mcq", q:"What does 'The Ball Is in Your Court' mean?", opts:["It is your turn to decide or act","You are playing a sport","You lost the game","You need to practise more"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Ball Is in Your Court'?", opts:["A girl has been given two choices and must pick one","A boy kicks a ball over the fence","A student finishes a race","A teacher writes on the board"], ans:0 },
    { type:"fitb", q:"I have given you my answer — now ___.", opts:["the ball is in your court","the tip of the iceberg","a penny for your thoughts","time flies"], ans:0 },
    { type:"fitb", q:"We have done our part of the project. ___.", opts:["The ball is in your court","Every cloud has a silver lining","No pain, no gain","Time flies"], ans:0 }
  ],
  15: [
    { type:"mcq", q:"Tara blamed Rohan for eating the cookies, but it was actually her brother. Which idiom fits?", opts:["Bark Up the Wrong Tree","Pull Someone's Leg","Beat Around the Bush","Bite the Bullet"], ans:0 },
    { type:"mcq", q:"What does 'Bark Up the Wrong Tree' mean?", opts:["Look in the wrong place or blame the wrong person","Climb a tree","Shout loudly","Make a dog bark"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bark Up the Wrong Tree'?", opts:["A teacher accuses the wrong student of cheating","A boy climbs his favourite tree","A girl walks her dog in the park","A student plants a tree for Earth Day"], ans:0 },
    { type:"fitb", q:"If you think I took your eraser, you are ___.", opts:["barking up the wrong tree","burning the midnight oil","biting the bullet","breaking the ice"], ans:0 },
    { type:"fitb", q:"The detective realised he had been ___ — the real clue was somewhere else.", opts:["barking up the wrong tree","on cloud nine","in hot water","on the same page"], ans:0 }
  ],
  16: [
    { type:"mcq", q:"Instead of saying what was wrong, Kabir kept talking about other things. Which idiom fits?", opts:["Beat Around the Bush","Spill the Beans","Hit the Books","Call It a Day"], ans:0 },
    { type:"mcq", q:"What does 'Beat Around the Bush' mean?", opts:["Avoid saying what you mean directly","Walk through a garden","Argue loudly","Tell a secret"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Beat Around the Bush'?", opts:["A girl hints at a problem but never actually says it","A boy searches for something in a bush","A student gives a clear answer","A teacher explains a lesson step by step"], ans:0 },
    { type:"fitb", q:"Stop ___ and tell me what really happened.", opts:["beating around the bush","burning bridges","hitting the books","throwing in the towel"], ans:0 },
    { type:"fitb", q:"He kept ___ instead of admitting he forgot the homework.", opts:["beating around the bush","biting the bullet","breaking the ice","calling it a day"], ans:0 }
  ],
  17: [
    { type:"mcq", q:"Zara signed up for six activities and now she cannot keep up with any of them. Which idiom fits?", opts:["Bite Off More Than You Can Chew","Piece of Cake","Go the Extra Mile","Kill Two Birds with One Stone"], ans:0 },
    { type:"mcq", q:"What does 'Bite Off More Than You Can Chew' mean?", opts:["Take on more than you can handle","Eat too much food","Talk too much","Study very hard"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Bite Off More Than You Can Chew'?", opts:["A boy volunteers for three projects at once and cannot finish any","A girl helps her friend with homework","A student reads a long book for fun","A teacher gives a short quiz"], ans:0 },
    { type:"fitb", q:"I think I have ___ by agreeing to organise the whole event alone.", opts:["bitten off more than I can chew","burned the midnight oil","hit the nail on the head","broken the ice"], ans:0 },
    { type:"fitb", q:"She ___ when she promised to bake cakes for the entire school.", opts:["bit off more than she could chew","threw in the towel","called it a day","sat on the fence"], ans:0 }
  ],
  18: [
    { type:"mcq", q:"Vikram was rude to his group members, and now nobody wants to work with him. Which idiom fits?", opts:["Burn Bridges","Break the Ice","Hit the Books","Bite the Bullet"], ans:0 },
    { type:"mcq", q:"What does 'Burn Bridges' mean?", opts:["Ruin a relationship so it cannot be repaired","Build something new","Light a campfire","Cross a river"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Burn Bridges'?", opts:["A student insults her teammate and they refuse to help her again","A boy builds a model bridge for science class","A girl crosses a bridge on her way to school","A teacher repairs a broken desk"], ans:0 },
    { type:"fitb", q:"Do not ___ with your classmates — you might need their help later.", opts:["burn bridges","beat around the bush","cry over spilt milk","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"He ___ by yelling at his coach, and now he is off the team.", opts:["burned bridges","hit the books","broke the ice","spilled the beans"], ans:0 }
  ],
  19: [
    { type:"mcq", q:"After painting for three hours, Mira and her dad decided to stop. Which idiom fits?", opts:["Call It a Day","Hit the Books","Burn the Midnight Oil","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Call It a Day' mean?", opts:["Stop working on something for now","Make a phone call","Start a new project","Work through the night"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Call It a Day'?", opts:["A group of students finishes practice and goes home","A boy wakes up early to study","A girl starts a new painting","A teacher assigns extra homework"], ans:0 },
    { type:"fitb", q:"We have cleaned three rooms already — let us ___.", opts:["call it a day","burn the midnight oil","bite the bullet","break the ice"], ans:0 },
    { type:"fitb", q:"It is getting dark. I think we should ___.", opts:["call it a day","hit the books","go the extra mile","add fuel to the fire"], ans:0 }
  ],
  20: [
    { type:"mcq", q:"When Leela guessed that the teacher was planning a surprise test, she was exactly right. Which idiom fits?", opts:["Hit the Nail on the Head","Break the Ice","Let the Cat Out of the Bag","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Hit the Nail on the Head' mean?", opts:["Be exactly right about something","Build something with tools","Make a mistake","Hurt yourself"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hit the Nail on the Head'?", opts:["A boy correctly guesses why his friend is upset","A girl hammers a nail into wood","A student drops a heavy book","A teacher erases the board"], ans:0 },
    { type:"fitb", q:"You ___ when you said the test would be about fractions.", opts:["hit the nail on the head","burned the midnight oil","sat on the fence","threw in the towel"], ans:0 },
    { type:"fitb", q:"Her explanation of the problem ___  — that was exactly the issue.", opts:["hit the nail on the head","cost an arm and a leg","went down in flames","jumped the gun"], ans:0 }
  ],
  21: [
    { type:"mcq", q:"When asked if he would ever eat broccoli, Rohan laughed and said it would never happen. Which idiom fits?", opts:["When Pigs Fly","Once in a Blue Moon","On Cloud Nine","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'When Pigs Fly' mean?", opts:["Something that will never happen","Something funny","Something surprising","Something exciting"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'When Pigs Fly'?", opts:["A lazy student says he will start waking up at 5 am","A girl finishes her homework on time","A boy eats his vegetables","A teacher gives a day off"], ans:0 },
    { type:"fitb", q:"He will tidy his room ___ — it is never going to happen.", opts:["when pigs fly","once in a blue moon","at the drop of a hat","in hot water"], ans:0 },
    { type:"fitb", q:"She will stop talking in class ___!", opts:["when pigs fly","on cloud nine","under the weather","on the same page"], ans:0 }
  ],
  22: [
    { type:"mcq", q:"By cycling to school, Anil gets exercise and saves bus fare at the same time. Which idiom fits?", opts:["Kill Two Birds with One Stone","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Kill Two Birds with One Stone' mean?", opts:["Solve two problems at once","Hunt birds","Break two things","Win two prizes"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Kill Two Birds with One Stone'?", opts:["A girl studies vocabulary while waiting for the bus","A boy finishes one task and starts another","A student asks the teacher two questions","A teacher gives two separate assignments"], ans:0 },
    { type:"fitb", q:"If we shop for groceries on the way to Grandma's house, we can ___.", opts:["kill two birds with one stone","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"Studying with a friend helps us revise and have fun — we are ___.", opts:["killing two birds with one stone","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  23: [
    { type:"mcq", q:"Missing the school bus meant Tara walked and discovered a beautiful shortcut through the park. Which idiom fits?", opts:["A Blessing in Disguise","The Last Straw","Under the Weather","Back to Square One"], ans:0 },
    { type:"mcq", q:"What does 'A Blessing in Disguise' mean?", opts:["Something bad that turns out to be good","A hidden gift","A costume party","A lucky charm"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Blessing in Disguise'?", opts:["A cancelled trip leads to a fun day at home with the family","A girl forgets her umbrella and gets wet","A boy loses his homework","A student misses lunch"], ans:0 },
    { type:"fitb", q:"Getting sick before the trip seemed bad, but it was ___ — I got to rest.", opts:["a blessing in disguise","the last straw","a penny for your thoughts","the tip of the iceberg"], ans:0 },
    { type:"fitb", q:"Losing my old phone was ___ because the new one works much better.", opts:["a blessing in disguise","a taste of my own medicine","the elephant in the room","once in a blue moon"], ans:0 }
  ],
  24: [
    { type:"mcq", q:"Ankit cannot decide whether to join the football team or the cricket team. Which idiom fits?", opts:["Sit on the Fence","Throw in the Towel","Jump the Gun","Rock the Boat"], ans:0 },
    { type:"mcq", q:"What does 'Sit on the Fence' mean?", opts:["Not take a side or make a decision","Rest outside","Watch a game","Climb over something"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Sit on the Fence'?", opts:["A girl refuses to pick between two options","A boy sits on a park bench","A student finishes her project early","A teacher assigns seats"], ans:0 },
    { type:"fitb", q:"Stop ___ and just pick a colour for the poster.", opts:["sitting on the fence","burning the midnight oil","hitting the books","throwing in the towel"], ans:0 },
    { type:"fitb", q:"He has been ___ about which school to choose for weeks.", opts:["sitting on the fence","on cloud nine","in hot water","under the weather"], ans:0 }
  ],
  25: [
    { type:"mcq", q:"After three delays and a mix-up, forgetting the tickets was the final thing that made Dad lose his patience. Which idiom fits?", opts:["The Last Straw","The Tip of the Iceberg","A Blessing in Disguise","The Elephant in the Room"], ans:0 },
    { type:"mcq", q:"What does 'The Last Straw' mean?", opts:["The final problem that makes you lose patience","The end of a story","A drinking straw","The last piece of hay"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Last Straw'?", opts:["A teacher finally gives detention after a student is late for the fifth time","A boy finishes the last page of a book","A girl uses the last straw in the kitchen","A student packs up at the end of the day"], ans:0 },
    { type:"fitb", q:"He kept forgetting his homework, and today was ___.", opts:["the last straw","the tip of the iceberg","a piece of cake","a blessing in disguise"], ans:0 },
    { type:"fitb", q:"Being rude to the waiter was ___ — Mum made us leave the restaurant.", opts:["the last straw","the best of both worlds","once in a blue moon","a penny for your thoughts"], ans:0 }
  ],
  26: [
    { type:"mcq", q:"Meera keeps saying she will practise piano but never actually does it. Which idiom fits?", opts:["Actions Speak Louder Than Words","A Penny for Your Thoughts","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Actions Speak Louder Than Words' mean?", opts:["What you do matters more than what you say","Speaking loudly is important","Words are useless","Actions are noisy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Actions Speak Louder Than Words'?", opts:["A boy promises to help but never shows up","A girl writes a long essay","A student reads out loud in class","A teacher talks about a field trip"], ans:0 },
    { type:"fitb", q:"You keep saying you will help clean up — remember, ___.", opts:["actions speak louder than words","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"Instead of just promising, show me — ___.", opts:["actions speak louder than words","a picture is worth a thousand words","two heads are better than one","no pain, no gain"], ans:0 }
  ],
  27: [
    { type:"mcq", q:"When Ravi and Shreya were arguing, their brother teased them and made it worse. Which idiom fits?", opts:["Add Fuel to the Fire","Break the Ice","Call It a Day","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Add Fuel to the Fire' mean?", opts:["Make a bad situation worse","Start a campfire","Cook something","Help someone"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Add Fuel to the Fire'?", opts:["A student makes fun of someone who is already upset","A girl helps put out a small fire","A boy lights a candle for his birthday","A teacher calms down the class"], ans:0 },
    { type:"fitb", q:"Shouting at your brother will only ___.", opts:["add fuel to the fire","break the ice","call it a day","hit the books"], ans:0 },
    { type:"fitb", q:"Bringing up old mistakes just ___ during the argument.", opts:["added fuel to the fire","burned the midnight oil","killed two birds with one stone","went the extra mile"], ans:0 }
  ],
  28: [
    { type:"mcq", q:"The science experiment failed completely, so the team had to start over. Which idiom fits?", opts:["Back to Square One","On Cloud Nine","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Back to Square One' mean?", opts:["Start over from the beginning","Move forward quickly","Finish the race","Win a board game"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Back to Square One'?", opts:["A student's model falls apart and she has to rebuild it","A boy moves to the next level in a game","A girl finishes her painting","A teacher collects the test papers"], ans:0 },
    { type:"fitb", q:"The code had too many errors, so we are ___ .", opts:["back to square one","on cloud nine","over the moon","in the clear"], ans:0 },
    { type:"fitb", q:"After the plan failed, the team went ___.", opts:["back to square one","the extra mile","down in flames","on the bandwagon"], ans:0 }
  ],
  29: [
    { type:"mcq", q:"The food fight in the cafeteria started small but quickly became chaotic. Which idiom fits?", opts:["Get Out of Hand","Break the Ice","Piece of Cake","Hit the Nail on the Head"], ans:0 },
    { type:"mcq", q:"What does 'Get Out of Hand' mean?", opts:["Become uncontrollable","Drop something","Leave a place","Finish quickly"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Get Out of Hand'?", opts:["A friendly game turns into a loud argument","A girl carefully puts away her books","A boy follows the rules during PE","A student finishes her test calmly"], ans:0 },
    { type:"fitb", q:"The prank war between the two classes ___ very quickly.", opts:["got out of hand","broke the ice","hit the books","went the extra mile"], ans:0 },
    { type:"fitb", q:"If we do not set rules, things could ___.", opts:["get out of hand","cost an arm and a leg","ring a bell","fly off the handle"], ans:0 }
  ],
  30: [
    { type:"mcq", q:"Kavya not only finished her part of the project but also helped two classmates with theirs. Which idiom fits?", opts:["Go the Extra Mile","Hit the Books","Call It a Day","Sit on the Fence"], ans:0 },
    { type:"mcq", q:"What does 'Go the Extra Mile' mean?", opts:["Do more than what is expected","Run a long distance","Travel far away","Take a longer route"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go the Extra Mile'?", opts:["A student stays after class to help the teacher clean up without being asked","A boy takes the bus instead of walking","A girl skips her homework","A teacher gives the class a day off"], ans:0 },
    { type:"fitb", q:"She always ___ to make sure her friends are happy.", opts:["goes the extra mile","throws in the towel","sits on the fence","cuts corners"], ans:0 },
    { type:"fitb", q:"The waiter ___ and brought us extra napkins without us asking.", opts:["went the extra mile","jumped the gun","burned bridges","rocked the boat"], ans:0 }
  ],
  31: [
    { type:"mcq", q:"Nikhil forgot to do his chores, and now his mum is upset with him. Which idiom fits?", opts:["In Hot Water","On Cloud Nine","Under the Weather","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'In Hot Water' mean?", opts:["In trouble","Taking a bath","Feeling warm","Cooking something"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'In Hot Water'?", opts:["A boy gets caught using his phone during class","A girl boils water for tea","A student takes a warm shower","A teacher turns on the heater"], ans:0 },
    { type:"fitb", q:"You will be ___ if you do not return the library book on time.", opts:["in hot water","on cloud nine","in the clear","over the moon"], ans:0 },
    { type:"fitb", q:"He is ___ for breaking the school window.", opts:["in hot water","under the weather","on the fence","up in the air"], ans:0 }
  ],
  32: [
    { type:"mcq", q:"When everyone started wearing neon trainers, Anil bought a pair too just to fit in. Which idiom fits?", opts:["Jump on the Bandwagon","Go the Extra Mile","Break the Ice","Kill Two Birds with One Stone"], ans:0 },
    { type:"mcq", q:"What does 'Jump on the Bandwagon' mean?", opts:["Follow a trend because others are doing it","Join a music band","Get on a bus","Start a new hobby"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Jump on the Bandwagon'?", opts:["Half the class starts collecting cards because the popular kids do it","A girl invents her own game","A boy reads a book nobody else has heard of","A student starts a unique art style"], ans:0 },
    { type:"fitb", q:"Everyone ___ when the new dance went viral on social media.", opts:["jumped on the bandwagon","burned the midnight oil","sat on the fence","hit the books"], ans:0 },
    { type:"fitb", q:"I do not just ___ — I actually liked that band before it was popular.", opts:["jump on the bandwagon","throw in the towel","beat around the bush","add fuel to the fire"], ans:0 }
  ],
  33: [
    { type:"mcq", q:"After losing the match, the coach told his team to stay positive. Which idiom fits?", opts:["Keep Your Chin Up","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Keep Your Chin Up' mean?", opts:["Stay positive during hard times","Look at the ceiling","Stand up straight","Eat with good posture"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Keep Your Chin Up'?", opts:["A girl encourages her friend after a bad test result","A boy lifts weights at the gym","A student adjusts her glasses","A teacher fixes the projector"], ans:0 },
    { type:"fitb", q:"I know you did not get selected, but ___.", opts:["keep your chin up","throw in the towel","burn bridges","jump the gun"], ans:0 },
    { type:"fitb", q:"Things are tough right now, but ___ — it will get better.", opts:["keep your chin up","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  34: [
    { type:"mcq", q:"The registration closed yesterday, and now Tina cannot join the workshop. Which idiom fits?", opts:["Miss the Boat","Jump the Gun","Call It a Day","Hit the Books"], ans:0 },
    { type:"mcq", q:"What does 'Miss the Boat' mean?", opts:["Miss an opportunity","Forget to take a ferry","Arrive late to school","Lose a race"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Miss the Boat'?", opts:["A student waits too long to sign up and the spots are full","A boy misses his school bus","A girl drops her bag on a boat","A teacher cancels a lesson"], ans:0 },
    { type:"fitb", q:"If you do not apply before Friday, you will ___.", opts:["miss the boat","burn the midnight oil","break the ice","rock the boat"], ans:0 },
    { type:"fitb", q:"I ___ on the early bird discount because I waited too long.", opts:["missed the boat","threw in the towel","burned bridges","called it a day"], ans:0 }
  ],
  35: [
    { type:"mcq", q:"Training for the marathon is hard, but Priya knows the effort will be worth it. Which idiom fits?", opts:["No Pain, No Gain","Piece of Cake","Easy as Pie","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'No Pain, No Gain' mean?", opts:["You must work hard to get results","Pain is good","Never try hard things","Give up when it hurts"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'No Pain, No Gain'?", opts:["A student practises maths every day and finally gets an A","A boy takes the easy way out","A girl skips her training session","A teacher cancels the test"], ans:0 },
    { type:"fitb", q:"I know running laps is tiring, but remember: ___.", opts:["no pain, no gain","once in a blue moon","easy as pie","time flies"], ans:0 },
    { type:"fitb", q:"She pushed through the difficult exercises because she believes ___.", opts:["no pain, no gain","a penny for your thoughts","better late than never","the best of both worlds"], ans:0 }
  ],
  36: [
    { type:"mcq", q:"Sahil told his sister that the dog ate her sandwich, but he was only joking. Which idiom fits?", opts:["Pull Someone's Leg","Spill the Beans","Let the Cat Out of the Bag","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Pull Someone's Leg' mean?", opts:["Joke with someone or tease them","Trip someone","Walk slowly","Carry something heavy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Pull Someone's Leg'?", opts:["A boy pretends he lost his homework to tease his friend","A girl helps her friend up","A student walks in line","A teacher speaks seriously"], ans:0 },
    { type:"fitb", q:"I am only ___ — I did not actually lose your bag!", opts:["pulling your leg","burning the midnight oil","biting the bullet","breaking the ice"], ans:0 },
    { type:"fitb", q:"Stop ___! You know I didn't forget your birthday.", opts:["pulling my leg","beating around the bush","burning bridges","adding fuel to the fire"], ans:0 }
  ],
  37: [
    { type:"mcq", q:"Anil and his teammate disagreed on the game strategy. Which idiom fits?", opts:["See Eye to Eye","On the Same Page","In Hot Water","On Cloud Nine"], ans:0 },
    { type:"mcq", q:"What does 'See Eye to Eye' mean?", opts:["Agree with someone","Look at someone closely","Wear glasses","Stand face to face"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'See Eye to Eye'?", opts:["A student and a teacher agree on the project topic","A boy looks in a mirror","A girl walks towards her friend","A teacher talks to the whole class"], ans:0 },
    { type:"fitb", q:"We do not ___ on which game to play, so we chose both.", opts:["see eye to eye","break the ice","hit the nail on the head","call it a day"], ans:0 },
    { type:"fitb", q:"They finally started to ___ after talking through their differences.", opts:["see eye to eye","burn the midnight oil","jump the gun","throw in the towel"], ans:0 }
  ],
  38: [
    { type:"mcq", q:"Zara planned to announce her win, but Mira told everyone before her, taking her credit. Which idiom fits?", opts:["Steal Someone's Thunder","Bark Up the Wrong Tree","Pull Someone's Leg","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Steal Someone's Thunder' mean?", opts:["Take credit or attention from someone else","Make a loud noise","Win a race","Talk too much"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Steal Someone's Thunder'?", opts:["A girl announces a surprise in front of her friend who planned it","A boy speaks at a meeting","A student answers a teacher's question","A teacher praises a pupil"], ans:0 },
    { type:"fitb", q:"She ___ by telling everyone about the secret trip first.", opts:["stole my thunder","burned bridges","threw in the towel","jumped the gun"], ans:0 },
    { type:"fitb", q:"I wanted to show my painting, but he ___ by showing his sculpture first.", opts:["stole my thunder","hit the nail on the head","missed the boat","cried over spilt milk"], ans:0 }
  ],
  39: [
    { type:"mcq", q:"This little argument is just a small sign of a much bigger problem. Which idiom fits?", opts:["The Tip of the Iceberg","A Blessing in Disguise","The Last Straw","Back to Square One"], ans:0 },
    { type:"mcq", q:"What does 'The Tip of the Iceberg' mean?", opts:["A small part of a much bigger problem","A cold place","A type of boat","A frozen mountain"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Tip of the Iceberg'?", opts:["A teacher notes one mistake in an essay that is full of errors","A boy sees a block of ice","A girl drinks water","A student reads about the North Pole"], ans:0 },
    { type:"fitb", q:"Forgetting to bring your book is just ___ — your desk is a total mess too.", opts:["the tip of the iceberg","a piece of cake","a penny for your thoughts","a blessing in disguise"], ans:0 },
    { type:"fitb", q:"That small error was only ___ — the whole system was broken.", opts:["the tip of the iceberg","the best of both worlds","every cloud has a silver lining","the elephant in the room"], ans:0 }
  ],
  40: [
    { type:"mcq", q:"After losing for the third time in a row, Raj decided to quit the competition. Which idiom fits?", opts:["Throw in the Towel","Call It a Day","Hit the Books","Break the Ice"], ans:0 },
    { type:"mcq", q:"What does 'Throw in the Towel' mean?", opts:["Give up","Clean up","Go to the gym","Start a fight"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Throw in the Towel'?", opts:["A student stops trying to solve a puzzle that is too hard","A boy drops his towel","A girl finishes her race","A teacher helps a student"], ans:0 },
    { type:"fitb", q:"The experiment was too difficult, so we decided to ___.", opts:["throw in the towel","burn the midnight oil","break the ice","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"She refused to ___ even when the task became very challenging.", opts:["throw in the towel","beat around the bush","bark up the wrong tree","add fuel to the fire"], ans:0 }
  ],
  41: [
    { type:"mcq", q:"Arjun was looking for his keys for an hour, but they were right in front of him. Which idiom fits?", opts:["Under Your Nose","Up in the Air","In Hot Water","Once in a Blue Moon"], ans:0 },
    { type:"mcq", q:"What does 'Under Your Nose' mean?", opts:["Right in front of you but unnoticed","Under your face","Smelling something","A small part of your face"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Under Your Nose'?", opts:["A girl finds her pen right on her desk after looking everywhere","A boy gets a cold","A student talks to his friend","A teacher checks a paper"], ans:0 },
    { type:"fitb", q:"My phone was ___ the whole time I was searching for it!", opts:["under my nose","on cloud nine","in hot water","up in the air"], ans:0 },
    { type:"fitb", q:"He missed the answer even though it was ___.", opts:["under his nose","a penny for his thoughts","a piece of cake","on the same page"], ans:0 }
  ],
  42: [
    { type:"mcq", q:"The family holiday plans are not yet decided. Which idiom fits?", opts:["Up in the Air","On Cloud Nine","In Hot Water","Under the Weather"], ans:0 },
    { type:"mcq", q:"What does 'Up in the Air' mean?", opts:["Uncertain or not decided yet","Flying","Scared of heights","Waiting for a plane"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Up in the Air'?", opts:["A group of friends cannot decide where to meet","A girl is excited for her trip","A boy is on an aeroplane","A teacher hands out forms"], ans:0 },
    { type:"fitb", q:"Our plans for the party are still ___.", opts:["up in the air","on cloud nine","in hot water","under the weather"], ans:0 },
    { type:"fitb", q:"Everything for the event is ___ because we do not have a budget yet.", opts:["up in the air","back to square one","out of hand","on the same page"], ans:0 }
  ],
  43: [
    { type:"mcq", q:"He kept interrupting his friend, so his friend interrupted him back to show him how annoying it is. Which idiom fits?", opts:["A Taste of Your Own Medicine","Actions Speak Louder Than Words","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'A Taste of Your Own Medicine' mean?", opts:["Experience the same bad treatment you give others","Go to the doctor","Take medicine","Get sick"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Taste of Your Own Medicine'?", opts:["A bully gets teased back and finally understands how it feels","A boy gives his friend candy","A girl helps her sister","A teacher explains a rule"], ans:0 },
    { type:"fitb", q:"He keeps making fun of others, so I gave him ___.", opts:["a taste of his own medicine","a penny for his thoughts","a piece of cake","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"After she was late, she got a ___ when everyone else showed up late too.", opts:["taste of her own medicine","blessing in disguise","time flies","bit of a break"], ans:0 }
  ],
  44: [
    { type:"mcq", q:"Sana always helps anyone who needs it immediately. Which idiom fits?", opts:["At the Drop of a Hat","Once in a Blue Moon","Time Flies","Every Cloud Has a Silver Lining"], ans:0 },
    { type:"mcq", q:"What does 'At the Drop of a Hat' mean?", opts:["Without hesitation, instantly","Wear a hat","Wait a long time","Take your time"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'At the Drop of a Hat'?", opts:["A student stops what he is doing to help his friend immediately","A girl buys a hat","A boy waits for a bus","A teacher starts the class slowly"], ans:0 },
    { type:"fitb", q:"She would help out ___ if you ask her nicely.", opts:["at the drop of a hat","once in a blue moon","better late than never","under the weather"], ans:0 },
    { type:"fitb", q:"He is ready to start painting ___.", opts:["at the drop of a hat","back to square one","in hot water","on the same page"], ans:0 }
  ],
  45: [
    { type:"mcq", q:"Rohan finally submitted his project two days late, but his teacher was glad it was done. Which idiom fits?", opts:["Better Late Than Never","Actions Speak Louder Than Words","A Penny for Your Thoughts","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Better Late Than Never' mean?", opts:["Doing something late is better than not doing it at all","Always be late","Being on time is bad","Never do your work"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Better Late Than Never'?", opts:["A student finally turns in his homework after the deadline","A boy is on time","A girl finishes early","A teacher assigns a test"], ans:0 },
    { type:"fitb", q:"You finally fixed the leak — ___.", opts:["better late than never","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"I know I should have called earlier, but ___.", opts:["better late than never","actions speak louder than words","a picture is worth a thousand words","two heads are better than one"], ans:0 }
  ],
  46: [
    { type:"mcq", q:"The builders tried to finish quickly by using weak materials. Which idiom fits?", opts:["Cut Corners","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Cut Corners' mean?", opts:["Do something in the easiest or cheapest way, skipping quality","Use scissors","Turn at a corner","Save time properly"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cut Corners'?", opts:["A student rushes his art project and skips the details","A boy practises hard","A girl paints carefully","A teacher checks the work thoroughly"], ans:0 },
    { type:"fitb", q:"If you ___ on your project, the results will not be very good.", opts:["cut corners","go the extra mile","kill two birds with one stone","throw in the towel"], ans:0 },
    { type:"fitb", q:"He always ___ by copying work instead of doing it himself.", opts:["cuts corners","goes the extra mile","burns the midnight oil","breaks the ice"], ans:0 }
  ],
  47: [
    { type:"mcq", q:"The student looked disorganised, but he was actually a genius. Which idiom fits?", opts:["Don't Judge a Book by Its Cover","Actions Speak Louder Than Words","A Penny for Your Thoughts","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Don't Judge a Book by Its Cover' mean?", opts:["Do not judge by appearance alone","Books are boring","Read the book completely","Covers are not important"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Don't Judge a Book by Its Cover'?", opts:["A quiet girl wins the big debate","A boy reads a book","A girl buys a book","A teacher recommends a book"], ans:0 },
    { type:"fitb", q:"That small car looks slow, but it is fast — ___.", opts:["don't judge a book by its cover","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"She seemed shy, but she became a great leader — ___.", opts:["don't judge a book by its cover","actions speak louder than words","a picture is worth a thousand words","two heads are better than one"], ans:0 }
  ],
  48: [
    { type:"mcq", q:"Setting up the tent was very simple for them. Which idiom fits?", opts:["Easy as Pie","Piece of Cake","Once in a Blue Moon","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Easy as Pie' mean?", opts:["Very easy to do","Very delicious","Very small","Very quick"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Easy as Pie'?", opts:["A boy follows the simple instructions to make a sandwich","A girl bakes a complex cake","A student studies for hours","A teacher gives a hard test"], ans:0 },
    { type:"fitb", q:"Fixing the computer was ___ — I just had to restart it.", opts:["easy as pie","a piece of cake","once in a blue moon","under the weather"], ans:0 },
    { type:"fitb", q:"I thought the homework would be hard, but it was ___.", opts:["easy as pie","back to square one","in hot water","on the same page"], ans:0 }
  ],
  49: [
    { type:"mcq", q:"He was going to give a speech, but he got very nervous and backed out. Which idiom fits?", opts:["Get Cold Feet","On Cloud Nine","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'Get Cold Feet' mean?", opts:["Become too nervous to do something","Need warm socks","Have cold toes","Feel lazy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Get Cold Feet'?", opts:["A girl refuses to go on stage because she is shy","A boy feels cold in the winter","A student sits in class","A teacher speaks clearly"], ans:0 },
    { type:"fitb", q:"You cannot ___ just before the race starts!", opts:["get cold feet","get out of hand","be on cloud nine","be on the same page"], ans:0 },
    { type:"fitb", q:"She wanted to join the club, but she ___ and decided not to.", opts:["got cold feet","threw in the towel","burned bridges","called it a day"], ans:0 }
  ],
  50: [
    { type:"mcq", q:"The team's plan failed in a very dramatic way. Which idiom fits?", opts:["Go Down in Flames","On Cloud Nine","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Go Down in Flames' mean?", opts:["Fail spectacularly","A building is burning","An aeroplane crashes","Cooking fails"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go Down in Flames'?", opts:["A project fails despite much effort","A boy plays with fire","A girl puts out a candle","A student tries his best"], ans:0 },
    { type:"fitb", q:"Their business idea ___ because of poor planning.", opts:["went down in flames","was a piece of cake","was on cloud nine","was in the clear"], ans:0 },
    { type:"fitb", q:"The show ___ when the lights went out during the performance.", opts:["went down in flames","went the extra mile","got out of hand","was on the same page"], ans:0 }
  ],
  51: [
    { type:"mcq", q:"The last mile of the race is hard, but keep going! Which idiom fits?", opts:["Hang in There","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Hang in There' mean?", opts:["Keep going and do not give up","Hold on to something","Wait outside","Stay in the air"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Hang in There'?", opts:["A friend tells you to stay positive during a hard task","A boy hangs from a bar","A girl waits in line","A teacher gives homework"], ans:0 },
    { type:"fitb", q:"I know it is difficult, but ___ — you are almost finished!", opts:["hang in there","throw in the towel","burn bridges","jump the gun"], ans:0 },
    { type:"fitb", q:"She was tired of studying, but her friend told her to ___.", opts:["hang in there","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  52: [
    { type:"mcq", q:"The disagreement wasn't just his fault; they were both involved. Which idiom fits?", opts:["It Takes Two to Tango","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'It Takes Two to Tango' mean?", opts:["Both people are responsible, not just one","Two people are dancing","People like dancing","Arguments are bad"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'It Takes Two to Tango'?", opts:["Two students are both responsible for the argument in class","A boy dances with his sister","A girl listens to music","A teacher leads the class"], ans:0 },
    { type:"fitb", q:"Do not blame just him for the fight — ___.", opts:["it takes two to tango","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"We both failed to get the forms in on time — ___.", opts:["it takes two to tango","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  53: [
    { type:"mcq", q:"She announced the winner before the final votes were counted. Which idiom fits?", opts:["Jump the Gun","Miss the Boat","Call It a Day","Hit the Books"], ans:0 },
    { type:"mcq", q:"What does 'Jump the Gun' mean?", opts:["Act too soon, before the right time","Run very fast","Start a race","Be very loud"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Jump the Gun'?", opts:["A boy starts eating before everyone is served","A girl practises for a race","A student finishes homework","A teacher starts the lesson"], ans:0 },
    { type:"fitb", q:"Do not ___ — wait until we have all the information.", opts:["jump the gun","burn the midnight oil","break the ice","rock the boat"], ans:0 },
    { type:"fitb", q:"I ___ by celebrating before the results were actually posted.", opts:["jumped the gun","threw in the towel","burned bridges","called it a day"], ans:0 }
  ],
  54: [
    { type:"mcq", q:"Watch the soup carefully so it does not overflow. Which idiom fits?", opts:["Keep an Eye On","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Keep an Eye On' mean?", opts:["Watch carefully","Use your eyes to see","Take a picture","Look away"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Keep an Eye On'?", opts:["A student asks his friend to watch his bag while he is away","A boy looks at a bird","A girl closes her eyes","A teacher reads a book"], ans:0 },
    { type:"fitb", q:"Can you ___ my little brother while I get the mail?", opts:["keep an eye on","throw in the towel","burn bridges","jump the gun"], ans:0 },
    { type:"fitb", q:"Please ___ the oven — it might burn.", opts:["keep an eye on","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  55: [
    { type:"mcq", q:"The detective looked everywhere to find the hidden clue. Which idiom fits?", opts:["Leave No Stone Unturned","Break the Ice","Piece of Cake","Hit the Nail on the Head"], ans:0 },
    { type:"mcq", q:"What does 'Leave No Stone Unturned' mean?", opts:["Search everywhere and try everything","Break stones","Clean a field","Look in the garden"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Leave No Stone Unturned'?", opts:["A girl searches her whole room to find her lost earring","A boy plays in the sandbox","A student clears his desk","A teacher organises the classroom"], ans:0 },
    { type:"fitb", q:"We will ___ to find out what happened to our project.", opts:["leave no stone unturned","burn the midnight oil","hit the books","go the extra mile"], ans:0 },
    { type:"fitb", q:"I have ___ looking for my keys.", opts:["left no stone unturned","broken the ice","hit the nail on the head","called it a day"], ans:0 }
  ],
  56: [
    { type:"mcq", q:"Just tell me what happened in brief, don't tell me every detail. Which idiom fits?", opts:["Make a Long Story Short","Hit the Books","Call It a Day","Sit on the Fence"], ans:0 },
    { type:"mcq", q:"What does 'Make a Long Story Short' mean?", opts:["Get to the point quickly","Speak quietly","Speak slowly","Tell a very long story"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Make a Long Story Short'?", opts:["A girl explains the main point of her adventure without listing every step","A boy tells a very detailed story","A student reads a book","A teacher gives a long lecture"], ans:0 },
    { type:"fitb", q:"___: we were late because of a flat tyre.", opts:["To make a long story short","To jump the gun","To throw in the towel","To break the ice"], ans:0 },
    { type:"fitb", q:"He kept rambling, so I told him, 'Please ___.'", opts:["make a long story short","go the extra mile","burn the midnight oil","break the ice"], ans:0 }
  ],
  57: [
    { type:"mcq", q:"I really do not like horror movies; they are not for me. Which idiom fits?", opts:["Not My Cup of Tea","On Cloud Nine","In Hot Water","Up in the Air"], ans:0 },
    { type:"mcq", q:"What does 'Not My Cup of Tea' mean?", opts:["Not something I enjoy","I do not like tea","I only like coffee","It is too hot"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Not My Cup of Tea'?", opts:["A girl explains that she prefers sci-fi over scary movies","A boy drinks tea","A student prepares a drink","A teacher likes tea"], ans:0 },
    { type:"fitb", q:"Classical music is ___ — I prefer pop music.", opts:["not my cup of tea","on cloud nine","in hot water","up in the air"], ans:0 },
    { type:"fitb", q:"Hiking is ___ — I would rather stay at home.", opts:["not my cup of tea","back to square one","out of hand","on the same page"], ans:0 }
  ],
  58: [
    { type:"mcq", q:"Let's ensure we both understand the plan the same way before starting. Which idiom fits?", opts:["On the Same Page","Jump on the Bandwagon","Break the Ice","Kill Two Birds with One Stone"], ans:0 },
    { type:"mcq", q:"What does 'On the Same Page' mean?", opts:["In agreement, understanding each other","Reading the same book","Sitting together","Being quiet"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'On the Same Page'?", opts:["A group of students discusses the project to ensure they all know their tasks","A boy reads a book","A girl talks to her friend","A teacher writes on the page"], ans:0 },
    { type:"fitb", q:"Before we start, let's make sure we are ___.", opts:["on the same page","burning the midnight oil","sitting on the fence","hitting the books"], ans:0 },
    { type:"fitb", q:"We had a meeting to ensure everyone was ___.", opts:["on the same page","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  59: [
    { type:"mcq", q:"We don't have a schedule, so we will decide as we go. Which idiom fits?", opts:["Play It by Ear","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Play It by Ear' mean?", opts:["Decide as you go, without a fixed plan","Listen carefully","Listen to music","Use your ears"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Play It by Ear'?", opts:["A group of friends goes on an adventure without a set map","A boy practises the piano","A girl listens to music","A teacher gives instructions"], ans:0 },
    { type:"fitb", q:"We have not planned the trip yet — we will ___.", opts:["play it by ear","throw in the towel","burn bridges","jump the gun"], ans:0 },
    { type:"fitb", q:"The weather is uncertain, so we will ___.", opts:["play it by ear","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  60: [
    { type:"mcq", q:"My mum says I should apply to different types of colleges, not just one. Which idiom fits?", opts:["Put All Your Eggs in One Basket","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Put All Your Eggs in One Basket' mean?", opts:["Risk everything on a single plan","Cook breakfast","Shop for groceries","Take care of your pets"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Put All Your Eggs in One Basket'?", opts:["A student applies to five different universities","A boy plays with an egg","A girl shops for food","A teacher assigns tasks"], ans:0 },
    { type:"fitb", q:"Do not ___ — diversify your savings.", opts:["put all your eggs in one basket","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"We need more options — we cannot ___.", opts:["put all our eggs in one basket","beat around the bush","bark up the wrong tree","burn bridges"], ans:0 }
  ],
  61: [
    { type:"mcq", q:"Anil was excited about his birthday, and his sister told him it would be boring. Which idiom fits?", opts:["Rain on Someone's Parade","Break the Ice","Call It a Day","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Rain on Someone's Parade' mean?", opts:["Ruin someone's plans or happy mood","Spill water","Enjoy the rain","Go to a parade"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Rain on Someone's Parade'?", opts:["A boy discourages his friend who was excited about an idea","A girl walks in the rain","A boy plays outside","A teacher hands back papers"], ans:0 },
    { type:"fitb", q:"I am sorry to ___ , but we have to postpone.", opts:["rain on your parade","break the ice","call it a day","hit the books"], ans:0 },
    { type:"fitb", q:"She was really happy, so I did not want to ___.", opts:["rain on her parade","add fuel to the fire","cry over spilt milk","sit on the fence"], ans:0 }
  ],
  62: [
    { type:"mcq", q:"She said she was happy, but her voice suggested otherwise. Which idiom fits?", opts:["Read Between the Lines","On Cloud Nine","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Read Between the Lines' mean?", opts:["Understand the hidden meaning","Read very slowly","Read a book","Read aloud"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Read Between the Lines'?", opts:["A boy knows his friend is actually sad even though he said he is fine","A girl reads a novel","A student studies a textbook","A teacher reads to the class"], ans:0 },
    { type:"fitb", q:"His note said he was busy, but if you ___, you know he is avoiding us.", opts:["read between the lines","are on cloud nine","are over the moon","are in the clear"], ans:0 },
    { type:"fitb", q:"You have to ___ to understand how she really feels.", opts:["read between the lines","go the extra mile","go down in flames","jump on the bandwagon"], ans:0 }
  ],
  63: [
    { type:"mcq", q:"I have heard that name somewhere before. Which idiom fits?", opts:["Ring a Bell","Break the Ice","Piece of Cake","Hit the Nail on the Head"], ans:0 },
    { type:"mcq", q:"What does 'Ring a Bell' mean?", opts:["Sound familiar","Answer the phone","Hear a bell sound","Be very loud"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Ring a Bell'?", opts:["A girl thinks she might have met that person before","A boy plays with a bell","A student listens to the school bell","A teacher rings a bell"], ans:0 },
    { type:"fitb", q:"That title ___ — was it in our textbook?", opts:["rings a bell","breaks the ice","hits the books","goes the extra mile"], ans:0 },
    { type:"fitb", q:"I am not sure where I saw him, but the name ___.", opts:["rings a bell","beats around the bush","barks up the wrong tree","calls it a day"], ans:0 }
  ],
  64: [
    { type:"mcq", q:"The team was working well, so nobody wanted to cause any trouble. Which idiom fits?", opts:["Rock the Boat","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Rock the Boat' mean?", opts:["Cause trouble in a stable situation","Move a boat","Sway in a chair","Play in the water"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Rock the Boat'?", opts:["A student avoids an argument in a happy team","A boy rows a boat","A girl plays with a toy boat","A teacher manages the class"], ans:0 },
    { type:"fitb", q:"Everything is fine, so let's not ___.", opts:["rock the boat","burn the midnight oil","break the ice","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"She was careful not to ___ during the meeting.", opts:["rock the boat","beat around the bush","bark up the wrong tree","add fuel to the fire"], ans:0 }
  ],
  65: [
    { type:"mcq", q:"The team was playing well, but they stopped trying in the second half. Which idiom fits?", opts:["Run Out of Steam","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Run Out of Steam' mean?", opts:["Lose energy or enthusiasm","Use a steam engine","Get hot","Stop working"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Run Out of Steam'?", opts:["A team stops playing hard near the end of a long game","A boy boils water","A girl turns on a steamer","A teacher gives a lesson"], ans:0 },
    { type:"fitb", q:"We had lots of ideas at first, but we soon ___.", opts:["ran out of steam","let the cat out of the bag","burned the midnight oil","added fuel to the fire"], ans:0 },
    { type:"fitb", q:"They ___ near the end of the project.", opts:["ran out of steam","beat around the bush","barked up the wrong tree","burned bridges"], ans:0 }
  ],
  66: [
    { type:"mcq", q:"Priya puts a few coins aside every week for later. Which idiom fits?", opts:["Save for a Rainy Day","Break the Ice","Call It a Day","Go the Extra Mile"], ans:0 },
    { type:"mcq", q:"What does 'Save for a Rainy Day' mean?", opts:["Keep something for when you need it later","Save for bad weather","Save for the weekend","Wait for the rain"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Save for a Rainy Day'?", opts:["A boy saves money in case he needs it later","A girl buys an umbrella","A student prepares for a trip","A teacher gives a lesson"], ans:0 },
    { type:"fitb", q:"I am not going to spend all my pocket money — I will ___.", opts:["save for a rainy day","break the ice","call it a day","hit the books"], ans:0 },
    { type:"fitb", q:"She keeps some extra supplies ___.", opts:["to save for a rainy day","to beat around the bush","to bark up the wrong tree","to call it a day"], ans:0 }
  ],
  67: [
    { type:"mcq", q:"As soon as they mentioned Rohan, he walked in. Which idiom fits?", opts:["Speak of the Devil","Break the Ice","Hit the Nail on the Head","Bark Up the Wrong Tree"], ans:0 },
    { type:"mcq", q:"What does 'Speak of the Devil' mean?", opts:["The person you were just talking about appears","A demon is here","Someone is mean","Someone is very loud"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Speak of the Devil'?", opts:["A student you are talking about walks in suddenly","A boy plays a trick","A girl reads a story","A teacher enters the class"], ans:0 },
    { type:"fitb", q:"___! I was just mentioning you.", opts:["Speak of the devil","Once in a blue moon","Better late than never","Under the weather"], ans:0 },
    { type:"fitb", q:"Hey, look! ___ — he's finally here.", opts:["Speak of the devil","Time flies","No pain, no gain","The last straw"], ans:0 }
  ],
  68: [
    { type:"mcq", q:"Rohan tends to exaggerate his stories, so don't believe everything he says. Which idiom fits?", opts:["Take It with a Grain of Salt","Actions Speak Louder Than Words","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Take It with a Grain of Salt' mean?", opts:["Do not believe it completely","Add salt","It is delicious","Do not listen"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Take It with a Grain of Salt'?", opts:["A girl is told a story she is not sure is true","A boy eats his dinner","A student helps a friend","A teacher talks about history"], ans:0 },
    { type:"fitb", q:"He likes to exaggerate, so ___.", opts:["take his stories with a grain of salt","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"I would ___ the report — it might be biased.", opts:["take it with a grain of salt","actions speak louder than words","a picture is worth a thousand words","two heads are better than one"], ans:0 }
  ],
  69: [
    { type:"mcq", q:"She works from home, so she can be with her kids and still get her job done. Which idiom fits?", opts:["The Best of Both Worlds","Go the Extra Mile","No Pain, No Gain","The Tip of the Iceberg"], ans:0 },
    { type:"mcq", q:"What does 'The Best of Both Worlds' mean?", opts:["Enjoy two good things at the same time","Be in two places at once","Travel to two places","Win two awards"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Best of Both Worlds'?", opts:["A girl gets to play and study at the same time","A boy enjoys his cake","A student reads","A teacher teaches"], ans:0 },
    { type:"fitb", q:"By cycling, you get exercise and avoid traffic — it is ___.", opts:["the best of both worlds","letting the cat out of the bag","burning the midnight oil","adding fuel to the fire"], ans:0 },
    { type:"fitb", q:"Living near the city and the beach gives you ___.", opts:["the best of both worlds","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  70: [
    { type:"mcq", q:"Best friends stay together through good times and bad times. Which idiom fits?", opts:["Through Thick and Thin","Back to Square One","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Through Thick and Thin' mean?", opts:["In good times and bad times","Through the forest","Walking slowly","Being happy"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Through Thick and Thin'?", opts:["A student supports his friend during a difficult illness","A boy runs through a thick forest","A girl reads a book","A teacher helps a student"], ans:0 },
    { type:"fitb", q:"We have been teammates ___ for years.", opts:["through thick and thin","on cloud nine","over the moon","in the clear"], ans:0 },
    { type:"fitb", q:"She stood by her friend ___.", opts:["through thick and thin","the extra mile","down in flames","on the bandwagon"], ans:0 }
  ],
  71: [
    { type:"mcq", q:"An hour of playing games felt like just five minutes! Which idiom fits?", opts:["Time Flies","Break the Ice","Piece of Cake","Hit the Nail on the Head"], ans:0 },
    { type:"mcq", q:"What does 'Time Flies' mean?", opts:["Time passes very quickly","Time has wings","Time is very slow","Clocks are fast"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Time Flies'?", opts:["A group of students enjoys a lesson so much it ends too quickly","A boy watches a clock","A girl waits for her bus","A teacher checks the time"], ans:0 },
    { type:"fitb", q:"I cannot believe it is already dark — ___!", opts:["time flies","break the ice","hit the books","go the extra mile"], ans:0 },
    { type:"fitb", q:"When you are having fun, ___.", opts:["time flies","beat around the bush","bark up the wrong tree","call it a day"], ans:0 }
  ],
  72: [
    { type:"mcq", q:"After failing the test, Ravi decided he would study properly every day from now on. Which idiom fits?", opts:["Turn Over a New Leaf","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Turn Over a New Leaf' mean?", opts:["Make a fresh start and change your behaviour","Change your hairstyle","Read a new book","Walk through a forest"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Turn Over a New Leaf'?", opts:["A student decides to be more responsible after a bad grade","A boy changes his shoes","A girl paints a leaf","A teacher explains a lesson"], ans:0 },
    { type:"fitb", q:"He promised to ___ and stop being late to class.", opts:["turn over a new leaf","burn the midnight oil","break the ice","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"After her mistake, she decided to ___.", opts:["turn over a new leaf","beat around the bush","bark up the wrong tree","add fuel to the fire"], ans:0 }
  ],
  73: [
    { type:"mcq", q:"Doing the project together is easier than alone. Which idiom fits?", opts:["Two Heads Are Better Than One","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Two Heads Are Better Than One' mean?", opts:["Working together is better than working alone","You are taller","People have big heads","Two people are faster"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Two Heads Are Better Than One'?", opts:["A boy and girl work together to solve a difficult maths problem","A student works alone","A girl plays music","A teacher gives homework"], ans:0 },
    { type:"fitb", q:"Let's discuss this together — ___.", opts:["two heads are better than one","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"We cannot figure this out — let's ask for help, ___.", opts:["two heads are better than one","beating around the bush","barking up the wrong tree","burning bridges"], ans:0 }
  ],
  74: [
    { type:"mcq", q:"She shows her emotions freely, so you always know how she feels. Which idiom fits?", opts:["Wear Your Heart on Your Sleeve","On Cloud Nine","A Blessing in Disguise","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Wear Your Heart on Your Sleeve' mean?", opts:["Show your emotions openly","Wear your clothes inside out","Have a heart on your sleeve","Be very quiet"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Wear Your Heart on Your Sleeve'?", opts:["A girl talks about her feelings freely to her friends","A boy buys a jacket","A student sits in class","A teacher speaks clearly"], ans:0 },
    { type:"fitb", q:"It is easy to tell how he feels — he ___.", opts:["wears his heart on his sleeve","lets the cat out of the bag","burns the midnight oil","adds fuel to the fire"], ans:0 },
    { type:"fitb", q:"She ___ — you always know when she is happy or sad.", opts:["wears her heart on her sleeve","beats around the bush","barks up the wrong tree","burns bridges"], ans:0 }
  ],
  75: [
    { type:"mcq", q:"The diagram showed the mess perfectly, explaining more than a long report. Which idiom fits?", opts:["A Picture Is Worth a Thousand Words","Actions Speak Louder Than Words","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'A Picture Is Worth a Thousand Words' mean?", opts:["An image can explain more than words can","Pictures are beautiful","Words are useless","A picture costs a lot"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'A Picture Is Worth a Thousand Words'?", opts:["A graph clearly shows the data that was hard to explain","A boy draws a picture","A girl reads a book","A teacher talks"], ans:0 },
    { type:"fitb", q:"The diagram was so clear — ___.", opts:["a picture is worth a thousand words","time flies","the ball is in your court","every cloud has a silver lining"], ans:0 },
    { type:"fitb", q:"I did not understand the instructions until she showed me — ___.", opts:["a picture is worth a thousand words","actions speak louder than words","a penny for your thoughts","two heads are better than one"], ans:0 }
  ],
  76: [
    { type:"mcq", q:"We will worry about that problem only if it actually happens. Which idiom fits?", opts:["Cross That Bridge When You Come to It","Speak of the Devil","Ring a Bell","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Cross That Bridge When You Come to It' mean?", opts:["Deal with a problem only when it actually happens","Walk over a bridge","Plan for everything early","Avoid all problems"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Cross That Bridge When You Come to It'?", opts:["A teacher decides not to worry about a potential issue until it arises","A boy crosses a bridge","A girl walks to school","A student studies"], ans:0 },
    { type:"fitb", q:"I know you are worried, but let's ___.", opts:["cross that bridge when we come to it","break the ice","hit the books","go the extra mile"], ans:0 },
    { type:"fitb", q:"We do not have a test yet, so we will ___.", opts:["cross that bridge when we come to it","beat around the bush","bark up the wrong tree","call it a day"], ans:0 }
  ],
  77: [
    { type:"mcq", q:"Losing the match was tough, but we learned a lot from it. Which idiom fits?", opts:["Every Cloud Has a Silver Lining","Actions Speak Louder Than Words","Better Late Than Never","Time Flies"], ans:0 },
    { type:"mcq", q:"What does 'Every Cloud Has a Silver Lining' mean?", opts:["Something good comes from every bad situation","Clouds have silver","Clouds are beautiful","It is sunny"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Every Cloud Has a Silver Lining'?", opts:["A boy finds a new hobby after his old one was cancelled","A girl looks at a cloud","A student reads a book","A teacher gives a lesson"], ans:0 },
    { type:"fitb", q:"Do not be sad — ___.", opts:["every cloud has a silver lining","time flies","the ball is in your court","a penny for your thoughts"], ans:0 },
    { type:"fitb", q:"Missing the train was annoying, but ___: I met an old friend at the station.", opts:["every cloud has a silver lining","actions speak louder than words","a picture is worth a thousand words","two heads are better than one"], ans:0 }
  ],
  78: [
    { type:"mcq", q:"The design wasn't working, so the team had to rethink their whole strategy. Which idiom fits?", opts:["Go Back to the Drawing Board","Throw in the Towel","Burn Bridges","Go Down in Flames"], ans:0 },
    { type:"mcq", q:"What does 'Go Back to the Drawing Board' mean?", opts:["Start planning again from scratch","Draw a new picture","Clean the board","Buy new paper"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Go Back to the Drawing Board'?", opts:["A team redesigns their project after the first idea fails","A boy draws","A girl paints","A teacher erases the board"], ans:0 },
    { type:"fitb", q:"The plan failed, so we had to ___.", opts:["go back to the drawing board","burn the midnight oil","break the ice","jump on the bandwagon"], ans:0 },
    { type:"fitb", q:"We need a better idea — let's ___.", opts:["go back to the drawing board","beat around the bush","bark up the wrong tree","add fuel to the fire"], ans:0 }
  ],
  79: [
    { type:"mcq", q:"Everyone was ignoring the fact that the project was unfinished, even though it was obvious. Which idiom fits?", opts:["The Elephant in the Room","The Tip of the Iceberg","A Blessing in Disguise","The Last Straw"], ans:0 },
    { type:"mcq", q:"What does 'The Elephant in the Room' mean?", opts:["An obvious problem that nobody talks about","A zoo in the classroom","A large pet","A messy room"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'The Elephant in the Room'?", opts:["A group avoids mentioning that a classmate is missing, though everyone notices","A boy plays with a toy elephant","A girl cleans her room","A teacher asks a question"], ans:0 },
    { type:"fitb", q:"Nobody is mentioning that the project is due today — it is ___.", opts:["the elephant in the room","the tip of the iceberg","a piece of cake","a blessing in disguise"], ans:0 },
    { type:"fitb", q:"The broken table was ___ during our meeting.", opts:["the elephant in the room","the best of both worlds","every cloud has a silver lining","a penny for your thoughts"], ans:0 }
  ],
  80: [
    { type:"mcq", q:"I am really trying to understand this complicated science topic. Which idiom fits?", opts:["Wrap Your Head Around","Go the Extra Mile","No Pain, No Gain","The Best of Both Worlds"], ans:0 },
    { type:"mcq", q:"What does 'Wrap Your Head Around' mean?", opts:["Understand something complicated","Wear a hat","Put your hands on your head","Feel confused"], ans:0 },
    { type:"mcq", q:"Which situation best matches 'Wrap Your Head Around'?", opts:["A student works hard to understand a difficult new concept","A boy wears a hat","A girl thinks hard","A teacher explains"], ans:0 },
    { type:"fitb", q:"This formula is hard; I cannot ___ it yet.", opts:["wrap my head around","let the cat out of the bag","burn the midnight oil","add fuel to the fire"], ans:0 },
    { type:"fitb", q:"It took me a while to ___ the new rules.", opts:["wrap my head around","beat around the bush","bark up the wrong tree","burn bridges"], ans:0 }
  ]
};
