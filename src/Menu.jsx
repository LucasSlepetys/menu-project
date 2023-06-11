import MenuItem from './MenuItem';

function Menu({ listOfItems }) {
  return (
    <div className='section-center'>
      {listOfItems.map((item) => {
        return (
          <article key={item.id} className='menu-item'>
            <MenuItem {...item} />
          </article>
        );
      })}
    </div>
  );
}

export default Menu;
