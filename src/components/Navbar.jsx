import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FolderGit2,
  FileText,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

/* LeetCode icon */
const LeetCodeIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 2.348a1.25 1.25 0 0 0-1.767 0L3.77 10.294a5.25 5.25 0 0 0 0 7.424l2.512 2.512a5.25 5.25 0 0 0 7.424 0l7.946-7.946a1.25 1.25 0 1 0-1.768-1.768l-7.946 7.946a2.75 2.75 0 0 1-3.888 0l-2.512-2.512a2.75 2.75 0 0 1 0-3.888l7.946-7.946a1.25 1.25 0 0 0 0-1.768Z" />
    <path d="M15.75 6.5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6Z" />
  </svg>
);

export default function Navbar() {
  const linkClass =
    "flex items-center gap-2 hover:text-white transition";

  const activeClass =
    "text-purple-400";

  const navLinkClass = ({ isActive }) =>
    `${linkClass} ${isActive ? activeClass : ""}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <nav className="w-full px-8 py-4 flex items-center">

        {/* LEFT — NAME */}
        <div className="flex-1">
          <NavLink
            to="/"
            className="text-2xl font-bold text-purple-400"
          >
            Ahmed
          </NavLink>
        </div>

        {/* CENTER — NAV LINKS */}
        <ul className="flex items-center gap-10 text-gray-300 font-medium">

          <NavLink
            to="/"
            end
            className={navLinkClass}
          >
            <Home size={18} />
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkClass}
          >
            <User size={18} />
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={navLinkClass}
          >
            <FolderGit2 size={18} />
            Projects
          </NavLink>

          <NavLink
            to="/resume"
            className={navLinkClass}
          >
            <FileText size={18} />
            Resume
          </NavLink>

        </ul>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex-1 flex justify-end gap-6 text-gray-300">

          <IconLink
            href="https://github.com/ahmedhossam32"
            label="GitHub"
          >
            <Github size={22} />
          </IconLink>

          <IconLink
            href="https://leetcode.com/u/ahmedhoss20035/"
            label="LeetCode"
          >
            <LeetCodeIcon size={22} />
          </IconLink>

          <IconLink
            href="https://www.linkedin.com/in/ahmed-hossam-a51274271/"
            label="LinkedIn"
          >
            <Linkedin size={22} />
          </IconLink>

          <IconLink
            href="mailto:ahmedhemly2020@yahoo.com"
            label="Email"
          >
            <Mail size={22} />
          </IconLink>

        </div>

      </nav>
    </header>
  );
}

/* Tooltip icon wrapper */
function IconLink({ href, label, children }) {
  return (
    <div className="relative group">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="hover:text-white transition"
      >
        {children}
      </a>

      <span
        className="absolute -bottom-8 left-1/2 -translate-x-1/2
        bg-black text-white text-xs px-2 py-1 rounded opacity-0
        group-hover:opacity-100 transition whitespace-nowrap"
      >
        {label}
      </span>
    </div>
  );
}
