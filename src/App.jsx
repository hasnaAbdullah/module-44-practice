import "./App.css";
// import Navbar from "../V-01/Components/Navbar/Navbar";
import Navbar from "../V-02/Components/NavBar/Navbar";
import { Suspense } from "react";
import PricingOptions from "../V-05/PricingOptions/PricingOptions";

const pricesPromise = fetch("prices.json").then((res) => res.json());
function App() {
  return (
    <div className="max-w-[1400px] mx-auto p-2">
      <Navbar />
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <PricingOptions pricesPromise={pricesPromise} />
      </Suspense>
    </div>
  );
}

export default App;
