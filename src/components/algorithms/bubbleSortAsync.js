import {swapArrItems} from '../utils'
import {changeColor, markColor_of_ComparingValues, swapPosition_of_2Values, markColor_of_NormalValues} from '../visualizer'
import {COLORs} from '../constants'

export default async function bubbleSortAsync(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++){
    let isSwapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      await markColor_of_ComparingValues(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        isSwapped = true;
        swapArrItems(array, j, j + 1);
        await swapPosition_of_2Values(array[j], array[j + 1]);
      }
      await markColor_of_NormalValues(array[j], array[j + 1]);
      await changeColor(array[j + 1], COLORs.SortedValue); // Sorted value
    }

    if (!isSwapped) {
      for (let j = 0; j < length - i - 1; j++) 
        await changeColor(array[j], COLORs.SortedValue); // Sorted value
      break;
    }
  }
  return array;
}