/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(timer) {
  if (timer === 0) return 'Lasagna is done.'
  if (!Boolean(timer)) return 'You forgot to set the timer.'
  return 'Not done, please wait.'
}

export function preparationTime(layers, timePerLayer) {
  if (!Boolean(timePerLayer)) timePerLayer = 2
  return layers.length * timePerLayer
}

export function quantities(layers) {
  let quantNoodles = 0, quantSauce = 0
  for (let i in layers) {
    if (layers[i] === 'sauce') quantSauce += 0.2
    if (layers[i] === 'noodles') quantNoodles += 50
  }
  return { noodles: quantNoodles, sauce: quantSauce}
}

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1])
}

export function scaleRecipe(recipe, portions) {
  let portionsRecipe = {}
  for (let obj in recipe) {
    portionsRecipe[obj] = recipe[obj]/2 * portions
  }
  return portionsRecipe
  
}