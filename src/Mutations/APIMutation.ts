import { gql } from '@apollo/client';

export const addFood = gql`
mutation addFood($food:FoodInput) {
  addFood(food: $food){
    id
    name
    allergens{
      id
      name
    }
  }
}
`;
