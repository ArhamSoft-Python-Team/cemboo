"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MediaItem, MediaCarouselProps } from "@/types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { asset } from "@/assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="custom-arrow custom-next" onClick={onClick}>
        <Image className="arrow" src={asset.arrowRight} alt="Arrow" width="36" height="36" />
    </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="custom-arrow custom-prev" onClick={onClick}>
        <Image className="arrow" src={asset.arrowLeft} alt="Arrow" width="36" height="36" />
    </div>
);

const MediaCarousel: React.FC<MediaCarouselProps> = ({ data, handleShow, count }) => {
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: count ? 6 : 6.1,
        slidesToScroll: 1,
        centerPadding: "8%",
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        afterChange: (current: number) => updateFocusableElements(current),
        responsive: [
            { breakpoint: 1799, settings: { slidesToShow: count ? 5 : 5.1 } },
            { breakpoint: 1599, settings: { slidesToShow: count ? 4 : 4.1 } },
            { breakpoint: 1199, settings: { slidesToShow: count ? 3 : 3.1 } },
            { breakpoint: 767, settings: { slidesToShow: count ? 2 : 2 } },
            { breakpoint: 479, settings: { slidesToShow: 1 } }
        ]
    };

    useEffect(() => {
        updateFocusableElements(0);
    }, []);

    const updateFocusableElements = (current: number) => {
        const sliderInstance = sliderRef.current?.innerSlider;

        if (!sliderInstance || !sliderInstance.list) return;

        const slides = sliderInstance.list.querySelectorAll(".slick-slide");

        slides.forEach((slide, index) => {
            const isHidden = index !== current;
            const buttons = slide.querySelectorAll("button");

            buttons.forEach((button) => {
                button.setAttribute("tabindex", isHidden ? "-1" : "0");
                button.toggleAttribute("disabled", isHidden);
            });
        });
    };

    if (!Array.isArray(data) || data.length === 0) {
        return null;
    }

    return (
        <div className="media-carousel-container">
            <Slider {...settings} ref={sliderRef}>
                {data.map((item: MediaItem) => (
                    <div key={item.id} className="carousel-item">
                        <div className="slider-img relative aspect-video">
                            <div className="img-div">
                                <Image
                                    src={item.thumbnail_horizontal}
                                    alt={item.title}
                                    className="img-fluid"
                                    width="300"
                                    height="170"
                                />
                            </div>
                            <button
                                className="blue-button"
                                onClick={() => handleShow(item)}
                                type="button"
                            >
                                Watch Trailer
                            </button>
                            <span className="count">{item.id}</span>
                        </div>
                        <div className="slider-content">
                            <span className="small-text align-items-center justify-content-between">
                                <span>{item.genre.join(", ")}</span>
                                <span className="rating">
                                    <FontAwesomeIcon icon={faStar} /> {item.rating}
                                </span>
                            </span>
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MediaCarousel;