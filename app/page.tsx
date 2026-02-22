import Image from "next/image";
import Header from "@/app/component/header";
import DppLayout from "@/app/component/dppLayout";
import ProductImage from "@/app/component/productImage";
import ThreeKeyFacts from "@/app/component/threeKeyFacts";
import DropdownModule from "./component/popDownInfo";
import MinimalFooter from "./component/minimalFooter";
import ProductCard from "./component/productCard";
import ProductSlider from "./component/productSlider";
export default function Home() {
  const listofFacts = [
    { keyFact: "12km", value: "Sträcka" },
    { keyFact: "120kg", value: "Co2" },
    { keyFact: "67", value: "Delar" },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6]">
      <div>
        <DppLayout>
          <Header size={"7xl"} title={"Cleo"} />
          <hr />
          <ProductImage
            imageUrl={"/saga.png"}
            height={300}
            width={300}
            position={"center"}
          />
          <ThreeKeyFacts listofFacts={listofFacts} />
          <DropdownModule />
          <h2 className="text-3xl pl-2 mt-15 ">Kompletera din look med</h2>
          <p className="pl-2 text-xl">See mer</p>
          <ProductSlider />
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
          <MinimalFooter />
        </DppLayout>
      </div>
    </div>
  );
}
