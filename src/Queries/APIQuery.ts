import { gql } from '@apollo/client';

export const getFoods = gql`
query getFoods {
  foods {
    id
    name
    allergens{
      id
      name
    }
  }
}
`;

export const getFoodByName = gql`
query foodByName($name:String) {
    foodByName(name: $name){
      id
      name
      allergens{
        id
        name
      }
    }
  }
`;