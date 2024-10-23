export const getNumbersArr = (count: number) => {
	const arr: number[] = [];
	const max = count === 0 ? 10000 : count;
	for (let i = 0; i < max; i++) {
		arr.push(i);
	}
	return arr;
};
export const parseIsNaN = (v: unknown) => {
	const num = Number(v);
	return Number.isNaN(num);
};
/**
 * Returns a number or the min or max if it's out of bounds.
 *
 * Is inclusive with min and max by default.
 */
export const clampNumber = (
	num: number,
	min: number,
	max: number,
	nonInclusive?: boolean
) => {
	const underMin = nonInclusive ? num < min : num <= min;
	if (underMin) return min;
	const overMax = nonInclusive ? num > max : num >= max;
	if (overMax) return max;
	return num;
};
