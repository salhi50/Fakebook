import React from "react"
import { UserContext } from "../../features/users/userContext";

// Components
import Box from "../Box";
import BoxTitle from "../BoxTitle";
import PlainText from "../form/PlainText";

const Details: React.FC = function() {

  const {current_user} = React.useContext(UserContext);

  const userDetails = React.useMemo(() => {
    const finalInfo = [];
    const keys: (keyof User)[] = ["username", "email", "password", "joined"];
    if(current_user) {
      for(let key of keys) {
        if(current_user[key].length > 0) {
          finalInfo.push({key, value: current_user[key]});
        }
      }
    }
    return finalInfo;
  }, [current_user]);

  return <>
    <Box>
      <BoxTitle align="left">Details</BoxTitle>
      <div className="p-3">
        {userDetails.map((detail, indx) => (
          <PlainText
            key={indx}
            className="mb-3"
            title={detail.key}
            value={detail.value}
          />
        ))}
      </div>
    </Box>
  </>
}

export default Details;