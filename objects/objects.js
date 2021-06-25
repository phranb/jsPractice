// let spaceship = {
//     'Fuel Type' : 'Turbo Fuel',
//     homePlanet : 'Earth',
//     color: 'silver',
//     'Secret Mission' : 'Discover life outside of Earth.'
//   };
  
//   // Write your code below
//   spaceship.color = 'glorious gold';
//   spaceship.numEngines = 8;
//   delete spaceship['Secret Mission'];
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}
alienShip.retreat();
alienShip.takeOff();