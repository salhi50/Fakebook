import {configureStore} from "@reduxjs/toolkit";
import { usersReducer } from "./features/users/usersSlice";

const store = configureStore({
  reducer: {
    users: usersReducer
  }
})

store.subscribe(() => {
  localStorage.setItem("store", JSON.stringify(store.getState()));
})

export default store;