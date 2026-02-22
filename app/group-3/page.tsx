"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  BellRing,
  Box,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  MessageCircle,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Target,
  Trophy,
  Users,
  Zap,
  Weight,
  Gauge,
  Rocket,
  Mic,
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

export default function Group3Page() {
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
      {/* WHITE theme background with red touch (match Group 1 & 2) */}
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
            Group 3
          </span>
        </div>

        <header className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-medium text-slate-700">
              Ka-Chow! Hello, Dramatic Pit-Crew 🎭
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
              Real-Life Motion Moments
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Did you digest all the info from the Wise Mechanikos and the Pit-Crew
            Wizards? I hope so—because now it’s time to take those numbers and
            definitions and bring them to LIFE!
          </p>
        </header>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-md shadow-black/10">
              <Image
                src="/images/PIC3.jpg"
                alt="Sally Carrera"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                <MessageCircle className="h-4 w-4" />
                Sally says…
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                “Alright, team—make it dramatic. Show me the difference between a
                calm, low-energy walk… and a fast, high-energy sprint. Motion is your
                spotlight.”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Today’s challenge is acting + science: KE changes when your mass or
                speed changes.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-700/80">
            <Zap className="h-6 w-6 text-amber-500" />
            <Gauge className="h-6 w-6" />
            <Weight className="h-6 w-6" />
            <Mic className="h-6 w-6" />
            <Sparkles className="h-6 w-6 text-red-600" />
          </div>
        </section>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">
              What is Kinetic Energy?
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Quick Reminder
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Kinetic Energy (KE) is the “Energy of Motion.” If an object is moving,
            it has it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Acting secret: the faster you move or the heavier you are, the more
            “energy” you have to show!
          </p>
        </section>

        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Target className="h-5 w-5 text-red-600" />}
            title="Mission"
            subtitle="Act it out! (Tap to reveal)"
            defaultOpen
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <p className="text-sm leading-relaxed text-slate-700">
                Your task: Act out how kinetic energy works in everyday life. Show
                the class kinetic (moving) energy, and how mass and speed change the
                “vibe” of the motion.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                  <Users className="h-4 w-4" />
                  Group Acting
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                  <Trophy className="h-4 w-4" />
                  2 minutes
                </span>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Box className="h-5 w-5 text-red-600" />}
            title="Materials Needed"
            subtitle="Keep it simple (Tap to reveal)"
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Light backpack
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Heavy backpack
                </li>
              </ul>
            </div>
          </RevealCard>

          <RevealCard
            icon={<BellRing className="h-5 w-5 text-red-600" />}
            title="Class Scenario Script"
            subtitle="Narrator + Students + Door (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm font-extrabold text-slate-900">Narrator</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “One Monday morning, two students are walking to school carrying a
                  bag: one has a light backpack and the other has a heavy backpack.
                  They are early, so they are taking their time while talking.”
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  (Students walk very slowly, whistling, sometimes talking.)
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Student 1 (Light Bag)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “Hey, friend! I’m moving slow and my bag is light. My velocity is
                  low, so my kinetic energy is tiny!”
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Student 2 (Heavy Bag)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “I’m moving slow too, but my mass is higher. Even though we’re slow,
                  I have a little more kinetic energy than you—just because of this
                  heavy bag!”
                </p>
              </div>

              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Narrator (Bell!)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “Suddenly, the students hear the first bell! RRRRRING! They realize
                  they only have 10 seconds to get to class!”
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  (Students run/jog quickly to the ‘door’ and stop suddenly.)
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm font-extrabold text-slate-900">Student 1</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “Whoa! Now I’m fast! My mass stayed the same, but my velocity is
                  high. My kinetic energy just tripled! Ka-Chow!”
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm font-extrabold text-slate-900">Student 2</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  “And look at me! I have high velocity AND high mass. My kinetic
                  energy is at the maximum! If I didn’t stop, I would have knocked
                  this door down!”
                </p>
              </div>
            </div>
          </RevealCard>
        </div>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-500/10 to-white/70 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-600" />
            <h2 className="text-lg font-extrabold text-slate-900">
              Are you ready for your mission?
            </h2>
            <Trophy className="h-5 w-5 text-amber-500" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Remember: You only have <span className="font-bold text-slate-900">2 minutes</span>{" "}
            to perform, then give a simple, short explanation.
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
                Tap <span className="font-semibold text-slate-900">READY</span> to reveal your to-do list 👇
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
                <Users className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">To-Do List for the Actors</h2>
              </div>

              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                <li>
                  Assign roles: Narrator, Student 1, Student 2, and the Door.
                  Everyone else = “Special Effects” (bell sounds, classmates, etc.).
                </li>
                <li>Make the energy change clear: Chill walk vs Panic sprint.</li>
                <li>Voice projection: speak loudly so everyone can hear you.</li>
              </ol>

              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-amber-500" />
                  <p className="text-sm font-extrabold text-slate-900">Reminder</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Perform first, then give a short explanation of what changed:
                  speed, mass, and kinetic energy.
                </p>
              </div>
            </section>

            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Materials Needed (Checklist)</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Light backpack
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Heavy backpack
                </li>
              </ul>
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