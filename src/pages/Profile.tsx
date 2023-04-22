import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { usersSelector } from "../features/users/usersSlice";
import { UserContext } from "../features/users/userContext";
import NotFound from "./NotFound";

// Layout
import Header from "../layout/Header";

// Components
import Details from "../components/user/Details";

const Profile = () => {
  const {user_id} = useParams();
  const users: User[] = useSelector(usersSelector);
  const target_user = users.find(user => user.id === user_id);

  if(typeof target_user !== "undefined") {

    const {username} = target_user;

    useEffect(() => {
      document.title = `${username} profile - Fakebook`;
    }, []);

    return <UserContext.Provider value={{current_user: target_user}}>
      <Header />
      <main id="main" className="mt-md-4 mt-3">
        <div className="container-lg">
          <Details />
        </div>
      </main>
    </UserContext.Provider>
  }

  return <NotFound />

}

export default Profile;