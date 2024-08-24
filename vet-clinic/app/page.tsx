import LeistungenSection from '@/components/LeistungenSection/LeistungenSection';
import DocTeamSection from '@/components/DocTeamSection/DocTeamSection';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function Home() {
  return (
    <>
      {/* <h1>Ich bin die Startseite</h1> */}
      <HeroSection />
      {/* <LeistungenSection
        sliceAmount={[0, 3]}
        currentPath="/"
        styling="flex flex-col"
      />
      <DocTeamSection /> */}
    </>
  );
}
