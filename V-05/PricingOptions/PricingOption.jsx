import React from "react";
import FeatureOption from "./FeatureOption";

function PricingOption({ priceOption }) {
  console.log(priceOption);
  const { name, price, description, features } = priceOption;
  return (
    <div className="card max-w-96 bg-base-100 shadow-sm my-8 ">
      <div className="card-body flex flex-col  p-4">
        <div>
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">{price}</span>
          </div>

          <p className="mt-3">{description}</p>
        </div>

        <ul className="mt-6 flex-1 space-y-3 text-xs">
          {features.map((feature) => (
            <FeatureOption feature={feature} key={Math.random()} />
          ))}
        </ul>

        <button className="btn btn-primary btn-block mt-6">Subscribe</button>
      </div>
    </div>
  );
}

export default PricingOption;
