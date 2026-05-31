import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy"
      path="/privacy"
      description="How Bard Santner collects, uses and safeguards client data."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "Data we collect", body: "We collect personal information necessary to provide banking services — identity verification documents, contact details, financial information, transaction records, and device and session data for security purposes.\n\nWhere we collect data from third parties (credit bureaus, sanctions screening providers), we tell you what was collected and from whom in your onboarding pack." },
        { heading: "How we use your data", body: "Your data is used to operate accounts, assess credit, prevent fraud and money laundering, meet regulatory obligations and improve our services.\n\nWe do not sell your data. We do not share it with third parties for marketing." },
        { heading: "Your rights", body: "You have the right to access, correct, restrict and (where applicable) erase personal data we hold about you. You may withdraw consent for processing that is consent-based.\n\nTo exercise these rights, email privacy@bardsantner.com or write to the Data Protection Officer at our registered office." },
        { heading: "Retention", body: "Account data is retained for the duration of the relationship plus the period required by Zimbabwean banking regulation and AML/CFT legislation (typically seven years after closure)." },
      ]}
    />
  );
}
