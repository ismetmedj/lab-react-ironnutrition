import { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foodDB from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodDB);

  const handleAddFood = (food) => {
    // console.log(food);

    const copy = [...foods];
    copy.push(food);
    setFoods(copy);
  };

  return (
    <div>
      <Search callback={foods}></Search>

      <AddFoodForm handleAddFood={handleAddFood}> </AddFoodForm>
      <h1>Food Lists</h1>
      {/* <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      /> */}

      <div className="App">
        {foods.map((food) => {
          return <FoodBox {...food} />;
        })}
      </div>
    </div>
  );
}

export default App;
