import Layout from "@/components/layout";
import ChainSidePanel from "./sidePanel";
import ChainContent from "./content";
import ChainSidePanel2 from "./sidePanel/sidePanel2";
// import ChainSidePanel from "../sidePanel";

const Chain = () => {
  return (
    <div className="flex h-full ">
     <ChainSidePanel2 />
     <ChainContent />
    </div>
  );
};
export default Chain;