import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-screen-md px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
    >
      {/* Left: Text content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-tight">
          <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Our mission:
          </span>{" "}
          turning chaos into clarity
        </h2>

        <p className="mt-4 text-white/70 leading-relaxed">
          At NovaProwl, we believe analytics should feel intuitive—not
          intimidating. Our platform uses predictive AI and data automation to
          transform raw numbers into actionable intelligence for modern teams.
        </p>

        <p className="mt-4 text-white/70 leading-relaxed">
          From startups tracking growth to enterprises forecasting revenue, our
          goal is simple—empower decision-makers to see the moves before they’re
          made.
        </p>
      </div>

      {/* Right: Image / illustration */}
      <div className="relative">
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-fuchsia-500/30 via-indigo-500/30 to-cyan-400/30 blur-lg"></div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm">
          <Image
            src="./globe.svg"
            alt="Team collaboration"
            width={800}
            height={600}
            className="object-cover w-full h-64 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}
