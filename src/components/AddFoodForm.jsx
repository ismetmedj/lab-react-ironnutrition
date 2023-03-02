import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
function AddFoodForm(props) {
  const { handleAddFood } = props;

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const handleNameChange = (event) => setName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);
  const handleServingsChange = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    const foodToCreate = {
      name,
      image,
      calories,
      servings,
    };
    // console.log(foodToCreate);
    handleAddFood(foodToCreate);
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={handleNameChange} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={image} type="text" onChange={handleImageChange} />

      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={calories} type="number" onChange={handleCaloriesChange} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={servings} type="number" onChange={handleServingsChange} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
