import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Terms() {
  return (
    <PolicyPage
      title="Terms of Use"
      path="/terms"
      description="Terms governing the use of bardsantner.com and Bard Santner digital services."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "Use of this site", body: "By using bardsantner.com you agree to these terms. The site provides general information about Bard Santner Markets Inc and its services. Nothing on this site constitutes financial advice.\n\nProduct terms apply to all products and supersede general site terms where they conflict." },
        { heading: "Accounts and security", body: "If you hold an account with Bard Santner, you are responsible for keeping your credentials secure. We will never ask for your password by phone, email or chat.\n\nReport suspected fraud immediately on the 24/7 line listed in your account documents." },
        { heading: "Intellectual property", body: "All content on this site — text, photography, layout, software — is the intellectual property of Bard Santner Markets Inc or its licensors and is protected by copyright and other laws." },
        { heading: "Limitation of liability", body: "Information on this site is provided 'as is' for general guidance. While we make every effort to keep it accurate, we make no warranty as to completeness or fitness for purpose." },
      ]}
    />
  );
}
