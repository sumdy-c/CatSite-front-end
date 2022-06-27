const validSetting = (data) => {
  const { name, price, color, breed, age } = data;
  const valid = {
    name: name.length >= 20 || name === "",
    price:
      isNaN(price) ||
      price <= 100 ||
      price >= 2001 ||
      price === RegExp(/^0+/, ""),
    color: color === "",
    breed: breed === "",
    age: isNaN(age) || age > 26 || age <= 0 || age === RegExp(/^0+/, ""),
  };
  if (
    valid.name === false &&
    valid.price === false &&
    valid.color === false &&
    valid.breed === false &&
    valid.age === false
  ) {
    return true;
  } else {
    return valid;
  }
};

export default validSetting;
