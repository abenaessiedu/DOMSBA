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
    {image: "0", title: "The Fool", description: "New Beginnings, Leaps of Faith, Innocence", image: "00theFool.jpeg" }, 
    {image: "0","The Magician", "Willpower, Desire, Creation, Manifestation", "01theMagician.jpeg"}, 
    {image: "0","The High Priestess", "Intuitive, Unconscious, Inner Voice/Guidance", "02theHighPriestess.jpeg"}, 
    {image: "0","The Empress", "Motherhood, Fertility, Nature, Creativity", "03theEmpress.jpeg"}, 
    {image: "0","The Emperor", "Authority, Structure, Control, Fatherhood", "04theEmperor.jpeg"}, 
    {image: "0","The Hierophant", "Tradition, Conformity, Morality, Ethics", "05theHierophant.jpeg"}, 
    {image: "0","The Lovers", "Partnerships, Duality, Union", "06theLovers.jpeg"}, 
    {image: "0","The Chariot", "Direction, Control, Willpower", "07theChariot.jpeg"}, 
    {image: "0","Strength", "Inner Strength, Bravery, Compassion, Focus", "08theStrength.jpeg"}, 
    {image: "0","The Hermit", "Contemplation, Search for Truth, Inner Guidance", "09theHermit.jpeg"}, 
    {image: "0","The Wheel of Fortune", "Change, Cycles, Inevitable Fate", "10theWheelofFortune.jpeg"}, 
    {image: "0","Justice", "Cause and Effect, Clarity, Truth", "11theJustice.jpeg"}, 
    {image: "0","The Hanged Man", "Sacrifice, Release, Martyrdom", "12theHangedMan.jpeg"}, 
    {image: "0","Death", "End of Cycle, Beginnings, Change, Metamorphosis", "13theDeath.jpeg"}, 
    {image: "0","Temperance","Middle Path, Patience, Finding Meaning", "14theTemperance.jpeg"}, 
    {image: "0","The Devil", "Addiction, Materialism, Playfulness", "15theDevil.jpeg"}, 
    {image: "0","The Tower", "Sudden Upheaval, Broken Pride, Disaster", "16theTower.jpeg"}, 
    {image: "0","The Star", "Hope, Faith, Rejuvenation", "17theStar.jpeg"}, 
    {image: "0","The Moon", "Unconscious, Illusions, Intuition", "18theMoon.jpeg"}, 
    {image: "0","The Sun", "Joy, Success, Celebration, Positivity", "19theSun.jpeg"}, 
    {image: "0","Judgement","Reflection, Reckoning, Awakening","20theJudgement.jpeg"}, 
    {image: "0","The World","Fulfillment, Harmony, Completion","21theWorld.jpg"}, 
    {image: "0","Ace of Cups","New Feelings, Spirituality, Inuition","22Cups01.jpeg"}, 
    {image: "0","Two of Cups","Unity, Partnership, Connection","23Cups02.jpeg"}, 
    {image: "0","Three of Cups","Freindship, Community, Happiness","24Cups03.jpeg"}, 
    {image: "0","Four of Cups","Apathy, Contemplation, Disconnectedness","25Cups04.jpeg"}, 
    {image: "0","Five of Cups","Loss, Gried, Self-Pity","26Cups05.jpeg"}, 
    {image: "0","Six of Cups","Familiarity, Happy Memories, Healing","27Cup06.jpeg"}, 
    {image: "0","Seven of Cups","Searching for Purpose, Choices, Daydreaming","28Cups07.jpeg"}, 
    {image: "0","Eight of Cups","Walking Away, Disillusionment, Leaving Behind","29Cups08.jpeg"}, 
    {image: "0","Nine of Cups","Satisfaction, Emotional Stability, Luxury","30Cups09.jpeg"}, 
    {image: "0","Ten of Cups","Inner Happiness, Fulfillment, Dreams Coming True","31Cups10.jpeg"}, 
    {image: "0","Page of Cups","Happy Suprise, Dreamer, Sensitivity","32Cups11.jpeg"}, 
    {image: "0","Knight of Cups","Following, Idealist, Romantic","33Cups12.jpeg"}, 
    {image: "0","Queen of Cups","Compassion, Calm, Comfort","34Cups13.jpeg"}, 
    {image: "0","King of Cups","Compassion, Control, Balance","35Cups14.jpeg"}, 
    {image: "0","Ace of Pentacles","Opportunity, Prosperity, New Venture","36Pentacles01.jpeg"}, 
    {image: "0","Two of Pentacles","Balancing Decisions, Priorities, Adapting to Change","37Pentacles02.jpeg"}, 
    {image: "0","Three of Pentacles","Teamwork, Collaboration, Building","38Pentacles03.jpeg"}, 
    {image: "0","Four of Pentacles","Conservation, Frugality, Security","39Pentacles04.jpeg"}, 
    {image: "0","Five of Pentacles","Need, Poverty, Insecurity","40Pentacles05.jpeg"}, 
    {image: "0","Six of Pentacles","Charity, Generosity, Sharing","41Pentacles06.jpeg"}, 
    {image: "0","Seven of Pentacles","Hard Work, Perseverance, Diligence","42Pentacles07.jpeg"}, 
    {image: "0","Eight of Pentacles","Apprenticeship, Passion, High Standards","43Pentacles08.jpeg"}, 
    {image: "0","Nine of Pentacles","Fruits of Labor, Rewards, Luxury","44Pentacles09.jpeg"}, 
    {image: "0","Ten of Pentacles","Legacy, Culmination, Inheritance","45Pentacles10.jpeg"}, 
    {image: "0","Page of Pentacles","Ambition, Desire, Diligence","46Pentacles11.jpeg"}, 
    {image: "0","Knight of Pentacles","Efficiency, Hard Work, Responsibility","47Pentacles12.jpeg"}, 
    {image: "0","Queen of Pentacles","Practicality, Creature Comforts, Financial Security","48Pentacles13.jpeg"}, 
    {image: "0","King of Pentacles","Abundance, Prosperity, Security","49Pentacles14.jpeg"}, 
    {image: "0","Ace of Swords","Breakthrough, Clarity, Sharp Mind","50Swords01.jpeg"}, 
    {image: "0","Two of Swords","Difficult Choices, Indecision, Stalemate","51Swords02.jpeg"}, 
    {image: "0","Three of Swords","Heartbreak, Suffering, Grief, Recovery","52Swords03.jpeg"}, 
    {image: "0","Four of Swords","Rest, Restoration, Contemplation","53Swords04.jpeg"}, 
    {image: "0","Five of Swords","Unbridled Ambition, Win At All Costs, Sneakiness","54Swords05.jpeg"}, 
    {image: "0","Six of Swords","Transition, Leaving Behind, Moving On","55Swords06.jpeg"}, 
    {image: "0","Seven of Swords","Deception, Trickery, Tactics and Strategy","56Swords07.jpeg"}, 
    {image: "0","Eight of Swords","Imprisonment, Entrapment, Self-Victimization","57Swords08.jpeg"}, 
    {image: "0","Nine of Swords","Anxiety, Hopelessness, Trauma","58Swords09.jpeg"}, 
    {image: "0","Ten of Swords","Failure, Collapse, Defeat","59Swords10.jpeg"}, 
    {image: "0","Page of Swords","Curiosity, Restlessness, Mental Energy","60Swords11.jpeg"}, 
    {image: "0","Knight of Swords","Action, Impulsiveness, Defending Beliefs","61Swords12.jpeg"}, 
    {image: "0","Queen of Swords","Complexity, Perceptiveness, Clear Mindedness","62Swords13.jpeg"}, 
    {image: "0","King of Swords","Head Over Heart, Discipline, Truth","63Swords14.jpeg"}, 
    {image: "0","Ace of Wands","Creation, Willpower, Inspiration, Desire","64Wands01.jpeg"}, 
    {image: "0","Two of Wands","Planning, Making Decisions, Leaving Home","65Wands02.jpeg"}, 
    {image: "0","Three of Wands","Looking Ahead, Expansion, Rapid Growth","66Wands03.jpeg"}, 
    {image: "0","Four of Wands","Community, Home, Celebration","67Wands04.jpeg"}, 
    {image: "0","Five of Wands","Competition, Rivalry, Conflict","68Wands05.jpeg"}, 
    {image: "0","Six of Wands","Victory, Success, Public Reward","69Wands06.jpeg"}, 
    {image: "0","Seven of Wands","Perseverance, Defensive, Maintaining Control","70Wands07.jpeg"}, 
    {image: "0","Eight of Wands","Rapid Action, Movement, Quick Decisions","71Wands08.jpeg"}, 
    {image: "0","Nine of Wands","Resilience, Grit, Last Stand","72Wands09.jpeg"}, 
    {image: "0","Ten of Wands","Accomplishment, Responsibility, Burden","73Wands10.jpeg"}, 
    {image: "0","Page of Wands","Exploration, Excitement, Freedom","74Wands11.jpeg"}, 
    {image: "0","Knight of Wands","Action, Adventure, Fearlessness","75Wands12.jpeg"}, 
    {image: "0","Queen of Wands","Courage, Determination, Joy","76Wands13.jpeg"}, 
    {image: "0","King of Wands","Big Picture, Leader, Overcoming Challenges","77Wands14.jpeg"}, 

]
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