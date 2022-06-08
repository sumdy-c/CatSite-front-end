const EditCat = (state, avatar, key, data) => {
  let getEditImg = `http://127.0.0.1:8887/images/${avatar}`;
  const index = state.findIndex((el) => el.id === key);
  const oldEl = state[index];
  const { name, breed, age, color, price, info } = data;
  const newItemEdit = {
    ...oldEl,
    nameCat: name,
    breed: breed,
    catPhoto: avatar ? getEditImg : oldEl.catPhoto,
    ageCat: age,
    catColor: color,
    CatPriceInHour: price,
    infoCat: info,
  };
  const newArrEdit = [
    ...state.slice(0, index),
    newItemEdit,
    ...state.slice(index + 1),
  ];
  return newArrEdit;
};

export default EditCat;
