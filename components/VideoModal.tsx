"use client";
import { memo, useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import ReactPlayer from "react-player/youtube";
import { MediaItem } from "@/types/types";
import { asset } from "@/assets/assets";
import Image from "next/image";

const VideoModal = memo(({ show, handleClose, data }: { show: boolean; handleClose: () => void; data: MediaItem | null }) => {
    const [error, setError] = useState(false);

    useEffect(() => {
        if (show) {
            document.documentElement.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
        };
    }, [show]);

    const handleError = () => {
        setError(true);
    };

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{data?.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {error || !data?.youtube_link ? (
                    <div className="error-image">
                        <Image
                            src={asset.noMoviePlaceholder}
                            alt="Video not available"
                            width="250"
                            height="250"
                            className="img-fluid"
                        />
                        <span>No Video Available</span>
                    </div>
                ) : (
                    <ReactPlayer
                        className='react-player'
                        url={data?.youtube_link}
                        controls={true}
                        width="100%"
                        height="100%"
                        onError={handleError}
                    />
                )}
            </Modal.Body>
        </Modal>
    );
});

VideoModal.displayName = "VideoModal";

export default VideoModal;