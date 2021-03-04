import useSWR from "swr";
import fetcher from "./fetcher";
import dbConnect from "../database/dbConnect";

export default function useTodos() {
  const { data, error } = useSWR("/api/todos/", fetcher, {
    initialData: null,
    revalidateOnFocus: true,
    refreshInterval: 1000,
    dedupingInterval: 1000,
  });

  return {
    todos: data,
    isLoading: !error && !data,
    isError: error,
  };
}
