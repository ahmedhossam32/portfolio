import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT TEXT */}
        <p className="text-gray-400 text-sm text-center md:text-left">
          Designed & Developed by{" "}
          <span className="text-white font-semibold">
            Ahmed Hossam
          </span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-gray-400">
          <SocialIcon
            href="https://github.com/ahmedhossam32"
            label="GitHub"
          >
            <Github size={22} />
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/ahmed-hossam-a51274271/"
            label="LinkedIn"
          >
            <Linkedin size={22} />
          </SocialIcon>

          <SocialIcon
            href="mailto:ahmedhemly2020@yahoo.com"
            label="Email"
          >
            <Mail size={22} />
          </SocialIcon>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} Ahmed Hossam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* Reusable icon */
function SocialIcon({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="
        transition
        hover:text-white
        hover:scale-110
      "
    >
      {children}
    </a>
  );
}
