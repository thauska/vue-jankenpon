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
