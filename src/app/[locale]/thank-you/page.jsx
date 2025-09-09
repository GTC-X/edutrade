
import React from 'react';
import EduTradeFooterBar from '../components/Footer';
import Meta from '../components/Meta';


/**
 * Confirmation Notice — Pixel‑perfect JSX (TailwindCSS)
 * Matches the mock: purple background with subtle chart pattern, left copy,
 * right glossy purple circle with a white check, and a white curved wedge on
 * the far right. All sizes, spacing, and colors tuned to the screenshot.
 */

const C = {
  purple: '#76469A',
  purpleDeep: '#76469A',
  white: '#FFFFFF',
  copy: 'rgba(255,255,255,0.92)',
  copySoft: 'rgba(255,255,255,0.82)'
};

export default function ConfirmNotice({ firstName = '[FIRST NAME]', email = '[EMAIL]' }) {
  return (
    <>
     <Meta title='Edu.trade Introducing Brokers Growth Event 11th October 2025' description='Join Edu.trade at The Museum of the Future and discover how GCC Introducing Brokers can scale their business with exclusive events, insights, and opportunities.' />
  
    <div className=' min-h-screen flex flex-col'>
      <section className="relative w-full flex-1 h-full overflow-hidden" style={{ backgroundColor: C.purple }}>
        <div className="mx-auto container pt-6">
          <div className="py-3 flex justify-center md:justify-center">
            <img src="/logo-white.svg" alt="etu logo" className="h-8 w-auto" />
          </div>
        </div>

        {/* Background: soft chart lines & dots */}
        <ChartBackdrop />
        {/* Right white curved wedge */}
        <RightCurve />

        <div className="relative mx-auto container py-10  md:py-14">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
            {/* LEFT: Copy */}
            <div className="md:col-span-7 lg:col-span-7">
              <h1 className="text-[26px] font-extrabold leading-[1.15] text-white md:text-[50px]">
                Hi, {firstName},
              </h1>

              <p className="mt-4 max-w-[560px] text-[20px] font-normal leading-[32px]" style={{ color: C.copy }}>
                We’ve just sent a confirmation email, which explains the steps we take to ensure that everyone coming to our events is vetted.
              </p>
              <p className="mt-3 max-w-[560px] text-[20px] font-normal leading-[32px]" style={{ color: C.copy }}>
                Give it a quick look, it has everything you need to know.
              </p>

              <p className="mt-4 text-[20px] font-normal leading-[32px]" style={{ color: C.copy }}>
                Can’t find the email?
              </p>
              <p className="mt-1 max-w-[560px] font-normal text-[20px] leading-[32px]" style={{ color: C.copySoft }}>
                Sometimes it sneaks into your spam or junk folder. If it has, just move it back to your inbox so you don’t miss any updates from us.
              </p>

              <p className="mt-4 text-[20px] font-normal leading-[32px]" style={{ color: C.copy }}>
                Have a great day!
              </p>
              <p className="mt-3 text-[20px] leading-[32px] text-white">
                <span className="font-semibold">Your <span className="font-semibold">Edu.trade</span> Family</span>
              </p>
            </div>

            {/* RIGHT: Glossy check disc */}
            <div className="md:col-span-5 lg:col-span-5 flex items-center justify-center md:justify-end">
              <CheckDisc />
            </div>
          </div>
        </div>
      </section>
      <EduTradeFooterBar />
    </div>
      </>
  );
}

/* ————————— Visual elements ————————— */
function CheckDisc() {
  return (
    <div className="relative h-[220px] w-[220px] md:h-[240px] md:w-[240px]">
      {/* Main glossy disc */}
      <div className="relative flex h-full w-full items-center justify-center rounded-full shadow-[0_30px_50px_rgba(0,0,0,0.25)]" style={{ background: 'linear-gradient(180deg, #8D6EEF 0%, #6B47C6 100%)' }}>
        {/* inner glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full" style={{ boxShadow: 'inset 0 18px 28px rgba(255,255,255,0.22), inset 0 -18px 28px rgba(0,0,0,0.18)' }} />
        {/* highlight */}
        <div className="pointer-events-none absolute left-6 top-5 h-16 w-28 rounded-[48px] bg-white/30 blur-[18px]" />
        {/* Check icon */}
        <svg width="120" height="120" viewBox="0 0 120 120" className="relative">
          <path d="M35 62 L53 80 L86 47" fill="none" stroke="#FFFFFF" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {/* soft shadow under disc */}
      <div className="absolute -bottom-6 left-1/2 h-6 w-36 -translate-x-1/2 rounded-full bg-black/35 blur-[10px] opacity-30" />
    </div>
  );
}

function RightCurve() {
  // large white oval pushed off-screen right to create the curved wedge
  return (
    <div className="pointer-events-none absolute right-[-18%] top-[-20%] h-[200%] w-[55%] rounded-[999px] min-h-screen" >
      <svg xmlns="http://www.w3.org/2000/svg" width="735" height="914" viewBox="0 0 735 914" fill="none">
        <path d="M440.905 231.617C508.625 -62.2669 734.51 -165.46 850.847 -191.783L1315.52 173.153L449.209 1276.21L0.306653 923.66C120.72 852.898 352.696 614.415 440.905 231.617Z" fill="#F3E3FF" />
      </svg>
    </div>
  );
}

function ChartBackdrop() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden>
      {/* faint numeric columns (left) */}
      <g opacity="0.10">
        {Array.from({ length: 12 }).map((_, i) => (
          <text key={i} x={20 + i * 24} y={40} fontSize="10" fill="#FFFFFF">{String(7021 + i)}</text>
        ))}
      </g>
      {/* line chart dots & path (center-left) */}
      <g opacity="0.18">
        <path d="M120 260 C 200 210, 260 240, 320 200 C 380 160, 430 230, 500 185" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        {[
          [120, 260], [180, 220], [240, 235], [300, 205], [360, 175], [420, 220], [500, 185]
        ].map(([x, y], idx) => (
          <circle key={idx} cx={x} cy={y} r="4" fill="#FFFFFF" />
        ))}
      </g>
      {/* bar chart fade (bottom-left) */}
      <g opacity="0.20">
        {Array.from({ length: 18 }).map((_, i) => (
          <rect key={i} x={110 + i * 18} y={360 - (i % 7) * 14} width="10" height={(i % 7) * 14 + 40} fill="#FFFFFF" />
        ))}
      </g>
    </svg>
  );
}
