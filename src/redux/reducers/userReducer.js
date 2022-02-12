const initialState = [
  {
    id: 0,
    name: "admin",
    email: "admin@admin.com",
    password: "admin",
    loggedIn: 0
  },
  {
    id: 1,
    name: "a",
    email: "a@a.com",
    password: "a",
    loggedIn: 0
  }
];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_USER":
      state = [...state, action.payload];
      return state;
    case "LOGGEDIN":
      const updateState = state.map((login) =>
        login.id === action.payload.id ? action.payload : login
      );
      state = updateState;
      return state;

    default:
      return state;
  }
};
export default userReducer;
