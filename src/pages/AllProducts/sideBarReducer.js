export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH_OR_MAX_PRICE':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'SET_PAGE_NUMBER':
      return { ...state, page: action.payload };
    case 'TOGGLE_SUBCATEGORY':
      const subcategoryIds = [...state.subcategoryIds];
      const subcategoryIndex = subcategoryIds.indexOf(action.payload);
      if (subcategoryIndex === -1) {
        subcategoryIds.push(action.payload);
      } else {
        subcategoryIds.splice(subcategoryIndex, 1);
      }
      return { ...state, subcategoryIds };
    case 'TOGGLE_BRAND':
      const brandIds = [...state.brandIds];
      const brandIndex = brandIds.indexOf(action.payload);
      if (brandIndex === -1) {
        brandIds.push(action.payload);
      } else {
        brandIds.splice(brandIndex, 1);
      }
      return { ...state, brandIds };
    default:
      return state;
  }
};
