import Link from "next/link";
import Image from "next/image";

const GROUPS = [
  {
    title: "Group 1: KE Basics (Motion, Mass & Speed)",
    href: "/group-1",
    desc: "Learn what kinetic energy means and why speed + mass change the energy of motion.",
    num: "1",
    img: "/images/G1.jpg",
  },
  {
    title: "Group 2: KE Formula (KE = ½mv²)",
    href: "/group-2",
    desc: "Use KE = ½mv² and solve sample problems step-by-step (Mass & Velocity).",
    num: "2",
    img: "/images/G5.jpg",
  },
  {
    title: "Group 3: Real-Life KE Acting", 
    href: "/group-3",
    desc: "Act a school scenario to show how KE changes with a light vs heavy bag and slow vs fast speed.",
    num: "3",
    img: "/images/G3.jpg",
  },
  {
    title: "Group 4: KE Rap / Poem Challenge",
    href: "/group-4",
    desc: "Create a short rap/poem explaining KE using the 5 power words: Motion, Mass, Velocity, Joules, Ka-Chow!",
    num: "4",
    img: "/images/G4.jpg",
  },
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 min-h-screen min-w-full bg-black"
        aria-hidden
      >
        <Image
          src="/images/BG.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center sm:object-contain"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/75 sm:from-black/60 sm:via-black/35 sm:to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col px-4 py-6 sm:px-6 sm:py-10">
        {/* Header */}
        <header className="mb-5 rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md sm:mb-8 sm:p-6">
          <p className="text-sm font-medium text-gray-200">Hello, Science-Pit Crew! 👋</p>
          <h1 className="mt-1 text-xl font-semibold sm:text-2xl">
            Kinetic Energy Dashboard🏁🏁
          </h1>
          <p className="mt-1 text-sm text-gray-200">
            Choose your group to start your mission
          </p>
        </header>

        {/* Cards */}
        <section className="grid gap-4 sm:gap-5 sm:grid-cols-2">
          {GROUPS.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/30 backdrop-blur-lg transition-transform duration-200 active:scale-[0.985] sm:p-6 sm:hover:-translate-y-0.5 sm:hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-red-300/60 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              {/* Card background */}
              <div className="pointer-events-none absolute inset-0">
                <Image
                  src={g.img}
                  alt=""
                  fill
                  className={
                    g.num === "2"
                      ? "object-cover object-[50%_50%] scale-100 opacity-60 transition-opacity duration-200 group-hover:opacity-70"
                      : "object-cover object-center opacity-55 transition-opacity duration-200 group-hover:opacity-70"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/35 to-black/70" />
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                <div className="absolute -inset-10 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.28),transparent_55%)]" />
              </div>

              <div className="relative flex items-start gap-4">
                {/* Number */}
                <div className="shrink-0">
                  <div className="rounded-full bg-gradient-to-br from-red-400 via-red-500 to-red-700 p-[2px] shadow-sm shadow-red-500/20">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-black/35 text-base font-extrabold text-white backdrop-blur-sm sm:h-14 sm:w-14">
                      {g.num}
                    </div>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold leading-tight tracking-tight text-white sm:text-xl">
                    {g.title}
                  </h2>

                  <p className="mt-1 text-sm leading-snug text-gray-200/90">
                    {g.desc}
                  </p>

                  <div className="mt-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-700 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-red-600/25 transition-transform duration-150 group-hover:shadow-red-500/30 group-active:scale-95">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <footer className="mt-auto pt-8 text-center text-xs text-gray-200/80">
          Ma'am Nikka Chavez 💛
        </footer>
      </div>
    </main>
  );
}