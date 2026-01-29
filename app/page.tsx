import Image from "next/image";
import Header from "@/app/component/header";
import DppLayout from "@/app/component/dppLayout";
import ProductImage from "@/app/component/productImage";
import ThreeKeyFacts from "@/app/component/threeKeyFacts";
import PopDownInfo from "@/app/component/popDownInfo";
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
          <PopDownInfo title="Hållbarhet" info="Tjöjan är hållbart" />
          <PopDownInfo title="Kvalitet" info="Tjöjan är kvalitetsrik" />
          <PopDownInfo title="Pris" info="Tjöjan är billig" />
        </DppLayout>
      </div>
    </div>
  );
}
