import React, { Reducer, useEffect } from "react";
import { fetchUsers } from "../store"; // Make sure to provide the correct path to fetchUsers
import { useAppDispatch, useAppSelector } from "../hooks/redux-functions";

function UsersList(): JSX.Element {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => {
    console.log(state);

    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch fetchUsers as a function
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <h1>
        <span className="text-red-600">Error:</span> {error}
      </h1>
    );
  }
  // @ts-ignore
  return <div>{data.length}</div>;
}

export default UsersList;
