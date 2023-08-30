import React, { useEffect } from "react";
import { fetchUsers, addUser } from "../store"; // Make sure to provide the correct path to fetchUsers
import { useAppSelector } from "../hooks/redux-functions";
import { useThunk } from "../hooks/use-thunk";
import { Skeleton } from "./Skeleton";
import { Button } from "./Button";

function UsersList(): JSX.Element | JSX.Element[] {
  const [isLoadingUsers, loadingUsersError, doFetchUsers] =
    useThunk(fetchUsers);
  const [isCreatingUser, creatingUserError, doCreateUser] = useThunk(addUser);

  const { data } = useAppSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleUserCreation = () => {
    doCreateUser();
  };

  if (isLoadingUsers) {
    return <Skeleton times={6} className="h-10 w-full" />;
  }
  if (loadingUsersError) {
    return (
      <h1>
        <span className="text-red-600">Error:</span>{" "}
        {loadingUsersError ? loadingUsersError.message : null}
      </h1>
    );
  }
  const renderedUsers = data.map((user) => {
    return (
      <div className="mb-2 border rounded" key={user.id}>
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserCreation}>+ Add User</Button>
        )}
        {creatingUserError && `ERROR:${creatingUserError.message}`}
      </div>

      {renderedUsers}
    </div>
  );
}

export default UsersList;
