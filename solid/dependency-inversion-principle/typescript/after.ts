abstract class Dish {
    private ingredients: string[]
}

class Pizza extends Dish {
}

class Hotdog extends Dish {

}

class Restaurant {
    public prepareDish(dish: Dish): void {
    }  
}

