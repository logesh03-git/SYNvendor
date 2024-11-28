import Restore from "../../svgicons/Restore";
import Warning from "../../assets/cart/warning.png";

const StockAlertCard = () => {
  return (
    <section className="w-[311px] h-[148px] relative bg-white rounded-[15px] border border-[#c1c1c1]">
      {/* Left Section - Stock Alerts */}
      <section className="absolute left-[30px] top-[29px] flex flex-col gap-2">
        <div className="flex items-center gap-[9px]">
          <div className="w-[19px] h-[19px] relative">
            <div className="w-[19px] h-[19px] absolute bg-[#e6e6e6] rounded-full"></div>
            <img
              className="w-[12.67px] h-[12.67px] absolute left-[3px] top-[3px]"
              src={Warning}
              alt="Stock Icon"
            />
          </div>
          <h1 className="text-[#1c1c1c] text-sm font-medium font-['Poppins']">
            Stock Alerts
          </h1>
        </div>

        {/* Stock Alert Items */}
        <section className="pr-1 pt-2 pb-[5px] flex flex-col gap-[5px]">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-[#ffa846] rounded-full border border-[#c18820]"></div>
            <p className="text-[#767676] text-sm font-semibold">
              4 items Low in stock
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-[#ee4e49] rounded-full border border-[#9f1a1a]"></div>
            <p className="text-[#767676] text-sm font-semibold">
              2 items Low in stock
            </p>
          </div>
        </section>
      </section>

      {/* Right Section - Restock Button */}
      <section className="absolute left-[223px] top-[94px] px-1.5 py-0.5 bg-[#e2e2e2] rounded-lg flex items-center gap-1">
        <Restore w={12} h={13} />
        <p className="text-black text-[10px] py-0.4 cursor-pointer">Restock</p>
      </section>
    </section>
  );
};

export default StockAlertCard;