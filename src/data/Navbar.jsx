import { Icons } from "../Components/ui/icon";
import { HomeIcon, Linkedin, Code, Instagram } from "lucide-react"; // Adjust if needed for icon types in your setup

export const Navbar = [{ href: "/", icon: HomeIcon, label: "Home" }];

export const Contact = {
  email: "hundreomkar7@gmail.com",
  tel: "+91 86258 07046",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/Omkar-Hundre",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hundreomkar",
      icon: Linkedin,
      navbar: true,
    },
    Codolio: {
      name: "Codolio",
      url: "https://codolio.com/profile/CatFish",
      icon: Code, // adjust to an appropriate icon if available
      navbar: false,
    },
    Twitter: {
      name: "Twitter",
      url: "https://x.com/omkar059",
      icon: Icons.x,
      navbar: false,
    },
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/hundre_omkar?igsh=MTM1d3hrYmttNjNmMw==",
      icon: Instagram,
      navbar: true,
    },
  },
};
