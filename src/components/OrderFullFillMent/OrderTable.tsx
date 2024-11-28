import React, { useState } from "react";
// import searchIcon from "../../assets/SearchIcon.png"
// import { ReactComponent as SearchIcon } from "../../assets/SearchIcon.png";
const orders = [
  {
    id: "#001001",
    product: "Fiddle Leaf Fig",
    quantity: 2,
    location: "Los Angeles, CA",
    status: "Processing",
    trackingId: "",
  },
  {
    id: "#001002",
    product: "Monstera Deliciosa",
    quantity: 1,
    location: "New York, NY",
    status: "Ready to ship",
    trackingId: "",
  },
  {
    id: "#001003",
    product: "ZZ Plant",
    quantity: 3,
    location: "Miami, FL",
    status: "Ready to ship",
    trackingId: "",
  },
  {
    id: "#001004",
    product : "Peace Lily",
    quantity: 5,
    location: "Chicago, IL",
    status: "Delivered",
    trackingId: "SYN12345678",
  },
  {
    id: "#001005",
    product: "Snake Plant",
    quantity: 1,
    location: "San Francisco, CA",
    status: "Processing",
    trackingId: "",
  },
  {
    id: "#001006",
    product: "Rubber Plant",
    quantity: 4,
    location: "Seattle, WA",
    status: "Shipped",
    trackingId: "SYN22123456",
  },
  {
    id: "#001007",
    product: "Pothos",
    quantity: 2,
    location: "Denver, CO",
    status: "Shipped",
    trackingId: "SYN87654321",
  },
  {
    id: "#001008",
    product: "Bamboo Palm",
    quantity: 1,
    location: "Austin, TX",
    status: "Ready to ship",
    trackingId: "",
  },
  {
    id: "#001009",
    product: "Spider Plant",
    quantity: 2,
    location: "Boston, MA",
    status: "Processing",
    trackingId: "",
  },
  {
    id: "#0010010",
    product: "ALoe Vera",
    quantity: 6,
    location: "Portland, OR",
    status: "Processing",
    trackingId: "SYN87654221",
  },
];
const OrdersTable = () => {
    const [filter, setFilter] = useState("All");
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [clickedButtons, setClickedButtons] = useState({});
    const [trackingIds, setTrackingIds] = useState({});
    
    
  
    const handleFilter = (status) => setFilter(status);
  
    const handleCheckboxToggle = (id) => {
      setSelectedOrders((prev) =>
        prev.includes(id)
          ? prev.filter((orderId) => orderId !== id)
          : [...prev, id]
      );
    };
  
    const handleSelectAll = () => {
      if (isAllSelected) {
        setSelectedOrders([]);
      } else {
        const allVisibleOrderIds = filteredOrders.map((order) => order.id);
        setSelectedOrders(allVisibleOrderIds);
      }
      setIsAllSelected(!isAllSelected);
    };
  
    const handleButtonClickAdd = (orderId, buttonType) => {
      setClickedButtons((prev) => ({
        ...prev,
        [orderId]: { ...prev[orderId], [buttonType]: true },
      }));
    };
  
    const handleButtonClick = (orderId, buttonType) => {
      setClickedButtons((prev) => ({
        ...prev,
        [orderId]: {
          ...prev[orderId],
          [buttonType]: !prev[orderId]?.[buttonType],
        },
      }));
    };
  
    const handleTrackingChange = (e, orderId) => {
      const { value } = e.target;
      setTrackingIds((prev) => ({
        ...prev,
        [orderId]: value, // Update the input value in state
      }));
    };
  
    const filteredOrders = orders.filter((order) => {
      return filter === "All" || order.status === filter;
    });
  
    const statusOptions = ["Processing", "Ready to ship", "Delivered", "Shipped"];
  
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-[90%] max-w-[80rem] bg-white rounded-[10px] p-6 shadow-md">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center mb-6">
            <h1 className="text-lg font-medium text-black">Orders</h1>
            <input
              type="text"
              placeholder="Search Order ID or Tracking ID"
              className="h-[30px] px-[21px] py-2.5 bg-[#ececec] rounded-[5px] text-[#a6a6a6] text-sm w-full md:w-72"
            />
          </div>
  
          {/* Second Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="w-4 h-4"
              />
              <label className="text-sm text-black">Select All</label>
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Processing", "Shipped", "Delivered", "Ready to ship"].map(
                (status) => (
                  <button
                    key={status}
                    onClick={() => handleFilter(status)}
                    className={`px-3 py-1 border rounded-lg ${
                      filter === status
                        ? "bg-[#638424] text-white"
                        : "bg-white border-[#638424] text-black"
                    }`}
                  >
                    {status}
                  </button>
                )
              )}
            </div>
          </div>
  
          {/* Table Section */}
          <div className="overflow-auto max-h-[30rem]">
            <table className="w-full text-left text-sm border-none">
              <thead>
                <tr className="bg-[#efefef] border-none">
                  <th className="p-4 bg-[#ffffff]"></th>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Quantity</th>
                  <th className="p-4">Customer Location</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Tracking ID</th>
                  <th className="p-4">Add Tracking</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-gray-100 text-black text-xs border-none"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order.id)}
                        onChange={() => handleCheckboxToggle(order.id)}
                        className="w-4 h-4"
                      />
                    </td>
                    <td className="p-4">{order.id}</td>
                    <td className="p-4">{order.product}</td>
                    <td className="p-4">{order.quantity}</td>
                    <td className="p-4">{order.location}</td>
                    <td className="p-4">
                      <select
                        className="border-none px-2 py-1 rounded-lg"
                        value={order.status}
                        onChange={(e) =>
                          console.log("Change status:", e.target.value)
                        }
                      >
                        <option value={order.status}>{order.status}</option>
                        {statusOptions
                          .filter((status) => status !== order.status)
                          .map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td className="p-4">
                      <input
                        type="text"
                        placeholder="Add Tracking"
                        className="border-none px-2 py-1 rounded-lg w-full"
                        value={trackingIds[order.id] || order.trackingId}
                        onChange={(e) => handleTrackingChange(e, order.id)}
                        disabled={order.trackingId !== ""}
                      />
                    </td>
                    <td className="p-4">
                      <button
                        className={`px-3 py-1 rounded-lg ${
                          order.trackingId !== ""
                            ? "bg-[#c1c1c1] text-white cursor-not-allowed"
                            : "bg-[#ddf2d0] text-black"
                        }`}
                        onClick={() =>
                          order.trackingId === "" &&
                          handleButtonClickAdd(order.id, "Add")
                        }
                        disabled={order.trackingId !== ""}
                      >
                        Add
                      </button>
                    </td>
                    <td className="p-4">
                      <button
                        className={`px-3 py-1 rounded-lg ${
                          clickedButtons[order.id]?.["View Details"]
                            ? "bg-[#c1c1c1] text-white"
                            : "bg-[#ddf2d0] text-black"
                        }`}
                        onClick={() =>
                          handleButtonClick(order.id, "View Details")
                        }
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };
  
  export default OrdersTable;
  