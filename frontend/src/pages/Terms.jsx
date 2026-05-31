import PolicyPage from "../components/PolicyPage.jsx";

export default function Terms() {
  return (
    <PolicyPage
      title="Website terms of use"
      path="/terms"
      description="The terms governing your use of this website. Distinct from the terms governing any product or account with Bard Santner, which are set out in the relevant product documentation."
      lastUpdated="30 May 2026"
      sections={[
        {
          heading: "Use of this website",
          body: "This website is provided for general information about Bard Santner and its services. Information is published in good faith but may not be the most current view; we accept no liability for errors or omissions.\n\nNothing on this website constitutes an offer, advice or recommendation, and nothing creates a binding obligation between you and Bard Santner. Product applications must be made through the appropriate channels.",
        },
        {
          heading: "Intellectual property",
          body: "All content on this website — text, images, logos, code — is the property of Bard Santner Markets Inc or its licensors and is protected by copyright, trademark and other applicable laws. You may view, share and print content for personal, non-commercial use; any other use requires written permission.",
        },
        {
          heading: "Links to other sites",
          body: "This website may link to sites operated by third parties. We do not control or endorse those sites and accept no responsibility for their content, security or privacy practices.",
        },
        {
          heading: "Governing law",
          body: "These terms are governed by the laws of Zimbabwe. Any dispute arising out of your use of this website will be subject to the exclusive jurisdiction of the Zimbabwean courts, without prejudice to your statutory rights as a consumer in your country of residence.",
        },
      ]}
    />
  );
}
