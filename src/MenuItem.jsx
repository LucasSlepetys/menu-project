function MenuItem({ title, price, img, desc }) {
  return (
    <>
      <img className='img' src={img} alt={title} />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>{price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </>
  );
}

export default MenuItem;
