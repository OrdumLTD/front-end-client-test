import { PlusCircle } from "react-feather";

function Sidebar() {
  return (
    <div className="stiky top-0 w-8 md:w-20 h-full border-r border-black bg-white absolute">
      <ul className="relative grid content-center content-center gap-2 md:gap-4 pt-2 pl-1.5 md:pt-6 md:px-5">
        <li className="relative">
        <div className="">
            <button
              className="w-5 h-5 md:w-12 md:h-12 rounded-full 
                       bg-black"
            >
            </button>
          </div>
        </li>
        <li className="relative">
          <div className="">
            <button
              className="w-5 h-5 md:w-12 md:h-12 rounded-full 
                       bg-white "
            >
              <PlusCircle className="hidden md:block" size={48} strokeWidth={0.9}/>
              <PlusCircle className="block md:hidden" size={20} strokeWidth={0.9}/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
