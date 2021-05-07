import {swapArrItems} from '../utils'
import {COLORs} from '../constants'
import {changeColor, swapPosition_of_2Values, markColor_of_NormalValues} from '../visualizer'

export default async function insertionSortAsync(array) {
    for (let i = 1; i < array.length; i++)
    {
        let j = i, key = array[i];
        while (j > 0 && array[j - 1] > key)
        {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = key;
    }
}