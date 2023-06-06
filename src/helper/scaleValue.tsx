//inspired by https://stackoverflow.com/a/23202637
export function scaleValue(number: number, inMin: number, inMax: number, outMin: number, outMax: number) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
