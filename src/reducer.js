export const initialState = {
  basket: [],
};
// const getBasketToTal = () => {
//   let total = 0;
//   for (let item in basket) {
//     total += basket[item].price;
//   }
//   return total;
// };
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};
export default reducer;
