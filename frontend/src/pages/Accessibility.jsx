import PolicyPage from "../components/PolicyPage.jsx";

export default function Accessibility() {
  return (
    <PolicyPage
      title="Accessibility"
      path="/accessibility"
      description="Bard Santner's commitment to accessible banking. Conformance, channel options, branch accessibility and how to request accommodations."
      lastUpdated="30 May 2026"
      contactEmail="accessibility@bardsantner.com"
      sections={[
        {
          heading: "Our commitment",
          body: "Banking is for everyone. Bard Santner is committed to designing digital channels, branch experiences and customer communications that meet the access needs of all our customers, including customers with disabilities.\n\nThis site is built to align with WCAG 2.2 Level AA. We test continuously with assistive technologies and welcome feedback where we fall short.",
        },
        {
          heading: "Channel options",
          body: "Customers who prefer or require non-digital channels can bank in branch, by telephone (+263 861 200 0700), or by appointment with a banker.\n\nLarge-print statements, audio statements and braille correspondence are available on request at no additional cost.",
        },
        {
          heading: "Branch accessibility",
          body: "Our Harare flagship branch is wheelchair-accessible and equipped with induction loops at every counter. Branch staff include trained sign-language users on a rotating roster.\n\nIf you plan to visit a branch and have specific access requirements, calling ahead helps us ensure the right support is available when you arrive.",
        },
        {
          heading: "Requesting accommodations",
          body: "To request a specific accommodation or to give feedback on our accessibility, email accessibility@bardsantner.com or call +263 861 200 0700 and ask for the accessibility team.\n\nWe respond within two business days.",
        },
      ]}
    />
  );
}
