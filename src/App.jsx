import { useState } from 'react';
import data from './data';
import Menu from './Menu';

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
      <Menu filtering={filtering} categories={categories} />
      <div className='section-center'>
        {listOfItems.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <article key={id} className='menu-item'>
              <img className='img' src={img} alt={title} />
              <div className='item-info'>
                <header>
                  <h5>{title}</h5>
                  <span className='item-price'>{price}</span>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </main>
  );
};
export default App;
