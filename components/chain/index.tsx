import Layout from "@/components/layout";
import ChainSidePanel from "./sidePanel";
import ChainContent from "./content";
// import ChainSidePanel from "../sidePanel";

const Chain = () => {
  return (
    <div className="flex h-full ">
     <ChainSidePanel />
     <ChainContent />
    </div>
  );
};
export default Chain;