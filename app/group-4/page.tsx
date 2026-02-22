"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  Box,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  MessageCircle,
  Mic,
  Music,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  ScrollText,
  Zap,
} from "lucide-react";

function RevealCard({
  icon,
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-4 shadow-xl shadow-black/5 backdrop-blur">
      {/* soft red accent blobs */}
      <div className="pointer-events-none absolute -top-28 -right-28 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-28 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full rounded-2xl border border-red-500/30 bg-white/70 px-4 py-3 text-left shadow-sm shadow-black/5 active:scale-[0.99]"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 rounded-2xl bg-red-500/10 p-2 ring-1 ring-red-500/15">
              {icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-slate-900">{title}</p>
              {subtitle ? (
                <p className="mt-0.5 text-xs text-slate-600">{subtitle}</p>
              ) : null}

              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                <Sparkles className="h-4 w-4 text-red-600" />
                {open ? "Tap to hide" : "Tap to reveal"}
              </div>
            </div>
          </div>

          <div className="mt-1 shrink-0 rounded-full bg-slate-900/5 p-2 ring-1 ring-black/5">
            {open ? (
              <ChevronUp className="h-4 w-4 text-slate-700" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-700" />
            )}
          </div>
        </div>
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-1 pb-1 pt-4">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function Group4Page() {
  const [showTasks, setShowTasks] = useState(false);
  const tasksRef = useRef<HTMLDivElement | null>(null);

  const taskButtonLabel = useMemo(
    () => (showTasks ? "Hide Tasks" : "READY ✅ Show Tasks"),
    [showTasks]
  );

  const handleReadyClick = () => {
    if (!showTasks) {
      setShowTasks(true);
      requestAnimationFrame(() => {
        setTimeout(() => {
          tasksRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 220);
      });
    } else {
      setShowTasks(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-4 py-6 text-slate-900">
      {/* WHITE theme background with red touch (match Group 1–3) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-rose-50" />
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-500/5 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-black/5 backdrop-blur hover:bg-white active:scale-[0.98]"
          >
            ← Dashboard
          </Link>

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
            Group 4
          </span>
        </div>

        <header className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-medium text-slate-700">
              Ka-Chow! Hello, Radiator Poets 🎤
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <ScrollText className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
              Kinetic Energy Rap &amp; Rhyme
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            You’ve seen the Mechanikos’ facts, the Wizards’ math, and the Pit-Crew’s
            acting. Now it’s time to turn all that energy into a masterpiece. Are you
            ready to rhyme?
          </p>
        </header>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-md shadow-black/10">
              <Image
                src="/images/PIC4.jpg"
                alt="Doc Hudson"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                <MessageCircle className="h-4 w-4" />
                Doc says…
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                “You don’t have to be flashy to be fast. Keep it clear. Keep it
                smooth. If you can explain motion, you can control the race.”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Your goal today: teach kinetic energy using rhythm.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-700/80">
            <Zap className="h-6 w-6 text-amber-500" />
            <Music className="h-6 w-6" />
            <Mic className="h-6 w-6" />
            <Sparkles className="h-6 w-6 text-red-600" />
          </div>
        </section>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">What is Kinetic Energy?</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Quick Reminder
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Kinetic Energy is the energy of motion. This means all objects that are
            moving have kinetic energy.
          </p>

          <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
            <p className="text-sm font-extrabold text-slate-900">The Golden Rule</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
              <li>
                It is the Energy of Motion (If it’s sitting still, the rhyme doesn’t
                chill!).
              </li>
              <li>Mass matters (The bigger the body, the more the energy).</li>
              <li>
                Velocity is the star (The faster the speed, the more energy you lead!).
              </li>
            </ol>
          </div>
        </section>

        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Target className="h-5 w-5 text-red-600" />}
            title="Mission"
            subtitle="Write + perform (Tap to reveal)"
            defaultOpen
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <p className="text-sm leading-relaxed text-slate-700">
                Write and perform a short rhythmic poem or “rap” that explains kinetic
                energy to the class.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                  <Trophy className="h-4 w-4" />
                  Performance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                  <Mic className="h-4 w-4" />
                  Leader + Chorus
                </span>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Box className="h-5 w-5 text-red-600" />}
            title="Materials"
            subtitle="Simple tools (Tap to reveal)"
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Paper and pens (or phone)
                </li>
              </ul>
            </div>
          </RevealCard>

          <RevealCard
            icon={<ScrollText className="h-5 w-5 text-red-600" />}
            title="Procedure"
            subtitle="Word bank + template + performance (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Step 1: The Word Bank
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Your poem must include these 5 “Power Words”:
                </p>

                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-800">
                  <li className="rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/10">
                    Motion
                  </li>
                  <li className="rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/10">
                    Mass
                  </li>
                  <li className="rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/10">
                    Velocity
                  </li>
                  <li className="rounded-xl bg-white/80 px-3 py-2 ring-1 ring-black/10">
                    Joules
                  </li>
                  <li className="col-span-2 rounded-xl bg-red-500/10 px-3 py-2 text-red-700 ring-1 ring-red-500/15">
                    Ka-Chow!
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Step 2: Starter Template
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Use it if you get stuck—feel free to change it.
                </p>

                <div className="mt-3 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                  <p className="text-sm font-extrabold text-slate-900">
                    Kinetic: The Art of Moving
                  </p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700">
                    {`To have Kinetic Energy, you’ve got to move,
Get out of the garage and find your groove.
If you’re heavy in Mass, you’ve got quite a lot,
But Velocity is the secret that hits the spot!

Half of the mass, times velocity squared,
The amount of Joules is how energy is shared.
From a sprinting student to a racing car,
Kinetic Energy makes you a star! Ka-Chow!`}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Step 3: The Performance
                </p>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    The Leader reads the lines with passion.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                    The Chorus repeats the “Power Words” loudly.
                  </li>
                </ul>
              </div>
            </div>
          </RevealCard>
        </div>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/15 bg-gradient-to-b from-red-500/10 to-white/70 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-600" />
            <h2 className="text-lg font-extrabold text-slate-900">Ready to perform?</h2>
            <Trophy className="h-5 w-5 text-amber-500" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Make it clear, rhythmic, and fun. Use your Power Words so the class can
            remember the science.
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleReadyClick}
              className={`group relative w-full overflow-hidden rounded-2xl px-4 py-3 text-sm font-extrabold shadow-lg ring-1 transition active:scale-[0.98]
                ${
                  showTasks
                    ? "bg-white/70 text-slate-800 ring-black/10 hover:bg-white"
                    : "bg-gradient-to-r from-red-500 via-rose-500 to-red-600 text-white ring-red-500/20 hover:brightness-110"
                }
              `}
            >
              {!showTasks && (
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/30 blur-xl transition-transform duration-700 group-hover:translate-x-[520px]" />
              )}

              <span className="inline-flex items-center justify-center gap-2">
                {showTasks ? (
                  <>
                    <ShieldCheck className="h-5 w-5" />
                    {taskButtonLabel}
                    <ChevronUp className="h-5 w-5" />
                  </>
                ) : (
                  <>
                    <PartyPopper className="h-5 w-5 animate-bounce" />
                    {taskButtonLabel}
                    <ChevronDown className="h-5 w-5" />
                  </>
                )}
              </span>
            </button>

            {!showTasks && (
              <p className="mt-2 text-center text-xs text-slate-600">
                Tap <span className="font-semibold text-slate-900">READY</span> to reveal your checklist 👇
              </p>
            )}
          </div>
        </section>

        <div
          className={`mt-3 grid transition-[grid-template-rows,opacity,transform] duration-400 ease-out ${
            showTasks
              ? "grid-rows-[1fr] opacity-100 translate-y-0"
              : "grid-rows-[0fr] opacity-0 -translate-y-1"
          }`}
        >
          <div className="overflow-hidden">
            <div ref={tasksRef} />

            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Checklist</h2>
              </div>

              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                <li>Pick a leader + chorus.</li>
                <li>Include the 5 Power Words.</li>
                <li>Perform with confidence and clear voice.</li>
              </ol>

              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-amber-500" />
                  <p className="text-sm font-extrabold text-slate-900">Doc’s tip</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Keep your lines short and punchy—make the science easy to remember.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 pb-10 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-red-500/30 shadow-sm shadow-black/5 backdrop-blur hover:bg-white active:scale-[0.98]"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}