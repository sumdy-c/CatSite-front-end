const AddCat = (data, avatar, state) => {
  let getNewImg = `http://127.0.0.1:8887/images/${avatar}`;
  const { name, breed, age, color, price, info } = data;
  const newCat = {
    nameCat: name,
    catPriceInHour: price,
    catPhoto: avatar
      ? getNewImg
      : `http://127.0.0.1:8887/images/defaultImgCat.png`,
    infoCat: info,
    catColor: color,
    breed: breed,
    booked: false,
    ageCat: age,
    id: Date.now(),
  };

  return [...state, newCat];
};

export default AddCat;
