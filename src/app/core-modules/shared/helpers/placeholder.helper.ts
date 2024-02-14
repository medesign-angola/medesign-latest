export function generatePlaceholdersArray(count: number): number[]{
    let array: number[] = [];
    for (let index = 0; index < count; index++) {
        array.push(index);
    }
    return array;
}