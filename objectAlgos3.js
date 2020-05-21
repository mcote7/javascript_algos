/*
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.

  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)

  Side note (possible extra challenge version): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the available ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
    "organic fat": 99,
    "live squid": 1,
    "birds nest": 1,
    "fried flesh": 1,
    "spicy": 5,
    "gourmet memes": 4200,
    "crazy spice": 10
  };

  const available = {
    "organic fat": 990,
    "live squid": 1,
    "birds nest": 10,
    "fried flesh": 10,
    "spicy": 50,
    "gourmet memes": 42000,
    "sugar": 9001,
    "spice": 5,
    "everything nice": 1,
  };
  // Output: 1 because only 1 live squid is available
  // Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
  // Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'



  function getMaxServings(recipe, ingredients){
    // assume we can make infinite servings
    let limit = Infinity;

    // loop for each recipe key
    for (const requiredIngredient of Object.keys(recipe)){
        // pull amounts existing from both
        const amount = ingredients[requiredIngredient];
        const requiredAmount = recipe[requiredIngredient];

        // check if undefined or smaller than required amount
        if (ingredients.hasOwnProperty(requiredIngredient) || amount < requiredAmount){
            return 0;
        }

        // how many servings can be made based on this 1 ingredient
        let servingsPer = amount / requiredAmount;

        // lower the limit of servings we can make down from Infinity
        if(servingsPer < limit){
            limit = servingsPer;
        }
    }

    // did some division back there, let's floor to return an int
    return Math.floor(limit);
}


// source: Morley Tatro
  // Time complexity: O(4n) but constant is dropped -> O(n)
// 4n comes from counting .entries, .map, spread operator, .min which are all loops
// Space: O(2n) from .entries and .map array -> O(n)
const getMaxServing = (recipe, available) =>
    Math.min(
        ...Object.entries(recipe).map(([key, val]) => available[key] / val)
    ) || 0;