import { useState } from "react";
import { VscSettings } from "react-icons/vsc";

const Trade = () => {
  const [activeTab, setActiveTab] = useState("sell");
  return (
    <div>
      {/* SLIPPAGE MODAL */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
      {/* SLIPPAGE MODAL */}
      <div className="bg-gray-900 p-4 rounded-md mb-6">
        <div className="flex justify-center gap-1 bg-gray-800 rounded-md p-1 mb-4">
          <button
            onClick={() => setActiveTab("buy")}
            className={` w-full rounded-md px-12 py-2 text-3xl font-bold ${
              activeTab === "buy" ? "bg-primary" : ""
            }`}
          >
            Buy
          </button>
          <button
            onClick={() => setActiveTab("sell")}
            className={` w-full rounded-md px-12 py-2 text-3xl font-bold ${
              activeTab === "sell" ? "bg-pink-600" : ""
            }`}
          >
            Sell
          </button>
        </div>
        {/* BUY */}
        {activeTab == "buy" && (
          <div className="">
            <div className="flex justify-between items-center mb-2">
              <div className="bg-gray-800 hover:bg-gray-700 px-4 py-1 rounded-md cursor-pointer">
                <p className="text-xs font-bold ">Switch to token</p>
              </div>
              <div
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className=" px-4 py-1 rounded-md cursor-pointer"
              >
                <VscSettings className="text-xl text-gray-400 hover:text-gray-200" />
              </div>
            </div>
            <label className="input rounded-md bg-gray-900 input-bordered flex items-center gap-1 mb-2">
              <input type="text" className="grow font-bold" placeholder="0.0" />
              <kbd className="kbd kbd-sm bg-transparent border-none font-bold">
                ETH
              </kbd>
              <kbd className="kbd kbd-sm">
                <img
                  className="w-6"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </kbd>
            </label>
            <p className="text-[10px] font-semibold">
              <span className="">Balance:</span>
              <span className="">--ETH</span>
            </p>
            <div className="flex gap-2 mt-4 mb-4">
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">0.001ETH</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">0.01ETH</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">0.1ETH</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">1ETH</p>
              </div>
            </div>
            <button className="btn btn-active btn-primary w-full rounded-md">
              Secondary
            </button>
          </div>
        )}
        {/* BUY */}
        {/* SELL */}
        {activeTab == "sell" && (
          <div className="">
            <div className="flex justify-end mb-1">
              <div
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className=" px-4 py-1 rounded-md"
              >
                <VscSettings className="text-xl text-gray-400 hover:text-gray-200" />
              </div>
            </div>
            <label className="input rounded-md bg-gray-900 input-bordered flex items-center gap-1 mb-2">
              <input type="text" className="grow font-bold" placeholder="0.0" />
              <kbd className="kbd kbd-sm bg-transparent border-none font-bold">
                Token
              </kbd>
              <kbd className="kbd kbd-sm">
                <img
                  className="w-6"
                  src="https://w7.pngwing.com/pngs/268/1013/png-transparent-ethereum-eth-hd-logo-thumbnail.png"
                  alt=""
                />
              </kbd>
            </label>
            <p className="text-[10px] font-semibold">
              <span className="">Balance:</span>
              <span className="">--token</span>
            </p>
            <div className="flex gap-2 mt-4 mb-4">
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">25%</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">50%</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">75%</p>
              </div>
              <div className="bg-gray-800 px-4 py-1 rounded-md cursor-pointer hover:bg-gray-700">
                <p className="text-sm font-bold">100%</p>
              </div>
            </div>
            <button className="btn btn-active btn-primary w-full rounded-md">
              Secondary
            </button>
          </div>
        )}
        {/* SELL */}
      </div>
      <div className="bg-gray-900 p-4 rounded-md mb-6">
        <h1 className="font-bold text-lg mb-1">
          <span className="">Bonding Curve Progress:</span>
          <span className="">10%</span>
        </h1>
        <div className="">
          <progress
            className="progress progress-primary h-4 w-full rounded-xl"
            value="10"
            max="100"
          ></progress>
        </div>
        <p className="text-xs font-semibold mt-1">
          There are{" "}
          <span className="text-base uppercase text-blue-400">
            {" "}
            0 SUNJUSTIN
          </span>{" "}
          still available for sale in the bonding curve and there are{" "}
          <span className="text-base uppercase text-blue-400">0 ETH</span> in
          the bonding curve.
        </p>
        <p className="text-xs font-semibold mt-1">
          When the market cap reaches
          <span className="text-base uppercase text-blue-400">
            {" "}
            $ 80,185.16
          </span>{" "}
          all the liquidity from the bonding curve will be deposited into
          Sunswap and burned. Progression increases as the price goes up.
        </p>
      </div>
    </div>
  );
};

export default Trade;
