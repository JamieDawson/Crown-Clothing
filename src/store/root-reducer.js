import { combineReducers } from "redux";

//creates a final big reducer by combining smaller reducer together

import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
});
