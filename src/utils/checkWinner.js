export const checkWinner = (markedSquares) => {
	const winningCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	for (let i = 0; i < winningCombos.length; i++) {
		const [index1, index2, index3] = winningCombos[i];
		if (
			markedSquares[index1] &&
			markedSquares[index1] === markedSquares[index2] &&
			markedSquares[index1] === markedSquares[index3]
		) {
			return markedSquares[index1];
		}
	}
	return null;
};