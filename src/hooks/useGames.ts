import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/apiClient";
import { Platform } from "./usePlatforms";


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform} [];
    metacritic: number;
    rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => {

    return useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ["games", gameQuery],
        queryFn: ({pageParam = 1}) => apiClient
                  .getAll({
                    params: {
                        genres: gameQuery.genreId,
                        parent_platforms: gameQuery.platformId,
                        ordering: gameQuery.sortOrder,
                        search: gameQuery.searchText,
                        page: pageParam
                    }
                }),
        staleTime: 24 * 60 * 60 * 1000, // 24h
        keepPreviousData: true,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.next? allPages.length + 1 : undefined;
        }
    })
};

    // useQuery<FetchResponse<Game>, Error>({
    // queryKey: ["games", gameQuery],
    // queryFn: () => apiClient
    //           .getAll({
    //             params: {
    //                 genres: gameQuery.genre?.id,
    //                 parent_platforms: gameQuery.platform?.id,
    //                 ordering: gameQuery.sortOrder,
    //                 search: gameQuery.searchText
    //             }
    //         }),
    // staleTime: 1 * 60 * 60 * 1000, // 1h
// })

export default useGames;

