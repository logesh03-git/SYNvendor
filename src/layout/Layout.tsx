import { useEffect, useState } from "react";
import Sidebar from "../components/SideBar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Layout() {
    const [title, setTitle] = useState("Dashboard"); 

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    /*     <div className="flex  h-screen">
      <div className="w-[350px] h-[982px]">
      <Sidebar />
      </div>
      
      <div className="flex-grow  flex flex-col h-[982px]">
        <Navbar />
        <Overview/>
      </div>
    </div> */

  return (
    <div className="flex  h-screen">
      <div className="w-[350px] h-[982px]">
        <Sidebar setTitle={setTitle} /> {/* Pass setTitle to Sidebar */}
      </div>
      <div className="flex-grow  flex flex-col h-[982px]">
        <Navbar title={title} /> {/* Navbar updates with title */}
        <div className="p-4 w-full">
          {/* This renders the child routes content */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;