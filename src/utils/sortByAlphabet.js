export const sortByAlphabet = (array) =>
	array.sort((a, b) => a.city.localeCompare(b.city));
