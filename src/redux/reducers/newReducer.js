const initialState = [
  {
    id: 0,
    user: "admin",
    name: "sugar",
    status: "normal condition",
    loggedIn: ""
  }
];

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_REPORT":
      state = [...state, action.payload];
      return state;
    default:
      return state;
  }
};
export default newReducer;
