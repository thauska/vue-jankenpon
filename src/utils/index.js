export const TOKEN_LIST = {
	ROCK: 'rock',
	PAPER: 'paper',
	SCISSORS: 'scissors',
	LIZARD: 'lizard',
	SPOCK: 'spock',
};

export const randomToken = () => {
	const tokens = Object.values(TOKEN_LIST);
	const randomIndex = Math.random() * tokens.length;
	return tokens[Math.floor(randomIndex)];
};

const tokenBeats = (player, house) => {
	const {
		ROCK,
		PAPER,
		SCISSORS,
		LIZARD,
		SPOCK,
	} = TOKEN_LIST;

	const beats = {
		[ROCK]: [LIZARD, SCISSORS],
		[PAPER]: [ROCK, SPOCK],
		[SCISSORS]: [PAPER, LIZARD],
		[LIZARD]: [SPOCK, PAPER],
		[SPOCK]: [SCISSORS, ROCK],
	};

	return beats[player].includes(house);
};

export const getResult = (player, house) => {
	if (player === house) {
		return 0;
	}

	const playerBeatsHouse = tokenBeats(player, house);
	return playerBeatsHouse ? 1 : -1;
};
