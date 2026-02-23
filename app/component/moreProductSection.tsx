import React from "react";
import ProductSlider from "./productSlider";
import Image from "next/image";
function MoreProductSection() {
  return (
    <div>
      <h2 className="text-3xl pl-2 mt-15 ">Kompletera din look med</h2>
      <p className="pl-2 text-xl inline-block pr-2">
        <a
          href="https://www.8848altitude.com/sv-SE/dam/skidklader/skidjackor"
          target="_blank"
        >
          See mer
        </a>
      </p>
      <a
        href="https://www.8848altitude.com/sv-SE/dam/skidklader/skidjackor"
        target="_blank"
      >
        <Image
          className="inline-block"
          src="/right-arrow.png"
          height={10}
          width={30}
          alt="Right aroow "
        />
      </a>
      <ProductSlider />
    </div>
  );
}

export default MoreProductSection;
