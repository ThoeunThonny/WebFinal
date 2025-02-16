import React from "react";
import { FaComputer } from "react-icons/fa6";
const Navbar = () => {
  return (
    <React.Fragment>
      <section>
        <div className="bg-slate-900 w-full h-20 flex items-center pl-10 space-x-4">
          <div>
          <FaComputer className="text-white text-4xl " />
          </div>

          <div>
            <p className="text-white text-2xl font-bold lg:text-4xl">Study Web Front-end</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
