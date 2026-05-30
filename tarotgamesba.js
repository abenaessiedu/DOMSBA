/* THIS IS WHAT I WANT THE GAME TO DO: 
1. Hold a list of all the RIDER-WAITE-SMITH tarot cards and all their special meanings
2. when someone clicks on a card, i want the program to pick a card number at random and then use that
to showcase that card, with its meaning and information from like an array 
3. I want to make sure that the second card is different than the first 
4. I want to make sure that the third card is differnt from the second and the first 
5. then after the full spread is seen, and someone hits the "shuffle the deck" button, 
the code will reset and start over */ 


    
// an array of all the cards in the RIDER-WAITE-SMITH tarot deck, along with their descriptions and the pictures associated with them
const tarotDeck = [
    {image: [0], title: "The Fool", description: "New Beginnings, Leaps of Faith, Innocence", image: "00theFool.jpeg" }, 
    {image: [1], title: "The Magician", description: "Willpower, Desire, Creation, Manifestation", image:"01theMagician.jpeg"}, 
    {image: [2], title: "The High Priestess", description: "Intuitive, Unconscious, Inner Voice/Guidance", image: "02theHighPriestess.jpeg"}, 
    {image: [3], title: "The Empress", description: "Motherhood, Fertility, Nature, Creativity", image: "03theEmpress.jpeg"}, 
    {image: [4], title: "The Emperor", description: "Authority, Structure, Control, Fatherhood", image: "04theEmperor.jpeg"}, 
    {image: [5], title: "The Hierophant", description:  "Tradition, Conformity, Morality, Ethics", image: "05theHierophant.jpeg"}, 
    {image: [6], title: "The Lovers", description:  "Partnerships, Duality, Union",  image: "06theLovers.jpeg"}, 
    {image: [7], title: "The Chariot", description:  "Direction, Control, Willpower", image: "07theChariot.jpeg"}, 
    {image: [8], title: "Strength", description:  "Inner Strength, Bravery, Compassion, Focus", image: "08theStrength.jpeg"}, 
    {image: [9], title: "The Hermit", description:  "Contemplation, Search for Truth, Inner Guidance", image: "09theHermit.jpeg"}, 
    {image: [10], title: "The Wheel of Fortune", description:  "Change, Cycles, Inevitable Fate", image: "10theWheelofFortune.jpeg"}, 
    {image: [11], title: "Justice", description:  "Cause and Effect, Clarity, Truth", image: "11theJustice.jpeg"}, 
    {image: [12], title: "The Hanged Man", description:  "Sacrifice, Release, Martyrdom", image: "12theHangedMan.jpeg"}, 
    {image: [13], title: "Death", description: "End of Cycle, Beginnings, Change, Metamorphosis", image: "13theDeath.jpeg"}, 
    {image: [14], title: "Temperance", description: "Middle Path, Patience, Finding Meaning", image: "14theTemperance.jpeg"}, 
    {image: [15], title: "The Devil", description:  "Addiction, Materialism, Playfulness", image: "15theDevil.jpeg"}, 
    {image: [16], title: "The Tower", description:  "Sudden Upheaval, Broken Pride, Disaster", image: "16theTower.jpeg"}, 
    {image: [17], title: "The Star", description:  "Hope, Faith, Rejuvenation", image: "17theStar.jpeg"}, 
    {image: [18], title: "The Moon", description:  "Unconscious, Illusions, Intuition", image: "18theMoon.jpeg"}, 
    {image: [19], title: "The Sun", description:  "Joy, Success, Celebration, Positivity", image: "19theSun.jpeg"}, 
    {image: [20], title: "Judgement", description: "Reflection, Reckoning, Awakening", image: "20theJudgement.jpeg"}, 
    {image: [21], title: "The World", description: "Fulfillment, Harmony, Completion", image: "21theWorld.jpg"}, 
    {image: [22], title: "Ace of Cups", description: "New Feelings, Spirituality, Inuition", image: "22Cups01.jpeg"}, 
    {image: [23], title: "Two of Cups", description: "Unity, Partnership, Connection", image: "23Cups02.jpeg"}, 
    {image: [24], title: "Three of Cups", description: "Freindship, Community, Happiness", image: "24Cups03.jpeg"}, 
    {image: [25], title: "Four of Cups", description: "Apathy, Contemplation, Disconnectedness", image: "25Cups04.jpeg"}, 
    {image: [26], title: "Five of Cups", description: "Loss, Gried, Self-Pity", image: "26Cups05.jpeg"}, 
    {image: [27], title: "Six of Cups", description: "Familiarity, Happy Memories, Healing", image: "27Cup06.jpeg"}, 
    {image: [28], title: "Seven of Cups", description: "Searching for Purpose, Choices, Daydreaming", image: "28Cups07.jpeg"}, 
    {image: [29], title: "Eight of Cups", description: "Walking Away, Disillusionment, Leaving Behind", image: "29Cups08.jpeg"}, 
    {image: [30], title: "Nine of Cups", description: "Satisfaction, Emotional Stability, Luxury", image: "30Cups09.jpeg"}, 
    {image: [31], title: "Ten of Cups", description: "Inner Happiness, Fulfillment, Dreams Coming True", image: "31Cups10.jpeg"}, 
    {image: [32], title: "Page of Cups", description: "Happy Suprise, Dreamer, Sensitivity", image: "32Cups11.jpeg"}, 
    {image: [33], title: "Knight of Cups", description: "Following, Idealist, Romantic", image: "33Cups12.jpeg"}, 
    {image: [34], title: "Queen of Cups", description: "Compassion, Calm, Comfort", image: "34Cups13.jpeg"}, 
    {image: [35], title: "King of Cups", description: "Compassion, Control, Balance", image: "35Cups14.jpeg"}, 
    {image: [36], title: "Ace of Pentacles", description: "Opportunity, Prosperity, New Venture", image: "36Pentacles01.jpeg"}, 
    {image: [37], title: "Two of Pentacles", description: "Balancing Decisions, Priorities, Adapting to Change", image: "37Pentacles02.jpeg"}, 
    {image: [38], title: "Three of Pentacles", description: "Teamwork, Collaboration, Building", image: "38Pentacles03.jpeg"}, 
    {image: [39], title: "Four of Pentacles", description: "Conservation, Frugality, Security", image: "39Pentacles04.jpeg"}, 
    {image: [40], title: "Five of Pentacles", description: "Need, Poverty, Insecurity", image: "40Pentacles05.jpeg"}, 
    {image: [41], title: "Six of Pentacles", description: "Charity, Generosity, Sharing", image: "41Pentacles06.jpeg"}, 
    {image: [42], title: "Seven of Pentacles", description: "Hard Work, Perseverance, Diligence", image: "42Pentacles07.jpeg"}, 
    {image: [43], title: "Eight of Pentacles", description: "Apprenticeship, Passion, High Standards", image: "43Pentacles08.jpeg"}, 
    {image: [44], title: "Nine of Pentacles", description: "Fruits of Labor, Rewards, Luxury", image: "44Pentacles09.jpeg"}, 
    {image: [45], title: "Ten of Pentacles", description: "Legacy, Culmination, Inheritance", image: "45Pentacles10.jpeg"}, 
    {image: [46], title: "Page of Pentacles", description: "Ambition, Desire, Diligence", image: "46Pentacles11.jpeg"}, 
    {image: [47], title: "Knight of Pentacles", description: "Efficiency, Hard Work, Responsibility", image: "47Pentacles12.jpeg"}, 
    {image: [48], title: "Queen of Pentacles", description: "Practicality, Creature Comforts, Financial Security", image: "48Pentacles13.jpeg"}, 
    {image: [49], title: "King of Pentacles", description: "Abundance, Prosperity, Security", image: "49Pentacles14.jpeg"}, 
    {image: [50], title: "Ace of Swords", description: "Breakthrough, Clarity, Sharp Mind", image: "50Swords01.jpeg"}, 
    {image: [51], title: "Two of Swords", description: "Difficult Choices, Indecision, Stalemate", image: "51Swords02.jpeg"}, 
    {image: [52], title: "Three of Swords", description: "Heartbreak, Suffering, Grief, Recovery", image: "52Swords03.jpeg"}, 
    {image: [53], title: "Four of Swords", description: "Rest, Restoration, Contemplation", image: "53Swords04.jpeg"}, 
    {image: [54], title: "Five of Swords", description: "Unbridled Ambition, Win At All Costs, Sneakiness", image: "54Swords05.jpeg"}, 
    {image: [55], title: "Six of Swords", description: "Transition, Leaving Behind, Moving On", image: "55Swords06.jpeg"}, 
    {image: [56], title: "Seven of Swords", description: "Deception, Trickery, Tactics and Strategy", image: "56Swords07.jpeg"}, 
    {image: [57], title: "Eight of Swords", description: "Imprisonment, Entrapment, Self-Victimization", image: "57Swords08.jpeg"}, 
    {image: [58], title: "Nine of Swords", description: "Anxiety, Hopelessness, Trauma", image: "58Swords09.jpeg"}, 
    {image: [59], title: "Ten of Swords", description: "Failure, Collapse, Defeat","59Swords10.jpeg"}, 
    {image: [60], title: "Page of Swords", description: "Curiosity, Restlessness, Mental Energy", image: "60Swords11.jpeg"}, 
    {image: [61], title: "Knight of Swords", description: "Action, Impulsiveness, Defending Beliefs", image: "61Swords12.jpeg"}, 
    {image: [62], title: "Queen of Swords", description: "Complexity, Perceptiveness, Clear Mindedness", image: "62Swords13.jpeg"}, 
    {image: [63], title: "King of Swords", description: "Head Over Heart, Discipline, Truth", image: "63Swords14.jpeg"}, 
    {image: [64], title: "Ace of Wands", description: "Creation, Willpower, Inspiration, Desire", image: "64Wands01.jpeg"}, 
    {image: [65], title: "Two of Wands", description: "Planning, Making Decisions, Leaving Home", image: "65Wands02.jpeg"}, 
    {image: [66], title: "Three of Wands", description: "Looking Ahead, Expansion, Rapid Growth", image: "66Wands03.jpeg"}, 
    {image: [67], title: "Four of Wands", description: "Community, Home, Celebration", image: "67Wands04.jpeg"}, 
    {image: [68], title: "Five of Wands", description: "Competition, Rivalry, Conflict", image: "68Wands05.jpeg"}, 
    {image: [69], title: "Six of Wands", description: "Victory, Success, Public Reward", image: "69Wands06.jpeg"}, 
    {image: [70], title: "Seven of Wands", description: "Perseverance, Defensive, Maintaining Control", image: "70Wands07.jpeg"}, 
    {image: [71], title: "Eight of Wands", description: "Rapid Action, Movement, Quick Decisions", image: "71Wands08.jpeg"}, 
    {image: [72], title: "Nine of Wands", description: "Resilience, Grit, Last Stand", image: "72Wands09.jpeg"}, 
    {image: [73], title: "Ten of Wands", description: "Accomplishment, Responsibility, Burden", image: "73Wands10.jpeg"}, 
    {image: [74], title: "Page of Wands", description: "Exploration, Excitement, Freedom", image: "74Wands11.jpeg"}, 
    {image: [75], title: "Knight of Wands", description: "Action, Adventure, Fearlessness", image: "75Wands12.jpeg"}, 
    {image: [76], title: "Queen of Wands", description: "Courage, Determination, Joy", image: "76Wands13.jpeg"}, 
    {image: [77], title: "King of Wands", description: "Big Picture, Leader, Overcoming Challenges", image: "77Wands14.jpeg"}, 

]
const deckAlive = document.getElementById("tarotDeck");

