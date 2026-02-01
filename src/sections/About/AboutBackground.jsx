import csIllustration from "../../assets/CSillustration.png";

export default function AboutBackground() {
  return (
    <section className="py-28 px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Background & Education
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I am a Senior Computer Science student at the British University in
            Egypt, majoring in Software Engineering. My academic journey has
            provided me with strong foundations in core computer science
            concepts and modern software development practices.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I am deeply interested in backend engineering and enjoy designing
            scalable systems, clean APIs, and maintainable architectures that
            solve real-world problems.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative group flex justify-center">
          <img
            src={csIllustration}
            alt="Computer Science Illustration"
            className="
              max-w-md w-full
              opacity-90
              transition-all duration-300
              group-hover:scale-105
              group-hover:opacity-100
            "
          />
        </div>

      </div>
    </section>
  );
}
