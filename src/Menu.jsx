function Menu({ filtering, categories }) {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => filtering(category)}
          className='btn'
          type='button'
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default Menu;
