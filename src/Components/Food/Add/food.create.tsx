import React from 'react';
import './food.create.css';
import { addFood } from '../../../Mutations/APIMutation'
import { useMutation } from '@apollo/client';

function CreateFood({ onData }:any) {
  let input: any;
  const [addFoodfn, { data, loading, error }] = useMutation(addFood);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addFoodfn({
            variables: {
              food: {
                name: input.value,
                id: "6d969a01-54d7-467d-b1c0-359babc42add",
                allergens: [
                  {
                    id: "6d969a01-54d7-467d-b1c0-359babc42add",
                    name: input.value
                  }
                ]
              }
            }
          });
          onData('testing from data');
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Food</button>
      </form>
   
    </div>
  );
}

export default CreateFood;
