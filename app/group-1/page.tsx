"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Car,
  Weight,
  Gauge,
  ClipboardList,
  Box,
  Route,
  PartyPopper,
  ShieldCheck,
  Rocket,
  BatteryCharging,
  Target,
  Trophy,
  Smile,
  Lightbulb,
  MessageCircle,
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

export default function Group1Page() {
  const [showTasks, setShowTasks] = useState(false);
  const materialsRef = useRef<HTMLDivElement | null>(null);

  const taskButtonLabel = useMemo(
    () => (showTasks ? "Hide Tasks" : "READY ✅ Show Tasks"),
    [showTasks]
  );

  const handleReadyClick = () => {
    if (!showTasks) {
      setShowTasks(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          materialsRef.current?.scrollIntoView({
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
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 active:scale-[0.98]"
          >
            ← Dashboard
          </Link>

          <span className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
            Group 1
          </span>
        </div>

        {/* Header */}
        <header className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/30 backdrop-blur">
          <div className="flex items-center gap-2">
            <Smile className="h-5 w-5 text-yellow-300" />
            <p className="text-sm font-medium text-gray-200">
              Hello, Good Day Mechanikos! 👋
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-red-200" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight">
              The DNA of Motion 🏁
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
            Lightning McQueen needs your help before the big race. Your mission is
            to understand how motion turns into power, so McQueen won’t stay stuck
            at the starting line!
          </p>
        </header>

        {/* ✅ McQueen Message Card (ONE PHOTO + cute message) */}
        <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-start gap-4">
            {/* Photo (PIC1.jpg) */}
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-white/15 shadow-md shadow-black/25">
              <Image
                src="/images/PIC1.jpg"
                alt="Lightning McQueen"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>

            {/* Speech bubble */}
            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-200 ring-1 ring-red-300/20">
                <MessageCircle className="h-4 w-4" />
                McQueen says…
              </div>

              <p className="mt-2 text-sm font-semibold text-white">
                “Kachow! 😎 If you’re not moving, you’re not making kinetic energy!”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                Tip from me: Want more{" "}
                <span className="font-bold text-white">KE</span>? Add more{" "}
                <span className="font-bold text-white">speed</span>… but don’t be
                reckless—save the super speed for the{" "}
                <span className="font-bold text-white">ramp experiment</span>! ⚡🏎️
              </p>
            </div>
          </div>

          {/* tiny cute icons row */}
          <div className="mt-4 flex items-center justify-center gap-4 text-red-200/90">
            <Car className="h-6 w-6" />
            <Zap className="h-6 w-6 text-yellow-300" />
            <Gauge className="h-6 w-6" />
            <Sparkles className="h-6 w-6" />
          </div>
        </section>

        {/* Introduction */}
        <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold">Introduction</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
              <Lightbulb className="h-4 w-4" />
              Quick Story
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
            Within 5 minutes, Lightning McQueen wants YOU to inspect the{" "}
            <span className="font-semibold text-white">“DNA of Motion”</span> before
            the big race! He knows that to win the Piston Cup, he needs more than
            just a shiny coat of paint—he needs massive{" "}
            <span className="font-semibold text-white">Kinetic Energy</span>.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-gray-200/90">
            As the <span className="font-semibold text-white">Analysts</span> of the
            Pit Crew, your job is to decode how motion turns into power. If you don’t
            understand the energy, McQueen stays stuck at the starting line!
          </p>

          {/* Cute icon row */}
          <div className="mt-4 flex items-center justify-center gap-4 text-red-200/90">
            <Car className="h-6 w-6" />
            <Zap className="h-6 w-6 text-yellow-300" />
            <Gauge className="h-6 w-6" />
            <Rocket className="h-6 w-6" />
            <Sparkles className="h-6 w-6" />
          </div>
        </section>

        {/* KE Reveal Cards */}
        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Zap className="h-5 w-5 text-red-200" />}
            title="Kinetic Energy"
            subtitle="Energy of Motion ⚡ • (Tap to reveal the definition)"
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-yellow-300" />
                  <p className="text-sm font-extrabold text-white">
                    What is Kinetic Energy?
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-gray-100 ring-1 ring-white/10">
                  KE
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                Kinetic Energy (KE) is the energy possessed by an object in motion.
                If something is moving, it has kinetic energy. If it stops, that
                energy is gone (or turned into something else).
              </p>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Car className="h-5 w-5 text-red-200" />}
            title="Rule 1: No Motion = No Energy"
            subtitle="Moving only! 🚗 (Tap to reveal explanation)"
          >
            <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
              <p className="text-sm leading-relaxed text-gray-200/90">
                Kinetic energy is strictly for moving objects. A parked car, a sleeping
                cat, or a rock on the ground has zero kinetic energy. To get KE, you
                have to get moving!
              </p>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Weight className="h-5 w-5 text-red-200" />}
            title="Rule 2: Mass Matters"
            subtitle="More mass = more KE (Tap to reveal + example)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm leading-relaxed text-gray-200/90">
                  The more “stuff” (mass) an object has, the more kinetic energy it
                  carries at the same speed.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-xs font-bold text-gray-100">Example 🧱</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90">
                  Imagine a heavy truck and a small bicycle both moving at 10 mph. The
                  truck has way more kinetic energy because it has more mass. If they
                  both hit a hay bale, the truck would send it flying much further!
                </p>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Gauge className="h-5 w-5 text-red-200" />}
            title="Rule 3: Speed is King"
            subtitle="Speed changes EVERYTHING 🏎️ (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <p className="text-sm leading-relaxed text-gray-200/90">
                  Velocity (speed) is the most powerful part of the equation.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="text-sm leading-relaxed text-gray-100">
                  If you double the weight of a car, you double its energy. But if you
                  double the speed of a car, its kinetic energy becomes{" "}
                  <span className="font-extrabold text-white">4x</span>!
                </p>
                <p className="mt-2 text-xs text-gray-200/80">
                  That’s why speed is exciting—and also dangerous.
                </p>
              </div>
            </div>
          </RevealCard>
        </div>

        {/* Mission */}
        <section className="mt-4 rounded-3xl border border-red-300/20 bg-gradient-to-b from-red-500/15 to-white/5 p-5 shadow-lg shadow-black/25 backdrop-blur">
          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-200" />
            <h2 className="text-lg font-extrabold">Are you ready for your mission?</h2>
            <Trophy className="h-5 w-5 text-yellow-300" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-gray-100/90">
            Make a creative presentation within <span className="font-bold">2 minutes</span> by:
          </p>

          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-100/90">
            <li>
              Making a simple experiment to show the class exactly how{" "}
              <span className="font-semibold">speed</span> and{" "}
              <span className="font-semibold">mass</span> changes everything.
            </li>
            <li>
              Explains the concepts of Kinetic Energy by defining what it is,
              including how mass and velocity affects it.
            </li>
          </ol>

          {/* READY BUTTON */}
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
                Tap <span className="font-semibold text-white">READY</span> to reveal your tasks 👇
              </p>
            )}
          </div>
        </section>

        {/* Tasks wrapper */}
        <div
          className={`mt-3 grid transition-[grid-template-rows,opacity,transform] duration-400 ease-out ${
            showTasks
              ? "grid-rows-[1fr] opacity-100 translate-y-0"
              : "grid-rows-[0fr] opacity-0 -translate-y-1"
          }`}
        >
          <div className="overflow-hidden">
            <div ref={materialsRef} />

            {/* Materials */}
            <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-gray-100" />
                <h2 className="text-lg font-bold">Materials Needed</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-gray-200/90">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  Inclined plane (ramp)
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  One lightweight toy car
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  One heavy toy car
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-400" />
                  A small ball, a paper cup, or a row of blocks placed at the bottom of the ramp
                </li>
              </ul>
            </section>

            {/* Procedure */}
            <section className="mt-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-lg shadow-black/25 backdrop-blur">
              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-gray-100" />
                <h2 className="text-lg font-bold">Procedure</h2>
              </div>

              <div className="mt-4 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <h3 className="text-sm font-extrabold text-white">A) Test the Speed</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200/90">
                  <li>Release the light car from halfway up the ramp. Note how far the target moves.</li>
                  <li>Release the same car from the very top of the ramp (higher speed).</li>
                </ol>
                <p className="mt-3 rounded-xl bg-white/5 p-3 text-sm text-gray-100 ring-1 ring-white/10 flex items-start gap-2">
                  <BatteryCharging className="h-5 w-5 text-green-300 mt-0.5" />
                  <span>
                    <span className="font-bold">Observation:</span> More speed creates more kinetic energy
                    to knock the target further!
                  </span>
                </p>
              </div>

              <div className="mt-3 rounded-2xl bg-black/30 p-4 ring-1 ring-white/10">
                <h3 className="text-sm font-extrabold text-white">B) Test the Mass</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-gray-200/90">
                  <li>Place the target back in its spot.</li>
                  <li>Release the light car from the top.</li>
                  <li>Release the heavy car from the same height (so they reach the same speed).</li>
                  <li>Note your observation.</li>
                </ol>
                <p className="mt-3 rounded-xl bg-white/5 p-3 text-sm text-gray-100 ring-1 ring-white/10 flex items-start gap-2">
                  <BatteryCharging className="h-5 w-5 text-green-300 mt-0.5" />
                  <span>
                    <span className="font-bold">Observation:</span> Even though the speed is the same,
                    the heavy car sends the target flying much further because it has more mass.
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom nav */}
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