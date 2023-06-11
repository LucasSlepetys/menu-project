import { useState } from 'react';
import data from './data';
import Categories from './menuComponent/Categories';
import Menu from './menuComponent/Menu';

//adding all categories from data.js to a list
const allCategories = ['all'];
const categories_from_data = new Set(data.map((item) => item.category));
categories_from_data.forEach((category) => {
  allCategories.push(category);
});

const App = () => {
  const [listOfItems, setListOfItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  function filtering(type) {
    if (type === 'all') {
      setListOfItems(data);
    } else {
      setListOfItems(
        data.filter((item) => {
          return item.category === type;
        })
      );
    }
  }

  return (
    <main>
      <h1 className='title'>Our Menu</h1>
      <div className='title-underline'></div>
      <Categories filtering={filtering} categories={categories} />
      <Menu listOfItems={listOfItems} />
    </main>
  );
};
export default App;
