import React from "react";
import { User } from "../store/slices/usersSlice";

type AlbumsListProps = {
  user: User;
};

export const AlbumsList: React.FC<AlbumsListProps> = ({
  user,
}): JSX.Element => {
  return <div>Albums for {user.name}</div>;
};
