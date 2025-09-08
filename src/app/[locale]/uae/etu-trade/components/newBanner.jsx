// import React, { useEffect, useMemo, useState } from 'react';

// /**
//  * Edu.trade — Pixel‑perfect hero + countdown (Tailwind)
//  * Match the provided mock: colors, spacing, typography, wave, and layout.
//  * - Container: max-w-6xl as per your preference
//  * - Heading color: brand purple
//  * - CTA: soft-gold rounded pill
//  * - Right visual: ring photo with subtle chart backdrop
//  * - Curved purple band with countdown (gold numbers, spaced unit labels)
//  */

// const BRAND = {
//     purple: '#5C2D91',           // main
//     purpleDeep: '#4B247A',        // shadow accents
//     title: '#5C2D91',
//     body: '#5B5871',
//     gold: '#E7C99C',             // CTA & numbers
//     goldText: '#3D2C16',
//     white: '#FFFFFF'
// };

// export default function EduTradeHero({
//     ringSrc = '/banner-img.svg'
// }) {
//     const eventDate = useMemo(() => new Date('2025-10-11T10:00:00.000Z'), []);
//     const [left, setLeft] = useState(diff(eventDate));
//     useEffect(() => { const id = setInterval(() => setLeft(diff(eventDate)), 1000); return () => clearInterval(id); }, [eventDate]);

//     return (
//         <section className="w-full bg-white font-sans text-[#2E2B3A]">
//             {/* HEADER / LOGO */}
//             <div className="mx-auto max-w-6xl px-4 pt-8 md:pt-10">
//                 <div className="flex items-center justify-start">
//                     <Logo />
//                 </div>
//             </div>

//             {/* HERO */}
//             <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-14 md:pt-8 md:pb-20">
//                 <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
//                     {/* LEFT: copy */}
//                     <div className="md:pr-6">
//                         <h1
//                             className="text-[34px] leading-[1.08] font-extrabold tracking-tight text-[color:var(--title)] md:text-[48px]"
//                             style={{ ['--title']: BRAND.title }}
//                         >
//                             Turn Your IB Business into
//                             <br className="hidden md:block" />
//                             <span className="block">a Revenue Machine</span>
//                         </h1>

//                         <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-[color:var(--body)] md:mt-5 md:text-[15.5px]" style={{ ['--body']: BRAND.body }}>
//                             At Edu.trade’s premier Introducing Broker event at The Museum of the Future in Dubai, you’ll learn how top GCC Introducing Brokers are multiplying their commissions, winning more traders, and locking in long‑term growth. If you’re serious about scaling your IB business, this is where it starts.
//                         </p>

//                         <button
//                             className="mt-7 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-[15px] font-semibold text-[color:var(--goldText)] shadow-[0_6px_16px_rgba(0,0,0,.08)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/50"
//                             style={{ ['--gold']: BRAND.gold, ['--goldText']: BRAND.goldText }}
//                         >
//                             Book My Seat
//                         </button>
//                     </div>

//                     {/* RIGHT: image + backdrop */}
//                     <div className="relative">
//                         <ChartBackdrop />
//                         <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl shadow-[0_16px_44px_rgba(92,45,145,0.18)]">
//                             <img src={ringSrc} alt="Museum of the Future" className="h-full w-full object-cover" />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* PURPLE WAVE TOP EDGE */}
//             <div className="relative -mt-4">
//                 {/* <svg className="block w-full" viewBox="0 0 1440 180" preserveAspectRatio="none" aria-hidden>
//                     <path d="M0,120 C240,190 480,0 720,70 C980,150 1200,220 1440,160 L1440,0 L0,0 Z" fill={BRAND.purple} />
//                 </svg> */}

//                 {/* Purple band */}
//                 <div className="w-full pb-12 pt-6 text-white md:pb-16 md:pt-8"
//                     style={{
//                         backgroundImage: "url('/curve.svg')",
//                         backgroundSize: "620px auto",
//                         backgroundRepeat: "no-repeat",
//                         backgroundPosition: "center right",
//                         ['--purple']: BRAND.purple
//                     }}
//                 >
//                     <div className="mx-auto max-w-6xl px-4 text-center">
//                         <h2 className="text-[26px] font-extrabold tracking-tight md:text-[30px]">
//                             Till the Biggest Introducing Broker Event of 2025!
//                         </h2>
//                         <p className="mt-1.5 text-[14px] text-white/85 md:text-[15px]">
//                             At the Museum of the Future, Saturday, 11th October 2025
//                         </p>

