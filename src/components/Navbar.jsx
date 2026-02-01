import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  User,
  FolderGit2,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

/* LeetCode icon */
const LeetCodeIcon = ({ size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M13.483 2.348a1.25 1.25 0 0 0-1.767 0L3.77 10.294a5.25 5.25 0 0 0 0 7.424l2.512 2.512a5.25 5.25 0 0 0 7.424 0l7.946-7.946a1.25 1.25 0 1 0-1.768-1.768l-7.946 7.946a2.75 2.75 0 0 1-3.888 0l-2.512-2.512a2.75 2.75 0 0 1 0-3.888l7.946-7.946a1.25 1.25 0 0 0 0-1.768Z" />
    <path d="M15.75 6.5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2h-6Z" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const baseLink =
    "flex items-center gap-2 py-2 text-gray-300 hover:text-white transition";

  const activeLink = "text-purple-400";

  const navClass = ({ isActive }) =>
    `${baseLink} ${isActive ? activeLink : ""}`;

  return (
    <header className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <NavLink to="/" className="text-2xl font-bold text-purple-400">
          Ahmed
        </NavLink>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">

          <NavLink to="/" end className={navClass}>
            <Home size={18} /> Home
          </NavLink>

          <NavLink to="/about" className={navClass}>
            <User size={18} /> About
          </NavLink>

          <NavLink to="/projects" className={navClass}>
            <FolderGit2 size={18} /> Projects
          </NavLink>

          <NavLink to="/resume" className={navClass}>
            <FileText size={18} /> Resume
          </NavLink>

        </div>

        {/* DESKTOP SOCIALS */}
        <div className="hidden md:flex items-center gap-5 text-gray-300">
          <SocialLink href="https://github.com/ahmedhossam32">
            <Github size={20} />
          </SocialLink>

          <SocialLink href="https://leetcode.com/u/ahmedhoss20035/">
            <LeetCodeIcon size={20} />
          </SocialLink>

          <SocialLink href="https://www.linkedin.com/in/ahmed-hossam-a51274271/">
            <Linkedin size={20} />
          </SocialLink>

          <SocialLink href="mailto:ahmedhemly2020@yahoo.com">
            <Mail size={20} />
          </SocialLink>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-6 space-y-6">

          <NavLink onClick={() => setOpen(false)} to="/" end className={navClass}>
            <Home size={18} /> Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className={navClass}>
            <User size={18} /> About
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/projects" className={navClass}>
            <FolderGit2 size={18} /> Projects
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/resume" className={navClass}>
            <FileText size={18} /> Resume
          </NavLink>

          <div className="flex gap-6 pt-4 border-t border-white/10">
            <SocialLink href="https://github.com/ahmedhossam32">
              <Github size={22} />
            </SocialLink>

            <SocialLink href="https://leetcode.com/u/ahmedhoss20035/">
              <LeetCodeIcon size={22} />
            </SocialLink>

            <SocialLink href="https://www.linkedin.com/in/ahmed-hossam-a51274271/">
              <Linkedin size={22} />
            </SocialLink>

            <SocialLink href="mailto:ahmedhemly2020@yahoo.com">
              <Mail size={22} />
            </SocialLink>
          </div>
        </div>
      )}
    </header>
  );
}

/* Social icon */
function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-white transition"
    >
      {children}
    </a>
  );
}
