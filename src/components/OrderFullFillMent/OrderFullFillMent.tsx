import StatsCard from "./StatsCard";
import OrderTable from "./OrderTable";
import Order from "../../svgicons/Order";
import TruckIcon from "../../svgicons/TruckIcon";
import Deliver from "../../svgicons/Deliver";
import UrgentIcon from "../../svgicons/UrgentIcon";

const OrderFullFillMent = () => {
  const stats = [
    {
      title: "Total Orders",
      value: 25,
      imageUrl: Order,
    },
    {
      title: "Processing",
      value: "5",
      imageUrl: TruckIcon,
    },
    {
      title: "Delivered",
      value: 10,
      imageUrl: Deliver,
    },
    {
      title: "Urgent",
      value: 2,
      imageUrl: UrgentIcon,
    },
  ];

  return (
    <div>  
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2rem]">
         {stats.map((stat, index) => (
           <StatsCard
             key={index}
             title={stat.title}
             value={stat.value}
             imageUrl={stat.imageUrl}
           />
         ))}
       </div>
       <div>
        <OrderTable />
       </div>
    </div> 
  );
};

export default OrderFullFillMent;