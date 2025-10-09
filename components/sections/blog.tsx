import Image from "next/image";
import Button from "../ui/button";

const posts = [
  {
    title: "5 Ways Predictive AI Can Boost Business Growth",
    desc: "Discover how AI forecasting can uncover trends before they appear.",
    date: "Sept 2025",
    image:
      "https://images.unsplash.com/photo-1622202204511-6f0937adbc8a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Turning Raw Data into Real Decisions",
    desc: "Learn practical techniques to visualize and interpret your metrics.",
    date: "Aug 2025",
    image:
      "https://images.unsplash.com/photo-1670946386148-343f3e47091d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Future of Analytics – From Dashboards to Dialogue",
    desc: "Why conversational analytics is changing how teams interact with data.",
    date: "Jul 2025",
    image:
      "https://images.unsplash.com/photo-1661961112952-6a9f9bdb5a26?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section
      id="blog"
      className="relative mx-auto max-w-screen-md px-6 py-24 text-center"
    >
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_rgba(168,85,247,0.08),transparent_70%),_radial-gradient(ellipse_at_bottom_right,_rgba(6,182,212,0.1),transparent_70%)]" />

      <h2 className="text-2xl md:text-3xl font-semibold">
        <span className="bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
          Blogs & Updates
        </span>
      </h2>
      <p className="mt-3 text-white/70">
        Insights, tutorials, and stories from the NovaProwl team.
      </p>

      {/* posts grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-fuchsia-500/40 hover:bg-white/10"
          >
            <div className="relative h-44 w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition"
              />
            </div>
            <div className="p-5 text-left">
              <p className="text-xs text-white/50">{post.date}</p>
              <h3 className="mt-1 text-base font-medium leading-snug">
                {post.title}
              </h3>
              <p className="mt-1 text-sm text-white/70 line-clamp-2">
                {post.desc}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-3 w-full text-center"
              >
                Read More
              </Button>
            </div>
          </article>
        ))}
      </div>

      {/* CTA below grid */}
      <div className="mt-12">
        <Button size="lg">Explore All Posts</Button>
      </div>
    </section>
  );
}
