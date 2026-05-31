import Audience from "../Audience.jsx";
import { HERO } from "../../data/images.js";

export default function PrivateBanking() {
  return (
    <Audience
      audienceId="private"
      image={HERO.private}
      ctas={{
        primary:   { label: "Speak with a private banker", to: "/contact?audience=private" },
        secondary: { label: "Our wealth team",              to: "/leadership" },
      }}
    />
  );
}
