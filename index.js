const cron = require('node-cron');
const say = require('say');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playWords(text) {
    say.speak(text, '', 1, (error) => {
        if (error) {
            console.error('Error while playing:', error);
        }
    });
}

function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function hourlyMessage() {
    const message = `Attention Attention This is the CTRS repeater, The current time is ${getCurrentTime()}.`;
    playWords(message);
    console.log('Played Hourly message');
}

function interactiveMode() {
    rl.question('Press any key to call the function. Press "q" to quit.\n', (answer) => {
        if (answer.toLowerCase() === 'q') {
            rl.close();
            return;
        }
        if (answer.toLowerCase() === 'n'){
            const message1 = `Attention Attention Nathan is gay, The current time is ${getCurrentTime()}.`;
            playWords(message1);
            console.log('Played nate message');
        }

        console.log('Calling the function...');
        interactiveMode();
    });
}

hourlyMessage();

cron.schedule('0 * * * *', () => {
    hourlyMessage();
});

// Enter interactive mode
interactiveMode();
