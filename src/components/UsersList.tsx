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

  let content: JSX.Element | JSX.Element[];

  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = (
      <h1>
        <span className="text-red-600">Error:</span> {loadingUsersError.message}
      </h1>
    );
  } else {
    content = data.map((user) => {
      return (
        <div className="mb-2 border rounded" key={user.id}>
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button loading={isCreatingUser} onClick={handleUserCreation}>
          + Add User
        </Button>

        {creatingUserError && `ERROR:${creatingUserError.message}`}
      </div>

      {content}
    </div>
  );
}

export default UsersList;
