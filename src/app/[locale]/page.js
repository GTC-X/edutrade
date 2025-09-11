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
import EduTradeFooterBar from "./components/Footer";

const page = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Meta title='Edu.trade Introducing Brokers Growth Event 11th October 2025' description='Join Edu.trade at The Museum of the Future and discover how GCC Introducing Brokers can scale their business with exclusive events, insights, and opportunities.' />
            <EduTradeHero setIsOpen={setIsOpen}/>
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
            <IbAgendaSection setIsOpen={setIsOpen}/>
            <MeetSpeakersSection setIsOpen={setIsOpen}/>
            <IbEventDetails setIsOpen={setIsOpen}/>
            <IbCtaBanner setIsOpen={setIsOpen}/>
            <EduTradeFooterBar setIsOpen={setIsOpen}/>
            <SliderModalPrime setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
    )
}

export default page