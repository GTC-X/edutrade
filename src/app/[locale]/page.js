'use client'
import SliderModalPrime from "./components/SliderModal"
import { useState } from "react";
import Meta from "./components/Meta"
import EduTradeHero from "./components/newBanner"
import WhyAttendIBEvent from "./components/whyNeed"
import EventFitSection from "./components/event"
import Image from "next/image"
import IbAgendaSection from "./components/IBEvent"
import MeetSpeakersSection from "./components/meetSpeakSection"
import IbEventDetails from "./components/IbEventDetails"
import IbCtaBanner from "./components/IBBanner"
import EduTradeFooterBar from "./components/footer"
const page = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title='Trusted Institutional Liquidity Provider | GTC Prime' description='Looking for a reliable institutional liquidity provider? GTC Prime delivers deep liquidity, ultra-fast execution & FIX API for brokers, funds & asset managers.' />
            <EduTradeHero />
            <WhyAttendIBEvent setIsOpen={setIsOpen} />
            <EventFitSection setIsOpen={setIsOpen} />
            <div>
                <Image
                    src="/sectionimg.svg"
                    width={200}
                    height={72}
                    alt="GTCFX"
                    className="w-full h-[350px] object-cover cursor-pointer"
                />
            </div>
            <IbAgendaSection />
            <MeetSpeakersSection />
            <IbEventDetails />
            <IbCtaBanner />
            <EduTradeFooterBar />
            <SliderModalPrime setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    )
}

export default page