import { useEffect } from "react";
import { useState } from "react";
import dummyImage from "../assets/avatar.svg"

export default function LazyLoadImage({ src, alt }) {
    const [imageSrc, setImageSrc] = useState();

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setImageSrc(src);
        };

    }, [src]);

    return <img className="w-[100%] h-[100%] rounded-full" src={(imageSrc || dummyImage)} alt={alt} />;
}