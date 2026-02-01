import { Download } from "lucide-react";

export default function Resume() {
  return (
    <section className="relative min-h-screen pt-24 md:pt-32 pb-32 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">

      {/* background glow (desktop only) */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[300px] bg-purple-500/10 blur-[160px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 space-y-12">

        {/* ================= HEADER ================= */}
        <div className="text-center space-y-5">
          <h1 className="text-3xl md:text-5xl font-bold text-white">
            Resume
          </h1>

          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Download my resume to view my backend development experience,
            technical skills, and academic background.
          </p>

          <a
            href="/Ahmed_Hossam_Resume.pdf"
            download
            className="
              inline-flex items-center gap-3
              px-7 py-3
              rounded-xl
              bg-gradient-to-r from-purple-600 to-blue-600
              text-white font-semibold
              hover:opacity-90
              transition
              shadow-lg shadow-purple-500/30
            "
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>

        {/* ================= DESKTOP PDF VIEWER ================= */}
        <div className="hidden md:flex justify-center">

          <div
            className="
              relative
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border border-white/10
              shadow-[0_30px_100px_-40px_rgba(0,0,0,0.9)]
              overflow-hidden
            "
            style={{
              width: "900px",
              height: "1150px",
            }}
          >
            <iframe
              src="/Ahmed_Hossam_Resume.pdf"
              title="Resume PDF"
              className="w-full h-full"
            />
          </div>
        </div>

        {/* ================= MOBILE NOTE ================= */}
        <p className="md:hidden text-center text-gray-500 text-sm">
          For the best experience on mobile devices, please download the resume.
        </p>
      </div>

      {/* ================= MOBILE FLOATING BUTTON ================= */}
      <a
        href="/Ahmed_Hossam_Resume.pdf"
        download
        className="
          md:hidden
          fixed bottom-6 right-6
          z-50
          flex items-center gap-2
          px-5 py-3
          rounded-full
          bg-purple-600
          text-white font-semibold
          shadow-xl shadow-purple-500/40
          hover:bg-purple-700
          transition
        "
      >
        <Download size={18} />
        Resume
      </a>
    </section>
  );
}
