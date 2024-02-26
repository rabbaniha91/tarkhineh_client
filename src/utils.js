export const saveFoodsToLocalStorage = (food) => {
    let foods = []
    const prevItems = JSON.parse(localStorage.getItem("cartItems"));
    if (prevItems !== null) {
        const existFood = prevItems.find(item => {
            return item.foodName === food.foodName
        })
        console.log(existFood)
        if (existFood !== undefined) return

        foods = [...prevItems, food]
    } else {
        foods.push(food)
    }

    localStorage.setItem("cartItems", JSON.stringify(foods))
}

export const checkCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    if (cartItems === null || cartItems.length === 0) return false
    else return true
}


export const getCartItems = () => {
    return JSON.parse(localStorage.getItem("cartItems"))
}

export const increaseFoodCounts = (name) => {
    const foods = getCartItems()
    if (foods !== null) {
        const newFoods = foods.map(food => {
            food.foodName === name && food.count++
            return food
        })
        localStorage.setItem("cartItems", JSON.stringify(newFoods))
    }
}

export const decreaseFoodCount = (name) => {
    const foods = getCartItems()
    if (foods !== null) {
        const newFoods = foods.map(food => {
            food.foodName === name && food.count > 1 && food.count--
            return food
        })
        localStorage.setItem("cartItems", JSON.stringify(newFoods))
    }
}


export const deleteFoodFromCart = (name) => {
    const foods = getCartItems()
    if (foods !== null) {
        const newFoods = foods.filter(food => {
            return food.foodName !== name
        })

        localStorage.setItem("cartItems", JSON.stringify(newFoods))
    }
}