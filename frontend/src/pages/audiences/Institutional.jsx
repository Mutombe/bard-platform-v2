import Audience from "../Audience.jsx";
import { HERO } from "../../data/images.js";

export default function Institutional() {
  return (
    <Audience
      audienceId="institutional"
      image={HERO.institutional}
      ctas={{
        primary:   { label: "Contact the institutional desk", to: "/contact?audience=institutional" },
        secondary: { label: "Treasury services",               to: "/products/treasury-services" },
      }}
    />
  );
}