//                         {/* COUNTDOWN */}
//                         <div className="mt-8 grid grid-cols-4 gap-4 md:mt-10 md:gap-8">
//                             <Time value={left.days} label="DAYS" />
//                             <Time value={left.hours} label="HOURS" />
//                             <Time value={left.minutes} label="MINUTES" />
//                             <Time value={left.seconds} label="SECONDS" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// /* ——————— components ——————— */
// function Time({ value, label }) {
//     return (
//         <div className="rounded-2xl bg-white/5 py-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur-[1px]">
//             <div className="text-[40px] font-extrabold leading-none text-[color:var(--gold)] md:text-[48px]" style={{ ['--gold']: BRAND.gold }}>
//                 {String(value).padStart(2, '0')}
//             </div>
//             <div className="mt-2 text-[11px] uppercase tracking-[0.38em] text-white/80 md:text-[12px]">{label}</div>
//         </div>
//     );
// }

// function Logo() {
//     return (
//         <div className="flex select-none items-center gap-2">
//             <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#F5B23C] to-[#7A3AED] text-white shadow-sm">
//                 <span className="-mt-[1px] text-[14px] font-black">E</span>
//             </div>
//             <div className="text-[19px] font-extrabold tracking-tight text-[color:var(--purple)]" style={{ ['--purple']: BRAND.purple }}>
//                 Edu<span className="text-[#F4AF36]">.</span>trade
//             </div>
//         </div>
//     );
// }

// function ChartBackdrop() {
//     // Soft candlestick backdrop to echo the mock
//     return (
//         <div className="pointer-events-none absolute inset-0 -z-10">
//             <div className="absolute -top-6 right-0 h-56 w-[60%] opacity-30 md:-top-8 md:h-64">
//                 <div className="grid h-full grid-cols-16 items-end gap-2">
//                     {Array.from({ length: 24 }).map((_, i) => (
//                         <div key={i} className="flex items-end justify-center">
//                             <div className="h-full w-[2px] bg-white/0" />
//                             <div
//                                 className="w-2 rounded-sm bg-white/60"
//                                 style={{ height: `${36 + ((i * 23) % 80)}px`, background: `linear-gradient(to top, ${BRAND.purple}, rgba(255,255,255,.8))` }}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// /* ——————— utils ——————— */
// function diff(target) {
//     const now = Date.now();
//     const t = Math.max(0, target.getTime() - now);
//     const days = Math.floor(t / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     const minutes = Math.floor((t / (1000 * 60)) % 60);
//     const seconds = Math.floor((t / 1000) % 60);
//     return { days, hours, minutes, seconds };
// }

import React, { useEffect, useMemo, useState } from 'react';

/**
 * Edu.trade — Hero + Countdown (closely matched to the image)
 * Fixes:
 *  - Wave is part of the purple band (not a separate cap) so the bottom section sits ON the curve
 *  - Ring image overlaps the curve correctly (z-10)
 *  - Curve shape tuned to screenshot
 */

const BRAND = {
    purple: '#662D91',
    body: '#221E1F',
    gold: '#C49A6C',
    goldLight: '#D6B086',
    goldText: '#FFF',
};

