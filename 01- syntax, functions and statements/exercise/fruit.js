function calcFruits(fruit, weight, money) { //weight in grams
    const weightInKG = weight / 1000
    const moneyNeeded = weightInKG * money;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruit}.`)
}

calcFruits('orange', 2500, 1.80)