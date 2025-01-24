"use client";
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { MediaItem, MoviesProviderProps } from "@/types/types";

const MoviesContext = createContext<{
    movies: MediaItem[];
    loading: boolean;
}>({
    movies: [],
    loading: true,
});

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<MediaItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await fetch("/data/movies.json");

                if (!response.ok) {
                    throw new Error("Failed to fetch movies");
                }

                const data = await response.json();
                setMovies(data);
            } catch (error) {
                console.error("Error fetching movies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    /*
    * Using useMemo to avoid recalculating the context value on every render.
    * This isn't crucial now with a small dataset but helps if data grows later.
    */
    const contextValue = useMemo(() => ({ movies, loading }), [movies, loading]);

    return (
        <MoviesContext.Provider value={contextValue}>
            {children}
        </MoviesContext.Provider>
    );
};

export const useMovies = () => useContext(MoviesContext);
