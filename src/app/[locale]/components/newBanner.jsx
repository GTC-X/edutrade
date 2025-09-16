
import React, { useEffect, useMemo, useState } from "react";

const BRAND = {
    purple: "#662D91",
    body: "#221E1F",
    gold: "#C49A6C",
    goldLight: "#D6B086",
    goldText: "#FFF",
};

export default function EduTradeHero({
    ringSrc = "/banner-new-1.svg", // use your museum ring art here
    setIsOpen,
}) {
    const eventDate = useMemo(() => new Date("2025-10-11T10:00:00.000Z"), []);
    const [t, setT] = useState(diff(eventDate));
    useEffect(() => {
        const id = setInterval(() => setT(diff(eventDate)), 1000);
        return () => clearInterval(id);
    }, [eventDate]);

    return (
        <section className="w-full relative bg-white  text-[#2E2B3A]">
            {/* Header: centered logo */}
            <div className="mx-auto max-w-6xl px-4 pt-6">
                <div className="flex items-center justify-center">
                    <Logo />
                </div>
            </div>

            {/* HERO (ring is absolutely positioned so it can overlap) */}
            <div className="relative">
                <div className="mx-auto max-w-6xl px-4 pt-6 pb-4 md:pt-16 md:pb-28">
                    <div className="grid grid-cols-1 items-start gap-2 md:grid-cols-2 md:gap-4">
                        {/* Left copy */}
                        <div className="relative z-10">
                            <h1
                                className="text-[46px] text-center md:text-left leading-[52px] md:text-[46px] md:leading-[52px] font-extrabold tracking-tight text-[color:var(--h)]"
                                style={{ ["--h"]: BRAND.purple }}
                            >
                                Turn Your IB Business into
                                a Revenue Machine
                            </h1>

                            <p
                                className="mt-4 md:mt-5 hidden md:block max-w-[560px] text-[14.5px] leading-[1.75] text-[color:var(--body)]"
                                style={{ ["--body"]: BRAND.body }}
                            >
                                At Edu.trade’s premier Introducing Broker event at The Museum of
                                the Future in Dubai, you’ll learn how top GCC Introducing
                                Brokers are multiplying their commissions, winning more traders,
                                and locking in long-term growth. If you’re serious about scaling
                                your IB business, this is where it starts.
                            </p>

                            <button
                                onClick={() => setIsOpen?.(true)}
                                className="mt-6 md:mt-8 hidden md:inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-6 md:px-8 py-2.5 text-[14px] md:text-[15px] font-semibold text-[color:var(--goldText)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/50"
                                style={
                                    {
                                        ["--gold"]: BRAND.gold,
                                        ["--goldText"]: BRAND.goldText,
                                    }
                                }
                            >
                                Book My Seat
                            </button>
                        </div>

                        {/* Spacer right column (keeps grid) */}
                        <div className="relative min-h-[0px] md:min-h-[380px]" />
                    </div>
                </div>

                {/* Ring artwork — responsive, anchored right, sits BEHIND the curve */}
                <div
                    className="pointer-events-none absolute hidden md:flex -bottom-[40px] md:-bottom-[20px] right-0 z-0 justify-end">
                    <img
                        src={ringSrc}
                        alt="Museum of the Future"
                        className="w-[88%] max-w-[720px] md:w-[58%] lg:w-[90%] h-auto object-contain drop-shadow-[0_10px_26px_rgba(0,0,0,0.18)]"
                        style={{ objectPosition: "right center" }}
                    />
                </div>

                {/* Mobile image (separate asset) */}
                <div className="z-0 md:hidden">
                    <img
                        src={ringSrc}
                        alt="Museum of the Future"
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

            {/* PURPLE BAND with curved top in front of ring */}
            <section className="relative text-white">
                {/* Curved top edge — placed ABOVE the ring (z-10) */}
                <svg
                    className="pointer-events-none absolute -top-[100px] md:-top-[130px] left-0 w-full h-[140px] md:h-[180px] z-10"
                    viewBox="0 0 1440 220"
                    preserveAspectRatio="none"
                    aria-hidden
                >
                    {/* Single smooth “rise to the right” curve similar to screenshot */}
                    <path
                        d="
              M -10 120
              C 300 140, 620 60, 900 80
              C 1180 100, 1380 130, 1450 110
              L 1450 240
              L -10 240 Z
            "
                        fill={BRAND.purple}
                    />
                </svg>

                {/* Purple body */}
                <div
                    className="w-full relative z-10 bg-[color:var(--purple)] pt-10 md:pt-14 pb-6 md:pb-16"
                    style={{ ["--purple"]: BRAND.purple }}
                >
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        {/* Mobile paragraph + button (match screenshot hierarchy) */}
                        <p className="block md:hidden max-w-[620px] mx-auto text-[15px] leading-[1.7] text-white/95">
                            At Edu.trade’s premier Introducing Broker event at The Museum of
                            the Future in Dubai, you’ll learn how top GCC Introducing Brokers
                            are multiplying their commissions, winning more traders, and
                            locking in long-term growth. If you’re serious about scaling your
                            IB business, this is where it starts.
                        </p>
                        <button
                            className="my-6 mb-10  block md:hidden w-full items-center justify-center rounded-full bg-[color:var(--gold)] px-8 py-2.5 text-[15px] font-semibold text-[color:var(--goldText)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/50"
                            style={
                                {
                                    ["--gold"]: BRAND.gold,
                                    ["--goldText"]: BRAND.goldText,
                                }
                            }
                            onClick={() => setIsOpen?.(true)}
                        >
                            Book My Seat
                        </button>

                        <h2 className="text-[20px] md:text-[28px] font-bold">
                            Till the Biggest Introducing Broker Event of 2025!
                        </h2>
                        <p className="mt-1.5 text-white/90 text-[13px] md:text-[14px]">
                            At the Museum of the Future, Saturday, 11th October 2025
                        </p>

                        <div className="mt-8 md:mt-10 grid grid-cols-4 gap-6 md:gap-12">
                            <TimeStat value={t.days} label="DAYS" />
                            <TimeStat value={t.hours} label="HOURS" />
                            <TimeStat value={t.minutes} label="MINUTES" />
                            <TimeStat value={t.seconds} label="SECONDS" />
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

/* ————— atoms ————— */
function TimeStat({ value, label }) {
    return (
        <div className="text-center">
            <div
                className="text-[34px] md:text-[44px] font-extrabold leading-none text-[color:var(--goldLight)]"
                style={{ ["--goldLight"]: BRAND.goldLight }}
            >
                {String(value).padStart(2, "0")}
            </div>
            <div className="mt-2 text-[10px] md:text-[12px] uppercase tracking-[0.35em] text-[#F3E3FF]">
                {label}
            </div>
        </div>
    );
}

function Logo() {
    return (
        <div className="py-3 flex justify-center">
            <img src="/logo.svg" alt="Edu.trade" className="h-8 w-auto" />
        </div>
    );
}

/* ————— util ————— */
function diff(target) {
    const now = Date.now();
    const t = Math.max(0, target.getTime() - now);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    return { days, hours, minutes, seconds };
}