export default function EduTradeHero({ ringSrc = '/banner-img.svg' }) {
    const eventDate = useMemo(() => new Date('2025-10-11T10:00:00.000Z'), []);
    const [t, setT] = useState(diff(eventDate));
    useEffect(() => { const id = setInterval(() => setT(diff(eventDate)), 1000); return () => clearInterval(id); }, [eventDate]);

    return (
        <section className="w-full relative bg-white font-sans text-[#2E2B3A]">
            {/* Header: centered logo */}
            <div className="mx-auto container px-4 pt-6">
                <div className="flex items-center justify-center"><Logo /></div>
            </div>

            {/* HERO */}
            <div className=" mx-auto container pt-6 pb-16 md:pt-16 md:pb-24">
                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
                    {/* Left copy */}
                    <div className="md:pr-6">
                        <h1 className="text-[34px] leading-[1.08] font-extrabold tracking-tight text-[color:var(--h)] md:text-[50px] md:leading-[64px]" style={{ ['--h']: BRAND.purple }}>
                            Turn Your IB Business into
                            <span className="block">a Revenue Machine</span>
                        </h1>
                        <p className="mt-8 max-w-[620px] text-[14.5px] leading-[1.75] text-[color:var(--body)] md:mt-5 md:text-[16px] md:leading-[20px]" style={{ ['--body']: BRAND.body }}>
                            At Edu.trade’s premier Introducing Broker event at The Museum of the Future in Dubai, you’ll learn how top GCC Introducing Brokers are multiplying their commissions, winning more traders, and locking in long‑term growth. If you’re serious about scaling your IB business, this is where it starts.
                        </p>
                        <button
                            className="mt-8 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-8 py-2.5 text-[15px] font-semibold text-[color:var(--goldText)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/50"
                            style={{ ['--gold']: BRAND.gold, ['--goldText']: BRAND.goldText }}
                        >
                            Book My Seat
                        </button>
                    </div>

                    {/* Right visual (above wave) */}
                    <div className=" z-0 h-[580px] top-0 absolute right-0 ml-auto flex justify-end">
                        <img src={ringSrc} alt="Museum of the Future" className="h-full w-full object-cover" style={{ objectPosition: 'right center' }} />
                    </div>
                </div>
            </div>

            {/* PURPLE BAND with integrated curved top */}
            <section className="relative text-white">
                {/* The curved top edge (purple under the path) */}
                <svg className="pointer-events-none absolute -top-[120px] left-0 h-[180px] w-full" viewBox="0 0 1440 230" preserveAspectRatio="none" aria-hidden>
                    {/* curve tuned to screenshot: higher near center-right, smooth from left */}
                    <path d="M853.5 27.5731C1160.59 -33.4456 1408.87 20.7462 1513 56.5389V486H-65V66.0765C81.287 90.3361 453.5 107.053 853.5 27.5731Z" fill="#662D91" />
                </svg>

                {/* Purple body */}
                <div className="w-full relative bg-[color:var(--purple)] pb-12 md:pb-16" style={{ ['--purple']: BRAND.purple }}>
                    <div className="mx-auto max-w-6xl px-4 text-center">
                        <h2 className="text-[24px] font-extrabold tracking-tight md:text-[40px]">Till the Biggest Introducing Broker Event of 2025!</h2>
                        <p className="mt-1.5 text-[13px] text-white/85 md:text-[16px]">At the Museum of the Future, Saturday, 11th October 2025</p>

                        <div className="mt-10 grid grid-cols-4 gap-8 md:mt-12 md:gap-12">
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
            <div className="text-[44px] font-extrabold leading-none text-[color:var(--goldLight)] md:text-[60px]" style={{ ['--goldLight']: BRAND.goldLight }}>
                {String(value).padStart(2, '0')}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.35em] text-[#F3E3FF] md:text-[20px]">{label}</div>
        </div>
    );
}

