// List of Pokémon names (first 151 original Pokémon)
const pokemonList = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", 
    "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", 
    "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", 
    "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", 
    "Sandshrew", "Sandslash", "Nidoran", "Nidorina", "Nidoqueen", "Nidorino", 
    "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", 
    "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", 
    "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", 
    "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", 
    "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", 
    "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", 
    "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", 
    "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", 
    "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", 
    "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", 
    "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", 
    "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", 
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", 
    "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", 
    "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", 
    "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", 
    "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", 
    "Mewtwo", "Mew"
];

// List of drug names (medications, prescriptions, treatments)
const drugList = [
    "Lipitor", "Nexium", "Plavix", "Advair", "Abilify", "Seroquel", "Singulair", 
    "Crestor", "Actos", "Epogen", "Cymbalta", "Humira", "Avastin", "Rituxan", 
    "Enbrel", "Remicade", "Copaxone", "Neulasta", "Lantus", "Avandia", "Spiriva", 
    "Diovan", "Effexor", "Lexapro", "Truvada", "Atripla", "Januvia", "Vytorin", 
    "Lyrica", "Gleevec", "Herceptin", "Lucentis", "Namenda", "Lovenox", "Zetia", 
    "Celebrex", "Provigil", "Levaquin", "Risperdal", "Symbyax", "Flomax", "Valtrex", 
    "Imitrex", "Geodon", "Vyvanse", "Adderall", "Concerta", "Ritalin", "Strattera", 
    "Embeda", "Cialis", "Viagra", "Revlimid", "Clozaril", "Prozac", "Zoloft", "Paxil", 
    "Wellbutrin", "Pristiq", "Lunesta", "Ambien", "Xanax", "Klonopin", "Valium", 
    "Ativan", "Oxycontin", "Vicodin", "Percocet", "Fentanyl", "Suboxone", "Methadone", 
    "Cytomel", "Synthroid", "Macrobid", "Bactrim", "Keflex", "Cipro", "Zithromax", 
    "Diflucan", "Monistat", "Nasonex", "Flonase", "Allegra", "Claritin", "Zyrtec", 
    "Tamiflu", "Relenza", "Humulin", "Novolog", "Cozaar", "Hyzaar", "Prinivil", 
    "Zestril", "Accupril", "Altace", "Coreg", "Toprol", "Norvasc", "Cardizem", 
    "Coumadin", "Plavix", "Prilosec", "Prevacid", "Protonix", "Aciphex", "Dexilant", 
    "Propranolol", "Verapamil", "Digoxin", "Lamictal", "Depakote", "Tegretol", 
    "Topamax", "Neurontin", "Carbatrol", "Trilafon", "Adapin", "Sinequan", "Amitid", 
    "Norpramin", "Tofranil", "Pamelor", "Luvox", "Celexa", "Zanaflex", "Flexeril", 
    "Toradol", "Relafen", "Indocin", "Voltaren", "Naprosyn", "Mobic", "Arthrotec", 
    "Lidoderm", "Lortab", "Tylenol", "Motrin", "Aleve", "Midrin", "Imitrex", "Zomig", 
    "Maxalt", "Desyrel", "Serzone", "Remeron", "Surmontil", "Thorazine", "Mellaril", 
    "Stelazine", "Navane", "Prolixin", "Haldol", "Loxitane", "Moban", "Asendin"
];

// Game state
let currentName = '';
let currentType = '';
let score = 0;
let highScore = localStorage.getItem('highScore') || 0;
let lives = 3;
let usedNames = new Set();

// DOM elements
const nameElement = document.getElementById('name-to-guess');
const scoreElement = document.getElementById('score');
const highScoreElement = document.getElementById('high-score');
const resultElement = document.getElementById('result');
const resultTextElement = document.getElementById('result-text');
const correctAnswerElement = document.getElementById('correct-answer');
const nextButton = document.getElementById('next-btn');
const pokemonButton = document.getElementById('pokemon-btn');
const drugButton = document.getElementById('drug-btn');
const gameOverElement = document.getElementById('game-over');
const finalScoreElement = document.getElementById('final-score');
const playAgainButton = document.getElementById('play-again-btn');

// Initialize the game
function initGame() {
    score = 0;
    lives = 3;
    usedNames.clear();
    scoreElement.textContent = score;
    highScoreElement.textContent = highScore;
    gameOverElement.classList.add('hidden');
    resultElement.classList.add('hidden');
    
    // Show game buttons
    pokemonButton.style.display = 'block';
    drugButton.style.display = 'block';
    
    // Generate first name
    generateNewName();
}

// Generate a new name to guess
function generateNewName() {
    // 50% chance of choosing Pokemon or Drug
    const isPokemon = Math.random() < 0.5;
    
    let name;
    let attempts = 0;
    const maxAttempts = 50; // Prevent infinite loop
    
    do {
        if (isPokemon) {
            const randomIndex = Math.floor(Math.random() * pokemonList.length);
            name = pokemonList[randomIndex];
            currentType = 'pokemon';
        } else {
            const randomIndex = Math.floor(Math.random() * drugList.length);
            name = drugList[randomIndex];
            currentType = 'drug';
        }
        attempts++;
    } while (usedNames.has(name) && attempts < maxAttempts);
    
    usedNames.add(name);
    currentName = name;
    nameElement.textContent = name;
}

// Check the player's answer
function checkAnswer(guess) {
    const isCorrect = (guess === currentType);
    
    // Show result
    resultElement.classList.remove('hidden', 'correct', 'incorrect');
    resultElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        resultTextElement.textContent = 'Correct!';
        score++;
        scoreElement.textContent = score;
        
        // Update high score if needed
        if (score > highScore) {
            highScore = score;
            localStorage.setItem('highScore', highScore);
            highScoreElement.textContent = highScore;
        }
    } else {
        resultTextElement.textContent = 'Wrong!';
        lives--;
        
        if (lives <= 0) {
            gameOver();
            return;
        }
    }
    
    correctAnswerElement.textContent = `${currentName} is ${currentType === 'pokemon' ? 'a Pokémon' : 'a drug'}`;
}

// Game over function
function gameOver() {
    gameOverElement.classList.remove('hidden');
    finalScoreElement.textContent = score;
    resultElement.classList.add('hidden');
    
    // Hide game buttons
    pokemonButton.style.display = 'none';
    drugButton.style.display = 'none';
}

// Event listeners
pokemonButton.addEventListener('click', function() {
    checkAnswer('pokemon');
});

drugButton.addEventListener('click', function() {
    checkAnswer('drug');
});

nextButton.addEventListener('click', function() {
    resultElement.classList.add('hidden');
    generateNewName();
});

playAgainButton.addEventListener('click', function() {
    initGame();
});

// Start the game
initGame(); 