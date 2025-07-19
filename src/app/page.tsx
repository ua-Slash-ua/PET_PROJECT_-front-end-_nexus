import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import ScheduleBlock from "@/components/ScheduleBlock/ScheduleBlock";
import DescriptionBlock from "@/components/DescriptionBlock/DescriptionBlock";
import SpeakersBlock from "@/components/SpeakersBlock/SpeakersBlock";
import WhyAttendBlock from "@/components/WhyAttendBlock/WhyAttendBlock";

export default function Home() {
  return (
      <>
          <Header/>
          <HeroBlock/>
          <PartnersBlock/>
          <DescriptionBlock/>
          <ScheduleBlock/>
          <SpeakersBlock/>
          <WhyAttendBlock/>
      </>
  );
}
