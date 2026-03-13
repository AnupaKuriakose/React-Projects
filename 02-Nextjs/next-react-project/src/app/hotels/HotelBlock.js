
"use client";
import Image from "next/image";

export default function HotelBlock({ name, id, capacity }) {
  const imageLoader = ({ src }) => {
    return `./images/${src}.jpeg`;
  };
  return (
    <div>
      <h2>{name}</h2>
      <p>{capacity}</p>
      <Image
        src={id}
        alt="hotel image"
        height={300}
        width={300}
        loader={imageLoader}
      />
    </div>
  );
}
