import PolicyPage from "../components/PolicyPage.jsx";

export default function Security() {
  return (
    <PolicyPage
      title="Security"
      path="/security"
      description="How Bard Santner protects customer accounts, channels and data. The security stack, the obligations on us, the obligations on you, and how to recognise fraud."
      lastUpdated="30 May 2026"
      contactEmail="security@bardsantner.com"
      sections={[
        {
          heading: "Our security commitment",
          body: "Customer security is a board-level concern at Bard Santner. Every digital channel — online banking, mobile app, USSD, branch terminals — is encrypted end-to-end and authenticated against device, biometric and behavioural signals.\n\nThe bank's security operations team monitors transactions and channel activity continuously. Suspicious activity is escalated, customers are contacted, and accounts can be paused within minutes when needed.",
        },
        {
          heading: "Authentication on every channel",
          body: "Login requires two factors: something you know (PIN or password) and something you have (registered device, biometric, or one-time code). High-value transactions require step-up authentication.\n\nWe do not, and will never, ask you for your full password, OTP or PIN by phone, email or SMS. Anyone asking for those credentials is not Bard Santner.",
        },
        {
          heading: "Encryption and data handling",
          body: "All communication between your device and Bard Santner systems is protected by TLS 1.3 or equivalent. At rest, customer data is encrypted with AES-256.\n\nAccess to customer data inside the bank is granted on a least-privilege basis, logged, and audited quarterly. Our access logs are retained in line with our data retention policy.",
        },
        {
          heading: "Fraud awareness",
          body: "The most common attacks are not technical: they are social. Someone calls claiming to be from the bank and asks you to move money 'for safekeeping'. They are not the bank.\n\nIf in doubt, end the call and call us back on the number printed on your card or on this site. We will never penalise you for verifying the person you are speaking to.",
        },
        {
          heading: "Reporting a concern",
          body: "If you suspect fraudulent activity on your account, call our 24-hour fraud line on +263 861 200 0700 (option 9) immediately.\n\nFor non-urgent concerns — a suspicious email, an unfamiliar website pretending to be us — email security@bardsantner.com with as much detail as you can provide.",
        },
      ]}
    />
  );
}
