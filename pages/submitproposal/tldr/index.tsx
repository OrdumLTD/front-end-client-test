import Layout from "@/components/layout";
import SubmitPropolsalSidePanel from "@/components/submitProposal/sidePanel";
import SubmitProposalTLDR from "@/components/submitProposal/tldr";

const submitProposalTLDRPage = () => {
  return (
    <Layout>
      <div className="flex">
        <SubmitPropolsalSidePanel />
        <SubmitProposalTLDR />
      </div>
    </Layout>
  );
};

export default submitProposalTLDRPage;
