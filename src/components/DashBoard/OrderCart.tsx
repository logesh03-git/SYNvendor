import Visibility from "../../svgicons/Visibility";;
import Bag from "../../assets/cart/bag.png";

const OrderCard = () => {
  return (
    <div className="w-[311px] h-[148px] pl-[27px] pr-6 pt-[29px] pb-[30px] bg-white rounded-[15px] border border-[#c1c1c1] flex justify-between">
      {/* Left Section - Active Orders */}
      <section className="w-40 flex flex-col gap-[5px]">
        <div className="flex items-center gap-[9px]">
          <div className="w-[19px] h-[19px] relative">
            <div className="w-[19px] h-[19px] absolute bg-[#e6e6e6] rounded-full"></div>
            <img
              className="w-[12.67px] h-[12.67px] absolute left-[3.17px] top-[3.17px]"
              src={Bag}
              alt="icon"
            />
          </div>
          <span className="text-[#1c1c1c] text-sm font-medium font-['Poppins']">
            Active Orders
          </span>
        </div>

        {/* Active Orders and Pending Orders */}
        <p className="text-[#4f6527] text-2xl font-bold font-['Poppins']">
          15
          <span className="text-[#767676] text-xs font-normal font-['Poppins']">
            {" "}
            Products
          </span>
        </p>
        <div className="flex items-center">
          <div className="w-2 h-2 bg-[#ffa846] rounded-full border border-[#c18820]"></div>
          <p className="text-[#1c1c1c] text-sm font-normal font-['Poppins']">
            Pending Orders:{" "}
            <span className="text-[#1c1c1c] font-semibold">7</span>
          </p>
        </div>
      </section>

      {/* Right Section - View All Button */}
      <section className="flex flex-col justify-between items-end w-36">
        <div className="px-1.5 py-1 bg-[#e2e2e2] rounded-lg flex items-center gap-1 mt-auto">
          <div className="w-3 h-3">
            <Visibility w={12} h={13} />
          </div>
          <span className="text-black text-[10px] font-normal font-['Poppins'] cursor-pointer">
            View all
          </span>
        </div>
      </section>
    </div>
  );
};
export default OrderCard;