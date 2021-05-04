export const sortingAlgorithms = 
[{
    "type": "Selection_Sort",
    "name": "Selection Sort",
    "timeComplexity": {
        "best": "&Theta;(n<sup>2</sup>)",
        "average": "&Theta;(n<sup>2</sup>)",
        "worst": "&Theta;(n<sup>2</sup>)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(1)"
    }
},
{
    "type": "Bubble_Sort",
    "name": "Bubble Sort",
    "timeComplexity": {
        "best": "&Theta;(n)",
        "average": "&Theta;(n<sup>2</sup>)",
        "worst": "&Theta;(n<sup>2</sup>)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(1)"
    }
},
{
    "type": "Insertion_Sort",
    "name": "Insertion Sort",
    "timeComplexity": {
        "best": "&Theta;(n)",
        "average": "&Theta;(n<sup>2</sup>)",
        "worst": "&Theta;(n<sup>2</sup>)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(1)"
    }
},
{
    "type": "Quick_Sort",
    "name": "Quick Sort",
    "timeComplexity": {
        "best": "&Theta;(nlogn)",
        "average": "&Theta;(nlogn)",
        "worst": "&Theta;(n<sup>2</sup>)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(logn)"
    }
},
{
    "type": "Merge_Sort",
    "name": "Merge Sort",
    "timeComplexity": {
        "best": "&Theta;(nlogn)",
        "average": "&Theta;(nlogn)",
        "worst": "&Theta;(nlogn)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(n)"
    }
},

{
    "type": "Heap_Sort",
    "name": "Heap Sort",
    "timeComplexity": {
        "best": "&Theta;(nlogn)",
        "average": "&Theta;(nlogn)",
        "worst": "&Theta;(nlogn)"
    },
    "memoryComplexity": {
        "worst": "&Theta;(1)"
    }
}
];

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