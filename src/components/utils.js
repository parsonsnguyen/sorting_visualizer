export const getGUID = () => "id" + Math.random().toString(16).slice(2);

export const generateNewArrayRandomly = size => {
    const array = [];
    for (let i = 1; i <= size; i++) array.push(i);

    return makeArrayItemsRandomly(array);
}

export const swapArrItems = (arr, firstIndex, secondIndex) => {
    const temporaryValue = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temporaryValue;
}

// Helpers
const makeArrayItemsRandomly = array => {
    let currentIndex = array.length, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        swapArrItems(array, currentIndex, randomIndex);
    }
    return array;
}