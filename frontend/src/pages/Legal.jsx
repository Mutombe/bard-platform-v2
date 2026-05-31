import PolicyPage from "../components/PolicyPage.jsx";

export default function Legal() {
  return (
    <PolicyPage
      title="Legal information"
      path="/legal"
      description="The legal information required for a regulated financial institution. Entity, registration, regulator, capital and the document hierarchy."
      lastUpdated="30 May 2026"
      sections={[
        {
          heading: "Entity",
          body: "This website is operated by Bard Santner Markets Inc, a financial services institution incorporated in the Republic of Zimbabwe with its registered office at 5th Floor Beverly Court, 100 Nelson Mandela Avenue, Harare.\n\nBard Santner Microfinance Bank (BSMFB) is a wholly-owned subsidiary of Bard Santner Markets Inc, operating under licence from the relevant prudential authority.",
        },
        {
          heading: "Regulator",
          body: "BSMFB is supervised by the Reserve Bank of Zimbabwe (RBZ) under the Microfinance Act. Bard Santner Markets Inc is regulated where it carries out regulated activities and registered with the Securities and Exchange Commission of Zimbabwe for capital markets activities.\n\nCorrespondent banking relationships are subject to the prudential frameworks of the correspondents' home jurisdictions.",
        },
        {
          heading: "Capital and reporting",
          body: "Bard Santner Markets Inc and BSMFB maintain capital adequacy in line with the requirements of their respective regulators. Annual audited financial statements are published on /investor-relations and lodged with the relevant authorities.\n\nQuarterly capital and liquidity returns are submitted to the prudential supervisor on the timetable mandated by regulation.",
        },
        {
          heading: "Document hierarchy",
          body: "Where there is any conflict between information published on this website and the documentary terms governing a specific product (account opening forms, mandate, facility letter), the documentary terms prevail.\n\nThis website is for general information and does not constitute an offer, advice, or recommendation. Product availability, terms and pricing are subject to change.",
        },
      ]}
    />
  );
}
