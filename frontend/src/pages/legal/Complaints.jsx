import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Complaints() {
  return (
    <PolicyPage
      title="Complaints"
      path="/complaints"
      description="How Bard Santner handles complaints — every complaint reaches a person, not a queue."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "How to complain", body: "Email complaints@bardsantner.com or write to the Complaints Officer, Bard Santner Markets Inc, 5th Floor Beverly Court, 100 Nelson Mandela Avenue, Harare.\n\nAcknowledged within one business day. Substantive reply within ten business days." },
        { heading: "If you are not satisfied", body: "If our response does not resolve the matter, you may refer it to the relevant banking ombudsman or regulator. We will provide the contact details and full case file at your request." },
      ]}
    />
  );
}
