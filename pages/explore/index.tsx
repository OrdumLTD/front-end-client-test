import ExploreSideFilters from "@/components/explore/exploreSideFilters";
import ExploreContent from "@/components/explore/exploreContent";
import Layout from "@/components/layout";
import { useState } from "react";

enum About {
  Web3Fundation,
  Kusama,
}

const Explore = () => {
  const [aboutMenu, setAboutMenu] = useState(About.Web3Fundation);

  return (
    <Layout>
      <div className="flex h-screen w-screen">
        <ExploreSideFilters className="bg-gray-300 w-64" />
        <ExploreContent />
      </div>
    </Layout>
  );
};

export default Explore;
