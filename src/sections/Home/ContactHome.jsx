import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "ahmedhemly2020@yahoo.com",
    link: "mailto:ahmedhemly2020@yahoo.com",
    color: "text-purple-400",
    glow: "from-purple-500/30 to-transparent",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/ahmed-hossam",
    link: "https://www.linkedin.com/in/ahmed-hossam-a51274271/",
    color: "text-blue-400",
    glow: "from-blue-500/30 to-transparent",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/ahmedhossam32",
    link: "https://github.com/ahmedhossam32",
    color: "text-gray-300",
    glow: "from-gray-400/30 to-transparent",
  },
];

export default function ContactHome() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-36 px-6 md:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0">
        <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-center space-y-12 md:space-y-16">

        {/* TITLE */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Let’s{" "}
            <span className="text-purple-400 relative">
              Connect
              <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-purple-500/40 rounded-full" />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-lg">
            Whether you have an opportunity, a project idea, or just want to say
            hello — feel free to reach out.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-10">

          {contacts.map((item, i) => {
            const Icon = item.icon;

            return (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  relative group
                  rounded-2xl md:rounded-3xl
                  p-4 md:p-8
                  bg-slate-900/60
                  border border-white/10
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_-30px_rgba(168,85,247,0.4)]
                "
              >
                {/* top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${item.glow}`}
                />

                {/* hover glow */}
                <div
                  className={`
                    absolute inset-0 rounded-3xl opacity-0
                    group-hover:opacity-100 transition
                    bg-gradient-to-b ${item.glow}
                  `}
                />

                {/* icon */}
                <div
                  className="
                    relative z-10
                    w-12 h-12 md:w-16 md:h-16
                    mx-auto mb-4 md:mb-6
                    flex items-center justify-center
                    rounded-xl md:rounded-2xl
                    bg-slate-800/80
                    border border-white/10
                  "
                >
                  <Icon size={22} className={item.color} />
                </div>

                {/* text */}
                <div className="relative z-10 space-y-1">
                  <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">
                    {item.title}
                  </p>

                  <p className="text-white text-sm md:text-base font-medium break-all">
                    {item.value}
                  </p>
                </div>

                {/* arrow (desktop only) */}
                <div className="hidden md:block absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition">
                  <ArrowUpRight className="text-gray-400" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
