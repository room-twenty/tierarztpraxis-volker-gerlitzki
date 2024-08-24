import LeistungenSection from '@/components/LeistungenSection/LeistungenSection';
import DocTeamSection from '@/components/DocTeamSection/DocTeamSection';
import HeroSection from '@/components/HeroSection/HeroSection';
import ClinicPhilosophy from '@/components/ClinicPhilosophy/ClinicPhilosophy';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClinicPhilosophy />
      {/* <LeistungenSection
        sliceAmount={[0, 3]}
        currentPath="/"
        styling="flex flex-col"
      /> */}
      {/* <DocTeamSection /> */}
    </>
  );
}
