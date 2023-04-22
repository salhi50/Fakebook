import { createContext } from "react";

const UserContext = createContext<GlobalUserContext>({
  current_user: null
});

export {
  UserContext
}