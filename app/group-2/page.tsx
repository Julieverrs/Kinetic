"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useMemo, useRef, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Sparkles,
  Zap,
  Weight,
  Gauge,
  Box,
  Route,
  PartyPopper,
  ShieldCheck,
  Rocket,
  Target,
  Trophy,
  Smile,
  MessageCircle,
  Calculator,
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

export default function Group2Page() {
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
      {/* WHITE theme background with red touch (same as Group 1 vibe) */}
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
            Group 2
          </span>
        </div>

        <header className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Smile className="h-5 w-5 text-amber-500" />
            <p className="text-sm font-medium text-slate-700">
              Hello, Good Day Wizards!
            </p>
          </div>

          <div className="mt-2 flex items-center gap-2">
            <Rocket className="h-6 w-6 text-red-600" />
            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900">
              The K.E. Formula Spellbook ✨
            </h1>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            Within 5 minutes, the race is in your hands! Mater knows he is strong,
            but he doesn’t know the math behind his power. As the
            <span className="font-semibold text-slate-900"> Math Professors</span> of
            the crew, your job is to launch the magic formula and teach the class
            how to calculate kinetic energy accurately.
          </p>
        </header>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-rose-500/10 blur-3xl" />

          <div className="flex items-start gap-4">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-md shadow-black/10">
              <Image
                src="/images/PIC2.jpg"
                alt="Mater"
                fill
                className="object-cover"
                sizes="80px"
                priority
              />
            </div>

            <div className="min-w-0 flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-700 ring-1 ring-red-500/15">
                <MessageCircle className="h-4 w-4" />
                Mater says…
              </div>

              <p className="mt-2 text-sm font-semibold text-slate-900">
                “Well, shoot! If I’m movin’, I got kinetic energy… and if I go
                faster, I got a whole lot more!”
              </p>

              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Today you’ll learn the formula that explains why speed matters so much.
              </p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-4 text-red-700/80">
            <Zap className="h-6 w-6 text-amber-500" />
            <Gauge className="h-6 w-6" />
            <Weight className="h-6 w-6" />
            <Calculator className="h-6 w-6" />
            <Sparkles className="h-6 w-6 text-red-600" />
          </div>
        </section>

        <div className="mt-4 space-y-3">
          <RevealCard
            icon={<Zap className="h-5 w-5 text-red-600" />}
            title="What is Kinetic Energy?"
            subtitle="Energy of Motion ⚡ (Tap to reveal)"
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <p className="text-sm leading-relaxed text-slate-700">
                Kinetic Energy (KE) is the “Energy of Motion.” It is the energy an
                object possesses because it is currently moving.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Imagine Mater at the starting line. While he is stationary, his kinetic
                energy is zero. The moment he starts to roll, he gains kinetic energy.
                The faster he goes—or the heavier he is—the more energy he carries.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Kinetic energy is measured in{" "}
                <span className="font-semibold text-slate-900">Joules (J)</span>.
              </p>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Weight className="h-5 w-5 text-red-600" />}
            title="Factor 1: Mass (m)"
            subtitle="Heaviness of the object (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm leading-relaxed text-slate-700">
                  Mass is the “heaviness” of the object. A big truck has more kinetic
                  energy than a small car, even if they move at the same speed.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-xs font-bold text-red-700">Unit</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Mass is measured in{" "}
                  <span className="font-semibold text-slate-900">kilograms (kg)</span>.
                </p>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Gauge className="h-5 w-5 text-red-600" />}
            title="Factor 2: Velocity (v)"
            subtitle="Speed of the object (Tap to reveal)"
          >
            <div className="space-y-3">
              <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm leading-relaxed text-slate-700">
                  Velocity is the speed of the object. This is the “power ingredient.”
                  If you increase the speed, the energy increases much faster than if
                  you just increased the weight.
                </p>
              </div>
              <div className="rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
                <p className="text-xs font-bold text-red-700">Unit</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  Velocity is measured in{" "}
                  <span className="font-semibold text-slate-900">
                    meters per second (m/s)
                  </span>
                  .
                </p>
              </div>
            </div>
          </RevealCard>

          <RevealCard
            icon={<Calculator className="h-5 w-5 text-red-600" />}
            title="The Formula"
            subtitle="KE = ½(m)(v)² (Tap to reveal)"
            defaultOpen
          >
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
              <p className="text-sm leading-relaxed text-slate-700">
                <span className="font-extrabold text-slate-900">KE = ½ (m) (v)²</span>
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  m = mass of the object in kg
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  v = speed of the object in m/s
                </li>
              </ul>
            </div>
          </RevealCard>
        </div>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-28 -left-28 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold text-slate-900">
              Take a Look at this Problem!
            </h2>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-black/5">
              <Calculator className="h-4 w-4 text-red-600" />
              Worked Example
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
            <p className="text-sm font-extrabold text-slate-900">Problem No. 1</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Mater has a mass of 1,000 kg. He is speeding down the track at a
              velocity of 10 m/s. How much kinetic energy does he have?
            </p>
          </div>

          <div className="mt-3 rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
            <p className="text-sm font-extrabold text-slate-900">
              Step 1: Identify your variables
            </p>
            <p className="mt-2 text-sm text-slate-700">Mass (m): 1,000 kg</p>
            <p className="mt-1 text-sm text-slate-700">Velocity (v): 10 m/s</p>
          </div>

          <div className="mt-3 rounded-2xl bg-rose-50/80 p-4 ring-1 ring-red-500/10">
            <p className="text-sm font-extrabold text-slate-900">
              Step 2: Use the correct formula
            </p>

            <div className="mt-2 space-y-2 text-sm text-slate-700">
              <div className="space-y-1 font-semibold italic text-slate-900">
                <p>
                  KE=
                  <span className="inline-flex flex-col items-center align-middle leading-none">
                    <span className="text-[11px]">1</span>
                    <span className="h-px w-5 bg-slate-900/60" />
                    <span className="text-[11px]">2</span>
                  </span>{" "}
                  (m) (v)
                  <sup className="text-[10px]">2</sup>
                </p>
                <p>
                  KE=
                  <span className="inline-flex flex-col items-center align-middle leading-none">
                    <span className="text-[11px]">1</span>
                    <span className="h-px w-5 bg-slate-900/60" />
                    <span className="text-[11px]">2</span>
                  </span>{" "}
                  (1,000 kg) (10 m/s)
                  <sup className="text-[10px]">2</sup>
                </p>

                <p>
                  KE={"\u00A0\u00A0"}
                  <span className="inline-flex flex-col items-center align-middle leading-none">
                    <span className="text-[11px]">1</span>
                    <span className="h-px w-5 bg-slate-900/60" />
                    <span className="text-[11px]">2</span>
                  </span>
                  {"\u00A0\u00A0"}
                  (1,000 kg)(100 m
                  <sup className="text-[10px]">2</sup>
                  /s
                  <sup className="text-[10px]">2</sup>
                  )
                </p>

                <p>
                  KE=
                  <span className="inline-flex flex-col items-center align-middle leading-none">
                    <span className="text-[11px]">1</span>
                    <span className="h-px w-5 bg-slate-900/60" />
                    <span className="text-[11px]">2</span>
                  </span>{" "}
                  ( 100,000 kg*m
                  <sup className="text-[10px]">2</sup>
                  /s
                  <sup className="text-[10px]">2</sup>
                  )
                </p>

                <p>
                  KE=0.5 (100,000 kg*m
                  <sup className="text-[10px]">2</sup>
                  /s
                  <sup className="text-[10px]">2</sup>
                  )
                </p>

                <p className="text-red-700">KE=50,000 J</p>
              </div>
            </div>
          </div>

          <div className="mt-3 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
            <p className="text-sm font-extrabold text-slate-900">
              Step 3: Final Answer
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Mater has{" "}
              <span className="font-extrabold text-slate-900">50,000 J</span> of
              kinetic energy.
            </p>
          </div>
        </section>

        <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/15 bg-gradient-to-b from-red-500/10 to-white/70 p-5 shadow-xl shadow-black/5 backdrop-blur">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />

          <div className="flex items-center gap-2">
            <Target className="h-5 w-5 text-red-600" />
            <h2 className="text-lg font-extrabold text-slate-900">
              Are you ready, my Little Math Wizards?
            </h2>
            <Trophy className="h-5 w-5 text-amber-500" />
          </div>

          <p className="mt-2 text-sm leading-relaxed text-slate-700">Mission:</p>

          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-slate-700">
            <li>
              Launch the Formula: Introduce the kinetic energy formula and explain
              what each variable stands for.
            </li>
            <li>
              The Calculation Board: Solve a sample problem to prove how much energy
              a racer has at top speed.
            </li>
          </ol>

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
                Tap <span className="font-semibold text-slate-900">READY</span> to
                reveal your tasks 👇
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
            <div ref={materialsRef} />

            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -top-28 -right-28 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Box className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Materials Needed</h2>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  A whiteboard and markers
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  The digital formula displayed on this website
                </li>
                <li className="flex gap-2">
                  <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-red-500" />
                  Calculator
                </li>
              </ul>
            </section>

            <section className="relative mt-4 overflow-hidden rounded-3xl border border-red-500/30 bg-white/80 p-5 shadow-xl shadow-black/5 backdrop-blur">
              <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-rose-500/10 blur-3xl" />

              <div className="flex items-center gap-2">
                <Route className="h-5 w-5 text-slate-700" />
                <h2 className="text-lg font-bold text-slate-900">Instruction</h2>
              </div>

              <div className="mt-4 rounded-2xl bg-white/70 p-4 ring-1 ring-black/10">
                <p className="text-sm font-extrabold text-slate-900">
                  Solve this word problem
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  A heavy racing tire has a mass of 20 kg. As it rolls down the pit
                  lane, it reaches a velocity of 4 m/s. What is the tire’s kinetic
                  energy?
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Explain to the class how it was solved (identify variables, write
                  the formula, substitute, compute, and give the final answer).
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