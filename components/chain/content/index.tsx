import Layout from "@/components/layout";

// import ChainSidePanel from "../sidePanel";

const ChainContent = () => {
  return (
    <div className="pt-4 px-10">
      <div>
        <div className="text-2xl">Welcome Back, Human!</div>
        <div className="mt-5 flex gap-5">
          <div className="flex flex-col items-center border border-black rounded px-16 py-2">
            <div className="">Active Grants</div>
            <span className="font-bold">-</span>
          </div>
          <div className="flex flex-col items-center border border-black rounded px-16 py-2">
            <div className="">Next Milestone Deadline</div>
            <span className="font-bold"> DD/MM/YYYY</span>
          </div>
          <div className="flex flex-col items-center border border-black rounded px-16 py-2">
            <div className="">New Comments</div>
            <span className="font-bold">-</span>
          </div>
          <div className="flex flex-col items-center border border-black rounded px-16 py-2">
            <div className="">Pending Grants</div>
            <span className="font-bold">-</span>
          </div>
        </div>
        <div className="mt-10">
          <div className="flex justify-between">
            <div className="flex gap-8">
              <div className="text-2xl font-bold">New Activity</div>
              <div className="text-2xl">History</div>
            </div>
            <div className="flex gap-8">
              <select className="bg-white text-gray-500 border border-black pr-8 pl-2">
                <option>All Chains</option>
              </select>
              <select className="bg-white text-gray-500 border border-black pr-8 pl-2">
                <option>All Organsations</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-2 border-t border-2 border-black"></div>
        <div className="mt-2">
          <div className="border border-2 border-black px-6 py-4 flex justify-between gap-5">
            <div className="text-2xl font-semibold pt-1">Ordum</div>
            <div className="border rounded-xl p-2 bg-red-100 text-sm h-10">
              Milestone Deadline
            </div>
            <div className="flex flex-col">
              <div>Ordum Milestone 1</div>
              <div className="text-gray-400">15/04/2024</div>
            </div>
           <button className="bg-black text-white px-5 w-40 rounded-xl">Submit</button>
          </div>

          <div className="px-6 py-4 flex justify-between gap-5 bg-gray-100">
            <div className="text-2xl font-semibold pt-1">Kusama</div>
            <div className="border rounded-xl p-2 bg-green-200 text-sm h-10">
              New Comment
            </div>
            <div className="flex flex-col">
              <div>Referenda Name</div>
              <div className="text-gray-400">@userame4</div>
            </div>
           <button className="bg-black text-white px-5 w-40 rounded-xl">View</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default ChainContent;