function Logo() {
    return (
        <div className="py-3 flex justify-center md:justify-center">
            <img src="/logo.svg" alt="etu logo" className="h-8 w-auto" />
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


// import React, { useEffect, useMemo, useState } from 'react';

/**
 * Edu.trade — Hero + Countdown (closely matched to the image)
 * Fixes:
 *  - Wave is part of the purple band (not a separate cap) so the bottom section sits ON the curve
 *  - Ring image overlaps the curve correctly (z-10)
 *  - Curve shape tuned to screenshot
 */

// const BRAND = {
//   purple: '#5C2D91',
//   body: '#5B5871',
//   gold: '#E7C99C',
//   goldText: '#3D2C16',
// };

// export default function EduTradeHero({ ringSrc = '/banner-img.svg' }) {
//   const eventDate = useMemo(() => new Date('2025-10-11T10:00:00.000Z'), []);
//   const [t, setT] = useState(diff(eventDate));
//   useEffect(() => { const id = setInterval(() => setT(diff(eventDate)), 1000); return () => clearInterval(id); }, [eventDate]);

//   return (
//     <section className="w-full bg-white font-sans text-[#2E2B3A]">
//       {/* Header: centered logo */}
//       <div className="mx-auto max-w-6xl px-4 pt-6">
//         <div className="flex items-center justify-center"><Logo /></div>
//       </div>

//       {/* HERO */}
//       <div className="relative mx-auto max-w-6xl px-4 pt-6 pb-16 md:pt-8 md:pb-24">
//         <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
//           {/* Left copy */}
//           <div className="md:pr-6">
//             <h1 className="text-[34px] leading-[1.08] font-extrabold tracking-tight text-[color:var(--h)] md:text-[46px]" style={{ ['--h']: BRAND.purple }}>
//               Turn Your IB Business into
//               <br className="hidden md:block" />
//               <span className="block">a Revenue Machine</span>
//             </h1>
//             <p className="mt-4 max-w-[560px] text-[14.5px] leading-[1.75] text-[color:var(--body)] md:mt-5 md:text-[15px]" style={{ ['--body']: BRAND.body }}>
//               At Edu.trade’s premier Introducing Broker event at The Museum of the Future in Dubai, you’ll learn how top GCC Introducing Brokers are multiplying their commissions, winning more traders, and locking in long‑term growth. If you’re serious about scaling your IB business, this is where it starts.
//             </p>
//             <button
//               className="mt-7 inline-flex items-center justify-center rounded-full bg-[color:var(--gold)] px-7 py-3.5 text-[15px] font-semibold text-[color:var(--goldText)] shadow-[0_8px_18px_rgba(0,0,0,.10)] transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[color:var(--gold)]/50"
//               style={{ ['--gold']: BRAND.gold, ['--goldText']: BRAND.goldText }}
//             >
//               Book My Seat
//             </button>
//           </div>

//           {/* Right visual (above wave) */}
//           <div className="relative z-10 md:-mb-16 md:ml-auto">
//             <CandlesBackdrop />
//             <div className="relative mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl shadow-[0_16px_44px_rgba(92,45,145,0.18)]">
//               <img src={ringSrc} alt="Museum of the Future" className="h-full w-full object-cover object-right" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* PURPLE BAND with integrated curved top */}
//       <section className="relative text-white">
//         {/* The curved top edge (purple under the path) */}
//         <svg className="pointer-events-none absolute -top-[140px] left-0 h-[140px] w-full" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden>
//           {/* curve tuned to screenshot: higher near center-right, smooth from left */}
//           <path d="M0,90 C 280,160 520,18 820,78 C 1060,126 1260,150 1440,120 L1440,140 L0,140 Z" fill={BRAND.purple} />
//         </svg>

//         {/* Purple body */}
//         <div className="w-full bg-[color:var(--purple)] pb-12 pt-7 md:pb-16 md:pt-8" style={{ ['--purple']: BRAND.purple }}>
//           <div className="mx-auto max-w-6xl px-4 text-center">
//             <h2 className="text-[24px] font-extrabold tracking-tight md:text-[28px]">Till the Biggest Introducing Broker Event of 2025!</h2>
//             <p className="mt-1.5 text-[13px] text-white/85 md:text-[14px]">At the Museum of the Future, Saturday, 11th October 2025</p>

//             <div className="mt-8 grid grid-cols-4 gap-8 md:mt-10 md:gap-12">
//               <TimeStat value={t.days} label="DAYS" />
//               <TimeStat value={t.hours} label="HOURS" />
//               <TimeStat value={t.minutes} label="MINUTES" />
//               <TimeStat value={t.seconds} label="SECONDS" />
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }

// /* ————— atoms ————— */
// function TimeStat({ value, label }) {
//   return (
//     <div className="text-center">
//       <div className="text-[44px] font-extrabold leading-none text-[color:var(--gold)] md:text-[48px]" style={{ ['--gold']: BRAND.gold }}>
//         {String(value).padStart(2, '0')}
//       </div>
//       <div className="mt-1 text-[11px] uppercase tracking-[0.35em] text-white/80 md:text-[12px]">{label}</div>
//     </div>
//   );
// }

// function Logo() {
//   return (
//     <div className="flex select-none items-center gap-2">
//       <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#F5B23C] to-[#7A3AED] text-white shadow-sm">
//         <span className="-mt-[1px] text-[14px] font-black">E</span>
//       </div>
//       <div className="text-[18px] font-extrabold tracking-tight text-[color:var(--purple)]" style={{ ['--purple']: BRAND.purple }}>
//         Edu<span className="text-[#F4AF36]">.</span>trade
//       </div>
//     </div>
//   );
// }

// function CandlesBackdrop() {
//   return (
//     <div className="pointer-events-none absolute inset-0 -z-10">
//       <div className="absolute -top-6 right-0 h-56 w-[58%] opacity-30 md:-top-8 md:h-64">
//         <div className="grid h-full grid-cols-16 items-end gap-2">
//           {Array.from({ length: 20 }).map((_, i) => (
//             <div key={i} className="flex items-end justify-center">
//               <div className="h-full w-[2px] bg-white/0" />
//               <div className="w-2 rounded-sm" style={{ height: `${34 + ((i * 23) % 78)}px`, background: `linear-gradient(to top, ${BRAND.purple}, rgba(255,255,255,.85))` }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ————— util ————— */
// function diff(target) {
//   const now = Date.now();
//   const t = Math.max(0, target.getTime() - now);
//   const days = Math.floor(t / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   const minutes = Math.floor((t / (1000 * 60)) % 60);
//   const seconds = Math.floor((t / 1000) % 60);
//   return { days, hours, minutes, seconds };
// }

