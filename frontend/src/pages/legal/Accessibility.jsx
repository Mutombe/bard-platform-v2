import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Accessibility() {
  return (
    <PolicyPage
      title="Accessibility"
      path="/accessibility"
      description="Bard Santner's commitment to accessibility — bardsantner.com and our branch network."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "Web accessibility", body: "bardsantner.com is built to WCAG 2.1 AA standards. We use semantic HTML, descriptive alt text, sufficient colour contrast, and focus indicators. Keyboard navigation is supported throughout.\n\nIf you encounter an accessibility issue, please email accessibility@bardsantner.com." },
        { heading: "Branch accessibility", body: "Our Harare flagship at 5th Floor Beverly Court is wheelchair-accessible with lift access. New branches in Bulawayo and Mutare (opening 2026) will meet the same standard." },
      ]}
    />
  );
}
