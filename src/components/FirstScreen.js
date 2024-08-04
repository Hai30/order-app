import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory, addProduct } from '../redux/slices/productSlice';
import { useHistory } from 'react-router-dom';

const FirstScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector(state => state.products.categories);
  const selectedCategory = useSelector(state => state.products.selectedCategory);
  const [productName, setProductName] = useState('');

  const handleSelectCategory = (category) => {
    dispatch(selectCategory(category));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(productName));
    setProductName('');
  };

  return (
    <div>
      <div>
        <label>שם המוצר:</label>
        <input type="text" value={productName} onChange={e => setProductName(e.target.value)} />
        <button onClick={handleAddProduct}>הוסף מוצר</button>
      </div>
      <div>
        <select onChange={e => handleSelectCategory(e.target.value)}>
          <option value="">בחר קטגוריה</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div>
        {selectedCategory && (
          <div>
            <h3 style={{ color: 'blue' }}>{selectedCategory}</h3>
            {/* רשימת מוצרים */}
          </div>
        )}
      </div>
      <button style={{ backgroundColor: 'blue', color: 'white' }} onClick={() => history.push('/second-screen')}>
        המשך הזמנה
      </button>
    </div>
  );
};

export default FirstScreen;
