import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    categories: ["חלב וגבינות", "טואלטיקה", "בשר", "ירקות ופירות"],
    selectedCategory: null,
    products: [],
  },
  reducers: {
    selectCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { selectCategory, addProduct } = productSlice.actions;
export default productSlice.reducer;
