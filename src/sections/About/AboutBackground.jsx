import csIllustration from "../../assets/CSillustration.png";

export default function AboutBackground() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Background & Education
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
            I am a Senior Computer Science student at the British University in
            Egypt, majoring in Software Engineering. My academic journey has
            provided me with strong foundations in core computer science concepts
            and modern software development practices.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xl">
            I am particularly interested in backend engineering and enjoy
            designing scalable systems, clean APIs, and maintainable
            architectures that solve real-world problems.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src={csIllustration}
            alt="Computer Science Illustration"
            className="
              w-full
              max-w-[280px] md:max-w-md
              opacity-95
            "
          />
        </div>

      </div>
    </section>
  );
}
