import PolicyPage from "../components/PolicyPage.jsx";

export default function Complaints() {
  return (
    <PolicyPage
      title="Complaints"
      path="/complaints"
      description="How to make a complaint to Bard Santner, what we do with it, the timeframes we work to, and how to escalate if you are not satisfied with our response."
      lastUpdated="30 May 2026"
      contactEmail="complaints@bardsantner.com"
      sections={[
        {
          heading: "How to make a complaint",
          body: "If something has gone wrong, we want to hear about it. Three channels:\n\n1. Email — complaints@bardsantner.com. Please include your account number (if relevant) and a clear description of what happened.\n2. Telephone — +263 861 200 0700, option 4 for complaints.\n3. In writing — 5th Floor Beverly Court, 100 Nelson Mandela Avenue, Harare, attn. Complaints Officer.",
        },
        {
          heading: "What we do with it",
          body: "Every complaint is logged and acknowledged within two business days. A named complaint owner is assigned, who will investigate and respond.\n\nFor most complaints we will provide a substantive response within ten business days. Where the matter is complex, we will tell you so within ten days and give you an estimated resolution date.",
        },
        {
          heading: "Escalation",
          body: "If you are not satisfied with our response, you can escalate to our Head of Customer Experience, whose details we will provide on request.\n\nIf the matter remains unresolved after our internal escalation, you have the right to refer the complaint to the Reserve Bank of Zimbabwe Banking Complaints Office, or to the relevant ombudsman scheme.",
        },
      ]}
    />
  );
}
