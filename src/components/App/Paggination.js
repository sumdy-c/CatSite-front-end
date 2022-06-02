export default function Paggination(data, page) {
  const pageLimit = 6;
  let newArr = data;
  const lastIndex = page * pageLimit; //1*9 == 9;
  const startIndex = lastIndex - pageLimit; // 9 - 9 == 0
  newArr = data.slice(startIndex, lastIndex);
  return newArr;
}
