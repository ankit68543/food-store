import React from 'react';
import './App.css';
import FoodList from './Components/Food/List/food.list'
import AddList from './Components/Food/Add/food.create'
import { useQuery } from '@apollo/client';
import { getFoods } from './Queries/APIQuery';

function App() {
  const { loading, error, data } = useQuery(getFoods);
  const handleDataFromChild = (received:any) => {
    console.log('data',received)
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <FoodList data={data} />
      <AddList onData={handleDataFromChild} />
    </div>
  );
}

export default App;
