const team = {
  _players: [{
      firstName: 'George',
      lastName: 'Harrison',
      age: 30
    },
    {
      firstName: 'Joe',
      lastName: 'Bonamassa',
      age: 35,
    },
    {
      firstName: 'Mac',
      lastName: 'De Marco',
      age: 31
    }
  ],
  _games: [{
      opponent: 'Wachiturros',
      teamPoints: 256,
      opponentPoints: 99
    },
    {
      opponent: 'L-Gante',
      teamPoints: 512,
      opponentPoints: 80
    },
    {
      opponent: 'El Retutu',
      teamPoints: 128,
      opponentPoints: 256
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
    this.players.push(player);
  },
  addGame(opp, myPoints, oppPoints) {
    const game = {
      opponent: opp,
      teamPoints: myPoints,
      opponentPoints: oppPoints
    };
    this.games.push(game);
  }

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Count Dooku', 100, 240);
team.addGame('Darth Maul', 256, 67);
team.addGame('Darth Sidious', 350, 190);

console.log(team.players);