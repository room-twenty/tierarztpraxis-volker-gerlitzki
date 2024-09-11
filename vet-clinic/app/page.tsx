import LeistungenSection from '@/components/LeistungenSection/LeistungenSection';
import DocTeamSection from '@/components/DocTeamSection/DocTeamSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import ClinicPhilosophy from '@/components/ClinicPhilosophy/ClinicPhilosophy';
import Contact from '@/components/Contact/Contact';
import Location from '@/components/Location/Location';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClinicPhilosophy />
      <Contact />
      <Location/>
      {/* <LeistungenSection
        sliceAmount={[0, 3]}
        currentPath="/"
        styling="flex flex-col"
      /> */}
      {/* <DocTeamSection /> */}
    </>
  );
}
