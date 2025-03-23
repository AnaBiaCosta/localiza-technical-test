import RocketApiService from "@/services/RocketApiService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export async function fetchRocketsPaginated({ queryKey }) {
  const [_key, page, limit] = queryKey;

  return RocketApiService.fetchRocketsPaginated(page, limit);
}

export function usePaginatedRockets(page, limit = 10) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["rockets", page, limit],
    queryFn: fetchRocketsPaginated,
    keepPreviousData: true,
    staleTime: 5000,
    onSuccess: (data) => {
      if (data.page < data.totalPages) {
        queryClient.prefetchQuery({
          queryKey: ["rockets", data.page + 1, limit],
          queryFn: fetchRocketsPaginated,
        });
      }
    },
  });
}
