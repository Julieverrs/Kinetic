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
            Group 3
          </span>
        </div>

        <header className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/30 backdrop-blur">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-300" />
            <p className="text-sm font-medium text-gray-200">
              Ka-Chow! Hello, Dramatic Pit-Crew 🎭
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-red-200" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
              Real-Life Motion Moments
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
            Did you digest all the info from the Wise Mechanikos and the Pit-Crew
            Wizards? I hope so—because now it’s time to take those numbers and
            definitions and bring them to LIFE!
          </p>
        </header>

        <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-md shadow-black/25">
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
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
                <MessageCircle className="h-4 w-4" />
                Sally says…
              </div>

              <p className="mt-2 text-sm font-semibold text-white">
                “Alright, team—make it dramatic. Show me the difference between a
                calm, low-energy walk… and a fast, high-energy sprint. Motion is your
                spotlight.”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                Today’s challenge is acting + science: KE changes when your mass or
                speed changes.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-200/90">
            <Zap className="h-6 w-6 text-yellow-300" />
            <Gauge className="h-6 w-6" />
            <Weight className="h-6 w-6" />
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
            Kinetic Energy (KE) is the “Energy of Motion.” If an object is moving,
            it has it.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-200/90">
            Acting secret: the faster you move or the heavier you are, the more
            “energy” you have to show!
          </p>
        </section>

        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Target className="h-5 w-5 text-red-200" />}
            title="Mission"
            subtitle="Act it out! (Tap to reveal)"
            defaultOpen
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <p className="text-sm leading-relaxed text-gray-200/90">
                Your task: Act out how kinetic energy works in everyday life. Show
                the class kinetic (moving) energy, and how mass and speed change the
                “vibe” of the motion.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
                  <Users className="h-4 w-4" />
                  Group Acting
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
                  <Trophy className="h-4 w-4" />
                  2 minutes
                </span>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Box className="h-5 w-5 text-red-200" />}
            title="Materials Needed"
            subtitle="Keep it simple (Tap to reveal)"
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <ul className="space-y-2 text-sm text-gray-200/90">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Light backpack
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Heavy backpack
                </li>
              </ul>
            </div>
          </RevealCard>

          <RevealCard
            icon={<BellRing className="h-5 w-5 text-red-200" />}
            title="Class Scenario Script"
            subtitle="Narrator + Students + Door (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Narrator</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “One Monday morning, two students are walking to school carrying a
                  bag: one has a light backpack and the other has a heavy backpack.
                  They are early, so they are taking their time while talking.”
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-200/90">
                  (Students walk very slowly, whistling, sometimes talking.)
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Student 1 (Light Bag)</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “Hey, friend! I’m moving slow and my bag is light. My velocity is
                  low, so my kinetic energy is tiny!”
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Student 2 (Heavy Bag)</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “I’m moving slow too, but my mass is higher. Even though we’re slow,
                  I have a little more kinetic energy than you—just because of this
                  heavy bag!”
                </p>
              </div>

              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Narrator (Bell!)</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “Suddenly, the students hear the first bell! RRRRRING! They realize
                  they only have 10 seconds to get to class!”
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-200/90">
                  (Students run/jog quickly to the ‘door’ and stop suddenly.)
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Student 1</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “Whoa! Now I’m fast! My mass stayed the same, but my velocity is
                  high. My kinetic energy just tripled! Ka-Chow!”
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm font-extrabold text-white">Student 2</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  “And look at me! I have high velocity AND high mass. My kinetic
                  energy is at the maximum! If I didn’t stop, I would have knocked
                  this door down!”
                </p>
              </div>
            </div>
          </RevealCard>
        </div>

        <section className="mt-4 rounded-3xl border border-red-300/20 bg-gradient-to-b from-red-500/15 to-white/5 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-200" />
            <h2 className="text-lg font-extrabold">Are you ready for your mission?</h2>
            <Trophy className="h-5 w-5 text-yellow-300" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-100/90">
            Remember: You only have <span className="font-bold">2 minutes</span> to
            perform, then give a simple, short explanation.
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
                Tap <span className="font-semibold text-white">READY</span> to reveal your to-do list 👇
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
                <Users className="h-5 w-5 text-gray-100" />
                <h2 className="text-lg font-bold">To-Do List for the Actors</h2>
              </div>

              <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200/90">
                <li>
                  Assign roles: Narrator, Student 1, Student 2, and the Door.
                  Everyone else = “Special Effects” (bell sounds, classmates, etc.).
                </li>
                <li>
                  Make the energy change clear: Chill walk vs Panic sprint.
                </li>
                <li>
                  Voice projection: speak loudly so everyone can hear you.
                </li>
              </ol>

              <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <div className="flex items-center gap-2">
                  <Mic className="h-5 w-5 text-yellow-300" />
                  <p className="text-sm font-extrabold text-white">Reminder</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  Perform first, then give a short explanation of what changed:
                  speed, mass, and kinetic energy.
                </p>
              </div>
            </section>

            <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-gray-100" />
                <h2 className="text-lg font-bold">Materials Needed (Checklist)</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-200/90">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Light backpack
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Heavy backpack
                </li>
              </ul>
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