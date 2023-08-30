import { AsyncThunkAction } from "@reduxjs/toolkit";
import { useAppDispatch } from "./redux-functions";
import { useState, useCallback } from "react";

type ThunkFunction<ReturnedAction> = (
  ...args: any[]
) => AsyncThunkAction<ReturnedAction, any, any>;

export function useThunk<ReturnedAction>(thunk: ThunkFunction<ReturnedAction>) {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const runThunk = useCallback(
    (arg?: any) => {
      setIsLoading(true);
      setError(null);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        })
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk]
  );

  return [isLoading, error, runThunk] as const;
}
