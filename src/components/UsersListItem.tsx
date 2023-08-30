import { User } from "../store/slices/usersSlice";
import React, { Fragment } from "react";
import { GoTrash } from "react-icons/go";
import { useThunk } from "../hooks/use-thunk";
import { removeUser } from "../store";
import { Button } from "./Button";
import { ExpandablePanel } from "./ExpandablePanel";
import { AlbumsList } from "./AlbumsList";

type UserListItemProps = { user: User };

export function UserListItem({ user }: UserListItemProps): JSX.Element {
  const [isLoading, error, doRemoveUser] = useThunk(removeUser);

  const handleClick = (): void => {
    doRemoveUser(user);
  };

  const header: JSX.Element = (
    <Fragment>
      <Button className="mr-3" loading={isLoading} onClick={handleClick}>
        <GoTrash />
      </Button>
      {error && `| ERROR deleting a user ${user.name}: ${error.message} | `}
      {user.name}
    </Fragment>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}
