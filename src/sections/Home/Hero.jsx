import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile6.png";

const titles = [
  "Software Engineer",
  "Backend-Focused Developer",
  "Problem Solver",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = titles[titleIndex];

    const timeout = setTimeout(() => {
      if (charIndex < current.length) {
        setText((prev) => prev + current[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 1400);
      }
    }, 70);

    return () => clearTimeout(timeout);
  }, [charIndex, titleIndex]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/20 blur-[140px]" />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-6
          pt-28 md:pt-36
          flex flex-col-reverse
          md:grid md:grid-cols-2
          gap-14
          items-center
        "
      >
        {/* LEFT — TEXT */}
        <div className="space-y-6 text-center md:text-left">

          <h2 className="text-lg md:text-2xl text-white">
            Hi There <span className="inline-block animate-wave">👋</span>
          </h2>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ahmed Hossam
            </span>
          </h1>

          {/* Typing title */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold text-blue-400 min-h-[2.5rem]">
            {text}
            <span className="ml-1 animate-blink">|</span>
          </h3>

          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto md:mx-0 leading-relaxed">
            Backend-focused software engineer with strong experience in building
            secure, scalable systems using clean architecture, SOLID principles,
            and modern API design.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">

            <Link
              to="/projects"
              className="
                px-7 py-3
                rounded-xl
                bg-gradient-to-r from-purple-600 to-blue-600
                text-white font-semibold
                transition
                hover:opacity-90
              "
            >
              View Projects
            </Link>

            <Link
              to="/resume"
              className="
                px-7 py-3
                rounded-xl
                border border-purple-400
                text-purple-300
                hover:bg-purple-500 hover:text-white
                transition
              "
            >
              Download Resume
            </Link>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="relative flex justify-center">

          <div
            className="
              relative
              p-4
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-xl
            "
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-3xl bg-purple-500/20 blur-2xl" />

            <img
              src={profile}
              alt="Ahmed Hossam"
              className="
                relative z-10
                w-[200px] sm:w-[240px] md:w-[360px]
                rounded-2xl
                shadow-lg
              "
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR (desktop only) */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <span className="text-sm">Scroll</span>
      </div>
    </section>
  );
}
