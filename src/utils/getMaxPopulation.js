export const getMaxPopulation = (arr) =>
	Math.max.apply(
		null,
		arr.map((it) => it.population),
	);
