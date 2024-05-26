
import chalk from 'chalk';
import readlineSync from 'readline-sync';


class Character {
    constructor(name) {
        this.name = chalk.bold(name);
        this.mood = '😊';
        this.health = 100;
    }
  
    //update character's mood based on weather
    updateMood(weatherCondition) {
        const reactions = {
            '☀️': chalk.yellow ('Excited for the sunny weather!'),
            '🌧️': chalk.blue ('Feeling a bit down because of the rain...'),
            '⛈️': chalk.magenta ('Nervous about the thunderstorm!'),
            '❄️': chalk.cyan ('Cold but determined in the snow '),
            '🌪️': chalk.red ('Terrified by the tornado!')
        };

        this.mood = reactions[weatherCondition] || 'Neutral';
    
    }

    //display character's mood
    displayMood() {
        console.log(`${this.name} is feeling ${this.mood}`);
    }

    //reduce character's health
    reduceHealth(amount) {
        this.health -= amount;
        console.log(chalk.red (`${this.name} took ${amount} damage! Health: ${this.health}`));
    }

    //recover character's health
    recoverHealth(amount) {
        this.health += amount;
        console.log(chalk.green(`${this.name} recovered ${amount} health! Health: ${this.health}`));
    }
}

// simulate weather conditions
function simulateWeather() {
  const conditions = ['☀️', '🌧️', '⛈️', '❄️', '🌪️']; 
  const randomIndex = Math.floor(Math.random() * conditions.length);
  return conditions[randomIndex];
}

// simulate an encounter based on weather
function simulateEncounter(character, weatherCondition) {
  console.log('You encountered a weather condition:', weatherCondition);
  
    
    //different outcomes based on weather
    //The switch statement is used to perform different actions based on different conditions.
    switch (weatherCondition) {
        case '☀️':
            console.log(chalk.yellow ('It`s a beautiful sunny day!'));
            character.recoverHealth(10);
            break;
        case '🌧️':
            console.log(chalk.blue ('It`s raining. You are wet and have a cold'));
            character.reduceHealth(10);
            break;
        case '⛈️':
            console.log(chalk.magenta ('Thunder roars and lightning strikes! Seek shelter!'));
            character.reduceHealth(15);
            break;
        case '❄️':
            console.log(chalk.cyan ('It`s snowing. You feel incredible!'));
            character.recoverHealth(15);
            break;
        case '🌪️':
            console.log(chalk.red ('A tornado is coming your way! Run!'));
            character.reduceHealth(30);
            break;
        default:
            console.log(chalk.grey('The weather is calm, nothing happens'));
    }

    character.updateMood(weatherCondition);
    character.displayMood();
}

// game loop
function main() {
    const character = new Character ('Adventurer');
    console.log(chalk.bold ('Your journey begins!'));

    //the adventurer needs to survive a specified number of encounters to win the game
    const totalEncounters = 10;
    let encountersSurvived = 0;
    
    while (character.health > 0 && encountersSurvived < totalEncounters){
        const weatherCondition = simulateWeather();
        readlineSync.question(chalk.green ('Press any key to continue...'))
        console.clear();
        simulateEncounter(character, weatherCondition);
        encountersSurvived++;

        if(character.health <= 0){
            console.log(chalk.red ('Game over! Your journey ends'));
            break;
      } 
    }  
   
    if (encountersSurvived >= totalEncounters){
        console.log(chalk.green ('Congratulations! You survived the journey'));  

    }
}

main();







