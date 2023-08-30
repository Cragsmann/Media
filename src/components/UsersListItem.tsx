import { User } from "../store/slices/usersSlice";
import React from "react";
import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { Button } from "./Button";

type UserListItemProps = { user: User };

export function UserListItem({ user }: UserListItemProps): JSX.Element {
  const [isLoading, error, doRemoveUser] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded" key={user.id}>
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrash />
          </Button>
          {error && `| ERROR deleting a user ${user.name}: ${error.message} | `}
          {user.name}
        </div>
      </div>
    </div>
  );
}
