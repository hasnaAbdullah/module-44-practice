import React from "react";
import FeatureOption from "./FeatureOption";

function PricingOption({ priceOption }) {
  console.log(priceOption);
  const { name, price, description, features } = priceOption;
  return (
    <div>
      <div className="card max-w-96 bg-base-100 shadow-sm my-8">
        <div className="card-body">
          <span className="badge badge-xs badge-warning">Most Popular</span>
          <div className="flex justify-between">
            <h2 className="text-3xl font-bold">{name}</h2>
            <span className="text-xl">{price}</span>
          </div>
          <p className="mt-3">{description}</p>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((feature) => (
              <FeatureOption feature={feature} key={Math.random()} />
            ))}
          </ul>

          <div className="mt-6">
            <button className="btn btn-primary btn-block">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingOption;
