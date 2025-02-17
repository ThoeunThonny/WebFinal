import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Navpage from "./Navpage";

const Mainpage: React.FC = () => {
  return (
    <React.Fragment>
      <section>
        <Navbar />
      </section>

      <section className="flex flex-col md:flex-row bg-amber-300 min-h-screen">
        <div className="w-full  md:w-52 lg:w-64 bg-slate-900 min-h-screen p-2">
          <Sidebar />
        </div>

        <div className="flex-1 flex justify-center items-center p-4">
          <Navpage />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Mainpage;
