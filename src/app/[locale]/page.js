import Image from "next/image";
import BannerSection from "./components/homePage/Banner";
import PartnerBanner from "./components/homePage/PartnerBanner";
import PartnerSectionTwo from "./components/homePage/PartnerBanner2";
import GoodPartner from "./components/homePage/GoodPartner";
import TalkTrendsSection from "./components/homePage/TalkTrade";
import RegulationBar from "./components/homePage/RegularBar";
import ThreeColumnSection from "./components/homePage/ThreeColumnSection";
import FooterNote from "./components/homePage/FootNote";
 
export default function Home() {
  return (
    <div >
      <BannerSection />
      <PartnerBanner />
      <PartnerSectionTwo />
      <GoodPartner />
      <TalkTrendsSection />
      <RegulationBar />
     
     </div>
  );
}
