// import {prepareSwappingStep, swap, endSwappingStep} from './visualer.js'
const sortingTypeDict = {
  "Selection_Sort": selectionSortAsync,
  "Bubble_Sort": bubbleSortAsync
};

export const getSortingAlgorithmFunc = sortingType => sortingTypeDict[sortingType];
async function selectionSortAsync(array) {}

async function bubbleSortAsync(array) {
  const length = array.length;
  let isSwapped = false;
  for (let i = 0; i < length - 1; i++){
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

async function prepareSwappingStep(firstId, secondId) {
  await changeBackgroundColor(firstId, "red");
  await changeBackgroundColor(secondId, "red");
}

async function swap(firstId, secondId) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log("swapping");
      const firstElement = document.getElementById(`item-${firstId}`);
      const secondElement = document.getElementById(`item-${secondId}`);
      const originalValues = {
        firstItem: {id: firstElement.id, height: firstElement.offsetHeight, content: firstElement.innerHTML },
        secondItem: {id: secondElement.id, height: secondElement.offsetHeight, content: secondElement.innerHTML },
      };
      firstElement.style.height = originalValues.secondItem.height + "px";
      firstElement.id = originalValues.secondItem.id;
      firstElement.innerHTML = originalValues.secondItem.content;

      secondElement.style.height = originalValues.firstItem.height + "px";
      secondElement.id = originalValues.firstItem.id;
      secondElement.innerHTML = originalValues.firstItem.content;
      console.log("swap done");
      resolve();
    }, window.delaySpeed);
  });
}

async function endSwappingStep(firstId, secondId) {
  await changeBackgroundColor(firstId, "#343a40");
  await changeBackgroundColor(secondId, "#343a40");
}

async function changeBackgroundColor(itemId, color) {
  return new Promise((resolve, __) => {
    setTimeout(() => {
      const element = document.getElementById(`item-${itemId}`);
      element.style.backgroundColor = color;
      resolve();
    }, window.delaySpeed);
  });
}

const swapArrItem = (arr, firstIndex, secondIndex) => {
  const temporaryValue = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temporaryValue;
};

