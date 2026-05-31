import PolicyPage from "../components/PolicyPage.jsx";

export default function Cookies() {
  return (
    <PolicyPage
      title="Cookies"
      path="/cookies"
      description="The cookies and similar technologies we use on this website, what they do and how to control them."
      lastUpdated="30 May 2026"
      sections={[
        {
          heading: "What cookies we use",
          body: "Three categories: strictly necessary (session management, security, basic navigation), preference (language, region, login state) and analytics (aggregated, anonymised usage data used to improve the site).\n\nWe do not use advertising or cross-site tracking cookies.",
        },
        {
          heading: "Managing cookies",
          body: "Strictly necessary cookies cannot be disabled — the site will not function without them. Preference and analytics cookies can be managed through your browser settings or through the cookie banner shown on first visit.\n\nClearing cookies will reset your preferences and log you out of online banking.",
        },
      ]}
    />
  );
}
