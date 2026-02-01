import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-32 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-t border-white/10">

      {/* TOP */}
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT TEXT */}
        <p className="text-gray-400 text-sm">
          Designed and Developed by{" "}
          <span className="text-white font-semibold">
            Ahmed Hossam
          </span>
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-6 text-gray-400">

          <a
            href="https://github.com/ahmedhossam32"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/ahmed-hossam-a51274271/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="mailto:ahmedhemly2020@yahoo.com"
            className="hover:text-white transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ahmed Hossam. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
