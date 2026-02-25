import React from "react";
import Image from "next/image";
function NewCollection() {
  return (
    <div className="bg-[#D4E9E2] p-2 mt-15 pt-10 pb-25 ">
      <h1 className="text-3xl pb-5">Ny kollektion - Stay Iconic</h1>
      <div className="flex justify-around">
        <div className="border self-start px-2.5 py-1 ">
          <a
            href="https://www.8848altitude.com/en/8848-magazine"
            target="_blank"
          >
            Shoppa
          </a>
        </div>
        <div className="relative inline-block">
          <Image
            src={"/twoGirls.webp"}
            alt="bild på två tejer"
            width={200}
            height={300}
            className="z-20"
          />
          <Image
            src={"/jackaiStudio.webp"}
            alt="Jacka i studio"
            width={100}
            height={100}
            className="absolute -bottom-10 z-30 -right-5 w-24 h-24 object-cover"
          />
          <Image
            src={"/girl2.webp"}
            alt="Girl locking back"
            width={125}
            height={225}
            className="absolute -bottom-15 z-10 -left-18"
          />
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
