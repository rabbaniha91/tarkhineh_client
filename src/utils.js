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

export const calculateOffers = (array) => {
    let offers = 0
    array.forEach(item => {
        if (item.offer > 0) {
            offers += (item.price * (item.offer / 100)) * item.count
        }
    })
    return offers;
}

export const calculateTotalPrice = (array) => {
    let totalPrice = 0;
    array.forEach(item => {
        if (item.offer > 0) {
            totalPrice += (item.price * ((100 - item.offer) / 100) * item.count)
        } else {
            totalPrice += item.price * item.count
        }
    })

    return totalPrice
}


export const clearCartItems = () => {
    localStorage.clear("cartItems")
}

export const setLoginUser = () => {
    localStorage.setItem("userLogin", JSON.stringify(true))
}

export const setlogoutUser = () => {
    localStorage.setItem("userLogin", JSON.stringify(false))
}

export const getLoginUser = () => {
    return JSON.parse(localStorage.getItem("userLogin"))
}