export const saveFoodsToLocalStorage = (food) => {
    let foods = []
    const prevItems = JSON.parse(localStorage.getItem("cartItems"));
    if (prevItems !== null) {
        foods = [...prevItems, food]
    } else {
        foods.push(food)
    }
    localStorage.setItem("cartItems", JSON.stringify(foods))
}