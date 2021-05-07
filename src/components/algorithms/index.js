import bubbleSortAsync from './bubbleSortAsync'
import selectionSortAsync from './selectionSortAsync'
import insertionSortAsync from './insertionSortAsync'

const sortingTypeDict = 
{
    "Selection_Sort": selectionSortAsync,
    "Bubble_Sort": bubbleSortAsync,
    "Insertion_Sort": bubbleSortAsync,
};

export const getSortingAlgorithmFunc = sortingType => sortingTypeDict[sortingType];