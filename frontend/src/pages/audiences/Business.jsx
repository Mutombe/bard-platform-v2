import Audience from "../Audience.jsx";
import { HERO } from "../../data/images.js";

export default function Business() {
  return (
    <Audience
      audienceId="business"
      image={HERO.business}
      ctas={{
        primary:   { label: "Open a Business Account", to: "/products/business-account" },
        secondary: { label: "Apply for working capital", to: "/products/working-capital" },
      }}
    />
  );
}
