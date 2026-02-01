import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profile from "../../assets/profile6.png";

const titles = [
  "Software Engineer",
  "Backend-Focused Developer",
  "Problem Solver"
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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      {/* ========= BACKGROUND GLOW ========= */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[160px]" />
      </div>

      {/* ========= CONTENT ========= */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT ================= */}
        <div className="space-y-7 animate-fade-in-left">

          <h2 className="text-3xl text-white">
            Hi There{" "}
            <span className="inline-block animate-wave">👋</span>
          </h2>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Ahmed Hossam
            </span>
          </h1>

          {/* Typing title */}
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-400 h-12">
            {text}
            <span className="ml-1 animate-blink">|</span>
          </h3>

          <p className="text-gray-400 max-w-xl leading-relaxed">
           Backend-focused Software Engineer with strong experience in Java and Spring Boot, specializing in building secure, scalable systems using clean architecture, SOLID principles, and modern API design.
   </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 pt-4">

            <Link
              to="/projects"
              className="
                px-8 py-3
                rounded-xl
                bg-gradient-to-r from-purple-600 to-blue-600
                text-white font-semibold
                hover:opacity-90
                transition
                hover:scale-105
                shadow-lg shadow-purple-500/30
              "
            >
              View Projects
            </Link>

            <Link
              to="/resume"
              className="
                px-8 py-3
                rounded-xl
                border border-purple-400
                text-purple-300
                hover:bg-purple-500 hover:text-white
                transition
                hover:scale-105
              "
            >
              Download Resume
            </Link>

          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative flex justify-center">

          {/* Glass card */}
          <div className="
            relative
            p-4
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            shadow-2xl
          ">

            {/* glow */}
            <div className="absolute inset-0 rounded-3xl bg-purple-500/20 blur-2xl" />

            <img
              src={profile}
              alt="Ahmed Hossam"
              className="
                relative z-10
                w-[300px] md:w-[360px]
                rounded-2xl
                shadow-xl
                animate-float
                transition-transform
                hover:scale-105
              "
            />
          </div>
        </div>
      </div>

      {/* ========= SCROLL INDICATOR ========= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        <span className="text-sm">Scroll</span>
      </div>
    </section>
  );
}
