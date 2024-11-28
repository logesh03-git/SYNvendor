import dash from '../../assets/sidebar/grid_view.png';
import category from '../../assets/sidebar/category.png';
import order from '../../assets/sidebar/list_alt_check.png';
import bid from '../../assets/sidebar/shoppingmode.png';
import ship from '../../assets/sidebar/package.png';
import paid from '../../assets/sidebar/paid.png';
import report from '../../assets/sidebar/monitoring.png';
import help from '../../assets/sidebar/help.png';
import log from '../../assets/sidebar/logout.png';
import { useNavigate } from "react-router-dom";
const Sidebar = ({ setTitle }: any) => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Dashboard", path: "/dashboard" ,img:dash },
    { title: "Inventory Management", path: "/inventory",img:category },
    { title: "Order Fulfillment", path: "/orders", img:order },
    { title: "Bidding", path: "/bidding", img:bid },
    { title: "Shipment & Logistics", path: "/shipment", img:ship },
    { title: "Payment & Tracking", path: "/payment", img :paid },
    { title: "Reports & Insights", path: "/reports", img:report },
  ];


  return (
    <div className="w-80 h-[140vh] bg-[#DDF2D0] flex flex-col text-gray-700">
      {/* Header */}
      <h1 className="p-[50px] text-black font-poppins text-[20px] font-bold leading-normal text-center">
        Shopyournursery
      </h1>

      {/* Menu Items */}
      <nav className="flex-grow">
        <ul className="space-y-4 p-4">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className="flex items-center space-x-6 p-2 rounded-xl hover:bg-[#9FDD79] cursor-pointer"
              onClick={() => {
                setTitle(item.title);
                navigate(item.path);
              }}
            >
              <img src={item.img} />
              <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 ">
        <div className="flex items-center space-x-6 text-gray-600 hover:text-gray-800 cursor-pointer">
          <img src={help} alt="" />
          <span className="text-[#3A3A3A] font-poppins text-[20px] font-normal leading-normal">
         Help and Support
        </span>
        </div>
        <div className="flex items-center space-x-6 text-[#D63C3C] hover:text-red-800 cursor-pointer">
          <img src={log} alt="" />
          <span className="font-poppins text-[20px] font-normal leading-normal">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;