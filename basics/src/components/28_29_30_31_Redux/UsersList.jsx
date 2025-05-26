// UsersList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchUsers,
  selectAllUsers,
  selectUsersStatus,
  selectUsersError,
} from "../../redux/slice/usersSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUsersStatus);
  const error = useSelector(selectUsersError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  let content;

  if (status === "loading") {
    content = <div>Loading...</div>;
  } else if (status === "succeeded") {
    content = users.map((user) => (
      <div key={user.id}>
        <h3>{user.name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    ));
  } else if (status === "failed") {
    content = <div>{error}</div>;
  }

  return (
    <section>
      <h2>Users</h2>
      {content}
    </section>
  );
};

export default UsersList;
