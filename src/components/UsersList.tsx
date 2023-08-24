import React, { Reducer, useEffect } from "react";
import { fetchUsers } from "../store"; // Make sure to provide the correct path to fetchUsers
import { useAppDispatch, useAppSelector } from "../hooks/redux-functions";
import { Skeleton } from "./Skeleton";

function UsersList(): JSX.Element | JSX.Element[] {
  const dispatch = useAppDispatch();
  const { data, isLoading, error } = useAppSelector((state) => {
    console.log(state);

    return state.users;
  });
  useEffect(() => {
    dispatch(fetchUsers()); // Dispatch fetchUsers as a function
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton times={6} className="h-10 w-full" />;
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
