// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     functionality: {
//       beep() {
//         console.log('Beep Boop');
//       },
//       fireLaser() {
//         console.log('Pew Pew');
//       },
//     }
//   };

// const { functionality } = robot;
// functionality.beep();

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({
    laserBlaster: true,
    voiceRecognition: true
}, robot);

console.log(newRobot);