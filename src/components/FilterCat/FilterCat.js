const FilterCat = (filterDataCard, booked) => {
  switch (booked) {
    case "all":
      return filterDataCard;
    case "booked":
      return filterDataCard.filter((item) => item.booked);
    case "free":
      return filterDataCard.filter((item) => !item.booked);
    default:
      return filterDataCard;
  }
};
export default FilterCat;
