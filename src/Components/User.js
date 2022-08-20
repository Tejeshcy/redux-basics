import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserAction } from "../Action";

const User = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  const userData = useSelector((state) => state.user.user_list);
  console.log(userData);

  return (
    <div className="container">
      {userData.map((data,index) => {
        return (
          <div className="card my-3 bg-info justify-content-between">
            <div className="card-body">
                {`${data.id}  ${data.title}`}
                
            
          </div>
          </div>
        );
      })
    }
    </div>
  );
};

export default User;
