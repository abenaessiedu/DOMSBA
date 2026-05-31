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
    {image: "00theFool.jpeg", title: "The Fool", description: "New Beginnings, Leaps of Faith, Innocence"}, 
    {image: "01theMagician.jpeg", title: "The Magician", description: "Willpower, Desire, Creation, Manifestation"}, 
    {image: "02theHighPriestess.jpeg", title: "The High Priestess", description: "Intuitive, Unconscious, Inner Voice/Guidance"}, 
    {image: "03theEmpress.jpeg", title: "The Empress", description: "Motherhood, Fertility, Nature, Creativity"}, 
    {image: "04theEmperor.jpeg", title: "The Emperor", description: "Authority, Structure, Control, Fatherhood"}, 
    {image: "05theHierophant.jpeg", title: "The Hierophant", description:  "Tradition, Conformity, Morality, Ethics"}, 
    {image: "06theLovers.jpeg", title: "The Lovers", description:  "Partnerships, Duality, Union"}, 
    {image: "07theChariot.jpeg", title: "The Chariot", description:  "Direction, Control, Willpower"}, 
    {image: "08theStrength.jpeg", title: "Strength", description:  "Inner Strength, Bravery, Compassion, Focus"}, 
    {image: "09theHermit.jpeg", title: "The Hermit", description:  "Contemplation, Search for Truth, Inner Guidance"}, 
    {image: "10theWheelofFortune.jpeg", title: "The Wheel of Fortune", description:  "Change, Cycles, Inevitable Fate"}, 
    {image: "11theJustice.jpeg", title: "Justice", description:  "Cause and Effect, Clarity, Truth"}, 
    {image: "12theHangedMan.jpeg", title: "The Hanged Man", description:  "Sacrifice, Release, Martyrdom"}, 
    {image: "13theDeath.jpeg", title: "Death", description: "End of Cycle, Beginnings, Change, Metamorphosis"}, 
    {image: "14theTemperance.jpeg", title: "Temperance", description: "Middle Path, Patience, Finding Meaning"}, 
    {image: "15theDevil.jpeg", title: "The Devil", description:  "Addiction, Materialism, Playfulness"}, 
    {image: "16theTower.jpeg", title: "The Tower", description:  "Sudden Upheaval, Broken Pride, Disaster"}, 
    {image: "17theStar.jpeg", title: "The Star", description:  "Hope, Faith, Rejuvenation"}, 
    {image: "18theMoon.jpeg", title: "The Moon", description:  "Unconscious, Illusions, Intuition"}, 
    {image: "19theSun.jpeg", title: "The Sun", description:  "Joy, Success, Celebration, Positivity"}, 
    {image: "20theJudgement.jpeg", title: "Judgement", description: "Reflection, Reckoning, Awakening"}, 
    {image: "21theWorld.jpg", title: "The World", description: "Fulfillment, Harmony, Completion"}, 
    {image: "22Cups01.jpeg", title: "Ace of Cups", description: "New Feelings, Spirituality, Inuition"}, 
    {image: "23Cups02.jpeg", title: "Two of Cups", description: "Unity, Partnership, Connection"}, 
    {image: "24Cups03.jpeg", title: "Three of Cups", description: "Freindship, Community, Happiness"}, 
    {image: "25Cups04.jpeg", title: "Four of Cups", description: "Apathy, Contemplation, Disconnectedness"}, 
    {image: "26Cups05.jpeg", title: "Five of Cups", description: "Loss, Gried, Self-Pity"}, 
    {image: "27Cup06.jpeg", title: "Six of Cups", description: "Familiarity, Happy Memories, Healing"}, 
    {image: "28Cups07.jpeg", title: "Seven of Cups", description: "Searching for Purpose, Choices, Daydreaming"}, 
    {image: "29Cups08.jpeg", title: "Eight of Cups", description: "Walking Away, Disillusionment, Leaving Behind"}, 
    {image: "30Cups09.jpeg", title: "Nine of Cups", description: "Satisfaction, Emotional Stability, Luxury"}, 
    {image: "31Cups10.jpeg", title: "Ten of Cups", description: "Inner Happiness, Fulfillment, Dreams Coming True"}, 
    {image: "32Cups11.jpeg", title: "Page of Cups", description: "Happy Suprise, Dreamer, Sensitivity"}, 
    {image: "33Cups12.jpeg", title: "Knight of Cups", description: "Following, Idealist, Romantic"}, 
    {image: "34Cups13.jpeg", title: "Queen of Cups", description: "Compassion, Calm, Comfort"}, 
    {image: "35Cups14.jpeg", title: "King of Cups", description: "Compassion, Control, Balance"}, 
    {image: "36Pentacles01.jpeg", title: "Ace of Pentacles", description: "Opportunity, Prosperity, New Venture"}, 
    {image: "37Pentacles02.jpeg", title: "Two of Pentacles", description: "Balancing Decisions, Priorities, Adapting to Change"}, 
    {image: "38Pentacles03.jpeg", title: "Three of Pentacles", description: "Teamwork, Collaboration, Building"}, 
    {image: "39Pentacles04.jpeg", title: "Four of Pentacles", description: "Conservation, Frugality, Security"}, 
    {image: "40Pentacles05.jpeg", title: "Five of Pentacles", description: "Need, Poverty, Insecurity"}, 
    {image: "41Pentacles06.jpeg", title: "Six of Pentacles", description: "Charity, Generosity, Sharing"}, 
    {image: "42Pentacles07.jpeg", title: "Seven of Pentacles", description: "Hard Work, Perseverance, Diligence"}, 
    {image: "43Pentacles08.jpeg", title: "Eight of Pentacles", description: "Apprenticeship, Passion, High Standards"}, 
    {image: "44Pentacles09.jpeg", title: "Nine of Pentacles", description: "Fruits of Labor, Rewards, Luxury"}, 
    {image: "45Pentacles10.jpeg", title: "Ten of Pentacles", description: "Legacy, Culmination, Inheritance"}, 
    {image: "46Pentacles11.jpeg", title: "Page of Pentacles", description: "Ambition, Desire, Diligence"}, 
    {image: "47Pentacles12.jpeg", title: "Knight of Pentacles", description: "Efficiency, Hard Work, Responsibility"}, 
    {image: "48Pentacles13.jpeg", title: "Queen of Pentacles", description: "Practicality, Creature Comforts, Financial Security"}, 
    {image: "49Pentacles14.jpeg", title: "King of Pentacles", description: "Abundance, Prosperity, Security"}, 
    {image: "50Swords01.jpeg", title: "Ace of Swords", description: "Breakthrough, Clarity, Sharp Mind"}, 
    {image: "51Swords02.jpeg", title: "Two of Swords", description: "Difficult Choices, Indecision, Stalemate"}, 
    {image: "52Swords03.jpeg", title: "Three of Swords", description: "Heartbreak, Suffering, Grief, Recovery"}, 
    {image: "53Swords04.jpeg", title: "Four of Swords", description: "Rest, Restoration, Contemplation"}, 
    {image: "54Swords05.jpeg", title: "Five of Swords", description: "Unbridled Ambition, Win At All Costs, Sneakiness"}, 
    {image: "55Swords06.jpeg", title: "Six of Swords", description: "Transition, Leaving Behind, Moving On"}, 
    {image: "56Swords07.jpeg", title: "Seven of Swords", description: "Deception, Trickery, Tactics and Strategy"}, 
    {image: "57Swords08.jpeg", title: "Eight of Swords", description: "Imprisonment, Entrapment, Self-Victimization"}, 
    {image: "58Swords09.jpeg", title: "Nine of Swords", description: "Anxiety, Hopelessness, Trauma"}, 
    {image: "59Swords10.jpeg", title: "Ten of Swords", description: "Failure, Collapse, Defeat"}, 
    {image: "60Swords11.jpeg", title: "Page of Swords", description: "Curiosity, Restlessness, Mental Energy"}, 
    {image: "61Swords12.jpeg", title: "Knight of Swords", description: "Action, Impulsiveness, Defending Beliefs"}, 
    {image: "62Swords13.jpeg", title: "Queen of Swords", description: "Complexity, Perceptiveness, Clear Mindedness"}, 
    {image: "63Swords14.jpeg", title: "King of Swords", description: "Head Over Heart, Discipline, Truth"}, 
    {image: "64Wands01.jpeg", title: "Ace of Wands", description: "Creation, Willpower, Inspiration, Desire"}, 
    {image: "65Wands02.jpeg", title: "Two of Wands", description: "Planning, Making Decisions, Leaving Home"}, 
    {image: "66Wands03.jpeg", title: "Three of Wands", description: "Looking Ahead, Expansion, Rapid Growth"}, 
    {image: "67Wands04.jpeg", title: "Four of Wands", description: "Community, Home, Celebration"}, 
    {image: "68Wands05.jpeg", title: "Five of Wands", description: "Competition, Rivalry, Conflict"}, 
    {image: "69Wands06.jpeg", title: "Six of Wands", description: "Victory, Success, Public Reward"}, 
    {image: "70Wands07.jpeg", title: "Seven of Wands", description: "Perseverance, Defensive, Maintaining Control"}, 
    {image: "71Wands08.jpeg", title: "Eight of Wands", description: "Rapid Action, Movement, Quick Decisions"}, 
    {image: "72Wands09.jpeg", title: "Nine of Wands", description: "Resilience, Grit, Last Stand"}, 
    {image: "73Wands10.jpeg", title: "Ten of Wands", description: "Accomplishment, Responsibility, Burden"}, 
    {image: "74Wands11.jpeg", title: "Page of Wands", description: "Exploration, Excitement, Freedom"}, 
    {image: "75Wands12.jpeg", title: "Knight of Wands", description: "Action, Adventure, Fearlessness"}, 
    {image: "76Wands13.jpeg", title: "Queen of Wands", description: "Courage, Determination, Joy"}, 
    {image: "77Wands14.jpeg", title: "King of Wands", description: "Big Picture, Leader, Overcoming Challenges"}, 

];

const shuffleButton = document.getElementById('shuffle-button'); 
const reShuffleButton = document.getElementById("SHUFFLE"); 
const cards = document.querySelectorAll('.cards-image img');
const cardTitles = document.querySelectorAll('.card h3'); 
const cardDescriptions = document.querySelectorAll('.description'); 



