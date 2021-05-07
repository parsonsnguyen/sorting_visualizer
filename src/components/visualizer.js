import {COLORs} from './constants'

export async function swapPosition_of_2Values(firstId, secondId) {
  return new Promise((resolve, _) => {
    setTimeout(() => {
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
      resolve();
    }, window.delaySpeed);
  });
}

export async function markColor_of_ComparingValues(firstId, secondId) {
  await changeColor(firstId, COLORs.ComparingValue);
  await changeColor(secondId, COLORs.ComparingValue);
}

export async function markColor_of_NormalValues(firstId, secondId) {
  await changeColor(firstId, COLORs.NormalValue);
  await changeColor(secondId, COLORs.NormalValue);
}

export async function changeColor(itemId, color) {
  return new Promise((resolve, __) => {
    setTimeout(() => {
      const element = document.getElementById(`item-${itemId}`);
      element.style.backgroundColor = color;
      resolve();
    }, window.delaySpeed);
  });
}