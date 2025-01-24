import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MediaItem } from "@/types/types";

const HeroContent: React.FC<{ movie: MediaItem }> = ({ movie }) => (
    <div className="hero-content">
        <h1>{movie.title} {movie.release_year}</h1>
        <p>{movie.synopsis}</p>
        <Link href="" className="movie-link">Read More</Link>
        <div className="banner-buttons">
            <button className="blue-button">Watch Movie</button>
            <button className="outline-button">
                <span className="small-button"><FontAwesomeIcon icon={faPlus} /></span> Watchlist
            </button>
        </div>
    </div>
);

export default HeroContent;
