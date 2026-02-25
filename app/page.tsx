import Header from "@/app/component/header";
import DppLayout from "@/app/component/dppLayout";
import ProductImage from "@/app/component/productImage";
import ThreeKeyFacts from "@/app/component/threeKeyFacts";
import DropdownModule from "./component/popDownInfo";
import MinimalFooter from "./component/minimalFooter";
import MoreProductSection from "./component/moreProductSection";
import NewCollection from "./component/newCollection";
import Head from "next/head";
export default function Home() {
  const listofFacts = [
    { keyFact: "8600mil", value: "Sträcka" },
    { keyFact: "0.17kg", value: "Co2" },
    { keyFact: "52", value: "Delar" },
  ];
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6]">
      <div>
        <DppLayout>
          <Header size={"7xl"} title={"Cleo"} />
          <hr />
          <ProductImage
            imageUrl={"/jacka.png"}
            height={300}
            width={300}
            position={"center"}
          />
          <ThreeKeyFacts listofFacts={listofFacts} />

          <DropdownModule />
          <MoreProductSection />
          <NewCollection />
          <MinimalFooter />
        </DppLayout>
      </div>
    </div>
  );
}
