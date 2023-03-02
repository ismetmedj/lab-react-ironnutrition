import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {
  const foods = props.callback;
  // console.log(foods);

  const [search, setSearch] = useState('');

  const handleSearch = (event) => {
    setSearch(event.target.value);
    resultSearch(foods);
  };

  // console.log(foods[0].name.toLowerCase());

  const resultSearch = (arrayOfFoods) => {
    const caseSensitiveArray = [];
    // console.log(foods);
    arrayOfFoods.forEach((element) => {
      element.name = element.name.toLowerCase();
      // console.log(element.name);
      caseSensitiveArray.push(element);
    });

    const matchArray = arrayOfFoods.filter((element) =>
      element.name.includes(search)
    );
    console.log(search);

    console.log(matchArray);
    // const matchArray = array.filter((element) => element.name.includes(search));
  };

  //   const listWithNoDuplicates = moviesDB.filter(
  //       (movie) => !titlesOfExistingMovies.includes(movie.title)
  //     )

  // const copy = [...contacts];
  // copy.sort((a, b) => a.name.localeCompare(b.name));
  // setContacts(copy);

  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;
