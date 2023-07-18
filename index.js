const cron = require('node-cron');
const say = require('say');

function playWords(text) {
    say.speak(text, '', 1, (error) => {
        if (error) {
            console.error('Error while playing :', error);
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
    const message = `This is the, CTRS repeater. The current time is ${getCurrentTime()}.`;
    playWords(message);
    console.log('Played Hourly message');

}
hourlyMessage();

cron.schedule('0 * * * *', () => {
    hourlyMessage();
});