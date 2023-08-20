 
  type FoodQuery = {
    foods: [Food]
    foodByName(name: String): [Food]
    foodById(id: String): Food
  }
  
  type FoodMutation =  {
    addFood(food: FoodInput): Food
    deleteFood(id: String): Food
  }
  
  type Food = {
    id: String
    name: String
    allergens: [Allergen]
  }
  
  type FoodInput=  {
    id: String
    name: String
    allergens: [AllergenInput]
  }
  
  type AllergenInput=  {
    id: String
    name: String
  }
  
  type Allergen=  {
    id: String
    name: String
  }

  export {}
  