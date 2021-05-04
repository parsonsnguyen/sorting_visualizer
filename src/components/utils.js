export const generateNewArrayRandomly = size => {
    const array = [];
    for (let i = 1; i <= size; i++) array.push(i);

    return makeArrayItemsRandomly(array);
}

const makeArrayItemsRandomly = array => {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        swap(array, currentIndex, randomIndex);
    }
    return array;
}

const swap = (arr, firstIndex, secondIndex) => {
    const temporaryValue = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temporaryValue;
}