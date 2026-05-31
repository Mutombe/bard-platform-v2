import Audience from "../Audience.jsx";
import { HERO } from "../../data/images.js";

export default function International() {
  return (
    <Audience
      audienceId="international"
      image={HERO.international}
      ctas={{
        primary:   { label: "Open a Diaspora Account", to: "/products/diaspora-account" },
        secondary: { label: "Foreign exchange",         to: "/products/foreign-exchange" },
      }}
    />
  );
}
