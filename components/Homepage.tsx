import HeroBanner from "@/components/HeroBanner";
import TrendingSlider from "@/components/TrendingSlider";
import RecentSlider from "@/components/TopMoviesSlider";

const Homepage: React.FC = () => {
    return (
        <>
            <HeroBanner />
            <TrendingSlider />
            <RecentSlider />
        </>
    );
};

export default Homepage;