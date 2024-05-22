
import chalk from 'chalk';
import readlineSync from 'readline-sync';


const character = {
    name: chalk.bold('Adventurer'),
    mood: '😊',
    health: 100,

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
    
    },

    //display character's mood
    displayMood() {
        console.log(`${this.name} is feeling ${this.mood}`);
    },

    //reduce character's health
    reduceHealth(amount) {
        this.health -= amount;
        console.log(chalk.red (`${this.name} took ${amount} damage! Health: ${this.health}`));
    }
};

// simulate weather conditions
function simulateWeather() {
  const conditions = ['☀️', '🌧️', '⛈️', '❄️', '🌪️']; // Emojis representing weather conditions
  const randomIndex = Math.floor(Math.random() * conditions.length);
  return conditions[randomIndex];
}

// simulate an encounter based on weather
function simulateEncounter(weatherCondition) {
  console.log('You encountered a weather condition:', weatherCondition);
  
    
    //different outcomes based on weather
    //The switch statement is used to perform different actions based on different conditions.
    switch (weatherCondition) {
        case '☀️':
            console.log(chalk.yellow ('It`s a beautiful sunny day!'));
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
            console.log(chalk.cyan ('It`s snowing. You feel cold and tired'));
            character.reduceHealth(20);
            break;
        case '🌪️':
            console.log(chalk.red ('A tornado is coming your way! Run!'));
            character.reduceHealth(30);
            break;
    }

    character.updateMood(weatherCondition);
    character.displayMood();
}

// game loop
function main() {
    console.log(chalk.bold ('Your journey begins!'));
   if (character.health > 0){
        const weatherCondition = simulateWeather();
        readlineSync.question(chalk.green ('Press any key to continue...'))
        simulateEncounter(weatherCondition);
    }

    console.log(chalk.red ('Game over! Your journey ends'));  
}

main();







