import Audience from "../Audience.jsx";
import { HERO } from "../../data/images.js";

export default function Personal() {
  return (
    <Audience
      audienceId="personal"
      image={HERO.personal}
      ctas={{
        primary:   { label: "Open a Current Account", to: "/products/everyday-account" },
        secondary: { label: "Speak with a banker",     to: "/contact?audience=personal" },
      }}
    />
  );
}
