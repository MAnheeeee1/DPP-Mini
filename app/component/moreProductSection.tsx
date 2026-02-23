import React from "react";
import ProductSlider from "./productSlider";
function MoreProductSection() {
  return (
    <div>
      {" "}
      <h2 className="text-3xl pl-2 mt-15 ">Kompletera din look med</h2>
      <p className="pl-2 text-xl">See mer</p>
      <ProductSlider />
    </div>
  );
}

export default MoreProductSection;
