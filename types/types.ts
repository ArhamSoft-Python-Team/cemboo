import { ReactNode } from "react";
export interface MediaItem {
    id: number;
    title: string;
    release_year: number;
    genre: string[];
    director: string;
    cast: {
        name: string;
        role: string;
    }[];
    rating: number;
    duration_minutes: number;
    synopsis: string;
    thumbnail_horizontal: string;
    thumbnail_vertical: string;
    youtube_link: string;
    banner_url?: string;
}

export interface MediaCarouselProps {
    data: MediaItem[];
    handleShow: (item: MediaItem) => void;
    count: boolean;
}

export interface HeroBannerProps {
    movies: MediaItem[];
}

export interface MoviesProviderProps {
    children: ReactNode;
}

export interface NavLink {
    id: number;
    link: string;
    image: string;
}