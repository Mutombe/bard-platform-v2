import PolicyPage from "../components/PolicyPage.jsx";

export default function Privacy() {
  return (
    <PolicyPage
      title="Privacy"
      path="/privacy"
      description="How Bard Santner collects, uses, retains and protects your personal information. Your rights under data-protection law and how to exercise them."
      lastUpdated="30 May 2026"
      contactEmail="privacy@bardsantner.com"
      sections={[
        {
          heading: "What we collect",
          body: "We collect the information necessary to operate as a bank: identity (name, ID, date of birth), contact (address, phone, email), financial (income, source of funds, transaction history) and device (IP, browser, device fingerprint where you use our digital channels).\n\nFor regulated activities we are required to collect more. For unregulated activities (this website, marketing emails) we collect less.",
        },
        {
          heading: "How we use it",
          body: "To open, operate and close accounts. To meet our legal obligations (KYC, AML, sanctions screening, tax reporting). To prevent fraud. To improve the products and channels we offer.\n\nWe do not sell personal data. We share it only where required by law, where required to operate (payment networks, correspondent banks, sanctions databases) or where you have explicitly authorised us to.",
        },
        {
          heading: "How long we keep it",
          body: "Account records are kept for the duration of the relationship plus seven years thereafter, in line with banking regulation. Marketing data is kept until you withdraw consent or three years of inactivity, whichever is sooner.\n\nDeletion requests for data we are not legally required to retain are processed within thirty days.",
        },
        {
          heading: "Your rights",
          body: "You have the right to access your data, correct it, request deletion of data we are not required to keep, object to processing for marketing, and complain to the data-protection authority if you believe we have mishandled your information.\n\nTo exercise any of these rights, email privacy@bardsantner.com with a description of what you are asking for and identifying information. We will respond within thirty days.",
        },
      ]}
    />
  );
}
