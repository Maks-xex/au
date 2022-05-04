export const shiftToBegin = (array, value) =>
	array.sort((a, b) =>
		a.population == value ? -1 : b.population == value ? 1 : 0,
	);
