import React from 'react';
import './food.list.css';

function FoodList({ data }:any) {
  return (
    <div>
    <h2>Today's Menu</h2>
    <ul>
      {data && data.foods && data.foods.map((item:any) => (
        <li key={item.id}>
          {item.name}
          {item.allergens && item.allergens.length > 0 && (
            <ul>
              {item.allergens.map((allergen:any) => (
                <li key={allergen.id}>{allergen.name}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  </div>
  );
}

export default FoodList;
