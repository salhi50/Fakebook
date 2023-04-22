import { createSlice } from "@reduxjs/toolkit";
import { getFromStore } from "../../utilities/getFromStore";

const usersSelector = (state: any) => state.users;

const initialUsers: User[] = getFromStore("users") || [];

const usersSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  reducers: {
    addUser(state, action) {
      state.push(action.payload)
    }
  }
})

const usersReducer = usersSlice.reducer;
const usersActions = usersSlice.actions;

export {
  usersSelector,
  usersSlice,
  usersReducer,
  usersActions
}