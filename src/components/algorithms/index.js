import bubbleSortAsync from './bubbleSortAsync'
import selectionSortAsync from './selectionSortAsync'

const sortingTypeDict = 
{
    "Selection_Sort": selectionSortAsync,
    "Bubble_Sort": bubbleSortAsync
};

export const getSortingAlgorithmFunc = sortingType => sortingTypeDict[sortingType];