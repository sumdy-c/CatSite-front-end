const DeleteCat = (state, key) => {
  const index = state.findIndex((el) => el.id === key);
  let newArr = [...state.slice(0, index), ...state.slice(index + 1)];
  return newArr;
};

export default DeleteCat;
