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