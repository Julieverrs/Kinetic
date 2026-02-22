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
    <main className="relative min-h-screen overflow-hidden bg-white px-4 py-6 text-slate-900">
      {/* WHITE theme background with red touch */}
      <div className="pointer-events-none absolute inset-0">
        {/* base */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-rose-50" />
        {/* soft red radial accents */}
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-red-500/5 blur-3xl" />
        {/* subtle grain */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(0,0,0,0.8)_1px,transparent_1px)] [background-size:18px_18px]" />
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-white/70 px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm shadow-black/5 backdrop-blur hover:bg-white active:scale-[0.98]"
          >
            ← Dashboard
          </Link>

          <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
            Group 1
          </span>
        </div>

        {/* Header */}
        <header className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Smile className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-medium text-slate-700">
              Hello, Good Day Mechanikos! 👋
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
              The DNA of Motion 🏁
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Lightning McQueen needs your help before the big race. Your mission is
            to understand how motion turns into power, so McQueen won’t stay stuck
            at the starting line!
          </p>
        </header>

        {/* ✅ McQueen Message Card */}
        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-md shadow-black/10">
              <Image
                src="/images/PIC1.jpg"
                alt="Lightning McQueen"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                <MessageCircle className="h-4 w-4" />
                McQueen says…
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                “Kachow! 😎 If you’re not moving, you’re not making kinetic energy!”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Tip from me: Want more{" "}
                <span className="font-bold text-slate-900">KE</span>? Add more{" "}
                <span className="font-bold text-slate-900">speed</span>… but don’t be
                reckless—save the super speed for the{" "}
                <span className="font-bold text-slate-900">ramp experiment</span>! ⚡🏎️
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-700/80">
            <Car className="h-6 w-6" />
            <Zap className="h-6 w-6 text-amber-500" />
            <Gauge className="h-6 w-6" />
            <Sparkles className="h-6 w-6 text-red-600" />
          </div>
        </section>

        {/* Introduction */}
        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">Introduction</h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
              <Lightbulb className="h-4 w-4 text-amber-500" />
              Quick Story
            </div>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Within 5 minutes, Lightning McQueen wants YOU to inspect the{" "}
            <span className="font-semibold text-slate-900">“DNA of Motion”</span>{" "}
            before the big race! He knows that to win the Piston Cup, he needs more
            than just a shiny coat of paint—he needs massive{" "}
            <span className="font-semibold text-slate-900">Kinetic Energy</span>.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            As the <span className="font-semibold text-slate-900">Analysts</span> of the
            Pit Crew, your job is to decode how motion turns into power. If you don’t
            understand the energy, McQueen stays stuck at the starting line!
          </p>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-700/80">
            <Car className="h-6 w-6" />
            <Zap className="h-6 w-6 text-amber-500" />
            <Gauge className="h-6 w-6" />
            <Rocket className="h-6 w-6 text-red-600" />
            <Sparkles className="h-6 w-6 text-red-600" />
          </div>
        </section>

        {/* KE Reveal Cards */}
        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Zap className="h-5 w-5 text-red-600" />}
            title="Kinetic Energy"
            subtitle="Energy of Motion ⚡ • (Tap to reveal the definition)"
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-500" />
                  <p className="text-sm font-extrabold text-slate-900">
                    What is Kinetic Energy?
                  </p>
                </div>

                <span className="shrink-0 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
                  KE
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Kinetic Energy (KE) is the energy possessed by an object in motion.
                If something is moving, it has kinetic energy. If it stops, that
                energy is gone (or turned into something else).
              </p>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Car className="h-5 w-5 text-red-600" />}
            title="Rule 1: No Motion = No Energy"
            subtitle="Moving only! 🚗 (Tap to reveal explanation)"
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <p className="text-sm leading-relaxed text-slate-700">
                Kinetic energy is strictly for moving objects. A parked car, a sleeping
                cat, or a rock on the ground has zero kinetic energy. To get KE, you
                have to get moving!
              </p>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Weight className="h-5 w-5 text-red-600" />}
            title="Rule 2: Mass Matters"
            subtitle="More mass = more KE (Tap to reveal + example)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm leading-relaxed text-slate-700">
                  The more “stuff” (mass) an object has, the more kinetic energy it
                  carries at the same speed.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-xs font-bold text-red-700">Example 🧱</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Imagine a heavy truck and a small bicycle both moving at 10 mph. The
                  truck has way more kinetic energy because it has more mass. If they
                  both hit a hay bale, the truck would send it flying much further!
                </p>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Gauge className="h-5 w-5 text-red-600" />}
            title="Rule 3: Speed is King"
            subtitle="Speed changes EVERYTHING 🏎️ (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm leading-relaxed text-slate-700">
                  Velocity (speed) is the most powerful part of the equation.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-sm leading-relaxed text-slate-900">
                  If you double the weight of a car, you double its energy. But if you
                  double the speed of a car, its kinetic energy becomes{" "}
                  <span className="font-extrabold text-slate-900">4x</span>!
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  That’s why speed is exciting—and also dangerous.
                </p>
              </div>
            </div>
          </RevealCard>
        </div>

        {/* Mission */}
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
            Make a creative presentation within{" "}
            <span className="font-bold text-slate-900">2 minutes</span> by:
          </p>

          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>
              Making a simple experiment to show the class exactly how{" "}
              <span className="font-semibold text-slate-900">speed</span> and{" "}
              <span className="font-semibold text-slate-900">mass</span> changes everything.
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
                Tap <span className="font-semibold text-slate-900">READY</span> to reveal your tasks 👇
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
            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Materials Needed</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Inclined plane (ramp)
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  One lightweight toy car
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  One heavy toy car
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  A small ball, a paper cup, or a row of blocks placed at the bottom
                  of the ramp
                </li>
              </ul>
            </section>

            {/* Procedure */}
            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Procedure</h2>
              </div>

              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <h3 className="text-sm font-extrabold text-slate-900">A) Test the Speed</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                  <li>Release the light car from halfway up the ramp. Note how far the target moves.</li>
                  <li>Release the same car from the very top of the ramp (higher speed).</li>
                </ol>
                <p className="mt-3 flex items-start gap-2 rounded-xl bg-rose-50/80 p-3 text-sm text-slate-800 ring-1 ring-red-500/10">
                  <BatteryCharging className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <span>
                    <span className="font-bold">Observation:</span> More speed creates more kinetic energy
                    to knock the target further!
                  </span>
                </p>
              </div>

              <div className="mt-3 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <h3 className="text-sm font-extrabold text-slate-900">B) Test the Mass</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
                  <li>Place the target back in its spot.</li>
                  <li>Release the light car from the top.</li>
                  <li>Release the heavy car from the same height (so they reach the same speed).</li>
                  <li>Note your observation.</li>
                </ol>
                <p className="mt-3 flex items-start gap-2 rounded-xl bg-rose-50/80 p-3 text-sm text-slate-800 ring-1 ring-red-500/10">
                  <BatteryCharging className="mt-0.5 h-5 w-5 text-emerald-500" />
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
            className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-red-500/30 shadow-sm shadow-black/5 backdrop-blur hover:bg-white active:scale-[0.98]"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}