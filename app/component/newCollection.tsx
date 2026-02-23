import React from "react";
import Image from "next/image";
function NewCollection() {
  return (
    <div className="bg-[#D4E9E2] p-2 mt-15 pt-10 pb-15 ">
      <h1 className="text-3xl pb-5">Ny kollektion - Stay Iconic</h1>
      <div className="flex justify-around">
        <div className="border self-start px-2.5 py-1 ">Shoppa</div>
        <div className="relative inline-block">
          <Image
            src={"/twoGirls.webp"}
            alt="bild på två tejer"
            width={200}
            height={300}
          />
          <Image
            src={"/jackaiStudio.webp"}
            alt="Jacka i studio"
            width={100}
            height={100}
            className="absolute -bottom-10 -right-5 w-24 h-24 object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
