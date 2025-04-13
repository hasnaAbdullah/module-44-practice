import React, { use } from "react";
import PricingOption from "./PricingOption";
function PricingOptions({ pricesPromise }) {
  const pricesOptions = use(pricesPromise);
  console.log(pricesOptions);
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {pricesOptions.map((priceOption) => (
        <PricingOption priceOption={priceOption} key={priceOption.id} />
      ))}
    </div>
  );
}

export default PricingOptions;
