import Link from "next/link";
import Image from "next/image";
import { asset } from "@/assets/assets";
import { NavLink } from "@/types/types";

const HeroNavbar: React.FC = () => {
    const navLinks: NavLink[] = [
        { id: 1, link: "/", image: asset.profileIcon },
        { id: 2, link: "/", image: asset.homeIcon },
        { id: 3, link: "/", image: asset.searchIcon },
        { id: 4, link: "/", image: asset.productsIcon },
        { id: 5, link: "/", image: asset.tvIcon },
        { id: 6, link: "/", image: asset.dashboardIcon },
    ];

    return (
        <div className="hero-navbar">
            <ul>
                {navLinks.map((nav) => (
                    <li key={nav.id}>
                        <Link href={nav.link} className="hero-link">
                            <Image
                                className="banner-link-image"
                                src={nav.image}
                                alt="Banner Links"
                                width={28}
                                height={28}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HeroNavbar;
