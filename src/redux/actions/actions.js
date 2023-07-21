export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
// remove icons
export const ADL = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};
// remove individual item
export const AAA = (id) => {
  return {
    type: "INDIVIDUAL_ITEM",
    payload: id,
  };
};
