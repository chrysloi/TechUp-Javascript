const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck){
        if (typeof mealToCheck === 'string') return this._meal = mealToCheck;
        return undefined;
    },
    set price(priceToCheck){
        if (typeof priceToCheck === 'number') return this._price = priceToCheck;
        return undefined;
    },
    get todaysSpecial() {
        if (this._meal != "" && this._price != 0) {
            return "Today\'s special is " + this._meal + " for $" + this._price
        } else {
            return "Meal or price was not set correctly!"
        }
    }
}


menu.price = 5
menu.meal = 'food'

console.log(menu.todaysSpecial);

