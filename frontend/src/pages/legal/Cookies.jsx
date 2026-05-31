import PolicyPage from "../../components/modern/PolicyPage.jsx";

export default function Cookies() {
  return (
    <PolicyPage
      title="Cookies"
      path="/cookies"
      description="How Bard Santner uses cookies and similar technologies."
      lastUpdated="2 May 2026"
      sections={[
        { heading: "What cookies we set", body: "We use a minimal set of cookies — strictly necessary cookies to operate the site and authenticate signed-in sessions, plus first-party analytics (anonymised) to understand which pages are useful.\n\nWe do NOT use third-party advertising trackers." },
        { heading: "Managing cookies", body: "You can manage cookies via your browser settings. Blocking strictly-necessary cookies may impair core site functionality (signed-in sessions, security)." },
      ]}
    />
  );
}
