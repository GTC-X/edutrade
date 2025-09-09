import React from 'react';

/**
 * IB Event Agenda — Pixel‑perfect JSX (TailwindCSS)
 * Matches the provided mock: light‑lavender background, centered heading/sub,
 * vertical timeline, left list of white cards, right list of purple cards,
 * times next to the center line, connectors + dot, wave + candles backdrop.
 */

const PALETTE = {
  bg: '#F3E3FF',          // light lavender background
  purple: '#662D91',      // brand purple
  purpleCard: '#6E4CCB',  // card fill (right side)
  line: '#E1D6F6',        // center line + connectors
  textMain: '#662D91',    // headings
  textBody: '#525252',    // paragraph
  time: '#A99DCA',        // time text
};

export default function IbAgendaSection({setIsOpen}) {
  const left = [
    { title: 'Speech Title 01', body: lorem(2) },
    { title: 'Speech Title 02', body: lorem(2) },
    { title: 'Speech Title 03', body: lorem(2) },
    { title: 'Speech Title 04', body: lorem(2) },
  ];
  const right = [
    { title: 'Coffee & Networking Break', body: lorem(2) },
    { title: 'Q&A', body: lorem(2) },
    { title: 'Awards', body: lorem(2) },
  ];

  return (
    <section className="relative w-full overflow-hidden" >
      <BackdropWave />
      <CandlesBackdrop />

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:py-14">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-[32px] text-center md:text-center font-extrabold leading-tight tracking-tight text-[color:var(--h)] md:text-[40px]" style={{ ['--h']: PALETTE.textMain }}>
            The IB Event Agenda of All Agendas
          </h2>
          <p className="mx-auto mt-2 max-w-[720px] leading-[1.7] text-[color:var(--b)] text-[16px]" style={{ ['--b']: PALETTE.textBody }}>
            Here’s what you’re going to experience at the world’s biggest Introducing Broker event that’s being
            held at the world’s most iconic building!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* Center line */}

          <div className="grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-10">
            {/* LEFT COLUMN */}
            <div className="relative md:pr-10">
              <div className="space-y-5">
                {left.map((item, i) => (
                  <AgendaItemLeft key={i} title={item.title} body={item.body} />
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="relative md:pl-10">
              <div className="space-y-5">
                {right.map((item, i) => (
                  <AgendaItemLeft key={i} title={item.title} body={item.body} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ———————————————— Items ———————————————— */
function AgendaItemLeft({ title, body }) {
  return (
    <div className="flex items-stretch">
      {/* Times */}
      <div className="mr-4 w-[60px] text-right mt-2">
        <div className="text-[16px]  font-semibold leading-[1.1] text-[#662D91]">09:00</div>
        <div className="mt-1 text-[16px] font-normal leading-[1.1] text-[#76469A]">09:30</div>
      </div>

      {/* Card + connector */}
      <div className="relative flex-1">
        <div className="rounded-[14px] bg-[#76469A] text-[#fff] border border-[#B888DB] p-4  md:p-5">
          <div className="text-[20px] font-semibold leading-tight text-[color:var(--p)]">{title}</div>
          <p className="mt-1.5 text-[14px] leading-[1.65] text-[color:var(--body)]">{body}</p>
        </div>

      </div>
    </div>
  );
}

function AgendaItemRight({ title, body }) {
  return (
    <div className="flex items-stretch">
      {/* Times (near the center) */}
      <div className="order-1 ml-4 w-[60px]">
        <div className="text-[11px] font-semibold leading-[1.1] text-[color:var(--t)]">09:00</div>
        <div className="mt-1 text-[11px] font-semibold leading-[1.1] text-[color:var(--t)]">09:30</div>
      </div>

      {/* Card + connector */}
      <div className="order-0 relative flex-1">
        <div className="rounded-[14px] bg-[color:var(--pc)] p-4 text-white shadow-[0_10px_26px_rgba(0,0,0,0.10)] md:p-5" style={{ ['--pc']: PALETTE.purpleCard }}>
          <div className="text-[16px] font-semibold leading-tight">{title}</div>
          <p className="mt-1.5 text-[12.5px] leading-[1.65] text-white/90">{body}</p>
        </div>
        {/* connector to center + dot */}
        <div className="pointer-events-none absolute left-[-32px] top-1/2 flex -translate-y-1/2 items-center">
          <div className="h-px w-8" style={{ backgroundColor: PALETTE.line }} />
          <div className="ml-0.5 h-2.5 w-2.5 rounded-full" style={{ backgroundColor: PALETTE.purple }} />
        </div>
      </div>
    </div>
  );
}

/* ———————————————— Backdrops ———————————————— */
function BackdropWave() {
  return (
    <svg className="pointer-events-none md:h-[55%] h-[75%] absolute left-0 top-0 w-full" viewBox="0 0 1440 160" preserveAspectRatio="none" aria-hidden>
      <path d="M0 80 C 180 140, 420 40, 720 110 C 980 170, 1180 120, 1440 160 L 1440 0 L 0 0 Z" fill={PALETTE.bg} />
      {/* white sweep near left to mimic mock */}
      <path d="M0 110 C 260 180, 560 40, 780 120 C 960 180, 1140 150, 1440 170 L 1440 160 L 0 160 Z" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

function CandlesBackdrop() {
  const N = 26;
  const arr = Array.from({ length: N });
  return (
    <svg className="pointer-events-none hidden md:block absolute bottom-[5%] right-0  w-full max-w-[1200px]" viewBox="0 0 1000 420" preserveAspectRatio="none" aria-hidden>
      <g opacity="0.5">
        <path d="M971.37 66.6836H982.53V130.698H971.37V66.6836Z" fill="#76469A" />
        <path d="M976.117 40.7229H977.766V66.6997H976.117V40.7229Z" fill="#76469A" />
        <path d="M976.117 130.698H977.766V156.675H976.117V130.698Z" fill="#76469A" />
        <path d="M941.93 58.6914H953.09V117.709H941.93V58.6914Z" fill="#76469A" />
        <path d="M946.694 32.7146H948.343V58.6914H946.694V32.7146Z" fill="#76469A" />
        <path d="M946.694 117.709H948.343V143.686H946.694V117.709Z" fill="#76469A" />
        <path d="M912.49 25.9763H923.65V42.3665H912.49V25.9763Z" fill="#76469A" />
        <path d="M917.254 0H918.903V25.9769H917.254V0Z" fill="#76469A" />
        <path d="M917.254 42.3667H918.903V68.3436H917.254V42.3667Z" fill="#76469A" />
        <path d="M883.067 109.555H894.227V147.429H883.067V109.555Z" fill="#76469A" />
        <path d="M887.815 83.5776H889.463V109.554H887.815V83.5776Z" fill="#76469A" />
        <path d="M887.815 147.429H889.463V173.406H887.815V147.429Z" fill="#76469A" />
        <path d="M853.627 95.6707H864.787V110.938H853.627V95.6707Z" fill="#76469A" />
        <path d="M858.391 69.6938H860.039V95.6707H858.391V69.6938Z" fill="#76469A" />
        <path d="M858.391 110.938H860.039V136.915H858.391V110.938Z" fill="#76469A" />
        <path d="M824.187 208.465H835.347V265.009H824.187V208.465Z" fill="#76469A" />
        <path d="M828.951 182.504H830.599V208.481H828.951V182.504Z" fill="#76469A" />
        <path d="M828.951 265.009H830.599V290.986H828.951V265.009Z" fill="#76469A" />
        <path d="M839.187 148.465H850.347V205.009H839.187V148.465Z" fill="#76469A" />
        <path d="M843.951 122.504H845.599V148.481H843.951V122.504Z" fill="#76469A" />
        <path d="M843.951 205.009H845.599V230.986H843.951V205.009Z" fill="#76469A" />
        <path d="M794.747 201.824H805.907V214.406H794.747V201.824Z" fill="#76469A" />
        <path d="M799.511 175.848H801.159V201.825H799.511V175.848Z" fill="#76469A" />
        <path d="M799.511 214.406H801.16V240.383H799.511V214.406Z" fill="#76469A" />
        <path d="M765.324 171.014H776.483V190.529H765.324V171.014Z" fill="#76469A" />
        <path d="M770.071 145.037H771.719V171.014H770.071V145.037Z" fill="#76469A" />
        <path d="M770.071 190.529H771.719V216.506H770.071V190.529Z" fill="#76469A" />
        <path d="M735.883 196.925H747.043V216.489H735.883V196.925Z" fill="#76469A" />
        <path d="M740.647 170.964H742.296V196.941H740.647V170.964Z" fill="#76469A" />
        <path d="M740.647 216.489H742.296V242.466H740.647V216.489Z" fill="#76469A" />
        <path d="M706.609 201.173H717.768V257.716H706.609V201.173Z" fill="#76469A" />
        <path d="M711.372 175.196H713.021V201.173H711.372V175.196Z" fill="#76469A" />
        <path d="M711.372 257.717H713.021V283.694H711.372V257.717Z" fill="#76469A" />
        <path d="M677.02 253.143H688.179V278.029H677.02V253.143Z" fill="#76469A" />
        <path d="M681.767 227.166H683.416V253.142H681.767V227.166Z" fill="#76469A" />
        <path d="M681.768 278.03H683.416V304.006H681.768V278.03Z" fill="#76469A" />
        <path d="M647.58 283.905H658.74V305.243H647.58V283.905Z" fill="#76469A" />
        <path d="M652.344 257.929H653.992V283.906H652.344V257.929Z" fill="#76469A" />
        <path d="M652.344 305.243H653.992V331.22H652.344V305.243Z" fill="#76469A" />
        <path d="M618.141 250.41H629.3V344.552H618.141V250.41Z" fill="#76469A" />
        <path d="M622.904 224.449H624.553V250.426H622.904V224.449Z" fill="#76469A" />
        <path d="M622.904 344.567H624.553V370.544H622.904V344.567Z" fill="#76469A" />
        <path d="M588.107 320.006H599.267V357.881H588.107V320.006Z" fill="#76469A" />
        <path d="M592.871 294.029H594.519V320.006H592.871V294.029Z" fill="#76469A" />
        <path d="M592.871 357.865H594.519V383.842H592.871V357.865Z" fill="#76469A" />
        <path d="M559.277 267.955H570.437V323.929H559.277V267.955Z" fill="#76469A" />
        <path d="M564.024 241.978H565.673V267.955H564.024V241.978Z" fill="#76469A" />
        <path d="M564.024 323.929H565.673V349.906H564.024V323.929Z" fill="#76469A" />
        <path d="M529.837 247.625H540.996V319.338H529.837V247.625Z" fill="#76469A" />
        <path d="M534.601 221.665H536.249V247.642H534.601V221.665Z" fill="#76469A" />
        <path d="M534.601 319.338H536.249V345.315H534.601V319.338Z" fill="#76469A" />
        <path d="M500.249 236.982H511.408V257.181H500.249V236.982Z" fill="#76469A" />
        <path d="M505.013 211.021H506.661V236.998H505.013V211.021Z" fill="#76469A" />
        <path d="M505.013 257.18H506.661V283.157H505.013V257.18Z" fill="#76469A" />
        <path d="M470.973 231.577H482.133V293.834H470.973V231.577Z" fill="#76469A" />
        <path d="M475.721 205.617H477.369V231.594H475.721V205.617Z" fill="#76469A" />
        <path d="M475.721 293.85H477.369V319.827H475.721V293.85Z" fill="#76469A" />
        <path d="M441.533 183.319H452.693V243.932H441.533V183.319Z" fill="#76469A" />
        <path d="M446.297 157.358H447.946V183.335H446.297V157.358Z" fill="#76469A" />
        <path d="M446.297 243.932H447.946V269.908H446.297V243.932Z" fill="#76469A" />
        <path d="M412.093 225.783H423.253V246.91H412.093V225.783Z" fill="#76469A" />
        <path d="M416.857 199.823H418.506V225.8H416.857V199.823Z" fill="#76469A" />
        <path d="M416.857 246.91H418.506V272.887H416.857V246.91Z" fill="#76469A" />
        <path d="M382.653 245.966H393.813V263.984H382.653V245.966Z" fill="#76469A" />
        <path d="M387.417 219.989H389.066V245.966H387.417V219.989Z" fill="#76469A" />
        <path d="M387.417 263.984H389.066V289.96H387.417V263.984Z" fill="#76469A" />
        <path d="M353.23 178.24H364.39V268.59H353.23V178.24Z" fill="#76469A" />
        <path d="M357.978 152.263H359.626V178.24H357.978V152.263Z" fill="#76469A" />
        <path d="M357.978 268.589H359.626V294.566H357.978V268.589Z" fill="#76469A" />
        <path d="M322.916 223.634H334.076V239.52H322.916V223.634Z" fill="#76469A" />
        <path d="M327.68 197.658H329.329V223.635H327.68V197.658Z" fill="#76469A" />
        <path d="M327.68 239.521H329.329V265.497H327.68V239.521Z" fill="#76469A" />
        <path d="M294.268 200.636H305.427V216.538H294.268V200.636Z" fill="#76469A" />
        <path d="M299.032 174.66H300.68V200.637H299.032V174.66Z" fill="#76469A" />
        <path d="M299.032 216.522H300.68V242.499H299.032V216.522Z" fill="#76469A" />
        <path d="M264.927 140.056H276.086V236.737H264.927V140.056Z" fill="#76469A" />
        <path d="M269.674 114.079H271.322V140.056H269.674V114.079Z" fill="#76469A" />
        <path d="M269.674 236.737H271.322V262.713H269.674V236.737Z" fill="#76469A" />
        <path d="M235.487 184.54H246.646V210.158H235.487V184.54Z" fill="#76469A" />
        <path d="M240.25 158.562H241.899V184.539H240.25V158.562Z" fill="#76469A" />
        <path d="M240.25 210.158H241.899V236.135H240.25V210.158Z" fill="#76469A" />
        <path d="M206.047 216.766H217.206V245.835H206.047V216.766Z" fill="#76469A" />
        <path d="M210.81 190.789H212.459V216.765H210.81V190.789Z" fill="#76469A" />
        <path d="M210.811 245.835H212.459V271.812H210.811V245.835Z" fill="#76469A" />
        <path d="M176.557 206.707H187.717V291.148H176.557V206.707Z" fill="#76469A" />
        <path d="M181.321 180.73H182.969V206.707H181.321V180.73Z" fill="#76469A" />
        <path d="M181.321 291.149H182.969V317.126H181.321V291.149Z" fill="#76469A" />
        <path d="M147.183 149.562H158.343V170.33H147.183V149.562Z" fill="#76469A" />
        <path d="M151.93 123.585H153.579V149.562H151.93V123.585Z" fill="#76469A" />
        <path d="M151.931 170.331H153.579V196.307H151.931V170.331Z" fill="#76469A" />
        <path d="M117.744 129.086H128.903V170.834H117.744V129.086Z" fill="#76469A" />
        <path d="M122.507 103.109H124.156V129.086H122.507V103.109Z" fill="#76469A" />
        <path d="M122.507 170.835H124.156V196.812H122.507V170.835Z" fill="#76469A" />
        <path d="M88.3034 106.088H99.4629V125.684H88.3034V106.088Z" fill="#76469A" />
        <path d="M93.0672 80.1111H94.7156V106.088H93.0672V80.1111Z" fill="#76469A" />
        <path d="M93.0672 125.685H94.7156V151.662H93.0672V125.685Z" fill="#76469A" />
        <path d="M58.88 113.135H70.0396V134.913H58.88V113.135Z" fill="#76469A" />
        <path d="M63.6274 87.1589H65.2758V113.136H63.6274V87.1589Z" fill="#76469A" />
        <path d="M63.6274 134.913H65.2758V160.89H63.6274V134.913Z" fill="#76469A" />
        <path d="M29.4401 35.0415H40.5995V113.623H29.4401V35.0415Z" fill="#76469A" />
        <path d="M34.2037 9.0813H35.8521V35.0582H34.2037V9.0813Z" fill="#76469A" />
        <path d="M34.2038 113.624H35.8522V139.6H34.2038V113.624Z" fill="#76469A" />
        <path d="M2.28882e-05 75.7651H11.1595V151.157H2.28882e-05V75.7651Z" fill="#76469A" />
        <path d="M4.76386 49.7881H6.41223V75.765H4.76386V49.7881Z" fill="#76469A" />
        <path d="M4.76386 151.156H6.41223V177.133H4.76386V151.156Z" fill="#76469A" />
      </g>
    </svg>

  );
}

/* ———————————————— Utils ———————————————— */
function lorem(lines = 2) {
  const t = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.';
  return Array.from({ length: lines }).map(() => t).join(' ');
}
