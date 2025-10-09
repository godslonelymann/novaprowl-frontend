import Image from "next/image";

export default function Technologies() {
  const logos = [
    { name: "Python", src: "/assets/python.svg" },
    { name: "PostgreSQL", src: "/assets/postgres.svg" },
    { name: "Snowflake", src: "/assets/snowflake.svg" },
    { name: "AWS", src: "/assets/aws.svg" },
    { name: "OpenAI", src: "/assets/openai.svg" },
    { name: "Next.js", src: "/assets/nextjs.svg" },
  ];

  return (
    <section
      id="technologies"
      className="relative mx-auto max-w-screen-md px-6 py-24 text-center"
    >
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.12),transparent_60%),_radial-gradient(ellipse_at_bottom,_rgba(6,182,212,0.12),transparent_70%)]" />

      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Powered by cutting-edge tech
        </span>
      </h2>
      <p className="mt-3 text-white/70">
        Modern AI and data stack ensuring accuracy, speed & security.
      </p>

      {/* Logos grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 place-items-center">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex flex-col items-center justify-center text-center"
          >
            <div className="p-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm w-20 h-20 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={40}
                height={40}
                className="object-contain opacity-80"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">{logo.name}</p>
          </div>
        ))}
      </div>

      {/* Optional demo video */}
      <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <video
          className="w-full h-64 md:h-80 object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/assets/tech-poster.jpg"
        >
          <source src="/video.mp4" type="video/mp4" />
          <source src="/video.webm" type="video/webm" />
          Your browser doesn’t support video —{" "}
          <a href="/video.mp4" className="underline">
            download instead
          </a>
          .
        </video>
      </div>
    </section>
  );
}
