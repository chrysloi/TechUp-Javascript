const team = {
    _players: [
        {firstName: 'Eloi', lastName: 'Chrysanthe', age:'20'},
        {firstName: 'Elvis', lastName: 'Irumva', age:'21'},
        {firstName: 'Chris', lastName: 'Rugamba', age:'18'}
    ],
    _games: [
        {opponent: 'Rayon fc', teamPoints: 3, opponentPoints: 0},
        {opponent: 'Apr fc', teamPoints: 1, opponentPoints: 1},
        {opponent: 'Gasogi fc', teamPoints: 0, opponentPoints: 3}
    ],
    get players() {
        if (this._players.length === 0) return undefined
        return this._players;
    },
    get games() {
        if (this._games.length === 0) return undefined
        return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        player = {newFirstName, newLastName, newAge}
        return this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        game = {newOpponent, newTeamPoints, newOpponentPoints}
        return this._games.push(game);
    }
}

team.addPlayer('Bugs', 'Bunny', '76')
console.log(team._players);

team.addGame('Titans', '100', '98');
console.log(team._games);