export async function prepareSwappingStep(firstId, secondId) {
    await changeBackgroundColor(firstId, "red");
    await changeBackgroundColor(secondId, "red");
  }
  
export async function swap(firstId, secondId) {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        const firstElement = document.getElementById(`item-${firstId}`);
        const secondElement = document.getElementById(`item-${secondId}`);
        const originalValues = {
          firstItem: {value: firstId, height: firstElement.offsetHeight, content: firstElement.innerHTML },
          secondItem: {value: secondId, height: secondElement.offsetHeight, content: secondElement.innerHTML },
        };
        firstElement.style.height = originalValues.secondItem.height + "px";
        firstElement.id = `item-${originalValues.secondItem.value}`;
        firstElement.innerHTML = originalValues.secondItem.content;
  
        secondElement.style.height = originalValues.firstItem.height + "px";
        secondElement.id = `item-${originalValues.firstItem.value}`;
        secondElement.innerHTML = originalValues.firstItem.content;
        resolve();
      }, window.delaySpeed);
    });
  }
  
export  async function endSwappingStep(firstId, secondId) {
    await changeBackgroundColor(firstId, "#343a40");
    await changeBackgroundColor(secondId, "#343a40");
  }
  
export async function changeBackgroundColor(itemId, color) {
    return new Promise((resolve, __) => {
      setTimeout(() => {
        const element = document.getElementById(`item-${itemId}`);
        element.style.backgroundColor = color;
        resolve();
      }, window.delaySpeed);
    });
  }