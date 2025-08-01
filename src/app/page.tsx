import Header from "@/components/Header/Header";
import HeroBlock from "@/components/HeroBlock/HeroBlock";
import PartnersBlock from "@/components/PartnersBlock/PartnersBlock";
import ScheduleBlock from "@/components/ScheduleBlock/ScheduleBlock";
import DescriptionBlock from "@/components/DescriptionBlock/DescriptionBlock";
import SpeakersBlock from "@/components/SpeakersBlock/SpeakersBlock";
import WhyAttendBlock from "@/components/WhyAttendBlock/WhyAttendBlock";
import ReviewBlock from "@/components/ReviewBlock/ReviewBlock";
import TimerBlock from "@/components/TimerBlock/TimerBlock";
import TariffBlock from "@/components/TariffBlock/TariffBlock";

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
          <ReviewBlock/>
          <TimerBlock/>
          <TariffBlock/>
      </>
  );
}
