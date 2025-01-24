"use client";
import Container from "react-bootstrap/Container";
import HeroContent from "@/components/HeroContent";
import HeroNavbar from "@/components/HeroNavbar";
import Loader from "@/components/Loader";
import { useMovies } from "@/context/MoviesContext";
import "@/styles/hero-banner.css";

const HeroBanner: React.FC = () => {
    const { movies = [], loading = true } = useMovies();

    if (loading) {
        return <Loader />;
    }

    if (!movies?.length) return null;

    const movie = movies[movies.length - 1];

    return (
        <section className="hero-banner" style={{backgroundImage: `url(${movie.banner_url})`}}>
            <Container>
                <div className="hero-area">
                    <HeroNavbar />
                    <HeroContent movie={movie} />
                </div>
            </Container>
        </section>
    );
};

export default HeroBanner;