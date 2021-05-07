import {swapArrItems} from '../utils'
import {COLORs} from '../constants'
import {changeColor, swapPosition_of_2Values, markColor_of_NormalValues} from '../visualizer'

export default async function selectionSortAsync(array) {
  for (let i = 0; i < array.length; i++) {
      let minIndex = i, minValue = array[i];
      await changeColor(minValue, COLORs.CandidateValue);

      for (let j = i + 1; j < array.length; j++) {
          const currentValue = array[j];
          await changeColor(currentValue, COLORs.ComparingValue);
          if (currentValue < minValue) {
              await changeColor(minValue, COLORs.NormalValue);
              await changeColor(currentValue, COLORs.CandidateValue);
              minIndex = j;
              minValue = currentValue;
          } else {
              await changeColor(currentValue, COLORs.NormalValue);
          }
      }

      if (minIndex !== i) {
          await swapPosition_of_2Values(minValue, array[i]);
          swapArrItems(array, minIndex, i);
          await markColor_of_NormalValues(minValue, array[i]);
      }
      await changeColor(minValue, COLORs.SortedValue);
  }
}