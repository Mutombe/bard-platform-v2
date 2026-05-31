import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Regulatory() {
  return (
    <PolicyPage
      title="Regulatory Information"
      path="/regulatory"
      description="Bard Santner Markets Inc — regulatory disclosures and supervisory information."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "Supervision", body: "Bard Santner Microfinance Bank (BSMFB) operates under licence and is supervised by the relevant prudential authority of the Republic of Zimbabwe. Bard Santner Markets Inc is incorporated under CIPZ entity 42656A0252025." },
        { heading: "Deposit protection", body: "Customer deposits with BSMFB are held in compliance with the Deposit Protection framework. Coverage limits and terms apply per regulator guidance." },
        { heading: "AML/CFT", body: "We perform customer due diligence, transaction monitoring and regulatory reporting in line with international AML/CFT standards and FATF guidance." },
      ]}
    />
  );
}
