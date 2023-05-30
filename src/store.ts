import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (id: number) => void;
    setPlatformId: (id: number) => void;
    setSortOrder: (sort: string) => void;
    setSearchText: (text: string) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (text) => set(() => ({gameQuery: {searchText: text}})),
    setGenreId: (id) => set((store) => ({gameQuery: {...store.gameQuery, genreId: id}})),
    setPlatformId: (id) => set((store) => ({gameQuery: {...store.gameQuery, platformId: id}})),
    setSortOrder: (text) => set((store) => ({gameQuery: {...store.gameQuery, sortOrder: text}})),
}));

if (process.env.NODE_ENV === "development")
    mountStoreDevtool("GameQuery Store", useGameQueryStore)

export default useGameQueryStore;