import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Legal() {
  return (
    <PolicyPage
      title="Legal"
      path="/legal"
      description="Bard Santner Markets Inc — corporate, regulatory and legal information."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "The entity", body: "Bard Santner Markets Inc is incorporated in the Republic of Zimbabwe under CIPZ registration number 42656A0252025 (9 May 2025). Registered office: 5th Floor, Beverly Court, 100 Nelson Mandela Avenue, Harare." },
        { heading: "Subsidiaries and affiliates", body: "Bard Santner Microfinance Bank (BSMFB) operates under licence and is supervised by the prudential authority. Bard Loans Pvt Ltd is the firm's dedicated credit institution. Bard Santner Golf and Bardiq Journal are wholly-owned adjacencies." },
        { heading: "Disputes", body: "Any disputes arising out of services provided by Bard Santner Markets Inc shall be governed by Zimbabwean law and resolved through the dispute resolution procedure set out in product terms or by the relevant ombudsman where applicable." },
      ]}
    />
  );
}
