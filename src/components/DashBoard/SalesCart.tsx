import GrowthImage from "../../svgicons/Growth";
import graphImage from "../../assets/cart/graph.png";

const SalesCard = () => {
  return (
    <section className="w-[19.4375rem] h-[9.25rem] pl-[0.5rem] pr-[2.1875rem] pt-[1.875rem] pb-[1.9375rem] bg-[#7aa262] rounded-[0.9375rem] flex justify-between items-center gap-[2.875rem]">
      {/* Sales and Increase Section */}
      <div className="w-[7.75rem] flex flex-col justify-start p-2">
        <p className="text-[#f9ff8c] text-sm font-medium font-['Poppins']">
          Total Sales
        </p>
        <div className="h-[4.125rem] flex flex-col justify-start gap-[0.09375rem]">
          <p className="text-white text-2xl font-bold font-['Poppins']">
            $ 3200
          </p>
          <p className="flex items-center gap-[0.09375rem] text-white text-sm font-normal font-['Poppins']">
            <GrowthImage w={24} h={20} />
            +6% increase
          </p>
        </div>
      </div>

      {/* Image Section */}
      <img className="w-[4.625rem] h-[4.625rem]" src={graphImage} alt="icon" />
    </section>
  );
};

export default SalesCard;