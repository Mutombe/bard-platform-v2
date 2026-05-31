import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Security() {
  return (
    <PolicyPage
      title="Security"
      path="/security"
      description="Bard Santner's security framework — for digital channels and the branch network."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "Online security", body: "All sessions are end-to-end encrypted (TLS 1.3 in transit, AES-256 at rest). Biometric authentication on iOS and Android. Device-bound credentials so a stolen password alone unlocks nothing.\n\nReal-time alerts for every login, transfer or change of detail." },
        { heading: "Fraud awareness", body: "We will never ask for your password, PIN or one-time code by phone, SMS or email. If anyone claims to be from Bard Santner and asks for these, hang up and call the number on the back of your card." },
        { heading: "Reporting security incidents", body: "Email security@bardsantner.com or call the 24/7 security line on +263 861 200 0700. Acknowledged within one business hour." },
      ]}
    />
  );
}
