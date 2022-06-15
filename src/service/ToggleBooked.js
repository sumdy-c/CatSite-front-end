const ToggleBooked = (state, key) => {
  const indexToggle = state.findIndex((el) => el.id === key);
  const oldEl = state[indexToggle];
  const newItem = { ...oldEl, booked: !oldEl.booked };
  const newArrToggle = [
    ...state.slice(0, indexToggle),
    newItem,
    ...state.slice(indexToggle + 1),
  ];
  return newArrToggle;
};
export default ToggleBooked;
