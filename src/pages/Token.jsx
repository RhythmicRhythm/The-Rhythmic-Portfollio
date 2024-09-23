import { useState } from "react";
import TokenInfo from "../components/TokenInfo";
import TradingHistory from "../components/TradingHistory";
import HolderDistribution from "../components/HolderDistribution";
import Trade from "../components/Trade";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { BiPurchaseTagAlt } from "react-icons/bi";

const Token = () => {
  const [activeTab, setActiveTab] = useState("chart");
  return (
    <div>
      <TokenInfo />
      <section className="py-3">
        <div className="container px-4 mx-auto mb-4 sm:hidden ">
          <label className="swap bg-gray-900 rounded-md px-4 py-2">
            <input type="checkbox" />
            <div  onClick={() => setActiveTab("chart")} className="swap-on">
            <div className="flex items-center gap-1">
             <BiPurchaseTagAlt className="text-2xl" />
             <h1 className="text-xl font-bold">Trade</h1>
             </div>
            </div>
            <div  onClick={() => setActiveTab("trade")} className="swap-off">
            <div className="flex items-center gap-1">
             <HiOutlineChartSquareBar className="text-2xl" />
             <h1 className="text-xl font-bold">Charts</h1>
             </div>
            </div>
          </label>
        </div>

        <div className="container px-4 mx-auto sm:hidden">
          <div className="flex flex-wrap -mx-3">
            {activeTab == "chart" && (
              <div className="w-full  px-3 mb-6 lg:mb-0">
                <TradingHistory className="sm-hidden" />
              </div>
            )}
            {activeTab == "trade" && (
              <div className="w-full px-3">
                <Trade />
                <HolderDistribution />
              </div>
            )}
          </div>
        </div>

        <div className="container px-4 mx-auto hidden sm:block">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-3/5 px-3 mb-6 lg:mb-0">
              <TradingHistory className="sm-hidden" />
            </div>
            <div className="w-full lg:w-2/5 px-3">
              <Trade />
              <HolderDistribution />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Token;
