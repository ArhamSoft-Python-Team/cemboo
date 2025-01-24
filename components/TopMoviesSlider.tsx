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

const RecentSlider: React.FC = () => {
    const { movies } = useMovies();
    const [show, setShow] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState<MediaItem | null>(null);

    const handleClose = () => setShow(false);

    const handleShow = (data: MediaItem) => {
        setSelectedMovie(data);
        setShow(true);
    };

    return (
        <section className="custom-slider top-movies-slider">
            <Container>
                <h2>Recent Movies</h2>
                <p>Discover the newest releases and delve into a world of entertainment at your fingertips</p>
                <MediaCarousel data={movies} handleShow={handleShow} count={true} />
                <VideoModal show={show} handleClose={handleClose} data={selectedMovie} />
            </Container>
        </section>
    );
};

export default RecentSlider;