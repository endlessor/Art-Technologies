import React from "react";
import { galleryProps } from "../../interfaces/rootState";
import { useRouter } from "next/router";
import { handleGetDate } from "../../utils/handleDate";

const Gallery = ({
  image_url,
  title,
  aic_start_at,
  aic_end_at,
  id,
}: galleryProps) => {
  const router = useRouter();

  const hanldeClick = () => {
    router.push(`/exhibition/${id}`);
  };

  return (
    <div className="cursor-pointer" onClick={hanldeClick}>
      <img
        src={image_url ? image_url : "/images/placeholder.jpeg"}
        alt="Gallery Image"
        height={500}
        width={500}
        className="object-cover h-48 w-100"
      />
      <p className="text-xl">{title}</p>
      <p>
        {handleGetDate(aic_start_at)} - {handleGetDate(aic_end_at)}
      </p>
    </div>
  );
};

export default Gallery;