tarotDeck.forEach((path) => {
  const imgElement = document.createElement("img");
  imgElement.src = path;
  imgElement.alt = "Image from array";
  imgElement.style.margin = "10px";
  imgElement.style.maxWidth = "200px";
  container.appendChild(imgElement);
});
//three functions to generate the 3 card pull at random 
function getRandom(num) {
    let randomNumber = 
    Math.floor(Math.random() * num); 
    return randomNumber; 
}

function getRandom2(num) {
    let randomNumber2 = 
    Math.floor(Math.random() * num); 
    do {
        Math.floor(Math.random()* num); 
    } while (randomNumber === randomNumber2);
    return randomNumber2
}

function getRandom3(num){
    let randomNumber3 = 
    Math.floor(Math.random() * num); 
    do {
        Math.floor(Math.random() * num); 
    } while (randomNumber2 === randomNumber3); 
    return randomNumber3
}
let randomNumber = getRandom(78); 
let randomNumber2 = getRandom2(78); 
let randomNumber3 = getRandom3(78); 
//showing the back of the cards first 
document.getElementById("displayingImg").onload 
{
document.getElementById("displayImg1").innerHTML = '<img src="imgs/78CardBack.jpg">'; 
document.getElementById("displayImg2").innerHTML = '<img src="imgs/78CardBack.jpg">'; 
document.getElementById("displayImg3").innerHTML = '<img src="imgs/78CardBack.jpg">'; 

}; 
//displaying the first card 
document.getElementById("displayingImg1").onclick = function(){
    let index = randomNumber; 
    let currentCard = tarotDeck[index]; 

    document.getElementById("displayingImg1").innerHTML = '<img src="imgs/cards' + currentCard.image + '.jpeg">'; 
    document.getElementById("displayDescription1").innerHTML = '<p>' + currentCard.description + '</p>'; 
    document.getElementById('displayingImg1').style.pointerEvents = 'none'; 
}
document.getElementById("displayingImg2").onclick = function(){ 
    let index = randomNumber2; 
    let currentCard2 = tarotDeck[index]; 

    document.getElementById("displayingImg2").innerHTML = '<img src="imgs/cards' + currentCard.image + '.jpeg">'; 
    document.getElementById("displayDescription2").innerHTML = '<p>' + currentCard.description + '</p>'; 
    document.getElementById('displayingImg2').style.pointerEvents = 'none'; 
}
document.getElementById("displayingImg3").onclick = function(){
    let index = randomNumber3; 
    let currentCard3 = tarotDeck[index]; 

    document.getElementById("displayingImg3").innerHTML = '<img src="imgs/cards' + currentCard.image + '.jpeg">'; 
    document.getElementById("displayDescription3").innerHTML = '<p>' + currentCard.description + '</p>'; 
    document.getElementById('displayingImg3').style.pointerEvents = 'none'; 
}

const reShuffleButton = document.querySelector("#SHUFFLE"); 

reShuffleButton.addEventListener('click', function() {
    window.location.reload(); 
}); 