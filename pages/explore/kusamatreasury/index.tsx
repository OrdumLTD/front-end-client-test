import Layout from "@/components/layout";
import ChainSidePanel from "@/components/chain/sidePanel";
import ChainInfo from "@/components/explore/chainInfo";

const Explore = () => {
  return (
    <Layout>
      <div className="flex flex-1 h-screen w-screen">
        <ChainSidePanel className="bg-gray-300 w-72" />
        <ChainInfo />
      </div>
    </Layout>
  );
};

export default Explore;
