import PolicyPage from "../components/PolicyPage.jsx";

export default function Regulatory() {
  return (
    <PolicyPage
      title="Regulatory information"
      path="/regulatory"
      description="The licensing, supervision and disclosure framework under which Bard Santner Markets Inc and Bard Santner Microfinance Bank operate."
      lastUpdated="30 May 2026"
      sections={[
        {
          heading: "Licensing",
          body: "Bard Santner Microfinance Bank operates under a microfinance banking licence issued by the Reserve Bank of Zimbabwe.\n\nBard Santner Markets Inc is registered with the Securities and Exchange Commission of Zimbabwe in respect of its capital markets activities.",
        },
        {
          heading: "Prudential supervision",
          body: "BSMFB is subject to ongoing prudential supervision by the RBZ, including capital adequacy, liquidity, large-exposure limits, risk management and governance requirements.\n\nQuarterly returns are submitted to the supervisor in accordance with applicable regulation. Annual audited statements are published.",
        },
        {
          heading: "Deposit protection",
          body: "Customer deposits at BSMFB are held in compliance with the Deposit Protection framework administered by the Deposit Protection Corporation of Zimbabwe. Coverage limits and terms apply; please refer to the DPC for details on protected amounts.",
        },
        {
          heading: "AML, sanctions and tax compliance",
          body: "BSMFB operates customer due diligence, transaction monitoring and reporting consistent with international AML / CFT standards and applicable sanctions regimes.\n\nThe bank complies with the Common Reporting Standard (CRS) and the Foreign Account Tax Compliance Act (FATCA) where applicable to customer accounts.",
        },
      ]}
    />
  );
}
