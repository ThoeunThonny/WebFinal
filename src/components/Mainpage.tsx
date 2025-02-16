import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";
import { Menu } from "lucide-react";

const Mainpage: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Navbar Section */}
      <section className="relative">
        <Navbar />
        {/* Mobile Menu Button */}
        <button
          className="absolute top-4  md:hidden bg-gray-800 text-white p-2 mt-16 rounded"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu size={24} />
        </button>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row bg-amber-300 min-h-screen">
        {/* Sidebar - Toggle on Mobile */}
        <div
          className={`fixed inset-y-0 left-0 transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out w-64 bg-slate-900 min-h-screen p-2`}
        >
          <Sidebar />
        </div>

        {/* Overlay when Sidebar is open on mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Content Area */}
        <div className="flex-1 flex justify-center items-center p-4">
          <Navpage />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Mainpage;
