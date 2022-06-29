import Services from "../../../service/Service";

export function reducer(state, action) {
  switch (action.type) {
    case "delete":
      return (state = Services.DeleteCat(state, action.key));
    case "add":
      return (state = Services.AddCat(action.data, action.avatar, state));
    case "togglebooked":
      return (state = Services.ToggleBooked(state, action.key));
    case "edit":
      return (state = Services.EditCat(
        state,
        action.avatar,
        action.key,
        action.data
      ));
    default:
      return { ...state };
  }
}
