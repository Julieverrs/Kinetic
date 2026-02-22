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
    <section className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-lg shadow-black/25 backdrop-blur">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-left active:scale-[0.99]"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 rounded-2xl bg-red-500/15 p-2 ring-1 ring-red-300/20">
              {icon}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-extrabold text-white">{title}</p>
              {subtitle ? (
                <p className="mt-0.5 text-xs text-gray-200/80">{subtitle}</p>
              ) : null}

              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
                <Sparkles className="h-4 w-4" />
                {open ? "Tap to hide" : "Tap to reveal"}
              </div>
            </div>
          </div>

          <div className="mt-1 shrink-0 rounded-full bg-white/10 p-2 ring-1 ring-white/10">
            {open ? (
              <ChevronUp className="h-4 w-4 text-gray-100" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-100" />
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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-xl">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 active:scale-[0.98]"
          >
            ← Dashboard
          </Link>

          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
            Group 4
          </span>
        </div>

        <header className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/30 backdrop-blur">
          <div className="flex items-center gap-2">
            <Music className="h-5 w-5 text-yellow-300" />
            <p className="text-sm font-medium text-gray-200">Ka-Chow! Hello, Radiator Poets 🎤</p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <ScrollText className="h-6 w-6 text-red-200" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
              Kinetic Energy Rap & Rhyme
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
            You’ve seen the Mechanikos’ facts, the Wizards’ math, and the Pit-Crew’s
            acting. Now it’s time to turn all that energy into a masterpiece. Are you
            ready to rhyme?
          </p>
        </header>

        <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-md shadow-black/25">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
                <MessageCircle className="h-4 w-4" />
                Doc says…
              </div>

              <p className="mt-2 text-sm font-semibold text-white">
                “You don’t have to be flashy to be fast. Keep it clear. Keep it
                smooth. If you can explain motion, you can control the race.”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                Your goal today: teach kinetic energy using rhythm.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-200/90">
            <Zap className="h-6 w-6 text-yellow-300" />
            <Music className="h-6 w-6" />
            <Mic className="h-6 w-6" />
            <Sparkles className="h-6 w-6" />
          </div>
        </section>

        <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">What is Kinetic Energy?</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
              <Lightbulb className="h-4 w-4" />
              Quick Reminder
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
            Kinetic Energy is the energy of motion. This means all objects that are
            moving have kinetic energy.
          </p>

          <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
            <p className="text-sm font-extrabold text-white">The Golden Rule</p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200/90">
              <li>It is the Energy of Motion (If it’s sitting still, the rhyme doesn’t chill!).</li>
              <li>Mass matters (The bigger the body, the more the energy).</li>
              <li>Velocity is the star (The faster the speed, the more energy you lead!).</li>
            </ol>
          </div>
        </section>

        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Target className="h-5 w-5 text-red-200" />}
            title="Mission"
            subtitle="Write + perform (Tap to reveal)"
            defaultOpen
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <p className="text-sm leading-relaxed text-gray-200/90">
                Write and perform a short rhythmic poem or “rap” that explains kinetic
                energy to the class.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
                  <Trophy className="h-4 w-4" />
                  Performance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
                  <Mic className="h-4 w-4" />
                  Leader + Chorus
                </span>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Box className="h-5 w-5 text-red-200" />}
            title="Materials"
            subtitle="Simple tools (Tap to reveal)"
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-gray-200/90">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Paper and pens (or phone)
                </li>
              </ul>
            </div>
          </RevealCard>

          <RevealCard
            icon={<ScrollText className="h-5 w-5 text-red-200" />}
            title="Procedure"
            subtitle="Word bank + template + performance (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Step 1: The Word Bank</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  Your poem must include these 5 “Power Words”:
                </p>
                <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-100">
                  <li className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Motion</li>
                  <li className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Mass</li>
                  <li className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Velocity</li>
                  <li className="rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10">Joules</li>
                  <li className="col-span-2 rounded-xl bg-red-500/15 px-3 py-2 text-red-100 ring-1 ring-red-300/20">
                    Ka-Chow!
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Step 2: Starter Template</p>
                <p className="mt-2 text-xs text-gray-200/80">
                  Use it if you get stuck—feel free to change it.
                </p>

                <div className="mt-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                  <p className="text-sm font-extrabold text-white">Kinetic: The Art of Moving</p>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-200/90">
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

              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Step 3: The Performance</p>
                <ul className="mt-3 space-y-2 text-sm text-gray-200/90">
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    The Leader reads the lines with passion.
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                    The Chorus repeats the “Power Words” loudly.
                  </li>
                </ul>
              </div>
            </div>
          </RevealCard>
        </div>

        <section className="mt-4 rounded-3xl border border-red-300/20 bg-gradient-to-b from-red-500/15 to-white/5 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-200" />
            <h2 className="text-lg font-extrabold">Ready to perform?</h2>
            <Trophy className="h-5 w-5 text-yellow-300" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-100/90">
            Make it clear, rhythmic, and fun. Use your Power Words so the class can
            remember the science.
          </p>

          <div className="mt-4">
            <button
              type="button"
              onClick={handleReadyClick}
              className={`group relative w-full overflow-hidden rounded-2xl px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-red-600/25 ring-1 ring-white/10 transition active:scale-[0.98]
                ${
                  showTasks
                    ? "bg-white/10 hover:bg-white/15"
                    : "bg-gradient-to-r from-red-500 to-red-700 hover:brightness-110"
                }
              `}
            >
              {!showTasks && (
                <span className="pointer-events-none absolute -left-10 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transition-transform duration-700 group-hover:translate-x-[520px]" />
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
              <p className="mt-2 text-center text-xs text-gray-200/80">
                Tap <span className="font-semibold text-white">READY</span> to reveal your checklist 👇
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

            <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-gray-100" />
                <h2 className="text-lg font-bold">Checklist</h2>
              </div>

              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200/90">
                <li>Pick a leader + chorus.</li>
                <li>Include the 5 Power Words.</li>
                <li>Perform with confidence and clear voice.</li>
              </ol>

              <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-300" />
                  <p className="text-sm font-extrabold text-white">Doc’s tip</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  Keep your lines short and punchy—make the science easy to remember.
                </p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 pb-10 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white ring-1 ring-white/15 backdrop-blur hover:bg-white/15 active:scale-[0.98]"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}