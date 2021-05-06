// import {prepareSwappingStep, swap, endSwappingStep} from './visualer.js'
import {swapArrItem} from '../utils'
import {prepareSwappingStep, swap, endSwappingStep} from '../visualizer'

export default async function bubbleSortAsync(array) {
  const length = array.length;
  for (let i = 0; i < length - 1; i++){
    let isSwapped = false;
    for (let j = 0; j < length - i - 1; j++) {
      await prepareSwappingStep(array[j], array[j + 1]);
      if (array[j] > array[j + 1]) {
        isSwapped = true;
        swapArrItem(array, j, j + 1);
        await swap(array[j], array[j + 1]);
      }
      await endSwappingStep(array[j], array[j + 1]);
    }

    if (!isSwapped) break;
  }
  return array;
}