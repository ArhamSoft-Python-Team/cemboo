"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import MediaCarousel from "@/components/MediaCarousel";
import { useMovies } from "@/context/MoviesContext";
import { MediaItem } from "@/types/types";
import "@/styles/trending-slider.css";

const VideoModal = dynamic(() => import("./VideoModal"), {
    ssr: false,
});

const TrendingSlider: React.FC = () => {
    const { movies } = useMovies();
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);

    const handleClose = () => setShow(false);

    const handleShow = (data: MediaItem) => {
        setSelectedMovie(data);
        setShow(true);
    };

    const sortedMovies = [...movies].sort((a, b) => b.rating - a.rating);

    return (
        <section className="custom-slider trending-slider">
            <Container>
                <h2>Trending Movies</h2>
                <p>Discover the trending movies and delve into a world of entertainment at your fingertips</p>
                <MediaCarousel data={sortedMovies} handleShow={handleShow} count={false} />
                <VideoModal show={show} handleClose={handleClose} data={selectedMovie} />
            </Container>
        </section>
    );
};

export default TrendingSlider;
