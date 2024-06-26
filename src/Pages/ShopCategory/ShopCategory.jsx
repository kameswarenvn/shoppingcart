import React, { useState } from 'react'
import './ShopCategory.css'
import dropdown_icon from '../../Components/Assets/dropdown_icon.png'
import Item from '../../Components/Item/Item'
import all_product from '../../Components/Assets/all_product'

const ShopCategory = (props) => {
  const [sortCriteria, setSortCriteria] = useState('');
  const [sortedData, setSortedData] = useState(all_product);

  const handleSortChange = (e) => {
    const criteria = e.target.value;
    setSortCriteria(criteria);

    let sortedArray = [];
    if (criteria === 'priceLowToHigh') {
      sortedArray = [...all_product].sort((a, b) => a.new_price - b.new_price);
    } else if (criteria === 'priceHighToLow') {
      sortedArray = [...all_product].sort((a, b) => b.new_price - a.new_price);
    } else if (criteria === 'nameAsc') {
      sortedArray = [...all_product].sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === 'nameDesc') {
      sortedArray = [...all_product].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      sortedArray = all_product; // Default to original data if no criteria selected
    }
    setSortedData(sortedArray);
  };

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          <select className='select-outline' value={sortCriteria} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
            <option value="nameDesc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedData.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            )
          } else {
            return null
          }
        })}
      </div>
      <div className='shopcategory-loadmore'>
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
