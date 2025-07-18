import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import SpeakersBlock from "@/components/SpeakersBlock/SpeakersBlock";
import ScheduleBlock from "@/components/ScheduleBlock/ScheduleBlock";

export default function Home() {
  return (
      <>
          <Header/>
          <HeroBlock/>
          <PartnersBlock/>
          <SpeakersBlock/>
          <ScheduleBlock/>
      </>
  );
}
